module.exports = function(RED) {
	'use strict';
	var utils = require('./utils');

	/**
	* Week Schedule Node construction function
	* @param {object} config Node configuration object
	*/
	function WeekScheduleNode(config) {
		try {
			var ui = undefined;
			if(ui === undefined) {
				ui = RED.require("node-red-dashboard")(RED);
			}

			var node = this;

			var date = new Date();
			var day = date.getDay();
			if ( typeof node.days == 'undefined' ) node.days=day;
			if ( typeof node.selector == 'undefined' ) node.selector=0;
			if ( typeof node.saving == 'undefined' ) node.saving=0;
			if ( typeof node.timing == 'undefined' )
			{
				node.timing=[
					0,0,0,0,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,0,0,0,0,0,
					0,0,0,0,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,0,0,0,0,0,
					0,0,0,0,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,0,0,0,0,0,
					0,0,0,0,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,0,0,0,0,0,
					0,0,0,0,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				];
				node.saving=0;
			}

			RED.nodes.createNode(this, config);

			if (utils.checkConfig(config, node)) {
				var done = ui.addWidget({
					node: node,
					format: utils.HTML(),
					group: config.group,
					templateScope: "local",
					order: config.order,
					beforeEmit: utils.beforeEmit(node, RED),
					beforeSend: function (msg, orig) {
						if (orig) {
							utils.controls(node, orig.msg);
							return orig.msg;
						}

						if (msg.payload) {
							console.log("msg", msg);
						}
					},
					initController: utils.initController
				});

				node.on("close", done);
			}
		} catch(error) {
			console.log("While constructing WeekScheduleNode widget:", error);
		}
	}

	RED.nodes.registerType("ui_week_schedule", WeekScheduleNode);
}

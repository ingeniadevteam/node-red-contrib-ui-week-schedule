module.exports = function(RED) {
	'use strict';
	var utils = require('./utils');

	// Week Schedule Node constructor
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
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,20
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
						/********************
						* THIS IS SERVER SIDE
						********************/
						if (msg.timing) {
							console.log("msg", msg._msgid);
							// update server side node timing
							node.timing = msg.timing;
							// set topic
							msg.topic = config.name;
							// set controls
							utils.controls(node, msg, RED);
							return msg;
						}
						if (orig) {
							if (orig.msg) {
								console.log("orig.msg", orig.msg);
								// setup msg timing
								orig.msg.timing = node.timing;
								// set topic
								orig.msg.topic = config.name;
								// set controls
								utils.controls(node, orig.msg, RED);
								return orig.msg;
							}
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

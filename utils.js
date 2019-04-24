module.exports = {
    HTML: function() {
        return String.raw`
      <style>
        .thedays { vertical-align:bottom; height:48px; }
        .the2px  { background-color:black; height:2px; }
        .theblocks {width:100%; height:0%; background-color:green; }
        .greybuttons { background-color:#dddddd !important; width:48px; }
        .thetemps { font-size:70%; color:#888888 !important; }
        .smallheadings { color:black; font-size:80%; }
			</style>
      <table width="100%">
      <tr>
        <td colspan=12><center><span class="smallheadings" >Día</span></center></td>
      </tr>
      <tr>
        <td ng-click="send({payload: '29'})" colspan=12><center><span id="d0" style="color:blue;font-size:120%">LUNES</span></center></td>
      </tr>
      <tr style="height:2px">
        <td id="td29" colspan=12 style="background-color:black;height:2px;"></td>
      </tr>
      <tr>
        <td ng-click="send({payload: '5'})" class="thedays"><span id="v0" class="thetemps"></span><div id="t0" class="theblocks"></div></td>
        <td ng-click="send({payload: '6'})" class="thedays"><span id="v1" class="thetemps"></span><div id="t1" class="theblocks"></div></td>
        <td ng-click="send({payload: '7'})" class="thedays"><span id="v2" class="thetemps"></span><div id="t2" class="theblocks"></div></td>
        <td ng-click="send({payload: '8'})" class="thedays"><span id="v3" class="thetemps"></span><div id="t3" class="theblocks"></div></td>
        <td ng-click="send({payload: '9'})" class="thedays"><span id="v4" class="thetemps"></span><div id="t4" class="theblocks"></div></td>
        <td ng-click="send({payload: '10'})" class="thedays"><span id="v5" class="thetemps"></span><div id="t5" class="theblocks"></div></td>
        <td ng-click="send({payload: '11'})" class="thedays"><span id="v6" class="thetemps"></span><div id="t6" class="theblocks"></div></td>
        <td ng-click="send({payload: '12'})" class="thedays"><span id="v7" class="thetemps"></span><div id="t7" class="theblocks"></div></td>
        <td ng-click="send({payload: '13'})" class="thedays"><span id="v8" class="thetemps"></span><div id="t8" class="theblocks"></div></td>
        <td ng-click="send({payload: '14'})" class="thedays"><span id="v9" class="thetemps"></span><div id="t9" class="theblocks"></div></td>
        <td ng-click="send({payload: '15'})" class="thedays"><span id="v10" class="thetemps"></span><div id="t10" class="theblocks"></div></td>
        <td ng-click="send({payload: '16'})" class="thedays"><span id="v11" class="thetemps"></span><div id="t11" class="theblocks"></div></td>
      </tr>
      <tr style="height:2px">
        <td id="td5" class="the2px"></td>
        <td id="td6" class="the2px"></td>
        <td id="td7" class="the2px"></td>
        <td id="td8" class="the2px"></td>
        <td id="td9" class="the2px"></td>
        <td id="td10" class="the2px"></td>
        <td id="td11" class="the2px"></td>
        <td id="td12" class="the2px"></td>
        <td id="td13" class="the2px"></td>
        <td id="td14" class="the2px"></td>
        <td id="td15" class="the2px"></td>
        <td id="td16" class="the2px"></td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
      </tr>
      <tr>
        <td ng-click="send({payload: '17'})" class="thedays"><span id="v12" class="thetemps"></span><div id="t12" class="theblocks"></div></td>
        <td ng-click="send({payload: '18'})" class="thedays"><span id="v13" class="thetemps"></span><div id="t13" class="theblocks"></div></td>
        <td ng-click="send({payload: '19'})" class="thedays"><span id="v14" class="thetemps"></span><div id="t14" class="theblocks"></div></td>
        <td ng-click="send({payload: '20'})" class="thedays"><span id="v15" class="thetemps"></span><div id="t15" class="theblocks"></div></td>
        <td ng-click="send({payload: '21'})" class="thedays"><span id="v16" class="thetemps"></span><div id="t16" class="theblocks"></div></td>
        <td ng-click="send({payload: '22'})" class="thedays"><span id="v17" class="thetemps"></span><div id="t17" class="theblocks"></div></td>
        <td ng-click="send({payload: '23'})" class="thedays"><span id="v18" class="thetemps"></span><div id="t18" class="theblocks"></div></td>
        <td ng-click="send({payload: '24'})" class="thedays"><span id="v19" class="thetemps"></span><div id="t19" class="theblocks"></div></td>
        <td ng-click="send({payload: '25'})" class="thedays"><span id="v20" class="thetemps"></span><div id="t20" class="theblocks"></div></td>
        <td ng-click="send({payload: '26'})" class="thedays"><span id="v21" class="thetemps"></span><div id="t21" class="theblocks"></div></td>
        <td ng-click="send({payload: '27'})" class="thedays"><span id="v22" class="thetemps"></span><div id="t22" class="theblocks"></div></td>
        <td ng-click="send({payload: '28'})" class="thedays"><span id="v23" class="thetemps"></span><div id="t23" class="theblocks"></div></td>
        <td ng-click="send({payload: '29'})" class="thedays"><span id="v24" class="thetemps"></span><div id="t24" class="theblocks"></div></td>
      </tr>
      <tr style="height:2px">
        <td id="td17" class="the2px"></td>
        <td id="td18" class="the2px"></td>
        <td id="td19" class="the2px"></td>
        <td id="td20" class="the2px"></td>
        <td id="td21" class="the2px"></td>
        <td id="td22" class="the2px"></td>
        <td id="td23" class="the2px"></td>
        <td id="td24" class="the2px"></td>
        <td id="td25" class="the2px"></td>
        <td id="td26" class="the2px"></td>
        <td id="td27" class="the2px"></td>
        <td id="td28" class="the2px"></td>
        <td id="td29" class="the2px"></td>
      </tr>
      <tr>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
      </tr>
      <tr height="20px">
        <td colspan=2 bgcolor="#dddddd" class="smallheadings">Estado:</td>
        <td colspan=10 bgcolor="#dddddd"><center><span id="info" class="smallheadings" ></span></center></td>
      </tr>
      <tr height="10px">
        <td colspan="12"></td>
      </tr>
      <tr style="height:48px">
        <td colspan=2>
            <md-button  class="vibrate filled touched bigfont rounded greybuttons" aria-label="left" ng-click="send({payload: 'd'})">
                <md-icon md-svg-src="/ic_keyboard_arrow_left_black_24px.svg"></md-icon>
            </md-button>
        </td>
      <td colspan=2><center><span id="current" style="color:black;font-size:120%">-</span></center></td>
      <td colspan=2>
            <md-button class="vibrate filled touched bigfont rounded greybuttons" aria-label="right" ng-click="send({payload: 'u'})">
                <md-icon md-svg-src="/ic_keyboard_arrow_right_black_24px.svg"></md-icon>
            </md-button>
        </td>
        <td colspan=2>
            <md-button  class="vibrate filled touched smallfont rounded greybuttons" aria-label="copy" ng-click="send({payload: 'r'})">
                <md-icon md-svg-src="/ic_content_copy_black_24px.svg"></md-icon>
            </md-button>
        </td>
        <td colspan=2>
            <md-button  class="vibrate filled touched smallfont rounded greybuttons" aria-label="save" ng-click="send({payload: 's'})">
                <md-icon md-svg-src="/ic_save_black_24px.svg"></md-icon>
            </md-button>
        </td>
        <td colspan=2>
            <md-button  class="vibrate filled touched smallfont rounded greybuttons" aria-label="cancel" ng-click="send({payload: 'c'})">
                <md-icon md-svg-src="/ic_cancel_black_24px.svg"></md-icon>
            </md-button>
        </td>
        <td colspan=1></td>
      </tr>
      </table>
`;

	},

  /**
  * Check for that we have a config instance and that our config instance has a group selected, otherwise report an error
  * @param {object} config - The config instance
  * @param {object} node - The node to report the error on
  * @returns {boolean} `false` if we encounter an error, otherwise `true`
  */
  checkConfig: function(config, node) {
    if (!config) {
      // TODO: have to think further if it makes sense to separate these out, it isn't clear what the user can do if they encounter this besides use the explicit error to more clearly debug the code
      node.error(RED._("ui_week_schedule.error.no-config"));
      return false;
    }
    if (!config.hasOwnProperty("group")) {
      node.error(RED._("ui_week_schedule.error.no-group"));
      return false;
    }
    return true;
  },

  controls: function(node, msg) {
    // TODO: duplicate code because of execution scope, fix this shit :|
    switch (msg.payload) {
      case "u":
      if ((node.selector>4)&&(node.selector<29)) {
        if (node.timing[((node.days-1)*24)+node.selector-5] === 0) {
          node.timing[((node.days-1)*24)+node.selector-5] = 14;
          break;
        }
        node.timing[((node.days-1)*24)+node.selector-5]++;
        if (node.timing[((node.days-1)*24)+node.selector-5]>29)
        node.timing[((node.days-1)*24)+node.selector-5]=29;
        msg.foryou="Temperatura incremantada";
      }
      if (node.selector==1) {
        if (node.timing[168+(node.selector-1)]<29) {
          node.timing[168+(node.selector-1)]++;
          msg.foryou="Incrementada 1 grado la temperatura contra heladas";
        } else {
          msg.foryou="Has llegado al límite"
        };
      }
      if (node.selector==2) {
        if (node.timing[168+(node.selector-1)]<29) {
          node.timing[168+(node.selector-1)]++;
          msg.foryou="Incrementada 1 grado la temperatura de apagado de la caldera";
        } else {
          msg.foryou="Has llegado al límite";
        }
      }
      if (node.selector==29) {
        if (node.days<7) {
          node.days++; msg.foryou="Un día adelante";
        } else {
          msg.foryou="Último día de la semana";
        }
      }
      break;
      case "d":
      if ((node.selector>4)&&(node.selector<29)) {
        node.timing[((node.days-1)*24)+node.selector-5]--;
        if (node.timing[((node.days-1)*24)+node.selector-5]<14) {
          node.timing[((node.days-1)*24)+node.selector-5]=0;
        }
        msg.foryou="Temperatura decrementada";
      }
      if (node.selector==1) {
        if (node.timing[168+(node.selector-1)]>12) {
          node.timing[168+(node.selector-1)]--;
          msg.foryou="Decrememtada 1 grado la temperatura contra heladas";
        } else {
          msg.foryou="Has llegado al límite";
        }
      }
      if (node.selector==2) {
        if (node.timing[168+(node.selector-1)]>12) {
          node.timing[168+(node.selector-1)]--;
          msg.foryou="Decrememtada 1 grado la temperatura de apagado de la caldera";
        } else {
          msg.foryou="Has llegado al límite";
        }
      }
      if (node.selector==29) {
        if (node.days>1) { node.days--;  msg.foryou="Un día atrás";} else msg.foryou="Primer día de la semana";
      }
      break;
      case 'r':
      if ((node.selector>=5)&&(node.selector<28)) {
        node.timing[((node.days-1)*24)+node.selector-4]=node.timing[((node.days-1)*24)+node.selector-5];
        node.selector++;
        msg.foryou="Configuración copiada a la siguiente hora";
      }
      if ((node.selector==29)&&(node.days<7)) {
        for (var a=0;a<24;a++) {
          node.timing[((node.days)*24)+a]=node.timing[((node.days-1)*24)+a];
        }
        node.days++;
        msg.foryou="Copiada la configuración del día completo";
      }
      break;
      case 's': node.saving=0;
        msg.foryou="Configuración guardada";
      break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '10':
      case '11':
      case '12':
      case '13':
      case '14':
      case '15':
      case '16':
      case '17':
      case '18':
      case '19':
      case '20':
      case '21':
      case '22':
      case '23':
      case '24':
      case '25':
      case '26':
      case '27':
      case '28':
      case '29': node.selector=parseInt(msg.payload);
        if (msg.payload=='1')
          msg.foryou="Seleccionada la temperatura contra heladas";
        else if (msg.payload=='2')
          msg.foryou="Temperatura de apagado de la caldera";
        else if (msg.payload=='29')
          msg.foryou="Día de la semana";
        else
          msg.foryou="Seleccionado el periodo horario " + (parseInt(msg.payload)-4);
      break;
      case 'c': msg.payload="anything";
        msg.foryou="Cambios cancelados";
        // node.send([null,null,msg]);
    }

    msg.timing=node.timing;
    msg.days=node.days;
    msg.selector=node.selector;
  },


  beforeEmit: function(node, RED) {
    return function(msg, value) {

      console.log("beforeEmit", msg);

      switch (msg.payload) {
        case "u":
          if ((node.selector>4)&&(node.selector<29)) {
            if (node.timing[((node.days-1)*24)+node.selector-5] === 0) {
              node.timing[((node.days-1)*24)+node.selector-5] = 14;
              break;
            }
            node.timing[((node.days-1)*24)+node.selector-5]++;
            if (node.timing[((node.days-1)*24)+node.selector-5]>29)
            node.timing[((node.days-1)*24)+node.selector-5]=29;
            msg.foryou="Temperatura incremantada";
          }
          if (node.selector==1) {
            if (node.timing[168+(node.selector-1)]<29) {
              node.timing[168+(node.selector-1)]++;
              msg.foryou="Incrementada 1 grado la temperatura contra heladas";
            } else {
              msg.foryou="Has llegado al límite"
            };
          }
          if (node.selector==2) {
            if (node.timing[168+(node.selector-1)]<29) {
              node.timing[168+(node.selector-1)]++;
              msg.foryou="Incrementada 1 grado la temperatura de apagado de la caldera";
            } else {
              msg.foryou="Has llegado al límite";
            }
          }
          if (node.selector==29) {
            if (node.days<7) {
              node.days++; msg.foryou="Un día adelante";
            } else {
              msg.foryou="Último día de la semana";
            }
          }
        break;
        case "d":
          if ((node.selector>4)&&(node.selector<29)) {
            node.timing[((node.days-1)*24)+node.selector-5]--;
            if (node.timing[((node.days-1)*24)+node.selector-5]<14) {
              node.timing[((node.days-1)*24)+node.selector-5]=0;
            }
            msg.foryou="Temperatura decrementada";
          }
          if (node.selector==1) {
            if (node.timing[168+(node.selector-1)]>12) {
              node.timing[168+(node.selector-1)]--;
              msg.foryou="Decrememtada 1 grado la temperatura contra heladas";
            } else {
              msg.foryou="Has llegado al límite";
            }
          }
          if (node.selector==2) {
            if (node.timing[168+(node.selector-1)]>12) {
              node.timing[168+(node.selector-1)]--;
              msg.foryou="Decrememtada 1 grado la temperatura de apagado de la caldera";
            } else {
              msg.foryou="Has llegado al límite";
            }
          }
          if (node.selector==29) {
            if (node.days>1) { node.days--;  msg.foryou="Un día atrás";} else msg.foryou="Primer día de la semana";
          }
        break;
        case 'r':
          if ((node.selector>=5)&&(node.selector<28)) {
            node.timing[((node.days-1)*24)+node.selector-4]=node.timing[((node.days-1)*24)+node.selector-5];
            node.selector++;
            msg.foryou="Configuración copiada a la siguiente hora";
          }
          if ((node.selector==29)&&(node.days<7)) {
            for (var a=0;a<24;a++) {
              node.timing[((node.days)*24)+a]=node.timing[((node.days-1)*24)+a];
            }
            node.days++;
            msg.foryou="Copiada la configuración del día completo";
          }
        break;
        case 's': node.saving=0;
          msg.foryou="Configuración guardada";
        break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
        case '20':
        case '21':
        case '22':
        case '23':
        case '24':
        case '25':
        case '26':
        case '27':
        case '28':
        case '29': node.selector=parseInt(msg.payload);
          if (msg.payload=='1')
            msg.foryou="Seleccionada la temperatura contra heladas";
          else if (msg.payload=='2')
            msg.foryou="Temperatura de apagado de la caldera";
          else if (msg.payload=='29')
            msg.foryou="Día de la semana";
          else
            msg.foryou="Seleccionado el periodo horario " + (parseInt(msg.payload)-4);
        break;
        case 'c': msg.payload="anything";
        msg.foryou="Cambios cancelados";
        // node.send([null,null,msg]);
      }

      msg.timing=node.timing;
      msg.days=node.days;
      msg.selector=node.selector;

      return {
        msg
      };
    }
  },

  initController: function($scope) {
    $scope.flag = true;

    var thedays = ["LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO","DOMINGO"];
    var last = 1;

    var bar = (mm,val) => {
      if (val==0 ) { $(mm).height("0%");  $(mm).css('background-color', '#000000'); } //black
      if (val==14) { $(mm).height("12%"); $(mm).css('background-color', '#0000ff'); } //blue
      if (val==15) { $(mm).height("16%"); $(mm).css('background-color', '#0055ff'); }
      if (val==16) { $(mm).height("20%"); $(mm).css('background-color', '#00aaff'); }
      if (val==17) { $(mm).height("24%"); $(mm).css('background-color', '#00dddd'); } // cyan
      if (val==18) { $(mm).height("28%"); $(mm).css('background-color', '#00ffaa'); }
      if (val==19) { $(mm).height("32%"); $(mm).css('background-color', '#00ff55'); }
      if (val==20) { $(mm).height("36%"); $(mm).css('background-color', '#00ff00'); } // green
      if (val==21) { $(mm).height("40%"); $(mm).css('background-color', '#55ff00'); }
      if (val==22) { $(mm).height("44%"); $(mm).css('background-color', '#aaff00'); }
      if (val==23) { $(mm).height("48%"); $(mm).css('background-color', '#dddd00'); } // yellow
      if (val==24) { $(mm).height("52%"); $(mm).css('background-color', '#ffaa00'); }
      if (val==25) { $(mm).height("56%"); $(mm).css('background-color', '#ff5500'); }
      if (val==26) { $(mm).height("60%"); $(mm).css('background-color','#ff0000'); } // red
      if (val==27) { $(mm).height("64%"); $(mm).css('background-color','#ff0000'); } // red
      if (val==28) { $(mm).height("68%"); $(mm).css('background-color','#ff0000'); } // red
      if (val==29) { $(mm).height("72%"); $(mm).css('background-color','#ff0000'); } // red
    };

    stat = (text) => {
      $("#info").text(text);
      var tm=setTimeout(function(){ $("#info").text(String.fromCharCode(0xD83D, 0xDE04)); clearTimeout(tm);}, 3000);
    };

    var selec = (val,sta) => {
      var w="#td"+val;
      if (sta) $(w).css('background-color','magenta'); else $(w).css('background-color','black');
    };

    var updateUI = (msg) => {
      selec(last,0); last=msg.selector; selec(last,1);
      for (var x=0; x<24; x++) {
        var w="#t"+x; bar(w,msg.timing[((msg.days-1)*24)+x]);
        var v="#v"+x; $(v).text(msg.timing[((msg.days-1)*24)+x])
      }
      for (var x=0; x<2; x++) {
        var w="#s"+x; $(w).text(msg.timing[168+x]);
      }
      $("#d0").text(thedays[msg.days-1]);
      if ((last>4) &&(last<29)) {
        $("#current").text(msg.timing[((msg.days-1)*24)+last-5]);
      }
      else {
        $("#current").text("-");
      }
      if (msg.foryou!="") {
        stat(msg.foryou);
      }
    };

    var update = (msg) => {
      console.log(">>>", msg);
      console.log(">>>", $scope);
      if (!msg) {
        return;
      }
      // updateUI
      updateUI(msg);
    };
    $scope.$watch('msg', update);
  }
};

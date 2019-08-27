define({ 
  
  preshow:function(){
    br_data = '<!DOCTYPE html><html><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/><script type="text/javascript"> var canvas, ctx, cWidth, cHeight, flag = false, prevX = 0, currX = 0, prevY = 0, currY = 0, dot_flag = false, sColor = "black", sWidth = 2, img1; function init() { canvas = document.getElementById("sketchpad");canvas.width = canvas.parentNode.offsetWidth;canvas.height = canvas.parentNode.offsetHeight; if (canvas.getContext) ctx = canvas.getContext("2d");if (ctx) {cWidth = canvas.width;cHeight = canvas.height; canvas.addEventListener("mousedown", handleEvent, false); canvas.addEventListener("mousemove", handleEvent, false); window.addEventListener("mouseup", handleEvent, false); canvas.addEventListener("touchstart", handleEvent, false); canvas.addEventListener("touchmove", handleEvent, false); canvas.addEventListener("touchend", handleEvent, false); } }function getQueryStringValue (key) { return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); } function handleEvent(e){var type = e.type;switch(e.type){case "touchstart":case "mousedown":onTouchStart(e);break;case "touchmove": case "mousemove": onTouchMove(e); break;case "touchend":case "touchcancel":case "mouseup":case "mouseout":onTouchEnd(e); break;}}function onTouchStart(e){var touch = e.touches && e.touches[0] || e;prevX = currX; prevY = currY; currX = touch.clientX - canvas.offsetLeft; currY = touch.clientY - canvas.offsetTop; flag = true; dot_flag = true; if (dot_flag) { ctx.beginPath(); ctx.fillStyle = sColor; ctx.fillRect(currX, currY, 2, 2); ctx.closePath(); dot_flag = false; }e.preventDefault();}function onTouchMove(e){var touch = e.touches && e.touches[0] || e;if (flag) { prevX = currX; prevY = currY; currX = touch.clientX - canvas.offsetLeft; currY = touch.clientY - canvas.offsetTop; draw(); }e.preventDefault();}function onTouchEnd(e){flag = false;}function draw(){ctx.beginPath();ctx.moveTo(prevX, prevY);ctx.lineTo(currX, currY);ctx.strokeStyle = sColor;ctx.lineWidth = sWidth;ctx.stroke();ctx.closePath();}</script><style>#sketchpadapp { -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;position: absolute;width:100%;height:100%;}#wrapper{width:100%;height:100%;}.rightside { float:left; margin-left:0px;}#sketchpad { border:0px solid #888; border-radius:0px; position:relative; }</style></head><body onload="init()"> <div id="sketchpadapp"><div id="wrapper"><canvas id="sketchpad"></canvas></div> </div></body></html>';
    this.view.browserSignature.htmlString = br_data;
    this.view.btnDone.skin = "skinDeActive";
    this.view.btnDone.focusSkin = "skinDeActive";
    this.view.menuDFX.left = "-100%";
  },
  
  openHam:function(){
        this.view.menuDFX.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"left": "0%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":""
    			}
            );  
      },
      closeHam:function(){
        this.view.menuDFX.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"left": "-100%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":""
    			}
            );  
      },
  
  
  enablebtnContinue:function(){
    this.view.btnDone.skin = "skinActive";
    this.view.btnDone.focusSkin = "skinActive";
  },
  onClickContinue:function(){
    if(this.view.btnDone.skin == "skinActive"){
      var param = {"key":"Remove Hasp"};
      var navObj = new kony.mvc.Navigation("frmProcedureCompleteSummary");
      navObj.navigate(param);
    }
  }

 //Type your controller code here 

 });
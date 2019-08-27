define({ 

 //Type your controller code here 
  preShowFun:function(){
    br_data = '<!DOCTYPE html><html><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/><script type="text/javascript"> var canvas, ctx, cWidth, cHeight, flag = false, prevX = 0, currX = 0, prevY = 0, currY = 0, dot_flag = false, sColor = "black", sWidth = 2, img1; function init() { canvas = document.getElementById("sketchpad");canvas.width = canvas.parentNode.offsetWidth;canvas.height = canvas.parentNode.offsetHeight; if (canvas.getContext) ctx = canvas.getContext("2d");if (ctx) {cWidth = canvas.width;cHeight = canvas.height; canvas.addEventListener("mousedown", handleEvent, false); canvas.addEventListener("mousemove", handleEvent, false); window.addEventListener("mouseup", handleEvent, false); canvas.addEventListener("touchstart", handleEvent, false); canvas.addEventListener("touchmove", handleEvent, false); canvas.addEventListener("touchend", handleEvent, false); } }function getQueryStringValue (key) { return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); } function handleEvent(e){var type = e.type;switch(e.type){case "touchstart":case "mousedown":onTouchStart(e);break;case "touchmove": case "mousemove": onTouchMove(e); break;case "touchend":case "touchcancel":case "mouseup":case "mouseout":onTouchEnd(e); break;}}function onTouchStart(e){var touch = e.touches && e.touches[0] || e;prevX = currX; prevY = currY; currX = touch.clientX - canvas.offsetLeft; currY = touch.clientY - canvas.offsetTop; flag = true; dot_flag = true; if (dot_flag) { ctx.beginPath(); ctx.fillStyle = sColor; ctx.fillRect(currX, currY, 2, 2); ctx.closePath(); dot_flag = false; }e.preventDefault();}function onTouchMove(e){var touch = e.touches && e.touches[0] || e;if (flag) { prevX = currX; prevY = currY; currX = touch.clientX - canvas.offsetLeft; currY = touch.clientY - canvas.offsetTop; draw(); }e.preventDefault();}function onTouchEnd(e){flag = false;}function draw(){ctx.beginPath();ctx.moveTo(prevX, prevY);ctx.lineTo(currX, currY);ctx.strokeStyle = sColor;ctx.lineWidth = sWidth;ctx.stroke();ctx.closePath();}</script><style>#sketchpadapp { -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;position: absolute;width:100%;height:100%;}#wrapper{width:100%;height:100%;}.rightside { float:left; margin-left:0px;}#sketchpad { border:0px solid #888; border-radius:0px; position:relative; }</style></head><body onload="init()"> <div id="sketchpadapp"><div id="wrapper"><canvas id="sketchpad"></canvas></div> </div></body></html>';
    this.view.brwSign.htmlString = br_data;
    this.view.Checklist.textNumChecklist = "0/1";
    this.view.Checklist.src = "unlock_grey.png";
    this.view.Checklist.skin1 = "skinLblNormal100";
    this.view.Checklist1.textNumChecklist = "0/1";
    this.view.Checklist1.src = "unlock_grey.png";
    this.view.Checklist1.skin1 = "skinLblNormal100";
    this.view.Checklist2.textNumChecklist = "0/1";
    this.view.Checklist2.src = "unlock_grey.png";
    this.view.Checklist2.skin1 = "skinLblNormal100";
    this.view.flxLockSuccess.setVisibility(false);
    this.view.flxScrlLockSign.setVisibility(false);
    this.view.flxScrllLockOut.setVisibility(false);
    this.view.flxVerifyShutdown.setVisibility(false);
    this.view.flxPerformLockOuts.setVisibility(false);
    this.view.flxScrlContent.setVisibility(true);
    this.view.headerWithMenu.isVisibleLabelHeader = true;
    this.view.headerWithMenu.isVisibleLogo = false;
    this.view.menuDFX.left = "-100%";
    this.view.btnNextStep.skin = "sknBtnGreyedOut";
    this.view.btnNextStep.focusSkin = "sknBtnGreyedOut";
    
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
  
onClickCheckBoxVerifyShutdown:function(){
  if(this.view.CheckWithStrike4.src == "checkboxf.png")
    {
      this.view.CheckWithStrike4.src = "checkboxn.png";
      this.view.bnDone.skin = "sknBtnGreyedOut";
      this.view.bnDone.focusSkin = "sknBtnGreyedOut";
      this.view.bnDone.pressedSkin = "sknBtnGreyedOut";
      this.view.CheckWithStrike4.textRtxt = "<p>Mark as Done</p>";
    }
  else if(this.view.CheckWithStrike4.src == "checkboxn.png")
    {
      this.view.CheckWithStrike4.src = "checkboxf.png";
      this.view.bnDone.skin = "sknBtnBlueBGN";
      this.view.bnDone.focusSkin = "sknBtnBlueBGN";
      this.view.bnDone.pressedSkin = "sknBtnBlueBGN";
      this.view.CheckWithStrike4.textRtxt = "<p><strike>Mark as Done</strike></p>";
    }
},
  onClickShutDownCheckList:function(){
    if(this.view.flxVerifyShutdown.isVisible){
    this.view.flxVerifyShutdown.setVisibility(false);
      this.view.flxScrlContent.setVisibility(true);
    }
    else
      {
        this.view.CheckWithStrike4.textRtxt = "<p>Mark as Done</p>";
        this.view.CheckWithStrike4.src = "checkboxn.png";
        this.view.bnDone.skin = "sknBtnGreyedOut";
        this.view.bnDone.focusSkin = "sknBtnGreyedOut";
        this.view.bnDone.pressedSkin = "sknBtnGreyedOut";
        this.view.flxVerifyShutdown.setVisibility(true);
        this.view.flxScrlContent.setVisibility(false);
      }
  },
  onClickCheckList1:function(){
    this.view.Checklist1.textNumChecklist = "1/1";
    this.view.Checklist1.src = "unlock_blue.png";
    this.view.Checklist1.skin1 = "slnLblBlue100N";
  },
  onClickCheckList2:function(){
    this.view.Checklist2.textNumChecklist = "1/1";
    this.view.btnNextStep.skin = "sknBtnBlueBGN";
    this.view.btnNextStep.focusSkin = "sknBtnBlueBGN";
    this.view.Checklist2.src = "unlock_blue.png";
    this.view.Checklist2.skin1 = "slnLblBlue100N";
  },
  
  onClickDoneVerifyShutdown:function(){
    if(this.view.bnDone.skin == "sknBtnBlueBGN")
      {
          this.view.Checklist.textNumChecklist = "1/1";
          this.view.Checklist.src = "unlock_blue.png";
          this.view.Checklist.skin1 = "slnLblBlue100N";
          this.view.flxVerifyShutdown.setVisibility(false);
          this.view.flxScrlContent.setVisibility(true);
      }
  },
  onClickNextStep:function(){
    if(this.view.btnNextStep.skin == "sknBtnBlueBGN"){
        this.view.lblLineStep1.skin = "sknLineBlue";
        this.view.lblS1.skin = "CopyskinFocusNum0be3f1b1052b140";
        this.view.lblS2.skin = "CopyskinFocusNum0be3f1b1052b140";
        this.view.lblVerification.skin = "sknLblBlack100N";
        this.view.lblLockOut.skin = "sknLblBlue100Bold";
        this.view.CheckWithStrike.src = "checkboxn.png";
        this.view.CheckWithStrike.textRtxt = "<p>Apply the Lock</p>";
        this.view.CheckWithStrike1.src = "checkboxn.png";
        this.view.CheckWithStrike1.textRtxt = "<p>Apply the Tag</p>";
        this.view.CheckWithStrike2.src = "checkboxn.png";
        this.view.CheckWithStrike2.textRtxt = "<p>Test Devices</p>";
        this.view.CheckWithStrike3.src = "checkboxn.png";
        this.view.CheckWithStrike3.textRtxt = "<p>Review Tag</p>";
        this.view.flxScanBarcode.skin = "sknFlxGreyBG";
        this.view.lblScanBarcode.skin = "sknLblC9C9C9110N";
        this.view.flxScrllLockOut.setVisibility(true);
    }
  },
  
  toggleApplyLock:function(componentName,textVal){
    if(this.view.CheckWithStrike.src == "checkboxf.png"){
      this.view.CheckWithStrike.src = "checkboxn.png";
      this.view.CheckWithStrike.textRtxt = "<p>Apply the Lock</p>";
      this.view.bnAddLockDone.skin = "sknBtnGreyedOut";
      this.view.bnAddLockDone.focusSkin = "sknBtnGreyedOut";
      this.view.bnAddLockDone.pressedSkin = "sknBtnGreyedOut";
    }
    else
      {
      this.view.CheckWithStrike.src = "checkboxf.png";
      this.view.CheckWithStrike.textRtxt = "<p><strike>Apply the Lock</strike></p>";
      }
  },
  toggleApplyTag:function(){
    if(this.view.CheckWithStrike1.src =="checkboxf.png"){
      this.view.CheckWithStrike1.src = "checkboxn.png";
      this.view.CheckWithStrike1.textRtxt = "<p>Apply the Tag</p>";
      this.view.bnAddLockDone.skin = "sknBtnGreyedOut";
      this.view.bnAddLockDone.focusSkin = "sknBtnGreyedOut";
      this.view.bnAddLockDone.pressedSkin = "sknBtnGreyedOut";
    }
    else
      {
        this.view.CheckWithStrike1.src = "checkboxf.png";
        this.view.CheckWithStrike1.textRtxt = "<p><strike>Apply the Tag</strike></p>";
      }
  },
  toggleTestDevices:function(){
    if(this.view.CheckWithStrike2.src == "checkboxf.png"){
        this.view.CheckWithStrike2.src = "checkboxn.png";
        this.view.CheckWithStrike2.textRtxt = "<p>Test Devices</p>";
        this.view.bnAddLockDone.skin = "sknBtnGreyedOut";
        this.view.bnAddLockDone.focusSkin = "sknBtnGreyedOut";
        this.view.bnAddLockDone.pressedSkin = "sknBtnGreyedOut";
    }
    else{
      this.view.CheckWithStrike2.src = "checkboxf.png";
      this.view.CheckWithStrike2.textRtxt = "<p><strike>Test Devices</strike></p>";
    }
  },
  toggleReviewTag:function(){
    if(this.view.CheckWithStrike3.src == "checkboxf.png"){
      this.view.CheckWithStrike3.src = "checkboxn.png";
      this.view.CheckWithStrike3.textRtxt = "<p>Review Tag</p>";
      this.view.bnAddLockDone.skin = "sknBtnGreyedOut";
      this.view.bnAddLockDone.focusSkin = "sknBtnGreyedOut";
      this.view.bnAddLockDone.pressedSkin = "sknBtnGreyedOut";
    }
    else
      {
      this.view.CheckWithStrike3.src = "checkboxf.png";
      this.view.CheckWithStrike3.textRtxt = "<p><strike>Review Tag</strike></p>";
      this.view.bnAddLockDone.skin = "sknBtnBlueBGN";
      this.view.bnAddLockDone.focusSkin = "sknBtnBlueBGN";
      this.view.bnAddLockDone.pressedSkin = "sknBtnBlueBGN";
      this.view.flxScanBarcode.skin = "sknFlxBlueBGWRoundedCrnr";
      this.view.lblScanBarcode.skin = "sknLblWhiteN110";
      }
  },
  onClickDoneLockOut:function(){
    if(this.view.bnAddLockDone.skin == "sknBtnBlueBGN"){
      this.view.flxScrlLockSign.setVisibility(true);
    }
  },
  onSaveSignSucc:function(){
    this.view.bnDone1.skin = sknBtnBlueBGN;
    this.view.bnDone1.focusSkin = sknBtnBlueBGN;
    this.view.bnDone1.pressedSkin = sknBtnBlueBGN;
  },
  onClickDoneAfterSign:function(){
    this.view.flxLockSuccess.setVisibility(true);
    this.view.headerWithMenu.isVisibleLabelHeader = true;
    this.view.headerWithMenu.isVisibleLogo = false;
    this.view.headerWithMenu.text = "Mechanical Power Press";
    this.view.flxScrlLockSign.setVisibility(false);
  },
  onClickBackFromSign:function(){
    //alert("*****");
    this.view.flxScrlLockSign.setVisibility(false);
    this.view.flxScrllLockOut.setVisibility(true);
  },
  navToProjects:function(){
    var navObj = new kony.mvc.Navigation("frmDashboard");
        navObj.navigate();
  },
  
  showPerformedLockOuts:function(){
    if(this.view.flxPerformLockOuts.isVisible)
      {
    this.view.flxPerformLockOuts.setVisibility(false);
    }
    else if(!(this.view.flxPerformLockOuts.isVisible))
      {
    this.view.flxPerformLockOuts.setVisibility(true);
    }
  }
 });
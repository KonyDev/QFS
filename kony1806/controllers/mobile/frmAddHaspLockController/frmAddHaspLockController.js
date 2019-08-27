var gblSelectedIndex = 0;
define({ 

 //Type your controller code here 
  preShowFun:function(){
    self = this;
    this.view.flxScrlContent.setVisibility(true);
    this.view.flxVerifyShutdown.setVisibility(false);
    this.view.flxLockOutDetails.setVisibility(false);
    this.view.flxScrlIsolationPoints.setVisibility(false);
    this.view.flexProcedure.setVisibility(false);
    this.view.flxVerifyIsolation.setVisibility(false);
    this.view.Checklist.textNumChecklist = "0/1";
    this.view.Checklist.src = "unlock_grey.png";
    this.view.Checklist.skin1 = "skinLblNormal100";
    this.view.Checklist1.textNumChecklist = "2/3";
    this.view.Checklist1.src = "unlock_grey.png";
    this.view.Checklist1.skin1 = "skinLblNormal100";
    this.tempData = [
      [
        {
          "lblIsolationPoint":"Isolation Point 1",
          "lblVerifyIsolation":"Verify Isolation",
          "lblVerifyCheckList":"Tap to view checklist",
          "imgCheck":"unlock_grey.png",
          "lblNumberCheckList":"0/1",
        },[
          {
            "lblName":"E-1",
            "imgProfile":"group2.png",
            "imgCheck":"unlock_grey.png",
            "lblNumberCheckList":"0/7",
            "imgType":"power.png",
            "lblTypeDet":"480 VAC Single Feed",
            "imgLock":"lock_1.png",
            "lblLockCount":"2"
          },
          {
            "lblName":"W-1",
            "imgProfile":"group2.png",
            "imgCheck":"unlock_grey.png",
            "lblNumberCheckList":"0/7",
            "imgType":"wave.png",
            "lblTypeDet":"480 VAC Single Feed",
            "imgLock":"lock_1.png",
            "lblLockCount":"2"
          }
        ]
      ],[
        {
          "lblIsolationPoint":"Isolation Point 2",
          "lblVerifyIsolation":"Verify Isolation",
          "lblVerifyCheckList":"Tap to view checklist",
          "imgCheck":"unlock_grey.png",
          "lblNumberCheckList":"0/1",
        },[
          {
            "lblName":"E-1",
            "imgProfile":"group2.png",
            "imgCheck":"unlock_grey.png",
            "lblNumberCheckList":"0/7",
            "imgType":"power.png",
            "lblTypeDet":"480 VAC Single Feed",
            "imgLock":"lock_1.png",
            "lblLockCount":"2"
          },
          {
            "lblName":"W-1",
            "imgProfile":"group2.png",
            "imgCheck":"unlock_grey.png",
            "lblNumberCheckList":"0/7",
            "imgType":"wave.png",
            "lblTypeDet":"480 VAC Single Feed",
            "imgLock":"lock_1.png",
            "lblLockCount":"2"
          }
        ]
      ]
    ];
    this.view.segIsolnPoints.setData(this.tempData);
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
    if(this.view.flxLockOutDetails.isVisible){
      this.view.flxLockOutDetails.setVisibility(false);
    }
    else{
      this.view.flxLockOutDetails.setVisibility(true);
    }
  },
  onDoneShutDown:function(){
    this.view.Checklist.textNumChecklist = "1/1";
    this.view.Checklist.src = "unlock_blue.png";
    this.view.flxVerifyShutdown.setVisibility(false);
    this.view.flxScrlContent.setVisibility(true);
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
 onDoneLockOut:function(){
    this.view.Checklist1.textNumChecklist = "3/3";
    this.view.Checklist1.src = "unlock_blue.png";
    this.view.btnNextStep.skin = "sknBtnBlueBGN";
    this.view.btnNextStep.focusSkin = "sknBtnBlueBGN";
    this.view.btnNextStep.pressedSkin = "sknBtnBlueBGN";
    this.onClickCheckList1();
 }, 
onClickNextStep:function(){
        this.view.lblLineStep1.skin = "sknLineBlue";
        this.view.lblS1.skin = "CopyskinFocusNum0be3f1b1052b140";
        this.view.lblS2.skin = "CopyskinFocusNum0be3f1b1052b140";
        this.view.lblVerification.skin = "sknLblBlack100N";
        this.view.lblLockOut.skin = "sknLblBlue100Bold";
  this.view.flxScrlIsolationPoints.setVisibility(true);
  this.view.flxScrlContent.setVisibility(false);
},
  
  showVerifyIsolation:function(params,selectedIndex){
    var currCheckImgSrc = "";
    gblSelectedIndex = selectedIndex;
    currCheckImgSrc = this.tempData[selectedIndex][0]["imgCheck"];
    var isolationText = "";
    if(currCheckImgSrc == "unlock_grey.png"){
      this.view.flxVerifyIsolation.setVisibility(true);
      this.view.headerWithButtons2.text = this.tempData[selectedIndex][0]["lblIsolationPoint"];
      this.view.CheckWithStrike.textRtxt = "<p>Mark as Done</p>";
      this.view.CheckWithStrike.src = "checkboxn.png";
      this.view.bnIsolationDone.skin = "sknBtnGreyedOut";
      this.view.bnIsolationDone.focusSkin = "sknBtnGreyedOut";
      this.view.bnIsolationDone.pressedSkin = "sknBtnGreyedOut";
    }
  },
  hideVerifyIsolation:function(){
    this.view.flxVerifyIsolation.setVisibility(false);
  },
  markIsolationAsDone:function(){
    if(this.view.CheckWithStrike.src == "checkboxf.png"){
        this.view.CheckWithStrike.textRtxt = "<p>Mark as Done</p>";
        this.view.CheckWithStrike.src = "checkboxn.png";
        this.view.bnIsolationDone.skin = "sknBtnGreyedOut";
        this.view.bnIsolationDone.focusSkin = "sknBtnGreyedOut";
        this.view.bnIsolationDone.pressedSkin = "sknBtnGreyedOut";
    }else{
        this.view.CheckWithStrike.textRtxt = "<p><strike>Mark as Done</strike></p>";
        this.view.CheckWithStrike.src = "checkboxf.png";
        this.view.bnIsolationDone.skin = "sknBtnBlueBGN";
        this.view.bnIsolationDone.focusSkin = "sknBtnBlueBGN";
        this.view.bnIsolationDone.pressedSkin = "sknBtnBlueBGN";
    }
  },
  onPerformIsolation:function(){
    this.tempData[gblSelectedIndex][0]["imgCheck"] = "unlock_blue.png";
    this.view.segIsolnPoints.removeAll();
    this.view.segIsolnPoints.setData(this.tempData);
    this.hideVerifyIsolation();
  },
  onSegClick:function(){
    alert("row iss--->"+JSON.stringify(this.view.segIsolnPoints.selectedRowItems[0]));
  }
 });
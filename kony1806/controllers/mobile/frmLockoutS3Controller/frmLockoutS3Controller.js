define({ 
  preshow:function(){
    this.view.Checklist.src = "unlock_grey.png";
    this.view.btnComplete.skin = "skinDeActive";
    this.view.btnComplete.focusSkin = "skinDeActive";
    this.view.lblNotification3.isVisible = true;
    this.view.flexVerificationProcedure.isVisible = false;
    this.view.btnComplete.text = "Complete E-1 Lock-Out";
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
  showVerificationProcedure:function(){
    if(this.view.Checklist.src == "unlock_grey.png"){
      this.view.Check1.textRtxt = "Verify power";
      this.view.Check2.textRtxt = "Attempt Restart";
      this.view.Check3.textRtxt = "Safeguards";
      this.view.Check1.src = "checkboxn.png";
      this.view.Check2.src = "checkboxn.png";
      this.view.Check3.src = "checkboxn.png";
      this.view.btnDoneVerificationProcedure.skin = "skinDeActive";
      this.view.btnDoneVerificationProcedure.focusSkin = "skinDeActive";
      this.view.lblNotification3.isVisible = true;
      
    }
    this.view.flexVerificationProcedure.isVisible = true;
  },
  checkSelect:function(ind){
    eval("this.view.Check"+ind).src = "checkboxf.png";
    eval("this.view.Check"+ind).textRtxt = "<strike>"+eval("this.view.Check"+ind).textRtxt+"</strike>";
    this.verifyCompletion();
  },
  verifyCompletion:function(){
    if(this.view.Check1.src == "checkboxf.png" && this.view.Check2.src == "checkboxf.png" && this.view.Check3.src == "checkboxf.png"){
      this.view.btnDoneVerificationProcedure.skin = "skinActive";
      this.view.btnDoneVerificationProcedure.focusSkin = "skinActive";
      this.view.lblNotification3.isVisible = false;
    }
  },
  onDoneVerificationProcedure:function(){
    if(this.view.btnDoneVerificationProcedure.skin == "skinActive"){
      this.view.Checklist.textNumChecklist = "3/3";
      this.view.Checklist.src = "unlock_blue.png";
      this.view.Checklist.textTap = "Tap to Edit";
      this.view.btnComplete.skin = "skinActive";
      this.view.btnComplete.focusSkin = "skinActive";
      this.view.btnComplete.text = "Complete Procedure";
      this.view.flexVerificationProcedure.isVisible = false;
      
    }
  },
  closeverificationProcedure:function(){
    this.view.flexVerificationProcedure.isVisible = false;
  },
  onDoneStep3:function(){
    if(this.view.btnComplete.skin == "skinActive"){
      var navobj = new kony.mvc.Navigation("frmPendingLockoutSummary");
      navobj.navigate();
    }
  }
  
  
  
  
  

 //Type your controller code here 

 });
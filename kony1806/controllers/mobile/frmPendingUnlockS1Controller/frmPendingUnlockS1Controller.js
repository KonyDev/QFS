define({ 
  
  preshow:function(){
    this.view.flexShutdownProcedure.isVisible = false;
    this.view.ChecklistInspectMachine.src = "unlock_grey.png";
    this.view.ChecklistCheckArea.src = "unlock_grey.png";
    this.view.btnDone.skin = "skinDeActive";
    this.view.btnDone.focusSkin = "skinDeActive";
    this.view.ChecklistCheckArea.textNumChecklist = "0/1";
    this.view.ChecklistInspectMachine.textNumChecklist = "0/3";
    this.view.ChecklistCheckArea.textTap = "Tap to view checklist";
    this.view.ChecklistInspectMachine.textTap = "Tap to view checklist";
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
  
  onTapInspectMachine:function(){
    this.view.btnDoneShutdownProcedure.skin = "skinDeActive";
    this.view.btnDoneShutdownProcedure.focusSkin = "skinDeActive";
    this.view.Check1.textRtxt = "Mark as Done";
    this.view.Check1.src = "checkboxn.png";
    this.view.Check2.textRtxt = 'All controls are on neutral or "off" position';
    this.view.Check2.src = "checkboxn.png";
    this.view.Check3.textRtxt = "Energy Source is secured";
    this.view.Check3.src = "checkboxn.png";
    this.view.flexShutdownProcedure.isVisible = true;
  },
  
  onClickCheckBox:function(ind){
    eval("this.view.Check"+ind).src = "checkboxf.png";
    eval("this.view.Check"+ind).textRtxt = "<strike>"+eval("this.view.Check"+ind).textRtxt+"</strike>";
    this.validateInspectMachine();
  },
  validateInspectMachine:function(){
    if(this.view.Check1.src == "checkboxf.png" && this.view.Check2.src == "checkboxf.png" && this.view.Check3.src == "checkboxf.png"){
      this.view.btnDoneShutdownProcedure.skin = "skinActive";
      this.view.btnDoneShutdownProcedure.focusSkin = "skinActive";
    }
  },
  closeShutdownProcedure:function(){
    this.view.flexShutdownProcedure.isVisible = false;
  },
  onDoneShutdownProcedure:function(){
    if(this.view.btnDoneShutdownProcedure.skin == "skinActive"){
      
      this.view.ChecklistInspectMachine.src = "unlock_blue.png";
      this.view.ChecklistInspectMachine.textNumChecklist = "3/3";
      this.view.ChecklistInspectMachine.textTap = "Tap to Edit";
      this.view.flexShutdownProcedure.isVisible = false;
      this.validateStep1();
    }
  },
  onClickCheckArea:function(){
    this.view.ChecklistCheckArea.src = "unlock_blue.png";
    this.view.ChecklistCheckArea.textNumChecklist = "1/1";
    this.view.ChecklistCheckArea.textTap = "Tap to Edit";
    this.validateStep1();
  },
  
  validateStep1:function(){
    if(this.view.ChecklistCheckArea.src == "unlock_blue.png" && this.view.ChecklistInspectMachine.src == "unlock_blue.png"){
      this.view.btnDone.skin = "skinActive";
      this.view.btnDone.focusSkin = "skinActive";
    }
  },
  onDone:function(){
    if(this.view.btnDone.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmPendingUnlockS2");
      navObj.navigate();
    }
  }

 //Type your controller code here 

 });
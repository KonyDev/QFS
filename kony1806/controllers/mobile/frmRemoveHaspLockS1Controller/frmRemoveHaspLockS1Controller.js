define({ 
  preshow:function(){
    this.view.ChecklistInspectMachine.src = "unlock_grey.png";
    this.view.ChecklistInspectMachine.textNumChecklist = "0/3";
    this.view.ChecklistInspectMachine.textTap = "Tap to view checklist";
    this.view.ChecklistCheckArea.src = "unlock_grey.png";
    this.view.ChecklistCheckArea.textNumChecklist = "0/1";
    this.view.ChecklistCheckArea.textTap = "Tap to view checklist";
    this.view.flexInspectionMachine.isVisible = false;
    this.view.menuDFX.left = "-100%";
    this.view.btnDone.skin = "skinDeActive";
    this.view.btnDone.focusSkin = "skinDeActive";
  },
  
  showInspectionMachine:function(){
    this.view.btnDoneInspectMachine.skin = "skinDeActive";
    this.view.btnDoneInspectMachine.focusSkin = "skinDeActive";
    this.view.CheckControls.textRtxt = 'All controls are on neutral or "off" position';
    this.view.CheckControls.src = "checkboxn.png";
    this.view.CheckEnergySource.textRtxt = "Energy Source is secured";
    this.view.CheckEnergySource.src = "checkboxn.png";
    this.view.flexInspectionMachine.isVisible = true;
  },
  
  checkControl:function(){
    this.view.CheckControls.textRtxt = "<strike>"+this.view.CheckControls.textRtxt+"</strike>";
    this.view.CheckControls.src = "checkboxf.png";
    this.validateInspectMachine();
  },
  
  checkEnergySource:function(){
    this.view.CheckEnergySource.textRtxt = "<strike>"+this.view.CheckEnergySource.textRtxt+"</strike>";
    this.view.CheckEnergySource.src = "checkboxf.png";
    this.validateInspectMachine();
  },
  
  validateInspectMachine:function(){
    if(this.view.CheckControls.src == "checkboxf.png" && this.view.CheckEnergySource.src == "checkboxf.png"){
      this.view.btnDoneInspectMachine.skin = "skinActive";
      this.view.btnDoneInspectMachine.focusSkin = "skinActive";
    }
  },
  
  closeInspectMachine:function(){
    this.view.flexInspectionMachine.isVisible = false;
  },
  
  onDoneInspectMachine:function(){
    if(this.view.btnDoneInspectMachine.skin == "skinActive"){
      this.view.ChecklistInspectMachine.src = "unlock_blue.png";
      this.view.ChecklistInspectMachine.textNumChecklist = "3/3";
      this.view.ChecklistInspectMachine.textTap = "Tap to Edit";
      this.view.flexInspectionMachine.isVisible = false;
      this.validateCheckList();
    }
  },
  
  onDoneCheckArea:function(){
    this.view.ChecklistCheckArea.src = "unlock_blue.png";
    this.view.ChecklistCheckArea.textNumChecklist = "1/1";
    this.view.ChecklistCheckArea.textTap = "Tap to Edit";
    this.validateCheckList();
  },
  
  validateCheckList:function(){
    if(this.view.ChecklistCheckArea.src == "unlock_blue.png"  && this.view.ChecklistInspectMachine.src == "unlock_blue.png"){
      this.view.btnDone.skin = "skinActive";
      this.view.btnDone.focusSkin = "skinActive";
    }
  },
  
  onDoneS1:function(){
    if(this.view.btnDone.skin == "skinActive"){
      var navObject = new kony.mvc.Navigation("frmRemoveHaspLockS2");
      navObject.navigate();
    }
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
  

 //Type your controller code here 

 });
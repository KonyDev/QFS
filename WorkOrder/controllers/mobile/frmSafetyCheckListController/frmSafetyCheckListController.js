define({ 
  onNavigate:function(){
    this.view.menuDFX.left = "-100%";
    this.view.toggleWorkStandard.skinNo = "skinRadioNormal";
    this.view.toggleWorkStandard.skinNoFocus = "skinRadioNormal";
    this.view.toggleWorkStandard.skinYes = "skinRadioNormal";
    this.view.toggleWorkStandard.skinYesFocus = "skinRadioNormal";
    this.view.toggleSignoff.skinNo = "skinRadioNormal";
    this.view.toggleSignoff.skinNoFocus = "skinRadioNormal";
    this.view.toggleSignoff.skinYes = "skinRadioNormal";
    this.view.toggleSignoff.skinYesFocus = "skinRadioNormal";
    this.view.toggleTaskDifficul.skinNo = "skinRadioNormal";
    this.view.toggleTaskDifficul.skinNoFocus = "skinRadioNormal";
    this.view.toggleTaskDifficul.skinYes = "skinRadioNormal";
    this.view.toggleTaskDifficul.skinYesFocus = "skinRadioNormal";
    this.view.btnCompleteTask.skin = "skinDeActive";
    this.view.btnCompleteTask.focusSkin = "skinDeActive";
  },
  openHam:function(){
    this.view.menuDFX.animate(
      kony.ui.createAnimation({
        "100": {"left": "0%","stepConfig": {"timingFunction": kony.anim.EASE},}}), {
        		"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3}, {"animationEnd":""});  
  },
  closeHam:function(){
    this.view.menuDFX.animate(
      kony.ui.createAnimation({
        "100": {"left": "-100%","stepConfig": {"timingFunction": kony.anim.EASE},}}), {
        		"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3}, {"animationEnd":""});  
  },
  navForm:function(frmName){
    var navForm = new kony.mvc.Navigation(frmName);
    navForm.navigate();
  },
  
  onClickToggleWorkStandard:function(ind){
    if(ind ==0){
      this.view.toggleWorkStandard.skinNo = "skinRadioFocus";
      this.view.toggleWorkStandard.skinNoFocus = "skinRadioFocus";
      this.view.toggleWorkStandard.skinYes = "skinRadioNormal";
      this.view.toggleWorkStandard.skinYesFocus = "skinRadioNormal";
    }else{
      this.view.toggleWorkStandard.skinNo = "skinRadioNormal";
      this.view.toggleWorkStandard.skinNoFocus = "skinRadioNormal";
      this.view.toggleWorkStandard.skinYes = "skinRadioFocus";
      this.view.toggleWorkStandard.skinYesFocus = "skinRadioFocus";
    }
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.btnCompleteTask.focusSkin = "skinActive";
  },
  onClickToggleTaskDifficulty:function(ind){
    if(ind ==0){
      this.view.toggleTaskDifficul.skinNo = "skinRadioFocus";
      this.view.toggleTaskDifficul.skinNoFocus = "skinRadioFocus";
      this.view.toggleTaskDifficul.skinYes = "skinRadioNormal";
      this.view.toggleTaskDifficul.skinYesFocus = "skinRadioNormal";
    }else{
      this.view.toggleTaskDifficul.skinNo = "skinRadioNormal";
      this.view.toggleTaskDifficul.skinNoFocus = "skinRadioNormal";
      this.view.toggleTaskDifficul.skinYes = "skinRadioFocus";
      this.view.toggleTaskDifficul.skinYesFocus = "skinRadioFocus";
    }
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.btnCompleteTask.focusSkin = "skinActive";
  },
  onClickToggleSignOff:function(ind){
    if(ind ==0){
      this.view.toggleSignoff.skinNo = "skinRadioFocus";
      this.view.toggleSignoff.skinNoFocus = "skinRadioFocus";
      this.view.toggleSignoff.skinYes = "skinRadioNormal";
      this.view.toggleSignoff.skinYesFocus = "skinRadioNormal";
    }else{
      this.view.toggleSignoff.skinNo = "skinRadioNormal";
      this.view.toggleSignoff.skinNoFocus = "skinRadioNormal";
      this.view.toggleSignoff.skinYes = "skinRadioFocus";
      this.view.toggleSignoff.skinYesFocus = "skinRadioFocus";
    }
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.btnCompleteTask.focusSkin = "skinActive";
  },
  completeSafetyCheckList:function(){
    if(this.view.btnCompleteTask.skin == "skinActive"){
      this.navForm("frmWorkOrderSummary");
    }
  }


 //Type your controller code here 

 });
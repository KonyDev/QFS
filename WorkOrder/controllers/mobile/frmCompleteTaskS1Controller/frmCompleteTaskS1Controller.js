define({
  onNavigate:function(){
    this.view.togglebuttons.skinNo = "skinRadioNormal";
    this.view.togglebuttons.skinNoFocus = "skinRadioNormal";
    this.view.togglebuttons.skinYes = "skinRadioNormal";
    this.view.togglebuttons.skinYesFocus = "skinRadioNormal";
    this.view.btnCompleteTask.skin = "skinDeActive";
    this.view.btnCompleteTask.focusSkin = "skinDeActive";
    this.view.menuDFX.left = "-100%";
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
  
  onClickToggleButton:function(ind){
    if(ind ==0){
      this.view.togglebuttons.skinNo = "skinRadioFocus";
      this.view.togglebuttons.skinNoFocus = "skinRadioFocus";
      this.view.togglebuttons.skinYes = "skinRadioNormal";
      this.view.togglebuttons.skinYesFocus = "skinRadioNormal";
    }else{
      this.view.togglebuttons.skinNo = "skinRadioNormal";
      this.view.togglebuttons.skinNoFocus = "skinRadioNormal";
      this.view.togglebuttons.skinYes = "skinRadioFocus";
      this.view.togglebuttons.skinYesFocus = "skinRadioFocus";
    }
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.btnCompleteTask.focusSkin = "skinActive";
  },
  completeS1:function(){
    if(this.view.btnCompleteTask.skin == "skinActive"){
      var navObj =new kony.mvc.Navigation("frmCompleteTaskS2");
      navObj.navigate();
    }
  }

 //Type your controller code here 

 });
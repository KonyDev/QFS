define({ 
  signedFlag : false,
  onNavigate:function(){
    this.view.menuDFX.left = "-100%";
    this.view.lblInfo1.text = workorderTable[WO_SELIND].lblWorkOrderName.text;
    this.view.lblTimeStatus.text = workorderTable[WO_SELIND].lblTimeStatus.text;
    this.view.labelanddetailDue.textAnswer = workorderTable[WO_SELIND].lblDueValue.text;
    this.view.labelanddetailLocation.textAnswer = workorderTable[WO_SELIND].lblLocationValue.text;
    this.view.labelanddetailAsset.textAnswer = workorderTable[WO_SELIND].lblAssetValue.text;
    this.view.lblMaintain.text = workorderTable[WO_SELIND].lblMaintain.text;
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.btnCompleteTask.focusSkin = "skinActive";
    this.view.menuDFX.left = "-100%";
    this.signedFlag = false;
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
  

 //Type your controller code here 

 });
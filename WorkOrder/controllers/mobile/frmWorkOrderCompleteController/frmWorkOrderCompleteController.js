define({ 
  onNavigate:function(){
    this.view.menuDFX.left = "-100%";
    this.view.lblProjectTitle.text = workorderTable[WO_SELIND].lblWorkOrderName.text;
    this.view.lblTime.text = workorderTable[WO_SELIND].lblTimeStatus.text;
    this.view.lblStatus.text = "Completed";
    this.view.lblAssetTag.text= workorderTable[WO_SELIND].lblAssetTitle.text;
    this.view.lblDue.text = workorderTable[WO_SELIND].lblDueValue.text;
    this.view.lblLocation.text = workorderTable[WO_SELIND].lblLocationValue.text;
    this.view.lblAsset.text = workorderTable[WO_SELIND].lblAssetValue.text;
    this.view.lblMaintain.text = workorderTable[WO_SELIND].lblMaintain.text;
    this.view.btnSubmit.skin = "skinActive";
    this.view.btnSubmit.focusSkin = "skinActive";
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
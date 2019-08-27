define({ 
  onNavigate:function(){
    this.view.menuDFX.left = "-100%";
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.btnCompleteTask.skin = "skinActive";
    this.view.imgDownArrow.src="downarrow1.png"
  },
frm_preshow:function()
  {//alert(ToolData);
    this.view.lblHeader.text="Maintenance asset 5AS745";
     this.view.segToolList.setData(ToolData);
   this.view.segSparePartList.setData(SparePartsData);
    this.view.segAssets.setData(imageData);
    this.view.flxTaskDetails2.setVisibility(false);
    this.view.flxTools.setVisibility(false);
    this.view.flxSpareparts.setVisibility(false);
    this.view.flxManual.setVisibility(false);
    this.view.flxAssets.setVisibility(false);
    this.view.flxReferenceSources.setVisibility(false);
    this.view.imgEdit.setVisibility(false);
    this.view.flxScrollEditableFields.setVisibility(false);
    this.view.flxScrollCOntent.setVisibility(true);
    
  },
  
  
  show_TaskDetails:function()
  {var scope=this;
    if(this.view.imgDownArrow.src=="downarrow1.png")
      {
        scope.view.imgDownArrow.src="uparrw1.png";
        scope.view.flxTaskDetails2.setVisibility(true);
        scope.view.flxTools.setVisibility(true);
         scope.view.flxSpareparts.setVisibility(true);
         scope.view.flxManual.setVisibility(false);
         scope.view.flxAssets.setVisibility(false);
        this.view.flxReferenceSources.setVisibility(true);
        this.view.imgEdit.setVisibility(true);
      }
    else
      { 
        scope.view.imgDownArrow.src="downarrow1.png";
       scope.view.flxTaskDetails2.setVisibility(false);
        scope.view.flxTools.setVisibility(false);
         scope.view.flxSpareparts.setVisibility(false);
         scope.view.flxManual.setVisibility(false);
         scope.view.flxAssets.setVisibility(false);
        this.view.flxReferenceSources.setVisibility(false);
         this.view.imgEdit.setVisibility(true);
      }
},
 //Type your controller code here 

  show_Asset:function()
  {var self=this;
   
    if(self.view.imgDropDown.src=="downarrow1.png")
      {
        self.view.imgDropDown.src="uparrw1.png";
         self.view.flxManual.setVisibility(true);
         self.view.flxAssets.setVisibility(true);
      }
   else
   {
      self.view.imgDropDown.src="downarrow1.png";
         self.view.flxManual.setVisibility(false);
         self.view.flxAssets.setVisibility(false);
   }
  
},
  
  
  show_editableScreen:function()
  {this.view.lblHeader.text="Edit Task Details";
    this.view.flxScrollCOntent.setVisibility(false);
    this.view.flxScrollEditableFields.setVisibility(true);
    
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
  completeS2:function(){
    var navObj = new kony.mvc.Navigation("frmCompleteTaskS3");
    navObj.navigate();
  }
  
  
  
  
 });
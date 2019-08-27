define({ 
  scope:0,
  onNavigate:function(){
    this.view.flxWODetails.isVisible = true;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = false;
    this.view.lbl1.skin = "skinNumCurrent";
    this.view.lbl2.skin = "skinNumPending";
    this.view.lbl3.skin = "skinNumPending";
    this.view.lbl4.skin = "skinNumPending";
    this.view.lbl5.skin = "skinNumPending";
    this.view.lblWorkOrderDetails.skin = "skinTabCurrent";
    this.view.lblTaskDetails.skin = "skinTabNormal";
    this.view.lblSurveyDetails.skin = "skinTabNormal";
    this.view.lblCompletionDetails.skin = "skinTabNormal";
    this.view.lblReview.skin = "skinTabNormal";
     this.view.flxDummy.isVisible = false;
    this.view.segUsers.setData(usersData);
    
  },
  showWODetail:function(){
    this.view.flxWODetails.isVisible = true;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = false;
    this.view.lbl1.skin = "skinNumCurrent";
    this.view.lbl2.skin = "skinNumPending";
    this.view.lbl3.skin = "skinNumPending";
    this.view.lbl4.skin = "skinNumPending";
    this.view.lbl5.skin = "skinNumPending";
    this.view.lblWorkOrderDetails.skin = "skinTabCurrent";
    this.view.lblTaskDetails.skin = "skinTabNormal";
    this.view.lblSurveyDetails.skin = "skinTabNormal";
    this.view.lblCompletionDetails.skin = "skinTabNormal";
    this.view.lblReview.skin = "skinTabNormal";
    this.view.imgCheckSparePart.src = "checkboxn.png";
    this.view.imgCheckTool.src = "checkboxn.png";
    this.view.flxWorkOrderMaterials.isVisible = false;
    this.view.flxWorkOrerTools.isVisible = false;
    this.view.flxDummy.isVisible = false;
  },
  toggle_SpareParts:function(){
    this.view.flxWorkOrderMaterials.setVisibility(true);
    this.view.imgCheckSparePart.src = "checkboxf.png";
    this.view.flxMaterial1.setVisibility(true);
    this.view.flxMaterial2.setVisibility(false);
    this.view.flxMaterial3.setVisibility(false);
      this.view.flxDummy.isVisible = false;
  },
  show_Material:function(){
    if(this.view.flxMaterial1.isVisible === false){
      this.view.flxMaterial1.isVisible = true;
    }else{
      if(this.view.flxMaterial2.isVisible === false){
        this.view.flxMaterial2.isVisible = true;
      }else{
        this.view.flxMaterial3.isVisible = true;
      }
    }
  },
  toggle_Tools:function(){
    this.view.flxWorkOrerTools.setVisibility(true);
    this.view.imgCheckTool.src = "checkboxf.png";
  },
  showTaskDetail:function(){
    this.view.flxWODetails.isVisible = false;
    this.view.flxTaskDetails.isVisible = true;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = false;
    this.view.lbl1.skin = "skinNumPending";
    this.view.lbl2.skin = "skinNumCurrent";
    this.view.lbl3.skin = "skinNumPending";
    this.view.lbl4.skin = "skinNumPending";
    this.view.lbl5.skin = "skinNumPending";
    this.view.lblWorkOrderDetails.skin = "skinTabNormal";
    this.view.lblTaskDetails.skin = "skinTabCurrent";
    this.view.lblSurveyDetails.skin = "skinTabNormal";
    this.view.lblCompletionDetails.skin = "skinTabNormal";
    this.view.lblReview.skin = "skinTabNormal";
    this.view.lblinfo2.isVisible = true;
    this.view.flxTaskVisualAppearance.isVisible = false;
    this.view.btnDoneTaskDetails.isVisible = false;
    this.view.flxTaskAsset.isVisible = false;
    this.view.flxChemical.isVisible = false;
    this.view.rtxtNextTaskDetails.isVisible = false;
    this.view.flxDummy.isVisible = false;
  },
  addnewTask:function(){
    if(this.view.flxTaskVisualAppearance.isVisible == false){
      this.view.lblinfo2.isVisible = false;
      this.view.flxTaskVisualAppearance.isVisible = true;
      this.view.flxTaskAsset.isVisible = false;
      this.view.btnDoneTaskDetails.isVisible = true;
      this.view.flxStep1VA.isVisible = false;
      this.view.flxStep2VA.isVisible = false;
      this.view.lblAddCheckListVA.text = "Add Checklist";
      this.view.flxVisualAppearanceExecutionSteps.isVisible = true;
      this.view.btnDoneTaskDetails.text = "Done";
      this.view.rtxtNextTaskDetails.isVisible = false;
    }else{
      if(this.view.flxTaskAsset.isVisible == false){
        this.view.flxTaskVisualAppearance.isVisible = true;
        this.view.flxTaskAsset.isVisible = true;
        this.view.btnDoneTaskDetails.isVisible = true;
        this.view.flxStep1Asset.isVisible = false;
        this.view.flxStep2Asset.isVisible = false;
        this.view.lblAddCheckListAsset.text = "Add Checklist";
        this.view.flxVisualAppearanceExecutionSteps.isVisible = false;
        this.view.flxAssetExecutionSteps.isVisible = true;
        this.view.btnDoneTaskDetails.text = "Done";
        this.view.rtxtNextTaskDetails.isVisible = false;
      }else{
        if(this.view.flxChemical.isVisible == false){
          this.view.flxTaskVisualAppearance.isVisible = true;
          this.view.flxTaskAsset.isVisible = true;
          this.view.flxChemical.isVisible = true;
          this.view.btnDoneTaskDetails.isVisible = true;
          this.view.flxStep1Chemical.isVisible = false;
          this.view.flxStep2Chemical.isVisible = false;
          this.view.lblAddChecklistChemical.text = "Add Checklist";
          this.view.flxVisualAppearanceExecutionSteps.isVisible = false;
          this.view.flxAssetExecutionSteps.isVisible = false;
          this.view.flxChemicalExecutionSteps.isVisible = true;
          this.view.btnDoneTaskDetails.text = "Done";
          this.view.rtxtNextTaskDetails.isVisible = false;
        }else{
          
        }
        
      }
    }
    
  },
  onDone:function(){
    if(this.view.btnDoneTaskDetails.text == "Done"){
      this.view.flxVisualAppearanceExecutionSteps.isVisible = false;
      this.view.flxAssetExecutionSteps.isVisible = false;
      this.view.flxChemicalExecutionSteps.isVisible = false;
      this.view.flxTaskVisualAppearance.isVisible = true;
      this.view.flxTaskAsset.isVisible = true;
      this.view.flxChemical.isVisible = true;
      this.view.btnDoneTaskDetails.isVisible = true;
      this.view.btnDoneTaskDetails.text = "Next";
      this.view.rtxtNextTaskDetails.isVisible = true;
    }else{
      this.showSurveyDetail();
    }
  },
  
  addCheckList:function(){
    if(this.view.flxTaskAsset.isVisible == false){
      if(this.view.flxStep1VA.isVisible === false){
        this.view.flxStep1VA.isVisible = true;
      }else{
        this.view.flxStep2VA.isVisible = true;
      }
      this.view.lblAddCheckListVA.text = "Add Step";
    }else{
      if(this.view.flxChemical.isVisible == false){
        if(this.view.flxStep1Asset.isVisible === false){
          this.view.flxStep1Asset.isVisible = true;
        }else{
          this.view.flxStep2Asset.isVisible = true;
        }
        this.view.lblAddCheckListAsset.text = "Add Step";
      }else{
        if(this.view.flxStep1Chemical.isVisible === false){
          this.view.flxStep1Chemical.isVisible = true;
        }else{
          this.view.flxStep2Chemical.isVisible = true;
        }
        this.view.lblAddChecklistChemical.text = "Add Step";
      }
    }
    
  },
  
  
  
  showSurveyDetail:function(){
    this.view.flxWODetails.isVisible = false;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = true;
    this.view.flxCompletionDetails.isVisible = false;
    this.view.lbl1.skin = "skinNumPending";
    this.view.lbl2.skin = "skinNumPending";
    this.view.lbl3.skin = "skinNumCurrent";
    this.view.lbl4.skin = "skinNumPending";
    this.view.lbl5.skin = "skinNumPending";
    this.view.lblWorkOrderDetails.skin = "skinTabNormal";
    this.view.lblTaskDetails.skin = "skinTabNormal";
    this.view.lblSurveyDetails.skin = "skinTabCurrent";
    this.view.lblCompletionDetails.skin = "skinTabNormal";
    this.view.lblReview.skin = "skinTabNormal";
    this.view.flxDummy.isVisible = false;
    
  },
  showCompletionDetail:function(){
    this.view.flxWODetails.isVisible = false;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = true;
    this.view.lbl1.skin = "skinNumPending";
    this.view.lbl2.skin = "skinNumPending";
    this.view.lbl3.skin = "skinNumPending";
    this.view.lbl4.skin = "skinNumCurrent";
    this.view.lbl5.skin = "skinNumPending";
    this.view.lblWorkOrderDetails.skin = "skinTabNormal";
    this.view.lblTaskDetails.skin = "skinTabNormal";
    this.view.lblSurveyDetails.skin = "skinTabNormal";
    this.view.lblCompletionDetails.skin = "skinTabCurrent";
    this.view.lblReview.skin = "skinTabNormal";
    this.view.flxCompletionDetail.isVisible = true;
    this.view.flxCompletionLocation.isVisible = false;
    this.view.flxSearch.isVisible=false;
    this.view.flxDummy.isVisible = false;
    
  },
  toggleLocationRequire:function(){
    if(this.view.flxCompletionDetail.isVisible == true){
      this.view.flxCompletionDetail.isVisible = false;
    //  this.view.flxSearch.isVisible= true;
      this.view.flxCompletionLocation.isVisible = true;
    }
    
    else{
       this.view.flxCompletionDetail.isVisible = true;
     //  this.view.flxSearch.isVisible= false;
       this.view.flxCompletionLocation.isVisible = false;
    }
  },
  showReview:function(){
    this.view.flxWODetails.isVisible = false;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = true;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = false;
    this.view.lbl1.skin = "skinNumPending";
    this.view.lbl2.skin = "skinNumPending";
    this.view.lbl3.skin = "skinNumPending";
    this.view.lbl4.skin = "skinNumPending";
    this.view.lbl5.skin = "skinNumCurrent";
    this.view.lblWorkOrderDetails.skin = "skinTabNormal";
    this.view.lblTaskDetails.skin = "skinTabNormal";
    this.view.lblSurveyDetails.skin = "skinTabNormal";
    this.view.lblCompletionDetails.skin = "skinTabNormal";
    this.view.lblReview.skin = "skinTabCurrent";
    this.view.flxDummy.isVisible = false;
  },
  show_flxSearch:function()
  { alert(usersData);
   this.view.lblCompletionDetailsMain.isVisible = false;
    this.view.segUsers.setData(usersData);
    this.view.lblCompletionDetailsMain.isVisible = false;
    this.view.flxWODetails.isVisible = false;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = true;
    this.view.flxCompletionDetail.isVisible = false;
    this.view.flxSearch.isVisible= true;
    this.view.flxCompletionLocation.isVisible = false;
    this.view.flxDummy.isVisible = true;
  },
  show_LocationDetails:function()
  {
    this.view.lblCompletionDetailsMain.isVisible = true;
    this.view.flxWODetails.isVisible = false;
    this.view.flxTaskDetails.isVisible = false;
    this.view.flxReview.isVisible = false;
    this.view.flxSurveyDetails.isVisible = false;
    this.view.flxCompletionDetails.isVisible = true;
    this.view.flxCompletionDetail.isVisible = false;
    this.view.flxSearch.isVisible= false;
    this.view.flxCompletionLocation.isVisible = true;
    this.view.flxDummy.isVisible = false;
  },
  SurveyDetais_PrepimgToggle:function()
  
  {
    
    if(this.view.imgChckPrepearationSurvey.src =="checkboxn.png")
      
      {
        this.view.imgChckPrepearationSurvey.src="checkboxf.png";
      }
    else
      {
        this.view.imgChckPrepearationSurvey.src="checkboxn.png";
      }
  },
  
  SurveyDetais_Completion_img_Toggle:function()
  
  {
  if(this.view.imgCHeckCompletionSurvey.src == "checkboxn.png") {
    
    this.view.imgCHeckCompletionSurvey.src="checkboxf.png";
  } 
    else
      {
        this.view.imgCHeckCompletionSurvey.src = "checkboxn.png";
      }
    
  },
  
  Search_Functionality:function()
  
  {
    var searchValue = this.view.tbxSearch.text;
    searchValue=searchValue.toLocaleLowerCase();
      	var i, j;
      	var length = usersData.length;
      	//var userData = [];
      	for ( i = 0; i < length; i++)
        {
         	var name =usersData[i].lblUserName.toLowerCase();
          	if (name.search(searchValue.trim()) != -1) 
          	{
            	userData.push(usersData[i]);
            //var dataLength = usersData.length - 1;
          	}
      	}
   // alert(userData[0]);
      	this.view.segUsers.data  =  userData;
  },
  SegOnRow_Click:function()
  {
    var length = userData.length;
 
  }
  
  
  
  
  
  
 });
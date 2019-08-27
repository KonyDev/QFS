define({ 
  step:0,
  AssetData:[],
  WorkData:[],
  onNavigate:function(){
    this.view.flxPopup.isVisible = false;
    this.view.flxFilters2.setVisibility(false);
    this.view.flxFilters.setVisibility(true);
    this.step=1;
    this.view.segAssetDetails.setData(AssetData);
    this.view.segAssetDetails.setVisibility(false);
    this.view.segWorkOrder.setVisibility(true);    
    this.view.segWorkOrder.setData(WorkData); 
    this.view.btnWorkorder.skin = "skinFocusBtnDTW";
    this.view.btnWorkorder.focusSkin = "skinFocusBtnDTW";
    this.view.btnAssets.skin = "skinNormalBtnDTW";
    this.view.btnAssets.focusSkin = "skinNormalBtnDTW";
  },
  btnAssets_onClick:function(){
    this.step=2;
    this.view.flxFilters2.setVisibility(true);
    this.view.flxFilters.setVisibility(false);
    this.view.segAssetDetails.setVisibility(true);
    this.view.segWorkOrder.setVisibility(false);
    this.view.btnWorkorder.skin = "skinNormalBtnDTW";
    this.view.btnWorkorder.focusSkin = "skinNormalBtnDTW";
    this.view.btnAssets.skin = "skinFocusBtnDTW";
    this.view.btnAssets.focusSkin = "skinFocusBtnDTW";
  },
  showPopup:function(){
    
    this.view.flxPopup.isVisible = true;
    this.view.btnCreate.skin = "skinBtnCreateFocus";
    this.view.btnCreate.focusSkin = "skinBtnCreateFocus";
    this.view.btnCreate.hoverSkin = "skinBtnCreateFocus";
    this.view.flexInspection.skin = "skinFlexCreateNormal";
    this.view.flexRepair.skin = "skinFlexCreateNormal";
    this.view.flexMaintainance.skin = "skinFlexCreateNormal";
    this.view.flexReplacement.skin = "skinFlexCreateNormal";
    
  },
  cancelPopup:function(){
    
    this.view.flxPopup.isVisible = false;
    this.onNavigate();
    
  },
  selectWorkOrderType:function(ind){
    if(ind == 1){
      this.view.flexInspection.skin = "skinFlexCreateFocus";
      this.view.flexRepair.skin = "skinFlexCreateNormal";
      this.view.flexMaintainance.skin = "skinFlexCreateNormal";
      this.view.flexReplacement.skin = "skinFlexCreateNormal";
      this.view.btnCreate.skin = "skinActive";
      this.view.btnCreate.focusSkin = "skinActive";
      this.view.btnCreate.hoverSkin = "skinActive";
    }else if(ind == 2){
      this.view.flexInspection.skin = "skinFlexCreateNormal";
      this.view.flexRepair.skin = "skinFlexCreateFocus";
      this.view.flexMaintainance.skin = "skinFlexCreateNormal";
      this.view.flexReplacement.skin = "skinFlexCreateNormal";
      this.view.btnCreate.skin = "skinActive";
      this.view.btnCreate.focusSkin = "skinActive";
      this.view.btnCreate.hoverSkin = "skinActive";
    }else if(ind == 3){
      this.view.flexInspection.skin = "skinFlexCreateNormal";
      this.view.flexRepair.skin = "skinFlexCreateNormal";
      this.view.flexMaintainance.skin = "skinFlexCreateNormal";
      this.view.flexReplacement.skin = "skinFlexCreateFocus";
      this.view.btnCreate.skin = "skinActive";
      this.view.btnCreate.focusSkin = "skinActive";
      this.view.btnCreate.hoverSkin = "skinActive";
    }else if(ind == 4){
      this.view.flexInspection.skin = "skinFlexCreateNormal";
      this.view.flexRepair.skin = "skinFlexCreateNormal";
      this.view.flexMaintainance.skin = "skinFlexCreateFocus";
      this.view.flexReplacement.skin = "skinFlexCreateNormal";
      this.view.btnCreate.skin = "skinActive";
      this.view.btnCreate.focusSkin = "skinActive";
      this.view.btnCreate.hoverSkin = "skinActive";
    }
  },
  createWo:function(){
    if(this.view.btnCreate.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmWorkOrderDetails");
      navObj.navigate();
    }
    
  },
  BrekPiontChange:function()
  {
    var breakpoint_width=kony.application.getCurrentBreakpoint();
    self=this;
 
    if(breakpoint_width==1024)
      {
       
       // self.view.flxType.left="2%";
       // self.view.flxStatus.left="2%";
       // self.view.flxUsers.left="2%";
       // self.view.flxParts.left="4%";
       // self.view.flxLocation.left="2%";

        for(var i=0; i<self.WorkData.length; i++)
        {
          self.WorkData[i]["lblAsset"].skin="sknlblBoldTab";
          self.WorkData[i]["lblTimeAway"].skin="sknlblTimeHead";
          self.WorkData[i]["lblDistance"].skin="sknLblBreakptChangeNormal";
          self.WorkData[i]["lblAddress"].skin="sknLblBreakptChangeNormal";
        }
          
          
        self.view.segWorkOrder.setData(WorkData);
   
 
        for(var j=0; j<self.AssetData.length; i++)
        {
          self.AssetData[i]["lblAssetName"].skin="sknLblassetNAmeTab";
          self.AssetData[i]["lblTransformer"].skin="sknLblTransformerTab";
          self.AssetData[i]["lblDistance"].skin="sknLblDistanceTab";
          self.AssetData[i]["lblAddress"].skin="sknlblAddressTab";
        }
        self.view.segAssetDetails.setData(AssetData);
      }
   else 
     {   
       for(var i=0;i<WorkData.length;i++)
       {
           WorkData[i]["lblAsset"].skin="sknlblBoldTab";
           WorkData[i]["lblTimeAway"].skin="sknlblTimeHead";
          WorkData[i]["lblDistance"].skin="sknLblBreakptChangeNormal";
          WorkData[i]["lblAddress"].skin="sknLblBreakptChangeNormal";
       }
     
       
        self.view.segWorkOrder.setData(WorkData);
       
       
       
       
      }   
  if(this.step==2)
  {
  this.btnAssets_onClick();
    
}
    else if(this.step==1)
      {
        this.onNavigate();
      } 
  }
 });
define({ 

 _navigationData: null,
 onNavigate: function(data){
   this.view.lblInspectionID.text = data.id +"-"+ "NEW INSPECTION";
   this._navigationData = data.userAttribute;
   if(!kony.sdk.isNullOrUndefined(this._navigationData) && this._navigationData.userRole.toLowerCase() ==="member"){
     this.view.btnSubmitInspection.text = "TAKE ME TO INSPECTIONS LIST";
   }
   else{
     this.view.btnSubmitInspection.text = "TAKE ME TO ASSETS LIST";
   }
 },
 navigateToInspectionList: function(){
   var navObj = null;
   if(!kony.sdk.isNullOrUndefined(this._navigationData) && this._navigationData.userRole.toLowerCase() ==="member"){
     navObj=new kony.mvc.Navigation("frmInspectionsList");
   }
   else{
     navObj=new kony.mvc.Navigation("frmInspectionCreation");
   }
   navObj.navigate(this._navigationData);
 }
 });
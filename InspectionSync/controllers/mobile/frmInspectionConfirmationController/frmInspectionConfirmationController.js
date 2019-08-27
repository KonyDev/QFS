define({ 

 onNavigate: function(data){
   this.view.lblHeader.text = data;
   this.view.lblInspectionID.text = data;
 },
 navigateToInspectionList: function(){
   var navObj=new kony.mvc.Navigation("frmInspectionsList");
   navObj.navigate();
 }

 });
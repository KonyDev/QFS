define({ 
 navBack:function(){
   var frmName = kony.application.getPreviousForm().id;
   var navObj = new kony.mvc.Navigation(frmName);
   navObj.navigate();
 }
});
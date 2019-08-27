define({ 
  onNavigate:function(){
    this.view.flxPopupReassign.isVisible = false;
  },
  navBack:function(){
    var frmName = kony.application.getPreviousForm().id;
    this.navForm(frmName);
  },
  onSubmit:function(){
    this.view.flxPopupReassign.isVisible = true;
  },
  navForm:function(frmName){
    var navObj = new kony.mvc.Navigation(frmName);
    navObj.navigate();
  }

 //Type your controller code here 

 });
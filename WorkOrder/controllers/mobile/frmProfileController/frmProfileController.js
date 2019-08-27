define({ 
  
  _onClickBack: function(){
    var frmName = kony.application.getPreviousForm().id;
    var nav = new kony.mvc.Navigation(frmName);
    nav.navigate();
  },
  
});
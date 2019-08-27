define({ 

  //Type your controller code here 
  onNavigate:function(){

  },
  onLoginSuccess:function(result){
    try{
      var navObj=new kony.mvc.Navigation("frmJourneyList");
      navObj.navigate();
    }catch(excp){
      debugger;
    }
  }

});
define({ 

  //Type your controller code here 
  userAttribute:{},
  /**
   * @function
   *
   */
  onNavigate:function(){
    this.userAttribute={};
  },
  /**
   * @function
   *
   */
  loginSuccess:function(result){
    debugger;
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    this.setUpSync();
  },
  /**
   * @function
   *
   * @param result 
   */
  getUserAttributeSuccess:function(result){
    debugger;
    if(typeof result==='object' && result!==null){
      var userId;
      if(typeof result.user_id==='string' && (result.user_id).indexOf("User000")>-1){
        userId=(result.user_id).split("User000");
        if(Array.isArray(userId) && userId.length>1){
          userId=userId[1];
        }else{
          userId=null;
        }
      }
      this.userAttribute["userid"]=userId;
      this.userAttribute["userRole"]=result.user_role;
      this.userAttribute["firstName"]=result.firstName;
      this.userAttribute["lastName"]=result.lastName;
      this.userAttribute["email"]=result.email;
      kony.store.setItem("USER_INFO",this.userAttribute);
      if(this.userAttribute.userRole.toLowerCase()=="member"){
        try{
          //var navObj=new kony.mvc.Navigation("frmInspectionsList");
          var navObj=new kony.mvc.Navigation("frmInspectionsList");
          navObj.navigate(this.userAttribute);
          //navObj.navigate([]);
        }catch(excp){
          alert(JSON.stringify(excp));
        }
      }
      else{
        try{
          var navObj=new kony.mvc.Navigation("frmInspectionCreation");
          navObj.navigate(this.userAttribute);
        }catch(excp){
          alert(JSON.stringify(excp));
        }
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  failureCallback:function(result){
    debugger;
  },
  setUpSync:function(){

    var options = {"deviceDbEncryptionKey" : "sample"};
    function setupSuccess(response){
      kony.application.dismissLoadingScreen();
      //alert(response);
      //this.startSync();
    }
    function setupFailure(response){
      kony.application.dismissLoadingScreen();
      alert(response.message);
    }
    try{
      //kony.application.showLoadingScreen(""," Setting up your app \nPlease wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      KNYMobileFabric.OfflineObjects.setup(setupSuccess.bind(this), setupFailure.bind(this));
      //KNYMobileFabric.OfflineObjects.reset(setupSuccess.bind(this),setupFailure.bind(this));
    }catch(excp){
      kony.print("Excpetion: "+excp);
      kony.application.dismissLoadingScreen();
    } 
  }
});
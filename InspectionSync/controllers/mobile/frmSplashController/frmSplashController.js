define({ 
  onFormPostShow:function(){
    debugger;
    this.timerFunction();
  },
  timerFunction: function(){
    kony.timer.schedule("frmSplashtimer", this.timerCallback.bind(this), 1, false);
  },
  timerCallback: function(){
    if(this.isFreshLaunch()===true){
      kony.store.setItem("IS_FRESH_LAUNCH", false);
      this.navigateToIntroForm();
    }else{
      this.navigateToLoginForm();
    }
  },
  isFreshLaunch:function(){
    var status=kony.store.getItem("IS_FRESH_LAUNCH");
    if(status===null || status===undefined||status===true){
      status=true;
    }else{
      status=false;
    }
    return status;
  },
  navigateToIntroForm:function(){
    try{
      var navObj=new kony.mvc.Navigation("frmIntro");
      navObj.navigate();
    }catch(excp){
      kony.print("### Exception occured while navigating to the intro form: "+JSON.stringify(excp));
    }
  },
  navigateToLoginForm:function(){
    try{
      var navObj=new kony.mvc.Navigation("frmLogin");
      navObj.navigate();
    }catch(excp){
      kony.print("### Exception occured while navigating to the intro form: "+JSON.stringify(excp));
    }
  }
 });
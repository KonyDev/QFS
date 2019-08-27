define({ 

 //Type your controller code here 
doLogin:function()
  {
      this.authClient = KNYMobileFabric.getIdentityService("FMGADFS");
      kony.print("invoking identity call");
      var options = {};
      options.browserWidget = this.view.brwLogin;
      this.authClient.login(options, this.loginSuccessCallBack.bind(this), this.failureCallBack.bind(this));
  },
  loginSuccessCallBack:function()
  {
    //Navigate to the From on the Success login Attempt.
    var x = new kony.mvc.Navigation("frmMyJourneys");
    x.navigate();
  },
  failureCallBack:function()
  {
    alert("failureCallBack");
  }
 });
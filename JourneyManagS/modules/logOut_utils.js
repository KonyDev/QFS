function fmgLogout(){
  kony.print("inside fmgLogout");
 
  this.authClient = KNYMobileFabric.getIdentityService("FMGADFS");
 // authClient.logout(
   //  {});
  var options={};
  //kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
  this.authClient.logout(options, this.logOutSuccessCallBack.bind(this), this.logOutFailureCallBack.bind(this));
  //navigating to logout screen
  //var navObj = new kony.mvc.Navigation("LoginADFS");
  //navObj.navigate();
}
function logOutSuccessCallBack(response)
{
  //kony.application.dismissLoadingScreen();
  kony.print("logOutSuccessCallBack..");
 // kony.print("logOut Success ::"+JSON.stringify(response));
  var x = new kony.mvc.Navigation("frmLogOut");
  x.navigate();
}
function logOutFailureCallBack()
{
  kony.application.dismissLoadingScreen();
  kony.print("logOut failed");
}
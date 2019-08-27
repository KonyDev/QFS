//Type your code here
/**
 * @function
 *
 */
function registerForPush(){
  kony.print("### Entering registerForPush function ####");
  if(kony.os.deviceInfo().name.toLowerCase()=='iphone'){
    callbackiPhoneRegister();
  }else if(kony.os.deviceInfo().name.toLowerCase()=='android'){
    callbackAndroidRegister();
  }else{
    alert("Currently push notification not supported for "+kony.os.deviceInfo().name);
  }
  kony.print("#### Exiting registerForPush function ####");
}
/**
 * Name		:	callbackiPhoneRegister
 * Author	:	Kony
 * Purpose	:	It register the device to the APNS.
**/
function callbackiPhoneRegister(){
  kony.print("#### Entering callbackiPhoneRegister function ####");
  var notificationTypes = [0, 1, 2];
  try{
    kony.push.register(notificationTypes);
  }catch(excp){
    debugger;
    kony.print("#### Exception occured while registering for push notification ####"+JSON.stringify(excp));
  }  
  kony.print("#### Exiting callbackiPhoneRegister function ####");
}
/**
 * Name		:	callbackAndroidRegister
 * Author	:	Kony
 * Purpose	:	This function register the senderID on the google cloud.
**/
function callbackAndroidRegister(){
  kony.print("#### Entering callbackiPhoneRegister function ####");
  //KMSPROP.senderID=frmUrl.txtBoxSenderID.text;
  //kony.print("senid:"+KMSPROP.senderID)
  var configToRegister = {senderid:JConstant.SENDER_ID};
  try{
    kony.print("#### Configuration object for registring to push: "+JSON.stringify(configToRegister));
    kony.push.register(configToRegister);
  }catch(excp){
    debugger;
    kony.print("#### Exception occured while registering for push notification ####"+JSON.stringify(excp));
  }
  kony.print("#### Exiting callbackiPhoneRegister function ####");
}

/**
 * @function
 *
 */
function setPushCallBack(){
  kony.print("#### Entering setPushCallBack function ####");
  var callBackObject={};
  callBackObject["onsuccessfulregistration"]=onsuccessfulregistration;
  callBackObject["onfailureregistration"]=onfailureregistration;
  callBackObject["onlinenotification"]=onlinePushNotificationCallback;
  callBackObject["offlinenotification"]=offlinePushNotificationCallback;
  callBackObject["onsuccessfulderegistration"]=unregSuccessCallback;
  callBackObject["onfailurederegistration"]=unregFailureCallback;
  try{
    kony.push.setCallbacks(callBackObject);
  }catch(excp){
    debugger;
    kony.print("####Exception occured while setting the callback for the pushnotification### "+
               JSON.stringify(excp));
  }
  kony.print("#### Exiting setPushCallBack function ####");
}
/**
 * Name		:	onlinePushNotificationCallback
 * Author	:	Kony
 * Purpose	:	This function is the callback for the received push msg event while online.
**/
function onlinePushNotificationCallback(msg){
  debugger;
  kony.print("************ JS onlinePushNotificationCallback() called *********");
  kony.print(JSON.stringify(msg));
  kony.store.setItem("isNewOnlineNotification", true);
  var currentForm = kony.application.getCurrentForm();
  if(currentForm.id === "frmLiveJourney"){
    var controller = _kony.mvc.GetController('frmLiveJourney', true);
    controller.displayOnlineMsg(msg);
  }
  else if(currentForm.id === "frmMyJourneys"){
    var controllerContext = _kony.mvc.GetController('frmMyJourneys', true);
    controllerContext.anyUnreadMsg();
  }

  /*if(msg["content-available"]!=1)
  {
    if(msg["isRichPush"]!=undefined){
      displayRichPush(msg);
    }else
      alert("Message: "+msg["content"]);
  }
  else
  {
    alert("Silent Push Received");
    //addCalendarEvent();
  }*/

} 
/**
 * Name		:	offlinePushNotificationAndroidCallback
 * Author	:	Kony
 * Purpose	:	This function is the callback for the received push msg event while offline
**/
function offlinePushNotificationCallback(msg){
  kony.print("************ JS offlinePushNotificationCallback() called *********");
  kony.print(msg);
  kony.store.setItem("isNewOfflineNotification", true);
//   if(msg["content-available"]!=1)
//     alert("Message: "+msg["content"]);
//   else{
//     alert("silent push received");
//   }
}
/**
 * Name		:	unregSuccessAndroidCallback
 * Author	:	Kony
 * Purpose	:	This is the callback for the successful unregistration from the GCM server.
**/
function unregSuccessCallback(){
  kony.print("Unregisterd Successfully!!");
  kony.application.dismissLoadingScreen();
  unsubscribeKMS();
}
/**
 * @function
 *
 * @param param 
 */
function onsuccessfulregistration(param){
  debugger;
  alert("#### Entering onsuccessfulregistration function ####");
  var client = kony.sdk.getCurrentInstance();
  var messagingSvc = client.getMessagingService();
  var deviceId = kony.os.deviceInfo().deviceid;
  var emailId=kony.store.getItem(USER_TBL.USER_EMAIL_ID);
  var UFID;
  if(typeof emailId=='string'){
    UFID=emailId;
  }else{
    UFID="NA";
  }
  var osType; /*"androidgcm" for android, "iphone" for iphone, "ipad" for ipad, "ipod" for ipod*/
  if(kony.os.deviceInfo().name.toLowerCase()=='iphone'){
    osType="iphone";
  }else if(kony.os.deviceInfo().name.toLowerCase()=='android'){
    osType="androidgcm";
  }
  var options = {
    //"authToken": "authorization_token"
  }; 
  try{
    messagingSvc.register(osType, deviceId, param, UFID, function(response) {
      kony.print("#### Device subscribed for push successfully:" + JSON.stringify(response));
      kony.store.setItem(JConstant.IS_PUSH_SUBSCRIBED, true);
      kony.store.setItem("registeredId", response.id);
      //alert(JSON.stringify(response));
    }, function(error) {
      kony.print("#### Push subscription failed:" + JSON.stringify(error));
      kony.store.setItem(JConstant.IS_PUSH_SUBSCRIBED, false);
    }, options);
  }catch(excp){
    debugger;
    kony.print("### Exception occured while subscribing for push to the KMS: "+JSON.stringify(excp));
  }
  kony.print("#### Exiting onsuccessfulregistration function ####");
  // kony.print("Registered SUCCESSFULLY :" + param);
  //Send the identifier to the Push Notifications Sender.
}
/**
 * @function
 *
 * @param param 
 */
function onfailureregistration(param){
  debugger;
  alert("Registration Failed");
}
/**
 * Name		:	unregFailureCallback
 * Author	:	Kony
 * Purpose	:	This is the callback for the unsuccessful deregistration from the GCM server.
**/
function unregFailureCallback(errormsg){
  debugger;
  alert(" Unregistration Failed!!");
  alert("Error message: "+JSON.stringify(errormsg));
  kony.application.dismissLoadingScreen();
}
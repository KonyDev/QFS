var KMSPROP = {};
var eventDataFromPush = {};
var isFromPush = false;
const ADMIN_UFID="adminufid"; 
var webpushConfig = {
  senderId:"425993078537",
  publicKey:"BC4nPPeiF4eIbyZxCZuQRZcVIazcsxJNCSbySWOS14WaKq8bivPEa58XNrOi2akaMpb_T9Egeg726dSiytTqbgg"
};

var pushCallbacks = {
	onsuccessfulregistration: regSuccessCallback,
	onfailureregistration: regFailureCallback,
	//onlinenotification: onlinePushNotificationCallback,
	//offlinenotification: offlinePushNotificationCallback,
	onsuccessfulderegistration: unregSuccessCallback,
	onfailurederegistration: unregFailureCallback
};


function setAllCallbacks(onlinenotifcallback,offlinenotifcallback) {
	try {
      pushCallbacks.onlinenotification = onlinenotifcallback;
      pushCallbacks.offlinenotification = offlinenotifcallback;
      
		kony.push.setCallbacks(pushCallbacks);
	} catch (err) {
		kony.print("KMS Module" + JSON.stringify(err));
	}
}


function registerKMS() {
	try {
		
        KMSPROP.osType = "webfcm";
		var configRegister = {
			messagingSenderId: webpushConfig.senderId,
            publicKey : webpushConfig.publicKey
		};
		//this will check whether the device is al
		if (kony.store.getItem("isRegisteredForKMS") === undefined || kony.store.getItem("isRegisteredForKMS") === "" || kony.store.getItem("isRegisteredForKMS") === null) {
			kony.push.register(configRegister);
		}
        else {
          kony.print("Already registered ");
        }
	} catch (err) {
		kony.print("KMS Module" + JSON.stringify(err));
	}
}
/*
 * @function regSuccessCallback
 * This function is registration success callback on successful registration of APS or GCM
 */
function regSuccessCallback(regId) {
	try {
		kony.store.setItem("isRegisteredForKMS", "true");
		KMSPROP.deviceId = kony.os.deviceInfo().deviceid;
		KMSPROP.device_rec = kony.os.deviceInfo().deviceid;
		var messagingSvc = KNYMobileFabric.getMessagingService();
		messagingSvc.register(KMSPROP.osType, KMSPROP.deviceId, regId,  ADMIN_UFID, successCallbackForSubscribe, failureCallbackForSubscribe);
		function successCallbackForSubscribe(res) {
			kony.application.dismissLoadingScreen(); 
			kony.print(JSON.stringify(res));
          			//alert("Successfully subscribed with KMS "+JSON.stringify(res));

		}
		function failureCallbackForSubscribe(err) {
			kony.store.removeItem("isRegisteredForKMS");
			kony.application.dismissLoadingScreen();
			kony.print(JSON.stringify(err));
			kony.print("Subscription Failed.");
                    			//alert("Failed to  subscribe with KMS "+JSON.stringify(res));

		}
	} catch (err) {
		kony.print("KMS Module" + JSON.stringify(err));
	}
}
/*
 * @function regFailureCallback
 * This function is registration failure callback on failure registration of APS or GCM
 */
function regFailureCallback(errormsg) {
	kony.print("Registration Failed ");
}

/*
 * @function onlinePushNotificationCallback
 * This function is the callback for online push notification
 */
function onlinePushNotificationCallback(msg) {
	try {
      
		alert("Message Recieved" + JSON.stringify(msg));
//         var message = msg["content"];
// 		var title = msg["title"];
//         if(msg.hasOwnProperty("gcm.notification.body")){
//           message = msg["gcm.notification.body"];
//          title = msg["gcm.notification.title"];
//         }
	
// 		var pspConfig = {};
// 		var alert = kony.ui.Alert({
// 				"message": message.split('.')[0],
// 				"alertType": constants.ALERT_TYPE_CONFIRMATION,
// 				"alertTitle": title.split(':')[0],
// 				"yesLabel": "View",
// 				"noLabel": "Cancel",
// 				"alertIcon": "icon.png",
// 				"alertHandler": function (response) {
// 					if (response)
// 						dispatchNotifiaction(msg.event_id);
// 				}
// 			},
// 				pspConfig);
	} catch (err) {
		kony.print("KMS Module" + JSON.stringify(err));
	}
}


function offlinePushNotificationCallback(msg) {
	try {
		alert("Offline notification received "+JSON.stringify(msg));
	} catch (err) {
		kony.print("offlinePushNotificationCallback " + JSON.stringify(err));
	}
}


function unregSuccessCallback() {
	kony.print("Unregisterd Succesfully!!");
}
function unregFailureCallback(errormsg) {
	kony.print(" Unregistration Failed!!" + errormsg);
}



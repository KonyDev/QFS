define(['./Inherits','./NativeController','./KonyLogger'],function (Inherits,NativeController,konyLoggerModule) {
  var konymp = konymp || {};
  konymp.logger = new konyLoggerModule("NativeControllerAndroid");
  /**
    * @class  NativeControllerAndroid
    * @private
    * @description: Class for the Android implementation of the DAON
    */
   	var NativeControllerAndroid=function(componentInstance){
        konymp.logger.trace("-- Start constructor NativeControllerAndroid --", konymp.logger.FUNCTION_ENTRY);
      	self=this;
      	self.componentInstance=componentInstance;
      	NativeController.call(this,componentInstance);
      	konymp.logger.trace("-- end  constructor  NativeControllerAndroid --", konymp.logger.FUNCTION_EXIT);
    };
      	
   Inherits(NativeControllerAndroid,NativeController);
    return NativeControllerAndroid;
});
define(['./Inherits','./NativeController','./KonyLogger'],function (Inherits,NativeController,konyLoggerModule) {
  //logger for the daon ios controller
  var konymp = konymp || {};
  konymp.logger = new konyLoggerModule("daon/IOSController");

  /**
    * @class  NativeControllerIOS
    * @private
    * @description: Class for the IOS implementation of the DAON
    */
  var NativeControllerIOS=function(componentInstance){
    konymp.logger.trace("-- Start constructor NativeControllerIOS --", konymp.logger.FUNCTION_ENTRY);
    self = this;
    self.componentInstance=componentInstance;
    NativeController.call(this,componentInstance);
	konymp.logger.trace("-- end  constructor  NativeControllerIOS --", konymp.logger.FUNCTION_EXIT);

  };
  Inherits(NativeControllerIOS,NativeController);
  return NativeControllerIOS;
});

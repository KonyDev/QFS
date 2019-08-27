define([], function() {
  var konyLoggerModule = require('com/konymp/pdfviewer/konyLogger');
  var konymp = konymp || {};
  konymp.logger = (new konyLoggerModule("PDFViewer Component")) || function() {};
  konymp.logger.setLogLevel("DEBUG");
  konymp.logger.enableServerLogging = true;

    var ControllerImplementation = function(componentInstance, componentName) {
        konymp.logger.trace("----------Entering ControllerImplementation Function---------", konymp.logger.FUNCTION_ENTRY);
        this.componentInstance = componentInstance;
        this.getNativeController = function() {
            try {
                konymp.logger.trace("----------Entering getNativeController Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this.nativeControllerInstance === undefined) {
                    var deviceName = kony.os.deviceInfo().name;
                    var platformName = null;
                    if (deviceName.toLowerCase() === 'iphone' || deviceName.toLowerCase() === 'ipad') {
                        platformName = 'IOS.js';
                    } else if (deviceName.toLowerCase() === 'android') {
                        platformName = 'Android.js';
                    }
                  	else if(deviceName.toLowerCase() === 'thinclient'){
                      	platformName = 'DesktopWeb';
                    }
                    var nativeControllerPath = 'com/konymp/' + 'pdfviewer' + '/NativeController' + platformName;
                    var nativeController = require(nativeControllerPath);
                    this.nativeControllerInstance = new nativeController(this);
                }
                konymp.logger.trace("----------Exiting getNativeController Function---------", konymp.logger.FUNCTION_EXIT);
                return this.nativeControllerInstance;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };
        /**
         * @function createWebview
         * @private
         * @description: Calls createWebview method in NativeController
         */
        this.createWebview = function() {
            try {
                konymp.logger.trace("----------Entering createWebview Function---------", konymp.logger.FUNCTION_ENTRY);
                this.getNativeController().createWebview();
              	if (this.componentInstance.renderType !== this.componentInstance._manual) {
                        if (this.componentInstance.pdfType === this.componentInstance._online) {
                            this.setURL();
                        } else {
                            this.setFilePath();
                        }
                    }
                konymp.logger.trace("----------Exiting createWebview Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };
      /**
         * @function setURL
         * @private
         * @description: Calls setURL method in NativeController
         */
        this.setURL = function() {
            try {
                konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_ENTRY);
                this.getNativeController().setURL();
                konymp.logger.trace("----------Exiting setURL Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };  
       /**
         * @function setFilePath
         * @private
         * @description: call setFilePath of natice controller
         */
      	this.setFilePath = function(){
      		try {
                konymp.logger.trace("----------Entering setFilePath Function---------", konymp.logger.FUNCTION_ENTRY);
                this.getNativeController().setFilePath();
                konymp.logger.trace("----------Exiting setFilePath Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
    	};
      	this.render = function(){
          	try {
                konymp.logger.trace("----------Entering render Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this.componentInstance.renderType === this.componentInstance._manual) {
                    if (this.componentInstance.pdfType === this.componentInstance._online) {
                        this.setURL();
                    } else {
                        this.setFilePath();
                    }
                } else {
                    throw {
                        "error": "Exception",
                        "message": "Please select render type manual to use this render API"
                    };
                }
                konymp.logger.trace("----------Exiting render ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                throw exception;
            }
        };
        konymp.logger.trace("----------Exiting ControllerImplementation Function---------", konymp.logger.FUNCTION_EXIT);
    	};
       	
  		
    return ControllerImplementation;
});

define([], function() {
    var konyLoggerModule = require('com/konymp/pdfviewer/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("PDFViewer Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;

    var NativeControllerDesktopWeb = function(implementationContext) {
        this.componentInstance = implementationContext.componentInstance;
    };

    /**
     * @function createWebview
     * @private
     * @description: checks for createWebview method
     */
    NativeControllerDesktopWeb.prototype.createWebview = function() {
        try {
      		konymp.logger.trace("----------Entering createWebview Function---------", konymp.logger.FUNCTION_ENTRY);
	      	this.componentInstance.view.height = "0%";
          	this.componentInstance.view.width = "0%";
          	this.componentInstance.view.forceLayout();
          	konymp.logger.trace("----------Entering createWebview Function---------", konymp.logger.FUNCTION_EXIT);
    	} catch (exception) {
      		konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      		if(exception.type === "CUSTOM"){
        		throw exception;
      		}
    	}
    };
    /**
     * @function setURL
     * @private
     * @description: checks setURL method
     */
    NativeControllerDesktopWeb.prototype.setURL = function() {
        try {
      		konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_ENTRY);
	      	kony.application.openURL(this.componentInstance.url);
          	konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_EXIT);
    	} catch (exception) {
      		konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      		if(exception.type === "CUSTOM"){
        		throw exception;
      		}
    	}
    };
  /**
     * @function setFilePath
     * @private
     * @description: checks setFilePath method
     */
  NativeControllerDesktopWeb.prototype.setFilePath=function(){
    try {
      		konymp.logger.trace("----------Entering setFilePath Function---------", konymp.logger.FUNCTION_ENTRY);
      		var localFile = this.componentInstance.setDesktopWeb;
      		if(localFile === undefined || localFile === null){
              	throw {
                  "error" : "exception",
                  "message" : "please provide a valid local file path"
                };
            }
      		var localFileUrl = "file://"+ localFile;
      		kony.application.openURL(localFileUrl);
	      	konymp.logger.trace("----------Entering setFilePath Function---------", konymp.logger.FUNCTION_EXIT);
    	} catch (exception) {
      		konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      		if(exception.type === "CUSTOM"){
        		throw exception;
      		}
    	}
  };
  return NativeControllerDesktopWeb;
});

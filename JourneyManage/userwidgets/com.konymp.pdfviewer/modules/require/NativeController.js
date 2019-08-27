define([],function (){
  var konyLoggerModule = require('com/konymp/pdfviewer/konyLogger');
  var konymp = konymp || {};
  konymp.logger = (new konyLoggerModule("PDFViewer Component")) || function() {};
  konymp.logger.setLogLevel("DEBUG");
  konymp.logger.enableServerLogging = true;

  var NativeController=function(platformControllerContext){
    this.componentInstance = platformControllerContext.componentInstance;
  };
 	/**
     * @function createWebview
     * @private
     * @description: checks for createWebview method
     */
    NativeController.prototype.createWebview = function() {
        try {
      		konymp.logger.trace("----------Entering createWebview Function---------", konymp.logger.FUNCTION_ENTRY);
	      	throw {
        		"type":"DEV",
        		"Error": "Method doesn't implemented",
        		"message": "You have to implement the method startVerification!"
      		};
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
    NativeController.prototype.setURL = function() {
        try {
      		konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_ENTRY);
	      	throw {
        		"type":"DEV",
        		"Error": "Method doesn't implemented",
        		"message": "You have to implement the method startVerification!"
      		};
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
  NativeController.prototype.setFilePath=function(){
    try {
      		konymp.logger.trace("----------Entering setFilePath Function---------", konymp.logger.FUNCTION_ENTRY);
	      	throw {
        		"type":"DEV",
        		"Error": "Method doesn't implemented",
        		"message": "You have to implement the method startVerification!"
      		};
    	} catch (exception) {
      		konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      		if(exception.type === "CUSTOM"){
        		throw exception;
      		}
    	}
  };
  /**
         * @function validateUrl
         * @description This function is used to validate url
         * @private
         * @param val
         */
        NativeController.prototype.validateUrl = function(val) {
            try {
                konymp.logger.trace("----------Entering validateUrl Function---------", konymp.logger.FUNCTION_ENTRY);
                var extenstion = val.substring(val.length - 3, val.length).toLowerCase();
                if (val !== null && this.componentInstance._urlRegex.test(val) && extenstion !== null && extenstion.endsWith("pdf")) {
                    this.componentInstance._url = val;
                  	return true;
                } else {
                  	return false;
                }
                konymp.logger.trace("----------Exiting validateUrl ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                throw exception;
            }
        };
  return NativeController;
});

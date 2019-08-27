define(['./Inherits', './NativeController'], function(Inherits, NativeController) {
    var konyLoggerModule = require('com/konymp/pdfviewer/konyLogger');
    var konymp = konymp || {};
    var konympJumio = konympJumio || {};
    konymp.logger = (new konyLoggerModule("PDFViewer Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;

    var NativeControllerAndroid = function(implementationContext) {
        konympJumio.controllerContext = this;
        this.componentInstance = implementationContext.componentInstance;
        NativeController(this);
        this.importClasses();
    };

    Inherits(NativeControllerAndroid, NativeController);

    /**
     * @function importClasses
     * @private
     * @description: this function will import all the classes from the franeworks and store in the nativeClasses variable
     */
    NativeControllerAndroid.prototype.importClasses = function() {
        try {
            konymp.logger.trace("----------Entering importClasses Function---------", konymp.logger.FUNCTION_ENTRY);
            this.konyMain = java.import('com.konylabs.android.KonyMain');
            this.webview = java.import("android.webkit.WebView");
            this.viewGroup = java.import("android.view.ViewGroup");
            this.wvClient = java.import("android.webkit.WebViewClient");
            this.file = java.import("java.io.File");
            this.intent = java.import("android.content.Intent");
            this.uri = java.import("android.net.Uri");
            this.konyContext = this.konyMain.getActivityContext();
            konymp.logger.trace("----------Exiting importClasses Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function createWebview
     * @private
     * @description: creats webview instance
     */
    NativeControllerAndroid.prototype.createWebview = function() {
        try {
            konymp.logger.trace("----------Entering createWebview Function---------", konymp.logger.FUNCTION_ENTRY);
            var eventObject = this.componentInstance.view.nativePDF.getContainerView();
            this.webViewObject = new this.webview(this.konyContext);
            var layoutParams = this.viewGroup.LayoutParams;
            this.webViewObject.getSettings().setAllowFileAccessFromFileURLs(true);
            this.webViewObject.getSettings().setJavaScriptEnabled(true);
            var konyDeviceInfoObject = kony.os.deviceInfo();
            var layoutParamsObject = new layoutParams(konyDeviceInfoObject.deviceWidth, konyDeviceInfoObject.deviceHeight);
            this.webViewObject.setLayoutParams(layoutParamsObject);
            this.webViewObject.setWebViewClient(new this.wvClient());
            eventObject.addView(this.webViewObject);
            this.componentInstance.view.forceLayout();
            konymp.logger.trace("----------Exiting createWebview Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function setURL
     * @private
     * @description: loads url
     */
    NativeControllerAndroid.prototype.setURL = function() {
        try {
            konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_ENTRY);
          	if(this.webViewObject !== undefined && this.webViewObject !== null){
              	if(!this.validateUrl(this.componentInstance.url)){
                  	throw this.componentInstance._urlError;
                }
          		kony.runOnMainThread(function() {
               		var loadUrl = "https://docs.google.com/gview?embedded=true&url=" + this.componentInstance.url;
              		this.webViewObject.loadUrl(loadUrl);
            	}.bind(this), [this.componentInstance.url]);
            }
          	else{
              	this.createWebview();
              	kony.runOnMainThread(function() {
               		var loadUrl = "https://docs.google.com/gview?embedded=true&url=" + this.componentInstance.url;
              		this.webViewObject.loadUrl(loadUrl);
            	}.bind(this), [this.componentInstance.url]);
            }
            konymp.logger.trace("----------Exiting setURL Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function setFilePath
     * @private
     * @description: Loads file path
     */
    NativeControllerAndroid.prototype.setFilePath = function() {
        try {
            konymp.logger.trace("---------------Entering  setFilePath function------------", konymp.logger.FUNCTION_ENTRY);
            var val = this.componentInstance.setAndroidPath;
          	if(val === undefined || val === null){
              	throw {
                  "error" : "IvalidArguments",
                  "messsage" : "Please provide a valid file path",
                  "errorCode" : 2100
                };
            }
            var extenstion = val.substring(val.length - 3, val.length).toLowerCase();
            var fileObj = new this.file(val);
            if (this.konyContext.getApplicationInfo().targetSdkVersion <= 23) {
                if (extenstion.endsWith("pdf") && fileObj.exists()) {
                    var sendIntent = new this.intent(this.intent.ACTION_VIEW);
                    sendIntent.addFlags(this.intent.FLAG_GRANT_READ_URI_PERMISSION);
                    sendIntent.setDataAndType(this.uri.fromFile(fileObj), this.componentInstance._mimeType);
                    this.konyContext.startActivity(sendIntent);
                } else {
                    throw this.context._pathError;
                }
            } else {
                throw {
                    "ERROR": "SDK ERROR",
                    "message": "Please use targer sdk version 23 or below",
                  	"errorCode" : 2150
                };
            }
            konymp.logger.trace("----------Exiting setFilePath Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
        konymp.logger.trace("---------------Exiting Android function---------------", konymp.logger.FUNCTION_EXIT);
    };
    return NativeControllerAndroid;

});

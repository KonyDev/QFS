define(['./Inherits', './NativeController'], function(Inherits, NativeController) {
    var konyLoggerModule = require('com/konymp/pdfviewer/konyLogger');
    var konymp = konymp || {};
    var konympJumio = konympJumio || {};
    konymp.logger = (new konyLoggerModule("PDFViewer  Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;

    var NativeControllerIOS = function(implementationContext) {
        konympJumio.controllerContext = this;
        this.componentInstance = implementationContext.componentInstance;
        NativeController(this);
        this.importClasses();
    };
    Inherits(NativeControllerIOS, NativeController);

    /**
     * @function importClasses
     * @private
     * @description: this function will import all the classes from the frameworks
     */
    NativeControllerIOS.prototype.importClasses = function() {
        try {
            konymp.logger.trace("----------Entering importClasses Function---------", konymp.logger.FUNCTION_ENTRY);
            this.uIWebView = objc.import("UIWebView");
            this.nSURLObj = objc.import("NSURL");
            this.nSURLRequestObj = objc.import("NSURLRequest");
            this.nSFileManager = objc.import("NSFileManager");
            this.nSBundle = objc.import("NSBundle");
            var seed = Math.random();
            var x = (Math.sin(seed++) * 10000);
            var randomNumber = x - Math.floor(x);
            this.uiWebViewDelegate = objc.newClass('uiWebViewDelegate' + randomNumber, 'NSObject', ['UIWebViewDelegate'], {
                webViewDidStartLoad: this.webViewStartLoad.bind(this),
                webViewDidFinishLoad: this.webViewFinishLoad.bind(this),
                webViewDidFailLoadWithError: this.webViewFailLoadWithError.bind(this)
            });
            this.uiWebViewDelegateObj = this.uiWebViewDelegate.jsnew();
            konymp.logger.trace("----------Exiting importClasses Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function webViewStartLoad
     * @description This function is called when web view start loading
     * @private
     * @param webview
     */
    NativeControllerIOS.prototype.webViewStartLoad = function(webview) {
        try {
            konymp.logger.trace("----------Entering webViewStartLoad Function---------", konymp.logger.FUNCTION_ENTRY);
            kony.application.showLoadingScreen(null, "Rendering pdf",
                constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {
                    shouldShowLabelInBottom: "true",
                    separatorHeight: 20,
                    progressIndicatorType: constants.PROGRESS_INDICATOR_TYPE_SMALL,
                    progressIndicatorColor: "Gray"
                });
            konymp.logger.trace("----------Entering webViewStartLoad Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function webViewFinishLoad
     * @description This function is called when web view loading is finished
     * @private
     * @param webview
     */
    NativeControllerIOS.prototype.webViewFinishLoad = function(webview) {
        try {
            konymp.logger.trace("----------Entering webViewFinishLoad Function---------", konymp.logger.FUNCTION_ENTRY);
            kony.application.dismissLoadingScreen();
            konymp.logger.trace("----------Entering webViewFinishLoad Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function webViewFailLoadWithError
     * @description This function is called when web view rendering is finished with errors
     * @private
     * @param webview , error
     */
    NativeControllerIOS.prototype.webViewFailLoadWithError = function(webview, error) {
        try {
            konymp.logger.trace("----------Entering webViewFailLoadWithError Function---------", konymp.logger.FUNCTION_ENTRY);
            kony.application.dismissLoadingScreen();
            konymp.logger.trace("----------Entering webViewFailLoadWithError Function---------", konymp.logger.FUNCTION_EXIT);
            throw error;
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function createWebview
     * @private
     * @description: this function will create webview 
     */
    NativeControllerIOS.prototype.createWebview = function() {
        try {
            konymp.logger.trace("----------Entering createWebview Function---------", konymp.logger.FUNCTION_ENTRY);
            var eventObject = this.componentInstance.view.nativePDF.getContainerView();
            if (eventObject !== undefined && eventObject !== null) {
                if (eventObject.subviews.length > 0) {
                    var subviews = eventObject.subviews;
                    for (var i = 0; i < subviews.length; i++) {
                      subviews[i].removeFromSuperview();
                    } 
                }
                this.webViewObject = this.uIWebView.alloc().jsinit();
                var width = eventObject.bounds.width;
                var height = eventObject.bounds.height;
                var frameVal = {
                    "x": 0,
                    "y": 0,
                    "width": width,
                    "height": height
                };
                this.webViewObject.frame = frameVal;
                this.webViewObject.delegate = this.uiWebViewDelegateObj;
                this.webViewObject.scalesPageToFit = true;
                eventObject.addSubview(this.webViewObject);
                this.componentInstance.view.forceLayout();
            }
            konymp.logger.trace("----------Exiting createWebview Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function setURL
     * @private
     * @description: this function will load url
     */
    NativeControllerIOS.prototype.setURL = function() {
        try {
            konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_ENTRY);
          	if(!this.validateUrl(this.componentInstance.url)){
            	throw this.componentInstance._urlError;
            }
            var urlObj = this.nSURLObj.URLWithString(this.componentInstance.url);
            this.urlRequestObj = this.nSURLRequestObj.requestWithURL(urlObj);
            this.webViewObject.loadRequest(this.urlRequestObj);
          	this.componentInstance.view.forceLayout();
            konymp.logger.trace("----------Exiting setURL Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    /**
     * @function setFilePath
     * @private
     * @description: loads file path
     */
    NativeControllerIOS.prototype.setFilePath = function() {
        try {
            konymp.logger.trace("---------------Entering  setFilePath function------------", konymp.logger.FUNCTION_ENTRY);
            if (this.componentInstance.setIphonePath.startsWith("file://")) {
                var path = this.componentInstance.setIphonePath.replace("file://", "");
                var urlPath = this.nSURLObj.URLWithString(path);
                this.webViewObject.loadRequest(this.nSURLRequestObj.requestWithURL(urlPath));
            } else if (this.componentInstance.setIphonePath.startsWith("/")) {
                var nsFileManager = this.nSFileManager.alloc().jsinit();
                if (nsFileManager.fileExistsAtPath(this.componentInstance.setIphonePath)) {
                    var urlPath1 = this.nSURLObj.URLWithString(this.componentInstance.setIphonePath);
                    this.webViewObject.loadRequest(this.nSURLRequestObj.requestWithURL(urlPath1));
                } else {
                    throw {
                        "Error": "Invalid Path",
                        "message": "The file path you given doesn't existes",
                      	"errorCode" : 2100
                    };
                }
            } else {
                if (this.componentInstance.setIphonePath.charAt(".") !== -1) {
                    var filePath = this.nSBundle.mainBundle().pathForResourceOfType(this.componentInstance.setIphonePath, this.componentInstance._iphoneType);
                    var urlPath2 = this.nSURLObj.URLWithString(filePath);
                    this.webViewObject.loadRequest(this.nSURLRequestObj.requestWithURL(urlPath2));
                } else {
                    throw this.componentInstance._pathError;
                }
            }
            konymp.logger.trace("----------Exiting setFilePath Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
        konymp.logger.trace("---------------Exiting IOS function---------------", konymp.logger.FUNCTION_EXIT);
    };
    return NativeControllerIOS;

});

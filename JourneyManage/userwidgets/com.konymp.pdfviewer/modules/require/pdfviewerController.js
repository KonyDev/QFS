define(['./ControllerImplementation.js'], function(ControllerImplementation) {
    var konyLoggerModule = require('com/konymp/pdfviewer/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("PDF Viewer Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;

    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            konymp.logger.trace("----------Entering constructor Function---------", konymp.logger.FUNCTION_ENTRY);
            this._url = "";
            this._urlRegex = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
            this._iphonePath = "";
            this._androidPath = "";
            this._pdfType = "";
            this._iphoneType = "pdf";
            this._renderType = "";
            this.local = true;
            this._online = "Online";
            this._local = "Local File Path";
            this._manual = "Manual";
            this._automatic = "Automatic";
            this._urlError = {
                "error": "Invalid Path",
                "message": "please give a valid URL",
              	"errorCode" : 2100
            };
            this._pathError = {
                "error": "Invalid Path",
                "message": "please enter a valid path",
              	"errorCode" : 2100
            };
            this._fileError = {
                "error": "File Creation Error",
                "message": "Unable to create file or Please provide valid filename",
              	"errorCode" : 2100
            };
            this.type = {
                "Online": false,
                "Local File Path": true
            };
            this.handler = new ControllerImplementation(this, baseConfig.id);
            konymp.logger.trace("----------Exiting constructor ---------", konymp.logger.FUNCTION_EXIT);
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "url", function(val) {
                try {
                    this._url = val;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineGetter(this, "url", function() {
                try {
                    return this._url;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineGetter(this, "setIphonePath", function() {
                try {
                    return this._iphonePath;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineSetter(this, "setIphonePath", function(val) {
                try {
                    if (this.rendertype !== this._manual) {
                        if (val !== undefined && val !== null && val !== "" || !this.local) {
                            this._iphonePath = val;
                        } else {
                            throw this._pathError;
                        }
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineGetter(this, "setAndroidPath", function() {
                try {
                    return this._androidPath;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineSetter(this, "setAndroidPath", function(val) {
                try {
                    if (this.rendertype !== this._manual) {
                        if (val !== undefined && val !== null && val !== "" || !this.local) {
                            this._androidPath = val;
                        } else {
                            throw this._pathError;
                        }
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });          
          	defineGetter(this, "setDesktopWeb", function() {
                try {
                    return this._setDesktopWeb;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineSetter(this, "setDesktopWeb", function(val) {
                try {
                    this._setDesktopWeb = val;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineGetter(this, "pdfType", function() {
                try {
                    return this._pdfType;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineSetter(this, "pdfType", function(val) {
                try {
                    if (val === this._online || val === this._local) {
                        this._pdfType = val;
                        this.local = this.type[val];
                    } else {
                        throw {
                            "error": "pdf type error",
                            "message": "Please select a valid pdf type",
                          	"errorCode" : 2100
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineGetter(this, "renderType", function() {
                try {
                    return this._renderType;
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            defineSetter(this, "renderType", function(val) {
                try {
                    if (val === this._manual || val === this._automatic) {
                        this._renderType = val;
                    } else {
                        throw {
                            "error": "render type error",
                            "message": "Please select a valid render type",
                          	"errorCode" : 2100
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    throw exception;
                }
            });
            konymp.logger.trace("----------Exiting initsetgetter ---------", konymp.logger.FUNCTION_EXIT);
        },      
        /**
         * @function fetchAndDisplay
         * @description This function is used to render pdf in iOS
         * @private
         * @param eventObj
         */
        fetchAndDisplay: function(eventObj) {
            try {
                konymp.logger.trace("----------Entering fetchAndDisplay Function---------", konymp.logger.FUNCTION_ENTRY);
                if (eventObj !== undefined && eventObj !== null) {
                    this.handler.createWebview();                   
                }
                konymp.logger.trace("----------Exiting fetchAndDisplay Function ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (this.onErrorCallback !== undefined && this.onErrorCallback !== null) {
                    this.onErrorCallback(exception);
                }
            }
        },
        /**
         * @function setURL
         * @description Function used to change URL of the pdf dynamically
         * @public
         * @param url
         */
        setURL: function(url) {
            try {
                konymp.logger.trace("----------Entering setURL Function---------", konymp.logger.FUNCTION_ENTRY);
                if (url !== undefined && url !== null && url.trim() !== "") {
                    this.url = url;
                    this.handler.setURL();
                } else {
                    throw this._urlError;
                }
                konymp.logger.trace("----------Exiting setUrl ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (this.onErrorCallback !== undefined && this.onErrorCallback !== null) {
                    this.onErrorCallback(exception);
                }
            }
        },
        /**
         * @function setAndroidFilePath
         * @description This function is used to render android file path
         * @private
         * @param path
         */
        setAndroidFilePath: function(path) {
            try {
                konymp.logger.trace("----------Entering setAndroidFilePath Function---------", konymp.logger.FUNCTION_ENTRY);
                if (path !== undefined && path !== null && path.trim() !== "") {
                    this.setAndroidPath = path;
                    this.handler.setFilePath();
                } else {
                    throw this._pathError;
                }
                konymp.logger.trace("----------Exiting setAndroidFilePath Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (this.onErrorCallback !== undefined && this.onErrorCallback !== null) {
                    this.onErrorCallback(exception);
                }
            }
        },
        /**
         * @function setIphoneFilePath
         * @description This function is used to render iphone file path
         * @private
         * @param path
         */
        setIphoneFilePath: function(path) {
            try {
                konymp.logger.trace("----------Entering setIphoneFilePath Function---------", konymp.logger.FUNCTION_ENTRY);
                if (path !== undefined && path !== null && path.trim() !== "") {
                    this.setIphonePath = path;
                    this.handler.setFilePath();
                } else {
                    throw this._pathError;
                }
                konymp.logger.trace("----------Exiting setIphoneFilePath ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (this.onErrorCallback !== undefined && this.onErrorCallback !== null) {
                    this.onErrorCallback(exception);
                }
            }
        },
      	/**
         * @function setIphoneFilePath
         * @description This function is used to render iphone file path
         * @private
         * @param path
         */
        setDesktopWebFilePath: function(path) {
            try {
                konymp.logger.trace("----------Entering setIphoneFilePath Function---------", konymp.logger.FUNCTION_ENTRY);
                if (path !== undefined && path !== null && path.trim() !== "") {                    
                    this.handler.setFilePath();
                } else {
                    throw this._pathError;
                }
                konymp.logger.trace("----------Exiting setIphoneFilePath ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (this.onErrorCallback !== undefined && this.onErrorCallback !== null) {
                    this.onErrorCallback(exception);
                }
            }
        },
      	/**
         * @function render
         * @description This function is used to render pdf
         * @private
         * @param path
         */
        render: function() {
            try {
                konymp.logger.trace("----------Entering render Function---------", konymp.logger.FUNCTION_ENTRY);
                this.handler.render();
                konymp.logger.trace("----------Exiting render ---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (this.onErrorCallback !== undefined && this.onErrorCallback !== null) {
                    this.onErrorCallback(exception);
                }
            }
        }
    };
});

define(['./ControllerImplementation.js','./KonyLogger'],function(ControllerImplementation,konyLoggerModule) {
	var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Daon Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
			var analytics=require("com/konymp/"+"singletimepicker"+"/analytics");
            analytics.notifyAnalytics();
      // Componet property reference Varaiables
      this.handler=new ControllerImplementation(this,baseConfig.id);
    },
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
          /**
       		* @property : endYear
       		* @description : this property specifies the end year in year column
       		* @return : Number
       		* @remarks : 
       		*/
      		defineSetter(this, "endYear", function(val) {
            	konymp.logger.trace("----------------------------- Setting endYear", konymp.logger.FUNCTION_ENTRY);
                this._endYear=val;
                konymp.logger.trace("----------------------------- End endYear", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "endYear", function() {
               	konymp.logger.trace("----------------------------- Getting endYear", konymp.logger.FUNCTION_ENTRY);
              	return (this._endYear);
            });
          	/**
       		* @property : startYear
       		* @description : this property specifies the start year in year column
       		* @return : Number
       		* @remarks : 
       		*/
      		defineSetter(this, "startYear", function(val) {
            	konymp.logger.trace("----------------------------- Setting startYear", konymp.logger.FUNCTION_ENTRY);
                this._startYear=val;
                konymp.logger.trace("----------------------------- End startYear", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "startYear", function() {
               	konymp.logger.trace("----------------------------- Getting startYear", konymp.logger.FUNCTION_ENTRY);
              	return (this._startYear);
            });
          	/**
       		* @property : startYear
       		* @description : this property specifies the start year in year column
       		* @return : Number
       		* @remarks : 
       		*/
      		defineSetter(this, "displayType", function(val) {
            	konymp.logger.trace("----------------------------- Setting startYear", konymp.logger.FUNCTION_ENTRY);
                this._displayType=val;
                konymp.logger.trace("----------------------------- End startYear", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "displayType", function() {
               	konymp.logger.trace("----------------------------- Getting startYear", konymp.logger.FUNCTION_ENTRY);
              	return (this._displayType);
            });
		},
    	/**
     	  * @api : getSelectedDate
     	  * @description : Fetches the date that the user selects
          * @return : JSON
          * @remarks : remarks
          */
    	getSelectedDate : function(){
          	try{
          		return this.handler.getSelectedDate();
            }catch(exception){
              throw exception;
            }
        }
    };
  
});
define([],function (){
   	var ControllerImplementation=function(componentInstance,componentName){
      this.componentInstance=componentInstance;
      this.getNativeController=function(){
            if(this.nativeControllerInstance===undefined){
            	var deviceInfo=kony.os.deviceInfo();
              	var platformName=null;
				if(deviceInfo.name.toLowerCase()==='iphone' || deviceInfo.name.toLowerCase()==='ipad')
      			{
                  platformName='IOS';
                }else if(deviceInfo.name.toLowerCase()==='android'){
                  platformName='Android';
                }else{
                  platformName=deviceInfo.name.charAt(0).toUpperCase()+deviceInfo.name.slice(1);
                }
              	var nativeControllerPath='com/konymp/singledatepicker'+'/NativeController'+platformName+'.js';
    			var nativeController=require(nativeControllerPath);
      			this.nativeControllerInstance=new nativeController(componentInstance);
            }
     		return this.nativeControllerInstance;
    	};
      	/**
	  	  * @function setDataForDatesSegment
	  	  * @scope public
	      * @description this function is invoked to set data for dates segment
	      */
      	this.getSelectedDate=function(){
			return this.getNativeController().getSelectedDate();
    	};
      	/**
	      * @function setData
	      * @scope private
	      * @description this function is invoked set data to segments
	      */
   	  	this.setData=function(){
			this.getNativeController().setData();
    	};
      	/**
	  	  * @function doneClick
	  	  * @scope private
	  	  * @description this function is invoked on click of done button to close calendar
	  	  */
      	this.doneClick=function(){
			this.getNativeController().doneClick();
    	};
    };
  	
    return ControllerImplementation;
});
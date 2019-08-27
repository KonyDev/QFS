define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      imageInd:0,
      preshow:function(){
        this.imageInd = 1;
        this.view.flexImages.width= "0dp";
      },
      takePicture:function(eventObject){
        eval("this.view.imgPic"+this.imageInd).rawBytes = eventObject.rawBytes;
        this.view.flexImages.width = (this.imageInd*80)+"dp";
        this.imageInd = this.imageInd+1;
        
        
      }
	};
});
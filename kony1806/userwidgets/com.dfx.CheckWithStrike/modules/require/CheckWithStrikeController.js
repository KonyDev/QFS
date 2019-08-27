define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      preshow:function(){
        this.view.imgCheck.src = "checkboxn.png";
        this.view.rtxtText.skin = "rtxtGrey";
      },
      
      onClickCheckBox:function(){
        this.view.imgCheck.src = "checkboxf.png";
        this.view.rtxtText.text = "<strike>"+this.view.rtxtText.text+"</strike>";
      }
	};
});
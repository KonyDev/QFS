define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      preshow:function()
      {
        this.view.btnYes.skin="skinRadioFocus";
        this.view.btnNo.skin="skinRadioNormal";
      },
      
       btnYes_onClick:function()
      {//this.view.btnYes.setEnabled(true);
        this.view.btnYes.skin="skinRadioFocus";
        this.view.btnNo.skin="sknBtnYesN";
      },
      btnNo_onClick:function()
      {
        //this.view.btnNo.setEnabled(true);
        this.view.btnNo.skin="skinRadioFocus";
        //this.view.btnYes.setEnabled(false);
		this.view.btnYes.skin="sknBtnYesN";
      }
      
	};
});
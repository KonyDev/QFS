define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      preshow:function(){
        this.view.btnNo.skin = "skinRadioNormal";
        this.view.btnYes.skin = "skinRadioNormal";
        this.view.btnNo.focusSkin = "skinRadioNormal";
        this.view.btnYes.focusSkin = "skinRadioNormal";
      },
      onClickBtnNo:function(){
          this.view.btnNo.skin = "skinRadioFocus";
          this.view.btnYes.skin = "skinRadioNormal";
          this.view.btnNo.focusSkin = "skinRadioFocus";
          this.view.btnYes.focusSkin = "skinRadioNormal";
      },
      onClickBtnYes:function(){
        this.view.btnNo.skin = "skinRadioNormal";
        this.view.btnYes.skin = "skinRadioFocus";
        this.view.btnNo.focusSkin = "skinRadioNormal";
        this.view.btnYes.focusSkin = "skinRadioFocus";
        var frmName = kony.application.getCurrentForm().id;
        alert(frmName)
      }
      
	};
});
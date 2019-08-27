define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      navigateToForm:function(frmName){
        var navObj = new kony.mvc.Navigation(frmName);
        navObj.navigate();
      },
      logout:function(){
        this.navigateToForm("frmLogin");
      },
      closeMenu:function(obj){
        obj.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"left": "-100%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":""
    			}
            );   
      }
	};
});
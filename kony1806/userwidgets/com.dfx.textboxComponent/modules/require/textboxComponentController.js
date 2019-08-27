define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      preshow:function(){
        this.view.tbxTextbox.isVisible = false;
        this.view.lblTag.skin = "skinLblNormal";
        this.view.lblTag.top = "50%";
      },
      onTouchAnimate:function(){
        this.view.lblTag.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"top": "0%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.25
    			}, {
       				"animationEnd":this.focusTextbox()
    			}
            );   
      },
      focusTextbox:function(){
        this.view.tbxTextbox.isVisible = true;
        this.view.lblTag.skin = "skinLblFocus";
        this.view.tbxTextbox.setFocus(true);
      },
      onEndEditingText:function(){
        if(this.view.tbxTextbox.text === ""){
          this.view.lblTag.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"top": "50%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.25
    			}, {
       				"animationEnd":this.unfocusTextbox()
    			}
            );   
        }
      },
      unfocusTextbox:function(){
        this.view.tbxTextbox.isVisible = false;
        this.view.lblTag.skin = "skinLblNormal";
        //this.view.tbxTextbox.setFocus(false);
      }
            
	};
  
});
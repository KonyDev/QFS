define({ 
  preshow:function(){
    this.view.btnComplete.skin = "skinDeActive";
    this.view.btnComplete.focusSkin = "skinDeActive";
    this.view.CheckRestorePower.textRtxt = "Resore power";
    this.view.CheckRestorePower.src = "checkboxn.png";
    this.view.menuDFX.left = "-100%";
  },
  openHam:function(){
        this.view.menuDFX.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"left": "0%",
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
      },
      closeHam:function(){
        this.view.menuDFX.animate(
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
      },
  
  onClickCheckbox:function(){
    this.view.CheckRestorePower.textRtxt = "<strike>"+this.view.CheckRestorePower.textRtxt+"</strike>";
    this.view.CheckRestorePower.src = "checkboxf.png";
    this.view.btnComplete.skin = "skinActive";
    this.view.btnComplete.focusSkin = "skinActive";
  },
  
  onComplete:function(){
    if(this.view.btnComplete.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmPendingUnlockSummary");
      navObj.navigate();
    }
  }
  

 //Type your controller code here 

 });
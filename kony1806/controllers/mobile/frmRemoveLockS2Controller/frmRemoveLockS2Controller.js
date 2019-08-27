define({ 
  
  preshow:function(){
    this.view.btnDoneProcedure.skin = "skinDeActive";
    this.view.btnDoneProcedure.focusSkin = "skinDeActive";
    this.view.CheckRemoveLock.textRtxt = "Remove the Lock";
    this.view.CheckRemoveTag.textRtxt = "Remove the Tag";
    this.view.CheckReviewTag.textRtxt = "Review Tag";
    this.view.CheckRemoveLock.src = "checkboxn.png";
    this.view.CheckRemoveTag.src = "checkboxn.png";
    this.view.CheckReviewTag.src = "checkboxn.png";
    this.view.txtBarcode.text = "";
  },
  
  checkRemoveLock:function(){
    this.view.CheckRemoveLock.textRtxt = "<strike>"+this.view.CheckRemoveLock.textRtxt+"</strike>";
    this.view.CheckRemoveLock.src = "checkboxf.png";
    this.validateS2();
  }, 
  
  checkRemoveTag:function(){
    this.view.CheckRemoveTag.textRtxt = "<strike>"+this.view.CheckRemoveTag.textRtxt+"</strike>";
    this.view.CheckRemoveTag.src = "checkboxf.png";
    this.validateS2();
  }, 
  
  checkReviewTag:function(){
    this.view.CheckReviewTag.textRtxt = "<strike>"+this.view.CheckReviewTag.textRtxt+"</strike>";
    this.view.CheckReviewTag.src = "checkboxf.png";
    this.validateS2();
  },
  
  validateS2:function(){
    if(this.view.CheckRemoveLock.src == "checkboxf.png" && this.view.CheckRemoveTag.src == "checkboxf.png" && this.view.CheckReviewTag.src == "checkboxf.png" && this.view.txtBarcode.text != ""){
      this.view.btnDoneProcedure.skin = "skinActive";
      this.view.btnDoneProcedure.focusSkin = "skinActive";
    }
  },
  
  onDoneProcedure:function(){
    if(this.view.btnDoneProcedure.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmRemoveLockSummary");
      navObj.navigate();
    }
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
  


 //Type your controller code here 

 });
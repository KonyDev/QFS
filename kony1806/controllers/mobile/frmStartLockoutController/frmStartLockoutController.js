define({ 
  onNavigate:function(param){
    if(param.status == 1){
      this.view.lblS1.skin = "skinFocusNum";
      this.view.lblS2.skin = "skinNumNormal";
      this.view.lblS3.skin = "skinNumNormal";
      this.view.lblLineStep1.skin = "skinLineNormal";
      this.view.lblLineStep1.skin = "skinLineNormal";
      this.view.flexLockbox.skin = "skinFlexNormal";
      this.view.flexLockHasp.skin = "skinFlexNormal";
      this.view.lblLockbox.skin = "skinLblNormal100";
      this.view.lblLockHasp.skin = "skinLblNormal100";
      
    }else if(param.status == 2){
      this.view.lblS1.skin = "skinFocusNum";
      this.view.lblS2.skin = "skinFocusNum";
      this.view.lblS3.skin = "skinNumNormal";
      this.view.lblLineStep1.skin = "skinLineFocus";
      this.view.lblLineStep1.skin = "skinLineNormal";
    }else{
      this.view.lblS1.skin = "skinFocusNum";
      this.view.lblS2.skin = "skinFocusNum";
      this.view.lblS3.skin = "skinFocusNum";
      this.view.lblLineStep1.skin = "skinLineFocus";
      this.view.lblLineStep1.skin = "skinLineFocus";
    }
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
  
  toggleLockOut:function(index){
    if(index == 1){
      this.view.flexLockbox.skin = "skinFlexFocus";
      this.view.flexLockHasp.skin = "skinFlexNormal";
      this.view.lblLockbox.skin = "skinLblNormal100B";
      this.view.lblLockHasp.skin = "skinLblNormal100";
    }else{
      this.view.flexLockbox.skin = "skinFlexNormal";
      this.view.flexLockHasp.skin = "skinFlexFocus";
      this.view.lblLockbox.skin = "skinLblNormal100";
      this.view.lblLockHasp.skin = "skinLblNormal100B";
    }
      
  },
  
  
  preshow:function(){
    this.view.btnDone.skin = "skinDeActive";
    this.view.btnDone.focusSkin = "skinDeActive";
    this.view.ChecklistProjectDetails.src = "unlock_grey.png";
    this.view.ChecklistShutdownProcedure.src = "unlock_grey.png";
    this.view.flexProjectDetails.isVisible = false;
    this.view.flexShutdownProcedure.isVisible = false;
    this.view.btnDone.text = "Done";
  },
  
  showProjectDetails:function(){
    //alert("Hi"+this.view.ChecklistProjectDetails.skin)
    if((this.view.flexLockbox.skin == "skinFlexFocus" || this.view.flexLockHasp.skin == "skinFlexFocus")){
     // alert("HI1")
      if(this.view.ChecklistProjectDetails.src =="unlock_grey.png"){
        
      }else{
        
      }
      this.view.flexProjectDetails.isVisible = true;
    }
  },
  
  closeProjectDetails:function(){
    this.view.flexProjectDetails.isVisible = false;
  },
  
  onDoneProjectDetails:function(){
    this.view.ChecklistProjectDetails.src = "unlock_blue.png";
    this.view.ChecklistProjectDetails.textNumChecklist = "3/3";
    this.view.ChecklistProjectDetails.textTap = "Tap to Edit";
    this.view.flexProjectDetails.isVisible = false;
  },
  
  showShutdownProcedure:function(){
    if((this.view.flexLockbox.skin == "skinFlexFocus" || this.view.flexLockHasp.skin == "skinFlexFocus") && this.view.ChecklistProjectDetails.src == "unlock_blue.png" ){
      if(this.view.ChecklistShutdownProcedure.src == "unlock_grey.png"){
        this.view.Check1.src = "checkboxn.png";
        this.view.Check2.src = "checkboxn.png";
        this.view.Check3.src = "checkboxn.png";
        this.view.btnDoneShutdownProcedure.skin  = "skinDeActive";
        this.view.btnDoneShutdownProcedure.focusSkin = "skinDeActive";
      }
      
      
      this.view.flexShutdownProcedure.isVisible = true;
      
      
    }
  },
  
  onClickCheckBox:function(ind){
    eval("this.view.Check"+ind).textRtxt = "<strike>"+eval("this.view.Check"+ind).textRtxt+"</strike>";
    eval("this.view.Check"+ind).src = "checkboxf.png";
    if(this.view.Check1.src == "checkboxf.png"  && this.view.Check2.src == "checkboxf.png" && this.view.Check3.src == "checkboxf.png"){
      this.view.btnDoneShutdownProcedure.skin = "skinActive";
      this.view.btnDoneShutdownProcedure.focusSkin = "skinActive";
    }
  },
  
  closeShutdownProcedure:function(){
    this.view.flexShutdownProcedure.isVisible = false;
  },
  onDoneShutdownProcedure:function(){
    if(this.view.btnDoneShutdownProcedure.skin == "skinActive"){
      this.view.ChecklistShutdownProcedure.src = "unlock_blue.png";
      this.view.btnDone.skin = "skinActive";
      this.view.btnDone.focusSkin = "skinActive";
      this.view.flexShutdownProcedure.isVisible = false;
      this.view.ChecklistShutdownProcedure.textNumChecklist = "3/3";
      this.view.ChecklistShutdownProcedure.textTap = "Tap to Edit";
      this.view.btnDone.text = "Next Step";
    }
  },
  onDoneNavToS2:function(){
    if(this.view.btnDone.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmLockoutS2");
      navObj.navigate();
    }
  }
  
      
      
      
      
    
  
  
  
  
  
  

 //Type your controller code here 

 });
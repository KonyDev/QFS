define({ 
  segDataSample:[],
  segSectionInd:0,
  segRowInd:0,
  preshow:function(){
    this.view.flexProcedure.isVisible = false;
    this.segDataSample = [
      [
        {
          "lblIsolationPoint":"Unlock / Untag Isolation Point 1",
          "lblInfo":"Complete each internal card by checking the checklist tasks."
        },[
          {
            "lblChecklistHeader":"E-1",
            "lblTap":"",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "lblSource":"480 VAC Single Feed",
            "imgSource":"power.png",
            "imgTech":"group3.png",
            "imgLock":"lock_1.png",
            "lblNoLock":"3"
          },{
            "lblChecklistHeader":"W-1",
            "lblTap":"",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "lblSource":"450 PSI Inlet",
            "imgSource":"wave.png",
            "imgTech":"group3.png",
            "imgLock":"lock_1.png",
            "lblNoLock":"3"
          }
        ]
      ],[
        {
          "lblIsolationPoint":"Unlock / Untag Isolation Point 2",
          "lblInfo":"Complete each internal card by checking the checklist tasks."
        },[
          {
            "lblChecklistHeader":"E-2",
            "lblTap":"",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "lblSource":"480 VAC Single Feed",
            "imgSource":"power.png",
            "imgTech":"group3.png",
            "imgLock":"lock_1.png",
            "lblNoLock":"3"
          },{
            "lblChecklistHeader":"W-2",
            "lblTap":"",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "lblSource":"450 PSI Inlet",
            "imgSource":"wave.png",
            "imgTech":"group3.png",
            "imgLock":"lock_1.png",
            "lblNoLock":"3"
          }
        ]
      ]
    ];
    this.view.segIsolationProcedure.setData(this.segDataSample);
    this.view.btnDone.skin = "skinDeActive";
    this.view.btnDone.focusSkin = "skinDeActive";
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
  
  
  onSegRowClick:function(){
    this.segSectionInd = this.view.segIsolationProcedure.selectedRowIndex[0];
    this.segRowInd = this.view.segIsolationProcedure.selectedRowIndex[1];
    this.view.headerProcedure.text = this.segDataSample[this.segSectionInd][1][this.segRowInd].lblChecklistHeader+" Procedure";
    this.view.lblIsolationPoint.text = this.segDataSample[this.segSectionInd][1][this.segRowInd].lblChecklistHeader;
    this.view.lblSource.text = this.segDataSample[this.segSectionInd][1][this.segRowInd].lblSource;
    this.view.imgSource.src = this.segDataSample[this.segSectionInd][1][this.segRowInd].imgSource;
    
    this.view.CheckRemoveLock.src = "checkboxn.png";
    this.view.CheckRemoveLock.textRtxt = "Remove the Lock";
    this.view.CheckRemoveTag.src = "checkboxn.png";
    this.view.CheckRemoveTag.textRtxt = "Remove the Tag";
    this.view.CheckReviewTag.src = "checkboxn.png";
    this.view.CheckReviewTag.textRtxt = "Review Tag";
    this.view.tbxBarcode.text = "";
    this.view.btnDoneProcedure.skin = "skinDeActive";
    this.view.btnDoneProcedure.focusSkin = "skinDeActive";
    this.view.flexProcedure.isVisible = true;
  },
  
  closeProcedure:function(){
    this.view.flexProcedure.isVisible = false
  },
  removeLock:function(){
    this.view.CheckRemoveLock.textRtxt = "<strike>"+this.view.CheckRemoveLock.textRtxt;
    this.view.CheckRemoveLock.src = "checkboxf.png";
    this.checkCompletionProcedure();
  },
  removeTag:function(){
    this.view.CheckRemoveTag.textRtxt = "<strike>"+this.view.CheckRemoveTag.textRtxt;
    this.view.CheckRemoveTag.src = "checkboxf.png";
    this.checkCompletionProcedure();
  },
  reviewTag:function(){
    this.view.CheckReviewTag.textRtxt = "<strike>"+this.view.CheckReviewTag.textRtxt;
    this.view.CheckReviewTag.src = "checkboxf.png";
    this.checkCompletionProcedure();
  },
  
  checkCompletionProcedure:function(){
    if(this.view.CheckRemoveLock.src == "checkboxf.png"  && this.view.CheckRemoveTag.src == "checkboxf.png" && this.view.CheckReviewTag.src == "checkboxf.png"  && this.view.tbxBarcode.text != ""){
      this.view.btnDoneProcedure.skin = "skinActive";
      this.view.btnDoneProcedure.focusSkin = "skinActive";
    }
  },
  
  onDoneProcedure:function(){
    if(this.view.btnDoneProcedure.skin == "skinActive"){
      this.view.btnDone.skin = "skinActive";
      this.view.btnDone.focusSkin = "skinActive";
      this.segDataSample[this.segSectionInd][1][this.segRowInd].lblNoLock = "2";
      this.segDataSample[this.segSectionInd][1][this.segRowInd].imgCheckBox = "unlock_blue.png";
      this.segDataSample[this.segSectionInd][1][this.segRowInd].lblNumChecklist = "7/7";
      this.segDataSample[this.segSectionInd][1][this.segRowInd].imgTech = "group2.png";
      this.view.segIsolationProcedure.setData(this.segDataSample);
      this.view.flexProcedure.isVisible = false;
    }
  },
  onDone:function(){
    if(this.view.btnDone.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmRemoveHaspLockSummary");
      navObj.navigate();
    }
  }

 //Type your controller code here 

 });
define({ 
  tempData : [],
  selIndex : 0,
  rowInd:0,
  preshow:function(){
    this.view.btnDone.skin = "skinDeActive";
    this.view.btnDone.focusSkin = "skinDeActive";
    this.view.flexIsolationProcedure.isVisible = false;
    this.view.flexProcedure.isVisible = false;
    this.view.menuDFX.left = "-100%";
   // alert(this.view.segIsolationProcedure.data)
    this.tempData = [
      [
        {
          "lblIsolationPoint":"Isolation Point 1",
          "lblInfo":"Complete each internal card by checking the checklist tasks",
          "lblChecklistHeader":"Isolation Procedure",
          "lblTap":"Tap to view checklist",
          "imgCheckBox":"unlock_grey.png",
          "lblNumChecklist":"0/1"
        },[
          {
            "lblChecklistHeader":"E-1",
            "lblSource":"480 VAC",
            "lblTap":"Tap card to view checklist",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "imgSource":"power.png",
          },{
            "lblChecklistHeader":"W-1",
            "lblSource":"450 PSI Inlet",
            "lblTap":"Tap card to view checklist",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "imgSource":"wave.png",
          }
        ]
      ],[
        {
          "lblIsolationPoint":"Isolation Point 2",
          "lblInfo":"Complete each internal card by checking the checklist tasks",
          "lblChecklistHeader":"Isolation Procedure",
          "lblTap":"Tap to view checklist",
          "imgCheckBox":"unlock_grey.png",
          "lblNumChecklist":"0/1"
        },[
          {
            "lblChecklistHeader":"E-2",
            "lblSource":"480 VAC",
            "lblTap":"Tap card to view checklist",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "imgSource":"power.png",
          },{
            "lblChecklistHeader":"W-2",
            "lblSource":"450 PSI Inlet",
            "lblTap":"Tap card to view checklist",
            "imgCheckBox":"unlock_grey.png",
            "lblNumChecklist":"0/7",
            "imgSource":"wave.png",
          }
        ]
      ]
    ];
    this.view.segIsolationProcedure.setData(this.tempData);
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
  
  showIsolationProcedure:function(param,secInd){
    this.selIndex = secInd;
    
    if(this.tempData[this.selIndex][0].imgCheckBox == "unlock_grey.png"){
      this.view.CheckMarkAsDone.textRtxt = "Mark as Done";
      this.view.CheckMarkAsDone.src = "checkboxn.png";
      this.view.btnDoneIsolationProcedure.skin = "skinDeActive";
      this.view.btnDoneIsolationProcedure.focusSkin = "skinDeActive";
    }else{
      this.view.CheckMarkAsDone.textRtxt = "<strike>"+this.view.CheckMarkAsDone.textRtxt+"</strike>";
      this.view.CheckMarkAsDone.src = "checkboxf.png";
      this.view.btnDoneIsolationProcedure.skin = "skinActive";
      this.view.btnDoneIsolationProcedure.focusSkin = "skinActive";
    }
    this.view.flexIsolationProcedure.isVisible = true;
   // alert(this.tempData[this.selIndex][0].imgCheckBox == "unlock_grey.png")
    //alert(this.tempData[this.selIndex].imgCheckBox);
   // alert(this.selIndex)
   
  },
  
  closeIsolationProcedure:function(){
    this.view.flexIsolationProcedure.isVisible = false;
  },
  clickCheckBox:function(){
    this.view.CheckMarkAsDone.textRtxt = "<strike>"+this.view.CheckMarkAsDone.textRtxt+"</strike>";
    this.view.CheckMarkAsDone.src = "checkboxf.png";
    this.view.btnDoneIsolationProcedure.skin = "skinActive";
    this.view.btnDoneIsolationProcedure.focusSkin = "skinActive";
  },
  onDoneIsolationProcedure:function(){
    if(this.view.btnDoneIsolationProcedure.skin == "skinActive"){
      
      this.tempData[this.selIndex][0].imgCheckBox = "unlock_blue.png";
      this.tempData[this.selIndex][0].lblNumChecklist = "1/1";
      this.tempData[this.selIndex][0].lblTap = "Tap to Edit";
      this.view.segIsolationProcedure.setData(this.tempData);
      this.view.flexIsolationProcedure.isVisible = false;
    }
  },
  
  
  onSegRowClick:function(){
    this.selIndex = this.view.segIsolationProcedure.selectedRowIndex[0];
    if(this.tempData[this.selIndex][0].imgCheckBox == "unlock_blue.png"){
      this.rowInd = this.view.segIsolationProcedure.selectedRowIndex[1];
      if(this.tempData[this.selIndex][1][this.rowInd].imgCheckBox == "unlock_grey.png"){
        this.view.CheckApplyLock.src = "checkboxn.png";
        this.view.CheckApplyTag.src = "checkboxn.png";
        this.view.CheckReviewTag.src = "checkboxn.png";
        this.view.CheckTestDevices.src = "checkboxn.png";
        this.view.CheckApplyLock.textRtxt = "Apply the Lock";
        this.view.CheckApplyTag.textRtxt = "Apply the Tag";
        this.view.CheckReviewTag.textRtxt = "Review Tag";
        this.view.CheckTestDevices.textRtxt = "Test Devices";
        this.view.tbxBarcode.text = "";
        this.view.btnDoneProcedure.skin = "skinDeActive";
        this.view.btnDoneProcedure.focusSkin = "skinDeActive";
      }else{
        this.view.CheckApplyLock.src = "checkboxf.png";
        this.view.CheckApplyTag.src = "checkboxf.png";
        this.view.CheckReviewTag.src = "checkboxf.png";
        this.view.CheckTestDevices.src = "checkboxf.png";
        this.view.CheckApplyLock.textRtxt = "<strike>Apply the Lock</strike>";
        this.view.CheckApplyTag.textRtxt = "<strike>Apply the Tag</strike>";
        this.view.CheckReviewTag.textRtxt = "<strike>Review Tag</strike>";
        this.view.CheckTestDevices.textRtxt = "<strike>Test Devices</strike>";
      }
      this.view.headerProcedure.text =  this.tempData[this.selIndex][1][this.rowInd].lblChecklistHeader+" Procedure";
      //this.view.tbxBarcode.isVisible = false;
      this.view.flxScrollContentProcedure.scrollToWidget(this.view.lblTitleProcedure);
      this.view.CheckApplyLock.setFocus(true);
      this.view.flexProcedure.isVisible = true;
      
      this.view.btnDoneProcedure.skin = "skinDeActive";
      this.view.btnDoneProcedure.focusSkin = "skinDeActive";
    }
    //this.view.tbxBarcode.isVisible = true;
    
  },
  closeProcedure:function(){
    this.view.flexProcedure.isVisible = false;
  },
  
  onClickApplyLock:function(){
    this.view.CheckApplyLock.src = "checkboxf.png";
    this.view.CheckApplyLock.textRtxt = "<strike>"+this.view.CheckApplyLock.textRtxt+"</strike>";
    this.checkCompletionOfTask();
  },
  onClickApplyTag:function(){
    this.view.CheckApplyTag.src = "checkboxf.png";
    this.view.CheckApplyTag.textRtxt = "<strike>"+this.view.CheckApplyTag.textRtxt+"</strike>";
    this.checkCompletionOfTask();
  },
  onClickTestDevices:function(){
    this.view.CheckTestDevices.src = "checkboxf.png";
    this.view.CheckTestDevices.textRtxt = "<strike>"+this.view.CheckTestDevices.textRtxt+"</strike>";
    this.checkCompletionOfTask();
  },
  onClickReview:function(){
    this.view.CheckReviewTag.src = "checkboxf.png";
    this.view.CheckReviewTag.textRtxt = "<strike>"+this.view.CheckReviewTag.textRtxt+"</strike>";
    this.checkCompletionOfTask();
  },
  checkCompletionOfTask:function(){
    if(this.view.CheckApplyLock.src == "checkboxf.png" && this.view.CheckApplyTag.src == "checkboxf.png" && this.view.CheckReviewTag.src == "checkboxf.png" && this.view.CheckTestDevices.src == "checkboxf.png" &&  this.view.tbxBarcode.text != ""){
      this.view.btnDoneProcedure.skin = "skinActive";
      this.view.btnDoneProcedure.focusSkin = "skinActive";
    }
  },
  onDoneProcedure:function(){
    
    this.tempData[this.selIndex][1][this.rowInd].imgCheckBox = "unlock_blue.png";
    this.tempData[this.selIndex][1][this.rowInd].lblNumChecklist = "7/7";
    this.tempData[this.selIndex][1][this.rowInd].lblTap = "Tap to Edit";
    this.view.segIsolationProcedure.setData(this.tempData);
    this.view.flexProcedure.isVisible = false;
    this.view.btnDone.skin = "skinActive";
    this.view.btnDone.focusSkin = "skinActive";
  },
  onDoneStep3:function(){
    if(this.view.btnDone.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmLockoutS3");
      navObj.navigate();
    }
  }
  
  

 //Type your controller code here 

 });
define({ 
  step:0,
  dataQuestion:{},
  onNavigate:function(){
//      self.view.lblSeperator.animate(
//       kony.ui.createAnimation({
//         "100": {"left": "0%","stepConfig": {"timingFunction": kony.anim.EASE}}
//       }), {"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.25}, {"animationEnd": null});
    
    this.view.lblAssaigned.text = workorderTable[WO_SELIND].lblAssign.text;
    this.view.lblAssaigned.skin = workorderTable[WO_SELIND].lblAssign.skin;
    this.view.lblMaintenance.text = workorderTable[WO_SELIND].lblMaintain.text;
    this.view.lblModelName.text = workorderTable[WO_SELIND].lblWorkOrderName.text;
    this.view.lblTime.text = workorderTable[WO_SELIND].lblTimeStatus.text;
    this.view.lblDueDate.text = workorderTable[WO_SELIND].lblDueValue.text;
    this.view.lblAddress.text = workorderTable[WO_SELIND].lblLocationValue.text;
    this.view.lblDistance.text = workorderTable[WO_SELIND].lblMiles.text;
    this.view.lblAssetModel.text = workorderTable[WO_SELIND].lblAssetTitle.text;
    this.view.lblAssetName.text = workorderTable[WO_SELIND].lblAssetValue.text;
    
    
    this.dataQuestion=[
      {
            "lblQuestion":"Information shared with the customer?",
            "btnYes":"Yes",
            "btnNo":"No",
      },{
             "lblQuestion":"Do you use gloves?",
            "btnYes":"Yes",
            "btnNo":"No",
          },
          {
             "lblQuestion":"Do you use eye Protection?",
            "btnYes":"Yes",
            "btnNo":"No",
          },
          {
             "lblQuestion":"Do you have protective cloathing?",
            "btnYes":"Yes",
            "btnNo":"No",
          }]
  },
       
      
   
  frm_preshow:function(){
    var self=this;
    this.view.segToolList.setData(ToolData);
    this.view.segSparePartList.setData(SparePartsData);
    this.view.segQuestions.setData(QuestionData);
    this.step=0;
    this.view.lblHeader.text="Maintenance "+workorderTable[WO_SELIND].lblAssetTitle.text;
    this.view.lblSeperator.left="0%";
    this.view.flxMain.flxTabs.setVisibility(true);
    this.view.flxSummary.setVisibility(true);
    this.view.flxDummy.setVisibility(false);
    this.view.flxSurvey.setVisibility(false);
    this.view.flxNavtoLocation.setVisibility(false);
    this.view.flxPopup.setVisibility(false);
    this.view.flxCancelOrder.setVisibility(false);
    this.view.flxTasks.setVisibility(false);
    this.view.flxTaskDetails.setVisibility(false);
     this.view.flxQuestion.removeAll();
   for(var i in this.dataQuestion){
    var togglebuttons = new com.workorder.togglebuttons({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "togglebuttons"+i,
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
               
                  "overrides": {
                    "lblQ1": {
                        "text": this.dataQuestion[i].lblQuestion
                    },
                    "btnNo": {
                        "skin": "skinRadioF",
                        "focusSkin": "skinRadioN"
                    },
                    "btnYes": {
                        "skin": "skinRadioN",
                        "focusSkin": "skinRadioN"
                    },
                    
                    
                    "togglebuttons": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, 
                                                        
                {
                "retainFlowHorizontalAlignment": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
    
    
   //
    this.view.flxQuestion.add(togglebuttons);   
     eval("this.view.togglebuttons"+i).onClickNo = this.onClickToggleNo.bind(this,i);
    eval("this.view.togglebuttons"+i).onClickYes = this.onClickToggleYes.bind(this,i);
   // 
   }
   
    },   

  
  onClickToggleNo:function(ind){
  // alert("No"+ind);
  
       eval("this.view.togglebuttons"+ind).skinNo = "skinRadioF";
       eval("this.view.togglebuttons"+ind).skinNoFocus = "skinRadioF";
       eval("this.view.togglebuttons"+ind).skinYes = "skinRadioN";
       eval("this.view.togglebuttons"+ind).skinYesFocus = "skinRadioN";
   
  },
  onClickToggleYes:function(ind){
  // alert("Yes"+ind);
       eval("this.view.togglebuttons"+ind).skinNo = "skinRadioN";
       eval("this.view.togglebuttons"+ind).skinNoFocus = "skinRadioN";
       eval("this.view.togglebuttons"+ind).skinYes = "skinRadioF";
       eval("this.view.togglebuttons"+ind).skinYesFocus = "skinRadioF";
    
  },
  show_Tasks:function(){
    var self=this;
    var tempData =[];
    tempData=[
      {
        "lblCompleted":"Completed",
        "lblContent":"Review the visual appearance of the Asset. Provide your valuable feedback.",
        "imgClock" :"clock.png",
        "lblTime" :"15 Min",
        "imgNumber":"one.png",
        "imgmenu":"more12.png",
        "lblNumber":"1",
        "imgSettings":"wrenchgrey.png",
        "lblToolName":" "
     },
      {
       "lblCompleted":{text:"Assigned",skin:"CopydefLabel0je7a739694dd45"},
       "lblContent":"Open the asset and review the hardware. Substitute the part GSP05 with GSP06.",
       "imgClock" :"clock.png",
       "lblTime" :"35 Min",
        "imgNumber":"one.png",
        "imgmenu":"more12.png",
       "lblNumber":"2",
        "imgSettings":"wrenchgrey.png",
        "lblToolName":"Screwdriver, Phosphomer Grey",
     },
      {
       "lblCompleted":{text:"Assigned",skin:"CopydefLabel0je7a739694dd45"},
       "lblContent":"Use Chemical XL to clean the bottom inside the asset, also provide the temperature of the asset machinery.",
       "imgClock" :"clock.png",
       "lblTime" :"45 Min",
        "imgmenu":"more12.png",
        "imgSettings":"wrenchgrey.png",
         "imgNumber":"one.png",
         "lblNumber":"3",
        "lblToolName":"Thermometer, Cleaner",
        
     }
   ];
    this.view.segTasks.setData(tempData);
    self.view.lblSeperator.animate(
      kony.ui.createAnimation({
        "100": {"left": "33.5%","stepConfig": { "timingFunction": kony.anim.EASE}}
      }), {"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.25}, {"animationEnd": null});
    this.step=1;
    this.view.lblHeader.text="Maintenance "+workorderTable[WO_SELIND].lblAssetTitle.text;
    this.view.flxTabs.setVisibility(true);
    this.view.flxSummary.setVisibility(false);
    this.view.flxDummy.setVisibility(false);
    this.view.flxSurvey.setVisibility(false);
    this.view.flxNavtoLocation.setVisibility(false);
    this.view.flxPopup.setVisibility(false);
    this.view.flxCancelOrder.setVisibility(false);
    this.view.flxTasks.setVisibility(true);
    this.view.flxTaskDetails.setVisibility(false);
  },
  show_survey:function(){
    this.step=2;
    this.view.segQuestions.setData(QuestionData);
    this.view.lblHeader.text="Pre-requisite Checklist";
    this.view.flxTabs.setVisibility(false);
    this.view.flxSummary.setVisibility(false);
    this.view.flxDummy.setVisibility(false);
    this.view.flxSurvey.setVisibility(true);
    this.view.flxNavtoLocation.setVisibility(false);
    this.view.flxPopup.setVisibility(false);
    this.view.flxCancelOrder.setVisibility(false);
    this.view.flxTasks.setVisibility(false);
    this.view.flxTaskDetails.setVisibility(false);
  },
  Show_Conformation:function(){
    this.step=3;
    var self=this;
    self.view.lblSeperator.animate(
      kony.ui.createAnimation({
        "100": {"left": "67%","stepConfig": {"timingFunction": kony.anim.EASE}}
      }), {"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.25}, {"animationEnd": null});
    this.view.lblHeader.text="Maintenance "+workorderTable[WO_SELIND].lblAssetTitle.text;
    this.view.flxTabs.setVisibility(true);
    this.view.flxSummary.setVisibility(false);
    this.view.flxDummy.setVisibility(false);
    this.view.flxSurvey.setVisibility(false);
    this.view.flxNavtoLocation.setVisibility(true);
    this.view.flxPopup.setVisibility(false);
    this.view.flxCancelOrder.setVisibility(false);
    this.view.flxTasks.setVisibility(false);
    this.view.flxTaskDetails.setVisibility(false);
  },
  
  show_CancelOreder:function(){
    this.view.lblHeader.text="Cancel Workorder";
    this.view.flxTabs.setVisibility(false);
    this.view.flxSummary.setVisibility(false);
    this.view.flxDummy.setVisibility(false);
    this.view.flxSurvey.setVisibility(false);
    this.view.flxNavtoLocation.setVisibility(false);
    this.view.flxPopup.setVisibility(false);
    this.view.flxCancelOrder.setVisibility(true);
    this.view.flxTasks.setVisibility(false);
    this.view.flxTaskDetails.setVisibility(false);
  },
  show_popup:function(){
    this.view.flxPopup.setVisibility(true);
    this.view.flxDummy.setVisibility(true);
  },
  
 
  Back_Navigation:function(){
    if(this.step==5){
      this.show_CancelOreder();
    }else if(this.step==6){
      this.show_taskDetails(); 
    }else if(this.step==4){
      this.Show_Conformation();
    }else if(this.step==3){
      this.show_survey();
    }else if(this.step==2){
      this.show_Tasks();
    }else if(this.step==1){
      this.frm_preshow();
    }else if(this.step==0){
      var ntf = new kony.mvc.Navigation("frmInspectionsList");
      ntf.navigate();
    }
  },
  show_taskDetails:function(){
    this.step=2;
    var toolData1=[];
    toolData1=[
      {
        "imgTool1":"wrenchgrey.png",
        "lblToolName1":"Screwdriver",
        "lblQuantity1":"Quantity 1",
        "imgTool2":"wrenchgrey.png",
        "lblToolName2":"Phosphomer",
        "lblQuantity2":"Quantity 1",
      },
    ];
    this.view.segToolListTask.setData(toolData1);
    var SpareData1=[];
    SpareData1=[
      {
        "imgTool1":"settingsgrey.png",
        "lblToolName1":"Cables",
        "lblQuantity1":"Quantity 1",
        "imgTool2":"settingsgrey.png",
        "lblToolName2":"PowerWizard",
        "lblQuantity2":"Quantity 1",
      },
    ];
    this.view.segSparePartsTask.setData(SpareData1);
    this.view.lblHeader.text="Task2 Details";
    this.view.flxMain.flxTabs.setVisibility(false);
    this.view.flxSummary.setVisibility(false);
    this.view.flxDummy.setVisibility(false);
    this.view.flxSurvey.setVisibility(false);
    this.view.flxNavtoLocation.setVisibility(false);
    this.view.flxPopup.setVisibility(false);
    this.view.flxCancelOrder.setVisibility(false);
    this.view.flxTasks.setVisibility(false);
    this.view.flxTaskDetails.setVisibility(true);
    this.view.flxReferenceExpand.isVisible = false;
    this.view.imgDropDown.src="downarrow1.png";
  },
  show_ReferenceManual:function(){
    if(this.view.imgDropDown.src=="downarrow1.png"){
      this.view.imgDropDown.src="uparrw1.png";
      this.view.flxReferenceExpand.isVisible = true;
    }else{
      this.view.imgDropDown.src="downarrow1.png";
      this.view.flxReferenceExpand.isVisible = false;
    }
  },
  
  
   preshow1:function(){
    //var skinLabel = "skinNumNormal";
    this.view.flxQuestion.removeAll();
    for(var i in this.dataQuestion){
      if(this.this.dataQuestion[i].step == 1){
        //skinLabel = "skinFocusNum";
      }else{
       // skinLabel = "skinNumNormal";
      }
      var questions = com.workorderSurvey.Questions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "questions"+i,
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "overrides": {
                  "lblNum": {
                        //"skin": skinLabel,
                        "text": this.dataQuestion[i].toFixed(0)
                    },
//                     "lblIsolationPoint": {
//                         "text": this.dataQuestion[i].ip
//                     },
                        "questions": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            questions.QuestionData1 = {
                "data":  this.dataQuestion[i].QuestionData1,
               "schema": [
                 //{
//                     "columnHeaderTemplate": null,
//                     "columnHeaderText": "isolationNum",
//                     "columnHeaderType": "text",
//                     "columnID": "isolationNum",
//                     "columnOnClick": null,
//                     "columnText": "Not Defined",
//                     "columnType": "text",
//                     "kuid": "deefa496c0f54c34aac047dff5b1a4af"
//                 }, 
//                     {
//                     "columnHeaderTemplate": null,
//                     "columnHeaderText": "imageType",
//                     "columnHeaderType": "text",
//                     "columnID": "imageType",
//                     "columnOnClick": null,
//                     "columnText": "Not Defined",
//                     "columnType": "text",
//                     "kuid": "a4402ebb4d964294be29840bcf355e25"
              
//                     }, 
                // {
//                     "columnHeaderTemplate": null,
//                     "columnHeaderText": "type",
//                     "columnHeaderType": "text",
//                     "columnID": "type",
//                     "columnOnClick": null,
//                     "columnText": "Not Defined",
//                     "columnType": "text",
//                     "kuid": "a31e6919d5f2408b9f003fe88c9a2df2"
//                 }, 
                  // {
//                     "columnHeaderTemplate": null,
//                     "columnHeaderText": "typeDetail",
//                     "columnHeaderType": "text",
//                     "columnID": "typeDetail",
//                     "columnOnClick": null,
//                     "columnText": "Not Defined",
//                     "columnType": "text",
//                     "kuid": "b3788c10600943a6a3a4c1d0db43d792"
                // }
         ]
            };
     // questions.onClickDetails = this.onClickIsolationPoint.bind(this, i);
     // questions.onRowClick = this.onClickIsolationPoint.bind(this, i);
      //isolationPoint2.onClickDetails = this.onClickIsolationPoint.bind(this, i);
           this.view.flxQuestion.add(questions);

    }
    
        
    
    
    
    
    
//     for(var i in this.dataIsolationPoint){
//       if(this.dataIsolationPoint[i].step == 1){
//         skinLabel = "skinFocusNum";
//       }else{
//         skinLabel = "skinNumNormal";
//       }
//       var isolationPoint2 = new com.dfx.isolationPoint({
//                 "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
//                 "clipBounds": true,
//                 "id": "isolationPoint"+i,
//                 "isVisible": true,
//                 "layoutType": kony.flex.FREE_FORM,
//                 "left": "0dp",
//                 "masterType": constants.MASTER_TYPE_USERWIDGET,
//                 "isModalContainer": false,
//                 "skin": "slFbox",
//                 "top": "15dp",
//                 "width": "100%",
//                 "overrides": {
//                     "lblNum": {
//                         "skin": skinLabel,
//                         "text": this.dataIsolationPoint[i].step.toFixed(0)
//                     },
//                     "lblIsolationPoint": {
//                         "text": this.dataIsolationPoint[i].ip
//                     },
                    
//                 }
//             } );
//       isolationPoint2.arrayData = {
//                 "data": this.dataIsolationPoint[i].arrayData
//             };
//             isolationPoint2.onClickDetails = this.onClickIsolationPoint.bind(this, i);
//       isolationPoint2.onRowClick = this.onClickIsolationPoint.bind(this, i);
//        this.view.flxIsolationPoint.add(isolationPoint2);
      
//      }
    
  },
  
  
  
  
  //////

  
});
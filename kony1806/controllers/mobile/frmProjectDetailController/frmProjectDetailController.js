define({ 
  dataForm : {},
  dataIsolationPoint:{},
  onNavigate:function(param){
    //alert(param)
    this.dataForm = param;
    this.toggleTabs(param["key"]);
    this.view.headerProjectDetails.text = param.displayData.lblProjectTitle;
    this.view.lblProjectTitle.text= param.displayData.lblProjectTitle;
    this.view.LabelWithDetail1.textTag = "Address";
    this.view.LabelWithDetail2.textTag = "Asset Location";
    this.view.LabelWithDetail3.textTag = "Due Date";
    this.view.LabelWithDetail1.textDetail = param.displayData.lblAddress;
    this.view.LabelWithDetail2.textDetail = param.displayData.lblFacility;
    this.view.LabelWithDetail3.textDetail = param.displayData.lblDueDate.split(": ")[1];
    this.view.lblTime.text = param.displayData.lblTime;
    this.view.lblStatus.text = param.displayData.lblStatus.text;
    this.view.lblStatus.skin = param.displayData.lblStatus.skin;
    this.view.img1.src = param.displayData.img1;
    this.view.img2.src = param.displayData.img2;
    this.view.img3.src = param.displayData.img3;
    this.view.img4.src = param.displayData.img4;
    this.view.imgAsset1.src = "tile_1.png";
    this.view.imgAsset2.src = "tile_2.png";
    this.view.imgAsset3.src = "tile_3.png";
    this.view.imgAsset4.src = "tile_4.png";
    this.view.lblLOType.text = param.displayData.lblLOtype;
    if(param.displayData.lblLOtype == "Lockbox"){
      this.view.imgLOtype.src ="lock.png";
    }else{
      this.view.imgLOtype.src ="lockhaspgrey.png";
    }
    this.view.imgCurrentlyWorking.src = param.displayData.imgCurrentlyWorking.src;
    if(param.displayData.lblStatus.text == "Pending Lockout"){
      this.view.btnLockoutSummary.text = "Perform Lock Out";
      this.view.flexLockoutDetail.isVisible = false;
      this.view.btnLockoutIsolationPoint.text = "Perform Lock Out";
      this.view.btnLockoutIsolationPoint.top = "140dp";
      this.view.flexProjectSummary.isVisible = false;
      this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmProjectRequest", 1);
      this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmProjectRequest", 0);
    }else if(param.displayData.lblStatus.text == "Locked"){
      this.view.flexLockoutDetail.isVisible = true;
      this.view.btnLockoutIsolationPoint.text = "Add Lock";
      this.view.btnLockoutIsolationPoint.top = "80dp";
      this.view.imgSms.isVisible = true;
      if(param.displayData.lblLOtype == "Lockbox"){
        this.view.flexTeamMessage.isVisible = false;
        if(param.displayData.imgCurrentlyWorking.src == "group3.png"){
          this.view.btnLockoutSummary.text = "Remove Lock";
          this.view.btnLockoutIsolationPoint.text = "Remove Lock";
          this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmRemoveLockS1", 1);
          this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmRemoveLockS1", 0);
        }else{
          this.view.btnLockoutSummary.text = "Add Lock";
          this.view.btnLockoutIsolationPoint.text = "Add Lock";
          this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmAddLock", 1);
          this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmAddLock", 0);
        }
      }else{
        var tempData = [];
        tempData = [
          {
            "lblTime":"Today, 11:45 AM",
            "imgPerson":"profile_1.png",
            "lblMessage":"I'm delayed. I'll unlock after 6."
          },{
            "lblTime":"Today, 1:45 PM",
            "imgPerson":"profile_1.png",
            "lblMessage":"Sparepart didn't arrive. I'll unlock tomorrow."
          }
        ];
        this.view.segMessage.setData(tempData);
        this.view.flexTeamMessage.isVisible = true;
        if(param.displayData.imgCurrentlyWorking.src == "group3.png"){
          this.view.btnLockoutSummary.text = "Remove Lock";
          this.view.btnLockoutIsolationPoint.text = "Remove Lock";
          this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmRemoveHaspLockS1", 1);
          this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmRemoveHaspLockS1", 0);
        }else{
          this.view.btnLockoutSummary.text = "Add Lock";
          this.view.btnLockoutIsolationPoint.text = "Add Lock";
          this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmAddHaspLock", 1);
          this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmAddHaspLock", 0);
        }
      }
      this.view.flexProjectSummary.isVisible = true;
      
    }else if(param.displayData.lblStatus.text  == "Operational"){
      this.view.btnLockoutSummary.text = "Request Lock Out";
      this.view.flexLockoutDetail.isVisible = false;
      this.view.btnLockoutIsolationPoint.text = "Request Lock Out";
      this.view.btnLockoutIsolationPoint.top = "140dp";
      this.view.flexProjectSummary.isVisible = false;
      this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmRequestLockout", 1);
      this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmRequestLockout", 0);
    }else if(param.displayData.lblStatus.text  == "Pending Unlock"){
      this.view.btnLockoutSummary.text = "Perform Unlock";
      this.view.imgSms.isVisible = false;
      this.view.flexLockoutDetail.isVisible = false;
      this.view.btnLockoutIsolationPoint.text = "Perform Unlock";
      this.view.btnLockoutIsolationPoint.top = "140dp";
      this.view.flexProjectSummary.isVisible = true;
      this.view.btnLockoutIsolationPoint.onClick = this.navForm.bind(this, "frmPendingUnlockS1", 1);
      this.view.btnLockoutSummary.onClick = this.navForm.bind(this, "frmPendingUnlockS1", 0);
      this.view.flexTeamMessage.isVisible = false;
    }
    
    //alert("Hi")
    this.view.flexPopupMessage.isVisible = false;
    this.dataIsolationPoint = [
      {
        "ip":"Isolation Point 1",
        "step":1,
        "location":"Isolation Point is near CWP - 13",
        "images":[
          {
            "img":"isolationpoint_1.png"
          },{
            "img":"isolationpoint_2.png"
          },{
            "img":""
          },{
            "img":""
          }
        ],
        "tools":[
          {
            "tool":"Padlock",
            "img":"padlock.png",
            "Quantity":1
          },{
            "tool":"Cable Device",
            "img":"padlock.png",
            "Quantity":1
          },{
            "tool":"Arc Flash Gloves",
            "img":"gloves.png",
            "Quantity":1
          }
        ],
        "imgIcon":[
          {
            "img":"power.png"
          },{
            "img":"wave.png"
          },{
            "img":""
          },{
            "img":""
          }
        ],
        "arrayData":[
          {
            "isolationNum":"E-1",
            "type":"Electrical Type",
            "imageType":"power.png",
            "typeDetail":"480 VAC Single Feed"
          },{
            "isolationNum":"E-2",
            "type":"Hydraulic Type",
            "imageType":"wave.png",
            "typeDetail":"480 VAC Feed"
          }
        ]
      },{
        "ip":"Isolation Point 2",
        "step":2,
        "location":"Isolation Point is near CWP - 22",
        "images":[
          {
            "img":"isolationpoint_3.png"
          },{
            "img":""
          },{
            "img":""
          },{
            "img":""
          }
        ],
        "imgIcon":[
          {
            "img":"timer.png"
          },{
            "img":""
          },{
            "img":""
          },{
            "img":""
          }
        ],
        "tools":[
          {
            "tool":"Cable Device",
            "img":"padlock.png",
            "Quantity":"1"
          },{
            "tool":"Ball Valve Device",
            "img":"padlock.png",
            "Quantity":"1"
          },{
            "tool":"Arc Flash Gloves",
            "img":"gloves.png",
            "Quantity":"1"
          }
        ],
        "arrayData":[
          {
            "isolationNum":"E-1",
            "type":"Pneumatic Type",
            "imageType":"power.png",
            "typeDetail":"480 VAC Single Feed"
          }
        ]
      }
    ];
    
   // alert(param["displayData"]);
  },
  preshow:function(){
    var skinLabel = "skinNumNormal";
    this.view.flxIsolationPoint.removeAll();
    for(var i in this.dataIsolationPoint){
      if(this.dataIsolationPoint[i].step == 1){
        skinLabel = "skinFocusNum";
      }else{
        skinLabel = "skinNumNormal";
      }
      var isolationPoint = new com.dfx.isolationPoint({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "isolationPoint"+i,
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
                        "skin": skinLabel,
                        "text": this.dataIsolationPoint[i].step.toFixed(0)
                    },
                    "lblIsolationPoint": {
                        "text": this.dataIsolationPoint[i].ip
                    },
                    "isolationPoint": {
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
            isolationPoint.arrayData = {
                "data":  this.dataIsolationPoint[i].arrayData,
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "isolationNum",
                    "columnHeaderType": "text",
                    "columnID": "isolationNum",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "deefa496c0f54c34aac047dff5b1a4af"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "imageType",
                    "columnHeaderType": "text",
                    "columnID": "imageType",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "a4402ebb4d964294be29840bcf355e25"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "type",
                    "columnHeaderType": "text",
                    "columnID": "type",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "a31e6919d5f2408b9f003fe88c9a2df2"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "typeDetail",
                    "columnHeaderType": "text",
                    "columnID": "typeDetail",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "b3788c10600943a6a3a4c1d0db43d792"
                }]
            };
      isolationPoint.onClickDetails = this.onClickIsolationPoint.bind(this, i);
      isolationPoint.onRowClick = this.onClickIsolationPoint.bind(this, i);
      //isolationPoint2.onClickDetails = this.onClickIsolationPoint.bind(this, i);
           this.view.flxIsolationPoint.add(isolationPoint);

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
  
  onClickIsolationPoint:function(ind){
    var navData = {
      "img1":this.dataIsolationPoint[ind].imgIcon[0].img,
      "img2":this.dataIsolationPoint[ind].imgIcon[1].img,
      "img3":this.dataIsolationPoint[ind].imgIcon[2].img,
      "img4":this.dataIsolationPoint[ind].imgIcon[3].img,
      "isolationPoint":this.dataIsolationPoint[ind].ip,
      "imgAsset1":this.dataIsolationPoint[ind].images[0].img,
      "imgAsset2":this.dataIsolationPoint[ind].images[1].img,
      "imgAsset3":this.dataIsolationPoint[ind].images[2].img,
      "imgAsset4":this.dataIsolationPoint[ind].images[3].img,
      "location":this.dataIsolationPoint[ind].location,
      "tool1":this.dataIsolationPoint[ind].tools[0].tool,
      "tool2":this.dataIsolationPoint[ind].tools[1].tool,
      "tool3":this.dataIsolationPoint[ind].tools[2].tool,
      "toolImage1":this.dataIsolationPoint[ind].tools[0].img,
      "toolImage2":this.dataIsolationPoint[ind].tools[1].img,
      "toolImage3":this.dataIsolationPoint[ind].tools[2].img,
      "toolQuantity1":"Quantity: "+this.dataIsolationPoint[ind].tools[0].Quantity,
      "toolQuantity2":"Quantity: "+this.dataIsolationPoint[ind].tools[1].Quantity,
      "toolQuantity3":"Quantity: "+this.dataIsolationPoint[ind].tools[2].Quantity,
    };
    this.dataForm = {"displayData":this.dataForm.displayData,"key":1,"selInd":navData};
   // var param = {"dataForm":this.dataForm,"selInd":ind};
    var navObj = new kony.mvc.Navigation("frmIsolationPointDetail");
    navObj.navigate(this.dataForm);
  },
  
  navForm:function(frmName,key){
    this.dataForm.key = key;
    var navObj = new kony.mvc.Navigation(frmName);
    navObj.navigate(this.dataForm);
  },
  
  navBack:function(){
    //alert("Hi")
    var navObj = new kony.mvc.Navigation("frmDashboard");
    navObj.navigate();
  },
  
  toggleTabs:function(index){
    if(index == 0){
      this.view.flxScrollIsolationPoint.isVisible = false;
      this.view.flxScrollSummary.isVisible = true;
      this.view.lblFocusIsolationPoint.isVisible = false;
      this.view.lblFocusSummary.isVisible = true;
      this.view.lblSummaryTag.skin = "skinLabelFocus";
      this.view.lblIsolationPointTag.skin = "skinLabelNormal";
    }else{
      this.view.flxScrollIsolationPoint.isVisible = true;
      this.view.flxScrollSummary.isVisible = false;
      this.view.lblFocusIsolationPoint.isVisible = true;
      this.view.lblFocusSummary.isVisible = false;
      this.view.lblSummaryTag.skin = "skinLabelNormal";
      this.view.lblIsolationPointTag.skin = "skinLabelFocus";
    }
  },
  
  showpopupMessage:function(){
    this.view.flexPopupMessage.isVisible = true;
  },
  sendMessage:function(){
    var tempData = [];
    tempData = [
      {
        "lblTime":"Team Message, 13:05",
        "imgPerson":"profile.png",
        "lblMessage":"The Lockbox is near CWP-13. Please do not move the Lockbox."
      }
    ];
    this.view.segMessage.setData(tempData);
    this.view.flexTeamMessage.isVisible = true;
    this.view.flexPopupMessage.isVisible = false;
  }

 //Type your controller code here 

 });
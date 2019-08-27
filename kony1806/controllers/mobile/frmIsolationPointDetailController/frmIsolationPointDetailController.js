define({ 
  dataForm:{},
  onNavigate:function(param){
    //alert(param)
    this.dataForm = param;
    //var index = param.selInd;
    var dataNav = param.selInd;
    this.view.img1.src = dataNav.img1;
    this.view.img2.src = dataNav.img2;
    this.view.img3.src = dataNav.img3;
    this.view.img4.src = dataNav.img4;
    this.view.imgAsset1.src = dataNav.imgAsset1;
    this.view.imgAsset2.src =  dataNav.imgAsset2;
    this.view.imgAsset3.src =  dataNav.imgAsset3;
    this.view.imgAsset4.src =  dataNav.imgAsset4;
    this.view.headerIsolationPoint.text = dataNav.isolationPoint;
    this.view.lblIsolationPoint.text = dataNav.isolationPoint;
    this.view.lblLocation.text = dataNav.location;
    this.view.tools1.textQuantity = dataNav.toolQuantity1;
    this.view.tools2.textQuantity = dataNav.toolQuantity2;
    this.view.tools3.textQuantity = dataNav.toolQuantity3;
    this.view.tools1.textToolName = dataNav.tool1;
    this.view.tools2.textToolName = dataNav.tool2;
    this.view.tools3.textToolName = dataNav.tool3;  
    this.view.tools1.srcTool = dataNav.toolImage1;
    this.view.tools2.srcTool = dataNav.toolImage2;
    this.view.tools3.srcTool = dataNav.toolImage3;
    if(param.displayData.lblStatus.text == "Pending Lockout"){
      this.view.btnLockoutIsolationPoint.text = "Perform Lock Out";
      this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmProjectRequest");
    }else if(param.displayData.lblStatus.text == "Locked"){
      if(param.displayData.imgCurrentlyWorking.src == "group3.png"){
        this.view.btnLockoutIsolationPoint.text = "Remove Lock";
        if(param.displayData.lblLOtype == "Lockbox"){
          this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmRemoveLockS1");
        }else{
          this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmRemoveHaspLockS1");
        }
        
      }else{
        this.view.btnLockoutIsolationPoint.text = "Add Lock";
        if(param.displayData.lblLOtype == "Lockbox"){
          this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmAddLock");
        }else{
          this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmAddHaspLock");
        }
      }
      
    }else if(param.displayData.lblStatus.text  == "Operational"){
      this.view.btnLockoutIsolationPoint.text = "Request Lock Out";
      this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmRequestLockout");
    }else if(param.displayData.lblStatus.text  == "Pending Unlock"){
      this.view.btnLockoutIsolationPoint.text = "Perform Unlock";
      this.view.btnLockoutIsolationPoint.onClick = this.navtoDetail.bind(this, "frmPendingUnlockS1");
    }
  },
  navtoDetail:function(frmName){
    //var param = {"key":1,"displayDta":this.dataForm.displayDta};
    var navObj = new kony.mvc.Navigation(frmName);
    navObj.navigate(this.dataForm);
  }

 //Type your controller code here 

 });
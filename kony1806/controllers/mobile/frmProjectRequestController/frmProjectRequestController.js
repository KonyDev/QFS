define({ 
  dataForm:{},
  onNavigate:function(param){
    this.dataForm = param;
    this.view.lblStatus.text = param.displayData.lblStatus.text;
    this.view.lblStatus.skin = param.displayData.lblStatus.skin;
    this.view.lblProjectTitle.text= param.displayData.lblProjectTitle;
    this.view.addressDetail.textTag = "Address";
    this.view.facilityDetail.textTag = "Facility";
    this.view.addressDetail.textDetail = param.displayData.lblAddress;
    this.view.facilityDetail.textDetail = param.displayData.lblFacility;
    this.view.img1.src = param.displayData.img1;
    this.view.img2.src = param.displayData.img2;
    this.view.img3.src = param.displayData.img3;
    this.view.img4.src = param.displayData.img4;
    this.view.confirmCheckbox.srcCheckbox =  "checkboxn.png";
    this.view.btnSubmit.skin = "skinDeActive";
    this.view.btnSubmit.focusSkin = "skinDeActive";
      
  },
  
  confirm:function(){
    this.view.confirmCheckbox.srcCheckbox =  "checkboxf.png";
    this.view.btnSubmit.skin = "skinActive";
    this.view.btnSubmit.focusSkin = "skinActive";
  },
  
  navToStartLockout:function(){
    if(this.view.btnSubmit.skin == "skinActive"){
      var param = {"status":1};
      var navObj = new kony.mvc.Navigation("frmStartLockout");
      navObj.navigate(param);
      
    }
  },
  
  navToProjectDetail:function(){
    var prevForm = kony.application.getPreviousForm().id;
    //alert(prevForm)
    //var param = {"key":0,"displayData":[]};
    var navObj = new kony.mvc.Navigation(prevForm);
    navObj.navigate(this.dataForm);
    //navObj.navigate(param);
    
  }

 //Type your controller code here 

 });
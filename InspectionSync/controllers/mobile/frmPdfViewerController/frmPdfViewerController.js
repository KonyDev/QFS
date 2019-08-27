define({ 
  lastFormName:null,
  fileNamePDF:null,
  //Type your controller code here 
  /**
   * @function
   *
   */
  onNavigate:function(param){
    if(param===undefined|| param===null)
      return;
    var navigationObj=param["file_path"];
    this.lastFormName=param["last_form"];
    if(kony.os.deviceInfo().name=="iPhone")
    {
      try
      {
        var lengthNavObj = navigationObj.length;
        var check = navigationObj[lengthNavObj-4]+navigationObj[lengthNavObj-3]+navigationObj[lengthNavObj-2]+navigationObj[lengthNavObj-1];
        if(check === ('.pdf')){
          this.fileNamePDF = navigationObj;
        }
      }
      catch(err)
      {
        alert("Exception in on navigate of frm pdfviewer");
      }
    }
    /*if(typeof navigationObj=='string'){
      this.lastFormName=navigationObj;
    }*/
    if(!InspectionUtil.isNetworkAvailable()){
      this.view.loadingScreen.show("offline",2);
    }
  },
  /**
   * @function
   *
   */
  onFormPreShow:function(){
    var self=this;
    var config={};
    config["statusChange"]=function(isOnline){
      if(isOnline){
        self.view.loadingScreen.hide(2);
      }else{
        self.view.loadingScreen.show("offline",2);
      }
    }
    kony.net.setNetworkCallbacks(config);
  },
  /**
   * @function
   *
   */
  onPostShow:function(){
    if(kony.os.deviceInfo().name=='iPhone')
    {
      try
      {
        this.view.pdfviewer.pdfType = "Local File Path";
        this.view.pdfviewer.setIphoneFilePath(this.fileNamePDF);
      }
      catch(err){
        alert("onPostShow: "+err);
      }
    }else if(kony.os.deviceInfo().name=='android')
    {
      try{
        if(typeof this.lastFormName=='string'){
          var navObj=new kony.mvc.Navigation(this.lastFormName);
          navObj.navigate();
        }
      }
      catch(excp){}
    }
  },
  /**
   * @function
   *
   */
  navigateBack:function(){
    try{
      if(typeof this.lastFormName=='string'){
        var navObj=new kony.mvc.Navigation(this.lastFormName);
        navObj.navigate();
      }
      
    }catch(excp){
      debugger;
    }
  }


});
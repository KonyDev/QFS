define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_ef35dd1afaad44aba973333a443d0c03: function AS_FlexContainer_ef35dd1afaad44aba973333a443d0c03(eventobject) {
        var self = this;
        this.navigateToInspectionsList();
    },
    /** onClick defined for flxHistory **/
    AS_FlexContainer_c201748a9dec4316aa2cd4d2129297cc: function AS_FlexContainer_c201748a9dec4316aa2cd4d2129297cc(eventobject) {
        var self = this;
        this._onClickOfHistory();
    },
    /** onTouchEnd defined for lblAssetDetails **/
    AS_Label_b2a849d93cd74f79b8f767660f6c7f54: function AS_Label_b2a849d93cd74f79b8f767660f6c7f54(eventobject, x, y) {
        var self = this;
        this.showAssetDetailContainer();
    },
    /** onPDFButtonClick defined for measurement **/
    AS_UWI_f7337963cf714371b0f9fcae722473bc: function AS_UWI_f7337963cf714371b0f9fcae722473bc(eventobject) {
        var self = this;
        this.showAssetReferenceDoc();
        /*try{
  //Checks if the file is present in the local store
  //if present then it will delete it first
  var mainLoc1 = kony.io.FileSystem.getExternalStorageDirectoryPath();
  var myFileLoc1 = mainLoc1 + constants.FILE_PATH_SEPARATOR +"Reference_Doc.pdf";
  var myFile1 = new kony.io.File(myFileLoc1);
  myFile1.createFile();
  myFile1.remove(true);
	
  //Taking the local stored base64
  //Converting to rawbytes and saving to pdf file locally.
  var base64 = this.asset['Reference_Doc'];
  if(base64=="" || base64==null)
  {
    new kony.ui.Toast({"text":"PDF Not Available!", "duration":constants.TOAST_LENGTH_SHORT}).show();
  }
  else
  {
	//If the base64 is nonempty then it will save to local store.
    var mainLoc = kony.io.FileSystem.getExternalStorageDirectoryPath();
    var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "Reference_Doc.pdf";
    alert(myFileLoc);
    var myFile = new kony.io.File(myFileLoc).createFile();
    var getMyFile = kony.io.FileSystem.getFile(myFileLoc);
    var rawBytes = kony.convertToRawBytes(base64);

    if(getMyFile === null) 
    {
      new kony.ui.Toast({"text":"Getting File failed with null.", "duration":constants.TOAST_LENGTH_SHORT}).show();
    }
    else 
    {
      getMyFile.write(rawBytes);
    }
    
    //Navigate to the New Form.
    var navObj = new kony.mvc.Navigation("frmPdfViewer");
    navObj.navigate();
  }

}
catch(err)
{
  new kony.ui.Toast({"text":"Error in Saving PDF File.", "duration":constants.TOAST_LENGTH_SHORT}).show();
}*/
    },
    /** onMeasurementDone defined for measurement **/
    AS_UWI_e0d8fba678a04b90b0aeb77e87201a1f: function AS_UWI_e0d8fba678a04b90b0aeb77e87201a1f(result) {
        var self = this;
        this.testFun(result);
    },
    /** onClick defined for flxMeasurementOverlay **/
    AS_FlexContainer_d33fdbd434d247ef93929ee181f0bf26: function AS_FlexContainer_d33fdbd434d247ef93929ee181f0bf26(eventobject) {
        var self = this;
        this.scrollToEnd();
    },
    /** onClick defined for btnPdf **/
    AS_Button_cf5f6f219d124ff38e7377f98b743bdd: function AS_Button_cf5f6f219d124ff38e7377f98b743bdd(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPdfViewer");
        ntf.navigate();
    },
    /** onClick defined for btnSubmitInspection **/
    AS_Button_fd1ea9f17e8f402b9308f98701c9d1c5: function AS_Button_fd1ea9f17e8f402b9308f98701c9d1c5(eventobject) {
        var self = this;
        this.readMeasurement();
        //this.view.measurement.getResult();
    },
    /** onClick defined for btnNavigateToDestination **/
    AS_Button_baa3b6c4f5b04e97a56a7af6752e408b: function AS_Button_baa3b6c4f5b04e97a56a7af6752e408b(eventobject) {
        var self = this;
        this.showRoutes();
    },
    /** onClick defined for flxOverlay **/
    AS_FlexContainer_c093bdb0e21a4b879485cb2d4c68a97b: function AS_FlexContainer_c093bdb0e21a4b879485cb2d4c68a97b(eventobject) {
        var self = this;
        this.hideAssetDetailContainer();
    },
    /** onImageSelection defined for imagegallery **/
    AS_UWI_a1b59751fa004ffa920ea30ec240ef2d: function AS_UWI_a1b59751fa004ffa920ea30ec240ef2d(imgBase64) {
        var self = this;
        this.onImageSelected(imgBase64);
    },
    /** onDummyFlexClick defined for imagegallery **/
    AS_UWI_ccdf895437c74cbbb0fa0c74edbdcf40: function AS_UWI_ccdf895437c74cbbb0fa0c74edbdcf40() {
        var self = this;
        this.hideImageGallery();
    },
    /** onClick defined for flxInfoCardContainer **/
    AS_FlexContainer_cab224a773954dada7335615f6a475be: function AS_FlexContainer_cab224a773954dada7335615f6a475be(eventobject) {
        var self = this;
        this.view.flxInfoCardContainer.right = "-100%";
    },
    /** onClick defined for flxImageViewer **/
    AS_FlexContainer_i3adc522cfd64b28bd7a3914a395519d: function AS_FlexContainer_i3adc522cfd64b28bd7a3914a395519d(eventobject) {
        var self = this;
        this.view.flxImageViewer.left = "100%";
    },
    /** inProximityCallback defined for locationtracker **/
    AS_UWI_f4b4cc528d9f417a94ac815ec499dc42: function AS_UWI_f4b4cc528d9f417a94ac815ec499dc42(deviceLocation, destinationLocation) {
        var self = this;
        this.inProximity(deviceLocation, destinationLocation);
    },
    /** outSideProximityCallback defined for locationtracker **/
    AS_UWI_h3058dba816d491f9be16216b11eff1f: function AS_UWI_h3058dba816d491f9be16216b11eff1f(deviceLocation, destinationLocation) {
        var self = this;
        this.outsideProximity(deviceLocation, destinationLocation);
    },
    /** forcedCheckinCallback defined for locationtracker **/
    AS_UWI_f91d5f8ca3054474b4369ee1d303f6fd: function AS_UWI_f91d5f8ca3054474b4369ee1d303f6fd() {
        var self = this;
        this.proceedAnyways();
    },
    /** onMapNavigate defined for locationtracker **/
    AS_UWI_d23e429db0d54f2ead4e85c65fa319db: function AS_UWI_d23e429db0d54f2ead4e85c65fa319db() {
        var self = this;
        this.showRoutes();
    },
    /** init defined for frmInspectionExecution **/
    AS_Form_e64d047bbd754e61883f689db9cd2a3b: function AS_Form_e64d047bbd754e61883f689db9cd2a3b(eventobject) {
        var self = this;
        this.onFormInitialization()
    },
    /** postShow defined for frmInspectionExecution **/
    AS_Form_c5361963c5af48daa8c0d8764385d978: function AS_Form_c5361963c5af48daa8c0d8764385d978(eventobject) {
        var self = this;
        this.onPostShow();
    },
    /** onDeviceBack defined for frmInspectionExecution **/
    AS_Form_g2d25845c203450b81203d701b8a4fd1: function AS_Form_g2d25845c203450b81203d701b8a4fd1(eventobject) {
        var self = this;
        this.navigateToInspectionsList();
        //function doNothing(){};
        //doNothing();
    }
});
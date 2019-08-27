define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburgerOnJourney **/
    AS_FlexContainer_db609abfe09d4a1893daaebcf4d3c349: function AS_FlexContainer_db609abfe09d4a1893daaebcf4d3c349(eventobject) {
        var self = this;
        this.onHamburgerMenuClick();
        /*
if(this.view.flxSideBar.isVisible == false)
  {
    this.view.flxSideBar.isVisible = true;
  }*/
    },
    /** onClick defined for flxDots **/
    AS_FlexContainer_d22358013d554abd97c57234ab098e1e: function AS_FlexContainer_d22358013d554abd97c57234ab098e1e(eventobject) {
        var self = this;
        this.showMoreOption();
    },
    /** checkInCallback defined for journeyTracker **/
    AS_UWI_b73dff45ff544f1295c90f9ee315fb09: function AS_UWI_b73dff45ff544f1295c90f9ee315fb09(checkeInSequenceNumber, successCallback, failureCallback) {
        var self = this;
        this.onNormalCheckIn(checkeInSequenceNumber, successCallback, failureCallback);
    },
    /** OnSOSTrigger defined for journeyTracker **/
    AS_UWI_d32a04978ec1483caf045548217d6156: function AS_UWI_d32a04978ec1483caf045548217d6156() {
        var self = this;
        this.onSOSTriggerEvent();
    },
    /** onSubmit defined for journeyTracker **/
    AS_UWI_a8f357a1abdf4175b654450b9eeb84e1: function AS_UWI_a8f357a1abdf4175b654450b9eeb84e1() {
        var self = this;
        this.onSubmitJourney();
    },
    /** noNetworkCheckIn defined for journeyTracker **/
    AS_UWI_fd1c0767c1ab4ce195054b0860dea254: function AS_UWI_fd1c0767c1ab4ce195054b0860dea254() {
        var self = this;
        this.noNetworkCheckIn();
    },
    /** onMapLoad defined for journeyTracker **/
    AS_UWI_e1af02ec3b624a0993ad3eea1fb8bbeb: function AS_UWI_e1af02ec3b624a0993ad3eea1fb8bbeb() {
        var self = this;
        this.onMapLoad();
    },
    /** onClick defined for flxJourney **/
    AS_FlexContainer_g331555efcef4edebe3a9200d848c355: function AS_FlexContainer_g331555efcef4edebe3a9200d848c355(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for CopyflxNewJourney0a26198e8144c4d **/
    AS_FlexContainer_e08c2b2de0784db5ae066d088750a7f3: function AS_FlexContainer_e08c2b2de0784db5ae066d088750a7f3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onClick defined for flxGuidesManuals **/
    AS_FlexContainer_e5fbde878de040ae80bfd1796f3e1d99: function AS_FlexContainer_e5fbde878de040ae80bfd1796f3e1d99(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxMyAccountSidebar **/
    AS_FlexContainer_gcfa8caeed5f4ad9b225abd3e8f55dab: function AS_FlexContainer_gcfa8caeed5f4ad9b225abd3e8f55dab(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for flxSidebarClicker **/
    AS_FlexContainer_je3f36ad592246e3b2d81ac5d979b549: function AS_FlexContainer_je3f36ad592246e3b2d81ac5d979b549(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** onMessageClick defined for slidingmenu **/
    AS_UWI_i20fa9871adb4deaa26febf5fe3d4fd9: function AS_UWI_i20fa9871adb4deaa26febf5fe3d4fd9(eventobject) {
        var self = this;
        alert("Message click");
    },
    /** onHamburgerMenuHide defined for slidingmenu **/
    AS_UWI_f83627ee9a3c49f1aa2f40e27643ca29: function AS_UWI_f83627ee9a3c49f1aa2f40e27643ca29() {
        var self = this;
        this.hideSlidingMenu();
    },
    /** onJourneyClick defined for slidingmenu **/
    AS_UWI_a39908b0ccac42ddaeef51a25dbeac58: function AS_UWI_a39908b0ccac42ddaeef51a25dbeac58() {
        var self = this;
        this.navigateToMyJourney();
    },
    /** onNewJourneyClick defined for slidingmenu **/
    AS_UWI_abe758c4bc4d4b59beb81eba4a3d6976: function AS_UWI_abe758c4bc4d4b59beb81eba4a3d6976() {
        var self = this;
        return;
        try {
            var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
            ntf.navigate();
        } catch (excp) {
            debugger;
        }
    },
    /** onSyncClick defined for slidingmenu **/
    AS_UWI_a2cdba3f4aaf44b48ae080342f60dd3d: function AS_UWI_a2cdba3f4aaf44b48ae080342f60dd3d() {
        var self = this;
        //this.startSync("IS_TERMINATED");
        this.objectSync();
    },
    /** OnProceedClick defined for alertpopup **/
    AS_UWI_h409e10aa8a14180b233765db3caa0e4: function AS_UWI_h409e10aa8a14180b233765db3caa0e4(eventobject) {
        var self = this;
        this.navigateToMyJourney();
    },
    /** onClick defined for flxPopUps **/
    AS_FlexContainer_b814abf1d5dc4f5fa0171b812d1bb1b3: function AS_FlexContainer_b814abf1d5dc4f5fa0171b812d1bb1b3(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_d60aa06a263c47cebfe86dec6d821716: function AS_FlexContainer_d60aa06a263c47cebfe86dec6d821716(eventobject) {
        var self = this;
        this.hideMoreOption();
    },
    /** onClick defined for flxOptionsHeader **/
    AS_FlexContainer_cbff754c6099412687349c38544ab1f3: function AS_FlexContainer_cbff754c6099412687349c38544ab1f3(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for btnUpdateETA **/
    AS_Button_e2318e7bda9a4acea2011d47f7726f84: function AS_Button_e2318e7bda9a4acea2011d47f7726f84(eventobject) {
        var self = this;
        this.showUpdateETAFlex();
    },
    /** onClick defined for flxReadMessages **/
    AS_FlexContainer_c329038a496e44ada941f70f5b2412fb: function AS_FlexContainer_c329038a496e44ada941f70f5b2412fb(eventobject) {
        var self = this;
        this.openMessagePage();
    },
    /** onRowClick defined for segGuideAndMannual **/
    AS_Segment_h8a3b93c89f041acafd21c7f69b6c70f: function AS_Segment_h8a3b93c89f041acafd21c7f69b6c70f(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onGuideAndMannualSegClick();
    },
    /** dismissAlert defined for ETAReporting **/
    AS_UWI_ffb91d7b7fdf4ca79f703882ea3bc639: function AS_UWI_ffb91d7b7fdf4ca79f703882ea3bc639() {
        var self = this;
        this.hideUpdateETAFlex();
    },
    /** updateETA defined for ETAReporting **/
    AS_UWI_d15764d4449c4c34a7363c7a95762631: function AS_UWI_d15764d4449c4c34a7363c7a95762631(record) {
        var self = this;
        this.updateExpectedArrivalTime(record);
    },
    /** onClick defined for flxOptionMenuContainer **/
    AS_FlexContainer_je57dbdf96314b80872f60c477eaafa9: function AS_FlexContainer_je57dbdf96314b80872f60c477eaafa9(eventobject) {
        var self = this;
        return;
    },
    /** onRowClick defined for segReadMessages **/
    AS_Segment_a10d095026d9496a9bda6fd85f53c821: function AS_Segment_a10d095026d9496a9bda6fd85f53c821(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.setSegData(rowNumber);
    },
    /** onClick defined for btnReadNewMessage **/
    AS_Button_j6f1e1e462fd4fb3bdd1792b85ef81ba: function AS_Button_j6f1e1e462fd4fb3bdd1792b85ef81ba(eventobject) {
        var self = this;
        this.showMessageDetails(this.view.lblFetchID.text);
    },
    /** postShow defined for frmLiveJourney **/
    AS_Form_ba677222d7e449f7be2bda15a2a617ee: function AS_Form_ba677222d7e449f7be2bda15a2a617ee(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for frmLiveJourney **/
    AS_Form_e32e153ae7c94b98b526ce98cb178002: function AS_Form_e32e153ae7c94b98b526ce98cb178002(eventobject) {
        var self = this;
        return;
    }
});
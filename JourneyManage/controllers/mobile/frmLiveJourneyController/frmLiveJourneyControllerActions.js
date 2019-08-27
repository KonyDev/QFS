define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburgerOnJourney **/
    AS_FlexContainer_db609abfe09d4a1893daaebcf4d3c349: function AS_FlexContainer_db609abfe09d4a1893daaebcf4d3c349(eventobject) {
        var self = this;
        if (this.view.flxSideBar.isVisible == false) {
            this.view.flxSideBar.isVisible = true;
        }
    },
    /** onClick defined for flxBackButton **/
    AS_FlexContainer_hb8f8269fcb74a6cbce283f4c5291b93: function AS_FlexContainer_hb8f8269fcb74a6cbce283f4c5291b93(eventobject) {
        var self = this;
        this.view.flxThreeDotsClickContainer.isVisible = false;
        this.view.flxDots.isVisible = true;
        this.view.lblCenterTextMyJourneys.isVisible = true;
        this.view.lblMore.isVisible = false;
        this.view.flxHamburgerOnJourney.isVisible = true;
        this.view.flxBackButton.isVisible = false;
    },
    /** onClick defined for flxDots **/
    AS_FlexContainer_e3be4cfd6deb46f8a648fb5f8909203c: function AS_FlexContainer_e3be4cfd6deb46f8a648fb5f8909203c(eventobject) {
        var self = this;
        this.view.flxThreeDotsClickContainer.isVisible = true;
        this.view.flxDots.isVisible = false;
        this.view.lblCenterTextMyJourneys.isVisible = false;
        this.view.lblMore.isVisible = true;
        this.view.flxHamburgerOnJourney.isVisible = false;
        this.view.flxBackButton.isVisible = true;
    },
    /** checkInCallback defined for journeyTracker **/
    AS_UWI_b73dff45ff544f1295c90f9ee315fb09: function AS_UWI_b73dff45ff544f1295c90f9ee315fb09(checkeInSequenceNumber, successCallback, failureCallback) {
        var self = this;
        return self.onNormalCheckIn.call(this, checkeInSequenceNumber, successCallback, failureCallback);
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
    /** OnProceedClick defined for alertpopup **/
    AS_UWI_h409e10aa8a14180b233765db3caa0e4: function AS_UWI_h409e10aa8a14180b233765db3caa0e4(eventobject) {
        var self = this;
        this.navigateToMyJourney();
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
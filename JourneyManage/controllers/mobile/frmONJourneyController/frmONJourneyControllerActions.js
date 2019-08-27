define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburgerOnJourney **/
    AS_FlexContainer_dd918cde9a69433d9c0ca9347aeef0c2: function AS_FlexContainer_dd918cde9a69433d9c0ca9347aeef0c2(eventobject) {
        var self = this;
        if (this.view.flxSideBar.isVisible == false) {
            this.view.flxSideBar.isVisible = true;
        }
    },
    /** onClick defined for flxBackButton **/
    AS_FlexContainer_c12514d169844eae850580caee4cd99a: function AS_FlexContainer_c12514d169844eae850580caee4cd99a(eventobject) {
        var self = this;
        this.view.flxThreeDotsClickContainer.isVisible = false;
        this.view.flxDots.isVisible = true;
        this.view.lblCenterTextMyJourneys.isVisible = true;
        this.view.lblMore.isVisible = false;
        this.view.flxHamburgerOnJourney.isVisible = true;
        this.view.flxBackButton.isVisible = false;
    },
    /** onClick defined for flxDots **/
    AS_FlexContainer_e646ef63ec564540ab3f398be86ccec4: function AS_FlexContainer_e646ef63ec564540ab3f398be86ccec4(eventobject) {
        var self = this;
        this.view.flxThreeDotsClickContainer.isVisible = true;
        this.view.flxDots.isVisible = false;
        this.view.lblCenterTextMyJourneys.isVisible = false;
        this.view.lblMore.isVisible = true;
        this.view.flxHamburgerOnJourney.isVisible = false;
        this.view.flxBackButton.isVisible = true;
    },
    /** onClick defined for flxJourney **/
    AS_FlexContainer_j8de27bd64d2453f96178e6b8cfe0350: function AS_FlexContainer_j8de27bd64d2453f96178e6b8cfe0350(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for CopyflxNewJourney0a26198e8144c4d **/
    AS_FlexContainer_ce7f8acc391f43debfa99039846ba10d: function AS_FlexContainer_ce7f8acc391f43debfa99039846ba10d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onClick defined for flxGuidesManuals **/
    AS_FlexContainer_ec06813945eb4097b3fb4c9d588fbdc2: function AS_FlexContainer_ec06813945eb4097b3fb4c9d588fbdc2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxMyAccountSidebar **/
    AS_FlexContainer_j2a4fe1cba2241cc8795c24a7466e6af: function AS_FlexContainer_j2a4fe1cba2241cc8795c24a7466e6af(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for flxSidebarClicker **/
    AS_FlexContainer_db74a93db2f94b5cb3815c5bcda74550: function AS_FlexContainer_db74a93db2f94b5cb3815c5bcda74550(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** onRowClick defined for segReadMessages **/
    AS_Segment_jba6cddcc81746339b772684dcbd5cb6: function AS_Segment_jba6cddcc81746339b772684dcbd5cb6(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.setSegData(rowNumber);
    },
    /** postShow defined for frmONJourney **/
    AS_Form_h1526d28689a49aaa3bc879f61ac3ba5: function AS_Form_h1526d28689a49aaa3bc879f61ac3ba5(eventobject) {
        var self = this;
        this.addNotificationStatus();
    }
});
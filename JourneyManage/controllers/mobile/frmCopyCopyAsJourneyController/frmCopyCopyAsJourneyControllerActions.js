define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSubmit **/
    AS_Button_d705aa0bf7c74ceab3236b2cc3e5a5a2: function AS_Button_d705aa0bf7c74ceab3236b2cc3e5a5a2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for flxJourney **/
    AS_FlexContainer_g5cb9eb0c3744283810593302dc28ae3: function AS_FlexContainer_g5cb9eb0c3744283810593302dc28ae3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for flxNewJourney **/
    AS_FlexContainer_df19586243b0457f9562381722d3ae86: function AS_FlexContainer_df19586243b0457f9562381722d3ae86(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onClick defined for flxGuidesManuals **/
    AS_FlexContainer_f10a9905a647401c80c789d9a6820058: function AS_FlexContainer_f10a9905a647401c80c789d9a6820058(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxMyAccountSidebar **/
    AS_FlexContainer_i1d09a848c254293b6a110f6ff76cf6b: function AS_FlexContainer_i1d09a848c254293b6a110f6ff76cf6b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxSidebarClicker **/
    AS_FlexContainer_c75ac9c3a92845029b7ee211cafaec48: function AS_FlexContainer_c75ac9c3a92845029b7ee211cafaec48(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** preShow defined for frmCopyCopyAsJourney **/
    AS_Form_c968e1cf91e14fafaf398f1c1ce85e24: function AS_Form_c968e1cf91e14fafaf398f1c1ce85e24(eventobject) {
        var self = this;
        this.view.flxMain.isVisible = true;
        this.view.flxSideBar.isVisible = false;
        return;
        //Setting the data in the Approval Awaited Screen for the Journey.
        this.view.lblFromDeparture.text = ApplicationData1.SavingData.DeparturePoint;
        this.view.lblToArrival.text = ApplicationData1.SavingData.ArrivalPoint;
    }
});
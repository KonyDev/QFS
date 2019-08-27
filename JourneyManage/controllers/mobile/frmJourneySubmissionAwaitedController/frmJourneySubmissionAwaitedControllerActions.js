define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for CopyflxBack0eb1237f9aa094f **/
    AS_FlexContainer_e5b8823904d945648a36fd78beca6dce: function AS_FlexContainer_e5b8823904d945648a36fd78beca6dce(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = true;
    },
    /** onClick defined for btnSubmit **/
    AS_Button_b23e40fe6eef4260b110713cbb7bbbbf: function AS_Button_b23e40fe6eef4260b110713cbb7bbbbf(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for flxJourney **/
    AS_FlexContainer_a3977bc056d343d99ebf746372d7328b: function AS_FlexContainer_a3977bc056d343d99ebf746372d7328b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for flxNewJourney **/
    AS_FlexContainer_c87071e411d54e97a099295c9f034c16: function AS_FlexContainer_c87071e411d54e97a099295c9f034c16(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onClick defined for flxGuidesManuals **/
    AS_FlexContainer_c407b5c2c9c548eca6657214cfc2a85a: function AS_FlexContainer_c407b5c2c9c548eca6657214cfc2a85a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxMyAccountSidebar **/
    AS_FlexContainer_i46a63d14d1c4b1aa18dcb9a14be4455: function AS_FlexContainer_i46a63d14d1c4b1aa18dcb9a14be4455(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxSidebarClicker **/
    AS_FlexContainer_eac54b255919403eb8c6e4a35b87b2cf: function AS_FlexContainer_eac54b255919403eb8c6e4a35b87b2cf(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** preShow defined for frmJourneySubmissionAwaited **/
    AS_Form_de557657db64439584a67de7963cfdef: function AS_Form_de557657db64439584a67de7963cfdef(eventobject) {
        var self = this;
        this.view.flxMain.isVisible = true;
        this.view.flxSideBar.isVisible = false;
        return;
        //Setting the data in the Approval Awaited Screen for the Journey.
        this.view.lblFromDeparture.text = ApplicationData1.SavingData.DeparturePoint;
        this.view.lblToArrival.text = ApplicationData1.SavingData.ArrivalPoint;
    },
    /** postShow defined for frmJourneySubmissionAwaited **/
    AS_Form_c683312dc6eb4552b65f867fd001b299: function AS_Form_c683312dc6eb4552b65f867fd001b299(eventobject) {
        var self = this;
        return self.onFormPostShow.call(this);
    }
});
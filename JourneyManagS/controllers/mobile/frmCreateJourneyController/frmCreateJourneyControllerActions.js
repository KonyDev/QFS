define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCancel **/
    AS_Button_g9860884178d4afd8be1baec38c2fda1: function AS_Button_g9860884178d4afd8be1baec38c2fda1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmJourneySubmissionAwaited");
        ntf.navigate();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_g9dbff46fcd045aab463560b66b00c85: function AS_Button_g9dbff46fcd045aab463560b66b00c85(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyRoute");
        ntf.navigate();
    },
    /** preShow defined for frmCreateJourney **/
    AS_Form_h2e661853f5e4c2190f60f7c7157e627: function AS_Form_h2e661853f5e4c2190f60f7c7157e627(eventobject) {
        var self = this;
        this.view.lblToDeparture.text = ApplicationData1.SavingData.DeparturePoint;
        this.view.lblFromDeparture.text = ApplicationData1.SavingData.DeparturePoint;
        this.view.lblToArrival.text = ApplicationData1.SavingData.ArrivalPoint;
        this.view.lblFromArrival.text = ApplicationData1.SavingData.ArrivalPoint;
    }
});
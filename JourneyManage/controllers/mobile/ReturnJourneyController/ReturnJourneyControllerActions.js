define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_ge03ab0ae5554328b8f7f1bc73460aa9: function AS_FlexContainer_ge03ab0ae5554328b8f7f1bc73460aa9(eventobject) {
        var self = this;
        new kony.ui.Toast({
            "text": "Back Button Clicked!",
            "duration": constants.TOAST_LENGTH_SHORT
        }).show();
    },
    /** onClick defined for CopybtnCancel0g1254084c13249 **/
    AS_Button_f9754729a4464835a32c8e1ade788abc: function AS_Button_f9754729a4464835a32c8e1ade788abc(eventobject) {
        var self = this;
        this.view.flxNewJourneyReady.isVisible = false;
        this.view.flxNewJourneyRoute.isVisible = true;
    },
    /** onClick defined for btnSubmit **/
    AS_Button_db3f2716b9f94864b735f16676582caa: function AS_Button_db3f2716b9f94864b735f16676582caa(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyVehicle");
        ntf.navigate();
    },
    /** onRowClick defined for segDeparturePoints **/
    AS_Segment_a4dbe688785d4c77a702738dbe539f64: function AS_Segment_a4dbe688785d4c77a702738dbe539f64(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyRoute.isVisible = false;
        this.view.flxNewJourneyRoute2.isVisible = true;
    },
    /** onRowClick defined for segArrivalPoints **/
    AS_Segment_ce63fbba1d744fd099e1b94bb831c380: function AS_Segment_ce63fbba1d744fd099e1b94bb831c380(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyRoute.isVisible = false;
        this.view.flxNewJourneyRoute2.isVisible = false;
        this.view.flxNewJourneyReady.isVisible = true;
    }
});
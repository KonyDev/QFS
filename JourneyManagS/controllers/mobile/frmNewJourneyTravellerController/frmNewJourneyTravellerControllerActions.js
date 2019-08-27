define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_ff62e10893c544b6943841cf98c5fdfe: function AS_FlexContainer_ff62e10893c544b6943841cf98c5fdfe(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onRowClick defined for Segment0j4cc0ab190dd48 **/
    AS_Segment_bb07140a42ae429589c7c9abc8a35466: function AS_Segment_bb07140a42ae429589c7c9abc8a35466(eventobject, sectionNumber, rowNumber) {
        var self = this;
        // alert(this.view.Segment0j4cc0ab190dd48.selectedRowIndex);
        this.view.Segment0j4cc0ab190dd48.removeAt(this.view.Segment0j4cc0ab190dd48.selectedRowIndex[1]);
        // alert(this.view.Segment0j4cc0ab190dd48.data);
        if (this.view.Segment0j4cc0ab190dd48.data.length == 0) {
            this.view.flxPassengerDetailsContainer.isVisible = false;
        }
    },
    /** onClick defined for btnCancel **/
    AS_Button_e57db506ed284c7f9c7efc2b20860659: function AS_Button_e57db506ed284c7f9c7efc2b20860659(eventobject) {
        var self = this;
        this.view.flxPassengerDetailsContainer.isVisible = true;
        try {
            this.showAllThePassengers();
        } catch (err) {
            alert(err.message);
        }
    },
    /** onClick defined for flxAddPassenger **/
    AS_FlexContainer_i274525d5c2341489e9ef477408305fd: function AS_FlexContainer_i274525d5c2341489e9ef477408305fd(eventobject) {
        var self = this;
        this.view.flxAddPassengerContainer.isVisible = true;
    },
    /** onClick defined for btnNextStep **/
    AS_Button_i199cb4f2423428cb5b6ed9f8652b3c3: function AS_Button_i199cb4f2423428cb5b6ed9f8652b3c3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyRoute");
        ntf.navigate();
    },
    /** postShow defined for frmNewJourneyTraveller **/
    AS_Form_hddcf67270c94bee98fdf73349f2ddd2: function AS_Form_hddcf67270c94bee98fdf73349f2ddd2(eventobject) {
        var self = this;
        this.setfrmNewJourneyTraveller();
    }
});
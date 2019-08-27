define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_j1634386fc7142998281e4712a274cbf: function AS_FlexContainer_j1634386fc7142998281e4712a274cbf(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for btnCopy **/
    AS_Button_ge7749097ee24a1b9f530a77fb51b87b: function AS_Button_ge7749097ee24a1b9f530a77fb51b87b(eventobject) {
        var self = this;
        this.CopyDataAsNewJourney['isReturn'] = false;
        this.onClickCopyJourney();
    },
    /** onClick defined for btnCopyAsReturn **/
    AS_Button_f4fe529e3edb4291bccd37c65058c4e8: function AS_Button_f4fe529e3edb4291bccd37c65058c4e8(eventobject) {
        var self = this;
        this.CopyDataAsNewJourney['isReturn'] = true;
        this.onClickCopyAsReturnJourney();
    }
});
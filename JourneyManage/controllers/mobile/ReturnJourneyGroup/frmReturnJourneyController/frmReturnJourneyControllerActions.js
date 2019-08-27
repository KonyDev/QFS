define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_df655d3a034945d6a2a5024387847bf8: function AS_FlexContainer_df655d3a034945d6a2a5024387847bf8(eventobject) {
        var self = this;
        try {
            var ntf = new kony.mvc.Navigation("frmCreateJourney");
            ntf.navigate();
        } catch (excp) {
            debugger;
        }
    },
    /** onClick defined for flxDepartureDateContainer **/
    AS_FlexContainer_j933a984077d401b990ed98e868ba8ca: function AS_FlexContainer_j933a984077d401b990ed98e868ba8ca(eventobject) {
        var self = this;
        this.toggleDepartureDateTimeFlex();
    },
    /** onDateSelected1 defined for datepicker **/
    AS_UWI_aad20f09b3d34873b6bd8b63bd6bc2d6: function AS_UWI_aad20f09b3d34873b6bd8b63bd6bc2d6(selectedDate) {
        var self = this;
        this.onDepartureDateSelection(selectedDate);
    },
    /** onTimeSelected defined for timePicker **/
    AS_UWI_bce82e979b844f0a8b78996b334a94d5: function AS_UWI_bce82e979b844f0a8b78996b334a94d5(selectedTime) {
        var self = this;
        this.onDepartureTimeSelected(selectedTime);
    },
    /** onClick defined for flxArrivalDateContainer **/
    AS_FlexContainer_a7f8d33740464e1094efaa2d6f437d51: function AS_FlexContainer_a7f8d33740464e1094efaa2d6f437d51(eventobject) {
        var self = this;
        this.toggleArrivalDateTimeFlex();
    },
    /** onDateSelected1 defined for datepickerArrival **/
    AS_UWI_d90b62075422480985cb2df639bedd0d: function AS_UWI_d90b62075422480985cb2df639bedd0d(selectedDate) {
        var self = this;
        this.onArrivalDateSelection(selectedDate);
    },
    /** onTimeSelected defined for timePicker1 **/
    AS_UWI_e95778273c154a3cb4c5ec3e9cf4cb54: function AS_UWI_e95778273c154a3cb4c5ec3e9cf4cb54(selectedTime) {
        var self = this;
        this.onArrivalTimeSelected(selectedTime);
    },
    /** onSelection defined for lstCheckInType **/
    AS_ListBox_j4611a55f72e461389f68911ebac5469: function AS_ListBox_j4611a55f72e461389f68911ebac5469(eventobject) {
        var self = this;
        this.onCheckInTypeSelected();
        return;
        try {
            debugger;
            this.selectedCheckinTypeUpdate = parseInt(this.view.lstTimeCheckins.selectedKey);
            //         alert(this.view.lstTimeCheckins.selectedKey);
        } catch (err) {
            alert(err);
        }
    },
    /** onSelection defined for lstTimeFrameForCheckins **/
    AS_ListBox_e07ab3459ccc4df9a867557d02366830: function AS_ListBox_e07ab3459ccc4df9a867557d02366830(eventobject) {
        var self = this;
        this.onTimeIntervalSelection();
    },
    /** onClick defined for btnEditDetail **/
    AS_Button_g561cc6ab82e4f6cb435c571e88f5849: function AS_Button_g561cc6ab82e4f6cb435c571e88f5849(eventobject) {
        var self = this;
        this.onEditDetail();
    },
    /** onClick defined for btnNext **/
    AS_Button_aef2b8f3f119487cacfdc1093b3db095: function AS_Button_aef2b8f3f119487cacfdc1093b3db095(eventobject) {
        var self = this;
        this.proceedNext();
    },
    /** postShow defined for frmReturnJourney **/
    AS_Form_e7a44c2780b74a55bfa8ced9c894c820: function AS_Form_e7a44c2780b74a55bfa8ced9c894c820(eventobject) {
        var self = this;
        this.onFormPostShow();
    }
});
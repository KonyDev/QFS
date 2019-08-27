define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDateSelectionDone defined for datepicker **/
    AS_UWI_fde5a058a23549a79894651599f1c484: function AS_UWI_fde5a058a23549a79894651599f1c484(dateString) {
        var self = this;
        this.onDepartureDateSelection(dateString);
    },
    /** onTimeSelected defined for timePicker **/
    AS_UWI_e89186c43c884b0da7a0d9328b631b61: function AS_UWI_e89186c43c884b0da7a0d9328b631b61(selectedTime) {
        var self = this;
        this.onDepartureTimeSelected(selectedTime);
    },
    /** onDateSelectionDone defined for datepickerArrival **/
    AS_UWI_eb9e06f8992f4e7cb7c230551829cf55: function AS_UWI_eb9e06f8992f4e7cb7c230551829cf55(dateString) {
        var self = this;
        this.onArrivalDateSelection(dateString);
    },
    /** onTimeSelected defined for timePicker1 **/
    AS_UWI_ea84152607d8438ab47455d54554feef: function AS_UWI_ea84152607d8438ab47455d54554feef(selectedTime) {
        var self = this;
        this.onArrivalTimeSelected(selectedTime);
    },
    /** onSelection defined for lstTimeCheckins **/
    AS_ListBox_j4611a55f72e461389f68911ebac5469: function AS_ListBox_j4611a55f72e461389f68911ebac5469(eventobject) {
        var self = this;
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
        try {
            debugger;
            this.selectedCheckinRowIdUpdate = parseInt(this.view.lstTimeFrameForCheckins.selectedKey);
        } catch (err) {
            alert(err.message);
        }
    },
    /** onClick defined for btnEditDetail **/
    AS_Button_c42cc146da4f47d1a9e2ff290dbd500e: function AS_Button_c42cc146da4f47d1a9e2ff290dbd500e(eventobject) {
        var self = this;
        this.onEditDetail();
    },
    /** onClick defined for btnNext **/
    AS_Button_a493518e425f4bde8573604eef1eef61: function AS_Button_a493518e425f4bde8573604eef1eef61(eventobject) {
        var self = this;
        this.proceedNext();
    }
});
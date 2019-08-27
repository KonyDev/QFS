define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgBack **/
    AS_Image_f31ed9795c2e4922a555050e1f6be8fb: function AS_Image_f31ed9795c2e4922a555050e1f6be8fb(eventobject, x, y) {
        var self = this;
        this.view.flxArrivalDetails.isVisible = false;
        this.view.flxDepartureDetails.isVisible = true;
        this.view.lblCenterText.text = "Departure Datetime Details";
        this.view.imgBack.isVisible = false;
    },
    /** onDateSelected1 defined for datePickerDeparture **/
    AS_UWI_fa294cb71e0b4c34a19abd8cdc0edf87: function AS_UWI_fa294cb71e0b4c34a19abd8cdc0edf87(selectedDate) {
        var self = this;
        try {
            this.SelectedDateDeparture(selectedDate);
        } catch (err) {
            alert(err.message);
        }
    },
    /** onTimeSelected defined for timePickerDeparture **/
    AS_UWI_g861d2d92b0f4c8584678f64e94ce88a: function AS_UWI_g861d2d92b0f4c8584678f64e94ce88a(selectedTime) {
        var self = this;
        this.SelectedTimeDeparture(selectedTime);
    },
    /** onDateSelected1 defined for datePickerArrival **/
    AS_UWI_h1eb004bfe4f491fb222c81d8511155b: function AS_UWI_h1eb004bfe4f491fb222c81d8511155b(selectedDate) {
        var self = this;
        this.SelectedDateArrival(selectedDate);
    },
    /** onTimeSelected defined for timePickerArrival **/
    AS_UWI_ff868a969d5149fc82704aa4f41f5881: function AS_UWI_ff868a969d5149fc82704aa4f41f5881(selectedTime) {
        var self = this;
        this.SelectedTimeArrival(selectedTime);
    },
    /** postShow defined for frmCopyAndCopyAsReturn **/
    AS_Form_df4e4448b6ba48fc8ed5689b095b05c5: function AS_Form_df4e4448b6ba48fc8ed5689b095b05c5(eventobject) {
        var self = this;
        this.onPostShowEvent();
    }
});
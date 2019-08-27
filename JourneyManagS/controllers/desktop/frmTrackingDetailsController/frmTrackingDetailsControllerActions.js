define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnNextStep **/
    AS_Button_gd1491d275464b629a31a4785532768a: function AS_Button_gd1491d275464b629a31a4785532768a(eventobject) {
        var self = this;
        this.setData();
    },
    /** onClick defined for btnSave **/
    AS_Button_f90cead7bd094fc49e31a6f1a245dc3a: function AS_Button_f90cead7bd094fc49e31a6f1a245dc3a(eventobject) {
        var self = this;
        this.updateData();
    },
    /** onSelection defined for listboxData **/
    AS_ListBox_f9642273f6a94b358c955a86ce14142a: function AS_ListBox_f9642273f6a94b358c955a86ce14142a(eventobject) {
        var self = this;
        this.selectedData(eventobject);
    },
    /** onClick defined for flxDashboard **/
    AS_FlexContainer_f07adb94dc284473beaa5feff513f88f: function AS_FlexContainer_f07adb94dc284473beaa5feff513f88f(eventobject) {
        var self = this;
        this.backToReview();
    },
    /** postShow defined for frmTrackingDetails **/
    AS_Form_i069826679c647329280023c44d65faa: function AS_Form_i069826679c647329280023c44d65faa(eventobject) {
        var self = this;
        this.fetchJourneyReason();
    }
});
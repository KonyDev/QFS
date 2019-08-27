define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBack defined for headerWithBack **/
    AS_UWI_da5fc7d6bb2a4edf8e20288910cdd6da: function AS_UWI_da5fc7d6bb2a4edf8e20288910cdd6da(eventobject) {
        var self = this;
        return self.navToForm.call(this, "frmMaintananceSummary");
    },
    /** onClick defined for btnCheckIn **/
    AS_Button_bd1aada99bcf4383ab191cff1c1cfe04: function AS_Button_bd1aada99bcf4383ab191cff1c1cfe04(eventobject) {
        var self = this;
        return self.checkIn.call(this);
    },
    /** onClick defined for btnStart **/
    AS_Button_c7fbdaee72464b7796d1c39c61b6e0a3: function AS_Button_c7fbdaee72464b7796d1c39c61b6e0a3(eventobject) {
        var self = this;
        return self.startGPS.call(this);
    },
    /** onClick defined for FlexContainer0caed2b172bd549 **/
    AS_FlexContainer_aba682353bb147e997fdba4ec0eed78d: function AS_FlexContainer_aba682353bb147e997fdba4ec0eed78d(eventobject) {
        var self = this;
        return self.navToForm.call(this, "frmCompleteTaskS1");
    },
    /** onClick defined for flexCheckedInSuccess **/
    AS_FlexContainer_a22843ed3d6a4d1baca65f6de3e761c5: function AS_FlexContainer_a22843ed3d6a4d1baca65f6de3e761c5(eventobject) {
        var self = this;
        //
    },
    /** preShow defined for frmCheckIn **/
    AS_Form_b3ac1dd39fd14523afe2dda72f0a86fd: function AS_Form_b3ac1dd39fd14523afe2dda72f0a86fd(eventobject) {
        var self = this;
        return self.showRouteSourceDest.call(this);
    }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSetDate **/
    AS_Button_f640e4d7079e462c916ec5267148c07e: function AS_Button_f640e4d7079e462c916ec5267148c07e(eventobject) {
        var self = this;
        return self.onDateSelected.call(this);
    },
    /** preShow defined for datepicker **/
    AS_FlexContainer_aa68a980d5394f569600df2db27cebe7: function AS_FlexContainer_aa68a980d5394f569600df2db27cebe7(eventobject) {
        var self = this;
        //this.preshow();
    },
    /** postShow defined for datepicker **/
    AS_FlexContainer_d469a67ac635416bb4008072a66c4c89: function AS_FlexContainer_d469a67ac635416bb4008072a66c4c89(eventobject) {
        var self = this;
        return self.setDefaultData.call(this);
    }
});
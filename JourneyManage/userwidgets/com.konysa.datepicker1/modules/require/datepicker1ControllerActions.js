define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSetDate **/
    AS_Button_d12c26d1f0124f27898028b5bf592d38: function AS_Button_d12c26d1f0124f27898028b5bf592d38(eventobject) {
        var self = this;
        return self.onDateSelected.call(this);
    },
    /** preShow defined for datepicker1 **/
    AS_FlexContainer_bfc89d4a8d14452c88f1506c65d05dac: function AS_FlexContainer_bfc89d4a8d14452c88f1506c65d05dac(eventobject) {
        var self = this;
        this.preshow();
    },
    /** postShow defined for datepicker1 **/
    AS_FlexContainer_hef30ea176a9442f870526bc55495b7d: function AS_FlexContainer_hef30ea176a9442f870526bc55495b7d(eventobject) {
        var self = this;
        self.setDefaultSelection.call(this);
        this.invokePostShowForSettingtheValue();
    }
});
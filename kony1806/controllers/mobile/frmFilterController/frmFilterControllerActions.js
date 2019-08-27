define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnReset **/
    AS_Button_f298fa4b2866442196fb686da681eee2: function AS_Button_f298fa4b2866442196fb686da681eee2(eventobject) {
        var self = this;
        filterTable = [];
        this.navForm("frmFilter");
    },
    /** onClick defined for btnCancel **/
    AS_Button_f9eff8f4e6ad4c84a7f976709d5966c6: function AS_Button_f9eff8f4e6ad4c84a7f976709d5966c6(eventobject) {
        var self = this;
        this.navForm("frmDashboard");
    },
    /** onClick defined for btnCalander **/
    AS_Button_b5b3fcf16e3a4feb83c36d086a5af14b: function AS_Button_b5b3fcf16e3a4feb83c36d086a5af14b(eventobject) {
        var self = this;
        this.showCalander();
    },
    /** onClick defined for btnApplyFilter **/
    AS_Button_a6b8317b6691424b97515eb71ede3679: function AS_Button_a6b8317b6691424b97515eb71ede3679(eventobject) {
        var self = this;
        this.applyFilters();
    },
    /** onClick defined for btnCancel **/
    AS_Button_j5ae26e958814f26abf08bacbafa76b8: function AS_Button_j5ae26e958814f26abf08bacbafa76b8(eventobject) {
        var self = this;
        this.dismissCalanderFilter();
    },
    /** onClick defined for btnSave **/
    AS_Button_h4d755275b5540e8a0a62fad8590823f: function AS_Button_h4d755275b5540e8a0a62fad8590823f(eventobject) {
        var self = this;
        this.saveCalanderFilter();
    },
    /** preShow defined for frmFilter **/
    AS_Form_d4bcf5b094c64db9a39ca37a937b0c45: function AS_Form_d4bcf5b094c64db9a39ca37a937b0c45(eventobject) {
        var self = this;
        this.preshow();
    }
});
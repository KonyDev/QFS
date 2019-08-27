define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnReset **/
    AS_Button_e9ed6d4ee3174ee0aa0c0af7b9f8fc64: function AS_Button_e9ed6d4ee3174ee0aa0c0af7b9f8fc64(eventobject) {
        var self = this;
        filterTable = [];
        self.navForm.call(this, "frmFilter");
    },
    /** onClick defined for btnCalander **/
    AS_Button_e06e3d5ef65f46bb851b22136d4b64ec: function AS_Button_e06e3d5ef65f46bb851b22136d4b64ec(eventobject) {
        var self = this;
        return self.showCalander.call(this);
    },
    /** onClick defined for btnCancel **/
    AS_Button_hf6d1d2f754e4d7b8bfc4ce54c09b17a: function AS_Button_hf6d1d2f754e4d7b8bfc4ce54c09b17a(eventobject) {
        var self = this;
        return self.dismissCalanderFilter.call(this);
    },
    /** onClick defined for btnSave **/
    AS_Button_cb05fddd62b5459590cd27bd6b1cdb61: function AS_Button_cb05fddd62b5459590cd27bd6b1cdb61(eventobject) {
        var self = this;
        return self.saveCalanderFilter.call(this);
    },
    /** preShow defined for frmFilter **/
    AS_Form_dd3d6f6b85354a76b0a8fcb6286f329d: function AS_Form_dd3d6f6b85354a76b0a8fcb6286f329d(eventobject) {
        var self = this;
        return self.preshow.call(this);
    }
});
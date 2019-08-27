define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
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
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_d7c9d2766caa4375931868f7cc194b01: function AS_FlexContainer_d7c9d2766caa4375931868f7cc194b01(eventobject) {
        var self = this;
        this.openHam();
    },
    /** onClick defined for flxSearch **/
    AS_FlexContainer_ad010b9fd8e34e0fae57b5c6633798b9: function AS_FlexContainer_ad010b9fd8e34e0fae57b5c6633798b9(eventobject) {
        var self = this;
        return self.searchWorkOrders.call(this);
    },
    /** onClick defined for CopyflxSearch0e2c4f080c6a14f **/
    AS_FlexContainer_he945323bdd84b60ab88789aff02e341: function AS_FlexContainer_he945323bdd84b60ab88789aff02e341(eventobject) {
        var self = this;
        return self.closeSearchWorkOrders.call(this);
    },
    /** onTextChange defined for tbxSearch **/
    AS_TextField_j709f47b57354d76abf6a19672fe4841: function AS_TextField_j709f47b57354d76abf6a19672fe4841(eventobject, changedtext) {
        var self = this;
        return self.searchOrders.call(this);
    },
    /** onClick defined for flxFooter **/
    AS_FlexContainer_d2d62e6efbf94b0c8f3b28db29e94028: function AS_FlexContainer_d2d62e6efbf94b0c8f3b28db29e94028(eventobject) {
        var self = this;
        return self.showFilters.call(this);
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_a43c6a75564b49229924f74e405c1afa: function AS_UWI_a43c6a75564b49229924f74e405c1afa(eventobject) {
        var self = this;
        this.closeHam()
    },
    /** onClick defined for btnReset **/
    AS_Button_df5736d7ee1f4f82bd7e6a39ef77f049: function AS_Button_df5736d7ee1f4f82bd7e6a39ef77f049(eventobject) {
        var self = this;
        return self.resetFilters.call(this);
    },
    /** onClick defined for btnCancel **/
    AS_Button_h153c680033a4767977f66e8431d89f3: function AS_Button_h153c680033a4767977f66e8431d89f3(eventobject) {
        var self = this;
        return self.hideFilters.call(this);
    },
    /** onClick defined for btnCalander **/
    AS_Button_cd131652b44a4be99a5631b2152419b1: function AS_Button_cd131652b44a4be99a5631b2152419b1(eventobject) {
        var self = this;
        return self.showCalander.call(this);
    },
    /** onClick defined for btnApplyFilter **/
    AS_Button_hfae729a2867412e826a6ef4735e21dc: function AS_Button_hfae729a2867412e826a6ef4735e21dc(eventobject) {
        var self = this;
        return self.applyFilters.call(this);
    },
    /** onDeviceBack defined for frmInspectionsList **/
    AS_Form_c6c27aebc24745c292b3e6eee71887b5: function AS_Form_c6c27aebc24745c292b3e6eee71887b5(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});
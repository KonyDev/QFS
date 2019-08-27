define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_h52e5d868a2842edba20e49674de95d6: function AS_FlexContainer_h52e5d868a2842edba20e49674de95d6(eventobject) {
        var self = this;
        return self.openHam.call(this);
    },
    /** onClick defined for flxNotes **/
    AS_FlexContainer_af40a59a2b6048c7971426061b37a284: function AS_FlexContainer_af40a59a2b6048c7971426061b37a284(eventobject) {
        var self = this;
        return self.navForm.call(this, "frmDocuments");
    },
    /** onTextChange defined for fillAssetTemperature **/
    AS_UWI_hd19e9e3cacb49aa9edf417719cf20f8: function AS_UWI_hd19e9e3cacb49aa9edf417719cf20f8(eventobject, changedtext) {
        var self = this;
        return self.ontextChange.call(this, 1);
    },
    /** onTextChange defined for fillAssetPressure **/
    AS_UWI_c8aae3d3c65746079824368b07f06605: function AS_UWI_c8aae3d3c65746079824368b07f06605(eventobject, changedtext) {
        var self = this;
        return self.ontextChange.call(this, 2);
    },
    /** onClickNo defined for togglebuttons **/
    AS_UWI_f4e14d2bb06e4375962c78c6d1c25489: function AS_UWI_f4e14d2bb06e4375962c78c6d1c25489(eventobject) {
        var self = this;
        return self.onClickToggleButton.call(this, 0);
    },
    /** onClickYes defined for togglebuttons **/
    AS_UWI_e19dcd7d0d28476e8c76839273bb6804: function AS_UWI_e19dcd7d0d28476e8c76839273bb6804(eventobject) {
        var self = this;
        return self.onClickToggleButton.call(this, 1);
    },
    /** onClick defined for btnCompleteTask **/
    AS_Button_g10b42dd237b40dba38df0b6e8c12119: function AS_Button_g10b42dd237b40dba38df0b6e8c12119(eventobject) {
        var self = this;
        return self.completeS3.call(this);
    },
    /** onClick defined for btnReAssign **/
    AS_Button_e9922685cb6b44c9b76de6016effef7a: function AS_Button_e9922685cb6b44c9b76de6016effef7a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmTaskReAssign");
        ntf.navigate();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_i1624802bdde4fbbb4d7629f49385628: function AS_UWI_i1624802bdde4fbbb4d7629f49385628(eventobject) {
        var self = this;
        return self.closeHam.call(this);
    }
});
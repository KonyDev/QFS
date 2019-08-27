define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxProceedAnyway **/
    AS_FlexContainer_a718f051dac64ed98a28ee41ba8078d2: function AS_FlexContainer_a718f051dac64ed98a28ee41ba8078d2(eventobject) {
        var self = this;
        this.onForcedCheckin();
    },
    /** onClick defined for flxNavigate **/
    AS_FlexContainer_g25e71b6f72243cb8596eb2d68b1591f: function AS_FlexContainer_g25e71b6f72243cb8596eb2d68b1591f(eventobject) {
        var self = this;
        this.onLocationNavigate();
    },
    /** onClick defined for flxPopOverShade **/
    AS_FlexContainer_f044158c1ca2464681c8085f7f30d5f7: function AS_FlexContainer_f044158c1ca2464681c8085f7f30d5f7(eventobject) {
        var self = this;
        return;
    },
    /** preShow defined for locationtracker **/
    AS_FlexContainer_gc7a3bceba9c4da7882acf970b301280: function AS_FlexContainer_gc7a3bceba9c4da7882acf970b301280(eventobject) {
        var self = this;
        this.hideNavigationMessage();
    },
    /** onDestroy defined for locationtracker **/
    AS_FlexContainer_e47b92c92d314e16843148a0639149c1: function AS_FlexContainer_e47b92c92d314e16843148a0639149c1(eventobject) {
        var self = this;
        this.clearWatch();
    },
    /** onHide defined for locationtracker **/
    AS_FlexContainer_iaa9145c5ca54e769105a6916d8c57d1: function AS_FlexContainer_iaa9145c5ca54e769105a6916d8c57d1(eventobject) {
        var self = this;
        this.clearWatch();
    }
});
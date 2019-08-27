define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexLockbox **/
    AS_FlexContainer_ebd9eb4af8494f1293c6501b39881c3b: function AS_FlexContainer_ebd9eb4af8494f1293c6501b39881c3b(eventobject) {
        var self = this;
        this.toggleLockOut(1);
    },
    /** onClick defined for flexLockHasp **/
    AS_FlexContainer_g41efa80bc69464b8c72479fbf79430e: function AS_FlexContainer_g41efa80bc69464b8c72479fbf79430e(eventobject) {
        var self = this;
        this.toggleLockOut(2);
    },
    /** onClickChecklist defined for ChecklistProjectDetails **/
    AS_UWI_fce53d8792bb4736815b75c10723c91e: function AS_UWI_fce53d8792bb4736815b75c10723c91e(eventobject) {
        var self = this;
        this.showProjectDetails();
    },
    /** onClickChecklist defined for ChecklistShutdownProcedure **/
    AS_UWI_dd2912a0528c4918a6b5c960854fd39a: function AS_UWI_dd2912a0528c4918a6b5c960854fd39a(eventobject) {
        var self = this;
        this.showShutdownProcedure();
    },
    /** onClick defined for btnDone **/
    AS_Button_c353ad7fd79542b9939bf77584cdbb68: function AS_Button_c353ad7fd79542b9939bf77584cdbb68(eventobject) {
        var self = this;
        this.onDoneNavToS2();
    },
    /** onClickMenu defined for headerWithMenu **/
    AS_UWI_i6b6f3de43664280a7f0383b2b236183: function AS_UWI_i6b6f3de43664280a7f0383b2b236183(eventobject) {
        var self = this;
        this.openHam();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_a5d64508669743e5bf3a140c8af9a121: function AS_UWI_a5d64508669743e5bf3a140c8af9a121(eventobject) {
        var self = this;
        this.closeHam();
    },
    /** onClick defined for btnDoneProjectDetails **/
    AS_Button_c8634362a8f643999ccb749550f985c7: function AS_Button_c8634362a8f643999ccb749550f985c7(eventobject) {
        var self = this;
        this.onDoneProjectDetails();
    },
    /** onClickLeft defined for headerProjectDetails **/
    AS_UWI_j44d63023bc743fe9308d1c21bb0d65e: function AS_UWI_j44d63023bc743fe9308d1c21bb0d65e(eventobject) {
        var self = this;
        this.closeProjectDetails();
    },
    /** onClickCheck defined for Check1 **/
    AS_UWI_bc5862b1a14845cbb38d21f088c1f837: function AS_UWI_bc5862b1a14845cbb38d21f088c1f837(eventobject) {
        var self = this;
        this.onClickCheckBox(1);
    },
    /** onClickCheck defined for Check2 **/
    AS_UWI_h38512240dd74456a3682d866d900e36: function AS_UWI_h38512240dd74456a3682d866d900e36(eventobject) {
        var self = this;
        this.onClickCheckBox(2)
    },
    /** onClickCheck defined for Check3 **/
    AS_UWI_hee87e9174784a09b829318dcec224ff: function AS_UWI_hee87e9174784a09b829318dcec224ff(eventobject) {
        var self = this;
        this.onClickCheckBox(3);
    },
    /** onClick defined for btnDoneShutdownProcedure **/
    AS_Button_ae75f16bcbb641fc8e877f0e324e1d69: function AS_Button_ae75f16bcbb641fc8e877f0e324e1d69(eventobject) {
        var self = this;
        this.onDoneShutdownProcedure();
    },
    /** onClickLeft defined for headerShutdownProcedure **/
    AS_UWI_a56ca8e367ba497fa4308889dfb623ff: function AS_UWI_a56ca8e367ba497fa4308889dfb623ff(eventobject) {
        var self = this;
        this.closeShutdownProcedure();
    },
    /** preShow defined for frmStartLockout **/
    AS_Form_i06fa9460f0f4b19862fbc906a8a642d: function AS_Form_i06fa9460f0f4b19862fbc906a8a642d(eventobject) {
        var self = this;
        this.preshow();
    }
});
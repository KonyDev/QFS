define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_bbf044e465bc49199d5d264310d10b17: function AS_FlexContainer_bbf044e465bc49199d5d264310d10b17(eventobject) {
        var self = this;
        return self.Back_Navigation.call(this);
    },
    /** onClick defined for btnSummary **/
    AS_Button_a054917ce08a407ea941cd46cb28886a: function AS_Button_a054917ce08a407ea941cd46cb28886a(eventobject) {
        var self = this;
        return self.frm_preshow.call(this);
    },
    /** onClick defined for tnTasks **/
    AS_Button_ja0faf46ebdc4eb8b9581072ef8c3098: function AS_Button_ja0faf46ebdc4eb8b9581072ef8c3098(eventobject) {
        var self = this;
        return self.show_Tasks.call(this);
    },
    /** onClick defined for btnSurvey **/
    AS_Button_cfd68cd7fa17433baf952e1dc1316c08: function AS_Button_cfd68cd7fa17433baf952e1dc1316c08(eventobject) {
        var self = this;
        return self.show_survey.call(this);
    },
    /** surveyOnClick defined for Survey **/
    AS_UWI_eae2607eb77b4eaaa67c57bb4d081fc5: function AS_UWI_eae2607eb77b4eaaa67c57bb4d081fc5(eventobject) {
        var self = this;
        return self.show_survey.call(this);
    },
    /** cancelOnClick defined for Survey **/
    AS_UWI_afeb8282aad04eaea957eef8c10a0eb3: function AS_UWI_afeb8282aad04eaea957eef8c10a0eb3(eventobject) {
        var self = this;
        return self.show_CancelOreder.call(this);
    },
    /** onRowClick defined for segTasks **/
    AS_Segment_ab23e81980f44aa1ac5e3a2ef0e2cfab: function AS_Segment_ab23e81980f44aa1ac5e3a2ef0e2cfab(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.show_taskDetails.call(this);
    },
    /** surveyOnClick defined for Survey1 **/
    AS_UWI_g441a7dac7b4404ea5ee1086990256c4: function AS_UWI_g441a7dac7b4404ea5ee1086990256c4(eventobject) {
        var self = this;
        return self.show_survey.call(this);
    },
    /** cancelOnClick defined for Survey1 **/
    AS_UWI_b76fe36cad824f8fa846efbecc5b4c77: function AS_UWI_b76fe36cad824f8fa846efbecc5b4c77(eventobject) {
        var self = this;
        return self.show_CancelOreder.call(this);
    },
    /** onClick defined for flxAnswer **/
    AS_FlexContainer_a3bfda64f3af4d32bb4dffc6480c8c8f: function AS_FlexContainer_a3bfda64f3af4d32bb4dffc6480c8c8f(eventobject) {
        var self = this;
        this.view.imgCheckBox1.src = "check_box_active.png";
    },
    /** onClick defined for flxAnswer2 **/
    AS_FlexContainer_f4cc48879d1c4e938e55adf928cdbe93: function AS_FlexContainer_f4cc48879d1c4e938e55adf928cdbe93(eventobject) {
        var self = this;
        this.view.imgCheckBox2.src = "check_box_active.png";
    },
    /** onClick defined for btnSubmit **/
    AS_Button_dde07c3739c1477787c629d103e2971d: function AS_Button_dde07c3739c1477787c629d103e2971d(eventobject) {
        var self = this;
        return self.Show_Conformation.call(this);
    },
    /** onClick defined for btnNavigateToLocation **/
    AS_Button_i726d889c6ad4272baf630fcf52ded49: function AS_Button_i726d889c6ad4272baf630fcf52ded49(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCheckIn");
        ntf.navigate();
    },
    /** onClick defined for btnCancelWorkOrder **/
    AS_Button_ge5a256c07a3487ba05d5ccc05b4eb65: function AS_Button_ge5a256c07a3487ba05d5ccc05b4eb65(eventobject) {
        var self = this;
        return self.show_CancelOreder.call(this);
    },
    /** onClick defined for btnCancelOrderSubmit **/
    AS_Button_e27b195daa0442c7a9087c5b6dc3777f: function AS_Button_e27b195daa0442c7a9087c5b6dc3777f(eventobject) {
        var self = this;
        return self.show_popup.call(this);
    },
    /** onClick defined for btnReturn **/
    AS_Button_eac2f3ae37aa4e018b3e2325699dca1c: function AS_Button_eac2f3ae37aa4e018b3e2325699dca1c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmInspectionsList");
        ntf.navigate();
    },
    /** onClick defined for flxDropdown **/
    AS_FlexContainer_e27a4109bcf2496d91cebbb831e60176: function AS_FlexContainer_e27a4109bcf2496d91cebbb831e60176(eventobject) {
        var self = this;
        return self.show_ReferenceManual.call(this);
    },
    /** preShow defined for frmMaintananceSummary **/
    AS_Form_fe335f666fcd40f082fb3672d6c7485a: function AS_Form_fe335f666fcd40f082fb3672d6c7485a(eventobject) {
        var self = this;
        return self.frm_preshow.call(this);
    },
    /** onDeviceBack defined for frmMaintananceSummary **/
    AS_Form_ced243d418da473f9052d033fa3bde1c: function AS_Form_ced243d418da473f9052d033fa3bde1c(eventobject) {
        var self = this;
        //
    }
});
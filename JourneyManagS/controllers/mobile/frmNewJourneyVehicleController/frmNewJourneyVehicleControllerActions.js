define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_aa64fd1e82f143448261b0cff55628c0: function AS_FlexContainer_aa64fd1e82f143448261b0cff55628c0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTracking");
        ntf.navigate();
    },
    /** onRowClick defined for segmentPersonalCar **/
    AS_Segment_j2e77dea7cb4474e96821878ba616678: function AS_Segment_j2e77dea7cb4474e96821878ba616678(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyVehiclePersonal.isVisible = true;
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
    },
    /** onRowClick defined for segmentCompanyCar **/
    AS_Segment_f761a976c5484dcc9ac85ff3ce1d79d4: function AS_Segment_f761a976c5484dcc9ac85ff3ce1d79d4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyVehiclePersonal.isVisible = true;
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
    },
    /** onClick defined for FlexContainer0e03cc915a92a46 **/
    AS_FlexContainer_eb3b6a40d18d4b30b3c2ea34ecce51b7: function AS_FlexContainer_eb3b6a40d18d4b30b3c2ea34ecce51b7(eventobject) {
        var self = this;
        if (this.view.flxCheckBox.isVisible == true) {
            this.view.flxCheckBox.isVisible = false;
        } else {
            this.view.flxCheckBox.isVisible = true;
        }
    },
    /** onClick defined for CopybtnSignIn0c86be9e40eae43 **/
    AS_Button_b3c9f1e3df93472cbd6e228cc31715fa: function AS_Button_b3c9f1e3df93472cbd6e228cc31715fa(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyVerification");
        ntf.navigate();
    },
    /** onClick defined for CopyFlexContainer0bf88a9ba35594e **/
    AS_FlexContainer_e3aa0551d1d74d1fbdd6166197f64404: function AS_FlexContainer_e3aa0551d1d74d1fbdd6166197f64404(eventobject) {
        var self = this;
        if (this.view.flxCheckBox1.isVisible == true) {
            this.view.flxCheckBox1.isVisible = false;
        } else {
            this.view.flxCheckBox1.isVisible = true;
        }
    },
    /** onClick defined for CopybtnSignIn0f16e663690fb40 **/
    AS_Button_f8af8e3330da4ae0be96496c2dc34681: function AS_Button_f8af8e3330da4ae0be96496c2dc34681(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyVerification");
        ntf.navigate();
    },
    /** preShow defined for frmNewJourneyVehicle **/
    AS_Form_df2f07cce37941aeb94013b837f61d5e: function AS_Form_df2f07cce37941aeb94013b837f61d5e(eventobject) {
        var self = this;
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = true;
        this.view.flxNewJourneyVehicleCompany.isVisible = false;
        this.view.flxNewJourneyVehiclePersonal.isVisible = false;
    },
    /** postShow defined for frmNewJourneyVehicle **/
    AS_Form_h51fedfea42c434ab1e5c73d5694301d: function AS_Form_h51fedfea42c434ab1e5c73d5694301d(eventobject) {
        var self = this;
        this.setCarInformation();
    }
});
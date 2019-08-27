define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_aa64fd1e82f143448261b0cff55628c0: function AS_FlexContainer_aa64fd1e82f143448261b0cff55628c0(eventobject) {
        var self = this;
        this.navigateToForm("frmNewJourneyTracking");
    },
    /** onRowClick defined for segmentPersonalCar **/
    AS_Segment_j2e77dea7cb4474e96821878ba616678: function AS_Segment_j2e77dea7cb4474e96821878ba616678(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onPersonalVehicleSelection();
    },
    /** onRowClick defined for segmentCompanyCar **/
    AS_Segment_f761a976c5484dcc9ac85ff3ce1d79d4: function AS_Segment_f761a976c5484dcc9ac85ff3ce1d79d4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onComapnyVehicleSelection();
    },
    /** onClick defined for btnAddVehicle **/
    AS_Button_fb30036b7b994123bb31a61b6dd308b9: function AS_Button_fb30036b7b994123bb31a61b6dd308b9(eventobject) {
        var self = this;
        this.showAddNewVehicleFlex();
    },
    /** onClick defined for flxDecideLater **/
    AS_FlexContainer_af2cbb664e224feca95d477d3686838f: function AS_FlexContainer_af2cbb664e224feca95d477d3686838f(eventobject) {
        var self = this;
        this.decideVehicleLater();
    },
    /** onSelection defined for lstCompanyCar **/
    AS_ListBox_ec8e2201a92940e38b3ca46d0911ac84: function AS_ListBox_ec8e2201a92940e38b3ca46d0911ac84(eventobject) {
        var self = this;
        this.onVehicleSelection(eventobject);
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
    /** onClick defined for btnNextStepVehicleForm **/
    AS_Button_b3c9f1e3df93472cbd6e228cc31715fa: function AS_Button_b3c9f1e3df93472cbd6e228cc31715fa(eventobject) {
        var self = this;
        this.proceedNext();
    },
    /** onSelection defined for lstPersonalCar **/
    AS_ListBox_c59214f457a5496085fa724b2c9a466c: function AS_ListBox_c59214f457a5496085fa724b2c9a466c(eventobject) {
        var self = this;
        this.onVehicleSelection(eventobject);
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
        this.proceedNext();
    },
    /** onClick defined for btnCreateVehicle **/
    AS_Button_c93399aa80d842c8bc3d0117713b794b: function AS_Button_c93399aa80d842c8bc3d0117713b794b(eventobject) {
        var self = this;
        this.createNewVehicle();
        /*

this.view.flxAddNewVehicle.isVisible = false;
this.view.flxSelectVehicleContainer.isVisible = false;
this.view.flxNewJourneyReady.isVisible = true;*/
    },
    /** postShow defined for frmNewJourneyVehicle **/
    AS_Form_h51fedfea42c434ab1e5c73d5694301d: function AS_Form_h51fedfea42c434ab1e5c73d5694301d(eventobject) {
        var self = this;
        this.onFormPostShow();
        //this.setCarInformation();
    }
});
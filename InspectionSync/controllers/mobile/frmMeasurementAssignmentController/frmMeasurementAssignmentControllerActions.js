define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgClearTextBox **/
    AS_Image_e4b1650f5a244dc799715550eb075dab: function AS_Image_e4b1650f5a244dc799715550eb075dab(eventobject, x, y) {
        var self = this;
        this.resetInspectionSearch();
    },
    /** onClick defined for CopyflxBack0a6453b45777340 **/
    AS_FlexContainer_a2d7907900d6470c831ca53223f75b1e: function AS_FlexContainer_a2d7907900d6470c831ca53223f75b1e(eventobject) {
        var self = this;
        this._onClickBack();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_afc07377d8614df8a3e49b02689b5315: function AS_FlexContainer_afc07377d8614df8a3e49b02689b5315(eventobject) {
        var self = this;
        this._onClickBack();
    },
    /** onClick defined for flxHistory **/
    AS_FlexContainer_ca09729c381c413396cee9a6b04d1d68: function AS_FlexContainer_ca09729c381c413396cee9a6b04d1d68(eventobject) {
        var self = this;
        this._onClickHistory();
    },
    /** onClick defined for flxPDF **/
    AS_FlexContainer_bec5a9d6573647f0b70dd34a19eca9e7: function AS_FlexContainer_bec5a9d6573647f0b70dd34a19eca9e7(eventobject) {
        var self = this;
        this._onClickPDF();
    },
    /** onClick defined for flxAssignedToAdmin **/
    AS_FlexContainer_d7c25316df354393b09d543f6a40a0ee: function AS_FlexContainer_d7c25316df354393b09d543f6a40a0ee(eventobject) {
        var self = this;
        this._showAssignedListBox();
    },
    /** onClick defined for btnCreateInspection **/
    AS_Button_b868bf76509943f29d61ff85d2259fc6: function AS_Button_b868bf76509943f29d61ff85d2259fc6(eventobject) {
        var self = this;
        this._onClickofSubmit();
    },
    /** onClick defined for flxPDFBack **/
    AS_FlexContainer_b57a700426904c29964b6a9b7437bdd4: function AS_FlexContainer_b57a700426904c29964b6a9b7437bdd4(eventobject) {
        var self = this;
        this.view.flxPDFViewer.isVisible = false;
        this.view.flxPDFViewer.left = "100%";
    },
    /** onClick defined for flxPDFHeader **/
    AS_FlexContainer_a94ee521775648b0b35ec8d25e2df368: function AS_FlexContainer_a94ee521775648b0b35ec8d25e2df368(eventobject) {
        var self = this;

        function abc() {}
        abc();
    },
    /** onClick defined for flxInfoCard **/
    AS_FlexContainer_eec2549043c346509d52f8834170fbf1: function AS_FlexContainer_eec2549043c346509d52f8834170fbf1(eventobject) {
        var self = this;
        this.view.flxInfoCard.animate(
        kony.ui.createAnimation({
            100: {
                top: "100%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: .3
        }, {
            animationEnd: function() {}
        });
    },
    /** onButtonClick defined for alertpopup **/
    AS_UWI_ff603ba8d26d46db86c395e0d2863f6b: function AS_UWI_ff603ba8d26d46db86c395e0d2863f6b(eventobject) {
        var self = this;
        //this.view.alertpopup.hidePopUp();
        this.hidePopup();
    },
    /** onClick defined for flxAssignedTechClose **/
    AS_FlexContainer_b05d76f0095643139b8ecea1ecf41c45: function AS_FlexContainer_b05d76f0095643139b8ecea1ecf41c45(eventobject) {
        var self = this;
        this._onClickCloseAssignedTech();
    },
    /** onClick defined for CopyflxAssignedTechClose0e954786a83cc41 **/
    AS_FlexContainer_e2fbdcfd2b90481c8298f1d746400000: function AS_FlexContainer_e2fbdcfd2b90481c8298f1d746400000(eventobject) {
        var self = this;
        this.showSearchContainer();
    },
    /** onClick defined for flxCancel **/
    AS_FlexContainer_df2b7b5e23954b24ad5c820146ae967e: function AS_FlexContainer_df2b7b5e23954b24ad5c820146ae967e(eventobject) {
        var self = this;
        this._onClickCancel();
    },
    /** onRowClick defined for segAssignedTech **/
    AS_Segment_f15543541ce441ca947a9b40971a99f3: function AS_Segment_f15543541ce441ca947a9b40971a99f3(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this._onRowClickAssignedTech();
    },
    /** onTextChange defined for txtBoxSearchInspection **/
    AS_TextField_fd8566548e1a4d518384cca137bb3318: function AS_TextField_fd8566548e1a4d518384cca137bb3318(eventobject, changedtext) {
        var self = this;
        this.onTextChange();
    },
    /** onClick defined for FlexGroup0hf163e96e3374a **/
    AS_FlexContainer_g004288d4bdd40cf8999ac011a79320e: function AS_FlexContainer_g004288d4bdd40cf8999ac011a79320e(eventobject) {
        var self = this;
        this.hideSearchContainer();
    },
    /** onRowClick defined for segTechnician **/
    AS_Segment_f8d9ad79bfe541a38d150b2e1cd76a15: function AS_Segment_f8d9ad79bfe541a38d150b2e1cd76a15(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this._onRowClickSearch(eventobject, sectionNumber, rowNumber);
    },
    /** preShow defined for frmMeasurementAssignment **/
    AS_Form_d4ef93c24e5544f1b22ab8399d7be25a: function AS_Form_d4ef93c24e5544f1b22ab8399d7be25a(eventobject) {
        var self = this;
        this.onFormPreShow();
    },
    /** postShow defined for frmMeasurementAssignment **/
    AS_Form_db302ed9b2f645ab8cd3bd89b4ad2e93: function AS_Form_db302ed9b2f645ab8cd3bd89b4ad2e93(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for frmMeasurementAssignment **/
    AS_Form_b60462fca8cf45e09a16a9c99dcdb364: function AS_Form_b60462fca8cf45e09a16a9c99dcdb364(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});
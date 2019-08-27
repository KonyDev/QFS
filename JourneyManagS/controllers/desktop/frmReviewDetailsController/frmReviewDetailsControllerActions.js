define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for DepartureDetails **/
    AS_UWI_c77425f6e5074a2ea61abab4c1276be5: function AS_UWI_c77425f6e5074a2ea61abab4c1276be5(data) {
        var self = this;
        this.onClickOfDeparture(data);
    },
    /** onDone defined for ArrivalDetails **/
    AS_UWI_i5e8da0e95b245a39adea9484bc68dfb: function AS_UWI_i5e8da0e95b245a39adea9484bc68dfb(data) {
        var self = this;
        this.onClickOfArrival(data);
    },
    /** onClick defined for flxDashboard **/
    AS_FlexContainer_d807ad9a1ae04a1f98cf70a3522b307f: function AS_FlexContainer_d807ad9a1ae04a1f98cf70a3522b307f(eventobject) {
        var self = this;
        this.backToDashboard();
    },
    /** onTouchEnd defined for imgTravellerDetailsEdit **/
    AS_Image_e9987e5ec28d4c589cf83389b4d14967: function AS_Image_e9987e5ec28d4c589cf83389b4d14967(eventobject, x, y) {
        var self = this;
        this.navigateToTravellerForm();
    },
    /** onClick defined for flxAddPassenger **/
    AS_FlexContainer_bc3d67e496b140e1ab90b062cc378e5b: function AS_FlexContainer_bc3d67e496b140e1ab90b062cc378e5b(eventobject) {
        var self = this;
        this.view.flxSegData.isVisible = true;
    },
    /** onClick defined for btnNextStep **/
    AS_Button_hfd3b107f131452b9b50de2ca25499ca: function AS_Button_hfd3b107f131452b9b50de2ca25499ca(eventobject) {
        var self = this;
        this.saveTravellerData();
    },
    /** onTouchEnd defined for imgRouteDetailsEdit **/
    AS_Image_a9cc44748d624fa09bbffdcb76839ad6: function AS_Image_a9cc44748d624fa09bbffdcb76839ad6(eventobject, x, y) {
        var self = this;
        this.navigateToRouteForm();
    },
    /** onClick defined for btnEditDepartureDetails **/
    AS_Button_cd87da0ce5574c9aa1894db88bc3956d: function AS_Button_cd87da0ce5574c9aa1894db88bc3956d(eventobject) {
        var self = this;
        this.showEditableFields();
    },
    /** onClick defined for flxTimeBasedCheckin **/
    AS_FlexContainer_d86d16bd16e9465097a0668693efff40: function AS_FlexContainer_d86d16bd16e9465097a0668693efff40(eventobject) {
        var self = this;
        this.changeStatus(eventobject);
    },
    /** onClick defined for flxNoCheckin **/
    AS_FlexContainer_ff2e3bed761447898dd5da627af06063: function AS_FlexContainer_ff2e3bed761447898dd5da627af06063(eventobject) {
        var self = this;
        this.changeStatus(eventobject);
    },
    /** onSelection defined for listboxTimeFrame **/
    AS_ListBox_ebd2f007c51546f4954afe1f17713ea5: function AS_ListBox_ebd2f007c51546f4954afe1f17713ea5(eventobject) {
        var self = this;
        this.selectedTime(eventobject);
    },
    /** onClick defined for btnNext **/
    AS_Button_d8f09bcd0ea9497cb2919f64be48207c: function AS_Button_d8f09bcd0ea9497cb2919f64be48207c(eventobject) {
        var self = this;
        this.saveRouteDetails();
    },
    /** onTouchEnd defined for imgTrackerDetailsEdit **/
    AS_Image_d949b334e5ef4a838a2cc95008d01237: function AS_Image_d949b334e5ef4a838a2cc95008d01237(eventobject, x, y) {
        var self = this;
        this.navigateToTrackingForm();
    },
    /** onClick defined for btnTrackingDetailsSave **/
    AS_Button_ae1b928820144a0c864386035a401d91: function AS_Button_ae1b928820144a0c864386035a401d91(eventobject) {
        var self = this;
        this.saveTrackingDetails();
    },
    /** onSelection defined for listboxData **/
    AS_ListBox_g453d0505ca84c51bb01608686fc2432: function AS_ListBox_g453d0505ca84c51bb01608686fc2432(eventobject) {
        var self = this;
        this.selectedData(eventobject);
    },
    /** onTouchEnd defined for imgVehicleDetailsEdit **/
    AS_Image_ba5d7fc138b44b4cadf835c8368c0da5: function AS_Image_ba5d7fc138b44b4cadf835c8368c0da5(eventobject, x, y) {
        var self = this;
        this.navigateToVehicleForm();
    },
    /** onClick defined for btnVehicleOptionOne **/
    AS_Button_f92d76e6f7f54b91b954f9943a334724: function AS_Button_f92d76e6f7f54b91b954f9943a334724(eventobject) {
        var self = this;
        this.view.FlxPersonalVehicleDetails.isVisible = false;
        this.view.FlxCompanyVehicleListBox.isVisible = true;
    },
    /** onClick defined for flxVehicleOptionOne **/
    AS_FlexContainer_bcb17fd203e84454bb3cee95f50484e3: function AS_FlexContainer_bcb17fd203e84454bb3cee95f50484e3(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onSelection defined for listboxVehicleDetails **/
    AS_ListBox_b35a32c0b324406a97e99b19376aa256: function AS_ListBox_b35a32c0b324406a97e99b19376aa256(eventobject) {
        var self = this;
        this.selectedCompanyVehicle(eventobject);
    },
    /** onClick defined for btnVehicleOptionTwo **/
    AS_Button_hab5349f38c6411e9bc7676fac73f157: function AS_Button_hab5349f38c6411e9bc7676fac73f157(eventobject) {
        var self = this;
        this.view.FlxPersonalVehicleDetails.isVisible = true;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
    },
    /** onClick defined for flxVehicleOptionTwo **/
    AS_FlexContainer_d9941a7222f645058d2c0b17bbcdd91f: function AS_FlexContainer_d9941a7222f645058d2c0b17bbcdd91f(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onSelection defined for listboxPersonalVehicleDetails **/
    AS_ListBox_addf7c9993cd4a23a692936e959973ff: function AS_ListBox_addf7c9993cd4a23a692936e959973ff(eventobject) {
        var self = this;
        this.selectedCompanyVehicle(eventobject);
    },
    /** onClick defined for flxVehicleOptionThree **/
    AS_FlexContainer_i62fdd33d13c446eaa4dee1004b47d61: function AS_FlexContainer_i62fdd33d13c446eaa4dee1004b47d61(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onClick defined for btnVehicleOptionFour **/
    AS_Button_fd31e3540c67443bb217af705cdcc47f: function AS_Button_fd31e3540c67443bb217af705cdcc47f(eventobject) {
        var self = this;
        this.view.FlxPersonalVehicleDetails.isVisible = true;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
    },
    /** onClick defined for flxVehicleOptionFour **/
    AS_FlexContainer_be3e5b2341fa4009a3cadd5d0f84dd9e: function AS_FlexContainer_be3e5b2341fa4009a3cadd5d0f84dd9e(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onClick defined for btnVehicleDetailsSave **/
    AS_Button_b77197ae36d340459b0acd143b4bc5a9: function AS_Button_b77197ae36d340459b0acd143b4bc5a9(eventobject) {
        var self = this;
        this.saveVehicleDetails();
    },
    /** onClick defined for btnCreateJourney **/
    AS_Button_he8598d2157a4fe08377f57876c1a4b7: function AS_Button_he8598d2157a4fe08377f57876c1a4b7(eventobject) {
        var self = this;
        this.convertTimeToUTC();
    },
    /** postShow defined for frmReviewDetails **/
    AS_Form_j06e86a003914ed693f20394f70419a2: function AS_Form_j06e86a003914ed693f20394f70419a2(eventobject) {
        var self = this;
        this.setDataToTemplate();
    }
});
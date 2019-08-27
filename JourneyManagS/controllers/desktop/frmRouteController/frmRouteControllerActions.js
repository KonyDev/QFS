define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxDashboard **/
    AS_FlexContainer_i2ef37a3c12946fea813be5f7bafb4fb: function AS_FlexContainer_i2ef37a3c12946fea813be5f7bafb4fb(eventobject) {
        var self = this;
        this.backToReview();
    },
    /** onClick defined for btnEditDepartureDetails **/
    AS_Button_g37f3a218e2b42f3a1404018df13b7bc: function AS_Button_g37f3a218e2b42f3a1404018df13b7bc(eventobject) {
        var self = this;
        this.showEditableFields();
    },
    /** onClick defined for flxTimeBasedCheckin **/
    AS_FlexContainer_a8bc298f40d34acf95a78524586c9a4e: function AS_FlexContainer_a8bc298f40d34acf95a78524586c9a4e(eventobject) {
        var self = this;
        this.changeStatus(eventobject);
    },
    /** onClick defined for flxNoCheckin **/
    AS_FlexContainer_f1b029b25de444b2a646b4434fa8f0de: function AS_FlexContainer_f1b029b25de444b2a646b4434fa8f0de(eventobject) {
        var self = this;
        this.changeStatus(eventobject);
    },
    /** onSelection defined for listboxTimeFrame **/
    AS_ListBox_debd245647b549529f0c1fe1361137cd: function AS_ListBox_debd245647b549529f0c1fe1361137cd(eventobject) {
        var self = this;
        this.selectedTime(eventobject);
    },
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
    /** onClick defined for btnNext **/
    AS_Button_aaf8dfd6f80c4e38a2b5b285fbda2b63: function AS_Button_aaf8dfd6f80c4e38a2b5b285fbda2b63(eventobject) {
        var self = this;
        this.onClickOfNext();
    },
    /** onClick defined for btnSave **/
    AS_Button_c0ba5f11817045ffbb66dc4c6104f810: function AS_Button_c0ba5f11817045ffbb66dc4c6104f810(eventobject) {
        var self = this;
        this.updateData();
    },
    /** postShow defined for frmRoute **/
    AS_Form_fcebe2a1937a49ddb14e26540f9dd6c6: function AS_Form_fcebe2a1937a49ddb14e26540f9dd6c6(eventobject) {
        var self = this;
        this.fetchTimeBasedValues();
    }
});
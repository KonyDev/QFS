define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_jaded43c4ed344cc8d9abc1a73ff5b3b: function AS_FlexContainer_jaded43c4ed344cc8d9abc1a73ff5b3b(eventobject) {
        var self = this;
        this.navigateToExecutionForm();
    },
    /** checkInCallback defined for navigator2 **/
    AS_UWI_ba4c8475873641fe94fbec8dabc34b91: function AS_UWI_ba4c8475873641fe94fbec8dabc34b91(checkedInTimestamp, isInSimulationMode) {
        var self = this;
        this.checkInCallBack(checkedInTimestamp, isInSimulationMode);
    },
    /** forcedCheckInCallback defined for navigator2 **/
    AS_UWI_aafa83f364b04b86bf771737a252e368: function AS_UWI_aafa83f364b04b86bf771737a252e368(checkedInTimestamp) {
        var self = this;
        this.forcedCheckinCallBack(checkedInTimestamp);
    },
    /** postShow defined for frmMapNavigation **/
    AS_Form_ga67e09318bb49148185532902bc54e2: function AS_Form_ga67e09318bb49148185532902bc54e2(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onHide defined for frmMapNavigation **/
    AS_Form_ed418a110ecc4b6189dee2d6e2c293fa: function AS_Form_ed418a110ecc4b6189dee2d6e2c293fa(eventobject) {
        var self = this;
        debugger;
        try {
            this.view.destroy();
        } catch (excp) {
            debugger;
        }
    }
});
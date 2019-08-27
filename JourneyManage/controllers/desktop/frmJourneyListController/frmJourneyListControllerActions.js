define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onAddClick defined for jrmgmtheader **/
    AS_UWI_j786026f97f942afad8ad7d1cc8bcd0a: function AS_UWI_j786026f97f942afad8ad7d1cc8bcd0a(param) {
        var self = this;
        this.onAddClick(param);
    },
    /** onBellClick defined for jrmgmtheader **/
    AS_UWI_i1492552b8454295914be88b92e2fa59: function AS_UWI_i1492552b8454295914be88b92e2fa59(param) {
        var self = this;
        this.onNotificationBellClick(param);
    },
    /** onLogOutClick defined for jrmgmtheader **/
    AS_UWI_a1ec3a9f842b46fc97bea1a913bb407e: function AS_UWI_a1ec3a9f842b46fc97bea1a913bb407e(param) {
        var self = this;
        this.onLogOutClick(param);
    },
    /** onRowClick defined for segJourneyList **/
    AS_Segment_cd2379be01a1421998b9fb6967396af8: function AS_Segment_cd2379be01a1421998b9fb6967396af8(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onJourneyCardClick()
    },
    /** onBackClick defined for journeydetail **/
    AS_UWI_c5da25c5417949619c75f4d5f3b61c21: function AS_UWI_c5da25c5417949619c75f4d5f3b61c21(param) {
        var self = this;
        this.onJourneyDetailBack(param);
    },
    /** onClick defined for flxCloseNotificationMsg **/
    AS_FlexContainer_f9751b35941e48eda431984dd5429073: function AS_FlexContainer_f9751b35941e48eda431984dd5429073(eventobject) {
        var self = this;
        this.onNotificationCloseClick();
    },
    /** postShow defined for frmJourneyList **/
    AS_Form_d245d1123dc64d7e99e4f072d3df5d89: function AS_Form_d245d1123dc64d7e99e4f072d3df5d89(eventobject) {
        var self = this;
        this.onFormPostShow();
    }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segIncidentTypes **/
    AS_Segment_be287a83b40a4f44bb30a6d998872dd4: function AS_Segment_be287a83b40a4f44bb30a6d998872dd4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSegIncidentTypeRowCLick();
    },
    /** onClick defined for btnSendEmergenyRequest **/
    AS_Button_c85aaa53bc294c41aaba45c68e0a4fcf: function AS_Button_c85aaa53bc294c41aaba45c68e0a4fcf(eventobject) {
        var self = this;
        this.sendEmergencyRequest();
    },
    /** preShow defined for frmEmergencyRequest **/
    AS_Form_f53b612167db4680a331f64905ccdbed: function AS_Form_f53b612167db4680a331f64905ccdbed(eventobject) {
        var self = this;
        //this.setData();
    },
    /** postShow defined for frmEmergencyRequest **/
    AS_Form_a563628bdca846bf8fea7805d9fe3494: function AS_Form_a563628bdca846bf8fea7805d9fe3494(eventobject) {
        var self = this;
        this.onFormPostShow();
    }
});
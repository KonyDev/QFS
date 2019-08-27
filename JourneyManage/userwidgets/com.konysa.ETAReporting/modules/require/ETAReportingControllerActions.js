define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCheckIn **/
    AS_Button_bba056d16fe44d259ffe9f541353aeea: function AS_Button_bba056d16fe44d259ffe9f541353aeea(eventobject) {
        var self = this;
        this._updateETA();
        /*try
  {
    alert(this.view.lstTimeCheckins.selectedKeyValues);
  }
catch(err)
  {
    alert("Error in Getting the Selected Key for UpdatedETA.");
  }*/
    },
    /** onClick defined for alertFlex **/
    AS_FlexContainer_eff437639fca46b99e34157f798b1043: function AS_FlexContainer_eff437639fca46b99e34157f798b1043(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for ETAReporting **/
    AS_FlexContainer_d51c6a9d220b46d78a4ff32b2b23dc4b: function AS_FlexContainer_d51c6a9d220b46d78a4ff32b2b23dc4b(eventobject) {
        var self = this;
        this._dismissAlert();
    },
    /** preShow defined for ETAReporting **/
    AS_FlexContainer_de4a2e36db7344149118d27fa588de8d: function AS_FlexContainer_de4a2e36db7344149118d27fa588de8d(eventobject) {
        var self = this;
        debugger;
        try {
            this.componentPreShow();
        } catch (err) {
            alert(err.message);
        }
    }
});
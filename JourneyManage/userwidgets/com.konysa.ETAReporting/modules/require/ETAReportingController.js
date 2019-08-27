define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
    },
    initGettersSetters: function() {

    },
    /**
     * @function
     *
     */
    _dismissAlert:function(){
      if(typeof this.dismissAlert=='function'){
        this.dismissAlert();
      }
    },
    /**
     * @function
     *
     */
    _updateETA:function(){
      debugger;
      var selectedKeyValue=this.view.lstTimeCheckins.selectedKeyValues;
      if(typeof this.updateETA=='function'){
        this.updateETA(selectedKeyValue);
        this._dismissAlert();
      }
    },
    /**
     * @function
     *
     */
    componentPreShow:function(){
      debugger;
      return;
      var MasterDataForListBox = [];
      var ResponseFromCheckInInterval = (GetResponseFromDatabaseWhereClause(CHECKIN_INTERVAL_MASTER_TBL_GLOBAL, null, null));
      if(ResponseFromCheckInInterval !== null && ResponseFromCheckInInterval!==undefined && ResponseFromCheckInInterval.length>0)
      {
        ResponseFromCheckInInterval.forEach(function(item){
          MasterDataForListBox.push({"mykey":parseInt(item.checkin_interval_row_id_pk),"myvalue":parseInt(item.checkin_interval_minutes),"accessibilityConfig":{}});
        });
        this.view.lstTimeCheckins.masterDataMap = [MasterDataForListBox,"mykey","myvalue"];
      }
      else
      {
        alert("No Data");
      }
    }

  };
});
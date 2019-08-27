define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
    },
    initGettersSetters: function() {

    },
    dismissAlert:function(){
    },
    componentPreShow:function(){
      /*var MasterDataForListBox = [];
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
      }*/
    },
    getListBoxSelectedValue : function()
    {
      //var selectedKeyValue=1;
    var selectedKeyValue=this.view.lstTimeCheckins.selectedKeyValue;
      kony.print("selectedKeyValue ::"+selectedKeyValue[1]);
      return selectedKeyValue[1];
    }
  };
});
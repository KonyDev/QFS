define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
   setWidgetDataMapTOSegment : function()
    {
      this.view.segPathList.widgetDataMap=
        {
        "lblLine0" : "lblLine0",
        "lblLine1" : "lblLine1",
        "lblLastKnownLocation" : "lblLastKnownLocation",
        "imgPathIcon" :  "imgPathIcon",
        "lblLocation" : "lblLocation",
        "lblTime" : "lblTime",
        "imgClock" :"imgClock",
        "lblDate" : "lblDate",
        "imgVechile" : "imgVechile"
      }

    },
    setCheckPointsDataToSegment : function(segCheckPointsDataForPath)
    {
      
      this.view.segPathList.setData(segCheckPointsDataForPath);
      
    },
    setFlxActionVisibility_pathInfo : function(journeyStatus)
    {
      if(journeyStatus=="Completed" || journeyStatus=="completed" || journeyStatus=="terminated" || journeyStatus=="Terminated")
        {
          this.view.flxAction.setVisibility(false);
        }
      else
        {
          this.view.flxAction.setVisibility(true);
        }
      
    }
  };
});
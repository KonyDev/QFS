define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
  /*  onPreShowOfJourneyDetails : function()
    {
      
     // this.view.pathinfo.setWidgetDataMapTOSegment();
      
    },*/
    onJourneyBack:function(){
      debugger;
      if(typeof this.onBackClick=='function'){
        var param={};
        this.onBackClick(param);
      }
    },
    setDataToWidgets : function(dataObject,segCheckPointsDataForPath,vehicleDetails,passengerdetails,incidentDetails)
    {
     kony.print("in setDataToWidgets ::"+JSON.stringify(segCheckPointsDataForPath));
      if(dataObject!==null && dataObject.length!==0)
        {
         this.view.lblJourneyId.text=dataObject["journeyId"];
          this.view.lblDriver.text=dataObject["driverName"];
          this.view.lblDriverName.text=dataObject["driverName"];
          this.view.lblStatus.text=dataObject["journeyStatus"]["text"];
          this.view.lblStatus.skin=dataObject["journeyStatus"]["skin"];
          this.view.lblTrackingPointName.text=dataObject["journeyTrackingpointName"];
      this.view.lblSupervisorNameVal.text=dataObject["superviserName"];
         if(dataObject["journeyStatus"]["text"]=="incident Reported") 
           {
             this.view.emergencydetails.setEmergencyDetails(dataObject);
             this.view.emergencydetails.isVisible=true;
             this.view.lblDivider0.isVisible=true;
           }
          else
            {
              this.view.emergencydetails.isVisible=false;
              this.view.lblDivider0.isVisible=false;
            }
      
        }
    //  segCheckPointsDataForPath=[];
     debugger;
     this.view.pathinfo.setCheckPointsDataToSegment(segCheckPointsDataForPath);
      if(vehicleDetails== null || vehicleDetails=="" ||vehicleDetails==undefined)
        {
       this.view.lblVechileColorNameVal.text="";
      this.view.lblVechilePlateNumberVal.text="";
      this.view.lblVechileNameList.text="";
          
        }
      else
        {
          
      this.view.lblVechileColorNameVal.text=vehicleDetails["vehicle_color"];
      this.view.lblVechilePlateNumberVal.text=vehicleDetails["vehicle_reg_num"];
      this.view.lblVechileNameList.text=vehicleDetails["vehicle_make"]+","+vehicleDetails["vehicle_model"];
        }
      kony.print("passengerdetails.length "+passengerdetails.length);
      if(passengerdetails.length!=0)
      this.view.lblPassengerName.text=passengerdetails[0]["passenger_name"];
      else
      this.view.lblPassengerName.text=""; 
    },
    onClickOfChangeETA : function()
    {
      kony.print("onClickOfChangeETA ");
      var param={};
      this.actionOfChangeETABtn(param);
    },
     onClickOfCloseJourney : function()
    {
      kony.print("onClickOfCloseJourney ");
      var param={};
      this.actionOfCloseJourneyBtn(param);
    },
    updateJourneyStatusOnJourneyDetailsUI : function(journeyStatus)
    {
    	this.view.lblStatus.text=journeyStatus;
    },
     setVisibilityOfActionFlex : function(journeyStatus)
    {
      if(journeyStatus=="Completed" || journeyStatus=="completed" || journeyStatus=="Not Started" || journeyStatus=="terminated" || journeyStatus=="Terminated")
        {
          this.view.flxNormalRoot.setVisibility(false);
        }
      else
        {
          this.view.flxNormalRoot.setVisibility(true);
        }
      this.view.pathinfo.setFlxActionVisibility_pathInfo(journeyStatus);
  	},
    OnClickOfflxEmergencyActionBtn : function()
    {
      kony.print("on click of OnClickOfflxEmergencyActionBtn");
      var param={};
      this.actionOfEmergencyBtn(param);
    }
    
  };
});
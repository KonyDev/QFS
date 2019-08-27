define({ 

  setFlxNewJourneyTracking:function()
  {
    this.view.segTrackingPoints.widgetDataMap = {lblTrackingPoint:"lblTrackingPoint"};
    var masterTable=[];
    try
    {
      for(var x=0;x<ApplicationData.TrackingPoints.length;x++)
      {
        masterTable.push({lblTrackingPoint:ApplicationData.TrackingPoints[x]});
      }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segTrackingPoints.setData(masterTable);
  },
  setListBoxTrackingPoints:function()
  {
    //Setting the Tracking Points
    this.view.lstBoxTrackingPoints.masterDataMap = [[
      {"mykey":"key1","myvalue":"Port Hedland","accessibilityConfig":{}},
      {"mykey":"key2","myvalue":"Christmas Creek","accessibilityConfig":{}},
      {"mykey":"key3","myvalue":"Exploration","accessibilityConfig":{}},
      {"mykey":"key4","myvalue":"Cloudbreak","accessibilityConfig":{}},
      {"mykey":"key5","myvalue":"Solomon","accessibilityConfig":{}},
      {"mykey":"key6","myvalue":"Northstar","accessibilityConfig":{}},
      ],"mykey","myvalue"];
    this.view.lstBoxTrackingPoints.selectedKey = "key1";
    
    //Setting the Supervisor
    this.view.lstBoxSupervisor.masterDataMap=[[
      {"mykey":"key1","myvalue":"Alex Davis","accessibilityConfig":{}},
      ],"mykey","myvalue"];
    this.view.lstBoxSupervisor.selectedKey = "key1";
    
    //Setting the Supervisor Details
    this.view.SupervisorPhone.text = ApplicationData.TrackingPointsWithSupervisor[0].Supervisor.Mobile;
    this.view.SupervisorCampRoomNumber.text = ApplicationData.TrackingPointsWithSupervisor[0].Supervisor.CampRoomNumber;
    
    //Setting Company Details
    this.view.CompanySupervisor.text = ApplicationData.TrackingPointsWithSupervisor[0].Company.Name;
    this.view.SupervisorCompanyNumber.text = ApplicationData.TrackingPointsWithSupervisor[0].Company.Phone;
    
  }
});










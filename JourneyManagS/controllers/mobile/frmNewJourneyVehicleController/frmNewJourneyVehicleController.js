define({ 

 setCarInformation:function()
  {
    //Setting the Personal Car Data
    this.view.segmentPersonalCar.widgetDataMap = {lblCarName:"lblCarName",lblCarModel:"lblCarModel"};
    
    var masterTable=[];
    try
    {
      for(var x=0;x<2;x++)
      {
        masterTable.push({lblCarName:ApplicationData.vehiclesMasterData[x].vehicleName,lblCarModel:ApplicationData.vehiclesMasterData[x].RegistrationNumber});
      }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segmentPersonalCar.setData(masterTable);
    
    
    //Setting the Company Car Data
    this.view.segmentCompanyCar.widgetDataMap = {lblCarName:"lblCarName",lblCarModel:"lblCarModel",lblCarColor:"lblCarColor"};
    
    var masterTableCar=[];
    try
    {
      for(var xx=0;xx<3;xx++)
      {
        masterTableCar.push({lblCarName:ApplicationData.vehiclesMasterData[xx].vehicleName,
                             lblCarModel:ApplicationData.vehiclesMasterData[xx].RegistrationNumber,
                              lblCarColor:ApplicationData.vehiclesMasterData[xx].Color 
                            });
      }
      
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segmentCompanyCar.setData(masterTableCar);
    
    
    
    
    
    //Setting the Data to the VehicleDetails
    this.view.lstPersonalCar.masterDataMap = [[
      {"mykey":"key1","myvalue":"Personal Ford Focus | 127 833D","accessibilityConfig":{}},
      {"mykey":"key6","myvalue":"Personal Ford Focus | 346 834D","accessibilityConfig":{}},
      ],"mykey","myvalue"];
    this.view.lstPersonalCar.selectedKey = "key1";
    
    
    //Setting the data for the Vehicle Personal Category
    
    this.view.VehicleSelectColor.text = ApplicationData.vehiclesMasterData[0].Color;
    this.view.VehicleSelectMake.text = ApplicationData.vehiclesMasterData[0].Make;
    this.view.VehicleSelectModel.text = ApplicationData.vehiclesMasterData[0].Make;
    this.view.VehicleSelectRegistration.text = ApplicationData.vehiclesMasterData[0].RegistrationNumber;
    
    
    
    //Setting the Data to the VehicleDetails Company
    this.view.lstCompanyCar.masterDataMap = [[
      {"mykey":"key1","myvalue":"Company Ford Focus | 127 833D","accessibilityConfig":{}},
      {"mykey":"key6","myvalue":"Company Ford Focus | 243 475D","accessibilityConfig":{}},
      {"mykey":"key6","myvalue":"Company Toyota Highlander | 974 655D","accessibilityConfig":{}},
      ],"mykey","myvalue"];
    this.view.lstCompanyCar.selectedKey = "key1";
    
    
    
    
    //Setting data for the Personal and Company Guides and Manuals
    this.view.segmentGuidesPersonal.widgetDataMap = {lblGuides:"lblGuides"};
    
    var masterTableGuides=[];
    try
    {
      for(var sx=0;sx<ApplicationData.guidesAndManualsMasterData.length;sx++)
      {
        masterTableGuides.push({lblGuides:ApplicationData.guidesAndManualsMasterData[sx].Title});
      }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segmentGuidesPersonal.setData(masterTableGuides);
    
    //Setting data for the Personal and Company Guides and Manuals
    this.view.segmentGuidesPersonal.widgetDataMap = {lblGuides:"lblGuides"};
    
    var masterTableGuidesCompany=[];
    try
    {
      for(var sxx=0;sxx<ApplicationData.guidesAndManualsMasterData.length;sxx++)
      {
        masterTableGuidesCompany.push({lblGuides:ApplicationData.guidesAndManualsMasterData[sxx].Title});
      }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segmentGuidesPersonal.setData(masterTableGuidesCompany);

  }
 });

















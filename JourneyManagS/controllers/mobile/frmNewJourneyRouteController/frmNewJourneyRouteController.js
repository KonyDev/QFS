define({ 

 //Type your controller code here 
  setSegmentDeparturePoints:function()
  {
    this.view.segDeparturePoints.widgetDataMap = {lblDeparturePoints:"lblDeparturePoints",imgDeparturePoints:"imgDeparturePoints"};
    var masterTable=[];
    try
    {
      for(var x=0;x<ApplicationData.DeparturePoints.length;x++)
      {
        if(ApplicationData.DeparturePoints[x] == "Current Location")
          {
            masterTable.push({lblDeparturePoints:ApplicationData.DeparturePoints[x],imgDeparturePoints:"trackerblue.png"});
          }
        else
        {masterTable.push({lblDeparturePoints:ApplicationData.DeparturePoints[x],imgDeparturePoints:"trackerlocation.png"});}
      }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segDeparturePoints.setData(masterTable);
    
    
    
    
    
    this.view.segArrivalPoints.widgetDataMap = {lblDeparturePoints:"lblDeparturePoints"};
    var masterTableArrival=[];
    try
    {
      for(var xx=0;xx<ApplicationData.DeparturePoints.length;xx++)
      {
        masterTableArrival.push({lblDeparturePoints:ApplicationData.DeparturePoints[xx]});
      }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.segArrivalPoints.setData(masterTableArrival);
    
    
    
     //Setting the data at the Ready State
    
    this.view.lblFromDeparture.text = ApplicationData.JourneyRouteDetails.From;
    this.view.lblFromArrival.text = ApplicationData.JourneyRouteDetails.To;
    this.view.lblFromDepartureTime.text = ApplicationData.JourneyRouteDetails.Start;
    this.view.lblFromArrivalTime.text = ApplicationData.JourneyRouteDetails.Arrival;
  }
  
  }
  
 
  

 );
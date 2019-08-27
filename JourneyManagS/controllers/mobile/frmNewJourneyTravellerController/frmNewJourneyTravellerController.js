define({ 

  //Type your controller code here 
  setfrmNewJourneyTraveller:function()
  {

    try
    {
      //Setting data to the Drive Field
      this.view.TravellerName.text = ApplicationData.DriverDetails.driverName;
      this.view.TravellerPhone.text = ApplicationData.DriverDetails.driverPhone;
      this.view.TravellerSatellite.text = ApplicationData.DriverDetails.driverSatellite;
      this.view.TravellerRadio.text = ApplicationData.DriverDetails.driverRadio;

      //Setting data to the Add Passenger
      
      //Removed As these fields are to set by the USer->Driver.
//       this.view.PassengerName.text = ApplicationData.PassengerData[0].Name;
//       this.view.PassengerPhone.text = ApplicationData.PassengerData[0].Phone;


    }
    catch(err)
    {
      alert(err);
    }
  },
  showAllThePassengers:function()
  {
    try
    {
      
       this.view.Segment0j4cc0ab190dd48.widgetDataMap = {txtUserName:"txtUserName",txtUserPhone:"txtUserPhone",lblNameHeader:"lblNameHeader",lblPhoneHeader:"lblPhoneHeader"};
    var masterTable=[];
    try
    {
      for(var index =0;index<ApplicationData1.SavingData.Passengers.length;index++)
        {
          var name = ApplicationData1.SavingData.Passengers[index].Name;
         var phone = ApplicationData1.SavingData.Passengers[index].Phone;
          var nameheader = ApplicationData1.SavingData.Passengers[index].NameHeader;
          var phoneheader = ApplicationData1.SavingData.Passengers[index].PhoneHeader;
          masterTable.push({txtUserName:name,txtUserPhone:phone,lblPhoneHeader:phoneheader,lblNameHeader:nameheader});
        }

//       for(var x=0;x<ApplicationData.TrackingPoints.length;x++)
//       {
//         masterTable.push({lblTrackingPoint:ApplicationData.TrackingPoints[x]});
//       }
    }
    catch(err)
    {
      alert(err.message);
    }
    this.view.Segment0j4cc0ab190dd48.setData(masterTable);
//       var Passenger1 = new com.konymp.Passenger({
//         "autogrowMode": kony.flex.AUTOGROW_NONE,
//         "clipBounds": true,
//         "height": "240dp",
//         "id": "Passenger1",
//         "isVisible": true,
//         "layoutType": kony.flex.FLOW_VERTICAL,
//         "left": "0",
//         "masterType": constants.MASTER_TYPE_USERWIDGET,
//         "isModalContainer": false,
//         "skin": "slFbox",
//         "top": "0",
//         "width": "100%",
//         "zIndex": 1
//       }, {}, {});
//       this.view.flxPassengerDetailsContainer.add(Passenger1);
//       for(var index = 0; index<this.view.flxPassengerDetailsContainer.widgets().length;index++)
//       {
//         alert(this.view.flxPassengerDetailsContainer.widgets()[index].id);
//       }
    }
    catch(err)
    {
      alert(err.message);
    }

  }

});
/*var callbacksMapObject={
  "onbackground":{
    "functionID":appInBackground
  }
};*/
function onApplicationInit(){
  debugger;
  if(kony.os.deviceInfo().name=="android" || kony.os.deviceInfo().name=="iPhone"){
    try{
      kony.application.setApplicationProperties({
        "statusBarColor": "575ee7",
        //"statusBarColor": "13294b",
        "statusBarForegroundColor": "ff0000",
        //"statusBarHidden": true,
        "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
        //"navigationBarColor" : "e5e8e8",
        //"systemUiConfig" : constants.IMMERSIVE_STICKY_HIDE_NAVIGATION_BAR
      });

      //kony.lang.setUncaughtExceptionHandler(globalExceptionHandler);
      //kony.application.addApplicationCallbacks(callbacksMapObject);
      kony.application.setApplicationCallbacks({
        "onbackground":function(){
          kony.print("################### Terminating app ##############");
          //kony.application.exit();
        }
      });
    }catch(excp){
      debugger;
    }
  }
}
/**
 * @function
 *
 */
function onPostAppInit(){
  debugger;
  kony.print("#### Entering onPostAppInit function ####");
  try{
    setPushCallBack();
    //registerForPush();
  }catch(excp){
    kony.print("#### Exception occured while setting the push notification callback ###"+JSON.stringify(excp));
  }
  kony.print("#### Exiting onPostAppInit function ####");
}
/**
 * @function
 *
 */
/*function appInBackground(){
	kony.print("$$$$$$$$$$$$$$$$$$$$$ Hello Moto $$$$$$$$$$$$$$$$$$");
}*/
function globalExceptionHandler(excp){
}
/**
 * @function
 *
 * @param params 
 */
function launchParam(params){
  debugger;
  if(typeof params=='object' && params!==null){
    var navObj=new kony.mvc.Navigation("frmSplash");
    try{
      //Commenting for app launch from notification
      //navObj.navigate(params);
    }catch(excp){
      debugger;
    }
  }
}
// var ApplicationData = {
//   LoginDetails: {
//     Username: "johngreen@kony.com",
//     Password: "Kony@12345"
//   },
//   DriverDetails: {
//     driverName: "John Green",
//     driverEmail: "johngreen@gmail.com",
//     driverPhone: "094-228-0095",
//     driverSatellite: "011 870 320488888",
//     driverRadio: "106.7",
//   },
//   PassengerData: [{
//     Name: 'Josh Bowers',
//     Phone: '094-228-3421'
//   }],
//   JourneyRouteDetails:{
//     To:"221 Birmingham Street",
//     Start:"25 Sep  10:10 AM",
//     Arrival:"25 Sep  4:10 PM"

//   },
//   DeparturePoints: ["Current Location","123 Baker Street", "221 Birmingham Street", "Laplace Stores", "658 Tilman Wall", "047 Jordi Ports", "221 Birmingham Street", "Laplace Stores"],
//   TrackingPoints: ["Port Hedland", "Christmas Creek","Exploration","Cloudbreak","Solomon","Northstar"],
//   TrackingPointsWithSupervisor: [{
//     PointName: 'Port Hedland',
//     Supervisor: {
//       Name: 'Alex Davis',
//       Mobile: '094-338-0087',
//       CampRoomNumber: '32'
//     },
//     Company: {
//       Name: 'Kony India Pvt. Ltd.',
//       Phone: '094-338-0087'
//     }
//   },
//                                  {
//                                    PointName: 'Christmas Creek',
//                                    Supervisor: {
//                                      Name: 'Alex Davis',
//                                      Mobile: '094-338-0087',
//                                      CampRoomNumber: '32'
//                                    },
//                                    Company: {
//                                      Name: 'Kony India Pvt. Ltd.',
//                                      Phone: '094-338-0087'
//                                    }
//                                  },
//                                  {
//                                    PointName: 'Exploration',
//                                    Supervisor: {
//                                      Name: 'Alex Davis',
//                                      Mobile: '094-338-0087',
//                                      CampRoomNumber: '32'
//                                    },
//                                    Company: {
//                                      Name: 'Kony India Pvt. Ltd.',
//                                      Phone: '094-338-0087'
//                                    }
//                                  },
//                                  {
//                                    PointName: 'Cloudbreak',
//                                    Supervisor: {
//                                      Name: 'Alex Davis',
//                                      Mobile: '094-338-0087',
//                                      CampRoomNumber: '32'
//                                    },
//                                    Company: {
//                                      Name: 'Kony India Pvt. Ltd.',
//                                      Phone: '094-338-0087'
//                                    }
//                                  },
//                                  {
//                                    PointName: 'Solomon',
//                                    Supervisor: {
//                                      Name: 'Alex Davis',
//                                      Mobile: '094-338-0087',
//                                      CampRoomNumber: '32'
//                                    },
//                                    Company: {
//                                      Name: 'Kony India Pvt. Ltd.',
//                                      Phone: '094-338-0087'
//                                    }
//                                  },
//                                  {
//                                    PointName: 'NorthStar',
//                                    Supervisor: {
//                                      Name: 'Alex Davis',
//                                      Mobile: '094-338-0087',
//                                      CampRoomNumber: '32'
//                                    },
//                                    Company: {
//                                      Name: 'Kony India Pvt. Ltd.',
//                                      Phone: '094-338-0087'
//                                    }
//                                  }

//                                 ],
//   vehiclesMasterData: [{
//     vehicleName: "Ford Focus",
//     Make: "Ford",
//     Model: "Focus",
//     Color: "Red",
//     RegistrationNumber: "345 226E"
//   },
//                        {
//                          vehicleName: "Maruti Suzuki",
//                          Make: "Maruti",
//                          Model: "800",
//                          Color: "Blue",
//                          RegistrationNumber: "496 607E"
//                        },
//                        {
//                          vehicleName: "Toyota Highlander",
//                          Make: "Toyota",
//                          Model: "Focus",
//                          Color: "White",
//                          RegistrationNumber: "389 798F"
//                        }
//                       ],
//   guidesAndManualsMasterData: [{
//     Title: "The Pilabara Road Safety",
//     url: ""
//   },
//                                {
//                                  Title: "Vehicle Specification Guide",
//                                  url: ""
//                                },
//                                {
//                                  Title: "Traffic Management Procedure",
//                                  url: ""
//                                }
//                               ]

// };
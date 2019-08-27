define({ 

 //Type your controller code here 
  
  setData:function(){
  var widgetDataMap = [{labelData:"Accident",radioImage:"defaultdeselect.png"},{labelData:"Vehicle Breakdown",radioImage:"defaultdeselect.png"},
                      {labelData:"Out of Fuel",radioImage:"defaultdeselect.png"},{labelData:"Extreme Weather",radioImage:"defaultdeselect.png"},
                      {labelData:"Theft/Robbery",radioImage:"defaultdeselect.png"},{labelData:"Others",radioImage:"defaultdeselect.png"}];
   this.view.segEmergencyDetails.setData(widgetDataMap);
  },
  
 sendEmergencyRequest:function(){
  var formName="frmEmergencyRquest";
  var ntf = new kony.mvc.Navigation("frmONJourney");
   ntf.navigate(formName);
 },
 
  setNetworkStatus:function(){
      var config = {};
      var self=this;
      config.statusChange = function (isOnLine)
      {
        if(isOnLine)
        {
          
        }
        else
        {
          self.view.customAlertWithContactcheckin.setVisibility(true);
          self.view.customAlertWithContactcheckin.text="Signal Lost";
          self.view.customAlertWithContactcheckin.text1="Contact your Tracking Point by calling via your Satelite Phone.";
          self.view.customAlertWithContactcheckin.text2="Josh Bowers";
          self.view.customAlertWithContactcheckin.text3="011870310493566";
          self.view.customAlertWithContactcheckin.text4="OK";
        }
      };
      kony.net.setNetworkCallbacks(config);
      var isOnLine = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    },
 });
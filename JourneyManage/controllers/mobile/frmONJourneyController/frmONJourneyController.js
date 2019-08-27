define({ 
data:null,
 //Type your controller code here 
  onNavigate:function(data){
   try
     {
        if(data == "frmEmergencyRquest"){
     this.view.customAlertWithImage.setVisibility(true);
     this.view.customAlertWithImage.text = "Emergency Request Sent.";
     this.view.customAlertWithImage.text1 = "Help is on it's way!";
      
    }
     }
    catch(err)
      {
      }
  },
    dismissSuccessAlert:function(){
      try
        {
          this.view.customAlertWithImage.setVisibility(false);
        }
      catch(err)
        {
        }
      
    },
  setSegData : function(index){
     var updateRow = {lblMessageFrom : {skin:"konyqfsSknLblDummy",text:"David Miller"},flxMain:{skin:"konyqfsSknflxDummy"},
                     lblMessageTime : {skin:"konyqfsSknlblDummy2",text:"19.02.2019   19:00"}, 
                     lblMessageDetails : {skin:"konyqfsSknLblDummy3",text:"He is an outstanding cricketer plays for southafrica and also been a part of ipl team called kxip"},
                     };
    this.view.segReadMessages.setDataAt(updateRow, index);
    this.view.imgDots.src = "threeverticaldotswhite_1.png";
    this.view.imgMessages.src = "ungroup_1.png";   
  },
  addNotificationStatus : function(){
    var onlineNotification = kony.store.getItem("onlineNotification");
    var offlineNotification = kony.store.getItem("offlineNotification");
    if(onlineNotification || offlineNotification){
      this.view.imgDots.src = "white_with_indicator_1.png";
      this.view.imgMessages.src = "group_1.png";   
    }
    kony.store.removeItem("onlineNotification");
    kony.store.removeItem("offlineNotification");
  }
    
  
 });
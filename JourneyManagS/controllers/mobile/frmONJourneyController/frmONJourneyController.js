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
      
    }
    
  
 });
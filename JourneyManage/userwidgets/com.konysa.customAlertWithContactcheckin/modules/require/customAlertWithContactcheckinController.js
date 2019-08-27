define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    SetCheckinSequenceNumber:function(checkinSequenceNumber){
      try{
        if(typeof checkinSequenceNumber=='number'){
          this._chekInSequenceNumber=checkinSequenceNumber;
          var numberWithOrdinalSuffix=this.ordinal_suffix_of(checkinSequenceNumber);
          
          var checkInMessage="It's time for your "+numberWithOrdinalSuffix+
              " Check-In. Check-in now by contacting your Tracking Point.";
          this.setCheckinMessage(checkInMessage);
        }
      }catch(excp){
        debugger;
      }
    },
    setCheckinMessage:function(checkInMessage){
      this.view.lblBody.text=checkInMessage;
    },
    ordinal_suffix_of:function (i) {
      try{
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
          return i + "st";
        }
        if (j == 2 && k != 12) {
          return i + "nd";
        }
        if (j == 3 && k != 13) {
          return i + "rd";
        }
        return i + "th";
      }catch(excp){
        debugger;
        throw excp;
      }
    },
    setName:function(name){
      if(typeof name=='string'){
        this.view.lblProfileData.text=name;
      }else{
        this.view.lblProfileData.text="NA";
      }
    },
    setPhoneNumber:function(phoneNumber){
      if(typeof phoneNumber=='string' || typeof phoneNumber=='number'){
        this.view.lblPhnno.text=phoneNumber;
      }else{
        this.view.lblPhnno.text="NA";
      }
    },
    onDismissClick:function(){
//       try
//         {
          
//       if(typeof this.DismissAlert=='function'){
//         this.DismissAlert();
//       }
//         }
//       catch(err)
//         {
//           alert(err.message);
//         }
    },
    dismissAlert:function()
    {
      
    }
  };
});
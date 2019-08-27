define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._chekInSequenceNumber=0;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    dismissAlert:function(){},
    SetCheckinSequenceNumber:function(checkinSequenceNumber){
      try{
        if(typeof checkinSequenceNumber=='number'){
          this._chekInSequenceNumber=checkinSequenceNumber;
          var numberWithOrdinalSuffix=this.ordinal_suffix_of(checkinSequenceNumber);
          var checkInMessage="Its time for your "+numberWithOrdinalSuffix+" Check-In.";
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
    checkInSuccess:function(result){
      debugger;
    },
    checkInFailure:function(result){
      debugger;
    },
    OnCheckInButtonClick:function(){
      try{
        if(typeof this.OnCheckIn=='function'){
          this.OnCheckIn(this._chekInSequenceNumber,this.checkInSuccess.bind(this),this.checkInFailure.bind(this));
        }
      }catch(excp){
        debugger;
      }
    },
  };
});
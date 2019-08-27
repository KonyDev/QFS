define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    onComponetPreshow:function(){
      try{
        this.view.brwsrSignature.enableParentScrollingWhenReachToBoundaries=false;
      }catch(excp){
        kony.print("Exception occured in preshow: "+JSON.stringify(excp));
      }
    },
    getSignature:function(){
      var str=this.view.brwsrSignature.evaluateJavaScript('getSignatureBase64()');
      if(typeof str=='string'){
        try{
          str=str.replace(/"/g,'');
          str=str.split(',');
          //str=str.replace("data:image/png;base64,", "");
          str=str[1];
        }catch(excp){
          str=null;
        }
      }
      return str;
    }
  };
});
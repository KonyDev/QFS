define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    /**
       * @function
       *
       * @param data 
       * @param isEnabled 
       */
    setText:function(data,isEnabled){
      if(typeof data=="string"){
        data=data.trim();
        this.view.txtUserName.text=data;
      }
      if(isEnabled===false){
        this.view.txtUserName.setEnabled(false);
      }else{
        this.view.txtUserName.setEnabled(true);
      }
    },
    getText:function(){
      var inputText=this.view.txtUserName.text;
      if(typeof inputText=='string'){
        inputText=inputText.trim();
      }else{
        inputText=null;
      }
      return inputText;
    }

  };
});
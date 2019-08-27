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
     */
    getText:function(){
      var inputText=this.view.txtUserName.text;
      if(typeof inputText=='string'){
        inputText=inputText.trim();
      }else{
        inputText=null;
      }
      return inputText;
    },
    /**
     * @function
     *
     * @param value 
     * @param isEnabled 
     * @param inputMode 
     */
    setText:function(value,isEnabled,inputMode){
      //debugger;
      if(typeof value=='string'){
        this.view.txtUserName.text=value;
      }
      if(isEnabled===false){
        this.view.txtUserName.setEnabled(false);
      }else{
        this.view.txtUserName.setEnabled(true);
      }
      if(inputMode===constants.TEXTBOX_INPUT_MODE_NUMERIC){
        this.view.txtUserName.textInputMode=constants.TEXTBOX_INPUT_MODE_NUMERIC;
        this.view.txtUserName.keyBoardStyle=constants.TEXTBOX_KEY_BOARD_STYLE_PHONE_PAD;
      }else{
        this.view.txtUserName.textInputMode=constants.TEXTBOX_INPUT_MODE_ANY;
      }
    }
  };
});
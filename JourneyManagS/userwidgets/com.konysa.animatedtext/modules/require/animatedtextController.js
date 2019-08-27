define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._isTextBoxEnabled=false;
      this._inputText=null;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    test:function(){
      this.view.txtBox.secureTextEntry=false;
    },onTouchEnd:function(){
      this.view.txtBox.secureTextEntry=true;
    },
    onTxtDone:function(){
      var inputText=this.view.txtBox.text;
      if(typeof inputText=='string'){
        inputText=inputText.trim();
        if(inputText.length>0){
          this._inputText=inputText;
        }else{
          this._inputText=null;
          this.disableTextBox();
        }
      }else{
        this.disableTextBox();
      }
    },
    getText:function(){
      return this._inputText;
    },
    enableTextBox:function(){
      var self=this;
      if(self._isTextBoxEnabled===false){
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.scale(1, 1);
        var transformProp2 = kony.ui.makeAffineTransform();
        transformProp2.scale(0.5, 0.4);
        var animDefinitionOne = {
          0: {
            "anchorPoint": {
              "x": 0,
              "y": 0
            },
            "transform": transformProp1
          },
          100: {
            "anchorPoint": {
              "x": 0,
              "y": 0
            },
            "transform": transformProp2
          }
        };
        var animDefinition = kony.ui.createAnimation(animDefinitionOne);
        this.view.flxInfo.animate(animDefinition,{
          "duration": 0.1,
          "iterationCount": 1,
          "delay": 0,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        },{
          "animationEnd":function(){
            self._isTextBoxEnabled=true;
            self.view.txtBox.setFocus(true);
          },
          "animationStart":function(){
          }
        });
      }
    },
    disableTextBox:function(){
      var self=this;
      if(self._isTextBoxEnabled===true){
        self.view.flxInfo.setFocus(true);
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.scale(0.5, 0.4);
        var transformProp2 = kony.ui.makeAffineTransform();
        transformProp2.scale(1, 1);
        var animDefinitionOne = {
          0: {
            "anchorPoint": {
              "x": 0,
              "y": 0
            },
            "transform": transformProp1
          },
          100: {
            "anchorPoint": {
              "x": 0,
              "y": 0
            },
            "transform": transformProp2
          }
        };
        var animDefinition = kony.ui.createAnimation(animDefinitionOne);
        this.view.flxInfo.animate(animDefinition,{
          "duration": 0.1,
          "iterationCount": 1,
          "delay": 0,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        },{
          "animationEnd":function(){
            self._isTextBoxEnabled=false;
          },
          "animationStart":function(){
          }
        });
      }
    }
  };
});
define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    doLogin:function(){
      this.onLoginSuccess();
    },
    onLoginSuccess:function(){
      if(typeof this.loginSuccess=='function'){
        var param={};
        this.loginSuccess(param);
      }
    },
    onLoginFailure:function(){
    }
  };
});
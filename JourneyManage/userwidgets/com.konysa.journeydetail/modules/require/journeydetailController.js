define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    onJourneyBack:function(){
      debugger;
      if(typeof this.onBackClick=='function'){
        var param={};
        this.onBackClick(param);
      }
    }
  };
});
define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    _onAddClick:function(param){
      kony.print("---Entering OnAddClick -----");
      if(typeof this.onAddClick=='function'){
        this.onAddClick(param);
      }
    },
    _onBellClick:function(eventobject,x,y){
      if(typeof this.onBellClick=='function'){
        this.onBellClick(eventobject, x, y)
      }

    },
    _onLogOutClick:function(param){
      if(typeof this.onLogOutClick=='function'){
        this.onLogOutClick(param);
      }
    }
  };
});
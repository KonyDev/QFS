define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._mapKey="";
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      debugger;
      defineGetter(this, "mapKey", function() {
        return this._mapKey;
      });
      defineSetter(this, "mapKey", function(val) {
        this._mapKey = val;
      });
    },
    onPreShow:function(){
      if(typeof this._mapKey=='string' && this._mapKey.length>0){
        this.view.mapJourney.mapKey=this._mapKey;
      }
    }
  };
});
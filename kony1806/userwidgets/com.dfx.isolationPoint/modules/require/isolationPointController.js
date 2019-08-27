define(function() {

	return {
      constructor: function(baseConfig, layoutConfig, pspConfig) {
        defineGetter(this, "arrayData", function() {
          return this._arrayData;
        });
        defineSetter(this, "arrayData", function(val) {
          //konymp.logger.trace("----------Entering totCount Setter---------", konymp.logger.FUNCTION_ENTRY);
          this._arrayData = val;
        });

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      preshow:function(){
        //alert(this._arrayData.data[0].typeDetail);
        var tempData = [];
        for(var i in this._arrayData.data){
          tempData.push({
            "lblIsolationNum":this._arrayData.data[i].isolationNum,
            "imgType":this._arrayData.data[i].imageType,
            "lbltype":this._arrayData.data[i].type,
            "lblTypeDetails":this._arrayData.data[i].typeDetail
          });
        }
        this.view.segIsolation.setData(tempData);
      }
	};
});
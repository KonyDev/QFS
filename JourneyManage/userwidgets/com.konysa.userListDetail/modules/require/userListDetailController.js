define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      setHeaderText:function(headerText){
        this.view.lblHeader.text=headerText;
      },
      setDropDownImage:function(isDropDownEnabled){
        debugger;
        if(isDropDownEnabled){
           this.view.tbxListBox.setVisibility(isDropDownEnabled);
           this.view.lstTimeCheckins.setVisibility(false);
        }
        else{
          this.view.tbxListBox.setVisibility(isDropDownEnabled);
          this.view.lstTimeCheckins.setVisibility(true);
        }
        
          

      },
      setMasterData:function(dataArr){
        this.view.lstTimeCheckins.masterData=dataArr;
      },
      setSelectedKey:function(keyName){
        debugger;
        this.view.lstTimeCheckins.selectedKey=keyName;
        var currentSelection=[];
        currentSelection = this.view.lstTimeCheckins.selectedKeyValue;
        this.view.tbxListBox.text=currentSelection[1];
      },
      getCurrentSelection:function(){
        return this.view.lstTimeCheckins.selectedKeyValue;
      }
	};
});
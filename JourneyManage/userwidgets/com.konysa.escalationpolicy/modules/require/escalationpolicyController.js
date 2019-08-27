define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._hidePolicy=false;
      this._isYesSelected=false;
      this._isNoSelected=false;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    togglePolicyVisibility:function(){
      if(this._hidePolicy===true){
        this.view.imgPolicyToggle.src="chechbox_unselected.png";
        this._hidePolicy=false;
      }else if(this._hidePolicy===false){
        this._hidePolicy=true;
        this.view.imgPolicyToggle.src="checkbox_selected.png";
      }
    },
    onOptionYesSelection:function(){
      this.view.flxContactDriverAction.setVisibility(false);
      this.disableNoOption();
      this.enableYesOption();
    },
    onOptionNoSelection:function(){
      this.view.flxContactDriverAction.setVisibility(false);
      this.disableYesOption();
      this.enableNoOption();
    },
    enableYesOption:function(){
      this._isYesSelected=true;
      this.view.imgRadioYes.src="radio_selected.png";
      this.view.flxOnYesSelection.setVisibility(true);
    },
    disableYesOption:function(){
      this._isYesSelected=false;
      this.view.imgRadioYes.src="radio_unselected.png";
      this.view.flxOnYesSelection.setVisibility(false);
    },
    enableNoOption:function(){
      this._isNoSelected=true;
      this.view.imgRadioNo.src="radio_selected.png";
      this.view.flxNoSelection.setVisibility(true);
    },
    disableNoOption:function(){
      this._isNoSelected=false;
      this.view.imgRadioNo.src="radio_unselected.png";
      this.view.flxNoSelection.setVisibility(false);
    },
    cancelFromPolicy:function(){
      
    },
    continueFromPolicy:function(){
      try{
        this.view.flxContactDriverRoot.setVisibility(true);
        this.view.flxSCRootContainer.setVisibility(false);
      }catch(excp){
        debugger;
      }
    },
    onPreshow:function(){
      this.disableYesOption();
      this.disableNoOption();
    }

  };
});
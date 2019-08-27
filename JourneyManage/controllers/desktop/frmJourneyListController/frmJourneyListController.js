define({ 

  //Type your controller code here 

  onFormPreSHow:function(){
  },
  onAddClick:function(){
    
  },
  onNotificationBellClick:function(){
    this.view.flxNotificationContainer.setVisibility(true);
    this.view.forceLayout();
  },
  onNotificationCloseClick:function(){
    this.view.flxNotificationContainer.setVisibility(false);
  },
  onLogOutClick:function(){
    
  },
  onJourneyCardClick:function(){
    try{
      this.showDetailScreen();
    }catch(excp){
      debugger;
    }
  },
  onJourneyDetailBack:function(param){
    try{
      this.hideDetailScreen();
    }catch(excp){
      debugger;
    }
  },
  onFormPostShow:function(){
    this.view.forceLayout();
  },
  showDetailScreen:function(){
    try{
      this.view.flxJourneyDetail.animate(
        kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.30},
        {animationEnd: function() {
        } 
        });
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  hideDetailScreen:function(){
    try{
      this.view.flxJourneyDetail.animate(
        kony.ui.createAnimation({100:{left:"-100%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.30},
        {animationEnd: function() {
        } 
        });
    }catch(excp){
      debugger;
      throw excp;
    }
  }

});
define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
        setSkinForSelectedTab: function(selectedTab)
    {
     // this.view.flxTab0.skin=
      this.view.flxTab0.skin=sknFlxBGWhite;
      this.view.flxTab3.skin=sknFlxBGWhite;
      this.view.flxTab1.skin=sknFlxBGWhite;
        this.view.flxTab2.skin=sknFlxBGWhite;
      this.view.lblTitle1.skin=sknLblBGTransFont575ee7Size100;
      this.view.lblTitle2.skin=sknLblBGTransFont575ee7Size100;
       this.view.lblTitle3.skin=sknLblBGTransFont575ee7Size100;
       this.view.lblTitle0.skin=sknLblBGTransFont575ee7Size100;
        kony.print("in setSkinForSelectedTab"+selectedTab);
 		 if(selectedTab=="Live")      
           {
             kony.print("on Live Tap");
        this.view.flxTab1.skin=sknFlxBgBlue;
         this.view.lblTitle1.skin=sknLblWhite100;
           }
      if(selectedTab=="Incident")
        {
        this.view.flxTab2.skin=sknFlxBgBlue;
           this.view.lblTitle2.skin=sknLblWhite100;
        }
      if(selectedTab=="Delay")
        {
        this.view.flxTab3.skin=sknFlxBgBlue;
           this.view.lblTitle3.skin=sknLblWhite100;
        }
     if(selectedTab=="All")
        {
        this.view.flxTab0.skin=sknFlxBgBlue;
           this.view.lblTitle0.skin=sknLblWhite100;
        }
    
     // kony.print("hi..")
       // this.view.flxTab3.skin=
        
    }
  
	};
});
define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
      preshow:function(){
        this.view.tbxEmail.textTextbox = "";
        this.view.tbxPassword.textTextbox = "";
        this.view.btnSignIn.skin = "skinDeActive";
        this.view.btnSignIn.focusSkin = "skinDeActive";
      },
      validateText:function(){
        //alert("Hi")
        if(this.view.tbxEmail.textTextbox ==="" || this.view.tbxPassword.textTextbox === ""){
          this.view.btnSignIn.skin = "skinDeActive";
          this.view.btnSignIn.focusSkin = "skinDeActive";
        }else{
          this.view.btnSignIn.skin = "skinActive";
          this.view.btnSignIn.focusSkin = "skinActive";
        }
      },
      login:function(){
        if(this.view.btnSignIn.skin == "skinActive"){
          var navObj= new kony.mvc.Navigation("frmDashboard");
          navObj.navigate();
        }
        
      },
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
     
	};
});
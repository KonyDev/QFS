define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      /**
       * @function
       *
       * @param title 
       * @param description 
       * @param isEditable 
       */
      setData:function(title,description,isEditable,imageIcon){
        if(typeof title=='string'){
          this.view.lblTitle.text=title;
        }
        if(typeof description=='string'){
          this.view.txtUserName.text=description;
        }
        if(isEditable===false){
          this.view.txtUserName.setEnabled(false);
          this.view.txtUserName.setVisibility(false);
          this.view.lblDesc.text=description;
          this.view.lblDesc.setVisibility(true);
        }else{
          this.view.txtUserName.setEnabled(true);
          this.view.lblDesc.setVisibility(false);
          this.view.txtUserName.setVisibility(true);
        }
        if(typeof imageIcon=='string'){
          this.view.imgIcon.src=imageIcon;
        }
      },
	};
});
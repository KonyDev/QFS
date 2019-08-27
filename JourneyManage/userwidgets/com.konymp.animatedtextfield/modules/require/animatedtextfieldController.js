/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/

define(function() {
	var konymp = konymp || {};
  	var KonyLoggerModule = require("com/konymp/animatedtextfield/KonyLogger");
  	konymp.logger = (new KonyLoggerModule("Animated Text Field")) || function(){};
  
    //#ifdef iphone
	//#define CHANNEL_CONDITION_native
	//#endif
	//#ifdef android
	//#define CHANNEL_CONDITION_native
	//#endif
	//#ifdef ipad
	//#define CHANNEL_CONDITION_native
	//#endif
	//#ifdef tabrcandroid
	//#define CHANNEL_CONDITION_native
	//#endif
  
	//#ifdef CHANNEL_CONDITION_native
	//#endif
  	
  	//#ifdef spaan
	//#define CHANNEL_CONDITION_web
	//#endif
	//#ifdef spaip
	//#define CHANNEL_CONDITION_web
	//#endif
	//#ifdef spabb
	//#define CHANNEL_CONDITION_web
	//#endif
	//#ifdef spaipad
	//#define CHANNEL_CONDITION_web
	//#endif
	//#ifdef spatabandroid
	//#define CHANNEL_CONDITION_web
	//#endif
	//#ifdef desktopweb
	//#define CHANNEL_CONDITION_web
	//#endif
  
	//#ifdef CHANNEL_CONDITION_web
	//#endif
  	
  	
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          	konymp.logger.info("Entered constructor of component", konymp.logger.FUNCTION_ENTRY);
			this._placeholderSkin = this.placeholderSkin;
          	this._placeholderFocusSkin = this.placeholderFocusSkin;
          	this._underlineSkin = this.underlineSkin;
          	this._underlineFocusSkin = this.underlineFocusSkin;
		  	konymp.logger.info("Exiting constructor of component", konymp.logger.FUNCTION_EXIT);
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
          	konymp.logger.info("Entered initGettersSetters function of component", konymp.logger.FUNCTION_ENTRY);
          	defineSetter(this, "maxTextLength", function(val) {
        konymp.logger.trace("----------Entering maxTextLength Setter---------", konymp.logger.FUNCTION_ENTRY);
        	if(!isNaN(val)&& val>0){
              this.view.txtBoxComponent.maxTextLength = val;
            }
            else{
              throw {error:2100,message:'wrong value passed to maxTextLength of animated Text Field'};
            }
        konymp.logger.trace("----------Exiting maxTextLength Setter---------", konymp.logger.FUNCTION_EXIT);
      });
      defineGetter(this, "maxTextLength", function() {
        konymp.logger.trace("----------Entering maxTextLength Getter---------", konymp.logger.FUNCTION_ENTRY);
        konymp.logger.trace("----------Exiting maxTextLength Getter---------", konymp.logger.FUNCTION_EXIT);
        return this.view.txtBoxComponent.maxTextLength;
      });
          	konymp.logger.info("Exiting initGettersSetters function of component", konymp.logger.FUNCTION_EXIT);
		},
      
      	preshow: function(){
		  	//#ifdef CHANNEL_CONDITION_web
			this.view.lblPlaceholder.padding = [2, 0, 0, 0];
			this.view.txtBoxComponent.padding = [2, 0, 0, 0];
			//#endif

			//#ifdef CHANNEL_CONDITION_native
			this.view.lblPlaceholder.padding = [2, 0, 0, 2];
			this.view.txtBoxComponent.padding = [2, 0, 0, 2];
			//#endif
		  
          	if(this.view.txtBoxComponent.text !== null && this.view.txtBoxComponent.text !== ""){
              	this.view.lblPlaceholder.skin = this.placeholderFocusSkin;
			  
			  	//#ifdef CHANNEL_CONDITION_web
				this.view.lblPlaceholder.top = "-30%";
				//#endif

				//#ifdef CHANNEL_CONDITION_native
				this.view.lblPlaceholder.top = "-70%";
				//#endif
			  
              	this.view.lblPlaceholder.width = "90%";
              	this.view.lblUnderline.height = "5%";
          		this.view.lblUnderline.skin = this.underlineFocusSkin;
              	this.view.lblPlaceholder.top = "-30%";
            }
        },
      
      	animateComponent: function(obj) {
          	konymp.logger.info("Entered animateComponent function of component", konymp.logger.FUNCTION_ENTRY);
          	obj.animate(
    			kony.ui.createAnimation({
        		"100": {
				  
				  	//#ifdef CHANNEL_CONDITION_web
					"top": "-30%",
					//#endif
				  
				  	//#ifdef CHANNEL_CONDITION_native
            		"top": "-50%",	  
					//#endif
				  
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.25
    			}, {
       				"animationEnd": this.changeSkins(obj, "animate")
    			}
            );
          	konymp.logger.info("Exiting animateComponent function of component", konymp.logger.FUNCTION_EXIT);
        },
      
      	changeSkins: function(obj, animateVal){
          	konymp.logger.info("Entered changeSkins function of component", konymp.logger.FUNCTION_ENTRY);	
		  	if(animateVal  === "animate"){
          		obj.skin = this._placeholderFocusSkin;
			  	
			  	//#ifdef CHANNEL_CONDITION_web
				obj.padding = [2, 0, 0, 0];
				//#endif

				//#ifdef CHANNEL_CONDITION_native
				obj.padding = [2, 0, 0, 2];
				//#endif
              	obj.width = "90%";
          		this.view.txtBoxComponent.setFocus(true);
          		this.view.lblUnderline.height = "1dp";
          		this.view.lblUnderline.skin = this._underlineFocusSkin;
            }
          	else{
			  
              	obj.skin = this._placeholderSkin;
              	obj.width = "100%";
          		this.view.lblUnderline.height = "1dp";
              	this.view.lblPlaceholder.setFocus(true);
          		this.view.lblUnderline.skin = this._underlineSkin;
            }
          	this.view.forceLayout();
          	konymp.logger.info("Exiting changeSkins function of component", konymp.logger.FUNCTION_EXIT);
        },
      
		onDone: function(obj){
          	konymp.logger.info("Entered onDone function of component", konymp.logger.FUNCTION_ENTRY);          	if(this.onTextBoxDone !== undefined && this.onTextBoxDone !== null){
          		this.onTextBoxDone();
            }
          	else{
              	if(this.view.txtBoxComponent.text === null || this.view.txtBoxComponent.text === ""){
          			obj.animate(
    					kony.ui.createAnimation({
        					"100": {
            				"top": "0%",
            				"stepConfig": {
               					"timingFunction": kony.anim.EASE
            				},
						}
    					}), {
        					"delay": 0,
        					"iterationCount": 1,
        					"fillMode": kony.anim.FILL_MODE_FORWARDS,
        					"duration": 0.25
    					}, {
       						"animationEnd": this.changeSkins(obj, "reverse")
    					}
                	);
            	}
            }
          	konymp.logger.info("Exiting onDone function of component", konymp.logger.FUNCTION_EXIT);
     	},
      
      	getText : function(){
          	konymp.logger.info("Entered getText API of component", konymp.logger.FUNCTION_ENTRY);
      		konymp.logger.info("Exiting getText API of component", konymp.logger.FUNCTION_EXIT);
          	return this.view.txtBoxComponent.text;
    	}
	};
});
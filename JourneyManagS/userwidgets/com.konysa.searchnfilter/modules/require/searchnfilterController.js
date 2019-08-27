define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._isSearchBoxVisible=false;
      this._isFilterBoxVisible=false;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
defineGetter(this, "selectedIndices", function() {
            return this.view.segTrackingPoint.selectedIndices;
});
    },
    
    showSearchBox:function(){
      var self=this;
      this.view.flxSearchRoot.setVisibility(true);
      this.view.forceLayout();
      return;
      var transformProp1 = kony.ui.makeAffineTransform();
      transformProp1.scale(0, 0);
      var transformProp2 = kony.ui.makeAffineTransform();
      transformProp2.scale(1, 1);
      var animDefinitionOne = {
        0: {
          "anchorPoint": {
            "x": 0,
            "y": 0
          },
          "transform": transformProp1
        },
        100: {
          "anchorPoint": {
            "x": 0,
            "y": 0
          },
          "transform": transformProp2
        }
      };
      var animDefinition = kony.ui.createAnimation(animDefinitionOne);
      try{
        this.view.flxSearchRoot.animate(animDefinition,{
          "duration": 0.1,
          "iterationCount": 1,
          "delay": 0,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        },{
          "animationEnd":function(){
            //self._isTextBoxEnabled=true;
            //self.view.txtBox.setFocus(true);
          },
          "animationStart":function(){
            self.view.flxSearchRoot.setVisibility(true);
            self.view.forceLayout();
          }
        });
      }catch(excp){
        debugger;
      }

    },
    hideSearchBox:function(){
      this.view.flxSearchRoot.setVisibility(false);
      this.view.forceLayout();
      return;
      var self=this;
      var transformProp1 = kony.ui.makeAffineTransform();
      transformProp1.scale(1, 1);
      var transformProp2 = kony.ui.makeAffineTransform();
      transformProp2.scale(0, 0);
      var animDefinitionOne = {
        0: {
          "anchorPoint": {
            "x": 0,
            "y": 0
          },
          "transform": transformProp1
        },
        100: {
          "anchorPoint": {
            "x": 0,
            "y": 0
          },
          "transform": transformProp2
        }
      };
      var animDefinition = kony.ui.createAnimation(animDefinitionOne);
      try{
        this.view.flxSearchRoot.animate(animDefinition,{
          "duration": 0.1,
          "iterationCount": 1,
          "delay": 0,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        },{
          "animationEnd":function(){
            self.view.flxSearchRoot.setVisibility(false);
            self.view.forceLayout();
            //self._isTextBoxEnabled=true;
            //self.view.txtBox.setFocus(true);
          },
          "animationStart":function(){
            //self.view.flxSearchRoot.setVisibility(true);
            //self.view.forceLayout();
          }
        });
      }catch(excp){
        debugger;
      }

    
    },
    showFilterBox:function(){
      var self=this;
      this.view.flxFilterRoot.setVisibility(true);
      this.view.forceLayout();
      return;
      var transformProp1 = kony.ui.makeAffineTransform();
      transformProp1.scale(0, 0);
      var transformProp2 = kony.ui.makeAffineTransform();
      transformProp2.scale(1, 1);
      var animDefinitionOne = {
        0: {
          "anchorPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "transform": transformProp1
        },
        100: {
          "anchorPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "transform": transformProp2
        }
      };
      var animDefinition = kony.ui.createAnimation(animDefinitionOne);
      try{
        this.view.flxFilterRoot.animate(animDefinition,{
          "duration": 0.1,
          "iterationCount": 1,
          "delay": 0,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        },{
          "animationEnd":function(){
            //self._isTextBoxEnabled=true;
            //self.view.txtBox.setFocus(true);
          },
          "animationStart":function(){
            self.view.flxFilterRoot.setVisibility(true);
            self.view.forceLayout();
          }
        });
      }catch(excp){
        debugger;
      }
    },
    hideFilterBox:function(){
      this.view.flxFilterRoot.setVisibility(false);
      this.view.forceLayout();
      return;
      var self=this;
      var transformProp1 = kony.ui.makeAffineTransform();
      transformProp1.scale(1, 1);
      var transformProp2 = kony.ui.makeAffineTransform();
      transformProp2.scale(0, 0);
      var animDefinitionOne = {
        0: {
          "anchorPoint": {
            "x": 0,
            "y": 0
          },
          "transform": transformProp1
        },
        100: {
          "anchorPoint": {
            "x": 0,
            "y": 0
          },
          "transform": transformProp2
        }
      };
      var animDefinition = kony.ui.createAnimation(animDefinitionOne);
      try{
      
        this.view.flxFilterRoot.animate(animDefinition,{
          "duration": 0.1,
          "iterationCount": 1,
          "delay": 0,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        },{
          "animationEnd":function(){
            self.view.flxSearchRoot.setVisibility(false);
            self.view.forceLayout();
            //self._isTextBoxEnabled=true;
            //self.view.txtBox.setFocus(true);
          },
          "animationStart":function(){
            //self.view.flxSearchRoot.setVisibility(true);
            //self.view.forceLayout();
          }
        });
      }catch(excp){
        debugger;
      }
    },
   /* onRowClickOfSegment : function()
    {
    kony.print("in onRowClickOfSegment");
     var data1=this.view.segTrackingPoint.data;
     var rowIndex=this.view.segTrackingPoint.selectedIndices;
      kony.print("data1 ::"+JSON.stringify(data1));
      kony.print("rowIndex"+ rowIndex);
      //data1[rowIndex]["imgSelection"]="enteredcheckpoint.png";
      //this.view.segTrackingPoint.setData(data1);
    
  }*/
      };
});
define(function() {
  
  constants.DEFAULT_TOTAL_COUNT = 0;
  constants.DEFAULT_GLOBAL_VAL = "KAR";
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._arrayData = [];
      this._isSelected = false;
    },
    initGettersSetters: function() {
      defineGetter(this, "arrayData", function() {
             //   konymp.logger.trace("----------Entering totCount Getter---------", konymp.logger.FUNCTION_ENTRY);
        return this._arrayData;
      });
      defineSetter(this, "arrayData", function(val) {
        //konymp.logger.trace("----------Entering totCount Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._arrayData = val;
      });
      defineGetter(this, "isSelected", function() {
             //   konymp.logger.trace("----------Entering totCount Getter---------", konymp.logger.FUNCTION_ENTRY);
        return this._isSelected;
      });
      defineSetter(this, "isSelected", function(val) {
        //konymp.logger.trace("----------Entering totCount Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._isSelected = val;
      });
		},
      
      // normal internal helper funcation that are used  for logics.
      // we can also define the functions for events and methods
          setValToLabel : function(){
           
     },
  
      preshow:function(){
        if(filterTable.length == 0){
          var arrayComponent = [];
          //alert(this._arrayData.data)
          for(var i in this._arrayData.data){
            arrayComponent.push(this._arrayData.data[i].list)
          }
          var leftPos = "4%";
          var topPos = "10dp";
          for(var j in arrayComponent){
            if(j%2 ==0){
              leftPos = "4%";
              topPos = (10+(j/2)*35)+"dp";
            }else{
              leftPos = "52%";
            }
           // var textButton = totfilterProjectType[i];
            var btn1 = new kony.ui.Button({
              "focusSkin": "skinBtnFocus",
              "height": "25dp",
              "id": "btn"+j,
              "isVisible": true,
              "left": leftPos,
              "onClick":  this.toggleSelection.bind(this),//controller.AS_Button_c92b9d839443404dad0510ffaaf10820,
              "skin": "skinBtnNormal",
              "text": arrayComponent[j],
              "top": topPos,
              "width": "44%",
              "zIndex": 1
          }, {
              "contentAlignment": constants.CONTENT_ALIGN_CENTER,
              "displayText": true,
              "padding": [0, 0, 0, 0],
              "paddingInPixel": false
          },{});
            this.view.flexButton.add(btn1);
           // this.view.filterSelect.add()          
          }

        }else{
          //alert("Hi")
        }
        
        
      },
    resetData:function(arrayData){
      //this.view.flexButton.removeAll();
      //alert(arrayData);
      var leftPos = "4%";
          var topPos = "10dp";
          for(var j in arrayData){
            if(j%2 ==0){
              leftPos = "4%";
              topPos = (10+(j/2)*35)+"dp";
            }else{
              leftPos = "52%";
            }
           // var textButton = totfilterProjectType[i];
            var btn1 = new kony.ui.Button({
              "focusSkin": "skinBtnFocus",
              "height": "25dp",
              "id": "btn"+j,
              "isVisible": true,
              "left": leftPos,
              "onClick":  this.toggleSelection.bind(this),//controller.AS_Button_c92b9d839443404dad0510ffaaf10820,
              "skin": "skinBtnNormal",
              "text": arrayData[j],
              "top": topPos,
              "width": "44%",
              "zIndex": 1
          }, {
              "contentAlignment": constants.CONTENT_ALIGN_CENTER,
              "displayText": true,
              "padding": [0, 0, 0, 0],
              "paddingInPixel": false
          },{});
            this.view.flexButton.add(btn1);
           // this.view.filterSelect.add()          
          }
      //alert("Hi");
      //this.preshow();
    },
      toggleSelection:function(evOb){
        if(evOb.skin == "skinBtnNormal"){
          filterTable.push(evOb.text);
          evOb.skin = "skinBtnFocus";
        }else{
          filterTable.splice(filterTable.indexOf(evOb.text), 1);
          //alert(filterTable.indexOf(evOb.text));
          evOb.skin = "skinBtnNormal";
        }
        //var navObj = new kony.mvc.Navigation("frmFilter");
        //navObj.navigate();
        //alert(this)
        this._isSelected = false;
        //alert(filterTable.length)
        if(filterTable.length != 0){
          WOFORMLIST.btnApplyFilter.skin = "skinActive";
        }
        
        
        
      }
	};
});
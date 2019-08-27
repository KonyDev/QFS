define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		journey_id_fk : function(val, state){
			state['journey_id_fk'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		passenger_company : function(val, state){
			state['passenger_company'] = val;
		},
		passenger_mobile : function(val, state){
			state['passenger_mobile'] = val;
		},
		passenger_name : function(val, state){
			state['passenger_name'] = val;
		},
		row_id_pk : function(val, state){
			state['row_id_pk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function journey_passengers_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.journey_id_fk = defaultValues?(defaultValues["journey_id_fk"]?defaultValues["journey_id_fk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.passenger_company = defaultValues?(defaultValues["passenger_company"]?defaultValues["passenger_company"]:null):null;
			privateState.passenger_mobile = defaultValues?(defaultValues["passenger_mobile"]?defaultValues["passenger_mobile"]:null):null;
			privateState.passenger_name = defaultValues?(defaultValues["passenger_name"]?defaultValues["passenger_name"]:null):null;
			privateState.row_id_pk = defaultValues?(defaultValues["row_id_pk"]?defaultValues["row_id_pk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createddatetime" : {
					get : function(){return privateState.createddatetime},
					set : function(val){
						setterFunctions['createddatetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_id_fk" : {
					get : function(){return privateState.journey_id_fk},
					set : function(val){
						setterFunctions['journey_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastupdatedby" : {
					get : function(){return privateState.lastupdatedby},
					set : function(val){
						setterFunctions['lastupdatedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastupdateddatetime" : {
					get : function(){return privateState.lastupdateddatetime},
					set : function(val){
						setterFunctions['lastupdateddatetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"passenger_company" : {
					get : function(){return privateState.passenger_company},
					set : function(val){
						setterFunctions['passenger_company'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"passenger_mobile" : {
					get : function(){return privateState.passenger_mobile},
					set : function(val){
						setterFunctions['passenger_mobile'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"passenger_name" : {
					get : function(){return privateState.passenger_name},
					set : function(val){
						setterFunctions['passenger_name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"row_id_pk" : {
					get : function(){return privateState.row_id_pk},
					set : function(val){throw Error("row_id_pk cannot be changed."); },
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(journey_passengers_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(journey_passengers_tbl);
	
	var registerValidatorBackup = journey_passengers_tbl.registerValidator;
	
	journey_passengers_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( journey_passengers_tbl.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
	];
	
	journey_passengers_tbl.relations = relations;
	
	journey_passengers_tbl.prototype.isValid = function(){
		return journey_passengers_tbl.isValid(this);
	};
	
	journey_passengers_tbl.prototype.objModelName = "journey_passengers_tbl";
	
	return journey_passengers_tbl;
});
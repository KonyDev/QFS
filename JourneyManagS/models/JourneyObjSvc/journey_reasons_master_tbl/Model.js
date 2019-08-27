define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		journey_reason : function(val, state){
			state['journey_reason'] = val;
		},
		journey_reason_id_pk : function(val, state){
			state['journey_reason_id_pk'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function journey_reasons_master_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.journey_reason = defaultValues?(defaultValues["journey_reason"]?defaultValues["journey_reason"]:null):null;
			privateState.journey_reason_id_pk = defaultValues?(defaultValues["journey_reason_id_pk"]?defaultValues["journey_reason_id_pk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
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
				"journey_reason" : {
					get : function(){return privateState.journey_reason},
					set : function(val){
						setterFunctions['journey_reason'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_reason_id_pk" : {
					get : function(){return privateState.journey_reason_id_pk},
					set : function(val){throw Error("journey_reason_id_pk cannot be changed."); },
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
	BaseModel.isParentOf(journey_reasons_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(journey_reasons_master_tbl);
	
	var registerValidatorBackup = journey_reasons_master_tbl.registerValidator;
	
	journey_reasons_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( journey_reasons_master_tbl.isValid(this, propName, val) ){
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
				{
					name : "journey_reasons_master_tbl_journey_tbl",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_reason_id_pk",
							targetField : "journey_reason_id_fk"
						},
					]
				},
	];
	
	journey_reasons_master_tbl.relations = relations;
	
	journey_reasons_master_tbl.prototype.isValid = function(){
		return journey_reasons_master_tbl.isValid(this);
	};
	
	journey_reasons_master_tbl.prototype.objModelName = "journey_reasons_master_tbl";
	
	return journey_reasons_master_tbl;
});
define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		journeystatus_code_pk : function(val, state){
			state['journeystatus_code_pk'] = val;
		},
		journeystatus_desc : function(val, state){
			state['journeystatus_desc'] = val;
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
	function journeystatus_codes_master_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.journeystatus_code_pk = defaultValues?(defaultValues["journeystatus_code_pk"]?defaultValues["journeystatus_code_pk"]:null):null;
			privateState.journeystatus_desc = defaultValues?(defaultValues["journeystatus_desc"]?defaultValues["journeystatus_desc"]:null):null;
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
				"journeystatus_code_pk" : {
					get : function(){return privateState.journeystatus_code_pk},
					set : function(val){throw Error("journeystatus_code_pk cannot be changed."); },
					enumerable : true,
				},
				"journeystatus_desc" : {
					get : function(){return privateState.journeystatus_desc},
					set : function(val){
						setterFunctions['journeystatus_desc'].call(this,val,privateState);
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
	BaseModel.isParentOf(journeystatus_codes_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(journeystatus_codes_master_tbl);
	
	var registerValidatorBackup = journeystatus_codes_master_tbl.registerValidator;
	
	journeystatus_codes_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( journeystatus_codes_master_tbl.isValid(this, propName, val) ){
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
					name : "journeystatus_codes_master_tbl_journey_tbl",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journeystatus_code_pk",
							targetField : "journeystatus_code_fk"
						},
					]
				},
	];
	
	journeystatus_codes_master_tbl.relations = relations;
	
	journeystatus_codes_master_tbl.prototype.isValid = function(){
		return journeystatus_codes_master_tbl.isValid(this);
	};
	
	journeystatus_codes_master_tbl.prototype.objModelName = "journeystatus_codes_master_tbl";
	
	return journeystatus_codes_master_tbl;
});
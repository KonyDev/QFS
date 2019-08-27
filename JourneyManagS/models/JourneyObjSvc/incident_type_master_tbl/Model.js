define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		incident_type_desc : function(val, state){
			state['incident_type_desc'] = val;
		},
		incident_type_id_pk : function(val, state){
			state['incident_type_id_pk'] = val;
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
	function incident_type_master_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.incident_type_desc = defaultValues?(defaultValues["incident_type_desc"]?defaultValues["incident_type_desc"]:null):null;
			privateState.incident_type_id_pk = defaultValues?(defaultValues["incident_type_id_pk"]?defaultValues["incident_type_id_pk"]:null):null;
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
				"incident_type_desc" : {
					get : function(){return privateState.incident_type_desc},
					set : function(val){
						setterFunctions['incident_type_desc'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"incident_type_id_pk" : {
					get : function(){return privateState.incident_type_id_pk},
					set : function(val){throw Error("incident_type_id_pk cannot be changed."); },
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
	BaseModel.isParentOf(incident_type_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(incident_type_master_tbl);
	
	var registerValidatorBackup = incident_type_master_tbl.registerValidator;
	
	incident_type_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( incident_type_master_tbl.isValid(this, propName, val) ){
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
					name : "incident_type_master_tbl_incident_notification_tbl",
					targetObject : "incident_notification_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "incident_type_id_pk",
							targetField : "incident_type_id_fk"
						},
					]
				},
	];
	
	incident_type_master_tbl.relations = relations;
	
	incident_type_master_tbl.prototype.isValid = function(){
		return incident_type_master_tbl.isValid(this);
	};
	
	incident_type_master_tbl.prototype.objModelName = "incident_type_master_tbl";
	
	return incident_type_master_tbl;
});
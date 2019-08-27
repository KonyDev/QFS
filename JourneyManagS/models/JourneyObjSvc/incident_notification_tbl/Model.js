define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		admin_emp_id_responded_fk : function(val, state){
			state['admin_emp_id_responded_fk'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		incident_id_pk : function(val, state){
			state['incident_id_pk'] = val;
		},
		incident_other_text : function(val, state){
			state['incident_other_text'] = val;
		},
		incident_response_id_fk : function(val, state){
			state['incident_response_id_fk'] = val;
		},
		incident_response_text : function(val, state){
			state['incident_response_text'] = val;
		},
		incident_status_id_fk : function(val, state){
			state['incident_status_id_fk'] = val;
		},
		incident_type_id_fk : function(val, state){
			state['incident_type_id_fk'] = val;
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
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function incident_notification_tbl(defaultValues){
		var privateState = {};
			privateState.admin_emp_id_responded_fk = defaultValues?(defaultValues["admin_emp_id_responded_fk"]?defaultValues["admin_emp_id_responded_fk"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.incident_id_pk = defaultValues?(defaultValues["incident_id_pk"]?defaultValues["incident_id_pk"]:null):null;
			privateState.incident_other_text = defaultValues?(defaultValues["incident_other_text"]?defaultValues["incident_other_text"]:null):null;
			privateState.incident_response_id_fk = defaultValues?(defaultValues["incident_response_id_fk"]?defaultValues["incident_response_id_fk"]:null):null;
			privateState.incident_response_text = defaultValues?(defaultValues["incident_response_text"]?defaultValues["incident_response_text"]:null):null;
			privateState.incident_status_id_fk = defaultValues?(defaultValues["incident_status_id_fk"]?defaultValues["incident_status_id_fk"]:null):null;
			privateState.incident_type_id_fk = defaultValues?(defaultValues["incident_type_id_fk"]?defaultValues["incident_type_id_fk"]:null):null;
			privateState.journey_id_fk = defaultValues?(defaultValues["journey_id_fk"]?defaultValues["journey_id_fk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"admin_emp_id_responded_fk" : {
					get : function(){return privateState.admin_emp_id_responded_fk},
					set : function(val){
						setterFunctions['admin_emp_id_responded_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
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
				"incident_id_pk" : {
					get : function(){return privateState.incident_id_pk},
					set : function(val){throw Error("incident_id_pk cannot be changed."); },
					enumerable : true,
				},
				"incident_other_text" : {
					get : function(){return privateState.incident_other_text},
					set : function(val){
						setterFunctions['incident_other_text'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"incident_response_id_fk" : {
					get : function(){return privateState.incident_response_id_fk},
					set : function(val){
						setterFunctions['incident_response_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"incident_response_text" : {
					get : function(){return privateState.incident_response_text},
					set : function(val){
						setterFunctions['incident_response_text'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"incident_status_id_fk" : {
					get : function(){return privateState.incident_status_id_fk},
					set : function(val){
						setterFunctions['incident_status_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"incident_type_id_fk" : {
					get : function(){return privateState.incident_type_id_fk},
					set : function(val){
						setterFunctions['incident_type_id_fk'].call(this,val,privateState);
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
	BaseModel.isParentOf(incident_notification_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(incident_notification_tbl);
	
	var registerValidatorBackup = incident_notification_tbl.registerValidator;
	
	incident_notification_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( incident_notification_tbl.isValid(this, propName, val) ){
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
	
	incident_notification_tbl.relations = relations;
	
	incident_notification_tbl.prototype.isValid = function(){
		return incident_notification_tbl.isValid(this);
	};
	
	incident_notification_tbl.prototype.objModelName = "incident_notification_tbl";
	
	return incident_notification_tbl;
});
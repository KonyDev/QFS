define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		country_id_fk : function(val, state){
			state['country_id_fk'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		group_id_fk : function(val, state){
			state['group_id_fk'] = val;
		},
		language_id_fk : function(val, state){
			state['language_id_fk'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		region_id_fk : function(val, state){
			state['region_id_fk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		user_email_id : function(val, state){
			state['user_email_id'] = val;
		},
		user_emp_id_pk : function(val, state){
			state['user_emp_id_pk'] = val;
		},
		user_firstname : function(val, state){
			state['user_firstname'] = val;
		},
		user_lastname : function(val, state){
			state['user_lastname'] = val;
		},
		user_phone1 : function(val, state){
			state['user_phone1'] = val;
		},
	};
	
	
	//Create the Model Class
	function user_tbl(defaultValues){
		var privateState = {};
			privateState.country_id_fk = defaultValues?(defaultValues["country_id_fk"]?defaultValues["country_id_fk"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.group_id_fk = defaultValues?(defaultValues["group_id_fk"]?defaultValues["group_id_fk"]:null):null;
			privateState.language_id_fk = defaultValues?(defaultValues["language_id_fk"]?defaultValues["language_id_fk"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.region_id_fk = defaultValues?(defaultValues["region_id_fk"]?defaultValues["region_id_fk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.user_email_id = defaultValues?(defaultValues["user_email_id"]?defaultValues["user_email_id"]:null):null;
			privateState.user_emp_id_pk = defaultValues?(defaultValues["user_emp_id_pk"]?defaultValues["user_emp_id_pk"]:null):null;
			privateState.user_firstname = defaultValues?(defaultValues["user_firstname"]?defaultValues["user_firstname"]:null):null;
			privateState.user_lastname = defaultValues?(defaultValues["user_lastname"]?defaultValues["user_lastname"]:null):null;
			privateState.user_phone1 = defaultValues?(defaultValues["user_phone1"]?defaultValues["user_phone1"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"country_id_fk" : {
					get : function(){return privateState.country_id_fk},
					set : function(val){
						setterFunctions['country_id_fk'].call(this,val,privateState);
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
				"group_id_fk" : {
					get : function(){return privateState.group_id_fk},
					set : function(val){
						setterFunctions['group_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"language_id_fk" : {
					get : function(){return privateState.language_id_fk},
					set : function(val){
						setterFunctions['language_id_fk'].call(this,val,privateState);
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
				"region_id_fk" : {
					get : function(){return privateState.region_id_fk},
					set : function(val){
						setterFunctions['region_id_fk'].call(this,val,privateState);
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
				"user_email_id" : {
					get : function(){return privateState.user_email_id},
					set : function(val){
						setterFunctions['user_email_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"user_emp_id_pk" : {
					get : function(){return privateState.user_emp_id_pk},
					set : function(val){throw Error("user_emp_id_pk cannot be changed."); },
					enumerable : true,
				},
				"user_firstname" : {
					get : function(){return privateState.user_firstname},
					set : function(val){
						setterFunctions['user_firstname'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"user_lastname" : {
					get : function(){return privateState.user_lastname},
					set : function(val){
						setterFunctions['user_lastname'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"user_phone1" : {
					get : function(){return privateState.user_phone1},
					set : function(val){
						setterFunctions['user_phone1'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(user_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(user_tbl);
	
	var registerValidatorBackup = user_tbl.registerValidator;
	
	user_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( user_tbl.isValid(this, propName, val) ){
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
					name : "user_tbl_checkpoints_tbl",
					targetObject : "checkpoints_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "checkpoint_reported_by_fk"
						},
					]
				},
				{
					name : "user_tbl_incident_notification_tbl",
					targetObject : "incident_notification_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "admin_emp_id_responded_fk"
						},
					]
				},
				{
					name : "user_tbl_journey_tbl",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "user_emp_id_fk"
						},
					]
				},
				{
					name : "user_tbl_journey_tbl_1",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "journey_created_by_fk"
						},
					]
				},
				{
					name : "user_tbl_journey_tbl_2",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "journey_last_updated_by"
						},
					]
				},
				{
					name : "user_tbl_notifications_tbl",
					targetObject : "notifications_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "notification_sent_by_fk"
						},
					]
				},
				{
					name : "user_tbl_vehicle_tbl",
					targetObject : "vehicle_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "user_emp_id_pk",
							targetField : "user_emp_id_fk"
						},
					]
				},
	];
	
	user_tbl.relations = relations;
	
	user_tbl.prototype.isValid = function(){
		return user_tbl.isValid(this);
	};
	
	user_tbl.prototype.objModelName = "user_tbl";
	
	return user_tbl;
});
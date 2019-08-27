define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		checkin_interval_row_id_fk : function(val, state){
			state['checkin_interval_row_id_fk'] = val;
		},
		checkin_type_id_fk : function(val, state){
			state['checkin_type_id_fk'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		journeystatus_code_fk : function(val, state){
			state['journeystatus_code_fk'] = val;
		},
		journey_actual_arrival_datetime : function(val, state){
			state['journey_actual_arrival_datetime'] = val;
		},
		journey_actual_departure_datetime : function(val, state){
			state['journey_actual_departure_datetime'] = val;
		},
		journey_arrivalpoint : function(val, state){
			state['journey_arrivalpoint'] = val;
		},
		journey_arrivalpoint_lat : function(val, state){
			state['journey_arrivalpoint_lat'] = val;
		},
		journey_arrivalpoint_lon : function(val, state){
			state['journey_arrivalpoint_lon'] = val;
		},
		journey_created_by_fk : function(val, state){
			state['journey_created_by_fk'] = val;
		},
		journey_departurepoint_lat : function(val, state){
			state['journey_departurepoint_lat'] = val;
		},
		journey_departurepoint_lon : function(val, state){
			state['journey_departurepoint_lon'] = val;
		},
		journey_departure_point : function(val, state){
			state['journey_departure_point'] = val;
		},
		journey_expected_arrival_datetime : function(val, state){
			state['journey_expected_arrival_datetime'] = val;
		},
		journey_expected_departure_datetime : function(val, state){
			state['journey_expected_departure_datetime'] = val;
		},
		journey_id_pk : function(val, state){
			state['journey_id_pk'] = val;
		},
		journey_is_checkpoint_enabled : function(val, state){
			state['journey_is_checkpoint_enabled'] = val;
		},
		journey_last_updated_by : function(val, state){
			state['journey_last_updated_by'] = val;
		},
		journey_onward_journey_id : function(val, state){
			state['journey_onward_journey_id'] = val;
		},
		journey_radio : function(val, state){
			state['journey_radio'] = val;
		},
		journey_reason_id_fk : function(val, state){
			state['journey_reason_id_fk'] = val;
		},
		journey_satellite : function(val, state){
			state['journey_satellite'] = val;
		},
		journey_selected_vehicle_id_fk : function(val, state){
			state['journey_selected_vehicle_id_fk'] = val;
		},
		journey_supervisor_emp_id : function(val, state){
			state['journey_supervisor_emp_id'] = val;
		},
		journey_supervisor_name : function(val, state){
			state['journey_supervisor_name'] = val;
		},
		journey_supervisor_phone : function(val, state){
			state['journey_supervisor_phone'] = val;
		},
		journey_trackingpoint_lat : function(val, state){
			state['journey_trackingpoint_lat'] = val;
		},
		journey_trackingpoint_lon : function(val, state){
			state['journey_trackingpoint_lon'] = val;
		},
		journey_trackingpoint_name : function(val, state){
			state['journey_trackingpoint_name'] = val;
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
		user_emp_id_fk : function(val, state){
			state['user_emp_id_fk'] = val;
		},
	};
	
	
	//Create the Model Class
	function journey_tbl(defaultValues){
		var privateState = {};
			privateState.checkin_interval_row_id_fk = defaultValues?(defaultValues["checkin_interval_row_id_fk"]?defaultValues["checkin_interval_row_id_fk"]:null):null;
			privateState.checkin_type_id_fk = defaultValues?(defaultValues["checkin_type_id_fk"]?defaultValues["checkin_type_id_fk"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.journeystatus_code_fk = defaultValues?(defaultValues["journeystatus_code_fk"]?defaultValues["journeystatus_code_fk"]:null):null;
			privateState.journey_actual_arrival_datetime = defaultValues?(defaultValues["journey_actual_arrival_datetime"]?defaultValues["journey_actual_arrival_datetime"]:null):null;
			privateState.journey_actual_departure_datetime = defaultValues?(defaultValues["journey_actual_departure_datetime"]?defaultValues["journey_actual_departure_datetime"]:null):null;
			privateState.journey_arrivalpoint = defaultValues?(defaultValues["journey_arrivalpoint"]?defaultValues["journey_arrivalpoint"]:null):null;
			privateState.journey_arrivalpoint_lat = defaultValues?(defaultValues["journey_arrivalpoint_lat"]?defaultValues["journey_arrivalpoint_lat"]:null):null;
			privateState.journey_arrivalpoint_lon = defaultValues?(defaultValues["journey_arrivalpoint_lon"]?defaultValues["journey_arrivalpoint_lon"]:null):null;
			privateState.journey_created_by_fk = defaultValues?(defaultValues["journey_created_by_fk"]?defaultValues["journey_created_by_fk"]:null):null;
			privateState.journey_departurepoint_lat = defaultValues?(defaultValues["journey_departurepoint_lat"]?defaultValues["journey_departurepoint_lat"]:null):null;
			privateState.journey_departurepoint_lon = defaultValues?(defaultValues["journey_departurepoint_lon"]?defaultValues["journey_departurepoint_lon"]:null):null;
			privateState.journey_departure_point = defaultValues?(defaultValues["journey_departure_point"]?defaultValues["journey_departure_point"]:null):null;
			privateState.journey_expected_arrival_datetime = defaultValues?(defaultValues["journey_expected_arrival_datetime"]?defaultValues["journey_expected_arrival_datetime"]:null):null;
			privateState.journey_expected_departure_datetime = defaultValues?(defaultValues["journey_expected_departure_datetime"]?defaultValues["journey_expected_departure_datetime"]:null):null;
			privateState.journey_id_pk = defaultValues?(defaultValues["journey_id_pk"]?defaultValues["journey_id_pk"]:null):null;
			privateState.journey_is_checkpoint_enabled = defaultValues?(defaultValues["journey_is_checkpoint_enabled"]?defaultValues["journey_is_checkpoint_enabled"]:null):null;
			privateState.journey_last_updated_by = defaultValues?(defaultValues["journey_last_updated_by"]?defaultValues["journey_last_updated_by"]:null):null;
			privateState.journey_onward_journey_id = defaultValues?(defaultValues["journey_onward_journey_id"]?defaultValues["journey_onward_journey_id"]:null):null;
			privateState.journey_radio = defaultValues?(defaultValues["journey_radio"]?defaultValues["journey_radio"]:null):null;
			privateState.journey_reason_id_fk = defaultValues?(defaultValues["journey_reason_id_fk"]?defaultValues["journey_reason_id_fk"]:null):null;
			privateState.journey_satellite = defaultValues?(defaultValues["journey_satellite"]?defaultValues["journey_satellite"]:null):null;
			privateState.journey_selected_vehicle_id_fk = defaultValues?(defaultValues["journey_selected_vehicle_id_fk"]?defaultValues["journey_selected_vehicle_id_fk"]:null):null;
			privateState.journey_supervisor_emp_id = defaultValues?(defaultValues["journey_supervisor_emp_id"]?defaultValues["journey_supervisor_emp_id"]:null):null;
			privateState.journey_supervisor_name = defaultValues?(defaultValues["journey_supervisor_name"]?defaultValues["journey_supervisor_name"]:null):null;
			privateState.journey_supervisor_phone = defaultValues?(defaultValues["journey_supervisor_phone"]?defaultValues["journey_supervisor_phone"]:null):null;
			privateState.journey_trackingpoint_lat = defaultValues?(defaultValues["journey_trackingpoint_lat"]?defaultValues["journey_trackingpoint_lat"]:null):null;
			privateState.journey_trackingpoint_lon = defaultValues?(defaultValues["journey_trackingpoint_lon"]?defaultValues["journey_trackingpoint_lon"]:null):null;
			privateState.journey_trackingpoint_name = defaultValues?(defaultValues["journey_trackingpoint_name"]?defaultValues["journey_trackingpoint_name"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.user_emp_id_fk = defaultValues?(defaultValues["user_emp_id_fk"]?defaultValues["user_emp_id_fk"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"checkin_interval_row_id_fk" : {
					get : function(){return privateState.checkin_interval_row_id_fk},
					set : function(val){
						setterFunctions['checkin_interval_row_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkin_type_id_fk" : {
					get : function(){return privateState.checkin_type_id_fk},
					set : function(val){
						setterFunctions['checkin_type_id_fk'].call(this,val,privateState);
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
				"journeystatus_code_fk" : {
					get : function(){return privateState.journeystatus_code_fk},
					set : function(val){
						setterFunctions['journeystatus_code_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_actual_arrival_datetime" : {
					get : function(){return privateState.journey_actual_arrival_datetime},
					set : function(val){
						setterFunctions['journey_actual_arrival_datetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_actual_departure_datetime" : {
					get : function(){return privateState.journey_actual_departure_datetime},
					set : function(val){
						setterFunctions['journey_actual_departure_datetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_arrivalpoint" : {
					get : function(){return privateState.journey_arrivalpoint},
					set : function(val){
						setterFunctions['journey_arrivalpoint'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_arrivalpoint_lat" : {
					get : function(){return privateState.journey_arrivalpoint_lat},
					set : function(val){
						setterFunctions['journey_arrivalpoint_lat'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_arrivalpoint_lon" : {
					get : function(){return privateState.journey_arrivalpoint_lon},
					set : function(val){
						setterFunctions['journey_arrivalpoint_lon'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_created_by_fk" : {
					get : function(){return privateState.journey_created_by_fk},
					set : function(val){
						setterFunctions['journey_created_by_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_departurepoint_lat" : {
					get : function(){return privateState.journey_departurepoint_lat},
					set : function(val){
						setterFunctions['journey_departurepoint_lat'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_departurepoint_lon" : {
					get : function(){return privateState.journey_departurepoint_lon},
					set : function(val){
						setterFunctions['journey_departurepoint_lon'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_departure_point" : {
					get : function(){return privateState.journey_departure_point},
					set : function(val){
						setterFunctions['journey_departure_point'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_expected_arrival_datetime" : {
					get : function(){return privateState.journey_expected_arrival_datetime},
					set : function(val){
						setterFunctions['journey_expected_arrival_datetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_expected_departure_datetime" : {
					get : function(){return privateState.journey_expected_departure_datetime},
					set : function(val){
						setterFunctions['journey_expected_departure_datetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_id_pk" : {
					get : function(){return privateState.journey_id_pk},
					set : function(val){throw Error("journey_id_pk cannot be changed."); },
					enumerable : true,
				},
				"journey_is_checkpoint_enabled" : {
					get : function(){return privateState.journey_is_checkpoint_enabled},
					set : function(val){
						setterFunctions['journey_is_checkpoint_enabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_last_updated_by" : {
					get : function(){return privateState.journey_last_updated_by},
					set : function(val){
						setterFunctions['journey_last_updated_by'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_onward_journey_id" : {
					get : function(){return privateState.journey_onward_journey_id},
					set : function(val){
						setterFunctions['journey_onward_journey_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_radio" : {
					get : function(){return privateState.journey_radio},
					set : function(val){
						setterFunctions['journey_radio'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_reason_id_fk" : {
					get : function(){return privateState.journey_reason_id_fk},
					set : function(val){
						setterFunctions['journey_reason_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_satellite" : {
					get : function(){return privateState.journey_satellite},
					set : function(val){
						setterFunctions['journey_satellite'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_selected_vehicle_id_fk" : {
					get : function(){return privateState.journey_selected_vehicle_id_fk},
					set : function(val){
						setterFunctions['journey_selected_vehicle_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_supervisor_emp_id" : {
					get : function(){return privateState.journey_supervisor_emp_id},
					set : function(val){
						setterFunctions['journey_supervisor_emp_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_supervisor_name" : {
					get : function(){return privateState.journey_supervisor_name},
					set : function(val){
						setterFunctions['journey_supervisor_name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_supervisor_phone" : {
					get : function(){return privateState.journey_supervisor_phone},
					set : function(val){
						setterFunctions['journey_supervisor_phone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_trackingpoint_lat" : {
					get : function(){return privateState.journey_trackingpoint_lat},
					set : function(val){
						setterFunctions['journey_trackingpoint_lat'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_trackingpoint_lon" : {
					get : function(){return privateState.journey_trackingpoint_lon},
					set : function(val){
						setterFunctions['journey_trackingpoint_lon'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"journey_trackingpoint_name" : {
					get : function(){return privateState.journey_trackingpoint_name},
					set : function(val){
						setterFunctions['journey_trackingpoint_name'].call(this,val,privateState);
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
				"user_emp_id_fk" : {
					get : function(){return privateState.user_emp_id_fk},
					set : function(val){
						setterFunctions['user_emp_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(journey_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(journey_tbl);
	
	var registerValidatorBackup = journey_tbl.registerValidator;
	
	journey_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( journey_tbl.isValid(this, propName, val) ){
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
					name : "journey_tbl_checkpoints_tbl",
					targetObject : "checkpoints_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_id_pk",
							targetField : "journey_id_fk"
						},
					]
				},
				{
					name : "journey_tbl_incident_notification_tbl",
					targetObject : "incident_notification_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_id_pk",
							targetField : "journey_id_fk"
						},
					]
				},
				{
					name : "journey_tbl_journey_notif_map_tbl",
					targetObject : "journey_notif_map_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_id_pk",
							targetField : "journey_id_fk"
						},
					]
				},
				{
					name : "journey_tbl_journey_passengers_tbl",
					targetObject : "journey_passengers_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_id_pk",
							targetField : "journey_id_fk"
						},
					]
				},
				{
					name : "journey_tbl_journey_signature_tbl",
					targetObject : "journey_signature_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_id_pk",
							targetField : "journey_id_fk"
						},
					]
				},
				{
					name : "journey_tbl_user_answers_tbl",
					targetObject : "user_answers_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "journey_id_pk",
							targetField : "journey_id_fk"
						},
					]
				},
	];
	
	journey_tbl.relations = relations;
	
	journey_tbl.prototype.isValid = function(){
		return journey_tbl.isValid(this);
	};
	
	journey_tbl.prototype.objModelName = "journey_tbl";
	
	return journey_tbl;
});
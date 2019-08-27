define([],function(){
	var mappings = {
		"checkin_interval_row_id_fk" : "checkin_interval_row_id_fk",
		"checkin_type_id_fk" : "checkin_type_id_fk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journeystatus_code_fk" : "journeystatus_code_fk",
		"journey_actual_arrival_datetime" : "journey_actual_arrival_datetime",
		"journey_actual_departure_datetime" : "journey_actual_departure_datetime",
		"journey_arrivalpoint" : "journey_arrivalpoint",
		"journey_arrivalpoint_lat" : "journey_arrivalpoint_lat",
		"journey_arrivalpoint_lon" : "journey_arrivalpoint_lon",
		"journey_created_by_fk" : "journey_created_by_fk",
		"journey_departurepoint_lat" : "journey_departurepoint_lat",
		"journey_departurepoint_lon" : "journey_departurepoint_lon",
		"journey_departure_point" : "journey_departure_point",
		"journey_expected_arrival_datetime" : "journey_expected_arrival_datetime",
		"journey_expected_departure_datetime" : "journey_expected_departure_datetime",
		"journey_id_pk" : "journey_id_pk",
		"journey_is_checkpoint_enabled" : "journey_is_checkpoint_enabled",
		"journey_last_updated_by" : "journey_last_updated_by",
		"journey_onward_journey_id" : "journey_onward_journey_id",
		"journey_radio" : "journey_radio",
		"journey_reason_id_fk" : "journey_reason_id_fk",
		"journey_satellite" : "journey_satellite",
		"journey_selected_vehicle_id_fk" : "journey_selected_vehicle_id_fk",
		"journey_supervisor_emp_id" : "journey_supervisor_emp_id",
		"journey_supervisor_name" : "journey_supervisor_name",
		"journey_supervisor_phone" : "journey_supervisor_phone",
		"journey_trackingpoint_lat" : "journey_trackingpoint_lat",
		"journey_trackingpoint_lon" : "journey_trackingpoint_lon",
		"journey_trackingpoint_name" : "journey_trackingpoint_name",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
		"user_emp_id_fk" : "user_emp_id_fk",
	};
	Object.freeze(mappings);
	
	var typings = {
		"checkin_interval_row_id_fk" : "number",
		"checkin_type_id_fk" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"journeystatus_code_fk" : "number",
		"journey_actual_arrival_datetime" : "date",
		"journey_actual_departure_datetime" : "date",
		"journey_arrivalpoint" : "string",
		"journey_arrivalpoint_lat" : "string",
		"journey_arrivalpoint_lon" : "string",
		"journey_created_by_fk" : "string",
		"journey_departurepoint_lat" : "string",
		"journey_departurepoint_lon" : "string",
		"journey_departure_point" : "string",
		"journey_expected_arrival_datetime" : "date",
		"journey_expected_departure_datetime" : "date",
		"journey_id_pk" : "string",
		"journey_is_checkpoint_enabled" : "number",
		"journey_last_updated_by" : "string",
		"journey_onward_journey_id" : "string",
		"journey_radio" : "string",
		"journey_reason_id_fk" : "number",
		"journey_satellite" : "string",
		"journey_selected_vehicle_id_fk" : "number",
		"journey_supervisor_emp_id" : "string",
		"journey_supervisor_name" : "string",
		"journey_supervisor_phone" : "string",
		"journey_trackingpoint_lat" : "string",
		"journey_trackingpoint_lon" : "string",
		"journey_trackingpoint_name" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
		"user_emp_id_fk" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"journey_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "journey_tbl"
	};
	Object.freeze(config);
	
	return config;
})

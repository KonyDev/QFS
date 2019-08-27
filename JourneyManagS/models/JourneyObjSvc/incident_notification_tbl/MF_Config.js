define([],function(){
	var mappings = {
		"admin_emp_id_responded_fk" : "admin_emp_id_responded_fk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"incident_id_pk" : "incident_id_pk",
		"incident_other_text" : "incident_other_text",
		"incident_response_id_fk" : "incident_response_id_fk",
		"incident_response_text" : "incident_response_text",
		"incident_status_id_fk" : "incident_status_id_fk",
		"incident_type_id_fk" : "incident_type_id_fk",
		"journey_id_fk" : "journey_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"admin_emp_id_responded_fk" : "string",
		"createdby" : "string",
		"createddatetime" : "date",
		"incident_id_pk" : "number",
		"incident_other_text" : "string",
		"incident_response_id_fk" : "number",
		"incident_response_text" : "string",
		"incident_status_id_fk" : "number",
		"incident_type_id_fk" : "number",
		"journey_id_fk" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"incident_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "incident_notification_tbl"
	};
	Object.freeze(config);
	
	return config;
})

define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"incident_response_desc" : "incident_response_desc",
		"incident_response_id_pk" : "incident_response_id_pk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"incident_response_desc" : "string",
		"incident_response_id_pk" : "number",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"incident_response_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "incident_response_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})

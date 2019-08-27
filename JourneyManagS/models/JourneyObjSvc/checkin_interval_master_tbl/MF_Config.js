define([],function(){
	var mappings = {
		"checkin_interval_minutes" : "checkin_interval_minutes",
		"checkin_interval_row_id_pk" : "checkin_interval_row_id_pk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"checkin_interval_minutes" : "number",
		"checkin_interval_row_id_pk" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"checkin_interval_row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "checkin_interval_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})

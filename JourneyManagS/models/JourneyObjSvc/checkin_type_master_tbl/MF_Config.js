define([],function(){
	var mappings = {
		"checkin_type_desc" : "checkin_type_desc",
		"checkin_type_id_pk" : "checkin_type_id_pk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"checkin_type_desc" : "string",
		"checkin_type_id_pk" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"checkin_type_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "checkin_type_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})

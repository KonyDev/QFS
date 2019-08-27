define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journeystatus_code_pk" : "journeystatus_code_pk",
		"journeystatus_desc" : "journeystatus_desc",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"journeystatus_code_pk" : "number",
		"journeystatus_desc" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"journeystatus_code_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "journeystatus_codes_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})

define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journey_reason" : "journey_reason",
		"journey_reason_id_pk" : "journey_reason_id_pk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"journey_reason" : "string",
		"journey_reason_id_pk" : "number",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"journey_reason_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "journey_reasons_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})

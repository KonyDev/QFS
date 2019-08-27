define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journey_id_fk" : "journey_id_fk",
		"journey_user_signature_base64" : "journey_user_signature_base64",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"signature_row_id_pk" : "signature_row_id_pk",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"journey_id_fk" : "string",
		"journey_user_signature_base64" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"signature_row_id_pk" : "number",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"signature_row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "journey_signature_tbl"
	};
	Object.freeze(config);
	
	return config;
})

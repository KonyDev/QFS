define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journey_id_fk" : "journey_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"passenger_company" : "passenger_company",
		"passenger_mobile" : "passenger_mobile",
		"passenger_name" : "passenger_name",
		"row_id_pk" : "row_id_pk",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"journey_id_fk" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"passenger_company" : "string",
		"passenger_mobile" : "string",
		"passenger_name" : "string",
		"row_id_pk" : "number",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "journey_passengers_tbl"
	};
	Object.freeze(config);
	
	return config;
})

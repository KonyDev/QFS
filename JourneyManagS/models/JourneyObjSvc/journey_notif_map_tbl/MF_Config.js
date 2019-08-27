define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journey_id_fk" : "journey_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"notification_id_fk" : "notification_id_fk",
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
		"notification_id_fk" : "number",
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
		tableName : "journey_notif_map_tbl"
	};
	Object.freeze(config);
	
	return config;
})

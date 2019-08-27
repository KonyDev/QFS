define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"notification_id_pk" : "notification_id_pk",
		"notification_message" : "notification_message",
		"notification_sent_by_fk" : "notification_sent_by_fk",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"notification_id_pk" : "number",
		"notification_message" : "string",
		"notification_sent_by_fk" : "string",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"notification_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "notifications_tbl"
	};
	Object.freeze(config);
	
	return config;
})

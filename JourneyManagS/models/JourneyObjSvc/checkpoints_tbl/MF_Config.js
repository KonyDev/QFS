define([],function(){
	var mappings = {
		"actual_checkin_timestamp" : "actual_checkin_timestamp",
		"checkpoint_reported_by_fk" : "checkpoint_reported_by_fk",
		"checkpoint_row_id_pk" : "checkpoint_row_id_pk",
		"checkpoint_status_id_fk" : "checkpoint_status_id_fk",
		"check_point_seq_num" : "check_point_seq_num",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"expected_checkin_timestamp" : "expected_checkin_timestamp",
		"journey_id_fk" : "journey_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"actual_checkin_timestamp" : "date",
		"checkpoint_reported_by_fk" : "string",
		"checkpoint_row_id_pk" : "number",
		"checkpoint_status_id_fk" : "number",
		"check_point_seq_num" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"expected_checkin_timestamp" : "date",
		"journey_id_fk" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"checkpoint_row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "checkpoints_tbl"
	};
	Object.freeze(config);
	
	return config;
})

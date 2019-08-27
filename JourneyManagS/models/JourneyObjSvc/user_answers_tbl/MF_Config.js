define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"journey_id_fk" : "journey_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"question_id_fk" : "question_id_fk",
		"question_options_row_id_pk" : "question_options_row_id_pk",
		"softdeleteflag" : "softdeleteflag",
		"user_answer_plain_text" : "user_answer_plain_text",
		"user_answer_row_id" : "user_answer_row_id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"journey_id_fk" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"question_id_fk" : "number",
		"question_options_row_id_pk" : "number",
		"softdeleteflag" : "number",
		"user_answer_plain_text" : "string",
		"user_answer_row_id" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"user_answer_row_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "user_answers_tbl"
	};
	Object.freeze(config);
	
	return config;
})

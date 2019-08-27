var AD_GROUP_MASTER_TBL_GLOBAL = "ad_group_master_tbl";
var CHECKIN_INTERVAL_MASTER_TBL_GLOBAL = "checkin_interval_master_tbl";
var CHECKIN_TYPE_MASTER_TBL_GLOBAL = "checkin_type_master_tbl";
var CHECKLIST_QUESTIONS_MASTER_TBL_GLOBAL = "checklist_questions_master_tbl";
var CHECKPOINTS_STATUS_MASTER_TBL_GLOBAL = "checkpoints_status_master_tbl";
var CHECKPOINTS_TBL_GLOBAL = "checkpoints_tbl";
var COUNTRY_MASTER_TBL_GLOBAL = "country_master_tbl";
var GUIDES_MANUALS_TBL_GLOBAL = "guides_manuals_tbl";
var INCIDENT_NOTIFICATION_TBL_GLOBAL = "incident_notification_tbl";
var INCIDENT_RESPONSE_MASTER_TBL_GLOBAL = "incident_response_master_tbl";
var INCIDENT_STATUS_MASTER_TBL_GLOBAL = "incident_status_master_tbl";
var INCIDENT_TYPE_MASTER_TBL_GLOBAL = "incident_type_master_tbl";
var JOURNEY_NOTIF_MAP_TBL_GLOBAL = "journey_notif_map_tbl";
var JOURNEY_PASSENGERS_TBL_GLOBAL = "journey_passengers_tbl";
var JOURNEY_REASONS_MASTER_TBL_GLOBAL = "journey_reasons_master_tbl";
var JOURNEY_SEQ_TBL_GLOBAL = "journey_seq_tbl";
var JOURNEY_SIGNATURE_TBL_GLOBAL = "journey_signature_tbl";
var JOURNEYSTATUS_CODES_MASTER_TBL_GLOBAL = "journeystatus_codes_master_tbl";
var LANGUAGE_MASTER_TBL_GLOBAL = "language_master_tbl";
var NOTIFICATIONS_TBL_GLOBAL = "notifications_tbl";
var QUESTION_LOCALISATION_MAPPING_TBL_GLOBAL = "question_localisation_mapping_tbl";
var QUESTION_OPTIONS_TBL_GLOBAL = "question_options_tbl";
var QUESTION_TYPE_MASTER_TBL_GLOBAL = "question_type_master_tbl";
var REGION_MASTER_TBL_GLOBAL = "region_master_tbl";
var TEMP_SEQ_TBL_GLOBAL = "temp_seq_tbl";
var TEMP_TEST_TBL_GLOBAL = "temp_test_tbl";
var USER_ANSWERS_TBL_GLOBAL = "user_answers_tbl";
var USER_TBL_GLOBAL = "user_tbl";
var VEHICLE_IMAGES_TBL_GLOBAL = "vehicle_images_tbl";
var VEHICLE_TBL_GLOBAL = "vehicle_tbl";
var AD_GROUP_MASTER_TBL_GLOBAL = "ad_group_master_tbl";
var CHECKIN_INTERVAL_MASTER_TBL_GLOBAL = "checkin_interval_master_tbl";
var CHECKIN_TYPE_MASTER_TBL_GLOBAL = "checkin_type_master_tbl";
var CHECKLIST_QUESTIONS_MASTER_TBL_GLOBAL = "checklist_questions_master_tbl";
var CHECKPOINTS_STATUS_MASTER_TBL_GLOBAL = "checkpoints_status_master_tbl";
var CHECKPOINTS_TBL_GLOBAL = "checkpoints_tbl";
var COUNTRY_MASTER_TBL_GLOBAL = "country_master_tbl";
var GUIDES_MANUALS_TBL_GLOBAL = "guides_manuals_tbl";
var INCIDENT_NOTIFICATION_TBL_GLOBAL = "incident_notification_tbl";
var INCIDENT_RESPONSE_MASTER_TBL_GLOBAL = "incident_response_master_tbl";
var INCIDENT_STATUS_MASTER_TBL_GLOBAL = "incident_status_master_tbl";
var INCIDENT_TYPE_MASTER_TBL_GLOBAL = "incident_type_master_tbl";
var JOURNEY_NOTIF_MAP_TBL_GLOBAL = "journey_notif_map_tbl";
var JOURNEY_REASONS_MASTER_TBL_GLOBAL = "journey_reasons_master_tbl";
var JOURNEY_SEQ_TBL_GLOBAL = "journey_seq_tbl";
var JOURNEY_SIGNATURE_TBL_GLOBAL = "journey_signature_tbl";
var JOURNEYSTATUS_CODES_MASTER_TBL_GLOBAL = "journeystatus_codes_master_tbl";
var LANGUAGE_MASTER_TBL_GLOBAL = "language_master_tbl";
var NOTIFICATIONS_TBL_GLOBAL = "notifications_tbl";
var QUESTION_LOCALISATION_MAPPING_TBL_GLOBAL = "question_localisation_mapping_tbl";
var QUESTION_OPTIONS_TBL_GLOBAL = "question_options_tbl";
var QUESTION_TYPE_MASTER_TBL_GLOBAL = "question_type_master_tbl";
var REGION_MASTER_TBL_GLOBAL = "region_master_tbl";
var TEMP_SEQ_TBL_GLOBAL = "temp_seq_tbl";
var TEMP_TEST_TBL_GLOBAL = "temp_test_tbl";
var USER_ANSWERS_TBL_GLOBAL = "user_answers_tbl";
var VEHICLE_IMAGES_TBL_GLOBAL = "vehicle_images_tbl";
var VEHICLE_TBL_GLOBAL = "vehicle_tbl";
var JOURNEY_TBL_GLOBAL = "journey_tbl";
var JOURNEY_PASSENGERS_TBL_GLOBAL = "journey_passengers_tbl";
var TRACKING_POINTS_TBL_GLOBAL= 'tracking_points_tbl';

//Type your code here
var GUIDES_MANUALS_TBL = {"GUIDES_MANUALS_ROW_ID_PK" :"guides_manuals_row_id_pk",
                          "GUIDE_MANUAL_TITLE" :"guide_manual_title",
                          "GUIDE_MANUAL_URL" :"guide_manual_url",
                          "COUNTRY_ID_FK" :"country_id_fk",
                          "REGION_ID_FK" :"region_id_fk",
                          "LANGUAGE_ID_FK" :"language_id_fk",
                          "CREATEDDATETIME" :"createddatetime",
                          "LASTUPDATEDDATETIME" :"lastupdateddatetime",
                          "SOFTDELETEFLAG" :"softdeleteflag",
                          "CREATEDBY" :"createdby",
                          "LASTUPDATEDBY" :"lastupdatedby",
                          "ID":"guides_manuals_row_id_pk"
                         };
var DATA_MODEL=(function(){
  return{
    "AD_GROUP_TBL": "ad_group_master_tbl",
    "CHECKIN_INTERVAL_TBL": "checkin_interval_master_tbl",
    "CHECKIN_TYPE_TBL": "checkin_type_master_tbl",
    "CHECKLIST_QUESTIONS_TBL": "checklist_questions_master_tbl",
    "CHECKPOINT_TBL": "checkpoints_tbl",
    "CHECKPOINTS_STATUS_TBL": "checkpoints_status_master_tbl",
    "GUIDES_MANUALS_TBL": "guides_manuals_tbl",
    "INCIDENT_NOTIFICATION_TBL": "incident_notification_tbl",
    "INCIDENT_TYPE_MASTER_TBL": "incident_type_master_tbl",
    "JOURNEY_NOTIF_MAP_TBL": "journey_notif_map_tbl",
    //"JOURNEY_PASSENGERS_TBL": "vehicle_tbl",
    "JOURNEY_REASONS_MASTER_TBL": "journey_reasons_master_tbl",
    "JOURNEY_SIGNATURE_TBL": "journey_signature_tbl",
    "JOURNEY_TBL": "journey_tbl",
    "JOURNEY_TRACEPOINTS_TBL": "journey_tracepoints_tbl",
    "PASSENGERS_TBL": "journey_passengers_tbl",
    "QUESTION_LOCALISATION_TBL": "question_localisation_mapping_tbl",
    "QUESTION_OPTIONS_TBL": "question_options_tbl",
    "TRACKING_POINTS_TBL": "tracking_points_tbl",
    "USER_ANSWERS_TBL": "user_answers_tbl",
    "USER_TBL": "user_tbl",
    "VEHICLE_TBL": "vehicle_tbl"
  };
})();
var AD_GROUP_TBL={
  "ID":"group_id_pk"
};
var CHECKPOINTS_STATUS_TBL={
  "INCIDENT_ID":"incident_id_pk"
};
var JOURNEY_NOTIF_MAP_TBL={
  "ID":"row_id_pk"
};
var JOURNEY_SIGNATURE_TBL={
  "ID":"signature_row_id_pk"
};
var JOURNEY_TRACEPOINTS_TBL={
  "ID":"tracepoint_row_id_pk"
};
var USER_ANSWERS_TBL={
  "JOURNEY_ID":"journey_id_fk",
  "QUESTION_ID":"question_id_fk",
  "QUESTION_OPTIONS_ROW_ID":"question_options_row_id_fk",
  "USER_ANSWER_PLAIN_TEXT":"user_answer_plain_text",
  "CREATED_BY":"createdby"
};
var QUESTION_OPTIONS_TBL={
  "ID":"question_options_row_id_pk",
  "QUESTION_ID":"question_id_fk",
  "QUESTION_OPTION":"question_option_to_choose",
  "IS_OPTION_TO_BE_SELECTED_MANDATORY":"is_option_to_be_selected_mandatory"
};
var CHECKLIST_QUESTIONS_TBL={
  "QUESTION_ID":"question_id_pk",
  "QUESTION_TYPE_ID":"question_type_id_fk",
  "QUESTION_DESC":"question_text",
  "IS_MANDATORY_TO_ANSWER":"is_mandatory_to_answer"
};
var QUESTION_LOCALISATION_TBL={
  "QUESTION_ID":"question_id_fk",
  "COUNTRY_ID":"country_id_fk",
  "REGION_ID":"region_id_fk",
  "LANGUAGE_ID":"language_id_fk"
};
var INCIDENT_NOTIFICATION_TBL={
  "ADMIN_RESPONSE_ID": "admin_emp_id_responded_fk",
  "CREATEDBY_ID": "createdby",
  "INCIDENT_RESPONSE_ID_FK": "incident_response_id_fk",
  "INCIDENT_RESPONSE_TEXT": "incident_response_text",
  "JOURNEY_ID": "journey_id_fk",
  "LAST_UPDATED_BY_ID": "lastupdatedby",
  "OTHER_INCIDENT_TYPE": "incident_other_text",
  "STATUS_ID": "incident_status_id_fk",
  "TYPE_ID": "incident_type_id_fk",
  "INCIDENT_DESCIPTION":"incident_desciption",
  "ASSISTANCE_REQUIRED_DESC":"incident_assistance_required",
};
var INCIDENT_TYPE_MASTER_TBL={
  "ID":"incident_type_id_pk",
  "DESC":"incident_type_desc"
};
var JOURNEY_REASONS_MASTER_TBL={
  "JOURNEY_REASON_DESC":"journey_reason",
  "REASON_ID_PK":"journey_reason_id_pk"
};
var CHECKPOINT_TBL={
  "ACTUAL_CHECKIN_TIMESTAMP":"actual_checkin_timestamp",
  "CHECKIN_LOCATION_ADDRESS":"checkin_location_address",
  "CHECKIN_LOCATION_LAT":"checkin_location_lat",
  "CHECKIN_LOCATION_LON":"checkin_location_lon",
  "CHECKPOINT_REPORTED_BY_FK":"checkpoint_reported_by_fk",
  "ID_PK":"checkpoint_row_id_pk",
  "CHECKPOINT_STATUS_ID_FK":"checkpoint_status_id_fk",
  "CHECK_POINT_SEQ_NUM":"check_point_seq_num",
  "CREATEDBY":"createdby",
  "EXPECTED_CHECKIN_TIMESTAMP":"expected_checkin_timestamp",
  "JOURNEY_ID_FK":"journey_id_fk",
  "LASTUPDATEDBY":"lastupdatedby",
  "LAST_UPDATED_TIMESTAMP":"lastupdateddatetime"
};
var TRACKING_POINTS_TBL={
  "TRACKING_POINT_ID":"tracking_point_id_pk",
  "TRACKING_POINT_ADDRESS":"tracking_point_address",
  "POINT_PHONE_1":"tracking_point_phone_1"

};
var CHECKIN_TYPE_TBL={
  "CHECKIN_TYPE_ID_PK":"checkin_type_id_pk",
  "CHECKIN_TYPE_DESC":"checkin_type_desc",
};
var CHECKIN_INTERVAL_TBL={
  "CHECKIN_INTERVAL_ID":"checkin_interval_row_id_pk",
  "CHECKIN_INTERVAL":"checkin_interval_minutes",
};
var VEHICLE_TBL={
  "VEHICLE_ID_PK":"vehicle_id_pk",
  "VEHICLE_REG_NUM":"vehicle_reg_num",
  "VEHICLE_MAKE":"vehicle_make",
  "VEHICLE_MODEL":"vehicle_model",
  "VEHICLE_COLOR":"vehicle_color",
  "USER_EMP_ID_FK":"user_emp_id_fk"
};
var PASSENGERS_TBL={
  "ID":"row_id_pk",
  "JOURNEY_ID_FK":"journey_id_fk",
  "PASSENGER_NAME":"passenger_name",
  "PASSENGER_MOBILE":"passenger_mobile",
  "PASSENGER_COMPANY" :"passenger_company",
  "CREATEDBY_ID":"createdby"
};
var JOURNEY_PASSENGERS_TABLE ={
  "ROW_ID_PK" : "row_id_pk",
  "JOURNEY_ID_FK" : "journey_id_fk",
  "PASSENGER_NAME" : "passenger_name",
  "PASSENGER_MOBILE" : "passenger_mobile",
  "PASSENGER_COMPANY" : "passenger_company",
  "CREATEDDATETIME" : "createddatetime",
  "LASTUPDATEDDATETIME" : "lastupdateddatetime",
  "SOFTDELETEFLAG" : "softdeleteflag",
  "CREATEDBY" : "createdby",
  "LASTUPDATEDBY" : "lastupdatedby"
};
var JOURNEY_PASSENGERS_TBL={
  "VEHICLE_ID_PK":"vehicle_id_pk",
  "VEHICLE_REG_NUM":"vehicle_reg_num",
  "VEHICLE_MAKE":"vehicle_make",
  "VEHICLE_MODEL":"vehicle_model",
  "VEHICLE_COLOR":"vehicle_color",
  "USER_EMP_ID_FK":"user_emp_id_fk"
};
var JOURNEY_TBL={
  "ACTUAL_ARRIVAL_DATETIME": "journey_actual_arrival_datetime",
  "ACTUAL_ARRIVALPOINT_ADDRESS": "journey_actual_arrivalpoint_address",
  "ACTUAL_ARRIVALPOINT_LAT": "journey_actual_arrivalpoint_lat",
  "ACTUAL_ARRIVALPOINT_LON": "journey_actual_arrivalpoint_lon",

  "ACTUAL_DEPARTURE_ADDRESS": "journey_actual_departure_address",
  "ACTUAL_DEPARTURE_DATETIME": "journey_actual_departure_datetime",
  "ACTUAL_DEPARTURE_LAT": "journey_actual_departure_lat",
  "ACTUAL_DEPARTURE_LON": "journey_actual_departure_lon",

  "CHECKIN_INTERVAL_ROW_ID_FK": "checkin_interval_row_id_fk",
  "CHECKIN_TYPE_ID_FK": "checkin_type_id_fk",
  "CREATED_BY_FK": "journey_created_by_fk",
  "EMP_PHONE_NUM": "journey_emp_phone_num",

  "EXPECTED_ARRIVAL_DATETIME": "journey_expected_arrival_datetime",
  "EXPECTED_ARRIVALPOINT_ADDRESS": "journey_expected_arrivalpoint_address",
  "EXPECTED_ARRIVALPOINT_LAT": "journey_expected_arrivalpoint_lat",
  "EXPECTED_ARRIVALPOINT_LON": "journey_expected_arrivalpoint_lon",

  "EXPECTED_DEPARTURE_ADDRESS": "journey_expected_departure_address",
  "EXPECTED_DEPARTURE_DATETIME": "journey_expected_departure_datetime",
  "EXPECTED_DEPARTURE_LAT": "journey_expected_departure_lat",
  "EXPECTED_DEPARTURE_LON": "journey_expected_departure_lon",

  "ID_PK": "journey_id_pk",
  //"JOURNEY_IS_CHECKPOINT_ENABLED": "journey_is_checkpoint_enabled",
  "UF_ID":"journey_uf_id",
  "JOURNEY_RADIO": "journey_radio",
  "JOURNEY_SATELLITE": "journey_satellite",

  "LAST_UPDATED_BY_FK": "journey_last_updated_by",
  "LAST_UPDATED_TIMESTAMP":"lastupdateddatetime",
  "ONWARD_JOURNEY_ID": "journey_onward_journey_id",
  "REASON_ID_FK": "journey_reason_id_fk",
  "SELECTED_VEHICLE_ID_FK": "journey_selected_vehicle_id_fk",
  "STATUS_CODE_FK": "journeystatus_code_fk",
  "SUPERVISOR_CAMP_ROOM_NUM": "journey_supervisor_camp_room_num",
  "SUPERVISOR_EMP_ID": "journey_supervisor_emp_id",
  "SUPERVISOR_NAME": "journey_supervisor_name",
  "SUPERVISOR_PHONE": "journey_supervisor_phone",
  "TRACKING_POINT_ID_FK": "journey_tracking_point_id_fk",
  //"UF_ID": "journey_uf_id",
  "USER_EMP_ID_FK": "user_emp_id_fk"
};
var USER_TBL={
  "USER_EMP_ID_PK":"user_emp_id_pk",
  "USER_EMAIL_ID":"user_email_id",
  "USER_FIRSTNAME":"user_firstname",
  "USER_LASTNAME":"user_lastname",
  "USER_PHONE1":"user_phone1",
  "COUNTRY_ID_FK":"country_id_fk",
  "REGION_ID_FK":"region_id_fk",
  "LANGUAGE_ID_FK":"language_id_fk",
  "GROUP_ID_FK":"group_id_fk",
  "RADIO":"user_radio",
  "SATELLITE":"user_satellite"
};
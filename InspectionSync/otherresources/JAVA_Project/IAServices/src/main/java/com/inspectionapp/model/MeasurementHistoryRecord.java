package com.inspectionapp.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MeasurementHistoryRecord {
	
	private String measurement_History_Id;

	private Date inspection_Timestamp;

	private String inspection_Value;

	private String Measurement_Images_Id;

	private String measurement_Range_Id;

	private String measurement_Set_Id;
	
	private String Inspection_Id;

	private String response_Type;
	
	private List<String> mediaUrls = new ArrayList<String>();

	public String getMeasurement_History_Id() {
		return measurement_History_Id;
	}

	public void setMeasurement_History_Id(String measurement_History_Id) {
		this.measurement_History_Id = measurement_History_Id;
	}

	public Date getInspection_Timestamp() {
		return inspection_Timestamp;
	}

	public void setInspection_Timestamp(Date inspection_Timestamp) {
		this.inspection_Timestamp = inspection_Timestamp;
	}

	public String getInspection_Value() {
		return inspection_Value;
	}

	public void setInspection_Value(String inspection_Value) {
		this.inspection_Value = inspection_Value;
	}

	public String getMeasurement_Images_Id() {
		return Measurement_Images_Id;
	}

	public void setMeasurement_Images_Id(String measurement_Images_Id) {
		Measurement_Images_Id = measurement_Images_Id;
	}

	public String getMeasurement_Range_Id() {
		return measurement_Range_Id;
	}

	public void setMeasurement_Range_Id(String measurement_Range_Id) {
		this.measurement_Range_Id = measurement_Range_Id;
	}

	public String getMeasurement_Set_Id() {
		return measurement_Set_Id;
	}

	public void setMeasurement_Set_Id(String measurement_Set_Id) {
		this.measurement_Set_Id = measurement_Set_Id;
	}

	public String getInspection_Id() {
		return Inspection_Id;
	}

	public void setInspection_Id(String inspection_Id) {
		Inspection_Id = inspection_Id;
	}

	public String getResponse_Type() {
		return response_Type;
	}

	public void setResponse_Type(String response_Type) {
		this.response_Type = response_Type;
	}

	public List<String> getMediaUrls() {
		return mediaUrls;
	}

	public void setMediaUrls(List<String> mediaUrls) {
		this.mediaUrls = mediaUrls;
	}
	
}

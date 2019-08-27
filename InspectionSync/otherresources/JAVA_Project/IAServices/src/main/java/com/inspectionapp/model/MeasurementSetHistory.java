package com.inspectionapp.model;

import java.util.ArrayList;
import java.util.List;

public class MeasurementSetHistory {


	private String Measurement_Set_Id;
	
	private List<MeasurementHistory> measurementHistoryList = new ArrayList<MeasurementHistory>();  
	
	public MeasurementSetHistory()
	{
		
	}
	public String getMeasurement_Set_Id() {
		return Measurement_Set_Id;
	}

	public void setMeasurement_Set_Id(String measurement_Set_Id) {
		Measurement_Set_Id = measurement_Set_Id;
	}

	public List<MeasurementHistory> getMeasurementHistoryList() {
		return measurementHistoryList;
	}

	public void setMeasurementHistoryList(List<MeasurementHistory> measurementHistoryList) {
		this.measurementHistoryList = measurementHistoryList;
	}
	
}
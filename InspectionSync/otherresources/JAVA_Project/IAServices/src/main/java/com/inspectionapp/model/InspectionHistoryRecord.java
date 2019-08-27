package com.inspectionapp.model;

import java.util.*;

import javax.persistence.*;

@Entity
@Table(name = "inspectionhistory")
public class InspectionHistoryRecord {
	
	private String Inspection_Id;
	

    private String inspectedBy;
 
    private String signature;
    
    private String status;
 
	private String timestamp;
	
	private List<MeasurementHistoryRecord> measurementHistroyRecord;

	public InspectionHistoryRecord(String inspection_Id, String inspectedBy, String signature,
			String status, String timestamp, List<MeasurementHistoryRecord> measurementHistroyRecord) {
		this.Inspection_Id = inspection_Id;
		this.inspectedBy = inspectedBy;
		this.signature = signature;
		this.status = status;
		this.timestamp = timestamp;
		this.measurementHistroyRecord = measurementHistroyRecord;
	}
	public InspectionHistoryRecord(){
		
	}

	public String getInspection_Id() {
		return Inspection_Id;
	}

	public void setInspection_Id(String inspection_Id) {
		Inspection_Id = inspection_Id;
	}

	public String getInspectedBy() {
		return inspectedBy;
	}

	public void setInspectedBy(String inspectedBy) {
		this.inspectedBy = inspectedBy;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public List<MeasurementHistoryRecord> getMeasurementHistroyRecord() {
		return measurementHistroyRecord;
	}

	public void setMeasurementHistroyRecord(List<MeasurementHistoryRecord> measurementHistroyRecord) {
		this.measurementHistroyRecord = measurementHistroyRecord;
	}

}

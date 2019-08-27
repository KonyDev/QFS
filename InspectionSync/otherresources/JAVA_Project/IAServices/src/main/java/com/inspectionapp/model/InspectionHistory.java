package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;


@Entity
@Table(name="inspection")
public class InspectionHistory implements Serializable {

	private static final long serialVersionUID = -5165317209173700926L;

	private String Inspection_Id;

	private String Asset_Id;

	private String assigned_Timestamp;

	private String assigned_To;

	private String inspectedBy;

	private String signature;

	private String status;

	private String timestamp;
	
	private MeasurementSetHistory measurementSetHistory;
	
	public InspectionHistory() {
	}

	public String getInspection_Id() {
		return this.Inspection_Id;
	}

	public void setInspection_Id(String inspection_Id) {
		this.Inspection_Id = inspection_Id;
	}

	public String getAsset_Id() {
		return this.Asset_Id;
	}

	public void setAsset_Id(String asset_Id) {
		this.Asset_Id = asset_Id;
	}

	public String getAssigned_Timestamp() {
		return this.assigned_Timestamp;
	}

	public void setAssigned_Timestamp(String assigned_Timestamp) {
		this.assigned_Timestamp = assigned_Timestamp;
	}

	public String getAssigned_To() {
		return this.assigned_To;
	}

	public void setAssigned_To(String assigned_To) {
		this.assigned_To = assigned_To;
	}

	public String getInspectedBy() {
		return this.inspectedBy;
	}

	public void setInspectedBy(String inspectedBy) {
		this.inspectedBy = inspectedBy;
	}

	public String getSignature() {
		return this.signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}


	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTimestamp() {
		return this.timestamp;
	}

	public void setTimestamp(String string) {
		this.timestamp = string;
	}

	public MeasurementSetHistory getMeasurementSetHistory() {
		return measurementSetHistory;
	}

	public void setMeasurementSetHistory(MeasurementSetHistory measurementSetHistory) {
		this.measurementSetHistory = measurementSetHistory;
	}

}
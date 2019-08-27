package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.*;


@Entity
@Table(name="inspection")
public class Inspection implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 201973526504841927L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Inspection_Id", unique=true, nullable=false)
	private String Inspection_Id;

	@Column(name="Asset_Id", unique=false, nullable=false)
	private String Asset_Id;

	@Column(name="assigned_Timestamp", unique=false, nullable=true)
	private String assigned_Timestamp;

	@Column(name="assigned_To", unique=false, nullable=true)
	private String assigned_To;

	@Column(name="inspectedBy", unique=false, nullable=true)
	private String inspectedBy;

	@Column(name="inspection_Images_Id", unique=false, nullable=true)
	private String inspection_Images_Id;

	@Column(name="signature", unique=false, nullable=true)
	private String signature;

	@Column(name="status", unique=false, nullable=true)
	private String status;

	@Column(name="timestamp", unique=false, nullable=true)
	private String timestamp;
	
	@ManyToOne(fetch = FetchType.EAGER, targetEntity = Asset.class)
    @JoinColumn(name = "Asset_Id", referencedColumnName="Asset_Id", insertable = false, updatable=false)
	@JsonIgnoreProperties("assetInspections")
	private Asset assets;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy="inspectionsHistory", cascade=CascadeType.ALL)
	@JsonIgnoreProperties("measurementHistories")
	private Set<MeasurementHistory> measurementHistories = new HashSet<MeasurementHistory>(0);
	
	@ManyToMany(mappedBy="inspectionList", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<MeasurementSet> measurementSetListInspection = new HashSet<MeasurementSet>();
	
	public Inspection() {
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

	public String getInspection_Images_Id() {
		return this.inspection_Images_Id;
	}

	public void setInspection_Images_Id(String inspection_Images_Id) {
		this.inspection_Images_Id = inspection_Images_Id;
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

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public Asset getAssets() {
		return assets;
	}

	public void setAssets(Asset assets) {
		this.assets = assets;
	}

	public Set<MeasurementHistory> getMeasurementHistories() {
		return measurementHistories;
	}


	public void setMeasurementHistories(Set<MeasurementHistory> measurementHistories) {
		this.measurementHistories = measurementHistories;
	}

	public Set<MeasurementSet> getMeasurementSetListInspection() {
		return measurementSetListInspection;
	}

	public void setMeasurementSetListInspection(Set<MeasurementSet> measurementSetListInspection) {
		this.measurementSetListInspection = measurementSetListInspection;
	}

}
package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name="measurement_history")
public class MeasurementHistory implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Measurement_History_Id", unique=true, nullable=false)
	private String Measurement_History_Id;

	@Column(name="Inspection_Timestamp", unique=false, nullable=true)
	private Date Inspection_Timestamp;

	@Column(name="Inspection_Value", unique=false, nullable=true)
	private String Inspection_Value;

	@Column(name="Measurement_Images_Id", unique=false, nullable=true)
	private String Measurement_Images_Id;

	@Column(name="Measurement_Range_Id", unique=false, nullable=true)
	private String Measurement_Range_Id;

	@Column(name="Measurement_Set_Id", unique=false, nullable=true)
	private String Measurement_Set_Id;
	
	@Column(name="Inspection_Id", unique=false, nullable=true)
	private String Inspection_Id;

	@Column(name="Response_Type", unique=false, nullable=true)
	private String Response_Type;
	
	@OneToOne(fetch = FetchType.EAGER, targetEntity = MeasurementRange.class)
    @JoinColumn(name = "Measurement_Range_Id", referencedColumnName="Measurement_Range_Id", insertable=false, updatable=false)
	private MeasurementRange Measurements_Ranges;
	
	@ManyToOne(fetch = FetchType.EAGER, targetEntity = Inspection.class)
    @JoinColumn(name = "Inspection_Id", referencedColumnName="Inspection_Id", insertable = false, updatable=false)
	@JsonIgnoreProperties("InspectionsHistory")
	private Inspection inspectionsHistory;
	
	@ManyToMany(mappedBy="measurementHistoryList", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<Media> media = new HashSet<Media>();
	
	public MeasurementHistory() {
	}
	
	public MeasurementRange getMeasurements_ranges() {
		return Measurements_Ranges;
	}

	public void setMeasurements_ranges(MeasurementRange measurements_ranges) {
		this.Measurements_Ranges = measurements_ranges;
	}

	public String getMeasurement_History_Id() {
		return this.Measurement_History_Id;
	}

	public void setMeasurement_History_Id(String measurement_History_Id) {
		this.Measurement_History_Id = measurement_History_Id;
	}

	public Date getInspection_Timestamp() {
		return this.Inspection_Timestamp;
	}

	public void setInspection_Timestamp(Date inspection_Timestamp) {
		this.Inspection_Timestamp = inspection_Timestamp;
	}

	public String getInspection_Value() {
		return this.Inspection_Value;
	}

	public void setInspection_Value(String inspection_Value) {
		this.Inspection_Value = inspection_Value;
	}

	public String getMeasurement_Images_Id() {
		return this.Measurement_Images_Id;
	}

	public void setMeasurement_Images_Id(String measurement_Images_Id) {
		this.Measurement_Images_Id = measurement_Images_Id;
	}

	public String getMeasurement_Range_Id() {
		return this.Measurement_Range_Id;
	}

	public void setMeasurement_Range_Id(String measurement_Range_Id) {
		this.Measurement_Range_Id = measurement_Range_Id;
	}

	public String getMeasurement_Set_Id() {
		return this.Measurement_Set_Id;
	}

	public void setMeasurement_Set_Id(String measurement_Set_Id) {
		this.Measurement_Set_Id = measurement_Set_Id;
	}

	public String getInspection_Id() {
		return Inspection_Id;
	}

	public void setInspection_Id(String inspection_Id) {
		this.Inspection_Id = inspection_Id;
	}

	public String getResponse_Type() {
		return this.Response_Type;
	}

	public void setResponse_Type(String response_Type) {
		this.Response_Type = response_Type;
	}

	public Set<Media> getMedia() {
		return media;
	}

	public void setMedia(Set<Media> media) {
		this.media = media;
	}

//	public Inspection getInspectionsHistory() {
//		return inspectionsHistory;
//	}
//
//	public void setInspectionsHistory(Inspection inspectionsHistory) {
//		this.inspectionsHistory = inspectionsHistory;
//	}
}
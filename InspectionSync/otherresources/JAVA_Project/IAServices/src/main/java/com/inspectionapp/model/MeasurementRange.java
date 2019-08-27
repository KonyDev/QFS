package com.inspectionapp.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="measurement_range")
public class MeasurementRange implements Serializable {

	private static final long serialVersionUID = -2000792027867456956L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Measurement_Range_Id", unique=false, nullable=false)
	private String Measurement_Range_Id;
	
	@Column(name="measurement_Max_Value", unique=false, nullable=false)
	private int measurement_Max_Value;
	
	@Column(name="Measurement_Id", unique=false, nullable=false)
	private String Measurement_Id;

	@Column(name="measurement_Min_Value", unique=false, nullable=false)
	private int measurement_Min_Value;

	@Column(name="measurement_Valid_Values", unique=false, nullable=true)
	private String measurement_Valid_Values;

	@Column(name="response_Type", unique=false, nullable=false)
	private String response_Type;

	@Column(name="validate_Min_Max", unique=false, nullable=false)
	private boolean validate_Min_Max;

//	@OneToMany(fetch = FetchType.EAGER, mappedBy = "measurementRanges")
//	@JsonIgnore
//	private Set<Measurement> measurementdetails = new HashSet<Measurement>();
	
	@ManyToOne(fetch = FetchType.EAGER, targetEntity=Measurement.class)
	@JoinColumn(name="Measurement_Id", referencedColumnName="Measurement_Id", insertable=false, updatable=false)
	@JsonIgnoreProperties("measurement")
	private Measurement measurement;
	
	@ManyToMany(fetch=FetchType.EAGER, targetEntity=MeasurementSet.class)
	@JoinTable(
	        name = "measurementset_measurementrange", 
	        joinColumns = { @JoinColumn(name = "Measurement_Range_Id") }, 
	        inverseJoinColumns = { @JoinColumn(name = "Measurement_Set_Id") }
	        )
	private Set<MeasurementSet> measurementSetList=new HashSet<MeasurementSet>();
	
	
	public MeasurementRange() {
	}

	public String getMeasurement_Range_Id() {
		return this.Measurement_Range_Id;
	}

	public void setMeasurement_Range_Id(String measurement_Range_Id) {
		this.Measurement_Range_Id = measurement_Range_Id;
	}


	public int getMeasurement_Max_Value() {
		return this.measurement_Max_Value;
	}

	public void setMeasurement_Max_Value(int measurement_Max_Value) {
		this.measurement_Max_Value = measurement_Max_Value;
	}

	public int getMeasurement_Min_Value() {
		return this.measurement_Min_Value;
	}

	public String getMeasurement_Id() {
		return Measurement_Id;
	}

	public void setMeasurement_Id(String measurement_Id) {
		Measurement_Id = measurement_Id;
	}

	public void setMeasurement_Min_Value(int measurement_Min_Value) {
		this.measurement_Min_Value = measurement_Min_Value;
	}

	public String getMeasurement_Valid_Values() {
		return this.measurement_Valid_Values;
	}

	public void setMeasurement_Valid_Values(String measurement_Valid_Values) {
		this.measurement_Valid_Values = measurement_Valid_Values;
	}

	public String getResponse_Type() {
		return this.response_Type;
	}

	public void setResponse_Type(String response_Type) {
		this.response_Type = response_Type;
	}


	public boolean getValidate_Min_Max() {
		return this.validate_Min_Max;
	}

	public void setValidate_Min_Max(boolean validate_Min_Max) {
		this.validate_Min_Max = validate_Min_Max;
	}

	public Measurement getMeasurement() {
		return measurement;
	}

	public void setMeasurement(Measurement measurement) {
		this.measurement = measurement;
	}

}
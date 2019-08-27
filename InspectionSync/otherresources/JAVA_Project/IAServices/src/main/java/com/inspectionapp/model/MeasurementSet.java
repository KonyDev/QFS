package com.inspectionapp.model;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

@Entity
@Table(name="measurement_set")
public class MeasurementSet implements Serializable {
	
	private static final long serialVersionUID = 5766976196021114407L;

	@Id
	@Column(name="Measurement_Set_Id", unique=true, nullable=false)
	private String Measurement_Set_Id;

	
	@Column(name="Description", unique=true, nullable=false)
	private String Description;

	public MeasurementSet() {
	}

	@ManyToMany(fetch=FetchType.EAGER, targetEntity=Inspection.class)
	@JoinTable(
	        name = "inspection_measurement", 
	        joinColumns = { @JoinColumn(name = "Measurement_Set_Id") }, 
	        inverseJoinColumns = { @JoinColumn(name = "Inspection_Id") }
	        )
	private Set<Inspection> inspectionList=new HashSet<Inspection>();
	
	@ManyToMany(fetch=FetchType.EAGER, targetEntity=Asset.class)
	@JoinTable(
	        name = "asset_measurement_set", 
	        joinColumns = { @JoinColumn(name = "Measurement_Set_Id") }, 
	        inverseJoinColumns = { @JoinColumn(name = "Asset_Id") }
	        )
	private Set<Asset> assetList=new HashSet<Asset>();
	
	@ManyToMany(mappedBy="measurementSetList", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<MeasurementRange> measurementRangeList = new HashSet<MeasurementRange>();
	
//	@OneToMany(mappedBy = "measurement_Set", fetch = FetchType.EAGER)
//	@JsonIgnoreProperties("inspection")
//	private Set<Inspection> inspections = new HashSet<Inspection>(0);
	
	public String getMeasurement_Set_Id() {
		return Measurement_Set_Id;
	}

	public void setMeasurement_Set_Id(String measurement_Set_Id) {
		Measurement_Set_Id = measurement_Set_Id;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public Set<MeasurementRange> getMeasurementRangeList() {
		return measurementRangeList;
	}

	public void setMeasurementRangeList(Set<MeasurementRange> measurementRangeList) {
		this.measurementRangeList = measurementRangeList;
	}
}
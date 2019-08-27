package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Set;


/**
 * The persistent class for the measurement database table.
 * 
 */
@Entity
@Table(name="measurement")
public class Measurement implements Serializable {
	

	private static final long serialVersionUID = -4765046117705555243L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Measurement_Id", unique=true, nullable=false)
	private String Measurement_Id;

	@Column(name="description", unique=false, nullable=true)
	private String description;

	@Column(name="Name", unique=true, nullable=false)
	private String name;

	@OneToMany(mappedBy="measurement",fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<MeasurementRange> measurementRanges;

	public Measurement() {
	}

	public String getMeasurement_Id() {
		return this.Measurement_Id;
	}

	public void setMeasurement_Id(String measurement_Id) {
		this.Measurement_Id = measurement_Id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
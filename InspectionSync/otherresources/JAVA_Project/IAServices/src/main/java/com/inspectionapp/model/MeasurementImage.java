package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the measurement_images database table.
 * 
 */
@Entity
@Table(name="measurement_images")
public class MeasurementImage implements Serializable {

	private static final long serialVersionUID = 775976184315096422L;

	@Id
	@Column(name="Measurement_History_Id", unique=false, nullable=false)
	private String Measurement_History_Id;
	
	@Id
	@Column(name="media_id", unique=false, nullable=true)
	private String media_id;
	
	public String getMeasurement_History_Id() {
		return Measurement_History_Id;
	}

	public void setMeasurement_History_Id(String measurement_History_Id) {
		Measurement_History_Id = measurement_History_Id;
	}

	public String getMedia_id() {
		return media_id;
	}

	public void setMedia_id(String media_id) {
		this.media_id = media_id;
	}

}
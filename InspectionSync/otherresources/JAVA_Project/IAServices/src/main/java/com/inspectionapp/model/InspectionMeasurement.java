package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name="inspection_measurement")
public class InspectionMeasurement implements Serializable {

	private static final long serialVersionUID = -6913020552524148889L;

	@Id
	@Column(name="Inspection_Id", unique=false, nullable=false)
	private String Inspection_Id;
	
	@Column(name="Measurement_Set_Id", unique=false, nullable=true)
	private String Measurement_Set_Id;
	
	public InspectionMeasurement()
	{
		
	}

	public String getInspection_Id() {
		return Inspection_Id;
	}

	public void setInspection_Id(String inspection_Id) {
		Inspection_Id = inspection_Id;
	}

	public String getMeasurement_Set_Id() {
		return Measurement_Set_Id;
	}

	public void setMeasurement_Set_Id(String measurement_Set_Id) {
		Measurement_Set_Id = measurement_Set_Id;
	}

}
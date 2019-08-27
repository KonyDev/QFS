package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;



@Entity
@Table(name="media")
public class Media implements Serializable {


	private static final long serialVersionUID = 4818174410777003583L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="media_id", unique=true, nullable=false)
	private String media_id;

	@Column(name="url", unique=false, nullable=false)
	private String url;

	@Column(name="extension", unique=false, nullable=true)
	private String extension;

	@Column(name="timestamp", unique=false, nullable=true)
	private Date timestamp;

	@Column(name="type", unique=false, nullable=true)
	private String type;
	
	@ManyToMany(fetch=FetchType.EAGER, targetEntity=MeasurementHistory.class)
	@JoinTable(
	        name = "measurement_images", 
	        joinColumns = { @JoinColumn(name = "media_id") }, 
	        inverseJoinColumns = { @JoinColumn(name = "Measurement_History_Id") }
	        )
	private Set<MeasurementHistory> measurementHistoryList=new HashSet<MeasurementHistory>();
	
	public Media() {
	}

	public String getmedia_id() {
		return this.media_id;
	}

	public void setmedia_id(String media_id) {
		this.media_id = media_id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getExtension() {
		return this.extension;
	}

	public void setExtension(String extension) {
		this.extension = extension;
	}

	public Date getTimestamp() {
		return this.timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
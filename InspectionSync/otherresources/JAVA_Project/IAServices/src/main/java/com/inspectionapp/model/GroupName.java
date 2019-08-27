 package com.inspectionapp.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ManyToMany;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Table;

@Entity
@Table(name="groupnames")
public class GroupName implements Serializable{

	private static final long serialVersionUID = -5617436460747974177L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Group_Id", unique=true, nullable=false)
	private String Group_Id;
	
	@Column(name="Name", unique=true, nullable=false)
	private String Name;
	
	@Column(name="Description", unique=true, nullable=false)
	private String Description;
	
	@ManyToMany(fetch=FetchType.EAGER, targetEntity=Asset.class)
	@JoinTable(
	        name = "asset_groupnames", 
	        joinColumns = { @JoinColumn(name = "Group_Id") }, 
	        inverseJoinColumns = { @JoinColumn(name = "Asset_Id") }
	        )
	private List<Asset> assets=new ArrayList<Asset>();

	public String getGroup_Id() {
		return Group_Id;
	}

	public void setGroup_Id(String group_Id) {
		this.Group_Id = group_Id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		this.Name = name;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		this.Description = description;
	}

}

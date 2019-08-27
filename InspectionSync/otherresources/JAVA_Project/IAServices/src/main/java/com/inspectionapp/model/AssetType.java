package com.inspectionapp.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="asset_type")
public class AssetType implements Serializable{

	private static final long serialVersionUID = -7412488665419564537L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Asset_Type_Id", unique=true, nullable=false)
	private String Asset_Type_Id;
	
	@Column(name="Name", unique=false, nullable=true)
	private String Name;
	
	@Column(name="Description", unique=false, nullable=true)
	private String Description;
	
	@OneToMany(mappedBy = "assetTypes", fetch = FetchType.EAGER)
	@JsonIgnore  
	private List<Asset> asset=new ArrayList<Asset>();

	public List<Asset> getAsset() {
		return asset;
	}

	public void setAsset(List<Asset> asset) {
		this.asset = asset;
	}

	public AssetType(String asset_Type_Id, String description) {
		this.Asset_Type_Id = asset_Type_Id;
		this.Description = description;
	}
	
	public AssetType()
	{
		
	}
	
	public String getAsset_Type_Id() {
		return Asset_Type_Id;
	}
	public void setAsset_Type_Id(String asset_Type_Id) {
		this.Asset_Type_Id = asset_Type_Id;
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

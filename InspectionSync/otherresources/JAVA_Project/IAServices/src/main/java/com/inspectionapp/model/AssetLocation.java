 package com.inspectionapp.model;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="asset_location")
public class AssetLocation implements Serializable{

	private static final long serialVersionUID = -761893511110155526L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Asset_Location_Id", unique=true, nullable=false)
	private String Asset_Location_Id;
	
	@Column(name="Description", unique=false, nullable=true)
	private String Description;
	
	@Column(name="Street", unique=false, nullable=true)
	private String Street;
	
	@Column(name="City", unique=false, nullable=true)
	private String City;
	
	@Column(name="Region", unique=false, nullable=true)
	private String Region;
	
	@Column(name="Post_Code", unique=false, nullable=true)
	private String Post_Code;
	
	@Column(name="Country", unique=false, nullable=true)
	private String Country;
	
	@Column(name="Latitude", unique=false, nullable=true)
	private String Latitude;
	
	@Column(name="Longitude", unique=false, nullable=true)
	private String Longitude;
	
	@OneToMany(mappedBy = "assetLocation", fetch = FetchType.EAGER)
	@JsonIgnore//Properties("assetLocation")
	private List<Asset> assetLoc=new ArrayList<Asset>();
	
	public List<Asset> getAssetLoc() {
		return assetLoc;
	}
	public void setAssetLoc(List<Asset> assetLoc) {
		this.assetLoc = assetLoc;
	}
	public String getAsset_Location_Id() {
		return Asset_Location_Id;
	}
	public void setAsset_Location_Id(String asset_Location_Id) {
		this.Asset_Location_Id = asset_Location_Id;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		this.Description = description;
	}
	public String getStreet() {
		return Street;
	}
	public void setStreet(String street) {
		this.Street = street;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		this.City = city;
	}
	public String getRegion() {
		return Region;
	}
	public void setRegion(String region) {
		this.Region = region;
	}
	public String getPost_Code() {
		return Post_Code;
	}
	public void setPost_Code(String post_Code) {
		this.Post_Code = post_Code;
	}
	public String getCountry() {
		return Country;
	}
	public void setCountry(String country) {
		this.Country = country;
	}
	public String getLatitude() {
		return Latitude;
	}
	public void setLatitude(String latitude) {
		this.Latitude = latitude;
	}
	public String getLongitude() {
		return Longitude;
	}
	public void setLongitude(String longitude) {
		this.Longitude = longitude;
	}
	
}

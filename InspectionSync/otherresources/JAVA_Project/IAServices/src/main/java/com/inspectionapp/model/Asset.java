package com.inspectionapp.model;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "asset")
public class Asset implements Serializable{

	private static final long serialVersionUID = 6814519762718478069L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Asset_Id", unique=true, nullable=false)
	private String Asset_Id;
	
	@Column(name="Asset_Description", unique=false, nullable=true)
	private String Asset_Description;
	
	@Column(name="Asset_Img_URL", unique=false, nullable=true)
	private String Asset_Img_URL;
	
	@Column(name="Reference_Doc", unique=false, nullable=true)
	private String Reference_Doc;	
	
	@Column(name="Asset_Type_Id", unique=true, nullable=false)
	private String Asset_Type_Id;
	
	@Column(name="Manufacture_Part_Nbr", unique=false, nullable=true)
	private String Manufacture_Part_Nbr;
	
	@Column(name="Manufacture_Model_Nbr", unique=false, nullable=true)
	private String Manufacture_Model_Nbr;
	
	@Column(name="Manufacture_Serial_Nbr", unique=false, nullable=true)
	private String Manufacture_Serial_Nbr;
	
	@Column(name="Asset_Location_Id", unique=false, nullable=true)
	private String Asset_Location_Id;
	
	@ManyToOne(fetch = FetchType.EAGER, targetEntity = AssetType.class)
    @JoinColumn(name = "Asset_Type_Id", referencedColumnName="Asset_Type_Id", insertable=false, updatable=false)
	@JsonIgnoreProperties("asset")
	private AssetType assetTypes;
	
	@ManyToOne(fetch = FetchType.EAGER, targetEntity = AssetLocation.class)
    @JoinColumn(name = "Asset_Location_Id", referencedColumnName ="Asset_Location_Id", insertable=false, updatable=false)
	@JsonIgnoreProperties("assetLoc")
	private AssetLocation assetLocation;
	
	@OneToMany(mappedBy = "assets", fetch = FetchType.EAGER)
	@JsonIgnoreProperties("inspection")
	private Set<Inspection> inspections = new HashSet<Inspection>(0);

	@ManyToMany(mappedBy="assetList", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private Set<MeasurementSet> measurementSetList = new HashSet<MeasurementSet>();  
	
	@ManyToMany(mappedBy="assets", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<GroupName> groupNames = new HashSet<GroupName>();
	
	public AssetLocation getAssetLocation() {
		return assetLocation;
	}
	
	public void setAssetLocation(AssetLocation assetLocation) {
		this.assetLocation = assetLocation;
	}

	public Asset(){
		
	}
	
	public String getAsset_Id() {
		return Asset_Id;
	}

	public void setAsset_Id(String asset_Id) {
		this.Asset_Id = asset_Id;
	}

	public String getAsset_Description() {
		return Asset_Description;
	}

	public void setAsset_Description(String asset_Description) {
		this.Asset_Description = asset_Description;
	}

	public String getAsset_Img_URL() {
		return Asset_Img_URL;
	}

	public void setAsset_Img_URL(String asset_Img_URL) {
		Asset_Img_URL = asset_Img_URL;
	}

	public String getAsset_Type_Id() {
		return Asset_Type_Id;
	}

	public void setAsset_Type_Id(String asset_Type_Id) {
		this.Asset_Type_Id = asset_Type_Id;
	}

	public String getManufacture_Part_Nbr() {
		return Manufacture_Part_Nbr;
	}

	public void setManufacture_Part_Nbr(String manufacture_Part_Nbr) {
		this.Manufacture_Part_Nbr = manufacture_Part_Nbr;
	}

	public String getManufacture_Model_Nbr() {
		return Manufacture_Model_Nbr;
	}

	public void setManufacture_Model_Nbr(String manufacture_Model_Nbr) {
		this.Manufacture_Model_Nbr = manufacture_Model_Nbr;
	}

	public String getReference_Doc() {
		return Reference_Doc;
	}

	public void setReference_Doc(String reference_Doc) {
		Reference_Doc = reference_Doc;
	}

	public String getManufacture_Serial_Nbr() {
		return Manufacture_Serial_Nbr;
	}

	public void setManufacture_Serial_Nbr(String manufacture_Serial_Nbr) {
		this.Manufacture_Serial_Nbr = manufacture_Serial_Nbr;
	}

	public String getAsset_Location_Id() {
		return Asset_Location_Id;
	}

	public void setAsset_Location_Id(String asset_Location_Id) {
		this.Asset_Location_Id = asset_Location_Id;
	}

	public AssetType getAssetTypes() {
		return assetTypes;
	}

	public void setAssetTypes(AssetType assetTypes) {
		this.assetTypes = assetTypes;
	}

	public Set<GroupName> getGroupNames() {
		return groupNames;
	}

	public void setGroupNames(Set<GroupName> groupNames) {
		this.groupNames = groupNames;
	}

	public Set<MeasurementSet> getMeasurementSetList() {
		return measurementSetList;
	}

	public void setMeasurementSetList(Set<MeasurementSet> measurementSetList) {
		this.measurementSetList = measurementSetList;
	}

//	public Set<Inspection> getInspections() {
//		return inspections;
//	}
//
//	public void setInspections(Set<Inspection> inspections) {
//		this.inspections = inspections;
//	}
	
//	public List<MeasurementSet2> getMeasurementSetList() {
//		return measurementSetList;
//	}
//
//	public void setMeasurementSetList(List<MeasurementSet2> measurementSetList) {
//		this.measurementSetList = measurementSetList;
//	}
	
}

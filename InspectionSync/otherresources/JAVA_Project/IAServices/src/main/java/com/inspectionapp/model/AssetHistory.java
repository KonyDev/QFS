package com.inspectionapp.model;

import java.util.ArrayList;
import java.util.List;

public class AssetHistory {


	private String Asset_Id;
	
	private String Asset_Name;
	
	private String Asset_Description;
	
	private List<InspectionHistory> inspectionHistoryList = new ArrayList<InspectionHistory>();  
	
	public AssetHistory()
	{
		
	}

	public AssetHistory(String asset_Id, String asset_Name, String asset_Description,
			List<InspectionHistory> inspectionHistoryList) {
		super();
		Asset_Id = asset_Id;
		Asset_Name = asset_Name;
		Asset_Description = asset_Description;
		this.setInspectionHistoryList(inspectionHistoryList);
	}

	public String getAsset_Id() {
		return Asset_Id;
	}

	public void setAsset_Id(String asset_Id) {
		Asset_Id = asset_Id;
	}

	public String getAsset_Name() {
		return Asset_Name;
	}

	public void setAsset_Name(String asset_Name) {
		Asset_Name = asset_Name;
	}

	public String getAsset_Description() {
		return Asset_Description;
	}

	public void setAsset_Description(String asset_Description) {
		Asset_Description = asset_Description;
	}

	public List<InspectionHistory> getInspectionHistoryList() {
		return inspectionHistoryList;
	}

	public void setInspectionHistoryList(List<InspectionHistory> inspectionHistoryList) {
		this.inspectionHistoryList = inspectionHistoryList;
	}

}
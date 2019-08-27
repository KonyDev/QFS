package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.AssetHistory;
import com.inspectionapp.model.Inspection;

public interface InspectionDao {

	String save(Inspection asset);

   Inspection get(String id);

   List<Inspection> list();
   
   List<Inspection> assignedToInspections(String id);
   
   AssetHistory inspectionHistoryList(String asset_Id);

   void update(String id, Inspection asset);

   void delete(String id);

}

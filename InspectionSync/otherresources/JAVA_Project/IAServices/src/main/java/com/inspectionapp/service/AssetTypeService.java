package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.AssetType;

public interface AssetTypeService {

	String save(AssetType assetType);
   AssetType get(String id);
   List<AssetType> list();
   void update(String id, AssetType book);
   void delete(String id);
}

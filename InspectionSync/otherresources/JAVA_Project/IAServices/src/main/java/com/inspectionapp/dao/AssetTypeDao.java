package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.AssetType;

public interface AssetTypeDao {

	String save(AssetType asset);

   AssetType get(String id);

   List<AssetType> list();

   void update(String id, AssetType asset);

   void delete(String id);

}

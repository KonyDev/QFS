package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.AssetLocation;

public interface AssetLocationDao {

	String save(AssetLocation assetLocation);

   AssetLocation get(String id);

   List<AssetLocation> list();

   void update(String id, AssetLocation asset);

   void delete(String id);

}

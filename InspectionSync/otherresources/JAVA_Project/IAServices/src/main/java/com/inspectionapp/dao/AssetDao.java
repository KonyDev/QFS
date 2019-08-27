package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.Asset;

public interface AssetDao {

   String save(Asset asset);

   Asset get(String id);
   
   List<Asset> getOnlyAsset();

   List<Asset> list();

   void update(String id, Asset asset);
   
   void delete(String id);

}

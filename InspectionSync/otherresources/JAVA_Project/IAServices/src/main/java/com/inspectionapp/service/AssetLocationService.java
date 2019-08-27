package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.AssetLocation;

public interface AssetLocationService {

   String save(AssetLocation AssetLocation);
   AssetLocation get(String id);
   List<AssetLocation> list();
   void update(String id, AssetLocation book);
   void delete(String id);
}

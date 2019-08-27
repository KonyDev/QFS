package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.InspectionUser;

public interface InspectionUserService {

   String save(InspectionUser AssetLocation);
   InspectionUser get(String id);
   InspectionUser getByEmailId(String id);
   List<InspectionUser> list();
   void update(String id, InspectionUser book);
   void delete(String id);
}

package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.InspectionUser;

public interface InspectionUserDao {

   String save(InspectionUser asset);

   InspectionUser get(String id);
   
   InspectionUser getUserByEmailId(String id);

   List<InspectionUser> list();
   
   void update(String id, InspectionUser asset);

   void delete(String id);

}

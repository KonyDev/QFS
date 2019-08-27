package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.GroupName;

public interface GroupNameService {

   String save(GroupName AssetLocation);
   GroupName get(String id);
   List<GroupName> list();
   void update(String id, GroupName book);
   void delete(String id);
}

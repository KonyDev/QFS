package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.GroupName;

public interface GroupNameDao {

   String save(GroupName asset);

   GroupName get(String id);

   List<GroupName> list();

   void update(String id, GroupName asset);

   void delete(String id);

}

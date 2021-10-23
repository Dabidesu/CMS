package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.President;

import java.util.List;

public interface IPresidentService {
  List<President> findAll();
  President addPresident(President president);
  President updatePresident(President president);
  President getPresident(long id);
  void deletePresident(long id);
}

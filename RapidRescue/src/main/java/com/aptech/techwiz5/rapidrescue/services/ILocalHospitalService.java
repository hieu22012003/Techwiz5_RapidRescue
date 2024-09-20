package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.LocationHospital;

import java.util.List;
import java.util.Optional;

public interface ILocalHospitalService {
    List<LocationHospital> getAllLocalHospital();
    Optional<LocationHospital> getLocalHospitalById(Integer id);

}

package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.LocationHospital;
import com.aptech.techwiz5.rapidrescue.repositories.LocationHospitalRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LocalHospitalService implements ILocalHospitalService{
    final LocationHospitalRepository locationHospitalRepository;
    @Override
    public List<LocationHospital> getAllLocalHospital() {
        return locationHospitalRepository.findAll();
    }

    @Override
    public Optional<LocationHospital> getLocalHospitalById(Integer id) {
        Optional<LocationHospital> locationHospital = locationHospitalRepository.findById(id);
        if (locationHospital.isEmpty()){
            throw new RuntimeException("Local Hospital not found");
        }
        return locationHospital;
    }
}

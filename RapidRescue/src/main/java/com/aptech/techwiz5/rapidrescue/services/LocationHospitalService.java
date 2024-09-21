package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.LocationHospital;
import com.aptech.techwiz5.rapidrescue.repositories.LocationHospitalRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LocationHospitalService {
    private LocationHospitalRepository locationRepository;
    public LocationHospital createLocation(LocationHospital locationHospital) {
        locationHospital.setCreatedAt(LocalDateTime.now());
        return locationRepository.save(locationHospital);
    }
    public LocationHospital updateLocation(LocationHospital locationHospitalUpdate) {
        Optional<LocationHospital> locationHospitalOptional = locationRepository.findById(locationHospitalUpdate.getId());
        if (locationHospitalOptional.isPresent()) {
            throw new RuntimeException("locationHospital not found");
        }
        LocationHospital locationHospital = locationHospitalOptional.get();
        if (locationHospitalUpdate.getAmbulance() !=null){
            locationHospital.setAmbulance(locationHospitalUpdate.getAmbulance());
        }
        if (locationHospitalUpdate.getLocation() !=null){
            locationHospital.setLocation(locationHospitalUpdate.getLocation());
        }
        if (locationHospitalUpdate.getDescription()!=null) {
            locationHospital.setDescription(locationHospitalUpdate.getDescription());
        }
        locationHospital.setUpdatedAt(LocalDateTime.now());
        return locationHospital;
    }
    public void deleteLocation(int id) {
        locationRepository.deleteById(id);
    }
    public List<LocationHospital> getAllLocations() {
        return locationRepository.findAll();
    }
    public LocationHospital getLocationById(int id) {
        Optional<LocationHospital> locationHospitalOptional = locationRepository.findById(id);
        if (locationHospitalOptional.isPresent()) {
            throw new RuntimeException("locationHospital not found");
        }
        return locationHospitalOptional.get();
    }
}

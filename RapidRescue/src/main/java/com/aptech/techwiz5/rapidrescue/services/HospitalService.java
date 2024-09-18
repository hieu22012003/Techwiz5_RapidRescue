package com.aptech.techwiz5.rapidrescue.services;


import com.aptech.techwiz5.rapidrescue.models.Hospital;
import com.aptech.techwiz5.rapidrescue.repositories.HospitalRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class HospitalService {
    private HospitalRepository hospitalRepository;

    public Hospital createHospital(Hospital hospital) {
        return hospitalRepository.save(hospital);
    }
    public Hospital updateHospital(Hospital hospitalUpdate) {
        Optional<Hospital> hospitalOptional = hospitalRepository.findById(hospitalUpdate.getId());
        if (hospitalOptional.isPresent()) {
            throw new RuntimeException("Drivet not found");
        }
        Hospital hospital= hospitalOptional.get();
        if(hospitalUpdate.getLocationId() != null){
            hospital.setLocationId(hospitalUpdate.getLocationId());
        }
        if (hospitalUpdate.getHospitalName()!=null){
            hospital.setHospitalName(hospitalUpdate.getHospitalName());
        }
        if (hospitalUpdate.getPhoneNumber()!=null){
            hospital.setPhoneNumber(hospitalUpdate.getPhoneNumber());
        }
        hospital.setUpdatedAt(LocalDateTime.now());
        return hospital;
    }
    public void deleteHospital(int id) {
        hospitalRepository.deleteById(id);
    }
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }
    public Optional<Hospital> getHospitalById(int id) {
        return hospitalRepository.findById(id);
    }
}
package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.EmergencyTechnician;

import java.util.List;
import java.util.Optional;

public interface IEmergencyTechnicianService {
    List<EmergencyTechnician> getAllEmergencyTechnicians();
    Optional<EmergencyTechnician> getEmergencyTechnicianById(Integer id);
    EmergencyTechnician creEmergencyTechnician(EmergencyTechnician emergencyTechnician);
    EmergencyTechnician updateEmergencyTechnician(EmergencyTechnician emergencyTechnician);
    void deleteEmergencyTechnician(Integer id);
}

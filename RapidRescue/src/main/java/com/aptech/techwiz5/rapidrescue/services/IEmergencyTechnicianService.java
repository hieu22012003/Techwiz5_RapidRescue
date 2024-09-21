package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Emergencytechnician;

import java.util.List;
import java.util.Optional;

public interface IEmergencyTechnicianService {
    List<Emergencytechnician> getAllEmergencyTechnicians();
    Optional<Emergencytechnician> getEmergencyTechnicianById(Integer id);
    Emergencytechnician creEmergencyTechnician(Emergencytechnician emergencyTechnician);
    Emergencytechnician updateEmergencyTechnician(Emergencytechnician emergencyTechnician);
    void deleteEmergencyTechnician(Integer id);
}

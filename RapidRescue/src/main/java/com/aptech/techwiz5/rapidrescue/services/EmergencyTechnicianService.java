package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;
import com.aptech.techwiz5.rapidrescue.models.EmergencyTechnician;
import com.aptech.techwiz5.rapidrescue.repositories.EmergencyTechnicianRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmergencyTechnicianService implements IEmergencyTechnicianService {
    final EmergencyTechnicianRepository emergencyTechnicianRepository;
    @Override
    public List<EmergencyTechnician> getAllEmergencyTechnicians() {
        return emergencyTechnicianRepository.findAll();
    }

    @Override
    public Optional<EmergencyTechnician> getEmergencyTechnicianById(Integer id) {
        Optional<EmergencyTechnician> emergencyTechnician = emergencyTechnicianRepository.findById(id);
        if (emergencyTechnician.isEmpty()){
            throw new RuntimeException("Emergency Technician not found");
        }
        return emergencyTechnician;
    }

    @Override
    public EmergencyTechnician creEmergencyTechnician(EmergencyTechnician emergencyTechnician) {
        emergencyTechnician.setCreatedAt(LocalDateTime.now());
        return emergencyTechnicianRepository.save(emergencyTechnician);
    }

    @Override
    public EmergencyTechnician updateEmergencyTechnician(EmergencyTechnician emergencyTechnician) {
        Optional<EmergencyTechnician> emergencyTechnicianOptional = emergencyTechnicianRepository.findById(emergencyTechnician.getId());
        if (emergencyTechnicianOptional.isEmpty()){
            throw new RuntimeException("Emergency Technician not found");
        }

        EmergencyTechnician emergencyTechnician1 = emergencyTechnicianOptional.get();
        if(emergencyTechnician.getUser() != null){
            emergencyTechnician1.setUser(emergencyTechnician.getUser());
        }
        if(emergencyTechnician.getId() != null){
            emergencyTechnician1.setId(emergencyTechnician.getId());
        }
        if (emergencyTechnician.getCertification() != null){
            emergencyTechnician1.setCertification(emergencyTechnician.getCertification());
        }
        emergencyTechnician1.setUpdatedAt(LocalDateTime.now());
        return emergencyTechnician1;
    }

    @Override
    public void deleteEmergencyTechnician(Integer id) {
        emergencyTechnicianRepository.deleteById(id);
    }
}

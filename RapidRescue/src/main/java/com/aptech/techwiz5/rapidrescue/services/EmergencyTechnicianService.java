package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Emergencytechnician;
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
    public List<Emergencytechnician> getAllEmergencyTechnicians() {
        return emergencyTechnicianRepository.findAll();
    }

    @Override
    public Optional<Emergencytechnician> getEmergencyTechnicianById(Integer id) {
        Optional<Emergencytechnician> emergencyTechnician = emergencyTechnicianRepository.findById(id);
        if (emergencyTechnician.isEmpty()){
            throw new RuntimeException("Emergency Technician not found");
        }
        return emergencyTechnician;
    }

    @Override
    public Emergencytechnician creEmergencyTechnician(Emergencytechnician emergencyTechnician) {
        emergencyTechnician.setCreatedAt(LocalDateTime.now());
        return emergencyTechnicianRepository.save(emergencyTechnician);
    }

    @Override
    public Emergencytechnician updateEmergencyTechnician(Emergencytechnician emergencyTechnician) {
        Optional<Emergencytechnician> emergencyTechnicianOptional = emergencyTechnicianRepository.findById(emergencyTechnician.getId());
        if (emergencyTechnicianOptional.isEmpty()){
            throw new RuntimeException("Emergency Technician not found");
        }

        Emergencytechnician emergencyTechnician1 = emergencyTechnicianOptional.get();
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

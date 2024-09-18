package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;
import com.aptech.techwiz5.rapidrescue.models.User;
import com.aptech.techwiz5.rapidrescue.repositories.EmergencyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmergencyRequestService implements IEmergencyRequestService {
    final EmergencyRequestRepository emergencyRequestRepository;
    @Override
    public List<EmergencyRequest> getAllEmergencyRequest() {
        return emergencyRequestRepository.findAll();
    }

    @Override
    public Optional<EmergencyRequest> getEmergencyRequestById(Integer id) {
        Optional<EmergencyRequest> emergencyRequest = emergencyRequestRepository.findById(id);
        if (emergencyRequest.isEmpty()){
            throw new RuntimeException("Emergency Request not found");
        }
        return emergencyRequest;
    }

    @Override
    public EmergencyRequest createEmergencyRequest(EmergencyRequest emergencyRequest) {
        emergencyRequest.setCreatedAt(LocalDateTime.now());
        return emergencyRequestRepository.save(emergencyRequest);
    }

    @Override
    public EmergencyRequest updateEmergencyRequest(EmergencyRequest emergencyRequest) {
        Optional<EmergencyRequest> emergencyRequestOptional = emergencyRequestRepository.findById(emergencyRequest.getId());
        if (emergencyRequestOptional.isEmpty()){
            throw new RuntimeException("Emergency Request not found");
        }

        EmergencyRequest emergencyRequest1 = emergencyRequestOptional.get();
        if(emergencyRequest.getEmergencyType() != null){
            emergencyRequest1.setEmergencyType(emergencyRequest.getEmergencyType());
        }
        if(emergencyRequest.getPickupLocation() != null){
            emergencyRequest1.setPickupLocation(emergencyRequest.getPickupLocation());
        }
        if (emergencyRequest.getStatus() != null){
            emergencyRequest1.setStatus(emergencyRequest.getStatus());
        }
        emergencyRequest1.setUpdatedAt(LocalDateTime.now());
        return emergencyRequest1;
    }

    @Override
    public void deleteEmergencyRequest(Integer id) {
        emergencyRequestRepository.deleteById(id);
    }
}

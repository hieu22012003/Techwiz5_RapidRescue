package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Emergencyrequest;
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
    public List<Emergencyrequest> getAllEmergencyRequest() {
        return emergencyRequestRepository.findAll();
    }

    @Override
    public Optional<Emergencyrequest> getEmergencyRequestById(Integer id) {
        Optional<Emergencyrequest> emergencyRequest = emergencyRequestRepository.findById(id);
        if (emergencyRequest.isEmpty()){
            throw new RuntimeException("Emergency Request not found");
        }
        return emergencyRequest;
    }

    @Override
    public Emergencyrequest createEmergencyRequest(Emergencyrequest emergencyRequest) {
        emergencyRequest.setCreatedAt(LocalDateTime.now());
        return emergencyRequestRepository.save(emergencyRequest);
    }

    @Override
    public Emergencyrequest updateEmergencyRequest(Emergencyrequest emergencyRequest) {
        Optional<Emergencyrequest> emergencyRequestOptional = emergencyRequestRepository.findById(emergencyRequest.getId());
        if (emergencyRequestOptional.isEmpty()){
            throw new RuntimeException("Emergency Request not found");
        }

        Emergencyrequest emergencyRequest1 = emergencyRequestOptional.get();
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

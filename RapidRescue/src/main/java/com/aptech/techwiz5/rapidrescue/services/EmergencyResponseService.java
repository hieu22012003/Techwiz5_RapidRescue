package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Emergencyresponse;
import com.aptech.techwiz5.rapidrescue.repositories.EmergencyResponseRepository;
import com.aptech.techwiz5.rapidrescue.repositories.EmergencyTechnicianRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmergencyResponseService implements IEmergencyResponseService{
    final EmergencyResponseRepository emergencyResponseRepository;

    @Override
    public Optional<Emergencyresponse> getEmergencyResponseById(Integer response_id) {
        Optional<Emergencyresponse> emergencyResponse = emergencyResponseRepository.findById(response_id);
        if (emergencyResponse.isEmpty()){
            throw new RuntimeException("Emergency Response not found");
        }
        return emergencyResponse;
    }

    @Override
    public List<Emergencyresponse> getAllEmrgencyResponse() {
        return emergencyResponseRepository.findAll();
    }
}

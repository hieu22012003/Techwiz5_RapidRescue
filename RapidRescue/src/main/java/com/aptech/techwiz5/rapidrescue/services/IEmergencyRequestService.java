package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;

import java.util.List;
import java.util.Optional;

public interface IEmergencyRequestService {
    List<EmergencyRequest> getAllEmergencyRequest();
    Optional<EmergencyRequest> getEmergencyRequestById(Integer id);
    EmergencyRequest createEmergencyRequest(EmergencyRequest emergencyRequest);
    EmergencyRequest updateEmergencyRequest(EmergencyRequest emergencyRequest);
    void deleteEmergencyRequest(Integer id);
}

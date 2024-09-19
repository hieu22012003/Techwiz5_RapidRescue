package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.EmergencyResponse;

import java.util.List;
import java.util.Optional;

public interface IEmergencyResponseService {
    Optional<EmergencyResponse> getEmergencyResponseById(Integer response_id );
    List<EmergencyResponse> getAllEmrgencyResponse();
}

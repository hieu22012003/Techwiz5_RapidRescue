package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Emergencyresponse;

import java.util.List;
import java.util.Optional;

public interface IEmergencyResponseService {
    Optional<Emergencyresponse> getEmergencyResponseById(Integer response_id );
    List<Emergencyresponse> getAllEmrgencyResponse();
}

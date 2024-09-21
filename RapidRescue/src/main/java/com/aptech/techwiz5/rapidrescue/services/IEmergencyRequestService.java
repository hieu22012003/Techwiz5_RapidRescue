package com.aptech.techwiz5.rapidrescue.services;


import com.aptech.techwiz5.rapidrescue.models.Emergencyrequest;

import java.util.List;
import java.util.Optional;

public interface IEmergencyRequestService {
    List<Emergencyrequest> getAllEmergencyRequest();
    Optional<Emergencyrequest> getEmergencyRequestById(Integer id);
    Emergencyrequest createEmergencyRequest(Emergencyrequest emergencyRequest);
    Emergencyrequest updateEmergencyRequest(Emergencyrequest emergencyRequest);
    void deleteEmergencyRequest(Integer id);
}

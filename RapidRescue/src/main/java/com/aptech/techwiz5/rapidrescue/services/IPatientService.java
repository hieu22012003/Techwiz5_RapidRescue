package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Patient;

import java.util.List;
import java.util.Optional;

public interface IPatientService {
    List<Patient> getAllPatients();
    Optional<Patient> getPatientById(Integer patient_id);
    Patient createPatient(Patient patient);
    Patient updaetePatient(Patient patient);
    void deletePatient(Integer patient_id);

}

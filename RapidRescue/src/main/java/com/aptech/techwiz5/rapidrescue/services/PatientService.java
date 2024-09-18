package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Patient;
import com.aptech.techwiz5.rapidrescue.repositories.PatientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PatientService implements IPatientService{
    final PatientRepository patientRepository;

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Optional<Patient> getPatientById(Integer patient_id) {
        return patientRepository.findById(patient_id);
    }

    @Override
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient updaetePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public void deletePatient(Integer patient_id) {
        patientRepository.deleteById(patient_id);
    }
}

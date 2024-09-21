package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Medicalequipment;
import com.aptech.techwiz5.rapidrescue.repositories.MedicalequipmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MedicalequipmentService {
    private final MedicalequipmentRepository medicalequipmentRepository;

    public Medicalequipment createMedicalequipment(Medicalequipment medicalequipment) {
        medicalequipment.setCreatedAt(LocalDateTime.now());
        return medicalequipmentRepository.save(medicalequipment);
    }
    public Medicalequipment updateMedicalequipment(Medicalequipment medicalequipmentUpdate) {
        Optional<Medicalequipment> medicalequipmentOptional = medicalequipmentRepository.findById(medicalequipmentUpdate.getId());
        if (medicalequipmentOptional.isPresent()) {
            throw new RuntimeException("not found");
        }
        Medicalequipment medicalequipment= medicalequipmentOptional.get();
        if (medicalequipmentUpdate.getAmbulance()!=null){
            medicalequipment.setAmbulance(medicalequipmentUpdate.getAmbulance());
        }
        if (medicalequipmentUpdate.getEquipmentName()!=null){
            medicalequipment.setEquipmentName(medicalequipmentUpdate.getEquipmentName());
        }
        if (medicalequipmentUpdate.getStatus()!=null){
            medicalequipment.setStatus(medicalequipmentUpdate.getStatus());
        }
        medicalequipment.setUpdatedAt(LocalDateTime.now());
        return medicalequipment;
    }
    public void deleteMedicalequipment(int id) {
        medicalequipmentRepository.deleteById(id);
    }
    public List<Medicalequipment> getAllMedicalequipment() {
        return medicalequipmentRepository.findAll();
    }
    public Medicalequipment getMedicalequipment(int id) {
        Optional<Medicalequipment> medicalequipmentOptional = medicalequipmentRepository.findById(id);
        if (medicalequipmentOptional.isPresent()) {
            throw new RuntimeException("not found");
        }
        return medicalequipmentOptional.get();
    }
}

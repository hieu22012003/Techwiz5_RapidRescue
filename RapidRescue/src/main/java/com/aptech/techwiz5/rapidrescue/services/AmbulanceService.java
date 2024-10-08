package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Ambulance;
import com.aptech.techwiz5.rapidrescue.repositories.AmbulanceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class AmbulanceService {
    private final AmbulanceRepository ambulanceRepository;

    public Ambulance createAmbulance(Ambulance ambulance) {
        // Kiểm tra xem xe cứu thương có biển số đã tồn tại trong cơ sở dữ liệu không
        Optional<Ambulance> ambulanceOptional = Optional.ofNullable(ambulanceRepository.findByLicensePlate(ambulance.getLicensePlate()));

        if (ambulanceOptional.isPresent()) {
            // Nếu tồn tại, ném ra ngoại lệ
            throw new RuntimeException("Ambulance with this license plate already exists");
        }
        ambulance.setCreatedAt(LocalDateTime.now());

        // Lưu xe cứu thương vào database
        return ambulanceRepository.save(ambulance);
    }


    public Ambulance updateAmbulance(Ambulance ambulanceUpdate){
        Optional<Ambulance> ambulanceOptional = ambulanceRepository.findById(ambulanceUpdate.getId());
        if (ambulanceOptional.isEmpty()){
            throw new RuntimeException("Ambulance not found");
        }

        Ambulance ambulance = ambulanceOptional.get();
        if(ambulanceUpdate.getDriver() != null){
            ambulance.setDriver(ambulanceUpdate.getDriver());
        }
        if(ambulanceUpdate.getLicensePlate() != null){
            ambulance.setLicensePlate(ambulanceUpdate.getLicensePlate());
        }
        if (ambulanceUpdate.getAmbulanceType() != null){
            ambulance.setAmbulanceType(ambulanceUpdate.getAmbulanceType());
        }
        if(ambulanceUpdate.getLastLocation() != null){
            ambulance.setLastLocation(ambulanceUpdate.getLastLocation());
        }
        if(ambulanceUpdate.getStatus() != null){
            ambulance.setStatus(ambulanceUpdate.getStatus());
        }
        ambulance.setUpdatedAt(LocalDateTime.now());
        return ambulance;
    }

    public List<Ambulance> getAvailableAmbulances() {
        return ambulanceRepository.findAmbulancesByStatus("Available");
    }

    public void deleteAmbulance(int id){
        ambulanceRepository.deleteById(id);
    }

    public List<Ambulance> getAllAmbulances(){
        return ambulanceRepository.findAll();
    }

    public Ambulance getAmbulanceById(int id){
        Optional<Ambulance> ambulanceOptional = ambulanceRepository.findById(id);
        if (ambulanceOptional.isEmpty()){
            throw new RuntimeException("Ambulance not found");
        }
        return ambulanceOptional.get();
    }
}

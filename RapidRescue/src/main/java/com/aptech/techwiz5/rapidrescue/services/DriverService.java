package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Driver;
import com.aptech.techwiz5.rapidrescue.repositories.DriverRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DriverService {
    private DriverRepository driverRepository;

    public Driver createDriver(Driver driver) {
        driver.setCreatedAt(LocalDateTime.now());
        return driverRepository.save(driver);
    }

    public Driver updateDriver(Driver driverUpdate) {
        Optional<Driver> driverOptional = driverRepository.findById(driverUpdate.getId());
        if (driverOptional.isPresent()) {
            throw new RuntimeException("Driver not found");
        }
        Driver driver = driverOptional.get();

        if (driverUpdate.getFirstName() != null) {
            driver.setFirstName(driverUpdate.getFirstName());
        }
        if (driverUpdate.getLastName() != null) {
            driver.setLastName(driverUpdate.getLastName());
        }
        if (driver.getNumberPhone()!= null){
            driver.setNumberPhone(driverUpdate.getNumberPhone());
        }
        driver.setUpdatedAt(LocalDateTime.now());
        return driver;
    }
    public void deleteDriver(int id) {
        driverRepository.deleteById(id);
    }
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    public Driver getDriverById(int id) {
        Optional<Driver> driverOptional = driverRepository.findById(id);
        if (driverOptional.isPresent()) {
            throw new RuntimeException("Driver not found");
        }
        return driverOptional.get();
    }
}


package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Driver;
import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;
import com.aptech.techwiz5.rapidrescue.repositories.DriveRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DriverService implements IDriverService{
    final DriveRepository driveRepository;
    @Override
    public List<Driver> getAllDrive() {
        return driveRepository.findAll();
    }

    @Override
    public Optional<Driver> getDriveById(Integer driver_id) {
        Optional<Driver> driver = driveRepository.findById(driver_id);
        if (driver.isEmpty()){
            throw new RuntimeException("Driver not found");
        }
        return driver;
    }

    @Override
    public Driver createDrive(Driver driver) {
        driver.setCreatedAt(LocalDateTime.now());
        return driveRepository.save(driver);
    }

    @Override
    public Driver updateDrive(Driver driver) {
        Optional<Driver> driverOptional = driveRepository.findById(driver.getId());
        if (driverOptional.isEmpty()){
            throw new RuntimeException("Driver not found");
        }

        Driver driver1 = driverOptional.get();
        if(driver.getId() != null){
            driver1.setId(driver.getId());
        }
        if(driver.getFirstName() != null){
            driver1.setFirstName(driver.getFirstName());
        }
        if (driver.getLastName() != null){
            driver1.setLastName(driver.getLastName());
        }
        if (driver.getNumberPhone() != null){
            driver1.setNumberPhone(driver.getNumberPhone());
        }
        driver1.setUpdatedAt(LocalDateTime.now());
        return driver1;
    }

    @Override
    public void deleteDrive(Integer driver_id) {

    }
}

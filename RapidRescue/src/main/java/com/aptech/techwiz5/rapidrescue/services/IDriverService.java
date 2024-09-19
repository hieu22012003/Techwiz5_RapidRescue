package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Driver;

import java.util.List;
import java.util.Optional;

public interface IDriverService {
    List<Driver> getAllDrive();
    Optional<Driver> getDriveById(Integer driver_id );
    Driver createDrive(Driver driver);
    Driver updateDrive(Driver driver);
    void deleteDrive(Integer driver_id);
}

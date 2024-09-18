package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Driver;
import com.aptech.techwiz5.rapidrescue.services.DriverService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/driver")
public class DriverController {
    private final DriverService driverService;

    @RequestMapping("/create")
    public ResponseEntity<Driver> createDriver(@RequestBody Driver driver){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(driverService.createDriver(driver));
    }

    @PutMapping("/update")
    public ResponseEntity<Driver> updateDriver(@RequestBody Driver DriverUpdate){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(driverService.updateDriver(DriverUpdate));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDriver(@RequestParam int id){
        driverService.deleteDriver(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete success!!");
    }

    @GetMapping
    public ResponseEntity<List<Driver>> getAllDrivers(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(driverService.getAllDrivers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Driver>> getDriverById(@PathVariable int id){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(driverService.getDriverById(id));
    }


}

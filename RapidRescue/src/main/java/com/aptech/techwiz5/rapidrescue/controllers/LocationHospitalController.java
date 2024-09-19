package com.aptech.techwiz5.rapidrescue.controllers;


import com.aptech.techwiz5.rapidrescue.models.LocationHospital;
import com.aptech.techwiz5.rapidrescue.services.LocationHospitalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/location")
public class LocationHospitalController {
    private final LocationHospitalService locationService;

    @RequestMapping("/create")
    public ResponseEntity<LocationHospital> createLocationHospital(@RequestBody LocationHospital location) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(locationService.createLocation(location));
    }
    @PutMapping("/update")
    public ResponseEntity<LocationHospital> updateLocationHospital(@RequestBody LocationHospital location) {
        return ResponseEntity.status(HttpStatus.OK).body(locationService.updateLocation(location));
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteLocationHospital(@RequestBody int id) {
        locationService.deleteLocation(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete success!!");
    }
    @GetMapping
    public ResponseEntity<List<LocationHospital>> getLocationHospitals() {
        return ResponseEntity.status(HttpStatus.OK).body(locationService.getAllLocations());
    }
    @GetMapping("/{id}")
    public ResponseEntity<LocationHospital> getLocationHospitalById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(locationService.getLocationById(id));
    }

}

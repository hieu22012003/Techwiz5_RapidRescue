package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Hospital;
import com.aptech.techwiz5.rapidrescue.services.HospitalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/hospital")
public class HospitalController {
    private final HospitalService hospitalService;
    @RequestMapping("/create")
    public ResponseEntity<Hospital> createHospital(@RequestBody Hospital hospital) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(hospitalService.createHospital(hospital));
    }

    @PutMapping("/update")
    public ResponseEntity<Hospital> updateHospital(@RequestBody Hospital hospital) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(hospitalService.updateHospital(hospital));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteHospital(@PathVariable int id) {
        hospitalService.deleteHospital(id);
        return ResponseEntity.status(HttpStatus.OK).body("delete success!!");
    }

    @GetMapping
    public ResponseEntity<List<Hospital>> getAllHospitals() {
        return ResponseEntity.status(HttpStatus.OK).body(hospitalService.getAllHospitals());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> getHospitalById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(hospitalService.getHospitalById(id));
    }

}

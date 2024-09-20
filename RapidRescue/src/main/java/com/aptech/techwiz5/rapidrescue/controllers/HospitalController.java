package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Hospital;
import com.aptech.techwiz5.rapidrescue.services.HospitalService;
import lombok.AllArgsConstructor;
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
        return ResponseEntity.ok(hospitalService.createHospital(hospital));
    }

    @PutMapping("/update")
    public ResponseEntity<Hospital> updateHospital(@RequestBody Hospital hospital) {
        return ResponseEntity.ok(hospitalService.updateHospital(hospital));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Hospital> deleteHospital(@PathVariable int id) {
        hospitalService.deleteHospital(id);
        return ResponseEntity.ok().build();
    }
    @GetMapping
    public ResponseEntity<List<Hospital>> getAllHospitals() {
        return ResponseEntity.ok(hospitalService.getAllHospitals());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Hospital>> getHospitalById(@PathVariable int id) {
        return ResponseEntity.ok(hospitalService.getHospitalById(id));
    }
}

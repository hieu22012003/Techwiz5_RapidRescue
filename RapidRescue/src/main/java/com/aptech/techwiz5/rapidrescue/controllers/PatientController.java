package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Patient;
import com.aptech.techwiz5.rapidrescue.models.Patient;
import com.aptech.techwiz5.rapidrescue.services.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/patient")
public class PatientController {
    final PatientService patientService;

    @RequestMapping("/create")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(patientService.createPatient(patient));
    }

    @PutMapping("/update")
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patientUpdate){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(patientService.updaetePatient(patientUpdate));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePatient(@RequestParam int id){
        patientService.deletePatient(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete success!!");
    }

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(patientService.getAllPatients());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Patient>> getPatientById(@PathVariable int id){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(patientService.getPatientById(id));
    }
}

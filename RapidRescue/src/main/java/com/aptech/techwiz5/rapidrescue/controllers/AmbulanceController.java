package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Ambulance;
import com.aptech.techwiz5.rapidrescue.services.AmbulanceService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/ambulances")
public class AmbulanceController {
    private final AmbulanceService ambulanceService;

    @RequestMapping("/create")
    public ResponseEntity<Ambulance> createAmbulance(@RequestBody Ambulance ambulance){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ambulanceService.createAmbulance(ambulance));
    }

    @PutMapping("/update")
    public ResponseEntity<Ambulance> updateAmbulance(@RequestBody Ambulance ambulanceUpdate){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ambulanceService.updateAmbulance(ambulanceUpdate));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAmbulance(@RequestParam int id){
        ambulanceService.deleteAmbulance(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete success!!");
    }

    @GetMapping
    public ResponseEntity<List<Ambulance>> getAllAmbulances(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ambulanceService.getAllAmbulances());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ambulance> getAmbulanceById(@PathVariable int id){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ambulanceService.getAmbulanceById(id));
    }

}

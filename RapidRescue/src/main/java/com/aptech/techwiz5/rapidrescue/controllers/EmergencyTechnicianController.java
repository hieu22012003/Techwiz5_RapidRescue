package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;
import com.aptech.techwiz5.rapidrescue.models.EmergencyTechnician;
import com.aptech.techwiz5.rapidrescue.services.EmergencyTechnicianService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emergency-technician")
@AllArgsConstructor
public class EmergencyTechnicianController {
    final EmergencyTechnicianService emergencyTechnicianService;
    @GetMapping("list")
    public ResponseEntity<List<EmergencyTechnician>> getAll(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(emergencyTechnicianService.getAllEmergencyTechnicians());
    }

    @PostMapping("save")
    public ResponseEntity<?> save(@RequestBody EmergencyTechnician emergencyTechnician){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(emergencyTechnicianService.creEmergencyTechnician(emergencyTechnician));
    }

}

package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Ambulance;
import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;
import com.aptech.techwiz5.rapidrescue.services.EmailService;
import com.aptech.techwiz5.rapidrescue.services.EmergencyRequestService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.logging.Logger;

import java.util.List;

@RestController
@RequestMapping("/emergency-request")
@AllArgsConstructor
public class EmergencyRequestController {
    final EmergencyRequestService emergencyRequestService;
    final EmailService emailService;

    @GetMapping
    public ResponseEntity<List<EmergencyRequest>> getAllEmergencyRequest(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(emergencyRequestService.getAllEmergencyRequest());
    }
//    @RequestMapping("/create")
//    public ResponseEntity<EmergencyRequest> createAEmergencyRequest(@RequestBody EmergencyRequest emergencyRequest){
//        return ResponseEntity
//                .status(HttpStatus.OK)
//                .body(emergencyRequestService.createEmergencyRequest(emergencyRequest));
//    }

    @PutMapping("/update")
    public ResponseEntity<EmergencyRequest> updateEmergencyRequest(@RequestBody EmergencyRequest emergencyRequest){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(emergencyRequestService.updateEmergencyRequest(emergencyRequest));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmergencyRequest(@RequestParam int id){
        emergencyRequestService.deleteEmergencyRequest(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete success!!");
    }

    @PostMapping("/create")
    public ResponseEntity<EmergencyRequest> createRequest(@RequestBody EmergencyRequest emergencyRequest) {
        try {
            // Validate the request body to ensure all required fields are present and valid
            if (emergencyRequest == null) {
                return ResponseEntity.badRequest().build();
            }

            // Save the emergency request to the database
            EmergencyRequest savedRequest = emergencyRequestService.createEmergencyRequest(emergencyRequest);

            // Send an email notification to the user
            emailService.sendEmail("DongVu7173@gmail.com", "subject", "Body");

            return ResponseEntity.ok(savedRequest);
        } catch (Exception e) {
            // Handle exceptions gracefully and log them for debugging

            return ResponseEntity.internalServerError().build();
        }
    }
}

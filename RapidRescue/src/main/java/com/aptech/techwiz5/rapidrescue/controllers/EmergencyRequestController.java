package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Emergencyrequest;
import com.aptech.techwiz5.rapidrescue.services.EmailService;
import com.aptech.techwiz5.rapidrescue.services.EmergencyRequestService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import java.util.List;

@RestController
@RequestMapping("/emergency-request")
@AllArgsConstructor
public class EmergencyRequestController {
    final EmergencyRequestService emergencyRequestService;
    final EmailService emailService;

    @GetMapping
    public ResponseEntity<List<Emergencyrequest>> getAllEmergencyRequest(){
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
    public ResponseEntity<Emergencyrequest> updateEmergencyRequest(@RequestBody Emergencyrequest emergencyRequest){
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
    public ResponseEntity<?> createRequest(@Valid @RequestBody Emergencyrequest emergencyRequest, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            result.getFieldErrors().forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
            return ResponseEntity.badRequest().body(errors);  // Return detailed validation errors
        }

        try {
            Emergencyrequest savedRequest = emergencyRequestService.createEmergencyRequest(emergencyRequest);
            emailService.sendEmail("DongVu7173@gmail.com", "subject", "Body");
            return ResponseEntity.ok(savedRequest);

        } catch (MailException e) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body("Email service failed.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An internal server error occurred.");
        }
    }

}

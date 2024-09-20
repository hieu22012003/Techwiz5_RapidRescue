package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.DTO.LocationDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/gps")
public class GpsController {
    private final SimpMessagingTemplate messagingTemplate;


    @PostMapping("/location/update")
    public void updateLocation(@RequestBody LocationDTO location) {
        System.out.println("Sending location: " + location);
        messagingTemplate.convertAndSend("/topic/location", location);
    }

}

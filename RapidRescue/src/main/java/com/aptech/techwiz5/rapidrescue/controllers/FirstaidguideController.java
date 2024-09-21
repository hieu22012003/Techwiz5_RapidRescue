package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Firstaidguide;
import com.aptech.techwiz5.rapidrescue.services.FirstaidguideService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/first-aid-guide")
@AllArgsConstructor
public class FirstaidguideController {
    private final FirstaidguideService firstaidguideService;

    @RequestMapping("/create")
    public ResponseEntity<Firstaidguide> createFirstaidguide(@RequestBody Firstaidguide firstaidguide) {
        return ResponseEntity.status(HttpStatus.OK).body(firstaidguideService.createFirstaidguide(firstaidguide));
    }
    @PutMapping("/update")
    public ResponseEntity<Firstaidguide> updateFirstaidguide(@RequestBody Firstaidguide firstaidguide) {
        return ResponseEntity.status(HttpStatus.OK).body(firstaidguideService.updateFirstaidguide(firstaidguide));
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteFirstaidguide(@RequestBody int id) {
        firstaidguideService.deleteFirstaidguide(id);
        return ResponseEntity.status(HttpStatus.OK).body("delete success!!");
    }
    @GetMapping
    public ResponseEntity<List<Firstaidguide>> getAllFirstaidguides() {
        return ResponseEntity.status(HttpStatus.OK).body(firstaidguideService.getAllFirstaidguides());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Firstaidguide> getFirstaidguide(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(firstaidguideService.getFirstaidguideById(id));
    }
}
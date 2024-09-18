package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Feedback;
import com.aptech.techwiz5.rapidrescue.services.FeedbackService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    private final FeedbackService feedbackService;

    @RequestMapping("/create")
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){
        return  ResponseEntity.ok(feedbackService.createFeedback(feedback));
    }
    @PutMapping("/update")
    public ResponseEntity<Feedback> updateFeedback(@RequestBody Feedback feedback){
        return  ResponseEntity.ok(feedbackService.updateFeedback(feedback));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable int id){
        feedbackService.deleteFeedback(id);
        return ResponseEntity.ok().body("Delete success!!");
    }
    @GetMapping
    public ResponseEntity<List<Feedback>> getFeedbacks(){
        return ResponseEntity.ok().body(feedbackService.getAllFeedbacks());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedback(@PathVariable int id){
        return ResponseEntity.ok().body(feedbackService.getFeedbackById(id));
    }
}

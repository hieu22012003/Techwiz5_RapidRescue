package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Feedback;
import com.aptech.techwiz5.rapidrescue.services.FeedbackService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    private final FeedbackService feedbackService;

    @RequestMapping("/create")
    public ResponseEntity<Feedback>createFeedback(@RequestBody Feedback feedback) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(feedbackService.createFeedback(feedback));
    }
    @PutMapping("/update")
    public ResponseEntity<Feedback> updateFeedback(@RequestBody Feedback feedback) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(feedbackService.updateFeedback(feedback));
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteFeedback(@RequestBody int id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.status(HttpStatus.OK).body(" delete success!!");
    }
    @GetMapping
    public ResponseEntity<List<Feedback>> getFeedbacks() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body( feedbackService.getAllFeedbacks());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedback(@PathVariable int id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(feedbackService.getFeedbackById(id));
    }
}

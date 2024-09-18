package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Feedback;
import com.aptech.techwiz5.rapidrescue.repositories.FeedbackRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FeedbackService {
    private FeedbackRepository feedbackRepository;

    public Feedback createFeedback(Feedback feedback) {
        feedback.setCreatedAt(LocalDateTime.now());
        return feedbackRepository.save(feedback);
    }

    public Feedback updateFeedback(Feedback feedbackUpdate) {
        Optional<Feedback>feedbackOptional=feedbackRepository.findById(feedbackUpdate.getId());
        if(feedbackOptional.isPresent()) {
            throw new RuntimeException("Feedback not found");
        }

        Feedback feedback= feedbackOptional.get();
        if (feedback.getUser() !=null){
            feedback.setUser(feedbackUpdate.getUser());
        }
        if (feedback.getFeedbackText()!=null){
            feedback.setFeedbackText(feedbackUpdate.getFeedbackText());
        }
        if (feedback.getRating()!=null){
            feedback.setRating(feedbackUpdate.getRating());
        }
        feedback.setUpdatedAt(LocalDateTime.now());
        return feedback;
    }
    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }
    public Feedback getFeedbackById(int id) {
        Optional <Feedback>feedbackOptional=feedbackRepository.findById(id);
        if(feedbackOptional.isPresent()) {
            throw new RuntimeException("Feedback not found");
        }
        return feedbackOptional.get();
    }
}

package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Firstaidguide;
import com.aptech.techwiz5.rapidrescue.repositories.FirstaidguideRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FirstaidguideService {
    private final FirstaidguideRepository firstaidguideRepository;

    public Firstaidguide createFirstaidguide(Firstaidguide firstaidguide) {
        firstaidguide.setCreatedAt(LocalDateTime.now());
        return firstaidguideRepository.save(firstaidguide);
    }
    public Firstaidguide updateFirstaidguide(Firstaidguide firstaidguideUpdate) {
        Optional<Firstaidguide>  firstaidguideOptional=firstaidguideRepository.findById(firstaidguideUpdate.getId());
        if (firstaidguideOptional.isPresent()) {
            throw new RuntimeException("Firstaidguide not found");
        }
        Firstaidguide firstaidguide=firstaidguideOptional.get();
        if (firstaidguideUpdate.getGuideText()!=null){
            firstaidguide.setGuideText(firstaidguideUpdate.getGuideText());
        }
        firstaidguide.setUpdatedAt(LocalDateTime.now());
        return firstaidguide;
    }
    public void deleteFirstaidguide(int id) {
        firstaidguideRepository.deleteById(id);
    }
    public List<Firstaidguide> getAllFirstaidguides() {
        return firstaidguideRepository.findAll();
    }
    public Firstaidguide getFirstaidguideById(int id) {
        Optional<Firstaidguide> firstaidguide=firstaidguideRepository.findById(id);
        if (firstaidguide.isPresent()) {
            throw new RuntimeException("Firstaidguide not found");
        }
        return firstaidguide.get();
    }
}

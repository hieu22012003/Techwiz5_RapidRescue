package com.aptech.techwiz5.rapidrescue.repositories;

import com.aptech.techwiz5.rapidrescue.models.EmergencyResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmergencyResponseRepository  extends JpaRepository<EmergencyResponse, Integer> {
}

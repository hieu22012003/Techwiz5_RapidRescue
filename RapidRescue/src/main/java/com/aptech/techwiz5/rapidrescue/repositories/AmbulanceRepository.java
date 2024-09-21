package com.aptech.techwiz5.rapidrescue.repositories;

import com.aptech.techwiz5.rapidrescue.models.Ambulance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AmbulanceRepository extends JpaRepository<Ambulance,Integer > {
    Ambulance findByLicensePlate(String license_plate);
    @Query("SELECT a FROM Ambulance a WHERE a.status = :status")
    List<Ambulance> findAmbulancesByStatus(@Param("status") String status);

}

package com.aptech.techwiz5.rapidrescue.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "EmergencyRequest", schema = "RapidRescure")
public class EmergencyRequest {
    @Id
    @Column(name = "request_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ambulance_id")
    private Ambulance ambulance;

    @Lob
    @Column(name = "emergency_type", nullable = false)
    private String emergencyType;

    @Column(name = "location_hospital_id")
    private Integer locationHospitalId;

    @Lob
    @Column(name = "status", nullable = false)
    private String status;

    @ColumnDefault("current_timestamp()")
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @ColumnDefault("current_timestamp()")
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
    @Column(name = "deleted_at")
    private Instant deletedAt;

/*
 TODO [Reverse Engineering] create field to map the 'pickup_location' column
 Available actions: Define target Java type | Uncomment as is | Remove column mapping
    @Column(name = "pickup_location", columnDefinition = "point not null")
    private Object pickupLocation;
*/
}
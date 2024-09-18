package com.aptech.techwiz5.rapidrescue.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.geo.Point;

import java.awt.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "emergencyrequest", schema = "RapidRescure")
public class Emergencyrequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ambulance_id")
    private Ambulance ambulance;

    @Column(name = "pickup_location", columnDefinition = "point not null")
    private Point pickupLocation;

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
    private LocalDateTime createdAt;

    @ColumnDefault("current_timestamp()")
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

/*
 TODO [Reverse Engineering] create field to map the 'pickup_location' column
 Available actions: Define target Java type | Uncomment as is | Remove column mapping

*/
}
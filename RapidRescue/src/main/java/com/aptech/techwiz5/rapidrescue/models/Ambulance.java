package com.aptech.techwiz5.rapidrescue.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.geo.Point;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "ambulance", schema = "RapidRescure")
public class Ambulance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ambulance_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "driver_id")
//    @JsonIgnore
    private Driver driver;

    @Column(name = "license_plate", nullable = false, length = 50)
    private String licensePlate;

    @Lob
    @Column(name = "ambulance_type", nullable = false)
    private String ambulanceType;

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
    @Column(name = "last_location")
    private String lastLocation;

}
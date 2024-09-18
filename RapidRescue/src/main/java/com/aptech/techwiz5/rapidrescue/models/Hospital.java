package com.aptech.techwiz5.rapidrescue.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "Hospital", schema = "RapidRescure")
public class Hospital {
    @Id
    @Column(name = "hospital_id", nullable = false)
    private Integer id;

    @Column(name = "hospital_name", nullable = false)
    private String hospitalName;

    @Column(name = "location_id")
    private Integer locationId;

    @Column(name = "phone_number", length = 20)
    private String phoneNumber;

    @ColumnDefault("current_timestamp()")
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @ColumnDefault("current_timestamp()")
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

}
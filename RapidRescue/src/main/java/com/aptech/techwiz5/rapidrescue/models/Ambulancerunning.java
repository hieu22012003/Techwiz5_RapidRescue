package com.aptech.techwiz5.rapidrescue.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "ambulancerunning", schema = "RapidRescure")
public class Ambulancerunning {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ambulance_run_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "emergency_request_id")
    private Emergencyrequest emergencyRequest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ColumnDefault("current_timestamp()")
    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

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

}
package com.aptech.techwiz5.rapidrescue.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationDTO {
    private String vehicleId;  // ID của xe cứu thương
    private Double latitude;
    private Double longitude;
    private Timestamp timestamp;
}

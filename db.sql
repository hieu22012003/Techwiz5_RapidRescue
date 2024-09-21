DROP DATABASE RapidRescure;
CREATE DATABASE RapidRescure;
USE RapidRescure;

CREATE TABLE Role (
                      role_id INT AUTO_INCREMENT PRIMARY KEY,
                      role_name VARCHAR(255) NOT NULL,
                      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                      deleted_at TIMESTAMP NULL
);

INSERT INTO Role(role_name) Values ("admin");
INSERT INTO Role(role_name) Values ("emt");
INSERT INTO Role(role_name) Values ("driver");
INSERT INTO Role(role_name) Values ("customer");
CREATE TABLE User (
                      user_id INT AUTO_INCREMENT PRIMARY KEY,
                      user_name VARCHAR(255) NOT NULL,
                      address VARCHAR(255),
                      email VARCHAR(255),
                      google_id VARCHAR(255),
                      phone_number VARCHAR(20),
                      role_id INT,
                      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                      deleted_at TIMESTAMP NULL,
                      CONSTRAINT FK_User_Role FOREIGN KEY (role_id) REFERENCES Role(role_id)
);

CREATE TABLE Driver (
                        driver_id INT AUTO_INCREMENT PRIMARY KEY,
                        first_name VARCHAR(255) NOT NULL,
                        last_name VARCHAR(255) NOT NULL,
                        number_phone VARCHAR(20),
                        user_id INT,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        deleted_at TIMESTAMP NULL,
                        CONSTRAINT FK_Patient_Driver FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Ambulance (
                           ambulance_id INT AUTO_INCREMENT PRIMARY KEY,
                           driver_id INT,
                           license_plate VARCHAR(50) NOT NULL,
                           ambulance_type ENUM('Basic', 'Advanced') NOT NULL,
                           last_location varchar(255),
                           status ENUM('Available', 'On call', 'Maintenance') NOT NULL,
                           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                           deleted_at TIMESTAMP NULL,
                           CONSTRAINT FK_Ambulance_Driver FOREIGN KEY (driver_id) REFERENCES Driver(driver_id)
);

CREATE TABLE EmergencyRequest (
                                  request_id INT AUTO_INCREMENT PRIMARY KEY,
                                  user_id INT,
                                  ambulance_id INT,
                                  emergency_type ENUM('Emergency', 'Non-emergency') NOT NULL,
                                  pickup_location varchar(255) NOT NULL,
                                  location_hospital_id INT,
                                  status ENUM('Pending', 'Completed', 'Cancelled') NOT NULL,
                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                  deleted_at TIMESTAMP NULL,
                                  CONSTRAINT FK_EmergencyRequest_User FOREIGN KEY (user_id) REFERENCES User(user_id),
                                  CONSTRAINT FK_EmergencyRequest_Ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id)
);

CREATE TABLE Patient (
                         patient_id INT AUTO_INCREMENT PRIMARY KEY,
                         user_id INT,
                         first_name VARCHAR(255) NOT NULL,
                         last_name VARCHAR(255) NOT NULL,
                         medical_history TEXT,
                         allergies TEXT,
                         emergency_contact VARCHAR(255),
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                         deleted_at TIMESTAMP NULL,
                         CONSTRAINT FK_Patient_User FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE MedicalRecord (
                               record_id INT AUTO_INCREMENT PRIMARY KEY,
                               patient_id INT,
                               doctor_name VARCHAR(255) NOT NULL,
                               description TEXT,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                               deleted_at TIMESTAMP NULL,
                               CONSTRAINT FK_MedicalRecord_Patient FOREIGN KEY (patient_id) REFERENCES Patient(patient_id)
);

CREATE TABLE Hospital (
                          hospital_id INT AUTO_INCREMENT PRIMARY KEY,
                          hospital_name VARCHAR(255) NOT NULL,
                          location varchar(255),
                          phone_number VARCHAR(20),
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          deleted_at TIMESTAMP NULL
);

CREATE TABLE EmergencyTechnician (
                                     technician_id INT AUTO_INCREMENT PRIMARY KEY,
                                     user_id INT,
                                     certification VARCHAR(255) NOT NULL,
                                     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                     deleted_at TIMESTAMP NULL,
                                     CONSTRAINT FK_EmergencyTechnician_User FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Feedback (
                          feedback_id INT AUTO_INCREMENT PRIMARY KEY,
                          user_id INT,
                          feedback_text TEXT,
                          rating INT CHECK (rating >= 1 AND rating <= 5),
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          deleted_at TIMESTAMP NULL,
                          CONSTRAINT FK_Feedback_User FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Notification (
                              notification_id INT AUTO_INCREMENT PRIMARY KEY,
                              user_id INT,
                              message TEXT NOT NULL,
                              read_status ENUM('Unread', 'Read') NOT NULL,
                              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                              deleted_at TIMESTAMP NULL,
                              CONSTRAINT FK_Notification_User FOREIGN KEY (user_id) REFERENCES User(user_id)
);



CREATE TABLE FirstAidGuide (
                               guide_id INT AUTO_INCREMENT PRIMARY KEY,
                               guide_text TEXT,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                               deleted_at TIMESTAMP NULL
);

CREATE TABLE AmbulanceMaintenance (
                                      maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
                                      ambulance_id INT,
                                      maintenance_date DATE NOT NULL,
                                      description TEXT,
                                      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                      deleted_at TIMESTAMP NULL,
                                      CONSTRAINT FK_AmbulanceMaintenance_Ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id)
);

CREATE TABLE Payment (
                         payment_id INT AUTO_INCREMENT PRIMARY KEY,
                         user_id INT,
                         amount DECIMAL(10, 2) NOT NULL,
                         payment_date TIMESTAMP NOT NULL,
                         payment_status ENUM('Pending', 'Completed', 'Failed') NOT NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                         deleted_at TIMESTAMP NULL,
                         CONSTRAINT FK_Payment_User FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE MedicalEquipment (
                                  equipment_id INT AUTO_INCREMENT PRIMARY KEY,
                                  equipment_name VARCHAR(255) NOT NULL,
                                  ambulance_id INT,
                                  status ENUM('Available', 'In use', 'Under maintenance') NOT NULL,
                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                  deleted_at TIMESTAMP NULL,
                                  CONSTRAINT FK_MedicalEquipment_Ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id)
);

CREATE TABLE Message (
                         message_id INT AUTO_INCREMENT PRIMARY KEY,
                         from_user_id INT,
                         to_user_id INT,
                         content TEXT NOT NULL,
                         sent_at TIMESTAMP NOT NULL,
                         read_at TIMESTAMP NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                         deleted_at TIMESTAMP NULL,
                         CONSTRAINT FK_Message_From_User FOREIGN KEY (from_user_id) REFERENCES User(user_id),
                         CONSTRAINT FK_Message_To_User FOREIGN KEY (to_user_id) REFERENCES User(user_id)
);

CREATE TABLE EmergencyResponse (
                                   response_id INT AUTO_INCREMENT PRIMARY KEY,
                                   emergency_request_id INT,
                                   technician_id INT,
                                   response_time TIMESTAMP NOT NULL,
                                   response_status ENUM('Pending', 'Completed', 'Cancelled') NOT NULL,
                                   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                   deleted_at TIMESTAMP NULL,
                                   CONSTRAINT FK_EmergencyResponse_Request FOREIGN KEY (emergency_request_id) REFERENCES EmergencyRequest(request_id),
                                   CONSTRAINT FK_EmergencyResponse_Technician FOREIGN KEY (technician_id) REFERENCES EmergencyTechnician(technician_id)
);

CREATE TABLE Tokens (
                        token_id INT AUTO_INCREMENT PRIMARY KEY,
                        user_id INT,
                        token_type ENUM('jwt', 'refresh') NOT NULL,
                        token VARCHAR(255) NOT NULL,
                        issued_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        expires_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        is_revoked BOOLEAN NOT NULL,
                        ip_address VARCHAR(255),
                        user_agent VARCHAR(255),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        deleted_at TIMESTAMP NULL,
                        CONSTRAINT FK_Tokens_User FOREIGN KEY (user_id) REFERENCES User(user_id)
);

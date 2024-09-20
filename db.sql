DROP DATABASE rapidrescue;
CREATE DATABASE rapidrescue;
USE rapidrescue;
-- Bảng User (Người dùng)
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone_number VARCHAR(20) NOT NULL,
    googleId VARCHAR(255),
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Role (Vai trò)
CREATE TABLE Role (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Driver (Tài xế)
CREATE TABLE Driver (
    driver_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    number_phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Ambulance (Xe cứu thương)
CREATE TABLE Ambulance (
    ambulance_id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    license_plate VARCHAR(50),
    ambulance_type ENUM('Basic', 'Advanced') NOT NULL,
    status ENUM('Available', 'On call', 'Maintenance') NOT NULL,
    last_location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng EmergencyRequest (Yêu cầu)
CREATE TABLE EmergencyRequest (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    ambulance_id INT,
    emergency_type ENUM('Emergency', 'Non-emergency') NOT NULL,
    email VARCHAR(255),
    phone_number VARCHAR(20) NOT NULL,
    pickup_location VARCHAR(255),
    location_hospital_id INT,
    status ENUM('Pending', 'Completed', 'Canceled') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Patient (Bệnh nhân)
CREATE TABLE Patient (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    medical_history TEXT,
    allergies TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng MedicalRecord (Hồ sơ y tế)
CREATE TABLE MedicalRecord (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_name VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Hospital (Bệnh viện)
CREATE TABLE Hospital (
    hospital_id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_name VARCHAR(255),
    location_id INT,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng EmergencyTechnician (Kỹ thuật viên y tế khẩn cấp)
CREATE TABLE EmergencyTechnician (
    technician_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    certification VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Feedback (Phản hồi)
CREATE TABLE Feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    feedback_text TEXT,
    rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Notification (Thông báo)
CREATE TABLE Notification (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT,
    read_status ENUM('Unread', 'Read') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Location_hospital (Vị trí bệnh viện)
CREATE TABLE Location_hospital (
    location_hospital_id INT AUTO_INCREMENT PRIMARY KEY,
    ambulance_id INT,
    location VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng AmbulanceMaintenance (Bảo trì xe cứu thương)
CREATE TABLE AmbulanceMaintenance (
    maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
    ambulance_id INT,
    maintenance_date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Payment (Thanh toán)
CREATE TABLE Payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    payment_date DATE,
    payment_status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng MedicalEquipment (Thiết bị y tế)
CREATE TABLE MedicalEquipment (
    equipment_id INT AUTO_INCREMENT PRIMARY KEY,
    equipment_name VARCHAR(255),
    ambulance_id INT,
    status ENUM('Available', 'In use', 'Under maintenance') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Message (Tin nhắn)
CREATE TABLE Message (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    from_user_id INT,
    to_user_id INT,
    content TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng EmergencyResponse (Phản ứng khẩn cấp)
CREATE TABLE EmergencyResponse (
    response_id INT AUTO_INCREMENT PRIMARY KEY,
    emergency_request_id INT,
    technician_id INT,
    response_time TIMESTAMP,
    response_status ENUM('Pending', 'Responded', 'Completed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng AmbulanceRunning (Lưu trữ thông tin xe chạy)
CREATE TABLE AmbulanceRunning (
    ambulance_run_id INT AUTO_INCREMENT PRIMARY KEY,
    emergency_request_id INT,
    date_time TIMESTAMP,
    status ENUM('started', 'not started', 'completed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Bảng Tokens (Quản lý các loại token)
CREATE TABLE Tokens (
    token_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    token_type ENUM('jwt', 'refresh') NOT NULL,
    token VARCHAR(255) NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    is_revoked BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(255),
    user_agent VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Thêm khóa ngoại vào bảng User
ALTER TABLE User
ADD CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES Role(role_id);

-- Thêm khóa ngoại vào bảng Ambulance
ALTER TABLE Ambulance
ADD CONSTRAINT fk_ambulance_driver FOREIGN KEY (driver_id) REFERENCES Driver(driver_id);

-- Thêm khóa ngoại vào bảng EmergencyRequest
ALTER TABLE EmergencyRequest
ADD CONSTRAINT fk_emergencyrequest_user FOREIGN KEY (user_id) REFERENCES User(user_id),
ADD CONSTRAINT fk_emergencyrequest_ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id),
ADD CONSTRAINT fk_emergencyrequest_locationhospital FOREIGN KEY (location_hospital_id) REFERENCES Location_hospital(location_hospital_id);

-- Thêm khóa ngoại vào bảng Patient
ALTER TABLE Patient
ADD CONSTRAINT fk_patient_user FOREIGN KEY (user_id) REFERENCES User(user_id);

-- Thêm khóa ngoại vào bảng MedicalRecord
ALTER TABLE MedicalRecord
ADD CONSTRAINT fk_medicalrecord_patient FOREIGN KEY (patient_id) REFERENCES Patient(patient_id);

-- Thêm khóa ngoại vào bảng Hospital
ALTER TABLE Hospital
ADD CONSTRAINT fk_hospital_location FOREIGN KEY (location_id) REFERENCES Location_hospital(location_hospital_id);;

-- Thêm khóa ngoại vào bảng EmergencyTechnician
ALTER TABLE EmergencyTechnician
ADD CONSTRAINT fk_technician_user FOREIGN KEY (user_id) REFERENCES User(user_id);

-- Thêm khóa ngoại vào bảng Feedback
ALTER TABLE Feedback
ADD CONSTRAINT fk_feedback_user FOREIGN KEY (user_id) REFERENCES User(user_id);

-- Thêm khóa ngoại vào bảng Notification
ALTER TABLE Notification
ADD CONSTRAINT fk_notification_user FOREIGN KEY (user_id) REFERENCES User(user_id);

-- Thêm khóa ngoại vào bảng Location_hospital
ALTER TABLE Location_hospital
ADD CONSTRAINT fk_locationhospital_ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id);

-- Thêm khóa ngoại vào bảng AmbulanceMaintenance
ALTER TABLE AmbulanceMaintenance
ADD CONSTRAINT fk_ambulancemaintenance_ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id);

-- Thêm khóa ngoại vào bảng Payment
ALTER TABLE Payment
ADD CONSTRAINT fk_payment_user FOREIGN KEY (user_id) REFERENCES User(user_id);

-- Thêm khóa ngoại vào bảng MedicalEquipment
ALTER TABLE MedicalEquipment
ADD CONSTRAINT fk_medicalequipment_ambulance FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id);

-- Thêm khóa ngoại vào bảng Message
ALTER TABLE Message
ADD CONSTRAINT fk_message_fromuser FOREIGN KEY (from_user_id) REFERENCES User(user_id),
ADD CONSTRAINT fk_message_touser FOREIGN KEY (to_user_id) REFERENCES User(user_id);

-- Thêm khóa ngoại vào bảng EmergencyResponse
ALTER TABLE EmergencyResponse
ADD CONSTRAINT fk_emergencyresponse_request FOREIGN KEY (emergency_request_id) REFERENCES EmergencyRequest(request_id),
ADD CONSTRAINT fk_emergencyresponse_technician FOREIGN KEY (technician_id) REFERENCES EmergencyTechnician(technician_id);

-- Thêm khóa ngoại vào bảng AmbulanceRunning
ALTER TABLE AmbulanceRunning
ADD CONSTRAINT fk_ambulancerunning_request FOREIGN KEY (emergency_request_id) REFERENCES EmergencyRequest(request_id);

-- Thêm khóa ngoại vào bảng Tokens
ALTER TABLE Tokens
ADD CONSTRAINT fk_token_user FOREIGN KEY (user_id) REFERENCES User(user_id);


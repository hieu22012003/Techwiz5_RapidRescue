CREATE DATABASE RapidRescure;
USE RapidRescure;

-- Tạo bảng Role
CREATE TABLE Role (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Tạo bảng User
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (role_id) REFERENCES Role(role_id)
);

-- Tạo bảng Driver
CREATE TABLE Driver (
    driver_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    number_phone VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Tạo bảng Ambulance
CREATE TABLE Ambulance (
    ambulance_id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    license_plate VARCHAR(50) NOT NULL,
    ambulance_type ENUM('Basic', 'Advanced') NOT NULL,
    status ENUM('Available', 'On call', 'Maintenance') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (driver_id) REFERENCES Driver(driver_id)
);

-- Tạo bảng EmergencyRequest
CREATE TABLE EmergencyRequest (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    ambulance_id INT,
    emergency_type ENUM('Emergency', 'Non-emergency') NOT NULL,
    pickup_location POINT NOT NULL,
    location_hospital_id INT,
    status ENUM('Pending', 'Completed', 'Canceled') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id)
);

-- Tạo bảng Patient
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
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Tạo bảng MedicalRecord
CREATE TABLE MedicalRecord (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id)
);

-- Tạo bảng Hospital
CREATE TABLE Hospital (
    hospital_id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_name VARCHAR(255) NOT NULL,
    location_id INT,
    phone_number VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Tạo bảng EmergencyTechnician
CREATE TABLE EmergencyTechnician (
    technician_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    certification VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Tạo bảng Feedback
CREATE TABLE Feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    feedback_text TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Tạo bảng Notification
CREATE TABLE Notification (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    read_status ENUM('Unread', 'Read') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Tạo bảng Location_hospital
CREATE TABLE Location_hospital (
    location_hospital_id INT AUTO_INCREMENT PRIMARY KEY,
    ambulance_id INT,
    patient_id INT,
    location POINT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id),
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id)
);

-- Tạo bảng FirstAidGuide
CREATE TABLE FirstAidGuide (
    guide_id INT AUTO_INCREMENT PRIMARY KEY,
    guide_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Tạo bảng AmbulanceMaintenance
CREATE TABLE AmbulanceMaintenance (
    maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
    ambulance_id INT,
    maintenance_date DATE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id)
);

-- Tạo bảng Payment
CREATE TABLE Payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP NOT NULL,
    payment_status ENUM('Completed', 'Pending', 'Failed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Tạo bảng MedicalEquipment
CREATE TABLE MedicalEquipment (
    equipment_id INT AUTO_INCREMENT PRIMARY KEY,
    equipment_name VARCHAR(255) NOT NULL,
    ambulance_id INT,
    status ENUM('Available', 'In use', 'Under maintenance') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (ambulance_id) REFERENCES Ambulance(ambulance_id)
);

-- Tạo bảng Message
CREATE TABLE Message (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    from_user_id INT,
    to_user_id INT,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (from_user_id) REFERENCES User(user_id),
    FOREIGN KEY (to_user_id) REFERENCES User(user_id)
);

-- Tạo bảng EmergencyResponse
CREATE TABLE EmergencyResponse (
    response_id INT AUTO_INCREMENT PRIMARY KEY,
    emergency_request_id INT,
    technician_id INT,
    response_time TIMESTAMP NOT NULL,
    response_status ENUM('Pending', 'Completed', 'Canceled') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (emergency_request_id) REFERENCES EmergencyRequest(request_id),
    FOREIGN KEY (technician_id) REFERENCES EmergencyTechnician(technician_id)
);

-- Tạo bảng AmbulanceRunning
CREATE TABLE AmbulanceRunning (
    ambulance_run_id INT AUTO_INCREMENT PRIMARY KEY,
    emergency_request_id INT,
    user_id INT,
    date_time TIMESTAMP NOT NULL,
    status ENUM('started', 'not started', 'completed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (emergency_request_id) REFERENCES EmergencyRequest(request_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Tạo bảng Tokens
CREATE TABLE Tokens (
    token_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    token_type ENUM('jwt', 'refresh') NOT NULL,
    token TEXT NOT NULL,
    issued_at TIMESTAMP NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    is_revoked BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(255),
    user_agent VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);


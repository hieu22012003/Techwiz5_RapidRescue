package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.EmergencyRequest;
import com.aptech.techwiz5.rapidrescue.repositories.EmergencyRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmergencyRequestService implements IEmergencyRequestService {
    final EmergencyRequestRepository emergencyRequestRepository;
    @Override
    public List<EmergencyRequest> getAllEmergencyRequest() {
        return emergencyRequestRepository.findAll();
    }

    @Override
    public Optional<EmergencyRequest> getEmergencyRequestById(Integer id) {
        Optional<EmergencyRequest> emergencyRequest = emergencyRequestRepository.findById(id);
        if (emergencyRequest.isEmpty()){
            throw new RuntimeException("Emergency Request not found");
        }
        return emergencyRequest;
    }

    @Override
    public EmergencyRequest createEmergencyRequest(EmergencyRequest emergencyRequest) {
        emergencyRequest.setCreatedAt(LocalDateTime.now());
        emergencyRequest.setStatus("active");
        return emergencyRequestRepository.save(emergencyRequest);
    }

    @Override
    public EmergencyRequest updateEmergencyRequest(EmergencyRequest emergencyRequest) {
        Optional<EmergencyRequest> emergencyRequestOptional = emergencyRequestRepository.findById(emergencyRequest.getId());
        if (emergencyRequestOptional.isEmpty()){
            throw new RuntimeException("Emergency Request not found");
        }

        EmergencyRequest emergencyRequest1 = emergencyRequestOptional.get();
        if(emergencyRequest.getEmergencyType() != null){
            emergencyRequest1.setEmergencyType(emergencyRequest.getEmergencyType());
        }
        if(emergencyRequest.getPickupLocation() != null){
            emergencyRequest1.setPickupLocation(emergencyRequest.getPickupLocation());
        }
        if (emergencyRequest.getEmail()!=null){
            emergencyRequest1.setEmail(emergencyRequest.getEmail());
        }
        if (emergencyRequest.getNumberPhone()!="+84"){
            emergencyRequest1.setNumberPhone(emergencyRequest.getNumberPhone());
        }
        if (emergencyRequest.getStatus() != null){
            emergencyRequest1.setStatus(emergencyRequest.getStatus());
        }
        emergencyRequest1.setUpdatedAt(LocalDateTime.now());
        return emergencyRequest1;
    }

    @Override
    public void deleteEmergencyRequest(Integer id) {
        emergencyRequestRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Optional<EmergencyRequest> cancel(Integer id) {
        Optional<EmergencyRequest> requestOptional = emergencyRequestRepository.findById(id);

        // Kiểm tra xem yêu cầu có tồn tại không
        if (requestOptional.isPresent()) {
            EmergencyRequest request = requestOptional.get();

            // Cập nhật trạng thái yêu cầu thành "canceled"
            request.setStatus("canceled");

            try {
                // Lưu lại yêu cầu đã được cập nhật
                emergencyRequestRepository.save(request);

                // Log thông tin khi hủy thành công (nếu cần)
                System.out.println("Yêu cầu với ID " + id + " đã được hủy.");

                return Optional.of(request);  // Trả về yêu cầu đã hủy và cập nhật
            } catch (Exception e) {
                // Xử lý khi gặp lỗi trong quá trình lưu yêu cầu
                System.err.println("Lỗi khi hủy yêu cầu với ID: " + id);
                e.printStackTrace();
            }
        }

        // Nếu không tìm thấy yêu cầu thì trả về Optional rỗng
        System.out.println("Không tìm thấy yêu cầu với ID: " + id);
        return Optional.empty();
    }
}

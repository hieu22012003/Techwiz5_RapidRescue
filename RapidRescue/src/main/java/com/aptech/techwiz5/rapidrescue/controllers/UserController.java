package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.User;
import com.aptech.techwiz5.rapidrescue.repositories.UserRepository;
import com.aptech.techwiz5.rapidrescue.services.DriverService;
import com.aptech.techwiz5.rapidrescue.services.EmergencyTechnicianService;
import com.aptech.techwiz5.rapidrescue.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping
@AllArgsConstructor
public class UserController {
    final UserService userService;
    final EmergencyTechnicianService emergencyTechnicianService;
    final DriverService driverService;
    @Autowired
    private UserRepository userRepository;

//    @GetMapping("/user")
//    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
//        System.out.println(Collections.singletonMap("name", principal.getAttribute("name")));
//        return Collections.singletonMap("name", principal.getAttribute("name"));
//    }
@GetMapping("/user")
public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
    // Lấy email, Google ID và userName từ OAuth2User
    String email = principal.getAttribute("email");
    String googleId = principal.getAttribute("sub");  // Thông thường Google ID sẽ nằm trong "sub"
    String userName = principal.getAttribute("name"); // Có thể dùng "name" cho tên người dùng từ Google

    // Lưu người dùng với email, Google ID và userName
    userService.saveUser(email, googleId, userName);

    // Trả về thông tin người dùng
    return Map.of(
            "email", email,
            "googleId", googleId,
            "userName", userName
    );
}
@GetMapping("/list")
    public ResponseEntity<List<User>> listUser(Model model){
    return ResponseEntity
            .status(HttpStatus.OK)
            .body(userService.getAllUsers());
}

}

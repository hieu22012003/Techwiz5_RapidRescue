package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.User;
import com.aptech.techwiz5.rapidrescue.repositories.RoleRepository;
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
public String user(@AuthenticationPrincipal OAuth2User principal) {
    // Lấy thông tin người dùng từ OAuth2User
    String email = principal.getAttribute("email");
    String googleId = principal.getAttribute("sub");
    String userName = principal.getAttribute("name");
// Lưu người dùng với email, Google ID và userName
    userService.saveUser(email, googleId, userName);


    // Trả về trang HTML có script để gửi dữ liệu về lại ReactJS và tự động đóng popup
    return "<html><body>" +
            "<script>" +
            "window.opener.postMessage(" +
            "{ email: '" + email + "', googleId: '" + googleId + "', userName: '" + userName + "' }, '*');" +
            "window.close();" +  // Đóng popup sau khi gửi dữ liệu
            "</script>" +
            "</body></html>";
}

@GetMapping("/role/{email}")
public  ResponseEntity<String> getRole (@PathVariable String email){
    return ResponseEntity.status(HttpStatus.OK).body(userService.getRole(email));
}

@GetMapping("/list")
    public ResponseEntity<List<User>> listUser(Model model){
    return ResponseEntity
            .status(HttpStatus.OK)
            .body(userService.getAllUsers());
}

}

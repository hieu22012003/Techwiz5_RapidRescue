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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
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
    // Extract the user's name and email from the OAuth2User
    String email = principal.getAttribute("email");

    userService.saveUser(email);

    // Return a map containing the user's name and email
    return Map.of(
            "email", email
    );
}

}

package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.User;
import com.aptech.techwiz5.rapidrescue.services.DriverService;
import com.aptech.techwiz5.rapidrescue.services.EmergencyTechnicianService;
import com.aptech.techwiz5.rapidrescue.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
    final UserService userService;
    final EmergencyTechnicianService emergencyTechnicianService;
    final DriverService driverService;

    @RequestMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userService.createUser(user));
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User userUpdate){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userService.updateUser(userUpdate));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@RequestParam int id){
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("Delete success!!");
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable int id){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userService.getUserById(id));
    }
}

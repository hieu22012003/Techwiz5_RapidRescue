package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.User;
import com.aptech.techwiz5.rapidrescue.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@Service
public class UserService implements IUserService{
    final UserRepository userRepository;


    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Integer user_id) {
        Optional<User> user = userRepository.findById(user_id);
        if (user.isEmpty()){
            throw new RuntimeException("User not found");
        }
        return user;
    }

    @Override
    public User createUser(User user) {
        user.setCreatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }

    public User saveUser(String email, String googleId, String userName) {
        // Check if the user already exists
        User existingUser = userRepository.findByEmail(email);
        if (existingUser == null) {
            // Create a new user if it doesn't exist
            User newUser = new User();
//            newUser.setId(Integer.parseInt(UUID.randomUUID().toString()));
            newUser.setUserName(userName);
            newUser.setEmail(email);
            newUser.setGoogleId(googleId); // Set the Google ID
            newUser.setCreatedAt(LocalDateTime.now()); // Set created timestamp
            return userRepository.save(newUser); // Save the new user
        }

        // If user exists but Google ID is not yet set, update the Google ID
        if (existingUser.getGoogleId() == null) {
            existingUser.setGoogleId(googleId);
            return userRepository.save(existingUser); // Update the existing user
        }

        return existingUser;  // Return the existing user if already present
    }


    @Override
    public User updateUser(User user) {
        Optional<User> userOptional = userRepository.findById(user.getId());
        if (userOptional.isEmpty()){
            throw new RuntimeException("User not found");
        }

        User user1 = userOptional.get();
        if(user.getEmail() != null){
            user1.setEmail(user.getEmail());
        }
        if(user.getPhoneNumber() != null){
            user1.setPhoneNumber(user.getPhoneNumber());
        }
        if (user.getUserName() != null){
            user1.setUserName(user.getUserName());
        }
        if(user.getAddress() != null){
            user1.setAddress(user.getAddress());
        }
        user1.setUpdatedAt(LocalDateTime.now());
        return user1;
    }

    @Override
    public void deleteUser(Integer user_id) {
        userRepository.deleteById(user_id);
    }
}

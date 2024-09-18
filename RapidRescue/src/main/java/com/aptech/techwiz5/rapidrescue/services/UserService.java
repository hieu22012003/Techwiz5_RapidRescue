package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.Ambulance;
import com.aptech.techwiz5.rapidrescue.models.User;
import com.aptech.techwiz5.rapidrescue.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Integer user_id) {
        userRepository.deleteById(user_id);
    }
}

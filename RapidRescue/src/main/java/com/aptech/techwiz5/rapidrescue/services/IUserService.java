package com.aptech.techwiz5.rapidrescue.services;

import com.aptech.techwiz5.rapidrescue.models.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> getAllUsers();
    Optional<User> getUserById(Integer user_id);
    User createUser(User user);
    User updateUser(User user);
    void deleteUser(Integer user_id);
}

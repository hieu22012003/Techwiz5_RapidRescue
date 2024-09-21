package com.aptech.techwiz5.rapidrescue.services;


import com.aptech.techwiz5.rapidrescue.models.Notification;
import com.aptech.techwiz5.rapidrescue.repositories.NotificationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class NotificationService {
    private NotificationRepository notificationRepository;

    public Notification createNotification(Notification notification) {
        notification.setCreatedAt(LocalDateTime.now());
        return notificationRepository.save(notification);
    }
    public Notification updateNotification(Notification notificationUpdate) {
        Optional<Notification> notificationOptional = notificationRepository.findById(notificationUpdate.getId());
        if (notificationOptional.isPresent()) {
            throw new RuntimeException("Notification not found ");
        }
        Notification notification = notificationOptional.get();
        if (notification.getUser() == null) {
            notification.setUser(notificationUpdate.getUser());
        }
        if (notification.getMessage() == null) {
            notification.setMessage(notificationUpdate.getMessage());
        }
        if (notification.getReadStatus() == null) {
            notification.setReadStatus(notificationUpdate.getReadStatus());
        }
        notification.setUpdatedAt(LocalDateTime.now());
        return notification;
    }
    public void deleteNotification(int id) {
        notificationRepository.deleteById(id);
    }
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }
    public Notification getNotificationById(int id) {
        Optional<Notification> notificationOptional = notificationRepository.findById(id);
        if (notificationOptional.isPresent()) {
            throw new RuntimeException("Notification not found ");
        }
        return notificationOptional.get();
    }
}

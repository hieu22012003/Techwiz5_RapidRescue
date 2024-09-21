package com.aptech.techwiz5.rapidrescue.controllers;

import com.aptech.techwiz5.rapidrescue.models.Notification;
import com.aptech.techwiz5.rapidrescue.services.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/notification")
public class NotificationController {
    private final NotificationService notificationService;

    @RequestMapping("/create")
    public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationService.createNotification(notification));
    }
    @PostMapping("/update")
    public ResponseEntity<Notification> updateNotification(@RequestBody Notification notification) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationService.updateNotification(notification));
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteNotification(@RequestBody int id) {
        notificationService.deleteNotification(id);
        return ResponseEntity.status(HttpStatus.OK).body("Notification deleted");
    }
    @GetMapping
    public ResponseEntity<List<Notification>> getAllNotifications() {
        return ResponseEntity.status(HttpStatus.OK).body(notificationService.getAllNotifications());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationService.getNotificationById(id));
    }

}

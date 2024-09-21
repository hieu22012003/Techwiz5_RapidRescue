package com.aptech.techwiz5.rapidrescue.Configuration;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic"); // Đặt prefix cho broker
        config.setApplicationDestinationPrefixes("/app"); // Đặt prefix cho các yêu cầu từ client
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws-location")
                .setAllowedOrigins("http://localhost:3000") // Đặt miền cho phép
                .withSockJS(); // Đăng ký SockJS
    }

}


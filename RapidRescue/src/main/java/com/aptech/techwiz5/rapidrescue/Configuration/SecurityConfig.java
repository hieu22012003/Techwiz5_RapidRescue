package com.aptech.techwiz5.rapidrescue.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF for simplicity
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/*").authenticated()  // Require authentication for the root ("/")
                                .anyRequest().permitAll()  // Allow access to other pages (if any)
                )
                .oauth2Login(oauth2Login ->
                        oauth2Login
                                .defaultSuccessUrl("/user", true)  // Redirect to /user after successful login
                )
                .logout(logout ->
                        logout.logoutSuccessUrl("/")  // Redirect to the root after logout
                );

        return http.build();
    }


//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .csrf(csrf -> csrf.disable())  // Vô hiệu hóa CSRF
//                .authorizeRequests()
//                .requestMatchers("/*").permitAll()  // Allow access to the root
//                .anyRequest().authenticated()   // Require authentication for other requests
//                .and()
//                .oauth2Login(withDefaults());  // Enable OAuth2 login
//        return http.build();
//    }


    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*");
            }
        };
    }
}

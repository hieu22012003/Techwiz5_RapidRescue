package com.aptech.techwiz5.rapidrescue.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/home")
    public String index(){
        return "index";
    }
}

package com.example.collegedirectory.controller;

import com.example.collegedirectory.model.User;
import com.example.collegedirectory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) throws Exception {
        return userService.loginUser(user.getUsername(), user.getPassword());
    }


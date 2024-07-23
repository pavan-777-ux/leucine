package com.example.collegedirectory.model;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String role; // STUDENT, FACULTY_MEMBER, ADMINISTRATOR
    private String name;
    private String email;
    private String phone;

    // Getters and Setters
}
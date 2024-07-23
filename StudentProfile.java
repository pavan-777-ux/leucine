package com.example.collegedirectory.model;

import javax.persistence.*;

@Entity
public class StudentProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String photo;
    private Long departmentId;
    private String year;

    // Getters and Setters
}


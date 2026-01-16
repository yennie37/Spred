package com.sportsrecord.spred.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @GetMapping("/initial-setup")
    public String initialSetup() {
        return "auth/initial-setup";
    }

    @GetMapping("/login")
    public String login() {
        return "auth/login";
    }

    @GetMapping("/signup-oauth")
    public String signupOauth() {
        return "auth/signup-oauth";
    }

    @GetMapping("/signup-profile")
    public String signupProfile() {
        return "auth/signup-profile";
    }

    @GetMapping("/signup-sport")
    public String signupSport() {
        return "auth/signup-sport";
    }

    @GetMapping("/signup-team")
    public String signupTeam() {
        return "auth/signup-team";
    }
}
package com.sportsrecord.spred.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {

    @GetMapping("/dashboard")
    public String dashboard() {
        return "main/dashboard";
    }

    @GetMapping("/record-add")
    public String recordAdd() {
        return "main/record-add";
    }

    @GetMapping("/record-list")
    public String recordList() {
        return "main/record-list";
    }

    @GetMapping("/spend-add")
    public String spendAdd() {
        return "main/spend-add";
    }

    @GetMapping("/spend-main")
    public String spendMain() {
        return "main/spend-main";
    }
}
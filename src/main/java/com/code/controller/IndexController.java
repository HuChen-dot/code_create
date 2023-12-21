package com.code.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {


    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/table")
    public String table() {
        return "index";
    }

    @GetMapping("/sql")
    public String sql() {
        return "index";
    }

    @GetMapping("/config")
    public String config() {
        return "index";
    }
}

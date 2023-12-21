package com.code.controller;

import com.code.pojo.Result;
import com.code.pojo.UserConfig;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.IOException;

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

    @GetMapping("/api/output-file-info/project-root-path")
    @ResponseBody
    public Result getRootPath() throws IOException {
        File dir = new File("");
        String projectDir2 = dir.getCanonicalPath();
        return Result.genSuccessResult(projectDir2);
    }


    @GetMapping("/api/output-file-info/user-config")
    @ResponseBody
    public Result getUserConfig() {
        return Result.genSuccessResult(new UserConfig());
    }

    /**
     * 查看当前项目是否存在配置文件
     *
     * @return
     */
    @GetMapping("/api/output-file-info/check-if-new-project")
    @ResponseBody
    public Result checkIfNewProject() {
        return Result.genSuccessResult(false);
    }
}

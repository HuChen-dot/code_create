package com.code.controller;


import com.code.pojo.Result;
import com.code.pojo.ResultGenerator;
import com.code.pojo.UserConfig;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;

@RestController
public class OutputFileInfoController {


    @GetMapping("/api/output-file-info/project-root-path")
    public Result getRootPath() throws IOException {
        File dir = new File("");
        String projectDir2 = dir.getCanonicalPath();
        return ResultGenerator.genSuccessResult(projectDir2);
    }


    @GetMapping("/api/output-file-info/user-config")
    public Result getUserConfig() {
        return ResultGenerator.genSuccessResult(new UserConfig());
    }

    /**
     * 查看当前项目是否存在配置文件
     *
     * @return
     */
    @GetMapping("/api/output-file-info/check-if-new-project")
    public Result checkIfNewProject() {
        return ResultGenerator.genSuccessResult(false);
    }

}

package com.code.ui.controller;

import com.alibaba.fastjson.JSON;
import com.code.code.bean.Table;
import com.code.code.handler.MvcHandler;
import com.code.ui.config.Init;
import com.code.ui.pojo.MpgGenCodeDto;
import com.code.ui.pojo.Result;
import com.code.ui.pojo.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/api/mbp-generator")
public class MbpGeneratorController {

    @Autowired
    private Init init;


    @PostMapping("/gen-code")
    public Result genCode(@RequestBody MpgGenCodeDto dto) {
        MvcHandler mvcHandler = new MvcHandler();
        List<Table> tableList = init.tableList;

        List<Table> newTableList = new ArrayList<>();
        List<String> tables = dto.getTables();
        for (Table table : tableList) {
            if(tables.contains(table.getTableName())){
                Table newTable = JSON.parseObject(JSON.toJSONString(table), Table.class);
                newTableList.add(newTable);
            }
        }

        Date date = new Date();
        String time = date2String(date);

        for (Table table : newTableList) {
            table.setAuthor(dto.getGenSetting().getAuthor());
            table.setCreateTime(time);
            mvcHandler.executeModule(dto.getGenSetting(), table);
            mvcHandler.executeService(dto.getGenSetting(), table);
            mvcHandler.executeServiceImpl(dto.getGenSetting(), table);
            mvcHandler.executeMapper(dto.getGenSetting(), table);
            mvcHandler.executeClazzMapper(dto.getGenSetting(), table);
        }

        return ResultGenerator.genSuccessResult();
    }



    public static String date2String(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String s = sdf.format(date);
        return s;
    }
}

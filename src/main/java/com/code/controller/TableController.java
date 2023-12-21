package com.code.controller;


import com.alibaba.fastjson.JSON;
import com.code.handler.JdbcUtil;
import com.code.handler.MvcHandler;
import com.code.handler.TableHandler;
import com.code.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class TableController {

    @Autowired
    private TableHandler tableHandler;

    /**
     * 获取表列表信息
     * @return
     */
    @GetMapping("/api/db/tables")
    public Result getAllTables() {
        String sql = "show table status where 1=1";
        List<Table> tableList = JdbcUtil.queryList(sql, Table.class);
        if (tableList == null) {
            return Result.genSuccessResult(new ArrayList<>());
        }
        List<TableInfo> tables = new ArrayList<>();

        for (Table table : tableList) {
            TableInfo tableInfo = new TableInfo();
            tableInfo.setName(table.getTableName());
            tableInfo.setComment(table.getComment());
            tables.add(tableInfo);
        }
        return Result.genSuccessResult(tables);
    }


    /**
     * 生成代码
     * @param dto
     * @return
     */
    @PostMapping("/api/mbp-generator/gen-code")
    public Result genCode(@RequestBody MpgGenCodeDto dto) {
        MvcHandler mvcHandler = new MvcHandler();
        List<Table> tableList = tableHandler.getTables(dto.getTables());

        List<Table> newTableList = new ArrayList<>();
        List<String> tables = dto.getTables();
        for (Table table : tableList) {
            if(tables.contains(table.getTableName())){
                Table newTable = JSON.parseObject(JSON.toJSONString(table), Table.class);
                newTableList.add(newTable);
            }
        }

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = sdf.format(date);

        for (Table table : newTableList) {
            table.setAuthor(dto.getGenSetting().getAuthor());
            table.setCreateTime(time);
            mvcHandler.executeModule(dto.getGenSetting(), table);
            mvcHandler.executeService(dto.getGenSetting(), table);
            mvcHandler.executeServiceImpl(dto.getGenSetting(), table);
            mvcHandler.executeMapper(dto.getGenSetting(), table);
            mvcHandler.executeClazzMapper(dto.getGenSetting(), table);
        }

        return Result.genSuccessResult();
    }

}

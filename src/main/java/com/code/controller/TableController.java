package com.code.controller;


import com.code.handler.JdbcUtil;
import com.code.pojo.Result;
import com.code.pojo.ResultGenerator;
import com.code.pojo.Table;
import com.code.pojo.TableInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/db")
public class TableController {



    @GetMapping("/tables")
    public Result getAllTables() {
        String sql = "show table status where 1=1";
        List<Table> tableList = JdbcUtil.queryList(sql, Table.class);
        if (tableList == null) {
            return ResultGenerator.genSuccessResult(new ArrayList<>());
        }
        List<TableInfo> tables = new ArrayList<>();

        for (Table table : tableList) {
            TableInfo tableInfo = new TableInfo();
            tableInfo.setName(table.getTableName());
            tableInfo.setComment(table.getComment());
            tables.add(tableInfo);
        }
        return ResultGenerator.genSuccessResult(tables);
    }


}

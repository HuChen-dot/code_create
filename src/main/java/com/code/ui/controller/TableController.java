package com.code.ui.controller;

import com.code.code.bean.Table;
import com.code.ui.config.Init;
import com.code.ui.pojo.Result;
import com.code.ui.pojo.ResultGenerator;
import com.code.ui.pojo.TableInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/db")
public class TableController {

    @Autowired
    private Init init;


    @GetMapping("/tables")
    public Result getAllTables() {
        List<Table> tableList = init.tableList;
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

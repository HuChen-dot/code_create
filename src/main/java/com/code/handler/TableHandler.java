package com.code.handler;


import com.code.pojo.Cloumn;
import com.code.pojo.Table;
import com.code.util.PropertiesUtils;
import com.code.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.util.*;

@Component
@Slf4j
public class TableHandler {

    private static String DBDRIVER = PropertiesUtils.get("application.properties", "driver");

    private static String url = PropertiesUtils.get("application.properties", "url");


    public List<Table> getTables(List<String> tableNames) {
        List<Table> dataTableList = null;
        try {
            dataTableList = queryDataTables(tableNames);
        } catch (Exception e) {
            log.error("获取表信息失败：", e);
        }
        return dataTableList;
    }

    // 其他数据库不需要这个方法 oracle和db2需要
    private static String getSchema(Connection conn) throws Exception {
        String schema;
        schema = conn.getMetaData().getUserName();
        if ((schema == null) || (schema.length() == 0)) {
            throw new Exception("ORACLE数据库模式不允许为空");
        }
        return schema.toUpperCase();
    }


    private List<Table> queryDataTables(List<String> tableNames) throws Exception {
        String sql = "show table status where 1=1;";
        List<Table> tables = JdbcUtil.queryList(sql, Table.class);
        if (!CollectionUtils.isEmpty(tableNames)) {
            Iterator<Table> iterator = tables.iterator();
            while (iterator.hasNext()) {
                if (!tableNames.contains(iterator.next().getTableName())) {
                    iterator.remove();
                }
            }
        }

        String fac = "mysql";
        if (StringUtils.isorace(DBDRIVER, "oracle")) {
            fac = "oracle";
        }

        Set<String> item = new HashSet<>();
        if ("mysql".equals(fac)) {
            String databases = url.substring(0, url.indexOf("?")).substring(url.substring(0, url.indexOf("?")).lastIndexOf("/") + 1);
            for (Table table : tables) {
                table.setFar(fac);
                String columnSql = "SELECT COLUMN_NAME,COLUMN_COMMENT,DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?";
                List<Map> result = JdbcUtil.queryList(columnSql, Map.class,databases,table.getTableName());
                for (Map map : result) {
                    if (!item.add(String.valueOf(map.get("columnName")).toLowerCase())) {
                        continue;
                    }

                    Cloumn cloumn = new Cloumn();
                    // 设置列属性
                    cloumn.setCloumnName(String.valueOf(map.get("columnName")).toLowerCase());
                    // 获取注释；如果这里注释为空，模板页面获取不到就会报错，所以给个初始值" "；
                    String far = "";
                    if (map.get("columnComment") != null) {
                        far =String.valueOf(map.get("columnComment"));
                    }
                    cloumn.setComment(far);
                    cloumn.setCloumnType(String.valueOf(map.get("dataType")).toLowerCase());
                    table.getCloumns().add(cloumn);
                }
            }
            return tables;
        }

        Connection connection = JdbcUtil.getConnection();
        DatabaseMetaData dbmd = connection.getMetaData();
        for (Table table : tables) {
            table.setFar(fac);

            ResultSet rs = dbmd.getColumns(null, getSchema(connection), table.getTableName(), "%");
            while (rs.next()) {
                if (!item.add(rs.getString("COLUMN_NAME").toLowerCase())) {
                    continue;
                }
                Cloumn cloumn = new Cloumn();
                // 设置列属性
                cloumn.setCloumnName(rs.getString("COLUMN_NAME").toLowerCase());
                // 获取注释；如果这里注释为空，模板页面获取不到就会报错，所以给个初始值" "；
                String far = "";
                if (rs.getString("REMARKS") != null) {
                    far = rs.getString("REMARKS");
                }
                cloumn.setComment(far);
                cloumn.setCloumnType(rs.getString("TYPE_NAME").toLowerCase());
                table.getCloumns().add(cloumn);
            }
        }
        return tables;
    }
}

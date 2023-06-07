package com.code.code.handler;

import com.code.code.bean.Cloumn;
import com.code.code.bean.Table;
import com.code.util.PropertiesUtils;
import com.code.util.StringUtils;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TableHandler {

    private List<String> tableExceptList = new ArrayList<String>();

    private static String DBDRIVER = PropertiesUtils.get("database.properties", "driver");

    public void addExceptTable(String tableName) {
        tableExceptList.add(tableName);
    }

    private List<Table> queryDataTables() throws Exception {
        String sql = "show table status where 1=1";

        List<Table> tables = JdbcUtil.queryList(sql, Table.class);

        String fac = "";
        if (StringUtils.isorace(DBDRIVER, "oracle")) {
            fac = "oracle";
        } else {
            fac = "mysql";
        }
        Connection connection = JdbcUtil.getConnection();

        DatabaseMetaData dbmd = connection.getMetaData();

        for (Table table : tables) {
            table.setFar(fac);

            ResultSet rs = dbmd.getColumns(null, getSchema(connection), table.getTableName(), "%");
            while (rs.next()) {
                Cloumn cloumn = new Cloumn();
                // 设置列属性
                cloumn.setCloumnName(rs.getString("COLUMN_NAME").toLowerCase());
                // 获取注释；如果这里注释为空，模板页面获取不到就会报错，所以给个初始值" "；
                String far = "";
                if (rs.getString("REMARKS") != null) {
                    far = rs.getString("REMARKS");
                }
                cloumn.setComment(far);
                cloumn.setCloumnType(rs.getString("TYPE_NAME"));
                table.getCloumns().add(cloumn);
            }
        }
        return tables;
    }

    public List<Table> getTables() {
        List<Table> dataTableList = null;
        try {
            dataTableList = queryDataTables();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (null != dataTableList && dataTableList.size() != 0) {
            if (null != tableExceptList && tableExceptList.size() == 0) {
                for (String tableName : tableExceptList) {
                    Iterator<Table> it = dataTableList.iterator();
                    while (it.hasNext()) {
                        Table x = it.next();
                        if (x.getTableName().equals(tableName)) {
                            it.remove();
                        }
                    }
                }
            }
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
}

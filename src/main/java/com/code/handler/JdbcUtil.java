package com.code.handler;

import com.code.util.PropertiesUtils;

import java.lang.reflect.Field;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

public class JdbcUtil {

    private static String driver = PropertiesUtils.get("application.properties", "driver");

    private static String url = PropertiesUtils.get("application.properties", "url");

    private static String user = PropertiesUtils.get("application.properties", "user");

    private static String password = PropertiesUtils.get("application.properties", "password");


    private static int connect = 2;

    private static Random random = new Random(2);

    /**
     * 连接池
     */
    private static List<Connection> connections = new ArrayList<>(connect);

    static {
        try {
            Class.forName(driver);

            for (int i = 0; i < connect; i++) {
                Connection connection = DriverManager.getConnection(url, user,
                        password);
                connections.add(connection);
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static Connection getConnection() {
        try {
            int i1 = Math.abs(random.nextInt()) % connect;
            return connections.get(i1);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    public static void close(ResultSet rs, PreparedStatement ps, Connection con) {
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } finally {
                if (ps != null) {
                    try {
                        ps.close();
                    } catch (SQLException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    } finally {
//                        if (con != null) {
//                            try {
//                                con.close();
//                            } catch (SQLException e) {
//                                // TODO Auto-generated catch block
//                                e.printStackTrace();
//                            }
//                        }
                    }
                }
            }
        }
    }

    public static void executeUpdate(String sql, Object... obj) {
        Connection con = getConnection();
        PreparedStatement ps = null;
        try {
            ps = con.prepareStatement(sql);
            for (int i = 0; i < obj.length; i++) {
                ps.setObject(i + 1, obj[i]);
            }
            ps.executeUpdate();
        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            close(null, ps, con);
        }
    }

    /**
     * 查询单条
     *
     * @param sql   sql 语句
     * @param clazz 返回值类型
     * @param obj   参数
     * @param <T>
     * @return
     */
    public static <T> T queryOne(String sql, Class<T> clazz, Object... obj) {
        List<T> ts = queryList(sql, clazz, obj);
        if (ts==null) {
            return null;
        }
        if (ts.size() > 1) {
            throw new RuntimeException("查询到多条，请调用 queryList 方法");
        }
        return ts.get(0);
    }

    public static void main(String[] args){

        String sql ="show table status where 1=1";

        List<Table> tables = JdbcUtil.queryList(sql, Table.class);
//        List<Map> maps = JdbcUtil.queryList(sql, Map.class);

//        System.err.println(maps);
        System.err.println(tables);


    }


    public static class  Table{

        String Name;

        String Comment;

        public void setName(String name){
            this.Name = name;
        }

        public String getName(){
           return this.Name;
        }

        public void setComment(String Comment){
            this.Comment = Comment;
        }

        public String getComment(){
            return this.Comment;
        }

        public String toString(){

            return this.Name+"-"+this.Comment;
        }
    }

    /**
     * 查询多条
     *
     * @param sql   sql 语句
     * @param clazz 返回值类型
     * @param obj   参数
     * @param <T>
     * @return
     */
    public static <T> List<T> queryList(String sql, Class<T> clazz, Object... obj) {
        Connection con = getConnection();

        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try {
            ps = con.prepareStatement(sql);
            for (int i = 0; i < obj.length; i++) {
                ps.setObject(i + 1, obj[i]);
            }
            resultSet = ps.executeQuery();

            List<String> columns = unSql(sql);
            List<T> list = new ArrayList<>();
            while (resultSet.next()) {
                ResultSetMetaData metaData = resultSet.getMetaData();
                //实例化一个返回值对象，
                T t = null;
                if (clazz == Map.class) {
                    t = (T) new ConcurrentHashMap<String, Object>();
                } else {
                    t = clazz.newInstance();
                }
                if (columns.size() == 1 && columns.get(0).equals("*")) {
                    for (int i = 1; i <= metaData.getColumnCount(); i++) {
                        //获取列名
                        String columnName = metaData.getColumnName(i);
                        setField(resultSet, columnName, clazz, t);

                    }
                } else {
                    for (String column : columns) {
                        setField(resultSet, column, clazz, t);
                    }
                }
                list.add(t);
            }
            return list;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            close(resultSet, ps, con);
        }
        return null;
    }


    /**
     * 给对象设置值
     *
     * @param resultSet
     * @param column
     * @param clazz
     * @param t
     * @throws Exception
     */
    private static <T> void setField(ResultSet resultSet, String column, Class<T> clazz, T t) throws Exception {
        //获取列值
        Object object = resultSet.getObject(column);
        //去除下划线
        column = removeUnderline(column);
        if (clazz == Map.class) {
            Map<String, Object> map = (Map<String, Object>) t;
            map.put(column, object);
        } else {
            Field declaredField = clazz.getDeclaredField(column);
            declaredField.setAccessible(true);
            declaredField.set(t, object);
        }
    }

    /**
     * 解析出想要查询的列
     *
     * @param sql
     * @return
     */
    private static List<String> unSql(String sql) {
        if(sql.indexOf("from")==-1){
            ArrayList<String> strings = new ArrayList<>();
            strings.add("Name");
            strings.add("Comment");
            return strings;
        }
        sql = sql.trim();
        sql = sql.substring(6, sql.indexOf("from"));
        List<String> comm = new ArrayList<>();
        if (sql.indexOf("*") != -1) {
            comm.add("*");
            return comm;
        }
        String[] split = sql.split(",");
        for (int i = 0; i < split.length; i++) {
            String s = split[i].trim();
            String s1 = s.toLowerCase();
            if (s1.indexOf(" as ") == -1) {
                comm.add(s);
                continue;
            }
            String s3 = s.split(" ")[2];
            s3 = s3.replace("\"", "");
            comm.add(s3.trim());
        }

        return comm;
    }

    /**
     * 将列名中的下划线转成驼峰
     *
     * @param columnName
     * @return
     */
    private static String removeUnderline(String columnName) {
        if (columnName.indexOf("_") == -1) {
            return columnName;
        }
        String[] s = columnName.split("_");
        StringBuffer column = new StringBuffer(s[0]);
        for (int i = 1; i < s.length; i++) {
            String s2 = s[i];
            char c = s2.charAt(0);
            if (c < 97) {
                column.append(s2);
                continue;
            }
            c = (char) (c - 32);
            column.append(c).append(s2.substring(1));
        }
        return column.toString();
    }

}

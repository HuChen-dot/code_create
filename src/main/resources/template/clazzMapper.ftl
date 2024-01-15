package ${mapper};
import ${pojo}.${table.className};
import org.apache.ibatis.annotations.Param;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.cursor.Cursor;

/**
* ${table.comment}
* @author ${table.author}
* @date ${table.createTime}
*/
@Mapper
public interface ${table.className}Mapper{

    /**
     * 主键查询
     * @param primaryKey 主键
     * @return
    */
    ${table.className} selectByPrimaryKey(@Param(value = "primaryKey") Long primaryKey);


    /**
     * 多条件查询
     * @param param
     * @return
    */
    List<${table.className}> select(Map<String,Object> param);


    /**
     * 流式查询，可以设置 fetchSize 属性设置一次流查询多少条数据，直至取完数据
     * 注意：使用流式查询，需要在service层将使用流式查询的方法上添加@Transactional注解，不然会报错
     * 错误原因为 @Autowired注入的mapper查询一次就会将连接关闭，不会保持链接
     * @param param
     * @return
    */
    Cursor<${table.className}> flowSelect(Map<String,Object> param);


    /**
     * 添加
     * @param ${lowerClassName}
     * @return
    */
    Integer save(${table.className} ${lowerClassName});


    /**
     * 批量添加
     * @param list
     * @return
    */
    Integer batchSave(@Param("list") List<${table.className}> list);


    /**
     * 添加或者修改
     * 此方法 会根据主键来进行判断，如果主键存在则修改，如果主键不存在，会检查是否有唯一索引，在根据唯一索引判断是新增还是修改
     * @param ${lowerClassName}
     * @return
    */
    Integer saveOrUpdate(${table.className} ${lowerClassName});


    /**
     * 修改
     * @param param
     * @return
    */
    Integer updateByMap(Map<String,Object> param);

    /**
     * 修改
     * @param ${lowerClassName}
     * @return
    */
    Integer updateByEntity(${table.className} ${lowerClassName});


}

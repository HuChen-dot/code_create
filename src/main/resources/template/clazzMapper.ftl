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
     * 修改：判断不是空的才修改
     * @param param
     * @return
    */
    Integer updateNotNullByMap(Map<String,Object> param);

    /**
     * 修改
     * @param param
     * @return
    */
    Integer updateByMap(Map<String,Object> param);

    /**
     * 修改：判断不是空的才修改
     * @param ${lowerClassName}
     * @return
    */
    Integer updateNotNullById(${table.className} ${lowerClassName});

    /**
     * 修改
     * @param ${lowerClassName}
     * @return
    */
    Integer updateById(${table.className} ${lowerClassName});


}

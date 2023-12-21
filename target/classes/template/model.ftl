package ${pojo};
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
* ${table.comment}
* @author ${table.author}
* @date ${table.createTime}
*/
@Data
public class ${table.className} implements Serializable {

    private static final long serialVersionUID = 1L;
<#list table.cloumns as cloumn>
    /**
    * ${cloumn.comment}
    */
    private ${cloumn.javaType} ${cloumn.fieldName};
</#list>

}

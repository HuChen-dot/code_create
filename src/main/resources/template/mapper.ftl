<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="${mapper}.${table.className}Mapper">

    <sql id="Base_Column_List">
        <#list table.cloumns as cloumn>
            <#if cloumn_has_next>
                `${cloumn.cloumnName}` as `${cloumn.fieldName}`,
            <#else>
                `${cloumn.cloumnName}` as `${cloumn.fieldName}`
            </#if>
        </#list>
    </sql>

    <sql id="Base_Column_List_if">
        <#list table.cloumns as cloumn>
            <#if  cloumn.cloumnName=='create_time'>
                <!--创建时间大于开始时间，创建时间小于结束时间 &gt;-->
                <if test="startTimeIf != null and startTimeIf != ''">
                    and  create_time &gt;= ${r"#{"}startTimeIf}
                </if>
                <!--创建时间大于开始时间，创建时间小于结束时间 &gt;-->
                <if test="endTimeIf != null and endTimeIf != ''">
                    and  create_time &lt;= ${r"#{"}endTimeIf}
                </if>
            </#if>
            <#if  cloumn.cloumnName!='create_time'>
                <#if  cloumn.cloumnType=='varchar'>
                    <if test="${cloumn.fieldName}If != null and ${cloumn.fieldName}If != ''">
                        and `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}If}
                    </if>
                </#if>
                <#if  cloumn.cloumnType!='varchar'>
                    <if test="${cloumn.fieldName}If != null">
                        and `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}If}
                    </if>
                </#if>
            </#if>
            <#if  cloumn.cloumnName=='id'>
                <if test="idIfs != null and idIfs.size() > 0">
                    and `${cloumn.cloumnName}` in (
                    <foreach collection="idIfs" item="id" separator=",">
                        ${r"#{"}${cloumn.fieldName}}
                    </foreach>
                    )
                </if>
            </#if>
            <#if  cloumn.cloumnName=='name'>
                <if test="nameLikeIf != null and nameLikeIf !=''">
                    and `${cloumn.cloumnName}` like CONCAT(CONCAT('%', ${r"#{"}${cloumn.fieldName}If}), '%'))
                </if>
            </#if>
        </#list>
        <if test="orderBy != null and orderBy !=''">
            order by ${r"${"}orderBy}
        </if>
    </sql>

    <sql id="Add_Base_Column_List">
        <trim suffixOverrides = ",">
            <#list table.cloumns as cloumn>
                <#if cloumn_has_next>
                    <#if  cloumn.cloumnName=='update_time' || cloumn.cloumnName=='create_time'>
                        `${cloumn.cloumnName}`,
                    </#if>
                    <#if  cloumn.cloumnName!='update_time' && cloumn.cloumnName!='create_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                `${cloumn.cloumnName}`,
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                `${cloumn.cloumnName}`,
                            </if>
                        </#if>
                    </#if>
                <#else>
                    <#if  cloumn.cloumnName=='update_time' || cloumn.cloumnName=='create_time'>
                        `${cloumn.cloumnName}`
                    </#if>
                    <#if  cloumn.cloumnName!='update_time' && cloumn.cloumnName!='create_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                `${cloumn.cloumnName}`
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                `${cloumn.cloumnName}`
                            </if>
                        </#if>
                    </#if>
                </#if>
            </#list>
        </trim>
    </sql>

    <sql id="Add_Base_Column_param">
        <trim suffixOverrides = ",">
            <#list table.cloumns as cloumn>
                <#if cloumn_has_next>
                    <#if  cloumn.cloumnName=='update_time' || cloumn.cloumnName=='create_time'>
                        now(),
                    </#if>
                    <#if  cloumn.cloumnName!='update_time' && cloumn.cloumnName!='create_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                ${r"#{"}${cloumn.fieldName}},
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                ${r"#{"}${cloumn.fieldName}},
                            </if>
                        </#if>
                    </#if>
                <#else>
                    <#if  cloumn.cloumnName=='update_time' || cloumn.cloumnName=='create_time'>
                        now()
                    </#if>
                    <#if  cloumn.cloumnName!='update_time' && cloumn.cloumnName!='create_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                ${r"#{"}${cloumn.fieldName}}
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                ${r"#{"}${cloumn.fieldName}}
                            </if>
                        </#if>
                    </#if>
                </#if>
            </#list>
        </trim>
    </sql>

    <sql id="update_Base_Column_notnull_if">
        <#list table.cloumns as cloumn>
            <#if cloumn_has_next>
                <#if  cloumn.cloumnName!='id'>
                    <#if  cloumn.cloumnName=='update_time'>
                        `${cloumn.cloumnName}` = now(),
                    </#if>
                    <#if  cloumn.cloumnName!='update_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}},
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}},
                            </if>
                        </#if>
                    </#if>
                </#if>
            <#else>
                <#if  cloumn.cloumnName!='id'>
                    <#if  cloumn.cloumnName=='update_time'>
                        `${cloumn.cloumnName}` = now()
                    </#if>
                    <#if  cloumn.cloumnName!='update_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                            </if>
                        </#if>
                    </#if>
                </#if>
            </#if>
        </#list>
    </sql>

    <sql id="update_Base_Column_if">
        <#list table.cloumns as cloumn>
            <#if cloumn_has_next>
                <#if  cloumn.cloumnName!='id'>
                    <#if  cloumn.cloumnName=='update_time'>
                        `${cloumn.cloumnName}` = now(),
                    </#if>
                    <#if  cloumn.cloumnName!='update_time'>
                        `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}},
                    </#if>
                </#if>
            <#else>
                <#if  cloumn.cloumnName!='id'>
                    <#if  cloumn.cloumnName=='update_time'>
                        `${cloumn.cloumnName}` = now()
                    </#if>
                    <#if  cloumn.cloumnName!='update_time'>
                        `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                    </#if>
                </#if>
            </#if>
        </#list>
    </sql>

    <!-- 主键查询 -->
    <select id="selectByPrimaryKey" resultType="${pojo}.${table.className}">
        select
        <include refid = "Base_Column_List"/>
        from `${table.tableName}`
        <#list table.cloumns as cloumn>
            <#if cloumn_index==0>
                where ${cloumn.cloumnName} = ${r"#{"}primaryKey}
                <#break>
            </#if>
        </#list>
    </select>

    <!-- 多条件查询-->
    <select id="select" resultType="${pojo}.${table.className}"
            parameterType="java.util.Map">
        select
        <include refid = "Base_Column_List"/>
        from `${table.tableName}`
        <trim prefix = "where" prefixOverrides = "and | or">
            <include refid = "Base_Column_List_if"/>
        </trim>
    </select>


    <!--  添加 -->
    <insert id="save" parameterType = "${pojo}.${table.className}"
            <#if table.far == "mysql">useGeneratedKeys = "true" keyProperty = "id"</#if>>
        <#if table.far == "oracle">
            <selectKey keyProperty = "id" order = "BEFORE" resultType = "int">
                select seq_${table.tableName}.nextval as sysId from DUAL
            </selectKey>
        </#if>
        insert into `${table.tableName}`(
        <include refid = "Add_Base_Column_List"/>
        )
        values(
        <include refid = "Add_Base_Column_param"/>
        )
    </insert>

    <!--  批量添加 -->
    <insert id="batchSave" parameterType = "list" keyColumn = "id" keyProperty = "id" useGeneratedKeys = "true">
        insert into `${table.tableName}`(
        <#list table.cloumns as cloumn>
        <#if cloumn_has_next>
                `${cloumn.cloumnName}`,
        <#else>
                `${cloumn.cloumnName}`
        </#if>
        </#list>)
        values
        <foreach collection="list" item="item" separator=",">
            (
            <#list table.cloumns as cloumn>
                <#if cloumn_has_next>
                        <#if  cloumn.cloumnName=='update_time' || cloumn.cloumnName=='create_time'>
                            now(),
                        </#if>
                        <#if  cloumn.cloumnName!='update_time' && cloumn.cloumnName!='create_time'>
                            ${r"#{item."}${cloumn.fieldName}},
                        </#if>
                <#else>
                        <#if  cloumn.cloumnName=='update_time' || cloumn.cloumnName=='create_time'>
                            now()
                        </#if>
                        <#if  cloumn.cloumnName!='update_time' && cloumn.cloumnName!='create_time'>
                            ${r"#{item."}${cloumn.fieldName}}
                        </#if>
                </#if>
            </#list>
            )
        </foreach>
    </insert>

    <!--  添加或者修改 -->
    <insert id="saveOrUpdate" parameterType = "${pojo}.${table.className}">
        <#if table.far == "oracle">
            <selectKey keyProperty = "id" order = "BEFORE" resultType = "int">
                select seq_${table.tableName}.nextval as sysId from DUAL
            </selectKey>
        </#if>
        insert into `${table.tableName}`(
        <include refid = "Add_Base_Column_List"/>
        )
        values(
        <include refid = "Add_Base_Column_param"/>
        )
        ON DUPLICATE KEY UPDATE
        <trim suffixOverrides=",">
            <#list table.cloumns as cloumn>
                <#if cloumn_has_next>
                    <#if  cloumn.cloumnName=='update_time'>
                        ${cloumn.cloumnName}=now(),
                    </#if>
                    <#if  cloumn.cloumnName!='update_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}},
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}},
                            </if>
                        </#if>
                    </#if>
                <#else>
                    <#if  cloumn.cloumnName=='update_time'>
                        ${cloumn.cloumnName}=now()
                    </#if>
                    <#if  cloumn.cloumnName!='update_time'>
                        <#if  cloumn.cloumnType=='varchar'>
                            <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                            </if>
                        </#if>
                        <#if  cloumn.cloumnType!='varchar'>
                            <if test="${cloumn.fieldName} != null">
                                `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                            </if>
                        </#if>
                    </#if>
                </#if>
            </#list>
        </trim>
    </insert>

    <!--  修改：判断不是空的才修改 -->
    <update id="updateNotNullByMap" parameterType="java.util.Map">
        update `${table.tableName}`
        <trim prefix = "set" suffixOverrides = ",">
            <include refid = "update_Base_Column_notnull_if"/>
        </trim>
        <trim prefix = "where" prefixOverrides = "and | or">
            <include refid = "Base_Column_List_if"/>
        </trim>
    </update>

    <!--  修改 -->
    <update id="updateByMap" parameterType="java.util.Map">
        update `${table.tableName}`
        <trim prefix = "set" suffixOverrides = ",">
            <include refid = "update_Base_Column_if"/>

        </trim>
        <trim prefix = "where" prefixOverrides = "and | or">
            <include refid = "Base_Column_List_if"/>
        </trim>
    </update>

    <!-- 修改：判断不是空的才修改  -->
    <update id="updateNotNullById" parameterType="${pojo}.${table.className}">
        update `${table.tableName}`
        <trim prefix = "set" suffixOverrides = ",">
            <include refid = "update_Base_Column_notnull_if"/>
        </trim>
        <#list table.cloumns as cloumn>
            <#if cloumn_index==0>
                where ${cloumn.cloumnName} = ${r"#{"}${cloumn.fieldName}}
                <#break>
            </#if>
        </#list>
    </update>

    <!--  修改 -->
    <update id="updateById" parameterType="${pojo}.${table.className}">
        update `${table.tableName}`
        <trim prefix = "set" suffixOverrides = ",">
            <include refid = "update_Base_Column_if"/>
        </trim>
        <#list table.cloumns as cloumn>
            <#if cloumn_index==0>
                where ${cloumn.cloumnName} = ${r"#{"}${cloumn.fieldName}}
                <#break>
            </#if>
        </#list>
    </update>


</mapper>
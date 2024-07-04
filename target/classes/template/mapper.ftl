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
                        <if test="startTime != null">
                            and  create_time &gt;= ${r"#{"}startTime}
                        </if>
                        <!--创建时间大于开始时间，创建时间小于结束时间 &gt;-->
                        <if test="endTime != null">
                            and  create_time &lt;= ${r"#{"}endTime}
                        </if>
                </#if>
                <#if  cloumn.cloumnName!='create_time'>
                    <#if  cloumn.cloumnType=='varchar'>
                        <if test="${cloumn.fieldName} != null and ${cloumn.fieldName} != ''">
                            and `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                        </if>
                    </#if>
                    <#if  cloumn.cloumnType!='varchar'>
                        <if test="${cloumn.fieldName} != null">
                            and `${cloumn.cloumnName}` = ${r"#{"}${cloumn.fieldName}}
                        </if>
                    </#if>
                </#if>
                <#if  cloumn.cloumnName=='id'>
                        <if test="ids != null and ids.size() > 0">
                            and `${cloumn.cloumnName}` in (
                            <foreach collection="ids" item="id" separator=",">
                                ${r"#{"}${cloumn.fieldName}}
                            </foreach>
                        )
                        </if>
                </#if>
                <#if  cloumn.cloumnName=='name'>
                    <if test="nameLike != null and nameLike !=''">
                        and `${cloumn.cloumnName}` like CONCAT(CONCAT('%', ${r"#{"}${cloumn.fieldName}}), '%'))
                    </if>
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


    <!-- 流式查询：根据条件查询；可以设置 fetchSize 属性设置一次流查询多少条数据，直至取完数据-->
    <select id="flowSelect" resultSetType="FORWARD_ONLY" fetchSize="-2147483648" resultType = "${pojo}.${table.className}"
            parameterType = "java.util.Map">
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
        )
        values(
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
        <trim suffixOverrides=",">
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
        )
        values(
        <trim suffixOverrides=",">
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

    <!--  修改 -->
    <update id="updateByMap" parameterType="java.util.Map">
        update `${table.tableName}`
        <trim prefix = "set" suffixOverrides = ",">
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
        </trim>
        <trim prefix="where" prefixOverrides = "and | or">
            <#list table.cloumns as cloumn>
                    <#if  cloumn.cloumnName=='create_time'>
                            <!--创建时间大于开始时间，创建时间小于结束时间 &gt;-->
                            <if test="startTime != null">
                                and  create_time &gt;= ${r"#{"}startTime}
                            </if>
                            <!--创建时间大于开始时间，创建时间小于结束时间 &gt;-->
                            <if test="endTime != null">
                                and  create_time &lt;= ${r"#{"}endTime}
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
            </#list>
        </trim>
    </update>


    <!--  修改 -->
    <update id="updateById" parameterType="${pojo}.${table.className}">
        update `${table.tableName}`
        <trim prefix = "set" suffixOverrides = ",">
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
        </trim>
        <#list table.cloumns as cloumn>
            <#if cloumn_index==0>
                where ${cloumn.cloumnName} = ${r"#{"}${cloumn.fieldName}}
                <#break>
            </#if>
        </#list>
    </update>


</mapper>
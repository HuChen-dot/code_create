package com.code.pojo;

import com.code.util.StringUtils;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Table implements Serializable {

    private String Name;

    private String Comment;

    private String far;

    private String author;

    private String createTime;

    public String getFar() {
        return far;
    }

    public void setFar(String far) {
        this.far = far;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getCreateTime() {
        return this.createTime;
    }


    private List<Cloumn> cloumns = new ArrayList();

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        this.Comment = comment;
    }

    public String getTableName() {
        return Name;
    }

    public void setTableName(String tableName) {
        this.Name = tableName;
    }

    public List<Cloumn> getCloumns() {
        return cloumns;
    }

    public void setCloumns(List<Cloumn> cloumns) {
        this.cloumns = cloumns;
    }

    public String getClassName() {
        return StringUtils.captureName(StringUtils.putOffUnderline(this.Name));
    }

}

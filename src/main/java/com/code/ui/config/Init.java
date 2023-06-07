package com.code.ui.config;

import com.code.code.bean.Table;
import com.code.code.handler.TableHandler;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.List;

@Configuration
public class Init {


   public List<Table> tableList;

    @PostConstruct
    public void init(){
        TableHandler tableHandler = new TableHandler();
        tableHandler.addExceptTable("");
        tableList = tableHandler.getTables();
    }


}

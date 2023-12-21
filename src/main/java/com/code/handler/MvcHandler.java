package com.code.handler;


import com.code.pojo.GenSetting;
import com.code.pojo.Table;
import com.code.util.FreeMarkerUtils;
import com.code.util.StringUtils;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class MvcHandler {


    // 模板路径
    public static String templateFile = System.getProperty("user.dir") + File.separator + "src" + File.separator + "main" + File.separator + "resources" + File.separator + "template";


    public void executeModule(GenSetting genSetting, Table table) {
        Map input = new HashMap();
        String moduleName = genSetting.getModuleName();
        input.put("table", table);
        input.put("pojo", genSetting.getModuleName() + ".pojo.entity");
        input.put("mapper", genSetting.getModuleName() + ".mapper");
        input.put("service", genSetting.getModuleName() + ".service");
        input.put("serviceImpl", genSetting.getModuleName() + ".service.impl");
        String fileName = table.getClassName() + ".java";
        String replace = moduleName.replace(".", "/");
        String savePath = genSetting.getRootPath() + "/src/main/java/" + replace + "/pojo/entity/";
        String templateName = "model";
        FreeMarkerUtils.genteratorFile(genSetting.isOverride(), input, templateFile, templateName, savePath, fileName);
    }

    public void executeService(GenSetting genSetting, Table table) {
        Map input = new HashMap();
        String moduleName = genSetting.getModuleName();
        input.put("table", table);
        input.put("lowerClassName", StringUtils.lowerName(table.getClassName()));

        input.put("pojo", genSetting.getModuleName() + ".pojo.entity");
        input.put("mapper", genSetting.getModuleName() + ".mapper");
        input.put("service", genSetting.getModuleName() + ".service");
        input.put("serviceImpl", genSetting.getModuleName() + ".service.impl");
        String fileName = table.getClassName() + "Service" + ".java";
        String replace = moduleName.replace(".", "/");
        String savePath = genSetting.getRootPath() + "/src/main/java/" + replace + "/service/";
        String templateName = "service";
        FreeMarkerUtils.genteratorFile(genSetting.isOverride(), input, templateFile, templateName, savePath, fileName);
    }

    public void executeServiceImpl(GenSetting genSetting, Table table) {
        Map input = new HashMap();
        String moduleName = genSetting.getModuleName();
        input.put("table", table);
        input.put("lowerClassName", StringUtils.lowerName(table.getClassName()));
        input.put("pojo", genSetting.getModuleName() + ".pojo.entity");
        input.put("mapper", genSetting.getModuleName() + ".mapper");
        input.put("service", genSetting.getModuleName() + ".service");
        input.put("serviceImpl", genSetting.getModuleName() + ".service.impl");
        String fileName = table.getClassName() + "ServiceImpl" + ".java";
        String replace = moduleName.replace(".", "/");
        String savePath = genSetting.getRootPath() + "/src/main/java/" + replace + "/service/impl/";

        String templateName = "serviceImpl";
        FreeMarkerUtils.genteratorFile(genSetting.isOverride(), input, templateFile, templateName, savePath, fileName);
    }

    public void executeMapper(GenSetting genSetting, Table table) {
        Map input = new HashMap();
        input.put("table", table);
        input.put("lowerClassName", StringUtils.lowerName(table.getClassName()));
        input.put("pojo", genSetting.getModuleName() + ".pojo.entity");
        input.put("mapper", genSetting.getModuleName() + ".mapper");
        input.put("service", genSetting.getModuleName() + ".service");
        input.put("serviceImpl", genSetting.getModuleName() + ".service.impl");
        String fileName = table.getClassName() + "Mapper" + ".xml";

        String savePath = genSetting.getRootPath() + "/src/main/resources/mapper/";
        String templateName = "mapper";
        FreeMarkerUtils.genteratorFile(genSetting.isOverride(), input, templateFile, templateName, savePath, fileName);
    }

    public void executeClazzMapper(GenSetting genSetting, Table table) {
        Map input = new HashMap();
        String moduleName = genSetting.getModuleName();
        input.put("table", table);
        input.put("lowerClassName", StringUtils.lowerName(table.getClassName()));
        input.put("pojo", genSetting.getModuleName() + ".pojo.entity");
        input.put("mapper", genSetting.getModuleName() + ".mapper");
        input.put("service", genSetting.getModuleName() + ".service");
        input.put("serviceImpl", genSetting.getModuleName() + ".service.impl");
        String fileName = table.getClassName() + "Mapper" + ".java";

        String replace = moduleName.replace(".", "/");
        String savePath = genSetting.getRootPath() + "/src/main/java/" + replace + "/mapper/";
        String templateName = "clazzMapper";
        FreeMarkerUtils.genteratorFile(genSetting.isOverride(), input, templateFile, templateName, savePath, fileName);
    }
}

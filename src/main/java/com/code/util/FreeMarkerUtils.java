package com.code.util;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;

import java.io.*;
import java.util.Map;

public class FreeMarkerUtils {

    private static Template getTemplate(String template_path, String templateFileName) {
        Configuration configuration = new Configuration();
        Template template = null;
        try {
            configuration.setDirectoryForTemplateLoading(new File(template_path));
            configuration.setObjectWrapper(new DefaultObjectWrapper());
            // 设置编码
            configuration.setDefaultEncoding("UTF-8");
            // 模板文件
            template = configuration.getTemplate(templateFileName + ".ftl");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return template;
    }

    public static void genteratorFile(boolean override, Map<String, String> input, String template_path, String templateFileName,
                                      String savePath, String fileName) {
        Template template = getTemplate(template_path, templateFileName);
//        File file = new File(savePath + "/" + fileName);
//        if (isFileReallyExists(file) && !override) {
//            return;
//        }
//        File catalogue = new File(savePath);
//        if (!isFileReallyExists(file)) {
//            catalogue.mkdirs();
//        }

        File file = new File(savePath + "/" + fileName);
        if (file.exists()) {
            file.delete();
        }
        File catalogue = new File(savePath);
        if (catalogue.exists()) {
            catalogue.delete();
        }
        catalogue.mkdirs();

        Writer writer = null;
        FileOutputStream fileOutputStream = null;
        try {
            fileOutputStream = new FileOutputStream(savePath + "/" + fileName);
            writer = new OutputStreamWriter(fileOutputStream, "UTF-8");
            template.process(input, writer);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                writer.close();
                fileOutputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

}

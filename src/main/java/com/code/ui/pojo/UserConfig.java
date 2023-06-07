package com.code.ui.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

import static com.code.ui.pojo.Constant.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserConfig {

    private List<OutputFileInfo> outputFiles;


    @JsonIgnore
    public OutputFileInfo getControllerInfo() {
        if (outputFiles == null) {
            return null;
        }
        return outputFiles.stream().filter((f -> FILE_TYPE_CONTROLLER.equals(f.getFileType()))).findFirst().get();
    }

    @JsonIgnore
    public OutputFileInfo getEntityInfo() {
        if (outputFiles == null) {
            return null;
        }
        return outputFiles.stream().filter((f -> FILE_TYPE_ENTITY.equals(f.getFileType()))).findFirst().get();
    }

    @JsonIgnore
    public OutputFileInfo getMapperInfo() {
        if (outputFiles == null) {
            return null;
        }
        return outputFiles.stream().filter((f -> FILE_TYPE_MAPPER.equals(f.getFileType()))).findFirst().get();
    }

    @JsonIgnore
    public OutputFileInfo getMapperXmlInfo() {
        if (outputFiles == null) {
            return null;
        }
        return outputFiles.stream().filter((f -> FILE_TYPE_MAPPER_XML.equals(f.getFileType()))).findFirst().get();
    }

    @JsonIgnore
    public OutputFileInfo getServiceInfo() {
        if (outputFiles == null) {
            return null;
        }
        return outputFiles.stream().filter((f -> FILE_TYPE_SERVICE.equals(f.getFileType()))).findFirst().get();
    }



}

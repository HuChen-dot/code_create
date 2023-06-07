package com.code.ui.pojo;

import lombok.Data;

import java.util.List;

@Data
public class MpgGenCodeDto {

    private List<String> tables;

    private GenSetting genSetting;

}

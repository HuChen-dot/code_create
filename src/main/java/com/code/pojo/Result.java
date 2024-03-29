package com.code.pojo;


import com.code.util.JsonUtil;

/**
 * 统一API响应结果封装
 */
public class Result {

    /**
     * 响应码，200为成功，其它为错误
     */
    private int code;

    /**
     * 失败时的具体失败信息
     */
    private String message;

    /**
     * 响应的具体对象
     */
    private Object data;

//    public Result setCode(ResultCode resultCode) {
//        this.code = resultCode.code;
//        return this;
//    }

    public int getCode() {
        return code;
    }

    public Result setCode(int code) {
        this.code = code;
        return this;
    }

    public String getMessage() {
        return message;
    }

    public Result setMessage(String message) {
        this.message = message;
        return this;
    }

    public Object getData() {
        return data;
    }

    public Result setData(Object data) {
        this.data = data;
        return this;
    }



    public static Result genSuccessResult() {
        return new Result()
                .setCode(200)
                .setMessage("SUCCESS");
    }

    public static Result genSuccessResult(Object data) {
        return new Result()
                .setCode(200)
                .setMessage("SUCCESS")
                .setData(data);
    }

    public static Result genFailResult(String message) {
        return new Result()
                .setCode(400)
                .setMessage(message);
    }

    @Override
    public String toString() {
        return JsonUtil.obj2json(this);
    }
    
}

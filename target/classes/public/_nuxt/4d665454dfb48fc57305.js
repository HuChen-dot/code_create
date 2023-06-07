(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    442: function (e, t, o) {
        "use strict";
        o(72), o(99);
        var r = {props: ["content"]}, l = o(42), component = Object(l.a)(r, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("el-tooltip", {attrs: {content: this.content}}, [t("i", {
                staticClass: "el-icon-question",
                staticStyle: {cursor: "hand"}
            })])
        }), [], !1, null, null, null);
        t.a = component.exports
    }, 455: function (e, t, o) {
        "use strict";
        o.r(t);
        var r = o(444), l = (o(447), o(448), o(450), o(442)), n = o(72), m = o.n(n), c = o(452), d = o(99), f = o.n(d),
            h = {
                props: ["sql"], components: {HelpTip: l.a}, data: function () {
                    return {
                        showDynamicParamsDemo: !1,
                        userBasePkg: "",
                        form: {
                            enableLombok: !1,
                            enablePageQuery: !1,
                            enableCreateDaoMethod: !1,
                            enableParseDynamicParams: !0,
                            author: "",
                            fullPackage: "",
                            mapperMethod: "",
                            mapperPackage: "",
                            mapperLocation: "",
                            mapperLocationPrefix: "resources",
                            daoMethodParamType: "bean",
                            daoMethodParamDto: ""
                        },
                        rules: {
                            mapperPackage: [{required: !0, message: "Mapper文件的包名必须填写", trigger: "change"}],
                            mapperMethod: [{required: !0, message: "Mapper方法名必须填写", trigger: "change"}]
                        }
                    }
                }, mounted: function () {
                    var e = this;
                    m.a.get("/api/sql/basepackage").then((function (t) {
                        e.userBasePkg = t
                    }))
                }, methods: {
                    handleMapperMethodInput: function () {
                        this.form.mapperMethod && (this.form.fullPackage = this.userBasePkg + ".dto." + f.a.upperFirst(this.form.mapperMethod) + "ResultDto", this.form.daoMethodParamDto = this.userBasePkg + ".dto." + f.a.upperFirst(this.form.mapperMethod) + "ParamDto")
                    }, queryMapperPackage: function (e, t) {
                        m.a.get("/api/ac/mapperxml", {
                            params: {
                                mapperLocationPrefix: this.form.mapperLocationPrefix,
                                searchKey: this.form.mapperPackage
                            }
                        }).then((function (e) {
                            if (e) {
                                var o = e.map((function (e) {
                                    return {value: e}
                                }));
                                t(o)
                            }
                        }))
                    }, handleMapperPackageSelect: function (e) {
                        this.form.mapperPackage = e.value
                    }, onSubmit: function () {
                        var e = this;
                        this.$refs.editForm.validate((function (t) {
                            if (!t) return !1;
                            e.form.mapperLocation = e.form.mapperPackage + "." + e.form.mapperMethod, m.a.post("/api/sql/gen-mapper-method", {
                                sql: e.sql,
                                config: e.form
                            }).then((function (t) {
                                e.$message.success("代码已经成功生成"), e.$emit("done")
                            }))
                        }))
                    }
                }
            }, v = o(42), _ = Object(v.a)(h, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("el-form", {
                    ref: "editForm",
                    attrs: {rules: e.rules, model: e.form, "label-width": "230px"}
                }, [o("el-form-item", {attrs: {label: "代码作者"}}, [o("el-input", {
                    staticStyle: {width: "95%"},
                    model: {
                        value: e.form.author, callback: function (t) {
                            e.$set(e.form, "author", t)
                        }, expression: "form.author"
                    }
                })], 1), e._v(" "), o("el-form-item", {attrs: {label: "是否启用Lombok注解"}}, [o("el-switch", {
                    model: {
                        value: e.form.enableLombok,
                        callback: function (t) {
                            e.$set(e.form, "enableLombok", t)
                        },
                        expression: "form.enableLombok"
                    }
                })], 1), e._v(" "), o("el-form-item", {
                    attrs: {
                        prop: "mapperPackage",
                        label: "Mapper(Xml)的包名"
                    }
                }, [o("el-autocomplete", {
                    staticStyle: {width: "95%"},
                    attrs: {"fetch-suggestions": e.queryMapperPackage, placeholder: "例如：com.example.OrderMapper"},
                    on: {select: e.handleMapperPackageSelect},
                    model: {
                        value: e.form.mapperPackage, callback: function (t) {
                            e.$set(e.form, "mapperPackage", t)
                        }, expression: "form.mapperPackage"
                    }
                }, [o("el-select", {
                    staticStyle: {width: "110px"},
                    attrs: {slot: "prepend", placeholder: "请选择源码目录"},
                    slot: "prepend",
                    model: {
                        value: e.form.mapperLocationPrefix, callback: function (t) {
                            e.$set(e.form, "mapperLocationPrefix", t)
                        }, expression: "form.mapperLocationPrefix"
                    }
                }, [o("el-option", {
                    attrs: {
                        label: "java",
                        value: "java"
                    }
                }), e._v(" "), o("el-option", {
                    attrs: {
                        label: "resources",
                        value: "resources"
                    }
                })], 1)], 1), e._v(" "), o("help-tip", {attrs: {content: "生成的Mapper方法所在的Mapper.xml的包名，例如：com.example.OrderMapper，选择java或resources会在对应的源码根目录中去查找资源"}})], 1), e._v(" "), o("el-form-item", {
                    attrs: {
                        prop: "mapperMethod",
                        label: "Mapper(Xml)的SQL节点ID"
                    }
                }, [o("el-input", {
                    staticStyle: {width: "95%"},
                    attrs: {placeholder: "例如：selectOrders"},
                    on: {blur: e.handleMapperMethodInput},
                    model: {
                        value: e.form.mapperMethod, callback: function (t) {
                            e.$set(e.form, "mapperMethod", t)
                        }, expression: "form.mapperMethod"
                    }
                })], 1), e._v(" "), o("el-form-item", {
                    attrs: {
                        label: "封装查询结果的DTO对象",
                        prop: "fullPackage"
                    }
                }, [o("el-input", {
                    staticStyle: {width: "95%"},
                    attrs: {clearable: !0, placeholder: "例如：com.example.dto.ExampleResultDto"},
                    model: {
                        value: e.form.fullPackage, callback: function (t) {
                            e.$set(e.form, "fullPackage", t)
                        }, expression: "form.fullPackage"
                    }
                }), e._v(" "), o("help-tip", {attrs: {content: "用于映射查询的结果的DTO类，如果为空，则默认使用Map封装查询结果。需包含完整的包和类名称，不存在该类时会自动生成"}})], 1), e._v(" "), o("el-form-item", {attrs: {label: "同步生成Mapper(java)的方法"}}, [o("el-switch", {
                    model: {
                        value: e.form.enableCreateDaoMethod,
                        callback: function (t) {
                            e.$set(e.form, "enableCreateDaoMethod", t)
                        },
                        expression: "form.enableCreateDaoMethod"
                    }
                })], 1), e._v(" "), e.form.enableCreateDaoMethod ? o("el-form-item", {attrs: {label: "是否启用分页查询"}}, [o("el-switch", {
                    model: {
                        value: e.form.enablePageQuery,
                        callback: function (t) {
                            e.$set(e.form, "enablePageQuery", t)
                        },
                        expression: "form.enablePageQuery"
                    }
                }), e._v(" "), o("help-tip", {attrs: {content: "启用分页查询后，Mapper方法的返回值会被包装为Page类型，同时增加相应的分页参数"}})], 1) : e._e(), e._v(" "), e.form.enableCreateDaoMethod ? o("el-form-item", {attrs: {label: "Mapper(java)方法的参数类型"}}, [o("el-radio-group", {
                    model: {
                        value: e.form.daoMethodParamType,
                        callback: function (t) {
                            e.$set(e.form, "daoMethodParamType", t)
                        },
                        expression: "form.daoMethodParamType"
                    }
                }, [o("el-radio", {attrs: {label: "map"}}, [e._v("Map（SQL动态参数作为Map的key）")]), e._v(" "), o("el-radio", {attrs: {label: "bean"}}, [e._v("Java Bean（SQL动态参数作为Bean的Property）")]), e._v(" "), o("el-radio", {attrs: {label: "single"}}, [e._v("多参数（SQL动态参数每个都作为一个独立方法参数）")])], 1)], 1) : e._e(), e._v(" "), e.form.enableCreateDaoMethod && "bean" == e.form.daoMethodParamType ? o("el-form-item", {attrs: {label: "Mapper(java)方法参数DTO"}}, [o("el-input", {
                    staticStyle: {width: "80%"},
                    attrs: {placeholder: "例如：com.example.dto.XXXMethodParamsDto"},
                    model: {
                        value: e.form.daoMethodParamDto, callback: function (t) {
                            e.$set(e.form, "daoMethodParamDto", t)
                        }, expression: "form.daoMethodParamDto"
                    }
                }), e._v(" "), o("help-tip", {attrs: {content: "Mapper的方法参数Bean的引用位置，如不存在则会根据SQL动态参数自动生成。"}})], 1) : e._e(), e._v(" "), o("el-form-item", [o("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit}
                }, [e._v("生成代码")])], 1)], 1)
            }), [], !1, null, null, null).exports, M = (o(453), {
                components: {codemirror: r.codemirror}, data: function () {
                    return {
                        sqlOptions: {
                            readOnly: !0,
                            tabSize: 4,
                            styleActiveLine: !0,
                            lineNumbers: !0,
                            line: !0,
                            mode: "text/x-mysql",
                            theme: "solarized light"
                        },
                        xmlOptions: {
                            readOnly: !0,
                            tabSize: 4,
                            styleActiveLine: !0,
                            lineNumbers: !0,
                            line: !0,
                            mode: "application/xml",
                            theme: "solarized light"
                        },
                        sqlCode: "",
                        xmlCode: ""
                    }
                }, mounted: function () {
                    this.sqlCode = "SELECT \n    *\nFROM\n    t_order t\n        LEFT JOIN\n    t_order_good t1 ON t.id = t1.order_id\nWHERE\n    t.order_code = '#{orderCode}'\n        AND t.city LIKE '#{city}'\n        AND t.customer_id IN '#{customerIds}'\n        AND t.creator = '#{creator}'\n        AND t.confirm_time BETWEEN '#{startTime}' AND '#{endTime}'", this.xmlCode = '\x3c!--Author:david，Date:2020-07-14,由mybatis-plus-generator-ui自动生成--\x3e\n  <select id="selectOrders" resultMap="ExampleDtoMap"> <![CDATA[\n      SELECT \n          *\n      FROM\n          t_order t\n              LEFT JOIN\n          t_order_good t1 ON t.id = t1.order_id\n      WHERE\n           1=1 \n      <if test="orderCode!=null">\n        AND  order_code = #{orderCode}\n      </if>\n      <if test="city!=null">\n       AND city like concat(\'%\',#{city},\'%\')\n      </if>\n      <if test="customerIds!=null">\n       AND customer_id in \n       <foreach item="item" collection="#{customerIds}" open="(" separator="," close=")">\n       #{item}\n       </foreach>\n      </if>\n      <if test="creator!=null">\n       AND creator = #{creator}\n      </if>\n      <if test="startTime!=null">\n       AND confirm_time between #{startTime} and #{endTime}\n      </if>\n    ]]>\n  </select>'
                }, methods: {}
            }), y = {
                components: {
                    DynamicSqlDemo: Object(v.a)(M, (function () {
                        var e = this, t = e.$createElement, o = e._self._c || t;
                        return o("div", [o("div", [e._v("动态sql增强是指将含有mybatis动态参数（#{...}）的where条件，转换为mybatis的动态SQL条件，一般用于用户输入条件进行查询的情况，例如：")]), e._v(" "), o("codemirror", {
                            attrs: {options: e.sqlOptions},
                            model: {
                                value: e.sqlCode, callback: function (t) {
                                    e.sqlCode = t
                                }, expression: "sqlCode"
                            }
                        }), e._v(" "), e._m(0), e._v(" "), o("codemirror", {
                            attrs: {options: e.xmlOptions},
                            model: {
                                value: e.xmlCode, callback: function (t) {
                                    e.xmlCode = t
                                }, expression: "xmlCode"
                            }
                        })], 1)
                    }), [function () {
                        var e = this.$createElement, t = this._self._c || e;
                        return t("div", {staticStyle: {"margin-buttom": "10px,margin-top:10px"}}, [this._v("\n    以上的SQL将会被转换为下面的动态SQL,注意\n    "), t("span", {staticStyle: {color: "red"}}, [this._v("动态参数需要用引号括起来")])])
                    }], !1, null, null, null).exports, codemirror: r.codemirror, HelpTip: l.a, DtoStrategyForm: _
                }, data: function () {
                    return {
                        showDynamicParamsDemo: !1,
                        showDtoConfig: !1,
                        sqlCode: "",
                        encodedSQL: "",
                        cmOptions: {
                            tabSize: 4,
                            styleActiveLine: !0,
                            lineNumbers: !0,
                            line: !0,
                            mode: "text/x-mysql",
                            theme: "solarized light"
                        }
                    }
                }, methods: {
                    genDtoFile: function () {
                        this.sqlCode ? (this.encodedSQL = c.Base64.encodeURI(this.sqlCode), this.showDtoConfig = !0) : this.$message.error("请先输入SQL语句")
                    }
                }
            }, D = Object(v.a)(y, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", [o("div", {staticClass: "content-header"}), e._v(" "), o("div", {staticClass: "content"}, [o("div", {staticClass: "container"}, [o("div", {staticStyle: {"margin-buttom": "10px"}}, [e._v("请输入待转换的SQL语句：")]), e._v(" "), o("el-alert", {
                    staticStyle: {margin: "10px"},
                    attrs: {title: "Tip：", type: "info", "show-icon": "", closable: !1}
                }, [e._v("\n        支持在SQL中嵌入Mybatis的动态参数，系统会自动识别参数，并生成对应的条件控制语句\n        "), o("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (t) {
                            e.showDynamicParamsDemo = !0
                        }
                    }
                }, [e._v("查看示例")])]), e._v(" "), o("codemirror", {
                    attrs: {options: e.cmOptions},
                    model: {
                        value: e.sqlCode, callback: function (t) {
                            e.sqlCode = t
                        }, expression: "sqlCode"
                    }
                }), e._v(" "), o("el-dialog", {
                    attrs: {
                        title: "SQL转代码的输出配置",
                        visible: e.showDtoConfig,
                        width: "60%",
                        top: "5vh"
                    }, on: {
                        "update:visible": function (t) {
                            e.showDtoConfig = t
                        }
                    }
                }, [o("dto-strategy-form", {
                    attrs: {sql: e.encodedSQL}, on: {
                        done: function (t) {
                            e.showDtoConfig = !1
                        }
                    }
                })], 1), e._v(" "), o("div", {staticStyle: {"margin-top": "10px"}}, [o("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.genDtoFile}
                }, [e._v("生成Mapper方法&DTO")])], 1)], 1), e._v(" "), o("el-dialog", {
                    attrs: {
                        modal: !1,
                        title: "动态SQL增强示例",
                        visible: e.showDynamicParamsDemo,
                        width: "80%",
                        top: "5vh"
                    }, on: {
                        "update:visible": function (t) {
                            e.showDynamicParamsDemo = t
                        }
                    }
                }, [o("dynamic-sql-demo")], 1)], 1)])
            }), [], !1, null, null, null);
        t.default = D.exports
    }
}]);
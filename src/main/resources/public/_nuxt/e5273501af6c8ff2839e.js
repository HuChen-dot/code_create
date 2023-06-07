(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    442: function (e, t, o) {
        "use strict";
        o(72), o(99);
        var n = {props: ["content"]}, l = o(42), component = Object(l.a)(n, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("el-tooltip", {attrs: {content: this.content}}, [t("i", {
                staticClass: "el-icon-question",
                staticStyle: {cursor: "hand"}
            })])
        }), [], !1, null, null, null);
        t.a = component.exports
    }, 458: function (e, t, o) {
        "use strict";
        o.r(t);
        o(229), o(3);
        var n = o(133), l = o.n(n), r = (o(58), o(72)), c = o.n(r), h = o(99), d = o.n(h), f = {
            props: [], components: {HelpTip: o(442).a}, data: function () {
                return {
                    searchKey: "",
                    showGenSettingDialog: !1,
                    tables: [],
                    choosedTables: [],
                    genSetting: {
                        author: "",
                        choosedOutputFiles: [],
                        override: !1,
                        moduleName: "",
                        choosedControllerMethods: [],
                        rootPath: ""
                    },
                    userConfig: {},
                    outputFileInfos: [],
                    isNewProject: !1,
                    showSavedProjectsDialog: !1,
                    savedProjects: []
                }
            }, computed: {
                isControllerChecked: function () {
                    return !!this.genSetting.choosedOutputFiles && -1 !== this.genSetting.choosedOutputFiles.indexOf("Controller")
                }, queryTables: function () {
                    var e = this, t = [];
                    return this.tables.forEach((function (o, i) {
                        !o.name || -1 === o.name.toLowerCase().indexOf(e.searchKey.toLowerCase()) && e.searchKey || t.push(o)
                    })), t
                }
            }, mounted: function () {
                var e = this;
                this.getAllTables(), this.getUserConfig(), c.a.get("/api/output-file-info/check-if-new-project").then((function (t) {
                    e.isNewProject = t
                }))
            }, methods: {
                handleTableSelection: function (e) {
                    this.choosedTables = e.map((function (e) {
                        return e.name
                    }))
                }, getAllTables: function () {
                    var e = this;
                    c.a.get("/api/db/tables").then((function (t) {
                        e.tables = t
                    }))
                }, getUserConfig: function () {
                    var e = this;
                    c.a.get("/api/output-file-info/user-config").then((function (t) {
                        e.userConfig = t
                    }))
                }, openGenSetting: function () {
                    var e = this;
                    if (0 !== this.choosedTables.length) {
                        try {
                            var t = sessionStorage.getItem("gen-setting");
                            t && (d.a.assign(this.genSetting, JSON.parse(t)), this.genSetting.moduleName = "", this.genSetting.override = !1), this.genSetting.rootPath || c.a.get("/api/output-file-info/project-root-path").then((function (t) {
                                e.genSetting.rootPath = t
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                        this.showGenSettingDialog = !0
                    } else this.$message.warning("请至少选择一张数据表")
                }, genCode: function () {
                    var e = this;
                    this.$confirm("确认生成所选择的'" + this.choosedTables.length + "'张数据表的业务代码吗?", "操作提示", {type: "warning"}).then((function () {
                        var t = JSON.stringify(d.a.clone(e.genSetting));
                        sessionStorage.setItem("gen-setting", t);
                        var o = {};
                        o.genSetting = e.genSetting, o.tables = e.choosedTables;
                        var n = l.a.service();
                        c.a.post("/api/mbp-generator/gen-code", o).then((function (t) {
                            e.$message({
                                message: "业务代码已生成",
                                type: "success"
                            }), n.close(), e.showGenSettingDialog = !1, e.choosedTables = [], e.$refs.tableList.clearSelection()
                        })).catch((function () {
                            n.close()
                        }))
                    }))
                }, openImportProjectView: function () {
                    var e = this;
                    this.showSavedProjectsDialog = !0, c.a.get("/api/output-file-info/all-saved-project").then((function (t) {
                        e.savedProjects = t
                    }))
                }, importProjectConfig: function (e) {
                    var t = this;
                    this.$confirm("确定导入" + e + "的配置吗？").then((function () {
                        c.a.post("/api/output-file-info/import-project-config/" + e).then((function () {
                            t.$message.success("配置已导入"), t.showSavedProjectsDialog = !1, setTimeout((function () {
                                window.location.reload()
                            }), 2)
                        }))
                    })).catch((function () {
                    }))
                }
            }
        }, v = o(42), component = Object(v.a)(f, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", [o("div", {staticClass: "content-header"}), e._v(" "), o("div", {staticClass: "content"}, [o("div", {staticClass: "container"}, [o("div", {staticStyle: {"margin-bottom": "10px"}}, [o("el-input", {
                staticStyle: {
                    width: "300px",
                    "margin-right": "20px"
                },
                attrs: {clearable: "", placeholder: "请输入表名进行查询", "prefix-icon": "el-icon-search"},
                model: {
                    value: e.searchKey, callback: function (t) {
                        e.searchKey = t
                    }, expression: "searchKey"
                }
            }), e._v(" "), o("el-button", {
                attrs: {type: "primary"},
                on: {click: e.openGenSetting}
            }, [e._v("代码生成")]), e._v(" "), e.isNewProject ? o("span", {
                staticStyle: {
                    color: "#e6a23c",
                    "font-size": "14px"
                }
            }, [e._v("当前项目还没保存自定义配置，将使用默认配置。您也可以"), o("a", {
                attrs: {href: "#"},
                on: {click: e.openImportProjectView}
            }, [e._v("导入")]), e._v("其它项目的配置，或者自定义\n          "), o("router-link", {attrs: {to: "/config"}}, [e._v("配置")])], 1) : e._e()], 1), e._v(" "), o("el-table", {
                ref: "tableList",
                staticStyle: {width: "100%"},
                attrs: {data: e.queryTables, border: ""},
                on: {"selection-change": e.handleTableSelection}
            }, [o("el-table-column", {
                attrs: {
                    type: "selection",
                    width: "55"
                }
            }), e._v(" "), o("el-table-column", {
                attrs: {
                    type: "index",
                    width: "50",
                    label: "序号"
                }
            }), e._v(" "), o("el-table-column", {
                attrs: {sortable: "", prop: "name", label: "table名称"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [e._v(e._s(t.row.name))]
                    }
                }])
            }), e._v(" "), o("el-table-column", {
                attrs: {
                    prop: "comment",
                    label: "table注释"
                }
            })], 1)], 1)]), e._v(" "), o("el-dialog", {
                attrs: {
                    visible: e.showGenSettingDialog,
                    title: "输出配置001",
                    width: "70%",
                    top: "5vh"
                }, on: {
                    "update:visible": function (t) {
                        e.showGenSettingDialog = t
                    }
                }
            }, [o("el-form", {attrs: {"label-width": "220px"}}, [o("el-form-item", {attrs: {label: "代码作者"}}, [o("el-input", {
                staticStyle: {width: "260px"},
                model: {
                    value: e.genSetting.author, callback: function (t) {
                        e.$set(e.genSetting, "author", t)
                    }, expression: "genSetting.author"
                }
            })], 1), e._v(" "), o("el-form-item", {attrs: {label: "功能模块名"}}, [o("el-input", {
                staticStyle: {width: "400px"},
                attrs: {placeholder: "模块名将加入到输出包名之后，用于划分不同的模块"},
                model: {
                    value: e.genSetting.moduleName, callback: function (t) {
                        e.$set(e.genSetting, "moduleName", t)
                    }, expression: "genSetting.moduleName"
                }
            })], 1), e._v(" "), o("el-form-item", {attrs: {label: "本次需生成的文件"}}, [o("el-checkbox-group", {
                model: {
                    value: e.genSetting.choosedOutputFiles,
                    callback: function (t) {
                        e.$set(e.genSetting, "choosedOutputFiles", t)
                    },
                    expression: "genSetting.choosedOutputFiles"
                }
            }, e._l(e.userConfig.outputFiles, (function (t) {
                return o("el-checkbox", {key: t.fileType, attrs: {label: t.fileType}}, [e._v(e._s(t.fileType))])
            })), 1)], 1), e._v(" "), e.isControllerChecked ? o("el-form-item", {attrs: {label: "需生成的Controller方法"}}, [o("el-alert", {
                attrs: {
                    title: "注意：如果更换了Controller的模板，以下选项可能不会生效，需自行在模板中实现",
                    type: "warning"
                }
            }), e._v(" "), o("el-checkbox-group", {
                model: {
                    value: e.genSetting.choosedControllerMethods,
                    callback: function (t) {
                        e.$set(e.genSetting, "choosedControllerMethods", t)
                    },
                    expression: "genSetting.choosedControllerMethods"
                }
            }, [o("el-checkbox", {
                key: "list",
                attrs: {label: "list"}
            }, [e._v("列表查询")]), e._v(" "), o("el-checkbox", {
                key: "getById",
                attrs: {label: "getById"}
            }, [e._v("按ID查询")]), e._v(" "), o("el-checkbox", {
                key: "create",
                attrs: {label: "create"}
            }, [e._v("新增")]), e._v(" "), o("el-checkbox", {
                key: "update",
                attrs: {label: "update"}
            }, [e._v("修改")]), e._v(" "), o("el-checkbox", {
                key: "delete",
                attrs: {label: "delete"}
            }, [e._v("删除")])], 1)], 1) : e._e(), e._v(" "), o("el-form-item", {attrs: {label: "存在同名文件时是否覆盖"}}, [o("el-switch", {
                model: {
                    value: e.genSetting.override,
                    callback: function (t) {
                        e.$set(e.genSetting, "override", t)
                    },
                    expression: "genSetting.override"
                }
            })], 1), e._v(" "), o("el-form-item", {attrs: {label: "目标项目根目录"}}, [o("el-input", {
                staticStyle: {width: "400px"},
                model: {
                    value: e.genSetting.rootPath, callback: function (t) {
                        e.$set(e.genSetting, "rootPath", t)
                    }, expression: "genSetting.rootPath"
                }
            }), e._v(" "), o("help-tip", {attrs: {content: "最终生成的代码位置等于：目标项目根目录 + 具体某个类别的源码设置的包目录"}})], 1), e._v(" "), o("el-form-item", [o("el-button", {
                attrs: {type: "primary"},
                on: {
                    click: function (t) {
                        return e.genCode()
                    }
                }
            }, [e._v("开始生成")])], 1)], 1)], 1), e._v(" "), o("el-dialog", {
                attrs: {
                    visible: e.showSavedProjectsDialog,
                    title: "项目配置导入",
                    width: "50%",
                    top: "5vh"
                }, on: {
                    "update:visible": function (t) {
                        e.showSavedProjectsDialog = t
                    }
                }
            }, [o("el-table", {
                attrs: {
                    data: e.savedProjects,
                    height: "300px"
                }
            }, [o("el-table-column", {
                attrs: {label: "项目包路径"}, scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [e._v("\n          " + e._s(t.row) + "\n        ")]
                    }
                }])
            }), e._v(" "), o("el-table-column", {
                attrs: {label: "导入"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [o("el-button", {
                            attrs: {type: "info", size: "mini"}, on: {
                                click: function (o) {
                                    return e.importProjectConfig(t.row)
                                }
                            }
                        }, [e._v("导入")])]
                    }
                }])
            })], 1)], 1)], 1)
        }), [], !1, null, null, null);
        t.default = component.exports
    }
}]);
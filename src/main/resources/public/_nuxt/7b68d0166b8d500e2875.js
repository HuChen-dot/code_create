(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    445: function (t, e, n) {
        t.exports = n.p + "img/af9195e.png"
    }, 456: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("a", {
                staticClass: "navbar-brand",
                attrs: {href: "javascript:;"}
            }, [e("img", {
                staticClass: "brand-image img-circle elevation-3",
                staticStyle: {opacity: ".8"},
                attrs: {alt: "Mapper代码生成器", src: n(445)}
            }), this._v(" "), e("span", {staticClass: "brand-text font-weight-light"}, [this._v("Mapper代码生成器")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("li", {staticClass: "nav-item"}, [e("a", {
                staticClass: "nav-link",
                attrs: {href: "https://github.com/davidfantasy/mybatis-plus-generator-ui"}
            }, [e("i", {staticClass: "fa fa-github"}), this._v("\n              GitHub\n            ")])])
        }], l = (n(58), n(72), {
            props: [], beforeDestroy: function () {
            }, computed: {
                viewKey: function () {
                    return void 0 !== this.$route.name ? this.$route.name + +new Date : this.$route + +new Date
                }
            }, data: function () {
                return {}
            }, mounted: function () {
            }, methods: {}
        }), o = n(42), component = Object(o.a)(l, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "wrapper"}, [n("nav", {staticClass: "main-header navbar navbar-expand-md navbar-light navbar-white"}, [n("div", {staticClass: "container"}, [t._m(0), t._v(" "), n("div", {
                staticClass: "collapse navbar-collapse order-3",
                attrs: {id: "navbarCollapse"}
            }, [n("ul", {staticClass: "navbar-nav"}, [n("li", {staticClass: "nav-item dropdown"}, [n("a", {
                staticClass: "nav-link dropdown-toggle",
                attrs: {
                    id: "tableMenuDropdown",
                    href: "#",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                }
            }, [t._v("")]), t._v(" "), n("ul", {
                staticClass: "dropdown-menu border-0 shadow",
                attrs: {"aria-labelledby": "tableMenuDropdown"}
            }, [n("li", [n("router-link", {
                staticClass: "dropdown-item",
                attrs: {to: "/table"}
            }, [t._v("Table查询")])], 1), t._v(" "), n("li", [n("router-link", {
                staticClass: "dropdown-item",
                attrs: {to: "/config"}
            }, [t._v("输出配置")])], 1)])]), t._v(" "), n("li", {staticClass: "nav-item"}, [n("router-link", {
                staticClass: "nav-link",
                attrs: {to: "/sql"}
            }, [t._v("")])], 1), t._v(" "), t._m(1)])])])]), t._v(" "), n("div", {staticClass: "content-wrapper"}, [n("nuxt-child", {key: t.viewKey})], 1)])
        }), r, !1, null, null, null);
        e.default = component.exports
    }
}]);
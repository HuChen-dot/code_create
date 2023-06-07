(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    443: function (e, t, r) {
        e.exports = function () {
            "use strict";
            var e = navigator.userAgent, t = navigator.platform, r = /gecko\/\d/i.test(e), n = /MSIE \d/.test(e),
                o = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e), l = /Edge\/(\d+)/.exec(e), c = n || o || l,
                d = c && (n ? document.documentMode || 6 : +(l || o)[1]), f = !l && /WebKit\//.test(e),
                h = f && /Qt\/\d+\.\d+/.test(e), m = !l && /Chrome\//.test(e), v = /Opera\//.test(e),
                y = /Apple Computer/.test(navigator.vendor), x = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                w = /PhantomJS/.test(e), C = y && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
                k = /Android/.test(e), S = C || k || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                M = C || /Mac/.test(t), _ = /\bCrOS\b/.test(e), L = /win/i.test(t),
                T = v && e.match(/Version\/(\d*\.\d*)/);
            T && (T = Number(T[1])), T && T >= 15 && (v = !1, f = !0);
            var z = M && (h || v && (null == T || T < 12.11)), N = r || c && d >= 9;

            function A(e) {
                return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
            }

            var O, D = function (e, t) {
                var r = e.className, n = A(t).exec(r);
                if (n) {
                    var o = r.slice(n.index + n[0].length);
                    e.className = r.slice(0, n.index) + (o ? n[1] + o : "")
                }
            };

            function W(e) {
                for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                return e
            }

            function F(e, t) {
                return W(e).appendChild(t)
            }

            function E(e, content, t, style) {
                var r = document.createElement(e);
                if (t && (r.className = t), style && (r.style.cssText = style), "string" == typeof content) r.appendChild(document.createTextNode(content)); else if (content) for (var i = 0; i < content.length; ++i) r.appendChild(content[i]);
                return r
            }

            function P(e, content, t, style) {
                var r = E(e, content, t, style);
                return r.setAttribute("role", "presentation"), r
            }

            function H(e, t) {
                if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                do {
                    if (11 == t.nodeType && (t = t.host), t == e) return !0
                } while (t = t.parentNode)
            }

            function I() {
                var e;
                try {
                    e = document.activeElement
                } catch (t) {
                    e = document.body || null
                }
                for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
                return e
            }

            function R(e, t) {
                var r = e.className;
                A(t).test(r) || (e.className += (r ? " " : "") + t)
            }

            function B(a, b) {
                for (var e = a.split(" "), i = 0; i < e.length; i++) e[i] && !A(e[i]).test(b) && (b += " " + e[i]);
                return b
            }

            O = document.createRange ? function (e, t, r, n) {
                var o = document.createRange();
                return o.setEnd(n || e, r), o.setStart(e, t), o
            } : function (e, t, r) {
                var n = document.body.createTextRange();
                try {
                    n.moveToElementText(e.parentNode)
                } catch (e) {
                    return n
                }
                return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n
            };
            var j = function (e) {
                e.select()
            };

            function G(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return e.apply(null, t)
                }
            }

            function U(e, t, r) {
                for (var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
                return t
            }

            function V(e, t, r, n, o) {
                null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                for (var i = n || 0, l = o || 0; ;) {
                    var c = e.indexOf("\t", i);
                    if (c < 0 || c >= t) return l + (t - i);
                    l += c - i, l += r - l % r, i = c + 1
                }
            }

            C ? j = function (e) {
                e.selectionStart = 0, e.selectionEnd = e.value.length
            } : c && (j = function (e) {
                try {
                    e.select()
                } catch (e) {
                }
            });
            var $ = function () {
                this.id = null, this.f = null, this.time = 0, this.handler = G(this.onTimeout, this)
            };

            function K(e, t) {
                for (var i = 0; i < e.length; ++i) if (e[i] == t) return i;
                return -1
            }

            $.prototype.onTimeout = function (e) {
                e.id = 0, e.time <= +new Date ? e.f() : setTimeout(e.handler, e.time - +new Date)
            }, $.prototype.set = function (e, t) {
                this.f = t;
                var time = +new Date + e;
                (!this.id || time < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = time)
            };
            var X = {
                toString: function () {
                    return "CodeMirror.Pass"
                }
            }, Y = {scroll: !1}, Q = {origin: "*mouse"}, Z = {origin: "+move"};

            function J(e, t, r) {
                for (var n = 0, col = 0; ;) {
                    var o = e.indexOf("\t", n);
                    -1 == o && (o = e.length);
                    var l = o - n;
                    if (o == e.length || col + l >= t) return n + Math.min(l, t - col);
                    if (col += o - n, n = o + 1, (col += r - col % r) >= t) return n
                }
            }

            var ee = [""];

            function te(e) {
                for (; ee.length <= e;) ee.push(re(ee) + " ");
                return ee[e]
            }

            function re(e) {
                return e[e.length - 1]
            }

            function map(e, t) {
                for (var r = [], i = 0; i < e.length; i++) r[i] = t(e[i], i);
                return r
            }

            function ne() {
            }

            function ie(base, e) {
                var t;
                return Object.create ? t = Object.create(base) : (ne.prototype = base, t = new ne), e && U(e, t), t
            }

            var oe = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

            function ae(e) {
                return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || oe.test(e))
            }

            function le(e, t) {
                return t ? !!(t.source.indexOf("\\w") > -1 && ae(e)) || t.test(e) : ae(e)
            }

            function se(e) {
                for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                return !0
            }

            var ce = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

            function ue(e) {
                return e.charCodeAt(0) >= 768 && ce.test(e)
            }

            function de(e, t, r) {
                for (; (r < 0 ? t > 0 : t < e.length) && ue(e.charAt(t));) t += r;
                return t
            }

            function fe(e, t, r) {
                for (var n = t > r ? -1 : 1; ;) {
                    if (t == r) return t;
                    var o = (t + r) / 2, l = n < 0 ? Math.ceil(o) : Math.floor(o);
                    if (l == t) return e(l) ? t : r;
                    e(l) ? r = l : t = l + n
                }
            }

            var he = null;

            function pe(e, t, r) {
                var n;
                he = null;
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (o.from < t && o.to > t) return i;
                    o.to == t && (o.from != o.to && "before" == r ? n = i : he = i), o.from == t && (o.from != o.to && "before" != r ? n = i : he = i)
                }
                return null != n ? n : he
            }

            var me = function () {
                var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, t = /[stwN]/, r = /[LRr]/, n = /[Lb1n]/,
                    o = /[1n]/;

                function l(e, t, r) {
                    this.level = e, this.from = t, this.to = r
                }

                return function (c, d) {
                    var f = "ltr" == d ? "L" : "R";
                    if (0 == c.length || "ltr" == d && !e.test(c)) return !1;
                    for (var code, h = c.length, m = [], i = 0; i < h; ++i) m.push((code = c.charCodeAt(i)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(code) : 1424 <= code && code <= 1524 ? "R" : 1536 <= code && code <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(code - 1536) : 1774 <= code && code <= 2220 ? "r" : 8192 <= code && code <= 8203 ? "w" : 8204 == code ? "b" : "L");
                    for (var v = 0, y = f; v < h; ++v) {
                        var x = m[v];
                        "m" == x ? m[v] = y : y = x
                    }
                    for (var w = 0, C = f; w < h; ++w) {
                        var k = m[w];
                        "1" == k && "r" == C ? m[w] = "n" : r.test(k) && (C = k, "r" == k && (m[w] = "R"))
                    }
                    for (var S = 1, M = m[0]; S < h - 1; ++S) {
                        var _ = m[S];
                        "+" == _ && "1" == M && "1" == m[S + 1] ? m[S] = "1" : "," != _ || M != m[S + 1] || "1" != M && "n" != M || (m[S] = M), M = _
                    }
                    for (var L = 0; L < h; ++L) {
                        var T = m[L];
                        if ("," == T) m[L] = "N"; else if ("%" == T) {
                            var z = void 0;
                            for (z = L + 1; z < h && "%" == m[z]; ++z) ;
                            for (var N = L && "!" == m[L - 1] || z < h && "1" == m[z] ? "1" : "N", A = L; A < z; ++A) m[A] = N;
                            L = z - 1
                        }
                    }
                    for (var O = 0, D = f; O < h; ++O) {
                        var W = m[O];
                        "L" == D && "1" == W ? m[O] = "L" : r.test(W) && (D = W)
                    }
                    for (var F = 0; F < h; ++F) if (t.test(m[F])) {
                        var E = void 0;
                        for (E = F + 1; E < h && t.test(m[E]); ++E) ;
                        for (var P = "L" == (F ? m[F - 1] : f), H = P == ("L" == (E < h ? m[E] : f)) ? P ? "L" : "R" : f, I = F; I < E; ++I) m[I] = H;
                        F = E - 1
                    }
                    for (var R, B = [], j = 0; j < h;) if (n.test(m[j])) {
                        var G = j;
                        for (++j; j < h && n.test(m[j]); ++j) ;
                        B.push(new l(0, G, j))
                    } else {
                        var U = j, V = B.length, $ = "rtl" == d ? 1 : 0;
                        for (++j; j < h && "L" != m[j]; ++j) ;
                        for (var K = U; K < j;) if (o.test(m[K])) {
                            U < K && (B.splice(V, 0, new l(1, U, K)), V += $);
                            var X = K;
                            for (++K; K < j && o.test(m[K]); ++K) ;
                            B.splice(V, 0, new l(2, X, K)), V += $, U = K
                        } else ++K;
                        U < j && B.splice(V, 0, new l(1, U, j))
                    }
                    return "ltr" == d && (1 == B[0].level && (R = c.match(/^\s+/)) && (B[0].from = R[0].length, B.unshift(new l(0, 0, R[0].length))), 1 == re(B).level && (R = c.match(/\s+$/)) && (re(B).to -= R[0].length, B.push(new l(0, h - R[0].length, h)))), "rtl" == d ? B.reverse() : B
                }
            }();

            function ge(line, e) {
                var t = line.order;
                return null == t && (t = line.order = me(line.text, e)), t
            }

            var ve = [], be = function (e, t, r) {
                if (e.addEventListener) e.addEventListener(t, r, !1); else if (e.attachEvent) e.attachEvent("on" + t, r); else {
                    var map = e._handlers || (e._handlers = {});
                    map[t] = (map[t] || ve).concat(r)
                }
            };

            function ye(e, t) {
                return e._handlers && e._handlers[t] || ve
            }

            function xe(e, t, r) {
                if (e.removeEventListener) e.removeEventListener(t, r, !1); else if (e.detachEvent) e.detachEvent("on" + t, r); else {
                    var map = e._handlers, n = map && map[t];
                    if (n) {
                        var o = K(n, r);
                        o > -1 && (map[t] = n.slice(0, o).concat(n.slice(o + 1)))
                    }
                }
            }

            function we(e, t) {
                var r = ye(e, t);
                if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
            }

            function Ce(e, t, r) {
                return "string" == typeof t && (t = {
                    type: t, preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }), we(e, r || t.type, e, t), Te(t) || t.codemirrorIgnore
            }

            function ke(e) {
                var t = e._handlers && e._handlers.cursorActivity;
                if (t) for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), i = 0; i < t.length; ++i) -1 == K(r, t[i]) && r.push(t[i])
            }

            function Se(e, t) {
                return ye(e, t).length > 0
            }

            function Me(e) {
                e.prototype.on = function (e, t) {
                    be(this, e, t)
                }, e.prototype.off = function (e, t) {
                    xe(this, e, t)
                }
            }

            function _e(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function Le(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }

            function Te(e) {
                return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
            }

            function ze(e) {
                _e(e), Le(e)
            }

            function Ne(e) {
                return e.target || e.srcElement
            }

            function Ae(e) {
                var b = e.which;
                return null == b && (1 & e.button ? b = 1 : 2 & e.button ? b = 3 : 4 & e.button && (b = 2)), M && e.ctrlKey && 1 == b && (b = 3), b
            }

            var Oe, De, We = function () {
                if (c && d < 9) return !1;
                var div = E("div");
                return "draggable" in div || "dragDrop" in div
            }();

            function Fe(e) {
                if (null == Oe) {
                    var t = E("span", "​");
                    F(e, E("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Oe = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(c && d < 8))
                }
                var r = Oe ? E("span", "​") : E("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return r.setAttribute("cm-text", ""), r
            }

            function Ee(e) {
                if (null != De) return De;
                var t = F(e, document.createTextNode("AخA")), r = O(t, 0, 1).getBoundingClientRect(),
                    n = O(t, 1, 2).getBoundingClientRect();
                return W(e), !(!r || r.left == r.right) && (De = n.right - r.right < 3)
            }

            var Pe, He = 3 != "\n\nb".split(/\n/).length ? function (e) {
                    for (var t = 0, r = [], n = e.length; t <= n;) {
                        var o = e.indexOf("\n", t);
                        -1 == o && (o = e.length);
                        var line = e.slice(t, "\r" == e.charAt(o - 1) ? o - 1 : o), rt = line.indexOf("\r");
                        -1 != rt ? (r.push(line.slice(0, rt)), t += rt + 1) : (r.push(line), t = o + 1)
                    }
                    return r
                } : function (e) {
                    return e.split(/\r\n?|\n/)
                }, Ie = window.getSelection ? function (e) {
                    try {
                        return e.selectionStart != e.selectionEnd
                    } catch (e) {
                        return !1
                    }
                } : function (e) {
                    var t;
                    try {
                        t = e.ownerDocument.selection.createRange()
                    } catch (e) {
                    }
                    return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                },
                Re = "oncopy" in (Pe = E("div")) || (Pe.setAttribute("oncopy", "return;"), "function" == typeof Pe.oncopy),
                Be = null, qe = {}, je = {};

            function Ge(e, t) {
                arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), qe[e] = t
            }

            function Ue(e) {
                if ("string" == typeof e && je.hasOwnProperty(e)) e = je[e]; else if (e && "string" == typeof e.name && je.hasOwnProperty(e.name)) {
                    var t = je[e.name];
                    "string" == typeof t && (t = {name: t}), (e = ie(t, e)).name = t.name
                } else {
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ue("application/xml");
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ue("application/json")
                }
                return "string" == typeof e ? {name: e} : e || {name: "null"}
            }

            function Ve(e, t) {
                t = Ue(t);
                var r = qe[t.name];
                if (!r) return Ve(e, "text/plain");
                var n = r(e, t);
                if ($e.hasOwnProperty(t.name)) {
                    var o = $e[t.name];
                    for (var l in o) o.hasOwnProperty(l) && (n.hasOwnProperty(l) && (n["_" + l] = n[l]), n[l] = o[l])
                }
                if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps) for (var c in t.modeProps) n[c] = t.modeProps[c];
                return n
            }

            var $e = {};

            function Ke(e, t) {
                U(t, $e.hasOwnProperty(e) ? $e[e] : $e[e] = {})
            }

            function Xe(e, t) {
                if (!0 === t) return t;
                if (e.copyState) return e.copyState(t);
                var r = {};
                for (var n in t) {
                    var o = t[n];
                    o instanceof Array && (o = o.concat([])), r[n] = o
                }
                return r
            }

            function Ye(e, t) {
                for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e;) t = r.state, e = r.mode;
                return r || {mode: e, state: t}
            }

            function Qe(e, t, r) {
                return !e.startState || e.startState(t, r)
            }

            var Ze = function (e, t, r) {
                this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r
            };

            function Je(e, t) {
                if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                for (var r = e; !r.lines;) for (var i = 0; ; ++i) {
                    var n = r.children[i], o = n.chunkSize();
                    if (t < o) {
                        r = n;
                        break
                    }
                    t -= o
                }
                return r.lines[t]
            }

            function et(e, t, r) {
                var n = [], o = t.line;
                return e.iter(t.line, r.line + 1, (function (line) {
                    var text = line.text;
                    o == r.line && (text = text.slice(0, r.ch)), o == t.line && (text = text.slice(t.ch)), n.push(text), ++o
                })), n
            }

            function tt(e, t, r) {
                var n = [];
                return e.iter(t, r, (function (line) {
                    n.push(line.text)
                })), n
            }

            function nt(line, e) {
                var t = e - line.height;
                if (t) for (var r = line; r; r = r.parent) r.height += t
            }

            function it(line) {
                if (null == line.parent) return null;
                for (var e = line.parent, t = K(e.lines, line), r = e.parent; r; e = r, r = r.parent) for (var i = 0; r.children[i] != e; ++i) t += r.children[i].chunkSize();
                return t + e.first
            }

            function ot(e, t) {
                var r = e.first;
                e:do {
                    for (var n = 0; n < e.children.length; ++n) {
                        var o = e.children[n], l = o.height;
                        if (t < l) {
                            e = o;
                            continue e
                        }
                        t -= l, r += o.chunkSize()
                    }
                    return r
                } while (!e.lines);
                for (var i = 0; i < e.lines.length; ++i) {
                    var c = e.lines[i].height;
                    if (t < c) break;
                    t -= c
                }
                return r + i
            }

            function at(e, t) {
                return t >= e.first && t < e.first + e.size
            }

            function lt(e, i) {
                return String(e.lineNumberFormatter(i + e.firstLineNumber))
            }

            function st(line, e, t) {
                if (void 0 === t && (t = null), !(this instanceof st)) return new st(line, e, t);
                this.line = line, this.ch = e, this.sticky = t
            }

            function ct(a, b) {
                return a.line - b.line || a.ch - b.ch
            }

            function ut(a, b) {
                return a.sticky == b.sticky && 0 == ct(a, b)
            }

            function ft(e) {
                return st(e.line, e.ch)
            }

            function ht(a, b) {
                return ct(a, b) < 0 ? b : a
            }

            function pt(a, b) {
                return ct(a, b) < 0 ? a : b
            }

            function mt(e, t) {
                return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }

            function gt(e, t) {
                if (t.line < e.first) return st(e.first, 0);
                var r = e.first + e.size - 1;
                return t.line > r ? st(r, Je(e, r).text.length) : function (e, t) {
                    var r = e.ch;
                    return null == r || r > t ? st(e.line, t) : r < 0 ? st(e.line, 0) : e
                }(t, Je(e, t.line).text.length)
            }

            function vt(e, t) {
                for (var r = [], i = 0; i < t.length; i++) r[i] = gt(e, t[i]);
                return r
            }

            Ze.prototype.eol = function () {
                return this.pos >= this.string.length
            }, Ze.prototype.sol = function () {
                return this.pos == this.lineStart
            }, Ze.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0
            }, Ze.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            }, Ze.prototype.eat = function (e) {
                var t = this.string.charAt(this.pos);
                if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
            }, Ze.prototype.eatWhile = function (e) {
                for (var t = this.pos; this.eat(e);) ;
                return this.pos > t
            }, Ze.prototype.eatSpace = function () {
                for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
                return this.pos > e
            }, Ze.prototype.skipToEnd = function () {
                this.pos = this.string.length
            }, Ze.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos);
                if (t > -1) return this.pos = t, !0
            }, Ze.prototype.backUp = function (e) {
                this.pos -= e
            }, Ze.prototype.column = function () {
                return this.lastColumnPos < this.start && (this.lastColumnValue = V(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? V(this.string, this.lineStart, this.tabSize) : 0)
            }, Ze.prototype.indentation = function () {
                return V(this.string, null, this.tabSize) - (this.lineStart ? V(this.string, this.lineStart, this.tabSize) : 0)
            }, Ze.prototype.match = function (pattern, e, t) {
                if ("string" != typeof pattern) {
                    var r = this.string.slice(this.pos).match(pattern);
                    return r && r.index > 0 ? null : (r && !1 !== e && (this.pos += r[0].length), r)
                }
                var n = function (e) {
                    return t ? e.toLowerCase() : e
                };
                if (n(this.string.substr(this.pos, pattern.length)) == n(pattern)) return !1 !== e && (this.pos += pattern.length), !0
            }, Ze.prototype.current = function () {
                return this.string.slice(this.start, this.pos)
            }, Ze.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e;
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }, Ze.prototype.lookAhead = function (e) {
                var t = this.lineOracle;
                return t && t.lookAhead(e)
            }, Ze.prototype.baseToken = function () {
                var e = this.lineOracle;
                return e && e.baseToken(this.pos)
            };
            var bt = function (e, t) {
                this.state = e, this.lookAhead = t
            }, yt = function (e, t, line, r) {
                this.state = t, this.doc = e, this.line = line, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
            };

            function xt(e, line, t, r) {
                var n = [e.state.modeGen], o = {};
                zt(e, line.text, e.doc.mode, t, (function (e, style) {
                    return n.push(e, style)
                }), o, r);
                for (var l = t.state, c = function (r) {
                    t.baseTokens = n;
                    var c = e.state.overlays[r], i = 1, d = 0;
                    t.state = !0, zt(e, line.text, c.mode, t, (function (e, style) {
                        for (var t = i; d < e;) {
                            var r = n[i];
                            r > e && n.splice(i, 1, e, n[i + 1], r), i += 2, d = Math.min(e, r)
                        }
                        if (style) if (c.opaque) n.splice(t, i - t, e, "overlay " + style), i = t + 2; else for (; t < i; t += 2) {
                            var o = n[t + 1];
                            n[t + 1] = (o ? o + " " : "") + "overlay " + style
                        }
                    }), o), t.state = l, t.baseTokens = null, t.baseTokenPos = 1
                }, d = 0; d < e.state.overlays.length; ++d) c(d);
                return {styles: n, classes: o.bgClass || o.textClass ? o : null}
            }

            function wt(e, line, t) {
                if (!line.styles || line.styles[0] != e.state.modeGen) {
                    var r = Ct(e, it(line)),
                        n = line.text.length > e.options.maxHighlightLength && Xe(e.doc.mode, r.state),
                        o = xt(e, line, r);
                    n && (r.state = n), line.stateAfter = r.save(!n), line.styles = o.styles, o.classes ? line.styleClasses = o.classes : line.styleClasses && (line.styleClasses = null), t === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                }
                return line.styles
            }

            function Ct(e, t, r) {
                var n = e.doc, o = e.display;
                if (!n.mode.startState) return new yt(n, !0, t);
                var l = function (e, t, r) {
                        for (var n, o, l = e.doc, c = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), d = t; d > c; --d) {
                            if (d <= l.first) return l.first;
                            var line = Je(l, d - 1), f = line.stateAfter;
                            if (f && (!r || d + (f instanceof bt ? f.lookAhead : 0) <= l.modeFrontier)) return d;
                            var h = V(line.text, null, e.options.tabSize);
                            (null == o || n > h) && (o = d - 1, n = h)
                        }
                        return o
                    }(e, t, r), c = l > n.first && Je(n, l - 1).stateAfter,
                    d = c ? yt.fromSaved(n, c, l) : new yt(n, Qe(n.mode), l);
                return n.iter(l, t, (function (line) {
                    kt(e, line.text, d);
                    var r = d.line;
                    line.stateAfter = r == t - 1 || r % 5 == 0 || r >= o.viewFrom && r < o.viewTo ? d.save() : null, d.nextLine()
                })), r && (n.modeFrontier = d.line), d
            }

            function kt(e, text, t, r) {
                var n = e.doc.mode, o = new Ze(text, e.options.tabSize, t);
                for (o.start = o.pos = r || 0, "" == text && St(n, t.state); !o.eol();) Mt(n, o, t.state), o.start = o.pos
            }

            function St(e, t) {
                if (e.blankLine) return e.blankLine(t);
                if (e.innerMode) {
                    var r = Ye(e, t);
                    return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
                }
            }

            function Mt(e, t, r, n) {
                for (var i = 0; i < 10; i++) {
                    n && (n[0] = Ye(e, r).mode);
                    var style = e.token(t, r);
                    if (t.pos > t.start) return style
                }
                throw new Error("Mode " + e.name + " failed to advance stream.")
            }

            yt.prototype.lookAhead = function (e) {
                var line = this.doc.getLine(this.line + e);
                return null != line && e > this.maxLookAhead && (this.maxLookAhead = e), line
            }, yt.prototype.baseToken = function (e) {
                if (!this.baseTokens) return null;
                for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
                var t = this.baseTokens[this.baseTokenPos + 1];
                return {type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e}
            }, yt.prototype.nextLine = function () {
                this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
            }, yt.fromSaved = function (e, t, line) {
                return t instanceof bt ? new yt(e, Xe(e.mode, t.state), line, t.lookAhead) : new yt(e, Xe(e.mode, t), line)
            }, yt.prototype.save = function (e) {
                var t = !1 !== e ? Xe(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new bt(t, this.maxLookAhead) : t
            };
            var _t = function (e, t, r) {
                this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r
            };

            function Lt(e, t, r, n) {
                var style, o, l = e.doc, c = l.mode, line = Je(l, (t = gt(l, t)).line), d = Ct(e, t.line, r),
                    f = new Ze(line.text, e.options.tabSize, d);
                for (n && (o = []); (n || f.pos < t.ch) && !f.eol();) f.start = f.pos, style = Mt(c, f, d.state), n && o.push(new _t(f, style, Xe(l.mode, d.state)));
                return n ? o : new _t(f, style, d.state)
            }

            function Tt(e, output) {
                if (e) for (; ;) {
                    var t = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!t) break;
                    e = e.slice(0, t.index) + e.slice(t.index + t[0].length);
                    var r = t[1] ? "bgClass" : "textClass";
                    null == output[r] ? output[r] = t[2] : new RegExp("(?:^|\\s)" + t[2] + "(?:$|\\s)").test(output[r]) || (output[r] += " " + t[2])
                }
                return e
            }

            function zt(e, text, t, r, n, o, l) {
                var c = t.flattenSpans;
                null == c && (c = e.options.flattenSpans);
                var style, d = 0, f = null, h = new Ze(text, e.options.tabSize, r),
                    m = e.options.addModeClass && [null];
                for ("" == text && Tt(St(t, r.state), o); !h.eol();) {
                    if (h.pos > e.options.maxHighlightLength ? (c = !1, l && kt(e, text, r, h.pos), h.pos = text.length, style = null) : style = Tt(Mt(t, h, r.state, m), o), m) {
                        var v = m[0].name;
                        v && (style = "m-" + (style ? v + " " + style : v))
                    }
                    if (!c || f != style) {
                        for (; d < h.start;) n(d = Math.min(h.start, d + 5e3), f);
                        f = style
                    }
                    h.start = h.pos
                }
                for (; d < h.pos;) {
                    var y = Math.min(h.pos, d + 5e3);
                    n(y, f), d = y
                }
            }

            var Nt = !1, At = !1;

            function Ot(marker, e, t) {
                this.marker = marker, this.from = e, this.to = t
            }

            function Dt(e, marker) {
                if (e) for (var i = 0; i < e.length; ++i) {
                    var span = e[i];
                    if (span.marker == marker) return span
                }
            }

            function Wt(e, span) {
                for (var t, i = 0; i < e.length; ++i) e[i] != span && (t || (t = [])).push(e[i]);
                return t
            }

            function Ft(e, t) {
                if (t.full) return null;
                var r = at(e, t.from.line) && Je(e, t.from.line).markedSpans,
                    n = at(e, t.to.line) && Je(e, t.to.line).markedSpans;
                if (!r && !n) return null;
                var o = t.from.ch, l = t.to.ch, c = 0 == ct(t.from, t.to), d = function (e, t, r) {
                    var n;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var span = e[i], marker = span.marker;
                        if (null == span.from || (marker.inclusiveLeft ? span.from <= t : span.from < t) || span.from == t && "bookmark" == marker.type && (!r || !span.marker.insertLeft)) {
                            var o = null == span.to || (marker.inclusiveRight ? span.to >= t : span.to > t);
                            (n || (n = [])).push(new Ot(marker, span.from, o ? null : span.to))
                        }
                    }
                    return n
                }(r, o, c), f = function (e, t, r) {
                    var n;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var span = e[i], marker = span.marker;
                        if (null == span.to || (marker.inclusiveRight ? span.to >= t : span.to > t) || span.from == t && "bookmark" == marker.type && (!r || span.marker.insertLeft)) {
                            var o = null == span.from || (marker.inclusiveLeft ? span.from <= t : span.from < t);
                            (n || (n = [])).push(new Ot(marker, o ? null : span.from - t, null == span.to ? null : span.to - t))
                        }
                    }
                    return n
                }(n, l, c), h = 1 == t.text.length, m = re(t.text).length + (h ? o : 0);
                if (d) for (var i = 0; i < d.length; ++i) {
                    var span = d[i];
                    if (null == span.to) {
                        var v = Dt(f, span.marker);
                        v ? h && (span.to = null == v.to ? null : v.to + m) : span.to = o
                    }
                }
                if (f) for (var y = 0; y < f.length; ++y) {
                    var x = f[y];
                    null != x.to && (x.to += m), null == x.from ? Dt(d, x.marker) || (x.from = m, h && (d || (d = [])).push(x)) : (x.from += m, h && (d || (d = [])).push(x))
                }
                d && (d = Et(d)), f && f != d && (f = Et(f));
                var w = [d];
                if (!h) {
                    var C, k = t.text.length - 2;
                    if (k > 0 && d) for (var S = 0; S < d.length; ++S) null == d[S].to && (C || (C = [])).push(new Ot(d[S].marker, null, null));
                    for (var M = 0; M < k; ++M) w.push(C);
                    w.push(f)
                }
                return w
            }

            function Et(e) {
                for (var i = 0; i < e.length; ++i) {
                    var span = e[i];
                    null != span.from && span.from == span.to && !1 !== span.marker.clearWhenEmpty && e.splice(i--, 1)
                }
                return e.length ? e : null
            }

            function Pt(line) {
                var e = line.markedSpans;
                if (e) {
                    for (var i = 0; i < e.length; ++i) e[i].marker.detachLine(line);
                    line.markedSpans = null
                }
            }

            function Ht(line, e) {
                if (e) {
                    for (var i = 0; i < e.length; ++i) e[i].marker.attachLine(line);
                    line.markedSpans = e
                }
            }

            function It(marker) {
                return marker.inclusiveLeft ? -1 : 0
            }

            function Rt(marker) {
                return marker.inclusiveRight ? 1 : 0
            }

            function Bt(a, b) {
                var e = a.lines.length - b.lines.length;
                if (0 != e) return e;
                var t = a.find(), r = b.find(), n = ct(t.from, r.from) || It(a) - It(b);
                if (n) return -n;
                var o = ct(t.to, r.to) || Rt(a) - Rt(b);
                return o || b.id - a.id
            }

            function qt(line, e) {
                var t, r = At && line.markedSpans;
                if (r) for (var n = void 0, i = 0; i < r.length; ++i) (n = r[i]).marker.collapsed && null == (e ? n.from : n.to) && (!t || Bt(t, n.marker) < 0) && (t = n.marker);
                return t
            }

            function jt(line) {
                return qt(line, !0)
            }

            function Gt(line) {
                return qt(line, !1)
            }

            function Ut(line, e) {
                var t, r = At && line.markedSpans;
                if (r) for (var i = 0; i < r.length; ++i) {
                    var n = r[i];
                    n.marker.collapsed && (null == n.from || n.from < e) && (null == n.to || n.to > e) && (!t || Bt(t, n.marker) < 0) && (t = n.marker)
                }
                return t
            }

            function Vt(e, t, r, n, marker) {
                var line = Je(e, t), o = At && line.markedSpans;
                if (o) for (var i = 0; i < o.length; ++i) {
                    var l = o[i];
                    if (l.marker.collapsed) {
                        var c = l.marker.find(0), d = ct(c.from, r) || It(l.marker) - It(marker),
                            f = ct(c.to, n) || Rt(l.marker) - Rt(marker);
                        if (!(d >= 0 && f <= 0 || d <= 0 && f >= 0) && (d <= 0 && (l.marker.inclusiveRight && marker.inclusiveLeft ? ct(c.to, r) >= 0 : ct(c.to, r) > 0) || d >= 0 && (l.marker.inclusiveRight && marker.inclusiveLeft ? ct(c.from, n) <= 0 : ct(c.from, n) < 0))) return !0
                    }
                }
            }

            function $t(line) {
                for (var e; e = jt(line);) line = e.find(-1, !0).line;
                return line
            }

            function Kt(e, t) {
                var line = Je(e, t), r = $t(line);
                return line == r ? t : it(r)
            }

            function Xt(e, t) {
                if (t > e.lastLine()) return t;
                var r, line = Je(e, t);
                if (!Yt(e, line)) return t;
                for (; r = Gt(line);) line = r.find(1, !0).line;
                return it(line) + 1
            }

            function Yt(e, line) {
                var t = At && line.markedSpans;
                if (t) for (var r = void 0, i = 0; i < t.length; ++i) if ((r = t[i]).marker.collapsed) {
                    if (null == r.from) return !0;
                    if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Qt(e, line, r)) return !0
                }
            }

            function Qt(e, line, span) {
                if (null == span.to) {
                    var t = span.marker.find(1, !0);
                    return Qt(e, t.line, Dt(t.line.markedSpans, span.marker))
                }
                if (span.marker.inclusiveRight && span.to == line.text.length) return !0;
                for (var r = void 0, i = 0; i < line.markedSpans.length; ++i) if ((r = line.markedSpans[i]).marker.collapsed && !r.marker.widgetNode && r.from == span.to && (null == r.to || r.to != span.from) && (r.marker.inclusiveLeft || span.marker.inclusiveRight) && Qt(e, line, r)) return !0
            }

            function Zt(e) {
                for (var t = 0, r = (e = $t(e)).parent, i = 0; i < r.lines.length; ++i) {
                    var line = r.lines[i];
                    if (line == e) break;
                    t += line.height
                }
                for (var p = r.parent; p; p = (r = p).parent) for (var n = 0; n < p.children.length; ++n) {
                    var o = p.children[n];
                    if (o == r) break;
                    t += o.height
                }
                return t
            }

            function Jt(line) {
                if (0 == line.height) return 0;
                for (var e, t = line.text.length, r = line; e = jt(r);) {
                    var n = e.find(0, !0);
                    r = n.from.line, t += n.from.ch - n.to.ch
                }
                for (r = line; e = Gt(r);) {
                    var o = e.find(0, !0);
                    t -= r.text.length - o.from.ch, t += (r = o.to.line).text.length - o.to.ch
                }
                return t
            }

            function er(e) {
                var t = e.display, r = e.doc;
                t.maxLine = Je(r, r.first), t.maxLineLength = Jt(t.maxLine), t.maxLineChanged = !0, r.iter((function (line) {
                    var e = Jt(line);
                    e > t.maxLineLength && (t.maxLineLength = e, t.maxLine = line)
                }))
            }

            var rr = function (text, e, t) {
                this.text = text, Ht(this, e), this.height = t ? t(this) : 1
            };

            function nr(line) {
                line.parent = null, Pt(line)
            }

            rr.prototype.lineNo = function () {
                return it(this)
            }, Me(rr);
            var ir = {}, or = {};

            function ar(style, e) {
                if (!style || /^\s*$/.test(style)) return null;
                var t = e.addModeClass ? or : ir;
                return t[style] || (t[style] = style.replace(/\S+/g, "cm-$&"))
            }

            function lr(e, t) {
                var content = P("span", null, null, f ? "padding-right: .1px" : null), r = {
                    pre: P("pre", [content], "CodeMirror-line"),
                    content: content,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption("lineWrapping")
                };
                t.measure = {};
                for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                    var line = i ? t.rest[i - 1] : t.line, n = void 0;
                    r.pos = 0, r.addToken = cr, Ee(e.display.measure) && (n = ge(line, e.doc.direction)) && (r.addToken = ur(r.addToken, n)), r.map = [], fr(line, r, wt(e, line, t != e.display.externalMeasured && it(line))), line.styleClasses && (line.styleClasses.bgClass && (r.bgClass = B(line.styleClasses.bgClass, r.bgClass || "")), line.styleClasses.textClass && (r.textClass = B(line.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Fe(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                }
                if (f) {
                    var o = r.content.lastChild;
                    (/\bcm-tab\b/.test(o.className) || o.querySelector && o.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
                }
                return we(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = B(r.pre.className, r.textClass || "")), r
            }

            function sr(e) {
                var t = E("span", "•", "cm-invalidchar");
                return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
            }

            function cr(e, text, style, t, r, n, o) {
                if (text) {
                    var content, l = e.splitSpaces ? function (text, e) {
                        if (text.length > 1 && !/  /.test(text)) return text;
                        for (var t = e, r = "", i = 0; i < text.length; i++) {
                            var n = text.charAt(i);
                            " " != n || !t || i != text.length - 1 && 32 != text.charCodeAt(i + 1) || (n = " "), r += n, t = " " == n
                        }
                        return r
                    }(text, e.trailingSpace) : text, f = e.cm.state.specialChars, h = !1;
                    if (f.test(text)) {
                        content = document.createDocumentFragment();
                        for (var m = 0; ;) {
                            f.lastIndex = m;
                            var v = f.exec(text), y = v ? v.index - m : text.length - m;
                            if (y) {
                                var x = document.createTextNode(l.slice(m, m + y));
                                c && d < 9 ? content.appendChild(E("span", [x])) : content.appendChild(x), e.map.push(e.pos, e.pos + y, x), e.col += y, e.pos += y
                            }
                            if (!v) break;
                            m += y + 1;
                            var w = void 0;
                            if ("\t" == v[0]) {
                                var C = e.cm.options.tabSize, k = C - e.col % C;
                                (w = content.appendChild(E("span", te(k), "cm-tab"))).setAttribute("role", "presentation"), w.setAttribute("cm-text", "\t"), e.col += k
                            } else "\r" == v[0] || "\n" == v[0] ? ((w = content.appendChild(E("span", "\r" == v[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", v[0]), e.col += 1) : ((w = e.cm.options.specialCharPlaceholder(v[0])).setAttribute("cm-text", v[0]), c && d < 9 ? content.appendChild(E("span", [w])) : content.appendChild(w), e.col += 1);
                            e.map.push(e.pos, e.pos + 1, w), e.pos++
                        }
                    } else e.col += text.length, content = document.createTextNode(l), e.map.push(e.pos, e.pos + text.length, content), c && d < 9 && (h = !0), e.pos += text.length;
                    if (e.trailingSpace = 32 == l.charCodeAt(text.length - 1), style || t || r || h || n || o) {
                        var S = style || "";
                        t && (S += t), r && (S += r);
                        var M = E("span", [content], S, n);
                        if (o) for (var _ in o) o.hasOwnProperty(_) && "style" != _ && "class" != _ && M.setAttribute(_, o[_]);
                        return e.content.appendChild(M)
                    }
                    e.content.appendChild(content)
                }
            }

            function ur(e, t) {
                return function (r, text, style, n, o, l, c) {
                    style = style ? style + " cm-force-border" : "cm-force-border";
                    for (var d = r.pos, f = d + text.length; ;) {
                        for (var h = void 0, i = 0; i < t.length && !((h = t[i]).to > d && h.from <= d); i++) ;
                        if (h.to >= f) return e(r, text, style, n, o, l, c);
                        e(r, text.slice(0, h.to - d), style, n, null, l, c), n = null, text = text.slice(h.to - d), d = h.to
                    }
                }
            }

            function dr(e, t, marker, r) {
                var n = !r && marker.widgetNode;
                n && e.map.push(e.pos, e.pos + t, n), !r && e.cm.display.input.needsContentAttribute && (n || (n = e.content.appendChild(document.createElement("span"))), n.setAttribute("cm-marker", marker.id)), n && (e.cm.display.input.setUneditable(n), e.content.appendChild(n)), e.pos += t, e.trailingSpace = !1
            }

            function fr(line, e, t) {
                var r = line.markedSpans, n = line.text, o = 0;
                if (r) for (var style, l, c, d, f, h, m, v = n.length, y = 0, i = 1, text = "", x = 0; ;) {
                    if (x == y) {
                        c = d = f = l = "", m = null, h = null, x = 1 / 0;
                        for (var w = [], C = void 0, k = 0; k < r.length; ++k) {
                            var S = r[k], M = S.marker;
                            if ("bookmark" == M.type && S.from == y && M.widgetNode) w.push(M); else if (S.from <= y && (null == S.to || S.to > y || M.collapsed && S.to == y && S.from == y)) {
                                if (null != S.to && S.to != y && x > S.to && (x = S.to, d = ""), M.className && (c += " " + M.className), M.css && (l = (l ? l + ";" : "") + M.css), M.startStyle && S.from == y && (f += " " + M.startStyle), M.endStyle && S.to == x && (C || (C = [])).push(M.endStyle, S.to), M.title && ((m || (m = {})).title = M.title), M.attributes) for (var _ in M.attributes) (m || (m = {}))[_] = M.attributes[_];
                                M.collapsed && (!h || Bt(h.marker, M) < 0) && (h = S)
                            } else S.from > y && x > S.from && (x = S.from)
                        }
                        if (C) for (var L = 0; L < C.length; L += 2) C[L + 1] == x && (d += " " + C[L]);
                        if (!h || h.from == y) for (var T = 0; T < w.length; ++T) dr(e, 0, w[T]);
                        if (h && (h.from || 0) == y) {
                            if (dr(e, (null == h.to ? v + 1 : h.to) - y, h.marker, null == h.from), null == h.to) return;
                            h.to == y && (h = !1)
                        }
                    }
                    if (y >= v) break;
                    for (var z = Math.min(v, x); ;) {
                        if (text) {
                            var N = y + text.length;
                            if (!h) {
                                var A = N > z ? text.slice(0, z - y) : text;
                                e.addToken(e, A, style ? style + c : c, f, y + A.length == x ? d : "", l, m)
                            }
                            if (N >= z) {
                                text = text.slice(z - y), y = z;
                                break
                            }
                            y = N, f = ""
                        }
                        text = n.slice(o, o = t[i++]), style = ar(t[i++], e.cm.options)
                    }
                } else for (var O = 1; O < t.length; O += 2) e.addToken(e, n.slice(o, o = t[O]), ar(t[O + 1], e.cm.options))
            }

            function pr(e, line, t) {
                this.line = line, this.rest = function (line) {
                    for (var e, t; e = Gt(line);) line = e.find(1, !0).line, (t || (t = [])).push(line);
                    return t
                }(line), this.size = this.rest ? it(re(this.rest)) - t + 1 : 1, this.node = this.text = null, this.hidden = Yt(e, line)
            }

            function mr(e, t, r) {
                for (var n, o = [], l = t; l < r; l = n) {
                    var view = new pr(e.doc, Je(e.doc, l), l);
                    n = l + view.size, o.push(view)
                }
                return o
            }

            var gr = null, vr = null;

            function yr(e, t) {
                var r = ye(e, t);
                if (r.length) {
                    var n, o = Array.prototype.slice.call(arguments, 2);
                    gr ? n = gr.delayedCallbacks : vr ? n = vr : (n = vr = [], setTimeout(xr, 0));
                    for (var l = function (i) {
                        n.push((function () {
                            return r[i].apply(null, o)
                        }))
                    }, i = 0; i < r.length; ++i) l(i)
                }
            }

            function xr() {
                var e = vr;
                vr = null;
                for (var i = 0; i < e.length; ++i) e[i]()
            }

            function wr(e, t, r, n) {
                for (var o = 0; o < t.changes.length; o++) {
                    var l = t.changes[o];
                    "text" == l ? Sr(e, t) : "gutter" == l ? _r(e, t, r, n) : "class" == l ? Mr(e, t) : "widget" == l && Lr(e, t, n)
                }
                t.changes = null
            }

            function Cr(e) {
                return e.node == e.text && (e.node = E("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), c && d < 8 && (e.node.style.zIndex = 2)), e.node
            }

            function kr(e, t) {
                var r = e.display.externalMeasured;
                return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : lr(e, t)
            }

            function Sr(e, t) {
                var r = t.text.className, n = kr(e, t);
                t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, Mr(e, t)) : r && (t.text.className = r)
            }

            function Mr(e, t) {
                !function (e, t) {
                    var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                    if (r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null); else if (r) {
                        var n = Cr(t);
                        t.background = n.insertBefore(E("div", null, r), n.firstChild), e.display.input.setUneditable(t.background)
                    }
                }(e, t), t.line.wrapClass ? Cr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                t.text.className = r || ""
            }

            function _r(e, t, r, n) {
                if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                    var o = Cr(t);
                    t.gutterBackground = E("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), o.insertBefore(t.gutterBackground, t.text)
                }
                var l = t.line.gutterMarkers;
                if (e.options.lineNumbers || l) {
                    var c = Cr(t),
                        d = t.gutter = E("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
                    if (e.display.input.setUneditable(d), c.insertBefore(d, t.text), t.line.gutterClass && (d.className += " " + t.line.gutterClass), !e.options.lineNumbers || l && l["CodeMirror-linenumbers"] || (t.lineNumber = d.appendChild(E("div", lt(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), l) for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
                        var h = e.display.gutterSpecs[f].className, m = l.hasOwnProperty(h) && l[h];
                        m && d.appendChild(E("div", [m], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[h] + "px; width: " + n.gutterWidth[h] + "px"))
                    }
                }
            }

            function Lr(e, t, r) {
                t.alignable && (t.alignable = null);
                for (var n = A("CodeMirror-linewidget"), o = t.node.firstChild, l = void 0; o; o = l) l = o.nextSibling, n.test(o.className) && t.node.removeChild(o);
                zr(e, t, r)
            }

            function Tr(e, t, r, n) {
                var o = kr(e, t);
                return t.text = t.node = o.pre, o.bgClass && (t.bgClass = o.bgClass), o.textClass && (t.textClass = o.textClass), Mr(e, t), _r(e, t, r, n), zr(e, t, n), t.node
            }

            function zr(e, t, r) {
                if (Nr(e, t.line, t, r, !0), t.rest) for (var i = 0; i < t.rest.length; i++) Nr(e, t.rest[i], t, r, !1)
            }

            function Nr(e, line, t, r, n) {
                if (line.widgets) for (var o = Cr(t), i = 0, l = line.widgets; i < l.length; ++i) {
                    var c = l[i],
                        d = E("div", [c.node], "CodeMirror-linewidget" + (c.className ? " " + c.className : ""));
                    c.handleMouseEvents || d.setAttribute("cm-ignore-events", "true"), Ar(c, d, t, r), e.display.input.setUneditable(d), n && c.above ? o.insertBefore(d, t.gutter || t.text) : o.appendChild(d), yr(c, "redraw")
                }
            }

            function Ar(e, t, r, n) {
                if (e.noHScroll) {
                    (r.alignable || (r.alignable = [])).push(t);
                    var o = n.wrapperWidth;
                    t.style.left = n.fixedPos + "px", e.coverGutter || (o -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = o + "px"
                }
                e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
            }

            function Or(e) {
                if (null != e.height) return e.height;
                var t = e.doc.cm;
                if (!t) return 0;
                if (!H(document.body, e.node)) {
                    var r = "position: relative;";
                    e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), F(t.display.measure, E("div", [e.node], null, r))
                }
                return e.height = e.node.parentNode.offsetHeight
            }

            function Dr(e, t) {
                for (var r = Ne(t); r != e.wrapper; r = r.parentNode) if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0
            }

            function Wr(e) {
                return e.lineSpace.offsetTop
            }

            function Fr(e) {
                return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }

            function Er(e) {
                if (e.cachedPaddingH) return e.cachedPaddingH;
                var t = F(e.measure, E("pre", "x", "CodeMirror-line-like")),
                    style = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                    data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
                return isNaN(data.left) || isNaN(data.right) || (e.cachedPaddingH = data), data
            }

            function Pr(e) {
                return 50 - e.display.nativeBarWidth
            }

            function Hr(e) {
                return e.display.scroller.clientWidth - Pr(e) - e.display.barWidth
            }

            function Ir(e) {
                return e.display.scroller.clientHeight - Pr(e) - e.display.barHeight
            }

            function Rr(e, line, t) {
                if (e.line == line) return {map: e.measure.map, cache: e.measure.cache};
                for (var i = 0; i < e.rest.length; i++) if (e.rest[i] == line) return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i]
                };
                for (var r = 0; r < e.rest.length; r++) if (it(e.rest[r]) > t) return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r],
                    before: !0
                }
            }

            function Br(e, line, t, r) {
                return Gr(e, jr(e, line), t, r)
            }

            function qr(e, t) {
                if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Cn(e, t)];
                var r = e.display.externalMeasured;
                return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
            }

            function jr(e, line) {
                var t = it(line), view = qr(e, t);
                view && !view.text ? view = null : view && view.changes && (wr(e, view, t, vn(e)), e.curOp.forceUpdate = !0), view || (view = function (e, line) {
                    var t = it(line = $t(line)), view = e.display.externalMeasured = new pr(e.doc, line, t);
                    view.lineN = t;
                    var r = view.built = lr(e, view);
                    return view.text = r.pre, F(e.display.lineMeasure, r.pre), view
                }(e, line));
                var r = Rr(view, line, t);
                return {
                    line: line,
                    view: view,
                    rect: null,
                    map: r.map,
                    cache: r.cache,
                    before: r.before,
                    hasHeights: !1
                }
            }

            function Gr(e, t, r, n, o) {
                t.before && (r = -1);
                var l, f = r + (n || "");
                return t.cache.hasOwnProperty(f) ? l = t.cache[f] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, rect) {
                    var r = e.options.lineWrapping, n = r && Hr(e);
                    if (!t.measure.heights || r && t.measure.width != n) {
                        var o = t.measure.heights = [];
                        if (r) {
                            t.measure.width = n;
                            for (var l = t.text.firstChild.getClientRects(), i = 0; i < l.length - 1; i++) {
                                var c = l[i], d = l[i + 1];
                                Math.abs(c.bottom - d.bottom) > 2 && o.push((c.bottom + d.top) / 2 - rect.top)
                            }
                        }
                        o.push(rect.bottom - rect.top)
                    }
                }(e, t.view, t.rect), t.hasHeights = !0), (l = function (e, t, r, n) {
                    var rect, o = $r(t.map, r, n), l = o.node, f = o.start, h = o.end, m = o.collapse;
                    if (3 == l.nodeType) {
                        for (var v = 0; v < 4; v++) {
                            for (; f && ue(t.line.text.charAt(o.coverStart + f));) --f;
                            for (; o.coverStart + h < o.coverEnd && ue(t.line.text.charAt(o.coverStart + h));) ++h;
                            if ((rect = c && d < 9 && 0 == f && h == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Kr(O(l, f, h).getClientRects(), n)).left || rect.right || 0 == f) break;
                            h = f, f -= 1, m = "right"
                        }
                        c && d < 11 && (rect = function (e, rect) {
                            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                                if (null != Be) return Be;
                                var t = F(e, E("span", "x")), r = t.getBoundingClientRect(),
                                    n = O(t, 0, 1).getBoundingClientRect();
                                return Be = Math.abs(r.left - n.left) > 1
                            }(e)) return rect;
                            var t = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
                            return {
                                left: rect.left * t,
                                right: rect.right * t,
                                top: rect.top * r,
                                bottom: rect.bottom * r
                            }
                        }(e.display.measure, rect))
                    } else {
                        var y;
                        f > 0 && (m = n = "right"), rect = e.options.lineWrapping && (y = l.getClientRects()).length > 1 ? y["right" == n ? y.length - 1 : 0] : l.getBoundingClientRect()
                    }
                    if (c && d < 9 && !f && (!rect || !rect.left && !rect.right)) {
                        var x = l.parentNode.getClientRects()[0];
                        rect = x ? {left: x.left, right: x.left + gn(e.display), top: x.top, bottom: x.bottom} : Vr
                    }
                    for (var w = rect.top - t.rect.top, C = rect.bottom - t.rect.top, k = (w + C) / 2, S = t.view.measure.heights, i = 0; i < S.length - 1 && !(k < S[i]); i++) ;
                    var M = i ? S[i - 1] : 0, _ = S[i], L = {
                        left: ("right" == m ? rect.right : rect.left) - t.rect.left,
                        right: ("left" == m ? rect.left : rect.right) - t.rect.left,
                        top: M,
                        bottom: _
                    };
                    return rect.left || rect.right || (L.bogus = !0), e.options.singleCursorHeightPerLine || (L.rtop = w, L.rbottom = C), L
                }(e, t, r, n)).bogus || (t.cache[f] = l)), {
                    left: l.left,
                    right: l.right,
                    top: o ? l.rtop : l.top,
                    bottom: o ? l.rbottom : l.bottom
                }
            }

            var Ur, Vr = {left: 0, right: 0, top: 0, bottom: 0};

            function $r(map, e, t) {
                for (var r, n, o, l, c, d, i = 0; i < map.length; i += 3) if (c = map[i], d = map[i + 1], e < c ? (n = 0, o = 1, l = "left") : e < d ? o = 1 + (n = e - c) : (i == map.length - 3 || e == d && map[i + 3] > e) && (n = (o = d - c) - 1, e >= d && (l = "right")), null != n) {
                    if (r = map[i + 2], c == d && t == (r.insertLeft ? "left" : "right") && (l = t), "left" == t && 0 == n) for (; i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft;) r = map[2 + (i -= 3)], l = "left";
                    if ("right" == t && n == d - c) for (; i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft;) r = map[(i += 3) + 2], l = "right";
                    break
                }
                return {node: r, start: n, end: o, collapse: l, coverStart: c, coverEnd: d}
            }

            function Kr(e, t) {
                var rect = Vr;
                if ("left" == t) for (var i = 0; i < e.length && (rect = e[i]).left == rect.right; i++) ; else for (var r = e.length - 1; r >= 0 && (rect = e[r]).left == rect.right; r--) ;
                return rect
            }

            function Xr(e) {
                if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var i = 0; i < e.rest.length; i++) e.measure.caches[i] = {}
            }

            function Yr(e) {
                e.display.externalMeasure = null, W(e.display.lineMeasure);
                for (var i = 0; i < e.display.view.length; i++) Xr(e.display.view[i])
            }

            function Qr(e) {
                Yr(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
            }

            function Zr() {
                return m && k ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }

            function Jr() {
                return m && k ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
            }

            function en(e) {
                var t = 0;
                if (e.widgets) for (var i = 0; i < e.widgets.length; ++i) e.widgets[i].above && (t += Or(e.widgets[i]));
                return t
            }

            function tn(e, t, rect, r, n) {
                if (!n) {
                    var o = en(t);
                    rect.top += o, rect.bottom += o
                }
                if ("line" == r) return rect;
                r || (r = "local");
                var l = Zt(t);
                if ("local" == r ? l += Wr(e.display) : l -= e.display.viewOffset, "page" == r || "window" == r) {
                    var c = e.display.lineSpace.getBoundingClientRect();
                    l += c.top + ("window" == r ? 0 : Jr());
                    var d = c.left + ("window" == r ? 0 : Zr());
                    rect.left += d, rect.right += d
                }
                return rect.top += l, rect.bottom += l, rect
            }

            function rn(e, t, r) {
                if ("div" == r) return t;
                var n = t.left, o = t.top;
                if ("page" == r) n -= Zr(), o -= Jr(); else if ("local" == r || !r) {
                    var l = e.display.sizer.getBoundingClientRect();
                    n += l.left, o += l.top
                }
                var c = e.display.lineSpace.getBoundingClientRect();
                return {left: n - c.left, top: o - c.top}
            }

            function nn(e, t, r, n, o) {
                return n || (n = Je(e.doc, t.line)), tn(e, n, Br(e, n, t.ch, o), r)
            }

            function on(e, t, r, n, o, l) {
                function c(t, c) {
                    var d = Gr(e, o, t, c ? "right" : "left", l);
                    return c ? d.left = d.right : d.right = d.left, tn(e, n, d, r)
                }

                n = n || Je(e.doc, t.line), o || (o = jr(e, n));
                var d = ge(n, e.doc.direction), f = t.ch, h = t.sticky;
                if (f >= n.text.length ? (f = n.text.length, h = "before") : f <= 0 && (f = 0, h = "after"), !d) return c("before" == h ? f - 1 : f, "before" == h);

                function m(e, t, r) {
                    return c(r ? e - 1 : e, 1 == d[t].level != r)
                }

                var v = pe(d, f, h), y = he, x = m(f, v, "before" == h);
                return null != y && (x.other = m(f, y, "before" != h)), x
            }

            function an(e, t) {
                var r = 0;
                t = gt(e.doc, t), e.options.lineWrapping || (r = gn(e.display) * t.ch);
                var n = Je(e.doc, t.line), o = Zt(n) + Wr(e.display);
                return {left: r, right: r, top: o, bottom: o + n.height}
            }

            function ln(line, e, t, r, n) {
                var o = st(line, e, t);
                return o.xRel = n, r && (o.outside = r), o
            }

            function sn(e, t, r) {
                var n = e.doc;
                if ((r += e.display.viewOffset) < 0) return ln(n.first, 0, null, -1, -1);
                var o = ot(n, r), l = n.first + n.size - 1;
                if (o > l) return ln(n.first + n.size - 1, Je(n, l).text.length, null, 1, 1);
                t < 0 && (t = 0);
                for (var c = Je(n, o); ;) {
                    var d = fn(e, c, o, t, r), f = Ut(c, d.ch + (d.xRel > 0 || d.outside > 0 ? 1 : 0));
                    if (!f) return d;
                    var h = f.find(1);
                    if (h.line == o) return h;
                    c = Je(n, o = h.line)
                }
            }

            function cn(e, t, r, n) {
                n -= en(t);
                var o = t.text.length, l = fe((function (t) {
                    return Gr(e, r, t - 1).bottom <= n
                }), o, 0);
                return {
                    begin: l, end: o = fe((function (t) {
                        return Gr(e, r, t).top > n
                    }), l, o)
                }
            }

            function un(e, t, r, n) {
                return r || (r = jr(e, t)), cn(e, t, r, tn(e, t, Gr(e, r, n), "line").top)
            }

            function dn(e, t, r, n) {
                return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
            }

            function fn(e, t, r, n, o) {
                o -= Zt(t);
                var l = jr(e, t), c = en(t), d = 0, f = t.text.length, h = !0, m = ge(t, e.doc.direction);
                if (m) {
                    var v = (e.options.lineWrapping ? pn : hn)(e, t, r, l, m, n, o);
                    d = (h = 1 != v.level) ? v.from : v.to - 1, f = h ? v.to : v.from - 1
                }
                var y, x, w = null, C = null, k = fe((function (t) {
                    var r = Gr(e, l, t);
                    return r.top += c, r.bottom += c, !!dn(r, n, o, !1) && (r.top <= o && r.left <= n && (w = t, C = r), !0)
                }), d, f), S = !1;
                if (C) {
                    var M = n - C.left < C.right - n, _ = M == h;
                    k = w + (_ ? 0 : 1), x = _ ? "after" : "before", y = M ? C.left : C.right
                } else {
                    h || k != f && k != d || k++, x = 0 == k ? "after" : k == t.text.length ? "before" : Gr(e, l, k - (h ? 1 : 0)).bottom + c <= o == h ? "after" : "before";
                    var L = on(e, st(r, k, x), "line", t, l);
                    y = L.left, S = o < L.top ? -1 : o >= L.bottom ? 1 : 0
                }
                return ln(r, k = de(t.text, k, 1), x, S, n - y)
            }

            function hn(e, t, r, n, o, l, c) {
                var d = fe((function (i) {
                    var d = o[i], f = 1 != d.level;
                    return dn(on(e, st(r, f ? d.to : d.from, f ? "before" : "after"), "line", t, n), l, c, !0)
                }), 0, o.length - 1), f = o[d];
                if (d > 0) {
                    var h = 1 != f.level, m = on(e, st(r, h ? f.from : f.to, h ? "after" : "before"), "line", t, n);
                    dn(m, l, c, !0) && m.top > c && (f = o[d - 1])
                }
                return f
            }

            function pn(e, t, r, n, o, l, c) {
                var d = cn(e, t, n, c), f = d.begin, h = d.end;
                /\s/.test(t.text.charAt(h - 1)) && h--;
                for (var m = null, v = null, i = 0; i < o.length; i++) {
                    var p = o[i];
                    if (!(p.from >= h || p.to <= f)) {
                        var y = Gr(e, n, 1 != p.level ? Math.min(h, p.to) - 1 : Math.max(f, p.from)).right,
                            x = y < l ? l - y + 1e9 : y - l;
                        (!m || v > x) && (m = p, v = x)
                    }
                }
                return m || (m = o[o.length - 1]), m.from < f && (m = {
                    from: f,
                    to: m.to,
                    level: m.level
                }), m.to > h && (m = {from: m.from, to: h, level: m.level}), m
            }

            function mn(e) {
                if (null != e.cachedTextHeight) return e.cachedTextHeight;
                if (null == Ur) {
                    Ur = E("pre", null, "CodeMirror-line-like");
                    for (var i = 0; i < 49; ++i) Ur.appendChild(document.createTextNode("x")), Ur.appendChild(E("br"));
                    Ur.appendChild(document.createTextNode("x"))
                }
                F(e.measure, Ur);
                var t = Ur.offsetHeight / 50;
                return t > 3 && (e.cachedTextHeight = t), W(e.measure), t || 1
            }

            function gn(e) {
                if (null != e.cachedCharWidth) return e.cachedCharWidth;
                var t = E("span", "xxxxxxxxxx"), pre = E("pre", [t], "CodeMirror-line-like");
                F(e.measure, pre);
                var rect = t.getBoundingClientRect(), r = (rect.right - rect.left) / 10;
                return r > 2 && (e.cachedCharWidth = r), r || 10
            }

            function vn(e) {
                for (var t = e.display, r = {}, n = {}, o = t.gutters.clientLeft, l = t.gutters.firstChild, i = 0; l; l = l.nextSibling, ++i) {
                    var c = e.display.gutterSpecs[i].className;
                    r[c] = l.offsetLeft + l.clientLeft + o, n[c] = l.clientWidth
                }
                return {
                    fixedPos: bn(t),
                    gutterTotalWidth: t.gutters.offsetWidth,
                    gutterLeft: r,
                    gutterWidth: n,
                    wrapperWidth: t.wrapper.clientWidth
                }
            }

            function bn(e) {
                return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
            }

            function yn(e) {
                var th = mn(e.display), t = e.options.lineWrapping,
                    r = t && Math.max(5, e.display.scroller.clientWidth / gn(e.display) - 3);
                return function (line) {
                    if (Yt(e.doc, line)) return 0;
                    var n = 0;
                    if (line.widgets) for (var i = 0; i < line.widgets.length; i++) line.widgets[i].height && (n += line.widgets[i].height);
                    return t ? n + (Math.ceil(line.text.length / r) || 1) * th : n + th
                }
            }

            function xn(e) {
                var t = e.doc, r = yn(e);
                t.iter((function (line) {
                    var e = r(line);
                    e != line.height && nt(line, e)
                }))
            }

            function wn(e, t, r, n) {
                var o = e.display;
                if (!r && "true" == Ne(t).getAttribute("cm-not-content")) return null;
                var l, c, d = o.lineSpace.getBoundingClientRect();
                try {
                    l = t.clientX - d.left, c = t.clientY - d.top
                } catch (e) {
                    return null
                }
                var line, f = sn(e, l, c);
                if (n && f.xRel > 0 && (line = Je(e.doc, f.line).text).length == f.ch) {
                    var h = V(line, line.length, e.options.tabSize) - line.length;
                    f = st(f.line, Math.max(0, Math.round((l - Er(e.display).left) / gn(e.display)) - h))
                }
                return f
            }

            function Cn(e, t) {
                if (t >= e.display.viewTo) return null;
                if ((t -= e.display.viewFrom) < 0) return null;
                for (var view = e.display.view, i = 0; i < view.length; i++) if ((t -= view[i].size) < 0) return i
            }

            function kn(e, t, r, n) {
                null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
                var o = e.display;
                if (n && r < o.viewTo && (null == o.updateLineNumbers || o.updateLineNumbers > t) && (o.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= o.viewTo) At && Kt(e.doc, t) < o.viewTo && Mn(e); else if (r <= o.viewFrom) At && Xt(e.doc, r + n) > o.viewFrom ? Mn(e) : (o.viewFrom += n, o.viewTo += n); else if (t <= o.viewFrom && r >= o.viewTo) Mn(e); else if (t <= o.viewFrom) {
                    var l = _n(e, r, r + n, 1);
                    l ? (o.view = o.view.slice(l.index), o.viewFrom = l.lineN, o.viewTo += n) : Mn(e)
                } else if (r >= o.viewTo) {
                    var c = _n(e, t, t, -1);
                    c ? (o.view = o.view.slice(0, c.index), o.viewTo = c.lineN) : Mn(e)
                } else {
                    var d = _n(e, t, t, -1), f = _n(e, r, r + n, 1);
                    d && f ? (o.view = o.view.slice(0, d.index).concat(mr(e, d.lineN, f.lineN)).concat(o.view.slice(f.index)), o.viewTo += n) : Mn(e)
                }
                var h = o.externalMeasured;
                h && (r < h.lineN ? h.lineN += n : t < h.lineN + h.size && (o.externalMeasured = null))
            }

            function Sn(e, line, t) {
                e.curOp.viewChanged = !0;
                var r = e.display, n = e.display.externalMeasured;
                if (n && line >= n.lineN && line < n.lineN + n.size && (r.externalMeasured = null), !(line < r.viewFrom || line >= r.viewTo)) {
                    var o = r.view[Cn(e, line)];
                    if (null != o.node) {
                        var l = o.changes || (o.changes = []);
                        -1 == K(l, t) && l.push(t)
                    }
                }
            }

            function Mn(e) {
                e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
            }

            function _n(e, t, r, n) {
                var o, l = Cn(e, t), view = e.display.view;
                if (!At || r == e.doc.first + e.doc.size) return {index: l, lineN: r};
                for (var c = e.display.viewFrom, i = 0; i < l; i++) c += view[i].size;
                if (c != t) {
                    if (n > 0) {
                        if (l == view.length - 1) return null;
                        o = c + view[l].size - t, l++
                    } else o = c - t;
                    t += o, r += o
                }
                for (; Kt(e.doc, r) != r;) {
                    if (l == (n < 0 ? 0 : view.length - 1)) return null;
                    r += n * view[l - (n < 0 ? 1 : 0)].size, l += n
                }
                return {index: l, lineN: r}
            }

            function Ln(e) {
                for (var view = e.display.view, t = 0, i = 0; i < view.length; i++) {
                    var r = view[i];
                    r.hidden || r.node && !r.changes || ++t
                }
                return t
            }

            function Tn(e) {
                e.display.input.showSelection(e.display.input.prepareSelection())
            }

            function zn(e, t) {
                void 0 === t && (t = !0);
                for (var r = e.doc, n = {}, o = n.cursors = document.createDocumentFragment(), l = n.selection = document.createDocumentFragment(), i = 0; i < r.sel.ranges.length; i++) if (t || i != r.sel.primIndex) {
                    var c = r.sel.ranges[i];
                    if (!(c.from().line >= e.display.viewTo || c.to().line < e.display.viewFrom)) {
                        var d = c.empty();
                        (d || e.options.showCursorWhenSelecting) && Nn(e, c.head, o), d || On(e, c, l)
                    }
                }
                return n
            }

            function Nn(e, head, output) {
                var t = on(e, head, "div", null, null, !e.options.singleCursorHeightPerLine),
                    cursor = output.appendChild(E("div", " ", "CodeMirror-cursor"));
                if (cursor.style.left = t.left + "px", cursor.style.top = t.top + "px", cursor.style.height = Math.max(0, t.bottom - t.top) * e.options.cursorHeight + "px", t.other) {
                    var r = output.appendChild(E("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    r.style.display = "", r.style.left = t.other.left + "px", r.style.top = t.other.top + "px", r.style.height = .85 * (t.other.bottom - t.other.top) + "px"
                }
            }

            function An(a, b) {
                return a.top - b.top || a.left - b.left
            }

            function On(e, t, output) {
                var r = e.display, n = e.doc, o = document.createDocumentFragment(), l = Er(e.display), c = l.left,
                    d = Math.max(r.sizerWidth, Hr(e) - r.sizer.offsetLeft) - l.right, f = "ltr" == n.direction;

                function h(e, t, r, n) {
                    t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(E("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? d - e : r) + "px;\n                             height: " + (n - t) + "px"))
                }

                function m(line, t, r) {
                    var o, l, m = Je(n, line), v = m.text.length;

                    function y(t, r) {
                        return nn(e, st(line, t), "div", m, r)
                    }

                    function x(t, r, n) {
                        var o = un(e, m, null, t), l = "ltr" == r == ("after" == n) ? "left" : "right";
                        return y("after" == n ? o.begin : o.end - (/\s/.test(m.text.charAt(o.end - 1)) ? 2 : 1), l)[l]
                    }

                    var w = ge(m, n.direction);
                    return function (e, t, r, n) {
                        if (!e) return n(t, r, "ltr", 0);
                        for (var o = !1, i = 0; i < e.length; ++i) {
                            var l = e[i];
                            (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr", i), o = !0)
                        }
                        o || n(t, r, "ltr")
                    }(w, t || 0, null == r ? v : r, (function (e, n, m, i) {
                        var C = "ltr" == m, k = y(e, C ? "left" : "right"), S = y(n - 1, C ? "right" : "left"),
                            M = null == t && 0 == e, _ = null == r && n == v, L = 0 == i, T = !w || i == w.length - 1;
                        if (S.top - k.top <= 3) {
                            var z = (f ? _ : M) && T, N = (f ? M : _) && L ? c : (C ? k : S).left,
                                A = z ? d : (C ? S : k).right;
                            h(N, k.top, A - N, k.bottom)
                        } else {
                            var O, D, W, F;
                            C ? (O = f && M && L ? c : k.left, D = f ? d : x(e, m, "before"), W = f ? c : x(n, m, "after"), F = f && _ && T ? d : S.right) : (O = f ? x(e, m, "before") : c, D = !f && M && L ? d : k.right, W = !f && _ && T ? c : S.left, F = f ? x(n, m, "after") : d), h(O, k.top, D - O, k.bottom), k.bottom < S.top && h(c, k.bottom, null, S.top), h(W, S.top, F - W, S.bottom)
                        }
                        (!o || An(k, o) < 0) && (o = k), An(S, o) < 0 && (o = S), (!l || An(k, l) < 0) && (l = k), An(S, l) < 0 && (l = S)
                    })), {start: o, end: l}
                }

                var v = t.from(), y = t.to();
                if (v.line == y.line) m(v.line, v.ch, y.ch); else {
                    var x = Je(n, v.line), w = Je(n, y.line), C = $t(x) == $t(w),
                        k = m(v.line, v.ch, C ? x.text.length + 1 : null).end, S = m(y.line, C ? 0 : null, y.ch).start;
                    C && (k.top < S.top - 2 ? (h(k.right, k.top, null, k.bottom), h(c, S.top, S.left, S.bottom)) : h(k.right, k.top, S.left - k.right, k.bottom)), k.bottom < S.top && h(c, k.bottom, null, S.top)
                }
                output.appendChild(o)
            }

            function Dn(e) {
                if (e.state.focused) {
                    var t = e.display;
                    clearInterval(t.blinker);
                    var r = !0;
                    t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval((function () {
                        e.hasFocus() || Pn(e), t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
                    }), e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                }
            }

            function Wn(e) {
                e.hasFocus() || (e.display.input.focus(), e.state.focused || En(e))
            }

            function Fn(e) {
                e.state.delayingBlurEvent = !0, setTimeout((function () {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Pn(e))
                }), 100)
            }

            function En(e, t) {
                e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (we(e, "focus", e, t), e.state.focused = !0, R(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), f && setTimeout((function () {
                    return e.display.input.reset(!0)
                }), 20)), e.display.input.receivedFocus()), Dn(e))
            }

            function Pn(e, t) {
                e.state.delayingBlurEvent || (e.state.focused && (we(e, "blur", e, t), e.state.focused = !1, D(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout((function () {
                    e.state.focused || (e.display.shift = !1)
                }), 150))
            }

            function Hn(e) {
                for (var t = e.display, r = t.lineDiv.offsetTop, i = 0; i < t.view.length; i++) {
                    var n = t.view[i], o = e.options.lineWrapping, l = void 0, f = 0;
                    if (!n.hidden) {
                        if (c && d < 8) {
                            var h = n.node.offsetTop + n.node.offsetHeight;
                            l = h - r, r = h
                        } else {
                            var m = n.node.getBoundingClientRect();
                            l = m.bottom - m.top, !o && n.text.firstChild && (f = n.text.firstChild.getBoundingClientRect().right - m.left - 1)
                        }
                        var v = n.line.height - l;
                        if ((v > .005 || v < -.005) && (nt(n.line, l), In(n.line), n.rest)) for (var y = 0; y < n.rest.length; y++) In(n.rest[y]);
                        if (f > e.display.sizerWidth) {
                            var x = Math.ceil(f / gn(e.display));
                            x > e.display.maxLineLength && (e.display.maxLineLength = x, e.display.maxLine = n.line, e.display.maxLineChanged = !0)
                        }
                    }
                }
            }

            function In(line) {
                if (line.widgets) for (var i = 0; i < line.widgets.length; ++i) {
                    var e = line.widgets[i], t = e.node.parentNode;
                    t && (e.height = t.offsetHeight)
                }
            }

            function Rn(e, t, r) {
                var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
                n = Math.floor(n - Wr(e));
                var o = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight, l = ot(t, n), c = ot(t, o);
                if (r && r.ensure) {
                    var d = r.ensure.from.line, f = r.ensure.to.line;
                    d < l ? (l = d, c = ot(t, Zt(Je(t, d)) + e.wrapper.clientHeight)) : Math.min(f, t.lastLine()) >= c && (l = ot(t, Zt(Je(t, f)) - e.wrapper.clientHeight), c = f)
                }
                return {from: l, to: Math.max(c, l + 1)}
            }

            function Bn(e, rect) {
                var t = e.display, r = mn(e.display);
                rect.top < 0 && (rect.top = 0);
                var n = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : t.scroller.scrollTop, o = Ir(e),
                    l = {};
                rect.bottom - rect.top > o && (rect.bottom = rect.top + o);
                var c = e.doc.height + Fr(t), d = rect.top < r, f = rect.bottom > c - r;
                if (rect.top < n) l.scrollTop = d ? 0 : rect.top; else if (rect.bottom > n + o) {
                    var h = Math.min(rect.top, (f ? c : rect.bottom) - o);
                    h != n && (l.scrollTop = h)
                }
                var m = e.options.fixedGutter ? 0 : t.gutters.offsetWidth,
                    v = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : t.scroller.scrollLeft - m,
                    y = Hr(e) - t.gutters.offsetWidth, x = rect.right - rect.left > y;
                return x && (rect.right = rect.left + y), rect.left < 10 ? l.scrollLeft = 0 : rect.left < v ? l.scrollLeft = Math.max(0, rect.left + m - (x ? 0 : 10)) : rect.right > y + v - 3 && (l.scrollLeft = rect.right + (x ? 0 : 10) - y), l
            }

            function qn(e, t) {
                null != t && (Un(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
            }

            function jn(e) {
                Un(e);
                var t = e.getCursor();
                e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin}
            }

            function Gn(e, t, r) {
                null == t && null == r || Un(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r)
            }

            function Un(e) {
                var t = e.curOp.scrollToPos;
                t && (e.curOp.scrollToPos = null, Vn(e, an(e, t.from), an(e, t.to), t.margin))
            }

            function Vn(e, t, r, n) {
                var o = Bn(e, {
                    left: Math.min(t.left, r.left),
                    top: Math.min(t.top, r.top) - n,
                    right: Math.max(t.right, r.right),
                    bottom: Math.max(t.bottom, r.bottom) + n
                });
                Gn(e, o.scrollLeft, o.scrollTop)
            }

            function $n(e, t) {
                Math.abs(e.doc.scrollTop - t) < 2 || (r || wi(e, {top: t}), Kn(e, t, !0), r && wi(e), gi(e, 100))
            }

            function Kn(e, t, r) {
                t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
            }

            function Xn(e, t, r, n) {
                t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, Si(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
            }

            function Yn(e) {
                var t = e.display, r = t.gutters.offsetWidth, n = Math.round(e.doc.height + Fr(e.display));
                return {
                    clientHeight: t.scroller.clientHeight,
                    viewHeight: t.wrapper.clientHeight,
                    scrollWidth: t.scroller.scrollWidth,
                    clientWidth: t.scroller.clientWidth,
                    viewWidth: t.wrapper.clientWidth,
                    barLeft: e.options.fixedGutter ? r : 0,
                    docHeight: n,
                    scrollHeight: n + Pr(e) + t.barHeight,
                    nativeBarWidth: t.nativeBarWidth,
                    gutterWidth: r
                }
            }

            var Qn = function (e, t, r) {
                this.cm = r;
                var n = this.vert = E("div", [E("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                    o = this.horiz = E("div", [E("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                n.tabIndex = o.tabIndex = -1, e(n), e(o), be(n, "scroll", (function () {
                    n.clientHeight && t(n.scrollTop, "vertical")
                })), be(o, "scroll", (function () {
                    o.clientWidth && t(o.scrollLeft, "horizontal")
                })), this.checkedZeroWidth = !1, c && d < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            };
            Qn.prototype.update = function (e) {
                var t = e.scrollWidth > e.clientWidth + 1, r = e.scrollHeight > e.clientHeight + 1,
                    n = e.nativeBarWidth;
                if (r) {
                    this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
                    var o = e.viewHeight - (t ? n : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + o) + "px"
                } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (t) {
                    this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                    var l = e.viewWidth - e.barLeft - (r ? n : 0);
                    this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + l) + "px"
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                    right: r ? n : 0,
                    bottom: t ? n : 0
                }
            }, Qn.prototype.setScrollLeft = function (e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }, Qn.prototype.setScrollTop = function (e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }, Qn.prototype.zeroWidthHack = function () {
                var e = M && !x ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new $, this.disableVert = new $
            }, Qn.prototype.enableZeroWidthBar = function (e, t, r) {
                e.style.pointerEvents = "auto", t.set(1e3, (function n() {
                    var o = e.getBoundingClientRect();
                    ("vert" == r ? document.elementFromPoint(o.right - 1, (o.top + o.bottom) / 2) : document.elementFromPoint((o.right + o.left) / 2, o.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
                }))
            }, Qn.prototype.clear = function () {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert)
            };
            var Zn = function () {
            };

            function Jn(e, t) {
                t || (t = Yn(e));
                var r = e.display.barWidth, n = e.display.barHeight;
                ei(e, t);
                for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && Hn(e), ei(e, Yn(e)), r = e.display.barWidth, n = e.display.barHeight
            }

            function ei(e, t) {
                var r = e.display, n = r.scrollbars.update(t);
                r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
            }

            Zn.prototype.update = function () {
                return {bottom: 0, right: 0}
            }, Zn.prototype.setScrollLeft = function () {
            }, Zn.prototype.setScrollTop = function () {
            }, Zn.prototype.clear = function () {
            };
            var ti = {native: Qn, null: Zn};

            function ri(e) {
                e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && D(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new ti[e.options.scrollbarStyle]((function (t) {
                    e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), be(t, "mousedown", (function () {
                        e.state.focused && setTimeout((function () {
                            return e.display.input.focus()
                        }), 0)
                    })), t.setAttribute("cm-not-content", "true")
                }), (function (t, r) {
                    "horizontal" == r ? Xn(e, t) : $n(e, t)
                }), e), e.display.scrollbars.addClass && R(e.display.wrapper, e.display.scrollbars.addClass)
            }

            var ni = 0;

            function ii(e) {
                var t;
                e.curOp = {
                    cm: e,
                    viewChanged: !1,
                    startHeight: e.doc.height,
                    forceUpdate: !1,
                    updateInput: 0,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++ni
                }, t = e.curOp, gr ? gr.ops.push(t) : t.ownsGroup = gr = {ops: [t], delayedCallbacks: []}
            }

            function oi(e) {
                var t = e.curOp;
                t && function (e, t) {
                    var r = e.ownsGroup;
                    if (r) try {
                        !function (e) {
                            var t = e.delayedCallbacks, i = 0;
                            do {
                                for (; i < t.length; i++) t[i].call(null);
                                for (var r = 0; r < e.ops.length; r++) {
                                    var n = e.ops[r];
                                    if (n.cursorActivityHandlers) for (; n.cursorActivityCalled < n.cursorActivityHandlers.length;) n.cursorActivityHandlers[n.cursorActivityCalled++].call(null, n.cm)
                                }
                            } while (i < t.length)
                        }(r)
                    } finally {
                        gr = null, t(r)
                    }
                }(t, (function (e) {
                    for (var i = 0; i < e.ops.length; i++) e.ops[i].cm.curOp = null;
                    !function (e) {
                        for (var t = e.ops, i = 0; i < t.length; i++) ai(t[i]);
                        for (var r = 0; r < t.length; r++) si(t[r]);
                        for (var n = 0; n < t.length; n++) ci(t[n]);
                        for (var o = 0; o < t.length; o++) ui(t[o]);
                        for (var l = 0; l < t.length; l++) di(t[l])
                    }(e)
                }))
            }

            function ai(e) {
                var t = e.cm, r = t.display;
                !function (e) {
                    var t = e.display;
                    !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Pr(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Pr(e) + "px", t.scrollbarsClipped = !0)
                }(t), e.updateMaxLine && er(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new bi(t, e.mustUpdate && {
                    top: e.scrollTop,
                    ensure: e.scrollToPos
                }, e.forceUpdate)
            }

            function si(e) {
                e.updatedDisplay = e.mustUpdate && yi(e.cm, e.update)
            }

            function ci(e) {
                var t = e.cm, r = t.display;
                e.updatedDisplay && Hn(t), e.barMeasure = Yn(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Br(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Pr(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Hr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
            }

            function ui(e) {
                var t = e.cm;
                null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Xn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                var r = e.focus && e.focus == I();
                e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && Jn(t, e.barMeasure), e.updatedDisplay && ki(t, e.barMeasure), e.selectionChanged && Dn(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && Wn(e.cm)
            }

            function di(e) {
                var t = e.cm, r = t.display, n = t.doc;
                e.updatedDisplay && xi(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && Kn(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Xn(t, e.scrollLeft, !0, !0), e.scrollToPos && function (e, rect) {
                    if (!Ce(e, "scrollCursorIntoView")) {
                        var t = e.display, r = t.sizer.getBoundingClientRect(), n = null;
                        if (rect.top + r.top < 0 ? n = !0 : rect.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (n = !1), null != n && !w) {
                            var o = E("div", "​", null, "position: absolute;\n                         top: " + (rect.top - t.viewOffset - Wr(e.display)) + "px;\n                         height: " + (rect.bottom - rect.top + Pr(e) + t.barHeight) + "px;\n                         left: " + rect.left + "px; width: " + Math.max(2, rect.right - rect.left) + "px;");
                            e.display.lineSpace.appendChild(o), o.scrollIntoView(n), e.display.lineSpace.removeChild(o)
                        }
                    }
                }(t, function (e, t, r, n) {
                    var rect;
                    null == n && (n = 0), e.options.lineWrapping || t != r || (r = "before" == (t = t.ch ? st(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? st(t.line, t.ch + 1, "before") : t);
                    for (var o = 0; o < 5; o++) {
                        var l = !1, c = on(e, t), d = r && r != t ? on(e, r) : c, f = Bn(e, rect = {
                            left: Math.min(c.left, d.left),
                            top: Math.min(c.top, d.top) - n,
                            right: Math.max(c.left, d.left),
                            bottom: Math.max(c.bottom, d.bottom) + n
                        }), h = e.doc.scrollTop, m = e.doc.scrollLeft;
                        if (null != f.scrollTop && ($n(e, f.scrollTop), Math.abs(e.doc.scrollTop - h) > 1 && (l = !0)), null != f.scrollLeft && (Xn(e, f.scrollLeft), Math.abs(e.doc.scrollLeft - m) > 1 && (l = !0)), !l) break
                    }
                    return rect
                }(t, gt(n, e.scrollToPos.from), gt(n, e.scrollToPos.to), e.scrollToPos.margin));
                var o = e.maybeHiddenMarkers, l = e.maybeUnhiddenMarkers;
                if (o) for (var i = 0; i < o.length; ++i) o[i].lines.length || we(o[i], "hide");
                if (l) for (var c = 0; c < l.length; ++c) l[c].lines.length && we(l[c], "unhide");
                r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && we(t, "changes", t, e.changeObjs), e.update && e.update.finish()
            }

            function fi(e, t) {
                if (e.curOp) return t();
                ii(e);
                try {
                    return t()
                } finally {
                    oi(e)
                }
            }

            function hi(e, t) {
                return function () {
                    if (e.curOp) return t.apply(e, arguments);
                    ii(e);
                    try {
                        return t.apply(e, arguments)
                    } finally {
                        oi(e)
                    }
                }
            }

            function pi(e) {
                return function () {
                    if (this.curOp) return e.apply(this, arguments);
                    ii(this);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        oi(this)
                    }
                }
            }

            function mi(e) {
                return function () {
                    var t = this.cm;
                    if (!t || t.curOp) return e.apply(this, arguments);
                    ii(t);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        oi(t)
                    }
                }
            }

            function gi(e, time) {
                e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(time, G(vi, e))
            }

            function vi(e) {
                var t = e.doc;
                if (!(t.highlightFrontier >= e.display.viewTo)) {
                    var r = +new Date + e.options.workTime, n = Ct(e, t.highlightFrontier), o = [];
                    t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), (function (line) {
                        if (n.line >= e.display.viewFrom) {
                            var l = line.styles,
                                c = line.text.length > e.options.maxHighlightLength ? Xe(t.mode, n.state) : null,
                                d = xt(e, line, n, !0);
                            c && (n.state = c), line.styles = d.styles;
                            var f = line.styleClasses, h = d.classes;
                            h ? line.styleClasses = h : f && (line.styleClasses = null);
                            for (var m = !l || l.length != line.styles.length || f != h && (!f || !h || f.bgClass != h.bgClass || f.textClass != h.textClass), i = 0; !m && i < l.length; ++i) m = l[i] != line.styles[i];
                            m && o.push(n.line), line.stateAfter = n.save(), n.nextLine()
                        } else line.text.length <= e.options.maxHighlightLength && kt(e, line.text, n), line.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();
                        if (+new Date > r) return gi(e, e.options.workDelay), !0
                    })), t.highlightFrontier = n.line, t.modeFrontier = Math.max(t.modeFrontier, n.line), o.length && fi(e, (function () {
                        for (var i = 0; i < o.length; i++) Sn(e, o[i], "text")
                    }))
                }
            }

            var bi = function (e, t, r) {
                var n = e.display;
                this.viewport = t, this.visible = Rn(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Hr(e), this.force = r, this.dims = vn(e), this.events = []
            };

            function yi(e, t) {
                var r = e.display, n = e.doc;
                if (t.editorIsHidden) return Mn(e), !1;
                if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == Ln(e)) return !1;
                Mi(e) && (Mn(e), t.dims = vn(e));
                var o = n.first + n.size, l = Math.max(t.visible.from - e.options.viewportMargin, n.first),
                    c = Math.min(o, t.visible.to + e.options.viewportMargin);
                r.viewFrom < l && l - r.viewFrom < 20 && (l = Math.max(n.first, r.viewFrom)), r.viewTo > c && r.viewTo - c < 20 && (c = Math.min(o, r.viewTo)), At && (l = Kt(e.doc, l), c = Xt(e.doc, c));
                var d = l != r.viewFrom || c != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
                !function (e, t, r) {
                    var n = e.display;
                    0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = mr(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = mr(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(Cn(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(mr(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, Cn(e, r)))), n.viewTo = r
                }(e, l, c), r.viewOffset = Zt(Je(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
                var h = Ln(e);
                if (!d && 0 == h && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                var m = function (e) {
                    if (e.hasFocus()) return null;
                    var t = I();
                    if (!t || !H(e.display.lineDiv, t)) return null;
                    var r = {activeElt: t};
                    if (window.getSelection) {
                        var n = window.getSelection();
                        n.anchorNode && n.extend && H(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset)
                    }
                    return r
                }(e);
                return h > 4 && (r.lineDiv.style.display = "none"), function (e, t, r) {
                    var n = e.display, o = e.options.lineNumbers, l = n.lineDiv, c = l.firstChild;

                    function d(t) {
                        var r = t.nextSibling;
                        return f && M && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r
                    }

                    for (var view = n.view, h = n.viewFrom, i = 0; i < view.length; i++) {
                        var m = view[i];
                        if (m.hidden) ; else if (m.node && m.node.parentNode == l) {
                            for (; c != m.node;) c = d(c);
                            var v = o && null != t && t <= h && m.lineNumber;
                            m.changes && (K(m.changes, "gutter") > -1 && (v = !1), wr(e, m, h, r)), v && (W(m.lineNumber), m.lineNumber.appendChild(document.createTextNode(lt(e.options, h)))), c = m.node.nextSibling
                        } else {
                            var y = Tr(e, m, h, r);
                            l.insertBefore(y, c)
                        }
                        h += m.size
                    }
                    for (; c;) c = d(c)
                }(e, r.updateLineNumbers, t.dims), h > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, function (e) {
                    if (e && e.activeElt && e.activeElt != I() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && H(document.body, e.anchorNode) && H(document.body, e.focusNode))) {
                        var t = window.getSelection(), r = document.createRange();
                        r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset)
                    }
                }(m), W(r.cursorDiv), W(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, d && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, gi(e, 400)), r.updateLineNumbers = null, !0
            }

            function xi(e, t) {
                for (var r = t.viewport, n = !0; ; n = !1) {
                    if (n && e.options.lineWrapping && t.oldDisplayWidth != Hr(e)) n && (t.visible = Rn(e.display, e.doc, r)); else if (r && null != r.top && (r = {top: Math.min(e.doc.height + Fr(e.display) - Ir(e), r.top)}), t.visible = Rn(e.display, e.doc, r), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break;
                    if (!yi(e, t)) break;
                    Hn(e);
                    var o = Yn(e);
                    Tn(e), Jn(e, o), ki(e, o), t.force = !1
                }
                t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
            }

            function wi(e, t) {
                var r = new bi(e, t);
                if (yi(e, r)) {
                    Hn(e), xi(e, r);
                    var n = Yn(e);
                    Tn(e), Jn(e, n), ki(e, n), r.finish()
                }
            }

            function Ci(e) {
                var t = e.gutters.offsetWidth;
                e.sizer.style.marginLeft = t + "px"
            }

            function ki(e, t) {
                e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Pr(e) + "px"
            }

            function Si(e) {
                var t = e.display, view = t.view;
                if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                    for (var r = bn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, n = t.gutters.offsetWidth, o = r + "px", i = 0; i < view.length; i++) if (!view[i].hidden) {
                        e.options.fixedGutter && (view[i].gutter && (view[i].gutter.style.left = o), view[i].gutterBackground && (view[i].gutterBackground.style.left = o));
                        var l = view[i].alignable;
                        if (l) for (var c = 0; c < l.length; c++) l[c].style.left = o
                    }
                    e.options.fixedGutter && (t.gutters.style.left = r + n + "px")
                }
            }

            function Mi(e) {
                if (!e.options.lineNumbers) return !1;
                var t = e.doc, r = lt(e.options, t.first + t.size - 1), n = e.display;
                if (r.length != n.lineNumChars) {
                    var o = n.measure.appendChild(E("div", [E("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                        l = o.firstChild.offsetWidth, c = o.offsetWidth - l;
                    return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(l, n.lineGutter.offsetWidth - c) + 1, n.lineNumWidth = n.lineNumInnerWidth + c, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", Ci(e.display), !0
                }
                return !1
            }

            function _i(e, t) {
                for (var r = [], n = !1, i = 0; i < e.length; i++) {
                    var o = e[i], style = null;
                    if ("string" != typeof o && (style = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
                        if (!t) continue;
                        n = !0
                    }
                    r.push({className: o, style: style})
                }
                return t && !n && r.push({className: "CodeMirror-linenumbers", style: null}), r
            }

            function Li(e) {
                var t = e.gutters, r = e.gutterSpecs;
                W(t), e.lineGutter = null;
                for (var i = 0; i < r.length; ++i) {
                    var n = r[i], o = n.className, style = n.style,
                        l = t.appendChild(E("div", null, "CodeMirror-gutter " + o));
                    style && (l.style.cssText = style), "CodeMirror-linenumbers" == o && (e.lineGutter = l, l.style.width = (e.lineNumWidth || 1) + "px")
                }
                t.style.display = r.length ? "" : "none", Ci(e)
            }

            function Ti(e) {
                Li(e.display), kn(e), Si(e)
            }

            function zi(e, t, input, n) {
                var o = this;
                this.input = input, o.scrollbarFiller = E("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = E("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = P("div", null, "CodeMirror-code"), o.selectionDiv = E("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = E("div", null, "CodeMirror-cursors"), o.measure = E("div", null, "CodeMirror-measure"), o.lineMeasure = E("div", null, "CodeMirror-measure"), o.lineSpace = P("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                var l = P("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = E("div", [l], null, "position: relative"), o.sizer = E("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = E("div", null, null, "position: absolute; height: 50px; width: 1px;"), o.gutters = E("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = E("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = E("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), c && d < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), f || r && S || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = _i(n.gutters, n.lineNumbers), Li(o), input.init(o)
            }

            bi.prototype.signal = function (e, t) {
                Se(e, t) && this.events.push(arguments)
            }, bi.prototype.finish = function () {
                for (var i = 0; i < this.events.length; i++) we.apply(null, this.events[i])
            };
            var Ni = 0, Ai = null;

            function Oi(e) {
                var t = e.wheelDeltaX, r = e.wheelDeltaY;
                return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
                    x: t,
                    y: r
                }
            }

            function Di(e) {
                var t = Oi(e);
                return t.x *= Ai, t.y *= Ai, t
            }

            function Wi(e, t) {
                var n = Oi(t), o = n.x, l = n.y, c = e.display, d = c.scroller, h = d.scrollWidth > d.clientWidth,
                    m = d.scrollHeight > d.clientHeight;
                if (o && h || l && m) {
                    if (l && M && f) e:for (var y = t.target, view = c.view; y != d; y = y.parentNode) for (var i = 0; i < view.length; i++) if (view[i].node == y) {
                        e.display.currentWheelTarget = y;
                        break e
                    }
                    if (o && !r && !v && null != Ai) return l && m && $n(e, Math.max(0, d.scrollTop + l * Ai)), Xn(e, Math.max(0, d.scrollLeft + o * Ai)), (!l || l && m) && _e(t), void (c.wheelStartX = null);
                    if (l && null != Ai) {
                        var x = l * Ai, w = e.doc.scrollTop, C = w + c.wrapper.clientHeight;
                        x < 0 ? w = Math.max(0, w + x - 50) : C = Math.min(e.doc.height, C + x + 50), wi(e, {
                            top: w,
                            bottom: C
                        })
                    }
                    Ni < 20 && (null == c.wheelStartX ? (c.wheelStartX = d.scrollLeft, c.wheelStartY = d.scrollTop, c.wheelDX = o, c.wheelDY = l, setTimeout((function () {
                        if (null != c.wheelStartX) {
                            var e = d.scrollLeft - c.wheelStartX, t = d.scrollTop - c.wheelStartY,
                                r = t && c.wheelDY && t / c.wheelDY || e && c.wheelDX && e / c.wheelDX;
                            c.wheelStartX = c.wheelStartY = null, r && (Ai = (Ai * Ni + r) / (Ni + 1), ++Ni)
                        }
                    }), 200)) : (c.wheelDX += o, c.wheelDY += l))
                }
            }

            c ? Ai = -.53 : r ? Ai = 15 : m ? Ai = -.7 : y && (Ai = -1 / 3);
            var Fi = function (e, t) {
                this.ranges = e, this.primIndex = t
            };
            Fi.prototype.primary = function () {
                return this.ranges[this.primIndex]
            }, Fi.prototype.equals = function (e) {
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var i = 0; i < this.ranges.length; i++) {
                    var t = this.ranges[i], r = e.ranges[i];
                    if (!ut(t.anchor, r.anchor) || !ut(t.head, r.head)) return !1
                }
                return !0
            }, Fi.prototype.deepCopy = function () {
                for (var e = [], i = 0; i < this.ranges.length; i++) e[i] = new Ei(ft(this.ranges[i].anchor), ft(this.ranges[i].head));
                return new Fi(e, this.primIndex)
            }, Fi.prototype.somethingSelected = function () {
                for (var i = 0; i < this.ranges.length; i++) if (!this.ranges[i].empty()) return !0;
                return !1
            }, Fi.prototype.contains = function (e, t) {
                t || (t = e);
                for (var i = 0; i < this.ranges.length; i++) {
                    var r = this.ranges[i];
                    if (ct(t, r.from()) >= 0 && ct(e, r.to()) <= 0) return i
                }
                return -1
            };
            var Ei = function (e, head) {
                this.anchor = e, this.head = head
            };

            function Pi(e, t, r) {
                var n = e && e.options.selectionsMayTouch, o = t[r];
                t.sort((function (a, b) {
                    return ct(a.from(), b.from())
                })), r = K(t, o);
                for (var i = 1; i < t.length; i++) {
                    var l = t[i], c = t[i - 1], d = ct(c.to(), l.from());
                    if (n && !l.empty() ? d > 0 : d >= 0) {
                        var f = pt(c.from(), l.from()), h = ht(c.to(), l.to()),
                            m = c.empty() ? l.from() == l.head : c.from() == c.head;
                        i <= r && --r, t.splice(--i, 2, new Ei(m ? h : f, m ? f : h))
                    }
                }
                return new Fi(t, r)
            }

            function Hi(e, head) {
                return new Fi([new Ei(e, head || e)], 0)
            }

            function Ii(e) {
                return e.text ? st(e.from.line + e.text.length - 1, re(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
            }

            function Ri(e, t) {
                if (ct(e, t.from) < 0) return e;
                if (ct(e, t.to) <= 0) return Ii(t);
                var line = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
                return e.line == t.to.line && (r += Ii(t).ch - t.to.ch), st(line, r)
            }

            function Bi(e, t) {
                for (var r = [], i = 0; i < e.sel.ranges.length; i++) {
                    var n = e.sel.ranges[i];
                    r.push(new Ei(Ri(n.anchor, t), Ri(n.head, t)))
                }
                return Pi(e.cm, r, e.sel.primIndex)
            }

            function qi(e, t, r) {
                return e.line == t.line ? st(r.line, e.ch - t.ch + r.ch) : st(r.line + (e.line - t.line), e.ch)
            }

            function ji(e) {
                e.doc.mode = Ve(e.options, e.doc.modeOption), Gi(e)
            }

            function Gi(e) {
                e.doc.iter((function (line) {
                    line.stateAfter && (line.stateAfter = null), line.styles && (line.styles = null)
                })), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, gi(e, 100), e.state.modeGen++, e.curOp && kn(e)
            }

            function Ui(e, t) {
                return 0 == t.from.ch && 0 == t.to.ch && "" == re(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
            }

            function Vi(e, t, r, n) {
                function o(e) {
                    return r ? r[e] : null
                }

                function l(line, text, e) {
                    !function (line, text, e, t) {
                        line.text = text, line.stateAfter && (line.stateAfter = null), line.styles && (line.styles = null), null != line.order && (line.order = null), Pt(line), Ht(line, e);
                        var r = t ? t(line) : 1;
                        r != line.height && nt(line, r)
                    }(line, text, e, n), yr(line, "change", line, t)
                }

                function c(e, t) {
                    for (var r = [], i = e; i < t; ++i) r.push(new rr(text[i], o(i), n));
                    return r
                }

                var d = t.from, f = t.to, text = t.text, h = Je(e, d.line), m = Je(e, f.line), v = re(text),
                    y = o(text.length - 1), x = f.line - d.line;
                if (t.full) e.insert(0, c(0, text.length)), e.remove(text.length, e.size - text.length); else if (Ui(e, t)) {
                    var w = c(0, text.length - 1);
                    l(m, m.text, y), x && e.remove(d.line, x), w.length && e.insert(d.line, w)
                } else if (h == m) if (1 == text.length) l(h, h.text.slice(0, d.ch) + v + h.text.slice(f.ch), y); else {
                    var C = c(1, text.length - 1);
                    C.push(new rr(v + h.text.slice(f.ch), y, n)), l(h, h.text.slice(0, d.ch) + text[0], o(0)), e.insert(d.line + 1, C)
                } else if (1 == text.length) l(h, h.text.slice(0, d.ch) + text[0] + m.text.slice(f.ch), o(0)), e.remove(d.line + 1, x); else {
                    l(h, h.text.slice(0, d.ch) + text[0], o(0)), l(m, v + m.text.slice(f.ch), y);
                    var k = c(1, text.length - 1);
                    x > 1 && e.remove(d.line + 1, x - 1), e.insert(d.line + 1, k)
                }
                yr(e, "change", e, t)
            }

            function $i(e, t, r) {
                !function e(n, o, l) {
                    if (n.linked) for (var i = 0; i < n.linked.length; ++i) {
                        var c = n.linked[i];
                        if (c.doc != o) {
                            var d = l && c.sharedHist;
                            r && !d || (t(c.doc, d), e(c.doc, n, d))
                        }
                    }
                }(e, null, !0)
            }

            function Ki(e, t) {
                if (t.cm) throw new Error("This document is already in use.");
                e.doc = t, t.cm = e, xn(e), ji(e), Xi(e), e.options.lineWrapping || er(e), e.options.mode = t.modeOption, kn(e)
            }

            function Xi(e) {
                ("rtl" == e.doc.direction ? R : D)(e.display.lineDiv, "CodeMirror-rtl")
            }

            function Yi(e) {
                this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
            }

            function Qi(e, t) {
                var r = {from: ft(t.from), to: Ii(t), text: et(e, t.from, t.to)};
                return ro(e, r, t.from.line, t.to.line + 1), $i(e, (function (e) {
                    return ro(e, r, t.from.line, t.to.line + 1)
                }), !0), r
            }

            function Zi(e) {
                for (; e.length && re(e).ranges;) e.pop()
            }

            function Ji(e, t, r, n) {
                var o = e.history;
                o.undone.length = 0;
                var l, c, time = +new Date;
                if ((o.lastOp == n || o.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && o.lastModTime > time - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (l = function (e, t) {
                    return t ? (Zi(e.done), re(e.done)) : e.done.length && !re(e.done).ranges ? re(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), re(e.done)) : void 0
                }(o, o.lastOp == n))) c = re(l.changes), 0 == ct(t.from, t.to) && 0 == ct(t.from, c.to) ? c.to = Ii(t) : l.changes.push(Qi(e, t)); else {
                    var d = re(o.done);
                    for (d && d.ranges || to(e.sel, o.done), l = {
                        changes: [Qi(e, t)],
                        generation: o.generation
                    }, o.done.push(l); o.done.length > o.undoDepth;) o.done.shift(), o.done[0].ranges || o.done.shift()
                }
                o.done.push(r), o.generation = ++o.maxGeneration, o.lastModTime = o.lastSelTime = time, o.lastOp = o.lastSelOp = n, o.lastOrigin = o.lastSelOrigin = t.origin, c || we(e, "historyAdded")
            }

            function eo(e, t, r, n) {
                var o = e.history, l = n && n.origin;
                r == o.lastSelOp || l && o.lastSelOrigin == l && (o.lastModTime == o.lastSelTime && o.lastOrigin == l || function (e, t, r, n) {
                    var o = t.charAt(0);
                    return "*" == o || "+" == o && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
                }(e, l, re(o.done), t)) ? o.done[o.done.length - 1] = t : to(t, o.done), o.lastSelTime = +new Date, o.lastSelOrigin = l, o.lastSelOp = r, n && !1 !== n.clearRedo && Zi(o.undone)
            }

            function to(e, t) {
                var r = re(t);
                r && r.ranges && r.equals(e) || t.push(e)
            }

            function ro(e, t, r, n) {
                var o = t["spans_" + e.id], l = 0;
                e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), (function (line) {
                    line.markedSpans && ((o || (o = t["spans_" + e.id] = {}))[l] = line.markedSpans), ++l
                }))
            }

            function no(e) {
                if (!e) return null;
                for (var t, i = 0; i < e.length; ++i) e[i].marker.explicitlyCleared ? t || (t = e.slice(0, i)) : t && t.push(e[i]);
                return t ? t.length ? t : null : e
            }

            function io(e, t) {
                var r = function (e, t) {
                    var r = t["spans_" + e.id];
                    if (!r) return null;
                    for (var n = [], i = 0; i < t.text.length; ++i) n.push(no(r[i]));
                    return n
                }(e, t), n = Ft(e, t);
                if (!r) return n;
                if (!n) return r;
                for (var i = 0; i < r.length; ++i) {
                    var o = r[i], l = n[i];
                    if (o && l) e:for (var c = 0; c < l.length; ++c) {
                        for (var span = l[c], d = 0; d < o.length; ++d) if (o[d].marker == span.marker) continue e;
                        o.push(span)
                    } else l && (r[i] = l)
                }
                return r
            }

            function oo(e, t, r) {
                for (var n = [], i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (o.ranges) n.push(r ? Fi.prototype.deepCopy.call(o) : o); else {
                        var l = o.changes, c = [];
                        n.push({changes: c});
                        for (var d = 0; d < l.length; ++d) {
                            var f = l[d], h = void 0;
                            if (c.push({
                                from: f.from,
                                to: f.to,
                                text: f.text
                            }), t) for (var m in f) (h = m.match(/^spans_(\d+)$/)) && K(t, Number(h[1])) > -1 && (re(c)[m] = f[m], delete f[m])
                        }
                    }
                }
                return n
            }

            function ao(e, head, t, r) {
                if (r) {
                    var n = e.anchor;
                    if (t) {
                        var o = ct(head, n) < 0;
                        o != ct(t, n) < 0 ? (n = head, head = t) : o != ct(head, t) < 0 && (head = t)
                    }
                    return new Ei(n, head)
                }
                return new Ei(t || head, head)
            }

            function lo(e, head, t, r, n) {
                null == n && (n = e.cm && (e.cm.display.shift || e.extend)), ho(e, new Fi([ao(e.sel.primary(), head, t, n)], 0), r)
            }

            function so(e, t, r) {
                for (var n = [], o = e.cm && (e.cm.display.shift || e.extend), i = 0; i < e.sel.ranges.length; i++) n[i] = ao(e.sel.ranges[i], t[i], null, o);
                ho(e, Pi(e.cm, n, e.sel.primIndex), r)
            }

            function co(e, i, t, r) {
                var n = e.sel.ranges.slice(0);
                n[i] = t, ho(e, Pi(e.cm, n, e.sel.primIndex), r)
            }

            function uo(e, t, head, r) {
                ho(e, Hi(t, head), r)
            }

            function fo(e, t, r) {
                var n = e.history.done, o = re(n);
                o && o.ranges ? (n[n.length - 1] = t, po(e, t, r)) : ho(e, t, r)
            }

            function ho(e, t, r) {
                po(e, t, r), eo(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
            }

            function po(e, t, r) {
                (Se(e, "beforeSelectionChange") || e.cm && Se(e.cm, "beforeSelectionChange")) && (t = function (e, t, r) {
                    var n = {
                        ranges: t.ranges, update: function (t) {
                            this.ranges = [];
                            for (var i = 0; i < t.length; i++) this.ranges[i] = new Ei(gt(e, t[i].anchor), gt(e, t[i].head))
                        }, origin: r && r.origin
                    };
                    return we(e, "beforeSelectionChange", e, n), e.cm && we(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? Pi(e.cm, n.ranges, n.ranges.length - 1) : t
                }(e, t, r));
                var n = r && r.bias || (ct(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                mo(e, vo(e, t, n, !0)), r && !1 === r.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || jn(e.cm)
            }

            function mo(e, t) {
                t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ke(e.cm)), yr(e, "cursorActivity", e))
            }

            function go(e) {
                mo(e, vo(e, e.sel, null, !1))
            }

            function vo(e, t, r, n) {
                for (var o, i = 0; i < t.ranges.length; i++) {
                    var l = t.ranges[i], c = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
                        d = yo(e, l.anchor, c && c.anchor, r, n), f = yo(e, l.head, c && c.head, r, n);
                    (o || d != l.anchor || f != l.head) && (o || (o = t.ranges.slice(0, i)), o[i] = new Ei(d, f))
                }
                return o ? Pi(e.cm, o, t.primIndex) : t
            }

            function bo(e, t, r, n, o) {
                var line = Je(e, t.line);
                if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                    var l = line.markedSpans[i], c = l.marker, d = "selectLeft" in c ? !c.selectLeft : c.inclusiveLeft,
                        f = "selectRight" in c ? !c.selectRight : c.inclusiveRight;
                    if ((null == l.from || (d ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (f ? l.to >= t.ch : l.to > t.ch))) {
                        if (o && (we(c, "beforeCursorEnter"), c.explicitlyCleared)) {
                            if (line.markedSpans) {
                                --i;
                                continue
                            }
                            break
                        }
                        if (!c.atomic) continue;
                        if (r) {
                            var h = c.find(n < 0 ? 1 : -1), m = void 0;
                            if ((n < 0 ? f : d) && (h = xo(e, h, -n, h && h.line == t.line ? line : null)), h && h.line == t.line && (m = ct(h, r)) && (n < 0 ? m < 0 : m > 0)) return bo(e, h, t, n, o)
                        }
                        var v = c.find(n < 0 ? -1 : 1);
                        return (n < 0 ? d : f) && (v = xo(e, v, n, v.line == t.line ? line : null)), v ? bo(e, v, t, n, o) : null
                    }
                }
                return t
            }

            function yo(e, t, r, n, o) {
                var l = n || 1,
                    c = bo(e, t, r, l, o) || !o && bo(e, t, r, l, !0) || bo(e, t, r, -l, o) || !o && bo(e, t, r, -l, !0);
                return c || (e.cantEdit = !0, st(e.first, 0))
            }

            function xo(e, t, r, line) {
                return r < 0 && 0 == t.ch ? t.line > e.first ? gt(e, st(t.line - 1)) : null : r > 0 && t.ch == (line || Je(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? st(t.line + 1, 0) : null : new st(t.line, t.ch + r)
            }

            function wo(e) {
                e.setSelection(st(e.firstLine(), 0), st(e.lastLine()), Y)
            }

            function Co(e, t, r) {
                var n = {
                    canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function () {
                        return n.canceled = !0
                    }
                };
                return r && (n.update = function (t, r, text, o) {
                    t && (n.from = gt(e, t)), r && (n.to = gt(e, r)), text && (n.text = text), void 0 !== o && (n.origin = o)
                }), we(e, "beforeChange", e, n), e.cm && we(e.cm, "beforeChange", e.cm, n), n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                    from: n.from,
                    to: n.to,
                    text: n.text,
                    origin: n.origin
                }
            }

            function ko(e, t, r) {
                if (e.cm) {
                    if (!e.cm.curOp) return hi(e.cm, ko)(e, t, r);
                    if (e.cm.state.suppressEdits) return
                }
                if (!(Se(e, "beforeChange") || e.cm && Se(e.cm, "beforeChange")) || (t = Co(e, t, !0))) {
                    var n = Nt && !r && function (e, t, r) {
                        var n = null;
                        if (e.iter(t.line, r.line + 1, (function (line) {
                            if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                                var mark = line.markedSpans[i].marker;
                                !mark.readOnly || n && -1 != K(n, mark) || (n || (n = [])).push(mark)
                            }
                        })), !n) return null;
                        for (var o = [{
                            from: t,
                            to: r
                        }], i = 0; i < n.length; ++i) for (var l = n[i], c = l.find(0), d = 0; d < o.length; ++d) {
                            var p = o[d];
                            if (!(ct(p.to, c.from) < 0 || ct(p.from, c.to) > 0)) {
                                var f = [d, 1], h = ct(p.from, c.from), m = ct(p.to, c.to);
                                (h < 0 || !l.inclusiveLeft && !h) && f.push({
                                    from: p.from,
                                    to: c.from
                                }), (m > 0 || !l.inclusiveRight && !m) && f.push({
                                    from: c.to,
                                    to: p.to
                                }), o.splice.apply(o, f), d += f.length - 3
                            }
                        }
                        return o
                    }(e, t.from, t.to);
                    if (n) for (var i = n.length - 1; i >= 0; --i) So(e, {
                        from: n[i].from,
                        to: n[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    }); else So(e, t)
                }
            }

            function So(e, t) {
                if (1 != t.text.length || "" != t.text[0] || 0 != ct(t.from, t.to)) {
                    var r = Bi(e, t);
                    Ji(e, t, r, e.cm ? e.cm.curOp.id : NaN), Lo(e, t, r, Ft(e, t));
                    var n = [];
                    $i(e, (function (e, r) {
                        r || -1 != K(n, e.history) || (Ao(e.history, t), n.push(e.history)), Lo(e, t, null, Ft(e, t))
                    }))
                }
            }

            function Mo(e, t, r) {
                var n = e.cm && e.cm.state.suppressEdits;
                if (!n || r) {
                    for (var o, l = e.history, c = e.sel, source = "undo" == t ? l.done : l.undone, d = "undo" == t ? l.undone : l.done, i = 0; i < source.length && (o = source[i], r ? !o.ranges || o.equals(e.sel) : o.ranges); i++) ;
                    if (i != source.length) {
                        for (l.lastOrigin = l.lastSelOrigin = null; ;) {
                            if (!(o = source.pop()).ranges) {
                                if (n) return void source.push(o);
                                break
                            }
                            if (to(o, d), r && !o.equals(e.sel)) return void ho(e, o, {clearRedo: !1});
                            c = o
                        }
                        var f = [];
                        to(c, d), d.push({
                            changes: f,
                            generation: l.generation
                        }), l.generation = o.generation || ++l.maxGeneration;
                        for (var filter = Se(e, "beforeChange") || e.cm && Se(e.cm, "beforeChange"), h = function (i) {
                            var r = o.changes[i];
                            if (r.origin = t, filter && !Co(e, r, !1)) return source.length = 0, {};
                            f.push(Qi(e, r));
                            var n = i ? Bi(e, r) : re(source);
                            Lo(e, r, n, io(e, r)), !i && e.cm && e.cm.scrollIntoView({from: r.from, to: Ii(r)});
                            var l = [];
                            $i(e, (function (e, t) {
                                t || -1 != K(l, e.history) || (Ao(e.history, r), l.push(e.history)), Lo(e, r, null, io(e, r))
                            }))
                        }, m = o.changes.length - 1; m >= 0; --m) {
                            var v = h(m);
                            if (v) return v.v
                        }
                    }
                }
            }

            function _o(e, t) {
                if (0 != t && (e.first += t, e.sel = new Fi(map(e.sel.ranges, (function (e) {
                    return new Ei(st(e.anchor.line + t, e.anchor.ch), st(e.head.line + t, e.head.ch))
                })), e.sel.primIndex), e.cm)) {
                    kn(e.cm, e.first, e.first - t, t);
                    for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) Sn(e.cm, n, "gutter")
                }
            }

            function Lo(e, t, r, n) {
                if (e.cm && !e.cm.curOp) return hi(e.cm, Lo)(e, t, r, n);
                if (t.to.line < e.first) _o(e, t.text.length - 1 - (t.to.line - t.from.line)); else if (!(t.from.line > e.lastLine())) {
                    if (t.from.line < e.first) {
                        var o = t.text.length - 1 - (e.first - t.from.line);
                        _o(e, o), t = {
                            from: st(e.first, 0),
                            to: st(t.to.line + o, t.to.ch),
                            text: [re(t.text)],
                            origin: t.origin
                        }
                    }
                    var l = e.lastLine();
                    t.to.line > l && (t = {
                        from: t.from,
                        to: st(l, Je(e, l).text.length),
                        text: [t.text[0]],
                        origin: t.origin
                    }), t.removed = et(e, t.from, t.to), r || (r = Bi(e, t)), e.cm ? function (e, t, r) {
                        var n = e.doc, o = e.display, l = t.from, c = t.to, d = !1, f = l.line;
                        e.options.lineWrapping || (f = it($t(Je(n, l.line))), n.iter(f, c.line + 1, (function (line) {
                            if (line == o.maxLine) return d = !0, !0
                        }))), n.sel.contains(t.from, t.to) > -1 && ke(e), Vi(n, t, r, yn(e)), e.options.lineWrapping || (n.iter(f, l.line + t.text.length, (function (line) {
                            var e = Jt(line);
                            e > o.maxLineLength && (o.maxLine = line, o.maxLineLength = e, o.maxLineChanged = !0, d = !1)
                        })), d && (e.curOp.updateMaxLine = !0)), function (e, t) {
                            if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                                for (var r = e.first, line = t - 1; line > r; line--) {
                                    var n = Je(e, line).stateAfter;
                                    if (n && (!(n instanceof bt) || line + n.lookAhead < t)) {
                                        r = line + 1;
                                        break
                                    }
                                }
                                e.highlightFrontier = Math.min(e.highlightFrontier, r)
                            }
                        }(n, l.line), gi(e, 400);
                        var h = t.text.length - (c.line - l.line) - 1;
                        t.full ? kn(e) : l.line != c.line || 1 != t.text.length || Ui(e.doc, t) ? kn(e, l.line, c.line + 1, h) : Sn(e, l.line, "text");
                        var m = Se(e, "changes"), v = Se(e, "change");
                        if (v || m) {
                            var y = {from: l, to: c, text: t.text, removed: t.removed, origin: t.origin};
                            v && yr(e, "change", e, y), m && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(y)
                        }
                        e.display.selForContextMenu = null
                    }(e.cm, t, n) : Vi(e, t, n), po(e, r, Y), e.cantEdit && yo(e, st(e.firstLine(), 0)) && (e.cantEdit = !1)
                }
            }

            function To(e, code, t, r, n) {
                var o;
                r || (r = t), ct(r, t) < 0 && (t = (o = [r, t])[0], r = o[1]), "string" == typeof code && (code = e.splitLines(code)), ko(e, {
                    from: t,
                    to: r,
                    text: code,
                    origin: n
                })
            }

            function zo(e, t, r, n) {
                r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
            }

            function No(e, t, r, n) {
                for (var i = 0; i < e.length; ++i) {
                    var sub = e[i], o = !0;
                    if (sub.ranges) {
                        sub.copied || ((sub = e[i] = sub.deepCopy()).copied = !0);
                        for (var l = 0; l < sub.ranges.length; l++) zo(sub.ranges[l].anchor, t, r, n), zo(sub.ranges[l].head, t, r, n)
                    } else {
                        for (var c = 0; c < sub.changes.length; ++c) {
                            var d = sub.changes[c];
                            if (r < d.from.line) d.from = st(d.from.line + n, d.from.ch), d.to = st(d.to.line + n, d.to.ch); else if (t <= d.to.line) {
                                o = !1;
                                break
                            }
                        }
                        o || (e.splice(0, i + 1), i = 0)
                    }
                }
            }

            function Ao(e, t) {
                var r = t.from.line, n = t.to.line, o = t.text.length - (n - r) - 1;
                No(e.done, r, n, o), No(e.undone, r, n, o)
            }

            function Oo(e, t, r, n) {
                var o = t, line = t;
                return "number" == typeof t ? line = Je(e, mt(e, t)) : o = it(t), null == o ? null : (n(line, o) && e.cm && Sn(e.cm, o, r), line)
            }

            function Do(e) {
                this.lines = e, this.parent = null;
                for (var t = 0, i = 0; i < e.length; ++i) e[i].parent = this, t += e[i].height;
                this.height = t
            }

            function Wo(e) {
                this.children = e;
                for (var t = 0, r = 0, i = 0; i < e.length; ++i) {
                    var n = e[i];
                    t += n.chunkSize(), r += n.height, n.parent = this
                }
                this.size = t, this.height = r, this.parent = null
            }

            Ei.prototype.from = function () {
                return pt(this.anchor, this.head)
            }, Ei.prototype.to = function () {
                return ht(this.anchor, this.head)
            }, Ei.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }, Do.prototype = {
                chunkSize: function () {
                    return this.lines.length
                }, removeInner: function (e, t) {
                    for (var i = e, r = e + t; i < r; ++i) {
                        var line = this.lines[i];
                        this.height -= line.height, nr(line), yr(line, "delete")
                    }
                    this.lines.splice(e, t)
                }, collapse: function (e) {
                    e.push.apply(e, this.lines)
                }, insertInner: function (e, t, r) {
                    this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                    for (var i = 0; i < t.length; ++i) t[i].parent = this
                }, iterN: function (e, t, r) {
                    for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0
                }
            }, Wo.prototype = {
                chunkSize: function () {
                    return this.size
                }, removeInner: function (e, t) {
                    this.size -= t;
                    for (var i = 0; i < this.children.length; ++i) {
                        var r = this.children[i], n = r.chunkSize();
                        if (e < n) {
                            var o = Math.min(t, n - e), l = r.height;
                            if (r.removeInner(e, o), this.height -= l - r.height, n == o && (this.children.splice(i--, 1), r.parent = null), 0 == (t -= o)) break;
                            e = 0
                        } else e -= n
                    }
                    if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Do))) {
                        var c = [];
                        this.collapse(c), this.children = [new Do(c)], this.children[0].parent = this
                    }
                }, collapse: function (e) {
                    for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(e)
                }, insertInner: function (e, t, r) {
                    this.size += t.length, this.height += r;
                    for (var i = 0; i < this.children.length; ++i) {
                        var n = this.children[i], o = n.chunkSize();
                        if (e <= o) {
                            if (n.insertInner(e, t, r), n.lines && n.lines.length > 50) {
                                for (var l = n.lines.length % 25 + 25, c = l; c < n.lines.length;) {
                                    var d = new Do(n.lines.slice(c, c += 25));
                                    n.height -= d.height, this.children.splice(++i, 0, d), d.parent = this
                                }
                                n.lines = n.lines.slice(0, l), this.maybeSpill()
                            }
                            break
                        }
                        e -= o
                    }
                }, maybeSpill: function () {
                    if (!(this.children.length <= 10)) {
                        var e = this;
                        do {
                            var t = new Wo(e.children.splice(e.children.length - 5, 5));
                            if (e.parent) {
                                e.size -= t.size, e.height -= t.height;
                                var r = K(e.parent.children, e);
                                e.parent.children.splice(r + 1, 0, t)
                            } else {
                                var n = new Wo(e.children);
                                n.parent = e, e.children = [n, t], e = n
                            }
                            t.parent = e.parent
                        } while (e.children.length > 10);
                        e.parent.maybeSpill()
                    }
                }, iterN: function (e, t, r) {
                    for (var i = 0; i < this.children.length; ++i) {
                        var n = this.children[i], o = n.chunkSize();
                        if (e < o) {
                            var l = Math.min(t, o - e);
                            if (n.iterN(e, l, r)) return !0;
                            if (0 == (t -= l)) break;
                            e = 0
                        } else e -= o
                    }
                }
            };
            var Fo = function (e, t, r) {
                if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
                this.doc = e, this.node = t
            };

            function Eo(e, line, t) {
                Zt(line) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && qn(e, t)
            }

            Fo.prototype.clear = function () {
                var e = this.doc.cm, t = this.line.widgets, line = this.line, r = it(line);
                if (null != r && t) {
                    for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                    t.length || (line.widgets = null);
                    var n = Or(this);
                    nt(line, Math.max(0, line.height - n)), e && (fi(e, (function () {
                        Eo(e, line, -n), Sn(e, r, "widget")
                    })), yr(e, "lineWidgetCleared", e, this, r))
                }
            }, Fo.prototype.changed = function () {
                var e = this, t = this.height, r = this.doc.cm, line = this.line;
                this.height = null;
                var n = Or(this) - t;
                n && (Yt(this.doc, line) || nt(line, line.height + n), r && fi(r, (function () {
                    r.curOp.forceUpdate = !0, Eo(r, line, n), yr(r, "lineWidgetChanged", r, e, it(line))
                })))
            }, Me(Fo);
            var Po = 0, Ho = function (e, t) {
                this.lines = [], this.type = t, this.doc = e, this.id = ++Po
            };

            function Io(e, t, r, n, o) {
                if (n && n.shared) return function (e, t, r, n, o) {
                    (n = U(n)).shared = !1;
                    var l = [Io(e, t, r, n, o)], c = l[0], d = n.widgetNode;
                    return $i(e, (function (e) {
                        d && (n.widgetNode = d.cloneNode(!0)), l.push(Io(e, gt(e, t), gt(e, r), n, o));
                        for (var i = 0; i < e.linked.length; ++i) if (e.linked[i].isParent) return;
                        c = re(l)
                    })), new Ro(l, c)
                }(e, t, r, n, o);
                if (e.cm && !e.cm.curOp) return hi(e.cm, Io)(e, t, r, n, o);
                var marker = new Ho(e, o), l = ct(t, r);
                if (n && U(n, marker, !1), l > 0 || 0 == l && !1 !== marker.clearWhenEmpty) return marker;
                if (marker.replacedWith && (marker.collapsed = !0, marker.widgetNode = P("span", [marker.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || marker.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (marker.widgetNode.insertLeft = !0)), marker.collapsed) {
                    if (Vt(e, t.line, t, r, marker) || t.line != r.line && Vt(e, r.line, t, r, marker)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    At = !0
                }
                marker.addToHistory && Ji(e, {from: t, to: r, origin: "markText"}, e.sel, NaN);
                var c, d = t.line, f = e.cm;
                if (e.iter(d, r.line + 1, (function (line) {
                    f && marker.collapsed && !f.options.lineWrapping && $t(line) == f.display.maxLine && (c = !0), marker.collapsed && d != t.line && nt(line, 0), function (line, span) {
                        line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span], span.marker.attachLine(line)
                    }(line, new Ot(marker, d == t.line ? t.ch : null, d == r.line ? r.ch : null)), ++d
                })), marker.collapsed && e.iter(t.line, r.line + 1, (function (line) {
                    Yt(e, line) && nt(line, 0)
                })), marker.clearOnEnter && be(marker, "beforeCursorEnter", (function () {
                    return marker.clear()
                })), marker.readOnly && (Nt = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), marker.collapsed && (marker.id = ++Po, marker.atomic = !0), f) {
                    if (c && (f.curOp.updateMaxLine = !0), marker.collapsed) kn(f, t.line, r.line + 1); else if (marker.className || marker.startStyle || marker.endStyle || marker.css || marker.attributes || marker.title) for (var i = t.line; i <= r.line; i++) Sn(f, i, "text");
                    marker.atomic && go(f.doc), yr(f, "markerAdded", f, marker)
                }
                return marker
            }

            Ho.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    var e = this.doc.cm, t = e && !e.curOp;
                    if (t && ii(e), Se(this, "clear")) {
                        var r = this.find();
                        r && yr(this, "clear", r.from, r.to)
                    }
                    for (var n = null, o = null, i = 0; i < this.lines.length; ++i) {
                        var line = this.lines[i], span = Dt(line.markedSpans, this);
                        e && !this.collapsed ? Sn(e, it(line), "text") : e && (null != span.to && (o = it(line)), null != span.from && (n = it(line))), line.markedSpans = Wt(line.markedSpans, span), null == span.from && this.collapsed && !Yt(this.doc, line) && e && nt(line, mn(e.display))
                    }
                    if (e && this.collapsed && !e.options.lineWrapping) for (var l = 0; l < this.lines.length; ++l) {
                        var c = $t(this.lines[l]), d = Jt(c);
                        d > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = d, e.display.maxLineChanged = !0)
                    }
                    null != n && e && this.collapsed && kn(e, n, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && go(e.doc)), e && yr(e, "markerCleared", e, this, n, o), t && oi(e), this.parent && this.parent.clear()
                }
            }, Ho.prototype.find = function (e, t) {
                var r, n;
                null == e && "bookmark" == this.type && (e = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var line = this.lines[i], span = Dt(line.markedSpans, this);
                    if (null != span.from && (r = st(t ? line : it(line), span.from), -1 == e)) return r;
                    if (null != span.to && (n = st(t ? line : it(line), span.to), 1 == e)) return n
                }
                return r && {from: r, to: n}
            }, Ho.prototype.changed = function () {
                var e = this, t = this.find(-1, !0), r = this, n = this.doc.cm;
                t && n && fi(n, (function () {
                    var line = t.line, o = it(t.line), view = qr(n, o);
                    if (view && (Xr(view), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !Yt(r.doc, line) && null != r.height) {
                        var l = r.height;
                        r.height = null;
                        var c = Or(r) - l;
                        c && nt(line, line.height + c)
                    }
                    yr(n, "markerChanged", n, e)
                }))
            }, Ho.prototype.attachLine = function (line) {
                if (!this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    e.maybeHiddenMarkers && -1 != K(e.maybeHiddenMarkers, this) || (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(line)
            }, Ho.prototype.detachLine = function (line) {
                if (this.lines.splice(K(this.lines, line), 1), !this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
                }
            }, Me(Ho);
            var Ro = function (e, t) {
                this.markers = e, this.primary = t;
                for (var i = 0; i < e.length; ++i) e[i].parent = this
            };

            function Bo(e) {
                return e.findMarks(st(e.first, 0), e.clipPos(st(e.lastLine())), (function (e) {
                    return e.parent
                }))
            }

            function qo(e) {
                for (var t = function (i) {
                    var marker = e[i], t = [marker.primary.doc];
                    $i(marker.primary.doc, (function (e) {
                        return t.push(e)
                    }));
                    for (var r = 0; r < marker.markers.length; r++) {
                        var n = marker.markers[r];
                        -1 == K(t, n.doc) && (n.parent = null, marker.markers.splice(r--, 1))
                    }
                }, i = 0; i < e.length; i++) t(i)
            }

            Ro.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var i = 0; i < this.markers.length; ++i) this.markers[i].clear();
                    yr(this, "clear")
                }
            }, Ro.prototype.find = function (e, t) {
                return this.primary.find(e, t)
            }, Me(Ro);
            var jo = 0, Go = function (text, e, t, r, n) {
                if (!(this instanceof Go)) return new Go(text, e, t, r, n);
                null == t && (t = 0), Wo.call(this, [new Do([new rr("", null)])]), this.first = t, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = t;
                var o = st(t, 0);
                this.sel = Hi(o), this.history = new Yi(null), this.id = ++jo, this.modeOption = e, this.lineSep = r, this.direction = "rtl" == n ? "rtl" : "ltr", this.extend = !1, "string" == typeof text && (text = this.splitLines(text)), Vi(this, {
                    from: o,
                    to: o,
                    text: text
                }), ho(this, Hi(o), Y)
            };
            Go.prototype = ie(Wo.prototype, {
                constructor: Go, iter: function (e, t, r) {
                    r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
                }, insert: function (e, t) {
                    for (var r = 0, i = 0; i < t.length; ++i) r += t[i].height;
                    this.insertInner(e - this.first, t, r)
                }, remove: function (e, t) {
                    this.removeInner(e - this.first, t)
                }, getValue: function (e) {
                    var t = tt(this, this.first, this.first + this.size);
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, setValue: mi((function (code) {
                    var e = st(this.first, 0), t = this.first + this.size - 1;
                    ko(this, {
                        from: e,
                        to: st(t, Je(this, t).text.length),
                        text: this.splitLines(code),
                        origin: "setValue",
                        full: !0
                    }, !0), this.cm && Gn(this.cm, 0, 0), ho(this, Hi(e), Y)
                })), replaceRange: function (code, e, t, r) {
                    To(this, code, e = gt(this, e), t = t ? gt(this, t) : e, r)
                }, getRange: function (e, t, r) {
                    var n = et(this, gt(this, e), gt(this, t));
                    return !1 === r ? n : n.join(r || this.lineSeparator())
                }, getLine: function (line) {
                    var e = this.getLineHandle(line);
                    return e && e.text
                }, getLineHandle: function (line) {
                    if (at(this, line)) return Je(this, line)
                }, getLineNumber: function (line) {
                    return it(line)
                }, getLineHandleVisualStart: function (line) {
                    return "number" == typeof line && (line = Je(this, line)), $t(line)
                }, lineCount: function () {
                    return this.size
                }, firstLine: function () {
                    return this.first
                }, lastLine: function () {
                    return this.first + this.size - 1
                }, clipPos: function (e) {
                    return gt(this, e)
                }, getCursor: function (e) {
                    var t = this.sel.primary();
                    return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
                }, listSelections: function () {
                    return this.sel.ranges
                }, somethingSelected: function () {
                    return this.sel.somethingSelected()
                }, setCursor: mi((function (line, e, t) {
                    uo(this, gt(this, "number" == typeof line ? st(line, e || 0) : line), null, t)
                })), setSelection: mi((function (e, head, t) {
                    uo(this, gt(this, e), gt(this, head || e), t)
                })), extendSelection: mi((function (head, e, t) {
                    lo(this, gt(this, head), e && gt(this, e), t)
                })), extendSelections: mi((function (e, t) {
                    so(this, vt(this, e), t)
                })), extendSelectionsBy: mi((function (e, t) {
                    so(this, vt(this, map(this.sel.ranges, e)), t)
                })), setSelections: mi((function (e, t, r) {
                    if (e.length) {
                        for (var n = [], i = 0; i < e.length; i++) n[i] = new Ei(gt(this, e[i].anchor), gt(this, e[i].head));
                        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), ho(this, Pi(this.cm, n, t), r)
                    }
                })), addSelection: mi((function (e, head, t) {
                    var r = this.sel.ranges.slice(0);
                    r.push(new Ei(gt(this, e), gt(this, head || e))), ho(this, Pi(this.cm, r, r.length - 1), t)
                })), getSelection: function (e) {
                    for (var t, r = this.sel.ranges, i = 0; i < r.length; i++) {
                        var n = et(this, r[i].from(), r[i].to());
                        t = t ? t.concat(n) : n
                    }
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, getSelections: function (e) {
                    for (var t = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
                        var n = et(this, r[i].from(), r[i].to());
                        !1 !== e && (n = n.join(e || this.lineSeparator())), t[i] = n
                    }
                    return t
                }, replaceSelection: function (code, e, t) {
                    for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = code;
                    this.replaceSelections(r, e, t || "+input")
                }, replaceSelections: mi((function (code, e, t) {
                    for (var r = [], n = this.sel, i = 0; i < n.ranges.length; i++) {
                        var o = n.ranges[i];
                        r[i] = {from: o.from(), to: o.to(), text: this.splitLines(code[i]), origin: t}
                    }
                    for (var l = e && "end" != e && function (e, t, r) {
                        for (var n = [], o = st(e.first, 0), l = o, i = 0; i < t.length; i++) {
                            var c = t[i], d = qi(c.from, o, l), f = qi(Ii(c), o, l);
                            if (o = c.to, l = f, "around" == r) {
                                var h = e.sel.ranges[i], m = ct(h.head, h.anchor) < 0;
                                n[i] = new Ei(m ? f : d, m ? d : f)
                            } else n[i] = new Ei(d, d)
                        }
                        return new Fi(n, e.sel.primIndex)
                    }(this, r, e), c = r.length - 1; c >= 0; c--) ko(this, r[c]);
                    l ? fo(this, l) : this.cm && jn(this.cm)
                })), undo: mi((function () {
                    Mo(this, "undo")
                })), redo: mi((function () {
                    Mo(this, "redo")
                })), undoSelection: mi((function () {
                    Mo(this, "undo", !0)
                })), redoSelection: mi((function () {
                    Mo(this, "redo", !0)
                })), setExtending: function (e) {
                    this.extend = e
                }, getExtending: function () {
                    return this.extend
                }, historySize: function () {
                    for (var e = this.history, t = 0, r = 0, i = 0; i < e.done.length; i++) e.done[i].ranges || ++t;
                    for (var n = 0; n < e.undone.length; n++) e.undone[n].ranges || ++r;
                    return {undo: t, redo: r}
                }, clearHistory: function () {
                    var e = this;
                    this.history = new Yi(this.history.maxGeneration), $i(this, (function (t) {
                        return t.history = e.history
                    }), !0)
                }, markClean: function () {
                    this.cleanGeneration = this.changeGeneration(!0)
                }, changeGeneration: function (e) {
                    return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                }, isClean: function (e) {
                    return this.history.generation == (e || this.cleanGeneration)
                }, getHistory: function () {
                    return {done: oo(this.history.done), undone: oo(this.history.undone)}
                }, setHistory: function (e) {
                    var t = this.history = new Yi(this.history.maxGeneration);
                    t.done = oo(e.done.slice(0), null, !0), t.undone = oo(e.undone.slice(0), null, !0)
                }, setGutterMarker: mi((function (line, e, t) {
                    return Oo(this, line, "gutter", (function (line) {
                        var r = line.gutterMarkers || (line.gutterMarkers = {});
                        return r[e] = t, !t && se(r) && (line.gutterMarkers = null), !0
                    }))
                })), clearGutter: mi((function (e) {
                    var t = this;
                    this.iter((function (line) {
                        line.gutterMarkers && line.gutterMarkers[e] && Oo(t, line, "gutter", (function () {
                            return line.gutterMarkers[e] = null, se(line.gutterMarkers) && (line.gutterMarkers = null), !0
                        }))
                    }))
                })), lineInfo: function (line) {
                    var e;
                    if ("number" == typeof line) {
                        if (!at(this, line)) return null;
                        if (e = line, !(line = Je(this, line))) return null
                    } else if (null == (e = it(line))) return null;
                    return {
                        line: e,
                        handle: line,
                        text: line.text,
                        gutterMarkers: line.gutterMarkers,
                        textClass: line.textClass,
                        bgClass: line.bgClass,
                        wrapClass: line.wrapClass,
                        widgets: line.widgets
                    }
                }, addLineClass: mi((function (e, t, r) {
                    return Oo(this, e, "gutter" == t ? "gutter" : "class", (function (line) {
                        var e = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                        if (line[e]) {
                            if (A(r).test(line[e])) return !1;
                            line[e] += " " + r
                        } else line[e] = r;
                        return !0
                    }))
                })), removeLineClass: mi((function (e, t, r) {
                    return Oo(this, e, "gutter" == t ? "gutter" : "class", (function (line) {
                        var e = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                            n = line[e];
                        if (!n) return !1;
                        if (null == r) line[e] = null; else {
                            var o = n.match(A(r));
                            if (!o) return !1;
                            var l = o.index + o[0].length;
                            line[e] = n.slice(0, o.index) + (o.index && l != n.length ? " " : "") + n.slice(l) || null
                        }
                        return !0
                    }))
                })), addLineWidget: mi((function (e, t, r) {
                    return function (e, t, r, n) {
                        var o = new Fo(e, r, n), l = e.cm;
                        return l && o.noHScroll && (l.display.alignWidgets = !0), Oo(e, t, "widget", (function (line) {
                            var t = line.widgets || (line.widgets = []);
                            if (null == o.insertAt ? t.push(o) : t.splice(Math.min(t.length, Math.max(0, o.insertAt)), 0, o), o.line = line, l && !Yt(e, line)) {
                                var r = Zt(line) < e.scrollTop;
                                nt(line, line.height + Or(o)), r && qn(l, o.height), l.curOp.forceUpdate = !0
                            }
                            return !0
                        })), l && yr(l, "lineWidgetAdded", l, o, "number" == typeof t ? t : it(t)), o
                    }(this, e, t, r)
                })), removeLineWidget: function (e) {
                    e.clear()
                }, markText: function (e, t, r) {
                    return Io(this, gt(this, e), gt(this, t), r, r && r.type || "range")
                }, setBookmark: function (e, t) {
                    var r = {
                        replacedWith: t && (null == t.nodeType ? t.widget : t),
                        insertLeft: t && t.insertLeft,
                        clearWhenEmpty: !1,
                        shared: t && t.shared,
                        handleMouseEvents: t && t.handleMouseEvents
                    };
                    return Io(this, e = gt(this, e), e, r, "bookmark")
                }, findMarksAt: function (e) {
                    var t = [], r = Je(this, (e = gt(this, e)).line).markedSpans;
                    if (r) for (var i = 0; i < r.length; ++i) {
                        var span = r[i];
                        (null == span.from || span.from <= e.ch) && (null == span.to || span.to >= e.ch) && t.push(span.marker.parent || span.marker)
                    }
                    return t
                }, findMarks: function (e, t, filter) {
                    e = gt(this, e), t = gt(this, t);
                    var r = [], n = e.line;
                    return this.iter(e.line, t.line + 1, (function (line) {
                        var o = line.markedSpans;
                        if (o) for (var i = 0; i < o.length; i++) {
                            var span = o[i];
                            null != span.to && n == e.line && e.ch >= span.to || null == span.from && n != e.line || null != span.from && n == t.line && span.from >= t.ch || filter && !filter(span.marker) || r.push(span.marker.parent || span.marker)
                        }
                        ++n
                    })), r
                }, getAllMarks: function () {
                    var e = [];
                    return this.iter((function (line) {
                        var t = line.markedSpans;
                        if (t) for (var i = 0; i < t.length; ++i) null != t[i].from && e.push(t[i].marker)
                    })), e
                }, posFromIndex: function (e) {
                    var t, r = this.first, n = this.lineSeparator().length;
                    return this.iter((function (line) {
                        var o = line.text.length + n;
                        if (o > e) return t = e, !0;
                        e -= o, ++r
                    })), gt(this, st(r, t))
                }, indexFromPos: function (e) {
                    var t = (e = gt(this, e)).ch;
                    if (e.line < this.first || e.ch < 0) return 0;
                    var r = this.lineSeparator().length;
                    return this.iter(this.first, e.line, (function (line) {
                        t += line.text.length + r
                    })), t
                }, copy: function (e) {
                    var t = new Go(tt(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                    return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                }, linkedDoc: function (e) {
                    e || (e = {});
                    var t = this.first, r = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
                    var n = new Go(tt(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
                    return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: n,
                        sharedHist: e.sharedHist
                    }), n.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], function (e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var marker = t[i], r = marker.find(), n = e.clipPos(r.from), o = e.clipPos(r.to);
                            if (ct(n, o)) {
                                var l = Io(e, n, o, marker.primary, marker.primary.type);
                                marker.markers.push(l), l.parent = marker
                            }
                        }
                    }(n, Bo(this)), n
                }, unlinkDoc: function (e) {
                    if (e instanceof Ia && (e = e.doc), this.linked) for (var i = 0; i < this.linked.length; ++i) if (this.linked[i].doc == e) {
                        this.linked.splice(i, 1), e.unlinkDoc(this), qo(Bo(this));
                        break
                    }
                    if (e.history == this.history) {
                        var t = [e.id];
                        $i(e, (function (e) {
                            return t.push(e.id)
                        }), !0), e.history = new Yi(null), e.history.done = oo(this.history.done, t), e.history.undone = oo(this.history.undone, t)
                    }
                }, iterLinkedDocs: function (e) {
                    $i(this, e)
                }, getMode: function () {
                    return this.mode
                }, getEditor: function () {
                    return this.cm
                }, splitLines: function (e) {
                    return this.lineSep ? e.split(this.lineSep) : He(e)
                }, lineSeparator: function () {
                    return this.lineSep || "\n"
                }, setDirection: mi((function (e) {
                    var t;
                    "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter((function (line) {
                        return line.order = null
                    })), this.cm && fi(t = this.cm, (function () {
                        Xi(t), kn(t)
                    })))
                }))
            }), Go.prototype.eachLine = Go.prototype.iter;
            var Uo = 0;

            function Vo(e) {
                var t = this;
                if ($o(t), !Ce(t, e) && !Dr(t.display, e)) {
                    _e(e), c && (Uo = +new Date);
                    var r = wn(t, e, !0), n = e.dataTransfer.files;
                    if (r && !t.isReadOnly()) if (n && n.length && window.FileReader && window.File) for (var o = n.length, text = Array(o), l = 0, d = function () {
                        ++l == o && hi(t, (function () {
                            var e = {
                                from: r = gt(t.doc, r), to: r, text: t.doc.splitLines(text.filter((function (e) {
                                    return null != e
                                })).join(t.doc.lineSeparator())), origin: "paste"
                            };
                            ko(t.doc, e), fo(t.doc, Hi(gt(t.doc, r), gt(t.doc, Ii(e))))
                        }))()
                    }, f = function (e, i) {
                        if (t.options.allowDropFileTypes && -1 == K(t.options.allowDropFileTypes, e.type)) d(); else {
                            var r = new FileReader;
                            r.onerror = function () {
                                return d()
                            }, r.onload = function () {
                                var content = r.result;
                                /[\x00-\x08\x0e-\x1f]{2}/.test(content) || (text[i] = content), d()
                            }, r.readAsText(e)
                        }
                    }, i = 0; i < n.length; i++) f(n[i], i); else {
                        if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout((function () {
                            return t.display.input.focus()
                        }), 20);
                        try {
                            var h = e.dataTransfer.getData("Text");
                            if (h) {
                                var m;
                                if (t.state.draggingText && !t.state.draggingText.copy && (m = t.listSelections()), po(t.doc, Hi(r, r)), m) for (var v = 0; v < m.length; ++v) To(t.doc, "", m[v].anchor, m[v].head, "drag");
                                t.replaceSelection(h, "around", "paste"), t.display.input.focus()
                            }
                        } catch (e) {
                        }
                    }
                }
            }

            function $o(e) {
                e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
            }

            function Ko(e) {
                if (document.getElementsByClassName) {
                    for (var t = document.getElementsByClassName("CodeMirror"), r = [], i = 0; i < t.length; i++) {
                        var n = t[i].CodeMirror;
                        n && r.push(n)
                    }
                    r.length && r[0].operation((function () {
                        for (var i = 0; i < r.length; i++) e(r[i])
                    }))
                }
            }

            var Xo = !1;

            function Yo() {
                var e;
                Xo || (be(window, "resize", (function () {
                    null == e && (e = setTimeout((function () {
                        e = null, Ko(Qo)
                    }), 100))
                })), be(window, "blur", (function () {
                    return Ko(Pn)
                })), Xo = !0)
            }

            function Qo(e) {
                var t = e.display;
                t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
            }

            for (var Zo = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, i = 0; i < 10; i++) Zo[i + 48] = Zo[i + 96] = String(i);
            for (var Jo = 65; Jo <= 90; Jo++) Zo[Jo] = String.fromCharCode(Jo);
            for (var ea = 1; ea <= 12; ea++) Zo[ea + 111] = Zo[ea + 63235] = "F" + ea;
            var ta = {};

            function ra(e) {
                var t, r, n, o, l = e.split(/-(?!$)/);
                e = l[l.length - 1];
                for (var i = 0; i < l.length - 1; i++) {
                    var c = l[i];
                    if (/^(cmd|meta|m)$/i.test(c)) o = !0; else if (/^a(lt)?$/i.test(c)) t = !0; else if (/^(c|ctrl|control)$/i.test(c)) r = !0; else {
                        if (!/^s(hift)?$/i.test(c)) throw new Error("Unrecognized modifier name: " + c);
                        n = !0
                    }
                }
                return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
            }

            function na(e) {
                var t = {};
                for (var r in e) if (e.hasOwnProperty(r)) {
                    var n = e[r];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                    if ("..." == n) {
                        delete e[r];
                        continue
                    }
                    for (var o = map(r.split(" "), ra), i = 0; i < o.length; i++) {
                        var l = void 0, c = void 0;
                        i == o.length - 1 ? (c = o.join(" "), l = n) : (c = o.slice(0, i + 1).join(" "), l = "...");
                        var d = t[c];
                        if (d) {
                            if (d != l) throw new Error("Inconsistent bindings for " + c)
                        } else t[c] = l
                    }
                    delete e[r]
                }
                for (var f in t) e[f] = t[f];
                return e
            }

            function ia(e, map, t, r) {
                var n = (map = sa(map)).call ? map.call(e, r) : map[e];
                if (!1 === n) return "nothing";
                if ("..." === n) return "multi";
                if (null != n && t(n)) return "handled";
                if (map.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(map.fallthrough)) return ia(e, map.fallthrough, t, r);
                    for (var i = 0; i < map.fallthrough.length; i++) {
                        var o = ia(e, map.fallthrough[i], t, r);
                        if (o) return o
                    }
                }
            }

            function oa(e) {
                var t = "string" == typeof e ? e : Zo[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            }

            function aa(e, t, r) {
                var base = e;
                return t.altKey && "Alt" != base && (e = "Alt-" + e), (z ? t.metaKey : t.ctrlKey) && "Ctrl" != base && (e = "Ctrl-" + e), (z ? t.ctrlKey : t.metaKey) && "Mod" != base && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != base && (e = "Shift-" + e), e
            }

            function la(e, t) {
                if (v && 34 == e.keyCode && e.char) return !1;
                var r = Zo[e.keyCode];
                return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), aa(r, e, t))
            }

            function sa(e) {
                return "string" == typeof e ? ta[e] : e
            }

            function ca(e, t) {
                for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                    for (var o = t(r[i]); n.length && ct(o.from, re(n).to) <= 0;) {
                        var l = n.pop();
                        if (ct(l.from, o.from) < 0) {
                            o.from = l.from;
                            break
                        }
                    }
                    n.push(o)
                }
                fi(e, (function () {
                    for (var i = n.length - 1; i >= 0; i--) To(e.doc, "", n[i].from, n[i].to, "+delete");
                    jn(e)
                }))
            }

            function ua(line, e, t) {
                var r = de(line.text, e + t, t);
                return r < 0 || r > line.text.length ? null : r
            }

            function da(line, e, t) {
                var r = ua(line, e.ch, t);
                return null == r ? null : new st(e.line, r, t < 0 ? "after" : "before")
            }

            function fa(e, t, r, n, o) {
                if (e) {
                    "rtl" == t.doc.direction && (o = -o);
                    var l = ge(r, t.doc.direction);
                    if (l) {
                        var c, d = o < 0 ? re(l) : l[0], f = o < 0 == (1 == d.level) ? "after" : "before";
                        if (d.level > 0 || "rtl" == t.doc.direction) {
                            var h = jr(t, r);
                            c = o < 0 ? r.text.length - 1 : 0;
                            var m = Gr(t, h, c).top;
                            c = fe((function (e) {
                                return Gr(t, h, e).top == m
                            }), o < 0 == (1 == d.level) ? d.from : d.to - 1, c), "before" == f && (c = ua(r, c, 1))
                        } else c = o < 0 ? d.to : d.from;
                        return new st(n, c, f)
                    }
                }
                return new st(n, o < 0 ? r.text.length : 0, o < 0 ? "before" : "after")
            }

            ta.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, ta.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, ta.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Alt-F": "goWordRight",
                "Alt-B": "goWordLeft",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-D": "delWordAfter",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, ta.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            }, ta.default = M ? ta.macDefault : ta.pcDefault;
            var ha = {
                selectAll: wo, singleSelection: function (e) {
                    return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Y)
                }, killLine: function (e) {
                    return ca(e, (function (t) {
                        if (t.empty()) {
                            var r = Je(e.doc, t.head.line).text.length;
                            return t.head.ch == r && t.head.line < e.lastLine() ? {
                                from: t.head,
                                to: st(t.head.line + 1, 0)
                            } : {from: t.head, to: st(t.head.line, r)}
                        }
                        return {from: t.from(), to: t.to()}
                    }))
                }, deleteLine: function (e) {
                    return ca(e, (function (t) {
                        return {from: st(t.from().line, 0), to: gt(e.doc, st(t.to().line + 1, 0))}
                    }))
                }, delLineLeft: function (e) {
                    return ca(e, (function (e) {
                        return {from: st(e.from().line, 0), to: e.from()}
                    }))
                }, delWrappedLineLeft: function (e) {
                    return ca(e, (function (t) {
                        var r = e.charCoords(t.head, "div").top + 5;
                        return {from: e.coordsChar({left: 0, top: r}, "div"), to: t.from()}
                    }))
                }, delWrappedLineRight: function (e) {
                    return ca(e, (function (t) {
                        var r = e.charCoords(t.head, "div").top + 5,
                            n = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: r}, "div");
                        return {from: t.from(), to: n}
                    }))
                }, undo: function (e) {
                    return e.undo()
                }, redo: function (e) {
                    return e.redo()
                }, undoSelection: function (e) {
                    return e.undoSelection()
                }, redoSelection: function (e) {
                    return e.redoSelection()
                }, goDocStart: function (e) {
                    return e.extendSelection(st(e.firstLine(), 0))
                }, goDocEnd: function (e) {
                    return e.extendSelection(st(e.lastLine()))
                }, goLineStart: function (e) {
                    return e.extendSelectionsBy((function (t) {
                        return pa(e, t.head.line)
                    }), {origin: "+move", bias: 1})
                }, goLineStartSmart: function (e) {
                    return e.extendSelectionsBy((function (t) {
                        return ma(e, t.head)
                    }), {origin: "+move", bias: 1})
                }, goLineEnd: function (e) {
                    return e.extendSelectionsBy((function (t) {
                        return function (e, t) {
                            var line = Je(e.doc, t), r = function (line) {
                                for (var e; e = Gt(line);) line = e.find(1, !0).line;
                                return line
                            }(line);
                            return r != line && (t = it(r)), fa(!0, e, line, t, -1)
                        }(e, t.head.line)
                    }), {origin: "+move", bias: -1})
                }, goLineRight: function (e) {
                    return e.extendSelectionsBy((function (t) {
                        var r = e.cursorCoords(t.head, "div").top + 5;
                        return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: r}, "div")
                    }), Z)
                }, goLineLeft: function (e) {
                    return e.extendSelectionsBy((function (t) {
                        var r = e.cursorCoords(t.head, "div").top + 5;
                        return e.coordsChar({left: 0, top: r}, "div")
                    }), Z)
                }, goLineLeftSmart: function (e) {
                    return e.extendSelectionsBy((function (t) {
                        var r = e.cursorCoords(t.head, "div").top + 5, n = e.coordsChar({left: 0, top: r}, "div");
                        return n.ch < e.getLine(n.line).search(/\S/) ? ma(e, t.head) : n
                    }), Z)
                }, goLineUp: function (e) {
                    return e.moveV(-1, "line")
                }, goLineDown: function (e) {
                    return e.moveV(1, "line")
                }, goPageUp: function (e) {
                    return e.moveV(-1, "page")
                }, goPageDown: function (e) {
                    return e.moveV(1, "page")
                }, goCharLeft: function (e) {
                    return e.moveH(-1, "char")
                }, goCharRight: function (e) {
                    return e.moveH(1, "char")
                }, goColumnLeft: function (e) {
                    return e.moveH(-1, "column")
                }, goColumnRight: function (e) {
                    return e.moveH(1, "column")
                }, goWordLeft: function (e) {
                    return e.moveH(-1, "word")
                }, goGroupRight: function (e) {
                    return e.moveH(1, "group")
                }, goGroupLeft: function (e) {
                    return e.moveH(-1, "group")
                }, goWordRight: function (e) {
                    return e.moveH(1, "word")
                }, delCharBefore: function (e) {
                    return e.deleteH(-1, "codepoint")
                }, delCharAfter: function (e) {
                    return e.deleteH(1, "char")
                }, delWordBefore: function (e) {
                    return e.deleteH(-1, "word")
                }, delWordAfter: function (e) {
                    return e.deleteH(1, "word")
                }, delGroupBefore: function (e) {
                    return e.deleteH(-1, "group")
                }, delGroupAfter: function (e) {
                    return e.deleteH(1, "group")
                }, indentAuto: function (e) {
                    return e.indentSelection("smart")
                }, indentMore: function (e) {
                    return e.indentSelection("add")
                }, indentLess: function (e) {
                    return e.indentSelection("subtract")
                }, insertTab: function (e) {
                    return e.replaceSelection("\t")
                }, insertSoftTab: function (e) {
                    for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                        var o = r[i].from(), col = V(e.getLine(o.line), o.ch, n);
                        t.push(te(n - col % n))
                    }
                    e.replaceSelections(t)
                }, defaultTab: function (e) {
                    e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                }, transposeChars: function (e) {
                    return fi(e, (function () {
                        for (var t = e.listSelections(), r = [], i = 0; i < t.length; i++) if (t[i].empty()) {
                            var n = t[i].head, line = Je(e.doc, n.line).text;
                            if (line) if (n.ch == line.length && (n = new st(n.line, n.ch - 1)), n.ch > 0) n = new st(n.line, n.ch + 1), e.replaceRange(line.charAt(n.ch - 1) + line.charAt(n.ch - 2), st(n.line, n.ch - 2), n, "+transpose"); else if (n.line > e.doc.first) {
                                var o = Je(e.doc, n.line - 1).text;
                                o && (n = new st(n.line, 1), e.replaceRange(line.charAt(0) + e.doc.lineSeparator() + o.charAt(o.length - 1), st(n.line - 1, o.length - 1), n, "+transpose"))
                            }
                            r.push(new Ei(n, n))
                        }
                        e.setSelections(r)
                    }))
                }, newlineAndIndent: function (e) {
                    return fi(e, (function () {
                        for (var t = e.listSelections(), i = t.length - 1; i >= 0; i--) e.replaceRange(e.doc.lineSeparator(), t[i].anchor, t[i].head, "+input");
                        t = e.listSelections();
                        for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                        jn(e)
                    }))
                }, openLine: function (e) {
                    return e.replaceSelection("\n", "start")
                }, toggleOverwrite: function (e) {
                    return e.toggleOverwrite()
                }
            };

            function pa(e, t) {
                var line = Je(e.doc, t), r = $t(line);
                return r != line && (t = it(r)), fa(!0, e, r, t, 1)
            }

            function ma(e, t) {
                var r = pa(e, t.line), line = Je(e.doc, r.line), n = ge(line, e.doc.direction);
                if (!n || 0 == n[0].level) {
                    var o = Math.max(r.ch, line.text.search(/\S/)), l = t.line == r.line && t.ch <= o && t.ch;
                    return st(r.line, l ? 0 : o, r.sticky)
                }
                return r
            }

            function ga(e, t, r) {
                if ("string" == typeof t && !(t = ha[t])) return !1;
                e.display.input.ensurePolled();
                var n = e.display.shift, o = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), o = t(e) != X
                } finally {
                    e.display.shift = n, e.state.suppressEdits = !1
                }
                return o
            }

            var va = new $;

            function ba(e, t, r, n) {
                var o = e.state.keySeq;
                if (o) {
                    if (oa(t)) return "handled";
                    if (/\'$/.test(t) ? e.state.keySeq = null : va.set(50, (function () {
                        e.state.keySeq == o && (e.state.keySeq = null, e.display.input.reset())
                    })), ya(e, o + " " + t, r, n)) return !0
                }
                return ya(e, t, r, n)
            }

            function ya(e, t, r, n) {
                var o = function (e, t, r) {
                    for (var i = 0; i < e.state.keyMaps.length; i++) {
                        var n = ia(t, e.state.keyMaps[i], r, e);
                        if (n) return n
                    }
                    return e.options.extraKeys && ia(t, e.options.extraKeys, r, e) || ia(t, e.options.keyMap, r, e)
                }(e, t, n);
                return "multi" == o && (e.state.keySeq = t), "handled" == o && yr(e, "keyHandled", e, t, r), "handled" != o && "multi" != o || (_e(r), Dn(e)), !!o
            }

            function xa(e, t) {
                var r = la(t, !0);
                return !!r && (t.shiftKey && !e.state.keySeq ? ba(e, "Shift-" + r, t, (function (b) {
                    return ga(e, b, !0)
                })) || ba(e, r, t, (function (b) {
                    if ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) return ga(e, b)
                })) : ba(e, r, t, (function (b) {
                    return ga(e, b)
                })))
            }

            var wa = null;

            function Ca(e) {
                var t = this;
                if (!(e.target && e.target != t.display.input.getField() || (t.curOp.focus = I(), Ce(t, e)))) {
                    c && d < 11 && 27 == e.keyCode && (e.returnValue = !1);
                    var code = e.keyCode;
                    t.display.shift = 16 == code || e.shiftKey;
                    var n = xa(t, e);
                    v && (wa = n ? code : null, n || 88 != code || Re || !(M ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), r && !M && !n && 46 == code && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != code || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
                        var t = e.display.lineDiv;

                        function r(e) {
                            18 != e.keyCode && e.altKey || (D(t, "CodeMirror-crosshair"), xe(document, "keyup", r), xe(document, "mouseover", r))
                        }

                        R(t, "CodeMirror-crosshair"), be(document, "keyup", r), be(document, "mouseover", r)
                    }(t)
                }
            }

            function ka(e) {
                16 == e.keyCode && (this.doc.sel.shift = !1), Ce(this, e)
            }

            function Sa(e) {
                var t = this;
                if (!(e.target && e.target != t.display.input.getField() || Dr(t.display, e) || Ce(t, e) || e.ctrlKey && !e.altKey || M && e.metaKey)) {
                    var r = e.keyCode, n = e.charCode;
                    if (v && r == wa) return wa = null, void _e(e);
                    if (!v || e.which && !(e.which < 10) || !xa(t, e)) {
                        var o = String.fromCharCode(null == n ? r : n);
                        "\b" != o && (function (e, t, r) {
                            return ba(e, "'" + r + "'", t, (function (b) {
                                return ga(e, b, !0)
                            }))
                        }(t, e, o) || t.display.input.onKeyPress(e))
                    }
                }
            }

            var Ma, _a, La = function (time, e, button) {
                this.time = time, this.pos = e, this.button = button
            };

            function Ta(e) {
                var t = this, r = t.display;
                if (!(Ce(t, e) || r.activeTouch && r.input.supportsTouch())) if (r.input.ensurePolled(), r.shift = e.shiftKey, Dr(r, e)) f || (r.scroller.draggable = !1, setTimeout((function () {
                    return r.scroller.draggable = !0
                }), 100)); else if (!Aa(t, e)) {
                    var n = wn(t, e), button = Ae(e), o = n ? function (e, button) {
                        var t = +new Date;
                        return _a && _a.compare(t, e, button) ? (Ma = _a = null, "triple") : Ma && Ma.compare(t, e, button) ? (_a = new La(t, e, button), Ma = null, "double") : (Ma = new La(t, e, button), _a = null, "single")
                    }(n, button) : "single";
                    window.focus(), 1 == button && t.state.selectingText && t.state.selectingText(e), n && function (e, button, t, r, n) {
                        var o = "Click";
                        return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o), ba(e, aa(o = (1 == button ? "Left" : 2 == button ? "Middle" : "Right") + o, n), n, (function (r) {
                            if ("string" == typeof r && (r = ha[r]), !r) return !1;
                            var n = !1;
                            try {
                                e.isReadOnly() && (e.state.suppressEdits = !0), n = r(e, t) != X
                            } finally {
                                e.state.suppressEdits = !1
                            }
                            return n
                        }))
                    }(t, button, n, o, e) || (1 == button ? n ? function (e, t, r, n) {
                        c ? setTimeout(G(Wn, e), 0) : e.curOp.focus = I();
                        var o, l = function (e, t, r) {
                            var option = e.getOption("configureMouse"), n = option ? option(e, t, r) : {};
                            if (null == n.unit) {
                                var rect = _ ? r.shiftKey && r.metaKey : r.altKey;
                                n.unit = rect ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                            }
                            return (null == n.extend || e.doc.extend) && (n.extend = e.doc.extend || r.shiftKey), null == n.addNew && (n.addNew = M ? r.metaKey : r.ctrlKey), null == n.moveOnDrag && (n.moveOnDrag = !(M ? r.altKey : r.ctrlKey)), n
                        }(e, r, n), h = e.doc.sel;
                        e.options.dragDrop && We && !e.isReadOnly() && "single" == r && (o = h.contains(t)) > -1 && (ct((o = h.ranges[o]).from(), t) < 0 || t.xRel > 0) && (ct(o.to(), t) > 0 || t.xRel < 0) ? function (e, t, r, n) {
                            var o = e.display, l = !1, h = hi(e, (function (t) {
                                f && (o.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Fn(e)), xe(o.wrapper.ownerDocument, "mouseup", h), xe(o.wrapper.ownerDocument, "mousemove", m), xe(o.scroller, "dragstart", v), xe(o.scroller, "drop", h), l || (_e(t), n.addNew || lo(e.doc, r, null, null, n.extend), f && !y || c && 9 == d ? setTimeout((function () {
                                    o.wrapper.ownerDocument.body.focus({preventScroll: !0}), o.input.focus()
                                }), 20) : o.input.focus())
                            })), m = function (e) {
                                l = l || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
                            }, v = function () {
                                return l = !0
                            };
                            f && (o.scroller.draggable = !0), e.state.draggingText = h, h.copy = !n.moveOnDrag, be(o.wrapper.ownerDocument, "mouseup", h), be(o.wrapper.ownerDocument, "mousemove", m), be(o.scroller, "dragstart", v), be(o.scroller, "drop", h), e.state.delayingBlurEvent = !0, setTimeout((function () {
                                return o.input.focus()
                            }), 20), o.scroller.dragDrop && o.scroller.dragDrop()
                        }(e, n, t, l) : function (e, t, r, n) {
                            c && Fn(e);
                            var o = e.display, l = e.doc;
                            _e(t);
                            var d, f, h = l.sel, m = h.ranges;
                            if (n.addNew && !n.extend ? (f = l.sel.contains(r), d = f > -1 ? m[f] : new Ei(r, r)) : (d = l.sel.primary(), f = l.sel.primIndex), "rectangle" == n.unit) n.addNew || (d = new Ei(r, r)), r = wn(e, t, !0, !0), f = -1; else {
                                var v = za(e, r, n.unit);
                                d = n.extend ? ao(d, v.anchor, v.head, n.extend) : v
                            }
                            n.addNew ? -1 == f ? (f = m.length, ho(l, Pi(e, m.concat([d]), f), {
                                scroll: !1,
                                origin: "*mouse"
                            })) : m.length > 1 && m[f].empty() && "char" == n.unit && !n.extend ? (ho(l, Pi(e, m.slice(0, f).concat(m.slice(f + 1)), 0), {
                                scroll: !1,
                                origin: "*mouse"
                            }), h = l.sel) : co(l, f, d, Q) : (f = 0, ho(l, new Fi([d], 0), Q), h = l.sel);
                            var y = r;

                            function x(t) {
                                if (0 != ct(y, t)) if (y = t, "rectangle" == n.unit) {
                                    for (var o = [], c = e.options.tabSize, m = V(Je(l, r.line).text, r.ch, c), v = V(Je(l, t.line).text, t.ch, c), x = Math.min(m, v), w = Math.max(m, v), line = Math.min(r.line, t.line), C = Math.min(e.lastLine(), Math.max(r.line, t.line)); line <= C; line++) {
                                        var text = Je(l, line).text, k = J(text, x, c);
                                        x == w ? o.push(new Ei(st(line, k), st(line, k))) : text.length > k && o.push(new Ei(st(line, k), st(line, J(text, w, c))))
                                    }
                                    o.length || o.push(new Ei(r, r)), ho(l, Pi(e, h.ranges.slice(0, f).concat(o), f), {
                                        origin: "*mouse",
                                        scroll: !1
                                    }), e.scrollIntoView(t)
                                } else {
                                    var head, S = d, M = za(e, t, n.unit), _ = S.anchor;
                                    ct(M.anchor, _) > 0 ? (head = M.head, _ = pt(S.from(), M.anchor)) : (head = M.anchor, _ = ht(S.to(), M.head));
                                    var L = h.ranges.slice(0);
                                    L[f] = function (e, t) {
                                        var r = t.anchor, head = t.head, n = Je(e.doc, r.line);
                                        if (0 == ct(r, head) && r.sticky == head.sticky) return t;
                                        var o = ge(n);
                                        if (!o) return t;
                                        var l = pe(o, r.ch, r.sticky), c = o[l];
                                        if (c.from != r.ch && c.to != r.ch) return t;
                                        var d, f = l + (c.from == r.ch == (1 != c.level) ? 0 : 1);
                                        if (0 == f || f == o.length) return t;
                                        if (head.line != r.line) d = (head.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0; else {
                                            var h = pe(o, head.ch, head.sticky),
                                                m = h - l || (head.ch - r.ch) * (1 == c.level ? -1 : 1);
                                            d = h == f - 1 || h == f ? m < 0 : m > 0
                                        }
                                        var v = o[f + (d ? -1 : 0)], y = d == (1 == v.level), x = y ? v.from : v.to,
                                            w = y ? "after" : "before";
                                        return r.ch == x && r.sticky == w ? t : new Ei(new st(r.line, x, w), head)
                                    }(e, new Ei(gt(l, _), head)), ho(l, Pi(e, L, f), Q)
                                }
                            }

                            var w = o.wrapper.getBoundingClientRect(), C = 0;

                            function k(t) {
                                e.state.selectingText = !1, C = 1 / 0, t && (_e(t), o.input.focus()), xe(o.wrapper.ownerDocument, "mousemove", S), xe(o.wrapper.ownerDocument, "mouseup", M), l.history.lastSelOrigin = null
                            }

                            var S = hi(e, (function (t) {
                                0 !== t.buttons && Ae(t) ? function t(r) {
                                    var c = ++C, d = wn(e, r, !0, "rectangle" == n.unit);
                                    if (d) if (0 != ct(d, y)) {
                                        e.curOp.focus = I(), x(d);
                                        var f = Rn(o, l);
                                        (d.line >= f.to || d.line < f.from) && setTimeout(hi(e, (function () {
                                            C == c && t(r)
                                        })), 150)
                                    } else {
                                        var h = r.clientY < w.top ? -20 : r.clientY > w.bottom ? 20 : 0;
                                        h && setTimeout(hi(e, (function () {
                                            C == c && (o.scroller.scrollTop += h, t(r))
                                        })), 50)
                                    }
                                }(t) : k(t)
                            })), M = hi(e, k);
                            e.state.selectingText = M, be(o.wrapper.ownerDocument, "mousemove", S), be(o.wrapper.ownerDocument, "mouseup", M)
                        }(e, n, t, l)
                    }(t, n, o, e) : Ne(e) == r.scroller && _e(e) : 2 == button ? (n && lo(t.doc, n), setTimeout((function () {
                        return r.input.focus()
                    }), 20)) : 3 == button && (N ? t.display.input.onContextMenu(e) : Fn(t)))
                }
            }

            function za(e, t, r) {
                if ("char" == r) return new Ei(t, t);
                if ("word" == r) return e.findWordAt(t);
                if ("line" == r) return new Ei(st(t.line, 0), gt(e.doc, st(t.line + 1, 0)));
                var n = r(e, t);
                return new Ei(n.from, n.to)
            }

            function Na(e, t, r, n) {
                var o, l;
                if (t.touches) o = t.touches[0].clientX, l = t.touches[0].clientY; else try {
                    o = t.clientX, l = t.clientY
                } catch (e) {
                    return !1
                }
                if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                n && _e(t);
                var c = e.display, d = c.lineDiv.getBoundingClientRect();
                if (l > d.bottom || !Se(e, r)) return Te(t);
                l -= d.top - c.viewOffset;
                for (var i = 0; i < e.display.gutterSpecs.length; ++i) {
                    var g = c.gutters.childNodes[i];
                    if (g && g.getBoundingClientRect().right >= o) return we(e, r, e, ot(e.doc, l), e.display.gutterSpecs[i].className, t), Te(t)
                }
            }

            function Aa(e, t) {
                return Na(e, t, "gutterClick", !0)
            }

            function Oa(e, t) {
                Dr(e.display, t) || function (e, t) {
                    return !!Se(e, "gutterContextMenu") && Na(e, t, "gutterContextMenu", !1)
                }(e, t) || Ce(e, t, "contextmenu") || N || e.display.input.onContextMenu(t)
            }

            function Da(e) {
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Qr(e)
            }

            La.prototype.compare = function (time, e, button) {
                return this.time + 400 > time && 0 == ct(e, this.pos) && button == this.button
            };
            var Wa = {
                toString: function () {
                    return "CodeMirror.Init"
                }
            }, Fa = {}, Ea = {};

            function Pa(e, t, r) {
                if (!t != !(r && r != Wa)) {
                    var n = e.display.dragFunctions, o = t ? be : xe;
                    o(e.display.scroller, "dragstart", n.start), o(e.display.scroller, "dragenter", n.enter), o(e.display.scroller, "dragover", n.over), o(e.display.scroller, "dragleave", n.leave), o(e.display.scroller, "drop", n.drop)
                }
            }

            function Ha(e) {
                e.options.lineWrapping ? (R(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (D(e.display.wrapper, "CodeMirror-wrap"), er(e)), xn(e), kn(e), Qr(e), setTimeout((function () {
                    return Jn(e)
                }), 100)
            }

            function Ia(e, t) {
                var r = this;
                if (!(this instanceof Ia)) return new Ia(e, t);
                this.options = t = t ? U(t) : {}, U(Fa, t, !1);
                var n = t.value;
                "string" == typeof n ? n = new Go(n, t.mode, null, t.lineSeparator, t.direction) : t.mode && (n.modeOption = t.mode), this.doc = n;
                var input = new Ia.inputStyles[t.inputStyle](this), o = this.display = new zi(e, n, input, t);
                for (var l in o.wrapper.CodeMirror = this, Da(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), ri(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new $,
                    keySeq: null,
                    specialChars: null
                }, t.autofocus && !S && o.input.focus(), c && d < 11 && setTimeout((function () {
                    return r.display.input.reset(!0)
                }), 20), function (e) {
                    var t = e.display;
                    be(t.scroller, "mousedown", hi(e, Ta)), be(t.scroller, "dblclick", c && d < 11 ? hi(e, (function (t) {
                        if (!Ce(e, t)) {
                            var r = wn(e, t);
                            if (r && !Aa(e, t) && !Dr(e.display, t)) {
                                _e(t);
                                var n = e.findWordAt(r);
                                lo(e.doc, n.anchor, n.head)
                            }
                        }
                    })) : function (t) {
                        return Ce(e, t) || _e(t)
                    }), be(t.scroller, "contextmenu", (function (t) {
                        return Oa(e, t)
                    })), be(t.input.getField(), "contextmenu", (function (r) {
                        t.scroller.contains(r.target) || Oa(e, r)
                    }));
                    var r, n = {end: 0};

                    function o() {
                        t.activeTouch && (r = setTimeout((function () {
                            return t.activeTouch = null
                        }), 1e3), (n = t.activeTouch).end = +new Date)
                    }

                    function l(e, t) {
                        if (null == t.left) return !0;
                        var r = t.left - e.left, n = t.top - e.top;
                        return r * r + n * n > 400
                    }

                    be(t.scroller, "touchstart", (function (o) {
                        if (!Ce(e, o) && !function (e) {
                            if (1 != e.touches.length) return !1;
                            var t = e.touches[0];
                            return t.radiusX <= 1 && t.radiusY <= 1
                        }(o) && !Aa(e, o)) {
                            t.input.ensurePolled(), clearTimeout(r);
                            var l = +new Date;
                            t.activeTouch = {
                                start: l,
                                moved: !1,
                                prev: l - n.end <= 300 ? n : null
                            }, 1 == o.touches.length && (t.activeTouch.left = o.touches[0].pageX, t.activeTouch.top = o.touches[0].pageY)
                        }
                    })), be(t.scroller, "touchmove", (function () {
                        t.activeTouch && (t.activeTouch.moved = !0)
                    })), be(t.scroller, "touchend", (function (r) {
                        var n = t.activeTouch;
                        if (n && !Dr(t, r) && null != n.left && !n.moved && new Date - n.start < 300) {
                            var c, d = e.coordsChar(t.activeTouch, "page");
                            c = !n.prev || l(n, n.prev) ? new Ei(d, d) : !n.prev.prev || l(n, n.prev.prev) ? e.findWordAt(d) : new Ei(st(d.line, 0), gt(e.doc, st(d.line + 1, 0))), e.setSelection(c.anchor, c.head), e.focus(), _e(r)
                        }
                        o()
                    })), be(t.scroller, "touchcancel", o), be(t.scroller, "scroll", (function () {
                        t.scroller.clientHeight && ($n(e, t.scroller.scrollTop), Xn(e, t.scroller.scrollLeft, !0), we(e, "scroll", e))
                    })), be(t.scroller, "mousewheel", (function (t) {
                        return Wi(e, t)
                    })), be(t.scroller, "DOMMouseScroll", (function (t) {
                        return Wi(e, t)
                    })), be(t.wrapper, "scroll", (function () {
                        return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                    })), t.dragFunctions = {
                        enter: function (t) {
                            Ce(e, t) || ze(t)
                        }, over: function (t) {
                            Ce(e, t) || (function (e, t) {
                                var r = wn(e, t);
                                if (r) {
                                    var n = document.createDocumentFragment();
                                    Nn(e, r, n), e.display.dragCursor || (e.display.dragCursor = E("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), F(e.display.dragCursor, n)
                                }
                            }(e, t), ze(t))
                        }, start: function (t) {
                            return function (e, t) {
                                if (c && (!e.state.draggingText || +new Date - Uo < 100)) ze(t); else if (!Ce(e, t) && !Dr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !y)) {
                                    var img = E("img", null, null, "position: fixed; left: 0; top: 0;");
                                    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", v && (img.width = img.height = 1, e.display.wrapper.appendChild(img), img._top = img.offsetTop), t.dataTransfer.setDragImage(img, 0, 0), v && img.parentNode.removeChild(img)
                                }
                            }(e, t)
                        }, drop: hi(e, Vo), leave: function (t) {
                            Ce(e, t) || $o(e)
                        }
                    };
                    var f = t.input.getField();
                    be(f, "keyup", (function (t) {
                        return ka.call(e, t)
                    })), be(f, "keydown", hi(e, Ca)), be(f, "keypress", hi(e, Sa)), be(f, "focus", (function (t) {
                        return En(e, t)
                    })), be(f, "blur", (function (t) {
                        return Pn(e, t)
                    }))
                }(this), Yo(), ii(this), this.curOp.forceUpdate = !0, Ki(this, n), t.autofocus && !S || this.hasFocus() ? setTimeout((function () {
                    r.hasFocus() && !r.state.focused && En(r)
                }), 20) : Pn(this), Ea) Ea.hasOwnProperty(l) && Ea[l](this, t[l], Wa);
                Mi(this), t.finishInit && t.finishInit(this);
                for (var i = 0; i < Ra.length; ++i) Ra[i](this);
                oi(this), f && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
            }

            Ia.defaults = Fa, Ia.optionHandlers = Ea;
            var Ra = [];

            function Ba(e, t, r, n) {
                var o, l = e.doc;
                null == r && (r = "add"), "smart" == r && (l.mode.indent ? o = Ct(e, t).state : r = "prev");
                var c = e.options.tabSize, line = Je(l, t), d = V(line.text, null, c);
                line.stateAfter && (line.stateAfter = null);
                var f, h = line.text.match(/^\s*/)[0];
                if (n || /\S/.test(line.text)) {
                    if ("smart" == r && ((f = l.mode.indent(o, line.text.slice(h.length), line.text)) == X || f > 150)) {
                        if (!n) return;
                        r = "prev"
                    }
                } else f = 0, r = "not";
                "prev" == r ? f = t > l.first ? V(Je(l, t - 1).text, null, c) : 0 : "add" == r ? f = d + e.options.indentUnit : "subtract" == r ? f = d - e.options.indentUnit : "number" == typeof r && (f = d + r), f = Math.max(0, f);
                var m = "", v = 0;
                if (e.options.indentWithTabs) for (var i = Math.floor(f / c); i; --i) v += c, m += "\t";
                if (v < f && (m += te(f - v)), m != h) return To(l, m, st(t, 0), st(t, h.length), "+input"), line.stateAfter = null, !0;
                for (var y = 0; y < l.sel.ranges.length; y++) {
                    var x = l.sel.ranges[y];
                    if (x.head.line == t && x.head.ch < h.length) {
                        var w = st(t, h.length);
                        co(l, y, new Ei(w, w));
                        break
                    }
                }
            }

            Ia.defineInitHook = function (e) {
                return Ra.push(e)
            };
            var qa = null;

            function ja(e) {
                qa = e
            }

            function Ga(e, t, r, n, o) {
                var l = e.doc;
                e.display.shift = !1, n || (n = l.sel);
                var c = +new Date - 200, d = "paste" == o || e.state.pasteIncoming > c, f = He(t), h = null;
                if (d && n.ranges.length > 1) if (qa && qa.text.join("\n") == t) {
                    if (n.ranges.length % qa.text.length == 0) {
                        h = [];
                        for (var i = 0; i < qa.text.length; i++) h.push(l.splitLines(qa.text[i]))
                    }
                } else f.length == n.ranges.length && e.options.pasteLinesPerSelection && (h = map(f, (function (e) {
                    return [e]
                })));
                for (var m = e.curOp.updateInput, v = n.ranges.length - 1; v >= 0; v--) {
                    var y = n.ranges[v], x = y.from(), w = y.to();
                    y.empty() && (r && r > 0 ? x = st(x.line, x.ch - r) : e.state.overwrite && !d ? w = st(w.line, Math.min(Je(l, w.line).text.length, w.ch + re(f).length)) : d && qa && qa.lineWise && qa.text.join("\n") == f.join("\n") && (x = w = st(x.line, 0)));
                    var C = {
                        from: x,
                        to: w,
                        text: h ? h[v % h.length] : f,
                        origin: o || (d ? "paste" : e.state.cutIncoming > c ? "cut" : "+input")
                    };
                    ko(e.doc, C), yr(e, "inputRead", e, C)
                }
                t && !d && Va(e, t), jn(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = m), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
            }

            function Ua(e, t) {
                var r = e.clipboardData && e.clipboardData.getData("Text");
                if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || fi(t, (function () {
                    return Ga(t, r, 0, null, "paste")
                })), !0
            }

            function Va(e, t) {
                if (e.options.electricChars && e.options.smartIndent) for (var r = e.doc.sel, i = r.ranges.length - 1; i >= 0; i--) {
                    var n = r.ranges[i];
                    if (!(n.head.ch > 100 || i && r.ranges[i - 1].head.line == n.head.line)) {
                        var o = e.getModeAt(n.head), l = !1;
                        if (o.electricChars) {
                            for (var c = 0; c < o.electricChars.length; c++) if (t.indexOf(o.electricChars.charAt(c)) > -1) {
                                l = Ba(e, n.head.line, "smart");
                                break
                            }
                        } else o.electricInput && o.electricInput.test(Je(e.doc, n.head.line).text.slice(0, n.head.ch)) && (l = Ba(e, n.head.line, "smart"));
                        l && yr(e, "electricInput", e, n.head.line)
                    }
                }
            }

            function $a(e) {
                for (var text = [], t = [], i = 0; i < e.doc.sel.ranges.length; i++) {
                    var line = e.doc.sel.ranges[i].head.line, r = {anchor: st(line, 0), head: st(line + 1, 0)};
                    t.push(r), text.push(e.getRange(r.anchor, r.head))
                }
                return {text: text, ranges: t}
            }

            function Ka(e, t, r, n) {
                e.setAttribute("autocorrect", r ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t)
            }

            function Xa() {
                var e = E("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    div = E("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return f ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), C && (e.style.border = "1px solid black"), Ka(e), div
            }

            function Ya(e, t, r, n, o) {
                var l = t, c = r, d = Je(e, t.line), f = o && "rtl" == e.direction ? -r : r;

                function h(l) {
                    var c, h;
                    if ("codepoint" == n) {
                        var m = d.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
                        if (isNaN(m)) c = null; else {
                            var v = r > 0 ? m >= 55296 && m < 56320 : m >= 56320 && m < 57343;
                            c = new st(t.line, Math.max(0, Math.min(d.text.length, t.ch + r * (v ? 2 : 1))), -r)
                        }
                    } else c = o ? function (e, line, t, r) {
                        var n = ge(line, e.doc.direction);
                        if (!n) return da(line, t, r);
                        t.ch >= line.text.length ? (t.ch = line.text.length, t.sticky = "before") : t.ch <= 0 && (t.ch = 0, t.sticky = "after");
                        var o = pe(n, t.ch, t.sticky), l = n[o];
                        if ("ltr" == e.doc.direction && l.level % 2 == 0 && (r > 0 ? l.to > t.ch : l.from < t.ch)) return da(line, t, r);
                        var c, d = function (e, t) {
                            return ua(line, e instanceof st ? e.ch : e, t)
                        }, f = function (t) {
                            return e.options.lineWrapping ? (c = c || jr(e, line), un(e, line, c, t)) : {
                                begin: 0,
                                end: line.text.length
                            }
                        }, h = f("before" == t.sticky ? d(t, -1) : t.ch);
                        if ("rtl" == e.doc.direction || 1 == l.level) {
                            var m = 1 == l.level == r < 0, v = d(t, m ? 1 : -1);
                            if (null != v && (m ? v <= l.to && v <= h.end : v >= l.from && v >= h.begin)) {
                                var y = m ? "before" : "after";
                                return new st(t.line, v, y)
                            }
                        }
                        var x = function (e, r, o) {
                            for (var l = function (e, r) {
                                return r ? new st(t.line, d(e, 1), "before") : new st(t.line, e, "after")
                            }; e >= 0 && e < n.length; e += r) {
                                var c = n[e], f = r > 0 == (1 != c.level), h = f ? o.begin : d(o.end, -1);
                                if (c.from <= h && h < c.to) return l(h, f);
                                if (h = f ? c.from : d(c.to, -1), o.begin <= h && h < o.end) return l(h, f)
                            }
                        }, w = x(o + r, r, h);
                        if (w) return w;
                        var C = r > 0 ? h.end : d(h.begin, -1);
                        return null == C || r > 0 && C == line.text.length || !(w = x(r > 0 ? 0 : n.length - 1, r, f(C))) ? null : w
                    }(e.cm, d, t, r) : da(d, t, r);
                    if (null == c) {
                        if (l || (h = t.line + f) < e.first || h >= e.first + e.size || (t = new st(h, t.ch, t.sticky), !(d = Je(e, h)))) return !1;
                        t = fa(o, e.cm, d, t.line, f)
                    } else t = c;
                    return !0
                }

                if ("char" == n || "codepoint" == n) h(); else if ("column" == n) h(!0); else if ("word" == n || "group" == n) for (var m = null, v = "group" == n, y = e.cm && e.cm.getHelper(t, "wordChars"), x = !0; !(r < 0) || h(!x); x = !1) {
                    var w = d.text.charAt(t.ch) || "\n",
                        C = le(w, y) ? "w" : v && "\n" == w ? "n" : !v || /\s/.test(w) ? null : "p";
                    if (!v || x || C || (C = "s"), m && m != C) {
                        r < 0 && (r = 1, h(), t.sticky = "after");
                        break
                    }
                    if (C && (m = C), r > 0 && !h(!x)) break
                }
                var k = yo(e, t, l, c, !0);
                return ut(l, k) && (k.hitSide = !0), k
            }

            function Qa(e, t, r, n) {
                var o, l, c = e.doc, d = t.left;
                if ("page" == n) {
                    var f = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        h = Math.max(f - .5 * mn(e.display), 3);
                    o = (r > 0 ? t.bottom : t.top) + r * h
                } else "line" == n && (o = r > 0 ? t.bottom + 3 : t.top - 3);
                for (; (l = sn(e, d, o)).outside;) {
                    if (r < 0 ? o <= 0 : o >= c.height) {
                        l.hitSide = !0;
                        break
                    }
                    o += 5 * r
                }
                return l
            }

            var Za = function (e) {
                this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new $, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
            };

            function Ja(e, t) {
                var view = qr(e, t.line);
                if (!view || view.hidden) return null;
                var line = Je(e.doc, t.line), r = Rr(view, line, t.line), n = ge(line, e.doc.direction), o = "left";
                n && (o = pe(n, t.ch) % 2 ? "right" : "left");
                var l = $r(r.map, t.ch, o);
                return l.offset = "right" == l.collapse ? l.end : l.start, l
            }

            function el(e, t) {
                return t && (e.bad = !0), e
            }

            function tl(e, t, r) {
                var n;
                if (t == e.display.lineDiv) {
                    if (!(n = e.display.lineDiv.childNodes[r])) return el(e.clipPos(st(e.display.viewTo - 1)), !0);
                    t = null, r = 0
                } else for (n = t; ; n = n.parentNode) {
                    if (!n || n == e.display.lineDiv) return null;
                    if (n.parentNode && n.parentNode == e.display.lineDiv) break
                }
                for (var i = 0; i < e.display.view.length; i++) {
                    var o = e.display.view[i];
                    if (o.node == n) return rl(o, t, r)
                }
            }

            function rl(e, t, r) {
                var n = e.text.firstChild, o = !1;
                if (!t || !H(n, t)) return el(st(it(e.line), 0), !0);
                if (t == n && (o = !0, t = n.childNodes[r], r = 0, !t)) {
                    var line = e.rest ? re(e.rest) : e.line;
                    return el(st(it(line), line.text.length), o)
                }
                var l = 3 == t.nodeType ? t : null, c = t;
                for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, r && (r = l.nodeValue.length)); c.parentNode != n;) c = c.parentNode;
                var d = e.measure, f = d.maps;

                function h(t, r, n) {
                    for (var i = -1; i < (f ? f.length : 0); i++) for (var map = i < 0 ? d.map : f[i], o = 0; o < map.length; o += 3) {
                        var l = map[o + 2];
                        if (l == t || l == r) {
                            var line = it(i < 0 ? e.line : e.rest[i]), c = map[o] + n;
                            return (n < 0 || l != t) && (c = map[o + (n ? 1 : 0)]), st(line, c)
                        }
                    }
                }

                var m = h(l, c, r);
                if (m) return el(m, o);
                for (var v = c.nextSibling, y = l ? l.nodeValue.length - r : 0; v; v = v.nextSibling) {
                    if (m = h(v, v.firstChild, 0)) return el(st(m.line, m.ch - y), o);
                    y += v.textContent.length
                }
                for (var x = c.previousSibling, w = r; x; x = x.previousSibling) {
                    if (m = h(x, x.firstChild, -1)) return el(st(m.line, m.ch + w), o);
                    w += x.textContent.length
                }
            }

            Za.prototype.init = function (e) {
                var t = this, input = this, r = input.cm, div = input.div = e.lineDiv;

                function n(e) {
                    for (var t = e.target; t; t = t.parentNode) {
                        if (t == div) return !0;
                        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break
                    }
                    return !1
                }

                function o(e) {
                    if (n(e) && !Ce(r, e)) {
                        if (r.somethingSelected()) ja({
                            lineWise: !1,
                            text: r.getSelections()
                        }), "cut" == e.type && r.replaceSelection("", null, "cut"); else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = $a(r);
                            ja({lineWise: !0, text: t.text}), "cut" == e.type && r.operation((function () {
                                r.setSelections(t.ranges, 0, Y), r.replaceSelection("", null, "cut")
                            }))
                        }
                        if (e.clipboardData) {
                            e.clipboardData.clearData();
                            var content = qa.text.join("\n");
                            if (e.clipboardData.setData("Text", content), e.clipboardData.getData("Text") == content) return void e.preventDefault()
                        }
                        var o = Xa(), l = o.firstChild;
                        r.display.lineSpace.insertBefore(o, r.display.lineSpace.firstChild), l.value = qa.text.join("\n");
                        var c = document.activeElement;
                        j(l), setTimeout((function () {
                            r.display.lineSpace.removeChild(o), c.focus(), c == div && input.showPrimarySelection()
                        }), 50)
                    }
                }

                Ka(div, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), be(div, "paste", (function (e) {
                    !n(e) || Ce(r, e) || Ua(e, r) || d <= 11 && setTimeout(hi(r, (function () {
                        return t.updateFromDOM()
                    })), 20)
                })), be(div, "compositionstart", (function (e) {
                    t.composing = {data: e.data, done: !1}
                })), be(div, "compositionupdate", (function (e) {
                    t.composing || (t.composing = {data: e.data, done: !1})
                })), be(div, "compositionend", (function (e) {
                    t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
                })), be(div, "touchstart", (function () {
                    return input.forceCompositionEnd()
                })), be(div, "input", (function () {
                    t.composing || t.readFromDOMSoon()
                })), be(div, "copy", o), be(div, "cut", o)
            }, Za.prototype.screenReaderLabelChanged = function (label) {
                label ? this.div.setAttribute("aria-label", label) : this.div.removeAttribute("aria-label")
            }, Za.prototype.prepareSelection = function () {
                var e = zn(this.cm, !1);
                return e.focus = document.activeElement == this.div, e
            }, Za.prototype.showSelection = function (e, t) {
                e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            }, Za.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }, Za.prototype.showPrimarySelection = function () {
                var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(), o = n.from(), l = n.to();
                if (t.display.viewTo == t.display.viewFrom || o.line >= t.display.viewTo || l.line < t.display.viewFrom) e.removeAllRanges(); else {
                    var c = tl(t, e.anchorNode, e.anchorOffset), d = tl(t, e.focusNode, e.focusOffset);
                    if (!c || c.bad || !d || d.bad || 0 != ct(pt(c, d), o) || 0 != ct(ht(c, d), l)) {
                        var view = t.display.view,
                            f = o.line >= t.display.viewFrom && Ja(t, o) || {node: view[0].measure.map[2], offset: 0},
                            h = l.line < t.display.viewTo && Ja(t, l);
                        if (!h) {
                            var m = view[view.length - 1].measure, map = m.maps ? m.maps[m.maps.length - 1] : m.map;
                            h = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
                        }
                        if (f && h) {
                            var v, y = e.rangeCount && e.getRangeAt(0);
                            try {
                                v = O(f.node, f.offset, h.offset, h.node)
                            } catch (e) {
                            }
                            v && (!r && t.state.focused ? (e.collapse(f.node, f.offset), v.collapsed || (e.removeAllRanges(), e.addRange(v))) : (e.removeAllRanges(), e.addRange(v)), y && null == e.anchorNode ? e.addRange(y) : r && this.startGracePeriod()), this.rememberSelection()
                        } else e.removeAllRanges()
                    }
                }
            }, Za.prototype.startGracePeriod = function () {
                var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout((function () {
                    e.gracePeriod = !1, e.selectionChanged() && e.cm.operation((function () {
                        return e.cm.curOp.selectionChanged = !0
                    }))
                }), 20)
            }, Za.prototype.showMultipleSelections = function (e) {
                F(this.cm.display.cursorDiv, e.cursors), F(this.cm.display.selectionDiv, e.selection)
            }, Za.prototype.rememberSelection = function () {
                var e = this.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
            }, Za.prototype.selectionInEditor = function () {
                var e = this.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return H(this.div, t)
            }, Za.prototype.focus = function () {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && document.activeElement == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus())
            }, Za.prototype.blur = function () {
                this.div.blur()
            }, Za.prototype.getField = function () {
                return this.div
            }, Za.prototype.supportsTouch = function () {
                return !0
            }, Za.prototype.receivedFocus = function () {
                var input = this;
                this.selectionInEditor() ? this.pollSelection() : fi(this.cm, (function () {
                    return input.cm.curOp.selectionChanged = !0
                })), this.polling.set(this.cm.options.pollInterval, (function e() {
                    input.cm.state.focused && (input.pollSelection(), input.polling.set(input.cm.options.pollInterval, e))
                }))
            }, Za.prototype.selectionChanged = function () {
                var e = this.getSelection();
                return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
            }, Za.prototype.pollSelection = function () {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var e = this.getSelection(), t = this.cm;
                    if (k && m && this.cm.display.gutterSpecs.length && function (e) {
                        for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                        return !1
                    }(e.anchorNode)) return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var r = tl(t, e.anchorNode, e.anchorOffset), head = tl(t, e.focusNode, e.focusOffset);
                        r && head && fi(t, (function () {
                            ho(t.doc, Hi(r, head), Y), (r.bad || head.bad) && (t.curOp.selectionChanged = !0)
                        }))
                    }
                }
            }, Za.prototype.pollContent = function () {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                var e, t, r, n = this.cm, o = n.display, l = n.doc.sel.primary(), c = l.from(), d = l.to();
                if (0 == c.ch && c.line > n.firstLine() && (c = st(c.line - 1, Je(n.doc, c.line - 1).length)), d.ch == Je(n.doc, d.line).text.length && d.line < n.lastLine() && (d = st(d.line + 1, 0)), c.line < o.viewFrom || d.line > o.viewTo - 1) return !1;
                c.line == o.viewFrom || 0 == (e = Cn(n, c.line)) ? (t = it(o.view[0].line), r = o.view[0].node) : (t = it(o.view[e].line), r = o.view[e - 1].node.nextSibling);
                var f, h, m = Cn(n, d.line);
                if (m == o.view.length - 1 ? (f = o.viewTo - 1, h = o.lineDiv.lastChild) : (f = it(o.view[m + 1].line) - 1, h = o.view[m + 1].node.previousSibling), !r) return !1;
                for (var v = n.doc.splitLines(function (e, t, r, n, o) {
                    var text = "", l = !1, c = e.doc.lineSeparator(), d = !1;

                    function f() {
                        l && (text += c, d && (text += c), l = d = !1)
                    }

                    function h(e) {
                        e && (f(), text += e)
                    }

                    function m(t) {
                        if (1 == t.nodeType) {
                            var r = t.getAttribute("cm-text");
                            if (r) return void h(r);
                            var v, y = t.getAttribute("cm-marker");
                            if (y) {
                                var x = e.findMarks(st(n, 0), st(o + 1, 0), (C = +y, function (marker) {
                                    return marker.id == C
                                }));
                                return void (x.length && (v = x[0].find(0)) && h(et(e.doc, v.from, v.to).join(c)))
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            var w = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                            if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                            w && f();
                            for (var i = 0; i < t.childNodes.length; i++) m(t.childNodes[i]);
                            /^(pre|p)$/i.test(t.nodeName) && (d = !0), w && (l = !0)
                        } else 3 == t.nodeType && h(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                        var C
                    }

                    for (; m(t), t != r;) t = t.nextSibling, d = !1;
                    return text
                }(n, r, h, t, f)), y = et(n.doc, st(t, 0), st(f, Je(n.doc, f).text.length)); v.length > 1 && y.length > 1;) if (re(v) == re(y)) v.pop(), y.pop(), f--; else {
                    if (v[0] != y[0]) break;
                    v.shift(), y.shift(), t++
                }
                for (var x = 0, w = 0, C = v[0], k = y[0], S = Math.min(C.length, k.length); x < S && C.charCodeAt(x) == k.charCodeAt(x);) ++x;
                for (var M = re(v), _ = re(y), L = Math.min(M.length - (1 == v.length ? x : 0), _.length - (1 == y.length ? x : 0)); w < L && M.charCodeAt(M.length - w - 1) == _.charCodeAt(_.length - w - 1);) ++w;
                if (1 == v.length && 1 == y.length && t == c.line) for (; x && x > c.ch && M.charCodeAt(M.length - w - 1) == _.charCodeAt(_.length - w - 1);) x--, w++;
                v[v.length - 1] = M.slice(0, M.length - w).replace(/^\u200b+/, ""), v[0] = v[0].slice(x).replace(/\u200b+$/, "");
                var T = st(t, x), z = st(f, y.length ? re(y).length - w : 0);
                return v.length > 1 || v[0] || ct(T, z) ? (To(n.doc, v, T, z, "+input"), !0) : void 0
            }, Za.prototype.ensurePolled = function () {
                this.forceCompositionEnd()
            }, Za.prototype.reset = function () {
                this.forceCompositionEnd()
            }, Za.prototype.forceCompositionEnd = function () {
                this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
            }, Za.prototype.readFromDOMSoon = function () {
                var e = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function () {
                    if (e.readDOMTimeout = null, e.composing) {
                        if (!e.composing.done) return;
                        e.composing = null
                    }
                    e.updateFromDOM()
                }), 80))
            }, Za.prototype.updateFromDOM = function () {
                var e = this;
                !this.cm.isReadOnly() && this.pollContent() || fi(this.cm, (function () {
                    return kn(e.cm)
                }))
            }, Za.prototype.setUneditable = function (e) {
                e.contentEditable = "false"
            }, Za.prototype.onKeyPress = function (e) {
                0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || hi(this.cm, Ga)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
            }, Za.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String("nocursor" != e)
            }, Za.prototype.onContextMenu = function () {
            }, Za.prototype.resetPosition = function () {
            }, Za.prototype.needsContentAttribute = !0;
            var nl = function (e) {
                this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new $, this.hasSelection = !1, this.composing = null
            };
            nl.prototype.init = function (e) {
                var t = this, input = this, r = this.cm;
                this.createField(e);
                var n = this.textarea;

                function o(e) {
                    if (!Ce(r, e)) {
                        if (r.somethingSelected()) ja({lineWise: !1, text: r.getSelections()}); else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = $a(r);
                            ja({
                                lineWise: !0,
                                text: t.text
                            }), "cut" == e.type ? r.setSelections(t.ranges, null, Y) : (input.prevInput = "", n.value = t.text.join("\n"), j(n))
                        }
                        "cut" == e.type && (r.state.cutIncoming = +new Date)
                    }
                }

                e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), C && (n.style.width = "0px"), be(n, "input", (function () {
                    c && d >= 9 && t.hasSelection && (t.hasSelection = null), input.poll()
                })), be(n, "paste", (function (e) {
                    Ce(r, e) || Ua(e, r) || (r.state.pasteIncoming = +new Date, input.fastPoll())
                })), be(n, "cut", o), be(n, "copy", o), be(e.scroller, "paste", (function (t) {
                    if (!Dr(e, t) && !Ce(r, t)) {
                        if (!n.dispatchEvent) return r.state.pasteIncoming = +new Date, void input.focus();
                        var o = new Event("paste");
                        o.clipboardData = t.clipboardData, n.dispatchEvent(o)
                    }
                })), be(e.lineSpace, "selectstart", (function (t) {
                    Dr(e, t) || _e(t)
                })), be(n, "compositionstart", (function () {
                    var e = r.getCursor("from");
                    input.composing && input.composing.range.clear(), input.composing = {
                        start: e,
                        range: r.markText(e, r.getCursor("to"), {className: "CodeMirror-composing"})
                    }
                })), be(n, "compositionend", (function () {
                    input.composing && (input.poll(), input.composing.range.clear(), input.composing = null)
                }))
            }, nl.prototype.createField = function (e) {
                this.wrapper = Xa(), this.textarea = this.wrapper.firstChild
            }, nl.prototype.screenReaderLabelChanged = function (label) {
                label ? this.textarea.setAttribute("aria-label", label) : this.textarea.removeAttribute("aria-label")
            }, nl.prototype.prepareSelection = function () {
                var e = this.cm, t = e.display, r = e.doc, n = zn(e);
                if (e.options.moveInputWithCursor) {
                    var o = on(e, r.sel.primary().head, "div"), l = t.wrapper.getBoundingClientRect(),
                        c = t.lineDiv.getBoundingClientRect();
                    n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, o.top + c.top - l.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, o.left + c.left - l.left))
                }
                return n
            }, nl.prototype.showSelection = function (e) {
                var t = this.cm.display;
                F(t.cursorDiv, e.cursors), F(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
            }, nl.prototype.reset = function (e) {
                if (!this.contextMenuPending && !this.composing) {
                    var t = this.cm;
                    if (t.somethingSelected()) {
                        this.prevInput = "";
                        var content = t.getSelection();
                        this.textarea.value = content, t.state.focused && j(this.textarea), c && d >= 9 && (this.hasSelection = content)
                    } else e || (this.prevInput = this.textarea.value = "", c && d >= 9 && (this.hasSelection = null))
                }
            }, nl.prototype.getField = function () {
                return this.textarea
            }, nl.prototype.supportsTouch = function () {
                return !1
            }, nl.prototype.focus = function () {
                if ("nocursor" != this.cm.options.readOnly && (!S || I() != this.textarea)) try {
                    this.textarea.focus()
                } catch (e) {
                }
            }, nl.prototype.blur = function () {
                this.textarea.blur()
            }, nl.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }, nl.prototype.receivedFocus = function () {
                this.slowPoll()
            }, nl.prototype.slowPoll = function () {
                var e = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function () {
                    e.poll(), e.cm.state.focused && e.slowPoll()
                }))
            }, nl.prototype.fastPoll = function () {
                var e = !1, input = this;
                input.pollingFast = !0, input.polling.set(20, (function p() {
                    input.poll() || e ? (input.pollingFast = !1, input.slowPoll()) : (e = !0, input.polling.set(60, p))
                }))
            }, nl.prototype.poll = function () {
                var e = this, t = this.cm, input = this.textarea, r = this.prevInput;
                if (this.contextMenuPending || !t.state.focused || Ie(input) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                var text = input.value;
                if (text == r && !t.somethingSelected()) return !1;
                if (c && d >= 9 && this.hasSelection === text || M && /[\uf700-\uf7ff]/.test(text)) return t.display.input.reset(), !1;
                if (t.doc.sel == t.display.selForContextMenu) {
                    var n = text.charCodeAt(0);
                    if (8203 != n || r || (r = "​"), 8666 == n) return this.reset(), this.cm.execCommand("undo")
                }
                for (var o = 0, l = Math.min(r.length, text.length); o < l && r.charCodeAt(o) == text.charCodeAt(o);) ++o;
                return fi(t, (function () {
                    Ga(t, text.slice(o), r.length - o, null, e.composing ? "*compose" : null), text.length > 1e3 || text.indexOf("\n") > -1 ? input.value = e.prevInput = "" : e.prevInput = text, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
                })), !0
            }, nl.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }, nl.prototype.onKeyPress = function () {
                c && d >= 9 && (this.hasSelection = null), this.fastPoll()
            }, nl.prototype.onContextMenu = function (e) {
                var input = this, t = input.cm, r = t.display, n = input.textarea;
                input.contextMenuPending && input.contextMenuPending();
                var o = wn(t, e), l = r.scroller.scrollTop;
                if (o && !v) {
                    t.options.resetSelectionOnContextMenu && -1 == t.doc.sel.contains(o) && hi(t, ho)(t.doc, Hi(o), Y);
                    var h, m = n.style.cssText, y = input.wrapper.style.cssText,
                        x = input.wrapper.offsetParent.getBoundingClientRect();
                    if (input.wrapper.style.cssText = "position: static", n.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - x.top - 5) + "px; left: " + (e.clientX - x.left - 5) + "px;\n      z-index: 1000; background: " + (c ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", f && (h = window.scrollY), r.input.focus(), f && window.scrollTo(null, h), r.input.reset(), t.somethingSelected() || (n.value = input.prevInput = " "), input.contextMenuPending = k, r.selForContextMenu = t.doc.sel, clearTimeout(r.detectingSelectAll), c && d >= 9 && C(), N) {
                        ze(e);
                        var w = function () {
                            xe(window, "mouseup", w), setTimeout(k, 20)
                        };
                        be(window, "mouseup", w)
                    } else setTimeout(k, 50)
                }

                function C() {
                    if (null != n.selectionStart) {
                        var e = t.somethingSelected(), o = "​" + (e ? n.value : "");
                        n.value = "⇚", n.value = o, input.prevInput = e ? "" : "​", n.selectionStart = 1, n.selectionEnd = o.length, r.selForContextMenu = t.doc.sel
                    }
                }

                function k() {
                    if (input.contextMenuPending == k && (input.contextMenuPending = !1, input.wrapper.style.cssText = y, n.style.cssText = m, c && d < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = l), null != n.selectionStart)) {
                        (!c || c && d < 9) && C();
                        var i = 0, e = function () {
                            r.selForContextMenu == t.doc.sel && 0 == n.selectionStart && n.selectionEnd > 0 && "​" == input.prevInput ? hi(t, wo)(t) : i++ < 10 ? r.detectingSelectAll = setTimeout(e, 500) : (r.selForContextMenu = null, r.input.reset())
                        };
                        r.detectingSelectAll = setTimeout(e, 200)
                    }
                }
            }, nl.prototype.readOnlyChanged = function (e) {
                e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e
            }, nl.prototype.setUneditable = function () {
            }, nl.prototype.needsContentAttribute = !1, function (e) {
                var t = e.optionHandlers;

                function option(r, n, o, l) {
                    e.defaults[r] = n, o && (t[r] = l ? function (e, t, r) {
                        r != Wa && o(e, t, r)
                    } : o)
                }

                e.defineOption = option, e.Init = Wa, option("value", "", (function (e, t) {
                    return e.setValue(t)
                }), !0), option("mode", null, (function (e, t) {
                    e.doc.modeOption = t, ji(e)
                }), !0), option("indentUnit", 2, ji, !0), option("indentWithTabs", !1), option("smartIndent", !0), option("tabSize", 4, (function (e) {
                    Gi(e), Qr(e), kn(e)
                }), !0), option("lineSeparator", null, (function (e, t) {
                    if (e.doc.lineSep = t, t) {
                        var r = [], n = e.doc.first;
                        e.doc.iter((function (line) {
                            for (var e = 0; ;) {
                                var o = line.text.indexOf(t, e);
                                if (-1 == o) break;
                                e = o + t.length, r.push(st(n, o))
                            }
                            n++
                        }));
                        for (var i = r.length - 1; i >= 0; i--) To(e.doc, t, r[i], st(r[i].line, r[i].ch + t.length))
                    }
                })), option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, (function (e, t, r) {
                    e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != Wa && e.refresh()
                })), option("specialCharPlaceholder", sr, (function (e) {
                    return e.refresh()
                }), !0), option("electricChars", !0), option("inputStyle", S ? "contenteditable" : "textarea", (function () {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }), !0), option("spellcheck", !1, (function (e, t) {
                    return e.getInputField().spellcheck = t
                }), !0), option("autocorrect", !1, (function (e, t) {
                    return e.getInputField().autocorrect = t
                }), !0), option("autocapitalize", !1, (function (e, t) {
                    return e.getInputField().autocapitalize = t
                }), !0), option("rtlMoveVisually", !L), option("wholeLineUpdateBefore", !0), option("theme", "default", (function (e) {
                    Da(e), Ti(e)
                }), !0), option("keyMap", "default", (function (e, t, r) {
                    var n = sa(t), o = r != Wa && sa(r);
                    o && o.detach && o.detach(e, n), n.attach && n.attach(e, o || null)
                })), option("extraKeys", null), option("configureMouse", null), option("lineWrapping", !1, Ha, !0), option("gutters", [], (function (e, t) {
                    e.display.gutterSpecs = _i(t, e.options.lineNumbers), Ti(e)
                }), !0), option("fixedGutter", !0, (function (e, t) {
                    e.display.gutters.style.left = t ? bn(e.display) + "px" : "0", e.refresh()
                }), !0), option("coverGutterNextToScrollbar", !1, (function (e) {
                    return Jn(e)
                }), !0), option("scrollbarStyle", "native", (function (e) {
                    ri(e), Jn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                }), !0), option("lineNumbers", !1, (function (e, t) {
                    e.display.gutterSpecs = _i(e.options.gutters, t), Ti(e)
                }), !0), option("firstLineNumber", 1, Ti, !0), option("lineNumberFormatter", (function (e) {
                    return e
                }), Ti, !0), option("showCursorWhenSelecting", !1, Tn, !0), option("resetSelectionOnContextMenu", !0), option("lineWiseCopyCut", !0), option("pasteLinesPerSelection", !0), option("selectionsMayTouch", !1), option("readOnly", !1, (function (e, t) {
                    "nocursor" == t && (Pn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                })), option("screenReaderLabel", null, (function (e, t) {
                    t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t)
                })), option("disableInput", !1, (function (e, t) {
                    t || e.display.input.reset()
                }), !0), option("dragDrop", !0, Pa), option("allowDropFileTypes", null), option("cursorBlinkRate", 530), option("cursorScrollMargin", 0), option("cursorHeight", 1, Tn, !0), option("singleCursorHeightPerLine", !0, Tn, !0), option("workTime", 100), option("workDelay", 100), option("flattenSpans", !0, Gi, !0), option("addModeClass", !1, Gi, !0), option("pollInterval", 100), option("undoDepth", 200, (function (e, t) {
                    return e.doc.history.undoDepth = t
                })), option("historyEventDelay", 1250), option("viewportMargin", 10, (function (e) {
                    return e.refresh()
                }), !0), option("maxHighlightLength", 1e4, Gi, !0), option("moveInputWithCursor", !0, (function (e, t) {
                    t || e.display.input.resetPosition()
                })), option("tabindex", null, (function (e, t) {
                    return e.display.input.getField().tabIndex = t || ""
                })), option("autofocus", null), option("direction", "ltr", (function (e, t) {
                    return e.doc.setDirection(t)
                }), !0), option("phrases", null)
            }(Ia), function (e) {
                var t = e.optionHandlers, r = e.helpers = {};
                e.prototype = {
                    constructor: e,
                    focus: function () {
                        window.focus(), this.display.input.focus()
                    },
                    setOption: function (option, e) {
                        var r = this.options, n = r[option];
                        r[option] == e && "mode" != option || (r[option] = e, t.hasOwnProperty(option) && hi(this, t[option])(this, e, n), we(this, "optionChange", this, option))
                    },
                    getOption: function (option) {
                        return this.options[option]
                    },
                    getDoc: function () {
                        return this.doc
                    },
                    addKeyMap: function (map, e) {
                        this.state.keyMaps[e ? "push" : "unshift"](sa(map))
                    },
                    removeKeyMap: function (map) {
                        for (var e = this.state.keyMaps, i = 0; i < e.length; ++i) if (e[i] == map || e[i].name == map) return e.splice(i, 1), !0
                    },
                    addOverlay: pi((function (t, r) {
                        var n = t.token ? t : e.getMode(this.options, t);
                        if (n.startState) throw new Error("Overlays may not be stateful.");
                        !function (e, t, r) {
                            for (var n = 0, o = r(t); n < e.length && r(e[n]) <= o;) n++;
                            e.splice(n, 0, t)
                        }(this.state.overlays, {
                            mode: n,
                            modeSpec: t,
                            opaque: r && r.opaque,
                            priority: r && r.priority || 0
                        }, (function (e) {
                            return e.priority
                        })), this.state.modeGen++, kn(this)
                    })),
                    removeOverlay: pi((function (e) {
                        for (var t = this.state.overlays, i = 0; i < t.length; ++i) {
                            var r = t[i].modeSpec;
                            if (r == e || "string" == typeof e && r.name == e) return t.splice(i, 1), this.state.modeGen++, void kn(this)
                        }
                    })),
                    indentLine: pi((function (e, t, r) {
                        "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), at(this.doc, e) && Ba(this, e, t, r)
                    })),
                    indentSelection: pi((function (e) {
                        for (var t = this.doc.sel.ranges, r = -1, i = 0; i < t.length; i++) {
                            var n = t[i];
                            if (n.empty()) n.head.line > r && (Ba(this, n.head.line, e, !0), r = n.head.line, i == this.doc.sel.primIndex && jn(this)); else {
                                var o = n.from(), l = n.to(), c = Math.max(r, o.line);
                                r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                                for (var d = c; d < r; ++d) Ba(this, d, e);
                                var f = this.doc.sel.ranges;
                                0 == o.ch && t.length == f.length && f[i].from().ch > 0 && co(this.doc, i, new Ei(o, f[i].to()), Y)
                            }
                        }
                    })),
                    getTokenAt: function (e, t) {
                        return Lt(this, e, t)
                    },
                    getLineTokens: function (line, e) {
                        return Lt(this, st(line), e, !0)
                    },
                    getTokenTypeAt: function (e) {
                        e = gt(this.doc, e);
                        var t, r = wt(this, Je(this.doc, e.line)), n = 0, o = (r.length - 1) / 2, l = e.ch;
                        if (0 == l) t = r[2]; else for (; ;) {
                            var c = n + o >> 1;
                            if ((c ? r[2 * c - 1] : 0) >= l) o = c; else {
                                if (!(r[2 * c + 1] < l)) {
                                    t = r[2 * c + 2];
                                    break
                                }
                                n = c + 1
                            }
                        }
                        var d = t ? t.indexOf("overlay ") : -1;
                        return d < 0 ? t : 0 == d ? null : t.slice(0, d - 1)
                    },
                    getModeAt: function (t) {
                        var r = this.doc.mode;
                        return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
                    },
                    getHelper: function (e, t) {
                        return this.getHelpers(e, t)[0]
                    },
                    getHelpers: function (e, t) {
                        var n = [];
                        if (!r.hasOwnProperty(t)) return n;
                        var o = r[t], l = this.getModeAt(e);
                        if ("string" == typeof l[t]) o[l[t]] && n.push(o[l[t]]); else if (l[t]) for (var i = 0; i < l[t].length; i++) {
                            var c = o[l[t][i]];
                            c && n.push(c)
                        } else l.helperType && o[l.helperType] ? n.push(o[l.helperType]) : o[l.name] && n.push(o[l.name]);
                        for (var d = 0; d < o._global.length; d++) {
                            var f = o._global[d];
                            f.pred(l, this) && -1 == K(n, f.val) && n.push(f.val)
                        }
                        return n
                    },
                    getStateAfter: function (line, e) {
                        var t = this.doc;
                        return Ct(this, (line = mt(t, null == line ? t.first + t.size - 1 : line)) + 1, e).state
                    },
                    cursorCoords: function (e, t) {
                        var r = this.doc.sel.primary();
                        return on(this, null == e ? r.head : "object" == typeof e ? gt(this.doc, e) : e ? r.from() : r.to(), t || "page")
                    },
                    charCoords: function (e, t) {
                        return nn(this, gt(this.doc, e), t || "page")
                    },
                    coordsChar: function (e, t) {
                        return sn(this, (e = rn(this, e, t || "page")).left, e.top)
                    },
                    lineAtHeight: function (e, t) {
                        return e = rn(this, {
                            top: e,
                            left: 0
                        }, t || "page").top, ot(this.doc, e + this.display.viewOffset)
                    },
                    heightAtLine: function (line, e, t) {
                        var r, n = !1;
                        if ("number" == typeof line) {
                            var o = this.doc.first + this.doc.size - 1;
                            line < this.doc.first ? line = this.doc.first : line > o && (line = o, n = !0), r = Je(this.doc, line)
                        } else r = line;
                        return tn(this, r, {
                            top: 0,
                            left: 0
                        }, e || "page", t || n).top + (n ? this.doc.height - Zt(r) : 0)
                    },
                    defaultTextHeight: function () {
                        return mn(this.display)
                    },
                    defaultCharWidth: function () {
                        return gn(this.display)
                    },
                    getViewport: function () {
                        return {from: this.display.viewFrom, to: this.display.viewTo}
                    },
                    addWidget: function (e, t, r, n, o) {
                        var l, rect, c, d = this.display, f = (e = on(this, gt(this.doc, e))).bottom, h = e.left;
                        if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), d.sizer.appendChild(t), "over" == n) f = e.top; else if ("above" == n || "near" == n) {
                            var m = Math.max(d.wrapper.clientHeight, this.doc.height),
                                v = Math.max(d.sizer.clientWidth, d.lineSpace.clientWidth);
                            ("above" == n || e.bottom + t.offsetHeight > m) && e.top > t.offsetHeight ? f = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= m && (f = e.bottom), h + t.offsetWidth > v && (h = v - t.offsetWidth)
                        }
                        t.style.top = f + "px", t.style.left = t.style.right = "", "right" == o ? (h = d.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == o ? h = 0 : "middle" == o && (h = (d.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = h + "px"), r && (l = this, rect = {
                            left: h,
                            top: f,
                            right: h + t.offsetWidth,
                            bottom: f + t.offsetHeight
                        }, null != (c = Bn(l, rect)).scrollTop && $n(l, c.scrollTop), null != c.scrollLeft && Xn(l, c.scrollLeft))
                    },
                    triggerOnKeyDown: pi(Ca),
                    triggerOnKeyPress: pi(Sa),
                    triggerOnKeyUp: ka,
                    triggerOnMouseDown: pi(Ta),
                    execCommand: function (e) {
                        if (ha.hasOwnProperty(e)) return ha[e].call(null, this)
                    },
                    triggerElectric: pi((function (text) {
                        Va(this, text)
                    })),
                    findPosH: function (e, t, r, n) {
                        var o = 1;
                        t < 0 && (o = -1, t = -t);
                        for (var l = gt(this.doc, e), i = 0; i < t && !(l = Ya(this.doc, l, o, r, n)).hitSide; ++i) ;
                        return l
                    },
                    moveH: pi((function (e, t) {
                        var r = this;
                        this.extendSelectionsBy((function (n) {
                            return r.display.shift || r.doc.extend || n.empty() ? Ya(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to()
                        }), Z)
                    })),
                    deleteH: pi((function (e, t) {
                        var r = this.doc.sel, n = this.doc;
                        r.somethingSelected() ? n.replaceSelection("", null, "+delete") : ca(this, (function (r) {
                            var o = Ya(n, r.head, e, t, !1);
                            return e < 0 ? {from: o, to: r.head} : {from: r.head, to: o}
                        }))
                    })),
                    findPosV: function (e, t, r, n) {
                        var o = 1, l = n;
                        t < 0 && (o = -1, t = -t);
                        for (var c = gt(this.doc, e), i = 0; i < t; ++i) {
                            var d = on(this, c, "div");
                            if (null == l ? l = d.left : d.left = l, (c = Qa(this, d, o, r)).hitSide) break
                        }
                        return c
                    },
                    moveV: pi((function (e, t) {
                        var r = this, n = this.doc, o = [],
                            l = !this.display.shift && !n.extend && n.sel.somethingSelected();
                        if (n.extendSelectionsBy((function (c) {
                            if (l) return e < 0 ? c.from() : c.to();
                            var d = on(r, c.head, "div");
                            null != c.goalColumn && (d.left = c.goalColumn), o.push(d.left);
                            var f = Qa(r, d, e, t);
                            return "page" == t && c == n.sel.primary() && qn(r, nn(r, f, "div").top - d.top), f
                        }), Z), o.length) for (var i = 0; i < n.sel.ranges.length; i++) n.sel.ranges[i].goalColumn = o[i]
                    })),
                    findWordAt: function (e) {
                        var line = Je(this.doc, e.line).text, t = e.ch, r = e.ch;
                        if (line) {
                            var n = this.getHelper(e, "wordChars");
                            "before" != e.sticky && r != line.length || !t ? ++r : --t;
                            for (var o = line.charAt(t), l = le(o, n) ? function (e) {
                                return le(e, n)
                            } : /\s/.test(o) ? function (e) {
                                return /\s/.test(e)
                            } : function (e) {
                                return !/\s/.test(e) && !le(e)
                            }; t > 0 && l(line.charAt(t - 1));) --t;
                            for (; r < line.length && l(line.charAt(r));) ++r
                        }
                        return new Ei(st(e.line, t), st(e.line, r))
                    },
                    toggleOverwrite: function (e) {
                        null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? R(this.display.cursorDiv, "CodeMirror-overwrite") : D(this.display.cursorDiv, "CodeMirror-overwrite"), we(this, "overwriteToggle", this, this.state.overwrite))
                    },
                    hasFocus: function () {
                        return this.display.input.getField() == I()
                    },
                    isReadOnly: function () {
                        return !(!this.options.readOnly && !this.doc.cantEdit)
                    },
                    scrollTo: pi((function (e, t) {
                        Gn(this, e, t)
                    })),
                    getScrollInfo: function () {
                        var e = this.display.scroller;
                        return {
                            left: e.scrollLeft,
                            top: e.scrollTop,
                            height: e.scrollHeight - Pr(this) - this.display.barHeight,
                            width: e.scrollWidth - Pr(this) - this.display.barWidth,
                            clientHeight: Ir(this),
                            clientWidth: Hr(this)
                        }
                    },
                    scrollIntoView: pi((function (e, t) {
                        null == e ? (e = {
                            from: this.doc.sel.primary().head,
                            to: null
                        }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                            from: st(e, 0),
                            to: null
                        } : null == e.from && (e = {
                            from: e,
                            to: null
                        }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function (e, t) {
                            Un(e), e.curOp.scrollToPos = t
                        }(this, e) : Vn(this, e.from, e.to, e.margin)
                    })),
                    setSize: pi((function (e, t) {
                        var r = this, n = function (e) {
                            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                        };
                        null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && Yr(this);
                        var o = this.display.viewFrom;
                        this.doc.iter(o, this.display.viewTo, (function (line) {
                            if (line.widgets) for (var i = 0; i < line.widgets.length; i++) if (line.widgets[i].noHScroll) {
                                Sn(r, o, "widget");
                                break
                            }
                            ++o
                        })), this.curOp.forceUpdate = !0, we(this, "refresh", this)
                    })),
                    operation: function (e) {
                        return fi(this, e)
                    },
                    startOperation: function () {
                        return ii(this)
                    },
                    endOperation: function () {
                        return oi(this)
                    },
                    refresh: pi((function () {
                        var e = this.display.cachedTextHeight;
                        kn(this), this.curOp.forceUpdate = !0, Qr(this), Gn(this, this.doc.scrollLeft, this.doc.scrollTop), Ci(this.display), (null == e || Math.abs(e - mn(this.display)) > .5 || this.options.lineWrapping) && xn(this), we(this, "refresh", this)
                    })),
                    swapDoc: pi((function (e) {
                        var t = this.doc;
                        return t.cm = null, this.state.selectingText && this.state.selectingText(), Ki(this, e), Qr(this), this.display.input.reset(), Gn(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, yr(this, "swapDoc", this, t), t
                    })),
                    phrase: function (e) {
                        var t = this.options.phrases;
                        return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                    },
                    getInputField: function () {
                        return this.display.input.getField()
                    },
                    getWrapperElement: function () {
                        return this.display.wrapper
                    },
                    getScrollerElement: function () {
                        return this.display.scroller
                    },
                    getGutterElement: function () {
                        return this.display.gutters
                    }
                }, Me(e), e.registerHelper = function (t, n, o) {
                    r.hasOwnProperty(t) || (r[t] = e[t] = {_global: []}), r[t][n] = o
                }, e.registerGlobalHelper = function (t, n, o, l) {
                    e.registerHelper(t, n, l), r[t]._global.push({pred: o, val: l})
                }
            }(Ia);
            var il = "iter insert remove copy getEditor constructor".split(" ");
            for (var al in Go.prototype) Go.prototype.hasOwnProperty(al) && K(il, al) < 0 && (Ia.prototype[al] = function (e) {
                return function () {
                    return e.apply(this.doc, arguments)
                }
            }(Go.prototype[al]));
            return Me(Go), Ia.inputStyles = {textarea: nl, contenteditable: Za}, Ia.defineMode = function (e) {
                Ia.defaults.mode || "null" == e || (Ia.defaults.mode = e), Ge.apply(this, arguments)
            }, Ia.defineMIME = function (e, t) {
                je[e] = t
            }, Ia.defineMode("null", (function () {
                return {
                    token: function (e) {
                        return e.skipToEnd()
                    }
                }
            })), Ia.defineMIME("text/plain", "null"), Ia.defineExtension = function (e, t) {
                Ia.prototype[e] = t
            }, Ia.defineDocExtension = function (e, t) {
                Go.prototype[e] = t
            }, Ia.fromTextArea = function (textarea, e) {
                if ((e = e ? U(e) : {}).value = textarea.value, !e.tabindex && textarea.tabIndex && (e.tabindex = textarea.tabIndex), !e.placeholder && textarea.placeholder && (e.placeholder = textarea.placeholder), null == e.autofocus) {
                    var t = I();
                    e.autofocus = t == textarea || null != textarea.getAttribute("autofocus") && t == document.body
                }

                function r() {
                    textarea.value = l.getValue()
                }

                var n;
                if (textarea.form && (be(textarea.form, "submit", r), !e.leaveSubmitMethodAlone)) {
                    var form = textarea.form;
                    n = form.submit;
                    try {
                        var o = form.submit = function () {
                            r(), form.submit = n, form.submit(), form.submit = o
                        }
                    } catch (e) {
                    }
                }
                e.finishInit = function (t) {
                    t.save = r, t.getTextArea = function () {
                        return textarea
                    }, t.toTextArea = function () {
                        t.toTextArea = isNaN, r(), textarea.parentNode.removeChild(t.getWrapperElement()), textarea.style.display = "", textarea.form && (xe(textarea.form, "submit", r), e.leaveSubmitMethodAlone || "function" != typeof textarea.form.submit || (textarea.form.submit = n))
                    }
                }, textarea.style.display = "none";
                var l = Ia((function (e) {
                    return textarea.parentNode.insertBefore(e, textarea.nextSibling)
                }), e);
                return l
            }, function (e) {
                e.off = xe, e.on = be, e.wheelEventPixels = Di, e.Doc = Go, e.splitLines = He, e.countColumn = V, e.findColumn = J, e.isWordChar = ae, e.Pass = X, e.signal = we, e.Line = rr, e.changeEnd = Ii, e.scrollbarModel = ti, e.Pos = st, e.cmpPos = ct, e.modes = qe, e.mimeModes = je, e.resolveMode = Ue, e.getMode = Ve, e.modeExtensions = $e, e.extendMode = Ke, e.copyState = Xe, e.startState = Qe, e.innerMode = Ye, e.commands = ha, e.keyMap = ta, e.keyName = la, e.isModifierKey = oa, e.lookupKey = ia, e.normalizeKeyMap = na, e.StringStream = Ze, e.SharedTextMarker = Ro, e.TextMarker = Ho, e.LineWidget = Fo, e.e_preventDefault = _e, e.e_stopPropagation = Le, e.e_stop = ze, e.addClass = R, e.contains = H, e.rmClass = D, e.keyNames = Zo
            }(Ia), Ia.version = "5.59.2", Ia
        }()
    }, 444: function (e, t, r) {
        var n;
        e.exports = (n = r(443), function (e) {
            function t(n) {
                if (r[n]) return r[n].exports;
                var o = r[n] = {i: n, l: !1, exports: {}};
                return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }

            var r = {};
            return t.m = e, t.c = r, t.i = function (e) {
                return e
            }, t.d = function (e, r, n) {
                t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: n})
            }, t.n = function (e) {
                var r = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return t.d(r, "a", r), r
            }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "/", t(t.s = 3)
        }([function (e, t) {
            e.exports = n
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(r(0)), i = window.CodeMirror || n.default;
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function (e, t) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var r = Object(e), n = 1; n < arguments.length; n++) {
                        var o = arguments[n];
                        if (null != o) for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
                    }
                    return r
                }, writable: !0, configurable: !0
            }), t.default = {
                name: "codemirror",
                data: function () {
                    return {content: "", codemirror: null, cminstance: null}
                },
                props: {
                    code: String,
                    value: String,
                    marker: Function,
                    unseenLines: Array,
                    name: {type: String, default: "codemirror"},
                    placeholder: {type: String, default: ""},
                    merge: {type: Boolean, default: !1},
                    options: {
                        type: Object, default: function () {
                            return {}
                        }
                    },
                    events: {
                        type: Array, default: function () {
                            return []
                        }
                    },
                    globalOptions: {
                        type: Object, default: function () {
                            return {}
                        }
                    },
                    globalEvents: {
                        type: Array, default: function () {
                            return []
                        }
                    }
                },
                watch: {
                    options: {
                        deep: !0, handler: function (e) {
                            for (var t in e) this.cminstance.setOption(t, e[t])
                        }
                    }, merge: function () {
                        this.$nextTick(this.switchMerge)
                    }, code: function (e) {
                        this.handerCodeChange(e)
                    }, value: function (e) {
                        this.handerCodeChange(e)
                    }
                },
                methods: {
                    initialize: function () {
                        var e = this, t = Object.assign({}, this.globalOptions, this.options);
                        this.merge ? (this.codemirror = i.MergeView(this.$refs.mergeview, t), this.cminstance = this.codemirror.edit) : (this.codemirror = i.fromTextArea(this.$refs.textarea, t), this.cminstance = this.codemirror, this.cminstance.setValue(this.code || this.value || this.content)), this.cminstance.on("change", (function (t) {
                            e.content = t.getValue(), e.$emit && e.$emit("input", e.content)
                        }));
                        var r = {};
                        ["scroll", "changes", "beforeChange", "cursorActivity", "keyHandled", "inputRead", "electricInput", "beforeSelectionChange", "viewportChange", "swapDoc", "gutterClick", "gutterContextMenu", "focus", "blur", "refresh", "optionChange", "scrollCursorIntoView", "update"].concat(this.events).concat(this.globalEvents).filter((function (e) {
                            return !r[e] && (r[e] = !0)
                        })).forEach((function (t) {
                            e.cminstance.on(t, (function () {
                                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                                e.$emit.apply(e, [t].concat(n));
                                var i = t.replace(/([A-Z])/g, "-$1").toLowerCase();
                                i !== t && e.$emit.apply(e, [i].concat(n))
                            }))
                        })), this.$emit("ready", this.codemirror), this.unseenLineMarkers(), this.refresh()
                    }, refresh: function () {
                        var e = this;
                        this.$nextTick((function () {
                            e.cminstance.refresh()
                        }))
                    }, destroy: function () {
                        var e = this.cminstance.doc.cm.getWrapperElement();
                        e && e.remove && e.remove()
                    }, handerCodeChange: function (e) {
                        if (e !== this.cminstance.getValue()) {
                            var t = this.cminstance.getScrollInfo();
                            this.cminstance.setValue(e), this.content = e, this.cminstance.scrollTo(t.left, t.top)
                        }
                        this.unseenLineMarkers()
                    }, unseenLineMarkers: function () {
                        var e = this;
                        void 0 !== this.unseenLines && void 0 !== this.marker && this.unseenLines.forEach((function (t) {
                            var r = e.cminstance.lineInfo(t);
                            e.cminstance.setGutterMarker(t, "breakpoints", r.gutterMarkers ? null : e.marker())
                        }))
                    }, switchMerge: function () {
                        var e = this.cminstance.doc.history, t = this.cminstance.doc.cleanGeneration;
                        this.options.value = this.cminstance.getValue(), this.destroy(), this.initialize(), this.cminstance.doc.history = e, this.cminstance.doc.cleanGeneration = t
                    }
                },
                mounted: function () {
                    this.initialize()
                },
                beforeDestroy: function () {
                    this.destroy()
                }
            }
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = r(1), o = r.n(n);
            for (var i in n) ["default", "default"].indexOf(i) < 0 && function (e) {
                r.d(t, e, (function () {
                    return n[e]
                }))
            }(i);
            var s = r(5), a = r(4)(o.a, s.a, !1, null, null, null);
            t.default = a.exports
        }, function (e, t, r) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.install = t.codemirror = t.CodeMirror = void 0;
            var i = n(r(0)), o = n(r(2)), a = window.CodeMirror || i.default, u = function (e, t) {
                t && (t.options && (o.default.props.globalOptions.default = function () {
                    return t.options
                }), t.events && (o.default.props.globalEvents.default = function () {
                    return t.events
                })), e.component(o.default.name, o.default)
            }, l = {CodeMirror: a, codemirror: o.default, install: u};
            t.default = l, t.CodeMirror = a, t.codemirror = o.default, t.install = u
        }, function (e, t) {
            e.exports = function (e, t, r, n, o, i) {
                var s, l = e = e || {}, a = typeof e.default;
                "object" !== a && "function" !== a || (s = e, l = e.default);
                var c, u = "function" == typeof l ? l.options : l;
                if (t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0), r && (u.functional = !0), o && (u._scopeId = o), i ? (c = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
                }, u._ssrRegister = c) : n && (c = n), c) {
                    var d = u.functional, f = d ? u.render : u.beforeCreate;
                    d ? (u._injectStyles = c, u.render = function (e, t) {
                        return c.call(t), f(e, t)
                    }) : u.beforeCreate = f ? [].concat(f, c) : [c]
                }
                return {esModule: s, exports: l, options: u}
            }
        }, function (e, t, r) {
            "use strict";
            var i = {
                render: function () {
                    var e = this, t = e.$createElement, r = e._self._c || t;
                    return r("div", {
                        staticClass: "vue-codemirror",
                        class: {merge: e.merge}
                    }, [e.merge ? r("div", {ref: "mergeview"}) : r("textarea", {
                        ref: "textarea",
                        attrs: {name: e.name, placeholder: e.placeholder}
                    })])
                }, staticRenderFns: []
            };
            t.a = i
        }]))
    }, 447: function (e, t, r) {
        !function (e) {
            "use strict";

            function t(e) {
                for (var t; null != (t = e.next());) if ("`" == t && !e.eat("`")) return "variable-2";
                return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? "variable-2" : null
            }

            function r(e) {
                return e.eat("@") && (e.match("session."), e.match("local."), e.match("global.")), e.eat("'") ? (e.match(/^.*'/), "variable-2") : e.eat('"') ? (e.match(/^.*"/), "variable-2") : e.eat("`") ? (e.match(/^.*`/), "variable-2") : e.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null
            }

            function n(e) {
                return e.eat("N") ? "atom" : e.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null
            }

            e.defineMode("sql", (function (t, r) {
                var n = r.client || {}, d = r.atoms || {false: !0, true: !0, null: !0}, f = r.builtin || l(c),
                    h = r.keywords || l(o), m = r.operatorChars || /^[*+\-%<>!=&|~^\/]/, v = r.support || {},
                    y = r.hooks || {}, x = r.dateSQL || {date: !0, time: !0, timestamp: !0},
                    w = !1 !== r.backslashStringEscapes, C = r.brackets || /^[\{}\(\)\[\]]/,
                    k = r.punctuation || /^[;.,:]/;

                function S(e, t) {
                    var r = e.next();
                    if (y[r]) {
                        var o = y[r](e, t);
                        if (!1 !== o) return o
                    }
                    if (v.hexNumber && ("0" == r && e.match(/^[xX][0-9a-fA-F]+/) || ("x" == r || "X" == r) && e.match(/^'[0-9a-fA-F]+'/))) return "number";
                    if (v.binaryNumber && (("b" == r || "B" == r) && e.match(/^'[01]+'/) || "0" == r && e.match(/^b[01]+/))) return "number";
                    if (r.charCodeAt(0) > 47 && r.charCodeAt(0) < 58) return e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/), v.decimallessFloat && e.match(/^\.(?!\.)/), "number";
                    if ("?" == r && (e.eatSpace() || e.eol() || e.eat(";"))) return "variable-3";
                    if ("'" == r || '"' == r && v.doubleQuote) return t.tokenize = M(r), t.tokenize(e, t);
                    if ((v.nCharCast && ("n" == r || "N" == r) || v.charsetCast && "_" == r && e.match(/[a-z][a-z0-9]*/i)) && ("'" == e.peek() || '"' == e.peek())) return "keyword";
                    if (v.escapeConstant && ("e" == r || "E" == r) && ("'" == e.peek() || '"' == e.peek() && v.doubleQuote)) return t.tokenize = function (e, t) {
                        return (t.tokenize = M(e.next(), !0))(e, t)
                    }, "keyword";
                    if (v.commentSlashSlash && "/" == r && e.eat("/")) return e.skipToEnd(), "comment";
                    if (v.commentHash && "#" == r || "-" == r && e.eat("-") && (!v.commentSpaceRequired || e.eat(" "))) return e.skipToEnd(), "comment";
                    if ("/" == r && e.eat("*")) return t.tokenize = function e(t) {
                        return function (r, n) {
                            var o = r.match(/^.*?(\/\*|\*\/)/);
                            return o ? "/*" == o[1] ? n.tokenize = e(t + 1) : n.tokenize = t > 1 ? e(t - 1) : S : r.skipToEnd(), "comment"
                        }
                    }(1), t.tokenize(e, t);
                    if ("." != r) {
                        if (m.test(r)) return e.eatWhile(m), "operator";
                        if (C.test(r)) return "bracket";
                        if (k.test(r)) return e.eatWhile(k), "punctuation";
                        if ("{" == r && (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) return "number";
                        e.eatWhile(/^[_\w\d]/);
                        var l = e.current().toLowerCase();
                        return x.hasOwnProperty(l) && (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/)) ? "number" : d.hasOwnProperty(l) ? "atom" : f.hasOwnProperty(l) ? "builtin" : h.hasOwnProperty(l) ? "keyword" : n.hasOwnProperty(l) ? "string-2" : null
                    }
                    return v.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number" : e.match(/^\.+/) ? null : v.ODBCdotTable && e.match(/^[\w\d_$#]+/) ? "variable-2" : void 0
                }

                function M(e, t) {
                    return function (r, n) {
                        for (var o, l = !1; null != (o = r.next());) {
                            if (o == e && !l) {
                                n.tokenize = S;
                                break
                            }
                            l = (w || t) && !l && "\\" == o
                        }
                        return "string"
                    }
                }

                function _(e, t, r) {
                    t.context = {prev: t.context, indent: e.indentation(), col: e.column(), type: r}
                }

                return {
                    startState: function () {
                        return {tokenize: S, context: null}
                    },
                    token: function (e, t) {
                        if (e.sol() && t.context && null == t.context.align && (t.context.align = !1), t.tokenize == S && e.eatSpace()) return null;
                        var style = t.tokenize(e, t);
                        if ("comment" == style) return style;
                        t.context && null == t.context.align && (t.context.align = !0);
                        var r = e.current();
                        return "(" == r ? _(e, t, ")") : "[" == r ? _(e, t, "]") : t.context && t.context.type == r && function (e) {
                            e.indent = e.context.indent, e.context = e.context.prev
                        }(t), style
                    },
                    indent: function (r, n) {
                        var o = r.context;
                        if (!o) return e.Pass;
                        var l = n.charAt(0) == o.type;
                        return o.align ? o.col + (l ? 0 : 1) : o.indent + (l ? 0 : t.indentUnit)
                    },
                    blockCommentStart: "/*",
                    blockCommentEnd: "*/",
                    lineComment: v.commentSlashSlash ? "//" : v.commentHash ? "#" : "--",
                    closeBrackets: "()[]{}''\"\"``"
                }
            }));
            var o = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";

            function l(e) {
                for (var t = {}, r = e.split(" "), i = 0; i < r.length; ++i) t[r[i]] = !0;
                return t
            }

            var c = "bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
            e.defineMIME("text/x-sql", {
                name: "sql",
                keywords: l(o + "begin"),
                builtin: l(c),
                atoms: l("false true null unknown"),
                dateSQL: l("date time timestamp"),
                support: l("ODBCdotTable doubleQuote binaryNumber hexNumber")
            }), e.defineMIME("text/x-mssql", {
                name: "sql",
                client: l("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),
                keywords: l(o + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),
                builtin: l("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
                atoms: l("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),
                operatorChars: /^[*+\-%<>!=^\&|\/]/,
                brackets: /^[\{}\(\)]/,
                punctuation: /^[;.,:/]/,
                backslashStringEscapes: !1,
                dateSQL: l("date datetimeoffset datetime2 smalldatetime datetime time"),
                hooks: {"@": r}
            }), e.defineMIME("text/x-mysql", {
                name: "sql",
                client: l("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
                keywords: l(o + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
                builtin: l("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
                atoms: l("false true null unknown"),
                operatorChars: /^[*+\-%<>!=&|^]/,
                dateSQL: l("date time timestamp"),
                support: l("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
                hooks: {"@": r, "`": t, "\\": n}
            }), e.defineMIME("text/x-mariadb", {
                name: "sql",
                client: l("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
                keywords: l(o + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
                builtin: l("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
                atoms: l("false true null unknown"),
                operatorChars: /^[*+\-%<>!=&|^]/,
                dateSQL: l("date time timestamp"),
                support: l("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
                hooks: {"@": r, "`": t, "\\": n}
            }), e.defineMIME("text/x-sqlite", {
                name: "sql",
                client: l("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),
                keywords: l(o + "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),
                builtin: l("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),
                atoms: l("null current_date current_time current_timestamp"),
                operatorChars: /^[*+\-%<>!=&|/~]/,
                dateSQL: l("date time timestamp datetime"),
                support: l("decimallessFloat zerolessFloat"),
                identifierQuote: '"',
                hooks: {
                    "@": r, ":": r, "?": r, $: r, '"': function (e) {
                        for (var t; null != (t = e.next());) if ('"' == t && !e.eat('"')) return "variable-2";
                        return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? "variable-2" : null
                    }, "`": t
                }
            }), e.defineMIME("text/x-cassandra", {
                name: "sql",
                client: {},
                keywords: l("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
                builtin: l("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
                atoms: l("false true infinity NaN"),
                operatorChars: /^[<>=]/,
                dateSQL: {},
                support: l("commentSlashSlash decimallessFloat"),
                hooks: {}
            }), e.defineMIME("text/x-plsql", {
                name: "sql",
                client: l("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
                keywords: l("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
                builtin: l("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
                operatorChars: /^[*\/+\-%<>!=~]/,
                dateSQL: l("date time timestamp"),
                support: l("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
            }), e.defineMIME("text/x-hive", {
                name: "sql",
                keywords: l("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"),
                builtin: l("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"),
                atoms: l("false true null unknown"),
                operatorChars: /^[*+\-%<>!=]/,
                dateSQL: l("date timestamp"),
                support: l("ODBCdotTable doubleQuote binaryNumber hexNumber")
            }), e.defineMIME("text/x-pgsql", {
                name: "sql",
                client: l("source"),
                keywords: l(o + "a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"),
                builtin: l("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
                atoms: l("false true null unknown"),
                operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
                backslashStringEscapes: !1,
                dateSQL: l("date time timestamp"),
                support: l("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant")
            }), e.defineMIME("text/x-gql", {
                name: "sql",
                keywords: l("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
                atoms: l("false true"),
                builtin: l("blob datetime first key __key__ string integer double boolean null"),
                operatorChars: /^[*+\-%<>!=]/
            }), e.defineMIME("text/x-gpsql", {
                name: "sql",
                client: l("source"),
                keywords: l("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),
                builtin: l("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
                atoms: l("false true null unknown"),
                operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                dateSQL: l("date time timestamp"),
                support: l("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
            }), e.defineMIME("text/x-sparksql", {
                name: "sql",
                keywords: l("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases data dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),
                builtin: l("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),
                atoms: l("false true null"),
                operatorChars: /^[*\/+\-%<>!=~&|^]/,
                dateSQL: l("date time timestamp"),
                support: l("ODBCdotTable doubleQuote zerolessFloat")
            }), e.defineMIME("text/x-esper", {
                name: "sql",
                client: l("source"),
                keywords: l("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
                builtin: {},
                atoms: l("false true null"),
                operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                dateSQL: l("time"),
                support: l("decimallessFloat zerolessFloat binaryNumber hexNumber")
            })
        }(r(443))
    }, 448: function (e, t, r) {
        var content = r(449);
        "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
        (0, r(2).default)("3000a27e", content, !0, {sourceMap: !1})
    }, 449: function (e, t, r) {
        (t = r(1)(!1)).push([e.i, '.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:transparent}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}.cm-animate-fat-cursor,.cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-feature-settings:"calt";font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}', ""]), e.exports = t
    }, 450: function (e, t, r) {
        var content = r(451);
        "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
        (0, r(2).default)("9d4984a4", content, !0, {sourceMap: !1})
    }, 451: function (e, t, r) {
        (t = r(1)(!1)).push([e.i, ".solarized.base03{color:#002b36}.solarized.base02{color:#073642}.solarized.base01{color:#586e75}.solarized.base00{color:#657b83}.solarized.base0{color:#839496}.solarized.base1{color:#93a1a1}.solarized.base2{color:#eee8d5}.solarized.base3{color:#fdf6e3}.solarized.solar-yellow{color:#b58900}.solarized.solar-orange{color:#cb4b16}.solarized.solar-red{color:#dc322f}.solarized.solar-magenta{color:#d33682}.solarized.solar-violet{color:#6c71c4}.solarized.solar-blue{color:#268bd2}.solarized.solar-cyan{color:#2aa198}.solarized.solar-green{color:#859900}.cm-s-solarized{line-height:1.45em;color-profile:sRGB;rendering-intent:auto}.cm-s-solarized.cm-s-dark{color:#839496;background-color:#002b36;text-shadow:#002b36 0 1px}.cm-s-solarized.cm-s-light{background-color:#fdf6e3;color:#657b83;text-shadow:#eee8d5 0 1px}.cm-s-solarized .CodeMirror-widget{text-shadow:none}.cm-s-solarized .cm-header{color:#586e75}.cm-s-solarized .cm-quote{color:#93a1a1}.cm-s-solarized .cm-keyword{color:#cb4b16}.cm-s-solarized .cm-atom,.cm-s-solarized .cm-number{color:#d33682}.cm-s-solarized .cm-def{color:#2aa198}.cm-s-solarized .cm-variable{color:#839496}.cm-s-solarized .cm-variable-2{color:#b58900}.cm-s-solarized .cm-type,.cm-s-solarized .cm-variable-3{color:#6c71c4}.cm-s-solarized .cm-property{color:#2aa198}.cm-s-solarized .cm-operator{color:#6c71c4}.cm-s-solarized .cm-comment{color:#586e75;font-style:italic}.cm-s-solarized .cm-string{color:#859900}.cm-s-solarized .cm-string-2{color:#b58900}.cm-s-solarized .cm-meta{color:#859900}.cm-s-solarized .cm-qualifier{color:#b58900}.cm-s-solarized .cm-builtin{color:#d33682}.cm-s-solarized .cm-bracket{color:#cb4b16}.cm-s-solarized .CodeMirror-matchingbracket{color:#859900}.cm-s-solarized .CodeMirror-nonmatchingbracket{color:#dc322f}.cm-s-solarized .cm-tag{color:#93a1a1}.cm-s-solarized .cm-attribute{color:#2aa198}.cm-s-solarized .cm-hr{color:transparent;border-top:1px solid #586e75;display:block}.cm-s-solarized .cm-link{color:#93a1a1;cursor:pointer}.cm-s-solarized .cm-special{color:#6c71c4}.cm-s-solarized .cm-em{color:#999;text-decoration:underline;-webkit-text-decoration-style:dotted;text-decoration-style:dotted}.cm-s-solarized .cm-error,.cm-s-solarized .cm-invalidchar{color:#586e75;border-bottom:1px dotted #dc322f}.cm-s-solarized.cm-s-dark div.CodeMirror-selected{background:#073642}.cm-s-solarized.cm-s-dark.CodeMirror ::-moz-selection{background:rgba(7,54,66,.99)}.cm-s-solarized.cm-s-dark.CodeMirror ::selection{background:rgba(7,54,66,.99)}.cm-s-dark .CodeMirror-line>span::-moz-selection,.cm-s-dark .CodeMirror-line>span>span::-moz-selection,.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection{background:rgba(7,54,66,.99)}.cm-s-solarized.cm-s-light div.CodeMirror-selected{background:#eee8d5}.cm-s-light .CodeMirror-line>span::selection,.cm-s-light .CodeMirror-line>span>span::selection,.cm-s-solarized.cm-s-light .CodeMirror-line::selection{background:#eee8d5}.cm-s-light .CodeMirror-line>span::-moz-selection,.cm-s-light .CodeMirror-line>span>span::-moz-selection,.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection{background:#eee8d5}.cm-s-solarized.CodeMirror{box-shadow:inset 7px 0 12px -6px #000}.cm-s-solarized .CodeMirror-gutters{border-right:0}.cm-s-solarized.cm-s-dark .CodeMirror-gutters{background-color:#073642}.cm-s-solarized.cm-s-dark .CodeMirror-linenumber{color:#586e75;text-shadow:#021014 0 -1px}.cm-s-solarized.cm-s-light .CodeMirror-gutters{background-color:#eee8d5}.cm-s-solarized.cm-s-light .CodeMirror-linenumber{color:#839496}.cm-s-solarized .CodeMirror-linenumber{padding:0 5px}.cm-s-solarized .CodeMirror-guttermarker-subtle{color:#586e75}.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker{color:#ddd}.cm-s-solarized.cm-s-light .CodeMirror-guttermarker{color:#cb4b16}.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text{color:#586e75}.cm-s-solarized .CodeMirror-cursor{border-left:1px solid #819090}.cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor{background:#7e7}.cm-s-solarized.cm-s-light .cm-animate-fat-cursor{background-color:#7e7}.cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor{background:#586e75}.cm-s-solarized.cm-s-dark .cm-animate-fat-cursor{background-color:#586e75}.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background{background:hsla(0,0%,100%,.06)}.cm-s-solarized.cm-s-light .CodeMirror-activeline-background{background:rgba(0,0,0,.06)}", ""]), e.exports = t
    }, 452: function (e, t, r) {
        (function (r) {
            var n;
            !function (r, o) {
                e.exports = function (r) {
                    "use strict";
                    var o, l = (r = r || {}).Base64,
                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = function (e) {
                            for (var t = {}, i = 0, r = e.length; i < r; i++) t[e.charAt(i)] = i;
                            return t
                        }(c), f = String.fromCharCode, h = function (e) {
                            if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? f(192 | t >>> 6) + f(128 | 63 & t) : f(224 | t >>> 12 & 15) + f(128 | t >>> 6 & 63) + f(128 | 63 & t);
                            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                            return f(240 | t >>> 18 & 7) + f(128 | t >>> 12 & 63) + f(128 | t >>> 6 & 63) + f(128 | 63 & t)
                        }, m = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, v = function (u) {
                            return u.replace(m, h)
                        }, y = function (e) {
                            var t = [0, 2, 1][e.length % 3],
                                r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                            return [c.charAt(r >>> 18), c.charAt(r >>> 12 & 63), t >= 2 ? "=" : c.charAt(r >>> 6 & 63), t >= 1 ? "=" : c.charAt(63 & r)].join("")
                        }, x = r.btoa && "function" == typeof r.btoa ? function (b) {
                            return r.btoa(b)
                        } : function (b) {
                            if (b.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
                            return b.replace(/[\s\S]{1,3}/g, y)
                        }, w = function (u) {
                            return x(v(String(u)))
                        }, C = function (e) {
                            return e.replace(/[+\/]/g, (function (e) {
                                return "+" == e ? "-" : "_"
                            })).replace(/=/g, "")
                        }, k = function (u, e) {
                            return e ? C(w(u)) : w(u)
                        };
                    r.Uint8Array && (o = function (a, e) {
                        for (var t = "", i = 0, r = a.length; i < r; i += 3) {
                            var n = a[i], o = a[i + 1], l = a[i + 2], d = n << 16 | o << 8 | l;
                            t += c.charAt(d >>> 18) + c.charAt(d >>> 12 & 63) + (void 0 !== o ? c.charAt(d >>> 6 & 63) : "=") + (void 0 !== l ? c.charAt(63 & d) : "=")
                        }
                        return e ? C(t) : t
                    });
                    var S, M = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        _ = function (e) {
                            switch (e.length) {
                                case 4:
                                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                    return f(55296 + (t >>> 10)) + f(56320 + (1023 & t));
                                case 3:
                                    return f((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return f((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        }, L = function (b) {
                            return b.replace(M, _)
                        }, T = function (e) {
                            var t = e.length, r = t % 4,
                                n = (t > 0 ? d[e.charAt(0)] << 18 : 0) | (t > 1 ? d[e.charAt(1)] << 12 : 0) | (t > 2 ? d[e.charAt(2)] << 6 : 0) | (t > 3 ? d[e.charAt(3)] : 0),
                                o = [f(n >>> 16), f(n >>> 8 & 255), f(255 & n)];
                            return o.length -= [0, 0, 2, 1][r], o.join("")
                        }, z = r.atob && "function" == typeof r.atob ? function (a) {
                            return r.atob(a)
                        } : function (a) {
                            return a.replace(/\S{1,4}/g, T)
                        }, N = function (a) {
                            return z(String(a).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        }, A = function (a) {
                            return String(a).replace(/[-_]/g, (function (e) {
                                return "-" == e ? "+" : "/"
                            })).replace(/[^A-Za-z0-9\+\/]/g, "")
                        }, O = function (a) {
                            return function (a) {
                                return L(z(a))
                            }(A(a))
                        };
                    r.Uint8Array && (S = function (a) {
                        return Uint8Array.from(N(A(a)), (function (e) {
                            return e.charCodeAt(0)
                        }))
                    });
                    var D = function () {
                        var e = r.Base64;
                        return r.Base64 = l, e
                    };
                    if (r.Base64 = {
                        VERSION: "2.6.4",
                        atob: N,
                        btoa: x,
                        fromBase64: O,
                        toBase64: k,
                        utob: v,
                        encode: k,
                        encodeURI: function (u) {
                            return k(u, !0)
                        },
                        btou: L,
                        decode: O,
                        noConflict: D,
                        fromUint8Array: o,
                        toUint8Array: S
                    }, "function" == typeof Object.defineProperty) {
                        var W = function (e) {
                            return {value: e, enumerable: !1, writable: !0, configurable: !0}
                        };
                        r.Base64.extendString = function () {
                            Object.defineProperty(String.prototype, "fromBase64", W((function () {
                                return O(this)
                            }))), Object.defineProperty(String.prototype, "toBase64", W((function (e) {
                                return k(this, e)
                            }))), Object.defineProperty(String.prototype, "toBase64URI", W((function () {
                                return k(this, !0)
                            })))
                        }
                    }
                    r.Meteor && (Base64 = r.Base64);
                    e.exports ? e.exports.Base64 = r.Base64 : void 0 === (n = function () {
                        return r.Base64
                    }.apply(t, [])) || (e.exports = n);
                    return {Base64: r.Base64}
                }(r)
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r ? r : this)
        }).call(this, r(25))
    }, 453: function (e, t, r) {
        !function (e) {
            "use strict";
            var t = {
                autoSelfClosers: {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0,
                    menuitem: !0
                },
                implicitlyClosed: {
                    dd: !0,
                    li: !0,
                    optgroup: !0,
                    option: !0,
                    p: !0,
                    rp: !0,
                    rt: !0,
                    tbody: !0,
                    td: !0,
                    tfoot: !0,
                    th: !0,
                    tr: !0
                },
                contextGrabbers: {
                    dd: {dd: !0, dt: !0},
                    dt: {dd: !0, dt: !0},
                    li: {li: !0},
                    option: {option: !0, optgroup: !0},
                    optgroup: {optgroup: !0},
                    p: {
                        address: !0,
                        article: !0,
                        aside: !0,
                        blockquote: !0,
                        dir: !0,
                        div: !0,
                        dl: !0,
                        fieldset: !0,
                        footer: !0,
                        form: !0,
                        h1: !0,
                        h2: !0,
                        h3: !0,
                        h4: !0,
                        h5: !0,
                        h6: !0,
                        header: !0,
                        hgroup: !0,
                        hr: !0,
                        menu: !0,
                        nav: !0,
                        ol: !0,
                        p: !0,
                        pre: !0,
                        section: !0,
                        table: !0,
                        ul: !0
                    },
                    rp: {rp: !0, rt: !0},
                    rt: {rp: !0, rt: !0},
                    tbody: {tbody: !0, tfoot: !0},
                    td: {td: !0, th: !0},
                    tfoot: {tbody: !0},
                    th: {td: !0, th: !0},
                    thead: {tbody: !0, tfoot: !0},
                    tr: {tr: !0}
                },
                doNotIndent: {pre: !0},
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0
            }, r = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1
            };
            e.defineMode("xml", (function (n, o) {
                var l, c, d = n.indentUnit, f = {}, h = o.htmlMode ? t : r;
                for (var m in h) f[m] = h[m];
                for (var m in o) f[m] = o[m];

                function v(e, t) {
                    function r(r) {
                        return t.tokenize = r, r(e, t)
                    }

                    var n = e.next();
                    return "<" == n ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? r(x("atom", "]]>")) : null : e.match("--") ? r(x("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), r(function e(t) {
                        return function (r, n) {
                            for (var o; null != (o = r.next());) {
                                if ("<" == o) return n.tokenize = e(t + 1), n.tokenize(r, n);
                                if (">" == o) {
                                    if (1 == t) {
                                        n.tokenize = v;
                                        break
                                    }
                                    return n.tokenize = e(t - 1), n.tokenize(r, n)
                                }
                            }
                            return "meta"
                        }
                    }(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = x("meta", "?>"), "meta") : (l = e.eat("/") ? "closeTag" : "openTag", t.tokenize = y, "tag bracket") : "&" == n ? (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null)
                }

                function y(e, t) {
                    var r, n, o = e.next();
                    if (">" == o || "/" == o && e.eat(">")) return t.tokenize = v, l = ">" == o ? "endTag" : "selfcloseTag", "tag bracket";
                    if ("=" == o) return l = "equals", null;
                    if ("<" == o) {
                        t.tokenize = v, t.state = S, t.tagName = t.tagStart = null;
                        var c = t.tokenize(e, t);
                        return c ? c + " tag error" : "tag error"
                    }
                    return /[\'\"]/.test(o) ? (t.tokenize = (r = o, (n = function (e, t) {
                        for (; !e.eol();) if (e.next() == r) {
                            t.tokenize = y;
                            break
                        }
                        return "string"
                    }).isInAttribute = !0, n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
                }

                function x(style, e) {
                    return function (t, r) {
                        for (; !t.eol();) {
                            if (t.match(e)) {
                                r.tokenize = v;
                                break
                            }
                            t.next()
                        }
                        return style
                    }
                }

                function w(e, t, r) {
                    this.prev = e.context, this.tagName = t || "", this.indent = e.indented, this.startOfLine = r, (f.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
                }

                function C(e) {
                    e.context && (e.context = e.context.prev)
                }

                function k(e, t) {
                    for (var r; ;) {
                        if (!e.context) return;
                        if (r = e.context.tagName, !f.contextGrabbers.hasOwnProperty(r) || !f.contextGrabbers[r].hasOwnProperty(t)) return;
                        C(e)
                    }
                }

                function S(e, t, r) {
                    return "openTag" == e ? (r.tagStart = t.column(), M) : "closeTag" == e ? _ : S
                }

                function M(e, t, r) {
                    return "word" == e ? (r.tagName = t.current(), c = "tag", z) : f.allowMissingTagName && "endTag" == e ? (c = "tag bracket", z(e, 0, r)) : (c = "error", M)
                }

                function _(e, t, r) {
                    if ("word" == e) {
                        var n = t.current();
                        return r.context && r.context.tagName != n && f.implicitlyClosed.hasOwnProperty(r.context.tagName) && C(r), r.context && r.context.tagName == n || !1 === f.matchClosing ? (c = "tag", L) : (c = "tag error", T)
                    }
                    return f.allowMissingTagName && "endTag" == e ? (c = "tag bracket", L(e, 0, r)) : (c = "error", T)
                }

                function L(e, t, r) {
                    return "endTag" != e ? (c = "error", L) : (C(r), S)
                }

                function T(e, t, r) {
                    return c = "error", L(e, 0, r)
                }

                function z(e, t, r) {
                    if ("word" == e) return c = "attribute", N;
                    if ("endTag" == e || "selfcloseTag" == e) {
                        var n = r.tagName, o = r.tagStart;
                        return r.tagName = r.tagStart = null, "selfcloseTag" == e || f.autoSelfClosers.hasOwnProperty(n) ? k(r, n) : (k(r, n), r.context = new w(r, n, o == r.indented)), S
                    }
                    return c = "error", z
                }

                function N(e, t, r) {
                    return "equals" == e ? A : (f.allowMissing || (c = "error"), z(e, 0, r))
                }

                function A(e, t, r) {
                    return "string" == e ? O : "word" == e && f.allowUnquoted ? (c = "string", z) : (c = "error", z(e, 0, r))
                }

                function O(e, t, r) {
                    return "string" == e ? O : z(e, 0, r)
                }

                return v.isInText = !0, {
                    startState: function (e) {
                        var t = {tokenize: v, state: S, indented: e || 0, tagName: null, tagStart: null, context: null};
                        return null != e && (t.baseIndent = e), t
                    },
                    token: function (e, t) {
                        if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                        l = null;
                        var style = t.tokenize(e, t);
                        return (style || l) && "comment" != style && (c = null, t.state = t.state(l || style, e, t), c && (style = "error" == c ? style + " error" : c)), style
                    },
                    indent: function (t, r, n) {
                        var o = t.context;
                        if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + d;
                        if (o && o.noIndent) return e.Pass;
                        if (t.tokenize != y && t.tokenize != v) return n ? n.match(/^(\s*)/)[0].length : 0;
                        if (t.tagName) return !1 !== f.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + d * (f.multilineTagIndentFactor || 1);
                        if (f.alignCDATA && /<!\[CDATA\[/.test(r)) return 0;
                        var l = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
                        if (l && l[1]) for (; o;) {
                            if (o.tagName == l[2]) {
                                o = o.prev;
                                break
                            }
                            if (!f.implicitlyClosed.hasOwnProperty(o.tagName)) break;
                            o = o.prev
                        } else if (l) for (; o;) {
                            var c = f.contextGrabbers[o.tagName];
                            if (!c || !c.hasOwnProperty(l[2])) break;
                            o = o.prev
                        }
                        for (; o && o.prev && !o.startOfLine;) o = o.prev;
                        return o ? o.indent + d : t.baseIndent || 0
                    },
                    electricInput: /<\/[\s\w:]+>$/,
                    blockCommentStart: "\x3c!--",
                    blockCommentEnd: "--\x3e",
                    configuration: f.htmlMode ? "html" : "xml",
                    helperType: f.htmlMode ? "html" : "xml",
                    skipAttribute: function (e) {
                        e.state == A && (e.state = z)
                    },
                    xmlCurrentTag: function (e) {
                        return e.tagName ? {name: e.tagName, close: "closeTag" == e.type} : null
                    },
                    xmlCurrentContext: function (e) {
                        for (var t = [], r = e.context; r; r = r.prev) t.push(r.tagName);
                        return t.reverse()
                    }
                }
            })), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
                name: "xml",
                htmlMode: !0
            })
        }(r(443))
    }
}]);
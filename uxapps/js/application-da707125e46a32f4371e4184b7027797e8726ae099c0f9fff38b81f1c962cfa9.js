(function() {



    geolocation = {};
    geolocation.requestGeo = function(c) {
        geolocation.cdn3Requested = +new Date;
        var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
            a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = c;
        b.insertBefore(a, b.firstChild)
    };


    var optly = {
        nativity: {}
    };
    optly.nativity.getNativeGetElementsByClassName = function() {
        var a = document.getElementsByClassName;
        if (!optly.nativity.isNativeFunction(a)) var a = (window.optimizely || {}).getElementsByClassName,
            b = (window.optly || {}).getElementsByClassName,
            a = optly.nativity.isNativeFunction(a) ? a : optly.nativity.isNativeFunction(b) ? b : null;
        return a
    };
    optly.nativity.isNativeFunction = function(a) {
        return a && -1 !== String(a).indexOf("[native code]")
    };
    optly.Cleanse = {};
    optly.Cleanse.each = function(a, b, d) {
        var h = !!Object.prototype.__lookupGetter__,
            e = !!Object.prototype.__lookupSetter__,
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var f = h ? a.__lookupGetter__(c) : null,
                    g = e ? a.__lookupSetter__(c) : null;
                try {
                    b.call(d, c, !f ? a[c] : null, f, g)
                } catch (i) {}
            }
    };
    optly.Cleanse.finish = function() {
        if (optly.Cleanse.running) {
            optly.Cleanse.running = !1;
            optly.Cleanse.each(optly.Cleanse.types, function(a, d) {
                Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function(c, b) {
                    d.prototype.__defineGetter__(c, b);
                    optly.Cleanse.log("restored getter", a, c)
                });
                Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function(c, b) {
                    d.prototype.__defineSetter__(c, b);
                    optly.Cleanse.log("restored setter", a, c)
                });
                optly.Cleanse.each(optly.Cleanse.properties[a],
                    function(b, f) {
                        d.prototype[b] = f;
                        optly.Cleanse.log("restored property", a, b)
                    })
            });
            optly.Cleanse.unfixGetElementsByClassName();
            optly.Cleanse.log("finish");
            var a = window.console;
            if ((-1 !== window.location.hash.indexOf("optimizely_log=true") || -1 !== window.location.search.indexOf("optimizely_log=true")) && a && a.log)
                for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++) a.log(b[d])
        }
    };
    optly.Cleanse.log = function(a, b, d) {
        b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)
    };
    optly.Cleanse.start = function() {
        var a = window.location.hostname;
        if (!(-1 !== a.indexOf("optimizely") && -1 === a.indexOf("edit") && -1 === a.indexOf("preview") && -1 === a.indexOf("test")))
            if (optly.Cleanse.running) optly.Cleanse.log("already running so didn't start");
            else {
                optly.Cleanse.log("start");
                optly.Cleanse.running = !0;
                for (var b in optly.Cleanse.types) optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
                optly.Cleanse.each(optly.Cleanse.types, function(a, b) {
                    optly.Cleanse.getters[a] = {};
                    optly.Cleanse.properties[a] = {};
                    optly.Cleanse.setters[a] = {};
                    optly.Cleanse.each(b.prototype, function(e, c, f, g) {
                        optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])
                    })
                });
                optly.Cleanse.fixGetElementsByClassName();
                optly.Cleanse.hasRunStart = !0
            }
    };
    optly.Cleanse.fixGetElementsByClassName = function() {
        if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
            var a = optly.nativity.getNativeGetElementsByClassName();
            a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
        }
    };
    optly.Cleanse.unfixGetElementsByClassName = function() {
        optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)
    };
    optly.Cleanse.getElementsByClassName = null;
    optly.Cleanse.getters = {};
    optly.Cleanse.logs = [];
    optly.Cleanse.properties = {};
    optly.Cleanse.setters = {};
    optly.Cleanse.types = {
        Object_: Object
    };
    window.optly = window.optly || {};
    window.optly.Cleanse = {
        finish: optly.Cleanse.finish,
        logs: optly.Cleanse.logs,
        start: optly.Cleanse.start
    };
    optly.Cleanse.start();
    var $ = function(r, m) {
        function ya(a, b, c) {
            if (c === m && 1 === a.nodeType)
                if (c = "data-" + b.replace(kb, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : !d.isNaN(c) ? parseFloat(c) : lb.test(c) ? d.parseJSON(c) : c
                    } catch (g) {}
                    d.data(a, b, c)
                } else c = m;
            return c
        }

        function ha(a) {
            for (var b in a)
                if ("toJSON" !== b) return !1;
            return !0
        }

        function za(a, b, c) {
            var g = b + "defer",
                e = b + "queue",
                f = b + "mark",
                h = d.data(a, g, m, !0);
            h && (("queue" === c || !d.data(a, e, m, !0)) && ("mark" === c || !d.data(a,
                f, m, !0))) && setTimeout(function() {
                !d.data(a, e, m, !0) && !d.data(a, f, m, !0) && (d.removeData(a, g, !0), h.resolve())
            }, 0)
        }

        function w() {
            return !1
        }

        function O() {
            return !0
        }

        function Aa(a, b, c) {
            var g = d.extend({}, c[0]);
            g.type = a;
            g.originalEvent = {};
            g.liveFired = m;
            d.event.handle.call(b, g);
            g.isDefaultPrevented() && c[0].preventDefault()
        }

        function mb(a) {
            var b, c, g, e, f, h, i, j, k, m, l, q = [];
            e = [];
            f = d._data(this, "events");
            if (!(a.liveFired === this || !f || !f.live || a.target.disabled || a.button && "click" === a.type)) {
                a.namespace && (l = RegExp("(^|\\.)" +
                    a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var n = f.live.slice(0);
                for (i = 0; i < n.length; i++) f = n[i], f.origType.replace(ia, "") === a.type ? e.push(f.selector) : n.splice(i--, 1);
                e = d(a.target).closest(e, a.currentTarget);
                j = 0;
                for (k = e.length; j < k; j++) {
                    m = e[j];
                    for (i = 0; i < n.length; i++)
                        if (f = n[i], m.selector === f.selector && (!l || l.test(f.namespace)) && !m.elem.disabled) {
                            h = m.elem;
                            g = null;
                            if ("mouseenter" === f.preType || "mouseleave" === f.preType) a.type = f.preType, (g = d(a.relatedTarget).closest(f.selector)[0]) &&
                                d.contains(h, g) && (g = h);
                            (!g || g !== h) && q.push({
                                elem: h,
                                handleObj: f,
                                level: m.level
                            })
                        }
                }
                j = 0;
                for (k = q.length; j < k; j++) {
                    e = q[j];
                    if (c && e.level > c) break;
                    a.currentTarget = e.elem;
                    a.data = e.handleObj.data;
                    a.handleObj = e.handleObj;
                    l = e.handleObj.origHandler.apply(e.elem, arguments);
                    if (!1 === l || a.isPropagationStopped())
                        if (c = e.level, !1 === l && (b = !1), a.isImmediatePropagationStopped()) break
                }
                return b
            }
        }

        function P(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(nb, "`").replace(ob, "&")
        }

        function Ba(a, b, c) {
            b = b || 0;
            if (d.isFunction(b)) return d.grep(a,
                function(a, g) {
                    return !!b.call(a, g, a) === c
                });
            if (b.nodeType) return d.grep(a, function(a) {
                return a === b === c
            });
            if ("string" === typeof b) {
                var g = d.grep(a, function(a) {
                    return 1 === a.nodeType
                });
                if (pb.test(b)) return d.filter(b, g, !c);
                b = d.filter(b, g)
            }
            return d.grep(a, function(a) {
                return 0 <= d.inArray(a, b) === c
            })
        }

        function Ca(a, b) {
            if (1 === b.nodeType && d.hasData(a)) {
                var c = d.expando,
                    g = d.data(a),
                    e = d.data(b, g);
                if (g = g[c]) {
                    var f = g.events,
                        e = e[c] = d.extend({}, g);
                    if (f) {
                        delete e.handle;
                        e.events = {};
                        for (var h in f) {
                            c = 0;
                            for (g = f[h].length; c <
                                g; c++) d.event.add(b, h + (f[h][c].namespace ? "." : "") + f[h][c].namespace, f[h][c], f[h][c].data)
                        }
                    }
                }
            }
        }

        function Da(a, b) {
            var c;
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                c = b.nodeName.toLowerCase();
                if ("object" === c) b.outerHTML = a.outerHTML;
                else if ("input" === c && ("checkbox" === a.type || "radio" === a.type)) {
                    if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value) b.value = a.value
                } else if ("option" === c) b.selected = a.defaultSelected;
                else if ("input" === c ||
                    "textarea" === c) b.defaultValue = a.defaultValue;
                b.removeAttribute(d.expando)
            }
        }

        function Q(a) {
            return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
        }

        function Ea(a) {
            if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
        }

        function Fa(a) {
            d.nodeName(a, "input") ? Ea(a) : "getElementsByTagName" in a && d.grep(a.getElementsByTagName("input"), Ea)
        }

        function qb(a, b) {
            b.src ? d.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : d.globalEval((b.text || b.textContent ||
                b.innerHTML || "").replace(rb, "/*$0*/"));
            b.parentNode && b.parentNode.removeChild(b)
        }

        function Ga(a, b, c) {
            var g = "width" === b ? a.offsetWidth : a.offsetHeight,
                e = "width" === b ? sb : tb;
            if (0 < g) return "border" !== c && d.each(e, function() {
                c || (g -= parseFloat(d.css(a, "padding" + this)) || 0);
                g = "margin" === c ? g + (parseFloat(d.css(a, c + this)) || 0) : g - (parseFloat(d.css(a, "border" + this + "Width")) || 0)
            }), g + "px";
            g = A(a, b, b);
            if (0 > g || null == g) g = a.style[b] || 0;
            g = parseFloat(g) || 0;
            c && d.each(e, function() {
                g += parseFloat(d.css(a, "padding" + this)) || 0;
                "padding" !==
                c && (g += parseFloat(d.css(a, "border" + this + "Width")) || 0);
                "margin" === c && (g += parseFloat(d.css(a, c + this)) || 0)
            });
            return g + "px"
        }
        var l = r.document,
            d, Ha = function() {
                if (!k.isReady) {
                    try {
                        l.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(Ha, 1);
                        return
                    }
                    k.ready()
                }
            },
            k = function(a, b) {
                return new k.fn.init(a, b, Ia)
            },
            ub = r.jQuery,
            vb = r.$,
            Ia, wb = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            Ja = /\S/,
            Ka = /^\s+/,
            La = /\s+$/,
            xb = /\d/,
            yb = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            zb = /^[\],:{}\s]*$/,
            Ab = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            Bb = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            Cb = /(?:^|:|,)(?:\s*\[)+/g,
            Db = /(webkit)[ \/]([\w.]+)/,
            Eb = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            Fb = /(msie) ([\w.]+)/,
            Gb = /(mozilla)(?:.*? rv:([\w.]+))?/,
            Hb = /-([a-z]|[0-9])/ig,
            Ib = /^-ms-/,
            Jb = function(a, b) {
                return (b + "").toUpperCase()
            },
            Kb = r.navigator.userAgent,
            R, S, B, Lb = Object.prototype.toString,
            ja = Object.prototype.hasOwnProperty,
            ka = Array.prototype.push,
            I = Array.prototype.slice,
            Ma = String.prototype.trim,
            Na = Array.prototype.indexOf,
            Oa = {};
        k.fn = k.prototype = {
            constructor: k,
            init: function(a, b, c) {
                var g;
                if (!a) return this;
                if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                if ("body" === a && !b && l.body) return this.context = l, this[0] = l.body, this.selector = a, this.length = 1, this;
                if ("string" === typeof a) {
                    if ((g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : wb.exec(a)) && (g[1] || !b)) {
                        if (g[1]) return c = (b = b instanceof k ? b[0] : b) ? b.ownerDocument || b : l, (a = yb.exec(a)) ? k.isPlainObject(b) ? (a = [l.createElement(a[1])], k.fn.attr.call(a, b, !0)) : a = [c.createElement(a[1])] : (a = k.buildFragment([g[1]], [c]), a = (a.cacheable ?
                            k.clone(a.fragment) : a.fragment).childNodes), k.merge(this, a);
                        if ((b = l.getElementById(g[2])) && b.parentNode) {
                            if (b.id !== g[2]) return c.find(a);
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = l;
                        this.selector = a;
                        return this
                    }
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (k.isFunction(a)) return c.ready(a);
                a.selector !== m && (this.selector = a.selector, this.context = a.context);
                return k.makeArray(a, this)
            },
            selector: "",
            jquery: "1.6.4",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return I.call(this,
                    0)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var g = this.constructor();
                k.isArray(a) ? ka.apply(g, a) : k.merge(g, a);
                g.prevObject = this;
                g.context = this.context;
                "find" === b ? g.selector = this.selector + (this.selector ? " " : "") + c : b && (g.selector = this.selector + "." + b + "(" + c + ")");
                return g
            },
            each: function(a, b) {
                return k.each(this, a, b)
            },
            ready: function(a) {
                k.bindReady();
                S.done(a);
                return this
            },
            eq: function(a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(I.apply(this, arguments), "slice", I.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(k.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ka,
            sort: [].sort,
            splice: [].splice
        };
        k.fn.init.prototype = k.fn;
        k.extend = k.fn.extend = function() {
            var a, b, c, g, d, f = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            "boolean" === typeof f && (j = f, f = arguments[1] || {}, h = 2);
            "object" !==
            typeof f && !k.isFunction(f) && (f = {});
            i === h && (f = this, --h);
            for (; h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = f[b], g = a[b], f !== g && (j && g && (k.isPlainObject(g) || (d = k.isArray(g))) ? (d ? (d = !1, c = c && k.isArray(c) ? c : []) : c = c && k.isPlainObject(c) ? c : {}, f[b] = k.extend(j, c, g)) : g !== m && (f[b] = g));
            return f
        };
        k.extend({
            noConflict: function(a) {
                r.$ === k && (r.$ = vb);
                a && r.jQuery === k && (r.jQuery = ub);
                return k
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? k.readyWait++ : k.ready(!0)
            },
            ready: function(a) {
                if (!0 === a && !--k.readyWait || !0 !== a &&
                    !k.isReady) {
                    if (!l.body) return setTimeout(k.ready, 1);
                    k.isReady = !0;
                    !0 !== a && 0 < --k.readyWait || (S.resolveWith(l, [k]), k.fn.trigger && k(l).trigger("ready").unbind("ready"))
                }
            },
            bindReady: function() {
                if (!S) {
                    S = k._Deferred();
                    if ("complete" === l.readyState) return setTimeout(k.ready, 1);
                    if (l.addEventListener) l.addEventListener("DOMContentLoaded", B, !1), r.addEventListener("load", k.ready, !1);
                    else if (l.attachEvent) {
                        l.attachEvent("onreadystatechange", B);
                        r.attachEvent("onload", k.ready);
                        var a = !1;
                        try {
                            a = null == r.frameElement
                        } catch (b) {}
                        l.documentElement.doScroll &&
                            a && Ha()
                    }
                }
            },
            isFunction: function(a) {
                return "function" === k.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === k.type(a)
            },
            isWindow: function(a) {
                return a && "object" === typeof a && "setInterval" in a
            },
            isNaN: function(a) {
                return null == a || !xb.test(a) || isNaN(a)
            },
            type: function(a) {
                return null == a ? String(a) : Oa[Lb.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || "object" !== k.type(a) || a.nodeType || k.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ja.call(a, "constructor") && !ja.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (b) {
                    return !1
                }
                for (var c in a);
                return c === m || ja.call(a, c)
            },
            isEmptyObject: function(a) {
                for (var b in a) return !1;
                return !0
            },
            error: function(a) {
                throw a;
            },
            parseJSON: function(a) {
                if ("string" !== typeof a || !a) return null;
                a = k.trim(a);
                if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                if (zb.test(a.replace(Ab, "@").replace(Bb, "]").replace(Cb, ""))) return (new Function("return " + a))();
                k.error("Invalid JSON: " + a)
            },
            parseXML: function(a) {
                var b, c;
                try {
                    r.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async =
                        "false", b.loadXML(a))
                } catch (g) {
                    b = m
                }(!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && k.error("Invalid XML: " + a);
                return b
            },
            noop: function() {},
            globalEval: function(a) {
                a && Ja.test(a) && (r.execScript || function(a) {
                    r.eval.call(r, a)
                })(a)
            },
            camelCase: function(a) {
                return a.replace(Ib, "ms-").replace(Hb, Jb)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, b, c) {
                var g, d = 0,
                    f = a.length,
                    h = f === m || k.isFunction(a);
                if (c)
                    if (h)
                        for (g in a) {
                            if (!1 === b.apply(a[g],
                                    c)) break
                        } else
                            for (; d < f && !1 !== b.apply(a[d++], c););
                    else if (h)
                    for (g in a) {
                        if (!1 === b.call(a[g], g, a[g])) break
                    } else
                        for (; d < f && !1 !== b.call(a[d], d, a[d++]););
                return a
            },
            trim: Ma ? function(a) {
                return null == a ? "" : Ma.call(a)
            } : function(a) {
                return null == a ? "" : a.toString().replace(Ka, "").replace(La, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (null != a) {
                    var g = k.type(a);
                    null == a.length || "string" === g || "function" === g || "regexp" === g || k.isWindow(a) ? ka.call(c, a) : k.merge(c, a)
                }
                return c
            },
            inArray: function(a, b) {
                if (!b) return -1;
                if (Na) return Na.call(b,
                    a);
                for (var c = 0, g = b.length; c < g; c++)
                    if (b[c] === a) return c;
                return -1
            },
            merge: function(a, b) {
                var c = a.length,
                    g = 0;
                if ("number" === typeof b.length)
                    for (var d = b.length; g < d; g++) a[c++] = b[g];
                else
                    for (; b[g] !== m;) a[c++] = b[g++];
                a.length = c;
                return a
            },
            grep: function(a, b, c) {
                for (var g = [], d, c = !!c, f = 0, h = a.length; f < h; f++) d = !!b(a[f], f), c !== d && g.push(a[f]);
                return g
            },
            map: function(a, b, c) {
                var g, d, f = [],
                    h = 0,
                    i = a.length;
                if (a instanceof k || i !== m && "number" === typeof i && (0 < i && a[0] && a[i - 1] || 0 === i || k.isArray(a)))
                    for (; h < i; h++) g = b(a[h], h, c), null !=
                        g && (f[f.length] = g);
                else
                    for (d in a) g = b(a[d], d, c), null != g && (f[f.length] = g);
                return f.concat.apply([], f)
            },
            guid: 1,
            proxy: function(a, b) {
                if ("string" === typeof b) var c = a[b],
                    b = a,
                    a = c;
                if (!k.isFunction(a)) return m;
                var d = I.call(arguments, 2),
                    c = function() {
                        return a.apply(b, d.concat(I.call(arguments)))
                    };
                c.guid = a.guid = a.guid || c.guid || k.guid++;
                return c
            },
            access: function(a, b, c, d, e, f) {
                var h = a.length;
                if ("object" === typeof b) {
                    for (var i in b) k.access(a, i, b[i], d, e, c);
                    return a
                }
                if (c !== m) {
                    d = !f && d && k.isFunction(c);
                    for (i = 0; i < h; i++) e(a[i],
                        b, d ? c.call(a[i], i, e(a[i], b)) : c, f);
                    return a
                }
                return h ? e(a[0], b) : m
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                a = Db.exec(a) || Eb.exec(a) || Fb.exec(a) || 0 > a.indexOf("compatible") && Gb.exec(a) || [];
                return {
                    browser: a[1] || "",
                    version: a[2] || "0"
                }
            },
            sub: function() {
                function a(b, d) {
                    return new a.fn.init(b, d)
                }
                k.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function(c, d) {
                    d && (d instanceof k && !(d instanceof a)) && (d = a(d));
                    return k.fn.init.call(this,
                        c, d, b)
                };
                a.fn.init.prototype = a.fn;
                var b = a(l);
                return a
            },
            browser: {}
        });
        k.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            Oa["[object " + b + "]"] = b.toLowerCase()
        });
        R = k.uaMatch(Kb);
        R.browser && (k.browser[R.browser] = !0, k.browser.version = R.version);
        k.browser.webkit && (k.browser.safari = !0);
        Ja.test("\u00a0") && (Ka = /^[\s\xA0]+/, La = /[\s\xA0]+$/);
        Ia = k(l);
        l.addEventListener ? B = function() {
            l.removeEventListener("DOMContentLoaded", B, false);
            k.ready()
        } : l.attachEvent && (B = function() {
            if (l.readyState ===
                "complete") {
                l.detachEvent("onreadystatechange", B);
                k.ready()
            }
        });
        d = k;
        var la = "done fail isResolved isRejected promise then always pipe".split(" "),
            Pa = [].slice;
        d.extend({
            _Deferred: function() {
                var a = [],
                    b, c, g, e = {
                        done: function() {
                            if (!g) {
                                var c = arguments,
                                    h, i, j, k, m;
                                if (b) {
                                    m = b;
                                    b = 0
                                }
                                h = 0;
                                for (i = c.length; h < i; h++) {
                                    j = c[h];
                                    k = d.type(j);
                                    k === "array" ? e.done.apply(e, j) : k === "function" && a.push(j)
                                }
                                m && e.resolveWith(m[0], m[1])
                            }
                            return this
                        },
                        resolveWith: function(d, e) {
                            if (!g && !b && !c) {
                                e = e || [];
                                c = 1;
                                try {
                                    for (; a[0];) a.shift().apply(d, e)
                                } finally {
                                    b = [d, e];
                                    c = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            e.resolveWith(this, arguments);
                            return this
                        },
                        isResolved: function() {
                            return !(!c && !b)
                        },
                        cancel: function() {
                            g = 1;
                            a = [];
                            return this
                        }
                    };
                return e
            },
            Deferred: function(a) {
                var b = d._Deferred(),
                    c = d._Deferred(),
                    g;
                d.extend(b, {
                    then: function(a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function() {
                        return b.done.apply(b, arguments).fail.apply(this, arguments)
                    },
                    fail: c.done,
                    rejectWith: c.resolveWith,
                    reject: c.resolve,
                    isRejected: c.isResolved,
                    pipe: function(a, c) {
                        return d.Deferred(function(g) {
                            d.each({
                                done: [a,
                                    "resolve"
                                ],
                                fail: [c, "reject"]
                            }, function(a, c) {
                                var f = c[0],
                                    e = c[1],
                                    k;
                                if (d.isFunction(f)) b[a](function() {
                                    if ((k = f.apply(this, arguments)) && d.isFunction(k.promise)) k.promise().then(g.resolve, g.reject);
                                    else g[e + "With"](this === b ? g : this, [k])
                                });
                                else b[a](g[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) {
                            if (g) return g;
                            g = a = {}
                        }
                        for (var c = la.length; c--;) a[la[c]] = b[la[c]];
                        return a
                    }
                });
                b.done(c.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        c[a] = arguments.length >
                            1 ? Pa.call(arguments, 0) : b;
                        --f || h.resolveWith(h, Pa.call(c, 0))
                    }
                }
                var c = arguments,
                    g = 0,
                    e = c.length,
                    f = e,
                    h = e <= 1 && a && d.isFunction(a.promise) ? a : d.Deferred();
                if (e > 1) {
                    for (; g < e; g++) c[g] && d.isFunction(c[g].promise) ? c[g].promise().then(b(g), h.reject) : --f;
                    f || h.resolveWith(h, c)
                } else h !== a && h.resolveWith(h, e ? [a] : []);
                return h.promise()
            }
        });
        var Mb = d,
            ma;
        var o = l.createElement("div"),
            Nb = l.documentElement,
            na, C, T, U, u, D, s, V, J, W, x, X, K, Y, E, F;
        o.setAttribute("className", "t");
        o.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        na = o.getElementsByTagName("*");
        C = o.getElementsByTagName("a")[0];
        if (!na || !na.length || !C) ma = {};
        else {
            T = l.createElement("select");
            U = T.appendChild(l.createElement("option"));
            u = o.getElementsByTagName("input")[0];
            s = {
                leadingWhitespace: 3 === o.firstChild.nodeType,
                tbody: !o.getElementsByTagName("tbody").length,
                htmlSerialize: !!o.getElementsByTagName("link").length,
                style: /top/.test(C.getAttribute("style")),
                hrefNormalized: "/a" === C.getAttribute("href"),
                opacity: /^0.55$/.test(C.style.opacity),
                cssFloat: !!C.style.cssFloat,
                checkOn: "on" === u.value,
                optSelected: U.selected,
                getSetAttribute: "t" !== o.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            u.checked = !0;
            s.noCloneChecked = u.cloneNode(!0).checked;
            T.disabled = !0;
            s.optDisabled = !U.disabled;
            try {
                delete o.test
            } catch (jc) {
                s.deleteExpando = !1
            }!o.addEventListener && (o.attachEvent && o.fireEvent) && (o.attachEvent("onclick", function() {
                s.noCloneEvent = false
            }), o.cloneNode(!0).fireEvent("onclick"));
            u = l.createElement("input");
            u.value = "t";
            u.setAttribute("type", "radio");
            s.radioValue = "t" === u.value;
            u.setAttribute("checked", "checked");
            o.appendChild(u);
            V = l.createDocumentFragment();
            V.appendChild(o.firstChild);
            s.checkClone = V.cloneNode(!0).cloneNode(!0).lastChild.checked;
            o.innerHTML = "";
            o.style.width = o.style.paddingLeft = "1px";
            J = l.getElementsByTagName("body")[0];
            x = l.createElement(J ? "div" : "body");
            X = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            J && d.extend(X, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (E in X) x.style[E] = X[E];
            x.appendChild(o);
            W = J || Nb;
            W.insertBefore(x, W.firstChild);
            s.appendChecked = u.checked;
            s.boxModel = 2 === o.offsetWidth;
            "zoom" in o.style && (o.style.display = "inline", o.style.zoom = 1, s.inlineBlockNeedsLayout = 2 === o.offsetWidth, o.style.display = "", o.innerHTML = "<div style='width:4px;'></div>", s.shrinkWrapBlocks = 2 !== o.offsetWidth);
            o.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            K = o.getElementsByTagName("td");
            F = 0 === K[0].offsetHeight;
            K[0].style.display = "";
            K[1].style.display = "none";
            s.reliableHiddenOffsets = F && 0 === K[0].offsetHeight;
            o.innerHTML = "";
            l.defaultView && l.defaultView.getComputedStyle && (D = l.createElement("div"), D.style.width = "0", D.style.marginRight = "0", o.appendChild(D), s.reliableMarginRight = 0 === (parseInt((l.defaultView.getComputedStyle(D, null) || {
                marginRight: 0
            }).marginRight, 10) || 0));
            x.innerHTML = "";
            W.removeChild(x);
            if (o.attachEvent)
                for (E in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) Y = "on" + E, F = Y in o, F || (o.setAttribute(Y,
                    "return;"), F = "function" === typeof o[Y]), s[E + "Bubbles"] = F;
            x = V = T = U = J = D = o = u = null;
            ma = s
        }
        Mb.support = ma;
        d.boxModel = d.support.boxModel;
        var lb = /^(?:\{.*\}|\[.*\])$/,
            kb = /([A-Z])/g;
        d.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
                return !!a && !ha(a)
            },
            data: function(a, b, c, g) {
                if (d.acceptData(a)) {
                    var e = d.expando,
                        f = typeof b === "string",
                        h = a.nodeType,
                        i = h ? d.cache : a,
                        j = h ? a[d.expando] : a[d.expando] && d.expando;
                    if (j && (!g || !j || !i[j] || i[j][e]) || !(f && c === m)) {
                        if (!j) h ? a[d.expando] = j = ++d.uuid : j = d.expando;
                        if (!i[j]) {
                            i[j] = {};
                            if (!h) i[j].toJSON = d.noop
                        }
                        if (typeof b === "object" || typeof b === "function") g ? i[j][e] = d.extend(i[j][e], b) : i[j] = d.extend(i[j], b);
                        a = i[j];
                        if (g) {
                            a[e] || (a[e] = {});
                            a = a[e]
                        }
                        c !== m && (a[d.camelCase(b)] = c);
                        if (b === "events" && !a[b]) return a[e] && a[e].events;
                        if (f) {
                            c = a[b];
                            c == null && (c = a[d.camelCase(b)])
                        } else c = a;
                        return c
                    }
                }
            },
            removeData: function(a, b, c) {
                if (d.acceptData(a)) {
                    var g,
                        e = d.expando,
                        f = a.nodeType,
                        h = f ? d.cache : a,
                        i = f ? a[d.expando] : d.expando;
                    if (h[i]) {
                        if (b)
                            if (g = c ? h[i][e] : h[i]) {
                                g[b] || (b = d.camelCase(b));
                                delete g[b];
                                if (!ha(g)) return
                            }
                        if (c) {
                            delete h[i][e];
                            if (!ha(h[i])) return
                        }
                        b = h[i][e];
                        d.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null;
                        if (b) {
                            h[i] = {};
                            if (!f) h[i].toJSON = d.noop;
                            h[i][e] = b
                        } else f && (d.support.deleteExpando ? delete a[d.expando] : a.removeAttribute ? a.removeAttribute(d.expando) : a[d.expando] = null)
                    }
                }
            },
            _data: function(a, b, c) {
                return d.data(a, b, c, true)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b =
                        d.noData[a.nodeName.toLowerCase()];
                    if (b) return !(b === true || a.getAttribute("classid") !== b)
                }
                return true
            }
        });
        d.fn.extend({
            data: function(a, b) {
                var c = null;
                if (typeof a === "undefined") {
                    if (this.length) {
                        c = d.data(this[0]);
                        if (this[0].nodeType === 1)
                            for (var g = this[0].attributes, e, f = 0, h = g.length; f < h; f++) {
                                e = g[f].name;
                                if (e.indexOf("data-") === 0) {
                                    e = d.camelCase(e.substring(5));
                                    ya(this[0], e, c[e])
                                }
                            }
                    }
                    return c
                }
                if (typeof a === "object") return this.each(function() {
                    d.data(this, a)
                });
                var i = a.split(".");
                i[1] = i[1] ? "." + i[1] : "";
                if (b ===
                    m) {
                    c = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
                    if (c === m && this.length) {
                        c = d.data(this[0], a);
                        c = ya(this[0], a, c)
                    }
                    return c === m && i[1] ? this.data(i[0]) : c
                }
                return this.each(function() {
                    var c = d(this),
                        g = [i[0], b];
                    c.triggerHandler("setData" + i[1] + "!", g);
                    d.data(this, a, b);
                    c.triggerHandler("changeData" + i[1] + "!", g)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    d.removeData(this, a)
                })
            }
        });
        d.extend({
            _mark: function(a, b) {
                if (a) {
                    b = (b || "fx") + "mark";
                    d.data(a, b, (d.data(a, b, m, true) || 0) + 1, true)
                }
            },
            _unmark: function(a, b,
                c) {
                if (a !== true) {
                    c = b;
                    b = a;
                    a = false
                }
                if (b) {
                    var c = c || "fx",
                        g = c + "mark";
                    if (a = a ? 0 : (d.data(b, g, m, true) || 1) - 1) d.data(b, g, a, true);
                    else {
                        d.removeData(b, g, true);
                        za(b, c, "mark")
                    }
                }
            },
            queue: function(a, b, c) {
                if (a) {
                    var b = (b || "fx") + "queue",
                        g = d.data(a, b, m, true);
                    c && (!g || d.isArray(c) ? g = d.data(a, b, d.makeArray(c), true) : g.push(c));
                    return g || []
                }
            },
            dequeue: function(a, b) {
                var b = b || "fx",
                    c = d.queue(a, b),
                    g = c.shift();
                g === "inprogress" && (g = c.shift());
                if (g) {
                    b === "fx" && c.unshift("inprogress");
                    g.call(a, function() {
                        d.dequeue(a, b)
                    })
                }
                if (!c.length) {
                    d.removeData(a,
                        b + "queue", true);
                    za(a, b, "queue")
                }
            }
        });
        d.fn.extend({
            queue: function(a, b) {
                if (typeof a !== "string") {
                    b = a;
                    a = "fx"
                }
                return b === m ? d.queue(this[0], a) : this.each(function() {
                    var c = d.queue(this, a, b);
                    a === "fx" && c[0] !== "inprogress" && d.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    d.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                a = d.fx ? d.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function() {
                    var c = this;
                    setTimeout(function() {
                        d.dequeue(c, b)
                    }, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a) {
                function b() {
                    --f ||
                        c.resolveWith(g, [g])
                }
                typeof a !== "string" && (a = m);
                for (var a = a || "fx", c = d.Deferred(), g = this, e = g.length, f = 1, h = a + "defer", i = a + "queue", a = a + "mark", j; e--;)
                    if (j = d.data(g[e], h, m, true) || (d.data(g[e], i, m, true) || d.data(g[e], a, m, true)) && d.data(g[e], h, d._Deferred(), true)) {
                        f++;
                        j.done(b)
                    }
                b();
                return c.promise()
            }
        });
        var Qa = /[\n\t\r]/g,
            oa = /\s+/,
            Ob = /\r/g,
            Pb = /^(?:button|input)$/i,
            Qb = /^(?:button|input|object|select|textarea)$/i,
            Rb = /^a(?:rea)?$/i,
            Ra = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            y, Sa;
        d.fn.extend({
            attr: function(a, b) {
                return d.access(this, a, b, true, d.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    d.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return d.access(this, a, b, true, d.prop)
            },
            removeProp: function(a) {
                a = d.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = m;
                        delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a)) return this.each(function(b) {
                    d(this).addClass(a.call(this, b, this.className))
                });
                if (a && typeof a === "string") {
                    b = a.split(oa);
                    c =
                        0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1)
                            if (!e.className && b.length === 1) e.className = a;
                            else {
                                f = " " + e.className + " ";
                                h = 0;
                                for (i = b.length; h < i; h++) ~f.indexOf(" " + b[h] + " ") || (f = f + (b[h] + " "));
                                e.className = d.trim(f)
                            }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a)) return this.each(function(b) {
                    d(this).removeClass(a.call(this, b, this.className))
                });
                if (a && typeof a === "string" || a === m) {
                    b = (a || "").split(oa);
                    c = 0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1 && e.className)
                            if (a) {
                                f =
                                    (" " + e.className + " ").replace(Qa, " ");
                                h = 0;
                                for (i = b.length; h < i; h++) f = f.replace(" " + b[h] + " ", " ");
                                e.className = d.trim(f)
                            } else e.className = ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    g = typeof b === "boolean";
                return d.isFunction(a) ? this.each(function(c) {
                    d(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if (c === "string")
                        for (var e, f = 0, h = d(this), i = b, j = a.split(oa); e = j[f++];) {
                            i = g ? i : !h.hasClass(e);
                            h[i ? "addClass" : "removeClass"](e)
                        } else if (c === "undefined" || c === "boolean") {
                            this.className &&
                                d._data(this, "__className__", this.className);
                            this.className = this.className || a === false ? "" : d._data(this, "__className__") || ""
                        }
                })
            },
            hasClass: function(a) {
                for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)
                    if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(Qa, " ").indexOf(a) > -1) return true;
                return false
            },
            val: function(a) {
                var b, c, g = this[0];
                if (!arguments.length) {
                    if (g) {
                        if ((b = d.valHooks[g.nodeName.toLowerCase()] || d.valHooks[g.type]) && "get" in b && (c = b.get(g, "value")) !== m) return c;
                        c = g.value;
                        return typeof c ===
                            "string" ? c.replace(Ob, "") : c == null ? "" : c
                    }
                    return m
                }
                var e = d.isFunction(a);
                return this.each(function(c) {
                    var g = d(this);
                    if (this.nodeType === 1) {
                        c = e ? a.call(this, c, g.val()) : a;
                        c == null ? c = "" : typeof c === "number" ? c = c + "" : d.isArray(c) && (c = d.map(c, function(a) {
                            return a == null ? "" : a + ""
                        }));
                        b = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type];
                        if (!b || !("set" in b) || b.set(this, c, "value") === m) this.value = c
                    }
                })
            }
        });
        d.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c = a.selectedIndex,
                            g = [],
                            e = a.options,
                            a = a.type === "select-one";
                        if (c < 0) return null;
                        for (var f = a ? c : 0, h = a ? c + 1 : e.length; f < h; f++) {
                            b = e[f];
                            if (b.selected && (d.support.optDisabled ? !b.disabled : b.getAttribute("disabled") === null) && (!b.parentNode.disabled || !d.nodeName(b.parentNode, "optgroup"))) {
                                b = d(b).val();
                                if (a) return b;
                                g.push(b)
                            }
                        }
                        return a && !g.length && e.length ? d(e[c]).val() : g
                    },
                    set: function(a, b) {
                        var c = d.makeArray(b);
                        d(a).find("option").each(function() {
                            this.selected = d.inArray(d(this).val(),
                                c) >= 0
                        });
                        if (!c.length) a.selectedIndex = -1;
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function(a, b, c, g) {
                var e = a.nodeType;
                if (!a || e === 3 || e === 8 || e === 2) return m;
                if (g && b in d.attrFn) return d(a)[b](c);
                if (!("getAttribute" in a)) return d.prop(a, b, c);
                var f, h;
                if (g = e !== 1 || !d.isXMLDoc(a)) {
                    b = d.attrFix[b] || b;
                    (h = d.attrHooks[b]) || (Ra.test(b) ? h = Sa : y && (h = y))
                }
                if (c !== m) {
                    if (c === null) {
                        d.removeAttr(a, b);
                        return m
                    }
                    if (h && "set" in h && g && (f = h.set(a, c,
                            b)) !== m) return f;
                    a.setAttribute(b, "" + c);
                    return c
                }
                if (h && "get" in h && g && (f = h.get(a, b)) !== null) return f;
                f = a.getAttribute(b);
                return f === null ? m : f
            },
            removeAttr: function(a, b) {
                var c;
                if (a.nodeType === 1) {
                    b = d.attrFix[b] || b;
                    d.attr(a, b, "");
                    a.removeAttribute(b);
                    if (Ra.test(b) && (c = d.propFix[b] || b) in a) a[c] = false
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (Pb.test(a.nodeName) && a.parentNode) d.error("type property can't be changed");
                        else if (!d.support.radioValue && b === "radio" && d.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type",
                                b);
                            if (c) a.value = c;
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return y && d.nodeName(a, "button") ? y.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (y && d.nodeName(a, "button")) return y.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, c) {
                var g =
                    a.nodeType;
                if (!a || g === 3 || g === 8 || g === 2) return m;
                var e, f;
                if (g !== 1 || !d.isXMLDoc(a)) {
                    b = d.propFix[b] || b;
                    f = d.propHooks[b]
                }
                return c !== m ? f && "set" in f && (e = f.set(a, c, b)) !== m ? e : a[b] = c : f && "get" in f && (e = f.get(a, b)) !== null ? e : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Qb.test(a.nodeName) || Rb.test(a.nodeName) && a.href ? 0 : m
                    }
                }
            }
        });
        d.attrHooks.tabIndex = d.propHooks.tabIndex;
        Sa = {
            get: function(a, b) {
                var c;
                return d.prop(a, b) === true || (c = a.getAttributeNode(b)) &&
                    c.nodeValue !== false ? b.toLowerCase() : m
            },
            set: function(a, b, c) {
                if (b === false) d.removeAttr(a, c);
                else {
                    b = d.propFix[c] || c;
                    b in a && (a[b] = true);
                    a.setAttribute(c, c.toLowerCase())
                }
                return c
            }
        };
        d.support.getSetAttribute || (y = d.valHooks.button = {
            get: function(a, b) {
                var c;
                return (c = a.getAttributeNode(b)) && c.nodeValue !== "" ? c.nodeValue : m
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                if (!d) {
                    d = l.createAttribute(c);
                    a.setAttributeNode(d)
                }
                return d.nodeValue = b + ""
            }
        }, d.each(["width", "height"], function(a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                set: function(a, d) {
                    if (d === "") {
                        a.setAttribute(b, "auto");
                        return d
                    }
                }
            })
        }));
        d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function(a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return a === null ? m : a
                }
            })
        });
        d.support.style || (d.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || m
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        });
        d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) {
                    a.selectedIndex;
                    a.parentNode && a.parentNode.selectedIndex
                }
                return null
            }
        }));
        d.support.checkOn || d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        });
        d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = d.extend(d.valHooks[this], {
                set: function(a, b) {
                    if (d.isArray(b)) return a.checked = d.inArray(d(a).val(), b) >= 0
                }
            })
        });
        var ia = /\.(.*)$/,
            pa = /^(?:textarea|input|select)$/i,
            nb = /\./g,
            ob = / /g,
            Sb = /[^\w\s.|`]/g,
            Tb = function(a) {
                return a.replace(Sb, "\\$&")
            };
        d.event = {
            add: function(a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    if (c === false) c = w;
                    else if (!c) return;
                    var e, f;
                    if (c.handler) {
                        e = c;
                        c = e.handler
                    }
                    if (!c.guid) c.guid = d.guid++;
                    if (f = d._data(a)) {
                        var h = f.events,
                            i = f.handle;
                        if (!h) f.events = h = {};
                        if (!i) f.handle = i = function(a) {
                            return typeof d !== "undefined" && (!a || d.event.triggered !== a.type) ? d.event.handle.apply(i.elem, arguments) : m
                        };
                        i.elem = a;
                        for (var b = b.split(" "), j, k = 0, l; j = b[k++];) {
                            f = e ? d.extend({}, e) : {
                                handler: c,
                                data: g
                            };
                            if (j.indexOf(".") > -1) {
                                l = j.split(".");
                                j = l.shift();
                                f.namespace =
                                    l.slice(0).sort().join(".")
                            } else {
                                l = [];
                                f.namespace = ""
                            }
                            f.type = j;
                            if (!f.guid) f.guid = c.guid;
                            var n = h[j],
                                q = d.event.special[j] || {};
                            if (!n) {
                                n = h[j] = [];
                                if (!q.setup || q.setup.call(a, g, l, i) === false) a.addEventListener ? a.addEventListener(j, i, false) : a.attachEvent && a.attachEvent("on" + j, i)
                            }
                            if (q.add) {
                                q.add.call(a, f);
                                if (!f.handler.guid) f.handler.guid = c.guid
                            }
                            n.push(f);
                            d.event.global[j] = true
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function(a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    c === false && (c = w);
                    var e, f, h = 0,
                        i, j, k, l, n, q, p = d.hasData(a) &&
                        d._data(a),
                        o = p && p.events;
                    if (p && o) {
                        if (b && b.type) {
                            c = b.handler;
                            b = b.type
                        }
                        if (!b || typeof b === "string" && b.charAt(0) === ".") {
                            b = b || "";
                            for (e in o) d.event.remove(a, e + b)
                        } else {
                            for (b = b.split(" "); e = b[h++];) {
                                l = e;
                                i = e.indexOf(".") < 0;
                                j = [];
                                if (!i) {
                                    j = e.split(".");
                                    e = j.shift();
                                    k = RegExp("(^|\\.)" + d.map(j.slice(0).sort(), Tb).join("\\.(?:.*\\.)?") + "(\\.|$)")
                                }
                                if (n = o[e])
                                    if (c) {
                                        l = d.event.special[e] || {};
                                        for (f = g || 0; f < n.length; f++) {
                                            q = n[f];
                                            if (c.guid === q.guid) {
                                                if (i || k.test(q.namespace)) {
                                                    g == null && n.splice(f--, 1);
                                                    l.remove && l.remove.call(a,
                                                        q)
                                                }
                                                if (g != null) break
                                            }
                                        }
                                        if (n.length === 0 || g != null && n.length === 1) {
                                            (!l.teardown || l.teardown.call(a, j) === false) && d.removeEvent(a, e, p.handle);
                                            delete o[e]
                                        }
                                    } else
                                        for (f = 0; f < n.length; f++) {
                                            q = n[f];
                                            if (i || k.test(q.namespace)) {
                                                d.event.remove(a, l, q.handler, f);
                                                n.splice(f--, 1)
                                            }
                                        }
                            }
                            if (d.isEmptyObject(o)) {
                                if (b = p.handle) b.elem = null;
                                delete p.events;
                                delete p.handle;
                                d.isEmptyObject(p) && d.removeData(a, m, true)
                            }
                        }
                    }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(a, b, c, g) {
                var e = a.type || a,
                    f = [],
                    h;
                if (e.indexOf("!") >=
                    0) {
                    e = e.slice(0, -1);
                    h = true
                }
                if (e.indexOf(".") >= 0) {
                    f = e.split(".");
                    e = f.shift();
                    f.sort()
                }
                if (c && !d.event.customEvent[e] || d.event.global[e]) {
                    a = typeof a === "object" ? a[d.expando] ? a : new d.Event(e, a) : new d.Event(e);
                    a.type = e;
                    a.exclusive = h;
                    a.namespace = f.join(".");
                    a.namespace_re = RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (g || !c) {
                        a.preventDefault();
                        a.stopPropagation()
                    }
                    if (c) {
                        if (!(c.nodeType === 3 || c.nodeType === 8)) {
                            a.result = m;
                            a.target = c;
                            b = b != null ? d.makeArray(b) : [];
                            b.unshift(a);
                            f = c;
                            g = e.indexOf(":") < 0 ? "on" +
                                e : "";
                            do {
                                h = d._data(f, "handle");
                                a.currentTarget = f;
                                h && h.apply(f, b);
                                if (g && d.acceptData(f) && f[g] && f[g].apply(f, b) === false) {
                                    a.result = false;
                                    a.preventDefault()
                                }
                                f = f.parentNode || f.ownerDocument || f === a.target.ownerDocument && r
                            } while (f && !a.isPropagationStopped());
                            if (!a.isDefaultPrevented()) {
                                var i, f = d.event.special[e] || {};
                                if ((!f._default || f._default.call(c.ownerDocument, a) === false) && !(e === "click" && d.nodeName(c, "a")) && d.acceptData(c)) {
                                    try {
                                        if (g && c[e]) {
                                            (i = c[g]) && (c[g] = null);
                                            d.event.triggered = e;
                                            c[e]()
                                        }
                                    } catch (j) {}
                                    i &&
                                        (c[g] = i);
                                    d.event.triggered = m
                                }
                            }
                            return a.result
                        }
                    } else d.each(d.cache, function() {
                        var c = this[d.expando];
                        c && (c.events && c.events[e]) && d.event.trigger(a, b, c.handle.elem)
                    })
                }
            },
            handle: function(a) {
                var a = d.event.fix(a || r.event),
                    b = ((d._data(this, "events") || {})[a.type] || []).slice(0),
                    c = !a.exclusive && !a.namespace,
                    g = Array.prototype.slice.call(arguments, 0);
                g[0] = a;
                a.currentTarget = this;
                for (var e = 0, f = b.length; e < f; e++) {
                    var h = b[e];
                    if (c || a.namespace_re.test(h.namespace)) {
                        a.handler = h.handler;
                        a.data = h.data;
                        a.handleObj = h;
                        h =
                            h.handler.apply(this, g);
                        if (h !== m) {
                            a.result = h;
                            if (h === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(a) {
                if (a[d.expando]) return a;
                for (var b = a, a = d.Event(b), c = this.props.length, g; c;) {
                    g = this.props[--c];
                    a[g] = b[g]
                }
                if (!a.target) a.target = a.srcElement || l;
                if (a.target.nodeType === 3) a.target = a.target.parentNode;
                if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
                if (a.pageX == null && a.clientX != null) {
                    c = a.target.ownerDocument || l;
                    b = c.documentElement;
                    c = c.body;
                    a.pageX = a.clientX + (b && b.scrollLeft || c && c.scrollLeft || 0) - (b && b.clientLeft || c && c.clientLeft || 0);
                    a.pageY = a.clientY + (b && b.scrollTop || c && c.scrollTop ||
                        0) - (b && b.clientTop || c && c.clientTop || 0)
                }
                if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
                if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
                if (!a.which && a.button !== m) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
                return a
            },
            guid: 1E8,
            proxy: d.proxy,
            special: {
                ready: {
                    setup: d.bindReady,
                    teardown: d.noop
                },
                live: {
                    add: function(a) {
                        d.event.add(this, P(a.origType, a.selector), d.extend({}, a, {
                            handler: mb,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function(a) {
                        d.event.remove(this, P(a.origType,
                            a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        if (d.isWindow(this)) this.onbeforeunload = c
                    },
                    teardown: function(a, b) {
                        if (this.onbeforeunload === b) this.onbeforeunload = null
                    }
                }
            }
        };
        d.removeEvent = l.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, false)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        d.Event = function(a, b) {
            if (!this.preventDefault) return new d.Event(a, b);
            if (a && a.type) {
                this.originalEvent = a;
                this.type = a.type;
                this.isDefaultPrevented = a.defaultPrevented ||
                    a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? O : w
            } else this.type = a;
            b && d.extend(this, b);
            this.timeStamp = d.now();
            this[d.expando] = true
        };
        d.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = O;
                var a = this.originalEvent;
                if (a) a.preventDefault ? a.preventDefault() : a.returnValue = false
            },
            stopPropagation: function() {
                this.isPropagationStopped = O;
                var a = this.originalEvent;
                if (a) {
                    a.stopPropagation && a.stopPropagation();
                    a.cancelBubble = true
                }
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped =
                    O;
                this.stopPropagation()
            },
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w
        };
        var Ta = function(a) {
                var b = a.relatedTarget,
                    c = false,
                    g = a.type;
                a.type = a.data;
                if (b !== this) {
                    b && (c = d.contains(this, b));
                    if (!c) {
                        d.event.handle.apply(this, arguments);
                        a.type = g
                    }
                }
            },
            Ua = function(a) {
                a.type = a.data;
                d.event.handle.apply(this, arguments)
            };
        d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            d.event.special[a] = {
                setup: function(c) {
                    d.event.add(this, b, c && c.selector ? Ua : Ta, a)
                },
                teardown: function(a) {
                    d.event.remove(this,
                        b, a && a.selector ? Ua : Ta)
                }
            }
        });
        d.support.submitBubbles || (d.event.special.submit = {
            setup: function() {
                if (d.nodeName(this, "form")) return false;
                d.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target,
                        c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                    (c === "submit" || c === "image") && d(b).closest("form").length && Aa("submit", this, arguments)
                });
                d.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target,
                        c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                    (c === "text" || c === "password") &&
                    (d(b).closest("form").length && a.keyCode === 13) && Aa("submit", this, arguments)
                })
            },
            teardown: function() {
                d.event.remove(this, ".specialSubmit")
            }
        });
        if (!d.support.changeBubbles) {
            var L, Va = function(a) {
                    var b = d.nodeName(a, "input") ? a.type : "",
                        c = a.value;
                    if (b === "radio" || b === "checkbox") c = a.checked;
                    else if (b === "select-multiple") c = a.selectedIndex > -1 ? d.map(a.options, function(a) {
                        return a.selected
                    }).join("-") : "";
                    else if (d.nodeName(a, "select")) c = a.selectedIndex;
                    return c
                },
                Z = function(a, b) {
                    var c = a.target,
                        g, e;
                    if (pa.test(c.nodeName) &&
                        !c.readOnly) {
                        g = d._data(c, "_change_data");
                        e = Va(c);
                        (a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", e);
                        if (!(g === m || e === g))
                            if (g != null || e) {
                                a.type = "change";
                                a.liveFired = m;
                                d.event.trigger(a, b, c)
                            }
                    }
                };
            d.event.special.change = {
                filters: {
                    focusout: Z,
                    beforedeactivate: Z,
                    click: function(a) {
                        var b = a.target,
                            c = d.nodeName(b, "input") ? b.type : "";
                        (c === "radio" || c === "checkbox" || d.nodeName(b, "select")) && Z.call(this, a)
                    },
                    keydown: function(a) {
                        var b = a.target,
                            c = d.nodeName(b, "input") ? b.type : "";
                        (a.keyCode === 13 && !d.nodeName(b,
                            "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && Z.call(this, a)
                    },
                    beforeactivate: function(a) {
                        a = a.target;
                        d._data(a, "_change_data", Va(a))
                    }
                },
                setup: function() {
                    if (this.type === "file") return false;
                    for (var a in L) d.event.add(this, a + ".specialChange", L[a]);
                    return pa.test(this.nodeName)
                },
                teardown: function() {
                    d.event.remove(this, ".specialChange");
                    return pa.test(this.nodeName)
                }
            };
            L = d.event.special.change.filters;
            L.focus = L.beforeactivate
        }
        d.support.focusinBubbles || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            function c(a) {
                var c = d.event.fix(a);
                c.type = b;
                c.originalEvent = {};
                d.event.trigger(c, null, c.target);
                c.isDefaultPrevented() && a.preventDefault()
            }
            var g = 0;
            d.event.special[b] = {
                setup: function() {
                    g++ === 0 && l.addEventListener(a, c, true)
                },
                teardown: function() {
                    --g === 0 && l.removeEventListener(a, c, true)
                }
            }
        });
        d.each(["bind", "one"], function(a, b) {
            d.fn[b] = function(a, g, e) {
                var f;
                if (typeof a === "object") {
                    for (var h in a) this[b](h, g, a[h], e);
                    return this
                }
                if (arguments.length === 2 || g === false) {
                    e = g;
                    g = m
                }
                if (b ===
                    "one") {
                    f = function(a) {
                        d(this).unbind(a, f);
                        return e.apply(this, arguments)
                    };
                    f.guid = e.guid || d.guid++
                } else f = e;
                if (a === "unload" && b !== "one") this.one(a, g, e);
                else {
                    h = 0;
                    for (var i = this.length; h < i; h++) d.event.add(this[h], a, f, g)
                }
                return this
            }
        });
        d.fn.extend({
            unbind: function(a, b) {
                if (typeof a === "object" && !a.preventDefault)
                    for (var c in a) this.unbind(c, a[c]);
                else {
                    c = 0;
                    for (var g = this.length; c < g; c++) d.event.remove(this[c], a, b)
                }
                return this
            },
            delegate: function(a, b, c, d) {
                return this.live(b, c, d, a)
            },
            undelegate: function(a, b, c) {
                return arguments.length ===
                    0 ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    d.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return d.event.trigger(a, b, this[0], true)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || d.guid++,
                    g = 0,
                    e = function(c) {
                        var e = (d.data(this, "lastToggle" + a.guid) || 0) % g;
                        d.data(this, "lastToggle" + a.guid, e + 1);
                        c.preventDefault();
                        return b[e].apply(this, arguments) || false
                    };
                for (e.guid = c; g < b.length;) b[g++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b ||
                    a)
            }
        });
        var qa = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        d.each(["live", "die"], function(a, b) {
            d.fn[b] = function(a, g, e, f) {
                var h = 0,
                    i, j, k = f || this.selector,
                    l = f ? this : d(this.context);
                if (typeof a === "object" && !a.preventDefault) {
                    for (i in a) l[b](i, g, a[i], k);
                    return this
                }
                if (b === "die" && !a && f && f.charAt(0) === ".") {
                    l.unbind(f);
                    return this
                }
                if (g === false || d.isFunction(g)) {
                    e = g || w;
                    g = m
                }
                for (a = (a || "").split(" ");
                    (f = a[h++]) != null;) {
                    i = ia.exec(f);
                    j = "";
                    if (i) {
                        j = i[0];
                        f = f.replace(ia, "")
                    }
                    if (f === "hover") a.push("mouseenter" +
                        j, "mouseleave" + j);
                    else {
                        i = f;
                        if (qa[f]) {
                            a.push(qa[f] + j);
                            f = f + j
                        } else f = (qa[f] || f) + j;
                        if (b === "live") {
                            j = 0;
                            for (var n = l.length; j < n; j++) d.event.add(l[j], "live." + P(f, k), {
                                data: g,
                                selector: k,
                                handler: e,
                                origType: f,
                                origHandler: e,
                                preType: i
                            })
                        } else l.unbind("live." + P(f, k), e)
                    }
                }
                return this
            }
        });
        d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
            d.fn[b] =
                function(a, d) {
                    if (d == null) {
                        d = a;
                        a = null
                    }
                    return arguments.length > 0 ? this.bind(b, a, d) : this.trigger(b)
                };
            d.attrFn && (d.attrFn[b] = true)
        });
        var Wa = function(a, b, c, d, e, f) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var i = d[e];
                    if (i) {
                        for (var j = false, i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1 && !f) {
                                i.sizcache = c;
                                i.sizset = e
                            }
                            if (i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[e] = j
                    }
                }
            },
            Xa = function(a, b, c, d, e, f) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var i = d[e];
                    if (i) {
                        for (var j = false, i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j =
                                    d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1) {
                                if (!f) {
                                    i.sizcache = c;
                                    i.sizset = e
                                }
                                if (typeof b !== "string") {
                                    if (i === b) {
                                        j = true;
                                        break
                                    }
                                } else if (n.filter(b, [i]).length > 0) {
                                    j = i;
                                    break
                                }
                            }
                            i = i[a]
                        }
                        d[e] = j
                    }
                }
            },
            ra = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            sa = 0,
            Ya = Object.prototype.toString,
            aa = !1,
            Za = !0,
            G = /\\/g,
            ba = /\W/;
        [0, 0].sort(function() {
            Za = false;
            return 0
        });
        var n = function(a, b, c, d) {
            var c = c || [],
                e = b = b || l;
            if (b.nodeType !== 1 && b.nodeType !== 9) return [];
            if (!a || typeof a !== "string") return c;
            var f, h, i, j, k, m = true,
                o = n.isXML(b),
                q = [],
                r = a;
            do {
                ra.exec("");
                if (f = ra.exec(r)) {
                    r = f[3];
                    q.push(f[1]);
                    if (f[2]) {
                        j = f[3];
                        break
                    }
                }
            } while (f);
            if (q.length > 1 && Ub.exec(a))
                if (q.length === 2 && p.relative[q[0]]) h = $a(q[0] + q[1], b);
                else
                    for (h = p.relative[q[0]] ? [b] : n(q.shift(), b); q.length;) {
                        a = q.shift();
                        p.relative[a] && (a = a + q.shift());
                        h = $a(a, h)
                    } else {
                        if (!d && q.length > 1 && b.nodeType === 9 && !o && p.match.ID.test(q[0]) && !p.match.ID.test(q[q.length - 1])) {
                            f = n.find(q.shift(), b, o);
                            b = f.expr ? n.filter(f.expr,
                                f.set)[0] : f.set[0]
                        }
                        if (b) {
                            f = d ? {
                                expr: q.pop(),
                                set: v(d)
                            } : n.find(q.pop(), q.length === 1 && (q[0] === "~" || q[0] === "+") && b.parentNode ? b.parentNode : b, o);
                            h = f.expr ? n.filter(f.expr, f.set) : f.set;
                            for (q.length > 0 ? i = v(h) : m = false; q.length;) {
                                f = k = q.pop();
                                p.relative[k] ? f = q.pop() : k = "";
                                f == null && (f = b);
                                p.relative[k](i, f, o)
                            }
                        } else i = []
                    }
            i || (i = h);
            i || n.error(k || a);
            if (Ya.call(i) === "[object Array]")
                if (m)
                    if (b && b.nodeType === 1)
                        for (a = 0; i[a] != null; a++) i[a] && (i[a] === true || i[a].nodeType === 1 && n.contains(b, i[a])) && c.push(h[a]);
                    else
                        for (a = 0; i[a] !=
                            null; a++) i[a] && i[a].nodeType === 1 && c.push(h[a]);
            else c.push.apply(c, i);
            else v(i, c);
            if (j) {
                n(j, e, c, d);
                n.uniqueSort(c)
            }
            return c
        };
        n.uniqueSort = function(a) {
            if (ca) {
                aa = Za;
                a.sort(ca);
                if (aa)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        };
        n.matches = function(a, b) {
            return n(a, null, null, b)
        };
        n.matchesSelector = function(a, b) {
            return n(b, null, null, [a]).length > 0
        };
        n.find = function(a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0, f = p.order.length; e < f; e++) {
                var h, i = p.order[e];
                if (h = p.leftMatch[i].exec(a)) {
                    var j =
                        h[1];
                    h.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        h[1] = (h[1] || "").replace(G, "");
                        d = p.find[i](h, b, c);
                        if (d != null) {
                            a = a.replace(p.match[i], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        };
        n.filter = function(a, b, c, d) {
            for (var e, f, h = a, i = [], j = b, k = b && b[0] && n.isXML(b[0]); a && b.length;) {
                for (var l in p.filter)
                    if ((e = p.leftMatch[l].exec(a)) != null && e[2]) {
                        var o, q, r = p.filter[l];
                        q = e[1];
                        f = false;
                        e.splice(1, 1);
                        if (q.substr(q.length - 1) !== "\\") {
                            j === i && (i = []);
                            if (p.preFilter[l])
                                if (e = p.preFilter[l](e, j, c, i, d, k)) {
                                    if (e === true) continue
                                } else f = o = true;
                            if (e)
                                for (var s = 0;
                                    (q = j[s]) != null; s++)
                                    if (q) {
                                        o = r(q, e, s, j);
                                        var t = d ^ !!o;
                                        if (c && o != null) t ? f = true : j[s] = false;
                                        else if (t) {
                                            i.push(q);
                                            f = true
                                        }
                                    }
                            if (o !== m) {
                                c || (j = i);
                                a = a.replace(p.match[l], "");
                                if (!f) return [];
                                break
                            }
                        }
                    }
                if (a === h)
                    if (f == null) n.error(a);
                    else break;
                h = a
            }
            return j
        };
        n.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a;
        };
        var p = n.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, b) {
                        var c = typeof b === "string",
                            d = c && !ba.test(b),
                            c = c && !d;
                        d && (b = b.toLowerCase());
                        for (var d = 0, e = a.length, f; d < e; d++)
                            if (f = a[d]) {
                                for (;
                                    (f = f.previousSibling) && f.nodeType !== 1;);
                                a[d] = c || f && f.nodeName.toLowerCase() === b ? f || false : f === b
                            }
                        c && n.filter(b, a, true)
                    },
                    ">": function(a, b) {
                        var c, d = typeof b === "string",
                            e = 0,
                            f = a.length;
                        if (d &&
                            !ba.test(b))
                            for (b = b.toLowerCase(); e < f; e++) {
                                if (c = a[e]) {
                                    c = c.parentNode;
                                    a[e] = c.nodeName.toLowerCase() === b ? c : false
                                }
                            } else {
                                for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && n.filter(b, a, true)
                            }
                    },
                    "": function(a, b, c) {
                        var d, e = sa++,
                            f = Xa;
                        if (typeof b === "string" && !ba.test(b)) {
                            d = b = b.toLowerCase();
                            f = Wa
                        }
                        f("parentNode", b, e, a, d, c)
                    },
                    "~": function(a, b, c) {
                        var d, e = sa++,
                            f = Xa;
                        if (typeof b === "string" && !ba.test(b)) {
                            d = b = b.toLowerCase();
                            f = Wa
                        }
                        f("previousSibling", b, e, a, d, c)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if (typeof b.getElementById !==
                            "undefined" && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                    },
                    NAME: function(a, b) {
                        if (typeof b.getElementsByName !== "undefined") {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(G, "") + " ";
                        if (f) return a;
                        for (var f = 0, h;
                            (h = b[f]) != null; f++) h && (e ^ (h.className &&
                            (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[f] = false));
                        return false
                    },
                    ID: function(a) {
                        return a[1].replace(G, "")
                    },
                    TAG: function(a) {
                        return a[1].replace(G, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if (a[1] === "nth") {
                            a[2] || n.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0;
                            a[3] = b[3] - 0
                        } else a[2] && n.error(a[0]);
                        a[0] = sa++;
                        return a
                    },
                    ATTR: function(a,
                        b, c, d, e, f) {
                        b = a[1] = a[1].replace(G, "");
                        !f && p.attrMap[b] && (a[1] = p.attrMap[b]);
                        a[4] = (a[4] || a[5] || "").replace(G, "");
                        a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(a, b, c, d, e) {
                        if (a[1] === "not")
                            if ((ra.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = n(a[3], null, null, b);
                            else {
                                a = n.filter(a[3], b, c, 1 ^ e);
                                c || d.push.apply(d, a);
                                return false
                            }
                        else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return true;
                        return a
                    },
                    POS: function(a) {
                        a.unshift(true);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled ===
                            false && a.type !== "hidden"
                    },
                    disabled: function(a) {
                        return a.disabled === true
                    },
                    checked: function(a) {
                        return a.checked === true
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === true
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!n(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        return "text" === a.getAttribute("type")
                    },
                    radio: function(a) {
                        return "radio" === a.type
                    },
                    checkbox: function(a) {
                        return "checkbox" ===
                            a.type
                    },
                    file: function(a) {
                        return "file" === a.type
                    },
                    password: function(a) {
                        return "password" === a.type
                    },
                    submit: function(a) {
                        return "submit" === a.type
                    },
                    image: function(a) {
                        return "image" === a.type
                    },
                    reset: function(a) {
                        return "reset" === a.type
                    },
                    button: function(a) {
                        return "button" === a.type || a.nodeName.toLowerCase() === "button"
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return b === 0
                    },
                    last: function(a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function(a, b) {
                        return b % 2 ===
                            0
                    },
                    odd: function(a, b) {
                        return b % 2 === 1
                    },
                    lt: function(a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function(a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function(a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function(a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1],
                            f = p.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n.getText([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            b = b[3];
                            c = 0;
                            for (d = b.length; c < d; c++)
                                if (b[c] === a) return false;
                            return true
                        }
                        n.error(e)
                    },
                    CHILD: function(a, b) {
                        var c = b[1],
                            d = a;
                        switch (c) {
                            case "only":
                            case "first":
                                for (; d =
                                    d.previousSibling;)
                                    if (d.nodeType === 1) return false;
                                if (c === "first") return true;
                                d = a;
                            case "last":
                                for (; d = d.nextSibling;)
                                    if (d.nodeType === 1) return false;
                                return true;
                            case "nth":
                                var c = b[2],
                                    e = b[3];
                                if (c === 1 && e === 0) return true;
                                var f = b[0],
                                    h = a.parentNode;
                                if (h && (h.sizcache !== f || !a.nodeIndex)) {
                                    for (var i = 0, d = h.firstChild; d; d = d.nextSibling)
                                        if (d.nodeType === 1) d.nodeIndex = ++i;
                                    h.sizcache = f
                                }
                                d = a.nodeIndex - e;
                                return c === 0 ? d === 0 : d % c === 0 && d / c >= 0
                        }
                    },
                    ID: function(a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function(a,
                        b) {
                        return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function(a, b) {
                        var c = b[1],
                            c = p.attrHandle[c] ? p.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            d = c + "",
                            e = b[2],
                            f = b[4];
                        return c == null ? e === "!=" : e === "=" ? d === f : e === "*=" ? d.indexOf(f) >= 0 : e === "~=" ? (" " + d + " ").indexOf(f) >= 0 : !f ? d && c !== false : e === "!=" ? d !== f : e === "^=" ? d.indexOf(f) === 0 : e === "$=" ? d.substr(d.length - f.length) === f : e === "|=" ? d === f || d.substr(0, f.length +
                            1) === f + "-" : false
                    },
                    POS: function(a, b, c, d) {
                        var e = p.setFilters[b[2]];
                        if (e) return e(a, c, b, d)
                    }
                }
            },
            Ub = p.match.POS,
            Vb = function(a, b) {
                return "\\" + (b - 0 + 1)
            },
            M;
        for (M in p.match) p.match[M] = RegExp(p.match[M].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[M] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[M].source.replace(/\\(\d+)/g, Vb));
        var v = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(l.documentElement.childNodes, 0)[0].nodeType
        } catch (kc) {
            v =
                function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (Ya.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length === "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
        }
        var ca, N;
        l.documentElement.compareDocumentPosition ? ca = function(a, b) {
            if (a === b) {
                aa = true;
                return 0
            }
            return !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (ca = function(a, b) {
            var c, d, e = [],
                f = [];
            c = a.parentNode;
            d = b.parentNode;
            var h = c;
            if (a === b) {
                aa = true;
                return 0
            }
            if (c === d) return N(a, b);
            if (c) {
                if (!d) return 1
            } else return -1;
            for (; h;) {
                e.unshift(h);
                h = h.parentNode
            }
            for (h = d; h;) {
                f.unshift(h);
                h = h.parentNode
            }
            c = e.length;
            d = f.length;
            for (h = 0; h < c && h < d; h++)
                if (e[h] !== f[h]) return N(e[h], f[h]);
            return h === c ? N(a, f[h], -1) : N(e[h], b, 1)
        }, N = function(a, b, c) {
            if (a === b) return c;
            for (a = a.nextSibling; a;) {
                if (a === b) return -1;
                a = a.nextSibling
            }
            return 1
        });
        n.getText = function(a) {
            for (var b = "", c, d = 0; a[d]; d++) {
                c = a[d];
                c.nodeType === 3 || c.nodeType === 4 ? b = b + c.nodeValue : c.nodeType !==
                    8 && (b = b + n.getText(c.childNodes))
            }
            return b
        };
        var da = l.createElement("div"),
            ab = "script" + (new Date).getTime(),
            ea = l.documentElement;
        da.innerHTML = "<a name='" + ab + "'/>";
        ea.insertBefore(da, ea.firstChild);
        l.getElementById(ab) && (p.find.ID = function(a, b, c) {
            if (typeof b.getElementById !== "undefined" && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : m : []
        }, p.filter.ID = function(a, b) {
            var c = typeof a.getAttributeNode !== "undefined" &&
                a.getAttributeNode("id");
            return a.nodeType === 1 && c && c.nodeValue === b
        });
        ea.removeChild(da);
        var ea = da = null,
            z = l.createElement("div");
        z.appendChild(l.createComment(""));
        0 < z.getElementsByTagName("*").length && (p.find.TAG = function(a, b) {
            var c = b.getElementsByTagName(a[1]);
            if (a[1] === "*") {
                for (var d = [], e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                c = d
            }
            return c
        });
        z.innerHTML = "<a href='#'></a>";
        z.firstChild && ("undefined" !== typeof z.firstChild.getAttribute && "#" !== z.firstChild.getAttribute("href")) && (p.attrHandle.href =
            function(a) {
                return a.getAttribute("href", 2)
            });
        z = null;
        if (l.querySelectorAll) {
            var ta = n,
                fa = l.createElement("div");
            fa.innerHTML = "<p class='TEST'></p>";
            if (!(fa.querySelectorAll && 0 === fa.querySelectorAll(".TEST").length)) {
                var n = function(a, b, c, d) {
                        b = b || l;
                        if (!d && !n.isXML(b)) {
                            var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                            if (e && (b.nodeType === 1 || b.nodeType === 9)) {
                                if (e[1]) return v(b.getElementsByTagName(a), c);
                                if (e[2] && p.find.CLASS && b.getElementsByClassName) return v(b.getElementsByClassName(e[2]), c)
                            }
                            if (b.nodeType ===
                                9) {
                                if (a === "body" && b.body) return v([b.body], c);
                                if (e && e[3]) {
                                    var f = b.getElementById(e[3]);
                                    if (f && f.parentNode) {
                                        if (f.id === e[3]) return v([f], c)
                                    } else return v([], c)
                                }
                                try {
                                    return v(b.querySelectorAll(a), c)
                                } catch (h) {}
                            } else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                                var e = b,
                                    i = (f = b.getAttribute("id")) || "__sizzle__",
                                    j = b.parentNode,
                                    k = /^\s*[+~]/.test(a);
                                f ? i = i.replace(/'/g, "\\$&") : b.setAttribute("id", i);
                                if (k && j) b = b.parentNode;
                                try {
                                    if (!k || j) return v(b.querySelectorAll("[id='" + i + "'] " + a), c)
                                } catch (m) {} finally {
                                    f ||
                                        e.removeAttribute("id")
                                }
                            }
                        }
                        return ta(a, b, c, d)
                    },
                    ua;
                for (ua in ta) n[ua] = ta[ua];
                fa = null
            }
        }
        var ga = l.documentElement,
            va = ga.matchesSelector || ga.mozMatchesSelector || ga.webkitMatchesSelector || ga.msMatchesSelector,
            bb = !1;
        try {
            va.call(l.documentElement, "[test!='']:sizzle")
        } catch (lc) {
            bb = !0
        }
        va && (n.matchesSelector = function(a, b) {
            b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!n.isXML(a)) try {
                if (bb || !p.match.PSEUDO.test(b) && !/!=/.test(b)) return va.call(a, b)
            } catch (c) {}
            return n(b, null, null, [a]).length > 0
        });
        var H = l.createElement("div");
        H.innerHTML = "<div class='test e'></div><div class='test'></div>";
        H.getElementsByClassName && 0 !== H.getElementsByClassName("e").length && (H.lastChild.className = "e", 1 !== H.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(a, b, c) {
            if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
        }, H = null));
        n.contains = l.documentElement.contains ? function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : true)
            } : l.documentElement.compareDocumentPosition ?
            function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : function() {
                return false
            };
        n.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
        };
        var $a = function(a, b) {
            for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = p.match.PSEUDO.exec(a);) {
                e = e + c[0];
                a = a.replace(p.match.PSEUDO, "")
            }
            a = p.relative[a] ? a + "*" : a;
            c = 0;
            for (var h = f.length; c < h; c++) n(a, f[c], d);
            return n.filter(e, d)
        };
        d.find = n;
        d.expr = n.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = n.uniqueSort;
        d.text = n.getText;
        d.isXMLDoc =
            n.isXML;
        d.contains = n.contains;
        var Wb = /Until$/,
            Xb = /^(?:parents|prevUntil|prevAll)/,
            Yb = /,/,
            pb = /^.[^:#\[\.,]*$/,
            Zb = Array.prototype.slice,
            cb = d.expr.match.POS,
            $b = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        d.fn.extend({
            find: function(a) {
                var b = this,
                    c, g;
                if (typeof a !== "string") return d(a).filter(function() {
                    c = 0;
                    for (g = b.length; c < g; c++)
                        if (d.contains(b[c], this)) return true
                });
                var e = this.pushStack("", "find", a),
                    f, h, i;
                c = 0;
                for (g = this.length; c < g; c++) {
                    f = e.length;
                    d.find(a, this[c], e);
                    if (c > 0)
                        for (h = f; h < e.length; h++)
                            for (i =
                                0; i < f; i++)
                                if (e[i] === e[h]) {
                                    e.splice(h--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = d(a);
                return this.filter(function() {
                    for (var a = 0, g = b.length; a < g; a++)
                        if (d.contains(this, b[a])) return true
                })
            },
            not: function(a) {
                return this.pushStack(Ba(this, a, false), "not", a)
            },
            filter: function(a) {
                return this.pushStack(Ba(this, a, true), "filter", a)
            },
            is: function(a) {
                return !!a && (typeof a === "string" ? d.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c = [],
                    g, e, f = this[0];
                if (d.isArray(a)) {
                    var h, i = {},
                        j = 1;
                    if (f &&
                        a.length) {
                        g = 0;
                        for (e = a.length; g < e; g++) {
                            h = a[g];
                            i[h] || (i[h] = cb.test(h) ? d(h, b || this.context) : h)
                        }
                        for (; f && f.ownerDocument && f !== b;) {
                            for (h in i) {
                                g = i[h];
                                (g.jquery ? g.index(f) > -1 : d(f).is(g)) && c.push({
                                    selector: h,
                                    elem: f,
                                    level: j
                                })
                            }
                            f = f.parentNode;
                            j++
                        }
                    }
                    return c
                }
                h = cb.test(a) || typeof a !== "string" ? d(a, b || this.context) : 0;
                g = 0;
                for (e = this.length; g < e; g++)
                    for (f = this[g]; f;)
                        if (h ? h.index(f) > -1 : d.find.matchesSelector(f, a)) {
                            c.push(f);
                            break
                        } else {
                            f = f.parentNode;
                            if (!f || !f.ownerDocument || f === b || f.nodeType === 11) break
                        }
                c = c.length > 1 ?
                    d.unique(c) : c;
                return this.pushStack(c, "closest", a)
            },
            index: function(a) {
                return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this)
            },
            add: function(a, b) {
                var c = typeof a === "string" ? d(a, b) : d.makeArray(a && a.nodeType ? [a] : a),
                    g = d.merge(this.get(), c);
                return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 || !g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 ? g : d.unique(g))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        });
        d.each({
            parent: function(a) {
                return (a = a.parentNode) && a.nodeType !== 11 ? a : null
            },
            parents: function(a) {
                return d.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return d.dir(a, "parentNode", c)
            },
            next: function(a) {
                return d.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return d.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return d.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return d.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return d.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return d.dir(a, "previousSibling",
                    c)
            },
            siblings: function(a) {
                return d.sibling(a.parentNode.firstChild, a)
            },
            children: function(a) {
                return d.sibling(a.firstChild)
            },
            contents: function(a) {
                return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
            }
        }, function(a, b) {
            d.fn[a] = function(c, g) {
                var e = d.map(this, b, c),
                    f = Zb.call(arguments);
                Wb.test(a) || (g = c);
                g && typeof g === "string" && (e = d.filter(g, e));
                e = this.length > 1 && !$b[a] ? d.unique(e) : e;
                if ((this.length > 1 || Yb.test(g)) && Xb.test(a)) e = e.reverse();
                return this.pushStack(e,
                    a, f.join(","))
            }
        });
        d.extend({
            filter: function(a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
            },
            dir: function(a, b, c) {
                for (var g = [], a = a[b]; a && a.nodeType !== 9 && (c === m || a.nodeType !== 1 || !d(a).is(c));) {
                    a.nodeType === 1 && g.push(a);
                    a = a[b]
                }
                return g
            },
            nth: function(a, b, c) {
                for (var b = b || 1, d = 0; a; a = a[c])
                    if (a.nodeType === 1 && ++d === b) break;
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
        var ac = / jQuery\d+="(?:\d+|null)"/g,
            wa = /^\s+/,
            db = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            eb = /<([\w:]+)/,
            bc = /<tbody/i,
            cc = /<|&#?\w+;/,
            fb = /<(?:script|object|embed|option|style)/i,
            gb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dc = /\/(java|ecma)script/i,
            rb = /^\s*<!(?:\[CDATA\[|\-\-)/,
            t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>",
                    "</colgroup></table>"
                ],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            };
        t.optgroup = t.option;
        t.tbody = t.tfoot = t.colgroup = t.caption = t.thead;
        t.th = t.td;
        d.support.htmlSerialize || (t._default = [1, "div<div>", "</div>"]);
        d.fn.extend({
            text: function(a) {
                return d.isFunction(a) ? this.each(function(b) {
                    var c = d(this);
                    c.text(a.call(this, b, c.text()))
                }) : typeof a !== "object" && a !== m ? this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(a)) : d.text(this)
            },
            wrapAll: function(a) {
                if (d.isFunction(a)) return this.each(function(b) {
                    d(this).wrapAll(a.call(this,
                        b))
                });
                if (this[0]) {
                    var b = d(a, this[0].ownerDocument).eq(0).clone(true);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return d.isFunction(a) ? this.each(function(b) {
                    d(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = d(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                return this.each(function() {
                    d(this).wrapAll(a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    d.nodeName(this,
                        "body") || d(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, true, function(a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, true, function(a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = d(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a,
                        "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, d(arguments[0]).toArray());
                    return a
                }
            },
            remove: function(a, b) {
                for (var c = 0, g;
                    (g = this[c]) != null; c++)
                    if (!a || d.filter(a, [g]).length) {
                        if (!b && g.nodeType === 1) {
                            d.cleanData(g.getElementsByTagName("*"));
                            d.cleanData([g])
                        }
                        g.parentNode && g.parentNode.removeChild(g)
                    }
                return this
            },
            empty: function() {
                for (var a = 0, b;
                    (b = this[a]) != null; a++)
                    for (b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
                return this
            },
            clone: function(a, b) {
                a = a == null ? false : a;
                b = b == null ? a : b;
                return this.map(function() {
                    return d.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === m) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ac, "") : null;
                if (typeof a === "string" && !fb.test(a) && (d.support.leadingWhitespace || !wa.test(a)) && !t[(eb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a =
                        a.replace(db, "<$1></$2>");
                    try {
                        for (var b = 0, c = this.length; b < c; b++)
                            if (this[b].nodeType === 1) {
                                d.cleanData(this[b].getElementsByTagName("*"));
                                this[b].innerHTML = a
                            }
                    } catch (g) {
                        this.empty().append(a)
                    }
                } else d.isFunction(a) ? this.each(function(b) {
                    var c = d(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (d.isFunction(a)) return this.each(function(b) {
                        var c = d(this),
                            g = c.html();
                        c.replaceWith(a.call(this, b, g))
                    });
                    typeof a !== "string" &&
                        (a = d(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        d(this).remove();
                        b ? d(b).before(a) : d(c).append(a)
                    })
                }
                return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, true)
            },
            domManip: function(a, b, c) {
                var g, e, f, h = a[0],
                    i = [];
                if (!d.support.checkClone && arguments.length === 3 && typeof h === "string" && gb.test(h)) return this.each(function() {
                    d(this).domManip(a, b, c, true)
                });
                if (d.isFunction(h)) return this.each(function(e) {
                    var f =
                        d(this);
                    a[0] = h.call(this, e, b ? f.html() : m);
                    f.domManip(a, b, c)
                });
                if (this[0]) {
                    g = h && h.parentNode;
                    g = d.support.parentNode && g && g.nodeType === 11 && g.childNodes.length === this.length ? {
                        fragment: g
                    } : d.buildFragment(a, this, i);
                    f = g.fragment;
                    if (e = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild) {
                        b = b && d.nodeName(e, "tr");
                        e = 0;
                        for (var j = this.length, k = j - 1; e < j; e++) c.call(b ? d.nodeName(this[e], "table") ? this[e].getElementsByTagName("tbody")[0] || this[e].appendChild(this[e].ownerDocument.createElement("tbody")) : this[e] : this[e],
                            g.cacheable || j > 1 && e < k ? d.clone(f, true, true) : f)
                    }
                    i.length && d.each(i, qb)
                }
                return this
            }
        });
        d.buildFragment = function(a, b, c) {
            var g, e, f, h;
            b && b[0] && (h = b[0].ownerDocument || b[0]);
            h.createDocumentFragment || (h = l);
            if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && h === l && a[0].charAt(0) === "<" && !fb.test(a[0]) && (d.support.checkClone || !gb.test(a[0]))) {
                e = true;
                (f = d.fragments[a[0]]) && f !== 1 && (g = f)
            }
            if (!g) {
                g = h.createDocumentFragment();
                d.clean(a, h, g, c)
            }
            e && (d.fragments[a[0]] = f ? g : 1);
            return {
                fragment: g,
                cacheable: e
            }
        };
        d.fragments = {};
        d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            d.fn[a] = function(c) {
                var g = [],
                    c = d(c),
                    e = this.length === 1 && this[0].parentNode;
                if (e && e.nodeType === 11 && e.childNodes.length === 1 && c.length === 1) {
                    c[b](this[0]);
                    return this
                }
                for (var e = 0, f = c.length; e < f; e++) {
                    var h = (e > 0 ? this.clone(true) : this).get();
                    d(c[e])[b](h);
                    g = g.concat(h)
                }
                return this.pushStack(g, a, c.selector)
            }
        });
        d.extend({
            clone: function(a, b, c) {
                var g = a.cloneNode(true),
                    e, f, h;
                if ((!d.support.noCloneEvent ||
                        !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !d.isXMLDoc(a)) {
                    Da(a, g);
                    e = Q(a);
                    f = Q(g);
                    for (h = 0; e[h]; ++h) f[h] && Da(e[h], f[h])
                }
                if (b) {
                    Ca(a, g);
                    if (c) {
                        e = Q(a);
                        f = Q(g);
                        for (h = 0; e[h]; ++h) Ca(e[h], f[h])
                    }
                }
                return g
            },
            clean: function(a, b, c, g) {
                b = b || l;
                typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || l);
                for (var e = [], f, h = 0, i;
                    (i = a[h]) != null; h++) {
                    typeof i === "number" && (i = i + "");
                    if (i) {
                        if (typeof i === "string")
                            if (cc.test(i)) {
                                i = i.replace(db, "<$1></$2>");
                                f = (eb.exec(i) || ["", ""])[1].toLowerCase();
                                var j = t[f] || t._default,
                                    k = j[0],
                                    m = b.createElement("div");
                                for (m.innerHTML = j[1] + i + j[2]; k--;) m = m.lastChild;
                                if (!d.support.tbody) {
                                    k = bc.test(i);
                                    j = f === "table" && !k ? m.firstChild && m.firstChild.childNodes : j[1] === "<table>" && !k ? m.childNodes : [];
                                    for (f = j.length - 1; f >= 0; --f) d.nodeName(j[f], "tbody") && !j[f].childNodes.length && j[f].parentNode.removeChild(j[f])
                                }!d.support.leadingWhitespace && wa.test(i) && m.insertBefore(b.createTextNode(wa.exec(i)[0]), m.firstChild);
                                i = m.childNodes
                            } else i = b.createTextNode(i);
                        var n;
                        if (!d.support.appendChecked)
                            if (i[0] &&
                                typeof(n = i.length) === "number")
                                for (f = 0; f < n; f++) Fa(i[f]);
                            else Fa(i);
                        i.nodeType ? e.push(i) : e = d.merge(e, i)
                    }
                }
                if (c) {
                    a = function(a) {
                        return !a.type || dc.test(a.type)
                    };
                    for (h = 0; e[h]; h++)
                        if (g && d.nodeName(e[h], "script") && (!e[h].type || e[h].type.toLowerCase() === "text/javascript")) g.push(e[h].parentNode ? e[h].parentNode.removeChild(e[h]) : e[h]);
                        else {
                            if (e[h].nodeType === 1) {
                                b = d.grep(e[h].getElementsByTagName("script"), a);
                                e.splice.apply(e, [h + 1, 0].concat(b))
                            }
                            c.appendChild(e[h])
                        }
                }
                return e
            },
            cleanData: function(a) {
                for (var b, c,
                        g = d.cache, e = d.expando, f = d.event.special, h = d.support.deleteExpando, i = 0, j;
                    (j = a[i]) != null; i++)
                    if (!j.nodeName || !d.noData[j.nodeName.toLowerCase()])
                        if (c = j[d.expando]) {
                            if ((b = g[c] && g[c][e]) && b.events) {
                                for (var k in b.events) f[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
                                if (b.handle) b.handle.elem = null
                            }
                            h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando);
                            delete g[c]
                        }
            }
        });
        var xa = /alpha\([^)]*\)/i,
            ec = /opacity=([^)]*)/,
            fc = /([A-Z]|^ms)/g,
            hb = /^-?\d+(?:px)?$/i,
            gc = /^-?\d/,
            hc = /^([\-+])=([\-+.\de]+)/,
            ic = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            sb = ["Left", "Right"],
            tb = ["Top", "Bottom"],
            A, ib, jb;
        d.fn.css = function(a, b) {
            return arguments.length === 2 && b === m ? this : d.access(this, a, b, true, function(a, b, e) {
                return e !== m ? d.style(a, b, e) : d.css(a, b)
            })
        };
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = A(a, "opacity", "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": d.support.cssFloat ?
                    "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, g) {
                if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                    var e, f = d.camelCase(b),
                        h = a.style,
                        i = d.cssHooks[f],
                        b = d.cssProps[f] || f;
                    if (c !== m) {
                        g = typeof c;
                        if (g === "string" && (e = hc.exec(c))) {
                            c = +(e[1] + 1) * +e[2] + parseFloat(d.css(a, b));
                            g = "number"
                        }
                        if (!(c == null || g === "number" && isNaN(c))) {
                            g === "number" && !d.cssNumber[f] && (c = c + "px");
                            if (!i || !("set" in i) || (c = i.set(a, c)) !== m) try {
                                h[b] = c
                            } catch (j) {}
                        }
                    } else return i && "get" in i && (e = i.get(a, false, g)) !== m ? e : h[b]
                }
            },
            css: function(a, b, c) {
                var g,
                    e, b = d.camelCase(b);
                e = d.cssHooks[b];
                b = d.cssProps[b] || b;
                b === "cssFloat" && (b = "float");
                if (e && "get" in e && (g = e.get(a, true, c)) !== m) return g;
                if (A) return A(a, b)
            },
            swap: function(a, b, c) {
                var d = {},
                    e;
                for (e in b) {
                    d[e] = a.style[e];
                    a.style[e] = b[e]
                }
                c.call(a);
                for (e in b) a.style[e] = d[e]
            }
        });
        d.curCSS = d.css;
        d.each(["height", "width"], function(a, b) {
            d.cssHooks[b] = {
                get: function(a, g, e) {
                    var f;
                    if (g) {
                        if (a.offsetWidth !== 0) return Ga(a, b, e);
                        d.swap(a, ic, function() {
                            f = Ga(a, b, e)
                        });
                        return f
                    }
                },
                set: function(a, b) {
                    if (hb.test(b)) {
                        b = parseFloat(b);
                        if (b >= 0) return b + "px"
                    } else return b
                }
            }
        });
        d.support.opacity || (d.cssHooks.opacity = {
            get: function(a, b) {
                return ec.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    g = a.currentStyle,
                    e = d.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                    f = g && g.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && d.trim(f.replace(xa, "")) === "") {
                    c.removeAttribute("filter");
                    if (g && !g.filter) return
                }
                c.filter = xa.test(f) ? f.replace(xa, e) : f + " " + e
            }
        });
        d(function() {
            if (!d.support.reliableMarginRight) d.cssHooks.marginRight = {
                get: function(a, b) {
                    var c;
                    d.swap(a, {
                        display: "inline-block"
                    }, function() {
                        c = b ? A(a, "margin-right", "marginRight") : a.style.marginRight
                    });
                    return c
                }
            }
        });
        l.defaultView && l.defaultView.getComputedStyle && (ib = function(a, b) {
            var c, g, b = b.replace(fc, "-$1").toLowerCase();
            if (!(g = a.ownerDocument.defaultView)) return m;
            if (g = g.getComputedStyle(a, null)) {
                c = g.getPropertyValue(b);
                c === "" && !d.contains(a.ownerDocument.documentElement, a) && (c = d.style(a, b))
            }
            return c
        });
        l.documentElement.currentStyle && (jb = function(a, b) {
            var c, d = a.currentStyle &&
                a.currentStyle[b],
                e = a.runtimeStyle && a.runtimeStyle[b],
                f = a.style;
            if (!hb.test(d) && gc.test(d)) {
                c = f.left;
                if (e) a.runtimeStyle.left = a.currentStyle.left;
                f.left = b === "fontSize" ? "1em" : d || 0;
                d = f.pixelLeft + "px";
                f.left = c;
                if (e) a.runtimeStyle.left = e
            }
            return d === "" ? "auto" : d
        });
        A = ib || jb;
        d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
        }, d.expr.filters.visible = function(a) {
            return !d.expr.filters.hidden(a)
        });
        return d
    }(window);


    var optimizelyCode = function() {
        var DATA = {
            "log_host": "log.optimizely.com",
            "goal_expressions": {
                "2959170400": ["^\\\u627e\\\u5de5\\\u4f5c$"],
                "2977900050": ["^click\\_conversion$"],
                "2984660045": ["^rails\\_101\\_click$"],
                "2971170030": ["^enroll$"],
                "2943901714": ["^growth\\_hacking$"],
                "2892271797": ["^engagement$"],
                "2910690680": ["^rails\\_101$"]
            },
            "experiments": {
                "2967150199": {
                    "variation_weights": {
                        "2949640338": 8000,
                        "2902531204": 2000
                    },
                    "name": "growth.xdite.net Experiment",
                    "enabled": true,
                    "variation_ids": ["2902531204", "2949640338"],
                    "urls": [{
                        "match": "simple",
                        "value": "http://growth.xdite.net"
                    }],
                    "enabled_variation_ids": ["2902531204", "2949640338"]
                },
                "2989510046": {
                    "variation_weights": {
                        "2978010106": 7000,
                        "2974200054": 3000
                    },
                    "name": "blog.xdite.net",
                    "enabled": true,
                    "variation_ids": ["2974200054", "2978010106"],
                    "urls": [{
                        "match": "simple",
                        "value": "http://blog.xdite.net"
                    }],
                    "enabled_variation_ids": ["2974200054", "2978010106"]
                },
                "2970911183": {
                    "name": "Growth Hack ( \u627e\u5de5\u4f5c\uff0c\u7279\u50f9\uff09",
                    "variation_ids": ["2973831229", "2974301527"],
                    "urls": [{
                        "match": "simple",
                        "value": "http://growth.xdite.net"
                    }],
                    "enabled_variation_ids": ["2973831229", "2974301527"]
                }
            },
            "www_host": "master-2658.optimizely-hrd.appspot.com",
            "public_suffixes": {
                "xdite.net": ["growth.xdite.net", "blog.xdite.net"]
            },
            "version": "master-2658.396641141550159952",
            "admin_account_id": 2963690194,
            "project_id": 2963690194,
            "revision": 52,
            "summary_revenue_goal_id": 2908471022,
            "installation_verified": true,
            "preview_host": "//optimizely.s3.amazonaws.com",
            "api_host": "api.optimizely.com",
            "variations": {
                "2902531204": {
                    "name": "Original"
                },
                "2949640338": {
                    "code": "$(\".headline\").html(\"\u5e6b\u52a9\u4f60\u6210\u70ba\u66f4\u597d\u7684\u81ea\u5df1&nbsp;\");\n$(\".subtitle\").replaceWith(\"<h3 class=\\\"subtitle\\\">\u53ea\u50b3\u6388\u6703\u8cfa\u9322\u7684\u6280\u8853</h3>\");\n$(\".subtitle\").html(\"\u9019\u88e1\u53ea\u6559\u80fd\u5920\u8cfa\u9322\u7684\u6280\u8853\");",
                    "name": "Variation #1"
                },
                "2974200054": {
                    "name": "Original"
                },
                "2974301527": {
                    "code": "$(\".view-school > .container > div:eq(0) > div:eq(0) > div:eq(1) > div:eq(2) > div:eq(0)\").replaceWith(\"<div class=\\\"small course-price\\\">\\n  <span style=\\\"text-decoration:line-through\\\"> $120</span> $75 \\n        </div>\");\n$(\".view-school > .container > div:eq(0) > div:eq(0)\").replaceWith(\"<div data-course-id=\\\"14759\\\" data-course-url=\\\"/courses/land-dream-rails-job?product_id=14097&coupon_code=FIRSTBATCH\\\" ,=\\\"\\\" class=\\\"course-listing\\\">\\n    <div class=\\\"row\\\">\\n      <div class=\\\"col-lg-12\\\">\\n        <!-- Course Image, Name & Subtitle (everyone) -->\\n        <div class=\\\"course-box-image-container\\\">\\n          <img class=\\\"course-box-image\\\" src=\\\"https://dcavozvb40vtt.cloudfront.net/api/file/DlQFKddbRGqqfaJnPkvn\\\">\\n        </div>\\n        <div class=\\\"course-listing-title\\\">\\n          Land Dream Rails Job (2015/07/01 \u524d\u7279\u50f9 62 \u6298)\\n        </div>\\n        <!-- Progress bar (enrolled users) -->\\n        <div class=\\\"col-xs-12 hidden\\\">\\n          <div class=\\\"progressbar\\\">\\n            <div class=\\\"progressbar-fill\\\"></div>\\n          </div>\\n        </div>\\n        <!-- Subtitle (unenrolled users) -->\\n        <div class=\\\"course-listing-subtitle\\\">\\n          22K \u81f3\u767e\u842c\u5e74\u85aa\u7684\u81f4\u52dd\u79d8\u7b08\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\\"row course-listing-extra-info col-xs-12\\\">\\n      <div class=\\\"col-xs-8\\\">\\n        <!-- Bundle Info (everyone) -->\\n        \\n        <!-- Author Image and Name (everyone) -->\\n        <img align=\\\"left\\\" class=\\\"img-circle\\\" src=\\\"https://dcavozvb40vtt.cloudfront.net/api/file/WFyjBPUhQLO229kBmyqd\\\">\\n        <div class=\\\"small course-author-name\\\">\\n          Xdite\\n        </div>\\n        \\n      </div>\\n      <!-- Progress percentage (enrolled users) -->\\n      <div class=\\\"col-xs-4 hidden\\\">\\n        <div class=\\\"small course-progress\\\">\\n          <span class=\\\"percentage\\\" data-course-id=\\\"14759\\\">\\n            %\\n          </span>\\n          <br>\\n          COMPLETE\\n        </div>\\n      </div>\\n      <!-- Price (unenrolled users) -->\\n      <div class=\\\"col-xs-4\\\">\\n        <div class=\\\"small course-price\\\">\\n  <span style=\\\"text-decoration:line-through\\\"> $120</span> $75 \\n        </div>\\n      </div>\\n    </div>\\n  </div>\");\n$(\".view-school > .container > div:eq(0) > div:eq(0) > div:eq(0) > div:eq(0) > div:eq(1)\").replaceWith(\"<div class=\\\"course-listing-title\\\">\\n          Land Dream Rails Job <br>\\n          (2015/07/01 \u524d\u7279\u50f9 62 \u6298)\\n        </div>\");",
                    "name": "Variation #1"
                },
                "2978010106": {
                    "code": "$(\".book-list > li:eq(0) > h3:eq(0) > span:eq(0)\").css({\"font-size\":\"13px\"});\n$(\".book-list > li:eq(0) > h3:eq(0) > span:eq(0)\").html(\"\u514d\u8cbb Rails \u5b78\u7fd2\u624b\u518a\");",
                    "name": "Variation #1"
                },
                "2973831229": {
                    "name": "Original"
                }
            },
            "segments": {
                "3039180618": {
                    "segment_value_type": "source_type",
                    "api_name": "optimizely_source_type",
                    "id": 3039180618,
                    "name": "Source Type"
                },
                "3010411404": {
                    "segment_value_type": "browser",
                    "api_name": "optimizely_browser",
                    "id": 3010411404,
                    "name": "Browser"
                },
                "3015270150": {
                    "segment_value_type": "mobile",
                    "api_name": "optimizely_mobile",
                    "id": 3015270150,
                    "name": "Mobile Visitors"
                }
            },
            "click_goals": [{
                "event_name": "rails_101",
                "experiments": {
                    "2967150199": true
                },
                "selector": " div[data-course-id=14767]"
            }, {
                "event_name": "growth_hacking",
                "experiments": {
                    "2967150199": true
                },
                "selector": " div[data-course-id=14901]"
            }, {
                "event_name": "\u627e\u5de5\u4f5c",
                "experiments": {
                    "2967150199": true
                },
                "selector": "div[data-course-id=14759]"
            }, {
                "event_name": "enroll",
                "experiments": {
                    "2967150199": true
                },
                "selector": ".btn-hg"
            }, {
                "event_name": "rails_101_click",
                "experiments": {
                    "2989510046": true
                },
                "selector": ".book-list > li:eq(0) > a:eq(0) > img:eq(0)"
            }]
        };

        function h(a) {
            throw a;
        }
        var i = void 0,
            j = !0,
            k = null,
            o = !1;

        function aa() {
            return function(a) {
                return a
            }
        }

        function ba(a) {
            var b = typeof a;
            return "object" == b && a != k || "function" == b
        }

        function ca(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function da(a, b, c) {
            a || h(Error());
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }

        function p(a, b, c) {
            p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
            return p.apply(k, arguments)
        }

        function t(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        };

        function u(a) {
            try {
                return window.JSON.stringify(a)
            } catch (b) {
                h(Error("JSON: Unable to stringify (" + b.message + ")"))
            }
        }

        function ea(a) {
            try {
                return window.JSON.parse(a)
            } catch (b) {
                h(Error("JSON: Unable to parse (" + b.message + ")"))
            }
        };
        var fa = /\s*;\s*/,
            ha = /^([^=]+)=?(.*)$/;

        function v(a) {
            var b = [];
            w(ia(), function(c) {
                a === c.name && b.push(ja(c.value))
            });
            if (0 === b.length) return k;
            1 < b.length && x("Cookie", "Values found for %s: %s", a, b.length);
            return b.pop()
        }
        var ka = o;

        function ia() {
            var a, b = [];
            a = a || "";
            w((document.cookie || "").split(fa), function(c) {
                var d = c.match(ha);
                d && 0 === d[1].indexOf(a) && b.push({
                    name: d[1],
                    value: d[2],
                    P: c
                })
            });
            return b
        }

        function y(a, b, c) {
            if (ka) x("Cookie", "Already initialized.");
            else {
                x("Cookie", "Initializing.");
                var d = document.location.hostname;
                if (la()) {
                    ma = d;
                    for (var d = document.location.hostname.split("."), e = [], f = d.length - 1; 0 <= f; --f) {
                        var g = d.slice(f).join("."),
                            l = "optimizelyDomainTest-" + Math.random().toString(16).replace("0.", ""),
                            m = Math.random().toString(16).replace("0.", "");
                        na(l, m, g, 3);
                        v(l) === m && e.push(g)
                    }
                    oa = e;
                    0 < oa.length ? (ma = oa[0], x("Cookie", "Highest level domain: %s", ma)) : (x("Cookie", "Disabling event tracking because cookies could not be set"),
                        qa = o)
                } else e = d.split("."), f = d, g = e[e.length - 1], 2 < e.length && "appspot" === e[e.length - 2] && "com" === g ? f = e[e.length - 3] + ".appspot.com" : 1 < e.length && ra(g, ta) && (f = e[e.length - 2] + "." + g), ua = f, x("Cookie", "Guessed public suffix: %s", ua), va = wa(d), x("Cookie", "Public suffix (from data): %s", va);
                xa && x("Cookie", "Domain specified by API: %s", xa);
                ka = j;
                x("Cookie", "Done initializing.")
            }
            b = b || "";
            la() ? (w(oa, function(b) {
                    ya(a, b)
                }), d = za(), na(a, b, d, c), c = v(a) === b ? "Succeeded" : "Failed", x("Cookie", "%s setting %s=%s on %s", c, a, b, d)) :
                (d = za(), e = document.location.hostname, !va && z("remote_public_suffix") && Aa.push({
                    yb: c,
                    name: a,
                    value: b
                }), d && (d === va && d !== ua) && (ya(a, e), ya(a, ua)), na(a, b, d, c), f = v(a), f === b) ? x("Cookie", "Successfully set %s=%s on %s", a, b, d) : (x("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), x("Cookie", "Setting %s on %s", a, e), na(a, b, e, c), f = v(a), f === b ? (x("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), ua = e) : (x("Cookie", "Could not set cookie %s, disabling event tracking.", a), qa = o))
        }

        function ya(a, b) {
            var c = [a, "=", "; ", Ba(b), "; path=/", "; expires=", (new Date(0)).toUTCString()];
            document.cookie = c.join("")
        }

        function za() {
            return la() ? xa || ma : xa || va || ua
        }

        function Ba(a) {
            var b = [];
            b.push("domain=");
            "localhost" !== a && (b.push("."), b.push(a));
            return b.join("")
        }

        function na(a, b, c, d) {
            a = [a, "=", encodeURIComponent(b), "; ", Ba(c), "; path=/"];
            d && a.push("; expires=", (new Date(+new Date + 1E3 * d)).toUTCString());
            document.cookie = a.join("")
        }

        function Ca(a) {
            za() !== a && (xa = String(a) || "", x("Cookie", "Api public suffix set to: %s", xa))
        }
        var ua = "",
            xa = "",
            ma = "",
            oa = [],
            va = "",
            Aa = [];
        var Da = window.OPTIMIZELY_TEST_MODULE,
            ta = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "),
            Ea = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
        var Fa = 0,
            Ga = o,
            B = j,
            Ha = j,
            Ia = o,
            Ja = o,
            Ka = o,
            La = o,
            Ma = "",
            Na = o,
            Oa = o,
            Pa = o,
            Qa = o,
            Ra = o,
            Sa = o,
            qa = j,
            Ua = 31536E4;

        function Va() {
            var a = v("optimizelyEndUserId");
            a || (a = "oeu" + +new Date + "r" + Math.random(), y("optimizelyEndUserId", a, Ua));
            return a
        }

        function Wa() {
            return v("optimizelyPPID")
        };

        function Xa(a, b) {
            var c = j;
            w(a, function(a) {
                if (!b(a)) return c = o
            });
            return c
        }

        function D(a, b) {
            var c = o;
            w(a, function(a) {
                if (b(a)) return c = j
            });
            return c
        }

        function E(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b == a[c]) return j;
            return o
        }

        function Ya(a, b) {
            var c = Za(arguments, 1);
            return function() {
                var b = Za(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }

        function w(a, b) {
            var c = k;
            if (F(a))
                for (var d = a.length, e = 0; e < d && !(c = b.call(i, a[e], e), H(c)); ++e);
            else
                for (d in a)
                    if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(i, d, a[d]), H(c))) break;
            return c
        }

        function I(a, b) {
            if ("function" === typeof a.map) return a.map(b);
            for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
            return c
        }

        function J(a, b) {
            w(b, function(b, d) {
                a[b] = d
            });
            return a
        }

        function $a(a, b) {
            if (F(b)) {
                for (var c = a, d = 0; d < b.length; d++) {
                    var e = b[d];
                    if (!ba(c) || !c.hasOwnProperty(e)) return;
                    c = c[e]
                }
                return c
            }
        }

        function K(a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                b(f) && c.push(f)
            }
            return c
        }

        function ra(a, b) {
            return w(b, function(b) {
                if (b === a) return j
            }) || o
        }

        function F(a) {
            return !!a && "object" === typeof a && "number" === typeof a.length
        }

        function H(a) {
            return "undefined" !== typeof a
        }

        function ab(a) {
            return "object" === typeof a && a !== k
        }

        function bb(a) {
            return ("number" === typeof a || "string" === typeof a) && Number(a) == a
        }

        function cb(a) {
            return "string" === typeof a
        }

        function L(a) {
            L = Object.zb || function(a) {
                var c = [];
                w(a, function(a) {
                    c.push(a)
                });
                return c
            };
            return L.call(k, a)
        }

        function db(a, b) {
            function c() {
                var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    c = document.createElement("script");
                c.src = a;
                c.type = "text/javascript";
                b.appendChild(c)
            }
            if (b) try {
                if ("loading" === document.readyState) {
                    var d = "optimizely_synchronous_script_" + Math.floor(1E5 * Math.random()); - 1 !== a.indexOf('"') ? M("loadScript", "Blocked attempt to load unsafe script: " + a) : (document.write('<script id="' + d + '" src="' + a + '"><\/script>'), 1 !== $("#" + d).length && h(Error("Document.write failed to append script")))
                } else h(Error("Not safe to attempt document.write"))
            } catch (e) {
                try {
                    var f =
                        new XMLHttpRequest;
                    f.open("GET", a, o);
                    f.onload = function() {
                        eval(f.responseText)
                    };
                    f.onerror = function() {
                        h(Error())
                    };
                    f.send()
                } catch (g) {
                    x("Common", "Failed to load %s synchronously", a), c()
                }
            } else c()
        }

        function x(a, b, c) {
            var d = window.console;
            if (Pa && d && d.log) {
                var e = Za(arguments, 1);
                e[0] = "Optimizely / " + a + " / " + b;
                Function.prototype.apply.call(d.log, d, e)
            }
        }

        function ja(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        function Za(a, b) {
            return Array.prototype.slice.call(a, b || 0, a.length)
        }

        function eb(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };

        function fb(a) {
            this.r = a;
            this.c = {
                totalGets: 0,
                totalGetLength: 0,
                totalGetTime: 0,
                totalSets: 0,
                totalSetLength: 0,
                totalSetTime: 0,
                numKeys: 0,
                totalSize: 0
            }
        }
        fb.prototype.get = function(a) {
            try {
                var b = +new Date,
                    c = this.r.getItem([gb, a].join("$$")),
                    d = ea(c);
                this.c.totalGetTime += +new Date - b;
                this.c.totalGets++;
                this.c.totalGetLength += (c || "").length;
                return d
            } catch (e) {
                return k
            }
        };
        fb.prototype.set = function(a, b) {
            try {
                var c = +new Date,
                    d = u(b);
                H(b) ? this.r.setItem([gb, a].join("$$"), d) : this.r.removeItem([gb, a].join("$$"));
                this.c.totalSetTime += +new Date - c;
                this.c.totalSets++;
                this.c.totalSetLength += d.length
            } catch (e) {}
        };
        fb.prototype.va = function() {
            var a = 0,
                b = 0,
                c;
            for (c in this.r)
                if (0 === c.indexOf(gb)) {
                    b++;
                    var d = this.r.getItem(c),
                        a = a + (c.length + (d ? d.length : 0))
                }
            this.c.numKeys = b;
            this.c.totalSize = a;
            return this.c
        };
        var hb = {
                get: function() {},
                set: function() {},
                va: function() {
                    return {}
                }
            },
            gb = "optimizely_data",
            N = hb,
            ib = hb;
        try {
            var N = new fb(window.localStorage),
                ib = new fb(window.sessionStorage),
                jb = N,
                kb = jb.r.getItem(gb),
                lb = {};
            try {
                lb = ea(kb) || {}
            } catch (mb) {}
            if (0 !== L(lb).length) {
                var nb = Wa() || v("optimizelyEndUserId"),
                    ob = lb[nb] || {},
                    pb;
                for (pb in ob)
                    if (ob.hasOwnProperty(pb)) {
                        var qb = [nb, pb].join("$$");
                        jb.get(qb) === k && jb.set(qb, ob[pb])
                    }
                delete lb[nb];
                for (pb in lb) lb.hasOwnProperty(pb) && (jb.get(pb) === k && jb.set(pb, lb[pb]), delete lb[pb]);
                try {
                    kb = u(lb)
                } catch (rb) {
                    kb = {}
                }
                jb.r.setItem(gb, kb)
            }
        } catch (sb) {};

        function tb() {
            return z("admin_account_id")
        }

        function ub(a) {
            return z("audiences", a)
        }

        function vb(a) {
            a = z("audiences", a, "segment_id");
            return !a ? k : a
        }

        function wb() {
            if (!xb) {
                var a = z("click_goals") || [];
                xb = [];
                for (var b = 0, c = a.length; b < c; b++)
                    for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
                        var l = e[f];
                        l && (l = {
                            event_name: d.event_name,
                            selector: l
                        }, "experiments" in d ? l.experiments = d.experiments : "url_conditions" in d && (l.url_conditions = d.url_conditions), "revenue" in d && (l.revenue = d.revenue), xb.push(l))
                    }
            }
            return xb
        }

        function yb(a, b) {
            return z("dimensions", a, b)
        }

        function zb(a) {
            a = yb(a, "condition_type");
            return !a ? k : a
        }

        function Ab(a) {
            a = yb(a, "name");
            return !a ? k : a
        }

        function Cb() {
            Db || (Db = K(Eb(), Fb));
            return Db
        }

        function Gb(a) {
            var b = z("goal_expressions"),
                c = [],
                d;
            for (d in b)
                if (b.hasOwnProperty(d))
                    for (var e = b[d], f = 0; f < e.length; f++) try {
                        if (RegExp(e[f], "i").test(a)) {
                            c.push(d);
                            break
                        }
                    } catch (g) {}
            return c
        }

        function Hb(a) {
            var b = Ib(),
                c;
            for (c in b)
                if (Object.prototype.hasOwnProperty.call(b, c)) {
                    var d = b[c];
                    if (d && d.api_name === a) return String(c)
                }
            return k
        }

        function Jb() {
            return z("experiments") || {}
        }

        function Eb() {
            return L(z("experiments") || {})
        }

        function Kb(a) {
            return "manual" === O(a, "activation_mode")
        }

        function Lb(a) {
            return "conditional" === O(a, "activation_mode")
        }

        function Mb(a) {
            return O(a, "name") || "Exp " + a
        }

        function Nb(a) {
            return 'experiment "' + Mb(a) + '" (' + a + ")"
        }

        function Ob(a) {
            return O(a, "section_ids") || []
        }

        function Pb(a) {
            return O(a, "variation_ids") || []
        }

        function Qb() {
            return z("list_targeted_keys") || {}
        }

        function Rb() {
            return z("project_id")
        }

        function Ib() {
            return z("segments") || {}
        }

        function Sb(a, b) {
            for (var c = Ob(a), d = 0; d < c.length; d++) {
                var e = Tb(c[d]);
                if (E(e, b)) return c[d]
            }
            return ""
        }

        function wa(a) {
            var b = {},
                c = z("public_suffixes") || {};
            w(c, function(a, c) {
                w(c, function(c) {
                    b[c] = a
                })
            });
            wa = function(a) {
                return b[a] || ""
            };
            return wa.call(k, a)
        }

        function Tb(a) {
            return z("sections", a, "variation_ids") || []
        }

        function Ub(a) {
            var b = [];
            w(a.split("_"), function(a) {
                (a = z("variations", a, "code")) && b.push(a)
            });
            return b.join("\n")
        }

        function P(a) {
            if (!Vb) {
                var b = {};
                w(Eb(), function(a) {
                    w(Ob(a), function(d) {
                        w(Tb(d), function(d) {
                            b[d] = a
                        })
                    });
                    w(Pb(a), function(d) {
                        b[d] = a
                    })
                });
                Vb = b
            }
            return Vb[a.split("_")[0]] || ""
        }

        function Wb(a) {
            var b = P(a),
                c = Ob(b);
            if (0 === c.length) {
                c = Pb(b);
                for (b = 0; b < c.length; b++)
                    if (c[b] === a) return b
            } else {
                for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)
                    for (var e = Tb(c[d]), f = 0; f < e.length; f++) e[f] === a[d] && b.push(f);
                if (b !== []) return b
            }
            return -1
        }

        function Xb(a) {
            var b;
            return Yb(a).join(b || ", ")
        }

        function Yb(a) {
            var b = [];
            w(a.split("_"), function(a) {
                b.push(z("variations", a, "name") || "Var " + a)
            });
            return b
        }

        function Zb() {
            return z("www_host")
        }

        function Fb(a) {
            return !!O(a, "enabled")
        }

        function la() {
            return !!z("simple_cookies")
        }

        function O(a, b) {
            return z("experiments", a, b)
        }

        function $b(a) {
            a = O(a, "comscore");
            return H(a) ? a.url : k
        }

        function ac(a) {
            return O(a, "google_analytics")
        }

        function bc(a, b) {
            var c = O(a, "universal_analytics");
            return H(c) ? c[b] : k
        }

        function z(a) {
            var b = DATA;
            if (w(arguments, function(a) {
                    a = b[a];
                    if (H(a)) b = a;
                    else return k
                }) !== k) return b
        }

        function cc(a, b) {
            return z("segments", a, b)
        }

        function dc() {
            var a = z("rum_sampling_rate");
            return H(a) ? a : 0.003
        }
        var xb = k,
            Db = k,
            Vb = k;

        function ec(a, b) {
            function c(a, b) {
                var c = b & 65535;
                return ((b - c) * a | 0) + (c * a | 0) | 0
            }
            for (var d = a.length, e = b || 0, f = d & -4, g, l = 0; l < f; l += 4) g = a.charCodeAt(l) & 255 | (a.charCodeAt(l + 1) & 255) << 8 | (a.charCodeAt(l + 2) & 255) << 16 | (a.charCodeAt(l + 3) & 255) << 24, g = c(g, 3432918353), g = (g & 131071) << 15 | g >>> 17, g = c(g, 461845907), e ^= g, e = (e & 524287) << 13 | e >>> 19, e = 5 * e + 3864292196 | 0;
            g = 0;
            switch (d % 4) {
                case 3:
                    g = (a.charCodeAt(f + 2) & 255) << 16;
                case 2:
                    g |= (a.charCodeAt(f + 1) & 255) << 8;
                case 1:
                    g |= a.charCodeAt(f) & 255, g = c(g, 3432918353), e ^= c((g & 131071) << 15 | g >>> 17, 461845907)
            }
            e ^=
                d;
            e = c(e ^ e >>> 16, 2246822507);
            e = c(e ^ e >>> 13, 3266489909);
            return e ^ e >>> 16
        };
        var fc = Math.pow(2, 32);

        function gc(a, b) {
            var c = ec(a, b);
            return (c >>> 16).toString(16) + (c & 65535).toString(16)
        };

        function hc() {
            return ic = ic || jc()
        }

        function kc() {
            return hc().ba
        }

        function lc() {
            return hc().ca
        }

        function mc() {
            return hc().F
        }

        function nc(a) {
            if (!a) return "";
            try {
                return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]
            } catch (b) {
                return ""
            }
        }

        function oc() {
            return hc().platform
        }

        function pc(a) {
            return N.get([Wa() || Va(), a].join("$$"))
        }

        function qc(a) {
            N.set([Wa() || Va(), "asyncInfo"].join("$$"), a)
        }

        function rc() {
            var a = "android;blackberry;ipad;iphone;ipod;windows phone".split(";");
            return E(a, mc().id) ? mc().id : E(a, oc().id) ? oc().id : sc() ? "mobile" : "unknown"
        }

        function sc() {
            return mc().w
        }

        function tc() {
            return uc ? "returning" : "new"
        }
        oc = function() {
            return hc().platform
        };

        function vc(a) {
            x("User", "Setting current URL to %s", a);
            wc = a
        }
        var wc = i,
            ic = i,
            uc = i;

        function M(a, b, c) {
            xc.push({
                Ea: new Date,
                Ca: a,
                message: b,
                ta: c || o
            });
            yc && zc()
        }

        function Ac() {
            Pa = j
        }

        function Bc() {
            Qa = Pa = j
        }

        function zc() {
            Pa && (w(xc, function(a) {
                if (!a.bb && (!a.ta || a.ta === Qa)) {
                    var b = +a.Ea;
                    x(a.Ca, a.message + (" [time " + (Cc ? b - Cc : 0) + " +" + (Dc ? b - Dc : 0) + "]"));
                    Dc = b;
                    Cc || (Cc = b);
                    a.bb = j
                }
            }), yc = j)
        }
        var Dc = k,
            Cc = k,
            xc = [],
            yc = o;
        var Q = {};

        function Fc(a, b) {
            Q[a] = b
        }

        function Gc(a, b) {
            var c = pc("asyncInfo") || {};
            c[a] = b;
            qc(c)
        }

        function Hc() {
            var a = (Q.odds || k) && (Q.odds || k).ip || (Q.cdn3 || k) && (Q.cdn3 || k).ip;
            return a ? Ic(a) : k
        }

        function Jc() {
            return !Q.odds ? k : (Q.odds || k).lists || {}
        }

        function Kc(a) {
            if (!Jc()) return M("Async Info", "Invalid response from ODDS"), {
                value: i,
                M: o
            };
            if (!Jc().hasOwnProperty(a)) return M("Async Info", "Deduced cachetime value that was checked for presence in list: " + a), {
                value: i,
                M: j
            };
            var b = !Q.odds ? k : (Q.odds || k).lists_metadata || {};
            if (!b || !b[a] || !b[a][0]) return M("Async Info", "Can't find cachetime value that was checked for presence in list: " + a), {
                value: i,
                M: o
            };
            M("Async Info", "Found cachetime value that was checked for presence in list: " + a);
            return {
                value: b[a][0].value,
                M: j
            }
        }

        function Lc(a) {
            var b = Qb()[a],
                c = H(b) && Mc(b);
            if (c) {
                var d = Nc(b);
                if (d === k) return M("Async Info", "Deduced membership status (false) for list: " + a), o;
                M("Async Info", "Found current value to check for presence in list: " + a)
            }
            b = Jc();
            if (!b) return M("Async Info", "No list membership info."), k;
            if (c && (c = Kc(a), c.M && c.value !== d)) return M("Async Info", "Ignoring out-of-date membership status for list: " + a), k;
            d = !!b[a];
            M("Async Info", "Found membership status (" + d + ") for list: " + a);
            return d
        }

        function Oc() {
            if (!Q.cdn3) return k;
            var a = (Q.cdn3 || k).location || {};
            return {
                continent: Ic(a.continent),
                country: Ic(a.country),
                region: Ic(a.region),
                city: Ic(a.city)
            }
        }
        var Pc = {
            get: function() {
                return Q.dcps || k
            },
            set: function(a) {
                Gc("dcps", a);
                Q.dcps = a
            }
        };

        function Qc() {
            var a = Pc.get();
            return !a || a.rulesResults === k ? k : a.rulesResults || {}
        }

        function Ic(a) {
            return "string" !== typeof a || "N/A" === a.toUpperCase() ? k : a.toUpperCase()
        };

        function Rc(a) {
            a = a || {};
            if (qa) {
                a && a.sVariable && (Sc = a.sVariable);
                var b = Sc || ("undefined" !== typeof window.s ? window.s : k);
                if (b)
                    if (Tc) {
                        a = Uc;
                        if (a !== k && b) try {
                            x("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)
                        } catch (c) {
                            x("Integrator", "Error setting SiteCatalyst referrer: %s", c)
                        }
                        x("Integrator", "Tracking with SiteCatalyst");
                        w(Vc(), function(a) {
                            var c = P(a),
                                a = R(c, a, 100, 100, 25, j),
                                f = a.key + ": " + a.value,
                                a = [],
                                g = O(c, "site_catalyst_evar") || k,
                                c = O(c, "site_catalyst_prop") || k;
                            g !== k && a.push("eVar" + g);
                            c !== k && a.push("prop" + c);
                            w(a, function(a) {
                                x("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
                                b[a] = f
                            })
                        })
                    } else Wc = j;
                else M("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
            }
        }

        function Xc(a) {
            a = bb(a) ? Number(a) : -1;
            if (-1 !== [1, 2, 3].indexOf(a)) Yc = a;
            else return Yc
        }

        function Zc() {
            if (qa) {
                var a = Uc;
                if (a !== k) try {
                    x("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])
                } catch (b) {
                    x("Integrator", "Error setting Google Analytics referrer: %s", b)
                }
                var c = [];
                w(Vc(), function(a) {
                    var b = P(a);
                    if (O(b, "chartbeat")) {
                        var d = $c;
                        $c = "";
                        var e = R(b, a, 10, 10, 5, o);
                        $c = d;
                        d = Wb(a);
                        ad = e.key + ": " + String(d);
                        try {
                            x("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", ad])
                        } catch (n) {
                            M("Integrator", "Error sending Chartbeat data for " + Nb(b))
                        }
                    }
                    if ($b(b)) {
                        var e = $b(b),
                            d = R(b, a, 100, 100, 25, j),
                            r = e + (-1 !== e.indexOf("?") ? "&" : "?") + "optimizely_experiment_id=" + b + "&optimizely_experiment_name=" + encodeURIComponent(d.key) + "&optimizely_variation_id=" + a + "&optimizely_variation_name=" + encodeURIComponent(d.value) + "&ns_m_exp=(" + b + ") " + encodeURIComponent(d.key) + "&ns_m_chs=(" + a + ") " + encodeURIComponent(d.value) + "&type=hidden";
                        try {
                            $(window).load(function() {
                                M("Integrator", "Sending comScore log call");
                                bd(r, k)
                            })
                        } catch (q) {
                            M("Integrator", "Error sending comScore data for " + Nb(b))
                        }
                    }
                    if (O(b, "crazyegg")) {
                        e =
                            R(b, a, 100, 100, 15, o);
                        try {
                            x("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = e.key + ": " + e.value
                        } catch (G) {
                            M("Integrator", "Error sending CrazyEgg data for " + Nb(b))
                        }
                    }
                    if (ac(b)) {
                        e = ac(b);
                        d = 0;
                        H(e) && (d = e.slot || d);
                        var e = d,
                            d = ac(b),
                            A = "";
                        H(d) && (A = d.tracker || A);
                        d = A;
                        A = R(b, a, 28, 24, 5, j);
                        try {
                            var C = "";
                            "" !== d && (C = d + ".");
                            x("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", e, Yc);
                            _gaq.push([C + "_setCustomVar", e, A.key, A.value, Yc])
                        } catch (pa) {
                            M("Integrator", "Error sending Google Analytics data for " +
                                Nb(b))
                        }
                    }
                    if (O(b, "inspectlet")) {
                        e = $c;
                        $c = "";
                        d = R(b, a, 100, 100, 25, o);
                        $c = e;
                        try {
                            M("Integrator", "Calling __insp.push for sending data to Inspectlet"), window.__insp = window.__insp || [], window.__insp.push(["tagSession", {
                                "Optimizely Experiment Name": d.key,
                                "Optimizely Variation Name": d.value,
                                "Optimizely Experiment ID": b,
                                "Optimizely Variation ID": a
                            }])
                        } catch (Ta) {
                            M("Integrator", "Error sending Inspectlet data for " + Nb(b))
                        }
                    }
                    if (z("kissmetrics")) {
                        e = R(b, a, 100, 100, 15, j);
                        d = {};
                        d[e.key] = e.value;
                        try {
                            x("Integrator", "Calling _kmq.set"),
                                _kmq.push(["set", d])
                        } catch (ze) {
                            M("Integrator", "Error sending KISSmetrics data for " + Nb(b))
                        }
                    }
                    if (O(b, "mixpanel")) {
                        e = R(b, a, 100, 100, 15, o);
                        d = {};
                        d[e.key] = e.value;
                        try {
                            x("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", d])
                        } catch (Gh) {
                            M("Integrator", "Error sending Mixpanel data for " + Nb(b))
                        }
                    }
                    if (O(b, "moat")) {
                        e = R(b, a, 100, 100, 15, o);
                        e = e.key + ": " + e.value;
                        try {
                            x("Integrator", "Calling optimizelyMoat.push"), optimizelyMoat.push(e)
                        } catch (Hh) {
                            M("Integrator", "Error sending Moat data for " + Nb(b))
                        }
                    }
                    O(b, "sessioncam") &&
                        (c = c.concat(cd(b, a)));
                    O(b, "at_internet") && (e = R(b, a, 28, 24, 5, j), a = b + "[" + encodeURIComponent(e.key) + "]-0-" + a + "[" + encodeURIComponent(e.value) + "]", a in dd || (x("Integrator", "Queueing AT Internet log call: %s", a), dd[a] = o))
                });
                if (0 < c.length) {
                    a = c;
                    try {
                        M("Integrator", "Calling sessioncamConfiguration object"), window.sessioncamConfiguration = window.sessioncamConfiguration || {}, window.sessioncamConfiguration.customDataObjects = window.sessioncamConfiguration.customDataObjects || [], window.sessioncamConfiguration.customDataObjects =
                            window.sessioncamConfiguration.customDataObjects.concat(a)
                    } catch (d) {
                        M("Integrator", "Error sending sessioncam data " + a)
                    }
                }
                0 < L(dd).length && ("function" === typeof window.xt_mvt ? ed() : $(window).bind("load.ATInternet", ed));
                a = v("optimizelyChartbeat") || "";
                try {
                    if (a && ad != a && (x("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), ad != a) x("Integrator", "Set new Chartbeat referral cookie."), y("optimizelyChartbeat", ad)
                } catch (e) {
                    M("Integrator", "Error sending Chartbeat referral for " + a)
                }
                Tc = j;
                fd &&
                    (gd(), fd = o);
                Wc && (Rc(), Wc = o)
            }
        }

        function hd() {
            if (window.ClickTaleContext) {
                try {
                    window.ClickTaleContext.getAggregationContextAsync("1", function(a) {
                        a.Location && window.optimizely.push(["overrideUrl", a.Location]);
                        for (var b in a.PageEvents) {
                            var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
                            x("Integrator", "Playback ClickTale Integration - %s", e);
                            for (b = 0; b < e.length; b++) {
                                x("Integrator", "Playback ClickTale Integration - %s", e[b]);
                                for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), l = 0; l < g.length; l++) id(g[l]) ? x("Integrator",
                                    "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[l], {
                                    force: j
                                }])
                            }
                        }
                    })
                } catch (a) {
                    x("Integrator", "Playback ClickTale Aggregation Integration failed.")
                }
                try {
                    window.ClickTaleContext.getRecordingContextAsync("1.1", function(a) {
                        if (a.inSingleRecordingScope) {
                            a.location && window.optimizely.push(["overrideUrl", a.location]);
                            x("Integrator", "Playback ClickTale getRecordingContextAsync callback");
                            for (var b in a.fields) x("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), id(a.fields[b]) ?
                                x("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {
                                    force: j
                                }])
                        }
                    })
                } catch (b) {
                    x("Integrator", "Playback ClickTale Recording Integration failed.")
                }
            } else x("Integrator", "ClickTaleContext not defined.")
        }

        function jd() {
            x("Integrator", "Tracking with ClickTale.");
            "function" == typeof window.ClickTaleField ? w(Vc(), function(a) {
                var b = P(a),
                    c = R(b, a, 100, 100, 15, o),
                    c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
                x("Integrator", "Setting ClickTale - %s", c);
                window.ClickTaleField(b, a);
                window.ClickTaleEvent(c)
            }) : x("Integrator", "ClickTaleField() not defined.")
        }

        function kd(a) {
            $c = a
        }

        function ld(a) {
            Sc = a
        }

        function md(a, b) {
            return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)
        }

        function Vc() {
            var a = nd.concat(S),
                b = [];
            w(od(), function(c) {
                var e = P(c),
                    f = o;
                if (Fb(e)) {
                    var g = Xb(c);
                    E(a, e) && (x("Integrator", '"%s" relevant because experiment active', g), f = j);
                    f && b.push(c)
                }
            });
            var c = pd;
            c && b.push(c);
            return b
        }

        function id(a) {
            if (a = Ub(a))
                if (a = qd(a.toString())) return a[1];
            return k
        }

        function gd() {
            if (qa)
                if (Tc) {
                    var a = window[window.GoogleAnalyticsObject || "ga"];
                    if (a) {
                        var b = Uc;
                        if (b !== k) try {
                            x("Integrator", "Fixing Universal Analytics set referrer with %s", b), (0, window[window.GoogleAnalyticsObject || "ga"])("set", "referrer", b)
                        } catch (c) {
                            x("Integrator", "Error setting Universal Analytics referrer: %s", c)
                        }
                        x("Integrator", "Tracking with Universal Analytics");
                        w(Vc(), function(b) {
                            var c = P(b);
                            if (bc(c, "slot")) {
                                var f = bc(c, "slot"),
                                    g = bc(c, "tracker"),
                                    l = R(c, b, 100, 100, 25, j),
                                    b = l.key + " (" + c + "): " + l.value;
                                150 < b.length && (b = l.key.substring(0, 80) + " (" + c + "): " + l.value, b = b.substring(0, 149));
                                c = g ? g + "." : "";
                                x("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, f, b);
                                a(c + "set", "dimension" + f, b)
                            }
                        })
                    } else M("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined")
                } else fd = j
        }

        function cd(a, b) {
            M("Integrator", "Preparing to send data to Sessioncam");
            return [R(a, b, 100, 100, 15, o), {
                key: "Optimizely Exp " + a,
                value: "Optimizely Var " + b
            }]
        }

        function ed() {
            try {
                $(window).unbind("load.ATInternet"), window.xt_mvt && w(dd, function(a, c) {
                    c || (x("Integrator", "Sending AT Internet log call: %s", a), window.xt_mvt("", "", a), dd[a] = j)
                })
            } catch (a) {
                M("Integrator", "Error sending AT Internet data: " + a.toString())
            }
        }

        function R(a, b, c, d, e, f) {
            a = $c + Mb(a);
            b = Yb(b);
            1 < b.length ? (b = $.map(b, function(a) {
                return a.substr(0, e - 1)
            }), b = b.join("~")) : b = b[0];
            f ? (a = md(a, c), b = md(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
            return {
                key: a,
                value: b
            }
        }

        function rd(a, b, c) {
            try {
                var d = N.get(sd) || {},
                    e = d[a],
                    f;
                if (c && e) {
                    var c = {},
                        g;
                    if (e)
                        for (g in e) e.hasOwnProperty(g) && (c[g] = e[g]);
                    if (b)
                        for (g in b)
                            if (b.hasOwnProperty(g)) {
                                var e = c,
                                    l = g,
                                    m;
                                if (c[g]) {
                                    var n = c[g],
                                        r = b[g];
                                    F(n) || (n = [n]);
                                    F(r) || (r = [r]);
                                    for (var q = [].concat(n), G = i, G = 0; G < r.length; G++) ra(r[G], q) || q.push(r[G]);
                                    m = q
                                } else m = b[g];
                                e[l] = m
                            }
                    f = c
                } else f = b;
                d[a] = f;
                N.set(sd, d)
            } catch (A) {}
        }
        var fd = o,
            Wc = o,
            dd = {},
            ad = "",
            Yc = 2,
            Tc = o,
            $c = "Optimizely ",
            Sc = k,
            sd = "thirdParty";

        function td(a, b, c, d) {
            if (!B) return o;
            var e = "number" === typeof c || "string" === typeof c ? String(c) : k,
                f = !!(c === j || c && c.force === j || d && d.force === j),
                d = ("object" === typeof c ? c : d) || {},
                c = d.skip === j,
                g = d.skipPageview === j,
                d = d.enabledStatus;
            if (e) try {
                ud(b, e, j)
            } catch (l) {
                M("Activator", "Error while activating experiment " + b + " for variation " + e + " -- proceeding without bucketing user.")
            }
            var m = [];
            bb(b) ? m.push(b) : w(Eb(), function(a) {
                Kb(a) && m.push(a)
            });
            vd(a, m, {
                Ga: f,
                cb: j,
                Fa: d,
                ib: c,
                za: g
            })
        }

        function wd(a, b, c) {
            if (!B) return o;
            if (!("object" === typeof b && "string" === typeof c))
                if ("object" === typeof b && !H(c)) c = b.hasOwnProperty("lists") ? "odds" : "cdn3";
                else if (H(b) || H(c)) {
                M("Activator", "Unrecognized arguments to activateGeoDelayedExperiment: " + arguments);
                return
            }
            if ("object" === typeof b && "string" === typeof c) {
                M("Activator", "Saving async info from '" + c + "'");
                "cdn3" === c && T("geoArrive");
                Gc(c, b);
                var d = (Q[c] = b) && b.lists || {},
                    e = {},
                    f, g, l, m, n;
                for (n in d) d.hasOwnProperty(n) && (0 === n.indexOf("_") && d[n]) && (f = n.substring(1).split("__"),
                    g = f.shift(), l = f.shift(), f = f.join("__"), g && (l && f) && (m = e, m[g] || (m[g] = {}), m = m[g], m[l] || (m[l] = []), m = m[l], m.push(f)));
                for (g in e) rd(g, e[g], o);
                xd ? (M("Activator", "Post-timeout; too late to act on new async info."), geolocation.cdn3Requested && T("geoFailed")) : (d = yd.slice(), M("Activator", "Trying to activate " + d.length + " delayed segments"), zd(d), d = Ad.slice(), M("Activator", "Trying to activate " + d.length + " experiments"), vd(a, d, {
                    za: Sa
                }), Bd(), "object" === typeof b && "string" === typeof c && "cdn3" === c && T("geoSuccess"))
            } else M("Activator",
                "Timeout: will not act on future async info."), T("geoTimeout"), xd = j
        }

        function vd(a, b, c) {
            M("Activator", "Triaging " + b.length + " experiments.");
            var d = [],
                e = [],
                f = [];
            w(b, function(b) {
                c.Ga ? (M("Activator", "Force-ignoring conditions for experiment " + b), d.push(b)) : Cd(b) ? Dd(b, {
                    manualActivation: c.cb,
                    objectType: "experiment",
                    enabledStatus: c.Fa,
                    visitor: a
                }) ? (M("Activator", "Passed conditions for experiment " + b), d.push(b)) : (M("Activator", "Failed conditions for experiment " + b), f.push(b)) : (M("Activator", "Can't test conditions for experiment " + b), e.push(b))
            });
            w(e, Ed);
            Fd(d);
            Fd(f);
            var g = [];
            w(d, function(a) {
                Gd(a, c.ib) && g.push(a)
            });
            Hd(g, b);
            Id();
            Zc();
            B && !c.za && Jd(document.location.href, "pageview", {
                hb: j
            })
        }

        function zd(a) {
            M("Activator", "Triaging " + a.length + " segments.");
            var b = [],
                c = [],
                d = [],
                e = [];
            w(a, function(a) {
                cc(a, "is_api_only") ? (M("Activator", "Ignoring API-only segment " + a), e.push(a)) : Cd(a) ? Dd(a, {
                    objectType: "segment"
                }) ? (M("Activator", "Passed conditions for segment " + a), b.push(a)) : (M("Activator", "Failed conditions for segment " + a), d.push(a)) : (M("Activator", "Can't test conditions for segment " + a), c.push(a))
            });
            w(c, Kd);
            Ld(b);
            Ld(d);
            Ld(e);
            w(b, Md)
        }

        function Ed(a) {
            M("Activator", "Deferring test for experiment " + a);
            E(Ad, a) || Ad.push(a)
        }

        function Kd(a) {
            M("Activator", "Deferring test for segment " + a);
            E(yd, a) || yd.push(a)
        }

        function Fd(a) {
            Ad = K(Ad, function(b) {
                return !ra(b, a)
            })
        }

        function Ld(a) {
            yd = K(yd, function(b) {
                return !ra(b, a)
            })
        }
        var Ad = [],
            yd = [],
            xd = o;
        /*


         UAParser.js v0.7.9
         Lightweight JavaScript-based User-Agent string parser
         https://github.com/faisalman/ua-parser-js

         Copyright ? 2012-2015 Faisal Salman <fyzlman@gmail.com>
         Dual licensed under GPLv2 & MIT
        */
        function Nd() {}
        var Rd = {
            extend: function(a, b) {
                for (var c in b) - 1 !== "browser cpu device engine os".indexOf(c) && 0 === b[c].length % 2 && (a[c] = b[c].concat(a[c]));
                return a
            },
            has: function(a, b) {
                return "string" === typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : o
            },
            N: function(a) {
                return a.toLowerCase()
            },
            ua: function(a) {
                return "string" === typeof a ? a.split(".")[0] : i
            }
        };

        function Sd() {
            for (var a, b = 0, c, d, e, f, g, l, m = arguments; b < m.length && !g;) {
                var n = m[b],
                    r = m[b + 1];
                if ("undefined" === typeof a)
                    for (e in a = {}, r) f = r[e], "object" === typeof f ? a[f[0]] = i : a[f] = i;
                for (c = d = 0; c < n.length && !g;)
                    if (g = n[c++].exec(this.ra()))
                        for (e = 0; e < r.length; e++) l = g[++d], f = r[e], "object" === typeof f && 0 < f.length ? 2 == f.length ? a[f[0]] = "function" == typeof f[1] ? f[1].call(this, l) : f[1] : 3 == f.length ? a[f[0]] = "function" === typeof f[1] && (!f[1].exec || !f[1].test) ? l ? f[1].call(this, l, f[2]) : i : l ? l.replace(f[1], f[2]) : i : 4 == f.length &&
                            (a[f[0]] = l ? f[3].call(this, l.replace(f[1], f[2])) : i) : a[f] = l ? l : i;
                b += 2
            }
            return a
        }

        function Td(a, b) {
            for (var c in b)
                if ("object" === typeof b[c] && 0 < b[c].length)
                    for (var d = 0; d < b[c].length; d++) {
                        if (Rd.has(b[c][d], a)) return "?" === c ? i : c
                    } else if (Rd.has(b[c], a)) return "?" === c ? i : c;
            return a
        }
        var Ud = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2E3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            Vd = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    ["name", "version"],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        ["name", "Opera"], "version"
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                        /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i
                    ],
                    ["name", "version"],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        ["name", "IE"], "version"
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    ["name", "version"],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        ["name", "Yandex"], "version"
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        ["name", /_/g, " "], "version"
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],
                    ["name", "version"],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        ["name", "Dolphin"], "version"
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        ["name", "Chrome"], "version"
                    ],
                    [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                    ["version", ["name", "MIUI Browser"]],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                    ["version", ["name", "Android Browser"]],
                    [/FBAV\/([\w\.]+);/i],
                    ["version", ["name", "Facebook"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    ["version", ["name", "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    ["version", "name"],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    ["name", ["version", Td, {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    ["name", "version"],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        ["name", "Netscape"], "version"
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    ["version", ["name", "Firefox"]],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                        /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i
                    ],
                    ["name", "version"]
                ],
                da: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        ["architecture", "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        ["architecture", Rd.N]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        ["architecture", "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        ["architecture", "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        ["architecture", /ower/, "", Rd.N]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        ["architecture", "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        ["architecture", Rd.N]
                    ]
                ],
                F: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    ["model", "vendor", ["type", "tablet"]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    ["model", ["vendor", "Apple"],
                        ["type", "tablet"]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        ["model", "Apple TV"],
                        ["vendor",
                            "Apple"
                        ]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    ["vendor", "model", ["type", "tablet"]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    ["model", ["vendor", "Amazon"],
                        ["type", "tablet"]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        ["model", Td, {
                            "Fire Phone": ["SD", "KF"]
                        }],
                        ["vendor", "Amazon"],
                        ["type", "mobile"]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    ["model", "vendor", ["type", "mobile"]],
                    [/\((ip[honed|\s\w*]+);/i],
                    ["model", ["vendor", "Apple"],
                        ["type", "mobile"]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    ["vendor", "model", ["type", "mobile"]],
                    [/\(bb10;\s(\w+)/i],
                    ["model", ["vendor", "BlackBerry"],
                        ["type", "mobile"]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                    ["model", ["vendor", "Asus"],
                        ["type", "tablet"]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        ["vendor", "Sony"],
                        ["model", "Xperia Tablet"],
                        ["type", "tablet"]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        ["vendor", "Sony"],
                        ["model", "Xperia Phone"],
                        ["type", "mobile"]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    ["vendor", "model", ["type", "console"]],
                    [/android.+;\s(shield)\sbuild/i],
                    ["model", ["vendor", "Nvidia"],
                        ["type", "console"]
                    ],
                    [/(playstation\s[3portablevi]+)/i],
                    ["model", ["vendor", "Sony"],
                        ["type", "console"]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        ["vendor", Td, {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }],
                        ["model",
                            Td, {
                                "Evo Shift 4G": "7373KT"
                            }
                        ],
                        ["type", "mobile"]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    ["vendor", "model", ["type", "tablet"]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    ["vendor", ["model", /_/g, " "],
                        ["type", "mobile"]
                    ],
                    [/(nexus\s9)/i],
                    ["model", ["vendor", "HTC"],
                        ["type", "tablet"]
                    ],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    ["model", ["vendor", "Microsoft"],
                        ["type", "console"]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        ["model", /\./g,
                            " "
                        ],
                        ["vendor", "Microsoft"],
                        ["type", "mobile"]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i],
                    ["model", ["vendor", "Motorola"],
                        ["type", "mobile"]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    ["model", ["vendor", "Motorola"],
                        ["type", "tablet"]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        ["vendor", "Samsung"], "model", ["type", "tablet"]
                    ],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
                        /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i
                    ],
                    [
                        ["vendor", "Samsung"], "model", ["type", "mobile"]
                    ],
                    [/(samsung);smarttv/i],
                    ["vendor", "model", ["type", "smarttv"]],
                    [/\(dtv[\);].+(aquos)/i],
                    ["model", ["vendor", "Sharp"],
                        ["type", "smarttv"]
                    ],
                    [/sie-(\w+)*/i],
                    ["model", ["vendor", "Siemens"],
                        ["type", "mobile"]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        ["vendor", "Nokia"], "model", ["type", "mobile"]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    ["model", ["vendor", "Acer"],
                        ["type", "tablet"]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        ["vendor", "LG"], "model", ["type", "tablet"]
                    ],
                    [/(lg) netcast\.tv/i],
                    ["vendor", "model", ["type", "smarttv"]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    ["model", ["vendor", "LG"],
                        ["type", "mobile"]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    ["model", ["vendor", "Lenovo"],
                        ["type", "tablet"]
                    ],
                    [/linux;.+((jolla));/i],
                    ["vendor", "model", ["type", "mobile"]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    ["vendor", "model", ["type", "wearable"]],
                    [/android.+;\s(glass)\s\d/i],
                    ["model", ["vendor", "Google"],
                        ["type", "wearable"]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i,
                        /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i
                    ],
                    [
                        ["model", /_/g, " "],
                        ["vendor", "Xiaomi"],
                        ["type", "mobile"]
                    ],
                    [/(mobile|tablet);.+rv\:.+gecko\//i],
                    [
                        ["type", Rd.N], "vendor", "model"
                    ]
                ],
                fa: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    ["version", ["name", "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    ["name", "version"],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    ["version", "name"]
                ],
                wa: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    ["name", "version"],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    ["name", ["version", Td, Ud]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        ["name", "Windows"],
                        ["version", Td, Ud]
                    ],
                    [/\((bb)(10);/i],
                    [
                        ["name", "BlackBerry"], "version"
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                        /linux;.+(sailfish);/i
                    ],
                    ["name", "version"],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        ["name", "Symbian"], "version"
                    ],
                    [/\((series40);/i],
                    ["name"],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        ["name", "Firefox OS"], "version"
                    ],
                    [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i,
                        /(gnu)\s?([\w\.]+)*/i
                    ],
                    ["name", "version"],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        ["name", "Chromium OS"], "version"
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        ["name", "Solaris"], "version"
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    ["name", "version"],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        ["name", "iOS"],
                        ["version", /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        ["name", "Mac OS"],
                        ["version", /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i,
                        /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i
                    ],
                    ["name", "version"]
                ]
            };

        function Wd(a, b) {
            if (!(this instanceof Wd)) return (new Wd(a, b)).Ta();
            var c = a || (Nd && Nd.navigator && Nd.navigator.userAgent ? Nd.navigator.userAgent : ""),
                d = b ? Rd.extend(Vd, b) : Vd;
            this.u = function() {
                var a = Sd.apply(this, d.browser);
                a.ua = Rd.ua(a.version);
                return a
            };
            this.Ka = function() {
                return Sd.apply(this, d.da)
            };
            this.K = function() {
                return Sd.apply(this, d.F)
            };
            this.Pa = function() {
                return Sd.apply(this, d.fa)
            };
            this.oa = function() {
                return Sd.apply(this, d.wa)
            };
            this.Ta = function() {
                return {
                    Ab: this.ra(),
                    browser: this.u(),
                    fa: this.Pa(),
                    wa: this.oa(),
                    F: this.K(),
                    da: this.Ka()
                }
            };
            this.ra = function() {
                return c
            };
            this.gb = function(a) {
                c = a
            };
            this.gb(c);
            return this
        }
        Wd.VERSION = "0.7.9";
        Wd.kb = {
            e: "name",
            qb: "major",
            VERSION: "version"
        };
        Wd.mb = {
            jb: "architecture"
        };
        Wd.nb = {
            sb: "model",
            VENDOR: "vendor",
            g: "type",
            lb: "console",
            rb: "mobile",
            vb: "smarttv",
            wb: "tablet",
            xb: "wearable",
            ob: "embedded"
        };
        Wd.pb = {
            e: "name",
            VERSION: "version"
        };
        Wd.ub = {
            e: "name",
            VERSION: "version"
        };
        Nd.Ba = Wd;

        function jc() {
            var a = new Nd.Ba(window.navigator.userAgent),
                b = a.u(),
                c = a.oa(),
                a = a.K(),
                d = a.model in Xd ? Xd[a.model] : "unknown",
                e = (c.name || "unknown").toLowerCase(),
                f;
            a: if (E(["mobile", "tablet"], a.type)) f = j;
                else {
                    if (d && "unknown" !== d)
                        for (f in Xd)
                            if (d === Xd[f]) {
                                f = j;
                                break a
                            }
                    f = E(["android", "blackberry", "ios", "windows phone"], e) ? j : o
                }
            return {
                ba: Yd(b.name),
                ca: b.version,
                platform: {
                    id: e,
                    version: c.version
                },
                F: {
                    id: d,
                    type: a.type || (f ? "mobile" : "desktop"),
                    w: f
                }
            }
        }

        function Yd(a) {
            a = (a || "").toLowerCase();
            if (a in Zd) return a;
            for (var b in Zd)
                if (D(Zd[b] || [], function(b) {
                        return b.toLowerCase() === a
                    })) return b;
            return "unknown"
        }
        var Zd = {
                gc: ["Chrome", "chromium", "silk", "yandex", "maxthon"],
                ie: ["Internet Explorer", "iemobile"],
                edge: ["Edge"],
                ff: ["Firefox", "iceweasel"],
                opera: ["Opera", "opera mini", "opera tablet"],
                safari: ["Safari", "mobile safari", "webkit"],
                ucbrowser: ["UC Browser"]
            },
            Xd = {
                iPhone: "iphone",
                iPad: "ipad"
            };

        function qd(a) {
            return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)
        }

        function $d(a) {
            return -1 !== a.indexOf("_optimizely_redirect_no_cookie")
        }

        function ae(a) {
            var a = a || "",
                b = v("optimizelyRedirect");
            return $d(a) || !b || b && "true" === b.split("|")[1] ? j : o
        }

        function be() {
            var a;
            a = H(a) ? a : document.referrer;
            y("optimizelyReferrer", a, 5)
        }
        var Uc = k,
            pd = "",
            ce = /^\/\* _optimizely_redirect.+\*\/[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/,
            de = /^\/\* _optimizely_redirect.+\*\/[ ]*\nvar[ ]*_optly[ ]*=[ ]*\{[ ]*redir:document\.createElement\("a"\)\}[;]?\n_optly\.redir\.href=.*\n_optly\.cur=.+\nif \(_optly.cur\)[ ]?\{.+\}[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/,
            ee = /^\/\* _optimizely_redirect.+\*\/[ ]*[\n]+window\.location\.replace\([ ]*redirectFirst.*\)[ ]*[;]?$/;
        var fe, ge;

        function he() {
            var a = {
                    disable: ie,
                    optOut: je,
                    setCookieDomain: Ca,
                    setCookieExpiration: ke,
                    verifyPreviewProject: function(a) {
                        Rb() !== a && M("API", "Preview projectId (" + Rb() + ") does not match expected (" + a + "), disabling.")
                    }
                },
                b = window.optimizely,
                c = [];
            F(b) && (w(b, function(b) {
                var e = b;
                F(b) ? e = b[0] : ab(b) && (e = b.type);
                a[e] ? le([a], b, j) : c.push(b)
            }), window.optimizely = c)
        }

        function me(a, b, c) {
            rd(a, b, !!c);
            Bd()
        }

        function ne(a, b) {
            var c = Hb(a) || a,
                d = Ib()[c];
            d ? d.audience_id ? U.D(d.audience_id) : d.dimension_id ? U.B(d.dimension_id, b || j, o) : oe(c, b) : M("API", "Unable to find segment: " + c)
        }

        function ud(a, b, c) {
            Ra = j;
            B && c !== j && Jd(document.location.href, "pageview", {
                hb: j
            });
            var a = String(a),
                b = String(b),
                d = k,
                e = b.split("_"),
                f = Ob(a),
                b = f && 0 !== f.length;
            if ("-1" === e[0]) {
                c = a;
                pe[c] && delete pe[c];
                qe[c] && delete qe[c];
                for (e = 0; e < V.length; e++) V[e].H === c && V.splice(e, 1);
                re()
            } else if (b && e.length == f.length) d = [], w(e, function(a, b) {
                256 >= Number(a) ? d.push(Tb(f[b])[a]) : d.push(a)
            }), d = d.join("_");
            else if (!b && 1 == e.length && 256 >= Number(e[0])) {
                var c = String,
                    e = e[0],
                    g = Pb(a),
                    l = k;
                try {
                    l = g[e]
                } catch (m) {}
                d = c(l)
            } else 1 == e.length ?
                d = e[0] : M("API", "Error: could not bucket user. Unknown arguments.");
            d && (b && Sb(a, d) ? (b = d, c = Sb(a, b), se[a] = se[a] || {}, se[a][c] = b, M("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = te(a), 1 === a.length && ue(a[0], "api.bucketUser", j)) : ue(d, "api.bucketUser", j));
            Id()
        }

        function ie(a) {
            a && "tracking" === a || (M("API", "Optimizely disabled"), Ha = B = o);
            qa = o
        }

        function ve() {
            M("API", "Finalizing API.");
            Bd();
            fe = j
        }

        function we() {
            if (z("slave")) return SLAVE_CLIENT.optimizely.get.apply(k, Array.prototype.slice.call(arguments))
        }
        var xe = [];

        function ye(a) {
            xe.push(a);
            Bd()
        }

        function le(a, b, c) {
            var d = [],
                e = b,
                c = H(c) ? c : o,
                f = 0;
            F(b) ? (e = b[0], d = Za(b, 1)) : ab(b) && (f = H(b.version) ? b.version : 1, e = b.type, d = [b]);
            var a = a[f],
                g;
            a && (g = a[e]);
            g ? (M("API", 'Called function "' + e + '"'), g.apply(k, d), Ae.S[0 === f ? e : "v" + f + "." + e] = j) : c || M("API", 'Error for unknown function "' + e + '"');
            z("slave") && SLAVE_CLIENT.optimizely.push(b);
            zc()
        }

        function Be(a, b) {
            fe ? M("API", "Error: can't add custom tags after Optimizely loads") : (ge = ge || {}, 2 == arguments.length ? ge[a] = b : 1 == arguments.length && $.extend(j, ge, a))
        }

        function Ce(a, b) {
            var c = Hb(a) || a,
                b = H(b) ? b : j,
                d = Ib()[c];
            d ? d.audience_id ? U.aa(d.audience_id) : d.dimension_id ? U.B(d.dimension_id, k) : De(c, b) : M("API", "Unable find segment for: " + c)
        }

        function Ee() {
            var a = L(Ib());
            w(a, function(a) {
                Ce(a, o)
            });
            Fe()
        }

        function Bd() {
            Ge = {};
            He = {};
            Ie = {};
            w(od(), function(a) {
                var b = P(a);
                Ge[b] = a.split("_");
                He[b] = Wb(a);
                Ie[b] = Xb(a)
            });
            W = {};
            var a = z("audiences");
            X(W, "audiences", a || i, "data.audiences");
            X(W, "customTags", ge, "data.customTags");
            X(W, "thirdParty", N.get(sd) || {}, "data.thirdParty");
            for (var b = {}, c = Eb(), a = 0; a < c.length; a++) {
                var d = c[a],
                    e = {};
                e.code = O(d, "code") || "";
                e.name = Mb(d);
                e.conditional = Lb(d);
                e.manual = Kb(d);
                e.section_ids = Ob(d);
                e.variation_ids = Pb(d);
                b[d] = e
            }
            X(W, "experiments", b, "data.experiments");
            b = {};
            c = L(Ib());
            for (a = 0; a <
                c.length; a++) d = c[a], e = {
                name: cc(d, "name") || "Seg " + d
            }, b[d] = e;
            X(W, "segments", b, "data.segments");
            b = {};
            c = L(z("sections") || {});
            for (a = 0; a < c.length; a++) d = c[a], e = {}, e.name = z("sections", d, "name") || "Sec " + d, e.variation_ids = Tb(d), b[d] = e;
            X(W, "sections", b, "data.sections");
            b = {};
            c = L(z("variations") || {});
            for (a = 0; a < c.length; a++) d = c[a], e = {}, e.name = Xb(d), e.code = Ub(d), b[d] = e;
            X(W, "variations", b, "data.variations");
            var a = kc(),
                a = Zd[a] ? Zd[a][0] : a,
                b = lc(),
                c = mc().id,
                d = mc().type,
                e = oc(),
                f = sc(),
                g = rc(),
                l = oc().id,
                m = {};
            w(Qb(), function(a) {
                m[a] =
                    Lc(a)
            });
            var b = {
                    browser: a,
                    browserVersion: b,
                    device: c,
                    deviceType: d,
                    platform: e,
                    mobile: f,
                    mobileId: g,
                    os: l,
                    lists: m,
                    location: Oc(),
                    ip: Hc(),
                    matchingRules: Qc(),
                    referrer: String(document.referrer),
                    segments: Je(),
                    dimensions: U.t,
                    audiences: U.p
                },
                n;
            for (n in b) X(b, n, b[n], "data.visitor." + n);
            n = {};
            c = Ke();
            c.reverse();
            a = 0;
            for (d = c.length; a < d; a++) try {
                n[ja(c[a][0])] = ja(c[a][1])
            } catch (r) {
                M("API", "Failed to decode parameter " + c[a][0] + "=" + c[a][1])
            }
            X(b, "params", n, "data.visitor.params");
            W.visitor = b;
            n = {};
            X(n, "activeExperiments", nd || [], "data.state.activeExperiments");
            a: {
                if (a = pd)
                    if (b = P(a)) {
                        a = {
                            variationId: a,
                            experimentId: b,
                            referrer: Uc
                        };
                        break a
                    }
                a = i
            }
            X(n, "redirectExperiment", a, "data.state.redirectExperiment");
            X(n, "variationIdsMap", Ge, "data.state.variationIdsMap");
            X(n, "variationMap", He, "data.state.variationMap");
            X(n, "variationNamesMap", Ie, "data.state.variationNamesMap");
            X(n, "enabled", B, "data.state.enabled");
            n.integrations = {};
            X(n.integrations, "activeOAuthClientIds", xe, "data.state.integrations.activeOAuthClientIds");
            W.state = n;
            n = {
                activeExperiments: nd,
                allExperiments: Jb(),
                all_experiments: Jb(),
                variationIdsMap: Ge,
                variationMap: He,
                variationNamesMap: Ie,
                variation_map: He
            };
            window.optimizely.data = W;
            w(n, function(a, b) {
                X(window.optimizely, a, b)
            })
        }

        function X(a, b, c, d) {
            try {
                var e = "o.",
                    e = d ? e + d : e + b;
                Object.defineProperty(a, b, {
                    configurable: j,
                    enumerable: j,
                    get: function() {
                        Ae.S[e] = j;
                        return c
                    },
                    set: function(a) {
                        c = a
                    }
                })
            } catch (f) {
                a[b] = c
            }
        }

        function Le(a) {
            if (!bb(a)) return o;
            Fa = Number(a)
        }

        function Me() {
            La = j
        }

        function ke(a) {
            var b = "";
            "number" !== typeof a ? (b = "must be a number.", a = 31536E4) : a = Math.floor(86400 * a);
            7776E3 > a && (b = "less then minimum.", a = 7776E3);
            M("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
            Ua = a
        }

        function Ne() {
            Sa = j
        }

        function Oe() {
            v("optimizelyReportableFix") ? M("API", "skipping because cookie is set") : (w(z("audiences"), function(a) {
                vb(a) && (M("API", "Removing from reportable audience: " + a), U.aa(a))
            }), y("optimizelyReportableFix", "1", 7776E3))
        }

        function Pe(a) {
            var b = Wa();
            !a && 0 !== a ? (M("API", "Clearing PPID"), ya("optimizelyPPID", za())) : "string" === typeof a || "number" === typeof a ? (M("API", "Setting PPID to " + a), a = String(a), y("optimizelyPPID", a, Ua)) : M("API", "Ignoring non-string, non-number PPID: " + a);
            Wa() !== b && (M("API", "Clearing plan because of PPID change"), M("Plan", "Resetting visitor buckets"), Qe = {}, pe = {}, qe = {}, V = [], Id())
        }
        var Se = {
                event: function(a) {
                    Re(a.eventName, a.tags)
                },
                user: function(a) {
                    a.userId && Pe(a.userId);
                    a.attributes && w(a.attributes, function(a, c) {
                        U.B(a, c)
                    })
                },
                integration: function(a) {
                    a.OAuthClientId && ye(a.OAuthClientId)
                }
            },
            W = {},
            Te = {},
            Ge = {},
            He = {},
            Ie = {},
            U = k;

        function Re(a, b) {
            var c;
            a: {
                c = {};
                var d, e = z("custom_revenue_goals");e && (a in e && bb(e[a])) && (d = Number(e[a]));
                if (b)
                    if (bb(b)) d = Number(b);
                    else if ("object" === typeof b) {
                    if (c = J({}, b), "revenue" in c)
                        if (bb(c.revenue)) d = Number(c.revenue), delete c.revenue;
                        else {
                            x("tracker", "Revenue field %s not a number.", c.revenue);
                            c = k;
                            break a
                        }
                } else {
                    x("tracker", "Revenue argument %s not a number.", b);
                    c = k;
                    break a
                }
                H(d) && (c.Q = d)
            }
            if (c === k) x("tracker", "Bad options. Will not track this event.");
            else {
                d = Cb();
                var f = {};
                w(d, function(a) {
                    f[a] =
                        j
                });
                $.extend(c, {
                    T: f
                });
                Jd(a, "custom", c)
            }
        }

        function Jd(a, b, c) {
            c = c || {};
            qa && (Ue.push({
                name: a,
                type: b,
                ea: +new Date / 1E3,
                options: c
            }), Ve ? (We(), M("Tracker", "Tracking event '" + a + "'")) : M("Tracker", "Queued tracking event '" + a + "'"))
        }

        function Xe() {
            Ye();
            $("html").bind("mousedown", Ze);
            $("html").bind("touchstart", $e)
        }

        function Ye() {
            $("html").unbind("touchstart", $e);
            $("html").unbind("mousedown touchend", Ze);
            $("html").unbind("touchmove", Xe)
        }

        function $e() {
            $("html").bind("touchend", Ze);
            $("html").bind("touchmove", Xe)
        }

        function af() {
            var a = document.location.href,
                b = z("pageview_revenue_goals");
            b && 0 < L(b) ? w(L(b), function(c) {
                Jd(a, "pageview", {
                    Q: c,
                    T: b[c]
                })
            }) : Jd(a, "pageview")
        }

        function bf() {
            var a = v("optimizelyPendingLogEvents") || "[]",
                b = [];
            try {
                b = ea(a)
            } catch (c) {}
            if (F(b))
                for (var a = 0, d = b.length; a < d; a++) {
                    var e = b[a];
                    if ("string" !== typeof e) {
                        b = [];
                        break
                    } else try {
                        ea(e);
                        b = [];
                        break
                    } catch (f) {}
                } else b = [];
            return b
        }

        function cf(a) {
            a = I(a.split("&"), function(a) {
                return a.split("=")
            });
            a.sort(function(a, c) {
                return a[0] < c[0] ? -1 : a[0] > c[0] ? 1 : 0
            });
            return I(a, function(a) {
                return a.join("=")
            }).join("&")
        }

        function bd(a, b) {
            if (df && -1 !== a.indexOf(ef)) try {
                var c = new XMLHttpRequest;
                if ("withCredentials" in c) {
                    c.onload = b;
                    c.open("GET", a, j);
                    c.withCredentials = j;
                    c.send();
                    return
                }
                df = o;
                M("Tracker", "Found that XHR with credentials is not supported in this browser.")
            } catch (d) {
                M("Tracker", "XHR not supported"), df = o
            }
            var c = a,
                e = new Image;
            e.onload = b;
            c = c.replace("&" + ef, "");
            e.src = c;
            ff.push(e)
        }

        function je(a, b) {
            a = !H(a) || "true" === String(a);
            H(b) || (b = window.alert);
            var c = a ? "true" : "false";
            a ? (y("optimizelyOptOut", c, Ua), y("optimizelyBuckets", c, Ua), b("You have successfully opted out of Optimizely for this domain.")) : (y("optimizelyOptOut", c, Ua), b("You are NOT opted out of Optimizely for this domain."))
        }

        function hf() {
            return "true" === v("optimizelyOptOut")
        }

        function Ze() {
            Ye();
            Jd("engagement", "engagement")
        }
        var Ue = [],
            Ve = o;

        function We() {
            var a = ["a=" + Rb(), "d=" + tb(), "y=" + !!z("ip_anonymization"), "src=js"];
            Ra && a.push("override=true");
            w(od(), function(b) {
                var c = P(b);
                a.push("x" + c + "=" + b)
            });
            w(Je(), function(b, c) {
                c = encodeURIComponent(ja(c));
                a.push("s" + b + "=" + c)
            });
            a.push("tsent=" + +new Date / 1E3);
            var b = [],
                c = Va(),
                d = Wa();
            w(Ue, function(a) {
                var e = [],
                    f = [];
                a.name && (e.push("n=" + encodeURIComponent(a.name)), f = f.concat(Gb(a.name)));
                if (a.type && "pageview" === a.type) {
                    var f = f.concat(nd.concat(S)),
                        g = pd;
                    g && (g = P(g), f.push(g))
                }
                a.options.anonymous !== j &&
                    (e.push("u=" + c), d && e.push("p=" + encodeURIComponent(d)));
                df && e.push(ef);
                a.ea && e.push("time=" + a.ea);
                La && e.push("dtpc=" + La);
                var l = !!a.options && !!a.options.Q && a.options.T || {},
                    g = L(l),
                    ze = K(Cb(), function(a) {
                        return !l[a]
                    }),
                    f = [{
                        U: g,
                        sa: f.concat([z("summary_revenue_goal_id") || k]),
                        ga: ["v=" + encodeURIComponent(a.options.Q)]
                    }, {
                        U: ze,
                        sa: f,
                        ga: []
                    }];
                w(f, function(a) {
                    (a.U.length || Ga) && b.push(e.concat(a.ga).concat(["f=" + a.U.join(","), "g=" + a.sa.join(",")]).join("&"))
                });
                if ("custom" === a.type) try {
                    var m = a.name,
                        n = Va(),
                        q = N.get("customEvents") || {},
                        r = q[n] || (q[n] = []),
                        r = F(r) ? r : []; - 1 !== $.inArray(m, r) && r.splice($.inArray(m, r), 1);
                    r.push(m);
                    100 < r.length && r.shift();
                    q[n] = r;
                    N.set("customEvents", q);
                    ya("optimizelyCustomEvents", za())
                } catch (gf) {}
            });
            var e = b.concat(bf());
            jf(e);
            var f = a.join("&"),
                e = kf ? b : e;
            kf = j;
            for (var g = 0, l = e.length; g < l; g++) {
                var m = e[g],
                    n = f + "&" + m;
                M("Tracker", "Making a log request.");
                var n = n + ("&cx2=" + gc(cf(n), 65259)),
                    r = Rb(),
                    q = z("log_host");
                r && (q = r.toString() + "." + q);
                bd("https://" + q + "/event?" + n, function() {
                    for (var a = m, b = bf(), c = 0, d = b.length; c <
                        d; c++)
                        if (b[c] === a) {
                            b.splice(c, 1);
                            break
                        }
                    jf(b);
                    M("Tracker", "Removed a pending log event from the pending events cookie.")
                })
            }
            Ue = [];
            Ve = j
        }

        function jf(a) {
            for (var b = u(a); 1536 < b.length;) a = a.slice(0, -1), b = u(a);
            y("optimizelyPendingLogEvents", b, 15)
        }
        var ff = [],
            kf = o,
            ef = "wxhr=true",
            df = j;
        var Y = {
            e: "n",
            b: "t",
            g: "y",
            l: "c",
            m: "r",
            o: "s",
            f: "o"
        };

        function lf(a, b, c, d, e) {
            this[Y.e] = a;
            this[Y.g] = b;
            "string" === typeof c && 0 < eb(c).length && (this[Y.l] = eb(c));
            d && 0 < L(d).length && (this[Y.f] = d);
            H(e) && (this[Y.m] = e)
        }
        lf.prototype.hash = function() {
            if (this.v) return this.v;
            var a;
            a = [];
            a.push(encodeURIComponent(Y.e) + "=" + encodeURIComponent(this[Y.e]));
            a.push(encodeURIComponent(Y.g) + "=" + encodeURIComponent(this[Y.g]));
            this[Y.l] && a.push(encodeURIComponent(Y.l) + "=" + encodeURIComponent(this[Y.l]));
            this[Y.m] && a.push(encodeURIComponent(Y.m) + "=" + encodeURIComponent(this[Y.m]));
            if (this[Y.f])
                for (var b = this[Y.f] || {}, c = K(L(b), function(a) {
                        return b.hasOwnProperty(a)
                    }), c = c.sort(), d = 0; d < c.length; d++) a.push(encodeURIComponent(c[d]) + "=" +
                    encodeURIComponent(b[c[d]]));
            a = a.join("&");
            var e = String.fromCharCode;
            a = a.replace(/[\S\s]/gi, function(a) {
                var a = a.charCodeAt(0),
                    b = e(a & 255);
                255 < a && (b = e(a >>> 8 & 255) + b);
                65535 < a && (b = e(a >>> 16) + b);
                return b
            });
            return this.v = gc(a, 2716770798)
        };

        function mf(a, b) {
            if (a.hash() !== b.hash() || a[Y.e] !== b[Y.e] || a[Y.g] !== b[Y.g] || a[Y.l] !== b[Y.l] || a[Y.m] !== b[Y.m]) return o;
            if (!a[Y.f] && !b[Y.f]) return j;
            var c = a[Y.f] || {},
                d = b[Y.f] || {},
                e = K(L(c), function(a) {
                    return c.hasOwnProperty(a)
                }),
                f = K(L(d), function(a) {
                    return d.hasOwnProperty(a)
                });
            if (e.length !== f.length) return o;
            for (f = 0; f < e.length; f++) {
                var g = e[f];
                if (!d.hasOwnProperty(g) || c[g] !== d[g]) return o
            }
            return j
        }
        lf.prototype.k = function(a, b) {
            var c = $a(this, a);
            return H(c) ? c : b
        };
        lf.prototype.R = function(a, b) {
            if (a === Y.e || a === Y.g || a === Y.l || a === Y.m || a === Y.f) this[a] = b, this.v = k, this.hash()
        };

        function nf(a, b, c) {
            this.G = a;
            this[Y.b] = b;
            H(c) && (this[Y.o] = c)
        }
        nf.prototype.k = function(a, b) {
            if (0 === a.length) return this;
            var c = {};
            c[Y.b] = this[Y.b];
            c[Y.o] = this[Y.o];
            c = $a(c, a);
            return H(c) ? c : this.G.k(a, b)
        };
        nf.prototype.R = function(a, b) {
            a === Y.b || a === Y.o ? this[a] = b : this.G.R(a, b)
        };
        var of = {}, pf = [];

        function qf(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = rf(d);
                b[c] = new nf(e, d[Y.b])
            }
            return b
        }

        function rf(a, b) {
            var c = new lf(a[Y.e], a[Y.g], a[Y.l], a[Y.f], a[Y.m]);
            H(b) && (c.v = b);
            return c
        }

        function sf(a) {
            for (var b = [], c = 0; c < a.length; c++)
                for (var d = a[c], e = rf(d.eb, d.h), f = d.tb, d = d.ts, g = 0; g < d.length; g++) {
                    var l = d[g];
                    b[l.i] = new nf(e, f + l.d)
                }
            return b
        };

        function tf() {
            try {
                var a;
                if (z("is_behavior_enabled")) {
                    if (0 === pf.length && z("is_behavior_enabled")) {
                        var b = pc("events") || [],
                            c = pc("event_queue") || [];
                        if (0 === b.length && 0 === c.length) pf = [];
                        else {
                            "eb" in (b[0] || c[0]) ? (b = sf(b), c = sf(c)) : (b = qf(b), c = qf(c));
                            pf = b.concat(c);
                            1E3 < pf.length && (pf = pf.slice(-1E3));
                            c = pf;
                            for (b = 0; b < c.length; b++) {
                                var d = c[b],
                                    e;
                                b: {
                                    var f = c[b].G,
                                        g = f.hash(),
                                        l = of [g];
                                    if ("undefined" === typeof l) of [g] = [f];
                                    else {
                                        for (var m = 0; m < l.length; m++)
                                            if (mf(f, l[m])) {
                                                e = l[m];
                                                break b
                                            }
                                        l.push(f)
                                    }
                                    e = f
                                }
                                d.G = e
                            }
                        }
                        var d = pf,
                            n = d.length;
                        if (0 !== n) {
                            d[0].R(Y.o, d[0].k([Y.b]));
                            for (e = 1; e < n; e++) {
                                var r = d[e - 1],
                                    q = d[e];
                                q.R(Y.o, 18E5 > Math.abs(r.k([Y.b], 0) - q.k([Y.b], 0)) ? r.k([Y.o]) : q.k([Y.b]))
                            }
                        }
                    }
                    a = pf.slice(-1E3)
                } else a = [];
                return a
            } catch (G) {
                x("Behavior", "Error " + G.toString() + " getting events")
            }
            return []
        };

        function uf() {
            return (new Date).getTime() - (vf || 0)
        }
        var vf = uf();

        function wf(a, b, c) {
            for (var a = a.slice(), d = a.length - 1; 0 < d; d--) {
                var e = Math.floor(Math.random() * (d + 1)),
                    f = a[d];
                a[d] = a[e];
                a[e] = f
            }
            for (d = a.join(b); d.length > c;) a.pop(), d = a.join(b);
            return d
        }

        function T(a) {
            var b = Ae;
            b.n[a] || (b.n[a] = uf())
        }
        var xf;
        try {
            xf = !document.getElementsByTagName("body")[0]
        } catch (yf) {
            xf = k
        }
        var zf = k;
        try {
            window.requestAnimationFrame(function() {
                zf = uf()
            })
        } catch (Af) {}
        var Bf = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi,
            Ae = new function() {
                this.n = {};
                this.S = {};
                this.Za = Math.random() < dc();
                geolocation.cdn3Requested && (this.n.geoRequest = geolocation.cdn3Requested - vf)
            };

        function Gd(a, b) {
            var b = b === j,
                c, d = k;
            w(V, function(b) {
                a == b.H && (d = b.id)
            });
            if ((c = d) && 0 < c.length) return M("Distributor", "Not distributing experiment " + a + " (already in plan)"), j;
            if (b || a in pe) return M("Distributor", "Not distributing experiment " + a + " (is ignored)"), o;
            c = O(a, "enabled_variation_ids") || [];
            if (0 === c.length) return M("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), Cf(a), o;
            var e = O(a, "ignore") || 0,
                f = Df();
            if (e > Math.floor(1E4 * ((ec(f + a, 0) >>> 0) / fc))) return M("Distributor",
                "Permanently ignoring experiment " + a + "(" + e / 100 + "% likelihood)"), Cf(a), o;
            e = c;
            se[a] !== i && (M("Distributor", "Taking into account bucketUser variations for experiment " + a), e = te(a));
            var f = e,
                g = [],
                l = O(a, "variation_weights") || {};
            w(f, function(a) {
                g.push(l[a])
            });
            f = Ef(a, g);
            e = e[f];
            M("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
            ue(e, "distributor");
            return j
        }

        function Ff(a, b) {
            b = b || {};
            M("Distributor", "Configuring conditionally-activated experiment: " + a);
            Te[a] ? M("Distributor", "Not configuring conditionally-activated experiment (already done): " + a) : !Fb(a) && b.force !== j ? M("Distributor", "Not configuring conditionally-activated experiment (not enabled): " + a) : (Gf(a, b), fe && Bd())
        }

        function Gf(a, b) {
            function c() {
                td(U, a, b);
                m.isActive = E(nd.concat(S), a);
                M("Distributor", "Activating conditionally activated experiment " + a)
            }
            var d = O(a, "conditional_code"),
                e = j,
                f, g;
            if ("function" === typeof d) e = o, f = d;
            else try {
                g = eval("(function() {return " + ("(" + d + ")") + ";})()"), "function" === typeof g && (e = o, f = g)
            } catch (l) {}
            var m = {
                isActive: o,
                experimentId: a
            };
            if (e) {
                if (e = {
                        objectType: "experiment",
                        enabledStatus: b.enabledStatus
                    }, b.force || !Cd(a) || Dd(a, e)) {
                    var n = function() {
                        Cd(a) && (Hf(0, {
                            value: d
                        }) || g) ? c() : setTimeout(n, 50)
                    };
                    n();
                    M("Distributor", "Set up conditional polling for " + a);
                    Te[a] = j
                }
            } else try {
                f(c, m), M("Distributor", "Set up conditional callback for " + a), Te[a] = j
            } catch (r) {
                M("Distributor", "Error running conditional callback function for " + a)
            }
        }

        function Df() {
            return Wa() || Va()
        }

        function Ef(a, b) {
            var c = b.length;
            if (0 === c) return k;
            if (1 === c) return 0;
            for (var d = 0, e = 0; e < c; e++) d += b[e];
            e = Df();
            d *= (ec(e + a, 1) >>> 0) / fc;
            for (e = 0; e < c; e++) {
                if (d < b[e]) return e;
                d -= b[e]
            }
            d = Df();
            return Math.floor((ec(d + a, 2) >>> 0) / fc * c)
        }

        function te(a) {
            var b = [];
            w(O(a, "enabled_variation_ids") || [], function(c) {
                var d = j,
                    e;
                for (e in se[a]) - 1 === c.indexOf(se[a][e]) && (d = o);
                d && b.push(c)
            });
            return b
        }
        var se = {};

        function If() {
            for (var a = z("dcp_keyfield_locators") || [], b = k, c = [], d = 0; d < a.length; d++) {
                var e = a[d],
                    f = e.dcp_datasource_id || k,
                    g = e.is_optimizely || o,
                    l = e.type,
                    e = e.name || "";
                if (f === k) M("DCP", "No DCP datasource id specified");
                else {
                    var m = k;
                    l === Jf ? m = Z.I(e) : l === Kf ? m = Z.la(e) : l === Lf ? m = Z.j(e) : l === Mf && (m = Nf());
                    if (bb(m) || "string" === typeof m) f = {
                        datasourceId: f,
                        id: m
                    }, g ? b = f : c.push(f)
                }
            }
            return {
                q: b,
                z: c
            }
        }
        var Nf = Df;

        function Of() {
            var a = If(),
                b = Pc.get() || {};
            if (Pf(a.z, b.aliases || {})) return o;
            b.rulesResults = k;
            Pc.set(b);
            return j
        }

        function Pf(a, b) {
            b = b || {};
            return Xa(a, function(a) {
                return b[a.datasourceId] === a.id
            })
        }
        var Jf = "cookie",
            Kf = "js_variable",
            Lf = "query_param",
            Mf = "uid";

        function Nc(a) {
            if (!Mc(a)) return M("Async Request", "Can't determine a value for this list-targeted key: " + a), k;
            var b = a.split("_"),
                c = b[0],
                b = b.slice(1).join("_"),
                d = i;
            if ("c" === c) d = Z.I(b);
            else if ("j" === c) d = Z.la(b);
            else if ("q" === c) d = Z.j(b);
            else return M("Async Request", "Can't determine a value for this list-targeted key: " + a), k;
            if ("string" === typeof d || "number" === typeof d || "boolean" === typeof d) d = d.toString();
            else return d === k || "undefined" === typeof d ? M("Async Request", "No value is set for this list-targeted key: " +
                a) : M("Async Request", "Unacceptable value (must be string, number, or boolean) for this list-targeted key: " + a), k;
            if (100 < d.length) return M("Async Request", "Withholding the overlong value for this list-targeted key: " + a), k;
            M("Async Request", "Returning a value for this list-targeted key: " + a);
            return d
        }

        function Mc(a) {
            return -1 !== a.indexOf("_") ? E(["c", "j", "q"], a.split("_")[0]) : o
        };

        function Qf(a) {
            if (0 === $("body").length) setTimeout(function() {
                Qf(a)
            }, 20);
            else {
                var b;
                b = '<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>";
                $("#optimizely-loading").remove();
                $("body").append(b)
            }
        }
        var Rf = z("preview_host");

        function Ke() {
            var a = window.location.search || "";
            0 === a.indexOf("?") && (a = a.substring(1));
            for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
                var d = "",
                    e = "",
                    f = a[c].split("=");
                0 < f.length && (d = f[0]);
                1 < f.length && (e = f[1]);
                b.push([d, e])
            }
            return b
        }

        function Sf() {
            for (var a = window.location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);) d[b[1]] = b[2];
            return d
        }
        var Tf = /x(\d+)/;

        function Uf(a) {
            return a && -1 !== String(a).indexOf("[native code]")
        };

        function Vf(a) {
            var b = a || Wf;
            M("Segmenter", "Loading segments cookie.");
            if (a = v("optimizelySegments")) {
                try {
                    a = ea(a)
                } catch (c) {
                    a = {}
                }
                w(a, function(a, c) {
                    var d = Ib()[a];
                    M("Segmenter", "Segments cookie contains segment id: " + a);
                    d && d.audience_id ? b.D(d.audience_id) : d && d.dimension_id ? b.B(d.dimension_id, c, o) : Xf[a] = c
                })
            }
            zd(L(Ib()));
            Yf.push(Zf);
            Fe();
            M("Integrator", "Loading third-party segments.");
            if (window.bk_results) {
                a = window.bk_results;
                M("Integrator", "Loading BlueKai segments.");
                try {
                    w(a.campaigns, function(a) {
                        a = a.seg_id;
                        Ib()[a] ? oe(a, j) : ub(a) && b.D(a)
                    })
                } catch (d) {
                    M("Integrator", "Error loading BlueKai segments.")
                }
            }
        }

        function Zf() {
            var a = {};
            w(Xf, function(b, c) {
                c && (a[b] = c)
            });
            y("optimizelySegments", u(a), Ua)
        }

        function oe(a, b) {
            a && !isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = j), Xf[a] = b, Fe()) : M("Segmenter", "Unable to find segment for ID: " + a)
        }

        function Fe() {
            w(Yf, function(a) {
                a()
            })
        }

        function Md(a) {
            M("Segmenter", "Evaluating Segment " + a);
            var b = $f(a);
            b !== k && oe(a, b)
        }

        function $f(a) {
            if (cc(a, "is_api_only")) return k;
            var b = k,
                c = k;
            switch (cc(a, "segment_value_type") || "") {
                case "browser":
                    b = Z.ia();
                    c = "unknown";
                    break;
                case "campaign":
                    b = Z.La();
                    c = "none";
                    break;
                case "country":
                    b = Z.L().country;
                    c = "unknown";
                    break;
                case "language":
                    b = Z.V();
                    c = "none";
                    break;
                case "mobile":
                    b = Z.w();
                    break;
                case "os":
                    b = Z.pa().id;
                    c = "unknown";
                    break;
                case "referrer":
                    b = Z.Sa();
                    c = "none";
                    break;
                case "source_type":
                    b = Z.Ua();
                    c = "direct";
                    break;
                default:
                    return "true"
            }
            if (b === k) {
                if (Xf.hasOwnProperty(a)) return k;
                b = c
            }
            return ag(b)
        }

        function bg() {
            var a = Z.X();
            if (Z.j("utm_source") || Z.j("utm_campaign") || Z.j("gclid") || Z.j("otm_source")) return "campaign";
            for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www\\.)?google\\..*?/$", "http(s)?://www\\.bing\\.\\w{2,3}(\\.\\w{2,3})?/", "r\\.search\\.yahoo\\.\\w{2,3}(\\.\\w{2,3})?/", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    if (a.match(d)) return "search"
                } catch (e) {
                    x("Segmenter", "%s: %s while matching %s", e.name, e.message, d)
                }
            }
            return a && nc(a) !== nc(Z.J()) ?
                "referral" : k
        }

        function cg() {
            var a = [];
            w(Xf, function(b, c) {
                c && a.push(b)
            });
            return a
        }

        function Je() {
            var a = {};
            w(Xf, function(b, c) {
                c && (a[String(b)] = c)
            });
            return a
        }

        function dg(a) {
            return w(Xf, function(b, c) {
                if ((cc(b, "segment_value_type") || "") == a) return c
            })
        }

        function De(a, b) {
            var c = Hb(a) || a;
            Xf[c] ? (Xf[c] = o, ("undefined" === typeof b || b) && Fe()) : M("Segmenter", "Not removing " + a + ", not found")
        }

        function ag(a, b) {
            var c, b = H(b) ? b : j;
            c = c || eg;
            a = ja(a);
            a = String(a);
            b && (a = a.toLowerCase());
            a = a.substring(0, c);
            return encodeURIComponent(a)
        }
        var Yf = [],
            Xf = {},
            eg = 20;

        function fg() {}
        J(fg.prototype, {
            ia: kc,
            Ja: lc,
            Ra: rc,
            w: sc,
            u: function() {
                return {
                    id: this.ia(),
                    version: this.Ja(),
                    mobileId: this.Ra()
                }
            },
            La: function() {
                return this.j("utm_campaign")
            },
            I: v,
            K: mc,
            W: Hc,
            la: function(a) {
                try {
                    return window[a]
                } catch (b) {
                    return k
                }
            },
            Ia: tf,
            V: function() {
                var a = "";
                try {
                    a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()
                } catch (b) {
                    a = ""
                }
                return a
            },
            Na: function() {
                return (pc("visitor_profile") || {}).defaultBehavior || {}
            },
            L: Oc,
            J: function() {
                return wc || window.location.href
            },
            na: tc,
            Qa: function() {
                return !uc ? j :
                    !!ib.get("first_session")
            },
            Ha: Ke,
            pa: oc,
            X: function() {
                return v("optimizelyReferrer") || document.referrer || ""
            },
            Va: function(a) {
                var a = a.split("."),
                    b = a[0];
                a: {
                    for (var a = a.slice(1), b = (N.get(sd) || {})[b], c = 0, d = a.length; c < d; c++)
                        if (ba(b) && b.hasOwnProperty(a[c])) b = b[a[c]];
                        else {
                            a = i;
                            break a
                        }
                    a = b
                }
                return a
            },
            Xa: function() {
                return Wa() !== k
            },
            Sa: function() {
                return nc(this.X())
            },
            qa: cg,
            Ua: bg,
            Oa: function() {
                return document.referrer
            },
            j: function(a) {
                a: {
                    for (var b = this.Ha(), b = b || Ke(), c = 0; c < b.length; c++) {
                        var d = b[c];
                        if (d[0] === a) {
                            a =
                                d[1];
                            a = a.replace(/\+/g, " ");
                            a = ja(a);
                            break a
                        }
                    }
                    a = k
                }
                return a
            },
            Ma: function() {
                return ge
            },
            ja: function(a) {
                return (this.Ma() || {})[a]
            },
            Wa: function() {
                var a = (N.get("customEvents") || {})[Va()] || [];
                return F(a) ? a : []
            },
            Ya: function(a) {
                var b = this.qa();
                return E(b, a)
            },
            Aa: function(a) {
                return E(this.Wa(), a)
            },
            getDate: function() {
                return new Date
            },
            ma: Lc,
            ka: Qc
        });
        var Z = new fg;

        function gg(a, b, c) {
            if (a.k) return a.k(b, c);
            a = $a(a, b);
            "undefined" === typeof a && (a = c);
            return a
        }

        function hg(a) {
            return "string" === typeof a ? eb(a).toLowerCase() : a
        }
        var ig = ["*"],
            kg = {
                eq: function(a) {
                    a = I(a, hg);
                    return a[0] == a[1]
                },
                is: function(a) {
                    return a[0] === a[1]
                },
                gt: function(a) {
                    return a[0] > a[1]
                },
                lt: function(a) {
                    return a[0] < a[1]
                },
                gte: function(a) {
                    return a[0] >= a[1]
                },
                lte: function(a) {
                    return a[0] <= a[1]
                },
                "in": function(a) {
                    var b = I(a[1] || [], hg);
                    return E(b, hg(a[0]))
                },
                between: function(a) {
                    return a[1] <= a[0] && a[0] <= a[2]
                },
                contains: function(a) {
                    a = I(a, function(a) {
                        return "string" === typeof a ? a.toLowerCase() : a
                    });
                    return -1 !== (a[0] || "").indexOf(a[1])
                },
                regex: function(a) {
                    try {
                        var b, c;
                        "string" ===
                        typeof a[1] ? (b = a[1], c = "i") : (b = a[1][0] || "", c = a[1][1] || "");
                        return RegExp(b, c).test(a[0])
                    } catch (d) {
                        return x("Rules", 'In operator "regex", error: ' + (d.message || "invalid RegExp /" + [b, c].join("/"))), o
                    }
                },
                exists: function(a) {
                    return "undefined" !== typeof a[0]
                },
                and: function(a) {
                    return Xa(a, aa())
                },
                or: function(a) {
                    return D(a, aa())
                },
                not: function(a) {
                    return !a[0]
                }
            },
            lg = {
                "+": function(a) {
                    return (a[0] || 0) + (a[1] || 0)
                },
                "-": function(a) {
                    return (a[0] || 0) - (a[1] || 0)
                },
                "/": function(a) {
                    return (a[0] || 0) / (a[1] || 1)
                },
                "%": function(a) {
                    return (a[0] ||
                        0) % (a[1] || 1)
                }
            },
            mg = {
                sum: function(a, b) {
                    for (var c = a[0] || ig, d = 0, e = 0; e < b.length; e++) d += gg(b[e], c, 0);
                    return d
                },
                avg: function(a, b) {
                    if (0 == b.length) return 0;
                    for (var c = a[0] || ig, d = 0, e = 0; e < b.length; e++) d += gg(b[e], c, 0);
                    return d / b.length
                },
                max: function(a, b) {
                    for (var c = a[0] || ig, d = Number.NEGATIVE_INFINITY, e = 0; e < b.length; e++) d = Math.max(d, gg(b[e], c, Number.NEGATIVE_INFINITY));
                    return d
                },
                min: function(a, b) {
                    for (var c = a[0] || ig, d = Number.POSITIVE_INFINITY, e = 0; e < b.length; e++) d = Math.min(d, gg(b[e], c, Number.POSITIVE_INFINITY));
                    return d
                },
                count: function(a, b) {
                    return b.length
                }
            },
            ng = {
                now: function() {
                    return +new Date
                }
            };

        function og(a, b) {
            if (b.hasOwnProperty("value")) return b.value;
            if (b.hasOwnProperty("field")) return gg(a, b.field);
            if (b.hasOwnProperty("eval")) {
                if (!(b.eval in ng)) {
                    x("Rules", "Unknown function: " + b.eval);
                    return
                }
                return ng[b.eval]()
            }
            if (b.op) {
                var c = b.op in kg ? kg[b.op] : b.op in lg ? lg[b.op] : k;
                if (c) {
                    var d = t(og, a),
                        e = I(b.args || [], function(a) {
                            return d(a)
                        });
                    return c(e, a)
                }
                x("Rules", "Unknown operator: " + b.op)
            } else x("Rules", "No operator specified: " + u(b))
        }

        function pg(a) {
            function b(a, e) {
                F(a) && ("and" !== a[0] && ("or" !== a[0] && "not" !== a[0]) && x("Rules", "Unexpected operation " + a[0] + ". Continuing optimistically."), a = {
                    op: a[0],
                    args: a.slice(1)
                });
                if (a.hasOwnProperty("field") || a.hasOwnProperty("value") || a.hasOwnProperty("eval")) return a;
                if (e && a.op in mg) {
                    var f = "_" + a.op + "_" + ((a.args && a.args[0] || {}).field || ig).join(".");
                    f in d || (c.push({
                        op: a.op,
                        args: a.args
                    }), d[f] = j);
                    return {
                        field: [f]
                    }
                }
                for (var f = [], g = a.args || [], q = 0; q < g.length; q++) f[q] = b(g[q], e);
                return {
                    op: a.op,
                    args: f
                }
            }
            var c = [],
                d = {},
                e = {};
            a.hasOwnProperty("where") && (e.where = b(a.where, o));
            a.hasOwnProperty("having") && (e.having = b(a.having, j));
            if (a.hasOwnProperty("aggregate") || 0 < c.length) e.aggregate = (a.aggregate || []).concat(c);
            for (var f = ["groupBy", "orderBy", "select", "limit"], g = 0; g < f.length; g++) a.hasOwnProperty(f[g]) && (e[f[g]] = a[f[g]]);
            a.hasOwnProperty("from") && (e.from = pg(a.from));
            return e
        }

        function qg(a, b) {
            var b = b || 0,
                c = [];
            a.hasOwnProperty("where") ? a.where.op ? a.where.op in kg || c.push("Non-boolean WHERE clause operator") : c.push("Missing WHERE clause operator") : c.push("Missing WHERE clause");
            a.hasOwnProperty("having") && (a.having.op ? a.having.op in kg || c.push("Non-boolean HAVING clause operator") : c.push("Missing HAVING clause operator"));
            a.hasOwnProperty("groupBy") && !a.hasOwnProperty("aggregate") && c.push("No AGGREGATE clause specified with GROUP_BY clause");
            if (a.hasOwnProperty("select")) {
                var d =
                    a.select;
                if (F(d))
                    for (var e = 0; e < d.length; e++) d[e].op && d[e].op in mg && c.push('In SELECT clause, aggregate operator "' + d[e].op + '" specified in selector at index ' + e);
                else c.push("SELECT clause must be an array")
            }
            a.hasOwnProperty("limit") && (d = a.limit, (!bb(d) || 0 >= Number(d) || Number(d) != Math.floor(Number(d))) && c.push("LIMIT must be a positive integer"));
            0 < b && (c = I(c, function(a) {
                return "Sub-rule " + b + ": " + a
            }));
            a.hasOwnProperty("from") && (c = c.concat(qg(a.from, b + 1)));
            return c
        }

        function rg(a, b) {
            var c = b;
            a.hasOwnProperty("from") && (c = rg(a.from, c));
            c = K(c, function(b) {
                return og(b, a.where)
            });
            if (a.hasOwnProperty("aggregate")) {
                var d = a.groupBy;
                if ("undefined" === typeof d || !F(d) || 0 === d.length) {
                    var d = {},
                        e = {};
                    e[ig] = "_";
                    d[ig + "=_"] = {
                        ha: e,
                        n: c
                    };
                    c = d
                } else {
                    for (var d = I(d, function(a) {
                            return a.field
                        }), e = {}, f = 0; f < c.length; f++) {
                        for (var g = c[f], l = [], m = {}, n = 0; n < d.length; n++) {
                            var r = d[n],
                                q = gg(g, r, "_"),
                                r = r.join(".");
                            m[r] = q;
                            l.push(encodeURIComponent(r) + "=" + encodeURIComponent(String(q)))
                        }
                        l = l.join("&");
                        e.hasOwnProperty(l) ||
                            (e[l] = {
                                ha: m,
                                n: []
                            });
                        e[l].n.push(g)
                    }
                    c = e
                }
                var G = a.aggregate,
                    A = {};
                w(c, function(a, b) {
                    A[a] = {};
                    for (var c = 0; c < G.length; c++) {
                        var d = G[c],
                            e = d.op;
                        if (e in mg) {
                            var f = (d.args && d.args[0] || {}).field || ig,
                                d = "_" + e + "_" + f.join("."),
                                e = mg[e]([f], b.n);
                            A[a][d] = e
                        } else x("Rules", "Unknown aggregate operator " + e)
                    }
                });
                var C = [];
                w(c, function(a, b) {
                    var c = J({}, b.ha);
                    J(c, A[a] || {});
                    C.push(c)
                });
                c = C
            }
            a.hasOwnProperty("having") && (c = K(c, function(b) {
                return og(b, a.having)
            }));
            if (a.hasOwnProperty("orderBy")) {
                var pa = a.orderBy;
                F(pa) ? c = 0 == pa.length ?
                    c : c.sort(function(a, b) {
                        for (var c = 0; c < pa.length; c++) {
                            var d = pa[c],
                                e = "ASC" === (d.direction || "ASC") ? 1 : -1,
                                f = d.field,
                                d = gg(a, f, 0),
                                f = gg(b, f, 0);
                            if (d < f) return -e;
                            if (d > f) return e
                        }
                        return 0
                    }) : x("Rules", "groupBy rule must be an array")
            }
            a.hasOwnProperty("limit") && (c = c.slice(0, Number(a.limit)));
            if (a.hasOwnProperty("select")) var Ta = a.select,
                c = I(c, function(a) {
                    return I(Ta, function(b) {
                        return og(a, b)
                    })
                });
            return c
        }

        function sg(a, b) {
            try {
                var c;
                c = pg(a);
                var d = qg(c);
                0 < d.length && h(Error("Rule " + u(c) + " has violations: " + d.join("\n")));
                return 0 < rg(c, b).length
            } catch (e) {
                return x("Rules", "Error " + e.toString() + " while evaluating rule " + u(a)), o
            }
        };

        function tg() {
            this.p = {};
            this.t = {};
            this.A = {};
            this.ya = {}
        }
        tg.prototype.ab = function(a) {
            var b = this.A.hasOwnProperty(a) || this.ya.hasOwnProperty(a);
            if (!this.p.hasOwnProperty(a) || !b) try {
                var c = this.p,
                    d = ub(a);
                d || h(Error("Unable to find audience for id: " + a));
                var e = ug(this, d.conditions);
                M("Visitor", "Checking if in audience " + a + ": " + e);
                c[a] = e
            } catch (f) {
                M("Visitor", "Error: " + f.message)
            }
            return this.p[a]
        };

        function vg(a, b, c, d) {
            d = J({
                O: j,
                xa: j,
                C: j
            }, d);
            if (ub(b)) {
                a.p[b] = c;
                var e = vb(b);
                e ? a.ya[b] = c : d.O ? a.A[b] = c : delete a.A[b];
                e && d.C && a.C(e, c);
                if (!e && d.O && d.xa) {
                    var f = [];
                    w(a.A, p(function(a) {
                        this.p[a] && f.push(a)
                    }, a));
                    f.sort();
                    y("optimizelyAudiences", f.join(","), 31536E4)
                }
            } else M("Visitor", "Unable to find audience " + b)
        }
        tg.prototype.D = function(a) {
            vg(this, a, j)
        };
        tg.prototype.aa = function(a) {
            vg(this, a, o)
        };
        tg.prototype.fb = function() {
            w(this.p, p(function(a) {
                vg(this, a, o, {
                    O: !!this.A.hasOwnProperty(a)
                })
            }, this))
        };

        function wg(a, b, c, d) {
            d = !H(d) || d;
            H(c) && c !== k && String(c) ? (d && (c = ag(String(c), o)), a.t[b] = c) : delete a.t[b];
            return a.t[b]
        }
        tg.prototype.B = function(a, b, c) {
            var d;
            a: {
                for (d in z("dimensions") || {}) {
                    var e = a,
                        f = yb(d, "api_name");
                    if (e === (!f ? k : f)) break a
                }
                d = k
            }
            d = d || a;
            z("dimensions", d) ? "custom_dimension" === zb(d) ? (b = wg(this, d, b, c), a = yb(d, "segment_id"), (a = !a ? k : a) && this.C(a, b), M("Visitor", 'Set dimension "' + d + '" to "' + b + '"')) : M("Visitor", 'Unknown dimension "' + d + '"') : M("Visitor", "Unable to find dimension " + a)
        };
        tg.prototype.C = function(a, b) {
            b ? oe(a, b) : De(a)
        };
        var Wf = new tg;

        function xg(a, b) {
            cb(b) && (b = [b]);
            b = b || ig;
            return ["_" + a + "_" + b.join(".")]
        }

        function yg(a) {
            cb(a) && (a = [a]);
            a = a || ig;
            return [a.join(".")]
        }
        var zg = {
            "<": "lt",
            "<=": "lte",
            ">": "gt",
            ">=": "gte",
            "=": "eq",
            "==": "eq"
        };

        function Ag(a) {
            a = eb((a || "").toString());
            return zg[a] || a
        }

        function Bg(a, b, c) {
            cb(b) && (b = [b]);
            return {
                op: Ag(a),
                args: [{
                    field: b
                }, {
                    value: c
                }]
            }
        }

        function Cg(a) {
            for (var b = [], c = 0; c < a.length; c++) b[c] = {
                field: a[c]
            };
            return b
        }

        function Dg(a, b) {
            cb(b) && (b = [b]);
            b = b || ig;
            return {
                op: a,
                args: [{
                    field: b
                }]
            }
        }
        var Eg = {};
        w(Y, function(a, b) {
            Eg[b] = j
        });

        function Fg(a, b) {
            var c = [];
            cb(a) ? (c = [a], "events" === (b || "events") && !(a in Eg) && (c = [Y.f, a])) : c = a;
            return c
        };

        function Gg(a) {
            var b = a.split(":");
            2 !== b.length && h(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
            return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
        };

        function Dd(a, b) {
            var c = !!b.manualActivation,
                d = b.objectType ? b.objectType : "experiment",
                e = "experiment" === d,
                f = b.enabledStatus,
                g = b.visitor || Wf;
            M("Condition", "Testing " + d + " " + a);
            var f = e && (H(f) ? !!f : Fb(a)),
                l = e && Kb(a),
                m;
            a: switch (d) {
                case "experiment":
                    m = O(a, "conditions");
                    break a;
                case "segment":
                    m = cc(a, "add_condition");
                    break a;
                default:
                    m = []
            }
            if (e && !f) return M("Condition", "Failed for " + d + " " + a + " (paused)"), o;
            if (e && !c && l) return M("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), o;
            if (m) {
                var n = "experiment" ===
                    (d || "experiment"),
                    r = j;
                w(m, function(b) {
                    var c = b.type;
                    if (n && b.only_first_time && Hg(a)) M("Condition", c + " condition passed because it only gets checked when bucketing", j);
                    else {
                        var d = !b.not,
                            b = (0, Ig[c])(b),
                            e = b !== d;
                        M("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
                        if (e) return r = o
                    }
                });
                if (!r) return M("Condition", "Failed for " + d + " " + a + " (condition failed)"), o
            } else {
                a: {
                    c = [];e = [];
                    if ("experiment" === d) c = O(a, "audiences") || [],
                    e =
                    O(a, "urls") || [];
                    else if ("segment" === d)(f = cc(a, "audience_id")) && (c = [f]);
                    else {
                        M("Condition", "Not a valid objectType: " + d);
                        d = o;
                        break a
                    }
                    if (0 < c.length && (M("Condition", "Testing audiences for " + d + " " + a + ": " + c), !D(c, p(g.ab, g)))) {
                        M("Condition", "Failed to match any audiences for " + d + " " + a);
                        d = o;
                        break a
                    }
                    if (0 < e.length) {
                        M("Condition", "Testing URLs for " + d + " " + a);
                        var g = e,
                            q = Z.J(),
                            G = [],
                            A = [];
                        w(g, function(a) {
                            a.negate ? A.push(a) : G.push(a)
                        });
                        g = function(a) {
                            return D(a, function(a) {
                                return Jg(q, a)
                            })
                        };
                        if (g(A) || !(0 === G.length ||
                                g(G))) {
                            M("Condition", "Failed to match any URL for " + d + " " + a);
                            d = o;
                            break a
                        }
                    }
                    d = j
                }
                if (!d) return o
            }
            return j
        }

        function Kg(a, b) {
            if (!b) return 0;
            for (var c = b.toString().split("."), d = a.toString().split("."), e = 0; e < c.length; e++)
                if (H(d[e])) {
                    if (Number(d[e]) < Number(c[e])) return -1;
                    if (Number(d[e]) > Number(c[e])) return 1
                } else return -1;
            return 0
        }

        function Lg(a, b) {
            var c = b.value,
                d = a.id,
                e = a.version,
                f = a.mobileId;
            return f && "unknown" !== f ? (M("Condition", f, j), "mobile" === c || c === f) : 0 === c.indexOf(d) ? 0 === Kg(e, c.substr(d.length)) : o
        }

        function Hf(a, b) {
            var c = b.value;
            if (c === i) return j;
            try {
                return Boolean(Mg(c))
            } catch (d) {
                return o
            }
        }

        function Ng(a, b) {
            return Og(b.value, b.match, a)
        }

        function Pg(a, b) {
            return Og(b.value, b.match, a)
        }

        function Qg(a, b) {
            if (a === k) return o;
            var c = b.value;
            switch (b.match) {
                case "exact":
                    if (a == c && "" != a) return j;
                    break;
                case "prefix":
                    if (0 == a.indexOf(c)) return j;
                    break;
                case "regex":
                    try {
                        var d = RegExp(c)
                    } catch (e) {
                        break
                    }
                    if (d.test(a)) return j;
                    break;
                case "cidr":
                    try {
                        var f;
                        a: {
                            var g = new Rg(c),
                                l = Sg(a);l === k && h(Error("Invalid ip: " + a));
                            for (c = 0; 4 > c; c++)
                                if ((l[c] & g.Y[c]) !== g.Z[c]) {
                                    f = o;
                                    break a
                                }
                            f = j
                        }
                        return f
                    } catch (m) {}
            }
            return o
        }

        function Tg(a, b) {
            var c = b.value;
            return "any" === c || 0 === a.indexOf(c)
        }

        function Ug(a, b) {
            if (a === k) return o;
            var c = b.value.split("|"),
                d = $.trim(c[0]),
                e = $.trim(c[1]),
                f = $.trim(c[2]),
                g = $.trim(c[3]);
            switch (c.length) {
                case 1:
                    if (a.country === d) return j;
                    break;
                case 2:
                    if (a.region === e && a.country === d) return j;
                    break;
                case 3:
                    if (a.city === f && (a.region === e || "" === e) && a.country === d) return j;
                    break;
                case 4:
                    if (a.continent === g) return j
            }
            return o
        }

        function Vg(a, b) {
            return Og(b.value, b.match, a)
        }

        function Wg(a, b) {
            var c = b.value,
                d = b.match;
            M("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", j);
            return Xg(a, c, d)
        }

        function Yg(a) {
            return !!a
        }

        function Zg(a) {
            var b = Z.J();
            return D(a.values, t(Jg, b))
        }

        function Jg(a, b) {
            var c = b.value,
                d = b.match;
            M("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", j);
            return Xg(a, c, d)
        }

        function $g(a, b) {
            switch (b.value) {
                case "new":
                    if ("returning" === a) return o;
                    break;
                case "returning":
                    return "returning" === a
            }
            return j
        }

        function ug(a, b) {
            var c = {
                and: function(b) {
                    return Xa(b, t(ug, a))
                },
                or: function(b) {
                    return D(b, t(ug, a))
                },
                not: function(b) {
                    1 !== b.length && h(Error('"not" argument too long: ' + u(b)));
                    return !ug(a, b[0])
                }
            };
            if (F(b)) {
                if (b[0] in c) return c[b[0]](b.slice(1));
                h(Error("Not an operator"))
            }
            var c = b.dimension_id,
                d = zb(c),
                e = b.value;
            d || h(Error("No dimension type for dimension: " + c));
            var f = ah[d];
            f || h(Error("Unknown dimension type: " + d));
            d = i;
            if (a.t.hasOwnProperty(c)) d = a.t[c];
            else try {
                var g = zb(c) || "",
                    l, m;
                z("dimensions", c) || h(Error("Unable to find dimension for id: " +
                    c));
                "custom_dimension" === g && h(Error("calculateDimensionValue called on custom dimension " + c));
                (l = {
                    browser: p(Z.u, Z),
                    browser_version: p(Z.u, Z),
                    behavior: p(Z.Ia, Z),
                    campaign: t(dg, "campaign"),
                    cookies: p(Z.I, Z),
                    custom_tag: p(Z.ja, Z),
                    default_behavior: p(Z.Na, Z),
                    device: p(Z.K, Z),
                    event: p(Z.Aa, Z),
                    first_session: p(Z.Qa, Z),
                    has_ppid: p(Z.Xa, Z),
                    ip: p(Z.W, Z),
                    language: p(Z.V, Z),
                    list: p(Z.ma, Z),
                    location: p(Z.L, Z),
                    query: p(Z.j, Z),
                    platform: p(Z.pa, Z),
                    referrer: p(Z.X, Z),
                    segment: p(Z.Ya, Z),
                    source_type: t(dg, "source_type"),
                    third_party_dimension: p(Z.Va,
                        Z),
                    time_and_day: p(Z.getDate, Z),
                    url: p(Z.J, Z),
                    visitor: p(Z.na, Z),
                    dynamic_customer_profile: p(Z.ka, Z)
                }[g]) && (m = l(Ab(c)));
                M("Visitor", "Got dimension (" + g + ") value " + c + ": " + u(m));
                d = m
            } catch (n) {
                M("Visitor", "Error: " + n.message)
            }
            return f(d, {
                value: e,
                match: b.match || "exact"
            })
        }

        function Cd(a) {
            var b = j;
            !O(a, "conditions") && !cc(a, "add_condition") ? (b = [cc(a, "audience_id")], b[0] || (b = O(a, "audiences") || []), b = Xa(b, function(a) {
                a = ub(a);
                return !a.conditions ? j : bh(a.conditions)
            })) : (O(a, "uses_geotargeting") || cc(a, "uses_geotargeting")) && (b = ch.ip(k) || ch.location(k));
            b || M("Condition", "Not ready to test (geotargeting): " + a);
            return b
        }

        function bh(a) {
            if (F(a)) return Xa(a.slice(1), bh);
            var b = zb(a.dimension_id) || "";
            return (b = ch[b]) ? b(a) : j
        }
        var Ig = {
                browser: function(a) {
                    var b = Z.u();
                    return D(a.values, function(a) {
                        return Lg(b, {
                            value: a
                        })
                    })
                },
                code: function(a) {
                    return Hf(0, a)
                },
                cookies: function(a) {
                    for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)
                        if (c = b[d], Ng(Z.I(c), {
                                value: a[d] || i
                            })) return j;
                    return o
                },
                custom_tag: function(a) {
                    return D(a.values, function(a) {
                        return Pg(Z.ja(a.key), {
                            value: a.value
                        })
                    })
                },
                event: function(a) {
                    return D(a.values, function(a) {
                        return Z.Aa(a)
                    })
                },
                ip: function(a) {
                    var b = Z.W();
                    return D(a.values, t(Qg, b))
                },
                language: function(a) {
                    var b =
                        Z.V();
                    return D(a.values, function(a) {
                        return Tg(b, {
                            value: a
                        })
                    })
                },
                location: function(a) {
                    var b = Z.L();
                    return D(a.values, function(a) {
                        return Ug(b, {
                            value: a
                        })
                    })
                },
                query: function(a) {
                    return 0 === a.values.length ? j : D(a.values, function(a) {
                        return Vg(Z.j(a.key), {
                            value: a.value
                        })
                    })
                },
                referrer: function(a) {
                    return D(a.values, t(Wg, Z.Oa()))
                },
                segment: function(a) {
                    var b = Z.qa();
                    return D(a.values, function(a) {
                        return Yg(ra(a, b))
                    })
                },
                url: Zg,
                visitor: function(a) {
                    var b = Z.na();
                    return $g(b, a)
                }
            },
            ah = {
                browser: Lg,
                browser_version: function(a, b) {
                    var c =
                        b.value,
                        d = a.id,
                        e = a.version;
                    return 0 === c.indexOf(d) ? 0 === Kg(e, c.substr(d.length)) : o
                },
                behavior: function(a, b) {
                    try {
                        var c = ea(b.value),
                            d;
                        if (H(c.version)) {
                            !c.action && (!c.filters || 0 === c.filters.length) && h(Error('Audience spec must have an "action" field or at least one "filter" ' + u(c)));
                            var e = Bg("gt", Y.b, 0),
                                f = [],
                                g = [];
                            c.action && (g.push(Bg("eq", Y.e, c.action.value)), c.action.type && g.push(Bg("eq", Y.g, c.action.type)));
                            if (c.time)
                                if ("last_days" === c.time.type) g.push({
                                    op: Ag("lte"),
                                    args: [{
                                        op: "-",
                                        args: [{
                                                eval: "now"
                                            },
                                            {
                                                field: [Y.b]
                                            }
                                        ]
                                    }, {
                                        value: 864E5 * c.time.days
                                    }]
                                });
                                else if ("range" === c.time.type) {
                                var l;
                                var m = [c.time.start, c.time.stop];
                                F(m) ? l = {
                                    op: "between",
                                    args: [{
                                        field: [Y.b]
                                    }, {
                                        value: m[0] || +new Date(0)
                                    }, {
                                        value: m[1] || +new Date
                                    }]
                                } : (M("Rule builder", "rangeTimeComparison passed invalid range " + u(m)), l = k);
                                l && g.push(l)
                            } else M("Rule builder", 'Audience spec has bad "time" type', c.time.type);
                            e = {
                                op: "and",
                                args: g
                            };
                            c.count && f.push({
                                where: Bg(c.count.comparator, "0", c.count.value),
                                from: {
                                    select: [{
                                        field: xg("count")
                                    }],
                                    where: e,
                                    aggregate: [Dg("count")]
                                }
                            });
                            c.filters && w(c.filters, function(a) {
                                var b = Fg(a.name, c.source),
                                    d, l;
                                if (a.modifier === "most_frequent") {
                                    d = Dg("count");
                                    l = xg("count")
                                } else if (a.modifier === "most_recent") {
                                    d = Dg("max", Y.b);
                                    l = xg("max", Y.b)
                                }
                                if (d) {
                                    var m = yg(b);
                                    f.push({
                                        where: Bg(a.comparator, "0", a.value),
                                        from: {
                                            select: [{
                                                field: m
                                            }],
                                            where: e,
                                            groupBy: Cg([b]),
                                            aggregate: [d],
                                            orderBy: [{
                                                field: l,
                                                direction: "DESC"
                                            }],
                                            limit: 1
                                        }
                                    })
                                } else g.push(Bg(a.comparator, b, a.value))
                            });
                            if (c.pick) {
                                0 < f.length && h(Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers' +
                                    u(c)));
                                var n;
                                var r = c.pick,
                                    q = c.source;
                                l = {
                                    where: e
                                };
                                r.count && (l.limit = r.count);
                                if ("most_frequent" === r.modifier) {
                                    var G = Fg(r.name, q);
                                    n = J(l, {
                                        select: [{
                                            field: yg(G)
                                        }],
                                        groupBy: Cg([G]),
                                        aggregate: [Dg("count")],
                                        orderBy: [{
                                            field: xg("count"),
                                            direction: "DESC"
                                        }]
                                    })
                                } else n = J(l, {
                                    orderBy: [{
                                        field: [Y.b],
                                        direction: "DESC"
                                    }]
                                });
                                d = [n]
                            } else d = 0 < f.length ? f : [{
                                where: e
                            }]
                        } else d = [c];
                        return Xa(d, function(b) {
                            return sg(b, a)
                        })
                    } catch (A) {}
                    return o
                },
                campaign: function(a, b) {
                    var c = b.value;
                    "string" === typeof c && ("regex" === b.match ? a = ja(a) : c = ag(c));
                    "none" === a && (a = k);
                    return Og(c, b.match, a)
                },
                code: Hf,
                cookies: Ng,
                custom_dimension: function(a, b) {
                    var c = b.value;
                    return !H(c) ? H(a) : c == a
                },
                custom_tag: Pg,
                default_behavior: function(a, b) {
                    try {
                        var a = a || {},
                            c = ea(b.value);
                        return sg(c, [a])
                    } catch (d) {}
                    return o
                },
                device: function(a, b) {
                    var c = b.value;
                    return "unknown" !== a.id ? a.id === c : "tablet" === c ? "tablet" === a.type : "mobile" === c ? a.w && "tablet" !== a.type : "desktop" === c ? !a.w : o
                },
                event: aa(),
                first_session: aa(),
                ip: Qg,
                language: Tg,
                list: function(a, b) {
                    if (a === k || !H(a)) return o;
                    var c = b.value;
                    return !H(c) ? "" === a || a !== o : a.toString() === c
                },
                location: Ug,
                query: Vg,
                platform: function(a, b) {
                    var c = b.value.split("_"),
                        d = c[0],
                        c = c.slice(1);
                    return d === a.id ? 0 === c.length ? j : 1 < c.length ? 0 <= Kg(a.version, c[0]) && 0 >= Kg(a.version, c[1]) : 0 === Kg(a.version, c[0]) : o
                },
                referrer: Wg,
                segment: Yg,
                source_type: function(a, b) {
                    return b.value === a
                },
                time_and_day: function(a, b) {
                    var c, d, e;
                    c = b.value;
                    e = c.split("_");
                    3 !== e.length && h(Error("Invalid time and day string " + c));
                    c = e[0];
                    d = e[1];
                    e = e[2].split(",");
                    c = Gg(c);
                    d = Gg(d);
                    var f = 60 * a.getHours() +
                        a.getMinutes(),
                        g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
                    return f >= c && f <= d && -1 !== $.inArray(g, e)
                },
                third_party_dimension: function(a, b) {
                    return F(a) ? D(a, t(Og, b.value, b.match)) : Og(b.value, b.match, a)
                },
                url: Jg,
                visitor: $g,
                dynamic_customer_profile: function(a, b) {
                    return a === k ? o : !!a[b.value]
                },
                has_ppid: aa()
            },
            ch = {
                ip: function() {
                    T("checkGeo");
                    return Z.W() !== k
                },
                location: function() {
                    T("checkGeo");
                    return Z.L() !== k
                },
                list: function(a) {
                    return Z.ma(Ab(a.dimension_id) || "") !== k
                },
                dynamic_customer_profile: function(a) {
                    var b =
                        Z.ka();
                    return ab(b) && a.value in b
                }
            };

        function Og(a, b, c) {
            var d = H(c) && c !== k,
                e = H(a) && a !== k;
            switch (b || (e ? "exact" : "exists")) {
                case "exists":
                    return d;
                case "exact":
                    return d && String(c) === a;
                case "substring":
                    return d && -1 !== String(c).indexOf(a);
                case "regex":
                    try {
                        return e && d ? Boolean(String(c).match(RegExp(a))) : o
                    } catch (f) {
                        return o
                    }
                case "range":
                    return a = a.split(":"), b = parseFloat(a[1]), c = parseFloat(c), c >= parseFloat(a[0]) && c <= b;
                default:
                    return o
            }
        };
        var dh = [function() {
            var a = jc();
            if ("ie" === a.ba) {
                try {
                    var b = Number(a.ca)
                } catch (c) {
                    return
                }
                7 > b && h(Error("IE is only supported on version 8+ (detected " + b + ")"));
                8 > b && ("windows" === a.platform.id && a.platform.version && E(["xp", "vista"], a.platform.version.toLowerCase())) && h(Error("IE7 is not supported"))
            }
        }, function() {
            return ea(u({
                a: 123
            }))
        }];

        function ue(a, b, c) {
            var d;
            d = o === j;
            var c = c === j,
                e = o,
                f = P(a);
            if (f && (c || !Hg(f))) {
                e = j;
                if (c && Hg(f))
                    for (c = 0; c < V.length; c++) V[c].H === f && V.splice(c, 1);
                V.push({
                    H: f,
                    id: a,
                    source: b
                });
                d && (S = S || [], S.push(f));
                qe[f] = j;
                re();
                M("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, j)
            }
            return e
        }

        function Hg(a) {
            return a in pe || a in qe
        }

        function od(a) {
            var b = [],
                c = !H(a),
                a = a || [];
            w(V, function(d) {
                (c || E(a, d.H)) && b.push(d.id)
            });
            return b
        }

        function Cf(a) {
            var b;
            if (b === j || !Hg(a)) pe[a] = j, re()
        }

        function Id() {
            var a = {};
            w(Qe, function(b, c) {
                a[b] = c
            });
            w(V, function(b) {
                var c = P(b.id);
                a[c] = b.id
            });
            w(pe, function(b) {
                a[b] = "0"
            });
            w(z("blacklisted_experiments") || {}, function(b) {
                b in a && delete a[b]
            });
            y("optimizelyBuckets", u(a), Ua)
        }

        function re() {
            w(eh, function(a) {
                a()
            })
        }

        function fh(a, b, c, d) {
            if (-1 !== a.indexOf("_optimizely_redirect")) b.push({
                code: a,
                type: "code forced (redirect)",
                variationId: d
            });
            else {
                for (var a = a.split("\n"), e = o, f = o, g = [], l = []; 0 < a.length;) {
                    var m = eb(a.shift()),
                        n = 0 < l.length;
                    if (m)
                        if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i))) f = j;
                        else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i))) f = o;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i))) e =
                        j;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i))) e = o;
                    else if (!gh.exec(m) && !e)
                        if (f) g.push(m);
                        else {
                            if (!n) {
                                var r = hh.exec(m),
                                    q = [];
                                r ? (q.push(r[1].replace(/^['"]|['"]$/g, "")), (r = ih.exec(m)) && 4 < r.length && q.push(r[4]), c.push({
                                    code: m,
                                    selector: q,
                                    type: "safe jquery",
                                    waitUntilSelectorReady: j,
                                    variationId: d
                                })) : n = j
                            }
                            n && l.push(m)
                        }
                }
                0 < g.length && b.push({
                    code: g.join("\n"),
                    type: "forced evaluation",
                    variationId: d
                });
                0 < l.length && c.push({
                    code: l.join("\n"),
                    type: "safe non-jquery",
                    waitUntilDocumentReady: j,
                    variationId: d
                })
            }
        }

        function jh(a, b, c) {
            for (var d = {
                    values: []
                }, e = 0, f = a.length; e < f; e++) d.values.push({
                value: a[e],
                match: b[e] || c
            });
            return d
        }
        var eh = [],
            Qe = {},
            pe = {},
            ih = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
            gh = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
            hh = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
            qe = {},
            V = [];

        function kh(a) {
            Xf = {};
            Vf(a)
        };

        function lh(a, b) {
            if (a && b)
                if (mh) M("Evaluator", "Bound event " + b + " to selector " + a), nh(a, b);
                else {
                    var c = {
                        eventName: b,
                        selector: a,
                        type: "event '" + b + "' (click goal)",
                        waitUntilSelectorReady: j
                    };
                    M("Evaluator", "Add step to bind event " + c.eventName + " to selector " + c.selector);
                    oh.push(c)
                }
        }

        function Hd(a, b) {
            if (B) {
                F(a) ? ph(a) : (a = [], ph(b));
                a = a.concat(S);
                S = [];
                for (var c = 0; c < a.length; c++) E(nd, a[c]) || nd.push(a[c]);
                c = a;
                c === i ? c = [] : bb(c) && (c = [c]);
                for (var d = od(c), e = [], f = [], g = [], l = [], m = K(wb(), function(a) {
                        return a.experiments ? o : Zg(a.url_conditions || [])
                    }), n = 0, r = m.length; n < r; n++) {
                    var q = {
                        eventName: m[n].event_name,
                        selector: m[n].selector,
                        type: "event '" + m[n].event_name + "' (click goal)",
                        waitUntilSelectorReady: j
                    };
                    "revenue" in m[n] && (q.revenue = m[n].revenue);
                    e.push(q)
                }
                w(c, function(a) {
                    var b = {},
                        c = O(a, "events") || {};
                    w(c, function(a, c) {
                        b[a] = [c]
                    });
                    var c = K(wb(), function(b) {
                            return "experiments" in b ? a in b.experiments : o
                        }),
                        d = 0;
                    for (; d < c.length; d++) {
                        var m = c[d];
                        b[m.selector] || (b[m.selector] = []);
                        b[m.selector].push({
                            eventName: m.event_name,
                            revenue: m.revenue,
                            experimentIds: m.experiments
                        })
                    }
                    w(b, function(b, c) {
                        w(c, function(c) {
                            e.push({
                                eventName: c.eventName,
                                experimentIds: c.experimentIds,
                                revenue: c.revenue,
                                selector: b,
                                type: "event '" + c.eventName + "' (experiment " + a + ")",
                                waitUntilSelectorReady: j
                            })
                        })
                    });
                    var n = O(a, "css") || "";
                    n && g.push({
                        code: function() {
                            $("body").append("<style>" +
                                n + "</style>")
                        },
                        selector: "body",
                        type: "global css (experiment " + a + ")",
                        waitUntilSelectorReady: j
                    });
                    if (c = O(a, "steps")) {
                        w(c.forced, function(a) {
                            f.push(a)
                        });
                        w(c.safe, function(a) {
                            l.push(a)
                        })
                    } else(c = O(a, "code") || "") && fh(c, f, l)
                });
                w(d, function(a) {
                    var b = z("variations", a, "pages");
                    if (b) w(b, function(a) {
                        if (a.steps && (!a.includes || Zg({
                                values: a.includes
                            })) && (!a.excludes || !Zg({
                                values: a.excludes
                            }))) {
                            f.push.apply(f, a.steps.forced);
                            l.push.apply(l, a.steps.safe)
                        }
                    });
                    else {
                        for (var b = Ub(a), b = b.split("\n"), c = [], d = j, e = 0, g = b.length; e <
                            g; e++) {
                            var m = $.trim(b[e]);
                            if (m === "/* _optimizely_variation_url_end */") d = j;
                            else if (m !== "") {
                                var n = Ea.exec(m);
                                if (n && n.length === 13) {
                                    var q = n[2] ? n[2].split(" ") : [],
                                        m = n[4] ? n[4].split(" ") : [],
                                        r = n[6] ? n[6] : "substring",
                                        gf = n[8] ? n[8].split(" ") : [],
                                        n = n[10] ? n[10].split(" ") : [];
                                    if (q.length > 0) {
                                        d = jh(q, gf, r);
                                        d = Zg(d)
                                    }
                                    if (d && m.length > 0) {
                                        d = jh(m, n, r);
                                        d = !Zg(d)
                                    }
                                } else d && c.push(m)
                            }
                        }
                        b = c.join("\n");
                        fh(b, f, l, a)
                    }
                });
                c = [];
                c.push.apply(c, f);
                c.push.apply(c, g);
                c.push.apply(c, l);
                c.push.apply(c, e);
                oh.push.apply(oh, c);
                qh()
            }
        }

        function qh() {
            var a = o;
            rh = k;
            for (M("Evaluator", sh + " times waited"); !a && 0 < oh.length;) {
                M("Evaluator", oh.length + " steps remaining");
                var b = oh.shift(),
                    c = b,
                    a = o;
                if (c.waitUntilDocumentReady && !mh) M("Evaluator", "Document not ready yet"), a = j;
                else if (c.waitUntilSelectorReady && !mh && (c = c.selector))
                    for (var c = F(c) ? c : [c], d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (!(e === k || e === i || !e.length))
                            if (0 === ("document" == e ? $(document) : $(e)).length) M("Evaluator", "'" + e + "' not found"), a = j
                    }
                a ? oh.unshift(b) : b.eventName ? (th(), M("Evaluator", "Bound event " +
                    b.eventName + " to selector " + b.selector), c = {}, b.revenue && (c = {
                    Q: b.revenue,
                    T: b.experimentIds
                }), nh(b.selector, b.eventName, c)) : b.code && (M("Evaluator", "Run code: " + b.code.toString()), uh(b.code, b.variationId))
            }
            a ? (rh = setTimeout(qh, 0 === sh ? 10 : 50), sh++) : (M("Evaluator", sh + " total times waited"), th())
        }

        function Mg(a) {
            return "string" === typeof a ? eval(a) : a()
        }

        function th() {
            T("flash");
            0 < Ad.length || T("flashGeo")
        }

        function uh(a, b) {
            if (a) {
                var c = o,
                    d;
                "string" === typeof a ? (d = a, c = j) : d = a.toString();
                if (qd(d))
                    if (M("Evaluator", "Redirect detected"), ae(d)) {
                        M("Evaluator", "OK to redirect");
                        var e = $d(d);
                        M("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
                        y("optimizelyRedirect", (b || "unknown variation") + "|" + (e ? "true" : "false"), 5);
                        be()
                    } else {
                        M("Evaluator", "NOT OK to redirect");
                        return
                    }
                c && eval("var $j = $;");
                try {
                    if (qd(d)) {
                        $("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>");
                        M("Evaluator",
                            "Hiding body before redirect");
                        var f = de.test(d) || ce.test(d) || ee.test(d),
                            g = /_keep_body_hidden=(\S+)/.test(d);
                        f || g ? M("Evaluator", "Standard redirect detected - Will not unhide body.") : setTimeout(function() {
                            if (document.body) {
                                document.body.style.visibility = "visible";
                                document.body.style.display = "block";
                                M("Evaluator", "Unhiding body -- did not redirect");
                                T("bodyUnhidden")
                            }
                        }, 1700)
                    }
                    Mg(a)
                } catch (l) {
                    c = Pa, Pa = j, M("Evaluator", "Error: " + l.message), M("Evaluator", "Code: " + d), Pa = c, M("Evaluator", "Failed to run code: " +
                        l.message)
                }
            }
        }

        function nh(a, b, c) {
            c = c || {};
            if (!vh[a] || !vh[a][b]) {
                var d = function() {
                        Jd(b, "custom", c)
                    },
                    e = $(a);
                if (0 < e.length) {
                    var f = function() {
                            e.unbind("touchend", d);
                            e.unbind("touchmove", f);
                            e.unbind("mousedown", d)
                        },
                        g = function() {
                            f();
                            e.bind("touchmove", f);
                            e.bind("touchend", d)
                        };
                    e.bind("mousedown", d);
                    e.bind("touchstart", g)
                } else e = $("html"), f = function() {
                    e.undelegate(a, "touchend", d);
                    e.undelegate(a, "touchmove", f);
                    e.undelegate(a, "mousedown", d)
                }, e.delegate(a, "touchstart", function() {
                    f();
                    e.delegate(a, "touchend", d);
                    e.delegate(a,
                        "touchmove", f)
                }), e.delegate(a, "mousedown", d);
                vh[a] || (vh[a] = {});
                vh[a][b] = "mousedown touchstart"
            }
        }

        function wh(a) {
            xh = a
        }

        function ph(a) {
            a || (a = Eb());
            for (var b = 0; b < a.length; b++) Nb(a[b])
        }
        var vh = {},
            nd = [],
            S = S || [],
            xh = 0,
            mh = o,
            oh = [],
            rh = k,
            sh = 0;
        $(function() {
            setTimeout(function() {
                T("docReady");
                mh = j;
                rh !== k && (M("Evaluator", "Document is ready"), clearTimeout(rh), 0 < xh ? setTimeout(qh, xh) : qh())
            }, 50)
        });

        function Rg(a) {
            this.Da = $.trim(a);
            a = yh(this.Da);
            a === k && h(Error("Invalid CIDR specification"));
            this.Z = a.Z;
            this.Y = a.Y
        }

        function yh(a) {
            a = a.split("/");
            if (2 != a.length) return k;
            var b = parseInt(a[1], 10);
            if (isNaN(b) || 0 > b || 32 < b) return k;
            a = Sg(a[0]);
            if (a === k) return k;
            if (0 > b || 32 < b) b = k;
            else {
                for (var c = [], d = 0; 4 > d; d++) c[d] = 0;
                for (var e = Math.floor(b / 8), d = 0; d < e; d++) c[d] = 255;
                4 > e && (c[e] = zh[b % 8]);
                b = c
            }
            for (c = 0; 4 > c; c++) a[c] &= b[c];
            return {
                Z: a,
                Y: b
            }
        }

        function Sg(a) {
            a = a.split(".");
            if (4 != a.length) return k;
            for (var b = [], c = 0; 4 > c; c++) {
                var d;
                d = a[c];
                if (3 < d.length) d = k;
                else {
                    var e = parseInt(d, 10);
                    d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? k : e
                }
                if (d === k) return k;
                b[c] = d
            }
            return b
        }
        var zh = [0, 128, 192, 224, 240, 248, 252, 254, 255];

        function Xg(a, b, c) {
            var d = a.split("?");
            if (d[1]) {
                var e = [];
                $.each(d[1].split("&"), function() {
                    0 !== this.indexOf(Ah) && e.push(this)
                });
                d[1] = e.join("&");
                a = d.join("?")
            }
            switch (c) {
                case "exact":
                    return a = Bh(a), a === Bh(b);
                case "regex":
                    try {
                        return Boolean(a.match(b))
                    } catch (f) {
                        return o
                    }
                case "simple":
                    return a = Bh(Ch(a)), b = Bh(Ch(b)), a === b;
                case "substring":
                    return a = Bh(a, j), b = Bh(b, j), -1 !== a.indexOf(b);
                default:
                    return o
            }
        }

        function Ch(a) {
            var b = a.indexOf("?"); - 1 !== b && (a = a.substring(0, b));
            b = a.indexOf("#"); - 1 !== b && (a = a.substring(0, b));
            return a
        }

        function Bh(a, b) {
            var a = a.replace("/?", "?"),
                a = a.toLowerCase().replace(/[/&?]+$/, ""),
                c = Dh.slice(0);
            b || (c = c.concat(Eh));
            for (var d = c.length, e = 0; e < d; e++) a = a.replace(RegExp("^" + c[e]), "");
            return a
        }
        var Dh = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"],
            Eh = ["www."],
            Ah = "optimizely_";

        function Fh(a) {
            return function(b) {
                if ("object" === typeof b && Ih()) {
                    var c = k,
                        d;
                    for (d in b) b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
                    return c
                }
                return a.apply(this, arguments)
            }
        }

        function Ih() {
            for (var a in {}) return j;
            return o
        };

        function Jh() {
            if (!Da) {
                var a = $;
                a.fn.attr = Fh(a.fn.attr);
                a.fn.css = Fh(a.fn.css);
                a.fn.extend = Fh(a.fn.extend);
                var b = a.each;
                a.each = function(c, d, e) {
                    if (!(c.length === i || a.isFunction(c)) || !Ih()) b.apply(this, arguments);
                    else if (e)
                        for (var f in c) {
                            if (c.hasOwnProperty(f) && d.apply(c[f], e) === o) break
                        } else
                            for (f in c)
                                if (c.hasOwnProperty(f) && !d.call(c[f], f, c[f]) === o) break;
                    return c
                };
                var c = a.fn.$a,
                    d = function(a, b, d) {
                        return new c(a, b, d)
                    },
                    e, f = document.getElementsByClassName;
                if (!Uf(f)) var f = (window.optimizely || {}).getElementsByClassName,
                    g = (window.optly || {}).getElementsByClassName,
                    f = Uf(f) ? f : Uf(g) ? g : k;
                e = f;
                a.fn.$a = function(b, c, f) {
                    var g = d,
                        l = document.getElementsByClassName;
                    !Uf(l) && e && (g = function(a, b, c) {
                        document.getElementsByClassName = e;
                        a = d(a, b, c);
                        document.getElementsByClassName = l;
                        return a
                    });
                    if (!("string" === typeof b && c && "object" === a.type(c) && Ih())) return g(b, c, f);
                    b = g(b, i, f);
                    b.attr(c);
                    return b
                }
            }
            M("Main", "Started, revision " + z("revision"));
            try {
                var l = [];
                w(dh, function(a) {
                    try {
                        a()
                    } catch (b) {
                        l.push(b.message)
                    }
                });
                0 < l.length && h(Error("Feature(s) not supported: " +
                    l.join("; ")))
            } catch (m) {
                M("Main", "Disabling: " + m.message);
                return
            }
            var f = Sf(),
                g = o,
                n;
            for (n in f)
                if (Tf.exec(n)) {
                    g = j;
                    break
                }("true" === f.opt_out || "false" === f.opt_out) && je("true" === f.opt_out);
            Ga = "true" === f.force_tracking;
            "true" === f.disable || "true" === f.opt_out || hf() ? Ha = B = o : "classic" === f.disable ? B = o : "new" === f.disable && (Ha = o);
            Ia = "true" === f.editor;
            Ja = "true" === f.p13n;
            Oa = "true" === f.show_preview;
            Ka = (n = window.optlyDesktop) && H(n.p13nInner);
            (n = v("optimizelyToken")) && y("optimizelyToken", n, 15);
            n = f.token || n;
            /^[0-9a-f]{64}$/.test(n) ?
                Ma = n : /^[0-9a-f]{32}$/.test(n) ? (M("Query", "Using legacy MD5 token"), Ma = n) : (ya("optimizelyToken", za()), M("Query", "Blocked request to load unsafe script: " + n));
            Pa = "true" === f.log;
            Qa = "true" === f.verbose;
            qa = !(Oa || g) || Ga;
            if (Ia || Ja) window.optimizelyDataApi = {
                getProjectId: Rb
            };
            if (Ka) M("Main", "Disabling because in desktop app editor.");
            else if (Ja) M("Main", "Disabling because personalization editor flag is set."), db("https://" + Zb() + "/js/innie.js?_=" + +new Date);
            else if (he(), hf()) M("Main", "Disabling because opted out"),
                zc();
            else if (Ma) {
                if (!window.optimizelyPreview) {
                    if (!window.optimizely || !window.optimizely.unshift) window.optimizely = [];
                    window.optimizely.unshift(["verifyPreviewProject", Rb()]);
                    db([Rf, "/js/preview/", Ma, ".js"].join(""), j);
                    Oa && Qf('Loading Preview<br /><img alt="loading" src="//' + Zb() + '/static/img/loading-32.gif" style="padding-top:20px; width: 32px; margin: 0 auto;" />')
                }
            } else if (Oa && !Ma) Qf("This preview link has expired. Please return to Optimizely and preview again to get a new link.");
            else {
                if (B || Ha)
                    if (f =
                        z("project_js")) M("Evaluator", "Running project level javascript."), uh(f);
                he();
                if (B) {
                    f = v("optimizelyEndUserId");
                    uc = f !== i && f !== k;
                    a: {
                        f = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot;aihitbot;baiduspider;adsbot-google;mediapartners-google;applebot".split(";");g = navigator.userAgent;g = g.toLowerCase();
                        for (n = 0; n < f.length; n++)
                            if (-1 !== g.indexOf(f[n])) {
                                f = j;
                                break a
                            }
                        f = o
                    }
                    f ? qa = o : uc || ib.set("first_session", j)
                }
                if (f = N.get("asyncInfo")) pc("asyncInfo") ||
                    qc(f), N.set("asyncInfo", k);
                (f = pc("asyncInfo")) && w(f, Fc);
                if (z("uses_list_targeting")) {
                    var f = "https://odds.optimizely.com/js/geo2.js",
                        r = {};
                    w(Qb(), function(a, b) {
                        var c = Nc(b);
                        typeof c === "string" && (r[b] = c)
                    });
                    r.project = Rb().toString();
                    var g = [],
                        q;
                    for (q in r) r.hasOwnProperty(q) && g.push(encodeURIComponent(q) + "=" + encodeURIComponent(r[q]));
                    g.length && (f += "?" + g.join("&"));
                    db(f)
                }
                z("uses_dynamic_customer_profile_targeting") && (Of(), q = If(), !q.q || !q.q.datasourceId ? (M("DCP", "No Optimizely datasource found in data."),
                    q = k) : (f = q.q.datasourceId, g = q.q.id, f = I([Rb().toString(), f, g], encodeURIComponent), f = ["https://vis.optimizely.com/api/targetingEmbed"].concat(f).join("/"), g = (Pc.get() || {}).aliases || {}, Pf(q.z, g) || (q = I(q.z, function(a) {
                    return encodeURIComponent(a.datasourceId) + "=" + encodeURIComponent(a.id)
                }), f += "?" + q.join("&")), q = f), q !== k && db(q));
                (z("dcp_service_id") || k) !== k && setTimeout(function() {
                    var a = z("dcp_service_id") || k;
                    if (a !== k) {
                        var b = If();
                        if (b.q)
                            if (b.z.length === 0) M("DCP", "Must specify at least one non-Optimizely datasource to alias");
                            else if (Of()) {
                            var a = I([a, b.q.datasourceId, b.q.id], encodeURIComponent).join("/"),
                                c = b.z;
                            try {
                                var d = new XMLHttpRequest;
                                d.open("POST", ["https://vis.optimizely.com/api/alias", a].join("/"));
                                if ("withCredentials" in d) d.withCredentials = j;
                                d.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                var e = {};
                                w(c, function(a) {
                                    e[a.datasourceId] = a.id
                                });
                                d.onerror = function() {
                                    M("DCP", "Failed to POST alias request")
                                };
                                d.onload = function() {
                                    if (d.status >= 200 && d.status < 300) {
                                        var a = Pc.get() || {},
                                            b = a.aliases || {},
                                            b = b || {};
                                        w(c, function(a) {
                                            b[a.datasourceId] = a.id
                                        });
                                        a.aliases = b;
                                        Pc.set(a)
                                    } else M("DCP", "Alias POST failed with", d.statusText)
                                };
                                d.send(u({
                                    data: e
                                }))
                            } catch (f) {
                                M("DCP", "Exception %s trying to POST alias request", f)
                            }
                        } else M("DCP", "Duplicate alias request; skipping.");
                        else M("DCP", "Must specify Optimizely datasource in alias")
                    }
                }, 0);
                if (q = v("optimizelyBuckets")) {
                    try {
                        q = ea(q)
                    } catch (G) {
                        q = {}
                    }
                    var A = {};
                    w(q, function(a, b) {
                        var b = String(b),
                            c = P(b);
                        if (Ob(c).length > 1 && b.indexOf("_") === -1) {
                            A[c] = A[c] || {};
                            A[c][a] = b
                        } else b !== "0" ? ue(b,
                            "cookie") || (Qe[a] = b) : Cf(a)
                    });
                    w(A, function(a, b) {
                        var c;
                        a: {
                            c = [];
                            for (var d = Ob(a), e = 0; e < d.length; e++) {
                                var f = b[d[e]];
                                if (f === "0") {
                                    c = "";
                                    break a
                                }
                                c.push(f)
                            }
                            c = c.join("_")
                        }
                        c.length > 0 ? ue(c, "cookie") : Cf(a)
                    })
                }
                Vf();
                pd = (v("optimizelyRedirect") || "|").split("|")[0];
                q = v("optimizelyReferrer");
                q !== k && (Uc = 0 == q.length ? "" : q, y("optimizelyReferrer", ""));
                q = Wf;
                M("Visitor", "Initializing");
                (f = v("optimizelyAudiences")) && 0 < f.length && w(f.split(","), p(function(a) {
                    vg(this, a, j, {
                        O: j,
                        xa: o
                    })
                }, q));
                w(cg(), p(function(a) {
                    M("Visitor", "Found segment " +
                        a);
                    var b = Ib()[a];
                    if (b && b.audience_id) {
                        M("Visitor", "Adding to audience " + b.audience_id);
                        vg(this, b.audience_id, j, {
                            C: o
                        })
                    } else if (b && b.dimension_id) {
                        M("Visitor", "Setting dimension value " + b.dimension_id);
                        wg(this, b.dimension_id, Xf[a], o)
                    }
                }, q));
                U = Wf;
                fe = o;
                Yf.push(Bd);
                eh.push(Bd);
                q = {
                    $: $,
                    activeExperiments: nd || [],
                    allExperiments: Jb(),
                    all_experiments: Jb(),
                    allVariations: z("variations") || {},
                    getElementsByClassName: document.getElementsByClassName,
                    revision: z("revision"),
                    variationIdsMap: Ge,
                    variation_map: He,
                    variationMap: He,
                    variationNamesMap: Ie
                };
                for (var C in q) X(q, C, q[C]);
                q.data = W;
                C = {};
                var pa = Ya(le, [C, Se]);
                J(C, {
                    activate: t(td, U),
                    activateGeoDelayedExperiments: t(wd, U),
                    activateSiteCatalyst: Rc,
                    activateUniversalAnalytics: gd,
                    addOAuthClientId: ye,
                    addToAudience: p(U.D, U),
                    addToSegment: ne,
                    bindTrackElement: lh,
                    bucketUser: ud,
                    bucketVisitor: ud,
                    clickTaleRecord: jd,
                    clickTalePlayback: hd,
                    customTag: Be,
                    delayDomReadyEval: wh,
                    delayPageviewTracking: Le,
                    disable: ie,
                    log: Ac,
                    getAccountId: tb,
                    getProjectId: Rb,
                    googleAnalyticsCustomVariableScope: Xc,
                    integrationPrefix: kd,
                    optOut: je,
                    overrideUrl: vc,
                    push: pa,
                    removeFromAllAudiences: p(U.fb, U),
                    removeFromAllSegments: Ee,
                    removeFromAudience: p(U.aa, U),
                    removeFromSegment: Ce,
                    sc_activate: Rc,
                    sc_svar: ld,
                    skipPageTracking: Ne,
                    optOutThirdPartyCookies: Me,
                    setDimensionValue: p(U.B, U),
                    setUserId: Pe,
                    storeThirdPartyData: me,
                    timeout: ie,
                    trackEvent: Re,
                    verbose: Bc
                });
                z("slave") && J(C, {
                    get: we
                });
                C.removeFromReportableAudiences = Oe;
                J(q, C);
                C = window.optimizely;
                F(C) && w(C, function(a) {
                    pa(a)
                });
                window.optimizely = q;
                T("apiInitialize");
                window.optimizely.iapi = {
                    evaluateSegments: t(kh,
                        i)
                };
                var Ta = !z("force_variation");
                C = Sf();
                w(C, function(a, b) {
                    var c = Tf.exec(a);
                    if (c)
                        if (Ta) {
                            Na = j;
                            x("Query", "Ignored parameter %s", a)
                        } else {
                            c = c[1];
                            ud(c, b, j);
                            Lb(c) ? Ff(c, {
                                force: j,
                                skipPageviewTracking: j
                            }) : Dd(c, {}) || td(U, c, {
                                force: j,
                                skipPageviewTracking: j
                            })
                        }
                });
                Na ? Qf("Force parameters are disabled for this project. See Project Code Settings.") : (Jh.log(), Ia && db("https://" + Zb() + "/js/innie.js?_=" + +new Date), B && (T("distributeExperiments"), w(Eb(), function(a) {
                    if (!ra(a, S))
                        if (Lb(a)) Ff(a);
                        else if (Cd(a)) {
                        if (Dd(a, {
                                objectType: "experiment"
                            })) {
                            M("Distributor",
                                "Going to distribute " + Nb(a));
                            if (Gd(a)) {
                                S = S || [];
                                S.push(a)
                            }
                        }
                    } else !Kb(a) && !E(nd, a) && Ed(a)
                }), Id(), Xe(), Sa || (0 < Fa ? setTimeout(function() {
                    af()
                }, Fa) : af()), We(), Zc()), Pa && (w(pe, function(a) {
                    var b = Mb(a);
                    M("Plan", "Ignore experiment '" + b + "' (" + a + ")")
                }), w(V, function(a) {
                    var b = P(a.id),
                        c = Xb(a.id);
                    M("Plan", Nb(b) + ' in variation "' + c + '" (' + a.id + ")")
                })), Ia ? ve() : B && (T("beginEvaluate"), Hd(), ve(), zc(), !z("installation_verified") && qa && (C = "https://" + Zb() + "/account/snippet_installed?project_id=" + Rb() + "&wxhr=true", M("Tracker",
                    "Making snippet verification request."), bd(C, k))), setTimeout(function() {
                    wd(U)
                }, 2E3), setTimeout(function() {
                    if (qa) {
                        var a = Ae;
                        if (a.Za) {
                            var b = Va(),
                                c = Wa(),
                                d = Rb(),
                                e = z("revision"),
                                f = xf,
                                g = vf,
                                l = zf,
                                m = dc(),
                                n = nd.concat(S).length,
                                q = tf().length,
                                r;
                            r = pc("events") || [];
                            var C = pc("event_queue") || [];
                            r = u(r).length + u(C).length;
                            var A;
                            a: {
                                try {
                                    A = window.optimizely.get("behavior").getEvents()[0].timestamp;
                                    break a
                                } catch (G) {}
                                A = i
                            }
                            var b = {
                                    user: b,
                                    ppid: c,
                                    project: d,
                                    revision: e,
                                    sync: f,
                                    timebase: g,
                                    render: l,
                                    sampleRate: m,
                                    numExps: n,
                                    numBehaviorEvents: q,
                                    behaviorEventsSize: r,
                                    oldestBehaviorEventAge: !A ? 0 : (new Date).getTime() - A.getTime(),
                                    integrationOAuthClientIds: wf(xe, ",", 64),
                                    codeVersion: z("version"),
                                    hasSlave: !!z("slave"),
                                    docVisibilityState: document.Bb || document.webkitVisibilityState,
                                    wxhr: j,
                                    apis: wf(L(a.S), "!", 1E3)
                                },
                                sa;
                            a: {
                                c = k;
                                try {
                                    sa = K(window.performance.getEntries(), function(a) {
                                        return !!Bf.test(a.name)
                                    })[0]
                                } catch (pa) {
                                    sa = c;
                                    break a
                                }
                                if (sa) {
                                    var c = {},
                                        Bb;
                                    for (Bb in sa) typeof sa[Bb] === "number" && sa[Bb] !== 0 && (c[Bb] = sa[Bb])
                                }
                                sa = c
                            }
                            J(b, sa || {});
                            J(b, a.n);
                            var Ta = ["optimizelyAudiences",
                                    "optimizelyBuckets", "optimizelyCustomEvents", "optimizelyPendingLogEvents", "optimizelyReferrer", "optimizelySegments"
                                ],
                                Od = {},
                                Pd = 0,
                                Qd = 0;
                            w(ia(), function(a) {
                                if (a.name.indexOf("optimizely") === 0) {
                                    if (E(Ta, a.name)) {
                                        M("RUM", "Cookie size for " + a.name + ": " + a.P.length);
                                        Od[a.name + "Len"] = a.P.length
                                    }
                                    Pd = Pd + a.P.length
                                }
                                Qd = Qd + a.P.length
                            });
                            J(Od, {
                                allOptimizelyCookiesLen: Pd,
                                allCookiesLen: Qd
                            });
                            J(b, Od || {});
                            var jg = {};
                            w(N.va() || {}, function(a, b) {
                                jg["ls" + a] = b
                            });
                            J(b, jg);
                            var a = [],
                                Ec;
                            for (Ec in b) Object.prototype.hasOwnProperty.call(b,
                                Ec) && a.push(window.encodeURIComponent(Ec) + "=" + window.encodeURIComponent(b[Ec]));
                            bd("https://rum.optimizely.com/rum?" + a.join("&"), k)
                        }
                    }
                }, 3E3), M("Main", "End of main"), T("mainEnd"))
            }
        }
        Jh.log = function() {
            M("Info", "Is Classic Optimizely enabled: " + B);
            M("Info", "Diagnostic enabled: false");
            M("Info", "Force variation enabled: " + !!z("force_variation"));
            M("Info", "Browser type: " + kc());
            M("Info", "Browser version: " + lc());
            var a = rc();
            "unknown" !== a && M("Info", "Mobile browser type: " + a);
            M("Info", "New vs returning: " + tc());
            M("Info", "Source type: " + bg());
            M("Info", "User ID: " + Va())
        };
        Jh();
    };
    var SLAVE_CLIENT = {
        optimizely: []
    };
    optimizelyCode();
    optly.Cleanse.finish();

}());
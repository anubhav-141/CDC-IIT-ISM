/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - KEN BURN
 * @version: 1.3.1 (15.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";
    var b = jQuery.fn.revolution,
        c = {
            alias: "KenBurns Min JS",
            name: "revolution.extensions.kenburn.min.js",
            min_core: "5.4",
            version: "1.3.1"
        };
    jQuery.extend(!0, b, {
        stopKenBurn: function(a) {
            if ("stop" === b.compare_version(c).check) return !1;
            void 0 != a.data("kbtl") && a.data("kbtl").pause()
        },
        startKenBurn: function(a, d, e) {
            if ("stop" === b.compare_version(c).check) return !1;
            var f = a.data(),
                g = a.find(".defaultimg"),
                h = g.data("lazyload") || g.data("src"),
                j = (f.owidth, f.oheight, "carousel" === d.sliderType ? d.carousel.slide_width : d.ul.width()),
                k = d.ul.height();
            if (a.data("kbtl") && a.data("kbtl").kill(), e = e || 0, 0 == a.find(".tp-kbimg").length) {
                var m = g.data("mediafilter");
                m = void 0 === m ? "" : m, a.append('<div class="tp-kbimg-wrap ' + m + '" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + h + '" style="position:absolute;" width="' + f.owidth + '" height="' + f.oheight + '"></div>'), a.data("kenburn", a.find(".tp-kbimg"))
            }
            var n = function(a, b, c, d, e, f, g) {
                    var h = a * c,
                        i = b * c,
                        j = Math.abs(d - h),
                        k = Math.abs(e - i),
                        l = new Object;
                    return l.l = (0 - f) * j, l.r = l.l + h, l.t = (0 - g) * k, l.b = l.t + i, l.h = f, l.v = g, l
                },
                o = function(a, b, c, d, e) {
                    var f = a.bgposition.split(" ") || "center center",
                        g = "center" == f[0] ? "50%" : "left" == f[0] || "left" == f[1] ? "0%" : "right" == f[0] || "right" == f[1] ? "100%" : f[0],
                        h = "center" == f[1] ? "50%" : "top" == f[0] || "top" == f[1] ? "0%" : "bottom" == f[0] || "bottom" == f[1] ? "100%" : f[1];
                    g = parseInt(g, 0) / 100 || 0, h = parseInt(h, 0) / 100 || 0;
                    var i = new Object;
                    return i.start = n(e.start.width, e.start.height, e.start.scale, b, c, g, h), i.end = n(e.start.width, e.start.height, e.end.scale, b, c, g, h), i
                },
                p = function(a, b, c) {
                    var d = c.scalestart / 100,
                        e = c.scaleend / 100,
                        f = void 0 != c.offsetstart ? c.offsetstart.split(" ") || [0, 0] : [0, 0],
                        g = void 0 != c.offsetend ? c.offsetend.split(" ") || [0, 0] : [0, 0];
                    c.bgposition = "center center" == c.bgposition ? "50% 50%" : c.bgposition;
                    var h = new Object,
                        i = a * d,
                        k = (c.owidth, c.oheight, a * e);
                    c.owidth, c.oheight;
                    if (h.start = new Object, h.starto = new Object, h.end = new Object, h.endo = new Object, h.start.width = a, h.start.height = h.start.width / c.owidth * c.oheight, h.start.height < b) {
                        var m = b / h.start.height;
                        h.start.height = b, h.start.width = h.start.width * m
                    }
                    h.start.transformOrigin = c.bgposition, h.start.scale = d, h.end.scale = e, c.rotatestart = 0 === c.rotatestart ? .01 : c.rotatestart, h.start.rotation = c.rotatestart + "deg", h.end.rotation = c.rotateend + "deg";
                    var n = o(c, a, b, f, h);
                    f[0] = parseFloat(f[0]) + n.start.l, g[0] = parseFloat(g[0]) + n.end.l, f[1] = parseFloat(f[1]) + n.start.t, g[1] = parseFloat(g[1]) + n.end.t;
                    var p = n.start.r - n.start.l,
                        q = n.start.b - n.start.t,
                        r = n.end.r - n.end.l,
                        s = n.end.b - n.end.t;
                    return f[0] = f[0] > 0 ? 0 : p + f[0] < a ? a - p : f[0], g[0] = g[0] > 0 ? 0 : r + g[0] < a ? a - r : g[0], f[1] = f[1] > 0 ? 0 : q + f[1] < b ? b - q : f[1], g[1] = g[1] > 0 ? 0 : s + g[1] < b ? b - s : g[1], h.starto.x = f[0] + "px", h.starto.y = f[1] + "px", h.endo.x = g[0] + "px", h.endo.y = g[1] + "px", h.end.ease = h.endo.ease = c.ease, h.end.force3D = h.endo.force3D = !0, h
                };
            void 0 != a.data("kbtl") && (a.data("kbtl").kill(), a.removeData("kbtl"));
            var q = a.data("kenburn"),
                r = q.parent(),
                s = p(j, k, f),
                t = new punchgs.TimelineLite;
            if (t.pause(), s.start.transformOrigin = "0% 0%", s.starto.transformOrigin = "0% 0%", t.add(punchgs.TweenLite.fromTo(q, f.duration / 1e3, s.start, s.end), 0), t.add(punchgs.TweenLite.fromTo(r, f.duration / 1e3, s.starto, s.endo), 0), void 0 !== f.blurstart && void 0 !== f.blurend && (0 !== f.blurstart || 0 !== f.blurend)) {
                var u = {
                        a: f.blurstart
                    },
                    v = {
                        a: f.blurend,
                        ease: s.endo.ease
                    },
                    w = new punchgs.TweenLite(u, f.duration / 1e3, v);
                w.eventCallback("onUpdate", function(a) {
                    punchgs.TweenLite.set(a, {
                        filter: "blur(" + u.a + "px)",
                        webkitFilter: "blur(" + u.a + "px)"
                    })
                }, [r]), t.add(w, 0)
            }
            t.progress(e), t.play(), a.data("kbtl", t)
        }
    })
}(jQuery);
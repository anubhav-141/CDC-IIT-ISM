/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - PARALLAX
 * @version: 2.2.3 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";

    function e(a, b) {
        a.lastscrolltop = b
    }
    var b = jQuery.fn.revolution,
        c = b.is_mobile(),
        d = {
            alias: "Parallax Min JS",
            name: "revolution.extensions.parallax.min.js",
            min_core: "5.4.5",
            version: "2.2.3"
        };
    jQuery.extend(!0, b, {
        checkForParallax: function(a, e) {
            function g(a) {
                if ("3D" == f.type || "3d" == f.type) {
                    a.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), a.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + f.ddd_layer_overflow + ';"></div>'), a.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
                    var b = a.find(".dddwrapper"),
                        c = a.find(".dddwrapper-layer");
                    a.find(".dddwrapper-layertobggroup").appendTo(b), "carousel" == e.sliderType && ("on" == f.ddd_shadow && b.addClass("dddwrappershadow"), punchgs.TweenLite.set(b, {
                        borderRadius: e.carousel.border_radius
                    })), punchgs.TweenLite.set(a, {
                        overflow: "visible",
                        transformStyle: "preserve-3d",
                        perspective: 1600
                    }), punchgs.TweenLite.set(b, {
                        force3D: "auto",
                        transformOrigin: "50% 50%"
                    }), punchgs.TweenLite.set(c, {
                        force3D: "auto",
                        transformOrigin: "50% 50%",
                        zIndex: 5
                    }), punchgs.TweenLite.set(e.ul, {
                        transformStyle: "preserve-3d",
                        transformPerspective: 1600
                    })
                }
            }
            if ("stop" === b.compare_version(d).check) return !1;
            var f = e.parallax;
            if (!f.done) {
                if (f.done = !0, c && "on" == f.disable_onmobile) return !1;
                "3D" != f.type && "3d" != f.type || (punchgs.TweenLite.set(e.c, {
                    overflow: f.ddd_overflow
                }), punchgs.TweenLite.set(e.ul, {
                    overflow: f.ddd_overflow
                }), "carousel" != e.sliderType && "on" == f.ddd_shadow && (e.c.prepend('<div class="dddwrappershadow"></div>'), punchgs.TweenLite.set(e.c.find(".dddwrappershadow"), {
                    force3D: "auto",
                    transformPerspective: 1600,
                    transformOrigin: "50% 50%",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0
                }))), e.li.each(function() {
                    g(jQuery(this))
                }), ("3D" == f.type || "3d" == f.type) && e.c.find(".tp-static-layers").length > 0 && (punchgs.TweenLite.set(e.c.find(".tp-static-layers"), {
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), g(e.c.find(".tp-static-layers"))), f.pcontainers = new Array, f.pcontainer_depths = new Array, f.bgcontainers = new Array, f.bgcontainer_depths = new Array, e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function() {
                    var a = jQuery(this),
                        b = a.data("bgparallax") || e.parallax.bgparallax;
                    void 0 !== (b = "on" == b ? 1 : b) && "off" !== b && (f.bgcontainers.push(a), f.bgcontainer_depths.push(e.parallax.levels[parseInt(b, 0) - 1] / 100))
                });
                for (var h = 1; h <= f.levels.length; h++) e.c.find(".rs-parallaxlevel-" + h).each(function() {
                    var a = jQuery(this),
                        b = a.closest(".tp-parallax-wrap");
                    b.data("parallaxlevel", f.levels[h - 1]), b.addClass("tp-parallax-container"), f.pcontainers.push(b), f.pcontainer_depths.push(f.levels[h - 1])
                });
                "mouse" != f.type && "scroll+mouse" != f.type && "mouse+scroll" != f.type && "3D" != f.type && "3d" != f.type || (a.mouseenter(function(b) {
                    var c = a.find(".active-revslide"),
                        d = a.offset().top,
                        e = a.offset().left,
                        f = b.pageX - e,
                        g = b.pageY - d;
                    c.data("enterx", f), c.data("entery", g)
                }), a.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(b, c) {
                    var d = c && c.li ? c.li : a.find(".active-revslide");
                    if ("enterpoint" == f.origo) {
                        var g = a.offset().top,
                            h = a.offset().left;
                        void 0 == d.data("enterx") && d.data("enterx", b.pageX - h), void 0 == d.data("entery") && d.data("entery", b.pageY - g);
                        var i = d.data("enterx") || b.pageX - h,
                            j = d.data("entery") || b.pageY - g,
                            k = i - (b.pageX - h),
                            l = j - (b.pageY - g),
                            m = f.speed / 1e3 || .4
                    } else var g = a.offset().top,
                        h = a.offset().left,
                        k = e.conw / 2 - (b.pageX - h),
                        l = e.conh / 2 - (b.pageY - g),
                        m = f.speed / 1e3 || 3;
                    "mouseleave" == b.type && (k = f.ddd_lasth || 0, l = f.ddd_lastv || 0, m = 1.5);
                    for (var n = 0; n < f.pcontainers.length; n++) {
                        var o = f.pcontainers[n],
                            p = f.pcontainer_depths[n],
                            q = "3D" == f.type || "3d" == f.type ? p / 200 : p / 100,
                            r = k * q,
                            s = l * q;
                        "scroll+mouse" == f.type || "mouse+scroll" == f.type ? punchgs.TweenLite.to(o, m, {
                            force3D: "auto",
                            x: r,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        }) : punchgs.TweenLite.to(o, m, {
                            force3D: "auto",
                            x: r,
                            y: s,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        })
                    }
                    if ("3D" == f.type || "3d" == f.type) {
                        var t = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
                        "carousel" === e.sliderType && (t = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"), e.c.find(t).each(function() {
                            var a = jQuery(this),
                                c = f.levels[f.levels.length - 1] / 200,
                                d = k * c,
                                g = l * c,
                                h = 0 == e.conw ? 0 : Math.round(k / e.conw * c * 100) || 0,
                                i = 0 == e.conh ? 0 : Math.round(l / e.conh * c * 100) || 0,
                                j = a.closest("li"),
                                n = 0,
                                o = !1;
                            a.hasClass("dddwrapper-layer") && (n = f.ddd_z_correction || 65, o = !0), a.hasClass("dddwrapper-layer") && (d = 0, g = 0), j.hasClass("active-revslide") || "carousel" != e.sliderType ? "on" != f.ddd_bgfreeze || o ? punchgs.TweenLite.to(a, m, {
                                rotationX: i,
                                rotationY: -h,
                                x: d,
                                z: n,
                                y: g,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == b.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }), c && (window.ondeviceorientation = function(b) {
                    var c = Math.round(b.beta || 0) - 70,
                        d = Math.round(b.gamma || 0),
                        g = a.find(".active-revslide");
                    if (jQuery(window).width() > jQuery(window).height()) {
                        var h = d;
                        d = c, c = h
                    }
                    var i = a.width(),
                        j = a.height(),
                        k = 360 / i * d,
                        l = 180 / j * c,
                        m = f.speed / 1e3 || 3,
                        n = [];
                    if (g.find(".tp-parallax-container").each(function(a) {
                            n.push(jQuery(this))
                        }), a.find(".tp-static-layers .tp-parallax-container").each(function() {
                            n.push(jQuery(this))
                        }), jQuery.each(n, function() {
                            var a = jQuery(this),
                                b = parseInt(a.data("parallaxlevel"), 0),
                                c = b / 100,
                                d = k * c * 2,
                                e = l * c * 4;
                            punchgs.TweenLite.to(a, m, {
                                force3D: "auto",
                                x: d,
                                y: e,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        }), "3D" == f.type || "3d" == f.type) {
                        var o = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
                        "carousel" === e.sliderType && (o = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"), e.c.find(o).each(function() {
                            var a = jQuery(this),
                                c = f.levels[f.levels.length - 1] / 200,
                                d = k * c,
                                g = l * c * 3,
                                h = 0 == e.conw ? 0 : Math.round(k / e.conw * c * 500) || 0,
                                i = 0 == e.conh ? 0 : Math.round(l / e.conh * c * 700) || 0,
                                j = a.closest("li"),
                                n = 0,
                                o = !1;
                            a.hasClass("dddwrapper-layer") && (n = f.ddd_z_correction || 65, o = !0), a.hasClass("dddwrapper-layer") && (d = 0, g = 0), j.hasClass("active-revslide") || "carousel" != e.sliderType ? "on" != f.ddd_bgfreeze || o ? punchgs.TweenLite.to(a, m, {
                                rotationX: i,
                                rotationY: -h,
                                x: d,
                                z: n,
                                y: g,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == b.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }));
                var i = e.scrolleffect;
                if (i.bgs = new Array, i.on) {
                    if ("on" === i.on_slidebg)
                        for (var h = 0; h < e.allslotholder.length; h++) i.bgs.push(e.allslotholder[h]);
                    i.multiplicator_layers = parseFloat(i.multiplicator_layers), i.multiplicator = parseFloat(i.multiplicator)
                }
                void 0 !== i.layers && 0 === i.layers.length && (i.layers = !1), void 0 !== i.bgs && 0 === i.bgs.length && (i.bgs = !1), b.scrollTicker(e, a)
            }
        },
        scrollTicker: function(a, d) {
            1 != a.scrollTicker && (a.scrollTicker = !0, c ? (punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function() {
                b.scrollHandling(a)
            }, d, !1, 1)) : document.addEventListener("scroll", function(c) {
                b.scrollHandling(a, !0)
            }, {
                passive: !0
            })), b.scrollHandling(a, !0)
        },
        scrollHandling: function(a, d, f) {
            if (a.lastwindowheight = a.lastwindowheight || window.innerHeight, a.conh = 0 === a.conh || void 0 === a.conh ? a.infullscreenmode ? a.minHeight : a.c.height() : a.conh, a.lastscrolltop == window.scrollY && !a.duringslidechange && !d) return !1;
            punchgs.TweenLite.delayedCall(.2, e, [a, window.scrollY]);
            var g = a.c[0].getBoundingClientRect(),
                h = a.viewPort,
                i = a.parallax,
                j = g.top < 0 || g.height > a.lastwindowheight ? g.top / g.height : g.bottom > a.lastwindowheight ? (g.bottom - a.lastwindowheight) / g.height : 0;
            if (a.scrollproc = j, b.callBackHandling && b.callBackHandling(a, "parallax", "start"), h.enable) {
                var k = 1 - Math.abs(j);
                k = k < 0 ? 0 : k, jQuery.isNumeric(h.visible_area) || -1 !== h.visible_area.indexOf("%") && (h.visible_area = parseInt(h.visible_area) / 100), 1 - h.visible_area <= k ? a.inviewport || (a.inviewport = !0, b.enterInViewPort(a)) : a.inviewport && (a.inviewport = !1, b.leaveViewPort(a))
            }
            if (c && "on" == i.disable_onmobile) return !1;
            if ("3d" != i.type && "3D" != i.type) {
                if (("scroll" == i.type || "scroll+mouse" == i.type || "mouse+scroll" == i.type) && i.pcontainers)
                    for (var l = 0; l < i.pcontainers.length; l++)
                        if (i.pcontainers[l].length > 0) {
                            var m = i.pcontainers[l],
                                n = i.pcontainer_depths[l] / 100,
                                o = Math.round(j * (-n * a.conh) * 10) / 10 || 0,
                                p = void 0 !== f ? f : i.speedls / 1e3 || 0;
                            m.data("parallaxoffset", o), punchgs.TweenLite.to(m, p, {
                                overwrite: "auto",
                                force3D: "auto",
                                y: o
                            })
                        }
                if (i.bgcontainers)
                    for (var l = 0; l < i.bgcontainers.length; l++) {
                        var q = i.bgcontainers[l],
                            r = i.bgcontainer_depths[l],
                            o = j * (-r * a.conh) || 0,
                            p = void 0 !== f ? f : i.speedbg / 1e3 || 0;
                        punchgs.TweenLite.to(q, p, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: o + "px"
                        })
                    }
            }
            var s = a.scrolleffect;
            if (s.on && ("on" !== s.disable_on_mobile || !c)) {
                var t = Math.abs(j) - s.tilt / 100;
                if (t = t < 0 ? 0 : t, !1 !== s.layers) {
                    var u = 1 - t * s.multiplicator_layers,
                        v = {
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            z: .001,
                            perspective: 600
                        };
                    if ("top" == s.direction && j >= 0 && (u = 1), "bottom" == s.direction && j <= 0 && (u = 1), u = u > 1 ? 1 : u < 0 ? 0 : u, "on" === s.fade && (v.opacity = u), "on" === s.scale) {
                        var w = u;
                        v.scale = 1 - w + 1
                    }
                    if ("on" === s.blur) {
                        var x = (1 - u) * s.maxblur;
                        v["-webkit-filter"] = "blur(" + x + "px)", v.filter = "blur(" + x + "px)"
                    }
                    if ("on" === s.grayscale) {
                        var y = 100 * (1 - u),
                            z = "grayscale(" + y + "%)";
                        v["-webkit-filter"] = void 0 === v["-webkit-filter"] ? z : v["-webkit-filter"] + " " + z, v.filter = void 0 === v.filter ? z : v.filter + " " + z
                    }
                    punchgs.TweenLite.set(s.layers, v)
                }
                if (!1 !== s.bgs) {
                    var u = 1 - t * s.multiplicator,
                        v = {
                            backfaceVisibility: "hidden",
                            force3D: "true"
                        };
                    if ("top" == s.direction && j >= 0 && (u = 1), "bottom" == s.direction && j <= 0 && (u = 1), u = u > 1 ? 1 : u < 0 ? 0 : u, "on" === s.fade && (v.opacity = u), "on" === s.scale) {
                        var w = u;
                        punchgs.TweenLite.set(jQuery(".tp-kbimg-wrap"), {
                            transformOrigin: "50% 50%",
                            scale: w,
                            force3D: !0
                        })
                    }
                    if ("on" === s.blur) {
                        var x = (1 - u) * s.maxblur;
                        v["-webkit-filter"] = "blur(" + x + "px)", v.filter = "blur(" + x + "px)"
                    }
                    if ("on" === s.grayscale) {
                        var y = 100 * (1 - u),
                            z = "grayscale(" + y + "%)";
                        v["-webkit-filter"] = void 0 === v["-webkit-filter"] ? z : v["-webkit-filter"] + " " + z, v.filter = void 0 === v.filter ? z : v.filter + " " + z
                    }
                    punchgs.TweenLite.set(s.bgs, v)
                }
            }
            b.callBackHandling && b.callBackHandling(a, "parallax", "end")
        }
    })
}(jQuery);
/********************************************
 * REVOLUTION 5.4 EXTENSION - CAROUSEL
 * @version: 1.2.1 (18.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";
    var b = jQuery.fn.revolution,
        c = {
            alias: "Carousel Min JS",
            name: "revolution.extensions.carousel.min.js",
            min_core: "5.3.0",
            version: "1.2.1"
        };
    jQuery.extend(!0, b, {
        prepareCarousel: function(a, d, h, i) {
            return "stop" !== b.compare_version(c).check && (h = a.carousel.lastdirection = f(h, a.carousel.lastdirection), e(a), a.carousel.slide_offset_target = j(a), void(void 0 !== i ? g(a, h, !1, 0) : void 0 == d ? b.carouselToEvalPosition(a, h) : g(a, h, !1)))
        },
        carouselToEvalPosition: function(a, c) {
            var d = a.carousel;
            c = d.lastdirection = f(c, d.lastdirection);
            var e = "center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_globaloffset) / d.slide_width : (0 - d.slide_globaloffset) / d.slide_width,
                h = b.simp(e, a.slideamount, !1),
                i = h - Math.floor(h),
                j = 0,
                k = -1 * (Math.ceil(h) - h),
                l = -1 * (Math.floor(h) - h);
            j = i >= .3 && "left" === c || i >= .7 && "right" === c ? k : i < .3 && "left" === c || i < .7 && "right" === c ? l : j, j = "off" === d.infinity ? h < 0 ? h : e > a.slideamount - 1 ? e - (a.slideamount - 1) : j : j, d.slide_offset_target = j * d.slide_width, 0 !== Math.abs(d.slide_offset_target) ? g(a, c, !0) : b.organiseCarousel(a, c)
        },
        organiseCarousel: function(a, b, c, d) {
            b = void 0 === b || "down" == b || "up" == b || null === b || jQuery.isEmptyObject(b) ? "left" : b;
            for (var e = a.carousel, f = new Array, g = e.slides.length, i = ("right" === e.horizontal_align ? a.width : 0, 0); i < g; i++) {
                var j = i * e.slide_width + e.slide_offset;
                "on" === e.infinity && (j = j > e.wrapwidth - e.inneroffset && "right" == b ? e.slide_offset - (e.slides.length - i) * e.slide_width : j, j = j < 0 - e.inneroffset - e.slide_width && "left" == b ? j + e.maxwidth : j), f[i] = j
            }
            var k = 999;
            e.slides && jQuery.each(e.slides, function(d, h) {
                var i = f[d];
                "on" === e.infinity && (i = i > e.wrapwidth - e.inneroffset && "left" === b ? f[0] - (g - d) * e.slide_width : i, i = i < 0 - e.inneroffset - e.slide_width ? "left" == b ? i + e.maxwidth : "right" === b ? f[g - 1] + (d + 1) * e.slide_width : i : i);
                var j = new Object;
                j.left = i + e.inneroffset;
                var l = "center" === e.horizontal_align ? (Math.abs(e.wrapwidth / 2) - (j.left + e.slide_width / 2)) / e.slide_width : (e.inneroffset - j.left) / e.slide_width,
                    n = "center" === e.horizontal_align ? 2 : 1;
                if ((c && Math.abs(l) < k || 0 === l) && (k = Math.abs(l), e.focused = d), j.width = e.slide_width, j.x = 0, j.transformPerspective = 1200, j.transformOrigin = "50% " + e.vertical_align, "on" === e.fadeout)
                    if ("on" === e.vary_fade) j.autoAlpha = 1 - Math.abs(1 / Math.ceil(e.maxVisibleItems / n) * l);
                    else switch (e.horizontal_align) {
                        case "center":
                            j.autoAlpha = Math.abs(l) < Math.ceil(e.maxVisibleItems / n - 1) ? 1 : 1 - (Math.abs(l) - Math.floor(Math.abs(l)));
                            break;
                        case "left":
                            j.autoAlpha = l < 1 && l > 0 ? 1 - l : Math.abs(l) > e.maxVisibleItems - 1 ? 1 - (Math.abs(l) - (e.maxVisibleItems - 1)) : 1;
                            break;
                        case "right":
                            j.autoAlpha = l > -1 && l < 0 ? 1 - Math.abs(l) : l > e.maxVisibleItems - 1 ? 1 - (Math.abs(l) - (e.maxVisibleItems - 1)) : 1
                    } else j.autoAlpha = Math.abs(l) < Math.ceil(e.maxVisibleItems / n) ? 1 : 0;
                if (void 0 !== e.minScale && e.minScale > 0)
                    if ("on" === e.vary_scale) {
                        j.scale = 1 - Math.abs(e.minScale / 100 / Math.ceil(e.maxVisibleItems / n) * l);
                        var o = (e.slide_width - e.slide_width * j.scale) * Math.abs(l)
                    } else {
                        j.scale = l >= 1 || l <= -1 ? 1 - e.minScale / 100 : (100 - e.minScale * Math.abs(l)) / 100;
                        var o = (e.slide_width - e.slide_width * (1 - e.minScale / 100)) * Math.abs(l)
                    }
                void 0 !== e.maxRotation && 0 != Math.abs(e.maxRotation) && ("on" === e.vary_rotation ? (j.rotationY = Math.abs(e.maxRotation) - Math.abs((1 - Math.abs(1 / Math.ceil(e.maxVisibleItems / n) * l)) * e.maxRotation), j.autoAlpha = Math.abs(j.rotationY) > 90 ? 0 : j.autoAlpha) : j.rotationY = l >= 1 || l <= -1 ? e.maxRotation : Math.abs(l) * e.maxRotation, j.rotationY = l < 0 ? j.rotationY * -1 : j.rotationY), j.x = -1 * e.space * l, j.left = Math.floor(j.left), j.x = Math.floor(j.x), void 0 !== j.scale ? l < 0 ? j.x - o : j.x + o : j.x, j.zIndex = Math.round(100 - Math.abs(5 * l)), j.transformStyle = "3D" != a.parallax.type && "3d" != a.parallax.type ? "flat" : "preserve-3d", punchgs.TweenLite.set(h, j)
            }), d && (a.c.find(".next-revslide").removeClass("next-revslide"), jQuery(e.slides[e.focused]).addClass("next-revslide"), a.c.trigger("revolution.nextslide.waiting"));
            e.wrapwidth / 2 - e.slide_offset, e.maxwidth + e.slide_offset - e.wrapwidth / 2
        }
    });
    var d = function(a) {
            var b = a.carousel;
            b.infbackup = b.infinity, b.maxVisiblebackup = b.maxVisibleItems, b.slide_globaloffset = "none", b.slide_offset = 0, b.wrap = a.c.find(".tp-carousel-wrapper"), b.slides = a.c.find(".tp-revslider-slidesli"), 0 !== b.maxRotation && ("3D" != a.parallax.type && "3d" != a.parallax.type ? punchgs.TweenLite.set(b.wrap, {
                perspective: 1200,
                transformStyle: "flat"
            }) : punchgs.TweenLite.set(b.wrap, {
                perspective: 1600,
                transformStyle: "preserve-3d"
            })), void 0 !== b.border_radius && parseInt(b.border_radius, 0) > 0 && punchgs.TweenLite.set(a.c.find(".tp-revslider-slidesli"), {
                borderRadius: b.border_radius
            })
        },
        e = function(a) {
            void 0 === a.bw && b.setSize(a);
            var c = a.carousel,
                e = b.getHorizontalOffset(a.c, "left"),
                f = b.getHorizontalOffset(a.c, "right");
            void 0 === c.wrap && d(a), c.slide_width = "on" !== c.stretch ? a.gridwidth[a.curWinRange] * a.bw : a.c.width(), c.maxwidth = a.slideamount * c.slide_width, c.maxVisiblebackup > c.slides.length + 1 && (c.maxVisibleItems = c.slides.length + 2), c.wrapwidth = c.maxVisibleItems * c.slide_width + (c.maxVisibleItems - 1) * c.space, c.wrapwidth = "auto" != a.sliderLayout ? c.wrapwidth > a.c.closest(".tp-simpleresponsive").width() ? a.c.closest(".tp-simpleresponsive").width() : c.wrapwidth : c.wrapwidth > a.ul.width() ? a.ul.width() : c.wrapwidth, c.infinity = c.wrapwidth >= c.maxwidth ? "off" : c.infbackup, c.wrapoffset = "center" === c.horizontal_align ? (a.c.width() - f - e - c.wrapwidth) / 2 : 0, c.wrapoffset = "auto" != a.sliderLayout && a.outernav ? 0 : c.wrapoffset < e ? e : c.wrapoffset;
            var g = "hidden";
            "3D" != a.parallax.type && "3d" != a.parallax.type || (g = "visible"), "right" === c.horizontal_align ? punchgs.TweenLite.set(c.wrap, {
                left: "auto",
                right: c.wrapoffset + "px",
                width: c.wrapwidth,
                overflow: g
            }) : punchgs.TweenLite.set(c.wrap, {
                right: "auto",
                left: c.wrapoffset + "px",
                width: c.wrapwidth,
                overflow: g
            }), c.inneroffset = "right" === c.horizontal_align ? c.wrapwidth - c.slide_width : 0, c.realoffset = Math.abs(c.wrap.position().left), c.windhalf = jQuery(window).width() / 2
        },
        f = function(a, b) {
            return null === a || jQuery.isEmptyObject(a) ? b : void 0 === a ? "right" : a
        },
        g = function(a, c, d, e) {
            var g = a.carousel;
            c = g.lastdirection = f(c, g.lastdirection);
            var h = new Object,
                i = d ? punchgs.Power2.easeOut : g.easing;
            h.from = 0, h.to = g.slide_offset_target, e = void 0 === e ? g.speed / 1e3 : e, e = d ? .4 : e, void 0 !== g.positionanim && g.positionanim.pause(), g.positionanim = punchgs.TweenLite.to(h, e, {
                from: h.to,
                onUpdate: function() {
                    g.slide_offset = g.slide_globaloffset + h.from, g.slide_offset = b.simp(g.slide_offset, g.maxwidth), b.organiseCarousel(a, c, !1, !1)
                },
                onComplete: function() {
                    g.slide_globaloffset = "off" === g.infinity ? g.slide_globaloffset + g.slide_offset_target : b.simp(g.slide_globaloffset + g.slide_offset_target, g.maxwidth), g.slide_offset = b.simp(g.slide_offset, g.maxwidth), b.organiseCarousel(a, c, !1, !0);
                    var e = jQuery(a.li[g.focused]);
                    a.c.find(".next-revslide").removeClass("next-revslide"), d && b.callingNewSlide(a.c, e.data("index"))
                },
                ease: i
            })
        },
        h = function(a, b) {
            return Math.abs(a) > Math.abs(b) ? a > 0 ? a - Math.abs(Math.floor(a / b) * b) : a + Math.abs(Math.floor(a / b) * b) : a
        },
        i = function(a, b, c) {
            var c, c, d = b - a,
                e = b - c - a;
            return d = h(d, c), e = h(e, c), Math.abs(d) > Math.abs(e) ? e : d
        },
        j = function(a) {
            var c = 0,
                d = a.carousel;
            if (void 0 !== d.positionanim && d.positionanim.kill(), "none" == d.slide_globaloffset) d.slide_globaloffset = c = "center" === d.horizontal_align ? d.wrapwidth / 2 - d.slide_width / 2 : 0;
            else {
                d.slide_globaloffset = d.slide_offset, d.slide_offset = 0;
                var e = a.c.find(".processing-revslide").index(),
                    f = "center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_globaloffset) / d.slide_width : (0 - d.slide_globaloffset) / d.slide_width;
                f = b.simp(f, a.slideamount, !1), e = e >= 0 ? e : a.c.find(".active-revslide").index(), e = e >= 0 ? e : 0, c = "off" === d.infinity ? f - e : -i(f, e, a.slideamount), c *= d.slide_width
            }
            return c
        }
}(jQuery);
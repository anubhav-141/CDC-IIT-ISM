/************************************************
 * REVOLUTION 5.4.6.4 EXTENSION - LAYER ANIMATION
 * @version: 3.6.4 (28.11.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 ************************************************/
! function(e) {
    "use strict";

    function i(e, i, t, a, o, r, n) {
        var s = e.find(i);
        s.css("borderWidth", r + "px"), s.css(t, 0 - r + "px"), s.css(a, "0px solid transparent"), s.css(o, n)
    }
    var t = jQuery.fn.revolution,
        a = (t.is_mobile(), t.is_android(), {
            alias: "LayerAnimation Min JS",
            name: "revolution.extensions.layeranimation.min.js",
            min_core: "5.4.6.4",
            version: "3.6.4"
        });
    jQuery.extend(!0, t, {
        updateMarkup: function(e, i) {
            var t = jQuery(e).data();
            if (void 0 !== t.start && !t.frames_added && void 0 === t.frames) {
                var a = new Array,
                    o = _(c(), t.transform_in, void 0, !1),
                    r = _(c(), t.transform_out, void 0, !1),
                    n = _(c(), t.transform_hover, void 0, !1);
                jQuery.isNumeric(t.end) && jQuery.isNumeric(t.start) && jQuery.isNumeric(o.speed) && (t.end = parseInt(t.end, 0) - (parseInt(t.start, 0) + parseFloat(o.speed, 0))), a.push({
                    frame: "0",
                    delay: t.start,
                    from: t.transform_in,
                    to: t.transform_idle,
                    split: t.splitin,
                    speed: o.speed,
                    ease: o.anim.ease,
                    mask: t.mask_in,
                    splitdelay: t.elementdelay
                }), a.push({
                    frame: "5",
                    delay: t.end,
                    to: t.transform_out,
                    split: t.splitout,
                    speed: r.speed,
                    ease: r.anim.ease,
                    mask: t.mask_out,
                    splitdelay: t.elementdelay
                }), t.transform_hover && a.push({
                    frame: "hover",
                    to: t.transform_hover,
                    style: t.style_hover,
                    speed: n.speed,
                    ease: n.anim.ease,
                    splitdelay: t.elementdelay
                }), t.frames = a
            }
            if (!t.frames_added) {
                if (t.inframeindex = 0, t.outframeindex = -1, t.hoverframeindex = -1, void 0 !== t.frames)
                    for (var s = 0; s < t.frames.length; s++) void 0 !== t.frames[s].sfx_effect && t.frames[s].sfx_effect.indexOf("block") >= 0 && (0 === s ? (t.frames[s].from = "o:0", t.frames[s].to = "o:1") : t.frames[s].to = "o:0", t._sfx = "block"), void 0 === t.frames[0].from && (t.frames[0].from = "o:inherit"), 0 === t.frames[0].delay && (t.frames[0].delay = 20), "hover" === t.frames[s].frame ? t.hoverframeindex = s : "frame_999" !== t.frames[s].frame && "frame_out" !== t.frames[s].frame && "last" !== t.frames[s].frame && "end" !== t.frames[s].frame || (t.outframeindex = s), void 0 !== t.frames[s].split && t.frames[s].split.match(/chars|words|lines/g) && (t.splittext = !0);
                t.outframeindex = -1 === t.outframeindex ? -1 === t.hoverframeindex ? t.frames.length - 1 : t.frames.length - 2 : t.outframeindex, t.frames_added = !0
            }
        },
        animcompleted: function(e, i) {
            var a = e.data(),
                o = a.videotype,
                r = a.autoplay,
                n = a.autoplayonlyfirsttime;
            void 0 != o && "none" != o && (1 == r || "true" == r || "on" == r || "1sttime" == r || n ? (("carousel" !== i.sliderType || "carousel" === i.sliderType && "on" === i.carousel.showLayersAllTime && e.closest("li").hasClass("active-revslide") || "carousel" === i.sliderType && "on" !== i.carousel.showLayersAllTime && e.closest("li").hasClass("active-revslide")) && t.playVideo(e, i), t.toggleState(e.data("videotoggledby")), (n || "1sttime" == r) && (a.autoplayonlyfirsttime = !1, a.autoplay = "off")) : ("no1sttime" == r && (a.datasetautoplay = "on"), t.unToggleState(e.data("videotoggledby"))))
        },
        handleStaticLayers: function(e, i) {
            var t = parseInt(e.data("startslide"), 0),
                a = parseInt(e.data("endslide"), 0);
            t < 0 && (t = 0), a < 0 && (a = i.realslideamount), 0 === t && a === i.realslideamount - 1 && (a = i.realslideamount + 1), e.data("startslide", t), e.data("endslide", a)
        },
        animateTheCaptions: function(e) {
            if ("stop" === t.compare_version(a).check) return !1;
            var i = e.opt,
                o = e.slide,
                r = e.recall,
                n = e.maintimeline,
                s = e.preset,
                d = e.startslideanimat,
                l = "carousel" === i.sliderType ? 0 : i.width / 2 - i.gridwidth[i.curWinRange] * i.bw / 2,
                m = o.data("index");
            if (i.layers = i.layers || new Object, i.layers[m] = i.layers[m] || o.find(".tp-caption"), i.layers.static = i.layers.static || i.c.find(".tp-static-layers").find(".tp-caption"), void 0 === i.timelines && t.createTimelineStructure(i), i.conh = i.c.height(), i.conw = i.c.width(), i.ulw = i.ul.width(), i.ulh = i.ul.height(), i.debugMode) {
                o.addClass("indebugmode"), o.find(".helpgrid").remove(), i.c.find(".hglayerinfo").remove(), o.append('<div class="helpgrid" style="width:' + i.gridwidth[i.curWinRange] * i.bw + "px;height:" + i.gridheight[i.curWinRange] * i.bw + 'px;"></div>');
                var c = o.find(".helpgrid");
                c.append('<div class="hginfo">Zoom:' + Math.round(100 * i.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + i.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + i.gridwidth[i.curWinRange] + "x" + i.gridheight[i.curWinRange] + "</div>"), i.c.append('<div class="hglayerinfo"></div>'), c.append('<div class="tlhg"></div>')
            }
            void 0 !== m && i.layers[m] && jQuery.each(i.layers[m], function(e, a) {
                var o = jQuery(this);
                t.updateMarkup(this, i), t.prepareSingleCaption({
                    caption: o,
                    opt: i,
                    offsetx: l,
                    offsety: 0,
                    index: e,
                    recall: r,
                    preset: s
                }), s && 0 !== d || t.buildFullTimeLine({
                    caption: o,
                    opt: i,
                    offsetx: l,
                    offsety: 0,
                    index: e,
                    recall: r,
                    preset: s,
                    regenerate: 0 === d
                }), r && "carousel" === i.sliderType && "on" === i.carousel.showLayersAllTime && t.animcompleted(o, i)
            }), i.layers.static && jQuery.each(i.layers.static, function(e, a) {
                var o = jQuery(this),
                    n = o.data();
                !0 !== n.hoveredstatus && !0 !== n.inhoveroutanimation ? (t.updateMarkup(this, i), t.prepareSingleCaption({
                    caption: o,
                    opt: i,
                    offsetx: l,
                    offsety: 0,
                    index: e,
                    recall: r,
                    preset: s
                }), s && 0 !== d || !0 === n.veryfirstststic || (t.buildFullTimeLine({
                    caption: o,
                    opt: i,
                    offsetx: l,
                    offsety: 0,
                    index: e,
                    recall: r,
                    preset: s,
                    regenerate: 0 === d
                }), n.veryfirstststic = !0), r && "carousel" === i.sliderType && "on" === i.carousel.showLayersAllTime && t.animcompleted(o, i)) : t.prepareSingleCaption({
                    caption: o,
                    opt: i,
                    offsetx: l,
                    offsety: 0,
                    index: e,
                    recall: r,
                    preset: s
                })
            });
            var p = -1 === i.nextSlide || void 0 === i.nextSlide ? 0 : i.nextSlide;
            void 0 !== i.rowzones && (p = p > i.rowzones.length ? i.rowzones.length : p), void 0 != i.rowzones && i.rowzones.length > 0 && void 0 != i.rowzones[p] && p >= 0 && p <= i.rowzones.length && i.rowzones[p].length > 0 && t.setSize(i), s || void 0 !== d && (void 0 !== m && jQuery.each(i.timelines[m].layers, function(e, a) {
                var o = a.layer.data();
                "none" !== a.wrapper && void 0 !== a.wrapper || ("keep" == a.triggerstate && "on" === o.triggerstate ? t.playAnimationFrame({
                    caption: a.layer,
                    opt: i,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }) : a.timeline.restart())
            }), i.timelines.staticlayers && jQuery.each(i.timelines.staticlayers.layers, function(e, a) {
                var o = a.layer.data(),
                    r = p >= a.firstslide && p <= a.lastslide,
                    n = p < a.firstslide || p > a.lastslide,
                    s = a.timeline.getLabelTime("slide_" + a.firstslide),
                    d = a.timeline.getLabelTime("slide_" + a.lastslide),
                    l = o.static_layer_timeline_time,
                    m = "in" === o.animdirection || "out" !== o.animdirection && void 0,
                    c = "bytrigger" === o.frames[0].delay,
                    g = (o.frames[o.frames.length - 1].delay, o.triggered_startstatus),
                    f = o.lasttriggerstate;
                !0 !== o.hoveredstatus && 1 != o.inhoveroutanimation && (void 0 !== l && m && ("keep" == f ? (t.playAnimationFrame({
                    caption: a.layer,
                    opt: i,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }), o.triggeredtimeline.time(l)) : !0 !== o.hoveredstatus && a.timeline.time(l)), "reset" === f && "hidden" === g && (a.timeline.time(0), o.animdirection = "out"), r ? m ? p === a.lastslide && (a.timeline.play(d), o.animdirection = "in") : (c || "in" === o.animdirection || a.timeline.play(s), ("visible" == g && "keep" !== f || "keep" === f && !0 === m || "visible" == g && void 0 === m) && (a.timeline.play(s + .01), o.animdirection = "in")) : n && m && a.timeline.play("frame_999"))
            })), void 0 != n && setTimeout(function() {
                n.resume()
            }, 30)
        },
        prepareSingleCaption: function(e) {
            var a = e.caption,
                o = a.data(),
                r = e.opt,
                n = e.recall,
                s = e.recall,
                d = (e.preset, jQuery("body").hasClass("rtl"));
            if (o._pw = void 0 === o._pw ? a.closest(".tp-parallax-wrap") : o._pw, o._lw = void 0 === o._lw ? a.closest(".tp-loop-wrap") : o._lw, o._mw = void 0 === o._mw ? a.closest(".tp-mask-wrap") : o._mw, o._responsive = o.responsive || "on", o._respoffset = o.responsive_offset || "on", o._ba = o.basealign || "grid", o._gw = "grid" === o._ba ? r.width : r.ulw, o._gh = "grid" === o._ba ? r.height : r.ulh, o._lig = void 0 === o._lig ? a.hasClass("rev_layer_in_group") ? a.closest(".rev_group") : a.hasClass("rev_layer_in_column") ? a.closest(".rev_column_inner") : a.hasClass("rev_column_inner") ? a.closest(".rev_row") : "none" : o._lig, o._column = void 0 === o._column ? a.hasClass("rev_column_inner") ? a.closest(".rev_column") : "none" : o._column, o._row = void 0 === o._row ? a.hasClass("rev_column_inner") ? a.closest(".rev_row") : "none" : o._row, o._ingroup = void 0 === o._ingroup ? !(a.hasClass("rev_group") || !a.closest(".rev_group")) : o._ingroup, o._isgroup = void 0 === o._isgroup ? !!a.hasClass("rev_group") : o._isgroup, o._nctype = o.type || "none", o._cbgc_auto = void 0 === o._cbgc_auto ? "column" === o._nctype && o._pw.find(".rev_column_bg_auto_sized") : o._cbgc_auto, o._cbgc_man = void 0 === o._cbgc_man ? "column" === o._nctype && o._pw.find(".rev_column_bg_man_sized") : o._cbgc_man, o._slideid = o._slideid || a.closest(".tp-revslider-slidesli").data("index"), o._id = void 0 === o._id ? a.data("id") || a.attr("id") : o._id, o._slidelink = void 0 === o._slidelink ? void 0 !== a.hasClass("slidelink") && a.hasClass("slidelink") : o._slidelink, void 0 === o._li && (a.hasClass("tp-static-layer") ? (o._isstatic = !0, o._li = a.closest(".tp-static-layers"), o._slideid = "staticlayers") : o._li = a.closest(".tp-revslider-slidesli")), o._row = void 0 === o._row ? "column" === o._nctype && o._pw.closest(".rev_row") : o._row, void 0 === o._togglelisteners && a.find(".rs-toggled-content") ? (o._togglelisteners = !0, void 0 === o.actions && a.click(function() {
                    t.swaptoggleState(a)
                })) : o._togglelisteners = !1, "fullscreen" == r.sliderLayout && (e.offsety = o._gh / 2 - r.gridheight[r.curWinRange] * r.bh / 2), ("on" == r.autoHeight || void 0 != r.minHeight && r.minHeight > 0) && (e.offsety = r.conh / 2 - r.gridheight[r.curWinRange] * r.bh / 2), e.offsety < 0 && (e.offsety = 0), r.debugMode) {
                a.closest("li").find(".helpgrid").css({
                    top: e.offsety + "px",
                    left: e.offsetx + "px"
                });
                var l = r.c.find(".hglayerinfo");
                a.on("hover, mouseenter", function() {
                    var e = "";
                    a.data() && jQuery.each(a.data(), function(i, t) {
                        "object" != typeof t && (e = e + '<span style="white-space:nowrap"><span style="color:#27ae60">' + i + ":</span>" + t + "</span>&nbsp; &nbsp; ")
                    }), l.html(e)
                })
            }
            if ("off" === (void 0 === o.visibility ? "oon" : y(o.visibility, r)[r.forcedWinRange] || y(o.visibility, r) || "ooon") || o._gw < r.hideCaptionAtLimit && "on" == o.captionhidden || o._gw < r.hideAllCaptionAtLimit ? o._pw.addClass("tp-hidden-caption") : o._pw.removeClass("tp-hidden-caption"), o.layertype = "html", e.offsetx < 0 && (e.offsetx = 0), void 0 != o.thumbimage && void 0 == o.videoposter && (o.videoposter = o.thumbimage), a.find("img").length > 0) {
                w = a.find("img");
                o.layertype = "image", 0 == w.width() && w.css({
                    width: "auto"
                }), 0 == w.height() && w.css({
                    height: "auto"
                }), void 0 == w.data("ww") && w.width() > 0 && w.data("ww", w.width()), void 0 == w.data("hh") && w.height() > 0 && w.data("hh", w.height());
                var m = w.data("ww"),
                    c = w.data("hh"),
                    p = "slide" == o._ba ? r.ulw : r.gridwidth[r.curWinRange],
                    g = "slide" == o._ba ? r.ulh : r.gridheight[r.curWinRange];
                m = y(w.data("ww"), r)[r.curWinRange] || y(w.data("ww"), r) || "auto", c = y(w.data("hh"), r)[r.curWinRange] || y(w.data("hh"), r) || "auto";
                var f = "full" === m || "full-proportional" === m,
                    h = "full" === c || "full-proportional" === c;
                if ("full-proportional" === m) {
                    var u = w.data("owidth"),
                        v = w.data("oheight");
                    u / p < v / g ? (m = p, c = v * (p / u)) : (c = g, m = u * (g / v))
                } else m = f ? p : !jQuery.isNumeric(m) && m.indexOf("%") > 0 ? m : parseFloat(m), c = h ? g : !jQuery.isNumeric(c) && c.indexOf("%") > 0 ? c : parseFloat(c);
                m = void 0 === m ? 0 : m, c = void 0 === c ? 0 : c, "off" !== o._responsive ? ("grid" != o._ba && f ? jQuery.isNumeric(m) ? w.css({
                    width: m + "px"
                }) : w.css({
                    width: m
                }) : jQuery.isNumeric(m) ? w.css({
                    width: m * r.bw + "px"
                }) : w.css({
                    width: m
                }), "grid" != o._ba && h ? jQuery.isNumeric(c) ? w.css({
                    height: c + "px"
                }) : w.css({
                    height: c
                }) : jQuery.isNumeric(c) ? w.css({
                    height: c * r.bh + "px"
                }) : w.css({
                    height: c
                })) : w.css({
                    width: m,
                    height: c
                }), o._ingroup && "row" !== o._nctype && (void 0 !== m && !jQuery.isNumeric(m) && "string" === jQuery.type(m) && m.indexOf("%") > 0 && punchgs.TweenLite.set([o._lw, o._pw, o._mw], {
                    minWidth: m
                }), void 0 !== c && !jQuery.isNumeric(c) && "string" === jQuery.type(c) && c.indexOf("%") > 0 && punchgs.TweenLite.set([o._lw, o._pw, o._mw], {
                    minHeight: c
                }))
            }
            if ("slide" === o._ba) e.offsetx = 0, e.offsety = 0;
            else if (o._isstatic && void 0 !== r.carousel && void 0 !== r.carousel.horizontal_align && "carousel" === r.sliderType) {
                switch (r.carousel.horizontal_align) {
                    case "center":
                        e.offsetx = 0 + (r.ulw - r.gridwidth[r.curWinRange] * r.bw) / 2;
                        break;
                    case "left":
                        break;
                    case "right":
                        e.offsetx = r.ulw - r.gridwidth[r.curWinRange] * r.bw
                }
                e.offsetx = e.offsetx < 0 ? 0 : e.offsetx
            }
            var _ = "html5" == o.audio ? "audio" : "video";
            if (a.hasClass("tp-videolayer") || a.hasClass("tp-audiolayer") || a.find("iframe").length > 0 || a.find(_).length > 0) {
                if (o.layertype = "video", t.manageVideoLayer && t.manageVideoLayer(a, r, n, s), !n && !s) {
                    o.videotype;
                    t.resetVideo && t.resetVideo(a, r, e.preset)
                }
                var b = o.aspectratio;
                void 0 != b && b.split(":").length > 1 && t.prepareCoveredVideo(r, a);
                var w = a.find("iframe") ? a.find("iframe") : w = a.find(_),
                    k = !a.find("iframe"),
                    L = a.hasClass("coverscreenvideo");
                w.css({
                    display: "block"
                }), void 0 == a.data("videowidth") && (a.data("videowidth", w.width()), a.data("videoheight", w.height()));
                var m = y(a.data("videowidth"), r)[r.curWinRange] || y(a.data("videowidth"), r) || "auto",
                    c = y(a.data("videoheight"), r)[r.curWinRange] || y(a.data("videoheight"), r) || "auto";
                m = "auto" === m || !jQuery.isNumeric(m) && m.indexOf("%") > 0 ? "auto" === m ? "auto" : "grid" === o._ba ? r.gridwidth[r.curWinRange] * r.bw : o._gw : parseFloat(m) * r.bw + "px", c = "auto" === c || !jQuery.isNumeric(c) && c.indexOf("%") > 0 ? "auto" === c ? "auto" : "grid" === o._ba ? r.gridheight[r.curWinRange] * r.bw : o._gh : parseFloat(c) * r.bh + "px", o.cssobj = void 0 === o.cssobj ? x(a, 0) : o.cssobj;
                var I = T(o.cssobj, r);
                if ("auto" == I.lineHeight && (I.lineHeight = I.fontSize + 4), a.hasClass("fullscreenvideo") || L) {
                    e.offsetx = 0, e.offsety = 0, a.data("x", 0), a.data("y", 0);
                    var W = o._gh;
                    "on" == r.autoHeight && (W = r.conh), a.css({
                        width: o._gw,
                        height: W
                    })
                } else punchgs.TweenLite.set(a, {
                    paddingTop: Math.round(I.paddingTop * r.bh) + "px",
                    paddingBottom: Math.round(I.paddingBottom * r.bh) + "px",
                    paddingLeft: Math.round(I.paddingLeft * r.bw) + "px",
                    paddingRight: Math.round(I.paddingRight * r.bw) + "px",
                    marginTop: I.marginTop * r.bh + "px",
                    marginBottom: I.marginBottom * r.bh + "px",
                    marginLeft: I.marginLeft * r.bw + "px",
                    marginRight: I.marginRight * r.bw + "px",
                    borderTopWidth: Math.round(I.borderTopWidth * r.bh) + "px",
                    borderBottomWidth: Math.round(I.borderBottomWidth * r.bh) + "px",
                    borderLeftWidth: Math.round(I.borderLeftWidth * r.bw) + "px",
                    borderRightWidth: Math.round(I.borderRightWidth * r.bw) + "px",
                    width: m,
                    height: c
                });
                (0 == k && !L || 1 != o.forcecover && !a.hasClass("fullscreenvideo") && !L) && (w.width(m), w.height(c)), o._ingroup && null !== o.videowidth && void 0 !== o.videowidth && !jQuery.isNumeric(o.videowidth) && o.videowidth.indexOf("%") > 0 && punchgs.TweenLite.set([o._lw, o._pw, o._mw], {
                    minWidth: o.videowidth
                })
            }
            j(a, r, 0, o._responsive), a.hasClass("tp-resizeme") && a.find("*").each(function() {
                j(jQuery(this), r, "rekursive", o._responsive)
            });
            var R = a.outerHeight(),
                C = a.css("backgroundColor");
            i(a, ".frontcorner", "left", "borderRight", "borderTopColor", R, C), i(a, ".frontcornertop", "left", "borderRight", "borderBottomColor", R, C), i(a, ".backcorner", "right", "borderLeft", "borderBottomColor", R, C), i(a, ".backcornertop", "right", "borderLeft", "borderTopColor", R, C), "on" == r.fullScreenAlignForce && (e.offsetx = 0, e.offsety = 0), "block" === o._sfx && void 0 === o._bmask && (o._bmask = jQuery('<div class="tp-blockmask"></div>'), o._mw.append(o._bmask)), o.arrobj = new Object, o.arrobj.voa = y(o.voffset, r)[r.curWinRange] || y(o.voffset, r)[0], o.arrobj.hoa = y(o.hoffset, r)[r.curWinRange] || y(o.hoffset, r)[0], o.arrobj.elx = y(o.x, r)[r.curWinRange] || y(o.x, r)[0], o.arrobj.ely = y(o.y, r)[r.curWinRange] || y(o.y, r)[0];
            var z = 0 == o.arrobj.voa.length ? 0 : o.arrobj.voa,
                O = 0 == o.arrobj.hoa.length ? 0 : o.arrobj.hoa,
                Q = 0 == o.arrobj.elx.length ? 0 : o.arrobj.elx,
                S = 0 == o.arrobj.ely.length ? 0 : o.arrobj.ely;
            o.eow = a.outerWidth(!0), o.eoh = a.outerHeight(!0), 0 == o.eow && 0 == o.eoh && (o.eow = r.ulw, o.eoh = r.ulh);
            var M = "off" !== o._respoffset ? parseInt(z, 0) * r.bw : parseInt(z, 0),
                P = "off" !== o._respoffset ? parseInt(O, 0) * r.bw : parseInt(O, 0),
                A = "grid" === o._ba ? r.gridwidth[r.curWinRange] * r.bw : o._gw,
                B = "grid" === o._ba ? r.gridheight[r.curWinRange] * r.bw : o._gh;
            "on" == r.fullScreenAlignForce && (A = r.ulw, B = r.ulh), "none" !== o._lig && void 0 != o._lig && (A = o._lig.width(), B = o._lig.height(), e.offsetx = 0, e.offsety = 0), Q = "center" === Q || "middle" === Q ? A / 2 - o.eow / 2 + P : "left" === Q ? P : "right" === Q ? A - o.eow - P : "off" !== o._respoffset ? Q * r.bw : Q, S = "center" == S || "middle" == S ? B / 2 - o.eoh / 2 + M : "top" == S ? M : "bottom" == S ? B - o.eoh - M : "off" !== o._respoffset ? S * r.bw : S, d && !o._slidelink && (Q += o.eow), o._slidelink && (Q = 0), o.calcx = parseInt(Q, 0) + e.offsetx, o.calcy = parseInt(S, 0) + e.offsety;
            var F = a.css("z-Index");
            if ("row" !== o._nctype && "column" !== o._nctype) punchgs.TweenLite.set(o._pw, {
                zIndex: F,
                top: o.calcy,
                left: o.calcx,
                overwrite: "auto"
            });
            else if ("row" !== o._nctype) punchgs.TweenLite.set(o._pw, {
                zIndex: F,
                width: o.columnwidth,
                top: 0,
                left: 0,
                overwrite: "auto"
            });
            else if ("row" === o._nctype) {
                var X = "grid" === o._ba ? A + "px" : "100%";
                punchgs.TweenLite.set(o._pw, {
                    zIndex: F,
                    width: X,
                    top: 0,
                    left: e.offsetx,
                    overwrite: "auto"
                })
            }
            if (void 0 !== o.blendmode && punchgs.TweenLite.set(o._pw, {
                    mixBlendMode: o.blendmode
                }), "row" === o._nctype && (o.columnbreak <= r.curWinRange ? a.addClass("rev_break_columns") : a.removeClass("rev_break_columns")), "on" == o.loopanimation && punchgs.TweenLite.set(o._lw, {
                    minWidth: o.eow,
                    minHeight: o.eoh
                }), "column" === o._nctype) {
                var Y = void 0 !== a[0]._gsTransform ? a[0]._gsTransform.y : 0,
                    H = parseInt(o._column[0].style.paddingTop, 0);
                punchgs.TweenLite.set(a, {
                    y: 0
                }), punchgs.TweenLite.set(o._cbgc_man, {
                    y: parseInt(H + o._column.offset().top - a.offset().top, 0)
                }), punchgs.TweenLite.set(a, {
                    y: Y
                })
            }
            o._ingroup && "row" !== o._nctype && (void 0 !== o._groupw && !jQuery.isNumeric(o._groupw) && o._groupw.indexOf("%") > 0 && punchgs.TweenLite.set([o._lw, o._pw, o._mw], {
                minWidth: o._groupw
            }), void 0 !== o._grouph && !jQuery.isNumeric(o._grouph) && o._grouph.indexOf("%") > 0 && punchgs.TweenLite.set([o._lw, o._pw, o._mw], {
                minHeight: o._grouph
            }))
        },
        createTimelineStructure: function(e) {
            function i(e, i, t, a) {
                var o, r = new punchgs.TimelineLite({
                    paused: !0
                });
                (t = t || new Object)[e.attr("id")] = t[e.attr("id")] || new Object, "staticlayers" === a && (t[e.attr("id")].firstslide = e.data("startslide"), t[e.attr("id")].lastslide = e.data("endslide")), e.data("slideid", a), t[e.attr("id")].defclasses = o = e[0].className, t[e.attr("id")].wrapper = o.indexOf("rev_layer_in_column") >= 0 ? e.closest(".rev_column_inner") : o.indexOf("rev_column_inner") >= 0 ? e.closest(".rev_row") : o.indexOf("rev_layer_in_group") >= 0 ? e.closest(".rev_group") : "none", t[e.attr("id")].timeline = r, t[e.attr("id")].layer = e, t[e.attr("id")].triggerstate = e.data("lasttriggerstate"), t[e.attr("id")].dchildren = o.indexOf("rev_row") >= 0 ? e[0].getElementsByClassName("rev_column_inner") : o.indexOf("rev_column_inner") >= 0 ? e[0].getElementsByClassName("tp-caption") : o.indexOf("rev_group") >= 0 ? e[0].getElementsByClassName("rev_layer_in_group") : "none", e.data("timeline", r)
            }
            e.timelines = e.timelines || new Object, e.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function() {
                var t = jQuery(this),
                    a = t.data("index");
                e.timelines[a] = e.timelines[a] || {}, e.timelines[a].layers = e.timelines[a].layers || new Object, t.find(".tp-caption").each(function(t) {
                    i(jQuery(this), e, e.timelines[a].layers, a)
                })
            })
        },
        buildFullTimeLine: function(e) {
            var i, a, o = e.caption,
                r = o.data(),
                n = e.opt,
                d = {},
                l = h();
            if (!(i = n.timelines[r._slideid].layers[r._id]).generated || !0 === e.regenerate) {
                if (a = i.timeline, i.generated = !0, void 0 !== r.current_timeline && !0 !== e.regenerate ? (r.current_timeline_pause = r.current_timeline.paused(), r.current_timeline_time = r.current_timeline.time(), r.current_is_nc_timeline = a === r.current_timeline, r.static_layer_timeline_time = r.current_timeline_time) : (r.static_layer_timeline_time = r.current_timeline_time, r.current_timeline_time = 0, r.current_timeline && r.current_timeline.clear()), a.clear(), d.svg = void 0 != r.svg_src && o.find("svg"), d.svg && (r.idlesvg = g(r.svg_idle, p()), punchgs.TweenLite.set(d.svg, r.idlesvg.anim)), -1 !== r.hoverframeindex && void 0 !== r.hoverframeindex && !o.hasClass("rs-hover-ready")) {
                    if (o.addClass("rs-hover-ready"), r.hovertimelines = {}, r.hoveranim = _(l, r.frames[r.hoverframeindex].to), r.hoveranim = w(r.hoveranim, r.frames[r.hoverframeindex].style), d.svg) {
                        var m = g(r.svg_hover, p());
                        void 0 != r.hoveranim.anim.color && (m.anim.fill = r.hoveranim.anim.color, r.idlesvg.anim.css.fill = d.svg.css("fill")), r.hoversvg = m
                    }
                    o.hover(function(e) {
                        var i = {
                                caption: jQuery(e.currentTarget),
                                opt: n,
                                firstframe: "frame_0",
                                lastframe: "frame_999"
                            },
                            t = (s(i), i.caption),
                            a = t.data(),
                            o = a.frames[a.hoverframeindex];
                        a.forcehover = o.force, a.hovertimelines.item = punchgs.TweenLite.to(t, o.speed / 1e3, a.hoveranim.anim), (a.hoverzIndex || a.hoveranim.anim && a.hoveranim.anim.zIndex) && (a.basiczindex = void 0 === a.basiczindex ? a.cssobj.zIndex : a.basiczindex, a.hoverzIndex = void 0 === a.hoverzIndex ? a.hoveranim.anim.zIndex : a.hoverzIndex, a.inhoverinanimation = !0, 0 === o.speed && (a.inhoverinanimation = !1), a.hovertimelines.pwhoveranim = punchgs.TweenLite.to(a._pw, o.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: a.hoverzIndex
                        }), a.hovertimelines.pwhoveranim.eventCallback("onComplete", function(e) {
                            e.inhoverinanimation = !1
                        }, [a])), d.svg && (a.hovertimelines.svghoveranim = punchgs.TweenLite.to([d.svg, d.svg.find("path")], o.speed / 1e3, a.hoversvg.anim)), a.hoveredstatus = !0
                    }, function(e) {
                        var i = {
                                caption: jQuery(e.currentTarget),
                                opt: n,
                                firstframe: "frame_0",
                                lastframe: "frame_999"
                            },
                            t = (s(i), i.caption),
                            a = t.data(),
                            o = a.frames[a.hoverframeindex];
                        a.hoveredstatus = !1, a.inhoveroutanimation = !0, a.hovertimelines.item.pause(), a.hovertimelines.item = punchgs.TweenLite.to(t, o.speed / 1e3, jQuery.extend(!0, {}, a._gsTransformTo)), 0 == o.speed && (a.inhoveroutanimation = !1), a.hovertimelines.item.eventCallback("onComplete", function(e) {
                            e.inhoveroutanimation = !1
                        }, [a]), void 0 !== a.hovertimelines.pwhoveranim && (a.hovertimelines.pwhoveranim = punchgs.TweenLite.to(a._pw, o.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: a.basiczindex
                        })), d.svg && punchgs.TweenLite.to([d.svg, d.svg.find("path")], o.speed / 1e3, a.idlesvg.anim)
                    })
                }
                for (var c = 0; c < r.frames.length; c++)
                    if (c !== r.hoverframeindex) {
                        var f = c === r.inframeindex ? "frame_0" : c === r.outframeindex || "frame_999" === r.frames[c].frame ? "frame_999" : "frame_" + c;
                        r.frames[c].framename = f, i[f] = {}, i[f].timeline = new punchgs.TimelineLite({
                            align: "normal"
                        });
                        var u = r.frames[c].delay,
                            v = (r.triggered_startstatus, void 0 !== u ? jQuery.inArray(u, ["slideenter", "bytrigger", "wait"]) >= 0 ? u : parseInt(u, 0) / 1e3 : "wait");
                        void 0 !== i.firstslide && "frame_0" === f && (a.addLabel("slide_" + i.firstslide + "_pause", 0), a.addPause("slide_" + i.firstslide + "_pause"), a.addLabel("slide_" + i.firstslide, "+=0.005")), void 0 !== i.lastslide && "frame_999" === f && (a.addLabel("slide_" + i.lastslide + "_pause", "+=0.01"), a.addPause("slide_" + i.lastslide + "_pause"), a.addLabel("slide_" + i.lastslide, "+=0.005")), jQuery.isNumeric(v) ? a.addLabel(f, "+=" + v) : (a.addLabel("pause_" + c, "+=0.01"), a.addPause("pause_" + c), a.addLabel(f, "+=0.01")), a = t.createFrameOnTimeline({
                            caption: e.caption,
                            timeline: a,
                            label: f,
                            frameindex: c,
                            opt: n
                        })
                    }
                e.regenerate || (r.current_is_nc_timeline && (r.current_timeline = a), r.current_timeline_pause ? a.pause(r.current_timeline_time) : a.time(r.current_timeline_time))
            }
        },
        createFrameOnTimeline: function(e) {
            var i = e.caption,
                t = i.data(),
                a = e.label,
                s = e.timeline,
                d = e.frameindex,
                p = e.opt,
                g = i,
                h = {},
                u = p.timelines[t._slideid].layers[t._id],
                y = t.frames.length - 1,
                w = t.frames[d].split,
                x = t.frames[d].split_direction,
                T = t.frames[d].sfx_effect,
                k = !1;
            if (x = void 0 === x ? "forward" : x, -1 !== t.hoverframeindex && t.hoverframeindex == y && (y -= 1), h.content = new punchgs.TimelineLite({
                    align: "normal"
                }), h.mask = new punchgs.TimelineLite({
                    align: "normal"
                }), void 0 === s.vars.id && (s.vars.id = Math.round(1e5 * Math.random())), "column" === t._nctype && (s.add(punchgs.TweenLite.set(t._cbgc_man, {
                    visibility: "visible"
                }), a), s.add(punchgs.TweenLite.set(t._cbgc_auto, {
                    visibility: "hidden"
                }), a)), t.splittext && 0 === d) {
                void 0 !== t.mySplitText && t.mySplitText.revert();
                var j = i.find("a").length > 0 ? i.find("a") : i;
                t.mySplitText = new punchgs.SplitText(j, {
                    type: "chars,words,lines",
                    charsClass: "tp-splitted tp-charsplit",
                    wordsClass: "tp-splitted tp-wordsplit",
                    linesClass: "tp-splitted tp-linesplit"
                }), i.addClass("splitted")
            }
            void 0 !== t.mySplitText && w && w.match(/chars|words|lines/g) && (g = t.mySplitText[w], k = !0);
            var L, I, W = d !== t.outframeindex ? _(c(), t.frames[d].to, void 0, k, g.length - 1) : void 0 !== t.frames[d].to && null === t.frames[d].to.match(/auto:auto/g) ? _(f(), t.frames[d].to, 1 == p.sdir, k, g.length - 1) : _(f(), t.frames[t.inframeindex].from, 0 == p.sdir, k, g.length - 1),
                R = void 0 !== t.frames[d].from ? _(W, t.frames[t.inframeindex].from, 1 == p.sdir, k, g.length - 1) : void 0,
                C = t.frames[d].splitdelay;
            if (0 !== d || e.fromcurrentstate ? I = b(t.frames[d].mask) : L = b(t.frames[d].mask), W.anim.ease = void 0 === t.frames[d].ease ? punchgs.Power1.easeInOut : t.frames[d].ease, void 0 !== R && (R.anim.ease = void 0 === t.frames[d].ease ? punchgs.Power1.easeInOut : t.frames[d].ease, R.speed = void 0 === t.frames[d].speed ? R.speed : t.frames[d].speed, R.anim.x = R.anim.x * p.bw || v(R.anim.x, p, t.eow, t.eoh, t.calcy, t.calcx, "horizontal"), R.anim.y = R.anim.y * p.bw || v(R.anim.y, p, t.eow, t.eoh, t.calcy, t.calcx, "vertical")), void 0 !== W && (W.anim.ease = void 0 === t.frames[d].ease ? punchgs.Power1.easeInOut : t.frames[d].ease, W.speed = void 0 === t.frames[d].speed ? W.speed : t.frames[d].speed, W.anim.x = W.anim.x * p.bw || v(W.anim.x, p, t.eow, t.eoh, t.calcy, t.calcx, "horizontal"), W.anim.y = W.anim.y * p.bw || v(W.anim.y, p, t.eow, t.eoh, t.calcy, t.calcx, "vertical")), i.data("iframes") && s.add(punchgs.TweenLite.set(i.find("iframe"), {
                    autoAlpha: 1
                }), a + "+=0.001"), d === t.outframeindex && (t.frames[d].to && t.frames[d].to.match(/auto:auto/g), W.speed = void 0 === t.frames[d].speed || "inherit" === t.frames[d].speed ? t.frames[t.inframeindex].speed : t.frames[d].speed, W.anim.ease = void 0 === t.frames[d].ease || "inherit" === t.frames[d].ease ? t.frames[t.inframeindex].ease : t.frames[d].ease, W.anim.overwrite = "auto"), 0 !== d || e.fromcurrentstate) 0 === d && e.fromcurrentstate && (W.speed = R.speed);
            else {
                if (g != i) {
                    var z = jQuery.extend({}, W.anim, !0);
                    s.add(punchgs.TweenLite.set(i, W.anim), a), (W = c()).ease = z.ease, void 0 !== z.filter && (W.anim.filter = z.filter), void 0 !== z["-webkit-filter"] && (W.anim["-webkit-filter"] = z["-webkit-filter"])
                }
                R.anim.visibility = "hidden", R.anim.immediateRender = !0, W.anim.visibility = "visible"
            }
            e.fromcurrentstate && (W.anim.immediateRender = !0);
            var O = -1;
            if (0 === d && !e.fromcurrentstate && void 0 !== t._bmask && void 0 !== T && T.indexOf("block") >= 0 || d === t.outframeindex && !e.fromcurrentstate && void 0 !== t._bmask && void 0 !== T && T.indexOf("block") >= 0) {
                var Q = 0 === d ? R.speed / 1e3 / 2 : W.speed / 1e3 / 2,
                    S = [{
                        scaleY: 1,
                        scaleX: 0,
                        transformOrigin: "0% 50%"
                    }, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: W.anim.ease
                    }],
                    M = {
                        scaleY: 1,
                        scaleX: 0,
                        transformOrigin: "100% 50%",
                        ease: W.anim.ease
                    };
                switch (O = void 0 === C ? Q : C + Q, T) {
                    case "blocktoleft":
                    case "blockfromright":
                        S[0].transformOrigin = "100% 50%", M.transformOrigin = "0% 50%";
                        break;
                    case "blockfromtop":
                    case "blocktobottom":
                        S = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: W.anim.ease
                        }], M = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%",
                            ease: W.anim.ease
                        };
                        break;
                    case "blocktotop":
                    case "blockfrombottom":
                        S = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: W.anim.ease
                        }], M = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%",
                            ease: W.anim.ease
                        }
                }
                S[0].background = t.frames[d].sfxcolor, s.add(h.mask.fromTo(t._bmask, Q, S[0], S[1], C), a), s.add(h.mask.to(t._bmask, Q, M, O), a)
            }
            if (k) var P = l(g.length - 1, x);
            if (0 !== d || e.fromcurrentstate)
                if ("block" === t._sfx_out && d === t.outframeindex) s.add(h.content.staggerTo(g, .001, {
                    autoAlpha: 0,
                    delay: O
                }), a), s.add(h.content.staggerTo(g, W.speed / 1e3 / 2 - .001, {
                    x: 0,
                    delay: O
                }), a + "+=0.001");
                else if (k && void 0 !== P) {
                F = {
                    to: m(W.anim)
                };
                for (var A in g) {
                    Y = jQuery.extend({}, W.anim);
                    for (var B in F.to) Y[B] = parseInt(F.to[B].values[F.to[B].index], 0), F.to[B].index = F.to[B].index < F.to[B].len ? F.to[B].index + 1 : 0;
                    void 0 !== t.frames[d].color && (Y.color = t.frames[d].color), void 0 !== t.frames[d].bgcolor && (Y.backgroundColor = t.frames[d].bgcolor), s.add(h.content.to(g[P[A]], W.speed / 1e3, Y, C * A), a)
                }
            } else void 0 !== t.frames[d].color && (W.anim.color = t.frames[d].color), void 0 !== t.frames[d].bgcolor && (W.anim.backgroundColor = t.frames[d].bgcolor), s.add(h.content.staggerTo(g, W.speed / 1e3, W.anim, C), a);
            else if ("block" === t._sfx_in) s.add(h.content.staggerFromTo(g, .05, {
                x: 0,
                y: 0,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                delay: O
            }), a);
            else if (k && void 0 !== P) {
                var F = {
                    from: m(R.anim),
                    to: m(W.anim)
                };
                for (var A in g) {
                    var X = jQuery.extend({}, R.anim),
                        Y = jQuery.extend({}, W.anim);
                    for (var B in F.from) X[B] = parseInt(F.from[B].values[F.from[B].index], 0), F.from[B].index = F.from[B].index < F.from[B].len ? F.from[B].index + 1 : 0;
                    Y.ease = X.ease, void 0 !== t.frames[d].color && (X.color = t.frames[d].color, Y.color = t.cssobj.styleProps.color), void 0 !== t.frames[d].bgcolor && (X.backgroundColor = t.frames[d].bgcolor, Y.backgroundColor = t.cssobj.styleProps["background-color"]), s.add(h.content.fromTo(g[P[A]], R.speed / 1e3, X, Y, C * A), a)
                }
            } else void 0 !== t.frames[d].color && (R.anim.color = t.frames[d].color, W.anim.color = t.cssobj.styleProps.color), void 0 !== t.frames[d].bgcolor && (R.anim.backgroundColor = t.frames[d].bgcolor, W.anim.backgroundColor = t.cssobj.styleProps["background-color"]), s.add(h.content.staggerFromTo(g, R.speed / 1e3, R.anim, W.anim, C), a);
            return void 0 === I || !1 === I || 0 === d && e.ignorefirstframe || (I.anim.ease = void 0 === I.anim.ease || "inherit" === I.anim.ease ? t.frames[0].ease : I.anim.ease, I.anim.overflow = "hidden", I.anim.x = I.anim.x * p.bw || v(I.anim.x, p, t.eow, t.eoh, t.calcy, t.calcx, "horizontal"), I.anim.y = I.anim.y * p.bw || v(I.anim.y, p, t.eow, t.eoh, t.calcy, t.calcx, "vertical")), 0 === d && L && !1 !== L && !e.fromcurrentstate || 0 === d && e.ignorefirstframe ? ((I = new Object).anim = new Object, I.anim.overwrite = "auto", I.anim.ease = W.anim.ease, I.anim.x = I.anim.y = 0, L && !1 !== L && (L.anim.x = L.anim.x * p.bw || v(L.anim.x, p, t.eow, t.eoh, t.calcy, t.calcx, "horizontal"), L.anim.y = L.anim.y * p.bw || v(L.anim.y, p, t.eow, t.eoh, t.calcy, t.calcx, "vertical"), L.anim.overflow = "hidden")) : 0 === d && s.add(h.mask.set(t._mw, {
                overflow: "visible"
            }), a), void 0 !== L && void 0 !== I && !1 !== L && !1 !== I ? s.add(h.mask.fromTo(t._mw, R.speed / 1e3, L.anim, I.anim, C), a) : void 0 !== I && !1 !== I && s.add(h.mask.to(t._mw, W.speed / 1e3, I.anim, C), a), s.addLabel(a + "_end"), t._gsTransformTo && d === y && t.hoveredstatus && (t.hovertimelines.item = punchgs.TweenLite.to(i, 0, t._gsTransformTo)), t._gsTransformTo = !1, h.content.eventCallback("onStart", o, [d, u, t._pw, t, s, W.anim, i, e.updateStaticTimeline, p]), h.content.eventCallback("onUpdate", r, [a, t._id, t._pw, t, s, d, jQuery.extend(!0, {}, W.anim), e.updateStaticTimeline, i, p]), h.content.eventCallback("onComplete", n, [d, t.frames.length, y, t._pw, t, s, e.updateStaticTimeline, i, p]), s
        },
        endMoveCaption: function(e) {
            e.firstframe = "frame_0", e.lastframe = "frame_999";
            var i = s(e),
                a = e.caption.data();
            if (void 0 !== e.frame ? i.timeline.play(e.frame) : (!i.static || e.currentslide >= i.removeonslide || e.currentslide < i.showonslide) && (i.outnow = new punchgs.TimelineLite, i.timeline.pause(), !0 === a.visibleelement && t.createFrameOnTimeline({
                    caption: e.caption,
                    timeline: i.outnow,
                    label: "outnow",
                    frameindex: e.caption.data("outframeindex"),
                    opt: e.opt,
                    fromcurrentstate: !0
                }).play()), e.checkchildrens && i.timeline_obj && i.timeline_obj.dchildren && "none" !== i.timeline_obj.dchildren && i.timeline_obj.dchildren.length > 0)
                for (var o = 0; o < i.timeline_obj.dchildren.length; o++) t.endMoveCaption({
                    caption: jQuery(i.timeline_obj.dchildren[o]),
                    opt: e.opt
                })
        },
        playAnimationFrame: function(e) {
            e.firstframe = e.triggerframein, e.lastframe = e.triggerframeout;
            var i, a = s(e),
                o = e.caption.data(),
                r = 0;
            for (var n in o.frames) o.frames[n].framename === e.frame && (i = r), r++;
            void 0 !== o.triggeredtimeline && o.triggeredtimeline.pause(), o.triggeredtimeline = new punchgs.TimelineLite, a.timeline.pause();
            var d = !0 === o.visibleelement;
            o.triggeredtimeline = t.createFrameOnTimeline({
                caption: e.caption,
                timeline: o.triggeredtimeline,
                label: "triggered",
                frameindex: i,
                updateStaticTimeline: !0,
                opt: e.opt,
                ignorefirstframe: !0,
                fromcurrentstate: d
            }).play()
        },
        removeTheCaptions: function(e, i) {
            if ("stop" === t.compare_version(a).check) return !1;
            var o = e.data("index"),
                r = new Array;
            i.layers[o] && jQuery.each(i.layers[o], function(e, i) {
                r.push(i)
            });
            var n = t.currentSlideIndex(i);
            r && jQuery.each(r, function(e) {
                var a = jQuery(this);
                "carousel" === i.sliderType && "on" === i.carousel.showLayersAllTime ? (clearTimeout(a.data("videoplaywait")), t.stopVideo && t.stopVideo(a, i), t.removeMediaFromList && t.removeMediaFromList(a, i), i.lastplayedvideos = []) : (W(a), clearTimeout(a.data("videoplaywait")), t.endMoveCaption({
                    caption: a,
                    opt: i,
                    currentslide: n
                }), t.removeMediaFromList && t.removeMediaFromList(a, i), i.lastplayedvideos = [])
            })
        }
    });
    var o = function(e, i, a, o, r, n, s, d, l) {
            var m = {};
            if (m.layer = s, m.eventtype = 0 === e ? "enterstage" : e === o.outframeindex ? "leavestage" : "framestarted", m.layertype = s.data("layertype"), o.active = !0, m.frame_index = e, m.layersettings = s.data(), l.c.trigger("revolution.layeraction", [m]), "on" == o.loopanimation && I(o._lw, l.bw), "enterstage" === m.eventtype && (o.animdirection = "in", o.visibleelement = !0, t.toggleState(o.layertoggledby)), "none" !== i.dchildren && void 0 !== i.dchildren && i.dchildren.length > 0)
                if (0 === e)
                    for (c = 0; c < i.dchildren.length; c++) jQuery(i.dchildren[c]).data("timeline").play(0);
                else if (e === o.outframeindex)
                for (var c = 0; c < i.dchildren.length; c++) t.endMoveCaption({
                    caption: jQuery(i.dchildren[c]),
                    opt: l,
                    checkchildrens: !0
                });
            punchgs.TweenLite.set(a, {
                visibility: "visible"
            }), o.current_frame = e, o.current_timeline = r, o.current_timeline_time = r.time(), d && (o.static_layer_timeline_time = o.current_timeline_time), o.last_frame_started = e
        },
        r = function(e, i, t, a, o, r, n, s, d, l) {
            "column" === a._nctype && L(d, l), punchgs.TweenLite.set(t, {
                visibility: "visible"
            }), a.current_frame = r, a.current_timeline = o, a.current_timeline_time = o.time(), s && (a.static_layer_timeline_time = a.current_timeline_time), void 0 !== a.hoveranim && !1 === a._gsTransformTo && (a._gsTransformTo = n, a._gsTransformTo && a._gsTransformTo.startAt && delete a._gsTransformTo.startAt, void 0 === a.cssobj.styleProps.css ? a._gsTransformTo = jQuery.extend(!0, {}, a.cssobj.styleProps, a._gsTransformTo) : a._gsTransformTo = jQuery.extend(!0, {}, a.cssobj.styleProps.css, a._gsTransformTo)), a.visibleelement = !0
        },
        n = function(e, i, a, o, r, n, s, d, l) {
            var m = {};
            m.layer = d, m.eventtype = 0 === e ? "enteredstage" : e === i - 1 || e === a ? "leftstage" : "frameended", m.layertype = d.data("layertype"), m.layersettings = d.data(), l.c.trigger("revolution.layeraction", [m]), "leftstage" !== m.eventtype && t.animcompleted(d, l), "leftstage" === m.eventtype && t.stopVideo && t.stopVideo(d, l), "column" === r._nctype && (punchgs.TweenLite.to(r._cbgc_man, .01, {
                visibility: "hidden"
            }), punchgs.TweenLite.to(r._cbgc_auto, .01, {
                visibility: "visible"
            })), "leftstage" === m.eventtype && (r.active = !1, punchgs.TweenLite.set(o, {
                visibility: "hidden",
                overwrite: "auto"
            }), r.animdirection = "out", r.visibleelement = !1, t.unToggleState(r.layertoggledby)), r.current_frame = e, r.current_timeline = n, r.current_timeline_time = n.time(), s && (r.static_layer_timeline_time = r.current_timeline_time)
        },
        s = function(e) {
            var i = {};
            return e.firstframe = void 0 === e.firstframe ? "frame_0" : e.firstframe, e.lastframe = void 0 === e.lastframe ? "frame_999" : e.lastframe, i.id = e.caption.data("id") || e.caption.attr("id"), i.slideid = e.caption.data("slideid") || e.caption.closest(".tp-revslider-slidesli").data("index"), i.timeline_obj = e.opt.timelines[i.slideid].layers[i.id], i.timeline = i.timeline_obj.timeline, i.ffs = i.timeline.getLabelTime(e.firstframe), i.ffe = i.timeline.getLabelTime(e.firstframe + "_end"), i.lfs = i.timeline.getLabelTime(e.lastframe), i.lfe = i.timeline.getLabelTime(e.lastframe + "_end"), i.ct = i.timeline.time(), i.static = void 0 != i.timeline_obj.firstslide || void 0 != i.timeline_obj.lastslide, i.static && (i.showonslide = i.timeline_obj.firstslide, i.removeonslide = i.timeline_obj.lastslide), i
        },
        d = function(e) {
            for (var i, t, a = e.length; 0 !== a;) t = Math.floor(Math.random() * a), i = e[a -= 1], e[a] = e[t], e[t] = i;
            return e
        },
        l = function(e, i) {
            var t = new Array;
            switch (i) {
                case "forward":
                case "random":
                    for (n = 0; n <= e; n++) t.push(n);
                    "random" === i && (t = d(t));
                    break;
                case "backward":
                    for (n = 0; n <= e; n++) t.push(e - n);
                    break;
                case "middletoedge":
                    var a = Math.ceil(e / 2),
                        o = a - 1,
                        r = a + 1;
                    t.push(a);
                    for (n = 0; n < a; n++) o >= 0 && t.push(o), r <= e && t.push(r), o--, r++;
                    break;
                case "edgetomiddle":
                    for (var o = e, r = 0, n = 0; n <= Math.floor(e / 2); n++) t.push(o), r < o && t.push(r), o--, r++
            }
            return t
        },
        m = function(e) {
            var i = {};
            for (var t in e) "string" == typeof e[t] && e[t].indexOf("|") >= 0 && (void 0 === i[t] && (i[t] = {
                index: 0
            }), i[t].values = e[t].replace("[", "").replace("]", "").split("|"), i[t].len = i[t].values.length - 1);
            return i
        },
        c = function(e) {
            return e = void 0 === e ? new Object : e, e.anim = void 0 === e.anim ? new Object : e.anim, e.anim.x = void 0 === e.anim.x ? 0 : e.anim.x, e.anim.y = void 0 === e.anim.y ? 0 : e.anim.y, e.anim.z = void 0 === e.anim.z ? 0 : e.anim.z, e.anim.rotationX = void 0 === e.anim.rotationX ? 0 : e.anim.rotationX, e.anim.rotationY = void 0 === e.anim.rotationY ? 0 : e.anim.rotationY, e.anim.rotationZ = void 0 === e.anim.rotationZ ? 0 : e.anim.rotationZ, e.anim.scaleX = void 0 === e.anim.scaleX ? 1 : e.anim.scaleX, e.anim.scaleY = void 0 === e.anim.scaleY ? 1 : e.anim.scaleY, e.anim.skewX = void 0 === e.anim.skewX ? 0 : e.anim.skewX, e.anim.skewY = void 0 === e.anim.skewY ? 0 : e.anim.skewY, e.anim.opacity = void 0 === e.anim.opacity ? 1 : e.anim.opacity, e.anim.transformOrigin = void 0 === e.anim.transformOrigin ? "50% 50%" : e.anim.transformOrigin, e.anim.transformPerspective = void 0 === e.anim.transformPerspective ? 600 : e.anim.transformPerspective, e.anim.rotation = void 0 === e.anim.rotation ? 0 : e.anim.rotation, e.anim.force3D = void 0 === e.anim.force3D ? "auto" : e.anim.force3D, e.anim.autoAlpha = void 0 === e.anim.autoAlpha ? 1 : e.anim.autoAlpha, e.anim.visibility = void 0 === e.anim.visibility ? "visible" : e.anim.visibility, e.anim.overwrite = void 0 === e.anim.overwrite ? "auto" : e.anim.overwrite, e.speed = void 0 === e.speed ? .3 : e.speed, e.filter = void 0 === e.filter ? "blur(0px) grayscale(0%) brightness(100%)" : e.filter, e["-webkit-filter"] = void 0 === e["-webkit-filter"] ? "blur(0px) grayscale(0%) brightness(100%)" : e["-webkit-filter"], e
        },
        p = function() {
            var e = new Object;
            return e.anim = new Object, e.anim.stroke = "none", e.anim.strokeWidth = 0, e.anim.strokeDasharray = "none", e.anim.strokeDashoffset = "0", e
        },
        g = function(e, i) {
            var t = e.split(";");
            return t && jQuery.each(t, function(e, t) {
                var a = t.split(":"),
                    o = a[0],
                    r = a[1];
                "sc" == o && (i.anim.stroke = r), "sw" == o && (i.anim.strokeWidth = r), "sda" == o && (i.anim.strokeDasharray = r), "sdo" == o && (i.anim.strokeDashoffset = r)
            }), i
        },
        f = function() {
            var e = new Object;
            return e.anim = new Object, e.anim.x = 0, e.anim.y = 0, e.anim.z = 0, e
        },
        h = function() {
            var e = new Object;
            return e.anim = new Object, e.speed = .2, e
        },
        u = function(e, i, t, a, o) {
            if (o = void 0 === o ? "" : o, jQuery.isNumeric(parseFloat(e))) return parseFloat(e) + o;
            if (void 0 === e || "inherit" === e) return i + "ext";
            if (e.split("{").length > 1) {
                var r = e.split(","),
                    n = parseFloat(r[1].split("}")[0]);
                if (r = parseFloat(r[0].split("{")[1]), void 0 !== t && void 0 !== a) {
                    parseInt(Math.random() * (n - r), 0), parseInt(r, 0);
                    for (var s = 0; s < a; s++) e = e + "|" + (parseInt(Math.random() * (n - r), 0) + parseInt(r, 0)) + o;
                    e += "]"
                } else e = Math.random() * (n - r) + r
            }
            return e
        },
        v = function(e, i, t, a, o, r, n) {
            return !jQuery.isNumeric(e) && e.match(/%]/g) ? (e = e.split("[")[1].split("]")[0], "horizontal" == n ? e = (t + 2) * parseInt(e, 0) / 100 : "vertical" == n && (e = (a + 2) * parseInt(e, 0) / 100)) : e = "top" === (e = "left" === (e = "layer_top" === (e = "layer_left" === e ? 0 - t : "layer_right" === e ? t : e) ? 0 - a : "layer_bottom" === e ? a : e) || "stage_left" === e ? 0 - t - r : "right" === e || "stage_right" === e ? i.conw - r : "center" === e || "stage_center" === e ? i.conw / 2 - t / 2 - r : e) || "stage_top" === e ? 0 - a - o : "bottom" === e || "stage_bottom" === e ? i.conh - o : "middle" === e || "stage_middle" === e ? i.conh / 2 - a / 2 - o : e, e
        },
        _ = function(e, i, t, a, o) {
            var r = new Object;
            if (r = jQuery.extend(!0, {}, r, e), void 0 === i) return r;
            var n = i.split(";"),
                s = "";
            return n && jQuery.each(n, function(e, i) {
                var n = i.split(":"),
                    d = n[0],
                    l = n[1];
                t && "none" !== t && void 0 != l && l.length > 0 && l.match(/\(R\)/) && ("[" === (l = "right" === (l = l.replace("(R)", "")) ? "left" : "left" === l ? "right" : "top" === l ? "bottom" : "bottom" === l ? "top" : l)[0] && "-" === l[1] ? l = l.replace("[-", "[") : "[" === l[0] && "-" !== l[1] ? l = l.replace("[", "[-") : "-" === l[0] ? l = l.replace("-", "") : l[0].match(/[1-9]/) && (l = "-" + l)), void 0 != l && (l = l.replace(/\(R\)/, ""), "rotationX" != d && "rX" != d || (r.anim.rotationX = u(l, r.anim.rotationX, a, o, "deg")), "rotationY" != d && "rY" != d || (r.anim.rotationY = u(l, r.anim.rotationY, a, o, "deg")), "rotationZ" != d && "rZ" != d || (r.anim.rotation = u(l, r.anim.rotationZ, a, o, "deg")), "scaleX" != d && "sX" != d || (r.anim.scaleX = u(l, r.anim.scaleX, a, o)), "scaleY" != d && "sY" != d || (r.anim.scaleY = u(l, r.anim.scaleY, a, o)), "opacity" != d && "o" != d || (r.anim.opacity = u(l, r.anim.opacity, a, o)), "fb" == d && (s = "" === s ? "blur(" + parseInt(l, 0) + "px)" : s + " blur(" + parseInt(l, 0) + "px)"), "fg" == d && (s = "" === s ? "grayscale(" + parseInt(l, 0) + "%)" : s + " grayscale(" + parseInt(l, 0) + "%)"), "fbr" == d && (s = "" === s ? "brightness(" + parseInt(l, 0) + "%)" : s + " brightness(" + parseInt(l, 0) + "%)"), 0 === r.anim.opacity && (r.anim.autoAlpha = 0), r.anim.opacity = 0 == r.anim.opacity ? 1e-4 : r.anim.opacity, "skewX" != d && "skX" != d || (r.anim.skewX = u(l, r.anim.skewX, a, o)), "skewY" != d && "skY" != d || (r.anim.skewY = u(l, r.anim.skewY, a, o)), "x" == d && (r.anim.x = u(l, r.anim.x, a, o)), "y" == d && (r.anim.y = u(l, r.anim.y, a, o)), "z" == d && (r.anim.z = u(l, r.anim.z, a, o)), "transformOrigin" != d && "tO" != d || (r.anim.transformOrigin = l.toString()), "transformPerspective" != d && "tP" != d || (r.anim.transformPerspective = parseInt(l, 0)), "speed" != d && "s" != d || (r.speed = parseFloat(l)))
            }), "" !== s && (r.anim["-webkit-filter"] = s, r.anim.filter = s), r
        },
        b = function(e) {
            if (void 0 === e) return !1;
            var i = new Object;
            i.anim = new Object;
            var t = e.split(";");
            return t && jQuery.each(t, function(e, t) {
                var a = (t = t.split(":"))[0],
                    o = t[1];
                "x" == a && (i.anim.x = o), "y" == a && (i.anim.y = o), "s" == a && (i.speed = parseFloat(o)), "e" != a && "ease" != a || (i.anim.ease = o)
            }), i
        },
        y = function(e, i, t) {
            if (void 0 == e && (e = 0), !jQuery.isArray(e) && "string" === jQuery.type(e) && (e.split(",").length > 1 || e.split("[").length > 1)) {
                e = e.replace("[", "");
                var a = (e = e.replace("]", "")).match(/'/g) ? e.split("',") : e.split(",");
                e = new Array, a && jQuery.each(a, function(i, t) {
                    t = (t = t.replace("'", "")).replace("'", ""), e.push(t)
                })
            } else {
                o = e;
                jQuery.isArray(e) || (e = new Array).push(o)
            }
            var o = e[e.length - 1];
            if (e.length < i.rle)
                for (var r = 1; r <= i.curWinRange; r++) e.push(o);
            return e
        },
        w = function(e, i) {
            if (void 0 === i) return e;
            var t = (i = (i = (i = (i = (i = (i = (i = (i = i.replace("c:", "color:")).replace("bg:", "background-color:")).replace("bw:", "border-width:")).replace("bc:", "border-color:")).replace("br:", "borderRadius:")).replace("bs:", "border-style:")).replace("td:", "text-decoration:")).replace("zi:", "zIndex:")).split(";");
            return t && jQuery.each(t, function(i, t) {
                var a = t.split(":");
                a[0].length > 0 && ("background-color" === a[0] && a[1].indexOf("gradient") >= 0 && (a[0] = "background"), e.anim[a[0]] = a[1])
            }), e
        },
        x = function(e, i) {
            var t, a = new Object,
                o = !1;
            if ("rekursive" == i && (t = e.closest(".tp-caption")) && e.css("fontSize") === t.css("fontSize") && e.css("fontWeight") === t.css("fontWeight") && e.css("lineHeight") === t.css("lineHeight") && (o = !0), a.basealign = e.data("basealign") || "grid", a.fontSize = o ? void 0 === t.data("fontsize") ? parseInt(t.css("fontSize"), 0) || 0 : t.data("fontsize") : void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize"), a.fontWeight = o ? void 0 === t.data("fontweight") ? parseInt(t.css("fontWeight"), 0) || 0 : t.data("fontweight") : void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight"), a.whiteSpace = o ? void 0 === t.data("whitespace") ? t.css("whitespace") || "normal" : t.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace"), a.textAlign = o ? void 0 === t.data("textalign") ? t.css("textalign") || "inherit" : t.data("textalign") : void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign"), a.zIndex = o ? void 0 === t.data("zIndex") ? t.css("zIndex") || "inherit" : t.data("zIndex") : void 0 === e.data("zIndex") ? e.css("zIndex") || "inherit" : e.data("zIndex"), -1 !== jQuery.inArray(e.data("layertype"), ["video", "image", "audio"]) || e.is("img") ? a.lineHeight = 0 : a.lineHeight = o ? void 0 === t.data("lineheight") ? parseInt(t.css("lineHeight"), 0) || 0 : t.data("lineheight") : void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight"), a.letterSpacing = o ? void 0 === t.data("letterspacing") ? parseFloat(t.css("letterSpacing"), 0) || 0 : t.data("letterspacing") : void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing")) || 0 : e.data("letterspacing"), a.paddingTop = void 0 === e.data("paddingtop") ? parseInt(e.css("paddingTop"), 0) || 0 : e.data("paddingtop"), a.paddingBottom = void 0 === e.data("paddingbottom") ? parseInt(e.css("paddingBottom"), 0) || 0 : e.data("paddingbottom"), a.paddingLeft = void 0 === e.data("paddingleft") ? parseInt(e.css("paddingLeft"), 0) || 0 : e.data("paddingleft"), a.paddingRight = void 0 === e.data("paddingright") ? parseInt(e.css("paddingRight"), 0) || 0 : e.data("paddingright"), a.marginTop = void 0 === e.data("margintop") ? parseInt(e.css("marginTop"), 0) || 0 : e.data("margintop"), a.marginBottom = void 0 === e.data("marginbottom") ? parseInt(e.css("marginBottom"), 0) || 0 : e.data("marginbottom"), a.marginLeft = void 0 === e.data("marginleft") ? parseInt(e.css("marginLeft"), 0) || 0 : e.data("marginleft"), a.marginRight = void 0 === e.data("marginright") ? parseInt(e.css("marginRight"), 0) || 0 : e.data("marginright"), a.borderTopWidth = void 0 === e.data("bordertopwidth") ? parseInt(e.css("borderTopWidth"), 0) || 0 : e.data("bordertopwidth"), a.borderBottomWidth = void 0 === e.data("borderbottomwidth") ? parseInt(e.css("borderBottomWidth"), 0) || 0 : e.data("borderbottomwidth"), a.borderLeftWidth = void 0 === e.data("borderleftwidth") ? parseInt(e.css("borderLeftWidth"), 0) || 0 : e.data("borderleftwidth"), a.borderRightWidth = void 0 === e.data("borderrightwidth") ? parseInt(e.css("borderRightWidth"), 0) || 0 : e.data("borderrightwidth"), "rekursive" != i) {
                if (a.color = void 0 === e.data("color") ? "nopredefinedcolor" : e.data("color"), a.whiteSpace = o ? void 0 === t.data("whitespace") ? t.css("whiteSpace") || "nowrap" : t.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace"), a.textAlign = o ? void 0 === t.data("textalign") ? t.css("textalign") || "inherit" : t.data("textalign") : void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign"), a.fontWeight = o ? void 0 === t.data("fontweight") ? parseInt(t.css("fontWeight"), 0) || 0 : t.data("fontweight") : void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight"), a.minWidth = void 0 === e.data("width") ? parseInt(e.css("minWidth"), 0) || 0 : e.data("width"), a.minHeight = void 0 === e.data("height") ? parseInt(e.css("minHeight"), 0) || 0 : e.data("height"), void 0 != e.data("videowidth") && void 0 != e.data("videoheight")) {
                    var r = e.data("videowidth"),
                        n = e.data("videoheight");
                    r = "100%" === r ? "none" : r, n = "100%" === n ? "none" : n, e.data("width", r), e.data("height", n)
                }
                a.maxWidth = void 0 === e.data("width") ? parseInt(e.css("maxWidth"), 0) || "none" : e.data("width"), a.maxHeight = -1 !== jQuery.inArray(e.data("type"), ["column", "row"]) ? "none" : void 0 === e.data("height") ? parseInt(e.css("maxHeight"), 0) || "none" : e.data("height"), a.wan = void 0 === e.data("wan") ? parseInt(e.css("-webkit-transition"), 0) || "none" : e.data("wan"), a.moan = void 0 === e.data("moan") ? parseInt(e.css("-moz-animation-transition"), 0) || "none" : e.data("moan"), a.man = void 0 === e.data("man") ? parseInt(e.css("-ms-animation-transition"), 0) || "none" : e.data("man"), a.ani = void 0 === e.data("ani") ? parseInt(e.css("transition"), 0) || "none" : e.data("ani")
            }
            return a.styleProps = {
                borderTopLeftRadius: e[0].style.borderTopLeftRadius,
                borderTopRightRadius: e[0].style.borderTopRightRadius,
                borderBottomRightRadius: e[0].style.borderBottomRightRadius,
                borderBottomLeftRadius: e[0].style.borderBottomLeftRadius,
                background: e[0].style.background,
                boxShadow: e[0].style.boxShadow,
                "background-color": e[0].style["background-color"],
                "border-top-color": e[0].style["border-top-color"],
                "border-bottom-color": e[0].style["border-bottom-color"],
                "border-right-color": e[0].style["border-right-color"],
                "border-left-color": e[0].style["border-left-color"],
                "border-top-style": e[0].style["border-top-style"],
                "border-bottom-style": e[0].style["border-bottom-style"],
                "border-left-style": e[0].style["border-left-style"],
                "border-right-style": e[0].style["border-right-style"],
                "border-left-width": e[0].style["border-left-width"],
                "border-right-width": e[0].style["border-right-width"],
                "border-bottom-width": e[0].style["border-bottom-width"],
                "border-top-width": e[0].style["border-top-width"],
                color: e[0].style.color,
                "text-decoration": e[0].style["text-decoration"],
                "font-style": e[0].style["font-style"]
            }, "" !== a.styleProps.background && void 0 !== a.styleProps.background && a.styleProps.background !== a.styleProps["background-color"] || delete a.styleProps.background, "" == a.styleProps.color && (a.styleProps.color = e.css("color")), a
        },
        T = function(e, i) {
            var t = new Object;
            return e && jQuery.each(e, function(a, o) {
                var r = y(o, i)[i.curWinRange];
                t[a] = void 0 !== r ? r : e[a]
            }), t
        },
        k = function(e, i, t, a) {
            return e = jQuery.isNumeric(e) ? e * i + "px" : e, e = "full" === e ? a : "auto" === e || "none" === e ? t : e
        },
        j = function(e, i, t, a) {
            var o = e.data();
            o = void 0 === o ? {} : o;
            try {
                if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1
            } catch (e) {}
            o.cssobj = void 0 === o.cssobj ? x(e, t) : o.cssobj;
            var r = T(o.cssobj, i),
                n = i.bw,
                s = i.bh;
            "off" === a && (n = 1, s = 1), "auto" == r.lineHeight && (r.lineHeight = r.fontSize + 4);
            var d = {
                Top: r.marginTop,
                Bottom: r.marginBottom,
                Left: r.marginLeft,
                Right: r.marginRight
            };
            if ("column" === o._nctype && (punchgs.TweenLite.set(o._column, {
                    paddingTop: Math.round(r.marginTop * s) + "px",
                    paddingBottom: Math.round(r.marginBottom * s) + "px",
                    paddingLeft: Math.round(r.marginLeft * n) + "px",
                    paddingRight: Math.round(r.marginRight * n) + "px"
                }), d = {
                    Top: 0,
                    Bottom: 0,
                    Left: 0,
                    Right: 0
                }), !e.hasClass("tp-splitted")) {
                if (e.css("-webkit-transition", "none"), e.css("-moz-transition", "none"), e.css("-ms-transition", "none"), e.css("transition", "none"), (void 0 !== e.data("transform_hover") || void 0 !== e.data("style_hover")) && punchgs.TweenLite.set(e, r.styleProps), punchgs.TweenLite.set(e, {
                        fontSize: Math.round(r.fontSize * n) + "px",
                        fontWeight: r.fontWeight,
                        letterSpacing: Math.floor(r.letterSpacing * n) + "px",
                        paddingTop: Math.round(r.paddingTop * s) + "px",
                        paddingBottom: Math.round(r.paddingBottom * s) + "px",
                        paddingLeft: Math.round(r.paddingLeft * n) + "px",
                        paddingRight: Math.round(r.paddingRight * n) + "px",
                        marginTop: d.Top * s + "px",
                        marginBottom: d.Bottom * s + "px",
                        marginLeft: d.Left * n + "px",
                        marginRight: d.Right * n + "px",
                        borderTopWidth: Math.round(r.borderTopWidth * s) + "px",
                        borderBottomWidth: Math.round(r.borderBottomWidth * s) + "px",
                        borderLeftWidth: Math.round(r.borderLeftWidth * n) + "px",
                        borderRightWidth: Math.round(r.borderRightWidth * n) + "px",
                        lineHeight: Math.round(r.lineHeight * s) + "px",
                        textAlign: r.textAlign,
                        overwrite: "auto"
                    }), "rekursive" != t) {
                    var l = "slide" == r.basealign ? i.ulw : i.gridwidth[i.curWinRange],
                        m = "slide" == r.basealign ? i.ulh : i.gridheight[i.curWinRange],
                        c = k(r.maxWidth, n, "none", l),
                        p = k(r.maxHeight, s, "none", m),
                        g = k(r.minWidth, n, "0px", l),
                        f = k(r.minHeight, s, "0px", m);
                    if (g = void 0 === g ? 0 : g, f = void 0 === f ? 0 : f, c = void 0 === c ? "none" : c, p = void 0 === p ? "none" : p, o._isgroup && ("#1/1#" === g && (g = c = l), "#1/2#" === g && (g = c = l / 2), "#1/3#" === g && (g = c = l / 3), "#1/4#" === g && (g = c = l / 4), "#1/5#" === g && (g = c = l / 5), "#1/6#" === g && (g = c = l / 6), "#2/3#" === g && (g = c = l / 3 * 2), "#3/4#" === g && (g = c = l / 4 * 3), "#2/5#" === g && (g = c = l / 5 * 2), "#3/5#" === g && (g = c = l / 5 * 3), "#4/5#" === g && (g = c = l / 5 * 4), "#3/6#" === g && (g = c = l / 6 * 3), "#4/6#" === g && (g = c = l / 6 * 4), "#5/6#" === g && (g = c = l / 6 * 5)), o._ingroup && (o._groupw = g, o._grouph = f), punchgs.TweenLite.set(e, {
                            maxWidth: c,
                            maxHeight: p,
                            minWidth: g,
                            minHeight: f,
                            whiteSpace: r.whiteSpace,
                            textAlign: r.textAlign,
                            overwrite: "auto"
                        }), "nopredefinedcolor" != r.color && punchgs.TweenLite.set(e, {
                            color: r.color,
                            overwrite: "auto"
                        }), void 0 != o.svg_src) {
                        var h = "nopredefinedcolor" != r.color && void 0 != r.color ? r.color : void 0 != r.css && "nopredefinedcolor" != r.css.color && void 0 != r.css.color ? r.css.color : void 0 != r.styleProps.color ? r.styleProps.color : void 0 != r.styleProps.css && void 0 != r.styleProps.css.color && r.styleProps.css.color;
                        0 != h && (punchgs.TweenLite.set(e.find("svg"), {
                            fill: h,
                            overwrite: "auto"
                        }), punchgs.TweenLite.set(e.find("svg path"), {
                            fill: h,
                            overwrite: "auto"
                        }))
                    }
                }
                "column" === o._nctype && (void 0 === o._column_bg_set && (o._column_bg_set = e.css("backgroundColor"), o._column_bg_image = e.css("backgroundImage"), o._column_bg_image_repeat = e.css("backgroundRepeat"), o._column_bg_image_position = e.css("backgroundPosition"), o._column_bg_image_size = e.css("backgroundSize"), o._column_bg_opacity = e.data("bgopacity"), o._column_bg_opacity = void 0 === o._column_bg_opacity ? 1 : o._column_bg_opacity, punchgs.TweenLite.set(e, {
                    backgroundColor: "transparent",
                    backgroundImage: ""
                })), setTimeout(function() {
                    L(e, i)
                }, 1), o._cbgc_auto && o._cbgc_auto.length > 0 && (o._cbgc_auto[0].style.backgroundSize = o._column_bg_image_size, jQuery.isArray(r.marginLeft) ? punchgs.TweenLite.set(o._cbgc_auto, {
                    borderTopWidth: r.marginTop[i.curWinRange] * s + "px",
                    borderLeftWidth: r.marginLeft[i.curWinRange] * n + "px",
                    borderRightWidth: r.marginRight[i.curWinRange] * n + "px",
                    borderBottomWidth: r.marginBottom[i.curWinRange] * s + "px",
                    backgroundColor: o._column_bg_set,
                    backgroundImage: o._column_bg_image,
                    backgroundRepeat: o._column_bg_image_repeat,
                    backgroundPosition: o._column_bg_image_position,
                    opacity: o._column_bg_opacity
                }) : punchgs.TweenLite.set(o._cbgc_auto, {
                    borderTopWidth: r.marginTop * s + "px",
                    borderLeftWidth: r.marginLeft * n + "px",
                    borderRightWidth: r.marginRight * n + "px",
                    borderBottomWidth: r.marginBottom * s + "px",
                    backgroundColor: o._column_bg_set,
                    backgroundImage: o._column_bg_image,
                    backgroundRepeat: o._column_bg_image_repeat,
                    backgroundPosition: o._column_bg_image_position,
                    opacity: o._column_bg_opacity
                }))), setTimeout(function() {
                    e.css("-webkit-transition", e.data("wan")), e.css("-moz-transition", e.data("moan")), e.css("-ms-transition", e.data("man")), e.css("transition", e.data("ani"))
                }, 30)
            }
        },
        L = function(e, i) {
            var t = e.data();
            if (t._cbgc_man && t._cbgc_man.length > 0) {
                var a, o, r;
                jQuery.isArray(t.cssobj.marginLeft) ? (t.cssobj.marginLeft[i.curWinRange] * i.bw, a = t.cssobj.marginTop[i.curWinRange] * i.bh, o = t.cssobj.marginBottom[i.curWinRange] * i.bh, t.cssobj.marginRight[i.curWinRange] * i.bw) : (t.cssobj.marginLeft * i.bw, a = t.cssobj.marginTop * i.bh, o = t.cssobj.marginBottom * i.bh, t.cssobj.marginRight * i.bw), r = t._row.hasClass("rev_break_columns") ? "100%" : t._row.height() - (a + o) + "px", t._cbgc_man[0].style.backgroundSize = t._column_bg_image_size, punchgs.TweenLite.set(t._cbgc_man, {
                    width: "100%",
                    height: r,
                    backgroundColor: t._column_bg_set,
                    backgroundImage: t._column_bg_image,
                    backgroundRepeat: t._column_bg_image_repeat,
                    backgroundPosition: t._column_bg_image_position,
                    overwrite: "auto",
                    opacity: t._column_bg_opacity
                })
            }
        },
        I = function(e, i) {
            var t = e.data();
            if (e.hasClass("rs-pendulum") && void 0 == t._loop_timeline) {
                t._loop_timeline = new punchgs.TimelineLite;
                var a = void 0 == e.data("startdeg") ? -20 : e.data("startdeg"),
                    o = void 0 == e.data("enddeg") ? 20 : e.data("enddeg"),
                    r = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    n = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"),
                    s = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                a *= i, o *= i, t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    rotation: a,
                    transformOrigin: n
                }, {
                    rotation: o,
                    ease: s
                })), t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    rotation: o,
                    transformOrigin: n
                }, {
                    rotation: a,
                    ease: s,
                    onComplete: function() {
                        t._loop_timeline.restart()
                    }
                }))
            }
            if (e.hasClass("rs-rotate") && void 0 == t._loop_timeline) {
                t._loop_timeline = new punchgs.TimelineLite;
                var a = void 0 == e.data("startdeg") ? 0 : e.data("startdeg"),
                    o = void 0 == e.data("enddeg") ? 360 : e.data("enddeg"),
                    r = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    n = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"),
                    s = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                a *= i, o *= i, t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    rotation: a,
                    transformOrigin: n
                }, {
                    rotation: o,
                    ease: s,
                    onComplete: function() {
                        t._loop_timeline.restart()
                    }
                }))
            }
            if (e.hasClass("rs-slideloop") && void 0 == t._loop_timeline) {
                t._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == e.data("xs") ? 0 : e.data("xs"),
                    l = void 0 == e.data("ys") ? 0 : e.data("ys"),
                    m = void 0 == e.data("xe") ? 0 : e.data("xe"),
                    c = void 0 == e.data("ye") ? 0 : e.data("ye"),
                    r = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    s = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                d *= i, l *= i, m *= i, c *= i, t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    x: d,
                    y: l
                }, {
                    x: m,
                    y: c,
                    ease: s
                })), t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    x: m,
                    y: c
                }, {
                    x: d,
                    y: l,
                    onComplete: function() {
                        t._loop_timeline.restart()
                    }
                }))
            }
            if (e.hasClass("rs-pulse") && void 0 == t._loop_timeline) {
                t._loop_timeline = new punchgs.TimelineLite;
                var p = void 0 == e.data("zoomstart") ? 0 : e.data("zoomstart"),
                    g = void 0 == e.data("zoomend") ? 0 : e.data("zoomend"),
                    r = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    s = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    scale: p
                }, {
                    scale: g,
                    ease: s
                })), t._loop_timeline.append(new punchgs.TweenLite.fromTo(e, r, {
                    force3D: "auto",
                    scale: g
                }, {
                    scale: p,
                    onComplete: function() {
                        t._loop_timeline.restart()
                    }
                }))
            }
            if (e.hasClass("rs-wave") && void 0 == t._loop_timeline) {
                t._loop_timeline = new punchgs.TimelineLite;
                var f = void 0 == e.data("angle") ? 10 : parseInt(e.data("angle"), 0),
                    h = void 0 == e.data("radius") ? 10 : parseInt(e.data("radius"), 0),
                    r = void 0 == e.data("speed") ? -20 : e.data("speed"),
                    u = (n = void 0 == e.data("origin") ? "50% 50%" : e.data("origin")).split(" "),
                    v = new Object;
                u.length >= 1 ? (v.x = u[0], v.y = u[1]) : (v.x = "50%", v.y = "50%");
                var _ = {
                        a: 0,
                        ang: f,
                        element: e,
                        unit: h *= i,
                        xoffset: 0 + (parseInt(v.x, 0) / 100 - .5) * e.width(),
                        yoffset: -1 * h + (parseInt(v.y, 0) / 100 - .5) * e.height()
                    },
                    b = parseInt(f, 0),
                    y = new punchgs.TweenLite.fromTo(_, r, {
                        a: 0 + b
                    }, {
                        a: 360 + b,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone
                    });
                y.eventCallback("onUpdate", function(e) {
                    var i = e.a * (Math.PI / 180),
                        t = e.yoffset + e.unit * (1 - Math.sin(i)),
                        a = e.xoffset + Math.cos(i) * e.unit;
                    punchgs.TweenLite.to(e.element, .1, {
                        force3D: "auto",
                        x: a,
                        y: t
                    })
                }, [_]), y.eventCallback("onComplete", function(e) {
                    e._loop_timeline.restart()
                }, [t]), t._loop_timeline.append(y)
            }
        },
        W = function(e) {
            e.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var e = this;
                void 0 != e._loop_timeline && (e._loop_timeline.pause(), e._loop_timeline = null)
            })
        }
}(jQuery);
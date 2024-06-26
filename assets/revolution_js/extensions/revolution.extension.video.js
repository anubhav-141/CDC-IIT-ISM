/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - VIDEO FUNCTIONS
 * @version: 2.2.1 (15.01.2018)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(e) {
    "use strict";

    function t(e) {
        return void 0 == e ? -1 : jQuery.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
    }
    var a = jQuery.fn.revolution,
        i = a.is_mobile(),
        o = (a.is_android(), {
            alias: "Video Min JS",
            name: "revolution.extensions.video.min.js",
            min_core: "5.4.6.4",
            version: "2.2.0"
        });
    jQuery.extend(!0, a, {
        preLoadAudio: function(e, t) {
            if ("stop" === a.compare_version(o).check) return !1;
            e.find(".tp-audiolayer").each(function() {
                var e = jQuery(this),
                    i = {};
                0 === e.find("audio").length && (i.src = void 0 != e.data("videomp4") ? e.data("videomp4") : "", i.pre = e.data("videopreload") || "", void 0 === e.attr("id") && e.attr("audio-layer-" + Math.round(199999 * Math.random())), i.id = e.attr("id"), i.status = "prepared", i.start = jQuery.now(), i.waittime = 1e3 * e.data("videopreloadwait") || 5e3, "auto" != i.pre && "canplaythrough" != i.pre && "canplay" != i.pre && "progress" != i.pre || (void 0 === t.audioqueue && (t.audioqueue = []), t.audioqueue.push(i), a.manageVideoLayer(e, t)))
            })
        },
        preLoadAudioDone: function(e, t, a) {
            t.audioqueue && t.audioqueue.length > 0 && jQuery.each(t.audioqueue, function(t, i) {
                e.data("videomp4") !== i.src || i.pre !== a && "auto" !== i.pre || (i.status = "loaded")
            })
        },
        resetVideo: function(e, o, d, r) {
            var n = e.data();
            switch (n.videotype) {
                case "youtube":
                    n.player;
                    try {
                        if ("on" == n.forcerewind) {
                            var s = -1 == (g = t(e.data("videostartat"))),
                                l = 1 === n.bgvideo || e.find(".tp-videoposter").length > 0;
                            void 0 != n.player && (g = -1 == g ? 0 : g, n.player.seekTo(g), n.player.pauseVideo())
                        }
                    } catch (e) {}
                    0 == e.find(".tp-videoposter").length && 1 !== n.bgvideo && !0 !== d && punchgs.TweenLite.to(e.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "vimeo":
                    if (!r) {
                        var u = e.data("vimeoplayer");
                        try {
                            if ("on" == n.forcerewind) {
                                var s = -1 == (g = t(n.videostartat)),
                                    l = 1 === n.bgvideo || e.find(".tp-videoposter").length > 0;
                                (0 !== (g = -1 == g ? 0 : g) && !s || l) && (u.setCurrentTime(g), u.pause())
                            }
                        } catch (e) {}
                    }
                    0 == e.find(".tp-videoposter").length && 1 !== n.bgvideo && !0 !== d && punchgs.TweenLite.to(e.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "html5":
                    if (i && 1 == n.disablevideoonmobile) return !1;
                    var p = "html5" == n.audio ? "audio" : "video",
                        v = e.find(p),
                        c = v[0];
                    if (punchgs.TweenLite.to(v, .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        }), "on" == n.forcerewind && !e.hasClass("videoisplaying")) try {
                        var g = t(n.videostartat);
                        c.currentTime = -1 == g ? 0 : g
                    } catch (e) {}("mute" == n.volume || a.lastToggleState(e.videomutetoggledby) || !0 === o.globalmute) && (c.muted = !0)
            }
        },
        isVideoMuted: function(e, t) {
            var a = !1,
                i = e.data();
            switch (i.videotype) {
                case "youtube":
                    try {
                        a = i.player.isMuted()
                    } catch (e) {}
                    break;
                case "vimeo":
                    try {
                        "mute" == i.volume && (a = !0)
                    } catch (e) {}
                    break;
                case "html5":
                    var o = "html5" == i.audio ? "audio" : "video";
                    e.find(o)[0].muted && (a = !0)
            }
            return a
        },
        muteVideo: function(e, t) {
            var a = e.data();
            switch (a.videotype) {
                case "youtube":
                    try {
                        a.player.mute()
                    } catch (e) {}
                    break;
                case "vimeo":
                    try {
                        var i = e.data("vimeoplayer");
                        e.data("volume", "mute"), i.setVolume(0)
                    } catch (e) {}
                    break;
                case "html5":
                    var o = "html5" == a.audio ? "audio" : "video";
                    e.find(o)[0].muted = !0
            }
        },
        unMuteVideo: function(e, t) {
            if (!0 !== t.globalmute) {
                var a = e.data();
                switch (a.videotype) {
                    case "youtube":
                        try {
                            a.player.unMute()
                        } catch (e) {}
                        break;
                    case "vimeo":
                        try {
                            var i = e.data("vimeoplayer");
                            e.data("volume", "1"), i.setVolume(1)
                        } catch (e) {}
                        break;
                    case "html5":
                        var o = "html5" == a.audio ? "audio" : "video";
                        e.find(o)[0].muted = !1
                }
            }
        },
        stopVideo: function(e, t) {
            var a = e.data();
            switch (t.leaveViewPortBasedStop || (t.lastplayedvideos = []), t.leaveViewPortBasedStop = !1, a.videotype) {
                case "youtube":
                    try {
                        var i = a.player;
                        if (2 === i.getPlayerState() || 5 === i.getPlayerState()) return;
                        i.pauseVideo(), a.youtubepausecalled = !0, setTimeout(function() {
                            a.youtubepausecalled = !1
                        }, 80)
                    } catch (e) {
                        console.log("Issue at YouTube Video Pause:"), console.log(e)
                    }
                    break;
                case "vimeo":
                    try {
                        e.data("vimeoplayer").pause(), a.vimeopausecalled = !0, setTimeout(function() {
                            a.vimeopausecalled = !1
                        }, 80)
                    } catch (e) {
                        console.log("Issue at Vimeo Video Pause:"), console.log(e)
                    }
                    break;
                case "html5":
                    var o = "html5" == a.audio ? "audio" : "video",
                        d = e.find(o),
                        r = d[0];
                    void 0 != d && void 0 != r && r.pause()
            }
        },
        playVideo: function(e, i) {
            clearTimeout(e.data("videoplaywait"));
            var o = e.data();
            switch (o.videotype) {
                case "youtube":
                    if (0 == e.find("iframe").length) e.append(e.data("videomarkup")), s(e, i, !0);
                    else if (void 0 != o.player.playVideo) {
                        var r = t(e.data("videostartat")),
                            n = o.player.getCurrentTime();
                        1 == e.data("nextslideatend-triggered") && (n = -1, e.data("nextslideatend-triggered", 0)), -1 != r && r > n && o.player.seekTo(r), !0 !== o.youtubepausecalled && o.player.playVideo()
                    } else e.data("videoplaywait", setTimeout(function() {
                        !0 !== o.youtubepausecalled && a.playVideo(e, i)
                    }, 50));
                    break;
                case "vimeo":
                    if (0 == e.find("iframe").length) e.removeData("vimeoplayer"), e.append(e.data("videomarkup")), s(e, i, !0);
                    else if (e.hasClass("rs-apiready")) {
                        var l, u = e.find("iframe").attr("id");
                        e.data("vimeoplayer") ? l = e.data("vimeoplayer") : (l = new Vimeo.Player(u), e.data("vimeoplayer", l)), l.getPaused() ? setTimeout(function() {
                            var a = t(e.data("videostartat")),
                                i = e.data("currenttime");
                            i || (i = 0), 1 == e.data("nextslideatend-triggered") && (i = -1, e.data("nextslideatend-triggered", 0)), -1 != a && a > i && l.setCurrentTime(a), l.play()
                        }, 510) : e.data("videoplaywait", setTimeout(function() {
                            !0 !== o.vimeopausecalled && a.playVideo(e, i)
                        }, 50))
                    } else e.data("videoplaywait", setTimeout(function() {
                        !0 !== o.vimeopausecalled && a.playVideo(e, i)
                    }, 50));
                    break;
                case "html5":
                    var p = "html5" == o.audio ? "audio" : "video",
                        v = e.find(p),
                        c = v[0];
                    if (1 != v.parent().data("metaloaded")) d(c, "loadedmetadata", function(e) {
                        a.resetVideo(e, i), c.play();
                        var o = t(e.data("videostartat")),
                            d = c.currentTime;
                        1 == e.data("nextslideatend-triggered") && (d = -1, e.data("nextslideatend-triggered", 0)), -1 != o && o > d && (c.currentTime = o)
                    }(e));
                    else {
                        c.play();
                        var r = t(e.data("videostartat")),
                            n = c.currentTime;
                        1 == e.data("nextslideatend-triggered") && (n = -1, e.data("nextslideatend-triggered", 0)), -1 != r && r > n && (c.currentTime = r)
                    }
            }
        },
        isVideoPlaying: function(e, t) {
            var a = !1;
            return void 0 != t.playingvideos && jQuery.each(t.playingvideos, function(t, i) {
                e.attr("id") == i.attr("id") && (a = !0)
            }), a
        },
        removeMediaFromList: function(e, t) {
            c(e, t)
        },
        prepareCoveredVideo: function(e, t) {
            if (void 0 === t.data("vimeoid") || void 0 !== t.data("vimeoplayerloaded")) {
                var i = {};
                if (i.ifr = t.find("iframe, video"), i.asp = t.data("aspectratio"), i.wa = i.asp.split(":")[0], i.ha = i.asp.split(":")[1], i.vd = i.wa / i.ha, 0 === e.conw || 0 === e.conh) return a.setSize(e), clearTimeout(i.ifr.data("resizelistener")), void i.ifr.data("resizelistener", setTimeout(function() {
                    a.prepareCoveredVideo(e, t)
                }, 100));
                var o = e.conw / e.conh,
                    d = o / i.vd * 100,
                    r = i.vd / o * 100;
                o > i.vd ? punchgs.TweenLite.set(i.ifr, {
                    height: d + "%",
                    width: "100%",
                    top: -(d - 100) / 2 + "%",
                    left: "0px",
                    position: "absolute"
                }) : punchgs.TweenLite.set(i.ifr, {
                    width: r + "%",
                    height: "100%",
                    left: -(r - 100) / 2 + "%",
                    top: "0px",
                    position: "absolute"
                }), i.ifr.hasClass("resizelistener") || (i.ifr.addClass("resizelistener"), jQuery(window).resize(function() {
                    a.prepareCoveredVideo(e, t), clearTimeout(i.ifr.data("resizelistener")), i.ifr.data("resizelistener", setTimeout(function() {
                        a.prepareCoveredVideo(e, t)
                    }, 90))
                }))
            }
        },
        checkVideoApis: function(e, t, a) {
            location.protocol;
            if ((void 0 != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t.youtubeapineeded = !0), (void 0 != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == a.addedyt) {
                t.youtubestarttime = jQuery.now(), a.addedyt = 1;
                var i = document.createElement("script");
                i.src = "https://www.youtube.com/iframe_api";
                var o = document.getElementsByTagName("script")[0],
                    d = !0;
                jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (d = !1)
                }), d && o.parentNode.insertBefore(i, o)
            }
            if ((void 0 != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t.vimeoapineeded = !0), (void 0 != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == a.addedvim) {
                t.vimeostarttime = jQuery.now(), a.addedvim = 1;
                var r = document.createElement("script"),
                    o = document.getElementsByTagName("script")[0],
                    d = !0;
                r.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function() {
                    "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (d = !1)
                }), d && o.parentNode.insertBefore(r, o)
            }
            return a
        },
        manageVideoLayer: function(e, r, n, l) {
            if ("stop" === a.compare_version(o).check) return !1;
            var u = e.data(),
                v = u.videoattributes,
                c = u.ytid,
                g = u.vimeoid,
                m = "auto" === u.videopreload || "canplay" === u.videopreload || "canplaythrough" === u.videopreload || "progress" === u.videopreload ? "auto" : u.videopreload,
                y = u.videomp4,
                f = u.videowebm,
                h = u.videoogv,
                b = u.allowfullscreenvideo,
                w = u.videocontrols,
                T = "http",
                k = "loop" == u.videoloop ? "loop" : "loopandnoslidestop" == u.videoloop ? "loop" : "",
                x = void 0 != y || void 0 != f ? "html5" : void 0 != c && String(c).length > 1 ? "youtube" : void 0 != g && String(g).length > 1 ? "vimeo" : "none",
                V = "html5" == u.audio ? "audio" : "video",
                L = "html5" == x && 0 == e.find(V).length ? "html5" : "youtube" == x && 0 == e.find("iframe").length ? "youtube" : "vimeo" == x && 0 == e.find("iframe").length ? "vimeo" : "none";
            switch (k = !0 === u.nextslideatend ? "" : k, u.videotype = x, L) {
                case "html5":
                    "controls" != w && (w = "");
                    V = "video";
                    "html5" == u.audio && (V = "audio", e.addClass("tp-audio-html5"));
                    var C = "";
                    "video" === V && (a.is_mobile() || a.isSafari11()) && ("on" === u.autoplay || "true" === u.autoplay || !0 === u.autoplay ? C = "muted playsinline autoplay" : 1 != u.videoinline && "true" !== u.videoinline && 1 !== u.videoinline || (C += " playsinline"));
                    var P = "<" + V + " " + C + ' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' + k + ' preload="' + m + '">';
                    "auto" == m && (r.mediapreload = !0), "video" === V ? (void 0 != f && "firefox" == a.get_browser().toLowerCase() && (P = P + '<source src="' + f + '" type="video/webm" />'), void 0 != y && (P = P + '<source src="' + y + '" type="video/mp4" />'), void 0 != h && (P = P + '<source src="' + h + '" type="video/ogg" />')) : "audio" === V && (void 0 != y && (P = P + '<source src="' + y + '" type="audio/mpeg" />'), void 0 != h && (P = P + '<source src="' + h + '" type="audio/ogg" />')), P = P + "</" + V + ">";
                    var I = "";
                    "true" !== b && !0 !== b || (I = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'), "controls" == w && (P = P + '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' + I + "</div>"), e.data("videomarkup", P), e.append(P), (i && 1 == e.data("disablevideoonmobile") || a.isIE(8)) && e.find(V).remove(), e.find(V).each(function(t) {
                        var i = this,
                            o = jQuery(this);
                        o.parent().hasClass("html5vid") || o.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'), 1 != o.parent().data("metaloaded") && d(i, "loadedmetadata", function(e) {
                            p(e, r), a.resetVideo(e, r)
                        }(e))
                    });
                    break;
                case "youtube":
                    T = "https", "none" == w && -1 == (v = v.replace("controls=1", "controls=0")).toLowerCase().indexOf("controls") && (v += "&controls=0"), (!0 === u.videoinline || "true" === u.videoinline || 1 === u.videoinline || e.hasClass("rs-background-video-layer")) && (v += "&playsinline=1");
                    var _ = t(e.data("videostartat")),
                        S = t(e.data("videoendat")); - 1 != _ && (v = v + "&start=" + _), -1 != S && (v = v + "&end=" + S);
                    var j = v.split("origin=" + T + "://"),
                        A = "";
                    j.length > 1 ? (A = j[0] + "origin=" + T + "://", self.location.href.match(/www/gi) && !j[1].match(/www/gi) && (A += "www."), A += j[1]) : A = v;
                    var O = "true" === b || !0 === b ? "allowfullscreen" : "";
                    e.data("videomarkup", '<iframe type="text/html" src="' + T + "://www.youtube.com/embed/" + c + "?" + A + '" ' + O + ' width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>');
                    break;
                case "vimeo":
                    T = "https", e.data("videomarkup", '<iframe src="' + T + "://player.vimeo.com/video/" + g + "?" + v + '" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;100%;height:100%"></iframe>')
            }
            var Q = i && "on" == e.data("noposteronmobile");
            if (void 0 != u.videoposter && u.videoposter.length > 2 && !Q) 0 == e.find(".tp-videoposter").length && e.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' + u.videoposter + '); background-size:cover;background-position:center center;"></div>'), 0 == e.find("iframe").length && e.find(".tp-videoposter").click(function() {
                if (a.playVideo(e, r), i) {
                    if (1 == e.data("disablevideoonmobile")) return !1;
                    punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(e.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    })
                }
            });
            else {
                if (i && 1 == e.data("disablevideoonmobile")) return !1;
                0 != e.find("iframe").length || "youtube" != x && "vimeo" != x || (e.removeData("vimeoplayer"), e.append(e.data("videomarkup")), s(e, r, !1))
            }
            "none" != e.data("dottedoverlay") && void 0 != e.data("dottedoverlay") && 1 != e.find(".tp-dottedoverlay").length && e.append('<div class="tp-dottedoverlay ' + e.data("dottedoverlay") + '"></div>'), e.addClass("HasListener"), 1 == e.data("bgvideo") && punchgs.TweenLite.set(e.find("video, iframe"), {
                autoAlpha: 0
            })
        }
    });
    var d = function(e, t, a) {
            e.addEventListener ? e.addEventListener(t, a, {
                capture: !1,
                passive: !0
            }) : e.attachEvent(t, a, {
                capture: !1,
                passive: !0
            })
        },
        r = function(e, t, a) {
            var i = {};
            return i.video = e, i.videotype = t, i.settings = a, i
        },
        n = function(e, t) {
            if (1 == t.data("bgvideo") || 1 == t.data("forcecover")) {
                1 === t.data("forcecover") && t.removeClass("fullscreenvideo").addClass("coverscreenvideo");
                var i = t.data("aspectratio");
                void 0 === i && i.split(":").length <= 1 && t.data("aspectratio", "16:9"), a.prepareCoveredVideo(e, t)
            }
        },
        s = function(e, o, d) {
            var s = e.data(),
                p = e.find("iframe"),
                g = "iframe" + Math.round(1e5 * Math.random() + 1),
                m = s.videoloop,
                y = "loopandnoslidestop" != m;
            if (m = "loop" == m || "loopandnoslidestop" == m, n(o, e), p.attr("id", g), d && e.data("startvideonow", !0), 1 !== e.data("videolistenerexist")) switch (s.videotype) {
                case "youtube":
                    C = new YT.Player(g, {
                        events: {
                            onStateChange: function(i) {
                                var d = e.closest(".tp-simpleresponsive"),
                                    n = (s.videorate, e.data("videostart"), u());
                                if (i.data == YT.PlayerState.PLAYING) punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(e.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), "mute" == e.data("volume") || a.lastToggleState(e.data("videomutetoggledby")) || !0 === o.globalmute ? C.mute() : (C.unMute(), C.setVolume(parseInt(e.data("volume"), 0) || 75)), o.videoplaying = !0, v(e, o), y ? o.c.trigger("stoptimer") : o.videoplaying = !1, o.c.trigger("revolution.slide.onvideoplay", r(C, "youtube", e.data())), a.toggleState(s.videotoggledby);
                                else {
                                    if (0 == i.data && m) {
                                        var p = t(e.data("videostartat")); - 1 != p && C.seekTo(p), C.playVideo(), a.toggleState(s.videotoggledby)
                                    }
                                    n || 0 != i.data && 2 != i.data || !("on" == e.data("showcoveronpause") && e.find(".tp-videoposter").length > 0 || 1 === e.data("bgvideo") && e.find(".rs-fullvideo-cover").length > 0) || (1 === e.data("bgvideo") ? punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"), .1, {
                                        autoAlpha: 1,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }) : punchgs.TweenLite.to(e.find(".tp-videoposter"), .1, {
                                        autoAlpha: 1,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }), punchgs.TweenLite.to(e.find("iframe"), .1, {
                                        autoAlpha: 0,
                                        ease: punchgs.Power3.easeInOut
                                    })), -1 != i.data && 3 != i.data && (o.videoplaying = !1, o.tonpause = !1, c(e, o), d.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(C, "youtube", e.data())), void 0 != o.currentLayerVideoIsPlaying && o.currentLayerVideoIsPlaying.attr("id") != e.attr("id") || a.unToggleState(s.videotoggledby)), 0 == i.data && 1 == e.data("nextslideatend") ? (l(), e.data("nextslideatend-triggered", 1), o.c.revnext(), c(e, o)) : (c(e, o), o.videoplaying = !1, d.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(C, "youtube", e.data())), void 0 != o.currentLayerVideoIsPlaying && o.currentLayerVideoIsPlaying.attr("id") != e.attr("id") || a.unToggleState(s.videotoggledby))
                                }
                            },
                            onReady: function(o) {
                                var d, r = a.is_mobile(),
                                    n = e.hasClass("tp-videolayer");
                                if (r || a.isSafari11()) {
                                    var l = n && "off" !== e.data("autoplay");
                                    (e.hasClass("rs-background-video-layer") || l) && (r && n || (d = !0, C.setVolume(0), e.data("volume", "mute"), C.mute(), clearTimeout(e.data("mobilevideotimr")), e.data("mobilevideotimr", setTimeout(function() {
                                        C.playVideo()
                                    }, 500))))
                                }
                                d || "mute" != e.data("volume") || (C.setVolume(0), C.mute());
                                var u = s.videorate;
                                e.data("videostart");
                                if (e.addClass("rs-apiready"), void 0 != u && o.target.setPlaybackRate(parseFloat(u)), e.find(".tp-videoposter").unbind("click"), e.find(".tp-videoposter").click(function() {
                                        i || C.playVideo()
                                    }), e.data("startvideonow")) {
                                    s.player.playVideo();
                                    var p = t(e.data("videostartat")); - 1 != p && s.player.seekTo(p)
                                }
                                e.data("videolistenerexist", 1)
                            }
                        }
                    });
                    e.data("player", C);
                    break;
                case "vimeo":
                    for (var f, h = p.attr("src"), b = {}, w = h, T = /([^&=]+)=([^&]*)/g; f = T.exec(w);) b[decodeURIComponent(f[1])] = decodeURIComponent(f[2]);
                    h = (h = void 0 != b.player_id ? h.replace(b.player_id, g) : h + "&player_id=" + g).replace(/&api=0|&api=1/g, "");
                    var k = a.is_mobile(),
                        x = k || a.isSafari11(),
                        V = e.hasClass("rs-background-video-layer");
                    x && V && (h += "&background=1"), p.attr("src", h);
                    var L, C = e.find("iframe")[0];
                    jQuery("#" + g);
                    if (e.data("vimeoplayer") ? L = e.data("vimeoplayer") : (L = new Vimeo.Player(g), e.data("vimeoplayer", L)), x) {
                        var P;
                        if (V) P = !0;
                        else {
                            var I = e.data("autoplay");
                            "on" !== I && "true" !== I && !0 !== I || (k && e.data("autoplay", !1), P = !0)
                        }
                        P && (L.setVolume(0), e.data("volume", "mute"))
                    }
                    L.on("loaded", function(t) {
                        var a = {};
                        L.getVideoWidth().then(function(t) {
                            a.width = t, void 0 !== a.width && void 0 !== a.height && (e.data("aspectratio", a.width + ":" + a.height), e.data("vimeoplayerloaded", !0), n(o, e))
                        }), L.getVideoHeight().then(function(t) {
                            a.height = t, void 0 !== a.width && void 0 !== a.height && (e.data("aspectratio", a.width + ":" + a.height), e.data("vimeoplayerloaded", !0), n(o, e))
                        })
                    }), e.addClass("rs-apiready"), L.on("play", function(t) {
                        e.data("nextslidecalled", 0), punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), punchgs.TweenLite.to(e.find("iframe"), .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        }), o.c.trigger("revolution.slide.onvideoplay", r(L, "vimeo", e.data())), o.videoplaying = !0, v(e, o), y ? o.c.trigger("stoptimer") : o.videoplaying = !1, "mute" == e.data("volume") || a.lastToggleState(e.data("videomutetoggledby")) || !0 === o.globalmute ? L.setVolume(0) : L.setVolume(parseInt(e.data("volume"), 0) / 100 || .75), a.toggleState(s.videotoggledby)
                    }), L.on("timeupdate", function(a) {
                        var i = t(e.data("videoendat"));
                        if (e.data("currenttime", a.seconds), 0 != i && Math.abs(i - a.seconds) < 1 && i > a.seconds && 1 != e.data("nextslidecalled"))
                            if (m) {
                                L.play();
                                var d = t(e.data("videostartat")); - 1 != d && L.setCurrentTime(d)
                            } else 1 == e.data("nextslideatend") && (e.data("nextslideatend-triggered", 1), e.data("nextslidecalled", 1), o.c.revnext()), L.pause()
                    }), L.on("ended", function(t) {
                        c(e, o), o.videoplaying = !1, o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(L, "vimeo", e.data())), 1 == e.data("nextslideatend") && (e.data("nextslideatend-triggered", 1), o.c.revnext()), void 0 != o.currentLayerVideoIsPlaying && o.currentLayerVideoIsPlaying.attr("id") != e.attr("id") || a.unToggleState(s.videotoggledby)
                    }), L.on("pause", function(t) {
                        ("on" == e.data("showcoveronpause") && e.find(".tp-videoposter").length > 0 || 1 === e.data("bgvideo") && e.find(".rs-fullvideo-cover").length > 0) && (1 === e.data("bgvideo") ? punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"), .1, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }) : punchgs.TweenLite.to(e.find(".tp-videoposter"), .1, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), punchgs.TweenLite.to(e.find("iframe"), .1, {
                            autoAlpha: 0,
                            ease: punchgs.Power3.easeInOut
                        })), o.videoplaying = !1, o.tonpause = !1, c(e, o), o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(L, "vimeo", e.data())), void 0 != o.currentLayerVideoIsPlaying && o.currentLayerVideoIsPlaying.attr("id") != e.attr("id") || a.unToggleState(s.videotoggledby)
                    }), e.find(".tp-videoposter").unbind("click"), e.find(".tp-videoposter").click(function() {
                        if (!i) return L.play(), !1
                    }), e.data("startvideonow") && (L.play(), -1 != (_ = t(e.data("videostartat"))) && L.setCurrentTime(_)), e.data("videolistenerexist", 1)
            } else {
                var _ = t(e.data("videostartat"));
                switch (s.videotype) {
                    case "youtube":
                        d && (s.player.playVideo(), -1 != _ && s.player.seekTo());
                        break;
                    case "vimeo":
                        d && ((L = e.data("vimeoplayer")).play(), -1 != _ && L.seekTo(_))
                }
            }
        },
        l = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        },
        u = function() {
            try {
                if (void 0 !== window.fullScreen) return window.fullScreen;
                var e = 5;
                return jQuery.browser.webkit && /Apple Computer/.test(navigator.vendor) && (e = 42), screen.width == window.innerWidth && Math.abs(screen.height - window.innerHeight) < e
            } catch (e) {}
        },
        p = function(e, o, n) {
            if (i && 1 == e.data("disablevideoonmobile")) return !1;
            var s = e.data(),
                p = "html5" == s.audio ? "audio" : "video",
                g = e.find(p),
                m = g[0],
                y = g.parent(),
                f = s.videoloop,
                h = "loopandnoslidestop" != f;
            if (f = "loop" == f || "loopandnoslidestop" == f, y.data("metaloaded", 1), 1 != e.data("bgvideo") || "none" !== s.videoloop && !1 !== s.videoloop || (h = !1), void 0 == g.attr("control") && (0 != e.find(".tp-video-play-button").length || i || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), e.find("video, .tp-poster, .tp-video-play-button").click(function() {
                    e.hasClass("videoisplaying") ? m.pause() : m.play()
                })), 1 == e.data("forcecover") || e.hasClass("fullscreenvideo") || 1 == e.data("bgvideo"))
                if (1 == e.data("forcecover") || 1 == e.data("bgvideo")) {
                    y.addClass("fullcoveredvideo");
                    var b = e.data("aspectratio");
                    void 0 !== b && 1 != b.split(":").length || e.data("aspectratio", "16:9"), a.prepareCoveredVideo(o, e)
                } else y.addClass("fullscreenvideo");
            var w = e.find(".tp-vid-play-pause")[0],
                T = e.find(".tp-vid-mute")[0],
                k = e.find(".tp-vid-full-screen")[0],
                x = e.find(".tp-seek-bar")[0],
                V = e.find(".tp-volume-bar")[0];
            void 0 != w && d(w, "click", function() {
                1 == m.paused ? m.play() : m.pause()
            }), void 0 != T && d(T, "click", function() {
                0 == m.muted ? (m.muted = !0, T.innerHTML = "Unmute") : (m.muted = !1, T.innerHTML = "Mute")
            }), void 0 != k && k && d(k, "click", function() {
                m.requestFullscreen ? m.requestFullscreen() : m.mozRequestFullScreen ? m.mozRequestFullScreen() : m.webkitRequestFullscreen && m.webkitRequestFullscreen()
            }), void 0 != x && (d(x, "change", function() {
                var e = m.duration * (x.value / 100);
                m.currentTime = e
            }), d(x, "mousedown", function() {
                e.addClass("seekbardragged"), m.pause()
            }), d(x, "mouseup", function() {
                e.removeClass("seekbardragged"), m.play()
            })), d(m, "canplaythrough", function() {
                a.preLoadAudioDone(e, o, "canplaythrough")
            }), d(m, "canplay", function() {
                a.preLoadAudioDone(e, o, "canplay")
            }), d(m, "progress", function() {
                a.preLoadAudioDone(e, o, "progress")
            }), d(m, "timeupdate", function() {
                var a = 100 / m.duration * m.currentTime,
                    i = t(e.data("videoendat")),
                    d = m.currentTime;
                if (void 0 != x && (x.value = a), 0 != i && -1 != i && Math.abs(i - d) <= .3 && i > d && 1 != e.data("nextslidecalled"))
                    if (f) {
                        m.play();
                        var r = t(e.data("videostartat")); - 1 != r && (m.currentTime = r)
                    } else 1 == e.data("nextslideatend") && (e.data("nextslideatend-triggered", 1), e.data("nextslidecalled", 1), o.just_called_nextslide_at_htmltimer = !0, o.c.revnext(), setTimeout(function() {
                        o.just_called_nextslide_at_htmltimer = !1
                    }, 1e3)), m.pause()
            }), void 0 != V && d(V, "change", function() {
                m.volume = V.value
            }), d(m, "play", function() {
                e.data("nextslidecalled", 0);
                var t = e.data("volume");
                t = void 0 != t && "mute" != t ? parseFloat(t) / 100 : t, a.is_mobile() || a.isSafari11() || (!0 === o.globalmute ? m.muted = !0 : m.muted = !1, t > 1 && (t /= 100), "mute" == t ? m.muted = !0 : void 0 != t && (m.volume = t)), e.addClass("videoisplaying");
                var i = "html5" == s.audio ? "audio" : "video";
                v(e, o), h && "audio" != i ? (o.videoplaying = !0, o.c.trigger("stoptimer"), o.c.trigger("revolution.slide.onvideoplay", r(m, "html5", s))) : (o.videoplaying = !1, "audio" != i && o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(m, "html5", s))), punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(e.find(i), .3, {
                    autoAlpha: 1,
                    display: "block",
                    ease: punchgs.Power3.easeInOut
                });
                var d = e.find(".tp-vid-play-pause")[0],
                    n = e.find(".tp-vid-mute")[0];
                void 0 != d && (d.innerHTML = "Pause"), void 0 != n && m.muted && (n.innerHTML = "Unmute"), a.toggleState(s.videotoggledby)
            }), d(m, "pause", function(t) {
                var i = "html5" == s.audio ? "audio" : "video";
                !u() && e.find(".tp-videoposter").length > 0 && "on" == e.data("showcoveronpause") && !e.hasClass("seekbardragged") && (punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(e.find(i), .3, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut
                })), e.removeClass("videoisplaying"), o.videoplaying = !1, c(e, o), "audio" != i && o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(m, "html5", e.data()));
                var d = e.find(".tp-vid-play-pause")[0];
                void 0 != d && (d.innerHTML = "Play"), void 0 != o.currentLayerVideoIsPlaying && o.currentLayerVideoIsPlaying.attr("id") != e.attr("id") || a.unToggleState(s.videotoggledby)
            }), d(m, "ended", function() {
                l(), c(e, o), o.videoplaying = !1, c(e, o), "audio" != p && o.c.trigger("starttimer"), o.c.trigger("revolution.slide.onvideostop", r(m, "html5", e.data())), !0 === e.data("nextslideatend") && m.currentTime > 0 && (1 == !o.just_called_nextslide_at_htmltimer && (e.data("nextslideatend-triggered", 1), o.c.revnext(), o.just_called_nextslide_at_htmltimer = !0), setTimeout(function() {
                    o.just_called_nextslide_at_htmltimer = !1
                }, 1500)), e.removeClass("videoisplaying")
            })
        },
        v = function(e, t) {
            void 0 == t.playingvideos && (t.playingvideos = new Array), e.data("stopallvideos") && void 0 != t.playingvideos && t.playingvideos.length > 0 && (t.lastplayedvideos = jQuery.extend(!0, [], t.playingvideos), jQuery.each(t.playingvideos, function(e, i) {
                a.stopVideo(i, t)
            })), t.playingvideos.push(e), t.currentLayerVideoIsPlaying = e
        },
        c = function(e, t) {
            void 0 != t.playingvideos && jQuery.inArray(e, t.playingvideos) >= 0 && t.playingvideos.splice(jQuery.inArray(e, t.playingvideos), 1)
        }
}(jQuery);
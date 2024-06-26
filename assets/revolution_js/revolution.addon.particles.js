(function() {
    function B(f, k) {
        for (var g, m = f.length; m--;) g = f[m].replace("#", ""), g = "rgba(" + parseInt(g.substring(0, 2), 16) + "," + parseInt(g.substring(2, 4), 16) + "," + parseInt(g.substring(4, 6), 16), g = k ? g + ("," + k.toFixed(2) + ")") : g + ")", f[m] = g;
        return f
    }

    function t(f) {
        f = f.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(f, g, m, l) {
            return g + g + m + m + l + l
        });
        return (f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f)) ? {
            r: parseInt(f[1], 16),
            g: parseInt(f[2], 16),
            b: parseInt(f[3], 16)
        } : null
    }
    window.RsParticlesAddOn = function(f) {
        function k(a,
            b) {
            clearTimeout(y);
            clearTimeout(e);
            var c = b ? b.nextslide.index() + 1 : 1;
            "first" === p && (p = 1);
            "last" === n && (n = f.revmaxslide());
            c >= p && c <= n ? (u = "." + r + "-tp-particles-" + c, v ? w || pJSDomRs[x].pJS.fn.vendors.draw() : (v = !0, x = pJSDomRs.length, particlesJSRs(u, l, r, q, f)), y = setTimeout(m, 100), w = !0) : v && (rspCancelAnimFrame(pJSDomRs[x].pJS.fn.drawAnimFrame), document.getElementById(q).style.opacity = 0, w = !1);
            z || (z = !0, f.on("revolution.slide.onbeforeswap", k))
        }

        function g() {
            document.getElementById(q).style.opacity = 1
        }

        function m() {
            var a =
                document.getElementById(q),
                b = document.querySelector(u);
            A ? b.appendChild(a) : A = !0;
            a.style.zIndex = parseInt(b.getAttribute("data-particles-index"), 10);
            e = setTimeout(g, 250)
        }
        if (f) {
            var l = f[0].opt.particles,
                p = l.startSlide,
                n = l.endSlide,
                a = l.particles,
                b = a.line_linked,
                c = a.shape,
                d = a.color,
                h = c.stroke,
                a = h.width,
                r = f[0].id,
                z, e, y, w, x, u, v, A, q;
            q = r + "-rs-particles";
            d.value = d.value.split(",");
            h.color = a ? B(h.color.split(","), h.opacity) : h.color.split(",");
            d = l.interactivity.events.onhover;
            if (b.enable || d.enable && "grab" === d.mode)
                for (b =
                    b.color = b.color.split(","), d = b.length; d--;) b[d] = t(b[d]);
            "image" === c.type && (c = c.image, c.src = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="{{viewbox}}"><path fill="#ffffff" stroke="{{stroke-color}}" stroke-width="{{stroke-width}}" d="' + c.src + '"></path></svg>', a ? (b = 2 * a + 24, c.src = c.src.replace("{{stroke-width}}", a).replace("{{viewbox}}", -a + " " + -a + " " + b + " " + b)) : c.src = c.src.replace("{{viewbox}}", "0 0 24 24").replace("{{stroke-width}}", 0));
            f.one("revolution.slide.onchange", function() {
                var a,
                    b = l.zIndex,
                    c = r + "-tp-particles-",
                    d = l.interactivity.events,
                    d = d.onhover.enable || d.onclick.enable;
                f.find(".tp-revslider-slidesli").each(function(e) {
                    if (d) {
                        var h = jQuery(this);
                        h.find(".slidelink").length ? (a = !0, "back" !== h.data("slideindex") && (b = 999), this.className += " rs-particles-slidelink") : this.className += " rs-particles-interactive"
                    }
                    this.className = this.className + " " + c + (e + 1);
                    this.setAttribute("data-particles-index", b)
                });
                if (a) jQuery("body").off("click.rsparticles").on("click.rsparticles", ".rs-particles-canvas",
                    function() {
                        var a = jQuery(this).prev(".tp-parallax-wrap").find(".slidelink a");
                        a.length && (a[0].href ? "_blank" !== a[0].target ? window.location = a[0].href : window.open(a[0].href) : a.click())
                    });
                k(!1, !1)
            })
        }
    };
    window.RsDestroyParticles = function(f) {
        if (pJSDomRs)
            if (f) {
                var k = f[0].id,
                    g = pJSDomRs.length;
                f.off("revolution.slide.onbeforeswap revolution.slide.onloaded .rsparticles");
                for (f = 0; f < g; f++)
                    if (PJSDomRs[f].tpId === k) {
                        pJSDomRs[f].pJS.fn.vendors.destroypJS();
                        pJSDomRs.splice(f, 1);
                        break
                    }
            } else
                for (; pJSDomRs.length;) jQuery("#" +
                    PJSDomRs[0].tpId).off("revolution.slide.onbeforeswap revolution.slide.onloaded .rsparticles"), pJSDomRs[0].pJS.fn.vendors.destroypJS(), pJSDomRs.shift()
    };
    var C = function(f, k, g, m, l) {
        function p(b, c, d, h, f, g, e, k) {
            h != f && (a.tmp.bubble_duration_end ? void 0 != g && (c = h + (h - (e - d * (e - h) / a.interactivity.modes.bubble.duration)), "size" == k && (b.radius_bubble = c), "opacity" == k && (b.opacity_bubble = c)) : c <= a.interactivity.modes.bubble.distance ? (void 0 != g ? g : e) != h && (c = e - d * (e - h) / a.interactivity.modes.bubble.duration, "size" == k && (b.radius_bubble =
                c), "opacity" == k && (b.opacity_bubble = c)) : ("size" == k && (b.radius_bubble = void 0), "opacity" == k && (b.opacity_bubble = void 0)))
        }

        function n() {
            return this.color.rgb ? "rgba(" + this.color.rgb.r + "," + this.color.rgb.g + "," + this.color.rgb.b + "," + this.opacity.toFixed(2) + ")" : "hsla(" + this.color.hsl.h + "," + this.color.hsl.s + "%," + this.color.hsl.l + "%," + this.opacity.toFixed(2) + ")"
        }
        this.tpId = m;
        var a = this.pJS = {
            canvas: {
                el: f,
                w: f.offsetWidth,
                h: f.offsetHeight
            },
            particles: {
                number: {
                    value: 400,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#fff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#ff0000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: !1,
                    min: .1,
                    anim: {
                        enable: !1,
                        speed: 2,
                        opacity_min: 0,
                        sync: !1
                    }
                },
                size: {
                    value: 20,
                    random: !1,
                    min: 1,
                    anim: {
                        enable: !1,
                        speed: 20,
                        size_min: 0,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !1,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !1,
                    min_speed: 1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 3E3,
                        rotateY: 3E3
                    }
                },
                array: []
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 80,
                        duration: .4
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                },
                mouse: {}
            },
            retina_detect: !1,
            offset: l.offset(),
            fn: {
                interact: {},
                modes: {},
                vendors: {}
            },
            tmp: {}
        };
        g && Object.deepExtend(a, g);
        this.size_value = a.particles.size.value;
        a.tmp.obj = {
            size_value: a.particles.size.value,
            size_anim_speed: a.particles.size.anim.speed,
            move_speed: a.particles.move.speed,
            line_linked_distance: a.particles.line_linked.distance,
            line_linked_width: a.particles.line_linked.width,
            mode_grab_distance: a.interactivity.modes.grab.distance,
            mode_bubble_distance: a.interactivity.modes.bubble.distance,
            mode_bubble_size: a.interactivity.modes.bubble.size,
            mode_repulse_distance: a.interactivity.modes.repulse.distance
        };
        a.tmp.count_svg = 0;
        a.fn.retinaInit = function() {
            a.retina_detect && 1 < window.devicePixelRatio ? (a.canvas.pxratio = window.devicePixelRatio, a.tmp.retina = !0) : (a.canvas.pxratio = 1, a.tmp.retina = !1);
            a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio;
            a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio;
            a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio;
            a.particles.size.anim.speed = a.tmp.obj.size_anim_speed * a.canvas.pxratio;
            a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio;
            a.particles.line_linked.distance = a.tmp.obj.line_linked_distance * a.canvas.pxratio;
            a.interactivity.modes.grab.distance = a.tmp.obj.mode_grab_distance * a.canvas.pxratio;
            a.interactivity.modes.bubble.distance = a.tmp.obj.mode_bubble_distance * a.canvas.pxratio;
            a.particles.line_linked.width = a.tmp.obj.line_linked_width * a.canvas.pxratio;
            a.interactivity.modes.bubble.size = a.tmp.obj.mode_bubble_size * a.canvas.pxratio;
            a.interactivity.modes.repulse.distance = a.tmp.obj.mode_repulse_distance * a.canvas.pxratio
        };
        a.fn.canvasInit = function() {
            a.canvas.ctx = a.canvas.el.getContext("2d")
        };
        a.fn.canvasSize = function() {
            a.canvas.el.width = a.canvas.w;
            a.canvas.el.height = a.canvas.h;
            a && a.interactivity.events.resize &&
                window.addEventListener("resize", function() {
                    a.interactivity.offset = l.offset();
                    a.canvas.w = a.canvas.el.offsetWidth;
                    a.canvas.h = a.canvas.el.offsetHeight;
                    a.tmp.retina && (a.canvas.w *= a.canvas.pxratio, a.canvas.h *= a.canvas.pxratio);
                    a.canvas.el.width = a.canvas.w;
                    a.canvas.el.height = a.canvas.h;
                    a.particles.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles());
                    a.fn.vendors.densityAutoParticles()
                })
        };
        a.fn.canvasPaint = function() {
            a.canvas.ctx.fillRect(0,
                0, a.canvas.w, a.canvas.h)
        };
        a.fn.canvasClear = function() {
            a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h)
        };
        a.fn.particle = function(b, c, d) {
            c = a.particles.size.value;
            if (a.particles.size.random) {
                var h = a.particles.size.min;
                c = Math.random() * (c - h) + h;
                0 === c && (c = 1)
            }
            this.osize = this.radius = c;
            a.particles.size.anim.enable && (this.size_status = !1, this.vs = a.particles.size.anim.speed / 100, a.particles.size.anim.sync || (this.vs *= Math.random()));
            this.x = d ? d.x : Math.random() * a.canvas.w;
            this.y = d ? d.y : Math.random() * a.canvas.h;
            this.x >
                a.canvas.w - 2 * this.radius ? this.x -= this.radius : this.x < 2 * this.radius && (this.x += this.radius);
            this.y > a.canvas.h - 2 * this.radius ? this.y -= this.radius : this.y < 2 * this.radius && (this.y += this.radius);
            a.particles.move.bounce && a.fn.vendors.checkOverlap(this, d);
            d = a.particles.move.speed;
            c = a.particles.move.min_speed;
            a.particles.move.random && (d = Math.round(Math.random() * (d - c) + c), 1 > d && (d = 1));
            this.spd = d;
            this.color = {};
            "object" == typeof b.value ? b.value instanceof Array ? this.color.rgb = t(b.value[Math.floor(Math.random() * a.particles.color.value.length)]) :
                (void 0 != b.value.r && void 0 != b.value.g && void 0 != b.value.b && (this.color.rgb = {
                    r: b.value.r,
                    g: b.value.g,
                    b: b.value.b
                }), void 0 != b.value.h && void 0 != b.value.s && void 0 != b.value.l && (this.color.hsl = {
                    h: b.value.h,
                    s: b.value.s,
                    l: b.value.l
                })) : "random" == b.value ? this.color.rgb = {
                    r: Math.floor(256 * Math.random()) + 0,
                    g: Math.floor(256 * Math.random()) + 0,
                    b: Math.floor(256 * Math.random()) + 0
                } : "string" == typeof b.value && (this.color = b, this.color.rgb = t(this.color.value));
            b = a.particles.shape.stroke.color;
            this.strokeColor = b[Math.floor(Math.random() *
                b.length)];
            b = a.particles.line_linked.color;
            this.lineColor = b[Math.floor(Math.random() * b.length)];
            b = a.particles.opacity.value;
            d = a.particles.opacity.min;
            a.particles.opacity.random && (b = Math.random() * (b - d) + d);
            this.opacity = this.opc = b;
            a.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = a.particles.opacity.anim.speed / 100, a.particles.opacity.anim.sync || (this.vo *= Math.random()));
            switch (a.particles.move.direction) {
                case "top":
                    b = 0;
                    d = -1;
                    break;
                case "top-right":
                    b = .5;
                    d = -.5;
                    break;
                case "right":
                    b = 1;
                    d = -0;
                    break;
                case "bottom-right":
                    d = b = .5;
                    break;
                case "bottom":
                    b = 0;
                    d = 1;
                    break;
                case "bottom-left":
                    b = -.5;
                    d = 1;
                    break;
                case "left":
                    b = -1;
                    d = 0;
                    break;
                case "top-left":
                    d = b = -.5;
                    break;
                default:
                    d = b = 0
            }
            a.particles.move.straight ? (this.vx = b, this.vy = d) : (this.vx = b + Math.random() - .5, this.vy = d + Math.random() - .5);
            this.vx_i = this.vx;
            this.vy_i = this.vy;
            b = a.particles.shape.type;
            "object" == typeof b ? b instanceof Array && (this.shape = b[Math.floor(Math.random() * b.length)]) : this.shape = b;
            "image" == this.shape && (b = a.particles.shape, this.img = {
                src: b.image.src,
                ratio: b.image.width / b.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == a.tmp.img_type && void 0 != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1)))
        };
        a.fn.particle.prototype.drawSVG = function(b, c) {
            a.canvas.ctx.drawImage(b, this.x - c, this.y - c, 2 * c, 2 * c / this.img.ratio)
        };
        a.fn.particle.prototype.draw = function() {
            var b, c, d;
            c = void 0 != this.radius_bubble ? this.radius_bubble : this.radius;
            d = void 0 != this.opacity_bubble ? this.opacity_bubble : this.opacity;
            a.canvas.ctx.fillStyle =
                this.color.rgb ? "rgba(" + this.color.rgb.r + "," + this.color.rgb.g + "," + this.color.rgb.b + "," + d + ")" : "hsla(" + this.color.hsl.h + "," + this.color.hsl.s + "%," + this.color.hsl.l + "%," + d + ")";
            a.canvas.ctx.beginPath();
            switch (this.shape) {
                case "circle":
                    a.canvas.ctx.arc(this.x, this.y, c, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    a.canvas.ctx.rect(this.x - c, this.y - c, 2 * c, 2 * c);
                    break;
                case "triangle":
                    a.fn.vendors.drawShape(a.canvas.ctx, this.x - c, this.y + c / 1.66, 2 * c, 3, 2);
                    break;
                case "polygon":
                    a.fn.vendors.drawShape(a.canvas.ctx, this.x - c / (a.particles.shape.polygon.nb_sides /
                        3.5), this.y - c / .76, 2.66 * c / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    a.fn.vendors.drawShape(a.canvas.ctx, this.x - 2 * c / (a.particles.shape.polygon.nb_sides / 4), this.y - c / 1.52, 5.32 * c / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    a.canvas.ctx.globalAlpha = d, (b = "svg" == a.tmp.img_type ? this.img.obj : a.tmp.img_obj) && this.drawSVG(b, c), a.canvas.ctx.globalAlpha = 1, b = !0
            }
            a.canvas.ctx.closePath();
            b || (0 < a.particles.shape.stroke.width &&
                (a.canvas.ctx.strokeStyle = this.strokeColor, a.canvas.ctx.lineWidth = a.particles.shape.stroke.width, a.canvas.ctx.stroke()), a.canvas.ctx.fill())
        };
        a.fn.particlesCreate = function() {
            for (var b = a.particles.number.value, c = a.particles.array, d = 0; d < b; d++) c[c.length] = new a.fn.particle(a.particles.color, a.particles.opacity.value)
        };
        a.fn.particlesUpdate = function() {
            for (var b, c, d, h, f = a.particles.array.length, g = 0; g < f; g++) {
                var e = a.particles.array[g];
                a.particles.move.enable && (b = e.spd / 2, e.x += e.vx * b, e.y += e.vy * b);
                a.particles.opacity.anim.enable &&
                    (1 == e.opacity_status ? (e.opacity >= e.opc && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= a.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), 0 > e.opacity && (e.opacity = 0));
                a.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= a.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= a.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), 0 > e.radius && (e.radius = 0));
                "bounce" == a.particles.move.out_mode ? (b = e.radius, c = a.canvas.w, d = e.radius, h = a.canvas.h) :
                    (b = -e.radius, c = a.canvas.w + e.radius, d = -e.radius, h = a.canvas.h + e.radius);
                e.x - e.radius > a.canvas.w ? (e.x = b, e.y = Math.random() * a.canvas.h) : 0 > e.x + e.radius && (e.x = c, e.y = Math.random() * a.canvas.h);
                e.y - e.radius > a.canvas.h ? (e.y = d, e.x = Math.random() * a.canvas.w) : 0 > e.y + e.radius && (e.y = h, e.x = Math.random() * a.canvas.w);
                switch (a.particles.move.out_mode) {
                    case "bounce":
                        e.x + e.radius > a.canvas.w ? e.vx = -e.vx : 0 > e.x - e.radius && (e.vx = -e.vx), e.y + e.radius > a.canvas.h ? e.vy = -e.vy : 0 > e.y - e.radius && (e.vy = -e.vy)
                } - 1 < a.interactivity.events.onhover.mode.indexOf("grab") &&
                    a.fn.modes.grabParticle(e);
                (-1 < a.interactivity.events.onhover.mode.indexOf("bubble") || -1 < a.interactivity.events.onclick.mode.indexOf("bubble")) && a.fn.modes.bubbleParticle(e);
                (-1 < a.interactivity.events.onhover.mode.indexOf("repulse") || -1 < a.interactivity.events.onclick.mode.indexOf("repulse")) && a.fn.modes.repulseParticle(e);
                if (a.particles.line_linked.enable || a.particles.move.attract.enable)
                    for (b = a.particles.array.length, c = g + 1; c < b; c++) d = a.particles.array[c], a.particles.line_linked.enable && a.fn.interact.linkParticles(e,
                        d), a.particles.move.attract.enable && a.fn.interact.attractParticles(e, d), a.particles.move.bounce && a.fn.interact.bounceParticles(e, d)
            }
        };
        a.fn.particlesDraw = function() {
            a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h);
            a.fn.particlesUpdate();
            for (var b = a.particles.array.length, c = 0; c < b; c++) a.particles.array[c].draw()
        };
        a.fn.particlesEmpty = function() {
            a.particles.array = []
        };
        a.fn.particlesRefresh = function() {
            rspCancelAnimFrame(a.fn.checkAnimFrame);
            rspCancelAnimFrame(a.fn.drawAnimFrame);
            a.tmp.source_svg = void 0;
            a.tmp.img_obj = void 0;
            a.tmp.count_svg = 0;
            a.fn.particlesEmpty();
            a.fn.canvasClear();
            a.fn.vendors.start()
        };
        a.fn.interact.linkParticles = function(b, c) {
            var d = b.x - c.x,
                h = b.y - c.y,
                d = Math.sqrt(d * d + h * h);
            d <= a.particles.line_linked.distance && (d = a.particles.line_linked.opacity - d / (1 / a.particles.line_linked.opacity) / a.particles.line_linked.distance, 0 < d && (h = b.lineColor, a.canvas.ctx.strokeStyle = "rgba(" + h.r + "," + h.g + "," + h.b + "," + d + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(b.x,
                b.y), a.canvas.ctx.lineTo(c.x, c.y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()))
        };
        a.fn.interact.attractParticles = function(b, c) {
            var d = b.x - c.x,
                h = b.y - c.y;
            Math.sqrt(d * d + h * h) <= a.particles.line_linked.distance && (d /= 1E3 * a.particles.move.attract.rotateX, h /= 1E3 * a.particles.move.attract.rotateY, b.vx -= d, b.vy -= h, c.vx += d, c.vy += h)
        };
        a.fn.interact.bounceParticles = function(a, c) {
            var b = a.x - c.x,
                h = a.y - c.y;
            Math.sqrt(b * b + h * h) <= a.radius + c.radius && (a.vx = -a.vx, a.vy = -a.vy, c.vx = -c.vx, c.vy = -c.vy)
        };
        a.fn.modes.pushParticles =
            function(b, c) {
                b |= 0;
                a.tmp.pushing = !0;
                for (var d = 0; d < b; d++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value, {
                    x: c ? c.pos_x : Math.random() * a.canvas.w,
                    y: c ? c.pos_y : Math.random() * a.canvas.h
                }));
                a.particles.move.enable || a.fn.particlesDraw();
                a.tmp.pushing = !1
            };
        a.fn.modes.removeParticles = function(b) {
            a.particles.array.splice(0, b);
            a.particles.move.enable || a.fn.particlesDraw()
        };
        a.fn.modes.bubbleParticle = function(b) {
            if (a.interactivity.events.onhover.enable && -1 < a.interactivity.events.onhover.mode.indexOf("bubble")) {
                var c =
                    b.x - a.interactivity.mouse.pos_x,
                    d = b.y - a.interactivity.mouse.pos_y,
                    c = Math.sqrt(c * c + d * d),
                    d = 1 - c / a.interactivity.modes.bubble.distance;
                c <= a.interactivity.modes.bubble.distance ? 0 <= d && "mousemove" == a.interactivity.status && (a.interactivity.modes.bubble.size != b.radius && (a.interactivity.modes.bubble.size > b.radius ? (c = b.radius + a.interactivity.modes.bubble.size * d, 0 <= c && (b.radius_bubble = c)) : (c = b.radius - (b.radius - a.interactivity.modes.bubble.size) * d, b.radius_bubble = 0 < c ? c : 0)), a.interactivity.modes.bubble.opacity !=
                    b.opc && (a.interactivity.modes.bubble.opacity > b.opc ? (c = a.interactivity.modes.bubble.opacity * d, c > b.opacity && c <= a.interactivity.modes.bubble.opacity && (b.opacity_bubble = c)) : (c = b.opacity - (b.opc - a.interactivity.modes.bubble.opacity) * d, c < b.opacity && c >= a.interactivity.modes.bubble.opacity && (b.opacity_bubble = c)))) : (b.opacity_bubble = b.opacity, b.radius_bubble = b.radius);
                "mouseleave" == a.interactivity.status && (b.opacity_bubble = b.opacity, b.radius_bubble = b.radius)
            } else a.interactivity.events.onclick.enable && -1 < a.interactivity.events.onclick.mode.indexOf("bubble") &&
                (a.tmp.bubble_clicking && (c = b.x - a.interactivity.mouse.click_pos_x, d = b.y - a.interactivity.mouse.click_pos_y, c = Math.sqrt(c * c + d * d), d = ((new Date).getTime() - a.interactivity.mouse.click_time) / 1E3, d > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), d > 2 * a.interactivity.modes.bubble.duration && (a.tmp.bubble_clicking = !1, a.tmp.bubble_duration_end = !1)), a.tmp.bubble_clicking && (p(b, c, d, a.interactivity.modes.bubble.size, b.osize, b.radius_bubble, b.radius, "size"), p(b, c, d, a.interactivity.modes.bubble.opacity,
                    b.opc, b.opacity_bubble, b.opacity, "opacity")))
        };
        a.fn.modes.repulseParticle = function(b) {
            var c, d;
            if (a.interactivity.events.onhover.enable && -1 < a.interactivity.events.onhover.mode.indexOf("repulse") && "mousemove" == a.interactivity.status) {
                var h = b.x - a.interactivity.mouse.pos_x;
                d = b.y - a.interactivity.mouse.pos_y;
                var f = Math.sqrt(h * h + d * d);
                c = a.interactivity.modes.repulse.distance;
                var g = Math.min(Math.max(1 / c * (-1 * Math.pow(f / c, 2) + 1) * c * 100, 0), 50);
                c = b.x + h / f * g;
                d = b.y + d / f * g;
                "bounce" == a.particles.move.out_mode ? (0 < c - b.radius &&
                    c + b.radius < a.canvas.w && (b.x = c), 0 < d - b.radius && d + b.radius < a.canvas.h && (b.y = d)) : (b.x = c, b.y = d)
            } else a.interactivity.events.onclick.enable && -1 < a.interactivity.events.onclick.mode.indexOf("repulse") && (a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.particles.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking ? (c = Math.pow(a.interactivity.modes.repulse.distance / 6, 3), f = a.interactivity.mouse.click_pos_x - b.x, h = a.interactivity.mouse.click_pos_y - b.y, g = f * f + h * h, d = -c / g * 1, g <= c && (c =
                Math.atan2(h, f), b.vx = d * Math.cos(c), b.vy = d * Math.sin(c), "bounce" == a.particles.move.out_mode && (c = b.x + b.vx, d = b.y + b.vy, c + b.radius > a.canvas.w ? b.vx = -b.vx : 0 > c - b.radius && (b.vx = -b.vx), d + b.radius > a.canvas.h ? b.vy = -b.vy : 0 > d - b.radius && (b.vy = -b.vy)))) : 0 == a.tmp.repulse_clicking && (b.vx = b.vx_i, b.vy = b.vy_i))
        };
        a.fn.modes.grabParticle = function(b) {
            if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
                var c = b.x - a.interactivity.mouse.pos_x,
                    d = b.y - a.interactivity.mouse.pos_y,
                    c = Math.sqrt(c * c + d * d);
                c <=
                    a.interactivity.modes.grab.distance && (c = a.interactivity.modes.grab.line_linked.opacity - c / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance, 0 < c && (d = b.lineColor, a.canvas.ctx.strokeStyle = "rgba(" + d.r + "," + d.g + "," + d.b + "," + c + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(b.x, b.y), a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()))
            }
        };
        a.fn.vendors.eventsListeners =
            function() {
                a.interactivity.el = "window" == a.interactivity.detect_on ? window : a.canvas.el;
                if (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) l.on("mousemove.rsparticles", function(b) {
                    a.interactivity.mouse.pos_x = b.pageX - a.offset.left;
                    a.interactivity.mouse.pos_y = b.pageY - a.offset.top;
                    a.interactivity.status = "mousemove"
                }), l[0].addEventListener("mouseleave", function(b) {
                    a.interactivity.mouse.pos_x = null;
                    a.interactivity.mouse.pos_y = null;
                    a.interactivity.status = "mouseleave"
                });
                a.interactivity.events.onclick.enable &&
                    a.interactivity.el.addEventListener("click", function() {
                        a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x;
                        a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y;
                        a.interactivity.mouse.click_time = (new Date).getTime();
                        if (a.interactivity.events.onclick.enable) switch (a.interactivity.events.onclick.mode) {
                            case "push":
                                a.particles.move.enable ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : 1 == a.interactivity.modes.push.particles_nb ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,
                                    a.interactivity.mouse) : 1 < a.interactivity.modes.push.particles_nb && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
                                break;
                            case "remove":
                                a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
                                break;
                            case "bubble":
                                a.tmp.bubble_clicking = !0;
                                break;
                            case "repulse":
                                a.tmp.repulse_clicking = !0, a.tmp.repulse_count = 0, a.tmp.repulse_finish = !1, setTimeout(function() {
                                    a.tmp.repulse_clicking = !1
                                }, 1E3 * a.interactivity.modes.repulse.duration)
                        }
                    })
            };
        a.fn.vendors.densityAutoParticles = function() {
            if (a.particles.number.density.enable) {
                var b =
                    a.canvas.el.width * a.canvas.el.height / 1E3;
                a.tmp.retina && (b /= 2 * a.canvas.pxratio);
                b = a.particles.array.length - b * a.particles.number.value / a.particles.number.density.value_area;
                0 > b ? a.fn.modes.pushParticles(Math.abs(b)) : a.fn.modes.removeParticles(b)
            }
        };
        a.fn.vendors.checkOverlap = function(b, c) {
            for (var d = a.particles.array.length, f = 0; f < d; f++) {
                var g = a.particles.array[f],
                    k = b.x - g.x,
                    e = b.y - g.y;
                Math.sqrt(k * k + e * e) <= b.radius + g.radius && (b.x = c ? c.x : Math.random() * a.canvas.w, b.y = c ? c.y : Math.random() * a.canvas.h, a.fn.vendors.checkOverlap(b))
            }
        };
        a.fn.vendors.createSvgImg = function(b) {
            var c = a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, n.call(b)).replace("{{stroke-color}}", b.strokeColor),
                d = new Image,
                c = "data:image/svg+xml;base64," + btoa(c);
            d.addEventListener("load", function() {
                b.img.obj = d;
                b.img.loaded = !0;
                a.tmp.count_svg++
            });
            d.src = c
        };
        a.fn.vendors.destroypJS = function() {
            cancelAnimationFrame(a.fn.drawAnimFrame);
            f.remove()
        };
        a.fn.vendors.drawShape = function(a, c, d, f, g, k) {
            var b = g * k;
            g /= k;
            g = Math.PI - 180 * (g - 2) / g * Math.PI / 180;
            a.save();
            a.beginPath();
            a.translate(c,
                d);
            a.moveTo(0, 0);
            for (c = 0; c < b; c++) a.lineTo(f, 0), a.translate(f, 0), a.rotate(g);
            a.fill();
            a.restore()
        };
        a.fn.vendors.loadImg = function(b, c) {
            a.tmp.source_svg = c;
            a.fn.vendors.checkBeforeDraw()
        };
        a.fn.vendors.draw = function() {
            "image" == a.particles.shape.type ? "svg" == a.tmp.img_type ? a.tmp.count_svg >= a.particles.number.value ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = rspRequestAnimFrame(a.fn.vendors.draw) : rspCancelAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = rspRequestAnimFrame(a.fn.vendors.draw)) :
                void 0 != a.tmp.img_obj ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = rspRequestAnimFrame(a.fn.vendors.draw) : rspCancelAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = rspRequestAnimFrame(a.fn.vendors.draw)) : (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = rspRequestAnimFrame(a.fn.vendors.draw) : rspCancelAnimFrame(a.fn.drawAnimFrame))
        };
        a.fn.vendors.checkBeforeDraw = function() {
            "image" == a.particles.shape.type ? "svg" == a.tmp.img_type && void 0 == a.tmp.source_svg ?
                a.tmp.checkAnimFrame = rspRequestAnimFrame(check) : (rspCancelAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw())) : (a.fn.vendors.init(), a.fn.vendors.draw())
        };
        a.fn.vendors.init = function() {
            a.fn.retinaInit();
            a.fn.canvasInit();
            a.fn.canvasSize();
            a.fn.canvasPaint();
            a.fn.particlesCreate();
            a.fn.vendors.densityAutoParticles()
        };
        a.fn.vendors.start = function() {
            -1 < a.particles.shape.type.indexOf("image") ? (a.tmp.img_type = "svg", a.fn.vendors.loadImg(a.tmp.img_type, a.particles.shape.image.src)) :
                a.fn.vendors.checkBeforeDraw()
        };
        a.fn.vendors.eventsListeners();
        a.fn.vendors.start()
    };
    Object.deepExtend = function(f, k) {
        for (var g in k) k[g] && k[g].constructor && k[g].constructor === Object ? (f[g] = f[g] || {}, arguments.callee(f[g], k[g])) : f[g] = k[g];
        return f
    };
    window.rspRequestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(f) {
            window.setTimeout(f, 1E3 / 60)
        }
    }();
    window.rspCancelAnimFrame =
        window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    window.pJSDomRs = [];
    window.particlesJSRs = function(f, k, g, m, l) {
        var p = document.querySelector(f);
        null == p && console.log("slide with particles removed from DOM");
        var n = document.createElement("canvas");
        n.className = "rs-particles-canvas";
        n.id = m;
        p.appendChild(n);
        pJSDomRs.push(new C(n, f, k, g, l))
    }
})();
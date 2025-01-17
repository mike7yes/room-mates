! function(e) {
    "use strict";

    function t(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    };

    function n(t, n) {
        return e.localStorage && localStorage[t + "_content"] && localStorage[t + "_file"] === n
    };

    function a(t, a) {
        if (e.localStorage && e.XMLHttpRequest) n(t, a) ? o(localStorage[t + "_content"]) : l(t, a);
        else {
            var s = r.createElement("link");
            s.href = a, s.id = t, s.rel = "stylesheet", s.type = "text/css", r.getElementsByTagName("head")[0].appendChild(s), r.cookie = t
        }
    }

    function l(e, t) {
        var n = new XMLHttpRequest;
        n.open("GET", t, !0), n.onreadystatechange = function() {
            4 === n.readyState && 200 === n.status && (o(n.responseText), localStorage[e + "_content"] = n.responseText, localStorage[e + "_file"] = t)
        }, n.send()
    }

    function o(e) {
        var t = r.createElement("style");
        t.setAttribute("type", "text/css"), r.getElementsByTagName("head")[0].appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e
    }
    var r = e.document;
    e.loadCSS = function(e, t, n) {
        var a, l = r.createElement("link");
        if (t) a = t;
        else {
            var o;
            o = r.querySelectorAll ? r.querySelectorAll("style,link[rel=stylesheet],script") : (r.body || r.getElementsByTagName("head")[0]).childNodes, a = o[o.length - 1]
        }
        var s = r.styleSheets;
        l.rel = "stylesheet", l.href = e, l.media = "only x", a.parentNode.insertBefore(l, t ? a : a.nextSibling);
        var c = function(e) {
            for (var t = l.href, n = s.length; n--;)
                if (s[n].href === t) return e();
            setTimeout(function() {
                c(e)
            })
        };
        return l.onloadcssdefined = c, c(function() {
            l.media = n || "all"
        }), l
    }, e.loadLocalStorageCSS = function(l, o) {
        n(l, o) || r.cookie.indexOf(l) > -1 ? a(l, o) : t(e, "load", function() {
            a(l, o)
        })
    }
}(this);
/*(function(win, doc) {

    var $ = function() {}
    $ : function(i) {

        var type = i.substr(0,1);

        if(type == ".") {
            if(navigator.appVersion.match(/8./i)=="8.") {
                return doc.querySelectorAll(i);
            } else {
                return doc.getElementsByClassName(i.substr(1));
            }

        } else if(type == "#") {
            return doc.getElementById(i.substr(1));
        } else {
            return doc.getElementsByTagName(i);
        }
    },

    addClass : function(classText) {
        this.className += classText;
    }

    $.S = function(i) {
        return doc.querySelectorAll(i)
    };

    $.t = function(p, i) { 

        ! i && (i = p) && (p = doc);
        return p.getElementsByTagName(i)
    };

    $.c = function(p, c) { 

        ! c && (c = p) && (p = doc);
        for (var n = ' ', e = p.getElementsByTagName('*'), r = [], i = 0, j; j = e[i]; i++)
            (n + j.className + n).indexOf(n + c + n) == -1 || r.push(j);

        return r
    };

    $.css = function(p, i) {
        p.style.cssText += (';' + i)
    };

    $.x = function(i, p, f, e, x) {
        //(typeof p=='function')&&(e=f)&&(f=p)&&(p=0);
        if (typeof p == 'function') {
            e = f;
            f = p;
            p = 0;
        } (x = new XMLHttpRequest()).open(p ? 'POST': 'GET', i, 1);
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (f || e) x.onreadystatechange = function() {
            if (x.readyState == 4)((x.status > 199 && x.status < 301) || x.status == 304) ? f(x.responseText) : e(x.status);
        };
        x.send(p || '');
        return x //.abort()
    };
    $.j = function(i, f, s, t) {
        s = $.D.m('script'),
        t = 'cb' + new Date().valueOf();
        s.src = i.replace(/\{cb\}/, t);
        if (f) win[t] = f;
        $.D.a(s)
    };
    $.swf = function(i) {
        return doc[i] || $(i)
    };
    $.cookie = function(i, v, s) {
        if (typeof v != 'undefined') {
            s = s || 31536000;
            var d = new Date();
            d.setTime(d.getTime() + s * 1000);
            doc.cookie = i + '=' + escape(v) + ';expires=' + d.toGMTString()
        } else {
            var a = doc.cookie.match(new RegExp('(^| )' + i + '=([^;]*)(;|$)'));
            return a == null ? null: unescape(a[2])
        }
    };
    $.D = {
        m: function(i) {
            return doc.createElement(i)
        },
        d: function(o) {
            return o.parentNode.removeChild(o)
        },
        a: function(p, i) { ! i && (i = p) && (p = doc.body);
            return p.appendChild(i)
        },
        b: function(p, i) {
            p.insertBefore(i, p.childNodes[0])
        }
    };
    $.b = $.t('html')[0].className = self.ActiveXObject ? 'IE': self.chrome ? 'Cr': self.mozPaintCount > ~ [] ? 'FF': self.opera ? 'Op': self.chrome && !!self.WebKitPoint ? 'Sa': '';

    //if(window.screen.colorDepth==32) return;
    return $
} (window, document);*/

/*var $ = function(i) {
    this.node = null;
    var type = i.substr(0,1);

    if(type == ".") {
        if(navigator.appVersion.match(/8./i)=="8.") {
            this.node = document.querySelectorAll(i);
        } else {
            this.node = document.getElementsByClassName(i.substr(1));
        }
    } else if(type == "#") {
        this.node = document.getElementById(i.substr(1));
    } else {
        this.node = document.getElementsByTagName(i);
    }

    return this.node;
}

$.prototype.addClass = function(i) {
    console.log(this.node);
};*/

/*var $ = function(selector) {
       return new $.prototype.init(selector);
}
$.prototype = {

    init: function(i) {

        var type = i.substr(0,1);
        if(type == ".") {
            if(navigator.appVersion.match(/8./i)=="8.") {
                this.node = document.querySelectorAll(i);
            } else {
                this.node = document.getElementsByClassName(i.substr(1));
            }
        } else if(type == "#") {
            this.node = document.getElementById(i.substr(1));
        } else {
            this.node = document.getElementsByTagName(i);
        }

        return this;
    },
    name: function() {
        return this
    },
}

$.prototype.init.prototype = $.prototype;

console.log($().name()) //20*/

(function(win, doc, undefined) {

    var $ = function(selector) {
        return new $.prototype.init(selector);
    }

    $.prototype = {

        select : null,
        type   : null,

        init : function(i) {

            if(typeof i == 'string') {

                this.type = i.substr(0,1);
                if(this.type == ".") {
                    if(navigator.appVersion.match(/8./i)=="8.") {
                        this.select = doc.querySelectorAll(i);
                    } else {
                        this.select = doc.getElementsByClassName(i.substr(1));
                    }
                } else if(this.type == "#") {
                    this.select = doc.getElementById(i.substr(1));
                } else {
                    this.select = doc.getElementsByTagName(i);
                }
            }
        },

        html : function(content) {

            if(content == null) {
      
                if(this.type == "#") {
                    console.log(this.select.innerHTML)
                } else {
                    for(var i = 0; i < this.select.length; i++) console.log(this.select[i].innerHTML); 
                }

            } else {
    
                if(this.type == "#") {
                    this.select.innerHTML = content;
                } else {
                    for (var i = 0; i < this.select.length; i++) this.select[i].innerHTML = content;
                }
            }
        },

        addClass : function(classText) {

            if(classText != null) {
                if(this.type == "#") {
                    this.select.className += classText;
                } else {
                    for (var i = 0; i < this.select.length; i++) this.select[i].className += " " + classText;
                }
            }
        },

        css : function(cssText) {

            if(cssText != null) {
                if(this.type == "#") {
                    this.select.style.cssText += (';' + cssText);
                } else {
                    for (var i = 0; i < this.select.length; i++) this.select[i].style.cssText += (';' + cssText);
                }
            }
        },
    }

    $.ajax = function(conf) {
 
        var type     = conf.type;
        var url      = conf.url;
        var data     = conf.data; 
        var dataType = conf.dataType;
        var success  = conf.success;
        var jsonp    = conf.jsonp;
                                                                                             
        if (type == null){
            type = "get";
        }
        if (dataType == null){
            dataType = "text";
        }

        var xhr = new XMLHttpRequest();
        xhr.open(type, url, true);

        // 发送
        if (type == "GET" || type == "get") {
            xhr.send(null);
        } else if (type == "POST" || type == "post") {
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(data);
        } else if(type == 'jsonp') {

            eval("window." + jsonp + "=" + success);
            var script = document.createElement('script');
            script.setAttribute('src', url);
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if(dataType == "text" || dataType=="TEXT") {
                    if (success != null){
                        //普通文本
                        success(xhr.responseText);
                    }
                } else if(dataType == "xml" || dataType == "XML") {
                    if (success != null){
                        //接收xml文档    
                        success(xhr.responseXML);
                    }  
                } else if(dataType == "json" || dataType == "JSON") {
                    if (success != null){
                        //将json字符串转换为js对象  
                        success(eval("(" + xhr.responseText + ")"));
                    }
                } 
            }
        };
    }

    $.cookie = function(i, v, s) {
        if (typeof v != 'undefined') {
            s = s || 1;
            var d = new Date();
            d.setTime(d.getTime() + s*24*60*60*1000);
            doc.cookie = i + '=' + escape(v) + ';expires=' + d.toGMTString();
            console.log( i + '=' + escape(v) + ';expires=' + d.toGMTString());
        } else {
            var a = doc.cookie.match(new RegExp('(^| )' + i + '=([^;]*)(;|$)'));
            return a == null ? null: unescape(a[2])
        }
    };

    $.prototype.init.prototype = $.prototype;
    window.$ = $;

})(window, document);
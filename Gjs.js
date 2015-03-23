(function(win, doc, undefined) {

    var G = function(selector) {
        return new $.prototype.init(selector);
    }

    G.prototype = {

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
                    for (var i = 0; i < this.select.length; i++) 
                        this.select[i].style.cssText += (';' + cssText);
                }
            } else {

            }
        },

        getCss : function(cssName) {
            if(this.select.currentStyle) {
                return this.select.currentStyle[cssName];
            } else {
                return document.defaultView.getComputedStyle(this.select, false)[cssName];
            }
        }

        hasClass : function(obj, cls) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },

        addClass : function(obj, cls) {
            if (!this.hasClass(obj, cls)) obj.className += " " + cls;
        },

        removeClass : function(obj, cls) {
            if (hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        },

        /*animate : function(conf, timer) {
            clearInterval(this.select.timer);
            this.select.timer = setInterval(function() {
                for(var attr in json) {
                    var current = 0;

                    if(attr == 'opacity') {
                        current = Math.round(parseFloat(this.getCss(attr)) * 100);
                    } else {
                        current = parseInt(this.getCss(attr));
                    }

                    
                }
            })
        }  */
    }

    $.ajax = function(conf) {
 
        var type     = conf.type || 'GET';
        var url      = conf.url || '';
        var data     = conf.data || ''; 
        var dataType = conf.dataType || 'TEXT';
        var success  = conf.success || function() {};
        var jsonp    = conf.jsonp function() {};
                                                                                             
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

    G.cookie = function(name, value, exp) {
        if (typeof value != 'undefined') {
            exp = exp || 1;
            var date = new Date();
            date.setTime(date.getTime() + exp*24*60*60*1000);
            doc.cookie = name + '=' + escape(value) + ';expires=' + date.toGMTString();
            console.log( name + '=' + escape(value) + ';expires=' + date.toGMTString());
        } else {
            var value = doc.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
            return value == null ? null: unescape(a[2]);
        }
    };

    G.prototype.init.prototype = G.prototype;
    window.G = G;

})(window, document);
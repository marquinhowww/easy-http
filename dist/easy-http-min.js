function http(t){return new Promise(function(n,s){function e(t,n){this.status=t,this.message=n}function u(t){return JSON.parse(t)}function r(t){return JSON.stringify(t)}function i(t){t&&Object.keys(t).forEach(function(n){o.setRequestHeader(n,t[n])})}var o=new XMLHttpRequest;o.open(t.method,t.url),o.onload=function(){return this.status>=200&&this.status<300?n(u(o.response)):s(new e(this.status,o.statusText))},o.onerror=function(){return s(new e(this.status,o.statusText))},i(t.headers),o.send(r(t.data))})}
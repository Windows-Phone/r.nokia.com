window.typeKitConfig = {kitId: 'ypi0jvg'};/*{"version":"18469874","mac":"1:e246d82659e95c07f99ce3b4dbdb93552bb74cfc8984b11e0483eb2d726f68f6","created":"2013-08-07T11:52:35Z","k":"1.6.2"}*/
/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
;(function(window,document,undefined){
var h=!0,k=null,l=!1;function m(a){return function(){return this[a]}}var aa=this;function ca(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return n.apply(k,arguments)}var fa=Date.now||function(){return+new Date};
function q(a,b){this.Y=a;this.O=b||a;this.D=this.O.document}q.prototype.createElement=function(a,b,c){a=this.D.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.D.createTextNode(c));return a};function r(a,b,c){a=a.D.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ga(a,b){function c(){a.D.body?b():setTimeout(c,0)}c()}
function s(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return;c.push(b);a.className=c.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function t(a,b){for(var c=a.className.split(/\s+/),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ha(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return h;return l}
function ia(a){var b=a.O.location.protocol;"about:"==b&&(b=a.Y.location.protocol);return"https:"==b?"https:":"http:"}
function ja(a,b,c){var d=a.D.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=l;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=h,c&&c(k),e.onload=e.onreadystatechange=k,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e);window.setTimeout(function(){f||(f=h,c&&c(Error("Script load timeout")))},5E3)}}function u(a,b,c){this.La=a;this.aa=b;this.Ka=c}
ca("internalWebfont.BrowserInfo",u);u.prototype.za=m("La");u.prototype.hasWebFontSupport=u.prototype.za;u.prototype.Aa=m("aa");u.prototype.hasWebKitFallbackBug=u.prototype.Aa;u.prototype.Ba=m("Ka");u.prototype.hasWebKitMetricsBug=u.prototype.Ba;function v(a,b,c,d){this.e=a!=k?a:k;this.m=b!=k?b:k;this.C=c!=k?c:k;this.j=d!=k?d:k}var ma=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
function w(a,b){return a.e>b.e||a.e===b.e&&a.m>b.m||a.e===b.e&&a.m===b.m&&a.C>b.C?1:a.e<b.e||a.e===b.e&&a.m<b.m||a.e===b.e&&a.m===b.m&&a.C<b.C?-1:0}function x(a,b){return 0===w(a,b)||1===w(a,b)}v.prototype.toString=function(){return[this.e,this.m||"",this.C||"",this.j||""].join("")};
function z(a){a=ma.exec(a);var b=k,c=k,d=k,e=k;a&&(a[1]!==k&&a[1]&&(b=parseInt(a[1],10)),a[2]!==k&&a[2]&&(c=parseInt(a[2],10)),a[3]!==k&&a[3]&&(d=parseInt(a[3],10)),a[4]!==k&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new v(b,c,d,e)}function B(a,b,c,d,e,f,g,j,p,y,ba){this.P=a;this.n=b;this.Ja=c;this.u=d;this.z=e;this.pa=f;this.k=g;this.h=j;this.Ga=p;this.M=y;this.t=ba}ca("internalWebfont.UserAgent",B);B.prototype.getName=m("P");B.prototype.getName=B.prototype.getName;
B.prototype.ya=m("Ja");B.prototype.getVersion=B.prototype.ya;B.prototype.ua=m("u");B.prototype.getEngine=B.prototype.ua;B.prototype.va=m("pa");B.prototype.getEngineVersion=B.prototype.va;B.prototype.wa=m("k");B.prototype.getPlatform=B.prototype.wa;B.prototype.xa=m("Ga");B.prototype.getPlatformVersion=B.prototype.xa;B.prototype.ta=m("M");B.prototype.getDocumentMode=B.prototype.ta;B.prototype.sa=m("t");B.prototype.getBrowserInfo=B.prototype.sa;function na(a,b){this.c=a;this.L=b}
var oa=new B("Unknown",new v,"Unknown","Unknown",new v,"Unknown","Unknown",new v,"Unknown",void 0,new u(l,l,l));
na.prototype.parse=function(){var a;if(-1!=this.c.indexOf("MSIE")){a=C(this);var b=D(this),c=z(b),d=E(this.c,/MSIE ([\d\w\.]+)/,1),e=z(d);a=new B("MSIE",e,d,"MSIE",e,d,a,c,b,F(this.L),new u("Windows"==a&&6<=e.e||"Windows Phone"==a&&8<=c.e,l,l))}else if(-1!=this.c.indexOf("Opera"))a:{a="Unknown";var b=E(this.c,/Presto\/([\d\w\.]+)/,1),c=z(b),d=D(this),e=z(d),f=F(this.L);c.e!==k?a="Presto":(-1!=this.c.indexOf("Gecko")&&(a="Gecko"),b=E(this.c,/rv:([^\)]+)/,1),c=z(b));if(-1!=this.c.indexOf("Opera Mini/")){var g=
E(this.c,/Opera Mini\/([\d\.]+)/,1),j=z(g);a=new B("OperaMini",j,g,a,c,b,C(this),e,d,f,new u(l,l,l))}else{if(-1!=this.c.indexOf("Version/")&&(g=E(this.c,/Version\/([\d\.]+)/,1),j=z(g),j.e!==k)){a=new B("Opera",j,g,a,c,b,C(this),e,d,f,new u(10<=j.e,l,l));break a}g=E(this.c,/Opera[\/ ]([\d\.]+)/,1);j=z(g);a=j.e!==k?new B("Opera",j,g,a,c,b,C(this),e,d,f,new u(10<=j.e,l,l)):new B("Opera",new v,"Unknown",a,c,b,C(this),e,d,f,new u(l,l,l))}}else/OPR\/[\d.]+/.test(this.c)?a=pa(this):/AppleWeb(K|k)it/.test(this.c)?
a=pa(this):-1!=this.c.indexOf("Gecko")?(a="Unknown",b=new v,c="Unknown",d=D(this),e=z(d),f=l,-1!=this.c.indexOf("Firefox")?(a="Firefox",c=E(this.c,/Firefox\/([\d\w\.]+)/,1),b=z(c),f=3<=b.e&&5<=b.m):-1!=this.c.indexOf("Mozilla")&&(a="Mozilla"),g=E(this.c,/rv:([^\)]+)/,1),j=z(g),f||(f=1<j.e||1==j.e&&9<j.m||1==j.e&&9==j.m&&2<=j.C||g.match(/1\.9\.1b[123]/)!=k||g.match(/1\.9\.1\.[\d\.]+/)!=k),a=new B(a,b,c,"Gecko",j,g,C(this),e,d,F(this.L),new u(f,l,l))):a=oa;return a};
function C(a){var b=E(a.c,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=E(a.c,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function D(a){var b=E(a.c,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=E(a.c,/Windows Phone( OS)? ([^;)]+)/,2))||(b=E(a.c,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=E(a.c,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=E(a.c,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function pa(a){var b=C(a),c=D(a),d=z(c),e=E(a.c,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),f=z(e),g="Unknown",j=new v,p="Unknown",y=l;/OPR\/[\d.]+/.test(a.c)?g="Opera":-1!=a.c.indexOf("Chrome")||-1!=a.c.indexOf("CrMo")||-1!=a.c.indexOf("CriOS")?g="Chrome":/Silk\/\d/.test(a.c)?g="Silk":"BlackBerry"==b||"Android"==b?g="BuiltinBrowser":-1!=a.c.indexOf("PhantomJS")?g="PhantomJS":-1!=a.c.indexOf("Safari")?g="Safari":-1!=a.c.indexOf("AdobeAIR")&&(g="AdobeAIR");"BuiltinBrowser"==g?p="Unknown":"Silk"==g?p=E(a.c,
/Silk\/([\d\._]+)/,1):"Chrome"==g?p=E(a.c,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.c.indexOf("Version/")?p=E(a.c,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==g?p=E(a.c,/AdobeAIR\/([\d\.]+)/,1):"Opera"==g?p=E(a.c,/OPR\/([\d.]+)/,1):"PhantomJS"==g&&(p=E(a.c,/PhantomJS\/([\d.]+)/,1));j=z(p);y="AdobeAIR"==g?2<j.e||2==j.e&&5<=j.m:"BlackBerry"==b?10<=d.e:"Android"==b?2<d.e||2==d.e&&1<d.m:526<=f.e||525<=f.e&&13<=f.m;return new B(g,j,p,"AppleWebKit",f,e,b,d,c,F(a.L),new u(y,536>f.e||536==f.e&&11>f.m,"iPhone"==
b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function E(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function F(a){if(a.documentMode)return a.documentMode}function qa(a){this.Ea=a||"-"}qa.prototype.j=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ea)};function ra(a,b,c){this.g=a;this.l=b;this.S=c;this.p="wf";this.o=new qa("-")}
function sa(a){t(a.l,a.o.j(a.p,"loading"));ha(a.l,a.o.j(a.p,"active"))||s(a.l,a.o.j(a.p,"inactive"));G(a,"inactive")}function G(a,b,c){if(a.S[b])if(c)a.S[b](c.getName(),I(c));else a.S[b]()}function J(a,b){this.P=a;this.ba=4;this.Q="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Q=c[1],this.ba=parseInt(c[2],10))}J.prototype.getName=m("P");function I(a){return a.Q+a.ba}function K(a,b){this.g=a;this.I=b;this.w=this.g.createElement("span",{"aria-hidden":"true"},this.I)}
function ta(a,b){var c;c=[];for(var d=b.P.split(/,\s*/),e=0;e<d.length;e++){var f=d[e].replace(/['"]/g,"");-1==f.indexOf(" ")?c.push(f):c.push("'"+f+"'")}c=c.join(",");d="normal";e=b.ba+"00";"o"===b.Q?d="oblique":"i"===b.Q&&(d="italic");a.w.style.cssText="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function ua(a){r(a.g,"body",a.w)}K.prototype.remove=function(){var a=this.w;a.parentNode&&a.parentNode.removeChild(a)};function va(a,b,c,d,e,f,g,j){this.ca=a;this.Ca=b;this.g=c;this.v=d;this.I=j||"BESbswy";this.t=e;this.J={};this.Z=f||5E3;this.ja=g||k;this.H=this.G=k;a=new K(this.g,this.I);ua(a);for(var p in L)L.hasOwnProperty(p)&&(ta(a,new J(L[p],I(this.v))),this.J[L[p]]=a.w.offsetWidth);a.remove()}var L={Sa:"serif",Ra:"sans-serif",Oa:"monospace"};
va.prototype.start=function(){this.G=new K(this.g,this.I);ua(this.G);this.H=new K(this.g,this.I);ua(this.H);this.Ha=fa();ta(this.G,new J(this.v.getName()+",serif",I(this.v)));ta(this.H,new J(this.v.getName()+",sans-serif",I(this.v)));wa(this)};function xa(a,b,c){for(var d in L)if(L.hasOwnProperty(d)&&b===a.J[L[d]]&&c===a.J[L[d]])return h;return l}
function wa(a){var b=a.G.w.offsetWidth,c=a.H.w.offsetWidth;b===a.J.serif&&c===a.J["sans-serif"]||a.t.aa&&xa(a,b,c)?fa()-a.Ha>=a.Z?a.t.aa&&xa(a,b,c)&&(a.ja===k||a.ja.hasOwnProperty(a.v.getName()))?ya(a,a.ca):ya(a,a.Ca):setTimeout(n(function(){wa(this)},a),25):ya(a,a.ca)}function ya(a,b){a.G.remove();a.H.remove();b(a.v)}function M(a,b,c,d){this.g=b;this.A=c;this.V=0;this.ma=this.ia=l;this.Z=d;this.t=a.t}
M.prototype.$=function(a,b,c,d){if(0===a.length&&d)sa(this.A);else{this.V+=a.length;d&&(this.ia=d);for(d=0;d<a.length;d++){var e=a[d],f=b[e.getName()],g=this.A,j=e;s(g.l,g.o.j(g.p,j.getName(),I(j).toString(),"loading"));G(g,"fontloading",j);(new va(n(this.qa,this),n(this.ra,this),this.g,e,this.t,this.Z,c,f)).start()}}};
M.prototype.qa=function(a){var b=this.A;t(b.l,b.o.j(b.p,a.getName(),I(a).toString(),"loading"));t(b.l,b.o.j(b.p,a.getName(),I(a).toString(),"inactive"));s(b.l,b.o.j(b.p,a.getName(),I(a).toString(),"active"));G(b,"fontactive",a);this.ma=h;za(this)};M.prototype.ra=function(a){var b=this.A;t(b.l,b.o.j(b.p,a.getName(),I(a).toString(),"loading"));ha(b.l,b.o.j(b.p,a.getName(),I(a).toString(),"active"))||s(b.l,b.o.j(b.p,a.getName(),I(a).toString(),"inactive"));G(b,"fontinactive",a);za(this)};
function za(a){0==--a.V&&a.ia&&(a.ma?(a=a.A,t(a.l,a.o.j(a.p,"loading")),t(a.l,a.o.j(a.p,"inactive")),s(a.l,a.o.j(a.p,"active")),G(a,"active")):sa(a.A))}function Aa(a){this.g=a}Aa.prototype.toString=function(){return encodeURIComponent(this.g.O.location.hostname||this.g.Y.location.hostname)};function Ba(a,b){this.q=a;this.r=b}
Ba.prototype.toString=function(){for(var a=[],b=0;b<this.r.length;b++)for(var c=this.r[b],d=c.B(),c=c.B(this.q),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=h;break a}f=l}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)c=a.slice(0>d-4?0:d-4,d),b.unshift(parseInt(c,2).toString(16));return b.join("")};function N(a){this.Ia=a}
N.prototype.j=function(a,b){var c=b||{},d=this.Ia.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function O(a,b,c,d){this.F=a;this.N=b;this.Va=c;this.Wa=d;this.ga={};this.fa={}}O.prototype.B=function(a){return a?(this.ga[a]||this.N).slice(0):this.N.slice(0)};O.prototype.$=function(a,b,c){var d=[],e={};Ca(this,b,d,e);a(d,e,c)};
function Ca(a,b,c,d){c.push(a.F);d[a.F]=a.B(b);a=a.fa[b]||[];for(b=0;b<a.length;b++){for(var e=a[b],f=e.F,g=l,j=0;j<c.length;j++)c[j]==f&&(g=h);g||(c.push(f),d[f]=e.B())}}function Da(a,b){this.F=a;this.N=b}Da.prototype.B=m("N");function Ea(){this.oa=this.Ma=this.K=this.W=this.Da=h}function Q(a){return"Windows"===a.k}function R(a){return Q(a)&&0===w(a.h,new v(5,1))||Q(a)&&0===w(a.h,new v(5,2))||Q(a)&&0===w(a.h,new v(6,0))||Q(a)&&x(a.h,new v(6,1))}
function S(a){return"Macintosh"===a.k&&(x(a.h,new v(10,4))||a.h.e===k)}function Fa(a,b){return b.Da&&("iPhone"===a.k||"iPod"===a.k)}function Ga(a,b){return Fa(a,b)&&x(a.h,new v(4,2))&&-1===w(a.h,new v(5))}function Ha(a,b){return b.W&&"iPad"===a.k&&x(a.h,new v(4,2))&&-1===w(a.h,new v(5))}function T(a,b){return b.K&&"Android"===a.k}function Ia(a,b){return T(a,b)&&x(a.h,new v(2,2))&&-1===w(a.h,new v(3,1))}function Ja(a,b){return T(a,b)&&x(a.h,new v(3,1))&&-1===w(a.h,new v(4,1))}
function U(a){return"Linux"===a.k||"Ubuntu"===a.k}function Ka(a){return"Gecko"===a.u&&0===w(a.z,new v(1,9,1))&&!/^b[1-3]$/.test(a.z.j||"")}function La(a){return"Safari"===a.getName()&&"AppleWebKit"===a.u||"Unknown"===a.getName()&&"AppleWebKit"===a.u&&("iPhone"===a.k||"iPad"===a.k||"iPod"===a.k)}function Ma(a){return"Safari"===a.getName()&&"AppleWebKit"===a.u&&x(a.z,new v(525,13))&&-1===w(a.z,new v(534,50))}function Na(a){return"Opera"===a.getName()&&x(a.n,new v(10,54))&&-1===w(a.n,new v(11,10))}
function Oa(a){return"BuiltinBrowser"===a.getName()}function Pa(a){this.la=a}function Qa(a,b){return b}
var Ra={Pa:"a",Qa:"b",Ua:"d",Ta:"f",Na:"i"},Sa={a:function(a,b){return Ma(a)&&R(a)||Oa(a)&&(Ia(a,b)||T(a,b)&&x(a.h,new v(4,1)))||b.K&&"Silk"===a.getName()&&-1===w(a.n,new v(2))&&(Ia(a,b)||S)||b.K&&"Silk"===a.getName()&&x(a.n,new v(2))&&T(a,b)&&x(a.h,new v(4,1))||La(a)&&(Ha(a,b)||Ga(a,b))||Ka(a)&&(R(a)||U(a))||Na(a)&&(R(a)||U(a))||("Chrome"===a.getName()&&1===w(a.n,new v(4,0,249))&&-1===w(a.n,new v(6))||0===w(a.n,new v(4,0,249))&&(a.n.j===k||4<=a.n.j))&&(R(a)||U(a)||S(a))||"Chrome"===a.getName()&&
x(a.n,new v(6))&&(Ha(a,b)||Ga(a,b))||"AdobeAIR"===a.getName()&&x(a.n,new v(2,5))&&(Q(a)&&a.h.e===k||U(a))},b:function(a){return Ka(a)&&S(a)||Ma(a)&&S(a)||Na(a)&&S(a)||"AdobeAIR"===a.getName()&&x(a.n,new v(2,5))&&S(a)},d:function(a,b){return"Chrome"===a.getName()&&x(a.n,new v(6))&&(R(a)||U(a)||S(a)||T(a,b)||"CrOS"===a.k||b.W&&"iPad"===a.k&&x(a.h,new v(5))||Fa(a,b)&&x(a.h,new v(5)))||"Gecko"===a.u&&1===w(a.z,new v(1,9,1))&&(R(a)||U(a)||S(a)||T(a,b))||"Safari"===a.getName()&&("AppleWebKit"===a.u&&x(a.z,
new v(534,50)))&&(R(a)||S(a))||La(a)&&(b.W&&"iPad"===a.k&&x(a.h,new v(5))||Fa(a,b)&&x(a.h,new v(5)))||"Opera"===a.getName()&&x(a.n,new v(11,10))&&(R(a)||U(a)||S(a)||T(a,b))||"MSIE"===a.getName()&&9<=a.M&&(Q(a)&&x(a.h,new v(6,1))||Q(a)&&0===w(a.h,new v(6,0)))||"MSIE"===a.getName()&&b.Ma&&"Windows Phone"===a.k&&x(a.h,new v(8))||Oa(a)&&b.oa&&"BlackBerry"===a.k&&x(a.h,new v(10))},f:function(a,b){return Oa(a)&&Ja(a,b)||b.K&&"Silk"===a.getName()&&x(a.n,new v(2))&&(Ja(a,b)||U(a))},i:function(a){return"MSIE"===
a.getName()&&(x(a.n,new v(6,0))&&(void 0===a.M||9>a.M))&&R(a)}};function Ta(a,b){var c=b||new Ea,d;for(d in Ra){var e=Ra[d];if(Sa[e](a,c))return e}return k}var Ua={};
Ua.i=new Pa(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;c.push(new Da(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++)for(var f=c[e],g=0;g<f.length;g++){var j=f[g];if(a[j]){d=d.concat(a[j]);break}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=h,a.push(f));c=[];for(d=0;d<b.length;d++){e=b[d];for(f=0;f<a.length;f++)g=a[f],g==e&&
c.push(g)}return c});var V={};V.a=V.b=V.d=function(){return[]};V.f=function(a){return[new Aa(a)]};V.i=function(a,b,c){return[new Aa(a),new Ba(b,c)]};function W(a){this.g=a;this.ea=this.c=this.q=k;this.r=[];this.T=[];this.na=this.U=k}W.prototype.supportsConfiguredBrowser=function(){return!!this.q};
W.prototype.init=function(){if(0<this.T.length){for(var a=[],b=0;b<this.T.length;b++)a.push(this.T[b].Xa());var b=this.g,a=a.join(""),c=this.g.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));r(b,"head",c)}};
W.prototype.load=function(a,b){if(this.q){for(var c=Ua[this.q]||new Pa(Qa),d=0;d<this.r.length;d++){for(var e=this.r[d],f=this.q,g=c,j=[],p=e.F.split(",")[0].replace(/"|'/g,""),y=e.B(),ba=j,A=void 0,P=[],H={},ka=0;ka<y.length;ka++)A=y[ka],0<A.length&&!H[A]&&(H[A]=h,P.push(A));y=P;g=g.la?g.la(p,y,ba):y;e.ga[f]=g;e.fa[f]=j}if(this.U){c=V[this.q](this.g,this.q,this.r);d=this.q;e=[];for(f=0;f<c.length;f++)e.push(c[f].toString());var d=this.U.j("https:"===ia(this.g),{format:d,extras:e}),c=this.g,d=c.createElement("link",
{rel:"stylesheet",href:d}),X=l;d.onload=function(){X||(X=h)};d.onerror=function(){X||(X=h)};r(c,"head",d)}if(a){var la=this,bb=this.q;ga(this.g,function(){for(var c=0;c<la.r.length;c++)la.r[c].$(a,bb,b&&c==la.r.length-1)})}}};W.prototype.collectFontFamilies=function(a,b){if(this.q)for(var c=0;c<this.r.length;c++)Ca(this.r[c],this.q,a,b)};
W.prototype.performOptionalActions=function(){if(this.X){var a=this,b=this.c,c=this.g;ga(this.g,function(){var d=a.X;if(d.ka){var e=window.__adobewebfontsappname__,e=e?e.toString().substr(0,20):"",d=d.ka.j("https:"===ia(c),{host:encodeURIComponent(c.O.location.hostname||c.Y.location.hostname),app:encodeURIComponent(e),_:(+new Date).toString()}),f={};f.src=d;f.onload=function(){f.onload=k}}d=a.X;d.da&&(d=d.da.j(b,c),r(c,"body",d))})}};
function Va(a,b,c,d){this.Fa=a;this.g=b;this.c=c;this.l=d;this.s=[]}Va.prototype.R=function(a){this.s.push(a)};Va.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c)c=[c];else if(!c||!c.length)d=c||{},c=[];if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++){var j=this.Fa.j("https:"===ia(this.g),{id:encodeURIComponent(c[g])});ja(this.g,j,function(){0==--f&&Wa(e,d)})}else Wa(this,d)};
function Wa(a,b){if(0!=a.s.length){for(var c=new ra(a.g,a.l,b),d=l,e=0;e<a.s.length;e++)a.s[e].init(),d=d||a.s[e].supportsConfiguredBrowser();if(d){s(c.l,c.o.j(c.p,"loading"));G(c,"loading");for(var f=new M(a.c,a.g,c),c=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var A=a[e];if(b[A])for(var P=b[A],H=0;H<P.length;H+=1)d.push(new J(A,P[H]));else d.push(new J(A))}f.$(d,{},k,c)},d=0;d<a.s.length;d++)e=a.s[d],e.supportsConfiguredBrowser()&&(e.load(c,d==a.s.length-1),e.performOptionalActions(window))}else sa(c);
a.s=[]}}function Xa(a){this.ha=a;this.s=[]}Xa.prototype.R=function(a){this.s.push(a)};Xa.prototype.load=function(){var a=this.ha.__webfonttypekitmodule__;if(a)for(var b=0;b<this.s.length;b++){var c=this.s[b],d=a[c.na];d&&d(function(a,b,d){a=[];b={};var j=(new na(navigator.userAgent,document)).parse(),p=c;p.c=j;p.q=Ta(p.c,p.ea);c.supportsConfiguredBrowser()&&(c.init(),c.load(k),c.collectFontFamilies(a,b),c.performOptionalActions(window));d(c.supportsConfiguredBrowser(),a,b)})}};
var Ya=(new na(navigator.userAgent,document)).parse();window.Typekit||(window.Typekit={});if(!window.Typekit.load){var Y=new Va(new N("//fonts.nokia.com/{id}.js"),new q(window),Ya,document.documentElement),Z=new Xa(window);window.Typekit.load=function(){Y.load.apply(Y,arguments)};window.Typekit.addKit=function(){Y.R.apply(Y,arguments)}}var Za=k,$a,$,Za=new N("//p.typekit.net/p.gif?a=533731&f=14762.14763.14764.14765.14766.14767.14768.14769&h={host}&ht=sh&k=ypi0jvg&s=1&_={_}");
$a=new function(){var a=Za;this.da=k;this.ka=a};$=new W(new q(window));$.na="ypi0jvg";$.U=new N("//fonts.nokia.com/k/ypi0jvg-{format}.css?3bb2a6e53c9684ffdc9a9bf41d5b2a62183a574751fd848f787439a977a54620814ca199afa669250281a910753f3cfc440d3fb397cc7048350ca6a32fd5c09ccc7d58c3301adfe14b0b00120529ea55b8c2a1b121641906e86d170ea02dc53f4600739ac242095fee3af3b8aab2c45af29734bb5fcc40371e0fb7e0c254b0");$.X=$a;$.r.push(new O("nokia-pure-headline",["n2","n3","n4","n7","n8"]));
$.r.push(new O("nokia-pure-text",["n3","n4","n7"]));var ab;if(ab=Z)ab=!!Z.ha.__webfonttypekitmodule__;ab?(Z.R($),Z.load()):($.c=Ya,$.q=Ta($.c,$.ea),window.Typekit.addKit($));
})(this,document);
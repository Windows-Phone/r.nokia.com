
if(!document.getElementById)
{if(document.all)
{document.getElementById=function()
{return(document.all[arguments[0]]||null);}}
else if(document.layers)
{document.getElementById=function()
{return(document[arguments[0]]||null);}}}
var userAgent=navigator.userAgent;var isIE=false;var isMoz=false;var isOpera=window.opera?true:false;if(userAgent.indexOf("MSIE")>-1&&userAgent.indexOf("Opera")==-1)
{isIE=true;}else if((userAgent.indexOf("Mozilla")>-1)&&(userAgent.indexOf("compatible")==-1))
{isMoz=true;}
if(isIE)
{Error.prototype.toString=function()
{return this.message;}}
function addEvent(obj,evType,fn)
{if(obj.addEventListener)
{obj.addEventListener(evType,fn,false);return true;}else if(obj.attachEvent)
{var r=obj.attachEvent("on"+evType,fn);return r;}else
{return false;}}
function wopen(wurl,wname,wparams){window.open(wurl,wname,wparams);}
var $A=function(iterable){if(!iterable)return[];if(iterable.toArray){return iterable.toArray();}else{var results=[];for(var i=0;i<iterable.length;i++)
results.push(iterable[i]);return results;}}
Function.prototype.bind=function(){var __method=this,args=$A(arguments),object=args.shift();return function(){return __method.apply(object,args.concat($A(arguments)));}}
function controlTsrBody(tsrBodyDivId,status){var body="";var bodyClose="";var bodyOpen="";if(document.getElementById){body=document.getElementById(tsrBodyDivId);bodyOpen=document.getElementById(tsrBodyDivId+'_open_ctrl');bodyClose=document.getElementById(tsrBodyDivId+'_close_ctrl');}else if(document.all){body=document.all[tsrBodyDivId];bodyOpen=document.all[tsrBodyDivId+'_open_ctrl'];bodyClose=document.all[tsrBodyDivId+'_close_ctrl'];}
if(body==null||bodyOpen==null||bodyClose==null){return;}
if(status=="open"){body.style.display="block";bodyClose.style.display="block";bodyOpen.style.display="none";}else if(status=="close"){body.style.display="none";bodyClose.style.display="none";bodyOpen.style.display="block";}}
function buttonCtrl(elementId,status,auto){var openElement="";var closeElement="";var trayCookieValue=getCookieValue(trayCookieName);var trayLength=getLengthOfCookieValues(trayCookieValue);var autoUpdate=auto;var elementsOnThisPage=true;var elementsMax=this.comparableItemsMax?this.comparableItemsMax:6;if(document.getElementById){openElement=document.getElementById(elementId+'_open');closeElement=document.getElementById(elementId+'_close');}else if(document.all){openElement=document.all[elementId+'_open'];closeElement=document.all[elementId+'_close'];}
if(openElement==null||closeElement==null){elementsOnThisPage=false;}
if(status=="open"&&elementsOnThisPage){closeElement.style.display="none";openElement.style.display="block";}else if(status=="close"){if((trayLength<elementsMax)&&elementsOnThisPage){openElement.style.display="none";closeElement.style.display="block";}else{if(trayLength==elementsMax){if(autoUpdate=="false"){if(!trayOpen){showCompareTray();setTimeout("hideCompareTray()",5000);}else{setTimeout("hideCompareTray()",5000);}
if(document.getElementById){document.getElementById('trayIsFullNotification').style.display="block";document.getElementById('trayCounterNotification').style.display="none";}else if(document.all){document.all['trayIsFullNotification'].style.display="block";document.all['trayCounterNotification'].style.display="none";}}}}}
if(autoUpdate=="true"){if((trayLength==elementsMax)&&elementsOnThisPage){closeElement.style.display="block";openElement.style.display="none";}}}
function esTabControl(elementId,buttonId){if(document.getElementById){var element=document.getElementById(elementId);var parentElement=element.parentNode;var allTags=parentElement.getElementsByTagName("div");if(allTags.length>0){for(var i=0;i<allTags.length;i++){if(allTags[i].id.length>0){if(parentElement.id==document.getElementById(allTags[i].id).parentNode.id){document.getElementById(allTags[i].id).style.display="none";}}}}
element.style.display="block";var currentButton=document.getElementById(buttonId.id);parentElement=currentButton.parentNode;allTags=parentElement.getElementsByTagName("a");var naviElements=0;for(var t=0;t<allTags.length;t++){if(allTags[t].id.length>0){var currentId=allTags[t].id;if(currentId.search("button")>-1){naviElements++;}}}
var halfAmount=naviElements/2;var amountOfNonNaviLinks=allTags.length-naviElements;for(var x=0;x<allTags.length;x++){if(allTags[x].id.length>0){var tempButton="";var tempButton2="";var value=0;if(currentButton.id==allTags[x].id){tempButton=document.getElementById(allTags[x].id);if(x<=halfAmount){value=x+amountOfNonNaviLinks+halfAmount;}else if(x>halfAmount){value=x-amountOfNonNaviLinks-halfAmount;}
tempButton2=document.getElementById(allTags[value].id);elementsArray=new Array(tempButton.getElementsByTagName("span"));elementsArray2=new Array(tempButton2.getElementsByTagName("span"));for(var z=0;z<allTags.length;z++){if(allTags[z].id.length>0){var currentId=allTags[z].id;if(currentId.search("button")>-1){elementBeta=document.getElementById(allTags[z].id);if(elementBeta.className.indexOf("_a")>-1){tempString=elementBeta.className;tempString=tempString.substring(0,tempString.indexOf("_a"));elementBeta.className=tempString;}
elementsBetaArray=elementBeta.getElementsByTagName("span");if(elementsBetaArray[0].className.indexOf("_a")>-1){tempString=elementsBetaArray[0].className;tempString=tempString.substring(0,tempString.indexOf("_a"));elementsBetaArray[0].className=tempString;}}}}
if(tempButton.id==buttonId.id){for(var le=0;le<elementsArray.length;le++){var tempData=elementsArray[le];for(var zz=0;zz<2;zz++){for(var i=0;i<tempData.length;i++){var indexValue=tempData[i].className.indexOf("_a");if(indexValue==-1){document.getElementById(tempData[i].id).className=tempData[i].className+"_a";var parentAgain=document.getElementById(tempData[i].id).parentNode;parentAgain.className=parentAgain.className+"_a";}}
tempData=elementsArray2[le];}}}else{if(tempButton2.id!=buttonId.id){for(var le=0;le<elementsArray.length;le++){var tempData=elementsArray[le];for(var i=0;i<tempData.length;i++){var tempString=tempData[i].className;var indexValue=tempString.indexOf("_a");if(indexValue>-1){tempString=tempString.substring(0,indexValue);document.getElementById(tempData[i].id).className=tempString;var parentAgain=document.getElementById(tempData[i].id).parentNode;tempString=parentAgain.className;tempString=tempString.substring(0,tempString.indexOf("_a"));parentAgain.className=tempString;}}}}}}}}}}
function getCookieValue(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function getCookieValues(name){var cookies=document.cookie;var start=cookies.indexOf(name+"=");if(start==-1){return null;}
var len=start+name.length+1;var end=cookies.indexOf(";",len);if(end==-1){end=cookies.length;}
return unescape(cookies.substring(len,end));}
function getLengthOfCookieValues(value){var valueString=''+value;var wordsArray=valueString.split(',');var valueLength=wordsArray.length;return valueLength;}
function expandAll(group){var layer,cnt=0;while(layer=document.getElementById(group+cnt)){controlTsrBody(group+cnt,'open');cnt++;}}
function collapseAll(group){var layer,cnt=0;while(layer=document.getElementById(group+cnt)){controlTsrBody(group+cnt,'close');cnt++;}}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else{var expires="";}
document.cookie=name+"="+value+expires+"; path=/";}
function eraseCookie(name){createCookie(name,"",-1);}
function checkComparisonButtons(){var trayCookieValue=getCookieValue(trayCookieName);var productId=0;if(trayCookieValue!=null){var trayCookieArray=trayCookieValue.split(',');for(var i=0;i<trayCookieArray.length;i++){productId=trayCookieArray[i];buttonCtrl('comparebtn'+productId,'close','true');}}}
function checkComparisonButtonsWithCookie(trayCookieName){var trayCookieValue=getCookieValue(trayCookieName);var productId=0;if(trayCookieValue!=null){var trayCookieArray=trayCookieValue.split(',');for(var i=0;i<trayCookieArray.length;i++){productId=trayCookieArray[i];buttonCtrl('comparebtn'+productId,'close','true');}}}
function isDefined(variableName){return(window[variableName]!=null);}
fncInfo=new Object();fncInfo.style="";function printfire(){if(window.console){console.log(arguments[0].toString());}
else if(document.createEvent&&document.dispatchEvent&&!window.opera){printfire.args=arguments;var ev=document.createEvent("Events");ev.initEvent("printfire",false,true);dispatchEvent(ev);}else if(window.opera){window.opera.postError(arguments);}}
var showMessages=false;var preferAlert=window.all&&!window.opera;function gen_log(str){if(!this.showMessages||!str){return;}
str=str.toString();if(str.indexOf("ERROR: ")==0){alert(str);}else{print_msg(str);}}
function print_msg(msg){if(preferAlert){alert(msg);}else{printfire(msg);}}
function Log(){}
Log.prototype={error:function(str){if(window.console&&showMessages){console.trace();console.error(str);}
else gen_log("ERROR: "+str);},info:function(str){if(window.console&&showMessages)console.info(str);else gen_log("INFO: "+str);},warn:function(str){if(window.console&&showMessages){console.trace();console.warn(str);}else gen_log("WARNING: "+str);},debug:function(str){if(window.console&&showMessages)console.debug(str);else gen_log("DEBUG: "+str);}}
function handleError(message,URI,line){gen_log("ERROR: "+message+" at line "+line);return true;}
if(window.onerror){window.onerror=handleError;}
var hasFlash=function(){var a=6;if(navigator.appVersion.indexOf("MSIE")!=-1&&navigator.appVersion.indexOf("Windows")>-1){document.write('<script language="VBScript"\> \non error resume next \nhasFlash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & '+a+'))) \n</script\> \n');if(window.hasFlash!=null)return window.hasFlash}if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){var b=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description;return parseInt(b.charAt(b.indexOf(".")-1))>=a}return false}();String.prototype.normalize=function(){return this.replace(/\s+/g," ")};if(Array.prototype.push==null){Array.prototype.push=function(){var i=0,a=this.length,b=arguments.length;while(i<b){this[a++]=arguments[i++]}return this.length}}if(!Function.prototype.apply){Function.prototype.apply=function(a,b){var c=[];var d,e;if(!a)a=window;if(!b)b=[];for(var i=0;i<b.length;i++){c[i]="b["+i+"]"}e="a.__applyTemp__("+c.join(",")+");";a.__applyTemp__=this;d=eval(e);a.__applyTemp__=null;return d}}function named(a){return new named.Arguments(a)}named.Arguments=function(a){this.oArgs=a};named.Arguments.prototype.constructor=named.Arguments;named.extract=function(a,b){var c,d;var i=a.length;while(i--){d=a[i];if(d!=null&&d.constructor!=null&&d.constructor==named.Arguments){c=a[i].oArgs;break}}if(c==null)return;for(e in c)if(b[e]!=null)b[e](c[e]);return};var parseSelector=function(){var a=/^([^#.>`]*)(#|\.|\>|\`)(.+)$/;function r(s,t){var u=s.split(/\s*\,\s*/);var v=[];for(var i=0;i<u.length;i++)v=v.concat(b(u[i],t));return v}function b(c,d,e){c=c.normalize().replace(" ","`");var f=c.match(a);var g,h,i,j,k,n;var l=[];if(f==null)f=[c,c];if(f[1]=="")f[1]="*";if(e==null)e="`";if(d==null)d=document;switch(f[2]){case"#":k=f[3].match(a);if(k==null)k=[null,f[3]];g=document.getElementById(k[1]);if(g==null||(f[1]!="*"&&!o(g,f[1])))return l;if(k.length==2){l.push(g);return l}return b(k[3],g,k[2]);case".":if(e!=">")h=m(d,f[1]);else h=d.childNodes;for(i=0,n=h.length;i<n;i++){g=h[i];if(g.nodeType!=1)continue;k=f[3].match(a);if(k!=null){if(g.className==null||g.className.match("\\b"+k[1]+"\\b")==null)continue;j=b(k[3],g,k[2]);l=l.concat(j)}else if(g.className!=null&&g.className.match("\\b"+f[3]+"\\b")!=null)l.push(g)}return l;case">":if(e!=">")h=m(d,f[1]);else h=d.childNodes;for(i=0,n=h.length;i<n;i++){g=h[i];if(g.nodeType!=1)continue;if(!o(g,f[1]))continue;j=b(f[3],g,">");l=l.concat(j)}return l;case"`":h=m(d,f[1]);for(i=0,n=h.length;i<n;i++){g=h[i];j=b(f[3],g,"`");l=l.concat(j)}return l;default:if(e!=">")h=m(d,f[1]);else h=d.childNodes;for(i=0,n=h.length;i<n;i++){g=h[i];if(g.nodeType!=1)continue;if(!o(g,f[1]))continue;l.push(g)}return l}}function m(d,o){if(o=="*"&&d.all!=null)return d.all;return d.getElementsByTagName(o)}function o(p,q){return q=="*"?true:p.nodeName.toLowerCase().replace("html:","")==q.toLowerCase()}return r}();var sIFR=function(){var a="http://www.w3.org/1999/xhtml";var b=false;var c=false;var d;var ah=[];var al=document;var ak=al.documentElement;var am=window;var au=al.addEventListener;var av=am.addEventListener;var f=function(){var g=navigator.userAgent.toLowerCase();var f={a:g.indexOf("applewebkit")>-1,b:g.indexOf("safari")>-1,c:navigator.product!=null&&navigator.product.toLowerCase().indexOf("konqueror")>-1,d:g.indexOf("opera")>-1,e:al.contentType!=null&&al.contentType.indexOf("xml")>-1,f:true,g:true,h:null,i:null,j:null,k:null};f.l=f.a||f.c;f.m=!f.a&&navigator.product!=null&&navigator.product.toLowerCase()=="gecko";if(f.m)f.j=new Number(g.match(/.*gecko\/(\d{8}).*/)[1]);f.n=g.indexOf("msie")>-1&&!f.d&&!f.l&&!f.m;f.o=f.n&&g.match(/.*mac.*/)!=null;if(f.d)f.i=new Number(g.match(/.*opera(\s|\/)(\d+\.\d+)/)[2]);if(f.n||(f.d&&f.i<7.6))f.g=false;if(f.a)f.k=new Number(g.match(/.*applewebkit\/(\d+).*/)[1]);if(am.hasFlash&&(!f.n||f.o)){var aj=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description;f.h=parseInt(aj.charAt(aj.indexOf(".")-1))}if(g.match(/.*(windows|mac).*/)==null||f.o||f.c||(f.d&&(g.match(/.*mac.*/)!=null||f.i<7.6))||(f.b&&f.h<7)||(!f.b&&f.a&&f.k<124)||(f.m&&f.j<20020523))f.f=false;if(!f.o&&!f.m&&al.createElementNS)try{al.createElementNS(a,"i").innerHTML=""}catch(e){f.e=true}f.p=f.c||(f.a&&f.k<312)||f.n;return f}();function at(){return{bIsWebKit:f.a,bIsSafari:f.b,bIsKonq:f.c,bIsOpera:f.d,bIsXML:f.e,bHasTransparencySupport:f.f,bUseDOM:f.g,nFlashVersion:f.h,nOperaVersion:f.i,nGeckoBuildDate:f.j,nWebKitVersion:f.k,bIsKHTML:f.l,bIsGecko:f.m,bIsIE:f.n,bIsIEMac:f.o,bUseInnerHTMLHack:f.p}}if(am.hasFlash==false||!al.getElementsByTagName||!al.getElementById||(f.e&&f.p))return{UA:at()};function af(e){if((!k.bAutoInit&&(am.event||e)!=null)||!l(e))return;b=true;for(var i=0,h=ah.length;i<h;i++)j.apply(null,ah[i]);ah=[]}var k=af;function l(e){if(c==false||k.bIsDisabled==true||((f.e&&f.m||f.l)&&e==null&&b==false)||(al.body==null||al.getElementsByTagName("body").length==0))return false;return true}function m(n){if(f.n)return n.replace(new RegExp("%\d{0}","g"),"%25");return n.replace(new RegExp("%(?!\d)","g"),"%25")}function as(p,q){return q=="*"?true:p.nodeName.toLowerCase().replace("html:","")==q.toLowerCase()}function o(p,q,r,s,t){var u="";var v=p.firstChild;var w,x,y,z;if(s==null)s=0;if(t==null)t="";while(v){if(v.nodeType==3){z=v.nodeValue.replace("<","&lt;");switch(r){case"lower":u+=z.toLowerCase();break;case"upper":u+=z.toUpperCase();break;default:u+=z}}else if(v.nodeType==1){if(as(v,"a")&&!v.getAttribute("href")==false){if(v.getAttribute("target"))t+="&sifr_url_"+s+"_target="+v.getAttribute("target");t+="&sifr_url_"+s+"="+m(v.getAttribute("href")).replace(/&/g,"%26");u+='<a href="asfunction:_root.launchURL,'+s+'">';s++}else if(as(v,"br"))u+="<br/>";if(v.hasChildNodes()){y=o(v,null,r,s,t);u+=y.u;s=y.s;t=y.t}if(as(v,"a"))u+="</a>"}w=v;v=v.nextSibling;if(q!=null){x=w.parentNode.removeChild(w);q.appendChild(x)}}return{"u":u,"s":s,"t":t}}function A(B){if(al.createElementNS&&f.g)return al.createElementNS(a,B);return al.createElement(B)}function C(D,E,z){var p=A("param");p.setAttribute("name",E);p.setAttribute("value",z);D.appendChild(p)}function F(p,G){var H=p.className;if(H==null)H=G;else H=H.normalize()+(H==""?"":" ")+G;p.className=H}function aq(ar){var a=ak;if(k.bHideBrowserText==false)a=al.getElementsByTagName("body")[0];if((k.bHideBrowserText==false||ar)&&a)if(a.className==null||a.className.match(/\bsIFR\-hasFlash\b/)==null)F(a,"sIFR-hasFlash")}function j(I,J,K,L,M,N,O,P,Q,R,S,r,T){if(!l())return ah.push(arguments);aq();named.extract(arguments,{sSelector:function(ap){I=ap},sFlashSrc:function(ap){J=ap},sColor:function(ap){K=ap},sLinkColor:function(ap){L=ap},sHoverColor:function(ap){M=ap},sBgColor:function(ap){N=ap},nPaddingTop:function(ap){O=ap},nPaddingRight:function(ap){P=ap},nPaddingBottom:function(ap){Q=ap},nPaddingLeft:function(ap){R=ap},sFlashVars:function(ap){S=ap},sCase:function(ap){r=ap},sWmode:function(ap){T=ap}});var U=parseSelector(I);if(U.length==0)return false;if(S!=null)S="&"+S.normalize();else S="";if(K!=null)S+="&textcolor="+K;if(M!=null)S+="&hovercolor="+M;if(M!=null||L!=null)S+="&linkcolor="+(L||K);if(O==null)O=0;if(P==null)P=0;if(Q==null)Q=0;if(R==null)R=0;if(N==null)N="#FFFFFF";if(T=="transparent")if(!f.f)T="opaque";else N="transparent";if(T==null)T="";var p,V,W,X,Y,Z,aa,ab,ac;var ad=null;for(var i=0,h=U.length;i<h;i++){p=U[i];if(p.className!=null&&p.className.match(/\bsIFR\-replaced\b/)!=null)continue;V=p.offsetWidth-R-P;W=p.offsetHeight-O-Q;aa=A("span");aa.className="sIFR-alternate";ac=o(p,aa,r);Z="txt="+m(ac.u).replace(/\+/g,"%2B").replace(/&/g,"%26").replace(/\"/g,"%22").normalize()+S+"&w="+V+"&h="+W+ac.t;F(p,"sIFR-replaced");if(ad==null||!f.g){if(!f.g)p.innerHTML=['<embed class="sIFR-flash" type="application/x-shockwave-flash" src="',J,'" quality="best" wmode="',T,'" bgcolor="',N,'" flashvars="',Z,'" width="',V,'" height="',W,'" sifr="true"></embed>'].join("");else{if(f.d){ab=A("object");ab.setAttribute("data",J);C(ab,"quality","best");C(ab,"wmode",T);C(ab,"bgcolor",N)}else{ab=A("embed");ab.setAttribute("src",J);ab.setAttribute("quality","best");ab.setAttribute("flashvars",Z);ab.setAttribute("wmode",T);ab.setAttribute("bgcolor",N)}ab.setAttribute("sifr","true");ab.setAttribute("type","application/x-shockwave-flash");ab.className="sIFR-flash";if(!f.l||!f.e)ad=ab.cloneNode(true)}}else ab=ad.cloneNode(true);if(f.g){if(f.d)C(ab,"flashvars",Z);else ab.setAttribute("flashvars",Z);ab.setAttribute("width",V);ab.setAttribute("height",W);ab.style.width=V+"px";ab.style.height=W+"px";p.appendChild(ab)}p.appendChild(aa);if(f.p)p.innerHTML+=""}if(f.n&&k.bFixFragIdBug)setTimeout(function(){al.title=d},0)}function ai(){d=al.title}function ae(){if(k.bIsDisabled==true)return;c=true;if(k.bHideBrowserText)aq(true);if(am.attachEvent)am.attachEvent("onload",af);else if(!f.c&&(al.addEventListener||am.addEventListener)){if(f.a&&f.k>=132&&am.addEventListener)am.addEventListener("load",function(){setTimeout("sIFR({})",1)},false);else{if(al.addEventListener)al.addEventListener("load",af,false);if(am.addEventListener)am.addEventListener("load",af,false)}}else if(typeof am.onload=="function"){var ag=am.onload;am.onload=function(){ag();af()}}else am.onload=af;if(!f.n||am.location.hash=="")k.bFixFragIdBug=false;else ai()}k.UA=at();k.bAutoInit=true;k.bFixFragIdBug=true;k.replaceElement=j;k.updateDocumentTitle=ai;k.appendToClassName=F;k.setup=ae;k.debug=function(){aq(true)};k.debug.replaceNow=function(){ae();k()};k.bIsDisabled=false;k.bHideBrowserText=true;return k}();if(typeof sIFR=="function"&&!sIFR.UA.bIsIEMac){sIFR.setup();};var accCookieName="accSelectedPhone";var viewMode="icon";var selectedPhone="";var docElementNormal="";var amountOfProds=0;var fullUrldata=document.location.href;var skipConstructCompatibility=false;var firstLoad=true;var noProductsFound=false;function constructCompatibility(functionValue){var localPhoneProductArray=phoneProductArray;var localAccessoryProductCompatibility=accessoryProductCompatibility;amountOfProds=0;var allDivs=document.getElementById("accProductContainer").getElementsByTagName("div");for(var i=0;i<allDivs.length;i++){if(allDivs[i].id!=""&&allDivs[i].id.indexOf("productElement")>-1){if(functionValue=="showall"){allDivs[i].style.display="block";}else{var compatFound=false;var subst=allDivs[i].id.split("_");for(var t=0;t<localAccessoryProductCompatibility.length;t++){if(subst[1]==localAccessoryProductCompatibility[t][0]){for(var s=1;s<localAccessoryProductCompatibility[t].length;s++){for(var z=0;z<localPhoneProductArray.length;z++){var tempArray=localPhoneProductArray[z];if(tempArray[0]==selectedPhone&&localAccessoryProductCompatibility[t][s]==tempArray[2]){compatFound=true;break;}}
if(compatFound)break;}}
if(compatFound)break;}
if(!compatFound){allDivs[i].style.display="none";}else{allDivs[i].style.display="block";amountOfProds++;}}}}}
function initSelectList(){var localPhoneProductArray=phoneProductArray;if(document.getElementById("accNaviPhoneSelectFormId")!=null){document.getElementById("accNaviPhoneSelectFormId").style.display="block";}
var doNotChange=false;if(fullUrldata.indexOf("?")>-1){var splittedUrl=fullUrldata.split("?");splittedUrl=splittedUrl[1].split("=");if(splittedUrl[0]=="phoneid"){for(var i=0;i<localPhoneProductArray.length;i++){if(localPhoneProductArray[i][2]==splittedUrl[1]){createCookie(accCookieName,phoneProductArray[i][0],5);break;}}}}
selectedValueFromCookie=getCookieValue(accCookieName);if(selectedValueFromCookie!=null){selectedPhone=selectedValueFromCookie;for(var i=0;i<document.accNaviPhoneSelectForm.accNaviPhoneSelectionName.length;i++){if(selectedValueFromCookie==document.accNaviPhoneSelectForm.accNaviPhoneSelectionName[i].value){document.accNaviPhoneSelectForm.accNaviPhoneSelectionName.selectedIndex=i;document.accNaviPhoneSelectForm.accNaviPhoneSelectionName[0].innerHTML=document.accNaviPhoneSelectForm.accNaviPhoneHiddenField.value;populateThumbnailAndLink(selectedValueFromCookie);break;}}}
changeDropdownText();}
function populateThumbnailAndLink(selectValue){var localPhoneProductArray=phoneProductArray;var thumbnailImage=document.getElementById("accNaviThumbnail");var phoneLink=document.getElementById("accNaviPhoneURL");if(localPhoneProductArray.length>0){if(selectValue=="remove"){thumbnailImage.style.display="none";phoneLink.style.display="none";}else{for(var i=0;i<localPhoneProductArray.length;i++){if(localPhoneProductArray[i][0]!=null){if(selectValue==localPhoneProductArray[i][0]){phoneLink.innerHTML=localPhoneProductArray[i][0];phoneLink.href=localPhoneProductArray[i][1][0];thumbnailImage.src=localPhoneProductArray[i][1][1];thumbnailImage.style.display="inline";phoneLink.style.display="block";break;}}}}}}
function changePhone(){var selectValue=document.accNaviPhoneSelectForm.accNaviPhoneSelectionName.value;if(selectValue!=""){populateThumbnailAndLink(selectValue);if(selectValue=="remove"){eraseCookie(accCookieName);selectedPhone="";if(document.getElementById("accCriteriaSelectFormId")){constructCompatibility("showall");}
changeDropdownText();if(document.getElementById("accCriteriaSelectFormId")){disableAccCategoryList();}}else{valueFromCookie=getCookieValue(accCookieName);if(valueFromCookie!=null){if(valueFromCookie!=selectValue){eraseCookie(accCookieName);createCookie(accCookieName,selectValue,5);}}else{createCookie(accCookieName,selectValue,5);}
selectedPhone=selectValue;var sortOrder=document.accCriteriaSelectForm.accCriteriaSelectSelect.value;if(sortOrder!="#"){accSortProductList();}else{if(document.getElementById("accCriteriaSelectFormId")){constructCompatibility("default");}}
changeDropdownText();if(document.getElementById("accCriteriaSelectFormId")){skipConstructCompatibility=true;initAccCategoryList(amountOfProds);skipConstructCompatibility=false;}}}
if(document.getElementById("accIconSelect")==null){if(document.getElementById("accPageChangeTargetUrl0")!=null){if(selectValue!="remove"){window.location=document.getElementById("accPageChangeTargetUrl0").href;}}}}
function changeDropdownText(){selectDefault=document.accNaviPhoneSelectForm.accNaviPhoneHiddenFieldDefault.value;removeDefault=document.accNaviPhoneSelectForm.accNaviPhoneHiddenField.value;for(var i=0;i<document.accNaviPhoneSelectForm.accNaviPhoneSelectionName.length;i++){if(removeDefault==document.accNaviPhoneSelectForm.accNaviPhoneSelectionName[i].innerHTML){if(document.accNaviPhoneSelectForm.accNaviPhoneSelectionName.value=="remove"){document.accNaviPhoneSelectForm.accNaviPhoneSelectionName[i].innerHTML=selectDefault;break;}}
if(selectDefault==document.accNaviPhoneSelectForm.accNaviPhoneSelectionName[i].innerHTML){if(getCookieValue(accCookieName)!=null){document.accNaviPhoneSelectForm.accNaviPhoneSelectionName[i].innerHTML=removeDefault;break;}}}}
function accChangeViewMode(value){var allDivs=document.getElementById("accProductContainer").getElementsByTagName("div");if(value!=viewMode){for(var i=0;i<allDivs.length;i++){if(allDivs[i].id!=""){if(allDivs[i].id.indexOf("productElement")>-1){if(value=="icon"){allDivs[i].className="acc_icon_item";viewMode="icon";}else{allDivs[i].className="acc_list_item";viewMode="list";}}}}
accChangeViewModeItemStyle();}}
function accSortNumber(a,b){return a-b}
function accSortProductList(){var localAccessoryProductCloneList=accessoryProductCloneList;var localAccessoryProductMasterList=accessoryProductMasterList;var sortOrder=document.accCriteriaSelectForm.accCriteriaSelectSelect.value;if(sortOrder!="#"){var allDivs=document.getElementById("accProductContainer").getElementsByTagName("div");var productItems=new Array();var idArray=new Array();for(var i=0;i<allDivs.length;i++){if(allDivs[i].id!=""){if(allDivs[i].id.indexOf("productElement")>-1){var subst=allDivs[i].id.split("_");var currElementHTML=allDivs[i].innerHTML;var dataArray=new Array(subst[1],currElementHTML);productItems[productItems.length]=dataArray;}}}
var output="";if(sortOrder=="name"){localAccessoryProductCloneList.sort();}else if(sortOrder=="price"){}else{localAccessoryProductCloneList=new Array();for(var i=0;i<localAccessoryProductMasterList.length;i++){localAccessoryProductCloneList[localAccessoryProductCloneList.length]=localAccessoryProductMasterList[i];}}
var outputbuffer=new Array();for(var i=0;i<localAccessoryProductCloneList.length;i++){for(var t=0;t<productItems.length;t++){if(localAccessoryProductCloneList[i]==productItems[t][0]){if(viewMode=="list"){outputbuffer[outputbuffer.length]="<div id=\"productElement_";outputbuffer[outputbuffer.length]=localAccessoryProductCloneList[i];outputbuffer[outputbuffer.length]="\" class=\"acc_list_item\">\n";}else{outputbuffer[outputbuffer.length]="<div id=\"productElement_";outputbuffer[outputbuffer.length]=localAccessoryProductCloneList[i];outputbuffer[outputbuffer.length]="\" class=\"acc_icon_item\">\n";}
outputbuffer[outputbuffer.length]=productItems[t][1];outputbuffer[outputbuffer.length]="</div>\n";}}}
document.getElementById("accProductContainer").innerHTML="";document.getElementById("accProductContainer").innerHTML=outputbuffer.join("");if(selectedPhone!=""){constructCompatibility("default");}else{constructCompatibility("showall");}}}
function accChangeViewModeItemStyle(){var classNam=document.getElementById("accIconSelect").className;document.getElementById("accIconSelect").className=document.getElementById("accListSelect").className;document.getElementById("accListSelect").className=classNam;}
function initAccCategoryList(elementAmount){valueFromCookie=getCookieValue(accCookieName);if(valueFromCookie==null&&firstLoad){constructCompatibility("showall");firstLoad=false;}
if(document.getElementById("accCriteriaSelectFormId")!=null){document.getElementById("accCriteriaSelectFormId").style.display="block";var docElement=document.getElementById("accCriteriaSelectBodyTextId");if(!noProductsFound){docElementNormal=docElement.innerHTML;}
if(valueFromCookie!=null){if(!skipConstructCompatibility){constructCompatibility("default");}
if(amountOfProds<elementAmount){elementAmount=amountOfProds;}
if(docElement!=null&&elementAmount!="0"&&elementAmount!=""){if(noProductsFound){docElement.innerHTML=docElementNormal;}
var outputbuffer=new Array();var seBoTxt=docElement.innerHTML;if(seBoTxt.indexOf("{")>-1){var seBoTxtArray=seBoTxt.split("{");var seBoTxtArrayB=seBoTxtArray[1].split("}");outputbuffer[outputbuffer.length]=seBoTxtArray[0];outputbuffer[outputbuffer.length]=" <b>";outputbuffer[outputbuffer.length]=elementAmount;outputbuffer[outputbuffer.length]="</b> ";outputbuffer[outputbuffer.length]=seBoTxtArrayB[1];}else if(seBoTxt.indexOf("<B>")>-1){var seBoTxtArray=seBoTxt.split("<B>");var seBoTxtArrayB=seBoTxtArray[1].split("</B>");outputbuffer[outputbuffer.length]=seBoTxtArray[0];outputbuffer[outputbuffer.length]=" <b>";outputbuffer[outputbuffer.length]=elementAmount;outputbuffer[outputbuffer.length]="</b> ";outputbuffer[outputbuffer.length]=seBoTxtArrayB[1];}else if(seBoTxt.indexOf("<b>")>-1){var seBoTxtArray=seBoTxt.split("<b>");var seBoTxtArrayB=seBoTxtArray[1].split("</b>");outputbuffer[outputbuffer.length]=seBoTxtArray[0];outputbuffer[outputbuffer.length]=" <b>";outputbuffer[outputbuffer.length]=elementAmount;outputbuffer[outputbuffer.length]="</b> ";outputbuffer[outputbuffer.length]=seBoTxtArrayB[1];}
docElement.innerHTML=outputbuffer.join("");docElement.style.display="block";}else if(docElement!=null&&elementAmount=="0"){var selectValue=document.accNaviPhoneSelectForm.accNaviPhoneSelectionName.value;if(selectValue!=""&&selectValue!="remove"){noProductsFound=true;docElement.innerHTML=acc_no_results_found;docElement.style.display="block";}else{docElement.style.display="none";}}}}
if(!skipConstructCompatibility){accSortProductList();}}
function disableAccCategoryList(){if(document.getElementById("accCriteriaSelectBodyTextId")!=null){document.getElementById("accCriteriaSelectBodyTextId").style.display="none";}}
function redirectIfNecessary(){}
var pngFixingInProgress=false;function pngfix(){if(pngFixingInProgress){return;}
pngFixingInProgress=true;var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);if((version>=5.5)&&(document.body.filters)){for(var i=0,len=document.images.length;i<len;i++){var img=document.images[i];if(img&&img.src){var imgName=img.src.toUpperCase();if(imgName.substring(imgName.length-3,imgName.length)=="PNG"){var origSrc=img.src;img.src="/pics/1x1trans_1.gif";img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'"+origSrc+"\', sizingMethod='scale');";}}}}
pngFixingInProgress=false;}

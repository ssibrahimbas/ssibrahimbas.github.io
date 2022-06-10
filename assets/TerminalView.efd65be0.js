var Ne=Object.defineProperty,je=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var he=(f,t,a)=>t in f?Ne(f,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[t]=a,le=(f,t)=>{for(var a in t||(t={}))ge.call(t,a)&&he(f,a,t[a]);if(re)for(var a of re(t))Re.call(t,a)&&he(f,a,t[a]);return f},ye=(f,t)=>je(f,Ue(t));var be=(f,t)=>{var a={};for(var _ in f)ge.call(f,_)&&t.indexOf(_)<0&&(a[_]=f[_]);if(f!=null&&re)for(var _ of re(f))t.indexOf(_)<0&&Re.call(f,_)&&(a[_]=f[_]);return a};var m=(f,t,a)=>(he(f,typeof t!="symbol"?t+"":t,a),a);import{d as We,a as j,u as Ce,b as me,c as z,o as I,e as M,f as H,t as D,g as N,n as se,h as _e,r as Ie,F as G,i as Pe,j as Te,k as Be,p as qe,l as Ve,m as Ye,q as de,s as we,v as $e,w as ke}from"./index.b77d5175.js";const ze=We({id:"user",state:()=>({user:{username:"ssibrahimbas@Samis-Macbook Pro",separator:"%"}}),getters:{getUser:f=>f.user}});var oe=(f,t)=>{const a=f.__vccOpts||f;for(const[_,s]of t)a[_]=s;return a};const Ge={class:"terminal-input-section"},Xe={class:"terminal-user"},Je={key:0,class:"terminal-autocomplete"},Ze=j({__name:"TerminalInput",props:{value:null,finished:{type:Boolean},autocompletedKey:null,activePosition:null},emits:["update:value"],setup(f,{emit:t}){const a=f;Ce(P=>({"288c0767":N($).colorText,"4cc202b7":N(F)}));const _=me(),s=ze(),$=z(()=>_.getColors),v=z(()=>s.getUser),y=z({get:()=>a.value,set:P=>t("update:value",P)}),F=z(()=>`${(a.value.length-a.activePosition)*-9}px`);return(P,U)=>(I(),M(G,null,[H("section",Ge,[H("span",Xe,D(N(v).username)+" "+D(N(v).separator),1),H("span",{class:se(["terminal-input base-input",{"use-blink":!f.finished,"use-caret-transform":a.activePosition!==-1&&a.activePosition>0}])},D(N(y)),3),!f.finished&&f.autocompletedKey!==""?(I(),M("span",Je,D(f.autocompletedKey),1)):_e("",!0)]),Ie(P.$slots,"result",{},void 0,!0)],64))}});var Qe=oe(Ze,[["__scopeId","data-v-86574d2a"]]);const et=["innerHTML"],xe=j({__name:"TerminalResult",props:{value:null},setup(f){return(t,a)=>(I(),M("span",{innerHTML:f.value},null,8,et))}});var Fe={exports:{}};(function(f){var t=t||function(){var a=0,_=1,s=2,$=3,v={},y={font:"Standard",fontPath:"./fonts"};function F(i,l){var e={},n,r,u,h,c=[[16384,"vLayout",s],[8192,"vLayout",_],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",s],[64,"hLayout",_],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(n=l!==null?l:i,r=0,u=c.length;r<u;)h=c[r],n>=h[0]?(n=n-h[0],e[h[1]]=typeof e[h[1]]=="undefined"?h[2]:e[h[1]]):h[1]!=="vLayout"&&h[1]!=="hLayout"&&(e[h[1]]=!1),r++;return typeof e.hLayout=="undefined"?i===0?e.hLayout=_:i===-1?e.hLayout=a:e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6?e.hLayout=$:e.hLayout=s:e.hLayout===s&&(e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6)&&(e.hLayout=$),typeof e.vLayout=="undefined"?e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5?e.vLayout=$:e.vLayout=a:e.vLayout===s&&(e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5)&&(e.vLayout=$),e}function P(i,l,e){return i===l&&i!==e?i:!1}function U(i,l){var e="|/\\[]{}()<>";if(i==="_"){if(e.indexOf(l)!==-1)return l}else if(l==="_"&&e.indexOf(i)!==-1)return i;return!1}function X(i,l){var e="| /\\ [] {} () <>",n=e.indexOf(i),r=e.indexOf(l);return n!==-1&&r!==-1&&n!==r&&Math.abs(n-r)!==1?e.substr(Math.max(n,r),1):!1}function J(i,l){var e="[] {} ()",n=e.indexOf(i),r=e.indexOf(l);return n!==-1&&r!==-1&&Math.abs(n-r)<=1?"|":!1}function Z(i,l){var e="/\\ \\/ ><",n={0:"|",3:"Y",6:"X"},r=e.indexOf(i),u=e.indexOf(l);return r!==-1&&u!==-1&&u-r===1?n[r]:!1}function W(i,l,e){return i===e&&l===e?e:!1}function Q(i,l){return i===l?i:!1}function ee(i,l){var e="|/\\[]{}()<>";if(i==="_"){if(e.indexOf(l)!==-1)return l}else if(l==="_"&&e.indexOf(i)!==-1)return i;return!1}function q(i,l){var e="| /\\ [] {} () <>",n=e.indexOf(i),r=e.indexOf(l);return n!==-1&&r!==-1&&n!==r&&Math.abs(n-r)!==1?e.substr(Math.max(n,r),1):!1}function te(i,l){return i==="-"&&l==="_"||i==="_"&&l==="-"?"=":!1}function ne(i,l){return i==="|"&&l==="|"?"|":!1}function p(i,l,e){return l===" "||l===""||l===e&&i!==" "?i:l}function L(i,l,e){if(e.fittingRules.vLayout===a)return"invalid";var n,r=Math.min(i.length,l.length),u,h,c=!1,o;if(r===0)return"invalid";for(n=0;n<r;n++)if(u=i.substr(n,1),h=l.substr(n,1),u!==" "&&h!==" "){if(e.fittingRules.vLayout===_)return"invalid";if(e.fittingRules.vLayout===s)return"end";if(ne(u,h)){c=c||!1;continue}if(o=!1,o=e.fittingRules.vRule1?Q(u,h):o,o=!o&&e.fittingRules.vRule2?ee(u,h):o,o=!o&&e.fittingRules.vRule3?q(u,h):o,o=!o&&e.fittingRules.vRule4?te(u,h):o,c=!0,!o)return"invalid"}return c?"end":"valid"}function T(i,l,e){var n=i.length,r=i.length;l.length;for(var u,h,c,o=1,d,w,R;o<=n;){for(u=i.slice(Math.max(0,r-o),r),h=l.slice(0,Math.min(n,o)),c=h.length,R="",d=0;d<c;d++)if(w=L(u[d],h[d],e),w==="end")R=w;else if(w==="invalid"){R=w;break}else R===""&&(R="valid");if(R==="invalid"){o--;break}if(R==="end")break;R==="valid"&&o++}return Math.min(n,o)}function ce(i,l,e){var n,r=Math.min(i.length,l.length),u,h,c="",o;for(n=0;n<r;n++)u=i.substr(n,1),h=l.substr(n,1),u!==" "&&h!==" "?e.fittingRules.vLayout===_||e.fittingRules.vLayout===s?c+=p(u,h):(o=!1,o=e.fittingRules.vRule5?ne(u,h):o,o=!o&&e.fittingRules.vRule1?Q(u,h):o,o=!o&&e.fittingRules.vRule2?ee(u,h):o,o=!o&&e.fittingRules.vRule3?q(u,h):o,o=!o&&e.fittingRules.vRule4?te(u,h):o,c+=o):c+=p(u,h);return c}function O(i,l,e,n){var r=i.length,u=l.length,h=i.slice(0,Math.max(0,r-e)),c=i.slice(Math.max(0,r-e),r),o=l.slice(0,Math.min(e,u)),d,w,R,g=[],b,A=[];for(w=c.length,d=0;d<w;d++)d>=u?R=c[d]:R=ce(c[d],o[d],n),g.push(R);return b=l.slice(Math.min(e,u),u),A.concat(h,g,b)}function ie(i,l){var e,n=i.length,r="";for(e=0;e<l;e++)r+=" ";for(e=0;e<n;e++)i[e]+=r}function Me(i,l,e){var n=i[0].length,r=l[0].length,u;return n>r?ie(l,n-r):r>n&&ie(i,r-n),u=T(i,l,e),O(i,l,u,e)}function He(i,l,e){if(e.fittingRules.hLayout===a)return 0;var n,r=i.length,u=l.length,h=r,c=1,o=!1,d=!1,w,R,g,b;if(r===0)return 0;e:for(;c<=h;){for(w=i.substr(r-c,c),R=l.substr(0,Math.min(c,u)),n=0;n<Math.min(c,u);n++)if(g=w.substr(n,1),b=R.substr(n,1),g!==" "&&b!==" "){if(e.fittingRules.hLayout===_){c=c-1;break e}else if(e.fittingRules.hLayout===s){(g===e.hardBlank||b===e.hardBlank)&&(c=c-1);break e}else if(o=!0,d=!1,d=e.fittingRules.hRule1?P(g,b,e.hardBlank):d,d=!d&&e.fittingRules.hRule2?U(g,b,e.hardBlank):d,d=!d&&e.fittingRules.hRule3?X(g,b,e.hardBlank):d,d=!d&&e.fittingRules.hRule4?J(g,b,e.hardBlank):d,d=!d&&e.fittingRules.hRule5?Z(g,b,e.hardBlank):d,d=!d&&e.fittingRules.hRule6?W(g,b,e.hardBlank):d,!d){c=c-1;break e}}if(o)break;c++}return Math.min(h,c)}function fe(i,l,e,n){var r,u,h=[],c,o,d,w,R,g,b,A;for(r=0;r<n.height;r++){b=i[r],A=l[r],R=b.length,g=A.length,c=R-e,o=b.substr(0,Math.max(0,c)),d="";var K=b.substr(Math.max(0,R-e),e),ae=A.substr(0,Math.min(e,g));for(u=0;u<e;u++){var x=u<R?K.substr(u,1):" ",S=u<g?ae.substr(u,1):" ";if(x!==" "&&S!==" ")if(n.fittingRules.hLayout===_)d+=p(x,S,n.hardBlank);else if(n.fittingRules.hLayout===s)d+=p(x,S,n.hardBlank);else{var k="";k=!k&&n.fittingRules.hRule1?P(x,S,n.hardBlank):k,k=!k&&n.fittingRules.hRule2?U(x,S,n.hardBlank):k,k=!k&&n.fittingRules.hRule3?X(x,S,n.hardBlank):k,k=!k&&n.fittingRules.hRule4?J(x,S,n.hardBlank):k,k=!k&&n.fittingRules.hRule5?Z(x,S,n.hardBlank):k,k=!k&&n.fittingRules.hRule6?W(x,S,n.hardBlank):k,k=k||p(x,S,n.hardBlank),d+=k}else d+=p(x,S,n.hardBlank)}e>=g?w="":w=A.substr(e,Math.max(0,g-e)),h[r]=o+d+w}return h}function V(i){var l=[],e;for(e=0;e<i;e++)l[e]="";return l}function E(i,l,e){return i.reduce(function(n,r){return fe(n,r.fig,r.overlap,e)},V(l))}function Oe(i,l,e){for(var n={},r=i.length;--r;){var u=E(i.slice(0,r),l,e);if(Y(u)<=e.width){n.outputFigText=u,r<i.length?n.chars=i.slice(r):n.chars=[];break}}return n}function De(i,l,e){var n,r,u=0,h,c,o,d=e.height,w=[],R,g,b=[],A,K,ae,x,S;for(c=V(d),e.width>0&&e.whitespaceBreak&&(g={chars:[],overlap:u}),e.printDirection===1&&(i=i.split("").reverse().join("")),o=i.length,n=0;n<o;n++)if(A=i.substr(n,1),K=A.match(/\s/),r=l[A.charCodeAt(0)],x=null,r){if(e.fittingRules.hLayout!==a){for(u=1e4,h=0;h<e.height;h++)u=Math.min(u,He(c[h],r[h],e));u=u===1e4?0:u}if(e.width>0&&(e.whitespaceBreak?(ae=E(g.chars.concat([{fig:r,overlap:u}]),d,e),x=E(b.concat([{fig:ae,overlap:g.overlap}]),d,e),R=Y(x)):(x=fe(c,r,u,e),R=Y(x)),R>=e.width&&n>0&&(e.whitespaceBreak?(c=E(b.slice(0,-1),d,e),b.length>1&&(w.push(c),c=V(d)),b=[]):(w.push(c),c=V(d)))),e.width>0&&e.whitespaceBreak&&((!K||n===o-1)&&g.chars.push({fig:r,overlap:u}),K||n===o-1)){for(S=null;x=E(g.chars,d,e),R=Y(x),R>=e.width;)S=Oe(g.chars,d,e),g={chars:S.chars},w.push(S.outputFigText);R>0&&(S?b.push({fig:x,overlap:1}):b.push({fig:x,overlap:g.overlap})),K&&(b.push({fig:r,overlap:u}),c=V(d)),n===o-1&&(c=E(b,d,e)),g={chars:[],overlap:u};continue}c=fe(c,r,u,e)}return Y(c)>0&&w.push(c),e.showHardBlanks!==!0&&w.forEach(function(k){for(o=k.length,h=0;h<o;h++)k[h]=k[h].replace(new RegExp("\\"+e.hardBlank,"g")," ")}),w}var Ee=function(i,l){var e=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],n={},r;if(i==="default")for(r=0;r<e.length;r++)n[e[r]]=l.fittingRules[e[r]];else if(i==="full")n={hLayout:a,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(i==="fitted")n={hLayout:_,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(i==="controlled smushing")n={hLayout:$,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(i==="universal smushing")n={hLayout:s,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return n},Ke=function(i,l){var e=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],n={},r;if(i==="default")for(r=0;r<e.length;r++)n[e[r]]=l.fittingRules[e[r]];else if(i==="full")n={vLayout:a,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(i==="fitted")n={vLayout:_,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(i==="controlled smushing")n={vLayout:$,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(i==="universal smushing")n={vLayout:s,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return n},Y=function(i){return Math.max.apply(Math,i.map(function(l,e){return l.length}))},ve=function(i,l,e){e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`);var n=e.split(`
`),r=[],u,h,c;for(h=n.length,u=0;u<h;u++)r=r.concat(De(n[u],v[i],l));for(h=r.length,c=r[0],u=1;u<h;u++)c=Me(c,r[u],l);return c?c.join(`
`):""},C=function(i,l,e){C.text(i,l,e)};C.text=function(i,l,e){var n="";i=i+"",typeof arguments[1]=="function"&&(e=l,l={},l.font=y.font),typeof l=="string"?(n=l,l={}):(l=l||{},n=l.font||y.font),C.loadFont(n,function(r,u){if(r)return e(r);e(null,ve(n,pe(u,l),i))})},C.textSync=function(i,l){var e="";i=i+"",typeof l=="string"?(e=l,l={}):(l=l||{},e=l.font||y.font);var n=pe(C.loadFontSync(e),l);return ve(e,n,i)};function pe(i,l){var e=JSON.parse(JSON.stringify(i)),n,r;if(typeof l.horizontalLayout!="undefined"){n=Ee(l.horizontalLayout,i);for(r in n)n.hasOwnProperty(r)&&(e.fittingRules[r]=n[r])}if(typeof l.verticalLayout!="undefined"){n=Ke(l.verticalLayout,i);for(r in n)n.hasOwnProperty(r)&&(e.fittingRules[r]=n[r])}return e.printDirection=typeof l.printDirection!="undefined"?l.printDirection:i.printDirection,e.showHardBlanks=l.showHardBlanks||!1,e.width=l.width||-1,e.whitespaceBreak=l.whitespaceBreak||!1,e}return C.metadata=function(i,l){i=i+"",C.loadFont(i,function(e,n){if(e){l(e);return}l(null,n,v[i].comment)})},C.defaults=function(i){if(typeof i=="object"&&i!==null)for(var l in i)i.hasOwnProperty(l)&&(y[l]=i[l]);return JSON.parse(JSON.stringify(y))},C.parseFont=function(i,l){l=l.replace(/\r\n/g,`
`).replace(/\r/g,`
`),v[i]={};var e=l.split(`
`),n=e.splice(0,1)[0].split(" "),r=v[i],u={};if(u.hardBlank=n[0].substr(5,1),u.height=parseInt(n[1],10),u.baseline=parseInt(n[2],10),u.maxLength=parseInt(n[3],10),u.oldLayout=parseInt(n[4],10),u.numCommentLines=parseInt(n[5],10),u.printDirection=n.length>=6?parseInt(n[6],10):0,u.fullLayout=n.length>=7?parseInt(n[7],10):null,u.codeTagCount=n.length>=8?parseInt(n[8],10):null,u.fittingRules=F(u.oldLayout,u.fullLayout),r.options=u,u.hardBlank.length!==1||isNaN(u.height)||isNaN(u.baseline)||isNaN(u.maxLength)||isNaN(u.oldLayout)||isNaN(u.numCommentLines))throw new Error("FIGlet header contains invalid values.");var h=[],c;for(c=32;c<=126;c++)h.push(c);if(h=h.concat(196,214,220,228,246,252,223),e.length<u.numCommentLines+u.height*h.length)throw new Error("FIGlet file is missing data.");var o,d,w=!1;for(r.comment=e.splice(0,u.numCommentLines).join(`
`),r.numChars=0;e.length>0&&r.numChars<h.length;){for(o=h[r.numChars],r[o]=e.splice(0,u.height),c=0;c<u.height;c++)typeof r[o][c]=="undefined"?r[o][c]="":(d=new RegExp("\\"+r[o][c].substr(r[o][c].length-1,1)+"+$"),r[o][c]=r[o][c].replace(d,""));r.numChars++}for(;e.length>0;){if(o=e.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(o))o=parseInt(o,16);else if(/^0[0-7]+$/.test(o))o=parseInt(o,8);else if(/^[0-9]+$/.test(o))o=parseInt(o,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(o))o=parseInt(o,16);else{if(o==="")break;console.log("Invalid data:"+o),w=!0;break}for(r[o]=e.splice(0,u.height),c=0;c<u.height;c++)typeof r[o][c]=="undefined"?r[o][c]="":(d=new RegExp("\\"+r[o][c].substr(r[o][c].length-1,1)+"+$"),r[o][c]=r[o][c].replace(d,""));r.numChars++}if(w===!0)throw new Error("Error parsing data.");return u},C.loadFont=function(i,l){if(v[i]){l(null,v[i].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(y.fontPath+"/"+i+".flf").then(function(e){if(e.ok)return e.text();throw console.log("Unexpected response",e),new Error("Network response was not ok.")}).then(function(e){l(null,C.parseFont(i,e))}).catch(l)},C.loadFontSync=function(i){if(v[i])return v[i].options;throw new Error("synchronous font loading is not implemented for the browser")},C.preloadFonts=function(i,l){var e=[];i.reduce(function(n,r){return n.then(function(){return fetch(y.fontPath+"/"+r+".flf").then(u=>u.text()).then(function(u){e.push(u)})})},Promise.resolve()).then(function(n){for(var r in i)i.hasOwnProperty(r)&&C.parseFont(i[r],e[r]);l&&l()})},C.figFonts=v,C}();f.exports=t})(Fe);var Le=Fe.exports,tt=`flf2a$ 7 6 22 15 4
starwars.flf by Ryan Youck (youck@cs.uregina.ca) Dec 25/1994
I am not responsible for use of this font  
Based on Big.flf by Glenn Chappell

$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
 __ $@
|  |$@
|  |$@
|  |$@
|__|$@
(__)$@
    $@@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @@
   _  _   @
 _| || |_$@
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_| $@
          @@
     __,--,_.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_    __/   $@
  '--'      $@@
  _     ___$ @
 / \\   /  /$ @
( o ) /  / $ @
 \\_/ /  / _$ @
    /  / / \\ @
   /  / ( o )@
  /__/   \\_/ @@
        @
  ___   @
 ( _ ) $@
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
       $@@
 __ @
(_ )@
 |/ @
  $ @
  $ @
  $ @
    @@
  ___@
 /  /@
|  |$@
|  |$@
|  |$@
|  |$@
 \\__\\@@
___  @
\\  \\ @
 |  |@
 |  |@
 |  |@
 |  |@
/__/ @@
    _    @
 /\\| |/\\ @
 \\ \` ' /$@
|_     _|@
 / , . \\$@
 \\/|_|\\/ @
         @@
       @
   _   @
 _| |_$@
|_   _|@
  |_| $@
   $   @
       @@
    @
    @
  $ @
  $ @
 __ @
(_ )@
 |/ @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @@
    @
    @
    @
  $ @
 __ @
(__)@
    @@
     ___@
    /  /@
   /  / @
  /  /$ @
 /  /$  @
/__/$   @
        @@
  ___  $@
 / _ \\ $@
| | | |$@
| | | |$@
| |_| |$@
 \\___/ $@
       $@@
 __ $@
/_ |$@
 | |$@
 | |$@
 | |$@
 |_|$@
    $@@
 ___  $@
|__ \\ $@
  $) |$@
  / / $@
 / /_ $@
|____|$@
      $@@
 ____  $@
|___ \\ $@
  __) |$@
 |__ < $@
 ___) |$@
|____/ $@
       $@@
 _  _   $@
| || |  $@
| || |_ $@
|__   _|$@
   | |  $@
   |_|  $@
        $@@
 _____ $@
| ____|$@
| |__  $@
|___ \\ $@
 ___) |$@
|____/ $@
       $@@
   __  $@
  / /  $@
 / /_  $@
| '_ \\ $@
| (_) |$@
 \\___/ $@
       $@@
 ______ $@
|____  |$@
   $/ / $@
   / /  $@
  / /   $@
 /_/    $@
        $@@
  ___  $@
 / _ \\ $@
| (_) |$@
 > _ < $@
| (_) |$@
 \\___/ $@
       $@@
  ___  $@
 / _ \\ $@
| (_) |$@
 \\__, |$@
   / / $@
  /_/  $@
       $@@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @@
   ___@
  /  /@
 /  /$@
<  <$ @
 \\  \\$@
  \\__\\@
      @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @@
___   @
\\  \\$ @
 \\  \\ @
  >  >@
 /  / @
/__/$ @
      @@
 ______  $@
|      \\ $@
\`----)  |$@
    /  / $@
   |__|  $@
    __   $@
   (__)  $@@
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
     ___  $   @
    /   \\ $   @
   /  ^  \\$   @
  /  /_\\  \\$  @
 /  _____  \\$ @
/__/     \\__\\$@
             $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   _  < $@
|  |_)  |$@
|______/ $@
         $@@
  ______$@
 /      |@
|  ,----'@
|  |    $@
|  \`----.@
 \\______|@
        $@@
 _______ $@
|       \\$@
|  .--.  |@
|  |  |  |@
|  '--'  |@
|_______/$@
         $@@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |____ @
|_______|@
         @@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |   $ @
|__|     @
         @@
  _______ @
 /  _____|@
|  |  __ $@
|  | |_ |$@
|  |__| |$@
 \\______|$@
         $@@
 __    __ $@
|  |  |  |$@
|  |__|  |$@
|   __   |$@
|  |  |  |$@
|__|  |__|$@
          $@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@
    $@@
       __ $@
      |  |$@
      |  |$@
.--.  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
 __  ___$@
|  |/  /$@
|  '  / $@
|    <  $@
|  .  \\ $@
|__|\\__\\$@
        $@@
 __     $@
|  |    $@
|  |    $@
|  |    $@
|  \`----.@
|_______|@
        $@@
.___  ___.$@
|   \\/   |$@
|  \\  /  |$@
|  |\\/|  |$@
|  |  |  |$@
|__|  |__|$@
          $@@
.__   __.$@
|  \\ |  |$@
|   \\|  |$@
|  . \`  |$@
|  |\\   |$@
|__| \\__|$@
         $@@
  ______  $@
 /  __  \\ $@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   ___/ $@
|  |  $   @
| _|  $   @
      $   @@
  ______    $ @
 /  __  \\   $ @
|  |  |  |  $ @
|  |  |  |  $ @
|  \`--'  '--. @
 \\_____\\_____\\@
            $ @@
.______    $ @
|   _  \\   $ @
|  |_)  |  $ @
|      /   $ @
|  |\\  \\----.@
| _| \`._____|@
            $@@
     _______.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_______/   $@
            $@@
.___________.@
|           |@
\`---|  |----\`@
    |  |   $ @
    |  |   $ @
    |__|   $ @
           $ @@
 __    __ $@
|  |  |  |$@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\      /$  @
   \\    /$   @
    \\__/$    @
        $    @@
____    __    ____$@
\\   \\  /  \\  /   /$@
 \\   \\/    \\/   /$ @
  \\            /$  @
   \\    /\\    /$   @
    \\__/  \\__/$    @
              $    @@
___   ___$@
\\  \\ /  /$@
 \\  V  / $@
  >   <  $@
 /  .  \\ $@
/__/ \\__\\$@
         $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\_    _/$  @
    |  |$    @
    |__|$    @
        $    @@
 ________ $@
|       / $@
\`---/  /  $@
   /  /   $@
  /  /----.@
 /________|@
          $@@
 ____ @
|    |@
|  |-\`@
|  | $@
|  | $@
|  |-.@
|____|@@
___     @
\\  \\ $  @
 \\  \\$  @
  \\  \\$ @
   \\  \\$@
    \\__\\@
        @@
 ____ @
|    |@
\`-|  |@
  |  |@
  |  |@
.-|  |@
|____|@@
  ___  @
 /   \\ @
/--^--\\@
      $@
      $@
      $@
      $@@
        @
        @
        @
    $   @
    $   @
 ______ @
|______|@@
 __ @
( _)@
 \\| @
  $ @
  $ @
  $ @
    @@
     ___  $   @
    /   \\ $   @
   /  ^  \\$   @
  /  /_\\  \\$  @
 /  _____  \\$ @
/__/     \\__\\$@
             $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   _  < $@
|  |_)  |$@
|______/ $@
         $@@
  ______$@
 /      |@
|  ,----'@
|  |    $@
|  \`----.@
 \\______|@
        $@@
 _______ $@
|       \\$@
|  .--.  |@
|  |  |  |@
|  '--'  |@
|_______/$@
         $@@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |____ @
|_______|@
         @@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |   $ @
|__|     @
         @@
  _______ @
 /  _____|@
|  |  __ $@
|  | |_ |$@
|  |__| |$@
 \\______|$@
         $@@
 __    __ $@
|  |  |  |$@
|  |__|  |$@
|   __   |$@
|  |  |  |$@
|__|  |__|$@
          $@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@
    $@@
       __ $@
      |  |$@
      |  |$@
.--.  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
 __  ___$@
|  |/  /$@
|  '  / $@
|    <  $@
|  .  \\ $@
|__|\\__\\$@
        $@@
 __     $@
|  |    $@
|  |    $@
|  |    $@
|  \`----.@
|_______|@
        $@@
.___  ___.$@
|   \\/   |$@
|  \\  /  |$@
|  |\\/|  |$@
|  |  |  |$@
|__|  |__|$@
          $@@
.__   __.$@
|  \\ |  |$@
|   \\|  |$@
|  . \`  |$@
|  |\\   |$@
|__| \\__|$@
         $@@
  ______  $@
 /  __  \\ $@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   ___/ $@
|  |  $   @
| _|  $   @
      $   @@
  ______    $ @
 /  __  \\   $ @
|  |  |  |  $ @
|  |  |  |  $ @
|  \`--'  '--. @
 \\_____\\_____\\@
            $ @@
.______    $ @
|   _  \\   $ @
|  |_)  |  $ @
|      /   $ @
|  |\\  \\----.@
| _| \`._____|@
            $@@
     _______.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_______/   $@
            $@@
.___________.@
|           |@
\`---|  |----\`@
    |  |   $ @
    |  |   $ @
    |__|   $ @
           $ @@
 __    __ $@
|  |  |  |$@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\      /$  @
   \\    /$   @
    \\__/$    @
        $    @@
____    __    ____$@
\\   \\  /  \\  /   /$@
 \\   \\/    \\/   /$ @
  \\            /$  @
   \\    /\\    /$   @
    \\__/  \\__/$    @
              $    @@
___   ___$@
\\  \\ /  /$@
 \\  V  / $@
  >   <  $@
 /  .  \\ $@
/__/ \\__\\$@
         $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\_    _/$  @
    |  |$    @
    |__|$    @
        $    @@
 ________ $@
|       / $@
\`---/  /  $@
   /  /   $@
  /  /----.@
 /________|@
          $@@
   ___@
  /  /@
 |  |$@
/  /$ @
\\  \\$ @
 |  |$@
  \\__\\@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@@
___   @
\\  \\$ @
 |  | @
  \\  \\@
  /  /@
 |  | @
/__/$ @@
  __  _ @
 /  \\/ |@
|_/\\__/ @
     $  @
     $  @
     $  @
        @@
  _   _  @
 (_)_(_) @
   / \\   @
  / _ \\  @
 / ___ \\ @
/_/   \\_\\@
         @@
 _   _ @
(_)_(_)@
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
|_|    @@
`;const nt=["innerHTML"],it=j({__name:"TerminalBanner",emits:["ssi:finish"],setup(f,{emit:t}){Le.parseFont("Star Wars",tt);const a=Pe(""),_=Te({text:"",index:0,typingSpeed:40,waitTime:400,areas:["Hello world, I'm Sami Salih Ibrahimbas.","And this is a terminal.","With this terminal you can execute commands and see the output.","For see all the commands, type '--help' and click enter button on your keyboard.","You're welcome.","","Sami Salih Ibrahimbas",""]}),s=v=>{_.index<v.length&&(_.text+=v[_.index],_.index++,setTimeout(()=>{s(v)},_.typingSpeed))},$=()=>{const v=_.areas.shift();_.text.length>0&&(_.text+="<br/>",_.index=0),typeof v=="string"&&(s(v),setTimeout($,_.typingSpeed*v.length+_.waitTime)),_.areas.length===0&&setTimeout(()=>{t("ssi:finish")},_.waitTime+_.typingSpeed*(v?v.length:1))};return Be(()=>{Le.text("SSI CLI",{font:"Star Wars"},function(v,y){y&&(a.value=y)}),setTimeout(()=>{$()},_.waitTime/2)}),(v,y)=>(I(),M(G,null,[H("pre",null,"  "+D(a.value)+`
  `,1),H("span",{innerHTML:_.text},null,8,nt)],64))}});var at=oe(it,[["__scopeId","data-v-fd41c2fa"]]);class rt{constructor(){m(this,"main",({state:t,params:a})=>a.includes("--help")?this.help():(t.terminal=[],t.activeIndex=-1,t.deep=0,t.clear=!0,{result:""}));m(this,"help",()=>({result:"Clear the terminal",setResult:!0}))}}var lt=new rt;const Se={"+":(f,t)=>f+t,"-":(f,t)=>f-t,"*":(f,t)=>f*t,"/":(f,t)=>f/t};class _t{constructor(){m(this,"main",({input:t,params:a})=>{let _,s;a.forEach(v=>{v.match(/^[0-9]+$/)?_=+v:v.match(/[+\-*/]/)&&(s=v)});const $=+t.value.split(" ")[0];return _&&$&&s&&Object.keys(Se).includes(s)?{result:Se[s]($,_).toString(),setResult:!0}:{result:""}})}}var st=new _t;class ut{constructor(){m(this,"main",({input:t,options:a,params:_})=>_.includes("--help")?this.help():a.text?(me().setTextColor(a.text),{result:""}):this.help());m(this,"help",()=>({result:"Set the color of the terminal",setResult:!0}))}}var ot=new ut;class ct{constructor(){m(this,"socialAccounts",{github:"https://github.com/ssibrahimbas",linkedin:"https://linkedin.com/in/ssibrahimbas",medium:"https://ssibrahimbas.medium.com"});m(this,"socialOptions",{"--open":"Open in new tab"});m(this,"main",({input:t,params:a})=>{if(a.includes("--help")||a.length===0)return this.help();if(a.includes("--open")){const _=this.socialAccounts[a[0]];if(_)window.open(_,"_blank");else return this.help()}else{const _=a[0];if(Object.keys(this.socialAccounts).includes(_))return{result:`<a href="${this.socialAccounts[_]}" target="_blank" class="text-link">Click to open ${_} account</a>`,setResult:!0}}return this.help()});m(this,"help",()=>{const t="Below are all available commands.",a=Object.keys(this.socialAccounts).map($=>`<li>social ${$}</li>`).join(""),_=Object.keys(this.socialOptions).map($=>`&nbsp;${$}: ${this.socialOptions[$]}`).join("");return{result:`${t}<br/>${a}<br/>And below are all available options.<br/>${_}`,setResult:!0}})}}var ft=new ct;class ht{constructor(){m(this,"profileOptions",["--name","--age","--city","--gender","--country","--all"]);m(this,"profile",{name:"Sami Salih \u0130brahimba\u015F",age:"20",city:"Sakarya",gender:"Male",country:"Turkey"});m(this,"main",({input:t,params:a})=>{if(a.includes("--help")||a.length===0)return this.help();let _="--all";return a.forEach(s=>{this.profileOptions.includes(s)&&(_=s)}),_=_.slice(2,_.length),_==="all"?{result:this.printProfile(),setResult:!0}:{result:this.profile[_],setResult:!0}});m(this,"help",()=>{const t="Below are all available options.",a=this.profileOptions.map(s=>`<li>profile ${s}</li>`).join("");return{result:`${t}<br/>${a}`,setResult:!0}});m(this,"printProfile",()=>Object.keys(this.profile).map(t=>`&nbsp;${t}: ${this.profile[t]}`).join("<br/>"))}}var dt=new ht;class $t{constructor(){m(this,"main",({input:t})=>(t.resultClass="error-text",{result:"Error: Command not found",setResult:!0}))}}var mt=new $t;class vt{constructor(){m(this,"main",_=>{var s=_,{input:t}=s,a=be(s,["input"]);if(a.params.includes("--help")&&!t.children)return this.help(le({input:t},a));let $=0;return t.children&&($=t.children.length),this.steps[$](ye(le({},a),{input:t}))});m(this,"execFirstStep",({input:t})=>({children:{question:"What is your name?",answer:"",finished:!1},result:"Thank you for wanting to contact me.<br/>You can contact me by filling out the form consisting of 4 steps below.<br/><br/>",setChildren:!0,setResult:!0,nextCommand:"contact"}));m(this,"execSecondStep",({input:t})=>{const a={question:"Why do you want to contact?",answer:"",finished:!1};return t.children[0].finished=!0,{children:a,result:"",setChildren:!0,nextCommand:"contact"}});m(this,"execThirdStep",({input:t})=>{const a={question:"What is your email?",answer:"",finished:!1};return t.children[1].finished=!0,{children:a,result:"",setChildren:!0,nextCommand:"contact"}});m(this,"execFourthStep",({input:t})=>{const a={question:"Please enter your message",answer:"",finished:!1};return t.children[2].finished=!0,{children:a,result:"",setChildren:!0,nextCommand:"contact"}});m(this,"finishForm",({input:t})=>(t.children[3].finished=!0,{result:"<br/>Thank you for contacting me.<br/>I will get back to you as soon as possible.<br/>",setChildResult:!0,fromUnderground:!0}));m(this,"help",({input:t})=>{let a="You can contact me with this command.<br/>You will need to fill in the following fields:<br/>";return a+=["name","reason","email","message"].map(_=>`&nbsp;&nbsp;${_}`).join("<br/>"),{result:a,setResult:!0}});m(this,"steps",{0:this.execFirstStep,1:this.execSecondStep,2:this.execThirdStep,3:this.execFourthStep,4:this.finishForm})}}var pt=new vt;class gt{constructor(){m(this,"extraCommands",["itemsatis","default"]);m(this,"main",({input:t,options:a,params:_})=>{if(_.includes("--help"))return this.help();const s=me(),[$,v]=_,y=this.commands.find(F=>F.name===$);return y?(s.setBackgroundColor(y.func(v)),{result:`${$} theme successfully saved`,setResult:!0}):this.help()});m(this,"help",()=>{let t="You can try the following themes<br/><br/>";return this.commands.forEach(a=>{t+=` > ${a.name} `,a.options&&(t+="<br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>options: "+a.options.join(", ")+"</i>"),t+="<br/>"}),t+="<br/>example code: <code>theme itemsatis --dark</code>",{result:t,setResult:!0}});m(this,"getItemsatisTheme",(t="default")=>t=="--dark"?this.itemsatisDarkBackgroundTheme():this.itemsatisDefaultBackgroundTheme());m(this,"itemsatisDefaultBackgroundTheme",()=>"url(https://cdn.itemsatis.com/uploads/admin/EuUB8yhiFaZreIo1YTXCWPfm7.png) #383b50");m(this,"itemsatisDarkBackgroundTheme",()=>"url(https://cdn.itemsatis.com/uploads/admin/EuUB8yhiFaZreIo1YTXCWPfm7.png) #181822");m(this,"defaultTheme",()=>"default");m(this,"themes",{itemsatisDefault:this.itemsatisDefaultBackgroundTheme,itemsatisDark:this.itemsatisDarkBackgroundTheme,default:this.defaultTheme});m(this,"commands",[{name:"itemsatis",options:["--default","--dark"],func:this.getItemsatisTheme},{name:"default",func:this.defaultTheme}])}}var Rt=new gt;class yt{constructor(){m(this,"commands",["clear","set-color","profile","social","contact","theme"]);m(this,"main",({state:t,params:a})=>{const _="Below are all available commands.",s=this.commands.map(v=>`<li>${v}</li>`).join("");return{result:`${_}<br/>${s}<br/>If you want more detailed information about a command, type <i>command --help</i>`,setResult:!0}})}}var bt=new yt;class wt{constructor(){m(this,"commands",{default:mt,clear:lt,math:st,"set-color":ot,"--help":bt,profile:dt,social:ft,contact:pt,theme:Rt});m(this,"checkMathCommand",t=>["+","-","*","/"].includes(t[0])&&t.length===2);m(this,"execCommand",(t,a)=>{if(t.finished&&t.prevCommand&&this.commands[t.prevCommand])return this.commands[t.prevCommand].main({input:t,options:{},params:[],state:a});const _=t.value.split(" "),s={},$=[],v=_[0];return _.shift(),_.forEach(y=>{if(y.startsWith("--")&&y.includes("=")){const[F,P]=y.split("=");s[F.slice(2,F.length)]=P}else $.push(y)}),this.commands[v]?this.commands[v].main({input:t,options:s,params:$,state:a}):this.checkMathCommand($)?this.commands.math.main({input:t,options:s,params:$,state:a}):this.commands.default.main({input:t,options:s,params:$,state:a})});m(this,"calculateAutocomplete",(t,a)=>{let _="";const[s,$]=t.value.split(" "),v=this.calculateChildAutocomplete({cmd:s,childCmd:$});if(v.success)_=v.result;else{const y=this.calculateBaseAutocomplete({cmd:s});y.success&&(_=y.result)}a.autocompletedKey=_});m(this,"calculateChildAutocomplete",({cmd:t,childCmd:a})=>{const _={success:!1};return a&&this.commands[t]&&!!this.commands[t].extraCommands&&this.commands[t].extraCommands.forEach(s=>{s.length>a.length&&s.toLocaleLowerCase().includes(a.toLocaleLowerCase())&&(_.success=!0,_.result=s)}),_});m(this,"calculateBaseAutocomplete",({cmd:t})=>{const a={success:!1},_=le({},this.commands);return delete _.default,Object.keys(_).forEach($=>{$.length>t.length&&$.toLocaleLowerCase().includes(t.toLocaleLowerCase())&&(a.success=!0,a.result=$)}),a})}}const kt=new wt,xt=()=>kt;class Lt{constructor(){m(this,"main",({state:t})=>(t.deep>0&&(t.terminal[t.activeIndex].value=t.terminal[t.activeIndex-(t.deep-1)].value,t.deep--),{}))}}var St=new Lt;class Ct{constructor(){m(this,"main",({state:t,funcs:a})=>{const _=t.terminal[t.activeIndex];if(_.children){const s=_.children.find($=>!$.finished);s&&(t.activePosition===-1?t.activePosition=s.answer.length-1:a.tryDecreaseActivePosition())}else t.activePosition===-1?t.activePosition=_.value.length-1:a.tryDecreaseActivePosition();return{}})}}var It=new Ct;class Pt{constructor(){m(this,"main",({state:t,funcs:a})=>{const _=t.terminal[t.activeIndex];if(_.children){const s=_.children.find($=>!$.finished);s&&(t.activePosition===-1?t.activePosition=s.answer.length-1:a.tryIncreaseActivePosition())}else t.activePosition===-1?t.activePosition=_.value.length-1:a.tryIncreaseActivePosition();return{}})}}var Tt=new Pt;class Bt{constructor(){m(this,"main",({state:t})=>(t.terminal[t.activeIndex-(t.deep+1)]&&(t.terminal[t.activeIndex].value=t.terminal[t.activeIndex-(t.deep+1)].value,t.deep++),{}))}}var Ft=new Bt;class ue{static splitAndAdd(t,a,_){return t.slice(0,a)+_+t.slice(a)}static split(t,a){return t.slice(0,a)+t.slice(a+1)}}class At{constructor(){m(this,"main",({state:t,funcs:a,event:_})=>{const s=t.terminal[t.activeIndex];if(s.children){const $=s.children.find(v=>!v.finished);$&&(t.activePosition!==-1?($.answer=ue.split($.answer,t.activePosition-1),a.tryDecreaseActivePosition()):$.answer=$.answer.slice(0,-1))}else s.value.length>0&&(t.activePosition!==-1?(s.value=ue.split(s.value,t.activePosition-1),a.tryDecreaseActivePosition()):s.value=s.value.slice(0,-1));return{}})}}var Mt=new At;class Ht{constructor(){m(this,"main",t=>({}))}}var B=new Ht;class Ot{constructor(){m(this,"main",({state:t,funcs:a,event:_})=>{const s=t.terminal[t.activeIndex];if(!s)return{};if(s.children){const $=s.children.find(v=>!v.finished);$&&(t.activePosition!==-1?($.answer=ue.splitAndAdd($.answer,t.activePosition,_.key),a.tryIncreaseActivePosition()):$.answer+=_.key)}else t.activePosition!==-1?(s.value=ue.splitAndAdd(s.value,t.activePosition,_.key),a.tryIncreaseActivePosition()):s.value+=_.key;return{}})}}var Dt=new Ot;class Et{constructor(){m(this,"main",({funcs:t})=>{const{createNew:a}=t.execCommand();return a&&t.createNewInput(),{}})}}var Kt=new Et;class Nt{constructor(){m(this,"main",({state:t,funcs:a})=>{const _=t.terminal[t.activeIndex];return _.children&&(_.children.forEach(s=>{s.finished=!0}),a.createNewInput()),{}})}}var jt=new Nt;class Ut{constructor(){m(this,"main",({state:t})=>{if(t.autocompletedKey!==""){const a=t.terminal[t.activeIndex];t.autocompletedKey==" --help"?(a.value+=t.autocompletedKey,t.autocompletedKey=""):(a.value=t.autocompletedKey,a.value!=="--help"?t.autocompletedKey=" --help":t.autocompletedKey="")}return{}})}}var Wt=new Ut;class qt{constructor(){m(this,"handlers",{Enter:Kt.main,ArrowUp:Ft.main,ArrowDown:St.main,ArrowLeft:It.main,ArrowRight:Tt.main,Backspace:Mt.main,Tab:Wt.main,default:Dt.main,ShiftRight:B.main,ShiftLeft:B.main,CapsLock:B.main,Alt:B.main,AltLeft:B.main,AltRight:B.main,Meta:B.main,MetaLeft:B.main,MetaRight:B.main,ControlLeft:B.main,ControlRight:B.main,Control:B.main,Escape:jt.main});m(this,"onKeydown",({event:t,state:a,funcs:_})=>{t.preventDefault(),this.handlers[t.code]?(this.handlers[t.code]({event:t,state:a,funcs:_}),t.code!=="Tab"&&_.clearAutocomplete()):(this.handlers.default({event:t,state:a,funcs:_}),_.calculateAutoComplete({input:a.terminal[a.activeIndex]}))})}}const Vt=new qt,Yt=()=>Vt;const Ae=f=>(qe("data-v-728a7816"),f=f(),Ve(),f),zt={class:"terminal-child-input-section"},Gt={class:"terminal-child-question"},Xt=Ae(()=>H("br",null,null,-1)),Jt=Ae(()=>H("span",{class:"terminal-child-caret"},"\xA0>",-1)),Zt=j({__name:"TerminalChildInput",props:{value:null,finished:{type:Boolean},question:null,activePosition:null},setup(f){const t=f;Ce(_=>({"2d5f21cc":N(a)}));const a=z(()=>`${(t.value.length-t.activePosition)*-9}px`);return(_,s)=>(I(),M(G,null,[H("div",zt,[H("span",Gt,"\xA0"+D(f.question),1),Xt,Jt,H("span",{class:se(["terminal-child-input base-input",{"use-blink":!f.finished,"font-italic":f.finished,"use-caret-transform":t.activePosition!==-1&&t.activePosition>0}])},D(f.value),3)]),Ie(_.$slots,"result",{},void 0,!0)],64))}});var Qt=oe(Zt,[["__scopeId","data-v-728a7816"]]);const en=j({__name:"TerminalFeature",setup(f){const t=xt(),a=Yt(),_=Pe(),s=Te({terminal:[{value:"",finished:!1,result:""}],activeIndex:0,activePosition:-1,deep:0,autocompletedKey:"",showFinished:!1,clear:!1}),$=(p,L)=>{p.result=L,s.activePosition=-1},v=(p,L)=>{const T=p.children[p.children.length-1];T.result=L,s.activePosition=-1},y=(p,L)=>{s.activePosition=-1,p.finished=!0,p.children?p.children.push(L):p.children=[L]},F=(p,L)=>{p.prevCommand=L},P=()=>{s.terminal.forEach(p=>{p.finished=!0})},U=()=>{P(),s.terminal.push({value:"",finished:!1,result:""}),s.activeIndex++,s.deep=0,s.activePosition=-1,W()},X=()=>{const p=t.execCommand(s.terminal[s.activeIndex],s),L=s.terminal[s.activeIndex];return p.setResult&&$(L,p.result),p.setChildren&&p.children&&y(L,p.children),p.nextCommand&&F(L,p.nextCommand),p.setChildResult&&v(L,p.result),{createNew:!p.setChildren||(typeof p.fromUnderground!="undefined"?p.fromUnderground:!1)}},J=()=>{const p=s.terminal[s.activeIndex];s.activePosition-1>0?s.activePosition--:s.activePosition>p.value.length&&(s.activePosition=-1)},Z=()=>{const p=s.terminal[s.activeIndex];s.activePosition+1<=p.value.length?s.activePosition++:s.activePosition>=p.value.length&&(s.activePosition=-1)},W=()=>{setTimeout(()=>{window.scrollTo({top:_.value.clientHeight+1200})},100)},Q=({input:p})=>t.calculateAutocomplete(p,s),ee=()=>{s.autocompletedKey=""},q=p=>{W(),a.onKeydown({event:p,state:s,funcs:{execCommand:X,createNewInput:U,tryIncreaseActivePosition:Z,tryDecreaseActivePosition:J,clearAutocomplete:ee,calculateAutoComplete:Q}})},te=()=>{window.addEventListener("keydown",q,!1)},ne=()=>{window.removeEventListener("keydown",q,!1)};return Be(()=>{te()}),Ye(()=>{ne()}),(p,L)=>(I(),M("div",{ref_key:"terminalContainer",ref:_},[s.clear?_e("",!0):(I(),de(at,{key:0,"onSsi:finish":L[0]||(L[0]=T=>s.showFinished=!0)})),s.showFinished?(I(!0),M(G,{key:1},we(s.terminal,(T,ce)=>(I(),M("div",{key:ce,class:"terminal-item-wrapper"},[$e(Qe,{value:T.value,"onUpdate:value":O=>T.value=O,finished:T.finished,"autocompleted-key":s.autocompletedKey,"active-position":s.activePosition},{result:ke(()=>[$e(xe,{value:T.result,class:se(T.resultClass)},null,8,["value","class"])]),_:2},1032,["value","onUpdate:value","finished","autocompleted-key","active-position"]),(I(!0),M(G,null,we(T.children,(O,ie)=>(I(),de(Qt,{key:ie,value:O.answer,finished:O.finished,question:O.question,"active-position":s.activePosition},{result:ke(()=>[O.result?(I(),de(xe,{key:0,value:O.result,class:se(T.resultClass)},null,8,["value","class"])):_e("",!0)]),_:2},1032,["value","finished","question","active-position"]))),128))]))),128)):_e("",!0)],512))}});var tn=oe(en,[["__scopeId","data-v-17d1c516"]]);const rn=j({__name:"TerminalView",setup(f){return(t,a)=>(I(),M("div",null,[$e(tn)]))}});export{rn as default};

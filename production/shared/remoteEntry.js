var e,r,t,n,a,o,i,l,s,f,d,u,h,c,p,m,v={6194:(e,r,t)=>{var n={"./Module":()=>Promise.all([t.e(619),t.e(326),t.e(585)]).then((()=>()=>t(7283))),"./Utils":()=>t.e(410).then((()=>()=>t(7410)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},g={};function b(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e](t,t.exports,b),t.loaded=!0,t.exports}b.m=v,b.c=g,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+"."+{135:"2a6890a87a1ecb2c",143:"3b07c24dcae76df5",260:"65897ecf963b780d",316:"026990068a2a1ea8",326:"40ce82f19970bf3a",410:"a956c08e88867197",467:"2cec9925ae75599c",585:"0b4c41390b4d0672",619:"e7b9800e64857069",725:"34e26356f9280fec",732:"d8ce0f6eecb60f9a",751:"b8783fef495c8a02",784:"2eeb826420f5e696",826:"08f632c1be476fe9"}[e]+".js",b.miniCssF=e=>e+".29ec6d890688195a.css",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="shared:",b.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var u=(r,n)=>{i.onerror=i.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var o=b.S[t],i="shared",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@fortawesome/free-brands-svg-icons","6.4.2",(()=>b.e(143).then((()=>()=>b(7143))))),l("@fortawesome/free-solid-svg-icons","6.4.2",(()=>b.e(725).then((()=>()=>b(9725))))),l("@fortawesome/react-fontawesome","0.2.0",(()=>Promise.all([b.e(732),b.e(619)]).then((()=>()=>b(7732))))),l("@testing-library/react","14.0.0",(()=>Promise.all([b.e(751),b.e(619),b.e(135),b.e(826)]).then((()=>()=>b(3751))))),l("react-dom","18.2.0",(()=>Promise.all([b.e(316),b.e(619)]).then((()=>()=>b(8316))))),l("react-slick","0.29.0",(()=>Promise.all([b.e(467),b.e(619)]).then((()=>()=>b(3467))))),l("react","18.2.0",(()=>b.e(784).then((()=>()=>b(2784)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():a(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,s=!0;;l++,i++){var f,d,u=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!s||("u"==u?l>n&&!a:""==u!=a);if("u"==d){if(!s||"u"!=u)return!1}else if(s)if(u==d)if(l<=n){if(f!=e[l])return!1}else{if(a?f>e[l]:f<e[l])return!1;f!=e[l]&&(s=!1)}else if("s"!=u&&"n"!=u){if(a||l<=n)return!1;s=!1,l--}else{if(l<=n||d<u!=a)return!1;s=!1}else"s"!=u&&"n"!=u&&(s=!1,l--)}}var h=[],c=h.pop.bind(h);for(i=1;i<e.length;i++){var p=e[i];h.push(1==p?c()|c():2==p?c()&c():p?o(p,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var a=i(e,t);if(!o(n,a))throw new Error(l(e,t,a,n));return f(e[t][a])},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,a){var o=b.I(r);return o&&o.then?o.then(e.bind(e,r,b.S[r],t,n,a)):e(0,b.S[r],t,n,a)})(((e,r,t,n,a)=>r&&b.o(r,t)?s(r,0,t,n):a())),u={},h={9619:()=>d("default","react",[4,18,2,0],(()=>b.e(784).then((()=>()=>b(2784))))),1135:()=>d("default","react-dom",[4,18,2,0],(()=>b.e(316).then((()=>()=>b(8316))))),4214:()=>d("default","react-slick",[2,0,29,0],(()=>b.e(467).then((()=>()=>b(3467))))),4905:()=>d("default","@testing-library/react",[4,14,0,0],(()=>Promise.all([b.e(751),b.e(135),b.e(260)]).then((()=>()=>b(3751))))),5872:()=>d("default","@fortawesome/free-solid-svg-icons",[1,6,4,2],(()=>b.e(725).then((()=>()=>b(9725))))),7019:()=>d("default","@fortawesome/react-fontawesome",[2,0,2,0],(()=>b.e(732).then((()=>()=>b(7732))))),7788:()=>d("default","@fortawesome/free-brands-svg-icons",[1,6,4,2],(()=>b.e(143).then((()=>()=>b(7143)))))},c={135:[1135],326:[4214,4905,5872,7019,7788],619:[9619]},b.f.consumes=(e,r)=>{b.o(c,e)&&c[e].forEach((e=>{if(b.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete u[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var a=h[e]();a.then?r.push(u[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},p=e=>new Promise(((r,t)=>{var n=b.miniCssF(e),a=b.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),n(s)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),m={712:0},b.f.miniCss=(e,r)=>{m[e]?r.push(m[e]):0!==m[e]&&{585:1}[e]&&r.push(m[e]=p(e).then((()=>{m[e]=0}),(r=>{throw delete m[e],r})))},(()=>{var e={712:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(135|619)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=b.p+b.u(r),i=new Error;b.l(o,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in i)b.o(i,n)&&(b.m[n]=i[n]);l&&l(b)}for(r&&r(t);s<o.length;s++)a=o[s],b.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkshared=self.webpackChunkshared||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var y=b(6194),w=y.get,S=y.init;export{w as get,S as init};
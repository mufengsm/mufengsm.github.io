(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{304:function(e,t,n){"use strict";var i=n(169),r=n(172),l=n(5),s=n(23),u=n(95),h=n(170),o=n(13),a=n(171),c=n(67),g=n(1),d=[].push,f=Math.min,p=!g((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(s(this)),l=void 0===n?4294967295:n>>>0;if(0===l)return[];if(void 0===e)return[i];if(!r(e))return t.call(i,e,l);for(var u,h,o,a=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,p=new RegExp(e.source,g+"g");(u=c.call(p,i))&&!((h=p.lastIndex)>f&&(a.push(i.slice(f,u.index)),u.length>1&&u.index<i.length&&d.apply(a,u.slice(1)),o=u[0].length,f=h,a.length>=l));)p.lastIndex===u.index&&p.lastIndex++;return f===i.length?!o&&p.test("")||a.push(""):a.push(i.slice(f)),a.length>l?a.slice(0,l):a}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=s(this),l=null==t?void 0:t[e];return void 0!==l?l.call(t,r,n):i.call(String(r),t,n)},function(e,r){var s=n(i,e,this,r,i!==t);if(s.done)return s.value;var c=l(e),g=String(this),d=u(c,RegExp),v=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(p?"y":"g"),x=new d(p?c:"^(?:"+c.source+")",m),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===g.length)return null===a(x,g)?[g]:[];for(var w=0,E=0,k=[];E<g.length;){x.lastIndex=p?E:0;var y,C=a(x,p?g:g.slice(E));if(null===C||(y=f(o(x.lastIndex+(p?0:E)),g.length))===w)E=h(g,E,v);else{if(k.push(g.slice(w,E)),k.length===b)return k;for(var I=1;I<=C.length-1;I++)if(k.push(C[I]),k.length===b)return k;E=w=y}}return k.push(g.slice(w)),k}]}),!p)},416:function(e,t,n){"use strict";n.r(t);n(68),n(43),n(304);var i=n(309),r={en:"English",nl:"Nederlands",zh:"中文",vi:"Tiếng Việt",pl:"Polski",pt:"Português",ru:"Русский",jp:"日本語",fr:"Français",de:"Deutsch",el:"Ελληνικά",es:"Español",hi:"हिंदी",fa:"فارسی",ko:"한국어",ro:"Română",uk:"Українська",no:"Norwegian"},l={props:{vuerName:String,code:String},data:function(){return{preferredCode:"en"}},mounted:function(){this.preferredCode=Object(i.c)().split("-")[0]},computed:{isUserPreferredLanguage:function(){return this.code===this.preferredCode},isEnglish:function(){return"en"===this.code},highlighted:function(){return this.isUserPreferredLanguage&&!this.isEnglish},title:function(){return this.highlighted?"".concat(this.vuerName," 可以用你的偏好语言进行技术讲座。"):this.name},name:function(){return r[this.code]}}},s=n(42),u=Object(s.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("li",{class:{highlighted:this.highlighted},attrs:{title:this.title}},[this._v(this._s(this.name))])}),[],!1,null,null,null);t.default=u.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8153e00c"],{"12a1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bbt_face_similarity_more"},[r("div",{staticStyle:{width:"60%"}},[r("div",[r("label",[e._v("匹配图多选择：")]),r("input",{attrs:{type:"file",accept:"image/png, image/jpeg",multiple:"multiple"},on:{change:function(t){return e.fnChange(t)}}})]),r("h3",[e._v("匹配图：")]),r("div",{staticClass:"pic"},e._l(e.detArr,(function(e,t){return r("img",{key:t,attrs:{src:e,alt:"det"}})})),0),r("h3",[e._v("样本库：")]),e._l(e.sampleArr,(function(t,n){return r("div",{key:n},[r("span",{staticStyle:{color:"#42b983"},domProps:{textContent:e._s(t.name)}}),r("div",{staticClass:"pic"},e._l(t.img,(function(e){return r("img",{key:e,attrs:{src:e,alt:t.name}})})),0)])}))],2),r("div",{staticStyle:{width:"40%"}},[r("h3",[e._v("识别结果（误差值越小越准确）：")]),e._l(e.resultArr,(function(t,n){return r("div",{key:n,staticClass:"result"},[r("img",{attrs:{src:e.detArr[n],alt:t.result}}),r("div",{staticClass:"info"},[r("span",[e._v("对比："+e._s(t.target))]),r("span",[e._v("结果："+e._s(t.result))]),r("span",[e._v("时间："+e._s(t.time))]),r("span",[e._v("FPS："+e._s(t.fps))])])])}))],2)])},a=[],s=(r("4160"),r("d81d"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3"),r("159b"),r("ddb0"),r("b85c")),c=(r("96cf"),r("1da1")),i=r("ab39"),u={name:"BBTFaceSimilarityMore",data:function(){return{sampleArr:[{name:"欣小萌",img:["images/xxm/xxm01.jpg","images/xxm/xxm02.jpg","images/xxm/xxm03.jpg","images/xxm/xxm04.jpg"]},{name:"旭旭宝宝",img:["images/xxbb/xxbb01.jpg","images/xxbb/xxbb02.jpg","images/xxbb/xxbb03.jpg","images/xxbb/xxbb04.jpg"]},{name:"张杰",img:["https://dwz.cn/ZggSBEtL","https://dwz.cn/U7nR0no0"]}],detArr:["images/xxbb/xxbb01.jpg","images/xxm/xxm02.jpg","images/xxbb/xxbb02.jpg","images/xxm/xxm03.jpg","images/xxbb/xxbb04.jpg","https://dwz.cn/U7nR0no0"],resultArr:[],faceMatcher:null}},mounted:function(){var e=this;this.$nextTick((function(){e.fnInit().then((function(){return e.fnRun()}))}))},methods:{fnInit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["loadFaceRecognitionModel"]("/models");case 2:return t.next=4,Promise.all(e.sampleArr.map(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=[],n=Object(s["a"])(t.img),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=16;break}return c=a.value,e.next=8,i["fetchImage"](c);case 8:return u=e.sent,e.t0=r,e.next=12,i["computeFaceDescriptor"](u);case 12:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t2=e["catch"](2),n.e(e.t2);case 21:return e.prev=21,n.f(),e.finish(21);case 24:return e.abrupt("return",new i["LabeledFaceDescriptors"](t.name,r));case 25:case"end":return e.stop()}}),e,null,[[2,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()));case 4:r=t.sent,e.faceMatcher=new i["FaceMatcher"](r);case 6:case"end":return t.stop()}}),t)})))()},fnRun:function(){var e=this;this.detArr.forEach(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(r){var n,a,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Date.now(),t.next=3,i["fetchImage"](r);case 3:return a=t.sent,t.next=6,i["computeFaceDescriptor"](a);case 6:return s=t.sent,t.next=9,e.faceMatcher.findBestMatch(s);case 9:c=t.sent,e.resultArr.push({target:r,result:c.toString(),time:Date.now()-n+"ms",fps:Math.round(1e3/(Date.now()-n))});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fnChange:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.target.files.length){r.next=2;break}return r.abrupt("return");case 2:t.detArr=[],t.resultArr=[],e.target.files.forEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(r){var n,a,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now(),e.next=3,i["bufferToImage"](r);case 3:return a=e.sent,e.next=6,i["computeFaceDescriptor"](a);case 6:return s=e.sent,e.next=9,t.faceMatcher.findBestMatch(s);case 9:c=e.sent,t.detArr.push(a.src),t.resultArr.push({target:r.name,result:c.toString(),time:Date.now()-n+"ms",fps:Math.round(1e3/(Date.now()-n))});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return r.stop()}}),r)})))()}}},o=u,m=(r("d833"),r("2877")),p=Object(m["a"])(o,n,a,!1,null,"d9d11102",null);t["default"]=p.exports},"251d":function(e,t,r){},d833:function(e,t,r){"use strict";var n=r("251d"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-8153e00c.5f81e865.js.map
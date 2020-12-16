(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e3cf6e8"],{"4bc6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"face_recognition_library"},[n("div",{staticClass:"option"},[n("div",[n("label",[e._v("匹配图选择：")]),n("input",{attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return e.fnChange(t)}}})]),n("div",[n("label",[e._v("选择算法模型")]),n("label",[e._v(" ssdMobilenetv1 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nets,expression:"nets"}],attrs:{type:"radio",value:"ssdMobilenetv1"},domProps:{checked:e._q(e.nets,"ssdMobilenetv1")},on:{change:function(t){e.nets="ssdMobilenetv1"}}})]),n("label",[e._v(" tinyFaceDetector "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nets,expression:"nets"}],attrs:{type:"radio",value:"tinyFaceDetector"},domProps:{checked:e._q(e.nets,"tinyFaceDetector")},on:{change:function(t){e.nets="tinyFaceDetector"}}})]),n("label",[e._v(" mtcnn "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nets,expression:"nets"}],attrs:{type:"radio",value:"mtcnn"},domProps:{checked:e._q(e.nets,"mtcnn")},on:{change:function(t){e.nets="mtcnn"}}})])])]),n("h3",[e._v("匹配图：")]),e._m(0),n("h3",[e._v("样本库：")]),e._l(e.sampleArr,(function(t,a){return n("div",{key:a},[n("span",{staticStyle:{color:"#42b983"},domProps:{textContent:e._s(t.name)}}),n("div",{staticClass:"pic"},e._l(t.img,(function(e){return n("img",{key:e,attrs:{src:e,alt:t.name}})})),0)])}))],2)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"target"},[n("img",{attrs:{id:"targetImg",src:"images/xxm/xxm03.jpg"}}),n("canvas",{attrs:{id:"targetCanvas"}})])}],c=(n("4160"),n("d81d"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),n("b85c")),s=(n("96cf"),n("1da1")),i=n("ab39"),o={name:"BBTFaceRecognition",data:function(){return{nets:"ssdMobilenetv1",options:null,sampleArr:[{name:"欣小萌",img:["images/xxm/face/xxm01.png","images/xxm/face/xxm02.png","images/xxm/face/xxm03.png","images/xxm/face/xxm04.png"]},{name:"旭旭宝宝",img:["images/xxbb/face/xxbb01.png","images/xxbb/face/xxbb02.png","images/xxbb/face/xxbb03.png","images/xxbb/face/xxbb04.png"]}],faceMatcher:null,imgEl:null,canvasEl:null}},watch:{nets:function(e){var t=this;this.nets=e,this.fnInit().then((function(){return t.fnRun()}))}},mounted:function(){var e=this;this.$nextTick((function(){e.fnInit().then((function(){return e.fnRun()}))}))},methods:{fnInit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["nets"][e.nets].loadFromUri("/models");case 2:return t.next=4,i["loadFaceLandmarkModel"]("/models");case 4:return t.next=6,i["loadFaceRecognitionModel"]("/models");case 6:t.t0=e.nets,t.next="ssdMobilenetv1"===t.t0?9:"tinyFaceDetector"===t.t0?11:"mtcnn"===t.t0?13:15;break;case 9:return e.options=new i["SsdMobilenetv1Options"]({minConfidence:.5}),t.abrupt("break",15);case 11:return e.options=new i["TinyFaceDetectorOptions"]({inputSize:512,scoreThreshold:.5}),t.abrupt("break",15);case 13:return e.options=new i["MtcnnOptions"]({minFaceSize:20,scaleFactor:.709}),t.abrupt("break",15);case 15:return e.imgEl=document.getElementById("targetImg"),e.canvasEl=document.getElementById("targetCanvas"),t.next=19,e.fnfaceMatcher();case 19:case"end":return t.stop()}}),t)})))()},fnfaceMatcher:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.sampleArr.map(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],a=Object(c["a"])(t.img),e.prev=2,a.s();case 4:if((r=a.n()).done){e.next=16;break}return s=r.value,e.next=8,i["fetchImage"](s);case 8:return o=e.sent,e.t0=n,e.next=12,i["computeFaceDescriptor"](o);case 12:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t2=e["catch"](2),a.e(e.t2);case 21:return e.prev=21,a.f(),e.finish(21);case 24:return e.abrupt("return",new i["LabeledFaceDescriptors"](t.name,n));case 25:case"end":return e.stop()}}),e,null,[[2,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()));case 2:n=t.sent,e.faceMatcher=new i["FaceMatcher"](n);case 4:case"end":return t.stop()}}),t)})))()},fnRun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["detectAllFaces"](e.imgEl,e.options).withFaceLandmarks().withFaceDescriptors();case 2:n=t.sent,i["matchDimensions"](e.canvasEl,e.imgEl),a=i["resizeResults"](n,e.imgEl),a.forEach((function(t){var n=t.detection,a=t.descriptor,r=e.faceMatcher.findBestMatch(a).toString();new i["draw"].DrawBox(n.box,{label:r}).draw(e.canvasEl)}));case 6:case"end":return t.stop()}}),t)})))()},fnChange:function(e){var t=this;e.target.files.length&&i["bufferToImage"](e.target.files[0]).then((function(e){t.imgEl.src=e.src,t.canvasEl.getContext("2d").clearRect(0,0,t.canvasEl.width,t.canvasEl.height),t.fnRun()}))}}},u=o,l=(n("fd43"),n("2877")),m=Object(l["a"])(u,a,r,!1,null,"75b53924",null);t["default"]=m.exports},7844:function(e,t,n){},fd43:function(e,t,n){"use strict";var a=n("7844"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-0e3cf6e8.0937c722.js.map
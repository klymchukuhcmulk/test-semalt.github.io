(function(t){function e(e){for(var s,a,l=e[0],r=e[1],o=e[2],v=0,d=[];v<l.length;v++)a=l[v],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,l=1;l<i.length;l++){var r=i[l];0!==c[r]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},c={app:0},n=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"main"},[i("div",{staticClass:"header"},[i("h2",{staticClass:"main-header"},[t._v("Submitted sitemaps"),i("font-awesome-icon",{staticClass:"icon-info",attrs:{icon:"info-circle"}})],1),i("div",{staticClass:"functions"},[t.selected.length?i("p",[t._v("Selected sitemaps: "+t._s(t.selected.length))]):t._e(),i("p",{staticClass:"passive",class:{primary:t.selected.length}},[t._v("Recrawl sitemap")]),i("p",{staticClass:"passive",class:{error:t.selected.length},on:{click:t.deleteSelected}},[t._v("Remove sitemap")])])]),i("div",{staticClass:"filters"},[i("div",{staticClass:"wrap"},[i("h4",[t._v("Filters:")]),i("div",{staticClass:"filters-input"},[i("div",{staticClass:"filters-item",class:{activeInput:1===t.activeInput}},[i("p",{on:{click:function(e){return t.setActiveInput(1)}}},[t._v("URL or its part")]),1===t.activeInput?i("div",{staticClass:"dropDownFirst"},[i("div",{staticClass:"radioButton",class:{radioButtonActive:1===t.radioInput},on:{click:function(e){return t.setActiveRadio(1)}}},[t._v("Sitemap contains")]),i("div",{staticClass:"radioButton",class:{radioButtonActive:2===t.radioInput},on:{click:function(e){return t.setActiveRadio(2)}}},[t._v("Sitemap doesn’t contain")]),i("div",{staticClass:"radioButton",class:{radioButtonActive:3===t.radioInput},on:{click:function(e){return t.setActiveRadio(3)}}},[t._v("Exact match")]),i("div",{staticClass:"hr"}),i("div",{staticClass:"btn-block"},[i("button",{staticClass:"error",on:{click:function(e){t.radioInput=null}}},[t._v("Reset")]),i("button",{staticClass:"primary",on:{click:function(e){t.activeInput=null}}},[t._v("Apply")])])]):t._e()]),i("div",{staticClass:"filters-item",class:{activeInput:2===t.activeInput},on:{click:function(e){return t.setActiveInput(2)}}},[i("p",[t._v("All types")]),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)]),i("div",{staticClass:"filters-item",class:{activeInput:3===t.activeInput},on:{click:function(e){return t.setActiveInput(3)}}},[i("p",[t._v("Submitted")]),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)]),i("div",{staticClass:"filters-item",class:{activeInput:4===t.activeInput},on:{click:function(e){return t.setActiveInput(4)}}},[i("p",[i("font-awesome-icon",{attrs:{icon:"calendar-alt"}}),t._v(" 2/12/19 - 2/12..")],1),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)]),i("div",{staticClass:"filters-item",class:{activeInput:5===t.activeInput},on:{click:function(e){return t.setActiveInput(5)}}},[i("p",[t._v("All sitemaps")]),i("div",{staticClass:"arrow"},[i("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1),5===t.activeInput?i("div",{staticClass:"dropDownSec"},[i("p",[t._v("Success")]),i("p",[t._v("Couldn't fetch")]),i("p",[t._v("Errors")])]):t._e()])])])]),i("div",{staticClass:"title"},[i("div",{staticClass:"checkbox"},[i("div",{staticClass:"checkboxDiv",class:{allChecked:t.allChecked},on:{click:t.checkAll}},[t.allChecked?i("font-awesome-icon",{attrs:{icon:"check-square"}}):t._e()],1)]),i("div",{staticClass:"titleDiv elementDiv1"},[i("h4",[t._v("Sitemap("+t._s(t.sitemap.length)+")")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)]),t._l(t.sitemap,(function(e,s){return i("div",{key:s,staticClass:"element",class:{selectedEl:e.checked}},[i("div",{staticClass:"checkbox"},[i("div",{staticClass:"checkboxDiv",class:{allChecked:e.checked||t.allChecked},on:{click:function(i){e.checked?e.checked=t.allChecked=!1:e.checked=!0}}},[e.checked||t.allChecked?i("font-awesome-icon",{attrs:{icon:"check-square"}}):t._e()],1)]),i("div",{staticClass:"elementDiv elementDiv1"},[i("p",[t._v(t._s(e.path))]),t._v(" "),i("a",{attrs:{href:e.fullPath}},[i("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)]),i("div",{staticClass:"elementDiv elementDiv2"},[i("p",[t._v(t._s(e.isSitemapIndex?"Sitemap index":"False"))])]),i("div",{staticClass:"elementDiv elementDiv3"},[i("p",[t._v(t._s(e.lastSubmitted))])]),i("div",{staticClass:"elementDiv elementDiv4"},[i("p",[t._v(t._s(e.lastCheck))])]),i("div",{staticClass:"elementDiv elementDiv5"},[i("p",{staticClass:"error",class:{success:"Success"===e.errors}},[t._v(t._s(e.errors))])]),i("div",{staticClass:"elementDiv elementDiv6"},[i("p",[t._v(t._s(e.urls))])]),t._m(7,!0),i("div",{staticClass:"elementDiv elementDiv8"},[i("font-awesome-icon",{attrs:{icon:"trash"},on:{click:function(e){return t.deleteElement(s)}}})],1)])}))],2)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv2"},[i("h4",[t._v("Type")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv3"},[i("h4",[t._v("Submitted")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv4"},[i("h4",[t._v("Last check")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv5"},[i("h4",[t._v("Status")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv6"},[i("h4",[t._v("URLs")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv7"},[i("h4",[t._v("Recrawl sitemap")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv elementDiv8"},[i("h4",[t._v("Remove sitemap")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"elementDiv elementDiv7"},[i("p",[t._v("Recrawl")])])}],a=(i("4160"),i("fb6a"),i("a434"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276"),i("159b"),i("ad3d")),l={name:"App",data:function(){return{sitemap:[],activeInput:null,setActive:null,radioInput:null}},created:function(){var t=this;fetch("https://semalt.net/dev/api/v1/example/test/").then((function(t){return t.json()})).then((function(e){e.result.sitemap.forEach((function(e){t.sitemap.push(t.element(e))}))})).catch(console.log)},components:{FontAwesomeIcon:a["a"]},computed:{allChecked:{set:function(t){},get:function(){var t=!0;return this.sitemap.forEach((function(e){e.checked||(t=!1)})),t}},selected:function(){var t=[];return this.sitemap.forEach((function(e,i){e.checked&&t.push(i)})),t}},methods:{setActiveInput:function(t){this.activeInput!==t?this.activeInput=t:this.activeInput=void 0},setActiveRadio:function(t){this.radioInput=t},element:function(t){var e=new Date(t.lastCheck),i=new Date(t.lastSubmitted);return e=e.toString().split(" ").slice(1,4),i=i.toString().split(" ").slice(1,4),{fullPath:t.path,path:t.path.replace(/http:\/\/savetubevideo.com/,""),lastCheck:e[0]+" "+e[1]+", "+e[2],lastSubmitted:i[0]+" "+i[1]+", "+i[2],urls:t.urls.toLocaleString(),errors:0===t.errors?"Success":t.errors+" errors",checked:!1,isSitemapIndex:t.isSitemapsIndex}},checkAll:function(){this.allChecked?(this.allChecked=!1,this.sitemap.forEach((function(t){t.checked=!1}))):(this.allChecked=!0,this.sitemap.forEach((function(t){t.checked=!0})))},deleteElement:function(t){this.sitemap.splice(t,1)},deleteSelected:function(){for(var t=0;t<this.sitemap.length;t++)this.sitemap[t].checked&&(this.deleteElement(t),t--)}}},r=l,o=(i("5c0b"),i("2877")),u=Object(o["a"])(r,c,n,!1,null,null,null),v=u.exports,d=i("ecee"),p=i("c074");i("f5df1");d["c"].add(p["f"],p["e"],p["c"],p["a"],p["d"],p["b"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var s=i("9c0c"),c=i.n(s);c.a},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.c78524c5.js.map
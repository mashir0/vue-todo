(function(e){function t(t){for(var n,l,c=t[0],d=t[1],a=t[2],s=0,f=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var d=o[c];0!==r[d]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},i=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var u=d;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"top"},[o("h1",[e._v("Vue学習の為のTODOアプリsample")]),e._m(0),o("h1",[e._v("todos")]),o("div",{staticClass:"todo"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",placeholder:"title"},domProps:{value:e.title},on:{keyup:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.title=""},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)}],input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("button",{on:{click:e.addTodo}},[e._v("追加")]),e.todos.length?o("div",e._l(e.todos,(function(t){return o("ul",{key:t.id},[o("li",{class:{done:t.done}},[e.edit==t?o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"}],domProps:{value:t.title},on:{keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.editTodo(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.editTodo(t)}],blur:function(o){return e.editTodo(t)},input:function(o){o.target.composing||e.$set(t,"title",o.target.value)}}}):o("div",[o("table",[o("tr",[o("td",{attrs:{width:"10%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"todo.done"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{change:[function(o){var n=t.done,r=o.target,i=!!r.checked;if(Array.isArray(n)){var l=null,c=e._i(n,l);r.checked?c<0&&e.$set(t,"done",n.concat([l])):c>-1&&e.$set(t,"done",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(t,"done",i)},function(o){return e.editTodo(t)}]}})]),o("td",{attrs:{width:"80%"}},[o("label",{on:{dblclick:function(o){e.edit=t}}},[e._v(e._s(t.title))])]),o("td",{attrs:{width:"10%"}},[o("button",{on:{click:function(o){return e.delTodo(t)}}},[e._v("del")])])])])])])])})),0):o("div",[o("h3",[e._v("todoがありません")])])])])},c=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"kadai"},[o("ul",[o("h3",[e._v("機能")]),o("li",[e._v("追加")]),o("li",[e._v("編集(double click -> enter,esc, focus out)")]),o("li",[e._v("削除")]),o("h3",[e._v("余力があれば")]),o("li",[e._v("sort")]),o("li",[e._v("filter")]),o("li",[e._v("double clickでfocusされないbug修正")])]),o("h3",[e._v("参考サイト")]),o("a",{attrs:{href:"https://jp.vuejs.org/v2/examples/todomvc.html"}},[e._v("TodoMVC の例")])])}],d=o("0ff2"),a=o("59ca");o("ea7b"),o("e71f");n["a"].use(d["a"]);var u={apiKey:"AIzaSyClqR67ywD2JriFnHHl8PKiOLPI2aSzcDY",authDomain:"mytodo-9e3ff.firebaseapp.com",databaseURL:"https://mytodo-9e3ff.firebaseio.com",projectId:"mytodo-9e3ff",storageBucket:"mytodo-9e3ff.appspot.com",messagingSenderId:"885925433716",appId:"1:885925433716:web:8e105d806e0f3339c59c21",measurementId:"G-WSDKYC40HY"},s=a["initializeApp"](u),f=(a["firestore"],s.firestore()),p=(s.auth(),{name:"HelloWorld",data:function(){return{edit:{},title:"",todos:[]}},firestore:function(){return{todos:f.collection("todos").orderBy("createdAt","desc")}},methods:{addTodo:function(){var e=new Date;f.collection("todos").add({title:this.title,done:!1,createdAt:e}),this.title=""},delTodo:function(e){f.collection("todos").doc(e.id).delete()},editTodo:function(e){this.edit=null,f.collection("todos").doc(e.id).set(e)}}}),v=p,m=(o("8122"),o("2877")),y=Object(m["a"])(v,l,c,!1,null,"47762eb3",null),h=y.exports,b={name:"App",components:{HelloWorld:h}},_=b,g=(o("034f"),Object(m["a"])(_,r,i,!1,null,null,null)),k=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"57e3":function(e,t,o){},8122:function(e,t,o){"use strict";var n=o("57e3"),r=o.n(n);r.a},"85ec":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.54304bcb.js.map
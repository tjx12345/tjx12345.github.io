webpackJsonp([1],{"+31+":function(e,t){},0:function(e,t,n){e.exports=n("msSN")},"097M":function(e,t){},"5e9e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(e,t){e.type=t},setEffect:function(e,t){e.effect=t}}},"7b4Y":function(e,t){},CJsk:function(e,t){},LOWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SET_PAGE_SCROLL_POSITION",function(){return s}),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return u}),n.d(t,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),o=n("Dd8w"),i=n.n(o),s="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},s,function(e,t){var n=t.pageId,r=t.scrollPosition;e.scrollPostionMap=i()({},e.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(e,t){var n=e.commit,r=t.pageId,a=t.scrollPosition;n(s,{pageId:r,scrollPosition:a})}}},Uz7q:function(e,t){e.exports={buildVersion:1526018126110,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{swDest:"C:\\Users\\tujunxiong\\Desktop\\pwa-project\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(e,t,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="VfP6"},gHRC:function(e,t){},msSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("//Fk"),o=n.n(a),i=n("Gu7T"),s=n.n(i),c=n("Xxa5"),u=n.n(c),l=n("exGp"),f=n.n(l),p=n("/5sW"),h=n("1nuA"),d=(r=f()(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)});function v(e,t){var n={isClient:!0,app:t,store:e.store,route:e.to,from:e.from},r=e.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(e){var t=e.status,a=void 0===t?302:t,o=e.path,i=void 0===o?"":o,s=e.query,c=void 0===s?{}:s,u=e.external,l=void 0!==u&&u;n._redirected=!0,r({path:i,query:c,status:a,external:l})},n}var m,w=(m=f()(u.a.mark(function e(t,n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=9;break}if(!n._redirected){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,y(t[r],n);case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}},e,this)})),function(e,t){return m.apply(this,arguments)});function y(e,t){var n=void 0;return 2===e.length?n=new o.a(function(n,r){e(t,function(e,a){e?(t.error(e),r(e)):n(a)})}):(n=e(t))&&(n instanceof o.a||"function"==typeof n.then)||(n=o.a.resolve(n)),n}var b=n("Uz7q"),_=n.n(b),g=n("Dd8w"),x=n.n(g),P=n("p3jY"),T=n.n(P),k=n("/ocq"),E={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},S=n("XyMi"),A=Object(S.a)(E,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null).exports,C=n("fZjL"),M=n.n(C),O={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var e=this.$route.query;0!==M()(e).length&&this.$router.replace({name:"error",params:e})}};var I=function(e){n("7b4Y")},$=Object(S.a)(O,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-error"},[t("p",[this._v(this._s(this.message))])])},[],!1,I,"data-v-19a07bd8",null).exports;var j={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var e=f()(u.a.mark(function e(t){t.store,t.route;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var L=function(e){n("qmXh")},q=[{path:"/appshell",component:A,meta:{},name:"appshell"},{path:"/",component:Object(S.a)(j,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-index"},[t("h2",[this._v("LAVAS")]),this._v(" "),t("h4",[this._v("[ˈlɑ:vəz]")])])}],!1,L,"data-v-33cc9dd4",null).exports,meta:{},name:"index"},{path:"/error",component:$,meta:{},name:"error",alias:"*"}];p.a.use(k.a);var R=function(e,t,n){if(n)return n;var r={};return e.hash&&(r.selector=e.hash),e.matched.some(function(e){return e.meta.scrollToTop})&&(r.x=0,r.y=0),r},D=q.filter(function(e){return e.keepAlive||e.meta.keepAlive}).map(function(e){return e.name});var W=n("woOf"),B=n.n(W),U=n("BO1k"),V=n.n(U),N=n("NYxO");p.a.use(N.a);var X=n("VfP6"),Y=X.keys(),F={},G=!0,H=!1,z=void 0;try{for(var J,K=V()(Y);!(G=(J=K.next()).done);G=!0){var Z=J.value;if("./index.js"===Z){F=ue(Z);break}}}catch(e){H=!0,z=e}finally{try{!G&&K.return&&K.return()}finally{if(H)throw z}}if("function"!=typeof F){F.modules=F.modules||{};var Q=!0,ee=!1,te=void 0;try{for(var ne,re=V()(Y);!(Q=(ne=re.next()).done);Q=!0){var ae=ne.value;if("./index.js"!==ae){var oe=ae.replace(/^\.\//,"").replace(/\.js$/,""),ie=oe.split("/"),se=le(F,ie);se[oe=ie.pop()]=ue(ae),se[oe].namespaced=!0}}}catch(e){ee=!0,te=e}finally{try{!Q&&re.return&&re.return()}finally{if(ee)throw te}}}var ce=F instanceof Function?F:function(){return new N.a.Store(B()({},F,{state:F.state instanceof Function?F.state():{}}))};function ue(e){var t=X(e),n=t.default||t;if(n.commit)throw new Error("[lavas] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+e.replace("./",""));return n}function le(e,t){if(1===t.length)return e.modules;var n=t.shift(),r=e.modules[n]=e.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},le(r,t)}var fe={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(e){this.show=!0},handleRefresh:function(){window.location.reload()}}};var pe=function(e){n("097M")},he={name:"app",components:{UpdateToast:Object(S.a)(fe,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"popup"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[t("span",[this._v(this._s(this.text))]),this._v(" "),t("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[t("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,pe,"data-v-fc732238",null).exports},computed:x()({},Object(N.c)("pageTransition",{pageTransitionType:function(e){return e.type},pageTransitionEffect:function(e){return e.effect}}),Object(N.c)("scrollBehavior",{scrollPostionMap:function(e){return e.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var e=this.$route,t=e.name,n=e.params,r=M()(n);return r.length?t+r.reduce(function(e,t){return e+n[t]},""):null}}),data:function(){return{keepAlivePages:D}},methods:x()({},Object(N.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(e,t){e.classList.add("app-view-scroll-enabled"),e.scrollTop=t},restoreBodyScrollPosition:function(e,t){e.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=t},handleBeforeEnter:function(e){var t=this,n=e.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;p.a.nextTick(function(){t.restoreContainerScrollPosition(e,a)})},handleAfterEnter:function(e){var t=e.dataset.pageId,n=(this.scrollPostionMap[t]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(e,r)},handleBeforeLeave:function(e){var t=e.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(e,n),this.savePageScrollPosition({pageId:t,scrollPosition:{y:n}})}})};var de=function(e){n("gHRC")},ve=Object(S.a)(he,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.pageTransitionEffect},on:{"before-enter":e.handleBeforeEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(e.keepAlivePages)}},[n("router-view",{key:e.routerViewKey,class:["app-view",e.pageTransitionClass],attrs:{"data-page-id":e.$route.fullPath}})],1)],1),e._v(" "),n("update-toast")],1)},[],!1,de,null,null).exports;p.a.use(T.a),p.a.config.productionTip=!1;var me={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var we=function(e){n("+31+")},ye=Object(S.a)(me,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,we,"data-v-e0e1a4fc",null).exports,be=n("p5k0"),_e=n.n(be),ge=n("XGXE"),xe=n.n(ge);n("MU8w"),n("CJsk");_e.a.shim(),xe.a.shim();var Pe,Te,ke=p.a.prototype.$loading=new p.a(ye).$mount(),Ee=(Pe=function(){var e=new k.a({mode:"history",base:"/",scrollBehavior:R,routes:q});return e.beforeEach(function(t,n,r){e.app.$store&&e.app.$store.state.pageTransition.enable&&(e.app.$store.commit("pageTransition/setType","fade"),e.app.$store.commit("pageTransition/setEffect","fade")),r()}),e}(),Te=ce(),{App:p.a.extend(x()({router:Pe,store:Te},ve)),router:Pe,store:Te}),Se=Ee.App,Ae=Ee.router,Ce=Ee.store,Me=_.a.build,Oe=Me.ssr,Ie=Me.cssExtract,$e=_.a.middleware,je=void 0===$e?{}:$e,Le=_.a.skeleton,qe=Le.enable,Re=Le.asyncCSS,De=void 0;window.__INITIAL_STATE__&&Ce.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(ke.$el),p.a.mixin({beforeRouteUpdate:function(){var e=f()(u.a.mark(function e(t,n,r){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.$options.asyncData)?(ke.start(),a.call(this,{store:this.$store,route:t}).then(function(){ke.finish(),r()}).catch(r)):r();case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()});var We=!0;if(function(){var e=this;Ae.beforeEach((t=f()(u.a.mark(function t(n,r,a){var o,i,c,l,f,p,m;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(We||n.path!==r.path){e.next=2;break}return e.abrupt("return",a());case 2:return We=!1,o=Ae.getMatchedComponents(n),i=[].concat(s()(je.all||[]),s()(je.client||[]),s()(o.filter(function(e){var t=e.middleware;return!!t}).reduce(function(e,t){var n=t.middleware;return e.concat(n)},[]))),e.next=7,d(i);case 7:if(c=e.sent,!(l=i.find(function(e){return"function"!=typeof c[e]}))){e.next=11;break}throw new Error("Unknown middleware "+l);case 11:return f=!1,p=v({to:n,from:r,store:Ce,next:function(e){if(ke.finish&&ke.finish(),!f){if(f=!0,e.external)return e.query=Object(h.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:""),window.location.replace(e.path),a();a(e)}}},De),m=i.map(function(e){return c[e]}),e.next=17,w(m,p);case 17:f||a();case 18:case"end":return e.stop()}},t,e)})),function(e,n,r){return t.apply(this,arguments)}));var t}(),!document.body.hasAttribute("empty-appshell")&&Oe)De=new Se,Ae.onReady(function(){Ue(),De.$mount("#app")});else{var Be=qe&&Re&&Ie;window.mountLavas=function(){setTimeout(function(){var e=document.querySelector("#app");e&&(e.innerHTML=""),De.$mount("#app")},0)},Ue(),De=new Se,(!Be||Be&&window.STYLE_READY)&&window.mountLavas()}function Ue(){var e=this;Ae.beforeResolve(function(t,n,r){var a,i=Ae.getMatchedComponents(t),s=Ae.getMatchedComponents(n),c=!1,l=i.filter(function(e,t){return c||(c=s[t]!==e)});if(!l.length)return r();ke.start(),o.a.all(l.filter(function(e){return e.asyncData&&(!e.asyncDataFetched||!t.meta.keepAlive)}).map((a=f()(u.a.mark(function n(r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.asyncData({store:Ce,route:t});case 2:r.asyncDataFetched=!0;case 3:case"end":return e.stop()}},n,e)})),function(e){return a.apply(this,arguments)}))).then(function(){ke.finish(),r()}).catch(r)})}},qmXh:function(e,t){}},[0]);
//# sourceMappingURL=index.b9ff1498.js.map
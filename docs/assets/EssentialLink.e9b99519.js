import{G as H,c,h as _,H as ne,r as O,w as m,I as qe,J as Fe,i as ke,g as Be,K as Se,L as He,M as L,N as Ne,O as Xe,P as I,R as J,S as de,U as Z,V as re,W as ee,X as Ye,Y as Ue,Z as je,$ as Re,a0 as Ke,a1 as Ge,a2 as Je,a3 as Ze,o as et,a4 as ce,a5 as tt,a6 as fe,a7 as at,j as rt,_ as nt,k as ve,l as he,m as Q,y as me,f as W,z as ut,a8 as ot,C as ye,t as pe,x as it}from"./index.b48f70d8.js";import{b as lt}from"./QLayout.21983b87.js";import{c as st,b as F,Q as be}from"./format.e98013f3.js";var bt=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:u}){const o=c(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>_("div",{class:o.value},ne(u.default))}}),gt=H({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:u}){const o=c(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:o.value},ne(u.default))}}),wt=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:u,emit:o}){const{proxy:{$q:y}}=Be(),e=ke(Se,()=>{console.error("QHeader needs to be child of QLayout")}),n=O(parseInt(t.heightHint,10)),l=O(!0),f=c(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||y.platform.is.ios&&e.isContainer.value===!0),v=c(()=>{if(t.modelValue!==!0)return 0;if(f.value===!0)return l.value===!0?n.value:0;const s=n.value-e.scroll.value.position;return s>0?s:0}),r=c(()=>t.modelValue!==!0||f.value===!0&&l.value!==!0),k=c(()=>t.modelValue===!0&&r.value===!0&&t.reveal===!0),C=c(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),b=c(()=>{const s=e.rows.value.top,B={};return s[0]==="l"&&e.left.space===!0&&(B[y.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),s[2]==="r"&&e.right.space===!0&&(B[y.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),B});function i(s,B){e.update("header",s,B)}function p(s,B){s.value!==B&&(s.value=B)}function g({height:s}){p(n,s),i("size",s)}function h(s){k.value===!0&&p(l,!0),o("focusin",s)}m(()=>t.modelValue,s=>{i("space",s),p(l,!0),e.animate()}),m(v,s=>{i("offset",s)}),m(()=>t.reveal,s=>{s===!1&&p(l,t.modelValue)}),m(l,s=>{e.animate(),o("reveal",s)}),m(e.scroll,s=>{t.reveal===!0&&p(l,s.direction==="up"||s.position<=t.revealOffset||s.position-s.inflectionPoint<100)});const E={};return e.instances.header=E,t.modelValue===!0&&i("size",n.value),i("space",t.modelValue),i("offset",v.value),qe(()=>{e.instances.header===E&&(e.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const s=Fe(u.default,[]);return t.elevated===!0&&s.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(_(lt,{debounce:0,onResize:g})),_("header",{class:C.value,style:b.value,onFocusin:h},s)}}});const ue={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},dt=Object.keys(ue);ue.all=!0;function ge(t){const u={};for(const o of dt)t[o]===!0&&(u[o]=!0);return Object.keys(u).length===0?ue:(u.horizontal===!0?u.left=u.right=!0:u.left===!0&&u.right===!0&&(u.horizontal=!0),u.vertical===!0?u.up=u.down=!0:u.up===!0&&u.down===!0&&(u.vertical=!0),u.horizontal===!0&&u.vertical===!0&&(u.all=!0),u)}function we(t,u){return u.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof u.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(u.uid)===-1)}function te(t,u,o){const y=re(t);let e,n=y.left-u.event.x,l=y.top-u.event.y,f=Math.abs(n),v=Math.abs(l);const r=u.direction;r.horizontal===!0&&r.vertical!==!0?e=n<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?e=l<0?"up":"down":r.up===!0&&l<0?(e="up",f>v&&(r.left===!0&&n<0?e="left":r.right===!0&&n>0&&(e="right"))):r.down===!0&&l>0?(e="down",f>v&&(r.left===!0&&n<0?e="left":r.right===!0&&n>0&&(e="right"))):r.left===!0&&n<0?(e="left",f<v&&(r.up===!0&&l<0?e="up":r.down===!0&&l>0&&(e="down"))):r.right===!0&&n>0&&(e="right",f<v&&(r.up===!0&&l<0?e="up":r.down===!0&&l>0&&(e="down")));let k=!1;if(e===void 0&&o===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};e=u.event.lastDir,k=!0,e==="left"||e==="right"?(y.left-=n,f=0,n=0):(y.top-=l,v=0,l=0)}return{synthetic:k,payload:{evt:t,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:y,direction:e,isFirst:u.event.isFirst,isFinal:o===!0,duration:Date.now()-u.event.time,distance:{x:f,y:v},offset:{x:n,y:l},delta:{x:y.left-u.event.lastX,y:y.top-u.event.lastY}}}}let ct=0;var ae=He({name:"touch-pan",beforeMount(t,{value:u,modifiers:o}){if(o.mouse!==!0&&L.has.touch!==!0)return;function y(n,l){o.mouse===!0&&l===!0?Ye(n):(o.stop===!0&&Z(n),o.prevent===!0&&de(n))}const e={uid:"qvtp_"+ct++,handler:u,modifiers:o,direction:ge(o),noop:Ne,mouseStart(n){we(n,e)&&Xe(n)&&(I(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(we(n,e)){const l=n.target;I(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,l){if(L.is.firefox===!0&&J(t,!0),e.lastEvt=n,l===!0||o.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0)){const r=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&de(r),n.cancelBubble===!0&&Z(r),Object.assign(r,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:r}}Z(n)}const{left:f,top:v}=re(n);e.event={x:f,y:v,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:v}},move(n){if(e.event===void 0)return;const l=re(n),f=l.left-e.event.x,v=l.top-e.event.y;if(f===0&&v===0)return;e.lastEvt=n;const r=e.event.mouse===!0,k=()=>{y(n,r),o.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),st(),e.styleCleanup=i=>{if(e.styleCleanup=void 0,o.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),r===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};i!==void 0?setTimeout(()=>{p(),i()},50):p()}else i!==void 0&&i()}};if(e.event.detected===!0){e.event.isFirst!==!0&&y(n,e.event.mouse);const{payload:i,synthetic:p}=te(n,e,!1);i!==void 0&&(e.handler(i)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&k(),e.event.lastX=i.position.left,e.event.lastY=i.position.top,e.event.lastDir=p===!0?void 0:i.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||r===!0&&e.modifiers.mouseAllDir===!0){k(),e.event.detected=!0,e.move(n);return}const C=Math.abs(f),b=Math.abs(v);C!==b&&(e.direction.horizontal===!0&&C>b||e.direction.vertical===!0&&C<b||e.direction.up===!0&&C<b&&v<0||e.direction.down===!0&&C<b&&v>0||e.direction.left===!0&&C>b&&f<0||e.direction.right===!0&&C>b&&f>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,l){if(e.event!==void 0){if(ee(e,"temp"),L.is.firefox===!0&&J(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(te(n===void 0?e.lastEvt:n,e).payload);const{payload:f}=te(n===void 0?e.lastEvt:n,e,!0),v=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};t.__qtouchpan=e,o.mouse===!0&&I(e,"main",[[t,"mousedown","mouseStart",`passive${o.mouseCapture===!0?"Capture":""}`]]),L.has.touch===!0&&I(e,"main",[[t,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,u){const o=t.__qtouchpan;o!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&o.end(),o.handler=u.value),o.direction=ge(u.modifiers))},beforeUnmount(t){const u=t.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),ee(u,"main"),ee(u,"temp"),L.is.firefox===!0&&J(t,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete t.__qtouchpan)}});const Ce=150;var Ct=H({name:"QDrawer",inheritAttrs:!1,props:{...Ue,...je,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Re,"on-layout","mini-state"],setup(t,{slots:u,emit:o,attrs:y}){const e=Be(),{proxy:{$q:n}}=e,l=Ke(t,n),{preventBodyScroll:f}=at(),{registerTimeout:v}=Ge(),r=ke(Se,()=>{console.error("QDrawer needs to be child of QLayout")});let k,C,b;const i=O(t.behavior==="mobile"||t.behavior!=="desktop"&&r.totalWidth.value<=t.breakpoint),p=c(()=>t.mini===!0&&i.value!==!0),g=c(()=>p.value===!0?t.miniWidth:t.width),h=O(t.showIfAbove===!0&&i.value===!1?!0:t.modelValue===!0),E=c(()=>t.persistent!==!0&&(i.value===!0||Te.value===!0));function s(a,d){if(_e(),a!==!1&&r.animate(),q(0),i.value===!0){const w=r.instances[P.value];w!==void 0&&w.belowBreakpoint===!0&&w.hide(!1),x(1),r.isContainer.value!==!0&&f(!0)}else x(0),a!==!1&&R(!1);v(()=>{a!==!1&&R(!0),d!==!0&&o("show",a)},Ce)}function B(a,d){xe(),a!==!1&&r.animate(),x(0),q($.value*g.value),K(),d!==!0&&v(()=>{o("hide",a)},Ce)}const{show:N,hide:M}=Je({showing:h,hideOnRouteChange:E,handleShow:s,handleHide:B}),{addToHistory:_e,removeFromHistory:xe}=Ze(h,M,E),V={belowBreakpoint:i,hide:M},S=c(()=>t.side==="right"),$=c(()=>(n.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),oe=O(0),z=O(!1),X=O(!1),ie=O(g.value*$.value),P=c(()=>S.value===!0?"left":"right"),Y=c(()=>h.value===!0&&i.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:g.value:0),U=c(()=>t.overlay===!0||t.miniToOverlay===!0||r.view.value.indexOf(S.value?"R":"L")>-1||n.platform.is.ios===!0&&r.isContainer.value===!0),D=c(()=>t.overlay===!1&&h.value===!0&&i.value===!1),Te=c(()=>t.overlay===!0&&h.value===!0&&i.value===!1),Oe=c(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&z.value===!1?" hidden":"")),$e=c(()=>({backgroundColor:`rgba(0,0,0,${oe.value*.4})`})),le=c(()=>S.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),ze=c(()=>S.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ee=c(()=>{const a={};return r.header.space===!0&&le.value===!1&&(U.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&ze.value===!1&&(U.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),Me=c(()=>{const a={width:`${g.value}px`,transform:`translateX(${ie.value}px)`};return i.value===!0?a:Object.assign(a,Ee.value)}),De=c(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Le=c(()=>`q-drawer q-drawer--${t.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(z.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(U.value===!0||D.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(le.value===!0?" q-drawer--top-padding":""))),Qe=c(()=>{const a=n.lang.rtl===!0?t.side:P.value;return[[ae,Ie,void 0,{[a]:!0,mouse:!0}]]}),Ve=c(()=>{const a=n.lang.rtl===!0?P.value:t.side;return[[ae,se,void 0,{[a]:!0,mouse:!0}]]}),Pe=c(()=>{const a=n.lang.rtl===!0?P.value:t.side;return[[ae,se,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function j(){We(i,t.behavior==="mobile"||t.behavior!=="desktop"&&r.totalWidth.value<=t.breakpoint)}m(i,a=>{a===!0?(k=h.value,h.value===!0&&M(!1)):t.overlay===!1&&t.behavior!=="mobile"&&k!==!1&&(h.value===!0?(q(0),x(0),K()):N(!1))}),m(()=>t.side,(a,d)=>{r.instances[d]===V&&(r.instances[d]=void 0,r[d].space=!1,r[d].offset=0),r.instances[a]=V,r[a].size=g.value,r[a].space=D.value,r[a].offset=Y.value}),m(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&j()}),m(()=>t.behavior+t.breakpoint,j),m(r.isContainer,a=>{h.value===!0&&f(a!==!0),a===!0&&j()}),m(r.scrollbarWidth,()=>{q(h.value===!0?0:void 0)}),m(Y,a=>{T("offset",a)}),m(D,a=>{o("on-layout",a),T("space",a)}),m(S,()=>{q()}),m(g,a=>{q(),G(t.miniToOverlay,a)}),m(()=>t.miniToOverlay,a=>{G(a,g.value)}),m(()=>n.lang.rtl,()=>{q()}),m(()=>t.mini,()=>{t.modelValue===!0&&(Ae(),r.animate())}),m(p,a=>{o("mini-state",a)});function q(a){a===void 0?ce(()=>{a=h.value===!0?0:g.value,q($.value*a)}):(r.isContainer.value===!0&&S.value===!0&&(i.value===!0||Math.abs(a)===g.value)&&(a+=$.value*r.scrollbarWidth.value),ie.value=a)}function x(a){oe.value=a}function R(a){const d=a===!0?"remove":r.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Ae(){clearTimeout(C),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,C=setTimeout(()=>{X.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ie(a){if(h.value!==!1)return;const d=g.value,w=F(a.distance.x,0,d);if(a.isFinal===!0){w>=Math.min(75,d)===!0?N():(r.animate(),x(0),q($.value*d)),z.value=!1;return}q((n.lang.rtl===!0?S.value!==!0:S.value)?Math.max(d-w,0):Math.min(0,w-d)),x(F(w/d,0,1)),a.isFirst===!0&&(z.value=!0)}function se(a){if(h.value!==!0)return;const d=g.value,w=a.direction===t.side,A=(n.lang.rtl===!0?w!==!0:w)?F(a.distance.x,0,d):0;if(a.isFinal===!0){Math.abs(A)<Math.min(75,d)===!0?(r.animate(),x(1),q(0)):M(),z.value=!1;return}q($.value*A),x(F(1-A/d,0,1)),a.isFirst===!0&&(z.value=!0)}function K(){f(!1),R(!0)}function T(a,d){r.update(t.side,a,d)}function We(a,d){a.value!==d&&(a.value=d)}function G(a,d){T("size",a===!0?t.miniWidth:d)}return r.instances[t.side]=V,G(t.miniToOverlay,g.value),T("space",D.value),T("offset",Y.value),t.showIfAbove===!0&&t.modelValue!==!0&&h.value===!0&&t["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),et(()=>{o("on-layout",D.value),o("mini-state",p.value),k=t.showIfAbove===!0;const a=()=>{(h.value===!0?s:B)(!1,!0)};if(r.totalWidth.value!==0){ce(a);return}b=m(r.totalWidth,()=>{b(),b=void 0,h.value===!1&&t.showIfAbove===!0&&i.value===!1?N(!1):a()})}),qe(()=>{b!==void 0&&b(),clearTimeout(C),h.value===!0&&K(),r.instances[t.side]===V&&(r.instances[t.side]=void 0,T("size",0),T("offset",0),T("space",!1))}),()=>{const a=[];i.value===!0&&(t.noSwipeOpen===!1&&a.push(tt(_("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Qe.value)),a.push(fe("div",{ref:"backdrop",class:Oe.value,style:$e.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",t.noSwipeBackdrop!==!0&&h.value===!0,()=>Pe.value)));const d=p.value===!0&&u.mini!==void 0,w=[_("div",{...y,key:""+d,class:[De.value,y.class]},d===!0?u.mini():ne(u.default))];return t.elevated===!0&&h.value===!0&&w.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(fe("aside",{ref:"content",class:Le.value,style:Me.value},w,"contentclose",t.noSwipeClose!==!0&&i.value===!0,()=>Ve.value)),_("div",{class:"q-drawer-container"},a)}}});const ft=rt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function vt(t,u,o,y,e,n){return ve(),he(it,{clickable:"",tag:"a",to:t.link},{default:Q(()=>[t.icon?(ve(),he(me,{key:0,avatar:""},{default:Q(()=>[W(ut,{name:t.icon},null,8,["name"])]),_:1})):ot("",!0),W(me,null,{default:Q(()=>[W(be,null,{default:Q(()=>[ye(pe(t.title),1)]),_:1}),W(be,{caption:""},{default:Q(()=>[ye(pe(t.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var qt=nt(ft,[["render",vt]]);export{qt as E,gt as Q,bt as a,wt as b,Ct as c};
import{u as Ze,a as et,v as tt,Q as Te,b as at}from"./QBtn.93bc027b.js";import{j as O,c as f,h as S,r as $,w as g,k as Z,i as $e,g as N,l as xe,m as nt,s as Ee,H as ke,o as Ve,n as Y,p as lt,P as ot,q as rt,t as H,u as ut,v as it,x as K,y as ue,z as qe,A as ie,B as fe,C as se,D as st,E as Qe,_ as De,G as I,I as G,J as B,d as C,K as dt,L as z,M as ve,N as _e,O as ct,Q as ft,R as vt,F as mt,S as ht}from"./index.8fd12ee7.js";import{h as F,a as Oe,b as Ce}from"./render.ae79c614.js";import{Q as bt,a as pt,b as yt}from"./QLayout.8f8ac0be.js";import{u as me,a as he,b as X}from"./format.f7e92456.js";var gt=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const u=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:u.value},F(a.default))}}),wt=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const u=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:u.value},F(a.default))}}),kt=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:u}){const{proxy:{$q:v}}=N(),t=$e(xe,()=>{console.error("QHeader needs to be child of QLayout")}),o=$(parseInt(e.heightHint,10)),i=$(!0),d=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||v.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return i.value===!0?o.value:0;const r=o.value-t.scroll.value.position;return r>0?r:0}),n=f(()=>e.modelValue!==!0||d.value===!0&&i.value!==!0),w=f(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),k=f(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=f(()=>{const r=t.rows.value.top,q={};return r[0]==="l"&&t.left.space===!0&&(q[v.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),r[2]==="r"&&t.right.space===!0&&(q[v.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function s(r,q){t.update("header",r,q)}function b(r,q){r.value!==q&&(r.value=q)}function _({height:r}){b(o,r),s("size",r)}function h(r){w.value===!0&&b(i,!0),u("focusin",r)}g(()=>e.modelValue,r=>{s("space",r),b(i,!0),t.animate()}),g(c,r=>{s("offset",r)}),g(()=>e.reveal,r=>{r===!1&&b(i,e.modelValue)}),g(i,r=>{t.animate(),u("reveal",r)}),g(t.scroll,r=>{e.reveal===!0&&b(i,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const x={};return t.instances.header=x,e.modelValue===!0&&s("size",o.value),s("space",e.modelValue),s("offset",c.value),Z(()=>{t.instances.header===x&&(t.instances.header=void 0,s("size",0),s("offset",0),s("space",!1))}),()=>{const r=Oe(a.default,[]);return e.elevated===!0&&r.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(S(bt,{debounce:0,onResize:_})),S("header",{class:k.value,style:p.value,onFocusin:h},r)}}}),R=O({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const u=f(()=>parseInt(e.lines,10)),v=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(u.value===1?" ellipsis":"")),t=f(()=>e.lines!==void 0&&u.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":u.value}:null);return()=>S("div",{style:t.value,class:v.value},F(a.default))}}),J=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const u=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:u.value},F(a.default))}}),Me=O({name:"QItem",props:{...me,...Ze,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:u}){const{proxy:{$q:v}}=N(),t=he(e,v),{hasRouterLink:o,hasLink:i,linkProps:d,linkClass:c,linkTag:n,navigateToRouterLink:w}=et(),k=$(null),p=$(null),s=f(()=>e.clickable===!0||i.value===!0||e.tag==="label"),b=f(()=>e.disable!==!0&&s.value===!0),_=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(b.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),h=f(()=>{if(e.insetLevel===void 0)return null;const y=v.lang.rtl===!0?"Right":"Left";return{["padding"+y]:16+e.insetLevel*56+"px"}});function x(y){b.value===!0&&(p.value!==null&&(y.qKeyEvent!==!0&&document.activeElement===k.value?p.value.focus():document.activeElement===p.value&&k.value.focus()),o.value===!0&&w(y),u("click",y))}function r(y){if(b.value===!0&&nt(y,13)===!0){Ee(y),y.qKeyEvent=!0;const V=new MouseEvent("click",y);V.qKeyEvent=!0,k.value.dispatchEvent(V)}u("keyup",y)}function q(){const y=Oe(a.default,[]);return b.value===!0&&y.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:p})),y}return()=>{const y={ref:k,class:_.value,style:h.value,onClick:x,onKeyup:r};return b.value===!0?(y.tabindex=e.tabindex||"0",Object.assign(y,d.value)):s.value===!0&&(y["aria-disabled"]="true"),S(n.value,y,q())}}}),qt=O({name:"QList",props:{...me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:a}){const u=N(),v=he(e,u.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(v.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S("div",{class:t.value},F(a.default))}});function _t(e,a,u){let v;function t(){v!==void 0&&(ke.remove(v),v=void 0)}return Z(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){v={condition:()=>u.value===!0,handler:a},ke.add(v)}}}const Ct={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Bt=["before-show","show","before-hide","hide"];function Lt({showing:e,canShow:a,hideOnRouteChange:u,handleShow:v,handleHide:t,processOnMount:o}){const i=N(),{props:d,emit:c,proxy:n}=i;let w;function k(r){e.value===!0?b(r):p(r)}function p(r){if(d.disable===!0||r!==void 0&&r.qAnchorHandled===!0||a!==void 0&&a(r)!==!0)return;const q=d["onUpdate:modelValue"]!==void 0;q===!0&&(c("update:modelValue",!0),w=r,Y(()=>{w===r&&(w=void 0)})),(d.modelValue===null||q===!1)&&s(r)}function s(r){e.value!==!0&&(e.value=!0,c("before-show",r),v!==void 0?v(r):c("show",r))}function b(r){if(d.disable===!0)return;const q=d["onUpdate:modelValue"]!==void 0;q===!0&&(c("update:modelValue",!1),w=r,Y(()=>{w===r&&(w=void 0)})),(d.modelValue===null||q===!1)&&_(r)}function _(r){e.value!==!1&&(e.value=!1,c("before-hide",r),t!==void 0?t(r):c("hide",r))}function h(r){d.disable===!0&&r===!0?d["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):r===!0!==e.value&&(r===!0?s:_)(w)}g(()=>d.modelValue,h),u!==void 0&&tt(i)===!0&&g(()=>n.$route.fullPath,()=>{u.value===!0&&e.value===!0&&b()}),o===!0&&Ve(()=>{h(d.modelValue)});const x={show:p,hide:b,toggle:k};return Object.assign(n,x),x}function St(){let e;return{preventBodyScroll(a){a!==e&&(e!==void 0||a===!0)&&(e=a,lt(a))}}}function Tt(){let e;return Z(()=>{clearTimeout(e)}),{registerTimeout(a,u){clearTimeout(e),e=setTimeout(a,u)},removeTimeout(){clearTimeout(e)}}}const be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},$t=Object.keys(be);be.all=!0;function Be(e){const a={};for(const u of $t)e[u]===!0&&(a[u]=!0);return Object.keys(a).length===0?be:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}function Le(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function xt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ot.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function de(e,a,u){const v=fe(e);let t,o=v.left-a.event.x,i=v.top-a.event.y,d=Math.abs(o),c=Math.abs(i);const n=a.direction;n.horizontal===!0&&n.vertical!==!0?t=o<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=i<0?"up":"down":n.up===!0&&i<0?(t="up",d>c&&(n.left===!0&&o<0?t="left":n.right===!0&&o>0&&(t="right"))):n.down===!0&&i>0?(t="down",d>c&&(n.left===!0&&o<0?t="left":n.right===!0&&o>0&&(t="right"))):n.left===!0&&o<0?(t="left",d<c&&(n.up===!0&&i<0?t="up":n.down===!0&&i>0&&(t="down"))):n.right===!0&&o>0&&(t="right",d<c&&(n.up===!0&&i<0?t="up":n.down===!0&&i>0&&(t="down")));let w=!1;if(t===void 0&&u===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,w=!0,t==="left"||t==="right"?(v.left-=o,d=0,o=0):(v.top-=i,c=0,i=0)}return{synthetic:w,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:v,direction:t,isFirst:a.event.isFirst,isFinal:u===!0,duration:Date.now()-a.event.time,distance:{x:d,y:c},offset:{x:o,y:i},delta:{x:v.left-a.event.lastX,y:v.top-a.event.lastY}}}}let Et=0;var ce=rt({name:"touch-pan",beforeMount(e,{value:a,modifiers:u}){if(u.mouse!==!0&&H.has.touch!==!0)return;function v(o,i){u.mouse===!0&&i===!0?Ee(o):(u.stop===!0&&ie(o),u.prevent===!0&&qe(o))}const t={uid:"qvtp_"+Et++,handler:a,modifiers:u,direction:Be(u),noop:ut,mouseStart(o){Le(o,t)&&it(o)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Le(o,t)){const i=o.target;K(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,i){if(H.is.firefox===!0&&ue(e,!0),t.lastEvt=o,i===!0||u.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0)){const n=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&qe(n),o.cancelBubble===!0&&ie(n),Object.assign(n,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:n}}ie(o)}const{left:d,top:c}=fe(o);t.event={x:d,y:c,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:c}},move(o){if(t.event===void 0)return;const i=fe(o),d=i.left-t.event.x,c=i.top-t.event.y;if(d===0&&c===0)return;t.lastEvt=o;const n=t.event.mouse===!0,w=()=>{v(o,n),u.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xt(),t.styleCleanup=s=>{if(t.styleCleanup=void 0,u.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const b=()=>{document.body.classList.remove("no-pointer-events--children")};s!==void 0?setTimeout(()=>{b(),s()},50):b()}else s!==void 0&&s()}};if(t.event.detected===!0){t.event.isFirst!==!0&&v(o,t.event.mouse);const{payload:s,synthetic:b}=de(o,t,!1);s!==void 0&&(t.handler(s)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&w(),t.event.lastX=s.position.left,t.event.lastY=s.position.top,t.event.lastDir=b===!0?void 0:s.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){w(),t.event.detected=!0,t.move(o);return}const k=Math.abs(d),p=Math.abs(c);k!==p&&(t.direction.horizontal===!0&&k>p||t.direction.vertical===!0&&k<p||t.direction.up===!0&&k<p&&c<0||t.direction.down===!0&&k<p&&c>0||t.direction.left===!0&&k>p&&d<0||t.direction.right===!0&&k>p&&d>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,i){if(t.event!==void 0){if(se(t,"temp"),H.is.firefox===!0&&ue(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(de(o===void 0?t.lastEvt:o,t).payload);const{payload:d}=de(o===void 0?t.lastEvt:o,t,!0),c=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,u.mouse===!0&&K(t,"main",[[e,"mousedown","mouseStart",`passive${u.mouseCapture===!0?"Capture":""}`]]),H.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const u=e.__qtouchpan;u!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&u.end(),u.handler=a.value),u.direction=Be(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),se(a,"main"),se(a,"temp"),H.is.firefox===!0&&ue(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});const Se=150;var Vt=O({name:"QDrawer",inheritAttrs:!1,props:{...Ct,...me,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Bt,"on-layout","mini-state"],setup(e,{slots:a,emit:u,attrs:v}){const t=N(),{proxy:{$q:o}}=t,i=he(e,o),{preventBodyScroll:d}=St(),{registerTimeout:c}=Tt(),n=$e(xe,()=>{console.error("QDrawer needs to be child of QLayout")});let w,k,p;const s=$(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),b=f(()=>e.mini===!0&&s.value!==!0),_=f(()=>b.value===!0?e.miniWidth:e.width),h=$(e.showIfAbove===!0&&s.value===!1?!0:e.modelValue===!0),x=f(()=>e.persistent!==!0&&(s.value===!0||Fe.value===!0));function r(l,m){if(Pe(),l!==!1&&n.animate(),T(0),s.value===!0){const L=n.instances[j.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),Q(1),n.isContainer.value!==!0&&d(!0)}else Q(0),l!==!1&&le(!1);c(()=>{l!==!1&&le(!0),m!==!0&&u("show",l)},Se)}function q(l,m){ze(),l!==!1&&n.animate(),Q(0),T(M.value*_.value),oe(),m!==!0&&c(()=>{u("hide",l)},Se)}const{show:y,hide:V}=Lt({showing:h,hideOnRouteChange:x,handleShow:r,handleHide:q}),{addToHistory:Pe,removeFromHistory:ze}=_t(h,V,x),W={belowBreakpoint:s,hide:V},E=f(()=>e.side==="right"),M=f(()=>(o.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),pe=$(0),P=$(!1),ee=$(!1),ye=$(_.value*M.value),j=f(()=>E.value===!0?"left":"right"),te=f(()=>h.value===!0&&s.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),ae=f(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(E.value?"R":"L")>-1||o.platform.is.ios===!0&&n.isContainer.value===!0),A=f(()=>e.overlay===!1&&h.value===!0&&s.value===!1),Fe=f(()=>e.overlay===!0&&h.value===!0&&s.value===!1),Ae=f(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&P.value===!1?" hidden":"")),He=f(()=>({backgroundColor:`rgba(0,0,0,${pe.value*.4})`})),ge=f(()=>E.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Ie=f(()=>E.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Re=f(()=>{const l={};return n.header.space===!0&&ge.value===!1&&(ae.value===!0?l.top=`${n.header.offset}px`:n.header.space===!0&&(l.top=`${n.header.size}px`)),n.footer.space===!0&&Ie.value===!1&&(ae.value===!0?l.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(l.bottom=`${n.footer.size}px`)),l}),Ne=f(()=>{const l={width:`${_.value}px`,transform:`translateX(${ye.value}px)`};return s.value===!0?l:Object.assign(l,Re.value)}),We=f(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),je=f(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(P.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${b.value===!0?"mini":"standard"}`+(ae.value===!0||A.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ge.value===!0?" q-drawer--top-padding":""))),Ue=f(()=>{const l=o.lang.rtl===!0?e.side:j.value;return[[ce,Ge,void 0,{[l]:!0,mouse:!0}]]}),Ke=f(()=>{const l=o.lang.rtl===!0?j.value:e.side;return[[ce,we,void 0,{[l]:!0,mouse:!0}]]}),Xe=f(()=>{const l=o.lang.rtl===!0?j.value:e.side;return[[ce,we,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){Je(s,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}g(s,l=>{l===!0?(w=h.value,h.value===!0&&V(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(h.value===!0?(T(0),Q(0),oe()):y(!1))}),g(()=>e.side,(l,m)=>{n.instances[m]===W&&(n.instances[m]=void 0,n[m].space=!1,n[m].offset=0),n.instances[l]=W,n[l].size=_.value,n[l].space=A.value,n[l].offset=te.value}),g(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),g(()=>e.behavior+e.breakpoint,ne),g(n.isContainer,l=>{h.value===!0&&d(l!==!0),l===!0&&ne()}),g(n.scrollbarWidth,()=>{T(h.value===!0?0:void 0)}),g(te,l=>{D("offset",l)}),g(A,l=>{u("on-layout",l),D("space",l)}),g(E,()=>{T()}),g(_,l=>{T(),re(e.miniToOverlay,l)}),g(()=>e.miniToOverlay,l=>{re(l,_.value)}),g(()=>o.lang.rtl,()=>{T()}),g(()=>e.mini,()=>{e.modelValue===!0&&(Ye(),n.animate())}),g(b,l=>{u("mini-state",l)});function T(l){l===void 0?Y(()=>{l=h.value===!0?0:_.value,T(M.value*l)}):(n.isContainer.value===!0&&E.value===!0&&(s.value===!0||Math.abs(l)===_.value)&&(l+=M.value*n.scrollbarWidth.value),ye.value=l)}function Q(l){pe.value=l}function le(l){const m=l===!0?"remove":n.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function Ye(){clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,k=setTimeout(()=>{ee.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ge(l){if(h.value!==!1)return;const m=_.value,L=X(l.distance.x,0,m);if(l.isFinal===!0){L>=Math.min(75,m)===!0?y():(n.animate(),Q(0),T(M.value*m)),P.value=!1;return}T((o.lang.rtl===!0?E.value!==!0:E.value)?Math.max(m-L,0):Math.min(0,L-m)),Q(X(L/m,0,1)),l.isFirst===!0&&(P.value=!0)}function we(l){if(h.value!==!0)return;const m=_.value,L=l.direction===e.side,U=(o.lang.rtl===!0?L!==!0:L)?X(l.distance.x,0,m):0;if(l.isFinal===!0){Math.abs(U)<Math.min(75,m)===!0?(n.animate(),Q(1),T(0)):V(),P.value=!1;return}T(M.value*U),Q(X(1-U/m,0,1)),l.isFirst===!0&&(P.value=!0)}function oe(){d(!1),le(!0)}function D(l,m){n.update(e.side,l,m)}function Je(l,m){l.value!==m&&(l.value=m)}function re(l,m){D("size",l===!0?e.miniWidth:m)}return n.instances[e.side]=W,re(e.miniToOverlay,_.value),D("space",A.value),D("offset",te.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),Ve(()=>{u("on-layout",A.value),u("mini-state",b.value),w=e.showIfAbove===!0;const l=()=>{(h.value===!0?r:q)(!1,!0)};if(n.totalWidth.value!==0){Y(l);return}p=g(n.totalWidth,()=>{p(),p=void 0,h.value===!1&&e.showIfAbove===!0&&s.value===!1?y(!1):l()})}),Z(()=>{p!==void 0&&p(),clearTimeout(k),h.value===!0&&oe(),n.instances[e.side]===W&&(n.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const l=[];s.value===!0&&(e.noSwipeOpen===!1&&l.push(st(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ue.value)),l.push(Ce("div",{ref:"backdrop",class:Ae.value,style:He.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>Xe.value)));const m=b.value===!0&&a.mini!==void 0,L=[S("div",{...v,key:""+m,class:[We.value,v.class]},m===!0?a.mini():F(a.default))];return e.elevated===!0&&h.value===!0&&L.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Ce("aside",{ref:"content",class:je.value,style:Ne.value},L,"contentclose",e.noSwipeClose!==!0&&s.value===!0,()=>Ke.value)),S("div",{class:"q-drawer-container"},l)}}});const Qt=Qe({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Dt(e,a,u,v,t,o){return I(),G(Me,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:B(()=>[e.icon?(I(),G(J,{key:0,avatar:""},{default:B(()=>[C(Te,{name:e.icon},null,8,["name"])]),_:1})):dt("",!0),C(J,null,{default:B(()=>[C(R,null,{default:B(()=>[z(ve(e.title),1)]),_:1}),C(R,{caption:""},{default:B(()=>[z(ve(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Ot=De(Qt,[["render",Dt]]);const Mt=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Pt=Qe({name:"MainLayout",components:{EssentialLink:Ot},setup(){const e=$(!1);return{essentialLinks:Mt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),zt=z(" Quasar App "),Ft=z(" Essential Links "),At=z("Cerrar Sesi\xF3n"),Ht=z("Salir del Sistema");function It(e,a,u,v,t,o){const i=_e("EssentialLink"),d=_e("router-view");return I(),G(pt,{view:"lHh Lpr lFf"},{default:B(()=>[C(kt,{elevated:""},{default:B(()=>[C(wt,null,{default:B(()=>[C(at,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),C(gt,null,{default:B(()=>[zt]),_:1}),ct("div",null,"Quasar v"+ve(e.$q.version),1)]),_:1})]),_:1}),C(Vt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:B(()=>[C(qt,null,{default:B(()=>[C(R,{header:""},{default:B(()=>[Ft]),_:1}),(I(!0),ft(mt,null,vt(e.essentialLinks,c=>(I(),G(i,ht({key:c.title},c),null,16))),128)),C(Me,{clickable:"",to:{name:"login"}},{default:B(()=>[C(J,{avatar:""},{default:B(()=>[C(Te,{name:"fa-solid fa-arrow-right-from-bracket"})]),_:1}),C(J,null,{default:B(()=>[C(R,null,{default:B(()=>[At]),_:1}),C(R,{caption:""},{default:B(()=>[Ht]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),C(yt,null,{default:B(()=>[C(d)]),_:1})]),_:1})}var Xt=De(Pt,[["render",It]]);export{Xt as default};
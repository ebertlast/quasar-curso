import{C as B,c as d,h as _,D as L,Z as E,$ as I,r as w,a0 as M,U as P,G as A,g as R,E as C,a1 as x,w as S,a2 as Q,o as U,V,a3 as H,a4 as $}from"./index.ae82518f.js";var F=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:l.value},L(t.default))}}),N=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=d(()=>parseInt(e.lines,10)),n=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),o=d(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>_("div",{style:o.value,class:n.value},L(t.default))}});const j={dark:{type:Boolean,default:null}};function K(e,t){return d(()=>e.dark===null?t.dark.isActive:e.dark)}var z=B({name:"QItem",props:{...j,...E,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=R(),o=K(e,n),{hasRouterLink:p,hasLink:b,linkProps:i,linkClass:r,linkTag:k,navigateToRouterLink:s}=I(),m=w(null),v=w(null),y=d(()=>e.clickable===!0||b.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&y.value===!0),h=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?r.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=d(()=>{if(e.insetLevel===void 0)return null;const u=n.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function g(u){c.value===!0&&(v.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===m.value?v.value.focus():document.activeElement===v.value&&m.value.focus()),p.value===!0&&s(u),l("click",u))}function a(u){if(c.value===!0&&M(u,13)===!0){P(u),u.qKeyEvent=!0;const T=new MouseEvent("click",u);T.qKeyEvent=!0,m.value.dispatchEvent(T)}l("keyup",u)}function f(){const u=A(t.default,[]);return c.value===!0&&u.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:v})),u}return()=>{const u={ref:m,class:h.value,style:q.value,onClick:g,onKeyup:a};return c.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,i.value)):y.value===!0&&(u["aria-disabled"]="true"),_(k.value,u,f())}}});function W(e,t,l){let n;function o(){n!==void 0&&(x.remove(n),n=void 0)}return C(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){n={condition:()=>l.value===!0,handler:t},x.add(n)}}}const G={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},O=["before-show","show","before-hide","hide"];function Z({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:o,processOnMount:p}){const b=R(),{props:i,emit:r,proxy:k}=b;let s;function m(a){e.value===!0?c(a):v(a)}function v(a){if(i.disable===!0||a!==void 0&&a.qAnchorHandled===!0||t!==void 0&&t(a)!==!0)return;const f=i["onUpdate:modelValue"]!==void 0;f===!0&&(r("update:modelValue",!0),s=a,V(()=>{s===a&&(s=void 0)})),(i.modelValue===null||f===!1)&&y(a)}function y(a){e.value!==!0&&(e.value=!0,r("before-show",a),n!==void 0?n(a):r("show",a))}function c(a){if(i.disable===!0)return;const f=i["onUpdate:modelValue"]!==void 0;f===!0&&(r("update:modelValue",!1),s=a,V(()=>{s===a&&(s=void 0)})),(i.modelValue===null||f===!1)&&h(a)}function h(a){e.value!==!1&&(e.value=!1,r("before-hide",a),o!==void 0?o(a):r("hide",a))}function q(a){i.disable===!0&&a===!0?i["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):a===!0!==e.value&&(a===!0?y:h)(s)}S(()=>i.modelValue,q),l!==void 0&&Q(b)===!0&&S(()=>k.$route.fullPath,()=>{l.value===!0&&e.value===!0&&c()}),p===!0&&U(()=>{q(i.modelValue)});const g={show:v,hide:c,toggle:m};return Object.assign(k,g),g}function J(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,H(t))}}}function X(){let e;return C(()=>{clearTimeout(e)}),{registerTimeout(t,l){clearTimeout(e),e=setTimeout(t,l)},removeTimeout(){clearTimeout(e)}}}function Y(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),$.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ee(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function te(e,t,l){if(l<=t)return t;const n=l-t+1;let o=t+(e-t)%n;return o<t&&(o=n+o),o===0?0:o}export{z as Q,F as a,N as b,Y as c,j as d,O as e,K as f,X as g,Z as h,W as i,ee as j,J as k,te as n,G as u};
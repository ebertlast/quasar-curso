import{e as w,Q as O,f as p,g as V}from"./use-quasar.dd43fe90.js";import{u as C,r,o as S,au as c,w as $,c as y,k as Q,l as I,m as f,aM as N,p as v,f as t,Q as g}from"./index.ae82518f.js";import{Q as R}from"./QPage.ace85a2a.js";import{u as q}from"./vue-i18n.runtime.esm-bundler.3b2c9ff9.js";import"./format.99f6ec35.js";const F={class:"q-pa-md bg-white",style:{width:"400px"}},k={__name:"LoginPage",setup(L){const o=C(),s=r(null),n=r("OSOLANO"),u=r("OMAR2020");r(!1);const i=w(),m=N(),d=r([]),{t:b}=q(),h=()=>{i.loading.show({message:"Consultando los datos del usuario..."}),c.post("ususu/ingresar",{COMPANIA:s.value.COMPANIA,USUARIO:n.value,CLAVE:u.value}).then(e=>{const l=e.data.jwt,a=e.data.result;l?(o.setJwt(l),o.setUsuario(a),m.push({name:"home"})):i.notify({color:"negative",textColor:"white",icon:"error",message:b("form.login.credenciales_incorrectas"),progress:!0,actions:[{icon:"close",color:"white"}]})}).finally(()=>{i.loading.hide()})},A=()=>{n.value="",u.value=""};return S(()=>{o.jwt&&m.push({name:"home"}),c.get("cia/").then(e=>{d.value=e.data.result.recordset}).then(()=>{o.companiaFavorita&&(s.value=o.companiaFavorita)})}),$(()=>s.value,e=>{o.setCompaniaFavorita(e)}),y(()=>o.companiaFavorita?o.companiaFavorita.RAZONSOCIAL:"Sin Compania Seleccionada").value,(e,l)=>(Q(),I(R,{padding:"",class:"bg-indigo-1 flex flex-center"},{default:f(()=>[v("div",F,[t(V,{onSubmit:h,onReset:A,class:"q-gutter-md"},{default:f(()=>[t(O,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=a=>s.value=a),options:d.value,label:e.$t("form.login.compania_label"),"option-label":"RAZONSOCIAL","option-value":"COMPANIA",filled:""},null,8,["modelValue","options","label"]),t(p,{filled:"",modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=a=>n.value=a),label:e.$t("form.login.usuario_label"),hint:e.$t("form.login.usuario_hint"),"lazy-rules":"",rules:[a=>a&&a.length>0||e.$t("form.required.text")]},null,8,["modelValue","label","hint","rules"]),t(p,{type:"password",filled:"",modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=a=>u.value=a),label:e.$t("form.login.clave_label"),hint:e.$t("form.login.clave_hint"),"lazy-rules":"",rules:[a=>a&&a.length>0||e.$t("form.required.text")]},null,8,["modelValue","label","hint","rules"]),v("div",null,[t(g,{label:e.$t("form.buttons.submit"),type:"submit",color:"primary",disable:n.value===""||u.value===""},null,8,["label","disable"]),t(g,{label:e.$t("form.buttons.reset"),type:"reset",color:"primary",flat:"",class:"q-ml-sm"},null,8,["label"])])]),_:1})])]),_:1}))}};export{k as default};

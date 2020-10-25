(function(e){function t(t){for(var n,l,i=t[0],u=t[1],o=t[2],b=0,d=[];b<i.length;b++)l=i[b],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&d.push(c[l][0]),c[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==c[u]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},c={app:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/genshin-dps-calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var s=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"15ec":function(e,t,a){"use strict";a("b287")},"1bff":function(e,t,a){},"64be":function(e,t,a){"use strict";a("c894")},b287:function(e,t,a){},c894:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={class:"row"},r={class:"column"},l=Object(n["e"])("div",{class:"column"},null,-1);function i(e,t,a,i,u,o){var s=Object(n["l"])("weapon-calculator");return Object(n["f"])(),Object(n["c"])("div",c,[Object(n["e"])("div",r,[Object(n["e"])(s)]),l])}var u=a("d4ec"),o=a("262e"),s=a("2caf"),b=a("9ab4"),d=a("ce1f"),p=Object(n["p"])("data-v-922de908");Object(n["i"])("data-v-922de908");var m={class:"row"},f=Object(n["e"])("div",{class:"left column"},"Base Attack:",-1),O={class:"right column"},j={class:"row"},v=Object(n["e"])("div",{class:"left column"},"Elemental Mastery Bonus Percent:",-1),h={class:"right column"},g={class:"row"},y=Object(n["e"])("div",{class:"left column"},"Critical Rate Percent:",-1),P={class:"right column"},k={class:"row"},D=Object(n["e"])("div",{class:"left column"},"Critical Damage Percent:",-1),w={class:"right column"},C={class:"row"},M=Object(n["e"])("div",{class:"left column"},"Physical Damage Percent:",-1),A={class:"right column"},U={class:"row"},_=Object(n["e"])("div",{class:"left column"},"Elemental Damage Percent:",-1),x={class:"right column"},E={class:"row"},V=Object(n["e"])("div",{class:"left column"},"Character Attack:",-1),B={class:"right column"},L={class:"row"},R=Object(n["e"])("div",{class:"left column"},"Physical Damage:",-1),S={class:"right column"},F={class:"row"},I=Object(n["e"])("div",{class:"left column"},"Elemental Damage:",-1),J={class:"right column"},T={class:"row"},W=Object(n["e"])("div",{class:"left column"},"Elemental Reaction Damage:",-1),$={class:"right column"};Object(n["g"])();var q=p((function(e,t,a,c,r,l){var i=Object(n["l"])("expandable-value-block");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("div",m,[f,Object(n["e"])("div",O,[Object(n["o"])(Object(n["e"])("input",{onChange:t[1]||(t[1]=function(){return e.updateCalculations.apply(e,arguments)}),type:"number",min:"0",step:"1","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.baseAttack=t})},null,544),[[n["n"],e.baseAttack,void 0,{number:!0}]])])]),Object(n["e"])("div",j,[v,Object(n["e"])("div",h,[Object(n["o"])(Object(n["e"])("input",{onChange:t[3]||(t[3]=function(){return e.updateCalculations.apply(e,arguments)}),type:"number",min:"0",step:".1","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.elementalMasteryBonusPercent=t})},null,544),[[n["n"],e.elementalMasteryBonusPercent,void 0,{number:!0}]])])]),Object(n["e"])(i,{ref:"attackPercentModifiersElement",onListUpdated:e.updateCalculations,prompt:"Attack Percent",values:this.attackPercentModifiers,step:".1"},null,8,["onListUpdated"]),Object(n["e"])(i,{onListUpdated:e.updateCalculations,prompt:"Flat Attack",values:this.flatAttackModifiers},null,8,["onListUpdated"]),Object(n["e"])("div",g,[y,Object(n["e"])("div",P,[Object(n["o"])(Object(n["e"])("input",{onChange:t[5]||(t[5]=function(){return e.updateAttack.apply(e,arguments)}),type:"number",min:"0",step:".1","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.criticalRatePercent=t})},null,544),[[n["n"],e.criticalRatePercent,void 0,{number:!0}]])])]),Object(n["e"])("div",k,[D,Object(n["e"])("div",w,[Object(n["o"])(Object(n["e"])("input",{onChange:t[7]||(t[7]=function(){return e.updateCalculations.apply(e,arguments)}),type:"number",min:"0",step:".1","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.criticalDamagePercent=t})},null,544),[[n["n"],e.criticalDamagePercent]])])]),Object(n["e"])("div",C,[M,Object(n["e"])("div",A,[Object(n["o"])(Object(n["e"])("input",{onChange:t[9]||(t[9]=function(){return e.updateCalculations.apply(e,arguments)}),type:"number",min:"0",step:".1","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.physicalDamagePercent=t})},null,544),[[n["n"],e.physicalDamagePercent,void 0,{number:!0}]])])]),Object(n["e"])("div",U,[_,Object(n["e"])("div",x,[Object(n["o"])(Object(n["e"])("input",{onChange:t[11]||(t[11]=function(){return e.updateCalculations.apply(e,arguments)}),type:"number",min:"0",step:".1","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.elementalDamagePercent=t})},null,544),[[n["n"],e.elementalDamagePercent,void 0,{number:!0}]])])]),Object(n["e"])("div",E,[V,Object(n["e"])("div",B,Object(n["m"])(Math.round(e.attack)),1)]),Object(n["e"])("div",L,[R,Object(n["e"])("div",S,Object(n["m"])(Math.round(e.physicalDamage)),1)]),Object(n["e"])("div",F,[I,Object(n["e"])("div",J,Object(n["m"])(Math.round(e.elementalDamage)),1)]),Object(n["e"])("div",T,[W,Object(n["e"])("div",$,Object(n["m"])(Math.round(e.reactionDamage)),1)])],64)})),z=(a("13d5"),a("bee2")),G=(a("b64b"),a("d3b7"),a("ddb0"),Object(n["p"])("data-v-40366df4"));Object(n["i"])("data-v-40366df4");var H={class:"left column"},K={class:"right column"},N={key:0};Object(n["g"])();var Q=G((function(e,t,a,c,r,l){return Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["k"])(e.values,(function(a,c){return Object(n["f"])(),Object(n["c"])("div",{class:"row",key:c},[Object(n["e"])("div",H,Object(n["m"])(e.prompt)+" "+Object(n["m"])(c+1)+":",1),Object(n["e"])("div",K,[Object(n["e"])("input",{onChange:function(t){return e.updateList(t.target.value,c)},type:"number",min:"0",step:e.step?e.step:1,value:a},null,40,["onChange","step","value"]),c==Object.keys(e.values).length-1?(Object(n["f"])(),Object(n["c"])("span",N,[Object(n["e"])("button",{onClick:t[1]||(t[1]=function(){return e.addElement.apply(e,arguments)})},"+")])):Object(n["d"])("",!0)])])})),128)})),X=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return Object(z["a"])(a,[{key:"updateList",value:function(e,t){this.values[t]=parseFloat(e)?parseFloat(e):0,this.$emit("list-updated")}},{key:"addElement",value:function(){this.values.push(0)}},{key:"getValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.values.reduce((function(t,a){return t+a/e}),0)}}]),a}(d["b"]);X=Object(b["a"])([Object(d["a"])({props:["prompt","values","step"],emits:["list-updated"]})],X);var Y=X;a("cdef");Y.render=Q,Y.__scopeId="data-v-40366df4";var Z=Y,ee=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(u["a"])(this,a),e=t.apply(this,arguments),e.baseAttack=0,e.elementalMasteryBonusPercent=0,e.criticalRatePercent=0,e.criticalDamagePercent=0,e.physicalDamagePercent=0,e.elementalDamagePercent=0,e.attackPercentModifiers=[0],e.flatAttackModifiers=[0],e.attack=0,e.physicalDamage=0,e.elementalDamage=0,e.reactionDamage=0,e}return Object(z["a"])(a,[{key:"updateCalculations",value:function(){var e=this.attackPercentModifiers.reduce((function(e,t){return e+t/100}),0),t=this.flatAttackModifiers.reduce((function(e,t){return e+t}),0);this.attack=this.baseAttack*(1+e)+t;var a=this.attack*(1+this.criticalRatePercent/100*(1+this.criticalDamagePercent/100));this.physicalDamage=a*(1+this.physicalDamagePercent/100),this.elementalDamage=a*(1+this.elementalDamagePercent/100),this.reactionDamage=this.elementalDamage*(1+this.elementalMasteryBonusPercent/100)}}]),a}(d["b"]);ee=Object(b["a"])([Object(d["a"])({components:{ExpandableValueBlock:Z}})],ee);var te=ee;a("15ec");te.render=q,te.__scopeId="data-v-922de908";var ae=te,ne=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return a}(d["b"]);ne=Object(b["a"])([Object(d["a"])({components:{WeaponCalculator:ae}})],ne);var ce=ne;a("64be");ce.render=i;var re=ce;Object(n["b"])(re).mount("#app")},cdef:function(e,t,a){"use strict";a("1bff")}});
//# sourceMappingURL=app.70a043e6.js.map
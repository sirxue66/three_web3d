"use strict";(self["webpackChunkweb3d"]=self["webpackChunkweb3d"]||[]).push([[367],{3367:function(e,n,o){o.r(n),o.d(n,{default:function(){return u}});var a=o(3396),t=o(4870),s=o(1114),i=o(4543),d=o(8552),r=o(5461),c={__name:"example02",setup(e){const n=(0,t.iH)(null);(0,a.Y3)((()=>{o()}));const o=()=>{const e=document.body.clientWidth,o=document.body.clientHeight,a=new s.xsS,t=new s.cPb(75,e/o,1,1e3);t.position.set(15,10,15),a.add(t);const c=new s.b_z(4,10,32),l=new s.RSm;l.wireframe=!0;const u=new s.Kj0(c,l);u.position.set(4,5,4),d.ZP.to(u.rotation,{y:2*Math.PI,duration:3,ease:"power2.inOut",repeat:-1}),a.add(u);const m=new r.XS;m.add(u.position,"x").min(4).max(15).step(1).name("X轴").onChange((e=>{console.log("调节X轴---\x3e",e)})),m.add(u.position,"y").min(5).max(15).step(1).name("Y轴"),m.addColor({color:"#4169e1"},"color").onChange((e=>{console.log(e)})),m.add(u,"visible").name("显示隐藏"),m.add({fn:()=>{d.ZP.to(u.position,{z:10,duration:5,ease:"power1.inOut",repeat:2})}},"fn").name("开始运动");const w=m.addFolder("设置椎体");w.add(u.material,"wireframe");const p=new s.VLJ(40,40,4473924,"#e60027");a.add(p);const f=new i.z(t,n.value);f.enableDamping=!0;const b=new s.CP7({canvas:n.value,antialias:!0});b.setSize(e,o);const h=()=>{b.render(a,t),requestAnimationFrame(h)};return h()};return(e,o)=>((0,a.wg)(),(0,a.iD)("canvas",{ref_key:"canvasDom",ref:n},null,512))}};const l=c;var u=l}}]);
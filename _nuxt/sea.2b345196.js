import{I as t,J as o,L as n,M as e,A as s,R as l,x as i}from"./swiper-vue.613be678.js";const c={class:"wrapper"},d=e("div",{class:"bg"},null,-1),_={class:"navbar"},r=e("div",{class:"logo"},"Summer",-1),u=e("div",{class:"menu-item"},[e("ul",null,[e("li",null,"Home"),e("li",null,"About"),e("li",null,"Offers")])],-1),m={class:"menu"},p={class:"search"},v=l('<div class="media"><ul><li>Facebook</li><li>Instagram</li><li>Twitter</li></ul></div><div class="img-wrapper"><div class="img"></div><div class="block"></div></div><div class="text"><h1><span class="text-bar">Breathe in <label> the sea</label></span></h1><p><span class="text-bar">get the summer body</span></p></div>',3),x={class:"bottomnav"},h=e("div",{class:"next"},"up next",-1),b={class:"nav"},y=e("div",{class:"bottomnav-img"},null,-1),M={__name:"sea",setup(f){return t(()=>{TweenMax.to(".bg",2,{width:"100%",ease:Expo.easeInOut}),TweenMax.from(".navbar",1.5,{delay:2.5,opacity:0,y:20,ease:Expo.easeInOut}),TweenMax.staggerFrom(".media ul li",1.5,{delay:2.8,opacity:0,x:-30,ease:Expo.easeInOut},.08),TweenMax.from(".text h1 .text-bar",1.5,{delay:1.6,y:"100%",ease:Expo.easeInOut}),TweenMax.from(".text p .text-bar",1.5,{delay:2,y:"100%",ease:Expo.easeInOut}),TweenMax.from(".bottomnav",1.5,{delay:3.2,opacity:0,y:30,ease:Expo.easeInOut}),TweenMax.from(".bottomnav .next",1.5,{delay:3.5,opacity:0,x:-20,ease:Expo.easeInOut})}),(w,g)=>{const a=o("font-awesome-icon");return i(),n("div",c,[d,e("nav",_,[r,u,e("div",m,[s(a,{icon:["fas","bars"]})]),e("div",p,[s(a,{icon:["fas","magnifying-glass"]})])]),v,e("div",x,[h,e("div",b,[e("ul",null,[e("li",null,[s(a,{icon:["fas","arrow-up"]})]),e("li",null,[s(a,{icon:["fas","arrow-down"]})])]),y])])])}}};export{M as default};

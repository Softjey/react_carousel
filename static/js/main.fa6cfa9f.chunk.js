(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),s=n(4),c=n(5),r=n(7),u=n(6),m=n(1),l=n.n(m),o=(n(12),n(13),n(0)),h=function(t){var e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,c=t.infinite,r=Object(m.useState)(0),u=r[0],l=r[1],h=e,j=i*a,p=a*n;Object(m.useEffect)((function(){l((function(t){var n=-(e.length-i)*a;return c&&0===t?n:Math.min(0,t+p)}))}),[a]);return Object(o.jsxs)("div",{className:"Carousel",style:{width:j},children:[Object(o.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(u,"px)"),transition:"".concat(s,"ms")},children:h.map((function(t,e){return Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:t,alt:"".concat(e+1),style:{width:a}})},t)}))}),Object(o.jsxs)("div",{className:"Carousel__buttons",children:[Object(o.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){l((function(t){var n=-(e.length-i)*a;return c&&0===t?n:Math.min(0,t+p)}))},children:"Prev"}),Object(o.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){l((function(t){var n=-(e.length-i)*a;return c&&t===n?0:Math.max(n,t-p)}))},"data-cy":"next",children:"Next"})]})]})},j=(n(15),function(t){var e=t.setStep,n=t.setFrameSize,i=t.setItemWidth,a=t.setAnimationDuration,s=t.setInfinite,c=t.step,r=t.frameSize,u=t.itemWidth,m=t.animationDuration,l=t.infinite;return Object(o.jsxs)("form",{action:"#",className:"SettingsMenu",children:[Object(o.jsxs)("div",{className:"SettingsMenu__param",children:[Object(o.jsx)("label",{className:"SettingsMenu__label",htmlFor:"step",children:"Step:"}),Object(o.jsx)("input",{type:"number",name:"step",className:"SettingsMenu__input",value:c,onChange:function(t){return e(+t.target.value)}})]}),Object(o.jsxs)("div",{className:"SettingsMenu__param",children:[Object(o.jsx)("label",{className:"SettingsMenu__label",htmlFor:"frameSize",children:"Frame size:"}),Object(o.jsx)("input",{type:"number",name:"frameSize",className:"SettingsMenu__input",value:r,onChange:function(t){return n(+t.target.value)}})]}),Object(o.jsxs)("div",{className:"SettingsMenu__param",children:[Object(o.jsx)("label",{className:"SettingsMenu__label",htmlFor:"itemWidth",children:"Item width:"}),Object(o.jsx)("input",{type:"number",name:"itemWidth",className:"SettingsMenu__input",value:u,onChange:function(t){return i(+t.target.value)}})]}),Object(o.jsxs)("div",{className:"SettingsMenu__param",children:[Object(o.jsx)("label",{className:"SettingsMenu__label",htmlFor:"animationDuration",children:"Animation duration:"}),Object(o.jsx)("input",{type:"number",name:"animationDuration",className:"SettingsMenu__input",value:m,onChange:function(t){return a(+t.target.value)}})]}),Object(o.jsxs)("div",{className:"SettingsMenu__param",children:[Object(o.jsx)("label",{className:"SettingsMenu__label",htmlFor:"infinite",children:"Infinity:"}),Object(o.jsx)("input",{type:"checkbox",name:"infinite",className:"SettingsMenu__input",checked:l,onChange:function(t){return s(t.target.checked)}})]})]})}),p=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.setImages=function(e){t.setState({images:e})},t.setStep=function(e){t.setState({step:e})},t.setFrameSize=function(e){t.setState({frameSize:e})},t.setItemWidth=function(e){t.setState({itemWidth:e})},t.setAnimationDuration=function(e){t.setState({animationDuration:e})},t.setInfinite=function(e){t.setState({infinite:e})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,c=t.infinite,r=this.setStep,u=this.setFrameSize,m=this.setItemWidth,l=this.setAnimationDuration,p=this.setInfinite;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with"," ",e.length," ","images"]}),Object(o.jsxs)("div",{className:"App__content",children:[Object(o.jsx)(j,{setStep:r,setFrameSize:u,setItemWidth:m,setAnimationDuration:l,setInfinite:p,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:c}),Object(o.jsx)(h,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:c})]})]})}}]),n}(l.a.Component),g=p;a.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fa6cfa9f.chunk.js.map
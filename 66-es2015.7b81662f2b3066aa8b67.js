(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{mgaC:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",function(){return m});var o=i("mLBW"),s=(i("TJLY"),i("9Z7W"),i("vTwt")),r=i("Jbqe"),a=i("1hGh"),n=i("7rGv");const d=(e,t)=>{const i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));const s=new e;return s.addElement(t.querySelector(".modal-wrapper")),s.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),o.fromTo("opacity",.01,.4),Promise.resolve(i.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(o).add(s))},l=(e,t)=>{const i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));const s=new e,r=t.querySelector(".modal-wrapper");s.addElement(r);const a=r.getBoundingClientRect();return s.beforeStyles({opacity:1}).fromTo("translateY","0%",`${t.ownerDocument.defaultView.innerHeight-a.top}px`),o.fromTo("opacity",.4,0),Promise.resolve(i.addElement(t).easing("ease-out").duration(250).add(o).add(s))},c=(e,t)=>{const i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));const s=new e;return s.addElement(t.querySelector(".modal-wrapper")),s.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),o.fromTo("opacity",.01,.32),Promise.resolve(i.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(o).add(s))},h=(e,t)=>{const i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));const s=new e,r=t.querySelector(".modal-wrapper");return s.addElement(r),s.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),o.fromTo("opacity",.32,0),Promise.resolve(i.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(o).add(s))};class m{constructor(e){Object(o.m)(this,e),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.didPresent=Object(o.d)(this,"ionModalDidPresent",7),this.willPresent=Object(o.d)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.d)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionModalDidDismiss",7)}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,s.a)}lifecycle(e){const t=this.usersElement,i=p[e.type];if(t&&i){const o=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign({},this.componentProps,{modal:this.el});return this.usersElement=await Object(a.a)(this.delegate,e,this.component,["ion-page"],t),await Object(n.a)(this.usersElement),Object(s.e)(this,"modalEnter",d,c)}async dismiss(e,t){const i=await Object(s.f)(this,e,t,"modalLeave",l,h);return i&&await Object(a.b)(this.delegate,this.usersElement),i}onDidDismiss(){return Object(s.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(s.g)(this.el,"ionModalWillDismiss")}hostData(){const e=Object(o.e)(this);return{"no-router":!0,"aria-modal":"true",class:Object.assign({[e]:!0},Object(r.b)(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}__stencil_render(){const e={"modal-wrapper":!0,[Object(o.e)(this)]:!0};return[Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{role:"dialog",class:e})]}get el(){return Object(o.f)(this)}render(){return Object(o.i)(o.a,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"}}const p={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);
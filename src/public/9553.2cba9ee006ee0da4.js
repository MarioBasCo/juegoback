"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9553],{9553:(_,f,c)=>{c.r(f),c.d(f,{RecoverPageModule:()=>z});var d=c(9808),l=c(4182),a=c(2974),u=c(1e3),p=c(655),C=c(2340),e=c(2096),m=c(7857),E=c(7556),v=c(1086),y=c(591);const x=new e.OlP("recaptcha-language"),R=new e.OlP("recaptcha-base-url"),b=new e.OlP("recaptcha-nonce-tag"),w=new e.OlP("recaptcha-settings"),A=new e.OlP("recaptcha-v3-site-key"),F_loadScript=function M(t,o,r,n,i){window.ng2recaptchaloaded=()=>{o(grecaptcha)};const s=document.createElement("script");s.innerHTML="",s.src=`${n||"https://www.google.com/recaptcha/api.js"}?render=${t}&onload=ng2recaptchaloaded${r}`,i&&(s.nonce=i),s.async=!0,s.defer=!0,document.head.appendChild(s)};let g=(()=>{class t{constructor(r,n,i,s,h){this.platformId=r,this.language=n,this.baseUrl=i,this.nonce=s,this.v3SiteKey=h,this.init(),this.ready=(0,d.NF)(this.platformId)?t.ready.asObservable():(0,v.of)()}init(){if(!t.ready&&(0,d.NF)(this.platformId)){const r=new y.X(null);t.ready=r,F_loadScript(this.v3SiteKey||"explicit",s=>r.next(s),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return t.ready=null,t.\u0275fac=function(r){return new(r||t)(e.LFG(e.Lbi),e.LFG(x,8),e.LFG(R,8),e.LFG(b,8),e.LFG(A,8))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),T=0,S=(()=>{class t{constructor(r,n,i,s){this.elementRef=r,this.loader=n,this.zone=i,this.id="ngrecaptcha-"+T++,this.errorMode="default",this.resolved=new e.vpe,this.error=new e.vpe,s&&(this.siteKey=s.siteKey,this.theme=s.theme,this.type=s.type,this.size=s.size,this.badge=s.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(r=>{null!=r&&r.render instanceof Function&&(this.grecaptcha=r,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return null!=this.widget?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}errored(r){this.error.emit(r)}captchaResponseCallback(r){this.resolved.emit(r)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){const r={badge:this.badge,callback:n=>{this.zone.run(()=>this.captchaResponseCallback(n))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};"handled"===this.errorMode&&(r["error-callback"]=(...n)=>{this.zone.run(()=>this.errored(n))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,r),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(e.SBq),e.Y36(g),e.Y36(e.R0b),e.Y36(w,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(r,n){2&r&&e.uIk("id",n.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",tabIndex:"tabIndex",badge:"badge",errorMode:"errorMode"},outputs:{resolved:"resolved",error:"error"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(r,n){},encapsulation:2}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),P=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[g],imports:[[Z]]}),t})();function j(t,o){1&t&&(e.TgZ(0,"small"),e.TgZ(1,"p",21),e._uU(2," *Por favor ingrese su correo"),e.qZA(),e.qZA())}function O(t,o){1&t&&(e.TgZ(0,"small"),e.TgZ(1,"p",21),e._uU(2,"* No parece un correo valido"),e.qZA(),e.qZA())}const V=[{path:"",component:(()=>{class t{constructor(r,n,i,s,h){this.fb=r,this.router=n,this.serStorage=i,this.serUser=s,this.toast=h,this.isCaptchaValid=!1,this.loginForm=this.fb.group({correo:["",[l.kI.required,l.kI.email,l.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],codigo:[!1,[l.kI.required,l.kI.requiredTrue]]})}ngOnInit(){}get sitekey(){return C.N.recaptcha.siteKey}captchaResolved(r){console.log("Captcha resolved",r),this.isCaptchaValid=!0,this.loginForm.get("codigo").setValue(!0)}ingresar(){this.loginForm.valid&&this.serUser.forgotPassword(this.loginForm.value).subscribe(n=>{this.showMessage(n.message,0==n.status?"danger":"success")})}showMessage(r,n){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:r,color:n,duration:3e3})).present()})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l.qu),e.Y36(u.F0),e.Y36(m.Y),e.Y36(E.e),e.Y36(a.yF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recover"]],decls:34,vars:6,consts:[[3,"fullscreen"],["vertical","top","horizontal","start","slot","fixed"],["size","small","color","ocean","routerLink","/login"],["size","large","name","arrow-back"],[1,"ion-justify-content-center"],["size-lg","4","size-md","6","size-sm","12"],[1,"login-container"],[1,"title","ion-text-center"],[1,"ion-text-center","ion-padding-start","ion-padding-end","ion-justify-content-center"],[1,"form-lg",3,"formGroup","ngSubmit"],[1,"ion-margin-bottom",2,"width","100%"],["lines","none"],["type","mail","placeholder","Correo electr\xf3nico","formControlName","correo"],[1,"text-danger","text-start"],[4,"ngIf"],[2,"transform","scale(1.08)","width","100%","display","flex","justify-content","center"],[2,"position","relative","box-shadow","none !important",3,"siteKey","resolved"],["type","submit","color","success",1,"btn-form",3,"disabled"],[1,"ion-margin-top","ion-text-center"],[1,"span"],["routerLink","/confirm-recover"],[1,"error"]],template:function(r,n){if(1&r&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-fab",1),e.TgZ(2,"ion-fab-button",2),e._UZ(3,"ion-icon",3),e.qZA(),e.qZA(),e.TgZ(4,"ion-grid"),e.TgZ(5,"ion-row",4),e.TgZ(6,"ion-col",5),e.TgZ(7,"div",6),e.TgZ(8,"h3",7),e.TgZ(9,"strong"),e._uU(10,"Recuperar contrase\xf1a"),e.qZA(),e.qZA(),e.TgZ(11,"ion-row",8),e.TgZ(12,"p"),e._uU(13,"Para realizar el cambio de su contrase\xf1a ingrese su correo electr\xf3nico y complete el c\xf3digo reCAPTCHA. Recibir\xe1 un c\xf3digo para cambiar su contrase\xf1a. "),e.qZA(),e.qZA(),e.TgZ(14,"form",9),e.NdJ("ngSubmit",function(){return n.ingresar()}),e.TgZ(15,"div",10),e.TgZ(16,"ion-item",11),e._UZ(17,"ion-input",12),e.qZA(),e.TgZ(18,"div",13),e.YNc(19,j,3,0,"small",14),e.YNc(20,O,3,0,"small",14),e.qZA(),e.qZA(),e.TgZ(21,"div",10),e.TgZ(22,"div",15),e.TgZ(23,"re-captcha",16),e.NdJ("resolved",function(s){return n.captchaResolved(s)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"ion-button",17),e._uU(25,"Solicitar C\xf3digo "),e.qZA(),e.qZA(),e.TgZ(26,"div",18),e.TgZ(27,"p"),e.TgZ(28,"strong"),e._uU(29,"\xbfTiene un c\xf3digo?"),e.qZA(),e._uU(30," ingr\xe9selo "),e.TgZ(31,"span",19),e.TgZ(32,"a",20),e._uU(33,"aqu\xed"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r){let i,s;e.Q6J("fullscreen",!0),e.xp6(14),e.Q6J("formGroup",n.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(i=n.loginForm.get("correo"))?null:i.hasError("required"))&&n.loginForm.get("correo").touched),e.xp6(1),e.Q6J("ngIf",(null==(s=n.loginForm.get("correo"))?null:s.hasError("email"))||(null==(s=n.loginForm.get("correo"))?null:s.hasError("pattern"))),e.xp6(3),e.Q6J("siteKey",n.sitekey),e.xp6(1),e.Q6J("disabled",!n.loginForm.valid)}},directives:[a.W2,a.IJ,a.W4,a.YI,u.rH,a.gu,a.jY,a.Nd,a.wI,l._Y,l.JL,l.sg,a.Ie,a.pK,a.j9,l.JJ,l.u,d.O5,S,a.YG,u.yS],styles:["@import\"https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap\";*[_ngcontent-%COMP%]{font-family:Dosis,sans-serif}ion-content[_ngcontent-%COMP%]{--background: none;background-color:#fff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23FFFFFF' stroke-width='0.2' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFC148'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFC148'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFC148'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover}.login-container[_ngcontent-%COMP%]{width:100%;height:100vh;padding:3px;display:flex;justify-content:center;align-items:center;flex-direction:column}.form-lg[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:center;flex-direction:column;align-items:center;text-align:center}.form-lg[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%;border-radius:10px;border:1px solid var(--ion-color-dark)}.title[_ngcontent-%COMP%]{text-transform:capitalize;font-size:2.1rem;font-weight:600;letter-spacing:1px;padding-bottom:50px}.span[_ngcontent-%COMP%]{color:var(--ion-color-ocean);font-weight:600;cursor:pointer}.span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.registro[_ngcontent-%COMP%]{width:100%;font-size:1.15em;font-weight:700;letter-spacing:1px;text-align:right}.registro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-color-rose);text-decoration:none;cursor:pointer}.btn-form[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:2px}.open[_ngcontent-%COMP%]{font-size:50px}@media screen and (max-width: 650px){.form-lg[_ngcontent-%COMP%]{width:95%}}"]}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(V)],u.Bz]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,l.u5,a.Pc,l.UX,P,U]]}),t})()}}]);
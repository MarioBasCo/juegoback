"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5115],{5115:(G,Z,i)=>{i.r(Z),i.d(Z,{SingupPageModule:()=>R});var E=i(9808),l=i(4182),o=i(2974),m=i(1e3),v=i(655);class P{static isValidYear(n){const a=n.value;if(a.length<10)return;const r=new Date(a),s=new Date;let g=r.getFullYear(),u=s.getFullYear()-g;return u<0||u>100?{isValidYear:!0}:null}}class q{static isOlder(n){const a=n.value;if(a.length<10)return;const r=new Date(a),s=new Date;let g=r.getFullYear(),c=r.getMonth()+1,u=r.getDate(),p=s.getFullYear(),h=s.getMonth()+1,d=s.getDate(),f=p-g;return(h<c||h==c&&d<u)&&f--,f>=18?null:{isOlder:!0}}}var e=i(2096),U=i(7556);function b(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * Por favor ingrese los nombres "),e.qZA())}function w(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * Se requieren al menos 2 car\xe1cteres "),e.qZA())}function S(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * El n\xfamero de letras excede el requerido "),e.qZA())}function I(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * No se aceptan n\xfameros o car\xe1cteres especiales "),e.qZA())}function O(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * Por favor ingrese los apellidos "),e.qZA())}function Y(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * Se requieren al menos 2 car\xe1cteres "),e.qZA())}function M(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * El n\xfamero de letras excede el requerido "),e.qZA())}function N(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * No se aceptan n\xfameros o car\xe1cteres especiales "),e.qZA())}function J(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1,"* Por favor ingrese la fecha de nacimiento"),e.qZA())}function k(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1,"* Debe ser mayor de edad"),e.qZA())}function z(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1,"* Por favor ingrese una fecha de nacimiento valida"),e.qZA())}function Q(t,n){1&t&&(e.TgZ(0,"small"),e.TgZ(1,"p",22),e._uU(2," *Por favor ingrese su correo"),e.qZA(),e.qZA())}function D(t,n){1&t&&(e.TgZ(0,"small"),e.TgZ(1,"p",22),e._uU(2,"* No parece un correo valido"),e.qZA(),e.qZA())}function V(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * Por favor ingrese su contrase\xf1a "),e.qZA())}function L(t,n){1&t&&(e.TgZ(0,"small"),e._uU(1," * Se requieren al menos 8 car\xe1cteres "),e.qZA())}const j=[{path:"",component:(()=>{class t{constructor(a,r,s,g){this.fb=a,this.serAuth=r,this.toast=s,this.router=g,this.dateValue="",this.buildForm()}ngOnInit(){}buildForm(){let a=new Date;a.setFullYear(a.getFullYear()-18),this.dateValue=a.toISOString().slice(0,10).replace("T"," "),this.regForm=this.fb.group({nombre:["",[l.kI.required,l.kI.minLength(2),l.kI.maxLength(150),l.kI.pattern("[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd1 ]+")]],apellido:["",[l.kI.required,l.kI.minLength(2),l.kI.maxLength(150),l.kI.pattern("[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd1 ]+")]],fechanaci:[this.dateValue,[l.kI.required,q.isOlder,P.isValidYear]],correo:["",[l.kI.required,l.kI.email,l.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],clave:["",[l.kI.required,l.kI.minLength(8)]]})}guardar(){console.log(this.regForm.value),this.serAuth.singup(this.regForm.value).subscribe(r=>{1==r.status?(this.resetForm(),this.showMessage("Usuario Registrado con exito, inicie sesi\xf3n con sus credenciales","success"),this.router.navigateByUrl("/login",{replaceUrl:!0})):this.showMessage(r.message,"danger")})}resetForm(){this.buildForm(),this.regForm.reset(this.regForm.value)}showMessage(a,r){return(0,v.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:a,color:r,duration:2e3})).present()})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(l.qu),e.Y36(U.e),e.Y36(o.yF),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-singup"]],decls:61,vars:18,consts:[[3,"fullscreen"],["vertical","top","horizontal","start","slot","fixed"],["size","small","color","ocean","routerLink","/login"],["size","large","name","arrow-back"],[1,"ion-justify-content-center"],["size-lg","4","size-md","6","size-sm","12"],[1,"reg-container"],[1,"registro","ion-text-end"],["routerLink","/login"],[1,"title"],[1,"form-reg",3,"formGroup","ngSubmit"],[1,"ion-margin-bottom",2,"width","100%"],[1,"material-textfield"],["placeholder","Nombre","type","text","formControlName","nombre"],[1,"text-start","text-danger"],[4,"ngIf"],["placeholder","Apellidos","type","text","formControlName","apellido"],["type","date","formControlName","fechanaci","max","9999-12-31"],["type","email","placeholder","Correo electr\xf3nico","formControlName","correo"],[1,"text-danger","text-start"],["type","password","placeholder","Contrase\xf1a","formControlName","clave"],["type","submit","color","success",1,"btn-form",3,"disabled"],[1,"error"]],template:function(a,r){if(1&a&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-fab",1),e.TgZ(2,"ion-fab-button",2),e._UZ(3,"ion-icon",3),e.qZA(),e.qZA(),e.TgZ(4,"ion-grid"),e.TgZ(5,"ion-row",4),e.TgZ(6,"ion-col",5),e.TgZ(7,"div",6),e.TgZ(8,"div",7),e.TgZ(9,"a",8),e._uU(10,"Iniciar Sesi\xf3n"),e.qZA(),e.qZA(),e.TgZ(11,"h1",9),e._uU(12,"Registro"),e.qZA(),e.TgZ(13,"form",10),e.NdJ("ngSubmit",function(){return r.guardar()}),e.TgZ(14,"div",11),e.TgZ(15,"div",12),e._UZ(16,"input",13),e.TgZ(17,"label"),e._uU(18,"Nombres"),e.qZA(),e.qZA(),e.TgZ(19,"div",14),e.YNc(20,b,2,0,"small",15),e.YNc(21,w,2,0,"small",15),e.YNc(22,S,2,0,"small",15),e.YNc(23,I,2,0,"small",15),e.qZA(),e.qZA(),e.TgZ(24,"div",11),e.TgZ(25,"div",12),e._UZ(26,"input",16),e.TgZ(27,"label"),e._uU(28,"Apellidos"),e.qZA(),e.qZA(),e.TgZ(29,"div",14),e.YNc(30,O,2,0,"small",15),e.YNc(31,Y,2,0,"small",15),e.YNc(32,M,2,0,"small",15),e.YNc(33,N,2,0,"small",15),e.qZA(),e.qZA(),e.TgZ(34,"div",11),e.TgZ(35,"div",12),e._UZ(36,"input",17),e.TgZ(37,"label"),e._uU(38,"Fecha de Nacimiento"),e.qZA(),e.qZA(),e.TgZ(39,"div",14),e.YNc(40,J,2,0,"small",15),e.YNc(41,k,2,0,"small",15),e.YNc(42,z,2,0,"small",15),e.qZA(),e.qZA(),e.TgZ(43,"div",11),e.TgZ(44,"div",12),e._UZ(45,"input",18),e.TgZ(46,"label"),e._uU(47,"Correo electr\xf3nico"),e.qZA(),e.qZA(),e.TgZ(48,"div",19),e.YNc(49,Q,3,0,"small",15),e.YNc(50,D,3,0,"small",15),e.qZA(),e.qZA(),e.TgZ(51,"div",11),e.TgZ(52,"div",12),e._UZ(53,"input",20),e.TgZ(54,"label"),e._uU(55,"Contrase\xf1a"),e.qZA(),e.qZA(),e.TgZ(56,"div",14),e.YNc(57,V,2,0,"small",15),e.YNc(58,L,2,0,"small",15),e.qZA(),e.qZA(),e.TgZ(59,"ion-button",21),e._uU(60,"Registrarme"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a){let s,g,c,u,p,h,d,f,x,_,y,T,C,F,A;e.Q6J("fullscreen",!0),e.xp6(13),e.Q6J("formGroup",r.regForm),e.xp6(7),e.Q6J("ngIf",(null==(s=r.regForm.get("nombre"))?null:s.hasError("required"))&&r.regForm.get("nombre").touched),e.xp6(1),e.Q6J("ngIf",null==(g=r.regForm.get("nombre"))?null:g.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(c=r.regForm.get("nombre"))?null:c.hasError("maxlength")),e.xp6(1),e.Q6J("ngIf",null==(u=r.regForm.get("nombre"))?null:u.hasError("pattern")),e.xp6(7),e.Q6J("ngIf",(null==(p=r.regForm.get("apellido"))?null:p.hasError("required"))&&r.regForm.get("apellido").touched),e.xp6(1),e.Q6J("ngIf",null==(h=r.regForm.get("apellido"))?null:h.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(d=r.regForm.get("apellido"))?null:d.hasError("maxlength")),e.xp6(1),e.Q6J("ngIf",null==(f=r.regForm.get("apellido"))?null:f.hasError("pattern")),e.xp6(7),e.Q6J("ngIf",(null==(x=r.regForm.get("fechanaci"))?null:x.hasError("required"))&&r.regForm.get("fechanaci").touched),e.xp6(1),e.Q6J("ngIf",null==(_=r.regForm.get("fechanaci"))?null:_.hasError("isOlder")),e.xp6(1),e.Q6J("ngIf",null==(y=r.regForm.get("fechanaci"))?null:y.hasError("isValidYear")),e.xp6(7),e.Q6J("ngIf",(null==(T=r.regForm.get("correo"))?null:T.hasError("required"))&&r.regForm.get("correo").touched),e.xp6(1),e.Q6J("ngIf",(null==(C=r.regForm.get("correo"))?null:C.hasError("email"))||(null==(C=r.regForm.get("correo"))?null:C.hasError("pattern"))),e.xp6(7),e.Q6J("ngIf",(null==(F=r.regForm.get("clave"))?null:F.hasError("required"))&&r.regForm.get("clave").touched),e.xp6(1),e.Q6J("ngIf",null==(A=r.regForm.get("clave"))?null:A.hasError("minlength")),e.xp6(1),e.Q6J("disabled",!r.regForm.valid)}},directives:[o.W2,o.IJ,o.W4,o.YI,m.rH,o.gu,o.jY,o.Nd,o.wI,m.yS,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,E.O5,o.YG],styles:["@import\"https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap\";*[_ngcontent-%COMP%]{font-family:Dosis,sans-serif}ion-content[_ngcontent-%COMP%]{--background: none;background-color:#fff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23FFFFFF' stroke-width='0.2' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFC148'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFC148'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(320 1000 750) scale(20.1) translate(-950.25 -712.69)'%3E%3Cg fill='%23FFC148'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover}.reg-container[_ngcontent-%COMP%]{width:100%;height:100vh;padding:3px;display:flex;justify-content:center;align-items:center;flex-direction:column}.form-reg[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:center;flex-direction:column;align-items:center;text-align:center}.form-reg[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%;border-radius:10px;border:1px solid var(--ion-color-dark)}.title[_ngcontent-%COMP%]{text-transform:capitalize;font-size:2.1rem;font-weight:600;letter-spacing:1px;padding-bottom:15px}.span[_ngcontent-%COMP%]{color:var(--ion-color-ocean);font-weight:600;cursor:pointer}.span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.registro[_ngcontent-%COMP%]{width:100%;font-size:1.15em;font-weight:700;letter-spacing:1px;text-align:right}.registro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-color-rose);text-decoration:none;cursor:pointer}.btn-form[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:2px}@media screen and (max-width: 650px){.form-reg[_ngcontent-%COMP%]{width:95%}}.material-textfield[_ngcontent-%COMP%]{position:relative;width:100%}label[_ngcontent-%COMP%]{position:absolute;font-size:1.1rem;letter-spacing:1px;left:0;top:50%;transform:translateY(-50%);background-color:#fff;color:gray;padding:0 .3rem;margin:0 .5rem;transition:.1s ease-out;transform-origin:left top;pointer-events:none}input[_ngcontent-%COMP%]{width:100%;font-size:1.1rem;font-weight:600;letter-spacing:1px;outline:none;border:1px solid gray;border-radius:5px;padding:1rem .7rem;color:#000;transition:.1s ease-out}input[_ngcontent-%COMP%]:focus{border-color:var(--ion-color-ocean)}input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{color:var(--ion-color-ocean);top:0;transform:translateY(-50%) scale(.9)}input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:0;transform:translateY(-50%) scale(.9)}"]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(j)],m.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[E.uU],imports:[[E.ez,l.u5,o.Pc,l.UX,B]]}),t})()}}]);
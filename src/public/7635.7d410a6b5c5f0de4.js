"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7635],{7635:(Me,w,c)=>{c.r(w),c.d(w,{QuestionnairesPageModule:()=>Ce});var O=c(8593),A=c(5415),g=c(9808),l=c(4182),a=c(2974),J=c(4546),e=c(2096);let N=(()=>{class o{canDeactivate(t,i,n,s){return!t.onExit||t.onExit()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var M=c(9019),m=c(1e3),T=c(3716);function Y(o,r){if(1&o&&(e.TgZ(0,"div",13),e._UZ(1,"ion-img",14),e.qZA()),2&o){const t=e.oxw().$implicit,i=e.oxw();e.xp6(1),e.Q6J("src",i.url+t.img)}}function E(o,r){if(1&o&&(e.TgZ(0,"div"),e.TgZ(1,"ion-item",15),e._UZ(2,"ion-icon",16),e.TgZ(3,"p",17),e._uU(4),e.qZA(),e.qZA(),e.qZA()),2&o){const t=r.$implicit;e.xp6(2),e.Q6J("name",1==t.valor?"checkmark-circle":"close-circle")("color",1==t.valor?"lime":"rose"),e.xp6(2),e.Oqu(t.descripcion)}}function D(o,r){if(1&o&&(e.TgZ(0,"div",7),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e.TgZ(3,"h5"),e.TgZ(4,"strong"),e._uU(5),e.qZA(),e.qZA(),e._UZ(6,"hr"),e.qZA(),e.YNc(7,Y,2,1,"div",11),e.TgZ(8,"label"),e.TgZ(9,"strong"),e._uU(10,"Pregunta: "),e.qZA(),e._uU(11),e.qZA(),e._UZ(12,"br"),e.YNc(13,E,5,3,"div",12),e.qZA(),e.qZA()),2&o){const t=r.$implicit,i=r.index;e.xp6(5),e.hij("Pregunta ",i+1,""),e.xp6(2),e.Q6J("ngIf",""!=t.img),e.xp6(4),e.Oqu(t.titulo),e.xp6(2),e.Q6J("ngForOf",t.respuestas)}}let G=(()=>{class o{constructor(t,i){this.aRoute=t,this.serQuizz=i,this.preguntas=[],this.url=M.N.serverImages,this.id=this.aRoute.snapshot.paramMap.get("id")}ngOnInit(){null!=this.id&&this.serQuizz.getCuestionario(parseInt(this.id)).subscribe(t=>{this.titulo=t.titulo,this.descripcion=t.descripcion,this.codigo=t.codigo,this.fecha_disp=t.fecha_disp,this.num_preguntas=t.num_preguntas,this.preguntas=t.preguntas})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.gz),e.Y36(T.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-quizz"]],decls:41,vars:9,consts:[[1,"ion-padding"],["vertical","top","horizontal","start","slot","fixed"],["size","small","color","ocean","routerLink","/admin/questionnaires"],["size","large","name","arrow-back"],[1,"container-fluid"],[1,"row"],[1,"col-lg-6","offset-lg-3"],[1,"card","mb-3"],[1,"card-body"],[1,"text-center"],["class","card mb-3",4,"ngFor","ngForOf"],["class","imagen text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"imagen","text-center"],[3,"src"],["lines","full"],["slot","start",3,"name","color"],[1,"ion-text-justify"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-fab",1),e.TgZ(2,"ion-fab-button",2),e._UZ(3,"ion-icon",3),e.qZA(),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"div",5),e.TgZ(10,"div",9),e.TgZ(11,"h5"),e.TgZ(12,"strong"),e._uU(13,"Datos del Cuestionario"),e.qZA(),e.qZA(),e._UZ(14,"hr"),e.qZA(),e.qZA(),e.TgZ(15,"label"),e.TgZ(16,"strong"),e._uU(17,"C\xf3digo: "),e.qZA(),e._uU(18),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"label"),e.TgZ(21,"strong"),e._uU(22,"T\xedtulo: "),e.qZA(),e._uU(23),e.qZA(),e._UZ(24,"br"),e.TgZ(25,"label"),e.TgZ(26,"strong"),e._uU(27,"Descripci\xf3n: "),e.qZA(),e._uU(28),e.qZA(),e._UZ(29,"br"),e.TgZ(30,"label"),e.TgZ(31,"strong"),e._uU(32,"Fecha Disponible: "),e.qZA(),e._uU(33),e.ALo(34,"date"),e.qZA(),e._UZ(35,"br"),e.TgZ(36,"label"),e.TgZ(37,"strong"),e._uU(38,"Cantidad de Preguntas: "),e.qZA(),e._uU(39),e.qZA(),e.qZA(),e.qZA(),e.YNc(40,D,14,4,"div",10),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(18),e.Oqu(i.codigo),e.xp6(5),e.Oqu(i.titulo),e.xp6(5),e.Oqu(i.descripcion),e.xp6(5),e.Oqu(e.xi3(34,6,i.fecha_disp,"dd/MM/yyyy")),e.xp6(6),e.Oqu(i.num_preguntas),e.xp6(1),e.Q6J("ngForOf",i.preguntas))},directives:[a.W2,a.IJ,a.W4,a.YI,m.rH,a.gu,g.sg,g.O5,a.Xz,a.Ie],pipes:[g.uU],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.imagen[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.imagen[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{min-width:100px;width:150px}']}),o})();var Z=c(655);function R(o){return function(r){const t=r.value;if(t){const n=t.name.replace(/^.*[\\\/]/,"").split(".")[1].toUpperCase();let s=!1;for(let u=0;u<o.length;u++)o[u].toUpperCase()===n.toUpperCase()&&(s=!0);return 1==s?null:{requiredFileType:!0}}return null}}const V=["myInput"];function H(o,r){1&o&&(e.TgZ(0,"div",35),e._uU(1," POR FAVOR INGRESE TODOS LOS CAMPOS "),e.qZA())}function $(o,r){1&o&&(e.TgZ(0,"small"),e._uU(1,"* La Pregunta es requerida"),e.qZA())}function B(o,r){if(1&o&&(e.TgZ(0,"div",36),e.YNc(1,$,2,0,"small",34),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.pregunta?null:t.pregunta.hasError("required"))}}function X(o,r){1&o&&(e.TgZ(0,"div",36),e.TgZ(1,"small"),e._uU(2,"Proporcione una imagen con extensi\xf3n jpg o png"),e.qZA(),e.qZA())}function W(o,r){1&o&&(e.TgZ(0,"small"),e._uU(1,"* La Respuesta 1 es requerida"),e.qZA())}function K(o,r){if(1&o&&(e.TgZ(0,"div",36),e.YNc(1,W,2,0,"small",34),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.res1Titulo?null:t.res1Titulo.hasError("required"))}}function ee(o,r){1&o&&(e.TgZ(0,"small"),e._uU(1,"* La Respuesta 2 es requerida"),e.qZA())}function te(o,r){if(1&o&&(e.TgZ(0,"div",36),e.YNc(1,ee,2,0,"small",34),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.res2Titulo?null:t.res2Titulo.hasError("required"))}}function ie(o,r){if(1&o&&(e.TgZ(0,"div",46),e._UZ(1,"ion-img",47),e.qZA()),2&o){const t=e.oxw().$implicit,i=e.oxw();e.xp6(1),e.Q6J("src",i.url+t.img)}}function oe(o,r){if(1&o&&(e.TgZ(0,"ion-item",41),e.TgZ(1,"label"),e._uU(2),e.qZA(),e._UZ(3,"ion-checkbox",48),e.qZA()),2&o){const t=r.$implicit;e.xp6(2),e.Oqu(t.descripcion),e.xp6(1),e.Q6J("checked",t.valor)}}function ne(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",32),e.TgZ(1,"div",5),e.TgZ(2,"div",37),e.TgZ(3,"h2",38),e._uU(4),e.qZA(),e.qZA(),e.YNc(5,ie,2,1,"div",39),e.TgZ(6,"ion-item"),e.TgZ(7,"div",40),e.TgZ(8,"h6"),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"ion-list",41),e.TgZ(11,"ion-list-header"),e.TgZ(12,"ion-label",42),e._uU(13," Respuesta: "),e.qZA(),e.qZA(),e.YNc(14,oe,4,2,"ion-item",43),e.qZA(),e.TgZ(15,"div",2),e.TgZ(16,"div",44),e.TgZ(17,"ion-button",45),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().eliminar(s)}),e._uU(18,"Eliminar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit,i=r.index;e.xp6(4),e.hij(" Pregunta ",i+1," "),e.xp6(1),e.Q6J("ngIf",t.img),e.xp6(4),e.Oqu(t.titulo),e.xp6(5),e.Q6J("ngForOf",t.respuestas)}}function re(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"ion-button",49),e.NdJ("click",function(){return e.CHM(t),e.oxw().finalizar()}),e._uU(2,"Finalizar Cuestionario"),e.qZA(),e.qZA()}}let se=(()=>{class o{constructor(t,i,n,s,u){this.serQuizz=t,this.fb=i,this.alertCtrl=n,this.router=s,this.toast=u,this.listPreguntas=[],this.mostrarError=!1,this.cuestionarioId=0,this.titulo="",this.descripcion="",this.url="http://localhost:4000/images/",this.buildForm()}ngOnInit(){this.obtenerDatosIniciales()}onExit(){return(0,Z.mG)(this,void 0,void 0,function*(){return!this.agregarPregunta.dirty||this.showAlert()})}obtenerDatosIniciales(){this.serQuizz.$getObjectSource.subscribe(t=>{const{cuestionarioId:i,titulo:n,descripcion:s,fecha_disp:u}=t;this.cuestionarioId=i,this.titulo=n,this.descripcion=s,this.fecha_disp=u})}buildForm(){this.agregarPregunta=this.fb.group({pregunta:["",l.kI.required],imagen:["",R(["jpg","png"])],respuesta1:this.fb.group({titulo:["",l.kI.required],esCorrecta:[!1,l.kI.required]}),respuesta2:this.fb.group({titulo:["",l.kI.required],esCorrecta:[!1,l.kI.required]}),respuesta3:this.fb.group({titulo:"",esCorrecta:!1}),respuesta4:this.fb.group({titulo:"",esCorrecta:!1})})}get pregunta(){return this.agregarPregunta.get("pregunta")}get imagen(){return this.agregarPregunta.get("imagen")}get res1Titulo(){return this.agregarPregunta.get("respuesta1.titulo")}get res2Titulo(){return this.agregarPregunta.get("respuesta2.titulo")}agregarPreg(){var t,i,n,s,u,d,p,f,h,_,C,b,x,y,Q,U,z,F;if(this.agregarPregunta.invalid||this.todasIncorrectas())return void this.error();let v=[];const be=null===(i=null===(t=this.agregarPregunta.get("respuesta1"))||void 0===t?void 0:t.get("titulo"))||void 0===i?void 0:i.value,xe=null===(s=null===(n=this.agregarPregunta.get("respuesta1"))||void 0===n?void 0:n.get("esCorrecta"))||void 0===s?void 0:s.value;v.push({descripcion:be,valor:xe});const Qe=null===(d=null===(u=this.agregarPregunta.get("respuesta2"))||void 0===u?void 0:u.get("titulo"))||void 0===d?void 0:d.value,Ue=null===(f=null===(p=this.agregarPregunta.get("respuesta2"))||void 0===p?void 0:p.get("esCorrecta"))||void 0===f?void 0:f.value;v.push({descripcion:Qe,valor:Ue});const q=null===(_=null===(h=this.agregarPregunta.get("respuesta3"))||void 0===h?void 0:h.get("titulo"))||void 0===_?void 0:_.value,Pe={descripcion:q,valor:null===(b=null===(C=this.agregarPregunta.get("respuesta3"))||void 0===C?void 0:C.get("esCorrecta"))||void 0===b?void 0:b.value};""!=q&&null!=q&&(console.log(q),v.push(Pe));const P=null===(y=null===(x=this.agregarPregunta.get("respuesta4"))||void 0===x?void 0:x.get("titulo"))||void 0===y?void 0:y.value,we=null===(U=null===(Q=this.agregarPregunta.get("respuesta4"))||void 0===Q?void 0:Q.get("esCorrecta"))||void 0===U?void 0:U.value;""!=P&&null!=P&&v.push({descripcion:P,valor:we});const ke=null===(z=this.pregunta)||void 0===z?void 0:z.value,Oe=null===(F=this.imagen)||void 0===F?void 0:F.value;this.serQuizz.crearPreguntas({cuestionarioId:this.cuestionarioId,titulo:ke,img:Oe,respuestas:v}).subscribe(Ne=>{console.log(Ne),this.reset(),this.myInputVariable.nativeElement.value="",this.cargarPreguntas()})}imageUpload(t){var i;if(t.target.files.length>0){const n=t.target.files[0];null===(i=this.imagen)||void 0===i||i.setValue(n)}}reset(){this.buildForm(),this.agregarPregunta.reset(this.agregarPregunta.value)}todasIncorrectas(){var t,i;const n=["respuesta1","respuesta2","respuesta3","respuesta4"];for(let s=0;s<n.length;s++)if(1==(null===(i=null===(t=this.agregarPregunta.get(n[s]))||void 0===t?void 0:t.get("esCorrecta"))||void 0===i?void 0:i.value))return!1;return!0}error(){this.mostrarError=!0,setTimeout(()=>{this.mostrarError=!1},4500)}esCorrecta(t){var i;let s="respuesta".concat(t);this.setFalseRespuestas(s);const u=this.obtenerEstadoRespuesta(s);null===(i=this.agregarPregunta.get(s))||void 0===i||i.patchValue({esCorrecta:!u})}obtenerEstadoRespuesta(t){var i,n;return null===(n=null===(i=this.agregarPregunta.get(t))||void 0===i?void 0:i.get("esCorrecta"))||void 0===n?void 0:n.value}setFalseRespuestas(t){var i;const n=["respuesta1","respuesta2","respuesta3","respuesta4"];for(let s=0;s<n.length;s++)n[s]!==t&&(null===(i=this.agregarPregunta.get(n[s]))||void 0===i||i.patchValue({esCorrecta:!1}))}cargarPreguntas(){this.serQuizz.getPregResp(this.cuestionarioId).subscribe(t=>{this.listPreguntas=t})}finalizar(){const t={codigo:this.generarCodigo(),num_preguntas:this.listPreguntas.length,estado:"A",accion:"complete"};this.serQuizz.actualizarEstado(this.cuestionarioId,t).subscribe(i=>{1==i.status&&(this.showMessage("Cuestinario Creado","success"),this.router.navigateByUrl("/admin/questionnaires"))})}generarCodigo(){return((o=21)=>{let r="",t=crypto.getRandomValues(new Uint8Array(o));for(;o--;){let i=63&t[o];r+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return r})(6).toUpperCase()}showMessage(t,i){return(0,Z.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:t,color:i,duration:3e3})).present()})}eliminar(t){return(0,Z.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({header:"!Advertencia\xa1",cssClass:"app-alert",message:'<ion-icon name="alert-circle-outline"></ion-icon><br> \xbfDesea <strong>eliminar</strong> la pregunta seleccionada?',buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Confirmar",role:"exit",handler:()=>{this.serQuizz.deletePregunta(t.preguntaId).subscribe(n=>{1==n.status&&(this.showMessage(n.message,"success"),this.cargarPreguntas())})}}]})).present()})}showAlert(){return(0,Z.mG)(this,void 0,void 0,function*(){const t=yield this.alertCtrl.create({header:"!Advertencia\xa1",cssClass:"app-alert",message:"\xbfEsta seguro de <strong>salir sin guardar</strong> los datos, el cuestionario no se crear\xe1?",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Confirmar",role:"exit",handler:()=>{}}]});yield t.present();const{role:i}=yield t.onDidDismiss();if(i)return"cancel"!=i})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.J),e.Y36(l.qu),e.Y36(a.Br),e.Y36(m.F0),e.Y36(a.yF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-questions"]],viewQuery:function(t,i){if(1&t&&e.Gf(V,5),2&t){let n;e.iGM(n=e.CRH())&&(i.myInputVariable=n.first)}},decls:73,vars:14,consts:[[1,"ion-padding"],[1,"container-fluid"],[1,"row"],[1,"col-lg-6","mb-3"],[1,"card"],[1,"card-body"],[1,"row","mb-3"],[1,"text-center"],["class","alert alert-danger text-center","role","alert",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-12"],["rows","3","formControlName","pregunta","placeholder","Ingrese la pregunta",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"input-group","custom-file-button"],["for","inputGroupFile",1,"input-group-text"],["name","imagen","type","file","id","inputGroupFile",1,"form-control",3,"change"],["myInput",""],[1,"col-12","mb-3"],["formGroupName","respuesta1",1,"input-group"],[1,"input-group-text"],["formControlName","esCorrecta","type","checkbox","value","","aria-label","Checkbox for following text input",1,"form-check-input","mt-0",3,"click"],["formControlName","titulo","type","text","aria-label","Text input with checkbox","placeholder","Agregar respuesta 1",1,"form-control"],["formGroupName","respuesta2",1,"input-group"],["formControlName","titulo","type","text","aria-label","Text input with checkbox","placeholder","Agregar respuesta 2",1,"form-control"],["formGroupName","respuesta3",1,"input-group","mb-3"],["formControlName","titulo","type","text","aria-label","Text input with checkbox","placeholder","Agregar respuesta 3 (opcional)",1,"form-control"],["formGroupName","respuesta4",1,"input-group","mb-3"],["formControlName","titulo","type","text","aria-label","Text input with checkbox","placeholder","Agregar respuesta 4 (opcional)",1,"form-control"],[1,"col-12","text-center"],["type","submit","expand","block","color","success"],[1,"col-lg-6"],[1,"card","mb-3"],["class","card mb-3",4,"ngFor","ngForOf"],[4,"ngIf"],["role","alert",1,"alert","alert-danger","text-center"],[1,"text-danger"],[1,"ion-text-center"],[1,"titulo-pg"],["class","imagen text-center",4,"ngIf"],[1,"pregunta","ion-text-justify"],["lines","none"],[1,"titulo-resp"],["lines","none",4,"ngFor","ngForOf"],[1,"col"],["expand","block","fill","outline","color","rose",3,"click"],[1,"imagen","text-center"],[2,"width","250px","height","250px",3,"src"],["color","lime","slot","start","mode","ios","disabled","true",3,"checked"],["color","lime","expand","block","fill","outline",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"h4"),e._uU(9,"Preguntas del cuestionario"),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,H,2,0,"div",8),e.TgZ(11,"form",9),e.NdJ("ngSubmit",function(){return i.agregarPreg()}),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e._UZ(14,"textarea",12),e.qZA(),e.YNc(15,B,2,1,"div",13),e.qZA(),e.TgZ(16,"div",10),e.TgZ(17,"div",11),e.TgZ(18,"div",14),e.TgZ(19,"label",15),e._uU(20,"Recurso Visual"),e.qZA(),e.TgZ(21,"input",16,17),e.NdJ("change",function(s){return i.imageUpload(s)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(23,X,3,0,"div",13),e.qZA(),e.TgZ(24,"div",10),e.TgZ(25,"div",18),e.TgZ(26,"div",19),e.TgZ(27,"div",20),e.TgZ(28,"input",21),e.NdJ("click",function(){return i.esCorrecta("1")}),e.qZA(),e.qZA(),e._UZ(29,"input",22),e.qZA(),e.YNc(30,K,2,1,"div",13),e.qZA(),e.TgZ(31,"div",18),e.TgZ(32,"div",23),e.TgZ(33,"div",20),e.TgZ(34,"input",21),e.NdJ("click",function(){return i.esCorrecta("2")}),e.qZA(),e.qZA(),e._UZ(35,"input",24),e.qZA(),e.YNc(36,te,2,1,"div",13),e.qZA(),e.TgZ(37,"div",11),e.TgZ(38,"div",25),e.TgZ(39,"div",20),e.TgZ(40,"input",21),e.NdJ("click",function(){return i.esCorrecta("3")}),e.qZA(),e.qZA(),e._UZ(41,"input",26),e.qZA(),e.qZA(),e.TgZ(42,"div",11),e.TgZ(43,"div",27),e.TgZ(44,"div",20),e.TgZ(45,"input",21),e.NdJ("click",function(){return i.esCorrecta("4")}),e.qZA(),e.qZA(),e._UZ(46,"input",28),e.qZA(),e.qZA(),e.qZA(),e.TgZ(47,"div",10),e.TgZ(48,"div",29),e.TgZ(49,"ion-button",30),e._uU(50," AGREGAR PREGUNTA "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",31),e.TgZ(52,"div",32),e.TgZ(53,"div",5),e.TgZ(54,"div",7),e.TgZ(55,"h5"),e._uU(56),e.qZA(),e.qZA(),e.TgZ(57,"label"),e._uU(58,"Descripci\xf3n"),e.qZA(),e._UZ(59,"br"),e.TgZ(60,"label"),e._uU(61),e.qZA(),e._UZ(62,"br"),e._UZ(63,"br"),e.TgZ(64,"label"),e._uU(65,"Fecha L\xedmite"),e.qZA(),e._UZ(66,"br"),e.TgZ(67,"label"),e._uU(68),e.ALo(69,"date"),e.qZA(),e._UZ(70,"br"),e.qZA(),e.qZA(),e.YNc(71,ne,19,4,"div",33),e.YNc(72,re,3,0,"div",34),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Q6J("ngIf",i.mostrarError),e.xp6(1),e.Q6J("formGroup",i.agregarPregunta),e.xp6(4),e.Q6J("ngIf",null==i.pregunta?null:i.pregunta.touched),e.xp6(8),e.Q6J("ngIf",null==i.imagen?null:i.imagen.hasError("requiredFileType")),e.xp6(7),e.Q6J("ngIf",null==i.res1Titulo?null:i.res1Titulo.touched),e.xp6(6),e.Q6J("ngIf",null==i.res2Titulo?null:i.res2Titulo.touched),e.xp6(20),e.Oqu(i.titulo),e.xp6(5),e.Oqu(i.descripcion),e.xp6(7),e.Oqu(e.xi3(69,11,i.fecha_disp,"dd-MM-yyyy")),e.xp6(3),e.Q6J("ngForOf",i.listPreguntas),e.xp6(1),e.Q6J("ngIf",i.listPreguntas.length>3))},directives:[a.W2,g.O5,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.x0,l.Wl,a.YG,g.sg,a.Ie,a.q_,a.yh,a.Q$,a.Xz,a.nz,a.w],pipes:[g.uU],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*{font-family:Poppins,sans-serif}.custom-file-button input[type=file]{margin-left:-2px!important}.custom-file-button input[type=file]::-webkit-file-upload-button{display:none}.custom-file-button input[type=file]::file-selector-button{display:none}.custom-file-button:hover label{background-color:#dde0e3;cursor:pointer}.fondo-item{background-color:#000!important;border-radius:20px;height:120px}.tituloSegundosPuntos{font-size:1.1em;font-weight:800;color:#fff;margin-bottom:0}.segPuntos{font-size:20px;font-weight:800;color:#fff}.sumaResta{color:#fff;cursor:pointer;font-size:24px;background-color:#273346;padding:7px;border-radius:15px;margin-left:3px}.form-range{padding:0 20px}input[type=range]::-webkit-slider-thumb{background:white;font-size:1rem}\n'],encapsulation:2}),o})();var I=c(7857);function ae(o,r){1&o&&(e.TgZ(0,"div",22),e.TgZ(1,"span"),e._uU(2," * El campo titulo "),e.TgZ(3,"strong"),e._uU(4,"es requerido"),e.qZA(),e.qZA(),e.qZA())}function ue(o,r){1&o&&(e.TgZ(0,"div",22),e.TgZ(1,"span"),e._uU(2," * El campo de descripci\xf3n "),e.TgZ(3,"strong"),e._uU(4,"es requerido"),e.qZA(),e.qZA(),e.qZA())}function le(o,r){1&o&&(e.TgZ(0,"div",22),e.TgZ(1,"span"),e._uU(2," * El campo de fecha "),e.TgZ(3,"strong"),e._uU(4,"es requerido"),e.qZA(),e.qZA(),e.qZA())}function ce(o,r){if(1&o&&(e.TgZ(0,"ion-note",23),e._UZ(1,"ion-icon",24),e._uU(2),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.editMessage)}}function ge(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().siguiente()}),e._uU(1," SIGUIENTE "),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",!t.cuestionarioForm.valid)}}function de(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().siguiente()}),e._uU(1," GUARDAR "),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",!t.cuestionarioForm.valid)}}let k=(()=>{class o{constructor(t,i,n,s,u,d,p){this.fb=t,this.serQuizz=i,this.serStorage=n,this.toast=s,this.router=u,this.datePipe=d,this.aRoute=p,this.editMessage="",this.buildForm(),this.id=this.aRoute.snapshot.paramMap.get("id")}ngOnInit(){this.esEditar()}buildForm(){const t=new Date((new Date).toLocaleString("en-US",{timeZone:"America/Guayaquil"}));t.setDate(t.getDate()+3);let i=this.datePipe.transform(t,"yyyy-MM-dd");this.cuestionarioForm=this.fb.group({titulo:["",l.kI.required],descripcion:["",l.kI.required],fecha_disp:[i,l.kI.required]})}get tituloField(){return this.cuestionarioForm.get("titulo")}get descripcionField(){return this.cuestionarioForm.get("descripcion")}get fechaDispField(){return this.cuestionarioForm.get("fecha_disp")}esEditar(){null!=this.id&&(this.editMessage="Solo Puede actualizar los datos del cuestionario m\xe1s no su contenido",this.serQuizz.getCuestionario(parseInt(this.id)).subscribe(t=>{const{titulo:i,descripcion:n,fecha_disp:s}=t;let u=this.datePipe.transform(s,"yyyy-MM-dd");this.cuestionarioForm.patchValue({titulo:i,descripcion:n,fecha_disp:u})}))}cancelar(){this.router.navigate(["/admin/questionnaires"])}cambiarFecha(){var t;console.log(this.formatearFecha(null===(t=this.fechaDispField)||void 0===t?void 0:t.value))}siguiente(){var t,i,n,s,u,d,p;if(null!=this.id){console.log(new Date(null===(t=this.fechaDispField)||void 0===t?void 0:t.value));const f={titulo:null===(i=this.tituloField)||void 0===i?void 0:i.value,descripcion:null===(n=this.descripcionField)||void 0===n?void 0:n.value,fecha_disp:this.formatearFecha(null===(s=this.fechaDispField)||void 0===s?void 0:s.value),estado:"A",accion:"update"};this.serQuizz.actualizarEstado(parseInt(this.id),f).subscribe(h=>{1==h.status&&(this.showMessage("Cuestinario Actualizado","success"),this.router.navigate(["/admin/questionnaires"]))})}else if(!this.cuestionarioForm.invalid){const{userId:f}=this.serStorage.get("user"),h={userId:f,titulo:null===(u=this.tituloField)||void 0===u?void 0:u.value,fecha_disp:this.formatearFecha(null===(d=this.fechaDispField)||void 0===d?void 0:d.value),descripcion:null===(p=this.descripcionField)||void 0===p?void 0:p.value};this.serQuizz.crearCuestionario(h).subscribe(_=>{this.serQuizz.enviarObject(_)}),this.router.navigate(["/admin/questionnaires/questions"])}}formatearFecha(t){let i=t.split("-"),n=new Date((new Date).toLocaleString("en-US",{timeZone:"America/Guayaquil"}));return n.setFullYear(i[0]),n.setMonth(i[1]-1),n.setDate(i[2]),n.setHours(0),n.setMinutes(0),n.setSeconds(0),console.log(this.datePipe.transform(n,"yyyy-MM-dd HH:mm:ss")),this.datePipe.transform(n,"yyyy-MM-dd HH:mm:ss")}showMessage(t,i){return(0,Z.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:t,color:i,duration:3e3})).present()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(T.J),e.Y36(I.Y),e.Y36(a.yF),e.Y36(m.F0),e.Y36(g.uU),e.Y36(m.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-quizz"]],decls:35,vars:7,consts:[[1,"ion-padding"],[1,"container-fluid"],[1,"row"],[1,"col-lg-6","offset-lg-3"],[1,"card"],[1,"card-body"],[1,"row","mb-3"],[1,"text-center"],[3,"formGroup"],[1,"form-group","mb-3"],["for","titulo",1,"form-label"],["type","text","formControlName","titulo","id","titulo","placeholder","Titulo",1,"form-control"],["class","text-danger",4,"ngIf"],["for","descripcion",1,"form-label"],["rows","3","formControlName","descripcion","id","descripcion","placeholder","Descripci\xf3n",1,"form-control"],["for","fecha_disp",1,"form-label"],["type","date","formControlName","fecha_disp","max","9999-12-31","id","fecha_disp",1,"form-control",3,"change"],["color","warning",4,"ngIf"],[1,"row","mt-3"],[1,"col-lg-6"],["expand","block","color","danger","fill","outline",3,"click"],["type","submit","expand","block","color","success",3,"disabled","click",4,"ngIf"],[1,"text-danger"],["color","warning"],["name","warning-outline",1,"ion-margin-end"],["type","submit","expand","block","color","success",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"h4"),e._uU(9,"Datos del cuestionario"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"form",8),e.TgZ(11,"div",9),e.TgZ(12,"label",10),e._uU(13,"Titulo"),e.qZA(),e._UZ(14,"input",11),e.YNc(15,ae,5,0,"div",12),e.qZA(),e.TgZ(16,"div",9),e.TgZ(17,"label",13),e._uU(18,"Descripci\xf3n"),e.qZA(),e._UZ(19,"textarea",14),e.YNc(20,ue,5,0,"div",12),e.qZA(),e.TgZ(21,"div",9),e.TgZ(22,"label",15),e._uU(23,"Fecha Limite de Resoluci\xf3n"),e.qZA(),e.TgZ(24,"input",16),e.NdJ("change",function(){return i.cambiarFecha()}),e.qZA(),e.YNc(25,le,5,0,"div",12),e.qZA(),e.TgZ(26,"div"),e.YNc(27,ce,3,1,"ion-note",17),e.qZA(),e.TgZ(28,"div",18),e.TgZ(29,"div",19),e.TgZ(30,"ion-button",20),e.NdJ("click",function(){return i.cancelar()}),e._uU(31," CANCELAR "),e.qZA(),e.qZA(),e.TgZ(32,"div",19),e.YNc(33,ge,2,1,"ion-button",21),e.YNc(34,de,2,1,"ion-button",21),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Q6J("formGroup",i.cuestionarioForm),e.xp6(5),e.Q6J("ngIf",(null==i.tituloField?null:i.tituloField.hasError("required"))&&(null==i.tituloField?null:i.tituloField.touched)),e.xp6(5),e.Q6J("ngIf",(null==i.descripcionField?null:i.descripcionField.hasError("required"))&&(null==i.descripcionField?null:i.descripcionField.touched)),e.xp6(5),e.Q6J("ngIf",(null==i.fechaDispField?null:i.fechaDispField.hasError("required"))&&(null==i.fechaDispField?null:i.fechaDispField.touched)),e.xp6(2),e.Q6J("ngIf",i.editMessage.length>0),e.xp6(6),e.Q6J("ngIf",0==i.editMessage.length),e.xp6(1),e.Q6J("ngIf",i.editMessage.length>0))},directives:[a.W2,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,g.O5,a.YG,a.uN,a.gu],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}']}),o})();var pe=c(5529);function me(o,r){1&o&&(e.TgZ(0,"span"),e._uU(1,"---"),e.qZA())}function Ze(o,r){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.codigo)}}const fe=function(o){return["/admin/questionnaires/view",o]};function he(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"th",18),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",5),e._uU(6),e.qZA(),e.TgZ(7,"td",5),e.YNc(8,me,2,0,"span",19),e.YNc(9,Ze,2,1,"span",19),e.qZA(),e.TgZ(10,"td",5),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"td",5),e.TgZ(14,"div",20),e._UZ(15,"ion-icon",21),e.TgZ(16,"ion-icon",22),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().edit(s)}),e.qZA(),e.TgZ(17,"ion-icon",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().confirmBox(s)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit,i=r.index;e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Oqu(t.titulo),e.xp6(2),e.Oqu(t.num_preguntas),e.xp6(2),e.Q6J("ngIf",""==t.codigo),e.xp6(1),e.Q6J("ngIf",""!=t.codigo),e.xp6(2),e.Oqu(e.xi3(12,7,t.fecha_disp,"dd/MM/yyyy")),e.xp6(4),e.Q6J("routerLink",e.VKq(10,fe,t.cuestionarioId))}}let _e=(()=>{class o{constructor(t,i,n,s,u){this.serQuizz=t,this.serStorage=i,this.router=n,this.alertCtrl=s,this.toast=u,this.cuestionarios=[],this.dtOptions={},this.dtTrigger=new pe.xQ}ngOnInit(){this.dtOptions={pagingType:"simple_numbers",pageLength:5,language:{url:"//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"}},this.cargarDatos()}cargarDatos(){const{userId:t}=this.serStorage.get("user");this.serQuizz.getCuestionarios(t).subscribe(i=>{this.cuestionarios=i,console.log(i),this.dtTrigger.next()})}confirmBox(t){return(0,Z.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({header:"!Advertencia\xa1",cssClass:"app-alert",message:`<ion-icon name="alert-circle-outline"></ion-icon><br> \xbfDesea <strong>eliminar</strong> el cuestionario ${t.titulo}?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Confirmar",role:"exit",handler:()=>{this.serQuizz.deleteQuizz(t.cuestionarioId).subscribe(n=>{1==n.status&&(this.dtElement.dtInstance.then(s=>{s.destroy(),this.cargarDatos()}),this.showMessage(n.message,"success"))})}}]})).present()})}edit(t){this.router.navigateByUrl(`admin/questionnaires/quizz/${t.cuestionarioId}`)}showMessage(t,i){return(0,Z.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:t,color:i,duration:3e3})).present()})}recargarDatos(){this.dtElement.dtInstance.then(t=>{t.destroy(),this.cargarDatos()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.J),e.Y36(I.Y),e.Y36(m.F0),e.Y36(a.Br),e.Y36(a.yF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-questionnaires"]],viewQuery:function(t,i){if(1&t&&e.Gf(A.G,5),2&t){let n;e.iGM(n=e.CRH())&&(i.dtElement=n.first)}},decls:34,vars:3,consts:[[1,"container"],[1,"row","mt-3"],[1,"col-lg-10","offset-lg-1"],[1,"row"],[1,"col-md-12","mb-3"],[1,"text-center"],[1,"text-dark","titulo"],["color","lime","fill","outline",1,"float-end",3,"click"],["name","reload"],["color","ocean","routerLink","quizz",1,"float-end"],[1,"table-responsive"],["datatable","",1,"table","table-striped",3,"dtOptions","dtTrigger"],[1,"table-dark"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],[1,"row","ion-margin-top"],["color","warning"],["name","warning-outline",1,"ion-margin-end"],["scope","row",1,"text-end"],[4,"ngIf"],[1,"actions"],["name","eye","color","medium",2,"font-size","20px",3,"routerLink"],["name","create","color","ocean","alt","editar",2,"font-size","20px",3,"click"],["name","trash","color","rose",2,"font-size","20px",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"strong",6),e._uU(7," Listado de Cuestionarios"),e.qZA(),e.TgZ(8,"ion-button",7),e.NdJ("click",function(){return i.recargarDatos()}),e._UZ(9,"ion-icon",8),e.qZA(),e.TgZ(10,"ion-button",9),e._uU(11,"NUEVO"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"table",11),e.TgZ(14,"thead"),e.TgZ(15,"tr",12),e.TgZ(16,"th",13),e._uU(17,"#"),e.qZA(),e.TgZ(18,"th",13),e._uU(19,"Titulo"),e.qZA(),e.TgZ(20,"th",13),e._uU(21,"Cant. Preguntas"),e.qZA(),e.TgZ(22,"th",13),e._uU(23,"C\xf3digo"),e.qZA(),e.TgZ(24,"th",13),e._uU(25,"Disponible Hasta"),e.qZA(),e.TgZ(26,"th",13),e._uU(27,"Acciones"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"tbody"),e.YNc(29,he,18,12,"tr",14),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",15),e.TgZ(31,"ion-note",16),e._UZ(32,"ion-icon",17),e._uU(33,"S\xed no ve los cambios reflejados presione el bot\xf3n actualizar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(13),e.Q6J("dtOptions",i.dtOptions)("dtTrigger",i.dtTrigger),e.xp6(16),e.Q6J("ngForOf",i.cuestionarios))},directives:[a.YG,a.gu,a.YI,m.rH,A.G,g.sg,a.uN,g.O5],pipes:[g.uU],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.titulo[_ngcontent-%COMP%]{font-size:1.33em;letter-spacing:1px}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.actions[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{cursor:pointer}']}),o})();var ve=c(3646),Te=c(4662);const qe=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-questionnaires"]],decls:4,vars:0,consts:[["titulo","Cuestionarios"]],template:function(t,i){1&t&&(e._UZ(0,"app-header",0),e.TgZ(1,"ion-content"),e._UZ(2,"ion-router-outlet"),e.qZA(),e._UZ(3,"app-footer"))},directives:[ve.G,a.W2,a.jP,Te.c],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}']}),o})(),children:[{path:"",component:_e},{path:"view/:id",component:G},{path:"quizz",component:k},{path:"quizz/:id",component:k},{path:"questions",component:se,canDeactivate:[N]}]}];let Ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(qe)],m.Bz]}),o})(),Ce=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.ez,l.u5,a.Pc,J.O,O._,l.UX,A.T,Ae]]}),o})()}}]);
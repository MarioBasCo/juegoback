"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[858],{858:(I,h,i)=>{i.r(h),i.d(h,{GroupsPageModule:()=>O});var v=i(8593),G=i(4546),g=i(9808),c=i(4182),a=i(2974),d=i(655),t=i(2096),Z=i(7857),f=i(1805),p=i(1e3);function A(e,n){1&e&&(t.TgZ(0,"div",16),t.TgZ(1,"span"),t._uU(2," * El campo nombre del grupo "),t.TgZ(3,"strong"),t._uU(4,"es requerido"),t.qZA(),t.qZA(),t.qZA())}let T=(()=>{class e{constructor(o,s,r,u,l,M,_){this.fb=o,this.serStorage=s,this.serGroup=r,this.toast=u,this.alertCtrl=l,this.router=M,this.aRoute=_,this.hasChange=!1,this.id=this.aRoute.snapshot.paramMap.get("id"),this.buildForm()}ngOnInit(){this.esEditar()}get descripcionField(){return this.grupoForm.get("descripcion")}changeFormValueChange(){const o=this.grupoForm.value;this.grupoForm.valueChanges.subscribe(s=>{this.hasChange=Object.keys(o).some(r=>s[r]!=o[r])})}esEditar(){null!=this.id&&this.serGroup.getOne(parseInt(this.id)).subscribe(o=>{1==o.status&&this.grupoForm.patchValue({descripcion:o.data.nombre_grupo})})}buildForm(){this.grupoForm=this.fb.group({descripcion:["",c.kI.required]})}cancelar(){this.router.navigateByUrl("/admin/groups")}guardar(){const{userId:o}=this.serStorage.get("user"),s={userId:o,nombre_grupo:this.descripcionField.value};this.changeFormValueChange(),console.log(this.hasChange),null!=this.id?this.serGroup.editGroup(parseInt(this.id),s).subscribe(r=>{if(console.log(r),1==r.status){let u=this.serGroup.groups.findIndex(l=>l.grupoId==this.id);this.serGroup.groups[u].nombre_grupo=this.descripcionField.value,this.resetForm(),this.router.navigateByUrl("/admin/groups"),this.showMessage(r.message,"success")}}):this.serGroup.createGroup(s).subscribe(r=>{if(console.log(r),1==r.status){this.resetForm();const{data:u}=r;u.estudiantes=0,this.serGroup.groups.push(u),this.router.navigateByUrl("/admin/groups"),this.showMessage(r.message,"success")}})}resetForm(){this.buildForm(),this.grupoForm.reset(this.grupoForm.value)}showMessage(o,s){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:o,color:s,duration:3e3})).present()})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.qu),t.Y36(Z.Y),t.Y36(f.l),t.Y36(a.yF),t.Y36(a.Br),t.Y36(p.F0),t.Y36(p.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-create-group"]],decls:21,vars:3,consts:[[1,"ion-padding"],[1,"container-fluid"],[1,"row"],[1,"col-lg-6","offset-lg-3"],[1,"card"],[1,"card-body"],[1,"row","mb-3"],[1,"text-center"],[3,"formGroup"],[1,"form-group","mb-3"],["type","text","formControlName","descripcion","placeholder","Nombre del grupo",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"row","mt-3"],[1,"col-lg-6"],["type","reset","expand","block","color","danger","fill","outline",3,"click"],["type","submit","expand","block","color","success",3,"disabled","click"],[1,"text-danger"]],template:function(o,s){1&o&&(t.TgZ(0,"ion-content",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"h4"),t._uU(9,"Datos del Grupo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"form",8),t.TgZ(11,"div",9),t._UZ(12,"input",10),t.YNc(13,A,5,0,"div",11),t.qZA(),t.TgZ(14,"div",12),t.TgZ(15,"div",13),t.TgZ(16,"ion-button",14),t.NdJ("click",function(){return s.cancelar()}),t._uU(17," CANCELAR "),t.qZA(),t.qZA(),t.TgZ(18,"div",13),t.TgZ(19,"ion-button",15),t.NdJ("click",function(){return s.guardar()}),t._uU(20," GUARDAR "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("formGroup",s.grupoForm),t.xp6(3),t.Q6J("ngIf",(null==s.descripcionField?null:s.descripcionField.hasError("required"))&&(null==s.descripcionField?null:s.descripcionField.touched)),t.xp6(6),t.Q6J("disabled",!s.grupoForm.valid))},directives:[a.W2,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,g.O5,a.YG],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}']}),e})();var C=i(5529),m=i(5415);const b=function(e){return["/admin/groups/edit-group",e]};function y(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",18),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",5),t._uU(6),t.qZA(),t.TgZ(7,"td",5),t.TgZ(8,"div",19),t._UZ(9,"ion-icon",20),t.TgZ(10,"ion-icon",21),t.NdJ("click",function(){const u=t.CHM(o).$implicit;return t.oxw().confirmBox(u)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=n.$implicit,s=n.index;t.xp6(2),t.Oqu(s+1),t.xp6(2),t.Oqu(o.nombre_grupo),t.xp6(2),t.Oqu(o.estudiantes),t.xp6(3),t.Q6J("routerLink",t.VKq(4,b,o.grupoId))}}let q=(()=>{class e{constructor(o,s,r,u){this.serGrupos=o,this.serStorage=s,this.toast=r,this.alertCtrl=u,this.grupos=[],this.dtOptions={},this.dtTrigger=new C.xQ}ngOnInit(){this.dtOptions={pagingType:"simple_numbers",pageLength:5,language:{url:"//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"}},this.cargarDatos()}cargarDatos(){this.grupos=[];const{userId:o}=this.serStorage.get("user");this.subscription=this.serGrupos.getGrupos(o).subscribe(s=>{this.serGrupos.groups=s,this.grupos=this.serGrupos.groups,this.dtTrigger.next()})}identify(o,s){return s.grupoId}ngOnDestroy(){this.subscription.unsubscribe(),this.dtTrigger.unsubscribe()}confirmBox(o){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({header:"!Advertencia\xa1",cssClass:"app-alert",message:`<ion-icon name="alert-circle-outline"></ion-icon><br> \xbfDesea <strong>eliminar</strong> el grupo ${o.nombre_grupo}?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Confirmar",role:"exit",handler:()=>{this.serGrupos.deleteGroup(o.grupoId).subscribe(r=>{1==r.status&&(this.serGrupos.eliminarGrupo(o),this.dtElement.dtInstance.then(u=>{u.destroy(),this.cargarDatos()}),this.showMessage(r.message,"success"))})}}]})).present()})}showMessage(o,s){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:o,color:s,duration:3e3})).present()})}recargarDatos(){this.dtElement.dtInstance.then(o=>{o.destroy(),this.cargarDatos()})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.l),t.Y36(Z.Y),t.Y36(a.yF),t.Y36(a.Br))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-groups"]],viewQuery:function(o,s){if(1&o&&t.Gf(m.G,5),2&o){let r;t.iGM(r=t.CRH())&&(s.dtElement=r.first)}},decls:30,vars:4,consts:[[1,"container"],[1,"row","mt-3"],[1,"col-lg-10","offset-lg-1"],[1,"row"],[1,"col-md-12","mb-3"],[1,"text-center"],[1,"text-dark","titulo"],["color","lime","fill","outline",1,"float-end",3,"click"],["name","reload"],["color","ocean","routerLink","create-group",1,"float-end"],[1,"table-responsive"],["datatable","",1,"table","table-striped",3,"dtOptions","dtTrigger"],[1,"table-dark"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","ion-margin-top"],["color","warning"],["name","warning-outline",1,"ion-margin-end"],["scope","row",1,"text-end"],[1,"actions"],["name","create","color","ocean",2,"font-size","20px",3,"routerLink"],["name","trash","color","rose",2,"font-size","20px",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"strong",6),t._uU(7," Listado de Grupos"),t.qZA(),t.TgZ(8,"ion-button",7),t.NdJ("click",function(){return s.recargarDatos()}),t._UZ(9,"ion-icon",8),t.qZA(),t.TgZ(10,"ion-button",9),t._uU(11,"NUEVO"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"table",11),t.TgZ(14,"thead"),t.TgZ(15,"tr",12),t.TgZ(16,"th",13),t._uU(17,"#"),t.qZA(),t.TgZ(18,"th",13),t._uU(19,"Nombre del Grupo"),t.qZA(),t.TgZ(20,"th",13),t._uU(21,"Cant. Estudiantes"),t.qZA(),t.TgZ(22,"th",13),t._uU(23,"Acciones"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"tbody"),t.YNc(25,y,11,6,"tr",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",15),t.TgZ(27,"ion-note",16),t._UZ(28,"ion-icon",17),t._uU(29,"S\xed no ve los cambios reflejados presione el bot\xf3n actualizar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(13),t.Q6J("dtOptions",s.dtOptions)("dtTrigger",s.dtTrigger),t.xp6(12),t.Q6J("ngForOf",s.grupos)("ngForTrackBy",s.identify))},directives:[a.YG,a.gu,a.YI,p.rH,m.G,g.sg,a.uN],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.titulo[_ngcontent-%COMP%]{font-size:1.33em;letter-spacing:1px}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.actions[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{cursor:pointer}']}),e})();var F=i(3646),U=i(4662);const x=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-groups"]],decls:4,vars:0,consts:[["titulo","Grupos"],[1,"ion-padding"]],template:function(o,s){1&o&&(t._UZ(0,"app-header",0),t.TgZ(1,"ion-content",1),t._UZ(2,"ion-router-outlet"),t.qZA(),t._UZ(3,"app-footer"))},directives:[F.G,a.W2,a.jP,U.c],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}']}),e})(),children:[{path:"",component:q},{path:"create-group",component:T},{path:"edit-group/:id",component:T}]}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(x)],p.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,c.u5,a.Pc,G.O,v._,m.T,c.UX,P]]}),e})()}}]);
function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"FdB/":function(n,e,t){"use strict";t.r(e);var l,a=t("8Y7J"),o=function(){function n(e,t){_classCallCheck(this,n),this.service=e,this.route=t,this.myLoader=!1}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.myLoader=!0,this.service.get_reason().subscribe((function(e){n.myLoader=!1,n.reflect=e}))}},{key:"routes",value:function(n,e){var t=this,l={reason:n,reason_id:e,machine_name:localStorage.getItem("machine_name"),machine_id:localStorage.getItem("machine_id")};this.myLoader=!0,this.service.redirect(l).subscribe((function(n){t.myLoader=!1,localStorage.setItem("machine",n.machine),localStorage.setItem("reason",n.reason),t.route.navigateByUrl("/oee_dashboard")}))}}]),n}(),i=function n(){_classCallCheck(this,n)},c=t("pMnS"),r=t("NcP4"),_=t("xYTU"),b=t("t68o"),u=t("zbXB"),g=t("9AJC"),p=t("fo5T"),d=t("XePT"),s=t("bujt"),m=t("Fwaw"),f=t("5GAg"),P=t("omvX"),h=t("SVse"),C=t("iInd"),O=t("Mr+X"),M=t("Gi4r"),D=t("IheW"),x=((l=function(){function n(e){_classCallCheck(this,n),this.http=e}return _createClass(n,[{key:"get_reason",value:function(){return this.http.get("tab_list_of_idel")}},{key:"redirect",value:function(n){return this.http.post("tab_reson_for_idle",n)}}]),n}()).ngInjectableDef=a.Tb({factory:function(){return new l(a.Ub(D.c))},token:l,providedIn:"root"}),l),w=a.rb({encapsulation:0,styles:[[".page[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]{padding:0}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{background:#2c2f34;padding:12px 20px;display:flex;justify-content:space-between}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;margin:0;color:#fff}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;margin:0;padding:0 15px;color:#a8a8a8}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child, .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{border-right:1px solid #707070}.machine_detail_Page[_ngcontent-%COMP%]{padding:20px}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]   button.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{background-image:linear-gradient(#f69320,#7b4a10);color:#fff!important}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]     .mat-select-value{color:#f69320}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]     .mat-select-arrow{color:#f69320}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   button.back.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{min-width:64px;padding:0;height:64px;border-radius:8px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:14px;margin-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;color:#a8a8a8}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline::before{display:none}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent;padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:26px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-left:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#2c2f34;border:1px solid #707070;padding:0 20px;border-radius:7px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:22px}.machine_prod[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left;align-items:center;border-radius:12px;margin-bottom:10px}.machine_prod[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:24%;padding:30px 14px;font-size:20px;margin-bottom:7px;margin-right:7px}.machine_prod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:0;color:#fff}.machine_prod[_ngcontent-%COMP%]   .label_info[_ngcontent-%COMP%]{float:left;width:60%}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]{display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;margin-bottom:20px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]{display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}  .mat-form-field-underline{display:none}footer[_ngcontent-%COMP%]{background:#2c2f34;padding:9px 30px 9px 9px;position:fixed;width:100%;bottom:0;text-align:right;left:0}.footer_action[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.footer_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:49%;padding:30px;font-size:26px}"]],data:{}});function y(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),a.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function v(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.routes(null==n.context.$implicit?null:n.context.$implicit.reason,null==n.context.$implicit||null==n.context.$implicit.id?null:n.context.$implicit.id.$oid)&&l),l}),s.b,s.a)),a.sb(1,180224,null,0,m.b,[a.k,f.h,[2,P.a]],{color:[0,"color"]},null),(n()(),a.Nb(2,0,["",""]))],(function(n,e){n(e,1,0,"primary")}),(function(n,e){n(e,0,0,a.Fb(e,1).disabled||null,"NoopAnimations"===a.Fb(e,1)._animationMode),n(e,2,0,null==e.context.$implicit?null:e.context.$implicit.reason)}))}function k(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,23,"div",[["class","page"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,y)),a.sb(2,16384,null,0,h.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(3,0,null,null,2,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),a.tb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Reason list"])),(n()(),a.tb(6,0,null,null,8,"div",[["class","rhs_wrapper"]],null,null,null,null,null)),(n()(),a.tb(7,0,null,null,7,"button",[["class","back"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==a.Fb(n,8).onClick()&&l),l}),s.b,s.a)),a.sb(8,16384,null,0,C.m,[C.l,C.a,[8,null],a.D,a.k],{routerLink:[0,"routerLink"]},null),a.Gb(9,1),a.sb(10,180224,null,0,m.b,[a.k,f.h,[2,P.a]],{color:[0,"color"]},null),(n()(),a.tb(11,0,null,0,3,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.tb(12,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,O.b,O.a)),a.sb(13,9158656,null,0,M.b,[a.k,M.d,[8,null],[2,M.a],[2,a.l]],null,null),(n()(),a.Nb(-1,0,["keyboard_arrow_left"])),(n()(),a.tb(15,0,null,null,8,"div",[["class","machine_detail_Page"]],null,null,null,null,null)),(n()(),a.tb(16,0,null,null,5,"div",[["class","running"]],null,null,null,null,null)),(n()(),a.tb(17,0,null,null,0,"div",[["class","header_machine"]],null,null,null,null,null)),(n()(),a.tb(18,0,null,null,3,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),a.tb(19,0,null,null,2,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,v)),a.sb(21,278528,null,0,h.m,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.tb(22,0,null,null,1,"footer",[],null,null,null,null,null)),(n()(),a.tb(23,0,null,null,0,"img",[["src","../../../assets/images/yantra1.png"]],null,null,null,null,null))],(function(n,e){var t=e.component;n(e,2,0,t.myLoader);var l=n(e,9,0,"/Tablet");n(e,8,0,l),n(e,10,0,"primary"),n(e,13,0),n(e,21,0,t.reflect)}),(function(n,e){n(e,7,0,a.Fb(e,10).disabled||null,"NoopAnimations"===a.Fb(e,10)._animationMode),n(e,12,0,a.Fb(e,13).inline,"primary"!==a.Fb(e,13).color&&"accent"!==a.Fb(e,13).color&&"warn"!==a.Fb(e,13).color)}))}var j=a.pb("app-reflect",o,(function(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"app-reflect",[],null,null,null,k,w)),a.sb(1,114688,null,0,o,[x,C.l],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),z=t("s7LF"),F=t("QQfA"),L=t("IP0z"),I=t("gavF"),J=t("POq0"),q=t("Xd0L"),N=t("/Co4"),T=t("JjoW"),U=t("cUpR"),X=t("/HVE"),Z=t("qJ5m"),$=t("Mz6y"),A=t("DkaU"),B=t("s6ns"),E=t("821u"),S=t("OIZN"),V=t("G0yt"),G=t("Wc//"),Y=t("zMNK"),H=t("hOhj"),Q=t("oapL"),R=t("HsOI"),W=t("ZwOa"),K=t("igqZ"),nn=t("02hT"),en=t("Q+lL"),tn=t("pBi1"),ln=t("lT8R"),an=t("BV1i"),on=t("elxJ"),cn=t("5Bek"),rn=t("c9fC"),_n=t("FVPZ"),bn=t("qJ50"),un=t("AaDx"),gn=t("mkRZ"),pn=t("dFDH"),dn=t("rWV4"),sn=t("zQui"),mn=t("8rEH"),fn=t("r0V8"),Pn=t("10VE"),hn=t("BzsH"),Cn=t("cw5Z"),On=t("hfXE"),Mn=t("ECJv"),Dn=t("EApP"),xn=t("1Q6g");t.d(e,"ReflectModuleNgFactory",(function(){return wn}));var wn=a.qb(i,[],(function(n){return a.Cb([a.Db(512,a.j,a.bb,[[8,[c.a,r.a,_.a,_.b,b.a,u.b,u.a,g.a,g.b,g.h,g.i,g.e,g.f,g.g,p.a,d.a,j]],[3,a.j],a.w]),a.Db(4608,h.p,h.o,[a.t,[2,h.L]]),a.Db(4608,z.D,z.D,[]),a.Db(4608,z.g,z.g,[]),a.Db(4608,F.c,F.c,[F.i,F.e,a.j,F.h,F.f,a.q,a.y,h.d,L.b,[2,h.j]]),a.Db(5120,F.j,F.k,[F.c]),a.Db(5120,I.a,I.d,[F.c]),a.Db(4608,J.c,J.c,[]),a.Db(4608,q.b,q.b,[]),a.Db(5120,N.a,N.b,[F.c]),a.Db(5120,T.a,T.b,[F.c]),a.Db(4608,U.e,q.c,[[2,q.g],[2,q.l]]),a.Db(4608,q.a,q.w,[[2,q.f],X.a]),a.Db(5120,Z.b,Z.a,[[3,Z.b]]),a.Db(5120,$.b,$.c,[F.c]),a.Db(135680,f.h,f.h,[a.y,X.a]),a.Db(4608,A.e,A.e,[a.L]),a.Db(5120,B.c,B.d,[F.c]),a.Db(135680,B.e,B.e,[F.c,a.q,[2,h.j],[2,B.b],B.c,[3,B.e],F.e]),a.Db(4608,E.i,E.i,[]),a.Db(5120,E.a,E.b,[F.c]),a.Db(5120,S.c,S.a,[[3,S.c]]),a.Db(4608,V.v,V.v,[a.j,a.q,V.jb,V.w]),a.Db(4608,G.a,G.a,[]),a.Db(1073742336,C.p,C.p,[[2,C.u],[2,C.l]]),a.Db(1073742336,h.c,h.c,[]),a.Db(1073742336,z.C,z.C,[]),a.Db(1073742336,z.m,z.m,[]),a.Db(1073742336,z.z,z.z,[]),a.Db(1073742336,L.a,L.a,[]),a.Db(1073742336,q.l,q.l,[[2,q.d],[2,U.f]]),a.Db(1073742336,X.b,X.b,[]),a.Db(1073742336,q.v,q.v,[]),a.Db(1073742336,m.c,m.c,[]),a.Db(1073742336,Y.g,Y.g,[]),a.Db(1073742336,H.c,H.c,[]),a.Db(1073742336,F.g,F.g,[]),a.Db(1073742336,I.c,I.c,[]),a.Db(1073742336,I.b,I.b,[]),a.Db(1073742336,M.c,M.c,[]),a.Db(1073742336,Q.c,Q.c,[]),a.Db(1073742336,J.d,J.d,[]),a.Db(1073742336,R.e,R.e,[]),a.Db(1073742336,W.c,W.c,[]),a.Db(1073742336,K.e,K.e,[]),a.Db(1073742336,q.m,q.m,[]),a.Db(1073742336,q.t,q.t,[]),a.Db(1073742336,nn.a,nn.a,[]),a.Db(1073742336,en.a,en.a,[]),a.Db(1073742336,q.q,q.q,[]),a.Db(1073742336,N.c,N.c,[]),a.Db(1073742336,T.d,T.d,[]),a.Db(1073742336,tn.b,tn.b,[]),a.Db(1073742336,tn.a,tn.a,[]),a.Db(1073742336,ln.a,ln.a,[]),a.Db(1073742336,an.a,an.a,[]),a.Db(1073742336,q.x,q.x,[]),a.Db(1073742336,q.n,q.n,[]),a.Db(1073742336,on.a,on.a,[]),a.Db(1073742336,cn.c,cn.c,[]),a.Db(1073742336,rn.a,rn.a,[]),a.Db(1073742336,_n.a,_n.a,[]),a.Db(1073742336,bn.e,bn.e,[]),a.Db(1073742336,Z.c,Z.c,[]),a.Db(1073742336,f.a,f.a,[]),a.Db(1073742336,$.e,$.e,[]),a.Db(1073742336,A.c,A.c,[]),a.Db(1073742336,un.a,un.a,[]),a.Db(1073742336,gn.a,gn.a,[]),a.Db(1073742336,pn.d,pn.d,[]),a.Db(1073742336,dn.j,dn.j,[]),a.Db(1073742336,B.k,B.k,[]),a.Db(1073742336,sn.p,sn.p,[]),a.Db(1073742336,mn.m,mn.m,[]),a.Db(1073742336,E.j,E.j,[]),a.Db(1073742336,fn.d,fn.d,[]),a.Db(1073742336,fn.c,fn.c,[]),a.Db(1073742336,Pn.i,Pn.i,[]),a.Db(1073742336,hn.b,hn.b,[]),a.Db(1073742336,S.d,S.d,[]),a.Db(1073742336,V.c,V.c,[]),a.Db(1073742336,V.f,V.f,[]),a.Db(1073742336,V.g,V.g,[]),a.Db(1073742336,V.k,V.k,[]),a.Db(1073742336,V.l,V.l,[]),a.Db(1073742336,V.r,V.r,[]),a.Db(1073742336,V.t,V.t,[]),a.Db(1073742336,V.x,V.x,[]),a.Db(1073742336,V.z,V.z,[]),a.Db(1073742336,V.D,V.D,[]),a.Db(1073742336,V.G,V.G,[]),a.Db(1073742336,V.J,V.J,[]),a.Db(1073742336,V.M,V.M,[]),a.Db(1073742336,V.P,V.P,[]),a.Db(1073742336,V.U,V.U,[]),a.Db(1073742336,V.X,V.X,[]),a.Db(1073742336,V.Y,V.Y,[]),a.Db(1073742336,V.Z,V.Z,[]),a.Db(1073742336,V.y,V.y,[]),a.Db(1073742336,Cn.h,Cn.h,[]),a.Db(1073742336,On.b,On.b,[]),a.Db(1073742336,Mn.b,Mn.b,[]),a.Db(1073742336,Dn.i,Dn.i,[]),a.Db(1073742336,xn.a,xn.a,[]),a.Db(1073742336,i,i,[]),a.Db(256,q.e,q.i,[]),a.Db(256,Cn.p,"en-US",[]),a.Db(256,Dn.b,{default:Dn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),a.Db(1024,C.j,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);
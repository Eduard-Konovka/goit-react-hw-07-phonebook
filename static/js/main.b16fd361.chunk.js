(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={container:"Container_container__2DJ05",title:"Container_title__9389E"}},15:function(t,e,n){t.exports={section:"Section_section__39CP-",title:"Section_title__3r3aa"}},16:function(t,e,n){t.exports={filter:"Filter_filter__MhJnb",input:"Filter_input__35SQ5"}},17:function(t,e,n){t.exports={box:"Spinner_box__2XfKj",spinner:"Spinner_spinner__s6_Fl"}},49:function(t,e,n){},5:function(t,e,n){t.exports={form:"ContactForm_form__3FDT3",label:"ContactForm_label__1JjNg",title:"ContactForm_title__1PhNj",input:"ContactForm_input__2OTnw",btn:"ContactForm_btn__1um4s"}},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(9),s=n.n(i),o=n(3),l=n(21),b=n(4),u=n(18),j=n(22),d=n.n(j),m=n(23),O=n.n(m),_=n(11),f=n(26),p=n(2),h=n(24),x=n.n(h),C={addContact:Object(b.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:x.a.generate(),name:e,number:n}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")},v=Object(b.c)([],(c={},Object(_.a)(c,C.addContact,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(_.a)(c,C.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),N=Object(b.c)("",Object(_.a)({},C.changeFilter,(function(t,e){return e.payload}))),g=Object(p.b)({items:v,filter:N}),F={key:"contacts",storage:d.a,blacklist:["filter"]},k=Object(b.a)({reducer:{contacts:Object(u.a)(F,g)},middleware:function(t){return t({serializableCheck:!1}).concat(O.a)},devTools:!1}),y={configStore:k,persistor:Object(u.b)(k)},S=n(14),w=n.n(S),z=n(1);function J(t){var e=t.title,n=t.children;return Object(z.jsxs)("div",{className:w.a.container,children:[e&&Object(z.jsx)("h1",{className:w.a.title,children:e}),n]})}var A=n(15),L=n.n(A);function M(t){var e=t.title,n=t.children;return Object(z.jsxs)("section",{className:L.a.section,children:[e&&Object(z.jsx)("h2",{className:L.a.title,children:e}),n]})}var D=n(19),E=function(t){return t.contacts.items},P=function(t){return t.contacts.filter},T=function(t){var e=E(t),n=P(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},Z=n(5),q=n.n(Z);function B(){var t=Object(a.useState)(""),e=Object(D.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(D.a)(r,2),s=i[0],l=i[1],b=Object(o.c)(E),u=Object(o.b)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":l(a);break;default:return}},d=function(){c(""),l("")};return Object(z.jsx)("form",{onSubmit:function(t){t.preventDefault(),b.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):u(C.addContact({name:n,number:s})),d()},className:q.a.form,children:Object(z.jsxs)("label",{className:q.a.label,children:[Object(z.jsx)("p",{className:q.a.title,children:"Name"}),Object(z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:j,className:q.a.input}),Object(z.jsx)("p",{className:q.a.title,children:"Number"}),Object(z.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:j,className:q.a.input}),Object(z.jsx)("button",{className:q.a.btn,children:"Add contact"})]})})}var W=n(16),X=n.n(W);function I(){var t=Object(o.c)(P),e=Object(o.b)();return Object(z.jsxs)("label",{className:X.a.filter,children:["Find contacts by name:",Object(z.jsx)("input",{type:"text",value:t,className:X.a.input,onChange:function(t){return e(C.changeFilter(t.target.value))}})]})}var K=n(7),Q=n.n(K);function $(){var t=Object(o.c)(T),e=Object(o.b)();return Object(z.jsx)("ul",{className:Q.a.list,children:t.map((function(t){return Object(z.jsxs)("li",{className:Q.a.item,children:[Object(z.jsx)("p",{className:Q.a.text,children:"".concat(t.name,": ").concat(t.number)}),Object(z.jsx)("button",{type:"button",className:Q.a.btn,onClick:function(){return n=t.id,e(C.deleteContact(n));var n},children:"Delete"})]},t.id)}))})}n(49);function G(){return Object(z.jsxs)(J,{title:"Phonebook",children:[Object(z.jsx)(M,{children:Object(z.jsx)(B,{})}),Object(z.jsxs)(M,{title:"Contacts",children:[Object(z.jsx)(I,{}),Object(z.jsx)($,{})]})]})}var H=n(25),R=n(17),U=n.n(R);function V(t){var e=t.size;return Object(z.jsx)("div",{className:U.a.box,children:Object(z.jsx)(H.a,{size:e,className:U.a.spinner})})}n(50);s.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(o.a,{store:y.configStore,children:Object(z.jsx)(l.a,{loading:Object(z.jsx)(V,{size:200}),persistor:y.persistor,children:Object(z.jsx)(G,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__1EkMu",item:"ContactList_item__SMztd",text:"ContactList_text__7sXtW",btn:"ContactList_btn__1W2J6"}}},[[51,1,2]]]);
//# sourceMappingURL=main.b16fd361.chunk.js.map
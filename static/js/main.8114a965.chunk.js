(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={nav:"Header_nav__3RHVk",nav_wrap:"Header_nav_wrap__suiFx",link:"Header_link__2AN-G",activeLink:"Header_activeLink__D6qLr"}},function(e,t,n){e.exports={wrap:"SuperDoubleRange_wrap__2BR3z",values:"SuperDoubleRange_values__36rAk",lowerValue:"SuperDoubleRange_lowerValue__2UDuY",upperValue:"SuperDoubleRange_upperValue__u2qjK",range:"SuperDoubleRange_range__3CznG",upperInputClassName:"SuperDoubleRange_upperInputClassName__tf7WF",lowerInputClassName:"SuperDoubleRange_lowerInputClassName__1yl6i"}},,,function(e,t,n){e.exports={message:"Message_message__2dlP8",messageField:"Message_messageField__D9MWK",name:"Message_name__3xQhT",messagesText:"Message_messagesText__1EpbX",ponytail:"Message_ponytail__20VdJ"}},,,,function(e,t,n){e.exports={prejunior:"Pages_prejunior__2pRZ3",junior:"Pages_junior__185Ed"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__pHUJh",errorInput:"SuperInputText_errorInput__2WQ3F",error:"SuperInputText_error__wKGZf"}},function(e,t,n){e.exports={hw4:"HW4_hw4__9kfYi",blue:"HW4_blue__3snu5",column:"HW4_column__2dcay",testSpanError:"HW4_testSpanError__2Eu7j"}},,function(e,t,n){e.exports={default:"SuperButton_default__3K_wt",red:"SuperButton_red__1Nugr"}},,function(e,t,n){e.exports={preloader_box:"HW10_preloader_box__1UZBO",preloader:"HW10_preloader__3Re0n"}},function(e,t,n){e.exports={wrap:"SuperRange_wrap__1_W8L",range:"SuperRange_range__1oW-I"}},function(e,t,n){e.exports={affair:"Affairs_affair__3t1h8",affairName:"Affairs_affairName__3_gjs"}},function(e,t,n){e.exports={input:"Greeting_input__15aMv",error:"Greeting_error__1W9Jd"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3k79v",spanClassName:"SuperCheckbox_spanClassName__20LUi"}},,function(e,t,n){e.exports={App:"App_App__1_S3i",hw:"App_hw__1lmcq"}},function(e,t,n){e.exports={option:"SuperSelect_option__3xe24"}},,function(e,t,n){e.exports={spanInput:"SuperEditableSpan_spanInput__3z0Ld"}},,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),s=n.n(r),i=(n(36),n(28)),o=n.n(i),j=n(10),l=n(7),u=n.n(l),b=n(0);var d=function(){return Object(b.jsx)("div",{className:u.a.nav_wrap,children:Object(b.jsxs)("div",{className:u.a.nav,children:[Object(b.jsx)(j.b,{to:"/pre-junior",className:function(e){return e.isActive?u.a.activeLink:u.a.link},children:"PRE_JUNIOR"}),Object(b.jsx)(j.b,{to:"/junior",className:function(e){return e.isActive?u.a.activeLink:u.a.link},children:"JUNIOR"}),Object(b.jsx)(j.b,{to:"/junior-plus",className:function(e){return e.isActive?u.a.activeLink:u.a.link},children:"JUNIOR_PLUS"})]})})},O=n(2);var h=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://www.creameng.com/img/error404.png",alt:"404error",width:"700px"})}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},x=n(3),p=n(4),m=n(5),v=n(29),_=n.n(v),f=["options","onChange","onChangeOption"],g=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(m.a)(e,f),r=t?t.map((function(e,t){return Object(b.jsx)("option",{className:_.a.option,value:e,children:e},"o"+t)})):[];return Object(b.jsx)("select",Object(p.a)(Object(p.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},C=["type","name","options","value","onChange","onChangeOption"],N=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(m.a)(e,C),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},k=["One","Two","Three"];var w=function(){var e=Object(a.useState)(k[1]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 7"}),Object(b.jsx)("div",{children:Object(b.jsx)(g,{options:k,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(N,{name:"radio",options:k,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},S=n(16),y=function(e,t){switch(t.type){case"sort":var n=Object(S.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>t.payload-1}));default:return e}},I=n(20),T=n.n(I),H=["red","className"],A=function(e){var t=e.red,n=e.className,a=Object(m.a)(e,H),c="".concat(t?T.a.red:T.a.default," ").concat(n);return Object(b.jsx)("button",Object(p.a)({className:c},a))},R=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var L=function(){var e=Object(a.useState)(R),t=Object(x.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(b.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 1"}),r,Object(b.jsx)("div",{children:Object(b.jsx)(A,{onClick:function(){return c(y(R,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(A,{onClick:function(){return c(y(R,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)(A,{onClick:function(){return c(y(R,{type:"check",payload:18}))},children:"check 18"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var W=function(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(x.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(x.a)(j,2),u=l[0],d=l[1],O=function(){clearTimeout(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(b.jsx)("br",{}),p=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(b.jsx)("br",{});return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),u?Object(b.jsx)("div",{children:p}):Object(b.jsx)("br",{}),Object(b.jsx)(A,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(b.jsx)(A,{onClick:O,children:"stop"})]})};var D,F=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 9"}),Object(b.jsx)(W,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},E=n(13);!function(e){e.SWITCH_LOADING="ACTIONS_TYPES/SWITCH_LOADING"}(D||(D={}));var P={isLoading:!1},U=function(){return{type:D.SWITCH_LOADING}},M=n(22),J=n.n(M),B=n.p+"static/media/prealoder.f7403727.gif";var G=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.loading.isLoading}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 10"}),t?Object(b.jsx)("div",{className:J.a.preloader_box,children:Object(b.jsx)("img",{className:J.a.preloader,src:B,alt:"preloader"})}):Object(b.jsx)("div",{children:Object(b.jsx)(A,{onClick:function(){e(U()),setTimeout((function(){e(U())}),1e3)},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},K=n(23),V=n.n(K),q=["type","onChange","onChangeRange","className"],Y=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(m.a)(e,q),r="".concat(V.a.range," ").concat(a||"");return Object(b.jsxs)("div",{className:V.a.wrap,children:[Object(b.jsx)("span",{children:c.value}),Object(b.jsx)("input",Object(p.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))]})},Z=n(8),z=n.n(Z),X=["onChangeRange","value"],Q=function(e){var t=e.onChangeRange,n=e.value,a=Object(m.a)(e,X),c="".concat(z.a.range," ").concat(z.a.upperInputClassName),r="".concat(z.a.range," ").concat(z.a.lowerInputClassName);return Object(b.jsxs)("div",{className:z.a.wrap,children:[Object(b.jsxs)("div",{className:z.a.values,children:[Object(b.jsx)("span",{className:z.a.lowerValue,children:n&&n[0]}),Object(b.jsx)("span",{className:z.a.upperValue,children:n&&n[1]})]}),Object(b.jsx)("input",Object(p.a)({type:"range",onChange:function(e){var a=n?n[0]:0;t&&t([a,+e.currentTarget.value])},className:r,value:n&&n[1]},a)),Object(b.jsx)("input",Object(p.a)({type:"range",onChange:function(e){var a=n?n[1]:0;t&&t([+e.currentTarget.value,a])},className:c,value:n&&n[0]},a))]})};var $=function(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(x.a)(r,2),i=s[0],o=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsx)("div",{children:Object(b.jsx)(Y,{value:n,onChangeRange:function(e){i-1>=e&&c(e)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(Q,{onChangeRange:function(e){e[0]+1<=i&&c(e[0]),e[1]-1>=n&&o(e[1])},value:[n,i]})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ee=n(15),te=n.n(ee);var ne=function(){return Object(b.jsxs)("div",{className:te.a.junior,children:[Object(b.jsx)(w,{}),Object(b.jsx)(L,{}),Object(b.jsx)(F,{}),Object(b.jsx)(G,{}),Object(b.jsx)($,{})]})};var ae=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://static.103.by/images/common/wysiwyg/2019/05/344626fa70bc4ec39bd25756ee8695e6.jpg",alt:"junior",width:"700px"})})},ce=n(11),re=n.n(ce);var se=function(e){return Object(b.jsxs)("div",{className:re.a.message,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:e.avatar,alt:"Avatars_image"})}),Object(b.jsx)("div",{className:re.a.ponytail}),Object(b.jsxs)("div",{className:re.a.messageField,children:[Object(b.jsx)("div",{className:re.a.name,children:e.name}),Object(b.jsx)("div",{className:re.a.messagesText,children:e.message}),Object(b.jsx)("time",{children:e.time})]})]})},ie="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",oe="Some Name",je="Sigh no more, ladies, sigh no more, Men were deceivers ever...",le="22:00";var ue=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 1"}),Object(b.jsx)(se,{avatar:ie,name:oe,message:je,time:le}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},be=n(24),de=n.n(be);var Oe=function(e){return Object(b.jsxs)("div",{className:de.a.affair,children:[Object(b.jsx)("div",{className:de.a.affairName,children:e.affair.name}),Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var he=function(e){var t=e.data.map((function(t){return Object(b.jsx)(Oe,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},xe=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var pe=function(){var e=Object(a.useState)(xe),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(x.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 2"}),Object(b.jsx)(he,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return!(e._id===t)}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},me=n(46),ve=n(25),_e=n.n(ve),fe=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=t?_e.a.input:_e.a.error;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,onKeyPress:function(e){13===e.charCode&&a()},className:s}),Object(b.jsx)("button",{onClick:a,children:"add"}),Object(b.jsx)("div",{children:c}),Object(b.jsx)("span",{children:"total users: "+r})]})},ge=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(x.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(x.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(fe,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){s?(n(s),alert("Hello ".concat(s,"!")),i("")):u("Please, inter your name!")},error:l,totalUsers:d})};var Ce=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 3"}),Object(b.jsx)(ge,{users:n,addUserCallback:function(e){c([].concat(Object(S.a)(n),[{_id:Object(me.a)(),name:e}]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Ne=n(17),ke=n.n(Ne),we=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],Se=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=(e.className,e.spanClassName),i=Object(m.a)(e,we),o="".concat(ke.a.error," ").concat(s||""),j="".concat(r?ke.a.errorInput:ke.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(p.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},i)),r&&Object(b.jsx)("span",{className:o,children:r})]})},ye=n(18),Ie=n.n(ye),Te=n(26),He=n.n(Te),Ae=["type","onChange","onChangeChecked","className","spanClassName","children"],Re=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(m.a)(e,Ae),s="".concat(He.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(p.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(b.jsx)("span",{className:He.a.spanClassName,children:c})]})};var Le=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(x.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{className:Ie.a.hw4,children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 4"}),Object(b.jsxs)("div",{className:Ie.a.column,children:[Object(b.jsx)(Se,{value:n,onChangeText:c,onEnter:s,error:r}),Object(b.jsx)(Se,{className:Ie.a.blue}),Object(b.jsx)(A,{children:"default"}),Object(b.jsx)(A,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(A,{disabled:!0,children:"disabled"}),Object(b.jsx)(Re,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Re,{checked:j,onChange:function(e){l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},We=n(31),De=n.n(We),Fe=["autoFocus","onBlur","onEnter","spanProps"],Ee=["children","onDoubleClick","className"],Pe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(m.a)(e,Fe),s=Object(a.useState)(!1),i=Object(x.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,d=l.onDoubleClick,O=l.className,h=Object(m.a)(l,Ee),v="".concat(De.a.spanInput," ").concat(O);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(Se,Object(p.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(b.jsx)("span",Object(p.a)(Object(p.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:v},h),{},{children:u||r.value}))})};function Ue(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Me(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Ue("test",{x:"A",y:1});Me("test",{x:"",y:0});var Je=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Homeworks 6"}),Object(b.jsx)("div",{children:Object(b.jsx)(Pe,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(A,{onClick:function(){Ue("editable-span-value",n)},children:"save"}),Object(b.jsx)(A,{onClick:function(){c(Me("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Be=function(){return Object(b.jsxs)("div",{className:te.a.prejunior,children:[Object(b.jsx)(ue,{}),Object(b.jsx)(pe,{}),Object(b.jsx)(Ce,{}),Object(b.jsx)(Le,{}),Object(b.jsx)(Je,{})]})},Ge="/pre-junior",Ke="/junior",Ve="/junior-plus";var qe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/",element:Object(b.jsx)(O.a,{to:Ge})}),Object(b.jsx)(O.b,{path:"/it-incubator-ignat-tasks",element:Object(b.jsx)(O.a,{to:Ge})}),Object(b.jsx)(O.b,{path:Ge,element:Object(b.jsx)(Be,{})}),Object(b.jsx)(O.b,{path:Ke,element:Object(b.jsx)(ne,{})}),Object(b.jsx)(O.b,{path:Ve,element:Object(b.jsx)(ae,{})}),Object(b.jsx)(O.b,{element:Object(b.jsx)(h,{})})]})})};var Ye=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(qe,{})]})})};var Ze=function(){return Object(b.jsxs)(b.Fragment,{children:["react homeworks",Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(Ye,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ze=n(27),Xe=Object(ze.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.SWITCH_LOADING:return e.isLoading?{isLoading:!1}:{isLoading:!0};default:return e}}}),Qe=Object(ze.b)(Xe),$e=Qe;window.store=Qe,s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(E.a,{store:$e,children:Object(b.jsx)(Ze,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.8114a965.chunk.js.map
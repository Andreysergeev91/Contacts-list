(this["webpackJsonpcontacts-list"]=this["webpackJsonpcontacts-list"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/account_circle-black-18dp.be049e9a.svg"},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),i=(a(28),a(6)),s=a(7),o=a(11),u=a(9),m=a(8),d=(a(29),a(30),a(31),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item;return c.a.createElement("div",{onClick:function(){return e.props.handleLink(t)},className:"contact"},c.a.createElement("img",{className:"contact__avatar",alt:t.name,src:t.avatar}),c.a.createElement("h2",{className:"contact__name"},this.props.name))}}]),a}(n.Component)),p=a(13),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data;return c.a.createElement("ul",{className:"contacts-list"},t.map((function(t,a){return c.a.createElement("li",{className:"list-item-contact",key:a},c.a.createElement(p.b,{className:"contact-link",to:t.name},c.a.createElement(d,{handleLink:e.props.handleActiveLink,item:t,name:t.name})))})))}}]),a}(n.Component),f=a(12),b=(a(37),a(1));function v(e){var t=Object(b.f)().id,a=e.user||{phone:"",company:"",website:""},r=a.phone,l=a.company,i=a.website,s=Object(n.useState)(!1),o=Object(f.a)(s,2),u=o[0],m=o[1],d=Object(n.useState)(l.name),p=Object(f.a)(d,2),h=p[0],v=p[1],E=Object(n.useState)(r),_=Object(f.a)(E,2),g=_[0],N=_[1],O=Object(n.useState)(i),j=Object(f.a)(O,2),y=j[0],k=j[1],C=Object(n.useState)(t),D=Object(f.a)(C,2),S=D[0],I=D[1];return u?c.a.createElement("div",{className:"detailed-contact"},c.a.createElement("div",{className:"background-container"}),c.a.createElement("img",{className:"detailed-contact__avatar",alt:e.user.name,src:e.user.avatar}),c.a.createElement("input",{className:"detailed-contact__input-name",type:"text",name:"name",defaultValue:S,onChange:function(e){return I(e.target.value)}}),c.a.createElement("div",{className:"detailed-contact__info-container"},c.a.createElement("p",{className:"detailed-contact__info-field"},"Phone:"),c.a.createElement("input",{className:"detailed-contact__input",type:"text",name:"phone",defaultValue:g,onChange:function(e){return N(e.target.value)}}),c.a.createElement("p",{className:"detailed-contact__info-field"},"Company:"),c.a.createElement("input",{className:"detailed-contact__input",type:"text",name:"company",defaultValue:h,onChange:function(e){return v(e.target.value)}}),c.a.createElement("p",{className:"detailed-contact__info-field"},"Website:"),c.a.createElement("input",{className:"detailed-contact__input",type:"text",name:"website",defaultValue:y,onChange:function(e){return k(e.target.value)}})),c.a.createElement("button",{className:"detailed-contact__button",onClick:function(){var a={name:S,phone:g,company:h,website:y};m(!1),e.onNameChange(a,t)}},"Save")):c.a.createElement("div",{className:"detailed-contact"},c.a.createElement("div",{className:"background-container"}),c.a.createElement("img",{className:"detailed-contact__avatar",alt:e.user.name,src:e.user.avatar}),c.a.createElement("h1",{className:"detailed-contact__name"},S),c.a.createElement("div",{className:"detailed-contact__info-container"},c.a.createElement("p",{className:"detailed-contact__info-field"},"Phone:"),c.a.createElement("p",{className:"detailed-contact__info"},g),c.a.createElement("p",{className:"detailed-contact__info-field"},"Company:"),c.a.createElement("p",{className:"detailed-contact__info"},h),c.a.createElement("p",{className:"detailed-contact__info-field"},"Website:"),c.a.createElement("p",{className:"detailed-contact__info"},y)),c.a.createElement("button",{className:"detailed-contact__button",onClick:function(){return m(!0)}},"Edit"))}a(38);var E=a(22),_=a.n(E),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Contacts List"),c.a.createElement("img",{className:"logo",src:_.a,alt:"contacts"}))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userData:[],user:null},n.gettingDataFromAPI=n.gettingDataFromAPI.bind(Object(o.a)(n)),n.handleInfoChange=n.handleInfoChange.bind(Object(o.a)(n)),n.handleLink=n.handleLink.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){if(null===localStorage.getItem("userData"))return this.gettingDataFromAPI();var e=JSON.parse(localStorage.getItem("userData"));return this.setState({userData:e})}},{key:"gettingDataFromAPI",value:function(){var e=this;return fetch("http://demo.sibers.com/users").then((function(e){return e.json()})).then((function(t){e.setState({userData:t}),localStorage.setItem("userData",JSON.stringify(e.state.userData))}))}},{key:"handleInfoChange",value:function(e,t){var a=this.state.userData.slice();a.map((function(a){return a.name===t&&(a.name=e.name,a.phone=e.phone,a.company.name=e.company,a.website=e.website),a})),this.setState({userData:a}),localStorage.setItem("userData",JSON.stringify(this.state.userData))}},{key:"handleLink",value:function(e){this.setState({user:e})}},{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0},c.a.createElement(g,null),c.a.createElement(h,{handleActiveLink:this.handleLink,data:this.state.userData})),c.a.createElement(b.a,{path:"/:id",children:c.a.createElement(v,{user:this.state.user,onNameChange:this.handleInfoChange})}))))}}]),a}(n.Component);l.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6a8c3233.chunk.js.map
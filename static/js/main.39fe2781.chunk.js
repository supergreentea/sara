(this.webpackJsonpsara=this.webpackJsonpsara||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(19),r=t.n(c),m=(t(27),t(10)),s=t(11),o=t(4),i=t(5),d=t(7),E=t(6),u=t(8),p=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",style:{marginBottom:"3vh"}},n.a.createElement(m.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"S.A.R.A.")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Course"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.a.createElement("a",{className:"dropdown-item",target:"_blank",href:"https://learn.zybooks.com/zybook/CUNYCSCI355TeitelmanFall2019"},"Zybook"),n.a.createElement("a",{className:"dropdown-item",target:"_blank",href:"https://app.tophat.com/e/427895/lecture"},"TopHat"),n.a.createElement("a",{className:"dropdown-item",target:"_blank",href:"https://tinyurl.com/CSCI355-Fall2019"},"Google Drive"),n.a.createElement("div",{className:"dropdown-divider"}),n.a.createElement("a",{className:"dropdown-item",target:"_blank",href:"https://www.w3schools.com/"},"w3schools"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("a",{className:"nav-link"},"Search ",n.a.createElement("span",{className:"sr-only"},"(current)")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{style:{textDecoration:"none"},to:"/browser"},n.a.createElement("a",{className:"nav-link"},"Browser ",n.a.createElement("span",{className:"sr-only"},"(current)")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{style:{textDecoration:"none"},to:"/about"},n.a.createElement("a",{className:"nav-link"},"About ",n.a.createElement("span",{className:"sr-only"},"(current)")))))))}}]),a}(l.PureComponent),h=(t(33),function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{padding:"2vw",maxWidth:800,margin:"0 auto"}},n.a.createElement("h1",{id:"logo",className:"text-center"},n.a.createElement("span",{style:{color:"#4285F4",margin:"0.1em"}},"S"),n.a.createElement("span",{style:{color:"#EA4335",margin:"0.1em"}},"A"),n.a.createElement("span",{style:{color:"#FBBC05",margin:"0.1em"}},"R"),n.a.createElement("span",{style:{color:"#4285F4",margin:"0.1em"}},"A")),n.a.createElement("div",{className:"input-group",style:{padding:"2vw",outline:"none"}},n.a.createElement("input",{type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("select",{id:"select-search",className:"bootstrap-select btn",style:{backgroundColor:"#FBC117",color:"rgba(0,0,0,0);",outline:"none"}},n.a.createElement("option",{value:"1",selected:"selected"},"CSV"),n.a.createElement("option",{value:"2"},"JSON"),n.a.createElement("option",{value:"3"},"XML"),n.a.createElement("option",{value:"4"},"Google")),n.a.createElement("span",{id:"search-button",className:"btn",style:{backgroundColor:"#4285F4"}},n.a.createElement("i",{style:{color:"white"},className:"fa fa-search"})))))}}]),a}(l.PureComponent)),N=(t(34),l.PureComponent,function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state={latitude:0,longitude:0},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(a){e.setState({latitude:a.coords.latitude,longitude:a.coords.longitude})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-3 browser-item"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"Navigator")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"appName "),n.a.createElement("em",null,navigator.appName)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"product "),n.a.createElement("em",null,navigator.product)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"appVersion "),n.a.createElement("em",null,navigator.appVersion)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"userAgent "),n.a.createElement("em",null,navigator.userAgent)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"platform "),n.a.createElement("em",null,navigator.platform)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"language "),n.a.createElement("em",null,navigator.language))))),n.a.createElement("div",{className:"col-12 col-md-3 browser-item"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"Window")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"innerHeight "),n.a.createElement("em",null,window.innerHeight)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"innerWidth "),n.a.createElement("em",null,window.innerWidth)))),n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"Geolocation")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"latitude "),n.a.createElement("em",null,this.state.latitude)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"longitude "),n.a.createElement("em",null,this.state.longitude))))),n.a.createElement("div",{className:"col-12 col-md-3 browser-item"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"Screen")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"width "),n.a.createElement("em",null,window.screen.width)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"height "),n.a.createElement("em",null,window.screen.height)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"availWidth "),n.a.createElement("em",null,window.screen.availWidth)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"availHeight "),n.a.createElement("em",null,window.screen.availHeight)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"colorDepth "),n.a.createElement("em",null,window.screen.colorDepth)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"pixelDepth "),n.a.createElement("em",null,window.screen.pixelDepth))))),n.a.createElement("div",{className:"col-12 col-md-3 browser-item"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"Location")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"href "),n.a.createElement("em",null,window.location.href)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"hostname "),n.a.createElement("em",null,window.location.hostname)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"pathname "),n.a.createElement("em",null,window.location.pathname)),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"protocol "),n.a.createElement("em",null,window.location.protocol)))))))}}]),a}(l.PureComponent)),b=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-12 browser-item"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-header text-center"},n.a.createElement("h3",null,"About")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"The Developer "),n.a.createElement("em",null,"Hui Lin is a student at Queens College who built this website for his computer science class with Professor Teitelman.")),n.a.createElement("p",{className:"card-text"},n.a.createElement("h5",{className:"card-title"},"Contact Us"),n.a.createElement("em",null,"You can reach Hui Lin at huilin1618@gmail.com.")))))))}}]),a}(l.PureComponent);t(35);var v=function(){return n.a.createElement(m.a,null,n.a.createElement(p,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/"},n.a.createElement(h,null)),n.a.createElement(s.a,{exact:!0,path:"/browser"},n.a.createElement(N,null)),n.a.createElement(s.a,{exact:!0,path:"/about"},n.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.39fe2781.chunk.js.map
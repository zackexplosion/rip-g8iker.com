(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(2),c=a.n(i),l=a(3),r=a(4),d=a(6),o=a(5),m=a(7),v=(a(14),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(o.a)(t).call(this,e))).state={ready:!1,days:0,hours:0,minutes:0,seconds:0},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({ready:!0}),this.getDistance(),setInterval(function(){e.getDistance()},200)}},{key:"getDistance",value:function(){var e=new Date("2019/01/22").getTime(),t=(new Date).getTime()-e,a=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),n=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);this.setState({days:a,hours:s,minutes:n,seconds:i})}},{key:"render",value:function(){return this.state.ready?n.a.createElement("div",{className:"csvg-countdown hasWeeks"},n.a.createElement("h1",{className:"csvg-title font-cursive","data-tad-bind":"title",title:"Countdown Timer"},"RIP ",n.a.createElement("a",{target:"_blank",href:"https://G8iker.com",rel:"noopener noreferrer"},"G8iker.com")),n.a.createElement("h2",{className:"font-cursive"},"From 2019/01/22, has dead for.."),n.a.createElement("div",{className:"csvg-digit","data-tad-bind":"days"},n.a.createElement("div",{className:"csvg-digit-number",id:"el_dw1"},this.state.days),n.a.createElement("div",{className:"csvg-digit-label",id:"el_dw1t"},"days")),n.a.createElement("div",{className:"csvg-digit","data-tad-bind":"hours"},n.a.createElement("div",{className:"csvg-digit-number",id:"el_h1"},this.state.hours),n.a.createElement("div",{className:"csvg-digit-label",id:"el_h1t"},"hours")),n.a.createElement("div",{className:"csvg-digit","data-tad-bind":"minutes"},n.a.createElement("div",{className:"csvg-digit-number",id:"el_m1"},this.state.minutes),n.a.createElement("div",{className:"csvg-digit-label",id:"el_m1t"},"minutes")),n.a.createElement("div",{className:"csvg-digit","data-tad-bind":"seconds"},n.a.createElement("div",{className:"csvg-digit-number",id:"el_s1"},this.state.seconds),n.a.createElement("div",{className:"csvg-digit-label",id:"el_s1t"},"seconds")),n.a.createElement("p",null,"\u958b\u5f88\u4e45\u55ce\uff1f\u5f88\u6b63\u5e38\uff0c\u56e0\u70ba\u6211\u4e5f\u300e\u6c92\u4ed8\u9322\u300f"),n.a.createElement("p",{className:"is-alive"},"\b\u5fa9\u6d3b\u4e86\u55ce\uff1f\u6211\u60f3\u61c9\u8a72\u662f\u4e0d\u6703\u5427\uff0c\u310f\u310f\uff0c\u6709\u6d3b\u7684\u8a71\u518d\u6539\u984f\u8272\u8ddf\u66ab\u505c\u8a08\u6642\u5c31\u597d\u60f9")):n.a.createElement("div",null,"loading")}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.675c7077.chunk.js.map
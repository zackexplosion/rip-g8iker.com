(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Sad-Violin.d3d4c061.mp3"},function(e,t,a){e.exports=a.p+"static/media/screenshot.aa0ceab3.png"},function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/hand-click.766da886.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),i=a.n(l),r=a(1),s=a(2),o=a(4),d=a(3),m=a(5),u=a(8),v=a.n(u),g=a(9),h=a.n(g),p=(a(16),function(e){return c.a.createElement("div",null,c.a.createElement("img",{id:"play-button",src:a(17),className:"hand",width:80,alt:"play"}),c.a.createElement("audio",{id:"player",src:e.src,loop:!0,autoPlay:!0,preload:"true"}))}),y=function(e){var t=e.days,a=e.hours,n=e.minutes,l=e.seconds;return c.a.createElement("div",null,c.a.createElement("div",{className:"csvg-digit","data-tad-bind":"days"},c.a.createElement("div",{className:"csvg-digit-number",id:"el_dw1"},t),c.a.createElement("div",{className:"csvg-digit-label",id:"el_dw1t"},"days")),c.a.createElement("div",{className:"csvg-digit","data-tad-bind":"hours"},c.a.createElement("div",{className:"csvg-digit-number",id:"el_h1"},a),c.a.createElement("div",{className:"csvg-digit-label",id:"el_h1t"},"hours")),c.a.createElement("div",{className:"csvg-digit","data-tad-bind":"minutes"},c.a.createElement("div",{className:"csvg-digit-number",id:"el_m1"},n),c.a.createElement("div",{className:"csvg-digit-label",id:"el_m1t"},"minutes")),c.a.createElement("div",{className:"csvg-digit","data-tad-bind":"seconds"},c.a.createElement("div",{className:"csvg-digit-number",id:"el_s1"},l),c.a.createElement("div",{className:"csvg-digit-label",id:"el_s1t"},"seconds")))},E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getDistance(),setInterval(function(){e.getDistance()},1e3)}},{key:"getDistance",value:function(){var e=new Date("2019/01/14").getTime(),t=(new Date).getTime()-e,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3);this.setState({days:a,hours:n,minutes:c,seconds:l})}},{key:"paperClick",value:function(){window.gtag("event","click paper source")}},{key:"render",value:function(){return this.props.ready?c.a.createElement("div",null,c.a.createElement("h2",{className:"font-cursive"},"From time of death ","2019/01/14",", has been gone for.."),c.a.createElement(y,this.state),c.a.createElement("p",null,"\u958b\u5f88\u4e45\uff1f\u8f09\u5165\u5f88\u6162\u55ce\uff1f"),c.a.createElement("p",null,"\u5f88\u6b63\u5e38\uff0c\u56e0\u70ba\u6211\u4e5f\u300e\u5fd8\u4e86\u300f\u7e73\u4e3b\u6a5f\u8cbb"),c.a.createElement("p",null,"\u6240\u4ee5......"),c.a.createElement("p",null,"\u5230\u5e95\u6709\u6c92\u6709\u8981\u82b1\u9322\u8acb\u4eba\u4fee\u554aXD"),c.a.createElement("p",null,"\u61f6\u4eba\u5305: ",c.a.createElement("a",{onClick:this.paperClick,target:"_blank",href:"https://goo.gl/dcL5XY",rel:"noopener noreferrer"},"https://goo.gl/dcL5XY")),c.a.createElement("p",{className:"is-alive"},"\b\u5fa9\u6d3b\u4e86\u55ce\uff1f\u6211\u60f3\u61c9\u8a72\u662f\u4e0d\u6703\u5427\uff0c\u310f\u310f\uff0c\u6709\u6d3b\u7684\u8a71\u518d\u6539\u984f\u8272\u7136\u5f8c\u66ab\u505c\u8a08\u6642\u5c31\u597d\u60f9")):c.a.createElement("div",null)}}]),t}(c.a.Component),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={ready:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getPlayer",value:function(){return this._player||(this._player=document.getElementById("player")),this._player}},{key:"componentDidMount",value:function(){var e=this;this.getPlayer().addEventListener("play",function(t){console.log("player: start playing"),document.getElementById("play-button").style.display="none",window.gtag("event","played"),e.setState({ready:!0})}),document.body.addEventListener("click",function(t){e.getPlayer().play()})}},{key:"render",value:function(){var e=this.state.ready;return c.a.createElement("div",{className:"csvg-countdown hasWeeks"},c.a.createElement(p,{src:v.a,ready:e}),c.a.createElement("img",{className:"screenshot",src:h.a,alt:"black and white screenshot"}),c.a.createElement("h1",{className:"csvg-title font-cursive"},"In the memoery of  ",c.a.createElement("a",{target:"_blank",href:"https://G8iker.com",rel:"noopener noreferrer"},"G8iker.com")," ",c.a.createElement("br",null),"RIP"),c.a.createElement(E,{ready:e}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.75d799e0.chunk.js.map
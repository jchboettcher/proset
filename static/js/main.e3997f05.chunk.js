(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(t,e,i){"use strict";i.r(e);var n,s,r,o,a,h,c,l,p,d,u,f,b,x,j,v,m,g,O=i(2),w=i(83),y=i.n(w),k=i(112),E=i(53),S=i(10),T=i(14),M={colors:{primaryText:"#232323",mainBackground:"#F2F2F2"},fonts:{primary:{family:"Source Sans Pro, sans-serif",weight:400}}},A=i(86),B=i(95),C=i(97),N=i(85),R=i(18),z=new C.a({uri:"https://games-leaderboard-backend.herokuapp.com/",credentials:"include"}),I=new R.a((function(t,e){var i=localStorage.getItem("token");return i&&t.setContext({headers:{authorization:i}}),e(t)})),D=Object(N.a)((function(){})),F=new A.a({cache:new B.a,link:R.a.from([D,I,z])}),H=i(48),W=i(11),Y=T.b.div(n||(n=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  /* margin: 100px; */\n  /* background-color: palegoldenrod; */\n"]))),$=T.b.div(s||(s=Object(W.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),P=T.b.div(r||(r=Object(W.a)(["\n  padding: 0px 0px 80px 50px;\n  display: flex;\n  flex-direction: column;\n"]))),q=T.b.div(o||(o=Object(W.a)(["\n  display: flex;\n  justify-content: left;\n  /* width: 100vw;\n  height: 100%; */\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 10px;\n"]))),L=T.b.h1(a||(a=Object(W.a)(["\n  font-weight: bold;\n  font-size: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 0;\n"]))),G=(T.b.h3(h||(h=Object(W.a)(["\n  font-weight: bold;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),T.b.p(c||(c=Object(W.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n  /* margin-top: 10px; */\n  margin-bottom: 25px;\n"])))),_=T.b.td(l||(l=Object(W.a)(["\n  padding: 5px;\n  border: solid;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px;\n  border-color: black;\n  border-width: 1.5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),U=Object(T.b)(_)(p||(p=Object(W.a)(["\n  width: 35px;\n  max-width: 35px;\n"]))),X=Object(T.b)(_)(d||(d=Object(W.a)(["\n  width: 155px;\n  max-width: 155px;\n"]))),Q=Object(T.b)(_)(u||(u=Object(W.a)(["\n  width: 74px;\n  max-width: 74px;\n"]))),J=Object(T.b)(_)(f||(f=Object(W.a)(["\n  width: 113px;\n  max-width: 113px;\n"]))),Z=T.b.table(b||(b=Object(W.a)(["\n  border-collapse: collapse;\n  /* margin: 10px; */\n"]))),K=T.b.tbody(x||(x=Object(W.a)(["\n  background-color: rgb(247,247,247);\n"]))),V=T.b.thead(j||(j=Object(W.a)(["\n  font-weight: bold;\n  /* font-size: 18px; */\n  background-color: rgb(210,210,210);\n"]))),tt=T.b.h1(v||(v=Object(W.a)(["\n  margin-top: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n"]))),et=i(96),it=i(49),nt=i(50),st=i(92),rt=i.n(st),ot=i(35),at=Object(ot.a)(m||(m=Object(W.a)(["\n  query usersBy1($game: String!, $level: Int!, $limit: Int!) {\n    usersBy1(game: $game, level: $level, limit: $limit) {\n      id\n      name\n      game\n      level\n      score1\n      score2\n      createdAt\n    }\n  }\n"]))),ht=Object(ot.a)(g||(g=Object(W.a)(["\n  mutation addUser($input: AddUser!) {\n    addUser(input: $input) {\n      id\n      name\n      game\n      level\n      score1\n      score2\n      createdAt\n    }\n  }\n"]))),ct=i(5),lt=function(t){var e,i,n,s,r,o,a,h,c,l,p,d,u,f,b,x,j=t.level,v=t.setEntry,m=Object(S.g)(),g=Object(k.useQuery)(at,{variables:{game:"proset",level:parseInt(j),limit:bt},partialRefetch:!0,onError:function(t){},onCompleted:function(t){}}),O=g.data,w=(g.error,g.loading,Object(k.useMutation)(ht,{refetchQueries:[{query:at,variables:{game:"proset",level:parseInt(j),limit:bt}}],onError:function(t){},onCompleted:function(t){}})),y=Object(H.a)(w,2),E=y[0],T=y[1],M=(T.data,T.error,T.loading,120),A=20,B=80,C=M,N=[],R=[],z=[],I=[],D=["New","Deselect","Submit"],F=127.6,W=0,Y=function(t){e=parseInt(j),s=(i=5==e||6==e?600/7:M)/(2*(n=e>6?3:2)+1),r=Math.ceil((e+1)/2),o=[r,e+1-r],a=Math.pow(2,e),f=[t.color(20,20,240),t.color(230,0,0),t.color(0,210,0),t.color(20,20,240)],t.textSize(17),(u=D.map((function(e){return 1.21*t.textWidth(e)+34})))[3]=11,l=new _(2,t),c=new _(1,t),p=new _(0,t),d=new _(3,t),x=new L(B/3,40,t),b=new G(183.93333333333334,30,l.x-B-8-F,20,t);for(var h=4;h<10;h++)u[h]=u[3],I.push(new _(h,t)),f.push(t.color(20,20,240));(R=[t.color(255,0,0),t.color(255,255,0),t.color(0,0,255),t.color(0,128,0),t.color(255,0,255),t.color(0,255,0),t.color(0,255,255)]).push(t.color(0)),R.push(t.color(255));for(var v=0;v<9;v++){var m=v%n,g=(v-m)/n;N.push({r:m,c:g})}if(e>6){var O=[0,1,6,2,3,7,4,5,8];N.sort((function(t,e){return O[N.indexOf(t)]-O[N.indexOf(e)]}))}for(var w=e;w>=0;w--){var y=w<r?0:1,k=w%r,E=o[y]*(i+A)-A;z.push({x:-E/2+k*(i+A),y:140*y-130})}$(t)},$=function(t){h=[];for(var i=a-1;i>0;i--)h.push(new q(i.toString(2).padStart(e,"0").split("").map((function(t){return"1"==t})),t));for(var n=a-2;n>0;n--){var s=Math.floor(Math.random()*(n+1)),r=h[s];h[s]=h[n],h[n]=r}b.reset(),x.reset(),W=0},P=function(t){I.forEach((function(e){return e.visible=t}))},q=function(){function t(e,i){Object(it.a)(this,t),this.dots=e,this.selected=!1,this.angle=0,this.t=100,this.dir=i.random([-1,1]),this.dir*=i.random(.9,1.8),this.colort=1,this.entert=0,this.p5=i}return Object(nt.a)(t,[{key:"select",value:function(){this.selected=!this.selected,this.jiggle()}},{key:"jiggle",value:function(){this.t=0,this.dir=this.p5.random([-1,1]),this.dir*=this.p5.random(.9,1.8)}},{key:"alarm",value:function(){this.jiggle(),this.colort=0}},{key:"enter",value:function(){this.entert=1}},{key:"update",value:function(){this.t+=.3,this.angle=.1*this.dir*Math.pow(1.4,-this.t)*Math.sin(this.t),this.colort<1&&(this.colort+=.025),this.entert>0&&(this.entert-=.04)}},{key:"show",value:function(t){var n=t.x,r=t.y;if(this.p5.push(),this.p5.translate(n+i/2,r+60),this.p5.translate(0,this.p5.lerp(0,340,this.entert)),this.p5.stroke(0),this.p5.fill(255),this.p5.rotate(this.angle),this.selected){this.p5.scale(1.05),this.p5.strokeWeight(3),this.p5.colorMode(this.p5.HSB);var o=this.p5.color(5,97,100),a=this.p5.color(120,100,78);this.p5.colorMode(this.p5.RGB),this.p5.stroke(this.p5.lerpColor(o,a,this.colort))}this.p5.translate(-i/2,-60),this.p5.rect(0,0,i,C,5),this.p5.stroke(0),this.p5.strokeWeight(1);for(var h=0;h<e;h++)if(this.dots[h]){var c=N[h],l=c.r,p=c.c;this.p5.fill(R[h]),this.p5.ellipse((2*l+1.5)*s,(2*p+1.5)*s,1.25*s)}this.p5.pop()}}]),t}(),L=function(){function t(e,i,n){Object(it.a)(this,t),this.x=e,this.y=i,this.start=Date.now(),this.p5=n}return Object(nt.a)(t,[{key:"reset",value:function(){this.start=Date.now(),this.done=void 0}},{key:"end",value:function(){this.done=new Date(Date.now()-this.start)}},{key:"getTime",value:function(){return this.done?this.done:new Date(Date.now()-this.start)}},{key:"getTimeString",value:function(){var t=this.getTime();return["".concat(Math.floor(t.getTime()/36e5)),"".concat(this.pad(t.getMinutes()),":").concat(this.pad(t.getSeconds()),".").concat(this.pad(Math.floor(t.getMilliseconds()/10)))]}},{key:"pad",value:function(t){return(t<10?"0":"")+t}},{key:"show",value:function(){this.p5.push();var t=this.getTimeString(),e=Object(H.a)(t,2),i=e[0],n=e[1];this.p5.textSize(F/(4.17041015625+.55615234375*i.length)),this.p5.translate(this.x+F-this.p5.textWidth(":00:00.00"),this.y),this.p5.fill(0),this.p5.textAlign(this.p5.LEFT,this.p5.CENTER),this.p5.text(":"+n,0,0),this.p5.textAlign(this.p5.RIGHT,this.p5.CENTER),this.p5.text(i,0,0),this.p5.pop()}}]),t}(),G=function(){function t(e,i,n,s,r){Object(it.a)(this,t),this.x=e,this.y=i,this.w=n,this.h=s,this.reset(),this.p5=r}return Object(nt.a)(t,[{key:"reset",value:function(){this.t=0,this.prev=0,this.next=0}},{key:"update",value:function(t){this.t=0,this.prev=this.next,this.next+=t}},{key:"show",value:function(){this.t<1&&(this.t+=.04),this.p5.push(),this.p5.translate(this.x,this.y),this.p5.fill(255),this.p5.rect(0,0,this.w,this.h),this.p5.fill(0,200,0),this.p5.noStroke(),this.p5.rect(.5,.5,Math.max(this.p5.lerp(this.prev,this.next,this.t)/(a-1)*this.w-1,0),this.h-1);var t=Math.floor(this.p5.lerp(this.prev,this.next,this.t))+" / "+(a-1);this.p5.fill(0),this.p5.textSize(14),this.p5.translate(this.w-(this.h-11)/2,this.h/2),this.p5.textAlign(this.p5.RIGHT,this.p5.CENTER),this.p5.text(t,0,0),this.p5.pop()}}]),t}(),_=function(){function t(e,i){Object(it.a)(this,t),this.w=u[e],e>3&&(this.w*=1.7),this.h=e<3?30:this.w,this.txt=e<3?D[e]:""+e;var n=e<3?e+1:1,s=e<3?u.slice(0,n).reduce((function(t,e){return e+t}),0):2+this.w;this.x=i.width-30*n-s,this.y=25+(e<3?0:2),e>3&&(this.x-=(1-e%2)*this.w+.75,this.y+=Math.floor((e-2)/2)*this.h-this.h+u[e]+1.75),this.id=e,this.visible=e<4,this.corners=e<4?[1,1,1,1]:[4==e,5==e,9==e,8==e],this.p5=i}return Object(nt.a)(t,[{key:"over",value:function(){if(!this.visible)return!1;3==this.id&&(this.x-=1,this.y-=2,this.w+=3,this.h+=3);var t=this.p5.mouseX>=this.x&&this.p5.mouseX<this.x+this.w&&this.p5.mouseY>=this.y&&this.p5.mouseY<this.y+this.h;return 3==this.id&&(this.x+=1,this.y+=2,this.w-=3,this.h-=3),3!=this.id&&0!=this.id||(t=I.reduce((function(t,e){return t||e.over()}),t)),t}},{key:"show",value:function(){var t,e=this;if(this.visible){this.p5.push();var i=3!=this.id?!this.over():this.over()&&p.over()||!this.over()&&!p.over()||I[0].visible;if(this.p5.fill(i?f[this.id]:255),this.p5.stroke(this.id>=3?f[this.id]:i?0:f[this.id]),3!=this.id?this.p5.strokeWeight(this.id>3?1.5:i?1:1.5):this.p5.noStroke(),this.p5.translate(this.x+this.w/2,this.y+this.h/2),this.p5.rectMode(this.p5.CENTER),(t=this.p5).rect.apply(t,[0,0,this.w,this.h].concat(Object(et.a)(this.corners.map((function(t){return 5*t*(e.id<3?.7:.35)}))))),this.p5.noStroke(),3!=this.id)this.p5.textAlign(this.p5.CENTER,this.p5.CENTER),this.p5.fill(this.over()?f[this.id]:255),this.p5.textSize(this.id<3?17:14),this.p5.text(this.txt,0,0);else{var n=.6*this.w;this.p5.fill(i?255:f[this.id]),this.p5.translate(0,-.5),this.p5.triangle(-n/2,-n/(2*Math.sqrt(3)),n/2,-n/(2*Math.sqrt(3)),0,n/Math.sqrt(3))}this.p5.pop()}}}]),t}();return Object(ct.jsx)(rt.a,{setup:function(t,e){t.createCanvas(840,460).parent(e),Y(t)},draw:function(t){if(t.background(247),t.push(),t.fill(210),t.rect(.5,.5,t.width-1,79),h){d.over()?P(!0):d.over()||p.over()||P(!1),l.show(),c.show(),p.show(),d.show(),I.forEach((function(t){return t.show()})),b.show(),x.show(),t.translate(t.width/2,t.height/2+40);for(var i=0;i<e+1;i++){var n=h[i];n&&(n.show(z[i]),n.update())}if(x.done){if(t.textAlign(t.CENTER,t.CENTER),t.textSize(70),t.fill(0),t.textStyle(t.BOLDITALIC),t.text("Good job!",0,0),5==W){var s=x.getTime().getTime();s=10*Math.floor(s/10);var r=!0;if(O.usersBy1.length==bt&&(r=O.usersBy1[bt-1].score1>s,console.log(r,s,O.usersBy1)),r){var o=prompt("You made the leaderboard! Name?");v({name:o=o||"anon.",score1:s}),E({variables:{input:{name:o,game:"proset",level:e,score1:s,score2:0}}})}}b.t>.95&&(W+=1)}}else Y(t);t.pop()},mousePressed:function(t){if(h){for(var n=0;n<e+1;n++){var s=z[n],r=s.x,o=s.y;r+=t.width/2,o+=t.height/2+40,t.mouseX>=r&&t.mouseX<r+i&&t.mouseY>=o&&t.mouseY<o+C&&h[n]&&h[n].select()}if(c.over())h.slice(0,e+1).forEach((function(t){t&&t.selected&&t.select()}));else if(p.over())if(d.over()){var u=I.reduce((function(t,e){return e.over()?e:t}),null);if(u){P(!1);var f=u.id;f!=e?m.push("".concat(f)):$(t)}}else P(!1),$(t);else l.over()&&function(){var t=h.slice(0,e+1).filter((function(t){return!!t&&t.selected}));0==t.reduce((function(t,e){return e.dots.map((function(e,i){return e+t[i]}))}),Array(e).fill(0)).reduce((function(t,e){return t+e%2}),0)?(t.forEach((function(t){var i=h.indexOf(t);h[i]=h[e+1],h[i]&&h[i].enter(),h.splice(e+1,1)})),b.update(t.length),b.next==a-1&&x.end()):t.forEach((function(t){return t.alarm()}))}()}}})},pt=i(39),dt=function(t){var e=t.index,i=t.name,n=t.score1,s=t.createdAt,r=t.bold,o=function(t){return(t<10?"0":"")+t},a={},h={};return r&&(a.fontWeight="bold",h.fontWeight="bold"),"anon."==i&&(h.fontStyle="italic"),Object(ct.jsxs)("tr",{children:[Object(ct.jsx)(U,{style:a,children:"".concat(e+1)}),Object(ct.jsx)(X,{style:h,children:"".concat(i)}),Object(ct.jsx)(Q,{style:a,children:"".concat(function(t){var e=Math.floor(t/36e5);t%=36e5;var i=Math.floor(t/6e4);t%=6e4;var n=Math.floor(t/1e3);t%=1e3;var s=Math.floor(t/10);return"".concat(e,":").concat(o(i),":").concat(o(n),".").concat(o(s))}(n))}),Object(ct.jsx)(J,{style:a,children:"".concat(function(t){var e=t.substring(0,10),i=t.substring(11,19),n=new Date(e+"T"+i+"+00:00"),s=n.toLocaleDateString("en-US",{timeZone:"America/New_York",day:"numeric",month:"numeric",year:"2-digit"});return n.toLocaleTimeString("en-GB",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",second:"numeric"})+", "+s}(s))})]})},ut=function(t){return Object(ct.jsx)(ct.Fragment,{children:t.index?(t.index,Object(ct.jsx)(dt,Object(pt.a)({},t))):Object(ct.jsx)(dt,Object(pt.a)({},t))})},ft=function(t){var e=t.level,i=t.boldEntry,n=Object(k.useQuery)(at,{variables:{game:"proset",level:parseInt(e),limit:bt},partialRefetch:!0,onError:function(t){},onCompleted:function(t){}}),s=n.data,r=n.error,o=n.loading;return Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsxs)(Z,{children:[Object(ct.jsx)(V,{children:Object(ct.jsxs)("tr",{children:[Object(ct.jsx)(U,{children:"Rank"}),Object(ct.jsx)(X,{id:"Name",children:"Name"}),Object(ct.jsx)(Q,{children:"Time"}),Object(ct.jsx)(J,{children:"Timestamp (ET)"})]})}),Object(ct.jsx)(K,{children:o||r||function(t){var e=null;console.log(i);for(var n=0;n<t.usersBy1.length;n++){var s=t.usersBy1[n];console.log(s),s&&(s.bold=!1),s&&i&&i.name==s.name&&i.score1==s.score1&&(e=n)}return console.log(e),null!=e&&(t.usersBy1[e].bold=!0),t}(s).usersBy1.map((function(t){return t?Object(ct.jsx)(ut,Object(pt.a)({index:s.usersBy1.indexOf(t)},t),t.id):""}))})]}),o&&Object(ct.jsx)(G,{children:"Fetching data..."}),r&&Object(ct.jsx)(G,{children:"Failed to fetch data, try refreshing the page."})]})},bt=200,xt=function(){var t=Object(S.h)().level;Object(O.useEffect)((function(){document.title="ProSet - ".concat(t)}),[]);var e=Object(O.useState)({}),i=Object(H.a)(e,2),n=i[0],s=i[1];return Object(ct.jsx)(q,{children:Object(ct.jsxs)(Y,{children:[Object(ct.jsx)(L,{children:"Projective Set"}),Object(ct.jsxs)(G,{children:[Object(ct.jsx)("a",{href:"https://en.wikipedia.org/wiki/Projective_Set_(game)",children:"ProSet"})," is a logic game based on the older game ",Object(ct.jsx)("a",{href:"https://en.wikipedia.org/wiki/Set_(game)",children:"Set"}),'. The goal is to go through the entire deck of cards by identifying "sets" in the current hand. Cards form a set when the aggregate number of dots of each color is an even number. Every card is unique: every possible card within the appropriate number of dots is in the deck exactly once (except for the trivial blank card). When you submit a valid set, those cards will disappear and you\'ll be dealt new cards to fill their spots. You win when you deplete the whole deck.']}),Object(ct.jsxs)($,{children:[Object(ct.jsx)(lt,{level:t,setEntry:s}),Object(ct.jsxs)(P,{children:[Object(ct.jsx)(tt,{children:"Leaderboard (top ".concat(bt,")")}),Object(ct.jsx)(ft,{level:t,boldEntry:n})]})]})]})})},jt=function(){return Object(ct.jsx)(E.a,{basename:"/proset",children:Object(ct.jsx)(T.a,{theme:M,children:Object(ct.jsx)(k.ApolloProvider,{client:F,children:Object(ct.jsx)("div",{className:"App",children:Object(ct.jsxs)(S.d,{children:[Object(ct.jsx)(S.b,{exact:!0,path:"/:level(4|5|6|7|8|9)",component:xt}),Object(ct.jsx)(S.a,{to:"/6"})]})})})})})};y.a.render(Object(ct.jsx)(jt,{}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.e3997f05.chunk.js.map
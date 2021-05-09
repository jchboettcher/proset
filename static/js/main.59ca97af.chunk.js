(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(t,e,i){"use strict";i.r(e);var n,s,r,o,h,a,c,l,p,d,u,f,b,v,j,x,m,g=i(2),O=i(83),y=i.n(O),w=i(112),k=i(53),E=i(10),S=i(16),M={colors:{primaryText:"#232323",mainBackground:"#F2F2F2"},fonts:{primary:{family:"Source Sans Pro, sans-serif",weight:400}}},T=i(86),A=i(95),C=i(97),I=i(85),R=i(18),z=new C.a({uri:"https://games-leaderboard-backend.herokuapp.com/",credentials:"include"}),B=new R.a((function(t,e){var i=localStorage.getItem("token");return i&&t.setContext({headers:{authorization:i}}),e(t)})),N=Object(I.a)((function(){})),D=new T.a({cache:new A.a,link:R.a.from([N,B,z])}),F=i(48),H=i(13),W=S.b.div(n||(n=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  /* margin: 100px; */\n  /* background-color: palegoldenrod; */\n"]))),$=S.b.div(s||(s=Object(H.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),P=S.b.div(r||(r=Object(H.a)(["\n  padding: 0px 0px 80px 50px;\n  display: flex;\n  flex-direction: column;\n"]))),q=S.b.div(o||(o=Object(H.a)(["\n  display: flex;\n  justify-content: left;\n  /* width: 100vw;\n  height: 100%; */\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 10px;\n"]))),Y=S.b.h1(h||(h=Object(H.a)(["\n  font-weight: bold;\n  font-size: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 0;\n"]))),G=(S.b.h3(a||(a=Object(H.a)(["\n  font-weight: bold;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),S.b.p(c||(c=Object(H.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n  /* margin-top: 10px; */\n  margin-bottom: 25px;\n"])))),L=S.b.td(l||(l=Object(H.a)(["\n  padding: 6px;\n  border: solid;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n  border-color: black;\n  border-width: 1.5px;\n"]))),X=Object(S.b)(L)(p||(p=Object(H.a)(["\n  width: 50px;\n"]))),Q=Object(S.b)(L)(d||(d=Object(H.a)(["\n  width: 100px;\n"]))),U=Object(S.b)(L)(u||(u=Object(H.a)(["\n  width: 200px;\n"]))),_=S.b.table(f||(f=Object(H.a)(["\n  border-collapse: collapse;\n  /* margin: 10px; */\n"]))),J=S.b.tbody(b||(b=Object(H.a)(["\n  background-color: rgb(247,247,247);\n"]))),K=S.b.thead(v||(v=Object(H.a)(["\n  font-weight: bold;\n  /* font-size: 18px; */\n  background-color: rgb(210,210,210);\n"]))),V=S.b.h1(j||(j=Object(H.a)(["\n  margin-top: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n"]))),Z=i(96),tt=i(49),et=i(50),it=i(92),nt=i.n(it),st=i(35),rt=Object(st.a)(x||(x=Object(H.a)(["\n  query usersBy1($game: String!, $level: Int!, $limit: Int!) {\n    usersBy1(game: $game, level: $level, limit: $limit) {\n      id\n      name\n      game\n      level\n      score1\n      score2\n      createdAt\n    }\n  }\n"]))),ot=Object(st.a)(m||(m=Object(H.a)(["\n  mutation addUser($input: AddUser!) {\n    addUser(input: $input) {\n      id\n      name\n      game\n      level\n      score1\n      score2\n      createdAt\n    }\n  }\n"]))),ht=i(5),at=function(t){var e,i,n,s,r,o,h,a,c,l,p,d,u,f,b,v,j=t.level,x=t.setEntry,m=Object(E.g)(),g=Object(w.useQuery)(rt,{variables:{game:"proset",level:parseInt(j),limit:ut},partialRefetch:!0,onError:function(t){},onCompleted:function(t){}}),O=g.data,y=(g.error,g.loading,Object(w.useMutation)(ot,{refetchQueries:[{query:rt,variables:{game:"proset",level:parseInt(j),limit:ut}}],onError:function(t){},onCompleted:function(t){}})),k=Object(F.a)(y,2),S=k[0],M=k[1],T=(M.data,M.error,M.loading,120),A=20,C=80,I=T,R=[],z=[],B=[],N=[],D=["New","Deselect","Submit"],H=127.6,W=0,$=function(t){e=parseInt(j),s=(i=5==e||6==e?600/7:T)/(2*(n=e>6?3:2)+1),r=Math.ceil((e+1)/2),o=[r,e+1-r],h=Math.pow(2,e),f=[t.color(20,20,240),t.color(230,0,0),t.color(0,210,0),t.color(20,20,240)],t.textSize(17),(u=D.map((function(e){return 1.21*t.textWidth(e)+34})))[3]=11,l=new X(2,t),c=new X(1,t),p=new X(0,t),d=new X(3,t),v=new G(C/3,40,t),b=new L(183.93333333333334,30,l.x-C-8-H,20,t);for(var a=4;a<10;a++)u[a]=u[3],N.push(new X(a,t)),f.push(t.color(20,20,240));(z=[t.color(255,0,0),t.color(255,255,0),t.color(0,0,255),t.color(0,128,0),t.color(255,0,255),t.color(0,255,0),t.color(0,255,255)]).push(t.color(0)),z.push(t.color(255));for(var x=0;x<9;x++){var m=x%n,g=(x-m)/n;R.push({r:m,c:g})}if(e>6){var O=[0,1,6,2,3,7,4,5,8];R.sort((function(t,e){return O[R.indexOf(t)]-O[R.indexOf(e)]}))}for(var y=e;y>=0;y--){var w=y<r?0:1,k=y%r,E=o[w]*(i+A)-A;B.push({x:-E/2+k*(i+A),y:140*w-130})}P(t)},P=function(t){a=[];for(var i=h-1;i>0;i--)a.push(new Y(i.toString(2).padStart(e,"0").split("").map((function(t){return"1"==t})),t));for(var n=h-2;n>0;n--){var s=Math.floor(Math.random()*(n+1)),r=a[s];a[s]=a[n],a[n]=r}b.reset(),v.reset(),W=0},q=function(t){N.forEach((function(e){return e.visible=t}))},Y=function(){function t(e,i){Object(tt.a)(this,t),this.dots=e,this.selected=!1,this.angle=0,this.t=100,this.dir=i.random([-1,1]),this.dir*=i.random(.9,1.8),this.colort=1,this.entert=0,this.p5=i}return Object(et.a)(t,[{key:"select",value:function(){this.selected=!this.selected,this.jiggle()}},{key:"jiggle",value:function(){this.t=0,this.dir=this.p5.random([-1,1]),this.dir*=this.p5.random(.9,1.8)}},{key:"alarm",value:function(){this.jiggle(),this.colort=0}},{key:"enter",value:function(){this.entert=1}},{key:"update",value:function(){this.t+=.3,this.angle=.1*this.dir*Math.pow(1.4,-this.t)*Math.sin(this.t),this.colort<1&&(this.colort+=.025),this.entert>0&&(this.entert-=.04)}},{key:"show",value:function(t){var n=t.x,r=t.y;if(this.p5.push(),this.p5.translate(n+i/2,r+60),this.p5.translate(0,this.p5.lerp(0,340,this.entert)),this.p5.stroke(0),this.p5.fill(255),this.p5.rotate(this.angle),this.selected){this.p5.scale(1.05),this.p5.strokeWeight(3),this.p5.colorMode(this.p5.HSB);var o=this.p5.color(5,97,100),h=this.p5.color(120,100,78);this.p5.colorMode(this.p5.RGB),this.p5.stroke(this.p5.lerpColor(o,h,this.colort))}this.p5.translate(-i/2,-60),this.p5.rect(0,0,i,I,5),this.p5.stroke(0),this.p5.strokeWeight(1);for(var a=0;a<e;a++)if(this.dots[a]){var c=R[a],l=c.r,p=c.c;this.p5.fill(z[a]),this.p5.ellipse((2*l+1.5)*s,(2*p+1.5)*s,1.25*s)}this.p5.pop()}}]),t}(),G=function(){function t(e,i,n){Object(tt.a)(this,t),this.x=e,this.y=i,this.start=Date.now(),this.p5=n}return Object(et.a)(t,[{key:"reset",value:function(){this.start=Date.now(),this.done=void 0}},{key:"end",value:function(){this.done=new Date(Date.now()-this.start)}},{key:"getTime",value:function(){return this.done?this.done:new Date(Date.now()-this.start)}},{key:"getTimeString",value:function(){var t=this.getTime();return["".concat(Math.floor(t.getTime()/36e5)),"".concat(this.pad(t.getMinutes()),":").concat(this.pad(t.getSeconds()),".").concat(this.pad(Math.floor(t.getMilliseconds()/10)))]}},{key:"pad",value:function(t){return(t<10?"0":"")+t}},{key:"show",value:function(){this.p5.push();var t=this.getTimeString(),e=Object(F.a)(t,2),i=e[0],n=e[1];this.p5.textSize(H/(4.17041015625+.55615234375*i.length)),this.p5.translate(this.x+H-this.p5.textWidth(":00:00.00"),this.y),this.p5.fill(0),this.p5.textAlign(this.p5.LEFT,this.p5.CENTER),this.p5.text(":"+n,0,0),this.p5.textAlign(this.p5.RIGHT,this.p5.CENTER),this.p5.text(i,0,0),this.p5.pop()}}]),t}(),L=function(){function t(e,i,n,s,r){Object(tt.a)(this,t),this.x=e,this.y=i,this.w=n,this.h=s,this.reset(),this.p5=r}return Object(et.a)(t,[{key:"reset",value:function(){this.t=0,this.prev=0,this.next=0}},{key:"update",value:function(t){this.t=0,this.prev=this.next,this.next+=t}},{key:"show",value:function(){this.t<1&&(this.t+=.04),this.p5.push(),this.p5.translate(this.x,this.y),this.p5.fill(255),this.p5.rect(0,0,this.w,this.h),this.p5.fill(0,200,0),this.p5.noStroke(),this.p5.rect(.5,.5,Math.max(this.p5.lerp(this.prev,this.next,this.t)/(h-1)*this.w-1,0),this.h-1);var t=Math.floor(this.p5.lerp(this.prev,this.next,this.t))+" / "+(h-1);this.p5.fill(0),this.p5.textSize(14),this.p5.translate(this.w-(this.h-11)/2,this.h/2),this.p5.textAlign(this.p5.RIGHT,this.p5.CENTER),this.p5.text(t,0,0),this.p5.pop()}}]),t}(),X=function(){function t(e,i){Object(tt.a)(this,t),this.w=u[e],e>3&&(this.w*=1.7),this.h=e<3?30:this.w,this.txt=e<3?D[e]:""+e;var n=e<3?e+1:1,s=e<3?u.slice(0,n).reduce((function(t,e){return e+t}),0):2+this.w;this.x=i.width-30*n-s,this.y=25+(e<3?0:2),e>3&&(this.x-=(1-e%2)*this.w+.75,this.y+=Math.floor((e-2)/2)*this.h-this.h+u[e]+1.75),this.id=e,this.visible=e<4,this.corners=e<4?[1,1,1,1]:[4==e,5==e,9==e,8==e],this.p5=i}return Object(et.a)(t,[{key:"over",value:function(){if(!this.visible)return!1;3==this.id&&(this.x-=1,this.y-=2,this.w+=3,this.h+=3);var t=this.p5.mouseX>=this.x&&this.p5.mouseX<this.x+this.w&&this.p5.mouseY>=this.y&&this.p5.mouseY<this.y+this.h;return 3==this.id&&(this.x+=1,this.y+=2,this.w-=3,this.h-=3),3!=this.id&&0!=this.id||(t=N.reduce((function(t,e){return t||e.over()}),t)),t}},{key:"show",value:function(){var t,e=this;if(this.visible){this.p5.push();var i=3!=this.id?!this.over():this.over()&&p.over()||!this.over()&&!p.over()||N[0].visible;if(this.p5.fill(i?f[this.id]:255),this.p5.stroke(this.id>=3?f[this.id]:i?0:f[this.id]),3!=this.id?this.p5.strokeWeight(this.id>3?1.5:i?1:1.5):this.p5.noStroke(),this.p5.translate(this.x+this.w/2,this.y+this.h/2),this.p5.rectMode(this.p5.CENTER),(t=this.p5).rect.apply(t,[0,0,this.w,this.h].concat(Object(Z.a)(this.corners.map((function(t){return 5*t*(e.id<3?.7:.35)}))))),this.p5.noStroke(),3!=this.id)this.p5.textAlign(this.p5.CENTER,this.p5.CENTER),this.p5.fill(this.over()?f[this.id]:255),this.p5.textSize(this.id<3?17:14),this.p5.text(this.txt,0,0);else{var n=.6*this.w;this.p5.fill(i?255:f[this.id]),this.p5.translate(0,-.5),this.p5.triangle(-n/2,-n/(2*Math.sqrt(3)),n/2,-n/(2*Math.sqrt(3)),0,n/Math.sqrt(3))}this.p5.pop()}}}]),t}();return Object(ht.jsx)(nt.a,{setup:function(t,e){t.createCanvas(840,460).parent(e),$(t)},draw:function(t){if(t.background(247),t.push(),t.fill(210),t.rect(.5,.5,t.width-1,79),a){d.over()?q(!0):d.over()||p.over()||q(!1),l.show(),c.show(),p.show(),d.show(),N.forEach((function(t){return t.show()})),b.show(),v.show(),t.translate(t.width/2,t.height/2+40);for(var i=0;i<e+1;i++){var n=a[i];n&&(n.show(B[i]),n.update())}if(v.done){if(t.textAlign(t.CENTER,t.CENTER),t.textSize(70),t.fill(0),t.textStyle(t.BOLDITALIC),t.text("Good job!",0,0),5==W){var s=v.getTime().getTime();s=10*Math.floor(s/10);var r=!0;if(O.usersBy1.length==ut?(r=O.usersBy1[9].score1>s,console.log(r,s,O.usersBy1)):console.log("nope"),r){var o=prompt("You made the leaderboard! Initials?");x({name:o=o||"anon.",score1:s}),S({variables:{input:{name:o,game:"proset",level:e,score1:s,score2:0}}})}}b.t>.95&&(W+=1)}}else $(t);t.pop()},mousePressed:function(t){if(a){for(var n=0;n<e+1;n++){var s=B[n],r=s.x,o=s.y;r+=t.width/2,o+=t.height/2+40,t.mouseX>=r&&t.mouseX<r+i&&t.mouseY>=o&&t.mouseY<o+I&&a[n]&&a[n].select()}if(c.over())a.slice(0,e+1).forEach((function(t){t&&t.selected&&t.select()}));else if(p.over())if(d.over()){var u=N.reduce((function(t,e){return e.over()?e:t}),null);if(u){q(!1);var f=u.id;f!=e?m.push("".concat(f)):P(t)}}else q(!1),P(t);else l.over()&&function(){var t=a.slice(0,e+1).filter((function(t){return!!t&&t.selected}));0==t.reduce((function(t,e){return e.dots.map((function(e,i){return e+t[i]}))}),Array(e).fill(0)).reduce((function(t,e){return t+e%2}),0)?(t.forEach((function(t){var i=a.indexOf(t);a[i]=a[e+1],a[i]&&a[i].enter(),a.splice(e+1,1)})),b.update(t.length),b.next==h-1&&v.end()):t.forEach((function(t){return t.alarm()}))}()}}})},ct=i(39),lt=function(t){var e=t.index,i=t.name,n=t.score1,s=t.bold,r=function(t){return(t<10?"0":"")+t},o={},h={};return s&&(o.fontWeight="bold",h.fontWeight="bold"),"anon."==i&&(h.fontStyle="italic"),Object(ht.jsxs)("tr",{children:[Object(ht.jsx)(X,{style:o,children:"".concat(e+1)}),Object(ht.jsx)(Q,{style:h,children:"".concat(i)}),Object(ht.jsx)(U,{style:o,children:"".concat(function(t){var e=Math.floor(t/36e5);t%=36e5;var i=Math.floor(t/6e4);t%=6e4;var n=Math.floor(t/1e3);t%=1e3;var s=Math.floor(t/10);return"".concat(e,":").concat(r(i),":").concat(r(n),".").concat(r(s))}(n))})]})},pt=function(t){var e=t.index,i=t.name,n=t.score1,s=t.boldEntry,r={index:e,name:i,score1:n,bold:s.name==i&&s.score1==n};return Object(ht.jsx)(ht.Fragment,{children:Object(ht.jsx)(lt,Object(ct.a)({},r))})},dt=function(t){var e=t.level,i=t.boldEntry,n=Object(w.useQuery)(rt,{variables:{game:"proset",level:parseInt(e),limit:ut},partialRefetch:!0,onError:function(t){},onCompleted:function(t){}}),s=n.data,r=n.error,o=n.loading;return Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsxs)(_,{children:[Object(ht.jsx)(K,{children:Object(ht.jsxs)("tr",{children:[Object(ht.jsx)(X,{children:"Rank"}),Object(ht.jsx)(Q,{children:"Initials"}),Object(ht.jsx)(U,{children:"Time"})]})}),Object(ht.jsx)(J,{children:o||r||s.usersBy1.map((function(t){return t?Object(ht.jsx)(pt,Object(ct.a)({index:s.usersBy1.indexOf(t),boldEntry:i},t),t.id):""}))})]}),o&&Object(ht.jsx)(G,{children:"Fetching data..."}),r&&Object(ht.jsx)(G,{children:"Failed to fetch data, try refreshing the page."})]})},ut=25,ft=function(){var t=Object(E.h)().level;Object(g.useEffect)((function(){document.title="ProSet - ".concat(t)}),[]);var e=Object(g.useState)({}),i=Object(F.a)(e,2),n=i[0],s=i[1];return Object(ht.jsx)(q,{children:Object(ht.jsxs)(W,{children:[Object(ht.jsx)(Y,{children:"Projective Set"}),Object(ht.jsxs)(G,{children:[Object(ht.jsx)("a",{href:"https://en.wikipedia.org/wiki/Projective_Set_(game)",children:"ProSet"})," is a logic game based on the older game ",Object(ht.jsx)("a",{href:"https://en.wikipedia.org/wiki/Set_(game)",children:"Set"}),'. The goal is to go through the entire deck of cards by identifying "sets" in the current hand. Cards form a set when the aggregate number of dots of each color is an even number. Every card is unique: every possible card within the appropriate number of dots is in the deck exactly once (except for the trivial blank card). When you submit a valid set, those cards will disappear and you\'ll be dealt new cards to fill their spots. You win when you deplete the whole deck.']}),Object(ht.jsxs)($,{children:[Object(ht.jsx)(at,{level:t,setEntry:s}),Object(ht.jsxs)(P,{children:[Object(ht.jsx)(V,{children:"Leaderboard (top 25)"}),Object(ht.jsx)(dt,{level:t,boldEntry:n})]})]})]})})},bt=function(){return Object(ht.jsx)(k.a,{basename:"/proset",children:Object(ht.jsx)(S.a,{theme:M,children:Object(ht.jsx)(w.ApolloProvider,{client:D,children:Object(ht.jsx)("div",{className:"App",children:Object(ht.jsxs)(E.d,{children:[Object(ht.jsx)(E.b,{exact:!0,path:"/:level(4|5|6|7|8|9)",component:ft}),Object(ht.jsx)(E.a,{to:"/4"})]})})})})})};y.a.render(Object(ht.jsx)(bt,{}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.59ca97af.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},228:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),r=a.n(o),i=(a(99),a(100),a(84)),c=a(19),s=a(20),m=a(22),u=a(21),d=a(23),h=a(91),p=a(87),f=a.n(p),k=a(88),E=a.n(k),g=a(24),w=a.n(g),_=a(25),N=a.n(_),b=a(89),v=a.n(b),C=a(26),L=a.n(C),O=a(2),x=a.n(O),y=a(90),F=a.n(y),j=a(51),S=a.n(j),B=a(52),R=a.n(B),I=a(86),M=a.n(I),T=(a(101),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={more:null,info:null,domain:null,school:null,group:null,local_library:null,drawer:!1},a.handleClose=function(){a.setState({more:null,info:null,domain:null,school:null,group:null,local_library:null})},a.toggleDrawer=function(e,t){return function(){a.setState(Object(i.a)({},e,t))}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.more,o=a.info,r=a.domain,i=a.school,c=a.group,s=a.local_library,m=l.a.createElement("div",{className:t.list},l.a.createElement(S.a,null,[{text:"\u042d\u043b\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0432\u044d\u0431",link:"http://203.217.139.22/darkhan/loginesh.aspx"},{text:"\u0411\u0430\u0433\u0448\u0438\u0439\u043d \u0432\u0435\u0431",link:"http://unimis.stda.edu.mn/teacher/"},{text:"\u041e\u044e\u0443\u0442\u043d\u044b \u0432\u0435\u0431",link:"http://unimis.stda.edu.mn/student/"},{text:"\u04e8\u04e9\u0440\u0438\u0439\u043d \u04af\u043d\u044d\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0432\u044d\u0431",link:"http://sas.stda.edu.mn/"},{text:"\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442\u0447\u0438\u043b\u043b\u044b\u043d \u0432\u044d\u0431",link:"http://unimis.stda.edu.mn/attest/"},{text:"\u0422\u04e9\u0433\u0441\u04e9\u0433\u0447\u0434\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u044d\u043b \u0448\u04af\u04af\u0445",link:"http://unimis.stda.edu.mn/search/"},{text:"\u041d\u043e\u043c\u044b\u043d \u0441\u0430\u043d\u0433\u0438\u0439\u043d \u0432\u0435\u0431",link:"http://stda.edu.mn/library"},{text:"Moodle \u0441\u0438\u0441\u0442\u0435\u043c",link:"http://stda.edu.mn/moodle"},{text:"\u0414\u043e\u0442\u043e\u043e\u0434 \u0444\u0430\u0439\u043b \u0441\u0435\u0440\u0432\u044d\u0440",link:"http://192.168.10.105/owncloud"},{text:"\u0414\u043e\u0442\u043e\u043e\u0434 \u0437\u0430\u0430\u0432\u0430\u0440\u0447\u0438\u043b\u0433\u0430\u0430",link:"http://stda.edu.mn/guide/"},{text:"\u0428\u0423\u0422\u0418\u0421 \u0442\u04e9\u0432 \u0441\u0430\u0439\u0442",link:"http://must.edu.mn"},{text:"\u042d\u0440\u0434\u044d\u043c \u0448\u0438\u043d\u0436\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0432\u0435\u0431",link:"http://www.unimis.edu.mn/buteel/"},{text:"\u0428\u0423\u0422 \u0442\u04e9\u0432 \u043d\u043e\u043c\u044b\u043d \u0441\u0430\u043d",link:"http://www.must-library.edu.mn/"},{text:"\u041e\u044e\u0443\u0442\u043d\u044b \u0445\u043e\u043b\u0431\u043e\u043e",link:"http://oyutan.must.edu.mn/"}].map(function(e,t){return l.a.createElement(R.a,{button:!0,key:t,onClick:function(){return window.location.href=e.link}},l.a.createElement(M.a,{primary:e.text,className:"drawer--link"}))})));return l.a.createElement("div",{className:t.root},l.a.createElement(f.a,{position:"fixed"},l.a.createElement(E.a,{className:"dev-nav"},l.a.createElement(w.a,{id:"drawer",className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer("drawer",!0)},l.a.createElement(v.a,null)),l.a.createElement("div",{className:"nav--link"},l.a.createElement("a",{href:"/",className:t.link},l.a.createElement("span",{className:t.grow},"\u041f\u0440\u043e\u0433\u0440\u0430\u043c \u0425\u0430\u043d\u0433\u0430\u043c\u0436"))),l.a.createElement("div",{className:"nav--button"},l.a.createElement(N.a,{title:"\u0422\u0430\u043d\u0438\u043b\u0446\u0443\u0443\u043b\u0433\u0430",placement:"bottom"},l.a.createElement(w.a,{className:t.button,"aria-owns":o?"simple-menu":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(t){return e.setState({info:t.currentTarget})}},l.a.createElement("i",{className:"material-icons"},"info"))),l.a.createElement(N.a,{title:"\u0421\u0430\u043b\u0431\u0430\u0440",placement:"bottom"},l.a.createElement(w.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(t){return e.setState({domain:t.currentTarget})}},l.a.createElement("i",{className:"material-icons"},"domain"))),l.a.createElement(N.a,{title:"\u0421\u0443\u0440\u0433\u0430\u043b\u0442",placement:"bottom"},l.a.createElement(w.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(t){return e.setState({school:t.currentTarget})}},l.a.createElement("i",{className:"material-icons"},"school"))),l.a.createElement(N.a,{title:"\u041e\u044e\u0443\u0442\u0430\u043d",placement:"bottom"},l.a.createElement(w.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(t){return e.setState({group:t.currentTarget})}},l.a.createElement("i",{className:"material-icons"},"group"))),l.a.createElement(N.a,{title:"\u042d\u0440\u0434\u044d\u043c \u0448\u0438\u043d\u0436\u0438\u043b\u0433\u044d\u044d",placement:"bottom"},l.a.createElement(w.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(t){return e.setState({local_library:t.currentTarget})}},l.a.createElement("i",{className:"material-icons"},"local_library"))),l.a.createElement(N.a,{title:"\u0411\u0443\u0441\u0430\u0434",placement:"bottom"},l.a.createElement(w.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",color:"inherit",onClick:function(t){return e.setState({more:t.currentTarget})}},l.a.createElement("i",{className:"material-icons"},"more_vert")))),l.a.createElement(L.a,{anchorEl:o,open:Boolean(o),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=8"}},"\u0417\u0430\u0445\u0438\u0440\u043b\u044b\u043d \u043c\u044d\u043d\u0434\u0447\u0438\u043b\u0433\u044d\u044d"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=10"}},"\u0422\u04af\u04af\u0445\u044d\u043d \u0437\u0430\u043c\u043d\u0430\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=16"}},"\u0411\u04af\u0442\u044d\u0446"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=12"}},"\u0417\u0430\u0445\u0438\u0440\u043b\u044b\u043d \u0437\u04e9\u0432\u043b\u04e9\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=14"}},"\u0411\u0430\u0433\u0448 \u0445\u04e9\u0433\u0436\u043b\u0438\u0439\u043d \u0442\u04e9\u0432"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=2196"}},"\u0401\u0441 \u0437\u04af\u0439\u043d \u0437\u04e9\u0432\u043b\u04e9\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=18"}},"\u0421\u0430\u043d\u0445\u04af\u04af \u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0430\u043b\u0431\u0430")),l.a.createElement(L.a,{anchorEl:r,open:Boolean(r),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=20"}},"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439\u043d \u0441\u0430\u043b\u0431\u0430\u0440"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=33"}},"\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u0447\u043b\u044d\u043b\u0438\u0439\u043d \u0441\u0430\u043b\u0431\u0430\u0440"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=6488"}},"\u042d\u0440\u0447\u0438\u043c \u0445\u04af\u0447 \u043c\u044d\u0434\u044d\u044d\u043b\u043b\u0438\u0439\u043d \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439\u043d \u0441\u0430\u043b\u0431\u0430\u0440"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=22"}},"\u0421\u0443\u0443\u0440\u044c \u0448\u0438\u043d\u0436\u043b\u044d\u0445 \u0443\u0445\u0430\u0430\u043d\u044b \u0442\u044d\u043d\u0445\u0438\u043c")," ",l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=1719"}},"\u041b\u0438\u0446\u0435\u0439 \u0441\u0443\u0440\u0433\u0443\u0443\u043b\u044c")),l.a.createElement(L.a,{anchorEl:i,open:Boolean(i),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=35"}},"\u0421\u0443\u0440\u0433\u0430\u043b\u0442\u044b\u043d \u0430\u043b\u0431\u0430, \u043d\u043e\u043c\u044b\u043d \u0441\u0430\u043d"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=39"}},"\u0421\u0423\u0420\u0413\u0410\u041b\u0422 \u042f\u0412\u0423\u0423\u041b\u0416 \u0411\u0423\u0419 \u041c\u042d\u0420\u0413\u042d\u0416\u041b\u04ae\u04ae\u0414"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=236"}},"\u0421\u0423\u0420\u0413\u0410\u041b\u0422\u042b\u041d \u0422\u04e8\u041b\u0411\u04e8\u0420 \u0422\u041e\u041e\u0426\u041e\u041e, \u0422\u04e8\u041b\u04e8\u0425 \u0410\u0420\u0413\u0410\u0427\u0418\u041b\u0410\u041b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=234"}},"\u0421\u0443\u0440\u0433\u0430\u043b\u0442\u044b\u043d \u0442\u044d\u0442\u0433\u044d\u043b\u044d\u0433 \u0437\u044d\u044d\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=2516"}},"\u0414\u044d\u044d\u0434 \u0431\u043e\u043b\u043e\u0432\u0441\u0440\u043e\u043b\u044b\u043d \u0448\u0438\u043d\u044d\u0447\u043b\u044d\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=7637"}},"\u0427\u0430\u043d\u0430\u0440\u044b\u043d \u0443\u0434\u0438\u0440\u0434\u043b\u0430\u0433\u044b\u043d \u0442\u043e\u0433\u0442\u043e\u043b\u0446\u043e\u043e"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=6340"}},"\u041d\u044d\u044d\u043b\u0442\u0442\u044d\u0439 \u0445\u0438\u0447\u044d\u044d\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=41"}},"\u0422\u04e9\u0433\u0441\u04e9\u043b\u0442")),l.a.createElement(L.a,{anchorEl:c,open:Boolean(c),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=1261"}},"\u041e\u044e\u0443\u0442\u043d\u044b \u0431\u0430\u0439\u0440"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=55"}},"\u041e\u044e\u0443\u0442\u043d\u044b \u0437\u04e9\u0432\u043b\u04e9\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=59"}},"\u041e\u044e\u0443\u0442\u043d\u044b \u043a\u043b\u0443\u0431\u0443\u0443\u0434"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=65"}},"\u0422\u04e9\u0433\u0441\u04e9\u0433\u0447\u0434\u0438\u0439\u043d \u0445\u043e\u043b\u0431\u043e\u043e"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=57"}},"\u0414\u04af\u0440\u044d\u043c \u0436\u0443\u0440\u0430\u043c"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=63"}},"\u041e\u043d\u0446 \u0442\u04e9\u0433\u0441\u04e9\u0433\u0447\u0438\u0434"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=61"}},"\u0417\u0443\u0440\u0433\u0438\u0439\u043d \u0446\u043e\u043c\u043e\u0433")),l.a.createElement(L.a,{anchorEl:s,open:Boolean(s),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=67"}},"\u042d\u0440\u0434\u043c\u0438\u0439\u043d \u0437\u04e9\u0432\u043b\u04e9\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=69"}},"\u041c\u0430\u043d\u0430\u0439 \u044d\u0440\u0434\u044d\u043c\u0442\u044d\u0434"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=71"}},"\u041d\u043e\u043c \u0441\u0443\u0440\u0430\u0445 \u0431\u0438\u0447\u0438\u0433, \u0430\u0440\u0433\u0430 \u0437\u04af\u0439\u043d \u0437\u04e9\u0432\u043b\u04e9\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=73"}},"\u0421\u0443\u0434\u0430\u043b\u0433\u0430\u0430\u043d\u044b \u0442\u04e9\u0432\u04af\u04af\u0434"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=75"}},"\u042d\u0428\u0425 \u044d\u043c\u0445\u044d\u0442\u0433\u044d\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=1424"}},"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u043e\u0440\u044b\u043d \u0441\u0435\u043c\u0438\u043d\u0430\u0440"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=77"}},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440\u044b\u043d \u0442\u04e9\u0433\u0441\u04e9\u043b\u0442\u0438\u0439\u043d \u0430\u0436\u0438\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=79"}},"\u042d\u0428\u0421\u0410-\u044b\u043d \u0447\u0438\u0433\u043b\u044d\u043b"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=4755"}},"\u042d\u0428\u04e8 \u0431\u0438\u0447\u0438\u0445 \u0437\u0430\u0430\u0432\u0430\u0440")),l.a.createElement(L.a,{anchorEl:n,open:Boolean(n),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=81"}},"\u0425\u0430\u043c\u0442\u044b\u043d \u0430\u0436\u0438\u043b\u043b\u0430\u0433\u0430\u0430"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=37"}},"\u042d\u043b\u0441\u044d\u043b\u0442"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=86"}},"\u0428\u0438\u043b\u044d\u043d \u0434\u0430\u043d\u0441"),l.a.createElement(x.a,{className:t.moreLink,onClick:function(){return window.location.href="http://stda.edu.mn/stda/?page_id=110"}},"\u0425\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445")))),l.a.createElement(F.a,{open:this.state.drawer,onClose:this.toggleDrawer("drawer",!1)},l.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("drawer",!1),onKeyDown:this.toggleDrawer("drawer",!1)},m)))}}]),t}(l.a.Component)),W=Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,fontSize:"16px",textTransform:"uppercase",fontFamily:"Roboto Mono"},link:{color:"#fff",textDecoration:"none"},moreLink:{padding:"0 24px",height:"32px",fontSize:"14px"},menuButton:{marginLeft:-12,marginRight:12},list:{width:250},drawerlink:{fontSize:"14px"}})(T),D=a(92),G=a.n(D),J=(a(228),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section section--dark hero hero--centered"},l.a.createElement("div",{className:"container container--hero anim-appear"},l.a.createElement("div",{className:"column"},l.a.createElement("h1",null,"Your Story Starts With Us."),l.a.createElement("p",null,"\u041c\u043e\u043d\u0433\u043e\u043b \u0443\u043b\u0441\u0430\u0434 \u041c\u044d\u0434\u044d\u044d\u043b\u043b\u0438\u0439\u043d \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439\u043d \u0441\u0430\u043b\u0431\u0430\u0440 \u04af\u04af\u0441\u044d\u043d \u0445\u04e9\u0433\u0436\u0438\u0436 \u044d\u0445\u044d\u043b\u0441\u044d\u043d \u04af\u0435\u044d\u0441 \u0445\u043e\u0439\u0434 \u0431\u04af\u0441 \u043d\u0443\u0442\u0433\u0438\u0439\u043d \u0445\u04e9\u0433\u0436\u0438\u043b\u0434 \u043d\u044d\u043c\u044d\u0440 \u0431\u043e\u043b\u043e\u0445\u044b\u043d \u0442\u0443\u043b\u0434 \u0414\u0430\u0440\u0445\u0430\u043d-\u0423\u0443\u043b \u0430\u0439\u043c\u0433\u0438\u0439\u043d \u0445\u044d\u043c\u0436\u044d\u044d\u043d\u0434 \u0445\u0430\u043c\u0433\u0438\u0439\u043d \u0430\u043d\u0445\u043d\u044b \u201c\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0438\u0439\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c \u0445\u0430\u043d\u0433\u0430\u043c\u0436\u0438\u0439\u043d \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u201d \u043c\u044d\u0440\u0433\u044d\u0436\u043b\u0438\u0439\u0433 \u043d\u044d\u044d\u0436, \u0430\u043d\u0445\u043d\u044b \u044d\u043b\u0441\u044d\u043b\u0442\u0438\u0439\u0433 1999 \u043e\u043d\u043e\u043e\u0441 \u0430\u0432\u0447 \u044d\u0445\u044d\u043b\u0441\u044d\u043d \u0431\u0438\u043b\u044d\u044d."),l.a.createElement("div",{className:"btn-hero"},l.a.createElement(G.a,{variant:"outlined"},"\u0414\u044d\u043b\u0433\u044d\u0440\u044d\u043d\u0433\u04af\u0439\u0433 \u04af\u0437\u044d\u0445")))))}}]),t}(n.Component)),A=(a(230),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container container--jumbo"},l.a.createElement("div",null,l.a.createElement("div",{className:"col-list"},l.a.createElement("section",{className:"module-module col-2 h2-spacing -ratio-2-1"},l.a.createElement("div",{className:"module"},l.a.createElement("h2",null,"\u0411\u0430\u0433\u0448\u043b\u0430\u0445 \u0431\u04af\u0440\u044d\u043b\u0434\u044d\u0445\u04af\u04af\u043d"),l.a.createElement("p",null,"Some title")))),l.a.createElement("div",{className:"multi-up multi-up--3 multi-up--slim teacher-tile"},l.a.createElement("div",{className:"tile"},l.a.createElement("a",{href:"#",className:"tile__link"},l.a.createElement("figure",{class:"tile__poster"},l.a.createElement("div",null,l.a.createElement("img",{class:"tile__image",src:"https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png"}))),l.a.createElement("h3",{className:"eyebrow"},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440"),l.a.createElement("h4",null,l.a.createElement("span",{class:"tile__link"},"\u041e\u0432\u043e\u0433 \u041d\u044d\u0440")))),l.a.createElement("div",{className:"tile"},l.a.createElement("a",{href:"#",className:"tile__link"},l.a.createElement("figure",{class:"tile__poster"},l.a.createElement("div",null,l.a.createElement("img",{class:"tile__image",src:"https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png"}))),l.a.createElement("h3",{className:"eyebrow"},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440"),l.a.createElement("h4",null,l.a.createElement("span",{class:"tile__link"},"\u041e\u0432\u043e\u0433 \u041d\u044d\u0440")))),l.a.createElement("div",{className:"tile"},l.a.createElement("a",{href:"#",className:"tile__link"},l.a.createElement("figure",{class:"tile__poster"},l.a.createElement("div",null,l.a.createElement("img",{class:"tile__image",src:"https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png"}))),l.a.createElement("h3",{className:"eyebrow"},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440"),l.a.createElement("h4",null,l.a.createElement("span",{class:"tile__link"},"\u041e\u0432\u043e\u0433 \u041d\u044d\u0440")))),l.a.createElement("div",{className:"tile"},l.a.createElement("a",{href:"#",className:"tile__link"},l.a.createElement("figure",{class:"tile__poster"},l.a.createElement("div",null,l.a.createElement("img",{class:"tile__image",src:"https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png"}))),l.a.createElement("h3",{className:"eyebrow"},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440"),l.a.createElement("h4",null,l.a.createElement("span",{class:"tile__link"},"\u041e\u0432\u043e\u0433 \u041d\u044d\u0440")))),l.a.createElement("div",{className:"tile"},l.a.createElement("a",{href:"#",className:"tile__link"},l.a.createElement("figure",{class:"tile__poster"},l.a.createElement("div",null,l.a.createElement("img",{class:"tile__image",src:"https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png"}))),l.a.createElement("h3",{className:"eyebrow"},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440"),l.a.createElement("h4",null,l.a.createElement("span",{class:"tile__link"},"\u041e\u0432\u043e\u0433 \u041d\u044d\u0440")))),l.a.createElement("div",{className:"tile"},l.a.createElement("a",{href:"#",className:"tile__link"},l.a.createElement("figure",{class:"tile__poster"},l.a.createElement("div",null,l.a.createElement("img",{class:"tile__image",src:"https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png"}))),l.a.createElement("h3",{className:"eyebrow"},"\u041c\u0430\u0433\u0438\u0441\u0442\u0440"),l.a.createElement("h4",null,l.a.createElement("span",{class:"tile__link"},"\u041e\u0432\u043e\u0433 \u041d\u044d\u0440"))))))))}}]),t}(n.Component)),K=(a(231),a(93)),q=a.n(K),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container container--jumbo"},l.a.createElement("div",{className:"footer-block footer-block--about"},l.a.createElement("a",{href:"/",className:"footer-block__logo"},l.a.createElement("img",{src:q.a,alt:"logo",className:"footer-block-logo"})),l.a.createElement("div",{className:"footer-block__content"},l.a.createElement("p",{className:"footer-block__description"},"\u0411\u0438\u0434 \u041c\u043e\u043d\u0433\u043e\u043b\u044b\u043d \u0437\u0430\u0445 \u0437\u044d\u044d\u043b\u0438\u0439\u043d \u044d\u0440\u044d\u043b\u0442\u044d\u0434 \u043d\u0438\u0439\u0446\u0441\u044d\u043d, \u043f\u0440\u043e\u0433\u0440\u0430\u043c \u0445\u0430\u043d\u0433\u0430\u043c\u0436\u0438\u0439\u043d \u043e\u0440\u0447\u0438\u043d \u04af\u0435\u0438\u0439\u043d \u0434\u044d\u0432\u0448\u0438\u043b\u0442\u044d\u0442 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043b\u0430\u0445, \u04e9\u043d\u0434\u04e9\u0440 \u0443\u0440 \u0447\u0430\u0434\u0432\u0430\u0440\u0442\u0430\u0439 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u04af\u04af\u0434\u0438\u0439\u0433 \u0431\u044d\u043b\u0442\u0433\u044d\u043d \u0433\u0430\u0440\u0433\u0430\u0445 \u0437\u043e\u0440\u0438\u043b\u0433\u043e\u0442\u043e\u0439. \u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0438\u0439\u043d \u0443\u0445\u0430\u0430\u043d, \u043f\u0440\u043e\u0433\u0440\u0430\u043c \u0445\u0430\u043d\u0433\u0430\u043c\u0436\u0438\u0439\u043d \u0438\u043d\u0436\u0435\u043d\u0435\u0440 \u043c\u044d\u0440\u0433\u044d\u0436\u0438\u043b\u0442\u044d\u043d\u0433 2003 \u043e\u043d\u043e\u043e\u0441 \u044d\u0445\u043b\u044d\u043d \u043d\u0438\u0439\u0442 300- \u0430\u0430\u0434 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440 \u043c\u044d\u0440\u0433\u044d\u0436\u0438\u043b\u0442\u044d\u043d, 9 \u0434\u0438\u043f\u043b\u043e\u043c\u044b\u043d \u0434\u044d\u044d\u0434 \u043c\u044d\u0440\u0433\u044d\u0436\u0438\u043b\u0442\u044d\u043d \u0431\u044d\u043b\u0442\u0433\u044d\u0436, 90 \u0433\u0430\u0440\u0443\u0439 \u0445\u0443\u0432\u044c \u043d\u044c \u043c\u044d\u0440\u0433\u044d\u0436\u043b\u044d\u044d\u0440\u044d\u044d \u0430\u0436\u0438\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430."),l.a.createElement("ul",{className:"footer-block__social-nav"},l.a.createElement("li",{className:"footer-block__social-nav-item"},l.a.createElement("a",{href:"https://www.facebook.com/SHUTISdarkhan/",target:"_blank",rel:"noopener noreferrer",className:"footer-block__social-nav-link"},"Facebook")),l.a.createElement("li",{className:"footer-block__social-nav-item"},l.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"footer-block__social-nav-link"},"YouTube"))))),l.a.createElement("div",{className:"footer-block footer-block--legal"},l.a.createElement("div",{className:"footer-block__content"},l.a.createElement("ul",{className:"footer-block__legal-nav"},l.a.createElement("li",{className:"footer-block__legal-nav-item"},l.a.createElement("a",{href:"http://unimis.stda.edu.mn/teacher",target:"_blank",className:"footer-block__legal-nav-link",rel:"noopener noreferrer"},"\u0411\u0430\u0433\u0448\u0438\u0439\u043d \u0432\u0435\u0431")),l.a.createElement("li",{className:"footer-block__legal-nav-item"},l.a.createElement("a",{href:"http://unimis.stda.edu.mn/student",target:"_blank",className:"footer-block__legal-nav-link",rel:"noopener noreferrer"},"\u041e\u044e\u0443\u0442\u043d\u044b \u0432\u0435\u0431")),l.a.createElement("li",{className:"footer-block__legal-nav-item"},l.a.createElement("a",{href:"http://unimis.stda.edu.mn/attest/",target:"_blank",className:"footer-block__legal-nav-link",rel:"noopener noreferrer"},"\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0442\u0447\u0438\u043b\u043b\u044b\u043d \u0432\u0435\u0431")),l.a.createElement("li",{className:"footer-block__legal-nav-item"},l.a.createElement("a",{href:"http://stda.edu.mn/library/",target:"_blank",className:"footer-block__legal-nav-link",rel:"noopener noreferrer"},"\u041d\u043e\u043c\u044b\u043d \u0441\u0430\u043d\u0433\u0438\u0439\u043d \u0432\u0435\u0431")),l.a.createElement("li",{className:"footer-block__legal-nav-item"},l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," \u0428\u0423\u0422\u0418\u0421-\u0438\u0439\u043d \u0414\u0430\u0440\u0445\u0430\u043d-\u0423\u0443\u043b \u0430\u0439\u043c\u0430\u0433 \u0434\u0430\u0445\u044c \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439\u043d \u0441\u0443\u0440\u0433\u0443\u0443\u043b\u044c")))))))}}]),t}(n.Component);a(232);var Q=function(){return l.a.createElement("div",null,l.a.createElement(W,null),l.a.createElement("div",{id:"main"},l.a.createElement(J,null),l.a.createElement(A,null),l.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a.p+"static/media/must-logo.3e8718ad.png"},94:function(e,t,a){e.exports=a(233)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.2765906a.chunk.js.map
(this.webpackJsonpsales_plateform=this.webpackJsonpsales_plateform||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.639bea94.jpeg"},function(e,t,a){e.exports=a.p+"static/media/video.bc313e2a.mp4"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),s=a.n(r),i=(a(19),a(5)),c=a(7),l=a(6),m=a(1),p=a(2),u=a(4),d=a(3),h=a(11),g=a.n(h),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={login:!0},e.togglesignup=function(){e.setState({login:!1}),console.log({login:a})},e.togglelogin=function(){e.setState({login:!0}),console.log({login:a})},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,!this.props.auth&&o.a.createElement("div",null,o.a.createElement("span",{className:"text",onClick:this.togglelogin},"login"),o.a.createElement("span",{className:"text",onClick:this.togglesignup},"sign up"),this.state.login&&o.a.createElement("div",{className:"login"},o.a.createElement("h1",{className:"title"},"login"),o.a.createElement("form",null,o.a.createElement("input",{type:"text",className:"input",placeholder:"mail"}),o.a.createElement("input",{type:"password",className:"input",placeholder:"password"})),o.a.createElement("div",{className:"facebook"},o.a.createElement(g.a,{appId:"1076228416112806",autoLoad:!1,fields:"name,picture,email",onClick:this.props.componentClicked,callback:this.props.responseFacebook}),")       ")),!this.state.login&&o.a.createElement("div",{className:"login",style:{height:"450px"}},o.a.createElement("h1",{className:"title"},"sign up"),o.a.createElement("form",null,o.a.createElement("input",{type:"name",className:"input",placeholder:"first name"}),o.a.createElement("input",{type:"text",className:"input",placeholder:"last name"}),o.a.createElement("input",{type:"text",className:"input",placeholder:"mail"}),o.a.createElement("input",{type:"password",className:"input",placeholder:"password"}),o.a.createElement("input",{type:"mail",className:"input",placeholder:"email"}),o.a.createElement("input",{type:"number",className:"input",placeholder:"mobile number"}),o.a.createElement("button",{type:"submit",className:"submit"},"sign up "))))))}}]),a}(n.Component),f=a(12),v=a.n(f),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light border-bottom",style:{fontSize:"10px"}},o.a.createElement("div",null,o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto",style:{height:"50px"}},o.a.createElement("img",{src:v.a,style:{width:"35px",height:"35px"}}),o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",style:{fontWeight:"bold"}},"5edmet Thanawy ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",role:"button",onClick:this.props.toggleonHome},"HOME")),o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"ACTIVITIES"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},o.a.createElement("a",{className:"dropdown-item",role:"button",onClick:this.props.toggleonComp},"competitions"),o.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),o.a.createElement("form",{className:"form-inline my-2 my-lg-0",style:{visibility:" hidden "}},o.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),o.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))),o.a.createElement("div",{style:{position:"absolute",right:"30px",top:"10px",margin:"0px"}},"    \xa0\xa0\xa0\xa0\xa0\xa0\xa0",this.props.auth&&o.a.createElement("a",{className:"navbar-brand",style:{fontSize:"10px",margin:"0px"}},this.props.name),"\xa0\xa0\xa0",this.props.auth&&o.a.createElement("img",{src:this.props.picture,style:{width:"30px",margin:"0px"}}))))))}}]),a}(n.Component),w=a(13),N=a.n(w),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={play:!0,muted:!1},e.playPause=function(){var t=document.getElementById("video1");t.paused?t.play():t.pause(),e.setState({play:!e.state.play})},e.mute=function(){e.setState({muted:!e.state.muted})},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("video",{id:"video1",src:N.a,autoPlay:!1,loop:!0,className:"video",muted:this.state.muted}),o.a.createElement("div",{className:"border-top  position"}),this.state.play&&o.a.createElement("i",{className:"fa fa-pause stopplay",role:"button",onClick:this.playPause}),!this.state.play&&o.a.createElement("i",{className:"fa fa-play stopplay",role:"button",onClick:this.playPause}),this.state.muted&&o.a.createElement("i",{className:"fas fa-volume-mute mute",role:"button",onClick:this.mute}),!this.state.muted&&o.a.createElement("i",{className:"fas fa-volume-up mute",role:"button",onClick:this.mute}))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={onnav:!1},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:" container border-bottom "},o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-6 mb-3 border-right"},o.a.createElement("h2",{className:"m-4"},"weekly Goal"),o.a.createElement("div",{className:"c100"+this.props.circle.properities+this.props.circle.color},o.a.createElement("span",null,this.props.circle.value,"%"),o.a.createElement("div",{className:"slice"},o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"fill"}))),o.a.createElement("div",null,o.a.createElement("div",{className:" dropdown text-decoration-none"},o.a.createElement("a",{className:" dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{position:"relative",left:"250px"}},"Edit Goal"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},o.a.createElement("a",{className:"dropdown-item ",href:"#"},"\u0667 \u0627\u0635\u062d\u0627\u062d\u0627\u062a"),o.a.createElement("a",{className:"dropdown-item",href:"#"},"\u0661\u0664 \u0627\u0635\u062d\u0627\u062d\u0627\u062a "),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"#"},"\u0662\u0661 \u0627\u0635\u062d\u0627\u062d\u0627\u062a"))),o.a.createElement("p",{style:{position:"relative",top:"30px"}}," ",this.props.description))),o.a.createElement("div",{className:"col-6 mb-3"},o.a.createElement("nav",{className:"navbar  navbar-white bg-light  mb-3 "},o.a.createElement("a",{className:"navbar-brand m-0",onClick:this.props.toggleongrades},"Gades"),o.a.createElement("a",{className:"m-1",onClick:this.props.toggleonAnn},"annoncements ",o.a.createElement("span",{className:"sr-only"},"(current)")),o.a.createElement("a",{className:"m-1",href:"#"},"calender"),o.a.createElement("a",{className:"m-1",href:"#"},"todo ")),this.props.ongrade&&o.a.createElement("div",null,o.a.createElement("div",{className:"alert alert-success",role:"alert"},o.a.createElement("h4",{className:"alert-heading"}," Quiz 1 ",o.a.createElement("span",{className:" grades  badge-pill badge-success"},"100%")," ")),o.a.createElement("div",null,o.a.createElement("div",{className:"alert alert-success",role:"alert"},o.a.createElement("h4",{className:"alert-heading"}," Quiz 2",o.a.createElement("span",{className:" grades  badge-pill badge-danger "},"60%")," ")))),this.props.onAnnoncement&&o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,"annon1"),o.a.createElement("li",null,"annon2"))))))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:""},o.a.createElement("a",{onClick:"Bible"===this.props.sectionName?function(){return e.props.handleread(e.props.section,e.props.filtersubsection)}:function(){return e.props.toggleonQuiz(e.props.name)},className:"bg-danger text-decoration-none quiz ml-2  "},o.a.createElement("div",{className:" sectiontext"},this.props.name),o.a.createElement("i",{className:!0===this.props.filtersubsection.read?"fa fa-check bg-success text-dark rounded font-weight-lighter check":null})))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"container border-bottom"},o.a.createElement("h2",{className:"row m-3"}," ",this.props.name),o.a.createElement("div",{className:"row mb-5 bg-dark",style:{borderRadius:"10px"}},o.a.createElement("button",{className:"w3-button w3-display-left  arrow",onClick:function(){return e.props.handleArrowRight(e.props.sectio)}},"\u276e"),this.props.subsection.filter((function(t){return t.id<5+e.props.arrow&&t.id>0+e.props.arrow})).map((function(t){return o.a.createElement(j,{filtersubsection:t,section:e.props.sectio,key:t.id,name:t.name,link:t.link,handleread:e.props.handleread,sectionName:e.props.name,toggleonQuiz:e.props.toggleonQuiz})})),o.a.createElement("button",{className:" w3-button w3-display-right  arrow",onClick:function(){return e.props.handleArrowleft(e.props.sectio)}},"\u276f"))))}}]),a}(n.Component),x=(a(20),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer bg-secondary"},"copyrights")}}]),a}(n.Component)),C=(n.Component,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{role:"button",onClick:function(){return e.props.toggleonCompSections(e.props.competitions)},className:"container  bg-info rounded-pill mb-4"},o.a.createElement("div",{className:"row m-3 ",style:{height:"150px"}},o.a.createElement("span",{className:"sectiontext"},"  ",this.props.name))),this.props.open&&o.a.createElement("div",{className:"row"}))}}]),a}(n.Component)),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{class:"form-check"},o.a.createElement("input",{class:"form-check-input",type:"radio",name:this.props.quesnam,id:this.props.idName,option:this.props.optionName}),o.a.createElement("label",{class:"form-check-label",for:this.props.idName,onClick:function(){return e.props.handlechoose(e.props.name,e.props.quiz,e.props.question)}},this.props.name))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"question container bg-info "},o.a.createElement("h1",null,this.props.quesnam,this.props.done&&1===this.props.correct&&o.a.createElement("span",{className:"bg-success float-right rounded correct"}," 1/1 "),this.props.done&&0===this.props.correct&&o.a.createElement("span",{className:"bg-danger float-right rounded correct"}," 0/1 "),this.props.done&&-1===this.props.correct&&o.a.createElement("span",{className:"bg-secondary float-right rounded correct"}," - ")),"choose"===this.props.question.type&&!this.props.done&&this.props.answers.map((function(t){return o.a.createElement(q,{question:e.props.question,done:e.props.done,answer:e.props.answer,quiz:e.props.quiz,quesnam:e.props.quesnam,name:t.name,idName:e.props.quesnam+t.id.toString(),optionName:"option"+t.id.toString(),handlechoose:e.props.handlechoose})})),"text"===this.props.question.type&&!this.props.done&&o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{type:"text",onChange:function(t){return e.props.handleText(t.target.value,e.props.quiz,e.props.question)},class:"form-control",placeholder:"answer this"})),this.props.done&&o.a.createElement("h1",{className:"answers"},this.props.answer))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container form p-3 mt-5"},o.a.createElement("h1",null,this.props.quiz.name),this.props.questions.map((function(t){return o.a.createElement("div",null,o.a.createElement(A,{correct:t.correct,quiz:e.props.quiz,key:t.id,answer:t.answer,question:t,done:e.props.done,quesnam:t.name,answers:t.answers,handlechoose:e.props.handlechoose,handleText:e.props.handleText}))})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-9"}),o.a.createElement("button",{className:"bg-success rounded col-2  p-2",onClick:function(){return e.props.handlesubmitform(e.props.quiz)}},"submit")))}}]),a}(n.Component),S=(a(21),a(22),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={auth:!0,name:"",picture:"",mails:"",ongrades:!0,onAnnoncement:!1,section:[{arrow:0,id:1,name:"Bible",subsection:[{name:"1",id:1,compid:1,read:!1,competitionname:"maration part 2"},{name:" 2",id:2,compid:2,read:!1,competitionname:"maration part 2"},{name:" 3",id:3,compid:1,read:!1,competitionname:"maration part 1"},{name:" 4",id:4,compid:2,read:!1,competitionname:"maration part 1"},{name:" 5",id:5,compid:3,read:!1,competitionname:"maration part 1"},{name:" 6",id:6,compid:4,read:!1,competitionname:"maration part 1"},{name:" 7",id:7,compid:3,read:!1,competitionname:"maration part 2"},{name:" 8",id:8,compid:4,read:!1,competitionname:"maration part 2"}]},{arrow:0,id:2,name:"Quizzes",subsection:[{name:"Quiz 1",id:1,compid:1,done:!1,competitionname:"maration part 1",grade:"",questions:[{id:1,type:"choose",name:"ques1",answers:[{id:1,name:"ex1"},{id:2,name:"ex2"}],correctAnswer:"ex2",answer:"",correct:0},{id:2,type:"text",name:"ques2",correctAnswer:"asd",answer:"",correct:-1}]},{name:"Quiz 2",id:2,compid:1,done:!1,competitionname:"maration part 2",grade:"",answers:{},questions:[{id:1,type:"choose",name:"ques1",answers:[{id:1,name:"ex1"},{id:2,name:"ex2"}],correctAnswer:"ex1",answer:"",correct:0},{id:2,type:"choose",name:"ques2",answers:[{id:1,name:"ex1"},{id:2,name:"ex2"}],correctAnswer:"ex1",answer:"",correct:0},{id:2,type:"choose",name:"ques3",answers:[{id:1,name:"ex1"},{id:2,name:"ex2"}],correctAnswer:"ex2",answer:"",correct:0}]}]}],circle:{value:0,properities:" p0 ",color:" red "},goal:7,description:"description ...",oncompetitions:!1,onquiz:!1,quizName:"",onhome:!0,competitions:[{id:1,name:"maration part 1",open:!1},{id:2,name:"maration part 2",open:!1}]},e.handlesubmitform=function(t){var a=Object(l.a)(e.state.section),n=Object(c.a)({},a[1]),o=Object(l.a)(n.subsection),r=o.indexOf(t);o[r].done=!0,a[1]=Object(c.a)({},n),e.setState({section:a}),console.log(n)},e.handlechoose=function(t,a,n){var o=Object(l.a)(e.state.section),r=Object(c.a)({},o[1]),s=Object(l.a)(r.subsection),i=s.indexOf(a),m=Object(l.a)(s[i].questions),p=m.indexOf(n);m[p].answer=t;m[p].answer===m[p].correctAnswer?m[p].correct=1:m[p].correct=0,o[1]=Object(c.a)({},r),e.setState({section:o}),console.log(m.correct)},e.handleText=function(t,a,n){var o=Object(l.a)(e.state.section),r=Object(c.a)({},o[1]),s=Object(l.a)(r.subsection),i=s.indexOf(a),m=Object(l.a)(s[i].questions),p=m.indexOf(n);m[p].answer=t,o[1]=Object(c.a)({},r),e.setState({section:o}),console.log(t)},e.toggleongrades=function(){e.setState({ongrades:!0,onAnnoncement:!1})},e.toggleonAnn=function(){e.setState({ongrades:!1,onAnnoncement:!0})},e.toggleonComp=function(){e.setState({oncompetitions:!0,onhome:!1,onquiz:!1})},e.toggleonQuiz=function(t){e.setState({oncompetitions:!1,onquiz:!0,onhome:!1,quizName:t})},e.toggleonCompSections=function(t){var a=Object(l.a)(e.state.competitions),n=a.indexOf(t),o=Object(c.a)({},a[n]);!1===o.open?o.open=!0:o.open=!1,a[n]=Object(c.a)({},o),e.setState({competitions:a}),console.log(o)},e.toggleonHome=function(){e.setState({oncompetitions:!1,onhome:!0,onquiz:!1})},e.responseFacebook=function(t){console.log(t),"unknown"!==t.status&&e.setState({auth:!0,name:t.name,picture:t.picture.data.url,mails:t.email})},e.componentClicked=function(){console.log("Facebook btn clicked")},e.handleread=function(t,a){var n=e.state.circle.value,o=Object(l.a)(e.state.section),r=o.indexOf(t),s=Object(c.a)({},o[r]),i=Object(l.a)(s.subsection),m=i.indexOf(a);if(console.log(a),!1===i[m].read){i[m].read=!0,90===n?(n+=10,alert("congratulations! yo have just finished the weekly goal. we are looking forward to see more from you ")):100===n?n=n:n+=15;var p=e.state.circle.properities;p=" p"+n.toString()+" ";var u=e.state.circle.color;u=n<=60?"red":n>60&&n<85?"orange":"green",e.setState({circle:{value:n,properities:p,color:u},section:o})}},e.handleArrowleft=function(t){var a=Object(l.a)(e.state.section),n=a.indexOf(t),o=t.subsection.length-4;a[n]=Object(c.a)({},t),a[n].arrow===o||t.subsection.length<=4||a[n].arrow++,e.setState({section:a}),console.log(o)},e.handleArrowRight=function(t){var a=Object(l.a)(e.state.section),n=a.indexOf(t);a[n]=Object(c.a)({},t),0===a[n].arrow?a[n].arrow=0:a[n].arrow--,e.setState({section:a})},e}return Object(p.a)(a,[{key:"render",value:function(){var e,t,a,n=this;return o.a.createElement("div",null,this.state.auth&&this.state.onhome&&o.a.createElement("div",null,o.a.createElement(E,(e={auth:this.state.auth,picture:this.state.picture,name:this.state.name},Object(i.a)(e,"picture",this.state.picture),Object(i.a)(e,"mails",this.state.mails),Object(i.a)(e,"toggleonComp",this.toggleonComp),Object(i.a)(e,"toggleonHome",this.toggleonHome),e)),o.a.createElement(y,null),o.a.createElement("div",{className:"progress11"},o.a.createElement(O,{circle:this.state.circle,ongrade:this.state.ongrades,toggleongrades:this.toggleongrades,onAnnoncement:this.state.onAnnoncement,toggleonAnn:this.toggleonAnn,description:this.state.description})),o.a.createElement("div",{class:"container section"},this.state.section.map((function(e){return o.a.createElement(k,{key:e.id,id:e.id,sectio:e,subsection:e.subsection,name:e.name,handleread:n.handleread,arrow:e.arrow,handleArrowleft:n.handleArrowleft,handleArrowRight:n.handleArrowRight,toggleonQuiz:n.toggleonQuiz})}))),o.a.createElement(x,null)),this.state.oncompetitions&&o.a.createElement("div",null,o.a.createElement(E,(t={auth:this.state.auth,picture:this.state.picture,name:this.state.name},Object(i.a)(t,"picture",this.state.picture),Object(i.a)(t,"mails",this.state.mails),Object(i.a)(t,"toggleonComp",this.toggleonComp),Object(i.a)(t,"toggleonHome",this.toggleonHome),t)),o.a.createElement("h2",{className:" m-5 text-center"}," competitions"),this.state.competitions.map((function(e){return o.a.createElement(C,{competitions:e,key:e.id,name:e.name,open:e.open,toggleonCompSections:n.toggleonCompSections,section:n.state.section,handleread:n.handleread,handleArrowleft:n.handleArrowleft,handleArrowRight:n.handleArrowRight})})),o.a.createElement(x,null)),this.state.onquiz&&o.a.createElement("div",null,o.a.createElement(E,(a={auth:this.state.auth,picture:this.state.picture,name:this.state.name},Object(i.a)(a,"picture",this.state.picture),Object(i.a)(a,"mails",this.state.mails),Object(i.a)(a,"toggleonComp",this.toggleonComp),Object(i.a)(a,"toggleonHome",this.toggleonHome),a)),this.state.section[1].subsection.filter((function(e){return e.name===n.state.quizName})).map((function(e){return o.a.createElement(z,{quiz:e,quizname:e.name,questions:e.questions,handlesubmitform:n.handlesubmitform,handlechoose:n.handlechoose,handleText:n.handleText,done:e.done})}))),!this.state.auth&&o.a.createElement(b,{auth:this.state.auth,name:this.state.name,picture:this.state.picture,mails:this.state.mails,responseFacebook:this.responseFacebook,componentClicked:this.componentClicked}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(9),a(23);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.e49bd9e3.chunk.js.map
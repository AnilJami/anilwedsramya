(function(g){var window=this;var gra=function(a,b){var c=[];g.Cf(b,function(a){var b;try{b=g.Ti.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.p(b)?g.Si(b)&&c.push(a):c.push(a)},a);
return c},hra=function(a,b){var c=gra(a,b);
(0,g.H)(c,function(a){g.Ti.prototype.remove.call(this,a)},a)},b9=function(a,b){g.pC.call(this,g.Q("YTP_MDX_TITLE"),0,a,b);
this.Z=a;this.B=!1;this.H={};this.U(a,"onMdxReceiversChange",this.F);this.U(a,"presentingplayerstatechange",this.F);this.F()},c9=function(a){return a.H?a.F+((0,g.G)()-a.A)/1E3:a.F},ira=function(){var a=g.Ui;
hra(a,a.g.sd(!0))},d9=function(a){g.Mz.call(this,"ScreenServiceProxy");
this.Jc=a;this.o=[];this.o.push(this.Jc.$_s("screenChange",(0,g.z)(this.CJ,this)));this.o.push(this.Jc.$_s("onlineScreenChange",(0,g.z)(this.nG,this)))},e9=function(a){g.Iz("cloudview",a)},f9=function(a){e9("setApiReady_ "+a);
g.ka("yt.mdx.remote.cloudview.apiReady_",a,void 0)},g9=function(){return g.u("yt.mdx.remote.cloudview.instance_")},h9=function(a){g.yi[a]&&(a=g.yi[a],(0,g.H)(a,function(a){g.wi[a]&&delete g.wi[a]}),a.length=0)},i9=function(){return g.u("yt.mdx.remote.connection_")},j9=function(a){g.ka("yt.mdx.remote.connectData_",a,void 0)},k9=function(a){g.ka("yt.mdx.remote.currentScreenId_",a,void 0)},l9=function(){return g.u("yt.mdx.remote.currentScreenId_")},n9=function(){if(!m9){var a=g.u("yt.mdx.remote.screenService_");
m9=a?new d9(a):null}return m9},o9=function(a){g.ka("yt.mdx.remote.cloudview.initializing_",a,void 0)},p9=function(){return!!g.u("yt.mdx.remote.cloudview.apiReady_")},q9=function(a){e9("setCastInstalled_ "+a);
g.Wi("yt-remote-cast-installed",a)},r9=function(a){g.Iz("cloudview",a)},jra=function(a,b){g9().init(a,b)},s9=function(){return!!g.Xi("yt-remote-cast-installed")},u9=function(){e9("dispose");
var a=g9();a&&a.dispose();g.ka("yt.mdx.remote.cloudview.instance_",null,void 0);f9(!1);g.Ai(t9);t9.length=0},kra=function(){var a=window.document.createElement("a");
g.te(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Oa(a)},lra=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},mra=function(a){var b=g.ui();
if(b)if(b.clear(a),a)h9(a);else for(var c in g.yi)h9(c)},v9=function(a,b){g.xi[a]=!0;
var c=g.ui();c&&c.publish.apply(c,arguments);g.xi[a]=!1},w9=function(a){return a?a.dataset?a.dataset[g.bh("loaded")]:a.getAttribute("data-loaded"):null},x9=function(){return g.u("yt.mdx.remote.channelParams_")||{}},z9=function(a){var b=i9();
j9(null);a||k9("");g.ka("yt.mdx.remote.connection_",a,void 0);y9&&((0,g.H)(y9,function(b){b(a)}),y9.length=0);
b&&!a?v9("yt-remote-connection-change",!1):!b&&a&&v9("yt-remote-connection-change",!0)},A9=function(){return g.u("yt.mdx.remote.connectData_")},B9=function(){var a=l9();
if(!a)return null;var b=n9().wd();return g.ei(b,a)},C9=function(a,b){q9(!0);
o9(!1);jra(a,function(a){a?(f9(!0),g.Ci("yt-remote-cast2-api-ready")):(r9("Failed to initialize cast API."),q9(!1),g.Yi("yt-remote-cast-available"),g.Yi("yt-remote-cast-receiver"),u9());b(a)})},D9=function(){return s9()?g9()?g9().getCastSession():(r9("getCastSelector: Cast is not initialized."),null):(r9("getCastSelector: Cast API is not installed!"),null)},E9=function(){if(g.fqa){var a=2,b=g.xz(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Cz("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.zz,c)}},nra=function(){var a=kra(),b=window.document.getElementById(a),c=b&&w9(b);
c||b&&!c||(b=lra(a,function(){w9(b)||(g.ch(b,"loaded","true"),g.Ci(a),g.Rg(g.B(mra,a),0))}))},ora=function(a){return(0,g.R)(a,function(a){return{key:a.id,
name:a.name}})},G9=function(a,b){l9();
B9()&&B9();k9(a.id);var c=new g.YB(F9,a,x9());c.connect(b,A9());c.subscribe("beforeDisconnect",function(a){v9("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){i9()&&(i9(),z9(null))});
z9(c)},H9=function(){var a=g.aj();
if(!a)return null;var b=n9().wd();return g.ei(b,a)},I9=function(a){g.Iz("remote",a)},J9=function(){var a=i9();
return!!a&&3!=a.getProxyState()},K9=function(){p9()?g9().stopSession():r9("stopSession called before API ready.");
var a=i9();a&&(a.disconnect(1),z9(null))},L9=function(){var a;
a=n9().Jc.$_gos();var b=B9();b&&i9()&&(g.di(a,b)||a.push(b));return ora(a)},N9=function(a,b){g.Gn.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.MB;this.A=this.o=null;this.H=(0,g.z)(this.HE,this);this.F=(0,g.z)(this.Hi,this);this.G=(0,g.z)(this.GE,this);this.J=(0,g.z)(this.QE,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.jp,this),pra(this))):c=3;0!=c&&(b?this.jp(c):g.Rg((0,g.z)(function(){this.jp(c)},this),0));
var d=D9();d&&M9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},O9=function(a){return new g.RB(a.B.getPlayerContextData())},qra=function(a,b,c,d,e){var f=O9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.WB(f,b,d);g.p(c)&&(g.UB(f,c),l.currentTime=c);g.p(k)&&(l.listId=k);P9(a,"setPlaylist",l);e||Q9(a,f)},pra=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.B(this.HG,a),this))},a)},rra=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},R9=function(a,b){50>a.C.xc()&&g.OB(a.C,b)},S9=function(a,b,c){var d=O9(a);
g.UB(d,c);-1E3!=d.g&&(d.g=b);Q9(a,d)},P9=function(a,b,c){a.B.sendMessage(b,c)},Q9=function(a,b){rra(a);
a.B.setPlayerContextData(g.XB(b));pra(a)},M9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Hi(null));
a.A=b;a.A&&(T9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Hi(a.A.media[0]))},sra=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=O9(a);b.contentId!=d.videoId&&T9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.UB(d,a.o.getEstimatedTime());Q9(a,d)}else T9("No cast media video. Ignoring state update.")},T9=function(a){g.Iz("CP",a)},tra=function(a){var b=!1;
g9()||(a=new g.mA(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.Wi("yt-remote-cast-available",a);v9("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){e9("onReceiverSelected: "+a.friendlyName);
g.Wi("yt-remote-cast-receiver",a);v9("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){e9("onReceiverResumed: "+a.friendlyName);
g.Wi("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){e9("onSessionChange: "+g.ai(a));
a||g.Yi("yt-remote-cast-receiver");v9("yt-remote-cast2-session-change",a)}),g.ka("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
e9("cloudview.createSingleton_: "+b);return b},ura=function(){var a=0<=g.ec.search(/\ (CrMo|Chrome|CriOS)\//);
return g.qi||a},U9=function(a,b){p9()?g9().setConnectedScreenStatus(a,b):r9("setConnectedScreenStatus called before ready.")},vra=function(){e9("clearCurrentReceiver");
g.Yi("yt-remote-cast-receiver")},wra=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){E9();a({command:"cast.sender.init"});return}}if(window.chrome)if(E9(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.vz();55<=b?a="55":50<=b&&(a="50");g.Cz("//www.gstatic.com/eureka/clank"+a+g.Az,g.zz)}else g.Dz(0);else g.zz()},xra=function(a){a?(g.Wi("yt-remote-session-app",a.app),g.Wi("yt-remote-session-name",a.name)):(g.Yi("yt-remote-session-app"),g.Yi("yt-remote-session-name"));
g.ka("yt.mdx.remote.channelParams_",a,void 0)},yra=function(){var a=x9();
if(g.Tb(a)){var a=g.$i(),b=g.Xi("yt-remote-session-name")||"",c=g.Xi("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ka("yt.mdx.remote.channelParams_",a,void 0)}},zra=function(){var a=H9();
a?(I9("Resume connection to: "+g.ai(a)),G9(a,0)):(g.jj(),vra(),I9("Skipping connecting because no session screen found."))},Ara=function(a){I9("remote.onCastSessionChange_: "+g.ai(a));
if(a){var b=B9();b&&b.id==a.id?U9(b.id,"YouTube TV"):(b&&K9(),G9(a,1))}else i9()&&K9()},Bra=function(){var a=L9(),b=B9();
b||(b=H9());return g.Xa(a,function(a){return b&&g.Yh(b,a.key)?!0:!1})},Cra=function(){var a=g.Xi("yt-remote-cast-receiver");
return a?a.friendlyName:null},Dra=function(a,b,c,d){ura()?tra(b)&&(o9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?C9(a,c):(window.__onGCastApiAvailable=function(b,d){b?C9(a,c):(r9("Failed to load cast API: "+d),q9(!1),o9(!1),g.Yi("yt-remote-cast-available"),g.Yi("yt-remote-cast-receiver"),u9(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):nra():wra())):e9("Cannot initialize because not running Chrome")},Era=
function(a){this.B=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Of(a)||"";b&&(this.B=":"+b);this.A=g.Nf(a)||"";a=g.ec;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Na(a,"10.0")&&(this.o=!1))},V9=function(a,b,c){g.L.call(this);
this.H=a;this.Z=b;b.addEventListener("onVolumeChange",this.Ik,this);b.addEventListener("onCaptionsTrackListChanged",this.uu,this);b.addEventListener("captionschanged",this.iu,this);b.addEventListener("captionssettingschanged",this.Ho,this);b.addEventListener("videoplayerreset",this.Ki,this);b.addEventListener("mdxautoplaycancel",this.pr,this);this.A=!1;this.g=c;c.isDisposed();c.subscribe("proxyStateChange",this.Hu,this);c.subscribe("remotePlayerChange",this.Ji,this);c.subscribe("remoteQueueChange",
this.Ki,this);c.subscribe("autoplayUpNext",this.gu,this);c.subscribe("previousNextChange",this.Eu,this);c.subscribe("nowAutoplaying",this.xu,this);c.subscribe("autoplayDismissed",this.fu,this);this.suggestion=null;this.D=new g.ll(64);this.C=this.B=window.NaN;this.o={};this.G=new g.Id(this.Wv,1E3,this);g.M(this,this.G);this.F=new g.Rr(this.DL,1E3,this);g.M(this,this.F);this.J=g.w;this.Ho();this.Ki();this.Ji()},W9=function(a,b){var c=a.H,d=a.Z.getVideoData().lengthSeconds;
c.H=b||0;c.g.Qa("progresssync",b,d)},Fra=function(a){W9(a,0);
X9(a);Y9(a,new g.ll(64))},a$=function(a,b){if(Z9(a)&&!a.A){var c=null;
b&&(c={style:a.Z.ij()},g.Zb(c,b));a.g.Fv($9(a),c);a.o=O9(a.g).o}},b$=function(a,b){var c=a.Z.ne();
c?qra(a.g,$9(a),b,c.g,c.listId.toString()):qra(a.g,$9(a),b);Y9(a,new g.ll(1))},Gra=function(a,b){if(b){var c=a.Z.Ec("captions","tracklist",{Et:1});
c&&c.length?(a.Z.Ze("captions","track",b),a.A=!1):(a.Z.np("captions"),a.A=!0)}else a.Z.Ze("captions","track",{})},Z9=function(a){return O9(a.g).videoId==$9(a)},$9=function(a){return a.Z.getVideoData().videoId},Hra=function(a){X9(a);
if(!a.g.isDisposed()){var b=O9(a.g);b.gb()&&Y9(a,new g.ll(8));W9(a,g.VB(b));a.B=g.Rg((0,g.z)(function(){Hra(this)},a),500)}},X9=function(a){g.Tg(a.B);
a.B=window.NaN},c$=function(a){g.Tg(a.C);
a.C=window.NaN},Y9=function(a,b){c$(a);
var c=a.D;if(b.o!=c.o||b.g!=c.g){var d=g.T(b,2);if(d!=g.T(a.D,2)){var e=a.Z;(e=g.Ol(e.app,e.playerType||1))&&g.VX(e,d)}a.D=b;Ira(a.H,c,b)}},d$=function(a){g.W.call(this,{K:"div",
Y:"ytp-remote",T:[{K:"div",Y:"ytp-remote-display-status",T:[{K:"div",Y:"ytp-remote-display-status-icon",T:[g.wg()]},{K:"div",Y:"ytp-remote-display-status-text",T:["{{statustext}}"]},{K:"div",Y:"ytp-remote-display-status-receiver",T:["{{receiver}}"]}]}]});this.o=new g.Lq(this,250);g.M(this,this.o);this.A=a;this.U(a,"presentingplayerstatechange",this.B);Jra(this,g.Pl(a))},Jra=function(a,b){if(3==a.A.$a()){var c;
c=g.T(b,128)?g.Q("YTP_MDX_STATUS_ERROR"):b.gb()||g.T(b,4)?g.Q("YTP_MDX_STATUS_PLAYING"):g.Q("YTP_MDX_STATUS_CONNECTED");var d=a.A.Ec("remote","currentReceiver");a.update({statustext:c,receiver:d.name});a.o.show()}else g.Nq(a.o)},e$=function(){var a=Bra();
!a&&s9()&&Cra()&&(a={key:"cast-selector-receiver",name:Cra()});return a},Kra=function(){var a=L9();
s9()&&g.Xi("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Lra=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.Ui&&ira();g.cj();F9||(F9=new Era,g.lj()&&(F9.g="/api/loungedev"));y9||(y9=g.u("yt.mdx.remote.deferredProxies_")||[],g.ka("yt.mdx.remote.deferredProxies_",y9,void 0));yra();var c=n9();if(!c){var d=new g.Zz(F9);g.ka("yt.mdx.remote.screenService_",d,void 0);c=n9();Dra(a,d,function(a){a?l9()&&U9(l9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){v9("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.u("yt.mdx.remote.initialized_")&&
(g.ka("yt.mdx.remote.initialized_",!0,void 0),I9("Initializing: "+g.mf(b)),f$.push(g.zi("yt-remote-cast2-availability-change",function(){v9("yt-remote-receiver-availability-change")})),f$.push(g.zi("yt-remote-cast2-receiver-selected",function(){j9(null);
v9("yt-remote-auto-connect","cast-selector-receiver")})),f$.push(g.zi("yt-remote-cast2-receiver-resumed",function(){v9("yt-remote-receiver-resumed","cast-selector-receiver")})),f$.push(g.zi("yt-remote-cast2-session-change",Ara)),f$.push(g.zi("yt-remote-connection-change",function(a){a?U9(l9(),"YouTube TV"):H9()||(U9(null,null),vra())})),a=x9(),b.isAuto&&(a.id+="#dial"),g.Em("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,I9(" -- with channel params: "+g.mf(a)),xra(a),
c.start(),l9()||zra())},g$=function(){s9()?g9()?p9()?(e9("Requesting cast selector."),g9().requestSession()):(e9("Wait for cast API to be ready to request the session."),t9.push(g.zi("yt-remote-cast2-api-ready",g$))):r9("requestCastSelector: Cast is not initialized."):r9("requestCastSelector: Cast API is not installed!")},h$=function(a){g.hz.call(this,a);
this.A={key:g.ci(),name:g.Q("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.ll(64);this.H=0;var b=g.Hl(a).A,b=new b9(a,b.A&&b.A.g);g.M(this,b);b=new d$(a);g.M(this,b);g.om(a,b.element,5)},Ira=function(a,b,c){a.F=c;
a.g.Qa("presentingplayerstatechange",new g.iC(c,b))},i$=function(a,b,c){if(b.key!=a.B.key)if(b.key==a.A.key)K9();
else{a.B=b;var d;if(!c){c=a.g.ne();d=a.g.getVideoData().videoId;var e;if(c){e=[];for(var f=0;f<c.B;f++)e[f]=c.Qb(f).videoId}else e=[a.g.getVideoData().videoId];d={videoIds:e,listId:a.g.Xe(),videoId:d,index:Math.max(a.g.zw(),0),currentTime:a.g.getCurrentTime()}}a=d;I9("Connecting to: "+g.mf(b));"cast-selector-receiver"==b.key?(j9(a||null),b=a||null,p9()?g9().setLaunchParams(b):r9("setLaunchParams called before ready.")):!a&&J9()&&l9()==b.key?v9("yt-remote-connection-change",!0):(K9(),j9(a||null),a=
n9().wd(),(b=g.ei(a,b.key))&&G9(b,1))}};
g.C(b9,g.pC);b9.prototype.F=function(){var a=this.Z.Ec("remote","receivers");a&&1<a.length&&!this.Z.Ec("remote","quickCast")?(this.H=g.yb(a,this.C,this),g.rC(this,(0,g.R)(a,this.C)),a=this.Z.Ec("remote","currentReceiver"),g.qC(this,this.C(a)),this.B||(g.V3(this.o,this),this.B=!0)):this.B&&(g.W3(this.o,this),this.B=!1)};
b9.prototype.C=function(a){return a.key};
b9.prototype.Xd=function(a){return"cast-selector-receiver"==a?g.Q("YTP_MDX_CAST_SELECTOR"):this.H[a].name};
b9.prototype.Vc=function(a){b9.M.Vc.call(this,a);this.Z.Ze("remote","currentReceiver",this.H[a]);this.o.Kb()};
g.C(d9,g.Mz);g.h=d9.prototype;g.h.wd=function(a){return this.Jc.$_gs(a)};
g.h.contains=function(a){return!!this.Jc.$_c(a)};
g.h.get=function(a){return this.Jc.$_g(a)};
g.h.start=function(){this.Jc.$_st()};
g.h.zl=function(a,b,c){this.Jc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Jc.$_r(a,b,c)};
g.h.nl=function(a,b,c,d){this.Jc.$_un(a,b,c,d)};
g.h.R=function(){for(var a=0,b=this.o.length;a<b;++a)this.Jc.$_ubk(this.o[a]);this.o.length=0;this.Jc=null;d9.M.R.call(this)};
g.h.CJ=function(){this.aa("screenChange")};
g.h.nG=function(){this.aa("onlineScreenChange")};
var m9=null,t9=[],y9=null,F9=null;g.C(N9,g.Gn);g.h=N9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.w,(0,g.z)(function(){this.Mb("Failed to play video with cast v2 channel.");P9(this,"play")},this)):P9(this,"play"),S9(this,1,g.VB(O9(this))),this.aa("remotePlayerChange")):R9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.w,(0,g.z)(function(){this.Mb("Failed to pause video with cast v2 channel.");P9(this,"pause")},this)):P9(this,"pause"),S9(this,2,g.VB(O9(this))),this.aa("remotePlayerChange")):R9(this,this.pause)};
g.h.lw=function(a){if(1==this.g){if(this.o){var b=O9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.gb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.w,(0,g.z)(function(){this.Mb("Failed to seek in video with cast v2 channel.");P9(this,"seekTo",{newTime:a})},this))}else P9(this,"seekTo",{newTime:a});
S9(this,3,a);this.aa("remotePlayerChange")}else R9(this,g.B(this.lw,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.w,(0,g.z)(function(){this.Mb("Failed to stop video with cast v2 channel.");P9(this,"stopVideo")},this)):P9(this,"stopVideo");
var a=O9(this);g.TB(a);Q9(this,a);this.aa("remotePlayerChange")}else R9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=O9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){T9("set receiver volume: "+d)},this),(0,g.z)(function(){this.Mb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){T9("set receiver muted: "+b)},this),(0,g.z)(function(){this.Mb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);P9(this,"setVolume",e)}c.muted=b;c.volume=a;Q9(this,c)}else R9(this,g.B(this.setVolume,a,b))};
g.h.Fv=function(a,b){if(1==this.g){var c=O9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.mf(b.style),g.Zb(d,c.o));P9(this,"setSubtitlesTrack",d);Q9(this,c)}else R9(this,g.B(this.Fv,a,b))};
g.h.ip=function(a,b){if(1==this.g){P9(this,"setAudioTrack",{videoId:a,audioTrackId:b.zc.id});var c=O9(this);c.audioTrackId=b.zc.id;Q9(this,c)}else R9(this,g.B(this.ip,a,b))};
g.h.prevVideo=function(a,b){if(1==this.g){if(a&&b){var c=O9(this);g.WB(c,a,b);Q9(this,c)}P9(this,"previous")}else R9(this,g.B(this.prevVideo,a,b))};
g.h.nextVideo=function(a,b){if(1==this.g){if(a&&b){var c=O9(this);g.WB(c,a,b);Q9(this,c)}P9(this,"next")}else R9(this,g.B(this.nextVideo,a,b))};
g.h.Rr=function(){1==this.g?P9(this,"dismissAutoplay"):R9(this,this.Rr)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.aa("proxyStateChange",a,this.g)}N9.M.dispose.call(this)};
g.h.R=function(){rra(this);this.B=null;this.C.clear();M9(this,null);N9.M.R.call(this)};
g.h.jp=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.aa("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.PB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.HG=function(a,b){this.aa(a,b)};
g.h.HE=function(a){if(!a)this.Hi(null),M9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=O9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)T9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,Q9(this,b)}};
g.h.Hi=function(a){T9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),sra(this),this.aa("remotePlayerChange")};
g.h.GE=function(a){a?(sra(this),this.aa("remotePlayerChange")):this.Hi(null)};
g.h.QE=function(){var a=D9();a&&M9(this,a)};
g.h.Mb=function(a){g.Iz("CP",a)};
var f$=[];g.h=Era.prototype;g.h.lg=function(a,b,c){var d=this.g;if(g.p(c)?c:this.o)d="https://"+this.A+this.B+this.g;return g.Wf(d+a,b||{})};
g.h.hp=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Db:g.B(this.xJ,c,!0),onError:g.B(this.wJ,d),Uc:g.B(this.yJ,d)};b&&(c.Sb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Gi(a,c)};
g.h.xJ=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.wJ=function(a,b){a(Error("Request error: "+b.status))};
g.h.yJ=function(a){a(Error("request timed out"))};
g.C(V9,g.L);g.h=V9.prototype;
g.h.R=function(){V9.M.R.call(this);X9(this);c$(this);this.J();this.Z.removeEventListener("onVolumeChange",this.Ik,this);this.Z.removeEventListener("onCaptionsTrackListChanged",this.uu,this);this.Z.removeEventListener("captionschanged",this.iu,this);this.Z.removeEventListener("videoplayerreset",this.Ki,this);this.Z.removeEventListener("captionssettingschanged",this.Ho,this);this.Z.removeEventListener("mdxautoplaycancel",this.pr,this);this.g.Ja("proxyStateChange",this.Hu,this);this.g.Ja("remotePlayerChange",
this.Ji,this);this.g.Ja("remoteQueueChange",this.Ki,this);this.g.Ja("autoplayUpNext",this.gu,this);this.g.Ja("previousNextChange",this.Eu,this);this.g.Ja("nowAutoplaying",this.xu,this);this.g.Ja("autoplayDismissed",this.fu,this);this.g=this.H=null};
g.h.gx=function(a,b){2==this.g.g||(Z9(this)?this.eC.apply(this,arguments):this.bC.apply(this,arguments))};
g.h.iu=function(a){this.gx("control_subtitles_set_track",g.Tb(a)?null:a)};
g.h.Ho=function(){var a=this.Z.Ec("captions","track");g.Tb(a)||a$(this,a)};
g.h.bC=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b$(this,this.Z.getCurrentTime());break;case "control_seek":b$(this,c[0]);break;case "control_subtitles_set_track":a$(this,c[0]);break;case "control_set_audio_track":c=c[0],Z9(this)&&this.g.ip($9(this),c)}};
g.h.eC=function(a,b){if(1081!=O9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":O9(this.g).gb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.Tg(c[0],c[1]);break;case "control_subtitles_set_track":a$(this,c[0]);break;case "control_set_audio_track":c=c[0],Z9(this)&&this.g.ip($9(this),c)}}};
g.h.Ik=function(a){if(Z9(this)){this.g.Ja("remotePlayerChange",this.Ji,this);var b=Math.round(a.volume);a=!!a.muted;var c=O9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Ji,this)}};
g.h.uu=function(){g.Tb(this.o)||Gra(this,this.o);this.A=!1};
g.h.Hu=function(a,b){c$(this);2==b&&this.Lv()};
g.h.Ji=function(){if(Z9(this)){X9(this);var a=O9(this.g);switch(a.g){case 1081:Y9(this,new g.ll(8));break;case 1:Hra(this);Y9(this,new g.ll(8));break;case 1083:case 3:Y9(this,new g.ll(9));break;case 0:Y9(this,new g.ll(2));this.F.stop();W9(this,this.Z.getVideoData().lengthSeconds);break;case 1082:Y9(this,new g.ll(4));break;case 2:Y9(this,new g.ll(4));W9(this,g.VB(a));break;case -1:Y9(this,new g.ll(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.Q("YTP_MDX_PLAYER_ERROR")},Y9(this,new g.ll(128,
a))}var a=O9(this.g).o,b=this.o;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.o=a,Gra(this,a));a=O9(this.g);-1==a.volume||Math.round(this.Z.getVolume())==a.volume&&this.Z.Bd()==a.muted||this.G.isActive()||this.Wv()}else Fra(this)};
g.h.Eu=function(){this.Z.Qa("mdxpreviousnextchange")};
g.h.Ki=function(){Z9(this)||Fra(this)};
g.h.pr=function(){this.g.Rr()};
g.h.gu=function(a){a&&(a=g.Gi("/watch_queue_ajax",{method:"GET",Cc:{action_get_watch_queue_item:1,video_id:a},Db:(0,g.z)(this.BH,this)}))&&(this.J=(0,g.z)(a.abort,a))};
g.h.BH=function(a,b){var c=new g.Ay({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Z.Qa("mdxautoplayupnext",c)};
g.h.xu=function(a){(0,window.isNaN)(a)||this.Z.Qa("mdxnowautoplaying",a)};
g.h.fu=function(){this.Z.Qa("mdxautoplaycanceled")};
g.h.DL=function(a,b){-1==O9(this.g).g?b$(this,a):b&&this.g.lw(a)};
g.h.Wv=function(){if(Z9(this)){var a=O9(this.g);this.Z.removeEventListener("onVolumeChange",this.Ik,this);a.muted?this.Z.mute():this.Z.rf();this.Z.setVolume(a.volume);this.Z.addEventListener("onVolumeChange",this.Ik,this)}};
g.h.Lv=function(){c$(this);X9(this);var a=this.g.B.getReconnectTimeout();2!=this.g.g||(0,window.isNaN)(a)||(this.C=g.Rg((0,g.z)(this.Lv,this),1E3))};
g.C(d$,g.W);d$.prototype.B=function(a){Jra(this,a.state)};
g.C(h$,g.hz);g.h=h$.prototype;g.h.create=function(){Lra("embedded"==g.V(this.g).g);this.D.push(g.zi("yt-remote-before-disconnect",this.DE,this));this.D.push(g.zi("yt-remote-connection-change",this.PG,this));this.D.push(g.zi("yt-remote-receiver-availability-change",this.Fu,this));this.D.push(g.zi("yt-remote-auto-connect",this.NG,this));this.D.push(g.zi("yt-remote-receiver-resumed",this.MG,this));this.Fu()};
g.h.load=function(){this.g.Am();h$.M.load.call(this);this.C=new V9(this,this.g,this.o);var a;a=(a=A9())?a.currentTime:0;var b=J9()?new N9(i9(),void 0):null;0==a&&b&&(a=g.VB(O9(b)));0!=a&&(this.H=a||0,this.g.Qa("progresssync",a,void 0));Ira(this,this.F,this.F);g.Z4(this.g.app,6)};
g.h.unload=function(){this.g.Qa("mdxautoplaycanceled");this.B=this.A;g.Db(this.C,this.o);this.o=this.C=null;h$.M.unload.call(this);g.Z4(this.g.app,5)};
g.h.R=function(){g.Ai(this.D);h$.M.R.call(this)};
g.h.kj=function(a,b){this.loaded&&this.C.gx.apply(this.C,arguments)};
g.h.HB=function(){return this.loaded?this.C.suggestion:null};
g.h.Xw=function(){return this.o?O9(this.o).L:!1};
g.h.hasNext=function(){return this.o?O9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.gL=function(){var a=O9(this.o),b=this.g.getVideoData(),c=g.gm(this.g),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.G)()-a.A)/1E3:a.B;var l=1>=c9(a)-this.getCurrentTime(),m=a.J,n=c9(a),a=0<a.C?a.C+((0,g.G)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.prevVideo=function(){this.o&&this.o.prevVideo()};
g.h.DE=function(a){1==a&&(this.J=this.o?O9(this.o):null)};
g.h.PG=function(){var a=J9()?new N9(i9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Cb(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.Fc(g.VB(a)));this.g.Qa("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.Fu=function(){this.G=[this.A].concat(Kra());var a=e$()||this.A;i$(this,a,!this.loaded);this.g.ya("onMdxReceiversChange")};
g.h.NG=function(){var a=e$();i$(this,a)};
g.h.MG=function(){this.B=e$()};
g.h.fL=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?g$():i$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&g$(),!0):!1}};
g.h.hL=function(){P9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Ue=function(){return!1};
window._exportCheck==g.xa&&g.ka("ytmod.player.remote",h$,void 0);})(_yt_player);

import{aW as _e,aX as De,g as Se,s as Ce,q as Me,p as Ee,a as Ie,b as Ye,_ as u,c as lt,j as Tt,d as Ae,a_ as X,l as nt,k as Fe,o as $e,r as Le,z as Oe}from"../app.rYBoEcqY.js";import{t as We,m as Pe,a as Ve,l as ze,h as Re,c as Qt,d as Kt,e as Ne,g as He,i as Be,j as Ge,k as je,n as Xe,p as Ue,q as Jt,r as te,s as ee,u as re,v as ie}from"./d3-scale.DlYbYB9H.js";import"./framework.CohJ1kFH.js";import"./theme.Tp8TESzx.js";function qe(t){return t}var bt=1,It=2,$t=3,xt=4,se=1e-6;function Ze(t){return"translate("+t+",0)"}function Qe(t){return"translate(0,"+t+")"}function Ke(t){return e=>+t(e)}function Je(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function tr(){return!this.__axis}function de(t,e){var r=[],i=null,s=null,o=6,d=6,T=3,x=typeof window<"u"&&window.devicePixelRatio>1?0:.5,C=t===bt||t===xt?-1:1,D=t===xt||t===It?"x":"y",O=t===bt||t===$t?Ze:Qe;function _(w){var V=i??(e.ticks?e.ticks.apply(e,r):e.domain()),L=s??(e.tickFormat?e.tickFormat.apply(e,r):qe),S=Math.max(o,0)+T,z=e.range(),U=+z[0]+x,R=+z[z.length-1]+x,G=(e.bandwidth?Je:Ke)(e.copy(),x),H=w.selection?w.selection():w,M=H.selectAll(".domain").data([null]),g=H.selectAll(".tick").data(V,e).order(),m=g.exit(),$=g.enter().append("g").attr("class","tick"),k=g.select("line"),b=g.select("text");M=M.merge(M.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),g=g.merge($),k=k.merge($.append("line").attr("stroke","currentColor").attr(D+"2",C*o)),b=b.merge($.append("text").attr("fill","currentColor").attr(D,C*S).attr("dy",t===bt?"0em":t===$t?"0.71em":"0.32em")),w!==H&&(M=M.transition(w),g=g.transition(w),k=k.transition(w),b=b.transition(w),m=m.transition(w).attr("opacity",se).attr("transform",function(v){return isFinite(v=G(v))?O(v+x):this.getAttribute("transform")}),$.attr("opacity",se).attr("transform",function(v){var p=this.parentNode.__axis;return O((p&&isFinite(p=p(v))?p:G(v))+x)})),m.remove(),M.attr("d",t===xt||t===It?d?"M"+C*d+","+U+"H"+x+"V"+R+"H"+C*d:"M"+x+","+U+"V"+R:d?"M"+U+","+C*d+"V"+x+"H"+R+"V"+C*d:"M"+U+","+x+"H"+R),g.attr("opacity",1).attr("transform",function(v){return O(G(v)+x)}),k.attr(D+"2",C*o),b.attr(D,C*S).text(L),H.filter(tr).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===It?"start":t===xt?"end":"middle"),H.each(function(){this.__axis=G})}return _.scale=function(w){return arguments.length?(e=w,_):e},_.ticks=function(){return r=Array.from(arguments),_},_.tickArguments=function(w){return arguments.length?(r=w==null?[]:Array.from(w),_):r.slice()},_.tickValues=function(w){return arguments.length?(i=w==null?null:Array.from(w),_):i&&i.slice()},_.tickFormat=function(w){return arguments.length?(s=w,_):s},_.tickSize=function(w){return arguments.length?(o=d=+w,_):o},_.tickSizeInner=function(w){return arguments.length?(o=+w,_):o},_.tickSizeOuter=function(w){return arguments.length?(d=+w,_):d},_.tickPadding=function(w){return arguments.length?(T=+w,_):T},_.offset=function(w){return arguments.length?(x=+w,_):x},_}function er(t){return de(bt,t)}function rr(t){return de($t,t)}var Yt="day",ir="week",sr="year",nr="YYYY-MM-DDTHH:mm:ssZ",ar="isoweek";const or=function(t,e,r){var i=function(x,C){var D=(C?r.utc:r)().year(x).startOf(sr),O=4-D.isoWeekday();return D.isoWeekday()>4&&(O+=7),D.add(O,Yt)},s=function(x){return x.add(4-x.isoWeekday(),Yt)},o=e.prototype;o.isoWeekYear=function(){var T=s(this);return T.year()},o.isoWeek=function(T){if(!this.$utils().u(T))return this.add((T-this.isoWeek())*7,Yt);var x=s(this),C=i(this.isoWeekYear(),this.$u);return x.diff(C,ir)+1},o.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var d=o.startOf;o.startOf=function(T,x){var C=this.$utils(),D=C.u(x)?!0:x,O=C.p(T);return O===ar?D?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(T,x)}};var cr=function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(r,i,s){return i||s.slice(1)})},lr={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ur=function(e,r){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,s,o){var d=o&&o.toUpperCase();return s||r[o]||lr[o]||cr(r[d])})},dr=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,ne=/\d/,kt=/\d\d/,fr=/\d{3}/,hr=/\d{4}/,J=/\d\d?/,mr=/[+-]?\d+/,kr=/[+-]\d\d:?(\d\d)?|Z/,yt=/\d*[^-_:/,()\s\d]+/,it={},fe=function(e){return e=+e,e+(e>68?1900:2e3)};function yr(t){if(!t||t==="Z")return 0;var e=t.match(/([+-]|\d\d)/g),r=+(e[1]*60)+(+e[2]||0);return r===0?0:e[0]==="+"?-r:r}var q=function(e){return function(r){this[e]=+r}},ae=[kr,function(t){var e=this.zone||(this.zone={});e.offset=yr(t)}],At=function(e){var r=it[e];return r&&(r.indexOf?r:r.s.concat(r.f))},oe=function(e,r){var i,s=it,o=s.meridiem;if(!o)i=e===(r?"pm":"PM");else for(var d=1;d<=24;d+=1)if(e.indexOf(o(d,0,r))>-1){i=d>12;break}return i},gr={A:[yt,function(t){this.afternoon=oe(t,!1)}],a:[yt,function(t){this.afternoon=oe(t,!0)}],Q:[ne,function(t){this.month=(t-1)*3+1}],S:[ne,function(t){this.milliseconds=+t*100}],SS:[kt,function(t){this.milliseconds=+t*10}],SSS:[fr,function(t){this.milliseconds=+t}],s:[J,q("seconds")],ss:[J,q("seconds")],m:[J,q("minutes")],mm:[J,q("minutes")],H:[J,q("hours")],h:[J,q("hours")],HH:[J,q("hours")],hh:[J,q("hours")],D:[J,q("day")],DD:[kt,q("day")],Do:[yt,function(t){var e=it,r=e.ordinal,i=t.match(/\d+/);if(this.day=i[0],!!r)for(var s=1;s<=31;s+=1)r(s).replace(/\[|\]/g,"")===t&&(this.day=s)}],w:[J,q("week")],ww:[kt,q("week")],M:[J,q("month")],MM:[kt,q("month")],MMM:[yt,function(t){var e=At("months"),r=At("monthsShort"),i=(r||e.map(function(s){return s.slice(0,3)})).indexOf(t)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[yt,function(t){var e=At("months"),r=e.indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[mr,q("year")],YY:[kt,function(t){this.year=fe(t)}],YYYY:[hr,q("year")],Z:ae,ZZ:ae};function vr(t){var e=t.afternoon;if(e!==void 0){var r=t.hours;e?r<12&&(t.hours+=12):r===12&&(t.hours=0),delete t.afternoon}}function pr(t){t=ur(t,it&&it.formats);for(var e=t.match(dr),r=e.length,i=0;i<r;i+=1){var s=e[i],o=gr[s],d=o&&o[0],T=o&&o[1];T?e[i]={regex:d,parser:T}:e[i]=s.replace(/^\[|\]$/g,"")}return function(x){for(var C={},D=0,O=0;D<r;D+=1){var _=e[D];if(typeof _=="string")O+=_.length;else{var w=_.regex,V=_.parser,L=x.slice(O),S=w.exec(L),z=S[0];V.call(C,z),x=x.replace(z,"")}}return vr(C),C}}var Tr=function(e,r,i,s){try{if(["x","X"].indexOf(r)>-1)return new Date((r==="X"?1e3:1)*e);var o=pr(r),d=o(e),T=d.year,x=d.month,C=d.day,D=d.hours,O=d.minutes,_=d.seconds,w=d.milliseconds,V=d.zone,L=d.week,S=new Date,z=C||(!T&&!x?S.getDate():1),U=T||S.getFullYear(),R=0;T&&!x||(R=x>0?x-1:S.getMonth());var G=D||0,H=O||0,M=_||0,g=w||0;if(V)return new Date(Date.UTC(U,R,z,G,H,M,g+V.offset*60*1e3));if(i)return new Date(Date.UTC(U,R,z,G,H,M,g));var m;return m=new Date(U,R,z,G,H,M,g),L&&(m=s(m).week(L).toDate()),m}catch{return new Date("")}};const xr=function(t,e,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(fe=t.parseTwoDigitYear);var i=e.prototype,s=i.parse;i.parse=function(o){var d=o.date,T=o.utc,x=o.args;this.$u=T;var C=x[1];if(typeof C=="string"){var D=x[2]===!0,O=x[3]===!0,_=D||O,w=x[2];O&&(w=x[2]),it=this.$locale(),!D&&w&&(it=r.Ls[w]),this.$d=Tr(d,C,T,r),this.init(),w&&w!==!0&&(this.$L=this.locale(w).$L),_&&d!=this.format(C)&&(this.$d=new Date("")),it={}}else if(C instanceof Array)for(var V=C.length,L=1;L<=V;L+=1){x[1]=C[L-1];var S=r.apply(this,x);if(S.isValid()){this.$d=S.$d,this.$L=S.$L,this.init();break}L===V&&(this.$d=new Date(""))}else s.call(this,o)}},br=function(t,e){var r=e.prototype,i=r.format;r.format=function(s){var o=this,d=this.$locale();if(!this.isValid())return i.bind(this)(s);var T=this.$utils(),x=s||nr,C=x.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(D){switch(D){case"Q":return Math.ceil((o.$M+1)/3);case"Do":return d.ordinal(o.$D);case"gggg":return o.weekYear();case"GGGG":return o.isoWeekYear();case"wo":return d.ordinal(o.week(),"W");case"w":case"ww":return T.s(o.week(),D==="w"?1:2,"0");case"W":case"WW":return T.s(o.isoWeek(),D==="W"?1:2,"0");case"k":case"kk":return T.s(String(o.$H===0?24:o.$H),D==="k"?1:2,"0");case"X":return Math.floor(o.$d.getTime()/1e3);case"x":return o.$d.getTime();case"z":return"["+o.offsetName()+"]";case"zzz":return"["+o.offsetName("long")+"]";default:return D}});return i.bind(this)(C)}};var he={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(_e,function(){var r,i,s=1e3,o=6e4,d=36e5,T=864e5,x=31536e6,C=2628e6,D=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,O=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,_={years:x,months:C,days:T,hours:d,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},w=function(M){return M instanceof G},V=function(M,g,m){return new G(M,m,g.$l)},L=function(M){return i.p(M)+"s"},S=function(M){return M<0},z=function(M){return S(M)?Math.ceil(M):Math.floor(M)},U=function(M){return Math.abs(M)},R=function(M,g){return M?S(M)?{negative:!0,format:""+U(M)+g}:{negative:!1,format:""+M+g}:{negative:!1,format:""}},G=function(){function M(m,$,k){var b=this;if(this.$d={},this.$l=k,m===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return V(m*_[L($)],this);if(typeof m=="number")return this.$ms=m,this.parseFromMilliseconds(),this;if(typeof m=="object")return Object.keys(m).forEach(function(a){b.$d[L(a)]=m[a]}),this.calMilliseconds(),this;if(typeof m=="string"){var v=m.match(D);if(v){var p=v.slice(2).map(function(a){return a!=null?Number(a):0});return this.$d.years=p[0],this.$d.months=p[1],this.$d.weeks=p[2],this.$d.days=p[3],this.$d.hours=p[4],this.$d.minutes=p[5],this.$d.seconds=p[6],this.calMilliseconds(),this}}return this}var g=M.prototype;return g.calMilliseconds=function(){var m=this;this.$ms=Object.keys(this.$d).reduce(function($,k){return $+(m.$d[k]||0)*_[k]},0)},g.parseFromMilliseconds=function(){var m=this.$ms;this.$d.years=z(m/x),m%=x,this.$d.months=z(m/C),m%=C,this.$d.days=z(m/T),m%=T,this.$d.hours=z(m/d),m%=d,this.$d.minutes=z(m/o),m%=o,this.$d.seconds=z(m/s),m%=s,this.$d.milliseconds=m},g.toISOString=function(){var m=R(this.$d.years,"Y"),$=R(this.$d.months,"M"),k=+this.$d.days||0;this.$d.weeks&&(k+=7*this.$d.weeks);var b=R(k,"D"),v=R(this.$d.hours,"H"),p=R(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var h=R(a,"S"),y=m.negative||$.negative||b.negative||v.negative||p.negative||h.negative,f=v.format||p.format||h.format?"T":"",A=(y?"-":"")+"P"+m.format+$.format+b.format+f+v.format+p.format+h.format;return A==="P"||A==="-P"?"P0D":A},g.toJSON=function(){return this.toISOString()},g.format=function(m){var $=m||"YYYY-MM-DDTHH:mm:ss",k={Y:this.$d.years,YY:i.s(this.$d.years,2,"0"),YYYY:i.s(this.$d.years,4,"0"),M:this.$d.months,MM:i.s(this.$d.months,2,"0"),D:this.$d.days,DD:i.s(this.$d.days,2,"0"),H:this.$d.hours,HH:i.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:i.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:i.s(this.$d.seconds,2,"0"),SSS:i.s(this.$d.milliseconds,3,"0")};return $.replace(O,function(b,v){return v||String(k[b])})},g.as=function(m){return this.$ms/_[L(m)]},g.get=function(m){var $=this.$ms,k=L(m);return k==="milliseconds"?$%=1e3:$=k==="weeks"?z($/_[k]):this.$d[k],$||0},g.add=function(m,$,k){var b;return b=$?m*_[L($)]:w(m)?m.$ms:V(m,this).$ms,V(this.$ms+b*(k?-1:1),this)},g.subtract=function(m,$){return this.add(m,$,!0)},g.locale=function(m){var $=this.clone();return $.$l=m,$},g.clone=function(){return V(this.$ms,this)},g.humanize=function(m){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!m)},g.valueOf=function(){return this.asMilliseconds()},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},M}(),H=function(M,g,m){return M.add(g.years()*m,"y").add(g.months()*m,"M").add(g.days()*m,"d").add(g.hours()*m,"h").add(g.minutes()*m,"m").add(g.seconds()*m,"s").add(g.milliseconds()*m,"ms")};return function(M,g,m){r=m,i=m().$utils(),m.duration=function(b,v){var p=m.locale();return V(b,{$l:p},v)},m.isDuration=w;var $=g.prototype.add,k=g.prototype.subtract;g.prototype.add=function(b,v){return w(b)?H(this,b,1):$.bind(this)(b,v)},g.prototype.subtract=function(b,v){return w(b)?H(this,b,-1):k.bind(this)(b,v)}}})})(he);var wr=he.exports;const _r=De(wr);var Lt=function(){var t=u(function(p,a,h,y){for(h=h||{},y=p.length;y--;h[p[y]]=a);return h},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],i=[1,27],s=[1,28],o=[1,29],d=[1,30],T=[1,31],x=[1,32],C=[1,33],D=[1,34],O=[1,9],_=[1,10],w=[1,11],V=[1,12],L=[1,13],S=[1,14],z=[1,15],U=[1,16],R=[1,19],G=[1,20],H=[1,21],M=[1,22],g=[1,23],m=[1,25],$=[1,35],k={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:u(function(a,h,y,f,A,n,F){var l=n.length-1;switch(A){case 1:return n[l-1];case 2:this.$=[];break;case 3:n[l-1].push(n[l]),this.$=n[l-1];break;case 4:case 5:this.$=n[l];break;case 6:case 7:this.$=[];break;case 8:f.setWeekday("monday");break;case 9:f.setWeekday("tuesday");break;case 10:f.setWeekday("wednesday");break;case 11:f.setWeekday("thursday");break;case 12:f.setWeekday("friday");break;case 13:f.setWeekday("saturday");break;case 14:f.setWeekday("sunday");break;case 15:f.setWeekend("friday");break;case 16:f.setWeekend("saturday");break;case 17:f.setDateFormat(n[l].substr(11)),this.$=n[l].substr(11);break;case 18:f.enableInclusiveEndDates(),this.$=n[l].substr(18);break;case 19:f.TopAxis(),this.$=n[l].substr(8);break;case 20:f.setAxisFormat(n[l].substr(11)),this.$=n[l].substr(11);break;case 21:f.setTickInterval(n[l].substr(13)),this.$=n[l].substr(13);break;case 22:f.setExcludes(n[l].substr(9)),this.$=n[l].substr(9);break;case 23:f.setIncludes(n[l].substr(9)),this.$=n[l].substr(9);break;case 24:f.setTodayMarker(n[l].substr(12)),this.$=n[l].substr(12);break;case 27:f.setDiagramTitle(n[l].substr(6)),this.$=n[l].substr(6);break;case 28:this.$=n[l].trim(),f.setAccTitle(this.$);break;case 29:case 30:this.$=n[l].trim(),f.setAccDescription(this.$);break;case 31:f.addSection(n[l].substr(8)),this.$=n[l].substr(8);break;case 33:f.addTask(n[l-1],n[l]),this.$="task";break;case 34:this.$=n[l-1],f.setClickEvent(n[l-1],n[l],null);break;case 35:this.$=n[l-2],f.setClickEvent(n[l-2],n[l-1],n[l]);break;case 36:this.$=n[l-2],f.setClickEvent(n[l-2],n[l-1],null),f.setLink(n[l-2],n[l]);break;case 37:this.$=n[l-3],f.setClickEvent(n[l-3],n[l-2],n[l-1]),f.setLink(n[l-3],n[l]);break;case 38:this.$=n[l-2],f.setClickEvent(n[l-2],n[l],null),f.setLink(n[l-2],n[l-1]);break;case 39:this.$=n[l-3],f.setClickEvent(n[l-3],n[l-1],n[l]),f.setLink(n[l-3],n[l-2]);break;case 40:this.$=n[l-1],f.setLink(n[l-1],n[l]);break;case 41:case 47:this.$=n[l-1]+" "+n[l];break;case 42:case 43:case 45:this.$=n[l-2]+" "+n[l-1]+" "+n[l];break;case 44:case 46:this.$=n[l-3]+" "+n[l-2]+" "+n[l-1]+" "+n[l];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:i,14:s,15:o,16:d,17:T,18:x,19:18,20:C,21:D,22:O,23:_,24:w,25:V,26:L,27:S,28:z,29:U,30:R,31:G,33:H,35:M,36:g,37:24,38:m,40:$},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:r,13:i,14:s,15:o,16:d,17:T,18:x,19:18,20:C,21:D,22:O,23:_,24:w,25:V,26:L,27:S,28:z,29:U,30:R,31:G,33:H,35:M,36:g,37:24,38:m,40:$},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:u(function(a,h){if(h.recoverable)this.trace(a);else{var y=new Error(a);throw y.hash=h,y}},"parseError"),parse:u(function(a){var h=this,y=[0],f=[],A=[null],n=[],F=this.table,l="",j=0,c=0,E=2,I=1,W=n.slice.call(arguments,1),Y=Object.create(this.lexer),N={yy:{}};for(var P in this.yy)Object.prototype.hasOwnProperty.call(this.yy,P)&&(N.yy[P]=this.yy[P]);Y.setInput(a,N.yy),N.yy.lexer=Y,N.yy.parser=this,typeof Y.yylloc>"u"&&(Y.yylloc={});var mt=Y.yylloc;n.push(mt);var Ct=Y.options&&Y.options.ranges;typeof N.yy.parseError=="function"?this.parseError=N.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function we(Q){y.length=y.length-2*Q,A.length=A.length-Q,n.length=n.length-Q}u(we,"popStack");function qt(){var Q;return Q=f.pop()||Y.lex()||I,typeof Q!="number"&&(Q instanceof Array&&(f=Q,Q=f.pop()),Q=h.symbols_[Q]||Q),Q}u(qt,"lex");for(var Z,st,K,Mt,ot={},vt,et,Zt,pt;;){if(st=y[y.length-1],this.defaultActions[st]?K=this.defaultActions[st]:((Z===null||typeof Z>"u")&&(Z=qt()),K=F[st]&&F[st][Z]),typeof K>"u"||!K.length||!K[0]){var Et="";pt=[];for(vt in F[st])this.terminals_[vt]&&vt>E&&pt.push("'"+this.terminals_[vt]+"'");Y.showPosition?Et="Parse error on line "+(j+1)+`:
`+Y.showPosition()+`
Expecting `+pt.join(", ")+", got '"+(this.terminals_[Z]||Z)+"'":Et="Parse error on line "+(j+1)+": Unexpected "+(Z==I?"end of input":"'"+(this.terminals_[Z]||Z)+"'"),this.parseError(Et,{text:Y.match,token:this.terminals_[Z]||Z,line:Y.yylineno,loc:mt,expected:pt})}if(K[0]instanceof Array&&K.length>1)throw new Error("Parse Error: multiple actions possible at state: "+st+", token: "+Z);switch(K[0]){case 1:y.push(Z),A.push(Y.yytext),n.push(Y.yylloc),y.push(K[1]),Z=null,c=Y.yyleng,l=Y.yytext,j=Y.yylineno,mt=Y.yylloc;break;case 2:if(et=this.productions_[K[1]][1],ot.$=A[A.length-et],ot._$={first_line:n[n.length-(et||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(et||1)].first_column,last_column:n[n.length-1].last_column},Ct&&(ot._$.range=[n[n.length-(et||1)].range[0],n[n.length-1].range[1]]),Mt=this.performAction.apply(ot,[l,c,j,N.yy,K[1],A,n].concat(W)),typeof Mt<"u")return Mt;et&&(y=y.slice(0,-1*et*2),A=A.slice(0,-1*et),n=n.slice(0,-1*et)),y.push(this.productions_[K[1]][0]),A.push(ot.$),n.push(ot._$),Zt=F[y[y.length-2]][y[y.length-1]],y.push(Zt);break;case 3:return!0}}return!0},"parse")},b=function(){var p={EOF:1,parseError:u(function(h,y){if(this.yy.parser)this.yy.parser.parseError(h,y);else throw new Error(h)},"parseError"),setInput:u(function(a,h){return this.yy=h||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var h=a.match(/(?:\r\n?|\n).*/g);return h?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:u(function(a){var h=a.length,y=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-h),this.offset-=h;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),y.length-1&&(this.yylineno-=y.length-1);var A=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===f.length?this.yylloc.first_column:0)+f[f.length-y.length].length-y[0].length:this.yylloc.first_column-h},this.options.ranges&&(this.yylloc.range=[A[0],A[0]+this.yyleng-h]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(a){this.unput(this.match.slice(a))},"less"),pastInput:u(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var a=this.pastInput(),h=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+h+"^"},"showPosition"),test_match:u(function(a,h){var y,f,A;if(this.options.backtrack_lexer&&(A={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(A.yylloc.range=this.yylloc.range.slice(0))),f=a[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],y=this.performAction.call(this,this.yy,this,h,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),y)return y;if(this._backtrack){for(var n in A)this[n]=A[n];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,h,y,f;this._more||(this.yytext="",this.match="");for(var A=this._currentRules(),n=0;n<A.length;n++)if(y=this._input.match(this.rules[A[n]]),y&&(!h||y[0].length>h[0].length)){if(h=y,f=n,this.options.backtrack_lexer){if(a=this.test_match(y,A[n]),a!==!1)return a;if(this._backtrack){h=!1;continue}else return!1}else if(!this.options.flex)break}return h?(a=this.test_match(h,A[f]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var h=this.next();return h||this.lex()},"lex"),begin:u(function(h){this.conditionStack.push(h)},"begin"),popState:u(function(){var h=this.conditionStack.length-1;return h>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(h){return h=this.conditionStack.length-1-Math.abs(h||0),h>=0?this.conditionStack[h]:"INITIAL"},"topState"),pushState:u(function(h){this.begin(h)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(h,y,f,A){switch(f){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return p}();k.lexer=b;function v(){this.yy={}}return u(v,"Parser"),v.prototype=k,k.Parser=v,new v}();Lt.parser=Lt;var Dr=Lt;X.extend(or);X.extend(xr);X.extend(br);var ce={friday:5,saturday:6},tt="",Vt="",zt=void 0,Rt="",dt=[],ft=[],Nt=new Map,Ht=[],Dt=[],ht="",Bt="",me=["active","done","crit","milestone","vert"],Gt=[],ct="",gt=!1,jt=!1,Xt="sunday",St="saturday",Ot=0,Sr=u(function(){Ht=[],Dt=[],ht="",Gt=[],wt=0,Pt=void 0,_t=void 0,B=[],tt="",Vt="",Bt="",zt=void 0,Rt="",dt=[],ft=[],gt=!1,jt=!1,Ot=0,Nt=new Map,ct="",Le(),Xt="sunday",St="saturday"},"clear"),Cr=u(function(t){ct=t},"setDiagramId"),Mr=u(function(t){Vt=t},"setAxisFormat"),Er=u(function(){return Vt},"getAxisFormat"),Ir=u(function(t){zt=t},"setTickInterval"),Yr=u(function(){return zt},"getTickInterval"),Ar=u(function(t){Rt=t},"setTodayMarker"),Fr=u(function(){return Rt},"getTodayMarker"),$r=u(function(t){tt=t},"setDateFormat"),Lr=u(function(){gt=!0},"enableInclusiveEndDates"),Or=u(function(){return gt},"endDatesAreInclusive"),Wr=u(function(){jt=!0},"enableTopAxis"),Pr=u(function(){return jt},"topAxisEnabled"),Vr=u(function(t){Bt=t},"setDisplayMode"),zr=u(function(){return Bt},"getDisplayMode"),Rr=u(function(){return tt},"getDateFormat"),ke=u((t,e)=>{const r=e.toLowerCase().split(/[\s,]+/).filter(i=>i!=="");return[...new Set([...t,...r])]},"mergeTokens"),Nr=u(function(t){dt=ke(dt,t)},"setIncludes"),Hr=u(function(){return dt},"getIncludes"),Br=u(function(t){ft=ke(ft,t)},"setExcludes"),Gr=u(function(){return ft},"getExcludes"),jr=u(function(){return Nt},"getLinks"),Xr=u(function(t){ht=t,Ht.push(t)},"addSection"),Ur=u(function(){return Ht},"getSections"),qr=u(function(){let t=le();const e=10;let r=0;for(;!t&&r<e;)t=le(),r++;return Dt=B,Dt},"getTasks"),ye=u(function(t,e,r,i){const s=t.format(e.trim()),o=t.format("YYYY-MM-DD");return i.includes(s)||i.includes(o)?!1:r.includes("weekends")&&(t.isoWeekday()===ce[St]||t.isoWeekday()===ce[St]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(s)||r.includes(o)},"isInvalidDate"),Zr=u(function(t){Xt=t},"setWeekday"),Qr=u(function(){return Xt},"getWeekday"),Kr=u(function(t){St=t},"setWeekend"),ge=u(function(t,e,r,i){if(!r.length||t.manualEndTime)return;let s;t.startTime instanceof Date?s=X(t.startTime):s=X(t.startTime,e,!0),s=s.add(1,"d");let o;t.endTime instanceof Date?o=X(t.endTime):o=X(t.endTime,e,!0);const[d,T]=Jr(s,o,e,r,i);t.endTime=d.toDate(),t.renderEndTime=T},"checkTaskDates"),Jr=u(function(t,e,r,i,s){let o=!1,d=null;const T=e.add(1e4,"d");for(;t<=e;){if(o||(d=e.toDate()),o=ye(t,r,i,s),o&&(e=e.add(1,"d"),e>T))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,d]},"fixTaskDates"),Wt=u(function(t,e,r){if(r=r.trim(),u(T=>{const x=T.trim();return x==="x"||x==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(r))return new Date(Number(r));const o=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(o!==null){let T=null;for(const C of o.groups.ids.split(" ")){let D=at(C);D!==void 0&&(!T||D.endTime>T.endTime)&&(T=D)}if(T)return T.endTime;const x=new Date;return x.setHours(0,0,0,0),x}let d=X(r,e.trim(),!0);if(d.isValid())return d.toDate();{nt.debug("Invalid date:"+r),nt.debug("With date format:"+e.trim());const T=new Date(r);if(T===void 0||isNaN(T.getTime())||T.getFullYear()<-1e4||T.getFullYear()>1e4)throw new Error("Invalid date:"+r);return T}},"getStartDate"),ve=u(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),pe=u(function(t,e,r,i=!1){r=r.trim();const o=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(o!==null){let D=null;for(const _ of o.groups.ids.split(" ")){let w=at(_);w!==void 0&&(!D||w.startTime<D.startTime)&&(D=w)}if(D)return D.startTime;const O=new Date;return O.setHours(0,0,0,0),O}let d=X(r,e.trim(),!0);if(d.isValid())return i&&(d=d.add(1,"d")),d.toDate();let T=X(t);const[x,C]=ve(r);if(!Number.isNaN(x)){const D=T.add(x,C);D.isValid()&&(T=D)}return T.toDate()},"getEndDate"),wt=0,ut=u(function(t){return t===void 0?(wt=wt+1,"task"+wt):t},"parseId"),ti=u(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const i=r.split(","),s={};Ut(i,s,me);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let o="";switch(i.length){case 1:s.id=ut(),s.startTime=t.endTime,o=i[0];break;case 2:s.id=ut(),s.startTime=Wt(void 0,tt,i[0]),o=i[1];break;case 3:s.id=ut(i[0]),s.startTime=Wt(void 0,tt,i[1]),o=i[2];break}return o&&(s.endTime=pe(s.startTime,tt,o,gt),s.manualEndTime=X(o,"YYYY-MM-DD",!0).isValid(),ge(s,tt,ft,dt)),s},"compileData"),ei=u(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const i=r.split(","),s={};Ut(i,s,me);for(let o=0;o<i.length;o++)i[o]=i[o].trim();switch(i.length){case 1:s.id=ut(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=ut(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=ut(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]};break}return s},"parseData"),Pt,_t,B=[],Te={},ri=u(function(t,e){const r={section:ht,type:ht,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=ei(_t,e);r.raw.startTime=i.startTime,r.raw.endTime=i.endTime,r.id=i.id,r.prevTaskId=_t,r.active=i.active,r.done=i.done,r.crit=i.crit,r.milestone=i.milestone,r.vert=i.vert,r.vert?r.order=-1:(r.order=Ot,Ot++);const s=B.push(r);_t=r.id,Te[r.id]=s-1},"addTask"),at=u(function(t){const e=Te[t];return B[e]},"findTaskById"),ii=u(function(t,e){const r={section:ht,type:ht,description:t,task:t,classes:[]},i=ti(Pt,e);r.startTime=i.startTime,r.endTime=i.endTime,r.id=i.id,r.active=i.active,r.done=i.done,r.crit=i.crit,r.milestone=i.milestone,r.vert=i.vert,Pt=r,Dt.push(r)},"addTaskOrg"),le=u(function(){const t=u(function(r){const i=B[r];let s="";switch(B[r].raw.startTime.type){case"prevTaskEnd":{const o=at(i.prevTaskId);i.startTime=o.endTime;break}case"getStartDate":s=Wt(void 0,tt,B[r].raw.startTime.startData),s&&(B[r].startTime=s);break}return B[r].startTime&&(B[r].endTime=pe(B[r].startTime,tt,B[r].raw.endTime.data,gt),B[r].endTime&&(B[r].processed=!0,B[r].manualEndTime=X(B[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ge(B[r],tt,ft,dt))),B[r].processed},"compileTask");let e=!0;for(const[r,i]of B.entries())t(r),e=e&&i.processed;return e},"compileTasks"),si=u(function(t,e){let r=e;lt().securityLevel!=="loose"&&(r=$e(e)),t.split(",").forEach(function(i){at(i)!==void 0&&(be(i,()=>{window.open(r,"_self")}),Nt.set(i,r))}),xe(t,"clickable")},"setLink"),xe=u(function(t,e){t.split(",").forEach(function(r){let i=at(r);i!==void 0&&i.classes.push(e)})},"setClass"),ni=u(function(t,e,r){if(lt().securityLevel!=="loose"||e===void 0)return;let i=[];if(typeof r=="string"){i=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let o=0;o<i.length;o++){let d=i[o].trim();d.startsWith('"')&&d.endsWith('"')&&(d=d.substr(1,d.length-2)),i[o]=d}}i.length===0&&i.push(t),at(t)!==void 0&&be(t,()=>{Oe.runFunc(e,...i)})},"setClickFun"),be=u(function(t,e){Gt.push(function(){const r=ct?`${ct}-${t}`:t,i=document.querySelector(`[id="${r}"]`);i!==null&&i.addEventListener("click",function(){e()})},function(){const r=ct?`${ct}-${t}`:t,i=document.querySelector(`[id="${r}-text"]`);i!==null&&i.addEventListener("click",function(){e()})})},"pushFun"),ai=u(function(t,e,r){t.split(",").forEach(function(i){ni(i,e,r)}),xe(t,"clickable")},"setClickEvent"),oi=u(function(t){Gt.forEach(function(e){e(t)})},"bindFunctions"),ci={getConfig:u(()=>lt().gantt,"getConfig"),clear:Sr,setDateFormat:$r,getDateFormat:Rr,enableInclusiveEndDates:Lr,endDatesAreInclusive:Or,enableTopAxis:Wr,topAxisEnabled:Pr,setAxisFormat:Mr,getAxisFormat:Er,setTickInterval:Ir,getTickInterval:Yr,setTodayMarker:Ar,getTodayMarker:Fr,setAccTitle:Ye,getAccTitle:Ie,setDiagramTitle:Ee,getDiagramTitle:Me,setDiagramId:Cr,setDisplayMode:Vr,getDisplayMode:zr,setAccDescription:Ce,getAccDescription:Se,addSection:Xr,getSections:Ur,getTasks:qr,addTask:ri,findTaskById:at,addTaskOrg:ii,setIncludes:Nr,getIncludes:Hr,setExcludes:Br,getExcludes:Gr,setClickEvent:ai,setLink:si,getLinks:jr,bindFunctions:oi,parseDuration:ve,isInvalidDate:ye,setWeekday:Zr,getWeekday:Qr,setWeekend:Kr};function Ut(t,e,r){let i=!0;for(;i;)i=!1,r.forEach(function(s){const o="^\\s*"+s+"\\s*$",d=new RegExp(o);t[0].match(d)&&(e[s]=!0,t.shift(1),i=!0)})}u(Ut,"getTaskTags");X.extend(_r);var li=u(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),ue={monday:Ue,tuesday:Xe,wednesday:je,thursday:Ge,friday:Be,saturday:He,sunday:Ne},ui=u((t,e)=>{let r=[...t].map(()=>-1/0),i=[...t].sort((o,d)=>o.startTime-d.startTime||o.order-d.order),s=0;for(const o of i)for(let d=0;d<r.length;d++)if(o.startTime>=r[d]){r[d]=o.endTime,o.order=d+e,d>s&&(s=d);break}return s},"getMaxIntersections"),rt,Ft=1e4,di=u(function(t,e,r,i){const s=lt().gantt;i.db.setDiagramId(e);const o=lt().securityLevel;let d;o==="sandbox"&&(d=Tt("#i"+e));const T=o==="sandbox"?Tt(d.nodes()[0].contentDocument.body):Tt("body"),x=o==="sandbox"?d.nodes()[0].contentDocument:document,C=x.getElementById(e);rt=C.parentElement.offsetWidth,rt===void 0&&(rt=1200),s.useWidth!==void 0&&(rt=s.useWidth);const D=i.db.getTasks(),O=D.filter(k=>!k.vert);let _=[];for(const k of O)_.push(k.type);_=$(_);const w={};let V=2*s.topPadding;if(i.db.getDisplayMode()==="compact"||s.displayMode==="compact"){const k={};for(const v of O)k[v.section]===void 0?k[v.section]=[v]:k[v.section].push(v);let b=0;for(const v of Object.keys(k)){const p=ui(k[v],b)+1;b+=p,V+=p*(s.barHeight+s.barGap),w[v]=p}}else{V+=O.length*(s.barHeight+s.barGap);for(const k of _)w[k]=O.filter(b=>b.type===k).length}C.setAttribute("viewBox","0 0 "+rt+" "+V);const L=T.select(`[id="${e}"]`),S=We().domain([Pe(D,function(k){return k.startTime}),Ve(D,function(k){return k.endTime})]).rangeRound([0,rt-s.leftPadding-s.rightPadding]);function z(k,b){const v=k.startTime,p=b.startTime;let a=0;return v>p?a=1:v<p&&(a=-1),a}u(z,"taskCompare"),D.sort(z),U(D,rt,V),Ae(L,V,rt,s.useMaxWidth),L.append("text").text(i.db.getDiagramTitle()).attr("x",rt/2).attr("y",s.titleTopMargin).attr("class","titleText");function U(k,b,v){const p=s.barHeight,a=p+s.barGap,h=s.topPadding,y=s.leftPadding,f=ze().domain([0,_.length]).range(["#00B9FA","#F95002"]).interpolate(Re);G(a,h,y,b,v,k,i.db.getExcludes(),i.db.getIncludes()),M(y,h,b,v),R(k,a,h,y,p,f,b),g(a,h),m(y,h,b,v)}u(U,"makeGantt");function R(k,b,v,p,a,h,y){k.sort((c,E)=>c.vert===E.vert?0:c.vert?1:-1);const f=k.filter(c=>!c.vert),n=[...new Set(f.map(c=>c.order))].map(c=>f.find(E=>E.order===c));L.append("g").selectAll("rect").data(n).enter().append("rect").attr("x",0).attr("y",function(c,E){return E=c.order,E*b+v-2}).attr("width",function(){return y-s.rightPadding/2}).attr("height",b).attr("class",function(c){for(const[E,I]of _.entries())if(c.type===I)return"section section"+E%s.numberSectionStyles;return"section section0"}).enter();const F=L.append("g").selectAll("rect").data(k).enter(),l=i.db.getLinks();if(F.append("rect").attr("id",function(c){return e+"-"+c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?S(c.startTime)+p+.5*(S(c.endTime)-S(c.startTime))-.5*a:S(c.startTime)+p}).attr("y",function(c,E){return E=c.order,c.vert?s.gridLineStartPadding:E*b+v}).attr("width",function(c){return c.milestone?a:c.vert?.08*a:S(c.renderEndTime||c.endTime)-S(c.startTime)}).attr("height",function(c){return c.vert?f.length*(s.barHeight+s.barGap)+s.barHeight*2:a}).attr("transform-origin",function(c,E){return E=c.order,(S(c.startTime)+p+.5*(S(c.endTime)-S(c.startTime))).toString()+"px "+(E*b+v+.5*a).toString()+"px"}).attr("class",function(c){const E="task";let I="";c.classes.length>0&&(I=c.classes.join(" "));let W=0;for(const[N,P]of _.entries())c.type===P&&(W=N%s.numberSectionStyles);let Y="";return c.active?c.crit?Y+=" activeCrit":Y=" active":c.done?c.crit?Y=" doneCrit":Y=" done":c.crit&&(Y+=" crit"),Y.length===0&&(Y=" task"),c.milestone&&(Y=" milestone "+Y),c.vert&&(Y=" vert "+Y),Y+=W,Y+=" "+I,E+Y}),F.append("text").attr("id",function(c){return e+"-"+c.id+"-text"}).text(function(c){return c.task}).attr("font-size",s.fontSize).attr("x",function(c){let E=S(c.startTime),I=S(c.renderEndTime||c.endTime);if(c.milestone&&(E+=.5*(S(c.endTime)-S(c.startTime))-.5*a,I=E+a),c.vert)return S(c.startTime)+p;const W=this.getBBox().width;return W>I-E?I+W+1.5*s.leftPadding>y?E+p-5:I+p+5:(I-E)/2+E+p}).attr("y",function(c,E){return c.vert?s.gridLineStartPadding+f.length*(s.barHeight+s.barGap)+60:(E=c.order,E*b+s.barHeight/2+(s.fontSize/2-2)+v)}).attr("text-height",a).attr("class",function(c){const E=S(c.startTime);let I=S(c.endTime);c.milestone&&(I=E+a);const W=this.getBBox().width;let Y="";c.classes.length>0&&(Y=c.classes.join(" "));let N=0;for(const[mt,Ct]of _.entries())c.type===Ct&&(N=mt%s.numberSectionStyles);let P="";return c.active&&(c.crit?P="activeCritText"+N:P="activeText"+N),c.done?c.crit?P=P+" doneCritText"+N:P=P+" doneText"+N:c.crit&&(P=P+" critText"+N),c.milestone&&(P+=" milestoneText"),c.vert&&(P+=" vertText"),W>I-E?I+W+1.5*s.leftPadding>y?Y+" taskTextOutsideLeft taskTextOutside"+N+" "+P:Y+" taskTextOutsideRight taskTextOutside"+N+" "+P+" width-"+W:Y+" taskText taskText"+N+" "+P+" width-"+W}),lt().securityLevel==="sandbox"){let c;c=Tt("#i"+e);const E=c.nodes()[0].contentDocument;F.filter(function(I){return l.has(I.id)}).each(function(I){var W=E.querySelector("#"+CSS.escape(e+"-"+I.id)),Y=E.querySelector("#"+CSS.escape(e+"-"+I.id+"-text"));const N=W.parentNode;var P=E.createElement("a");P.setAttribute("xlink:href",l.get(I.id)),P.setAttribute("target","_top"),N.appendChild(P),P.appendChild(W),P.appendChild(Y)})}}u(R,"drawRects");function G(k,b,v,p,a,h,y,f){if(y.length===0&&f.length===0)return;let A,n;for(const{startTime:I,endTime:W}of h)(A===void 0||I<A)&&(A=I),(n===void 0||W>n)&&(n=W);if(!A||!n)return;if(X(n).diff(X(A),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const F=i.db.getDateFormat(),l=[];let j=null,c=X(A);for(;c.valueOf()<=n;)i.db.isInvalidDate(c,F,y,f)?j?j.end=c:j={start:c,end:c}:j&&(l.push(j),j=null),c=c.add(1,"d");L.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",I=>e+"-exclude-"+I.start.format("YYYY-MM-DD")).attr("x",I=>S(I.start.startOf("day"))+v).attr("y",s.gridLineStartPadding).attr("width",I=>S(I.end.endOf("day"))-S(I.start.startOf("day"))).attr("height",a-b-s.gridLineStartPadding).attr("transform-origin",function(I,W){return(S(I.start)+v+.5*(S(I.end)-S(I.start))).toString()+"px "+(W*k+.5*a).toString()+"px"}).attr("class","exclude-range")}u(G,"drawExcludeDays");function H(k,b,v,p){if(v<=0||k>b)return 1/0;const a=b-k,h=X.duration({[p??"day"]:v}).asMilliseconds();return h<=0?1/0:Math.ceil(a/h)}u(H,"getEstimatedTickCount");function M(k,b,v,p){const a=i.db.getDateFormat(),h=i.db.getAxisFormat();let y;h?y=h:a==="D"?y="%d":y=s.axisFormat??"%Y-%m-%d";let f=rr(S).tickSize(-p+b+s.gridLineStartPadding).tickFormat(Qt(y));const n=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||s.tickInterval);if(n!==null){const F=parseInt(n[1],10);if(isNaN(F)||F<=0)nt.warn(`Invalid tick interval value: "${n[1]}". Skipping custom tick interval.`);else{const l=n[2],j=i.db.getWeekday()||s.weekday,c=S.domain(),E=c[0],I=c[1],W=H(E,I,F,l);if(W>Ft)nt.warn(`The tick interval "${F}${l}" would generate ${W} ticks, which exceeds the maximum allowed (${Ft}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(l){case"millisecond":f.ticks(ie.every(F));break;case"second":f.ticks(re.every(F));break;case"minute":f.ticks(ee.every(F));break;case"hour":f.ticks(te.every(F));break;case"day":f.ticks(Jt.every(F));break;case"week":f.ticks(ue[j].every(F));break;case"month":f.ticks(Kt.every(F));break}}}if(L.append("g").attr("class","grid").attr("transform","translate("+k+", "+(p-50)+")").call(f).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||s.topAxis){let F=er(S).tickSize(-p+b+s.gridLineStartPadding).tickFormat(Qt(y));if(n!==null){const l=parseInt(n[1],10);if(isNaN(l)||l<=0)nt.warn(`Invalid tick interval value: "${n[1]}". Skipping custom tick interval.`);else{const j=n[2],c=i.db.getWeekday()||s.weekday,E=S.domain(),I=E[0],W=E[1];if(H(I,W,l,j)<=Ft)switch(j){case"millisecond":F.ticks(ie.every(l));break;case"second":F.ticks(re.every(l));break;case"minute":F.ticks(ee.every(l));break;case"hour":F.ticks(te.every(l));break;case"day":F.ticks(Jt.every(l));break;case"week":F.ticks(ue[c].every(l));break;case"month":F.ticks(Kt.every(l));break}}}L.append("g").attr("class","grid").attr("transform","translate("+k+", "+b+")").call(F).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}u(M,"makeGrid");function g(k,b){let v=0;const p=Object.keys(w).map(a=>[a,w[a]]);L.append("g").selectAll("text").data(p).enter().append(function(a){const h=a[0].split(Fe.lineBreakRegex),y=-(h.length-1)/2,f=x.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("dy",y+"em");for(const[A,n]of h.entries()){const F=x.createElementNS("http://www.w3.org/2000/svg","tspan");F.setAttribute("alignment-baseline","central"),F.setAttribute("x","10"),A>0&&F.setAttribute("dy","1em"),F.textContent=n,f.appendChild(F)}return f}).attr("x",10).attr("y",function(a,h){if(h>0)for(let y=0;y<h;y++)return v+=p[h-1][1],a[1]*k/2+v*k+b;else return a[1]*k/2+b}).attr("font-size",s.sectionFontSize).attr("class",function(a){for(const[h,y]of _.entries())if(a[0]===y)return"sectionTitle sectionTitle"+h%s.numberSectionStyles;return"sectionTitle"})}u(g,"vertLabels");function m(k,b,v,p){const a=i.db.getTodayMarker();if(a==="off")return;const h=L.append("g").attr("class","today"),y=new Date,f=h.append("line");f.attr("x1",S(y)+k).attr("x2",S(y)+k).attr("y1",s.titleTopMargin).attr("y2",p-s.titleTopMargin).attr("class","today"),a!==""&&f.attr("style",a.replace(/,/g,";"))}u(m,"drawToday");function $(k){const b={},v=[];for(let p=0,a=k.length;p<a;++p)Object.prototype.hasOwnProperty.call(b,k[p])||(b[k[p]]=!0,v.push(k[p]));return v}u($,"checkUnique")},"draw"),fi={setConf:li,draw:di},hi=u(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),mi=hi,pi={parser:Dr,db:ci,renderer:fi,styles:mi};export{pi as diagram};

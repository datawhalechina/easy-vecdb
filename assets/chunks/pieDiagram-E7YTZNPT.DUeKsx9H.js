import{p as et}from"./chunk-JWPE2WC7.CZhJ9v4S.js";import{g as at,s as rt,a as it,b as nt,q as st,p as ot,_ as l,l as z,c as lt,D as ct,G as dt,H as gt,I as U,d as pt,r as ht,J as ft,E as ut}from"../app.rYBoEcqY.js";import{p as mt}from"./cynefin-OW5HDTMX.BrKH-RlU.js";import{o as vt}from"./d3-scale.DlYbYB9H.js";import"./framework.CohJ1kFH.js";import"./theme.Tp8TESzx.js";var St=ut.pie,R={sections:new Map,showData:!1},T=R.sections,H=R.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),$t=l(()=>{T=new Map,H=R.showData,ht()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>T,"getSections"),yt=l(t=>{H=t},"setShowData"),Tt=l(()=>H,"getShowData"),q={getConfig:wt,clear:$t,setDiagramTitle:ot,getDiagramTitle:st,setAccTitle:nt,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:Ct,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await mt("pie",t);z.debug(a),bt(a,q)},"parse")},_t=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=_t,Et=l(t=>{const a=[...t.values()].reduce((s,m)=>s+m,0),L=[...t.entries()].map(([s,m])=>({label:s,value:m})).filter(s=>s.value/a*100>=1);return ft().value(s=>s.value).sort(null)(L)},"createPieArcs"),zt=l((t,a,L,W)=>{var N;z.debug(`rendering pie chart
`+t);const s=W.db,m=lt(),h=ct(s.getConfig(),m.pie),F=40,i=18,c=4,$=450,S=$,b=dt(a),C=b.append("g");C.attr("transform","translate("+S/2+","+$/2+")");const{themeVariables:n}=m;let[G]=gt(n.pieOuterStrokeWidth);G??(G=2);const J=h.legendPosition,M=h.textPosition,V=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(S,$)/2-F,X=U().innerRadius(V*f).outerRadius(f),Z=U().innerRadius(f*M).outerRadius(f*M),x=C.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",f+G/2).attr("class","pieOuterCircle");const D=s.getSections(),j=Et(D),K=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let A=0;D.forEach(e=>{A+=e});const O=j.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=vt(K).domain([...D.keys()]);x.selectAll("mySlices").data(O).enter().append("path").attr("d",X).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+Z.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=C.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),u=C.selectAll(".legend").data(w).enter().append("g").attr("class","legend");u.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),u.append("text").attr("x",i+c).attr("y",i-c).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...u.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=$,k=S+F;const o=i+c,E=w.length*o;switch(J){case"center":u.attr("transform",(e,r)=>{const d=o*w.length/2,g=-v/2-(i+c),p=r*o-d;return"translate("+g+","+p+")"});break;case"top":y+=E,u.attr("transform",(e,r)=>{const d=f,g=-v/2-(i+c),p=r*o-d;return`translate(${g}, ${p})`}),x.attr("transform",()=>`translate(0, ${E+o})`);break;case"bottom":y+=E,u.attr("transform",(e,r)=>{const d=-f-o,g=-v/2-(i+c),p=r*o-d;return"translate("+g+","+p+")"});break;case"left":k+=i+c+v,u.attr("transform",(e,r)=>{const d=o*w.length/2,g=-f-(i+c),p=r*o-d;return"translate("+g+","+p+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:k+=i+c+v,u.attr("transform",(e,r)=>{const d=o*w.length/2,g=12*i,p=r*o-d;return"translate("+g+","+p+")"});break}const P=((N=Q.node())==null?void 0:N.getBoundingClientRect().width)??0,Y=S/2-P/2,tt=S/2+P/2,B=Math.min(0,Y),I=Math.max(k,tt)-B;b.attr("viewBox",`${B} 0 ${I} ${y}`),pt(b,y,I,h.useMaxWidth)},"draw"),Rt={draw:zt},Pt={parser:At,db:q,renderer:Rt,styles:kt};export{Pt as diagram};

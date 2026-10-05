(function(){"use strict";function xe(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function R(t,e,i){return Math.min(i,Math.max(e,t))}function tt(t,e=16){return Math.max(e,Math.round(t)&-2)}function io(t,e,i,a){const n=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:tt(t*n),height:tt(e*n)}}function Ue(t,e,i){return t+(e-t)*i}function Wr(t){const e=R(t,0,1);return e*e*(3-2*e)}const jr=["spring","flow","boids","poles"];function Za(t){return!!t&&jr.includes(t)}function Li(t){return R(t??1,.2,2.2)}function Ni(t){return R(t??.55,.08,1)}function Ui(t){return R(t??.34,.12,.72)}function qi(t){return R(t??1,.2,2.2)}function Di(t){return R(t??2.1,1.15,3.6)}function $i(t){return R(t??1,.28,2.4)}function Wi(t){return R(t??.8,0,2)}function ji(t){return R(t??.7,.08,2.2)}function Vi(t){return R(t??1,.2,2.2)}function Gi(t){return R(t??.7,0,1.6)}function Ki(t){return R(t??1,.1,2.2)}function Xi(t){return R(t??1,.15,2.4)}function Zi(t){return R(t??1,.1,2.2)}function Qi(t){return R(t??.22,.08,.55)}function Yi(t){return R(t??1,.25,2.2)}function Ji(t){return R(Math.round(t??3),1,5)}function ea(t){return R(t??1,.15,2.2)}function ta(t){return R(t??.85,.1,2.2)}function ia(t){return R(t??.8,.12,2.2)}function aa(t){return R(t??1.4,.6,2.8)}function na(t){return R(t??.45,0,2)}function Vr(t){return{springStrength:Li(t?.springStrength),springDamp:Ni(t?.springDamp),springDist:Ui(t?.springDist),springElast:qi(t?.springElast),springBreak:Di(t?.springBreak),flowScale:$i(t?.flowScale),flowTurb:Wi(t?.flowTurb),flowEvolve:ji(t?.flowEvolve),flowForce:Vi(t?.flowForce),flowDepth:Gi(t?.flowDepth),boidCohere:Ki(t?.boidCohere),boidSep:Xi(t?.boidSep),boidAlign:Zi(t?.boidAlign),boidRadius:Qi(t?.boidRadius),boidSpeed:Yi(t?.boidSpeed),poleCount:Ji(t?.poleCount),poleAttract:ea(t?.poleAttract),poleRepel:ta(t?.poleRepel),poleSpeed:ia(t?.poleSpeed),poleFalloff:aa(t?.poleFalloff),poleSwitch:na(t?.poleSwitch)}}function Gr(t,e,i,a,n,o,s){const r=n*3.15,l=a,c=o;let f=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),d=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),m=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const u=Math.hypot(f,d,m)||1;return[f/u,d/u,m/u]}function Kr(t,e,i,a){const n=i*(.42+t*.15),o=Math.sin(e*n+t*1.3)*.34+Math.sin(e*n*.37+t)*.08,s=Math.cos(e*n*.86+t*1.9)*.28+Math.cos(e*n*.29+t*.7)*.07,r=Math.sin(e*n*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:o,y:s,z:r,sign:c}}function Xr(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function Zr(t,e,i,a){const n=e.length,o={move:t,n,lastClock:i,px:new Float32Array(n),py:new Float32Array(n),pz:new Float32Array(n),vx:new Float32Array(n),vy:new Float32Array(n),vz:new Float32Array(n),homeX:new Float32Array(n),homeY:new Float32Array(n),homeZ:new Float32Array(n),links:[],linkKey:""};for(let s=0;s<n;s++){const[r,l,c]=Xr(e[s]);o.px[s]=r,o.py[s]=l,o.pz[s]=c,o.homeX[s]=r,o.homeY[s]=l,o.homeZ[s]=c,o.vx[s]=(e[s].vx-.5)*.08,o.vy[s]=(e[s].vy-.5)*.08,o.vz[s]=0}return t==="spring"&&ao(o,a.springDist),o}function ao(t,e,i=5){const a=t.n,n=[],o=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,f=Math.min(s,c),d=Math.max(s,c),m=`${f}:${d}`;o.has(m)||(o.add(m),n.push({a:f,b:d,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=n,t.linkKey=`${a}|${e.toFixed(3)}`,n}function qe(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Qr(t,e,i,a){const n=t.n,o=`${n}|${a.springDist.toFixed(3)}`;t.linkKey!==o&&ao(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,f=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const u of t.links){const p=t.px[u.b]-t.px[u.a],h=t.py[u.b]-t.py[u.a],g=t.pz[u.b]-t.pz[u.a],y=Math.hypot(p,h,g)||1e-5;if(u.on&&y>u.rest*l){u.on=!1;continue}if(!u.on&&y<a.springDist*.92&&(u.on=!0),!u.on)continue;const w=y-u.rest,v=s*w,T=p/y,_=h/y,E=g/y;t.vx[u.a]+=T*v*e,t.vy[u.a]+=_*v*e,t.vz[u.a]+=E*v*e,t.vx[u.b]-=T*v*e,t.vy[u.b]-=_*v*e,t.vz[u.b]-=E*v*e}const m=Math.exp(-r*7*e);for(let u=0;u<n;u++){const p=t.homeX[u]-t.px[u],h=t.homeY[u]-t.py[u],g=t.homeZ[u]-t.pz[u];t.vx[u]+=p*.35*e,t.vy[u]+=h*.35*e,t.vz[u]+=g*.35*e;const y=Math.hypot(t.px[u]-c,t.py[u]-f,t.pz[u]-d);if(y<.24){const w=(.24-y)/.24;t.vx[u]+=(c-t.px[u])*w*1.8*e,t.vy[u]+=(f-t.py[u])*w*1.8*e,t.vz[u]+=(d-t.pz[u])*w*1.1*e}t.vx[u]*=m,t.vy[u]*=m,t.vz[u]*=m,t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=qe(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=qe(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=qe(t.pz[u],t.vz[u],.36)}}function Yr(t,e,i,a){const n=i*a.flowEvolve,o=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=Gr(t.px[s],t.py[s],t.pz[s],n,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*o*e,t.vy[s]+=l*o*e,t.vz[s]+=c*o*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.34)}}function Jr(t,e,i){const a=t.n,n=i.boidRadius,o=n*n,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let f=0;f<a;f++){let d=0,m=0,u=0,p=0,h=0,g=0,y=0,w=0,v=0,T=0;for(let _=0;_<a;_++){if(f===_)continue;const E=t.px[_]-t.px[f],P=t.py[_]-t.py[f],I=t.pz[_]-t.pz[f],A=E*E+P*P+I*I;if(A>o||A<1e-8)continue;T++,d+=t.px[_],m+=t.py[_],u+=t.pz[_],y+=t.vx[_],w+=t.vy[_],v+=t.vz[_];const H=Math.sqrt(A),$=(n-H)/n;p-=E/H*$,h-=P/H*$,g-=I/H*$}T&&(r[f]+=(d/T-t.px[f])*i.boidCohere*1.15,l[f]+=(m/T-t.py[f])*i.boidCohere*1.15,c[f]+=(u/T-t.pz[f])*i.boidCohere*1.15,r[f]+=p*i.boidSep*1.8,l[f]+=h*i.boidSep*1.8,c[f]+=g*i.boidSep*1.8,r[f]+=(y/T-t.vx[f])*i.boidAlign*1.35,l[f]+=(w/T-t.vy[f])*i.boidAlign*1.35,c[f]+=(v/T-t.vz[f])*i.boidAlign*1.35),r[f]+=-t.px[f]*.22,l[f]+=-t.py[f]*.22,c[f]+=-t.pz[f]*.18}for(let f=0;f<a;f++){t.vx[f]+=r[f]*e,t.vy[f]+=l[f]*e,t.vz[f]+=c[f]*e;const d=Math.hypot(t.vx[f],t.vy[f],t.vz[f])||1;if(d>s){const m=s/d;t.vx[f]*=m,t.vy[f]*=m,t.vz[f]*=m}t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=qe(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=qe(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=qe(t.pz[f],t.vz[f],.34)}}function el(t,e,i,a){const n=[];for(let s=0;s<a.poleCount;s++)n.push(Kr(s,i,a.poleSpeed,a.poleSwitch));const o=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const f of n){const d=f.x-t.px[s],m=f.y-t.py[s],u=f.z-t.pz[s],p=Math.hypot(d,m,u)||1e-4,h=(f.sign>0?a.poleAttract:a.poleRepel)/(p**o+.06),g=f.sign>0?1:-1;if(r+=d/p*h*g*.55,l+=m/p*h*g*.55,c+=u/p*h*g*.32,r+=-m/p*h*.28,l+=d/p*h*.28,p<.1){const y=(.1-p)*10;r-=d/p*y,l-=m/p*y,c-=u/p*y*.6}}for(let f=0;f<t.n;f++){if(s===f)continue;const d=t.px[s]-t.px[f],m=t.py[s]-t.py[f],u=t.pz[s]-t.pz[f],p=d*d+m*m+u*u;if(p>.018||p<1e-8)continue;const h=Math.sqrt(p),g=(.135-h)*2.4;r+=d/h*g,l+=m/h*g,c+=u/h*g*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.3)}}function tl(t,e,i,a,n){const o=i.length;let s=t;(!s||s.move!==e||s.n!==o||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=Zr(e,i,a,n));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let f=0;f<l;f++)e==="spring"?Qr(s,c,a,n):e==="flow"?Yr(s,c,a,n):e==="boids"?Jr(s,c,n):el(s,c,a,n);return s.lastClock=a,s}function il(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),n=R(1.1/a,.55,1.7);return{x:R(t.px[e]/a,-.48,.48),y:R(t.py[e]/a,-.4,.4),px:R((.07+i*.03)*n,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:R(.55+n*.4,.5,1)}}const no=["fixed","hunt"],oo=["perfect","handheld"],so=["random","reactive","mixed"];function Yt(t){return no.includes(t)?t:"fixed"}function oa(t){return oo.includes(t)?t:"perfect"}function sa(t){return so.includes(t)?t:"mixed"}function ra(t){return R(t??2,.4,12)}function la(t){return R(t??6,.6,16)}function ca(t){return R(t??2,.4,12)}function ua(t){return R(t??5,.6,16)}function fa(t){return R(t??1,.35,2.4)}function da(t){return R(t??1,.35,2.4)}function ha(t){return R(t??.7,.12,1)}function ma(t){return R(t??.16,.04,1.4)}function pa(t){return R(t??.42,.08,2)}function ga(t){return R(t??.72,0,1)}function va(t){return R(t??.85,.15,2.2)}function ba(t){return R(t??.55,0,1.6)}function ya(t){return R(t??.35,0,1)}function al(t){let e=ra(t?.huntWideMin),i=la(t?.huntWideMax);i<e&&([e,i]=[i,e]);let a=ca(t?.huntFollowMin),n=ua(t?.huntFollowMax);n<a&&([a,n]=[n,a]);let o=ma(t?.huntReactMin),s=pa(t?.huntReactMax);return s<o&&([o,s]=[s,o]),{wideMin:e,wideMax:i,followMin:a,followMax:n,snap:fa(t?.huntSnap),zoom:da(t?.huntZoom),tight:ha(t?.huntTight),reactMin:o,reactMax:s,precision:ga(t?.huntPrecision),select:sa(t?.huntSelect),focusOn:!!t?.huntFocus,focusSpeed:va(t?.huntFocusSpeed),focusError:ba(t?.huntFocusError),variation:ya(t?.huntVariation),feel:oa(t?.cameraFeel)}}function ro(t=0,e=3){return{phase:"wide",clock:t,phaseUntil:t+e,reactUntil:0,subject:-1,lastSubject:-1,lookX:0,lookY:0,zoom:1,rot:0,velX:0,velY:0,velZ:0,velR:0,errX:0,errY:0,heldFocus:1,plan:"basic",mediumDone:!1,nudged:!1,retargeted:!1,handX:0,handY:0,handR:0,lag:0,cycle:0,trackStart:0,prev:[]}}function At(t,e,i){return e+t()*Math.max(0,i-e)}function qt(t,e){return Math.hypot(t,e)}function nl(t,e,i,a){const n=e?(t.x-e.x)/Math.max(a,.016666666666666666):0,o=e?(t.y-e.y)/Math.max(a,1/60):0,s=qt(n,o),r=e?(t.px-e.px)/Math.max(a,1/60):0,l=Math.max(0,r),c=e?qt(e.x-t.x,e.y-t.y):0,f=Math.max(0,s-c/Math.max(a,1/60)),d=e?Math.abs(Math.atan2(o,n)-Math.atan2(t.y-e.y,t.x-e.x)):0,m=qt(t.x-i.cx,t.y-i.cy)/Math.max(i.spread,.08),u=Math.max(Math.abs(t.x),Math.abs(t.y)),p=Math.min(1,s*1.6);return s*1.15+f*.9+d*.35+l*3.2+R(m-.7,0,2)*.55+R(u-.28,0,1)*.7+p*.4}function lo(t,e,i,a,n,o){if(t.length===0)return-1;if(t.length===1)return t[0].id;const s=t.reduce((u,p)=>u+p.x,0)/t.length,r=t.reduce((u,p)=>u+p.y,0)/t.length,l=t.reduce((u,p)=>u+qt(p.x-s,p.y-r),0)/t.length||.2,c=new Map(n.map(u=>[u.id,u])),f=t.map(u=>{if(u.id===e&&t.length>1)return 0;const p=nl(u,c.get(u.id),{cx:s,cy:r,spread:l},o);return i==="random"?1:i==="reactive"?.12+p:.55+p}),d=f.reduce((u,p)=>u+p,0);if(d<=0)return(t.find(p=>p.id!==e)??t[0]).id;let m=a()*d;for(let u=0;u<t.length;u++)if(m-=f[u],m<=0)return t[u].id;return t[t.length-1].id}function ol(t,e){if(e()>t*.72)return"basic";const i=e();return i<.22?"medium":i<.42?"retarget":i<.6?"abort":i<.8?"linger":"nudge"}function sl(t,e,i=!1){const a=t?.px??.08,n=.2/Math.max(a,.045),o=R(1.2+e*.95*R(n,.65,2.1),1.25,4.1);return i?Ue(1,o,.42):o}function co(t,e){return t.find(i=>i.id===e)}function rl(t){if(!t.length)return{x:0,y:0};let e=0,i=0;for(const a of t)e+=a.x,i+=a.y;return{x:e/t.length,y:i/t.length}}function ll(t,e,i,a,n,o,s,r){t.velX+=(e-t.lookX)*s-t.velX*r,t.velY+=(i-t.lookY)*s-t.velY*r,t.velZ+=(a-t.zoom)*s-t.velZ*r,t.velR+=(n-t.rot)*s*.65-t.velR*r,t.lookX+=t.velX*o,t.lookY+=t.velY*o,t.zoom+=t.velZ*o,t.rot+=t.velR*o}function cl(t,e,i,a,n){const o=xe(n+Math.floor(i*1e3)*17+(t?.cycle??0)*131>>>0);let s=t??ro(i,At(o,a.wideMin,a.wideMax));const r=i-s.clock;(r<-.02||r>1.2)&&(s=ro(i,At(o,a.wideMin,a.wideMax)));const l=R(i-s.clock,1/90,.08);s.clock=i;const c=rl(e),f=co(e,s.subject),d=s.prev.find($=>$.id===s.subject);f&&d&&qt(f.x-d.x,f.y-d.y)/l>.55&&(s.lag=Math.max(s.lag,(1-a.precision)*.16)),s.lag=Math.max(0,s.lag-l*(1.4+a.precision*2)),s.errX*=Math.exp(-l*(1.1+a.precision*2.6)),s.errY*=Math.exp(-l*(1.1+a.precision*2.6));const m=xe(n+s.cycle*9973+11>>>0),u=xe(n+s.cycle*7919+3>>>0),p=($,C=1)=>{s.lastSubject=s.subject,s.subject=$,s.phase="notice",s.reactUntil=i+At(m,a.reactMin,a.reactMax)*C;const F=(1-a.precision)*.11*(.45+m()),k=m()*Math.PI*2;s.errX=Math.cos(k)*F,s.errY=Math.sin(k)*F};if(s.phase==="wide"&&i>=s.phaseUntil&&e.length){const $=lo(e,s.lastSubject,a.select,m,s.prev,l);s.plan=ol(a.variation,u),s.mediumDone=!1,s.nudged=!1,s.retargeted=!1,s.plan==="linger"?(s.phaseUntil=i+At(u,a.wideMin,a.wideMax)*(1.15+u()*.7),s.plan="basic"):p($)}else if(s.phase==="notice"&&i>=s.reactUntil)s.phase="snap",s.phaseUntil=i+R(.28/a.snap,.12,.85);else if(s.phase==="snap"&&i>=s.phaseUntil)if(s.plan==="medium"&&!s.mediumDone)s.mediumDone=!0,s.phase="notice",s.reactUntil=i+At(m,a.reactMin,a.reactMax)*.55;else{s.phase="track",s.trackStart=i;const $=At(u,a.followMin,a.followMax);s.phaseUntil=i+(s.plan==="abort"?$*(.28+u()*.28):$)}else if(s.phase==="track"){const $=Math.max(.01,s.phaseUntil-s.trackStart);if(s.plan==="retarget"&&!s.retargeted&&e.length>1&&i>=s.trackStart+$*.42){const C=lo(e,s.subject,a.select,m,s.prev,l);C!==s.subject&&C>=0&&(s.retargeted=!0,s.plan="basic",p(C,.55))}else s.plan==="nudge"&&!s.nudged&&i>s.phaseUntil-.8&&(s.nudged=!0);s.phase==="track"&&i>=s.phaseUntil&&(s.phase="return",s.phaseUntil=i+R(.32/a.snap,.14,.9),s.lastSubject=s.subject)}else s.phase==="return"&&i>=s.phaseUntil&&(s.phase="wide",s.subject=-1,s.cycle+=1,s.phaseUntil=i+At(u,a.wideMin,a.wideMax),s.plan="basic");const h=co(e,s.subject)??f,g=1;let y=c.x*.22,w=c.y*.22,v=g,T=0;if(h&&(s.phase==="notice"||s.phase==="snap"||s.phase==="track")){y=h.x+s.errX,w=h.y+s.errY;const $=s.phase==="snap"&&s.plan==="medium"&&!s.mediumDone;v=s.phase==="notice"?Ue(s.zoom,1.04,.15):sl(h,a.zoom,$),s.nudged&&s.phase==="track"&&(v*=1.12),T=Math.atan2(w-s.lookY,y-s.lookX)*.045}else s.phase==="return"&&(y=c.x*.18,w=c.y*.18,v=g,T=0);const _=s.phase==="snap"||s.phase==="return"?1.15+a.snap*1.35:1,E=s.phase==="notice"?.38:1,P=1-R(s.lag*2.4,0,.55),I=(.08+a.tight*.22)*(.45+a.precision*.7)*_*E*P,A=.18+a.precision*.22+a.tight*.12;ll(s,y,w,v,T,l,I,A);const H=R(s.zoom,1,4.2);if(!a.focusOn)s.heldFocus=H;else{const $=1-Math.exp(-l*(.35+a.focusSpeed*1.8));s.heldFocus=Ue(s.heldFocus,H,$)}if(a.feel==="handheld"){const $=qt(s.velX,s.velY)+Math.abs(s.velZ)*.08;s.handX=Ue(s.handX,-s.velX*.05-$*.01,1-Math.exp(-l*3.2)),s.handY=Ue(s.handY,-s.velY*.05,1-Math.exp(-l*3.2)),s.handR=Ue(s.handR,-s.velR*.4,1-Math.exp(-l*2.6))}else s.handX=Ue(s.handX,0,1-Math.exp(-l*8)),s.handY=Ue(s.handY,0,1-Math.exp(-l*8)),s.handR=Ue(s.handR,0,1-Math.exp(-l*8));return s.prev=e.map($=>({id:$.id,x:$.x,y:$.y,px:$.px})),s}function ul(t,e){const i=R(t.zoom,1,4.2),a=e.focusOn?R(Math.abs(t.heldFocus-i)*e.focusError*.9,0,1):0;return{x:t.lookX+(e.feel==="handheld"?t.handX:0),y:t.lookY+(e.feel==="handheld"?t.handY:0),zoom:R(t.zoom,1,4.4),rot:t.rot+(e.feel==="handheld"?t.handR:0),focus:a}}function fl(t,e){return{x:(t.x-e.x)*e.zoom,y:(t.y-e.y)*e.zoom,px:t.px*e.zoom,rot:t.rot+e.rot}}const uo=["heraldry","wallpaper","giants","shower"],Tt=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],fo=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles"],dl=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Qa(t){return!!t&&dl.includes(t)}const Jt={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES"};function Ae(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function It(t){return Tt.includes(t)?t:"sailor"}function ho(t){return fo.includes(t)?t:"rush"}const hl=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function ml(t){return!!t&&hl.includes(t)}const mo=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles"];function Ya(t){return mo[(t>>>0)%mo.length]}function ei(t){return R(t??1,.35,1.2)}function ti(t){return R(t??1,.2,2.2)}function ii(t){return R(t??.7,.12,2)}function ai(t){return R(t??1,.2,2)}function ni(t){return R(t??.72,.12,1)}const wa=["off","dragon","dog","ferret","caterpillar","zebra"],po={off:"Off",dragon:"Dragon",dog:"Dog",ferret:"Ferret",caterpillar:"Caterpillar",zebra:"Zebra"};function oi(t){return wa.includes(t)?t:"off"}function pl(t){return Math.max(11,Math.min(18,Math.round(14*R(t??1,.35,2))))}function gl(t,e){if(t==="off"||e<4)return[];if(t==="caterpillar"){const n=[];for(let o=1;o<e-1;o++)n.push({role:"nub",attach:o,side:-1}),n.push({role:"nub",attach:o,side:1});return n}const i=Math.max(1,Math.round((e-1)*.22)),a=Math.max(i+2,Math.round((e-1)*.62));return[{role:"leg",attach:i,side:-1},{role:"leg",attach:i,side:1},{role:"leg",attach:a,side:-1},{role:"leg",attach:a,side:1}]}function ka(t,e,i,a){const n=me(t)*Math.PI*2,o=R(i,.2,2),s=R(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),f=e*(.45+r*1.55),d=(Ke,Ne,b)=>(Ke+Ne*o)*(.42+.58*(.5+.5*Math.sin(b))),m=.84+.22*Math.sin(l+.4),u=.8+.24*Math.cos(l*.87+1.1),p=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*o)*m,g=d(.04,.07,c+.3)*(.4+s*.6),y=d(.02,.08,f+1.4)*(.18+r*.95),w=d(.01,.06,f*1.3+.8)*r,v=d(.006,.035,c*1.6+2.1)*r*r,T=(.17+.11*o)*u,_=d(.035,.065,c+1.7)*(.4+s*.6),E=d(.02,.07,f+.6)*(.18+r*.95),P=d(.01,.055,f*1.2+2.4)*r,I=d(.006,.03,c*1.4+.5)*r*r,A=(.13+.11*o)*p,H=d(.04,.08,c+2)*(.45+s*.55),$=d(.02,.07,f+1.9)*(.18+r*.95),C=d(.012,.055,f*.9+.2)*r;let F=Math.cos(n+l*.18)*h+Math.cos(2*n+c*.14+.7)*g+Math.sin(3*n+l*.11+1.2)*y+Math.cos(4*n+f*.09+.4)*w+Math.sin(5*n+c*.16+2.2)*v,k=Math.sin(n+l*.15+.5)*T+Math.sin(2*n+c*.19+1.4)*_+Math.cos(3*n+l*.09+.3)*E+Math.sin(4*n+f*.12+1.8)*P+Math.cos(5*n+c*.08+.9)*I,U=Math.sin(n+l*.12+1.1)*A+Math.cos(2*n+c*.17+.6)*H+Math.sin(3*n+f*.1+2.5)*$+Math.cos(4*n+l*.13+1.6)*C;const X=Math.sin(2*n+c*.22)*r*.12*o;U+=X;const L=l*.19+Math.sin(c*.27)*.55,ae=Math.sin(l*.29+.8)*(.28+.18*o),V=Math.cos(l*.23+1.5)*(.2+r*.4),te=Math.cos(L),N=Math.sin(L),O=F*te-U*N,ne=F*N+U*te,ee=Math.cos(ae),Q=Math.sin(ae),we=k*ee-ne*Q,Me=k*Q+ne*ee,fe=Math.cos(V),pe=Math.sin(V),Pe=O*fe-we*pe,_e=O*pe+we*fe;return{x:Pe+Math.sin(l*.47)*.06*o,y:_e+Math.cos(l*.39+1.3)*.05*o,z:Me+Math.sin(c*.21+.6)*.07*o}}function it(t,e=1){return(t>40?t/60:2)*e}function vl(t,e,i=1,a=0){return me((t-a)*it(e,i))}function bl(t,e,i=1,a=0){const n=Math.cos(vl(t,e,i,a)*Math.PI*2);return n>0?n*n:0}function go(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*it(e,i))}function Ta(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function vo(t,e){return e&&fo.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const si=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],Ja={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function yl(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const wl={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},bo={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},yo={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},ri=256;function wo(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function De(t,e){return e[Math.floor(t()*e.length)%e.length]}function ko(t,e){return t()<.32?e:De(t,si)}function kl(t,e="rush"){return e==="tunnel"?bo[t]:e==="lattice"?yo[t]:wl[t]}function Tl(t,e,i,a){const n=kl(a,e==="bloom"?"rush":e);let o=De(t,n);e==="lattice"&&t()<.4&&(o=De(t,yo[a])),e==="tunnel"&&t()<.28&&(o=De(t,bo[a]));const s=ko(t,i);let r=ko(t,i);return r===s&&(r=De(t,si)),{kind:o,pattern:t()<.58?"plain":De(t,["polka","hoop","half","bar"]),a:s,b:r,mirror:t()>.5}}function _l(t){return t>.5?R((t-.5)/.5,0,1):0}function xl(t,e,i,a=0){const n=Math.max(1,i),o=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*o)*11+5>>>0)%n}function li(t){return R(t??1,.5,2)}function ci(t){return R(t??1,.35,2)}function Cl(t,e,i="sailor",a){const n=xe(t>>>0),o=240,s=a&&a!==i?a:null,r=[];for(let l=0;l<o;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",f=s&&l&1?s:i;r.push({x:n(),y:n(),z:n(),rot:(n()-.5)*.55,size:.55+n()*.9,vx:(n()-.5)*.06,vy:(n()-.35)*.08,vr:(n()-.5)*.25,charge:Tl(n,c,e,f)})}return r}function Sl(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function To(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,n=e&255;return(.22*i+.7*a+.08*n)/255}function _o(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const n=i.a,o=i.b,s=a*2.4;if(t.fillStyle=n,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=o,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=o,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=To(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function en(t,e,i,a=.42){for(let n=0;n<i*2;n++){const o=n%2===0?e:e*a,s=n*Math.PI/i-Math.PI/2,r=Math.cos(s)*o,l=Math.sin(s)*o;n===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function El(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Pl(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function xo(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Ml(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Al(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function Il(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Bl(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,n=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*n,-Math.cos(a)*n*.85)}t.closePath()}function Fl(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function Rl(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function zl(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Ol(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Hl(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function Ll(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function Nl(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Ul(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function ql(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function Dl(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function $l(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function Wl(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function jl(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function Vl(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function Gl(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function Kl(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function Xl(t,e){en(t,e,8,.55)}function Zl(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function Ql(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function Yl(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function Jl(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function ec(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function tc(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function ic(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function ac(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function nc(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function oc(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function sc(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function rc(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function lc(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function cc(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),xo(t,e*.72)}function uc(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function fc(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function dc(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function hc(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function mc(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function pc(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function gc(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function vc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function bc(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function yc(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function wc(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function kc(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function Tc(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function _c(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function xc(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function Cc(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function Sc(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function Ec(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function Pc(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Mc(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function Ac(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function Ic(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function Bc(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function Fc(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function Rc(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function zc(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function Oc(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function Hc(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function Lc(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function Nc(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function Uc(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function qc(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function Dc(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function $c(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function Wc(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function jc(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function Vc(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function Gc(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function Kc(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function Xc(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function Zc(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function Qc(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function Yc(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function Jc(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function e0(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function t0(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function i0(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function a0(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function n0(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function o0(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function s0(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function r0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function l0(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function c0(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function u0(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function f0(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function d0(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function h0(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function m0(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function p0(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function g0(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function v0(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function b0(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function y0(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function w0(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function k0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function T0(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function _0(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function x0(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function C0(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function S0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function E0(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function P0(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function M0(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function A0(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function I0(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function B0(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function F0(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function R0(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function z0(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function O0(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function H0(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function L0(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function N0(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function U0(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function q0(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function D0(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function $0(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function W0(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function j0(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function V0(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function G0(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function K0(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function X0(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function Z0(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function Q0(t,e){en(t,e*.72,4,.32)}function Y0(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function J0(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function eu(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function tu(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function iu(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function au(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function nu(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function ou(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function su(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function ru(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function lu(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function cu(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function uu(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function fu(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function du(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function hu(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function mu(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function pu(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function gu(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function vu(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function bu(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function yu(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function wu(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function ku(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function Tu(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function _u(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function xu(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function Cu(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Su(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function Eu(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function Pu(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function Mu(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function Au(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function Iu(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function Bu(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function Fu(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function Ru(t,e){t.moveTo(-e*.7,0),t.quadraticCurveTo(-e*.58,-e*.58,0,-e*.52),t.quadraticCurveTo(e*.58,-e*.58,e*.7,0),t.quadraticCurveTo(e*.58,e*.58,0,e*.52),t.quadraticCurveTo(-e*.58,e*.58,-e*.7,0),t.closePath()}function zu(t,e){t.moveTo(-e*.82,0),t.quadraticCurveTo(-e*.45,-e*.55,e*.08,-e*.32),t.lineTo(e*.98,-e*.12),t.lineTo(e*.62,e*.06),t.lineTo(e*.88,e*.38),t.lineTo(e*.22,e*.22),t.quadraticCurveTo(-e*.2,e*.52,-e*.82,0),t.closePath(),t.moveTo(-e*.02,-e*.3),t.lineTo(e*.18,-e*.98),t.lineTo(e*.38,-e*.22),t.closePath(),t.moveTo(-e*.38,-e*.28),t.lineTo(-e*.18,-e*.88),t.lineTo(e*.08,-e*.2),t.closePath()}function Ou(t,e){t.moveTo(-e*.42,e*.18),t.quadraticCurveTo(-e*.35,-e*.28,e*.22,-e*.2),t.quadraticCurveTo(e*.62,-e*.06,e*.95,e*.16),t.quadraticCurveTo(e*.9,e*.42,e*.4,e*.42),t.quadraticCurveTo(0,e*.5,-e*.42,e*.18),t.closePath(),t.moveTo(-e*.12,-e*.08),t.quadraticCurveTo(-e*.85,-e*.42,-e*.98,e*.42),t.quadraticCurveTo(-e*.48,e*.48,0,e*.08),t.closePath(),t.moveTo(e*.12,-e*.16),t.quadraticCurveTo(-e*.22,-e*.95,-e*.72,-e*.22),t.quadraticCurveTo(e*.02,-e*.22,e*.22,.02*e),t.closePath()}function Hu(t,e){t.moveTo(-e*.72,e*.08),t.quadraticCurveTo(-e*.52,-e*.4,-e*.02,-e*.3),t.quadraticCurveTo(e*.48,-e*.1,e*.98,e*.08),t.quadraticCurveTo(e*.48,e*.26,0,e*.3),t.quadraticCurveTo(-e*.48,e*.4,-e*.72,e*.08),t.closePath(),t.moveTo(-e*.22,-e*.26),t.lineTo(-e*.32,-e*.7),t.lineTo(0,-e*.26),t.closePath(),t.moveTo(e*.06,-e*.2),t.lineTo(e*.04,-e*.6),t.lineTo(e*.24,-e*.16),t.closePath()}function Lu(t,e){t.arc(e*.06,e*.08,e*.62,0,Math.PI*2),t.moveTo(-e*.04,-e*.46),t.quadraticCurveTo(-e*.32,-e*.95,-e*.55,-e*.52),t.quadraticCurveTo(-e*.2,-e*.6,e*.02,-e*.38),t.closePath(),t.moveTo(e*.28,-e*.46),t.quadraticCurveTo(e*.42,-e*.98,e*.68,-e*.5),t.quadraticCurveTo(e*.38,-e*.56,e*.22,-e*.36),t.closePath()}function Nu(t,e){t.moveTo(-e*.58,e*.1),t.quadraticCurveTo(-e*.4,-e*.42,e*.12,-e*.22),t.quadraticCurveTo(e*.58,0,e*.98,e*.16),t.quadraticCurveTo(e*.55,e*.4,e*.08,e*.38),t.quadraticCurveTo(-e*.38,e*.38,-e*.58,e*.1),t.closePath(),t.moveTo(-e*.08,-e*.2),t.lineTo(-e*.22,-e*.95),t.lineTo(e*.14,-e*.18),t.closePath(),t.moveTo(e*.16,-e*.14),t.lineTo(e*.22,-e*.88),t.lineTo(e*.42,-e*.1),t.closePath()}function Uu(t,e){t.moveTo(e*.92,-e*.16),t.quadraticCurveTo(e*.15,-e*.3,-e*.32,-e*.1),t.lineTo(-e*.95,-e*.42),t.lineTo(-e*.52,0),t.lineTo(-e*.95,e*.42),t.lineTo(-e*.32,e*.1),t.quadraticCurveTo(e*.15,e*.3,e*.92,e*.16),t.closePath()}function qu(t,e){t.moveTo(e*.88,-e*.1),t.quadraticCurveTo(e*.18,-e*.55,-e*.35,-e*.52),t.quadraticCurveTo(-e*.95,-e*.12,-e*.52,e*.22),t.quadraticCurveTo(-e*.12,e*.4,e*.48,e*.12),t.quadraticCurveTo(e*.75,e*.04,e*.88,e*.1),t.closePath()}function Du(t,e){t.moveTo(e*.95,-e*.2),t.quadraticCurveTo(e*.12,-e*.48,-e*.55,-e*.2),t.quadraticCurveTo(-e*.98,0,-e*.55,e*.2),t.quadraticCurveTo(e*.12,e*.48,e*.95,e*.2),t.closePath()}function $u(t,e){t.moveTo(e*.88,0),t.quadraticCurveTo(e*.68,-e*.5,e*.08,-e*.46),t.quadraticCurveTo(-e*.52,-e*.52,-e*.82,-e*.06),t.lineTo(-e*.98,-e*.4),t.lineTo(-e*.68,0),t.lineTo(-e*.98,e*.4),t.lineTo(-e*.82,e*.06),t.quadraticCurveTo(-e*.52,e*.52,e*.08,e*.46),t.quadraticCurveTo(e*.68,e*.5,e*.88,0),t.closePath()}function Wu(t,e){t.moveTo(e*.92,-e*.08),t.quadraticCurveTo(e*.18,-e*.16,-e*.22,-e*.06),t.lineTo(-e*.85,-e*.4),t.lineTo(-e*.52,0),t.lineTo(-e*.9,e*.36),t.lineTo(-e*.22,e*.08),t.quadraticCurveTo(e*.18,e*.16,e*.92,e*.08),t.closePath()}function ju(t,e){t.moveTo(-e*.95,-e*.2),t.quadraticCurveTo(-e*.15,e*.28,e*.28,-e*.12),t.quadraticCurveTo(e*.68,-e*.38,e*.98,e*.28),t.quadraticCurveTo(e*.48,e*.52,e*.08,e*.22),t.quadraticCurveTo(-e*.38,e*.62,-e*.92,e*.24),t.closePath()}function Vu(t,e){t.moveTo(-e*.68,-e*.2),t.quadraticCurveTo(e*.12,-e*.52,e*.85,0),t.quadraticCurveTo(e*.12,e*.52,-e*.68,e*.2),t.closePath()}function Gu(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":en(t,i,5,e==="starfish"?.42:.4);break;case"heart":El(t,i);break;case"moon":Pl(t,i);break;case"figure":xo(t,i);break;case"fish":Ml(t,i);break;case"anchor":Al(t,i);break;case"wave":Il(t,i);break;case"shell":Bl(t,i);break;case"boat":Fl(t,i);break;case"tail":Rl(t,i);break;case"swallow":zl(t,i);break;case"elephant":Ol(t,i);break;case"tent":Hl(t,i);break;case"ball":Ll(t,i);break;case"bow":Nl(t,i);break;case"horse":Ul(t,i);break;case"balloon":ql(t,i);break;case"ticket":Dl(t,i);break;case"pear":$l(t,i);break;case"lemon":Wl(t,i);break;case"cherry":jl(t,i);break;case"leaf":Vl(t,i);break;case"mushroom":Gl(t,i);break;case"flower":Kl(t,i);break;case"sun":Xl(t,i);break;case"cloud":Zl(t,i);break;case"bolt":Ql(t,i);break;case"umbrella":Yl(t,i);break;case"bird":Jl(t,i);break;case"tree":ec(t,i);break;case"deer":tc(t,i);break;case"fox":ic(t,i);break;case"owl":ac(t,i);break;case"acorn":nc(t,i);break;case"cone":oc(t,i);break;case"mountain":sc(t,i);break;case"drop":rc(t,i);break;case"moth":lc(t,i);break;case"wingfig":cc(t,i);break;case"swan":uc(t,i);break;case"cat":fc(t,i);break;case"crown":dc(t,i);break;case"key":hc(t,i);break;case"ring":mc(t,i);break;case"envelope":pc(t,i);break;case"potion":gc(t,i);break;case"rocket":bc(t,i);break;case"planet":yc(t,i);break;case"saturn":wc(t,i);break;case"ufo":kc(t,i);break;case"comet":Tc(t,i);break;case"satellite":_c(t,i);break;case"lolly":xc(t,i);break;case"coneice":Cc(t,i);break;case"cupcake":Sc(t,i);break;case"donut":Ec(t,i);break;case"candy":Pc(t,i);break;case"note":Mc(t,i);break;case"vinyl":Ac(t,i);break;case"headphone":Ic(t,i);break;case"mic":Bc(t,i);break;case"speaker":Fc(t,i);break;case"crab":Rc(t,i);break;case"helm":zc(t,i);break;case"lighthouse":Oc(t,i);break;case"compass":Hc(t,i);break;case"popcorn":Lc(t,i);break;case"cane":Nc(t,i);break;case"mask":Uc(t,i);break;case"apple":qc(t,i);break;case"banana":Dc(t,i);break;case"grape":$c(t,i);break;case"rabbit":Wc(t,i);break;case"snail":jc(t,i);break;case"fern":Vc(t,i);break;case"rose":Gc(t,i);break;case"diamond":Kc(t,i);break;case"candle":Xc(t,i);break;case"alien":Zc(t,i);break;case"asteroid":Qc(t,i);break;case"telescope":Yc(t,i);break;case"cookie":Jc(t,i);break;case"waffle":e0(t,i);break;case"guitar":t0(t,i);break;case"drum":i0(t,i);break;case"piano":a0(t,i);break;case"clef":n0(t,i);break;case"kettle":o0(t,i);break;case"mug":s0(t,i);break;case"whisk":r0(t,i);break;case"toast":l0(t,i);break;case"egg":c0(t,i);break;case"spoon":u0(t,i);break;case"chili":f0(t,i);break;case"bottle":d0(t,i);break;case"rain":h0(t,i);break;case"flake":m0(t,i);break;case"wind":p0(t,i);break;case"rainbow":g0(t,i);break;case"thermo":v0(t,i);break;case"taxi":b0(t,i);break;case"hydrant":y0(t,i);break;case"bike":w0(t,i);break;case"lamp":k0(t,i);break;case"signal":T0(t,i);break;case"bus":_0(t,i);break;case"stick":x0(t,i);break;case"dice":C0(t,i);break;case"coin":S0(t,i);break;case"pawn":E0(t,i);break;case"cart":P0(t,i);break;case"flag":M0(t,i);break;case"buoy":A0(t,i);break;case"hook":I0(t,i);break;case"porthole":B0(t,i);break;case"oar":F0(t,i);break;case"hoop":R0(t,i);break;case"unicycle":z0(t,i);break;case"lion":O0(t,i);break;case"topper":H0(t,i);break;case"orange":L0(t,i);break;case"peach":N0(t,i);break;case"berry":U0(t,i);break;case"melon":q0(t,i);break;case"pineapple":D0(t,i);break;case"pine":$0(t,i);break;case"hedgehog":W0(t,i);break;case"nest":j0(t,i);break;case"toadstool":V0(t,i);break;case"locket":G0(t,i);break;case"dove":K0(t,i);break;case"kiss":X0(t,i);break;case"rover":Z0(t,i);break;case"spark":Q0(t,i);break;case"astro":Y0(t,i);break;case"pretzel":J0(t,i);break;case"sundae":eu(t,i);break;case"choco":tu(t,i);break;case"sax":iu(t,i);break;case"trumpet":au(t,i);break;case"amp":nu(t,i);break;case"fork":ou(t,i);break;case"pan":su(t,i);break;case"chefhat":ru(t,i);break;case"tornado":lu(t,i);break;case"subway":cu(t,i);break;case"mailbox":uu(t,i);break;case"skyline":fu(t,i);break;case"ghostie":du(t,i);break;case"pixel":hu(t,i);break;case"joystick":mu(t,i);break;case"shroomup":pu(t,i);break;case"invader":gu(t,i);break;case"skull":vu(t,i);break;case"bat":bu(t,i);break;case"pumpkin":yu(t,i);break;case"tomb":wu(t,i);break;case"cauldron":ku(t,i);break;case"web":Tu(t,i);break;case"trophy":_u(t,i);break;case"whistle":xu(t,i);break;case"jersey":Cu(t,i);break;case"skate":Su(t,i);break;case"goal":Eu(t,i);break;case"pencil":Pu(t,i);break;case"book":Mu(t,i);break;case"globe":Au(t,i);break;case"backpack":Iu(t,i);break;case"ruler":Bu(t,i);break;case"bell":Fu(t,i);break;case"aBody":Ru(t,i);break;case"aLeg":ju(t,i);break;case"aNub":Vu(t,i);break;case"aDragHead":zu(t,i);break;case"aDragTail":Uu(t,i);break;case"aDogHead":Ou(t,i);break;case"aDogTail":qu(t,i);break;case"aFerrHead":Hu(t,i);break;case"aFerrTail":Du(t,i);break;case"aCatpHead":Lu(t,i);break;case"aCatpTail":$u(t,i);break;case"aZebrHead":Nu(t,i);break;case"aZebrTail":Wu(t,i);break;default:vc(t,i);break}}function Co(t,e,i){const a=(n,o,s)=>{t.beginPath(),t.arc(n,o,s,0,Math.PI*2),t.fill()};t.fillStyle=To(e.a)>.55?"#141414":"#f6f1e6",e.kind==="aDragHead"&&a(i*.18,-i*.04,i*.08),e.kind==="aDogHead"&&a(i*.28,0,i*.075),e.kind==="aFerrHead"&&a(i*.08,-i*.02,i*.055),e.kind==="aCatpHead"&&(a(-i*.08,i*.02,i*.07),a(i*.22,i*.02,i*.07)),e.kind==="aZebrHead"&&a(i*.12,-i*.02,i*.06),e.kind==="aBody"&&e.pattern==="bar"&&(t.beginPath(),t.moveTo(0,-i*.16),t.lineTo(i*.14,0),t.lineTo(0,i*.16),t.lineTo(-i*.14,0),t.closePath(),t.fill())}function Ku(t,e,i){const a=()=>Gu(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),_o(t,a,e,i),Co(t,e,i),t.restore();return}_o(t,a,e,i),Co(t,e,i)}function Xu(t){const e=document.createElement("canvas");e.width=ri,e.height=ri;const i=e.getContext("2d");return i&&(i.translate(ri/2,ri/2),Ku(i,t,ri*.38)),e}const Zu={dragon:{a:"#2a7a38",b:"#e8b830",pattern:"bar"},dog:{a:"#c9922e",b:"#f2d98a",pattern:"half"},ferret:{a:"#c49a62",b:"#f0e2c4",pattern:"half"},caterpillar:{a:"#5aa84a",b:"#e8c840",pattern:"hoop"},zebra:{a:"#f4f4f4",b:"#141414",pattern:"stripe"}};function So(t,e){const i=Zu[t];return{kind:e==="body"?"aBody":e==="leg"?"aLeg":e==="nub"?"aNub":e==="head"?t==="dragon"?"aDragHead":t==="dog"?"aDogHead":t==="ferret"?"aFerrHead":t==="caterpillar"?"aCatpHead":"aZebrHead":t==="dragon"?"aDragTail":t==="dog"?"aDogTail":t==="ferret"?"aFerrTail":t==="caterpillar"?"aCatpTail":"aZebrTail",pattern:e==="leg"||e==="nub"?"plain":i.pattern,a:i.a,b:i.b,mirror:!1}}function Qu(t){return Math.atan2(Math.sin(t),Math.cos(t))}function tn(t,e,i,a,n,o){const s=ka(t,e,i,a),r=ka(me(t+n),e,i,a),l=Math.max(.42,1.05-s.z*.55),c=Math.max(.42,1.05-r.z*.55),f=s.x/l,d=s.y/l,m=Math.atan2(r.y/c-d,r.x/c-f),u=R(1.12/l,.55,1.85);return{x:f,y:d,rot:m,ux:Math.cos(m),uy:Math.sin(m),nx:-Math.sin(m),ny:Math.cos(m),px:R((.072+o*.028)*u,.05,.24),alpha:R(.52+u*.42,.5,1)}}function Yu(t,e,i,a,n){const o=pl(n),s=.72/o,r=e==="caterpillar"?1.08:1,l=[];for(let c=0;c<o;c++){const f=me(i*a.travel*.14-c*s),d=i*a.morph,m=c===0?1.05:c===o-1?.78:.48*r;l.push(tn(f,d,a.vary,a.smooth,s,m))}for(const c of gl(e,o)){const f=l[c.attach],d=c.role==="nub"?.07:.13,m=me((i-d)*a.travel*.14-c.attach*s),u=tn(m,(i-d)*a.morph,a.vary,a.smooth,s,.55),p=f.x-u.x,h=f.y-u.y,g=c.role==="nub"?.038:.09,y=c.role==="nub"?.32:.7,w=c.role==="nub"?.008:.024,v=f.x+f.nx*c.side*g-p*y,T=f.y+f.ny*c.side*g-h*y+w;t(So(e,c.role),{x:v,y:T,px:R(f.px*(c.role==="nub"?.55:.92),.04,.18),rot:Math.atan2(T-f.y,v-f.x),alpha:f.alpha*.94})}for(let c=o-1;c>=0;c--){const f=c===0?"head":c===o-1?"tail":"body";let d=l[c].x,m=l[c].y,u=l[c].rot;if(f==="tail"){const p=me((i-.14)*a.travel*.14-(o-1)*s),h=tn(p,(i-.14)*a.morph,a.vary,a.smooth,s,.78),g=l[c].x-h.x,y=l[c].y-h.y;d-=g*.55,m-=y*.55,u+=Qu(l[c].rot-h.rot)*.85}t(So(e,f),{x:d,y:m,px:l[c].px*(f==="head"?1.28:f==="tail"?1.18:1),rot:u,alpha:l[c].alpha})}}class Ju{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;hunt=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=Sl(e);let a=this.stamps.get(i);return a||(a=Xu(e),this.stamps.set(i,a)),a}ensure(e,i,a,n){const o=n&&n!==a?n:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===o&&this.particles.length||(this.particles=Cl(e,i,a,o||null),this.stamps.clear(),this.sim=null,this.hunt=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=o)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const n=this.canvas.getContext("2d",{alpha:!1});if(!n)return this.canvas;const o=It(e.kit),s=e.kitB?It(e.kitB):null,r=wo(e.paper,nf(o,e.seed)),l=wo(e.ink,Ja[o]);this.ensure(e.seed>>>0,l,o,s);const c=vo(e.generator,e.move),f=R(e.audio,0,1),d=R(e.bass,0,1),m=R(e.beat,0,1),u=e.bpm>40?e.bpm:0,p=li(e.scale),h=ci(e.density),g=ei(e.pace),y={travel:ti(e.chainTravel),morph:ii(e.chainMorph),vary:ai(e.chainVary),smooth:ni(e.chainSmooth)},w=oi(e.chainAnimal);af(n,i,a,r,o,e.time,e.seed,m,d,!!e.night,l),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high";const v=e.beatOffset??0,T=e.time,_=Qa(c)&&u>40&&v>.001?Math.max(0,T-v):T,E=_*g,P=i/Math.max(a,1),I=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Qa(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"||c==="braid"?130:c==="tunnel"||c==="well"?120:c==="hall"?148:c==="bloom"||c==="gyre"||c==="drift"||c==="sway"?140:c==="chain"?40:Za(c)?42:this.particles.length,A=Math.max(8,Math.min(this.particles.length,Math.round(I*h))),H=c==="prism"?3:1;if(Za(c)){const X=Vr({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=tl(this.sim,c,this.particles.slice(0,A),_,X)}else this.sim=null;const $=c==="spot"?.34:ml(c)||c==="chain"?.26:.22,C=(X,L,ae)=>{const V=ae?{...L,...fl(L,ae)}:L,te=Math.min(V.px*p,ae?.72:$)*Math.min(i,a);if(te<5)return;const N=(.5+V.x)*i,O=(.5+V.y/P)*a;for(let ne=0;ne<H;ne++){n.save();const ee=H>1?(ne-1)*te*.09:0,Q=H>1?ne===2?te*.06:ne===0?-te*.03:0:0;if(N+ee<-te||O+Q<-te||N+ee>i+te||O+Q>a+te){n.restore();continue}n.translate(N+ee,O+Q),n.rotate(V.rot+(H>1?ne*.1:0)),L.flip!=null&&n.scale(L.flip,1),L.squash&&n.scale(L.squash,1/Math.max(.35,L.squash)),L.glow&&(n.globalAlpha=L.alpha*.32*L.glow,n.fillStyle=L.tint??l,n.beginPath(),n.arc(0,0,te*(.4+L.glow*.16),0,Math.PI*2),n.fill()),n.globalAlpha=L.alpha*(H>1?.72:1),n.drawImage(X,-te/2,-te/2,te,te),n.restore()}},F=[],k=(X,L)=>{F.push({stamp:X,pose:L})};if(c==="chain"&&w!=="off")Yu((X,L)=>k(this.stamp(X),L),w,_,y,h);else for(let X=0;X<A;X++){const L=this.particles[X],ae=Za(c)&&this.sim?il(this.sim,X,L.size):ef(L,X,c,E,f,d,m,u,A,_,y);ae&&k(this.stamp(L.charge),ae)}let U;if(Yt(e.camera)==="hunt"){const X=al({huntWideMin:e.huntWideMin,huntWideMax:e.huntWideMax,huntFollowMin:e.huntFollowMin,huntFollowMax:e.huntFollowMax,huntSnap:e.huntSnap,huntZoom:e.huntZoom,huntTight:e.huntTight,huntReactMin:e.huntReactMin,huntReactMax:e.huntReactMax,huntPrecision:e.huntPrecision,huntSelect:e.huntSelect,huntFocus:e.huntFocus,huntFocusSpeed:e.huntFocusSpeed,huntFocusError:e.huntFocusError,huntVariation:e.huntVariation,cameraFeel:e.cameraFeel});this.hunt=cl(this.hunt,F.map((L,ae)=>({id:ae,x:L.pose.x,y:L.pose.y,px:L.pose.px})),_,X,e.seed>>>0),U=ul(this.hunt,X),U.focus>.03&&(n.filter=`blur(${(1.1+U.focus*2.4).toFixed(2)}px)`)}else this.hunt=null;for(const X of F)C(X.stamp,X.pose,U);return n.filter="none",(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&m>.04&&(n.save(),n.translate(i*.5,a*.5),n.strokeStyle=$e(l,"#fff4d8",.72),n.globalAlpha=.18+m*.42,n.lineWidth=2.6+m*6,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.16+m*.2),0,Math.PI*2),n.stroke(),n.globalAlpha=.1+m*.22,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.3+m*.18),0,Math.PI*2),n.stroke(),n.restore()),this.canvas}}function me(t){return(t%1+1)%1}function an(t,e,i){const a=Math.cos(i),n=Math.sin(i);return{x:t*a-e*n,y:t*n+e*a}}function Dt(t,e=.28,i=2.55){const a=e+me(t)*i,n=e+i,o=R((n-a)/.3,0,1)*R((a-e)/.1,0,1);return o<=.001?null:{depth:a,fade:o}}function Eo(t){const e=me(t);return e<.5?e*2:2-e*2}function Be(t){return Eo(t)-.5}function ef(t,e,i,a,n,o,s,r,l=48,c=a,f){const d=Qa(i),m=bl(c,r),u=R(Math.max(s*(d?.48:.85),m*(d?.72:.22)),0,1);if(i==="bounce"){const w=.11+Math.abs(t.vx)*2.4,v=.09+Math.abs(t.vy)*2.1;return{x:Be(t.x+w*a),y:Be(t.y+v*a*.92),px:R((.1+t.size*.07)*(1+u*.22),.08,.28),glow:u*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const w=a*(2.2+n*.25)+e*.55,v=Math.cos(w);return{x:Be(t.x+t.vx*a*.45),y:Be(t.y+t.vy*a*.38),px:R((.12+t.size*.06)*(1+u*.18),.08,.26),glow:u*.35,rot:t.rot+Math.sin(w)*.15,alpha:R(.28+Math.abs(v)*.72,.2,1),flip:v}}if(i==="glow"){const w=.45+.55*Math.sin(a*2.4+e*.7),v=R(w*.4+u*.55+o*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:R((.1+t.size*.08)*(.9+v*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:R(.5+v*.45,.35,1),glow:v}}if(i==="flash"){const w=.7+.3*Math.sin(a*5.2+e)+u*.12,v=si[(Math.floor(a*3.2+e*3)>>>0)%si.length];return{x:Be(t.x+t.vx*a*.32),y:Be(t.y+t.vy*a*.28),px:R((.11+t.size*.07)*(1+u*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:R(w,.4,1),glow:.16+u*.45,tint:v}}if(i==="hop"){const w=r>40?r/60:.85,v=me(a*w+t.z),T=Math.abs(Math.sin(v*Math.PI))*(.72+u*.45)+u*.14,_=Math.cos(v*Math.PI*2);return{x:Be(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Be(t.y)*.62-T*.2,px:R(.1+t.size*.07+T*.02,.08,.22),rot:t.rot+T*.55,alpha:1,flip:_}}if(i==="kick"){const w=.1+Math.abs(t.vx)*2.1,v=.08+Math.abs(t.vy)*1.8;return{x:Be(t.x+w*a),y:Be(t.y+v*a),px:R((.1+t.size*.07)*(1+u*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:u*.7}}if(i==="jelly"){const w=1+Math.sin(a*5.2+e)*.08+u*.2;return{x:Be(t.x+t.vx*a*.5),y:Be(t.y+t.vy*a*.42),px:R(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:w}}if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,P=(_+.5)/6-.5,I=Math.sin(a*1.7+_*.72+T*.18);return{x:E*.9+I*.07,y:P*.74+Math.sin(a*.82+_*.9)*.035,px:R(.085+t.size*.045+u*.05,.06,.2),rot:t.rot+I*.22,alpha:1,glow:u*.5}}if(i==="rings"){const v=e%4,T=Math.floor(e/4),_=12,E=v&1?-1:1,P=T/_*Math.PI*2+a*(.48+v*.08)*E,I=.14+v*.11;return{x:Math.cos(P)*I,y:Math.sin(P)*I*.88,px:R(.07+t.size*.035+u*.05,.05,.18),rot:P+t.rot*.25,alpha:.96,glow:u*.48}}if(i==="loom"){const w=a*1.05+t.x*Math.PI*2,v=a*1.45+t.y*Math.PI*2;return{x:Math.sin(w)*.4+Math.sin(v*.5)*.06,y:Math.sin(w*2+t.z*Math.PI)*.3,px:R(.08+t.size*.045+u*.05,.06,.2),rot:w*.18+t.rot,alpha:1,glow:u*.48}}if(i==="petal"){const v=e%6,T=Math.floor(e/6)/8,_=v/6*Math.PI*2+a*.34,E=.8+.2*Math.sin(a*1.25),P=(.1+T*.32)*E;return{x:Math.cos(_)*P,y:Math.sin(_)*P*.9,px:R(.075+t.size*.04+u*.05,.055,.2),rot:_+Math.PI*.5,alpha:R(.42+E*.55,.4,1),glow:u*.5}}if(i==="flock"){const w=e%5,T=me(t.z+a*(.18+w*.02))*Math.PI*2+w*.32,_=.2+Math.sin(T*2+w)*.1+w*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:R(.075+t.size*.04+u*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:u*.48}}if(i==="wheel"){const v=e%3,E=Math.floor(e/3)/14*Math.PI*2+a*.58*(v===1?-1:1),P=.2+v*.12,I=.5+.5*Math.sin(E);return{x:Math.cos(E)*P,y:Math.sin(E)*P*.72,px:R((.075+t.size*.035)*(.78+I*.28)+u*.05,.05,.22),rot:E,alpha:R(.5+I*.45,.45,1),glow:u*.48}}if(i==="silk"){const w=e%4,v=w<2?1:-1,T=me(t.x+a*.14*v+w*.08),_=(w/3-.5)*.52+Math.sin(T*Math.PI*3+w)*.055;return{x:T-.5,y:_,px:R(.07+t.size*.038+u*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:u*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,P=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),I=R(P*(.42+n*.22+o*.2+m*.28),.18,1),A=.42-_/Math.max(5,1)*I*.82;return{x:E*.86,y:A,px:R(.075+t.size*.03+u*.03,.055,.18),rot:t.rot*.2,alpha:R(.45+(1-_/6)*.5+u*.15,.4,1),glow:u*.55,squash:1-u*.08}}if(i==="ripple"){const v=e%3,T=Math.floor(e/3),_=16,E=me(a*.32),P=.15+v*.145+E*.16+m*.05,I=T/_*Math.PI*2+a*.1;return{x:Math.cos(I)*P,y:Math.sin(I)*P*.88,px:R(.062+t.size*.024+u*.02,.048,.13),rot:I+t.rot*.2,alpha:R(.96-v*.08,.6,1),glow:u*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,E=r>40?r/60*Math.PI*2:5.4,P=T&1?-1:1,I=Math.sin(a*E+T*.85)*.82*P,A=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(I)*A,y:-.44+Math.cos(I)*A,px:R(.07+t.size*.03+u*.028,.05,.16),rot:I,alpha:1,glow:u*.4}}if(i==="burst"){const v=e%3,E=Math.floor(e/3)/16*Math.PI*2+a*.2*(v===1?-1:1),P=(.14+v*.13)*(1+m*.42);return{x:Math.cos(E)*P,y:Math.sin(E)*P*.9,px:R((.08+t.size*.035)*(1+u*.22),.055,.22),rot:E+t.rot*.2,alpha:R(.55+u*.4,.45,1),glow:u*.75,squash:1+u*.14}}if(i==="halo"){const v=e%2,E=Math.floor(e/2)/24*Math.PI*2+a*.26*(v?-1:1),P=.84+.16*Math.sin(a*1.15)+u*.2,I=(.26+v*.14)*P,A=R(.28+u*.65+o*.15,0,1);return{x:Math.cos(E)*I,y:Math.sin(E)*I*.9,px:R(.07+t.size*.032+A*.04,.05,.18),rot:E+Math.PI*.5,alpha:R(.5+A*.45,.4,1),glow:A}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,E=(T+.5)/16-.5,P=.09+n*.05+m*.08,I=E*Math.PI*3.4+a*2.15+_*.55;return{x:E*.92,y:(_-1)*.2+Math.sin(I)*P,px:R(.065+t.size*.03+u*.026,.05,.15),rot:Math.cos(I)*.32,alpha:1,glow:u*.45}}if(i==="drop"){const w=_l(s),v=w*w;return{x:t.x-.5,y:t.y-.5-v*.07,px:R((.1+t.size*.075)*(1+w*.9),.07,.44),glow:w*.95,rot:t.rot,alpha:1,squash:1-w*.2}}if(i==="spot"){const w=Math.max(8,l),v=xl(c,r,w),T=e===v,_=T?R(Math.max(s,u),0,1):0,E=e/w*Math.PI*2,P=.3;return{x:Math.cos(E)*P,y:Math.sin(E)*P*.78,px:R((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const w=it(r),v=Be(t.x+(.16+Math.abs(t.vx)*.5)*c*w),T=Be(t.y+(.13+Math.abs(t.vy)*.42)*c*w*.9),_=Math.min(.5-Math.abs(v),.5-Math.abs(T));return{x:v,y:T,px:R(.08+t.size*.04+u*.02,.06,.18),glow:(_<.065?.55:0)+u*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const v=go(c,r,2),T=Math.floor(e/16)%2,_=(e%16/16+v/16)*Math.PI*2*(T?-1:1),E=.26+T*.12;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.8,px:R(.07+t.size*.03+u*.02,.05,.16),rot:_,alpha:1,glow:u*.55}}if(i==="moire"){const w=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(w?-.78:.62),_=.2+w*.13+m*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:R(.065+t.size*.028+u*.018,.048,.14),rot:T+t.rot*.2,alpha:w?.78:1,glow:u*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,E=_&1?1:-1;return{x:(me((T+.5)/8+c*it(r)*.28*E)-.5)*.92,y:((_+.5)/6-.5)*.78,px:R(.07+t.size*.03+u*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:u*.42}}if(i==="zip"){const w=e%3,v=w===1?-1:1,T=1-m*.16;return{x:(me(t.x+c*it(r)*.34*v*T+w*.12)-.5)*.94,y:(w/2-.5)*.52,px:R(.07+t.size*.032+u*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:u*.4}}if(i==="ghost"){const w=(e&1)===0,v=w?0:1/it(r),T=t.x*Math.PI*2+(c-v)*it(r)*1.35,_=.3+Math.sin((c-v)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:R(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:w?1:.34,glow:w?u*.5:.12}}if(i==="poly"){const w=e&1,v=w?8:12,T=Math.floor(e/2)%v,_=w?3:4,E=T/v*Math.PI*2+c*it(r)*(_/4)*(w?-1:1),P=.2+w*.15;return{x:Math.cos(E)*P,y:Math.sin(E)*P*.84,px:R(.068+t.size*.03+u*.018,.05,.15),rot:E,alpha:1,glow:u*.45}}if(i==="fall"){const w=me(t.z+c*it(r,.5)),v=Eo(w),T=v*v,_=v>.82?(v-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:R(.075+t.size*.035+u*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:u*.4,squash:1-_*.28}}if(i==="liss"){const w=it(r),v=c*w*Math.PI*2*1.5+t.x*6.2,T=c*w*Math.PI*2+t.y*5.4;return{x:Math.sin(v)*.4,y:Math.sin(T)*.32,px:R(.07+t.size*.032+u*.02,.05,.16),rot:v*.15+t.rot,alpha:1,glow:u*.42}}if(i==="snap"){const w=go(c,r,1)&1?1:-1,v=Math.floor(e/8)%5,T=e%8;return{x:w*(.2+T/7*.1),y:(v/4-.5)*.72,px:R(.072+t.size*.03+u*.025,.05,.16),rot:t.rot*.2+w*.08,alpha:1,glow:u*.6,squash:1-u*.1}}if(i==="chain"){const w=f?.travel??1,v=f?.morph??.7,T=f?.vary??1,_=f?.smooth??.72,P=.62/Math.max(8,l),I=me(c*w*.14-e*P),A=c*v,H=ka(I,A,T,_),$=ka(me(I+P),A,T,_),C=Math.max(.42,1.05-H.z*.55),F=Math.max(.42,1.05-$.z*.55),k=H.x/C,U=H.y/C,X=Math.atan2($.y/F-U,$.x/F-k),L=R(1.12/C,.55,1.85);return{x:k,y:U,px:R((.072+t.size*.028)*L,.05,.24),rot:X,alpha:R(.52+L*.42,.5,1)}}if(i==="tunnel"){const v=.3+me(t.z-a*(.4+n*.22+o*.1))*2.45;if(v<.34||v>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/v;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:R(.2*t.size*(.95+o*.1+u*.26)/v,.04,.5),glow:u*.42,rot:t.rot+t.vr*a*.2,alpha:R((2.65-v)/.28,0,1)*R((v-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,P=.32+(1-me(a*(.2+n*.12)+t.z*.02))*2.2;return{x:T/(P*.62),y:_/(P*.62),px:R(.16*t.size/P,.05,.42),rot:t.rot*.25,alpha:R((2.4-P)/.25,0,1)}}if(i==="bloom"){const w=me(t.z-a*(.34+o*.12)),v=w*w,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*v*.92,y:Math.sin(T)*v*.92,px:R(.05+v*.32*t.size*(1+n*.06+u*.24),.04,.48),glow:u*.4,rot:t.rot+w*.4,alpha:R(1.05-v,0,1)*R(w/.08,0,1)}}if(i==="spiral"){const v=.28+me(t.z-a*(.4+n*.2+o*.08))*2.6;if(v<.32||v>2.75)return null;const T=t.x*Math.PI*2+2.15/v+a*.1,_=(.1+t.y*.38)/v;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:R(.2*t.size*(.94+o*.1+u*.26)/v,.04,.52),glow:u*.4,rot:t.rot+T*.15,alpha:R((2.75-v)/.28,0,1)*R((v-.28)/.1,0,1)}}if(i==="helix"){const v=.26+me(t.z-a*(.46+n*.22+o*.08))*2.7;if(v<.3||v>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/v)+t.x*Math.PI*2+T,E=(.11+t.y*.26)/v;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.92,px:R(.22*t.size*(.93+o*.1+u*.26)/v,.04,.54),glow:u*.4,rot:_+t.rot,alpha:R((2.85-v)/.28,0,1)*R((v-.26)/.1,0,1)}}if(i==="prism"){const v=.28+me(t.z-a*(.42+n*.2+o*.08))*2.55;if(v<.32||v>2.7)return null;const T=a*.22+t.rot*.4,_=me(t.x)-.5,E=me(t.y)-.5,P=Math.cos(T),I=Math.sin(T);return{x:(_*P-E*I)/v,y:(_*I+E*P)/v,px:R(.2*t.size*(.94+o*.1+u*.26)/v,.04,.52),glow:u*.4,rot:t.rot+T,alpha:R((2.7-v)/.26,0,1)*R((v-.28)/.1,0,1)}}if(i==="gyre"){const w=Dt(t.z-a*.4,.28,2.6);if(!w)return null;const{depth:v,fade:T}=w,_=a*.2+t.x*Math.PI*2,E=.22+t.y*.5,P=Math.cos(_)*E,I=Math.sin(_*.93)*E*.86,A=an(P,I,a*.12);return{x:A.x/v,y:A.y/v+Math.sin(a*.16)*.05,px:R(.22*t.size*(.93+o*.1+u*.26)/v,.04,.55),glow:u*.42,rot:t.rot+_*.2+t.vr*a*.08,alpha:T}}if(i==="well"){const w=Dt(t.z-a*.4,.26,2.65);if(!w)return null;const{depth:v,fade:T}=w,_=t.x*Math.PI*2+a*.16+2.6*Math.log(v+.18),E=(.2+e%8*.028)/Math.pow(v,.82);return{x:Math.cos(_)*E,y:Math.sin(_)*E,px:R(.21*t.size*(.93+o*.1+u*.26)/v,.04,.54),glow:u*.42,rot:t.rot+_*.2,alpha:T}}if(i==="hall"){const w=Dt(t.z-a*.42,.3,2.5);if(!w)return null;const{depth:v,fade:T}=w,_=e%4,E=me(t.x*.72+t.y*.28)-.5,P=.05/v;let I=0,A=0;_===0?(I=-.52/v-P,A=E/v):_===1?(I=.52/v+P,A=E/v):_===2?(I=E/v,A=-.4/v-P):(I=E/v,A=.4/v+P);const H=an(I,A,.42/v+a*.08);return{x:H.x,y:H.y,px:R(.2*t.size*(.93+o*.1+u*.26)/v,.04,.5),glow:u*.4,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="drift"){const w=Dt(t.z-a*.4,.28,2.58);if(!w)return null;const{depth:v,fade:T}=w,E=e%5*1.256,P=a*.09,I=me(t.x+Math.cos(E)*P)-.5,A=me(t.y+Math.sin(E)*P*.72)-.5;return{x:I/v,y:A/v,px:R(.21*t.size*(.93+o*.1+u*.26)/v,.04,.52),glow:u*.42,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="braid"){const w=Dt(t.z-a*.44,.26,2.68);if(!w)return null;const{depth:v,fade:T}=w,_=e%3,E=a*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/v,P=(.13+t.y*.2)/v,I=Math.sin(a*.2+_*2.1)*.07;return{x:Math.cos(E)*P+I,y:Math.sin(E)*P*.9,px:R(.22*t.size*(.93+o*.1+u*.26)/v,.04,.54),glow:u*.4,rot:E+t.rot,alpha:T}}if(i==="sway"){const w=Dt(t.z-a*.46,.26,2.7);if(!w)return null;const{depth:v,fade:T}=w,_=Math.sin(a*.19)*.48,E=Math.cos(a*.13)*.3,P=Math.sin(a*.07)*.32,I=me(t.x+t.vx*a*.03)-.5,A=me(t.y+t.vy*a*.02)-.5,H=an(I,A,P),$=1/v-.38;return{x:H.x/v+_*$,y:H.y/v+E*$,px:R(.24*t.size*(.92+o*.1+u*.28)/v,.04,.58),glow:u*.46,rot:t.rot+t.vr*a*.12+P*.4,alpha:T}}const h=.26+me(t.z-a*(.46+n*.24+o*.1))*2.7;if(h<.3||h>2.85)return null;const g=(me(t.x+t.vx*a*.03)-.5)/h,y=(me(t.y+t.vy*a*.02)-.5)/h;return{x:g,y,px:R(.24*t.size*(.92+o*.1+u*.28)/h,.04,.6),glow:u*.48,rot:t.rot+t.vr*a*.12,alpha:R((2.85-h)/.3,0,1)*R((h-.26)/.1,0,1)}}const $t={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function tf(t){return $t[t]}function $e(t,e,i){const a=parseInt(t.slice(1),16),n=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(n))return t;const o=R(i,0,1),s=l=>Math.round((a>>l&255)*(1-o)+(n>>l&255)*o);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function af(t,e,i,a,n,o,s,r=0,l=0,c=!1,f=Ja[n]){const d=xe(s+4>>>0),m=De(d,$t[n]),u=De(d,$t[n]),p=De(d,$t[n]),h=c?$e(a,"#08060a",.68):a;t.fillStyle=h,t.fillRect(0,0,e,i);const g=t.createLinearGradient(0,0,e,i);if(c){const T=$e(f,"#ffd8a8",.3),_=.16+l*.4+r*.06;g.addColorStop(0,$e(h,T,_*.55)),g.addColorStop(.48,$e(h,m,.2)),g.addColorStop(1,$e(h,u,.24))}else g.addColorStop(0,$e(a,m,.38)),g.addColorStop(.45,$e(a,p,.28)),g.addColorStop(1,$e(a,u,.42));t.fillStyle=g,t.fillRect(0,0,e,i);const y=e*(.5+Math.sin(o*.17)*.08),w=i*(.46+Math.cos(o*.13)*.06),v=t.createRadialGradient(y,w,0,y,w,Math.max(e,i)*.72);if(c){const T=$e(f,"#ffd8a8",.28);v.addColorStop(0,$e(h,T,.22+l*.38+r*.05)),v.addColorStop(1,h)}else v.addColorStop(0,$e(a,m,.42+r*.1)),v.addColorStop(1,a);t.fillStyle=v,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function nf(t,e=0){const i=xe(e+17>>>0);return De(i,$t[t])}function ui(t,e){const i=xe(t+17>>>0);return De(i,$t[Tt[Math.floor(i()*Tt.length)]])}function fi(t,e="#c41e3a"){const i=xe(t+91>>>0);return i()<.35?e:De(i,si)}function of(t){return Ja[t]}function Bt(t){return Tt[(t>>>0)%Tt.length]}const di=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],nn={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},on={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},Ft=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(on).map(t=>t.palette)];function hi(t){return t&&di.includes(t)?t:"kit"}function Wt(t,e){const i=hi(e);return i==="kit"?tf(t):on[i].grounds}function ht(t,e){const i=hi(e);return i==="kit"?of(t):on[i].ink}function _a(t,e=0,i){const a=Wt(t,i),n=xe(e+17>>>0);return a[Math.floor(n()*a.length)%a.length]}function xa(t){return di[Math.floor(t()*di.length)%di.length]}function Po(t){return Ft[Math.floor(t()*Ft.length)%Ft.length]}function Fe(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const sf=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_brightness;
uniform float u_contrast;
uniform float u_exposure;
uniform float u_saturation;
uniform float u_hue;
uniform float u_gamma;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  c *= exp2(u_exposure);
  c += u_brightness;
  c = (c - 0.5) * (1.0 + u_contrast) + 0.5;
  vec3 hsv = rgb2hsv(max(c, 0.0));
  hsv.x = fract(hsv.x + u_hue * 0.5);
  hsv.y = clamp(hsv.y * (1.0 + u_saturation), 0.0, 1.5);
  c = hsv2rgb(hsv);
  c = pow(max(c, 0.0), vec3(1.0 / max(u_gamma, 0.04)));
  return vec4(c, 1.0);
}
`},{id:"posterize",name:"Posterize",category:"color",description:"Color quantization / poster print steps",params:[{id:"levels",label:"Levels",kind:"int",min:2,max:16,step:1,default:5},{id:"dither",label:"Dither",kind:"float",min:0,max:1,step:.01,default:.15},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_levels;
uniform float u_dither;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float n = (hash21(uv * uResolution) - 0.5) * u_dither * 0.15;
  float lv = max(u_levels, 2.0);
  c = floor(c * lv + n) / lv;
  return vec4(c, 1.0);
}
`},{id:"threshold",name:"Threshold",category:"color",description:"Hard luma cut / xerox",params:[{id:"cut",label:"Cut",kind:"float",min:0,max:1,step:.01,default:.45},{id:"soft",label:"Soft",kind:"float",min:0,max:.4,step:.01,default:.04},{id:"invert",label:"Invert",kind:"bool",default:!1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_cut;
uniform float u_soft;
uniform float u_invert;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float l = luminance(c);
  float t = smoothstep(u_cut - u_soft, u_cut + u_soft, l);
  if (u_invert > 0.5) t = 1.0 - t;
  return vec4(vec3(t), 1.0);
}
`},{id:"duotone",name:"Duotone",category:"color",description:"Map luma onto two inks",params:[{id:"shadow",label:"Shadow",kind:"color",default:"#1a1028"},{id:"highlight",label:"Highlight",kind:"color",default:"#e8ff6a"},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform vec3 u_shadow;
uniform vec3 u_highlight;
uniform float u_amount;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float l = luminance(c);
  vec3 d = mix(u_shadow, u_highlight, l);
  return vec4(mix(c, d, u_amount), 1.0);
}
`},{id:"solarize",name:"Solarize",category:"color",description:"Sabattier / invert past a threshold",params:[{id:"cut",label:"Cut",kind:"float",min:0,max:1,step:.01,default:.5},{id:"invert",label:"Full invert",kind:"bool",default:!1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_cut;
uniform float u_invert;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  if (u_invert > 0.5) return vec4(1.0 - c, 1.0);
  vec3 s = mix(c, 1.0 - c, step(u_cut, luminance(c)));
  return vec4(s, 1.0);
}
`},{id:"channels",name:"Channels",category:"color",description:"RGB gain and grayscale",params:[{id:"r",label:"Red",kind:"float",min:0,max:2,step:.01,default:1},{id:"g",label:"Green",kind:"float",min:0,max:2,step:.01,default:1},{id:"b",label:"Blue",kind:"float",min:0,max:2,step:.01,default:1},{id:"gray",label:"Gray",kind:"float",min:0,max:1,step:.01,default:0},{id:"tint",label:"Tint",kind:"color",default:"#ff66aa"},{id:"tintAmt",label:"Tint amt",kind:"float",min:0,max:1,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_r;
uniform float u_g;
uniform float u_b;
uniform float u_gray;
uniform vec3 u_tint;
uniform float u_tintAmt;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb * vec3(u_r, u_g, u_b);
  float l = luminance(c);
  c = mix(c, vec3(l), u_gray);
  c = mix(c, mix(c, u_tint, l * 0.8 + 0.2), u_tintAmt);
  return vec4(c, 1.0);
}
`},{id:"key",name:"Luma key",category:"color",description:"Punch darks (or lights) through to the previous print — optical sandwich",params:[{id:"lo",label:"Dark",kind:"float",min:0,max:1,step:.01,default:.18},{id:"hi",label:"Bright",kind:"float",min:0,max:1,step:.01,default:.62},{id:"invert",label:"Punch lights",kind:"bool",default:!1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_lo;
uniform float u_hi;
uniform float u_invert;
uniform float u_amount;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 under = texture(uFeedback, uv).rgb;
  float l = luminance(src);
  float k = smoothstep(u_lo, max(u_lo + 0.02, u_hi), l);
  if (u_invert > 0.5) k = 1.0 - k;
  vec3 outc = mix(under, src, k);
  return vec4(mix(src, outc, u_amount), 1.0);
}
`}],rf=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_freq;
uniform float u_speed;
uniform float u_angle;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle));
  vec2 n = vec2(-dir.y, dir.x);
  float w = sin(dot(uv, dir) * u_freq * 6.28318 + uTime * u_speed * 4.0);
  uv += n * w * u_amount;
  return sampleSrc(uv);
}
`},{id:"chroma",name:"Aberration",category:"distort",description:"RGB channel displacement",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.08,step:5e-4,default:.008},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"radial",label:"Radial",kind:"float",min:0,max:1,step:.01,default:.4},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_angle;
uniform float u_radial;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle));
  vec2 fromC = uv - 0.5;
  vec2 off = mix(dir, normalize(fromC + 1e-5), u_radial) * u_amount;
  float r = sampleSrc(uv + off).r;
  float g = sampleSrc(uv).g;
  float b = sampleSrc(uv - off).b;
  return vec4(r, g, b, 1.0);
}
`},{id:"displace",name:"Displace",category:"distort",description:"Noise / random pixel displacement",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.3,step:.001,default:.04},{id:"scale",label:"Scale",kind:"float",min:.5,max:30,step:.1,default:5},{id:"speed",label:"Speed",kind:"float",min:0,max:3,step:.01,default:.2},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_scale;
uniform float u_speed;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  float n1 = vnoise(uv * u_scale + uTime * u_speed);
  float n2 = vnoise(uv * u_scale + 17.0 - uTime * u_speed * 0.7);
  uv += (vec2(n1, n2) - 0.5) * u_amount * 2.0;
  return sampleSrc(uv);
}
`},{id:"lens",name:"Lens",category:"distort",description:"Barrel / pincushion",params:[{id:"amount",label:"Amount",kind:"float",min:-1,max:1,step:.01,default:.25},{id:"zoom",label:"Zoom",kind:"float",min:.5,max:2,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_zoom;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 p = (uv - 0.5) / max(u_zoom, 0.05);
  float r2 = dot(p, p);
  p *= 1.0 + u_amount * r2;
  return sampleSrc(p + 0.5);
}
`},{id:"smear",name:"Pixel Sort",category:"distort",description:"Luma-driven smear / approximate pixel sort",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.35},{id:"threshold",label:"Threshold",kind:"float",min:0,max:1,step:.01,default:.35},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_threshold;
uniform float u_angle;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle));
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  float steps = mix(4.0, 10.0, uQuality);
  for (float i = 0.0; i < 10.0; i++) {
    if (i >= steps) break;
    vec2 p = uv + dir * (i / steps) * u_amount * 0.35;
    vec3 s = sampleSrc(p).rgb;
    float l = luminance(s);
    float w = step(u_threshold, l) * (1.0 - i / steps);
    acc += s * w;
    wsum += w;
  }
  vec3 src = sampleSrc(uv).rgb;
  if (wsum < 0.001) return vec4(src, 1.0);
  return vec4(mix(src, acc / wsum, u_amount), 1.0);
}
`}],lf=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_mixScan;
uniform float u_tracking;
uniform float u_noise;
uniform float u_flicker;
uniform float u_weave;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 p = uv;
  p.x += sin(uv.y * 40.0 + uTime * 8.0) * u_weave * (0.01 + u_bass * 0.008);
  float band = step(0.97 - u_bass * 0.08, hash21(vec2(floor(uTime * 9.0), 3.2)));
  p.x += band * (hash21(vec2(uv.y * 80.0, uTime)) - 0.5) * u_tracking * 0.12;
  vec3 c = sampleSrc(p).rgb;
  float scan = sin(uv.y * uResolution.y * 3.14159);
  c *= 1.0 - u_mixScan * 0.35 * (0.5 + 0.5 * scan);
  float n = hash21(uv * uResolution + uTime * 12.0);
  c += (n - 0.5) * u_noise * 0.35;
  c *= 1.0 + (hash21(vec2(uTime, 9.1)) - 0.5) * u_flicker * (0.4 + u_audio * 0.35);
  return vec4(c, 1.0);
}
`},{id:"grain",name:"Emulsion",category:"analog",description:"Film grain, dust, scratches, light leaks",params:[{id:"grain",label:"Grain",kind:"float",min:0,max:1,step:.01,default:.25},{id:"dust",label:"Dust",kind:"float",min:0,max:1,step:.01,default:.1},{id:"scratches",label:"Scratches",kind:"float",min:0,max:1,step:.01,default:.08},{id:"leak",label:"Light leak",kind:"float",min:0,max:1,step:.01,default:.15},{id:"leakColor",label:"Leak color",kind:"color",default:"#ff6a2a"},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_grain;
uniform float u_dust;
uniform float u_scratches;
uniform float u_leak;
uniform vec3 u_leakColor;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float g = hash21(uv * uResolution + uTime * 60.0);
  c += (g - 0.5) * u_grain * 0.35;
  float d = step(0.997 - u_dust * 0.01, hash21(floor(uv * uResolution * 0.35) + floor(uTime * 3.0)));
  c += d * 0.7;
  float sc = hash21(vec2(uv.x * 0.15, floor(uTime * 2.0)));
  float line = smoothstep(0.002, 0.0, abs(uv.x - sc));
  c += line * u_scratches * 0.6;
  float leak = pow(max(uv.x * 0.4 + uv.y * 0.2, 0.0), 2.2) + pow(max(1.0 - uv.x, 0.0), 4.0) * 0.5;
  c = mix(c, c + u_leakColor * leak, u_leak);
  return vec4(c, 1.0);
}
`},{id:"bloom",name:"Bloom",category:"analog",description:"Glow / halation around brights",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"threshold",label:"Threshold",kind:"float",min:0,max:1,step:.01,default:.55},{id:"size",label:"Size",kind:"float",min:.5,max:8,step:.1,default:2.5},{id:"halation",label:"Halation",kind:"float",min:0,max:1,step:.01,default:.25},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_threshold;
uniform float u_size;
uniform float u_halation;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  float taps = mix(3.0, 6.0, uQuality);
  for (float y = -3.0; y <= 3.0; y++) {
    for (float x = -3.0; x <= 3.0; x++) {
      if (abs(x) + abs(y) > taps) continue;
      vec2 o = vec2(x, y) * uTexel * u_size;
      vec3 s = sampleSrc(uv + o).rgb;
      float l = luminance(s);
      float w = step(u_threshold, l) / (1.0 + length(vec2(x, y)));
      acc += s * w;
      wsum += w;
    }
  }
  vec3 glow = wsum > 0.0 ? acc / wsum : vec3(0.0);
  vec3 halo = vec3(glow.r, glow.g * 0.6, glow.b * 0.45) * u_halation;
  vec3 outc = src + glow * u_amount * (1.0 + u_audio * 0.35) + halo;
  return vec4(outc, 1.0);
}
`}],cf=[{id:"halftone",name:"Dot Screen",category:"texture",description:"Ben-Day / newsprint dots that turn the collage into a printed sheet",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.72},{id:"scale",label:"Scale",kind:"float",min:.35,max:2.4,step:.01,default:1},{id:"contrast",label:"Ink",kind:"float",min:0,max:1,step:.01,default:.42},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_scale;
uniform float u_contrast;
`,applyGlsl:`
vec2 _htRot(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}
float _htDot(vec2 uv, float ang, float luma, float cell) {
  vec2 g = _htRot((uv - 0.5) * uResolution.y / max(cell, 2.0), ang);
  float d = length(fract(g) - 0.5);
  float r = mix(0.08, 0.62, clamp(luma, 0.0, 1.0));
  return 1.0 - smoothstep(r, r + 0.08, d);
}
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  float cell = mix(14.0, 5.5, clamp(u_scale, 0.35, 2.4) * 0.5);
  float k = _htDot(uv, 0.785398, pow(l, 0.85), cell);
  float m = _htDot(uv, 0.261799, src.r * 0.55 + src.b * 0.2, cell * 1.08);
  float y = _htDot(uv, 0.0, src.g * 0.4 + src.r * 0.35, cell * 0.96);
  vec3 paper = vec3(0.93, 0.9, 0.84);
  vec3 ink = mix(vec3(0.08, 0.07, 0.1), src * 0.55, 0.35 + u_contrast * 0.4);
  vec3 printc = paper;
  printc = mix(printc, ink, k * (0.55 + u_contrast * 0.4));
  printc = mix(printc, vec3(0.72, 0.12, 0.42), m * 0.38);
  printc = mix(printc, vec3(0.9, 0.72, 0.12), y * 0.28);
  printc *= 0.96 + 0.04 * hash21(floor(uv * uResolution / cell));
  vec3 outc = mix(src, printc, u_amount);
  return vec4(outc, 1.0);
}
`},{id:"riso",name:"Riso",category:"texture",description:"Two-ink risograph: pulp, misregister, fluorescent layers",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.8},{id:"shift",label:"Misregister",kind:"float",min:0,max:1,step:.01,default:.35},{id:"pulp",label:"Pulp",kind:"float",min:0,max:1,step:.01,default:.4},{id:"inkA",label:"Ink A",kind:"color",default:"#ff4ad2"},{id:"inkB",label:"Ink B",kind:"color",default:"#2ee0c0"},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_shift;
uniform float u_pulp;
uniform vec3 u_inkA;
uniform vec3 u_inkB;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 off = vec2(u_shift * 0.007, -u_shift * 0.0045);
  vec3 a = sampleSrc(uv + off).rgb;
  vec3 b = sampleSrc(uv - off).rgb;
  float la = luminance(a);
  float lb = luminance(b);
  float pulp = vnoise(uv * 38.0 + 4.0) * 0.55 + vnoise(uv * 110.0) * 0.45;
  pulp = mix(1.0, 0.82 + pulp * 0.28, u_pulp);
  vec3 paper = vec3(0.96, 0.93, 0.86) * pulp;
  float layerA = smoothstep(0.62, 0.28, la);
  float layerB = smoothstep(0.7, 0.32, lb);
  layerA *= 0.88 + 0.12 * hash21(uv * uResolution + vec2(2.0, uTime * 0.0));
  vec3 printc = paper;
  printc = mix(printc, mix(paper, u_inkA, 0.92), layerA);
  printc = mix(printc, mix(printc, u_inkB, 0.78), layerB * 0.85);
  printc = mix(printc, u_inkA * u_inkB * 1.4, layerA * layerB * 0.35);
  vec3 src = sampleSrc(uv).rgb;
  vec3 outc = mix(src, printc, u_amount);
  return vec4(outc, 1.0);
}
`},{id:"hatch",name:"Etching",category:"texture",description:"Copperplate crosshatch that densifies in the darks",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.7},{id:"density",label:"Density",kind:"float",min:.2,max:1.6,step:.01,default:.7},{id:"thick",label:"Bite",kind:"float",min:0,max:1,step:.01,default:.45},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_density;
uniform float u_thick;
`,applyGlsl:`
float _hatchLine(vec2 uv, float ang, float freq, float thick) {
  float s = sin(ang);
  float c = cos(ang);
  float u = uv.x * c + uv.y * s;
  float wiggle = (vnoise(uv * 18.0) - 0.5) * 0.012;
  float g = abs(fract(u * freq + wiggle) - 0.5);
  return 1.0 - smoothstep(0.0, thick, g);
}
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  float dark = 1.0 - smoothstep(0.12, 0.88, l);
  float freq = mix(22.0, 54.0, clamp(u_density, 0.2, 1.6) / 1.6);
  float thick = mix(0.09, 0.028, u_thick);
  float h1 = _hatchLine(uv, 0.7, freq, thick);
  float h2 = _hatchLine(uv, -0.55, freq * 1.08, thick * 0.9);
  float h3 = _hatchLine(uv, 1.35, freq * 0.72, thick * 1.15);
  float ink = h1 * smoothstep(0.15, 0.55, dark);
  ink = max(ink, h2 * smoothstep(0.4, 0.82, dark));
  ink = max(ink, h3 * smoothstep(0.7, 0.95, dark));
  vec3 plate = mix(vec3(0.93, 0.9, 0.84), src * 0.35, 0.18);
  plate = mix(plate, vec3(0.12, 0.1, 0.14), clamp(ink, 0.0, 1.0));
  vec3 outc = mix(src, plate, u_amount);
  return vec4(outc, 1.0);
}
`},{id:"holo",name:"Holo Foil",category:"texture",description:"Iridescent foil: spectral streaks and glitter on the brights",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.58},{id:"shift",label:"Shift",kind:"float",min:0,max:1,step:.01,default:.55},{id:"glitter",label:"Glitter",kind:"float",min:0,max:1,step:.01,default:.4},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_shift;
uniform float u_glitter;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  vec2 p = uv - 0.5;
  float ang = atan(p.y, p.x);
  float foil = sin(uv.x * 42.0 + uv.y * 18.0 + uTime * 0.35 + l * 6.0);
  foil = foil * 0.5 + 0.5;
  float hue = fract(0.08 + foil * 0.7 + ang * 0.12 + u_shift * 0.45 + uTime * 0.03);
  vec3 rainbow = hsv2rgb(vec3(hue, 0.72, 1.0));
  float mask = smoothstep(0.32, 0.78, l) * (0.55 + 0.45 * foil);
  mask = pow(mask, 0.85);
  float spark = step(0.97 - u_glitter * 0.04, hash21(floor(uv * uResolution * 0.55) + floor(uTime * 9.0)));
  vec3 gild = src + rainbow * mask * (0.55 + u_audio * 0.2) + rainbow * spark * u_glitter * 0.85;
  gild = mix(gild, rainbow, mask * 0.18);
  vec3 outc = mix(src, gild, u_amount);
  return vec4(outc, 1.0);
}
`},{id:"crackle",name:"Crackle",category:"texture",description:"Glaze crazing: fine cracks and a slight ceramic warp",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.62},{id:"scale",label:"Scale",kind:"float",min:.4,max:2.2,step:.01,default:1.1},{id:"warp",label:"Warp",kind:"float",min:0,max:1,step:.01,default:.28},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_scale;
uniform float u_warp;
`,applyGlsl:`
vec2 _crackleF(vec2 p) {
  vec2 n = floor(p);
  vec2 f = fract(p);
  float d1 = 8.0;
  float d2 = 8.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = vec2(hash21(n + g), hash21(n + g + 17.2));
      float d = length(g + o - f);
      if (d < d1) { d2 = d1; d1 = d; }
      else d2 = min(d2, d);
    }
  }
  return vec2(d1, d2);
}
vec4 apply(vec2 uv) {
  vec2 cell = uv * mix(7.0, 18.0, clamp(u_scale, 0.4, 2.2) / 2.2);
  vec2 F = _crackleF(cell);
  float ridge = 1.0 - smoothstep(0.0, 0.06, abs(F.y - F.x));
  vec2 n = vec2(vnoise(uv * 9.0), vnoise(uv * 9.0 + 4.0)) - 0.5;
  vec3 src = sampleSrc(uv + n * u_warp * 0.012).rgb;
  vec3 glaze = src * (0.92 + 0.08 * F.x);
  glaze = mix(glaze, glaze * vec3(0.22, 0.16, 0.14), ridge * 0.82);
  glaze += ridge * 0.04;
  vec3 outc = mix(src, glaze, u_amount);
  return vec4(outc, 1.0);
}
`},{id:"nap",name:"Velvet Nap",category:"texture",description:"Velvet nap: tiny fibers and a directional sheen",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.6},{id:"nap",label:"Nap",kind:"float",min:0,max:1,step:.01,default:.55},{id:"sheen",label:"Sheen",kind:"float",min:0,max:1,step:.01,default:.48},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_nap;
uniform float u_sheen;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec2 dir = normalize(vec2(0.82, 0.57));
  float along = dot(uv, dir);
  float fiber = vnoise(vec2(along * 90.0, (uv.x * dir.y - uv.y * dir.x) * 220.0));
  fiber = mix(fiber, vnoise(uv * 70.0 + vec2(along * 12.0, 0.0)), 0.45);
  float nap = (fiber - 0.5) * u_nap;
  float view = pow(clamp(0.55 + along * 0.7, 0.0, 1.0), 1.6);
  vec3 pile = src * (0.78 + nap * 0.35);
  pile = mix(pile, pile * vec3(0.55, 0.22, 0.4), 0.08);
  pile += src * view * u_sheen * 0.55;
  pile += vec3(1.0, 0.86, 0.94) * pow(view, 4.0) * u_sheen * 0.22;
  vec3 outc = mix(src, pile, u_amount);
  return vec4(outc, 1.0);
}
`}],uf=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_segments;
uniform float u_offset;
uniform float u_zoom;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 p = (uv - 0.5) / max(u_zoom, 0.05);
  float a = atan(p.y, p.x) + u_offset;
  float r = length(p);
  float seg = max(u_segments, 2.0);
  float tau = 6.2831853;
  a = mod(a, tau / seg);
  a = abs(a - tau / seg * 0.5);
  vec2 q = vec2(cos(a), sin(a)) * r + 0.5;
  return sampleSrc(q);
}
`},{id:"mirror",name:"Mirror / Tile",category:"geometric",description:"Mirror axes and repeat",params:[{id:"axis",label:"Axis",kind:"enum",default:"x",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"xy",label:"XY"},{value:"none",label:"Off"}]},{id:"tiles",label:"Tiles",kind:"float",min:1,max:8,step:.1,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_axis;
uniform float u_tiles;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 q = fract(uv * max(u_tiles, 1.0));
  if (u_axis < 0.5) q.x = abs(q.x * 2.0 - 1.0);
  else if (u_axis < 1.5) q.y = abs(q.y * 2.0 - 1.0);
  else if (u_axis < 2.5) q = abs(q * 2.0 - 1.0);
  return sampleSrc(q);
}
`},{id:"spin",name:"Transform",category:"geometric",description:"Rotate / scale / stretch / crop",params:[{id:"rotate",label:"Rotate",kind:"float",min:-3.1416,max:3.1416,step:.01,default:0},{id:"scale",label:"Scale",kind:"float",min:.2,max:4,step:.01,default:1},{id:"stretch",label:"Stretch",kind:"float",min:.2,max:3,step:.01,default:1},{id:"crop",label:"Crop",kind:"float",min:0,max:.45,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_rotate;
uniform float u_scale;
uniform float u_stretch;
uniform float u_crop;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 p = uv - 0.5;
  p.x *= u_stretch;
  p = rotate2(p, u_rotate);
  p /= max(u_scale, 0.05);
  p += 0.5;
  vec3 c = sampleSrc(p).rgb;
  vec2 b = smoothstep(u_crop, u_crop + 0.02, uv) * smoothstep(u_crop, u_crop + 0.02, 1.0 - uv);
  c *= b.x * b.y;
  return vec4(c, 1.0);
}
`}],ff=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_decay;
`,temporal:!0,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  vec3 fb = texture(uFeedback, uv).rgb;
  vec3 trail = mix(hist, fb, u_decay);
  return vec4(mix(src, trail, u_amount), 1.0);
}
`},{id:"slitscan",name:"Slit-scan",category:"temporal",description:"Temporal slit / streak from history",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.6},{id:"width",label:"Slit",kind:"float",min:.002,max:.2,step:.001,default:.03},{id:"axis",label:"Axis",kind:"enum",default:"x",options:[{value:"x",label:"Vertical slit"},{value:"y",label:"Horizontal slit"}]},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_width;
uniform float u_axis;
`,temporal:!0,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  float coord = mix(uv.x, uv.y, step(0.5, u_axis));
  float slit = 0.5 + 0.4 * sin(uTime * 0.4);
  float w = smoothstep(u_width, 0.0, abs(coord - slit));
  vec3 outc = mix(hist, src, w);
  return vec4(mix(src, outc, u_amount), 1.0);
}
`},{id:"stutter",name:"Stutter",category:"temporal",description:"Hold / skip frames from history",params:[{id:"rate",label:"Hold",kind:"float",min:0,max:1,step:.01,default:.35},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_rate;
`,temporal:!0,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  float hold = step(u_rate, fract(uTime * 4.0 + hash21(vec2(floor(uTime * (1.0 + u_rate * 8.0)), 2.2))));
  return vec4(mix(hist, src, hold), 1.0);
}
`},{id:"dropout",name:"Dropout",category:"temporal",description:"Tape tear / hold-frame hits — louder on bass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"rate",label:"Hits",kind:"float",min:0,max:1,step:.01,default:.28},{id:"tear",label:"Tear",kind:"float",min:0,max:1,step:.01,default:.35},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_amount;
uniform float u_rate;
uniform float u_tear;
`,temporal:!0,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  float hit = step(1.0 - u_rate * 0.4, hash21(vec2(floor(uTime * (1.6 + u_bass * 7.0)), 4.4)));
  hit = max(hit, step(0.78, u_bass) * u_rate);
  vec2 p = uv;
  p.x += hit * (hash21(vec2(uv.y * 40.0, uTime)) - 0.5) * u_tear * 0.1;
  vec3 torn = sampleSrc(p).rgb;
  vec3 drop = mix(src, hist, hit * 0.8);
  drop = mix(drop, torn, hit);
  return vec4(mix(src, drop, u_amount), 1.0);
}
`}],Mo=`
float crHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 crRot(vec2 p, float a) {
  float s = sin(a), c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}
vec3 crHsv(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float crCap(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec2 crPt(float id, float k) {
  return vec2(crHash(vec2(id, k)), crHash(vec2(id, k + 17.0))) * 2.0 - 1.0;
}
float vertexR(float id, float idx) {
  float h = crHash(vec2(id * 0.19 + 0.07, idx + 4.2));
  return mix(0.08, 1.55, pow(h, 0.45));
}
float polarPoly(vec2 p, float id, float n) {
  float a = atan(p.y, p.x);
  float slice = 6.2831853 / max(n, 3.0);
  float t = (a + 3.14159265) / slice + crHash(vec2(id, 8.8)) * n;
  float idx = floor(t);
  float f = fract(t);
  float i0 = mod(idx, n);
  float i1 = mod(idx + 1.0, n);
  float r = mix(vertexR(id, i0), vertexR(id, i1), f);
  return length(p) - r;
}
float classicBody(vec2 p, float id) {
  float n = 4.0 + floor(crHash(vec2(id, 0.7)) * 5.0);
  float d = polarPoly(p, id, n);
  for (int j = 0; j < 3; j++) {
    float fj = float(j);
    vec2 pt = vec2(
      crHash(vec2(id, 31.0 + fj)),
      crHash(vec2(id, 44.0 + fj))
    ) * 2.0 - 1.0;
    pt *= 0.95;
    float rad = mix(0.1, 0.55, crHash(vec2(id, 58.0 + fj)));
    d = min(d, length(p - pt) - rad);
  }
  vec2 a = vec2(crHash(vec2(id, 70.0)), crHash(vec2(id, 71.0))) * 2.0 - 1.0;
  vec2 b = vec2(crHash(vec2(id, 72.0)), crHash(vec2(id, 73.0))) * 2.0 - 1.0;
  d = min(d, crCap(p, a * 0.9, b * 0.9, mix(0.05, 0.18, crHash(vec2(id, 74.0)))));
  float style = crHash(vec2(id, 9.9));
  if (style > 0.62) {
    float inner = polarPoly(p * mix(1.4, 2.2, crHash(vec2(id, 11.0))), id + 17.3, max(n - 1.0, 3.0));
    d = max(d, -inner - mix(0.02, 0.12, crHash(vec2(id, 12.0))));
  } else if (style > 0.38) {
    d = abs(d) - mix(0.05, 0.14, crHash(vec2(id, 13.0)));
  }
  return d;
}
float constellation(vec2 p, float id) {
  float d = 1e5;
  vec2 prev = vec2(0.0);
  float n = 4.0 + floor(crHash(vec2(id, 0.4)) * 4.0);
  for (int i = 0; i < 7; i++) {
    if (float(i) >= n) break;
    vec2 pt = crPt(id, 20.0 + float(i)) * 0.95;
    d = min(d, length(p - pt) - mix(0.08, 0.3, crHash(vec2(id, 80.0 + float(i)))));
    if (i > 0) d = min(d, crCap(p, prev, pt, mix(0.03, 0.11, crHash(vec2(id, 90.0 + float(i))))));
    prev = pt;
  }
  return d;
}
float spikes(vec2 p, float id) {
  float d = length(p) - mix(0.1, 0.38, crHash(vec2(id, 3.3)));
  float n = 5.0 + floor(crHash(vec2(id, 4.4)) * 6.0);
  for (int i = 0; i < 10; i++) {
    if (float(i) >= n) break;
    float ang = (float(i) / n) * 6.2831853 + crHash(vec2(id, float(i))) * 0.45;
    vec2 tip = vec2(cos(ang), sin(ang)) * mix(0.45, 1.55, crHash(vec2(id, 15.0 + float(i))));
    d = min(d, crCap(p, vec2(0.0), tip, mix(0.035, 0.13, crHash(vec2(id, 25.0 + float(i))))));
  }
  return d;
}
float cloud(vec2 p, float id) {
  float d = 1e5;
  for (int i = 0; i < 6; i++) {
    vec2 pt = crPt(id, 5.0 + float(i)) * 0.72;
    d = min(d, length(p - pt) - mix(0.2, 0.68, crHash(vec2(id, 40.0 + float(i)))));
  }
  return d;
}
float crescent(vec2 p, float id) {
  vec2 c0 = crPt(id, 1.0) * 0.18;
  float r0 = mix(0.72, 1.25, crHash(vec2(id, 2.0)));
  vec2 c1 = c0 + crPt(id, 3.0) * mix(0.32, 0.82, crHash(vec2(id, 4.0)));
  float r1 = r0 * mix(0.52, 0.92, crHash(vec2(id, 5.0)));
  return max(length(p - c0) - r0, -(length(p - c1) - r1));
}
float scribble(vec2 p, float id) {
  float d = 1e5;
  vec2 prev = crPt(id, 0.0) * 0.9;
  for (int i = 1; i < 6; i++) {
    vec2 pt = crPt(id, float(i) * 3.1) * 0.95;
    d = min(d, crCap(p, prev, pt, mix(0.055, 0.2, crHash(vec2(id, 10.0 + float(i))))));
    prev = pt;
  }
  return d;
}
float twins(vec2 p, float id) {
  vec2 off = crPt(id, 6.0) * 0.48;
  float n = 4.0 + floor(crHash(vec2(id, 7.0)) * 3.0);
  float d = polarPoly(p - off, id, n);
  d = min(d, polarPoly(p + off, id + 9.1, n + 1.0));
  d = min(d, crCap(p, off, -off, mix(0.045, 0.16, crHash(vec2(id, 8.0)))));
  return d;
}
float saw(vec2 p, float id) {
  float n = 8.0 + floor(crHash(vec2(id, 1.2)) * 5.0);
  float a = atan(p.y, p.x);
  float slice = 6.2831853 / n;
  float t = (a + 3.14159265) / slice;
  float idx = floor(t);
  float f = fract(t);
  float longR = mix(0.85, 1.52, crHash(vec2(id, 2.2)));
  float shortR = mix(0.1, 0.42, crHash(vec2(id, 3.2)));
  float r0 = mix(shortR, longR, step(0.5, mod(idx, 2.0)));
  r0 *= mix(0.72, 1.22, crHash(vec2(id, idx + 0.2)));
  float r1 = mix(shortR, longR, step(0.5, mod(idx + 1.0, 2.0)));
  r1 *= mix(0.72, 1.22, crHash(vec2(id, idx + 1.2)));
  return length(p) - mix(r0, r1, f);
}
float ring(vec2 p, float id) {
  float r = mix(0.45, 1.05, crHash(vec2(id, 2.1)));
  float w = mix(0.07, 0.26, crHash(vec2(id, 3.1)));
  float d = abs(length(p) - r) - w;
  vec2 bite = crPt(id, 4.1) * r;
  if (crHash(vec2(id, 5.1)) > 0.4) {
    d = max(d, -(length(p - bite) - mix(0.18, 0.52, crHash(vec2(id, 6.1)))));
  }
  return d;
}
float crBox2(vec2 p, vec2 b) {
  vec2 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
float musicNote(vec2 p, float id) {
  vec2 head = (p - vec2(-0.22, -0.48)) * vec2(1.4, 1.0);
  float d = length(head) - 0.34;
  d = min(d, crCap(p, vec2(0.14, -0.42), vec2(0.2, 0.98), 0.07));
  d = min(d, crCap(p, vec2(0.2, 0.98), vec2(0.72, 0.62), 0.075));
  d = min(d, crCap(p, vec2(0.72, 0.62), vec2(0.52, 0.22), 0.065));
  if (crHash(vec2(id, 1.1)) > 0.45) {
    vec2 head2 = (p - vec2(-0.85, -0.55)) * vec2(1.4, 1.0);
    d = min(d, length(head2) - 0.3);
    d = min(d, crCap(p, vec2(-0.52, -0.5), vec2(-0.48, 0.55), 0.06));
    d = min(d, crCap(p, vec2(-0.48, 0.55), vec2(0.2, 0.7), 0.08));
  }
  return d;
}
float vinyl(vec2 p, float id) {
  float r = mix(0.88, 1.08, crHash(vec2(id, 2.0)));
  float d = length(p) - r;
  d = max(d, -(length(p) - mix(0.1, 0.2, crHash(vec2(id, 3.0)))));
  float label = abs(length(p) - mix(0.32, 0.5, crHash(vec2(id, 4.0)))) - mix(0.08, 0.14, crHash(vec2(id, 5.0)));
  d = min(d, label);
  return d;
}
float cassette(vec2 p, float id) {
  vec2 body = vec2(mix(0.92, 1.12, crHash(vec2(id, 1.0))), mix(0.52, 0.68, crHash(vec2(id, 2.0))));
  float d = crBox2(p, body);
  float hole = mix(0.16, 0.24, crHash(vec2(id, 3.0)));
  d = max(d, -(length(p - vec2(-0.38, 0.05)) - hole));
  d = max(d, -(length(p - vec2(0.38, 0.05)) - hole));
  d = min(d, crBox2(p - vec2(0.0, -body.y * 0.68), vec2(0.42, 0.1)));
  return d;
}
float headphones(vec2 p, float id) {
  float bandR = mix(0.7, 0.86, crHash(vec2(id, 1.0)));
  float band = abs(length(p * vec2(1.05, 1.28)) - bandR) - 0.09;
  band = max(band, -p.y + 0.05);
  float cup = mix(0.28, 0.38, crHash(vec2(id, 2.0)));
  float d = min(band, length(p - vec2(-0.72, -0.12)) - cup);
  d = min(d, length(p - vec2(0.72, -0.12)) - cup);
  return d;
}
float heart(vec2 p, float id) {
  p.y -= 0.12;
  float s = mix(0.9, 1.12, crHash(vec2(id, 1.0)));
  p /= s;
  float d = length(p - vec2(-0.34, 0.3)) - 0.44;
  d = min(d, length(p - vec2(0.34, 0.3)) - 0.44);
  d = min(d, crCap(p, vec2(-0.62, 0.08), vec2(0.0, -0.88), 0.3));
  d = min(d, crCap(p, vec2(0.62, 0.08), vec2(0.0, -0.88), 0.3));
  return d;
}
float sparkle(vec2 p, float id) {
  float arm = mix(0.95, 1.28, crHash(vec2(id, 1.0)));
  float d = crCap(p, vec2(0.0, -arm), vec2(0.0, arm), 0.075);
  d = min(d, crCap(p, vec2(-arm, 0.0), vec2(arm, 0.0), 0.075));
  d = min(d, crCap(p, vec2(-arm * 0.62, -arm * 0.62), vec2(arm * 0.62, arm * 0.62), 0.055));
  d = min(d, crCap(p, vec2(-arm * 0.62, arm * 0.62), vec2(arm * 0.62, -arm * 0.62), 0.055));
  d = min(d, length(p) - mix(0.12, 0.22, crHash(vec2(id, 2.0))));
  return d;
}
float mic(vec2 p, float id) {
  float head = mix(0.32, 0.46, crHash(vec2(id, 1.0)));
  float d = length(p - vec2(0.0, 0.48)) - head;
  d = min(d, crCap(p, vec2(0.0, 0.18), vec2(0.0, -0.72), mix(0.08, 0.13, crHash(vec2(id, 2.0)))));
  d = min(d, crBox2(p - vec2(0.0, -0.88), vec2(0.3, 0.08)));
  return d;
}
float speaker(vec2 p, float id) {
  vec2 body = vec2(mix(0.62, 0.82, crHash(vec2(id, 1.0))), mix(0.78, 1.0, crHash(vec2(id, 2.0))));
  float d = crBox2(p, body);
  d = min(d, abs(length(p - vec2(0.0, 0.22)) - mix(0.26, 0.4, crHash(vec2(id, 3.0)))) - 0.08);
  d = min(d, length(p - vec2(0.0, -0.48)) - mix(0.14, 0.24, crHash(vec2(id, 4.0))));
  return d;
}
float clef(vec2 p, float id) {
  p.x += mix(-0.08, 0.08, crHash(vec2(id, 1.0)));
  float d = crCap(p, vec2(0.08, -1.0), vec2(-0.08, 1.02), 0.1);
  d = min(d, abs(length(p - vec2(0.22, 0.52)) - mix(0.3, 0.42, crHash(vec2(id, 2.0)))) - 0.09);
  d = min(d, length(p - vec2(-0.08, -0.58)) - 0.26);
  d = min(d, length(p - vec2(0.38, 0.12)) - 0.15);
  return d;
}
float musicPiano(vec2 p, float id) {
  float w = mix(0.92, 1.1, crHash(vec2(id, 1.0)));
  float d = crBox2(p - vec2(0.0, -0.08), vec2(w, 0.42));
  d = min(d, crBox2(p - vec2(-0.1, 0.5), vec2(w * 0.72, 0.16)));
  d = min(d, crBox2(p - vec2(-w * 0.82, -0.64), vec2(0.08, 0.22)));
  d = min(d, crBox2(p - vec2(w * 0.82, -0.64), vec2(0.08, 0.22)));
  d = min(d, crBox2(p - vec2(-0.48, 0.08), vec2(0.07, 0.18)));
  d = min(d, crBox2(p - vec2(-0.16, 0.08), vec2(0.07, 0.18)));
  d = min(d, crBox2(p - vec2(0.18, 0.08), vec2(0.07, 0.18)));
  d = min(d, crBox2(p - vec2(0.5, 0.08), vec2(0.07, 0.18)));
  return d;
}
float musicGuitar(vec2 p, float id) {
  float s = mix(0.9, 1.14, crHash(vec2(id, 1.0)));
  p /= s;
  float d = length(p - vec2(0.0, -0.22)) - 0.52;
  d = min(d, length(p - vec2(0.0, 0.2)) - 0.38);
  d = min(d, crCap(p, vec2(0.0, 0.42), vec2(0.0, 1.14), 0.07));
  d = min(d, crBox2(p - vec2(0.0, 1.2), vec2(0.16, 0.1)));
  d = max(d, -(length(p - vec2(0.0, -0.16)) - 0.12));
  return d;
}
float musicTrumpet(vec2 p, float id) {
  p.x += mix(-0.08, 0.08, crHash(vec2(id, 1.0)));
  float d = crCap(p, vec2(-0.92, 0.0), vec2(0.42, 0.0), 0.08);
  d = min(d, length((p - vec2(0.72, 0.0)) * vec2(0.7, 1.0)) - 0.32);
  d = min(d, crBox2(p - vec2(-0.18, 0.28), vec2(0.055, 0.22)));
  d = min(d, crBox2(p - vec2(0.04, 0.28), vec2(0.055, 0.22)));
  d = min(d, crBox2(p - vec2(0.26, 0.28), vec2(0.055, 0.22)));
  d = min(d, crCap(p, vec2(-0.92, 0.0), vec2(-1.08, 0.14), 0.05));
  return d;
}
float musicDrum(vec2 p, float id) {
  float w = mix(0.55, 0.72, crHash(vec2(id, 1.0)));
  float d = crBox2(p, vec2(w, 0.38));
  d = min(d, length((p - vec2(0.0, 0.38)) * vec2(1.0, 1.85)) - w);
  d = min(d, crCap(p, vec2(-w, 0.52), vec2(-w - 0.28, 1.0), 0.05));
  d = min(d, crCap(p, vec2(w, 0.52), vec2(w + 0.28, 1.0), 0.05));
  return d;
}
float musicSax(vec2 p, float id) {
  p.x += mix(-0.06, 0.06, crHash(vec2(id, 1.0)));
  float d = crCap(p, vec2(-0.08, 0.88), vec2(0.06, -0.12), 0.11);
  d = min(d, length((p - vec2(0.3, -0.52)) * vec2(0.82, 1.0)) - 0.32);
  d = min(d, crCap(p, vec2(-0.08, 0.88), vec2(-0.24, 1.08), 0.055));
  d = min(d, crBox2(p - vec2(0.2, 0.22), vec2(0.14, 0.05)));
  return d;
}
float musicBoombox(vec2 p, float id) {
  float w = mix(0.86, 1.08, crHash(vec2(id, 1.0)));
  float d = crBox2(p, vec2(w, 0.52));
  d = min(d, crBox2(p - vec2(0.0, 0.64), vec2(0.32, 0.08)));
  d = min(d, abs(length(p - vec2(-w * 0.42, -0.04)) - 0.28) - 0.08);
  d = min(d, abs(length(p - vec2(w * 0.42, -0.04)) - 0.28) - 0.08);
  return d;
}
float musicEighth(vec2 p, float id) {
  p.x += mix(-0.06, 0.06, crHash(vec2(id, 1.0)));
  vec2 h1 = (p - vec2(-0.38, -0.5)) * vec2(1.35, 1.0);
  vec2 h2 = (p - vec2(0.48, -0.4)) * vec2(1.35, 1.0);
  float d = length(h1) - 0.28;
  d = min(d, length(h2) - 0.28);
  d = min(d, crCap(p, vec2(-0.14, -0.45), vec2(-0.08, 0.96), 0.06));
  d = min(d, crCap(p, vec2(0.7, -0.36), vec2(0.76, 0.9), 0.06));
  d = min(d, crCap(p, vec2(-0.08, 0.96), vec2(0.76, 0.9), 0.07));
  return d;
}
float musicFam(vec2 p, float id, float fam) {
  float k = mod(fam, 16.0);
  if (k < 0.5) return musicNote(p, id);
  if (k < 1.5) return vinyl(p, id);
  if (k < 2.5) return cassette(p, id);
  if (k < 3.5) return headphones(p, id);
  if (k < 4.5) return heart(p, id);
  if (k < 5.5) return sparkle(p, id);
  if (k < 6.5) return mic(p, id);
  if (k < 7.5) return speaker(p, id);
  if (k < 8.5) return clef(p, id);
  if (k < 9.5) return musicPiano(p, id);
  if (k < 10.5) return musicGuitar(p, id);
  if (k < 11.5) return musicTrumpet(p, id);
  if (k < 12.5) return musicDrum(p, id);
  if (k < 13.5) return musicSax(p, id);
  if (k < 14.5) return musicBoombox(p, id);
  return musicEighth(p, id);
}
float candle(vec2 p, float id) {
  float d = crBox2(p - vec2(0.0, -0.18), vec2(mix(0.14, 0.2, crHash(vec2(id, 1.0))), 0.52));
  vec2 fl = (p - vec2(0.0, 0.52)) * vec2(1.55, 1.0);
  d = min(d, length(fl) - mix(0.16, 0.24, crHash(vec2(id, 2.0))));
  return d;
}
float lantern(vec2 p, float id) {
  float d = crBox2(p, vec2(mix(0.32, 0.44, crHash(vec2(id, 1.0))), mix(0.42, 0.58, crHash(vec2(id, 2.0)))));
  d = min(d, crCap(p, vec2(0.0, 0.5), vec2(0.0, 0.88), 0.06));
  d = min(d, length(p - vec2(0.0, 0.08)) - mix(0.16, 0.24, crHash(vec2(id, 3.0))));
  return d;
}
float bell(vec2 p, float id) {
  float d = length(p * vec2(1.0, 0.82) - vec2(0.0, 0.08)) - mix(0.42, 0.55, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(0.0, 0.48), vec2(0.0, 0.92), 0.07));
  d = min(d, length(p - vec2(0.0, -0.48)) - 0.1);
  return d;
}
float moth(vec2 p, float id) {
  float d = crCap(p, vec2(0.0, -0.18), vec2(0.0, 0.32), mix(0.1, 0.14, crHash(vec2(id, 1.0))));
  d = min(d, length((p - vec2(-0.42, 0.06)) * vec2(1.0, 1.32)) - mix(0.4, 0.52, crHash(vec2(id, 2.0))));
  d = min(d, length((p - vec2(0.42, 0.06)) * vec2(1.0, 1.32)) - mix(0.4, 0.52, crHash(vec2(id, 3.0))));
  return d;
}
float beetle(vec2 p, float id) {
  float d = length(p * vec2(1.15, 0.85)) - mix(0.42, 0.58, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(-0.22, -0.12), vec2(-0.72, -0.55), 0.05));
  d = min(d, crCap(p, vec2(0.22, -0.12), vec2(0.72, -0.55), 0.05));
  d = min(d, length(p - vec2(0.0, 0.48)) - 0.16);
  return d;
}
float charmKey(vec2 p, float id) {
  float d = length(p - vec2(0.0, 0.42)) - mix(0.28, 0.36, crHash(vec2(id, 1.0)));
  d = max(d, -(length(p - vec2(0.0, 0.42)) - 0.12));
  d = min(d, crCap(p, vec2(0.0, 0.14), vec2(0.0, -0.72), 0.075));
  d = min(d, crBox2(p - vec2(0.16, -0.52), vec2(0.18, 0.055)));
  d = min(d, crBox2(p - vec2(0.14, -0.7), vec2(0.12, 0.05)));
  return d;
}
float charmBow(vec2 p, float id) {
  float d = length((p - vec2(-0.4, 0.08)) * vec2(1.0, 1.28)) - mix(0.32, 0.4, crHash(vec2(id, 1.0)));
  d = min(d, length((p - vec2(0.4, 0.08)) * vec2(1.0, 1.28)) - mix(0.32, 0.4, crHash(vec2(id, 2.0))));
  d = min(d, length(p) - 0.14);
  d = min(d, crCap(p, vec2(-0.06, -0.1), vec2(-0.1, -0.62), 0.045));
  d = min(d, crCap(p, vec2(0.06, -0.1), vec2(0.1, -0.62), 0.045));
  return d;
}
float teardrop(vec2 p, float id) {
  p.y += 0.08;
  float d = length(p - vec2(0.0, -0.22)) - mix(0.38, 0.5, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(0.0, -0.08), vec2(0.0, 0.82), mix(0.16, 0.24, crHash(vec2(id, 2.0)))));
  return d;
}
float leaf(vec2 p, float id) {
  float d = length((p * vec2(1.35, 0.72))) - mix(0.48, 0.62, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(0.0, -0.55), vec2(0.0, 0.62), 0.045));
  return d;
}
float votiveFam(vec2 p, float id, float fam) {
  float k = mod(fam, 6.0);
  if (k < 0.5) return candle(p, id);
  if (k < 1.5) return lantern(p, id);
  if (k < 2.5) return bell(p, id);
  if (k < 3.5) return crescent(p, id);
  if (k < 4.5) return sparkle(p, id);
  return heart(p, id);
}
float mothFam(vec2 p, float id, float fam) {
  float k = mod(fam, 6.0);
  if (k < 0.5) return moth(p, id);
  if (k < 1.5) return beetle(p, id);
  if (k < 2.5) return cloud(p, id);
  if (k < 3.5) return crescent(p, id);
  if (k < 4.5) return twins(p, id);
  return leaf(p, id);
}
float charmFam(vec2 p, float id, float fam) {
  float k = mod(fam, 6.0);
  if (k < 0.5) return charmKey(p, id);
  if (k < 1.5) return charmBow(p, id);
  if (k < 2.5) return teardrop(p, id);
  if (k < 3.5) return ring(p, id);
  if (k < 4.5) return heart(p, id);
  return sparkle(p, id);
}
float shapeFam(vec2 p, float id, float famSlot) {
  float fam = mod(famSlot, 9.0);
  if (fam < 0.5) return classicBody(p, id);
  if (fam < 1.5) return constellation(p, id);
  if (fam < 2.5) return spikes(p, id);
  if (fam < 3.5) return cloud(p, id);
  if (fam < 4.5) return crescent(p, id);
  if (fam < 5.5) return scribble(p, id);
  if (fam < 6.5) return twins(p, id);
  if (fam < 7.5) return saw(p, id);
  return ring(p, id);
}
float weirdBody(vec2 p, float id, float famSlot, float kit) {
  bool icon = (kit > 0.5 && kit < 1.5) || kit > 2.5 || (kit > 1.5 && kit < 2.5 && famSlot > 8.5);
  if (icon) {
    p *= vec2(mix(0.78, 1.22, crHash(vec2(id, 1.3))), mix(0.82, 1.24, crHash(vec2(id, 2.4))));
  } else {
    p *= vec2(mix(0.42, 1.65, crHash(vec2(id, 1.3))), mix(0.48, 1.7, crHash(vec2(id, 2.4))));
  }
  if (kit < 0.5) return shapeFam(p, id, famSlot);
  if (kit < 1.5) return musicFam(p, id, famSlot);
  if (kit < 2.5) {
    if (famSlot < 8.5) return shapeFam(p, id, famSlot);
    return musicFam(p, id, famSlot - 9.0);
  }
  if (kit < 3.5) return votiveFam(p, id, famSlot);
  if (kit < 4.5) return mothFam(p, id, famSlot);
  return charmFam(p, id, famSlot);
}
vec4 critterOne(vec2 uv, float id, float famSlot, float time, float sizeMul, float kit) {
  float hx = crHash(vec2(id, 0.13));
  float hy = crHash(vec2(id, 2.77));
  float hz = crHash(vec2(id, 8.14));
  float dir = crHash(vec2(id, 0.23)) > 0.5 ? 1.0 : -1.0;
  float spd = mix(0.05, 0.22, crHash(vec2(id, 0.27)));
  float axis = crHash(vec2(id, 0.19));
  vec2 vel = vec2(dir * spd, (hy - 0.5) * spd * 0.5);
  if (axis >= 0.38 && axis < 0.68) vel = vec2((hx - 0.5) * spd * 0.5, dir * spd);
  if (axis >= 0.68) vel = vec2(dir * spd * 0.8, (hz > 0.5 ? 1.0 : -1.0) * spd * 0.7);
  vec2 start = vec2(hx, mix(0.12, 0.88, hy));
  float bob = mix(0.06, 0.24, hz);
  float bobHz = mix(0.4, 1.4, crHash(vec2(id, 3.1)));
  vec2 pos = start + vel * time;
  pos.y += bob * sin(time * bobHz + id);
  if (kit > 0.5 && kit < 1.5) pos.y += 0.02 * u_bass * sin(time * 10.0 + id);
  pos = fract(pos);
  float heading = atan(vel.y + bob * cos(time * bobHz + id) * bobHz, vel.x + 0.0001);
  float spin = heading + time * mix(-2.2, 2.2, crHash(vec2(id, 12.1)));
  float sz = mix(0.035, 0.17, crHash(vec2(id, 9.2))) * max(sizeMul, 0.2);
  sz *= 1.0 + 0.08 * sin(time * 1.7 + id);
  if (kit > 0.5 && kit < 1.5) sz *= 1.1 + 0.16 * u_bass;
  float hue = crHash(vec2(id, 0.41));
  if (kit > 0.5 && kit < 1.5) {
    float candy = crHash(vec2(id, 0.47));
    if (candy < 0.25) hue = mix(0.9, 0.02, crHash(vec2(id, 0.48)));
    else if (candy < 0.5) hue = mix(0.1, 0.18, crHash(vec2(id, 0.48)));
    else if (candy < 0.75) hue = mix(0.42, 0.55, crHash(vec2(id, 0.48)));
    else hue = mix(0.72, 0.88, crHash(vec2(id, 0.48)));
  } else if (kit > 2.5 && kit < 3.5) {
    hue = mix(0.05, 0.13, crHash(vec2(id, 0.48)));
  } else if (kit > 3.5 && kit < 4.5) {
    hue = mix(0.07, 0.16, crHash(vec2(id, 0.48)));
  } else if (kit > 4.5) {
    hue = mix(0.88, 0.08, crHash(vec2(id, 0.48)));
  }
  float vibe = crHash(vec2(id, 0.74));
  float sat = vibe < 0.22 ? mix(0.2, 0.48, crHash(vec2(id, 0.52))) : mix(0.55, 0.92, crHash(vec2(id, 0.52)));
  if (kit > 0.5 && kit < 1.5) sat = mix(0.62, 0.92, crHash(vec2(id, 0.52)));
  if (kit > 2.5 && kit < 3.5) sat = mix(0.32, 0.62, crHash(vec2(id, 0.52)));
  if (kit > 3.5 && kit < 4.5) sat = mix(0.18, 0.48, crHash(vec2(id, 0.52)));
  if (kit > 4.5) sat = mix(0.45, 0.78, crHash(vec2(id, 0.52)));
  float val = mix(0.72, 1.0, crHash(vec2(id, 0.63)));
  vec3 fillCol = crHsv(vec3(hue, sat, val));
  vec3 rimCol = crHsv(vec3(fract(hue + mix(0.08, 0.52, crHash(vec2(id, 0.81)))), mix(0.28, 0.9, crHash(vec2(id, 0.82))), 1.0));
  vec3 accCol = vec3(0.0);
  float accA = 0.0;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    vec2 tp = fract(pos - vel * fk * 0.65);
    vec2 dlt = uv - tp;
    dlt -= round(dlt);
    vec2 p = crRot(dlt, spin) / (sz * (1.0 - fk * 0.08));
    float sd = weirdBody(p, id, famSlot, kit);
    float fillSoft = kit > 0.5 ? 0.07 : 0.14;
    if (kit > 0.5 && kit < 1.5) fillSoft = 0.048;
    float fill = 1.0 - smoothstep(-0.02, fillSoft, sd);
    float rim = 1.0 - smoothstep(0.0, 0.18, abs(sd + 0.02));
    float glow = exp(-max(sd, 0.0) * 3.6) * 0.48;
    if (kit > 0.5 && kit < 1.5) glow *= 1.28;
    float hl = fill * (1.0 - smoothstep(0.45, 0.0, length(p - vec2(-0.2, -0.25))));
    vec3 col = mix(fillCol, rimCol, rim * 0.6);
    col = mix(col, vec3(1.0), hl * (kit > 0.5 && kit < 1.5 ? 0.42 : 0.28));
    float a = max(fill, glow * 0.5) * (1.0 - fk * 0.34);
    accCol = mix(accCol, col, a);
    accA = max(accA, a);
  }
  return vec4(accCol, clamp(accA, 0.0, 1.0));
}
vec4 critterField(vec2 uv, float count, float seed, float time, float sizeMul, float kit) {
  vec4 acc = vec4(0.0);
  time += u_audio * 0.14;
  sizeMul *= mix(1.0, 1.12, u_bass);
  float nFam = 9.0;
  if (kit > 0.5 && kit < 1.5) nFam = 16.0;
  else if (kit > 1.5 && kit < 2.5) nFam = 25.0;
  else if (kit > 2.5) nFam = 6.0;
  float famSpin = floor(crHash(vec2(seed * 0.071, 4.4)) * nFam);
  for (int i = 0; i < 8; i++) {
    if (float(i) >= count) break;
    float slot = float(i);
    float floaterId = crHash(vec2(slot + 0.19, seed * 0.137 + 2.3)) * 91.0 + slot * 7.13;
    float famSlot = mod(slot + famSpin, nFam);
    vec4 d = critterOne(uv, floaterId, famSlot, time, sizeMul, kit);
    acc.rgb = mix(acc.rgb, d.rgb, d.a);
    acc.a = max(acc.a, d.a);
  }
  return acc;
}
`,Ao=`
float figH(float n) {
  vec3 p3 = fract(vec3(n, n * 1.13, n * 0.71) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 figRotX(vec3 p, float a) {
  float s = sin(a), c = cos(a);
  return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z);
}
vec3 figRotY(vec3 p, float a) {
  float s = sin(a), c = cos(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}
vec3 figRotZ(vec3 p, float a) {
  float s = sin(a), c = cos(a);
  return vec3(c * p.x - s * p.y, s * p.x + c * p.y, p.z);
}
float figBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}
float figOcta(vec3 p, float s) {
  p = abs(p);
  return (p.x + p.y + p.z - s) * 0.57735027;
}
float figCap(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec2 figMin(vec2 a, vec2 b) { return a.x < b.x ? a : b; }
float figDanceStyle(float seed) {
  return floor(figH(seed + 0.11) * 8.0);
}
float figDanceT(float seed, float t) {
  float style = figDanceStyle(seed);
  if (style > 5.5 && style < 6.5) {
    float fps = mix(8.0, 14.0, figH(seed + 0.19));
    return floor(t * fps) / fps;
  }
  if (figH(seed + 0.17) > 0.82) {
    float fps = mix(5.0, 11.0, figH(seed + 0.19));
    return floor(t * fps) / fps;
  }
  return t;
}
struct Fig {
  float t, style, facing, sway, bob, spin, lean, slide, peck;
  float sx, sz, torsoKind, neck, hs, headKind, horn;
  float kickHz, kickAmt, extraLeg, arms, pack, tail, orb;
  float nEyes, eyeY, eyeZ, eyeSpread, eyeR, eyeSq, mouth, ears, tusks;
  float petals, skirt, antenna, halo, blush;
  float wings, collar, bow, crest, snout;
  float crystal, puff, spikes, sprout;
  vec3 ts;
};
Fig figRoll(float seed, float time) {
  Fig f;
  f.t = figDanceT(seed, time + (u_audio > 0.001 ? u_audio * 0.12 : 0.0));
  f.style = figDanceStyle(seed);
  f.facing = mix(-0.28, 0.28, figH(seed + 0.48));
  f.sway = sin(f.t * 3.4) * mix(0.06, 0.16, figH(seed + 0.31));
  f.bob = abs(sin(f.t * 6.6)) * mix(0.02, 0.12, figH(seed + 0.37));
  f.spin = 0.0;
  f.lean = 0.0;
  f.slide = 0.0;
  f.peck = 0.0;
  if (f.style < 0.5) {
    f.sway = sin(f.t * 3.4) * mix(0.06, 0.16, figH(seed + 0.31));
  } else if (f.style < 1.5) {
    f.bob = abs(sin(f.t * 9.4)) * 0.045;
    f.sway = sin(f.t * 8.2) * 0.08;
    f.peck = 0.95 * max(0.0, sin(f.t * 10.5));
  } else if (f.style < 2.5) {
    f.spin = f.t * mix(1.2, 2.4, figH(seed + 0.44));
    f.sway = sin(f.t * 1.15) * 0.22;
    f.bob = abs(sin(f.t * 3.1)) * 0.07;
  } else if (f.style < 3.5) {
    f.lean = 1.05 + 0.18 * sin(f.t * 2.4);
    f.bob = -0.22 + 0.06 * sin(f.t * 1.6);
  } else if (f.style < 4.5) {
    f.bob = 0.32 * max(0.0, sin(f.t * 5.9));
    f.sway = sin(f.t * 5.9) * 0.08;
  } else if (f.style < 5.5) {
    f.slide = sin(f.t * 1.85) * 0.55;
    f.sway = -0.2 * sign(cos(f.t * 1.85) + 0.0001);
    f.bob = abs(sin(f.t * 8.4)) * 0.04;
  } else if (f.style < 6.5) {
    f.bob = abs(sin(f.t * 12.5)) * 0.07;
    f.sway = sin(f.t * 25.0) * 0.06;
  } else {
    f.sway = sin(f.t * 5.6) * 0.38;
    f.bob = sin(f.t * 8.3) * 0.14;
  }
  f.sx = mix(0.48, 1.72, figH(seed + 1.22));
  f.sz = mix(0.55, 1.55, figH(seed + 1.26));
  f.torsoKind = figH(seed + 1.1);
  f.ts = vec3(
    mix(0.12, 0.42, figH(seed + 1.2)),
    mix(0.16, 0.55, pow(figH(seed + 1.3), 0.8)),
    mix(0.09, 0.3, figH(seed + 1.4))
  );
  f.neck = mix(0.0, 0.52, pow(figH(seed + 2.05), 1.2));
  f.headKind = figH(seed + 2.2);
  f.hs = mix(0.14, 0.62, pow(figH(seed + 2.3), 0.62));
  if (figH(seed + 2.35) > 0.76) f.hs *= 1.42;
  f.horn = step(0.48, figH(seed + 2.8));
  f.kickHz = mix(4.4, 6.2, figH(seed + 3.1));
  f.kickAmt = mix(0.25, 0.7, figH(seed + 3.2));
  if (f.style > 0.5 && f.style < 1.5) { f.kickHz = mix(7.2, 10.5, figH(seed + 3.1)); f.kickAmt = mix(0.35, 0.85, figH(seed + 3.2)); }
  if (f.style > 2.5 && f.style < 3.5) { f.kickHz = mix(0.9, 2.0, figH(seed + 3.1)); f.kickAmt = mix(0.55, 0.95, figH(seed + 3.2)); }
  if (f.style > 5.5 && f.style < 6.5) { f.kickHz = mix(9.0, 14.0, figH(seed + 3.1)); f.kickAmt = mix(0.15, 0.4, figH(seed + 3.2)); }
  if (f.style > 4.5 && f.style < 5.5) f.kickAmt *= 0.35;
  f.extraLeg = step(0.86, figH(seed + 3.7));
  f.arms = figH(seed + 4.0) > 0.78 ? 4.0 : 2.0;
  if (f.style > 1.5 && f.style < 2.5) f.arms = 4.0;
  if (uQuality < 0.5) { f.arms = 2.0; f.extraLeg = 0.0; }
  f.pack = step(0.84, figH(seed + 5.1));
  f.tail = step(0.58, figH(seed + 5.4));
  f.orb = step(0.82, figH(seed + 5.8));
  f.nEyes = 1.0 + floor(pow(figH(seed + 6.1), 0.88) * 2.15);
  f.eyeY = f.hs * mix(-0.04, 0.26, figH(seed + 6.2));
  f.eyeZ = f.hs * mix(0.88, 1.28, figH(seed + 6.3));
  f.eyeSpread = f.hs * mix(0.18, 0.82, figH(seed + 6.4));
  f.eyeR = f.hs * mix(0.2, 0.55, figH(seed + 6.5));
  f.eyeSq = mix(0.4, 1.7, figH(seed + 6.55));
  f.mouth = figH(seed + 7.0);
  f.ears = step(0.62, figH(seed + 8.3));
  f.tusks = step(0.72, figH(seed + 9.1));
  f.petals = step(0.7, figH(seed + 0.52));
  f.skirt = step(0.68, figH(seed + 0.58));
  f.antenna = step(0.74, figH(seed + 0.64));
  f.halo = step(0.78, figH(seed + 0.70));
  f.blush = step(0.38, figH(seed + 0.74));
  f.wings = step(0.76, figH(seed + 0.81));
  f.collar = step(0.72, figH(seed + 0.84));
  f.bow = step(0.8, figH(seed + 0.88));
  f.crest = step(0.62, figH(seed + 0.93));
  f.snout = figH(seed + 7.4);
  f.crystal = step(0.8, figH(seed + 0.96));
  f.puff = step(0.84, figH(seed + 0.98));
  f.spikes = step(0.86, figH(seed + 0.99));
  f.sprout = step(0.88, figH(seed + 1.01));
  if (f.petals > 0.5) f.halo = 0.0;
  if (u_grow < 0.5) {
    f.petals = 0.0; f.skirt = 0.0; f.antenna = 0.0; f.halo = 0.0;
    f.wings = 0.0; f.bow = 0.0; f.pack = 0.0; f.orb = 0.0;
    f.collar = 0.0; f.crest = 0.0; f.extraLeg = 0.0; f.arms = 2.0;
    f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0;
  } else if (u_grow > 0.5 && u_grow < 1.5) { f.petals = 1.0; f.halo = 0.0; f.antenna = 0.0; f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 1.5 && u_grow < 2.5) { f.halo = 1.0; f.petals = 0.0; f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 2.5 && u_grow < 3.5) { f.antenna = 1.0; f.halo = 0.0; f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 3.5 && u_grow < 4.5) { f.skirt = 1.0; f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 4.5 && u_grow < 5.5) { f.wings = 1.0; f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 5.5 && u_grow < 6.5) { f.horn = 1.0; f.crest = 1.0; f.crystal = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 6.5 && u_grow < 7.5) { f.crystal = 1.0; f.halo = 0.0; f.petals = 0.0; f.puff = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 7.5 && u_grow < 8.5) { f.puff = 1.0; f.crystal = 0.0; f.wings = 0.0; f.spikes = 0.0; f.sprout = 0.0; }
  else if (u_grow > 8.5 && u_grow < 9.5) { f.spikes = 1.0; f.crystal = 0.0; f.puff = 0.0; f.halo = 0.0; f.sprout = 0.0; }
  else if (u_grow > 9.5 && u_grow < 10.5) { f.sprout = 1.0; f.spikes = 0.0; f.crystal = 0.0; f.puff = 0.0; f.halo = 0.0; }
  else if (u_grow > 10.5) {
    f.petals = 0.0; f.skirt = 0.0; f.antenna = 0.0; f.halo = 0.0;
    f.tusks = 0.0; f.wings = 0.0; f.bow = 0.0; f.pack = 0.0; f.orb = 0.0;
    f.extraLeg = 0.0; f.arms = 2.0; f.nEyes = min(f.nEyes, 2.0);
    f.crest = 0.0; f.horn = 0.0; f.crystal = 0.0; f.puff = 0.0;
    f.spikes = 0.0; f.sprout = 0.0;
  }
  if (u_audio > 0.001) {
    f.kickAmt *= mix(1.0, 1.65, u_bass);
    f.bob += u_bass * 0.055;
    f.sway += (u_audio - 0.35) * 0.05;
  }
  return f;
}
vec2 figureFaceF(vec3 hp, Fig f) {
  float hs = f.hs;
  vec2 d = vec2(figBox(hp - vec3(0.0, hs * 0.02, hs * 0.82), vec3(hs * 0.72, hs * 0.62, hs * 0.14)), 2.4);
  for (int i = 0; i < 3; i++) {
    if (float(i) >= f.nEyes) break;
    float xi = 0.0;
    if (f.nEyes > 1.5 && f.nEyes < 2.5) xi = float(i) < 0.5 ? -f.eyeSpread : f.eyeSpread;
    if (f.nEyes > 2.5) xi = (float(i) - 1.0) * f.eyeSpread;
    float yi = f.eyeY + (float(i) - 1.0) * f.hs * 0.08;
    float eR = f.eyeR * mix(0.72, 1.38, fract(f.mouth + float(i) * 0.37));
    vec3 ep = hp - vec3(xi, yi, f.eyeZ);
    ep.y *= f.eyeSq;
    d = figMin(d, vec2(length(ep) - eR, 5.0));
    vec3 look = vec3((u_audio - 0.35) * 0.32, u_bass * 0.22 - 0.05, 0.0) * eR;
    d = figMin(d, vec2(length(ep - vec3(0.0, 0.0, eR * 0.5) - look) - eR * 0.45, 5.6));
  }
  if (f.mouth < 0.3 || f.snout > 0.72) {
    vec3 sn = hp - vec3(0.0, hs * -0.02, hs * mix(1.35, 1.7, f.snout));
    d = figMin(d, vec2(figBox(sn, vec3(hs * mix(0.22, 0.38, f.snout), hs * 0.16, hs * mix(0.32, 0.52, f.snout))), 6.0));
  } else if (f.mouth < 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.02, hs * 0.4), vec3(0.0, 0.0, hs * 1.7), hs * 0.09), 7.0));
  } else if (f.mouth < 0.78) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.06, hs * 0.5), vec3(hs * 0.12, -hs * 0.4, hs * 1.5), hs * 0.1), 6.0));
  } else {
    d = figMin(d, vec2(figBox(hp - vec3(0.0, -hs * 0.12, hs * 0.95), vec3(hs * 0.32, hs * 0.08, hs * 0.18)), 7.0));
  }
  if (f.ears > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.48, hs * 0.55, 0.08), vec3(-hs * 1.15, hs * 1.35, 0.12), hs * 0.09), 7.5));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.52, hs * 0.42, 0.1), vec3(hs * 0.88, hs * 0.85, 0.05), hs * 0.07), 7.5));
  }
  if (f.tusks > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.16, -hs * 0.14, hs * 0.62), vec3(-hs * 0.22, -hs * 0.48, hs * 1.1), hs * 0.042), 8.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.16, -hs * 0.14, hs * 0.62), vec3(hs * 0.22, -hs * 0.48, hs * 1.1), hs * 0.042), 8.0));
  }
  if (f.blush > 0.5) {
    d = figMin(d, vec2(length(hp - vec3(-hs * 0.42, -hs * 0.06, f.eyeZ * 0.62)) - hs * 0.12, 6.9));
    d = figMin(d, vec2(length(hp - vec3(hs * 0.42, -hs * 0.06, f.eyeZ * 0.62)) - hs * 0.12, 6.9));
  }
  if (f.bow > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.08, hs * 0.82, 0.04), vec3(-hs * 0.52, hs * 1.08, 0.08), hs * 0.065), 6.9));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.08, hs * 0.82, 0.04), vec3(hs * 0.52, hs * 1.08, 0.08), hs * 0.065), 6.9));
  }
  if (f.petals > 0.5 && uQuality >= 0.5) {
    for (int k = 0; k < 5; k++) {
      float a = float(k) * 1.25663706 + 0.18;
      vec3 tip = vec3(sin(a) * hs * 1.32, cos(a) * hs * 1.18, hs * 0.12);
      d = figMin(d, vec2(figCap(hp, vec3(0.0, hs * 0.18, 0.0), tip, hs * 0.068), 6.9));
    }
  }
  if (f.antenna > 0.5) {
    vec3 al = vec3(-hs * 0.38, hs * 1.82, 0.06);
    vec3 ar = vec3(hs * 0.4, hs * 1.72, 0.04);
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.22, hs * 0.62, 0.0), al, 0.026), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.22, hs * 0.58, 0.0), ar, 0.024), 4.0));
    d = figMin(d, vec2(length(hp - al) - 0.05, 6.9));
    d = figMin(d, vec2(length(hp - ar) - 0.045, 6.9));
  }
  if (f.halo > 0.5) {
    vec3 hz = hp - vec3(0.0, hs * 0.42, 0.0);
    float ring = abs(length(hz.xy) - hs * 1.32) - 0.032;
    d = figMin(d, vec2(max(ring, abs(hz.z) - 0.022), 8.0));
  }
  if (f.crest > 0.5) {
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, hs * 1.08, hs * 0.08), hs * 0.22), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.16, hs * 0.7, 0.02), vec3(-hs * 0.06, hs * 1.32, hs * 0.08), hs * 0.042), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.16, hs * 0.68, 0.02), vec3(hs * 0.08, hs * 1.24, hs * 0.06), hs * 0.038), 4.0));
  }
  if (f.crystal > 0.5) {
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, hs * 1.28, hs * 0.22), hs * 0.3), 8.0));
    d = figMin(d, vec2(figOcta(hp - vec3(-hs * 0.46, hs * 0.92, hs * 0.16), hs * 0.16), 8.0));
    d = figMin(d, vec2(figOcta(hp - vec3(hs * 0.4, hs * 0.98, hs * 0.14), hs * 0.14), 8.0));
  }
  if (f.spikes > 0.5) {
    for (int k = 0; k < 6; k++) {
      float a = float(k) * 1.04719755 + 0.2;
      vec3 tip = vec3(sin(a) * hs * 1.45, cos(a) * hs * 1.28 + hs * 0.22, hs * 0.22);
      d = figMin(d, vec2(figCap(hp, vec3(0.0, hs * 0.12, hs * 0.06), tip, hs * 0.046), 8.0));
    }
  }
  if (f.sprout > 0.5) {
    vec3 stem = vec3(0.0, hs * 1.55, hs * 0.08);
    d = figMin(d, vec2(figCap(hp, vec3(0.0, hs * 0.7, 0.04), stem, hs * 0.032), 4.0));
    d = figMin(d, vec2(figOcta(hp - stem - vec3(-hs * 0.22, hs * 0.08, 0.04), hs * 0.16), 6.9));
    d = figMin(d, vec2(figOcta(hp - stem - vec3(hs * 0.2, hs * 0.02, 0.02), hs * 0.14), 6.9));
  }
  return d;
}
vec2 figureFace(vec3 hp, float seed, float hs) {
  Fig f = figRoll(seed, 0.0);
  f.hs = hs;
  return figureFaceF(hp, f);
}
vec2 figureHit(vec3 p, Fig f, float seed) {
  if (f.style > 6.5) p = figRotX(p, sin(f.t * 6.1) * 0.22);
  p.x += f.slide;
  p = figRotY(p, f.facing + f.spin + f.sway);
  p = figRotZ(p, f.lean);
  p.y -= f.bob;
  p.x *= f.sx;
  p.z *= f.sz;
  vec2 d;
  if (f.torsoKind < 0.25) d = vec2(figBox(p, f.ts), 1.0);
  else if (f.torsoKind < 0.5) d = vec2(figOcta(p * vec3(1.0, 0.75, 1.1), mix(0.28, 0.48, figH(seed + 1.5))), 1.0);
  else if (f.torsoKind < 0.75) d = vec2(figCap(p, vec3(0.0, f.ts.y * 0.55, 0.0), vec3(0.0, -f.ts.y * 0.7, 0.0), f.ts.x * 0.72), 1.0);
  else d = vec2(figBox(p, vec3(f.ts.x * 1.38, f.ts.y * 0.38, f.ts.z * 1.15)), 1.0);
  if (f.neck > 0.07) {
    d = figMin(d, vec2(figCap(p, vec3(0.0, f.ts.y * 0.65, 0.0), vec3(0.0, f.ts.y + f.neck, 0.0), 0.055), 1.0));
  }
  vec3 hp = p - vec3(0.0, f.ts.y + mix(0.16, 0.28, figH(seed + 2.1)) + f.neck, 0.0);
  hp = figRotZ(hp, sin(f.t * 4.1) * 0.1);
  hp = figRotX(hp, cos(f.t * 3.2) * 0.06 - f.peck);
  if (f.headKind < 0.16) d = figMin(d, vec2(figOcta(hp, f.hs * 1.35), 2.0));
  else if (f.headKind < 0.32) d = figMin(d, vec2(figBox(hp, vec3(f.hs, f.hs * 1.05, f.hs * 0.85)), 2.0));
  else if (f.headKind < 0.5) {
    d = figMin(d, vec2(figOcta(hp - vec3(f.hs * 0.55, 0.0, 0.0), f.hs), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(f.hs * 0.62, f.hs * 0.08, 0.0), f.hs * 0.88), 2.2));
  } else if (f.headKind < 0.68) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -f.hs * 0.2, 0.0), vec3(0.0, f.hs * 1.4, 0.0), f.hs * 0.45), 2.0));
  } else if (f.headKind < 0.84) {
    d = figMin(d, vec2(figBox(hp, vec3(f.hs * 1.32, f.hs * 0.48, f.hs * 0.4)), 2.0));
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, f.hs * 0.22, f.hs * 0.12), f.hs * 0.55), 2.2));
  } else {
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, f.hs * 0.58, 0.0), f.hs * 0.7), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(0.0, f.hs * 0.12, 0.0), f.hs * 0.92), 2.2));
  }
  if (length(hp) < f.hs * 2.8) d = figMin(d, figureFaceF(hp, f));
  if (f.horn > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-f.hs * 0.22, f.hs * 0.55, f.hs * 0.06), vec3(-f.hs * 0.12, f.hs * 1.72, f.hs * 0.16), 0.05), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(f.hs * 0.22, f.hs * 0.55, f.hs * 0.04), vec3(f.hs * 0.16, f.hs * 1.55, f.hs * 0.12), 0.045), 4.0));
  }
  float legLen = mix(0.34, 0.52, figH(seed + 3.3));
  float legR = mix(0.045, 0.09, figH(seed + 3.4));
  for (int i = 0; i < 2; i++) {
    float side = float(i) < 0.5 ? -1.0 : 1.0;
    float kick = sin(f.t * f.kickHz + float(i) * 3.14159) * f.kickAmt;
    vec3 lp = p - vec3(side * f.ts.x * 0.55, -f.ts.y * 0.55, 0.0);
    lp = figRotX(lp, 0.25 + kick);
    lp = figRotZ(lp, side * 0.12);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -legLen, 0.02), legR), 3.0));
    d = figMin(d, vec2(figBox(lp - vec3(0.0, -legLen, 0.04), vec3(0.07, 0.04, 0.11)), 3.0));
  }
  if (f.extraLeg > 0.5) {
    vec3 lp = p - vec3(0.0, -f.ts.y * 0.52, 0.1);
    lp = figRotX(lp, 0.18 + sin(f.t * (f.kickHz * 0.85 + 0.7)) * f.kickAmt * 0.85);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -0.4, 0.02), 0.06), 3.0));
  }
  float armR = mix(0.035, 0.075, figH(seed + 4.5));
  for (int i = 0; i < 4; i++) {
    if (float(i) >= f.arms) break;
    float side = mod(float(i), 2.0) < 0.5 ? -1.0 : 1.0;
    float row = float(i) < 2.0 ? 0.0 : 1.0;
    float wave = sin(f.t * mix(3.6, 7.0, figH(seed + 4.1)) + float(i) * 1.7);
    vec3 ap = p - vec3(side * f.ts.x * 0.85, f.ts.y * mix(0.15, 0.55, row), 0.0);
    ap = figRotZ(ap, side * (0.4 + wave * 0.75));
    vec3 tip = vec3(side * 0.4, 0.08, 0.0);
    if (f.style > 2.5 && f.style < 3.5) tip.y += 0.28;
    d = figMin(d, vec2(figCap(ap, vec3(0.0), tip, armR), 4.0));
    d = figMin(d, vec2(figOcta(ap - tip, 0.075), 4.0));
  }
  if (f.pack > 0.5) d = figMin(d, vec2(figBox(p - vec3(0.0, 0.0, -(f.ts.z + 0.08)), vec3(0.12, 0.12, 0.08)), 1.5));
  if (f.tail > 0.5) {
    vec3 tb = vec3(0.0, -f.ts.y * 0.42, -f.ts.z * 0.4);
    vec3 te = tb + vec3(sin(f.t * 3.7) * 0.24, 0.05, -0.4);
    d = figMin(d, vec2(figCap(p, tb, te, 0.05), 1.5));
  }
  if (f.orb > 0.5) d = figMin(d, vec2(length(p - vec3(0.32, 0.12, 0.16)) - 0.1, 4.0));
  if (f.skirt > 0.5) {
    vec3 sp = p - vec3(0.0, -f.ts.y * 0.58, 0.0);
    float ring = abs(length(sp.xz) - f.ts.x * 1.28) - 0.07;
    d = figMin(d, vec2(max(ring, abs(sp.y) - 0.055), 6.9));
  }
  if (f.collar > 0.5) {
    vec3 cp = p - vec3(0.0, f.ts.y * 0.72, 0.0);
    float ring = abs(length(cp.xz) - f.ts.x * 0.92) - 0.032;
    d = figMin(d, vec2(max(ring, abs(cp.y) - 0.028), 8.0));
  }
  if (f.wings > 0.5 && uQuality >= 0.5) {
    d = figMin(d, vec2(figCap(p, vec3(-f.ts.x * 0.2, f.ts.y * 0.18, -f.ts.z * 0.4), vec3(-f.ts.x * 1.55, f.ts.y * 0.62, 0.06), 0.048), 6.9));
    d = figMin(d, vec2(figCap(p, vec3(f.ts.x * 0.2, f.ts.y * 0.18, -f.ts.z * 0.4), vec3(f.ts.x * 1.55, f.ts.y * 0.62, 0.06), 0.048), 6.9));
    d = figMin(d, vec2(figOcta(p - vec3(-f.ts.x * 1.18, f.ts.y * 0.48, -0.06), 0.12), 6.9));
    d = figMin(d, vec2(figOcta(p - vec3(f.ts.x * 1.18, f.ts.y * 0.48, -0.06), 0.12), 6.9));
  }
  if (f.puff > 0.5) {
    d = figMin(d, vec2(figOcta(p - vec3(-f.ts.x * 0.92, f.ts.y * 0.12, 0.04), f.ts.x * 0.52), 6.9));
    d = figMin(d, vec2(figOcta(p - vec3(f.ts.x * 0.88, f.ts.y * 0.08, 0.02), f.ts.x * 0.46), 6.9));
    d = figMin(d, vec2(figOcta(p - vec3(0.0, -f.ts.y * 0.28, 0.04), f.ts.x * 0.58), 1.5));
  }
  float sMin = min(f.sx, f.sz);
  d.x *= sMin;
  return d;
}
vec2 figureMap(vec3 p, float seed, float t) {
  return figureHit(p, figRoll(seed, t), seed);
}
vec3 figNormal(vec3 p, Fig f, float seed) {
  float e = 0.02;
  float d0 = figureHit(p, f, seed).x;
  return normalize(vec3(
    figureHit(p + vec3(e, 0.0, 0.0), f, seed).x - d0,
    figureHit(p + vec3(0.0, e, 0.0), f, seed).x - d0,
    figureHit(p + vec3(0.0, 0.0, e), f, seed).x - d0
  ));
}
vec3 figPal(float seed, float matId) {
  float hue = fract(figH(seed + matId * 1.71) * 0.92 + figH(seed) * 0.22);
  float sat = mix(0.42, 0.82, figH(seed + matId + 8.2));
  float val = mix(0.78, 0.98, figH(seed + matId + 9.1));
  float vibe = figH(seed + 0.11);
  if (u_coat < 0.5) {
    if (vibe > 0.8) hue = mix(0.86, 0.98, figH(seed + matId));
    else if (vibe > 0.62) hue = mix(0.07, 0.16, figH(seed + matId));
    else if (vibe > 0.44) hue = mix(0.52, 0.74, figH(seed + matId));
  }
  if (figH(seed + 0.03) > 0.55) hue = fract(hue + 0.12);
  if (figH(seed + 0.04) > 0.78) {
    sat = mix(0.7, 0.92, figH(seed + 0.05));
    val = mix(0.86, 1.0, figH(seed + 0.05));
  }
  if (figH(seed + 0.07) > 0.9) {
    sat = mix(0.08, 0.28, figH(seed + matId));
    val = mix(0.7, 0.98, figH(seed + matId + 1.0));
  }
  if (u_coat > 0.5 && u_coat < 1.5) {
    hue = mix(0.06, 0.13, figH(seed + matId));
    sat = mix(0.18, 0.42, figH(seed + matId + 2.0));
    val = mix(0.82, 0.98, figH(seed + matId + 3.0));
  } else if (u_coat > 1.5 && u_coat < 2.5) {
    hue = mix(0.22, 0.38, figH(seed + matId));
    sat = mix(0.28, 0.55, figH(seed + matId + 2.0));
    val = mix(0.55, 0.82, figH(seed + matId + 3.0));
  } else if (u_coat > 2.5 && u_coat < 3.5) {
    hue = mix(0.06, 0.11, figH(seed + matId));
    sat = mix(0.45, 0.72, figH(seed + matId + 2.0));
    val = mix(0.72, 0.95, figH(seed + matId + 3.0));
  } else if (u_coat > 3.5 && u_coat < 4.5) {
    hue = mix(0.55, 0.72, figH(seed + matId));
    sat = mix(0.22, 0.48, figH(seed + matId + 2.0));
    val = mix(0.35, 0.7, figH(seed + matId + 3.0));
  } else if (u_coat > 4.5 && u_coat < 5.5) {
    sat = mix(0.82, 1.0, figH(seed + matId + 8.2));
    val = mix(0.9, 1.0, figH(seed + matId + 9.1));
  } else if (u_coat > 5.5 && u_coat < 6.5) {
    hue = mix(0.88, 0.98, figH(seed + matId));
    sat = mix(0.82, 1.0, figH(seed + matId + 2.0));
    val = mix(0.9, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 6.5 && u_coat < 7.5) {
    hue = mix(0.72, 0.86, figH(seed + matId));
    sat = mix(0.7, 1.0, figH(seed + matId + 2.0));
    val = mix(0.62, 0.95, figH(seed + matId + 3.0));
  } else if (u_coat > 7.5 && u_coat < 8.5) {
    hue = mix(0.48, 0.58, figH(seed + matId));
    sat = mix(0.28, 0.58, figH(seed + matId + 2.0));
    val = mix(0.92, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 8.5 && u_coat < 9.5) {
    hue = mix(0.02, 0.09, figH(seed + matId));
    sat = mix(0.88, 1.0, figH(seed + matId + 2.0));
    val = mix(0.84, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 9.5 && u_coat < 10.5) {
    hue = mix(0.28, 0.42, figH(seed + matId));
    sat = mix(0.9, 1.0, figH(seed + matId + 2.0));
    val = mix(0.84, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 10.5 && u_coat < 11.5) {
    hue = mix(0.08, 0.16, figH(seed + matId));
    sat = mix(0.72, 1.0, figH(seed + matId + 2.0));
    val = mix(0.9, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 11.5 && u_coat < 12.5) {
    hue = mix(0.78, 0.92, figH(seed + matId));
    sat = mix(0.0, 0.18, figH(seed + matId + 2.0));
    val = mix(0.1, 0.22, figH(seed + matId + 3.0));
    if (matId > 1.5 && matId < 2.5) {
      hue = mix(0.88, 0.98, figH(seed + 12.4));
      sat = 1.0;
      val = 1.0;
    }
  } else if (u_coat > 12.5 && u_coat < 13.5) {
    hue = mix(0.48, 0.56, figH(seed + matId));
    sat = mix(0.85, 1.0, figH(seed + matId + 2.0));
    val = mix(0.9, 1.0, figH(seed + matId + 3.0));
    if (matId > 1.5 && matId < 2.5) hue = mix(0.06, 0.12, figH(seed + matId));
  } else if (u_coat > 13.5 && u_coat < 14.5) {
    hue = mix(0.12, 0.18, figH(seed + matId));
    sat = mix(0.88, 1.0, figH(seed + matId + 2.0));
    val = mix(0.92, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 14.5 && u_coat < 15.5) {
    hue = mix(0.9, 0.98, figH(seed + matId));
    sat = mix(0.82, 1.0, figH(seed + matId + 2.0));
    val = mix(0.86, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 15.5 && u_coat < 16.5) {
    hue = mix(0.38, 0.48, figH(seed + matId));
    sat = mix(0.55, 0.88, figH(seed + matId + 2.0));
    val = mix(0.9, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 16.5) {
    hue = mix(0.58, 0.68, figH(seed + matId));
    sat = mix(0.78, 1.0, figH(seed + matId + 2.0));
    val = mix(0.72, 0.98, figH(seed + matId + 3.0));
  }
  if (matId > 1.5 && matId < 2.5) hue = fract(hue + 0.28);
  if (matId > 4.9 && matId < 5.4) {
    hue = fract(hue + 0.08);
    sat = mix(0.2, 0.7, figH(seed + 11.2));
    val = mix(0.92, 1.0, figH(seed + 11.3));
  }
  if (matId > 5.4 && matId < 5.9) {
    sat = mix(0.0, 0.45, figH(seed + 11.4));
    val = mix(0.04, 0.16, figH(seed + 11.5));
  }
  if (matId > 6.4 && matId < 6.8) {
    sat = mix(0.25, 0.7, figH(seed + 11.6));
    val = mix(0.35, 0.62, figH(seed + 11.7));
  }
  if (matId > 6.8 && matId < 7.3) {
    hue = fract(hue + 0.18);
    sat = mix(0.7, 1.0, figH(seed + 11.8));
    val = mix(0.7, 1.0, figH(seed + 11.9));
  }
  if (matId > 7.8) {
    sat = mix(0.0, 0.22, figH(seed + 12.1));
    val = mix(0.88, 1.0, figH(seed + 12.2));
  }
  return hsv2rgb(vec3(hue, sat, val));
}
vec3 figCrowdOff(int i, float n, float seed) {
  vec3 slot = vec3(0.0);
  if (n < 1.5) slot = vec3(0.0);
  else if (n < 2.5) slot = float(i) < 0.5 ? vec3(-1.32, 0.05, -0.16) : vec3(1.32, -0.03, 0.28);
  else if (n < 3.5) {
    if (i == 0) slot = vec3(-1.22, -0.18, 0.24);
    else if (i == 1) slot = vec3(1.22, -0.14, -0.2);
    else slot = vec3(0.0, 0.55, 0.36);
  } else {
    if (i == 0) slot = vec3(-1.32, 0.42, 0.28);
    else if (i == 1) slot = vec3(1.32, 0.36, -0.24);
    else if (i == 2) slot = vec3(-1.18, -0.46, -0.32);
    else slot = vec3(1.18, -0.4, 0.38);
  }
  vec3 jit = vec3(
    figH(seed + float(i) * 4.7 + 2.2) - 0.5,
    figH(seed + float(i) * 4.7 + 3.1) - 0.5,
    figH(seed + float(i) * 4.7 + 4.4) - 0.5
  );
  return slot + jit * vec3(0.14, 0.1, 0.16);
}
vec3 figPlace(int i, float n, float seed, float scatter) {
  vec3 crowd = figCrowdOff(i, n, seed);
  vec3 cell = crowd + vec3(
    (figH(seed + float(i) * 11.7 + 1.1) * 2.0 - 1.0) * 0.42,
    (figH(seed + float(i) * 11.7 + 2.4) * 2.0 - 1.0) * 0.28,
    (figH(seed + float(i) * 11.7 + 3.9) * 2.0 - 1.0) * 0.42
  );
  if (n < 1.5) {
    cell = vec3(
      (figH(seed + 11.7) * 2.0 - 1.0) * 1.4,
      (figH(seed + 12.4) * 2.0 - 1.0) * 0.62,
      mix(-1.35, 0.9, figH(seed + 13.9))
    );
  }
  return mix(crowd, cell, clamp(scatter, 0.0, 1.0));
}
vec3 figTravel(float sid, float time, float move) {
  vec3 o = vec3(0.0);
  if (move < 0.5) return o;
  if (move < 1.5) {
    float dir = figH(sid + 0.23) > 0.5 ? 1.0 : -1.0;
    float spd = mix(0.07, 0.2, figH(sid + 0.27));
    float axis = figH(sid + 0.19);
    vec2 vel = vec2(dir * spd, (figH(sid + 0.33) - 0.5) * spd * 0.38);
    if (axis >= 0.38 && axis < 0.68) vel = vec2((figH(sid + 0.34) - 0.5) * spd * 0.42, dir * spd * 0.8);
    if (axis >= 0.68) vel = vec2(dir * spd * 0.78, (figH(sid + 0.35) > 0.5 ? 1.0 : -1.0) * spd * 0.52);
    vec2 start = vec2(figH(sid + 0.13), mix(0.16, 0.84, figH(sid + 0.14)));
    vec2 pos = fract(start + vel * time);
    return vec3((pos.x * 2.0 - 1.0) * 2.62, (pos.y * 2.0 - 1.0) * 1.48, mix(-0.35, 0.35, figH(sid + 0.16)));
  }
  if (move < 2.5) {
    float t = time * mix(0.11, 0.26, figH(sid + 0.41));
    o.x = sin(t + sid) * 1.82 + sin(t * 0.37 + sid * 2.1) * 0.52;
    o.y = sin(t * 0.73 + sid * 1.4) * 0.68 + 0.05;
    o.z = sin(t * 0.44 + sid) * 0.38;
    return o;
  }
  float w = mix(0.12, 0.28, figH(sid + 0.51));
  float a = time * w + figH(sid + 0.52) * 6.2831853;
  float rx = mix(1.05, 2.28, figH(sid + 0.53));
  float ry = mix(0.32, 0.82, figH(sid + 0.54));
  return vec3(cos(a) * rx, sin(a) * ry, sin(a * 0.65) * 0.32);
}
vec3 figCarry(vec3 home, float sid, float time, float move) {
  vec3 travel = figTravel(sid, time, move);
  if (move > 0.5 && move < 1.5) return travel;
  return home + travel;
}
Fig figSoften(Fig f, float move) {
  if (move > 1.5 && move < 2.5) {
    f.kickAmt *= 0.42;
    f.peck *= 0.22;
    f.spin *= 0.12;
    f.sway *= 0.78;
  }
  return f;
}
vec3 figFacet(vec3 n) {
  n = normalize(n + 1e-5);
  return normalize(floor(n * 3.2 + 0.5) / 3.2);
}
vec4 figureShade(vec3 p, vec3 rd, Fig f, float seed, float matId) {
  vec3 n = figFacet(figNormal(p, f, seed));
  vec3 l = normalize(vec3(0.35, 0.95, 0.55));
  float ndv = max(0.0, dot(n, -rd));
  float dif = 0.82 + 0.18 * max(0.0, dot(n, l));
  dif = floor(dif * 5.0 + 0.12) / 5.0;
  float rim = pow(1.0 - ndv, 2.4) * 0.32;
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 14.0) * 0.1;
  vec3 albedo = figPal(seed, matId);
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
  if (u_coat > 4.5 && u_coat < 8.5) col += vec3(0.08, 0.14, 0.2) * pow(1.0 - ndv, 1.6);
  if (u_coat > 8.5 && u_coat < 9.5) col += vec3(0.22, 0.08, 0.02) * pow(spec * 6.0, 1.4);
  if (u_coat > 9.5 && u_coat < 10.5) col += vec3(0.08, 0.22, 0.06) * pow(1.0 - ndv, 1.4);
  if (u_coat > 10.5 && u_coat < 11.5) col += vec3(0.28, 0.22, 0.08) * (spec * 8.0 + rim);
  if (u_coat > 12.5 && u_coat < 13.5) col += vec3(0.06, 0.16, 0.2) * pow(1.0 - ndv, 1.5);
  if (u_coat > 16.5) col += vec3(0.08, 0.12, 0.28) * pow(1.0 - ndv, 1.5);
  float ink = 1.0 - smoothstep(0.1, 0.38, ndv);
  col = mix(col, vec3(0.03, 0.015, 0.05), ink * 0.92);
  return vec4(col, 1.0);
}
bool figRaySphere(vec3 ro, vec3 rd, vec3 c, float r, out float tEnter) {
  vec3 oc = ro - c;
  float b = dot(oc, rd);
  float h = b * b - dot(oc, oc) + r * r;
  tEnter = 0.0;
  if (h < 0.0) return false;
  tEnter = max(0.0, -b - sqrt(h));
  return tEnter < 8.0;
}
vec4 figureRender(vec2 uv, float seed, float time, float sizeMul, float count, float scatter, float echo, float move) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = clamp(count, 1.0, 4.0);
  float spread = max(step(1.5, n), scatter);
  float figSc = min(max(sizeMul, 0.08) / 0.25, 1.0);
  if (move < 0.5 && dot(q, q) > mix(0.7, 2.2, spread) * mix(0.42, 1.0, figSc) && uv.y > 0.1) return miss;
  float camZ = mix(4.55, 1.72, clamp((max(sizeMul, 0.25) - 0.25) / 2.25, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.22 - 0.11;
  vec3 ro = figRotY(vec3(0.0, 0.42, camZ), camA);
  vec3 ta = vec3(0.0, 0.32, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  int k = int(n + 0.5);
  float stepF = mix(10.0, 14.0, min(uQuality, 1.0));
  if (uQuality > 1.5) stepF = 16.0;
  if (n > 1.5) stepF -= 2.0;
  if (n > 2.5) stepF -= 2.0;
  int steps = int(max(stepF, 8.0));
  float bestT = 9.0;
  float bestH = 1e5;
  float bestM = 0.0;
  float bestSeed = seed;
  vec3 bestOff = vec3(0.0);
  Fig bestF = figRoll(seed, time);
  float trailSid = seed;
  vec3 trailOff = vec3(0.0);
  float trailEnter = 0.0;
  bool trail = false;
  for (int i = 0; i < 4; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 17.31 + 0.07;
    vec3 off = figCarry(figPlace(i, n, seed, scatter), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 1.88 * figSc, tEnter)) continue;
    Fig f = figSoften(figRoll(sid, time), move);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = (ro - off + rd * tRay) / figSc;
      hit = figureHit(p, f, sid);
      hit.x *= figSc;
      if (hit.x < minD) {
        minD = hit.x;
        minT = tRay;
        minM = hit.y;
      }
      if (hit.x < 0.003 || tRay > 8.0) break;
      tRay += max(hit.x * 0.82, 0.012);
    }
    if (minD < 0.05 && minT < bestT) {
      bestT = minT;
      bestH = minD;
      bestM = minM;
      bestSeed = sid;
      bestOff = off;
      bestF = f;
    } else if (!trail) {
      trail = true;
      trailSid = sid;
      trailOff = off;
      trailEnter = tEnter;
    }
  }
  if (bestH <= 0.05 && bestT <= 8.0) {
    vec3 p = (ro - bestOff + rd * bestT) / figSc;
    return figureShade(p, rd, bestF, bestSeed, bestM);
  }
  if (echo < 0.03 || !trail) return miss;
  Fig gf = figRoll(trailSid, time - mix(0.1, 0.2, echo));
  float tRay = trailEnter;
  float minD = 1e5;
  float minM = 0.0;
  for (int s = 0; s < 6; s++) {
    vec2 hit = figureHit((ro - trailOff + rd * tRay) / figSc, gf, trailSid);
    hit.x *= figSc;
    if (hit.x < minD) {
      minD = hit.x;
      minM = hit.y;
    }
    if (hit.x < 0.004 || tRay > 8.0) break;
    tRay += max(hit.x * 0.85, 0.02);
  }
  if (minD > 0.06) return miss;
  vec3 albedo = figPal(trailSid, minM);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.16);
  hsv.z = min(1.0, hsv.z * 1.06);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.78, 0.22, 0.82));
}
`,df=`
Fig figWildMini(float seed, float time, Fig lead) {
  Fig f = figRoll(seed, time);
  f.t = lead.t;
  f.style = lead.style;
  f.sway = lead.sway;
  f.bob = lead.bob;
  f.spin = lead.spin;
  f.lean = lead.lean;
  f.slide = lead.slide;
  f.peck = lead.peck;
  f.kickHz = lead.kickHz;
  f.kickAmt = lead.kickAmt;
  f.facing = lead.facing;
  return f;
}
vec3 figMiniPlace(int i, float n, float seed, float aspect) {
  float cols = max(ceil(sqrt(n * max(aspect, 1.15))), 3.0);
  float rows = max(ceil(n / cols), 3.0);
  float fi = float(i);
  float col = mod(fi, cols);
  float row = floor(fi / cols);
  float inRow = cols;
  if (row >= rows - 0.5) inRow = max(n - row * cols, 1.0);
  float u = (col + 0.5) / inRow * 2.0 - 1.0;
  float v = (row + 0.5) / rows * 2.0 - 1.0;
  if (mod(row, 2.0) > 0.5) u += 0.38 / cols;
  u += mix(-0.03, 0.03, figH(seed + fi * 3.7 + 0.4));
  v += mix(-0.028, 0.028, figH(seed + fi * 2.1 + 1.2));
  u = clamp(u, -0.97, 0.97);
  v = clamp(v, -0.95, 0.95);
  float z = mix(-0.18, 0.18, figH(seed + fi * 4.4 + 2.8));
  return vec3(u * 2.52, v * 1.48 + 0.04, z);
}
vec4 figureRenderMini(vec2 uv, float seed, float time, float sizeMul, float count, float echo, float move) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = mix(14.0, 24.0, clamp((count - 1.0) / 3.0, 0.0, 1.0));
  n = floor(n + 0.5);
  float figScale = mix(0.1, 0.34, clamp((sizeMul - 0.12) / 2.38, 0.0, 1.0));
  float camZ = 4.05;
  float camA = figH(seed + 0.5) * 0.08 - 0.04;
  vec3 ro = figRotY(vec3(0.0, 0.42, camZ), camA);
  vec3 ta = vec3(0.0, 0.32, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  int k = int(n + 0.5);
  float stepF = mix(11.0, 14.0, min(uQuality, 1.0));
  if (uQuality > 1.5) stepF = 16.0;
  int steps = int(max(stepF, 10.0));
  float bestT = 9.0;
  float bestH = 1e5;
  float bestM = 0.0;
  float bestSeed = seed;
  vec3 bestOff = vec3(0.0);
  float bestSc = figScale;
  Fig lead = figSoften(figRoll(seed, time), move);
  Fig bestF = figWildMini(seed, time, lead);
  float trailSid = seed;
  vec3 trailOff = vec3(0.0);
  float trailEnter = 0.0;
  float trailSc = figScale;
  bool trail = false;
  for (int i = 0; i < 24; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 91.73 + 13.1 + figH(seed * 0.11 + float(i) + 2.3) * 47.0;
    float sc = figScale * mix(0.92, 1.1, figH(sid + 0.61));
    vec3 off = figCarry(figMiniPlace(i, n, seed, aspect), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 2.45 * sc, tEnter)) continue;
    Fig f = figWildMini(sid, time, lead);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = (ro - off + rd * tRay) / sc;
      hit = figureHit(p, f, sid);
      hit.x *= sc;
      if (hit.x < minD) {
        minD = hit.x;
        minT = tRay;
        minM = hit.y;
      }
      if (hit.x < 0.0025 || tRay > 8.0) break;
      tRay += max(hit.x * 0.82, 0.01);
    }
    if (minD < 0.045 && minT < bestT) {
      bestT = minT;
      bestH = minD;
      bestM = minM;
      bestSeed = sid;
      bestOff = off;
      bestF = f;
      bestSc = sc;
    } else if (!trail) {
      trail = true;
      trailSid = sid;
      trailOff = off;
      trailEnter = tEnter;
      trailSc = sc;
    }
  }
  if (bestH <= 0.045 && bestT <= 8.0) {
    vec3 p = (ro - bestOff + rd * bestT) / bestSc;
    return figureShade(p, rd, bestF, bestSeed, bestM);
  }
  if (echo < 0.03 || !trail) return miss;
  Fig leadGhost = figRoll(seed, time - mix(0.1, 0.2, echo));
  Fig gf = figWildMini(trailSid, time - mix(0.1, 0.2, echo), leadGhost);
  float tRay = trailEnter;
  float minD = 1e5;
  float minM = 0.0;
  for (int s = 0; s < 5; s++) {
    vec2 hit = figureHit((ro - trailOff + rd * tRay) / trailSc, gf, trailSid);
    hit.x *= trailSc;
    if (hit.x < minD) {
      minD = hit.x;
      minM = hit.y;
    }
    if (hit.x < 0.003 || tRay > 8.0) break;
    tRay += max(hit.x * 0.85, 0.015);
  }
  if (minD > 0.05) return miss;
  vec3 albedo = figPal(trailSid, minM);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.16);
  hsv.z = min(1.0, hsv.z * 1.06);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.78, 0.22, 0.82));
}
`,hf=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,mf=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Io=`
uniform float u_count;
uniform float u_size;
uniform float u_crowd;
uniform float u_place;
uniform float u_move;
uniform float u_grow;
uniform float u_coat;
uniform float u_echo;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
`,sn={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Io}${Ao}`,applyGlsl:hf};function pf(t){return t?{...sn,extraUniforms:`${Io}${Ao}${df}`,applyGlsl:mf}:sn}const gf=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Mo}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},sn],rn=[...sf,...rf,...lf,...cf,...uf,...ff,...gf],vf=new Map(rn.map(t=>[t.id,t]));function bf(){return rn}function at(t){return vf.get(t)}function yf(){const t={};for(const e of rn)(t[e.category]??=[]).push(e);return t}const wf=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"texture",label:"Texture"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function ln(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(n=>({...n,params:{...n.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Fe("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function kf(t,e){const i=e.data,a=t.sources.map(o=>o.id),n=i.layers.map((o,s)=>({...o,id:o.id,sourceId:o.sourceId&&a.includes(o.sourceId)?o.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:n,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function Tf(t,e){if(t.length===0)return null;const i=xe(e);return t[Math.floor(i()*t.length)]}function _f(t){return{...t,id:Fe("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Bo=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function xf(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(f=>{const d=parseInt(f.slice(1),16),m=d>>16&255,u=d>>8&255,p=d&255,h=g=>R(Math.round(Ue(g,t()*255,a)),0,255);return`#${[h(m),h(u),h(p)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const n=e.min??0,o=e.max??1,s=typeof i=="number"?i:Number(e.default),r=n+t()*(o-n),l=Ue(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function cn(t,e,i,a){const n=at(t.typeId);if(!n)return t;const o=xe(e),s={...t.params};for(const r of n.params)a&&r.id!==a||(s[r.id]=xf(o,r,s[r.id]??r.default,R(i,0,1)));return{...t,params:s}}function Cf(t,e,i,a=!1,n){const o=t.effects.map((s,r)=>a&&n&&s.id!==n?s:cn(s,e+r*997,i));return{...t,effects:o}}function un(t,e,i){const a=at(t),n={};if(a)for(const o of a.params)n[o.id]=o.default;return cn({id:Fe("fx"),typeId:t,enabled:!0,params:n},e,i)}function fn(t,e,i,a){const n={...t.params};if(t.typeId==="grade"&&(e==="lush"?(n.saturation=.18+a()*.42,n.brightness=-.04+a()*.16,n.contrast=.06+a()*.22,n.gamma=.82+a()*.35,n.hue=(a()-.5)*.18,n.exposure=-.15+a()*.4):e==="outsider"?(n.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,n.contrast=.2+a()*.55,n.gamma=.55+a()*1.1,n.hue=(a()-.5)*.7):(n.saturation=.05+a()*.5,n.contrast=.1+a()*.35,n.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(n.shadow=i.shadow,n.highlight=i.highlight,n.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(n.leakColor=i.leak,n.leak=e==="lush"?.18+a()*.35:a()*.22,n.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(n.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,n.halation=e==="lush"?.22+a()*.4:a()*.25,n.size=1.4+a()*2.2),t.typeId==="warp"&&(n.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(n.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(n.mixScan=e==="lush"?a()*.2:.25+a()*.5,n.noise=e==="lush"?a()*.1:.12+a()*.35),(t.typeId==="halftone"||t.typeId==="riso"||t.typeId==="hatch"||t.typeId==="holo"||t.typeId==="crackle"||t.typeId==="nap")&&(n.amount=e==="lush"?.38+a()*.32:.5+a()*.38),t.typeId==="posterize"&&(n.levels=3+Math.floor(a()*6),n.dither=.08+a()*.35),t.typeId==="threshold"&&(n.mix=.35+a()*.45,n.soft=.04+a()*.18),t.typeId==="critters"){n.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),n.size=.85+a()*.7,n.amount=.7+a()*.3,n.speed=.7+a()*1.3,n.seed=1+Math.floor(a()*9998);const o=a();e==="lush"?n.kit=o>.72?"votives":o>.48?"charms":o>.22?"shapes":"toy pop":e==="mix"?n.kit=o>.62?"moths":o>.4?"toy pop":o>.2?"mix":"shapes":n.kit=o>.55?"toy pop":o>.28?"mix":"shapes"}if(t.typeId==="dancer"){n.size=.12+a()*.05,n.count=1,n.crowd="normal",n.place="center";const o=a();e==="lush"?n.move=o>.38?"float":o>.18?"drift":"dance":e==="mix"?n.move=o>.52?"float":o>.3?"drift":o>.16?"orbit":"dance":n.move=o>.78?"drift":"dance",n.echo=.35+a()*.5,n.amount=1,n.speed=n.move==="dance"?.55+a()*1.5:.32+a()*.7,n.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?n.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?n.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":n.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?n.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?n.coat=r>.5?"sodium":r>.26?"cream":"wild":n.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(n.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),n.zoom=.7+a()*.8),t.typeId==="channels"&&(n.tint=i.leak,n.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(n.lo=.1+a()*.22,n.hi=.5+a()*.35,n.amount=.45+a()*.4,n.invert=a()>.72),t.typeId==="dropout"&&(n.amount=.28+a()*.4,n.rate=.18+a()*.4,n.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:n}}function Sf(t,e="mix"){const i=xe(t>>>0);return fn(un("critters",t,.85),e,Ft[t%Ft.length],i)}function Ef(t,e="mix"){const i=xe(t>>>0);return fn(un("dancer",t,.85),e,Ft[t%Ft.length],i)}function Pf(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Ef(t.seed+i*4243,"mix")]})}}function Fo(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,Sf(t.seed+i*7919,"mix")]})}}function Mf(){return Bo.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Af(){return bf().map(t=>t.id).filter(t=>t!=="dancer")}function If(t,e){const i=xe(t>>>0),a=Af(),n=e?3:2,o=e?5:4,s=Math.min(a.length,n+Math.floor(i()*(o-n+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Bf(t,e,i,a=!1,n=!0){const o=xe(e+17>>>0),s=a?o()>.5?"outsider":"mix":o()>.55?"lush":o()>.35?"mix":"outsider",r=Po(o),l=n?If(e,a).map((c,f)=>fn(un(c,e+f*3331,i),s,r,xe(e+f*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function Ro(t,e,i,a,n,o=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=xe(l^2654435769),f=t.layers.map((v,T)=>e==="selected"&&v.id!==i?v:e==="param"?v.id!==i?v:{...v,effects:v.effects.map(_=>_.id===a&&n?cn(_,l+T*13,Math.max(r,.55),n):_)}:e==="all"?Bf(v,l+T*7919,r,o,s):Cf(v,l+T*7919,r,!0,a)),d=uo,m=xe(l+0*7919>>>0),u=Mf(),p=u[Math.floor(m()*u.length)]??Bo[0],g={"herald tour":{generator:"heraldry",a:ui(l),b:fi(l)},"dense paper":{generator:"wallpaper",a:ui(l+3),b:fi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:ui(l+5),b:fi(l+5)},"heart rain":{generator:"shower",a:ui(l+7),b:fi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:ui(l+9),b:fi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[p.name],y=t.sources.map((v,T)=>{if(e!=="all"||v.kind!=="generator")return v;const _=xe(l+T*131),E=Po(_);if(Ae(v.generator)||uo.includes(v.generator)){const F=Bt(l+T*41),k=Ya(l+T*73),U=Bt(l+T*99),X=_()>.74&&U!==F?U:void 0,L=xa(_);return{...v,generator:Ta(k),collageKit:F,collageKitB:X,collageMove:k,collageColorPack:L,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageChainAnimal:k==="chain"&&_()>.55?wa[1+Math.floor(_()*5)]:"off",collageCamera:v.collageCamera??"fixed",collageCameraFeel:v.collageCameraFeel,collageHuntWideMin:v.collageHuntWideMin,collageHuntWideMax:v.collageHuntWideMax,collageHuntFollowMin:v.collageHuntFollowMin,collageHuntFollowMax:v.collageHuntFollowMax,collageHuntSnap:v.collageHuntSnap,collageHuntZoom:v.collageHuntZoom,collageHuntTight:v.collageHuntTight,collageHuntReactMin:v.collageHuntReactMin,collageHuntReactMax:v.collageHuntReactMax,collageHuntPrecision:v.collageHuntPrecision,collageHuntSelect:v.collageHuntSelect,collageHuntFocus:v.collageHuntFocus,collageHuntFocusSpeed:v.collageHuntFocusSpeed,collageHuntFocusError:v.collageHuntFocusError,collageHuntVariation:v.collageHuntVariation,colorA:_a(F,l+T*17,L),colorB:ht(F,L),name:X?`${Jt[k]} · ${F} · ${X}`:`${Jt[k]} · ${F}`}}const P=o?!1:_()>.35,I=g?g.generator:P?v.generator:d[Math.floor(_()*d.length)],A=Bt(l+T*41),H=xa(_),$=Ae(I)?_a(A,l+T*17,H):E.inkA,C=Ae(I)?ht(A,H):E.inkB;return{...v,generator:I,collageKit:Ae(I)?A:v.collageKit,collageColorPack:Ae(I)?H:v.collageColorPack,colorA:g?g.a:$,colorB:g?ht(A,H):C}}),w=e==="all"?o?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:f,sources:y,globalFeedback:w}}function Ff(t){const e=t.seed+7919>>>0,i=xe(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],n=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],o=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Ae(r.generator))return r;const c=Tt[Math.floor(i()*Tt.length)],f=Ya(e+l*59),d=xa(i);return{...r,generator:Ta(f),collageKit:c,collageMove:f,collageColorPack:d,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageChainAnimal:f==="chain"&&i()>.55?wa[1+Math.floor(i()*5)]:"off",collageCamera:r.collageCamera??"fixed",collageCameraFeel:r.collageCameraFeel,collageHuntSelect:r.collageHuntSelect,collageHuntFocus:r.collageHuntFocus,collageHuntVariation:r.collageHuntVariation,colorA:_a(c,e+l*13,d),colorB:ht(c,d),name:`${Jt[f]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:n[Math.floor(i()*n.length)],coat:o[Math.floor(i()*o.length)]}}:l)}))};return s=Fo(s),s}function Rf(){return{x:0,y:0,scale:1,rotation:0}}function zf(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function zo(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Of(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Hf(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!0}}const Lf={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Ca={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},Nf={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Oo(t,e,i,a){const n=t==="chain"?oi(a):"off",o=n!=="off"?`CHAIN · ${po[n].toUpperCase()}`:Jt[t];return i&&i!==e?`${o} · ${Ca[e]} · ${Ca[i]}`:`${o} · ${Ca[e]}`}function jt(t="plasma",e,i,a){const n=Ae(t)?It(e):void 0,o=Lf[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;n&&(s=i==="mix"||i==="tour"?Ya(Date.now()+Math.floor(Math.random()*997)):i?ho(i):vo(t));const r=s?Ta(s):t??"plasma",l=s?Jt[s]:Nf[t??""]??(t?t.toUpperCase():"SIGNAL"),c=n&&a?.kitB?It(a.kitB):void 0,f=c&&n&&c!==n?c:void 0,d=n&&s?Oo(s,n,f,a?.chainAnimal):n?`${l} · ${Ca[n]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,m=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,u=n?hi(a?.colorPack):void 0;return{id:Fe("src"),name:d,kind:"generator",generator:r,colorA:m??(n?_a(n,s==="rush"?1:s==="tunnel"?5:s==="bounce"?7:11,u):o.a),colorB:n?ht(n,u):o.b,collageColorPack:u,collageKit:n,collageKitB:f,collageMove:s,collageNight:n?!!a?.night:void 0,collageScale:n?li(a?.scale):void 0,collageDensity:n?ci(a?.density):void 0,collagePace:n?ei(a?.pace):void 0,collageChainTravel:n?ti(a?.chainTravel):void 0,collageChainMorph:n?ii(a?.chainMorph):void 0,collageChainVary:n?ai(a?.chainVary):void 0,collageChainSmooth:n?ni(a?.chainSmooth):void 0,collageChainAnimal:n?oi(a?.chainAnimal):void 0,collageSpringStrength:n?Li(a?.springStrength):void 0,collageSpringDamp:n?Ni(a?.springDamp):void 0,collageSpringDist:n?Ui(a?.springDist):void 0,collageSpringElast:n?qi(a?.springElast):void 0,collageSpringBreak:n?Di(a?.springBreak):void 0,collageFlowScale:n?$i(a?.flowScale):void 0,collageFlowTurb:n?Wi(a?.flowTurb):void 0,collageFlowEvolve:n?ji(a?.flowEvolve):void 0,collageFlowForce:n?Vi(a?.flowForce):void 0,collageFlowDepth:n?Gi(a?.flowDepth):void 0,collageBoidCohere:n?Ki(a?.boidCohere):void 0,collageBoidSep:n?Xi(a?.boidSep):void 0,collageBoidAlign:n?Zi(a?.boidAlign):void 0,collageBoidRadius:n?Qi(a?.boidRadius):void 0,collageBoidSpeed:n?Yi(a?.boidSpeed):void 0,collagePoleCount:n?Ji(a?.poleCount):void 0,collagePoleAttract:n?ea(a?.poleAttract):void 0,collagePoleRepel:n?ta(a?.poleRepel):void 0,collagePoleSpeed:n?ia(a?.poleSpeed):void 0,collagePoleFalloff:n?aa(a?.poleFalloff):void 0,collagePoleSwitch:n?na(a?.poleSwitch):void 0,collageCamera:n?Yt(a?.camera):void 0,collageCameraFeel:n?oa(a?.cameraFeel):void 0,collageHuntWideMin:n?ra(a?.huntWideMin):void 0,collageHuntWideMax:n?la(a?.huntWideMax):void 0,collageHuntFollowMin:n?ca(a?.huntFollowMin):void 0,collageHuntFollowMax:n?ua(a?.huntFollowMax):void 0,collageHuntSnap:n?fa(a?.huntSnap):void 0,collageHuntZoom:n?da(a?.huntZoom):void 0,collageHuntTight:n?ha(a?.huntTight):void 0,collageHuntReactMin:n?ma(a?.huntReactMin):void 0,collageHuntReactMax:n?pa(a?.huntReactMax):void 0,collageHuntPrecision:n?ga(a?.huntPrecision):void 0,collageHuntSelect:n?sa(a?.huntSelect):void 0,collageHuntFocus:n?!!a?.huntFocus:void 0,collageHuntFocusSpeed:n?va(a?.huntFocusSpeed):void 0,collageHuntFocusError:n?ba(a?.huntFocusError):void 0,collageHuntVariation:n?ya(a?.huntVariation):void 0,width:1280,height:720,duration:0}}function Ho(t){const e=at(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Fe("fx"),typeId:t,enabled:!0,params:i}}function Lo(t,e,i=[]){return{id:Fe("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Rf(),effects:i.map(Ho),mask:zf(),feedback:zo()}}function No(){const t=jt("wallpaper","sailor","rush"),e=Lo("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Of(),globalFeedback:{...zo(),amount:0,opacity:.4,scale:1},exportSettings:Hf(),presets:[]},a=Ro({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[ln(i,"factory · tour"),ln(a,"factory · scramble")],i}function Uo(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1}}class Uf{state;listeners=new Set;constructor(e=No()){this.state={project:e,ui:Uo(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...Uo(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const M=new Uf;function dn(t,e,i,a,n){if(e<=0)return 0;const o=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(o*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=o;if(i==="reverse"&&(s=-o),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return n?(s%e+e)%e:R(s,0,e)}function qf(t,e,i,a,n){return t.filter(o=>o.layerId===e&&o.target===i&&o.paramId===a&&(i!=="effect"||o.effectId===n)).sort((o,s)=>o.time-s.time)}function Df(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let n=0;n<t.length-1;n++){const o=t[n],s=t[n+1];if(e>=o.time&&e<=s.time){const r=s.time-o.time||1;let l=(e-o.time)/r;return(s.easing==="smooth"||o.easing==="smooth")&&(l=Wr(l)),Ue(o.value,s.value,l)}}return i}function _t(t,e,i,a,n,o,s){const r=qf(t.keyframes,e,i,a,s);return Df(r,o,n)}function $f(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(n=>({...n,params:{...n.params}}))};a.opacity=_t(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=_t(t,e.id,"layer","x",e.transform.x,i),a.transform.y=_t(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=_t(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=_t(t,e.id,"layer","rotation",e.transform.rotation,i);for(const n of Object.keys(a.feedback))a.feedback[n]=_t(t,e.id,"feedback",n,e.feedback[n],i);for(const n of a.effects)for(const[o,s]of Object.entries(n.params))typeof s=="number"&&(n.params[o]=_t(t,e.id,"effect",o,s,i,n.id));return a}function Wf(t,e){const i=t.layers[0]?.id??"";return _t(t,i,"playback","speed",t.playback.speed,e)}const jf=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],Vf=["spot","burst","snap","step"],Gf=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],Kf=["drop","halo","bars","wave","poly","ghost","fall"];function Xf(t,e){const i=e.reduce((n,o)=>n+o.weight,0);let a=t()*i;for(const n of e)if(a-=n.weight,a<=0)return n.item;return e[e.length-1].item}function Zf(t){return Xf(t,jf.map(e=>({item:e.beats,weight:e.weight})))}function Qf(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(n=>n!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function Yf(t,e,i){const a=t<=2?Vf:t<=4?Gf:Kf;return Qf(e,a,i)}function qo(t){return 60/Math.max(40,t||120)}function Do(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function Jf(t,e,i,a){const n=Math.max(1,t),o=qo(e),s=(i??[]).filter(c=>c>=0&&c<n+.05);let r=Number.isFinite(a)&&a>=0?a:s.length?Do(s[0],o):0;r>=n&&(r=Do(r,o));const l=[];for(let c=r;c<n-o*.02;c+=o)l.push(c);if(!l.length)for(let c=0;c<n;c+=o)l.push(c);return l.length||l.push(0),l[l.length-1]<n-1e-6&&l.push(n),l}function ed(t,e,i,a){const n=qo(e),o=Number.isFinite(i)&&i>0?i:0,s=a&&a>0?a:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<o-1e-6?0:Math.max(0,Math.floor((r-o)/n+1e-4))}function td(t){const e=xe(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=Jf(i,t.bpm??120,t.beats,t.offset),n=[];let o=0,s,r,l=0;for(;o<a.length-1&&a[o]<i;){const c=Zf(e);r=Bt(t.seed+l*41+Math.floor(e()*17)>>>0);const f=l%5===2||e()>.82,d=e()>.72?Bt(t.seed+l*99+7>>>0):void 0,m=d&&d!==r?d:void 0,u=xa(e),p=Wt(r,u);for(const h of c){if(o>=a.length-1||a[o]>=i)break;const g=Math.min(a.length-1,o+h),y=a[o];if(y>=i)break;const w=Yf(g-o,e,s),v=p[Math.floor(e()*p.length)%p.length];n.push({start:y,beats:g-o,startBeat:o,look:{kit:r,kitB:m,move:w,night:f,wash:v,ink:ht(r,u),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=w,o=g}if(l++,l>80)break}if(n.length>=2&&n[n.length-1].beats<2){const c=n.pop();n[n.length-1].beats+=c.beats}if(!n.length){const c=Bt(t.seed);n.push({start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:Wt(c)[0],ink:ht(c),scale:.78,density:.88,pace:.62}})}return n}function id(t,e,i,a,n){if(!t.length){const c=Bt(1);return{start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:Wt(c)[0],ink:ht(c),scale:.78,density:.88,pace:.62}}}const o=t[t.length-1],s=Math.max(i&&i>o.start?i:0,o.start+.5,t.length>1?o.start+(o.start-t[0].start)/Math.max(1,t.length-1):o.start+2);if(a&&a>40){const c=Number.isFinite(n)&&n>=0?n:t[0].start,f=ed(e,a,c,s);let d=t[0];for(const m of t)if(m.startBeat<=f)d=m;else break;return d}const r=(e%s+s)%s;let l=t[0];for(const c of t)if(c.start<=r+5e-4)l=c;else break;return l}function ad(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const nd=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function od(t){return(t.type??"").startsWith("audio/")||nd.test(t.name)}function mi(t){return t.sources.find(e=>e.kind==="audio")}let pi=null,mt=null,gi=null;const hn=new WeakSet;let vi=0,bi=0,Rt=0,$o=0;function Sa(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(pi||(pi=new t,mt=pi.createAnalyser(),mt.fftSize=256,mt.smoothingTimeConstant=.72,mt.connect(pi.destination),gi=new Uint8Array(mt.frequencyBinCount)),pi):null}async function Ea(){const t=Sa();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function sd(t){const e=Sa();if(!(!e||!mt||hn.has(t)))try{e.createMediaElementSource(t).connect(mt),hn.add(t)}catch{hn.add(t)}}async function rd(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",sd(i),Ea();let a=null;const n=Sa();if(n)try{const d=await t.arrayBuffer(),m=n.decodeAudioData(d.slice(0)).catch(()=>null);a=await Promise.race([m,new Promise(u=>setTimeout(()=>u(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(d=>{if(Number.isFinite(i.duration)&&i.duration>0){d(i.duration);return}i.addEventListener("loadedmetadata",()=>d(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>d(a?.duration??0),{once:!0})}),new Promise(d=>setTimeout(()=>d(a?.duration??0),2500))])||a?.duration||0,r=a?ld(a.getChannelData(0),a.sampleRate):[],l=cd(r,s),c=a?ud(a.getChannelData(0),a.sampleRate,l.bpm,l.offset,s):l.offset,f=l.bpm>40?fd(r,l.bpm,c,s):r;return{id:Fe("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:f,bpm:l.bpm,beatOffset:c,objectUrl:e}}function ld(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,n=Math.floor((t.length-a)/i);if(n<16)return[];const o=new Float32Array(n);for(let f=0;f<n;f++){const d=f*i;let m=0;for(let u=0;u<a;u+=2){const p=t[d+u];m+=p*p}o[f]=Math.sqrt(m/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let f=s;f<n;f++){let d=0,m=0;for(let g=f-s;g<f;g++)d+=o[g],o[g]>m&&(m=o[g]);d/=s;const u=o[f]-o[f-1];if(!(o[f]>d*1.32&&o[f]>m*.72&&u>.0035))continue;const h=f*i/e;h-c<r||(l.push(h),c=h)}return l}function cd(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let d=1;d<t.length;d++){const m=t[d]-t[d-1];m>=.18&&m<=1.2&&i.push(m)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((d,m)=>d-t[m]).filter(d=>d>.12&&d<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((d,m)=>d-m);const n=a[Math.floor(a.length/2)];let o=60/Math.max(.18,n);for(;o>155;)o/=2;for(;o<72&&o>0;)o*=2;o=mn(Math.round(o),70,170);let s=o,r=0,l=-1;const c=Math.max(70,o-8),f=Math.min(170,o+8);for(let d=c;d<=f;d++){const m=60/d,u=e>0?e:(t[t.length-1]??0)+m,p=new Set([0,(t[0]%m+m)%m]);for(let h=0;h<Math.min(t.length,16);h++)p.add((t[h]%m+m)%m);for(const h of p){let g=0;for(const y of t){const w=((y-h)%m+m)%m,v=Math.min(w,m-w);v<m*.12&&(g+=1-v/(m*.12))}h>.03&&h<u-m*.5&&(g+=.15),g*=1-Math.abs(d-118)/400,g>l&&(l=g,s=d,r=h)}}return{bpm:s,offset:r}}function ud(t,e,i,a,n){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(a)&&a>=0?a:0;const o=60/i,s=o*4,r=Number.isFinite(a)&&a>=0?a:0,l=Math.max(32,Math.floor(e*.04)),c=[0,0,0,0],f=n>0?n:t.length/e;for(let u=0;u<4;u++){let p=0,h=0;for(let g=r+u*o;g<f-.04&&h<72;g+=s){const y=Math.max(0,Math.min(t.length-l-1,Math.floor(g*e)));let w=0;for(let v=0;v<l;v+=3){const T=t[y+v];w+=T*T}p+=w,h++}c[u]=p/Math.max(1,h)}let d=0;for(let u=1;u<4;u++)(c[u]>c[d]*1.05||c[u]>c[d]*.97&&u%2===0&&d%2===1)&&(d=u);return((r+d*o)%s+s)%s}function fd(t,e,i,a){if(!(e>40))return[...t];const n=60/e,o=Math.max(n,a||(t[t.length-1]??0)+n),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<o-n*.08;l+=n)r.push(l);return r.length?r:[...t]}function Wo(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const n=60/e;if(!(n>0))return 0;const o=t-a;if(o<-.02)return 0;const s=(o%n+n)%n;return Math.exp(-s/i)}function dd(t,e,i=.2){if(!t.length)return 0;let a=0,n=t.length-1;for(;a<n;){const r=a+n+1>>1;t[r]<=e?a=r:n=r-1}const o=t[a];if(o>e)return 0;const s=e-o;return s>i*3.2?0:Math.exp(-s/i)}function mn(t,e,i){return Math.max(e,Math.min(i,t))}function hd(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const n=(a%i+i)%i,o=Math.floor(n*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,o)),l=Math.max(r+1,Math.min(t.length,o+s));let c=0;for(let g=r;g<l;g++)c+=t[g]*t[g];const f=Math.min(1,Math.sqrt(c/(l-r))*3.4),d=Math.max(s,Math.floor(e*.09)),m=Math.min(t.length,o+d);let u=0,p=0;for(let g=r;g<m;g+=8)u+=t[g]*t[g],p++;const h=Math.min(1,Math.sqrt(u/Math.max(1,p))*4.2);return{energy:f,bass:h}}function md(){if(!mt||!gi)return null;mt.getByteFrequencyData(gi);let t=0,e=0;const i=gi.length,a=Math.max(4,Math.floor(i*.12));for(let n=0;n<i;n++){const o=gi[n]/255;t+=o,n<a&&(e+=o)}return{energy:t/i,bass:e/a}}function pd(t,e){let i=0,a=0,n=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=hd(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],f=t.beatOffset??0,d=c.length?dd(c,r,.11):0,m=Wo(r,t.bpm??0,.11,f),u=mn((i-.12)*.75,0,.6);n=Math.max(d,m*.86,c.length?u*.28:u)}else if(t?.kind==="audio"){const s=md();s&&(i=s.energy,a=s.bass,n=Math.max(Wo(e,t.bpm??0,.11,t.beatOffset??0)*.86,mn((i-.12)*.55,0,.5)))}Math.abs(e-$o)>.2||n>=Rt?Rt=n:Rt+=(n-Rt)*.32,$o=e;const o=t?.kind==="audio"?.22:.14;return vi+=(i-vi)*o,bi+=(a-bi)*Math.min(o,.16),!t&&vi<.002&&(vi=0),!t&&bi<.002&&(bi=0),t||(Rt=0),{energy:vi,bass:bi,beat:Rt}}function gd(t,e,i=0,a=0){const n=e.length,o=t.length;if(n<1)return;if(o<1){e.fill(0);return}const s=(Math.round(a)%o+o)%o;for(let l=0;l<n;l++)e[l]=t[(s+l)%o];if(i<=0)return;const r=Math.max(1,Math.round(n*i));for(let l=0;l<r;l++)e[n-r+l]*=1-(l+1)/r}function pn(t){if(!mi(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function vd(t,e,i=!1,a=0){const n=t.sampleRate,o=Math.max(1,Math.round(Math.max(.05,e)*n)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:o,numberOfChannels:s,sampleRate:n}),l=i?.12:0,c=Number.isFinite(a)&&a>0?a:0,f=Math.round(c*n);for(let d=0;d<s;d++)gd(t.getChannelData(d),r.getChannelData(d),l,f);return r}async function bd(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(o=>o.arrayBuffer()),new Promise(o=>setTimeout(()=>o(null),2500))]);if(!i)return null;const a=Sa()??new e,n=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(o=>setTimeout(()=>o(null),4e3))]);if(n&&n.length>32)return t.pcm=n,n}catch{return null}return null}function gn(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const yd=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,wd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uTex;
uniform sampler2D uFeedback;
uniform sampler2D uHistory;
uniform sampler2D uMask;
uniform vec2 uResolution;
uniform float uTime;
uniform float uFrame;
uniform float u_mix;
uniform float uQuality;
uniform float u_audio;
uniform float u_bass;
uniform vec2 uTexel;

uniform int u_maskType;
uniform int u_maskInvert;
uniform float u_maskSoftness;
uniform vec4 u_maskRect;
uniform vec2 u_maskCenter;
uniform float u_maskRadius;
uniform float u_maskGradientAngle;
uniform float u_maskNoiseScale;

uniform vec2 u_translate;
uniform float u_scale;
uniform float u_rotation;

float luminance(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec2 rotate2(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

vec2 toUv(vec2 uv) {
  vec2 p = uv - 0.5;
  p = rotate2(p, u_rotation);
  p /= max(u_scale, 0.001);
  p -= u_translate;
  return p + 0.5;
}

float computeMask(vec2 uv) {
  float m = 1.0;
  if (u_maskType == 1) {
    vec2 d = abs(uv - (u_maskRect.xy + u_maskRect.zw * 0.5)) - u_maskRect.zw * 0.5;
    float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    m = 1.0 - smoothstep(0.0, max(u_maskSoftness, 0.0001), sd);
  } else if (u_maskType == 2) {
    float d = length(uv - u_maskCenter) - u_maskRadius;
    m = 1.0 - smoothstep(0.0, max(u_maskSoftness, 0.0001), d);
  } else if (u_maskType == 3) {
    vec2 dir = vec2(cos(u_maskGradientAngle), sin(u_maskGradientAngle));
    float g = dot(uv - 0.5, dir) + 0.5;
    m = smoothstep(0.0, 1.0, mix(g, 1.0 - g, step(0.5, u_maskSoftness)));
  } else if (u_maskType == 4) {
    m = vnoise(uv * u_maskNoiseScale + uTime * 0.15);
    m = smoothstep(0.3, 0.7 + u_maskSoftness, m);
  } else if (u_maskType == 5) {
    m = texture(uMask, uv).r;
  }
  if (u_maskInvert == 1) m = 1.0 - m;
  return clamp(m, 0.0, 1.0);
}

vec4 sampleSrc(vec2 uv) {
  return texture(uTex, clamp(uv, 0.0, 1.0));
}
`,kd=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Td=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uBase;
uniform sampler2D uLayer;
uniform float uOpacity;
uniform int uBlend;
uniform vec2 uResolution;

vec3 overlay(vec3 b, vec3 s) {
  return mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(0.5, b));
}

void main() {
  vec4 base = texture(uBase, vUv);
  vec4 over = texture(uLayer, vUv);
  float a = over.a * uOpacity;
  vec3 s = over.rgb;
  vec3 b = base.rgb;
  vec3 c = s;
  if (uBlend == 1) c = b + s;
  else if (uBlend == 2) c = 1.0 - (1.0 - b) * (1.0 - s);
  else if (uBlend == 3) c = b * s;
  else if (uBlend == 4) c = overlay(b, s);
  else if (uBlend == 5) c = abs(b - s);
  else if (uBlend == 6) c = b + s - 2.0 * b * s;
  else if (uBlend == 7) c = max(b, s);
  else if (uBlend == 8) c = min(b, s);
  else c = s;
  fragColor = vec4(mix(b, c, a), 1.0);
}
`,_d=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform float uVignette;
void main() {
  vec4 c = texture(uTex, vUv);
  float d = length(vUv - 0.5);
  float vig = 1.0 - smoothstep(0.55, 1.05, d) * uVignette;
  fragColor = vec4(c.rgb * vig, 1.0);
}
`,xd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform sampler2D uFeedback;
uniform float uAmount;
uniform float uOpacity;
uniform float uScale;
uniform float uRotation;
uniform float uDistortion;
uniform float uTime;

vec2 rot(vec2 p, float a) {
  float s = sin(a); float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

void main() {
  vec4 src = texture(uTex, vUv);
  vec2 p = vUv - 0.5;
  p = rot(p, uRotation);
  p /= max(uScale, 0.001);
  p += 0.5;
  p += vec2(
    sin(vUv.y * 18.0 + uTime) * uDistortion * 0.04,
    cos(vUv.x * 14.0 - uTime * 0.7) * uDistortion * 0.04
  );
  vec4 fb = texture(uFeedback, clamp(p, 0.0, 1.0));
  vec3 mixed = mix(src.rgb, fb.rgb, uAmount * uOpacity);
  fragColor = vec4(mixed, 1.0);
}
`,Cd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec3 col = vec3(0.0);
  int mode = uMode;
  if (mode > 5) mode = 0;
  if (mode == 0) {
    float n = sin(uv.x * uScale * 0.55 + uTime * 0.14) + sin(uv.y * uScale * 0.4 - uTime * 0.1);
    n += sin((uv.x * 0.7 + uv.y) * uScale * 0.25 + uTime * 0.06);
    n = n / 3.0 * 0.5 + 0.5;
    col = mix(uColorA, uColorB, smoothstep(0.22, 0.78, n));
    col *= 0.9 + 0.1 * smoothstep(1.05, 0.22, length(uv - 0.5));
  } else if (mode == 1) {
    float n = hash21(floor(uv * uScale * 36.0) + floor(uTime * 1.5));
    col = mix(uColorA, uColorB, mix(0.35, 0.65, n));
  } else if (mode == 2) {
    float x = uv.x;
    if (x < 1.0/7.0) col = vec3(1.0);
    else if (x < 2.0/7.0) col = vec3(1.0, 1.0, 0.0);
    else if (x < 3.0/7.0) col = vec3(0.0, 1.0, 1.0);
    else if (x < 4.0/7.0) col = vec3(0.0, 1.0, 0.0);
    else if (x < 5.0/7.0) col = vec3(1.0, 0.0, 1.0);
    else if (x < 6.0/7.0) col = vec3(1.0, 0.0, 0.0);
    else col = vec3(0.0, 0.0, 1.0);
  } else if (mode == 3) {
    col = mix(uColorA, uColorB, uv.x);
  } else if (mode == 4) {
    col = uColorA;
  } else {
    vec2 c = floor(uv * uScale);
    col = mix(uColorA, uColorB, mod(c.x + c.y, 2.0));
  }
  fragColor = vec4(col, 1.0);
}
`,Sd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
${Mo}
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.07 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return s;
}
float starLayer(vec2 uv, float dens, float size, float t) {
  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);
  float n = hash21(id + uSeed);
  float tw = 0.88 + 0.12 * sin(t * (0.35 + n * 0.9) + n * 18.0);
  vec2 jitter = vec2(hash21(id + 2.1), hash21(id + 7.7)) - 0.5;
  float d = length(gv + jitter * 0.28);
  return smoothstep(size * tw, 0.0, d) * step(1.0 - dens, n) * tw;
}
vec3 genStars(vec2 uv) {
  float sky = smoothstep(0.0, 1.0, uv.y);
  vec3 col = mix(uColorA, mix(uColorA, uColorB, 0.12), sky * 0.65);
  float neb = fbm((uv - 0.5) * vec2(1.5, 1.0) * 1.3 + uTime * 0.006 + uSeed * 0.01);
  col = mix(col, mix(uColorA, uColorB, 0.28) * 0.4, smoothstep(0.48, 0.82, neb) * 0.28);
  float sc = max(uScale, 1.0);
  col += vec3(0.80, 0.84, 0.92) * starLayer(uv * 20.0 * sc + uSeed, 0.1, 0.011, uTime + u_audio * 0.45);
  col += vec3(0.93, 0.91, 0.86) * starLayer(uv * 8.5 * sc - uSeed * 0.2, 0.035, 0.02, uTime * 0.6 + u_bass * 0.3) * 0.55;
  float vig = smoothstep(1.15, 0.2, length((uv - 0.5) * vec2(1.15, 1.0)));
  return col * (0.9 + 0.1 * vig);
}
vec3 genMarsh(vec2 uv) {
  float dusk = pow(clamp(uv.y, 0.0, 1.0), 0.85);
  vec3 sky = mix(mix(uColorB, vec3(0.58, 0.36, 0.16), 0.4), uColorA, dusk);
  float fog = fbm(vec2(uv.x * 1.15 + uTime * (0.012 + u_audio * 0.02), uv.y * 2.2));
  float mist = smoothstep(0.2, 0.72, fog) * (1.0 - uv.y) * 0.5;
  vec3 col = mix(sky, mix(uColorB, vec3(0.5, 0.3, 0.12), 0.35), mist);
  float hz = exp(-pow((uv.y - 0.2) * 6.5, 2.0));
  col += mix(uColorB, vec3(0.85, 0.52, 0.2), 0.35) * hz * 0.18;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 lp = vec2(hash21(vec2(uSeed, fi + 1.3)), 0.16 + hash21(vec2(fi, uSeed + 4.0)) * 0.12);
    float d = length((uv - lp) * vec2(1.5, 2.6));
    col += vec3(0.9, 0.58, 0.2) * exp(-d * 8.0) * (0.22 + u_bass * 0.28);
  }
  float reedX = uv.x * 38.0;
  float reedId = floor(reedX);
  float reedF = fract(reedX) - 0.5;
  float h = 0.1 + 0.22 * hash21(vec2(reedId, uSeed));
  float sway = 0.012 * sin(uTime * 0.7 + reedId);
  float reed = 1.0 - smoothstep(0.01, 0.028, abs(reedF - sway * uv.y));
  reed *= 1.0 - smoothstep(h, h + 0.05, uv.y);
  col = mix(col, uColorA * 0.22, reed * step(uv.y, 0.4) * 0.85);
  float ground = 1.0 - smoothstep(0.0, 0.16, uv.y);
  vec3 water = mix(uColorA * 0.22, col * 0.32, 0.45);
  col = mix(col, water, ground * 0.88);
  return col;
}
vec3 genOil(vec2 uv) {
  vec2 p = uv * max(uScale * 0.5, 1.15);
  p += 0.32 * vec2(fbm(p + uTime * (0.01 + u_audio * 0.015)), fbm(p + vec2(3.1, 1.4) - uTime * (0.008 + u_audio * 0.01)));
  float n = fbm(p * 1.1);
  float vein = smoothstep(0.44, 0.56, n) - smoothstep(0.56, 0.7, n);
  vec3 col = mix(uColorA, uColorB, smoothstep(0.28, 0.72, n));
  col = mix(col, mix(uColorA, uColorB, 0.45) * 0.78, vein * 0.28);
  return col * (0.94 + 0.06 * fbm(uv * 2.8));
}
vec3 genPaper(vec2 uv) {
  vec3 paper = mix(vec3(0.91, 0.87, 0.79), uColorA, 0.1);
  float fiber = fbm(uv * 34.0 * max(uScale, 1.0));
  paper *= 0.95 + 0.07 * fiber;
  float stain = smoothstep(0.74, 0.96, fbm(uv * 1.9 + uSeed * 0.18));
  paper = mix(paper, mix(uColorB, vec3(0.46, 0.33, 0.22), 0.55), stain * 0.14);
  paper -= pow(abs(sin(uv.x * 3.14159 + 0.15)), 14.0) * 0.035;
  float edge = pow(length(uv - 0.5) * 1.04, 2.3) * 0.09;
  return clamp(paper - edge, 0.0, 1.0);
}
vec3 genCave(vec2 uv) {
  vec2 p = uv * vec2(1.7, 1.35) * max(uScale * 0.28, 0.8);
  float rock = fbm(p + uSeed * 0.04);
  float fill = fbm(p * 2.6 + rock);
  vec3 col = mix(uColorA * 0.5, vec3(0.055, 0.05, 0.06), rock);
  col = mix(col, uColorB * 0.07, fill * 0.18);
  float rim = pow(max(uv.x, 1.0 - uv.x), 3.4) * (0.3 + 0.2 * rock);
  col += uColorB * rim * (0.18 + u_bass * 0.16);
  float sx = uv.x * 16.0;
  float sid = floor(sx);
  float sf = fract(sx) - 0.5;
  float fromTop = 1.0 - uv.y;
  float sh = 0.1 + 0.36 * pow(hash21(vec2(sid, uSeed + 3.0)), 1.35);
  float stal = 1.0 - smoothstep(0.018, 0.08, abs(sf) + fromTop * 0.12);
  stal *= 1.0 - smoothstep(sh, sh + 0.06, fromTop);
  col = mix(col, uColorA * 0.18, stal * 0.9);
  float vig = smoothstep(0.92, 0.22, length((uv - 0.5) * vec2(1.22, 1.0)));
  return col * vig;
}

void main() {
  vec2 uv = vUv;
  vec3 col = vec3(0.0);
  if (uMode == 0) {
    float n = sin(uv.x * uScale * 0.55 + uTime * 0.14) + sin(uv.y * uScale * 0.4 - uTime * 0.1);
    n += sin((uv.x * 0.7 + uv.y) * uScale * 0.25 + uTime * 0.06);
    n = n / 3.0 * 0.5 + 0.5;
    col = mix(uColorA, uColorB, smoothstep(0.22, 0.78, n));
    col *= 0.9 + 0.1 * smoothstep(1.05, 0.22, length(uv - 0.5));
  } else if (uMode == 1) {
    float n = hash21(floor(uv * uScale * 36.0) + floor(uTime * 1.5));
    col = mix(uColorA, uColorB, mix(0.35, 0.65, n));
  } else if (uMode == 2) {
    float x = uv.x;
    if (x < 1.0/7.0) col = vec3(1.0);
    else if (x < 2.0/7.0) col = vec3(1.0, 1.0, 0.0);
    else if (x < 3.0/7.0) col = vec3(0.0, 1.0, 1.0);
    else if (x < 4.0/7.0) col = vec3(0.0, 1.0, 0.0);
    else if (x < 5.0/7.0) col = vec3(1.0, 0.0, 1.0);
    else if (x < 6.0/7.0) col = vec3(1.0, 0.0, 0.0);
    else col = vec3(0.0, 0.0, 1.0);
  } else if (uMode == 3) {
    col = mix(uColorA, uColorB, uv.x);
  } else if (uMode == 4) {
    col = uColorA;
  } else if (uMode == 5) {
    vec2 c = floor(uv * uScale);
    col = mix(uColorA, uColorB, mod(c.x + c.y, 2.0));
  } else if (uMode == 6) {
    vec3 bg = mix(uColorA * 0.45, uColorB * 0.18, uv.y);
    vec4 cr = critterField(uv, max(uScale, 5.0), uSeed, uTime, 1.15, 2.0);
    col = mix(bg, cr.rgb, cr.a);
    col += cr.rgb * cr.a * 0.18;
  } else if (uMode == 7) {
    col = genStars(uv);
  } else if (uMode == 8) {
    col = genMarsh(uv);
  } else if (uMode == 9) {
    col = genOil(uv);
  } else if (uMode == 10) {
    col = genPaper(uv);
  } else {
    col = genCave(uv);
  }
  fragColor = vec4(col, 1.0);
}
`,Ed=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float sdBox(vec2 p, vec2 b) {
  vec2 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
vec3 stamp(vec3 col, float d, vec3 fill) {
  float face = 1.0 - smoothstep(0.0, 0.012, d);
  float sh = 1.0 - smoothstep(0.0, 0.028, d - 0.012);
  col = mix(col, vec3(0.16, 0.07, 0.22), sh * 0.4 * (1.0 - face));
  return mix(col, fill, face);
}
void main() {
  vec2 uv = vUv;
  float t = uTime;
  vec3 pink = mix(vec3(1.0, 0.58, 0.76), uColorA, 0.2);
  vec3 sky = mix(vec3(0.52, 0.86, 1.0), uColorB, 0.22);
  vec3 col = mix(pink, sky, smoothstep(0.12, 0.95, uv.y));
  col = mix(col, vec3(1.0, 0.9, 0.45), 0.1 + 0.12 * u_bass);
  vec2 dots = uv * vec2(10.0, 7.0);
  vec2 df = fract(dots) - 0.5;
  float polka = smoothstep(0.2, 0.1, length(df));
  vec3 dc = mix(vec3(1.0, 0.45, 0.7), vec3(1.0, 0.92, 0.4), step(0.5, hash21(floor(dots) + uSeed)));
  col = mix(col, dc, polka * 0.28);

  vec2 gv = uv - vec2(0.13, 0.88);
  float guitar = min(length(gv - vec2(0.0, -0.02)) - 0.055, sdBox(gv - vec2(0.0, 0.07), vec2(0.012, 0.08)));
  col = stamp(col, guitar, vec3(0.95, 0.38, 0.55));
  vec2 tv = uv - vec2(0.34, 0.89);
  float trumpet = min(sdBox(tv, vec2(0.07, 0.012)), length(tv - vec2(0.08, 0.0)) - 0.028);
  col = stamp(col, trumpet, vec3(1.0, 0.78, 0.28));
  vec2 bv = uv - vec2(0.52, 0.9);
  float boom = min(sdBox(bv, vec2(0.07, 0.04)), min(length(bv - vec2(-0.03, 0.0)) - 0.022, length(bv - vec2(0.03, 0.0)) - 0.022));
  col = stamp(col, boom, mix(vec3(0.35, 0.78, 0.98), vec3(1.0, 0.75, 0.3), u_bass));
  vec2 vv = uv - vec2(0.88, 0.9);
  float vinyl = abs(length(vv) - 0.055) - 0.016;
  col = stamp(col, vinyl, mix(vec3(0.2, 0.12, 0.28), vec3(1.0, 0.55, 0.8), 0.35));
  vec2 sv = uv - vec2(0.1, 0.3);
  float sax = min(sdBox(sv - vec2(0.0, 0.02), vec2(0.014, 0.07)), length(sv - vec2(0.03, -0.05)) - 0.032);
  col = stamp(col, sax, vec3(0.98, 0.55, 0.32));
  vec2 dv = uv - vec2(0.9, 0.3);
  float drum = min(sdBox(dv, vec2(0.05, 0.035)), length((dv - vec2(0.0, 0.035)) * vec2(1.0, 1.8)) - 0.05);
  col = stamp(col, drum, vec3(0.55, 0.42, 0.95));
  vec2 pv = uv - vec2(0.78, 0.31);
  float piano = min(sdBox(pv, vec2(0.08, 0.035)), sdBox(pv - vec2(-0.02, 0.05), vec2(0.055, 0.016)));
  col = stamp(col, piano, vec3(0.22, 0.12, 0.28));

  float s0 = 0.48;
  col = mix(col, vec3(0.18, 0.08, 0.24), 1.0 - smoothstep(0.0, 0.0028, abs(uv.y - s0)));
  col = mix(col, vec3(0.18, 0.08, 0.24), 1.0 - smoothstep(0.0, 0.0028, abs(uv.y - (s0 + 0.026))));
  col = mix(col, vec3(0.18, 0.08, 0.24), 1.0 - smoothstep(0.0, 0.0028, abs(uv.y - (s0 + 0.052))));
  col = mix(col, vec3(0.18, 0.08, 0.24), 1.0 - smoothstep(0.0, 0.0028, abs(uv.y - (s0 + 0.078))));
  col = mix(col, vec3(0.18, 0.08, 0.24), 1.0 - smoothstep(0.0, 0.0028, abs(uv.y - (s0 + 0.104))));
  float clef = min(sdBox(uv - vec2(0.07, s0 + 0.05), vec2(0.01, 0.07)), length(uv - vec2(0.085, s0 + 0.09)) - 0.018);
  col = mix(col, vec3(0.14, 0.06, 0.2), 1.0 - smoothstep(0.0, 0.01, clef));

  for (int n = 0; n < 4; n++) {
    float fi = float(n);
    vec2 np = vec2(0.22 + fi * 0.16 + 0.02 * sin(t * 1.3 + fi), s0 + 0.02 + 0.07 * abs(sin(t * 2.5 + fi * 1.2)) + u_bass * 0.03);
    vec2 lp = uv - np;
    float note = min(length(lp * vec2(1.35, 1.0) - vec2(-0.006, -0.006)) - 0.016, sdBox(lp - vec2(0.012, 0.03), vec2(0.005, 0.04)));
    vec3 nc = mix(vec3(0.12, 0.05, 0.2), vec3(0.95, 0.4, 0.75), 0.45 + 0.25 * sin(fi + t));
    col = stamp(col, note, nc);
  }

  if (uv.y < 0.24) {
    float keys = 14.0;
    float kx = uv.x * keys;
    float ki = floor(kx);
    float kf = fract(kx);
    float m = mod(ki, 7.0);
    float pulse = max(0.0, sin(t * 8.0 + ki * 1.7));
    pulse *= 0.25 + 0.75 * u_bass;
    float lift = pulse * 0.03;
    float face = step(0.04 + lift, uv.y);
    float canBlack = max(step(m, 1.51), step(2.5, m) * step(m, 5.51));
    float black = step(0.58, kf) * step(kf, 0.84) * canBlack;
    vec3 wh = mix(vec3(0.78, 0.68, 0.74), vec3(0.99, 0.97, 0.94), face);
    vec3 kc = mix(wh, vec3(0.12, 0.08, 0.18), black);
    kc = mix(kc, vec3(1.0, 0.62, 0.88), pulse * 0.6);
    col = mix(kc, col, smoothstep(0.21, 0.24, uv.y));
    col = mix(col, vec3(0.22, 0.1, 0.18), (1.0 - smoothstep(0.0, 0.01, kf)) * step(uv.y, 0.23));
  }
  fragColor = vec4(col, 1.0);
}
`,Pd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float sdBox(vec2 p, vec2 b) {
  vec2 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
void main() {
  vec2 uv = vUv;
  float t = uTime;
  vec3 paper = mix(vec3(0.94, 0.89, 0.78), uColorA, 0.1);
  float fiber = vnoise(uv * 42.0);
  paper *= 0.96 + 0.07 * fiber;
  float rule = 1.0 - smoothstep(0.0, 0.003, abs(fract(uv.y * 14.0) - 0.5));
  paper = mix(paper, vec3(0.72, 0.82, 0.92), rule * 0.18 * step(0.08, uv.x));
  float margin = 1.0 - smoothstep(0.0, 0.004, abs(uv.x - 0.08));
  paper = mix(paper, vec3(0.86, 0.32, 0.38), margin * 0.55);
  float stain = smoothstep(0.78, 0.96, vnoise(uv * 2.2 + uSeed * 0.1));
  paper = mix(paper, mix(uColorB, vec3(0.55, 0.38, 0.22), 0.4), stain * 0.1);
  vec2 ring = uv - vec2(0.82, 0.22);
  float coffee = abs(length(ring) - 0.08) - 0.008;
  paper = mix(paper, vec3(0.62, 0.42, 0.28), (1.0 - smoothstep(0.0, 0.012, coffee)) * 0.28);

  vec3 col = paper;
  if (uv.y > 0.9) {
    float stripe = step(0.5, fract(uv.x * 18.0 + uv.y * 4.0));
    vec3 tape = mix(vec3(1.0, 0.72, 0.82), vec3(0.55, 0.85, 0.95), stripe);
    col = mix(tape, col, 0.12);
    col = mix(col, vec3(0.85, 0.78, 0.7), 1.0 - smoothstep(0.0, 0.008, abs(uv.y - 0.9)));
  }
  float cTL = sdBox(uv - vec2(0.07, 0.93), vec2(0.09, 0.035));
  float cBR = sdBox(uv - vec2(0.93, 0.07), vec2(0.1, 0.032));
  col = mix(col, vec3(0.96, 0.9, 0.7), (1.0 - smoothstep(0.0, 0.01, cTL)) * 0.85);
  col = mix(col, vec3(0.98, 0.78, 0.55), (1.0 - smoothstep(0.0, 0.01, cBR)) * 0.8);

  float s0 = 0.46;
  col = mix(col, vec3(0.22, 0.16, 0.18), 1.0 - smoothstep(0.0, 0.0035, abs(uv.y - s0)));
  col = mix(col, vec3(0.22, 0.16, 0.18), 1.0 - smoothstep(0.0, 0.0035, abs(uv.y - (s0 + 0.03))));
  col = mix(col, vec3(0.22, 0.16, 0.18), 1.0 - smoothstep(0.0, 0.0035, abs(uv.y - (s0 + 0.06))));
  col = mix(col, vec3(0.22, 0.16, 0.18), 1.0 - smoothstep(0.0, 0.0035, abs(uv.y - (s0 + 0.09))));
  col = mix(col, vec3(0.22, 0.16, 0.18), 1.0 - smoothstep(0.0, 0.0035, abs(uv.y - (s0 + 0.12))));

  for (int n = 0; n < 4; n++) {
    float fi = float(n);
    vec2 np = vec2(0.22 + fi * 0.16, s0 + 0.03 + 0.05 * sin(t * 1.1 + fi) * (0.4 + u_bass));
    vec2 lp = uv - np;
    float head = length(lp * vec2(1.3, 1.0) - vec2(-0.006, -0.004)) - 0.014;
    float stem = sdBox(lp - vec2(0.011, 0.028), vec2(0.0035, 0.032));
    float note = min(head, stem);
    vec3 ink = mix(vec3(0.18, 0.12, 0.16), vec3(0.75, 0.28, 0.42), 0.35 + 0.25 * sin(fi + uSeed));
    col = mix(col, ink, 1.0 - smoothstep(0.0, 0.006, note));
  }

  vec2 star = uv - vec2(0.16, 0.78);
  float dood = min(abs(star.x) + abs(star.y) - 0.03, length(star) - 0.012);
  col = mix(col, vec3(0.9, 0.35, 0.55), (1.0 - smoothstep(0.0, 0.008, dood)) * 0.7);
  vec2 hrt = uv - vec2(0.84, 0.74);
  float hd = min(length(hrt - vec2(-0.018, 0.01)) - 0.018, length(hrt - vec2(0.018, 0.01)) - 0.018);
  col = mix(col, vec3(0.92, 0.4, 0.55), (1.0 - smoothstep(0.0, 0.008, hd)) * 0.65);

  float edge = pow(length(uv - 0.5) * 1.05, 2.4) * 0.08;
  fragColor = vec4(clamp(col - edge, 0.0, 1.0), 1.0);
}
`,Md=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float sdBox(vec2 p, vec2 b) {
  vec2 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
void main() {
  vec2 uv = vUv;
  float wool = vnoise(uv * 22.0) * 0.55 + vnoise(uv * 48.0 + 2.1) * 0.45;
  vec3 board = mix(vec3(0.93, 0.84, 0.76), uColorA, 0.18);
  board = mix(board, vec3(0.86, 0.62, 0.72), 0.12 + 0.08 * u_bass);
  board *= 0.92 + 0.12 * wool;
  float nap = abs(sin(uv.x * 42.0 + wool * 3.0)) * 0.025;
  board += nap * vec3(0.08, 0.04, 0.05);
  vec3 col = board;
  vec2 c0 = uv - vec2(0.14, 0.82);
  float cloud = min(length(c0) - 0.07, min(length(c0 - vec2(0.06, 0.02)) - 0.055, length(c0 - vec2(-0.05, 0.0)) - 0.05));
  col = mix(col, mix(vec3(0.98, 0.9, 0.94), uColorB, 0.15), 1.0 - smoothstep(0.0, 0.01, cloud));
  vec2 s1 = uv - vec2(0.86, 0.8);
  float star = abs(s1.x) + abs(s1.y) - 0.055;
  col = mix(col, vec3(1.0, 0.78, 0.42), (1.0 - smoothstep(0.0, 0.01, star)) * 0.92);
  vec2 h1 = uv - vec2(0.12, 0.18);
  float heart = min(length(h1 - vec2(-0.03, 0.02)) - 0.04, length(h1 - vec2(0.03, 0.02)) - 0.04);
  heart = min(heart, sdBox(h1 - vec2(0.0, -0.02), vec2(0.045, 0.03)));
  col = mix(col, vec3(0.96, 0.42, 0.58), (1.0 - smoothstep(0.0, 0.01, heart)) * 0.9);
  vec2 m1 = uv - vec2(0.88, 0.2);
  float moon = max(length(m1) - 0.07, -(length(m1 - vec2(0.03, 0.02)) - 0.055));
  col = mix(col, mix(vec3(0.55, 0.82, 0.78), uColorB, 0.25), 1.0 - smoothstep(0.0, 0.01, moon));
  float stitch = step(0.5, fract((uv.x + uv.y) * 42.0)) * (1.0 - smoothstep(0.04, 0.07, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y))));
  col = mix(col, vec3(0.78, 0.32, 0.48), stitch * 0.55);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Ad=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  float crinkle = vnoise(uv * 14.0 + uSeed) * 0.08 + vnoise(uv * 36.0 - uTime * 0.05) * 0.04;
  vec2 w = uv + vec2(crinkle, -crinkle * 0.7);
  float stripe = fract(w.x * 7.0 + w.y * 1.4 + uTime * 0.08);
  vec3 a = mix(vec3(1.0, 0.45, 0.78), uColorA, 0.28);
  vec3 b = mix(vec3(0.45, 0.92, 1.0), uColorB, 0.28);
  vec3 gold = vec3(1.0, 0.84, 0.38);
  vec3 col = mix(a, b, smoothstep(0.15, 0.85, stripe));
  col = mix(col, gold, 0.18 * step(0.46, stripe) * step(stripe, 0.54));
  float shine = pow(max(0.0, sin((w.x * 5.0 + w.y * 2.0) * 3.14159 + uTime * 0.8 + u_bass)), 10.0);
  col += shine * vec3(0.28, 0.25, 0.22);
  float fold = 1.0 - smoothstep(0.0, 0.018, abs(fract(w.y * 3.0 + crinkle * 2.0) - 0.5));
  col = mix(col, col * 0.78, fold * 0.35);
  float speckle = step(0.96, hash21(floor(w * 36.0)));
  col = mix(col, vec3(1.0, 0.95, 0.8), speckle * 0.18);
  col = mix(col, gold, 0.08 + 0.1 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Id=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  vec3 pile = mix(vec3(0.92, 0.62, 0.74), uColorA, 0.22);
  vec3 mint = mix(vec3(0.55, 0.86, 0.78), uColorB, 0.25);
  float band = step(0.5, fract(uv.y * 6.0));
  vec3 col = mix(pile, mint, band * 0.55);
  vec2 tuft = uv * vec2(8.0, 6.0);
  vec2 cell = floor(tuft);
  vec2 f = fract(tuft) - 0.5;
  float id = hash21(cell + uSeed);
  vec2 jitter = vec2(id, hash21(cell + 9.1)) - 0.5;
  float fluff = length(f - jitter * 0.18);
  float pileH = mix(0.28, 0.48, id);
  float tuftM = 1.0 - smoothstep(pileH * 0.35, pileH, fluff);
  col = mix(col, col * (0.78 + 0.28 * id), tuftM * 0.7);
  float nap = vnoise(uv * 28.0 + vec2(0.0, uTime * 0.04));
  col *= 0.9 + 0.14 * nap;
  col = mix(col, vec3(1.0, 0.82, 0.9), 0.08 + 0.1 * u_bass);
  float edge = pow(length(uv - 0.5) * 1.1, 2.2) * 0.12;
  fragColor = vec4(clamp(col - vec3(edge * 0.4, edge * 0.5, edge * 0.35), 0.0, 1.0), 1.0);
}
`,Bd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  vec2 g = uv * vec2(8.0, 10.0);
  vec2 cell = floor(g);
  vec2 f = fract(g);
  float id = hash21(cell + uSeed);
  float rib = 0.5 + 0.5 * sin(uv.x * 28.0);
  vec3 wool = mix(vec3(0.96, 0.78, 0.86), uColorA, 0.24);
  vec3 mint = mix(vec3(0.62, 0.88, 0.82), uColorB, 0.28);
  float stripe = step(0.5, fract(uv.x * 3.2 + uSeed * 0.08));
  vec3 col = mix(wool, mint, stripe * 0.58);
  float knit = abs(f.x - 0.5 - 0.2 * sin(f.y * 6.28318 + id * 6.2));
  knit = 1.0 - smoothstep(0.07, 0.22, knit);
  col *= 0.84 + 0.22 * knit;
  col *= 0.9 + 0.12 * rib;
  float bump = smoothstep(0.34, 0.12, length(f - vec2(0.5, 0.42)));
  col += bump * vec3(0.09, 0.05, 0.06);
  col *= 0.94 + 0.08 * vnoise(uv * 28.0);
  col = mix(col, vec3(1.0, 0.88, 0.92), 0.05 + 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Fd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec2 g = uv * vec2(8.0, 6.0);
  float row = floor(g.y);
  g.x += 0.5 * step(0.5, fract(row * 0.5));
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float id = hash21(cell + uSeed);
  float sequin = length(f * vec2(1.0, 1.12));
  float disc = 1.0 - smoothstep(0.36, 0.46, sequin);
  vec3 a = mix(vec3(1.0, 0.42, 0.78), uColorA, 0.3);
  vec3 b = mix(vec3(0.42, 0.9, 1.0), uColorB, 0.3);
  vec3 gold = vec3(1.0, 0.84, 0.36);
  vec3 ink = mix(mix(a, b, fract(id * 3.7)), gold, step(0.78, id));
  float twinkle = 0.55 + 0.45 * sin(uTime * (2.4 + id * 3.0) + id * 12.0 + u_bass * 4.0);
  float flash = pow(max(0.0, 1.0 - length(f - vec2(-0.1, 0.12)) * 2.4), 5.0) * twinkle;
  vec3 col = mix(vec3(0.16, 0.07, 0.16), ink, disc);
  col += disc * flash * vec3(0.7, 0.62, 0.5);
  col = mix(col, gold, disc * 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Rd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec2 g = uv * vec2(4.0, 3.0);
  vec2 cell = floor(g);
  vec2 f = fract(g);
  float id = hash21(cell + uSeed);
  vec3 c0 = mix(vec3(0.98, 0.82, 0.88), uColorA, 0.32);
  vec3 c1 = mix(vec3(0.62, 0.86, 0.78), uColorB, 0.32);
  vec3 c2 = vec3(1.0, 0.86, 0.42);
  vec3 c3 = vec3(0.55, 0.42, 0.78);
  vec3 quilt = mix(mix(c0, c1, step(0.25, id)), mix(c2, c3, step(0.75, id)), step(0.5, id));
  float gingham = step(0.5, fract(f.x * 3.0)) * step(0.5, fract(f.y * 3.0));
  float kind = fract(id * 7.13);
  quilt = mix(quilt, quilt * 0.88, gingham * step(kind, 0.4) * 0.55);
  float seam = min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y));
  vec3 col = mix(quilt, vec3(0.94, 0.9, 0.84), (1.0 - smoothstep(0.0, 0.05, seam)) * 0.55);
  col = mix(col, vec3(1.0, 0.9, 0.92), 0.04 + 0.06 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,zd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  vec3 board = mix(vec3(0.72, 0.48, 0.28), uColorA, 0.22);
  board = mix(board, vec3(0.58, 0.36, 0.2), vnoise(uv * 5.0) * 0.22);
  float pore = vnoise(uv * 22.0 + uSeed) * 0.4 + vnoise(uv * 48.0) * 0.28;
  board *= 0.9 + 0.14 * pore;
  vec2 pin = uv * vec2(4.0, 3.0);
  vec2 cell = floor(pin);
  vec2 f = fract(pin) - 0.5;
  float id = hash21(cell + uSeed);
  vec2 jitter = vec2(id, hash21(cell + 4.2)) - 0.5;
  float head = length(f - jitter * 0.28);
  float pinM = 1.0 - smoothstep(0.07, 0.11, head);
  vec3 pinC = mix(mix(uColorB, vec3(0.95, 0.35, 0.48), 0.4), vec3(0.35, 0.7, 0.85), step(0.5, id));
  vec3 col = mix(board, pinC, pinM * step(0.55, id));
  col = mix(col, vec3(0.95, 0.82, 0.62), 0.05 + 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Od=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
void main() {
  vec2 uv = vUv;
  float gingham = 0.0;
  float cx = step(0.5, fract(uv.x * 6.0 + uSeed * 0.05));
  float cy = step(0.5, fract(uv.y * 6.0));
  gingham = cx * 0.45 + cy * 0.45;
  vec3 a = mix(vec3(0.98, 0.92, 0.9), uColorA, 0.2);
  vec3 b = mix(vec3(0.86, 0.28, 0.42), uColorB, 0.28);
  vec3 c = mix(a, b, 0.55);
  vec3 col = mix(a, b, cx);
  col = mix(col, mix(col, c, 0.7), cy);
  col = mix(col, col * 0.88, gingham * 0.25);
  col = mix(col, vec3(1.0, 0.86, 0.9), 0.05 + 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Hd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  vec3 icing = mix(vec3(1.0, 0.86, 0.92), uColorA, 0.22);
  icing = mix(icing, vec3(0.75, 0.95, 0.9), 0.18 * vnoise(uv * 3.0));
  icing *= 0.92 + 0.1 * vnoise(uv * 14.0);
  vec2 g = uv * vec2(8.0, 6.0);
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float id = hash21(cell + uSeed);
  float ang = id * 6.28318;
  vec2 dir = vec2(cos(ang), sin(ang));
  float sprinkle = 1.0 - smoothstep(0.08, 0.16, abs(dot(f, vec2(-dir.y, dir.x))) * 4.2 + length(f * dir) * 0.7);
  sprinkle *= step(0.55, id);
  vec3 sc = mix(mix(uColorB, vec3(1.0, 0.45, 0.62), 0.4), vec3(0.45, 0.85, 1.0), fract(id * 5.1));
  sc = mix(sc, vec3(1.0, 0.86, 0.28), step(0.8, fract(id * 3.7)));
  vec3 col = mix(icing, sc, sprinkle);
  col = mix(col, vec3(1.0, 0.92, 0.94), 0.06 + 0.1 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Ld=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  vec2 uv = vUv;
  float crush = vnoise(uv * 4.0 + uSeed) * 0.7 + vnoise(uv * 11.0 - uTime * 0.02) * 0.3;
  vec3 pile = mix(vec3(0.42, 0.12, 0.28), uColorA, 0.28);
  vec3 nap = mix(vec3(0.72, 0.28, 0.48), uColorB, 0.25);
  vec3 col = mix(pile, nap, smoothstep(0.28, 0.72, crush));
  col *= 0.82 + 0.28 * crush;
  float grain = vnoise(uv * 64.0);
  col += (grain - 0.5) * 0.05;
  col = mix(col, vec3(0.95, 0.55, 0.7), 0.06 + 0.1 * u_bass);
  float edge = pow(length(uv - 0.5) * 1.15, 2.2) * 0.18;
  fragColor = vec4(clamp(col - edge * 0.35, 0.0, 1.0), 1.0);
}
`,Nd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec3 paper = mix(vec3(0.98, 0.92, 0.88), uColorA, 0.12);
  vec2 g = uv * vec2(6.0, 4.5);
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float id = hash21(cell + uSeed);
  float ang = id * 6.28318 + uTime * mix(0.2, 0.8, fract(id * 4.1));
  float cs = cos(ang), sn = sin(ang);
  vec2 q = vec2(cs * f.x + sn * f.y, -sn * f.x + cs * f.y);
  q.x *= mix(1.4, 2.4, fract(id * 2.7));
  q.y *= mix(2.2, 3.6, fract(id * 5.3));
  float confetti = (1.0 - step(0.42, max(abs(q.x), abs(q.y)))) * step(0.48, id);
  vec3 a = mix(vec3(1.0, 0.42, 0.62), uColorA, 0.25);
  vec3 b = mix(vec3(0.35, 0.82, 1.0), uColorB, 0.28);
  vec3 c = vec3(1.0, 0.86, 0.28);
  vec3 d = vec3(0.55, 0.92, 0.48);
  vec3 ink = mix(mix(a, b, step(0.5, fract(id * 3.1))), mix(c, d, step(0.5, fract(id * 7.2))), step(0.5, id));
  vec3 col = mix(paper, ink, confetti);
  col = mix(col, vec3(1.0, 0.9, 0.94), 0.05 + 0.1 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Ud=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec2 g = uv * vec2(5.0, 4.0);
  vec2 cell = floor(g);
  vec2 f = fract(g);
  float diamond = abs(f.x - 0.5) + abs(f.y - 0.5);
  float mirrorTile = 1.0 - smoothstep(0.42, 0.5, diamond);
  float id = hash21(cell + uSeed);
  vec3 a = mix(vec3(0.22, 0.08, 0.28), uColorA, 0.35);
  vec3 b = mix(vec3(1.0, 0.82, 0.38), uColorB, 0.28);
  vec3 c = vec3(0.45, 0.85, 1.0);
  vec3 ink = mix(mix(a, b, step(0.55, id)), c, step(0.82, id));
  float flash = pow(max(0.0, 1.0 - length(f - vec2(0.32, 0.62)) * 2.1), 4.0);
  flash *= 0.22 + 0.28 * sin(uTime * (1.4 + id * 2.0) + id * 12.0 + u_bass * 2.0);
  vec3 col = mix(a * 0.55, ink, mirrorTile);
  col += mirrorTile * flash * vec3(0.85, 0.78, 0.55);
  float grout = smoothstep(0.46, 0.5, diamond);
  col = mix(col, vec3(0.08, 0.04, 0.1), grout * 0.85);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,qd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec3 grout = mix(vec3(0.9, 0.84, 0.78), uColorA, 0.18);
  vec2 g = uv * vec2(8.0, 6.0);
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float id = hash21(cell + uSeed);
  vec2 jitter = vec2(id, hash21(cell + 3.7)) - 0.5;
  vec2 q = f - jitter * 0.28;
  q.x *= mix(0.7, 1.6, fract(id * 2.4));
  q.y *= mix(0.8, 1.8, fract(id * 5.1));
  float chip = 1.0 - smoothstep(0.18, 0.28, length(q));
  chip *= step(0.52, id);
  vec3 a = mix(vec3(0.86, 0.32, 0.48), uColorB, 0.3);
  vec3 b = vec3(0.32, 0.62, 0.78);
  vec3 c = vec3(0.95, 0.82, 0.38);
  vec3 dcol = vec3(0.22, 0.18, 0.2);
  vec3 ink = mix(mix(a, b, step(0.4, fract(id * 3.3))), mix(c, dcol, step(0.7, fract(id * 6.1))), step(0.55, id));
  vec3 col = mix(grout, ink, chip);
  col *= 0.94 + 0.08 * hash21(floor(uv * 64.0));
  col = mix(col, vec3(1.0, 0.9, 0.88), 0.04 + 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Dd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
void main() {
  vec2 uv = vUv;
  vec3 paper = mix(vec3(1.0, 0.95, 0.62), uColorA, 0.22);
  vec3 ink = mix(vec3(0.16, 0.08, 0.08), uColorB, 0.18);
  vec3 burst = vec3(1.0, 0.28, 0.42);
  vec2 g = uv * vec2(12.0, 9.0);
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float field = 0.22 + 0.4 * sin(uv.x * 3.2 + uv.y * 2.4 + uSeed);
  float rad = mix(0.1, 0.32, field);
  float halftone = 1.0 - smoothstep(rad, rad + 0.05, length(f));
  vec3 col = mix(paper, mix(ink, burst, step(0.8, field)), halftone * 0.72);
  col = mix(col, burst, 0.03 + 0.05 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,$d=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
vec2 rot2(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}
float hexDist(vec2 p) {
  p = abs(p);
  return max(p.x * 0.866025 + p.y * 0.5, p.y);
}
vec2 hexGv(vec2 p) {
  vec2 r = vec2(1.0, 1.73205);
  vec2 h = r * 0.5;
  vec2 a = mod(p, r) - h;
  vec2 b = mod(p - h, r) - h;
  return dot(a, a) < dot(b, b) ? a : b;
}
float hexCellMask(vec2 p, float inset) {
  return 1.0 - smoothstep(inset, inset + 0.025, hexDist(p));
}
float wave01(float x) {
  return 0.5 + 0.5 * sin(x);
}
float flipEase(float x) {
  float s = sin(x);
  return smoothstep(-0.15, 0.15, s);
}
vec3 hexCell(vec2 uv) {
  float t = uTime * (0.55 + u_audio * 0.7);
  vec2 p = (uv - 0.5) * vec2(1.78, 1.0) * (5.2 + uScale * 0.2);
  vec2 gv = hexGv(p);
  vec2 id = floor(p - gv + 0.002);
  float phase = id.x * 0.62 + id.y * 0.36 - t * 2.15;
  float turn = flipEase(phase);
  float ang = 1.0471976 * turn;
  vec2 q = rot2(gv, ang);
  float body = hexCellMask(q, 0.36);
  float gap = smoothstep(0.42, 0.48, hexDist(gv));
  float crest = wave01(phase);
  vec3 ca = uColorA;
  vec3 cb = uColorB;
  vec3 col = mix(ca, cb, step(0.5, fract((id.x + id.y) * 0.5)));
  col = mix(col, ca + cb - col, crest);
  col = mix(col * 0.22, col, body);
  col = mix(col, mix(cb, ca, 0.5) * 0.2, gap);
  col = mix(col, cb, 0.12 * u_bass * crest);
  return col;
}
vec3 tileFlip(vec2 uv) {
  float t = uTime * (0.48 + u_audio * 0.75);
  vec2 g = (uv - 0.5) * vec2(1.7, 1.0) * 7.2;
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float phase = cell.x * 0.72 + cell.y * 0.18 - t * 2.4;
  float turn = flipEase(phase);
  float ang = 1.5707963 * turn;
  vec2 q = rot2(f, ang);
  float squash = max(0.08, abs(cos(phase)));
  q.x /= squash;
  float diamond = abs(q.x) + abs(q.y);
  float motif = 1.0 - smoothstep(0.38, 0.44, diamond);
  float checker = mod(cell.x + cell.y, 2.0);
  vec3 ground = mix(uColorA, uColorB, checker);
  vec3 motifC = mix(uColorB, uColorA, checker);
  motifC = mix(motifC, ground, turn);
  vec3 col = mix(ground, motifC, motif);
  float grout = max(abs(f.x), abs(f.y));
  col = mix(col, mix(uColorA, uColorB, 0.5) * 0.18, smoothstep(0.46, 0.5, grout));
  col = mix(col, uColorB, 0.1 * u_bass * wave01(phase));
  return col;
}
vec3 phaseBeat(vec2 uv) {
  float t = uTime * (0.22 + u_audio * 0.45);
  vec2 p = (uv - 0.5) * vec2(1.7, 1.0) * (8.4 + uScale * 0.15);
  vec2 a = hexGv(rot2(p, t * 0.18));
  vec2 b = hexGv(rot2(p * 1.04 + vec2(0.18, -0.12), -t * 0.16));
  float ma = hexCellMask(a, 0.34);
  float mb = hexCellMask(b, 0.34);
  float inter = abs(ma - mb);
  vec3 col = mix(uColorA, uColorB, ma);
  col = mix(col, uColorA + uColorB - col, mb * 0.65);
  col = mix(col, mix(uColorB, uColorA, 0.35), inter);
  col = mix(col, uColorB, 0.14 * u_bass);
  return col;
}
vec3 coilRing(vec2 uv) {
  vec2 p = uv - 0.5;
  p.x *= 1.7;
  float t = uTime * (0.32 + u_audio * 0.5);
  float rad = length(p);
  float ang = atan(p.y, p.x);
  float rings = 9.0;
  float ring = floor(rad * rings);
  float fi = fract(rad * rings);
  float dir = mod(ring, 2.0) * 2.0 - 1.0;
  float teethN = 12.0;
  float spin = ang / 6.2831853 * teethN + dir * t * 1.15;
  float tooth = step(0.28, abs(fract(spin) - 0.5));
  float band = step(0.08, fi) * step(fi, 0.92);
  float chase = step(0.5, fract(ang / 6.2831853 * 10.0 + dir * t * 0.35 + ring * 0.12));
  vec3 col = mix(uColorA, uColorB, chase);
  col = mix(col, mix(uColorB, uColorA, 0.25), tooth);
  col *= band;
  col *= 1.0 - smoothstep(0.58, 0.76, rad);
  col += uColorB * 0.14 * u_bass * (1.0 - fi) * band;
  return col;
}
vec3 facetEdge(vec2 uv) {
  float t = uTime * (0.4 + u_audio * 0.55);
  vec2 p = (uv - 0.5) * vec2(1.7, 1.0);
  float pulse = 1.0 + 0.22 * sin(length(p) * 14.0 - t * 3.1 + u_bass);
  p *= (4.6 + uScale * 0.12) * pulse;
  vec2 cell = floor(p);
  vec2 f = fract(p) - 0.5;
  float phase = cell.x * 0.5 + cell.y * 0.5 - t * 1.8;
  float turn = flipEase(phase);
  vec2 q = rot2(f, 0.5235988 + 1.0471976 * turn);
  float hex = hexDist(q);
  float star = min(hex, abs(q.x) * 0.866 + abs(q.y) * 0.5);
  float motif = 1.0 - smoothstep(0.28, 0.34, star);
  float ring = 1.0 - smoothstep(0.36, 0.4, hex);
  float checker = mod(cell.x + cell.y, 2.0);
  vec3 col = mix(uColorA, uColorB, checker);
  col = mix(col, uColorA + uColorB - col, wave01(phase));
  col = mix(col, mix(uColorB, uColorA, checker), motif);
  col = mix(col, mix(uColorA, uColorB, 0.5) * 0.25, 1.0 - ring);
  return col;
}
void main() {
  vec3 col;
  if (uMode == 28) col = hexCell(vUv);
  else if (uMode == 29) col = tileFlip(vUv);
  else if (uMode == 30) col = phaseBeat(vUv);
  else if (uMode == 31) col = coilRing(vUv);
  else col = facetEdge(vUv);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,jo=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Wd=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uTranslate;
uniform float uScale;
uniform float uRotation;
uniform vec2 uFit;

vec2 rot(vec2 p, float a) {
  float s = sin(a); float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

void main() {
  vec2 p = (vUv - 0.5) / uFit;
  p = rot(p, uRotation);
  p /= max(uScale, 0.001);
  p -= uTranslate;
  p += 0.5;
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) {
    fragColor = vec4(0.0);
    return;
  }
  fragColor = texture(uTex, p);
}
`;class zt extends Error{}function jd(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new zt("WebGL2 is required for Phosphene.");return e}function Vo(t,e,i){const a=t.createShader(e);if(!a)throw new zt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new zt(n)}return a}class ve{gl;prog;uniforms=new Map;constructor(e,i,a=yd){this.gl=e;const n=Vo(e,e.VERTEX_SHADER,a),o=Vo(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new zt("Unable to create program");if(e.attachShader(s,n),e.attachShader(s,o),e.linkProgram(s),e.deleteShader(n),e.deleteShader(o),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new zt(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const n=this.loc(e);n&&this.gl.uniform2f(n,i,a)}v3(e,i,a,n){const o=this.loc(e);o&&this.gl.uniform3f(o,i,a,n)}v4(e,i,a,n,o){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,n,o)}dispose(){this.gl.deleteProgram(this.prog)}}function Pa(t){const e=t.createTexture();if(!e)throw new zt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Go(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Vd(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class Vt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new zt("Unable to create framebuffer");this.fbo=i,this.tex=Pa(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Vd(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Oe(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function nt(t){t.drawArrays(t.TRIANGLES,0,3)}const Gd={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Kd={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Ko={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function Xd(t){return`${wd}
${t.extraUniforms??""}
${t.applyGlsl}
${kd}`}function Zd(t,e){return new ve(t,Xd(e))}function yi(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Gt=8;function Xo(t,e,i){return new ImageData(t,e,i)}function Qd(t,e,i){const a=t.find(o=>o.id===e);if(!a?.options)return Number(i)||0;const n=a.options.findIndex(o=>o.value===i);return n<0?0:n}class Yd{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new Ju;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=jd(e),this.generatorProg=new ve(this.gl,Cd)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Gt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new Vt(e),this.pong??=new Vt(e),this.composite??=new Vt(e),this.post??=new Vt(e);this.ring.length<Gt;)this.ring.push(new Vt(e));this.copy??=new ve(e,jo),this.blit??=new ve(e,_d),this.compositeProg??=new ve(e,Td),this.feedbackProg??=new ve(e,xd),this.textureProg??=new ve(e,Wd),this.black||(this.black=Pa(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(o=>o.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(o=>o.enabled))return!0;const n=e.sources.find(o=>o.id===a.sourceId);return!!(n&&n.kind!=="generator"&&n.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ve(this.gl,Ed),this.stageProg):e===13?(this.sketchProg??=new ve(this.gl,Pd),this.sketchProg):e===14?(this.feltProg??=new ve(this.gl,Md),this.feltProg):e===15?(this.foilProg??=new ve(this.gl,Ad),this.foilProg):e===16?(this.plushProg??=new ve(this.gl,Id),this.plushProg):e===17?(this.yarnProg??=new ve(this.gl,Bd),this.yarnProg):e===18?(this.sequinProg??=new ve(this.gl,Fd),this.sequinProg):e===19?(this.quiltProg??=new ve(this.gl,Rd),this.quiltProg):e===20?(this.corkProg??=new ve(this.gl,zd),this.corkProg):e===21?(this.ginghamProg??=new ve(this.gl,Od),this.ginghamProg):e===22?(this.sprinkleProg??=new ve(this.gl,Hd),this.sprinkleProg):e===23?(this.velvetProg??=new ve(this.gl,Ld),this.velvetProg):e===24?(this.confettiProg??=new ve(this.gl,Nd),this.confettiProg):e===25?(this.discoProg??=new ve(this.gl,Ud),this.discoProg):e===26?(this.terrazzoProg??=new ve(this.gl,qd),this.terrazzoProg):e===27?(this.comicProg??=new ve(this.gl,Dd),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ve(this.gl,$d),this.fieldsProg):(this.generatorFull??=new ve(this.gl,Sd),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",n=this.effectProg.get(a);if(n)return n;const o=e==="dancer"?pf(i):at(e);if(!o)return null;try{const s=Zd(this.gl,o);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(n=>!!n);for(const n of a)n.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new Vt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Pa(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Go(this.gl,i,a),i}blitTo(e,i){const a=this.gl,n=this.copy;n&&(e.bind(),n.use(),Oe(a,0,i),n.i("uTex",0),nt(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const n=Math.max(a?.duration||0,e.duration,e.exportSettings.duration||0,8),o=`${e.cutEdit.seed}|${n}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==o)&&(this.cutReel=td({seed:e.cutEdit.seed,duration:n,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=o);const s=id(this.cutReel,i,n,a?.bpm,a?.beatOffset);this.cutStatus=ad(s),this.cutLook={generator:Ta(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,n,o,s,r){const l=this.gl;this.copy??=new ve(l,jo),this.heraldryTex??=Pa(l);const c=this.cutLook??i,f=this.heraldry.paint({width:s,height:r,time:a,duration:o,seed:n,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,chainAnimal:c.collageChainAnimal,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,camera:c.collageCamera,cameraFeel:c.collageCameraFeel,huntWideMin:c.collageHuntWideMin,huntWideMax:c.collageHuntWideMax,huntFollowMin:c.collageHuntFollowMin,huntFollowMax:c.collageHuntFollowMax,huntSnap:c.collageHuntSnap,huntZoom:c.collageHuntZoom,huntTight:c.collageHuntTight,huntReactMin:c.collageHuntReactMin,huntReactMax:c.collageHuntReactMax,huntPrecision:c.collageHuntPrecision,huntSelect:c.collageHuntSelect,huntFocus:c.collageHuntFocus,huntFocusSpeed:c.collageHuntFocusSpeed,huntFocusError:c.collageHuntFocusError,huntVariation:c.collageHuntVariation});if(Go(l,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Oe(l,0,this.heraldryTex),this.copy.i("uTex",0),nt(l)}drawGenerator(e,i,a,n=77,o=8){if(Ae(i.generator)){this.drawHeraldry(e,i,a,n,o,e.w,e.h);return}const s=this.gl,r=Ko[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?yi(i.colorA):[.07,.04,.1],f=i.colorB?yi(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",n),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),nt(s)}drawTexture(e,i,a){const n=this.gl,o=this.textureProg;o&&(e.bind(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),o.use(),Oe(n,0,i),o.i("uTex",0),o.v2("uTranslate",a.transform.x,a.transform.y),o.f("uScale",a.transform.scale),o.f("uRotation",a.transform.rotation),o.v2("uFit",1,1),nt(n))}applyEffect(e,i,a,n,o,s,r,l,c){const f=at(a.typeId),d=this.progFor(a);if(!f||!d){this.blitTo(e,i);return}const m=this.gl;e.bind(),d.use(),Oe(m,0,i),Oe(m,1,l),Oe(m,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",o),d.f("uFrame",s),d.f("uQuality",r==="draft"?0:r==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",n.transform.x,n.transform.y),d.f("u_scale",n.transform.scale),d.f("u_rotation",n.transform.rotation);const u=n.mask;d.i("u_maskType",Kd[u.type]??0),d.i("u_maskInvert",u.invert?1:0),d.f("u_maskSoftness",u.softness),d.v4("u_maskRect",u.rect.x,u.rect.y,u.rect.w,u.rect.h),d.v2("u_maskCenter",u.center.x,u.center.y),d.f("u_maskRadius",u.radius),d.f("u_maskGradientAngle",u.gradientAngle),d.f("u_maskNoiseScale",u.noiseScale);let p=1;for(const h of f.params){const g=a.params[h.id]??h.default,y=`u_${h.id}`;if(h.kind==="color"&&typeof g=="string"){const[w,v,T]=yi(g);d.v3(y,w,v,T)}else h.kind==="bool"?d.f(y,g?1:0):h.kind==="enum"?d.f(y,Qd(f.params,h.id,g)):d.f(y,Number(g));h.id==="mix"&&(p=Number(g))}d.f("u_mix",p),nt(m)}drawLite(e,i){const a=this.gl,n=e.layers.find(d=>d.enabled)??e.layers[0],o=n?e.sources.find(d=>d.id===n.sourceId):null,s=o&&o.kind!=="audio"?o:{generator:"plasma"};if(Ae(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=Ko[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?yi(s.colorA):[.07,.04,.1],f=s.colorB?yi(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),nt(a)}render(e,i,a){const n=this.gl,o=a?.quality??e.quality,s=pd(mi(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=mi(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),o!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,f=this.composite,d=this.post,m=this.blit,u=this.compositeProg,p=this.feedbackProg,h=o==="draft"?.5:1,g=Math.max(16,Math.floor((a?.width??this.canvas.width)*h)),y=Math.max(16,Math.floor((a?.height??this.canvas.height)*h));this.ensureSize(g,y),f.bind(),n.clearColor(.02,.02,.03,1),n.clear(n.COLOR_BUFFER_BIT);const w=e.globalFeedback,v=Math.max(0,Math.min(Gt-1,Math.round(w.delay))),T=(this.ringIndex-1-v+Gt*8)%Gt,_=this.ring[T].tex,E=Math.floor(i*e.fps);for(const P of e.layers){if(!P.enabled)continue;const I=$f(e,P,i),A=e.sources.find(F=>F.id===I.sourceId)??null;if(!A||A.kind==="generator"||A.kind==="audio"){const F=A&&A.kind!=="audio"?A:{generator:"plasma"};this.drawGenerator(l,F,i,e.seed,e.duration)}else{const F=this.uploadSource(A);this.drawTexture(l,F,I)}let H=l,$=c;const C=this.histFor(I.id);for(const F of I.effects){if(!F.enabled)continue;this.applyEffect($,H.tex,F,I,i,E,o,_,C.tex);const k=H;H=$,$=k}if(I.feedback.amount>.001){$.bind(),p.use(),Oe(n,0,H.tex),Oe(n,1,C.tex),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",I.feedback.amount),p.f("uOpacity",I.feedback.opacity),p.f("uScale",I.feedback.scale),p.f("uRotation",I.feedback.rotation),p.f("uDistortion",I.feedback.distortion),p.f("uTime",i),nt(n);const F=H;H=$,$=F}this.blitTo(d,f.tex),f.bind(),u.use(),Oe(n,0,d.tex),Oe(n,1,H.tex),u.i("uBase",0),u.i("uLayer",1),u.f("uOpacity",I.opacity),u.i("uBlend",Gd[I.blendMode]??0),u.v2("uResolution",g,y),nt(n),this.blitTo(C,H.tex)}w.amount>.001&&(d.bind(),p.use(),Oe(n,0,f.tex),Oe(n,1,_),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",w.amount),p.f("uOpacity",w.opacity),p.f("uScale",w.scale),p.f("uRotation",w.rotation),p.f("uDistortion",w.distortion),p.f("uTime",i),nt(n),this.blitTo(f,d.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%Gt,n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),m.use(),Oe(n,0,f.tex),m.i("uTex",0),m.f("uVignette",a?.vignette??.25),nt(n)}capture(e,i,a,n,o="image/png",s=.97){const r=this.paintFrame(e,i,a,n);return new Promise((l,c)=>{r.toBlob(f=>{f?l(f):c(new Error("Export failed"))},o,s)})}paintFrame(e,i,a,n,o){const s=o??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==n&&(s.height=n);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:n,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===n)r.putImageData(Xo(l,a,n),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Xo(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,n)}return s}readPixels(e,i){const a=this.gl,n=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,n),a.bindFramebuffer(a.FRAMEBUFFER,null);const o=new Uint8ClampedArray(new ArrayBuffer(n.length)),s=e*4;for(let r=0;r<i;r++)o.set(n.subarray((i-1-r)*s,(i-r)*s),r*s);return o}}const Jd=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,eh=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function th(t){return t.type.startsWith("video/")||eh.test(t.name)}function ih(t){return t.type.startsWith("image/")||Jd.test(t.name)}async function ah(t){if(th(t))return oh(t);if(ih(t))return Qo(t);if(od(t))return rd(t);throw new Error(`Unsupported media: ${t.name}`)}async function Zo(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Qo(i)}async function Qo(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Fe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await nh(e);return{id:Fe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function nh(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function oh(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,n)=>{const o=()=>{a({id:Fe("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",o,{once:!0}),i.addEventListener("error",()=>n(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function sh(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Fe("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Yo(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function rh(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,n=a.duration;if(!Number.isFinite(n)||n<=0)return;const o=(e%n+n)%n,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,f=Math.abs(a.currentTime-o);if(!s){if(a.paused||a.pause(),f>1/30)try{a.currentTime=o}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),f>.35)try{a.currentTime=o}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),f>1/30)try{a.currentTime=o}catch{}}const lh=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ch(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Aa(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var vn={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Jo;function uh(){return Jo||(Jo=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,n,o){function s(c,f){if(!n[c]){if(!a[c]){var d=typeof Aa=="function"&&Aa;if(!f&&d)return d(c,!0);if(r)return r(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var u=n[c]={exports:{}};a[c][0].call(u.exports,function(p){var h=a[c][1][p];return s(h||p)},u,u.exports,i,a,n,o)}return n[c].exports}for(var r=typeof Aa=="function"&&Aa,l=0;l<o.length;l++)s(o[l]);return s})({1:[function(i,a,n){var o=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var c,f,d,m,u,p,h,g=[],y=0,w=l.length,v=w,T=o.getTypeOf(l)!=="string";y<l.length;)v=w-y,d=T?(c=l[y++],f=y<w?l[y++]:0,y<w?l[y++]:0):(c=l.charCodeAt(y++),f=y<w?l.charCodeAt(y++):0,y<w?l.charCodeAt(y++):0),m=c>>2,u=(3&c)<<4|f>>4,p=1<v?(15&f)<<2|d>>6:64,h=2<v?63&d:64,g.push(r.charAt(m)+r.charAt(u)+r.charAt(p)+r.charAt(h));return g.join("")},n.decode=function(l){var c,f,d,m,u,p,h=0,g=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var w,v=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&v--,l.charAt(l.length-2)===r.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=s.uint8array?new Uint8Array(0|v):new Array(0|v);h<l.length;)c=r.indexOf(l.charAt(h++))<<2|(m=r.indexOf(l.charAt(h++)))>>4,f=(15&m)<<4|(u=r.indexOf(l.charAt(h++)))>>2,d=(3&u)<<6|(p=r.indexOf(l.charAt(h++))),w[g++]=c,u!==64&&(w[g++]=f),p!==64&&(w[g++]=d);return w}},{"./support":30,"./utils":32}],2:[function(i,a,n){var o=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(f,d,m,u,p){this.compressedSize=f,this.uncompressedSize=d,this.crc32=m,this.compression=u,this.compressedContent=p}c.prototype={getContentWorker:function(){var f=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return f.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,d,m){return f.pipe(new r).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,n){var o=i("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},n.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,n){var o=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var f=0;f<8;f++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?o.getTypeOf(r)!=="string"?(function(c,f,d,m){var u=s,p=m+d;c^=-1;for(var h=m;h<p;h++)c=c>>>8^u[255&(c^f[h])];return-1^c})(0|l,r,r.length,0):(function(c,f,d,m){var u=s,p=m+d;c^=-1;for(var h=m;h<p;h++)c=c>>>8^u[255&(c^f.charCodeAt(h))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(i,a,n){var o=null;o=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:o}},{lie:37}],7:[function(i,a,n){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=o?"uint8array":"array";function f(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}n.magic="\b\0",r.inherits(f,l),f.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,d.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},n.compressWorker=function(d){return new f("Deflate",d)},n.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,n){function o(u,p){var h,g="";for(h=0;h<p;h++)g+=String.fromCharCode(255&u),u>>>=8;return g}function s(u,p,h,g,y,w){var v,T,_=u.file,E=u.compression,P=w!==c.utf8encode,I=r.transformTo("string",w(_.name)),A=r.transformTo("string",c.utf8encode(_.name)),H=_.comment,$=r.transformTo("string",w(H)),C=r.transformTo("string",c.utf8encode(H)),F=A.length!==_.name.length,k=C.length!==H.length,U="",X="",L="",ae=_.dir,V=_.date,te={crc32:0,compressedSize:0,uncompressedSize:0};p&&!h||(te.crc32=u.crc32,te.compressedSize=u.compressedSize,te.uncompressedSize=u.uncompressedSize);var N=0;p&&(N|=8),P||!F&&!k||(N|=2048);var O=0,ne=0;ae&&(O|=16),y==="UNIX"?(ne=798,O|=(function(Q,we){var Me=Q;return Q||(Me=we?16893:33204),(65535&Me)<<16})(_.unixPermissions,ae)):(ne=20,O|=(function(Q){return 63&(Q||0)})(_.dosPermissions)),v=V.getUTCHours(),v<<=6,v|=V.getUTCMinutes(),v<<=5,v|=V.getUTCSeconds()/2,T=V.getUTCFullYear()-1980,T<<=4,T|=V.getUTCMonth()+1,T<<=5,T|=V.getUTCDate(),F&&(X=o(1,1)+o(f(I),4)+A,U+="up"+o(X.length,2)+X),k&&(L=o(1,1)+o(f($),4)+C,U+="uc"+o(L.length,2)+L);var ee="";return ee+=`
\0`,ee+=o(N,2),ee+=E.magic,ee+=o(v,2),ee+=o(T,2),ee+=o(te.crc32,4),ee+=o(te.compressedSize,4),ee+=o(te.uncompressedSize,4),ee+=o(I.length,2),ee+=o(U.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ee+I+U,dirRecord:d.CENTRAL_FILE_HEADER+o(ne,2)+ee+o($.length,2)+"\0\0\0\0"+o(O,4)+o(g,4)+I+U+$}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),f=i("../crc32"),d=i("../signature");function m(u,p,h,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=h,this.encodeFileName=g,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(m,l),m.prototype.push=function(u){var p=u.meta.percent||0,h=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:h?(p+100*(h-g-1))/h:100}}))},m.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var p=this.streamFiles&&!u.file.dir;if(p){var h=s(u,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(u){this.accumulate=!1;var p=this.streamFiles&&!u.file.dir,h=s(u,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),p)this.push({data:(function(g){return d.DATA_DESCRIPTOR+o(g.crc32,4)+o(g.compressedSize,4)+o(g.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var u=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var h=this.bytesWritten-u,g=(function(y,w,v,T,_){var E=r.transformTo("string",_(T));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(y,2)+o(y,2)+o(w,4)+o(v,4)+o(E.length,2)+E})(this.dirRecords.length,h,u,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(u){this._sources.push(u);var p=this;return u.on("data",function(h){p.processChunk(h)}),u.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),u.on("error",function(h){p.error(h)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(u){var p=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var h=0;h<p.length;h++)try{p[h].error(u)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,p=0;p<u.length;p++)u[p].lock()},a.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,n){var o=i("../compressions"),s=i("./ZipFileWorker");n.generateWorker=function(r,l,c){var f=new s(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{r.forEach(function(m,u){d++;var p=(function(w,v){var T=w||v,_=o[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(u.options.compression,l.compression),h=u.options.compressionOptions||l.compressionOptions||{},g=u.dir,y=u.date;u._compressWorker(p,h).withStreamInfo("file",{name:m,dir:g,date:y,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(f)}),f.entriesCount=d}catch(m){f.error(m)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,n){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new o;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(o.prototype=i("./object")).loadAsync=i("./load"),o.support=i("./support"),o.defaults=i("./defaults"),o.version="3.10.1",o.loadAsync=function(s,r){return new o().loadAsync(s,r)},o.external=i("./external"),a.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,n){var o=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),f=i("./nodejsUtils");function d(m){return new s.Promise(function(u,p){var h=m.decompressed.getContentWorker().pipe(new c);h.on("error",function(g){p(g)}).on("end",function(){h.streamInfo.crc32!==m.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}a.exports=function(m,u){var p=this;return u=o.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),f.isNode&&f.isStream(m)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",m,!0,u.optimizedBinaryString,u.base64).then(function(h){var g=new l(u);return g.load(h),g}).then(function(h){var g=[s.Promise.resolve(h)],y=h.files;if(u.checkCRC32)for(var w=0;w<y.length;w++)g.push(d(y[w]));return s.Promise.all(g)}).then(function(h){for(var g=h.shift(),y=g.files,w=0;w<y.length;w++){var v=y[w],T=v.fileNameStr,_=o.resolve(v.fileNameStr);p.file(_,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:u.createFolders}),v.dir||(p.file(_).unsafeOriginalName=T)}return g.zipComment.length&&(p.comment=g.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,n){var o=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}o.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,n){var o=i("readable-stream").Readable;function s(r,l,c){o.call(this,l),this._helper=r;var f=this;r.on("data",function(d,m){f.push(d)||f._helper.pause(),c&&c(m)}).on("error",function(d){f.emit("error",d)}).on("end",function(){f.push(null)})}i("../utils").inherits(s,o),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,n){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,s);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,s)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var s=new Buffer(o);return s.fill(0),s},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(i,a,n){function o(_,E,P){var I,A=r.getTypeOf(E),H=r.extend(P||{},f);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(_=y(_)),H.createFolders&&(I=g(_))&&w.call(this,I,!0);var $=A==="string"&&H.binary===!1&&H.base64===!1;P&&P.binary!==void 0||(H.binary=!$),(E instanceof d&&E.uncompressedSize===0||H.dir||!E||E.length===0)&&(H.base64=!1,H.binary=!0,E="",H.compression="STORE",A="string");var C=null;C=E instanceof d||E instanceof l?E:p.isNode&&p.isStream(E)?new h(_,E):r.prepareContent(_,E,H.binary,H.optimizedBinaryString,H.base64);var F=new m(_,C,H);this.files[_]=F}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),f=i("./defaults"),d=i("./compressedObject"),m=i("./zipObject"),u=i("./generate"),p=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),g=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var E=_.lastIndexOf("/");return 0<E?_.substring(0,E):""},y=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},w=function(_,E){return E=E!==void 0?E:f.createFolders,_=y(_),this.files[_]||o.call(this,_,null,{dir:!0,createFolders:E}),this.files[_]};function v(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var E,P,I;for(E in this.files)I=this.files[E],(P=E.slice(this.root.length,E.length))&&E.slice(0,this.root.length)===this.root&&_(P,I)},filter:function(_){var E=[];return this.forEach(function(P,I){_(P,I)&&E.push(I)}),E},file:function(_,E,P){if(arguments.length!==1)return _=this.root+_,o.call(this,_,E,P),this;if(v(_)){var I=_;return this.filter(function(H,$){return!$.dir&&I.test(H)})}var A=this.files[this.root+_];return A&&!A.dir?A:null},folder:function(_){if(!_)return this;if(v(_))return this.filter(function(A,H){return H.dir&&_.test(A)});var E=this.root+_,P=w.call(this,E),I=this.clone();return I.root=P.name,I},remove:function(_){_=this.root+_;var E=this.files[_];if(E||(_.slice(-1)!=="/"&&(_+="/"),E=this.files[_]),E&&!E.dir)delete this.files[_];else for(var P=this.filter(function(A,H){return H.name.slice(0,_.length)===_}),I=0;I<P.length;I++)delete this.files[P[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var E,P={};try{if((P=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");r.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var I=P.comment||this.comment||"";E=u.generateWorker(this,P,I)}catch(A){(E=new l("error")).error(A)}return new c(E,P.type||"string",P.mimeType)},generateAsync:function(_,E){return this.generateInternalStream(_).accumulate(E)},generateNodeStream:function(_,E){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(E)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,n){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,n){var o=i("./DataReader");function s(r){o.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,o),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),f=r.charCodeAt(2),d=r.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===f&&this.data[m+3]===d)return m-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),f=r.charCodeAt(2),d=r.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&f===m[2]&&d===m[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,n){var o=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return o.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,n){var o=i("./Uint8ArrayReader");function s(r){o.call(this,r)}i("../utils").inherits(s,o),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,n){var o=i("./DataReader");function s(r){o.call(this,r)}i("../utils").inherits(s,o),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,n){var o=i("./ArrayReader");function s(r){o.call(this,r)}i("../utils").inherits(s,o),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,n){var o=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),f=i("./Uint8ArrayReader");a.exports=function(d){var m=o.getTypeOf(d);return o.checkSupport(m),m!=="string"||s.uint8array?m==="nodebuffer"?new c(d):s.uint8array?new f(o.transformTo("uint8array",d)):new r(o.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,n){var o=i("./GenericWorker"),s=i("../utils");function r(l){o.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,o),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,n){var o=i("./GenericWorker"),s=i("../crc32");function r(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,o),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,n){var o=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,n){var o=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=o.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}o.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,n){function o(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=o},{}],29:[function(i,a,n){var o=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),f=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(p,h){return new f.Promise(function(g,y){var w=[],v=p._internalType,T=p._outputType,_=p._mimeType;p.on("data",function(E,P){w.push(E),h&&h(P)}).on("error",function(E){w=[],y(E)}).on("end",function(){try{var E=(function(P,I,A){switch(P){case"blob":return o.newBlob(o.transformTo("arraybuffer",I),A);case"base64":return l.encode(I);default:return o.transformTo(P,I)}})(T,(function(P,I){var A,H=0,$=null,C=0;for(A=0;A<I.length;A++)C+=I[A].length;switch(P){case"string":return I.join("");case"array":return Array.prototype.concat.apply([],I);case"uint8array":for($=new Uint8Array(C),A=0;A<I.length;A++)$.set(I[A],H),H+=I[A].length;return $;case"nodebuffer":return Buffer.concat(I);default:throw new Error("concat : unsupported type '"+P+"'")}})(v,w),_);g(E)}catch(P){y(P)}w=[]}).resume()})}function u(p,h,g){var y=h;switch(h){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=h,this._mimeType=g,o.checkSupport(y),this._worker=p.pipe(new s(y)),p.lock()}catch(w){this._worker=new r("error"),this._worker.error(w)}}u.prototype={accumulate:function(p){return m(this,p)},on:function(p,h){var g=this;return p==="data"?this._worker.on(p,function(y){h.call(g,y.data,y.meta)}):this._worker.on(p,function(){o.delay(h,arguments,g)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},p)}},a.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var o=new ArrayBuffer(0);try{n.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(o),n.blob=s.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!i("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,n){for(var o=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}n.utf8encode=function(u){return s.nodebuffer?r.newBufferFrom(u,"utf-8"):(function(p){var h,g,y,w,v,T=p.length,_=0;for(w=0;w<T;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<T&&(64512&(y=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),w++),_+=g<128?1:g<2048?2:g<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),w=v=0;v<_;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<T&&(64512&(y=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),w++),g<128?h[v++]=g:(g<2048?h[v++]=192|g>>>6:(g<65536?h[v++]=224|g>>>12:(h[v++]=240|g>>>18,h[v++]=128|g>>>12&63),h[v++]=128|g>>>6&63),h[v++]=128|63&g);return h})(u)},n.utf8decode=function(u){return s.nodebuffer?o.transformTo("nodebuffer",u).toString("utf-8"):(function(p){var h,g,y,w,v=p.length,T=new Array(2*v);for(h=g=0;h<v;)if((y=p[h++])<128)T[g++]=y;else if(4<(w=c[y]))T[g++]=65533,h+=w-1;else{for(y&=w===2?31:w===3?15:7;1<w&&h<v;)y=y<<6|63&p[h++],w--;1<w?T[g++]=65533:y<65536?T[g++]=y:(y-=65536,T[g++]=55296|y>>10&1023,T[g++]=56320|1023&y)}return T.length!==g&&(T.subarray?T=T.subarray(0,g):T.length=g),o.applyFromCharCode(T)})(u=o.transformTo(s.uint8array?"uint8array":"array",u))},o.inherits(d,l),d.prototype.processChunk=function(u){var p=o.transformTo(s.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=p;(p=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),p.set(h,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var g=(function(w,v){var T;for((v=v||w.length)>w.length&&(v=w.length),T=v-1;0<=T&&(192&w[T])==128;)T--;return T<0||T===0?v:T+c[w[T]]>v?T:v})(p),y=p;g!==p.length&&(s.uint8array?(y=p.subarray(0,g),this.leftOver=p.subarray(g,p.length)):(y=p.slice(0,g),this.leftOver=p.slice(g,p.length))),this.push({data:n.utf8decode(y),meta:u.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=d,o.inherits(m,l),m.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,n){var o=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(h){return h}function f(h,g){for(var y=0;y<h.length;++y)g[y]=255&h.charCodeAt(y);return g}i("setimmediate"),n.newBlob=function(h,g){n.checkSupport("blob");try{return new Blob([h],{type:g})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(h),y.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,g,y){var w=[],v=0,T=h.length;if(T<=y)return String.fromCharCode.apply(null,h);for(;v<T;)g==="array"||g==="nodebuffer"?w.push(String.fromCharCode.apply(null,h.slice(v,Math.min(v+y,T)))):w.push(String.fromCharCode.apply(null,h.subarray(v,Math.min(v+y,T)))),v+=y;return w.join("")},stringifyByChar:function(h){for(var g="",y=0;y<h.length;y++)g+=String.fromCharCode(h[y]);return g},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function m(h){var g=65536,y=n.getTypeOf(h),w=!0;if(y==="uint8array"?w=d.applyCanBeUsed.uint8array:y==="nodebuffer"&&(w=d.applyCanBeUsed.nodebuffer),w)for(;1<g;)try{return d.stringifyByChunk(h,y,g)}catch{g=Math.floor(g/2)}return d.stringifyByChar(h)}function u(h,g){for(var y=0;y<h.length;y++)g[y]=h[y];return g}n.applyFromCharCode=m;var p={};p.string={string:c,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return p.string.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:function(h){return f(h,r.allocBuffer(h.length))}},p.array={string:m,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(h)}},p.arraybuffer={string:function(h){return m(new Uint8Array(h))},array:function(h){return u(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(new Uint8Array(h))}},p.uint8array={string:m,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return r.newBufferFrom(h)}},p.nodebuffer={string:m,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return p.nodebuffer.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:c},n.transformTo=function(h,g){if(g=g||"",!h)return g;n.checkSupport(h);var y=n.getTypeOf(g);return p[y][h](g)},n.resolve=function(h){for(var g=h.split("/"),y=[],w=0;w<g.length;w++){var v=g[w];v==="."||v===""&&w!==0&&w!==g.length-1||(v===".."?y.pop():y.push(v))}return y.join("/")},n.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":o.nodebuffer&&r.isBuffer(h)?"nodebuffer":o.uint8array&&h instanceof Uint8Array?"uint8array":o.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(h){if(!o[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(h){var g,y,w="";for(y=0;y<(h||"").length;y++)w+="\\x"+((g=h.charCodeAt(y))<16?"0":"")+g.toString(16).toUpperCase();return w},n.delay=function(h,g,y){setImmediate(function(){h.apply(y||null,g||[])})},n.inherits=function(h,g){function y(){}y.prototype=g.prototype,h.prototype=new y},n.extend=function(){var h,g,y={};for(h=0;h<arguments.length;h++)for(g in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],g)&&y[g]===void 0&&(y[g]=arguments[h][g]);return y},n.prepareContent=function(h,g,y,w,v){return l.Promise.resolve(g).then(function(T){return o.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,E){var P=new FileReader;P.onload=function(I){_(I.target.result)},P.onerror=function(I){E(I.target.error)},P.readAsArrayBuffer(T)}):T}).then(function(T){var _=n.getTypeOf(T);return _?(_==="arraybuffer"?T=n.transformTo("uint8array",T):_==="string"&&(v?T=s.decode(T):y&&w!==!0&&(T=(function(E){return f(E,o.uint8array?new Uint8Array(E.length):new Array(E.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,n){var o=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function f(d){this.files=[],this.loadOptions=d}f.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(m)+", expected "+s.pretty(d)+")")}},isSignature:function(d,m){var u=this.reader.index;this.reader.setIndex(d);var p=this.reader.readString(4)===m;return this.reader.setIndex(u),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",u=s.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,u,p=this.zip64EndOfCentralSize-44;0<p;)d=this.reader.readInt(2),m=this.reader.readInt(4),u=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var p=m-u;if(0<p)this.isSignature(m,r.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(d){this.reader=o(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,n){var o=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),f=i("./compressions"),d=i("./support");function m(u,p){this.options=u,this.loadOptions=p}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var p,h;if(u.skip(22),this.fileNameLength=u.readInt(2),h=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(g){for(var y in f)if(Object.prototype.hasOwnProperty.call(f,y)&&f[y].magic===g)return f[y];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,p,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var p=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(p),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=o(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var p,h,g,y=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<y;)p=u.readInt(2),h=u.readInt(2),g=u.readData(h),this.extraFields[p]={id:p,length:h,value:g};u.setIndex(y)},handleUTF8:function(){var u=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var h=s.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var y=s.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var p=o(u.value);return p.readInt(1)!==1||l(this.fileName)!==p.readInt(4)?null:c.utf8decode(p.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var p=o(u.value);return p.readInt(1)!==1||l(this.fileComment)!==p.readInt(4)?null:c.utf8decode(p.readData(u.length-5))}return null}},a.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,n){function o(p,h,g){this.name=p,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=h,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),f=i("./stream/GenericWorker");o.prototype={internalStream:function(p){var h=null,g="string";try{if(!p)throw new Error("No output type specified.");var y=(g=p.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),h=this._decompressWorker();var w=!this._dataBinary;w&&!y&&(h=h.pipe(new l.Utf8EncodeWorker)),!w&&y&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(v){(h=new f("error")).error(v)}return new s(h,g,"")},async:function(p,h){return this.internalStream(p).accumulate(h)},nodeStream:function(p,h){return this.internalStream(p||"nodebuffer").toNodejsStream(h)},_compressWorker:function(p,h){if(this._data instanceof c&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,p,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)o.prototype[d[u]]=m;a.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,n){(function(o){var s,r,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var c=0,f=new l(p),d=o.document.createTextNode("");f.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(o.setImmediate||o.MessageChannel===void 0)s="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var h=o.document.createElement("script");h.onreadystatechange=function(){p(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},o.document.documentElement.appendChild(h)}:function(){setTimeout(p,0)};else{var m=new o.MessageChannel;m.port1.onmessage=p,s=function(){m.port2.postMessage(0)}}var u=[];function p(){var h,g;r=!0;for(var y=u.length;y;){for(g=u,u=[],h=-1;++h<y;)g[h]();y=u.length}r=!1}a.exports=function(h){u.push(h)!==1||r||s()}}).call(this,typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,n){var o=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function d(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,y!==s&&h(this,y)}function m(y,w,v){this.promise=y,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function u(y,w,v){o(function(){var T;try{T=w(v)}catch(_){return r.reject(y,_)}T===y?r.reject(y,new TypeError("Cannot resolve promise with itself")):r.resolve(y,T)})}function p(y){var w=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof w=="function")return function(){w.apply(y,arguments)}}function h(y,w){var v=!1;function T(P){v||(v=!0,r.reject(y,P))}function _(P){v||(v=!0,r.resolve(y,P))}var E=g(function(){w(_,T)});E.status==="error"&&T(E.value)}function g(y,w){var v={};try{v.value=y(w),v.status="success"}catch(T){v.status="error",v.value=T}return v}(a.exports=d).prototype.finally=function(y){if(typeof y!="function")return this;var w=this.constructor;return this.then(function(v){return w.resolve(y()).then(function(){return v})},function(v){return w.resolve(y()).then(function(){throw v})})},d.prototype.catch=function(y){return this.then(null,y)},d.prototype.then=function(y,w){if(typeof y!="function"&&this.state===c||typeof w!="function"&&this.state===l)return this;var v=new this.constructor(s);return this.state!==f?u(v,this.state===c?y:w,this.outcome):this.queue.push(new m(v,y,w)),v},m.prototype.callFulfilled=function(y){r.resolve(this.promise,y)},m.prototype.otherCallFulfilled=function(y){u(this.promise,this.onFulfilled,y)},m.prototype.callRejected=function(y){r.reject(this.promise,y)},m.prototype.otherCallRejected=function(y){u(this.promise,this.onRejected,y)},r.resolve=function(y,w){var v=g(p,w);if(v.status==="error")return r.reject(y,v.value);var T=v.value;if(T)h(y,T);else{y.state=c,y.outcome=w;for(var _=-1,E=y.queue.length;++_<E;)y.queue[_].callFulfilled(w)}return y},r.reject=function(y,w){y.state=l,y.outcome=w;for(var v=-1,T=y.queue.length;++v<T;)y.queue[v].callRejected(w);return y},d.resolve=function(y){return y instanceof this?y:r.resolve(new this(s),y)},d.reject=function(y){var w=new this(s);return r.reject(w,y)},d.all=function(y){var w=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=y.length,T=!1;if(!v)return this.resolve([]);for(var _=new Array(v),E=0,P=-1,I=new this(s);++P<v;)A(y[P],P);return I;function A(H,$){w.resolve(H).then(function(C){_[$]=C,++E!==v||T||(T=!0,r.resolve(I,_))},function(C){T||(T=!0,r.reject(I,C))})}},d.race=function(y){var w=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=y.length,T=!1;if(!v)return this.resolve([]);for(var _=-1,E=new this(s);++_<v;)P=y[_],w.resolve(P).then(function(I){T||(T=!0,r.resolve(E,I))},function(I){T||(T=!0,r.reject(E,I))});var P;return E}},{immediate:36}],38:[function(i,a,n){var o={};(0,i("./lib/utils/common").assign)(o,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,n){var o=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),f=Object.prototype.toString,d=0,m=-1,u=0,p=8;function h(y){if(!(this instanceof h))return new h(y);this.options=s.assign({level:m,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},y||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=o.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(v!==d)throw new Error(l[v]);if(w.header&&o.deflateSetHeader(this.strm,w.header),w.dictionary){var T;if(T=typeof w.dictionary=="string"?r.string2buf(w.dictionary):f.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(v=o.deflateSetDictionary(this.strm,T))!==d)throw new Error(l[v]);this._dict_set=!0}}function g(y,w){var v=new h(w);if(v.push(y,!0),v.err)throw v.msg||l[v.err];return v.result}h.prototype.push=function(y,w){var v,T,_=this.strm,E=this.options.chunkSize;if(this.ended)return!1;T=w===~~w?w:w===!0?4:0,typeof y=="string"?_.input=r.string2buf(y):f.call(y)==="[object ArrayBuffer]"?_.input=new Uint8Array(y):_.input=y,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(E),_.next_out=0,_.avail_out=E),(v=o.deflate(_,T))!==1&&v!==d)return this.onEnd(v),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&v!==1);return T===4?(v=o.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===d):T!==2||(this.onEnd(d),!(_.avail_out=0))},h.prototype.onData=function(y){this.chunks.push(y)},h.prototype.onEnd=function(y){y===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},n.Deflate=h,n.deflate=g,n.deflateRaw=function(y,w){return(w=w||{}).raw=!0,g(y,w)},n.gzip=function(y,w){return(w=w||{}).gzip=!0,g(y,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,n){var o=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),f=i("./zlib/zstream"),d=i("./zlib/gzheader"),m=Object.prototype.toString;function u(h){if(!(this instanceof u))return new u(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||h&&h.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var y=o.inflateInit2(this.strm,g.windowBits);if(y!==l.Z_OK)throw new Error(c[y]);this.header=new d,o.inflateGetHeader(this.strm,this.header)}function p(h,g){var y=new u(g);if(y.push(h,!0),y.err)throw y.msg||c[y.err];return y.result}u.prototype.push=function(h,g){var y,w,v,T,_,E,P=this.strm,I=this.options.chunkSize,A=this.options.dictionary,H=!1;if(this.ended)return!1;w=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?P.input=r.binstring2buf(h):m.call(h)==="[object ArrayBuffer]"?P.input=new Uint8Array(h):P.input=h,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new s.Buf8(I),P.next_out=0,P.avail_out=I),(y=o.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&A&&(E=typeof A=="string"?r.string2buf(A):m.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,y=o.inflateSetDictionary(this.strm,E)),y===l.Z_BUF_ERROR&&H===!0&&(y=l.Z_OK,H=!1),y!==l.Z_STREAM_END&&y!==l.Z_OK)return this.onEnd(y),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&y!==l.Z_STREAM_END&&(P.avail_in!==0||w!==l.Z_FINISH&&w!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=r.utf8border(P.output,P.next_out),T=P.next_out-v,_=r.buf2string(P.output,v),P.next_out=T,P.avail_out=I-T,T&&s.arraySet(P.output,P.output,v,T,0),this.onData(_)):this.onData(s.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(H=!0)}while((0<P.avail_in||P.avail_out===0)&&y!==l.Z_STREAM_END);return y===l.Z_STREAM_END&&(w=l.Z_FINISH),w===l.Z_FINISH?(y=o.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===l.Z_OK):w!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},u.prototype.onData=function(h){this.chunks.push(h)},u.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},n.Inflate=u,n.inflate=p,n.inflateRaw=function(h,g){return(g=g||{}).raw=!0,p(h,g)},n.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,n){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var d in f)f.hasOwnProperty(d)&&(l[d]=f[d])}}return l},n.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,f,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+d),m);else for(var u=0;u<d;u++)l[m+u]=c[f+u]},flattenChunks:function(l){var c,f,d,m,u,p;for(c=d=0,f=l.length;c<f;c++)d+=l[c].length;for(p=new Uint8Array(d),c=m=0,f=l.length;c<f;c++)u=l[c],p.set(u,m),m+=u.length;return p}},r={arraySet:function(l,c,f,d,m){for(var u=0;u<d;u++)l[m+u]=c[f+u]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,s)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,r))},n.setTyped(o)},{}],42:[function(i,a,n){var o=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new o.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(d,m){if(m<65537&&(d.subarray&&r||!d.subarray&&s))return String.fromCharCode.apply(null,o.shrinkBuf(d,m));for(var u="",p=0;p<m;p++)u+=String.fromCharCode(d[p]);return u}l[254]=l[254]=1,n.string2buf=function(d){var m,u,p,h,g,y=d.length,w=0;for(h=0;h<y;h++)(64512&(u=d.charCodeAt(h)))==55296&&h+1<y&&(64512&(p=d.charCodeAt(h+1)))==56320&&(u=65536+(u-55296<<10)+(p-56320),h++),w+=u<128?1:u<2048?2:u<65536?3:4;for(m=new o.Buf8(w),h=g=0;g<w;h++)(64512&(u=d.charCodeAt(h)))==55296&&h+1<y&&(64512&(p=d.charCodeAt(h+1)))==56320&&(u=65536+(u-55296<<10)+(p-56320),h++),u<128?m[g++]=u:(u<2048?m[g++]=192|u>>>6:(u<65536?m[g++]=224|u>>>12:(m[g++]=240|u>>>18,m[g++]=128|u>>>12&63),m[g++]=128|u>>>6&63),m[g++]=128|63&u);return m},n.buf2binstring=function(d){return f(d,d.length)},n.binstring2buf=function(d){for(var m=new o.Buf8(d.length),u=0,p=m.length;u<p;u++)m[u]=d.charCodeAt(u);return m},n.buf2string=function(d,m){var u,p,h,g,y=m||d.length,w=new Array(2*y);for(u=p=0;u<y;)if((h=d[u++])<128)w[p++]=h;else if(4<(g=l[h]))w[p++]=65533,u+=g-1;else{for(h&=g===2?31:g===3?15:7;1<g&&u<y;)h=h<<6|63&d[u++],g--;1<g?w[p++]=65533:h<65536?w[p++]=h:(h-=65536,w[p++]=55296|h>>10&1023,w[p++]=56320|1023&h)}return f(w,p)},n.utf8border=function(d,m){var u;for((m=m||d.length)>d.length&&(m=d.length),u=m-1;0<=u&&(192&d[u])==128;)u--;return u<0||u===0?m:u+l[d[u]]>m?u:m}},{"./common":41}],43:[function(i,a,n){a.exports=function(o,s,r,l){for(var c=65535&o|0,f=o>>>16&65535|0,d=0;r!==0;){for(r-=d=2e3<r?2e3:r;f=f+(c=c+s[l++]|0)|0,--d;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(i,a,n){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,n){var o=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var f=o,d=c+l;s^=-1;for(var m=c;m<d;m++)s=s>>>8^f[255&(s^r[m])];return-1^s}},{}],46:[function(i,a,n){var o,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),f=i("./messages"),d=0,m=4,u=0,p=-2,h=-1,g=4,y=2,w=8,v=9,T=286,_=30,E=19,P=2*T+1,I=15,A=3,H=258,$=H+A+1,C=42,F=113,k=1,U=2,X=3,L=4;function ae(b,W){return b.msg=f[W],W}function V(b){return(b<<1)-(4<b?9:0)}function te(b){for(var W=b.length;0<=--W;)b[W]=0}function N(b){var W=b.state,q=W.pending;q>b.avail_out&&(q=b.avail_out),q!==0&&(s.arraySet(b.output,W.pending_buf,W.pending_out,q,b.next_out),b.next_out+=q,W.pending_out+=q,b.total_out+=q,b.avail_out-=q,W.pending-=q,W.pending===0&&(W.pending_out=0))}function O(b,W){r._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,W),b.block_start=b.strstart,N(b.strm)}function ne(b,W){b.pending_buf[b.pending++]=W}function ee(b,W){b.pending_buf[b.pending++]=W>>>8&255,b.pending_buf[b.pending++]=255&W}function Q(b,W){var q,S,x=b.max_chain_length,B=b.strstart,j=b.prev_length,G=b.nice_match,z=b.strstart>b.w_size-$?b.strstart-(b.w_size-$):0,Z=b.window,ie=b.w_mask,J=b.prev,re=b.strstart+H,be=Z[B+j-1],he=Z[B+j];b.prev_length>=b.good_match&&(x>>=2),G>b.lookahead&&(G=b.lookahead);do if(Z[(q=W)+j]===he&&Z[q+j-1]===be&&Z[q]===Z[B]&&Z[++q]===Z[B+1]){B+=2,q++;do;while(Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&B<re);if(S=H-(re-B),B=re-H,j<S){if(b.match_start=W,G<=(j=S))break;be=Z[B+j-1],he=Z[B+j]}}while((W=J[W&ie])>z&&--x!=0);return j<=b.lookahead?j:b.lookahead}function we(b){var W,q,S,x,B,j,G,z,Z,ie,J=b.w_size;do{if(x=b.window_size-b.lookahead-b.strstart,b.strstart>=J+(J-$)){for(s.arraySet(b.window,b.window,J,J,0),b.match_start-=J,b.strstart-=J,b.block_start-=J,W=q=b.hash_size;S=b.head[--W],b.head[W]=J<=S?S-J:0,--q;);for(W=q=J;S=b.prev[--W],b.prev[W]=J<=S?S-J:0,--q;);x+=J}if(b.strm.avail_in===0)break;if(j=b.strm,G=b.window,z=b.strstart+b.lookahead,Z=x,ie=void 0,ie=j.avail_in,Z<ie&&(ie=Z),q=ie===0?0:(j.avail_in-=ie,s.arraySet(G,j.input,j.next_in,ie,z),j.state.wrap===1?j.adler=l(j.adler,G,ie,z):j.state.wrap===2&&(j.adler=c(j.adler,G,ie,z)),j.next_in+=ie,j.total_in+=ie,ie),b.lookahead+=q,b.lookahead+b.insert>=A)for(B=b.strstart-b.insert,b.ins_h=b.window[B],b.ins_h=(b.ins_h<<b.hash_shift^b.window[B+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[B+A-1])&b.hash_mask,b.prev[B&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=B,B++,b.insert--,!(b.lookahead+b.insert<A)););}while(b.lookahead<$&&b.strm.avail_in!==0)}function Me(b,W){for(var q,S;;){if(b.lookahead<$){if(we(b),b.lookahead<$&&W===d)return k;if(b.lookahead===0)break}if(q=0,b.lookahead>=A&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+A-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),q!==0&&b.strstart-q<=b.w_size-$&&(b.match_length=Q(b,q)),b.match_length>=A)if(S=r._tr_tally(b,b.strstart-b.match_start,b.match_length-A),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=A){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+A-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else S=r._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(S&&(O(b,!1),b.strm.avail_out===0))return k}return b.insert=b.strstart<A-1?b.strstart:A-1,W===m?(O(b,!0),b.strm.avail_out===0?X:L):b.last_lit&&(O(b,!1),b.strm.avail_out===0)?k:U}function fe(b,W){for(var q,S,x;;){if(b.lookahead<$){if(we(b),b.lookahead<$&&W===d)return k;if(b.lookahead===0)break}if(q=0,b.lookahead>=A&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+A-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=A-1,q!==0&&b.prev_length<b.max_lazy_match&&b.strstart-q<=b.w_size-$&&(b.match_length=Q(b,q),b.match_length<=5&&(b.strategy===1||b.match_length===A&&4096<b.strstart-b.match_start)&&(b.match_length=A-1)),b.prev_length>=A&&b.match_length<=b.prev_length){for(x=b.strstart+b.lookahead-A,S=r._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-A),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=x&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+A-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=A-1,b.strstart++,S&&(O(b,!1),b.strm.avail_out===0))return k}else if(b.match_available){if((S=r._tr_tally(b,0,b.window[b.strstart-1]))&&O(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return k}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(S=r._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<A-1?b.strstart:A-1,W===m?(O(b,!0),b.strm.avail_out===0?X:L):b.last_lit&&(O(b,!1),b.strm.avail_out===0)?k:U}function pe(b,W,q,S,x){this.good_length=b,this.max_lazy=W,this.nice_length=q,this.max_chain=S,this.func=x}function Pe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*P),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*E+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(I+1),this.heap=new s.Buf16(2*T+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(b){var W;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=y,(W=b.state).pending=0,W.pending_out=0,W.wrap<0&&(W.wrap=-W.wrap),W.status=W.wrap?C:F,b.adler=W.wrap===2?0:1,W.last_flush=d,r._tr_init(W),u):ae(b,p)}function Ke(b){var W=_e(b);return W===u&&(function(q){q.window_size=2*q.w_size,te(q.head),q.max_lazy_match=o[q.level].max_lazy,q.good_match=o[q.level].good_length,q.nice_match=o[q.level].nice_length,q.max_chain_length=o[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=A-1,q.match_available=0,q.ins_h=0})(b.state),W}function Ne(b,W,q,S,x,B){if(!b)return p;var j=1;if(W===h&&(W=6),S<0?(j=0,S=-S):15<S&&(j=2,S-=16),x<1||v<x||q!==w||S<8||15<S||W<0||9<W||B<0||g<B)return ae(b,p);S===8&&(S=9);var G=new Pe;return(b.state=G).strm=b,G.wrap=j,G.gzhead=null,G.w_bits=S,G.w_size=1<<G.w_bits,G.w_mask=G.w_size-1,G.hash_bits=x+7,G.hash_size=1<<G.hash_bits,G.hash_mask=G.hash_size-1,G.hash_shift=~~((G.hash_bits+A-1)/A),G.window=new s.Buf8(2*G.w_size),G.head=new s.Buf16(G.hash_size),G.prev=new s.Buf16(G.w_size),G.lit_bufsize=1<<x+6,G.pending_buf_size=4*G.lit_bufsize,G.pending_buf=new s.Buf8(G.pending_buf_size),G.d_buf=1*G.lit_bufsize,G.l_buf=3*G.lit_bufsize,G.level=W,G.strategy=B,G.method=q,Ke(b)}o=[new pe(0,0,0,0,function(b,W){var q=65535;for(q>b.pending_buf_size-5&&(q=b.pending_buf_size-5);;){if(b.lookahead<=1){if(we(b),b.lookahead===0&&W===d)return k;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var S=b.block_start+q;if((b.strstart===0||b.strstart>=S)&&(b.lookahead=b.strstart-S,b.strstart=S,O(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-$&&(O(b,!1),b.strm.avail_out===0))return k}return b.insert=0,W===m?(O(b,!0),b.strm.avail_out===0?X:L):(b.strstart>b.block_start&&(O(b,!1),b.strm.avail_out),k)}),new pe(4,4,8,4,Me),new pe(4,5,16,8,Me),new pe(4,6,32,32,Me),new pe(4,4,16,16,fe),new pe(8,16,32,32,fe),new pe(8,16,128,128,fe),new pe(8,32,128,256,fe),new pe(32,128,258,1024,fe),new pe(32,258,258,4096,fe)],n.deflateInit=function(b,W){return Ne(b,W,w,15,8,0)},n.deflateInit2=Ne,n.deflateReset=Ke,n.deflateResetKeep=_e,n.deflateSetHeader=function(b,W){return b&&b.state?b.state.wrap!==2?p:(b.state.gzhead=W,u):p},n.deflate=function(b,W){var q,S,x,B;if(!b||!b.state||5<W||W<0)return b?ae(b,p):p;if(S=b.state,!b.output||!b.input&&b.avail_in!==0||S.status===666&&W!==m)return ae(b,b.avail_out===0?-5:p);if(S.strm=b,q=S.last_flush,S.last_flush=W,S.status===C)if(S.wrap===2)b.adler=0,ne(S,31),ne(S,139),ne(S,8),S.gzhead?(ne(S,(S.gzhead.text?1:0)+(S.gzhead.hcrc?2:0)+(S.gzhead.extra?4:0)+(S.gzhead.name?8:0)+(S.gzhead.comment?16:0)),ne(S,255&S.gzhead.time),ne(S,S.gzhead.time>>8&255),ne(S,S.gzhead.time>>16&255),ne(S,S.gzhead.time>>24&255),ne(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),ne(S,255&S.gzhead.os),S.gzhead.extra&&S.gzhead.extra.length&&(ne(S,255&S.gzhead.extra.length),ne(S,S.gzhead.extra.length>>8&255)),S.gzhead.hcrc&&(b.adler=c(b.adler,S.pending_buf,S.pending,0)),S.gzindex=0,S.status=69):(ne(S,0),ne(S,0),ne(S,0),ne(S,0),ne(S,0),ne(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),ne(S,3),S.status=F);else{var j=w+(S.w_bits-8<<4)<<8;j|=(2<=S.strategy||S.level<2?0:S.level<6?1:S.level===6?2:3)<<6,S.strstart!==0&&(j|=32),j+=31-j%31,S.status=F,ee(S,j),S.strstart!==0&&(ee(S,b.adler>>>16),ee(S,65535&b.adler)),b.adler=1}if(S.status===69)if(S.gzhead.extra){for(x=S.pending;S.gzindex<(65535&S.gzhead.extra.length)&&(S.pending!==S.pending_buf_size||(S.gzhead.hcrc&&S.pending>x&&(b.adler=c(b.adler,S.pending_buf,S.pending-x,x)),N(b),x=S.pending,S.pending!==S.pending_buf_size));)ne(S,255&S.gzhead.extra[S.gzindex]),S.gzindex++;S.gzhead.hcrc&&S.pending>x&&(b.adler=c(b.adler,S.pending_buf,S.pending-x,x)),S.gzindex===S.gzhead.extra.length&&(S.gzindex=0,S.status=73)}else S.status=73;if(S.status===73)if(S.gzhead.name){x=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>x&&(b.adler=c(b.adler,S.pending_buf,S.pending-x,x)),N(b),x=S.pending,S.pending===S.pending_buf_size)){B=1;break}B=S.gzindex<S.gzhead.name.length?255&S.gzhead.name.charCodeAt(S.gzindex++):0,ne(S,B)}while(B!==0);S.gzhead.hcrc&&S.pending>x&&(b.adler=c(b.adler,S.pending_buf,S.pending-x,x)),B===0&&(S.gzindex=0,S.status=91)}else S.status=91;if(S.status===91)if(S.gzhead.comment){x=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>x&&(b.adler=c(b.adler,S.pending_buf,S.pending-x,x)),N(b),x=S.pending,S.pending===S.pending_buf_size)){B=1;break}B=S.gzindex<S.gzhead.comment.length?255&S.gzhead.comment.charCodeAt(S.gzindex++):0,ne(S,B)}while(B!==0);S.gzhead.hcrc&&S.pending>x&&(b.adler=c(b.adler,S.pending_buf,S.pending-x,x)),B===0&&(S.status=103)}else S.status=103;if(S.status===103&&(S.gzhead.hcrc?(S.pending+2>S.pending_buf_size&&N(b),S.pending+2<=S.pending_buf_size&&(ne(S,255&b.adler),ne(S,b.adler>>8&255),b.adler=0,S.status=F)):S.status=F),S.pending!==0){if(N(b),b.avail_out===0)return S.last_flush=-1,u}else if(b.avail_in===0&&V(W)<=V(q)&&W!==m)return ae(b,-5);if(S.status===666&&b.avail_in!==0)return ae(b,-5);if(b.avail_in!==0||S.lookahead!==0||W!==d&&S.status!==666){var G=S.strategy===2?(function(z,Z){for(var ie;;){if(z.lookahead===0&&(we(z),z.lookahead===0)){if(Z===d)return k;break}if(z.match_length=0,ie=r._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++,ie&&(O(z,!1),z.strm.avail_out===0))return k}return z.insert=0,Z===m?(O(z,!0),z.strm.avail_out===0?X:L):z.last_lit&&(O(z,!1),z.strm.avail_out===0)?k:U})(S,W):S.strategy===3?(function(z,Z){for(var ie,J,re,be,he=z.window;;){if(z.lookahead<=H){if(we(z),z.lookahead<=H&&Z===d)return k;if(z.lookahead===0)break}if(z.match_length=0,z.lookahead>=A&&0<z.strstart&&(J=he[re=z.strstart-1])===he[++re]&&J===he[++re]&&J===he[++re]){be=z.strstart+H;do;while(J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&re<be);z.match_length=H-(be-re),z.match_length>z.lookahead&&(z.match_length=z.lookahead)}if(z.match_length>=A?(ie=r._tr_tally(z,1,z.match_length-A),z.lookahead-=z.match_length,z.strstart+=z.match_length,z.match_length=0):(ie=r._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++),ie&&(O(z,!1),z.strm.avail_out===0))return k}return z.insert=0,Z===m?(O(z,!0),z.strm.avail_out===0?X:L):z.last_lit&&(O(z,!1),z.strm.avail_out===0)?k:U})(S,W):o[S.level].func(S,W);if(G!==X&&G!==L||(S.status=666),G===k||G===X)return b.avail_out===0&&(S.last_flush=-1),u;if(G===U&&(W===1?r._tr_align(S):W!==5&&(r._tr_stored_block(S,0,0,!1),W===3&&(te(S.head),S.lookahead===0&&(S.strstart=0,S.block_start=0,S.insert=0))),N(b),b.avail_out===0))return S.last_flush=-1,u}return W!==m?u:S.wrap<=0?1:(S.wrap===2?(ne(S,255&b.adler),ne(S,b.adler>>8&255),ne(S,b.adler>>16&255),ne(S,b.adler>>24&255),ne(S,255&b.total_in),ne(S,b.total_in>>8&255),ne(S,b.total_in>>16&255),ne(S,b.total_in>>24&255)):(ee(S,b.adler>>>16),ee(S,65535&b.adler)),N(b),0<S.wrap&&(S.wrap=-S.wrap),S.pending!==0?u:1)},n.deflateEnd=function(b){var W;return b&&b.state?(W=b.state.status)!==C&&W!==69&&W!==73&&W!==91&&W!==103&&W!==F&&W!==666?ae(b,p):(b.state=null,W===F?ae(b,-3):u):p},n.deflateSetDictionary=function(b,W){var q,S,x,B,j,G,z,Z,ie=W.length;if(!b||!b.state||(B=(q=b.state).wrap)===2||B===1&&q.status!==C||q.lookahead)return p;for(B===1&&(b.adler=l(b.adler,W,ie,0)),q.wrap=0,ie>=q.w_size&&(B===0&&(te(q.head),q.strstart=0,q.block_start=0,q.insert=0),Z=new s.Buf8(q.w_size),s.arraySet(Z,W,ie-q.w_size,q.w_size,0),W=Z,ie=q.w_size),j=b.avail_in,G=b.next_in,z=b.input,b.avail_in=ie,b.next_in=0,b.input=W,we(q);q.lookahead>=A;){for(S=q.strstart,x=q.lookahead-(A-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[S+A-1])&q.hash_mask,q.prev[S&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=S,S++,--x;);q.strstart=S,q.lookahead=A-1,we(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=A-1,q.match_available=0,b.next_in=G,b.input=z,b.avail_in=j,q.wrap=B,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,n){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,n){a.exports=function(o,s){var r,l,c,f,d,m,u,p,h,g,y,w,v,T,_,E,P,I,A,H,$,C,F,k,U;r=o.state,l=o.next_in,k=o.input,c=l+(o.avail_in-5),f=o.next_out,U=o.output,d=f-(s-o.avail_out),m=f+(o.avail_out-257),u=r.dmax,p=r.wsize,h=r.whave,g=r.wnext,y=r.window,w=r.hold,v=r.bits,T=r.lencode,_=r.distcode,E=(1<<r.lenbits)-1,P=(1<<r.distbits)-1;e:do{v<15&&(w+=k[l++]<<v,v+=8,w+=k[l++]<<v,v+=8),I=T[w&E];t:for(;;){if(w>>>=A=I>>>24,v-=A,(A=I>>>16&255)===0)U[f++]=65535&I;else{if(!(16&A)){if((64&A)==0){I=T[(65535&I)+(w&(1<<A)-1)];continue t}if(32&A){r.mode=12;break e}o.msg="invalid literal/length code",r.mode=30;break e}H=65535&I,(A&=15)&&(v<A&&(w+=k[l++]<<v,v+=8),H+=w&(1<<A)-1,w>>>=A,v-=A),v<15&&(w+=k[l++]<<v,v+=8,w+=k[l++]<<v,v+=8),I=_[w&P];i:for(;;){if(w>>>=A=I>>>24,v-=A,!(16&(A=I>>>16&255))){if((64&A)==0){I=_[(65535&I)+(w&(1<<A)-1)];continue i}o.msg="invalid distance code",r.mode=30;break e}if($=65535&I,v<(A&=15)&&(w+=k[l++]<<v,(v+=8)<A&&(w+=k[l++]<<v,v+=8)),u<($+=w&(1<<A)-1)){o.msg="invalid distance too far back",r.mode=30;break e}if(w>>>=A,v-=A,(A=f-d)<$){if(h<(A=$-A)&&r.sane){o.msg="invalid distance too far back",r.mode=30;break e}if(F=y,(C=0)===g){if(C+=p-A,A<H){for(H-=A;U[f++]=y[C++],--A;);C=f-$,F=U}}else if(g<A){if(C+=p+g-A,(A-=g)<H){for(H-=A;U[f++]=y[C++],--A;);if(C=0,g<H){for(H-=A=g;U[f++]=y[C++],--A;);C=f-$,F=U}}}else if(C+=g-A,A<H){for(H-=A;U[f++]=y[C++],--A;);C=f-$,F=U}for(;2<H;)U[f++]=F[C++],U[f++]=F[C++],U[f++]=F[C++],H-=3;H&&(U[f++]=F[C++],1<H&&(U[f++]=F[C++]))}else{for(C=f-$;U[f++]=U[C++],U[f++]=U[C++],U[f++]=U[C++],2<(H-=3););H&&(U[f++]=U[C++],1<H&&(U[f++]=U[C++]))}break}}break}}while(l<c&&f<m);l-=H=v>>3,w&=(1<<(v-=H<<3))-1,o.next_in=l,o.next_out=f,o.avail_in=l<c?c-l+5:5-(l-c),o.avail_out=f<m?m-f+257:257-(f-m),r.hold=w,r.bits=v}},{}],49:[function(i,a,n){var o=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),f=1,d=2,m=0,u=-2,p=1,h=852,g=592;function y(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(C){var F;return C&&C.state?(F=C.state,C.total_in=C.total_out=F.total=0,C.msg="",F.wrap&&(C.adler=1&F.wrap),F.mode=p,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new o.Buf32(h),F.distcode=F.distdyn=new o.Buf32(g),F.sane=1,F.back=-1,m):u}function T(C){var F;return C&&C.state?((F=C.state).wsize=0,F.whave=0,F.wnext=0,v(C)):u}function _(C,F){var k,U;return C&&C.state?(U=C.state,F<0?(k=0,F=-F):(k=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?u:(U.window!==null&&U.wbits!==F&&(U.window=null),U.wrap=k,U.wbits=F,T(C))):u}function E(C,F){var k,U;return C?(U=new w,(C.state=U).window=null,(k=_(C,F))!==m&&(C.state=null),k):u}var P,I,A=!0;function H(C){if(A){var F;for(P=new o.Buf32(512),I=new o.Buf32(32),F=0;F<144;)C.lens[F++]=8;for(;F<256;)C.lens[F++]=9;for(;F<280;)C.lens[F++]=7;for(;F<288;)C.lens[F++]=8;for(c(f,C.lens,0,288,P,0,C.work,{bits:9}),F=0;F<32;)C.lens[F++]=5;c(d,C.lens,0,32,I,0,C.work,{bits:5}),A=!1}C.lencode=P,C.lenbits=9,C.distcode=I,C.distbits=5}function $(C,F,k,U){var X,L=C.state;return L.window===null&&(L.wsize=1<<L.wbits,L.wnext=0,L.whave=0,L.window=new o.Buf8(L.wsize)),U>=L.wsize?(o.arraySet(L.window,F,k-L.wsize,L.wsize,0),L.wnext=0,L.whave=L.wsize):(U<(X=L.wsize-L.wnext)&&(X=U),o.arraySet(L.window,F,k-U,X,L.wnext),(U-=X)?(o.arraySet(L.window,F,k-U,U,0),L.wnext=U,L.whave=L.wsize):(L.wnext+=X,L.wnext===L.wsize&&(L.wnext=0),L.whave<L.wsize&&(L.whave+=X))),0}n.inflateReset=T,n.inflateReset2=_,n.inflateResetKeep=v,n.inflateInit=function(C){return E(C,15)},n.inflateInit2=E,n.inflate=function(C,F){var k,U,X,L,ae,V,te,N,O,ne,ee,Q,we,Me,fe,pe,Pe,_e,Ke,Ne,b,W,q,S,x=0,B=new o.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return u;(k=C.state).mode===12&&(k.mode=13),ae=C.next_out,X=C.output,te=C.avail_out,L=C.next_in,U=C.input,V=C.avail_in,N=k.hold,O=k.bits,ne=V,ee=te,W=m;e:for(;;)switch(k.mode){case p:if(k.wrap===0){k.mode=13;break}for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(2&k.wrap&&N===35615){B[k.check=0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0),O=N=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&N)<<8)+(N>>8))%31){C.msg="incorrect header check",k.mode=30;break}if((15&N)!=8){C.msg="unknown compression method",k.mode=30;break}if(O-=4,b=8+(15&(N>>>=4)),k.wbits===0)k.wbits=b;else if(b>k.wbits){C.msg="invalid window size",k.mode=30;break}k.dmax=1<<b,C.adler=k.check=1,k.mode=512&N?10:12,O=N=0;break;case 2:for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(k.flags=N,(255&k.flags)!=8){C.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){C.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=N>>8&1),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),O=N=0,k.mode=3;case 3:for(;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.head&&(k.head.time=N),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,B[2]=N>>>16&255,B[3]=N>>>24&255,k.check=r(k.check,B,4,0)),O=N=0,k.mode=4;case 4:for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.head&&(k.head.xflags=255&N,k.head.os=N>>8),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),O=N=0,k.mode=5;case 5:if(1024&k.flags){for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.length=N,k.head&&(k.head.extra_len=N),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),O=N=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(V<(Q=k.length)&&(Q=V),Q&&(k.head&&(b=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),o.arraySet(k.head.extra,U,L,Q,b)),512&k.flags&&(k.check=r(k.check,U,Q,L)),V-=Q,L+=Q,k.length-=Q),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(V===0)break e;for(Q=0;b=U[L+Q++],k.head&&b&&k.length<65536&&(k.head.name+=String.fromCharCode(b)),b&&Q<V;);if(512&k.flags&&(k.check=r(k.check,U,Q,L)),V-=Q,L+=Q,b)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(V===0)break e;for(Q=0;b=U[L+Q++],k.head&&b&&k.length<65536&&(k.head.comment+=String.fromCharCode(b)),b&&Q<V;);if(512&k.flags&&(k.check=r(k.check,U,Q,L)),V-=Q,L+=Q,b)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(N!==(65535&k.check)){C.msg="header crc mismatch",k.mode=30;break}O=N=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),C.adler=k.check=0,k.mode=12;break;case 10:for(;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}C.adler=k.check=y(N),O=N=0,k.mode=11;case 11:if(k.havedict===0)return C.next_out=ae,C.avail_out=te,C.next_in=L,C.avail_in=V,k.hold=N,k.bits=O,2;C.adler=k.check=1,k.mode=12;case 12:if(F===5||F===6)break e;case 13:if(k.last){N>>>=7&O,O-=7&O,k.mode=27;break}for(;O<3;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}switch(k.last=1&N,O-=1,3&(N>>>=1)){case 0:k.mode=14;break;case 1:if(H(k),k.mode=20,F!==6)break;N>>>=2,O-=2;break e;case 2:k.mode=17;break;case 3:C.msg="invalid block type",k.mode=30}N>>>=2,O-=2;break;case 14:for(N>>>=7&O,O-=7&O;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if((65535&N)!=(N>>>16^65535)){C.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&N,O=N=0,k.mode=15,F===6)break e;case 15:k.mode=16;case 16:if(Q=k.length){if(V<Q&&(Q=V),te<Q&&(Q=te),Q===0)break e;o.arraySet(X,U,L,Q,ae),V-=Q,L+=Q,te-=Q,ae+=Q,k.length-=Q;break}k.mode=12;break;case 17:for(;O<14;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(k.nlen=257+(31&N),N>>>=5,O-=5,k.ndist=1+(31&N),N>>>=5,O-=5,k.ncode=4+(15&N),N>>>=4,O-=4,286<k.nlen||30<k.ndist){C.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;O<3;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.lens[j[k.have++]]=7&N,N>>>=3,O-=3}for(;k.have<19;)k.lens[j[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,q={bits:k.lenbits},W=c(0,k.lens,0,19,k.lencode,0,k.work,q),k.lenbits=q.bits,W){C.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;pe=(x=k.lencode[N&(1<<k.lenbits)-1])>>>16&255,Pe=65535&x,!((fe=x>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(Pe<16)N>>>=fe,O-=fe,k.lens[k.have++]=Pe;else{if(Pe===16){for(S=fe+2;O<S;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(N>>>=fe,O-=fe,k.have===0){C.msg="invalid bit length repeat",k.mode=30;break}b=k.lens[k.have-1],Q=3+(3&N),N>>>=2,O-=2}else if(Pe===17){for(S=fe+3;O<S;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}O-=fe,b=0,Q=3+(7&(N>>>=fe)),N>>>=3,O-=3}else{for(S=fe+7;O<S;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}O-=fe,b=0,Q=11+(127&(N>>>=fe)),N>>>=7,O-=7}if(k.have+Q>k.nlen+k.ndist){C.msg="invalid bit length repeat",k.mode=30;break}for(;Q--;)k.lens[k.have++]=b}}if(k.mode===30)break;if(k.lens[256]===0){C.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,q={bits:k.lenbits},W=c(f,k.lens,0,k.nlen,k.lencode,0,k.work,q),k.lenbits=q.bits,W){C.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,q={bits:k.distbits},W=c(d,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,q),k.distbits=q.bits,W){C.msg="invalid distances set",k.mode=30;break}if(k.mode=20,F===6)break e;case 20:k.mode=21;case 21:if(6<=V&&258<=te){C.next_out=ae,C.avail_out=te,C.next_in=L,C.avail_in=V,k.hold=N,k.bits=O,l(C,ee),ae=C.next_out,X=C.output,te=C.avail_out,L=C.next_in,U=C.input,V=C.avail_in,N=k.hold,O=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;pe=(x=k.lencode[N&(1<<k.lenbits)-1])>>>16&255,Pe=65535&x,!((fe=x>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(pe&&(240&pe)==0){for(_e=fe,Ke=pe,Ne=Pe;pe=(x=k.lencode[Ne+((N&(1<<_e+Ke)-1)>>_e)])>>>16&255,Pe=65535&x,!(_e+(fe=x>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}N>>>=_e,O-=_e,k.back+=_e}if(N>>>=fe,O-=fe,k.back+=fe,k.length=Pe,pe===0){k.mode=26;break}if(32&pe){k.back=-1,k.mode=12;break}if(64&pe){C.msg="invalid literal/length code",k.mode=30;break}k.extra=15&pe,k.mode=22;case 22:if(k.extra){for(S=k.extra;O<S;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.length+=N&(1<<k.extra)-1,N>>>=k.extra,O-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;pe=(x=k.distcode[N&(1<<k.distbits)-1])>>>16&255,Pe=65535&x,!((fe=x>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if((240&pe)==0){for(_e=fe,Ke=pe,Ne=Pe;pe=(x=k.distcode[Ne+((N&(1<<_e+Ke)-1)>>_e)])>>>16&255,Pe=65535&x,!(_e+(fe=x>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}N>>>=_e,O-=_e,k.back+=_e}if(N>>>=fe,O-=fe,k.back+=fe,64&pe){C.msg="invalid distance code",k.mode=30;break}k.offset=Pe,k.extra=15&pe,k.mode=24;case 24:if(k.extra){for(S=k.extra;O<S;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.offset+=N&(1<<k.extra)-1,N>>>=k.extra,O-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){C.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(te===0)break e;if(Q=ee-te,k.offset>Q){if((Q=k.offset-Q)>k.whave&&k.sane){C.msg="invalid distance too far back",k.mode=30;break}we=Q>k.wnext?(Q-=k.wnext,k.wsize-Q):k.wnext-Q,Q>k.length&&(Q=k.length),Me=k.window}else Me=X,we=ae-k.offset,Q=k.length;for(te<Q&&(Q=te),te-=Q,k.length-=Q;X[ae++]=Me[we++],--Q;);k.length===0&&(k.mode=21);break;case 26:if(te===0)break e;X[ae++]=k.length,te--,k.mode=21;break;case 27:if(k.wrap){for(;O<32;){if(V===0)break e;V--,N|=U[L++]<<O,O+=8}if(ee-=te,C.total_out+=ee,k.total+=ee,ee&&(C.adler=k.check=k.flags?r(k.check,X,ee,ae-ee):s(k.check,X,ee,ae-ee)),ee=te,(k.flags?N:y(N))!==k.check){C.msg="incorrect data check",k.mode=30;break}O=N=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(N!==(4294967295&k.total)){C.msg="incorrect length check",k.mode=30;break}O=N=0}k.mode=29;case 29:W=1;break e;case 30:W=-3;break e;case 31:return-4;case 32:default:return u}return C.next_out=ae,C.avail_out=te,C.next_in=L,C.avail_in=V,k.hold=N,k.bits=O,(k.wsize||ee!==C.avail_out&&k.mode<30&&(k.mode<27||F!==4))&&$(C,C.output,C.next_out,ee-C.avail_out)?(k.mode=31,-4):(ne-=C.avail_in,ee-=C.avail_out,C.total_in+=ne,C.total_out+=ee,k.total+=ee,k.wrap&&ee&&(C.adler=k.check=k.flags?r(k.check,X,ee,C.next_out-ee):s(k.check,X,ee,C.next_out-ee)),C.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(ne==0&&ee===0||F===4)&&W===m&&(W=-5),W)},n.inflateEnd=function(C){if(!C||!C.state)return u;var F=C.state;return F.window&&(F.window=null),C.state=null,m},n.inflateGetHeader=function(C,F){var k;return C&&C.state?(2&(k=C.state).wrap)==0?u:((k.head=F).done=!1,m):u},n.inflateSetDictionary=function(C,F){var k,U=F.length;return C&&C.state?(k=C.state).wrap!==0&&k.mode!==11?u:k.mode===11&&s(1,F,U,0)!==k.check?-3:$(C,F,U,U)?(k.mode=31,-4):(k.havedict=1,m):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,n){var o=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(f,d,m,u,p,h,g,y){var w,v,T,_,E,P,I,A,H,$=y.bits,C=0,F=0,k=0,U=0,X=0,L=0,ae=0,V=0,te=0,N=0,O=null,ne=0,ee=new o.Buf16(16),Q=new o.Buf16(16),we=null,Me=0;for(C=0;C<=15;C++)ee[C]=0;for(F=0;F<u;F++)ee[d[m+F]]++;for(X=$,U=15;1<=U&&ee[U]===0;U--);if(U<X&&(X=U),U===0)return p[h++]=20971520,p[h++]=20971520,y.bits=1,0;for(k=1;k<U&&ee[k]===0;k++);for(X<k&&(X=k),C=V=1;C<=15;C++)if(V<<=1,(V-=ee[C])<0)return-1;if(0<V&&(f===0||U!==1))return-1;for(Q[1]=0,C=1;C<15;C++)Q[C+1]=Q[C]+ee[C];for(F=0;F<u;F++)d[m+F]!==0&&(g[Q[d[m+F]]++]=F);if(P=f===0?(O=we=g,19):f===1?(O=s,ne-=257,we=r,Me-=257,256):(O=l,we=c,-1),C=k,E=h,ae=F=N=0,T=-1,_=(te=1<<(L=X))-1,f===1&&852<te||f===2&&592<te)return 1;for(;;){for(I=C-ae,H=g[F]<P?(A=0,g[F]):g[F]>P?(A=we[Me+g[F]],O[ne+g[F]]):(A=96,0),w=1<<C-ae,k=v=1<<L;p[E+(N>>ae)+(v-=w)]=I<<24|A<<16|H|0,v!==0;);for(w=1<<C-1;N&w;)w>>=1;if(w!==0?(N&=w-1,N+=w):N=0,F++,--ee[C]==0){if(C===U)break;C=d[m+g[F]]}if(X<C&&(N&_)!==T){for(ae===0&&(ae=X),E+=k,V=1<<(L=C-ae);L+ae<U&&!((V-=ee[L+ae])<=0);)L++,V<<=1;if(te+=1<<L,f===1&&852<te||f===2&&592<te)return 1;p[T=N&_]=X<<24|L<<16|E-h|0}}return N!==0&&(p[E+N]=C-ae<<24|64<<16|0),y.bits=X,0}},{"../utils/common":41}],51:[function(i,a,n){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,n){var o=i("../utils/common"),s=0,r=1;function l(x){for(var B=x.length;0<=--B;)x[B]=0}var c=0,f=29,d=256,m=d+1+f,u=30,p=19,h=2*m+1,g=15,y=16,w=7,v=256,T=16,_=17,E=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],I=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$=new Array(2*(m+2));l($);var C=new Array(2*u);l(C);var F=new Array(512);l(F);var k=new Array(256);l(k);var U=new Array(f);l(U);var X,L,ae,V=new Array(u);function te(x,B,j,G,z){this.static_tree=x,this.extra_bits=B,this.extra_base=j,this.elems=G,this.max_length=z,this.has_stree=x&&x.length}function N(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function O(x){return x<256?F[x]:F[256+(x>>>7)]}function ne(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function ee(x,B,j){x.bi_valid>y-j?(x.bi_buf|=B<<x.bi_valid&65535,ne(x,x.bi_buf),x.bi_buf=B>>y-x.bi_valid,x.bi_valid+=j-y):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=j)}function Q(x,B,j){ee(x,j[2*B],j[2*B+1])}function we(x,B){for(var j=0;j|=1&x,x>>>=1,j<<=1,0<--B;);return j>>>1}function Me(x,B,j){var G,z,Z=new Array(g+1),ie=0;for(G=1;G<=g;G++)Z[G]=ie=ie+j[G-1]<<1;for(z=0;z<=B;z++){var J=x[2*z+1];J!==0&&(x[2*z]=we(Z[J]++,J))}}function fe(x){var B;for(B=0;B<m;B++)x.dyn_ltree[2*B]=0;for(B=0;B<u;B++)x.dyn_dtree[2*B]=0;for(B=0;B<p;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*v]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function pe(x){8<x.bi_valid?ne(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Pe(x,B,j,G){var z=2*B,Z=2*j;return x[z]<x[Z]||x[z]===x[Z]&&G[B]<=G[j]}function _e(x,B,j){for(var G=x.heap[j],z=j<<1;z<=x.heap_len&&(z<x.heap_len&&Pe(B,x.heap[z+1],x.heap[z],x.depth)&&z++,!Pe(B,G,x.heap[z],x.depth));)x.heap[j]=x.heap[z],j=z,z<<=1;x.heap[j]=G}function Ke(x,B,j){var G,z,Z,ie,J=0;if(x.last_lit!==0)for(;G=x.pending_buf[x.d_buf+2*J]<<8|x.pending_buf[x.d_buf+2*J+1],z=x.pending_buf[x.l_buf+J],J++,G===0?Q(x,z,B):(Q(x,(Z=k[z])+d+1,B),(ie=P[Z])!==0&&ee(x,z-=U[Z],ie),Q(x,Z=O(--G),j),(ie=I[Z])!==0&&ee(x,G-=V[Z],ie)),J<x.last_lit;);Q(x,v,B)}function Ne(x,B){var j,G,z,Z=B.dyn_tree,ie=B.stat_desc.static_tree,J=B.stat_desc.has_stree,re=B.stat_desc.elems,be=-1;for(x.heap_len=0,x.heap_max=h,j=0;j<re;j++)Z[2*j]!==0?(x.heap[++x.heap_len]=be=j,x.depth[j]=0):Z[2*j+1]=0;for(;x.heap_len<2;)Z[2*(z=x.heap[++x.heap_len]=be<2?++be:0)]=1,x.depth[z]=0,x.opt_len--,J&&(x.static_len-=ie[2*z+1]);for(B.max_code=be,j=x.heap_len>>1;1<=j;j--)_e(x,Z,j);for(z=re;j=x.heap[1],x.heap[1]=x.heap[x.heap_len--],_e(x,Z,1),G=x.heap[1],x.heap[--x.heap_max]=j,x.heap[--x.heap_max]=G,Z[2*z]=Z[2*j]+Z[2*G],x.depth[z]=(x.depth[j]>=x.depth[G]?x.depth[j]:x.depth[G])+1,Z[2*j+1]=Z[2*G+1]=z,x.heap[1]=z++,_e(x,Z,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(he,Xe){var zi,dt,Oi,Se,Ka,to,kt=Xe.dyn_tree,Dr=Xe.max_code,jg=Xe.stat_desc.static_tree,Vg=Xe.stat_desc.has_stree,Gg=Xe.stat_desc.extra_bits,$r=Xe.stat_desc.extra_base,Hi=Xe.stat_desc.max_length,Xa=0;for(Se=0;Se<=g;Se++)he.bl_count[Se]=0;for(kt[2*he.heap[he.heap_max]+1]=0,zi=he.heap_max+1;zi<h;zi++)Hi<(Se=kt[2*kt[2*(dt=he.heap[zi])+1]+1]+1)&&(Se=Hi,Xa++),kt[2*dt+1]=Se,Dr<dt||(he.bl_count[Se]++,Ka=0,$r<=dt&&(Ka=Gg[dt-$r]),to=kt[2*dt],he.opt_len+=to*(Se+Ka),Vg&&(he.static_len+=to*(jg[2*dt+1]+Ka)));if(Xa!==0){do{for(Se=Hi-1;he.bl_count[Se]===0;)Se--;he.bl_count[Se]--,he.bl_count[Se+1]+=2,he.bl_count[Hi]--,Xa-=2}while(0<Xa);for(Se=Hi;Se!==0;Se--)for(dt=he.bl_count[Se];dt!==0;)Dr<(Oi=he.heap[--zi])||(kt[2*Oi+1]!==Se&&(he.opt_len+=(Se-kt[2*Oi+1])*kt[2*Oi],kt[2*Oi+1]=Se),dt--)}})(x,B),Me(Z,be,x.bl_count)}function b(x,B,j){var G,z,Z=-1,ie=B[1],J=0,re=7,be=4;for(ie===0&&(re=138,be=3),B[2*(j+1)+1]=65535,G=0;G<=j;G++)z=ie,ie=B[2*(G+1)+1],++J<re&&z===ie||(J<be?x.bl_tree[2*z]+=J:z!==0?(z!==Z&&x.bl_tree[2*z]++,x.bl_tree[2*T]++):J<=10?x.bl_tree[2*_]++:x.bl_tree[2*E]++,Z=z,be=(J=0)===ie?(re=138,3):z===ie?(re=6,3):(re=7,4))}function W(x,B,j){var G,z,Z=-1,ie=B[1],J=0,re=7,be=4;for(ie===0&&(re=138,be=3),G=0;G<=j;G++)if(z=ie,ie=B[2*(G+1)+1],!(++J<re&&z===ie)){if(J<be)for(;Q(x,z,x.bl_tree),--J!=0;);else z!==0?(z!==Z&&(Q(x,z,x.bl_tree),J--),Q(x,T,x.bl_tree),ee(x,J-3,2)):J<=10?(Q(x,_,x.bl_tree),ee(x,J-3,3)):(Q(x,E,x.bl_tree),ee(x,J-11,7));Z=z,be=(J=0)===ie?(re=138,3):z===ie?(re=6,3):(re=7,4)}}l(V);var q=!1;function S(x,B,j,G){ee(x,(c<<1)+(G?1:0),3),(function(z,Z,ie,J){pe(z),ne(z,ie),ne(z,~ie),o.arraySet(z.pending_buf,z.window,Z,ie,z.pending),z.pending+=ie})(x,B,j)}n._tr_init=function(x){q||((function(){var B,j,G,z,Z,ie=new Array(g+1);for(z=G=0;z<f-1;z++)for(U[z]=G,B=0;B<1<<P[z];B++)k[G++]=z;for(k[G-1]=z,z=Z=0;z<16;z++)for(V[z]=Z,B=0;B<1<<I[z];B++)F[Z++]=z;for(Z>>=7;z<u;z++)for(V[z]=Z<<7,B=0;B<1<<I[z]-7;B++)F[256+Z++]=z;for(j=0;j<=g;j++)ie[j]=0;for(B=0;B<=143;)$[2*B+1]=8,B++,ie[8]++;for(;B<=255;)$[2*B+1]=9,B++,ie[9]++;for(;B<=279;)$[2*B+1]=7,B++,ie[7]++;for(;B<=287;)$[2*B+1]=8,B++,ie[8]++;for(Me($,m+1,ie),B=0;B<u;B++)C[2*B+1]=5,C[2*B]=we(B,5);X=new te($,P,d+1,m,g),L=new te(C,I,0,u,g),ae=new te(new Array(0),A,0,p,w)})(),q=!0),x.l_desc=new N(x.dyn_ltree,X),x.d_desc=new N(x.dyn_dtree,L),x.bl_desc=new N(x.bl_tree,ae),x.bi_buf=0,x.bi_valid=0,fe(x)},n._tr_stored_block=S,n._tr_flush_block=function(x,B,j,G){var z,Z,ie=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(J){var re,be=4093624447;for(re=0;re<=31;re++,be>>>=1)if(1&be&&J.dyn_ltree[2*re]!==0)return s;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return r;for(re=32;re<d;re++)if(J.dyn_ltree[2*re]!==0)return r;return s})(x)),Ne(x,x.l_desc),Ne(x,x.d_desc),ie=(function(J){var re;for(b(J,J.dyn_ltree,J.l_desc.max_code),b(J,J.dyn_dtree,J.d_desc.max_code),Ne(J,J.bl_desc),re=p-1;3<=re&&J.bl_tree[2*H[re]+1]===0;re--);return J.opt_len+=3*(re+1)+5+5+4,re})(x),z=x.opt_len+3+7>>>3,(Z=x.static_len+3+7>>>3)<=z&&(z=Z)):z=Z=j+5,j+4<=z&&B!==-1?S(x,B,j,G):x.strategy===4||Z===z?(ee(x,2+(G?1:0),3),Ke(x,$,C)):(ee(x,4+(G?1:0),3),(function(J,re,be,he){var Xe;for(ee(J,re-257,5),ee(J,be-1,5),ee(J,he-4,4),Xe=0;Xe<he;Xe++)ee(J,J.bl_tree[2*H[Xe]+1],3);W(J,J.dyn_ltree,re-1),W(J,J.dyn_dtree,be-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,ie+1),Ke(x,x.dyn_ltree,x.dyn_dtree)),fe(x),G&&pe(x)},n._tr_tally=function(x,B,j){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&j,x.last_lit++,B===0?x.dyn_ltree[2*j]++:(x.matches++,B--,x.dyn_ltree[2*(k[j]+d+1)]++,x.dyn_dtree[2*O(B)]++),x.last_lit===x.lit_bufsize-1},n._tr_align=function(x){ee(x,2,3),Q(x,v,$),(function(B){B.bi_valid===16?(ne(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,a,n){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,n){(function(o){(function(s,r){if(!s.setImmediate){var l,c,f,d,m=1,u={},p=!1,h=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){w(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(d="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",v,!1):s.attachEvent("onmessage",v),function(T){s.postMessage(d+T,"*")}):s.MessageChannel?((f=new MessageChannel).port1.onmessage=function(T){w(T.data)},function(T){f.port2.postMessage(T)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(T){var _=h.createElement("script");_.onreadystatechange=function(){w(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(w,0,T)},g.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),E=0;E<_.length;E++)_[E]=arguments[E+1];var P={callback:T,args:_};return u[m]=P,l(m),m++},g.clearImmediate=y}function y(T){delete u[T]}function w(T){if(p)setTimeout(w,0,T);else{var _=u[T];if(_){p=!0;try{(function(E){var P=E.callback,I=E.args;switch(I.length){case 0:P();break;case 1:P(I[0]);break;case 2:P(I[0],I[1]);break;case 3:P(I[0],I[1],I[2]);break;default:P.apply(r,I)}})(_)}finally{y(T),p=!1}}}}function v(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(d)===0&&w(+T.data.slice(d.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(vn)),vn.exports}var fh=uh();const dh=ch(fh);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function D(t){if(!t)throw new Error("Assertion failed.")}const hh=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ze=t=>t&&t[t.length-1],xt=t=>t>=0&&t<2**32,Y=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},pt=t=>{const e=Y(t);return(e&1)===0?-(e>>1):e+1>>1},We=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),ot=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),st=new TextEncoder,Ia={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Ba={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Fa={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},mh=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Ra=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class es{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(n=>{let o=!1;e=()=>{o||(n(),this.pending--,o=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const ts=(t,e,i)=>{let a=0,n=t.length-1,o=-1;for(;a<=n;){const s=a+(n-a+1)/2|0;i(t[s])<=e?(o=s,a=s+1):n=s-1}return o},is=()=>{let t,e;return{promise:new Promise((a,n)=>{t=a,e=n}),resolve:t,reject:e}},Ot=t=>{throw new Error(`Unexpected value: ${t}`)},ph=(t,e,i)=>{const a=t.getUint8(e),n=t.getUint8(e+1),o=t.getUint8(e+2);return a<<16|n<<8|o},bn=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},gh=(t,e,i,a)=>{i=Ie(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),bn(t,e,i,a)},Ie=(t,e,i)=>Math.max(e,Math.min(i,t)),vh=(t,e,i)=>t+(e-t)*i,bh="und",as=(t,e)=>Math.round(t/e)*e,ns=(t,e)=>Math.round(t*e)/e,os=(t,e)=>Math.floor(t*e)/e,yh=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},wh=/^[a-z]{3}$/,kh=t=>wh.test(t),Ct=1e6*(1+Number.EPSILON),Th=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,n=1,o=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*o+a,f=l*s+n;if(f>e)return{num:i*o,den:s};if(a=o,n=s,o=c,s=f,r=1/(r-l),!isFinite(r))break}return{num:i*o,den:s}};class ss{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let yn=null;const _h=()=>yn!==null?yn:yn=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let wn=null;const rs=()=>wn!==null?wn:wn=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let kn=null;const xh=()=>kn!==null?kn:kn=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let Tn=null;const Ch=()=>{if(Tn!==null)return Tn;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?Tn=Number(t[1]):null},ls=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Sh=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Eh=(t,e)=>{let i=-1,a=1/0;for(let n=0;n<t.length;n++){const o=e(t[n]);o<a&&(a=o,i=n)}return i},cs=t=>{D(Number.isInteger(t.num)),D(Number.isInteger(t.den)),D(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const n=e%i;e=i,i=n}const a=e||1;return{num:t.num/a,den:t.den/a}},_n=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Ph=t=>new Promise(e=>setTimeout(e,t)),us=t=>Array.isArray(t)?t:[t];class xn{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const n={fn:i,once:a?.once??!1};return this._listeners.get(e).add(n),()=>{this._listeners.get(e)?.delete(n)}}_emit(...e){const[i,a]=e,n=this._listeners.get(i);if(n)for(const o of n){try{o.fn(a)}catch(s){console.error(s)}o.once&&n.delete(o)}}}const Mh=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var rt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(rt||(rt={}));class ke{constructor(){}static get level(){return ke._level}static set level(e){if(e!==rt.Silent&&e!==rt.Errors&&e!==rt.Warnings&&e!==rt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ke._level=e}static get _emitter(){return ke._emitterInstance??=new xn}static on(e,i,a){return ke._emitter.on(e,i,a)}static _error(...e){ke._emitter._emit("error",e),ke._level>=rt.Errors&&console.error(...e)}static _warn(...e){ke._emitter._emit("warn",e),ke._level>=rt.Warnings&&console.warn(...e)}static _info(...e){ke._emitter._emit("info",e),ke._level>=rt.Info&&console.info(...e)}}ke._level=rt.Info,ke._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class fs{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Ah{constructor(e,i,a,n){if(this.data=e,this.mimeType=i,this.name=a,this.description=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("description, when provided, must be a string.")}}const Ih=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof fs)&&!(e instanceof Ah)&&!Mh(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Bh=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ee{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),n=(i&1<<a)>>a;return this.pos++,n}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let n=this.pos;n<a;n++){const o=Math.floor(n/8);let s=this.bytes[o];const r=7-(n&7);s&=~(1<<r),s|=(i&1<<a-n-1)>>a-n-1<<r,this.bytes[o]=s}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Ee(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const za=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Cn=[-1,1,2,3,4,5,6,8],Fh=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Ee(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let n=null;a===15?n=e.readBits(24):a<za.length&&(n=za[a]);const o=e.readBits(4);let s=null;return o>=1&&o<=7&&(s=Cn[o]),{objectType:i,frequencyIndex:a,sampleRate:n,channelConfiguration:o,numberOfChannels:s}},ds=t=>{let e=za.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=Cn.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let n=13;t.objectType>=32&&(n+=6),e===15&&(n+=24);const o=Math.ceil(n/8),s=new Uint8Array(o),r=new Ee(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const gt=["avc","hevc","vp9","av1","vp8","prores"],Qe=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Sn=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Ht=[...Sn,...Qe],wi=["webvtt"],Oa=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],hs=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],ms=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],ps=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],ki=["ap4x","ap4h","apch","apcn","apcs","apco"],En=["dtsc","dtsh","dtsl","dtse"],Rh=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],zh=(t,e,i,a,n)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=Oa.find(m=>s<=m.maxMacroblocks&&a<=m.maxBitrate)??Ze(Oa),l=r?r.level:0,c="64".padStart(2,"0"),f="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${f}${d}`}else if(t==="hevc"){const l=e*i,c=hs.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??Ze(hs);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(ms.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??Ze(ms)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=ps.find(f=>s<=f.maxPictureSize&&a<=f.maxBitrate)??Ze(ps);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Rh.filter(f=>f.alpha===n);let l=r[0].fourCc,c=1/0;for(const{fourCc:f,bitrate:d}of r){const m=Math.abs(d*s-a);m<c&&(c=m,l=f)}return l}else Ot(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Oh=t=>{const e=t.split("."),n=(1<<7)+1,o=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(o<<5)+r,c=s.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,m=0,u=e[4]?Number(e[4]):0,p=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,y=(c<<7)+(d<<6)+(m<<5)+(u<<4)+(p<<3)+(h<<2)+g;return[n,l,y,0]},Hh=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Qe.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},gs=/^pcm-([usf])(\d+)(be)?$/,Lt=t=>{if(D(Qe.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=gs.exec(t);D(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,n=e[3]!=="be",o=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:n,silentValue:o}},Ha=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":ki.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":En.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":gs.test(t)?t:t==="webvtt"?"webvtt":null,Lh=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Nh=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Uh=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...ki],qh=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Dh=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,$h=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Wh=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,vs=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Uh.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Ra(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(Ia);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(Ba);if(i.transfer!=null&&!n.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const o=Object.keys(Fa);if(i.matrix!=null&&!o.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${o.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!qh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Dh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!$h.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Wh.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(ki.some(i=>t.decoderConfig.codec.startsWith(i))&&!ki.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${ki.join(", ")}.`);if(e!==null&&Ha(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},jh=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],bs=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!jh.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Ra(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!En.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${En.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Qe.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Qe.join(", ")}).`);if(e!==null&&Ha(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Vh=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Gh=[48e3,44100,32e3],Kh=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var vt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(vt||(vt={}));var je;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(je||(je={}));const Ti=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let n=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?n=4:t[e+1]===0&&t[e+2]===1&&(n=3),n===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+n,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},ys=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let n;e===1?n=a.getUint8(i):e===2?n=a.getUint16(i,!1):e===3?n=ph(a,i):(D(e===4),n=a.getUint32(i,!1)),i+=e,yield{offset:i,length:n},i+=n}},Xh=(t,e)=>{if(e.description){const n=(We(e.description)[4]&3)+1;return ys(t,n)}else return Ti(t)},ws=t=>t&31,La=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Zh=(t,e)=>{const i=t.reduce((o,s)=>o+e+s.byteLength,0),a=new Uint8Array(i);let n=0;for(const o of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(n,o.byteLength);break;case 2:s.setUint16(n,o.byteLength,!1);break;case 3:bn(s,n,o.byteLength,!1);break;case 4:s.setUint32(n,o.byteLength,!1);break}n+=e,a.set(o,n),n+=o.byteLength}return a},Qh=t=>{try{const e=[],i=[],a=[];for(const r of Ti(t)){const l=t.subarray(r.offset,r.offset+r.length),c=ws(l[0]);c===vt.SPS?e.push(l):c===vt.PPS?i.push(l):c===vt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const n=e[0],o=Jh(n);D(o!==null);const s=o.profileIdc===100||o.profileIdc===110||o.profileIdc===122||o.profileIdc===144;return{configurationVersion:1,avcProfileIndication:o.profileIdc,profileCompatibility:o.constraintFlags,avcLevelIndication:o.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?o.chromaFormatIdc:null,bitDepthLumaMinus8:s?o.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?o.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return ke._error("Error building AVC Decoder Configuration Record:",e),null}},Yh=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){D(t.chromaFormat!==null),D(t.bitDepthLumaMinus8!==null),D(t.bitDepthChromaMinus8!==null),D(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}}return new Uint8Array(e)},ks={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Jh=t=>{try{const e=new Ee(La(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),n=e.readAlignedByte(),o=e.readAlignedByte();Y(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=Y(e),s===3&&(c=e.readBits(1)),r=Y(e),l=Y(e),e.skipBits(1),e.readBits(1))){for(let C=0;C<(s!==3?8:12);C++)if(e.readBits(1)){const k=C<6?16:64;let U=8,X=8;for(let L=0;L<k;L++){if(X!==0){const ae=pt(e);X=(U+ae+256)%256}U=X===0?U:X}}}Y(e);const f=Y(e);if(f===0)Y(e);else if(f===1){e.skipBits(1),pt(e),pt(e);const $=Y(e);for(let C=0;C<$;C++)pt(e)}Y(e),e.skipBits(1);const d=Y(e),m=Y(e),u=16*(d+1),p=16*(m+1);let h=u,g=p;const y=e.readBits(1);if(y||e.skipBits(1),e.skipBits(1),e.readBits(1)){const $=Y(e),C=Y(e),F=Y(e),k=Y(e);let U,X;if((c===0?s:0)===0)U=1,X=2-y;else{const ae=s===3?1:2,V=s===1?2:1;U=ae,X=V*(2-y)}h-=U*($+C),g-=X*(F+k)}let v=2,T=2,_=2,E=0,P={num:1,den:1},I=null,A=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)P={num:e.readBits(16),den:e.readBits(16)};else{const te=ks[V];te&&(P=te)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),E=e.readBits(1),e.readBits(1)&&(v=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(Y(e),Y(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const X=e.readBits(1);X&&Ts(e);const L=e.readBits(1);L&&Ts(e),(X||L)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),Y(e),Y(e),Y(e),Y(e),I=Y(e),A=Y(e))}if(I===null){D(A===null);const $=n&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&$)I=0,A=0;else{const C=d+1,F=m+1,k=(2-y)*F,U=Oa.find(L=>L.level>=o)??Ze(Oa),X=Math.min(Math.floor(U.maxDpbMbs/(C*k)),16);I=X,A=X}}return D(A!==null),{profileIdc:a,constraintFlags:n,levelIdc:o,frameMbsOnlyFlag:y,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:u,codedHeight:p,displayWidth:h,displayHeight:g,pixelAspectRatio:P,colourPrimaries:v,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:E,numReorderFrames:I,maxDecFrameBuffering:A}}catch(e){return ke._error("Error parsing AVC SPS:",e),null}},Ts=t=>{const e=Y(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)Y(t),Y(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},em=(t,e)=>{if(e.description){const n=(We(e.description)[21]&3)+1;return ys(t,n)}else return Ti(t)},Pn=t=>t>>1&63,tm=t=>{try{const e=new Ee(La(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:n,general_tier_flag:o,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=am(e,i);Y(e);const f=Y(e);let d=0;f===3&&(d=e.readBits(1));const m=Y(e),u=Y(e);let p=m,h=u;if(e.readBits(1)){const C=Y(e),F=Y(e),k=Y(e),U=Y(e);let X=1,L=1;const ae=d===0?f:0;ae===1?(X=2,L=2):ae===2&&(X=2,L=1),p-=(C+F)*X,h-=(k+U)*L}const g=Y(e),y=Y(e);Y(e);const v=e.readBits(1)?0:i;let T=0;for(let C=v;C<=i;C++)Y(e),T=Y(e),Y(e);Y(e),Y(e),Y(e),Y(e),Y(e),Y(e),e.readBits(1)&&e.readBits(1)&&nm(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),Y(e),Y(e),e.skipBits(1));const _=Y(e);if(om(e,_),e.readBits(1)){const C=Y(e);for(let F=0;F<C;F++)Y(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let E=2,P=2,I=2,A=0,H=0,$={num:1,den:1};if(e.readBits(1)){const C=rm(e,i);$=C.pixelAspectRatio,E=C.colourPrimaries,P=C.transferCharacteristics,I=C.matrixCoefficients,A=C.fullRangeFlag,H=C.minSpatialSegmentationIdc}return{displayWidth:p,displayHeight:h,pixelAspectRatio:$,colourPrimaries:E,transferCharacteristics:P,matrixCoefficients:I,fullRangeFlag:A,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:n,generalTierFlag:o,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:f,bitDepthLumaMinus8:g,bitDepthChromaMinus8:y,minSpatialSegmentationIdc:H}}catch(e){return ke._error("Error parsing HEVC SPS:",e),null}},im=t=>{try{const e=[],i=[],a=[],n=[];for(const c of Ti(t)){const f=t.subarray(c.offset,c.offset+c.length),d=Pn(f[0]);d===je.VPS_NUT?e.push(f):d===je.SPS_NUT?i.push(f):d===je.PPS_NUT?a.push(f):(d===je.PREFIX_SEI_NUT||d===je.SUFFIX_SEI_NUT)&&n.push(f)}if(i.length===0||a.length===0)return null;const o=tm(i[0]);if(!o)return null;let s=0;if(a.length>0){const c=a[0],f=new Ee(La(c));f.skipBits(16),Y(f),Y(f),f.skipBits(1),f.skipBits(1),f.skipBits(3),f.skipBits(1),f.skipBits(1),Y(f),Y(f),pt(f),f.skipBits(1),f.skipBits(1),f.readBits(1)&&Y(f),pt(f),pt(f),f.skipBits(1),f.skipBits(1),f.skipBits(1),f.skipBits(1);const d=f.readBits(1),m=f.readBits(1);!d&&!m?s=0:d&&!m?s=2:!d&&m?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:je.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:je.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:je.PPS_NUT,nalUnits:a}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:Pn(n[0][0]),nalUnits:n}]:[]];return{configurationVersion:1,generalProfileSpace:o.generalProfileSpace,generalTierFlag:o.generalTierFlag,generalProfileIdc:o.generalProfileIdc,generalProfileCompatibilityFlags:o.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:o.generalConstraintIndicatorFlags,generalLevelIdc:o.generalLevelIdc,minSpatialSegmentationIdc:o.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:o.chromaFormatIdc,bitDepthLumaMinus8:o.bitDepthLumaMinus8,bitDepthChromaMinus8:o.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:o.spsMaxSubLayersMinus1+1,temporalIdNested:o.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return ke._error("Error building HEVC Decoder Configuration Record:",e),null}},am=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),n=t.readBits(5);let o=0;for(let f=0;f<32;f++)o=o<<1|t.readBits(1);const s=new Uint8Array(6);for(let f=0;f<6;f++)s[f]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let f=0;f<e;f++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let f=e;f<8;f++)t.skipBits(2);for(let f=0;f<e;f++)l[f]&&t.skipBits(88),c[f]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:n,general_profile_compatibility_flags:o,general_constraint_indicator_flags:s,general_level_idc:r}},nm=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))Y(t);else{const n=Math.min(64,1<<4+(e<<1));e>1&&pt(t);for(let o=0;o<n;o++)pt(t)}},om=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=sm(t,a,e,i)},sm=(t,e,i,a)=>{let n=0,o=0,s=0;if(e!==0&&(o=t.readBits(1)),o){if(e===i){const l=Y(t);s=e-(l+1)}else s=e-1;t.readBits(1),Y(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);n=a[s]}else{const r=Y(t),l=Y(t);for(let c=0;c<r;c++)Y(t),t.readBits(1);for(let c=0;c<l;c++)Y(t),t.readBits(1);n=r+l}return n},rm=(t,e)=>{let i=2,a=2,n=2,o=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=ks[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),o=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),n=t.readBits(8))),t.readBits(1)&&(Y(t),Y(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(Y(t),Y(t),Y(t),Y(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&Y(t),t.readBits(1)&&lm(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=Y(t),Y(t),Y(t),Y(t),Y(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:n,fullRangeFlag:o,minSpatialSegmentationIdc:s}},lm=(t,e,i)=>{let a=!1,n=!1,o=!1;a=t.readBits(1)===1,n=t.readBits(1)===1,(a||n)&&(o=t.readBits(1)===1,o&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),o&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?Y(t):c=t.readBits(1)===1;let f=1;c||(f=Y(t)+1),a&&_s(t,f,o),n&&_s(t,f,o)}},_s=(t,e,i)=>{for(let a=0;a<e;a++)Y(t),Y(t),i&&(Y(t),Y(t)),t.readBits(1)},cm=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let n=0;n<a.length;n++)e.push(a[n])}}return new Uint8Array(e)};var xs;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(xs||(xs={}));const um=function*(t){const e=new Ee(t),i=()=>{let a=0;for(let n=0;n<8;n++){const o=e.readAlignedByte();if(a|=(o&127)<<n*7,!(o&128))break;if(n===7&&o&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),n=e.readBits(1),o=e.readBits(1);e.skipBits(1),n&&e.skipBits(8);let s;if(o){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);D(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},fm=t=>{const e=ot(t),i=e.getUint8(9),a=e.getUint16(10,!0),n=e.getUint32(12,!0),o=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:n,outputGain:o,channelMappingFamily:s,channelMappingTable:r}},dm=(t,e,i)=>{switch(t){case"avc":{for(const a of Xh(i,e)){const n=i[a.offset],o=ws(n);if(o>=vt.NON_IDR_SLICE&&o<=vt.SLICE_DPC)return"delta";if(o===vt.IDR)return"key";if(o===vt.SEI&&(!xh()||Ch()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=La(s);let l=1;do{let c=0;for(;;){const m=r[l++];if(m===void 0||(c+=m,m<255))break}let f=0;for(;;){const m=r[l++];if(m===void 0||(f+=m,m<255))break}if(c===6){const m=new Ee(r);m.pos=8*l;const u=Y(m),p=m.readBits(1);if(u===0&&p===1)return"key"}l+=f}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of em(i,e)){const n=Pn(i[a.offset]);if(n<je.BLA_W_LP)return"delta";if(n<=je.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Ee(i);if(a.readBits(2)!==2)return null;const n=a.readBits(1);return(a.readBits(1)<<1)+n===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:n,data:o}of um(i))if(n===1){const s=new Ee(o);s.skipBits(4),a=!!s.readBits(1)}else if(n===3||n===6||n===7){if(a)return"key";const s=new Ee(o);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Ot(t),D(!1)}};var Cs;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Cs||(Cs={}));const hm=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),n=e.readBits(5);if(n>8)return null;const o=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:n,bsmod:o,acmod:s,lfeon:r,bitRateCode:l}},mm=[1,2,3,6],pm=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),n=e.readBits(2);let o=0,s;n===3?(o=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const f=mm[s];let d;return n<3?d=Gh[n]/1e3:d=Kh[o]/1e3,{dataRate:Math.round((a+1)*d/(f*16)),substreams:[{fscod:n,fscod2:o,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},gm=1683496997,vm=18,bm=10,Ss=32,ym=20,wm=8,km=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Tm=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],_m=[16,16,20,20,0,24,24,0],Es=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],xm=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Cm=8,Sm=[32e3,44100,48e3,0],Em=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Pm=[512,1024,2048,4096],Mm=t=>{const e=Am(t),i=ot(t);let a=e?Math.ceil(e.frameSize/4)*4:0,n=null;for(;a+4<=t.length&&i.getUint32(a)===gm;){const s=Im(t.subarray(a));if(!s)break;n??=s,a+=s.frameSize}if(e)return{frameSize:n?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:n!==null};if(!n?.asset)return null;const{asset:o}=n;return{frameSize:a,sampleRate:o.sampleRate,numberOfChannels:o.numberOfChannels,sampleCount:o.sampleCount,channelLayout:o.channelLayout,pcmResolution:o.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Am=t=>{if(t.length<vm||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Ee(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Ss-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%wm!==0)return null;const n=e.readBits(14)+1;if(n<96)return null;const o=e.readBits(6);if(o>=Es.length)return null;const s=km[e.readBits(4)];if(s===0)return null;const r=Tm[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=_m[e.readBits(3)];if(c===0)return null;const f=l!==0;return{frameSize:n,sampleRate:s,numberOfChannels:Es[o]+(f?1:0),sampleCount:a*Ss,channelLayout:xm[o]|(f?Cm:0),amode:o,lfePresent:f,bitRate:r,pcmResolution:c}},Im=t=>{if(t.length<bm||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Ee(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),n=8+4*a,o=16+4*a;e.skipBits(n);const s=e.readBits(o)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=Sm[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const f=e.readBits(3)+1,d=e.readBits(3)+1,m=[];for(let y=0;y<f;y++)m.push(e.readBits(i+1));for(const y of m)e.skipBits(8*yh(y));if(e.readBits(1)){e.skipBits(2);const y=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*y)}for(let y=0;y<d;y++)e.skipBits(o);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const u=e.readBits(5)+1,p=Em[e.readBits(4)],h=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const y=e.readBits(2)+1<<2;g=e.readBits(y)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:p,numberOfChannels:h,sampleCount:Math.round(c*p/l),channelLayout:g,pcmResolution:u}}},Bm=t=>{const e=new Uint8Array(ym),i=ot(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,n=new Ee(e);return n.seekToByte(13),n.writeBits(2,Math.max(Pm.indexOf(t.sampleCount),0)),n.writeBits(5,a),n.writeBits(1,t.core?.lfePresent?1:0),n.writeBits(6,t.core?.amode??0),n.writeBits(14,t.core?t.core.frameSize-1:0),n.writeBits(1,0),n.writeBits(3,0),n.writeBits(16,t.channelLayout),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ps=new Uint8Array(0);class lt{constructor(e,i,a,n,o=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=n,this.sequenceNumber=o,e===Ps&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(o))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Ps}get microsecondTimestamp(){return Math.trunc(Ct*this.timestamp)}get microsecondDuration(){return Math.trunc(Ct*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new lt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new lt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Fm=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Mn=8,Ms=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Rm=7,zm=9,As=t=>{const e=t.filePos,i=op(t,9),a=new Ee(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const f=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let m=null;return s===1?t.filePos-=2:m=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:f,numberOfAacFrames:d,crcCheck:m,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Om=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Hm=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,n=0;function o(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(o);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(s).then(o,function(r){return i(r),o()})}else n|=1}catch(r){i(r)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});Sh();let Is=-1/0,Bs=-1/0,_i=null;typeof FinalizationRegistry<"u"&&(_i=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Is>=1e3&&(ke._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Is=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Bs>=1e3&&(ke._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Bs=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Nt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const An=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Lm=new Set(An);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Ct*this.timestamp)}get microsecondDuration(){return Math.trunc(Ct*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Lm.has(i.format))throw new TypeError("init.format must be one of: "+An.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const o of i.layout){if(!o||typeof o!="object"||Array.isArray(o))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(o.offset)||o.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(o.stride)||o.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&_n(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??qm(i.format,i.codedWidth,i.codedHeight);let n=i.colorSpace??null;n===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?n={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:n={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?We(e):We(e).slice(),this._layout=a,this.colorSpace=new In(n)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&_n(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new In(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&_n(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Ct),duration:Math.trunc((i.duration??0)*Ct)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,n=0;if("naturalWidth"in e?(a=e.naturalWidth,n=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,n=e.videoHeight):"width"in e&&(a=Number(e.width),n=Number(e.height)),!a||!n)throw new TypeError("Could not determine dimensions.");const o=i.visibleRect??{left:0,top:0,width:a,height:n},s=new OffscreenCanvas(o.width,o.height),r=s.getContext("2d",{alpha:rs(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-o.left,-o.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:o.width,height:o.height},this.squarePixelWidth=o.width,this.squarePixelHeight=o.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new In({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Nt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!An.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=cs({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),_i?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return D(this._data!==null),this._data instanceof Nt?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Ci(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(D(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(_i?.unregister(this),this._data instanceof Nt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Ci(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Os(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Ci(this._data)?this._data.allocationSize(e):Hs(this,e).allocationSize}async copyTo(e,i={}){if(!Ra(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Os(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(D(this._data!==null),Ci(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Nt){const c={stack:[],error:void 0,hasError:!1};try{const f=Om(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(f instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(f.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${f.format}' instead.`);return await f.copyTo(e,i)}catch(f){c.error=f,c.hasError=!0}finally{Hm(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),f=await c.copyTo(e,i);return c.close(),f}const a=Hs(this,i);D(this.format);const n=We(e);if(n.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${n.byteLength}`);const o=Na(this.format);let s;if(this._data instanceof Nt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(f=>!(f.data instanceof Uint8Array)||!Number.isInteger(f.stride)||f.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)D(this._layout),D(this._layout.length===o.length),s=this._layout.map((c,f)=>{const d=Math.ceil(this.codedHeight/o[f].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const f=this._data.getContext("2d");D(f);const d=f.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:We(d.data),stride:4*this.codedWidth}]}const r=[],l=o.length;for(let c=0;c<l;c++){const f=a.computedLayouts[c],d=s[c].stride,m=s[c].data;let u=f.sourceTop*d;u+=f.sourceLeftBytes;let p=f.destinationOffset;const h=f.sourceWidthBytes,g={offset:p,stride:f.destinationStride};for(let y=0;y<f.sourceHeight;y++){if(u+h>m.byteLength)throw new Error("Source buffer OOB read.");if(p+h>n.byteLength)throw new Error("Destination buffer OOB write.");const w=m.subarray(u,u+h);n.set(w,p),u+=d,p+=f.destinationStride}r.push(g)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),f=this.format.includes("X")&&i.format.includes("A");if(c||f)for(let d=0;d<a.allocationSize;d+=4){if(c){const m=n[d],u=n[d+2];n[d]=u,n[d+2]=m}f&&(n[d+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof Nt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let n=0;const o=[];for(const s of e)a.set(s.data,n),o.push(n),n+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:o[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Ci(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(D(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,n,o,s,r,l,c){let f=0,d=0,m=this.displayWidth,u=this.displayHeight,p=0,h=0,g=this.displayWidth,y=this.displayHeight;if(s!==void 0?(f=i,d=a,m=n,u=o,p=s,h=r,l!==void 0?(g=l,y=c):(g=m,y=u)):(p=i,h=a,n!==void 0&&(g=n,y=o)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(f))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(m)||m<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(u)||u<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(p))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(y)||y<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:f,sy:d,sWidth:m,sHeight:u}=this._rotateSourceRegion(f,d,m,u,this.rotation));const w=this.toCanvasImageSource();e.save();const v=p+g/2,T=h+y/2;e.translate(v,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:g/y;e.scale(1/_,_),e.drawImage(w,f,d,m,u,-g/2,-y/2,g,y),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Bn(i.crop,"options.");const a=e.canvas.width,n=e.canvas.height,o=i.rotation??this.rotation,[s,r]=o%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=zs(l,s,r));let c,f,d,m;const{sx:u,sy:p,sWidth:h,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,o);if(i.fit==="fill")c=0,f=0,d=a,m=n;else{const[w,v]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(a/w,n/v):Math.max(a/w,n/v);d=w*T,m=v*T,c=(a-d)/2,f=(n-m)/2}e.save();const y=o%180===0?1:d/m;e.translate(a/2,n/2),e.rotate(o*Math.PI/180),e.scale(1/y,y),e.translate(-a/2,-n/2),e.drawImage(this.toCanvasImageSource(),u,p,h,g,c,f,d,m),e.restore()}_rotateSourceRegion(e,i,a,n,o){return o===90?[e,i,a,n]=[i,this.squarePixelHeight-e-a,n,a]:o===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-n]:o===270&&([e,i,a,n]=[this.squarePixelWidth-i-n,e,n,a]),{sx:e,sy:i,sWidth:a,sHeight:n}}_drawWithFitAndMipmapping(e,i,a){const n=e.width,o=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let f=0;2*n<l&&2*o<c&&(f=Math.floor(Math.log2(Math.min(l/n,c/o))));const d=n*2**f,m=o*2**f,{canvas:u,context:p,isNew:h}=f>0?Rs(d,m):{canvas:e,context:i,isNew:a.targetIsFresh};p.imageSmoothingQuality="high",a.fillBlack?(p.fillStyle="black",p.fillRect(0,0,d,m)):h||p.clearRect(0,0,d,m),this.drawWithFit(p,{fit:a.fit,rotation:a.rotation,crop:a.crop}),p.globalCompositeOperation="copy";for(let g=f;g>1;g--){const y=n*2**g,w=o*2**g;p.drawImage(u,0,0,y,w,0,0,y/2,w/2)}p.globalCompositeOperation="source-over",f>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(u,0,0,2*n,2*o,0,0,n,o),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof Nt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Bn(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=hh(this.rotation+(e.rotate??0)),[a,n]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let o=e.crop;o&&(o=zs(o,a,n));const s=o?o.width:a,r=o?o.height:n,l=s/r;let c,f;e.width!==void 0&&e.height===void 0?(c=e.width,f=c/l):e.width===void 0&&e.height!==void 0?(f=e.height,c=f*l):e.width!==void 0&&e.height!==void 0?(c=e.width,f=e.height):(c=s,f=r),c=as(c,e.roundDimensionsTo??1),f=as(f,e.roundDimensionsTo??1);const d={width:c,height:f,fit:e.fit??"fill",rotation:i,crop:o??{left:0,top:0,width:a,height:n},alpha:e.alpha??"keep"};for(const h of Nm){let g=h(this,d);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:m,context:u,isNew:p}=Rs(d.width,d.height);return this._drawWithFitAndMipmapping(m,u,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:p,fillBlack:d.alpha==="discard"}),new Re(m,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Nm=[],Um=3,xi=[];let Fs=0;const Rs=(t,e)=>{for(const n of xi)if(n.canvas.width===t&&n.canvas.height===e)return n.age=Fs++,{canvas:n.canvas,context:n.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return xi.length>=Um&&xi.splice(Eh(xi,n=>n.age),1),xi.push({canvas:i,context:a,age:Fs++}),{canvas:i,context:a,isNew:!0}};class In{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Ia);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(Ba);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const n=Object.keys(Fa);if(e.matrix!=null&&!n.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${n.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Ci=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,zs=(t,e,i)=>{const a=Math.min(t.left,e),n=Math.min(t.top,i),o=Math.min(t.width,e-a),s=Math.min(t.height,i-n);return D(o>=0),D(s>=0),{left:a,top:n,width:o,height:s}},Bn=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Os=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},qm=(t,e,i)=>{const a=Na(t),n=[];let o=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,f=c*l;n.push({offset:o,stride:c}),o+=f}return n},Na=t=>{const e=(i,a,n,o,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:n,heightDivisor:o},{sampleBytes:a,widthDivisor:n,heightDivisor:o}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Ot(t),D(!1)}},Hs=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,n=Dm(i,a,t.codedWidth,t.codedHeight,t.format),o=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Wm(n,s,o)},Dm=(t,e,i,a,n)=>{const o={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");o.x=e.x||0,o.y=e.y||0,o.width=e.width||0,o.height=e.height||0}if(!$m(n,o))throw new TypeError("visibleRect alignment is invalid for the format.");return o},$m=(t,e)=>{if(t===null)return!0;const i=Na(t);for(let a=0;a<i.length;a++){const n=i[a],o=n.widthDivisor,s=n.heightDivisor;if((e.x||0)%o!==0||(e.y||0)%s!==0)return!1}return!0},Wm=(t,e,i)=>{const a=Na(e),n=a.length;if(i!==void 0&&i.length!==n)throw new TypeError(`Layout must have ${n} planes.`);let o=0;const s=[],r=[];for(let l=0;l<n;l++){const c=a[l],f=c.sampleBytes,d=c.widthDivisor,m=c.heightDivisor,u={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(u.sourceTop=Math.ceil(Math.trunc(t.y||0)/m),u.sourceHeight=Math.ceil(Math.trunc(t.height||0)/m),u.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*f,u.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*f,i!==void 0){const g=i[l];if(g.stride<u.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);u.destinationOffset=g.offset,u.destinationStride=g.stride}else u.destinationOffset=o,u.destinationStride=u.sourceWidthBytes;const h=u.destinationStride*u.sourceHeight+u.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(h),o=Math.max(o,h);for(let g=0;g<l;g++){const y=s[g];if(!(r[l]<=y.destinationOffset||r[g]<=u.destinationOffset))throw new TypeError("Planes overlap.")}s.push(u)}return{allocationSize:o,computedLayouts:s}},Ua=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Si{constructor(){this._referenceCount=0}}class He{get microsecondTimestamp(){return Math.trunc(Ct*this.timestamp)}get microsecondDuration(){return Math.trunc(Ct*this.duration)}constructor(e){if(this._closed=!1,Ei(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Si){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Ua.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Ua.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(St(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const n=this.numberOfFrames*this.numberOfChannels*St(this.format);if(a.byteLength<n)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}_i?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Ua.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const n=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(n>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const o=St(i),s=Ut(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?n:n*this.numberOfChannels)*o}copyTo(e,i){if(!Ra(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!Ua.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:n,frameOffset:o}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,f=this.numberOfChannels,d=o??0;if(d>=c)throw new RangeError("frameOffset out of range");const m=n!==void 0?n:c-d;if(m>c-d)throw new RangeError("frameCount out of range");const u=St(l),p=Ut(l);if(p&&s>=f)throw new RangeError("planeIndex out of range");if(!p&&s!==0)throw new RangeError("planeIndex out of range");const g=(p?m:m*f)*u;if(e.byteLength<g)throw new RangeError("Destination buffer is too small");const y=ot(e),w=Ns(l);if(Ei(this._data))_h()&&f>2&&l!==r?Vm(this._data,y,r,l,f,s,d,m):this._data.copyTo(e,{planeIndex:s,frameOffset:d,frameCount:m,format:l});else{const v=Ls(r),T=St(r),_=Ut(r);let E;if(this._data instanceof Si){const I=A=>{const H=this._data.getDataPlane(A);if(!(H instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const $=c*T*(_?1:f);if(H.byteLength!==$)throw new TypeError(`Data plane ${A} has invalid size. Expected exactly ${$} bytes, got ${H.byteLength} bytes.`);return H};if(_)if(p)E=I(s),s=0;else{E=new Uint8Array(c*T*f);for(let A=0;A<f;A++){const H=I(A);E.set(H,A*c*T)}}else E=I(0)}else E=this._data;const P=ot(E);for(let I=0;I<m;I++)if(p){const A=I*u;let H;_?H=(s*c+(I+d))*T:H=((I+d)*f+s)*T;const $=v(P,H);w(y,A,$)}else for(let A=0;A<f;A++){const $=(I*f+A)*u;let C;_?C=(A*c+(I+d))*T:C=((I+d)*f+A)*T;const F=v(P,C);w(y,$,F)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Si){const e=new He(this._data);return e.setTimestamp(this.timestamp),e}else if(Ei(this._data)){const e=new He(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new He({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,n=St(this.format);let o;if(Ut(this.format)){const s=a*n;if(o=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(o.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else o=new Uint8Array(a*this.numberOfChannels*n),a>0&&this.copyTo(o,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new He({data:o,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(_i?.unregister(this),this._data instanceof Si?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Ei(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Si?this._createAudioDataFromData():Ei(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Ut(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,o=e.sampleRate,s=e.length,r=Math.floor(a/n);let l=0,c=s;for(;c>0;){const f=Math.min(r,c),d=new Float32Array(n*f);for(let m=0;m<n;m++)e.copyFromChannel(d.subarray(m*f,(m+1)*f),m,l);yield new He({format:"f32-planar",sampleRate:o,numberOfFrames:f,numberOfChannels:n,timestamp:i+l/o,data:d}),l+=f,c-=f}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,o=e.sampleRate,s=e.length,r=Math.floor(a/n);let l=0,c=s;const f=[];for(;c>0;){const d=Math.min(r,c),m=new Float32Array(n*d);for(let p=0;p<n;p++)e.copyFromChannel(m.subarray(p*d,(p+1)*d),p,l);const u=new He({format:"f32-planar",sampleRate:o,numberOfFrames:d,numberOfChannels:n,timestamp:i+l/o,data:m});f.push(u),l+=d,c-=d}return f}}const St=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Ut=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Ls=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},Ns=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Ie((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Ie(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Ie(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},Ei=t=>typeof AudioData<"u"&&t instanceof AudioData,jm=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},Vm=(t,e,i,a,n,o,s,r)=>{const l=Ls(i),c=Ns(a),f=St(i),d=St(a),m=Ut(i);if(Ut(a))if(m){const p=new ArrayBuffer(r*f),h=ot(p);t.copyTo(p,{planeIndex:o,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const y=g*f,w=g*d,v=l(h,y);c(e,w,v)}}else{const p=new ArrayBuffer(r*n*f),h=ot(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const y=(g*n+o)*f,w=g*d,v=l(h,y);c(e,w,v)}}else if(m){const p=r*f,h=new ArrayBuffer(p),g=ot(h);for(let y=0;y<n;y++){t.copyTo(h,{planeIndex:y,frameOffset:s,frameCount:r,format:i});for(let w=0;w<r;w++){const v=w*f,T=(w*n+y)*d,_=l(g,v);c(e,T,_)}}}else{const p=new ArrayBuffer(r*n*f),h=ot(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++)for(let y=0;y<n;y++){const w=g*n+y,v=w*f,T=w*d,_=l(h,v);c(e,T,_)}}},Gm=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new He({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Us=new Map,qs=new Map,Km=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!gt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${gt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Bn(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Ds(t.codec,t)},Ds=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Ha(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},$s=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(o,s,r)=>({codec:t.fullCodecString??zh(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:o,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Lh(t.codec)}),n=[];return i.quantizer!==null&&n.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&n.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),D(n.length>0),n},Xm=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Ht.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Ht.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Qe.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Ws(t.codec,t)},Ws=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Ha(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},js=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Hh(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Nh(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in Vs):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?Vs[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,n){const o=Zm[e];let s=null,r=this._bitrateMode??n??"variable";if(this._quantizer!==void 0){if(o)if(this._quantizer<o.min||this._quantizer>o.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${o.min} and ${o.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&o&&!this._preferBitrate&&(D(this._quality!==void 0),s=Ie(Math.round(vh(o.worst,o.best,this._quality)),o.min,o.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&(D(s!==null&&o),c=Ie((s-o.worst)/(o.best-o.worst),0,1)),l=Gs(e,i,a,Fn(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(D(this._quality!==void 0),Gs(e,i,a,Fn(this._quality)))}_toAudioBitrate(e){if(Qe.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Fn(this._quality),n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let o=n*i;return e==="aac"?o=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-o)<Math.abs(r-o)?l:r):e==="opus"||e==="vorbis"?o=Math.max(6e3,o):e==="mp3"&&(o=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-o)<Math.abs(r-o)?l:r)),Math.round(o/1e3)*1e3}}const Vs={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Zm={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Fn=t=>.3*Math.exp(2.5538*t),Gs=(t,e,i,a)=>{const n=e*i,o=1920*1080,s=3e6,r=Math.pow(n/o,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},Ks=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};D(!1)},Qm=new ze("high"),Ym=async(t,e={})=>{const{width:i=1280,height:a=720,quality:n,bitrate:o,...s}=e;if(!gt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(n!==void 0&&!(n instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof ze)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer or a quality.");Ds(t,s);const r=qa(n,o)??new ze("medium");let l;try{l=$s({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),f=Us.get(c);if(f)return f;const d=(async()=>{for(const{config:u}of l)if(Xs.some(p=>p.supports(t,u)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:u,quantizer:p}of l){try{if(!(await VideoEncoder.isConfigSupported(u)).supported)continue}catch{continue}if(!rs()||await new Promise(async g=>{try{const y=new VideoEncoder({output:()=>{},error:()=>g(!1)});y.configure(u);const w=new Uint8Array(i*a*4),v=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});y.encode(v,p!==null?Ks(t,p):void 0),v.close(),await y.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return Us.set(c,d),d},Jm=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:n,bitrate:o,...s}=e;if(!Ht.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(n!==void 0&&!(n instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof ze)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer.");Ws(t,s);const r=qa(n,o)??new ze("medium"),l=js({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),f=qs.get(c);if(f)return f;const d=(async()=>{if(Zs.some(m=>m.supports(t,l))||Qe.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return qs.set(c,d),d},qa=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},ep=async(t,e)=>{for(const i of t)if(await Ym(i,e))return i;return null},tp=async(t,e)=>{for(const i of t)if(await Jm(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xs=[],Zs=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ip=t=>{let a=t,n=4096,o=0,s=12,r=0;for(a<0&&(a=-a,o=128),a+=33,a>8191&&(a=8191);(a&n)!==n&&s>=5;)n>>=1,s--;return r=a>>s-4&15,~(o|s-5<<4|r)&255},ap=t=>{let i=2048,a=0,n=11,o=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&n>=5;)i>>=1,n--;return o=s>>(n===4?1:n-4)&15,(a|n-4<<4|o)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Pi{constructor(e,i,a,n,o){this.bytes=e,this.view=i,this.offset=a,this.start=n,this.end=o,this.bufferPos=n-a}static tempFromBytes(e){return new Pi(e,ot(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Pi(this.bytes,this.view,this.offset,e,e+i)}}const np=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},op=(t,e)=>{np(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class sp{constructor(e){this.mutex=new es,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let n=this.trackTimestampInfo.get(e);if(n){if(a&&(n.maxTimestampBeforeLastKeyPacket=n.maxTimestamp),n.maxTimestampBeforeLastKeyPacket!==null&&i<n.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${n.maxTimestampBeforeLastKeyPacket}s.`);n.maxTimestamp=Math.max(n.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");n={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,n)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Qs=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,rp=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),n=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+n.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Da{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const o of e.children)o&&this.writeBox(o);const a=this.writer.getPos(),n=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,n),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);D(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const ue=new Uint8Array(8),Ve=new DataView(ue.buffer),Te=t=>[(t%256+256)%256],se=t=>(Ve.setUint16(0,t,!1),[ue[0],ue[1]]),Rn=t=>(Ve.setInt16(0,t,!1),[ue[0],ue[1]]),Ys=t=>(Ve.setUint32(0,t,!1),[ue[1],ue[2],ue[3]]),K=t=>(Ve.setUint32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),bt=t=>(Ve.setInt32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),ct=t=>(Ve.setUint32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),lp=t=>(Ve.setInt32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),Js=t=>(Ve.setInt16(0,2**8*t,!1),[ue[0],ue[1]]),Ye=t=>(Ve.setInt32(0,2**16*t,!1),[ue[0],ue[1],ue[2],ue[3]]),zn=t=>(Ve.setInt32(0,2**30*t,!1),[ue[0],ue[1],ue[2],ue[3]]),On=(t,e)=>{const i=[];let a=t;do{let n=a&127;a>>=7,i.length>0&&(n|=128),i.push(n)}while(a>0||e);return i.reverse()},ge=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,n)=>t.charCodeAt(n));return e&&i.push(0),i},er=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},tr=er(0),ir=t=>[Ye(t[0]),Ye(t[1]),zn(t[2]),Ye(t[3]),Ye(t[4]),zn(t[5]),Ye(t[6]),Ye(t[7]),zn(t[8])],oe=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),de=(t,e,i,a,n)=>oe(t,[Te(e),Ys(i),a??[]],n),cp=t=>t.isQuickTime?oe("ftyp",[ge("qt  "),K(512),ge("qt  ")]):t.fragmented?t.cmaf?oe("ftyp",[ge("iso5"),K(512),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]):oe("ftyp",[ge("iso5"),K(512),ge("iso5"),ge("iso6"),ge("mp41")]):oe("ftyp",[ge("isom"),K(512),ge("isom"),t.holdsAvc?ge("avc1"):[],ge("mp41")]),ar=()=>oe("styp",[ge("iso5"),K(0),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]),nr=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),de("sidx",1,0,[K(1),K(et),ct(ye(t.minWrittenTimestamp,et)),ct(0),se(0),se(1),K(e&2147483647),K(ye(i,et)),K(0)])},$a=t=>({type:"mdat",largeSize:t}),up=t=>({type:"free",size:t}),Mi=t=>oe("moov",void 0,[fp(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>dp(e,t.creationTime)),t.isFragmented?Xp(t.trackDatas):null,l2(t)]),fp=(t,e)=>{const i=Math.max(0,...e.map(s=>ye(Wa(s),et)+ye(s.startTimestampOffset??0,et))),a=Math.max(0,...e.map(s=>s.track.id))+1,n=!xt(t)||!xt(i),o=n?ct:K;return de("mvhd",+n,0,[o(t),o(t),K(et),o(i),Ye(1),Js(1),Array(10).fill(0),ir(tr),Array(24).fill(0),K(a)])},Wa=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const n=t.samples[a];n.timestamp<e&&(e=n.timestamp),n.timestamp+n.duration>i&&(i=n.timestamp+n.duration)}return e===1/0?0:i-e},dp=(t,e)=>{const i=y2(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return oe("trak",void 0,[hp(t,e),a?mp(t,t.startTimestampOffset):null,pp(t,e),i.name!==void 0?oe("udta",void 0,[oe("name",[...st.encode(i.name)])]):null])},hp=(t,e)=>{const i=ye(Wa(t),et)+ye(t.startTimestampOffset??0,et),a=!xt(e)||!xt(i),n=a?ct:K;let o;if(t.type==="video"){const l=t.track.metadata.rotation;o=er(l??0)}else o=tr;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Ot(t);return de("tkhd",+a,s,[n(e),n(e),K(t.track.id),K(0),n(i),Array(8).fill(0),se(0),se(r),Js(t.type==="audio"?1:0),se(0),ir(o),Ye(t.type==="video"?t.info.width:0),Ye(t.type==="video"?t.info.height:0)])},mp=(t,e)=>{const i=ye(e,et),a=ye(Wa(t),et),n=!xt(i)||!xt(a),o=n?ct:K,s=n?lp:bt;return oe("edts",void 0,[de("elst",n?1:0,0,[K(2),o(i),s(-1),Ye(1),o(a),s(0),Ye(1)])])},pp=(t,e)=>oe("mdia",void 0,[gp(t,e),Hn(!0,vp[t.type],bp[t.type]),yp(t)]),gp=(t,e)=>{const i=ye(Wa(t),t.timescale),a=!xt(e)||!xt(i),n=a?ct:K;return de("mdhd",+a,0,[n(e),n(e),K(t.timescale),n(i),se(fr(t.track.metadata.languageCode??bh)),se(0)])},vp={video:"vide",audio:"soun",subtitle:"text"},bp={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Hn=(t,e,i,a="\0\0\0\0")=>de("hdlr",0,0,[t?ge("mhlr"):K(0),ge(e),ge(a),K(0),K(0),ge(i,!0)]),yp=t=>oe("minf",void 0,[wp[t.type](),kp(),xp(t)]),wp={video:()=>de("vmhd",0,1,[se(0),se(0),se(0),se(0)]),audio:()=>de("smhd",0,0,[se(0),se(0)]),subtitle:()=>de("nmhd",0,0)},kp=()=>oe("dinf",void 0,[Tp()]),Tp=()=>de("dref",0,0,[K(1)],[_p()]),_p=()=>de("url ",0,1),xp=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return oe("stbl",void 0,[Cp(t),Dp(t),e?Gp(t):null,e?Kp(t):null,Wp(t),jp(t),Vp(t),$p(t)])},Cp=t=>{let e;if(t.type==="video")e=Sp(d2(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=ur(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);D(i),e=Bp(i,t)}else t.type==="subtitle"&&(e=Up(p2[t.track.source._codec],t));return D(e),de("stsd",0,0,[K(1)],[e])},Sp=(t,e)=>oe(t,[Array(6).fill(0),se(1),se(0),se(0),Array(12).fill(0),se(e.info.width),se(e.info.height),K(4718592),K(4718592),K(0),se(1),Te(10),ge("Mediabunny"),Array(21).fill(0),se(e.info.hasAlphaChannel?32:24),Rn(65535)],[h2[e.track.source._codec]?.(e)??null,Ep(e),mh(e.info.decoderConfig.colorSpace)?Pp(e):null]),Ep=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:oe("pasp",[K(t.info.pixelAspectRatio.num),K(t.info.pixelAspectRatio.den)]),Pp=t=>oe("colr",[ge(t.muxer.isQuickTime?"nclc":"nclx"),se(Ia[t.info.decoderConfig.colorSpace.primaries]),se(Ba[t.info.decoderConfig.colorSpace.transfer]),se(Fa[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Te((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Mp=t=>t.info.decoderConfig&&oe("avcC",[...We(t.info.decoderConfig.description)]),Ap=t=>t.info.decoderConfig&&oe("hvcC",[...We(t.info.decoderConfig.description)]),or=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),n=Number(i[2]),o=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(o<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?Ia[e.colorSpace.primaries]:2,f=i[6]?Number(i[6]):e.colorSpace?.transfer?Ba[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?Fa[e.colorSpace.matrix]:2;return de("vpcC",1,0,[Te(a),Te(n),Te(l),Te(c),Te(f),Te(d),se(0)])},Ip=t=>oe("av1C",Oh(t.info.decoderConfig.codec)),Bp=(t,e)=>{let i=0,a,n=16;const o=Qe.includes(e.track.source._codec);if(o){const s=e.track.source._codec,{sampleSize:r}=Lt(s);n=8*r,n>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),se(1),se(i),se(0),K(0),se(e.info.numberOfChannels),se(n),se(0),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0)];else{const s=o?0:-2;a=[Array(6).fill(0),se(1),se(i),se(0),K(0),se(e.info.numberOfChannels),se(Math.min(n,16)),Rn(s),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0),o?[K(1),K(n/8),K(e.info.numberOfChannels*n/8)]:[K(0),K(0),K(0)],K(2)]}return oe(t,a,[m2(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Ln=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Te(e),...Te(21),...Ys(0),...K(0),...K(0)];if(t.info.decoderConfig.description){const a=We(t.info.decoderConfig.description);i=[...i,...Te(5),...On(a.byteLength),...a]}return i=[...se(1),...Te(0),...Te(4),...On(i.length),...i,...Te(6),...Te(1),...Te(2)],i=[...Te(3),...On(i.length),...i],de("esds",0,0,i)},Et=t=>oe("wave",void 0,[Fp(t),Rp(t),oe("\0\0\0\0")]),Fp=t=>oe("frma",[ge(ur(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Rp=t=>{const{littleEndian:e}=Lt(t.track.source._codec);return oe("enda",[se(+e)])},zp=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,n=0,o=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){D(r.byteLength>=18);const l=We(r),c=fm(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,n=c.outputGain,o=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return oe("dOps",[Te(0),Te(e),se(i),K(a),Rn(n),Te(o),...s])},Op=t=>{const e=t.info.decoderConfig?.description;D(e);const i=We(e);return de("dfLa",0,0,[...i.subarray(4)])},ut=t=>{const{littleEndian:e,sampleSize:i}=Lt(t.track.source._codec),a=+e;return de("pcmC",0,0,[Te(a),Te(8*i)])},Hp=t=>{D(t.info.primingPacket);const e=hm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Ee(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),oe("dac3",[...i])},Lp=t=>{D(t.info.primingPacket);const e=pm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),n=new Uint8Array(a),o=new Ee(n);o.writeBits(13,e.dataRate),o.writeBits(3,e.substreams.length-1);for(const s of e.substreams)o.writeBits(2,s.fscod),o.writeBits(5,s.bsid),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(3,s.bsmod),o.writeBits(3,s.acmod),o.writeBits(1,s.lfeon),o.writeBits(3,0),o.writeBits(4,s.numDepSub),s.numDepSub>0?o.writeBits(9,s.chanLoc):o.writeBits(1,0);return oe("dec3",[...n])},Np=t=>{D(t.info.primingPacket);const e=Mm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return oe("ddts",[...Bm(e)])},Up=(t,e)=>oe(t,[Array(6).fill(0),se(1)],[g2[e.track.source._codec](e)]),qp=t=>oe("vttC",[...st.encode(t.info.config.description)]),Dp=t=>de("stts",0,0,[K(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[K(e.sampleCount),K(e.sampleDelta)])]),$p=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return de("stss",0,0,[K(e.length),e.map(([i])=>K(i+1))])},Wp=t=>de("stsc",0,0,[K(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[K(e.firstChunk),K(e.samplesPerChunk),K(1)])]),jp=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Lt(t.track.source._codec);return de("stsz",0,0,[K(e*t.info.numberOfChannels),K(t.samples.reduce((i,a)=>i+ye(a.duration,t.timescale),0))])}return de("stsz",0,0,[K(0),K(t.samples.length),t.samples.map(e=>K(e.size))])},Vp=t=>t.finalizedChunks.length>0&&Ze(t.finalizedChunks).offset>=2**32?de("co64",0,0,[K(t.finalizedChunks.length),t.finalizedChunks.map(e=>ct(e.offset))]):de("stco",0,0,[K(t.finalizedChunks.length),t.finalizedChunks.map(e=>K(e.offset))]),Gp=t=>de("ctts",1,0,[K(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[K(e.sampleCount),bt(e.sampleCompositionTimeOffset)])]),Kp=t=>{let e=1/0,i=-1/0,a=1/0,n=-1/0;D(t.compositionTimeOffsetTable.length>0),D(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,ye(r.timestamp,t.timescale)),n=Math.max(n,ye(r.timestamp+r.duration,t.timescale))}const o=Math.max(-e,0);return n>=2**31?null:de("cslg",0,0,[bt(o),bt(e),bt(i),bt(a),bt(n)])},Xp=t=>oe("mvex",void 0,t.map(Zp)),Zp=t=>de("trex",0,0,[K(t.track.id),K(1),K(0),K(0),K(0)]),sr=(t,e)=>oe("moof",void 0,[Qp(t),...e.map(Yp)]),Qp=t=>de("mfhd",0,0,[K(t)]),rr=t=>{let e=0,i=0;const a=0,n=0,o=t.type==="delta";return i|=+o,o?e|=1:e|=2,e<<24|i<<16|a<<8|n},Yp=t=>oe("traf",void 0,[Jp(t),e2(t),t2(t)]),Jp=t=>{D(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:rr(i)};return de("tfhd",0,e,[K(t.track.id),K(a.duration),K(a.size),K(a.flags)])},e2=t=>(D(t.currentChunk),de("tfdt",1,0,[ct(ye(t.currentChunk.startTimestamp,t.timescale))])),t2=t=>{D(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),a=t.currentChunk.samples.map(rr),n=t.currentChunk.samples.map(h=>ye(h.timestamp-h.decodeTimestamp,t.timescale)),o=new Set(e),s=new Set(i),r=new Set(a),l=new Set(n),c=r.size===2&&a[0]!==a[1],f=o.size>1,d=s.size>1,m=!c&&r.size>1,u=l.size>1||[...l].some(h=>h!==0);let p=0;return p|=1,p|=4*+c,p|=256*+f,p|=512*+d,p|=1024*+m,p|=2048*+u,de("trun",1,p,[K(t.currentChunk.samples.length),K(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?K(a[0]):[],t.currentChunk.samples.map((h,g)=>[f?K(e[g]):[],d?K(i[g]):[],m?K(a[g]):[],u?bt(n[g]):[]])])},i2=t=>oe("mfra",void 0,[...t.map(a2),n2()]),a2=t=>de("tfra",1,0,[K(t.track.id),K(63),K(t.finalizedChunks.length),t.finalizedChunks.map(i=>[ct(ye(i.samples[0].timestamp,t.timescale)),ct(i.moofOffset),K(i.trafIndex+1),K(1),K(1)])]),n2=()=>de("mfro",0,0,[K(0)]),o2=()=>oe("vtte"),s2=(t,e,i,a,n)=>oe("vttc",void 0,[n!==null?oe("vsid",[bt(n)]):null,i!==null?oe("iden",[...st.encode(i)]):null,e!==null?oe("ctim",[...st.encode(rp(e))]):null,a!==null?oe("sttg",[...st.encode(a)]):null,oe("payl",[...st.encode(t)])]),r2=t=>oe("vtta",[...st.encode(t)]),l2=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const n=u2(a);n&&e.push(n)}else if(i==="mdta"){const n=f2(a);n&&e.push(n)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&c2(e,t.output._metadataTags);return e.length===0?null:oe("udta",void 0,e)},c2=(t,e)=>{for(const{key:i,value:a}of ls(e))switch(i){case"title":t.push(ft("©nam",a));break;case"description":t.push(ft("©des",a));break;case"artist":t.push(ft("©ART",a));break;case"album":t.push(ft("©alb",a));break;case"albumArtist":t.push(ft("albr",a));break;case"genre":t.push(ft("©gen",a));break;case"date":t.push(ft("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(ft("©cmt",a));break;case"lyrics":t.push(ft("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Ot(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(n=>n.type===i)||(typeof a=="string"?t.push(ft(i,a)):a instanceof Uint8Array&&t.push(oe(i,Array.from(a))))}},ft=(t,e)=>{const i=st.encode(e);return oe(t,[se(i.length),se(fr("und")),Array.from(i)])},lr={"image/jpeg":13,"image/png":14,"image/bmp":27},cr=(t,e)=>{const i=[];for(const{key:a,value:n}of ls(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:Je(n)});break;case"description":i.push({key:e?"description":"©des",value:Je(n)});break;case"artist":i.push({key:e?"artist":"©ART",value:Je(n)});break;case"album":i.push({key:e?"album":"©alb",value:Je(n)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Je(n)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Je(n)});break;case"genre":i.push({key:e?"genre":"©gen",value:Je(n)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Je(n)});break;case"date":i.push({key:e?"date":"©day",value:Je(n.toISOString().slice(0,10))});break;case"images":for(const o of n)o.kind==="coverFront"&&i.push({key:"covr",value:oe("data",[K(lr[o.mimeType]??0),K(0),Array.from(o.data)])});break;case"trackNumber":if(e){const o=t.tracksTotal!==void 0?`${n}/${t.tracksTotal}`:n.toString();i.push({key:"track",value:Je(o)})}else i.push({key:"trkn",value:oe("data",[K(0),K(0),se(0),se(n),se(t.tracksTotal??0),se(0)])});break;case"discNumber":e||i.push({key:"disc",value:oe("data",[K(0),K(0),se(0),se(n),se(t.discsTotal??0),se(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Ot(a)}if(t.raw)for(const a in t.raw){const n=t.raw[a];n==null||!e&&a.length!==4||i.some(o=>o.key===a)||(typeof n=="string"?i.push({key:a,value:Je(n)}):n instanceof Uint8Array?i.push({key:a,value:oe("data",[K(0),K(0),Array.from(n)])}):n instanceof fs&&i.push({key:a,value:oe("data",[K(lr[n.mimeType]??0),K(0),Array.from(n.data)])}))}return i},u2=t=>{const e=cr(t,!1);return e.length===0?null:de("meta",0,0,void 0,[Hn(!1,"mdir","","appl"),oe("ilst",void 0,e.map(i=>oe(i.key,void 0,[i.value])))])},f2=t=>{const e=cr(t,!0);return e.length===0?null:oe("meta",void 0,[Hn(!1,"mdta",""),de("keys",0,0,[K(e.length)],e.map(i=>oe("mdta",[...st.encode(i.key)]))),oe("ilst",void 0,e.map((i,a)=>{const n=String.fromCharCode(...K(a+1));return oe(n,void 0,[i.value])}))])},Je=t=>oe("data",[K(1),K(0),...st.encode(t)]),d2=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},h2={avc:Mp,hevc:Ap,vp8:or,vp9:or,av1:Ip,prores:null},ur=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},m2=(t,e)=>{switch(t){case"aac":return Ln;case"mp3":return Ln;case"opus":return zp;case"vorbis":return Ln;case"flac":return Op;case"ac3":return Hp;case"eac3":return Lp;case"dts":return Np}if(e)switch(t){case"pcm-s24":return Et;case"pcm-s24be":return Et;case"pcm-s32":return Et;case"pcm-s32be":return Et;case"pcm-f32":return Et;case"pcm-f32be":return Et;case"pcm-f64":return Et;case"pcm-f64be":return Et}else switch(t){case"pcm-s16":return ut;case"pcm-s16be":return ut;case"pcm-s24":return ut;case"pcm-s24be":return ut;case"pcm-s32":return ut;case"pcm-s32be":return ut;case"pcm-f32":return ut;case"pcm-f32be":return ut;case"pcm-f64":return ut;case"pcm-f64be":return ut}return null},p2={webvtt:"wvtt"},g2={webvtt:qp},fr=t=>{D(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Nn{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){D(!this.started),this.target._start(),this.started=!0}write(e){D(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return D(this.started&&!this.finalized),this.target._flush()}async finalize(){D(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let n=this.trackedWrites.byteLength;for(;n<a;)n*=2;if(n!==this.trackedWrites.byteLength){const o=new Uint8Array(n);o.set(this.trackedWrites,0),this.trackedWrites=o}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class yt extends xn{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new v2(this,e)}}const Un=2**16,qn=2**32;class ja extends yt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Un,{maxByteLength:qn})}catch{this._buffer=new ArrayBuffer(Un),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Un);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>qn)throw new Error(`ArrayBuffer exceeded maximum size of ${qn} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),n=new Uint8Array(a);n.set(this._bytes,0),this._buffer=a,this._bytes=n}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class v2 extends yt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class Dn{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const et=57600,b2=2082844800,y2=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ye=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class w2 extends sp{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ja,this.auxWriter=new Nn(this.auxTarget,!1),this.auxBoxWriter=new Da(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=is(),this.creationTime=Math.floor(Date.now()/1e3)+b2,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof br,this.isCmaf=i instanceof vr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof vr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof ja),this.boxWriter=new Da(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ja?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),n=new Nn(a,!0);n.start(),this.initWriter=n,this.initBoxWriter=new Da(n)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(D(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(cp({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:n,start:o}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(n,o)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(D(this.writer),D(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=$a(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return Fm({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const n=this.trackDatas.find(u=>u.track===e);if(n)return n;vs(a,e.source._codec),D(a),D(a.decoderConfig);const o={...a.decoderConfig};D(o.codedWidth!==void 0),D(o.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!o.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const u=Qh(i.data);if(!u)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");o.description=Yh(u),s=!0}else if(e.source._codec==="hevc"&&!o.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const u=im(i.data);if(!u)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");o.description=cm(u),s=!0}const r=Th(1/(e.metadata.frameRate??et),1e6).den,l=o.displayAspectWidth,c=o.displayAspectHeight,f=l===void 0||c===void 0?{num:1,den:1}:cs({num:l*o.codedHeight,den:c*o.codedWidth}),d=o.codec==="ap4h"||o.codec==="ap4x",m={muxer:this,track:e,type:"video",info:{width:o.codedWidth,height:o.codedHeight,pixelAspectRatio:f,decoderConfig:o,requiresAnnexBTransformation:s,hasAlphaChannel:d},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(m),this.trackDatas.sort((u,p)=>u.track.id-p.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),m}getAudioTrackData(e,i,a){const n=this.trackDatas.find(l=>l.track===e);if(n)return n;bs(a,e.source._codec),D(a),D(a.decoderConfig);const o={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!o.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=As(Pi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=za[l.samplingFrequencyIndex],f=Cn[l.channelConfiguration];if(c===void 0||f===void 0)throw new Error("Invalid ADTS frame header.");o.description=ds({objectType:l.objectType,sampleRate:c,numberOfChannels:f}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:o,requiresPcmTransformation:!this.isFragmented&&Qe.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:o.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(o=>o.track===e);if(a)return a;Vh(i),D(i),D(i.config);const n={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(n),this.trackDatas.sort((o,s)=>o.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),n}async addEncodedVideoPacket(e,i,a){const n=await this.mutex.acquire();try{const o=this.getVideoTrackData(e,i,a);let s=i.data;if(o.info.requiresAnnexBTransformation){const l=[...Ti(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Zh(l,4)}this.validateTimestamp(o.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(o,s,i.timestamp,i.duration,i.type);await this.registerSample(o,r)}finally{n()}}async addEncodedAudioPacket(e,i,a){const n=await this.mutex.acquire();try{const o=this.getAudioTrackData(e,i,a);let s=i.data;if(o.info.requiresAdtsStripping){const f=As(Pi.tempFromBytes(s));if(!f)throw new Error("Expected ADTS frame, didn't get one.");const d=f.crcCheck===null?Rm:zm;s=s.subarray(d)}this.validateTimestamp(o.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(o.info.requiresPcmTransformation){const d=Lt(o.info.decoderConfig.codec).sampleSize*o.info.numberOfChannels;if(l=s.byteLength/d/o.info.sampleRate,o.info.expectedNextPcmPacketTimestamp!==null){const m=r-o.info.expectedNextPcmPacketTimestamp;if(m<.01)r=o.info.expectedNextPcmPacketTimestamp;else{const u=await this.padWithSilence(o,o.info.expectedNextPcmPacketTimestamp,m);r=o.info.expectedNextPcmPacketTimestamp+u}}o.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(o,s,r,l,i.type);await this.registerSample(o,c)}finally{n()}}async padWithSilence(e,i,a){const n=ye(a,e.timescale);if(a=n/e.timescale,n>0){const{sampleSize:o,silentValue:s}=Lt(e.info.decoderConfig.codec),r=n*e.info.numberOfChannels,l=new Uint8Array(o*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const n=await this.mutex.acquire();try{const o=this.getSubtitleTrackData(e,a);this.validateTimestamp(o.track,i.timestamp,!0),e.source._codec==="webvtt"&&(o.cueQueue.push(i),await this.processWebVTTCues(o,i.timestamp))}finally{n()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)D(c.timestamp<=i),D(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const n=[...a].sort((c,f)=>c-f),o=n[0],s=n[1]??o;if(i<s)break;if(e.lastCueEndTimestamp<o){this.auxWriter.seek(0);const c=o2();this.auxBoxWriter.writeBox(c);const f=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,f,e.lastCueEndTimestamp,o-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=o}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const f=e.cueQueue[c];if(f.timestamp>=s)break;Qs.lastIndex=0;const d=Qs.test(f.text),m=f.timestamp+f.duration;let u=e.cueToSourceId.get(f);if(u===void 0&&s<m&&(u=e.nextSourceId++,e.cueToSourceId.set(f,u)),f.notes){const h=r2(f.notes);this.auxBoxWriter.writeBox(h)}const p=s2(f.text,d?o:null,f.identifier??null,f.settings??null,u??null);this.auxBoxWriter.writeBox(p),m===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,o,s-o,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,n,o){return{timestamp:a,decodeTimestamp:a,duration:n,data:i,size:i.byteLength,type:o,timescaleUnitsToNextSample:ye(n,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let n=0;for(let o=0;o<e.timestampProcessingQueue.length;o++){const s=e.timestampProcessingQueue[o],r=ye(s.duration,e.timescale);n+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:n,sampleDelta:1});else{const o=Ze(e.timeToSampleTable);o.sampleCount+=n}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(n=>n.timestamp).sort((n,o)=>n-o);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let n=0;n<e.timestampProcessingQueue.length;n++){const o=e.timestampProcessingQueue[n];o.decodeTimestamp=a[n];const s=ye(o.timestamp-o.decodeTimestamp,e.timescale),r=ye(o.duration,e.timescale);if(e.lastTimescaleUnits!==null){D(e.lastSample);const l=ye(o.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(D(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let f=Ze(e.timeToSampleTable);if(D(f),f.sampleCount===1){f.sampleDelta=c;const m=e.timeToSampleTable[e.timeToSampleTable.length-2];m&&m.sampleDelta===c&&(m.sampleCount++,e.timeToSampleTable.pop(),f=m)}else f.sampleDelta!==c&&(f.sampleCount--,e.timeToSampleTable.push(f={sampleCount:1,sampleDelta:c}));f.sampleDelta===r?f.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const d=Ze(e.compositionTimeOffsetTable);D(d),d.sampleCompositionTimeOffset===s?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=ye(o.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=o}if(e.timestampProcessingQueue.length=0,D(e.lastSample),D(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){D(i.type==="key");const n=ye(i.timestamp,e.timescale,!1),o=Math.round(n-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=o}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const n=e.track.metadata.maximumPacketCount;if(D(n!==void 0),e.samples.length>n)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${n}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const n=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const o=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});n>=this.minimumFragmentDuration&&o&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=n>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),D(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(D(!this.isFragmented),D(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,n)=>a+ye(n.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ze(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)D(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(D(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const o of this.trackDatas){if(!e&&o.sampleQueue.length===0&&!o.closed)break e;o.sampleQueue.length>0&&o.sampleQueue[0].timestamp<a&&(i=o,a=o.sampleQueue[0].timestamp)}if(!i)break;const n=i.sampleQueue.shift();await this.addSampleToTrack(i,n)}}async finalizeFragment(e=!this.isCmaf){if(D(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const u=this.initBoxWriter??this.boxWriter;D(u),this.formatOptions.onMoov&&u.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const p=Mi(this);if(u.writeBox(p),this.formatOptions.onMoov){const{data:h,start:g}=u.writer.stopTrackingWrites();this.formatOptions.onMoov(h,g)}if(this.isCmaf){D(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Da(this.writer);const h=this.boxWriter.measureBox(ar()),g=this.boxWriter.measureBox(nr(this,0));this.segmentHeaderSize=h+g,this.writer.seek(this.segmentHeaderSize)}}D(this.writer),D(this.boxWriter);const i=this.trackDatas.filter(u=>u.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,n=sr(a,i),o=this.writer.getPos(),s=o+this.boxWriter.measureBox(n);let r=s+Mn,l=1/0;for(let u=0;u<i.length;u++){const p=i[u];p.currentChunk.offset=r,p.currentChunk.moofOffset=o,p.currentChunk.trafIndex=u;for(const h of p.currentChunk.samples)r+=h.size;l=Math.min(l,p.currentChunk.startTimestamp)}const c=r-s,f=c>=2**32;if(f)for(const u of i)u.currentChunk.offset+=Ms-Mn;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=sr(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:u,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(u,p,l)}D(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const m=$a(f);m.size=c,this.boxWriter.writeBox(m),this.writer.seek(s+(f?Ms:Mn));for(const u of i)for(const p of u.currentChunk.samples)this.writer.write(p.data),p.data=null;if(this.formatOptions.onMdat){const{data:u,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(u,p)}for(const u of i)u.finalizedChunks.push(u.currentChunk),this.finalizedChunks.push(u.currentChunk),u.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){D(this.writer),D(this.boxWriter),this.ensureOneEnabledTrack();const e=Mi(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;D(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=$a(!0),this.boxWriter.writeBox(this.mdat);for(const n of this.trackDatas){for(const o of n.sampleQueue)await this.addSampleToTrack(n,o);n.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){D(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;D(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(n=>n.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(n=>n.type===e);if(i.length===0)continue;if(!i.some(n=>n.track.metadata.disposition?.default!==!1)){const n=i[0];n.track.metadata.disposition={...n.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){D(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const n=i.samples[a];n.timestamp-=i.startTimestampOffset,n.decodeTimestamp-=i.startTimestampOffset}if(D(this.writer),D(this.boxWriter),this.fastStart==="in-memory"){this.mdat=$a(!1);let i;for(let n=0;n<2;n++){const o=Mi(this),s=this.boxWriter.measureBox(o);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)D(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=Mi(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,o)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const n of this.finalizedChunks)for(const o of n.samples)D(o.data),this.writer.write(o.data),o.data=null;if(this.formatOptions.onMdat){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,o)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(ar()),this.boxWriter.writeBox(nr(this,i))}else{const i=this.writer.getPos(),a=i2(this.trackDatas);this.boxWriter.writeBox(a);const n=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(n)}else{D(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);D(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:o,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,s)}const n=Mi(this);if(this.fastStart==="reserve"){D(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);const o=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(up(o))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);if(this.formatOptions.onMoov){const{data:o,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class k2{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){D(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,n)=>a[n*e]:e===1&&i===4?this.channelMixer=(a,n,o)=>a[n*e]*+(o<2):e===1&&i===6?this.channelMixer=(a,n,o)=>a[n*e]*+(o===2):e===2&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return .5*(a[o]+a[o+1])}:e===2&&i===4?this.channelMixer=(a,n,o)=>a[n*e+o]*+(o<2):e===2&&i===6?this.channelMixer=(a,n,o)=>a[n*e+o]*+(o<2):e===4&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return .25*(a[o]+a[o+1]+a[o+2]+a[o+3])}:e===4&&i===2?this.channelMixer=(a,n,o)=>{const s=n*e;return .5*(a[s+o]+a[s+o+2])}:e===4&&i===6?this.channelMixer=(a,n,o)=>{const s=n*e;return o<2?a[s+o]:o===2||o===3?0:a[s+o-2]}:e===6&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return Math.SQRT1_2*(a[o]+a[o+1])+a[o+2]+.5*(a[o+4]+a[o+5])}:e===6&&i===2?this.channelMixer=(a,n,o)=>{const s=n*e;return a[s+o]+Math.SQRT1_2*(a[s+2]+a[s+o+4])}:e===6&&i===4?this.channelMixer=(a,n,o)=>{const s=n*e;return o<2?a[s+o]+Math.SQRT1_2*a[s+2]:a[s+o+2]}:this.channelMixer=(a,n,o)=>o<e?a[n*e+o]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),D(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),n=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(n,{planeIndex:0,format:"f32"});const o=e.timestamp-this.startTime,s=o+e.duration,r=Math.floor((o-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const f=c-this.bufferStartFrame;D(f<this.bufferSizeInFrames);const u=(c/this.targetSampleRate-o)*this.sourceSampleRate,p=Math.floor(u),h=Math.ceil(u),g=u-p;for(let y=0;y<this.targetNumberOfChannels;y++){let w=0,v=0;p>=0&&p<e.numberOfFrames&&(w=this.channelMixer(n,p,y)),h>=0&&h<e.numberOfFrames&&(v=this.channelMixer(n,h,y));const T=w+g*(v-w),_=f*this.targetNumberOfChannels+y;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=f:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,f)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;D(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new He({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var T2=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},_2=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,n=0;function o(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(o);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(s).then(o,function(r){return i(r),o()})}else n|=1}catch(r){i(r)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class $n{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class dr extends $n{constructor(e){if(super(),this._connectedTrack=null,!gt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${gt.join(", ")}.`);this._codec=e}}const hr=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class x2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new ss,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const n=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const o=this.encodingConfig,s=o.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(o.transform?.width!==void 0||o.transform?.height!==void 0||o.transform?.rotate!==void 0||o.transform?.crop!==void 0||o.transform?.force===!0||r&&s!=="passThrough"){let d=o.transform?.width,m=o.transform?.height,u=o.transform?.fit??"fill";r&&s!=="passThrough"&&(D(this.outputWidth),D(this.outputHeight),D(s!=="deny"),d=this.outputWidth,m=this.outputHeight,u=s);const p=await e.transform({width:d,height:m,roundDimensionsTo:2,crop:o.transform?.crop,rotate:o.transform?.rotate,fit:u,alpha:o.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=p.displayWidth,this.outputHeight=p.displayHeight),i&&e.close(),e=p,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const f=o.transform?.frameRate;if(f!==void 0){const d=e.timestamp+e.duration,m=os(e.timestamp,f);if(this.frameRateLastSample!==null)if(m<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(m,a);e===n&&(e=e.clone(),i=!0),e.setTimestamp(m),e.setDuration(1/f),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=m,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let n;if(a.transform?.process){let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);const s=[];try{for(const r of o)r instanceof Re?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Re(r)):s.push(new Re(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of o)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}n=s}else n=[e];try{for(const o of n){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(o),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(o.timestamp/s),l={...this.defaultEncodeOptions,...o.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(o),this.customEncoder){this.customEncoderQueueSize++;const f=o.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(f,c)).catch(m=>this.setError(m)).finally(()=>{this.customEncoderQueueSize--,f.close()});this.customEncoderQueueSize>=4&&await d}else{D(this.encoder);const f=o.toVideoFrame(),d=ts(this.preciseTimings,f.timestamp,u=>u.microsecondTimestamp),m=d!==-1?this.preciseTimings[d]:null;if(m&&m.microsecondTimestamp===f.timestamp?(m.timestamp!==o.timestamp&&(m.timestampIsValid=!1),m.duration!==o.duration&&(m.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:f.timestamp,timestamp:o.timestamp,duration:o.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!f.format&&!f.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(f,c)}finally{f.close()}}else{this.splitter||(this.splitter=new C2);const{colorFrame:p,alphaFrame:h}=await this.splitter.split(f);this.alphaFrameQueue.push(h);try{this.encoder.encode(p,c)}finally{p.close()}}else try{this.encoder.encode(f,c)}finally{f.close()}this.encoder.encodeQueueSize>=4&&await new Promise(u=>this.encoder.addEventListener("dequeue",u,{once:!0}))}await this.lastMuxerPromise}}finally{for(const o of n)o!==e&&o.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;D(this.frameRateLastSample);const n=Math.round((e-this.frameRateLastTimestamp)*a);for(let o=1;o<n;o++){const s={stack:[],error:void 0,hasError:!1};try{const r=T2(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+o/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{_2(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=qa(this.encodingConfig.quality,this.encodingConfig.bitrate);D(i!==void 0);const a=$s({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let n=null,o;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),o=Xs.find(f=>f.supports(this.encodingConfig.codec,l)),o){n=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){n=r;break}}catch{}}if(!n){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:f})=>f!==null?`quantizer ${f}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=n.config;if(n.quantizer!==null&&(this.defaultEncodeOptions=Ks(this.encodingConfig.codec,n.quantizer)),o)this.customEncoder=new o,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof lt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");hr(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,f=0;const d=(u,p,h)=>{const g={};if(p){const _=new Uint8Array(p.byteLength);p.copyTo(_),g.alpha=_}let y=lt.fromEncodedChunk(u,g);const w=ts(this.preciseTimings,u.timestamp,_=>_.microsecondTimestamp),v=w!==-1?this.preciseTimings[w]:null;let T=null;this.emittedEncoderPackets===0&&y.type==="delta"&&h?.decoderConfig&&(T=dm(this.encodingConfig.codec,h.decoderConfig,y.data)),(v&&v.microsecondTimestamp===u.timestamp||T!==null)&&(y=y.clone({timestamp:v?.timestampIsValid?v.timestamp:void 0,duration:v?.durationIsValid?v.duration:void 0,type:T??void 0})),hr(this.source._connectedTrack,y),this.encodingConfig.onEncodedPacket?.(y,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,y,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},m=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(u,p)=>{if(!this.alphaEncoder){d(u,null,p);return}const h=this.alphaFrameQueue.shift();D(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:u.type==="key"}),f++,h.close(),r.push({chunk:u,meta:p})):f===0?d(u,null,p):(l.push(c+f),r.push({chunk:u,meta:p}))},error:u=>{u.stack=m,this.setError(u)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const u=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(p,h)=>{f--;const g=r.shift();for(D(g!==void 0),d(g.chunk,p,g.meta),c++;l.length>0&&l[0]===c;){l.shift();const y=r.shift();D(y!==void 0),d(y.chunk,null,y.meta)}},error:p=>{p.stack=u,this.setError(p)}}),this.alphaEncoder.configure(s)}}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=os(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Ph(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let Wn=null;class C2{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!Wn){const n=new Blob([`(${S2.toString()})()`],{type:"application/javascript"});Wn=URL.createObjectURL(n)}this.worker=new Worker(Wn),this.worker.addEventListener("message",n=>{const o=n.data,s=this.pendingRequests.get(o.id);s&&(this.pendingRequests.delete(o.id),"error"in o?s.reject(new Error(o.error)):s.resolve({colorFrame:o.colorFrame,alphaFrame:o.alphaFrame}))}),this.worker.addEventListener("error",n=>{const o=new Error(n.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(o);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=is();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const S2=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",o=>{const{id:s,sourceFrame:r}=o.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async o=>{const s=o.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=o.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await o.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,o);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return n(t,s,o);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(o,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,f=l*c,d=Math.ceil(l/2),m=Math.ceil(c/2),u=f+d*m*2,p=new Uint8Array(u);for(let w=0,v=3;w<f;w++,v+=4)p[w]=o[v];p.fill(128,f);const h=new VideoFrame(o,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),g={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[p.buffer]},y=new VideoFrame(p,g);return{colorFrame:h,alphaFrame:y}},n=(o,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,f=s.includes("P10"),d=s.includes("P12"),m=f||d?2:1;let u,p;s.startsWith("I420")?(u=Math.ceil(l/2),p=Math.ceil(c/2)):s.startsWith("I422")?(u=Math.ceil(l/2),p=c):(u=l,p=c);const h=l*c,g=u*p,y=h*m,w=g*m,v=h*m,T=y+w*2,_=s.replace("A",""),E=Math.ceil(l/2),P=Math.ceil(c/2),I=E*P,A=I*m,H=v+2*A,$=new Uint8Array(H),C=T;$.set(o.subarray(C,C+v),0);const F=v,k=f?512:d?2048:128;m===1?$.fill(k,F):new Uint16Array($.buffer,F,2*I).fill(k);const U=f?"I420P10":d?"I420P12":"I420",X=new VideoFrame(o.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),L={format:U,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[$.buffer]},ae=new VideoFrame($,L);return{colorFrame:X,alphaFrame:ae}}};class E2 extends dr{constructor(e){Km(e),super(e.codec),this._encoder=new x2(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class mr extends $n{constructor(e){if(super(),this._connectedTrack=null,!Ht.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Ht.join(", ")}.`);this._codec=e}}class P2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new ss,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new k2({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async o=>{await this.processAndEncode(o,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&jm(e.format)!==a.transform.sampleFormat){const n=Gm(e,a.transform.sampleFormat);i&&e.close(),e=n,i=!0}if(a.transform?.process)try{let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);try{for(const o of n)if(!(o instanceof He))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const o of n)await this.encodeSample(o,!0)}finally{for(const o of n)o instanceof He&&o.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),n=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=n;else{const o=a-this.lastEndSampleIndex;if(o>=64){const s=new He({data:new Float32Array(o*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:o,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),n=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(o=>this.setError(o)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await n,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{D(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(n=>this.encoder.addEventListener("dequeue",n,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){D(this.outputSampleSize),D(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:n,sampleRate:o,timestamp:s}=e,r=2048,l=[];for(let m=0;m<n;m+=r){const u=Math.min(r,e.numberOfFrames-m),p=u*a*this.outputSampleSize,h=new ArrayBuffer(p),g=new DataView(h);l.push({frameCount:u,view:g})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),f=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let m=0;m<a;m++){e.copyTo(f,{planeIndex:m,format:"f32-planar"});for(let u=0;u<l.length;u++){const{frameCount:p,view:h}=l[u];for(let g=0;g<p;g++)this.writeOutputValue(h,(g*a+m)*this.outputSampleSize,f[u*r+g])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:o}};for(let m=0;m<l.length;m++){const{frameCount:u,view:p}=l[m],h=p.buffer,g=m*r,y=new lt(new Uint8Array(h),"key",s+g/o,u/o);this.encodingConfig.onEncodedPacket?.(y,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,y,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,n=qa(this.encodingConfig.quality,this.encodingConfig.bitrate),o=js({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:n});this.encodingConfig.onEncoderConfig?.(o);const s=Zs.find(r=>r.supports(this.encodingConfig.codec,o));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=o,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof lt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(Qe.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(o)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${o.codec}, ${o.bitrate} bps, ${o.numberOfChannels} channels, ${o.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,f)=>{if(this.encodingConfig.codec==="aac"&&f?.decoderConfig){let m=!1;if(!f.decoderConfig.description||f.decoderConfig.description.byteLength<2?m=!0:m=Fh(We(f.decoderConfig.description)).objectType===0,m){const u=Number(Ze(o.codec.split(".")));f.decoderConfig.description=ds({objectType:u,numberOfChannels:f.decoderConfig.numberOfChannels,sampleRate:f.decoderConfig.sampleRate})}}let d=lt.fromEncodedChunk(c);d=d.clone({timestamp:ns(d.timestamp,o.sampleRate),duration:c.duration!=null?ns(d.duration,o.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,f),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,f).catch(m=>{this.setError(m)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(o)}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:n}=Lt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(o,s,r)=>o.setUint8(s,Ie((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(o,s,r)=>{o.setInt8(s,Ie(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(o,s,r)=>{const l=Ie(Math.floor(r*32767),-32768,32767);o.setUint8(s,ip(l))}:i==="alaw"?this.writeOutputValue=(o,s,r)=>{const l=Ie(Math.floor(r*32767),-32768,32767);o.setUint8(s,ap(l))}:D(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(o,s,r)=>o.setUint16(s,Ie((r+1)*32767.5,0,65535),n):i==="signed"?this.writeOutputValue=(o,s,r)=>o.setInt16(s,Ie(Math.round(r*32767),-32768,32767),n):D(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(o,s,r)=>bn(o,s,Ie((r+1)*83886075e-1,0,16777215),n):i==="signed"?this.writeOutputValue=(o,s,r)=>gh(o,s,Ie(Math.round(r*8388607),-8388608,8388607),n):D(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(o,s,r)=>o.setUint32(s,Ie((r+1)*21474836475e-1,0,4294967295),n):i==="signed"?this.writeOutputValue=(o,s,r)=>o.setInt32(s,Ie(Math.round(r*2147483647),-2147483648,2147483647),n):i==="float"?this.writeOutputValue=(o,s,r)=>o.setFloat32(s,r,n):D(!1);break;case 8:i==="float"?this.writeOutputValue=(o,s,r)=>o.setFloat64(s,r,n):D(!1);break;default:Ot(a),D(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class M2 extends mr{constructor(e){Xm(e),super(e.codec),this._accumulatedTime=0,this._encoder=new P2(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=He._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class A2 extends $n{constructor(e){if(super(),this._connectedTrack=null,!wi.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${wi.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class pr{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>gt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Ht.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>wi.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class jn extends pr{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new w2(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class gr extends jn{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...gt,...Sn,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...wi]}_codecUnsupportedHint(e){return new br().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class vr extends jn{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...gt,...Sn,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...wi]}}class br extends jn{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...gt,...Ht]}_codecUnsupportedHint(e){return new gr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const yr=["video","audio","subtitle"];class Ai{constructor(e,i,a,n,o){this.id=e,this.output=i,this.type=a,this.source=n,this.metadata=o}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Ai))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=us(this.metadata.group),a=us(e.metadata.group);for(const n of i)if(this.type!==e.type&&a.some(r=>n===r)||a.some(r=>n._pairedGroups.has(r)))return!0;return!1}}class I2 extends Ai{constructor(e,i,a,n){super(e,i,"video",a,n)}}class B2 extends Ai{constructor(e,i,a,n){super(e,i,"audio",a,n)}}class F2 extends Ai{constructor(e,i,a,n){super(e,i,"subtitle",a,n)}}class Ii{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Ii))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Vn=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!kh(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Bh(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Ii)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Ii))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class R2 extends xn{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Ii,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new es,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof pr))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof yt||e.target instanceof Dn))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof yt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof yt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof yt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){D(this._target instanceof Dn);const i=this._target.getTarget(e),a=n=>{if(!(n instanceof yt))throw new TypeError("getTarget must return a Target.");return n};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){D(this._target instanceof Dn);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(D(this._initTarget!==null),this._initTarget instanceof yt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof yt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=n=>(this.state==="canceled"?n._close():this._rememberTarget(n),this._emit("target",{target:n,request:e,isRoot:!0}),this._rootTarget=n,n);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new Nn(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof dr))throw new TypeError("source must be a VideoSource.");if(Vn(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&vs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof lt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new I2(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof mr))throw new TypeError("source must be an AudioSource.");if(Vn(i),i.decoderConfig!==void 0&&bs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof lt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new B2(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof A2))throw new TypeError("source must be a SubtitleSource.");Vn(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new F2(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(Ih(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),n=i[e.type].max;if(a===n)throw new Error(n===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${n} ${e.type} track${n===1?"":"s"}.`);const o=i.total.max;if(this.tracks.length===o)throw new Error(`${this.format._name} does not support more than ${o} tracks${o===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of yr){const n=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),o=e[a].min;if(n<o)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of yr){const n=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),o=e[a].min;if(n<o)throw new Error(o===e[a].max?`${this.format._name} requires exactly ${o} ${a} track${o===1?"":"s"}.`:`${this.format._name} requires at least ${o} ${a} track${o===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ke._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const n=this.tracks.map(o=>o.source._start());await Promise.all(n)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ke._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ke._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ke._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const z2={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},O2=new Set(["window","buddy","dancer"]);function wr(t){return!O2.has(t.typeId)}const H2=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function L2(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!H2.has(i))return a}));return JSON.stringify(e,null,2)}function N2(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>U2(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=z2[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(wr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(wr)}))}:i.data})),e}function U2(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function q2(t,e){const i=new Blob([e],{type:"application/json"});Kt(t,i)}function Kt(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Pt=1280,Mt=1920,D2=30,kr=8,$2=16,Tr=.97,Gn=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function _r(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:tt(t*a),height:tt(e*a)}}function W2(t,e){const i=t/Math.max(e,1);let a="16:9",n=1/0;for(const o of Gn){const s=Math.abs(i-o.rw/o.rh);s<n&&(n=s,a=o.id)}return a}function xr(t,e,i=1280){if(t<2||e<2)return _r(16,9,i);const a=Math.max(t,e),n=i/a;return{width:tt(t*n),height:tt(e*n)}}function j2(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function Cr(t){return Math.min(D2,Math.max(12,Math.round(t||30)))}function Sr(t){return Math.min(32,Math.max(1,t||4))}function Er(t,e,i){const a=R(t||12,kr,$2),n=e*i/(Pt*720);return Math.min(20,Math.max(kr,Math.round(a*Math.max(1,n))))}const V2=Mt,G2=Mt;function Kn(t,e=!1){const i=e?V2:G2;return io(t.exportSettings.width,t.exportSettings.height,i,i)}async function K2(t,e,i){const{width:a,height:n,format:o,quality:s,filename:r}=e.exportSettings,l=o==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,tt(a),tt(n),l,o==="jpg"?Math.max(s,Tr):s);Kt(`${r}.${o==="jpg"?"jpg":"png"}`,c)}async function X2(t,e,i){const{fps:a,duration:n,filename:o,quality:s}=e.exportSettings,{width:r,height:l}=Kn(e,!1),c=pn(e),f=Math.max(1,Math.round(n*a)),d=new dh,m=d.folder(o)??d,u=document.createElement("canvas");for(let h=0;h<f;h++){const g=c+h/a;i?.(h,f),t.paintFrame(e,g,r,l,u);const y=await tg(u,"image/png",s);m.file(`${o}_${String(h).padStart(5,"0")}.png`,await y.arrayBuffer()),await Xn()}const p=await d.generateAsync({type:"blob"});Kt(`${o}_sequence.zip`,p)}async function Pr(t,e,i,a=!1){const n=await Mr(t,e,J2(),i,a);Kt(`${e.exportSettings.filename}.webm`,n)}async function Z2(t,e,i,a=!1){try{return await Q2(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(n){const o=eg();if(o){const r=await Mr(t,e,o,i,a);return Kt(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await Pr(t,e,i,a),`MP4 not available (${n instanceof Error?n.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function Q2(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const n=Cr(e.exportSettings.fps),o=Sr(e.exportSettings.duration),{width:s,height:r}=Kn(e,a),l=new ze({bitrate:Er(e.exportSettings.bitrate,s,r)*1e6}),c=new gr({fastStart:"in-memory"}),d=await ep(["avc","hevc"].filter(T=>c.getSupportedVideoCodecs().includes(T)),{width:s,height:r,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const m=new ja,u=new R2({format:c,target:m}),p=new E2({codec:d,quality:l,keyFrameInterval:1});u.addVideoTrack(p,{frameRate:n});const h=pn(e),g=await Y2(u,c,e,o,h);t.resetTemporal();const y=document.createElement("canvas");await u.start();try{g&&await g.audioSource.add(g.buffer);const T=Math.max(1,Math.round(o*n)),_=1/n,E=e.exportSettings.loopClose!==!1;let P=null;for(let I=0;I<T;I++){const A=h+dn(I/n,o,e.playback.mode,1,!0);i?.(I,T),t.paintFrame(e,A,s,r,y),I===0&&E?P=Ir(y):Ar(y,P,I,T,E);const H=new Re(y,{timestamp:I*_,duration:_});await p.add(H,{keyFrame:I%n===0}),H.close(),await Xn()}await u.finalize()}catch(T){try{await u.cancel()}catch{}throw T}const w=m.buffer;if(!w||w.byteLength<32)throw new Error("MP4 mux produced an empty file");const v=w.slice(0);return Kt(`${e.exportSettings.filename}.mp4`,new Blob([v],{type:"video/mp4"})),!!g}async function Y2(t,e,i,a,n=0){const o=await bd(mi(i));if(!o||o.length<32||o.duration<=0)return null;const s=i.exportSettings.loopClose!==!1;let r;try{r=vd(o,a,s,n)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),c=r.sampleRate>=46e3?48e3:44100,f=e.getSupportedAudioCodecs(),d=["aac","mp3","opus"].filter(p=>f.includes(p)),m=await tp(d.length?d:f,{numberOfChannels:l,sampleRate:c});if(!m)return null;const u=new M2({codec:m,quality:Qm,transform:{numberOfChannels:l,sampleRate:c}});return t.addAudioTrack(u),{audioSource:u,buffer:r}}async function Mr(t,e,i,a,n=!1){const o=Cr(e.exportSettings.fps),s=Sr(e.exportSettings.duration),{width:r,height:l}=Kn(e,n),c=document.createElement("canvas");c.width=r,c.height=l;const f=c.getContext("2d");if(!f)throw new Error("No 2d context");const d=c.captureStream(0),m=d.getVideoTracks()[0],u=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:Er(e.exportSettings.bitrate,r,l)*1e6}),p=[];u.ondataavailable=T=>{T.data.size&&p.push(T.data)},t.resetTemporal(),u.start(200);const h=pn(e),g=Math.max(1,Math.round(s*o)),y=document.createElement("canvas"),w=e.exportSettings.loopClose!==!1;let v=null;for(let T=0;T<g;T++){const _=h+dn(T/o,s,e.playback.mode,1,!0);a?.(T,g),t.paintFrame(e,_,r,l,y),T===0&&w?v=Ir(y):Ar(y,v,T,g,w),f.drawImage(y,0,0,r,l),m.requestFrame?.(),await Xn()}if(await new Promise(T=>{u.onstop=()=>T(),u.stop()}),d.getTracks().forEach(T=>T.stop()),!p.length)throw new Error("recorder produced no data");return new Blob(p,{type:i})}function J2(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function eg(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Ar(t,e,i,a,n){if(!n||!e||i===0)return;const o=j2(i,a);if(o<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=o,s.drawImage(e,0,0,t.width,t.height),s.restore())}function Ir(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Xn(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function tg(t,e,i){return new Promise((a,n)=>{t.toBlob(o=>{o?a(o):n(new Error("frame capture failed"))},e,i)})}async function ig(t,e,i,a,n=!1){const o=e.exportSettings.format;return o==="mp4"?Z2(t,e,a,n):o==="webm"?Pr(t,e,a,n):o==="sequence"?X2(t,e,a):K2(t,e,i)}const ag=768,ng="sana",Br=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function og(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),n=ag/Math.max(i,a);return{width:tt(i*n,256),height:tt(a*n,256)}}function sg(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,n=i>>8&255,o=i&255;let s=Br[0],r=1e9;for(const l of Br){const c=(a-l.r)**2+(n-l.g)**2+(o-l.b)**2;c<r&&(r=c,s=l)}return s.name}function rg(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",n="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${n}`;const o=e.map(sg).filter((s,r,l)=>l.indexOf(s)===r).slice(0,4);return`${a}, palette of ${o.join(", ")}, ${n}`}function lg(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function cg(t,e,i,a=4){const n=[];for(let o=0;o<3;o++)for(let s=0;s<3;s++){const r=Math.min(e-1,Math.floor((s+.5)/3*e)),c=(Math.min(i-1,Math.floor((o+.5)/3*i))*e+r)*4,f=t[c],d=t[c+1],m=t[c+2],u=lg(f,d,m);n.some(h=>(h.r-f)**2+(h.g-d)**2+(h.b-m)**2<1400)||n.push({hex:u,r:f,g:d,b:m})}return n.slice(0,a).map(o=>o.hex)}function ug(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return cg(a.data,e.width,e.height)}function fg(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function dg(t,e,i,a,n=ng){const o=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(n)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(o)}?${s}`}async function hg(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const n=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!n.ok)throw n.status===429||n.status>=500?new Error(`busy:${n.status}`):new Error(`Generation failed (${n.status}). Try a shorter prompt.`);const o=await n.arrayBuffer(),s=new Uint8Array(o),r=n.headers.get("content-type")||"";if(!fg(s,r))throw new Error("Generation returned no image. Try again.");const l=r.startsWith("image/")?r.split(";")[0]:"image/jpeg";return new Blob([o],{type:l})}catch(n){throw n instanceof Error&&n.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):n}finally{clearTimeout(a)}}async function mg(t){const{width:e,height:i}=og(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let n=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await hg(dg(a,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(r){n=r instanceof Error?r:new Error(String(r))}}const o=n?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":n?.message;throw new Error(o||"Generation failed. Try a shorter prompt.")}function Ce(t){const e=M.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Bi(t){if(!t)return;const e=M.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Le(t,e,i=!0){M.setProject(a=>({...a,layers:a.layers.map(n=>n.id===t?e(n):n)}),i)}function wt(t,e=!0){M.setProject(i=>{const a=e?i.layers.map(n=>n.id===M.state.ui.selectedLayerId?{...n,sourceId:t.id}:n):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),M.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function pg(t){const e=M.project.sources.filter(s=>s.kind==="audio");for(const s of e)Yo(s);if(M.setProject(s=>{const r=s.sources.filter(f=>f.kind!=="audio"),l=s.layers.map(f=>e.some(d=>d.id===f.sourceId)?{...f,sourceId:r.find(d=>d.kind!=="audio")?.id??null}:f),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),Ea(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",n=t.beats?.length?`${t.beats.length} hits`:"",o=[i,a,n].filter(Boolean).join(" · ");M.patchUi({selectedSourceId:t.id,status:o?`beat-sync · ${t.name} · ${o}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function Va(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&M.patchUi({status:`reading ${i.name}…`});const n=await ah(i);if(n.kind==="audio"){pg(n);continue}if(e){const o=M.state.ui.selectedSourceId;M.setProject(s=>({...s,sources:s.sources.map(r=>r.id===o?{...n,id:r.id}:r)})),M.patchUi({status:`replaced ${i.name}`})}else wt(n,!0)}catch(a){M.patchUi({status:a instanceof Error?a.message:"import failed"})}}function gg(){M.setProject(e=>{const i=e.sources.find(n=>n.kind!=="audio")?.id??null,a=Lo(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=M.project.layers.at(-1);M.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function vg(t){M.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Fe("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:Fe("fx")}));const n=e.layers.findIndex(s=>s.id===t),o=[...e.layers];return o.splice(n+1,0,a),{...e,layers:o}})}function bg(t){M.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Zn(t){const e=Ce(M.project);if(!e)return;const i=Ho(t);Le(e.id,a=>({...a,effects:[...a.effects,i]})),M.patchUi({selectedEffectId:i.id})}function yg(t,e){Le(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function Fr(t,e,i){Le(t,a=>{const n=a.effects.findIndex(l=>l.id===e),o=n+i;if(n<0||o<0||o>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(n,1);return s.splice(o,0,r),{...a,effects:s}})}function wg(t,e){Le(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function Fi(t,e,i,a,n=!0){Le(t,o=>({...o,effects:o.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),n)}function Xt(t,e=!1){const i=M.state.ui;(t==="all"||t==="selected")&&M.setProject(n=>({...n,seed:n.seed+1+(Date.now()&255)>>>0}),!1),M.setProject(n=>{let s=Ro(n,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.includeCritters&&(s=Fo(s)),t==="all"&&i.includeIdol&&(s=Pf(s)),s});const a=M.project.layers[0]?.effects.map(n=>n.typeId).join(" · ");M.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${M.project.seed}`})}function kg(){const t=Ce(M.project);if(!t)return;const e=t.effects.find(o=>o.typeId==="critters"),i=1+(M.project.seed+Date.now())%9998;if(e){Fi(t.id,e.id,"seed",i),M.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Zn("critters");const a=Ce(M.project),n=Bi(a);a&&n?.typeId==="critters"&&Fi(a.id,n.id,"seed",i),M.patchUi({status:"stamped floaters"})}function Tg(){const t=Ce(M.project);if(!t)return;const e=t.effects.find(o=>o.typeId==="dancer"),i=1+(M.project.seed+Date.now()+17)%9998;if(e){Fi(t.id,e.id,"seed",i),M.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Zn("dancer");const a=Ce(M.project),n=Bi(a);a&&n?.typeId==="dancer"&&Fi(a.id,n.id,"seed",i),M.patchUi({status:"stamped idol"})}function _g(){M.setProject(t=>Ff({...t,seed:t.seed+1+(Date.now()&255)>>>0})),M.patchUi({status:"new floater and idol seeds"})}async function xg(t){const e=M.project,{width:i,height:a}=io(e.exportSettings.width||1280,e.exportSettings.height||720,Mt,Mt);try{const n=await t.capture(e,e.playback.time,i,a,"image/png",Tr),o=await Zo(n,`print_${Date.now()}.png`);wt(o,!0),M.patchUi({status:"printed the live frame as a new still"})}catch(n){M.patchUi({status:n instanceof Error?n.message:"print failed"})}}function Rr(t){M.setProject(e=>({...e,seed:e.seed+t>>>0}))}function zr(){q2(`${M.project.name||"phosphene"}.phos.json`,L2(M.project)),M.patchUi({status:"project downloaded"})}async function Cg(t){const e=await t.text(),i=N2(e);M.replace(i),M.patchUi({status:"project loaded — re-drop media if needed"})}function Sg(){const t=prompt("Preset name",`look ${M.project.presets.length+1}`);if(!t)return;const e=ln(M.project,t);M.setProject(i=>({...i,presets:[...i.presets,e]}))}function Qn(t){const e=M.project.presets.find(i=>i.id===t);e&&(M.setProject(i=>kf(i,e)),M.patchUi({status:`preset ${e.name}`}))}function Eg(){const t=Tf(M.project.presets,M.project.seed+Date.now());if(!t){M.patchUi({status:"no presets saved"});return}Qn(t.id)}function Pg(t){const e=M.project.presets.find(i=>i.id===t);e&&M.setProject(i=>({...i,presets:[...i.presets,_f(e)]}))}function Mg(t){M.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Or(){const t=M.state.ui,e=Ce(M.project),i=Bi(e),a=t.selectedParam?.paramId;if(!e||!i||!a){M.patchUi({status:"select a numeric parameter first"});return}const n=i.params[a];if(typeof n!="number"){M.patchUi({status:"keyframes are numeric"});return}const o={id:Fe("kf"),time:M.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:n,easing:"smooth"};M.setProject(s=>({...s,keyframes:[...s.keyframes,o]})),M.patchUi({status:`key ${a} @ ${o.time.toFixed(2)}s`})}function Ag(){M.setProject(t=>({...t,keyframes:[]}))}async function Ig(){const t=M.project.sources.find(i=>i.id===M.state.ui.selectedSourceId);if(!t)return;const e=await sh(t);e&&wt(e,!0)}function Hr(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of M.project.sources)Yo(e);M.replace(No()),M.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Bg(){if(M.state.ui.generating)return;const t=M.state.ui.prompt.trim();if(!t){M.patchUi({status:"type a prompt first"});return}M.patchUi({generating:!0,status:"generating new image…"});try{const e=M.project.sources.find(c=>c.id===M.state.ui.selectedSourceId),i=M.state.ui.useSourceForGen;let a=[];const n=e?.frozenFrame||e?.bitmap||e?.video||null;i&&n&&(a=ug(n));const o=rg(t,a,i&&a.length>0),s=M.project.seed+Date.now()>>>0,r=await mg({prompt:o,seed:s,width:M.project.exportSettings.width,height:M.project.exportSettings.height,onStatus:c=>M.patchUi({generating:!0,status:c},!1)}),l=await Zo(r,`gen_${s}.jpg`);wt(l,!0),M.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){M.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let Ga=!1,Ri=null;function Fg(t,e){Ri=e,t.innerHTML="",t.className="shell",t.innerHTML=`
    <header class="topbar">
      <div class="brand">PHOSPHENE<small>VISUAL INSTRUMENT</small></div>
      <span class="led" id="led"></span>
      <input type="text" id="proj-name" style="width:140px" />
      <button class="btn tiny" data-act="save">Save</button>
      <button class="btn tiny" data-act="load">Load</button>
      <button class="btn tiny hot" data-act="scratch">New</button>
      <button class="btn tiny acid" data-act="export" id="top-export">Export</button>
      <input type="file" id="proj-file" accept=".json,.phos.json" hidden />
      <input id="audio-file" type="file" accept="audio/*,.mp3,.wav,.ogg,.m4a,.aac,.flac" hidden />
      <div class="sp"></div>
      <label class="status">SEED</label>
      <input type="number" id="seed" style="width:84px" />
      <button class="btn tiny" data-act="seed-">-</button>
      <button class="btn tiny" data-act="seed+">+</button>
      <label class="status">RND</label>
      <input type="range" id="rnd-amt" min="0" max="1" step="0.01" style="width:90px" />
      <label class="check" title="When on, Rand all / Rand wacky plant a short stack from the right-panel effects. When off, the roll stays a clean collage.">
        <input type="checkbox" id="inc-fx" /> effects
      </label>
      <button class="btn tiny acid" data-act="rand-all">Rand all</button>
      <button class="btn tiny hot" data-act="rand-wacky" title="A new kit, ground, and move. Effects only if the effects box is on.">Rand wacky</button>
      <button class="btn tiny ${M.project.cutEdit?.enabled?"acid":""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
      <button class="btn tiny" data-act="rand-sel">Rand sel</button>
      <button class="btn tiny" data-act="rand-param">Rand param</button>
      <select id="quality">
        <option value="draft">Draft</option>
        <option value="preview">Preview</option>
        <option value="export">Full</option>
      </select>
      <button class="btn tiny" data-act="help">?</button>
    </header>
    <div class="workspace">
      <aside class="rail" id="rail"></aside>
      <section class="stage">
        <div class="viewport" id="view">
          <div class="hud" id="hud"></div>
          <div class="dropveil" id="veil">DROP IMAGE / VIDEO / MP3</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>PHOSPHENE</h3>
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tunnel / spiral / helix / bloom / prism plus Gyre, Well, Hall, Drift, Braid, and Sway are 3D fly-throughs — stamps travel in depth and around the frame so a big screen feels like you are moving through the picture. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Chain can optionally wear Animal Chain parts (dragon, dog, ferret, caterpillar, zebra) on the same path. Hunt is a documentary camera on top of any move: watch wide, notice a stamp, snap in, follow, return. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Check <em>effects</em> (top bar, or under Effects on the right) if you also want a short stack from the right panel. Uncheck it for a clean collage. Wacky rolls a thicker stack when effects are on. No dancer. Rolls stay small and slower — no giant stamps, no frantic bounce/flip/flash.</li>
          <li><strong>Cut edit</strong> is the other randomizer. Drop an MP3 first. It finds the first downbeat (the kick, not the snare) and cuts on that metronome — bars and half-bars, not stray 8th notes. Snap / step / spot flip on the same frames as the drums. Some shots hold a bar or two. Some are two-beat fills that land back on 1.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music, Kitchen, Sky, Street, Arcade, Haunt, Sport, School. Each pack is its own stamp set — switching a kit replaces every icon. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Color</strong> packs (Brine, Candy, Ember, Neon…) recast washes and inks across any kit. <strong>Wash</strong> taps a color from the active pack. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is playing and the clip keeps that part of the song — the window you are hearing, with the visuals already synced to it. Export from the start of the track if you rewind first. Stills and PNG sequences stay silent. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li><strong>Texture</strong> — Dot Screen, Riso, Etching, Holo Foil, Crackle, Velvet Nap sit under Effects. They print, foil, or flock the collage without replacing the stamps.</li>
          <li>Bottom-right: pick a shape, tap <strong>720</strong> or <strong>1080</strong>, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). Clips save at 30 fps in HD so they stay sharp without a long wait. The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",zg(t),M.subscribe(()=>{Ga||Yn(t)}),Yn(t)}async function Rg(t=!1){if(Ri&&!M.state.ui.exporting){M.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),M.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await ig(Ri,M.project,M.project.playback.time,(i,a)=>{M.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);M.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){M.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function zg(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,n=i.dataset.id;if(a==="save"&&zr(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Hr(),a==="imagine"&&Bg(),a==="seed-"&&Rr(-1),a==="seed+"&&Rr(1),a==="rand-all"&&Xt("all"),a==="rand-wacky"&&Xt("all",!0),a==="cut-edit"){const o=!M.project.cutEdit?.enabled;M.setProject(s=>({...s,cutEdit:{enabled:o,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),M.patchUi({status:o?M.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&_g(),a==="reprint"&&Ri&&xg(Ri),a==="rand-sel"&&Xt("selected"),a==="rand-param"){const o=i.dataset.paramId,s=Ce(M.project),r=Bi(s);o&&s&&r&&M.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:o}},!1),Xt("param")}if(a==="help"&&M.patchUi({helpOpen:!M.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&Ig(),a==="gen"){const o=i.dataset.kind??"plasma",s=Zt(),r=i.dataset.kit??(Ae(o)?It(s?.collageKit):void 0),l=i.dataset.move??(Ae(o)?ho(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,f=jt(o,r,l,Dg(s,c));wt(f,!0),M.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}${f.collageKitB?` · ${f.collageKitB}`:""}`:f.collageKit?`place · ${o} · ${f.collageKit}`:o==="critters"?"floaters on this layer":`place · ${o}`})}if(a==="mash"){const o=i.dataset.kit??"love",s=Zt();if(s){const r=s.collageKitB===o||s.collageKit===o?void 0:o;ce(l=>Lr({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=jt("wallpaper","sailor","rush",{kitB:o});wt(r,!0),M.patchUi({status:`mash · sailor · ${o}`})}}if(a==="wash"){const o=i.dataset.hex;o&&(ce(s=>({...s,colorA:o}),`wash · ${o}`)||(wt(jt("wallpaper","sailor","rush",{wash:o}),!0),M.patchUi({status:`wash · ${o}`})))}if(a==="color-pack"){const o=hi(i.dataset.pack),s=Zt();if(s){const r=It(s.collageKit),l=Wt(r,o),c=(s.colorA??"").toLowerCase(),f=l.some(d=>d.toLowerCase()===c);ce(d=>({...d,collageColorPack:o,colorA:f?d.colorA:l[0],colorB:ht(r,o)}),`color · ${nn[o]}`)}else{const r=jt("wallpaper","sailor","rush",{colorPack:o});wt(r,!0),M.patchUi({status:`color · ${nn[o]}`})}}if(a==="night"){const s=!Zt()?.collageNight;ce(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(wt(jt("wallpaper","sailor","rush",{night:!0}),!0),M.patchUi({status:"night wash"}))}if(a==="camera"){const o=Yt(i.dataset.camera);ce(s=>({...s,collageCamera:o}),o==="hunt"?"camera · documentary search":"camera · fixed")}if(a==="camera-feel"){const o=oa(i.dataset.feel);ce(s=>({...s,collageCameraFeel:o}),`camera feel · ${o}`)}if(a==="hunt-select"){const o=sa(i.dataset.select);ce(s=>({...s,collageHuntSelect:o}),`subject select · ${o}`)}if(a==="hunt-focus"){const s=!Zt()?.collageHuntFocus;ce(r=>({...r,collageHuntFocus:s}),s?"manual focus on":"manual focus off")}if(a==="chain-animal"){const o=oi(i.dataset.animal);ce(s=>Lr({...s,collageChainAnimal:o}),o==="off"?"animal chain off":`animal chain · ${o}`)}if(a==="stamp-critters"&&kg(),a==="stamp-idol"&&Tg(),a==="add-layer"&&gg(),a==="dup-layer"&&n&&vg(n),a==="del-layer"&&n&&bg(n),a==="sel-layer"&&n&&M.patchUi({selectedLayerId:n,selectedEffectId:M.project.layers.find(o=>o.id===n)?.effects[0]?.id??null}),a==="sel-fx"&&n&&M.patchUi({selectedEffectId:n}),a==="sel-src"&&n&&M.patchUi({selectedSourceId:n}),a==="bypass"&&n){const o=Ce(M.project);o&&wg(o.id,n)}if(a==="fx-up"&&n){const o=Ce(M.project);o&&Fr(o.id,n,-1)}if(a==="fx-dn"&&n){const o=Ce(M.project);o&&Fr(o.id,n,1)}if(a==="fx-del"&&n){const o=Ce(M.project);o&&yg(o.id,n)}if(a==="key"&&Or(),a==="key-clear"&&Ag(),a==="pst-save"&&Sg(),a==="pst-rand"&&Eg(),a==="pst-load"&&n&&Qn(n),a==="pst-dup"&&n&&Pg(n),a==="pst-del"&&n&&Mg(n),a==="export"&&Rg(),a==="clip"){const o=Math.max(1,Number(i.dataset.secs||4));M.setProject(s=>({...s,duration:Math.max(s.duration,o),exportSettings:{...s.exportSettings,duration:o,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),M.patchUi({status:`${o}s clip ready — hit Export`})}if(a==="exp-aspect"&&n){const o=Gn.find(s=>s.id===n);if(o){const s=Math.max(M.project.exportSettings.width,M.project.exportSettings.height,Pt),r=_r(o.rw,o.rh,Math.min(Mt,Math.max(Pt,s)));M.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const o=Number(i.dataset.long||Pt),s=M.project,r=xr(s.exportSettings.width,s.exportSettings.height,o);M.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:o>=Mt?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const o=M.project,s=Ce(o),r=o.sources.find(d=>d.id===(s?.sourceId??o.sources[0]?.id)),l=r?.kind==="audio"?o.sources.find(d=>d.kind!=="audio"):r,c=Math.max(o.exportSettings.width,o.exportSettings.height,Pt),f=xr(l?.width??1280,l?.height??720,Math.min(Mt,c));M.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:f.width,height:f.height}}))}if(a==="play"&&(Ea(),M.setProject(o=>({...o,playback:{...o.playback,playing:!o.playback.playing}}))),a==="use-src"&&n){if(M.project.sources.find(r=>r.id===n)?.kind==="audio")return;const s=Ce(M.project);s&&Le(s.id,r=>({...r,sourceId:n}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(Cg(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Va(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Va(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(Va(i.files,!1),i.value=""),i.id==="quality"&&M.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&Zn(i.value),i.value=""),i.id==="blend"){const a=Ce(M.project);a&&Le(a.id,n=>({...n,blendMode:i.value}))}if(i.id==="mask-type"){const a=Ce(M.project);a&&Le(a.id,n=>({...n,mask:{...n.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&Qn(i.value),i.id==="exp-format"&&M.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&M.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&M.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&M.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&M.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=M.project;if(i.id==="gen-prompt"&&M.patchUi({prompt:i.value},!1),i.id==="gen-src"&&M.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&M.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&M.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&M.patchUi({includeEffects:i.checked}),i.id==="seed"&&M.setProject(n=>({...n,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&M.setProject(n=>({...n,randomAmount:Number(i.value)}),!1),i.id==="speed"&&M.setProject(n=>({...n,playback:{...n.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&M.setProject(n=>({...n,playback:{...n.playback,loop:i.checked}}),!1),i.id==="loop-close"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&M.setProject(n=>({...n,playback:{...n.playback,freeze:i.checked}}),!1),i.id==="time"&&M.setProject(n=>({...n,playback:{...n.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const n=Ce(a);n&&Le(n.id,o=>({...o,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const n=Ce(a);n&&Le(n.id,o=>({...o,enabled:i.checked}),!1)}for(const n of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${n}`&&M.setProject(o=>({...o,globalFeedback:{...o.globalFeedback,[n]:Number(i.value)}}),!1),i.id===`lfb-${n}`){const o=Ce(a);o&&Le(o.id,s=>({...s,feedback:{...s.feedback,[n]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const n=Ce(a),o=i.id.slice(3);n&&o in n.transform&&Le(n.id,s=>({...s,transform:{...s.transform,[o]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Ga=!0;const n=Og(i.dataset.fxType||"",i.dataset.param),o=Hg(i,n);Fi(i.dataset.layer,i.dataset.fx,i.dataset.param,o,!1),M.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&ce(n=>({...n,collageScale:li(Number(i.value))}),void 0,!0),i.id==="collage-density"&&ce(n=>({...n,collageDensity:ci(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&ce(n=>({...n,collagePace:ei(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&ce(n=>({...n,collageChainTravel:ti(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&ce(n=>({...n,collageChainMorph:ii(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&ce(n=>({...n,collageChainVary:ai(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&ce(n=>({...n,collageChainSmooth:ni(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&ce(n=>({...n,collageSpringStrength:Li(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&ce(n=>({...n,collageSpringDamp:Ni(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&ce(n=>({...n,collageSpringDist:Ui(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&ce(n=>({...n,collageSpringElast:qi(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&ce(n=>({...n,collageSpringBreak:Di(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&ce(n=>({...n,collageFlowScale:$i(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&ce(n=>({...n,collageFlowTurb:Wi(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&ce(n=>({...n,collageFlowEvolve:ji(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&ce(n=>({...n,collageFlowForce:Vi(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&ce(n=>({...n,collageFlowDepth:Gi(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&ce(n=>({...n,collageBoidCohere:Ki(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&ce(n=>({...n,collageBoidSep:Xi(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&ce(n=>({...n,collageBoidAlign:Zi(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&ce(n=>({...n,collageBoidRadius:Qi(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&ce(n=>({...n,collageBoidSpeed:Yi(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&ce(n=>({...n,collagePoleCount:Ji(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&ce(n=>({...n,collagePoleAttract:ea(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&ce(n=>({...n,collagePoleRepel:ta(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&ce(n=>({...n,collagePoleSpeed:ia(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&ce(n=>({...n,collagePoleFalloff:aa(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&ce(n=>({...n,collagePoleSwitch:na(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-min"&&ce(n=>({...n,collageHuntWideMin:ra(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-max"&&ce(n=>({...n,collageHuntWideMax:la(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-min"&&ce(n=>({...n,collageHuntFollowMin:ca(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-max"&&ce(n=>({...n,collageHuntFollowMax:ua(Number(i.value))}),void 0,!0),i.id==="collage-hunt-snap"&&ce(n=>({...n,collageHuntSnap:fa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-zoom"&&ce(n=>({...n,collageHuntZoom:da(Number(i.value))}),void 0,!0),i.id==="collage-hunt-tight"&&ce(n=>({...n,collageHuntTight:ha(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-min"&&ce(n=>({...n,collageHuntReactMin:ma(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-max"&&ce(n=>({...n,collageHuntReactMax:pa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-precision"&&ce(n=>({...n,collageHuntPrecision:ga(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-speed"&&ce(n=>({...n,collageHuntFocusSpeed:va(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-error"&&ce(n=>({...n,collageHuntFocusError:ba(Number(i.value))}),void 0,!0),i.id==="collage-hunt-variation"&&ce(n=>({...n,collageHuntVariation:ya(Number(i.value))}),void 0,!0),i.id==="exp-q"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&M.setProject(n=>({...n,exportSettings:{...n.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Ga&&(Ga=!1,Yn(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),M.state.ui.dropActive||M.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&M.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),M.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Va(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Ea(),M.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Xt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Xt("all",!0),(e.key==="k"||e.key==="K")&&Or(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Hr()),e.key==="?"&&M.patchUi({helpOpen:!M.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),zr()))})}function Og(t,e){return at(t)?.params.find(i=>i.id===e)}function Hg(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Yn(t){const{project:e,ui:i}=M.state,a=t.querySelector("#proj-name"),n=t.querySelector("#seed"),o=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),n&&document.activeElement!==n&&(n.value=String(e.seed)),o&&(o.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const f=t.querySelector("#inc-fx");f&&(f.checked=i.includeEffects);const d=t.querySelector("#inc-fx-stack");d&&(d.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(m=>{m.classList.toggle("acid",!!e.cutEdit?.enabled)}),Lg(t.querySelector("#rail")),Ng(t.querySelector("#stack")),qg(t.querySelector("#transport"))}function Lg(t){const e=M.project,i=M.state.ui,a=e.sources.find(n=>n.id===i.selectedSourceId&&Ae(n.generator))??e.sources.find(n=>Ae(n.generator));t.innerHTML=`
    <div class="sec">Sources</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Import</button>
      <button class="btn tiny hot" data-act="import-audio" title="Upload an MP3. Playback starts and the collage hits the beat.">MP3</button>
      <button class="btn tiny" data-act="replace">Replace</button>
      <button class="btn tiny" data-act="freeze">Still frame</button>
      <button class="btn tiny" data-act="reprint">Print frame</button>
      <input id="media-file" type="file" accept="image/*,video/*,audio/*,.tif,.tiff,.mov,.webm,.mp4,.gif,.mp3,.wav,.ogg,.m4a,.aac,.flac" multiple hidden />
      <input id="replace-file" type="file" accept="image/*,video/*,audio/*,.tif,.tiff,.mov,.webm,.mp4,.gif,.mp3,.wav,.ogg,.m4a,.aac,.flac" hidden />
    </div>
    <hr class="div" />
    <div class="sec">Generate new image</div>
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Ge(i.prompt)}</textarea>
    <label class="check"><input type="checkbox" id="gen-src" ${i.useSourceForGen?"checked":""}/> use selected source as reference</label>
    <button class="btn tiny acid" data-act="imagine" ${i.generating?"disabled":""}>${i.generating?"working…":"Generate"}</button>
    <button class="btn tiny" data-act="imagine" ${i.generating||!i.prompt.trim()?"disabled":""}>Again</button>
    <div class="status" style="margin-top:4px">Usually a few seconds. Again rolls a new seed. Does not overwrite the upload.</div>
    <div class="row" style="margin-top:6px">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="sailor">Sailor</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="circus">Circus</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="fruit">Fruit</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="nature">Grove</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="love">Love</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="space">Space</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="sweet">Sweet</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="music">Music</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="kitchen">Kitchen</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="weather">Sky</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="city">Street</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="arcade">Arcade</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="haunt">Haunt</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="sport">Sport</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="school">School</button>
    </div>
    <div class="sec">Mash</div>
    <div class="row">
      ${Tt.map(n=>`<button class="btn tiny ${a?.collageKitB===n?"acid":""}" data-act="mash" data-kit="${n}">${yl(n)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${di.map(n=>`<button class="btn tiny ${hi(a?.collageColorPack)===n?"acid":""}" data-act="color-pack" data-pack="${n}">${nn[n]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${Wt(It(a?.collageKit),a?.collageColorPack).map(n=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===n.toLowerCase()?"on":""}" data-act="wash" data-hex="${n}" style="background:${n}" title="${n}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${li(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${li(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${ci(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${ci(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${ei(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${ei(a?.collagePace).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Move</div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="wallpaper" data-move="rush">Rush</button>
      <button class="btn tiny" data-act="gen" data-kind="giants" data-move="tunnel">Tunnel</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="spiral">Spiral</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="helix">Helix</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="bloom">Bloom</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="prism">Prism</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="gyre">Gyre</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="well">Well</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="hall">Hall</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="drift">Drift</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="braid">Braid</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="sway">Sway</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="tide">Tide</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="rings">Rings</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="loom">Loom</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="petal">Petal</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flock">Flock</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="wheel">Wheel</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="silk">Silk</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="mix">Mix</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="chain">Chain</button>
    </div>
    ${a?.collageMove==="chain"?`<div class="sec">Chain</div>
    <div class="param"><span>Movement Speed</span>
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${ti(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${ti(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${ii(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${ii(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${ai(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${ai(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${ni(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${ni(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Animal Chain</div>
    <div class="row">
      ${wa.map(n=>`<button class="btn tiny ${oi(a?.collageChainAnimal)===n?"acid":""}" data-act="chain-animal" data-animal="${n}">${po[n]}</button>`).join("")}
    </div>`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${le("collage-spring-strength","Spring Strength",Li(a.collageSpringStrength),.2,2.2,.05)}
    ${le("collage-spring-damp","Damping",Ni(a.collageSpringDamp),.08,1,.02)}
    ${le("collage-spring-dist","Connection Distance",Ui(a.collageSpringDist),.12,.72,.02)}
    ${le("collage-spring-elast","Elasticity",qi(a.collageSpringElast),.2,2.2,.05)}
    ${le("collage-spring-break","Break / Reconnect",Di(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${le("collage-flow-scale","Field Scale",$i(a.collageFlowScale),.28,2.4,.05)}
    ${le("collage-flow-turb","Turbulence",Wi(a.collageFlowTurb),0,2,.05)}
    ${le("collage-flow-evolve","Evolution Speed",ji(a.collageFlowEvolve),.08,2.2,.05)}
    ${le("collage-flow-force","Force",Vi(a.collageFlowForce),.2,2.2,.05)}
    ${le("collage-flow-depth","Depth Influence",Gi(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${le("collage-boid-cohere","Cohesion",Ki(a.collageBoidCohere),.1,2.2,.05)}
    ${le("collage-boid-sep","Separation",Xi(a.collageBoidSep),.15,2.4,.05)}
    ${le("collage-boid-align","Alignment",Zi(a.collageBoidAlign),.1,2.2,.05)}
    ${le("collage-boid-radius","Perception Radius",Qi(a.collageBoidRadius),.08,.55,.01)}
    ${le("collage-boid-speed","Speed",Yi(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${le("collage-pole-count","Pole Count",Ji(a.collagePoleCount),1,5,1)}
    ${le("collage-pole-attract","Attraction",ea(a.collagePoleAttract),.15,2.2,.05)}
    ${le("collage-pole-repel","Repulsion",ta(a.collagePoleRepel),.1,2.2,.05)}
    ${le("collage-pole-speed","Pole Speed",ia(a.collagePoleSpeed),.12,2.2,.05)}
    ${le("collage-pole-falloff","Falloff",aa(a.collagePoleFalloff),.6,2.8,.05)}
    ${le("collage-pole-switch","Polarity Switching",na(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Camera</div>
    <div class="row">
      ${no.map(n=>`<button class="btn tiny ${Yt(a?.collageCamera)===n?"acid":""}" data-act="camera" data-camera="${n}">${n==="hunt"?"Hunt":"Fixed"}</button>`).join("")}
    </div>
    ${Yt(a?.collageCamera)==="hunt"?`<div class="sec">Documentary Search</div>
    <div class="row">
      ${so.map(n=>`<button class="btn tiny ${sa(a?.collageHuntSelect)===n?"acid":""}" data-act="hunt-select" data-select="${n}">${n==="random"?"Random":n==="reactive"?"Reactive":"Mixed"}</button>`).join("")}
    </div>
    <div class="row">
      ${oo.map(n=>`<button class="btn tiny ${oa(a?.collageCameraFeel)===n?"acid":""}" data-act="camera-feel" data-feel="${n}">${n==="handheld"?"Handheld":"Perfect"}</button>`).join("")}
      <button class="btn tiny ${a?.collageHuntFocus?"acid":""}" data-act="hunt-focus">Manual Focus</button>
    </div>
    ${le("collage-hunt-wide-min","Wide / Search Duration Min",ra(a?.collageHuntWideMin),.4,12,.1)}
    ${le("collage-hunt-wide-max","Wide / Search Duration Max",la(a?.collageHuntWideMax),.6,16,.1)}
    ${le("collage-hunt-follow-min","Subject Follow Duration Min",ca(a?.collageHuntFollowMin),.4,12,.1)}
    ${le("collage-hunt-follow-max","Subject Follow Duration Max",ua(a?.collageHuntFollowMax),.6,16,.1)}
    ${le("collage-hunt-snap","Snap Zoom Speed",fa(a?.collageHuntSnap),.35,2.4,.05)}
    ${le("collage-hunt-zoom","Zoom Range / Close Framing",da(a?.collageHuntZoom),.35,2.4,.05)}
    ${le("collage-hunt-tight","Tracking Tightness",ha(a?.collageHuntTight),.12,1,.02)}
    ${le("collage-hunt-react-min","Reaction Time Min",ma(a?.collageHuntReactMin),.04,1.4,.02)}
    ${le("collage-hunt-react-max","Reaction Time Max",pa(a?.collageHuntReactMax),.08,2,.02)}
    ${le("collage-hunt-precision","Operator Precision",ga(a?.collageHuntPrecision),0,1,.02)}
    ${le("collage-hunt-variation","Behavior Variation",ya(a?.collageHuntVariation),0,1,.02)}
    ${a?.collageHuntFocus?`${le("collage-hunt-focus-speed","Focus Correction Speed",va(a?.collageHuntFocusSpeed),.15,2.2,.05)}
    ${le("collage-hunt-focus-error","Focus Error Amount",ba(a?.collageHuntFocusError),0,1.6,.05)}`:""}`:""}
    <div class="sec">Music</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="bars">Bars</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="ripple">Ripple</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="swing">Swing</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="burst">Burst</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="halo">Halo</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="wave">Wave</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="drop">Drop</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spot">Spot</button>
    </div>
    <div class="sec">Drum / illusion</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="pong">Pong</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="fall">Fall</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="snap">Snap</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="step">Step</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="moire">Moire</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poly">Poly</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="grid">Grid</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="zip">Zip</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="liss">Liss</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="ghost">Ghost</button>
    </div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="bounce">Bounce</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="glow">Glow</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="kick">Kick</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="jelly">Jelly</button>
    </div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="flip">Flip</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="flash">Flash</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="hop">Hop</button>
      <button class="btn tiny hot" data-act="rand-wacky">Rand wacky</button>
      <button class="btn tiny ${e.cutEdit?.enabled?"acid":""}" data-act="cut-edit">Cut edit</button>
    </div>
    <div class="status" style="margin-top:4px">Each clip keeps one move. Rush / tunnel / gyre / well / hall / drift / braid / sway fly through depth so a big screen feels 3D. Matter moves are a spring mesh, a flowing current, a flock, or wandering magnets — each with its own sliders. Chain is a freeform 3D conga line. Drum / illusion locks to the tempo grid. Music punches glow, not the path.</div>
    <div style="margin-top:8px">
      ${e.sources.map(n=>{const o=n.kind==="audio"?`beat-sync · ${Qt(n.duration||0)}${n.bpm&&n.bpm>40?` · ${n.bpm}bpm`:""}`:`${n.kind} ${n.width}×${n.height}`,s=n.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${n.id}">use</button>`;return`
        <div class="thumb ${n.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${n.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Ge(n.name)}</b><span>${o}</span></div>
          ${s}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${le("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${le("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${le("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${le("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${le("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${le("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(n=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Ge(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${n.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Ng(t){const e=M.project,i=Ce(e),a=Bi(i),n=yf();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(o=>`
      <div class="layer ${o.id===i?.id?"on":""}" data-act="sel-layer" data-id="${o.id}">
        <div class="hd">
          <span class="name">${Ge(o.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${o.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${o.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${le("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${lh.map(o=>`<option value="${o}" ${o===i.blendMode?"selected":""}>${o}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${le("tr-x","X",i.transform.x,-1,1,.01)}
      ${le("tr-y","Y",i.transform.y,-1,1,.01)}
      ${le("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${le("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${le("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${le("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${le("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${le("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${le("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(o=>`<option ${i.mask.type===o?"selected":""} value="${o}">${o}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${M.state.ui.includeEffects?"checked":""}/> include in randomizer</div>
      ${i.effects.map((o,s)=>`
        <div class="fx ${o.id===a?.id?"on":""} ${o.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${o.id}">${s+1}. ${Ge(at(o.typeId)?.name??o.typeId)}</span>
            <span>
              <button class="btn tiny" data-act="bypass" data-id="${o.id}">${o.enabled?"on":"off"}</button>
              <button class="btn tiny" data-act="fx-up" data-id="${o.id}">↑</button>
              <button class="btn tiny" data-act="fx-dn" data-id="${o.id}">↓</button>
              <button class="btn tiny" data-act="fx-del" data-id="${o.id}">x</button>
            </span>
          </div>
        </div>`).join("")}
      <select id="add-fx" class="addfx">
        <option value="">+ add effect</option>
        ${wf.map(o=>{const s=(n[o.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${o.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Ge(at(a.typeId)?.name??"params")} · ${Ge(at(a.typeId)?.description??"")}</div>
        ${(at(a.typeId)?.params??[]).map(o=>Ug(i.id,a,o)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(o=>{o.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",o.getAttribute("data-fx-index")||"0")}),o.addEventListener("dragover",s=>s.preventDefault()),o.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(o.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||Le(i.id,c=>{const f=[...c.effects],[d]=f.splice(r,1);return f.splice(l,0,d),{...c,effects:f}})})})}function Ug(t,e,i){const a=e.params[i.id]??i.default,n=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${n} ${a?"checked":""}/> ${Ge(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Ge(i.label)}</span><input type="color" ${n} value="${Ge(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Ge(i.label)}</span>
      <select ${n}>${(i.options??[]).map(o=>`<option value="${o.value}" ${o.value===a?"selected":""}>${o.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Ge(i.label)}</span>
    <input type="range" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function qg(t){const e=M.project,i=e.playback,a=e.exportSettings,n=M.state.ui.exporting,o=Math.max(e.duration,.1),s=i.time/o*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(r=>`<option ${i.mode===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      ${le("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${Qt(i.time)} / ${Qt(o)}</span>
        <span class="status" id="status-line">${M.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(r=>`<div class="key" style="left:${r.time/o*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${s}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${o}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${Gn.map(r=>`<button class="btn tiny ${W2(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        ${(()=>{const r=Math.max(a.width,a.height);return`<button class="btn tiny ${r<=Pt?"acid":""}" data-act="exp-size" data-long="${Pt}">720</button>
        <button class="btn tiny ${r>Pt?"acid":""}" data-act="exp-size" data-long="${Mt}">1080</button>`})()}
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map(r=>`<option ${a.format===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2,4,6,8,16,32].map(r=>`<button class="btn tiny ${Number(a.duration)===r?"acid":""}" data-act="clip" data-secs="${r}" ${n?"disabled":""}>${r}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${a.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${a.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${n?"disabled":""}>${n?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*o;M.setProject(f=>({...f,playback:{...f.playback,time:Math.max(0,c)}}))})}function le(t,e,i,a,n,o){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${n}" step="${o}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${n}" step="${o}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Zt(){const t=M.project,e=t.sources.find(n=>n.id===M.state.ui.selectedSourceId);if(e&&Ae(e.generator))return e;const i=Ce(t),a=t.sources.find(n=>n.id===i?.sourceId);return a&&Ae(a.generator)?a:t.sources.find(n=>Ae(n.generator))}function Dg(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,chainAnimal:t.collageChainAnimal,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,camera:t.collageCamera,cameraFeel:t.collageCameraFeel,huntWideMin:t.collageHuntWideMin,huntWideMax:t.collageHuntWideMax,huntFollowMin:t.collageHuntFollowMin,huntFollowMax:t.collageHuntFollowMax,huntSnap:t.collageHuntSnap,huntZoom:t.collageHuntZoom,huntTight:t.collageHuntTight,huntReactMin:t.collageHuntReactMin,huntReactMax:t.collageHuntReactMax,huntPrecision:t.collageHuntPrecision,huntSelect:t.collageHuntSelect,huntFocus:t.collageHuntFocus,huntFocusSpeed:t.collageHuntFocusSpeed,huntFocusError:t.collageHuntFocusError,huntVariation:t.collageHuntVariation,wash:e?t.colorA:void 0}}function Lr(t){return!t.collageKit||!t.collageMove?t:{...t,name:Oo(t.collageMove,t.collageKit,t.collageKitB,t.collageChainAnimal)}}function ce(t,e,i=!1){const a=Zt();return a?(M.setProject(n=>({...n,sources:n.sources.map(o=>o.id===a.id?t(o):o)}),!i),e&&M.patchUi({status:e},!i),!0):!1}function Ge(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Qt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Nr(t,e){if(M.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),n=Math.max(16,Math.floor(a.width*i)),o=Math.max(16,Math.floor(a.height*i));(t.width!==n||t.height!==o)&&(t.width=n,t.height=o)}function $g(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${Qt(i)}  ${e.toFixed(0)}FPS  ${M.project.quality.toUpperCase()}`);const n=Math.max(M.project.duration,.1),o=t.querySelector(".playhead");o&&(o.style.left=`${i/n*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${Qt(i)} / ${Qt(n)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=M.state.ui.status)}const Ur=window;Ur.__phospheneMark=!0;const qr=document.querySelector("#app");if(!qr)throw new Error("#app missing");const Jn=qr,eo=document.createElement("canvas");async function Wg(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new Yd(eo)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:Jn.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}Fg(Jn,t),Ur.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Nr(eo,e)).observe(e),Nr(eo,e);let a=performance.now(),n=60,o=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const f=M.state.ui.exporting,d=M.project,m=Wf(d,d.playback.time),u=mi(d);if(!f&&d.playback.playing&&!d.playback.freeze){const p=u?.audio&&d.playback.mode==="forward"&&!u.audio.paused&&Number.isFinite(u.audio.currentTime);if(u?.audio&&gn(u.audio,d.playback),p){const h=u.audio.currentTime;M.setProject(g=>({...g,playback:{...g.playback,time:h}}),!1)}else{let h=d.playback.time+c*m;const g=Math.max(d.duration,.001);d.playback.loop?h=(h%g+g)%g:h=Math.min(h,g),M.setProject(y=>({...y,playback:{...y.playback,time:h}}),!1),u?.audio&&d.playback.mode!=="forward"&&gn(u.audio,{...d.playback,playing:!1,time:h})}}else u?.audio&&gn(u.audio,{...d.playback,playing:!1});for(const p of M.project.sources)if(p.kind==="video"&&p.video&&!M.project.playback.freeze){const h=dn(M.project.playback.time,p.duration||p.video.duration||1,M.project.playback.mode,1,M.project.playback.loop);rh(p,h,{playing:M.project.playback.playing,freeze:M.project.playback.freeze,mode:M.project.playback.mode,speed:M.project.playback.speed})}if(!f)try{t.render(M.project,M.project.playback.time),t.cutStatus&&t.cutStatus!==M.state.ui.status&&M.patchUi({status:t.cutStatus},!1)}catch(p){M.patchUi({status:p instanceof Error?p.message:"render error"},!1)}o++,l-s>400&&(n=o*1e3/(l-s),s=l,o=0),$g(Jn,n,M.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}Wg()})();

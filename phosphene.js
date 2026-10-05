(function(){"use strict";function Ce(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function O(t,e,i){return Math.min(i,Math.max(e,t))}function tt(t,e=16){return Math.max(e,Math.round(t)&-2)}function Jo(t,e,i,a){const o=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:tt(t*o),height:tt(e*o)}}function Ue(t,e,i){return t+(e-t)*i}function Nr(t){const e=O(t,0,1);return e*e*(3-2*e)}const Ur=["spring","flow","boids","poles"];function Xa(t){return!!t&&Ur.includes(t)}function Oi(t){return O(t??1,.2,2.2)}function Hi(t){return O(t??.55,.08,1)}function Li(t){return O(t??.34,.12,.72)}function Ni(t){return O(t??1,.2,2.2)}function Ui(t){return O(t??2.1,1.15,3.6)}function qi(t){return O(t??1,.28,2.4)}function Di(t){return O(t??.8,0,2)}function $i(t){return O(t??.7,.08,2.2)}function Wi(t){return O(t??1,.2,2.2)}function ji(t){return O(t??.7,0,1.6)}function Vi(t){return O(t??1,.1,2.2)}function Gi(t){return O(t??1,.15,2.4)}function Ki(t){return O(t??1,.1,2.2)}function Xi(t){return O(t??.22,.08,.55)}function Zi(t){return O(t??1,.25,2.2)}function Qi(t){return O(Math.round(t??3),1,5)}function Yi(t){return O(t??1,.15,2.2)}function Ji(t){return O(t??.85,.1,2.2)}function ea(t){return O(t??.8,.12,2.2)}function ta(t){return O(t??1.4,.6,2.8)}function ia(t){return O(t??.45,0,2)}function qr(t){return{springStrength:Oi(t?.springStrength),springDamp:Hi(t?.springDamp),springDist:Li(t?.springDist),springElast:Ni(t?.springElast),springBreak:Ui(t?.springBreak),flowScale:qi(t?.flowScale),flowTurb:Di(t?.flowTurb),flowEvolve:$i(t?.flowEvolve),flowForce:Wi(t?.flowForce),flowDepth:ji(t?.flowDepth),boidCohere:Vi(t?.boidCohere),boidSep:Gi(t?.boidSep),boidAlign:Ki(t?.boidAlign),boidRadius:Xi(t?.boidRadius),boidSpeed:Zi(t?.boidSpeed),poleCount:Qi(t?.poleCount),poleAttract:Yi(t?.poleAttract),poleRepel:Ji(t?.poleRepel),poleSpeed:ea(t?.poleSpeed),poleFalloff:ta(t?.poleFalloff),poleSwitch:ia(t?.poleSwitch)}}function Dr(t,e,i,a,o,n,s){const r=o*3.15,l=a,c=n;let u=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),d=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),m=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const f=Math.hypot(u,d,m)||1;return[u/f,d/f,m/f]}function $r(t,e,i,a){const o=i*(.42+t*.15),n=Math.sin(e*o+t*1.3)*.34+Math.sin(e*o*.37+t)*.08,s=Math.cos(e*o*.86+t*1.9)*.28+Math.cos(e*o*.29+t*.7)*.07,r=Math.sin(e*o*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:n,y:s,z:r,sign:c}}function Wr(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function jr(t,e,i,a){const o=e.length,n={move:t,n:o,lastClock:i,px:new Float32Array(o),py:new Float32Array(o),pz:new Float32Array(o),vx:new Float32Array(o),vy:new Float32Array(o),vz:new Float32Array(o),homeX:new Float32Array(o),homeY:new Float32Array(o),homeZ:new Float32Array(o),links:[],linkKey:""};for(let s=0;s<o;s++){const[r,l,c]=Wr(e[s]);n.px[s]=r,n.py[s]=l,n.pz[s]=c,n.homeX[s]=r,n.homeY[s]=l,n.homeZ[s]=c,n.vx[s]=(e[s].vx-.5)*.08,n.vy[s]=(e[s].vy-.5)*.08,n.vz[s]=0}return t==="spring"&&en(n,a.springDist),n}function en(t,e,i=5){const a=t.n,o=[],n=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,u=Math.min(s,c),d=Math.max(s,c),m=`${u}:${d}`;n.has(m)||(n.add(m),o.push({a:u,b:d,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=o,t.linkKey=`${a}|${e.toFixed(3)}`,o}function qe(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Vr(t,e,i,a){const o=t.n,n=`${o}|${a.springDist.toFixed(3)}`;t.linkKey!==n&&en(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,u=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const f of t.links){const p=t.px[f.b]-t.px[f.a],h=t.py[f.b]-t.py[f.a],g=t.pz[f.b]-t.pz[f.a],y=Math.hypot(p,h,g)||1e-5;if(f.on&&y>f.rest*l){f.on=!1;continue}if(!f.on&&y<a.springDist*.92&&(f.on=!0),!f.on)continue;const w=y-f.rest,b=s*w,T=p/y,_=h/y,M=g/y;t.vx[f.a]+=T*b*e,t.vy[f.a]+=_*b*e,t.vz[f.a]+=M*b*e,t.vx[f.b]-=T*b*e,t.vy[f.b]-=_*b*e,t.vz[f.b]-=M*b*e}const m=Math.exp(-r*7*e);for(let f=0;f<o;f++){const p=t.homeX[f]-t.px[f],h=t.homeY[f]-t.py[f],g=t.homeZ[f]-t.pz[f];t.vx[f]+=p*.35*e,t.vy[f]+=h*.35*e,t.vz[f]+=g*.35*e;const y=Math.hypot(t.px[f]-c,t.py[f]-u,t.pz[f]-d);if(y<.24){const w=(.24-y)/.24;t.vx[f]+=(c-t.px[f])*w*1.8*e,t.vy[f]+=(u-t.py[f])*w*1.8*e,t.vz[f]+=(d-t.pz[f])*w*1.1*e}t.vx[f]*=m,t.vy[f]*=m,t.vz[f]*=m,t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=qe(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=qe(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=qe(t.pz[f],t.vz[f],.36)}}function Gr(t,e,i,a){const o=i*a.flowEvolve,n=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=Dr(t.px[s],t.py[s],t.pz[s],o,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*n*e,t.vy[s]+=l*n*e,t.vz[s]+=c*n*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.34)}}function Kr(t,e,i){const a=t.n,o=i.boidRadius,n=o*o,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let u=0;u<a;u++){let d=0,m=0,f=0,p=0,h=0,g=0,y=0,w=0,b=0,T=0;for(let _=0;_<a;_++){if(u===_)continue;const M=t.px[_]-t.px[u],P=t.py[_]-t.py[u],I=t.pz[_]-t.pz[u],A=M*M+P*P+I*I;if(A>n||A<1e-8)continue;T++,d+=t.px[_],m+=t.py[_],f+=t.pz[_],y+=t.vx[_],w+=t.vy[_],b+=t.vz[_];const U=Math.sqrt(A),$=(o-U)/o;p-=M/U*$,h-=P/U*$,g-=I/U*$}T&&(r[u]+=(d/T-t.px[u])*i.boidCohere*1.15,l[u]+=(m/T-t.py[u])*i.boidCohere*1.15,c[u]+=(f/T-t.pz[u])*i.boidCohere*1.15,r[u]+=p*i.boidSep*1.8,l[u]+=h*i.boidSep*1.8,c[u]+=g*i.boidSep*1.8,r[u]+=(y/T-t.vx[u])*i.boidAlign*1.35,l[u]+=(w/T-t.vy[u])*i.boidAlign*1.35,c[u]+=(b/T-t.vz[u])*i.boidAlign*1.35),r[u]+=-t.px[u]*.22,l[u]+=-t.py[u]*.22,c[u]+=-t.pz[u]*.18}for(let u=0;u<a;u++){t.vx[u]+=r[u]*e,t.vy[u]+=l[u]*e,t.vz[u]+=c[u]*e;const d=Math.hypot(t.vx[u],t.vy[u],t.vz[u])||1;if(d>s){const m=s/d;t.vx[u]*=m,t.vy[u]*=m,t.vz[u]*=m}t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=qe(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=qe(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=qe(t.pz[u],t.vz[u],.34)}}function Xr(t,e,i,a){const o=[];for(let s=0;s<a.poleCount;s++)o.push($r(s,i,a.poleSpeed,a.poleSwitch));const n=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const u of o){const d=u.x-t.px[s],m=u.y-t.py[s],f=u.z-t.pz[s],p=Math.hypot(d,m,f)||1e-4,h=(u.sign>0?a.poleAttract:a.poleRepel)/(p**n+.06),g=u.sign>0?1:-1;if(r+=d/p*h*g*.55,l+=m/p*h*g*.55,c+=f/p*h*g*.32,r+=-m/p*h*.28,l+=d/p*h*.28,p<.1){const y=(.1-p)*10;r-=d/p*y,l-=m/p*y,c-=f/p*y*.6}}for(let u=0;u<t.n;u++){if(s===u)continue;const d=t.px[s]-t.px[u],m=t.py[s]-t.py[u],f=t.pz[s]-t.pz[u],p=d*d+m*m+f*f;if(p>.018||p<1e-8)continue;const h=Math.sqrt(p),g=(.135-h)*2.4;r+=d/h*g,l+=m/h*g,c+=f/h*g*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.3)}}function Zr(t,e,i,a,o){const n=i.length;let s=t;(!s||s.move!==e||s.n!==n||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=jr(e,i,a,o));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let u=0;u<l;u++)e==="spring"?Vr(s,c,a,o):e==="flow"?Gr(s,c,a,o):e==="boids"?Kr(s,c,o):Xr(s,c,a,o);return s.lastClock=a,s}function Qr(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),o=O(1.1/a,.55,1.7);return{x:O(t.px[e]/a,-.48,.48),y:O(t.py[e]/a,-.4,.4),px:O((.07+i*.03)*o,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:O(.55+o*.4,.5,1)}}const tn=["fixed","hunt"],an=["perfect","handheld"],on=["random","reactive","mixed"];function Qt(t){return tn.includes(t)?t:"fixed"}function aa(t){return an.includes(t)?t:"perfect"}function oa(t){return on.includes(t)?t:"mixed"}function na(t){return O(t??2,.4,12)}function sa(t){return O(t??6,.6,16)}function ra(t){return O(t??2,.4,12)}function la(t){return O(t??5,.6,16)}function ca(t){return O(t??1,.35,2.4)}function ua(t){return O(t??1,.35,2.4)}function fa(t){return O(t??.7,.12,1)}function da(t){return O(t??.16,.04,1.4)}function ha(t){return O(t??.42,.08,2)}function ma(t){return O(t??.72,0,1)}function pa(t){return O(t??.85,.15,2.2)}function ga(t){return O(t??.55,0,1.6)}function va(t){return O(t??.35,0,1)}function Yr(t){let e=na(t?.huntWideMin),i=sa(t?.huntWideMax);i<e&&([e,i]=[i,e]);let a=ra(t?.huntFollowMin),o=la(t?.huntFollowMax);o<a&&([a,o]=[o,a]);let n=da(t?.huntReactMin),s=ha(t?.huntReactMax);return s<n&&([n,s]=[s,n]),{wideMin:e,wideMax:i,followMin:a,followMax:o,snap:ca(t?.huntSnap),zoom:ua(t?.huntZoom),tight:fa(t?.huntTight),reactMin:n,reactMax:s,precision:ma(t?.huntPrecision),select:oa(t?.huntSelect),focusOn:!!t?.huntFocus,focusSpeed:pa(t?.huntFocusSpeed),focusError:ga(t?.huntFocusError),variation:va(t?.huntVariation),feel:aa(t?.cameraFeel)}}function nn(t=0,e=3){return{phase:"wide",clock:t,phaseUntil:t+e,reactUntil:0,subject:-1,lastSubject:-1,lookX:0,lookY:0,zoom:1,rot:0,velX:0,velY:0,velZ:0,velR:0,errX:0,errY:0,heldFocus:1,plan:"basic",mediumDone:!1,nudged:!1,retargeted:!1,handX:0,handY:0,handR:0,lag:0,cycle:0,trackStart:0,prev:[]}}function At(t,e,i){return e+t()*Math.max(0,i-e)}function qt(t,e){return Math.hypot(t,e)}function Jr(t,e,i,a){const o=e?(t.x-e.x)/Math.max(a,.016666666666666666):0,n=e?(t.y-e.y)/Math.max(a,1/60):0,s=qt(o,n),r=e?(t.px-e.px)/Math.max(a,1/60):0,l=Math.max(0,r),c=e?qt(e.x-t.x,e.y-t.y):0,u=Math.max(0,s-c/Math.max(a,1/60)),d=e?Math.abs(Math.atan2(n,o)-Math.atan2(t.y-e.y,t.x-e.x)):0,m=qt(t.x-i.cx,t.y-i.cy)/Math.max(i.spread,.08),f=Math.max(Math.abs(t.x),Math.abs(t.y)),p=Math.min(1,s*1.6);return s*1.15+u*.9+d*.35+l*3.2+O(m-.7,0,2)*.55+O(f-.28,0,1)*.7+p*.4}function sn(t,e,i,a,o,n){if(t.length===0)return-1;if(t.length===1)return t[0].id;const s=t.reduce((f,p)=>f+p.x,0)/t.length,r=t.reduce((f,p)=>f+p.y,0)/t.length,l=t.reduce((f,p)=>f+qt(p.x-s,p.y-r),0)/t.length||.2,c=new Map(o.map(f=>[f.id,f])),u=t.map(f=>{if(f.id===e&&t.length>1)return 0;const p=Jr(f,c.get(f.id),{cx:s,cy:r,spread:l},n);return i==="random"?1:i==="reactive"?.12+p:.55+p}),d=u.reduce((f,p)=>f+p,0);if(d<=0)return(t.find(p=>p.id!==e)??t[0]).id;let m=a()*d;for(let f=0;f<t.length;f++)if(m-=u[f],m<=0)return t[f].id;return t[t.length-1].id}function el(t,e){if(e()>t*.72)return"basic";const i=e();return i<.22?"medium":i<.42?"retarget":i<.6?"abort":i<.8?"linger":"nudge"}function tl(t,e,i=!1){const a=t?.px??.08,o=.2/Math.max(a,.045),n=O(1.2+e*.95*O(o,.65,2.1),1.25,4.1);return i?Ue(1,n,.42):n}function rn(t,e){return t.find(i=>i.id===e)}function il(t){if(!t.length)return{x:0,y:0};let e=0,i=0;for(const a of t)e+=a.x,i+=a.y;return{x:e/t.length,y:i/t.length}}function al(t,e,i,a,o,n,s,r){t.velX+=(e-t.lookX)*s-t.velX*r,t.velY+=(i-t.lookY)*s-t.velY*r,t.velZ+=(a-t.zoom)*s-t.velZ*r,t.velR+=(o-t.rot)*s*.65-t.velR*r,t.lookX+=t.velX*n,t.lookY+=t.velY*n,t.zoom+=t.velZ*n,t.rot+=t.velR*n}function ol(t,e,i,a,o){const n=Ce(o+Math.floor(i*1e3)*17+(t?.cycle??0)*131>>>0);let s=t??nn(i,At(n,a.wideMin,a.wideMax));const r=i-s.clock;(r<-.02||r>1.2)&&(s=nn(i,At(n,a.wideMin,a.wideMax)));const l=O(i-s.clock,1/90,.08);s.clock=i;const c=il(e),u=rn(e,s.subject),d=s.prev.find($=>$.id===s.subject);u&&d&&qt(u.x-d.x,u.y-d.y)/l>.55&&(s.lag=Math.max(s.lag,(1-a.precision)*.16)),s.lag=Math.max(0,s.lag-l*(1.4+a.precision*2)),s.errX*=Math.exp(-l*(1.1+a.precision*2.6)),s.errY*=Math.exp(-l*(1.1+a.precision*2.6));const m=Ce(o+s.cycle*9973+11>>>0),f=Ce(o+s.cycle*7919+3>>>0),p=($,S=1)=>{s.lastSubject=s.subject,s.subject=$,s.phase="notice",s.reactUntil=i+At(m,a.reactMin,a.reactMax)*S;const F=(1-a.precision)*.11*(.45+m()),k=m()*Math.PI*2;s.errX=Math.cos(k)*F,s.errY=Math.sin(k)*F};if(s.phase==="wide"&&i>=s.phaseUntil&&e.length){const $=sn(e,s.lastSubject,a.select,m,s.prev,l);s.plan=el(a.variation,f),s.mediumDone=!1,s.nudged=!1,s.retargeted=!1,s.plan==="linger"?(s.phaseUntil=i+At(f,a.wideMin,a.wideMax)*(1.15+f()*.7),s.plan="basic"):p($)}else if(s.phase==="notice"&&i>=s.reactUntil)s.phase="snap",s.phaseUntil=i+O(.28/a.snap,.12,.85);else if(s.phase==="snap"&&i>=s.phaseUntil)if(s.plan==="medium"&&!s.mediumDone)s.mediumDone=!0,s.phase="notice",s.reactUntil=i+At(m,a.reactMin,a.reactMax)*.55;else{s.phase="track",s.trackStart=i;const $=At(f,a.followMin,a.followMax);s.phaseUntil=i+(s.plan==="abort"?$*(.28+f()*.28):$)}else if(s.phase==="track"){const $=Math.max(.01,s.phaseUntil-s.trackStart);if(s.plan==="retarget"&&!s.retargeted&&e.length>1&&i>=s.trackStart+$*.42){const S=sn(e,s.subject,a.select,m,s.prev,l);S!==s.subject&&S>=0&&(s.retargeted=!0,s.plan="basic",p(S,.55))}else s.plan==="nudge"&&!s.nudged&&i>s.phaseUntil-.8&&(s.nudged=!0);s.phase==="track"&&i>=s.phaseUntil&&(s.phase="return",s.phaseUntil=i+O(.32/a.snap,.14,.9),s.lastSubject=s.subject)}else s.phase==="return"&&i>=s.phaseUntil&&(s.phase="wide",s.subject=-1,s.cycle+=1,s.phaseUntil=i+At(f,a.wideMin,a.wideMax),s.plan="basic");const h=rn(e,s.subject)??u,g=1;let y=c.x*.22,w=c.y*.22,b=g,T=0;if(h&&(s.phase==="notice"||s.phase==="snap"||s.phase==="track")){y=h.x+s.errX,w=h.y+s.errY;const $=s.phase==="snap"&&s.plan==="medium"&&!s.mediumDone;b=s.phase==="notice"?Ue(s.zoom,1.04,.15):tl(h,a.zoom,$),s.nudged&&s.phase==="track"&&(b*=1.12),T=Math.atan2(w-s.lookY,y-s.lookX)*.045}else s.phase==="return"&&(y=c.x*.18,w=c.y*.18,b=g,T=0);const _=s.phase==="snap"||s.phase==="return"?1.15+a.snap*1.35:1,M=s.phase==="notice"?.38:1,P=1-O(s.lag*2.4,0,.55),I=(.08+a.tight*.22)*(.45+a.precision*.7)*_*M*P,A=.18+a.precision*.22+a.tight*.12;al(s,y,w,b,T,l,I,A);const U=O(s.zoom,1,4.2);if(!a.focusOn)s.heldFocus=U;else{const $=1-Math.exp(-l*(.35+a.focusSpeed*1.8));s.heldFocus=Ue(s.heldFocus,U,$)}if(a.feel==="handheld"){const $=qt(s.velX,s.velY)+Math.abs(s.velZ)*.08;s.handX=Ue(s.handX,-s.velX*.05-$*.01,1-Math.exp(-l*3.2)),s.handY=Ue(s.handY,-s.velY*.05,1-Math.exp(-l*3.2)),s.handR=Ue(s.handR,-s.velR*.4,1-Math.exp(-l*2.6))}else s.handX=Ue(s.handX,0,1-Math.exp(-l*8)),s.handY=Ue(s.handY,0,1-Math.exp(-l*8)),s.handR=Ue(s.handR,0,1-Math.exp(-l*8));return s.prev=e.map($=>({id:$.id,x:$.x,y:$.y,px:$.px})),s}function nl(t,e){const i=O(t.zoom,1,4.2),a=e.focusOn?O(Math.abs(t.heldFocus-i)*e.focusError*.9,0,1):0;return{x:t.lookX+(e.feel==="handheld"?t.handX:0),y:t.lookY+(e.feel==="handheld"?t.handY:0),zoom:O(t.zoom,1,4.4),rot:t.rot+(e.feel==="handheld"?t.handR:0),focus:a}}function sl(t,e){return{x:(t.x-e.x)*e.zoom,y:(t.y-e.y)*e.zoom,px:t.px*e.zoom,rot:t.rot+e.rot}}const ln=["heraldry","wallpaper","giants","shower"],Tt=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],cn=["rush","tunnel","bloom","spiral","helix","prism","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles"],rl=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Za(t){return!!t&&rl.includes(t)}const Yt={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES"};function Ae(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function It(t){return Tt.includes(t)?t:"sailor"}function un(t){return cn.includes(t)?t:"rush"}const fn=["rush","tunnel","bloom","spiral","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles"];function Qa(t){return fn[(t>>>0)%fn.length]}function Jt(t){return O(t??1,.35,1.2)}function ei(t){return O(t??1,.2,2.2)}function ti(t){return O(t??.7,.12,2)}function ii(t){return O(t??1,.2,2)}function ai(t){return O(t??.72,.12,1)}const ba=["off","dragon","dog","ferret","caterpillar","zebra"],dn={off:"Off",dragon:"Dragon",dog:"Dog",ferret:"Ferret",caterpillar:"Caterpillar",zebra:"Zebra"};function oi(t){return ba.includes(t)?t:"off"}function ll(t){return Math.max(11,Math.min(18,Math.round(14*O(t??1,.35,2))))}function cl(t,e){if(t==="off"||e<4)return[];if(t==="caterpillar"){const o=[];for(let n=1;n<e-1;n++)o.push({role:"nub",attach:n,side:-1}),o.push({role:"nub",attach:n,side:1});return o}const i=Math.max(1,Math.round((e-1)*.22)),a=Math.max(i+2,Math.round((e-1)*.62));return[{role:"leg",attach:i,side:-1},{role:"leg",attach:i,side:1},{role:"leg",attach:a,side:-1},{role:"leg",attach:a,side:1}]}function ya(t,e,i,a){const o=ge(t)*Math.PI*2,n=O(i,.2,2),s=O(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),u=e*(.45+r*1.55),d=(Ke,Ne,v)=>(Ke+Ne*n)*(.42+.58*(.5+.5*Math.sin(v))),m=.84+.22*Math.sin(l+.4),f=.8+.24*Math.cos(l*.87+1.1),p=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*n)*m,g=d(.04,.07,c+.3)*(.4+s*.6),y=d(.02,.08,u+1.4)*(.18+r*.95),w=d(.01,.06,u*1.3+.8)*r,b=d(.006,.035,c*1.6+2.1)*r*r,T=(.17+.11*n)*f,_=d(.035,.065,c+1.7)*(.4+s*.6),M=d(.02,.07,u+.6)*(.18+r*.95),P=d(.01,.055,u*1.2+2.4)*r,I=d(.006,.03,c*1.4+.5)*r*r,A=(.13+.11*n)*p,U=d(.04,.08,c+2)*(.45+s*.55),$=d(.02,.07,u+1.9)*(.18+r*.95),S=d(.012,.055,u*.9+.2)*r;let F=Math.cos(o+l*.18)*h+Math.cos(2*o+c*.14+.7)*g+Math.sin(3*o+l*.11+1.2)*y+Math.cos(4*o+u*.09+.4)*w+Math.sin(5*o+c*.16+2.2)*b,k=Math.sin(o+l*.15+.5)*T+Math.sin(2*o+c*.19+1.4)*_+Math.cos(3*o+l*.09+.3)*M+Math.sin(4*o+u*.12+1.8)*P+Math.cos(5*o+c*.08+.9)*I,N=Math.sin(o+l*.12+1.1)*A+Math.cos(2*o+c*.17+.6)*U+Math.sin(3*o+u*.1+2.5)*$+Math.cos(4*o+l*.13+1.6)*S;const X=Math.sin(2*o+c*.22)*r*.12*n;N+=X;const H=l*.19+Math.sin(c*.27)*.55,ae=Math.sin(l*.29+.8)*(.28+.18*n),V=Math.cos(l*.23+1.5)*(.2+r*.4),te=Math.cos(H),L=Math.sin(H),z=F*te-N*L,oe=F*L+N*te,ee=Math.cos(ae),Q=Math.sin(ae),we=k*ee-oe*Q,Me=k*Q+oe*ee,fe=Math.cos(V),me=Math.sin(V),Pe=z*fe-we*me,_e=z*me+we*fe;return{x:Pe+Math.sin(l*.47)*.06*n,y:_e+Math.cos(l*.39+1.3)*.05*n,z:Me+Math.sin(c*.21+.6)*.07*n}}function it(t,e=1){return(t>40?t/60:2)*e}function ul(t,e,i=1,a=0){return ge((t-a)*it(e,i))}function fl(t,e,i=1,a=0){const o=Math.cos(ul(t,e,i,a)*Math.PI*2);return o>0?o*o:0}function hn(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*it(e,i))}function wa(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function mn(t,e){return e&&cn.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const ni=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],Ya={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function dl(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const hl={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},pn={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},gn={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},si=256;function vn(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function De(t,e){return e[Math.floor(t()*e.length)%e.length]}function bn(t,e){return t()<.32?e:De(t,ni)}function ml(t,e="rush"){return e==="tunnel"?pn[t]:e==="lattice"?gn[t]:hl[t]}function pl(t,e,i,a){const o=ml(a,e==="bloom"?"rush":e);let n=De(t,o);e==="lattice"&&t()<.4&&(n=De(t,gn[a])),e==="tunnel"&&t()<.28&&(n=De(t,pn[a]));const s=bn(t,i);let r=bn(t,i);return r===s&&(r=De(t,ni)),{kind:n,pattern:t()<.58?"plain":De(t,["polka","hoop","half","bar"]),a:s,b:r,mirror:t()>.5}}function gl(t){return t>.5?O((t-.5)/.5,0,1):0}function vl(t,e,i,a=0){const o=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*n)*11+5>>>0)%o}function ri(t){return O(t??1,.5,2)}function li(t){return O(t??1,.35,2)}function bl(t,e,i="sailor",a){const o=Ce(t>>>0),n=240,s=a&&a!==i?a:null,r=[];for(let l=0;l<n;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",u=s&&l&1?s:i;r.push({x:o(),y:o(),z:o(),rot:(o()-.5)*.55,size:.55+o()*.9,vx:(o()-.5)*.06,vy:(o()-.35)*.08,vr:(o()-.5)*.25,charge:pl(o,c,e,u)})}return r}function yl(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function yn(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,o=e&255;return(.22*i+.7*a+.08*o)/255}function wn(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const o=i.a,n=i.b,s=a*2.4;if(t.fillStyle=o,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=yn(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function Ja(t,e,i,a=.42){for(let o=0;o<i*2;o++){const n=o%2===0?e:e*a,s=o*Math.PI/i-Math.PI/2,r=Math.cos(s)*n,l=Math.sin(s)*n;o===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function wl(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function kl(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function kn(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Tl(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function _l(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function Cl(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Sl(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,o=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*o,-Math.cos(a)*o*.85)}t.closePath()}function xl(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function El(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function Pl(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Ml(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Al(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function Il(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function Bl(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Fl(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function Rl(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function zl(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function Ol(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function Hl(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function Ll(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function Nl(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function Ul(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function ql(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function Dl(t,e){Ja(t,e,8,.55)}function $l(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function Wl(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function jl(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function Vl(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Gl(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function Kl(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Xl(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Zl(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function Ql(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function Yl(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Jl(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function ec(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function tc(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function ic(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),kn(t,e*.72)}function ac(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function oc(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function nc(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function sc(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function rc(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function lc(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function cc(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function uc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function fc(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function dc(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function hc(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function mc(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function pc(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function gc(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function vc(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function bc(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function yc(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function wc(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function kc(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Tc(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function _c(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function Cc(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function Sc(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function xc(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function Ec(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function Pc(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function Mc(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function Ac(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function Ic(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function Bc(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function Fc(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function Rc(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function zc(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function Oc(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function Hc(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function Lc(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function Nc(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function Uc(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function qc(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function Dc(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function $c(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function Wc(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function jc(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function Vc(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function Gc(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function Kc(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function Xc(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function Zc(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function Qc(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function Yc(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function Jc(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function e0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function t0(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function i0(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function a0(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function o0(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function n0(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function s0(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function r0(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function l0(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function c0(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function u0(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function f0(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function d0(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function h0(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function m0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function p0(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function g0(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function v0(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function b0(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function y0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function w0(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function k0(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function T0(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function _0(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function C0(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function S0(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function x0(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function E0(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function P0(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function M0(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function A0(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function I0(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function B0(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function F0(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function R0(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function z0(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function O0(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function H0(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function L0(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function N0(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function U0(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function q0(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function D0(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function $0(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function W0(t,e){Ja(t,e*.72,4,.32)}function j0(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function V0(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function G0(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function K0(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function X0(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function Z0(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function Q0(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function Y0(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function J0(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function eu(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function tu(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function iu(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function au(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function ou(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function nu(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function su(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function ru(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function lu(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function cu(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function uu(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function fu(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function du(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function hu(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function mu(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function pu(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function gu(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function vu(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function bu(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function yu(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function wu(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function ku(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function Tu(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function _u(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function Cu(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function Su(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function xu(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function Eu(t,e){t.moveTo(-e*.7,0),t.quadraticCurveTo(-e*.58,-e*.58,0,-e*.52),t.quadraticCurveTo(e*.58,-e*.58,e*.7,0),t.quadraticCurveTo(e*.58,e*.58,0,e*.52),t.quadraticCurveTo(-e*.58,e*.58,-e*.7,0),t.closePath()}function Pu(t,e){t.moveTo(-e*.82,0),t.quadraticCurveTo(-e*.45,-e*.55,e*.08,-e*.32),t.lineTo(e*.98,-e*.12),t.lineTo(e*.62,e*.06),t.lineTo(e*.88,e*.38),t.lineTo(e*.22,e*.22),t.quadraticCurveTo(-e*.2,e*.52,-e*.82,0),t.closePath(),t.moveTo(-e*.02,-e*.3),t.lineTo(e*.18,-e*.98),t.lineTo(e*.38,-e*.22),t.closePath(),t.moveTo(-e*.38,-e*.28),t.lineTo(-e*.18,-e*.88),t.lineTo(e*.08,-e*.2),t.closePath()}function Mu(t,e){t.moveTo(-e*.42,e*.18),t.quadraticCurveTo(-e*.35,-e*.28,e*.22,-e*.2),t.quadraticCurveTo(e*.62,-e*.06,e*.95,e*.16),t.quadraticCurveTo(e*.9,e*.42,e*.4,e*.42),t.quadraticCurveTo(0,e*.5,-e*.42,e*.18),t.closePath(),t.moveTo(-e*.12,-e*.08),t.quadraticCurveTo(-e*.85,-e*.42,-e*.98,e*.42),t.quadraticCurveTo(-e*.48,e*.48,0,e*.08),t.closePath(),t.moveTo(e*.12,-e*.16),t.quadraticCurveTo(-e*.22,-e*.95,-e*.72,-e*.22),t.quadraticCurveTo(e*.02,-e*.22,e*.22,.02*e),t.closePath()}function Au(t,e){t.moveTo(-e*.72,e*.08),t.quadraticCurveTo(-e*.52,-e*.4,-e*.02,-e*.3),t.quadraticCurveTo(e*.48,-e*.1,e*.98,e*.08),t.quadraticCurveTo(e*.48,e*.26,0,e*.3),t.quadraticCurveTo(-e*.48,e*.4,-e*.72,e*.08),t.closePath(),t.moveTo(-e*.22,-e*.26),t.lineTo(-e*.32,-e*.7),t.lineTo(0,-e*.26),t.closePath(),t.moveTo(e*.06,-e*.2),t.lineTo(e*.04,-e*.6),t.lineTo(e*.24,-e*.16),t.closePath()}function Iu(t,e){t.arc(e*.06,e*.08,e*.62,0,Math.PI*2),t.moveTo(-e*.04,-e*.46),t.quadraticCurveTo(-e*.32,-e*.95,-e*.55,-e*.52),t.quadraticCurveTo(-e*.2,-e*.6,e*.02,-e*.38),t.closePath(),t.moveTo(e*.28,-e*.46),t.quadraticCurveTo(e*.42,-e*.98,e*.68,-e*.5),t.quadraticCurveTo(e*.38,-e*.56,e*.22,-e*.36),t.closePath()}function Bu(t,e){t.moveTo(-e*.58,e*.1),t.quadraticCurveTo(-e*.4,-e*.42,e*.12,-e*.22),t.quadraticCurveTo(e*.58,0,e*.98,e*.16),t.quadraticCurveTo(e*.55,e*.4,e*.08,e*.38),t.quadraticCurveTo(-e*.38,e*.38,-e*.58,e*.1),t.closePath(),t.moveTo(-e*.08,-e*.2),t.lineTo(-e*.22,-e*.95),t.lineTo(e*.14,-e*.18),t.closePath(),t.moveTo(e*.16,-e*.14),t.lineTo(e*.22,-e*.88),t.lineTo(e*.42,-e*.1),t.closePath()}function Fu(t,e){t.moveTo(e*.92,-e*.16),t.quadraticCurveTo(e*.15,-e*.3,-e*.32,-e*.1),t.lineTo(-e*.95,-e*.42),t.lineTo(-e*.52,0),t.lineTo(-e*.95,e*.42),t.lineTo(-e*.32,e*.1),t.quadraticCurveTo(e*.15,e*.3,e*.92,e*.16),t.closePath()}function Ru(t,e){t.moveTo(e*.88,-e*.1),t.quadraticCurveTo(e*.18,-e*.55,-e*.35,-e*.52),t.quadraticCurveTo(-e*.95,-e*.12,-e*.52,e*.22),t.quadraticCurveTo(-e*.12,e*.4,e*.48,e*.12),t.quadraticCurveTo(e*.75,e*.04,e*.88,e*.1),t.closePath()}function zu(t,e){t.moveTo(e*.95,-e*.2),t.quadraticCurveTo(e*.12,-e*.48,-e*.55,-e*.2),t.quadraticCurveTo(-e*.98,0,-e*.55,e*.2),t.quadraticCurveTo(e*.12,e*.48,e*.95,e*.2),t.closePath()}function Ou(t,e){t.moveTo(e*.88,0),t.quadraticCurveTo(e*.68,-e*.5,e*.08,-e*.46),t.quadraticCurveTo(-e*.52,-e*.52,-e*.82,-e*.06),t.lineTo(-e*.98,-e*.4),t.lineTo(-e*.68,0),t.lineTo(-e*.98,e*.4),t.lineTo(-e*.82,e*.06),t.quadraticCurveTo(-e*.52,e*.52,e*.08,e*.46),t.quadraticCurveTo(e*.68,e*.5,e*.88,0),t.closePath()}function Hu(t,e){t.moveTo(e*.92,-e*.08),t.quadraticCurveTo(e*.18,-e*.16,-e*.22,-e*.06),t.lineTo(-e*.85,-e*.4),t.lineTo(-e*.52,0),t.lineTo(-e*.9,e*.36),t.lineTo(-e*.22,e*.08),t.quadraticCurveTo(e*.18,e*.16,e*.92,e*.08),t.closePath()}function Lu(t,e){t.moveTo(-e*.95,-e*.2),t.quadraticCurveTo(-e*.15,e*.28,e*.28,-e*.12),t.quadraticCurveTo(e*.68,-e*.38,e*.98,e*.28),t.quadraticCurveTo(e*.48,e*.52,e*.08,e*.22),t.quadraticCurveTo(-e*.38,e*.62,-e*.92,e*.24),t.closePath()}function Nu(t,e){t.moveTo(-e*.68,-e*.2),t.quadraticCurveTo(e*.12,-e*.52,e*.85,0),t.quadraticCurveTo(e*.12,e*.52,-e*.68,e*.2),t.closePath()}function Uu(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":Ja(t,i,5,e==="starfish"?.42:.4);break;case"heart":wl(t,i);break;case"moon":kl(t,i);break;case"figure":kn(t,i);break;case"fish":Tl(t,i);break;case"anchor":_l(t,i);break;case"wave":Cl(t,i);break;case"shell":Sl(t,i);break;case"boat":xl(t,i);break;case"tail":El(t,i);break;case"swallow":Pl(t,i);break;case"elephant":Ml(t,i);break;case"tent":Al(t,i);break;case"ball":Il(t,i);break;case"bow":Bl(t,i);break;case"horse":Fl(t,i);break;case"balloon":Rl(t,i);break;case"ticket":zl(t,i);break;case"pear":Ol(t,i);break;case"lemon":Hl(t,i);break;case"cherry":Ll(t,i);break;case"leaf":Nl(t,i);break;case"mushroom":Ul(t,i);break;case"flower":ql(t,i);break;case"sun":Dl(t,i);break;case"cloud":$l(t,i);break;case"bolt":Wl(t,i);break;case"umbrella":jl(t,i);break;case"bird":Vl(t,i);break;case"tree":Gl(t,i);break;case"deer":Kl(t,i);break;case"fox":Xl(t,i);break;case"owl":Zl(t,i);break;case"acorn":Ql(t,i);break;case"cone":Yl(t,i);break;case"mountain":Jl(t,i);break;case"drop":ec(t,i);break;case"moth":tc(t,i);break;case"wingfig":ic(t,i);break;case"swan":ac(t,i);break;case"cat":oc(t,i);break;case"crown":nc(t,i);break;case"key":sc(t,i);break;case"ring":rc(t,i);break;case"envelope":lc(t,i);break;case"potion":cc(t,i);break;case"rocket":fc(t,i);break;case"planet":dc(t,i);break;case"saturn":hc(t,i);break;case"ufo":mc(t,i);break;case"comet":pc(t,i);break;case"satellite":gc(t,i);break;case"lolly":vc(t,i);break;case"coneice":bc(t,i);break;case"cupcake":yc(t,i);break;case"donut":wc(t,i);break;case"candy":kc(t,i);break;case"note":Tc(t,i);break;case"vinyl":_c(t,i);break;case"headphone":Cc(t,i);break;case"mic":Sc(t,i);break;case"speaker":xc(t,i);break;case"crab":Ec(t,i);break;case"helm":Pc(t,i);break;case"lighthouse":Mc(t,i);break;case"compass":Ac(t,i);break;case"popcorn":Ic(t,i);break;case"cane":Bc(t,i);break;case"mask":Fc(t,i);break;case"apple":Rc(t,i);break;case"banana":zc(t,i);break;case"grape":Oc(t,i);break;case"rabbit":Hc(t,i);break;case"snail":Lc(t,i);break;case"fern":Nc(t,i);break;case"rose":Uc(t,i);break;case"diamond":qc(t,i);break;case"candle":Dc(t,i);break;case"alien":$c(t,i);break;case"asteroid":Wc(t,i);break;case"telescope":jc(t,i);break;case"cookie":Vc(t,i);break;case"waffle":Gc(t,i);break;case"guitar":Kc(t,i);break;case"drum":Xc(t,i);break;case"piano":Zc(t,i);break;case"clef":Qc(t,i);break;case"kettle":Yc(t,i);break;case"mug":Jc(t,i);break;case"whisk":e0(t,i);break;case"toast":t0(t,i);break;case"egg":i0(t,i);break;case"spoon":a0(t,i);break;case"chili":o0(t,i);break;case"bottle":n0(t,i);break;case"rain":s0(t,i);break;case"flake":r0(t,i);break;case"wind":l0(t,i);break;case"rainbow":c0(t,i);break;case"thermo":u0(t,i);break;case"taxi":f0(t,i);break;case"hydrant":d0(t,i);break;case"bike":h0(t,i);break;case"lamp":m0(t,i);break;case"signal":p0(t,i);break;case"bus":g0(t,i);break;case"stick":v0(t,i);break;case"dice":b0(t,i);break;case"coin":y0(t,i);break;case"pawn":w0(t,i);break;case"cart":k0(t,i);break;case"flag":T0(t,i);break;case"buoy":_0(t,i);break;case"hook":C0(t,i);break;case"porthole":S0(t,i);break;case"oar":x0(t,i);break;case"hoop":E0(t,i);break;case"unicycle":P0(t,i);break;case"lion":M0(t,i);break;case"topper":A0(t,i);break;case"orange":I0(t,i);break;case"peach":B0(t,i);break;case"berry":F0(t,i);break;case"melon":R0(t,i);break;case"pineapple":z0(t,i);break;case"pine":O0(t,i);break;case"hedgehog":H0(t,i);break;case"nest":L0(t,i);break;case"toadstool":N0(t,i);break;case"locket":U0(t,i);break;case"dove":q0(t,i);break;case"kiss":D0(t,i);break;case"rover":$0(t,i);break;case"spark":W0(t,i);break;case"astro":j0(t,i);break;case"pretzel":V0(t,i);break;case"sundae":G0(t,i);break;case"choco":K0(t,i);break;case"sax":X0(t,i);break;case"trumpet":Z0(t,i);break;case"amp":Q0(t,i);break;case"fork":Y0(t,i);break;case"pan":J0(t,i);break;case"chefhat":eu(t,i);break;case"tornado":tu(t,i);break;case"subway":iu(t,i);break;case"mailbox":au(t,i);break;case"skyline":ou(t,i);break;case"ghostie":nu(t,i);break;case"pixel":su(t,i);break;case"joystick":ru(t,i);break;case"shroomup":lu(t,i);break;case"invader":cu(t,i);break;case"skull":uu(t,i);break;case"bat":fu(t,i);break;case"pumpkin":du(t,i);break;case"tomb":hu(t,i);break;case"cauldron":mu(t,i);break;case"web":pu(t,i);break;case"trophy":gu(t,i);break;case"whistle":vu(t,i);break;case"jersey":bu(t,i);break;case"skate":yu(t,i);break;case"goal":wu(t,i);break;case"pencil":ku(t,i);break;case"book":Tu(t,i);break;case"globe":_u(t,i);break;case"backpack":Cu(t,i);break;case"ruler":Su(t,i);break;case"bell":xu(t,i);break;case"aBody":Eu(t,i);break;case"aLeg":Lu(t,i);break;case"aNub":Nu(t,i);break;case"aDragHead":Pu(t,i);break;case"aDragTail":Fu(t,i);break;case"aDogHead":Mu(t,i);break;case"aDogTail":Ru(t,i);break;case"aFerrHead":Au(t,i);break;case"aFerrTail":zu(t,i);break;case"aCatpHead":Iu(t,i);break;case"aCatpTail":Ou(t,i);break;case"aZebrHead":Bu(t,i);break;case"aZebrTail":Hu(t,i);break;default:uc(t,i);break}}function Tn(t,e,i){const a=(o,n,s)=>{t.beginPath(),t.arc(o,n,s,0,Math.PI*2),t.fill()};t.fillStyle=yn(e.a)>.55?"#141414":"#f6f1e6",e.kind==="aDragHead"&&a(i*.18,-i*.04,i*.08),e.kind==="aDogHead"&&a(i*.28,0,i*.075),e.kind==="aFerrHead"&&a(i*.08,-i*.02,i*.055),e.kind==="aCatpHead"&&(a(-i*.08,i*.02,i*.07),a(i*.22,i*.02,i*.07)),e.kind==="aZebrHead"&&a(i*.12,-i*.02,i*.06),e.kind==="aBody"&&e.pattern==="bar"&&(t.beginPath(),t.moveTo(0,-i*.16),t.lineTo(i*.14,0),t.lineTo(0,i*.16),t.lineTo(-i*.14,0),t.closePath(),t.fill())}function qu(t,e,i){const a=()=>Uu(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),wn(t,a,e,i),Tn(t,e,i),t.restore();return}wn(t,a,e,i),Tn(t,e,i)}function Du(t){const e=document.createElement("canvas");e.width=si,e.height=si;const i=e.getContext("2d");return i&&(i.translate(si/2,si/2),qu(i,t,si*.38)),e}const $u={dragon:{a:"#2a7a38",b:"#e8b830",pattern:"bar"},dog:{a:"#c9922e",b:"#f2d98a",pattern:"half"},ferret:{a:"#c49a62",b:"#f0e2c4",pattern:"half"},caterpillar:{a:"#5aa84a",b:"#e8c840",pattern:"hoop"},zebra:{a:"#f4f4f4",b:"#141414",pattern:"stripe"}};function _n(t,e){const i=$u[t];return{kind:e==="body"?"aBody":e==="leg"?"aLeg":e==="nub"?"aNub":e==="head"?t==="dragon"?"aDragHead":t==="dog"?"aDogHead":t==="ferret"?"aFerrHead":t==="caterpillar"?"aCatpHead":"aZebrHead":t==="dragon"?"aDragTail":t==="dog"?"aDogTail":t==="ferret"?"aFerrTail":t==="caterpillar"?"aCatpTail":"aZebrTail",pattern:e==="leg"||e==="nub"?"plain":i.pattern,a:i.a,b:i.b,mirror:!1}}function Wu(t){return Math.atan2(Math.sin(t),Math.cos(t))}function eo(t,e,i,a,o,n){const s=ya(t,e,i,a),r=ya(ge(t+o),e,i,a),l=Math.max(.42,1.05-s.z*.55),c=Math.max(.42,1.05-r.z*.55),u=s.x/l,d=s.y/l,m=Math.atan2(r.y/c-d,r.x/c-u),f=O(1.12/l,.55,1.85);return{x:u,y:d,rot:m,ux:Math.cos(m),uy:Math.sin(m),nx:-Math.sin(m),ny:Math.cos(m),px:O((.072+n*.028)*f,.05,.24),alpha:O(.52+f*.42,.5,1)}}function ju(t,e,i,a,o){const n=ll(o),s=.72/n,r=e==="caterpillar"?1.08:1,l=[];for(let c=0;c<n;c++){const u=ge(i*a.travel*.14-c*s),d=i*a.morph,m=c===0?1.05:c===n-1?.78:.48*r;l.push(eo(u,d,a.vary,a.smooth,s,m))}for(const c of cl(e,n)){const u=l[c.attach],d=c.role==="nub"?.07:.13,m=ge((i-d)*a.travel*.14-c.attach*s),f=eo(m,(i-d)*a.morph,a.vary,a.smooth,s,.55),p=u.x-f.x,h=u.y-f.y,g=c.role==="nub"?.038:.09,y=c.role==="nub"?.32:.7,w=c.role==="nub"?.008:.024,b=u.x+u.nx*c.side*g-p*y,T=u.y+u.ny*c.side*g-h*y+w;t(_n(e,c.role),{x:b,y:T,px:O(u.px*(c.role==="nub"?.55:.92),.04,.18),rot:Math.atan2(T-u.y,b-u.x),alpha:u.alpha*.94})}for(let c=n-1;c>=0;c--){const u=c===0?"head":c===n-1?"tail":"body";let d=l[c].x,m=l[c].y,f=l[c].rot;if(u==="tail"){const p=ge((i-.14)*a.travel*.14-(n-1)*s),h=eo(p,(i-.14)*a.morph,a.vary,a.smooth,s,.78),g=l[c].x-h.x,y=l[c].y-h.y;d-=g*.55,m-=y*.55,f+=Wu(l[c].rot-h.rot)*.85}t(_n(e,u),{x:d,y:m,px:l[c].px*(u==="head"?1.28:u==="tail"?1.18:1),rot:f,alpha:l[c].alpha})}}class Vu{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;hunt=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=yl(e);let a=this.stamps.get(i);return a||(a=Du(e),this.stamps.set(i,a)),a}ensure(e,i,a,o){const n=o&&o!==a?o:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===n&&this.particles.length||(this.particles=bl(e,i,a,n||null),this.stamps.clear(),this.sim=null,this.hunt=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=n)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const o=this.canvas.getContext("2d",{alpha:!1});if(!o)return this.canvas;const n=It(e.kit),s=e.kitB?It(e.kitB):null,r=vn(e.paper,Zu(n,e.seed)),l=vn(e.ink,Ya[n]);this.ensure(e.seed>>>0,l,n,s);const c=mn(e.generator,e.move),u=O(e.audio,0,1),d=O(e.bass,0,1),m=O(e.beat,0,1),f=e.bpm>40?e.bpm:0,p=ri(e.scale),h=li(e.density),g=Jt(e.pace),y={travel:ei(e.chainTravel),morph:ti(e.chainMorph),vary:ii(e.chainVary),smooth:ai(e.chainSmooth)},w=oi(e.chainAnimal);Xu(o,i,a,r,n,e.time,e.seed,m,d,!!e.night,l),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high";const b=e.beatOffset??0,T=e.time,_=Za(c)&&f>40&&b>.001?Math.max(0,T-b):T,M=_*g,P=i/Math.max(a,1),I=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Za(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"?130:c==="tunnel"?120:c==="bloom"?140:c==="chain"?40:Xa(c)?42:this.particles.length,A=Math.max(8,Math.min(this.particles.length,Math.round(I*h))),U=c==="prism"?3:1;if(Xa(c)){const X=qr({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=Zr(this.sim,c,this.particles.slice(0,A),_,X)}else this.sim=null;const $=c==="spot"?.34:c==="rush"||c==="tunnel"||c==="bloom"||c==="spiral"||c==="helix"||c==="prism"||c==="chain"?.26:.22,S=(X,H,ae)=>{const V=ae?{...H,...sl(H,ae)}:H,te=Math.min(V.px*p,ae?.72:$)*Math.min(i,a);if(te<5)return;const L=(.5+V.x)*i,z=(.5+V.y/P)*a;for(let oe=0;oe<U;oe++){o.save();const ee=U>1?(oe-1)*te*.09:0,Q=U>1?oe===2?te*.06:oe===0?-te*.03:0:0;if(L+ee<-te||z+Q<-te||L+ee>i+te||z+Q>a+te){o.restore();continue}o.translate(L+ee,z+Q),o.rotate(V.rot+(U>1?oe*.1:0)),H.flip!=null&&o.scale(H.flip,1),H.squash&&o.scale(H.squash,1/Math.max(.35,H.squash)),H.glow&&(o.globalAlpha=H.alpha*.32*H.glow,o.fillStyle=H.tint??l,o.beginPath(),o.arc(0,0,te*(.4+H.glow*.16),0,Math.PI*2),o.fill()),o.globalAlpha=H.alpha*(U>1?.72:1),o.drawImage(X,-te/2,-te/2,te,te),o.restore()}},F=[],k=(X,H)=>{F.push({stamp:X,pose:H})};if(c==="chain"&&w!=="off")ju((X,H)=>k(this.stamp(X),H),w,_,y,h);else for(let X=0;X<A;X++){const H=this.particles[X],ae=Xa(c)&&this.sim?Qr(this.sim,X,H.size):Gu(H,X,c,M,u,d,m,f,A,_,y);ae&&k(this.stamp(H.charge),ae)}let N;if(Qt(e.camera)==="hunt"){const X=Yr({huntWideMin:e.huntWideMin,huntWideMax:e.huntWideMax,huntFollowMin:e.huntFollowMin,huntFollowMax:e.huntFollowMax,huntSnap:e.huntSnap,huntZoom:e.huntZoom,huntTight:e.huntTight,huntReactMin:e.huntReactMin,huntReactMax:e.huntReactMax,huntPrecision:e.huntPrecision,huntSelect:e.huntSelect,huntFocus:e.huntFocus,huntFocusSpeed:e.huntFocusSpeed,huntFocusError:e.huntFocusError,huntVariation:e.huntVariation,cameraFeel:e.cameraFeel});this.hunt=ol(this.hunt,F.map((H,ae)=>({id:ae,x:H.pose.x,y:H.pose.y,px:H.pose.px})),_,X,e.seed>>>0),N=nl(this.hunt,X),N.focus>.03&&(o.filter=`blur(${(1.1+N.focus*2.4).toFixed(2)}px)`)}else this.hunt=null;for(const X of F)S(X.stamp,X.pose,N);return o.filter="none",(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&m>.04&&(o.save(),o.translate(i*.5,a*.5),o.strokeStyle=$e(l,"#fff4d8",.72),o.globalAlpha=.18+m*.42,o.lineWidth=2.6+m*6,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.16+m*.2),0,Math.PI*2),o.stroke(),o.globalAlpha=.1+m*.22,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.3+m*.18),0,Math.PI*2),o.stroke(),o.restore()),this.canvas}}function ge(t){return(t%1+1)%1}function Cn(t){const e=ge(t);return e<.5?e*2:2-e*2}function Be(t){return Cn(t)-.5}function Gu(t,e,i,a,o,n,s,r,l=48,c=a,u){const d=Za(i),m=fl(c,r),f=O(Math.max(s*(d?.48:.85),m*(d?.72:.22)),0,1);if(i==="bounce"){const w=.11+Math.abs(t.vx)*2.4,b=.09+Math.abs(t.vy)*2.1;return{x:Be(t.x+w*a),y:Be(t.y+b*a*.92),px:O((.1+t.size*.07)*(1+f*.22),.08,.28),glow:f*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const w=a*(2.2+o*.25)+e*.55,b=Math.cos(w);return{x:Be(t.x+t.vx*a*.45),y:Be(t.y+t.vy*a*.38),px:O((.12+t.size*.06)*(1+f*.18),.08,.26),glow:f*.35,rot:t.rot+Math.sin(w)*.15,alpha:O(.28+Math.abs(b)*.72,.2,1),flip:b}}if(i==="glow"){const w=.45+.55*Math.sin(a*2.4+e*.7),b=O(w*.4+f*.55+n*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:O((.1+t.size*.08)*(.9+b*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:O(.5+b*.45,.35,1),glow:b}}if(i==="flash"){const w=.7+.3*Math.sin(a*5.2+e)+f*.12,b=ni[(Math.floor(a*3.2+e*3)>>>0)%ni.length];return{x:Be(t.x+t.vx*a*.32),y:Be(t.y+t.vy*a*.28),px:O((.11+t.size*.07)*(1+f*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:O(w,.4,1),glow:.16+f*.45,tint:b}}if(i==="hop"){const w=r>40?r/60:.85,b=ge(a*w+t.z),T=Math.abs(Math.sin(b*Math.PI))*(.72+f*.45)+f*.14,_=Math.cos(b*Math.PI*2);return{x:Be(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Be(t.y)*.62-T*.2,px:O(.1+t.size*.07+T*.02,.08,.22),rot:t.rot+T*.55,alpha:1,flip:_}}if(i==="kick"){const w=.1+Math.abs(t.vx)*2.1,b=.08+Math.abs(t.vy)*1.8;return{x:Be(t.x+w*a),y:Be(t.y+b*a),px:O((.1+t.size*.07)*(1+f*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:f*.7}}if(i==="jelly"){const w=1+Math.sin(a*5.2+e)*.08+f*.2;return{x:Be(t.x+t.vx*a*.5),y:Be(t.y+t.vy*a*.42),px:O(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:w}}if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,P=(_+.5)/6-.5,I=Math.sin(a*1.7+_*.72+T*.18);return{x:M*.9+I*.07,y:P*.74+Math.sin(a*.82+_*.9)*.035,px:O(.085+t.size*.045+f*.05,.06,.2),rot:t.rot+I*.22,alpha:1,glow:f*.5}}if(i==="rings"){const b=e%4,T=Math.floor(e/4),_=12,M=b&1?-1:1,P=T/_*Math.PI*2+a*(.48+b*.08)*M,I=.14+b*.11;return{x:Math.cos(P)*I,y:Math.sin(P)*I*.88,px:O(.07+t.size*.035+f*.05,.05,.18),rot:P+t.rot*.25,alpha:.96,glow:f*.48}}if(i==="loom"){const w=a*1.05+t.x*Math.PI*2,b=a*1.45+t.y*Math.PI*2;return{x:Math.sin(w)*.4+Math.sin(b*.5)*.06,y:Math.sin(w*2+t.z*Math.PI)*.3,px:O(.08+t.size*.045+f*.05,.06,.2),rot:w*.18+t.rot,alpha:1,glow:f*.48}}if(i==="petal"){const b=e%6,T=Math.floor(e/6)/8,_=b/6*Math.PI*2+a*.34,M=.8+.2*Math.sin(a*1.25),P=(.1+T*.32)*M;return{x:Math.cos(_)*P,y:Math.sin(_)*P*.9,px:O(.075+t.size*.04+f*.05,.055,.2),rot:_+Math.PI*.5,alpha:O(.42+M*.55,.4,1),glow:f*.5}}if(i==="flock"){const w=e%5,T=ge(t.z+a*(.18+w*.02))*Math.PI*2+w*.32,_=.2+Math.sin(T*2+w)*.1+w*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:O(.075+t.size*.04+f*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:f*.48}}if(i==="wheel"){const b=e%3,M=Math.floor(e/3)/14*Math.PI*2+a*.58*(b===1?-1:1),P=.2+b*.12,I=.5+.5*Math.sin(M);return{x:Math.cos(M)*P,y:Math.sin(M)*P*.72,px:O((.075+t.size*.035)*(.78+I*.28)+f*.05,.05,.22),rot:M,alpha:O(.5+I*.45,.45,1),glow:f*.48}}if(i==="silk"){const w=e%4,b=w<2?1:-1,T=ge(t.x+a*.14*b+w*.08),_=(w/3-.5)*.52+Math.sin(T*Math.PI*3+w)*.055;return{x:T-.5,y:_,px:O(.07+t.size*.038+f*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:f*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,P=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),I=O(P*(.42+o*.22+n*.2+m*.28),.18,1),A=.42-_/Math.max(5,1)*I*.82;return{x:M*.86,y:A,px:O(.075+t.size*.03+f*.03,.055,.18),rot:t.rot*.2,alpha:O(.45+(1-_/6)*.5+f*.15,.4,1),glow:f*.55,squash:1-f*.08}}if(i==="ripple"){const b=e%3,T=Math.floor(e/3),_=16,M=ge(a*.32),P=.15+b*.145+M*.16+m*.05,I=T/_*Math.PI*2+a*.1;return{x:Math.cos(I)*P,y:Math.sin(I)*P*.88,px:O(.062+t.size*.024+f*.02,.048,.13),rot:I+t.rot*.2,alpha:O(.96-b*.08,.6,1),glow:f*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,M=r>40?r/60*Math.PI*2:5.4,P=T&1?-1:1,I=Math.sin(a*M+T*.85)*.82*P,A=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(I)*A,y:-.44+Math.cos(I)*A,px:O(.07+t.size*.03+f*.028,.05,.16),rot:I,alpha:1,glow:f*.4}}if(i==="burst"){const b=e%3,M=Math.floor(e/3)/16*Math.PI*2+a*.2*(b===1?-1:1),P=(.14+b*.13)*(1+m*.42);return{x:Math.cos(M)*P,y:Math.sin(M)*P*.9,px:O((.08+t.size*.035)*(1+f*.22),.055,.22),rot:M+t.rot*.2,alpha:O(.55+f*.4,.45,1),glow:f*.75,squash:1+f*.14}}if(i==="halo"){const b=e%2,M=Math.floor(e/2)/24*Math.PI*2+a*.26*(b?-1:1),P=.84+.16*Math.sin(a*1.15)+f*.2,I=(.26+b*.14)*P,A=O(.28+f*.65+n*.15,0,1);return{x:Math.cos(M)*I,y:Math.sin(M)*I*.9,px:O(.07+t.size*.032+A*.04,.05,.18),rot:M+Math.PI*.5,alpha:O(.5+A*.45,.4,1),glow:A}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,M=(T+.5)/16-.5,P=.09+o*.05+m*.08,I=M*Math.PI*3.4+a*2.15+_*.55;return{x:M*.92,y:(_-1)*.2+Math.sin(I)*P,px:O(.065+t.size*.03+f*.026,.05,.15),rot:Math.cos(I)*.32,alpha:1,glow:f*.45}}if(i==="drop"){const w=gl(s),b=w*w;return{x:t.x-.5,y:t.y-.5-b*.07,px:O((.1+t.size*.075)*(1+w*.9),.07,.44),glow:w*.95,rot:t.rot,alpha:1,squash:1-w*.2}}if(i==="spot"){const w=Math.max(8,l),b=vl(c,r,w),T=e===b,_=T?O(Math.max(s,f),0,1):0,M=e/w*Math.PI*2,P=.3;return{x:Math.cos(M)*P,y:Math.sin(M)*P*.78,px:O((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const w=it(r),b=Be(t.x+(.16+Math.abs(t.vx)*.5)*c*w),T=Be(t.y+(.13+Math.abs(t.vy)*.42)*c*w*.9),_=Math.min(.5-Math.abs(b),.5-Math.abs(T));return{x:b,y:T,px:O(.08+t.size*.04+f*.02,.06,.18),glow:(_<.065?.55:0)+f*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const b=hn(c,r,2),T=Math.floor(e/16)%2,_=(e%16/16+b/16)*Math.PI*2*(T?-1:1),M=.26+T*.12;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.8,px:O(.07+t.size*.03+f*.02,.05,.16),rot:_,alpha:1,glow:f*.55}}if(i==="moire"){const w=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(w?-.78:.62),_=.2+w*.13+m*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:O(.065+t.size*.028+f*.018,.048,.14),rot:T+t.rot*.2,alpha:w?.78:1,glow:f*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,M=_&1?1:-1;return{x:(ge((T+.5)/8+c*it(r)*.28*M)-.5)*.92,y:((_+.5)/6-.5)*.78,px:O(.07+t.size*.03+f*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:f*.42}}if(i==="zip"){const w=e%3,b=w===1?-1:1,T=1-m*.16;return{x:(ge(t.x+c*it(r)*.34*b*T+w*.12)-.5)*.94,y:(w/2-.5)*.52,px:O(.07+t.size*.032+f*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:f*.4}}if(i==="ghost"){const w=(e&1)===0,b=w?0:1/it(r),T=t.x*Math.PI*2+(c-b)*it(r)*1.35,_=.3+Math.sin((c-b)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:O(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:w?1:.34,glow:w?f*.5:.12}}if(i==="poly"){const w=e&1,b=w?8:12,T=Math.floor(e/2)%b,_=w?3:4,M=T/b*Math.PI*2+c*it(r)*(_/4)*(w?-1:1),P=.2+w*.15;return{x:Math.cos(M)*P,y:Math.sin(M)*P*.84,px:O(.068+t.size*.03+f*.018,.05,.15),rot:M,alpha:1,glow:f*.45}}if(i==="fall"){const w=ge(t.z+c*it(r,.5)),b=Cn(w),T=b*b,_=b>.82?(b-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:O(.075+t.size*.035+f*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:f*.4,squash:1-_*.28}}if(i==="liss"){const w=it(r),b=c*w*Math.PI*2*1.5+t.x*6.2,T=c*w*Math.PI*2+t.y*5.4;return{x:Math.sin(b)*.4,y:Math.sin(T)*.32,px:O(.07+t.size*.032+f*.02,.05,.16),rot:b*.15+t.rot,alpha:1,glow:f*.42}}if(i==="snap"){const w=hn(c,r,1)&1?1:-1,b=Math.floor(e/8)%5,T=e%8;return{x:w*(.2+T/7*.1),y:(b/4-.5)*.72,px:O(.072+t.size*.03+f*.025,.05,.16),rot:t.rot*.2+w*.08,alpha:1,glow:f*.6,squash:1-f*.1}}if(i==="chain"){const w=u?.travel??1,b=u?.morph??.7,T=u?.vary??1,_=u?.smooth??.72,P=.62/Math.max(8,l),I=ge(c*w*.14-e*P),A=c*b,U=ya(I,A,T,_),$=ya(ge(I+P),A,T,_),S=Math.max(.42,1.05-U.z*.55),F=Math.max(.42,1.05-$.z*.55),k=U.x/S,N=U.y/S,X=Math.atan2($.y/F-N,$.x/F-k),H=O(1.12/S,.55,1.85);return{x:k,y:N,px:O((.072+t.size*.028)*H,.05,.24),rot:X,alpha:O(.52+H*.42,.5,1)}}if(i==="tunnel"){const b=.3+ge(t.z-a*(.4+o*.22+n*.1))*2.45;if(b<.34||b>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/b;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:O(.2*t.size*(.95+n*.1+f*.26)/b,.04,.5),glow:f*.42,rot:t.rot+t.vr*a*.2,alpha:O((2.65-b)/.28,0,1)*O((b-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,P=.32+(1-ge(a*(.2+o*.12)+t.z*.02))*2.2;return{x:T/(P*.62),y:_/(P*.62),px:O(.16*t.size/P,.05,.42),rot:t.rot*.25,alpha:O((2.4-P)/.25,0,1)}}if(i==="bloom"){const w=ge(t.z-a*(.34+n*.12)),b=w*w,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*b*.92,y:Math.sin(T)*b*.92,px:O(.05+b*.32*t.size*(1+o*.06+f*.24),.04,.48),glow:f*.4,rot:t.rot+w*.4,alpha:O(1.05-b,0,1)*O(w/.08,0,1)}}if(i==="spiral"){const b=.28+ge(t.z-a*(.4+o*.2+n*.08))*2.6;if(b<.32||b>2.75)return null;const T=t.x*Math.PI*2+2.15/b+a*.1,_=(.1+t.y*.38)/b;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:O(.2*t.size*(.94+n*.1+f*.26)/b,.04,.52),glow:f*.4,rot:t.rot+T*.15,alpha:O((2.75-b)/.28,0,1)*O((b-.28)/.1,0,1)}}if(i==="helix"){const b=.26+ge(t.z-a*(.46+o*.22+n*.08))*2.7;if(b<.3||b>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/b)+t.x*Math.PI*2+T,M=(.11+t.y*.26)/b;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.92,px:O(.22*t.size*(.93+n*.1+f*.26)/b,.04,.54),glow:f*.4,rot:_+t.rot,alpha:O((2.85-b)/.28,0,1)*O((b-.26)/.1,0,1)}}if(i==="prism"){const b=.28+ge(t.z-a*(.42+o*.2+n*.08))*2.55;if(b<.32||b>2.7)return null;const T=a*.22+t.rot*.4,_=ge(t.x)-.5,M=ge(t.y)-.5,P=Math.cos(T),I=Math.sin(T);return{x:(_*P-M*I)/b,y:(_*I+M*P)/b,px:O(.2*t.size*(.94+n*.1+f*.26)/b,.04,.52),glow:f*.4,rot:t.rot+T,alpha:O((2.7-b)/.26,0,1)*O((b-.28)/.1,0,1)}}const h=.26+ge(t.z-a*(.46+o*.24+n*.1))*2.7;if(h<.3||h>2.85)return null;const g=(ge(t.x+t.vx*a*.03)-.5)/h,y=(ge(t.y+t.vy*a*.02)-.5)/h;return{x:g,y,px:O(.24*t.size*(.92+n*.1+f*.28)/h,.04,.6),glow:f*.48,rot:t.rot+t.vr*a*.12,alpha:O((2.85-h)/.3,0,1)*O((h-.26)/.1,0,1)}}const Dt={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function Ku(t){return Dt[t]}function $e(t,e,i){const a=parseInt(t.slice(1),16),o=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(o))return t;const n=O(i,0,1),s=l=>Math.round((a>>l&255)*(1-n)+(o>>l&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function Xu(t,e,i,a,o,n,s,r=0,l=0,c=!1,u=Ya[o]){const d=Ce(s+4>>>0),m=De(d,Dt[o]),f=De(d,Dt[o]),p=De(d,Dt[o]),h=c?$e(a,"#08060a",.68):a;t.fillStyle=h,t.fillRect(0,0,e,i);const g=t.createLinearGradient(0,0,e,i);if(c){const T=$e(u,"#ffd8a8",.3),_=.16+l*.4+r*.06;g.addColorStop(0,$e(h,T,_*.55)),g.addColorStop(.48,$e(h,m,.2)),g.addColorStop(1,$e(h,f,.24))}else g.addColorStop(0,$e(a,m,.38)),g.addColorStop(.45,$e(a,p,.28)),g.addColorStop(1,$e(a,f,.42));t.fillStyle=g,t.fillRect(0,0,e,i);const y=e*(.5+Math.sin(n*.17)*.08),w=i*(.46+Math.cos(n*.13)*.06),b=t.createRadialGradient(y,w,0,y,w,Math.max(e,i)*.72);if(c){const T=$e(u,"#ffd8a8",.28);b.addColorStop(0,$e(h,T,.22+l*.38+r*.05)),b.addColorStop(1,h)}else b.addColorStop(0,$e(a,m,.42+r*.1)),b.addColorStop(1,a);t.fillStyle=b,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function Zu(t,e=0){const i=Ce(e+17>>>0);return De(i,Dt[t])}function ci(t,e){const i=Ce(t+17>>>0);return De(i,Dt[Tt[Math.floor(i()*Tt.length)]])}function ui(t,e="#c41e3a"){const i=Ce(t+91>>>0);return i()<.35?e:De(i,ni)}function Qu(t){return Ya[t]}function Bt(t){return Tt[(t>>>0)%Tt.length]}const fi=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],to={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},io={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},Ft=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(io).map(t=>t.palette)];function di(t){return t&&fi.includes(t)?t:"kit"}function $t(t,e){const i=di(e);return i==="kit"?Ku(t):io[i].grounds}function ht(t,e){const i=di(e);return i==="kit"?Qu(t):io[i].ink}function ka(t,e=0,i){const a=$t(t,i),o=Ce(e+17>>>0);return a[Math.floor(o()*a.length)%a.length]}function Ta(t){return fi[Math.floor(t()*fi.length)%fi.length]}function Sn(t){return Ft[Math.floor(t()*Ft.length)%Ft.length]}function Fe(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const Yu=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ju=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ef=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],tf=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],af=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],xn=`
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
`,En=`
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
`,of=`
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
`,nf=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,sf=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Pn=`
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
`,ao={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Pn}${En}`,applyGlsl:nf};function rf(t){return t?{...ao,extraUniforms:`${Pn}${En}${of}`,applyGlsl:sf}:ao}const lf=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${xn}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},ao],oo=[...Yu,...Ju,...ef,...tf,...af,...lf],cf=new Map(oo.map(t=>[t.id,t]));function uf(){return oo}function at(t){return cf.get(t)}function ff(){const t={};for(const e of oo)(t[e.category]??=[]).push(e);return t}const df=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function no(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(o=>({...o,params:{...o.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Fe("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function hf(t,e){const i=e.data,a=t.sources.map(n=>n.id),o=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&a.includes(n.sourceId)?n.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:o,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function mf(t,e){if(t.length===0)return null;const i=Ce(e);return t[Math.floor(i()*t.length)]}function pf(t){return{...t,id:Fe("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Mn=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function gf(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(u=>{const d=parseInt(u.slice(1),16),m=d>>16&255,f=d>>8&255,p=d&255,h=g=>O(Math.round(Ue(g,t()*255,a)),0,255);return`#${[h(m),h(f),h(p)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const o=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),r=o+t()*(n-o),l=Ue(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function so(t,e,i,a){const o=at(t.typeId);if(!o)return t;const n=Ce(e),s={...t.params};for(const r of o.params)a&&r.id!==a||(s[r.id]=gf(n,r,s[r.id]??r.default,O(i,0,1)));return{...t,params:s}}function vf(t,e,i,a=!1,o){const n=t.effects.map((s,r)=>a&&o&&s.id!==o?s:so(s,e+r*997,i));return{...t,effects:n}}function ro(t,e,i){const a=at(t),o={};if(a)for(const n of a.params)o[n.id]=n.default;return so({id:Fe("fx"),typeId:t,enabled:!0,params:o},e,i)}function lo(t,e,i,a){const o={...t.params};if(t.typeId==="grade"&&(e==="lush"?(o.saturation=.18+a()*.42,o.brightness=-.04+a()*.16,o.contrast=.06+a()*.22,o.gamma=.82+a()*.35,o.hue=(a()-.5)*.18,o.exposure=-.15+a()*.4):e==="outsider"?(o.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,o.contrast=.2+a()*.55,o.gamma=.55+a()*1.1,o.hue=(a()-.5)*.7):(o.saturation=.05+a()*.5,o.contrast=.1+a()*.35,o.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(o.shadow=i.shadow,o.highlight=i.highlight,o.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(o.leakColor=i.leak,o.leak=e==="lush"?.18+a()*.35:a()*.22,o.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(o.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,o.halation=e==="lush"?.22+a()*.4:a()*.25,o.size=1.4+a()*2.2),t.typeId==="warp"&&(o.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(o.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(o.mixScan=e==="lush"?a()*.2:.25+a()*.5,o.noise=e==="lush"?a()*.1:.12+a()*.35),t.typeId==="posterize"&&(o.levels=3+Math.floor(a()*6),o.dither=.08+a()*.35),t.typeId==="threshold"&&(o.mix=.35+a()*.45,o.soft=.04+a()*.18),t.typeId==="critters"){o.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),o.size=.85+a()*.7,o.amount=.7+a()*.3,o.speed=.7+a()*1.3,o.seed=1+Math.floor(a()*9998);const n=a();e==="lush"?o.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?o.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":o.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){o.size=.12+a()*.05,o.count=1,o.crowd="normal",o.place="center";const n=a();e==="lush"?o.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?o.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":o.move=n>.78?"drift":"dance",o.echo=.35+a()*.5,o.amount=1,o.speed=o.move==="dance"?.55+a()*1.5:.32+a()*.7,o.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?o.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?o.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":o.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?o.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?o.coat=r>.5?"sodium":r>.26?"cream":"wild":o.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(o.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),o.zoom=.7+a()*.8),t.typeId==="channels"&&(o.tint=i.leak,o.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(o.lo=.1+a()*.22,o.hi=.5+a()*.35,o.amount=.45+a()*.4,o.invert=a()>.72),t.typeId==="dropout"&&(o.amount=.28+a()*.4,o.rate=.18+a()*.4,o.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:o}}function bf(t,e="mix"){const i=Ce(t>>>0);return lo(ro("critters",t,.85),e,Ft[t%Ft.length],i)}function yf(t,e="mix"){const i=Ce(t>>>0);return lo(ro("dancer",t,.85),e,Ft[t%Ft.length],i)}function wf(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,yf(t.seed+i*4243,"mix")]})}}function An(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,bf(t.seed+i*7919,"mix")]})}}function kf(){return Mn.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Tf(){return uf().map(t=>t.id).filter(t=>t!=="dancer")}function _f(t,e){const i=Ce(t>>>0),a=Tf(),o=e?3:2,n=e?5:4,s=Math.min(a.length,o+Math.floor(i()*(n-o+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Cf(t,e,i,a=!1,o=!0){const n=Ce(e+17>>>0),s=a?n()>.5?"outsider":"mix":n()>.55?"lush":n()>.35?"mix":"outsider",r=Sn(n),l=o?_f(e,a).map((c,u)=>lo(ro(c,e+u*3331,i),s,r,Ce(e+u*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function In(t,e,i,a,o,n=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=Ce(l^2654435769),u=t.layers.map((b,T)=>e==="selected"&&b.id!==i?b:e==="param"?b.id!==i?b:{...b,effects:b.effects.map(_=>_.id===a&&o?so(_,l+T*13,Math.max(r,.55),o):_)}:e==="all"?Cf(b,l+T*7919,r,n,s):vf(b,l+T*7919,r,!0,a)),d=ln,m=Ce(l+0*7919>>>0),f=kf(),p=f[Math.floor(m()*f.length)]??Mn[0],g={"herald tour":{generator:"heraldry",a:ci(l),b:ui(l)},"dense paper":{generator:"wallpaper",a:ci(l+3),b:ui(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:ci(l+5),b:ui(l+5)},"heart rain":{generator:"shower",a:ci(l+7),b:ui(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:ci(l+9),b:ui(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[p.name],y=t.sources.map((b,T)=>{if(e!=="all"||b.kind!=="generator")return b;const _=Ce(l+T*131),M=Sn(_);if(Ae(b.generator)||ln.includes(b.generator)){const F=Bt(l+T*41),k=Qa(l+T*73),N=Bt(l+T*99),X=_()>.74&&N!==F?N:void 0,H=Ta(_);return{...b,generator:wa(k),collageKit:F,collageKitB:X,collageMove:k,collageColorPack:H,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageChainAnimal:k==="chain"&&_()>.55?ba[1+Math.floor(_()*5)]:"off",collageCamera:b.collageCamera??"fixed",collageCameraFeel:b.collageCameraFeel,collageHuntWideMin:b.collageHuntWideMin,collageHuntWideMax:b.collageHuntWideMax,collageHuntFollowMin:b.collageHuntFollowMin,collageHuntFollowMax:b.collageHuntFollowMax,collageHuntSnap:b.collageHuntSnap,collageHuntZoom:b.collageHuntZoom,collageHuntTight:b.collageHuntTight,collageHuntReactMin:b.collageHuntReactMin,collageHuntReactMax:b.collageHuntReactMax,collageHuntPrecision:b.collageHuntPrecision,collageHuntSelect:b.collageHuntSelect,collageHuntFocus:b.collageHuntFocus,collageHuntFocusSpeed:b.collageHuntFocusSpeed,collageHuntFocusError:b.collageHuntFocusError,collageHuntVariation:b.collageHuntVariation,colorA:ka(F,l+T*17,H),colorB:ht(F,H),name:X?`${Yt[k]} · ${F} · ${X}`:`${Yt[k]} · ${F}`}}const P=n?!1:_()>.35,I=g?g.generator:P?b.generator:d[Math.floor(_()*d.length)],A=Bt(l+T*41),U=Ta(_),$=Ae(I)?ka(A,l+T*17,U):M.inkA,S=Ae(I)?ht(A,U):M.inkB;return{...b,generator:I,collageKit:Ae(I)?A:b.collageKit,collageColorPack:Ae(I)?U:b.collageColorPack,colorA:g?g.a:$,colorB:g?ht(A,U):S}}),w=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:u,sources:y,globalFeedback:w}}function Sf(t){const e=t.seed+7919>>>0,i=Ce(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],o=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Ae(r.generator))return r;const c=Tt[Math.floor(i()*Tt.length)],u=Qa(e+l*59),d=Ta(i);return{...r,generator:wa(u),collageKit:c,collageMove:u,collageColorPack:d,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageChainAnimal:u==="chain"&&i()>.55?ba[1+Math.floor(i()*5)]:"off",collageCamera:r.collageCamera??"fixed",collageCameraFeel:r.collageCameraFeel,collageHuntSelect:r.collageHuntSelect,collageHuntFocus:r.collageHuntFocus,collageHuntVariation:r.collageHuntVariation,colorA:ka(c,e+l*13,d),colorB:ht(c,d),name:`${Yt[u]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:o[Math.floor(i()*o.length)],coat:n[Math.floor(i()*n.length)]}}:l)}))};return s=An(s),s}function xf(){return{x:0,y:0,scale:1,rotation:0}}function Ef(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Bn(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Pf(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Mf(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!0}}const Af={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},_a={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},If={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Fn(t,e,i,a){const o=t==="chain"?oi(a):"off",n=o!=="off"?`CHAIN · ${dn[o].toUpperCase()}`:Yt[t];return i&&i!==e?`${n} · ${_a[e]} · ${_a[i]}`:`${n} · ${_a[e]}`}function Wt(t="plasma",e,i,a){const o=Ae(t)?It(e):void 0,n=Af[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;o&&(s=i==="mix"||i==="tour"?Qa(Date.now()+Math.floor(Math.random()*997)):i?un(i):mn(t));const r=s?wa(s):t??"plasma",l=s?Yt[s]:If[t??""]??(t?t.toUpperCase():"SIGNAL"),c=o&&a?.kitB?It(a.kitB):void 0,u=c&&o&&c!==o?c:void 0,d=o&&s?Fn(s,o,u,a?.chainAnimal):o?`${l} · ${_a[o]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,m=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,f=o?di(a?.colorPack):void 0;return{id:Fe("src"),name:d,kind:"generator",generator:r,colorA:m??(o?ka(o,s==="rush"?1:s==="tunnel"?5:s==="bounce"?7:11,f):n.a),colorB:o?ht(o,f):n.b,collageColorPack:f,collageKit:o,collageKitB:u,collageMove:s,collageNight:o?!!a?.night:void 0,collageScale:o?ri(a?.scale):void 0,collageDensity:o?li(a?.density):void 0,collagePace:o?Jt(a?.pace):void 0,collageChainTravel:o?ei(a?.chainTravel):void 0,collageChainMorph:o?ti(a?.chainMorph):void 0,collageChainVary:o?ii(a?.chainVary):void 0,collageChainSmooth:o?ai(a?.chainSmooth):void 0,collageChainAnimal:o?oi(a?.chainAnimal):void 0,collageSpringStrength:o?Oi(a?.springStrength):void 0,collageSpringDamp:o?Hi(a?.springDamp):void 0,collageSpringDist:o?Li(a?.springDist):void 0,collageSpringElast:o?Ni(a?.springElast):void 0,collageSpringBreak:o?Ui(a?.springBreak):void 0,collageFlowScale:o?qi(a?.flowScale):void 0,collageFlowTurb:o?Di(a?.flowTurb):void 0,collageFlowEvolve:o?$i(a?.flowEvolve):void 0,collageFlowForce:o?Wi(a?.flowForce):void 0,collageFlowDepth:o?ji(a?.flowDepth):void 0,collageBoidCohere:o?Vi(a?.boidCohere):void 0,collageBoidSep:o?Gi(a?.boidSep):void 0,collageBoidAlign:o?Ki(a?.boidAlign):void 0,collageBoidRadius:o?Xi(a?.boidRadius):void 0,collageBoidSpeed:o?Zi(a?.boidSpeed):void 0,collagePoleCount:o?Qi(a?.poleCount):void 0,collagePoleAttract:o?Yi(a?.poleAttract):void 0,collagePoleRepel:o?Ji(a?.poleRepel):void 0,collagePoleSpeed:o?ea(a?.poleSpeed):void 0,collagePoleFalloff:o?ta(a?.poleFalloff):void 0,collagePoleSwitch:o?ia(a?.poleSwitch):void 0,collageCamera:o?Qt(a?.camera):void 0,collageCameraFeel:o?aa(a?.cameraFeel):void 0,collageHuntWideMin:o?na(a?.huntWideMin):void 0,collageHuntWideMax:o?sa(a?.huntWideMax):void 0,collageHuntFollowMin:o?ra(a?.huntFollowMin):void 0,collageHuntFollowMax:o?la(a?.huntFollowMax):void 0,collageHuntSnap:o?ca(a?.huntSnap):void 0,collageHuntZoom:o?ua(a?.huntZoom):void 0,collageHuntTight:o?fa(a?.huntTight):void 0,collageHuntReactMin:o?da(a?.huntReactMin):void 0,collageHuntReactMax:o?ha(a?.huntReactMax):void 0,collageHuntPrecision:o?ma(a?.huntPrecision):void 0,collageHuntSelect:o?oa(a?.huntSelect):void 0,collageHuntFocus:o?!!a?.huntFocus:void 0,collageHuntFocusSpeed:o?pa(a?.huntFocusSpeed):void 0,collageHuntFocusError:o?ga(a?.huntFocusError):void 0,collageHuntVariation:o?va(a?.huntVariation):void 0,width:1280,height:720,duration:0}}function Rn(t){const e=at(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Fe("fx"),typeId:t,enabled:!0,params:i}}function zn(t,e,i=[]){return{id:Fe("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:xf(),effects:i.map(Rn),mask:Ef(),feedback:Bn()}}function On(){const t=Wt("wallpaper","sailor","rush"),e=zn("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Pf(),globalFeedback:{...Bn(),amount:0,opacity:.4,scale:1},exportSettings:Mf(),presets:[]},a=In({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[no(i,"factory · tour"),no(a,"factory · scramble")],i}function Hn(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1}}class Bf{state;listeners=new Set;constructor(e=On()){this.state={project:e,ui:Hn(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...Hn(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const E=new Bf;function co(t,e,i,a,o){if(e<=0)return 0;const n=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return o?(s%e+e)%e:O(s,0,e)}function Ff(t,e,i,a,o){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===a&&(i!=="effect"||n.effectId===o)).sort((n,s)=>n.time-s.time)}function Rf(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let o=0;o<t.length-1;o++){const n=t[o],s=t[o+1];if(e>=n.time&&e<=s.time){const r=s.time-n.time||1;let l=(e-n.time)/r;return(s.easing==="smooth"||n.easing==="smooth")&&(l=Nr(l)),Ue(n.value,s.value,l)}}return i}function _t(t,e,i,a,o,n,s){const r=Ff(t.keyframes,e,i,a,s);return Rf(r,n,o)}function zf(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(o=>({...o,params:{...o.params}}))};a.opacity=_t(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=_t(t,e.id,"layer","x",e.transform.x,i),a.transform.y=_t(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=_t(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=_t(t,e.id,"layer","rotation",e.transform.rotation,i);for(const o of Object.keys(a.feedback))a.feedback[o]=_t(t,e.id,"feedback",o,e.feedback[o],i);for(const o of a.effects)for(const[n,s]of Object.entries(o.params))typeof s=="number"&&(o.params[n]=_t(t,e.id,"effect",n,s,i,o.id));return a}function Of(t,e){const i=t.layers[0]?.id??"";return _t(t,i,"playback","speed",t.playback.speed,e)}const Hf=[{beats:[8],weight:4},{beats:[4,4],weight:5},{beats:[8,4],weight:3},{beats:[4,4,8],weight:3},{beats:[2,2,4],weight:2},{beats:[4,2,2],weight:2},{beats:[2,6],weight:2},{beats:[6,2],weight:2},{beats:[1,1,6],weight:2},{beats:[4,1,1,2],weight:1},{beats:[3,5],weight:1},{beats:[8,2,2,4],weight:2}],Lf=["spot","burst","snap","step"],Nf=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],Uf=["drop","halo","bars","wave","poly","ghost","fall"];function qf(t,e){const i=e.reduce((o,n)=>o+n.weight,0);let a=t()*i;for(const o of e)if(a-=o.weight,a<=0)return o.item;return e[e.length-1].item}function Df(t){return qf(t,Hf.map(e=>({item:e.beats,weight:e.weight})))}function $f(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(o=>o!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function Wf(t,e,i){const a=t<=2?Lf:t<=4?Nf:Uf;return $f(e,a,i)}function jf(t,e,i,a){const o=Math.max(1,t),n=(i??[]).filter(u=>u>=0&&u<o+.05),s=60/Math.max(40,e||120),r=Number.isFinite(a)&&a>=0?a:n.length?(n[0]%s+s)%s:0,l=r>.04&&r<s*1.8?r:n[0]!=null&&n[0]<s*.7?n[0]:0,c=[];for(let u=l;u<o-s*.08;u+=s){let d=u,m=s*.2;for(const f of n){const p=Math.abs(f-u);p<m&&(m=p,d=f)}(!c.length||d-c[c.length-1]>s*.55)&&c.push(d)}if(!c.length)for(let u=0;u<=o+s*.01;u+=s)c.push(u);return c[c.length-1]<o&&c.push(o),c}function Vf(t){const e=Ce(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=jf(i,t.bpm??120,t.beats,t.offset),o=[];let n=0,s,r,l=0;for(;n<a.length-1&&a[n]<i;){const c=Df(e);r=Bt(t.seed+l*41+Math.floor(e()*17)>>>0);const u=l%5===2||e()>.82,d=e()>.72?Bt(t.seed+l*99+7>>>0):void 0,m=d&&d!==r?d:void 0,f=Ta(e),p=$t(r,f);for(const h of c){if(n>=a.length-1||a[n]>=i)break;const g=Math.min(a.length-1,n+h),y=a[n];if(y>=i)break;const w=Wf(g-n,e,s),b=p[Math.floor(e()*p.length)%p.length];o.push({start:y,beats:g-n,look:{kit:r,kitB:m,move:w,night:u,wash:b,ink:ht(r,f),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=w,n=g}if(l++,l>80)break}if(!o.length){const c=Bt(t.seed);o.push({start:0,beats:8,look:{kit:c,move:"bars",night:!1,wash:$t(c)[0],ink:ht(c),scale:.78,density:.88,pace:.62}})}return o}function Gf(t,e,i){if(!t.length){const r=Bt(1);return{start:0,beats:8,look:{kit:r,move:"bars",night:!1,wash:$t(r)[0],ink:ht(r),scale:.78,density:.88,pace:.62}}}const a=t[t.length-1],o=Math.max(i&&i>a.start?i:0,a.start+.5,t.length>1?a.start+(a.start-t[0].start)/Math.max(1,t.length-1):a.start+2),n=(e%o+o)%o;let s=t[0];for(const r of t)if(r.start<=n+5e-4)s=r;else break;return s}function Kf(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const Xf=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function Zf(t){return(t.type??"").startsWith("audio/")||Xf.test(t.name)}function Ca(t){return t.sources.find(e=>e.kind==="audio")}let hi=null,mt=null,mi=null;const uo=new WeakSet;let pi=0,gi=0,Rt=0,Ln=0;function Sa(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(hi||(hi=new t,mt=hi.createAnalyser(),mt.fftSize=256,mt.smoothingTimeConstant=.72,mt.connect(hi.destination),mi=new Uint8Array(mt.frequencyBinCount)),hi):null}async function xa(){const t=Sa();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function Qf(t){const e=Sa();if(!(!e||!mt||uo.has(t)))try{e.createMediaElementSource(t).connect(mt),uo.add(t)}catch{uo.add(t)}}async function Yf(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",Qf(i),xa();let a=null;const o=Sa();if(o)try{const u=await t.arrayBuffer(),d=o.decodeAudioData(u.slice(0)).catch(()=>null);a=await Promise.race([d,new Promise(m=>setTimeout(()=>m(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(u=>{if(Number.isFinite(i.duration)&&i.duration>0){u(i.duration);return}i.addEventListener("loadedmetadata",()=>u(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>u(a?.duration??0),{once:!0})}),new Promise(u=>setTimeout(()=>u(a?.duration??0),2500))])||a?.duration||0,r=a?Jf(a.getChannelData(0),a.sampleRate):[],l=ed(r,s),c=l.bpm>40?td(r,l.bpm,l.offset,s):r;return{id:Fe("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:c,bpm:l.bpm,beatOffset:l.offset,objectUrl:e}}function Jf(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,o=Math.floor((t.length-a)/i);if(o<16)return[];const n=new Float32Array(o);for(let u=0;u<o;u++){const d=u*i;let m=0;for(let f=0;f<a;f+=2){const p=t[d+f];m+=p*p}n[u]=Math.sqrt(m/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let u=s;u<o;u++){let d=0,m=0;for(let g=u-s;g<u;g++)d+=n[g],n[g]>m&&(m=n[g]);d/=s;const f=n[u]-n[u-1];if(!(n[u]>d*1.32&&n[u]>m*.72&&f>.0035))continue;const h=u*i/e;h-c<r||(l.push(h),c=h)}return l}function ed(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let d=1;d<t.length;d++){const m=t[d]-t[d-1];m>=.18&&m<=1.2&&i.push(m)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((d,m)=>d-t[m]).filter(d=>d>.12&&d<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((d,m)=>d-m);const o=a[Math.floor(a.length/2)];let n=60/Math.max(.18,o);for(;n>155;)n/=2;for(;n<72&&n>0;)n*=2;n=fo(Math.round(n),70,170);const s=60/n,r=e>0?e:(t[t.length-1]??0)+s;let l=(t[0]%s+s)%s,c=-1;const u=new Set([0,l]);for(let d=0;d<Math.min(t.length,16);d++)u.add((t[d]%s+s)%s);for(const d of u){let m=0;for(const f of t){const p=((f-d)%s+s)%s,h=Math.min(p,s-p);h<s*.18&&(m+=1-h/(s*.18))}d>.03&&d<r-s*.5&&(m+=.15),m>c&&(c=m,l=d)}return{bpm:n,offset:l}}function td(t,e,i,a){if(!(e>40))return[...t];const o=60/e,n=Math.max(o,a||(t[t.length-1]??0)+o),s=i>=0&&i<o*1.8?i:t[0]??0,r=[];for(let l=s;l<n-o*.08;l+=o){let c=l,u=Math.min(.05,o*.22);for(const d of t){const m=Math.abs(d-l);m<u&&(u=m,c=d)}(!r.length||c-r[r.length-1]>o*.55)&&r.push(c)}return r}function Nn(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const o=60/e;if(!(o>0))return 0;const n=t-a;if(n<-.02)return 0;const s=(n%o+o)%o;return Math.exp(-s/i)}function id(t,e,i=.2){if(!t.length)return 0;let a=0,o=t.length-1;for(;a<o;){const r=a+o+1>>1;t[r]<=e?a=r:o=r-1}const n=t[a];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function fo(t,e,i){return Math.max(e,Math.min(i,t))}function ad(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const o=(a%i+i)%i,n=Math.floor(o*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,n)),l=Math.max(r+1,Math.min(t.length,n+s));let c=0;for(let g=r;g<l;g++)c+=t[g]*t[g];const u=Math.min(1,Math.sqrt(c/(l-r))*3.4),d=Math.max(s,Math.floor(e*.09)),m=Math.min(t.length,n+d);let f=0,p=0;for(let g=r;g<m;g+=8)f+=t[g]*t[g],p++;const h=Math.min(1,Math.sqrt(f/Math.max(1,p))*4.2);return{energy:u,bass:h}}function od(){if(!mt||!mi)return null;mt.getByteFrequencyData(mi);let t=0,e=0;const i=mi.length,a=Math.max(4,Math.floor(i*.12));for(let o=0;o<i;o++){const n=mi[o]/255;t+=n,o<a&&(e+=n)}return{energy:t/i,bass:e/a}}function nd(t,e){let i=0,a=0,o=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=ad(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],u=t.beatOffset??0,d=c.length?id(c,r,.11):0,m=Nn(r,t.bpm??0,.11,u),f=fo((i-.12)*.75,0,.6);o=Math.max(d,m*.86,c.length?f*.28:f)}else if(t?.kind==="audio"){const s=od();s&&(i=s.energy,a=s.bass,o=Math.max(Nn(e,t.bpm??0,.11,t.beatOffset??0)*.86,fo((i-.12)*.55,0,.5)))}Math.abs(e-Ln)>.2||o>=Rt?Rt=o:Rt+=(o-Rt)*.32,Ln=e;const n=t?.kind==="audio"?.22:.14;return pi+=(i-pi)*n,gi+=(a-gi)*Math.min(n,.16),!t&&pi<.002&&(pi=0),!t&&gi<.002&&(gi=0),t||(Rt=0),{energy:pi,bass:gi,beat:Rt}}function sd(t,e,i=0){const a=e.length,o=t.length;if(a<1)return;if(o<1){e.fill(0);return}for(let s=0;s<a;s++)e[s]=t[s%o];if(i<=0)return;const n=Math.max(1,Math.round(a*i));for(let s=0;s<n;s++)e[a-n+s]*=1-(s+1)/n}function rd(t,e,i=!1){const a=t.sampleRate,o=Math.max(1,Math.round(Math.max(.05,e)*a)),n=Math.max(1,t.numberOfChannels),s=new AudioBuffer({length:o,numberOfChannels:n,sampleRate:a}),r=i?.12:0;for(let l=0;l<n;l++)sd(t.getChannelData(l),s.getChannelData(l),r);return s}async function ld(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const a=Sa()??new e,o=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(o&&o.length>32)return t.pcm=o,o}catch{return null}return null}function ho(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const cd=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,ud=`#version 300 es
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
`,fd=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,dd=`#version 300 es
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
`,hd=`#version 300 es
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
`,md=`#version 300 es
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
`,pd=`#version 300 es
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
`,gd=`#version 300 es
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
${xn}
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
`,vd=`#version 300 es
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
`,bd=`#version 300 es
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
`,yd=`#version 300 es
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
`,wd=`#version 300 es
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
`,kd=`#version 300 es
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
`,Td=`#version 300 es
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
`,_d=`#version 300 es
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
`,xd=`#version 300 es
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
`,Un=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Rd=`#version 300 es
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
`;class zt extends Error{}function zd(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new zt("WebGL2 is required for Phosphene.");return e}function qn(t,e,i){const a=t.createShader(e);if(!a)throw new zt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new zt(o)}return a}class ve{gl;prog;uniforms=new Map;constructor(e,i,a=cd){this.gl=e;const o=qn(e,e.VERTEX_SHADER,a),n=qn(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new zt("Unable to create program");if(e.attachShader(s,o),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(o),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new zt(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const o=this.loc(e);o&&this.gl.uniform2f(o,i,a)}v3(e,i,a,o){const n=this.loc(e);n&&this.gl.uniform3f(n,i,a,o)}v4(e,i,a,o,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,o,n)}dispose(){this.gl.deleteProgram(this.prog)}}function Ea(t){const e=t.createTexture();if(!e)throw new zt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Dn(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Od(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class jt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new zt("Unable to create framebuffer");this.fbo=i,this.tex=Ea(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Od(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Oe(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function ot(t){t.drawArrays(t.TRIANGLES,0,3)}const Hd={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Ld={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},$n={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function Nd(t){return`${ud}
${t.extraUniforms??""}
${t.applyGlsl}
${fd}`}function Ud(t,e){return new ve(t,Nd(e))}function vi(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Vt=8;function Wn(t,e,i){return new ImageData(t,e,i)}function qd(t,e,i){const a=t.find(n=>n.id===e);if(!a?.options)return Number(i)||0;const o=a.options.findIndex(n=>n.value===i);return o<0?0:o}class Dd{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new Vu;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=zd(e),this.generatorProg=new ve(this.gl,pd)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Vt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new jt(e),this.pong??=new jt(e),this.composite??=new jt(e),this.post??=new jt(e);this.ring.length<Vt;)this.ring.push(new jt(e));this.copy??=new ve(e,Un),this.blit??=new ve(e,hd),this.compositeProg??=new ve(e,dd),this.feedbackProg??=new ve(e,md),this.textureProg??=new ve(e,Rd),this.black||(this.black=Ea(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(n=>n.enabled))return!0;const o=e.sources.find(n=>n.id===a.sourceId);return!!(o&&o.kind!=="generator"&&o.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ve(this.gl,vd),this.stageProg):e===13?(this.sketchProg??=new ve(this.gl,bd),this.sketchProg):e===14?(this.feltProg??=new ve(this.gl,yd),this.feltProg):e===15?(this.foilProg??=new ve(this.gl,wd),this.foilProg):e===16?(this.plushProg??=new ve(this.gl,kd),this.plushProg):e===17?(this.yarnProg??=new ve(this.gl,Td),this.yarnProg):e===18?(this.sequinProg??=new ve(this.gl,_d),this.sequinProg):e===19?(this.quiltProg??=new ve(this.gl,Cd),this.quiltProg):e===20?(this.corkProg??=new ve(this.gl,Sd),this.corkProg):e===21?(this.ginghamProg??=new ve(this.gl,xd),this.ginghamProg):e===22?(this.sprinkleProg??=new ve(this.gl,Ed),this.sprinkleProg):e===23?(this.velvetProg??=new ve(this.gl,Pd),this.velvetProg):e===24?(this.confettiProg??=new ve(this.gl,Md),this.confettiProg):e===25?(this.discoProg??=new ve(this.gl,Ad),this.discoProg):e===26?(this.terrazzoProg??=new ve(this.gl,Id),this.terrazzoProg):e===27?(this.comicProg??=new ve(this.gl,Bd),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ve(this.gl,Fd),this.fieldsProg):(this.generatorFull??=new ve(this.gl,gd),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",o=this.effectProg.get(a);if(o)return o;const n=e==="dancer"?rf(i):at(e);if(!n)return null;try{const s=Ud(this.gl,n);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(o=>!!o);for(const o of a)o.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new jt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Ea(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Dn(this.gl,i,a),i}blitTo(e,i){const a=this.gl,o=this.copy;o&&(e.bind(),o.use(),Oe(a,0,i),o.i("uTex",0),ot(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const o=Math.max(e.duration,e.exportSettings.duration||0,8),n=`${e.cutEdit.seed}|${o}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==n)&&(this.cutReel=Vf({seed:e.cutEdit.seed,duration:o,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=n);const s=Gf(this.cutReel,i,o);this.cutStatus=Kf(s),this.cutLook={generator:wa(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,o,n,s,r){const l=this.gl;this.copy??=new ve(l,Un),this.heraldryTex??=Ea(l);const c=this.cutLook??i,u=this.heraldry.paint({width:s,height:r,time:a,duration:n,seed:o,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,chainAnimal:c.collageChainAnimal,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,camera:c.collageCamera,cameraFeel:c.collageCameraFeel,huntWideMin:c.collageHuntWideMin,huntWideMax:c.collageHuntWideMax,huntFollowMin:c.collageHuntFollowMin,huntFollowMax:c.collageHuntFollowMax,huntSnap:c.collageHuntSnap,huntZoom:c.collageHuntZoom,huntTight:c.collageHuntTight,huntReactMin:c.collageHuntReactMin,huntReactMax:c.collageHuntReactMax,huntPrecision:c.collageHuntPrecision,huntSelect:c.collageHuntSelect,huntFocus:c.collageHuntFocus,huntFocusSpeed:c.collageHuntFocusSpeed,huntFocusError:c.collageHuntFocusError,huntVariation:c.collageHuntVariation});if(Dn(l,this.heraldryTex,u),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Oe(l,0,this.heraldryTex),this.copy.i("uTex",0),ot(l)}drawGenerator(e,i,a,o=77,n=8){if(Ae(i.generator)){this.drawHeraldry(e,i,a,o,n,e.w,e.h);return}const s=this.gl,r=$n[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?vi(i.colorA):[.07,.04,.1],u=i.colorB?vi(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",u[0],u[1],u[2]),l.f("uScale",6),l.f("uSeed",o),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),ot(s)}drawTexture(e,i,a){const o=this.gl,n=this.textureProg;n&&(e.bind(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),n.use(),Oe(o,0,i),n.i("uTex",0),n.v2("uTranslate",a.transform.x,a.transform.y),n.f("uScale",a.transform.scale),n.f("uRotation",a.transform.rotation),n.v2("uFit",1,1),ot(o))}applyEffect(e,i,a,o,n,s,r,l,c){const u=at(a.typeId),d=this.progFor(a);if(!u||!d){this.blitTo(e,i);return}const m=this.gl;e.bind(),d.use(),Oe(m,0,i),Oe(m,1,l),Oe(m,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",n),d.f("uFrame",s),d.f("uQuality",r==="draft"?0:r==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",o.transform.x,o.transform.y),d.f("u_scale",o.transform.scale),d.f("u_rotation",o.transform.rotation);const f=o.mask;d.i("u_maskType",Ld[f.type]??0),d.i("u_maskInvert",f.invert?1:0),d.f("u_maskSoftness",f.softness),d.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),d.v2("u_maskCenter",f.center.x,f.center.y),d.f("u_maskRadius",f.radius),d.f("u_maskGradientAngle",f.gradientAngle),d.f("u_maskNoiseScale",f.noiseScale);let p=1;for(const h of u.params){const g=a.params[h.id]??h.default,y=`u_${h.id}`;if(h.kind==="color"&&typeof g=="string"){const[w,b,T]=vi(g);d.v3(y,w,b,T)}else h.kind==="bool"?d.f(y,g?1:0):h.kind==="enum"?d.f(y,qd(u.params,h.id,g)):d.f(y,Number(g));h.id==="mix"&&(p=Number(g))}d.f("u_mix",p),ot(m)}drawLite(e,i){const a=this.gl,o=e.layers.find(d=>d.enabled)??e.layers[0],n=o?e.sources.find(d=>d.id===o.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Ae(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=$n[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?vi(s.colorA):[.07,.04,.1],u=s.colorB?vi(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",u[0],u[1],u[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),ot(a)}render(e,i,a){const o=this.gl,n=a?.quality??e.quality,s=nd(Ca(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=Ca(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,u=this.composite,d=this.post,m=this.blit,f=this.compositeProg,p=this.feedbackProg,h=n==="draft"?.5:1,g=Math.max(16,Math.floor((a?.width??this.canvas.width)*h)),y=Math.max(16,Math.floor((a?.height??this.canvas.height)*h));this.ensureSize(g,y),u.bind(),o.clearColor(.02,.02,.03,1),o.clear(o.COLOR_BUFFER_BIT);const w=e.globalFeedback,b=Math.max(0,Math.min(Vt-1,Math.round(w.delay))),T=(this.ringIndex-1-b+Vt*8)%Vt,_=this.ring[T].tex,M=Math.floor(i*e.fps);for(const P of e.layers){if(!P.enabled)continue;const I=zf(e,P,i),A=e.sources.find(F=>F.id===I.sourceId)??null;if(!A||A.kind==="generator"||A.kind==="audio"){const F=A&&A.kind!=="audio"?A:{generator:"plasma"};this.drawGenerator(l,F,i,e.seed,e.duration)}else{const F=this.uploadSource(A);this.drawTexture(l,F,I)}let U=l,$=c;const S=this.histFor(I.id);for(const F of I.effects){if(!F.enabled)continue;this.applyEffect($,U.tex,F,I,i,M,n,_,S.tex);const k=U;U=$,$=k}if(I.feedback.amount>.001){$.bind(),p.use(),Oe(o,0,U.tex),Oe(o,1,S.tex),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",I.feedback.amount),p.f("uOpacity",I.feedback.opacity),p.f("uScale",I.feedback.scale),p.f("uRotation",I.feedback.rotation),p.f("uDistortion",I.feedback.distortion),p.f("uTime",i),ot(o);const F=U;U=$,$=F}this.blitTo(d,u.tex),u.bind(),f.use(),Oe(o,0,d.tex),Oe(o,1,U.tex),f.i("uBase",0),f.i("uLayer",1),f.f("uOpacity",I.opacity),f.i("uBlend",Hd[I.blendMode]??0),f.v2("uResolution",g,y),ot(o),this.blitTo(S,U.tex)}w.amount>.001&&(d.bind(),p.use(),Oe(o,0,u.tex),Oe(o,1,_),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",w.amount),p.f("uOpacity",w.opacity),p.f("uScale",w.scale),p.f("uRotation",w.rotation),p.f("uDistortion",w.distortion),p.f("uTime",i),ot(o),this.blitTo(u,d.tex)),this.blitTo(this.ring[this.ringIndex],u.tex),this.ringIndex=(this.ringIndex+1)%Vt,o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height),m.use(),Oe(o,0,u.tex),m.i("uTex",0),m.f("uVignette",a?.vignette??.25),ot(o)}capture(e,i,a,o,n="image/png",s=.97){const r=this.paintFrame(e,i,a,o);return new Promise((l,c)=>{r.toBlob(u=>{u?l(u):c(new Error("Export failed"))},n,s)})}paintFrame(e,i,a,o,n){const s=n??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==o&&(s.height=o);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:o,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===o)r.putImageData(Wn(l,a,o),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Wn(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,o)}return s}readPixels(e,i){const a=this.gl,o=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,o),a.bindFramebuffer(a.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(o.length)),s=e*4;for(let r=0;r<i;r++)n.set(o.subarray((i-1-r)*s,(i-r)*s),r*s);return n}}const $d=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Wd=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function jd(t){return t.type.startsWith("video/")||Wd.test(t.name)}function Vd(t){return t.type.startsWith("image/")||$d.test(t.name)}async function Gd(t){if(jd(t))return Xd(t);if(Vd(t))return Vn(t);if(Zf(t))return Yf(t);throw new Error(`Unsupported media: ${t.name}`)}async function jn(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Vn(i)}async function Vn(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Fe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Kd(e);return{id:Fe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Kd(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function Xd(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,o)=>{const n=()=>{a({id:Fe("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>o(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function Zd(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Fe("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Gn(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function Qd(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,o=a.duration;if(!Number.isFinite(o)||o<=0)return;const n=(e%o+o)%o,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,u=Math.abs(a.currentTime-n);if(!s){if(a.paused||a.pause(),u>1/30)try{a.currentTime=n}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),u>.35)try{a.currentTime=n}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),u>1/30)try{a.currentTime=n}catch{}}const Yd=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ma(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var mo={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Kn;function eh(){return Kn||(Kn=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,o,n){function s(c,u){if(!o[c]){if(!a[c]){var d=typeof Ma=="function"&&Ma;if(!u&&d)return d(c,!0);if(r)return r(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var f=o[c]={exports:{}};a[c][0].call(f.exports,function(p){var h=a[c][1][p];return s(h||p)},f,f.exports,i,a,o,n)}return o[c].exports}for(var r=typeof Ma=="function"&&Ma,l=0;l<n.length;l++)s(n[l]);return s})({1:[function(i,a,o){var n=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var c,u,d,m,f,p,h,g=[],y=0,w=l.length,b=w,T=n.getTypeOf(l)!=="string";y<l.length;)b=w-y,d=T?(c=l[y++],u=y<w?l[y++]:0,y<w?l[y++]:0):(c=l.charCodeAt(y++),u=y<w?l.charCodeAt(y++):0,y<w?l.charCodeAt(y++):0),m=c>>2,f=(3&c)<<4|u>>4,p=1<b?(15&u)<<2|d>>6:64,h=2<b?63&d:64,g.push(r.charAt(m)+r.charAt(f)+r.charAt(p)+r.charAt(h));return g.join("")},o.decode=function(l){var c,u,d,m,f,p,h=0,g=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var w,b=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&b--,l.charAt(l.length-2)===r.charAt(64)&&b--,b%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=s.uint8array?new Uint8Array(0|b):new Array(0|b);h<l.length;)c=r.indexOf(l.charAt(h++))<<2|(m=r.indexOf(l.charAt(h++)))>>4,u=(15&m)<<4|(f=r.indexOf(l.charAt(h++)))>>2,d=(3&f)<<6|(p=r.indexOf(l.charAt(h++))),w[g++]=c,f!==64&&(w[g++]=u),p!==64&&(w[g++]=d);return w}},{"./support":30,"./utils":32}],2:[function(i,a,o){var n=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(u,d,m,f,p){this.compressedSize=u,this.uncompressedSize=d,this.crc32=m,this.compression=f,this.compressedContent=p}c.prototype={getContentWorker:function(){var u=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return u.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,d,m){return u.pipe(new r).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,o){var n=i("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,o){var n=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var u=0;u<8;u++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?n.getTypeOf(r)!=="string"?(function(c,u,d,m){var f=s,p=m+d;c^=-1;for(var h=m;h<p;h++)c=c>>>8^f[255&(c^u[h])];return-1^c})(0|l,r,r.length,0):(function(c,u,d,m){var f=s,p=m+d;c^=-1;for(var h=m;h<p;h++)c=c>>>8^f[255&(c^u.charCodeAt(h))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(i,a,o){var n=null;n=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:n}},{lie:37}],7:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=n?"uint8array":"array";function u(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}o.magic="\b\0",r.inherits(u,l),u.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,d.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},o.compressWorker=function(d){return new u("Deflate",d)},o.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,o){function n(f,p){var h,g="";for(h=0;h<p;h++)g+=String.fromCharCode(255&f),f>>>=8;return g}function s(f,p,h,g,y,w){var b,T,_=f.file,M=f.compression,P=w!==c.utf8encode,I=r.transformTo("string",w(_.name)),A=r.transformTo("string",c.utf8encode(_.name)),U=_.comment,$=r.transformTo("string",w(U)),S=r.transformTo("string",c.utf8encode(U)),F=A.length!==_.name.length,k=S.length!==U.length,N="",X="",H="",ae=_.dir,V=_.date,te={crc32:0,compressedSize:0,uncompressedSize:0};p&&!h||(te.crc32=f.crc32,te.compressedSize=f.compressedSize,te.uncompressedSize=f.uncompressedSize);var L=0;p&&(L|=8),P||!F&&!k||(L|=2048);var z=0,oe=0;ae&&(z|=16),y==="UNIX"?(oe=798,z|=(function(Q,we){var Me=Q;return Q||(Me=we?16893:33204),(65535&Me)<<16})(_.unixPermissions,ae)):(oe=20,z|=(function(Q){return 63&(Q||0)})(_.dosPermissions)),b=V.getUTCHours(),b<<=6,b|=V.getUTCMinutes(),b<<=5,b|=V.getUTCSeconds()/2,T=V.getUTCFullYear()-1980,T<<=4,T|=V.getUTCMonth()+1,T<<=5,T|=V.getUTCDate(),F&&(X=n(1,1)+n(u(I),4)+A,N+="up"+n(X.length,2)+X),k&&(H=n(1,1)+n(u($),4)+S,N+="uc"+n(H.length,2)+H);var ee="";return ee+=`
\0`,ee+=n(L,2),ee+=M.magic,ee+=n(b,2),ee+=n(T,2),ee+=n(te.crc32,4),ee+=n(te.compressedSize,4),ee+=n(te.uncompressedSize,4),ee+=n(I.length,2),ee+=n(N.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ee+I+N,dirRecord:d.CENTRAL_FILE_HEADER+n(oe,2)+ee+n($.length,2)+"\0\0\0\0"+n(z,4)+n(g,4)+I+N+$}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),u=i("../crc32"),d=i("../signature");function m(f,p,h,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=h,this.encodeFileName=g,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(m,l),m.prototype.push=function(f){var p=f.meta.percent||0,h=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:h?(p+100*(h-g-1))/h:100}}))},m.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var p=this.streamFiles&&!f.file.dir;if(p){var h=s(f,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(f){this.accumulate=!1;var p=this.streamFiles&&!f.file.dir,h=s(f,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),p)this.push({data:(function(g){return d.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var f=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var h=this.bytesWritten-f,g=(function(y,w,b,T,_){var M=r.transformTo("string",_(T));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(y,2)+n(y,2)+n(w,4)+n(b,4)+n(M.length,2)+M})(this.dirRecords.length,h,f,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(f){this._sources.push(f);var p=this;return f.on("data",function(h){p.processChunk(h)}),f.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),f.on("error",function(h){p.error(h)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(f){var p=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var h=0;h<p.length;h++)try{p[h].error(f)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,p=0;p<f.length;p++)f[p].lock()},a.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,o){var n=i("../compressions"),s=i("./ZipFileWorker");o.generateWorker=function(r,l,c){var u=new s(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{r.forEach(function(m,f){d++;var p=(function(w,b){var T=w||b,_=n[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(f.options.compression,l.compression),h=f.options.compressionOptions||l.compressionOptions||{},g=f.dir,y=f.date;f._compressWorker(p,h).withStreamInfo("file",{name:m,dir:g,date:y,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,r){return new n().loadAsync(s,r)},n.external=i("./external"),a.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,o){var n=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),u=i("./nodejsUtils");function d(m){return new s.Promise(function(f,p){var h=m.decompressed.getContentWorker().pipe(new c);h.on("error",function(g){p(g)}).on("end",function(){h.streamInfo.crc32!==m.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}a.exports=function(m,f){var p=this;return f=n.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),u.isNode&&u.isStream(m)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",m,!0,f.optimizedBinaryString,f.base64).then(function(h){var g=new l(f);return g.load(h),g}).then(function(h){var g=[s.Promise.resolve(h)],y=h.files;if(f.checkCRC32)for(var w=0;w<y.length;w++)g.push(d(y[w]));return s.Promise.all(g)}).then(function(h){for(var g=h.shift(),y=g.files,w=0;w<y.length;w++){var b=y[w],T=b.fileNameStr,_=n.resolve(b.fileNameStr);p.file(_,b.decompressed,{binary:!0,optimizedBinaryString:!0,date:b.date,dir:b.dir,comment:b.fileCommentStr.length?b.fileCommentStr:null,unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions,createFolders:f.createFolders}),b.dir||(p.file(_).unsafeOriginalName=T)}return g.zipComment.length&&(p.comment=g.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,o){var n=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}n.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,o){var n=i("readable-stream").Readable;function s(r,l,c){n.call(this,l),this._helper=r;var u=this;r.on("data",function(d,m){u.push(d)||u._helper.pause(),c&&c(m)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,o){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,a,o){function n(_,M,P){var I,A=r.getTypeOf(M),U=r.extend(P||{},u);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(_=y(_)),U.createFolders&&(I=g(_))&&w.call(this,I,!0);var $=A==="string"&&U.binary===!1&&U.base64===!1;P&&P.binary!==void 0||(U.binary=!$),(M instanceof d&&M.uncompressedSize===0||U.dir||!M||M.length===0)&&(U.base64=!1,U.binary=!0,M="",U.compression="STORE",A="string");var S=null;S=M instanceof d||M instanceof l?M:p.isNode&&p.isStream(M)?new h(_,M):r.prepareContent(_,M,U.binary,U.optimizedBinaryString,U.base64);var F=new m(_,S,U);this.files[_]=F}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),u=i("./defaults"),d=i("./compressedObject"),m=i("./zipObject"),f=i("./generate"),p=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),g=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var M=_.lastIndexOf("/");return 0<M?_.substring(0,M):""},y=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},w=function(_,M){return M=M!==void 0?M:u.createFolders,_=y(_),this.files[_]||n.call(this,_,null,{dir:!0,createFolders:M}),this.files[_]};function b(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var M,P,I;for(M in this.files)I=this.files[M],(P=M.slice(this.root.length,M.length))&&M.slice(0,this.root.length)===this.root&&_(P,I)},filter:function(_){var M=[];return this.forEach(function(P,I){_(P,I)&&M.push(I)}),M},file:function(_,M,P){if(arguments.length!==1)return _=this.root+_,n.call(this,_,M,P),this;if(b(_)){var I=_;return this.filter(function(U,$){return!$.dir&&I.test(U)})}var A=this.files[this.root+_];return A&&!A.dir?A:null},folder:function(_){if(!_)return this;if(b(_))return this.filter(function(A,U){return U.dir&&_.test(A)});var M=this.root+_,P=w.call(this,M),I=this.clone();return I.root=P.name,I},remove:function(_){_=this.root+_;var M=this.files[_];if(M||(_.slice(-1)!=="/"&&(_+="/"),M=this.files[_]),M&&!M.dir)delete this.files[_];else for(var P=this.filter(function(A,U){return U.name.slice(0,_.length)===_}),I=0;I<P.length;I++)delete this.files[P[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var M,P={};try{if((P=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");r.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var I=P.comment||this.comment||"";M=f.generateWorker(this,P,I)}catch(A){(M=new l("error")).error(A)}return new c(M,P.type||"string",P.mimeType)},generateAsync:function(_,M){return this.generateInternalStream(_).accumulate(M)},generateNodeStream:function(_,M){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(M)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,o){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),u=r.charCodeAt(2),d=r.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===d)return m-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),u=r.charCodeAt(2),d=r.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&d===m[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,o){var n=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return n.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,o){var n=i("./Uint8ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,o){var n=i("./ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,o){var n=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),u=i("./Uint8ArrayReader");a.exports=function(d){var m=n.getTypeOf(d);return n.checkSupport(m),m!=="string"||s.uint8array?m==="nodebuffer"?new c(d):s.uint8array?new u(n.transformTo("uint8array",d)):new r(n.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,o){var n=i("./GenericWorker"),s=i("../utils");function r(l){n.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,n),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,o){var n=i("./GenericWorker"),s=i("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,n),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=n.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}n.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,o){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=n},{}],29:[function(i,a,o){var n=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),u=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(p,h){return new u.Promise(function(g,y){var w=[],b=p._internalType,T=p._outputType,_=p._mimeType;p.on("data",function(M,P){w.push(M),h&&h(P)}).on("error",function(M){w=[],y(M)}).on("end",function(){try{var M=(function(P,I,A){switch(P){case"blob":return n.newBlob(n.transformTo("arraybuffer",I),A);case"base64":return l.encode(I);default:return n.transformTo(P,I)}})(T,(function(P,I){var A,U=0,$=null,S=0;for(A=0;A<I.length;A++)S+=I[A].length;switch(P){case"string":return I.join("");case"array":return Array.prototype.concat.apply([],I);case"uint8array":for($=new Uint8Array(S),A=0;A<I.length;A++)$.set(I[A],U),U+=I[A].length;return $;case"nodebuffer":return Buffer.concat(I);default:throw new Error("concat : unsupported type '"+P+"'")}})(b,w),_);g(M)}catch(P){y(P)}w=[]}).resume()})}function f(p,h,g){var y=h;switch(h){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=h,this._mimeType=g,n.checkSupport(y),this._worker=p.pipe(new s(y)),p.lock()}catch(w){this._worker=new r("error"),this._worker.error(w)}}f.prototype={accumulate:function(p){return m(this,p)},on:function(p,h){var g=this;return p==="data"?this._worker.on(p,function(y){h.call(g,y.data,y.meta)}):this._worker.on(p,function(){n.delay(h,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},p)}},a.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),o.blob=s.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!i("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,o){for(var n=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}o.utf8encode=function(f){return s.nodebuffer?r.newBufferFrom(f,"utf-8"):(function(p){var h,g,y,w,b,T=p.length,_=0;for(w=0;w<T;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<T&&(64512&(y=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),w++),_+=g<128?1:g<2048?2:g<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),w=b=0;b<_;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<T&&(64512&(y=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),w++),g<128?h[b++]=g:(g<2048?h[b++]=192|g>>>6:(g<65536?h[b++]=224|g>>>12:(h[b++]=240|g>>>18,h[b++]=128|g>>>12&63),h[b++]=128|g>>>6&63),h[b++]=128|63&g);return h})(f)},o.utf8decode=function(f){return s.nodebuffer?n.transformTo("nodebuffer",f).toString("utf-8"):(function(p){var h,g,y,w,b=p.length,T=new Array(2*b);for(h=g=0;h<b;)if((y=p[h++])<128)T[g++]=y;else if(4<(w=c[y]))T[g++]=65533,h+=w-1;else{for(y&=w===2?31:w===3?15:7;1<w&&h<b;)y=y<<6|63&p[h++],w--;1<w?T[g++]=65533:y<65536?T[g++]=y:(y-=65536,T[g++]=55296|y>>10&1023,T[g++]=56320|1023&y)}return T.length!==g&&(T.subarray?T=T.subarray(0,g):T.length=g),n.applyFromCharCode(T)})(f=n.transformTo(s.uint8array?"uint8array":"array",f))},n.inherits(d,l),d.prototype.processChunk=function(f){var p=n.transformTo(s.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=p;(p=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),p.set(h,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var g=(function(w,b){var T;for((b=b||w.length)>w.length&&(b=w.length),T=b-1;0<=T&&(192&w[T])==128;)T--;return T<0||T===0?b:T+c[w[T]]>b?T:b})(p),y=p;g!==p.length&&(s.uint8array?(y=p.subarray(0,g),this.leftOver=p.subarray(g,p.length)):(y=p.slice(0,g),this.leftOver=p.slice(g,p.length))),this.push({data:o.utf8decode(y),meta:f.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=d,n.inherits(m,l),m.prototype.processChunk=function(f){this.push({data:o.utf8encode(f.data),meta:f.meta})},o.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,o){var n=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(h){return h}function u(h,g){for(var y=0;y<h.length;++y)g[y]=255&h.charCodeAt(y);return g}i("setimmediate"),o.newBlob=function(h,g){o.checkSupport("blob");try{return new Blob([h],{type:g})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(h),y.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,g,y){var w=[],b=0,T=h.length;if(T<=y)return String.fromCharCode.apply(null,h);for(;b<T;)g==="array"||g==="nodebuffer"?w.push(String.fromCharCode.apply(null,h.slice(b,Math.min(b+y,T)))):w.push(String.fromCharCode.apply(null,h.subarray(b,Math.min(b+y,T)))),b+=y;return w.join("")},stringifyByChar:function(h){for(var g="",y=0;y<h.length;y++)g+=String.fromCharCode(h[y]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function m(h){var g=65536,y=o.getTypeOf(h),w=!0;if(y==="uint8array"?w=d.applyCanBeUsed.uint8array:y==="nodebuffer"&&(w=d.applyCanBeUsed.nodebuffer),w)for(;1<g;)try{return d.stringifyByChunk(h,y,g)}catch{g=Math.floor(g/2)}return d.stringifyByChar(h)}function f(h,g){for(var y=0;y<h.length;y++)g[y]=h[y];return g}o.applyFromCharCode=m;var p={};p.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return p.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,r.allocBuffer(h.length))}},p.array={string:m,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(h)}},p.arraybuffer={string:function(h){return m(new Uint8Array(h))},array:function(h){return f(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(new Uint8Array(h))}},p.uint8array={string:m,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return r.newBufferFrom(h)}},p.nodebuffer={string:m,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return p.nodebuffer.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:c},o.transformTo=function(h,g){if(g=g||"",!h)return g;o.checkSupport(h);var y=o.getTypeOf(g);return p[y][h](g)},o.resolve=function(h){for(var g=h.split("/"),y=[],w=0;w<g.length;w++){var b=g[w];b==="."||b===""&&w!==0&&w!==g.length-1||(b===".."?y.pop():y.push(b))}return y.join("/")},o.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":n.nodebuffer&&r.isBuffer(h)?"nodebuffer":n.uint8array&&h instanceof Uint8Array?"uint8array":n.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(h){if(!n[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(h){var g,y,w="";for(y=0;y<(h||"").length;y++)w+="\\x"+((g=h.charCodeAt(y))<16?"0":"")+g.toString(16).toUpperCase();return w},o.delay=function(h,g,y){setImmediate(function(){h.apply(y||null,g||[])})},o.inherits=function(h,g){function y(){}y.prototype=g.prototype,h.prototype=new y},o.extend=function(){var h,g,y={};for(h=0;h<arguments.length;h++)for(g in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],g)&&y[g]===void 0&&(y[g]=arguments[h][g]);return y},o.prepareContent=function(h,g,y,w,b){return l.Promise.resolve(g).then(function(T){return n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,M){var P=new FileReader;P.onload=function(I){_(I.target.result)},P.onerror=function(I){M(I.target.error)},P.readAsArrayBuffer(T)}):T}).then(function(T){var _=o.getTypeOf(T);return _?(_==="arraybuffer"?T=o.transformTo("uint8array",T):_==="string"&&(b?T=s.decode(T):y&&w!==!0&&(T=(function(M){return u(M,n.uint8array?new Uint8Array(M.length):new Array(M.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function u(d){this.files=[],this.loadOptions=d}u.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(m)+", expected "+s.pretty(d)+")")}},isSignature:function(d,m){var f=this.reader.index;this.reader.setIndex(d);var p=this.reader.readString(4)===m;return this.reader.setIndex(f),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",f=s.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,f,p=this.zip64EndOfCentralSize-44;0<p;)d=this.reader.readInt(2),m=this.reader.readInt(4),f=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var p=m-f;if(0<p)this.isSignature(m,r.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(d){this.reader=n(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),u=i("./compressions"),d=i("./support");function m(f,p){this.options=f,this.loadOptions=p}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var p,h;if(f.skip(22),this.fileNameLength=f.readInt(2),h=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(g){for(var y in u)if(Object.prototype.hasOwnProperty.call(u,y)&&u[y].magic===g)return u[y];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,p,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var p=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(p),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var p,h,g,y=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<y;)p=f.readInt(2),h=f.readInt(2),g=f.readData(h),this.extraFields[p]={id:p,length:h,value:g};f.setIndex(y)},handleUTF8:function(){var f=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var h=s.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var y=s.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var p=n(f.value);return p.readInt(1)!==1||l(this.fileName)!==p.readInt(4)?null:c.utf8decode(p.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var p=n(f.value);return p.readInt(1)!==1||l(this.fileComment)!==p.readInt(4)?null:c.utf8decode(p.readData(f.length-5))}return null}},a.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,o){function n(p,h,g){this.name=p,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=h,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),u=i("./stream/GenericWorker");n.prototype={internalStream:function(p){var h=null,g="string";try{if(!p)throw new Error("No output type specified.");var y=(g=p.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),h=this._decompressWorker();var w=!this._dataBinary;w&&!y&&(h=h.pipe(new l.Utf8EncodeWorker)),!w&&y&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(b){(h=new u("error")).error(b)}return new s(h,g,"")},async:function(p,h){return this.internalStream(p).accumulate(h)},nodeStream:function(p,h){return this.internalStream(p||"nodebuffer").toNodejsStream(h)},_compressWorker:function(p,h){if(this._data instanceof c&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,p,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<d.length;f++)n.prototype[d[f]]=m;a.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,o){(function(n){var s,r,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var c=0,u=new l(p),d=n.document.createTextNode("");u.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var h=n.document.createElement("script");h.onreadystatechange=function(){p(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},n.document.documentElement.appendChild(h)}:function(){setTimeout(p,0)};else{var m=new n.MessageChannel;m.port1.onmessage=p,s=function(){m.port2.postMessage(0)}}var f=[];function p(){var h,g;r=!0;for(var y=f.length;y;){for(g=f,f=[],h=-1;++h<y;)g[h]();y=f.length}r=!1}a.exports=function(h){f.push(h)!==1||r||s()}}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,o){var n=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function d(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,y!==s&&h(this,y)}function m(y,w,b){this.promise=y,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}function f(y,w,b){n(function(){var T;try{T=w(b)}catch(_){return r.reject(y,_)}T===y?r.reject(y,new TypeError("Cannot resolve promise with itself")):r.resolve(y,T)})}function p(y){var w=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof w=="function")return function(){w.apply(y,arguments)}}function h(y,w){var b=!1;function T(P){b||(b=!0,r.reject(y,P))}function _(P){b||(b=!0,r.resolve(y,P))}var M=g(function(){w(_,T)});M.status==="error"&&T(M.value)}function g(y,w){var b={};try{b.value=y(w),b.status="success"}catch(T){b.status="error",b.value=T}return b}(a.exports=d).prototype.finally=function(y){if(typeof y!="function")return this;var w=this.constructor;return this.then(function(b){return w.resolve(y()).then(function(){return b})},function(b){return w.resolve(y()).then(function(){throw b})})},d.prototype.catch=function(y){return this.then(null,y)},d.prototype.then=function(y,w){if(typeof y!="function"&&this.state===c||typeof w!="function"&&this.state===l)return this;var b=new this.constructor(s);return this.state!==u?f(b,this.state===c?y:w,this.outcome):this.queue.push(new m(b,y,w)),b},m.prototype.callFulfilled=function(y){r.resolve(this.promise,y)},m.prototype.otherCallFulfilled=function(y){f(this.promise,this.onFulfilled,y)},m.prototype.callRejected=function(y){r.reject(this.promise,y)},m.prototype.otherCallRejected=function(y){f(this.promise,this.onRejected,y)},r.resolve=function(y,w){var b=g(p,w);if(b.status==="error")return r.reject(y,b.value);var T=b.value;if(T)h(y,T);else{y.state=c,y.outcome=w;for(var _=-1,M=y.queue.length;++_<M;)y.queue[_].callFulfilled(w)}return y},r.reject=function(y,w){y.state=l,y.outcome=w;for(var b=-1,T=y.queue.length;++b<T;)y.queue[b].callRejected(w);return y},d.resolve=function(y){return y instanceof this?y:r.resolve(new this(s),y)},d.reject=function(y){var w=new this(s);return r.reject(w,y)},d.all=function(y){var w=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=y.length,T=!1;if(!b)return this.resolve([]);for(var _=new Array(b),M=0,P=-1,I=new this(s);++P<b;)A(y[P],P);return I;function A(U,$){w.resolve(U).then(function(S){_[$]=S,++M!==b||T||(T=!0,r.resolve(I,_))},function(S){T||(T=!0,r.reject(I,S))})}},d.race=function(y){var w=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=y.length,T=!1;if(!b)return this.resolve([]);for(var _=-1,M=new this(s);++_<b;)P=y[_],w.resolve(P).then(function(I){T||(T=!0,r.resolve(M,I))},function(I){T||(T=!0,r.reject(M,I))});var P;return M}},{immediate:36}],38:[function(i,a,o){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,o){var n=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),u=Object.prototype.toString,d=0,m=-1,f=0,p=8;function h(y){if(!(this instanceof h))return new h(y);this.options=s.assign({level:m,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},y||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var b=n.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(b!==d)throw new Error(l[b]);if(w.header&&n.deflateSetHeader(this.strm,w.header),w.dictionary){var T;if(T=typeof w.dictionary=="string"?r.string2buf(w.dictionary):u.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(b=n.deflateSetDictionary(this.strm,T))!==d)throw new Error(l[b]);this._dict_set=!0}}function g(y,w){var b=new h(w);if(b.push(y,!0),b.err)throw b.msg||l[b.err];return b.result}h.prototype.push=function(y,w){var b,T,_=this.strm,M=this.options.chunkSize;if(this.ended)return!1;T=w===~~w?w:w===!0?4:0,typeof y=="string"?_.input=r.string2buf(y):u.call(y)==="[object ArrayBuffer]"?_.input=new Uint8Array(y):_.input=y,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(M),_.next_out=0,_.avail_out=M),(b=n.deflate(_,T))!==1&&b!==d)return this.onEnd(b),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&b!==1);return T===4?(b=n.deflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===d):T!==2||(this.onEnd(d),!(_.avail_out=0))},h.prototype.onData=function(y){this.chunks.push(y)},h.prototype.onEnd=function(y){y===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},o.Deflate=h,o.deflate=g,o.deflateRaw=function(y,w){return(w=w||{}).raw=!0,g(y,w)},o.gzip=function(y,w){return(w=w||{}).gzip=!0,g(y,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,o){var n=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),u=i("./zlib/zstream"),d=i("./zlib/gzheader"),m=Object.prototype.toString;function f(h){if(!(this instanceof f))return new f(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||h&&h.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var y=n.inflateInit2(this.strm,g.windowBits);if(y!==l.Z_OK)throw new Error(c[y]);this.header=new d,n.inflateGetHeader(this.strm,this.header)}function p(h,g){var y=new f(g);if(y.push(h,!0),y.err)throw y.msg||c[y.err];return y.result}f.prototype.push=function(h,g){var y,w,b,T,_,M,P=this.strm,I=this.options.chunkSize,A=this.options.dictionary,U=!1;if(this.ended)return!1;w=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?P.input=r.binstring2buf(h):m.call(h)==="[object ArrayBuffer]"?P.input=new Uint8Array(h):P.input=h,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new s.Buf8(I),P.next_out=0,P.avail_out=I),(y=n.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&A&&(M=typeof A=="string"?r.string2buf(A):m.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,y=n.inflateSetDictionary(this.strm,M)),y===l.Z_BUF_ERROR&&U===!0&&(y=l.Z_OK,U=!1),y!==l.Z_STREAM_END&&y!==l.Z_OK)return this.onEnd(y),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&y!==l.Z_STREAM_END&&(P.avail_in!==0||w!==l.Z_FINISH&&w!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(b=r.utf8border(P.output,P.next_out),T=P.next_out-b,_=r.buf2string(P.output,b),P.next_out=T,P.avail_out=I-T,T&&s.arraySet(P.output,P.output,b,T,0),this.onData(_)):this.onData(s.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(U=!0)}while((0<P.avail_in||P.avail_out===0)&&y!==l.Z_STREAM_END);return y===l.Z_STREAM_END&&(w=l.Z_FINISH),w===l.Z_FINISH?(y=n.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===l.Z_OK):w!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},f.prototype.onData=function(h){this.chunks.push(h)},f.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},o.Inflate=f,o.inflate=p,o.inflateRaw=function(h,g){return(g=g||{}).raw=!0,p(h,g)},o.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var d in u)u.hasOwnProperty(d)&&(l[d]=u[d])}}return l},o.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,u,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+d),m);else for(var f=0;f<d;f++)l[m+f]=c[u+f]},flattenChunks:function(l){var c,u,d,m,f,p;for(c=d=0,u=l.length;c<u;c++)d+=l[c].length;for(p=new Uint8Array(d),c=m=0,u=l.length;c<u;c++)f=l[c],p.set(f,m),m+=f.length;return p}},r={arraySet:function(l,c,u,d,m){for(var f=0;f<d;f++)l[m+f]=c[u+f]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,s)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,r))},o.setTyped(n)},{}],42:[function(i,a,o){var n=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new n.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(d,m){if(m<65537&&(d.subarray&&r||!d.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(d,m));for(var f="",p=0;p<m;p++)f+=String.fromCharCode(d[p]);return f}l[254]=l[254]=1,o.string2buf=function(d){var m,f,p,h,g,y=d.length,w=0;for(h=0;h<y;h++)(64512&(f=d.charCodeAt(h)))==55296&&h+1<y&&(64512&(p=d.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(p-56320),h++),w+=f<128?1:f<2048?2:f<65536?3:4;for(m=new n.Buf8(w),h=g=0;g<w;h++)(64512&(f=d.charCodeAt(h)))==55296&&h+1<y&&(64512&(p=d.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(p-56320),h++),f<128?m[g++]=f:(f<2048?m[g++]=192|f>>>6:(f<65536?m[g++]=224|f>>>12:(m[g++]=240|f>>>18,m[g++]=128|f>>>12&63),m[g++]=128|f>>>6&63),m[g++]=128|63&f);return m},o.buf2binstring=function(d){return u(d,d.length)},o.binstring2buf=function(d){for(var m=new n.Buf8(d.length),f=0,p=m.length;f<p;f++)m[f]=d.charCodeAt(f);return m},o.buf2string=function(d,m){var f,p,h,g,y=m||d.length,w=new Array(2*y);for(f=p=0;f<y;)if((h=d[f++])<128)w[p++]=h;else if(4<(g=l[h]))w[p++]=65533,f+=g-1;else{for(h&=g===2?31:g===3?15:7;1<g&&f<y;)h=h<<6|63&d[f++],g--;1<g?w[p++]=65533:h<65536?w[p++]=h:(h-=65536,w[p++]=55296|h>>10&1023,w[p++]=56320|1023&h)}return u(w,p)},o.utf8border=function(d,m){var f;for((m=m||d.length)>d.length&&(m=d.length),f=m-1;0<=f&&(192&d[f])==128;)f--;return f<0||f===0?m:f+l[d[f]]>m?f:m}},{"./common":41}],43:[function(i,a,o){a.exports=function(n,s,r,l){for(var c=65535&n|0,u=n>>>16&65535|0,d=0;r!==0;){for(r-=d=2e3<r?2e3:r;u=u+(c=c+s[l++]|0)|0,--d;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(i,a,o){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,o){var n=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var u=n,d=c+l;s^=-1;for(var m=c;m<d;m++)s=s>>>8^u[255&(s^r[m])];return-1^s}},{}],46:[function(i,a,o){var n,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),u=i("./messages"),d=0,m=4,f=0,p=-2,h=-1,g=4,y=2,w=8,b=9,T=286,_=30,M=19,P=2*T+1,I=15,A=3,U=258,$=U+A+1,S=42,F=113,k=1,N=2,X=3,H=4;function ae(v,W){return v.msg=u[W],W}function V(v){return(v<<1)-(4<v?9:0)}function te(v){for(var W=v.length;0<=--W;)v[W]=0}function L(v){var W=v.state,q=W.pending;q>v.avail_out&&(q=v.avail_out),q!==0&&(s.arraySet(v.output,W.pending_buf,W.pending_out,q,v.next_out),v.next_out+=q,W.pending_out+=q,v.total_out+=q,v.avail_out-=q,W.pending-=q,W.pending===0&&(W.pending_out=0))}function z(v,W){r._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,W),v.block_start=v.strstart,L(v.strm)}function oe(v,W){v.pending_buf[v.pending++]=W}function ee(v,W){v.pending_buf[v.pending++]=W>>>8&255,v.pending_buf[v.pending++]=255&W}function Q(v,W){var q,x,C=v.max_chain_length,B=v.strstart,j=v.prev_length,G=v.nice_match,R=v.strstart>v.w_size-$?v.strstart-(v.w_size-$):0,Z=v.window,ie=v.w_mask,J=v.prev,re=v.strstart+U,be=Z[B+j-1],he=Z[B+j];v.prev_length>=v.good_match&&(C>>=2),G>v.lookahead&&(G=v.lookahead);do if(Z[(q=W)+j]===he&&Z[q+j-1]===be&&Z[q]===Z[B]&&Z[++q]===Z[B+1]){B+=2,q++;do;while(Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&B<re);if(x=U-(re-B),B=re-U,j<x){if(v.match_start=W,G<=(j=x))break;be=Z[B+j-1],he=Z[B+j]}}while((W=J[W&ie])>R&&--C!=0);return j<=v.lookahead?j:v.lookahead}function we(v){var W,q,x,C,B,j,G,R,Z,ie,J=v.w_size;do{if(C=v.window_size-v.lookahead-v.strstart,v.strstart>=J+(J-$)){for(s.arraySet(v.window,v.window,J,J,0),v.match_start-=J,v.strstart-=J,v.block_start-=J,W=q=v.hash_size;x=v.head[--W],v.head[W]=J<=x?x-J:0,--q;);for(W=q=J;x=v.prev[--W],v.prev[W]=J<=x?x-J:0,--q;);C+=J}if(v.strm.avail_in===0)break;if(j=v.strm,G=v.window,R=v.strstart+v.lookahead,Z=C,ie=void 0,ie=j.avail_in,Z<ie&&(ie=Z),q=ie===0?0:(j.avail_in-=ie,s.arraySet(G,j.input,j.next_in,ie,R),j.state.wrap===1?j.adler=l(j.adler,G,ie,R):j.state.wrap===2&&(j.adler=c(j.adler,G,ie,R)),j.next_in+=ie,j.total_in+=ie,ie),v.lookahead+=q,v.lookahead+v.insert>=A)for(B=v.strstart-v.insert,v.ins_h=v.window[B],v.ins_h=(v.ins_h<<v.hash_shift^v.window[B+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[B+A-1])&v.hash_mask,v.prev[B&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=B,B++,v.insert--,!(v.lookahead+v.insert<A)););}while(v.lookahead<$&&v.strm.avail_in!==0)}function Me(v,W){for(var q,x;;){if(v.lookahead<$){if(we(v),v.lookahead<$&&W===d)return k;if(v.lookahead===0)break}if(q=0,v.lookahead>=A&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+A-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),q!==0&&v.strstart-q<=v.w_size-$&&(v.match_length=Q(v,q)),v.match_length>=A)if(x=r._tr_tally(v,v.strstart-v.match_start,v.match_length-A),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=A){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+A-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else x=r._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(x&&(z(v,!1),v.strm.avail_out===0))return k}return v.insert=v.strstart<A-1?v.strstart:A-1,W===m?(z(v,!0),v.strm.avail_out===0?X:H):v.last_lit&&(z(v,!1),v.strm.avail_out===0)?k:N}function fe(v,W){for(var q,x,C;;){if(v.lookahead<$){if(we(v),v.lookahead<$&&W===d)return k;if(v.lookahead===0)break}if(q=0,v.lookahead>=A&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+A-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=A-1,q!==0&&v.prev_length<v.max_lazy_match&&v.strstart-q<=v.w_size-$&&(v.match_length=Q(v,q),v.match_length<=5&&(v.strategy===1||v.match_length===A&&4096<v.strstart-v.match_start)&&(v.match_length=A-1)),v.prev_length>=A&&v.match_length<=v.prev_length){for(C=v.strstart+v.lookahead-A,x=r._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-A),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=C&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+A-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=A-1,v.strstart++,x&&(z(v,!1),v.strm.avail_out===0))return k}else if(v.match_available){if((x=r._tr_tally(v,0,v.window[v.strstart-1]))&&z(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return k}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(x=r._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<A-1?v.strstart:A-1,W===m?(z(v,!0),v.strm.avail_out===0?X:H):v.last_lit&&(z(v,!1),v.strm.avail_out===0)?k:N}function me(v,W,q,x,C){this.good_length=v,this.max_lazy=W,this.nice_length=q,this.max_chain=x,this.func=C}function Pe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*P),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*M+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(I+1),this.heap=new s.Buf16(2*T+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(v){var W;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=y,(W=v.state).pending=0,W.pending_out=0,W.wrap<0&&(W.wrap=-W.wrap),W.status=W.wrap?S:F,v.adler=W.wrap===2?0:1,W.last_flush=d,r._tr_init(W),f):ae(v,p)}function Ke(v){var W=_e(v);return W===f&&(function(q){q.window_size=2*q.w_size,te(q.head),q.max_lazy_match=n[q.level].max_lazy,q.good_match=n[q.level].good_length,q.nice_match=n[q.level].nice_length,q.max_chain_length=n[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=A-1,q.match_available=0,q.ins_h=0})(v.state),W}function Ne(v,W,q,x,C,B){if(!v)return p;var j=1;if(W===h&&(W=6),x<0?(j=0,x=-x):15<x&&(j=2,x-=16),C<1||b<C||q!==w||x<8||15<x||W<0||9<W||B<0||g<B)return ae(v,p);x===8&&(x=9);var G=new Pe;return(v.state=G).strm=v,G.wrap=j,G.gzhead=null,G.w_bits=x,G.w_size=1<<G.w_bits,G.w_mask=G.w_size-1,G.hash_bits=C+7,G.hash_size=1<<G.hash_bits,G.hash_mask=G.hash_size-1,G.hash_shift=~~((G.hash_bits+A-1)/A),G.window=new s.Buf8(2*G.w_size),G.head=new s.Buf16(G.hash_size),G.prev=new s.Buf16(G.w_size),G.lit_bufsize=1<<C+6,G.pending_buf_size=4*G.lit_bufsize,G.pending_buf=new s.Buf8(G.pending_buf_size),G.d_buf=1*G.lit_bufsize,G.l_buf=3*G.lit_bufsize,G.level=W,G.strategy=B,G.method=q,Ke(v)}n=[new me(0,0,0,0,function(v,W){var q=65535;for(q>v.pending_buf_size-5&&(q=v.pending_buf_size-5);;){if(v.lookahead<=1){if(we(v),v.lookahead===0&&W===d)return k;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var x=v.block_start+q;if((v.strstart===0||v.strstart>=x)&&(v.lookahead=v.strstart-x,v.strstart=x,z(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-$&&(z(v,!1),v.strm.avail_out===0))return k}return v.insert=0,W===m?(z(v,!0),v.strm.avail_out===0?X:H):(v.strstart>v.block_start&&(z(v,!1),v.strm.avail_out),k)}),new me(4,4,8,4,Me),new me(4,5,16,8,Me),new me(4,6,32,32,Me),new me(4,4,16,16,fe),new me(8,16,32,32,fe),new me(8,16,128,128,fe),new me(8,32,128,256,fe),new me(32,128,258,1024,fe),new me(32,258,258,4096,fe)],o.deflateInit=function(v,W){return Ne(v,W,w,15,8,0)},o.deflateInit2=Ne,o.deflateReset=Ke,o.deflateResetKeep=_e,o.deflateSetHeader=function(v,W){return v&&v.state?v.state.wrap!==2?p:(v.state.gzhead=W,f):p},o.deflate=function(v,W){var q,x,C,B;if(!v||!v.state||5<W||W<0)return v?ae(v,p):p;if(x=v.state,!v.output||!v.input&&v.avail_in!==0||x.status===666&&W!==m)return ae(v,v.avail_out===0?-5:p);if(x.strm=v,q=x.last_flush,x.last_flush=W,x.status===S)if(x.wrap===2)v.adler=0,oe(x,31),oe(x,139),oe(x,8),x.gzhead?(oe(x,(x.gzhead.text?1:0)+(x.gzhead.hcrc?2:0)+(x.gzhead.extra?4:0)+(x.gzhead.name?8:0)+(x.gzhead.comment?16:0)),oe(x,255&x.gzhead.time),oe(x,x.gzhead.time>>8&255),oe(x,x.gzhead.time>>16&255),oe(x,x.gzhead.time>>24&255),oe(x,x.level===9?2:2<=x.strategy||x.level<2?4:0),oe(x,255&x.gzhead.os),x.gzhead.extra&&x.gzhead.extra.length&&(oe(x,255&x.gzhead.extra.length),oe(x,x.gzhead.extra.length>>8&255)),x.gzhead.hcrc&&(v.adler=c(v.adler,x.pending_buf,x.pending,0)),x.gzindex=0,x.status=69):(oe(x,0),oe(x,0),oe(x,0),oe(x,0),oe(x,0),oe(x,x.level===9?2:2<=x.strategy||x.level<2?4:0),oe(x,3),x.status=F);else{var j=w+(x.w_bits-8<<4)<<8;j|=(2<=x.strategy||x.level<2?0:x.level<6?1:x.level===6?2:3)<<6,x.strstart!==0&&(j|=32),j+=31-j%31,x.status=F,ee(x,j),x.strstart!==0&&(ee(x,v.adler>>>16),ee(x,65535&v.adler)),v.adler=1}if(x.status===69)if(x.gzhead.extra){for(C=x.pending;x.gzindex<(65535&x.gzhead.extra.length)&&(x.pending!==x.pending_buf_size||(x.gzhead.hcrc&&x.pending>C&&(v.adler=c(v.adler,x.pending_buf,x.pending-C,C)),L(v),C=x.pending,x.pending!==x.pending_buf_size));)oe(x,255&x.gzhead.extra[x.gzindex]),x.gzindex++;x.gzhead.hcrc&&x.pending>C&&(v.adler=c(v.adler,x.pending_buf,x.pending-C,C)),x.gzindex===x.gzhead.extra.length&&(x.gzindex=0,x.status=73)}else x.status=73;if(x.status===73)if(x.gzhead.name){C=x.pending;do{if(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>C&&(v.adler=c(v.adler,x.pending_buf,x.pending-C,C)),L(v),C=x.pending,x.pending===x.pending_buf_size)){B=1;break}B=x.gzindex<x.gzhead.name.length?255&x.gzhead.name.charCodeAt(x.gzindex++):0,oe(x,B)}while(B!==0);x.gzhead.hcrc&&x.pending>C&&(v.adler=c(v.adler,x.pending_buf,x.pending-C,C)),B===0&&(x.gzindex=0,x.status=91)}else x.status=91;if(x.status===91)if(x.gzhead.comment){C=x.pending;do{if(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>C&&(v.adler=c(v.adler,x.pending_buf,x.pending-C,C)),L(v),C=x.pending,x.pending===x.pending_buf_size)){B=1;break}B=x.gzindex<x.gzhead.comment.length?255&x.gzhead.comment.charCodeAt(x.gzindex++):0,oe(x,B)}while(B!==0);x.gzhead.hcrc&&x.pending>C&&(v.adler=c(v.adler,x.pending_buf,x.pending-C,C)),B===0&&(x.status=103)}else x.status=103;if(x.status===103&&(x.gzhead.hcrc?(x.pending+2>x.pending_buf_size&&L(v),x.pending+2<=x.pending_buf_size&&(oe(x,255&v.adler),oe(x,v.adler>>8&255),v.adler=0,x.status=F)):x.status=F),x.pending!==0){if(L(v),v.avail_out===0)return x.last_flush=-1,f}else if(v.avail_in===0&&V(W)<=V(q)&&W!==m)return ae(v,-5);if(x.status===666&&v.avail_in!==0)return ae(v,-5);if(v.avail_in!==0||x.lookahead!==0||W!==d&&x.status!==666){var G=x.strategy===2?(function(R,Z){for(var ie;;){if(R.lookahead===0&&(we(R),R.lookahead===0)){if(Z===d)return k;break}if(R.match_length=0,ie=r._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,ie&&(z(R,!1),R.strm.avail_out===0))return k}return R.insert=0,Z===m?(z(R,!0),R.strm.avail_out===0?X:H):R.last_lit&&(z(R,!1),R.strm.avail_out===0)?k:N})(x,W):x.strategy===3?(function(R,Z){for(var ie,J,re,be,he=R.window;;){if(R.lookahead<=U){if(we(R),R.lookahead<=U&&Z===d)return k;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=A&&0<R.strstart&&(J=he[re=R.strstart-1])===he[++re]&&J===he[++re]&&J===he[++re]){be=R.strstart+U;do;while(J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&J===he[++re]&&re<be);R.match_length=U-(be-re),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=A?(ie=r._tr_tally(R,1,R.match_length-A),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(ie=r._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),ie&&(z(R,!1),R.strm.avail_out===0))return k}return R.insert=0,Z===m?(z(R,!0),R.strm.avail_out===0?X:H):R.last_lit&&(z(R,!1),R.strm.avail_out===0)?k:N})(x,W):n[x.level].func(x,W);if(G!==X&&G!==H||(x.status=666),G===k||G===X)return v.avail_out===0&&(x.last_flush=-1),f;if(G===N&&(W===1?r._tr_align(x):W!==5&&(r._tr_stored_block(x,0,0,!1),W===3&&(te(x.head),x.lookahead===0&&(x.strstart=0,x.block_start=0,x.insert=0))),L(v),v.avail_out===0))return x.last_flush=-1,f}return W!==m?f:x.wrap<=0?1:(x.wrap===2?(oe(x,255&v.adler),oe(x,v.adler>>8&255),oe(x,v.adler>>16&255),oe(x,v.adler>>24&255),oe(x,255&v.total_in),oe(x,v.total_in>>8&255),oe(x,v.total_in>>16&255),oe(x,v.total_in>>24&255)):(ee(x,v.adler>>>16),ee(x,65535&v.adler)),L(v),0<x.wrap&&(x.wrap=-x.wrap),x.pending!==0?f:1)},o.deflateEnd=function(v){var W;return v&&v.state?(W=v.state.status)!==S&&W!==69&&W!==73&&W!==91&&W!==103&&W!==F&&W!==666?ae(v,p):(v.state=null,W===F?ae(v,-3):f):p},o.deflateSetDictionary=function(v,W){var q,x,C,B,j,G,R,Z,ie=W.length;if(!v||!v.state||(B=(q=v.state).wrap)===2||B===1&&q.status!==S||q.lookahead)return p;for(B===1&&(v.adler=l(v.adler,W,ie,0)),q.wrap=0,ie>=q.w_size&&(B===0&&(te(q.head),q.strstart=0,q.block_start=0,q.insert=0),Z=new s.Buf8(q.w_size),s.arraySet(Z,W,ie-q.w_size,q.w_size,0),W=Z,ie=q.w_size),j=v.avail_in,G=v.next_in,R=v.input,v.avail_in=ie,v.next_in=0,v.input=W,we(q);q.lookahead>=A;){for(x=q.strstart,C=q.lookahead-(A-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[x+A-1])&q.hash_mask,q.prev[x&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=x,x++,--C;);q.strstart=x,q.lookahead=A-1,we(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=A-1,q.match_available=0,v.next_in=G,v.input=R,v.avail_in=j,q.wrap=B,f},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,o){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,o){a.exports=function(n,s){var r,l,c,u,d,m,f,p,h,g,y,w,b,T,_,M,P,I,A,U,$,S,F,k,N;r=n.state,l=n.next_in,k=n.input,c=l+(n.avail_in-5),u=n.next_out,N=n.output,d=u-(s-n.avail_out),m=u+(n.avail_out-257),f=r.dmax,p=r.wsize,h=r.whave,g=r.wnext,y=r.window,w=r.hold,b=r.bits,T=r.lencode,_=r.distcode,M=(1<<r.lenbits)-1,P=(1<<r.distbits)-1;e:do{b<15&&(w+=k[l++]<<b,b+=8,w+=k[l++]<<b,b+=8),I=T[w&M];t:for(;;){if(w>>>=A=I>>>24,b-=A,(A=I>>>16&255)===0)N[u++]=65535&I;else{if(!(16&A)){if((64&A)==0){I=T[(65535&I)+(w&(1<<A)-1)];continue t}if(32&A){r.mode=12;break e}n.msg="invalid literal/length code",r.mode=30;break e}U=65535&I,(A&=15)&&(b<A&&(w+=k[l++]<<b,b+=8),U+=w&(1<<A)-1,w>>>=A,b-=A),b<15&&(w+=k[l++]<<b,b+=8,w+=k[l++]<<b,b+=8),I=_[w&P];i:for(;;){if(w>>>=A=I>>>24,b-=A,!(16&(A=I>>>16&255))){if((64&A)==0){I=_[(65535&I)+(w&(1<<A)-1)];continue i}n.msg="invalid distance code",r.mode=30;break e}if($=65535&I,b<(A&=15)&&(w+=k[l++]<<b,(b+=8)<A&&(w+=k[l++]<<b,b+=8)),f<($+=w&(1<<A)-1)){n.msg="invalid distance too far back",r.mode=30;break e}if(w>>>=A,b-=A,(A=u-d)<$){if(h<(A=$-A)&&r.sane){n.msg="invalid distance too far back",r.mode=30;break e}if(F=y,(S=0)===g){if(S+=p-A,A<U){for(U-=A;N[u++]=y[S++],--A;);S=u-$,F=N}}else if(g<A){if(S+=p+g-A,(A-=g)<U){for(U-=A;N[u++]=y[S++],--A;);if(S=0,g<U){for(U-=A=g;N[u++]=y[S++],--A;);S=u-$,F=N}}}else if(S+=g-A,A<U){for(U-=A;N[u++]=y[S++],--A;);S=u-$,F=N}for(;2<U;)N[u++]=F[S++],N[u++]=F[S++],N[u++]=F[S++],U-=3;U&&(N[u++]=F[S++],1<U&&(N[u++]=F[S++]))}else{for(S=u-$;N[u++]=N[S++],N[u++]=N[S++],N[u++]=N[S++],2<(U-=3););U&&(N[u++]=N[S++],1<U&&(N[u++]=N[S++]))}break}}break}}while(l<c&&u<m);l-=U=b>>3,w&=(1<<(b-=U<<3))-1,n.next_in=l,n.next_out=u,n.avail_in=l<c?c-l+5:5-(l-c),n.avail_out=u<m?m-u+257:257-(u-m),r.hold=w,r.bits=b}},{}],49:[function(i,a,o){var n=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),u=1,d=2,m=0,f=-2,p=1,h=852,g=592;function y(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(S){var F;return S&&S.state?(F=S.state,S.total_in=S.total_out=F.total=0,S.msg="",F.wrap&&(S.adler=1&F.wrap),F.mode=p,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new n.Buf32(h),F.distcode=F.distdyn=new n.Buf32(g),F.sane=1,F.back=-1,m):f}function T(S){var F;return S&&S.state?((F=S.state).wsize=0,F.whave=0,F.wnext=0,b(S)):f}function _(S,F){var k,N;return S&&S.state?(N=S.state,F<0?(k=0,F=-F):(k=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?f:(N.window!==null&&N.wbits!==F&&(N.window=null),N.wrap=k,N.wbits=F,T(S))):f}function M(S,F){var k,N;return S?(N=new w,(S.state=N).window=null,(k=_(S,F))!==m&&(S.state=null),k):f}var P,I,A=!0;function U(S){if(A){var F;for(P=new n.Buf32(512),I=new n.Buf32(32),F=0;F<144;)S.lens[F++]=8;for(;F<256;)S.lens[F++]=9;for(;F<280;)S.lens[F++]=7;for(;F<288;)S.lens[F++]=8;for(c(u,S.lens,0,288,P,0,S.work,{bits:9}),F=0;F<32;)S.lens[F++]=5;c(d,S.lens,0,32,I,0,S.work,{bits:5}),A=!1}S.lencode=P,S.lenbits=9,S.distcode=I,S.distbits=5}function $(S,F,k,N){var X,H=S.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new n.Buf8(H.wsize)),N>=H.wsize?(n.arraySet(H.window,F,k-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(N<(X=H.wsize-H.wnext)&&(X=N),n.arraySet(H.window,F,k-N,X,H.wnext),(N-=X)?(n.arraySet(H.window,F,k-N,N,0),H.wnext=N,H.whave=H.wsize):(H.wnext+=X,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=X))),0}o.inflateReset=T,o.inflateReset2=_,o.inflateResetKeep=b,o.inflateInit=function(S){return M(S,15)},o.inflateInit2=M,o.inflate=function(S,F){var k,N,X,H,ae,V,te,L,z,oe,ee,Q,we,Me,fe,me,Pe,_e,Ke,Ne,v,W,q,x,C=0,B=new n.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return f;(k=S.state).mode===12&&(k.mode=13),ae=S.next_out,X=S.output,te=S.avail_out,H=S.next_in,N=S.input,V=S.avail_in,L=k.hold,z=k.bits,oe=V,ee=te,W=m;e:for(;;)switch(k.mode){case p:if(k.wrap===0){k.mode=13;break}for(;z<16;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(2&k.wrap&&L===35615){B[k.check=0]=255&L,B[1]=L>>>8&255,k.check=r(k.check,B,2,0),z=L=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&L)<<8)+(L>>8))%31){S.msg="incorrect header check",k.mode=30;break}if((15&L)!=8){S.msg="unknown compression method",k.mode=30;break}if(z-=4,v=8+(15&(L>>>=4)),k.wbits===0)k.wbits=v;else if(v>k.wbits){S.msg="invalid window size",k.mode=30;break}k.dmax=1<<v,S.adler=k.check=1,k.mode=512&L?10:12,z=L=0;break;case 2:for(;z<16;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(k.flags=L,(255&k.flags)!=8){S.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){S.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=L>>8&1),512&k.flags&&(B[0]=255&L,B[1]=L>>>8&255,k.check=r(k.check,B,2,0)),z=L=0,k.mode=3;case 3:for(;z<32;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}k.head&&(k.head.time=L),512&k.flags&&(B[0]=255&L,B[1]=L>>>8&255,B[2]=L>>>16&255,B[3]=L>>>24&255,k.check=r(k.check,B,4,0)),z=L=0,k.mode=4;case 4:for(;z<16;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}k.head&&(k.head.xflags=255&L,k.head.os=L>>8),512&k.flags&&(B[0]=255&L,B[1]=L>>>8&255,k.check=r(k.check,B,2,0)),z=L=0,k.mode=5;case 5:if(1024&k.flags){for(;z<16;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}k.length=L,k.head&&(k.head.extra_len=L),512&k.flags&&(B[0]=255&L,B[1]=L>>>8&255,k.check=r(k.check,B,2,0)),z=L=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(V<(Q=k.length)&&(Q=V),Q&&(k.head&&(v=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),n.arraySet(k.head.extra,N,H,Q,v)),512&k.flags&&(k.check=r(k.check,N,Q,H)),V-=Q,H+=Q,k.length-=Q),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(V===0)break e;for(Q=0;v=N[H+Q++],k.head&&v&&k.length<65536&&(k.head.name+=String.fromCharCode(v)),v&&Q<V;);if(512&k.flags&&(k.check=r(k.check,N,Q,H)),V-=Q,H+=Q,v)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(V===0)break e;for(Q=0;v=N[H+Q++],k.head&&v&&k.length<65536&&(k.head.comment+=String.fromCharCode(v)),v&&Q<V;);if(512&k.flags&&(k.check=r(k.check,N,Q,H)),V-=Q,H+=Q,v)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;z<16;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(L!==(65535&k.check)){S.msg="header crc mismatch",k.mode=30;break}z=L=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),S.adler=k.check=0,k.mode=12;break;case 10:for(;z<32;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}S.adler=k.check=y(L),z=L=0,k.mode=11;case 11:if(k.havedict===0)return S.next_out=ae,S.avail_out=te,S.next_in=H,S.avail_in=V,k.hold=L,k.bits=z,2;S.adler=k.check=1,k.mode=12;case 12:if(F===5||F===6)break e;case 13:if(k.last){L>>>=7&z,z-=7&z,k.mode=27;break}for(;z<3;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}switch(k.last=1&L,z-=1,3&(L>>>=1)){case 0:k.mode=14;break;case 1:if(U(k),k.mode=20,F!==6)break;L>>>=2,z-=2;break e;case 2:k.mode=17;break;case 3:S.msg="invalid block type",k.mode=30}L>>>=2,z-=2;break;case 14:for(L>>>=7&z,z-=7&z;z<32;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if((65535&L)!=(L>>>16^65535)){S.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&L,z=L=0,k.mode=15,F===6)break e;case 15:k.mode=16;case 16:if(Q=k.length){if(V<Q&&(Q=V),te<Q&&(Q=te),Q===0)break e;n.arraySet(X,N,H,Q,ae),V-=Q,H+=Q,te-=Q,ae+=Q,k.length-=Q;break}k.mode=12;break;case 17:for(;z<14;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(k.nlen=257+(31&L),L>>>=5,z-=5,k.ndist=1+(31&L),L>>>=5,z-=5,k.ncode=4+(15&L),L>>>=4,z-=4,286<k.nlen||30<k.ndist){S.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;z<3;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}k.lens[j[k.have++]]=7&L,L>>>=3,z-=3}for(;k.have<19;)k.lens[j[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,q={bits:k.lenbits},W=c(0,k.lens,0,19,k.lencode,0,k.work,q),k.lenbits=q.bits,W){S.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;me=(C=k.lencode[L&(1<<k.lenbits)-1])>>>16&255,Pe=65535&C,!((fe=C>>>24)<=z);){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(Pe<16)L>>>=fe,z-=fe,k.lens[k.have++]=Pe;else{if(Pe===16){for(x=fe+2;z<x;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(L>>>=fe,z-=fe,k.have===0){S.msg="invalid bit length repeat",k.mode=30;break}v=k.lens[k.have-1],Q=3+(3&L),L>>>=2,z-=2}else if(Pe===17){for(x=fe+3;z<x;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}z-=fe,v=0,Q=3+(7&(L>>>=fe)),L>>>=3,z-=3}else{for(x=fe+7;z<x;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}z-=fe,v=0,Q=11+(127&(L>>>=fe)),L>>>=7,z-=7}if(k.have+Q>k.nlen+k.ndist){S.msg="invalid bit length repeat",k.mode=30;break}for(;Q--;)k.lens[k.have++]=v}}if(k.mode===30)break;if(k.lens[256]===0){S.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,q={bits:k.lenbits},W=c(u,k.lens,0,k.nlen,k.lencode,0,k.work,q),k.lenbits=q.bits,W){S.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,q={bits:k.distbits},W=c(d,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,q),k.distbits=q.bits,W){S.msg="invalid distances set",k.mode=30;break}if(k.mode=20,F===6)break e;case 20:k.mode=21;case 21:if(6<=V&&258<=te){S.next_out=ae,S.avail_out=te,S.next_in=H,S.avail_in=V,k.hold=L,k.bits=z,l(S,ee),ae=S.next_out,X=S.output,te=S.avail_out,H=S.next_in,N=S.input,V=S.avail_in,L=k.hold,z=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;me=(C=k.lencode[L&(1<<k.lenbits)-1])>>>16&255,Pe=65535&C,!((fe=C>>>24)<=z);){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(me&&(240&me)==0){for(_e=fe,Ke=me,Ne=Pe;me=(C=k.lencode[Ne+((L&(1<<_e+Ke)-1)>>_e)])>>>16&255,Pe=65535&C,!(_e+(fe=C>>>24)<=z);){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}L>>>=_e,z-=_e,k.back+=_e}if(L>>>=fe,z-=fe,k.back+=fe,k.length=Pe,me===0){k.mode=26;break}if(32&me){k.back=-1,k.mode=12;break}if(64&me){S.msg="invalid literal/length code",k.mode=30;break}k.extra=15&me,k.mode=22;case 22:if(k.extra){for(x=k.extra;z<x;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}k.length+=L&(1<<k.extra)-1,L>>>=k.extra,z-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;me=(C=k.distcode[L&(1<<k.distbits)-1])>>>16&255,Pe=65535&C,!((fe=C>>>24)<=z);){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if((240&me)==0){for(_e=fe,Ke=me,Ne=Pe;me=(C=k.distcode[Ne+((L&(1<<_e+Ke)-1)>>_e)])>>>16&255,Pe=65535&C,!(_e+(fe=C>>>24)<=z);){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}L>>>=_e,z-=_e,k.back+=_e}if(L>>>=fe,z-=fe,k.back+=fe,64&me){S.msg="invalid distance code",k.mode=30;break}k.offset=Pe,k.extra=15&me,k.mode=24;case 24:if(k.extra){for(x=k.extra;z<x;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}k.offset+=L&(1<<k.extra)-1,L>>>=k.extra,z-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){S.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(te===0)break e;if(Q=ee-te,k.offset>Q){if((Q=k.offset-Q)>k.whave&&k.sane){S.msg="invalid distance too far back",k.mode=30;break}we=Q>k.wnext?(Q-=k.wnext,k.wsize-Q):k.wnext-Q,Q>k.length&&(Q=k.length),Me=k.window}else Me=X,we=ae-k.offset,Q=k.length;for(te<Q&&(Q=te),te-=Q,k.length-=Q;X[ae++]=Me[we++],--Q;);k.length===0&&(k.mode=21);break;case 26:if(te===0)break e;X[ae++]=k.length,te--,k.mode=21;break;case 27:if(k.wrap){for(;z<32;){if(V===0)break e;V--,L|=N[H++]<<z,z+=8}if(ee-=te,S.total_out+=ee,k.total+=ee,ee&&(S.adler=k.check=k.flags?r(k.check,X,ee,ae-ee):s(k.check,X,ee,ae-ee)),ee=te,(k.flags?L:y(L))!==k.check){S.msg="incorrect data check",k.mode=30;break}z=L=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;z<32;){if(V===0)break e;V--,L+=N[H++]<<z,z+=8}if(L!==(4294967295&k.total)){S.msg="incorrect length check",k.mode=30;break}z=L=0}k.mode=29;case 29:W=1;break e;case 30:W=-3;break e;case 31:return-4;case 32:default:return f}return S.next_out=ae,S.avail_out=te,S.next_in=H,S.avail_in=V,k.hold=L,k.bits=z,(k.wsize||ee!==S.avail_out&&k.mode<30&&(k.mode<27||F!==4))&&$(S,S.output,S.next_out,ee-S.avail_out)?(k.mode=31,-4):(oe-=S.avail_in,ee-=S.avail_out,S.total_in+=oe,S.total_out+=ee,k.total+=ee,k.wrap&&ee&&(S.adler=k.check=k.flags?r(k.check,X,ee,S.next_out-ee):s(k.check,X,ee,S.next_out-ee)),S.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(oe==0&&ee===0||F===4)&&W===m&&(W=-5),W)},o.inflateEnd=function(S){if(!S||!S.state)return f;var F=S.state;return F.window&&(F.window=null),S.state=null,m},o.inflateGetHeader=function(S,F){var k;return S&&S.state?(2&(k=S.state).wrap)==0?f:((k.head=F).done=!1,m):f},o.inflateSetDictionary=function(S,F){var k,N=F.length;return S&&S.state?(k=S.state).wrap!==0&&k.mode!==11?f:k.mode===11&&s(1,F,N,0)!==k.check?-3:$(S,F,N,N)?(k.mode=31,-4):(k.havedict=1,m):f},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,o){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(u,d,m,f,p,h,g,y){var w,b,T,_,M,P,I,A,U,$=y.bits,S=0,F=0,k=0,N=0,X=0,H=0,ae=0,V=0,te=0,L=0,z=null,oe=0,ee=new n.Buf16(16),Q=new n.Buf16(16),we=null,Me=0;for(S=0;S<=15;S++)ee[S]=0;for(F=0;F<f;F++)ee[d[m+F]]++;for(X=$,N=15;1<=N&&ee[N]===0;N--);if(N<X&&(X=N),N===0)return p[h++]=20971520,p[h++]=20971520,y.bits=1,0;for(k=1;k<N&&ee[k]===0;k++);for(X<k&&(X=k),S=V=1;S<=15;S++)if(V<<=1,(V-=ee[S])<0)return-1;if(0<V&&(u===0||N!==1))return-1;for(Q[1]=0,S=1;S<15;S++)Q[S+1]=Q[S]+ee[S];for(F=0;F<f;F++)d[m+F]!==0&&(g[Q[d[m+F]]++]=F);if(P=u===0?(z=we=g,19):u===1?(z=s,oe-=257,we=r,Me-=257,256):(z=l,we=c,-1),S=k,M=h,ae=F=L=0,T=-1,_=(te=1<<(H=X))-1,u===1&&852<te||u===2&&592<te)return 1;for(;;){for(I=S-ae,U=g[F]<P?(A=0,g[F]):g[F]>P?(A=we[Me+g[F]],z[oe+g[F]]):(A=96,0),w=1<<S-ae,k=b=1<<H;p[M+(L>>ae)+(b-=w)]=I<<24|A<<16|U|0,b!==0;);for(w=1<<S-1;L&w;)w>>=1;if(w!==0?(L&=w-1,L+=w):L=0,F++,--ee[S]==0){if(S===N)break;S=d[m+g[F]]}if(X<S&&(L&_)!==T){for(ae===0&&(ae=X),M+=k,V=1<<(H=S-ae);H+ae<N&&!((V-=ee[H+ae])<=0);)H++,V<<=1;if(te+=1<<H,u===1&&852<te||u===2&&592<te)return 1;p[T=L&_]=X<<24|H<<16|M-h|0}}return L!==0&&(p[M+L]=S-ae<<24|64<<16|0),y.bits=X,0}},{"../utils/common":41}],51:[function(i,a,o){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,o){var n=i("../utils/common"),s=0,r=1;function l(C){for(var B=C.length;0<=--B;)C[B]=0}var c=0,u=29,d=256,m=d+1+u,f=30,p=19,h=2*m+1,g=15,y=16,w=7,b=256,T=16,_=17,M=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],I=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$=new Array(2*(m+2));l($);var S=new Array(2*f);l(S);var F=new Array(512);l(F);var k=new Array(256);l(k);var N=new Array(u);l(N);var X,H,ae,V=new Array(f);function te(C,B,j,G,R){this.static_tree=C,this.extra_bits=B,this.extra_base=j,this.elems=G,this.max_length=R,this.has_stree=C&&C.length}function L(C,B){this.dyn_tree=C,this.max_code=0,this.stat_desc=B}function z(C){return C<256?F[C]:F[256+(C>>>7)]}function oe(C,B){C.pending_buf[C.pending++]=255&B,C.pending_buf[C.pending++]=B>>>8&255}function ee(C,B,j){C.bi_valid>y-j?(C.bi_buf|=B<<C.bi_valid&65535,oe(C,C.bi_buf),C.bi_buf=B>>y-C.bi_valid,C.bi_valid+=j-y):(C.bi_buf|=B<<C.bi_valid&65535,C.bi_valid+=j)}function Q(C,B,j){ee(C,j[2*B],j[2*B+1])}function we(C,B){for(var j=0;j|=1&C,C>>>=1,j<<=1,0<--B;);return j>>>1}function Me(C,B,j){var G,R,Z=new Array(g+1),ie=0;for(G=1;G<=g;G++)Z[G]=ie=ie+j[G-1]<<1;for(R=0;R<=B;R++){var J=C[2*R+1];J!==0&&(C[2*R]=we(Z[J]++,J))}}function fe(C){var B;for(B=0;B<m;B++)C.dyn_ltree[2*B]=0;for(B=0;B<f;B++)C.dyn_dtree[2*B]=0;for(B=0;B<p;B++)C.bl_tree[2*B]=0;C.dyn_ltree[2*b]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function me(C){8<C.bi_valid?oe(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function Pe(C,B,j,G){var R=2*B,Z=2*j;return C[R]<C[Z]||C[R]===C[Z]&&G[B]<=G[j]}function _e(C,B,j){for(var G=C.heap[j],R=j<<1;R<=C.heap_len&&(R<C.heap_len&&Pe(B,C.heap[R+1],C.heap[R],C.depth)&&R++,!Pe(B,G,C.heap[R],C.depth));)C.heap[j]=C.heap[R],j=R,R<<=1;C.heap[j]=G}function Ke(C,B,j){var G,R,Z,ie,J=0;if(C.last_lit!==0)for(;G=C.pending_buf[C.d_buf+2*J]<<8|C.pending_buf[C.d_buf+2*J+1],R=C.pending_buf[C.l_buf+J],J++,G===0?Q(C,R,B):(Q(C,(Z=k[R])+d+1,B),(ie=P[Z])!==0&&ee(C,R-=N[Z],ie),Q(C,Z=z(--G),j),(ie=I[Z])!==0&&ee(C,G-=V[Z],ie)),J<C.last_lit;);Q(C,b,B)}function Ne(C,B){var j,G,R,Z=B.dyn_tree,ie=B.stat_desc.static_tree,J=B.stat_desc.has_stree,re=B.stat_desc.elems,be=-1;for(C.heap_len=0,C.heap_max=h,j=0;j<re;j++)Z[2*j]!==0?(C.heap[++C.heap_len]=be=j,C.depth[j]=0):Z[2*j+1]=0;for(;C.heap_len<2;)Z[2*(R=C.heap[++C.heap_len]=be<2?++be:0)]=1,C.depth[R]=0,C.opt_len--,J&&(C.static_len-=ie[2*R+1]);for(B.max_code=be,j=C.heap_len>>1;1<=j;j--)_e(C,Z,j);for(R=re;j=C.heap[1],C.heap[1]=C.heap[C.heap_len--],_e(C,Z,1),G=C.heap[1],C.heap[--C.heap_max]=j,C.heap[--C.heap_max]=G,Z[2*R]=Z[2*j]+Z[2*G],C.depth[R]=(C.depth[j]>=C.depth[G]?C.depth[j]:C.depth[G])+1,Z[2*j+1]=Z[2*G+1]=R,C.heap[1]=R++,_e(C,Z,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(he,Xe){var Fi,dt,Ri,xe,Ga,Yo,kt=Xe.dyn_tree,Hr=Xe.max_code,zg=Xe.stat_desc.static_tree,Og=Xe.stat_desc.has_stree,Hg=Xe.stat_desc.extra_bits,Lr=Xe.stat_desc.extra_base,zi=Xe.stat_desc.max_length,Ka=0;for(xe=0;xe<=g;xe++)he.bl_count[xe]=0;for(kt[2*he.heap[he.heap_max]+1]=0,Fi=he.heap_max+1;Fi<h;Fi++)zi<(xe=kt[2*kt[2*(dt=he.heap[Fi])+1]+1]+1)&&(xe=zi,Ka++),kt[2*dt+1]=xe,Hr<dt||(he.bl_count[xe]++,Ga=0,Lr<=dt&&(Ga=Hg[dt-Lr]),Yo=kt[2*dt],he.opt_len+=Yo*(xe+Ga),Og&&(he.static_len+=Yo*(zg[2*dt+1]+Ga)));if(Ka!==0){do{for(xe=zi-1;he.bl_count[xe]===0;)xe--;he.bl_count[xe]--,he.bl_count[xe+1]+=2,he.bl_count[zi]--,Ka-=2}while(0<Ka);for(xe=zi;xe!==0;xe--)for(dt=he.bl_count[xe];dt!==0;)Hr<(Ri=he.heap[--Fi])||(kt[2*Ri+1]!==xe&&(he.opt_len+=(xe-kt[2*Ri+1])*kt[2*Ri],kt[2*Ri+1]=xe),dt--)}})(C,B),Me(Z,be,C.bl_count)}function v(C,B,j){var G,R,Z=-1,ie=B[1],J=0,re=7,be=4;for(ie===0&&(re=138,be=3),B[2*(j+1)+1]=65535,G=0;G<=j;G++)R=ie,ie=B[2*(G+1)+1],++J<re&&R===ie||(J<be?C.bl_tree[2*R]+=J:R!==0?(R!==Z&&C.bl_tree[2*R]++,C.bl_tree[2*T]++):J<=10?C.bl_tree[2*_]++:C.bl_tree[2*M]++,Z=R,be=(J=0)===ie?(re=138,3):R===ie?(re=6,3):(re=7,4))}function W(C,B,j){var G,R,Z=-1,ie=B[1],J=0,re=7,be=4;for(ie===0&&(re=138,be=3),G=0;G<=j;G++)if(R=ie,ie=B[2*(G+1)+1],!(++J<re&&R===ie)){if(J<be)for(;Q(C,R,C.bl_tree),--J!=0;);else R!==0?(R!==Z&&(Q(C,R,C.bl_tree),J--),Q(C,T,C.bl_tree),ee(C,J-3,2)):J<=10?(Q(C,_,C.bl_tree),ee(C,J-3,3)):(Q(C,M,C.bl_tree),ee(C,J-11,7));Z=R,be=(J=0)===ie?(re=138,3):R===ie?(re=6,3):(re=7,4)}}l(V);var q=!1;function x(C,B,j,G){ee(C,(c<<1)+(G?1:0),3),(function(R,Z,ie,J){me(R),oe(R,ie),oe(R,~ie),n.arraySet(R.pending_buf,R.window,Z,ie,R.pending),R.pending+=ie})(C,B,j)}o._tr_init=function(C){q||((function(){var B,j,G,R,Z,ie=new Array(g+1);for(R=G=0;R<u-1;R++)for(N[R]=G,B=0;B<1<<P[R];B++)k[G++]=R;for(k[G-1]=R,R=Z=0;R<16;R++)for(V[R]=Z,B=0;B<1<<I[R];B++)F[Z++]=R;for(Z>>=7;R<f;R++)for(V[R]=Z<<7,B=0;B<1<<I[R]-7;B++)F[256+Z++]=R;for(j=0;j<=g;j++)ie[j]=0;for(B=0;B<=143;)$[2*B+1]=8,B++,ie[8]++;for(;B<=255;)$[2*B+1]=9,B++,ie[9]++;for(;B<=279;)$[2*B+1]=7,B++,ie[7]++;for(;B<=287;)$[2*B+1]=8,B++,ie[8]++;for(Me($,m+1,ie),B=0;B<f;B++)S[2*B+1]=5,S[2*B]=we(B,5);X=new te($,P,d+1,m,g),H=new te(S,I,0,f,g),ae=new te(new Array(0),A,0,p,w)})(),q=!0),C.l_desc=new L(C.dyn_ltree,X),C.d_desc=new L(C.dyn_dtree,H),C.bl_desc=new L(C.bl_tree,ae),C.bi_buf=0,C.bi_valid=0,fe(C)},o._tr_stored_block=x,o._tr_flush_block=function(C,B,j,G){var R,Z,ie=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(J){var re,be=4093624447;for(re=0;re<=31;re++,be>>>=1)if(1&be&&J.dyn_ltree[2*re]!==0)return s;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return r;for(re=32;re<d;re++)if(J.dyn_ltree[2*re]!==0)return r;return s})(C)),Ne(C,C.l_desc),Ne(C,C.d_desc),ie=(function(J){var re;for(v(J,J.dyn_ltree,J.l_desc.max_code),v(J,J.dyn_dtree,J.d_desc.max_code),Ne(J,J.bl_desc),re=p-1;3<=re&&J.bl_tree[2*U[re]+1]===0;re--);return J.opt_len+=3*(re+1)+5+5+4,re})(C),R=C.opt_len+3+7>>>3,(Z=C.static_len+3+7>>>3)<=R&&(R=Z)):R=Z=j+5,j+4<=R&&B!==-1?x(C,B,j,G):C.strategy===4||Z===R?(ee(C,2+(G?1:0),3),Ke(C,$,S)):(ee(C,4+(G?1:0),3),(function(J,re,be,he){var Xe;for(ee(J,re-257,5),ee(J,be-1,5),ee(J,he-4,4),Xe=0;Xe<he;Xe++)ee(J,J.bl_tree[2*U[Xe]+1],3);W(J,J.dyn_ltree,re-1),W(J,J.dyn_dtree,be-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,ie+1),Ke(C,C.dyn_ltree,C.dyn_dtree)),fe(C),G&&me(C)},o._tr_tally=function(C,B,j){return C.pending_buf[C.d_buf+2*C.last_lit]=B>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&B,C.pending_buf[C.l_buf+C.last_lit]=255&j,C.last_lit++,B===0?C.dyn_ltree[2*j]++:(C.matches++,B--,C.dyn_ltree[2*(k[j]+d+1)]++,C.dyn_dtree[2*z(B)]++),C.last_lit===C.lit_bufsize-1},o._tr_align=function(C){ee(C,2,3),Q(C,b,$),(function(B){B.bi_valid===16?(oe(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(i,a,o){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,o){(function(n){(function(s,r){if(!s.setImmediate){var l,c,u,d,m=1,f={},p=!1,h=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){w(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(d="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",b,!1):s.attachEvent("onmessage",b),function(T){s.postMessage(d+T,"*")}):s.MessageChannel?((u=new MessageChannel).port1.onmessage=function(T){w(T.data)},function(T){u.port2.postMessage(T)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(T){var _=h.createElement("script");_.onreadystatechange=function(){w(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(w,0,T)},g.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),M=0;M<_.length;M++)_[M]=arguments[M+1];var P={callback:T,args:_};return f[m]=P,l(m),m++},g.clearImmediate=y}function y(T){delete f[T]}function w(T){if(p)setTimeout(w,0,T);else{var _=f[T];if(_){p=!0;try{(function(M){var P=M.callback,I=M.args;switch(I.length){case 0:P();break;case 1:P(I[0]);break;case 2:P(I[0],I[1]);break;case 3:P(I[0],I[1],I[2]);break;default:P.apply(r,I)}})(_)}finally{y(T),p=!1}}}}function b(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(d)===0&&w(+T.data.slice(d.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(mo)),mo.exports}var th=eh();const ih=Jd(th);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function D(t){if(!t)throw new Error("Assertion failed.")}const ah=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ze=t=>t&&t[t.length-1],Ct=t=>t>=0&&t<2**32,Y=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},pt=t=>{const e=Y(t);return(e&1)===0?-(e>>1):e+1>>1},We=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),nt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),st=new TextEncoder,Aa={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Ia={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Ba={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},oh=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Fa=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Xn{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(o=>{let n=!1;e=()=>{n||(o(),this.pending--,n=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const Zn=(t,e,i)=>{let a=0,o=t.length-1,n=-1;for(;a<=o;){const s=a+(o-a+1)/2|0;i(t[s])<=e?(n=s,a=s+1):o=s-1}return n},Qn=()=>{let t,e;return{promise:new Promise((a,o)=>{t=a,e=o}),resolve:t,reject:e}},Ot=t=>{throw new Error(`Unexpected value: ${t}`)},nh=(t,e,i)=>{const a=t.getUint8(e),o=t.getUint8(e+1),n=t.getUint8(e+2);return a<<16|o<<8|n},po=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},sh=(t,e,i,a)=>{i=Ie(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),po(t,e,i,a)},Ie=(t,e,i)=>Math.max(e,Math.min(i,t)),rh=(t,e,i)=>t+(e-t)*i,lh="und",Yn=(t,e)=>Math.round(t/e)*e,Jn=(t,e)=>Math.round(t*e)/e,es=(t,e)=>Math.floor(t*e)/e,ch=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},uh=/^[a-z]{3}$/,fh=t=>uh.test(t),St=1e6*(1+Number.EPSILON),dh=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,o=1,n=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*n+a,u=l*s+o;if(u>e)return{num:i*n,den:s};if(a=n,o=s,n=c,s=u,r=1/(r-l),!isFinite(r))break}return{num:i*n,den:s}};class ts{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let go=null;const hh=()=>go!==null?go:go=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let vo=null;const is=()=>vo!==null?vo:vo=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let bo=null;const mh=()=>bo!==null?bo:bo=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let yo=null;const ph=()=>{if(yo!==null)return yo;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?yo=Number(t[1]):null},as=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},gh=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},vh=(t,e)=>{let i=-1,a=1/0;for(let o=0;o<t.length;o++){const n=e(t[o]);n<a&&(a=n,i=o)}return i},os=t=>{D(Number.isInteger(t.num)),D(Number.isInteger(t.den)),D(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const o=e%i;e=i,i=o}const a=e||1;return{num:t.num/a,den:t.den/a}},wo=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},bh=t=>new Promise(e=>setTimeout(e,t)),ns=t=>Array.isArray(t)?t:[t];class ko{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const o={fn:i,once:a?.once??!1};return this._listeners.get(e).add(o),()=>{this._listeners.get(e)?.delete(o)}}_emit(...e){const[i,a]=e,o=this._listeners.get(i);if(o)for(const n of o){try{n.fn(a)}catch(s){console.error(s)}n.once&&o.delete(n)}}}const yh=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var rt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(rt||(rt={}));class ke{constructor(){}static get level(){return ke._level}static set level(e){if(e!==rt.Silent&&e!==rt.Errors&&e!==rt.Warnings&&e!==rt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ke._level=e}static get _emitter(){return ke._emitterInstance??=new ko}static on(e,i,a){return ke._emitter.on(e,i,a)}static _error(...e){ke._emitter._emit("error",e),ke._level>=rt.Errors&&console.error(...e)}static _warn(...e){ke._emitter._emit("warn",e),ke._level>=rt.Warnings&&console.warn(...e)}static _info(...e){ke._emitter._emit("info",e),ke._level>=rt.Info&&console.info(...e)}}ke._level=rt.Info,ke._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ss{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class wh{constructor(e,i,a,o){if(this.data=e,this.mimeType=i,this.name=a,this.description=o,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(o!==void 0&&typeof o!="string")throw new TypeError("description, when provided, must be a string.")}}const kh=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof ss)&&!(e instanceof wh)&&!yh(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Th=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ee{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),o=(i&1<<a)>>a;return this.pos++,o}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let o=this.pos;o<a;o++){const n=Math.floor(o/8);let s=this.bytes[n];const r=7-(o&7);s&=~(1<<r),s|=(i&1<<a-o-1)>>a-o-1<<r,this.bytes[n]=s}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Ee(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ra=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],To=[-1,1,2,3,4,5,6,8],_h=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Ee(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let o=null;a===15?o=e.readBits(24):a<Ra.length&&(o=Ra[a]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=To[n]),{objectType:i,frequencyIndex:a,sampleRate:o,channelConfiguration:n,numberOfChannels:s}},rs=t=>{let e=Ra.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=To.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let o=13;t.objectType>=32&&(o+=6),e===15&&(o+=24);const n=Math.ceil(o/8),s=new Uint8Array(n),r=new Ee(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const gt=["avc","hevc","vp9","av1","vp8","prores"],Qe=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],_o=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Ht=[..._o,...Qe],bi=["webvtt"],za=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],ls=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],cs=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],us=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],yi=["ap4x","ap4h","apch","apcn","apcs","apco"],Co=["dtsc","dtsh","dtsl","dtse"],Ch=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Sh=(t,e,i,a,o)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=za.find(m=>s<=m.maxMacroblocks&&a<=m.maxBitrate)??Ze(za),l=r?r.level:0,c="64".padStart(2,"0"),u="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${u}${d}`}else if(t==="hevc"){const l=e*i,c=ls.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??Ze(ls);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(cs.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??Ze(cs)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=us.find(u=>s<=u.maxPictureSize&&a<=u.maxBitrate)??Ze(us);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Ch.filter(u=>u.alpha===o);let l=r[0].fourCc,c=1/0;for(const{fourCc:u,bitrate:d}of r){const m=Math.abs(d*s-a);m<c&&(c=m,l=u)}return l}else Ot(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},xh=t=>{const e=t.split("."),o=(1<<7)+1,n=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(n<<5)+r,c=s.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,m=0,f=e[4]?Number(e[4]):0,p=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,y=(c<<7)+(d<<6)+(m<<5)+(f<<4)+(p<<3)+(h<<2)+g;return[o,l,y,0]},Eh=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Qe.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},fs=/^pcm-([usf])(\d+)(be)?$/,Lt=t=>{if(D(Qe.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=fs.exec(t);D(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,o=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:o,silentValue:n}},Oa=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":yi.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Co.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":fs.test(t)?t:t==="webvtt"?"webvtt":null,Ph=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Mh=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Ah=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...yi],Ih=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Bh=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Fh=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Rh=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,ds=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Ah.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Fa(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(Aa);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const o=Object.keys(Ia);if(i.transfer!=null&&!o.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${o.join(", ")}.`);const n=Object.keys(Ba);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Ih.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Bh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Fh.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Rh.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(yi.some(i=>t.decoderConfig.codec.startsWith(i))&&!yi.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${yi.join(", ")}.`);if(e!==null&&Oa(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},zh=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],hs=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!zh.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Fa(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Co.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Co.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Qe.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Qe.join(", ")}).`);if(e!==null&&Oa(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Oh=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Hh=[48e3,44100,32e3],Lh=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var vt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(vt||(vt={}));var je;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(je||(je={}));const wi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let o=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?o=4:t[e+1]===0&&t[e+2]===1&&(o=3),o===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+o,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},ms=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let o;e===1?o=a.getUint8(i):e===2?o=a.getUint16(i,!1):e===3?o=nh(a,i):(D(e===4),o=a.getUint32(i,!1)),i+=e,yield{offset:i,length:o},i+=o}},Nh=(t,e)=>{if(e.description){const o=(We(e.description)[4]&3)+1;return ms(t,o)}else return wi(t)},ps=t=>t&31,Ha=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Uh=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),a=new Uint8Array(i);let o=0;for(const n of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(o,n.byteLength);break;case 2:s.setUint16(o,n.byteLength,!1);break;case 3:po(s,o,n.byteLength,!1);break;case 4:s.setUint32(o,n.byteLength,!1);break}o+=e,a.set(n,o),o+=n.byteLength}return a},qh=t=>{try{const e=[],i=[],a=[];for(const r of wi(t)){const l=t.subarray(r.offset,r.offset+r.length),c=ps(l[0]);c===vt.SPS?e.push(l):c===vt.PPS?i.push(l):c===vt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const o=e[0],n=$h(o);D(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return ke._error("Error building AVC Decoder Configuration Record:",e),null}},Dh=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){D(t.chromaFormat!==null),D(t.bitDepthLumaMinus8!==null),D(t.bitDepthChromaMinus8!==null),D(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}}return new Uint8Array(e)},gs={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},$h=t=>{try{const e=new Ee(Ha(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),o=e.readAlignedByte(),n=e.readAlignedByte();Y(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=Y(e),s===3&&(c=e.readBits(1)),r=Y(e),l=Y(e),e.skipBits(1),e.readBits(1))){for(let S=0;S<(s!==3?8:12);S++)if(e.readBits(1)){const k=S<6?16:64;let N=8,X=8;for(let H=0;H<k;H++){if(X!==0){const ae=pt(e);X=(N+ae+256)%256}N=X===0?N:X}}}Y(e);const u=Y(e);if(u===0)Y(e);else if(u===1){e.skipBits(1),pt(e),pt(e);const $=Y(e);for(let S=0;S<$;S++)pt(e)}Y(e),e.skipBits(1);const d=Y(e),m=Y(e),f=16*(d+1),p=16*(m+1);let h=f,g=p;const y=e.readBits(1);if(y||e.skipBits(1),e.skipBits(1),e.readBits(1)){const $=Y(e),S=Y(e),F=Y(e),k=Y(e);let N,X;if((c===0?s:0)===0)N=1,X=2-y;else{const ae=s===3?1:2,V=s===1?2:1;N=ae,X=V*(2-y)}h-=N*($+S),g-=X*(F+k)}let b=2,T=2,_=2,M=0,P={num:1,den:1},I=null,A=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)P={num:e.readBits(16),den:e.readBits(16)};else{const te=gs[V];te&&(P=te)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),M=e.readBits(1),e.readBits(1)&&(b=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(Y(e),Y(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const X=e.readBits(1);X&&vs(e);const H=e.readBits(1);H&&vs(e),(X||H)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),Y(e),Y(e),Y(e),Y(e),I=Y(e),A=Y(e))}if(I===null){D(A===null);const $=o&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&$)I=0,A=0;else{const S=d+1,F=m+1,k=(2-y)*F,N=za.find(H=>H.level>=n)??Ze(za),X=Math.min(Math.floor(N.maxDpbMbs/(S*k)),16);I=X,A=X}}return D(A!==null),{profileIdc:a,constraintFlags:o,levelIdc:n,frameMbsOnlyFlag:y,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:f,codedHeight:p,displayWidth:h,displayHeight:g,pixelAspectRatio:P,colourPrimaries:b,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:M,numReorderFrames:I,maxDecFrameBuffering:A}}catch(e){return ke._error("Error parsing AVC SPS:",e),null}},vs=t=>{const e=Y(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)Y(t),Y(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Wh=(t,e)=>{if(e.description){const o=(We(e.description)[21]&3)+1;return ms(t,o)}else return wi(t)},So=t=>t>>1&63,jh=t=>{try{const e=new Ee(Ha(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:o,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=Gh(e,i);Y(e);const u=Y(e);let d=0;u===3&&(d=e.readBits(1));const m=Y(e),f=Y(e);let p=m,h=f;if(e.readBits(1)){const S=Y(e),F=Y(e),k=Y(e),N=Y(e);let X=1,H=1;const ae=d===0?u:0;ae===1?(X=2,H=2):ae===2&&(X=2,H=1),p-=(S+F)*X,h-=(k+N)*H}const g=Y(e),y=Y(e);Y(e);const b=e.readBits(1)?0:i;let T=0;for(let S=b;S<=i;S++)Y(e),T=Y(e),Y(e);Y(e),Y(e),Y(e),Y(e),Y(e),Y(e),e.readBits(1)&&e.readBits(1)&&Kh(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),Y(e),Y(e),e.skipBits(1));const _=Y(e);if(Xh(e,_),e.readBits(1)){const S=Y(e);for(let F=0;F<S;F++)Y(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let M=2,P=2,I=2,A=0,U=0,$={num:1,den:1};if(e.readBits(1)){const S=Qh(e,i);$=S.pixelAspectRatio,M=S.colourPrimaries,P=S.transferCharacteristics,I=S.matrixCoefficients,A=S.fullRangeFlag,U=S.minSpatialSegmentationIdc}return{displayWidth:p,displayHeight:h,pixelAspectRatio:$,colourPrimaries:M,transferCharacteristics:P,matrixCoefficients:I,fullRangeFlag:A,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:o,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:u,bitDepthLumaMinus8:g,bitDepthChromaMinus8:y,minSpatialSegmentationIdc:U}}catch(e){return ke._error("Error parsing HEVC SPS:",e),null}},Vh=t=>{try{const e=[],i=[],a=[],o=[];for(const c of wi(t)){const u=t.subarray(c.offset,c.offset+c.length),d=So(u[0]);d===je.VPS_NUT?e.push(u):d===je.SPS_NUT?i.push(u):d===je.PPS_NUT?a.push(u):(d===je.PREFIX_SEI_NUT||d===je.SUFFIX_SEI_NUT)&&o.push(u)}if(i.length===0||a.length===0)return null;const n=jh(i[0]);if(!n)return null;let s=0;if(a.length>0){const c=a[0],u=new Ee(Ha(c));u.skipBits(16),Y(u),Y(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),Y(u),Y(u),pt(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&Y(u),pt(u),pt(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);const d=u.readBits(1),m=u.readBits(1);!d&&!m?s=0:d&&!m?s=2:!d&&m?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:je.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:je.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:je.PPS_NUT,nalUnits:a}]:[],...o.length?[{arrayCompleteness:1,nalUnitType:So(o[0][0]),nalUnits:o}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return ke._error("Error building HEVC Decoder Configuration Record:",e),null}},Gh=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),o=t.readBits(5);let n=0;for(let u=0;u<32;u++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let u=0;u<6;u++)s[u]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let u=0;u<e;u++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let u=e;u<8;u++)t.skipBits(2);for(let u=0;u<e;u++)l[u]&&t.skipBits(88),c[u]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:o,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:r}},Kh=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))Y(t);else{const o=Math.min(64,1<<4+(e<<1));e>1&&pt(t);for(let n=0;n<o;n++)pt(t)}},Xh=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=Zh(t,a,e,i)},Zh=(t,e,i,a)=>{let o=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const l=Y(t);s=e-(l+1)}else s=e-1;t.readBits(1),Y(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);o=a[s]}else{const r=Y(t),l=Y(t);for(let c=0;c<r;c++)Y(t),t.readBits(1);for(let c=0;c<l;c++)Y(t),t.readBits(1);o=r+l}return o},Qh=(t,e)=>{let i=2,a=2,o=2,n=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=gs[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),o=t.readBits(8))),t.readBits(1)&&(Y(t),Y(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(Y(t),Y(t),Y(t),Y(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&Y(t),t.readBits(1)&&Yh(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=Y(t),Y(t),Y(t),Y(t),Y(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:o,fullRangeFlag:n,minSpatialSegmentationIdc:s}},Yh=(t,e,i)=>{let a=!1,o=!1,n=!1;a=t.readBits(1)===1,o=t.readBits(1)===1,(a||o)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?Y(t):c=t.readBits(1)===1;let u=1;c||(u=Y(t)+1),a&&bs(t,u,n),o&&bs(t,u,n)}},bs=(t,e,i)=>{for(let a=0;a<e;a++)Y(t),Y(t),i&&(Y(t),Y(t)),t.readBits(1)},Jh=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let o=0;o<a.length;o++)e.push(a[o])}}return new Uint8Array(e)};var ys;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(ys||(ys={}));const em=function*(t){const e=new Ee(t),i=()=>{let a=0;for(let o=0;o<8;o++){const n=e.readAlignedByte();if(a|=(n&127)<<o*7,!(n&128))break;if(o===7&&n&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),o=e.readBits(1),n=e.readBits(1);e.skipBits(1),o&&e.skipBits(8);let s;if(n){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);D(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},tm=t=>{const e=nt(t),i=e.getUint8(9),a=e.getUint16(10,!0),o=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:o,outputGain:n,channelMappingFamily:s,channelMappingTable:r}},im=(t,e,i)=>{switch(t){case"avc":{for(const a of Nh(i,e)){const o=i[a.offset],n=ps(o);if(n>=vt.NON_IDR_SLICE&&n<=vt.SLICE_DPC)return"delta";if(n===vt.IDR)return"key";if(n===vt.SEI&&(!mh()||ph()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=Ha(s);let l=1;do{let c=0;for(;;){const m=r[l++];if(m===void 0||(c+=m,m<255))break}let u=0;for(;;){const m=r[l++];if(m===void 0||(u+=m,m<255))break}if(c===6){const m=new Ee(r);m.pos=8*l;const f=Y(m),p=m.readBits(1);if(f===0&&p===1)return"key"}l+=u}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of Wh(i,e)){const o=So(i[a.offset]);if(o<je.BLA_W_LP)return"delta";if(o<=je.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Ee(i);if(a.readBits(2)!==2)return null;const o=a.readBits(1);return(a.readBits(1)<<1)+o===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:o,data:n}of em(i))if(o===1){const s=new Ee(n);s.skipBits(4),a=!!s.readBits(1)}else if(o===3||o===6||o===7){if(a)return"key";const s=new Ee(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Ot(t),D(!1)}};var ws;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(ws||(ws={}));const am=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),o=e.readBits(5);if(o>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:o,bsmod:n,acmod:s,lfeon:r,bitRateCode:l}},om=[1,2,3,6],nm=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),o=e.readBits(2);let n=0,s;o===3?(n=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const u=om[s];let d;return o<3?d=Hh[o]/1e3:d=Lh[n]/1e3,{dataRate:Math.round((a+1)*d/(u*16)),substreams:[{fscod:o,fscod2:n,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},sm=1683496997,rm=18,lm=10,ks=32,cm=20,um=8,fm=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],dm=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],hm=[16,16,20,20,0,24,24,0],Ts=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],mm=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],pm=8,gm=[32e3,44100,48e3,0],vm=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],bm=[512,1024,2048,4096],ym=t=>{const e=wm(t),i=nt(t);let a=e?Math.ceil(e.frameSize/4)*4:0,o=null;for(;a+4<=t.length&&i.getUint32(a)===sm;){const s=km(t.subarray(a));if(!s)break;o??=s,a+=s.frameSize}if(e)return{frameSize:o?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:o!==null};if(!o?.asset)return null;const{asset:n}=o;return{frameSize:a,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},wm=t=>{if(t.length<rm||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Ee(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==ks-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%um!==0)return null;const o=e.readBits(14)+1;if(o<96)return null;const n=e.readBits(6);if(n>=Ts.length)return null;const s=fm[e.readBits(4)];if(s===0)return null;const r=dm[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=hm[e.readBits(3)];if(c===0)return null;const u=l!==0;return{frameSize:o,sampleRate:s,numberOfChannels:Ts[n]+(u?1:0),sampleCount:a*ks,channelLayout:mm[n]|(u?pm:0),amode:n,lfePresent:u,bitRate:r,pcmResolution:c}},km=t=>{if(t.length<lm||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Ee(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),o=8+4*a,n=16+4*a;e.skipBits(o);const s=e.readBits(n)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=gm[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const u=e.readBits(3)+1,d=e.readBits(3)+1,m=[];for(let y=0;y<u;y++)m.push(e.readBits(i+1));for(const y of m)e.skipBits(8*ch(y));if(e.readBits(1)){e.skipBits(2);const y=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*y)}for(let y=0;y<d;y++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,p=vm[e.readBits(4)],h=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const y=e.readBits(2)+1<<2;g=e.readBits(y)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:p,numberOfChannels:h,sampleCount:Math.round(c*p/l),channelLayout:g,pcmResolution:f}}},Tm=t=>{const e=new Uint8Array(cm),i=nt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,o=new Ee(e);return o.seekToByte(13),o.writeBits(2,Math.max(bm.indexOf(t.sampleCount),0)),o.writeBits(5,a),o.writeBits(1,t.core?.lfePresent?1:0),o.writeBits(6,t.core?.amode??0),o.writeBits(14,t.core?t.core.frameSize-1:0),o.writeBits(1,0),o.writeBits(3,0),o.writeBits(16,t.channelLayout),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const _s=new Uint8Array(0);class lt{constructor(e,i,a,o,n=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=o,this.sequenceNumber=n,e===_s&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(o)||o<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===_s}get microsecondTimestamp(){return Math.trunc(St*this.timestamp)}get microsecondDuration(){return Math.trunc(St*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new lt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new lt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const _m=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const xo=8,Cs=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Cm=7,Sm=9,Ss=t=>{const e=t.filePos,i=Xm(t,9),a=new Ee(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const u=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let m=null;return s===1?t.filePos-=2:m=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:u,numberOfAacFrames:d,crcCheck:m,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var xm=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Em=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});gh();let xs=-1/0,Es=-1/0,ki=null;typeof FinalizationRegistry<"u"&&(ki=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-xs>=1e3&&(ke._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),xs=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Es>=1e3&&(ke._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Es=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Nt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Eo=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Pm=new Set(Eo);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(St*this.timestamp)}get microsecondDuration(){return Math.trunc(St*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Pm.has(i.format))throw new TypeError("init.format must be one of: "+Eo.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&wo(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??Im(i.format,i.codedWidth,i.codedHeight);let o=i.colorSpace??null;o===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?o={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:o={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?We(e):We(e).slice(),this._layout=a,this.colorSpace=new Po(o)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&wo(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new Po(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&wo(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*St),duration:Math.trunc((i.duration??0)*St)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,o=0;if("naturalWidth"in e?(a=e.naturalWidth,o=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,o=e.videoHeight):"width"in e&&(a=Number(e.width),o=Number(e.height)),!a||!o)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:a,height:o},s=new OffscreenCanvas(n.width,n.height),r=s.getContext("2d",{alpha:is(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new Po({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Nt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Eo.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=os({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),ki?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return D(this._data!==null),this._data instanceof Nt?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):_i(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(D(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(ki?.unregister(this),this._data instanceof Nt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):_i(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Is(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return _i(this._data)?this._data.allocationSize(e):Bs(this,e).allocationSize}async copyTo(e,i={}){if(!Fa(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Is(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(D(this._data!==null),_i(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Nt){const c={stack:[],error:void 0,hasError:!1};try{const u=xm(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(u instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(u.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${u.format}' instead.`);return await u.copyTo(e,i)}catch(u){c.error=u,c.hasError=!0}finally{Em(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),u=await c.copyTo(e,i);return c.close(),u}const a=Bs(this,i);D(this.format);const o=We(e);if(o.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${o.byteLength}`);const n=La(this.format);let s;if(this._data instanceof Nt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(u=>!(u.data instanceof Uint8Array)||!Number.isInteger(u.stride)||u.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)D(this._layout),D(this._layout.length===n.length),s=this._layout.map((c,u)=>{const d=Math.ceil(this.codedHeight/n[u].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const u=this._data.getContext("2d");D(u);const d=u.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:We(d.data),stride:4*this.codedWidth}]}const r=[],l=n.length;for(let c=0;c<l;c++){const u=a.computedLayouts[c],d=s[c].stride,m=s[c].data;let f=u.sourceTop*d;f+=u.sourceLeftBytes;let p=u.destinationOffset;const h=u.sourceWidthBytes,g={offset:p,stride:u.destinationStride};for(let y=0;y<u.sourceHeight;y++){if(f+h>m.byteLength)throw new Error("Source buffer OOB read.");if(p+h>o.byteLength)throw new Error("Destination buffer OOB write.");const w=m.subarray(f,f+h);o.set(w,p),f+=d,p+=u.destinationStride}r.push(g)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),u=this.format.includes("X")&&i.format.includes("A");if(c||u)for(let d=0;d<a.allocationSize;d+=4){if(c){const m=o[d],f=o[d+2];o[d]=f,o[d+2]=m}u&&(o[d+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof Nt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let o=0;const n=[];for(const s of e)a.set(s.data,o),n.push(o),o+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:n[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return _i(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(D(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,o,n,s,r,l,c){let u=0,d=0,m=this.displayWidth,f=this.displayHeight,p=0,h=0,g=this.displayWidth,y=this.displayHeight;if(s!==void 0?(u=i,d=a,m=o,f=n,p=s,h=r,l!==void 0?(g=l,y=c):(g=m,y=f)):(p=i,h=a,o!==void 0&&(g=o,y=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(u))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(m)||m<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(p))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(y)||y<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:u,sy:d,sWidth:m,sHeight:f}=this._rotateSourceRegion(u,d,m,f,this.rotation));const w=this.toCanvasImageSource();e.save();const b=p+g/2,T=h+y/2;e.translate(b,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:g/y;e.scale(1/_,_),e.drawImage(w,u,d,m,f,-g/2,-y/2,g,y),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Mo(i.crop,"options.");const a=e.canvas.width,o=e.canvas.height,n=i.rotation??this.rotation,[s,r]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=As(l,s,r));let c,u,d,m;const{sx:f,sy:p,sWidth:h,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,n);if(i.fit==="fill")c=0,u=0,d=a,m=o;else{const[w,b]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(a/w,o/b):Math.max(a/w,o/b);d=w*T,m=b*T,c=(a-d)/2,u=(o-m)/2}e.save();const y=n%180===0?1:d/m;e.translate(a/2,o/2),e.rotate(n*Math.PI/180),e.scale(1/y,y),e.translate(-a/2,-o/2),e.drawImage(this.toCanvasImageSource(),f,p,h,g,c,u,d,m),e.restore()}_rotateSourceRegion(e,i,a,o,n){return n===90?[e,i,a,o]=[i,this.squarePixelHeight-e-a,o,a]:n===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-o]:n===270&&([e,i,a,o]=[this.squarePixelWidth-i-o,e,o,a]),{sx:e,sy:i,sWidth:a,sHeight:o}}_drawWithFitAndMipmapping(e,i,a){const o=e.width,n=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let u=0;2*o<l&&2*n<c&&(u=Math.floor(Math.log2(Math.min(l/o,c/n))));const d=o*2**u,m=n*2**u,{canvas:f,context:p,isNew:h}=u>0?Ms(d,m):{canvas:e,context:i,isNew:a.targetIsFresh};p.imageSmoothingQuality="high",a.fillBlack?(p.fillStyle="black",p.fillRect(0,0,d,m)):h||p.clearRect(0,0,d,m),this.drawWithFit(p,{fit:a.fit,rotation:a.rotation,crop:a.crop}),p.globalCompositeOperation="copy";for(let g=u;g>1;g--){const y=o*2**g,w=n*2**g;p.drawImage(f,0,0,y,w,0,0,y/2,w/2)}p.globalCompositeOperation="source-over",u>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*o,2*n,0,0,o,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof Nt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Mo(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=ah(this.rotation+(e.rotate??0)),[a,o]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=As(n,a,o));const s=n?n.width:a,r=n?n.height:o,l=s/r;let c,u;e.width!==void 0&&e.height===void 0?(c=e.width,u=c/l):e.width===void 0&&e.height!==void 0?(u=e.height,c=u*l):e.width!==void 0&&e.height!==void 0?(c=e.width,u=e.height):(c=s,u=r),c=Yn(c,e.roundDimensionsTo??1),u=Yn(u,e.roundDimensionsTo??1);const d={width:c,height:u,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:a,height:o},alpha:e.alpha??"keep"};for(const h of Mm){let g=h(this,d);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:m,context:f,isNew:p}=Ms(d.width,d.height);return this._drawWithFitAndMipmapping(m,f,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:p,fillBlack:d.alpha==="discard"}),new Re(m,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Mm=[],Am=3,Ti=[];let Ps=0;const Ms=(t,e)=>{for(const o of Ti)if(o.canvas.width===t&&o.canvas.height===e)return o.age=Ps++,{canvas:o.canvas,context:o.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ti.length>=Am&&Ti.splice(vh(Ti,o=>o.age),1),Ti.push({canvas:i,context:a,age:Ps++}),{canvas:i,context:a,isNew:!0}};class Po{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Aa);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(Ia);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const o=Object.keys(Ba);if(e.matrix!=null&&!o.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${o.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const _i=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,As=(t,e,i)=>{const a=Math.min(t.left,e),o=Math.min(t.top,i),n=Math.min(t.width,e-a),s=Math.min(t.height,i-o);return D(n>=0),D(s>=0),{left:a,top:o,width:n,height:s}},Mo=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Is=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},Im=(t,e,i)=>{const a=La(t),o=[];let n=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,u=c*l;o.push({offset:n,stride:c}),n+=u}return o},La=t=>{const e=(i,a,o,n,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:o,heightDivisor:n},{sampleBytes:a,widthDivisor:o,heightDivisor:n}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Ot(t),D(!1)}},Bs=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,o=Bm(i,a,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Rm(o,s,n)},Bm=(t,e,i,a,o)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!Fm(o,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},Fm=(t,e)=>{if(t===null)return!0;const i=La(t);for(let a=0;a<i.length;a++){const o=i[a],n=o.widthDivisor,s=o.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},Rm=(t,e,i)=>{const a=La(e),o=a.length;if(i!==void 0&&i.length!==o)throw new TypeError(`Layout must have ${o} planes.`);let n=0;const s=[],r=[];for(let l=0;l<o;l++){const c=a[l],u=c.sampleBytes,d=c.widthDivisor,m=c.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/m),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/m),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*u,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*u,i!==void 0){const g=i[l];if(g.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);f.destinationOffset=g.offset,f.destinationStride=g.stride}else f.destinationOffset=n,f.destinationStride=f.sourceWidthBytes;const h=f.destinationStride*f.sourceHeight+f.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(h),n=Math.max(n,h);for(let g=0;g<l;g++){const y=s[g];if(!(r[l]<=y.destinationOffset||r[g]<=f.destinationOffset))throw new TypeError("Planes overlap.")}s.push(f)}return{allocationSize:n,computedLayouts:s}},Na=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Ci{constructor(){this._referenceCount=0}}class He{get microsecondTimestamp(){return Math.trunc(St*this.timestamp)}get microsecondDuration(){return Math.trunc(St*this.duration)}constructor(e){if(this._closed=!1,Si(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Ci){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Na.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Na.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(xt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const o=this.numberOfFrames*this.numberOfChannels*xt(this.format);if(a.byteLength<o)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}ki?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Na.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const o=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(o>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const n=xt(i),s=Ut(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?o:o*this.numberOfChannels)*n}copyTo(e,i){if(!Fa(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!Na.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:o,frameOffset:n}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,u=this.numberOfChannels,d=n??0;if(d>=c)throw new RangeError("frameOffset out of range");const m=o!==void 0?o:c-d;if(m>c-d)throw new RangeError("frameCount out of range");const f=xt(l),p=Ut(l);if(p&&s>=u)throw new RangeError("planeIndex out of range");if(!p&&s!==0)throw new RangeError("planeIndex out of range");const g=(p?m:m*u)*f;if(e.byteLength<g)throw new RangeError("Destination buffer is too small");const y=nt(e),w=Rs(l);if(Si(this._data))hh()&&u>2&&l!==r?Om(this._data,y,r,l,u,s,d,m):this._data.copyTo(e,{planeIndex:s,frameOffset:d,frameCount:m,format:l});else{const b=Fs(r),T=xt(r),_=Ut(r);let M;if(this._data instanceof Ci){const I=A=>{const U=this._data.getDataPlane(A);if(!(U instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const $=c*T*(_?1:u);if(U.byteLength!==$)throw new TypeError(`Data plane ${A} has invalid size. Expected exactly ${$} bytes, got ${U.byteLength} bytes.`);return U};if(_)if(p)M=I(s),s=0;else{M=new Uint8Array(c*T*u);for(let A=0;A<u;A++){const U=I(A);M.set(U,A*c*T)}}else M=I(0)}else M=this._data;const P=nt(M);for(let I=0;I<m;I++)if(p){const A=I*f;let U;_?U=(s*c+(I+d))*T:U=((I+d)*u+s)*T;const $=b(P,U);w(y,A,$)}else for(let A=0;A<u;A++){const $=(I*u+A)*f;let S;_?S=(A*c+(I+d))*T:S=((I+d)*u+A)*T;const F=b(P,S);w(y,$,F)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Ci){const e=new He(this._data);return e.setTimestamp(this.timestamp),e}else if(Si(this._data)){const e=new He(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new He({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,o=xt(this.format);let n;if(Ut(this.format)){const s=a*o;if(n=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else n=new Uint8Array(a*this.numberOfChannels*o),a>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new He({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(ki?.unregister(this),this._data instanceof Ci?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Si(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Ci?this._createAudioDataFromData():Si(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Ut(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;for(;c>0;){const u=Math.min(r,c),d=new Float32Array(o*u);for(let m=0;m<o;m++)e.copyFromChannel(d.subarray(m*u,(m+1)*u),m,l);yield new He({format:"f32-planar",sampleRate:n,numberOfFrames:u,numberOfChannels:o,timestamp:i+l/n,data:d}),l+=u,c-=u}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;const u=[];for(;c>0;){const d=Math.min(r,c),m=new Float32Array(o*d);for(let p=0;p<o;p++)e.copyFromChannel(m.subarray(p*d,(p+1)*d),p,l);const f=new He({format:"f32-planar",sampleRate:n,numberOfFrames:d,numberOfChannels:o,timestamp:i+l/n,data:m});u.push(f),l+=d,c-=d}return u}}const xt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Ut=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Fs=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},Rs=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Ie((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Ie(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Ie(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},Si=t=>typeof AudioData<"u"&&t instanceof AudioData,zm=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},Om=(t,e,i,a,o,n,s,r)=>{const l=Fs(i),c=Rs(a),u=xt(i),d=xt(a),m=Ut(i);if(Ut(a))if(m){const p=new ArrayBuffer(r*u),h=nt(p);t.copyTo(p,{planeIndex:n,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const y=g*u,w=g*d,b=l(h,y);c(e,w,b)}}else{const p=new ArrayBuffer(r*o*u),h=nt(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const y=(g*o+n)*u,w=g*d,b=l(h,y);c(e,w,b)}}else if(m){const p=r*u,h=new ArrayBuffer(p),g=nt(h);for(let y=0;y<o;y++){t.copyTo(h,{planeIndex:y,frameOffset:s,frameCount:r,format:i});for(let w=0;w<r;w++){const b=w*u,T=(w*o+y)*d,_=l(g,b);c(e,T,_)}}}else{const p=new ArrayBuffer(r*o*u),h=nt(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++)for(let y=0;y<o;y++){const w=g*o+y,b=w*u,T=w*d,_=l(h,b);c(e,T,_)}}},Hm=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new He({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const zs=new Map,Os=new Map,Lm=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!gt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${gt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Mo(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Hs(t.codec,t)},Hs=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Oa(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Ls=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(n,s,r)=>({codec:t.fullCodecString??Sh(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Ph(t.codec)}),o=[];return i.quantizer!==null&&o.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&o.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),D(o.length>0),o},Nm=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Ht.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Ht.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Qe.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Ns(t.codec,t)},Ns=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Oa(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},Us=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Eh(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Mh(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in qs):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?qs[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,o){const n=Um[e];let s=null,r=this._bitrateMode??o??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(D(this._quality!==void 0),s=Ie(Math.round(rh(n.worst,n.best,this._quality)),n.min,n.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&(D(s!==null&&n),c=Ie((s-n.worst)/(n.best-n.worst),0,1)),l=Ds(e,i,a,Ao(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(D(this._quality!==void 0),Ds(e,i,a,Ao(this._quality)))}_toAudioBitrate(e){if(Qe.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Ao(this._quality),o={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!o)throw new Error(`Unhandled codec: ${e}`);let n=o*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r)),Math.round(n/1e3)*1e3}}const qs={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Um={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Ao=t=>.3*Math.exp(2.5538*t),Ds=(t,e,i,a)=>{const o=e*i,n=1920*1080,s=3e6,r=Math.pow(o/n,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},$s=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};D(!1)},qm=new ze("high"),Dm=async(t,e={})=>{const{width:i=1280,height:a=720,quality:o,bitrate:n,...s}=e;if(!gt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(o!==void 0&&!(o instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");Hs(t,s);const r=Ua(o,n)??new ze("medium");let l;try{l=Ls({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),u=zs.get(c);if(u)return u;const d=(async()=>{for(const{config:f}of l)if(Ws.some(p=>p.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:p}of l){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!is()||await new Promise(async g=>{try{const y=new VideoEncoder({output:()=>{},error:()=>g(!1)});y.configure(f);const w=new Uint8Array(i*a*4),b=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});y.encode(b,p!==null?$s(t,p):void 0),b.close(),await y.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return zs.set(c,d),d},$m=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:o,bitrate:n,...s}=e;if(!Ht.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(o!==void 0&&!(o instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");Ns(t,s);const r=Ua(o,n)??new ze("medium"),l=Us({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),u=Os.get(c);if(u)return u;const d=(async()=>{if(js.some(m=>m.supports(t,l))||Qe.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return Os.set(c,d),d},Ua=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},Wm=async(t,e)=>{for(const i of t)if(await Dm(i,e))return i;return null},jm=async(t,e)=>{for(const i of t)if(await $m(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ws=[],js=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Vm=t=>{let a=t,o=4096,n=0,s=12,r=0;for(a<0&&(a=-a,n=128),a+=33,a>8191&&(a=8191);(a&o)!==o&&s>=5;)o>>=1,s--;return r=a>>s-4&15,~(n|s-5<<4|r)&255},Gm=t=>{let i=2048,a=0,o=11,n=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&o>=5;)i>>=1,o--;return n=s>>(o===4?1:o-4)&15,(a|o-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class xi{constructor(e,i,a,o,n){this.bytes=e,this.view=i,this.offset=a,this.start=o,this.end=n,this.bufferPos=o-a}static tempFromBytes(e){return new xi(e,nt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new xi(this.bytes,this.view,this.offset,e,e+i)}}const Km=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Xm=(t,e)=>{Km(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Zm{constructor(e){this.mutex=new Xn,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let o=this.trackTimestampInfo.get(e);if(o){if(a&&(o.maxTimestampBeforeLastKeyPacket=o.maxTimestamp),o.maxTimestampBeforeLastKeyPacket!==null&&i<o.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${o.maxTimestampBeforeLastKeyPacket}s.`);o.maxTimestamp=Math.max(o.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");o={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,o)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Vs=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,Qm=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),o=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+o.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class qa{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const a=this.writer.getPos(),o=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,o),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);D(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const ue=new Uint8Array(8),Ve=new DataView(ue.buffer),Te=t=>[(t%256+256)%256],se=t=>(Ve.setUint16(0,t,!1),[ue[0],ue[1]]),Io=t=>(Ve.setInt16(0,t,!1),[ue[0],ue[1]]),Gs=t=>(Ve.setUint32(0,t,!1),[ue[1],ue[2],ue[3]]),K=t=>(Ve.setUint32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),bt=t=>(Ve.setInt32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),ct=t=>(Ve.setUint32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),Ym=t=>(Ve.setInt32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),Ks=t=>(Ve.setInt16(0,2**8*t,!1),[ue[0],ue[1]]),Ye=t=>(Ve.setInt32(0,2**16*t,!1),[ue[0],ue[1],ue[2],ue[3]]),Bo=t=>(Ve.setInt32(0,2**30*t,!1),[ue[0],ue[1],ue[2],ue[3]]),Fo=(t,e)=>{const i=[];let a=t;do{let o=a&127;a>>=7,i.length>0&&(o|=128),i.push(o)}while(a>0||e);return i.reverse()},pe=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,o)=>t.charCodeAt(o));return e&&i.push(0),i},Xs=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},Zs=Xs(0),Qs=t=>[Ye(t[0]),Ye(t[1]),Bo(t[2]),Ye(t[3]),Ye(t[4]),Bo(t[5]),Ye(t[6]),Ye(t[7]),Bo(t[8])],ne=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),de=(t,e,i,a,o)=>ne(t,[Te(e),Gs(i),a??[]],o),Jm=t=>t.isQuickTime?ne("ftyp",[pe("qt  "),K(512),pe("qt  ")]):t.fragmented?t.cmaf?ne("ftyp",[pe("iso5"),K(512),pe("iso5"),pe("iso6"),pe("mp41"),pe("cmfc"),pe("dash")]):ne("ftyp",[pe("iso5"),K(512),pe("iso5"),pe("iso6"),pe("mp41")]):ne("ftyp",[pe("isom"),K(512),pe("isom"),t.holdsAvc?pe("avc1"):[],pe("mp41")]),Ys=()=>ne("styp",[pe("iso5"),K(0),pe("iso5"),pe("iso6"),pe("mp41"),pe("cmfc"),pe("dash")]),Js=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),de("sidx",1,0,[K(1),K(et),ct(ye(t.minWrittenTimestamp,et)),ct(0),se(0),se(1),K(e&2147483647),K(ye(i,et)),K(0)])},Da=t=>({type:"mdat",largeSize:t}),ep=t=>({type:"free",size:t}),Ei=t=>ne("moov",void 0,[tp(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>ip(e,t.creationTime)),t.isFragmented?Np(t.trackDatas):null,Yp(t)]),tp=(t,e)=>{const i=Math.max(0,...e.map(s=>ye($a(s),et)+ye(s.startTimestampOffset??0,et))),a=Math.max(0,...e.map(s=>s.track.id))+1,o=!Ct(t)||!Ct(i),n=o?ct:K;return de("mvhd",+o,0,[n(t),n(t),K(et),n(i),Ye(1),Ks(1),Array(10).fill(0),Qs(Zs),Array(24).fill(0),K(a)])},$a=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const o=t.samples[a];o.timestamp<e&&(e=o.timestamp),o.timestamp+o.duration>i&&(i=o.timestamp+o.duration)}return e===1/0?0:i-e},ip=(t,e)=>{const i=c2(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ne("trak",void 0,[ap(t,e),a?op(t,t.startTimestampOffset):null,np(t,e),i.name!==void 0?ne("udta",void 0,[ne("name",[...st.encode(i.name)])]):null])},ap=(t,e)=>{const i=ye($a(t),et)+ye(t.startTimestampOffset??0,et),a=!Ct(e)||!Ct(i),o=a?ct:K;let n;if(t.type==="video"){const l=t.track.metadata.rotation;n=Xs(l??0)}else n=Zs;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Ot(t);return de("tkhd",+a,s,[o(e),o(e),K(t.track.id),K(0),o(i),Array(8).fill(0),se(0),se(r),Ks(t.type==="audio"?1:0),se(0),Qs(n),Ye(t.type==="video"?t.info.width:0),Ye(t.type==="video"?t.info.height:0)])},op=(t,e)=>{const i=ye(e,et),a=ye($a(t),et),o=!Ct(i)||!Ct(a),n=o?ct:K,s=o?Ym:bt;return ne("edts",void 0,[de("elst",o?1:0,0,[K(2),n(i),s(-1),Ye(1),n(a),s(0),Ye(1)])])},np=(t,e)=>ne("mdia",void 0,[sp(t,e),Ro(!0,rp[t.type],lp[t.type]),cp(t)]),sp=(t,e)=>{const i=ye($a(t),t.timescale),a=!Ct(e)||!Ct(i),o=a?ct:K;return de("mdhd",+a,0,[o(e),o(e),K(t.timescale),o(i),se(sr(t.track.metadata.languageCode??lh)),se(0)])},rp={video:"vide",audio:"soun",subtitle:"text"},lp={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Ro=(t,e,i,a="\0\0\0\0")=>de("hdlr",0,0,[t?pe("mhlr"):K(0),pe(e),pe(a),K(0),K(0),pe(i,!0)]),cp=t=>ne("minf",void 0,[up[t.type](),fp(),mp(t)]),up={video:()=>de("vmhd",0,1,[se(0),se(0),se(0),se(0)]),audio:()=>de("smhd",0,0,[se(0),se(0)]),subtitle:()=>de("nmhd",0,0)},fp=()=>ne("dinf",void 0,[dp()]),dp=()=>de("dref",0,0,[K(1)],[hp()]),hp=()=>de("url ",0,1),mp=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ne("stbl",void 0,[pp(t),Bp(t),e?Hp(t):null,e?Lp(t):null,Rp(t),zp(t),Op(t),Fp(t)])},pp=t=>{let e;if(t.type==="video")e=gp(i2(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=nr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);D(i),e=Tp(i,t)}else t.type==="subtitle"&&(e=Ap(n2[t.track.source._codec],t));return D(e),de("stsd",0,0,[K(1)],[e])},gp=(t,e)=>ne(t,[Array(6).fill(0),se(1),se(0),se(0),Array(12).fill(0),se(e.info.width),se(e.info.height),K(4718592),K(4718592),K(0),se(1),Te(10),pe("Mediabunny"),Array(21).fill(0),se(e.info.hasAlphaChannel?32:24),Io(65535)],[a2[e.track.source._codec]?.(e)??null,vp(e),oh(e.info.decoderConfig.colorSpace)?bp(e):null]),vp=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ne("pasp",[K(t.info.pixelAspectRatio.num),K(t.info.pixelAspectRatio.den)]),bp=t=>ne("colr",[pe(t.muxer.isQuickTime?"nclc":"nclx"),se(Aa[t.info.decoderConfig.colorSpace.primaries]),se(Ia[t.info.decoderConfig.colorSpace.transfer]),se(Ba[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Te((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),yp=t=>t.info.decoderConfig&&ne("avcC",[...We(t.info.decoderConfig.description)]),wp=t=>t.info.decoderConfig&&ne("hvcC",[...We(t.info.decoderConfig.description)]),er=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),o=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(n<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?Aa[e.colorSpace.primaries]:2,u=i[6]?Number(i[6]):e.colorSpace?.transfer?Ia[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?Ba[e.colorSpace.matrix]:2;return de("vpcC",1,0,[Te(a),Te(o),Te(l),Te(c),Te(u),Te(d),se(0)])},kp=t=>ne("av1C",xh(t.info.decoderConfig.codec)),Tp=(t,e)=>{let i=0,a,o=16;const n=Qe.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:r}=Lt(s);o=8*r,o>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),se(1),se(i),se(0),K(0),se(e.info.numberOfChannels),se(o),se(0),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0)];else{const s=n?0:-2;a=[Array(6).fill(0),se(1),se(i),se(0),K(0),se(e.info.numberOfChannels),se(Math.min(o,16)),Io(s),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0),n?[K(1),K(o/8),K(e.info.numberOfChannels*o/8)]:[K(0),K(0),K(0)],K(2)]}return ne(t,a,[o2(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},zo=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Te(e),...Te(21),...Gs(0),...K(0),...K(0)];if(t.info.decoderConfig.description){const a=We(t.info.decoderConfig.description);i=[...i,...Te(5),...Fo(a.byteLength),...a]}return i=[...se(1),...Te(0),...Te(4),...Fo(i.length),...i,...Te(6),...Te(1),...Te(2)],i=[...Te(3),...Fo(i.length),...i],de("esds",0,0,i)},Et=t=>ne("wave",void 0,[_p(t),Cp(t),ne("\0\0\0\0")]),_p=t=>ne("frma",[pe(nr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Cp=t=>{const{littleEndian:e}=Lt(t.track.source._codec);return ne("enda",[se(+e)])},Sp=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,o=0,n=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){D(r.byteLength>=18);const l=We(r),c=tm(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,o=c.outputGain,n=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return ne("dOps",[Te(0),Te(e),se(i),K(a),Io(o),Te(n),...s])},xp=t=>{const e=t.info.decoderConfig?.description;D(e);const i=We(e);return de("dfLa",0,0,[...i.subarray(4)])},ut=t=>{const{littleEndian:e,sampleSize:i}=Lt(t.track.source._codec),a=+e;return de("pcmC",0,0,[Te(a),Te(8*i)])},Ep=t=>{D(t.info.primingPacket);const e=am(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Ee(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),ne("dac3",[...i])},Pp=t=>{D(t.info.primingPacket);const e=nm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),o=new Uint8Array(a),n=new Ee(o);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return ne("dec3",[...o])},Mp=t=>{D(t.info.primingPacket);const e=ym(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ne("ddts",[...Tm(e)])},Ap=(t,e)=>ne(t,[Array(6).fill(0),se(1)],[s2[e.track.source._codec](e)]),Ip=t=>ne("vttC",[...st.encode(t.info.config.description)]),Bp=t=>de("stts",0,0,[K(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[K(e.sampleCount),K(e.sampleDelta)])]),Fp=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return de("stss",0,0,[K(e.length),e.map(([i])=>K(i+1))])},Rp=t=>de("stsc",0,0,[K(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[K(e.firstChunk),K(e.samplesPerChunk),K(1)])]),zp=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Lt(t.track.source._codec);return de("stsz",0,0,[K(e*t.info.numberOfChannels),K(t.samples.reduce((i,a)=>i+ye(a.duration,t.timescale),0))])}return de("stsz",0,0,[K(0),K(t.samples.length),t.samples.map(e=>K(e.size))])},Op=t=>t.finalizedChunks.length>0&&Ze(t.finalizedChunks).offset>=2**32?de("co64",0,0,[K(t.finalizedChunks.length),t.finalizedChunks.map(e=>ct(e.offset))]):de("stco",0,0,[K(t.finalizedChunks.length),t.finalizedChunks.map(e=>K(e.offset))]),Hp=t=>de("ctts",1,0,[K(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[K(e.sampleCount),bt(e.sampleCompositionTimeOffset)])]),Lp=t=>{let e=1/0,i=-1/0,a=1/0,o=-1/0;D(t.compositionTimeOffsetTable.length>0),D(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,ye(r.timestamp,t.timescale)),o=Math.max(o,ye(r.timestamp+r.duration,t.timescale))}const n=Math.max(-e,0);return o>=2**31?null:de("cslg",0,0,[bt(n),bt(e),bt(i),bt(a),bt(o)])},Np=t=>ne("mvex",void 0,t.map(Up)),Up=t=>de("trex",0,0,[K(t.track.id),K(1),K(0),K(0),K(0)]),tr=(t,e)=>ne("moof",void 0,[qp(t),...e.map(Dp)]),qp=t=>de("mfhd",0,0,[K(t)]),ir=t=>{let e=0,i=0;const a=0,o=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|a<<8|o},Dp=t=>ne("traf",void 0,[$p(t),Wp(t),jp(t)]),$p=t=>{D(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:ir(i)};return de("tfhd",0,e,[K(t.track.id),K(a.duration),K(a.size),K(a.flags)])},Wp=t=>(D(t.currentChunk),de("tfdt",1,0,[ct(ye(t.currentChunk.startTimestamp,t.timescale))])),jp=t=>{D(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),a=t.currentChunk.samples.map(ir),o=t.currentChunk.samples.map(h=>ye(h.timestamp-h.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),r=new Set(a),l=new Set(o),c=r.size===2&&a[0]!==a[1],u=n.size>1,d=s.size>1,m=!c&&r.size>1,f=l.size>1||[...l].some(h=>h!==0);let p=0;return p|=1,p|=4*+c,p|=256*+u,p|=512*+d,p|=1024*+m,p|=2048*+f,de("trun",1,p,[K(t.currentChunk.samples.length),K(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?K(a[0]):[],t.currentChunk.samples.map((h,g)=>[u?K(e[g]):[],d?K(i[g]):[],m?K(a[g]):[],f?bt(o[g]):[]])])},Vp=t=>ne("mfra",void 0,[...t.map(Gp),Kp()]),Gp=t=>de("tfra",1,0,[K(t.track.id),K(63),K(t.finalizedChunks.length),t.finalizedChunks.map(i=>[ct(ye(i.samples[0].timestamp,t.timescale)),ct(i.moofOffset),K(i.trafIndex+1),K(1),K(1)])]),Kp=()=>de("mfro",0,0,[K(0)]),Xp=()=>ne("vtte"),Zp=(t,e,i,a,o)=>ne("vttc",void 0,[o!==null?ne("vsid",[bt(o)]):null,i!==null?ne("iden",[...st.encode(i)]):null,e!==null?ne("ctim",[...st.encode(Qm(e))]):null,a!==null?ne("sttg",[...st.encode(a)]):null,ne("payl",[...st.encode(t)])]),Qp=t=>ne("vtta",[...st.encode(t)]),Yp=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const o=e2(a);o&&e.push(o)}else if(i==="mdta"){const o=t2(a);o&&e.push(o)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&Jp(e,t.output._metadataTags);return e.length===0?null:ne("udta",void 0,e)},Jp=(t,e)=>{for(const{key:i,value:a}of as(e))switch(i){case"title":t.push(ft("©nam",a));break;case"description":t.push(ft("©des",a));break;case"artist":t.push(ft("©ART",a));break;case"album":t.push(ft("©alb",a));break;case"albumArtist":t.push(ft("albr",a));break;case"genre":t.push(ft("©gen",a));break;case"date":t.push(ft("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(ft("©cmt",a));break;case"lyrics":t.push(ft("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Ot(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(o=>o.type===i)||(typeof a=="string"?t.push(ft(i,a)):a instanceof Uint8Array&&t.push(ne(i,Array.from(a))))}},ft=(t,e)=>{const i=st.encode(e);return ne(t,[se(i.length),se(sr("und")),Array.from(i)])},ar={"image/jpeg":13,"image/png":14,"image/bmp":27},or=(t,e)=>{const i=[];for(const{key:a,value:o}of as(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:Je(o)});break;case"description":i.push({key:e?"description":"©des",value:Je(o)});break;case"artist":i.push({key:e?"artist":"©ART",value:Je(o)});break;case"album":i.push({key:e?"album":"©alb",value:Je(o)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Je(o)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Je(o)});break;case"genre":i.push({key:e?"genre":"©gen",value:Je(o)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Je(o)});break;case"date":i.push({key:e?"date":"©day",value:Je(o.toISOString().slice(0,10))});break;case"images":for(const n of o)n.kind==="coverFront"&&i.push({key:"covr",value:ne("data",[K(ar[n.mimeType]??0),K(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${o}/${t.tracksTotal}`:o.toString();i.push({key:"track",value:Je(n)})}else i.push({key:"trkn",value:ne("data",[K(0),K(0),se(0),se(o),se(t.tracksTotal??0),se(0)])});break;case"discNumber":e||i.push({key:"disc",value:ne("data",[K(0),K(0),se(0),se(o),se(t.discsTotal??0),se(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Ot(a)}if(t.raw)for(const a in t.raw){const o=t.raw[a];o==null||!e&&a.length!==4||i.some(n=>n.key===a)||(typeof o=="string"?i.push({key:a,value:Je(o)}):o instanceof Uint8Array?i.push({key:a,value:ne("data",[K(0),K(0),Array.from(o)])}):o instanceof ss&&i.push({key:a,value:ne("data",[K(ar[o.mimeType]??0),K(0),Array.from(o.data)])}))}return i},e2=t=>{const e=or(t,!1);return e.length===0?null:de("meta",0,0,void 0,[Ro(!1,"mdir","","appl"),ne("ilst",void 0,e.map(i=>ne(i.key,void 0,[i.value])))])},t2=t=>{const e=or(t,!0);return e.length===0?null:ne("meta",void 0,[Ro(!1,"mdta",""),de("keys",0,0,[K(e.length)],e.map(i=>ne("mdta",[...st.encode(i.key)]))),ne("ilst",void 0,e.map((i,a)=>{const o=String.fromCharCode(...K(a+1));return ne(o,void 0,[i.value])}))])},Je=t=>ne("data",[K(1),K(0),...st.encode(t)]),i2=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},a2={avc:yp,hevc:wp,vp8:er,vp9:er,av1:kp,prores:null},nr=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},o2=(t,e)=>{switch(t){case"aac":return zo;case"mp3":return zo;case"opus":return Sp;case"vorbis":return zo;case"flac":return xp;case"ac3":return Ep;case"eac3":return Pp;case"dts":return Mp}if(e)switch(t){case"pcm-s24":return Et;case"pcm-s24be":return Et;case"pcm-s32":return Et;case"pcm-s32be":return Et;case"pcm-f32":return Et;case"pcm-f32be":return Et;case"pcm-f64":return Et;case"pcm-f64be":return Et}else switch(t){case"pcm-s16":return ut;case"pcm-s16be":return ut;case"pcm-s24":return ut;case"pcm-s24be":return ut;case"pcm-s32":return ut;case"pcm-s32be":return ut;case"pcm-f32":return ut;case"pcm-f32be":return ut;case"pcm-f64":return ut;case"pcm-f64be":return ut}return null},n2={webvtt:"wvtt"},s2={webvtt:Ip},sr=t=>{D(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Oo{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){D(!this.started),this.target._start(),this.started=!0}write(e){D(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return D(this.started&&!this.finalized),this.target._flush()}async finalize(){D(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let o=this.trackedWrites.byteLength;for(;o<a;)o*=2;if(o!==this.trackedWrites.byteLength){const n=new Uint8Array(o);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class yt extends ko{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new r2(this,e)}}const Ho=2**16,Lo=2**32;class Wa extends yt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Ho,{maxByteLength:Lo})}catch{this._buffer=new ArrayBuffer(Ho),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Ho);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>Lo)throw new Error(`ArrayBuffer exceeded maximum size of ${Lo} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),o=new Uint8Array(a);o.set(this._bytes,0),this._buffer=a,this._bytes=o}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class r2 extends yt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class No{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const et=57600,l2=2082844800,c2=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ye=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class u2 extends Zm{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Wa,this.auxWriter=new Oo(this.auxTarget,!1),this.auxBoxWriter=new qa(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Qn(),this.creationTime=Math.floor(Date.now()/1e3)+l2,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof hr,this.isCmaf=i instanceof dr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof dr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof Wa),this.boxWriter=new qa(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Wa?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),o=new Oo(a,!0);o.start(),this.initWriter=o,this.initBoxWriter=new qa(o)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(D(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(Jm({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:o,start:n}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(o,n)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(D(this.writer),D(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Da(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return _m({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const o=this.trackDatas.find(f=>f.track===e);if(o)return o;ds(a,e.source._codec),D(a),D(a.decoderConfig);const n={...a.decoderConfig};D(n.codedWidth!==void 0),D(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=qh(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=Dh(f),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=Vh(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=Jh(f),s=!0}const r=dh(1/(e.metadata.frameRate??et),1e6).den,l=n.displayAspectWidth,c=n.displayAspectHeight,u=l===void 0||c===void 0?{num:1,den:1}:os({num:l*n.codedHeight,den:c*n.codedWidth}),d=n.codec==="ap4h"||n.codec==="ap4x",m={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:u,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:d},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(m),this.trackDatas.sort((f,p)=>f.track.id-p.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),m}getAudioTrackData(e,i,a){const o=this.trackDatas.find(l=>l.track===e);if(o)return o;hs(a,e.source._codec),D(a),D(a.decoderConfig);const n={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=Ss(xi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=Ra[l.samplingFrequencyIndex],u=To[l.channelConfiguration];if(c===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");n.description=rs({objectType:l.objectType,sampleRate:c,numberOfChannels:u}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&Qe.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(n=>n.track===e);if(a)return a;Oh(i),D(i),D(i.config);const o={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(o),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}async addEncodedVideoPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,a);let s=i.data;if(n.info.requiresAnnexBTransformation){const l=[...wi(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Uh(l,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,r)}finally{o()}}async addEncodedAudioPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,a);let s=i.data;if(n.info.requiresAdtsStripping){const u=Ss(xi.tempFromBytes(s));if(!u)throw new Error("Expected ADTS frame, didn't get one.");const d=u.crcCheck===null?Cm:Sm;s=s.subarray(d)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(n.info.requiresPcmTransformation){const d=Lt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(l=s.byteLength/d/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const m=r-n.info.expectedNextPcmPacketTimestamp;if(m<.01)r=n.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,m);r=n.info.expectedNextPcmPacketTimestamp+f}}n.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(n,s,r,l,i.type);await this.registerSample(n,c)}finally{o()}}async padWithSilence(e,i,a){const o=ye(a,e.timescale);if(a=o/e.timescale,o>0){const{sampleSize:n,silentValue:s}=Lt(e.info.decoderConfig.codec),r=o*e.info.numberOfChannels,l=new Uint8Array(n*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const o=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,a);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{o()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)D(c.timestamp<=i),D(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const o=[...a].sort((c,u)=>c-u),n=o[0],s=o[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const c=Xp();this.auxBoxWriter.writeBox(c);const u=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const u=e.cueQueue[c];if(u.timestamp>=s)break;Vs.lastIndex=0;const d=Vs.test(u.text),m=u.timestamp+u.duration;let f=e.cueToSourceId.get(u);if(f===void 0&&s<m&&(f=e.nextSourceId++,e.cueToSourceId.set(u,f)),u.notes){const h=Qp(u.notes);this.auxBoxWriter.writeBox(h)}const p=Zp(u.text,d?n:null,u.identifier??null,u.settings??null,f??null);this.auxBoxWriter.writeBox(p),m===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,n,s-n,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,o,n){return{timestamp:a,decodeTimestamp:a,duration:o,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:ye(o,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let o=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],r=ye(s.duration,e.timescale);o+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:o,sampleDelta:1});else{const n=Ze(e.timeToSampleTable);n.sampleCount+=o}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(o=>o.timestamp).sort((o,n)=>o-n);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let o=0;o<e.timestampProcessingQueue.length;o++){const n=e.timestampProcessingQueue[o];n.decodeTimestamp=a[o];const s=ye(n.timestamp-n.decodeTimestamp,e.timescale),r=ye(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){D(e.lastSample);const l=ye(n.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(D(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let u=Ze(e.timeToSampleTable);if(D(u),u.sampleCount===1){u.sampleDelta=c;const m=e.timeToSampleTable[e.timeToSampleTable.length-2];m&&m.sampleDelta===c&&(m.sampleCount++,e.timeToSampleTable.pop(),u=m)}else u.sampleDelta!==c&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:c}));u.sampleDelta===r?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const d=Ze(e.compositionTimeOffsetTable);D(d),d.sampleCompositionTimeOffset===s?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=ye(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,D(e.lastSample),D(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){D(i.type==="key");const o=ye(i.timestamp,e.timescale,!1),n=Math.round(o-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const o=e.track.metadata.maximumPacketCount;if(D(o!==void 0),e.samples.length>o)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${o}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const o=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});o>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=o>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),D(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(D(!this.isFragmented),D(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,o)=>a+ye(o.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ze(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)D(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(D(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<a&&(i=n,a=n.sampleQueue[0].timestamp)}if(!i)break;const o=i.sampleQueue.shift();await this.addSampleToTrack(i,o)}}async finalizeFragment(e=!this.isCmaf){if(D(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;D(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const p=Ei(this);if(f.writeBox(p),this.formatOptions.onMoov){const{data:h,start:g}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(h,g)}if(this.isCmaf){D(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new qa(this.writer);const h=this.boxWriter.measureBox(Ys()),g=this.boxWriter.measureBox(Js(this,0));this.segmentHeaderSize=h+g,this.writer.seek(this.segmentHeaderSize)}}D(this.writer),D(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,o=tr(a,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(o);let r=s+xo,l=1/0;for(let f=0;f<i.length;f++){const p=i[f];p.currentChunk.offset=r,p.currentChunk.moofOffset=n,p.currentChunk.trafIndex=f;for(const h of p.currentChunk.samples)r+=h.size;l=Math.min(l,p.currentChunk.startTimestamp)}const c=r-s,u=c>=2**32;if(u)for(const f of i)f.currentChunk.offset+=Cs-xo;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=tr(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:f,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,p,l)}D(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const m=Da(u);m.size=c,this.boxWriter.writeBox(m),this.writer.seek(s+(u?Cs:xo));for(const f of i)for(const p of f.currentChunk.samples)this.writer.write(p.data),p.data=null;if(this.formatOptions.onMdat){const{data:f,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,p)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){D(this.writer),D(this.boxWriter),this.ensureOneEnabledTrack();const e=Ei(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;D(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Da(!0),this.boxWriter.writeBox(this.mdat);for(const o of this.trackDatas){for(const n of o.sampleQueue)await this.addSampleToTrack(o,n);o.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){D(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;D(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(o=>o.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(o=>o.type===e);if(i.length===0)continue;if(!i.some(o=>o.track.metadata.disposition?.default!==!1)){const o=i[0];o.track.metadata.disposition={...o.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){D(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const o=i.samples[a];o.timestamp-=i.startTimestampOffset,o.decodeTimestamp-=i.startTimestampOffset}if(D(this.writer),D(this.boxWriter),this.fastStart==="in-memory"){this.mdat=Da(!1);let i;for(let o=0;o<2;o++){const n=Ei(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)D(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=Ei(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const o of this.finalizedChunks)for(const n of o.samples)D(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Ys()),this.boxWriter.writeBox(Js(this,i))}else{const i=this.writer.getPos(),a=Vp(this.trackDatas);this.boxWriter.writeBox(a);const o=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(o)}else{D(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);D(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const o=Ei(this);if(this.fastStart==="reserve"){D(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(ep(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class f2{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){D(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,o)=>a[o*e]:e===1&&i===4?this.channelMixer=(a,o,n)=>a[o*e]*+(n<2):e===1&&i===6?this.channelMixer=(a,o,n)=>a[o*e]*+(n===2):e===2&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .5*(a[n]+a[n+1])}:e===2&&i===4?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .25*(a[n]+a[n+1]+a[n+2]+a[n+3])}:e===4&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return .5*(a[s+n]+a[s+n+2])}:e===4&&i===6?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]:n===2||n===3?0:a[s+n-2]}:e===6&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return Math.SQRT1_2*(a[n]+a[n+1])+a[n+2]+.5*(a[n+4]+a[n+5])}:e===6&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return a[s+n]+Math.SQRT1_2*(a[s+2]+a[s+n+4])}:e===6&&i===4?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]+Math.SQRT1_2*a[s+2]:a[s+n+2]}:this.channelMixer=(a,o,n)=>n<e?a[o*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),D(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),o=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(o,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,r=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const u=c-this.bufferStartFrame;D(u<this.bufferSizeInFrames);const f=(c/this.targetSampleRate-n)*this.sourceSampleRate,p=Math.floor(f),h=Math.ceil(f),g=f-p;for(let y=0;y<this.targetNumberOfChannels;y++){let w=0,b=0;p>=0&&p<e.numberOfFrames&&(w=this.channelMixer(o,p,y)),h>=0&&h<e.numberOfFrames&&(b=this.channelMixer(o,h,y));const T=w+g*(b-w),_=u*this.targetNumberOfChannels+y;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=u:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,u)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;D(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new He({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var d2=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},h2=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class Uo{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class rr extends Uo{constructor(e){if(super(),this._connectedTrack=null,!gt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${gt.join(", ")}.`);this._codec=e}}const lr=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class m2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new ts,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const o=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||r&&s!=="passThrough"){let d=n.transform?.width,m=n.transform?.height,f=n.transform?.fit??"fill";r&&s!=="passThrough"&&(D(this.outputWidth),D(this.outputHeight),D(s!=="deny"),d=this.outputWidth,m=this.outputHeight,f=s);const p=await e.transform({width:d,height:m,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:f,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=p.displayWidth,this.outputHeight=p.displayHeight),i&&e.close(),e=p,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const u=n.transform?.frameRate;if(u!==void 0){const d=e.timestamp+e.duration,m=es(e.timestamp,u);if(this.frameRateLastSample!==null)if(m<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(m,a);e===o&&(e=e.clone(),i=!0),e.setTimestamp(m),e.setDuration(1/u),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=m,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let o;if(a.transform?.process){let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const r of n)r instanceof Re?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Re(r)):s.push(new Re(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of n)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}o=s}else o=[e];try{for(const n of o){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(n.timestamp/s),l={...this.defaultEncodeOptions,...n.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const u=n.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(u,c)).catch(m=>this.setError(m)).finally(()=>{this.customEncoderQueueSize--,u.close()});this.customEncoderQueueSize>=4&&await d}else{D(this.encoder);const u=n.toVideoFrame(),d=Zn(this.preciseTimings,u.timestamp,f=>f.microsecondTimestamp),m=d!==-1?this.preciseTimings[d]:null;if(m&&m.microsecondTimestamp===u.timestamp?(m.timestamp!==n.timestamp&&(m.timestampIsValid=!1),m.duration!==n.duration&&(m.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:u.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!u.format&&!u.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(u,c)}finally{u.close()}}else{this.splitter||(this.splitter=new p2);const{colorFrame:p,alphaFrame:h}=await this.splitter.split(u);this.alphaFrameQueue.push(h);try{this.encoder.encode(p,c)}finally{p.close()}}else try{this.encoder.encode(u,c)}finally{u.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of o)n!==e&&n.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;D(this.frameRateLastSample);const o=Math.round((e-this.frameRateLastTimestamp)*a);for(let n=1;n<o;n++){const s={stack:[],error:void 0,hasError:!1};try{const r=d2(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+n/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{h2(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=Ua(this.encodingConfig.quality,this.encodingConfig.bitrate);D(i!==void 0);const a=Ls({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let o=null,n;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),n=Ws.find(u=>u.supports(this.encodingConfig.codec,l)),n){o=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){o=r;break}}catch{}}if(!o){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:u})=>u!==null?`quantizer ${u}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=o.config;if(o.quantizer!==null&&(this.defaultEncodeOptions=$s(this.encodingConfig.codec,o.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof lt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");lr(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,u=0;const d=(f,p,h)=>{const g={};if(p){const _=new Uint8Array(p.byteLength);p.copyTo(_),g.alpha=_}let y=lt.fromEncodedChunk(f,g);const w=Zn(this.preciseTimings,f.timestamp,_=>_.microsecondTimestamp),b=w!==-1?this.preciseTimings[w]:null;let T=null;this.emittedEncoderPackets===0&&y.type==="delta"&&h?.decoderConfig&&(T=im(this.encodingConfig.codec,h.decoderConfig,y.data)),(b&&b.microsecondTimestamp===f.timestamp||T!==null)&&(y=y.clone({timestamp:b?.timestampIsValid?b.timestamp:void 0,duration:b?.durationIsValid?b.duration:void 0,type:T??void 0})),lr(this.source._connectedTrack,y),this.encodingConfig.onEncodedPacket?.(y,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,y,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},m=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,p)=>{if(!this.alphaEncoder){d(f,null,p);return}const h=this.alphaFrameQueue.shift();D(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),u++,h.close(),r.push({chunk:f,meta:p})):u===0?d(f,null,p):(l.push(c+u),r.push({chunk:f,meta:p}))},error:f=>{f.stack=m,this.setError(f)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(p,h)=>{u--;const g=r.shift();for(D(g!==void 0),d(g.chunk,p,g.meta),c++;l.length>0&&l[0]===c;){l.shift();const y=r.shift();D(y!==void 0),d(y.chunk,null,y.meta)}},error:p=>{p.stack=f,this.setError(p)}}),this.alphaEncoder.configure(s)}}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=es(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await bh(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let qo=null;class p2{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!qo){const o=new Blob([`(${g2.toString()})()`],{type:"application/javascript"});qo=URL.createObjectURL(o)}this.worker=new Worker(qo),this.worker.addEventListener("message",o=>{const n=o.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",o=>{const n=new Error(o.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=Qn();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const g2=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:r}=n.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=n.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return o(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,u=l*c,d=Math.ceil(l/2),m=Math.ceil(c/2),f=u+d*m*2,p=new Uint8Array(f);for(let w=0,b=3;w<u;w++,b+=4)p[w]=n[b];p.fill(128,u);const h=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),g={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[p.buffer]},y=new VideoFrame(p,g);return{colorFrame:h,alphaFrame:y}},o=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,u=s.includes("P10"),d=s.includes("P12"),m=u||d?2:1;let f,p;s.startsWith("I420")?(f=Math.ceil(l/2),p=Math.ceil(c/2)):s.startsWith("I422")?(f=Math.ceil(l/2),p=c):(f=l,p=c);const h=l*c,g=f*p,y=h*m,w=g*m,b=h*m,T=y+w*2,_=s.replace("A",""),M=Math.ceil(l/2),P=Math.ceil(c/2),I=M*P,A=I*m,U=b+2*A,$=new Uint8Array(U),S=T;$.set(n.subarray(S,S+b),0);const F=b,k=u?512:d?2048:128;m===1?$.fill(k,F):new Uint16Array($.buffer,F,2*I).fill(k);const N=u?"I420P10":d?"I420P12":"I420",X=new VideoFrame(n.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),H={format:N,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[$.buffer]},ae=new VideoFrame($,H);return{colorFrame:X,alphaFrame:ae}}};class v2 extends rr{constructor(e){Lm(e),super(e.codec),this._encoder=new m2(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class cr extends Uo{constructor(e){if(super(),this._connectedTrack=null,!Ht.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Ht.join(", ")}.`);this._codec=e}}class b2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new ts,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new f2({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&zm(e.format)!==a.transform.sampleFormat){const o=Hm(e,a.transform.sampleFormat);i&&e.close(),e=o,i=!0}if(a.transform?.process)try{let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);try{for(const n of o)if(!(n instanceof He))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of o)await this.encodeSample(n,!0)}finally{for(const n of o)n instanceof He&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),o=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=o;else{const n=a-this.lastEndSampleIndex;if(n>=64){const s=new He({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),o=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await o,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{D(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(o=>this.encoder.addEventListener("dequeue",o,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){D(this.outputSampleSize),D(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:o,sampleRate:n,timestamp:s}=e,r=2048,l=[];for(let m=0;m<o;m+=r){const f=Math.min(r,e.numberOfFrames-m),p=f*a*this.outputSampleSize,h=new ArrayBuffer(p),g=new DataView(h);l.push({frameCount:f,view:g})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),u=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let m=0;m<a;m++){e.copyTo(u,{planeIndex:m,format:"f32-planar"});for(let f=0;f<l.length;f++){const{frameCount:p,view:h}=l[f];for(let g=0;g<p;g++)this.writeOutputValue(h,(g*a+m)*this.outputSampleSize,u[f*r+g])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:n}};for(let m=0;m<l.length;m++){const{frameCount:f,view:p}=l[m],h=p.buffer,g=m*r,y=new lt(new Uint8Array(h),"key",s+g/n,f/n);this.encodingConfig.onEncodedPacket?.(y,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,y,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,o=Ua(this.encodingConfig.quality,this.encodingConfig.bitrate),n=Us({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:o});this.encodingConfig.onEncoderConfig?.(n);const s=js.find(r=>r.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof lt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(Qe.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,u)=>{if(this.encodingConfig.codec==="aac"&&u?.decoderConfig){let m=!1;if(!u.decoderConfig.description||u.decoderConfig.description.byteLength<2?m=!0:m=_h(We(u.decoderConfig.description)).objectType===0,m){const f=Number(Ze(n.codec.split(".")));u.decoderConfig.description=rs({objectType:f,numberOfChannels:u.decoderConfig.numberOfChannels,sampleRate:u.decoderConfig.sampleRate})}}let d=lt.fromEncodedChunk(c);d=d.clone({timestamp:Jn(d.timestamp,n.sampleRate),duration:c.duration!=null?Jn(d.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,u),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,u).catch(m=>{this.setError(m)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(n)}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:o}=Lt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint8(s,Ie((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,r)=>{n.setInt8(s,Ie(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,r)=>{const l=Ie(Math.floor(r*32767),-32768,32767);n.setUint8(s,Vm(l))}:i==="alaw"?this.writeOutputValue=(n,s,r)=>{const l=Ie(Math.floor(r*32767),-32768,32767);n.setUint8(s,Gm(l))}:D(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint16(s,Ie((r+1)*32767.5,0,65535),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt16(s,Ie(Math.round(r*32767),-32768,32767),o):D(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,r)=>po(n,s,Ie((r+1)*83886075e-1,0,16777215),o):i==="signed"?this.writeOutputValue=(n,s,r)=>sh(n,s,Ie(Math.round(r*8388607),-8388608,8388607),o):D(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint32(s,Ie((r+1)*21474836475e-1,0,4294967295),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt32(s,Ie(Math.round(r*2147483647),-2147483648,2147483647),o):i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat32(s,r,o):D(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat64(s,r,o):D(!1);break;default:Ot(a),D(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class y2 extends cr{constructor(e){Nm(e),super(e.codec),this._accumulatedTime=0,this._encoder=new b2(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=He._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class w2 extends Uo{constructor(e){if(super(),this._connectedTrack=null,!bi.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${bi.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ur{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>gt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Ht.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>bi.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class Do extends ur{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new u2(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class fr extends Do{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...gt,..._o,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...bi]}_codecUnsupportedHint(e){return new hr().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class dr extends Do{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...gt,..._o,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...bi]}}class hr extends Do{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...gt,...Ht]}_codecUnsupportedHint(e){return new fr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const mr=["video","audio","subtitle"];class Pi{constructor(e,i,a,o,n){this.id=e,this.output=i,this.type=a,this.source=o,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Pi))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=ns(this.metadata.group),a=ns(e.metadata.group);for(const o of i)if(this.type!==e.type&&a.some(r=>o===r)||a.some(r=>o._pairedGroups.has(r)))return!0;return!1}}class k2 extends Pi{constructor(e,i,a,o){super(e,i,"video",a,o)}}class T2 extends Pi{constructor(e,i,a,o){super(e,i,"audio",a,o)}}class _2 extends Pi{constructor(e,i,a,o){super(e,i,"subtitle",a,o)}}class Mi{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Mi))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const $o=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!fh(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Th(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Mi)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Mi))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class C2 extends ko{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Mi,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Xn,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof ur))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof yt||e.target instanceof No))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof yt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof yt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof yt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){D(this._target instanceof No);const i=this._target.getTarget(e),a=o=>{if(!(o instanceof yt))throw new TypeError("getTarget must return a Target.");return o};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){D(this._target instanceof No);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(D(this._initTarget!==null),this._initTarget instanceof yt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof yt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=o=>(this.state==="canceled"?o._close():this._rememberTarget(o),this._emit("target",{target:o,request:e,isRoot:!0}),this._rootTarget=o,o);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new Oo(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof rr))throw new TypeError("source must be a VideoSource.");if($o(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&ds({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof lt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new k2(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof cr))throw new TypeError("source must be an AudioSource.");if($o(i),i.decoderConfig!==void 0&&hs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof lt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new T2(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof w2))throw new TypeError("source must be a SubtitleSource.");$o(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new _2(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(kh(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),o=i[e.type].max;if(a===o)throw new Error(o===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${o} ${e.type} track${o===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of mr){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of mr){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)throw new Error(n===e[a].max?`${this.format._name} requires exactly ${n} ${a} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${a} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ke._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const o=this.tracks.map(n=>n.source._start());await Promise.all(o)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ke._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ke._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ke._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const S2={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},x2=new Set(["window","buddy","dancer"]);function pr(t){return!x2.has(t.typeId)}const E2=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function P2(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!E2.has(i))return a}));return JSON.stringify(e,null,2)}function M2(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>A2(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=S2[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(pr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(pr)}))}:i.data})),e}function A2(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function I2(t,e){const i=new Blob([e],{type:"application/json"});Gt(t,i)}function Gt(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Pt=1280,Mt=1920,B2=30,gr=8,F2=16,vr=.97,Wo=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function br(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:tt(t*a),height:tt(e*a)}}function R2(t,e){const i=t/Math.max(e,1);let a="16:9",o=1/0;for(const n of Wo){const s=Math.abs(i-n.rw/n.rh);s<o&&(o=s,a=n.id)}return a}function yr(t,e,i=1280){if(t<2||e<2)return br(16,9,i);const a=Math.max(t,e),o=i/a;return{width:tt(t*o),height:tt(e*o)}}function z2(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function wr(t){return Math.min(B2,Math.max(12,Math.round(t||30)))}function kr(t){return Math.min(32,Math.max(1,t||4))}function Tr(t,e,i){const a=O(t||12,gr,F2),o=e*i/(Pt*720);return Math.min(20,Math.max(gr,Math.round(a*Math.max(1,o))))}const O2=Mt,H2=Mt;function jo(t,e=!1){const i=e?O2:H2;return Jo(t.exportSettings.width,t.exportSettings.height,i,i)}async function L2(t,e,i){const{width:a,height:o,format:n,quality:s,filename:r}=e.exportSettings,l=n==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,tt(a),tt(o),l,n==="jpg"?Math.max(s,vr):s);Gt(`${r}.${n==="jpg"?"jpg":"png"}`,c)}async function N2(t,e,i){const{fps:a,duration:o,filename:n,quality:s}=e.exportSettings,{width:r,height:l}=jo(e,!1),c=Math.max(1,Math.round(o*a)),u=new ih,d=u.folder(n)??u,m=document.createElement("canvas");for(let p=0;p<c;p++){const h=p/a;i?.(p,c),t.paintFrame(e,h,r,l,m);const g=await j2(m,"image/png",s);d.file(`${n}_${String(p).padStart(5,"0")}.png`,await g.arrayBuffer()),await Vo()}const f=await u.generateAsync({type:"blob"});Gt(`${n}_sequence.zip`,f)}async function _r(t,e,i,a=!1){const o=await Cr(t,e,$2(),i,a);Gt(`${e.exportSettings.filename}.webm`,o)}async function U2(t,e,i,a=!1){try{return await q2(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(o){const n=W2();if(n){const r=await Cr(t,e,n,i,a);return Gt(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await _r(t,e,i,a),`MP4 not available (${o instanceof Error?o.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function q2(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const o=wr(e.exportSettings.fps),n=kr(e.exportSettings.duration),{width:s,height:r}=jo(e,a),l=new ze({bitrate:Tr(e.exportSettings.bitrate,s,r)*1e6}),c=new fr({fastStart:"in-memory"}),d=await Wm(["avc","hevc"].filter(b=>c.getSupportedVideoCodecs().includes(b)),{width:s,height:r,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const m=new Wa,f=new C2({format:c,target:m}),p=new v2({codec:d,quality:l,keyFrameInterval:1});f.addVideoTrack(p,{frameRate:o});const h=await D2(f,c,e,n);t.resetTemporal();const g=document.createElement("canvas");await f.start();try{h&&await h.audioSource.add(h.buffer);const b=Math.max(1,Math.round(n*o)),T=1/o,_=e.exportSettings.loopClose!==!1;let M=null;for(let P=0;P<b;P++){const I=co(P/o,n,e.playback.mode,1,!0);i?.(P,b),t.paintFrame(e,I,s,r,g),P===0&&_?M=xr(g):Sr(g,M,P,b,_);const A=new Re(g,{timestamp:P*T,duration:T});await p.add(A,{keyFrame:P%o===0}),A.close(),await Vo()}await f.finalize()}catch(b){try{await f.cancel()}catch{}throw b}const y=m.buffer;if(!y||y.byteLength<32)throw new Error("MP4 mux produced an empty file");const w=y.slice(0);return Gt(`${e.exportSettings.filename}.mp4`,new Blob([w],{type:"video/mp4"})),!!h}async function D2(t,e,i,a){const o=await ld(Ca(i));if(!o||o.length<32||o.duration<=0)return null;const n=i.exportSettings.loopClose!==!1;let s;try{s=rd(o,a,n)}catch{return null}const r=Math.min(2,Math.max(1,s.numberOfChannels)),l=s.sampleRate>=46e3?48e3:44100,c=e.getSupportedAudioCodecs(),u=["aac","mp3","opus"].filter(f=>c.includes(f)),d=await jm(u.length?u:c,{numberOfChannels:r,sampleRate:l});if(!d)return null;const m=new y2({codec:d,quality:qm,transform:{numberOfChannels:r,sampleRate:l}});return t.addAudioTrack(m),{audioSource:m,buffer:s}}async function Cr(t,e,i,a,o=!1){const n=wr(e.exportSettings.fps),s=kr(e.exportSettings.duration),{width:r,height:l}=jo(e,o),c=document.createElement("canvas");c.width=r,c.height=l;const u=c.getContext("2d");if(!u)throw new Error("No 2d context");const d=c.captureStream(0),m=d.getVideoTracks()[0],f=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:Tr(e.exportSettings.bitrate,r,l)*1e6}),p=[];f.ondataavailable=b=>{b.data.size&&p.push(b.data)},t.resetTemporal(),f.start(200);const h=Math.max(1,Math.round(s*n)),g=document.createElement("canvas"),y=e.exportSettings.loopClose!==!1;let w=null;for(let b=0;b<h;b++){const T=co(b/n,s,e.playback.mode,1,!0);a?.(b,h),t.paintFrame(e,T,r,l,g),b===0&&y?w=xr(g):Sr(g,w,b,h,y),u.drawImage(g,0,0,r,l),m.requestFrame?.(),await Vo()}if(await new Promise(b=>{f.onstop=()=>b(),f.stop()}),d.getTracks().forEach(b=>b.stop()),!p.length)throw new Error("recorder produced no data");return new Blob(p,{type:i})}function $2(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function W2(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Sr(t,e,i,a,o){if(!o||!e||i===0)return;const n=z2(i,a);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function xr(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Vo(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function j2(t,e,i){return new Promise((a,o)=>{t.toBlob(n=>{n?a(n):o(new Error("frame capture failed"))},e,i)})}async function V2(t,e,i,a,o=!1){const n=e.exportSettings.format;return n==="mp4"?U2(t,e,a,o):n==="webm"?_r(t,e,a,o):n==="sequence"?N2(t,e,a):L2(t,e,i)}const G2=768,K2="sana",Er=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function X2(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),o=G2/Math.max(i,a);return{width:tt(i*o,256),height:tt(a*o,256)}}function Z2(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,o=i>>8&255,n=i&255;let s=Er[0],r=1e9;for(const l of Er){const c=(a-l.r)**2+(o-l.g)**2+(n-l.b)**2;c<r&&(r=c,s=l)}return s.name}function Q2(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",o="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${o}`;const n=e.map(Z2).filter((s,r,l)=>l.indexOf(s)===r).slice(0,4);return`${a}, palette of ${n.join(", ")}, ${o}`}function Y2(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function J2(t,e,i,a=4){const o=[];for(let n=0;n<3;n++)for(let s=0;s<3;s++){const r=Math.min(e-1,Math.floor((s+.5)/3*e)),c=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+r)*4,u=t[c],d=t[c+1],m=t[c+2],f=Y2(u,d,m);o.some(h=>(h.r-u)**2+(h.g-d)**2+(h.b-m)**2<1400)||o.push({hex:f,r:u,g:d,b:m})}return o.slice(0,a).map(n=>n.hex)}function eg(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return J2(a.data,e.width,e.height)}function tg(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function ig(t,e,i,a,o=K2){const n=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(o)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${s}`}async function ag(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const o=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!o.ok)throw o.status===429||o.status>=500?new Error(`busy:${o.status}`):new Error(`Generation failed (${o.status}). Try a shorter prompt.`);const n=await o.arrayBuffer(),s=new Uint8Array(n),r=o.headers.get("content-type")||"";if(!tg(s,r))throw new Error("Generation returned no image. Try again.");const l=r.startsWith("image/")?r.split(";")[0]:"image/jpeg";return new Blob([n],{type:l})}catch(o){throw o instanceof Error&&o.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):o}finally{clearTimeout(a)}}async function og(t){const{width:e,height:i}=X2(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let o=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await ag(ig(a,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(r){o=r instanceof Error?r:new Error(String(r))}}const n=o?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":o?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function Se(t){const e=E.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Ai(t){if(!t)return;const e=E.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Le(t,e,i=!0){E.setProject(a=>({...a,layers:a.layers.map(o=>o.id===t?e(o):o)}),i)}function wt(t,e=!0){E.setProject(i=>{const a=e?i.layers.map(o=>o.id===E.state.ui.selectedLayerId?{...o,sourceId:t.id}:o):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),E.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function ng(t){const e=E.project.sources.filter(s=>s.kind==="audio");for(const s of e)Gn(s);if(E.setProject(s=>{const r=s.sources.filter(u=>u.kind!=="audio"),l=s.layers.map(u=>e.some(d=>d.id===u.sourceId)?{...u,sourceId:r.find(d=>d.kind!=="audio")?.id??null}:u),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),xa(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",o=t.beats?.length?`${t.beats.length} hits`:"",n=[i,a,o].filter(Boolean).join(" · ");E.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function ja(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&E.patchUi({status:`reading ${i.name}…`});const o=await Gd(i);if(o.kind==="audio"){ng(o);continue}if(e){const n=E.state.ui.selectedSourceId;E.setProject(s=>({...s,sources:s.sources.map(r=>r.id===n?{...o,id:r.id}:r)})),E.patchUi({status:`replaced ${i.name}`})}else wt(o,!0)}catch(a){E.patchUi({status:a instanceof Error?a.message:"import failed"})}}function sg(){E.setProject(e=>{const i=e.sources.find(o=>o.kind!=="audio")?.id??null,a=zn(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=E.project.layers.at(-1);E.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function rg(t){E.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Fe("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:Fe("fx")}));const o=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(o+1,0,a),{...e,layers:n}})}function lg(t){E.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Go(t){const e=Se(E.project);if(!e)return;const i=Rn(t);Le(e.id,a=>({...a,effects:[...a.effects,i]})),E.patchUi({selectedEffectId:i.id})}function cg(t,e){Le(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function Pr(t,e,i){Le(t,a=>{const o=a.effects.findIndex(l=>l.id===e),n=o+i;if(o<0||n<0||n>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(o,1);return s.splice(n,0,r),{...a,effects:s}})}function ug(t,e){Le(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function Ii(t,e,i,a,o=!0){Le(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),o)}function Kt(t,e=!1){const i=E.state.ui;(t==="all"||t==="selected")&&E.setProject(o=>({...o,seed:o.seed+1+(Date.now()&255)>>>0}),!1),E.setProject(o=>{let s=In(o,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.includeCritters&&(s=An(s)),t==="all"&&i.includeIdol&&(s=wf(s)),s});const a=E.project.layers[0]?.effects.map(o=>o.typeId).join(" · ");E.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${E.project.seed}`})}function fg(){const t=Se(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(E.project.seed+Date.now())%9998;if(e){Ii(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Go("critters");const a=Se(E.project),o=Ai(a);a&&o?.typeId==="critters"&&Ii(a.id,o.id,"seed",i),E.patchUi({status:"stamped floaters"})}function dg(){const t=Se(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(E.project.seed+Date.now()+17)%9998;if(e){Ii(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Go("dancer");const a=Se(E.project),o=Ai(a);a&&o?.typeId==="dancer"&&Ii(a.id,o.id,"seed",i),E.patchUi({status:"stamped idol"})}function hg(){E.setProject(t=>Sf({...t,seed:t.seed+1+(Date.now()&255)>>>0})),E.patchUi({status:"new floater and idol seeds"})}async function mg(t){const e=E.project,{width:i,height:a}=Jo(e.exportSettings.width||1280,e.exportSettings.height||720,Mt,Mt);try{const o=await t.capture(e,e.playback.time,i,a,"image/png",vr),n=await jn(o,`print_${Date.now()}.png`);wt(n,!0),E.patchUi({status:"printed the live frame as a new still"})}catch(o){E.patchUi({status:o instanceof Error?o.message:"print failed"})}}function Mr(t){E.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Ar(){I2(`${E.project.name||"phosphene"}.phos.json`,P2(E.project)),E.patchUi({status:"project downloaded"})}async function pg(t){const e=await t.text(),i=M2(e);E.replace(i),E.patchUi({status:"project loaded — re-drop media if needed"})}function gg(){const t=prompt("Preset name",`look ${E.project.presets.length+1}`);if(!t)return;const e=no(E.project,t);E.setProject(i=>({...i,presets:[...i.presets,e]}))}function Ko(t){const e=E.project.presets.find(i=>i.id===t);e&&(E.setProject(i=>hf(i,e)),E.patchUi({status:`preset ${e.name}`}))}function vg(){const t=mf(E.project.presets,E.project.seed+Date.now());if(!t){E.patchUi({status:"no presets saved"});return}Ko(t.id)}function bg(t){const e=E.project.presets.find(i=>i.id===t);e&&E.setProject(i=>({...i,presets:[...i.presets,pf(e)]}))}function yg(t){E.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Ir(){const t=E.state.ui,e=Se(E.project),i=Ai(e),a=t.selectedParam?.paramId;if(!e||!i||!a){E.patchUi({status:"select a numeric parameter first"});return}const o=i.params[a];if(typeof o!="number"){E.patchUi({status:"keyframes are numeric"});return}const n={id:Fe("kf"),time:E.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:o,easing:"smooth"};E.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),E.patchUi({status:`key ${a} @ ${n.time.toFixed(2)}s`})}function wg(){E.setProject(t=>({...t,keyframes:[]}))}async function kg(){const t=E.project.sources.find(i=>i.id===E.state.ui.selectedSourceId);if(!t)return;const e=await Zd(t);e&&wt(e,!0)}function Br(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of E.project.sources)Gn(e);E.replace(On()),E.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Tg(){if(E.state.ui.generating)return;const t=E.state.ui.prompt.trim();if(!t){E.patchUi({status:"type a prompt first"});return}E.patchUi({generating:!0,status:"generating new image…"});try{const e=E.project.sources.find(c=>c.id===E.state.ui.selectedSourceId),i=E.state.ui.useSourceForGen;let a=[];const o=e?.frozenFrame||e?.bitmap||e?.video||null;i&&o&&(a=eg(o));const n=Q2(t,a,i&&a.length>0),s=E.project.seed+Date.now()>>>0,r=await og({prompt:n,seed:s,width:E.project.exportSettings.width,height:E.project.exportSettings.height,onStatus:c=>E.patchUi({generating:!0,status:c},!1)}),l=await jn(r,`gen_${s}.jpg`);wt(l,!0),E.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){E.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let Va=!1,Bi=null;function _g(t,e){Bi=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny ${E.project.cutEdit?.enabled?"acid":""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Chain can optionally wear Animal Chain parts (dragon, dog, ferret, caterpillar, zebra) on the same path. Hunt is a documentary camera on top of any move: watch wide, notice a stamp, snap in, follow, return. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Check <em>effects</em> (top bar, or under Effects on the right) if you also want a short stack from the right panel. Uncheck it for a clean collage. Wacky rolls a thicker stack when effects are on. No dancer. Rolls stay small and slower — no giant stamps, no frantic bounce/flip/flash.</li>
          <li><strong>Cut edit</strong> is the other randomizer. It listens to the MP3, finds the first downbeat, and cuts on that grid — not every stray onset. Snap / step / spot flip on the same frames. Some shots hold a bar or two. Some are two quick hits that settle.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music, Kitchen, Sky, Street, Arcade, Haunt, Sport, School. Each pack is its own stamp set — switching a kit replaces every icon. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Color</strong> packs (Brine, Candy, Ember, Neon…) recast washes and inks across any kit. <strong>Wash</strong> taps a color from the active pack. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is loaded and the clip keeps the music (aligned from the start of the clip). Stills and PNG sequences stay silent. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, tap <strong>720</strong> or <strong>1080</strong>, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). Clips save at 30 fps in HD so they stay sharp without a long wait. The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Sg(t),E.subscribe(()=>{Va||Xo(t)}),Xo(t)}async function Cg(t=!1){if(Bi&&!E.state.ui.exporting){E.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),E.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await V2(Bi,E.project,E.project.playback.time,(i,a)=>{E.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);E.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){E.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Sg(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,o=i.dataset.id;if(a==="save"&&Ar(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Br(),a==="imagine"&&Tg(),a==="seed-"&&Mr(-1),a==="seed+"&&Mr(1),a==="rand-all"&&Kt("all"),a==="rand-wacky"&&Kt("all",!0),a==="cut-edit"){const n=!E.project.cutEdit?.enabled;E.setProject(s=>({...s,cutEdit:{enabled:n,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),E.patchUi({status:n?E.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&hg(),a==="reprint"&&Bi&&mg(Bi),a==="rand-sel"&&Kt("selected"),a==="rand-param"){const n=i.dataset.paramId,s=Se(E.project),r=Ai(s);n&&s&&r&&E.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:n}},!1),Kt("param")}if(a==="help"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&kg(),a==="gen"){const n=i.dataset.kind??"plasma",s=Xt(),r=i.dataset.kit??(Ae(n)?It(s?.collageKit):void 0),l=i.dataset.move??(Ae(n)?un(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,u=Wt(n,r,l,Bg(s,c));wt(u,!0),E.patchUi({status:u.collageMove?`place · ${u.collageMove} · ${u.collageKit??""}${u.collageKitB?` · ${u.collageKitB}`:""}`:u.collageKit?`place · ${n} · ${u.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(a==="mash"){const n=i.dataset.kit??"love",s=Xt();if(s){const r=s.collageKitB===n||s.collageKit===n?void 0:n;ce(l=>Fr({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=Wt("wallpaper","sailor","rush",{kitB:n});wt(r,!0),E.patchUi({status:`mash · sailor · ${n}`})}}if(a==="wash"){const n=i.dataset.hex;n&&(ce(s=>({...s,colorA:n}),`wash · ${n}`)||(wt(Wt("wallpaper","sailor","rush",{wash:n}),!0),E.patchUi({status:`wash · ${n}`})))}if(a==="color-pack"){const n=di(i.dataset.pack),s=Xt();if(s){const r=It(s.collageKit),l=$t(r,n),c=(s.colorA??"").toLowerCase(),u=l.some(d=>d.toLowerCase()===c);ce(d=>({...d,collageColorPack:n,colorA:u?d.colorA:l[0],colorB:ht(r,n)}),`color · ${to[n]}`)}else{const r=Wt("wallpaper","sailor","rush",{colorPack:n});wt(r,!0),E.patchUi({status:`color · ${to[n]}`})}}if(a==="night"){const s=!Xt()?.collageNight;ce(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(wt(Wt("wallpaper","sailor","rush",{night:!0}),!0),E.patchUi({status:"night wash"}))}if(a==="camera"){const n=Qt(i.dataset.camera);ce(s=>({...s,collageCamera:n}),n==="hunt"?"camera · documentary search":"camera · fixed")}if(a==="camera-feel"){const n=aa(i.dataset.feel);ce(s=>({...s,collageCameraFeel:n}),`camera feel · ${n}`)}if(a==="hunt-select"){const n=oa(i.dataset.select);ce(s=>({...s,collageHuntSelect:n}),`subject select · ${n}`)}if(a==="hunt-focus"){const s=!Xt()?.collageHuntFocus;ce(r=>({...r,collageHuntFocus:s}),s?"manual focus on":"manual focus off")}if(a==="chain-animal"){const n=oi(i.dataset.animal);ce(s=>Fr({...s,collageChainAnimal:n}),n==="off"?"animal chain off":`animal chain · ${n}`)}if(a==="stamp-critters"&&fg(),a==="stamp-idol"&&dg(),a==="add-layer"&&sg(),a==="dup-layer"&&o&&rg(o),a==="del-layer"&&o&&lg(o),a==="sel-layer"&&o&&E.patchUi({selectedLayerId:o,selectedEffectId:E.project.layers.find(n=>n.id===o)?.effects[0]?.id??null}),a==="sel-fx"&&o&&E.patchUi({selectedEffectId:o}),a==="sel-src"&&o&&E.patchUi({selectedSourceId:o}),a==="bypass"&&o){const n=Se(E.project);n&&ug(n.id,o)}if(a==="fx-up"&&o){const n=Se(E.project);n&&Pr(n.id,o,-1)}if(a==="fx-dn"&&o){const n=Se(E.project);n&&Pr(n.id,o,1)}if(a==="fx-del"&&o){const n=Se(E.project);n&&cg(n.id,o)}if(a==="key"&&Ir(),a==="key-clear"&&wg(),a==="pst-save"&&gg(),a==="pst-rand"&&vg(),a==="pst-load"&&o&&Ko(o),a==="pst-dup"&&o&&bg(o),a==="pst-del"&&o&&yg(o),a==="export"&&Cg(),a==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));E.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),E.patchUi({status:`${n}s clip ready — hit Export`})}if(a==="exp-aspect"&&o){const n=Wo.find(s=>s.id===o);if(n){const s=Math.max(E.project.exportSettings.width,E.project.exportSettings.height,Pt),r=br(n.rw,n.rh,Math.min(Mt,Math.max(Pt,s)));E.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const n=Number(i.dataset.long||Pt),s=E.project,r=yr(s.exportSettings.width,s.exportSettings.height,n);E.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:n>=Mt?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const n=E.project,s=Se(n),r=n.sources.find(d=>d.id===(s?.sourceId??n.sources[0]?.id)),l=r?.kind==="audio"?n.sources.find(d=>d.kind!=="audio"):r,c=Math.max(n.exportSettings.width,n.exportSettings.height,Pt),u=yr(l?.width??1280,l?.height??720,Math.min(Mt,c));E.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:u.width,height:u.height}}))}if(a==="play"&&(xa(),E.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),a==="use-src"&&o){if(E.project.sources.find(r=>r.id===o)?.kind==="audio")return;const s=Se(E.project);s&&Le(s.id,r=>({...r,sourceId:o}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(pg(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(ja(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(ja(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(ja(i.files,!1),i.value=""),i.id==="quality"&&E.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&Go(i.value),i.value=""),i.id==="blend"){const a=Se(E.project);a&&Le(a.id,o=>({...o,blendMode:i.value}))}if(i.id==="mask-type"){const a=Se(E.project);a&&Le(a.id,o=>({...o,mask:{...o.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&Ko(i.value),i.id==="exp-format"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&E.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&E.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=E.project;if(i.id==="gen-prompt"&&E.patchUi({prompt:i.value},!1),i.id==="gen-src"&&E.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&E.patchUi({includeEffects:i.checked}),i.id==="seed"&&E.setProject(o=>({...o,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&E.setProject(o=>({...o,randomAmount:Number(i.value)}),!1),i.id==="speed"&&E.setProject(o=>({...o,playback:{...o.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&E.setProject(o=>({...o,playback:{...o.playback,loop:i.checked}}),!1),i.id==="loop-close"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&E.setProject(o=>({...o,playback:{...o.playback,freeze:i.checked}}),!1),i.id==="time"&&E.setProject(o=>({...o,playback:{...o.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const o=Se(a);o&&Le(o.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const o=Se(a);o&&Le(o.id,n=>({...n,enabled:i.checked}),!1)}for(const o of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${o}`&&E.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[o]:Number(i.value)}}),!1),i.id===`lfb-${o}`){const n=Se(a);n&&Le(n.id,s=>({...s,feedback:{...s.feedback,[o]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const o=Se(a),n=i.id.slice(3);o&&n in o.transform&&Le(o.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Va=!0;const o=xg(i.dataset.fxType||"",i.dataset.param),n=Eg(i,o);Ii(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),E.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&ce(o=>({...o,collageScale:ri(Number(i.value))}),void 0,!0),i.id==="collage-density"&&ce(o=>({...o,collageDensity:li(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&ce(o=>({...o,collagePace:Jt(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&ce(o=>({...o,collageChainTravel:ei(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&ce(o=>({...o,collageChainMorph:ti(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&ce(o=>({...o,collageChainVary:ii(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&ce(o=>({...o,collageChainSmooth:ai(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&ce(o=>({...o,collageSpringStrength:Oi(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&ce(o=>({...o,collageSpringDamp:Hi(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&ce(o=>({...o,collageSpringDist:Li(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&ce(o=>({...o,collageSpringElast:Ni(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&ce(o=>({...o,collageSpringBreak:Ui(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&ce(o=>({...o,collageFlowScale:qi(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&ce(o=>({...o,collageFlowTurb:Di(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&ce(o=>({...o,collageFlowEvolve:$i(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&ce(o=>({...o,collageFlowForce:Wi(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&ce(o=>({...o,collageFlowDepth:ji(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&ce(o=>({...o,collageBoidCohere:Vi(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&ce(o=>({...o,collageBoidSep:Gi(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&ce(o=>({...o,collageBoidAlign:Ki(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&ce(o=>({...o,collageBoidRadius:Xi(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&ce(o=>({...o,collageBoidSpeed:Zi(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&ce(o=>({...o,collagePoleCount:Qi(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&ce(o=>({...o,collagePoleAttract:Yi(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&ce(o=>({...o,collagePoleRepel:Ji(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&ce(o=>({...o,collagePoleSpeed:ea(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&ce(o=>({...o,collagePoleFalloff:ta(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&ce(o=>({...o,collagePoleSwitch:ia(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-min"&&ce(o=>({...o,collageHuntWideMin:na(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-max"&&ce(o=>({...o,collageHuntWideMax:sa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-min"&&ce(o=>({...o,collageHuntFollowMin:ra(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-max"&&ce(o=>({...o,collageHuntFollowMax:la(Number(i.value))}),void 0,!0),i.id==="collage-hunt-snap"&&ce(o=>({...o,collageHuntSnap:ca(Number(i.value))}),void 0,!0),i.id==="collage-hunt-zoom"&&ce(o=>({...o,collageHuntZoom:ua(Number(i.value))}),void 0,!0),i.id==="collage-hunt-tight"&&ce(o=>({...o,collageHuntTight:fa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-min"&&ce(o=>({...o,collageHuntReactMin:da(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-max"&&ce(o=>({...o,collageHuntReactMax:ha(Number(i.value))}),void 0,!0),i.id==="collage-hunt-precision"&&ce(o=>({...o,collageHuntPrecision:ma(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-speed"&&ce(o=>({...o,collageHuntFocusSpeed:pa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-error"&&ce(o=>({...o,collageHuntFocusError:ga(Number(i.value))}),void 0,!0),i.id==="collage-hunt-variation"&&ce(o=>({...o,collageHuntVariation:va(Number(i.value))}),void 0,!0),i.id==="exp-q"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&E.setProject(o=>({...o,exportSettings:{...o.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Va&&(Va=!1,Xo(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),E.state.ui.dropActive||E.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&E.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),E.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&ja(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),xa(),E.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Kt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Kt("all",!0),(e.key==="k"||e.key==="K")&&Ir(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Br()),e.key==="?"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Ar()))})}function xg(t,e){return at(t)?.params.find(i=>i.id===e)}function Eg(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Xo(t){const{project:e,ui:i}=E.state,a=t.querySelector("#proj-name"),o=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),o&&document.activeElement!==o&&(o.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const u=t.querySelector("#inc-fx");u&&(u.checked=i.includeEffects);const d=t.querySelector("#inc-fx-stack");d&&(d.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(m=>{m.classList.toggle("acid",!!e.cutEdit?.enabled)}),Pg(t.querySelector("#rail")),Mg(t.querySelector("#stack")),Ig(t.querySelector("#transport"))}function Pg(t){const e=E.project,i=E.state.ui,a=e.sources.find(o=>o.id===i.selectedSourceId&&Ae(o.generator))??e.sources.find(o=>Ae(o.generator));t.innerHTML=`
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
      ${Tt.map(o=>`<button class="btn tiny ${a?.collageKitB===o?"acid":""}" data-act="mash" data-kit="${o}">${dl(o)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${fi.map(o=>`<button class="btn tiny ${di(a?.collageColorPack)===o?"acid":""}" data-act="color-pack" data-pack="${o}">${to[o]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${$t(It(a?.collageKit),a?.collageColorPack).map(o=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===o.toLowerCase()?"on":""}" data-act="wash" data-hex="${o}" style="background:${o}" title="${o}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${ri(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${ri(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${li(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${li(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${Jt(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${Jt(a?.collagePace).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Move</div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="wallpaper" data-move="rush">Rush</button>
      <button class="btn tiny" data-act="gen" data-kind="giants" data-move="tunnel">Tunnel</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="spiral">Spiral</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="helix">Helix</button>
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
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${ei(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${ei(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${ti(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${ti(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${ii(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${ii(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${ai(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${ai(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Animal Chain</div>
    <div class="row">
      ${ba.map(o=>`<button class="btn tiny ${oi(a?.collageChainAnimal)===o?"acid":""}" data-act="chain-animal" data-animal="${o}">${dn[o]}</button>`).join("")}
    </div>`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${le("collage-spring-strength","Spring Strength",Oi(a.collageSpringStrength),.2,2.2,.05)}
    ${le("collage-spring-damp","Damping",Hi(a.collageSpringDamp),.08,1,.02)}
    ${le("collage-spring-dist","Connection Distance",Li(a.collageSpringDist),.12,.72,.02)}
    ${le("collage-spring-elast","Elasticity",Ni(a.collageSpringElast),.2,2.2,.05)}
    ${le("collage-spring-break","Break / Reconnect",Ui(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${le("collage-flow-scale","Field Scale",qi(a.collageFlowScale),.28,2.4,.05)}
    ${le("collage-flow-turb","Turbulence",Di(a.collageFlowTurb),0,2,.05)}
    ${le("collage-flow-evolve","Evolution Speed",$i(a.collageFlowEvolve),.08,2.2,.05)}
    ${le("collage-flow-force","Force",Wi(a.collageFlowForce),.2,2.2,.05)}
    ${le("collage-flow-depth","Depth Influence",ji(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${le("collage-boid-cohere","Cohesion",Vi(a.collageBoidCohere),.1,2.2,.05)}
    ${le("collage-boid-sep","Separation",Gi(a.collageBoidSep),.15,2.4,.05)}
    ${le("collage-boid-align","Alignment",Ki(a.collageBoidAlign),.1,2.2,.05)}
    ${le("collage-boid-radius","Perception Radius",Xi(a.collageBoidRadius),.08,.55,.01)}
    ${le("collage-boid-speed","Speed",Zi(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${le("collage-pole-count","Pole Count",Qi(a.collagePoleCount),1,5,1)}
    ${le("collage-pole-attract","Attraction",Yi(a.collagePoleAttract),.15,2.2,.05)}
    ${le("collage-pole-repel","Repulsion",Ji(a.collagePoleRepel),.1,2.2,.05)}
    ${le("collage-pole-speed","Pole Speed",ea(a.collagePoleSpeed),.12,2.2,.05)}
    ${le("collage-pole-falloff","Falloff",ta(a.collagePoleFalloff),.6,2.8,.05)}
    ${le("collage-pole-switch","Polarity Switching",ia(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Camera</div>
    <div class="row">
      ${tn.map(o=>`<button class="btn tiny ${Qt(a?.collageCamera)===o?"acid":""}" data-act="camera" data-camera="${o}">${o==="hunt"?"Hunt":"Fixed"}</button>`).join("")}
    </div>
    ${Qt(a?.collageCamera)==="hunt"?`<div class="sec">Documentary Search</div>
    <div class="row">
      ${on.map(o=>`<button class="btn tiny ${oa(a?.collageHuntSelect)===o?"acid":""}" data-act="hunt-select" data-select="${o}">${o==="random"?"Random":o==="reactive"?"Reactive":"Mixed"}</button>`).join("")}
    </div>
    <div class="row">
      ${an.map(o=>`<button class="btn tiny ${aa(a?.collageCameraFeel)===o?"acid":""}" data-act="camera-feel" data-feel="${o}">${o==="handheld"?"Handheld":"Perfect"}</button>`).join("")}
      <button class="btn tiny ${a?.collageHuntFocus?"acid":""}" data-act="hunt-focus">Manual Focus</button>
    </div>
    ${le("collage-hunt-wide-min","Wide / Search Duration Min",na(a?.collageHuntWideMin),.4,12,.1)}
    ${le("collage-hunt-wide-max","Wide / Search Duration Max",sa(a?.collageHuntWideMax),.6,16,.1)}
    ${le("collage-hunt-follow-min","Subject Follow Duration Min",ra(a?.collageHuntFollowMin),.4,12,.1)}
    ${le("collage-hunt-follow-max","Subject Follow Duration Max",la(a?.collageHuntFollowMax),.6,16,.1)}
    ${le("collage-hunt-snap","Snap Zoom Speed",ca(a?.collageHuntSnap),.35,2.4,.05)}
    ${le("collage-hunt-zoom","Zoom Range / Close Framing",ua(a?.collageHuntZoom),.35,2.4,.05)}
    ${le("collage-hunt-tight","Tracking Tightness",fa(a?.collageHuntTight),.12,1,.02)}
    ${le("collage-hunt-react-min","Reaction Time Min",da(a?.collageHuntReactMin),.04,1.4,.02)}
    ${le("collage-hunt-react-max","Reaction Time Max",ha(a?.collageHuntReactMax),.08,2,.02)}
    ${le("collage-hunt-precision","Operator Precision",ma(a?.collageHuntPrecision),0,1,.02)}
    ${le("collage-hunt-variation","Behavior Variation",va(a?.collageHuntVariation),0,1,.02)}
    ${a?.collageHuntFocus?`${le("collage-hunt-focus-speed","Focus Correction Speed",pa(a?.collageHuntFocusSpeed),.15,2.2,.05)}
    ${le("collage-hunt-focus-error","Focus Error Amount",ga(a?.collageHuntFocusError),0,1.6,.05)}`:""}`:""}
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
    <div class="status" style="margin-top:4px">Each clip keeps one move. Matter moves are a spring mesh, a flowing current, a flock, or wandering magnets — each with its own sliders. Chain is a freeform 3D conga line. Drum / illusion locks to the tempo grid. Music punches glow, not the path.</div>
    <div style="margin-top:8px">
      ${e.sources.map(o=>{const n=o.kind==="audio"?`beat-sync · ${Zt(o.duration||0)}${o.bpm&&o.bpm>40?` · ${o.bpm}bpm`:""}`:`${o.kind} ${o.width}×${o.height}`,s=o.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${o.id}">use</button>`;return`
        <div class="thumb ${o.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${o.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Ge(o.name)}</b><span>${n}</span></div>
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
    ${e.presets.map(o=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Ge(o.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${o.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${o.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${o.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Mg(t){const e=E.project,i=Se(e),a=Ai(i),o=ff();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${Ge(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${le("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${Yd.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
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
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(n=>`<option ${i.mask.type===n?"selected":""} value="${n}">${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${E.state.ui.includeEffects?"checked":""}/> include in randomizer</div>
      ${i.effects.map((n,s)=>`
        <div class="fx ${n.id===a?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Ge(at(n.typeId)?.name??n.typeId)}</span>
            <span>
              <button class="btn tiny" data-act="bypass" data-id="${n.id}">${n.enabled?"on":"off"}</button>
              <button class="btn tiny" data-act="fx-up" data-id="${n.id}">↑</button>
              <button class="btn tiny" data-act="fx-dn" data-id="${n.id}">↓</button>
              <button class="btn tiny" data-act="fx-del" data-id="${n.id}">x</button>
            </span>
          </div>
        </div>`).join("")}
      <select id="add-fx" class="addfx">
        <option value="">+ add effect</option>
        ${df.map(n=>{const s=(o[n.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Ge(at(a.typeId)?.name??"params")} · ${Ge(at(a.typeId)?.description??"")}</div>
        ${(at(a.typeId)?.params??[]).map(n=>Ag(i.id,a,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||Le(i.id,c=>{const u=[...c.effects],[d]=u.splice(r,1);return u.splice(l,0,d),{...c,effects:u}})})})}function Ag(t,e,i){const a=e.params[i.id]??i.default,o=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${o} ${a?"checked":""}/> ${Ge(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Ge(i.label)}</span><input type="color" ${o} value="${Ge(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Ge(i.label)}</span>
      <select ${o}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===a?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Ge(i.label)}</span>
    <input type="range" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Ig(t){const e=E.project,i=e.playback,a=e.exportSettings,o=E.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
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
        <span class="status" id="clock">${Zt(i.time)} / ${Zt(n)}</span>
        <span class="status" id="status-line">${E.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(r=>`<div class="key" style="left:${r.time/n*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${s}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${n}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${Wo.map(r=>`<button class="btn tiny ${R2(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
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
        ${[2,4,6,8,16,32].map(r=>`<button class="btn tiny ${Number(a.duration)===r?"acid":""}" data-act="clip" data-secs="${r}" ${o?"disabled":""}>${r}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${a.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${a.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${o?"disabled":""}>${o?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*n;E.setProject(u=>({...u,playback:{...u.playback,time:Math.max(0,c)}}))})}function le(t,e,i,a,o,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${o}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${o}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Xt(){const t=E.project,e=t.sources.find(o=>o.id===E.state.ui.selectedSourceId);if(e&&Ae(e.generator))return e;const i=Se(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&Ae(a.generator)?a:t.sources.find(o=>Ae(o.generator))}function Bg(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,chainAnimal:t.collageChainAnimal,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,camera:t.collageCamera,cameraFeel:t.collageCameraFeel,huntWideMin:t.collageHuntWideMin,huntWideMax:t.collageHuntWideMax,huntFollowMin:t.collageHuntFollowMin,huntFollowMax:t.collageHuntFollowMax,huntSnap:t.collageHuntSnap,huntZoom:t.collageHuntZoom,huntTight:t.collageHuntTight,huntReactMin:t.collageHuntReactMin,huntReactMax:t.collageHuntReactMax,huntPrecision:t.collageHuntPrecision,huntSelect:t.collageHuntSelect,huntFocus:t.collageHuntFocus,huntFocusSpeed:t.collageHuntFocusSpeed,huntFocusError:t.collageHuntFocusError,huntVariation:t.collageHuntVariation,wash:e?t.colorA:void 0}}function Fr(t){return!t.collageKit||!t.collageMove?t:{...t,name:Fn(t.collageMove,t.collageKit,t.collageKitB,t.collageChainAnimal)}}function ce(t,e,i=!1){const a=Xt();return a?(E.setProject(o=>({...o,sources:o.sources.map(n=>n.id===a.id?t(n):n)}),!i),e&&E.patchUi({status:e},!i),!0):!1}function Ge(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Zt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Rr(t,e){if(E.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),o=Math.max(16,Math.floor(a.width*i)),n=Math.max(16,Math.floor(a.height*i));(t.width!==o||t.height!==n)&&(t.width=o,t.height=n)}function Fg(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${Zt(i)}  ${e.toFixed(0)}FPS  ${E.project.quality.toUpperCase()}`);const o=Math.max(E.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/o*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${Zt(i)} / ${Zt(o)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=E.state.ui.status)}const zr=window;zr.__phospheneMark=!0;const Or=document.querySelector("#app");if(!Or)throw new Error("#app missing");const Zo=Or,Qo=document.createElement("canvas");async function Rg(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new Dd(Qo)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:Zo.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}_g(Zo,t),zr.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Rr(Qo,e)).observe(e),Rr(Qo,e);let a=performance.now(),o=60,n=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const u=E.state.ui.exporting,d=E.project,m=Of(d,d.playback.time),f=Ca(d);if(!u&&d.playback.playing&&!d.playback.freeze){const p=f?.audio&&d.playback.mode==="forward"&&!f.audio.paused&&Number.isFinite(f.audio.currentTime);if(f?.audio&&ho(f.audio,d.playback),p){const h=f.audio.currentTime;E.setProject(g=>({...g,playback:{...g.playback,time:h}}),!1)}else{let h=d.playback.time+c*m;const g=Math.max(d.duration,.001);d.playback.loop?h=(h%g+g)%g:h=Math.min(h,g),E.setProject(y=>({...y,playback:{...y.playback,time:h}}),!1),f?.audio&&d.playback.mode!=="forward"&&ho(f.audio,{...d.playback,playing:!1,time:h})}}else f?.audio&&ho(f.audio,{...d.playback,playing:!1});for(const p of E.project.sources)if(p.kind==="video"&&p.video&&!E.project.playback.freeze){const h=co(E.project.playback.time,p.duration||p.video.duration||1,E.project.playback.mode,1,E.project.playback.loop);Qd(p,h,{playing:E.project.playback.playing,freeze:E.project.playback.freeze,mode:E.project.playback.mode,speed:E.project.playback.speed})}if(!u)try{t.render(E.project,E.project.playback.time),t.cutStatus&&t.cutStatus!==E.state.ui.status&&E.patchUi({status:t.cutStatus},!1)}catch(p){E.patchUi({status:p instanceof Error?p.message:"render error"},!1)}n++,l-s>400&&(o=n*1e3/(l-s),s=l,n=0),Fg(Zo,o,E.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}Rg()})();

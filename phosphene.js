(function(){"use strict";function Se(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function I(t,e,i){return Math.min(i,Math.max(e,t))}function tt(t,e=16){return Math.max(e,Math.round(t)&-2)}function Fo(t,e,i,a){const n=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:tt(t*n),height:tt(e*n)}}function Ue(t,e,i){return t+(e-t)*i}function Tl(t){const e=I(t,0,1);return e*e*(3-2*e)}const _l="field";function ei(t){return t===_l}function qi(t){return I(t??1.15,.2,2.2)}function Di(t){return I(t??.95,.28,2.4)}function $i(t){return I(t??1,.08,2.2)}function Wi(t){return I(t??1.15,0,2.2)}function ji(t){return I(t??.9,.28,2.4)}function Vi(t){return I(t??1.1,.08,2.2)}function Gi(t){return I(t??.85,0,2.2)}function Ki(t){return I(t??.9,0,2.2)}function Xi(t){return I(t??.8,.28,2.4)}function Zi(t){return I(t??.35,0,2.2)}function Qi(t){return I(t??.9,0,2.4)}function Yi(t){return I(t??.055,.02,.22)}function Ji(t){return I(t??.85,.25,2.2)}function ea(t){return I(t??.42,.08,1)}function ta(t){return I(t??.8,.25,2.2)}function ia(t){return I(t??.85,0,2.2)}function aa(t){return I(t??.72,.12,1)}function na(t){return I(t??2.35,.6,3.2)}function oa(t){return I(t??.18,0,2)}function sa(t){return I(t??1.1,0,2.2)}function ra(t){return I(t??.85,0,2)}function la(t){return I(t??1.25,0,2.2)}function ca(t){return I(t??.45,0,2)}function Sl(t){const e=aa(t?.minScale),i=Math.max(e+.08,na(t?.maxScale));return{fieldStrength:qi(t?.fieldStrength),fieldScale:Di(t?.fieldScale),fieldEvolve:$i(t?.fieldEvolve),density:Wi(t?.density),densityScale:ji(t?.densityScale),densityEvolve:Vi(t?.densityEvolve),flow:Gi(t?.flow),curl:Ki(t?.curl),flowScale:Xi(t?.flowScale),attract:Zi(t?.attract),repel:Qi(t?.repel),radius:Yi(t?.radius),inertia:Ji(t?.inertia),damp:ea(t?.damp),maxV:ta(t?.maxV),scaleAmp:ia(t?.scaleAmp),minScale:e,maxScale:i,perturb:oa(t?.perturb),warp:sa(t?.warp),sparsity:ra(t?.sparsity),contrast:la(t?.contrast),motion:ca(t?.motion)}}function qt(t,e,i){const a=t;return{fast:a*2.43,medium:a*.61*i,slow:a*.27*e,glacial:a*.205*i}}const Dt=.012;function Io(t){const e=I(t,0,1);return e*e*(3-2*e)}function ua(t,e,i){const a=(t-e)/Math.max(1e-6,i),n=Math.max(0,1-a*a);return n*n}function Sn(t,e){const i=qt(t,e.fieldEvolve,e.densityEvolve).glacial,a=Math.sin(i+.35)+.42*Math.sin(i*1.618+1.6)+.18*Math.sin(i*.414+2.2);let n=.5+.58*Math.tanh(a*1.25);return n+=(.75-e.sparsity)*.22,I(n,0,1)}function xl(t,e){const{glacial:i,slow:a}=qt(t,e.fieldEvolve,e.densityEvolve),n=Math.sin(i*.73+.2)+.38*Math.sin(a*.31+1.4);return .5+.5*Math.tanh(n*1.65)}function Cl(t,e){return(.1+.9*Math.pow(1-t,1.08))*(.42+e.fieldStrength*.72)}function El(t,e,i,a,n){const{slow:o,glacial:s,medium:r}=qt(i,a.fieldEvolve,a.densityEvolve),l=a.fieldScale,c=a.warp*n;let f=t+c*.22*Math.sin(e*(1.72*l)+s*.71),d=e+c*.2*Math.cos(t*(1.48*l)+s*.53);f+=c*.1*Math.sin(f*(2.18*l)+d*.85+o*.8),d+=c*.09*Math.cos(f*.74+d*(2.05*l)+r*.6);const h=Math.sin(s*1.414+.3)*c*.48,u=Math.sin(s*.93+1.1)*c*.32,g=s*.19*c,m=Math.cos(g),v=Math.sin(g);let w=f*m-d*v,b=f*v+d*m;return w*=1+h,b*=1-h*.86,w+=b*u,w+=a.motion*n*.15*Math.sin(s*.71),b+=a.motion*n*.12*Math.cos(s*.53+.8),Bo(w,b)}function Bo(t,e){const n=Math.abs(t),o=Math.abs(e),s=n>.47?Math.sign(t)*(.47+(1-Math.exp(-(n-.47)*3.2))*.028):t,r=o>.8?Math.sign(e)*(.8+(1-Math.exp(-(o-.8)*3.2))*.04):e;return[s,r]}function Ml(t,e,i,a,n,o){const s=t+.16*Math.sin(e*2.07+i*.81),r=e+.16*Math.cos(t*1.83+a*.67),l=s*n,c=r*n;return Math.sin(l+i)*Math.cos(c*.86+i*.71)+o*.55*Math.sin(l*1.618+c*.41+a)+o*.38*Math.cos(l*.52-c*1.27+i*.33)}function Pl(t){return .0048+Math.pow(t,1.38)*.24}function Al(t){return .026+Math.pow(t,1.25)*.16}function Fl(t,e,i,a,n){const{medium:o,slow:s,glacial:r}=qt(i,a.fieldEvolve,a.densityEvolve),l=a.densityScale,c=xl(i,a),f=t*l+.2*Math.sin(e*1.62*l+o*.55),d=e*l+.18*Math.cos(t*1.38*l+s*.42),h=Pl(n),u=d-.3*Math.sin(f*(2.05+l*.35)+s)-.1*Math.sin(f*.72+r),g=f-.26*Math.sin(d*(1.82+l*.28)+o*.8)-.09*Math.cos(d*.88+r*.6),m=(f+d)*.72-.22*Math.sin((f-d)*1.55+s*.77),v=Math.exp(-(u*u)/h),w=Math.exp(-(g*g)/(h*1.12)),b=Math.exp(-(m*m)/(h*.9)),p=Math.sin(f*(1.35+l*.4)+s*.48)+.32*Math.cos(d*1.15+r*.55),T=.006+n*.03,_=Math.exp(-(p*p)/T),E=Al(n);let M=0;for(let W=0;W<4;W++){const ne=.3*Math.sin(r*(.68+W*.19)+W*2.05),U=.26*Math.cos(r*(.51+W*.14)+W*1.62),z=.55+.45*Math.sin(s*.41+W*1.3),se=f/l-ne,ee=d/l-U;M+=z*Math.exp(-.5*(se*se+ee*ee)/(E*E))}M=I(M,0,1);let A=0;const P=.22*Math.sin(r*.81+2.4),L=.18*Math.cos(r*.67+.9);A+=Math.exp(-((t-P)*(t-P)+(e-L)*(e-L))/(.012+n*.05));const D=-.18*Math.cos(r*.54+1.1),S=.2*Math.sin(s*.36+.4);A+=.75*Math.exp(-((t-D)*(t-D)+(e-S)*(e-S))/(.01+n*.04));const R=ua(c,.16,.34)*(.4+n*.7)+n*.22+(1-n)*.12,k=ua(c,.84,.32)*(.25+n*.5+(1-n)*.4),N=ua(c,.48,.3)*(.3+(1-n)*.85)+(1-n)*.18,G=ua(1-n,.88,.24)*(.45+(1-c)*.6),O=v*(.55*R+.2*N)+w*(.35*R+.45*N)+b*(.25*N+.2*R)+M*k*(.55+n*.35)+_*G*(.7+(1-n)*.9),ae=Math.max(0,O-A*(.25+n*.55));return I(ae*(.55+a.density*.4),0,1)}function Il(t,e,i,a){const n=Sn(i,a),o=Fl(t,e,i,a,n),s=.55+a.contrast*(.55+(1-n)*1.15),r=Math.tanh((o-(.18+(1-n)*.08))*s)*.5+.5;if(n>.8){const l=I((n-.8)/.2,0,1);return I(r+l*l*(.93-r),0,1)}return r}function Bl(t,e,i,a,n){const{fast:o,medium:s,slow:r}=qt(i,a.fieldEvolve,a.densityEvolve),l=a.flowScale*2.05,c=(g,m)=>Ml(g,m,r,s,l,a.curl),f=a.flow*(.012+n*.11);let d=(c(t,e+Dt)-c(t,e-Dt))/(2*Dt)*f,h=-((c(t+Dt,e)-c(t-Dt,e))/(2*Dt))*f;const u=.01*a.perturb*(.4+n);return d+=u*Math.sin(t*15.3+e*4.1+o),h+=u*Math.cos(e*13.7+t*3.6+o*.81),[d,h,.05*Math.sin(t*2.4+e*1.8+r*.6)*a.flow*n]}function Rl(t,e,i,a,n){const o=Sn(a,n),s=Cl(o,n),[r,l]=El(t,e,a,n,s),[c,f,d]=Bl(r,l,a,n,s),[h,u]=Bo(r+c,l+f);return{x:h-t,y:u-e,z:d*.8+.03*Math.sin(i*3.1+a*.4)*s}}function zl(t,e,i,a,n){const o=Rl(t,e,i,a,n);return{x:I(t+o.x,-.48,.48),y:I(e+o.y,-.82,.82),z:I(i+o.z,-.32,.32)}}function Ol(t,e,i){const a=Math.max(2,Math.round(Math.sqrt(e*1.15))),n=Math.max(2,Math.ceil(e/a)),o=t%a,s=Math.floor(t/a),r=(i.x-.5)*.7,l=(i.y-.5)*.7,c=s%2*.5,f=((o+.5+c+r*.4)/a-.5)*.98,d=((s+.5+l*.36)/n-.5)*1.52,h=(i.z-.5)*.28;return[f,d,h]}function Ro(t,e){const i=t.length,a={n:i,lastClock:e,phase:e,homeX:new Float32Array(i),homeY:new Float32Array(i),homeZ:new Float32Array(i),px:new Float32Array(i),py:new Float32Array(i),pz:new Float32Array(i),vx:new Float32Array(i),vy:new Float32Array(i),vz:new Float32Array(i),bias:new Float32Array(i),scale:new Float32Array(i),alpha:new Float32Array(i),squash:new Float32Array(i)};for(let n=0;n<i;n++){const[o,s,r]=Ol(n,i,t[n]);a.homeX[n]=o,a.homeY[n]=s,a.homeZ[n]=r,a.px[n]=o,a.py[n]=s,a.pz[n]=r,a.vx[n]=(t[n].vx-.5)*.02,a.vy[n]=(t[n].vy-.5)*.02,a.vz[n]=0,a.bias[n]=.72+t[n].z*.7,a.scale[n]=1,a.alpha[n]=1,a.squash[n]=1}return a}function zo(t,e,i,a){const n=t.n,o=Sn(i,a),s=Math.pow(1-o,1.05),r=(7.4+s*1.8)/(.32+a.inertia),l=Math.exp(-(.45+a.damp*1.2)*e),c=(.12+a.maxV*.22)*(.7+s*.85),f=a.radius*(.35+s*.55),d=f*f,{slow:h,glacial:u}=qt(i,a.fieldEvolve,a.densityEvolve),g=Math.sin(u*1.414+.3)*a.warp*(.12+s*.7),m=I(1+g*.42,.58,1.65),v=.18+a.sparsity*.1+(1-o)*.26-a.attract*.05,w=2.2+a.contrast*(2+(1-o)*2.2),b=[];for(let p=0;p<n;p++){const T=Il(t.homeX[p],t.homeY[p],i,a);let _=Io((T-v)*w);o>.68&&(_=Math.max(_,Io((o-.68)*7.5))),o<.1&&(_*=_),t.alpha[p]=_,_>.12&&b.push(p)}for(let p=0;p<n;p++){const T=zl(t.homeX[p],t.homeY[p],t.homeZ[p],i,a);let _=(T.x-t.px[p])*r,E=(T.y-t.py[p])*r,M=(T.z-t.pz[p])*r*.45;if(a.repel>.01&&t.alpha[p]>.12)for(let S=0;S<b.length;S++){const R=b[S];if(p===R)continue;const k=t.px[p]-t.px[R],N=t.py[p]-t.py[R],G=k*k+N*N;if(G>d||G<1e-10)continue;const O=Math.sqrt(G),ae=1-O/f,W=ae*ae*a.repel*.55;_+=k/O*W,E+=N/O*W}t.vx[p]=(t.vx[p]+_*e)*l,t.vy[p]=(t.vy[p]+E*e)*l,t.vz[p]=(t.vz[p]+M*e)*l;const A=Math.hypot(t.vx[p],t.vy[p],t.vz[p])||1;if(A>c){const S=c/A;t.vx[p]*=S,t.vy[p]*=S,t.vz[p]*=S}t.px[p]+=t.vx[p]*e,t.py[p]+=t.vy[p]*e,t.pz[p]+=t.vz[p]*e;const P=Math.sin(t.homeX[p]*4.2+t.homeY[p]*3.1+h*.55)*Math.cos(t.homeY[p]*2.6+h*.29);let D=(a.minScale+(1-o)*(a.maxScale-a.minScale)*.92)*(.82+t.bias[p]*.22)*(1+a.scaleAmp*P*.22*(.35+s));D=I(D,a.minScale,a.maxScale),t.scale[p]=D,t.squash[p]=m}}function Hl(t,e,i,a){const n=e.length;let o=t;(!o||o.n!==n||i-(o.lastClock??0)>1.6)&&(o=Ro(e,i)),(!o.squash||o.squash.length!==n)&&(o.squash=new Float32Array(n),o.squash.fill(1));let s=i-o.lastClock;if(s<-.04&&(o.lastClock>2&&i<.8?s=Math.min(.05,1/30):(o=Ro(e,i),s=0)),s<=1e-5)return zo(o,0,o.phase,a),o.lastClock=i,o;s=Math.min(s,.05);const r=s>.028?2:1,l=s/r;for(let c=0;c<r;c++)o.phase+=l,zo(o,l,o.phase,a);return o.lastClock=i,o}function Ll(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.52,1.03-t.pz[e]*.35),n=I(1.04/a,.7,1.4),s=Math.hypot(t.vx[e],t.vy[e])>.01?Math.atan2(t.vy[e],t.vx[e]):t.homeX[e]*2.4+t.bias[e];return{x:I(t.px[e]/a,-.48,.48),y:I(t.py[e]/a,-.82,.82),px:I((.038+i*.02)*n*t.scale[e],.022,.34),rot:s,alpha:I(t.alpha[e],0,1),squash:t.squash?t.squash[e]:1}}const Nl=["spring","flow","boids","poles"];function xn(t){return!!t&&Nl.includes(t)}function fa(t){return I(t??1,.2,2.2)}function da(t){return I(t??.55,.08,1)}function ha(t){return I(t??.34,.12,.72)}function ma(t){return I(t??1,.2,2.2)}function pa(t){return I(t??2.1,1.15,3.6)}function ga(t){return I(t??1,.28,2.4)}function va(t){return I(t??.8,0,2)}function ba(t){return I(t??.7,.08,2.2)}function ya(t){return I(t??1,.2,2.2)}function wa(t){return I(t??.7,0,1.6)}function ka(t){return I(t??1,.1,2.2)}function Ta(t){return I(t??1,.15,2.4)}function _a(t){return I(t??1,.1,2.2)}function Sa(t){return I(t??.22,.08,.55)}function xa(t){return I(t??1,.25,2.2)}function Ca(t){return I(Math.round(t??3),1,5)}function Ea(t){return I(t??1,.15,2.2)}function Ma(t){return I(t??.85,.1,2.2)}function Pa(t){return I(t??.8,.12,2.2)}function Aa(t){return I(t??1.4,.6,2.8)}function Fa(t){return I(t??.45,0,2)}function Ul(t){return{springStrength:fa(t?.springStrength),springDamp:da(t?.springDamp),springDist:ha(t?.springDist),springElast:ma(t?.springElast),springBreak:pa(t?.springBreak),flowScale:ga(t?.flowScale),flowTurb:va(t?.flowTurb),flowEvolve:ba(t?.flowEvolve),flowForce:ya(t?.flowForce),flowDepth:wa(t?.flowDepth),boidCohere:ka(t?.boidCohere),boidSep:Ta(t?.boidSep),boidAlign:_a(t?.boidAlign),boidRadius:Sa(t?.boidRadius),boidSpeed:xa(t?.boidSpeed),poleCount:Ca(t?.poleCount),poleAttract:Ea(t?.poleAttract),poleRepel:Ma(t?.poleRepel),poleSpeed:Pa(t?.poleSpeed),poleFalloff:Aa(t?.poleFalloff),poleSwitch:Fa(t?.poleSwitch)}}function ql(t,e,i,a,n,o,s){const r=n*3.15,l=a,c=o;let f=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),d=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),h=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const u=Math.hypot(f,d,h)||1;return[f/u,d/u,h/u]}function Dl(t,e,i,a){const n=i*(.42+t*.15),o=Math.sin(e*n+t*1.3)*.34+Math.sin(e*n*.37+t)*.08,s=Math.cos(e*n*.86+t*1.9)*.28+Math.cos(e*n*.29+t*.7)*.07,r=Math.sin(e*n*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:o,y:s,z:r,sign:c}}function $l(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function Wl(t,e,i,a){const n=e.length,o={move:t,n,lastClock:i,px:new Float32Array(n),py:new Float32Array(n),pz:new Float32Array(n),vx:new Float32Array(n),vy:new Float32Array(n),vz:new Float32Array(n),homeX:new Float32Array(n),homeY:new Float32Array(n),homeZ:new Float32Array(n),links:[],linkKey:""};for(let s=0;s<n;s++){const[r,l,c]=$l(e[s]);o.px[s]=r,o.py[s]=l,o.pz[s]=c,o.homeX[s]=r,o.homeY[s]=l,o.homeZ[s]=c,o.vx[s]=(e[s].vx-.5)*.08,o.vy[s]=(e[s].vy-.5)*.08,o.vz[s]=0}return t==="spring"&&Oo(o,a.springDist),o}function Oo(t,e,i=5){const a=t.n,n=[],o=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,f=Math.min(s,c),d=Math.max(s,c),h=`${f}:${d}`;o.has(h)||(o.add(h),n.push({a:f,b:d,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=n,t.linkKey=`${a}|${e.toFixed(3)}`,n}function qe(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function jl(t,e,i,a){const n=t.n,o=`${n}|${a.springDist.toFixed(3)}`;t.linkKey!==o&&Oo(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,f=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const u of t.links){const g=t.px[u.b]-t.px[u.a],m=t.py[u.b]-t.py[u.a],v=t.pz[u.b]-t.pz[u.a],w=Math.hypot(g,m,v)||1e-5;if(u.on&&w>u.rest*l){u.on=!1;continue}if(!u.on&&w<a.springDist*.92&&(u.on=!0),!u.on)continue;const b=w-u.rest,p=s*b,T=g/w,_=m/w,E=v/w;t.vx[u.a]+=T*p*e,t.vy[u.a]+=_*p*e,t.vz[u.a]+=E*p*e,t.vx[u.b]-=T*p*e,t.vy[u.b]-=_*p*e,t.vz[u.b]-=E*p*e}const h=Math.exp(-r*7*e);for(let u=0;u<n;u++){const g=t.homeX[u]-t.px[u],m=t.homeY[u]-t.py[u],v=t.homeZ[u]-t.pz[u];t.vx[u]+=g*.35*e,t.vy[u]+=m*.35*e,t.vz[u]+=v*.35*e;const w=Math.hypot(t.px[u]-c,t.py[u]-f,t.pz[u]-d);if(w<.24){const b=(.24-w)/.24;t.vx[u]+=(c-t.px[u])*b*1.8*e,t.vy[u]+=(f-t.py[u])*b*1.8*e,t.vz[u]+=(d-t.pz[u])*b*1.1*e}t.vx[u]*=h,t.vy[u]*=h,t.vz[u]*=h,t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=qe(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=qe(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=qe(t.pz[u],t.vz[u],.36)}}function Vl(t,e,i,a){const n=i*a.flowEvolve,o=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=ql(t.px[s],t.py[s],t.pz[s],n,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*o*e,t.vy[s]+=l*o*e,t.vz[s]+=c*o*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.34)}}function Gl(t,e,i){const a=t.n,n=i.boidRadius,o=n*n,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let f=0;f<a;f++){let d=0,h=0,u=0,g=0,m=0,v=0,w=0,b=0,p=0,T=0;for(let _=0;_<a;_++){if(f===_)continue;const E=t.px[_]-t.px[f],M=t.py[_]-t.py[f],A=t.pz[_]-t.pz[f],P=E*E+M*M+A*A;if(P>o||P<1e-8)continue;T++,d+=t.px[_],h+=t.py[_],u+=t.pz[_],w+=t.vx[_],b+=t.vy[_],p+=t.vz[_];const L=Math.sqrt(P),D=(n-L)/n;g-=E/L*D,m-=M/L*D,v-=A/L*D}T&&(r[f]+=(d/T-t.px[f])*i.boidCohere*1.15,l[f]+=(h/T-t.py[f])*i.boidCohere*1.15,c[f]+=(u/T-t.pz[f])*i.boidCohere*1.15,r[f]+=g*i.boidSep*1.8,l[f]+=m*i.boidSep*1.8,c[f]+=v*i.boidSep*1.8,r[f]+=(w/T-t.vx[f])*i.boidAlign*1.35,l[f]+=(b/T-t.vy[f])*i.boidAlign*1.35,c[f]+=(p/T-t.vz[f])*i.boidAlign*1.35),r[f]+=-t.px[f]*.22,l[f]+=-t.py[f]*.22,c[f]+=-t.pz[f]*.18}for(let f=0;f<a;f++){t.vx[f]+=r[f]*e,t.vy[f]+=l[f]*e,t.vz[f]+=c[f]*e;const d=Math.hypot(t.vx[f],t.vy[f],t.vz[f])||1;if(d>s){const h=s/d;t.vx[f]*=h,t.vy[f]*=h,t.vz[f]*=h}t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=qe(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=qe(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=qe(t.pz[f],t.vz[f],.34)}}function Kl(t,e,i,a){const n=[];for(let s=0;s<a.poleCount;s++)n.push(Dl(s,i,a.poleSpeed,a.poleSwitch));const o=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const f of n){const d=f.x-t.px[s],h=f.y-t.py[s],u=f.z-t.pz[s],g=Math.hypot(d,h,u)||1e-4,m=(f.sign>0?a.poleAttract:a.poleRepel)/(g**o+.06),v=f.sign>0?1:-1;if(r+=d/g*m*v*.55,l+=h/g*m*v*.55,c+=u/g*m*v*.32,r+=-h/g*m*.28,l+=d/g*m*.28,g<.1){const w=(.1-g)*10;r-=d/g*w,l-=h/g*w,c-=u/g*w*.6}}for(let f=0;f<t.n;f++){if(s===f)continue;const d=t.px[s]-t.px[f],h=t.py[s]-t.py[f],u=t.pz[s]-t.pz[f],g=d*d+h*h+u*u;if(g>.018||g<1e-8)continue;const m=Math.sqrt(g),v=(.135-m)*2.4;r+=d/m*v,l+=h/m*v,c+=u/m*v*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.3)}}function Xl(t,e,i,a,n){const o=i.length;let s=t;(!s||s.move!==e||s.n!==o||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=Wl(e,i,a,n));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let f=0;f<l;f++)e==="spring"?jl(s,c,a,n):e==="flow"?Vl(s,c,a,n):e==="boids"?Gl(s,c,n):Kl(s,c,a,n);return s.lastClock=a,s}function Zl(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),n=I(1.1/a,.55,1.7);return{x:I(t.px[e]/a,-.48,.48),y:I(t.py[e]/a,-.4,.4),px:I((.07+i*.03)*n,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:I(.55+n*.4,.5,1)}}const Ho=["fixed","hunt"],Lo=["perfect","handheld"],No=["random","reactive","mixed"];function ti(t){return Ho.includes(t)?t:"fixed"}function Ia(t){return Lo.includes(t)?t:"perfect"}function Ba(t){return No.includes(t)?t:"mixed"}function Ra(t){return I(t??2,.4,12)}function za(t){return I(t??6,.6,16)}function Oa(t){return I(t??2,.4,12)}function Ha(t){return I(t??5,.6,16)}function La(t){return I(t??1,.35,2.4)}function Na(t){return I(t??1,.35,2.4)}function Ua(t){return I(t??.7,.12,1)}function qa(t){return I(t??.16,.04,1.4)}function Da(t){return I(t??.42,.08,2)}function $a(t){return I(t??.72,0,1)}function Wa(t){return I(t??.85,.15,2.2)}function ja(t){return I(t??.55,0,1.6)}function Va(t){return I(t??.35,0,1)}function Ql(t){let e=Ra(t?.huntWideMin),i=za(t?.huntWideMax);i<e&&([e,i]=[i,e]);let a=Oa(t?.huntFollowMin),n=Ha(t?.huntFollowMax);n<a&&([a,n]=[n,a]);let o=qa(t?.huntReactMin),s=Da(t?.huntReactMax);return s<o&&([o,s]=[s,o]),{wideMin:e,wideMax:i,followMin:a,followMax:n,snap:La(t?.huntSnap),zoom:Na(t?.huntZoom),tight:Ua(t?.huntTight),reactMin:o,reactMax:s,precision:$a(t?.huntPrecision),select:Ba(t?.huntSelect),focusOn:!!t?.huntFocus,focusSpeed:Wa(t?.huntFocusSpeed),focusError:ja(t?.huntFocusError),variation:Va(t?.huntVariation),feel:Ia(t?.cameraFeel)}}function Uo(t=0,e=3){return{phase:"wide",clock:t,phaseUntil:t+e,reactUntil:0,subject:-1,lastSubject:-1,lookX:0,lookY:0,zoom:1,rot:0,velX:0,velY:0,velZ:0,velR:0,errX:0,errY:0,heldFocus:1,plan:"basic",mediumDone:!1,nudged:!1,retargeted:!1,handX:0,handY:0,handR:0,lag:0,cycle:0,trackStart:0,prev:[]}}function At(t,e,i){return e+t()*Math.max(0,i-e)}function $t(t,e){return Math.hypot(t,e)}function Yl(t,e,i,a){const n=e?(t.x-e.x)/Math.max(a,.016666666666666666):0,o=e?(t.y-e.y)/Math.max(a,1/60):0,s=$t(n,o),r=e?(t.px-e.px)/Math.max(a,1/60):0,l=Math.max(0,r),c=e?$t(e.x-t.x,e.y-t.y):0,f=Math.max(0,s-c/Math.max(a,1/60)),d=e?Math.abs(Math.atan2(o,n)-Math.atan2(t.y-e.y,t.x-e.x)):0,h=$t(t.x-i.cx,t.y-i.cy)/Math.max(i.spread,.08),u=Math.max(Math.abs(t.x),Math.abs(t.y)),g=Math.min(1,s*1.6);return s*1.15+f*.9+d*.35+l*3.2+I(h-.7,0,2)*.55+I(u-.28,0,1)*.7+g*.4}function qo(t,e,i,a,n,o){if(t.length===0)return-1;if(t.length===1)return t[0].id;const s=t.reduce((u,g)=>u+g.x,0)/t.length,r=t.reduce((u,g)=>u+g.y,0)/t.length,l=t.reduce((u,g)=>u+$t(g.x-s,g.y-r),0)/t.length||.2,c=new Map(n.map(u=>[u.id,u])),f=t.map(u=>{if(u.id===e&&t.length>1)return 0;const g=Yl(u,c.get(u.id),{cx:s,cy:r,spread:l},o);return i==="random"?1:i==="reactive"?.12+g:.55+g}),d=f.reduce((u,g)=>u+g,0);if(d<=0)return(t.find(g=>g.id!==e)??t[0]).id;let h=a()*d;for(let u=0;u<t.length;u++)if(h-=f[u],h<=0)return t[u].id;return t[t.length-1].id}function Jl(t,e){if(e()>t*.72)return"basic";const i=e();return i<.22?"medium":i<.42?"retarget":i<.6?"abort":i<.8?"linger":"nudge"}function ec(t,e,i=!1){const a=t?.px??.08,n=.2/Math.max(a,.045),o=I(1.2+e*.95*I(n,.65,2.1),1.25,4.1);return i?Ue(1,o,.42):o}function Do(t,e){return t.find(i=>i.id===e)}function tc(t){if(!t.length)return{x:0,y:0};let e=0,i=0;for(const a of t)e+=a.x,i+=a.y;return{x:e/t.length,y:i/t.length}}function ic(t,e,i,a,n,o,s,r){t.velX+=(e-t.lookX)*s-t.velX*r,t.velY+=(i-t.lookY)*s-t.velY*r,t.velZ+=(a-t.zoom)*s-t.velZ*r,t.velR+=(n-t.rot)*s*.65-t.velR*r,t.lookX+=t.velX*o,t.lookY+=t.velY*o,t.zoom+=t.velZ*o,t.rot+=t.velR*o}function ac(t,e,i,a,n){const o=Se(n+Math.floor(i*1e3)*17+(t?.cycle??0)*131>>>0);let s=t??Uo(i,At(o,a.wideMin,a.wideMax));const r=i-s.clock;(r<-.02||r>1.2)&&(s=Uo(i,At(o,a.wideMin,a.wideMax)));const l=I(i-s.clock,1/90,.08);s.clock=i;const c=tc(e),f=Do(e,s.subject),d=s.prev.find(D=>D.id===s.subject);f&&d&&$t(f.x-d.x,f.y-d.y)/l>.55&&(s.lag=Math.max(s.lag,(1-a.precision)*.16)),s.lag=Math.max(0,s.lag-l*(1.4+a.precision*2)),s.errX*=Math.exp(-l*(1.1+a.precision*2.6)),s.errY*=Math.exp(-l*(1.1+a.precision*2.6));const h=Se(n+s.cycle*9973+11>>>0),u=Se(n+s.cycle*7919+3>>>0),g=(D,S=1)=>{s.lastSubject=s.subject,s.subject=D,s.phase="notice",s.reactUntil=i+At(h,a.reactMin,a.reactMax)*S;const R=(1-a.precision)*.11*(.45+h()),k=h()*Math.PI*2;s.errX=Math.cos(k)*R,s.errY=Math.sin(k)*R};if(s.phase==="wide"&&i>=s.phaseUntil&&e.length){const D=qo(e,s.lastSubject,a.select,h,s.prev,l);s.plan=Jl(a.variation,u),s.mediumDone=!1,s.nudged=!1,s.retargeted=!1,s.plan==="linger"?(s.phaseUntil=i+At(u,a.wideMin,a.wideMax)*(1.15+u()*.7),s.plan="basic"):g(D)}else if(s.phase==="notice"&&i>=s.reactUntil)s.phase="snap",s.phaseUntil=i+I(.28/a.snap,.12,.85);else if(s.phase==="snap"&&i>=s.phaseUntil)if(s.plan==="medium"&&!s.mediumDone)s.mediumDone=!0,s.phase="notice",s.reactUntil=i+At(h,a.reactMin,a.reactMax)*.55;else{s.phase="track",s.trackStart=i;const D=At(u,a.followMin,a.followMax);s.phaseUntil=i+(s.plan==="abort"?D*(.28+u()*.28):D)}else if(s.phase==="track"){const D=Math.max(.01,s.phaseUntil-s.trackStart);if(s.plan==="retarget"&&!s.retargeted&&e.length>1&&i>=s.trackStart+D*.42){const S=qo(e,s.subject,a.select,h,s.prev,l);S!==s.subject&&S>=0&&(s.retargeted=!0,s.plan="basic",g(S,.55))}else s.plan==="nudge"&&!s.nudged&&i>s.phaseUntil-.8&&(s.nudged=!0);s.phase==="track"&&i>=s.phaseUntil&&(s.phase="return",s.phaseUntil=i+I(.32/a.snap,.14,.9),s.lastSubject=s.subject)}else s.phase==="return"&&i>=s.phaseUntil&&(s.phase="wide",s.subject=-1,s.cycle+=1,s.phaseUntil=i+At(u,a.wideMin,a.wideMax),s.plan="basic");const m=Do(e,s.subject)??f,v=1;let w=c.x*.22,b=c.y*.22,p=v,T=0;if(m&&(s.phase==="notice"||s.phase==="snap"||s.phase==="track")){w=m.x+s.errX,b=m.y+s.errY;const D=s.phase==="snap"&&s.plan==="medium"&&!s.mediumDone;p=s.phase==="notice"?Ue(s.zoom,1.04,.15):ec(m,a.zoom,D),s.nudged&&s.phase==="track"&&(p*=1.12),T=Math.atan2(b-s.lookY,w-s.lookX)*.045}else s.phase==="return"&&(w=c.x*.18,b=c.y*.18,p=v,T=0);const _=s.phase==="snap"||s.phase==="return"?1.15+a.snap*1.35:1,E=s.phase==="notice"?.38:1,M=1-I(s.lag*2.4,0,.55),A=(.08+a.tight*.22)*(.45+a.precision*.7)*_*E*M,P=.18+a.precision*.22+a.tight*.12;ic(s,w,b,p,T,l,A,P);const L=I(s.zoom,1,4.2);if(!a.focusOn)s.heldFocus=L;else{const D=1-Math.exp(-l*(.35+a.focusSpeed*1.8));s.heldFocus=Ue(s.heldFocus,L,D)}if(a.feel==="handheld"){const D=$t(s.velX,s.velY)+Math.abs(s.velZ)*.08;s.handX=Ue(s.handX,-s.velX*.05-D*.01,1-Math.exp(-l*3.2)),s.handY=Ue(s.handY,-s.velY*.05,1-Math.exp(-l*3.2)),s.handR=Ue(s.handR,-s.velR*.4,1-Math.exp(-l*2.6))}else s.handX=Ue(s.handX,0,1-Math.exp(-l*8)),s.handY=Ue(s.handY,0,1-Math.exp(-l*8)),s.handR=Ue(s.handR,0,1-Math.exp(-l*8));return s.prev=e.map(D=>({id:D.id,x:D.x,y:D.y,px:D.px})),s}function nc(t,e){const i=I(t.zoom,1,4.2),a=e.focusOn?I(Math.abs(t.heldFocus-i)*e.focusError*.9,0,1):0;return{x:t.lookX+(e.feel==="handheld"?t.handX:0),y:t.lookY+(e.feel==="handheld"?t.handY:0),zoom:I(t.zoom,1,4.4),rot:t.rot+(e.feel==="handheld"?t.handR:0),focus:a}}function oc(t,e){return{x:(t.x-e.x)*e.zoom,y:(t.y-e.y)*e.zoom,px:t.px*e.zoom,rot:t.rot+e.rot}}const $o=["heraldry","wallpaper","giants","shower"],Tt=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],Wo=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"],sc=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Cn(t){return!!t&&sc.includes(t)}const ii={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES",field:"FIELD"};function Ae(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Ft(t){return Tt.includes(t)?t:"sailor"}function jo(t){return Wo.includes(t)?t:"rush"}const rc=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function lc(t){return!!t&&rc.includes(t)}const Vo=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"];function En(t){return Vo[(t>>>0)%Vo.length]}function ai(t){return I(t??1,.35,1.2)}function ni(t){return I(t??1,.2,2.2)}function oi(t){return I(t??.7,.12,2)}function si(t){return I(t??1,.2,2)}function ri(t){return I(t??.72,.12,1)}const Ga=["off","dragon","dog","ferret","caterpillar","zebra"],Go={off:"Off",dragon:"Dragon",dog:"Dog",ferret:"Ferret",caterpillar:"Caterpillar",zebra:"Zebra"};function li(t){return Ga.includes(t)?t:"off"}function cc(t){return Math.max(11,Math.min(18,Math.round(14*I(t??1,.35,2))))}function uc(t,e){if(t==="off"||e<4)return[];if(t==="caterpillar"){const n=[];for(let o=1;o<e-1;o++)n.push({role:"nub",attach:o,side:-1}),n.push({role:"nub",attach:o,side:1});return n}const i=Math.max(1,Math.round((e-1)*.22)),a=Math.max(i+2,Math.round((e-1)*.62));return[{role:"leg",attach:i,side:-1},{role:"leg",attach:i,side:1},{role:"leg",attach:a,side:-1},{role:"leg",attach:a,side:1}]}function Ka(t,e,i,a){const n=me(t)*Math.PI*2,o=I(i,.2,2),s=I(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),f=e*(.45+r*1.55),d=(Ke,Ne,y)=>(Ke+Ne*o)*(.42+.58*(.5+.5*Math.sin(y))),h=.84+.22*Math.sin(l+.4),u=.8+.24*Math.cos(l*.87+1.1),g=.7+.32*Math.sin(l*.61+2.2),m=(.2+.12*o)*h,v=d(.04,.07,c+.3)*(.4+s*.6),w=d(.02,.08,f+1.4)*(.18+r*.95),b=d(.01,.06,f*1.3+.8)*r,p=d(.006,.035,c*1.6+2.1)*r*r,T=(.17+.11*o)*u,_=d(.035,.065,c+1.7)*(.4+s*.6),E=d(.02,.07,f+.6)*(.18+r*.95),M=d(.01,.055,f*1.2+2.4)*r,A=d(.006,.03,c*1.4+.5)*r*r,P=(.13+.11*o)*g,L=d(.04,.08,c+2)*(.45+s*.55),D=d(.02,.07,f+1.9)*(.18+r*.95),S=d(.012,.055,f*.9+.2)*r;let R=Math.cos(n+l*.18)*m+Math.cos(2*n+c*.14+.7)*v+Math.sin(3*n+l*.11+1.2)*w+Math.cos(4*n+f*.09+.4)*b+Math.sin(5*n+c*.16+2.2)*p,k=Math.sin(n+l*.15+.5)*T+Math.sin(2*n+c*.19+1.4)*_+Math.cos(3*n+l*.09+.3)*E+Math.sin(4*n+f*.12+1.8)*M+Math.cos(5*n+c*.08+.9)*A,N=Math.sin(n+l*.12+1.1)*P+Math.cos(2*n+c*.17+.6)*L+Math.sin(3*n+f*.1+2.5)*D+Math.cos(4*n+l*.13+1.6)*S;const G=Math.sin(2*n+c*.22)*r*.12*o;N+=G;const O=l*.19+Math.sin(c*.27)*.55,ae=Math.sin(l*.29+.8)*(.28+.18*o),W=Math.cos(l*.23+1.5)*(.2+r*.4),ne=Math.cos(O),U=Math.sin(O),z=R*ne-N*U,se=R*U+N*ne,ee=Math.cos(ae),Q=Math.sin(ae),we=k*ee-se*Q,Pe=k*Q+se*ee,fe=Math.cos(W),pe=Math.sin(W),Me=z*fe-we*pe,_e=z*pe+we*fe;return{x:Me+Math.sin(l*.47)*.06*o,y:_e+Math.cos(l*.39+1.3)*.05*o,z:Pe+Math.sin(c*.21+.6)*.07*o}}function it(t,e=1){return(t>40?t/60:2)*e}function fc(t,e,i=1,a=0){return me((t-a)*it(e,i))}function dc(t,e,i=1,a=0){const n=Math.cos(fc(t,e,i,a)*Math.PI*2);return n>0?n*n:0}function Ko(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*it(e,i))}function Xa(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function Xo(t,e){return e&&Wo.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const ci=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],Mn={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function hc(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const mc={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},Zo={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},Qo={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},ui=256;function Yo(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function De(t,e){return e[Math.floor(t()*e.length)%e.length]}function Jo(t,e){return t()<.32?e:De(t,ci)}function pc(t,e="rush"){return e==="tunnel"?Zo[t]:e==="lattice"?Qo[t]:mc[t]}function gc(t,e,i,a){const n=pc(a,e==="bloom"?"rush":e);let o=De(t,n);e==="lattice"&&t()<.4&&(o=De(t,Qo[a])),e==="tunnel"&&t()<.28&&(o=De(t,Zo[a]));const s=Jo(t,i);let r=Jo(t,i);return r===s&&(r=De(t,ci)),{kind:o,pattern:t()<.58?"plain":De(t,["polka","hoop","half","bar"]),a:s,b:r,mirror:t()>.5}}function vc(t){return t>.5?I((t-.5)/.5,0,1):0}function bc(t,e,i,a=0){const n=Math.max(1,i),o=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*o)*11+5>>>0)%n}function fi(t){return I(t??1,.5,2)}function di(t){return I(t??1,.35,2)}function yc(t,e,i="sailor",a){const n=Se(t>>>0),o=240,s=a&&a!==i?a:null,r=[];for(let l=0;l<o;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",f=s&&l&1?s:i;r.push({x:n(),y:n(),z:n(),rot:(n()-.5)*.55,size:.55+n()*.9,vx:(n()-.5)*.06,vy:(n()-.35)*.08,vr:(n()-.5)*.25,charge:gc(n,c,e,f)})}return r}function wc(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function es(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,n=e&255;return(.22*i+.7*a+.08*n)/255}function ts(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const n=i.a,o=i.b,s=a*2.4;if(t.fillStyle=n,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=o,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=o,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=es(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function Pn(t,e,i,a=.42){for(let n=0;n<i*2;n++){const o=n%2===0?e:e*a,s=n*Math.PI/i-Math.PI/2,r=Math.cos(s)*o,l=Math.sin(s)*o;n===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function kc(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Tc(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function is(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function _c(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Sc(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function xc(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Cc(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,n=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*n,-Math.cos(a)*n*.85)}t.closePath()}function Ec(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function Mc(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function Pc(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Ac(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Fc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function Ic(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function Bc(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Rc(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function zc(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function Oc(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function Hc(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function Lc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function Nc(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function Uc(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function qc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function Dc(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function $c(t,e){Pn(t,e,8,.55)}function Wc(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function jc(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function Vc(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function Gc(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Kc(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function Xc(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Zc(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Qc(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function Yc(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function Jc(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function e0(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function t0(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function i0(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function a0(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),is(t,e*.72)}function n0(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function o0(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function s0(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function r0(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function l0(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function c0(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function u0(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function f0(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function d0(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function h0(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function m0(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function p0(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function g0(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function v0(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function b0(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function y0(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function w0(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function k0(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function T0(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function _0(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function S0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function x0(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function C0(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function E0(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function M0(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function P0(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function A0(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function F0(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function I0(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function B0(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function R0(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function z0(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function O0(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function H0(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function L0(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function N0(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function U0(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function q0(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function D0(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function $0(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function W0(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function j0(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function V0(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function G0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function K0(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function X0(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function Z0(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function Q0(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function Y0(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function J0(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function eu(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function tu(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function iu(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function au(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function nu(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function ou(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function su(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function ru(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function lu(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function cu(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function uu(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function fu(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function du(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function hu(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function mu(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function pu(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function gu(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function vu(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function bu(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function yu(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function wu(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function ku(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function Tu(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function _u(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function Su(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function xu(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function Cu(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function Eu(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function Mu(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function Pu(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function Au(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function Fu(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function Iu(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function Bu(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function Ru(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function zu(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function Ou(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function Hu(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function Lu(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function Nu(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function Uu(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function qu(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function Du(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function $u(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function Wu(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function ju(t,e){Pn(t,e*.72,4,.32)}function Vu(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function Gu(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function Ku(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function Xu(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function Zu(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function Qu(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function Yu(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function Ju(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function ef(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function tf(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function af(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function nf(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function of(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function sf(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function rf(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function lf(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function cf(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function uf(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function ff(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function df(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function hf(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function mf(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function pf(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function gf(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function vf(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function bf(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function yf(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function wf(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function kf(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function Tf(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function _f(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function Sf(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function xf(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function Cf(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function Ef(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function Mf(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function Pf(t,e){t.moveTo(-e*.7,0),t.quadraticCurveTo(-e*.58,-e*.58,0,-e*.52),t.quadraticCurveTo(e*.58,-e*.58,e*.7,0),t.quadraticCurveTo(e*.58,e*.58,0,e*.52),t.quadraticCurveTo(-e*.58,e*.58,-e*.7,0),t.closePath()}function Af(t,e){t.moveTo(-e*.82,0),t.quadraticCurveTo(-e*.45,-e*.55,e*.08,-e*.32),t.lineTo(e*.98,-e*.12),t.lineTo(e*.62,e*.06),t.lineTo(e*.88,e*.38),t.lineTo(e*.22,e*.22),t.quadraticCurveTo(-e*.2,e*.52,-e*.82,0),t.closePath(),t.moveTo(-e*.02,-e*.3),t.lineTo(e*.18,-e*.98),t.lineTo(e*.38,-e*.22),t.closePath(),t.moveTo(-e*.38,-e*.28),t.lineTo(-e*.18,-e*.88),t.lineTo(e*.08,-e*.2),t.closePath()}function Ff(t,e){t.moveTo(-e*.42,e*.18),t.quadraticCurveTo(-e*.35,-e*.28,e*.22,-e*.2),t.quadraticCurveTo(e*.62,-e*.06,e*.95,e*.16),t.quadraticCurveTo(e*.9,e*.42,e*.4,e*.42),t.quadraticCurveTo(0,e*.5,-e*.42,e*.18),t.closePath(),t.moveTo(-e*.12,-e*.08),t.quadraticCurveTo(-e*.85,-e*.42,-e*.98,e*.42),t.quadraticCurveTo(-e*.48,e*.48,0,e*.08),t.closePath(),t.moveTo(e*.12,-e*.16),t.quadraticCurveTo(-e*.22,-e*.95,-e*.72,-e*.22),t.quadraticCurveTo(e*.02,-e*.22,e*.22,.02*e),t.closePath()}function If(t,e){t.moveTo(-e*.72,e*.08),t.quadraticCurveTo(-e*.52,-e*.4,-e*.02,-e*.3),t.quadraticCurveTo(e*.48,-e*.1,e*.98,e*.08),t.quadraticCurveTo(e*.48,e*.26,0,e*.3),t.quadraticCurveTo(-e*.48,e*.4,-e*.72,e*.08),t.closePath(),t.moveTo(-e*.22,-e*.26),t.lineTo(-e*.32,-e*.7),t.lineTo(0,-e*.26),t.closePath(),t.moveTo(e*.06,-e*.2),t.lineTo(e*.04,-e*.6),t.lineTo(e*.24,-e*.16),t.closePath()}function Bf(t,e){t.arc(e*.06,e*.08,e*.62,0,Math.PI*2),t.moveTo(-e*.04,-e*.46),t.quadraticCurveTo(-e*.32,-e*.95,-e*.55,-e*.52),t.quadraticCurveTo(-e*.2,-e*.6,e*.02,-e*.38),t.closePath(),t.moveTo(e*.28,-e*.46),t.quadraticCurveTo(e*.42,-e*.98,e*.68,-e*.5),t.quadraticCurveTo(e*.38,-e*.56,e*.22,-e*.36),t.closePath()}function Rf(t,e){t.moveTo(-e*.58,e*.1),t.quadraticCurveTo(-e*.4,-e*.42,e*.12,-e*.22),t.quadraticCurveTo(e*.58,0,e*.98,e*.16),t.quadraticCurveTo(e*.55,e*.4,e*.08,e*.38),t.quadraticCurveTo(-e*.38,e*.38,-e*.58,e*.1),t.closePath(),t.moveTo(-e*.08,-e*.2),t.lineTo(-e*.22,-e*.95),t.lineTo(e*.14,-e*.18),t.closePath(),t.moveTo(e*.16,-e*.14),t.lineTo(e*.22,-e*.88),t.lineTo(e*.42,-e*.1),t.closePath()}function zf(t,e){t.moveTo(e*.92,-e*.16),t.quadraticCurveTo(e*.15,-e*.3,-e*.32,-e*.1),t.lineTo(-e*.95,-e*.42),t.lineTo(-e*.52,0),t.lineTo(-e*.95,e*.42),t.lineTo(-e*.32,e*.1),t.quadraticCurveTo(e*.15,e*.3,e*.92,e*.16),t.closePath()}function Of(t,e){t.moveTo(e*.88,-e*.1),t.quadraticCurveTo(e*.18,-e*.55,-e*.35,-e*.52),t.quadraticCurveTo(-e*.95,-e*.12,-e*.52,e*.22),t.quadraticCurveTo(-e*.12,e*.4,e*.48,e*.12),t.quadraticCurveTo(e*.75,e*.04,e*.88,e*.1),t.closePath()}function Hf(t,e){t.moveTo(e*.95,-e*.2),t.quadraticCurveTo(e*.12,-e*.48,-e*.55,-e*.2),t.quadraticCurveTo(-e*.98,0,-e*.55,e*.2),t.quadraticCurveTo(e*.12,e*.48,e*.95,e*.2),t.closePath()}function Lf(t,e){t.moveTo(e*.88,0),t.quadraticCurveTo(e*.68,-e*.5,e*.08,-e*.46),t.quadraticCurveTo(-e*.52,-e*.52,-e*.82,-e*.06),t.lineTo(-e*.98,-e*.4),t.lineTo(-e*.68,0),t.lineTo(-e*.98,e*.4),t.lineTo(-e*.82,e*.06),t.quadraticCurveTo(-e*.52,e*.52,e*.08,e*.46),t.quadraticCurveTo(e*.68,e*.5,e*.88,0),t.closePath()}function Nf(t,e){t.moveTo(e*.92,-e*.08),t.quadraticCurveTo(e*.18,-e*.16,-e*.22,-e*.06),t.lineTo(-e*.85,-e*.4),t.lineTo(-e*.52,0),t.lineTo(-e*.9,e*.36),t.lineTo(-e*.22,e*.08),t.quadraticCurveTo(e*.18,e*.16,e*.92,e*.08),t.closePath()}function Uf(t,e){t.moveTo(-e*.95,-e*.2),t.quadraticCurveTo(-e*.15,e*.28,e*.28,-e*.12),t.quadraticCurveTo(e*.68,-e*.38,e*.98,e*.28),t.quadraticCurveTo(e*.48,e*.52,e*.08,e*.22),t.quadraticCurveTo(-e*.38,e*.62,-e*.92,e*.24),t.closePath()}function qf(t,e){t.moveTo(-e*.68,-e*.2),t.quadraticCurveTo(e*.12,-e*.52,e*.85,0),t.quadraticCurveTo(e*.12,e*.52,-e*.68,e*.2),t.closePath()}function Df(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":Pn(t,i,5,e==="starfish"?.42:.4);break;case"heart":kc(t,i);break;case"moon":Tc(t,i);break;case"figure":is(t,i);break;case"fish":_c(t,i);break;case"anchor":Sc(t,i);break;case"wave":xc(t,i);break;case"shell":Cc(t,i);break;case"boat":Ec(t,i);break;case"tail":Mc(t,i);break;case"swallow":Pc(t,i);break;case"elephant":Ac(t,i);break;case"tent":Fc(t,i);break;case"ball":Ic(t,i);break;case"bow":Bc(t,i);break;case"horse":Rc(t,i);break;case"balloon":zc(t,i);break;case"ticket":Oc(t,i);break;case"pear":Hc(t,i);break;case"lemon":Lc(t,i);break;case"cherry":Nc(t,i);break;case"leaf":Uc(t,i);break;case"mushroom":qc(t,i);break;case"flower":Dc(t,i);break;case"sun":$c(t,i);break;case"cloud":Wc(t,i);break;case"bolt":jc(t,i);break;case"umbrella":Vc(t,i);break;case"bird":Gc(t,i);break;case"tree":Kc(t,i);break;case"deer":Xc(t,i);break;case"fox":Zc(t,i);break;case"owl":Qc(t,i);break;case"acorn":Yc(t,i);break;case"cone":Jc(t,i);break;case"mountain":e0(t,i);break;case"drop":t0(t,i);break;case"moth":i0(t,i);break;case"wingfig":a0(t,i);break;case"swan":n0(t,i);break;case"cat":o0(t,i);break;case"crown":s0(t,i);break;case"key":r0(t,i);break;case"ring":l0(t,i);break;case"envelope":c0(t,i);break;case"potion":u0(t,i);break;case"rocket":d0(t,i);break;case"planet":h0(t,i);break;case"saturn":m0(t,i);break;case"ufo":p0(t,i);break;case"comet":g0(t,i);break;case"satellite":v0(t,i);break;case"lolly":b0(t,i);break;case"coneice":y0(t,i);break;case"cupcake":w0(t,i);break;case"donut":k0(t,i);break;case"candy":T0(t,i);break;case"note":_0(t,i);break;case"vinyl":S0(t,i);break;case"headphone":x0(t,i);break;case"mic":C0(t,i);break;case"speaker":E0(t,i);break;case"crab":M0(t,i);break;case"helm":P0(t,i);break;case"lighthouse":A0(t,i);break;case"compass":F0(t,i);break;case"popcorn":I0(t,i);break;case"cane":B0(t,i);break;case"mask":R0(t,i);break;case"apple":z0(t,i);break;case"banana":O0(t,i);break;case"grape":H0(t,i);break;case"rabbit":L0(t,i);break;case"snail":N0(t,i);break;case"fern":U0(t,i);break;case"rose":q0(t,i);break;case"diamond":D0(t,i);break;case"candle":$0(t,i);break;case"alien":W0(t,i);break;case"asteroid":j0(t,i);break;case"telescope":V0(t,i);break;case"cookie":G0(t,i);break;case"waffle":K0(t,i);break;case"guitar":X0(t,i);break;case"drum":Z0(t,i);break;case"piano":Q0(t,i);break;case"clef":Y0(t,i);break;case"kettle":J0(t,i);break;case"mug":eu(t,i);break;case"whisk":tu(t,i);break;case"toast":iu(t,i);break;case"egg":au(t,i);break;case"spoon":nu(t,i);break;case"chili":ou(t,i);break;case"bottle":su(t,i);break;case"rain":ru(t,i);break;case"flake":lu(t,i);break;case"wind":cu(t,i);break;case"rainbow":uu(t,i);break;case"thermo":fu(t,i);break;case"taxi":du(t,i);break;case"hydrant":hu(t,i);break;case"bike":mu(t,i);break;case"lamp":pu(t,i);break;case"signal":gu(t,i);break;case"bus":vu(t,i);break;case"stick":bu(t,i);break;case"dice":yu(t,i);break;case"coin":wu(t,i);break;case"pawn":ku(t,i);break;case"cart":Tu(t,i);break;case"flag":_u(t,i);break;case"buoy":Su(t,i);break;case"hook":xu(t,i);break;case"porthole":Cu(t,i);break;case"oar":Eu(t,i);break;case"hoop":Mu(t,i);break;case"unicycle":Pu(t,i);break;case"lion":Au(t,i);break;case"topper":Fu(t,i);break;case"orange":Iu(t,i);break;case"peach":Bu(t,i);break;case"berry":Ru(t,i);break;case"melon":zu(t,i);break;case"pineapple":Ou(t,i);break;case"pine":Hu(t,i);break;case"hedgehog":Lu(t,i);break;case"nest":Nu(t,i);break;case"toadstool":Uu(t,i);break;case"locket":qu(t,i);break;case"dove":Du(t,i);break;case"kiss":$u(t,i);break;case"rover":Wu(t,i);break;case"spark":ju(t,i);break;case"astro":Vu(t,i);break;case"pretzel":Gu(t,i);break;case"sundae":Ku(t,i);break;case"choco":Xu(t,i);break;case"sax":Zu(t,i);break;case"trumpet":Qu(t,i);break;case"amp":Yu(t,i);break;case"fork":Ju(t,i);break;case"pan":ef(t,i);break;case"chefhat":tf(t,i);break;case"tornado":af(t,i);break;case"subway":nf(t,i);break;case"mailbox":of(t,i);break;case"skyline":sf(t,i);break;case"ghostie":rf(t,i);break;case"pixel":lf(t,i);break;case"joystick":cf(t,i);break;case"shroomup":uf(t,i);break;case"invader":ff(t,i);break;case"skull":df(t,i);break;case"bat":hf(t,i);break;case"pumpkin":mf(t,i);break;case"tomb":pf(t,i);break;case"cauldron":gf(t,i);break;case"web":vf(t,i);break;case"trophy":bf(t,i);break;case"whistle":yf(t,i);break;case"jersey":wf(t,i);break;case"skate":kf(t,i);break;case"goal":Tf(t,i);break;case"pencil":_f(t,i);break;case"book":Sf(t,i);break;case"globe":xf(t,i);break;case"backpack":Cf(t,i);break;case"ruler":Ef(t,i);break;case"bell":Mf(t,i);break;case"aBody":Pf(t,i);break;case"aLeg":Uf(t,i);break;case"aNub":qf(t,i);break;case"aDragHead":Af(t,i);break;case"aDragTail":zf(t,i);break;case"aDogHead":Ff(t,i);break;case"aDogTail":Of(t,i);break;case"aFerrHead":If(t,i);break;case"aFerrTail":Hf(t,i);break;case"aCatpHead":Bf(t,i);break;case"aCatpTail":Lf(t,i);break;case"aZebrHead":Rf(t,i);break;case"aZebrTail":Nf(t,i);break;default:f0(t,i);break}}function as(t,e,i){const a=(n,o,s)=>{t.beginPath(),t.arc(n,o,s,0,Math.PI*2),t.fill()};t.fillStyle=es(e.a)>.55?"#141414":"#f6f1e6",e.kind==="aDragHead"&&a(i*.18,-i*.04,i*.08),e.kind==="aDogHead"&&a(i*.28,0,i*.075),e.kind==="aFerrHead"&&a(i*.08,-i*.02,i*.055),e.kind==="aCatpHead"&&(a(-i*.08,i*.02,i*.07),a(i*.22,i*.02,i*.07)),e.kind==="aZebrHead"&&a(i*.12,-i*.02,i*.06),e.kind==="aBody"&&e.pattern==="bar"&&(t.beginPath(),t.moveTo(0,-i*.16),t.lineTo(i*.14,0),t.lineTo(0,i*.16),t.lineTo(-i*.14,0),t.closePath(),t.fill())}function $f(t,e,i){const a=()=>Df(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),ts(t,a,e,i),as(t,e,i),t.restore();return}ts(t,a,e,i),as(t,e,i)}function Wf(t){const e=document.createElement("canvas");e.width=ui,e.height=ui;const i=e.getContext("2d");return i&&(i.translate(ui/2,ui/2),$f(i,t,ui*.38)),e}const jf={dragon:{a:"#2a7a38",b:"#e8b830",pattern:"bar"},dog:{a:"#c9922e",b:"#f2d98a",pattern:"half"},ferret:{a:"#c49a62",b:"#f0e2c4",pattern:"half"},caterpillar:{a:"#5aa84a",b:"#e8c840",pattern:"hoop"},zebra:{a:"#f4f4f4",b:"#141414",pattern:"stripe"}};function ns(t,e){const i=jf[t];return{kind:e==="body"?"aBody":e==="leg"?"aLeg":e==="nub"?"aNub":e==="head"?t==="dragon"?"aDragHead":t==="dog"?"aDogHead":t==="ferret"?"aFerrHead":t==="caterpillar"?"aCatpHead":"aZebrHead":t==="dragon"?"aDragTail":t==="dog"?"aDogTail":t==="ferret"?"aFerrTail":t==="caterpillar"?"aCatpTail":"aZebrTail",pattern:e==="leg"||e==="nub"?"plain":i.pattern,a:i.a,b:i.b,mirror:!1}}function Vf(t){return Math.atan2(Math.sin(t),Math.cos(t))}function An(t,e,i,a,n,o){const s=Ka(t,e,i,a),r=Ka(me(t+n),e,i,a),l=Math.max(.42,1.05-s.z*.55),c=Math.max(.42,1.05-r.z*.55),f=s.x/l,d=s.y/l,h=Math.atan2(r.y/c-d,r.x/c-f),u=I(1.12/l,.55,1.85);return{x:f,y:d,rot:h,ux:Math.cos(h),uy:Math.sin(h),nx:-Math.sin(h),ny:Math.cos(h),px:I((.072+o*.028)*u,.05,.24),alpha:I(.52+u*.42,.5,1)}}function Gf(t,e,i,a,n){const o=cc(n),s=.72/o,r=e==="caterpillar"?1.08:1,l=[];for(let c=0;c<o;c++){const f=me(i*a.travel*.14-c*s),d=i*a.morph,h=c===0?1.05:c===o-1?.78:.48*r;l.push(An(f,d,a.vary,a.smooth,s,h))}for(const c of uc(e,o)){const f=l[c.attach],d=c.role==="nub"?.07:.13,h=me((i-d)*a.travel*.14-c.attach*s),u=An(h,(i-d)*a.morph,a.vary,a.smooth,s,.55),g=f.x-u.x,m=f.y-u.y,v=c.role==="nub"?.038:.09,w=c.role==="nub"?.32:.7,b=c.role==="nub"?.008:.024,p=f.x+f.nx*c.side*v-g*w,T=f.y+f.ny*c.side*v-m*w+b;t(ns(e,c.role),{x:p,y:T,px:I(f.px*(c.role==="nub"?.55:.92),.04,.18),rot:Math.atan2(T-f.y,p-f.x),alpha:f.alpha*.94})}for(let c=o-1;c>=0;c--){const f=c===0?"head":c===o-1?"tail":"body";let d=l[c].x,h=l[c].y,u=l[c].rot;if(f==="tail"){const g=me((i-.14)*a.travel*.14-(o-1)*s),m=An(g,(i-.14)*a.morph,a.vary,a.smooth,s,.78),v=l[c].x-m.x,w=l[c].y-m.y;d-=v*.55,h-=w*.55,u+=Vf(l[c].rot-m.rot)*.85}t(ns(e,f),{x:d,y:h,px:l[c].px*(f==="head"?1.28:f==="tail"?1.18:1),rot:u,alpha:l[c].alpha})}}class Kf{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;agents=null;hunt=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=wc(e);let a=this.stamps.get(i);return a||(a=Wf(e),this.stamps.set(i,a)),a}ensure(e,i,a,n){const o=n&&n!==a?n:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===o&&this.particles.length||(this.particles=yc(e,i,a,o||null),this.stamps.clear(),this.sim=null,this.agents=null,this.hunt=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=o)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const n=this.canvas.getContext("2d",{alpha:!1});if(!n)return this.canvas;const o=Ft(e.kit),s=e.kitB?Ft(e.kitB):null,r=Yo(e.paper,Yf(o,e.seed)),l=Yo(e.ink,Mn[o]);this.ensure(e.seed>>>0,l,o,s);const c=Xo(e.generator,e.move),f=I(e.audio,0,1),d=I(e.bass,0,1),h=I(e.beat,0,1),u=e.bpm>40?e.bpm:0,g=fi(e.scale),m=di(e.density),v=ai(e.pace),w={travel:ni(e.chainTravel),morph:oi(e.chainMorph),vary:si(e.chainVary),smooth:ri(e.chainSmooth)},b=li(e.chainAnimal);Qf(n,i,a,r,o,e.time,e.seed,h,d,!!e.night,l),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high";const p=e.beatOffset??0,T=e.time,_=Cn(c)&&u>40&&p>.001?Math.max(0,T-p):T,E=_*v,M=i/Math.max(a,1),A=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Cn(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"||c==="braid"?130:c==="tunnel"||c==="well"?120:c==="hall"?148:c==="bloom"||c==="gyre"||c==="drift"||c==="sway"?140:c==="chain"?40:ei(c)?200:xn(c)?42:this.particles.length,P=Math.max(8,Math.min(this.particles.length,Math.round(A*m))),L=c==="prism"?3:1;if(ei(c)){const G=Sl({fieldStrength:e.fieldStrength,fieldScale:e.fieldScale,fieldEvolve:e.fieldEvolve,density:e.fieldDensity,densityScale:e.fieldDensityScale,densityEvolve:e.fieldDensityEvolve,flow:e.fieldFlow,curl:e.fieldCurl,flowScale:e.fieldFlowScale,attract:e.fieldAttract,repel:e.fieldRepel,radius:e.fieldRadius,inertia:e.fieldInertia,damp:e.fieldDamp,maxV:e.fieldMaxV,scaleAmp:e.fieldScaleAmp,minScale:e.fieldMinScale,maxScale:e.fieldMaxScale,perturb:e.fieldPerturb,warp:e.fieldWarp,sparsity:e.fieldSparsity,contrast:e.fieldContrast,motion:e.fieldMotion});this.agents=Hl(this.agents,this.particles.slice(0,P),_,G),this.sim=null}else if(xn(c)){this.agents=null;const G=Ul({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=Xl(this.sim,c,this.particles.slice(0,P),_,G)}else this.agents=null,this.sim=null;const D=c==="spot"?.34:ei(c)?.4:lc(c)||c==="chain"?.26:.22,S=(G,O,ae)=>{const W=ae?{...O,...oc(O,ae)}:O,ne=Math.min(W.px*g,ae?.72:D)*Math.min(i,a);if(ne<5)return;const U=(.5+W.x)*i,z=(.5+W.y/M)*a;for(let se=0;se<L;se++){n.save();const ee=L>1?(se-1)*ne*.09:0,Q=L>1?se===2?ne*.06:se===0?-ne*.03:0:0;if(U+ee<-ne||z+Q<-ne||U+ee>i+ne||z+Q>a+ne){n.restore();continue}n.translate(U+ee,z+Q),n.rotate(W.rot+(L>1?se*.1:0)),O.flip!=null&&n.scale(O.flip,1),O.squash&&n.scale(O.squash,1/Math.max(.35,O.squash)),O.glow&&(n.globalAlpha=O.alpha*.32*O.glow,n.fillStyle=O.tint??l,n.beginPath(),n.arc(0,0,ne*(.4+O.glow*.16),0,Math.PI*2),n.fill()),n.globalAlpha=O.alpha*(L>1?.72:1),n.drawImage(G,-ne/2,-ne/2,ne,ne),n.restore()}},R=[],k=(G,O)=>{R.push({stamp:G,pose:O})};if(c==="chain"&&b!=="off")Gf((G,O)=>k(this.stamp(G),O),b,_,w,m);else for(let G=0;G<P;G++){const O=this.particles[G];let ae=ei(c)&&this.agents?Ll(this.agents,G,O.size):xn(c)&&this.sim?Zl(this.sim,G,O.size):Xf(O,G,c,E,f,d,h,u,P,_,w);ae&&(ae.alpha<.04||(ei(c)&&h>.02&&(ae={...ae,glow:h*.38,squash:(ae.squash??1)*(1-h*.045),px:ae.px*(1+h*.07)}),k(this.stamp(O.charge),ae)))}let N;if(ti(e.camera)==="hunt"){const G=Ql({huntWideMin:e.huntWideMin,huntWideMax:e.huntWideMax,huntFollowMin:e.huntFollowMin,huntFollowMax:e.huntFollowMax,huntSnap:e.huntSnap,huntZoom:e.huntZoom,huntTight:e.huntTight,huntReactMin:e.huntReactMin,huntReactMax:e.huntReactMax,huntPrecision:e.huntPrecision,huntSelect:e.huntSelect,huntFocus:e.huntFocus,huntFocusSpeed:e.huntFocusSpeed,huntFocusError:e.huntFocusError,huntVariation:e.huntVariation,cameraFeel:e.cameraFeel});this.hunt=ac(this.hunt,R.map((O,ae)=>({id:ae,x:O.pose.x,y:O.pose.y,px:O.pose.px})),_,G,e.seed>>>0),N=nc(this.hunt,G),N.focus>.03&&(n.filter=`blur(${(1.1+N.focus*2.4).toFixed(2)}px)`)}else this.hunt=null;for(const G of R)S(G.stamp,G.pose,N);return n.filter="none",(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&h>.04&&(n.save(),n.translate(i*.5,a*.5),n.strokeStyle=$e(l,"#fff4d8",.72),n.globalAlpha=.18+h*.42,n.lineWidth=2.6+h*6,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.16+h*.2),0,Math.PI*2),n.stroke(),n.globalAlpha=.1+h*.22,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.3+h*.18),0,Math.PI*2),n.stroke(),n.restore()),this.canvas}}function me(t){return(t%1+1)%1}function Fn(t,e,i){const a=Math.cos(i),n=Math.sin(i);return{x:t*a-e*n,y:t*n+e*a}}function Wt(t,e=.28,i=2.55){const a=e+me(t)*i,n=e+i,o=I((n-a)/.3,0,1)*I((a-e)/.1,0,1);return o<=.001?null:{depth:a,fade:o}}function os(t){const e=me(t);return e<.5?e*2:2-e*2}function Ie(t){return os(t)-.5}function Xf(t,e,i,a,n,o,s,r,l=48,c=a,f){const d=Cn(i),h=dc(c,r),u=I(Math.max(s*(d?.48:.85),h*(d?.72:.22)),0,1);if(i==="bounce"){const b=.11+Math.abs(t.vx)*2.4,p=.09+Math.abs(t.vy)*2.1;return{x:Ie(t.x+b*a),y:Ie(t.y+p*a*.92),px:I((.1+t.size*.07)*(1+u*.22),.08,.28),glow:u*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const b=a*(2.2+n*.25)+e*.55,p=Math.cos(b);return{x:Ie(t.x+t.vx*a*.45),y:Ie(t.y+t.vy*a*.38),px:I((.12+t.size*.06)*(1+u*.18),.08,.26),glow:u*.35,rot:t.rot+Math.sin(b)*.15,alpha:I(.28+Math.abs(p)*.72,.2,1),flip:p}}if(i==="glow"){const b=.45+.55*Math.sin(a*2.4+e*.7),p=I(b*.4+u*.55+o*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:I((.1+t.size*.08)*(.9+p*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:I(.5+p*.45,.35,1),glow:p}}if(i==="flash"){const b=.7+.3*Math.sin(a*5.2+e)+u*.12,p=ci[(Math.floor(a*3.2+e*3)>>>0)%ci.length];return{x:Ie(t.x+t.vx*a*.32),y:Ie(t.y+t.vy*a*.28),px:I((.11+t.size*.07)*(1+u*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:I(b,.4,1),glow:.16+u*.45,tint:p}}if(i==="hop"){const b=r>40?r/60:.85,p=me(a*b+t.z),T=Math.abs(Math.sin(p*Math.PI))*(.72+u*.45)+u*.14,_=Math.cos(p*Math.PI*2);return{x:Ie(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Ie(t.y)*.62-T*.2,px:I(.1+t.size*.07+T*.02,.08,.22),rot:t.rot+T*.55,alpha:1,flip:_}}if(i==="kick"){const b=.1+Math.abs(t.vx)*2.1,p=.08+Math.abs(t.vy)*1.8;return{x:Ie(t.x+b*a),y:Ie(t.y+p*a),px:I((.1+t.size*.07)*(1+u*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:u*.7}}if(i==="jelly"){const b=1+Math.sin(a*5.2+e)*.08+u*.2;return{x:Ie(t.x+t.vx*a*.5),y:Ie(t.y+t.vy*a*.42),px:I(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:b}}if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,M=(_+.5)/6-.5,A=Math.sin(a*1.7+_*.72+T*.18);return{x:E*.9+A*.07,y:M*.74+Math.sin(a*.82+_*.9)*.035,px:I(.085+t.size*.045+u*.05,.06,.2),rot:t.rot+A*.22,alpha:1,glow:u*.5}}if(i==="rings"){const p=e%4,T=Math.floor(e/4),_=12,E=p&1?-1:1,M=T/_*Math.PI*2+a*(.48+p*.08)*E,A=.14+p*.11;return{x:Math.cos(M)*A,y:Math.sin(M)*A*.88,px:I(.07+t.size*.035+u*.05,.05,.18),rot:M+t.rot*.25,alpha:.96,glow:u*.48}}if(i==="loom"){const b=a*1.05+t.x*Math.PI*2,p=a*1.45+t.y*Math.PI*2;return{x:Math.sin(b)*.4+Math.sin(p*.5)*.06,y:Math.sin(b*2+t.z*Math.PI)*.3,px:I(.08+t.size*.045+u*.05,.06,.2),rot:b*.18+t.rot,alpha:1,glow:u*.48}}if(i==="petal"){const p=e%6,T=Math.floor(e/6)/8,_=p/6*Math.PI*2+a*.34,E=.8+.2*Math.sin(a*1.25),M=(.1+T*.32)*E;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.9,px:I(.075+t.size*.04+u*.05,.055,.2),rot:_+Math.PI*.5,alpha:I(.42+E*.55,.4,1),glow:u*.5}}if(i==="flock"){const b=e%5,T=me(t.z+a*(.18+b*.02))*Math.PI*2+b*.32,_=.2+Math.sin(T*2+b)*.1+b*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:I(.075+t.size*.04+u*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:u*.48}}if(i==="wheel"){const p=e%3,E=Math.floor(e/3)/14*Math.PI*2+a*.58*(p===1?-1:1),M=.2+p*.12,A=.5+.5*Math.sin(E);return{x:Math.cos(E)*M,y:Math.sin(E)*M*.72,px:I((.075+t.size*.035)*(.78+A*.28)+u*.05,.05,.22),rot:E,alpha:I(.5+A*.45,.45,1),glow:u*.48}}if(i==="silk"){const b=e%4,p=b<2?1:-1,T=me(t.x+a*.14*p+b*.08),_=(b/3-.5)*.52+Math.sin(T*Math.PI*3+b)*.055;return{x:T-.5,y:_,px:I(.07+t.size*.038+u*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:u*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,M=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),A=I(M*(.42+n*.22+o*.2+h*.28),.18,1),P=.42-_/Math.max(5,1)*A*.82;return{x:E*.86,y:P,px:I(.075+t.size*.03+u*.03,.055,.18),rot:t.rot*.2,alpha:I(.45+(1-_/6)*.5+u*.15,.4,1),glow:u*.55,squash:1-u*.08}}if(i==="ripple"){const p=e%3,T=Math.floor(e/3),_=16,E=me(a*.32),M=.15+p*.145+E*.16+h*.05,A=T/_*Math.PI*2+a*.1;return{x:Math.cos(A)*M,y:Math.sin(A)*M*.88,px:I(.062+t.size*.024+u*.02,.048,.13),rot:A+t.rot*.2,alpha:I(.96-p*.08,.6,1),glow:u*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,E=r>40?r/60*Math.PI*2:5.4,M=T&1?-1:1,A=Math.sin(a*E+T*.85)*.82*M,P=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(A)*P,y:-.44+Math.cos(A)*P,px:I(.07+t.size*.03+u*.028,.05,.16),rot:A,alpha:1,glow:u*.4}}if(i==="burst"){const p=e%3,E=Math.floor(e/3)/16*Math.PI*2+a*.2*(p===1?-1:1),M=(.14+p*.13)*(1+h*.42);return{x:Math.cos(E)*M,y:Math.sin(E)*M*.9,px:I((.08+t.size*.035)*(1+u*.22),.055,.22),rot:E+t.rot*.2,alpha:I(.55+u*.4,.45,1),glow:u*.75,squash:1+u*.14}}if(i==="halo"){const p=e%2,E=Math.floor(e/2)/24*Math.PI*2+a*.26*(p?-1:1),M=.84+.16*Math.sin(a*1.15)+u*.2,A=(.26+p*.14)*M,P=I(.28+u*.65+o*.15,0,1);return{x:Math.cos(E)*A,y:Math.sin(E)*A*.9,px:I(.07+t.size*.032+P*.04,.05,.18),rot:E+Math.PI*.5,alpha:I(.5+P*.45,.4,1),glow:P}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,E=(T+.5)/16-.5,M=.09+n*.05+h*.08,A=E*Math.PI*3.4+a*2.15+_*.55;return{x:E*.92,y:(_-1)*.2+Math.sin(A)*M,px:I(.065+t.size*.03+u*.026,.05,.15),rot:Math.cos(A)*.32,alpha:1,glow:u*.45}}if(i==="drop"){const b=vc(s),p=b*b;return{x:t.x-.5,y:t.y-.5-p*.07,px:I((.1+t.size*.075)*(1+b*.9),.07,.44),glow:b*.95,rot:t.rot,alpha:1,squash:1-b*.2}}if(i==="spot"){const b=Math.max(8,l),p=bc(c,r,b),T=e===p,_=T?I(Math.max(s,u),0,1):0,E=e/b*Math.PI*2,M=.3;return{x:Math.cos(E)*M,y:Math.sin(E)*M*.78,px:I((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const b=it(r),p=Ie(t.x+(.16+Math.abs(t.vx)*.5)*c*b),T=Ie(t.y+(.13+Math.abs(t.vy)*.42)*c*b*.9),_=Math.min(.5-Math.abs(p),.5-Math.abs(T));return{x:p,y:T,px:I(.08+t.size*.04+u*.02,.06,.18),glow:(_<.065?.55:0)+u*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const p=Ko(c,r,2),T=Math.floor(e/16)%2,_=(e%16/16+p/16)*Math.PI*2*(T?-1:1),E=.26+T*.12;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.8,px:I(.07+t.size*.03+u*.02,.05,.16),rot:_,alpha:1,glow:u*.55}}if(i==="moire"){const b=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(b?-.78:.62),_=.2+b*.13+h*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:I(.065+t.size*.028+u*.018,.048,.14),rot:T+t.rot*.2,alpha:b?.78:1,glow:u*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,E=_&1?1:-1;return{x:(me((T+.5)/8+c*it(r)*.28*E)-.5)*.92,y:((_+.5)/6-.5)*.78,px:I(.07+t.size*.03+u*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:u*.42}}if(i==="zip"){const b=e%3,p=b===1?-1:1,T=1-h*.16;return{x:(me(t.x+c*it(r)*.34*p*T+b*.12)-.5)*.94,y:(b/2-.5)*.52,px:I(.07+t.size*.032+u*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:u*.4}}if(i==="ghost"){const b=(e&1)===0,p=b?0:1/it(r),T=t.x*Math.PI*2+(c-p)*it(r)*1.35,_=.3+Math.sin((c-p)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:I(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:b?1:.34,glow:b?u*.5:.12}}if(i==="poly"){const b=e&1,p=b?8:12,T=Math.floor(e/2)%p,_=b?3:4,E=T/p*Math.PI*2+c*it(r)*(_/4)*(b?-1:1),M=.2+b*.15;return{x:Math.cos(E)*M,y:Math.sin(E)*M*.84,px:I(.068+t.size*.03+u*.018,.05,.15),rot:E,alpha:1,glow:u*.45}}if(i==="fall"){const b=me(t.z+c*it(r,.5)),p=os(b),T=p*p,_=p>.82?(p-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:I(.075+t.size*.035+u*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:u*.4,squash:1-_*.28}}if(i==="liss"){const b=it(r),p=c*b*Math.PI*2*1.5+t.x*6.2,T=c*b*Math.PI*2+t.y*5.4;return{x:Math.sin(p)*.4,y:Math.sin(T)*.32,px:I(.07+t.size*.032+u*.02,.05,.16),rot:p*.15+t.rot,alpha:1,glow:u*.42}}if(i==="snap"){const b=Ko(c,r,1)&1?1:-1,p=Math.floor(e/8)%5,T=e%8;return{x:b*(.2+T/7*.1),y:(p/4-.5)*.72,px:I(.072+t.size*.03+u*.025,.05,.16),rot:t.rot*.2+b*.08,alpha:1,glow:u*.6,squash:1-u*.1}}if(i==="chain"){const b=f?.travel??1,p=f?.morph??.7,T=f?.vary??1,_=f?.smooth??.72,M=.62/Math.max(8,l),A=me(c*b*.14-e*M),P=c*p,L=Ka(A,P,T,_),D=Ka(me(A+M),P,T,_),S=Math.max(.42,1.05-L.z*.55),R=Math.max(.42,1.05-D.z*.55),k=L.x/S,N=L.y/S,G=Math.atan2(D.y/R-N,D.x/R-k),O=I(1.12/S,.55,1.85);return{x:k,y:N,px:I((.072+t.size*.028)*O,.05,.24),rot:G,alpha:I(.52+O*.42,.5,1)}}if(i==="tunnel"){const p=.3+me(t.z-a*(.4+n*.22+o*.1))*2.45;if(p<.34||p>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/p;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:I(.2*t.size*(.95+o*.1+u*.26)/p,.04,.5),glow:u*.42,rot:t.rot+t.vr*a*.2,alpha:I((2.65-p)/.28,0,1)*I((p-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,M=.32+(1-me(a*(.2+n*.12)+t.z*.02))*2.2;return{x:T/(M*.62),y:_/(M*.62),px:I(.16*t.size/M,.05,.42),rot:t.rot*.25,alpha:I((2.4-M)/.25,0,1)}}if(i==="bloom"){const b=me(t.z-a*(.34+o*.12)),p=b*b,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*p*.92,y:Math.sin(T)*p*.92,px:I(.05+p*.32*t.size*(1+n*.06+u*.24),.04,.48),glow:u*.4,rot:t.rot+b*.4,alpha:I(1.05-p,0,1)*I(b/.08,0,1)}}if(i==="spiral"){const p=.28+me(t.z-a*(.4+n*.2+o*.08))*2.6;if(p<.32||p>2.75)return null;const T=t.x*Math.PI*2+2.15/p+a*.1,_=(.1+t.y*.38)/p;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:I(.2*t.size*(.94+o*.1+u*.26)/p,.04,.52),glow:u*.4,rot:t.rot+T*.15,alpha:I((2.75-p)/.28,0,1)*I((p-.28)/.1,0,1)}}if(i==="helix"){const p=.26+me(t.z-a*(.46+n*.22+o*.08))*2.7;if(p<.3||p>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/p)+t.x*Math.PI*2+T,E=(.11+t.y*.26)/p;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.92,px:I(.22*t.size*(.93+o*.1+u*.26)/p,.04,.54),glow:u*.4,rot:_+t.rot,alpha:I((2.85-p)/.28,0,1)*I((p-.26)/.1,0,1)}}if(i==="prism"){const p=.28+me(t.z-a*(.42+n*.2+o*.08))*2.55;if(p<.32||p>2.7)return null;const T=a*.22+t.rot*.4,_=me(t.x)-.5,E=me(t.y)-.5,M=Math.cos(T),A=Math.sin(T);return{x:(_*M-E*A)/p,y:(_*A+E*M)/p,px:I(.2*t.size*(.94+o*.1+u*.26)/p,.04,.52),glow:u*.4,rot:t.rot+T,alpha:I((2.7-p)/.26,0,1)*I((p-.28)/.1,0,1)}}if(i==="gyre"){const b=Wt(t.z-a*.4,.28,2.6);if(!b)return null;const{depth:p,fade:T}=b,_=a*.2+t.x*Math.PI*2,E=.22+t.y*.5,M=Math.cos(_)*E,A=Math.sin(_*.93)*E*.86,P=Fn(M,A,a*.12);return{x:P.x/p,y:P.y/p+Math.sin(a*.16)*.05,px:I(.22*t.size*(.93+o*.1+u*.26)/p,.04,.55),glow:u*.42,rot:t.rot+_*.2+t.vr*a*.08,alpha:T}}if(i==="well"){const b=Wt(t.z-a*.4,.26,2.65);if(!b)return null;const{depth:p,fade:T}=b,_=t.x*Math.PI*2+a*.16+2.6*Math.log(p+.18),E=(.2+e%8*.028)/Math.pow(p,.82);return{x:Math.cos(_)*E,y:Math.sin(_)*E,px:I(.21*t.size*(.93+o*.1+u*.26)/p,.04,.54),glow:u*.42,rot:t.rot+_*.2,alpha:T}}if(i==="hall"){const b=Wt(t.z-a*.42,.3,2.5);if(!b)return null;const{depth:p,fade:T}=b,_=e%4,E=me(t.x*.72+t.y*.28)-.5,M=.05/p;let A=0,P=0;_===0?(A=-.52/p-M,P=E/p):_===1?(A=.52/p+M,P=E/p):_===2?(A=E/p,P=-.4/p-M):(A=E/p,P=.4/p+M);const L=Fn(A,P,.42/p+a*.08);return{x:L.x,y:L.y,px:I(.2*t.size*(.93+o*.1+u*.26)/p,.04,.5),glow:u*.4,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="drift"){const b=Wt(t.z-a*.4,.28,2.58);if(!b)return null;const{depth:p,fade:T}=b,E=e%5*1.256,M=a*.09,A=me(t.x+Math.cos(E)*M)-.5,P=me(t.y+Math.sin(E)*M*.72)-.5;return{x:A/p,y:P/p,px:I(.21*t.size*(.93+o*.1+u*.26)/p,.04,.52),glow:u*.42,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="braid"){const b=Wt(t.z-a*.44,.26,2.68);if(!b)return null;const{depth:p,fade:T}=b,_=e%3,E=a*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/p,M=(.13+t.y*.2)/p,A=Math.sin(a*.2+_*2.1)*.07;return{x:Math.cos(E)*M+A,y:Math.sin(E)*M*.9,px:I(.22*t.size*(.93+o*.1+u*.26)/p,.04,.54),glow:u*.4,rot:E+t.rot,alpha:T}}if(i==="sway"){const b=Wt(t.z-a*.46,.26,2.7);if(!b)return null;const{depth:p,fade:T}=b,_=Math.sin(a*.19)*.48,E=Math.cos(a*.13)*.3,M=Math.sin(a*.07)*.32,A=me(t.x+t.vx*a*.03)-.5,P=me(t.y+t.vy*a*.02)-.5,L=Fn(A,P,M),D=1/p-.38;return{x:L.x/p+_*D,y:L.y/p+E*D,px:I(.24*t.size*(.92+o*.1+u*.28)/p,.04,.58),glow:u*.46,rot:t.rot+t.vr*a*.12+M*.4,alpha:T}}const m=.26+me(t.z-a*(.46+n*.24+o*.1))*2.7;if(m<.3||m>2.85)return null;const v=(me(t.x+t.vx*a*.03)-.5)/m,w=(me(t.y+t.vy*a*.02)-.5)/m;return{x:v,y:w,px:I(.24*t.size*(.92+o*.1+u*.28)/m,.04,.6),glow:u*.48,rot:t.rot+t.vr*a*.12,alpha:I((2.85-m)/.3,0,1)*I((m-.26)/.1,0,1)}}const jt={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function Zf(t){return jt[t]}function $e(t,e,i){const a=parseInt(t.slice(1),16),n=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(n))return t;const o=I(i,0,1),s=l=>Math.round((a>>l&255)*(1-o)+(n>>l&255)*o);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function Qf(t,e,i,a,n,o,s,r=0,l=0,c=!1,f=Mn[n]){const d=Se(s+4>>>0),h=De(d,jt[n]),u=De(d,jt[n]),g=De(d,jt[n]),m=c?$e(a,"#08060a",.68):a;t.fillStyle=m,t.fillRect(0,0,e,i);const v=t.createLinearGradient(0,0,e,i);if(c){const T=$e(f,"#ffd8a8",.3),_=.16+l*.4+r*.06;v.addColorStop(0,$e(m,T,_*.55)),v.addColorStop(.48,$e(m,h,.2)),v.addColorStop(1,$e(m,u,.24))}else v.addColorStop(0,$e(a,h,.38)),v.addColorStop(.45,$e(a,g,.28)),v.addColorStop(1,$e(a,u,.42));t.fillStyle=v,t.fillRect(0,0,e,i);const w=e*(.5+Math.sin(o*.17)*.08),b=i*(.46+Math.cos(o*.13)*.06),p=t.createRadialGradient(w,b,0,w,b,Math.max(e,i)*.72);if(c){const T=$e(f,"#ffd8a8",.28);p.addColorStop(0,$e(m,T,.22+l*.38+r*.05)),p.addColorStop(1,m)}else p.addColorStop(0,$e(a,h,.42+r*.1)),p.addColorStop(1,a);t.fillStyle=p,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function Yf(t,e=0){const i=Se(e+17>>>0);return De(i,jt[t])}function hi(t,e){const i=Se(t+17>>>0);return De(i,jt[Tt[Math.floor(i()*Tt.length)]])}function mi(t,e="#c41e3a"){const i=Se(t+91>>>0);return i()<.35?e:De(i,ci)}function Jf(t){return Mn[t]}function It(t){return Tt[(t>>>0)%Tt.length]}const pi=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],In={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},Bn={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},Bt=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(Bn).map(t=>t.palette)];function gi(t){return t&&pi.includes(t)?t:"kit"}function Vt(t,e){const i=gi(e);return i==="kit"?Zf(t):Bn[i].grounds}function ht(t,e){const i=gi(e);return i==="kit"?Jf(t):Bn[i].ink}function Za(t,e=0,i){const a=Vt(t,i),n=Se(e+17>>>0);return a[Math.floor(n()*a.length)%a.length]}function Qa(t){return pi[Math.floor(t()*pi.length)%pi.length]}function ss(t){return Bt[Math.floor(t()*Bt.length)%Bt.length]}function Be(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const ed=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],td=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],id=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ad=[{id:"halftone",name:"Dot Screen",category:"texture",description:"Ben-Day / newsprint dots that turn the collage into a printed sheet",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.72},{id:"scale",label:"Scale",kind:"float",min:.35,max:2.4,step:.01,default:1},{id:"contrast",label:"Ink",kind:"float",min:0,max:1,step:.01,default:.42},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],nd=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],od=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],rs=`
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
`,ls=`
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
`,sd=`
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
`,rd=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,ld=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,cs=`
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
`,Rn={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${cs}${ls}`,applyGlsl:rd};function cd(t){return t?{...Rn,extraUniforms:`${cs}${ls}${sd}`,applyGlsl:ld}:Rn}const ud=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${rs}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Rn],zn=[...ed,...td,...id,...ad,...nd,...od,...ud],fd=new Map(zn.map(t=>[t.id,t]));function dd(){return zn}function at(t){return fd.get(t)}function hd(){const t={};for(const e of zn)(t[e.category]??=[]).push(e);return t}const md=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"texture",label:"Texture"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function On(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(n=>({...n,params:{...n.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Be("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function pd(t,e){const i=e.data,a=t.sources.map(o=>o.id),n=i.layers.map((o,s)=>({...o,id:o.id,sourceId:o.sourceId&&a.includes(o.sourceId)?o.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:n,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function gd(t,e){if(t.length===0)return null;const i=Se(e);return t[Math.floor(i()*t.length)]}function vd(t){return{...t,id:Be("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const us=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function bd(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(f=>{const d=parseInt(f.slice(1),16),h=d>>16&255,u=d>>8&255,g=d&255,m=v=>I(Math.round(Ue(v,t()*255,a)),0,255);return`#${[m(h),m(u),m(g)].map(v=>v.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const n=e.min??0,o=e.max??1,s=typeof i=="number"?i:Number(e.default),r=n+t()*(o-n),l=Ue(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function Hn(t,e,i,a){const n=at(t.typeId);if(!n)return t;const o=Se(e),s={...t.params};for(const r of n.params)a&&r.id!==a||(s[r.id]=bd(o,r,s[r.id]??r.default,I(i,0,1)));return{...t,params:s}}function yd(t,e,i,a=!1,n){const o=t.effects.map((s,r)=>a&&n&&s.id!==n?s:Hn(s,e+r*997,i));return{...t,effects:o}}function Ln(t,e,i){const a=at(t),n={};if(a)for(const o of a.params)n[o.id]=o.default;return Hn({id:Be("fx"),typeId:t,enabled:!0,params:n},e,i)}function Nn(t,e,i,a){const n={...t.params};if(t.typeId==="grade"&&(e==="lush"?(n.saturation=.18+a()*.42,n.brightness=-.04+a()*.16,n.contrast=.06+a()*.22,n.gamma=.82+a()*.35,n.hue=(a()-.5)*.18,n.exposure=-.15+a()*.4):e==="outsider"?(n.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,n.contrast=.2+a()*.55,n.gamma=.55+a()*1.1,n.hue=(a()-.5)*.7):(n.saturation=.05+a()*.5,n.contrast=.1+a()*.35,n.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(n.shadow=i.shadow,n.highlight=i.highlight,n.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(n.leakColor=i.leak,n.leak=e==="lush"?.18+a()*.35:a()*.22,n.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(n.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,n.halation=e==="lush"?.22+a()*.4:a()*.25,n.size=1.4+a()*2.2),t.typeId==="warp"&&(n.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(n.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(n.mixScan=e==="lush"?a()*.2:.25+a()*.5,n.noise=e==="lush"?a()*.1:.12+a()*.35),(t.typeId==="halftone"||t.typeId==="riso"||t.typeId==="hatch"||t.typeId==="holo"||t.typeId==="crackle"||t.typeId==="nap")&&(n.amount=e==="lush"?.38+a()*.32:.5+a()*.38),t.typeId==="posterize"&&(n.levels=3+Math.floor(a()*6),n.dither=.08+a()*.35),t.typeId==="threshold"&&(n.mix=.35+a()*.45,n.soft=.04+a()*.18),t.typeId==="critters"){n.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),n.size=.85+a()*.7,n.amount=.7+a()*.3,n.speed=.7+a()*1.3,n.seed=1+Math.floor(a()*9998);const o=a();e==="lush"?n.kit=o>.72?"votives":o>.48?"charms":o>.22?"shapes":"toy pop":e==="mix"?n.kit=o>.62?"moths":o>.4?"toy pop":o>.2?"mix":"shapes":n.kit=o>.55?"toy pop":o>.28?"mix":"shapes"}if(t.typeId==="dancer"){n.size=.12+a()*.05,n.count=1,n.crowd="normal",n.place="center";const o=a();e==="lush"?n.move=o>.38?"float":o>.18?"drift":"dance":e==="mix"?n.move=o>.52?"float":o>.3?"drift":o>.16?"orbit":"dance":n.move=o>.78?"drift":"dance",n.echo=.35+a()*.5,n.amount=1,n.speed=n.move==="dance"?.55+a()*1.5:.32+a()*.7,n.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?n.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?n.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":n.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?n.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?n.coat=r>.5?"sodium":r>.26?"cream":"wild":n.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(n.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),n.zoom=.7+a()*.8),t.typeId==="channels"&&(n.tint=i.leak,n.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(n.lo=.1+a()*.22,n.hi=.5+a()*.35,n.amount=.45+a()*.4,n.invert=a()>.72),t.typeId==="dropout"&&(n.amount=.28+a()*.4,n.rate=.18+a()*.4,n.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:n}}function wd(t,e="mix"){const i=Se(t>>>0);return Nn(Ln("critters",t,.85),e,Bt[t%Bt.length],i)}function kd(t,e="mix"){const i=Se(t>>>0);return Nn(Ln("dancer",t,.85),e,Bt[t%Bt.length],i)}function Td(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,kd(t.seed+i*4243,"mix")]})}}function fs(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,wd(t.seed+i*7919,"mix")]})}}function _d(){return us.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Sd(){return dd().map(t=>t.id).filter(t=>t!=="dancer")}function xd(t,e){const i=Se(t>>>0),a=Sd(),n=e?3:2,o=e?5:4,s=Math.min(a.length,n+Math.floor(i()*(o-n+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Cd(t,e,i,a=!1,n=!0){const o=Se(e+17>>>0),s=a?o()>.5?"outsider":"mix":o()>.55?"lush":o()>.35?"mix":"outsider",r=ss(o),l=n?xd(e,a).map((c,f)=>Nn(Ln(c,e+f*3331,i),s,r,Se(e+f*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function ds(t,e,i,a,n,o=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=Se(l^2654435769),f=t.layers.map((p,T)=>e==="selected"&&p.id!==i?p:e==="param"?p.id!==i?p:{...p,effects:p.effects.map(_=>_.id===a&&n?Hn(_,l+T*13,Math.max(r,.55),n):_)}:e==="all"?Cd(p,l+T*7919,r,o,s):yd(p,l+T*7919,r,!0,a)),d=$o,h=Se(l+0*7919>>>0),u=_d(),g=u[Math.floor(h()*u.length)]??us[0],v={"herald tour":{generator:"heraldry",a:hi(l),b:mi(l)},"dense paper":{generator:"wallpaper",a:hi(l+3),b:mi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:hi(l+5),b:mi(l+5)},"heart rain":{generator:"shower",a:hi(l+7),b:mi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:hi(l+9),b:mi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[g.name],w=t.sources.map((p,T)=>{if(e!=="all"||p.kind!=="generator")return p;const _=Se(l+T*131),E=ss(_);if(Ae(p.generator)||$o.includes(p.generator)){const R=It(l+T*41),k=En(l+T*73),N=It(l+T*99),G=_()>.74&&N!==R?N:void 0,O=Qa(_);return{...p,generator:Xa(k),collageKit:R,collageKitB:G,collageMove:k,collageColorPack:O,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageChainAnimal:k==="chain"&&_()>.55?Ga[1+Math.floor(_()*5)]:"off",collageCamera:p.collageCamera??"fixed",collageCameraFeel:p.collageCameraFeel,collageHuntWideMin:p.collageHuntWideMin,collageHuntWideMax:p.collageHuntWideMax,collageHuntFollowMin:p.collageHuntFollowMin,collageHuntFollowMax:p.collageHuntFollowMax,collageHuntSnap:p.collageHuntSnap,collageHuntZoom:p.collageHuntZoom,collageHuntTight:p.collageHuntTight,collageHuntReactMin:p.collageHuntReactMin,collageHuntReactMax:p.collageHuntReactMax,collageHuntPrecision:p.collageHuntPrecision,collageHuntSelect:p.collageHuntSelect,collageHuntFocus:p.collageHuntFocus,collageHuntFocusSpeed:p.collageHuntFocusSpeed,collageHuntFocusError:p.collageHuntFocusError,collageHuntVariation:p.collageHuntVariation,colorA:Za(R,l+T*17,O),colorB:ht(R,O),name:G?`${ii[k]} · ${R} · ${G}`:`${ii[k]} · ${R}`}}const M=o?!1:_()>.35,A=v?v.generator:M?p.generator:d[Math.floor(_()*d.length)],P=It(l+T*41),L=Qa(_),D=Ae(A)?Za(P,l+T*17,L):E.inkA,S=Ae(A)?ht(P,L):E.inkB;return{...p,generator:A,collageKit:Ae(A)?P:p.collageKit,collageColorPack:Ae(A)?L:p.collageColorPack,colorA:v?v.a:D,colorB:v?ht(P,L):S}}),b=e==="all"?o?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:f,sources:w,globalFeedback:b}}function Ed(t){const e=t.seed+7919>>>0,i=Se(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],n=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],o=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Ae(r.generator))return r;const c=Tt[Math.floor(i()*Tt.length)],f=En(e+l*59),d=Qa(i);return{...r,generator:Xa(f),collageKit:c,collageMove:f,collageColorPack:d,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageChainAnimal:f==="chain"&&i()>.55?Ga[1+Math.floor(i()*5)]:"off",collageCamera:r.collageCamera??"fixed",collageCameraFeel:r.collageCameraFeel,collageHuntSelect:r.collageHuntSelect,collageHuntFocus:r.collageHuntFocus,collageHuntVariation:r.collageHuntVariation,colorA:Za(c,e+l*13,d),colorB:ht(c,d),name:`${ii[f]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:n[Math.floor(i()*n.length)],coat:o[Math.floor(i()*o.length)]}}:l)}))};return s=fs(s),s}function Md(){return{x:0,y:0,scale:1,rotation:0}}function Pd(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function hs(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Ad(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Fd(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!0}}const Id={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Ya={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},Bd={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function ms(t,e,i,a){const n=t==="chain"?li(a):"off",o=n!=="off"?`CHAIN · ${Go[n].toUpperCase()}`:ii[t];return i&&i!==e?`${o} · ${Ya[e]} · ${Ya[i]}`:`${o} · ${Ya[e]}`}function Gt(t="plasma",e,i,a){const n=Ae(t)?Ft(e):void 0,o=Id[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;n&&(s=i==="mix"||i==="tour"?En(Date.now()+Math.floor(Math.random()*997)):i?jo(i):Xo(t));const r=s?Xa(s):t??"plasma",l=s?ii[s]:Bd[t??""]??(t?t.toUpperCase():"SIGNAL"),c=n&&a?.kitB?Ft(a.kitB):void 0,f=c&&n&&c!==n?c:void 0,d=n&&s?ms(s,n,f,a?.chainAnimal):n?`${l} · ${Ya[n]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,h=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,u=n?gi(a?.colorPack):void 0;return{id:Be("src"),name:d,kind:"generator",generator:r,colorA:h??(n?Za(n,s==="rush"?1:s==="tunnel"?5:s==="bounce"?7:11,u):o.a),colorB:n?ht(n,u):o.b,collageColorPack:u,collageKit:n,collageKitB:f,collageMove:s,collageNight:n?!!a?.night:void 0,collageScale:n?fi(a?.scale):void 0,collageDensity:n?di(a?.density):void 0,collagePace:n?ai(a?.pace):void 0,collageChainTravel:n?ni(a?.chainTravel):void 0,collageChainMorph:n?oi(a?.chainMorph):void 0,collageChainVary:n?si(a?.chainVary):void 0,collageChainSmooth:n?ri(a?.chainSmooth):void 0,collageChainAnimal:n?li(a?.chainAnimal):void 0,collageSpringStrength:n?fa(a?.springStrength):void 0,collageSpringDamp:n?da(a?.springDamp):void 0,collageSpringDist:n?ha(a?.springDist):void 0,collageSpringElast:n?ma(a?.springElast):void 0,collageSpringBreak:n?pa(a?.springBreak):void 0,collageFlowScale:n?ga(a?.flowScale):void 0,collageFlowTurb:n?va(a?.flowTurb):void 0,collageFlowEvolve:n?ba(a?.flowEvolve):void 0,collageFlowForce:n?ya(a?.flowForce):void 0,collageFlowDepth:n?wa(a?.flowDepth):void 0,collageBoidCohere:n?ka(a?.boidCohere):void 0,collageBoidSep:n?Ta(a?.boidSep):void 0,collageBoidAlign:n?_a(a?.boidAlign):void 0,collageBoidRadius:n?Sa(a?.boidRadius):void 0,collageBoidSpeed:n?xa(a?.boidSpeed):void 0,collagePoleCount:n?Ca(a?.poleCount):void 0,collagePoleAttract:n?Ea(a?.poleAttract):void 0,collagePoleRepel:n?Ma(a?.poleRepel):void 0,collagePoleSpeed:n?Pa(a?.poleSpeed):void 0,collagePoleFalloff:n?Aa(a?.poleFalloff):void 0,collagePoleSwitch:n?Fa(a?.poleSwitch):void 0,collageFieldStrength:n?qi(a?.fieldStrength):void 0,collageFieldScale:n?Di(a?.fieldScale):void 0,collageFieldEvolve:n?$i(a?.fieldEvolve):void 0,collageFieldDensity:n?Wi(a?.fieldDensity):void 0,collageFieldDensityScale:n?ji(a?.fieldDensityScale):void 0,collageFieldDensityEvolve:n?Vi(a?.fieldDensityEvolve):void 0,collageFieldFlow:n?Gi(a?.fieldFlow):void 0,collageFieldCurl:n?Ki(a?.fieldCurl):void 0,collageFieldFlowScale:n?Xi(a?.fieldFlowScale):void 0,collageFieldAttract:n?Zi(a?.fieldAttract):void 0,collageFieldRepel:n?Qi(a?.fieldRepel):void 0,collageFieldRadius:n?Yi(a?.fieldRadius):void 0,collageFieldInertia:n?Ji(a?.fieldInertia):void 0,collageFieldDamp:n?ea(a?.fieldDamp):void 0,collageFieldMaxV:n?ta(a?.fieldMaxV):void 0,collageFieldScaleAmp:n?ia(a?.fieldScaleAmp):void 0,collageFieldMinScale:n?aa(a?.fieldMinScale):void 0,collageFieldMaxScale:n?na(a?.fieldMaxScale):void 0,collageFieldPerturb:n?oa(a?.fieldPerturb):void 0,collageFieldWarp:n?sa(a?.fieldWarp):void 0,collageFieldSparsity:n?ra(a?.fieldSparsity):void 0,collageFieldContrast:n?la(a?.fieldContrast):void 0,collageFieldMotion:n?ca(a?.fieldMotion):void 0,collageCamera:n?ti(a?.camera):void 0,collageCameraFeel:n?Ia(a?.cameraFeel):void 0,collageHuntWideMin:n?Ra(a?.huntWideMin):void 0,collageHuntWideMax:n?za(a?.huntWideMax):void 0,collageHuntFollowMin:n?Oa(a?.huntFollowMin):void 0,collageHuntFollowMax:n?Ha(a?.huntFollowMax):void 0,collageHuntSnap:n?La(a?.huntSnap):void 0,collageHuntZoom:n?Na(a?.huntZoom):void 0,collageHuntTight:n?Ua(a?.huntTight):void 0,collageHuntReactMin:n?qa(a?.huntReactMin):void 0,collageHuntReactMax:n?Da(a?.huntReactMax):void 0,collageHuntPrecision:n?$a(a?.huntPrecision):void 0,collageHuntSelect:n?Ba(a?.huntSelect):void 0,collageHuntFocus:n?!!a?.huntFocus:void 0,collageHuntFocusSpeed:n?Wa(a?.huntFocusSpeed):void 0,collageHuntFocusError:n?ja(a?.huntFocusError):void 0,collageHuntVariation:n?Va(a?.huntVariation):void 0,width:1280,height:720,duration:0}}function ps(t){const e=at(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Be("fx"),typeId:t,enabled:!0,params:i}}function gs(t,e,i=[]){return{id:Be("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Md(),effects:i.map(ps),mask:Pd(),feedback:hs()}}function vs(){const t=Gt("wallpaper","sailor","rush"),e=gs("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Ad(),globalFeedback:{...hs(),amount:0,opacity:.4,scale:1},exportSettings:Fd(),presets:[]},a=ds({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[On(i,"factory · tour"),On(a,"factory · scramble")],i}function bs(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1}}class Rd{state;listeners=new Set;constructor(e=vs()){this.state={project:e,ui:bs(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...bs(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const F=new Rd;function Un(t,e,i,a,n){if(e<=0)return 0;const o=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(o*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=o;if(i==="reverse"&&(s=-o),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return n?(s%e+e)%e:I(s,0,e)}function zd(t,e,i,a,n){return t.filter(o=>o.layerId===e&&o.target===i&&o.paramId===a&&(i!=="effect"||o.effectId===n)).sort((o,s)=>o.time-s.time)}function Od(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let n=0;n<t.length-1;n++){const o=t[n],s=t[n+1];if(e>=o.time&&e<=s.time){const r=s.time-o.time||1;let l=(e-o.time)/r;return(s.easing==="smooth"||o.easing==="smooth")&&(l=Tl(l)),Ue(o.value,s.value,l)}}return i}function _t(t,e,i,a,n,o,s){const r=zd(t.keyframes,e,i,a,s);return Od(r,o,n)}function Hd(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(n=>({...n,params:{...n.params}}))};a.opacity=_t(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=_t(t,e.id,"layer","x",e.transform.x,i),a.transform.y=_t(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=_t(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=_t(t,e.id,"layer","rotation",e.transform.rotation,i);for(const n of Object.keys(a.feedback))a.feedback[n]=_t(t,e.id,"feedback",n,e.feedback[n],i);for(const n of a.effects)for(const[o,s]of Object.entries(n.params))typeof s=="number"&&(n.params[o]=_t(t,e.id,"effect",o,s,i,n.id));return a}function Ld(t,e){const i=t.layers[0]?.id??"";return _t(t,i,"playback","speed",t.playback.speed,e)}const Nd=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],Ud=["spot","burst","snap","step"],qd=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],Dd=["drop","halo","bars","wave","poly","ghost","fall"];function $d(t,e){const i=e.reduce((n,o)=>n+o.weight,0);let a=t()*i;for(const n of e)if(a-=n.weight,a<=0)return n.item;return e[e.length-1].item}function Wd(t){return $d(t,Nd.map(e=>({item:e.beats,weight:e.weight})))}function jd(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(n=>n!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function Vd(t,e,i){const a=t<=2?Ud:t<=4?qd:Dd;return jd(e,a,i)}function ys(t){return 60/Math.max(40,t||120)}function ws(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function Gd(t,e,i,a){const n=Math.max(1,t),o=ys(e),s=(i??[]).filter(c=>c>=0&&c<n+.05);let r=Number.isFinite(a)&&a>=0?a:s.length?ws(s[0],o):0;r>=n&&(r=ws(r,o));const l=[];for(let c=r;c<n-o*.02;c+=o)l.push(c);if(!l.length)for(let c=0;c<n;c+=o)l.push(c);return l.length||l.push(0),l[l.length-1]<n-1e-6&&l.push(n),l}function Kd(t,e,i,a){const n=ys(e),o=Number.isFinite(i)&&i>0?i:0,s=a&&a>0?a:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<o-1e-6?0:Math.max(0,Math.floor((r-o)/n+1e-4))}function Xd(t){const e=Se(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=Gd(i,t.bpm??120,t.beats,t.offset),n=[];let o=0,s,r,l=0;for(;o<a.length-1&&a[o]<i;){const c=Wd(e);r=It(t.seed+l*41+Math.floor(e()*17)>>>0);const f=l%5===2||e()>.82,d=e()>.72?It(t.seed+l*99+7>>>0):void 0,h=d&&d!==r?d:void 0,u=Qa(e),g=Vt(r,u);for(const m of c){if(o>=a.length-1||a[o]>=i)break;const v=Math.min(a.length-1,o+m),w=a[o];if(w>=i)break;const b=Vd(v-o,e,s),p=g[Math.floor(e()*g.length)%g.length];n.push({start:w,beats:v-o,startBeat:o,look:{kit:r,kitB:h,move:b,night:f,wash:p,ink:ht(r,u),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=b,o=v}if(l++,l>80)break}if(n.length>=2&&n[n.length-1].beats<2){const c=n.pop();n[n.length-1].beats+=c.beats}if(!n.length){const c=It(t.seed);n.push({start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:Vt(c)[0],ink:ht(c),scale:.78,density:.88,pace:.62}})}return n}function Zd(t,e,i,a,n){if(!t.length){const c=It(1);return{start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:Vt(c)[0],ink:ht(c),scale:.78,density:.88,pace:.62}}}const o=t[t.length-1],s=Math.max(i&&i>o.start?i:0,o.start+.5,t.length>1?o.start+(o.start-t[0].start)/Math.max(1,t.length-1):o.start+2);if(a&&a>40){const c=Number.isFinite(n)&&n>=0?n:t[0].start,f=Kd(e,a,c,s);let d=t[0];for(const h of t)if(h.startBeat<=f)d=h;else break;return d}const r=(e%s+s)%s;let l=t[0];for(const c of t)if(c.start<=r+5e-4)l=c;else break;return l}function Qd(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const Yd=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function Jd(t){return(t.type??"").startsWith("audio/")||Yd.test(t.name)}function vi(t){return t.sources.find(e=>e.kind==="audio")}let bi=null,mt=null,yi=null;const qn=new WeakSet;let wi=0,ki=0,Rt=0,ks=0;function Ja(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(bi||(bi=new t,mt=bi.createAnalyser(),mt.fftSize=256,mt.smoothingTimeConstant=.72,mt.connect(bi.destination),yi=new Uint8Array(mt.frequencyBinCount)),bi):null}async function en(){const t=Ja();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function eh(t){const e=Ja();if(!(!e||!mt||qn.has(t)))try{e.createMediaElementSource(t).connect(mt),qn.add(t)}catch{qn.add(t)}}async function th(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",eh(i),en();let a=null;const n=Ja();if(n)try{const d=await t.arrayBuffer(),h=n.decodeAudioData(d.slice(0)).catch(()=>null);a=await Promise.race([h,new Promise(u=>setTimeout(()=>u(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(d=>{if(Number.isFinite(i.duration)&&i.duration>0){d(i.duration);return}i.addEventListener("loadedmetadata",()=>d(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>d(a?.duration??0),{once:!0})}),new Promise(d=>setTimeout(()=>d(a?.duration??0),2500))])||a?.duration||0,r=a?ih(a.getChannelData(0),a.sampleRate):[],l=ah(r,s),c=a?nh(a.getChannelData(0),a.sampleRate,l.bpm,l.offset,s):l.offset,f=l.bpm>40?oh(r,l.bpm,c,s):r;return{id:Be("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:f,bpm:l.bpm,beatOffset:c,objectUrl:e}}function ih(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,n=Math.floor((t.length-a)/i);if(n<16)return[];const o=new Float32Array(n);for(let f=0;f<n;f++){const d=f*i;let h=0;for(let u=0;u<a;u+=2){const g=t[d+u];h+=g*g}o[f]=Math.sqrt(h/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let f=s;f<n;f++){let d=0,h=0;for(let v=f-s;v<f;v++)d+=o[v],o[v]>h&&(h=o[v]);d/=s;const u=o[f]-o[f-1];if(!(o[f]>d*1.32&&o[f]>h*.72&&u>.0035))continue;const m=f*i/e;m-c<r||(l.push(m),c=m)}return l}function ah(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let d=1;d<t.length;d++){const h=t[d]-t[d-1];h>=.18&&h<=1.2&&i.push(h)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((d,h)=>d-t[h]).filter(d=>d>.12&&d<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((d,h)=>d-h);const n=a[Math.floor(a.length/2)];let o=60/Math.max(.18,n);for(;o>155;)o/=2;for(;o<72&&o>0;)o*=2;o=Dn(Math.round(o),70,170);let s=o,r=0,l=-1;const c=Math.max(70,o-8),f=Math.min(170,o+8);for(let d=c;d<=f;d++){const h=60/d,u=e>0?e:(t[t.length-1]??0)+h,g=new Set([0,(t[0]%h+h)%h]);for(let m=0;m<Math.min(t.length,16);m++)g.add((t[m]%h+h)%h);for(const m of g){let v=0;for(const w of t){const b=((w-m)%h+h)%h,p=Math.min(b,h-b);p<h*.12&&(v+=1-p/(h*.12))}m>.03&&m<u-h*.5&&(v+=.15),v*=1-Math.abs(d-118)/400,v>l&&(l=v,s=d,r=m)}}return{bpm:s,offset:r}}function nh(t,e,i,a,n){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(a)&&a>=0?a:0;const o=60/i,s=o*4,r=Number.isFinite(a)&&a>=0?a:0,l=Math.max(32,Math.floor(e*.04)),c=[0,0,0,0],f=n>0?n:t.length/e;for(let u=0;u<4;u++){let g=0,m=0;for(let v=r+u*o;v<f-.04&&m<72;v+=s){const w=Math.max(0,Math.min(t.length-l-1,Math.floor(v*e)));let b=0;for(let p=0;p<l;p+=3){const T=t[w+p];b+=T*T}g+=b,m++}c[u]=g/Math.max(1,m)}let d=0;for(let u=1;u<4;u++)(c[u]>c[d]*1.05||c[u]>c[d]*.97&&u%2===0&&d%2===1)&&(d=u);return((r+d*o)%s+s)%s}function oh(t,e,i,a){if(!(e>40))return[...t];const n=60/e,o=Math.max(n,a||(t[t.length-1]??0)+n),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<o-n*.08;l+=n)r.push(l);return r.length?r:[...t]}function Ts(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const n=60/e;if(!(n>0))return 0;const o=t-a;if(o<-.02)return 0;const s=(o%n+n)%n;return Math.exp(-s/i)}function sh(t,e,i=.2){if(!t.length)return 0;let a=0,n=t.length-1;for(;a<n;){const r=a+n+1>>1;t[r]<=e?a=r:n=r-1}const o=t[a];if(o>e)return 0;const s=e-o;return s>i*3.2?0:Math.exp(-s/i)}function Dn(t,e,i){return Math.max(e,Math.min(i,t))}function rh(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const n=(a%i+i)%i,o=Math.floor(n*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,o)),l=Math.max(r+1,Math.min(t.length,o+s));let c=0;for(let v=r;v<l;v++)c+=t[v]*t[v];const f=Math.min(1,Math.sqrt(c/(l-r))*3.4),d=Math.max(s,Math.floor(e*.09)),h=Math.min(t.length,o+d);let u=0,g=0;for(let v=r;v<h;v+=8)u+=t[v]*t[v],g++;const m=Math.min(1,Math.sqrt(u/Math.max(1,g))*4.2);return{energy:f,bass:m}}function lh(){if(!mt||!yi)return null;mt.getByteFrequencyData(yi);let t=0,e=0;const i=yi.length,a=Math.max(4,Math.floor(i*.12));for(let n=0;n<i;n++){const o=yi[n]/255;t+=o,n<a&&(e+=o)}return{energy:t/i,bass:e/a}}function ch(t,e){let i=0,a=0,n=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=rh(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],f=t.beatOffset??0,d=c.length?sh(c,r,.11):0,h=Ts(r,t.bpm??0,.11,f),u=Dn((i-.12)*.75,0,.6);n=Math.max(d,h*.86,c.length?u*.28:u)}else if(t?.kind==="audio"){const s=lh();s&&(i=s.energy,a=s.bass,n=Math.max(Ts(e,t.bpm??0,.11,t.beatOffset??0)*.86,Dn((i-.12)*.55,0,.5)))}Math.abs(e-ks)>.2||n>=Rt?Rt=n:Rt+=(n-Rt)*.32,ks=e;const o=t?.kind==="audio"?.22:.14;return wi+=(i-wi)*o,ki+=(a-ki)*Math.min(o,.16),!t&&wi<.002&&(wi=0),!t&&ki<.002&&(ki=0),t||(Rt=0),{energy:wi,bass:ki,beat:Rt}}function uh(t,e,i=0,a=0){const n=e.length,o=t.length;if(n<1)return;if(o<1){e.fill(0);return}const s=(Math.round(a)%o+o)%o;for(let l=0;l<n;l++)e[l]=t[(s+l)%o];if(i<=0)return;const r=Math.max(1,Math.round(n*i));for(let l=0;l<r;l++)e[n-r+l]*=1-(l+1)/r}function $n(t){if(!vi(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function fh(t,e,i=!1,a=0){const n=t.sampleRate,o=Math.max(1,Math.round(Math.max(.05,e)*n)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:o,numberOfChannels:s,sampleRate:n}),l=i?.12:0,c=Number.isFinite(a)&&a>0?a:0,f=Math.round(c*n);for(let d=0;d<s;d++)uh(t.getChannelData(d),r.getChannelData(d),l,f);return r}async function dh(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(o=>o.arrayBuffer()),new Promise(o=>setTimeout(()=>o(null),2500))]);if(!i)return null;const a=Ja()??new e,n=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(o=>setTimeout(()=>o(null),4e3))]);if(n&&n.length>32)return t.pcm=n,n}catch{return null}return null}function Wn(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const hh=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,mh=`#version 300 es
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
`,ph=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,gh=`#version 300 es
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
`,vh=`#version 300 es
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
`,bh=`#version 300 es
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
`,yh=`#version 300 es
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
`,wh=`#version 300 es
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
${rs}
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
`,kh=`#version 300 es
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
`,Th=`#version 300 es
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
`,_h=`#version 300 es
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
`,Sh=`#version 300 es
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
`,xh=`#version 300 es
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
`,Ch=`#version 300 es
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
`,Eh=`#version 300 es
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
`,Mh=`#version 300 es
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
`,Ph=`#version 300 es
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
`,Ah=`#version 300 es
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
`,Fh=`#version 300 es
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
`,Ih=`#version 300 es
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
`,Bh=`#version 300 es
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
`,Rh=`#version 300 es
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
`,zh=`#version 300 es
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
`,Oh=`#version 300 es
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
`,Hh=`#version 300 es
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
`,_s=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Lh=`#version 300 es
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
`;class zt extends Error{}function Nh(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new zt("WebGL2 is required for Phosphene.");return e}function Ss(t,e,i){const a=t.createShader(e);if(!a)throw new zt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new zt(n)}return a}class ve{gl;prog;uniforms=new Map;constructor(e,i,a=hh){this.gl=e;const n=Ss(e,e.VERTEX_SHADER,a),o=Ss(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new zt("Unable to create program");if(e.attachShader(s,n),e.attachShader(s,o),e.linkProgram(s),e.deleteShader(n),e.deleteShader(o),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new zt(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const n=this.loc(e);n&&this.gl.uniform2f(n,i,a)}v3(e,i,a,n){const o=this.loc(e);o&&this.gl.uniform3f(o,i,a,n)}v4(e,i,a,n,o){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,n,o)}dispose(){this.gl.deleteProgram(this.prog)}}function tn(t){const e=t.createTexture();if(!e)throw new zt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function xs(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Uh(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class Kt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new zt("Unable to create framebuffer");this.fbo=i,this.tex=tn(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Uh(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Oe(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function nt(t){t.drawArrays(t.TRIANGLES,0,3)}const qh={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Dh={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Cs={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function $h(t){return`${mh}
${t.extraUniforms??""}
${t.applyGlsl}
${ph}`}function Wh(t,e){return new ve(t,$h(e))}function Ti(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Xt=8;function Es(t,e,i){return new ImageData(t,e,i)}function jh(t,e,i){const a=t.find(o=>o.id===e);if(!a?.options)return Number(i)||0;const n=a.options.findIndex(o=>o.value===i);return n<0?0:n}class Vh{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new Kf;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=Nh(e),this.generatorProg=new ve(this.gl,yh)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Xt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new Kt(e),this.pong??=new Kt(e),this.composite??=new Kt(e),this.post??=new Kt(e);this.ring.length<Xt;)this.ring.push(new Kt(e));this.copy??=new ve(e,_s),this.blit??=new ve(e,vh),this.compositeProg??=new ve(e,gh),this.feedbackProg??=new ve(e,bh),this.textureProg??=new ve(e,Lh),this.black||(this.black=tn(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(o=>o.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(o=>o.enabled))return!0;const n=e.sources.find(o=>o.id===a.sourceId);return!!(n&&n.kind!=="generator"&&n.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ve(this.gl,kh),this.stageProg):e===13?(this.sketchProg??=new ve(this.gl,Th),this.sketchProg):e===14?(this.feltProg??=new ve(this.gl,_h),this.feltProg):e===15?(this.foilProg??=new ve(this.gl,Sh),this.foilProg):e===16?(this.plushProg??=new ve(this.gl,xh),this.plushProg):e===17?(this.yarnProg??=new ve(this.gl,Ch),this.yarnProg):e===18?(this.sequinProg??=new ve(this.gl,Eh),this.sequinProg):e===19?(this.quiltProg??=new ve(this.gl,Mh),this.quiltProg):e===20?(this.corkProg??=new ve(this.gl,Ph),this.corkProg):e===21?(this.ginghamProg??=new ve(this.gl,Ah),this.ginghamProg):e===22?(this.sprinkleProg??=new ve(this.gl,Fh),this.sprinkleProg):e===23?(this.velvetProg??=new ve(this.gl,Ih),this.velvetProg):e===24?(this.confettiProg??=new ve(this.gl,Bh),this.confettiProg):e===25?(this.discoProg??=new ve(this.gl,Rh),this.discoProg):e===26?(this.terrazzoProg??=new ve(this.gl,zh),this.terrazzoProg):e===27?(this.comicProg??=new ve(this.gl,Oh),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ve(this.gl,Hh),this.fieldsProg):(this.generatorFull??=new ve(this.gl,wh),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",n=this.effectProg.get(a);if(n)return n;const o=e==="dancer"?cd(i):at(e);if(!o)return null;try{const s=Wh(this.gl,o);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(n=>!!n);for(const n of a)n.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new Kt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=tn(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&xs(this.gl,i,a),i}blitTo(e,i){const a=this.gl,n=this.copy;n&&(e.bind(),n.use(),Oe(a,0,i),n.i("uTex",0),nt(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const n=Math.max(a?.duration||0,e.duration,e.exportSettings.duration||0,8),o=`${e.cutEdit.seed}|${n}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==o)&&(this.cutReel=Xd({seed:e.cutEdit.seed,duration:n,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=o);const s=Zd(this.cutReel,i,n,a?.bpm,a?.beatOffset);this.cutStatus=Qd(s),this.cutLook={generator:Xa(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,n,o,s,r){const l=this.gl;this.copy??=new ve(l,_s),this.heraldryTex??=tn(l);const c=this.cutLook??i,f=this.heraldry.paint({width:s,height:r,time:a,duration:o,seed:n,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,chainAnimal:c.collageChainAnimal,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,fieldStrength:c.collageFieldStrength,fieldScale:c.collageFieldScale,fieldEvolve:c.collageFieldEvolve,fieldDensity:c.collageFieldDensity,fieldDensityScale:c.collageFieldDensityScale,fieldDensityEvolve:c.collageFieldDensityEvolve,fieldFlow:c.collageFieldFlow,fieldCurl:c.collageFieldCurl,fieldFlowScale:c.collageFieldFlowScale,fieldAttract:c.collageFieldAttract,fieldRepel:c.collageFieldRepel,fieldRadius:c.collageFieldRadius,fieldInertia:c.collageFieldInertia,fieldDamp:c.collageFieldDamp,fieldMaxV:c.collageFieldMaxV,fieldScaleAmp:c.collageFieldScaleAmp,fieldMinScale:c.collageFieldMinScale,fieldMaxScale:c.collageFieldMaxScale,fieldPerturb:c.collageFieldPerturb,fieldWarp:c.collageFieldWarp,fieldSparsity:c.collageFieldSparsity,fieldContrast:c.collageFieldContrast,fieldMotion:c.collageFieldMotion,camera:c.collageCamera,cameraFeel:c.collageCameraFeel,huntWideMin:c.collageHuntWideMin,huntWideMax:c.collageHuntWideMax,huntFollowMin:c.collageHuntFollowMin,huntFollowMax:c.collageHuntFollowMax,huntSnap:c.collageHuntSnap,huntZoom:c.collageHuntZoom,huntTight:c.collageHuntTight,huntReactMin:c.collageHuntReactMin,huntReactMax:c.collageHuntReactMax,huntPrecision:c.collageHuntPrecision,huntSelect:c.collageHuntSelect,huntFocus:c.collageHuntFocus,huntFocusSpeed:c.collageHuntFocusSpeed,huntFocusError:c.collageHuntFocusError,huntVariation:c.collageHuntVariation});if(xs(l,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Oe(l,0,this.heraldryTex),this.copy.i("uTex",0),nt(l)}drawGenerator(e,i,a,n=77,o=8){if(Ae(i.generator)){this.drawHeraldry(e,i,a,n,o,e.w,e.h);return}const s=this.gl,r=Cs[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?Ti(i.colorA):[.07,.04,.1],f=i.colorB?Ti(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",n),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),nt(s)}drawTexture(e,i,a){const n=this.gl,o=this.textureProg;o&&(e.bind(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),o.use(),Oe(n,0,i),o.i("uTex",0),o.v2("uTranslate",a.transform.x,a.transform.y),o.f("uScale",a.transform.scale),o.f("uRotation",a.transform.rotation),o.v2("uFit",1,1),nt(n))}applyEffect(e,i,a,n,o,s,r,l,c){const f=at(a.typeId),d=this.progFor(a);if(!f||!d){this.blitTo(e,i);return}const h=this.gl;e.bind(),d.use(),Oe(h,0,i),Oe(h,1,l),Oe(h,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",o),d.f("uFrame",s),d.f("uQuality",r==="draft"?0:r==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",n.transform.x,n.transform.y),d.f("u_scale",n.transform.scale),d.f("u_rotation",n.transform.rotation);const u=n.mask;d.i("u_maskType",Dh[u.type]??0),d.i("u_maskInvert",u.invert?1:0),d.f("u_maskSoftness",u.softness),d.v4("u_maskRect",u.rect.x,u.rect.y,u.rect.w,u.rect.h),d.v2("u_maskCenter",u.center.x,u.center.y),d.f("u_maskRadius",u.radius),d.f("u_maskGradientAngle",u.gradientAngle),d.f("u_maskNoiseScale",u.noiseScale);let g=1;for(const m of f.params){const v=a.params[m.id]??m.default,w=`u_${m.id}`;if(m.kind==="color"&&typeof v=="string"){const[b,p,T]=Ti(v);d.v3(w,b,p,T)}else m.kind==="bool"?d.f(w,v?1:0):m.kind==="enum"?d.f(w,jh(f.params,m.id,v)):d.f(w,Number(v));m.id==="mix"&&(g=Number(v))}d.f("u_mix",g),nt(h)}drawLite(e,i){const a=this.gl,n=e.layers.find(d=>d.enabled)??e.layers[0],o=n?e.sources.find(d=>d.id===n.sourceId):null,s=o&&o.kind!=="audio"?o:{generator:"plasma"};if(Ae(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=Cs[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?Ti(s.colorA):[.07,.04,.1],f=s.colorB?Ti(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),nt(a)}render(e,i,a){const n=this.gl,o=a?.quality??e.quality,s=ch(vi(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=vi(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),o!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,f=this.composite,d=this.post,h=this.blit,u=this.compositeProg,g=this.feedbackProg,m=o==="draft"?.5:1,v=Math.max(16,Math.floor((a?.width??this.canvas.width)*m)),w=Math.max(16,Math.floor((a?.height??this.canvas.height)*m));this.ensureSize(v,w),f.bind(),n.clearColor(.02,.02,.03,1),n.clear(n.COLOR_BUFFER_BIT);const b=e.globalFeedback,p=Math.max(0,Math.min(Xt-1,Math.round(b.delay))),T=(this.ringIndex-1-p+Xt*8)%Xt,_=this.ring[T].tex,E=Math.floor(i*e.fps);for(const M of e.layers){if(!M.enabled)continue;const A=Hd(e,M,i),P=e.sources.find(R=>R.id===A.sourceId)??null;if(!P||P.kind==="generator"||P.kind==="audio"){const R=P&&P.kind!=="audio"?P:{generator:"plasma"};this.drawGenerator(l,R,i,e.seed,e.duration)}else{const R=this.uploadSource(P);this.drawTexture(l,R,A)}let L=l,D=c;const S=this.histFor(A.id);for(const R of A.effects){if(!R.enabled)continue;this.applyEffect(D,L.tex,R,A,i,E,o,_,S.tex);const k=L;L=D,D=k}if(A.feedback.amount>.001){D.bind(),g.use(),Oe(n,0,L.tex),Oe(n,1,S.tex),g.i("uTex",0),g.i("uFeedback",1),g.f("uAmount",A.feedback.amount),g.f("uOpacity",A.feedback.opacity),g.f("uScale",A.feedback.scale),g.f("uRotation",A.feedback.rotation),g.f("uDistortion",A.feedback.distortion),g.f("uTime",i),nt(n);const R=L;L=D,D=R}this.blitTo(d,f.tex),f.bind(),u.use(),Oe(n,0,d.tex),Oe(n,1,L.tex),u.i("uBase",0),u.i("uLayer",1),u.f("uOpacity",A.opacity),u.i("uBlend",qh[A.blendMode]??0),u.v2("uResolution",v,w),nt(n),this.blitTo(S,L.tex)}b.amount>.001&&(d.bind(),g.use(),Oe(n,0,f.tex),Oe(n,1,_),g.i("uTex",0),g.i("uFeedback",1),g.f("uAmount",b.amount),g.f("uOpacity",b.opacity),g.f("uScale",b.scale),g.f("uRotation",b.rotation),g.f("uDistortion",b.distortion),g.f("uTime",i),nt(n),this.blitTo(f,d.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%Xt,n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),h.use(),Oe(n,0,f.tex),h.i("uTex",0),h.f("uVignette",a?.vignette??.25),nt(n)}capture(e,i,a,n,o="image/png",s=.97){const r=this.paintFrame(e,i,a,n);return new Promise((l,c)=>{r.toBlob(f=>{f?l(f):c(new Error("Export failed"))},o,s)})}paintFrame(e,i,a,n,o){const s=o??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==n&&(s.height=n);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:n,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===n)r.putImageData(Es(l,a,n),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Es(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,n)}return s}readPixels(e,i){const a=this.gl,n=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,n),a.bindFramebuffer(a.FRAMEBUFFER,null);const o=new Uint8ClampedArray(new ArrayBuffer(n.length)),s=e*4;for(let r=0;r<i;r++)o.set(n.subarray((i-1-r)*s,(i-r)*s),r*s);return o}}const Gh=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Kh=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Xh(t){return t.type.startsWith("video/")||Kh.test(t.name)}function Zh(t){return t.type.startsWith("image/")||Gh.test(t.name)}async function Qh(t){if(Xh(t))return Jh(t);if(Zh(t))return Ps(t);if(Jd(t))return th(t);throw new Error(`Unsupported media: ${t.name}`)}async function Ms(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Ps(i)}async function Ps(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Yh(e);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Yh(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function Jh(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,n)=>{const o=()=>{a({id:Be("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",o,{once:!0}),i.addEventListener("error",()=>n(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function em(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Be("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function As(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function tm(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,n=a.duration;if(!Number.isFinite(n)||n<=0)return;const o=(e%n+n)%n,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,f=Math.abs(a.currentTime-o);if(!s){if(a.paused||a.pause(),f>1/30)try{a.currentTime=o}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),f>.35)try{a.currentTime=o}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),f>1/30)try{a.currentTime=o}catch{}}const im=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var an=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function am(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nn(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jn={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Fs;function nm(){return Fs||(Fs=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,n,o){function s(c,f){if(!n[c]){if(!a[c]){var d=typeof nn=="function"&&nn;if(!f&&d)return d(c,!0);if(r)return r(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var u=n[c]={exports:{}};a[c][0].call(u.exports,function(g){var m=a[c][1][g];return s(m||g)},u,u.exports,i,a,n,o)}return n[c].exports}for(var r=typeof nn=="function"&&nn,l=0;l<o.length;l++)s(o[l]);return s})({1:[function(i,a,n){var o=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var c,f,d,h,u,g,m,v=[],w=0,b=l.length,p=b,T=o.getTypeOf(l)!=="string";w<l.length;)p=b-w,d=T?(c=l[w++],f=w<b?l[w++]:0,w<b?l[w++]:0):(c=l.charCodeAt(w++),f=w<b?l.charCodeAt(w++):0,w<b?l.charCodeAt(w++):0),h=c>>2,u=(3&c)<<4|f>>4,g=1<p?(15&f)<<2|d>>6:64,m=2<p?63&d:64,v.push(r.charAt(h)+r.charAt(u)+r.charAt(g)+r.charAt(m));return v.join("")},n.decode=function(l){var c,f,d,h,u,g,m=0,v=0,w="data:";if(l.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var b,p=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&p--,l.charAt(l.length-2)===r.charAt(64)&&p--,p%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=s.uint8array?new Uint8Array(0|p):new Array(0|p);m<l.length;)c=r.indexOf(l.charAt(m++))<<2|(h=r.indexOf(l.charAt(m++)))>>4,f=(15&h)<<4|(u=r.indexOf(l.charAt(m++)))>>2,d=(3&u)<<6|(g=r.indexOf(l.charAt(m++))),b[v++]=c,u!==64&&(b[v++]=f),g!==64&&(b[v++]=d);return b}},{"./support":30,"./utils":32}],2:[function(i,a,n){var o=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(f,d,h,u,g){this.compressedSize=f,this.uncompressedSize=d,this.crc32=h,this.compression=u,this.compressedContent=g}c.prototype={getContentWorker:function(){var f=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return f.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,d,h){return f.pipe(new r).pipe(new l("uncompressedSize")).pipe(d.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,n){var o=i("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},n.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,n){var o=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var f=0;f<8;f++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?o.getTypeOf(r)!=="string"?(function(c,f,d,h){var u=s,g=h+d;c^=-1;for(var m=h;m<g;m++)c=c>>>8^u[255&(c^f[m])];return-1^c})(0|l,r,r.length,0):(function(c,f,d,h){var u=s,g=h+d;c^=-1;for(var m=h;m<g;m++)c=c>>>8^u[255&(c^f.charCodeAt(m))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(i,a,n){var o=null;o=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:o}},{lie:37}],7:[function(i,a,n){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=o?"uint8array":"array";function f(d,h){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=h,this.meta={}}n.magic="\b\0",r.inherits(f,l),f.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,d.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(h){d.push({data:h,meta:d.meta})}},n.compressWorker=function(d){return new f("Deflate",d)},n.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,n){function o(u,g){var m,v="";for(m=0;m<g;m++)v+=String.fromCharCode(255&u),u>>>=8;return v}function s(u,g,m,v,w,b){var p,T,_=u.file,E=u.compression,M=b!==c.utf8encode,A=r.transformTo("string",b(_.name)),P=r.transformTo("string",c.utf8encode(_.name)),L=_.comment,D=r.transformTo("string",b(L)),S=r.transformTo("string",c.utf8encode(L)),R=P.length!==_.name.length,k=S.length!==L.length,N="",G="",O="",ae=_.dir,W=_.date,ne={crc32:0,compressedSize:0,uncompressedSize:0};g&&!m||(ne.crc32=u.crc32,ne.compressedSize=u.compressedSize,ne.uncompressedSize=u.uncompressedSize);var U=0;g&&(U|=8),M||!R&&!k||(U|=2048);var z=0,se=0;ae&&(z|=16),w==="UNIX"?(se=798,z|=(function(Q,we){var Pe=Q;return Q||(Pe=we?16893:33204),(65535&Pe)<<16})(_.unixPermissions,ae)):(se=20,z|=(function(Q){return 63&(Q||0)})(_.dosPermissions)),p=W.getUTCHours(),p<<=6,p|=W.getUTCMinutes(),p<<=5,p|=W.getUTCSeconds()/2,T=W.getUTCFullYear()-1980,T<<=4,T|=W.getUTCMonth()+1,T<<=5,T|=W.getUTCDate(),R&&(G=o(1,1)+o(f(A),4)+P,N+="up"+o(G.length,2)+G),k&&(O=o(1,1)+o(f(D),4)+S,N+="uc"+o(O.length,2)+O);var ee="";return ee+=`
\0`,ee+=o(U,2),ee+=E.magic,ee+=o(p,2),ee+=o(T,2),ee+=o(ne.crc32,4),ee+=o(ne.compressedSize,4),ee+=o(ne.uncompressedSize,4),ee+=o(A.length,2),ee+=o(N.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ee+A+N,dirRecord:d.CENTRAL_FILE_HEADER+o(se,2)+ee+o(D.length,2)+"\0\0\0\0"+o(z,4)+o(v,4)+A+N+D}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),f=i("../crc32"),d=i("../signature");function h(u,g,m,v){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=m,this.encodeFileName=v,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(h,l),h.prototype.push=function(u){var g=u.meta.percent||0,m=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:m?(g+100*(m-v-1))/m:100}}))},h.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var g=this.streamFiles&&!u.file.dir;if(g){var m=s(u,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(u){this.accumulate=!1;var g=this.streamFiles&&!u.file.dir,m=s(u,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),g)this.push({data:(function(v){return d.DATA_DESCRIPTOR+o(v.crc32,4)+o(v.compressedSize,4)+o(v.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var u=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var m=this.bytesWritten-u,v=(function(w,b,p,T,_){var E=r.transformTo("string",_(T));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(w,2)+o(w,2)+o(b,4)+o(p,4)+o(E.length,2)+E})(this.dirRecords.length,m,u,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(u){this._sources.push(u);var g=this;return u.on("data",function(m){g.processChunk(m)}),u.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),u.on("error",function(m){g.error(m)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(u){var g=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var m=0;m<g.length;m++)try{g[m].error(u)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,g=0;g<u.length;g++)u[g].lock()},a.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,n){var o=i("../compressions"),s=i("./ZipFileWorker");n.generateWorker=function(r,l,c){var f=new s(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{r.forEach(function(h,u){d++;var g=(function(b,p){var T=b||p,_=o[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(u.options.compression,l.compression),m=u.options.compressionOptions||l.compressionOptions||{},v=u.dir,w=u.date;u._compressWorker(g,m).withStreamInfo("file",{name:h,dir:v,date:w,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(f)}),f.entriesCount=d}catch(h){f.error(h)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,n){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new o;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(o.prototype=i("./object")).loadAsync=i("./load"),o.support=i("./support"),o.defaults=i("./defaults"),o.version="3.10.1",o.loadAsync=function(s,r){return new o().loadAsync(s,r)},o.external=i("./external"),a.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,n){var o=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),f=i("./nodejsUtils");function d(h){return new s.Promise(function(u,g){var m=h.decompressed.getContentWorker().pipe(new c);m.on("error",function(v){g(v)}).on("end",function(){m.streamInfo.crc32!==h.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}a.exports=function(h,u){var g=this;return u=o.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),f.isNode&&f.isStream(h)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",h,!0,u.optimizedBinaryString,u.base64).then(function(m){var v=new l(u);return v.load(m),v}).then(function(m){var v=[s.Promise.resolve(m)],w=m.files;if(u.checkCRC32)for(var b=0;b<w.length;b++)v.push(d(w[b]));return s.Promise.all(v)}).then(function(m){for(var v=m.shift(),w=v.files,b=0;b<w.length;b++){var p=w[b],T=p.fileNameStr,_=o.resolve(p.fileNameStr);g.file(_,p.decompressed,{binary:!0,optimizedBinaryString:!0,date:p.date,dir:p.dir,comment:p.fileCommentStr.length?p.fileCommentStr:null,unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions,createFolders:u.createFolders}),p.dir||(g.file(_).unsafeOriginalName=T)}return v.zipComment.length&&(g.comment=v.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,n){var o=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}o.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,n){var o=i("readable-stream").Readable;function s(r,l,c){o.call(this,l),this._helper=r;var f=this;r.on("data",function(d,h){f.push(d)||f._helper.pause(),c&&c(h)}).on("error",function(d){f.emit("error",d)}).on("end",function(){f.push(null)})}i("../utils").inherits(s,o),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,n){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,s);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,s)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var s=new Buffer(o);return s.fill(0),s},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(i,a,n){function o(_,E,M){var A,P=r.getTypeOf(E),L=r.extend(M||{},f);L.date=L.date||new Date,L.compression!==null&&(L.compression=L.compression.toUpperCase()),typeof L.unixPermissions=="string"&&(L.unixPermissions=parseInt(L.unixPermissions,8)),L.unixPermissions&&16384&L.unixPermissions&&(L.dir=!0),L.dosPermissions&&16&L.dosPermissions&&(L.dir=!0),L.dir&&(_=w(_)),L.createFolders&&(A=v(_))&&b.call(this,A,!0);var D=P==="string"&&L.binary===!1&&L.base64===!1;M&&M.binary!==void 0||(L.binary=!D),(E instanceof d&&E.uncompressedSize===0||L.dir||!E||E.length===0)&&(L.base64=!1,L.binary=!0,E="",L.compression="STORE",P="string");var S=null;S=E instanceof d||E instanceof l?E:g.isNode&&g.isStream(E)?new m(_,E):r.prepareContent(_,E,L.binary,L.optimizedBinaryString,L.base64);var R=new h(_,S,L);this.files[_]=R}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),f=i("./defaults"),d=i("./compressedObject"),h=i("./zipObject"),u=i("./generate"),g=i("./nodejsUtils"),m=i("./nodejs/NodejsStreamInputAdapter"),v=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var E=_.lastIndexOf("/");return 0<E?_.substring(0,E):""},w=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},b=function(_,E){return E=E!==void 0?E:f.createFolders,_=w(_),this.files[_]||o.call(this,_,null,{dir:!0,createFolders:E}),this.files[_]};function p(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var E,M,A;for(E in this.files)A=this.files[E],(M=E.slice(this.root.length,E.length))&&E.slice(0,this.root.length)===this.root&&_(M,A)},filter:function(_){var E=[];return this.forEach(function(M,A){_(M,A)&&E.push(A)}),E},file:function(_,E,M){if(arguments.length!==1)return _=this.root+_,o.call(this,_,E,M),this;if(p(_)){var A=_;return this.filter(function(L,D){return!D.dir&&A.test(L)})}var P=this.files[this.root+_];return P&&!P.dir?P:null},folder:function(_){if(!_)return this;if(p(_))return this.filter(function(P,L){return L.dir&&_.test(P)});var E=this.root+_,M=b.call(this,E),A=this.clone();return A.root=M.name,A},remove:function(_){_=this.root+_;var E=this.files[_];if(E||(_.slice(-1)!=="/"&&(_+="/"),E=this.files[_]),E&&!E.dir)delete this.files[_];else for(var M=this.filter(function(P,L){return L.name.slice(0,_.length)===_}),A=0;A<M.length;A++)delete this.files[M[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var E,M={};try{if((M=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=M.type.toLowerCase(),M.compression=M.compression.toUpperCase(),M.type==="binarystring"&&(M.type="string"),!M.type)throw new Error("No output type specified.");r.checkSupport(M.type),M.platform!=="darwin"&&M.platform!=="freebsd"&&M.platform!=="linux"&&M.platform!=="sunos"||(M.platform="UNIX"),M.platform==="win32"&&(M.platform="DOS");var A=M.comment||this.comment||"";E=u.generateWorker(this,M,A)}catch(P){(E=new l("error")).error(P)}return new c(E,M.type||"string",M.mimeType)},generateAsync:function(_,E){return this.generateInternalStream(_).accumulate(E)},generateNodeStream:function(_,E){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(E)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,n){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,n){var o=i("./DataReader");function s(r){o.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,o),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),f=r.charCodeAt(2),d=r.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===f&&this.data[h+3]===d)return h-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),f=r.charCodeAt(2),d=r.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&f===h[2]&&d===h[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,n){var o=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return o.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,n){var o=i("./Uint8ArrayReader");function s(r){o.call(this,r)}i("../utils").inherits(s,o),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,n){var o=i("./DataReader");function s(r){o.call(this,r)}i("../utils").inherits(s,o),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,n){var o=i("./ArrayReader");function s(r){o.call(this,r)}i("../utils").inherits(s,o),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,n){var o=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),f=i("./Uint8ArrayReader");a.exports=function(d){var h=o.getTypeOf(d);return o.checkSupport(h),h!=="string"||s.uint8array?h==="nodebuffer"?new c(d):s.uint8array?new f(o.transformTo("uint8array",d)):new r(o.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,n){var o=i("./GenericWorker"),s=i("../utils");function r(l){o.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,o),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,n){var o=i("./GenericWorker"),s=i("../crc32");function r(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,o),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,n){var o=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,n){var o=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=o.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}o.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,n){function o(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=o},{}],29:[function(i,a,n){var o=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),f=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(g,m){return new f.Promise(function(v,w){var b=[],p=g._internalType,T=g._outputType,_=g._mimeType;g.on("data",function(E,M){b.push(E),m&&m(M)}).on("error",function(E){b=[],w(E)}).on("end",function(){try{var E=(function(M,A,P){switch(M){case"blob":return o.newBlob(o.transformTo("arraybuffer",A),P);case"base64":return l.encode(A);default:return o.transformTo(M,A)}})(T,(function(M,A){var P,L=0,D=null,S=0;for(P=0;P<A.length;P++)S+=A[P].length;switch(M){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for(D=new Uint8Array(S),P=0;P<A.length;P++)D.set(A[P],L),L+=A[P].length;return D;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+M+"'")}})(p,b),_);v(E)}catch(M){w(M)}b=[]}).resume()})}function u(g,m,v){var w=m;switch(m){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=m,this._mimeType=v,o.checkSupport(w),this._worker=g.pipe(new s(w)),g.lock()}catch(b){this._worker=new r("error"),this._worker.error(b)}}u.prototype={accumulate:function(g){return h(this,g)},on:function(g,m){var v=this;return g==="data"?this._worker.on(g,function(w){m.call(v,w.data,w.meta)}):this._worker.on(g,function(){o.delay(m,arguments,v)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},g)}},a.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var o=new ArrayBuffer(0);try{n.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(o),n.blob=s.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!i("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,n){for(var o=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}n.utf8encode=function(u){return s.nodebuffer?r.newBufferFrom(u,"utf-8"):(function(g){var m,v,w,b,p,T=g.length,_=0;for(b=0;b<T;b++)(64512&(v=g.charCodeAt(b)))==55296&&b+1<T&&(64512&(w=g.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(w-56320),b++),_+=v<128?1:v<2048?2:v<65536?3:4;for(m=s.uint8array?new Uint8Array(_):new Array(_),b=p=0;p<_;b++)(64512&(v=g.charCodeAt(b)))==55296&&b+1<T&&(64512&(w=g.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(w-56320),b++),v<128?m[p++]=v:(v<2048?m[p++]=192|v>>>6:(v<65536?m[p++]=224|v>>>12:(m[p++]=240|v>>>18,m[p++]=128|v>>>12&63),m[p++]=128|v>>>6&63),m[p++]=128|63&v);return m})(u)},n.utf8decode=function(u){return s.nodebuffer?o.transformTo("nodebuffer",u).toString("utf-8"):(function(g){var m,v,w,b,p=g.length,T=new Array(2*p);for(m=v=0;m<p;)if((w=g[m++])<128)T[v++]=w;else if(4<(b=c[w]))T[v++]=65533,m+=b-1;else{for(w&=b===2?31:b===3?15:7;1<b&&m<p;)w=w<<6|63&g[m++],b--;1<b?T[v++]=65533:w<65536?T[v++]=w:(w-=65536,T[v++]=55296|w>>10&1023,T[v++]=56320|1023&w)}return T.length!==v&&(T.subarray?T=T.subarray(0,v):T.length=v),o.applyFromCharCode(T)})(u=o.transformTo(s.uint8array?"uint8array":"array",u))},o.inherits(d,l),d.prototype.processChunk=function(u){var g=o.transformTo(s.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var m=g;(g=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),g.set(m,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var v=(function(b,p){var T;for((p=p||b.length)>b.length&&(p=b.length),T=p-1;0<=T&&(192&b[T])==128;)T--;return T<0||T===0?p:T+c[b[T]]>p?T:p})(g),w=g;v!==g.length&&(s.uint8array?(w=g.subarray(0,v),this.leftOver=g.subarray(v,g.length)):(w=g.slice(0,v),this.leftOver=g.slice(v,g.length))),this.push({data:n.utf8decode(w),meta:u.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=d,o.inherits(h,l),h.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,n){var o=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(m){return m}function f(m,v){for(var w=0;w<m.length;++w)v[w]=255&m.charCodeAt(w);return v}i("setimmediate"),n.newBlob=function(m,v){n.checkSupport("blob");try{return new Blob([m],{type:v})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(m),w.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(m,v,w){var b=[],p=0,T=m.length;if(T<=w)return String.fromCharCode.apply(null,m);for(;p<T;)v==="array"||v==="nodebuffer"?b.push(String.fromCharCode.apply(null,m.slice(p,Math.min(p+w,T)))):b.push(String.fromCharCode.apply(null,m.subarray(p,Math.min(p+w,T)))),p+=w;return b.join("")},stringifyByChar:function(m){for(var v="",w=0;w<m.length;w++)v+=String.fromCharCode(m[w]);return v},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function h(m){var v=65536,w=n.getTypeOf(m),b=!0;if(w==="uint8array"?b=d.applyCanBeUsed.uint8array:w==="nodebuffer"&&(b=d.applyCanBeUsed.nodebuffer),b)for(;1<v;)try{return d.stringifyByChunk(m,w,v)}catch{v=Math.floor(v/2)}return d.stringifyByChar(m)}function u(m,v){for(var w=0;w<m.length;w++)v[w]=m[w];return v}n.applyFromCharCode=h;var g={};g.string={string:c,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return g.string.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:function(m){return f(m,r.allocBuffer(m.length))}},g.array={string:h,array:c,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return r.newBufferFrom(m)}},g.arraybuffer={string:function(m){return h(new Uint8Array(m))},array:function(m){return u(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:c,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return r.newBufferFrom(new Uint8Array(m))}},g.uint8array={string:h,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:c,nodebuffer:function(m){return r.newBufferFrom(m)}},g.nodebuffer={string:h,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return g.nodebuffer.uint8array(m).buffer},uint8array:function(m){return u(m,new Uint8Array(m.length))},nodebuffer:c},n.transformTo=function(m,v){if(v=v||"",!m)return v;n.checkSupport(m);var w=n.getTypeOf(v);return g[w][m](v)},n.resolve=function(m){for(var v=m.split("/"),w=[],b=0;b<v.length;b++){var p=v[b];p==="."||p===""&&b!==0&&b!==v.length-1||(p===".."?w.pop():w.push(p))}return w.join("/")},n.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":o.nodebuffer&&r.isBuffer(m)?"nodebuffer":o.uint8array&&m instanceof Uint8Array?"uint8array":o.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(m){if(!o[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(m){var v,w,b="";for(w=0;w<(m||"").length;w++)b+="\\x"+((v=m.charCodeAt(w))<16?"0":"")+v.toString(16).toUpperCase();return b},n.delay=function(m,v,w){setImmediate(function(){m.apply(w||null,v||[])})},n.inherits=function(m,v){function w(){}w.prototype=v.prototype,m.prototype=new w},n.extend=function(){var m,v,w={};for(m=0;m<arguments.length;m++)for(v in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],v)&&w[v]===void 0&&(w[v]=arguments[m][v]);return w},n.prepareContent=function(m,v,w,b,p){return l.Promise.resolve(v).then(function(T){return o.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,E){var M=new FileReader;M.onload=function(A){_(A.target.result)},M.onerror=function(A){E(A.target.error)},M.readAsArrayBuffer(T)}):T}).then(function(T){var _=n.getTypeOf(T);return _?(_==="arraybuffer"?T=n.transformTo("uint8array",T):_==="string"&&(p?T=s.decode(T):w&&b!==!0&&(T=(function(E){return f(E,o.uint8array?new Uint8Array(E.length):new Array(E.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,n){var o=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function f(d){this.files=[],this.loadOptions=d}f.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(h)+", expected "+s.pretty(d)+")")}},isSignature:function(d,h){var u=this.reader.index;this.reader.setIndex(d);var g=this.reader.readString(4)===h;return this.reader.setIndex(u),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",u=s.transformTo(h,d);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,h,u,g=this.zip64EndOfCentralSize-44;0<g;)d=this.reader.readInt(2),h=this.reader.readInt(4),u=this.reader.readData(h),this.zip64ExtensibleData[d]={id:d,length:h,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,h;for(d=0;d<this.files.length;d++)h=this.files[d],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var h=d;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var g=h-u;if(0<g)this.isSignature(h,r.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(d){this.reader=o(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,n){var o=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),f=i("./compressions"),d=i("./support");function h(u,g){this.options=u,this.loadOptions=g}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var g,m;if(u.skip(22),this.fileNameLength=u.readInt(2),m=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(v){for(var w in f)if(Object.prototype.hasOwnProperty.call(f,w)&&f[w].magic===v)return f[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=o(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g,m,v,w=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<w;)g=u.readInt(2),m=u.readInt(2),v=u.readData(m),this.extraFields[g]={id:g,length:m,value:v};u.setIndex(w)},handleUTF8:function(){var u=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var m=s.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var w=s.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=o(u.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=o(u.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null}},a.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,n){function o(g,m,v){this.name=g,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=m,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),f=i("./stream/GenericWorker");o.prototype={internalStream:function(g){var m=null,v="string";try{if(!g)throw new Error("No output type specified.");var w=(v=g.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),m=this._decompressWorker();var b=!this._dataBinary;b&&!w&&(m=m.pipe(new l.Utf8EncodeWorker)),!b&&w&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(p){(m=new f("error")).error(p)}return new s(m,v,"")},async:function(g,m){return this.internalStream(g).accumulate(m)},nodeStream:function(g,m){return this.internalStream(g||"nodebuffer").toNodejsStream(m)},_compressWorker:function(g,m){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(v,g,m)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)o.prototype[d[u]]=h;a.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,n){(function(o){var s,r,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var c=0,f=new l(g),d=o.document.createTextNode("");f.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(o.setImmediate||o.MessageChannel===void 0)s="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var m=o.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},o.document.documentElement.appendChild(m)}:function(){setTimeout(g,0)};else{var h=new o.MessageChannel;h.port1.onmessage=g,s=function(){h.port2.postMessage(0)}}var u=[];function g(){var m,v;r=!0;for(var w=u.length;w;){for(v=u,u=[],m=-1;++m<w;)v[m]();w=u.length}r=!1}a.exports=function(m){u.push(m)!==1||r||s()}}).call(this,typeof an<"u"?an:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,n){var o=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function d(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,w!==s&&m(this,w)}function h(w,b,p){this.promise=w,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof p=="function"&&(this.onRejected=p,this.callRejected=this.otherCallRejected)}function u(w,b,p){o(function(){var T;try{T=b(p)}catch(_){return r.reject(w,_)}T===w?r.reject(w,new TypeError("Cannot resolve promise with itself")):r.resolve(w,T)})}function g(w){var b=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof b=="function")return function(){b.apply(w,arguments)}}function m(w,b){var p=!1;function T(M){p||(p=!0,r.reject(w,M))}function _(M){p||(p=!0,r.resolve(w,M))}var E=v(function(){b(_,T)});E.status==="error"&&T(E.value)}function v(w,b){var p={};try{p.value=w(b),p.status="success"}catch(T){p.status="error",p.value=T}return p}(a.exports=d).prototype.finally=function(w){if(typeof w!="function")return this;var b=this.constructor;return this.then(function(p){return b.resolve(w()).then(function(){return p})},function(p){return b.resolve(w()).then(function(){throw p})})},d.prototype.catch=function(w){return this.then(null,w)},d.prototype.then=function(w,b){if(typeof w!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var p=new this.constructor(s);return this.state!==f?u(p,this.state===c?w:b,this.outcome):this.queue.push(new h(p,w,b)),p},h.prototype.callFulfilled=function(w){r.resolve(this.promise,w)},h.prototype.otherCallFulfilled=function(w){u(this.promise,this.onFulfilled,w)},h.prototype.callRejected=function(w){r.reject(this.promise,w)},h.prototype.otherCallRejected=function(w){u(this.promise,this.onRejected,w)},r.resolve=function(w,b){var p=v(g,b);if(p.status==="error")return r.reject(w,p.value);var T=p.value;if(T)m(w,T);else{w.state=c,w.outcome=b;for(var _=-1,E=w.queue.length;++_<E;)w.queue[_].callFulfilled(b)}return w},r.reject=function(w,b){w.state=l,w.outcome=b;for(var p=-1,T=w.queue.length;++p<T;)w.queue[p].callRejected(b);return w},d.resolve=function(w){return w instanceof this?w:r.resolve(new this(s),w)},d.reject=function(w){var b=new this(s);return r.reject(b,w)},d.all=function(w){var b=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var p=w.length,T=!1;if(!p)return this.resolve([]);for(var _=new Array(p),E=0,M=-1,A=new this(s);++M<p;)P(w[M],M);return A;function P(L,D){b.resolve(L).then(function(S){_[D]=S,++E!==p||T||(T=!0,r.resolve(A,_))},function(S){T||(T=!0,r.reject(A,S))})}},d.race=function(w){var b=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var p=w.length,T=!1;if(!p)return this.resolve([]);for(var _=-1,E=new this(s);++_<p;)M=w[_],b.resolve(M).then(function(A){T||(T=!0,r.resolve(E,A))},function(A){T||(T=!0,r.reject(E,A))});var M;return E}},{immediate:36}],38:[function(i,a,n){var o={};(0,i("./lib/utils/common").assign)(o,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,n){var o=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),f=Object.prototype.toString,d=0,h=-1,u=0,g=8;function m(w){if(!(this instanceof m))return new m(w);this.options=s.assign({level:h,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},w||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var p=o.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(p!==d)throw new Error(l[p]);if(b.header&&o.deflateSetHeader(this.strm,b.header),b.dictionary){var T;if(T=typeof b.dictionary=="string"?r.string2buf(b.dictionary):f.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(p=o.deflateSetDictionary(this.strm,T))!==d)throw new Error(l[p]);this._dict_set=!0}}function v(w,b){var p=new m(b);if(p.push(w,!0),p.err)throw p.msg||l[p.err];return p.result}m.prototype.push=function(w,b){var p,T,_=this.strm,E=this.options.chunkSize;if(this.ended)return!1;T=b===~~b?b:b===!0?4:0,typeof w=="string"?_.input=r.string2buf(w):f.call(w)==="[object ArrayBuffer]"?_.input=new Uint8Array(w):_.input=w,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(E),_.next_out=0,_.avail_out=E),(p=o.deflate(_,T))!==1&&p!==d)return this.onEnd(p),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&p!==1);return T===4?(p=o.deflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===d):T!==2||(this.onEnd(d),!(_.avail_out=0))},m.prototype.onData=function(w){this.chunks.push(w)},m.prototype.onEnd=function(w){w===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},n.Deflate=m,n.deflate=v,n.deflateRaw=function(w,b){return(b=b||{}).raw=!0,v(w,b)},n.gzip=function(w,b){return(b=b||{}).gzip=!0,v(w,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,n){var o=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),f=i("./zlib/zstream"),d=i("./zlib/gzheader"),h=Object.prototype.toString;function u(m){if(!(this instanceof u))return new u(m);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},m||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||m&&m.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var w=o.inflateInit2(this.strm,v.windowBits);if(w!==l.Z_OK)throw new Error(c[w]);this.header=new d,o.inflateGetHeader(this.strm,this.header)}function g(m,v){var w=new u(v);if(w.push(m,!0),w.err)throw w.msg||c[w.err];return w.result}u.prototype.push=function(m,v){var w,b,p,T,_,E,M=this.strm,A=this.options.chunkSize,P=this.options.dictionary,L=!1;if(this.ended)return!1;b=v===~~v?v:v===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?M.input=r.binstring2buf(m):h.call(m)==="[object ArrayBuffer]"?M.input=new Uint8Array(m):M.input=m,M.next_in=0,M.avail_in=M.input.length;do{if(M.avail_out===0&&(M.output=new s.Buf8(A),M.next_out=0,M.avail_out=A),(w=o.inflate(M,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&P&&(E=typeof P=="string"?r.string2buf(P):h.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,w=o.inflateSetDictionary(this.strm,E)),w===l.Z_BUF_ERROR&&L===!0&&(w=l.Z_OK,L=!1),w!==l.Z_STREAM_END&&w!==l.Z_OK)return this.onEnd(w),!(this.ended=!0);M.next_out&&(M.avail_out!==0&&w!==l.Z_STREAM_END&&(M.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(p=r.utf8border(M.output,M.next_out),T=M.next_out-p,_=r.buf2string(M.output,p),M.next_out=T,M.avail_out=A-T,T&&s.arraySet(M.output,M.output,p,T,0),this.onData(_)):this.onData(s.shrinkBuf(M.output,M.next_out)))),M.avail_in===0&&M.avail_out===0&&(L=!0)}while((0<M.avail_in||M.avail_out===0)&&w!==l.Z_STREAM_END);return w===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(w=o.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(M.avail_out=0))},u.prototype.onData=function(m){this.chunks.push(m)},u.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},n.Inflate=u,n.inflate=g,n.inflateRaw=function(m,v){return(v=v||{}).raw=!0,g(m,v)},n.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,n){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var d in f)f.hasOwnProperty(d)&&(l[d]=f[d])}}return l},n.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,f,d,h){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+d),h);else for(var u=0;u<d;u++)l[h+u]=c[f+u]},flattenChunks:function(l){var c,f,d,h,u,g;for(c=d=0,f=l.length;c<f;c++)d+=l[c].length;for(g=new Uint8Array(d),c=h=0,f=l.length;c<f;c++)u=l[c],g.set(u,h),h+=u.length;return g}},r={arraySet:function(l,c,f,d,h){for(var u=0;u<d;u++)l[h+u]=c[f+u]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,s)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,r))},n.setTyped(o)},{}],42:[function(i,a,n){var o=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new o.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(d,h){if(h<65537&&(d.subarray&&r||!d.subarray&&s))return String.fromCharCode.apply(null,o.shrinkBuf(d,h));for(var u="",g=0;g<h;g++)u+=String.fromCharCode(d[g]);return u}l[254]=l[254]=1,n.string2buf=function(d){var h,u,g,m,v,w=d.length,b=0;for(m=0;m<w;m++)(64512&(u=d.charCodeAt(m)))==55296&&m+1<w&&(64512&(g=d.charCodeAt(m+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),m++),b+=u<128?1:u<2048?2:u<65536?3:4;for(h=new o.Buf8(b),m=v=0;v<b;m++)(64512&(u=d.charCodeAt(m)))==55296&&m+1<w&&(64512&(g=d.charCodeAt(m+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),m++),u<128?h[v++]=u:(u<2048?h[v++]=192|u>>>6:(u<65536?h[v++]=224|u>>>12:(h[v++]=240|u>>>18,h[v++]=128|u>>>12&63),h[v++]=128|u>>>6&63),h[v++]=128|63&u);return h},n.buf2binstring=function(d){return f(d,d.length)},n.binstring2buf=function(d){for(var h=new o.Buf8(d.length),u=0,g=h.length;u<g;u++)h[u]=d.charCodeAt(u);return h},n.buf2string=function(d,h){var u,g,m,v,w=h||d.length,b=new Array(2*w);for(u=g=0;u<w;)if((m=d[u++])<128)b[g++]=m;else if(4<(v=l[m]))b[g++]=65533,u+=v-1;else{for(m&=v===2?31:v===3?15:7;1<v&&u<w;)m=m<<6|63&d[u++],v--;1<v?b[g++]=65533:m<65536?b[g++]=m:(m-=65536,b[g++]=55296|m>>10&1023,b[g++]=56320|1023&m)}return f(b,g)},n.utf8border=function(d,h){var u;for((h=h||d.length)>d.length&&(h=d.length),u=h-1;0<=u&&(192&d[u])==128;)u--;return u<0||u===0?h:u+l[d[u]]>h?u:h}},{"./common":41}],43:[function(i,a,n){a.exports=function(o,s,r,l){for(var c=65535&o|0,f=o>>>16&65535|0,d=0;r!==0;){for(r-=d=2e3<r?2e3:r;f=f+(c=c+s[l++]|0)|0,--d;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(i,a,n){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,n){var o=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var f=o,d=c+l;s^=-1;for(var h=c;h<d;h++)s=s>>>8^f[255&(s^r[h])];return-1^s}},{}],46:[function(i,a,n){var o,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),f=i("./messages"),d=0,h=4,u=0,g=-2,m=-1,v=4,w=2,b=8,p=9,T=286,_=30,E=19,M=2*T+1,A=15,P=3,L=258,D=L+P+1,S=42,R=113,k=1,N=2,G=3,O=4;function ae(y,j){return y.msg=f[j],j}function W(y){return(y<<1)-(4<y?9:0)}function ne(y){for(var j=y.length;0<=--j;)y[j]=0}function U(y){var j=y.state,q=j.pending;q>y.avail_out&&(q=y.avail_out),q!==0&&(s.arraySet(y.output,j.pending_buf,j.pending_out,q,y.next_out),y.next_out+=q,j.pending_out+=q,y.total_out+=q,y.avail_out-=q,j.pending-=q,j.pending===0&&(j.pending_out=0))}function z(y,j){r._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,j),y.block_start=y.strstart,U(y.strm)}function se(y,j){y.pending_buf[y.pending++]=j}function ee(y,j){y.pending_buf[y.pending++]=j>>>8&255,y.pending_buf[y.pending++]=255&j}function Q(y,j){var q,C,x=y.max_chain_length,B=y.strstart,V=y.prev_length,K=y.nice_match,H=y.strstart>y.w_size-D?y.strstart-(y.w_size-D):0,Z=y.window,oe=y.w_mask,J=y.prev,ce=y.strstart+L,be=Z[B+V-1],he=Z[B+V];y.prev_length>=y.good_match&&(x>>=2),K>y.lookahead&&(K=y.lookahead);do if(Z[(q=j)+V]===he&&Z[q+V-1]===be&&Z[q]===Z[B]&&Z[++q]===Z[B+1]){B+=2,q++;do;while(Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&B<ce);if(C=L-(ce-B),B=ce-L,V<C){if(y.match_start=j,K<=(V=C))break;be=Z[B+V-1],he=Z[B+V]}}while((j=J[j&oe])>H&&--x!=0);return V<=y.lookahead?V:y.lookahead}function we(y){var j,q,C,x,B,V,K,H,Z,oe,J=y.w_size;do{if(x=y.window_size-y.lookahead-y.strstart,y.strstart>=J+(J-D)){for(s.arraySet(y.window,y.window,J,J,0),y.match_start-=J,y.strstart-=J,y.block_start-=J,j=q=y.hash_size;C=y.head[--j],y.head[j]=J<=C?C-J:0,--q;);for(j=q=J;C=y.prev[--j],y.prev[j]=J<=C?C-J:0,--q;);x+=J}if(y.strm.avail_in===0)break;if(V=y.strm,K=y.window,H=y.strstart+y.lookahead,Z=x,oe=void 0,oe=V.avail_in,Z<oe&&(oe=Z),q=oe===0?0:(V.avail_in-=oe,s.arraySet(K,V.input,V.next_in,oe,H),V.state.wrap===1?V.adler=l(V.adler,K,oe,H):V.state.wrap===2&&(V.adler=c(V.adler,K,oe,H)),V.next_in+=oe,V.total_in+=oe,oe),y.lookahead+=q,y.lookahead+y.insert>=P)for(B=y.strstart-y.insert,y.ins_h=y.window[B],y.ins_h=(y.ins_h<<y.hash_shift^y.window[B+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[B+P-1])&y.hash_mask,y.prev[B&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=B,B++,y.insert--,!(y.lookahead+y.insert<P)););}while(y.lookahead<D&&y.strm.avail_in!==0)}function Pe(y,j){for(var q,C;;){if(y.lookahead<D){if(we(y),y.lookahead<D&&j===d)return k;if(y.lookahead===0)break}if(q=0,y.lookahead>=P&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+P-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),q!==0&&y.strstart-q<=y.w_size-D&&(y.match_length=Q(y,q)),y.match_length>=P)if(C=r._tr_tally(y,y.strstart-y.match_start,y.match_length-P),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=P){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+P-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else C=r._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(C&&(z(y,!1),y.strm.avail_out===0))return k}return y.insert=y.strstart<P-1?y.strstart:P-1,j===h?(z(y,!0),y.strm.avail_out===0?G:O):y.last_lit&&(z(y,!1),y.strm.avail_out===0)?k:N}function fe(y,j){for(var q,C,x;;){if(y.lookahead<D){if(we(y),y.lookahead<D&&j===d)return k;if(y.lookahead===0)break}if(q=0,y.lookahead>=P&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+P-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=P-1,q!==0&&y.prev_length<y.max_lazy_match&&y.strstart-q<=y.w_size-D&&(y.match_length=Q(y,q),y.match_length<=5&&(y.strategy===1||y.match_length===P&&4096<y.strstart-y.match_start)&&(y.match_length=P-1)),y.prev_length>=P&&y.match_length<=y.prev_length){for(x=y.strstart+y.lookahead-P,C=r._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-P),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=x&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+P-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=P-1,y.strstart++,C&&(z(y,!1),y.strm.avail_out===0))return k}else if(y.match_available){if((C=r._tr_tally(y,0,y.window[y.strstart-1]))&&z(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return k}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(C=r._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<P-1?y.strstart:P-1,j===h?(z(y,!0),y.strm.avail_out===0?G:O):y.last_lit&&(z(y,!1),y.strm.avail_out===0)?k:N}function pe(y,j,q,C,x){this.good_length=y,this.max_lazy=j,this.nice_length=q,this.max_chain=C,this.func=x}function Me(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*M),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*E+1)),ne(this.dyn_ltree),ne(this.dyn_dtree),ne(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(A+1),this.heap=new s.Buf16(2*T+1),ne(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),ne(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(y){var j;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=w,(j=y.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?S:R,y.adler=j.wrap===2?0:1,j.last_flush=d,r._tr_init(j),u):ae(y,g)}function Ke(y){var j=_e(y);return j===u&&(function(q){q.window_size=2*q.w_size,ne(q.head),q.max_lazy_match=o[q.level].max_lazy,q.good_match=o[q.level].good_length,q.nice_match=o[q.level].nice_length,q.max_chain_length=o[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=P-1,q.match_available=0,q.ins_h=0})(y.state),j}function Ne(y,j,q,C,x,B){if(!y)return g;var V=1;if(j===m&&(j=6),C<0?(V=0,C=-C):15<C&&(V=2,C-=16),x<1||p<x||q!==b||C<8||15<C||j<0||9<j||B<0||v<B)return ae(y,g);C===8&&(C=9);var K=new Me;return(y.state=K).strm=y,K.wrap=V,K.gzhead=null,K.w_bits=C,K.w_size=1<<K.w_bits,K.w_mask=K.w_size-1,K.hash_bits=x+7,K.hash_size=1<<K.hash_bits,K.hash_mask=K.hash_size-1,K.hash_shift=~~((K.hash_bits+P-1)/P),K.window=new s.Buf8(2*K.w_size),K.head=new s.Buf16(K.hash_size),K.prev=new s.Buf16(K.w_size),K.lit_bufsize=1<<x+6,K.pending_buf_size=4*K.lit_bufsize,K.pending_buf=new s.Buf8(K.pending_buf_size),K.d_buf=1*K.lit_bufsize,K.l_buf=3*K.lit_bufsize,K.level=j,K.strategy=B,K.method=q,Ke(y)}o=[new pe(0,0,0,0,function(y,j){var q=65535;for(q>y.pending_buf_size-5&&(q=y.pending_buf_size-5);;){if(y.lookahead<=1){if(we(y),y.lookahead===0&&j===d)return k;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var C=y.block_start+q;if((y.strstart===0||y.strstart>=C)&&(y.lookahead=y.strstart-C,y.strstart=C,z(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-D&&(z(y,!1),y.strm.avail_out===0))return k}return y.insert=0,j===h?(z(y,!0),y.strm.avail_out===0?G:O):(y.strstart>y.block_start&&(z(y,!1),y.strm.avail_out),k)}),new pe(4,4,8,4,Pe),new pe(4,5,16,8,Pe),new pe(4,6,32,32,Pe),new pe(4,4,16,16,fe),new pe(8,16,32,32,fe),new pe(8,16,128,128,fe),new pe(8,32,128,256,fe),new pe(32,128,258,1024,fe),new pe(32,258,258,4096,fe)],n.deflateInit=function(y,j){return Ne(y,j,b,15,8,0)},n.deflateInit2=Ne,n.deflateReset=Ke,n.deflateResetKeep=_e,n.deflateSetHeader=function(y,j){return y&&y.state?y.state.wrap!==2?g:(y.state.gzhead=j,u):g},n.deflate=function(y,j){var q,C,x,B;if(!y||!y.state||5<j||j<0)return y?ae(y,g):g;if(C=y.state,!y.output||!y.input&&y.avail_in!==0||C.status===666&&j!==h)return ae(y,y.avail_out===0?-5:g);if(C.strm=y,q=C.last_flush,C.last_flush=j,C.status===S)if(C.wrap===2)y.adler=0,se(C,31),se(C,139),se(C,8),C.gzhead?(se(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),se(C,255&C.gzhead.time),se(C,C.gzhead.time>>8&255),se(C,C.gzhead.time>>16&255),se(C,C.gzhead.time>>24&255),se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),se(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(se(C,255&C.gzhead.extra.length),se(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(y.adler=c(y.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(se(C,0),se(C,0),se(C,0),se(C,0),se(C,0),se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),se(C,3),C.status=R);else{var V=b+(C.w_bits-8<<4)<<8;V|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(V|=32),V+=31-V%31,C.status=R,ee(C,V),C.strstart!==0&&(ee(C,y.adler>>>16),ee(C,65535&y.adler)),y.adler=1}if(C.status===69)if(C.gzhead.extra){for(x=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>x&&(y.adler=c(y.adler,C.pending_buf,C.pending-x,x)),U(y),x=C.pending,C.pending!==C.pending_buf_size));)se(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>x&&(y.adler=c(y.adler,C.pending_buf,C.pending-x,x)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){x=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>x&&(y.adler=c(y.adler,C.pending_buf,C.pending-x,x)),U(y),x=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>x&&(y.adler=c(y.adler,C.pending_buf,C.pending-x,x)),B===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){x=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>x&&(y.adler=c(y.adler,C.pending_buf,C.pending-x,x)),U(y),x=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>x&&(y.adler=c(y.adler,C.pending_buf,C.pending-x,x)),B===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&U(y),C.pending+2<=C.pending_buf_size&&(se(C,255&y.adler),se(C,y.adler>>8&255),y.adler=0,C.status=R)):C.status=R),C.pending!==0){if(U(y),y.avail_out===0)return C.last_flush=-1,u}else if(y.avail_in===0&&W(j)<=W(q)&&j!==h)return ae(y,-5);if(C.status===666&&y.avail_in!==0)return ae(y,-5);if(y.avail_in!==0||C.lookahead!==0||j!==d&&C.status!==666){var K=C.strategy===2?(function(H,Z){for(var oe;;){if(H.lookahead===0&&(we(H),H.lookahead===0)){if(Z===d)return k;break}if(H.match_length=0,oe=r._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,oe&&(z(H,!1),H.strm.avail_out===0))return k}return H.insert=0,Z===h?(z(H,!0),H.strm.avail_out===0?G:O):H.last_lit&&(z(H,!1),H.strm.avail_out===0)?k:N})(C,j):C.strategy===3?(function(H,Z){for(var oe,J,ce,be,he=H.window;;){if(H.lookahead<=L){if(we(H),H.lookahead<=L&&Z===d)return k;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=P&&0<H.strstart&&(J=he[ce=H.strstart-1])===he[++ce]&&J===he[++ce]&&J===he[++ce]){be=H.strstart+L;do;while(J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&ce<be);H.match_length=L-(be-ce),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=P?(oe=r._tr_tally(H,1,H.match_length-P),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(oe=r._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),oe&&(z(H,!1),H.strm.avail_out===0))return k}return H.insert=0,Z===h?(z(H,!0),H.strm.avail_out===0?G:O):H.last_lit&&(z(H,!1),H.strm.avail_out===0)?k:N})(C,j):o[C.level].func(C,j);if(K!==G&&K!==O||(C.status=666),K===k||K===G)return y.avail_out===0&&(C.last_flush=-1),u;if(K===N&&(j===1?r._tr_align(C):j!==5&&(r._tr_stored_block(C,0,0,!1),j===3&&(ne(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),U(y),y.avail_out===0))return C.last_flush=-1,u}return j!==h?u:C.wrap<=0?1:(C.wrap===2?(se(C,255&y.adler),se(C,y.adler>>8&255),se(C,y.adler>>16&255),se(C,y.adler>>24&255),se(C,255&y.total_in),se(C,y.total_in>>8&255),se(C,y.total_in>>16&255),se(C,y.total_in>>24&255)):(ee(C,y.adler>>>16),ee(C,65535&y.adler)),U(y),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?u:1)},n.deflateEnd=function(y){var j;return y&&y.state?(j=y.state.status)!==S&&j!==69&&j!==73&&j!==91&&j!==103&&j!==R&&j!==666?ae(y,g):(y.state=null,j===R?ae(y,-3):u):g},n.deflateSetDictionary=function(y,j){var q,C,x,B,V,K,H,Z,oe=j.length;if(!y||!y.state||(B=(q=y.state).wrap)===2||B===1&&q.status!==S||q.lookahead)return g;for(B===1&&(y.adler=l(y.adler,j,oe,0)),q.wrap=0,oe>=q.w_size&&(B===0&&(ne(q.head),q.strstart=0,q.block_start=0,q.insert=0),Z=new s.Buf8(q.w_size),s.arraySet(Z,j,oe-q.w_size,q.w_size,0),j=Z,oe=q.w_size),V=y.avail_in,K=y.next_in,H=y.input,y.avail_in=oe,y.next_in=0,y.input=j,we(q);q.lookahead>=P;){for(C=q.strstart,x=q.lookahead-(P-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[C+P-1])&q.hash_mask,q.prev[C&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=C,C++,--x;);q.strstart=C,q.lookahead=P-1,we(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=P-1,q.match_available=0,y.next_in=K,y.input=H,y.avail_in=V,q.wrap=B,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,n){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,n){a.exports=function(o,s){var r,l,c,f,d,h,u,g,m,v,w,b,p,T,_,E,M,A,P,L,D,S,R,k,N;r=o.state,l=o.next_in,k=o.input,c=l+(o.avail_in-5),f=o.next_out,N=o.output,d=f-(s-o.avail_out),h=f+(o.avail_out-257),u=r.dmax,g=r.wsize,m=r.whave,v=r.wnext,w=r.window,b=r.hold,p=r.bits,T=r.lencode,_=r.distcode,E=(1<<r.lenbits)-1,M=(1<<r.distbits)-1;e:do{p<15&&(b+=k[l++]<<p,p+=8,b+=k[l++]<<p,p+=8),A=T[b&E];t:for(;;){if(b>>>=P=A>>>24,p-=P,(P=A>>>16&255)===0)N[f++]=65535&A;else{if(!(16&P)){if((64&P)==0){A=T[(65535&A)+(b&(1<<P)-1)];continue t}if(32&P){r.mode=12;break e}o.msg="invalid literal/length code",r.mode=30;break e}L=65535&A,(P&=15)&&(p<P&&(b+=k[l++]<<p,p+=8),L+=b&(1<<P)-1,b>>>=P,p-=P),p<15&&(b+=k[l++]<<p,p+=8,b+=k[l++]<<p,p+=8),A=_[b&M];i:for(;;){if(b>>>=P=A>>>24,p-=P,!(16&(P=A>>>16&255))){if((64&P)==0){A=_[(65535&A)+(b&(1<<P)-1)];continue i}o.msg="invalid distance code",r.mode=30;break e}if(D=65535&A,p<(P&=15)&&(b+=k[l++]<<p,(p+=8)<P&&(b+=k[l++]<<p,p+=8)),u<(D+=b&(1<<P)-1)){o.msg="invalid distance too far back",r.mode=30;break e}if(b>>>=P,p-=P,(P=f-d)<D){if(m<(P=D-P)&&r.sane){o.msg="invalid distance too far back",r.mode=30;break e}if(R=w,(S=0)===v){if(S+=g-P,P<L){for(L-=P;N[f++]=w[S++],--P;);S=f-D,R=N}}else if(v<P){if(S+=g+v-P,(P-=v)<L){for(L-=P;N[f++]=w[S++],--P;);if(S=0,v<L){for(L-=P=v;N[f++]=w[S++],--P;);S=f-D,R=N}}}else if(S+=v-P,P<L){for(L-=P;N[f++]=w[S++],--P;);S=f-D,R=N}for(;2<L;)N[f++]=R[S++],N[f++]=R[S++],N[f++]=R[S++],L-=3;L&&(N[f++]=R[S++],1<L&&(N[f++]=R[S++]))}else{for(S=f-D;N[f++]=N[S++],N[f++]=N[S++],N[f++]=N[S++],2<(L-=3););L&&(N[f++]=N[S++],1<L&&(N[f++]=N[S++]))}break}}break}}while(l<c&&f<h);l-=L=p>>3,b&=(1<<(p-=L<<3))-1,o.next_in=l,o.next_out=f,o.avail_in=l<c?c-l+5:5-(l-c),o.avail_out=f<h?h-f+257:257-(f-h),r.hold=b,r.bits=p}},{}],49:[function(i,a,n){var o=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),f=1,d=2,h=0,u=-2,g=1,m=852,v=592;function w(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function p(S){var R;return S&&S.state?(R=S.state,S.total_in=S.total_out=R.total=0,S.msg="",R.wrap&&(S.adler=1&R.wrap),R.mode=g,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new o.Buf32(m),R.distcode=R.distdyn=new o.Buf32(v),R.sane=1,R.back=-1,h):u}function T(S){var R;return S&&S.state?((R=S.state).wsize=0,R.whave=0,R.wnext=0,p(S)):u}function _(S,R){var k,N;return S&&S.state?(N=S.state,R<0?(k=0,R=-R):(k=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?u:(N.window!==null&&N.wbits!==R&&(N.window=null),N.wrap=k,N.wbits=R,T(S))):u}function E(S,R){var k,N;return S?(N=new b,(S.state=N).window=null,(k=_(S,R))!==h&&(S.state=null),k):u}var M,A,P=!0;function L(S){if(P){var R;for(M=new o.Buf32(512),A=new o.Buf32(32),R=0;R<144;)S.lens[R++]=8;for(;R<256;)S.lens[R++]=9;for(;R<280;)S.lens[R++]=7;for(;R<288;)S.lens[R++]=8;for(c(f,S.lens,0,288,M,0,S.work,{bits:9}),R=0;R<32;)S.lens[R++]=5;c(d,S.lens,0,32,A,0,S.work,{bits:5}),P=!1}S.lencode=M,S.lenbits=9,S.distcode=A,S.distbits=5}function D(S,R,k,N){var G,O=S.state;return O.window===null&&(O.wsize=1<<O.wbits,O.wnext=0,O.whave=0,O.window=new o.Buf8(O.wsize)),N>=O.wsize?(o.arraySet(O.window,R,k-O.wsize,O.wsize,0),O.wnext=0,O.whave=O.wsize):(N<(G=O.wsize-O.wnext)&&(G=N),o.arraySet(O.window,R,k-N,G,O.wnext),(N-=G)?(o.arraySet(O.window,R,k-N,N,0),O.wnext=N,O.whave=O.wsize):(O.wnext+=G,O.wnext===O.wsize&&(O.wnext=0),O.whave<O.wsize&&(O.whave+=G))),0}n.inflateReset=T,n.inflateReset2=_,n.inflateResetKeep=p,n.inflateInit=function(S){return E(S,15)},n.inflateInit2=E,n.inflate=function(S,R){var k,N,G,O,ae,W,ne,U,z,se,ee,Q,we,Pe,fe,pe,Me,_e,Ke,Ne,y,j,q,C,x=0,B=new o.Buf8(4),V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return u;(k=S.state).mode===12&&(k.mode=13),ae=S.next_out,G=S.output,ne=S.avail_out,O=S.next_in,N=S.input,W=S.avail_in,U=k.hold,z=k.bits,se=W,ee=ne,j=h;e:for(;;)switch(k.mode){case g:if(k.wrap===0){k.mode=13;break}for(;z<16;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(2&k.wrap&&U===35615){B[k.check=0]=255&U,B[1]=U>>>8&255,k.check=r(k.check,B,2,0),z=U=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&U)<<8)+(U>>8))%31){S.msg="incorrect header check",k.mode=30;break}if((15&U)!=8){S.msg="unknown compression method",k.mode=30;break}if(z-=4,y=8+(15&(U>>>=4)),k.wbits===0)k.wbits=y;else if(y>k.wbits){S.msg="invalid window size",k.mode=30;break}k.dmax=1<<y,S.adler=k.check=1,k.mode=512&U?10:12,z=U=0;break;case 2:for(;z<16;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(k.flags=U,(255&k.flags)!=8){S.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){S.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=U>>8&1),512&k.flags&&(B[0]=255&U,B[1]=U>>>8&255,k.check=r(k.check,B,2,0)),z=U=0,k.mode=3;case 3:for(;z<32;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}k.head&&(k.head.time=U),512&k.flags&&(B[0]=255&U,B[1]=U>>>8&255,B[2]=U>>>16&255,B[3]=U>>>24&255,k.check=r(k.check,B,4,0)),z=U=0,k.mode=4;case 4:for(;z<16;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}k.head&&(k.head.xflags=255&U,k.head.os=U>>8),512&k.flags&&(B[0]=255&U,B[1]=U>>>8&255,k.check=r(k.check,B,2,0)),z=U=0,k.mode=5;case 5:if(1024&k.flags){for(;z<16;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}k.length=U,k.head&&(k.head.extra_len=U),512&k.flags&&(B[0]=255&U,B[1]=U>>>8&255,k.check=r(k.check,B,2,0)),z=U=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(W<(Q=k.length)&&(Q=W),Q&&(k.head&&(y=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),o.arraySet(k.head.extra,N,O,Q,y)),512&k.flags&&(k.check=r(k.check,N,Q,O)),W-=Q,O+=Q,k.length-=Q),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(W===0)break e;for(Q=0;y=N[O+Q++],k.head&&y&&k.length<65536&&(k.head.name+=String.fromCharCode(y)),y&&Q<W;);if(512&k.flags&&(k.check=r(k.check,N,Q,O)),W-=Q,O+=Q,y)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(W===0)break e;for(Q=0;y=N[O+Q++],k.head&&y&&k.length<65536&&(k.head.comment+=String.fromCharCode(y)),y&&Q<W;);if(512&k.flags&&(k.check=r(k.check,N,Q,O)),W-=Q,O+=Q,y)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;z<16;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(U!==(65535&k.check)){S.msg="header crc mismatch",k.mode=30;break}z=U=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),S.adler=k.check=0,k.mode=12;break;case 10:for(;z<32;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}S.adler=k.check=w(U),z=U=0,k.mode=11;case 11:if(k.havedict===0)return S.next_out=ae,S.avail_out=ne,S.next_in=O,S.avail_in=W,k.hold=U,k.bits=z,2;S.adler=k.check=1,k.mode=12;case 12:if(R===5||R===6)break e;case 13:if(k.last){U>>>=7&z,z-=7&z,k.mode=27;break}for(;z<3;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}switch(k.last=1&U,z-=1,3&(U>>>=1)){case 0:k.mode=14;break;case 1:if(L(k),k.mode=20,R!==6)break;U>>>=2,z-=2;break e;case 2:k.mode=17;break;case 3:S.msg="invalid block type",k.mode=30}U>>>=2,z-=2;break;case 14:for(U>>>=7&z,z-=7&z;z<32;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if((65535&U)!=(U>>>16^65535)){S.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&U,z=U=0,k.mode=15,R===6)break e;case 15:k.mode=16;case 16:if(Q=k.length){if(W<Q&&(Q=W),ne<Q&&(Q=ne),Q===0)break e;o.arraySet(G,N,O,Q,ae),W-=Q,O+=Q,ne-=Q,ae+=Q,k.length-=Q;break}k.mode=12;break;case 17:for(;z<14;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(k.nlen=257+(31&U),U>>>=5,z-=5,k.ndist=1+(31&U),U>>>=5,z-=5,k.ncode=4+(15&U),U>>>=4,z-=4,286<k.nlen||30<k.ndist){S.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;z<3;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}k.lens[V[k.have++]]=7&U,U>>>=3,z-=3}for(;k.have<19;)k.lens[V[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,q={bits:k.lenbits},j=c(0,k.lens,0,19,k.lencode,0,k.work,q),k.lenbits=q.bits,j){S.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;pe=(x=k.lencode[U&(1<<k.lenbits)-1])>>>16&255,Me=65535&x,!((fe=x>>>24)<=z);){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(Me<16)U>>>=fe,z-=fe,k.lens[k.have++]=Me;else{if(Me===16){for(C=fe+2;z<C;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(U>>>=fe,z-=fe,k.have===0){S.msg="invalid bit length repeat",k.mode=30;break}y=k.lens[k.have-1],Q=3+(3&U),U>>>=2,z-=2}else if(Me===17){for(C=fe+3;z<C;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}z-=fe,y=0,Q=3+(7&(U>>>=fe)),U>>>=3,z-=3}else{for(C=fe+7;z<C;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}z-=fe,y=0,Q=11+(127&(U>>>=fe)),U>>>=7,z-=7}if(k.have+Q>k.nlen+k.ndist){S.msg="invalid bit length repeat",k.mode=30;break}for(;Q--;)k.lens[k.have++]=y}}if(k.mode===30)break;if(k.lens[256]===0){S.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,q={bits:k.lenbits},j=c(f,k.lens,0,k.nlen,k.lencode,0,k.work,q),k.lenbits=q.bits,j){S.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,q={bits:k.distbits},j=c(d,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,q),k.distbits=q.bits,j){S.msg="invalid distances set",k.mode=30;break}if(k.mode=20,R===6)break e;case 20:k.mode=21;case 21:if(6<=W&&258<=ne){S.next_out=ae,S.avail_out=ne,S.next_in=O,S.avail_in=W,k.hold=U,k.bits=z,l(S,ee),ae=S.next_out,G=S.output,ne=S.avail_out,O=S.next_in,N=S.input,W=S.avail_in,U=k.hold,z=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;pe=(x=k.lencode[U&(1<<k.lenbits)-1])>>>16&255,Me=65535&x,!((fe=x>>>24)<=z);){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(pe&&(240&pe)==0){for(_e=fe,Ke=pe,Ne=Me;pe=(x=k.lencode[Ne+((U&(1<<_e+Ke)-1)>>_e)])>>>16&255,Me=65535&x,!(_e+(fe=x>>>24)<=z);){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}U>>>=_e,z-=_e,k.back+=_e}if(U>>>=fe,z-=fe,k.back+=fe,k.length=Me,pe===0){k.mode=26;break}if(32&pe){k.back=-1,k.mode=12;break}if(64&pe){S.msg="invalid literal/length code",k.mode=30;break}k.extra=15&pe,k.mode=22;case 22:if(k.extra){for(C=k.extra;z<C;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}k.length+=U&(1<<k.extra)-1,U>>>=k.extra,z-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;pe=(x=k.distcode[U&(1<<k.distbits)-1])>>>16&255,Me=65535&x,!((fe=x>>>24)<=z);){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if((240&pe)==0){for(_e=fe,Ke=pe,Ne=Me;pe=(x=k.distcode[Ne+((U&(1<<_e+Ke)-1)>>_e)])>>>16&255,Me=65535&x,!(_e+(fe=x>>>24)<=z);){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}U>>>=_e,z-=_e,k.back+=_e}if(U>>>=fe,z-=fe,k.back+=fe,64&pe){S.msg="invalid distance code",k.mode=30;break}k.offset=Me,k.extra=15&pe,k.mode=24;case 24:if(k.extra){for(C=k.extra;z<C;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}k.offset+=U&(1<<k.extra)-1,U>>>=k.extra,z-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){S.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(ne===0)break e;if(Q=ee-ne,k.offset>Q){if((Q=k.offset-Q)>k.whave&&k.sane){S.msg="invalid distance too far back",k.mode=30;break}we=Q>k.wnext?(Q-=k.wnext,k.wsize-Q):k.wnext-Q,Q>k.length&&(Q=k.length),Pe=k.window}else Pe=G,we=ae-k.offset,Q=k.length;for(ne<Q&&(Q=ne),ne-=Q,k.length-=Q;G[ae++]=Pe[we++],--Q;);k.length===0&&(k.mode=21);break;case 26:if(ne===0)break e;G[ae++]=k.length,ne--,k.mode=21;break;case 27:if(k.wrap){for(;z<32;){if(W===0)break e;W--,U|=N[O++]<<z,z+=8}if(ee-=ne,S.total_out+=ee,k.total+=ee,ee&&(S.adler=k.check=k.flags?r(k.check,G,ee,ae-ee):s(k.check,G,ee,ae-ee)),ee=ne,(k.flags?U:w(U))!==k.check){S.msg="incorrect data check",k.mode=30;break}z=U=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;z<32;){if(W===0)break e;W--,U+=N[O++]<<z,z+=8}if(U!==(4294967295&k.total)){S.msg="incorrect length check",k.mode=30;break}z=U=0}k.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;case 32:default:return u}return S.next_out=ae,S.avail_out=ne,S.next_in=O,S.avail_in=W,k.hold=U,k.bits=z,(k.wsize||ee!==S.avail_out&&k.mode<30&&(k.mode<27||R!==4))&&D(S,S.output,S.next_out,ee-S.avail_out)?(k.mode=31,-4):(se-=S.avail_in,ee-=S.avail_out,S.total_in+=se,S.total_out+=ee,k.total+=ee,k.wrap&&ee&&(S.adler=k.check=k.flags?r(k.check,G,ee,S.next_out-ee):s(k.check,G,ee,S.next_out-ee)),S.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(se==0&&ee===0||R===4)&&j===h&&(j=-5),j)},n.inflateEnd=function(S){if(!S||!S.state)return u;var R=S.state;return R.window&&(R.window=null),S.state=null,h},n.inflateGetHeader=function(S,R){var k;return S&&S.state?(2&(k=S.state).wrap)==0?u:((k.head=R).done=!1,h):u},n.inflateSetDictionary=function(S,R){var k,N=R.length;return S&&S.state?(k=S.state).wrap!==0&&k.mode!==11?u:k.mode===11&&s(1,R,N,0)!==k.check?-3:D(S,R,N,N)?(k.mode=31,-4):(k.havedict=1,h):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,n){var o=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(f,d,h,u,g,m,v,w){var b,p,T,_,E,M,A,P,L,D=w.bits,S=0,R=0,k=0,N=0,G=0,O=0,ae=0,W=0,ne=0,U=0,z=null,se=0,ee=new o.Buf16(16),Q=new o.Buf16(16),we=null,Pe=0;for(S=0;S<=15;S++)ee[S]=0;for(R=0;R<u;R++)ee[d[h+R]]++;for(G=D,N=15;1<=N&&ee[N]===0;N--);if(N<G&&(G=N),N===0)return g[m++]=20971520,g[m++]=20971520,w.bits=1,0;for(k=1;k<N&&ee[k]===0;k++);for(G<k&&(G=k),S=W=1;S<=15;S++)if(W<<=1,(W-=ee[S])<0)return-1;if(0<W&&(f===0||N!==1))return-1;for(Q[1]=0,S=1;S<15;S++)Q[S+1]=Q[S]+ee[S];for(R=0;R<u;R++)d[h+R]!==0&&(v[Q[d[h+R]]++]=R);if(M=f===0?(z=we=v,19):f===1?(z=s,se-=257,we=r,Pe-=257,256):(z=l,we=c,-1),S=k,E=m,ae=R=U=0,T=-1,_=(ne=1<<(O=G))-1,f===1&&852<ne||f===2&&592<ne)return 1;for(;;){for(A=S-ae,L=v[R]<M?(P=0,v[R]):v[R]>M?(P=we[Pe+v[R]],z[se+v[R]]):(P=96,0),b=1<<S-ae,k=p=1<<O;g[E+(U>>ae)+(p-=b)]=A<<24|P<<16|L|0,p!==0;);for(b=1<<S-1;U&b;)b>>=1;if(b!==0?(U&=b-1,U+=b):U=0,R++,--ee[S]==0){if(S===N)break;S=d[h+v[R]]}if(G<S&&(U&_)!==T){for(ae===0&&(ae=G),E+=k,W=1<<(O=S-ae);O+ae<N&&!((W-=ee[O+ae])<=0);)O++,W<<=1;if(ne+=1<<O,f===1&&852<ne||f===2&&592<ne)return 1;g[T=U&_]=G<<24|O<<16|E-m|0}}return U!==0&&(g[E+U]=S-ae<<24|64<<16|0),w.bits=G,0}},{"../utils/common":41}],51:[function(i,a,n){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,n){var o=i("../utils/common"),s=0,r=1;function l(x){for(var B=x.length;0<=--B;)x[B]=0}var c=0,f=29,d=256,h=d+1+f,u=30,g=19,m=2*h+1,v=15,w=16,b=7,p=256,T=16,_=17,E=18,M=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=new Array(2*(h+2));l(D);var S=new Array(2*u);l(S);var R=new Array(512);l(R);var k=new Array(256);l(k);var N=new Array(f);l(N);var G,O,ae,W=new Array(u);function ne(x,B,V,K,H){this.static_tree=x,this.extra_bits=B,this.extra_base=V,this.elems=K,this.max_length=H,this.has_stree=x&&x.length}function U(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function z(x){return x<256?R[x]:R[256+(x>>>7)]}function se(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function ee(x,B,V){x.bi_valid>w-V?(x.bi_buf|=B<<x.bi_valid&65535,se(x,x.bi_buf),x.bi_buf=B>>w-x.bi_valid,x.bi_valid+=V-w):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=V)}function Q(x,B,V){ee(x,V[2*B],V[2*B+1])}function we(x,B){for(var V=0;V|=1&x,x>>>=1,V<<=1,0<--B;);return V>>>1}function Pe(x,B,V){var K,H,Z=new Array(v+1),oe=0;for(K=1;K<=v;K++)Z[K]=oe=oe+V[K-1]<<1;for(H=0;H<=B;H++){var J=x[2*H+1];J!==0&&(x[2*H]=we(Z[J]++,J))}}function fe(x){var B;for(B=0;B<h;B++)x.dyn_ltree[2*B]=0;for(B=0;B<u;B++)x.dyn_dtree[2*B]=0;for(B=0;B<g;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*p]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function pe(x){8<x.bi_valid?se(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Me(x,B,V,K){var H=2*B,Z=2*V;return x[H]<x[Z]||x[H]===x[Z]&&K[B]<=K[V]}function _e(x,B,V){for(var K=x.heap[V],H=V<<1;H<=x.heap_len&&(H<x.heap_len&&Me(B,x.heap[H+1],x.heap[H],x.depth)&&H++,!Me(B,K,x.heap[H],x.depth));)x.heap[V]=x.heap[H],V=H,H<<=1;x.heap[V]=K}function Ke(x,B,V){var K,H,Z,oe,J=0;if(x.last_lit!==0)for(;K=x.pending_buf[x.d_buf+2*J]<<8|x.pending_buf[x.d_buf+2*J+1],H=x.pending_buf[x.l_buf+J],J++,K===0?Q(x,H,B):(Q(x,(Z=k[H])+d+1,B),(oe=M[Z])!==0&&ee(x,H-=N[Z],oe),Q(x,Z=z(--K),V),(oe=A[Z])!==0&&ee(x,K-=W[Z],oe)),J<x.last_lit;);Q(x,p,B)}function Ne(x,B){var V,K,H,Z=B.dyn_tree,oe=B.stat_desc.static_tree,J=B.stat_desc.has_stree,ce=B.stat_desc.elems,be=-1;for(x.heap_len=0,x.heap_max=m,V=0;V<ce;V++)Z[2*V]!==0?(x.heap[++x.heap_len]=be=V,x.depth[V]=0):Z[2*V+1]=0;for(;x.heap_len<2;)Z[2*(H=x.heap[++x.heap_len]=be<2?++be:0)]=1,x.depth[H]=0,x.opt_len--,J&&(x.static_len-=oe[2*H+1]);for(B.max_code=be,V=x.heap_len>>1;1<=V;V--)_e(x,Z,V);for(H=ce;V=x.heap[1],x.heap[1]=x.heap[x.heap_len--],_e(x,Z,1),K=x.heap[1],x.heap[--x.heap_max]=V,x.heap[--x.heap_max]=K,Z[2*H]=Z[2*V]+Z[2*K],x.depth[H]=(x.depth[V]>=x.depth[K]?x.depth[V]:x.depth[K])+1,Z[2*V+1]=Z[2*K+1]=H,x.heap[1]=H++,_e(x,Z,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(he,Xe){var Li,dt,Ni,Ce,Tn,Ao,kt=Xe.dyn_tree,wl=Xe.max_code,N1=Xe.stat_desc.static_tree,U1=Xe.stat_desc.has_stree,q1=Xe.stat_desc.extra_bits,kl=Xe.stat_desc.extra_base,Ui=Xe.stat_desc.max_length,_n=0;for(Ce=0;Ce<=v;Ce++)he.bl_count[Ce]=0;for(kt[2*he.heap[he.heap_max]+1]=0,Li=he.heap_max+1;Li<m;Li++)Ui<(Ce=kt[2*kt[2*(dt=he.heap[Li])+1]+1]+1)&&(Ce=Ui,_n++),kt[2*dt+1]=Ce,wl<dt||(he.bl_count[Ce]++,Tn=0,kl<=dt&&(Tn=q1[dt-kl]),Ao=kt[2*dt],he.opt_len+=Ao*(Ce+Tn),U1&&(he.static_len+=Ao*(N1[2*dt+1]+Tn)));if(_n!==0){do{for(Ce=Ui-1;he.bl_count[Ce]===0;)Ce--;he.bl_count[Ce]--,he.bl_count[Ce+1]+=2,he.bl_count[Ui]--,_n-=2}while(0<_n);for(Ce=Ui;Ce!==0;Ce--)for(dt=he.bl_count[Ce];dt!==0;)wl<(Ni=he.heap[--Li])||(kt[2*Ni+1]!==Ce&&(he.opt_len+=(Ce-kt[2*Ni+1])*kt[2*Ni],kt[2*Ni+1]=Ce),dt--)}})(x,B),Pe(Z,be,x.bl_count)}function y(x,B,V){var K,H,Z=-1,oe=B[1],J=0,ce=7,be=4;for(oe===0&&(ce=138,be=3),B[2*(V+1)+1]=65535,K=0;K<=V;K++)H=oe,oe=B[2*(K+1)+1],++J<ce&&H===oe||(J<be?x.bl_tree[2*H]+=J:H!==0?(H!==Z&&x.bl_tree[2*H]++,x.bl_tree[2*T]++):J<=10?x.bl_tree[2*_]++:x.bl_tree[2*E]++,Z=H,be=(J=0)===oe?(ce=138,3):H===oe?(ce=6,3):(ce=7,4))}function j(x,B,V){var K,H,Z=-1,oe=B[1],J=0,ce=7,be=4;for(oe===0&&(ce=138,be=3),K=0;K<=V;K++)if(H=oe,oe=B[2*(K+1)+1],!(++J<ce&&H===oe)){if(J<be)for(;Q(x,H,x.bl_tree),--J!=0;);else H!==0?(H!==Z&&(Q(x,H,x.bl_tree),J--),Q(x,T,x.bl_tree),ee(x,J-3,2)):J<=10?(Q(x,_,x.bl_tree),ee(x,J-3,3)):(Q(x,E,x.bl_tree),ee(x,J-11,7));Z=H,be=(J=0)===oe?(ce=138,3):H===oe?(ce=6,3):(ce=7,4)}}l(W);var q=!1;function C(x,B,V,K){ee(x,(c<<1)+(K?1:0),3),(function(H,Z,oe,J){pe(H),se(H,oe),se(H,~oe),o.arraySet(H.pending_buf,H.window,Z,oe,H.pending),H.pending+=oe})(x,B,V)}n._tr_init=function(x){q||((function(){var B,V,K,H,Z,oe=new Array(v+1);for(H=K=0;H<f-1;H++)for(N[H]=K,B=0;B<1<<M[H];B++)k[K++]=H;for(k[K-1]=H,H=Z=0;H<16;H++)for(W[H]=Z,B=0;B<1<<A[H];B++)R[Z++]=H;for(Z>>=7;H<u;H++)for(W[H]=Z<<7,B=0;B<1<<A[H]-7;B++)R[256+Z++]=H;for(V=0;V<=v;V++)oe[V]=0;for(B=0;B<=143;)D[2*B+1]=8,B++,oe[8]++;for(;B<=255;)D[2*B+1]=9,B++,oe[9]++;for(;B<=279;)D[2*B+1]=7,B++,oe[7]++;for(;B<=287;)D[2*B+1]=8,B++,oe[8]++;for(Pe(D,h+1,oe),B=0;B<u;B++)S[2*B+1]=5,S[2*B]=we(B,5);G=new ne(D,M,d+1,h,v),O=new ne(S,A,0,u,v),ae=new ne(new Array(0),P,0,g,b)})(),q=!0),x.l_desc=new U(x.dyn_ltree,G),x.d_desc=new U(x.dyn_dtree,O),x.bl_desc=new U(x.bl_tree,ae),x.bi_buf=0,x.bi_valid=0,fe(x)},n._tr_stored_block=C,n._tr_flush_block=function(x,B,V,K){var H,Z,oe=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(J){var ce,be=4093624447;for(ce=0;ce<=31;ce++,be>>>=1)if(1&be&&J.dyn_ltree[2*ce]!==0)return s;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return r;for(ce=32;ce<d;ce++)if(J.dyn_ltree[2*ce]!==0)return r;return s})(x)),Ne(x,x.l_desc),Ne(x,x.d_desc),oe=(function(J){var ce;for(y(J,J.dyn_ltree,J.l_desc.max_code),y(J,J.dyn_dtree,J.d_desc.max_code),Ne(J,J.bl_desc),ce=g-1;3<=ce&&J.bl_tree[2*L[ce]+1]===0;ce--);return J.opt_len+=3*(ce+1)+5+5+4,ce})(x),H=x.opt_len+3+7>>>3,(Z=x.static_len+3+7>>>3)<=H&&(H=Z)):H=Z=V+5,V+4<=H&&B!==-1?C(x,B,V,K):x.strategy===4||Z===H?(ee(x,2+(K?1:0),3),Ke(x,D,S)):(ee(x,4+(K?1:0),3),(function(J,ce,be,he){var Xe;for(ee(J,ce-257,5),ee(J,be-1,5),ee(J,he-4,4),Xe=0;Xe<he;Xe++)ee(J,J.bl_tree[2*L[Xe]+1],3);j(J,J.dyn_ltree,ce-1),j(J,J.dyn_dtree,be-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,oe+1),Ke(x,x.dyn_ltree,x.dyn_dtree)),fe(x),K&&pe(x)},n._tr_tally=function(x,B,V){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&V,x.last_lit++,B===0?x.dyn_ltree[2*V]++:(x.matches++,B--,x.dyn_ltree[2*(k[V]+d+1)]++,x.dyn_dtree[2*z(B)]++),x.last_lit===x.lit_bufsize-1},n._tr_align=function(x){ee(x,2,3),Q(x,p,D),(function(B){B.bi_valid===16?(se(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,a,n){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,n){(function(o){(function(s,r){if(!s.setImmediate){var l,c,f,d,h=1,u={},g=!1,m=s.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(s);v=v&&v.setTimeout?v:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){b(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(d="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",p,!1):s.attachEvent("onmessage",p),function(T){s.postMessage(d+T,"*")}):s.MessageChannel?((f=new MessageChannel).port1.onmessage=function(T){b(T.data)},function(T){f.port2.postMessage(T)}):m&&"onreadystatechange"in m.createElement("script")?(c=m.documentElement,function(T){var _=m.createElement("script");_.onreadystatechange=function(){b(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(b,0,T)},v.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),E=0;E<_.length;E++)_[E]=arguments[E+1];var M={callback:T,args:_};return u[h]=M,l(h),h++},v.clearImmediate=w}function w(T){delete u[T]}function b(T){if(g)setTimeout(b,0,T);else{var _=u[T];if(_){g=!0;try{(function(E){var M=E.callback,A=E.args;switch(A.length){case 0:M();break;case 1:M(A[0]);break;case 2:M(A[0],A[1]);break;case 3:M(A[0],A[1],A[2]);break;default:M.apply(r,A)}})(_)}finally{w(T),g=!1}}}}function p(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(d)===0&&b(+T.data.slice(d.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof an<"u"?an:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(jn)),jn.exports}var om=nm();const sm=am(om);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function $(t){if(!t)throw new Error("Assertion failed.")}const rm=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ze=t=>t&&t[t.length-1],St=t=>t>=0&&t<2**32,Y=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},pt=t=>{const e=Y(t);return(e&1)===0?-(e>>1):e+1>>1},We=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),ot=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),st=new TextEncoder,on={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},sn={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},rn={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},lm=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,ln=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Is{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(n=>{let o=!1;e=()=>{o||(n(),this.pending--,o=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const Bs=(t,e,i)=>{let a=0,n=t.length-1,o=-1;for(;a<=n;){const s=a+(n-a+1)/2|0;i(t[s])<=e?(o=s,a=s+1):n=s-1}return o},Rs=()=>{let t,e;return{promise:new Promise((a,n)=>{t=a,e=n}),resolve:t,reject:e}},Ot=t=>{throw new Error(`Unexpected value: ${t}`)},cm=(t,e,i)=>{const a=t.getUint8(e),n=t.getUint8(e+1),o=t.getUint8(e+2);return a<<16|n<<8|o},Vn=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},um=(t,e,i,a)=>{i=Fe(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),Vn(t,e,i,a)},Fe=(t,e,i)=>Math.max(e,Math.min(i,t)),fm=(t,e,i)=>t+(e-t)*i,dm="und",zs=(t,e)=>Math.round(t/e)*e,Os=(t,e)=>Math.round(t*e)/e,Hs=(t,e)=>Math.floor(t*e)/e,hm=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},mm=/^[a-z]{3}$/,pm=t=>mm.test(t),xt=1e6*(1+Number.EPSILON),gm=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,n=1,o=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*o+a,f=l*s+n;if(f>e)return{num:i*o,den:s};if(a=o,n=s,o=c,s=f,r=1/(r-l),!isFinite(r))break}return{num:i*o,den:s}};class Ls{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Gn=null;const vm=()=>Gn!==null?Gn:Gn=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let Kn=null;const Ns=()=>Kn!==null?Kn:Kn=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let Xn=null;const bm=()=>Xn!==null?Xn:Xn=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let Zn=null;const ym=()=>{if(Zn!==null)return Zn;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?Zn=Number(t[1]):null},Us=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},wm=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},km=(t,e)=>{let i=-1,a=1/0;for(let n=0;n<t.length;n++){const o=e(t[n]);o<a&&(a=o,i=n)}return i},qs=t=>{$(Number.isInteger(t.num)),$(Number.isInteger(t.den)),$(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const n=e%i;e=i,i=n}const a=e||1;return{num:t.num/a,den:t.den/a}},Qn=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Tm=t=>new Promise(e=>setTimeout(e,t)),Ds=t=>Array.isArray(t)?t:[t];class Yn{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const n={fn:i,once:a?.once??!1};return this._listeners.get(e).add(n),()=>{this._listeners.get(e)?.delete(n)}}_emit(...e){const[i,a]=e,n=this._listeners.get(i);if(n)for(const o of n){try{o.fn(a)}catch(s){console.error(s)}o.once&&n.delete(o)}}}const _m=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var rt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(rt||(rt={}));class ke{constructor(){}static get level(){return ke._level}static set level(e){if(e!==rt.Silent&&e!==rt.Errors&&e!==rt.Warnings&&e!==rt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ke._level=e}static get _emitter(){return ke._emitterInstance??=new Yn}static on(e,i,a){return ke._emitter.on(e,i,a)}static _error(...e){ke._emitter._emit("error",e),ke._level>=rt.Errors&&console.error(...e)}static _warn(...e){ke._emitter._emit("warn",e),ke._level>=rt.Warnings&&console.warn(...e)}static _info(...e){ke._emitter._emit("info",e),ke._level>=rt.Info&&console.info(...e)}}ke._level=rt.Info,ke._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class $s{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Sm{constructor(e,i,a,n){if(this.data=e,this.mimeType=i,this.name=a,this.description=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("description, when provided, must be a string.")}}const xm=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof $s)&&!(e instanceof Sm)&&!_m(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Cm=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
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
 */const cn=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Jn=[-1,1,2,3,4,5,6,8],Em=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Ee(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let n=null;a===15?n=e.readBits(24):a<cn.length&&(n=cn[a]);const o=e.readBits(4);let s=null;return o>=1&&o<=7&&(s=Jn[o]),{objectType:i,frequencyIndex:a,sampleRate:n,channelConfiguration:o,numberOfChannels:s}},Ws=t=>{let e=cn.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=Jn.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let n=13;t.objectType>=32&&(n+=6),e===15&&(n+=24);const o=Math.ceil(n/8),s=new Uint8Array(o),r=new Ee(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const gt=["avc","hevc","vp9","av1","vp8","prores"],Qe=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],eo=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Ht=[...eo,...Qe],_i=["webvtt"],un=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],js=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Vs=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Gs=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Si=["ap4x","ap4h","apch","apcn","apcs","apco"],to=["dtsc","dtsh","dtsl","dtse"],Mm=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Pm=(t,e,i,a,n)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=un.find(h=>s<=h.maxMacroblocks&&a<=h.maxBitrate)??Ze(un),l=r?r.level:0,c="64".padStart(2,"0"),f="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${f}${d}`}else if(t==="hevc"){const l=e*i,c=js.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??Ze(js);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(Vs.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??Ze(Vs)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=Gs.find(f=>s<=f.maxPictureSize&&a<=f.maxBitrate)??Ze(Gs);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Mm.filter(f=>f.alpha===n);let l=r[0].fourCc,c=1/0;for(const{fourCc:f,bitrate:d}of r){const h=Math.abs(d*s-a);h<c&&(c=h,l=f)}return l}else Ot(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Am=t=>{const e=t.split("."),n=(1<<7)+1,o=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(o<<5)+r,c=s.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,h=0,u=e[4]?Number(e[4]):0,g=e[5]?Number(e[5][0]):1,m=e[5]?Number(e[5][1]):1,v=e[5]?Number(e[5][2]):0,w=(c<<7)+(d<<6)+(h<<5)+(u<<4)+(g<<3)+(m<<2)+v;return[n,l,w,0]},Fm=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Qe.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},Ks=/^pcm-([usf])(\d+)(be)?$/,Lt=t=>{if($(Qe.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Ks.exec(t);$(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,n=e[3]!=="be",o=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:n,silentValue:o}},fn=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Si.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":to.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Ks.test(t)?t:t==="webvtt"?"webvtt":null,Im=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Bm=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Rm=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Si],zm=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Om=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Hm=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Lm=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Xs=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Rm.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!ln(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(on);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(sn);if(i.transfer!=null&&!n.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const o=Object.keys(rn);if(i.matrix!=null&&!o.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${o.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!zm.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Om.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Hm.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Lm.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Si.some(i=>t.decoderConfig.codec.startsWith(i))&&!Si.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Si.join(", ")}.`);if(e!==null&&fn(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Nm=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Zs=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Nm.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!ln(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!to.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${to.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Qe.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Qe.join(", ")}).`);if(e!==null&&fn(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Um=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const qm=[48e3,44100,32e3],Dm=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var vt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(vt||(vt={}));var je;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(je||(je={}));const xi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let n=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?n=4:t[e+1]===0&&t[e+2]===1&&(n=3),n===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+n,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Qs=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let n;e===1?n=a.getUint8(i):e===2?n=a.getUint16(i,!1):e===3?n=cm(a,i):($(e===4),n=a.getUint32(i,!1)),i+=e,yield{offset:i,length:n},i+=n}},$m=(t,e)=>{if(e.description){const n=(We(e.description)[4]&3)+1;return Qs(t,n)}else return xi(t)},Ys=t=>t&31,dn=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Wm=(t,e)=>{const i=t.reduce((o,s)=>o+e+s.byteLength,0),a=new Uint8Array(i);let n=0;for(const o of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(n,o.byteLength);break;case 2:s.setUint16(n,o.byteLength,!1);break;case 3:Vn(s,n,o.byteLength,!1);break;case 4:s.setUint32(n,o.byteLength,!1);break}n+=e,a.set(o,n),n+=o.byteLength}return a},jm=t=>{try{const e=[],i=[],a=[];for(const r of xi(t)){const l=t.subarray(r.offset,r.offset+r.length),c=Ys(l[0]);c===vt.SPS?e.push(l):c===vt.PPS?i.push(l):c===vt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const n=e[0],o=Gm(n);$(o!==null);const s=o.profileIdc===100||o.profileIdc===110||o.profileIdc===122||o.profileIdc===144;return{configurationVersion:1,avcProfileIndication:o.profileIdc,profileCompatibility:o.constraintFlags,avcLevelIndication:o.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?o.chromaFormatIdc:null,bitDepthLumaMinus8:s?o.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?o.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return ke._error("Error building AVC Decoder Configuration Record:",e),null}},Vm=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){$(t.chromaFormat!==null),$(t.bitDepthLumaMinus8!==null),$(t.bitDepthChromaMinus8!==null),$(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}}return new Uint8Array(e)},Js={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Gm=t=>{try{const e=new Ee(dn(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),n=e.readAlignedByte(),o=e.readAlignedByte();Y(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=Y(e),s===3&&(c=e.readBits(1)),r=Y(e),l=Y(e),e.skipBits(1),e.readBits(1))){for(let S=0;S<(s!==3?8:12);S++)if(e.readBits(1)){const k=S<6?16:64;let N=8,G=8;for(let O=0;O<k;O++){if(G!==0){const ae=pt(e);G=(N+ae+256)%256}N=G===0?N:G}}}Y(e);const f=Y(e);if(f===0)Y(e);else if(f===1){e.skipBits(1),pt(e),pt(e);const D=Y(e);for(let S=0;S<D;S++)pt(e)}Y(e),e.skipBits(1);const d=Y(e),h=Y(e),u=16*(d+1),g=16*(h+1);let m=u,v=g;const w=e.readBits(1);if(w||e.skipBits(1),e.skipBits(1),e.readBits(1)){const D=Y(e),S=Y(e),R=Y(e),k=Y(e);let N,G;if((c===0?s:0)===0)N=1,G=2-w;else{const ae=s===3?1:2,W=s===1?2:1;N=ae,G=W*(2-w)}m-=N*(D+S),v-=G*(R+k)}let p=2,T=2,_=2,E=0,M={num:1,den:1},A=null,P=null;if(e.readBits(1)){if(e.readBits(1)){const W=e.readBits(8);if(W===255)M={num:e.readBits(16),den:e.readBits(16)};else{const ne=Js[W];ne&&(M=ne)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),E=e.readBits(1),e.readBits(1)&&(p=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(Y(e),Y(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const G=e.readBits(1);G&&er(e);const O=e.readBits(1);O&&er(e),(G||O)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),Y(e),Y(e),Y(e),Y(e),A=Y(e),P=Y(e))}if(A===null){$(P===null);const D=n&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&D)A=0,P=0;else{const S=d+1,R=h+1,k=(2-w)*R,N=un.find(O=>O.level>=o)??Ze(un),G=Math.min(Math.floor(N.maxDpbMbs/(S*k)),16);A=G,P=G}}return $(P!==null),{profileIdc:a,constraintFlags:n,levelIdc:o,frameMbsOnlyFlag:w,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:u,codedHeight:g,displayWidth:m,displayHeight:v,pixelAspectRatio:M,colourPrimaries:p,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:E,numReorderFrames:A,maxDecFrameBuffering:P}}catch(e){return ke._error("Error parsing AVC SPS:",e),null}},er=t=>{const e=Y(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)Y(t),Y(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Km=(t,e)=>{if(e.description){const n=(We(e.description)[21]&3)+1;return Qs(t,n)}else return xi(t)},io=t=>t>>1&63,Xm=t=>{try{const e=new Ee(dn(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:n,general_tier_flag:o,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=Qm(e,i);Y(e);const f=Y(e);let d=0;f===3&&(d=e.readBits(1));const h=Y(e),u=Y(e);let g=h,m=u;if(e.readBits(1)){const S=Y(e),R=Y(e),k=Y(e),N=Y(e);let G=1,O=1;const ae=d===0?f:0;ae===1?(G=2,O=2):ae===2&&(G=2,O=1),g-=(S+R)*G,m-=(k+N)*O}const v=Y(e),w=Y(e);Y(e);const p=e.readBits(1)?0:i;let T=0;for(let S=p;S<=i;S++)Y(e),T=Y(e),Y(e);Y(e),Y(e),Y(e),Y(e),Y(e),Y(e),e.readBits(1)&&e.readBits(1)&&Ym(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),Y(e),Y(e),e.skipBits(1));const _=Y(e);if(Jm(e,_),e.readBits(1)){const S=Y(e);for(let R=0;R<S;R++)Y(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let E=2,M=2,A=2,P=0,L=0,D={num:1,den:1};if(e.readBits(1)){const S=tp(e,i);D=S.pixelAspectRatio,E=S.colourPrimaries,M=S.transferCharacteristics,A=S.matrixCoefficients,P=S.fullRangeFlag,L=S.minSpatialSegmentationIdc}return{displayWidth:g,displayHeight:m,pixelAspectRatio:D,colourPrimaries:E,transferCharacteristics:M,matrixCoefficients:A,fullRangeFlag:P,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:n,generalTierFlag:o,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:f,bitDepthLumaMinus8:v,bitDepthChromaMinus8:w,minSpatialSegmentationIdc:L}}catch(e){return ke._error("Error parsing HEVC SPS:",e),null}},Zm=t=>{try{const e=[],i=[],a=[],n=[];for(const c of xi(t)){const f=t.subarray(c.offset,c.offset+c.length),d=io(f[0]);d===je.VPS_NUT?e.push(f):d===je.SPS_NUT?i.push(f):d===je.PPS_NUT?a.push(f):(d===je.PREFIX_SEI_NUT||d===je.SUFFIX_SEI_NUT)&&n.push(f)}if(i.length===0||a.length===0)return null;const o=Xm(i[0]);if(!o)return null;let s=0;if(a.length>0){const c=a[0],f=new Ee(dn(c));f.skipBits(16),Y(f),Y(f),f.skipBits(1),f.skipBits(1),f.skipBits(3),f.skipBits(1),f.skipBits(1),Y(f),Y(f),pt(f),f.skipBits(1),f.skipBits(1),f.readBits(1)&&Y(f),pt(f),pt(f),f.skipBits(1),f.skipBits(1),f.skipBits(1),f.skipBits(1);const d=f.readBits(1),h=f.readBits(1);!d&&!h?s=0:d&&!h?s=2:!d&&h?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:je.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:je.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:je.PPS_NUT,nalUnits:a}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:io(n[0][0]),nalUnits:n}]:[]];return{configurationVersion:1,generalProfileSpace:o.generalProfileSpace,generalTierFlag:o.generalTierFlag,generalProfileIdc:o.generalProfileIdc,generalProfileCompatibilityFlags:o.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:o.generalConstraintIndicatorFlags,generalLevelIdc:o.generalLevelIdc,minSpatialSegmentationIdc:o.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:o.chromaFormatIdc,bitDepthLumaMinus8:o.bitDepthLumaMinus8,bitDepthChromaMinus8:o.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:o.spsMaxSubLayersMinus1+1,temporalIdNested:o.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return ke._error("Error building HEVC Decoder Configuration Record:",e),null}},Qm=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),n=t.readBits(5);let o=0;for(let f=0;f<32;f++)o=o<<1|t.readBits(1);const s=new Uint8Array(6);for(let f=0;f<6;f++)s[f]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let f=0;f<e;f++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let f=e;f<8;f++)t.skipBits(2);for(let f=0;f<e;f++)l[f]&&t.skipBits(88),c[f]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:n,general_profile_compatibility_flags:o,general_constraint_indicator_flags:s,general_level_idc:r}},Ym=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))Y(t);else{const n=Math.min(64,1<<4+(e<<1));e>1&&pt(t);for(let o=0;o<n;o++)pt(t)}},Jm=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=ep(t,a,e,i)},ep=(t,e,i,a)=>{let n=0,o=0,s=0;if(e!==0&&(o=t.readBits(1)),o){if(e===i){const l=Y(t);s=e-(l+1)}else s=e-1;t.readBits(1),Y(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);n=a[s]}else{const r=Y(t),l=Y(t);for(let c=0;c<r;c++)Y(t),t.readBits(1);for(let c=0;c<l;c++)Y(t),t.readBits(1);n=r+l}return n},tp=(t,e)=>{let i=2,a=2,n=2,o=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=Js[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),o=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),n=t.readBits(8))),t.readBits(1)&&(Y(t),Y(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(Y(t),Y(t),Y(t),Y(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&Y(t),t.readBits(1)&&ip(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=Y(t),Y(t),Y(t),Y(t),Y(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:n,fullRangeFlag:o,minSpatialSegmentationIdc:s}},ip=(t,e,i)=>{let a=!1,n=!1,o=!1;a=t.readBits(1)===1,n=t.readBits(1)===1,(a||n)&&(o=t.readBits(1)===1,o&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),o&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?Y(t):c=t.readBits(1)===1;let f=1;c||(f=Y(t)+1),a&&tr(t,f,o),n&&tr(t,f,o)}},tr=(t,e,i)=>{for(let a=0;a<e;a++)Y(t),Y(t),i&&(Y(t),Y(t)),t.readBits(1)},ap=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let n=0;n<a.length;n++)e.push(a[n])}}return new Uint8Array(e)};var ir;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(ir||(ir={}));const np=function*(t){const e=new Ee(t),i=()=>{let a=0;for(let n=0;n<8;n++){const o=e.readAlignedByte();if(a|=(o&127)<<n*7,!(o&128))break;if(n===7&&o&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),n=e.readBits(1),o=e.readBits(1);e.skipBits(1),n&&e.skipBits(8);let s;if(o){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);$(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},op=t=>{const e=ot(t),i=e.getUint8(9),a=e.getUint16(10,!0),n=e.getUint32(12,!0),o=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:n,outputGain:o,channelMappingFamily:s,channelMappingTable:r}},sp=(t,e,i)=>{switch(t){case"avc":{for(const a of $m(i,e)){const n=i[a.offset],o=Ys(n);if(o>=vt.NON_IDR_SLICE&&o<=vt.SLICE_DPC)return"delta";if(o===vt.IDR)return"key";if(o===vt.SEI&&(!bm()||ym()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=dn(s);let l=1;do{let c=0;for(;;){const h=r[l++];if(h===void 0||(c+=h,h<255))break}let f=0;for(;;){const h=r[l++];if(h===void 0||(f+=h,h<255))break}if(c===6){const h=new Ee(r);h.pos=8*l;const u=Y(h),g=h.readBits(1);if(u===0&&g===1)return"key"}l+=f}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of Km(i,e)){const n=io(i[a.offset]);if(n<je.BLA_W_LP)return"delta";if(n<=je.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Ee(i);if(a.readBits(2)!==2)return null;const n=a.readBits(1);return(a.readBits(1)<<1)+n===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:n,data:o}of np(i))if(n===1){const s=new Ee(o);s.skipBits(4),a=!!s.readBits(1)}else if(n===3||n===6||n===7){if(a)return"key";const s=new Ee(o);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Ot(t),$(!1)}};var ar;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(ar||(ar={}));const rp=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),n=e.readBits(5);if(n>8)return null;const o=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:n,bsmod:o,acmod:s,lfeon:r,bitRateCode:l}},lp=[1,2,3,6],cp=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),n=e.readBits(2);let o=0,s;n===3?(o=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const f=lp[s];let d;return n<3?d=qm[n]/1e3:d=Dm[o]/1e3,{dataRate:Math.round((a+1)*d/(f*16)),substreams:[{fscod:n,fscod2:o,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},up=1683496997,fp=18,dp=10,nr=32,hp=20,mp=8,pp=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],gp=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],vp=[16,16,20,20,0,24,24,0],or=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],bp=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],yp=8,wp=[32e3,44100,48e3,0],kp=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Tp=[512,1024,2048,4096],_p=t=>{const e=Sp(t),i=ot(t);let a=e?Math.ceil(e.frameSize/4)*4:0,n=null;for(;a+4<=t.length&&i.getUint32(a)===up;){const s=xp(t.subarray(a));if(!s)break;n??=s,a+=s.frameSize}if(e)return{frameSize:n?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:n!==null};if(!n?.asset)return null;const{asset:o}=n;return{frameSize:a,sampleRate:o.sampleRate,numberOfChannels:o.numberOfChannels,sampleCount:o.sampleCount,channelLayout:o.channelLayout,pcmResolution:o.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Sp=t=>{if(t.length<fp||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Ee(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==nr-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%mp!==0)return null;const n=e.readBits(14)+1;if(n<96)return null;const o=e.readBits(6);if(o>=or.length)return null;const s=pp[e.readBits(4)];if(s===0)return null;const r=gp[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=vp[e.readBits(3)];if(c===0)return null;const f=l!==0;return{frameSize:n,sampleRate:s,numberOfChannels:or[o]+(f?1:0),sampleCount:a*nr,channelLayout:bp[o]|(f?yp:0),amode:o,lfePresent:f,bitRate:r,pcmResolution:c}},xp=t=>{if(t.length<dp||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Ee(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),n=8+4*a,o=16+4*a;e.skipBits(n);const s=e.readBits(o)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=wp[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const f=e.readBits(3)+1,d=e.readBits(3)+1,h=[];for(let w=0;w<f;w++)h.push(e.readBits(i+1));for(const w of h)e.skipBits(8*hm(w));if(e.readBits(1)){e.skipBits(2);const w=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*w)}for(let w=0;w<d;w++)e.skipBits(o);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const u=e.readBits(5)+1,g=kp[e.readBits(4)],m=e.readBits(8)+1;let v=0;if(e.readBits(1)&&(m>2&&e.skipBits(1),m>6&&e.skipBits(1),e.readBits(1))){const w=e.readBits(2)+1<<2;v=e.readBits(w)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:g,numberOfChannels:m,sampleCount:Math.round(c*g/l),channelLayout:v,pcmResolution:u}}},Cp=t=>{const e=new Uint8Array(hp),i=ot(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,n=new Ee(e);return n.seekToByte(13),n.writeBits(2,Math.max(Tp.indexOf(t.sampleCount),0)),n.writeBits(5,a),n.writeBits(1,t.core?.lfePresent?1:0),n.writeBits(6,t.core?.amode??0),n.writeBits(14,t.core?t.core.frameSize-1:0),n.writeBits(1,0),n.writeBits(3,0),n.writeBits(16,t.channelLayout),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const sr=new Uint8Array(0);class lt{constructor(e,i,a,n,o=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=n,this.sequenceNumber=o,e===sr&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(o))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===sr}get microsecondTimestamp(){return Math.trunc(xt*this.timestamp)}get microsecondDuration(){return Math.trunc(xt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new lt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new lt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ep=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ao=8,rr=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Mp=7,Pp=9,lr=t=>{const e=t.filePos,i=Jp(t,9),a=new Ee(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const f=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let h=null;return s===1?t.filePos-=2:h=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:f,numberOfAacFrames:d,crcCheck:h,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Ap=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Fp=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,n=0;function o(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(o);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(s).then(o,function(r){return i(r),o()})}else n|=1}catch(r){i(r)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});wm();let cr=-1/0,ur=-1/0,Ci=null;typeof FinalizationRegistry<"u"&&(Ci=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-cr>=1e3&&(ke._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),cr=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-ur>=1e3&&(ke._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),ur=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Nt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const no=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Ip=new Set(no);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(xt*this.timestamp)}get microsecondDuration(){return Math.trunc(xt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Ip.has(i.format))throw new TypeError("init.format must be one of: "+no.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const o of i.layout){if(!o||typeof o!="object"||Array.isArray(o))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(o.offset)||o.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(o.stride)||o.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Qn(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??zp(i.format,i.codedWidth,i.codedHeight);let n=i.colorSpace??null;n===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?n={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:n={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?We(e):We(e).slice(),this._layout=a,this.colorSpace=new oo(n)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Qn(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new oo(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Qn(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*xt),duration:Math.trunc((i.duration??0)*xt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,n=0;if("naturalWidth"in e?(a=e.naturalWidth,n=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,n=e.videoHeight):"width"in e&&(a=Number(e.width),n=Number(e.height)),!a||!n)throw new TypeError("Could not determine dimensions.");const o=i.visibleRect??{left:0,top:0,width:a,height:n},s=new OffscreenCanvas(o.width,o.height),r=s.getContext("2d",{alpha:Ns(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-o.left,-o.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:o.width,height:o.height},this.squarePixelWidth=o.width,this.squarePixelHeight=o.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new oo({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Nt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!no.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=qs({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Ci?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return $(this._data!==null),this._data instanceof Nt?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Mi(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?($(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Ci?.unregister(this),this._data instanceof Nt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Mi(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(mr(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Mi(this._data)?this._data.allocationSize(e):pr(this,e).allocationSize}async copyTo(e,i={}){if(!ln(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(mr(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if($(this._data!==null),Mi(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Nt){const c={stack:[],error:void 0,hasError:!1};try{const f=Ap(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(f instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(f.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${f.format}' instead.`);return await f.copyTo(e,i)}catch(f){c.error=f,c.hasError=!0}finally{Fp(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),f=await c.copyTo(e,i);return c.close(),f}const a=pr(this,i);$(this.format);const n=We(e);if(n.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${n.byteLength}`);const o=hn(this.format);let s;if(this._data instanceof Nt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(f=>!(f.data instanceof Uint8Array)||!Number.isInteger(f.stride)||f.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)$(this._layout),$(this._layout.length===o.length),s=this._layout.map((c,f)=>{const d=Math.ceil(this.codedHeight/o[f].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const f=this._data.getContext("2d");$(f);const d=f.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:We(d.data),stride:4*this.codedWidth}]}const r=[],l=o.length;for(let c=0;c<l;c++){const f=a.computedLayouts[c],d=s[c].stride,h=s[c].data;let u=f.sourceTop*d;u+=f.sourceLeftBytes;let g=f.destinationOffset;const m=f.sourceWidthBytes,v={offset:g,stride:f.destinationStride};for(let w=0;w<f.sourceHeight;w++){if(u+m>h.byteLength)throw new Error("Source buffer OOB read.");if(g+m>n.byteLength)throw new Error("Destination buffer OOB write.");const b=h.subarray(u,u+m);n.set(b,g),u+=d,g+=f.destinationStride}r.push(v)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),f=this.format.includes("X")&&i.format.includes("A");if(c||f)for(let d=0;d<a.allocationSize;d+=4){if(c){const h=n[d],u=n[d+2];n[d]=u,n[d+2]=h}f&&(n[d+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if($(this._data!==null),this._data instanceof Nt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let n=0;const o=[];for(const s of e)a.set(s.data,n),o.push(n),n+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:o[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Mi(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?($(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,n,o,s,r,l,c){let f=0,d=0,h=this.displayWidth,u=this.displayHeight,g=0,m=0,v=this.displayWidth,w=this.displayHeight;if(s!==void 0?(f=i,d=a,h=n,u=o,g=s,m=r,l!==void 0?(v=l,w=c):(v=h,w=u)):(g=i,m=a,n!==void 0&&(v=n,w=o)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(f))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(h)||h<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(u)||u<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(g))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(w)||w<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:f,sy:d,sWidth:h,sHeight:u}=this._rotateSourceRegion(f,d,h,u,this.rotation));const b=this.toCanvasImageSource();e.save();const p=g+v/2,T=m+w/2;e.translate(p,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:v/w;e.scale(1/_,_),e.drawImage(b,f,d,h,u,-v/2,-w/2,v,w),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&so(i.crop,"options.");const a=e.canvas.width,n=e.canvas.height,o=i.rotation??this.rotation,[s,r]=o%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=hr(l,s,r));let c,f,d,h;const{sx:u,sy:g,sWidth:m,sHeight:v}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,o);if(i.fit==="fill")c=0,f=0,d=a,h=n;else{const[b,p]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(a/b,n/p):Math.max(a/b,n/p);d=b*T,h=p*T,c=(a-d)/2,f=(n-h)/2}e.save();const w=o%180===0?1:d/h;e.translate(a/2,n/2),e.rotate(o*Math.PI/180),e.scale(1/w,w),e.translate(-a/2,-n/2),e.drawImage(this.toCanvasImageSource(),u,g,m,v,c,f,d,h),e.restore()}_rotateSourceRegion(e,i,a,n,o){return o===90?[e,i,a,n]=[i,this.squarePixelHeight-e-a,n,a]:o===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-n]:o===270&&([e,i,a,n]=[this.squarePixelWidth-i-n,e,n,a]),{sx:e,sy:i,sWidth:a,sHeight:n}}_drawWithFitAndMipmapping(e,i,a){const n=e.width,o=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let f=0;2*n<l&&2*o<c&&(f=Math.floor(Math.log2(Math.min(l/n,c/o))));const d=n*2**f,h=o*2**f,{canvas:u,context:g,isNew:m}=f>0?dr(d,h):{canvas:e,context:i,isNew:a.targetIsFresh};g.imageSmoothingQuality="high",a.fillBlack?(g.fillStyle="black",g.fillRect(0,0,d,h)):m||g.clearRect(0,0,d,h),this.drawWithFit(g,{fit:a.fit,rotation:a.rotation,crop:a.crop}),g.globalCompositeOperation="copy";for(let v=f;v>1;v--){const w=n*2**v,b=o*2**v;g.drawImage(u,0,0,w,b,0,0,w/2,b/2)}g.globalCompositeOperation="source-over",f>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(u,0,0,2*n,2*o,0,0,n,o),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if($(this._data!==null),this._data instanceof Nt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&so(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=rm(this.rotation+(e.rotate??0)),[a,n]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let o=e.crop;o&&(o=hr(o,a,n));const s=o?o.width:a,r=o?o.height:n,l=s/r;let c,f;e.width!==void 0&&e.height===void 0?(c=e.width,f=c/l):e.width===void 0&&e.height!==void 0?(f=e.height,c=f*l):e.width!==void 0&&e.height!==void 0?(c=e.width,f=e.height):(c=s,f=r),c=zs(c,e.roundDimensionsTo??1),f=zs(f,e.roundDimensionsTo??1);const d={width:c,height:f,fit:e.fit??"fill",rotation:i,crop:o??{left:0,top:0,width:a,height:n},alpha:e.alpha??"keep"};for(const m of Bp){let v=m(this,d);if(v instanceof Promise&&(v=await v),v!==null)return v}const{canvas:h,context:u,isNew:g}=dr(d.width,d.height);return this._drawWithFitAndMipmapping(h,u,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:g,fillBlack:d.alpha==="discard"}),new Re(h,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Bp=[],Rp=3,Ei=[];let fr=0;const dr=(t,e)=>{for(const n of Ei)if(n.canvas.width===t&&n.canvas.height===e)return n.age=fr++,{canvas:n.canvas,context:n.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ei.length>=Rp&&Ei.splice(km(Ei,n=>n.age),1),Ei.push({canvas:i,context:a,age:fr++}),{canvas:i,context:a,isNew:!0}};class oo{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(on);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(sn);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const n=Object.keys(rn);if(e.matrix!=null&&!n.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${n.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Mi=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,hr=(t,e,i)=>{const a=Math.min(t.left,e),n=Math.min(t.top,i),o=Math.min(t.width,e-a),s=Math.min(t.height,i-n);return $(o>=0),$(s>=0),{left:a,top:n,width:o,height:s}},so=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},mr=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},zp=(t,e,i)=>{const a=hn(t),n=[];let o=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,f=c*l;n.push({offset:o,stride:c}),o+=f}return n},hn=t=>{const e=(i,a,n,o,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:n,heightDivisor:o},{sampleBytes:a,widthDivisor:n,heightDivisor:o}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Ot(t),$(!1)}},pr=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,n=Op(i,a,t.codedWidth,t.codedHeight,t.format),o=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Lp(n,s,o)},Op=(t,e,i,a,n)=>{const o={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");o.x=e.x||0,o.y=e.y||0,o.width=e.width||0,o.height=e.height||0}if(!Hp(n,o))throw new TypeError("visibleRect alignment is invalid for the format.");return o},Hp=(t,e)=>{if(t===null)return!0;const i=hn(t);for(let a=0;a<i.length;a++){const n=i[a],o=n.widthDivisor,s=n.heightDivisor;if((e.x||0)%o!==0||(e.y||0)%s!==0)return!1}return!0},Lp=(t,e,i)=>{const a=hn(e),n=a.length;if(i!==void 0&&i.length!==n)throw new TypeError(`Layout must have ${n} planes.`);let o=0;const s=[],r=[];for(let l=0;l<n;l++){const c=a[l],f=c.sampleBytes,d=c.widthDivisor,h=c.heightDivisor,u={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(u.sourceTop=Math.ceil(Math.trunc(t.y||0)/h),u.sourceHeight=Math.ceil(Math.trunc(t.height||0)/h),u.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*f,u.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*f,i!==void 0){const v=i[l];if(v.stride<u.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);u.destinationOffset=v.offset,u.destinationStride=v.stride}else u.destinationOffset=o,u.destinationStride=u.sourceWidthBytes;const m=u.destinationStride*u.sourceHeight+u.destinationOffset;if(m>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(m),o=Math.max(o,m);for(let v=0;v<l;v++){const w=s[v];if(!(r[l]<=w.destinationOffset||r[v]<=u.destinationOffset))throw new TypeError("Planes overlap.")}s.push(u)}return{allocationSize:o,computedLayouts:s}},mn=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Pi{constructor(){this._referenceCount=0}}class He{get microsecondTimestamp(){return Math.trunc(xt*this.timestamp)}get microsecondDuration(){return Math.trunc(xt*this.duration)}constructor(e){if(this._closed=!1,Ai(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Pi){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!mn.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!mn.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(Ct(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const n=this.numberOfFrames*this.numberOfChannels*Ct(this.format);if(a.byteLength<n)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}Ci?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!mn.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const n=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(n>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const o=Ct(i),s=Ut(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?n:n*this.numberOfChannels)*o}copyTo(e,i){if(!ln(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!mn.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:n,frameOffset:o}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,f=this.numberOfChannels,d=o??0;if(d>=c)throw new RangeError("frameOffset out of range");const h=n!==void 0?n:c-d;if(h>c-d)throw new RangeError("frameCount out of range");const u=Ct(l),g=Ut(l);if(g&&s>=f)throw new RangeError("planeIndex out of range");if(!g&&s!==0)throw new RangeError("planeIndex out of range");const v=(g?h:h*f)*u;if(e.byteLength<v)throw new RangeError("Destination buffer is too small");const w=ot(e),b=vr(l);if(Ai(this._data))vm()&&f>2&&l!==r?Up(this._data,w,r,l,f,s,d,h):this._data.copyTo(e,{planeIndex:s,frameOffset:d,frameCount:h,format:l});else{const p=gr(r),T=Ct(r),_=Ut(r);let E;if(this._data instanceof Pi){const A=P=>{const L=this._data.getDataPlane(P);if(!(L instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const D=c*T*(_?1:f);if(L.byteLength!==D)throw new TypeError(`Data plane ${P} has invalid size. Expected exactly ${D} bytes, got ${L.byteLength} bytes.`);return L};if(_)if(g)E=A(s),s=0;else{E=new Uint8Array(c*T*f);for(let P=0;P<f;P++){const L=A(P);E.set(L,P*c*T)}}else E=A(0)}else E=this._data;const M=ot(E);for(let A=0;A<h;A++)if(g){const P=A*u;let L;_?L=(s*c+(A+d))*T:L=((A+d)*f+s)*T;const D=p(M,L);b(w,P,D)}else for(let P=0;P<f;P++){const D=(A*f+P)*u;let S;_?S=(P*c+(A+d))*T:S=((A+d)*f+P)*T;const R=p(M,S);b(w,D,R)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Pi){const e=new He(this._data);return e.setTimestamp(this.timestamp),e}else if(Ai(this._data)){const e=new He(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new He({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,n=Ct(this.format);let o;if(Ut(this.format)){const s=a*n;if(o=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(o.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else o=new Uint8Array(a*this.numberOfChannels*n),a>0&&this.copyTo(o,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new He({data:o,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Ci?.unregister(this),this._data instanceof Pi?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Ai(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Pi?this._createAudioDataFromData():Ai(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Ut(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,o=e.sampleRate,s=e.length,r=Math.floor(a/n);let l=0,c=s;for(;c>0;){const f=Math.min(r,c),d=new Float32Array(n*f);for(let h=0;h<n;h++)e.copyFromChannel(d.subarray(h*f,(h+1)*f),h,l);yield new He({format:"f32-planar",sampleRate:o,numberOfFrames:f,numberOfChannels:n,timestamp:i+l/o,data:d}),l+=f,c-=f}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,o=e.sampleRate,s=e.length,r=Math.floor(a/n);let l=0,c=s;const f=[];for(;c>0;){const d=Math.min(r,c),h=new Float32Array(n*d);for(let g=0;g<n;g++)e.copyFromChannel(h.subarray(g*d,(g+1)*d),g,l);const u=new He({format:"f32-planar",sampleRate:o,numberOfFrames:d,numberOfChannels:n,timestamp:i+l/o,data:h});f.push(u),l+=d,c-=d}return f}}const Ct=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Ut=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},gr=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},vr=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Fe((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Fe(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Fe(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},Ai=t=>typeof AudioData<"u"&&t instanceof AudioData,Np=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},Up=(t,e,i,a,n,o,s,r)=>{const l=gr(i),c=vr(a),f=Ct(i),d=Ct(a),h=Ut(i);if(Ut(a))if(h){const g=new ArrayBuffer(r*f),m=ot(g);t.copyTo(g,{planeIndex:o,frameOffset:s,frameCount:r,format:i});for(let v=0;v<r;v++){const w=v*f,b=v*d,p=l(m,w);c(e,b,p)}}else{const g=new ArrayBuffer(r*n*f),m=ot(g);t.copyTo(g,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let v=0;v<r;v++){const w=(v*n+o)*f,b=v*d,p=l(m,w);c(e,b,p)}}else if(h){const g=r*f,m=new ArrayBuffer(g),v=ot(m);for(let w=0;w<n;w++){t.copyTo(m,{planeIndex:w,frameOffset:s,frameCount:r,format:i});for(let b=0;b<r;b++){const p=b*f,T=(b*n+w)*d,_=l(v,p);c(e,T,_)}}}else{const g=new ArrayBuffer(r*n*f),m=ot(g);t.copyTo(g,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let v=0;v<r;v++)for(let w=0;w<n;w++){const b=v*n+w,p=b*f,T=b*d,_=l(m,p);c(e,T,_)}}},qp=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new He({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const br=new Map,yr=new Map,Dp=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!gt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${gt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&so(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");wr(t.codec,t)},wr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&fn(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},kr=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(o,s,r)=>({codec:t.fullCodecString??Pm(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:o,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Im(t.codec)}),n=[];return i.quantizer!==null&&n.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&n.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),$(n.length>0),n},$p=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Ht.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Ht.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Qe.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Tr(t.codec,t)},Tr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&fn(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},_r=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Fm(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Bm(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in Sr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?Sr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,n){const o=Wp[e];let s=null,r=this._bitrateMode??n??"variable";if(this._quantizer!==void 0){if(o)if(this._quantizer<o.min||this._quantizer>o.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${o.min} and ${o.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&o&&!this._preferBitrate&&($(this._quality!==void 0),s=Fe(Math.round(fm(o.worst,o.best,this._quality)),o.min,o.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&($(s!==null&&o),c=Fe((s-o.worst)/(o.best-o.worst),0,1)),l=xr(e,i,a,ro(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:($(this._quality!==void 0),xr(e,i,a,ro(this._quality)))}_toAudioBitrate(e){if(Qe.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=ro(this._quality),n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let o=n*i;return e==="aac"?o=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-o)<Math.abs(r-o)?l:r):e==="opus"||e==="vorbis"?o=Math.max(6e3,o):e==="mp3"&&(o=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-o)<Math.abs(r-o)?l:r)),Math.round(o/1e3)*1e3}}const Sr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Wp={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},ro=t=>.3*Math.exp(2.5538*t),xr=(t,e,i,a)=>{const n=e*i,o=1920*1080,s=3e6,r=Math.pow(n/o,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},Cr=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};$(!1)},jp=new ze("high"),Vp=async(t,e={})=>{const{width:i=1280,height:a=720,quality:n,bitrate:o,...s}=e;if(!gt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(n!==void 0&&!(n instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof ze)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer or a quality.");wr(t,s);const r=pn(n,o)??new ze("medium");let l;try{l=kr({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),f=br.get(c);if(f)return f;const d=(async()=>{for(const{config:u}of l)if(Er.some(g=>g.supports(t,u)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:u,quantizer:g}of l){try{if(!(await VideoEncoder.isConfigSupported(u)).supported)continue}catch{continue}if(!Ns()||await new Promise(async v=>{try{const w=new VideoEncoder({output:()=>{},error:()=>v(!1)});w.configure(u);const b=new Uint8Array(i*a*4),p=new VideoFrame(b,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});w.encode(p,g!==null?Cr(t,g):void 0),p.close(),await w.flush(),v(!0)}catch{v(!1)}}))return!0}return!1})();return br.set(c,d),d},Gp=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:n,bitrate:o,...s}=e;if(!Ht.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(n!==void 0&&!(n instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof ze)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer.");Tr(t,s);const r=pn(n,o)??new ze("medium"),l=_r({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),f=yr.get(c);if(f)return f;const d=(async()=>{if(Mr.some(h=>h.supports(t,l))||Qe.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return yr.set(c,d),d},pn=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},Kp=async(t,e)=>{for(const i of t)if(await Vp(i,e))return i;return null},Xp=async(t,e)=>{for(const i of t)if(await Gp(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Er=[],Mr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Zp=t=>{let a=t,n=4096,o=0,s=12,r=0;for(a<0&&(a=-a,o=128),a+=33,a>8191&&(a=8191);(a&n)!==n&&s>=5;)n>>=1,s--;return r=a>>s-4&15,~(o|s-5<<4|r)&255},Qp=t=>{let i=2048,a=0,n=11,o=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&n>=5;)i>>=1,n--;return o=s>>(n===4?1:n-4)&15,(a|n-4<<4|o)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Fi{constructor(e,i,a,n,o){this.bytes=e,this.view=i,this.offset=a,this.start=n,this.end=o,this.bufferPos=n-a}static tempFromBytes(e){return new Fi(e,ot(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Fi(this.bytes,this.view,this.offset,e,e+i)}}const Yp=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Jp=(t,e)=>{Yp(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class e2{constructor(e){this.mutex=new Is,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let n=this.trackTimestampInfo.get(e);if(n){if(a&&(n.maxTimestampBeforeLastKeyPacket=n.maxTimestamp),n.maxTimestampBeforeLastKeyPacket!==null&&i<n.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${n.maxTimestampBeforeLastKeyPacket}s.`);n.maxTimestamp=Math.max(n.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");n={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,n)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Pr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,t2=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),n=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+n.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class gn{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const o of e.children)o&&this.writeBox(o);const a=this.writer.getPos(),n=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,n),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);$(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const ue=new Uint8Array(8),Ve=new DataView(ue.buffer),Te=t=>[(t%256+256)%256],le=t=>(Ve.setUint16(0,t,!1),[ue[0],ue[1]]),lo=t=>(Ve.setInt16(0,t,!1),[ue[0],ue[1]]),Ar=t=>(Ve.setUint32(0,t,!1),[ue[1],ue[2],ue[3]]),X=t=>(Ve.setUint32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),bt=t=>(Ve.setInt32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),ct=t=>(Ve.setUint32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),i2=t=>(Ve.setInt32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),Fr=t=>(Ve.setInt16(0,2**8*t,!1),[ue[0],ue[1]]),Ye=t=>(Ve.setInt32(0,2**16*t,!1),[ue[0],ue[1],ue[2],ue[3]]),co=t=>(Ve.setInt32(0,2**30*t,!1),[ue[0],ue[1],ue[2],ue[3]]),uo=(t,e)=>{const i=[];let a=t;do{let n=a&127;a>>=7,i.length>0&&(n|=128),i.push(n)}while(a>0||e);return i.reverse()},ge=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,n)=>t.charCodeAt(n));return e&&i.push(0),i},Ir=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},Br=Ir(0),Rr=t=>[Ye(t[0]),Ye(t[1]),co(t[2]),Ye(t[3]),Ye(t[4]),co(t[5]),Ye(t[6]),Ye(t[7]),co(t[8])],re=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),de=(t,e,i,a,n)=>re(t,[Te(e),Ar(i),a??[]],n),a2=t=>t.isQuickTime?re("ftyp",[ge("qt  "),X(512),ge("qt  ")]):t.fragmented?t.cmaf?re("ftyp",[ge("iso5"),X(512),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]):re("ftyp",[ge("iso5"),X(512),ge("iso5"),ge("iso6"),ge("mp41")]):re("ftyp",[ge("isom"),X(512),ge("isom"),t.holdsAvc?ge("avc1"):[],ge("mp41")]),zr=()=>re("styp",[ge("iso5"),X(0),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]),Or=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),de("sidx",1,0,[X(1),X(et),ct(ye(t.minWrittenTimestamp,et)),ct(0),le(0),le(1),X(e&2147483647),X(ye(i,et)),X(0)])},vn=t=>({type:"mdat",largeSize:t}),n2=t=>({type:"free",size:t}),Ii=t=>re("moov",void 0,[o2(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>s2(e,t.creationTime)),t.isFragmented?$2(t.trackDatas):null,ig(t)]),o2=(t,e)=>{const i=Math.max(0,...e.map(s=>ye(bn(s),et)+ye(s.startTimestampOffset??0,et))),a=Math.max(0,...e.map(s=>s.track.id))+1,n=!St(t)||!St(i),o=n?ct:X;return de("mvhd",+n,0,[o(t),o(t),X(et),o(i),Ye(1),Fr(1),Array(10).fill(0),Rr(Br),Array(24).fill(0),X(a)])},bn=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const n=t.samples[a];n.timestamp<e&&(e=n.timestamp),n.timestamp+n.duration>i&&(i=n.timestamp+n.duration)}return e===1/0?0:i-e},s2=(t,e)=>{const i=hg(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return re("trak",void 0,[r2(t,e),a?l2(t,t.startTimestampOffset):null,c2(t,e),i.name!==void 0?re("udta",void 0,[re("name",[...st.encode(i.name)])]):null])},r2=(t,e)=>{const i=ye(bn(t),et)+ye(t.startTimestampOffset??0,et),a=!St(e)||!St(i),n=a?ct:X;let o;if(t.type==="video"){const l=t.track.metadata.rotation;o=Ir(l??0)}else o=Br;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Ot(t);return de("tkhd",+a,s,[n(e),n(e),X(t.track.id),X(0),n(i),Array(8).fill(0),le(0),le(r),Fr(t.type==="audio"?1:0),le(0),Rr(o),Ye(t.type==="video"?t.info.width:0),Ye(t.type==="video"?t.info.height:0)])},l2=(t,e)=>{const i=ye(e,et),a=ye(bn(t),et),n=!St(i)||!St(a),o=n?ct:X,s=n?i2:bt;return re("edts",void 0,[de("elst",n?1:0,0,[X(2),o(i),s(-1),Ye(1),o(a),s(0),Ye(1)])])},c2=(t,e)=>re("mdia",void 0,[u2(t,e),fo(!0,f2[t.type],d2[t.type]),h2(t)]),u2=(t,e)=>{const i=ye(bn(t),t.timescale),a=!St(e)||!St(i),n=a?ct:X;return de("mdhd",+a,0,[n(e),n(e),X(t.timescale),n(i),le($r(t.track.metadata.languageCode??dm)),le(0)])},f2={video:"vide",audio:"soun",subtitle:"text"},d2={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},fo=(t,e,i,a="\0\0\0\0")=>de("hdlr",0,0,[t?ge("mhlr"):X(0),ge(e),ge(a),X(0),X(0),ge(i,!0)]),h2=t=>re("minf",void 0,[m2[t.type](),p2(),b2(t)]),m2={video:()=>de("vmhd",0,1,[le(0),le(0),le(0),le(0)]),audio:()=>de("smhd",0,0,[le(0),le(0)]),subtitle:()=>de("nmhd",0,0)},p2=()=>re("dinf",void 0,[g2()]),g2=()=>de("dref",0,0,[X(1)],[v2()]),v2=()=>de("url ",0,1),b2=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return re("stbl",void 0,[y2(t),O2(t),e?q2(t):null,e?D2(t):null,L2(t),N2(t),U2(t),H2(t)])},y2=t=>{let e;if(t.type==="video")e=w2(sg(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Dr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);$(i),e=C2(i,t)}else t.type==="subtitle"&&(e=R2(cg[t.track.source._codec],t));return $(e),de("stsd",0,0,[X(1)],[e])},w2=(t,e)=>re(t,[Array(6).fill(0),le(1),le(0),le(0),Array(12).fill(0),le(e.info.width),le(e.info.height),X(4718592),X(4718592),X(0),le(1),Te(10),ge("Mediabunny"),Array(21).fill(0),le(e.info.hasAlphaChannel?32:24),lo(65535)],[rg[e.track.source._codec]?.(e)??null,k2(e),lm(e.info.decoderConfig.colorSpace)?T2(e):null]),k2=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:re("pasp",[X(t.info.pixelAspectRatio.num),X(t.info.pixelAspectRatio.den)]),T2=t=>re("colr",[ge(t.muxer.isQuickTime?"nclc":"nclx"),le(on[t.info.decoderConfig.colorSpace.primaries]),le(sn[t.info.decoderConfig.colorSpace.transfer]),le(rn[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Te((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),_2=t=>t.info.decoderConfig&&re("avcC",[...We(t.info.decoderConfig.description)]),S2=t=>t.info.decoderConfig&&re("hvcC",[...We(t.info.decoderConfig.description)]),Hr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),n=Number(i[2]),o=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(o<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?on[e.colorSpace.primaries]:2,f=i[6]?Number(i[6]):e.colorSpace?.transfer?sn[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?rn[e.colorSpace.matrix]:2;return de("vpcC",1,0,[Te(a),Te(n),Te(l),Te(c),Te(f),Te(d),le(0)])},x2=t=>re("av1C",Am(t.info.decoderConfig.codec)),C2=(t,e)=>{let i=0,a,n=16;const o=Qe.includes(e.track.source._codec);if(o){const s=e.track.source._codec,{sampleSize:r}=Lt(s);n=8*r,n>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),le(1),le(i),le(0),X(0),le(e.info.numberOfChannels),le(n),le(0),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0)];else{const s=o?0:-2;a=[Array(6).fill(0),le(1),le(i),le(0),X(0),le(e.info.numberOfChannels),le(Math.min(n,16)),lo(s),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0),o?[X(1),X(n/8),X(e.info.numberOfChannels*n/8)]:[X(0),X(0),X(0)],X(2)]}return re(t,a,[lg(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},ho=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Te(e),...Te(21),...Ar(0),...X(0),...X(0)];if(t.info.decoderConfig.description){const a=We(t.info.decoderConfig.description);i=[...i,...Te(5),...uo(a.byteLength),...a]}return i=[...le(1),...Te(0),...Te(4),...uo(i.length),...i,...Te(6),...Te(1),...Te(2)],i=[...Te(3),...uo(i.length),...i],de("esds",0,0,i)},Et=t=>re("wave",void 0,[E2(t),M2(t),re("\0\0\0\0")]),E2=t=>re("frma",[ge(Dr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),M2=t=>{const{littleEndian:e}=Lt(t.track.source._codec);return re("enda",[le(+e)])},P2=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,n=0,o=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){$(r.byteLength>=18);const l=We(r),c=op(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,n=c.outputGain,o=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return re("dOps",[Te(0),Te(e),le(i),X(a),lo(n),Te(o),...s])},A2=t=>{const e=t.info.decoderConfig?.description;$(e);const i=We(e);return de("dfLa",0,0,[...i.subarray(4)])},ut=t=>{const{littleEndian:e,sampleSize:i}=Lt(t.track.source._codec),a=+e;return de("pcmC",0,0,[Te(a),Te(8*i)])},F2=t=>{$(t.info.primingPacket);const e=rp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Ee(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),re("dac3",[...i])},I2=t=>{$(t.info.primingPacket);const e=cp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),n=new Uint8Array(a),o=new Ee(n);o.writeBits(13,e.dataRate),o.writeBits(3,e.substreams.length-1);for(const s of e.substreams)o.writeBits(2,s.fscod),o.writeBits(5,s.bsid),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(3,s.bsmod),o.writeBits(3,s.acmod),o.writeBits(1,s.lfeon),o.writeBits(3,0),o.writeBits(4,s.numDepSub),s.numDepSub>0?o.writeBits(9,s.chanLoc):o.writeBits(1,0);return re("dec3",[...n])},B2=t=>{$(t.info.primingPacket);const e=_p(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return re("ddts",[...Cp(e)])},R2=(t,e)=>re(t,[Array(6).fill(0),le(1)],[ug[e.track.source._codec](e)]),z2=t=>re("vttC",[...st.encode(t.info.config.description)]),O2=t=>de("stts",0,0,[X(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[X(e.sampleCount),X(e.sampleDelta)])]),H2=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return de("stss",0,0,[X(e.length),e.map(([i])=>X(i+1))])},L2=t=>de("stsc",0,0,[X(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[X(e.firstChunk),X(e.samplesPerChunk),X(1)])]),N2=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Lt(t.track.source._codec);return de("stsz",0,0,[X(e*t.info.numberOfChannels),X(t.samples.reduce((i,a)=>i+ye(a.duration,t.timescale),0))])}return de("stsz",0,0,[X(0),X(t.samples.length),t.samples.map(e=>X(e.size))])},U2=t=>t.finalizedChunks.length>0&&Ze(t.finalizedChunks).offset>=2**32?de("co64",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>ct(e.offset))]):de("stco",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>X(e.offset))]),q2=t=>de("ctts",1,0,[X(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[X(e.sampleCount),bt(e.sampleCompositionTimeOffset)])]),D2=t=>{let e=1/0,i=-1/0,a=1/0,n=-1/0;$(t.compositionTimeOffsetTable.length>0),$(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,ye(r.timestamp,t.timescale)),n=Math.max(n,ye(r.timestamp+r.duration,t.timescale))}const o=Math.max(-e,0);return n>=2**31?null:de("cslg",0,0,[bt(o),bt(e),bt(i),bt(a),bt(n)])},$2=t=>re("mvex",void 0,t.map(W2)),W2=t=>de("trex",0,0,[X(t.track.id),X(1),X(0),X(0),X(0)]),Lr=(t,e)=>re("moof",void 0,[j2(t),...e.map(V2)]),j2=t=>de("mfhd",0,0,[X(t)]),Nr=t=>{let e=0,i=0;const a=0,n=0,o=t.type==="delta";return i|=+o,o?e|=1:e|=2,e<<24|i<<16|a<<8|n},V2=t=>re("traf",void 0,[G2(t),K2(t),X2(t)]),G2=t=>{$(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Nr(i)};return de("tfhd",0,e,[X(t.track.id),X(a.duration),X(a.size),X(a.flags)])},K2=t=>($(t.currentChunk),de("tfdt",1,0,[ct(ye(t.currentChunk.startTimestamp,t.timescale))])),X2=t=>{$(t.currentChunk);const e=t.currentChunk.samples.map(m=>m.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(m=>m.size),a=t.currentChunk.samples.map(Nr),n=t.currentChunk.samples.map(m=>ye(m.timestamp-m.decodeTimestamp,t.timescale)),o=new Set(e),s=new Set(i),r=new Set(a),l=new Set(n),c=r.size===2&&a[0]!==a[1],f=o.size>1,d=s.size>1,h=!c&&r.size>1,u=l.size>1||[...l].some(m=>m!==0);let g=0;return g|=1,g|=4*+c,g|=256*+f,g|=512*+d,g|=1024*+h,g|=2048*+u,de("trun",1,g,[X(t.currentChunk.samples.length),X(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?X(a[0]):[],t.currentChunk.samples.map((m,v)=>[f?X(e[v]):[],d?X(i[v]):[],h?X(a[v]):[],u?bt(n[v]):[]])])},Z2=t=>re("mfra",void 0,[...t.map(Q2),Y2()]),Q2=t=>de("tfra",1,0,[X(t.track.id),X(63),X(t.finalizedChunks.length),t.finalizedChunks.map(i=>[ct(ye(i.samples[0].timestamp,t.timescale)),ct(i.moofOffset),X(i.trafIndex+1),X(1),X(1)])]),Y2=()=>de("mfro",0,0,[X(0)]),J2=()=>re("vtte"),eg=(t,e,i,a,n)=>re("vttc",void 0,[n!==null?re("vsid",[bt(n)]):null,i!==null?re("iden",[...st.encode(i)]):null,e!==null?re("ctim",[...st.encode(t2(e))]):null,a!==null?re("sttg",[...st.encode(a)]):null,re("payl",[...st.encode(t)])]),tg=t=>re("vtta",[...st.encode(t)]),ig=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const n=ng(a);n&&e.push(n)}else if(i==="mdta"){const n=og(a);n&&e.push(n)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&ag(e,t.output._metadataTags);return e.length===0?null:re("udta",void 0,e)},ag=(t,e)=>{for(const{key:i,value:a}of Us(e))switch(i){case"title":t.push(ft("©nam",a));break;case"description":t.push(ft("©des",a));break;case"artist":t.push(ft("©ART",a));break;case"album":t.push(ft("©alb",a));break;case"albumArtist":t.push(ft("albr",a));break;case"genre":t.push(ft("©gen",a));break;case"date":t.push(ft("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(ft("©cmt",a));break;case"lyrics":t.push(ft("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Ot(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(n=>n.type===i)||(typeof a=="string"?t.push(ft(i,a)):a instanceof Uint8Array&&t.push(re(i,Array.from(a))))}},ft=(t,e)=>{const i=st.encode(e);return re(t,[le(i.length),le($r("und")),Array.from(i)])},Ur={"image/jpeg":13,"image/png":14,"image/bmp":27},qr=(t,e)=>{const i=[];for(const{key:a,value:n}of Us(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:Je(n)});break;case"description":i.push({key:e?"description":"©des",value:Je(n)});break;case"artist":i.push({key:e?"artist":"©ART",value:Je(n)});break;case"album":i.push({key:e?"album":"©alb",value:Je(n)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Je(n)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Je(n)});break;case"genre":i.push({key:e?"genre":"©gen",value:Je(n)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Je(n)});break;case"date":i.push({key:e?"date":"©day",value:Je(n.toISOString().slice(0,10))});break;case"images":for(const o of n)o.kind==="coverFront"&&i.push({key:"covr",value:re("data",[X(Ur[o.mimeType]??0),X(0),Array.from(o.data)])});break;case"trackNumber":if(e){const o=t.tracksTotal!==void 0?`${n}/${t.tracksTotal}`:n.toString();i.push({key:"track",value:Je(o)})}else i.push({key:"trkn",value:re("data",[X(0),X(0),le(0),le(n),le(t.tracksTotal??0),le(0)])});break;case"discNumber":e||i.push({key:"disc",value:re("data",[X(0),X(0),le(0),le(n),le(t.discsTotal??0),le(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Ot(a)}if(t.raw)for(const a in t.raw){const n=t.raw[a];n==null||!e&&a.length!==4||i.some(o=>o.key===a)||(typeof n=="string"?i.push({key:a,value:Je(n)}):n instanceof Uint8Array?i.push({key:a,value:re("data",[X(0),X(0),Array.from(n)])}):n instanceof $s&&i.push({key:a,value:re("data",[X(Ur[n.mimeType]??0),X(0),Array.from(n.data)])}))}return i},ng=t=>{const e=qr(t,!1);return e.length===0?null:de("meta",0,0,void 0,[fo(!1,"mdir","","appl"),re("ilst",void 0,e.map(i=>re(i.key,void 0,[i.value])))])},og=t=>{const e=qr(t,!0);return e.length===0?null:re("meta",void 0,[fo(!1,"mdta",""),de("keys",0,0,[X(e.length)],e.map(i=>re("mdta",[...st.encode(i.key)]))),re("ilst",void 0,e.map((i,a)=>{const n=String.fromCharCode(...X(a+1));return re(n,void 0,[i.value])}))])},Je=t=>re("data",[X(1),X(0),...st.encode(t)]),sg=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},rg={avc:_2,hevc:S2,vp8:Hr,vp9:Hr,av1:x2,prores:null},Dr=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},lg=(t,e)=>{switch(t){case"aac":return ho;case"mp3":return ho;case"opus":return P2;case"vorbis":return ho;case"flac":return A2;case"ac3":return F2;case"eac3":return I2;case"dts":return B2}if(e)switch(t){case"pcm-s24":return Et;case"pcm-s24be":return Et;case"pcm-s32":return Et;case"pcm-s32be":return Et;case"pcm-f32":return Et;case"pcm-f32be":return Et;case"pcm-f64":return Et;case"pcm-f64be":return Et}else switch(t){case"pcm-s16":return ut;case"pcm-s16be":return ut;case"pcm-s24":return ut;case"pcm-s24be":return ut;case"pcm-s32":return ut;case"pcm-s32be":return ut;case"pcm-f32":return ut;case"pcm-f32be":return ut;case"pcm-f64":return ut;case"pcm-f64be":return ut}return null},cg={webvtt:"wvtt"},ug={webvtt:z2},$r=t=>{$(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class mo{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){$(!this.started),this.target._start(),this.started=!0}write(e){$(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return $(this.started&&!this.finalized),this.target._flush()}async finalize(){$(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let n=this.trackedWrites.byteLength;for(;n<a;)n*=2;if(n!==this.trackedWrites.byteLength){const o=new Uint8Array(n);o.set(this.trackedWrites,0),this.trackedWrites=o}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class yt extends Yn{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new fg(this,e)}}const po=2**16,go=2**32;class yn extends yt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(po,{maxByteLength:go})}catch{this._buffer=new ArrayBuffer(po),this._supportsResize=!1}else this._buffer=new ArrayBuffer(po);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>go)throw new Error(`ArrayBuffer exceeded maximum size of ${go} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),n=new Uint8Array(a);n.set(this._bytes,0),this._buffer=a,this._bytes=n}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class fg extends yt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class vo{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const et=57600,dg=2082844800,hg=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ye=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class mg extends e2{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new yn,this.auxWriter=new mo(this.auxTarget,!1),this.auxBoxWriter=new gn(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Rs(),this.creationTime=Math.floor(Date.now()/1e3)+dg,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Zr,this.isCmaf=i instanceof Xr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Xr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof yn),this.boxWriter=new gn(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof yn?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),n=new mo(a,!0);n.start(),this.initWriter=n,this.initBoxWriter=new gn(n)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if($(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(a2({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:n,start:o}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(n,o)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||($(this.writer),$(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=vn(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return Ep({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const n=this.trackDatas.find(u=>u.track===e);if(n)return n;Xs(a,e.source._codec),$(a),$(a.decoderConfig);const o={...a.decoderConfig};$(o.codedWidth!==void 0),$(o.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!o.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const u=jm(i.data);if(!u)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");o.description=Vm(u),s=!0}else if(e.source._codec==="hevc"&&!o.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const u=Zm(i.data);if(!u)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");o.description=ap(u),s=!0}const r=gm(1/(e.metadata.frameRate??et),1e6).den,l=o.displayAspectWidth,c=o.displayAspectHeight,f=l===void 0||c===void 0?{num:1,den:1}:qs({num:l*o.codedHeight,den:c*o.codedWidth}),d=o.codec==="ap4h"||o.codec==="ap4x",h={muxer:this,track:e,type:"video",info:{width:o.codedWidth,height:o.codedHeight,pixelAspectRatio:f,decoderConfig:o,requiresAnnexBTransformation:s,hasAlphaChannel:d},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(h),this.trackDatas.sort((u,g)=>u.track.id-g.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),h}getAudioTrackData(e,i,a){const n=this.trackDatas.find(l=>l.track===e);if(n)return n;Zs(a,e.source._codec),$(a),$(a.decoderConfig);const o={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!o.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=lr(Fi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=cn[l.samplingFrequencyIndex],f=Jn[l.channelConfiguration];if(c===void 0||f===void 0)throw new Error("Invalid ADTS frame header.");o.description=Ws({objectType:l.objectType,sampleRate:c,numberOfChannels:f}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:o,requiresPcmTransformation:!this.isFragmented&&Qe.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:o.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(o=>o.track===e);if(a)return a;Um(i),$(i),$(i.config);const n={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(n),this.trackDatas.sort((o,s)=>o.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),n}async addEncodedVideoPacket(e,i,a){const n=await this.mutex.acquire();try{const o=this.getVideoTrackData(e,i,a);let s=i.data;if(o.info.requiresAnnexBTransformation){const l=[...xi(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Wm(l,4)}this.validateTimestamp(o.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(o,s,i.timestamp,i.duration,i.type);await this.registerSample(o,r)}finally{n()}}async addEncodedAudioPacket(e,i,a){const n=await this.mutex.acquire();try{const o=this.getAudioTrackData(e,i,a);let s=i.data;if(o.info.requiresAdtsStripping){const f=lr(Fi.tempFromBytes(s));if(!f)throw new Error("Expected ADTS frame, didn't get one.");const d=f.crcCheck===null?Mp:Pp;s=s.subarray(d)}this.validateTimestamp(o.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(o.info.requiresPcmTransformation){const d=Lt(o.info.decoderConfig.codec).sampleSize*o.info.numberOfChannels;if(l=s.byteLength/d/o.info.sampleRate,o.info.expectedNextPcmPacketTimestamp!==null){const h=r-o.info.expectedNextPcmPacketTimestamp;if(h<.01)r=o.info.expectedNextPcmPacketTimestamp;else{const u=await this.padWithSilence(o,o.info.expectedNextPcmPacketTimestamp,h);r=o.info.expectedNextPcmPacketTimestamp+u}}o.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(o,s,r,l,i.type);await this.registerSample(o,c)}finally{n()}}async padWithSilence(e,i,a){const n=ye(a,e.timescale);if(a=n/e.timescale,n>0){const{sampleSize:o,silentValue:s}=Lt(e.info.decoderConfig.codec),r=n*e.info.numberOfChannels,l=new Uint8Array(o*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const n=await this.mutex.acquire();try{const o=this.getSubtitleTrackData(e,a);this.validateTimestamp(o.track,i.timestamp,!0),e.source._codec==="webvtt"&&(o.cueQueue.push(i),await this.processWebVTTCues(o,i.timestamp))}finally{n()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)$(c.timestamp<=i),$(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const n=[...a].sort((c,f)=>c-f),o=n[0],s=n[1]??o;if(i<s)break;if(e.lastCueEndTimestamp<o){this.auxWriter.seek(0);const c=J2();this.auxBoxWriter.writeBox(c);const f=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,f,e.lastCueEndTimestamp,o-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=o}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const f=e.cueQueue[c];if(f.timestamp>=s)break;Pr.lastIndex=0;const d=Pr.test(f.text),h=f.timestamp+f.duration;let u=e.cueToSourceId.get(f);if(u===void 0&&s<h&&(u=e.nextSourceId++,e.cueToSourceId.set(f,u)),f.notes){const m=tg(f.notes);this.auxBoxWriter.writeBox(m)}const g=eg(f.text,d?o:null,f.identifier??null,f.settings??null,u??null);this.auxBoxWriter.writeBox(g),h===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,o,s-o,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,n,o){return{timestamp:a,decodeTimestamp:a,duration:n,data:i,size:i.byteLength,type:o,timescaleUnitsToNextSample:ye(n,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let n=0;for(let o=0;o<e.timestampProcessingQueue.length;o++){const s=e.timestampProcessingQueue[o],r=ye(s.duration,e.timescale);n+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:n,sampleDelta:1});else{const o=Ze(e.timeToSampleTable);o.sampleCount+=n}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(n=>n.timestamp).sort((n,o)=>n-o);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let n=0;n<e.timestampProcessingQueue.length;n++){const o=e.timestampProcessingQueue[n];o.decodeTimestamp=a[n];const s=ye(o.timestamp-o.decodeTimestamp,e.timescale),r=ye(o.duration,e.timescale);if(e.lastTimescaleUnits!==null){$(e.lastSample);const l=ye(o.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if($(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let f=Ze(e.timeToSampleTable);if($(f),f.sampleCount===1){f.sampleDelta=c;const h=e.timeToSampleTable[e.timeToSampleTable.length-2];h&&h.sampleDelta===c&&(h.sampleCount++,e.timeToSampleTable.pop(),f=h)}else f.sampleDelta!==c&&(f.sampleCount--,e.timeToSampleTable.push(f={sampleCount:1,sampleDelta:c}));f.sampleDelta===r?f.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const d=Ze(e.compositionTimeOffsetTable);$(d),d.sampleCompositionTimeOffset===s?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=ye(o.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=o}if(e.timestampProcessingQueue.length=0,$(e.lastSample),$(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){$(i.type==="key");const n=ye(i.timestamp,e.timescale,!1),o=Math.round(n-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=o}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const n=e.track.metadata.maximumPacketCount;if($(n!==void 0),e.samples.length>n)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${n}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const n=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const o=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});n>=this.minimumFragmentDuration&&o&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=n>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),$(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if($(!this.isFragmented),$(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,n)=>a+ye(n.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ze(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)$(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if($(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const o of this.trackDatas){if(!e&&o.sampleQueue.length===0&&!o.closed)break e;o.sampleQueue.length>0&&o.sampleQueue[0].timestamp<a&&(i=o,a=o.sampleQueue[0].timestamp)}if(!i)break;const n=i.sampleQueue.shift();await this.addSampleToTrack(i,n)}}async finalizeFragment(e=!this.isCmaf){if($(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const u=this.initBoxWriter??this.boxWriter;$(u),this.formatOptions.onMoov&&u.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const g=Ii(this);if(u.writeBox(g),this.formatOptions.onMoov){const{data:m,start:v}=u.writer.stopTrackingWrites();this.formatOptions.onMoov(m,v)}if(this.isCmaf){$(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new gn(this.writer);const m=this.boxWriter.measureBox(zr()),v=this.boxWriter.measureBox(Or(this,0));this.segmentHeaderSize=m+v,this.writer.seek(this.segmentHeaderSize)}}$(this.writer),$(this.boxWriter);const i=this.trackDatas.filter(u=>u.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,n=Lr(a,i),o=this.writer.getPos(),s=o+this.boxWriter.measureBox(n);let r=s+ao,l=1/0;for(let u=0;u<i.length;u++){const g=i[u];g.currentChunk.offset=r,g.currentChunk.moofOffset=o,g.currentChunk.trafIndex=u;for(const m of g.currentChunk.samples)r+=m.size;l=Math.min(l,g.currentChunk.startTimestamp)}const c=r-s,f=c>=2**32;if(f)for(const u of i)u.currentChunk.offset+=rr-ao;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=Lr(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:u,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(u,g,l)}$(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const h=vn(f);h.size=c,this.boxWriter.writeBox(h),this.writer.seek(s+(f?rr:ao));for(const u of i)for(const g of u.currentChunk.samples)this.writer.write(g.data),g.data=null;if(this.formatOptions.onMdat){const{data:u,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(u,g)}for(const u of i)u.finalizedChunks.push(u.currentChunk),this.finalizedChunks.push(u.currentChunk),u.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){$(this.writer),$(this.boxWriter),this.ensureOneEnabledTrack();const e=Ii(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;$(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=vn(!0),this.boxWriter.writeBox(this.mdat);for(const n of this.trackDatas){for(const o of n.sampleQueue)await this.addSampleToTrack(n,o);n.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){$(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;$(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(n=>n.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(n=>n.type===e);if(i.length===0)continue;if(!i.some(n=>n.track.metadata.disposition?.default!==!1)){const n=i[0];n.track.metadata.disposition={...n.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){$(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const n=i.samples[a];n.timestamp-=i.startTimestampOffset,n.decodeTimestamp-=i.startTimestampOffset}if($(this.writer),$(this.boxWriter),this.fastStart==="in-memory"){this.mdat=vn(!1);let i;for(let n=0;n<2;n++){const o=Ii(this),s=this.boxWriter.measureBox(o);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)$(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=Ii(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,o)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const n of this.finalizedChunks)for(const o of n.samples)$(o.data),this.writer.write(o.data),o.data=null;if(this.formatOptions.onMdat){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,o)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(zr()),this.boxWriter.writeBox(Or(this,i))}else{const i=this.writer.getPos(),a=Z2(this.trackDatas);this.boxWriter.writeBox(a);const n=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(n)}else{$(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);$(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:o,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,s)}const n=Ii(this);if(this.fastStart==="reserve"){$(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);const o=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(n2(o))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);if(this.formatOptions.onMoov){const{data:o,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class pg{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){$(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,n)=>a[n*e]:e===1&&i===4?this.channelMixer=(a,n,o)=>a[n*e]*+(o<2):e===1&&i===6?this.channelMixer=(a,n,o)=>a[n*e]*+(o===2):e===2&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return .5*(a[o]+a[o+1])}:e===2&&i===4?this.channelMixer=(a,n,o)=>a[n*e+o]*+(o<2):e===2&&i===6?this.channelMixer=(a,n,o)=>a[n*e+o]*+(o<2):e===4&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return .25*(a[o]+a[o+1]+a[o+2]+a[o+3])}:e===4&&i===2?this.channelMixer=(a,n,o)=>{const s=n*e;return .5*(a[s+o]+a[s+o+2])}:e===4&&i===6?this.channelMixer=(a,n,o)=>{const s=n*e;return o<2?a[s+o]:o===2||o===3?0:a[s+o-2]}:e===6&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return Math.SQRT1_2*(a[o]+a[o+1])+a[o+2]+.5*(a[o+4]+a[o+5])}:e===6&&i===2?this.channelMixer=(a,n,o)=>{const s=n*e;return a[s+o]+Math.SQRT1_2*(a[s+2]+a[s+o+4])}:e===6&&i===4?this.channelMixer=(a,n,o)=>{const s=n*e;return o<2?a[s+o]+Math.SQRT1_2*a[s+2]:a[s+o+2]}:this.channelMixer=(a,n,o)=>o<e?a[n*e+o]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),$(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),n=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(n,{planeIndex:0,format:"f32"});const o=e.timestamp-this.startTime,s=o+e.duration,r=Math.floor((o-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const f=c-this.bufferStartFrame;$(f<this.bufferSizeInFrames);const u=(c/this.targetSampleRate-o)*this.sourceSampleRate,g=Math.floor(u),m=Math.ceil(u),v=u-g;for(let w=0;w<this.targetNumberOfChannels;w++){let b=0,p=0;g>=0&&g<e.numberOfFrames&&(b=this.channelMixer(n,g,w)),m>=0&&m<e.numberOfFrames&&(p=this.channelMixer(n,m,w));const T=b+v*(p-b),_=f*this.targetNumberOfChannels+w;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=f:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,f)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;$(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new He({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var gg=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},vg=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,n=0;function o(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(o);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(s).then(o,function(r){return i(r),o()})}else n|=1}catch(r){i(r)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class bo{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class Wr extends bo{constructor(e){if(super(),this._connectedTrack=null,!gt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${gt.join(", ")}.`);this._codec=e}}const jr=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class bg{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Ls,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const n=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const o=this.encodingConfig,s=o.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(o.transform?.width!==void 0||o.transform?.height!==void 0||o.transform?.rotate!==void 0||o.transform?.crop!==void 0||o.transform?.force===!0||r&&s!=="passThrough"){let d=o.transform?.width,h=o.transform?.height,u=o.transform?.fit??"fill";r&&s!=="passThrough"&&($(this.outputWidth),$(this.outputHeight),$(s!=="deny"),d=this.outputWidth,h=this.outputHeight,u=s);const g=await e.transform({width:d,height:h,roundDimensionsTo:2,crop:o.transform?.crop,rotate:o.transform?.rotate,fit:u,alpha:o.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=g.displayWidth,this.outputHeight=g.displayHeight),i&&e.close(),e=g,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const f=o.transform?.frameRate;if(f!==void 0){const d=e.timestamp+e.duration,h=Hs(e.timestamp,f);if(this.frameRateLastSample!==null)if(h<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(h,a);e===n&&(e=e.clone(),i=!0),e.setTimestamp(h),e.setDuration(1/f),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=h,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let n;if(a.transform?.process){let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);const s=[];try{for(const r of o)r instanceof Re?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Re(r)):s.push(new Re(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of o)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}n=s}else n=[e];try{for(const o of n){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(o),this.encoderInitialized||await this.ensureEncoderPromise),$(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(o.timestamp/s),l={...this.defaultEncodeOptions,...o.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(o),this.customEncoder){this.customEncoderQueueSize++;const f=o.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(f,c)).catch(h=>this.setError(h)).finally(()=>{this.customEncoderQueueSize--,f.close()});this.customEncoderQueueSize>=4&&await d}else{$(this.encoder);const f=o.toVideoFrame(),d=Bs(this.preciseTimings,f.timestamp,u=>u.microsecondTimestamp),h=d!==-1?this.preciseTimings[d]:null;if(h&&h.microsecondTimestamp===f.timestamp?(h.timestamp!==o.timestamp&&(h.timestampIsValid=!1),h.duration!==o.duration&&(h.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:f.timestamp,timestamp:o.timestamp,duration:o.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!f.format&&!f.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(f,c)}finally{f.close()}}else{this.splitter||(this.splitter=new yg);const{colorFrame:g,alphaFrame:m}=await this.splitter.split(f);this.alphaFrameQueue.push(m);try{this.encoder.encode(g,c)}finally{g.close()}}else try{this.encoder.encode(f,c)}finally{f.close()}this.encoder.encodeQueueSize>=4&&await new Promise(u=>this.encoder.addEventListener("dequeue",u,{once:!0}))}await this.lastMuxerPromise}}finally{for(const o of n)o!==e&&o.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;$(this.frameRateLastSample);const n=Math.round((e-this.frameRateLastTimestamp)*a);for(let o=1;o<n;o++){const s={stack:[],error:void 0,hasError:!1};try{const r=gg(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+o/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{vg(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=pn(this.encodingConfig.quality,this.encodingConfig.bitrate);$(i!==void 0);const a=kr({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let n=null,o;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),o=Er.find(f=>f.supports(this.encodingConfig.codec,l)),o){n=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){n=r;break}}catch{}}if(!n){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:f})=>f!==null?`quantizer ${f}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=n.config;if(n.quantizer!==null&&(this.defaultEncodeOptions=Cr(this.encodingConfig.codec,n.quantizer)),o)this.customEncoder=new o,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof lt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");jr(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,f=0;const d=(u,g,m)=>{const v={};if(g){const _=new Uint8Array(g.byteLength);g.copyTo(_),v.alpha=_}let w=lt.fromEncodedChunk(u,v);const b=Bs(this.preciseTimings,u.timestamp,_=>_.microsecondTimestamp),p=b!==-1?this.preciseTimings[b]:null;let T=null;this.emittedEncoderPackets===0&&w.type==="delta"&&m?.decoderConfig&&(T=sp(this.encodingConfig.codec,m.decoderConfig,w.data)),(p&&p.microsecondTimestamp===u.timestamp||T!==null)&&(w=w.clone({timestamp:p?.timestampIsValid?p.timestamp:void 0,duration:p?.durationIsValid?p.duration:void 0,type:T??void 0})),jr(this.source._connectedTrack,w),this.encodingConfig.onEncodedPacket?.(w,m),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,w,m).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},h=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(u,g)=>{if(!this.alphaEncoder){d(u,null,g);return}const m=this.alphaFrameQueue.shift();$(m!==void 0),m?(this.alphaEncoder.encode(m,{...this.defaultEncodeOptions,keyFrame:u.type==="key"}),f++,m.close(),r.push({chunk:u,meta:g})):f===0?d(u,null,g):(l.push(c+f),r.push({chunk:u,meta:g}))},error:u=>{u.stack=h,this.setError(u)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const u=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(g,m)=>{f--;const v=r.shift();for($(v!==void 0),d(v.chunk,g,v.meta),c++;l.length>0&&l[0]===c;){l.shift();const w=r.shift();$(w!==void 0),d(w.chunk,null,w.meta)}},error:g=>{g.stack=u,this.setError(g)}}),this.alphaEncoder.configure(s)}}$(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=Hs(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Tm(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let yo=null;class yg{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!yo){const n=new Blob([`(${wg.toString()})()`],{type:"application/javascript"});yo=URL.createObjectURL(n)}this.worker=new Worker(yo),this.worker.addEventListener("message",n=>{const o=n.data,s=this.pendingRequests.get(o.id);s&&(this.pendingRequests.delete(o.id),"error"in o?s.reject(new Error(o.error)):s.resolve({colorFrame:o.colorFrame,alphaFrame:o.alphaFrame}))}),this.worker.addEventListener("error",n=>{const o=new Error(n.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(o);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=Rs();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const wg=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",o=>{const{id:s,sourceFrame:r}=o.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async o=>{const s=o.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=o.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await o.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,o);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return n(t,s,o);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(o,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,f=l*c,d=Math.ceil(l/2),h=Math.ceil(c/2),u=f+d*h*2,g=new Uint8Array(u);for(let b=0,p=3;b<f;b++,p+=4)g[b]=o[p];g.fill(128,f);const m=new VideoFrame(o,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),v={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[g.buffer]},w=new VideoFrame(g,v);return{colorFrame:m,alphaFrame:w}},n=(o,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,f=s.includes("P10"),d=s.includes("P12"),h=f||d?2:1;let u,g;s.startsWith("I420")?(u=Math.ceil(l/2),g=Math.ceil(c/2)):s.startsWith("I422")?(u=Math.ceil(l/2),g=c):(u=l,g=c);const m=l*c,v=u*g,w=m*h,b=v*h,p=m*h,T=w+b*2,_=s.replace("A",""),E=Math.ceil(l/2),M=Math.ceil(c/2),A=E*M,P=A*h,L=p+2*P,D=new Uint8Array(L),S=T;D.set(o.subarray(S,S+p),0);const R=p,k=f?512:d?2048:128;h===1?D.fill(k,R):new Uint16Array(D.buffer,R,2*A).fill(k);const N=f?"I420P10":d?"I420P12":"I420",G=new VideoFrame(o.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),O={format:N,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[D.buffer]},ae=new VideoFrame(D,O);return{colorFrame:G,alphaFrame:ae}}};class kg extends Wr{constructor(e){Dp(e),super(e.codec),this._encoder=new bg(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Vr extends bo{constructor(e){if(super(),this._connectedTrack=null,!Ht.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Ht.join(", ")}.`);this._codec=e}}class Tg{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new Ls,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new pg({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async o=>{await this.processAndEncode(o,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&Np(e.format)!==a.transform.sampleFormat){const n=qp(e,a.transform.sampleFormat);i&&e.close(),e=n,i=!0}if(a.transform?.process)try{let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);try{for(const o of n)if(!(o instanceof He))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const o of n)await this.encodeSample(o,!0)}finally{for(const o of n)o instanceof He&&o.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),$(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),n=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=n;else{const o=a-this.lastEndSampleIndex;if(o>=64){const s=new He({data:new Float32Array(o*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:o,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),n=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(o=>this.setError(o)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await n,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{$(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(n=>this.encoder.addEventListener("dequeue",n,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){$(this.outputSampleSize),$(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:n,sampleRate:o,timestamp:s}=e,r=2048,l=[];for(let h=0;h<n;h+=r){const u=Math.min(r,e.numberOfFrames-h),g=u*a*this.outputSampleSize,m=new ArrayBuffer(g),v=new DataView(m);l.push({frameCount:u,view:v})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),f=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let h=0;h<a;h++){e.copyTo(f,{planeIndex:h,format:"f32-planar"});for(let u=0;u<l.length;u++){const{frameCount:g,view:m}=l[u];for(let v=0;v<g;v++)this.writeOutputValue(m,(v*a+h)*this.outputSampleSize,f[u*r+v])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:o}};for(let h=0;h<l.length;h++){const{frameCount:u,view:g}=l[h],m=g.buffer,v=h*r,w=new lt(new Uint8Array(m),"key",s+v/o,u/o);this.encodingConfig.onEncodedPacket?.(w,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,w,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,n=pn(this.encodingConfig.quality,this.encodingConfig.bitrate),o=_r({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:n});this.encodingConfig.onEncoderConfig?.(o);const s=Mr.find(r=>r.supports(this.encodingConfig.codec,o));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=o,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof lt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(Qe.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(o)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${o.codec}, ${o.bitrate} bps, ${o.numberOfChannels} channels, ${o.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,f)=>{if(this.encodingConfig.codec==="aac"&&f?.decoderConfig){let h=!1;if(!f.decoderConfig.description||f.decoderConfig.description.byteLength<2?h=!0:h=Em(We(f.decoderConfig.description)).objectType===0,h){const u=Number(Ze(o.codec.split(".")));f.decoderConfig.description=Ws({objectType:u,numberOfChannels:f.decoderConfig.numberOfChannels,sampleRate:f.decoderConfig.sampleRate})}}let d=lt.fromEncodedChunk(c);d=d.clone({timestamp:Os(d.timestamp,o.sampleRate),duration:c.duration!=null?Os(d.duration,o.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,f),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,f).catch(h=>{this.setError(h)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(o)}$(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:n}=Lt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(o,s,r)=>o.setUint8(s,Fe((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(o,s,r)=>{o.setInt8(s,Fe(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(o,s,r)=>{const l=Fe(Math.floor(r*32767),-32768,32767);o.setUint8(s,Zp(l))}:i==="alaw"?this.writeOutputValue=(o,s,r)=>{const l=Fe(Math.floor(r*32767),-32768,32767);o.setUint8(s,Qp(l))}:$(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(o,s,r)=>o.setUint16(s,Fe((r+1)*32767.5,0,65535),n):i==="signed"?this.writeOutputValue=(o,s,r)=>o.setInt16(s,Fe(Math.round(r*32767),-32768,32767),n):$(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(o,s,r)=>Vn(o,s,Fe((r+1)*83886075e-1,0,16777215),n):i==="signed"?this.writeOutputValue=(o,s,r)=>um(o,s,Fe(Math.round(r*8388607),-8388608,8388607),n):$(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(o,s,r)=>o.setUint32(s,Fe((r+1)*21474836475e-1,0,4294967295),n):i==="signed"?this.writeOutputValue=(o,s,r)=>o.setInt32(s,Fe(Math.round(r*2147483647),-2147483648,2147483647),n):i==="float"?this.writeOutputValue=(o,s,r)=>o.setFloat32(s,r,n):$(!1);break;case 8:i==="float"?this.writeOutputValue=(o,s,r)=>o.setFloat64(s,r,n):$(!1);break;default:Ot(a),$(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class _g extends Vr{constructor(e){$p(e),super(e.codec),this._accumulatedTime=0,this._encoder=new Tg(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=He._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Sg extends bo{constructor(e){if(super(),this._connectedTrack=null,!_i.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${_i.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Gr{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>gt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Ht.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>_i.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class wo extends Gr{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new mg(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Kr extends wo{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...gt,...eo,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",..._i]}_codecUnsupportedHint(e){return new Zr().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Xr extends wo{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...gt,...eo,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",..._i]}}class Zr extends wo{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...gt,...Ht]}_codecUnsupportedHint(e){return new Kr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Qr=["video","audio","subtitle"];class Bi{constructor(e,i,a,n,o){this.id=e,this.output=i,this.type=a,this.source=n,this.metadata=o}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Bi))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Ds(this.metadata.group),a=Ds(e.metadata.group);for(const n of i)if(this.type!==e.type&&a.some(r=>n===r)||a.some(r=>n._pairedGroups.has(r)))return!0;return!1}}class xg extends Bi{constructor(e,i,a,n){super(e,i,"video",a,n)}}class Cg extends Bi{constructor(e,i,a,n){super(e,i,"audio",a,n)}}class Eg extends Bi{constructor(e,i,a,n){super(e,i,"subtitle",a,n)}}class Ri{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Ri))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const ko=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!pm(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Cm(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Ri)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Ri))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Mg extends Yn{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Ri,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Is,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Gr))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof yt||e.target instanceof vo))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof yt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof yt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof yt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){$(this._target instanceof vo);const i=this._target.getTarget(e),a=n=>{if(!(n instanceof yt))throw new TypeError("getTarget must return a Target.");return n};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){$(this._target instanceof vo);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if($(this._initTarget!==null),this._initTarget instanceof yt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof yt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=n=>(this.state==="canceled"?n._close():this._rememberTarget(n),this._emit("target",{target:n,request:e,isRoot:!0}),this._rootTarget=n,n);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new mo(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof Wr))throw new TypeError("source must be a VideoSource.");if(ko(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Xs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof lt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new xg(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof Vr))throw new TypeError("source must be an AudioSource.");if(ko(i),i.decoderConfig!==void 0&&Zs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof lt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Cg(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof Sg))throw new TypeError("source must be a SubtitleSource.");ko(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Eg(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(xm(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),n=i[e.type].max;if(a===n)throw new Error(n===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${n} ${e.type} track${n===1?"":"s"}.`);const o=i.total.max;if(this.tracks.length===o)throw new Error(`${this.format._name} does not support more than ${o} tracks${o===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of Qr){const n=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),o=e[a].min;if(n<o)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of Qr){const n=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),o=e[a].min;if(n<o)throw new Error(o===e[a].max?`${this.format._name} requires exactly ${o} ${a} track${o===1?"":"s"}.`:`${this.format._name} requires at least ${o} ${a} track${o===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ke._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const n=this.tracks.map(o=>o.source._start());await Promise.all(n)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ke._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ke._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ke._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Pg={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Ag=new Set(["window","buddy","dancer"]);function Yr(t){return!Ag.has(t.typeId)}const Fg=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function Ig(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!Fg.has(i))return a}));return JSON.stringify(e,null,2)}function Bg(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>Rg(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=Pg[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Yr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(Yr)}))}:i.data})),e}function Rg(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function zg(t,e){const i=new Blob([e],{type:"application/json"});Zt(t,i)}function Zt(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Mt=1280,Pt=1920,Og=30,Jr=8,Hg=16,el=.97,To=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function tl(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:tt(t*a),height:tt(e*a)}}function Lg(t,e){const i=t/Math.max(e,1);let a="16:9",n=1/0;for(const o of To){const s=Math.abs(i-o.rw/o.rh);s<n&&(n=s,a=o.id)}return a}function il(t,e,i=1280){if(t<2||e<2)return tl(16,9,i);const a=Math.max(t,e),n=i/a;return{width:tt(t*n),height:tt(e*n)}}function Ng(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function al(t){return Math.min(Og,Math.max(12,Math.round(t||30)))}function nl(t){return Math.min(32,Math.max(1,t||4))}function ol(t,e,i){const a=I(t||12,Jr,Hg),n=e*i/(Mt*720);return Math.min(20,Math.max(Jr,Math.round(a*Math.max(1,n))))}const Ug=Pt,qg=Pt;function _o(t,e=!1){const i=e?Ug:qg;return Fo(t.exportSettings.width,t.exportSettings.height,i,i)}async function Dg(t,e,i){const{width:a,height:n,format:o,quality:s,filename:r}=e.exportSettings,l=o==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,tt(a),tt(n),l,o==="jpg"?Math.max(s,el):s);Zt(`${r}.${o==="jpg"?"jpg":"png"}`,c)}async function $g(t,e,i){const{fps:a,duration:n,filename:o,quality:s}=e.exportSettings,{width:r,height:l}=_o(e,!1),c=$n(e),f=Math.max(1,Math.round(n*a)),d=new sm,h=d.folder(o)??d,u=document.createElement("canvas");for(let m=0;m<f;m++){const v=c+m/a;i?.(m,f),t.paintFrame(e,v,r,l,u);const w=await Xg(u,"image/png",s);h.file(`${o}_${String(m).padStart(5,"0")}.png`,await w.arrayBuffer()),await So()}const g=await d.generateAsync({type:"blob"});Zt(`${o}_sequence.zip`,g)}async function sl(t,e,i,a=!1){const n=await rl(t,e,Gg(),i,a);Zt(`${e.exportSettings.filename}.webm`,n)}async function Wg(t,e,i,a=!1){try{return await jg(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(n){const o=Kg();if(o){const r=await rl(t,e,o,i,a);return Zt(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await sl(t,e,i,a),`MP4 not available (${n instanceof Error?n.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function jg(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const n=al(e.exportSettings.fps),o=nl(e.exportSettings.duration),{width:s,height:r}=_o(e,a),l=new ze({bitrate:ol(e.exportSettings.bitrate,s,r)*1e6}),c=new Kr({fastStart:"in-memory"}),d=await Kp(["avc","hevc"].filter(T=>c.getSupportedVideoCodecs().includes(T)),{width:s,height:r,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const h=new yn,u=new Mg({format:c,target:h}),g=new kg({codec:d,quality:l,keyFrameInterval:1});u.addVideoTrack(g,{frameRate:n});const m=$n(e),v=await Vg(u,c,e,o,m);t.resetTemporal();const w=document.createElement("canvas");await u.start();try{v&&await v.audioSource.add(v.buffer);const T=Math.max(1,Math.round(o*n)),_=1/n,E=e.exportSettings.loopClose!==!1;let M=null;for(let A=0;A<T;A++){const P=m+Un(A/n,o,e.playback.mode,1,!0);i?.(A,T),t.paintFrame(e,P,s,r,w),A===0&&E?M=cl(w):ll(w,M,A,T,E);const L=new Re(w,{timestamp:A*_,duration:_});await g.add(L,{keyFrame:A%n===0}),L.close(),await So()}await u.finalize()}catch(T){try{await u.cancel()}catch{}throw T}const b=h.buffer;if(!b||b.byteLength<32)throw new Error("MP4 mux produced an empty file");const p=b.slice(0);return Zt(`${e.exportSettings.filename}.mp4`,new Blob([p],{type:"video/mp4"})),!!v}async function Vg(t,e,i,a,n=0){const o=await dh(vi(i));if(!o||o.length<32||o.duration<=0)return null;const s=i.exportSettings.loopClose!==!1;let r;try{r=fh(o,a,s,n)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),c=r.sampleRate>=46e3?48e3:44100,f=e.getSupportedAudioCodecs(),d=["aac","mp3","opus"].filter(g=>f.includes(g)),h=await Xp(d.length?d:f,{numberOfChannels:l,sampleRate:c});if(!h)return null;const u=new _g({codec:h,quality:jp,transform:{numberOfChannels:l,sampleRate:c}});return t.addAudioTrack(u),{audioSource:u,buffer:r}}async function rl(t,e,i,a,n=!1){const o=al(e.exportSettings.fps),s=nl(e.exportSettings.duration),{width:r,height:l}=_o(e,n),c=document.createElement("canvas");c.width=r,c.height=l;const f=c.getContext("2d");if(!f)throw new Error("No 2d context");const d=c.captureStream(0),h=d.getVideoTracks()[0],u=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:ol(e.exportSettings.bitrate,r,l)*1e6}),g=[];u.ondataavailable=T=>{T.data.size&&g.push(T.data)},t.resetTemporal(),u.start(200);const m=$n(e),v=Math.max(1,Math.round(s*o)),w=document.createElement("canvas"),b=e.exportSettings.loopClose!==!1;let p=null;for(let T=0;T<v;T++){const _=m+Un(T/o,s,e.playback.mode,1,!0);a?.(T,v),t.paintFrame(e,_,r,l,w),T===0&&b?p=cl(w):ll(w,p,T,v,b),f.drawImage(w,0,0,r,l),h.requestFrame?.(),await So()}if(await new Promise(T=>{u.onstop=()=>T(),u.stop()}),d.getTracks().forEach(T=>T.stop()),!g.length)throw new Error("recorder produced no data");return new Blob(g,{type:i})}function Gg(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function Kg(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function ll(t,e,i,a,n){if(!n||!e||i===0)return;const o=Ng(i,a);if(o<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=o,s.drawImage(e,0,0,t.width,t.height),s.restore())}function cl(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function So(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function Xg(t,e,i){return new Promise((a,n)=>{t.toBlob(o=>{o?a(o):n(new Error("frame capture failed"))},e,i)})}async function Zg(t,e,i,a,n=!1){const o=e.exportSettings.format;return o==="mp4"?Wg(t,e,a,n):o==="webm"?sl(t,e,a,n):o==="sequence"?$g(t,e,a):Dg(t,e,i)}const Qg=768,Yg="sana",ul=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function Jg(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),n=Qg/Math.max(i,a);return{width:tt(i*n,256),height:tt(a*n,256)}}function e1(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,n=i>>8&255,o=i&255;let s=ul[0],r=1e9;for(const l of ul){const c=(a-l.r)**2+(n-l.g)**2+(o-l.b)**2;c<r&&(r=c,s=l)}return s.name}function t1(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",n="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${n}`;const o=e.map(e1).filter((s,r,l)=>l.indexOf(s)===r).slice(0,4);return`${a}, palette of ${o.join(", ")}, ${n}`}function i1(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function a1(t,e,i,a=4){const n=[];for(let o=0;o<3;o++)for(let s=0;s<3;s++){const r=Math.min(e-1,Math.floor((s+.5)/3*e)),c=(Math.min(i-1,Math.floor((o+.5)/3*i))*e+r)*4,f=t[c],d=t[c+1],h=t[c+2],u=i1(f,d,h);n.some(m=>(m.r-f)**2+(m.g-d)**2+(m.b-h)**2<1400)||n.push({hex:u,r:f,g:d,b:h})}return n.slice(0,a).map(o=>o.hex)}function n1(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return a1(a.data,e.width,e.height)}function o1(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function s1(t,e,i,a,n=Yg){const o=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(n)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(o)}?${s}`}async function r1(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const n=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!n.ok)throw n.status===429||n.status>=500?new Error(`busy:${n.status}`):new Error(`Generation failed (${n.status}). Try a shorter prompt.`);const o=await n.arrayBuffer(),s=new Uint8Array(o),r=n.headers.get("content-type")||"";if(!o1(s,r))throw new Error("Generation returned no image. Try again.");const l=r.startsWith("image/")?r.split(";")[0]:"image/jpeg";return new Blob([o],{type:l})}catch(n){throw n instanceof Error&&n.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):n}finally{clearTimeout(a)}}async function l1(t){const{width:e,height:i}=Jg(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let n=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await r1(s1(a,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(r){n=r instanceof Error?r:new Error(String(r))}}const o=n?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":n?.message;throw new Error(o||"Generation failed. Try a shorter prompt.")}function xe(t){const e=F.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function zi(t){if(!t)return;const e=F.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Le(t,e,i=!0){F.setProject(a=>({...a,layers:a.layers.map(n=>n.id===t?e(n):n)}),i)}function wt(t,e=!0){F.setProject(i=>{const a=e?i.layers.map(n=>n.id===F.state.ui.selectedLayerId?{...n,sourceId:t.id}:n):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),F.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function c1(t){const e=F.project.sources.filter(s=>s.kind==="audio");for(const s of e)As(s);if(F.setProject(s=>{const r=s.sources.filter(f=>f.kind!=="audio"),l=s.layers.map(f=>e.some(d=>d.id===f.sourceId)?{...f,sourceId:r.find(d=>d.kind!=="audio")?.id??null}:f),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),en(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",n=t.beats?.length?`${t.beats.length} hits`:"",o=[i,a,n].filter(Boolean).join(" · ");F.patchUi({selectedSourceId:t.id,status:o?`beat-sync · ${t.name} · ${o}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function wn(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&F.patchUi({status:`reading ${i.name}…`});const n=await Qh(i);if(n.kind==="audio"){c1(n);continue}if(e){const o=F.state.ui.selectedSourceId;F.setProject(s=>({...s,sources:s.sources.map(r=>r.id===o?{...n,id:r.id}:r)})),F.patchUi({status:`replaced ${i.name}`})}else wt(n,!0)}catch(a){F.patchUi({status:a instanceof Error?a.message:"import failed"})}}function u1(){F.setProject(e=>{const i=e.sources.find(n=>n.kind!=="audio")?.id??null,a=gs(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=F.project.layers.at(-1);F.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function f1(t){F.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Be("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:Be("fx")}));const n=e.layers.findIndex(s=>s.id===t),o=[...e.layers];return o.splice(n+1,0,a),{...e,layers:o}})}function d1(t){F.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function xo(t){const e=xe(F.project);if(!e)return;const i=ps(t);Le(e.id,a=>({...a,effects:[...a.effects,i]})),F.patchUi({selectedEffectId:i.id})}function h1(t,e){Le(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function fl(t,e,i){Le(t,a=>{const n=a.effects.findIndex(l=>l.id===e),o=n+i;if(n<0||o<0||o>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(n,1);return s.splice(o,0,r),{...a,effects:s}})}function m1(t,e){Le(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function Oi(t,e,i,a,n=!0){Le(t,o=>({...o,effects:o.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),n)}function Qt(t,e=!1){const i=F.state.ui;(t==="all"||t==="selected")&&F.setProject(n=>({...n,seed:n.seed+1+(Date.now()&255)>>>0}),!1),F.setProject(n=>{let s=ds(n,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.includeCritters&&(s=fs(s)),t==="all"&&i.includeIdol&&(s=Td(s)),s});const a=F.project.layers[0]?.effects.map(n=>n.typeId).join(" · ");F.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${F.project.seed}`})}function p1(){const t=xe(F.project);if(!t)return;const e=t.effects.find(o=>o.typeId==="critters"),i=1+(F.project.seed+Date.now())%9998;if(e){Oi(t.id,e.id,"seed",i),F.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}xo("critters");const a=xe(F.project),n=zi(a);a&&n?.typeId==="critters"&&Oi(a.id,n.id,"seed",i),F.patchUi({status:"stamped floaters"})}function g1(){const t=xe(F.project);if(!t)return;const e=t.effects.find(o=>o.typeId==="dancer"),i=1+(F.project.seed+Date.now()+17)%9998;if(e){Oi(t.id,e.id,"seed",i),F.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}xo("dancer");const a=xe(F.project),n=zi(a);a&&n?.typeId==="dancer"&&Oi(a.id,n.id,"seed",i),F.patchUi({status:"stamped idol"})}function v1(){F.setProject(t=>Ed({...t,seed:t.seed+1+(Date.now()&255)>>>0})),F.patchUi({status:"new floater and idol seeds"})}async function b1(t){const e=F.project,{width:i,height:a}=Fo(e.exportSettings.width||1280,e.exportSettings.height||720,Pt,Pt);try{const n=await t.capture(e,e.playback.time,i,a,"image/png",el),o=await Ms(n,`print_${Date.now()}.png`);wt(o,!0),F.patchUi({status:"printed the live frame as a new still"})}catch(n){F.patchUi({status:n instanceof Error?n.message:"print failed"})}}function dl(t){F.setProject(e=>({...e,seed:e.seed+t>>>0}))}function hl(){zg(`${F.project.name||"phosphene"}.phos.json`,Ig(F.project)),F.patchUi({status:"project downloaded"})}async function y1(t){const e=await t.text(),i=Bg(e);F.replace(i),F.patchUi({status:"project loaded — re-drop media if needed"})}function w1(){const t=prompt("Preset name",`look ${F.project.presets.length+1}`);if(!t)return;const e=On(F.project,t);F.setProject(i=>({...i,presets:[...i.presets,e]}))}function Co(t){const e=F.project.presets.find(i=>i.id===t);e&&(F.setProject(i=>pd(i,e)),F.patchUi({status:`preset ${e.name}`}))}function k1(){const t=gd(F.project.presets,F.project.seed+Date.now());if(!t){F.patchUi({status:"no presets saved"});return}Co(t.id)}function T1(t){const e=F.project.presets.find(i=>i.id===t);e&&F.setProject(i=>({...i,presets:[...i.presets,vd(e)]}))}function _1(t){F.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function ml(){const t=F.state.ui,e=xe(F.project),i=zi(e),a=t.selectedParam?.paramId;if(!e||!i||!a){F.patchUi({status:"select a numeric parameter first"});return}const n=i.params[a];if(typeof n!="number"){F.patchUi({status:"keyframes are numeric"});return}const o={id:Be("kf"),time:F.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:n,easing:"smooth"};F.setProject(s=>({...s,keyframes:[...s.keyframes,o]})),F.patchUi({status:`key ${a} @ ${o.time.toFixed(2)}s`})}function S1(){F.setProject(t=>({...t,keyframes:[]}))}async function x1(){const t=F.project.sources.find(i=>i.id===F.state.ui.selectedSourceId);if(!t)return;const e=await em(t);e&&wt(e,!0)}function pl(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of F.project.sources)As(e);F.replace(vs()),F.patchUi({status:"new piece",prompt:"",generating:!1})}}async function C1(){if(F.state.ui.generating)return;const t=F.state.ui.prompt.trim();if(!t){F.patchUi({status:"type a prompt first"});return}F.patchUi({generating:!0,status:"generating new image…"});try{const e=F.project.sources.find(c=>c.id===F.state.ui.selectedSourceId),i=F.state.ui.useSourceForGen;let a=[];const n=e?.frozenFrame||e?.bitmap||e?.video||null;i&&n&&(a=n1(n));const o=t1(t,a,i&&a.length>0),s=F.project.seed+Date.now()>>>0,r=await l1({prompt:o,seed:s,width:F.project.exportSettings.width,height:F.project.exportSettings.height,onStatus:c=>F.patchUi({generating:!0,status:c},!1)}),l=await Ms(r,`gen_${s}.jpg`);wt(l,!0),F.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){F.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let kn=!1,Hi=null;function E1(t,e){Hi=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny ${F.project.cutEdit?.enabled?"acid":""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tunnel / spiral / helix / bloom / prism plus Gyre, Well, Hall, Drift, Braid, and Sway are 3D fly-throughs — stamps travel in depth and around the frame so a big screen feels like you are moving through the picture. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Field treats the stamps as samples of a deforming 2D space — packed texture, streams, contours, then huge negative space — not a flock. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Chain can optionally wear Animal Chain parts (dragon, dog, ferret, caterpillar, zebra) on the same path. Hunt is a documentary camera on top of any move: watch wide, notice a stamp, snap in, follow, return. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
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
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",P1(t),F.subscribe(()=>{kn||Eo(t)}),Eo(t)}async function M1(t=!1){if(Hi&&!F.state.ui.exporting){F.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),F.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await Zg(Hi,F.project,F.project.playback.time,(i,a)=>{F.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);F.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){F.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function P1(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,n=i.dataset.id;if(a==="save"&&hl(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&pl(),a==="imagine"&&C1(),a==="seed-"&&dl(-1),a==="seed+"&&dl(1),a==="rand-all"&&Qt("all"),a==="rand-wacky"&&Qt("all",!0),a==="cut-edit"){const o=!F.project.cutEdit?.enabled;F.setProject(s=>({...s,cutEdit:{enabled:o,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),F.patchUi({status:o?F.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&v1(),a==="reprint"&&Hi&&b1(Hi),a==="rand-sel"&&Qt("selected"),a==="rand-param"){const o=i.dataset.paramId,s=xe(F.project),r=zi(s);o&&s&&r&&F.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:o}},!1),Qt("param")}if(a==="help"&&F.patchUi({helpOpen:!F.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&x1(),a==="gen"){const o=i.dataset.kind??"plasma",s=Yt(),r=i.dataset.kit??(Ae(o)?Ft(s?.collageKit):void 0),l=i.dataset.move??(Ae(o)?jo(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,f=Gt(o,r,l,O1(s,c));wt(f,!0),F.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}${f.collageKitB?` · ${f.collageKitB}`:""}`:f.collageKit?`place · ${o} · ${f.collageKit}`:o==="critters"?"floaters on this layer":`place · ${o}`})}if(a==="mash"){const o=i.dataset.kit??"love",s=Yt();if(s){const r=s.collageKitB===o||s.collageKit===o?void 0:o;ie(l=>gl({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=Gt("wallpaper","sailor","rush",{kitB:o});wt(r,!0),F.patchUi({status:`mash · sailor · ${o}`})}}if(a==="wash"){const o=i.dataset.hex;o&&(ie(s=>({...s,colorA:o}),`wash · ${o}`)||(wt(Gt("wallpaper","sailor","rush",{wash:o}),!0),F.patchUi({status:`wash · ${o}`})))}if(a==="color-pack"){const o=gi(i.dataset.pack),s=Yt();if(s){const r=Ft(s.collageKit),l=Vt(r,o),c=(s.colorA??"").toLowerCase(),f=l.some(d=>d.toLowerCase()===c);ie(d=>({...d,collageColorPack:o,colorA:f?d.colorA:l[0],colorB:ht(r,o)}),`color · ${In[o]}`)}else{const r=Gt("wallpaper","sailor","rush",{colorPack:o});wt(r,!0),F.patchUi({status:`color · ${In[o]}`})}}if(a==="night"){const s=!Yt()?.collageNight;ie(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(wt(Gt("wallpaper","sailor","rush",{night:!0}),!0),F.patchUi({status:"night wash"}))}if(a==="camera"){const o=ti(i.dataset.camera);ie(s=>({...s,collageCamera:o}),o==="hunt"?"camera · documentary search":"camera · fixed")}if(a==="camera-feel"){const o=Ia(i.dataset.feel);ie(s=>({...s,collageCameraFeel:o}),`camera feel · ${o}`)}if(a==="hunt-select"){const o=Ba(i.dataset.select);ie(s=>({...s,collageHuntSelect:o}),`subject select · ${o}`)}if(a==="hunt-focus"){const s=!Yt()?.collageHuntFocus;ie(r=>({...r,collageHuntFocus:s}),s?"manual focus on":"manual focus off")}if(a==="chain-animal"){const o=li(i.dataset.animal);ie(s=>gl({...s,collageChainAnimal:o}),o==="off"?"animal chain off":`animal chain · ${o}`)}if(a==="stamp-critters"&&p1(),a==="stamp-idol"&&g1(),a==="add-layer"&&u1(),a==="dup-layer"&&n&&f1(n),a==="del-layer"&&n&&d1(n),a==="sel-layer"&&n&&F.patchUi({selectedLayerId:n,selectedEffectId:F.project.layers.find(o=>o.id===n)?.effects[0]?.id??null}),a==="sel-fx"&&n&&F.patchUi({selectedEffectId:n}),a==="sel-src"&&n&&F.patchUi({selectedSourceId:n}),a==="bypass"&&n){const o=xe(F.project);o&&m1(o.id,n)}if(a==="fx-up"&&n){const o=xe(F.project);o&&fl(o.id,n,-1)}if(a==="fx-dn"&&n){const o=xe(F.project);o&&fl(o.id,n,1)}if(a==="fx-del"&&n){const o=xe(F.project);o&&h1(o.id,n)}if(a==="key"&&ml(),a==="key-clear"&&S1(),a==="pst-save"&&w1(),a==="pst-rand"&&k1(),a==="pst-load"&&n&&Co(n),a==="pst-dup"&&n&&T1(n),a==="pst-del"&&n&&_1(n),a==="export"&&M1(),a==="clip"){const o=Math.max(1,Number(i.dataset.secs||4));F.setProject(s=>({...s,duration:Math.max(s.duration,o),exportSettings:{...s.exportSettings,duration:o,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),F.patchUi({status:`${o}s clip ready — hit Export`})}if(a==="exp-aspect"&&n){const o=To.find(s=>s.id===n);if(o){const s=Math.max(F.project.exportSettings.width,F.project.exportSettings.height,Mt),r=tl(o.rw,o.rh,Math.min(Pt,Math.max(Mt,s)));F.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const o=Number(i.dataset.long||Mt),s=F.project,r=il(s.exportSettings.width,s.exportSettings.height,o);F.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:o>=Pt?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const o=F.project,s=xe(o),r=o.sources.find(d=>d.id===(s?.sourceId??o.sources[0]?.id)),l=r?.kind==="audio"?o.sources.find(d=>d.kind!=="audio"):r,c=Math.max(o.exportSettings.width,o.exportSettings.height,Mt),f=il(l?.width??1280,l?.height??720,Math.min(Pt,c));F.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:f.width,height:f.height}}))}if(a==="play"&&(en(),F.setProject(o=>({...o,playback:{...o.playback,playing:!o.playback.playing}}))),a==="use-src"&&n){if(F.project.sources.find(r=>r.id===n)?.kind==="audio")return;const s=xe(F.project);s&&Le(s.id,r=>({...r,sourceId:n}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(y1(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(wn(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(wn(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(wn(i.files,!1),i.value=""),i.id==="quality"&&F.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&xo(i.value),i.value=""),i.id==="blend"){const a=xe(F.project);a&&Le(a.id,n=>({...n,blendMode:i.value}))}if(i.id==="mask-type"){const a=xe(F.project);a&&Le(a.id,n=>({...n,mask:{...n.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&Co(i.value),i.id==="exp-format"&&F.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&F.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&F.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&F.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&F.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=F.project;if(i.id==="gen-prompt"&&F.patchUi({prompt:i.value},!1),i.id==="gen-src"&&F.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&F.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&F.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&F.patchUi({includeEffects:i.checked}),i.id==="seed"&&F.setProject(n=>({...n,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&F.setProject(n=>({...n,randomAmount:Number(i.value)}),!1),i.id==="speed"&&F.setProject(n=>({...n,playback:{...n.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&F.setProject(n=>({...n,playback:{...n.playback,loop:i.checked}}),!1),i.id==="loop-close"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&F.setProject(n=>({...n,playback:{...n.playback,freeze:i.checked}}),!1),i.id==="time"&&F.setProject(n=>({...n,playback:{...n.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const n=xe(a);n&&Le(n.id,o=>({...o,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const n=xe(a);n&&Le(n.id,o=>({...o,enabled:i.checked}),!1)}for(const n of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${n}`&&F.setProject(o=>({...o,globalFeedback:{...o.globalFeedback,[n]:Number(i.value)}}),!1),i.id===`lfb-${n}`){const o=xe(a);o&&Le(o.id,s=>({...s,feedback:{...s.feedback,[n]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const n=xe(a),o=i.id.slice(3);n&&o in n.transform&&Le(n.id,s=>({...s,transform:{...s.transform,[o]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){kn=!0;const n=A1(i.dataset.fxType||"",i.dataset.param),o=F1(i,n);Oi(i.dataset.layer,i.dataset.fx,i.dataset.param,o,!1),F.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&ie(n=>({...n,collageScale:fi(Number(i.value))}),void 0,!0),i.id==="collage-density"&&ie(n=>({...n,collageDensity:di(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&ie(n=>({...n,collagePace:ai(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&ie(n=>({...n,collageChainTravel:ni(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&ie(n=>({...n,collageChainMorph:oi(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&ie(n=>({...n,collageChainVary:si(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&ie(n=>({...n,collageChainSmooth:ri(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&ie(n=>({...n,collageSpringStrength:fa(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&ie(n=>({...n,collageSpringDamp:da(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&ie(n=>({...n,collageSpringDist:ha(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&ie(n=>({...n,collageSpringElast:ma(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&ie(n=>({...n,collageSpringBreak:pa(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&ie(n=>({...n,collageFlowScale:ga(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&ie(n=>({...n,collageFlowTurb:va(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&ie(n=>({...n,collageFlowEvolve:ba(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&ie(n=>({...n,collageFlowForce:ya(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&ie(n=>({...n,collageFlowDepth:wa(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&ie(n=>({...n,collageBoidCohere:ka(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&ie(n=>({...n,collageBoidSep:Ta(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&ie(n=>({...n,collageBoidAlign:_a(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&ie(n=>({...n,collageBoidRadius:Sa(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&ie(n=>({...n,collageBoidSpeed:xa(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&ie(n=>({...n,collagePoleCount:Ca(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&ie(n=>({...n,collagePoleAttract:Ea(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&ie(n=>({...n,collagePoleRepel:Ma(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&ie(n=>({...n,collagePoleSpeed:Pa(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&ie(n=>({...n,collagePoleFalloff:Aa(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&ie(n=>({...n,collagePoleSwitch:Fa(Number(i.value))}),void 0,!0),i.id==="collage-field-strength"&&ie(n=>({...n,collageFieldStrength:qi(Number(i.value))}),void 0,!0),i.id==="collage-field-scale"&&ie(n=>({...n,collageFieldScale:Di(Number(i.value))}),void 0,!0),i.id==="collage-field-evolve"&&ie(n=>({...n,collageFieldEvolve:$i(Number(i.value))}),void 0,!0),i.id==="collage-field-density"&&ie(n=>({...n,collageFieldDensity:Wi(Number(i.value))}),void 0,!0),i.id==="collage-field-density-scale"&&ie(n=>({...n,collageFieldDensityScale:ji(Number(i.value))}),void 0,!0),i.id==="collage-field-density-evolve"&&ie(n=>({...n,collageFieldDensityEvolve:Vi(Number(i.value))}),void 0,!0),i.id==="collage-field-flow"&&ie(n=>({...n,collageFieldFlow:Gi(Number(i.value))}),void 0,!0),i.id==="collage-field-curl"&&ie(n=>({...n,collageFieldCurl:Ki(Number(i.value))}),void 0,!0),i.id==="collage-field-flow-scale"&&ie(n=>({...n,collageFieldFlowScale:Xi(Number(i.value))}),void 0,!0),i.id==="collage-field-attract"&&ie(n=>({...n,collageFieldAttract:Zi(Number(i.value))}),void 0,!0),i.id==="collage-field-repel"&&ie(n=>({...n,collageFieldRepel:Qi(Number(i.value))}),void 0,!0),i.id==="collage-field-radius"&&ie(n=>({...n,collageFieldRadius:Yi(Number(i.value))}),void 0,!0),i.id==="collage-field-inertia"&&ie(n=>({...n,collageFieldInertia:Ji(Number(i.value))}),void 0,!0),i.id==="collage-field-damp"&&ie(n=>({...n,collageFieldDamp:ea(Number(i.value))}),void 0,!0),i.id==="collage-field-max-v"&&ie(n=>({...n,collageFieldMaxV:ta(Number(i.value))}),void 0,!0),i.id==="collage-field-scale-amp"&&ie(n=>({...n,collageFieldScaleAmp:ia(Number(i.value))}),void 0,!0),i.id==="collage-field-min-scale"&&ie(n=>({...n,collageFieldMinScale:aa(Number(i.value))}),void 0,!0),i.id==="collage-field-max-scale"&&ie(n=>({...n,collageFieldMaxScale:na(Number(i.value))}),void 0,!0),i.id==="collage-field-perturb"&&ie(n=>({...n,collageFieldPerturb:oa(Number(i.value))}),void 0,!0),i.id==="collage-field-warp"&&ie(n=>({...n,collageFieldWarp:sa(Number(i.value))}),void 0,!0),i.id==="collage-field-sparsity"&&ie(n=>({...n,collageFieldSparsity:ra(Number(i.value))}),void 0,!0),i.id==="collage-field-contrast"&&ie(n=>({...n,collageFieldContrast:la(Number(i.value))}),void 0,!0),i.id==="collage-field-motion"&&ie(n=>({...n,collageFieldMotion:ca(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-min"&&ie(n=>({...n,collageHuntWideMin:Ra(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-max"&&ie(n=>({...n,collageHuntWideMax:za(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-min"&&ie(n=>({...n,collageHuntFollowMin:Oa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-max"&&ie(n=>({...n,collageHuntFollowMax:Ha(Number(i.value))}),void 0,!0),i.id==="collage-hunt-snap"&&ie(n=>({...n,collageHuntSnap:La(Number(i.value))}),void 0,!0),i.id==="collage-hunt-zoom"&&ie(n=>({...n,collageHuntZoom:Na(Number(i.value))}),void 0,!0),i.id==="collage-hunt-tight"&&ie(n=>({...n,collageHuntTight:Ua(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-min"&&ie(n=>({...n,collageHuntReactMin:qa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-max"&&ie(n=>({...n,collageHuntReactMax:Da(Number(i.value))}),void 0,!0),i.id==="collage-hunt-precision"&&ie(n=>({...n,collageHuntPrecision:$a(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-speed"&&ie(n=>({...n,collageHuntFocusSpeed:Wa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-error"&&ie(n=>({...n,collageHuntFocusError:ja(Number(i.value))}),void 0,!0),i.id==="collage-hunt-variation"&&ie(n=>({...n,collageHuntVariation:Va(Number(i.value))}),void 0,!0),i.id==="exp-q"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&F.setProject(n=>({...n,exportSettings:{...n.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{kn&&(kn=!1,Eo(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),F.state.ui.dropActive||F.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&F.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),F.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&wn(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),en(),F.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Qt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Qt("all",!0),(e.key==="k"||e.key==="K")&&ml(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),pl()),e.key==="?"&&F.patchUi({helpOpen:!F.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),hl()))})}function A1(t,e){return at(t)?.params.find(i=>i.id===e)}function F1(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Eo(t){const{project:e,ui:i}=F.state,a=t.querySelector("#proj-name"),n=t.querySelector("#seed"),o=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),n&&document.activeElement!==n&&(n.value=String(e.seed)),o&&(o.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const f=t.querySelector("#inc-fx");f&&(f.checked=i.includeEffects);const d=t.querySelector("#inc-fx-stack");d&&(d.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(h=>{h.classList.toggle("acid",!!e.cutEdit?.enabled)}),I1(t.querySelector("#rail")),B1(t.querySelector("#stack")),z1(t.querySelector("#transport"))}function I1(t){const e=F.project,i=F.state.ui,a=e.sources.find(n=>n.id===i.selectedSourceId&&Ae(n.generator))??e.sources.find(n=>Ae(n.generator));t.innerHTML=`
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
      ${Tt.map(n=>`<button class="btn tiny ${a?.collageKitB===n?"acid":""}" data-act="mash" data-kit="${n}">${hc(n)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${pi.map(n=>`<button class="btn tiny ${gi(a?.collageColorPack)===n?"acid":""}" data-act="color-pack" data-pack="${n}">${In[n]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${Vt(Ft(a?.collageKit),a?.collageColorPack).map(n=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===n.toLowerCase()?"on":""}" data-act="wash" data-hex="${n}" style="background:${n}" title="${n}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${fi(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${fi(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${di(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${di(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${ai(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${ai(a?.collagePace).toFixed(2)}" />
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
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${ni(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${ni(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${oi(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${oi(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${si(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${si(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${ri(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${ri(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Animal Chain</div>
    <div class="row">
      ${Ga.map(n=>`<button class="btn tiny ${li(a?.collageChainAnimal)===n?"acid":""}" data-act="chain-animal" data-animal="${n}">${Go[n]}</button>`).join("")}
    </div>`:""}
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
    </div>
    ${a?.collageMove==="field"?`<div class="sec">Emergent current</div>
    ${te("collage-field-strength","Field Strength",qi(a.collageFieldStrength),.2,2.2,.05)}
    ${te("collage-field-scale","Field Scale",Di(a.collageFieldScale),.28,2.4,.05)}
    ${te("collage-field-evolve","Field Evolution",$i(a.collageFieldEvolve),.08,2.2,.05)}
    ${te("collage-field-density","Density Strength",Wi(a.collageFieldDensity),0,2.2,.05)}
    ${te("collage-field-density-scale","Density Scale",ji(a.collageFieldDensityScale),.28,2.4,.05)}
    ${te("collage-field-density-evolve","Density Evolution",Vi(a.collageFieldDensityEvolve),.08,2.2,.05)}
    ${te("collage-field-flow","Flow Strength",Gi(a.collageFieldFlow),0,2.2,.05)}
    ${te("collage-field-curl","Flow Curl",Ki(a.collageFieldCurl),0,2.2,.05)}
    ${te("collage-field-flow-scale","Flow Scale",Xi(a.collageFieldFlowScale),.28,2.4,.05)}
    ${te("collage-field-attract","Attraction",Zi(a.collageFieldAttract),0,2.2,.05)}
    ${te("collage-field-repel","Repulsion",Qi(a.collageFieldRepel),0,2.4,.05)}
    ${te("collage-field-radius","Interaction Radius",Yi(a.collageFieldRadius),.02,.22,.005)}
    ${te("collage-field-inertia","Inertia",Ji(a.collageFieldInertia),.25,2.2,.05)}
    ${te("collage-field-damp","Damping",ea(a.collageFieldDamp),.08,1,.02)}
    ${te("collage-field-max-v","Max Velocity",ta(a.collageFieldMaxV),.25,2.2,.05)}
    ${te("collage-field-scale-amp","Scale Field",ia(a.collageFieldScaleAmp),0,2.2,.05)}
    ${te("collage-field-min-scale","Min Scale",aa(a.collageFieldMinScale),.12,1,.02)}
    ${te("collage-field-max-scale","Max Scale",na(a.collageFieldMaxScale),.6,3.2,.05)}
    ${te("collage-field-perturb","Local Perturbation",oa(a.collageFieldPerturb),0,2,.05)}
    ${te("collage-field-warp","Large-Scale Warp",sa(a.collageFieldWarp),0,2.2,.05)}
    ${te("collage-field-sparsity","Sparsity",ra(a.collageFieldSparsity),0,2,.05)}
    ${te("collage-field-contrast","Density Contrast",la(a.collageFieldContrast),0,2.2,.05)}
    ${te("collage-field-motion","Global Motion",ca(a.collageFieldMotion),0,2,.05)}`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${te("collage-spring-strength","Spring Strength",fa(a.collageSpringStrength),.2,2.2,.05)}
    ${te("collage-spring-damp","Damping",da(a.collageSpringDamp),.08,1,.02)}
    ${te("collage-spring-dist","Connection Distance",ha(a.collageSpringDist),.12,.72,.02)}
    ${te("collage-spring-elast","Elasticity",ma(a.collageSpringElast),.2,2.2,.05)}
    ${te("collage-spring-break","Break / Reconnect",pa(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${te("collage-flow-scale","Field Scale",ga(a.collageFlowScale),.28,2.4,.05)}
    ${te("collage-flow-turb","Turbulence",va(a.collageFlowTurb),0,2,.05)}
    ${te("collage-flow-evolve","Evolution Speed",ba(a.collageFlowEvolve),.08,2.2,.05)}
    ${te("collage-flow-force","Force",ya(a.collageFlowForce),.2,2.2,.05)}
    ${te("collage-flow-depth","Depth Influence",wa(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${te("collage-boid-cohere","Cohesion",ka(a.collageBoidCohere),.1,2.2,.05)}
    ${te("collage-boid-sep","Separation",Ta(a.collageBoidSep),.15,2.4,.05)}
    ${te("collage-boid-align","Alignment",_a(a.collageBoidAlign),.1,2.2,.05)}
    ${te("collage-boid-radius","Perception Radius",Sa(a.collageBoidRadius),.08,.55,.01)}
    ${te("collage-boid-speed","Speed",xa(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${te("collage-pole-count","Pole Count",Ca(a.collagePoleCount),1,5,1)}
    ${te("collage-pole-attract","Attraction",Ea(a.collagePoleAttract),.15,2.2,.05)}
    ${te("collage-pole-repel","Repulsion",Ma(a.collagePoleRepel),.1,2.2,.05)}
    ${te("collage-pole-speed","Pole Speed",Pa(a.collagePoleSpeed),.12,2.2,.05)}
    ${te("collage-pole-falloff","Falloff",Aa(a.collagePoleFalloff),.6,2.8,.05)}
    ${te("collage-pole-switch","Polarity Switching",Fa(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Camera</div>
    <div class="row">
      ${Ho.map(n=>`<button class="btn tiny ${ti(a?.collageCamera)===n?"acid":""}" data-act="camera" data-camera="${n}">${n==="hunt"?"Hunt":"Fixed"}</button>`).join("")}
    </div>
    ${ti(a?.collageCamera)==="hunt"?`<div class="sec">Documentary Search</div>
    <div class="row">
      ${No.map(n=>`<button class="btn tiny ${Ba(a?.collageHuntSelect)===n?"acid":""}" data-act="hunt-select" data-select="${n}">${n==="random"?"Random":n==="reactive"?"Reactive":"Mixed"}</button>`).join("")}
    </div>
    <div class="row">
      ${Lo.map(n=>`<button class="btn tiny ${Ia(a?.collageCameraFeel)===n?"acid":""}" data-act="camera-feel" data-feel="${n}">${n==="handheld"?"Handheld":"Perfect"}</button>`).join("")}
      <button class="btn tiny ${a?.collageHuntFocus?"acid":""}" data-act="hunt-focus">Manual Focus</button>
    </div>
    ${te("collage-hunt-wide-min","Wide / Search Duration Min",Ra(a?.collageHuntWideMin),.4,12,.1)}
    ${te("collage-hunt-wide-max","Wide / Search Duration Max",za(a?.collageHuntWideMax),.6,16,.1)}
    ${te("collage-hunt-follow-min","Subject Follow Duration Min",Oa(a?.collageHuntFollowMin),.4,12,.1)}
    ${te("collage-hunt-follow-max","Subject Follow Duration Max",Ha(a?.collageHuntFollowMax),.6,16,.1)}
    ${te("collage-hunt-snap","Snap Zoom Speed",La(a?.collageHuntSnap),.35,2.4,.05)}
    ${te("collage-hunt-zoom","Zoom Range / Close Framing",Na(a?.collageHuntZoom),.35,2.4,.05)}
    ${te("collage-hunt-tight","Tracking Tightness",Ua(a?.collageHuntTight),.12,1,.02)}
    ${te("collage-hunt-react-min","Reaction Time Min",qa(a?.collageHuntReactMin),.04,1.4,.02)}
    ${te("collage-hunt-react-max","Reaction Time Max",Da(a?.collageHuntReactMax),.08,2,.02)}
    ${te("collage-hunt-precision","Operator Precision",$a(a?.collageHuntPrecision),0,1,.02)}
    ${te("collage-hunt-variation","Behavior Variation",Va(a?.collageHuntVariation),0,1,.02)}
    ${a?.collageHuntFocus?`${te("collage-hunt-focus-speed","Focus Correction Speed",Wa(a?.collageHuntFocusSpeed),.15,2.2,.05)}
    ${te("collage-hunt-focus-error","Focus Error Amount",ja(a?.collageHuntFocusError),0,1.6,.05)}`:""}`:""}
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
    <div class="status" style="margin-top:4px">Each clip keeps one move. Rush / tunnel / gyre / well / hall / drift / braid / sway fly through depth so a big screen feels 3D. Field is a deforming spatial field, not a flock: the same stamps pack into a texture, thin into streams and contours, open into empty ground, then fill again. Matter moves are a spring mesh, a flowing current, a flock, or wandering magnets — each with its own sliders. Chain is a freeform 3D conga line. Drum / illusion locks to the tempo grid. Music punches glow, not the path.</div>
    <div style="margin-top:8px">
      ${e.sources.map(n=>{const o=n.kind==="audio"?`beat-sync · ${Jt(n.duration||0)}${n.bpm&&n.bpm>40?` · ${n.bpm}bpm`:""}`:`${n.kind} ${n.width}×${n.height}`,s=n.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${n.id}">use</button>`;return`
        <div class="thumb ${n.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${n.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Ge(n.name)}</b><span>${o}</span></div>
          ${s}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${te("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${te("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${te("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${te("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${te("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${te("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
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
  `}function B1(t){const e=F.project,i=xe(e),a=zi(i),n=hd();t.innerHTML=`
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
      ${te("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${im.map(o=>`<option value="${o}" ${o===i.blendMode?"selected":""}>${o}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${te("tr-x","X",i.transform.x,-1,1,.01)}
      ${te("tr-y","Y",i.transform.y,-1,1,.01)}
      ${te("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${te("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${te("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${te("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${te("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${te("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${te("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(o=>`<option ${i.mask.type===o?"selected":""} value="${o}">${o}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${F.state.ui.includeEffects?"checked":""}/> include in randomizer</div>
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
        ${md.map(o=>{const s=(n[o.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${o.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Ge(at(a.typeId)?.name??"params")} · ${Ge(at(a.typeId)?.description??"")}</div>
        ${(at(a.typeId)?.params??[]).map(o=>R1(i.id,a,o)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(o=>{o.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",o.getAttribute("data-fx-index")||"0")}),o.addEventListener("dragover",s=>s.preventDefault()),o.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(o.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||Le(i.id,c=>{const f=[...c.effects],[d]=f.splice(r,1);return f.splice(l,0,d),{...c,effects:f}})})})}function R1(t,e,i){const a=e.params[i.id]??i.default,n=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${n} ${a?"checked":""}/> ${Ge(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Ge(i.label)}</span><input type="color" ${n} value="${Ge(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Ge(i.label)}</span>
      <select ${n}>${(i.options??[]).map(o=>`<option value="${o.value}" ${o.value===a?"selected":""}>${o.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Ge(i.label)}</span>
    <input type="range" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function z1(t){const e=F.project,i=e.playback,a=e.exportSettings,n=F.state.ui.exporting,o=Math.max(e.duration,.1),s=i.time/o*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(r=>`<option ${i.mode===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      ${te("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${Jt(i.time)} / ${Jt(o)}</span>
        <span class="status" id="status-line">${F.state.ui.status}</span>
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
        ${To.map(r=>`<button class="btn tiny ${Lg(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        ${(()=>{const r=Math.max(a.width,a.height);return`<button class="btn tiny ${r<=Mt?"acid":""}" data-act="exp-size" data-long="${Mt}">720</button>
        <button class="btn tiny ${r>Mt?"acid":""}" data-act="exp-size" data-long="${Pt}">1080</button>`})()}
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
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*o;F.setProject(f=>({...f,playback:{...f.playback,time:Math.max(0,c)}}))})}function te(t,e,i,a,n,o){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${n}" step="${o}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${n}" step="${o}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Yt(){const t=F.project,e=t.sources.find(n=>n.id===F.state.ui.selectedSourceId);if(e&&Ae(e.generator))return e;const i=xe(t),a=t.sources.find(n=>n.id===i?.sourceId);return a&&Ae(a.generator)?a:t.sources.find(n=>Ae(n.generator))}function O1(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,chainAnimal:t.collageChainAnimal,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,camera:t.collageCamera,cameraFeel:t.collageCameraFeel,huntWideMin:t.collageHuntWideMin,huntWideMax:t.collageHuntWideMax,huntFollowMin:t.collageHuntFollowMin,huntFollowMax:t.collageHuntFollowMax,huntSnap:t.collageHuntSnap,huntZoom:t.collageHuntZoom,huntTight:t.collageHuntTight,huntReactMin:t.collageHuntReactMin,huntReactMax:t.collageHuntReactMax,huntPrecision:t.collageHuntPrecision,huntSelect:t.collageHuntSelect,huntFocus:t.collageHuntFocus,huntFocusSpeed:t.collageHuntFocusSpeed,huntFocusError:t.collageHuntFocusError,huntVariation:t.collageHuntVariation,wash:e?t.colorA:void 0}}function gl(t){return!t.collageKit||!t.collageMove?t:{...t,name:ms(t.collageMove,t.collageKit,t.collageKitB,t.collageChainAnimal)}}function ie(t,e,i=!1){const a=Yt();return a?(F.setProject(n=>({...n,sources:n.sources.map(o=>o.id===a.id?t(o):o)}),!i),e&&F.patchUi({status:e},!i),!0):!1}function Ge(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Jt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function vl(t,e){if(F.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),n=Math.max(16,Math.floor(a.width*i)),o=Math.max(16,Math.floor(a.height*i));(t.width!==n||t.height!==o)&&(t.width=n,t.height=o)}function H1(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${Jt(i)}  ${e.toFixed(0)}FPS  ${F.project.quality.toUpperCase()}`);const n=Math.max(F.project.duration,.1),o=t.querySelector(".playhead");o&&(o.style.left=`${i/n*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${Jt(i)} / ${Jt(n)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=F.state.ui.status)}const bl=window;bl.__phospheneMark=!0;const yl=document.querySelector("#app");if(!yl)throw new Error("#app missing");const Mo=yl,Po=document.createElement("canvas");async function L1(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new Vh(Po)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:Mo.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}E1(Mo,t),bl.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>vl(Po,e)).observe(e),vl(Po,e);let a=performance.now(),n=60,o=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const f=F.state.ui.exporting,d=F.project,h=Ld(d,d.playback.time),u=vi(d);if(!f&&d.playback.playing&&!d.playback.freeze){const g=u?.audio&&d.playback.mode==="forward"&&!u.audio.paused&&Number.isFinite(u.audio.currentTime);if(u?.audio&&Wn(u.audio,d.playback),g){const m=u.audio.currentTime;F.setProject(v=>({...v,playback:{...v.playback,time:m}}),!1)}else{let m=d.playback.time+c*h;const v=Math.max(d.duration,.001);d.playback.loop?m=(m%v+v)%v:m=Math.min(m,v),F.setProject(w=>({...w,playback:{...w.playback,time:m}}),!1),u?.audio&&d.playback.mode!=="forward"&&Wn(u.audio,{...d.playback,playing:!1,time:m})}}else u?.audio&&Wn(u.audio,{...d.playback,playing:!1});for(const g of F.project.sources)if(g.kind==="video"&&g.video&&!F.project.playback.freeze){const m=Un(F.project.playback.time,g.duration||g.video.duration||1,F.project.playback.mode,1,F.project.playback.loop);tm(g,m,{playing:F.project.playback.playing,freeze:F.project.playback.freeze,mode:F.project.playback.mode,speed:F.project.playback.speed})}if(!f)try{t.render(F.project,F.project.playback.time),t.cutStatus&&t.cutStatus!==F.state.ui.status&&F.patchUi({status:t.cutStatus},!1)}catch(g){F.patchUi({status:g instanceof Error?g.message:"render error"},!1)}o++,l-s>400&&(n=o*1e3/(l-s),s=l,o=0),H1(Mo,n,F.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}L1()})();

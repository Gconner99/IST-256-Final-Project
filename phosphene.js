(function(){"use strict";function Se(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function I(t,e,i){return Math.min(i,Math.max(e,t))}function it(t,e=16){return Math.max(e,Math.round(t)&-2)}function In(t,e,i,a){const o=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:it(t*o),height:it(e*o)}}function Ue(t,e,i){return t+(e-t)*i}function _l(t){const e=I(t,0,1);return e*e*(3-2*e)}const Sl="field";function ei(t){return t===Sl}function qi(t){return I(t??1.15,.2,2.2)}function Di(t){return I(t??.95,.28,2.4)}function $i(t){return I(t??1,.08,2.2)}function Wi(t){return I(t??1.15,0,2.2)}function ji(t){return I(t??.9,.28,2.4)}function Vi(t){return I(t??1.1,.08,2.2)}function Gi(t){return I(t??.85,0,2.2)}function Ki(t){return I(t??.9,0,2.2)}function Xi(t){return I(t??.8,.28,2.4)}function Zi(t){return I(t??.35,0,2.2)}function Qi(t){return I(t??.9,0,2.4)}function Yi(t){return I(t??.055,.02,.22)}function Ji(t){return I(t??.55,.25,2.2)}function ea(t){return I(t??.38,.08,1)}function ta(t){return I(t??1.15,.25,2.2)}function ia(t){return I(t??.85,0,2.2)}function aa(t){return I(t??.62,.12,1)}function oa(t){return I(t??1.85,.6,3.2)}function na(t){return I(t??.12,0,2)}function sa(t){return I(t??1.1,0,2.2)}function ra(t){return I(t??.85,0,2)}function la(t){return I(t??1.25,0,2.2)}function ca(t){return I(t??.45,0,2)}function xl(t){const e=aa(t?.minScale),i=Math.max(e+.08,oa(t?.maxScale));return{fieldStrength:qi(t?.fieldStrength),fieldScale:Di(t?.fieldScale),fieldEvolve:$i(t?.fieldEvolve),density:Wi(t?.density),densityScale:ji(t?.densityScale),densityEvolve:Vi(t?.densityEvolve),flow:Gi(t?.flow),curl:Ki(t?.curl),flowScale:Xi(t?.flowScale),attract:Zi(t?.attract),repel:Qi(t?.repel),radius:Yi(t?.radius),inertia:Ji(t?.inertia),damp:ea(t?.damp),maxV:ta(t?.maxV),scaleAmp:ia(t?.scaleAmp),minScale:e,maxScale:i,perturb:na(t?.perturb),warp:sa(t?.warp),sparsity:ra(t?.sparsity),contrast:la(t?.contrast),motion:ca(t?.motion)}}function _t(t,e,i){return{fast:t*2.15,medium:t*.64*i,slow:t*.78*e,glacial:t*1.38*i}}const qe=.014;function So(t,e,i){const a=(t-e)/Math.max(1e-6,i),o=Math.max(0,1-a*a);return o*o}function Bn(t,e){const i=_t(t,e.fieldEvolve,e.densityEvolve).glacial,a=Math.sin(i+1.25)+.32*Math.sin(i*1.618+.4);let o=.5+.54*Math.tanh(a*1.85);return o+=(.72-e.sparsity)*.16,I(o,0,1)}function Cl(t,e){const{medium:i,slow:a}=_t(t,e.fieldEvolve,e.densityEvolve),o=Math.sin(i*1.07+.3)+.4*Math.sin(a*.51+1.2);return .5+.5*Math.tanh(o*1.4)}function El(t,e){const o=Math.abs(t),n=Math.abs(e),s=o>.47?Math.sign(t)*(.47+(1-Math.exp(-(o-.47)*3.2))*.028):t,r=n>.8?Math.sign(e)*(.8+(1-Math.exp(-(n-.8)*3.2))*.04):e;return[s,r]}function Ml(t,e,i,a,o){const{slow:n,glacial:s,medium:r}=_t(i,a.fieldEvolve,a.densityEvolve),l=a.fieldScale,c=a.warp*o;let f=t+c*.2*Math.sin(e*(1.55*l)+n*.9),d=e+c*.18*Math.cos(t*(1.38*l)+r*.7);const h=Math.sin(s*.71+.4)*c*.55,u=Math.sin(n*.83+1.1)*c*.28;return f*=1+h,d*=1-h*.82,f+=d*u,f+=a.motion*o*.12*Math.sin(n*.55),d+=a.motion*o*.1*Math.cos(n*.41+.7),[f,d]}function Pl(t,e,i,a){const{slow:o,medium:n}=_t(i,a.fieldEvolve,a.densityEvolve),s=a.densityScale,r=t*s;return e*s-.34*Math.sin(r*(1.95+s*.35)+o*1.15)-.1*Math.sin(r*.68+n)}function Al(t,e,i,a){const{slow:o,medium:n}=_t(i,a.fieldEvolve,a.densityEvolve),s=a.densityScale,r=t*s,l=e*s;return r-.3*Math.sin(l*(1.7+s*.28)+n*1.05)-.09*Math.cos(l*.8+o*.6)}function Fl(t,e,i,a){const{slow:o,medium:n}=_t(i,a.fieldEvolve,a.densityEvolve),s=a.densityScale;return Math.sin(t*(1.55*s)+e*.4+o*.7)+.45*Math.cos(e*(1.25*s)+n*.5)}function xo(t,e,i){let a=t,o=e;for(let n=0;n<5;n++){const s=i(a,o),r=(i(a+qe,o)-i(a-qe,o))/(2*qe),l=(i(a,o+qe)-i(a,o-qe))/(2*qe),c=r*r+l*l+1e-8;a-=s*r/c,o-=s*l/c}return[a,o]}function Il(t,e){const i=t*.52*e.fieldEvolve;return[[.3*Math.sin(i+.2),.34*Math.cos(i*.71+.4)],[-.28*Math.cos(i*.83+1.1),.24*Math.sin(i*.61+2)],[.2*Math.sin(i*1.07+2.2),-.32*Math.cos(i*.55+.8)],[-.24*Math.sin(i*.49+3),-.2*Math.cos(i*.91+1.5)]]}function Bl(t,e,i,a){const o=Il(i,a);let n=o[0],s=1/0;for(let r=0;r<o.length;r++){const l=t-o[r][0],c=e-o[r][1],f=l*l+c*c;f<s&&(s=f,n=o[r])}return n}function Rl(t,e,i,a){const[o,n]=xo(t,e,(f,d)=>Pl(f,d,i,a)),[s,r]=xo(t,e,(f,d)=>Al(f,d,i,a)),l=(t-o)*(t-o)+(e-n)*(e-n),c=(t-s)*(t-s)+(e-r)*(e-r);return l<c?[o,n]:[s,r]}function zl(t,e,i,a){const o=Cl(i,a),n=So(o,.18,.4),s=So(o,.6,.3),r=So(o,.92,.26);return s>=n&&s>=r&&s>.04?Bl(t,e,i,a):r>=n&&r>.04?xo(t,e,(l,c)=>Fl(l,c,i,a)):Rl(t,e,i,a)}function Rn(t,e){return I(Math.pow(1-t,1.12)*(.42+e.density*.32+e.attract*.28)*(.55+e.fieldStrength*.4),0,1)}function Ol(t,e){return(.1+.9*(1-t))*(.4+e.warp*.45)}function Hl(t,e,i,a,o){const n=Bn(a,o),s=Ol(n,o),r=Rn(n,o),[l,c]=Ml(t,e,a,o,s),[f,d]=zl(l,c,a,o);let h=l+(f-l)*r,u=c+(d-c)*r;const{fast:p,slow:m}=_t(a,o.fieldEvolve,o.densityEvolve),g=o.flow*o.curl*s*.045;h+=g*Math.sin(c*o.flowScale*2.1+m),u+=g*Math.cos(l*o.flowScale*1.8+m*.7);const y=o.perturb*.01*(.3+s);h+=y*Math.sin(t*11+p),u+=y*Math.cos(e*10+p*.8);const[w,v]=El(h,u);return{x:w,y:v,z:i*(1-r*.5)+.04*Math.sin(i*3+a*.5)*s}}function ua(t,e,i,a,o){const n=Hl(t,e,i,a,o);return{x:I(n.x,-.48,.48),y:I(n.y,-.82,.82),z:I(n.z,-.32,.32)}}function Ll(t,e,i,a,o){const n=ua(t,e,i,a,o),s=ua(t+qe,e,i,a,o),r=ua(t,e+qe,i,a,o),l=(s.x-n.x)/qe,c=(s.y-n.y)/qe,f=(r.x-n.x)/qe,d=(r.y-n.y)/qe,h=Math.hypot(l,c)||1,u=Math.hypot(f,d)||1;return I(h/u,.38,2.6)}function Nl(t,e,i){const a=Math.max(2,Math.round(Math.sqrt(e*1.15))),o=Math.max(2,Math.ceil(e/a)),n=t%a,s=Math.floor(t/a),r=(i.x-.5)*.7,l=(i.y-.5)*.7,c=s%2*.5,f=((n+.5+c+r*.4)/a-.5)*.98,d=((s+.5+l*.36)/o-.5)*1.52,h=(i.z-.5)*.28;return[f,d,h]}function zn(t,e){const i=t.length,a={n:i,lastClock:e,phase:e,homeX:new Float32Array(i),homeY:new Float32Array(i),homeZ:new Float32Array(i),px:new Float32Array(i),py:new Float32Array(i),pz:new Float32Array(i),vx:new Float32Array(i),vy:new Float32Array(i),vz:new Float32Array(i),bias:new Float32Array(i),scale:new Float32Array(i),alpha:new Float32Array(i),squash:new Float32Array(i)};for(let o=0;o<i;o++){const[n,s,r]=Nl(o,i,t[o]);a.homeX[o]=n,a.homeY[o]=s,a.homeZ[o]=r,a.px[o]=n,a.py[o]=s,a.pz[o]=r,a.vx[o]=(t[o].vx-.5)*.02,a.vy[o]=(t[o].vy-.5)*.02,a.vz[o]=0,a.bias[o]=.72+t[o].z*.7,a.scale[o]=1,a.alpha[o]=1,a.squash[o]=1}return a}function On(t,e,i,a){const o=t.n,n=Bn(i,a),s=Rn(n,a),r=(15.5+s*6)/(.22+a.inertia),l=Math.exp(-(.55+a.damp*1.1)*e),c=(.2+a.maxV*.32)*(.85+s*.7),f=a.radius*(.22+s*.28),d=f*f,{slow:h}=_t(i,a.fieldEvolve,a.densityEvolve);for(let u=0;u<o;u++){const p=ua(t.homeX[u],t.homeY[u],t.homeZ[u],i,a);let m=(p.x-t.px[u])*r,g=(p.y-t.py[u])*r,y=(p.z-t.pz[u])*r*.4;if(a.repel>.02&&s>.12)for(let _=0;_<o;_++){if(u===_)continue;const E=t.px[u]-t.px[_],M=t.py[u]-t.py[_],A=E*E+M*M;if(A>d||A<1e-10)continue;const P=Math.sqrt(A),H=1-P/f,$=H*H*a.repel*.28*s;m+=E/P*$,g+=M/P*$}t.vx[u]=(t.vx[u]+m*e)*l,t.vy[u]=(t.vy[u]+g*e)*l,t.vz[u]=(t.vz[u]+y*e)*l;const w=Math.hypot(t.vx[u],t.vy[u],t.vz[u])||1;if(w>c){const _=c/w;t.vx[u]*=_,t.vy[u]*=_,t.vz[u]*=_}t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e;const v=Math.sin(t.homeX[u]*3.4+t.homeY[u]*2.6+h*.4)*Math.cos(t.homeY[u]*2.1+h*.22),T=a.minScale+(1-n)*(a.maxScale-a.minScale)*.9;t.scale[u]=I(T*(.88+t.bias[u]*.14)*(1+a.scaleAmp*v*.16*(.3+s)),a.minScale,a.maxScale),t.squash[u]=Ll(t.homeX[u],t.homeY[u],t.homeZ[u],i,a),t.alpha[u]=1}}function Ul(t,e,i,a){const o=e.length;let n=t;(!n||n.n!==o||i-(n.lastClock??0)>1.6)&&(n=zn(e,i)),(!n.squash||n.squash.length!==o)&&(n.squash=new Float32Array(o),n.squash.fill(1));let s=i-n.lastClock;if(s<-.04&&(n.lastClock>2&&i<.8?s=Math.min(.05,1/30):(n=zn(e,i),s=0)),s<=1e-5)return On(n,0,n.phase,a),n.lastClock=i,n;s=Math.min(s,.05);const r=s>.028?2:1,l=s/r;for(let c=0;c<r;c++)n.phase+=l,On(n,l,n.phase,a);return n.lastClock=i,n}function ql(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.62,1.02-t.pz[e]*.22),o=I(1.02/a,.78,1.28);return{x:I(t.px[e]/a,-.48,.48),y:I(t.py[e]/a,-.82,.82),px:I((.036+i*.019)*o*t.scale[e],.02,.32),rot:(t.bias[e]-1.05)*.14,alpha:1,squash:t.squash?t.squash[e]:1}}const Dl=["spring","flow","boids","poles"];function Co(t){return!!t&&Dl.includes(t)}function fa(t){return I(t??1,.2,2.2)}function da(t){return I(t??.55,.08,1)}function ha(t){return I(t??.34,.12,.72)}function ma(t){return I(t??1,.2,2.2)}function pa(t){return I(t??2.1,1.15,3.6)}function ga(t){return I(t??1,.28,2.4)}function va(t){return I(t??.8,0,2)}function ba(t){return I(t??.7,.08,2.2)}function ya(t){return I(t??1,.2,2.2)}function wa(t){return I(t??.7,0,1.6)}function ka(t){return I(t??1,.1,2.2)}function Ta(t){return I(t??1,.15,2.4)}function _a(t){return I(t??1,.1,2.2)}function Sa(t){return I(t??.22,.08,.55)}function xa(t){return I(t??1,.25,2.2)}function Ca(t){return I(Math.round(t??3),1,5)}function Ea(t){return I(t??1,.15,2.2)}function Ma(t){return I(t??.85,.1,2.2)}function Pa(t){return I(t??.8,.12,2.2)}function Aa(t){return I(t??1.4,.6,2.8)}function Fa(t){return I(t??.45,0,2)}function $l(t){return{springStrength:fa(t?.springStrength),springDamp:da(t?.springDamp),springDist:ha(t?.springDist),springElast:ma(t?.springElast),springBreak:pa(t?.springBreak),flowScale:ga(t?.flowScale),flowTurb:va(t?.flowTurb),flowEvolve:ba(t?.flowEvolve),flowForce:ya(t?.flowForce),flowDepth:wa(t?.flowDepth),boidCohere:ka(t?.boidCohere),boidSep:Ta(t?.boidSep),boidAlign:_a(t?.boidAlign),boidRadius:Sa(t?.boidRadius),boidSpeed:xa(t?.boidSpeed),poleCount:Ca(t?.poleCount),poleAttract:Ea(t?.poleAttract),poleRepel:Ma(t?.poleRepel),poleSpeed:Pa(t?.poleSpeed),poleFalloff:Aa(t?.poleFalloff),poleSwitch:Fa(t?.poleSwitch)}}function Wl(t,e,i,a,o,n,s){const r=o*3.15,l=a,c=n;let f=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),d=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),h=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const u=Math.hypot(f,d,h)||1;return[f/u,d/u,h/u]}function jl(t,e,i,a){const o=i*(.42+t*.15),n=Math.sin(e*o+t*1.3)*.34+Math.sin(e*o*.37+t)*.08,s=Math.cos(e*o*.86+t*1.9)*.28+Math.cos(e*o*.29+t*.7)*.07,r=Math.sin(e*o*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:n,y:s,z:r,sign:c}}function Vl(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function Gl(t,e,i,a){const o=e.length,n={move:t,n:o,lastClock:i,px:new Float32Array(o),py:new Float32Array(o),pz:new Float32Array(o),vx:new Float32Array(o),vy:new Float32Array(o),vz:new Float32Array(o),homeX:new Float32Array(o),homeY:new Float32Array(o),homeZ:new Float32Array(o),links:[],linkKey:""};for(let s=0;s<o;s++){const[r,l,c]=Vl(e[s]);n.px[s]=r,n.py[s]=l,n.pz[s]=c,n.homeX[s]=r,n.homeY[s]=l,n.homeZ[s]=c,n.vx[s]=(e[s].vx-.5)*.08,n.vy[s]=(e[s].vy-.5)*.08,n.vz[s]=0}return t==="spring"&&Hn(n,a.springDist),n}function Hn(t,e,i=5){const a=t.n,o=[],n=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,f=Math.min(s,c),d=Math.max(s,c),h=`${f}:${d}`;n.has(h)||(n.add(h),o.push({a:f,b:d,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=o,t.linkKey=`${a}|${e.toFixed(3)}`,o}function De(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Kl(t,e,i,a){const o=t.n,n=`${o}|${a.springDist.toFixed(3)}`;t.linkKey!==n&&Hn(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,f=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const u of t.links){const p=t.px[u.b]-t.px[u.a],m=t.py[u.b]-t.py[u.a],g=t.pz[u.b]-t.pz[u.a],y=Math.hypot(p,m,g)||1e-5;if(u.on&&y>u.rest*l){u.on=!1;continue}if(!u.on&&y<a.springDist*.92&&(u.on=!0),!u.on)continue;const w=y-u.rest,v=s*w,T=p/y,_=m/y,E=g/y;t.vx[u.a]+=T*v*e,t.vy[u.a]+=_*v*e,t.vz[u.a]+=E*v*e,t.vx[u.b]-=T*v*e,t.vy[u.b]-=_*v*e,t.vz[u.b]-=E*v*e}const h=Math.exp(-r*7*e);for(let u=0;u<o;u++){const p=t.homeX[u]-t.px[u],m=t.homeY[u]-t.py[u],g=t.homeZ[u]-t.pz[u];t.vx[u]+=p*.35*e,t.vy[u]+=m*.35*e,t.vz[u]+=g*.35*e;const y=Math.hypot(t.px[u]-c,t.py[u]-f,t.pz[u]-d);if(y<.24){const w=(.24-y)/.24;t.vx[u]+=(c-t.px[u])*w*1.8*e,t.vy[u]+=(f-t.py[u])*w*1.8*e,t.vz[u]+=(d-t.pz[u])*w*1.1*e}t.vx[u]*=h,t.vy[u]*=h,t.vz[u]*=h,t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=De(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=De(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=De(t.pz[u],t.vz[u],.36)}}function Xl(t,e,i,a){const o=i*a.flowEvolve,n=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=Wl(t.px[s],t.py[s],t.pz[s],o,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*n*e,t.vy[s]+=l*n*e,t.vz[s]+=c*n*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=De(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=De(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=De(t.pz[s],t.vz[s],.34)}}function Zl(t,e,i){const a=t.n,o=i.boidRadius,n=o*o,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let f=0;f<a;f++){let d=0,h=0,u=0,p=0,m=0,g=0,y=0,w=0,v=0,T=0;for(let _=0;_<a;_++){if(f===_)continue;const E=t.px[_]-t.px[f],M=t.py[_]-t.py[f],A=t.pz[_]-t.pz[f],P=E*E+M*M+A*A;if(P>n||P<1e-8)continue;T++,d+=t.px[_],h+=t.py[_],u+=t.pz[_],y+=t.vx[_],w+=t.vy[_],v+=t.vz[_];const H=Math.sqrt(P),$=(o-H)/o;p-=E/H*$,m-=M/H*$,g-=A/H*$}T&&(r[f]+=(d/T-t.px[f])*i.boidCohere*1.15,l[f]+=(h/T-t.py[f])*i.boidCohere*1.15,c[f]+=(u/T-t.pz[f])*i.boidCohere*1.15,r[f]+=p*i.boidSep*1.8,l[f]+=m*i.boidSep*1.8,c[f]+=g*i.boidSep*1.8,r[f]+=(y/T-t.vx[f])*i.boidAlign*1.35,l[f]+=(w/T-t.vy[f])*i.boidAlign*1.35,c[f]+=(v/T-t.vz[f])*i.boidAlign*1.35),r[f]+=-t.px[f]*.22,l[f]+=-t.py[f]*.22,c[f]+=-t.pz[f]*.18}for(let f=0;f<a;f++){t.vx[f]+=r[f]*e,t.vy[f]+=l[f]*e,t.vz[f]+=c[f]*e;const d=Math.hypot(t.vx[f],t.vy[f],t.vz[f])||1;if(d>s){const h=s/d;t.vx[f]*=h,t.vy[f]*=h,t.vz[f]*=h}t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=De(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=De(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=De(t.pz[f],t.vz[f],.34)}}function Ql(t,e,i,a){const o=[];for(let s=0;s<a.poleCount;s++)o.push(jl(s,i,a.poleSpeed,a.poleSwitch));const n=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const f of o){const d=f.x-t.px[s],h=f.y-t.py[s],u=f.z-t.pz[s],p=Math.hypot(d,h,u)||1e-4,m=(f.sign>0?a.poleAttract:a.poleRepel)/(p**n+.06),g=f.sign>0?1:-1;if(r+=d/p*m*g*.55,l+=h/p*m*g*.55,c+=u/p*m*g*.32,r+=-h/p*m*.28,l+=d/p*m*.28,p<.1){const y=(.1-p)*10;r-=d/p*y,l-=h/p*y,c-=u/p*y*.6}}for(let f=0;f<t.n;f++){if(s===f)continue;const d=t.px[s]-t.px[f],h=t.py[s]-t.py[f],u=t.pz[s]-t.pz[f],p=d*d+h*h+u*u;if(p>.018||p<1e-8)continue;const m=Math.sqrt(p),g=(.135-m)*2.4;r+=d/m*g,l+=h/m*g,c+=u/m*g*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=De(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=De(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=De(t.pz[s],t.vz[s],.3)}}function Yl(t,e,i,a,o){const n=i.length;let s=t;(!s||s.move!==e||s.n!==n||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=Gl(e,i,a,o));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let f=0;f<l;f++)e==="spring"?Kl(s,c,a,o):e==="flow"?Xl(s,c,a,o):e==="boids"?Zl(s,c,o):Ql(s,c,a,o);return s.lastClock=a,s}function Jl(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),o=I(1.1/a,.55,1.7);return{x:I(t.px[e]/a,-.48,.48),y:I(t.py[e]/a,-.4,.4),px:I((.07+i*.03)*o,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:I(.55+o*.4,.5,1)}}const Ln=["fixed","hunt"],Nn=["perfect","handheld"],Un=["random","reactive","mixed"];function ti(t){return Ln.includes(t)?t:"fixed"}function Ia(t){return Nn.includes(t)?t:"perfect"}function Ba(t){return Un.includes(t)?t:"mixed"}function Ra(t){return I(t??2,.4,12)}function za(t){return I(t??6,.6,16)}function Oa(t){return I(t??2,.4,12)}function Ha(t){return I(t??5,.6,16)}function La(t){return I(t??1,.35,2.4)}function Na(t){return I(t??1,.35,2.4)}function Ua(t){return I(t??.7,.12,1)}function qa(t){return I(t??.16,.04,1.4)}function Da(t){return I(t??.42,.08,2)}function $a(t){return I(t??.72,0,1)}function Wa(t){return I(t??.85,.15,2.2)}function ja(t){return I(t??.55,0,1.6)}function Va(t){return I(t??.35,0,1)}function ec(t){let e=Ra(t?.huntWideMin),i=za(t?.huntWideMax);i<e&&([e,i]=[i,e]);let a=Oa(t?.huntFollowMin),o=Ha(t?.huntFollowMax);o<a&&([a,o]=[o,a]);let n=qa(t?.huntReactMin),s=Da(t?.huntReactMax);return s<n&&([n,s]=[s,n]),{wideMin:e,wideMax:i,followMin:a,followMax:o,snap:La(t?.huntSnap),zoom:Na(t?.huntZoom),tight:Ua(t?.huntTight),reactMin:n,reactMax:s,precision:$a(t?.huntPrecision),select:Ba(t?.huntSelect),focusOn:!!t?.huntFocus,focusSpeed:Wa(t?.huntFocusSpeed),focusError:ja(t?.huntFocusError),variation:Va(t?.huntVariation),feel:Ia(t?.cameraFeel)}}function qn(t=0,e=3){return{phase:"wide",clock:t,phaseUntil:t+e,reactUntil:0,subject:-1,lastSubject:-1,lookX:0,lookY:0,zoom:1,rot:0,velX:0,velY:0,velZ:0,velR:0,errX:0,errY:0,heldFocus:1,plan:"basic",mediumDone:!1,nudged:!1,retargeted:!1,handX:0,handY:0,handR:0,lag:0,cycle:0,trackStart:0,prev:[]}}function It(t,e,i){return e+t()*Math.max(0,i-e)}function $t(t,e){return Math.hypot(t,e)}function tc(t,e,i,a){const o=e?(t.x-e.x)/Math.max(a,.016666666666666666):0,n=e?(t.y-e.y)/Math.max(a,1/60):0,s=$t(o,n),r=e?(t.px-e.px)/Math.max(a,1/60):0,l=Math.max(0,r),c=e?$t(e.x-t.x,e.y-t.y):0,f=Math.max(0,s-c/Math.max(a,1/60)),d=e?Math.abs(Math.atan2(n,o)-Math.atan2(t.y-e.y,t.x-e.x)):0,h=$t(t.x-i.cx,t.y-i.cy)/Math.max(i.spread,.08),u=Math.max(Math.abs(t.x),Math.abs(t.y)),p=Math.min(1,s*1.6);return s*1.15+f*.9+d*.35+l*3.2+I(h-.7,0,2)*.55+I(u-.28,0,1)*.7+p*.4}function Dn(t,e,i,a,o,n){if(t.length===0)return-1;if(t.length===1)return t[0].id;const s=t.reduce((u,p)=>u+p.x,0)/t.length,r=t.reduce((u,p)=>u+p.y,0)/t.length,l=t.reduce((u,p)=>u+$t(p.x-s,p.y-r),0)/t.length||.2,c=new Map(o.map(u=>[u.id,u])),f=t.map(u=>{if(u.id===e&&t.length>1)return 0;const p=tc(u,c.get(u.id),{cx:s,cy:r,spread:l},n);return i==="random"?1:i==="reactive"?.12+p:.55+p}),d=f.reduce((u,p)=>u+p,0);if(d<=0)return(t.find(p=>p.id!==e)??t[0]).id;let h=a()*d;for(let u=0;u<t.length;u++)if(h-=f[u],h<=0)return t[u].id;return t[t.length-1].id}function ic(t,e){if(e()>t*.72)return"basic";const i=e();return i<.22?"medium":i<.42?"retarget":i<.6?"abort":i<.8?"linger":"nudge"}function ac(t,e,i=!1){const a=t?.px??.08,o=.2/Math.max(a,.045),n=I(1.2+e*.95*I(o,.65,2.1),1.25,4.1);return i?Ue(1,n,.42):n}function $n(t,e){return t.find(i=>i.id===e)}function oc(t){if(!t.length)return{x:0,y:0};let e=0,i=0;for(const a of t)e+=a.x,i+=a.y;return{x:e/t.length,y:i/t.length}}function nc(t,e,i,a,o,n,s,r){t.velX+=(e-t.lookX)*s-t.velX*r,t.velY+=(i-t.lookY)*s-t.velY*r,t.velZ+=(a-t.zoom)*s-t.velZ*r,t.velR+=(o-t.rot)*s*.65-t.velR*r,t.lookX+=t.velX*n,t.lookY+=t.velY*n,t.zoom+=t.velZ*n,t.rot+=t.velR*n}function sc(t,e,i,a,o){const n=Se(o+Math.floor(i*1e3)*17+(t?.cycle??0)*131>>>0);let s=t??qn(i,It(n,a.wideMin,a.wideMax));const r=i-s.clock;(r<-.02||r>1.2)&&(s=qn(i,It(n,a.wideMin,a.wideMax)));const l=I(i-s.clock,1/90,.08);s.clock=i;const c=oc(e),f=$n(e,s.subject),d=s.prev.find($=>$.id===s.subject);f&&d&&$t(f.x-d.x,f.y-d.y)/l>.55&&(s.lag=Math.max(s.lag,(1-a.precision)*.16)),s.lag=Math.max(0,s.lag-l*(1.4+a.precision*2)),s.errX*=Math.exp(-l*(1.1+a.precision*2.6)),s.errY*=Math.exp(-l*(1.1+a.precision*2.6));const h=Se(o+s.cycle*9973+11>>>0),u=Se(o+s.cycle*7919+3>>>0),p=($,x=1)=>{s.lastSubject=s.subject,s.subject=$,s.phase="notice",s.reactUntil=i+It(h,a.reactMin,a.reactMax)*x;const R=(1-a.precision)*.11*(.45+h()),k=h()*Math.PI*2;s.errX=Math.cos(k)*R,s.errY=Math.sin(k)*R};if(s.phase==="wide"&&i>=s.phaseUntil&&e.length){const $=Dn(e,s.lastSubject,a.select,h,s.prev,l);s.plan=ic(a.variation,u),s.mediumDone=!1,s.nudged=!1,s.retargeted=!1,s.plan==="linger"?(s.phaseUntil=i+It(u,a.wideMin,a.wideMax)*(1.15+u()*.7),s.plan="basic"):p($)}else if(s.phase==="notice"&&i>=s.reactUntil)s.phase="snap",s.phaseUntil=i+I(.28/a.snap,.12,.85);else if(s.phase==="snap"&&i>=s.phaseUntil)if(s.plan==="medium"&&!s.mediumDone)s.mediumDone=!0,s.phase="notice",s.reactUntil=i+It(h,a.reactMin,a.reactMax)*.55;else{s.phase="track",s.trackStart=i;const $=It(u,a.followMin,a.followMax);s.phaseUntil=i+(s.plan==="abort"?$*(.28+u()*.28):$)}else if(s.phase==="track"){const $=Math.max(.01,s.phaseUntil-s.trackStart);if(s.plan==="retarget"&&!s.retargeted&&e.length>1&&i>=s.trackStart+$*.42){const x=Dn(e,s.subject,a.select,h,s.prev,l);x!==s.subject&&x>=0&&(s.retargeted=!0,s.plan="basic",p(x,.55))}else s.plan==="nudge"&&!s.nudged&&i>s.phaseUntil-.8&&(s.nudged=!0);s.phase==="track"&&i>=s.phaseUntil&&(s.phase="return",s.phaseUntil=i+I(.32/a.snap,.14,.9),s.lastSubject=s.subject)}else s.phase==="return"&&i>=s.phaseUntil&&(s.phase="wide",s.subject=-1,s.cycle+=1,s.phaseUntil=i+It(u,a.wideMin,a.wideMax),s.plan="basic");const m=$n(e,s.subject)??f,g=1;let y=c.x*.22,w=c.y*.22,v=g,T=0;if(m&&(s.phase==="notice"||s.phase==="snap"||s.phase==="track")){y=m.x+s.errX,w=m.y+s.errY;const $=s.phase==="snap"&&s.plan==="medium"&&!s.mediumDone;v=s.phase==="notice"?Ue(s.zoom,1.04,.15):ac(m,a.zoom,$),s.nudged&&s.phase==="track"&&(v*=1.12),T=Math.atan2(w-s.lookY,y-s.lookX)*.045}else s.phase==="return"&&(y=c.x*.18,w=c.y*.18,v=g,T=0);const _=s.phase==="snap"||s.phase==="return"?1.15+a.snap*1.35:1,E=s.phase==="notice"?.38:1,M=1-I(s.lag*2.4,0,.55),A=(.08+a.tight*.22)*(.45+a.precision*.7)*_*E*M,P=.18+a.precision*.22+a.tight*.12;nc(s,y,w,v,T,l,A,P);const H=I(s.zoom,1,4.2);if(!a.focusOn)s.heldFocus=H;else{const $=1-Math.exp(-l*(.35+a.focusSpeed*1.8));s.heldFocus=Ue(s.heldFocus,H,$)}if(a.feel==="handheld"){const $=$t(s.velX,s.velY)+Math.abs(s.velZ)*.08;s.handX=Ue(s.handX,-s.velX*.05-$*.01,1-Math.exp(-l*3.2)),s.handY=Ue(s.handY,-s.velY*.05,1-Math.exp(-l*3.2)),s.handR=Ue(s.handR,-s.velR*.4,1-Math.exp(-l*2.6))}else s.handX=Ue(s.handX,0,1-Math.exp(-l*8)),s.handY=Ue(s.handY,0,1-Math.exp(-l*8)),s.handR=Ue(s.handR,0,1-Math.exp(-l*8));return s.prev=e.map($=>({id:$.id,x:$.x,y:$.y,px:$.px})),s}function rc(t,e){const i=I(t.zoom,1,4.2),a=e.focusOn?I(Math.abs(t.heldFocus-i)*e.focusError*.9,0,1):0;return{x:t.lookX+(e.feel==="handheld"?t.handX:0),y:t.lookY+(e.feel==="handheld"?t.handY:0),zoom:I(t.zoom,1,4.4),rot:t.rot+(e.feel==="handheld"?t.handR:0),focus:a}}function lc(t,e){return{x:(t.x-e.x)*e.zoom,y:(t.y-e.y)*e.zoom,px:t.px*e.zoom,rot:t.rot+e.rot}}const Wn=["heraldry","wallpaper","giants","shower"],St=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],jn=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"],cc=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Eo(t){return!!t&&cc.includes(t)}const ii={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES",field:"FIELD"};function Ae(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Bt(t){return St.includes(t)?t:"sailor"}function Vn(t){return jn.includes(t)?t:"rush"}const uc=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function fc(t){return!!t&&uc.includes(t)}const Gn=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"];function Mo(t){return Gn[(t>>>0)%Gn.length]}function ai(t){return I(t??1,.35,1.2)}function oi(t){return I(t??1,.2,2.2)}function ni(t){return I(t??.7,.12,2)}function si(t){return I(t??1,.2,2)}function ri(t){return I(t??.72,.12,1)}const Ga=["off","dragon","dog","ferret","caterpillar","zebra"],Kn={off:"Off",dragon:"Dragon",dog:"Dog",ferret:"Ferret",caterpillar:"Caterpillar",zebra:"Zebra"};function li(t){return Ga.includes(t)?t:"off"}function dc(t){return Math.max(11,Math.min(18,Math.round(14*I(t??1,.35,2))))}function hc(t,e){if(t==="off"||e<4)return[];if(t==="caterpillar"){const o=[];for(let n=1;n<e-1;n++)o.push({role:"nub",attach:n,side:-1}),o.push({role:"nub",attach:n,side:1});return o}const i=Math.max(1,Math.round((e-1)*.22)),a=Math.max(i+2,Math.round((e-1)*.62));return[{role:"leg",attach:i,side:-1},{role:"leg",attach:i,side:1},{role:"leg",attach:a,side:-1},{role:"leg",attach:a,side:1}]}function Ka(t,e,i,a){const o=me(t)*Math.PI*2,n=I(i,.2,2),s=I(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),f=e*(.45+r*1.55),d=(Xe,Ne,b)=>(Xe+Ne*n)*(.42+.58*(.5+.5*Math.sin(b))),h=.84+.22*Math.sin(l+.4),u=.8+.24*Math.cos(l*.87+1.1),p=.7+.32*Math.sin(l*.61+2.2),m=(.2+.12*n)*h,g=d(.04,.07,c+.3)*(.4+s*.6),y=d(.02,.08,f+1.4)*(.18+r*.95),w=d(.01,.06,f*1.3+.8)*r,v=d(.006,.035,c*1.6+2.1)*r*r,T=(.17+.11*n)*u,_=d(.035,.065,c+1.7)*(.4+s*.6),E=d(.02,.07,f+.6)*(.18+r*.95),M=d(.01,.055,f*1.2+2.4)*r,A=d(.006,.03,c*1.4+.5)*r*r,P=(.13+.11*n)*p,H=d(.04,.08,c+2)*(.45+s*.55),$=d(.02,.07,f+1.9)*(.18+r*.95),x=d(.012,.055,f*.9+.2)*r;let R=Math.cos(o+l*.18)*m+Math.cos(2*o+c*.14+.7)*g+Math.sin(3*o+l*.11+1.2)*y+Math.cos(4*o+f*.09+.4)*w+Math.sin(5*o+c*.16+2.2)*v,k=Math.sin(o+l*.15+.5)*T+Math.sin(2*o+c*.19+1.4)*_+Math.cos(3*o+l*.09+.3)*E+Math.sin(4*o+f*.12+1.8)*M+Math.cos(5*o+c*.08+.9)*A,U=Math.sin(o+l*.12+1.1)*P+Math.cos(2*o+c*.17+.6)*H+Math.sin(3*o+f*.1+2.5)*$+Math.cos(4*o+l*.13+1.6)*x;const X=Math.sin(2*o+c*.22)*r*.12*n;U+=X;const L=l*.19+Math.sin(c*.27)*.55,ne=Math.sin(l*.29+.8)*(.28+.18*n),V=Math.cos(l*.23+1.5)*(.2+r*.4),ae=Math.cos(L),N=Math.sin(L),O=R*ae-U*N,se=R*N+U*ae,ie=Math.cos(ne),Q=Math.sin(ne),we=k*ie-se*Q,Pe=k*Q+se*ie,fe=Math.cos(V),pe=Math.sin(V),Me=O*fe-we*pe,_e=O*pe+we*fe;return{x:Me+Math.sin(l*.47)*.06*n,y:_e+Math.cos(l*.39+1.3)*.05*n,z:Pe+Math.sin(c*.21+.6)*.07*n}}function at(t,e=1){return(t>40?t/60:2)*e}function mc(t,e,i=1,a=0){return me((t-a)*at(e,i))}function pc(t,e,i=1,a=0){const o=Math.cos(mc(t,e,i,a)*Math.PI*2);return o>0?o*o:0}function Xn(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*at(e,i))}function Xa(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function Zn(t,e){return e&&jn.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const ci=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],Po={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function gc(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const vc={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},Qn={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},Yn={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},ui=256;function Jn(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function $e(t,e){return e[Math.floor(t()*e.length)%e.length]}function es(t,e){return t()<.32?e:$e(t,ci)}function bc(t,e="rush"){return e==="tunnel"?Qn[t]:e==="lattice"?Yn[t]:vc[t]}function yc(t,e,i,a){const o=bc(a,e==="bloom"?"rush":e);let n=$e(t,o);e==="lattice"&&t()<.4&&(n=$e(t,Yn[a])),e==="tunnel"&&t()<.28&&(n=$e(t,Qn[a]));const s=es(t,i);let r=es(t,i);return r===s&&(r=$e(t,ci)),{kind:n,pattern:t()<.58?"plain":$e(t,["polka","hoop","half","bar"]),a:s,b:r,mirror:t()>.5}}function wc(t){return t>.5?I((t-.5)/.5,0,1):0}function kc(t,e,i,a=0){const o=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*n)*11+5>>>0)%o}function fi(t){return I(t??1,.5,2)}function di(t){return I(t??1,.35,2)}function Tc(t,e,i="sailor",a){const o=Se(t>>>0),n=240,s=a&&a!==i?a:null,r=[];for(let l=0;l<n;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",f=s&&l&1?s:i;r.push({x:o(),y:o(),z:o(),rot:(o()-.5)*.55,size:.55+o()*.9,vx:(o()-.5)*.06,vy:(o()-.35)*.08,vr:(o()-.5)*.25,charge:yc(o,c,e,f)})}return r}function _c(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function ts(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,o=e&255;return(.22*i+.7*a+.08*o)/255}function is(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const o=i.a,n=i.b,s=a*2.4;if(t.fillStyle=o,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=ts(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function Ao(t,e,i,a=.42){for(let o=0;o<i*2;o++){const n=o%2===0?e:e*a,s=o*Math.PI/i-Math.PI/2,r=Math.cos(s)*n,l=Math.sin(s)*n;o===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function Sc(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function xc(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function as(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Cc(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Ec(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function Mc(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Pc(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,o=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*o,-Math.cos(a)*o*.85)}t.closePath()}function Ac(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function Fc(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function Ic(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Bc(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Rc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function zc(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function Oc(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Hc(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function Lc(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function Nc(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function Uc(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function qc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function Dc(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function $c(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function Wc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function jc(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function Vc(t,e){Ao(t,e,8,.55)}function Gc(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function Kc(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function Xc(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function Zc(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Qc(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function Yc(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Jc(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function e0(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function t0(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function i0(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function a0(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function o0(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function n0(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function s0(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),as(t,e*.72)}function r0(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function l0(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function c0(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function u0(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function f0(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function d0(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function h0(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function m0(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function p0(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function g0(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function v0(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function b0(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function y0(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function w0(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function k0(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function T0(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function _0(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function S0(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function x0(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function C0(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function E0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function M0(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function P0(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function A0(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function F0(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function I0(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function B0(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function R0(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function z0(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function O0(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function H0(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function L0(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function N0(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function U0(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function q0(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function D0(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function $0(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function W0(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function j0(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function V0(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function G0(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function K0(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function X0(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function Z0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function Q0(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function Y0(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function J0(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function eu(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function tu(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function iu(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function au(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function ou(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function nu(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function su(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function ru(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function lu(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function cu(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function uu(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function fu(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function du(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function hu(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function mu(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function pu(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function gu(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function vu(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function bu(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function yu(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function wu(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function ku(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function Tu(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function _u(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function Su(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function xu(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function Cu(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function Eu(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function Mu(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function Pu(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function Au(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function Fu(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function Iu(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function Bu(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function Ru(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function zu(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function Ou(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function Hu(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function Lu(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function Nu(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function Uu(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function qu(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function Du(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function $u(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function Wu(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function ju(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function Vu(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function Gu(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function Ku(t,e){Ao(t,e*.72,4,.32)}function Xu(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function Zu(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function Qu(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function Yu(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function Ju(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function ef(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function tf(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function af(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function of(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function nf(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function sf(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function rf(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function lf(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function cf(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function uf(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function ff(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function df(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function hf(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function mf(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function pf(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function gf(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function vf(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function bf(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function yf(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function wf(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function kf(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function Tf(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function _f(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Sf(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function xf(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function Cf(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function Ef(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function Mf(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function Pf(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function Af(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function Ff(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function If(t,e){t.moveTo(-e*.7,0),t.quadraticCurveTo(-e*.58,-e*.58,0,-e*.52),t.quadraticCurveTo(e*.58,-e*.58,e*.7,0),t.quadraticCurveTo(e*.58,e*.58,0,e*.52),t.quadraticCurveTo(-e*.58,e*.58,-e*.7,0),t.closePath()}function Bf(t,e){t.moveTo(-e*.82,0),t.quadraticCurveTo(-e*.45,-e*.55,e*.08,-e*.32),t.lineTo(e*.98,-e*.12),t.lineTo(e*.62,e*.06),t.lineTo(e*.88,e*.38),t.lineTo(e*.22,e*.22),t.quadraticCurveTo(-e*.2,e*.52,-e*.82,0),t.closePath(),t.moveTo(-e*.02,-e*.3),t.lineTo(e*.18,-e*.98),t.lineTo(e*.38,-e*.22),t.closePath(),t.moveTo(-e*.38,-e*.28),t.lineTo(-e*.18,-e*.88),t.lineTo(e*.08,-e*.2),t.closePath()}function Rf(t,e){t.moveTo(-e*.42,e*.18),t.quadraticCurveTo(-e*.35,-e*.28,e*.22,-e*.2),t.quadraticCurveTo(e*.62,-e*.06,e*.95,e*.16),t.quadraticCurveTo(e*.9,e*.42,e*.4,e*.42),t.quadraticCurveTo(0,e*.5,-e*.42,e*.18),t.closePath(),t.moveTo(-e*.12,-e*.08),t.quadraticCurveTo(-e*.85,-e*.42,-e*.98,e*.42),t.quadraticCurveTo(-e*.48,e*.48,0,e*.08),t.closePath(),t.moveTo(e*.12,-e*.16),t.quadraticCurveTo(-e*.22,-e*.95,-e*.72,-e*.22),t.quadraticCurveTo(e*.02,-e*.22,e*.22,.02*e),t.closePath()}function zf(t,e){t.moveTo(-e*.72,e*.08),t.quadraticCurveTo(-e*.52,-e*.4,-e*.02,-e*.3),t.quadraticCurveTo(e*.48,-e*.1,e*.98,e*.08),t.quadraticCurveTo(e*.48,e*.26,0,e*.3),t.quadraticCurveTo(-e*.48,e*.4,-e*.72,e*.08),t.closePath(),t.moveTo(-e*.22,-e*.26),t.lineTo(-e*.32,-e*.7),t.lineTo(0,-e*.26),t.closePath(),t.moveTo(e*.06,-e*.2),t.lineTo(e*.04,-e*.6),t.lineTo(e*.24,-e*.16),t.closePath()}function Of(t,e){t.arc(e*.06,e*.08,e*.62,0,Math.PI*2),t.moveTo(-e*.04,-e*.46),t.quadraticCurveTo(-e*.32,-e*.95,-e*.55,-e*.52),t.quadraticCurveTo(-e*.2,-e*.6,e*.02,-e*.38),t.closePath(),t.moveTo(e*.28,-e*.46),t.quadraticCurveTo(e*.42,-e*.98,e*.68,-e*.5),t.quadraticCurveTo(e*.38,-e*.56,e*.22,-e*.36),t.closePath()}function Hf(t,e){t.moveTo(-e*.58,e*.1),t.quadraticCurveTo(-e*.4,-e*.42,e*.12,-e*.22),t.quadraticCurveTo(e*.58,0,e*.98,e*.16),t.quadraticCurveTo(e*.55,e*.4,e*.08,e*.38),t.quadraticCurveTo(-e*.38,e*.38,-e*.58,e*.1),t.closePath(),t.moveTo(-e*.08,-e*.2),t.lineTo(-e*.22,-e*.95),t.lineTo(e*.14,-e*.18),t.closePath(),t.moveTo(e*.16,-e*.14),t.lineTo(e*.22,-e*.88),t.lineTo(e*.42,-e*.1),t.closePath()}function Lf(t,e){t.moveTo(e*.92,-e*.16),t.quadraticCurveTo(e*.15,-e*.3,-e*.32,-e*.1),t.lineTo(-e*.95,-e*.42),t.lineTo(-e*.52,0),t.lineTo(-e*.95,e*.42),t.lineTo(-e*.32,e*.1),t.quadraticCurveTo(e*.15,e*.3,e*.92,e*.16),t.closePath()}function Nf(t,e){t.moveTo(e*.88,-e*.1),t.quadraticCurveTo(e*.18,-e*.55,-e*.35,-e*.52),t.quadraticCurveTo(-e*.95,-e*.12,-e*.52,e*.22),t.quadraticCurveTo(-e*.12,e*.4,e*.48,e*.12),t.quadraticCurveTo(e*.75,e*.04,e*.88,e*.1),t.closePath()}function Uf(t,e){t.moveTo(e*.95,-e*.2),t.quadraticCurveTo(e*.12,-e*.48,-e*.55,-e*.2),t.quadraticCurveTo(-e*.98,0,-e*.55,e*.2),t.quadraticCurveTo(e*.12,e*.48,e*.95,e*.2),t.closePath()}function qf(t,e){t.moveTo(e*.88,0),t.quadraticCurveTo(e*.68,-e*.5,e*.08,-e*.46),t.quadraticCurveTo(-e*.52,-e*.52,-e*.82,-e*.06),t.lineTo(-e*.98,-e*.4),t.lineTo(-e*.68,0),t.lineTo(-e*.98,e*.4),t.lineTo(-e*.82,e*.06),t.quadraticCurveTo(-e*.52,e*.52,e*.08,e*.46),t.quadraticCurveTo(e*.68,e*.5,e*.88,0),t.closePath()}function Df(t,e){t.moveTo(e*.92,-e*.08),t.quadraticCurveTo(e*.18,-e*.16,-e*.22,-e*.06),t.lineTo(-e*.85,-e*.4),t.lineTo(-e*.52,0),t.lineTo(-e*.9,e*.36),t.lineTo(-e*.22,e*.08),t.quadraticCurveTo(e*.18,e*.16,e*.92,e*.08),t.closePath()}function $f(t,e){t.moveTo(-e*.95,-e*.2),t.quadraticCurveTo(-e*.15,e*.28,e*.28,-e*.12),t.quadraticCurveTo(e*.68,-e*.38,e*.98,e*.28),t.quadraticCurveTo(e*.48,e*.52,e*.08,e*.22),t.quadraticCurveTo(-e*.38,e*.62,-e*.92,e*.24),t.closePath()}function Wf(t,e){t.moveTo(-e*.68,-e*.2),t.quadraticCurveTo(e*.12,-e*.52,e*.85,0),t.quadraticCurveTo(e*.12,e*.52,-e*.68,e*.2),t.closePath()}function jf(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":Ao(t,i,5,e==="starfish"?.42:.4);break;case"heart":Sc(t,i);break;case"moon":xc(t,i);break;case"figure":as(t,i);break;case"fish":Cc(t,i);break;case"anchor":Ec(t,i);break;case"wave":Mc(t,i);break;case"shell":Pc(t,i);break;case"boat":Ac(t,i);break;case"tail":Fc(t,i);break;case"swallow":Ic(t,i);break;case"elephant":Bc(t,i);break;case"tent":Rc(t,i);break;case"ball":zc(t,i);break;case"bow":Oc(t,i);break;case"horse":Hc(t,i);break;case"balloon":Lc(t,i);break;case"ticket":Nc(t,i);break;case"pear":Uc(t,i);break;case"lemon":qc(t,i);break;case"cherry":Dc(t,i);break;case"leaf":$c(t,i);break;case"mushroom":Wc(t,i);break;case"flower":jc(t,i);break;case"sun":Vc(t,i);break;case"cloud":Gc(t,i);break;case"bolt":Kc(t,i);break;case"umbrella":Xc(t,i);break;case"bird":Zc(t,i);break;case"tree":Qc(t,i);break;case"deer":Yc(t,i);break;case"fox":Jc(t,i);break;case"owl":e0(t,i);break;case"acorn":t0(t,i);break;case"cone":i0(t,i);break;case"mountain":a0(t,i);break;case"drop":o0(t,i);break;case"moth":n0(t,i);break;case"wingfig":s0(t,i);break;case"swan":r0(t,i);break;case"cat":l0(t,i);break;case"crown":c0(t,i);break;case"key":u0(t,i);break;case"ring":f0(t,i);break;case"envelope":d0(t,i);break;case"potion":h0(t,i);break;case"rocket":p0(t,i);break;case"planet":g0(t,i);break;case"saturn":v0(t,i);break;case"ufo":b0(t,i);break;case"comet":y0(t,i);break;case"satellite":w0(t,i);break;case"lolly":k0(t,i);break;case"coneice":T0(t,i);break;case"cupcake":_0(t,i);break;case"donut":S0(t,i);break;case"candy":x0(t,i);break;case"note":C0(t,i);break;case"vinyl":E0(t,i);break;case"headphone":M0(t,i);break;case"mic":P0(t,i);break;case"speaker":A0(t,i);break;case"crab":F0(t,i);break;case"helm":I0(t,i);break;case"lighthouse":B0(t,i);break;case"compass":R0(t,i);break;case"popcorn":z0(t,i);break;case"cane":O0(t,i);break;case"mask":H0(t,i);break;case"apple":L0(t,i);break;case"banana":N0(t,i);break;case"grape":U0(t,i);break;case"rabbit":q0(t,i);break;case"snail":D0(t,i);break;case"fern":$0(t,i);break;case"rose":W0(t,i);break;case"diamond":j0(t,i);break;case"candle":V0(t,i);break;case"alien":G0(t,i);break;case"asteroid":K0(t,i);break;case"telescope":X0(t,i);break;case"cookie":Z0(t,i);break;case"waffle":Q0(t,i);break;case"guitar":Y0(t,i);break;case"drum":J0(t,i);break;case"piano":eu(t,i);break;case"clef":tu(t,i);break;case"kettle":iu(t,i);break;case"mug":au(t,i);break;case"whisk":ou(t,i);break;case"toast":nu(t,i);break;case"egg":su(t,i);break;case"spoon":ru(t,i);break;case"chili":lu(t,i);break;case"bottle":cu(t,i);break;case"rain":uu(t,i);break;case"flake":fu(t,i);break;case"wind":du(t,i);break;case"rainbow":hu(t,i);break;case"thermo":mu(t,i);break;case"taxi":pu(t,i);break;case"hydrant":gu(t,i);break;case"bike":vu(t,i);break;case"lamp":bu(t,i);break;case"signal":yu(t,i);break;case"bus":wu(t,i);break;case"stick":ku(t,i);break;case"dice":Tu(t,i);break;case"coin":_u(t,i);break;case"pawn":Su(t,i);break;case"cart":xu(t,i);break;case"flag":Cu(t,i);break;case"buoy":Eu(t,i);break;case"hook":Mu(t,i);break;case"porthole":Pu(t,i);break;case"oar":Au(t,i);break;case"hoop":Fu(t,i);break;case"unicycle":Iu(t,i);break;case"lion":Bu(t,i);break;case"topper":Ru(t,i);break;case"orange":zu(t,i);break;case"peach":Ou(t,i);break;case"berry":Hu(t,i);break;case"melon":Lu(t,i);break;case"pineapple":Nu(t,i);break;case"pine":Uu(t,i);break;case"hedgehog":qu(t,i);break;case"nest":Du(t,i);break;case"toadstool":$u(t,i);break;case"locket":Wu(t,i);break;case"dove":ju(t,i);break;case"kiss":Vu(t,i);break;case"rover":Gu(t,i);break;case"spark":Ku(t,i);break;case"astro":Xu(t,i);break;case"pretzel":Zu(t,i);break;case"sundae":Qu(t,i);break;case"choco":Yu(t,i);break;case"sax":Ju(t,i);break;case"trumpet":ef(t,i);break;case"amp":tf(t,i);break;case"fork":af(t,i);break;case"pan":of(t,i);break;case"chefhat":nf(t,i);break;case"tornado":sf(t,i);break;case"subway":rf(t,i);break;case"mailbox":lf(t,i);break;case"skyline":cf(t,i);break;case"ghostie":uf(t,i);break;case"pixel":ff(t,i);break;case"joystick":df(t,i);break;case"shroomup":hf(t,i);break;case"invader":mf(t,i);break;case"skull":pf(t,i);break;case"bat":gf(t,i);break;case"pumpkin":vf(t,i);break;case"tomb":bf(t,i);break;case"cauldron":yf(t,i);break;case"web":wf(t,i);break;case"trophy":kf(t,i);break;case"whistle":Tf(t,i);break;case"jersey":_f(t,i);break;case"skate":Sf(t,i);break;case"goal":xf(t,i);break;case"pencil":Cf(t,i);break;case"book":Ef(t,i);break;case"globe":Mf(t,i);break;case"backpack":Pf(t,i);break;case"ruler":Af(t,i);break;case"bell":Ff(t,i);break;case"aBody":If(t,i);break;case"aLeg":$f(t,i);break;case"aNub":Wf(t,i);break;case"aDragHead":Bf(t,i);break;case"aDragTail":Lf(t,i);break;case"aDogHead":Rf(t,i);break;case"aDogTail":Nf(t,i);break;case"aFerrHead":zf(t,i);break;case"aFerrTail":Uf(t,i);break;case"aCatpHead":Of(t,i);break;case"aCatpTail":qf(t,i);break;case"aZebrHead":Hf(t,i);break;case"aZebrTail":Df(t,i);break;default:m0(t,i);break}}function os(t,e,i){const a=(o,n,s)=>{t.beginPath(),t.arc(o,n,s,0,Math.PI*2),t.fill()};t.fillStyle=ts(e.a)>.55?"#141414":"#f6f1e6",e.kind==="aDragHead"&&a(i*.18,-i*.04,i*.08),e.kind==="aDogHead"&&a(i*.28,0,i*.075),e.kind==="aFerrHead"&&a(i*.08,-i*.02,i*.055),e.kind==="aCatpHead"&&(a(-i*.08,i*.02,i*.07),a(i*.22,i*.02,i*.07)),e.kind==="aZebrHead"&&a(i*.12,-i*.02,i*.06),e.kind==="aBody"&&e.pattern==="bar"&&(t.beginPath(),t.moveTo(0,-i*.16),t.lineTo(i*.14,0),t.lineTo(0,i*.16),t.lineTo(-i*.14,0),t.closePath(),t.fill())}function Vf(t,e,i){const a=()=>jf(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),is(t,a,e,i),os(t,e,i),t.restore();return}is(t,a,e,i),os(t,e,i)}function Gf(t){const e=document.createElement("canvas");e.width=ui,e.height=ui;const i=e.getContext("2d");return i&&(i.translate(ui/2,ui/2),Vf(i,t,ui*.38)),e}const Kf={dragon:{a:"#2a7a38",b:"#e8b830",pattern:"bar"},dog:{a:"#c9922e",b:"#f2d98a",pattern:"half"},ferret:{a:"#c49a62",b:"#f0e2c4",pattern:"half"},caterpillar:{a:"#5aa84a",b:"#e8c840",pattern:"hoop"},zebra:{a:"#f4f4f4",b:"#141414",pattern:"stripe"}};function ns(t,e){const i=Kf[t];return{kind:e==="body"?"aBody":e==="leg"?"aLeg":e==="nub"?"aNub":e==="head"?t==="dragon"?"aDragHead":t==="dog"?"aDogHead":t==="ferret"?"aFerrHead":t==="caterpillar"?"aCatpHead":"aZebrHead":t==="dragon"?"aDragTail":t==="dog"?"aDogTail":t==="ferret"?"aFerrTail":t==="caterpillar"?"aCatpTail":"aZebrTail",pattern:e==="leg"||e==="nub"?"plain":i.pattern,a:i.a,b:i.b,mirror:!1}}function Xf(t){return Math.atan2(Math.sin(t),Math.cos(t))}function Fo(t,e,i,a,o,n){const s=Ka(t,e,i,a),r=Ka(me(t+o),e,i,a),l=Math.max(.42,1.05-s.z*.55),c=Math.max(.42,1.05-r.z*.55),f=s.x/l,d=s.y/l,h=Math.atan2(r.y/c-d,r.x/c-f),u=I(1.12/l,.55,1.85);return{x:f,y:d,rot:h,ux:Math.cos(h),uy:Math.sin(h),nx:-Math.sin(h),ny:Math.cos(h),px:I((.072+n*.028)*u,.05,.24),alpha:I(.52+u*.42,.5,1)}}function Zf(t,e,i,a,o){const n=dc(o),s=.72/n,r=e==="caterpillar"?1.08:1,l=[];for(let c=0;c<n;c++){const f=me(i*a.travel*.14-c*s),d=i*a.morph,h=c===0?1.05:c===n-1?.78:.48*r;l.push(Fo(f,d,a.vary,a.smooth,s,h))}for(const c of hc(e,n)){const f=l[c.attach],d=c.role==="nub"?.07:.13,h=me((i-d)*a.travel*.14-c.attach*s),u=Fo(h,(i-d)*a.morph,a.vary,a.smooth,s,.55),p=f.x-u.x,m=f.y-u.y,g=c.role==="nub"?.038:.09,y=c.role==="nub"?.32:.7,w=c.role==="nub"?.008:.024,v=f.x+f.nx*c.side*g-p*y,T=f.y+f.ny*c.side*g-m*y+w;t(ns(e,c.role),{x:v,y:T,px:I(f.px*(c.role==="nub"?.55:.92),.04,.18),rot:Math.atan2(T-f.y,v-f.x),alpha:f.alpha*.94})}for(let c=n-1;c>=0;c--){const f=c===0?"head":c===n-1?"tail":"body";let d=l[c].x,h=l[c].y,u=l[c].rot;if(f==="tail"){const p=me((i-.14)*a.travel*.14-(n-1)*s),m=Fo(p,(i-.14)*a.morph,a.vary,a.smooth,s,.78),g=l[c].x-m.x,y=l[c].y-m.y;d-=g*.55,h-=y*.55,u+=Xf(l[c].rot-m.rot)*.85}t(ns(e,f),{x:d,y:h,px:l[c].px*(f==="head"?1.28:f==="tail"?1.18:1),rot:u,alpha:l[c].alpha})}}class Qf{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;agents=null;hunt=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=_c(e);let a=this.stamps.get(i);return a||(a=Gf(e),this.stamps.set(i,a)),a}ensure(e,i,a,o){const n=o&&o!==a?o:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===n&&this.particles.length||(this.particles=Tc(e,i,a,n||null),this.stamps.clear(),this.sim=null,this.agents=null,this.hunt=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=n)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const o=this.canvas.getContext("2d",{alpha:!1});if(!o)return this.canvas;const n=Bt(e.kit),s=e.kitB?Bt(e.kitB):null,r=Jn(e.paper,td(n,e.seed)),l=Jn(e.ink,Po[n]);this.ensure(e.seed>>>0,l,n,s);const c=Zn(e.generator,e.move),f=I(e.audio,0,1),d=I(e.bass,0,1),h=I(e.beat,0,1),u=e.bpm>40?e.bpm:0,p=fi(e.scale),m=di(e.density),g=ai(e.pace),y={travel:oi(e.chainTravel),morph:ni(e.chainMorph),vary:si(e.chainVary),smooth:ri(e.chainSmooth)},w=li(e.chainAnimal);ed(o,i,a,r,n,e.time,e.seed,h,d,!!e.night,l),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high";const v=e.beatOffset??0,T=e.time,_=Eo(c)&&u>40&&v>.001?Math.max(0,T-v):T,E=_*g,M=i/Math.max(a,1),A=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Eo(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"||c==="braid"?130:c==="tunnel"||c==="well"?120:c==="hall"?148:c==="bloom"||c==="gyre"||c==="drift"||c==="sway"?140:c==="chain"?40:ei(c)?200:Co(c)?42:this.particles.length,P=Math.max(8,Math.min(this.particles.length,Math.round(A*m))),H=c==="prism"?3:1;if(ei(c)){const X=xl({fieldStrength:e.fieldStrength,fieldScale:e.fieldScale,fieldEvolve:e.fieldEvolve,density:e.fieldDensity,densityScale:e.fieldDensityScale,densityEvolve:e.fieldDensityEvolve,flow:e.fieldFlow,curl:e.fieldCurl,flowScale:e.fieldFlowScale,attract:e.fieldAttract,repel:e.fieldRepel,radius:e.fieldRadius,inertia:e.fieldInertia,damp:e.fieldDamp,maxV:e.fieldMaxV,scaleAmp:e.fieldScaleAmp,minScale:e.fieldMinScale,maxScale:e.fieldMaxScale,perturb:e.fieldPerturb,warp:e.fieldWarp,sparsity:e.fieldSparsity,contrast:e.fieldContrast,motion:e.fieldMotion});this.agents=Ul(this.agents,this.particles.slice(0,P),_,X),this.sim=null}else if(Co(c)){this.agents=null;const X=$l({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=Yl(this.sim,c,this.particles.slice(0,P),_,X)}else this.agents=null,this.sim=null;const $=c==="spot"?.34:ei(c)?.5:fc(c)||c==="chain"?.26:.22,x=(X,L,ne)=>{const V=ne?{...L,...lc(L,ne)}:L,ae=Math.min(V.px*p,ne?.72:$)*Math.min(i,a);if(ae<5)return;const N=(.5+V.x)*i,O=(.5+V.y/M)*a;for(let se=0;se<H;se++){o.save();const ie=H>1?(se-1)*ae*.09:0,Q=H>1?se===2?ae*.06:se===0?-ae*.03:0:0;if(N+ie<-ae||O+Q<-ae||N+ie>i+ae||O+Q>a+ae){o.restore();continue}o.translate(N+ie,O+Q),o.rotate(V.rot+(H>1?se*.1:0)),L.flip!=null&&o.scale(L.flip,1),L.squash&&o.scale(L.squash,1/Math.max(.35,L.squash)),L.glow&&(o.globalAlpha=L.alpha*.32*L.glow,o.fillStyle=L.tint??l,o.beginPath(),o.arc(0,0,ae*(.4+L.glow*.16),0,Math.PI*2),o.fill()),o.globalAlpha=L.alpha*(H>1?.72:1),o.drawImage(X,-ae/2,-ae/2,ae,ae),o.restore()}},R=[],k=(X,L)=>{R.push({stamp:X,pose:L})};if(c==="chain"&&w!=="off")Zf((X,L)=>k(this.stamp(X),L),w,_,y,m);else for(let X=0;X<P;X++){const L=this.particles[X];let ne=ei(c)&&this.agents?ql(this.agents,X,L.size):Co(c)&&this.sim?Jl(this.sim,X,L.size):Yf(L,X,c,E,f,d,h,u,P,_,y);ne&&(ne.alpha<.04||(ei(c)&&h>.02&&(ne={...ne,glow:h*.38,squash:(ne.squash??1)*(1-h*.045),px:ne.px*(1+h*.07)}),k(this.stamp(L.charge),ne)))}let U;if(ti(e.camera)==="hunt"){const X=ec({huntWideMin:e.huntWideMin,huntWideMax:e.huntWideMax,huntFollowMin:e.huntFollowMin,huntFollowMax:e.huntFollowMax,huntSnap:e.huntSnap,huntZoom:e.huntZoom,huntTight:e.huntTight,huntReactMin:e.huntReactMin,huntReactMax:e.huntReactMax,huntPrecision:e.huntPrecision,huntSelect:e.huntSelect,huntFocus:e.huntFocus,huntFocusSpeed:e.huntFocusSpeed,huntFocusError:e.huntFocusError,huntVariation:e.huntVariation,cameraFeel:e.cameraFeel});this.hunt=sc(this.hunt,R.map((L,ne)=>({id:ne,x:L.pose.x,y:L.pose.y,px:L.pose.px})),_,X,e.seed>>>0),U=rc(this.hunt,X),U.focus>.03&&(o.filter=`blur(${(1.1+U.focus*2.4).toFixed(2)}px)`)}else this.hunt=null;for(const X of R)x(X.stamp,X.pose,U);return o.filter="none",(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&h>.04&&(o.save(),o.translate(i*.5,a*.5),o.strokeStyle=We(l,"#fff4d8",.72),o.globalAlpha=.18+h*.42,o.lineWidth=2.6+h*6,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.16+h*.2),0,Math.PI*2),o.stroke(),o.globalAlpha=.1+h*.22,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.3+h*.18),0,Math.PI*2),o.stroke(),o.restore()),this.canvas}}function me(t){return(t%1+1)%1}function Io(t,e,i){const a=Math.cos(i),o=Math.sin(i);return{x:t*a-e*o,y:t*o+e*a}}function Wt(t,e=.28,i=2.55){const a=e+me(t)*i,o=e+i,n=I((o-a)/.3,0,1)*I((a-e)/.1,0,1);return n<=.001?null:{depth:a,fade:n}}function ss(t){const e=me(t);return e<.5?e*2:2-e*2}function Ie(t){return ss(t)-.5}function Yf(t,e,i,a,o,n,s,r,l=48,c=a,f){const d=Eo(i),h=pc(c,r),u=I(Math.max(s*(d?.48:.85),h*(d?.72:.22)),0,1);if(i==="bounce"){const w=.11+Math.abs(t.vx)*2.4,v=.09+Math.abs(t.vy)*2.1;return{x:Ie(t.x+w*a),y:Ie(t.y+v*a*.92),px:I((.1+t.size*.07)*(1+u*.22),.08,.28),glow:u*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const w=a*(2.2+o*.25)+e*.55,v=Math.cos(w);return{x:Ie(t.x+t.vx*a*.45),y:Ie(t.y+t.vy*a*.38),px:I((.12+t.size*.06)*(1+u*.18),.08,.26),glow:u*.35,rot:t.rot+Math.sin(w)*.15,alpha:I(.28+Math.abs(v)*.72,.2,1),flip:v}}if(i==="glow"){const w=.45+.55*Math.sin(a*2.4+e*.7),v=I(w*.4+u*.55+n*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:I((.1+t.size*.08)*(.9+v*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:I(.5+v*.45,.35,1),glow:v}}if(i==="flash"){const w=.7+.3*Math.sin(a*5.2+e)+u*.12,v=ci[(Math.floor(a*3.2+e*3)>>>0)%ci.length];return{x:Ie(t.x+t.vx*a*.32),y:Ie(t.y+t.vy*a*.28),px:I((.11+t.size*.07)*(1+u*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:I(w,.4,1),glow:.16+u*.45,tint:v}}if(i==="hop"){const w=r>40?r/60:.85,v=me(a*w+t.z),T=Math.abs(Math.sin(v*Math.PI))*(.72+u*.45)+u*.14,_=Math.cos(v*Math.PI*2);return{x:Ie(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Ie(t.y)*.62-T*.2,px:I(.1+t.size*.07+T*.02,.08,.22),rot:t.rot+T*.55,alpha:1,flip:_}}if(i==="kick"){const w=.1+Math.abs(t.vx)*2.1,v=.08+Math.abs(t.vy)*1.8;return{x:Ie(t.x+w*a),y:Ie(t.y+v*a),px:I((.1+t.size*.07)*(1+u*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:u*.7}}if(i==="jelly"){const w=1+Math.sin(a*5.2+e)*.08+u*.2;return{x:Ie(t.x+t.vx*a*.5),y:Ie(t.y+t.vy*a*.42),px:I(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:w}}if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,M=(_+.5)/6-.5,A=Math.sin(a*1.7+_*.72+T*.18);return{x:E*.9+A*.07,y:M*.74+Math.sin(a*.82+_*.9)*.035,px:I(.085+t.size*.045+u*.05,.06,.2),rot:t.rot+A*.22,alpha:1,glow:u*.5}}if(i==="rings"){const v=e%4,T=Math.floor(e/4),_=12,E=v&1?-1:1,M=T/_*Math.PI*2+a*(.48+v*.08)*E,A=.14+v*.11;return{x:Math.cos(M)*A,y:Math.sin(M)*A*.88,px:I(.07+t.size*.035+u*.05,.05,.18),rot:M+t.rot*.25,alpha:.96,glow:u*.48}}if(i==="loom"){const w=a*1.05+t.x*Math.PI*2,v=a*1.45+t.y*Math.PI*2;return{x:Math.sin(w)*.4+Math.sin(v*.5)*.06,y:Math.sin(w*2+t.z*Math.PI)*.3,px:I(.08+t.size*.045+u*.05,.06,.2),rot:w*.18+t.rot,alpha:1,glow:u*.48}}if(i==="petal"){const v=e%6,T=Math.floor(e/6)/8,_=v/6*Math.PI*2+a*.34,E=.8+.2*Math.sin(a*1.25),M=(.1+T*.32)*E;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.9,px:I(.075+t.size*.04+u*.05,.055,.2),rot:_+Math.PI*.5,alpha:I(.42+E*.55,.4,1),glow:u*.5}}if(i==="flock"){const w=e%5,T=me(t.z+a*(.18+w*.02))*Math.PI*2+w*.32,_=.2+Math.sin(T*2+w)*.1+w*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:I(.075+t.size*.04+u*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:u*.48}}if(i==="wheel"){const v=e%3,E=Math.floor(e/3)/14*Math.PI*2+a*.58*(v===1?-1:1),M=.2+v*.12,A=.5+.5*Math.sin(E);return{x:Math.cos(E)*M,y:Math.sin(E)*M*.72,px:I((.075+t.size*.035)*(.78+A*.28)+u*.05,.05,.22),rot:E,alpha:I(.5+A*.45,.45,1),glow:u*.48}}if(i==="silk"){const w=e%4,v=w<2?1:-1,T=me(t.x+a*.14*v+w*.08),_=(w/3-.5)*.52+Math.sin(T*Math.PI*3+w)*.055;return{x:T-.5,y:_,px:I(.07+t.size*.038+u*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:u*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,M=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),A=I(M*(.42+o*.22+n*.2+h*.28),.18,1),P=.42-_/Math.max(5,1)*A*.82;return{x:E*.86,y:P,px:I(.075+t.size*.03+u*.03,.055,.18),rot:t.rot*.2,alpha:I(.45+(1-_/6)*.5+u*.15,.4,1),glow:u*.55,squash:1-u*.08}}if(i==="ripple"){const v=e%3,T=Math.floor(e/3),_=16,E=me(a*.32),M=.15+v*.145+E*.16+h*.05,A=T/_*Math.PI*2+a*.1;return{x:Math.cos(A)*M,y:Math.sin(A)*M*.88,px:I(.062+t.size*.024+u*.02,.048,.13),rot:A+t.rot*.2,alpha:I(.96-v*.08,.6,1),glow:u*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,E=r>40?r/60*Math.PI*2:5.4,M=T&1?-1:1,A=Math.sin(a*E+T*.85)*.82*M,P=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(A)*P,y:-.44+Math.cos(A)*P,px:I(.07+t.size*.03+u*.028,.05,.16),rot:A,alpha:1,glow:u*.4}}if(i==="burst"){const v=e%3,E=Math.floor(e/3)/16*Math.PI*2+a*.2*(v===1?-1:1),M=(.14+v*.13)*(1+h*.42);return{x:Math.cos(E)*M,y:Math.sin(E)*M*.9,px:I((.08+t.size*.035)*(1+u*.22),.055,.22),rot:E+t.rot*.2,alpha:I(.55+u*.4,.45,1),glow:u*.75,squash:1+u*.14}}if(i==="halo"){const v=e%2,E=Math.floor(e/2)/24*Math.PI*2+a*.26*(v?-1:1),M=.84+.16*Math.sin(a*1.15)+u*.2,A=(.26+v*.14)*M,P=I(.28+u*.65+n*.15,0,1);return{x:Math.cos(E)*A,y:Math.sin(E)*A*.9,px:I(.07+t.size*.032+P*.04,.05,.18),rot:E+Math.PI*.5,alpha:I(.5+P*.45,.4,1),glow:P}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,E=(T+.5)/16-.5,M=.09+o*.05+h*.08,A=E*Math.PI*3.4+a*2.15+_*.55;return{x:E*.92,y:(_-1)*.2+Math.sin(A)*M,px:I(.065+t.size*.03+u*.026,.05,.15),rot:Math.cos(A)*.32,alpha:1,glow:u*.45}}if(i==="drop"){const w=wc(s),v=w*w;return{x:t.x-.5,y:t.y-.5-v*.07,px:I((.1+t.size*.075)*(1+w*.9),.07,.44),glow:w*.95,rot:t.rot,alpha:1,squash:1-w*.2}}if(i==="spot"){const w=Math.max(8,l),v=kc(c,r,w),T=e===v,_=T?I(Math.max(s,u),0,1):0,E=e/w*Math.PI*2,M=.3;return{x:Math.cos(E)*M,y:Math.sin(E)*M*.78,px:I((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const w=at(r),v=Ie(t.x+(.16+Math.abs(t.vx)*.5)*c*w),T=Ie(t.y+(.13+Math.abs(t.vy)*.42)*c*w*.9),_=Math.min(.5-Math.abs(v),.5-Math.abs(T));return{x:v,y:T,px:I(.08+t.size*.04+u*.02,.06,.18),glow:(_<.065?.55:0)+u*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const v=Xn(c,r,2),T=Math.floor(e/16)%2,_=(e%16/16+v/16)*Math.PI*2*(T?-1:1),E=.26+T*.12;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.8,px:I(.07+t.size*.03+u*.02,.05,.16),rot:_,alpha:1,glow:u*.55}}if(i==="moire"){const w=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(w?-.78:.62),_=.2+w*.13+h*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:I(.065+t.size*.028+u*.018,.048,.14),rot:T+t.rot*.2,alpha:w?.78:1,glow:u*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,E=_&1?1:-1;return{x:(me((T+.5)/8+c*at(r)*.28*E)-.5)*.92,y:((_+.5)/6-.5)*.78,px:I(.07+t.size*.03+u*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:u*.42}}if(i==="zip"){const w=e%3,v=w===1?-1:1,T=1-h*.16;return{x:(me(t.x+c*at(r)*.34*v*T+w*.12)-.5)*.94,y:(w/2-.5)*.52,px:I(.07+t.size*.032+u*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:u*.4}}if(i==="ghost"){const w=(e&1)===0,v=w?0:1/at(r),T=t.x*Math.PI*2+(c-v)*at(r)*1.35,_=.3+Math.sin((c-v)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:I(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:w?1:.34,glow:w?u*.5:.12}}if(i==="poly"){const w=e&1,v=w?8:12,T=Math.floor(e/2)%v,_=w?3:4,E=T/v*Math.PI*2+c*at(r)*(_/4)*(w?-1:1),M=.2+w*.15;return{x:Math.cos(E)*M,y:Math.sin(E)*M*.84,px:I(.068+t.size*.03+u*.018,.05,.15),rot:E,alpha:1,glow:u*.45}}if(i==="fall"){const w=me(t.z+c*at(r,.5)),v=ss(w),T=v*v,_=v>.82?(v-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:I(.075+t.size*.035+u*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:u*.4,squash:1-_*.28}}if(i==="liss"){const w=at(r),v=c*w*Math.PI*2*1.5+t.x*6.2,T=c*w*Math.PI*2+t.y*5.4;return{x:Math.sin(v)*.4,y:Math.sin(T)*.32,px:I(.07+t.size*.032+u*.02,.05,.16),rot:v*.15+t.rot,alpha:1,glow:u*.42}}if(i==="snap"){const w=Xn(c,r,1)&1?1:-1,v=Math.floor(e/8)%5,T=e%8;return{x:w*(.2+T/7*.1),y:(v/4-.5)*.72,px:I(.072+t.size*.03+u*.025,.05,.16),rot:t.rot*.2+w*.08,alpha:1,glow:u*.6,squash:1-u*.1}}if(i==="chain"){const w=f?.travel??1,v=f?.morph??.7,T=f?.vary??1,_=f?.smooth??.72,M=.62/Math.max(8,l),A=me(c*w*.14-e*M),P=c*v,H=Ka(A,P,T,_),$=Ka(me(A+M),P,T,_),x=Math.max(.42,1.05-H.z*.55),R=Math.max(.42,1.05-$.z*.55),k=H.x/x,U=H.y/x,X=Math.atan2($.y/R-U,$.x/R-k),L=I(1.12/x,.55,1.85);return{x:k,y:U,px:I((.072+t.size*.028)*L,.05,.24),rot:X,alpha:I(.52+L*.42,.5,1)}}if(i==="tunnel"){const v=.3+me(t.z-a*(.4+o*.22+n*.1))*2.45;if(v<.34||v>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/v;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:I(.2*t.size*(.95+n*.1+u*.26)/v,.04,.5),glow:u*.42,rot:t.rot+t.vr*a*.2,alpha:I((2.65-v)/.28,0,1)*I((v-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,M=.32+(1-me(a*(.2+o*.12)+t.z*.02))*2.2;return{x:T/(M*.62),y:_/(M*.62),px:I(.16*t.size/M,.05,.42),rot:t.rot*.25,alpha:I((2.4-M)/.25,0,1)}}if(i==="bloom"){const w=me(t.z-a*(.34+n*.12)),v=w*w,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*v*.92,y:Math.sin(T)*v*.92,px:I(.05+v*.32*t.size*(1+o*.06+u*.24),.04,.48),glow:u*.4,rot:t.rot+w*.4,alpha:I(1.05-v,0,1)*I(w/.08,0,1)}}if(i==="spiral"){const v=.28+me(t.z-a*(.4+o*.2+n*.08))*2.6;if(v<.32||v>2.75)return null;const T=t.x*Math.PI*2+2.15/v+a*.1,_=(.1+t.y*.38)/v;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:I(.2*t.size*(.94+n*.1+u*.26)/v,.04,.52),glow:u*.4,rot:t.rot+T*.15,alpha:I((2.75-v)/.28,0,1)*I((v-.28)/.1,0,1)}}if(i==="helix"){const v=.26+me(t.z-a*(.46+o*.22+n*.08))*2.7;if(v<.3||v>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/v)+t.x*Math.PI*2+T,E=(.11+t.y*.26)/v;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.92,px:I(.22*t.size*(.93+n*.1+u*.26)/v,.04,.54),glow:u*.4,rot:_+t.rot,alpha:I((2.85-v)/.28,0,1)*I((v-.26)/.1,0,1)}}if(i==="prism"){const v=.28+me(t.z-a*(.42+o*.2+n*.08))*2.55;if(v<.32||v>2.7)return null;const T=a*.22+t.rot*.4,_=me(t.x)-.5,E=me(t.y)-.5,M=Math.cos(T),A=Math.sin(T);return{x:(_*M-E*A)/v,y:(_*A+E*M)/v,px:I(.2*t.size*(.94+n*.1+u*.26)/v,.04,.52),glow:u*.4,rot:t.rot+T,alpha:I((2.7-v)/.26,0,1)*I((v-.28)/.1,0,1)}}if(i==="gyre"){const w=Wt(t.z-a*.4,.28,2.6);if(!w)return null;const{depth:v,fade:T}=w,_=a*.2+t.x*Math.PI*2,E=.22+t.y*.5,M=Math.cos(_)*E,A=Math.sin(_*.93)*E*.86,P=Io(M,A,a*.12);return{x:P.x/v,y:P.y/v+Math.sin(a*.16)*.05,px:I(.22*t.size*(.93+n*.1+u*.26)/v,.04,.55),glow:u*.42,rot:t.rot+_*.2+t.vr*a*.08,alpha:T}}if(i==="well"){const w=Wt(t.z-a*.4,.26,2.65);if(!w)return null;const{depth:v,fade:T}=w,_=t.x*Math.PI*2+a*.16+2.6*Math.log(v+.18),E=(.2+e%8*.028)/Math.pow(v,.82);return{x:Math.cos(_)*E,y:Math.sin(_)*E,px:I(.21*t.size*(.93+n*.1+u*.26)/v,.04,.54),glow:u*.42,rot:t.rot+_*.2,alpha:T}}if(i==="hall"){const w=Wt(t.z-a*.42,.3,2.5);if(!w)return null;const{depth:v,fade:T}=w,_=e%4,E=me(t.x*.72+t.y*.28)-.5,M=.05/v;let A=0,P=0;_===0?(A=-.52/v-M,P=E/v):_===1?(A=.52/v+M,P=E/v):_===2?(A=E/v,P=-.4/v-M):(A=E/v,P=.4/v+M);const H=Io(A,P,.42/v+a*.08);return{x:H.x,y:H.y,px:I(.2*t.size*(.93+n*.1+u*.26)/v,.04,.5),glow:u*.4,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="drift"){const w=Wt(t.z-a*.4,.28,2.58);if(!w)return null;const{depth:v,fade:T}=w,E=e%5*1.256,M=a*.09,A=me(t.x+Math.cos(E)*M)-.5,P=me(t.y+Math.sin(E)*M*.72)-.5;return{x:A/v,y:P/v,px:I(.21*t.size*(.93+n*.1+u*.26)/v,.04,.52),glow:u*.42,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="braid"){const w=Wt(t.z-a*.44,.26,2.68);if(!w)return null;const{depth:v,fade:T}=w,_=e%3,E=a*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/v,M=(.13+t.y*.2)/v,A=Math.sin(a*.2+_*2.1)*.07;return{x:Math.cos(E)*M+A,y:Math.sin(E)*M*.9,px:I(.22*t.size*(.93+n*.1+u*.26)/v,.04,.54),glow:u*.4,rot:E+t.rot,alpha:T}}if(i==="sway"){const w=Wt(t.z-a*.46,.26,2.7);if(!w)return null;const{depth:v,fade:T}=w,_=Math.sin(a*.19)*.48,E=Math.cos(a*.13)*.3,M=Math.sin(a*.07)*.32,A=me(t.x+t.vx*a*.03)-.5,P=me(t.y+t.vy*a*.02)-.5,H=Io(A,P,M),$=1/v-.38;return{x:H.x/v+_*$,y:H.y/v+E*$,px:I(.24*t.size*(.92+n*.1+u*.28)/v,.04,.58),glow:u*.46,rot:t.rot+t.vr*a*.12+M*.4,alpha:T}}const m=.26+me(t.z-a*(.46+o*.24+n*.1))*2.7;if(m<.3||m>2.85)return null;const g=(me(t.x+t.vx*a*.03)-.5)/m,y=(me(t.y+t.vy*a*.02)-.5)/m;return{x:g,y,px:I(.24*t.size*(.92+n*.1+u*.28)/m,.04,.6),glow:u*.48,rot:t.rot+t.vr*a*.12,alpha:I((2.85-m)/.3,0,1)*I((m-.26)/.1,0,1)}}const jt={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function Jf(t){return jt[t]}function We(t,e,i){const a=parseInt(t.slice(1),16),o=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(o))return t;const n=I(i,0,1),s=l=>Math.round((a>>l&255)*(1-n)+(o>>l&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function ed(t,e,i,a,o,n,s,r=0,l=0,c=!1,f=Po[o]){const d=Se(s+4>>>0),h=$e(d,jt[o]),u=$e(d,jt[o]),p=$e(d,jt[o]),m=c?We(a,"#08060a",.68):a;t.fillStyle=m,t.fillRect(0,0,e,i);const g=t.createLinearGradient(0,0,e,i);if(c){const T=We(f,"#ffd8a8",.3),_=.16+l*.4+r*.06;g.addColorStop(0,We(m,T,_*.55)),g.addColorStop(.48,We(m,h,.2)),g.addColorStop(1,We(m,u,.24))}else g.addColorStop(0,We(a,h,.38)),g.addColorStop(.45,We(a,p,.28)),g.addColorStop(1,We(a,u,.42));t.fillStyle=g,t.fillRect(0,0,e,i);const y=e*(.5+Math.sin(n*.17)*.08),w=i*(.46+Math.cos(n*.13)*.06),v=t.createRadialGradient(y,w,0,y,w,Math.max(e,i)*.72);if(c){const T=We(f,"#ffd8a8",.28);v.addColorStop(0,We(m,T,.22+l*.38+r*.05)),v.addColorStop(1,m)}else v.addColorStop(0,We(a,h,.42+r*.1)),v.addColorStop(1,a);t.fillStyle=v,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function td(t,e=0){const i=Se(e+17>>>0);return $e(i,jt[t])}function hi(t,e){const i=Se(t+17>>>0);return $e(i,jt[St[Math.floor(i()*St.length)]])}function mi(t,e="#c41e3a"){const i=Se(t+91>>>0);return i()<.35?e:$e(i,ci)}function id(t){return Po[t]}function Rt(t){return St[(t>>>0)%St.length]}const pi=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],Bo={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},Ro={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},zt=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(Ro).map(t=>t.palette)];function gi(t){return t&&pi.includes(t)?t:"kit"}function Vt(t,e){const i=gi(e);return i==="kit"?Jf(t):Ro[i].grounds}function mt(t,e){const i=gi(e);return i==="kit"?id(t):Ro[i].ink}function Za(t,e=0,i){const a=Vt(t,i),o=Se(e+17>>>0);return a[Math.floor(o()*a.length)%a.length]}function Qa(t){return pi[Math.floor(t()*pi.length)%pi.length]}function rs(t){return zt[Math.floor(t()*zt.length)%zt.length]}function Be(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const ad=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],od=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],nd=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],sd=[{id:"halftone",name:"Dot Screen",category:"texture",description:"Ben-Day / newsprint dots that turn the collage into a printed sheet",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.72},{id:"scale",label:"Scale",kind:"float",min:.35,max:2.4,step:.01,default:1},{id:"contrast",label:"Ink",kind:"float",min:0,max:1,step:.01,default:.42},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],rd=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ld=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ls=`
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
`,cs=`
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
`,cd=`
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
`,ud=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,fd=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,us=`
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
`,zo={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${us}${cs}`,applyGlsl:ud};function dd(t){return t?{...zo,extraUniforms:`${us}${cs}${cd}`,applyGlsl:fd}:zo}const hd=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${ls}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},zo],Oo=[...ad,...od,...nd,...sd,...rd,...ld,...hd],md=new Map(Oo.map(t=>[t.id,t]));function pd(){return Oo}function ot(t){return md.get(t)}function gd(){const t={};for(const e of Oo)(t[e.category]??=[]).push(e);return t}const vd=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"texture",label:"Texture"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Ho(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(o=>({...o,params:{...o.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Be("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function bd(t,e){const i=e.data,a=t.sources.map(n=>n.id),o=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&a.includes(n.sourceId)?n.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:o,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function yd(t,e){if(t.length===0)return null;const i=Se(e);return t[Math.floor(i()*t.length)]}function wd(t){return{...t,id:Be("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const fs=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function kd(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(f=>{const d=parseInt(f.slice(1),16),h=d>>16&255,u=d>>8&255,p=d&255,m=g=>I(Math.round(Ue(g,t()*255,a)),0,255);return`#${[m(h),m(u),m(p)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const o=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),r=o+t()*(n-o),l=Ue(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function Lo(t,e,i,a){const o=ot(t.typeId);if(!o)return t;const n=Se(e),s={...t.params};for(const r of o.params)a&&r.id!==a||(s[r.id]=kd(n,r,s[r.id]??r.default,I(i,0,1)));return{...t,params:s}}function Td(t,e,i,a=!1,o){const n=t.effects.map((s,r)=>a&&o&&s.id!==o?s:Lo(s,e+r*997,i));return{...t,effects:n}}function No(t,e,i){const a=ot(t),o={};if(a)for(const n of a.params)o[n.id]=n.default;return Lo({id:Be("fx"),typeId:t,enabled:!0,params:o},e,i)}function Uo(t,e,i,a){const o={...t.params};if(t.typeId==="grade"&&(e==="lush"?(o.saturation=.18+a()*.42,o.brightness=-.04+a()*.16,o.contrast=.06+a()*.22,o.gamma=.82+a()*.35,o.hue=(a()-.5)*.18,o.exposure=-.15+a()*.4):e==="outsider"?(o.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,o.contrast=.2+a()*.55,o.gamma=.55+a()*1.1,o.hue=(a()-.5)*.7):(o.saturation=.05+a()*.5,o.contrast=.1+a()*.35,o.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(o.shadow=i.shadow,o.highlight=i.highlight,o.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(o.leakColor=i.leak,o.leak=e==="lush"?.18+a()*.35:a()*.22,o.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(o.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,o.halation=e==="lush"?.22+a()*.4:a()*.25,o.size=1.4+a()*2.2),t.typeId==="warp"&&(o.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(o.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(o.mixScan=e==="lush"?a()*.2:.25+a()*.5,o.noise=e==="lush"?a()*.1:.12+a()*.35),(t.typeId==="halftone"||t.typeId==="riso"||t.typeId==="hatch"||t.typeId==="holo"||t.typeId==="crackle"||t.typeId==="nap")&&(o.amount=e==="lush"?.38+a()*.32:.5+a()*.38),t.typeId==="posterize"&&(o.levels=3+Math.floor(a()*6),o.dither=.08+a()*.35),t.typeId==="threshold"&&(o.mix=.35+a()*.45,o.soft=.04+a()*.18),t.typeId==="critters"){o.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),o.size=.85+a()*.7,o.amount=.7+a()*.3,o.speed=.7+a()*1.3,o.seed=1+Math.floor(a()*9998);const n=a();e==="lush"?o.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?o.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":o.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){o.size=.12+a()*.05,o.count=1,o.crowd="normal",o.place="center";const n=a();e==="lush"?o.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?o.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":o.move=n>.78?"drift":"dance",o.echo=.35+a()*.5,o.amount=1,o.speed=o.move==="dance"?.55+a()*1.5:.32+a()*.7,o.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?o.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?o.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":o.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?o.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?o.coat=r>.5?"sodium":r>.26?"cream":"wild":o.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(o.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),o.zoom=.7+a()*.8),t.typeId==="channels"&&(o.tint=i.leak,o.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(o.lo=.1+a()*.22,o.hi=.5+a()*.35,o.amount=.45+a()*.4,o.invert=a()>.72),t.typeId==="dropout"&&(o.amount=.28+a()*.4,o.rate=.18+a()*.4,o.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:o}}function _d(t,e="mix"){const i=Se(t>>>0);return Uo(No("critters",t,.85),e,zt[t%zt.length],i)}function Sd(t,e="mix"){const i=Se(t>>>0);return Uo(No("dancer",t,.85),e,zt[t%zt.length],i)}function xd(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Sd(t.seed+i*4243,"mix")]})}}function ds(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,_d(t.seed+i*7919,"mix")]})}}function Cd(){return fs.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Ed(){return pd().map(t=>t.id).filter(t=>t!=="dancer")}function Md(t,e){const i=Se(t>>>0),a=Ed(),o=e?3:2,n=e?5:4,s=Math.min(a.length,o+Math.floor(i()*(n-o+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Pd(t,e,i,a=!1,o=!0){const n=Se(e+17>>>0),s=a?n()>.5?"outsider":"mix":n()>.55?"lush":n()>.35?"mix":"outsider",r=rs(n),l=o?Md(e,a).map((c,f)=>Uo(No(c,e+f*3331,i),s,r,Se(e+f*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function hs(t,e,i,a,o,n=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=Se(l^2654435769),f=t.layers.map((v,T)=>e==="selected"&&v.id!==i?v:e==="param"?v.id!==i?v:{...v,effects:v.effects.map(_=>_.id===a&&o?Lo(_,l+T*13,Math.max(r,.55),o):_)}:e==="all"?Pd(v,l+T*7919,r,n,s):Td(v,l+T*7919,r,!0,a)),d=Wn,h=Se(l+0*7919>>>0),u=Cd(),p=u[Math.floor(h()*u.length)]??fs[0],g={"herald tour":{generator:"heraldry",a:hi(l),b:mi(l)},"dense paper":{generator:"wallpaper",a:hi(l+3),b:mi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:hi(l+5),b:mi(l+5)},"heart rain":{generator:"shower",a:hi(l+7),b:mi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:hi(l+9),b:mi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[p.name],y=t.sources.map((v,T)=>{if(e!=="all"||v.kind!=="generator")return v;const _=Se(l+T*131),E=rs(_);if(Ae(v.generator)||Wn.includes(v.generator)){const R=Rt(l+T*41),k=Mo(l+T*73),U=Rt(l+T*99),X=_()>.74&&U!==R?U:void 0,L=Qa(_);return{...v,generator:Xa(k),collageKit:R,collageKitB:X,collageMove:k,collageColorPack:L,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageChainAnimal:k==="chain"&&_()>.55?Ga[1+Math.floor(_()*5)]:"off",collageCamera:v.collageCamera??"fixed",collageCameraFeel:v.collageCameraFeel,collageHuntWideMin:v.collageHuntWideMin,collageHuntWideMax:v.collageHuntWideMax,collageHuntFollowMin:v.collageHuntFollowMin,collageHuntFollowMax:v.collageHuntFollowMax,collageHuntSnap:v.collageHuntSnap,collageHuntZoom:v.collageHuntZoom,collageHuntTight:v.collageHuntTight,collageHuntReactMin:v.collageHuntReactMin,collageHuntReactMax:v.collageHuntReactMax,collageHuntPrecision:v.collageHuntPrecision,collageHuntSelect:v.collageHuntSelect,collageHuntFocus:v.collageHuntFocus,collageHuntFocusSpeed:v.collageHuntFocusSpeed,collageHuntFocusError:v.collageHuntFocusError,collageHuntVariation:v.collageHuntVariation,colorA:Za(R,l+T*17,L),colorB:mt(R,L),name:X?`${ii[k]} · ${R} · ${X}`:`${ii[k]} · ${R}`}}const M=n?!1:_()>.35,A=g?g.generator:M?v.generator:d[Math.floor(_()*d.length)],P=Rt(l+T*41),H=Qa(_),$=Ae(A)?Za(P,l+T*17,H):E.inkA,x=Ae(A)?mt(P,H):E.inkB;return{...v,generator:A,collageKit:Ae(A)?P:v.collageKit,collageColorPack:Ae(A)?H:v.collageColorPack,colorA:g?g.a:$,colorB:g?mt(P,H):x}}),w=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:f,sources:y,globalFeedback:w}}function Ad(t){const e=t.seed+7919>>>0,i=Se(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],o=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Ae(r.generator))return r;const c=St[Math.floor(i()*St.length)],f=Mo(e+l*59),d=Qa(i);return{...r,generator:Xa(f),collageKit:c,collageMove:f,collageColorPack:d,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageChainAnimal:f==="chain"&&i()>.55?Ga[1+Math.floor(i()*5)]:"off",collageCamera:r.collageCamera??"fixed",collageCameraFeel:r.collageCameraFeel,collageHuntSelect:r.collageHuntSelect,collageHuntFocus:r.collageHuntFocus,collageHuntVariation:r.collageHuntVariation,colorA:Za(c,e+l*13,d),colorB:mt(c,d),name:`${ii[f]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:o[Math.floor(i()*o.length)],coat:n[Math.floor(i()*n.length)]}}:l)}))};return s=ds(s),s}function Fd(){return{x:0,y:0,scale:1,rotation:0}}function Id(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function ms(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Bd(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Rd(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!0}}const zd={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Ya={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},Od={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function ps(t,e,i,a){const o=t==="chain"?li(a):"off",n=o!=="off"?`CHAIN · ${Kn[o].toUpperCase()}`:ii[t];return i&&i!==e?`${n} · ${Ya[e]} · ${Ya[i]}`:`${n} · ${Ya[e]}`}function Gt(t="plasma",e,i,a){const o=Ae(t)?Bt(e):void 0,n=zd[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;o&&(s=i==="mix"||i==="tour"?Mo(Date.now()+Math.floor(Math.random()*997)):i?Vn(i):Zn(t));const r=s?Xa(s):t??"plasma",l=s?ii[s]:Od[t??""]??(t?t.toUpperCase():"SIGNAL"),c=o&&a?.kitB?Bt(a.kitB):void 0,f=c&&o&&c!==o?c:void 0,d=o&&s?ps(s,o,f,a?.chainAnimal):o?`${l} · ${Ya[o]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,h=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,u=o?gi(a?.colorPack):void 0;return{id:Be("src"),name:d,kind:"generator",generator:r,colorA:h??(o?Za(o,s==="rush"?1:s==="tunnel"?5:s==="bounce"?7:11,u):n.a),colorB:o?mt(o,u):n.b,collageColorPack:u,collageKit:o,collageKitB:f,collageMove:s,collageNight:o?!!a?.night:void 0,collageScale:o?fi(a?.scale):void 0,collageDensity:o?di(a?.density):void 0,collagePace:o?ai(a?.pace):void 0,collageChainTravel:o?oi(a?.chainTravel):void 0,collageChainMorph:o?ni(a?.chainMorph):void 0,collageChainVary:o?si(a?.chainVary):void 0,collageChainSmooth:o?ri(a?.chainSmooth):void 0,collageChainAnimal:o?li(a?.chainAnimal):void 0,collageSpringStrength:o?fa(a?.springStrength):void 0,collageSpringDamp:o?da(a?.springDamp):void 0,collageSpringDist:o?ha(a?.springDist):void 0,collageSpringElast:o?ma(a?.springElast):void 0,collageSpringBreak:o?pa(a?.springBreak):void 0,collageFlowScale:o?ga(a?.flowScale):void 0,collageFlowTurb:o?va(a?.flowTurb):void 0,collageFlowEvolve:o?ba(a?.flowEvolve):void 0,collageFlowForce:o?ya(a?.flowForce):void 0,collageFlowDepth:o?wa(a?.flowDepth):void 0,collageBoidCohere:o?ka(a?.boidCohere):void 0,collageBoidSep:o?Ta(a?.boidSep):void 0,collageBoidAlign:o?_a(a?.boidAlign):void 0,collageBoidRadius:o?Sa(a?.boidRadius):void 0,collageBoidSpeed:o?xa(a?.boidSpeed):void 0,collagePoleCount:o?Ca(a?.poleCount):void 0,collagePoleAttract:o?Ea(a?.poleAttract):void 0,collagePoleRepel:o?Ma(a?.poleRepel):void 0,collagePoleSpeed:o?Pa(a?.poleSpeed):void 0,collagePoleFalloff:o?Aa(a?.poleFalloff):void 0,collagePoleSwitch:o?Fa(a?.poleSwitch):void 0,collageFieldStrength:o?qi(a?.fieldStrength):void 0,collageFieldScale:o?Di(a?.fieldScale):void 0,collageFieldEvolve:o?$i(a?.fieldEvolve):void 0,collageFieldDensity:o?Wi(a?.fieldDensity):void 0,collageFieldDensityScale:o?ji(a?.fieldDensityScale):void 0,collageFieldDensityEvolve:o?Vi(a?.fieldDensityEvolve):void 0,collageFieldFlow:o?Gi(a?.fieldFlow):void 0,collageFieldCurl:o?Ki(a?.fieldCurl):void 0,collageFieldFlowScale:o?Xi(a?.fieldFlowScale):void 0,collageFieldAttract:o?Zi(a?.fieldAttract):void 0,collageFieldRepel:o?Qi(a?.fieldRepel):void 0,collageFieldRadius:o?Yi(a?.fieldRadius):void 0,collageFieldInertia:o?Ji(a?.fieldInertia):void 0,collageFieldDamp:o?ea(a?.fieldDamp):void 0,collageFieldMaxV:o?ta(a?.fieldMaxV):void 0,collageFieldScaleAmp:o?ia(a?.fieldScaleAmp):void 0,collageFieldMinScale:o?aa(a?.fieldMinScale):void 0,collageFieldMaxScale:o?oa(a?.fieldMaxScale):void 0,collageFieldPerturb:o?na(a?.fieldPerturb):void 0,collageFieldWarp:o?sa(a?.fieldWarp):void 0,collageFieldSparsity:o?ra(a?.fieldSparsity):void 0,collageFieldContrast:o?la(a?.fieldContrast):void 0,collageFieldMotion:o?ca(a?.fieldMotion):void 0,collageCamera:o?ti(a?.camera):void 0,collageCameraFeel:o?Ia(a?.cameraFeel):void 0,collageHuntWideMin:o?Ra(a?.huntWideMin):void 0,collageHuntWideMax:o?za(a?.huntWideMax):void 0,collageHuntFollowMin:o?Oa(a?.huntFollowMin):void 0,collageHuntFollowMax:o?Ha(a?.huntFollowMax):void 0,collageHuntSnap:o?La(a?.huntSnap):void 0,collageHuntZoom:o?Na(a?.huntZoom):void 0,collageHuntTight:o?Ua(a?.huntTight):void 0,collageHuntReactMin:o?qa(a?.huntReactMin):void 0,collageHuntReactMax:o?Da(a?.huntReactMax):void 0,collageHuntPrecision:o?$a(a?.huntPrecision):void 0,collageHuntSelect:o?Ba(a?.huntSelect):void 0,collageHuntFocus:o?!!a?.huntFocus:void 0,collageHuntFocusSpeed:o?Wa(a?.huntFocusSpeed):void 0,collageHuntFocusError:o?ja(a?.huntFocusError):void 0,collageHuntVariation:o?Va(a?.huntVariation):void 0,width:1280,height:720,duration:0}}function gs(t){const e=ot(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Be("fx"),typeId:t,enabled:!0,params:i}}function vs(t,e,i=[]){return{id:Be("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Fd(),effects:i.map(gs),mask:Id(),feedback:ms()}}function bs(){const t=Gt("wallpaper","sailor","rush"),e=vs("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Bd(),globalFeedback:{...ms(),amount:0,opacity:.4,scale:1},exportSettings:Rd(),presets:[]},a=hs({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[Ho(i,"factory · tour"),Ho(a,"factory · scramble")],i}function ys(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1}}class Hd{state;listeners=new Set;constructor(e=bs()){this.state={project:e,ui:ys(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...ys(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const F=new Hd;function qo(t,e,i,a,o){if(e<=0)return 0;const n=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return o?(s%e+e)%e:I(s,0,e)}function Ld(t,e,i,a,o){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===a&&(i!=="effect"||n.effectId===o)).sort((n,s)=>n.time-s.time)}function Nd(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let o=0;o<t.length-1;o++){const n=t[o],s=t[o+1];if(e>=n.time&&e<=s.time){const r=s.time-n.time||1;let l=(e-n.time)/r;return(s.easing==="smooth"||n.easing==="smooth")&&(l=_l(l)),Ue(n.value,s.value,l)}}return i}function xt(t,e,i,a,o,n,s){const r=Ld(t.keyframes,e,i,a,s);return Nd(r,n,o)}function Ud(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(o=>({...o,params:{...o.params}}))};a.opacity=xt(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=xt(t,e.id,"layer","x",e.transform.x,i),a.transform.y=xt(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=xt(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=xt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const o of Object.keys(a.feedback))a.feedback[o]=xt(t,e.id,"feedback",o,e.feedback[o],i);for(const o of a.effects)for(const[n,s]of Object.entries(o.params))typeof s=="number"&&(o.params[n]=xt(t,e.id,"effect",n,s,i,o.id));return a}function qd(t,e){const i=t.layers[0]?.id??"";return xt(t,i,"playback","speed",t.playback.speed,e)}const Dd=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],$d=["spot","burst","snap","step"],Wd=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],jd=["drop","halo","bars","wave","poly","ghost","fall"];function Vd(t,e){const i=e.reduce((o,n)=>o+n.weight,0);let a=t()*i;for(const o of e)if(a-=o.weight,a<=0)return o.item;return e[e.length-1].item}function Gd(t){return Vd(t,Dd.map(e=>({item:e.beats,weight:e.weight})))}function Kd(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(o=>o!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function Xd(t,e,i){const a=t<=2?$d:t<=4?Wd:jd;return Kd(e,a,i)}function ws(t){return 60/Math.max(40,t||120)}function ks(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function Zd(t,e,i,a){const o=Math.max(1,t),n=ws(e),s=(i??[]).filter(c=>c>=0&&c<o+.05);let r=Number.isFinite(a)&&a>=0?a:s.length?ks(s[0],n):0;r>=o&&(r=ks(r,n));const l=[];for(let c=r;c<o-n*.02;c+=n)l.push(c);if(!l.length)for(let c=0;c<o;c+=n)l.push(c);return l.length||l.push(0),l[l.length-1]<o-1e-6&&l.push(o),l}function Qd(t,e,i,a){const o=ws(e),n=Number.isFinite(i)&&i>0?i:0,s=a&&a>0?a:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<n-1e-6?0:Math.max(0,Math.floor((r-n)/o+1e-4))}function Yd(t){const e=Se(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=Zd(i,t.bpm??120,t.beats,t.offset),o=[];let n=0,s,r,l=0;for(;n<a.length-1&&a[n]<i;){const c=Gd(e);r=Rt(t.seed+l*41+Math.floor(e()*17)>>>0);const f=l%5===2||e()>.82,d=e()>.72?Rt(t.seed+l*99+7>>>0):void 0,h=d&&d!==r?d:void 0,u=Qa(e),p=Vt(r,u);for(const m of c){if(n>=a.length-1||a[n]>=i)break;const g=Math.min(a.length-1,n+m),y=a[n];if(y>=i)break;const w=Xd(g-n,e,s),v=p[Math.floor(e()*p.length)%p.length];o.push({start:y,beats:g-n,startBeat:n,look:{kit:r,kitB:h,move:w,night:f,wash:v,ink:mt(r,u),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=w,n=g}if(l++,l>80)break}if(o.length>=2&&o[o.length-1].beats<2){const c=o.pop();o[o.length-1].beats+=c.beats}if(!o.length){const c=Rt(t.seed);o.push({start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:Vt(c)[0],ink:mt(c),scale:.78,density:.88,pace:.62}})}return o}function Jd(t,e,i,a,o){if(!t.length){const c=Rt(1);return{start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:Vt(c)[0],ink:mt(c),scale:.78,density:.88,pace:.62}}}const n=t[t.length-1],s=Math.max(i&&i>n.start?i:0,n.start+.5,t.length>1?n.start+(n.start-t[0].start)/Math.max(1,t.length-1):n.start+2);if(a&&a>40){const c=Number.isFinite(o)&&o>=0?o:t[0].start,f=Qd(e,a,c,s);let d=t[0];for(const h of t)if(h.startBeat<=f)d=h;else break;return d}const r=(e%s+s)%s;let l=t[0];for(const c of t)if(c.start<=r+5e-4)l=c;else break;return l}function eh(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const th=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function ih(t){return(t.type??"").startsWith("audio/")||th.test(t.name)}function vi(t){return t.sources.find(e=>e.kind==="audio")}let bi=null,pt=null,yi=null;const Do=new WeakSet;let wi=0,ki=0,Ot=0,Ts=0;function Ja(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(bi||(bi=new t,pt=bi.createAnalyser(),pt.fftSize=256,pt.smoothingTimeConstant=.72,pt.connect(bi.destination),yi=new Uint8Array(pt.frequencyBinCount)),bi):null}async function eo(){const t=Ja();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function ah(t){const e=Ja();if(!(!e||!pt||Do.has(t)))try{e.createMediaElementSource(t).connect(pt),Do.add(t)}catch{Do.add(t)}}async function oh(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",ah(i),eo();let a=null;const o=Ja();if(o)try{const d=await t.arrayBuffer(),h=o.decodeAudioData(d.slice(0)).catch(()=>null);a=await Promise.race([h,new Promise(u=>setTimeout(()=>u(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(d=>{if(Number.isFinite(i.duration)&&i.duration>0){d(i.duration);return}i.addEventListener("loadedmetadata",()=>d(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>d(a?.duration??0),{once:!0})}),new Promise(d=>setTimeout(()=>d(a?.duration??0),2500))])||a?.duration||0,r=a?nh(a.getChannelData(0),a.sampleRate):[],l=sh(r,s),c=a?rh(a.getChannelData(0),a.sampleRate,l.bpm,l.offset,s):l.offset,f=l.bpm>40?lh(r,l.bpm,c,s):r;return{id:Be("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:f,bpm:l.bpm,beatOffset:c,objectUrl:e}}function nh(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,o=Math.floor((t.length-a)/i);if(o<16)return[];const n=new Float32Array(o);for(let f=0;f<o;f++){const d=f*i;let h=0;for(let u=0;u<a;u+=2){const p=t[d+u];h+=p*p}n[f]=Math.sqrt(h/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let f=s;f<o;f++){let d=0,h=0;for(let g=f-s;g<f;g++)d+=n[g],n[g]>h&&(h=n[g]);d/=s;const u=n[f]-n[f-1];if(!(n[f]>d*1.32&&n[f]>h*.72&&u>.0035))continue;const m=f*i/e;m-c<r||(l.push(m),c=m)}return l}function sh(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let d=1;d<t.length;d++){const h=t[d]-t[d-1];h>=.18&&h<=1.2&&i.push(h)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((d,h)=>d-t[h]).filter(d=>d>.12&&d<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((d,h)=>d-h);const o=a[Math.floor(a.length/2)];let n=60/Math.max(.18,o);for(;n>155;)n/=2;for(;n<72&&n>0;)n*=2;n=$o(Math.round(n),70,170);let s=n,r=0,l=-1;const c=Math.max(70,n-8),f=Math.min(170,n+8);for(let d=c;d<=f;d++){const h=60/d,u=e>0?e:(t[t.length-1]??0)+h,p=new Set([0,(t[0]%h+h)%h]);for(let m=0;m<Math.min(t.length,16);m++)p.add((t[m]%h+h)%h);for(const m of p){let g=0;for(const y of t){const w=((y-m)%h+h)%h,v=Math.min(w,h-w);v<h*.12&&(g+=1-v/(h*.12))}m>.03&&m<u-h*.5&&(g+=.15),g*=1-Math.abs(d-118)/400,g>l&&(l=g,s=d,r=m)}}return{bpm:s,offset:r}}function rh(t,e,i,a,o){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(a)&&a>=0?a:0;const n=60/i,s=n*4,r=Number.isFinite(a)&&a>=0?a:0,l=Math.max(32,Math.floor(e*.04)),c=[0,0,0,0],f=o>0?o:t.length/e;for(let u=0;u<4;u++){let p=0,m=0;for(let g=r+u*n;g<f-.04&&m<72;g+=s){const y=Math.max(0,Math.min(t.length-l-1,Math.floor(g*e)));let w=0;for(let v=0;v<l;v+=3){const T=t[y+v];w+=T*T}p+=w,m++}c[u]=p/Math.max(1,m)}let d=0;for(let u=1;u<4;u++)(c[u]>c[d]*1.05||c[u]>c[d]*.97&&u%2===0&&d%2===1)&&(d=u);return((r+d*n)%s+s)%s}function lh(t,e,i,a){if(!(e>40))return[...t];const o=60/e,n=Math.max(o,a||(t[t.length-1]??0)+o),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<n-o*.08;l+=o)r.push(l);return r.length?r:[...t]}function _s(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const o=60/e;if(!(o>0))return 0;const n=t-a;if(n<-.02)return 0;const s=(n%o+o)%o;return Math.exp(-s/i)}function ch(t,e,i=.2){if(!t.length)return 0;let a=0,o=t.length-1;for(;a<o;){const r=a+o+1>>1;t[r]<=e?a=r:o=r-1}const n=t[a];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function $o(t,e,i){return Math.max(e,Math.min(i,t))}function uh(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const o=(a%i+i)%i,n=Math.floor(o*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,n)),l=Math.max(r+1,Math.min(t.length,n+s));let c=0;for(let g=r;g<l;g++)c+=t[g]*t[g];const f=Math.min(1,Math.sqrt(c/(l-r))*3.4),d=Math.max(s,Math.floor(e*.09)),h=Math.min(t.length,n+d);let u=0,p=0;for(let g=r;g<h;g+=8)u+=t[g]*t[g],p++;const m=Math.min(1,Math.sqrt(u/Math.max(1,p))*4.2);return{energy:f,bass:m}}function fh(){if(!pt||!yi)return null;pt.getByteFrequencyData(yi);let t=0,e=0;const i=yi.length,a=Math.max(4,Math.floor(i*.12));for(let o=0;o<i;o++){const n=yi[o]/255;t+=n,o<a&&(e+=n)}return{energy:t/i,bass:e/a}}function dh(t,e){let i=0,a=0,o=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=uh(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],f=t.beatOffset??0,d=c.length?ch(c,r,.11):0,h=_s(r,t.bpm??0,.11,f),u=$o((i-.12)*.75,0,.6);o=Math.max(d,h*.86,c.length?u*.28:u)}else if(t?.kind==="audio"){const s=fh();s&&(i=s.energy,a=s.bass,o=Math.max(_s(e,t.bpm??0,.11,t.beatOffset??0)*.86,$o((i-.12)*.55,0,.5)))}Math.abs(e-Ts)>.2||o>=Ot?Ot=o:Ot+=(o-Ot)*.32,Ts=e;const n=t?.kind==="audio"?.22:.14;return wi+=(i-wi)*n,ki+=(a-ki)*Math.min(n,.16),!t&&wi<.002&&(wi=0),!t&&ki<.002&&(ki=0),t||(Ot=0),{energy:wi,bass:ki,beat:Ot}}function hh(t,e,i=0,a=0){const o=e.length,n=t.length;if(o<1)return;if(n<1){e.fill(0);return}const s=(Math.round(a)%n+n)%n;for(let l=0;l<o;l++)e[l]=t[(s+l)%n];if(i<=0)return;const r=Math.max(1,Math.round(o*i));for(let l=0;l<r;l++)e[o-r+l]*=1-(l+1)/r}function Wo(t){if(!vi(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function mh(t,e,i=!1,a=0){const o=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*o)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:n,numberOfChannels:s,sampleRate:o}),l=i?.12:0,c=Number.isFinite(a)&&a>0?a:0,f=Math.round(c*o);for(let d=0;d<s;d++)hh(t.getChannelData(d),r.getChannelData(d),l,f);return r}async function ph(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const a=Ja()??new e,o=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(o&&o.length>32)return t.pcm=o,o}catch{return null}return null}function jo(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const gh=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,vh=`#version 300 es
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
`,bh=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,yh=`#version 300 es
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
`,wh=`#version 300 es
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
`,kh=`#version 300 es
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
${ls}
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
`,Lh=`#version 300 es
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
`,Nh=`#version 300 es
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
`,Uh=`#version 300 es
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
`,Ss=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,qh=`#version 300 es
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
`;class Ht extends Error{}function Dh(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new Ht("WebGL2 is required for Phosphene.");return e}function xs(t,e,i){const a=t.createShader(e);if(!a)throw new Ht("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new Ht(o)}return a}class ve{gl;prog;uniforms=new Map;constructor(e,i,a=gh){this.gl=e;const o=xs(e,e.VERTEX_SHADER,a),n=xs(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new Ht("Unable to create program");if(e.attachShader(s,o),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(o),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new Ht(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const o=this.loc(e);o&&this.gl.uniform2f(o,i,a)}v3(e,i,a,o){const n=this.loc(e);n&&this.gl.uniform3f(n,i,a,o)}v4(e,i,a,o,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,o,n)}dispose(){this.gl.deleteProgram(this.prog)}}function to(t){const e=t.createTexture();if(!e)throw new Ht("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Cs(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function $h(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class Kt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new Ht("Unable to create framebuffer");this.fbo=i,this.tex=to(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,$h(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Oe(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function nt(t){t.drawArrays(t.TRIANGLES,0,3)}const Wh={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},jh={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Es={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function Vh(t){return`${vh}
${t.extraUniforms??""}
${t.applyGlsl}
${bh}`}function Gh(t,e){return new ve(t,Vh(e))}function Ti(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Xt=8;function Ms(t,e,i){return new ImageData(t,e,i)}function Kh(t,e,i){const a=t.find(n=>n.id===e);if(!a?.options)return Number(i)||0;const o=a.options.findIndex(n=>n.value===i);return o<0?0:o}class Xh{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new Qf;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=Dh(e),this.generatorProg=new ve(this.gl,Th)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Xt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new Kt(e),this.pong??=new Kt(e),this.composite??=new Kt(e),this.post??=new Kt(e);this.ring.length<Xt;)this.ring.push(new Kt(e));this.copy??=new ve(e,Ss),this.blit??=new ve(e,wh),this.compositeProg??=new ve(e,yh),this.feedbackProg??=new ve(e,kh),this.textureProg??=new ve(e,qh),this.black||(this.black=to(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(n=>n.enabled))return!0;const o=e.sources.find(n=>n.id===a.sourceId);return!!(o&&o.kind!=="generator"&&o.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ve(this.gl,Sh),this.stageProg):e===13?(this.sketchProg??=new ve(this.gl,xh),this.sketchProg):e===14?(this.feltProg??=new ve(this.gl,Ch),this.feltProg):e===15?(this.foilProg??=new ve(this.gl,Eh),this.foilProg):e===16?(this.plushProg??=new ve(this.gl,Mh),this.plushProg):e===17?(this.yarnProg??=new ve(this.gl,Ph),this.yarnProg):e===18?(this.sequinProg??=new ve(this.gl,Ah),this.sequinProg):e===19?(this.quiltProg??=new ve(this.gl,Fh),this.quiltProg):e===20?(this.corkProg??=new ve(this.gl,Ih),this.corkProg):e===21?(this.ginghamProg??=new ve(this.gl,Bh),this.ginghamProg):e===22?(this.sprinkleProg??=new ve(this.gl,Rh),this.sprinkleProg):e===23?(this.velvetProg??=new ve(this.gl,zh),this.velvetProg):e===24?(this.confettiProg??=new ve(this.gl,Oh),this.confettiProg):e===25?(this.discoProg??=new ve(this.gl,Hh),this.discoProg):e===26?(this.terrazzoProg??=new ve(this.gl,Lh),this.terrazzoProg):e===27?(this.comicProg??=new ve(this.gl,Nh),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ve(this.gl,Uh),this.fieldsProg):(this.generatorFull??=new ve(this.gl,_h),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",o=this.effectProg.get(a);if(o)return o;const n=e==="dancer"?dd(i):ot(e);if(!n)return null;try{const s=Gh(this.gl,n);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(o=>!!o);for(const o of a)o.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new Kt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=to(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Cs(this.gl,i,a),i}blitTo(e,i){const a=this.gl,o=this.copy;o&&(e.bind(),o.use(),Oe(a,0,i),o.i("uTex",0),nt(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const o=Math.max(a?.duration||0,e.duration,e.exportSettings.duration||0,8),n=`${e.cutEdit.seed}|${o}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==n)&&(this.cutReel=Yd({seed:e.cutEdit.seed,duration:o,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=n);const s=Jd(this.cutReel,i,o,a?.bpm,a?.beatOffset);this.cutStatus=eh(s),this.cutLook={generator:Xa(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,o,n,s,r){const l=this.gl;this.copy??=new ve(l,Ss),this.heraldryTex??=to(l);const c=this.cutLook??i,f=this.heraldry.paint({width:s,height:r,time:a,duration:n,seed:o,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,chainAnimal:c.collageChainAnimal,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,fieldStrength:c.collageFieldStrength,fieldScale:c.collageFieldScale,fieldEvolve:c.collageFieldEvolve,fieldDensity:c.collageFieldDensity,fieldDensityScale:c.collageFieldDensityScale,fieldDensityEvolve:c.collageFieldDensityEvolve,fieldFlow:c.collageFieldFlow,fieldCurl:c.collageFieldCurl,fieldFlowScale:c.collageFieldFlowScale,fieldAttract:c.collageFieldAttract,fieldRepel:c.collageFieldRepel,fieldRadius:c.collageFieldRadius,fieldInertia:c.collageFieldInertia,fieldDamp:c.collageFieldDamp,fieldMaxV:c.collageFieldMaxV,fieldScaleAmp:c.collageFieldScaleAmp,fieldMinScale:c.collageFieldMinScale,fieldMaxScale:c.collageFieldMaxScale,fieldPerturb:c.collageFieldPerturb,fieldWarp:c.collageFieldWarp,fieldSparsity:c.collageFieldSparsity,fieldContrast:c.collageFieldContrast,fieldMotion:c.collageFieldMotion,camera:c.collageCamera,cameraFeel:c.collageCameraFeel,huntWideMin:c.collageHuntWideMin,huntWideMax:c.collageHuntWideMax,huntFollowMin:c.collageHuntFollowMin,huntFollowMax:c.collageHuntFollowMax,huntSnap:c.collageHuntSnap,huntZoom:c.collageHuntZoom,huntTight:c.collageHuntTight,huntReactMin:c.collageHuntReactMin,huntReactMax:c.collageHuntReactMax,huntPrecision:c.collageHuntPrecision,huntSelect:c.collageHuntSelect,huntFocus:c.collageHuntFocus,huntFocusSpeed:c.collageHuntFocusSpeed,huntFocusError:c.collageHuntFocusError,huntVariation:c.collageHuntVariation});if(Cs(l,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Oe(l,0,this.heraldryTex),this.copy.i("uTex",0),nt(l)}drawGenerator(e,i,a,o=77,n=8){if(Ae(i.generator)){this.drawHeraldry(e,i,a,o,n,e.w,e.h);return}const s=this.gl,r=Es[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?Ti(i.colorA):[.07,.04,.1],f=i.colorB?Ti(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",o),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),nt(s)}drawTexture(e,i,a){const o=this.gl,n=this.textureProg;n&&(e.bind(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),n.use(),Oe(o,0,i),n.i("uTex",0),n.v2("uTranslate",a.transform.x,a.transform.y),n.f("uScale",a.transform.scale),n.f("uRotation",a.transform.rotation),n.v2("uFit",1,1),nt(o))}applyEffect(e,i,a,o,n,s,r,l,c){const f=ot(a.typeId),d=this.progFor(a);if(!f||!d){this.blitTo(e,i);return}const h=this.gl;e.bind(),d.use(),Oe(h,0,i),Oe(h,1,l),Oe(h,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",n),d.f("uFrame",s),d.f("uQuality",r==="draft"?0:r==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",o.transform.x,o.transform.y),d.f("u_scale",o.transform.scale),d.f("u_rotation",o.transform.rotation);const u=o.mask;d.i("u_maskType",jh[u.type]??0),d.i("u_maskInvert",u.invert?1:0),d.f("u_maskSoftness",u.softness),d.v4("u_maskRect",u.rect.x,u.rect.y,u.rect.w,u.rect.h),d.v2("u_maskCenter",u.center.x,u.center.y),d.f("u_maskRadius",u.radius),d.f("u_maskGradientAngle",u.gradientAngle),d.f("u_maskNoiseScale",u.noiseScale);let p=1;for(const m of f.params){const g=a.params[m.id]??m.default,y=`u_${m.id}`;if(m.kind==="color"&&typeof g=="string"){const[w,v,T]=Ti(g);d.v3(y,w,v,T)}else m.kind==="bool"?d.f(y,g?1:0):m.kind==="enum"?d.f(y,Kh(f.params,m.id,g)):d.f(y,Number(g));m.id==="mix"&&(p=Number(g))}d.f("u_mix",p),nt(h)}drawLite(e,i){const a=this.gl,o=e.layers.find(d=>d.enabled)??e.layers[0],n=o?e.sources.find(d=>d.id===o.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Ae(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=Es[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?Ti(s.colorA):[.07,.04,.1],f=s.colorB?Ti(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),nt(a)}render(e,i,a){const o=this.gl,n=a?.quality??e.quality,s=dh(vi(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=vi(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,f=this.composite,d=this.post,h=this.blit,u=this.compositeProg,p=this.feedbackProg,m=n==="draft"?.5:1,g=Math.max(16,Math.floor((a?.width??this.canvas.width)*m)),y=Math.max(16,Math.floor((a?.height??this.canvas.height)*m));this.ensureSize(g,y),f.bind(),o.clearColor(.02,.02,.03,1),o.clear(o.COLOR_BUFFER_BIT);const w=e.globalFeedback,v=Math.max(0,Math.min(Xt-1,Math.round(w.delay))),T=(this.ringIndex-1-v+Xt*8)%Xt,_=this.ring[T].tex,E=Math.floor(i*e.fps);for(const M of e.layers){if(!M.enabled)continue;const A=Ud(e,M,i),P=e.sources.find(R=>R.id===A.sourceId)??null;if(!P||P.kind==="generator"||P.kind==="audio"){const R=P&&P.kind!=="audio"?P:{generator:"plasma"};this.drawGenerator(l,R,i,e.seed,e.duration)}else{const R=this.uploadSource(P);this.drawTexture(l,R,A)}let H=l,$=c;const x=this.histFor(A.id);for(const R of A.effects){if(!R.enabled)continue;this.applyEffect($,H.tex,R,A,i,E,n,_,x.tex);const k=H;H=$,$=k}if(A.feedback.amount>.001){$.bind(),p.use(),Oe(o,0,H.tex),Oe(o,1,x.tex),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",A.feedback.amount),p.f("uOpacity",A.feedback.opacity),p.f("uScale",A.feedback.scale),p.f("uRotation",A.feedback.rotation),p.f("uDistortion",A.feedback.distortion),p.f("uTime",i),nt(o);const R=H;H=$,$=R}this.blitTo(d,f.tex),f.bind(),u.use(),Oe(o,0,d.tex),Oe(o,1,H.tex),u.i("uBase",0),u.i("uLayer",1),u.f("uOpacity",A.opacity),u.i("uBlend",Wh[A.blendMode]??0),u.v2("uResolution",g,y),nt(o),this.blitTo(x,H.tex)}w.amount>.001&&(d.bind(),p.use(),Oe(o,0,f.tex),Oe(o,1,_),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",w.amount),p.f("uOpacity",w.opacity),p.f("uScale",w.scale),p.f("uRotation",w.rotation),p.f("uDistortion",w.distortion),p.f("uTime",i),nt(o),this.blitTo(f,d.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%Xt,o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height),h.use(),Oe(o,0,f.tex),h.i("uTex",0),h.f("uVignette",a?.vignette??.25),nt(o)}capture(e,i,a,o,n="image/png",s=.97){const r=this.paintFrame(e,i,a,o);return new Promise((l,c)=>{r.toBlob(f=>{f?l(f):c(new Error("Export failed"))},n,s)})}paintFrame(e,i,a,o,n){const s=n??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==o&&(s.height=o);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:o,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===o)r.putImageData(Ms(l,a,o),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Ms(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,o)}return s}readPixels(e,i){const a=this.gl,o=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,o),a.bindFramebuffer(a.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(o.length)),s=e*4;for(let r=0;r<i;r++)n.set(o.subarray((i-1-r)*s,(i-r)*s),r*s);return n}}const Zh=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Qh=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Yh(t){return t.type.startsWith("video/")||Qh.test(t.name)}function Jh(t){return t.type.startsWith("image/")||Zh.test(t.name)}async function em(t){if(Yh(t))return im(t);if(Jh(t))return As(t);if(ih(t))return oh(t);throw new Error(`Unsupported media: ${t.name}`)}async function Ps(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return As(i)}async function As(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await tm(e);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function tm(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function im(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,o)=>{const n=()=>{a({id:Be("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>o(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function am(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Be("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Fs(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function om(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,o=a.duration;if(!Number.isFinite(o)||o<=0)return;const n=(e%o+o)%o,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,f=Math.abs(a.currentTime-n);if(!s){if(a.paused||a.pause(),f>1/30)try{a.currentTime=n}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),f>.35)try{a.currentTime=n}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),f>1/30)try{a.currentTime=n}catch{}}const nm=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ao(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Vo={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Is;function rm(){return Is||(Is=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,o,n){function s(c,f){if(!o[c]){if(!a[c]){var d=typeof ao=="function"&&ao;if(!f&&d)return d(c,!0);if(r)return r(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var u=o[c]={exports:{}};a[c][0].call(u.exports,function(p){var m=a[c][1][p];return s(m||p)},u,u.exports,i,a,o,n)}return o[c].exports}for(var r=typeof ao=="function"&&ao,l=0;l<n.length;l++)s(n[l]);return s})({1:[function(i,a,o){var n=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var c,f,d,h,u,p,m,g=[],y=0,w=l.length,v=w,T=n.getTypeOf(l)!=="string";y<l.length;)v=w-y,d=T?(c=l[y++],f=y<w?l[y++]:0,y<w?l[y++]:0):(c=l.charCodeAt(y++),f=y<w?l.charCodeAt(y++):0,y<w?l.charCodeAt(y++):0),h=c>>2,u=(3&c)<<4|f>>4,p=1<v?(15&f)<<2|d>>6:64,m=2<v?63&d:64,g.push(r.charAt(h)+r.charAt(u)+r.charAt(p)+r.charAt(m));return g.join("")},o.decode=function(l){var c,f,d,h,u,p,m=0,g=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var w,v=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&v--,l.charAt(l.length-2)===r.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=s.uint8array?new Uint8Array(0|v):new Array(0|v);m<l.length;)c=r.indexOf(l.charAt(m++))<<2|(h=r.indexOf(l.charAt(m++)))>>4,f=(15&h)<<4|(u=r.indexOf(l.charAt(m++)))>>2,d=(3&u)<<6|(p=r.indexOf(l.charAt(m++))),w[g++]=c,u!==64&&(w[g++]=f),p!==64&&(w[g++]=d);return w}},{"./support":30,"./utils":32}],2:[function(i,a,o){var n=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(f,d,h,u,p){this.compressedSize=f,this.uncompressedSize=d,this.crc32=h,this.compression=u,this.compressedContent=p}c.prototype={getContentWorker:function(){var f=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return f.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,d,h){return f.pipe(new r).pipe(new l("uncompressedSize")).pipe(d.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,o){var n=i("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,o){var n=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var f=0;f<8;f++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?n.getTypeOf(r)!=="string"?(function(c,f,d,h){var u=s,p=h+d;c^=-1;for(var m=h;m<p;m++)c=c>>>8^u[255&(c^f[m])];return-1^c})(0|l,r,r.length,0):(function(c,f,d,h){var u=s,p=h+d;c^=-1;for(var m=h;m<p;m++)c=c>>>8^u[255&(c^f.charCodeAt(m))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(i,a,o){var n=null;n=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:n}},{lie:37}],7:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=n?"uint8array":"array";function f(d,h){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=h,this.meta={}}o.magic="\b\0",r.inherits(f,l),f.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,d.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(h){d.push({data:h,meta:d.meta})}},o.compressWorker=function(d){return new f("Deflate",d)},o.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,o){function n(u,p){var m,g="";for(m=0;m<p;m++)g+=String.fromCharCode(255&u),u>>>=8;return g}function s(u,p,m,g,y,w){var v,T,_=u.file,E=u.compression,M=w!==c.utf8encode,A=r.transformTo("string",w(_.name)),P=r.transformTo("string",c.utf8encode(_.name)),H=_.comment,$=r.transformTo("string",w(H)),x=r.transformTo("string",c.utf8encode(H)),R=P.length!==_.name.length,k=x.length!==H.length,U="",X="",L="",ne=_.dir,V=_.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};p&&!m||(ae.crc32=u.crc32,ae.compressedSize=u.compressedSize,ae.uncompressedSize=u.uncompressedSize);var N=0;p&&(N|=8),M||!R&&!k||(N|=2048);var O=0,se=0;ne&&(O|=16),y==="UNIX"?(se=798,O|=(function(Q,we){var Pe=Q;return Q||(Pe=we?16893:33204),(65535&Pe)<<16})(_.unixPermissions,ne)):(se=20,O|=(function(Q){return 63&(Q||0)})(_.dosPermissions)),v=V.getUTCHours(),v<<=6,v|=V.getUTCMinutes(),v<<=5,v|=V.getUTCSeconds()/2,T=V.getUTCFullYear()-1980,T<<=4,T|=V.getUTCMonth()+1,T<<=5,T|=V.getUTCDate(),R&&(X=n(1,1)+n(f(A),4)+P,U+="up"+n(X.length,2)+X),k&&(L=n(1,1)+n(f($),4)+x,U+="uc"+n(L.length,2)+L);var ie="";return ie+=`
\0`,ie+=n(N,2),ie+=E.magic,ie+=n(v,2),ie+=n(T,2),ie+=n(ae.crc32,4),ie+=n(ae.compressedSize,4),ie+=n(ae.uncompressedSize,4),ie+=n(A.length,2),ie+=n(U.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ie+A+U,dirRecord:d.CENTRAL_FILE_HEADER+n(se,2)+ie+n($.length,2)+"\0\0\0\0"+n(O,4)+n(g,4)+A+U+$}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),f=i("../crc32"),d=i("../signature");function h(u,p,m,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=m,this.encodeFileName=g,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(h,l),h.prototype.push=function(u){var p=u.meta.percent||0,m=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:m?(p+100*(m-g-1))/m:100}}))},h.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var p=this.streamFiles&&!u.file.dir;if(p){var m=s(u,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(u){this.accumulate=!1;var p=this.streamFiles&&!u.file.dir,m=s(u,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),p)this.push({data:(function(g){return d.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var u=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var m=this.bytesWritten-u,g=(function(y,w,v,T,_){var E=r.transformTo("string",_(T));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(y,2)+n(y,2)+n(w,4)+n(v,4)+n(E.length,2)+E})(this.dirRecords.length,m,u,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(u){this._sources.push(u);var p=this;return u.on("data",function(m){p.processChunk(m)}),u.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),u.on("error",function(m){p.error(m)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(u){var p=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var m=0;m<p.length;m++)try{p[m].error(u)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,p=0;p<u.length;p++)u[p].lock()},a.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,o){var n=i("../compressions"),s=i("./ZipFileWorker");o.generateWorker=function(r,l,c){var f=new s(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{r.forEach(function(h,u){d++;var p=(function(w,v){var T=w||v,_=n[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(u.options.compression,l.compression),m=u.options.compressionOptions||l.compressionOptions||{},g=u.dir,y=u.date;u._compressWorker(p,m).withStreamInfo("file",{name:h,dir:g,date:y,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(f)}),f.entriesCount=d}catch(h){f.error(h)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,r){return new n().loadAsync(s,r)},n.external=i("./external"),a.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,o){var n=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),f=i("./nodejsUtils");function d(h){return new s.Promise(function(u,p){var m=h.decompressed.getContentWorker().pipe(new c);m.on("error",function(g){p(g)}).on("end",function(){m.streamInfo.crc32!==h.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}a.exports=function(h,u){var p=this;return u=n.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),f.isNode&&f.isStream(h)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",h,!0,u.optimizedBinaryString,u.base64).then(function(m){var g=new l(u);return g.load(m),g}).then(function(m){var g=[s.Promise.resolve(m)],y=m.files;if(u.checkCRC32)for(var w=0;w<y.length;w++)g.push(d(y[w]));return s.Promise.all(g)}).then(function(m){for(var g=m.shift(),y=g.files,w=0;w<y.length;w++){var v=y[w],T=v.fileNameStr,_=n.resolve(v.fileNameStr);p.file(_,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:u.createFolders}),v.dir||(p.file(_).unsafeOriginalName=T)}return g.zipComment.length&&(p.comment=g.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,o){var n=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}n.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,o){var n=i("readable-stream").Readable;function s(r,l,c){n.call(this,l),this._helper=r;var f=this;r.on("data",function(d,h){f.push(d)||f._helper.pause(),c&&c(h)}).on("error",function(d){f.emit("error",d)}).on("end",function(){f.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,o){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,a,o){function n(_,E,M){var A,P=r.getTypeOf(E),H=r.extend(M||{},f);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(_=y(_)),H.createFolders&&(A=g(_))&&w.call(this,A,!0);var $=P==="string"&&H.binary===!1&&H.base64===!1;M&&M.binary!==void 0||(H.binary=!$),(E instanceof d&&E.uncompressedSize===0||H.dir||!E||E.length===0)&&(H.base64=!1,H.binary=!0,E="",H.compression="STORE",P="string");var x=null;x=E instanceof d||E instanceof l?E:p.isNode&&p.isStream(E)?new m(_,E):r.prepareContent(_,E,H.binary,H.optimizedBinaryString,H.base64);var R=new h(_,x,H);this.files[_]=R}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),f=i("./defaults"),d=i("./compressedObject"),h=i("./zipObject"),u=i("./generate"),p=i("./nodejsUtils"),m=i("./nodejs/NodejsStreamInputAdapter"),g=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var E=_.lastIndexOf("/");return 0<E?_.substring(0,E):""},y=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},w=function(_,E){return E=E!==void 0?E:f.createFolders,_=y(_),this.files[_]||n.call(this,_,null,{dir:!0,createFolders:E}),this.files[_]};function v(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var E,M,A;for(E in this.files)A=this.files[E],(M=E.slice(this.root.length,E.length))&&E.slice(0,this.root.length)===this.root&&_(M,A)},filter:function(_){var E=[];return this.forEach(function(M,A){_(M,A)&&E.push(A)}),E},file:function(_,E,M){if(arguments.length!==1)return _=this.root+_,n.call(this,_,E,M),this;if(v(_)){var A=_;return this.filter(function(H,$){return!$.dir&&A.test(H)})}var P=this.files[this.root+_];return P&&!P.dir?P:null},folder:function(_){if(!_)return this;if(v(_))return this.filter(function(P,H){return H.dir&&_.test(P)});var E=this.root+_,M=w.call(this,E),A=this.clone();return A.root=M.name,A},remove:function(_){_=this.root+_;var E=this.files[_];if(E||(_.slice(-1)!=="/"&&(_+="/"),E=this.files[_]),E&&!E.dir)delete this.files[_];else for(var M=this.filter(function(P,H){return H.name.slice(0,_.length)===_}),A=0;A<M.length;A++)delete this.files[M[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var E,M={};try{if((M=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=M.type.toLowerCase(),M.compression=M.compression.toUpperCase(),M.type==="binarystring"&&(M.type="string"),!M.type)throw new Error("No output type specified.");r.checkSupport(M.type),M.platform!=="darwin"&&M.platform!=="freebsd"&&M.platform!=="linux"&&M.platform!=="sunos"||(M.platform="UNIX"),M.platform==="win32"&&(M.platform="DOS");var A=M.comment||this.comment||"";E=u.generateWorker(this,M,A)}catch(P){(E=new l("error")).error(P)}return new c(E,M.type||"string",M.mimeType)},generateAsync:function(_,E){return this.generateInternalStream(_).accumulate(E)},generateNodeStream:function(_,E){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(E)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,o){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),f=r.charCodeAt(2),d=r.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===f&&this.data[h+3]===d)return h-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),f=r.charCodeAt(2),d=r.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&f===h[2]&&d===h[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,o){var n=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return n.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,o){var n=i("./Uint8ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,o){var n=i("./ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,o){var n=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),f=i("./Uint8ArrayReader");a.exports=function(d){var h=n.getTypeOf(d);return n.checkSupport(h),h!=="string"||s.uint8array?h==="nodebuffer"?new c(d):s.uint8array?new f(n.transformTo("uint8array",d)):new r(n.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,o){var n=i("./GenericWorker"),s=i("../utils");function r(l){n.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,n),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,o){var n=i("./GenericWorker"),s=i("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,n),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=n.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}n.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,o){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=n},{}],29:[function(i,a,o){var n=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),f=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(p,m){return new f.Promise(function(g,y){var w=[],v=p._internalType,T=p._outputType,_=p._mimeType;p.on("data",function(E,M){w.push(E),m&&m(M)}).on("error",function(E){w=[],y(E)}).on("end",function(){try{var E=(function(M,A,P){switch(M){case"blob":return n.newBlob(n.transformTo("arraybuffer",A),P);case"base64":return l.encode(A);default:return n.transformTo(M,A)}})(T,(function(M,A){var P,H=0,$=null,x=0;for(P=0;P<A.length;P++)x+=A[P].length;switch(M){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for($=new Uint8Array(x),P=0;P<A.length;P++)$.set(A[P],H),H+=A[P].length;return $;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+M+"'")}})(v,w),_);g(E)}catch(M){y(M)}w=[]}).resume()})}function u(p,m,g){var y=m;switch(m){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=m,this._mimeType=g,n.checkSupport(y),this._worker=p.pipe(new s(y)),p.lock()}catch(w){this._worker=new r("error"),this._worker.error(w)}}u.prototype={accumulate:function(p){return h(this,p)},on:function(p,m){var g=this;return p==="data"?this._worker.on(p,function(y){m.call(g,y.data,y.meta)}):this._worker.on(p,function(){n.delay(m,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},p)}},a.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),o.blob=s.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!i("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,o){for(var n=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}o.utf8encode=function(u){return s.nodebuffer?r.newBufferFrom(u,"utf-8"):(function(p){var m,g,y,w,v,T=p.length,_=0;for(w=0;w<T;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<T&&(64512&(y=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),w++),_+=g<128?1:g<2048?2:g<65536?3:4;for(m=s.uint8array?new Uint8Array(_):new Array(_),w=v=0;v<_;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<T&&(64512&(y=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),w++),g<128?m[v++]=g:(g<2048?m[v++]=192|g>>>6:(g<65536?m[v++]=224|g>>>12:(m[v++]=240|g>>>18,m[v++]=128|g>>>12&63),m[v++]=128|g>>>6&63),m[v++]=128|63&g);return m})(u)},o.utf8decode=function(u){return s.nodebuffer?n.transformTo("nodebuffer",u).toString("utf-8"):(function(p){var m,g,y,w,v=p.length,T=new Array(2*v);for(m=g=0;m<v;)if((y=p[m++])<128)T[g++]=y;else if(4<(w=c[y]))T[g++]=65533,m+=w-1;else{for(y&=w===2?31:w===3?15:7;1<w&&m<v;)y=y<<6|63&p[m++],w--;1<w?T[g++]=65533:y<65536?T[g++]=y:(y-=65536,T[g++]=55296|y>>10&1023,T[g++]=56320|1023&y)}return T.length!==g&&(T.subarray?T=T.subarray(0,g):T.length=g),n.applyFromCharCode(T)})(u=n.transformTo(s.uint8array?"uint8array":"array",u))},n.inherits(d,l),d.prototype.processChunk=function(u){var p=n.transformTo(s.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var m=p;(p=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),p.set(m,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var g=(function(w,v){var T;for((v=v||w.length)>w.length&&(v=w.length),T=v-1;0<=T&&(192&w[T])==128;)T--;return T<0||T===0?v:T+c[w[T]]>v?T:v})(p),y=p;g!==p.length&&(s.uint8array?(y=p.subarray(0,g),this.leftOver=p.subarray(g,p.length)):(y=p.slice(0,g),this.leftOver=p.slice(g,p.length))),this.push({data:o.utf8decode(y),meta:u.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=d,n.inherits(h,l),h.prototype.processChunk=function(u){this.push({data:o.utf8encode(u.data),meta:u.meta})},o.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,o){var n=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(m){return m}function f(m,g){for(var y=0;y<m.length;++y)g[y]=255&m.charCodeAt(y);return g}i("setimmediate"),o.newBlob=function(m,g){o.checkSupport("blob");try{return new Blob([m],{type:g})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(m),y.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(m,g,y){var w=[],v=0,T=m.length;if(T<=y)return String.fromCharCode.apply(null,m);for(;v<T;)g==="array"||g==="nodebuffer"?w.push(String.fromCharCode.apply(null,m.slice(v,Math.min(v+y,T)))):w.push(String.fromCharCode.apply(null,m.subarray(v,Math.min(v+y,T)))),v+=y;return w.join("")},stringifyByChar:function(m){for(var g="",y=0;y<m.length;y++)g+=String.fromCharCode(m[y]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function h(m){var g=65536,y=o.getTypeOf(m),w=!0;if(y==="uint8array"?w=d.applyCanBeUsed.uint8array:y==="nodebuffer"&&(w=d.applyCanBeUsed.nodebuffer),w)for(;1<g;)try{return d.stringifyByChunk(m,y,g)}catch{g=Math.floor(g/2)}return d.stringifyByChar(m)}function u(m,g){for(var y=0;y<m.length;y++)g[y]=m[y];return g}o.applyFromCharCode=h;var p={};p.string={string:c,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return p.string.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:function(m){return f(m,r.allocBuffer(m.length))}},p.array={string:h,array:c,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return r.newBufferFrom(m)}},p.arraybuffer={string:function(m){return h(new Uint8Array(m))},array:function(m){return u(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:c,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return r.newBufferFrom(new Uint8Array(m))}},p.uint8array={string:h,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:c,nodebuffer:function(m){return r.newBufferFrom(m)}},p.nodebuffer={string:h,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return p.nodebuffer.uint8array(m).buffer},uint8array:function(m){return u(m,new Uint8Array(m.length))},nodebuffer:c},o.transformTo=function(m,g){if(g=g||"",!m)return g;o.checkSupport(m);var y=o.getTypeOf(g);return p[y][m](g)},o.resolve=function(m){for(var g=m.split("/"),y=[],w=0;w<g.length;w++){var v=g[w];v==="."||v===""&&w!==0&&w!==g.length-1||(v===".."?y.pop():y.push(v))}return y.join("/")},o.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":n.nodebuffer&&r.isBuffer(m)?"nodebuffer":n.uint8array&&m instanceof Uint8Array?"uint8array":n.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(m){if(!n[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(m){var g,y,w="";for(y=0;y<(m||"").length;y++)w+="\\x"+((g=m.charCodeAt(y))<16?"0":"")+g.toString(16).toUpperCase();return w},o.delay=function(m,g,y){setImmediate(function(){m.apply(y||null,g||[])})},o.inherits=function(m,g){function y(){}y.prototype=g.prototype,m.prototype=new y},o.extend=function(){var m,g,y={};for(m=0;m<arguments.length;m++)for(g in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],g)&&y[g]===void 0&&(y[g]=arguments[m][g]);return y},o.prepareContent=function(m,g,y,w,v){return l.Promise.resolve(g).then(function(T){return n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,E){var M=new FileReader;M.onload=function(A){_(A.target.result)},M.onerror=function(A){E(A.target.error)},M.readAsArrayBuffer(T)}):T}).then(function(T){var _=o.getTypeOf(T);return _?(_==="arraybuffer"?T=o.transformTo("uint8array",T):_==="string"&&(v?T=s.decode(T):y&&w!==!0&&(T=(function(E){return f(E,n.uint8array?new Uint8Array(E.length):new Array(E.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function f(d){this.files=[],this.loadOptions=d}f.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(h)+", expected "+s.pretty(d)+")")}},isSignature:function(d,h){var u=this.reader.index;this.reader.setIndex(d);var p=this.reader.readString(4)===h;return this.reader.setIndex(u),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",u=s.transformTo(h,d);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,h,u,p=this.zip64EndOfCentralSize-44;0<p;)d=this.reader.readInt(2),h=this.reader.readInt(4),u=this.reader.readData(h),this.zip64ExtensibleData[d]={id:d,length:h,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,h;for(d=0;d<this.files.length;d++)h=this.files[d],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var h=d;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var p=h-u;if(0<p)this.isSignature(h,r.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(d){this.reader=n(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),f=i("./compressions"),d=i("./support");function h(u,p){this.options=u,this.loadOptions=p}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var p,m;if(u.skip(22),this.fileNameLength=u.readInt(2),m=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(g){for(var y in f)if(Object.prototype.hasOwnProperty.call(f,y)&&f[y].magic===g)return f[y];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,p,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var p=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(p),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var p,m,g,y=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<y;)p=u.readInt(2),m=u.readInt(2),g=u.readData(m),this.extraFields[p]={id:p,length:m,value:g};u.setIndex(y)},handleUTF8:function(){var u=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var m=s.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var y=s.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var p=n(u.value);return p.readInt(1)!==1||l(this.fileName)!==p.readInt(4)?null:c.utf8decode(p.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var p=n(u.value);return p.readInt(1)!==1||l(this.fileComment)!==p.readInt(4)?null:c.utf8decode(p.readData(u.length-5))}return null}},a.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,o){function n(p,m,g){this.name=p,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=m,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),f=i("./stream/GenericWorker");n.prototype={internalStream:function(p){var m=null,g="string";try{if(!p)throw new Error("No output type specified.");var y=(g=p.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),m=this._decompressWorker();var w=!this._dataBinary;w&&!y&&(m=m.pipe(new l.Utf8EncodeWorker)),!w&&y&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(v){(m=new f("error")).error(v)}return new s(m,g,"")},async:function(p,m){return this.internalStream(p).accumulate(m)},nodeStream:function(p,m){return this.internalStream(p||"nodebuffer").toNodejsStream(m)},_compressWorker:function(p,m){if(this._data instanceof c&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,p,m)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)n.prototype[d[u]]=h;a.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,o){(function(n){var s,r,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var c=0,f=new l(p),d=n.document.createTextNode("");f.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var m=n.document.createElement("script");m.onreadystatechange=function(){p(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},n.document.documentElement.appendChild(m)}:function(){setTimeout(p,0)};else{var h=new n.MessageChannel;h.port1.onmessage=p,s=function(){h.port2.postMessage(0)}}var u=[];function p(){var m,g;r=!0;for(var y=u.length;y;){for(g=u,u=[],m=-1;++m<y;)g[m]();y=u.length}r=!1}a.exports=function(m){u.push(m)!==1||r||s()}}).call(this,typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,o){var n=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function d(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,y!==s&&m(this,y)}function h(y,w,v){this.promise=y,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function u(y,w,v){n(function(){var T;try{T=w(v)}catch(_){return r.reject(y,_)}T===y?r.reject(y,new TypeError("Cannot resolve promise with itself")):r.resolve(y,T)})}function p(y){var w=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof w=="function")return function(){w.apply(y,arguments)}}function m(y,w){var v=!1;function T(M){v||(v=!0,r.reject(y,M))}function _(M){v||(v=!0,r.resolve(y,M))}var E=g(function(){w(_,T)});E.status==="error"&&T(E.value)}function g(y,w){var v={};try{v.value=y(w),v.status="success"}catch(T){v.status="error",v.value=T}return v}(a.exports=d).prototype.finally=function(y){if(typeof y!="function")return this;var w=this.constructor;return this.then(function(v){return w.resolve(y()).then(function(){return v})},function(v){return w.resolve(y()).then(function(){throw v})})},d.prototype.catch=function(y){return this.then(null,y)},d.prototype.then=function(y,w){if(typeof y!="function"&&this.state===c||typeof w!="function"&&this.state===l)return this;var v=new this.constructor(s);return this.state!==f?u(v,this.state===c?y:w,this.outcome):this.queue.push(new h(v,y,w)),v},h.prototype.callFulfilled=function(y){r.resolve(this.promise,y)},h.prototype.otherCallFulfilled=function(y){u(this.promise,this.onFulfilled,y)},h.prototype.callRejected=function(y){r.reject(this.promise,y)},h.prototype.otherCallRejected=function(y){u(this.promise,this.onRejected,y)},r.resolve=function(y,w){var v=g(p,w);if(v.status==="error")return r.reject(y,v.value);var T=v.value;if(T)m(y,T);else{y.state=c,y.outcome=w;for(var _=-1,E=y.queue.length;++_<E;)y.queue[_].callFulfilled(w)}return y},r.reject=function(y,w){y.state=l,y.outcome=w;for(var v=-1,T=y.queue.length;++v<T;)y.queue[v].callRejected(w);return y},d.resolve=function(y){return y instanceof this?y:r.resolve(new this(s),y)},d.reject=function(y){var w=new this(s);return r.reject(w,y)},d.all=function(y){var w=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=y.length,T=!1;if(!v)return this.resolve([]);for(var _=new Array(v),E=0,M=-1,A=new this(s);++M<v;)P(y[M],M);return A;function P(H,$){w.resolve(H).then(function(x){_[$]=x,++E!==v||T||(T=!0,r.resolve(A,_))},function(x){T||(T=!0,r.reject(A,x))})}},d.race=function(y){var w=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=y.length,T=!1;if(!v)return this.resolve([]);for(var _=-1,E=new this(s);++_<v;)M=y[_],w.resolve(M).then(function(A){T||(T=!0,r.resolve(E,A))},function(A){T||(T=!0,r.reject(E,A))});var M;return E}},{immediate:36}],38:[function(i,a,o){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,o){var n=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),f=Object.prototype.toString,d=0,h=-1,u=0,p=8;function m(y){if(!(this instanceof m))return new m(y);this.options=s.assign({level:h,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},y||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=n.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(v!==d)throw new Error(l[v]);if(w.header&&n.deflateSetHeader(this.strm,w.header),w.dictionary){var T;if(T=typeof w.dictionary=="string"?r.string2buf(w.dictionary):f.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(v=n.deflateSetDictionary(this.strm,T))!==d)throw new Error(l[v]);this._dict_set=!0}}function g(y,w){var v=new m(w);if(v.push(y,!0),v.err)throw v.msg||l[v.err];return v.result}m.prototype.push=function(y,w){var v,T,_=this.strm,E=this.options.chunkSize;if(this.ended)return!1;T=w===~~w?w:w===!0?4:0,typeof y=="string"?_.input=r.string2buf(y):f.call(y)==="[object ArrayBuffer]"?_.input=new Uint8Array(y):_.input=y,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(E),_.next_out=0,_.avail_out=E),(v=n.deflate(_,T))!==1&&v!==d)return this.onEnd(v),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&v!==1);return T===4?(v=n.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===d):T!==2||(this.onEnd(d),!(_.avail_out=0))},m.prototype.onData=function(y){this.chunks.push(y)},m.prototype.onEnd=function(y){y===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},o.Deflate=m,o.deflate=g,o.deflateRaw=function(y,w){return(w=w||{}).raw=!0,g(y,w)},o.gzip=function(y,w){return(w=w||{}).gzip=!0,g(y,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,o){var n=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),f=i("./zlib/zstream"),d=i("./zlib/gzheader"),h=Object.prototype.toString;function u(m){if(!(this instanceof u))return new u(m);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},m||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||m&&m.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var y=n.inflateInit2(this.strm,g.windowBits);if(y!==l.Z_OK)throw new Error(c[y]);this.header=new d,n.inflateGetHeader(this.strm,this.header)}function p(m,g){var y=new u(g);if(y.push(m,!0),y.err)throw y.msg||c[y.err];return y.result}u.prototype.push=function(m,g){var y,w,v,T,_,E,M=this.strm,A=this.options.chunkSize,P=this.options.dictionary,H=!1;if(this.ended)return!1;w=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?M.input=r.binstring2buf(m):h.call(m)==="[object ArrayBuffer]"?M.input=new Uint8Array(m):M.input=m,M.next_in=0,M.avail_in=M.input.length;do{if(M.avail_out===0&&(M.output=new s.Buf8(A),M.next_out=0,M.avail_out=A),(y=n.inflate(M,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&P&&(E=typeof P=="string"?r.string2buf(P):h.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,y=n.inflateSetDictionary(this.strm,E)),y===l.Z_BUF_ERROR&&H===!0&&(y=l.Z_OK,H=!1),y!==l.Z_STREAM_END&&y!==l.Z_OK)return this.onEnd(y),!(this.ended=!0);M.next_out&&(M.avail_out!==0&&y!==l.Z_STREAM_END&&(M.avail_in!==0||w!==l.Z_FINISH&&w!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=r.utf8border(M.output,M.next_out),T=M.next_out-v,_=r.buf2string(M.output,v),M.next_out=T,M.avail_out=A-T,T&&s.arraySet(M.output,M.output,v,T,0),this.onData(_)):this.onData(s.shrinkBuf(M.output,M.next_out)))),M.avail_in===0&&M.avail_out===0&&(H=!0)}while((0<M.avail_in||M.avail_out===0)&&y!==l.Z_STREAM_END);return y===l.Z_STREAM_END&&(w=l.Z_FINISH),w===l.Z_FINISH?(y=n.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===l.Z_OK):w!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(M.avail_out=0))},u.prototype.onData=function(m){this.chunks.push(m)},u.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},o.Inflate=u,o.inflate=p,o.inflateRaw=function(m,g){return(g=g||{}).raw=!0,p(m,g)},o.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var d in f)f.hasOwnProperty(d)&&(l[d]=f[d])}}return l},o.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,f,d,h){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+d),h);else for(var u=0;u<d;u++)l[h+u]=c[f+u]},flattenChunks:function(l){var c,f,d,h,u,p;for(c=d=0,f=l.length;c<f;c++)d+=l[c].length;for(p=new Uint8Array(d),c=h=0,f=l.length;c<f;c++)u=l[c],p.set(u,h),h+=u.length;return p}},r={arraySet:function(l,c,f,d,h){for(var u=0;u<d;u++)l[h+u]=c[f+u]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,s)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,r))},o.setTyped(n)},{}],42:[function(i,a,o){var n=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new n.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(d,h){if(h<65537&&(d.subarray&&r||!d.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(d,h));for(var u="",p=0;p<h;p++)u+=String.fromCharCode(d[p]);return u}l[254]=l[254]=1,o.string2buf=function(d){var h,u,p,m,g,y=d.length,w=0;for(m=0;m<y;m++)(64512&(u=d.charCodeAt(m)))==55296&&m+1<y&&(64512&(p=d.charCodeAt(m+1)))==56320&&(u=65536+(u-55296<<10)+(p-56320),m++),w+=u<128?1:u<2048?2:u<65536?3:4;for(h=new n.Buf8(w),m=g=0;g<w;m++)(64512&(u=d.charCodeAt(m)))==55296&&m+1<y&&(64512&(p=d.charCodeAt(m+1)))==56320&&(u=65536+(u-55296<<10)+(p-56320),m++),u<128?h[g++]=u:(u<2048?h[g++]=192|u>>>6:(u<65536?h[g++]=224|u>>>12:(h[g++]=240|u>>>18,h[g++]=128|u>>>12&63),h[g++]=128|u>>>6&63),h[g++]=128|63&u);return h},o.buf2binstring=function(d){return f(d,d.length)},o.binstring2buf=function(d){for(var h=new n.Buf8(d.length),u=0,p=h.length;u<p;u++)h[u]=d.charCodeAt(u);return h},o.buf2string=function(d,h){var u,p,m,g,y=h||d.length,w=new Array(2*y);for(u=p=0;u<y;)if((m=d[u++])<128)w[p++]=m;else if(4<(g=l[m]))w[p++]=65533,u+=g-1;else{for(m&=g===2?31:g===3?15:7;1<g&&u<y;)m=m<<6|63&d[u++],g--;1<g?w[p++]=65533:m<65536?w[p++]=m:(m-=65536,w[p++]=55296|m>>10&1023,w[p++]=56320|1023&m)}return f(w,p)},o.utf8border=function(d,h){var u;for((h=h||d.length)>d.length&&(h=d.length),u=h-1;0<=u&&(192&d[u])==128;)u--;return u<0||u===0?h:u+l[d[u]]>h?u:h}},{"./common":41}],43:[function(i,a,o){a.exports=function(n,s,r,l){for(var c=65535&n|0,f=n>>>16&65535|0,d=0;r!==0;){for(r-=d=2e3<r?2e3:r;f=f+(c=c+s[l++]|0)|0,--d;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(i,a,o){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,o){var n=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var f=n,d=c+l;s^=-1;for(var h=c;h<d;h++)s=s>>>8^f[255&(s^r[h])];return-1^s}},{}],46:[function(i,a,o){var n,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),f=i("./messages"),d=0,h=4,u=0,p=-2,m=-1,g=4,y=2,w=8,v=9,T=286,_=30,E=19,M=2*T+1,A=15,P=3,H=258,$=H+P+1,x=42,R=113,k=1,U=2,X=3,L=4;function ne(b,W){return b.msg=f[W],W}function V(b){return(b<<1)-(4<b?9:0)}function ae(b){for(var W=b.length;0<=--W;)b[W]=0}function N(b){var W=b.state,q=W.pending;q>b.avail_out&&(q=b.avail_out),q!==0&&(s.arraySet(b.output,W.pending_buf,W.pending_out,q,b.next_out),b.next_out+=q,W.pending_out+=q,b.total_out+=q,b.avail_out-=q,W.pending-=q,W.pending===0&&(W.pending_out=0))}function O(b,W){r._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,W),b.block_start=b.strstart,N(b.strm)}function se(b,W){b.pending_buf[b.pending++]=W}function ie(b,W){b.pending_buf[b.pending++]=W>>>8&255,b.pending_buf[b.pending++]=255&W}function Q(b,W){var q,C,S=b.max_chain_length,B=b.strstart,j=b.prev_length,G=b.nice_match,z=b.strstart>b.w_size-$?b.strstart-(b.w_size-$):0,Z=b.window,oe=b.w_mask,J=b.prev,ce=b.strstart+H,be=Z[B+j-1],he=Z[B+j];b.prev_length>=b.good_match&&(S>>=2),G>b.lookahead&&(G=b.lookahead);do if(Z[(q=W)+j]===he&&Z[q+j-1]===be&&Z[q]===Z[B]&&Z[++q]===Z[B+1]){B+=2,q++;do;while(Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&Z[++B]===Z[++q]&&B<ce);if(C=H-(ce-B),B=ce-H,j<C){if(b.match_start=W,G<=(j=C))break;be=Z[B+j-1],he=Z[B+j]}}while((W=J[W&oe])>z&&--S!=0);return j<=b.lookahead?j:b.lookahead}function we(b){var W,q,C,S,B,j,G,z,Z,oe,J=b.w_size;do{if(S=b.window_size-b.lookahead-b.strstart,b.strstart>=J+(J-$)){for(s.arraySet(b.window,b.window,J,J,0),b.match_start-=J,b.strstart-=J,b.block_start-=J,W=q=b.hash_size;C=b.head[--W],b.head[W]=J<=C?C-J:0,--q;);for(W=q=J;C=b.prev[--W],b.prev[W]=J<=C?C-J:0,--q;);S+=J}if(b.strm.avail_in===0)break;if(j=b.strm,G=b.window,z=b.strstart+b.lookahead,Z=S,oe=void 0,oe=j.avail_in,Z<oe&&(oe=Z),q=oe===0?0:(j.avail_in-=oe,s.arraySet(G,j.input,j.next_in,oe,z),j.state.wrap===1?j.adler=l(j.adler,G,oe,z):j.state.wrap===2&&(j.adler=c(j.adler,G,oe,z)),j.next_in+=oe,j.total_in+=oe,oe),b.lookahead+=q,b.lookahead+b.insert>=P)for(B=b.strstart-b.insert,b.ins_h=b.window[B],b.ins_h=(b.ins_h<<b.hash_shift^b.window[B+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[B+P-1])&b.hash_mask,b.prev[B&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=B,B++,b.insert--,!(b.lookahead+b.insert<P)););}while(b.lookahead<$&&b.strm.avail_in!==0)}function Pe(b,W){for(var q,C;;){if(b.lookahead<$){if(we(b),b.lookahead<$&&W===d)return k;if(b.lookahead===0)break}if(q=0,b.lookahead>=P&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+P-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),q!==0&&b.strstart-q<=b.w_size-$&&(b.match_length=Q(b,q)),b.match_length>=P)if(C=r._tr_tally(b,b.strstart-b.match_start,b.match_length-P),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=P){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+P-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else C=r._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(C&&(O(b,!1),b.strm.avail_out===0))return k}return b.insert=b.strstart<P-1?b.strstart:P-1,W===h?(O(b,!0),b.strm.avail_out===0?X:L):b.last_lit&&(O(b,!1),b.strm.avail_out===0)?k:U}function fe(b,W){for(var q,C,S;;){if(b.lookahead<$){if(we(b),b.lookahead<$&&W===d)return k;if(b.lookahead===0)break}if(q=0,b.lookahead>=P&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+P-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=P-1,q!==0&&b.prev_length<b.max_lazy_match&&b.strstart-q<=b.w_size-$&&(b.match_length=Q(b,q),b.match_length<=5&&(b.strategy===1||b.match_length===P&&4096<b.strstart-b.match_start)&&(b.match_length=P-1)),b.prev_length>=P&&b.match_length<=b.prev_length){for(S=b.strstart+b.lookahead-P,C=r._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-P),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=S&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+P-1])&b.hash_mask,q=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=P-1,b.strstart++,C&&(O(b,!1),b.strm.avail_out===0))return k}else if(b.match_available){if((C=r._tr_tally(b,0,b.window[b.strstart-1]))&&O(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return k}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(C=r._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<P-1?b.strstart:P-1,W===h?(O(b,!0),b.strm.avail_out===0?X:L):b.last_lit&&(O(b,!1),b.strm.avail_out===0)?k:U}function pe(b,W,q,C,S){this.good_length=b,this.max_lazy=W,this.nice_length=q,this.max_chain=C,this.func=S}function Me(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*M),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*E+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(A+1),this.heap=new s.Buf16(2*T+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(b){var W;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=y,(W=b.state).pending=0,W.pending_out=0,W.wrap<0&&(W.wrap=-W.wrap),W.status=W.wrap?x:R,b.adler=W.wrap===2?0:1,W.last_flush=d,r._tr_init(W),u):ne(b,p)}function Xe(b){var W=_e(b);return W===u&&(function(q){q.window_size=2*q.w_size,ae(q.head),q.max_lazy_match=n[q.level].max_lazy,q.good_match=n[q.level].good_length,q.nice_match=n[q.level].nice_length,q.max_chain_length=n[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=P-1,q.match_available=0,q.ins_h=0})(b.state),W}function Ne(b,W,q,C,S,B){if(!b)return p;var j=1;if(W===m&&(W=6),C<0?(j=0,C=-C):15<C&&(j=2,C-=16),S<1||v<S||q!==w||C<8||15<C||W<0||9<W||B<0||g<B)return ne(b,p);C===8&&(C=9);var G=new Me;return(b.state=G).strm=b,G.wrap=j,G.gzhead=null,G.w_bits=C,G.w_size=1<<G.w_bits,G.w_mask=G.w_size-1,G.hash_bits=S+7,G.hash_size=1<<G.hash_bits,G.hash_mask=G.hash_size-1,G.hash_shift=~~((G.hash_bits+P-1)/P),G.window=new s.Buf8(2*G.w_size),G.head=new s.Buf16(G.hash_size),G.prev=new s.Buf16(G.w_size),G.lit_bufsize=1<<S+6,G.pending_buf_size=4*G.lit_bufsize,G.pending_buf=new s.Buf8(G.pending_buf_size),G.d_buf=1*G.lit_bufsize,G.l_buf=3*G.lit_bufsize,G.level=W,G.strategy=B,G.method=q,Xe(b)}n=[new pe(0,0,0,0,function(b,W){var q=65535;for(q>b.pending_buf_size-5&&(q=b.pending_buf_size-5);;){if(b.lookahead<=1){if(we(b),b.lookahead===0&&W===d)return k;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var C=b.block_start+q;if((b.strstart===0||b.strstart>=C)&&(b.lookahead=b.strstart-C,b.strstart=C,O(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-$&&(O(b,!1),b.strm.avail_out===0))return k}return b.insert=0,W===h?(O(b,!0),b.strm.avail_out===0?X:L):(b.strstart>b.block_start&&(O(b,!1),b.strm.avail_out),k)}),new pe(4,4,8,4,Pe),new pe(4,5,16,8,Pe),new pe(4,6,32,32,Pe),new pe(4,4,16,16,fe),new pe(8,16,32,32,fe),new pe(8,16,128,128,fe),new pe(8,32,128,256,fe),new pe(32,128,258,1024,fe),new pe(32,258,258,4096,fe)],o.deflateInit=function(b,W){return Ne(b,W,w,15,8,0)},o.deflateInit2=Ne,o.deflateReset=Xe,o.deflateResetKeep=_e,o.deflateSetHeader=function(b,W){return b&&b.state?b.state.wrap!==2?p:(b.state.gzhead=W,u):p},o.deflate=function(b,W){var q,C,S,B;if(!b||!b.state||5<W||W<0)return b?ne(b,p):p;if(C=b.state,!b.output||!b.input&&b.avail_in!==0||C.status===666&&W!==h)return ne(b,b.avail_out===0?-5:p);if(C.strm=b,q=C.last_flush,C.last_flush=W,C.status===x)if(C.wrap===2)b.adler=0,se(C,31),se(C,139),se(C,8),C.gzhead?(se(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),se(C,255&C.gzhead.time),se(C,C.gzhead.time>>8&255),se(C,C.gzhead.time>>16&255),se(C,C.gzhead.time>>24&255),se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),se(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(se(C,255&C.gzhead.extra.length),se(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(b.adler=c(b.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(se(C,0),se(C,0),se(C,0),se(C,0),se(C,0),se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),se(C,3),C.status=R);else{var j=w+(C.w_bits-8<<4)<<8;j|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(j|=32),j+=31-j%31,C.status=R,ie(C,j),C.strstart!==0&&(ie(C,b.adler>>>16),ie(C,65535&b.adler)),b.adler=1}if(C.status===69)if(C.gzhead.extra){for(S=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>S&&(b.adler=c(b.adler,C.pending_buf,C.pending-S,S)),N(b),S=C.pending,C.pending!==C.pending_buf_size));)se(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>S&&(b.adler=c(b.adler,C.pending_buf,C.pending-S,S)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(b.adler=c(b.adler,C.pending_buf,C.pending-S,S)),N(b),S=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>S&&(b.adler=c(b.adler,C.pending_buf,C.pending-S,S)),B===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(b.adler=c(b.adler,C.pending_buf,C.pending-S,S)),N(b),S=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>S&&(b.adler=c(b.adler,C.pending_buf,C.pending-S,S)),B===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&N(b),C.pending+2<=C.pending_buf_size&&(se(C,255&b.adler),se(C,b.adler>>8&255),b.adler=0,C.status=R)):C.status=R),C.pending!==0){if(N(b),b.avail_out===0)return C.last_flush=-1,u}else if(b.avail_in===0&&V(W)<=V(q)&&W!==h)return ne(b,-5);if(C.status===666&&b.avail_in!==0)return ne(b,-5);if(b.avail_in!==0||C.lookahead!==0||W!==d&&C.status!==666){var G=C.strategy===2?(function(z,Z){for(var oe;;){if(z.lookahead===0&&(we(z),z.lookahead===0)){if(Z===d)return k;break}if(z.match_length=0,oe=r._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++,oe&&(O(z,!1),z.strm.avail_out===0))return k}return z.insert=0,Z===h?(O(z,!0),z.strm.avail_out===0?X:L):z.last_lit&&(O(z,!1),z.strm.avail_out===0)?k:U})(C,W):C.strategy===3?(function(z,Z){for(var oe,J,ce,be,he=z.window;;){if(z.lookahead<=H){if(we(z),z.lookahead<=H&&Z===d)return k;if(z.lookahead===0)break}if(z.match_length=0,z.lookahead>=P&&0<z.strstart&&(J=he[ce=z.strstart-1])===he[++ce]&&J===he[++ce]&&J===he[++ce]){be=z.strstart+H;do;while(J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&ce<be);z.match_length=H-(be-ce),z.match_length>z.lookahead&&(z.match_length=z.lookahead)}if(z.match_length>=P?(oe=r._tr_tally(z,1,z.match_length-P),z.lookahead-=z.match_length,z.strstart+=z.match_length,z.match_length=0):(oe=r._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++),oe&&(O(z,!1),z.strm.avail_out===0))return k}return z.insert=0,Z===h?(O(z,!0),z.strm.avail_out===0?X:L):z.last_lit&&(O(z,!1),z.strm.avail_out===0)?k:U})(C,W):n[C.level].func(C,W);if(G!==X&&G!==L||(C.status=666),G===k||G===X)return b.avail_out===0&&(C.last_flush=-1),u;if(G===U&&(W===1?r._tr_align(C):W!==5&&(r._tr_stored_block(C,0,0,!1),W===3&&(ae(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),N(b),b.avail_out===0))return C.last_flush=-1,u}return W!==h?u:C.wrap<=0?1:(C.wrap===2?(se(C,255&b.adler),se(C,b.adler>>8&255),se(C,b.adler>>16&255),se(C,b.adler>>24&255),se(C,255&b.total_in),se(C,b.total_in>>8&255),se(C,b.total_in>>16&255),se(C,b.total_in>>24&255)):(ie(C,b.adler>>>16),ie(C,65535&b.adler)),N(b),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?u:1)},o.deflateEnd=function(b){var W;return b&&b.state?(W=b.state.status)!==x&&W!==69&&W!==73&&W!==91&&W!==103&&W!==R&&W!==666?ne(b,p):(b.state=null,W===R?ne(b,-3):u):p},o.deflateSetDictionary=function(b,W){var q,C,S,B,j,G,z,Z,oe=W.length;if(!b||!b.state||(B=(q=b.state).wrap)===2||B===1&&q.status!==x||q.lookahead)return p;for(B===1&&(b.adler=l(b.adler,W,oe,0)),q.wrap=0,oe>=q.w_size&&(B===0&&(ae(q.head),q.strstart=0,q.block_start=0,q.insert=0),Z=new s.Buf8(q.w_size),s.arraySet(Z,W,oe-q.w_size,q.w_size,0),W=Z,oe=q.w_size),j=b.avail_in,G=b.next_in,z=b.input,b.avail_in=oe,b.next_in=0,b.input=W,we(q);q.lookahead>=P;){for(C=q.strstart,S=q.lookahead-(P-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[C+P-1])&q.hash_mask,q.prev[C&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=C,C++,--S;);q.strstart=C,q.lookahead=P-1,we(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=P-1,q.match_available=0,b.next_in=G,b.input=z,b.avail_in=j,q.wrap=B,u},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,o){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,o){a.exports=function(n,s){var r,l,c,f,d,h,u,p,m,g,y,w,v,T,_,E,M,A,P,H,$,x,R,k,U;r=n.state,l=n.next_in,k=n.input,c=l+(n.avail_in-5),f=n.next_out,U=n.output,d=f-(s-n.avail_out),h=f+(n.avail_out-257),u=r.dmax,p=r.wsize,m=r.whave,g=r.wnext,y=r.window,w=r.hold,v=r.bits,T=r.lencode,_=r.distcode,E=(1<<r.lenbits)-1,M=(1<<r.distbits)-1;e:do{v<15&&(w+=k[l++]<<v,v+=8,w+=k[l++]<<v,v+=8),A=T[w&E];t:for(;;){if(w>>>=P=A>>>24,v-=P,(P=A>>>16&255)===0)U[f++]=65535&A;else{if(!(16&P)){if((64&P)==0){A=T[(65535&A)+(w&(1<<P)-1)];continue t}if(32&P){r.mode=12;break e}n.msg="invalid literal/length code",r.mode=30;break e}H=65535&A,(P&=15)&&(v<P&&(w+=k[l++]<<v,v+=8),H+=w&(1<<P)-1,w>>>=P,v-=P),v<15&&(w+=k[l++]<<v,v+=8,w+=k[l++]<<v,v+=8),A=_[w&M];i:for(;;){if(w>>>=P=A>>>24,v-=P,!(16&(P=A>>>16&255))){if((64&P)==0){A=_[(65535&A)+(w&(1<<P)-1)];continue i}n.msg="invalid distance code",r.mode=30;break e}if($=65535&A,v<(P&=15)&&(w+=k[l++]<<v,(v+=8)<P&&(w+=k[l++]<<v,v+=8)),u<($+=w&(1<<P)-1)){n.msg="invalid distance too far back",r.mode=30;break e}if(w>>>=P,v-=P,(P=f-d)<$){if(m<(P=$-P)&&r.sane){n.msg="invalid distance too far back",r.mode=30;break e}if(R=y,(x=0)===g){if(x+=p-P,P<H){for(H-=P;U[f++]=y[x++],--P;);x=f-$,R=U}}else if(g<P){if(x+=p+g-P,(P-=g)<H){for(H-=P;U[f++]=y[x++],--P;);if(x=0,g<H){for(H-=P=g;U[f++]=y[x++],--P;);x=f-$,R=U}}}else if(x+=g-P,P<H){for(H-=P;U[f++]=y[x++],--P;);x=f-$,R=U}for(;2<H;)U[f++]=R[x++],U[f++]=R[x++],U[f++]=R[x++],H-=3;H&&(U[f++]=R[x++],1<H&&(U[f++]=R[x++]))}else{for(x=f-$;U[f++]=U[x++],U[f++]=U[x++],U[f++]=U[x++],2<(H-=3););H&&(U[f++]=U[x++],1<H&&(U[f++]=U[x++]))}break}}break}}while(l<c&&f<h);l-=H=v>>3,w&=(1<<(v-=H<<3))-1,n.next_in=l,n.next_out=f,n.avail_in=l<c?c-l+5:5-(l-c),n.avail_out=f<h?h-f+257:257-(f-h),r.hold=w,r.bits=v}},{}],49:[function(i,a,o){var n=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),f=1,d=2,h=0,u=-2,p=1,m=852,g=592;function y(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(x){var R;return x&&x.state?(R=x.state,x.total_in=x.total_out=R.total=0,x.msg="",R.wrap&&(x.adler=1&R.wrap),R.mode=p,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new n.Buf32(m),R.distcode=R.distdyn=new n.Buf32(g),R.sane=1,R.back=-1,h):u}function T(x){var R;return x&&x.state?((R=x.state).wsize=0,R.whave=0,R.wnext=0,v(x)):u}function _(x,R){var k,U;return x&&x.state?(U=x.state,R<0?(k=0,R=-R):(k=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?u:(U.window!==null&&U.wbits!==R&&(U.window=null),U.wrap=k,U.wbits=R,T(x))):u}function E(x,R){var k,U;return x?(U=new w,(x.state=U).window=null,(k=_(x,R))!==h&&(x.state=null),k):u}var M,A,P=!0;function H(x){if(P){var R;for(M=new n.Buf32(512),A=new n.Buf32(32),R=0;R<144;)x.lens[R++]=8;for(;R<256;)x.lens[R++]=9;for(;R<280;)x.lens[R++]=7;for(;R<288;)x.lens[R++]=8;for(c(f,x.lens,0,288,M,0,x.work,{bits:9}),R=0;R<32;)x.lens[R++]=5;c(d,x.lens,0,32,A,0,x.work,{bits:5}),P=!1}x.lencode=M,x.lenbits=9,x.distcode=A,x.distbits=5}function $(x,R,k,U){var X,L=x.state;return L.window===null&&(L.wsize=1<<L.wbits,L.wnext=0,L.whave=0,L.window=new n.Buf8(L.wsize)),U>=L.wsize?(n.arraySet(L.window,R,k-L.wsize,L.wsize,0),L.wnext=0,L.whave=L.wsize):(U<(X=L.wsize-L.wnext)&&(X=U),n.arraySet(L.window,R,k-U,X,L.wnext),(U-=X)?(n.arraySet(L.window,R,k-U,U,0),L.wnext=U,L.whave=L.wsize):(L.wnext+=X,L.wnext===L.wsize&&(L.wnext=0),L.whave<L.wsize&&(L.whave+=X))),0}o.inflateReset=T,o.inflateReset2=_,o.inflateResetKeep=v,o.inflateInit=function(x){return E(x,15)},o.inflateInit2=E,o.inflate=function(x,R){var k,U,X,L,ne,V,ae,N,O,se,ie,Q,we,Pe,fe,pe,Me,_e,Xe,Ne,b,W,q,C,S=0,B=new n.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return u;(k=x.state).mode===12&&(k.mode=13),ne=x.next_out,X=x.output,ae=x.avail_out,L=x.next_in,U=x.input,V=x.avail_in,N=k.hold,O=k.bits,se=V,ie=ae,W=h;e:for(;;)switch(k.mode){case p:if(k.wrap===0){k.mode=13;break}for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(2&k.wrap&&N===35615){B[k.check=0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0),O=N=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&N)<<8)+(N>>8))%31){x.msg="incorrect header check",k.mode=30;break}if((15&N)!=8){x.msg="unknown compression method",k.mode=30;break}if(O-=4,b=8+(15&(N>>>=4)),k.wbits===0)k.wbits=b;else if(b>k.wbits){x.msg="invalid window size",k.mode=30;break}k.dmax=1<<b,x.adler=k.check=1,k.mode=512&N?10:12,O=N=0;break;case 2:for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(k.flags=N,(255&k.flags)!=8){x.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){x.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=N>>8&1),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),O=N=0,k.mode=3;case 3:for(;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.head&&(k.head.time=N),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,B[2]=N>>>16&255,B[3]=N>>>24&255,k.check=r(k.check,B,4,0)),O=N=0,k.mode=4;case 4:for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.head&&(k.head.xflags=255&N,k.head.os=N>>8),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),O=N=0,k.mode=5;case 5:if(1024&k.flags){for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.length=N,k.head&&(k.head.extra_len=N),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),O=N=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(V<(Q=k.length)&&(Q=V),Q&&(k.head&&(b=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),n.arraySet(k.head.extra,U,L,Q,b)),512&k.flags&&(k.check=r(k.check,U,Q,L)),V-=Q,L+=Q,k.length-=Q),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(V===0)break e;for(Q=0;b=U[L+Q++],k.head&&b&&k.length<65536&&(k.head.name+=String.fromCharCode(b)),b&&Q<V;);if(512&k.flags&&(k.check=r(k.check,U,Q,L)),V-=Q,L+=Q,b)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(V===0)break e;for(Q=0;b=U[L+Q++],k.head&&b&&k.length<65536&&(k.head.comment+=String.fromCharCode(b)),b&&Q<V;);if(512&k.flags&&(k.check=r(k.check,U,Q,L)),V-=Q,L+=Q,b)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;O<16;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(N!==(65535&k.check)){x.msg="header crc mismatch",k.mode=30;break}O=N=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),x.adler=k.check=0,k.mode=12;break;case 10:for(;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}x.adler=k.check=y(N),O=N=0,k.mode=11;case 11:if(k.havedict===0)return x.next_out=ne,x.avail_out=ae,x.next_in=L,x.avail_in=V,k.hold=N,k.bits=O,2;x.adler=k.check=1,k.mode=12;case 12:if(R===5||R===6)break e;case 13:if(k.last){N>>>=7&O,O-=7&O,k.mode=27;break}for(;O<3;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}switch(k.last=1&N,O-=1,3&(N>>>=1)){case 0:k.mode=14;break;case 1:if(H(k),k.mode=20,R!==6)break;N>>>=2,O-=2;break e;case 2:k.mode=17;break;case 3:x.msg="invalid block type",k.mode=30}N>>>=2,O-=2;break;case 14:for(N>>>=7&O,O-=7&O;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if((65535&N)!=(N>>>16^65535)){x.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&N,O=N=0,k.mode=15,R===6)break e;case 15:k.mode=16;case 16:if(Q=k.length){if(V<Q&&(Q=V),ae<Q&&(Q=ae),Q===0)break e;n.arraySet(X,U,L,Q,ne),V-=Q,L+=Q,ae-=Q,ne+=Q,k.length-=Q;break}k.mode=12;break;case 17:for(;O<14;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(k.nlen=257+(31&N),N>>>=5,O-=5,k.ndist=1+(31&N),N>>>=5,O-=5,k.ncode=4+(15&N),N>>>=4,O-=4,286<k.nlen||30<k.ndist){x.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;O<3;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.lens[j[k.have++]]=7&N,N>>>=3,O-=3}for(;k.have<19;)k.lens[j[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,q={bits:k.lenbits},W=c(0,k.lens,0,19,k.lencode,0,k.work,q),k.lenbits=q.bits,W){x.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;pe=(S=k.lencode[N&(1<<k.lenbits)-1])>>>16&255,Me=65535&S,!((fe=S>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(Me<16)N>>>=fe,O-=fe,k.lens[k.have++]=Me;else{if(Me===16){for(C=fe+2;O<C;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(N>>>=fe,O-=fe,k.have===0){x.msg="invalid bit length repeat",k.mode=30;break}b=k.lens[k.have-1],Q=3+(3&N),N>>>=2,O-=2}else if(Me===17){for(C=fe+3;O<C;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}O-=fe,b=0,Q=3+(7&(N>>>=fe)),N>>>=3,O-=3}else{for(C=fe+7;O<C;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}O-=fe,b=0,Q=11+(127&(N>>>=fe)),N>>>=7,O-=7}if(k.have+Q>k.nlen+k.ndist){x.msg="invalid bit length repeat",k.mode=30;break}for(;Q--;)k.lens[k.have++]=b}}if(k.mode===30)break;if(k.lens[256]===0){x.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,q={bits:k.lenbits},W=c(f,k.lens,0,k.nlen,k.lencode,0,k.work,q),k.lenbits=q.bits,W){x.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,q={bits:k.distbits},W=c(d,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,q),k.distbits=q.bits,W){x.msg="invalid distances set",k.mode=30;break}if(k.mode=20,R===6)break e;case 20:k.mode=21;case 21:if(6<=V&&258<=ae){x.next_out=ne,x.avail_out=ae,x.next_in=L,x.avail_in=V,k.hold=N,k.bits=O,l(x,ie),ne=x.next_out,X=x.output,ae=x.avail_out,L=x.next_in,U=x.input,V=x.avail_in,N=k.hold,O=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;pe=(S=k.lencode[N&(1<<k.lenbits)-1])>>>16&255,Me=65535&S,!((fe=S>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(pe&&(240&pe)==0){for(_e=fe,Xe=pe,Ne=Me;pe=(S=k.lencode[Ne+((N&(1<<_e+Xe)-1)>>_e)])>>>16&255,Me=65535&S,!(_e+(fe=S>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}N>>>=_e,O-=_e,k.back+=_e}if(N>>>=fe,O-=fe,k.back+=fe,k.length=Me,pe===0){k.mode=26;break}if(32&pe){k.back=-1,k.mode=12;break}if(64&pe){x.msg="invalid literal/length code",k.mode=30;break}k.extra=15&pe,k.mode=22;case 22:if(k.extra){for(C=k.extra;O<C;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.length+=N&(1<<k.extra)-1,N>>>=k.extra,O-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;pe=(S=k.distcode[N&(1<<k.distbits)-1])>>>16&255,Me=65535&S,!((fe=S>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if((240&pe)==0){for(_e=fe,Xe=pe,Ne=Me;pe=(S=k.distcode[Ne+((N&(1<<_e+Xe)-1)>>_e)])>>>16&255,Me=65535&S,!(_e+(fe=S>>>24)<=O);){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}N>>>=_e,O-=_e,k.back+=_e}if(N>>>=fe,O-=fe,k.back+=fe,64&pe){x.msg="invalid distance code",k.mode=30;break}k.offset=Me,k.extra=15&pe,k.mode=24;case 24:if(k.extra){for(C=k.extra;O<C;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}k.offset+=N&(1<<k.extra)-1,N>>>=k.extra,O-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){x.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(ae===0)break e;if(Q=ie-ae,k.offset>Q){if((Q=k.offset-Q)>k.whave&&k.sane){x.msg="invalid distance too far back",k.mode=30;break}we=Q>k.wnext?(Q-=k.wnext,k.wsize-Q):k.wnext-Q,Q>k.length&&(Q=k.length),Pe=k.window}else Pe=X,we=ne-k.offset,Q=k.length;for(ae<Q&&(Q=ae),ae-=Q,k.length-=Q;X[ne++]=Pe[we++],--Q;);k.length===0&&(k.mode=21);break;case 26:if(ae===0)break e;X[ne++]=k.length,ae--,k.mode=21;break;case 27:if(k.wrap){for(;O<32;){if(V===0)break e;V--,N|=U[L++]<<O,O+=8}if(ie-=ae,x.total_out+=ie,k.total+=ie,ie&&(x.adler=k.check=k.flags?r(k.check,X,ie,ne-ie):s(k.check,X,ie,ne-ie)),ie=ae,(k.flags?N:y(N))!==k.check){x.msg="incorrect data check",k.mode=30;break}O=N=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;O<32;){if(V===0)break e;V--,N+=U[L++]<<O,O+=8}if(N!==(4294967295&k.total)){x.msg="incorrect length check",k.mode=30;break}O=N=0}k.mode=29;case 29:W=1;break e;case 30:W=-3;break e;case 31:return-4;case 32:default:return u}return x.next_out=ne,x.avail_out=ae,x.next_in=L,x.avail_in=V,k.hold=N,k.bits=O,(k.wsize||ie!==x.avail_out&&k.mode<30&&(k.mode<27||R!==4))&&$(x,x.output,x.next_out,ie-x.avail_out)?(k.mode=31,-4):(se-=x.avail_in,ie-=x.avail_out,x.total_in+=se,x.total_out+=ie,k.total+=ie,k.wrap&&ie&&(x.adler=k.check=k.flags?r(k.check,X,ie,x.next_out-ie):s(k.check,X,ie,x.next_out-ie)),x.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(se==0&&ie===0||R===4)&&W===h&&(W=-5),W)},o.inflateEnd=function(x){if(!x||!x.state)return u;var R=x.state;return R.window&&(R.window=null),x.state=null,h},o.inflateGetHeader=function(x,R){var k;return x&&x.state?(2&(k=x.state).wrap)==0?u:((k.head=R).done=!1,h):u},o.inflateSetDictionary=function(x,R){var k,U=R.length;return x&&x.state?(k=x.state).wrap!==0&&k.mode!==11?u:k.mode===11&&s(1,R,U,0)!==k.check?-3:$(x,R,U,U)?(k.mode=31,-4):(k.havedict=1,h):u},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,o){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(f,d,h,u,p,m,g,y){var w,v,T,_,E,M,A,P,H,$=y.bits,x=0,R=0,k=0,U=0,X=0,L=0,ne=0,V=0,ae=0,N=0,O=null,se=0,ie=new n.Buf16(16),Q=new n.Buf16(16),we=null,Pe=0;for(x=0;x<=15;x++)ie[x]=0;for(R=0;R<u;R++)ie[d[h+R]]++;for(X=$,U=15;1<=U&&ie[U]===0;U--);if(U<X&&(X=U),U===0)return p[m++]=20971520,p[m++]=20971520,y.bits=1,0;for(k=1;k<U&&ie[k]===0;k++);for(X<k&&(X=k),x=V=1;x<=15;x++)if(V<<=1,(V-=ie[x])<0)return-1;if(0<V&&(f===0||U!==1))return-1;for(Q[1]=0,x=1;x<15;x++)Q[x+1]=Q[x]+ie[x];for(R=0;R<u;R++)d[h+R]!==0&&(g[Q[d[h+R]]++]=R);if(M=f===0?(O=we=g,19):f===1?(O=s,se-=257,we=r,Pe-=257,256):(O=l,we=c,-1),x=k,E=m,ne=R=N=0,T=-1,_=(ae=1<<(L=X))-1,f===1&&852<ae||f===2&&592<ae)return 1;for(;;){for(A=x-ne,H=g[R]<M?(P=0,g[R]):g[R]>M?(P=we[Pe+g[R]],O[se+g[R]]):(P=96,0),w=1<<x-ne,k=v=1<<L;p[E+(N>>ne)+(v-=w)]=A<<24|P<<16|H|0,v!==0;);for(w=1<<x-1;N&w;)w>>=1;if(w!==0?(N&=w-1,N+=w):N=0,R++,--ie[x]==0){if(x===U)break;x=d[h+g[R]]}if(X<x&&(N&_)!==T){for(ne===0&&(ne=X),E+=k,V=1<<(L=x-ne);L+ne<U&&!((V-=ie[L+ne])<=0);)L++,V<<=1;if(ae+=1<<L,f===1&&852<ae||f===2&&592<ae)return 1;p[T=N&_]=X<<24|L<<16|E-m|0}}return N!==0&&(p[E+N]=x-ne<<24|64<<16|0),y.bits=X,0}},{"../utils/common":41}],51:[function(i,a,o){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,o){var n=i("../utils/common"),s=0,r=1;function l(S){for(var B=S.length;0<=--B;)S[B]=0}var c=0,f=29,d=256,h=d+1+f,u=30,p=19,m=2*h+1,g=15,y=16,w=7,v=256,T=16,_=17,E=18,M=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$=new Array(2*(h+2));l($);var x=new Array(2*u);l(x);var R=new Array(512);l(R);var k=new Array(256);l(k);var U=new Array(f);l(U);var X,L,ne,V=new Array(u);function ae(S,B,j,G,z){this.static_tree=S,this.extra_bits=B,this.extra_base=j,this.elems=G,this.max_length=z,this.has_stree=S&&S.length}function N(S,B){this.dyn_tree=S,this.max_code=0,this.stat_desc=B}function O(S){return S<256?R[S]:R[256+(S>>>7)]}function se(S,B){S.pending_buf[S.pending++]=255&B,S.pending_buf[S.pending++]=B>>>8&255}function ie(S,B,j){S.bi_valid>y-j?(S.bi_buf|=B<<S.bi_valid&65535,se(S,S.bi_buf),S.bi_buf=B>>y-S.bi_valid,S.bi_valid+=j-y):(S.bi_buf|=B<<S.bi_valid&65535,S.bi_valid+=j)}function Q(S,B,j){ie(S,j[2*B],j[2*B+1])}function we(S,B){for(var j=0;j|=1&S,S>>>=1,j<<=1,0<--B;);return j>>>1}function Pe(S,B,j){var G,z,Z=new Array(g+1),oe=0;for(G=1;G<=g;G++)Z[G]=oe=oe+j[G-1]<<1;for(z=0;z<=B;z++){var J=S[2*z+1];J!==0&&(S[2*z]=we(Z[J]++,J))}}function fe(S){var B;for(B=0;B<h;B++)S.dyn_ltree[2*B]=0;for(B=0;B<u;B++)S.dyn_dtree[2*B]=0;for(B=0;B<p;B++)S.bl_tree[2*B]=0;S.dyn_ltree[2*v]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function pe(S){8<S.bi_valid?se(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function Me(S,B,j,G){var z=2*B,Z=2*j;return S[z]<S[Z]||S[z]===S[Z]&&G[B]<=G[j]}function _e(S,B,j){for(var G=S.heap[j],z=j<<1;z<=S.heap_len&&(z<S.heap_len&&Me(B,S.heap[z+1],S.heap[z],S.depth)&&z++,!Me(B,G,S.heap[z],S.depth));)S.heap[j]=S.heap[z],j=z,z<<=1;S.heap[j]=G}function Xe(S,B,j){var G,z,Z,oe,J=0;if(S.last_lit!==0)for(;G=S.pending_buf[S.d_buf+2*J]<<8|S.pending_buf[S.d_buf+2*J+1],z=S.pending_buf[S.l_buf+J],J++,G===0?Q(S,z,B):(Q(S,(Z=k[z])+d+1,B),(oe=M[Z])!==0&&ie(S,z-=U[Z],oe),Q(S,Z=O(--G),j),(oe=A[Z])!==0&&ie(S,G-=V[Z],oe)),J<S.last_lit;);Q(S,v,B)}function Ne(S,B){var j,G,z,Z=B.dyn_tree,oe=B.stat_desc.static_tree,J=B.stat_desc.has_stree,ce=B.stat_desc.elems,be=-1;for(S.heap_len=0,S.heap_max=m,j=0;j<ce;j++)Z[2*j]!==0?(S.heap[++S.heap_len]=be=j,S.depth[j]=0):Z[2*j+1]=0;for(;S.heap_len<2;)Z[2*(z=S.heap[++S.heap_len]=be<2?++be:0)]=1,S.depth[z]=0,S.opt_len--,J&&(S.static_len-=oe[2*z+1]);for(B.max_code=be,j=S.heap_len>>1;1<=j;j--)_e(S,Z,j);for(z=ce;j=S.heap[1],S.heap[1]=S.heap[S.heap_len--],_e(S,Z,1),G=S.heap[1],S.heap[--S.heap_max]=j,S.heap[--S.heap_max]=G,Z[2*z]=Z[2*j]+Z[2*G],S.depth[z]=(S.depth[j]>=S.depth[G]?S.depth[j]:S.depth[G])+1,Z[2*j+1]=Z[2*G+1]=z,S.heap[1]=z++,_e(S,Z,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(he,Ze){var Li,ht,Ni,Ce,To,Fn,Tt=Ze.dyn_tree,kl=Ze.max_code,D1=Ze.stat_desc.static_tree,$1=Ze.stat_desc.has_stree,W1=Ze.stat_desc.extra_bits,Tl=Ze.stat_desc.extra_base,Ui=Ze.stat_desc.max_length,_o=0;for(Ce=0;Ce<=g;Ce++)he.bl_count[Ce]=0;for(Tt[2*he.heap[he.heap_max]+1]=0,Li=he.heap_max+1;Li<m;Li++)Ui<(Ce=Tt[2*Tt[2*(ht=he.heap[Li])+1]+1]+1)&&(Ce=Ui,_o++),Tt[2*ht+1]=Ce,kl<ht||(he.bl_count[Ce]++,To=0,Tl<=ht&&(To=W1[ht-Tl]),Fn=Tt[2*ht],he.opt_len+=Fn*(Ce+To),$1&&(he.static_len+=Fn*(D1[2*ht+1]+To)));if(_o!==0){do{for(Ce=Ui-1;he.bl_count[Ce]===0;)Ce--;he.bl_count[Ce]--,he.bl_count[Ce+1]+=2,he.bl_count[Ui]--,_o-=2}while(0<_o);for(Ce=Ui;Ce!==0;Ce--)for(ht=he.bl_count[Ce];ht!==0;)kl<(Ni=he.heap[--Li])||(Tt[2*Ni+1]!==Ce&&(he.opt_len+=(Ce-Tt[2*Ni+1])*Tt[2*Ni],Tt[2*Ni+1]=Ce),ht--)}})(S,B),Pe(Z,be,S.bl_count)}function b(S,B,j){var G,z,Z=-1,oe=B[1],J=0,ce=7,be=4;for(oe===0&&(ce=138,be=3),B[2*(j+1)+1]=65535,G=0;G<=j;G++)z=oe,oe=B[2*(G+1)+1],++J<ce&&z===oe||(J<be?S.bl_tree[2*z]+=J:z!==0?(z!==Z&&S.bl_tree[2*z]++,S.bl_tree[2*T]++):J<=10?S.bl_tree[2*_]++:S.bl_tree[2*E]++,Z=z,be=(J=0)===oe?(ce=138,3):z===oe?(ce=6,3):(ce=7,4))}function W(S,B,j){var G,z,Z=-1,oe=B[1],J=0,ce=7,be=4;for(oe===0&&(ce=138,be=3),G=0;G<=j;G++)if(z=oe,oe=B[2*(G+1)+1],!(++J<ce&&z===oe)){if(J<be)for(;Q(S,z,S.bl_tree),--J!=0;);else z!==0?(z!==Z&&(Q(S,z,S.bl_tree),J--),Q(S,T,S.bl_tree),ie(S,J-3,2)):J<=10?(Q(S,_,S.bl_tree),ie(S,J-3,3)):(Q(S,E,S.bl_tree),ie(S,J-11,7));Z=z,be=(J=0)===oe?(ce=138,3):z===oe?(ce=6,3):(ce=7,4)}}l(V);var q=!1;function C(S,B,j,G){ie(S,(c<<1)+(G?1:0),3),(function(z,Z,oe,J){pe(z),se(z,oe),se(z,~oe),n.arraySet(z.pending_buf,z.window,Z,oe,z.pending),z.pending+=oe})(S,B,j)}o._tr_init=function(S){q||((function(){var B,j,G,z,Z,oe=new Array(g+1);for(z=G=0;z<f-1;z++)for(U[z]=G,B=0;B<1<<M[z];B++)k[G++]=z;for(k[G-1]=z,z=Z=0;z<16;z++)for(V[z]=Z,B=0;B<1<<A[z];B++)R[Z++]=z;for(Z>>=7;z<u;z++)for(V[z]=Z<<7,B=0;B<1<<A[z]-7;B++)R[256+Z++]=z;for(j=0;j<=g;j++)oe[j]=0;for(B=0;B<=143;)$[2*B+1]=8,B++,oe[8]++;for(;B<=255;)$[2*B+1]=9,B++,oe[9]++;for(;B<=279;)$[2*B+1]=7,B++,oe[7]++;for(;B<=287;)$[2*B+1]=8,B++,oe[8]++;for(Pe($,h+1,oe),B=0;B<u;B++)x[2*B+1]=5,x[2*B]=we(B,5);X=new ae($,M,d+1,h,g),L=new ae(x,A,0,u,g),ne=new ae(new Array(0),P,0,p,w)})(),q=!0),S.l_desc=new N(S.dyn_ltree,X),S.d_desc=new N(S.dyn_dtree,L),S.bl_desc=new N(S.bl_tree,ne),S.bi_buf=0,S.bi_valid=0,fe(S)},o._tr_stored_block=C,o._tr_flush_block=function(S,B,j,G){var z,Z,oe=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(J){var ce,be=4093624447;for(ce=0;ce<=31;ce++,be>>>=1)if(1&be&&J.dyn_ltree[2*ce]!==0)return s;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return r;for(ce=32;ce<d;ce++)if(J.dyn_ltree[2*ce]!==0)return r;return s})(S)),Ne(S,S.l_desc),Ne(S,S.d_desc),oe=(function(J){var ce;for(b(J,J.dyn_ltree,J.l_desc.max_code),b(J,J.dyn_dtree,J.d_desc.max_code),Ne(J,J.bl_desc),ce=p-1;3<=ce&&J.bl_tree[2*H[ce]+1]===0;ce--);return J.opt_len+=3*(ce+1)+5+5+4,ce})(S),z=S.opt_len+3+7>>>3,(Z=S.static_len+3+7>>>3)<=z&&(z=Z)):z=Z=j+5,j+4<=z&&B!==-1?C(S,B,j,G):S.strategy===4||Z===z?(ie(S,2+(G?1:0),3),Xe(S,$,x)):(ie(S,4+(G?1:0),3),(function(J,ce,be,he){var Ze;for(ie(J,ce-257,5),ie(J,be-1,5),ie(J,he-4,4),Ze=0;Ze<he;Ze++)ie(J,J.bl_tree[2*H[Ze]+1],3);W(J,J.dyn_ltree,ce-1),W(J,J.dyn_dtree,be-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,oe+1),Xe(S,S.dyn_ltree,S.dyn_dtree)),fe(S),G&&pe(S)},o._tr_tally=function(S,B,j){return S.pending_buf[S.d_buf+2*S.last_lit]=B>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&B,S.pending_buf[S.l_buf+S.last_lit]=255&j,S.last_lit++,B===0?S.dyn_ltree[2*j]++:(S.matches++,B--,S.dyn_ltree[2*(k[j]+d+1)]++,S.dyn_dtree[2*O(B)]++),S.last_lit===S.lit_bufsize-1},o._tr_align=function(S){ie(S,2,3),Q(S,v,$),(function(B){B.bi_valid===16?(se(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(i,a,o){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,o){(function(n){(function(s,r){if(!s.setImmediate){var l,c,f,d,h=1,u={},p=!1,m=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){w(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(d="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",v,!1):s.attachEvent("onmessage",v),function(T){s.postMessage(d+T,"*")}):s.MessageChannel?((f=new MessageChannel).port1.onmessage=function(T){w(T.data)},function(T){f.port2.postMessage(T)}):m&&"onreadystatechange"in m.createElement("script")?(c=m.documentElement,function(T){var _=m.createElement("script");_.onreadystatechange=function(){w(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(w,0,T)},g.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),E=0;E<_.length;E++)_[E]=arguments[E+1];var M={callback:T,args:_};return u[h]=M,l(h),h++},g.clearImmediate=y}function y(T){delete u[T]}function w(T){if(p)setTimeout(w,0,T);else{var _=u[T];if(_){p=!0;try{(function(E){var M=E.callback,A=E.args;switch(A.length){case 0:M();break;case 1:M(A[0]);break;case 2:M(A[0],A[1]);break;case 3:M(A[0],A[1],A[2]);break;default:M.apply(r,A)}})(_)}finally{y(T),p=!1}}}}function v(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(d)===0&&w(+T.data.slice(d.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Vo)),Vo.exports}var lm=rm();const cm=sm(lm);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function D(t){if(!t)throw new Error("Assertion failed.")}const um=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Qe=t=>t&&t[t.length-1],Ct=t=>t>=0&&t<2**32,Y=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},gt=t=>{const e=Y(t);return(e&1)===0?-(e>>1):e+1>>1},je=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),st=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),rt=new TextEncoder,oo={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},no={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},so={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},fm=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,ro=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Bs{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(o=>{let n=!1;e=()=>{n||(o(),this.pending--,n=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const Rs=(t,e,i)=>{let a=0,o=t.length-1,n=-1;for(;a<=o;){const s=a+(o-a+1)/2|0;i(t[s])<=e?(n=s,a=s+1):o=s-1}return n},zs=()=>{let t,e;return{promise:new Promise((a,o)=>{t=a,e=o}),resolve:t,reject:e}},Lt=t=>{throw new Error(`Unexpected value: ${t}`)},dm=(t,e,i)=>{const a=t.getUint8(e),o=t.getUint8(e+1),n=t.getUint8(e+2);return a<<16|o<<8|n},Go=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},hm=(t,e,i,a)=>{i=Fe(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),Go(t,e,i,a)},Fe=(t,e,i)=>Math.max(e,Math.min(i,t)),mm=(t,e,i)=>t+(e-t)*i,pm="und",Os=(t,e)=>Math.round(t/e)*e,Hs=(t,e)=>Math.round(t*e)/e,Ls=(t,e)=>Math.floor(t*e)/e,gm=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},vm=/^[a-z]{3}$/,bm=t=>vm.test(t),Et=1e6*(1+Number.EPSILON),ym=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,o=1,n=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*n+a,f=l*s+o;if(f>e)return{num:i*n,den:s};if(a=n,o=s,n=c,s=f,r=1/(r-l),!isFinite(r))break}return{num:i*n,den:s}};class Ns{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Ko=null;const wm=()=>Ko!==null?Ko:Ko=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let Xo=null;const Us=()=>Xo!==null?Xo:Xo=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let Zo=null;const km=()=>Zo!==null?Zo:Zo=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let Qo=null;const Tm=()=>{if(Qo!==null)return Qo;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?Qo=Number(t[1]):null},qs=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},_m=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Sm=(t,e)=>{let i=-1,a=1/0;for(let o=0;o<t.length;o++){const n=e(t[o]);n<a&&(a=n,i=o)}return i},Ds=t=>{D(Number.isInteger(t.num)),D(Number.isInteger(t.den)),D(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const o=e%i;e=i,i=o}const a=e||1;return{num:t.num/a,den:t.den/a}},Yo=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},xm=t=>new Promise(e=>setTimeout(e,t)),$s=t=>Array.isArray(t)?t:[t];class Jo{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const o={fn:i,once:a?.once??!1};return this._listeners.get(e).add(o),()=>{this._listeners.get(e)?.delete(o)}}_emit(...e){const[i,a]=e,o=this._listeners.get(i);if(o)for(const n of o){try{n.fn(a)}catch(s){console.error(s)}n.once&&o.delete(n)}}}const Cm=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var lt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(lt||(lt={}));class ke{constructor(){}static get level(){return ke._level}static set level(e){if(e!==lt.Silent&&e!==lt.Errors&&e!==lt.Warnings&&e!==lt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ke._level=e}static get _emitter(){return ke._emitterInstance??=new Jo}static on(e,i,a){return ke._emitter.on(e,i,a)}static _error(...e){ke._emitter._emit("error",e),ke._level>=lt.Errors&&console.error(...e)}static _warn(...e){ke._emitter._emit("warn",e),ke._level>=lt.Warnings&&console.warn(...e)}static _info(...e){ke._emitter._emit("info",e),ke._level>=lt.Info&&console.info(...e)}}ke._level=lt.Info,ke._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ws{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Em{constructor(e,i,a,o){if(this.data=e,this.mimeType=i,this.name=a,this.description=o,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(o!==void 0&&typeof o!="string")throw new TypeError("description, when provided, must be a string.")}}const Mm=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Ws)&&!(e instanceof Em)&&!Cm(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Pm=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
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
 */const lo=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],en=[-1,1,2,3,4,5,6,8],Am=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Ee(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let o=null;a===15?o=e.readBits(24):a<lo.length&&(o=lo[a]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=en[n]),{objectType:i,frequencyIndex:a,sampleRate:o,channelConfiguration:n,numberOfChannels:s}},js=t=>{let e=lo.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=en.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let o=13;t.objectType>=32&&(o+=6),e===15&&(o+=24);const n=Math.ceil(o/8),s=new Uint8Array(n),r=new Ee(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const vt=["avc","hevc","vp9","av1","vp8","prores"],Ye=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],tn=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Nt=[...tn,...Ye],_i=["webvtt"],co=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Vs=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Gs=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Ks=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Si=["ap4x","ap4h","apch","apcn","apcs","apco"],an=["dtsc","dtsh","dtsl","dtse"],Fm=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Im=(t,e,i,a,o)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=co.find(h=>s<=h.maxMacroblocks&&a<=h.maxBitrate)??Qe(co),l=r?r.level:0,c="64".padStart(2,"0"),f="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${f}${d}`}else if(t==="hevc"){const l=e*i,c=Vs.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??Qe(Vs);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(Gs.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??Qe(Gs)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=Ks.find(f=>s<=f.maxPictureSize&&a<=f.maxBitrate)??Qe(Ks);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Fm.filter(f=>f.alpha===o);let l=r[0].fourCc,c=1/0;for(const{fourCc:f,bitrate:d}of r){const h=Math.abs(d*s-a);h<c&&(c=h,l=f)}return l}else Lt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Bm=t=>{const e=t.split("."),o=(1<<7)+1,n=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(n<<5)+r,c=s.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,h=0,u=e[4]?Number(e[4]):0,p=e[5]?Number(e[5][0]):1,m=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,y=(c<<7)+(d<<6)+(h<<5)+(u<<4)+(p<<3)+(m<<2)+g;return[o,l,y,0]},Rm=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Ye.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},Xs=/^pcm-([usf])(\d+)(be)?$/,Ut=t=>{if(D(Ye.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Xs.exec(t);D(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,o=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:o,silentValue:n}},uo=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Si.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":an.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Xs.test(t)?t:t==="webvtt"?"webvtt":null,zm=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Om=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Hm=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Si],Lm=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Nm=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Um=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,qm=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Zs=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Hm.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!ro(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(oo);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const o=Object.keys(no);if(i.transfer!=null&&!o.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${o.join(", ")}.`);const n=Object.keys(so);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Lm.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Nm.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Um.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!qm.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Si.some(i=>t.decoderConfig.codec.startsWith(i))&&!Si.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Si.join(", ")}.`);if(e!==null&&uo(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Dm=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Qs=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Dm.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!ro(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!an.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${an.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Ye.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Ye.join(", ")}).`);if(e!==null&&uo(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},$m=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Wm=[48e3,44100,32e3],jm=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var bt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(bt||(bt={}));var Ve;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Ve||(Ve={}));const xi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let o=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?o=4:t[e+1]===0&&t[e+2]===1&&(o=3),o===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+o,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Ys=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let o;e===1?o=a.getUint8(i):e===2?o=a.getUint16(i,!1):e===3?o=dm(a,i):(D(e===4),o=a.getUint32(i,!1)),i+=e,yield{offset:i,length:o},i+=o}},Vm=(t,e)=>{if(e.description){const o=(je(e.description)[4]&3)+1;return Ys(t,o)}else return xi(t)},Js=t=>t&31,fo=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Gm=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),a=new Uint8Array(i);let o=0;for(const n of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(o,n.byteLength);break;case 2:s.setUint16(o,n.byteLength,!1);break;case 3:Go(s,o,n.byteLength,!1);break;case 4:s.setUint32(o,n.byteLength,!1);break}o+=e,a.set(n,o),o+=n.byteLength}return a},Km=t=>{try{const e=[],i=[],a=[];for(const r of xi(t)){const l=t.subarray(r.offset,r.offset+r.length),c=Js(l[0]);c===bt.SPS?e.push(l):c===bt.PPS?i.push(l):c===bt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const o=e[0],n=Zm(o);D(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return ke._error("Error building AVC Decoder Configuration Record:",e),null}},Xm=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){D(t.chromaFormat!==null),D(t.bitDepthLumaMinus8!==null),D(t.bitDepthChromaMinus8!==null),D(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}}return new Uint8Array(e)},er={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Zm=t=>{try{const e=new Ee(fo(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),o=e.readAlignedByte(),n=e.readAlignedByte();Y(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=Y(e),s===3&&(c=e.readBits(1)),r=Y(e),l=Y(e),e.skipBits(1),e.readBits(1))){for(let x=0;x<(s!==3?8:12);x++)if(e.readBits(1)){const k=x<6?16:64;let U=8,X=8;for(let L=0;L<k;L++){if(X!==0){const ne=gt(e);X=(U+ne+256)%256}U=X===0?U:X}}}Y(e);const f=Y(e);if(f===0)Y(e);else if(f===1){e.skipBits(1),gt(e),gt(e);const $=Y(e);for(let x=0;x<$;x++)gt(e)}Y(e),e.skipBits(1);const d=Y(e),h=Y(e),u=16*(d+1),p=16*(h+1);let m=u,g=p;const y=e.readBits(1);if(y||e.skipBits(1),e.skipBits(1),e.readBits(1)){const $=Y(e),x=Y(e),R=Y(e),k=Y(e);let U,X;if((c===0?s:0)===0)U=1,X=2-y;else{const ne=s===3?1:2,V=s===1?2:1;U=ne,X=V*(2-y)}m-=U*($+x),g-=X*(R+k)}let v=2,T=2,_=2,E=0,M={num:1,den:1},A=null,P=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)M={num:e.readBits(16),den:e.readBits(16)};else{const ae=er[V];ae&&(M=ae)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),E=e.readBits(1),e.readBits(1)&&(v=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(Y(e),Y(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const X=e.readBits(1);X&&tr(e);const L=e.readBits(1);L&&tr(e),(X||L)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),Y(e),Y(e),Y(e),Y(e),A=Y(e),P=Y(e))}if(A===null){D(P===null);const $=o&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&$)A=0,P=0;else{const x=d+1,R=h+1,k=(2-y)*R,U=co.find(L=>L.level>=n)??Qe(co),X=Math.min(Math.floor(U.maxDpbMbs/(x*k)),16);A=X,P=X}}return D(P!==null),{profileIdc:a,constraintFlags:o,levelIdc:n,frameMbsOnlyFlag:y,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:u,codedHeight:p,displayWidth:m,displayHeight:g,pixelAspectRatio:M,colourPrimaries:v,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:E,numReorderFrames:A,maxDecFrameBuffering:P}}catch(e){return ke._error("Error parsing AVC SPS:",e),null}},tr=t=>{const e=Y(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)Y(t),Y(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Qm=(t,e)=>{if(e.description){const o=(je(e.description)[21]&3)+1;return Ys(t,o)}else return xi(t)},on=t=>t>>1&63,Ym=t=>{try{const e=new Ee(fo(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:o,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=ep(e,i);Y(e);const f=Y(e);let d=0;f===3&&(d=e.readBits(1));const h=Y(e),u=Y(e);let p=h,m=u;if(e.readBits(1)){const x=Y(e),R=Y(e),k=Y(e),U=Y(e);let X=1,L=1;const ne=d===0?f:0;ne===1?(X=2,L=2):ne===2&&(X=2,L=1),p-=(x+R)*X,m-=(k+U)*L}const g=Y(e),y=Y(e);Y(e);const v=e.readBits(1)?0:i;let T=0;for(let x=v;x<=i;x++)Y(e),T=Y(e),Y(e);Y(e),Y(e),Y(e),Y(e),Y(e),Y(e),e.readBits(1)&&e.readBits(1)&&tp(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),Y(e),Y(e),e.skipBits(1));const _=Y(e);if(ip(e,_),e.readBits(1)){const x=Y(e);for(let R=0;R<x;R++)Y(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let E=2,M=2,A=2,P=0,H=0,$={num:1,den:1};if(e.readBits(1)){const x=op(e,i);$=x.pixelAspectRatio,E=x.colourPrimaries,M=x.transferCharacteristics,A=x.matrixCoefficients,P=x.fullRangeFlag,H=x.minSpatialSegmentationIdc}return{displayWidth:p,displayHeight:m,pixelAspectRatio:$,colourPrimaries:E,transferCharacteristics:M,matrixCoefficients:A,fullRangeFlag:P,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:o,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:f,bitDepthLumaMinus8:g,bitDepthChromaMinus8:y,minSpatialSegmentationIdc:H}}catch(e){return ke._error("Error parsing HEVC SPS:",e),null}},Jm=t=>{try{const e=[],i=[],a=[],o=[];for(const c of xi(t)){const f=t.subarray(c.offset,c.offset+c.length),d=on(f[0]);d===Ve.VPS_NUT?e.push(f):d===Ve.SPS_NUT?i.push(f):d===Ve.PPS_NUT?a.push(f):(d===Ve.PREFIX_SEI_NUT||d===Ve.SUFFIX_SEI_NUT)&&o.push(f)}if(i.length===0||a.length===0)return null;const n=Ym(i[0]);if(!n)return null;let s=0;if(a.length>0){const c=a[0],f=new Ee(fo(c));f.skipBits(16),Y(f),Y(f),f.skipBits(1),f.skipBits(1),f.skipBits(3),f.skipBits(1),f.skipBits(1),Y(f),Y(f),gt(f),f.skipBits(1),f.skipBits(1),f.readBits(1)&&Y(f),gt(f),gt(f),f.skipBits(1),f.skipBits(1),f.skipBits(1),f.skipBits(1);const d=f.readBits(1),h=f.readBits(1);!d&&!h?s=0:d&&!h?s=2:!d&&h?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:Ve.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Ve.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Ve.PPS_NUT,nalUnits:a}]:[],...o.length?[{arrayCompleteness:1,nalUnitType:on(o[0][0]),nalUnits:o}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return ke._error("Error building HEVC Decoder Configuration Record:",e),null}},ep=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),o=t.readBits(5);let n=0;for(let f=0;f<32;f++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let f=0;f<6;f++)s[f]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let f=0;f<e;f++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let f=e;f<8;f++)t.skipBits(2);for(let f=0;f<e;f++)l[f]&&t.skipBits(88),c[f]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:o,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:r}},tp=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))Y(t);else{const o=Math.min(64,1<<4+(e<<1));e>1&&gt(t);for(let n=0;n<o;n++)gt(t)}},ip=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=ap(t,a,e,i)},ap=(t,e,i,a)=>{let o=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const l=Y(t);s=e-(l+1)}else s=e-1;t.readBits(1),Y(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);o=a[s]}else{const r=Y(t),l=Y(t);for(let c=0;c<r;c++)Y(t),t.readBits(1);for(let c=0;c<l;c++)Y(t),t.readBits(1);o=r+l}return o},op=(t,e)=>{let i=2,a=2,o=2,n=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=er[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),o=t.readBits(8))),t.readBits(1)&&(Y(t),Y(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(Y(t),Y(t),Y(t),Y(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&Y(t),t.readBits(1)&&np(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=Y(t),Y(t),Y(t),Y(t),Y(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:o,fullRangeFlag:n,minSpatialSegmentationIdc:s}},np=(t,e,i)=>{let a=!1,o=!1,n=!1;a=t.readBits(1)===1,o=t.readBits(1)===1,(a||o)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?Y(t):c=t.readBits(1)===1;let f=1;c||(f=Y(t)+1),a&&ir(t,f,n),o&&ir(t,f,n)}},ir=(t,e,i)=>{for(let a=0;a<e;a++)Y(t),Y(t),i&&(Y(t),Y(t)),t.readBits(1)},sp=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let o=0;o<a.length;o++)e.push(a[o])}}return new Uint8Array(e)};var ar;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(ar||(ar={}));const rp=function*(t){const e=new Ee(t),i=()=>{let a=0;for(let o=0;o<8;o++){const n=e.readAlignedByte();if(a|=(n&127)<<o*7,!(n&128))break;if(o===7&&n&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),o=e.readBits(1),n=e.readBits(1);e.skipBits(1),o&&e.skipBits(8);let s;if(n){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);D(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},lp=t=>{const e=st(t),i=e.getUint8(9),a=e.getUint16(10,!0),o=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:o,outputGain:n,channelMappingFamily:s,channelMappingTable:r}},cp=(t,e,i)=>{switch(t){case"avc":{for(const a of Vm(i,e)){const o=i[a.offset],n=Js(o);if(n>=bt.NON_IDR_SLICE&&n<=bt.SLICE_DPC)return"delta";if(n===bt.IDR)return"key";if(n===bt.SEI&&(!km()||Tm()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=fo(s);let l=1;do{let c=0;for(;;){const h=r[l++];if(h===void 0||(c+=h,h<255))break}let f=0;for(;;){const h=r[l++];if(h===void 0||(f+=h,h<255))break}if(c===6){const h=new Ee(r);h.pos=8*l;const u=Y(h),p=h.readBits(1);if(u===0&&p===1)return"key"}l+=f}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of Qm(i,e)){const o=on(i[a.offset]);if(o<Ve.BLA_W_LP)return"delta";if(o<=Ve.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Ee(i);if(a.readBits(2)!==2)return null;const o=a.readBits(1);return(a.readBits(1)<<1)+o===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:o,data:n}of rp(i))if(o===1){const s=new Ee(n);s.skipBits(4),a=!!s.readBits(1)}else if(o===3||o===6||o===7){if(a)return"key";const s=new Ee(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Lt(t),D(!1)}};var or;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(or||(or={}));const up=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),o=e.readBits(5);if(o>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:o,bsmod:n,acmod:s,lfeon:r,bitRateCode:l}},fp=[1,2,3,6],dp=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Ee(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),o=e.readBits(2);let n=0,s;o===3?(n=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const f=fp[s];let d;return o<3?d=Wm[o]/1e3:d=jm[n]/1e3,{dataRate:Math.round((a+1)*d/(f*16)),substreams:[{fscod:o,fscod2:n,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},hp=1683496997,mp=18,pp=10,nr=32,gp=20,vp=8,bp=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],yp=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],wp=[16,16,20,20,0,24,24,0],sr=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],kp=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Tp=8,_p=[32e3,44100,48e3,0],Sp=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],xp=[512,1024,2048,4096],Cp=t=>{const e=Ep(t),i=st(t);let a=e?Math.ceil(e.frameSize/4)*4:0,o=null;for(;a+4<=t.length&&i.getUint32(a)===hp;){const s=Mp(t.subarray(a));if(!s)break;o??=s,a+=s.frameSize}if(e)return{frameSize:o?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:o!==null};if(!o?.asset)return null;const{asset:n}=o;return{frameSize:a,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Ep=t=>{if(t.length<mp||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Ee(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==nr-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%vp!==0)return null;const o=e.readBits(14)+1;if(o<96)return null;const n=e.readBits(6);if(n>=sr.length)return null;const s=bp[e.readBits(4)];if(s===0)return null;const r=yp[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=wp[e.readBits(3)];if(c===0)return null;const f=l!==0;return{frameSize:o,sampleRate:s,numberOfChannels:sr[n]+(f?1:0),sampleCount:a*nr,channelLayout:kp[n]|(f?Tp:0),amode:n,lfePresent:f,bitRate:r,pcmResolution:c}},Mp=t=>{if(t.length<pp||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Ee(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),o=8+4*a,n=16+4*a;e.skipBits(o);const s=e.readBits(n)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=_p[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const f=e.readBits(3)+1,d=e.readBits(3)+1,h=[];for(let y=0;y<f;y++)h.push(e.readBits(i+1));for(const y of h)e.skipBits(8*gm(y));if(e.readBits(1)){e.skipBits(2);const y=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*y)}for(let y=0;y<d;y++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const u=e.readBits(5)+1,p=Sp[e.readBits(4)],m=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(m>2&&e.skipBits(1),m>6&&e.skipBits(1),e.readBits(1))){const y=e.readBits(2)+1<<2;g=e.readBits(y)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:p,numberOfChannels:m,sampleCount:Math.round(c*p/l),channelLayout:g,pcmResolution:u}}},Pp=t=>{const e=new Uint8Array(gp),i=st(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,o=new Ee(e);return o.seekToByte(13),o.writeBits(2,Math.max(xp.indexOf(t.sampleCount),0)),o.writeBits(5,a),o.writeBits(1,t.core?.lfePresent?1:0),o.writeBits(6,t.core?.amode??0),o.writeBits(14,t.core?t.core.frameSize-1:0),o.writeBits(1,0),o.writeBits(3,0),o.writeBits(16,t.channelLayout),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const rr=new Uint8Array(0);class ct{constructor(e,i,a,o,n=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=o,this.sequenceNumber=n,e===rr&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(o)||o<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===rr}get microsecondTimestamp(){return Math.trunc(Et*this.timestamp)}get microsecondDuration(){return Math.trunc(Et*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new ct(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new ct(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ap=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const nn=8,lr=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Fp=7,Ip=9,cr=t=>{const e=t.filePos,i=i2(t,9),a=new Ee(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const f=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let h=null;return s===1?t.filePos-=2:h=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:f,numberOfAacFrames:d,crcCheck:h,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Bp=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Rp=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});_m();let ur=-1/0,fr=-1/0,Ci=null;typeof FinalizationRegistry<"u"&&(Ci=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-ur>=1e3&&(ke._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),ur=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-fr>=1e3&&(ke._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),fr=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class qt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const sn=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],zp=new Set(sn);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Et*this.timestamp)}get microsecondDuration(){return Math.trunc(Et*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!zp.has(i.format))throw new TypeError("init.format must be one of: "+sn.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Yo(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??Lp(i.format,i.codedWidth,i.codedHeight);let o=i.colorSpace??null;o===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?o={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:o={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?je(e):je(e).slice(),this._layout=a,this.colorSpace=new rn(o)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Yo(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new rn(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Yo(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Et),duration:Math.trunc((i.duration??0)*Et)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,o=0;if("naturalWidth"in e?(a=e.naturalWidth,o=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,o=e.videoHeight):"width"in e&&(a=Number(e.width),o=Number(e.height)),!a||!o)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:a,height:o},s=new OffscreenCanvas(n.width,n.height),r=s.getContext("2d",{alpha:Us(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new rn({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof qt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!sn.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=Ds({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Ci?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return D(this._data!==null),this._data instanceof qt?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Mi(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(D(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Ci?.unregister(this),this._data instanceof qt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Mi(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(pr(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Mi(this._data)?this._data.allocationSize(e):gr(this,e).allocationSize}async copyTo(e,i={}){if(!ro(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(pr(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(D(this._data!==null),Mi(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof qt){const c={stack:[],error:void 0,hasError:!1};try{const f=Bp(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(f instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(f.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${f.format}' instead.`);return await f.copyTo(e,i)}catch(f){c.error=f,c.hasError=!0}finally{Rp(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),f=await c.copyTo(e,i);return c.close(),f}const a=gr(this,i);D(this.format);const o=je(e);if(o.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${o.byteLength}`);const n=ho(this.format);let s;if(this._data instanceof qt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(f=>!(f.data instanceof Uint8Array)||!Number.isInteger(f.stride)||f.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)D(this._layout),D(this._layout.length===n.length),s=this._layout.map((c,f)=>{const d=Math.ceil(this.codedHeight/n[f].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const f=this._data.getContext("2d");D(f);const d=f.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:je(d.data),stride:4*this.codedWidth}]}const r=[],l=n.length;for(let c=0;c<l;c++){const f=a.computedLayouts[c],d=s[c].stride,h=s[c].data;let u=f.sourceTop*d;u+=f.sourceLeftBytes;let p=f.destinationOffset;const m=f.sourceWidthBytes,g={offset:p,stride:f.destinationStride};for(let y=0;y<f.sourceHeight;y++){if(u+m>h.byteLength)throw new Error("Source buffer OOB read.");if(p+m>o.byteLength)throw new Error("Destination buffer OOB write.");const w=h.subarray(u,u+m);o.set(w,p),u+=d,p+=f.destinationStride}r.push(g)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),f=this.format.includes("X")&&i.format.includes("A");if(c||f)for(let d=0;d<a.allocationSize;d+=4){if(c){const h=o[d],u=o[d+2];o[d]=u,o[d+2]=h}f&&(o[d+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof qt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let o=0;const n=[];for(const s of e)a.set(s.data,o),n.push(o),o+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:n[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Mi(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(D(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,o,n,s,r,l,c){let f=0,d=0,h=this.displayWidth,u=this.displayHeight,p=0,m=0,g=this.displayWidth,y=this.displayHeight;if(s!==void 0?(f=i,d=a,h=o,u=n,p=s,m=r,l!==void 0?(g=l,y=c):(g=h,y=u)):(p=i,m=a,o!==void 0&&(g=o,y=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(f))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(h)||h<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(u)||u<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(p))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(y)||y<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:f,sy:d,sWidth:h,sHeight:u}=this._rotateSourceRegion(f,d,h,u,this.rotation));const w=this.toCanvasImageSource();e.save();const v=p+g/2,T=m+y/2;e.translate(v,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:g/y;e.scale(1/_,_),e.drawImage(w,f,d,h,u,-g/2,-y/2,g,y),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&ln(i.crop,"options.");const a=e.canvas.width,o=e.canvas.height,n=i.rotation??this.rotation,[s,r]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=mr(l,s,r));let c,f,d,h;const{sx:u,sy:p,sWidth:m,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,n);if(i.fit==="fill")c=0,f=0,d=a,h=o;else{const[w,v]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(a/w,o/v):Math.max(a/w,o/v);d=w*T,h=v*T,c=(a-d)/2,f=(o-h)/2}e.save();const y=n%180===0?1:d/h;e.translate(a/2,o/2),e.rotate(n*Math.PI/180),e.scale(1/y,y),e.translate(-a/2,-o/2),e.drawImage(this.toCanvasImageSource(),u,p,m,g,c,f,d,h),e.restore()}_rotateSourceRegion(e,i,a,o,n){return n===90?[e,i,a,o]=[i,this.squarePixelHeight-e-a,o,a]:n===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-o]:n===270&&([e,i,a,o]=[this.squarePixelWidth-i-o,e,o,a]),{sx:e,sy:i,sWidth:a,sHeight:o}}_drawWithFitAndMipmapping(e,i,a){const o=e.width,n=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let f=0;2*o<l&&2*n<c&&(f=Math.floor(Math.log2(Math.min(l/o,c/n))));const d=o*2**f,h=n*2**f,{canvas:u,context:p,isNew:m}=f>0?hr(d,h):{canvas:e,context:i,isNew:a.targetIsFresh};p.imageSmoothingQuality="high",a.fillBlack?(p.fillStyle="black",p.fillRect(0,0,d,h)):m||p.clearRect(0,0,d,h),this.drawWithFit(p,{fit:a.fit,rotation:a.rotation,crop:a.crop}),p.globalCompositeOperation="copy";for(let g=f;g>1;g--){const y=o*2**g,w=n*2**g;p.drawImage(u,0,0,y,w,0,0,y/2,w/2)}p.globalCompositeOperation="source-over",f>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(u,0,0,2*o,2*n,0,0,o,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof qt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&ln(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=um(this.rotation+(e.rotate??0)),[a,o]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=mr(n,a,o));const s=n?n.width:a,r=n?n.height:o,l=s/r;let c,f;e.width!==void 0&&e.height===void 0?(c=e.width,f=c/l):e.width===void 0&&e.height!==void 0?(f=e.height,c=f*l):e.width!==void 0&&e.height!==void 0?(c=e.width,f=e.height):(c=s,f=r),c=Os(c,e.roundDimensionsTo??1),f=Os(f,e.roundDimensionsTo??1);const d={width:c,height:f,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:a,height:o},alpha:e.alpha??"keep"};for(const m of Op){let g=m(this,d);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:h,context:u,isNew:p}=hr(d.width,d.height);return this._drawWithFitAndMipmapping(h,u,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:p,fillBlack:d.alpha==="discard"}),new Re(h,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Op=[],Hp=3,Ei=[];let dr=0;const hr=(t,e)=>{for(const o of Ei)if(o.canvas.width===t&&o.canvas.height===e)return o.age=dr++,{canvas:o.canvas,context:o.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ei.length>=Hp&&Ei.splice(Sm(Ei,o=>o.age),1),Ei.push({canvas:i,context:a,age:dr++}),{canvas:i,context:a,isNew:!0}};class rn{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(oo);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(no);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const o=Object.keys(so);if(e.matrix!=null&&!o.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${o.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Mi=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,mr=(t,e,i)=>{const a=Math.min(t.left,e),o=Math.min(t.top,i),n=Math.min(t.width,e-a),s=Math.min(t.height,i-o);return D(n>=0),D(s>=0),{left:a,top:o,width:n,height:s}},ln=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},pr=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},Lp=(t,e,i)=>{const a=ho(t),o=[];let n=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,f=c*l;o.push({offset:n,stride:c}),n+=f}return o},ho=t=>{const e=(i,a,o,n,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:o,heightDivisor:n},{sampleBytes:a,widthDivisor:o,heightDivisor:n}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Lt(t),D(!1)}},gr=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,o=Np(i,a,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return qp(o,s,n)},Np=(t,e,i,a,o)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!Up(o,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},Up=(t,e)=>{if(t===null)return!0;const i=ho(t);for(let a=0;a<i.length;a++){const o=i[a],n=o.widthDivisor,s=o.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},qp=(t,e,i)=>{const a=ho(e),o=a.length;if(i!==void 0&&i.length!==o)throw new TypeError(`Layout must have ${o} planes.`);let n=0;const s=[],r=[];for(let l=0;l<o;l++){const c=a[l],f=c.sampleBytes,d=c.widthDivisor,h=c.heightDivisor,u={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(u.sourceTop=Math.ceil(Math.trunc(t.y||0)/h),u.sourceHeight=Math.ceil(Math.trunc(t.height||0)/h),u.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*f,u.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*f,i!==void 0){const g=i[l];if(g.stride<u.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);u.destinationOffset=g.offset,u.destinationStride=g.stride}else u.destinationOffset=n,u.destinationStride=u.sourceWidthBytes;const m=u.destinationStride*u.sourceHeight+u.destinationOffset;if(m>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(m),n=Math.max(n,m);for(let g=0;g<l;g++){const y=s[g];if(!(r[l]<=y.destinationOffset||r[g]<=u.destinationOffset))throw new TypeError("Planes overlap.")}s.push(u)}return{allocationSize:n,computedLayouts:s}},mo=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Pi{constructor(){this._referenceCount=0}}class He{get microsecondTimestamp(){return Math.trunc(Et*this.timestamp)}get microsecondDuration(){return Math.trunc(Et*this.duration)}constructor(e){if(this._closed=!1,Ai(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Pi){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!mo.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!mo.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(Mt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const o=this.numberOfFrames*this.numberOfChannels*Mt(this.format);if(a.byteLength<o)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}Ci?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!mo.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const o=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(o>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const n=Mt(i),s=Dt(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?o:o*this.numberOfChannels)*n}copyTo(e,i){if(!ro(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!mo.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:o,frameOffset:n}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,f=this.numberOfChannels,d=n??0;if(d>=c)throw new RangeError("frameOffset out of range");const h=o!==void 0?o:c-d;if(h>c-d)throw new RangeError("frameCount out of range");const u=Mt(l),p=Dt(l);if(p&&s>=f)throw new RangeError("planeIndex out of range");if(!p&&s!==0)throw new RangeError("planeIndex out of range");const g=(p?h:h*f)*u;if(e.byteLength<g)throw new RangeError("Destination buffer is too small");const y=st(e),w=br(l);if(Ai(this._data))wm()&&f>2&&l!==r?$p(this._data,y,r,l,f,s,d,h):this._data.copyTo(e,{planeIndex:s,frameOffset:d,frameCount:h,format:l});else{const v=vr(r),T=Mt(r),_=Dt(r);let E;if(this._data instanceof Pi){const A=P=>{const H=this._data.getDataPlane(P);if(!(H instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const $=c*T*(_?1:f);if(H.byteLength!==$)throw new TypeError(`Data plane ${P} has invalid size. Expected exactly ${$} bytes, got ${H.byteLength} bytes.`);return H};if(_)if(p)E=A(s),s=0;else{E=new Uint8Array(c*T*f);for(let P=0;P<f;P++){const H=A(P);E.set(H,P*c*T)}}else E=A(0)}else E=this._data;const M=st(E);for(let A=0;A<h;A++)if(p){const P=A*u;let H;_?H=(s*c+(A+d))*T:H=((A+d)*f+s)*T;const $=v(M,H);w(y,P,$)}else for(let P=0;P<f;P++){const $=(A*f+P)*u;let x;_?x=(P*c+(A+d))*T:x=((A+d)*f+P)*T;const R=v(M,x);w(y,$,R)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Pi){const e=new He(this._data);return e.setTimestamp(this.timestamp),e}else if(Ai(this._data)){const e=new He(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new He({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,o=Mt(this.format);let n;if(Dt(this.format)){const s=a*o;if(n=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else n=new Uint8Array(a*this.numberOfChannels*o),a>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new He({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Ci?.unregister(this),this._data instanceof Pi?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Ai(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Pi?this._createAudioDataFromData():Ai(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Dt(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;for(;c>0;){const f=Math.min(r,c),d=new Float32Array(o*f);for(let h=0;h<o;h++)e.copyFromChannel(d.subarray(h*f,(h+1)*f),h,l);yield new He({format:"f32-planar",sampleRate:n,numberOfFrames:f,numberOfChannels:o,timestamp:i+l/n,data:d}),l+=f,c-=f}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;const f=[];for(;c>0;){const d=Math.min(r,c),h=new Float32Array(o*d);for(let p=0;p<o;p++)e.copyFromChannel(h.subarray(p*d,(p+1)*d),p,l);const u=new He({format:"f32-planar",sampleRate:n,numberOfFrames:d,numberOfChannels:o,timestamp:i+l/n,data:h});f.push(u),l+=d,c-=d}return f}}const Mt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Dt=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},vr=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},br=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Fe((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Fe(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Fe(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},Ai=t=>typeof AudioData<"u"&&t instanceof AudioData,Dp=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},$p=(t,e,i,a,o,n,s,r)=>{const l=vr(i),c=br(a),f=Mt(i),d=Mt(a),h=Dt(i);if(Dt(a))if(h){const p=new ArrayBuffer(r*f),m=st(p);t.copyTo(p,{planeIndex:n,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const y=g*f,w=g*d,v=l(m,y);c(e,w,v)}}else{const p=new ArrayBuffer(r*o*f),m=st(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const y=(g*o+n)*f,w=g*d,v=l(m,y);c(e,w,v)}}else if(h){const p=r*f,m=new ArrayBuffer(p),g=st(m);for(let y=0;y<o;y++){t.copyTo(m,{planeIndex:y,frameOffset:s,frameCount:r,format:i});for(let w=0;w<r;w++){const v=w*f,T=(w*o+y)*d,_=l(g,v);c(e,T,_)}}}else{const p=new ArrayBuffer(r*o*f),m=st(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++)for(let y=0;y<o;y++){const w=g*o+y,v=w*f,T=w*d,_=l(m,v);c(e,T,_)}}},Wp=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new He({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const yr=new Map,wr=new Map,jp=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!vt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${vt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&ln(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");kr(t.codec,t)},kr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&uo(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Tr=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(n,s,r)=>({codec:t.fullCodecString??Im(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...zm(t.codec)}),o=[];return i.quantizer!==null&&o.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&o.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),D(o.length>0),o},Vp=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Nt.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Nt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Ye.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");_r(t.codec,t)},_r=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&uo(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},Sr=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Rm(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Om(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in xr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?xr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,o){const n=Gp[e];let s=null,r=this._bitrateMode??o??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(D(this._quality!==void 0),s=Fe(Math.round(mm(n.worst,n.best,this._quality)),n.min,n.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&(D(s!==null&&n),c=Fe((s-n.worst)/(n.best-n.worst),0,1)),l=Cr(e,i,a,cn(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(D(this._quality!==void 0),Cr(e,i,a,cn(this._quality)))}_toAudioBitrate(e){if(Ye.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=cn(this._quality),o={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!o)throw new Error(`Unhandled codec: ${e}`);let n=o*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r)),Math.round(n/1e3)*1e3}}const xr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Gp={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},cn=t=>.3*Math.exp(2.5538*t),Cr=(t,e,i,a)=>{const o=e*i,n=1920*1080,s=3e6,r=Math.pow(o/n,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},Er=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};D(!1)},Kp=new ze("high"),Xp=async(t,e={})=>{const{width:i=1280,height:a=720,quality:o,bitrate:n,...s}=e;if(!vt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(o!==void 0&&!(o instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");kr(t,s);const r=po(o,n)??new ze("medium");let l;try{l=Tr({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),f=yr.get(c);if(f)return f;const d=(async()=>{for(const{config:u}of l)if(Mr.some(p=>p.supports(t,u)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:u,quantizer:p}of l){try{if(!(await VideoEncoder.isConfigSupported(u)).supported)continue}catch{continue}if(!Us()||await new Promise(async g=>{try{const y=new VideoEncoder({output:()=>{},error:()=>g(!1)});y.configure(u);const w=new Uint8Array(i*a*4),v=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});y.encode(v,p!==null?Er(t,p):void 0),v.close(),await y.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return yr.set(c,d),d},Zp=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:o,bitrate:n,...s}=e;if(!Nt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(o!==void 0&&!(o instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");_r(t,s);const r=po(o,n)??new ze("medium"),l=Sr({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),f=wr.get(c);if(f)return f;const d=(async()=>{if(Pr.some(h=>h.supports(t,l))||Ye.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return wr.set(c,d),d},po=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},Qp=async(t,e)=>{for(const i of t)if(await Xp(i,e))return i;return null},Yp=async(t,e)=>{for(const i of t)if(await Zp(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Mr=[],Pr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Jp=t=>{let a=t,o=4096,n=0,s=12,r=0;for(a<0&&(a=-a,n=128),a+=33,a>8191&&(a=8191);(a&o)!==o&&s>=5;)o>>=1,s--;return r=a>>s-4&15,~(n|s-5<<4|r)&255},e2=t=>{let i=2048,a=0,o=11,n=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&o>=5;)i>>=1,o--;return n=s>>(o===4?1:o-4)&15,(a|o-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Fi{constructor(e,i,a,o,n){this.bytes=e,this.view=i,this.offset=a,this.start=o,this.end=n,this.bufferPos=o-a}static tempFromBytes(e){return new Fi(e,st(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Fi(this.bytes,this.view,this.offset,e,e+i)}}const t2=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},i2=(t,e)=>{t2(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class a2{constructor(e){this.mutex=new Bs,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let o=this.trackTimestampInfo.get(e);if(o){if(a&&(o.maxTimestampBeforeLastKeyPacket=o.maxTimestamp),o.maxTimestampBeforeLastKeyPacket!==null&&i<o.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${o.maxTimestampBeforeLastKeyPacket}s.`);o.maxTimestamp=Math.max(o.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");o={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,o)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ar=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,o2=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),o=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+o.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class go{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const a=this.writer.getPos(),o=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,o),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);D(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const ue=new Uint8Array(8),Ge=new DataView(ue.buffer),Te=t=>[(t%256+256)%256],le=t=>(Ge.setUint16(0,t,!1),[ue[0],ue[1]]),un=t=>(Ge.setInt16(0,t,!1),[ue[0],ue[1]]),Fr=t=>(Ge.setUint32(0,t,!1),[ue[1],ue[2],ue[3]]),K=t=>(Ge.setUint32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),yt=t=>(Ge.setInt32(0,t,!1),[ue[0],ue[1],ue[2],ue[3]]),ut=t=>(Ge.setUint32(0,Math.floor(t/2**32),!1),Ge.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),n2=t=>(Ge.setInt32(0,Math.floor(t/2**32),!1),Ge.setUint32(4,t,!1),[ue[0],ue[1],ue[2],ue[3],ue[4],ue[5],ue[6],ue[7]]),Ir=t=>(Ge.setInt16(0,2**8*t,!1),[ue[0],ue[1]]),Je=t=>(Ge.setInt32(0,2**16*t,!1),[ue[0],ue[1],ue[2],ue[3]]),fn=t=>(Ge.setInt32(0,2**30*t,!1),[ue[0],ue[1],ue[2],ue[3]]),dn=(t,e)=>{const i=[];let a=t;do{let o=a&127;a>>=7,i.length>0&&(o|=128),i.push(o)}while(a>0||e);return i.reverse()},ge=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,o)=>t.charCodeAt(o));return e&&i.push(0),i},Br=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},Rr=Br(0),zr=t=>[Je(t[0]),Je(t[1]),fn(t[2]),Je(t[3]),Je(t[4]),fn(t[5]),Je(t[6]),Je(t[7]),fn(t[8])],re=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),de=(t,e,i,a,o)=>re(t,[Te(e),Fr(i),a??[]],o),s2=t=>t.isQuickTime?re("ftyp",[ge("qt  "),K(512),ge("qt  ")]):t.fragmented?t.cmaf?re("ftyp",[ge("iso5"),K(512),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]):re("ftyp",[ge("iso5"),K(512),ge("iso5"),ge("iso6"),ge("mp41")]):re("ftyp",[ge("isom"),K(512),ge("isom"),t.holdsAvc?ge("avc1"):[],ge("mp41")]),Or=()=>re("styp",[ge("iso5"),K(0),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]),Hr=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),de("sidx",1,0,[K(1),K(tt),ut(ye(t.minWrittenTimestamp,tt)),ut(0),le(0),le(1),K(e&2147483647),K(ye(i,tt)),K(0)])},vo=t=>({type:"mdat",largeSize:t}),r2=t=>({type:"free",size:t}),Ii=t=>re("moov",void 0,[l2(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>c2(e,t.creationTime)),t.isFragmented?V2(t.trackDatas):null,ng(t)]),l2=(t,e)=>{const i=Math.max(0,...e.map(s=>ye(bo(s),tt)+ye(s.startTimestampOffset??0,tt))),a=Math.max(0,...e.map(s=>s.track.id))+1,o=!Ct(t)||!Ct(i),n=o?ut:K;return de("mvhd",+o,0,[n(t),n(t),K(tt),n(i),Je(1),Ir(1),Array(10).fill(0),zr(Rr),Array(24).fill(0),K(a)])},bo=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const o=t.samples[a];o.timestamp<e&&(e=o.timestamp),o.timestamp+o.duration>i&&(i=o.timestamp+o.duration)}return e===1/0?0:i-e},c2=(t,e)=>{const i=gg(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return re("trak",void 0,[u2(t,e),a?f2(t,t.startTimestampOffset):null,d2(t,e),i.name!==void 0?re("udta",void 0,[re("name",[...rt.encode(i.name)])]):null])},u2=(t,e)=>{const i=ye(bo(t),tt)+ye(t.startTimestampOffset??0,tt),a=!Ct(e)||!Ct(i),o=a?ut:K;let n;if(t.type==="video"){const l=t.track.metadata.rotation;n=Br(l??0)}else n=Rr;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Lt(t);return de("tkhd",+a,s,[o(e),o(e),K(t.track.id),K(0),o(i),Array(8).fill(0),le(0),le(r),Ir(t.type==="audio"?1:0),le(0),zr(n),Je(t.type==="video"?t.info.width:0),Je(t.type==="video"?t.info.height:0)])},f2=(t,e)=>{const i=ye(e,tt),a=ye(bo(t),tt),o=!Ct(i)||!Ct(a),n=o?ut:K,s=o?n2:yt;return re("edts",void 0,[de("elst",o?1:0,0,[K(2),n(i),s(-1),Je(1),n(a),s(0),Je(1)])])},d2=(t,e)=>re("mdia",void 0,[h2(t,e),hn(!0,m2[t.type],p2[t.type]),g2(t)]),h2=(t,e)=>{const i=ye(bo(t),t.timescale),a=!Ct(e)||!Ct(i),o=a?ut:K;return de("mdhd",+a,0,[o(e),o(e),K(t.timescale),o(i),le(Wr(t.track.metadata.languageCode??pm)),le(0)])},m2={video:"vide",audio:"soun",subtitle:"text"},p2={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},hn=(t,e,i,a="\0\0\0\0")=>de("hdlr",0,0,[t?ge("mhlr"):K(0),ge(e),ge(a),K(0),K(0),ge(i,!0)]),g2=t=>re("minf",void 0,[v2[t.type](),b2(),k2(t)]),v2={video:()=>de("vmhd",0,1,[le(0),le(0),le(0),le(0)]),audio:()=>de("smhd",0,0,[le(0),le(0)]),subtitle:()=>de("nmhd",0,0)},b2=()=>re("dinf",void 0,[y2()]),y2=()=>de("dref",0,0,[K(1)],[w2()]),w2=()=>de("url ",0,1),k2=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return re("stbl",void 0,[T2(t),N2(t),e?W2(t):null,e?j2(t):null,q2(t),D2(t),$2(t),U2(t)])},T2=t=>{let e;if(t.type==="video")e=_2(cg(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=$r(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);D(i),e=P2(i,t)}else t.type==="subtitle"&&(e=H2(dg[t.track.source._codec],t));return D(e),de("stsd",0,0,[K(1)],[e])},_2=(t,e)=>re(t,[Array(6).fill(0),le(1),le(0),le(0),Array(12).fill(0),le(e.info.width),le(e.info.height),K(4718592),K(4718592),K(0),le(1),Te(10),ge("Mediabunny"),Array(21).fill(0),le(e.info.hasAlphaChannel?32:24),un(65535)],[ug[e.track.source._codec]?.(e)??null,S2(e),fm(e.info.decoderConfig.colorSpace)?x2(e):null]),S2=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:re("pasp",[K(t.info.pixelAspectRatio.num),K(t.info.pixelAspectRatio.den)]),x2=t=>re("colr",[ge(t.muxer.isQuickTime?"nclc":"nclx"),le(oo[t.info.decoderConfig.colorSpace.primaries]),le(no[t.info.decoderConfig.colorSpace.transfer]),le(so[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Te((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),C2=t=>t.info.decoderConfig&&re("avcC",[...je(t.info.decoderConfig.description)]),E2=t=>t.info.decoderConfig&&re("hvcC",[...je(t.info.decoderConfig.description)]),Lr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),o=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(n<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?oo[e.colorSpace.primaries]:2,f=i[6]?Number(i[6]):e.colorSpace?.transfer?no[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?so[e.colorSpace.matrix]:2;return de("vpcC",1,0,[Te(a),Te(o),Te(l),Te(c),Te(f),Te(d),le(0)])},M2=t=>re("av1C",Bm(t.info.decoderConfig.codec)),P2=(t,e)=>{let i=0,a,o=16;const n=Ye.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:r}=Ut(s);o=8*r,o>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),le(1),le(i),le(0),K(0),le(e.info.numberOfChannels),le(o),le(0),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0)];else{const s=n?0:-2;a=[Array(6).fill(0),le(1),le(i),le(0),K(0),le(e.info.numberOfChannels),le(Math.min(o,16)),un(s),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0),n?[K(1),K(o/8),K(e.info.numberOfChannels*o/8)]:[K(0),K(0),K(0)],K(2)]}return re(t,a,[fg(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},mn=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Te(e),...Te(21),...Fr(0),...K(0),...K(0)];if(t.info.decoderConfig.description){const a=je(t.info.decoderConfig.description);i=[...i,...Te(5),...dn(a.byteLength),...a]}return i=[...le(1),...Te(0),...Te(4),...dn(i.length),...i,...Te(6),...Te(1),...Te(2)],i=[...Te(3),...dn(i.length),...i],de("esds",0,0,i)},Pt=t=>re("wave",void 0,[A2(t),F2(t),re("\0\0\0\0")]),A2=t=>re("frma",[ge($r(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),F2=t=>{const{littleEndian:e}=Ut(t.track.source._codec);return re("enda",[le(+e)])},I2=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,o=0,n=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){D(r.byteLength>=18);const l=je(r),c=lp(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,o=c.outputGain,n=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return re("dOps",[Te(0),Te(e),le(i),K(a),un(o),Te(n),...s])},B2=t=>{const e=t.info.decoderConfig?.description;D(e);const i=je(e);return de("dfLa",0,0,[...i.subarray(4)])},ft=t=>{const{littleEndian:e,sampleSize:i}=Ut(t.track.source._codec),a=+e;return de("pcmC",0,0,[Te(a),Te(8*i)])},R2=t=>{D(t.info.primingPacket);const e=up(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Ee(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),re("dac3",[...i])},z2=t=>{D(t.info.primingPacket);const e=dp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),o=new Uint8Array(a),n=new Ee(o);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return re("dec3",[...o])},O2=t=>{D(t.info.primingPacket);const e=Cp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return re("ddts",[...Pp(e)])},H2=(t,e)=>re(t,[Array(6).fill(0),le(1)],[hg[e.track.source._codec](e)]),L2=t=>re("vttC",[...rt.encode(t.info.config.description)]),N2=t=>de("stts",0,0,[K(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[K(e.sampleCount),K(e.sampleDelta)])]),U2=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return de("stss",0,0,[K(e.length),e.map(([i])=>K(i+1))])},q2=t=>de("stsc",0,0,[K(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[K(e.firstChunk),K(e.samplesPerChunk),K(1)])]),D2=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Ut(t.track.source._codec);return de("stsz",0,0,[K(e*t.info.numberOfChannels),K(t.samples.reduce((i,a)=>i+ye(a.duration,t.timescale),0))])}return de("stsz",0,0,[K(0),K(t.samples.length),t.samples.map(e=>K(e.size))])},$2=t=>t.finalizedChunks.length>0&&Qe(t.finalizedChunks).offset>=2**32?de("co64",0,0,[K(t.finalizedChunks.length),t.finalizedChunks.map(e=>ut(e.offset))]):de("stco",0,0,[K(t.finalizedChunks.length),t.finalizedChunks.map(e=>K(e.offset))]),W2=t=>de("ctts",1,0,[K(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[K(e.sampleCount),yt(e.sampleCompositionTimeOffset)])]),j2=t=>{let e=1/0,i=-1/0,a=1/0,o=-1/0;D(t.compositionTimeOffsetTable.length>0),D(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,ye(r.timestamp,t.timescale)),o=Math.max(o,ye(r.timestamp+r.duration,t.timescale))}const n=Math.max(-e,0);return o>=2**31?null:de("cslg",0,0,[yt(n),yt(e),yt(i),yt(a),yt(o)])},V2=t=>re("mvex",void 0,t.map(G2)),G2=t=>de("trex",0,0,[K(t.track.id),K(1),K(0),K(0),K(0)]),Nr=(t,e)=>re("moof",void 0,[K2(t),...e.map(X2)]),K2=t=>de("mfhd",0,0,[K(t)]),Ur=t=>{let e=0,i=0;const a=0,o=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|a<<8|o},X2=t=>re("traf",void 0,[Z2(t),Q2(t),Y2(t)]),Z2=t=>{D(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Ur(i)};return de("tfhd",0,e,[K(t.track.id),K(a.duration),K(a.size),K(a.flags)])},Q2=t=>(D(t.currentChunk),de("tfdt",1,0,[ut(ye(t.currentChunk.startTimestamp,t.timescale))])),Y2=t=>{D(t.currentChunk);const e=t.currentChunk.samples.map(m=>m.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(m=>m.size),a=t.currentChunk.samples.map(Ur),o=t.currentChunk.samples.map(m=>ye(m.timestamp-m.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),r=new Set(a),l=new Set(o),c=r.size===2&&a[0]!==a[1],f=n.size>1,d=s.size>1,h=!c&&r.size>1,u=l.size>1||[...l].some(m=>m!==0);let p=0;return p|=1,p|=4*+c,p|=256*+f,p|=512*+d,p|=1024*+h,p|=2048*+u,de("trun",1,p,[K(t.currentChunk.samples.length),K(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?K(a[0]):[],t.currentChunk.samples.map((m,g)=>[f?K(e[g]):[],d?K(i[g]):[],h?K(a[g]):[],u?yt(o[g]):[]])])},J2=t=>re("mfra",void 0,[...t.map(eg),tg()]),eg=t=>de("tfra",1,0,[K(t.track.id),K(63),K(t.finalizedChunks.length),t.finalizedChunks.map(i=>[ut(ye(i.samples[0].timestamp,t.timescale)),ut(i.moofOffset),K(i.trafIndex+1),K(1),K(1)])]),tg=()=>de("mfro",0,0,[K(0)]),ig=()=>re("vtte"),ag=(t,e,i,a,o)=>re("vttc",void 0,[o!==null?re("vsid",[yt(o)]):null,i!==null?re("iden",[...rt.encode(i)]):null,e!==null?re("ctim",[...rt.encode(o2(e))]):null,a!==null?re("sttg",[...rt.encode(a)]):null,re("payl",[...rt.encode(t)])]),og=t=>re("vtta",[...rt.encode(t)]),ng=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const o=rg(a);o&&e.push(o)}else if(i==="mdta"){const o=lg(a);o&&e.push(o)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&sg(e,t.output._metadataTags);return e.length===0?null:re("udta",void 0,e)},sg=(t,e)=>{for(const{key:i,value:a}of qs(e))switch(i){case"title":t.push(dt("©nam",a));break;case"description":t.push(dt("©des",a));break;case"artist":t.push(dt("©ART",a));break;case"album":t.push(dt("©alb",a));break;case"albumArtist":t.push(dt("albr",a));break;case"genre":t.push(dt("©gen",a));break;case"date":t.push(dt("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(dt("©cmt",a));break;case"lyrics":t.push(dt("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Lt(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(o=>o.type===i)||(typeof a=="string"?t.push(dt(i,a)):a instanceof Uint8Array&&t.push(re(i,Array.from(a))))}},dt=(t,e)=>{const i=rt.encode(e);return re(t,[le(i.length),le(Wr("und")),Array.from(i)])},qr={"image/jpeg":13,"image/png":14,"image/bmp":27},Dr=(t,e)=>{const i=[];for(const{key:a,value:o}of qs(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:et(o)});break;case"description":i.push({key:e?"description":"©des",value:et(o)});break;case"artist":i.push({key:e?"artist":"©ART",value:et(o)});break;case"album":i.push({key:e?"album":"©alb",value:et(o)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:et(o)});break;case"comment":i.push({key:e?"comment":"©cmt",value:et(o)});break;case"genre":i.push({key:e?"genre":"©gen",value:et(o)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:et(o)});break;case"date":i.push({key:e?"date":"©day",value:et(o.toISOString().slice(0,10))});break;case"images":for(const n of o)n.kind==="coverFront"&&i.push({key:"covr",value:re("data",[K(qr[n.mimeType]??0),K(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${o}/${t.tracksTotal}`:o.toString();i.push({key:"track",value:et(n)})}else i.push({key:"trkn",value:re("data",[K(0),K(0),le(0),le(o),le(t.tracksTotal??0),le(0)])});break;case"discNumber":e||i.push({key:"disc",value:re("data",[K(0),K(0),le(0),le(o),le(t.discsTotal??0),le(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Lt(a)}if(t.raw)for(const a in t.raw){const o=t.raw[a];o==null||!e&&a.length!==4||i.some(n=>n.key===a)||(typeof o=="string"?i.push({key:a,value:et(o)}):o instanceof Uint8Array?i.push({key:a,value:re("data",[K(0),K(0),Array.from(o)])}):o instanceof Ws&&i.push({key:a,value:re("data",[K(qr[o.mimeType]??0),K(0),Array.from(o.data)])}))}return i},rg=t=>{const e=Dr(t,!1);return e.length===0?null:de("meta",0,0,void 0,[hn(!1,"mdir","","appl"),re("ilst",void 0,e.map(i=>re(i.key,void 0,[i.value])))])},lg=t=>{const e=Dr(t,!0);return e.length===0?null:re("meta",void 0,[hn(!1,"mdta",""),de("keys",0,0,[K(e.length)],e.map(i=>re("mdta",[...rt.encode(i.key)]))),re("ilst",void 0,e.map((i,a)=>{const o=String.fromCharCode(...K(a+1));return re(o,void 0,[i.value])}))])},et=t=>re("data",[K(1),K(0),...rt.encode(t)]),cg=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},ug={avc:C2,hevc:E2,vp8:Lr,vp9:Lr,av1:M2,prores:null},$r=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},fg=(t,e)=>{switch(t){case"aac":return mn;case"mp3":return mn;case"opus":return I2;case"vorbis":return mn;case"flac":return B2;case"ac3":return R2;case"eac3":return z2;case"dts":return O2}if(e)switch(t){case"pcm-s24":return Pt;case"pcm-s24be":return Pt;case"pcm-s32":return Pt;case"pcm-s32be":return Pt;case"pcm-f32":return Pt;case"pcm-f32be":return Pt;case"pcm-f64":return Pt;case"pcm-f64be":return Pt}else switch(t){case"pcm-s16":return ft;case"pcm-s16be":return ft;case"pcm-s24":return ft;case"pcm-s24be":return ft;case"pcm-s32":return ft;case"pcm-s32be":return ft;case"pcm-f32":return ft;case"pcm-f32be":return ft;case"pcm-f64":return ft;case"pcm-f64be":return ft}return null},dg={webvtt:"wvtt"},hg={webvtt:L2},Wr=t=>{D(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class pn{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){D(!this.started),this.target._start(),this.started=!0}write(e){D(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return D(this.started&&!this.finalized),this.target._flush()}async finalize(){D(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let o=this.trackedWrites.byteLength;for(;o<a;)o*=2;if(o!==this.trackedWrites.byteLength){const n=new Uint8Array(o);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class wt extends Jo{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new mg(this,e)}}const gn=2**16,vn=2**32;class yo extends wt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(gn,{maxByteLength:vn})}catch{this._buffer=new ArrayBuffer(gn),this._supportsResize=!1}else this._buffer=new ArrayBuffer(gn);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>vn)throw new Error(`ArrayBuffer exceeded maximum size of ${vn} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),o=new Uint8Array(a);o.set(this._bytes,0),this._buffer=a,this._bytes=o}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class mg extends wt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class bn{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const tt=57600,pg=2082844800,gg=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ye=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class vg extends a2{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new yo,this.auxWriter=new pn(this.auxTarget,!1),this.auxBoxWriter=new go(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=zs(),this.creationTime=Math.floor(Date.now()/1e3)+pg,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Qr,this.isCmaf=i instanceof Zr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Zr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof yo),this.boxWriter=new go(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof yo?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),o=new pn(a,!0);o.start(),this.initWriter=o,this.initBoxWriter=new go(o)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(D(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(s2({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:o,start:n}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(o,n)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(D(this.writer),D(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=vo(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return Ap({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const o=this.trackDatas.find(u=>u.track===e);if(o)return o;Zs(a,e.source._codec),D(a),D(a.decoderConfig);const n={...a.decoderConfig};D(n.codedWidth!==void 0),D(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const u=Km(i.data);if(!u)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=Xm(u),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const u=Jm(i.data);if(!u)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=sp(u),s=!0}const r=ym(1/(e.metadata.frameRate??tt),1e6).den,l=n.displayAspectWidth,c=n.displayAspectHeight,f=l===void 0||c===void 0?{num:1,den:1}:Ds({num:l*n.codedHeight,den:c*n.codedWidth}),d=n.codec==="ap4h"||n.codec==="ap4x",h={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:f,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:d},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(h),this.trackDatas.sort((u,p)=>u.track.id-p.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),h}getAudioTrackData(e,i,a){const o=this.trackDatas.find(l=>l.track===e);if(o)return o;Qs(a,e.source._codec),D(a),D(a.decoderConfig);const n={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=cr(Fi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=lo[l.samplingFrequencyIndex],f=en[l.channelConfiguration];if(c===void 0||f===void 0)throw new Error("Invalid ADTS frame header.");n.description=js({objectType:l.objectType,sampleRate:c,numberOfChannels:f}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&Ye.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(n=>n.track===e);if(a)return a;$m(i),D(i),D(i.config);const o={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(o),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}async addEncodedVideoPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,a);let s=i.data;if(n.info.requiresAnnexBTransformation){const l=[...xi(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Gm(l,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,r)}finally{o()}}async addEncodedAudioPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,a);let s=i.data;if(n.info.requiresAdtsStripping){const f=cr(Fi.tempFromBytes(s));if(!f)throw new Error("Expected ADTS frame, didn't get one.");const d=f.crcCheck===null?Fp:Ip;s=s.subarray(d)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(n.info.requiresPcmTransformation){const d=Ut(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(l=s.byteLength/d/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const h=r-n.info.expectedNextPcmPacketTimestamp;if(h<.01)r=n.info.expectedNextPcmPacketTimestamp;else{const u=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,h);r=n.info.expectedNextPcmPacketTimestamp+u}}n.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(n,s,r,l,i.type);await this.registerSample(n,c)}finally{o()}}async padWithSilence(e,i,a){const o=ye(a,e.timescale);if(a=o/e.timescale,o>0){const{sampleSize:n,silentValue:s}=Ut(e.info.decoderConfig.codec),r=o*e.info.numberOfChannels,l=new Uint8Array(n*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const o=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,a);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{o()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)D(c.timestamp<=i),D(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const o=[...a].sort((c,f)=>c-f),n=o[0],s=o[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const c=ig();this.auxBoxWriter.writeBox(c);const f=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,f,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const f=e.cueQueue[c];if(f.timestamp>=s)break;Ar.lastIndex=0;const d=Ar.test(f.text),h=f.timestamp+f.duration;let u=e.cueToSourceId.get(f);if(u===void 0&&s<h&&(u=e.nextSourceId++,e.cueToSourceId.set(f,u)),f.notes){const m=og(f.notes);this.auxBoxWriter.writeBox(m)}const p=ag(f.text,d?n:null,f.identifier??null,f.settings??null,u??null);this.auxBoxWriter.writeBox(p),h===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,n,s-n,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,o,n){return{timestamp:a,decodeTimestamp:a,duration:o,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:ye(o,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let o=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],r=ye(s.duration,e.timescale);o+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:o,sampleDelta:1});else{const n=Qe(e.timeToSampleTable);n.sampleCount+=o}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(o=>o.timestamp).sort((o,n)=>o-n);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let o=0;o<e.timestampProcessingQueue.length;o++){const n=e.timestampProcessingQueue[o];n.decodeTimestamp=a[o];const s=ye(n.timestamp-n.decodeTimestamp,e.timescale),r=ye(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){D(e.lastSample);const l=ye(n.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(D(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let f=Qe(e.timeToSampleTable);if(D(f),f.sampleCount===1){f.sampleDelta=c;const h=e.timeToSampleTable[e.timeToSampleTable.length-2];h&&h.sampleDelta===c&&(h.sampleCount++,e.timeToSampleTable.pop(),f=h)}else f.sampleDelta!==c&&(f.sampleCount--,e.timeToSampleTable.push(f={sampleCount:1,sampleDelta:c}));f.sampleDelta===r?f.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const d=Qe(e.compositionTimeOffsetTable);D(d),d.sampleCompositionTimeOffset===s?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=ye(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,D(e.lastSample),D(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){D(i.type==="key");const o=ye(i.timestamp,e.timescale,!1),n=Math.round(o-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const o=e.track.metadata.maximumPacketCount;if(D(o!==void 0),e.samples.length>o)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${o}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const o=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});o>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=o>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),D(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(D(!this.isFragmented),D(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,o)=>a+ye(o.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Qe(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)D(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(D(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<a&&(i=n,a=n.sampleQueue[0].timestamp)}if(!i)break;const o=i.sampleQueue.shift();await this.addSampleToTrack(i,o)}}async finalizeFragment(e=!this.isCmaf){if(D(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const u=this.initBoxWriter??this.boxWriter;D(u),this.formatOptions.onMoov&&u.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const p=Ii(this);if(u.writeBox(p),this.formatOptions.onMoov){const{data:m,start:g}=u.writer.stopTrackingWrites();this.formatOptions.onMoov(m,g)}if(this.isCmaf){D(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new go(this.writer);const m=this.boxWriter.measureBox(Or()),g=this.boxWriter.measureBox(Hr(this,0));this.segmentHeaderSize=m+g,this.writer.seek(this.segmentHeaderSize)}}D(this.writer),D(this.boxWriter);const i=this.trackDatas.filter(u=>u.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,o=Nr(a,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(o);let r=s+nn,l=1/0;for(let u=0;u<i.length;u++){const p=i[u];p.currentChunk.offset=r,p.currentChunk.moofOffset=n,p.currentChunk.trafIndex=u;for(const m of p.currentChunk.samples)r+=m.size;l=Math.min(l,p.currentChunk.startTimestamp)}const c=r-s,f=c>=2**32;if(f)for(const u of i)u.currentChunk.offset+=lr-nn;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=Nr(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:u,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(u,p,l)}D(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const h=vo(f);h.size=c,this.boxWriter.writeBox(h),this.writer.seek(s+(f?lr:nn));for(const u of i)for(const p of u.currentChunk.samples)this.writer.write(p.data),p.data=null;if(this.formatOptions.onMdat){const{data:u,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(u,p)}for(const u of i)u.finalizedChunks.push(u.currentChunk),this.finalizedChunks.push(u.currentChunk),u.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){D(this.writer),D(this.boxWriter),this.ensureOneEnabledTrack();const e=Ii(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;D(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=vo(!0),this.boxWriter.writeBox(this.mdat);for(const o of this.trackDatas){for(const n of o.sampleQueue)await this.addSampleToTrack(o,n);o.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){D(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;D(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(o=>o.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(o=>o.type===e);if(i.length===0)continue;if(!i.some(o=>o.track.metadata.disposition?.default!==!1)){const o=i[0];o.track.metadata.disposition={...o.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){D(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const o=i.samples[a];o.timestamp-=i.startTimestampOffset,o.decodeTimestamp-=i.startTimestampOffset}if(D(this.writer),D(this.boxWriter),this.fastStart==="in-memory"){this.mdat=vo(!1);let i;for(let o=0;o<2;o++){const n=Ii(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)D(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=Ii(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const o of this.finalizedChunks)for(const n of o.samples)D(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Or()),this.boxWriter.writeBox(Hr(this,i))}else{const i=this.writer.getPos(),a=J2(this.trackDatas);this.boxWriter.writeBox(a);const o=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(o)}else{D(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);D(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const o=Ii(this);if(this.fastStart==="reserve"){D(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(r2(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class bg{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){D(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,o)=>a[o*e]:e===1&&i===4?this.channelMixer=(a,o,n)=>a[o*e]*+(n<2):e===1&&i===6?this.channelMixer=(a,o,n)=>a[o*e]*+(n===2):e===2&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .5*(a[n]+a[n+1])}:e===2&&i===4?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .25*(a[n]+a[n+1]+a[n+2]+a[n+3])}:e===4&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return .5*(a[s+n]+a[s+n+2])}:e===4&&i===6?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]:n===2||n===3?0:a[s+n-2]}:e===6&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return Math.SQRT1_2*(a[n]+a[n+1])+a[n+2]+.5*(a[n+4]+a[n+5])}:e===6&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return a[s+n]+Math.SQRT1_2*(a[s+2]+a[s+n+4])}:e===6&&i===4?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]+Math.SQRT1_2*a[s+2]:a[s+n+2]}:this.channelMixer=(a,o,n)=>n<e?a[o*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),D(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),o=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(o,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,r=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const f=c-this.bufferStartFrame;D(f<this.bufferSizeInFrames);const u=(c/this.targetSampleRate-n)*this.sourceSampleRate,p=Math.floor(u),m=Math.ceil(u),g=u-p;for(let y=0;y<this.targetNumberOfChannels;y++){let w=0,v=0;p>=0&&p<e.numberOfFrames&&(w=this.channelMixer(o,p,y)),m>=0&&m<e.numberOfFrames&&(v=this.channelMixer(o,m,y));const T=w+g*(v-w),_=f*this.targetNumberOfChannels+y;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=f:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,f)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;D(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new He({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var yg=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},wg=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class yn{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class jr extends yn{constructor(e){if(super(),this._connectedTrack=null,!vt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${vt.join(", ")}.`);this._codec=e}}const Vr=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class kg{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Ns,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const o=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||r&&s!=="passThrough"){let d=n.transform?.width,h=n.transform?.height,u=n.transform?.fit??"fill";r&&s!=="passThrough"&&(D(this.outputWidth),D(this.outputHeight),D(s!=="deny"),d=this.outputWidth,h=this.outputHeight,u=s);const p=await e.transform({width:d,height:h,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:u,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=p.displayWidth,this.outputHeight=p.displayHeight),i&&e.close(),e=p,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const f=n.transform?.frameRate;if(f!==void 0){const d=e.timestamp+e.duration,h=Ls(e.timestamp,f);if(this.frameRateLastSample!==null)if(h<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(h,a);e===o&&(e=e.clone(),i=!0),e.setTimestamp(h),e.setDuration(1/f),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=h,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let o;if(a.transform?.process){let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const r of n)r instanceof Re?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Re(r)):s.push(new Re(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of n)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}o=s}else o=[e];try{for(const n of o){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(n.timestamp/s),l={...this.defaultEncodeOptions,...n.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const f=n.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(f,c)).catch(h=>this.setError(h)).finally(()=>{this.customEncoderQueueSize--,f.close()});this.customEncoderQueueSize>=4&&await d}else{D(this.encoder);const f=n.toVideoFrame(),d=Rs(this.preciseTimings,f.timestamp,u=>u.microsecondTimestamp),h=d!==-1?this.preciseTimings[d]:null;if(h&&h.microsecondTimestamp===f.timestamp?(h.timestamp!==n.timestamp&&(h.timestampIsValid=!1),h.duration!==n.duration&&(h.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:f.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!f.format&&!f.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(f,c)}finally{f.close()}}else{this.splitter||(this.splitter=new Tg);const{colorFrame:p,alphaFrame:m}=await this.splitter.split(f);this.alphaFrameQueue.push(m);try{this.encoder.encode(p,c)}finally{p.close()}}else try{this.encoder.encode(f,c)}finally{f.close()}this.encoder.encodeQueueSize>=4&&await new Promise(u=>this.encoder.addEventListener("dequeue",u,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of o)n!==e&&n.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;D(this.frameRateLastSample);const o=Math.round((e-this.frameRateLastTimestamp)*a);for(let n=1;n<o;n++){const s={stack:[],error:void 0,hasError:!1};try{const r=yg(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+n/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{wg(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=po(this.encodingConfig.quality,this.encodingConfig.bitrate);D(i!==void 0);const a=Tr({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let o=null,n;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),n=Mr.find(f=>f.supports(this.encodingConfig.codec,l)),n){o=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){o=r;break}}catch{}}if(!o){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:f})=>f!==null?`quantizer ${f}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=o.config;if(o.quantizer!==null&&(this.defaultEncodeOptions=Er(this.encodingConfig.codec,o.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof ct))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Vr(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,f=0;const d=(u,p,m)=>{const g={};if(p){const _=new Uint8Array(p.byteLength);p.copyTo(_),g.alpha=_}let y=ct.fromEncodedChunk(u,g);const w=Rs(this.preciseTimings,u.timestamp,_=>_.microsecondTimestamp),v=w!==-1?this.preciseTimings[w]:null;let T=null;this.emittedEncoderPackets===0&&y.type==="delta"&&m?.decoderConfig&&(T=cp(this.encodingConfig.codec,m.decoderConfig,y.data)),(v&&v.microsecondTimestamp===u.timestamp||T!==null)&&(y=y.clone({timestamp:v?.timestampIsValid?v.timestamp:void 0,duration:v?.durationIsValid?v.duration:void 0,type:T??void 0})),Vr(this.source._connectedTrack,y),this.encodingConfig.onEncodedPacket?.(y,m),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,y,m).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},h=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(u,p)=>{if(!this.alphaEncoder){d(u,null,p);return}const m=this.alphaFrameQueue.shift();D(m!==void 0),m?(this.alphaEncoder.encode(m,{...this.defaultEncodeOptions,keyFrame:u.type==="key"}),f++,m.close(),r.push({chunk:u,meta:p})):f===0?d(u,null,p):(l.push(c+f),r.push({chunk:u,meta:p}))},error:u=>{u.stack=h,this.setError(u)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const u=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(p,m)=>{f--;const g=r.shift();for(D(g!==void 0),d(g.chunk,p,g.meta),c++;l.length>0&&l[0]===c;){l.shift();const y=r.shift();D(y!==void 0),d(y.chunk,null,y.meta)}},error:p=>{p.stack=u,this.setError(p)}}),this.alphaEncoder.configure(s)}}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=Ls(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await xm(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let wn=null;class Tg{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!wn){const o=new Blob([`(${_g.toString()})()`],{type:"application/javascript"});wn=URL.createObjectURL(o)}this.worker=new Worker(wn),this.worker.addEventListener("message",o=>{const n=o.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",o=>{const n=new Error(o.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=zs();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const _g=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:r}=n.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=n.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return o(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,f=l*c,d=Math.ceil(l/2),h=Math.ceil(c/2),u=f+d*h*2,p=new Uint8Array(u);for(let w=0,v=3;w<f;w++,v+=4)p[w]=n[v];p.fill(128,f);const m=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),g={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[p.buffer]},y=new VideoFrame(p,g);return{colorFrame:m,alphaFrame:y}},o=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,f=s.includes("P10"),d=s.includes("P12"),h=f||d?2:1;let u,p;s.startsWith("I420")?(u=Math.ceil(l/2),p=Math.ceil(c/2)):s.startsWith("I422")?(u=Math.ceil(l/2),p=c):(u=l,p=c);const m=l*c,g=u*p,y=m*h,w=g*h,v=m*h,T=y+w*2,_=s.replace("A",""),E=Math.ceil(l/2),M=Math.ceil(c/2),A=E*M,P=A*h,H=v+2*P,$=new Uint8Array(H),x=T;$.set(n.subarray(x,x+v),0);const R=v,k=f?512:d?2048:128;h===1?$.fill(k,R):new Uint16Array($.buffer,R,2*A).fill(k);const U=f?"I420P10":d?"I420P12":"I420",X=new VideoFrame(n.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),L={format:U,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[$.buffer]},ne=new VideoFrame($,L);return{colorFrame:X,alphaFrame:ne}}};class Sg extends jr{constructor(e){jp(e),super(e.codec),this._encoder=new kg(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Gr extends yn{constructor(e){if(super(),this._connectedTrack=null,!Nt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Nt.join(", ")}.`);this._codec=e}}class xg{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new Ns,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new bg({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&Dp(e.format)!==a.transform.sampleFormat){const o=Wp(e,a.transform.sampleFormat);i&&e.close(),e=o,i=!0}if(a.transform?.process)try{let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);try{for(const n of o)if(!(n instanceof He))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of o)await this.encodeSample(n,!0)}finally{for(const n of o)n instanceof He&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),o=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=o;else{const n=a-this.lastEndSampleIndex;if(n>=64){const s=new He({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),o=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await o,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{D(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(o=>this.encoder.addEventListener("dequeue",o,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){D(this.outputSampleSize),D(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:o,sampleRate:n,timestamp:s}=e,r=2048,l=[];for(let h=0;h<o;h+=r){const u=Math.min(r,e.numberOfFrames-h),p=u*a*this.outputSampleSize,m=new ArrayBuffer(p),g=new DataView(m);l.push({frameCount:u,view:g})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),f=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let h=0;h<a;h++){e.copyTo(f,{planeIndex:h,format:"f32-planar"});for(let u=0;u<l.length;u++){const{frameCount:p,view:m}=l[u];for(let g=0;g<p;g++)this.writeOutputValue(m,(g*a+h)*this.outputSampleSize,f[u*r+g])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:n}};for(let h=0;h<l.length;h++){const{frameCount:u,view:p}=l[h],m=p.buffer,g=h*r,y=new ct(new Uint8Array(m),"key",s+g/n,u/n);this.encodingConfig.onEncodedPacket?.(y,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,y,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,o=po(this.encodingConfig.quality,this.encodingConfig.bitrate),n=Sr({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:o});this.encodingConfig.onEncoderConfig?.(n);const s=Pr.find(r=>r.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof ct))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(Ye.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,f)=>{if(this.encodingConfig.codec==="aac"&&f?.decoderConfig){let h=!1;if(!f.decoderConfig.description||f.decoderConfig.description.byteLength<2?h=!0:h=Am(je(f.decoderConfig.description)).objectType===0,h){const u=Number(Qe(n.codec.split(".")));f.decoderConfig.description=js({objectType:u,numberOfChannels:f.decoderConfig.numberOfChannels,sampleRate:f.decoderConfig.sampleRate})}}let d=ct.fromEncodedChunk(c);d=d.clone({timestamp:Hs(d.timestamp,n.sampleRate),duration:c.duration!=null?Hs(d.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,f),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,f).catch(h=>{this.setError(h)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(n)}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:o}=Ut(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint8(s,Fe((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,r)=>{n.setInt8(s,Fe(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,r)=>{const l=Fe(Math.floor(r*32767),-32768,32767);n.setUint8(s,Jp(l))}:i==="alaw"?this.writeOutputValue=(n,s,r)=>{const l=Fe(Math.floor(r*32767),-32768,32767);n.setUint8(s,e2(l))}:D(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint16(s,Fe((r+1)*32767.5,0,65535),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt16(s,Fe(Math.round(r*32767),-32768,32767),o):D(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,r)=>Go(n,s,Fe((r+1)*83886075e-1,0,16777215),o):i==="signed"?this.writeOutputValue=(n,s,r)=>hm(n,s,Fe(Math.round(r*8388607),-8388608,8388607),o):D(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint32(s,Fe((r+1)*21474836475e-1,0,4294967295),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt32(s,Fe(Math.round(r*2147483647),-2147483648,2147483647),o):i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat32(s,r,o):D(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat64(s,r,o):D(!1);break;default:Lt(a),D(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class Cg extends Gr{constructor(e){Vp(e),super(e.codec),this._accumulatedTime=0,this._encoder=new xg(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=He._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Eg extends yn{constructor(e){if(super(),this._connectedTrack=null,!_i.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${_i.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Kr{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>vt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Nt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>_i.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class kn extends Kr{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new vg(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Xr extends kn{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...vt,...tn,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",..._i]}_codecUnsupportedHint(e){return new Qr().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Zr extends kn{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...vt,...tn,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",..._i]}}class Qr extends kn{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...vt,...Nt]}_codecUnsupportedHint(e){return new Xr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Yr=["video","audio","subtitle"];class Bi{constructor(e,i,a,o,n){this.id=e,this.output=i,this.type=a,this.source=o,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Bi))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=$s(this.metadata.group),a=$s(e.metadata.group);for(const o of i)if(this.type!==e.type&&a.some(r=>o===r)||a.some(r=>o._pairedGroups.has(r)))return!0;return!1}}class Mg extends Bi{constructor(e,i,a,o){super(e,i,"video",a,o)}}class Pg extends Bi{constructor(e,i,a,o){super(e,i,"audio",a,o)}}class Ag extends Bi{constructor(e,i,a,o){super(e,i,"subtitle",a,o)}}class Ri{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Ri))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Tn=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!bm(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Pm(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Ri)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Ri))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Fg extends Jo{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Ri,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Bs,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Kr))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof wt||e.target instanceof bn))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof wt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof wt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof wt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){D(this._target instanceof bn);const i=this._target.getTarget(e),a=o=>{if(!(o instanceof wt))throw new TypeError("getTarget must return a Target.");return o};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){D(this._target instanceof bn);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(D(this._initTarget!==null),this._initTarget instanceof wt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof wt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=o=>(this.state==="canceled"?o._close():this._rememberTarget(o),this._emit("target",{target:o,request:e,isRoot:!0}),this._rootTarget=o,o);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new pn(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof jr))throw new TypeError("source must be a VideoSource.");if(Tn(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Zs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof ct))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Mg(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof Gr))throw new TypeError("source must be an AudioSource.");if(Tn(i),i.decoderConfig!==void 0&&Qs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof ct))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Pg(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof Eg))throw new TypeError("source must be a SubtitleSource.");Tn(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Ag(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(Mm(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),o=i[e.type].max;if(a===o)throw new Error(o===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${o} ${e.type} track${o===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of Yr){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of Yr){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)throw new Error(n===e[a].max?`${this.format._name} requires exactly ${n} ${a} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${a} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ke._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const o=this.tracks.map(n=>n.source._start());await Promise.all(o)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ke._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ke._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ke._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Ig={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Bg=new Set(["window","buddy","dancer"]);function Jr(t){return!Bg.has(t.typeId)}const Rg=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function zg(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!Rg.has(i))return a}));return JSON.stringify(e,null,2)}function Og(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>Hg(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=Ig[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Jr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(Jr)}))}:i.data})),e}function Hg(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function Lg(t,e){const i=new Blob([e],{type:"application/json"});Zt(t,i)}function Zt(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const At=1280,Ft=1920,Ng=30,el=8,Ug=16,tl=.97,_n=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function il(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:it(t*a),height:it(e*a)}}function qg(t,e){const i=t/Math.max(e,1);let a="16:9",o=1/0;for(const n of _n){const s=Math.abs(i-n.rw/n.rh);s<o&&(o=s,a=n.id)}return a}function al(t,e,i=1280){if(t<2||e<2)return il(16,9,i);const a=Math.max(t,e),o=i/a;return{width:it(t*o),height:it(e*o)}}function Dg(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function ol(t){return Math.min(Ng,Math.max(12,Math.round(t||30)))}function nl(t){return Math.min(32,Math.max(1,t||4))}function sl(t,e,i){const a=I(t||12,el,Ug),o=e*i/(At*720);return Math.min(20,Math.max(el,Math.round(a*Math.max(1,o))))}const $g=Ft,Wg=Ft;function Sn(t,e=!1){const i=e?$g:Wg;return In(t.exportSettings.width,t.exportSettings.height,i,i)}async function jg(t,e,i){const{width:a,height:o,format:n,quality:s,filename:r}=e.exportSettings,l=n==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,it(a),it(o),l,n==="jpg"?Math.max(s,tl):s);Zt(`${r}.${n==="jpg"?"jpg":"png"}`,c)}async function Vg(t,e,i){const{fps:a,duration:o,filename:n,quality:s}=e.exportSettings,{width:r,height:l}=Sn(e,!1),c=Wo(e),f=Math.max(1,Math.round(o*a)),d=new cm,h=d.folder(n)??d,u=document.createElement("canvas");for(let m=0;m<f;m++){const g=c+m/a;i?.(m,f),t.paintFrame(e,g,r,l,u);const y=await Yg(u,"image/png",s);h.file(`${n}_${String(m).padStart(5,"0")}.png`,await y.arrayBuffer()),await xn()}const p=await d.generateAsync({type:"blob"});Zt(`${n}_sequence.zip`,p)}async function rl(t,e,i,a=!1){const o=await ll(t,e,Zg(),i,a);Zt(`${e.exportSettings.filename}.webm`,o)}async function Gg(t,e,i,a=!1){try{return await Kg(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(o){const n=Qg();if(n){const r=await ll(t,e,n,i,a);return Zt(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await rl(t,e,i,a),`MP4 not available (${o instanceof Error?o.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function Kg(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const o=ol(e.exportSettings.fps),n=nl(e.exportSettings.duration),{width:s,height:r}=Sn(e,a),l=new ze({bitrate:sl(e.exportSettings.bitrate,s,r)*1e6}),c=new Xr({fastStart:"in-memory"}),d=await Qp(["avc","hevc"].filter(T=>c.getSupportedVideoCodecs().includes(T)),{width:s,height:r,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const h=new yo,u=new Fg({format:c,target:h}),p=new Sg({codec:d,quality:l,keyFrameInterval:1});u.addVideoTrack(p,{frameRate:o});const m=Wo(e),g=await Xg(u,c,e,n,m);t.resetTemporal();const y=document.createElement("canvas");await u.start();try{g&&await g.audioSource.add(g.buffer);const T=Math.max(1,Math.round(n*o)),_=1/o,E=e.exportSettings.loopClose!==!1;let M=null;for(let A=0;A<T;A++){const P=m+qo(A/o,n,e.playback.mode,1,!0);i?.(A,T),t.paintFrame(e,P,s,r,y),A===0&&E?M=ul(y):cl(y,M,A,T,E);const H=new Re(y,{timestamp:A*_,duration:_});await p.add(H,{keyFrame:A%o===0}),H.close(),await xn()}await u.finalize()}catch(T){try{await u.cancel()}catch{}throw T}const w=h.buffer;if(!w||w.byteLength<32)throw new Error("MP4 mux produced an empty file");const v=w.slice(0);return Zt(`${e.exportSettings.filename}.mp4`,new Blob([v],{type:"video/mp4"})),!!g}async function Xg(t,e,i,a,o=0){const n=await ph(vi(i));if(!n||n.length<32||n.duration<=0)return null;const s=i.exportSettings.loopClose!==!1;let r;try{r=mh(n,a,s,o)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),c=r.sampleRate>=46e3?48e3:44100,f=e.getSupportedAudioCodecs(),d=["aac","mp3","opus"].filter(p=>f.includes(p)),h=await Yp(d.length?d:f,{numberOfChannels:l,sampleRate:c});if(!h)return null;const u=new Cg({codec:h,quality:Kp,transform:{numberOfChannels:l,sampleRate:c}});return t.addAudioTrack(u),{audioSource:u,buffer:r}}async function ll(t,e,i,a,o=!1){const n=ol(e.exportSettings.fps),s=nl(e.exportSettings.duration),{width:r,height:l}=Sn(e,o),c=document.createElement("canvas");c.width=r,c.height=l;const f=c.getContext("2d");if(!f)throw new Error("No 2d context");const d=c.captureStream(0),h=d.getVideoTracks()[0],u=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:sl(e.exportSettings.bitrate,r,l)*1e6}),p=[];u.ondataavailable=T=>{T.data.size&&p.push(T.data)},t.resetTemporal(),u.start(200);const m=Wo(e),g=Math.max(1,Math.round(s*n)),y=document.createElement("canvas"),w=e.exportSettings.loopClose!==!1;let v=null;for(let T=0;T<g;T++){const _=m+qo(T/n,s,e.playback.mode,1,!0);a?.(T,g),t.paintFrame(e,_,r,l,y),T===0&&w?v=ul(y):cl(y,v,T,g,w),f.drawImage(y,0,0,r,l),h.requestFrame?.(),await xn()}if(await new Promise(T=>{u.onstop=()=>T(),u.stop()}),d.getTracks().forEach(T=>T.stop()),!p.length)throw new Error("recorder produced no data");return new Blob(p,{type:i})}function Zg(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function Qg(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function cl(t,e,i,a,o){if(!o||!e||i===0)return;const n=Dg(i,a);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function ul(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function xn(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function Yg(t,e,i){return new Promise((a,o)=>{t.toBlob(n=>{n?a(n):o(new Error("frame capture failed"))},e,i)})}async function Jg(t,e,i,a,o=!1){const n=e.exportSettings.format;return n==="mp4"?Gg(t,e,a,o):n==="webm"?rl(t,e,a,o):n==="sequence"?Vg(t,e,a):jg(t,e,i)}const e1=768,t1="sana",fl=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function i1(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),o=e1/Math.max(i,a);return{width:it(i*o,256),height:it(a*o,256)}}function a1(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,o=i>>8&255,n=i&255;let s=fl[0],r=1e9;for(const l of fl){const c=(a-l.r)**2+(o-l.g)**2+(n-l.b)**2;c<r&&(r=c,s=l)}return s.name}function o1(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",o="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${o}`;const n=e.map(a1).filter((s,r,l)=>l.indexOf(s)===r).slice(0,4);return`${a}, palette of ${n.join(", ")}, ${o}`}function n1(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function s1(t,e,i,a=4){const o=[];for(let n=0;n<3;n++)for(let s=0;s<3;s++){const r=Math.min(e-1,Math.floor((s+.5)/3*e)),c=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+r)*4,f=t[c],d=t[c+1],h=t[c+2],u=n1(f,d,h);o.some(m=>(m.r-f)**2+(m.g-d)**2+(m.b-h)**2<1400)||o.push({hex:u,r:f,g:d,b:h})}return o.slice(0,a).map(n=>n.hex)}function r1(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return s1(a.data,e.width,e.height)}function l1(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function c1(t,e,i,a,o=t1){const n=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(o)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${s}`}async function u1(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const o=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!o.ok)throw o.status===429||o.status>=500?new Error(`busy:${o.status}`):new Error(`Generation failed (${o.status}). Try a shorter prompt.`);const n=await o.arrayBuffer(),s=new Uint8Array(n),r=o.headers.get("content-type")||"";if(!l1(s,r))throw new Error("Generation returned no image. Try again.");const l=r.startsWith("image/")?r.split(";")[0]:"image/jpeg";return new Blob([n],{type:l})}catch(o){throw o instanceof Error&&o.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):o}finally{clearTimeout(a)}}async function f1(t){const{width:e,height:i}=i1(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let o=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await u1(c1(a,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(r){o=r instanceof Error?r:new Error(String(r))}}const n=o?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":o?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function xe(t){const e=F.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function zi(t){if(!t)return;const e=F.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Le(t,e,i=!0){F.setProject(a=>({...a,layers:a.layers.map(o=>o.id===t?e(o):o)}),i)}function kt(t,e=!0){F.setProject(i=>{const a=e?i.layers.map(o=>o.id===F.state.ui.selectedLayerId?{...o,sourceId:t.id}:o):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),F.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function d1(t){const e=F.project.sources.filter(s=>s.kind==="audio");for(const s of e)Fs(s);if(F.setProject(s=>{const r=s.sources.filter(f=>f.kind!=="audio"),l=s.layers.map(f=>e.some(d=>d.id===f.sourceId)?{...f,sourceId:r.find(d=>d.kind!=="audio")?.id??null}:f),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),eo(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",o=t.beats?.length?`${t.beats.length} hits`:"",n=[i,a,o].filter(Boolean).join(" · ");F.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function wo(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&F.patchUi({status:`reading ${i.name}…`});const o=await em(i);if(o.kind==="audio"){d1(o);continue}if(e){const n=F.state.ui.selectedSourceId;F.setProject(s=>({...s,sources:s.sources.map(r=>r.id===n?{...o,id:r.id}:r)})),F.patchUi({status:`replaced ${i.name}`})}else kt(o,!0)}catch(a){F.patchUi({status:a instanceof Error?a.message:"import failed"})}}function h1(){F.setProject(e=>{const i=e.sources.find(o=>o.kind!=="audio")?.id??null,a=vs(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=F.project.layers.at(-1);F.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function m1(t){F.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Be("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:Be("fx")}));const o=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(o+1,0,a),{...e,layers:n}})}function p1(t){F.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Cn(t){const e=xe(F.project);if(!e)return;const i=gs(t);Le(e.id,a=>({...a,effects:[...a.effects,i]})),F.patchUi({selectedEffectId:i.id})}function g1(t,e){Le(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function dl(t,e,i){Le(t,a=>{const o=a.effects.findIndex(l=>l.id===e),n=o+i;if(o<0||n<0||n>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(o,1);return s.splice(n,0,r),{...a,effects:s}})}function v1(t,e){Le(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function Oi(t,e,i,a,o=!0){Le(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),o)}function Qt(t,e=!1){const i=F.state.ui;(t==="all"||t==="selected")&&F.setProject(o=>({...o,seed:o.seed+1+(Date.now()&255)>>>0}),!1),F.setProject(o=>{let s=hs(o,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.includeCritters&&(s=ds(s)),t==="all"&&i.includeIdol&&(s=xd(s)),s});const a=F.project.layers[0]?.effects.map(o=>o.typeId).join(" · ");F.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${F.project.seed}`})}function b1(){const t=xe(F.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(F.project.seed+Date.now())%9998;if(e){Oi(t.id,e.id,"seed",i),F.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Cn("critters");const a=xe(F.project),o=zi(a);a&&o?.typeId==="critters"&&Oi(a.id,o.id,"seed",i),F.patchUi({status:"stamped floaters"})}function y1(){const t=xe(F.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(F.project.seed+Date.now()+17)%9998;if(e){Oi(t.id,e.id,"seed",i),F.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Cn("dancer");const a=xe(F.project),o=zi(a);a&&o?.typeId==="dancer"&&Oi(a.id,o.id,"seed",i),F.patchUi({status:"stamped idol"})}function w1(){F.setProject(t=>Ad({...t,seed:t.seed+1+(Date.now()&255)>>>0})),F.patchUi({status:"new floater and idol seeds"})}async function k1(t){const e=F.project,{width:i,height:a}=In(e.exportSettings.width||1280,e.exportSettings.height||720,Ft,Ft);try{const o=await t.capture(e,e.playback.time,i,a,"image/png",tl),n=await Ps(o,`print_${Date.now()}.png`);kt(n,!0),F.patchUi({status:"printed the live frame as a new still"})}catch(o){F.patchUi({status:o instanceof Error?o.message:"print failed"})}}function hl(t){F.setProject(e=>({...e,seed:e.seed+t>>>0}))}function ml(){Lg(`${F.project.name||"phosphene"}.phos.json`,zg(F.project)),F.patchUi({status:"project downloaded"})}async function T1(t){const e=await t.text(),i=Og(e);F.replace(i),F.patchUi({status:"project loaded — re-drop media if needed"})}function _1(){const t=prompt("Preset name",`look ${F.project.presets.length+1}`);if(!t)return;const e=Ho(F.project,t);F.setProject(i=>({...i,presets:[...i.presets,e]}))}function En(t){const e=F.project.presets.find(i=>i.id===t);e&&(F.setProject(i=>bd(i,e)),F.patchUi({status:`preset ${e.name}`}))}function S1(){const t=yd(F.project.presets,F.project.seed+Date.now());if(!t){F.patchUi({status:"no presets saved"});return}En(t.id)}function x1(t){const e=F.project.presets.find(i=>i.id===t);e&&F.setProject(i=>({...i,presets:[...i.presets,wd(e)]}))}function C1(t){F.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function pl(){const t=F.state.ui,e=xe(F.project),i=zi(e),a=t.selectedParam?.paramId;if(!e||!i||!a){F.patchUi({status:"select a numeric parameter first"});return}const o=i.params[a];if(typeof o!="number"){F.patchUi({status:"keyframes are numeric"});return}const n={id:Be("kf"),time:F.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:o,easing:"smooth"};F.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),F.patchUi({status:`key ${a} @ ${n.time.toFixed(2)}s`})}function E1(){F.setProject(t=>({...t,keyframes:[]}))}async function M1(){const t=F.project.sources.find(i=>i.id===F.state.ui.selectedSourceId);if(!t)return;const e=await am(t);e&&kt(e,!0)}function gl(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of F.project.sources)Fs(e);F.replace(bs()),F.patchUi({status:"new piece",prompt:"",generating:!1})}}async function P1(){if(F.state.ui.generating)return;const t=F.state.ui.prompt.trim();if(!t){F.patchUi({status:"type a prompt first"});return}F.patchUi({generating:!0,status:"generating new image…"});try{const e=F.project.sources.find(c=>c.id===F.state.ui.selectedSourceId),i=F.state.ui.useSourceForGen;let a=[];const o=e?.frozenFrame||e?.bitmap||e?.video||null;i&&o&&(a=r1(o));const n=o1(t,a,i&&a.length>0),s=F.project.seed+Date.now()>>>0,r=await f1({prompt:n,seed:s,width:F.project.exportSettings.width,height:F.project.exportSettings.height,onStatus:c=>F.patchUi({generating:!0,status:c},!1)}),l=await Ps(r,`gen_${s}.jpg`);kt(l,!0),F.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){F.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let ko=!1,Hi=null;function A1(t,e){Hi=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tunnel / spiral / helix / bloom / prism plus Gyre, Well, Hall, Drift, Braid, and Sway are 3D fly-throughs — stamps travel in depth and around the frame so a big screen feels like you are moving through the picture. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Field is a deforming sheet: stamps pack into a texture, tear into stretched ribbons and islands with huge empty ground, then fill again. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Chain can optionally wear Animal Chain parts (dragon, dog, ferret, caterpillar, zebra) on the same path. Hunt is a documentary camera on top of any move: watch wide, notice a stamp, snap in, follow, return. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
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
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",I1(t),F.subscribe(()=>{ko||Mn(t)}),Mn(t)}async function F1(t=!1){if(Hi&&!F.state.ui.exporting){F.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),F.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await Jg(Hi,F.project,F.project.playback.time,(i,a)=>{F.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);F.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){F.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function I1(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,o=i.dataset.id;if(a==="save"&&ml(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&gl(),a==="imagine"&&P1(),a==="seed-"&&hl(-1),a==="seed+"&&hl(1),a==="rand-all"&&Qt("all"),a==="rand-wacky"&&Qt("all",!0),a==="cut-edit"){const n=!F.project.cutEdit?.enabled;F.setProject(s=>({...s,cutEdit:{enabled:n,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),F.patchUi({status:n?F.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&w1(),a==="reprint"&&Hi&&k1(Hi),a==="rand-sel"&&Qt("selected"),a==="rand-param"){const n=i.dataset.paramId,s=xe(F.project),r=zi(s);n&&s&&r&&F.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:n}},!1),Qt("param")}if(a==="help"&&F.patchUi({helpOpen:!F.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&M1(),a==="gen"){const n=i.dataset.kind??"plasma",s=Yt(),r=i.dataset.kit??(Ae(n)?Bt(s?.collageKit):void 0),l=i.dataset.move??(Ae(n)?Vn(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,f=Gt(n,r,l,N1(s,c));kt(f,!0),F.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}${f.collageKitB?` · ${f.collageKitB}`:""}`:f.collageKit?`place · ${n} · ${f.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(a==="mash"){const n=i.dataset.kit??"love",s=Yt();if(s){const r=s.collageKitB===n||s.collageKit===n?void 0:n;te(l=>vl({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=Gt("wallpaper","sailor","rush",{kitB:n});kt(r,!0),F.patchUi({status:`mash · sailor · ${n}`})}}if(a==="wash"){const n=i.dataset.hex;n&&(te(s=>({...s,colorA:n}),`wash · ${n}`)||(kt(Gt("wallpaper","sailor","rush",{wash:n}),!0),F.patchUi({status:`wash · ${n}`})))}if(a==="color-pack"){const n=gi(i.dataset.pack),s=Yt();if(s){const r=Bt(s.collageKit),l=Vt(r,n),c=(s.colorA??"").toLowerCase(),f=l.some(d=>d.toLowerCase()===c);te(d=>({...d,collageColorPack:n,colorA:f?d.colorA:l[0],colorB:mt(r,n)}),`color · ${Bo[n]}`)}else{const r=Gt("wallpaper","sailor","rush",{colorPack:n});kt(r,!0),F.patchUi({status:`color · ${Bo[n]}`})}}if(a==="night"){const s=!Yt()?.collageNight;te(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(kt(Gt("wallpaper","sailor","rush",{night:!0}),!0),F.patchUi({status:"night wash"}))}if(a==="camera"){const n=ti(i.dataset.camera);te(s=>({...s,collageCamera:n}),n==="hunt"?"camera · documentary search":"camera · fixed")}if(a==="camera-feel"){const n=Ia(i.dataset.feel);te(s=>({...s,collageCameraFeel:n}),`camera feel · ${n}`)}if(a==="hunt-select"){const n=Ba(i.dataset.select);te(s=>({...s,collageHuntSelect:n}),`subject select · ${n}`)}if(a==="hunt-focus"){const s=!Yt()?.collageHuntFocus;te(r=>({...r,collageHuntFocus:s}),s?"manual focus on":"manual focus off")}if(a==="chain-animal"){const n=li(i.dataset.animal);te(s=>vl({...s,collageChainAnimal:n}),n==="off"?"animal chain off":`animal chain · ${n}`)}if(a==="stamp-critters"&&b1(),a==="stamp-idol"&&y1(),a==="add-layer"&&h1(),a==="dup-layer"&&o&&m1(o),a==="del-layer"&&o&&p1(o),a==="sel-layer"&&o&&F.patchUi({selectedLayerId:o,selectedEffectId:F.project.layers.find(n=>n.id===o)?.effects[0]?.id??null}),a==="sel-fx"&&o&&F.patchUi({selectedEffectId:o}),a==="sel-src"&&o&&F.patchUi({selectedSourceId:o}),a==="bypass"&&o){const n=xe(F.project);n&&v1(n.id,o)}if(a==="fx-up"&&o){const n=xe(F.project);n&&dl(n.id,o,-1)}if(a==="fx-dn"&&o){const n=xe(F.project);n&&dl(n.id,o,1)}if(a==="fx-del"&&o){const n=xe(F.project);n&&g1(n.id,o)}if(a==="key"&&pl(),a==="key-clear"&&E1(),a==="pst-save"&&_1(),a==="pst-rand"&&S1(),a==="pst-load"&&o&&En(o),a==="pst-dup"&&o&&x1(o),a==="pst-del"&&o&&C1(o),a==="export"&&F1(),a==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));F.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),F.patchUi({status:`${n}s clip ready — hit Export`})}if(a==="exp-aspect"&&o){const n=_n.find(s=>s.id===o);if(n){const s=Math.max(F.project.exportSettings.width,F.project.exportSettings.height,At),r=il(n.rw,n.rh,Math.min(Ft,Math.max(At,s)));F.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const n=Number(i.dataset.long||At),s=F.project,r=al(s.exportSettings.width,s.exportSettings.height,n);F.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:n>=Ft?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const n=F.project,s=xe(n),r=n.sources.find(d=>d.id===(s?.sourceId??n.sources[0]?.id)),l=r?.kind==="audio"?n.sources.find(d=>d.kind!=="audio"):r,c=Math.max(n.exportSettings.width,n.exportSettings.height,At),f=al(l?.width??1280,l?.height??720,Math.min(Ft,c));F.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:f.width,height:f.height}}))}if(a==="play"&&(eo(),F.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),a==="use-src"&&o){if(F.project.sources.find(r=>r.id===o)?.kind==="audio")return;const s=xe(F.project);s&&Le(s.id,r=>({...r,sourceId:o}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(T1(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(wo(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(wo(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(wo(i.files,!1),i.value=""),i.id==="quality"&&F.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&Cn(i.value),i.value=""),i.id==="blend"){const a=xe(F.project);a&&Le(a.id,o=>({...o,blendMode:i.value}))}if(i.id==="mask-type"){const a=xe(F.project);a&&Le(a.id,o=>({...o,mask:{...o.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&En(i.value),i.id==="exp-format"&&F.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&F.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&F.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&F.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&F.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=F.project;if(i.id==="gen-prompt"&&F.patchUi({prompt:i.value},!1),i.id==="gen-src"&&F.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&F.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&F.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&F.patchUi({includeEffects:i.checked}),i.id==="seed"&&F.setProject(o=>({...o,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&F.setProject(o=>({...o,randomAmount:Number(i.value)}),!1),i.id==="speed"&&F.setProject(o=>({...o,playback:{...o.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&F.setProject(o=>({...o,playback:{...o.playback,loop:i.checked}}),!1),i.id==="loop-close"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&F.setProject(o=>({...o,playback:{...o.playback,freeze:i.checked}}),!1),i.id==="time"&&F.setProject(o=>({...o,playback:{...o.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const o=xe(a);o&&Le(o.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const o=xe(a);o&&Le(o.id,n=>({...n,enabled:i.checked}),!1)}for(const o of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${o}`&&F.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[o]:Number(i.value)}}),!1),i.id===`lfb-${o}`){const n=xe(a);n&&Le(n.id,s=>({...s,feedback:{...s.feedback,[o]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const o=xe(a),n=i.id.slice(3);o&&n in o.transform&&Le(o.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){ko=!0;const o=B1(i.dataset.fxType||"",i.dataset.param),n=R1(i,o);Oi(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),F.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&te(o=>({...o,collageScale:fi(Number(i.value))}),void 0,!0),i.id==="collage-density"&&te(o=>({...o,collageDensity:di(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&te(o=>({...o,collagePace:ai(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&te(o=>({...o,collageChainTravel:oi(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&te(o=>({...o,collageChainMorph:ni(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&te(o=>({...o,collageChainVary:si(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&te(o=>({...o,collageChainSmooth:ri(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&te(o=>({...o,collageSpringStrength:fa(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&te(o=>({...o,collageSpringDamp:da(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&te(o=>({...o,collageSpringDist:ha(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&te(o=>({...o,collageSpringElast:ma(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&te(o=>({...o,collageSpringBreak:pa(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&te(o=>({...o,collageFlowScale:ga(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&te(o=>({...o,collageFlowTurb:va(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&te(o=>({...o,collageFlowEvolve:ba(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&te(o=>({...o,collageFlowForce:ya(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&te(o=>({...o,collageFlowDepth:wa(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&te(o=>({...o,collageBoidCohere:ka(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&te(o=>({...o,collageBoidSep:Ta(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&te(o=>({...o,collageBoidAlign:_a(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&te(o=>({...o,collageBoidRadius:Sa(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&te(o=>({...o,collageBoidSpeed:xa(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&te(o=>({...o,collagePoleCount:Ca(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&te(o=>({...o,collagePoleAttract:Ea(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&te(o=>({...o,collagePoleRepel:Ma(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&te(o=>({...o,collagePoleSpeed:Pa(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&te(o=>({...o,collagePoleFalloff:Aa(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&te(o=>({...o,collagePoleSwitch:Fa(Number(i.value))}),void 0,!0),i.id==="collage-field-strength"&&te(o=>({...o,collageFieldStrength:qi(Number(i.value))}),void 0,!0),i.id==="collage-field-scale"&&te(o=>({...o,collageFieldScale:Di(Number(i.value))}),void 0,!0),i.id==="collage-field-evolve"&&te(o=>({...o,collageFieldEvolve:$i(Number(i.value))}),void 0,!0),i.id==="collage-field-density"&&te(o=>({...o,collageFieldDensity:Wi(Number(i.value))}),void 0,!0),i.id==="collage-field-density-scale"&&te(o=>({...o,collageFieldDensityScale:ji(Number(i.value))}),void 0,!0),i.id==="collage-field-density-evolve"&&te(o=>({...o,collageFieldDensityEvolve:Vi(Number(i.value))}),void 0,!0),i.id==="collage-field-flow"&&te(o=>({...o,collageFieldFlow:Gi(Number(i.value))}),void 0,!0),i.id==="collage-field-curl"&&te(o=>({...o,collageFieldCurl:Ki(Number(i.value))}),void 0,!0),i.id==="collage-field-flow-scale"&&te(o=>({...o,collageFieldFlowScale:Xi(Number(i.value))}),void 0,!0),i.id==="collage-field-attract"&&te(o=>({...o,collageFieldAttract:Zi(Number(i.value))}),void 0,!0),i.id==="collage-field-repel"&&te(o=>({...o,collageFieldRepel:Qi(Number(i.value))}),void 0,!0),i.id==="collage-field-radius"&&te(o=>({...o,collageFieldRadius:Yi(Number(i.value))}),void 0,!0),i.id==="collage-field-inertia"&&te(o=>({...o,collageFieldInertia:Ji(Number(i.value))}),void 0,!0),i.id==="collage-field-damp"&&te(o=>({...o,collageFieldDamp:ea(Number(i.value))}),void 0,!0),i.id==="collage-field-max-v"&&te(o=>({...o,collageFieldMaxV:ta(Number(i.value))}),void 0,!0),i.id==="collage-field-scale-amp"&&te(o=>({...o,collageFieldScaleAmp:ia(Number(i.value))}),void 0,!0),i.id==="collage-field-min-scale"&&te(o=>({...o,collageFieldMinScale:aa(Number(i.value))}),void 0,!0),i.id==="collage-field-max-scale"&&te(o=>({...o,collageFieldMaxScale:oa(Number(i.value))}),void 0,!0),i.id==="collage-field-perturb"&&te(o=>({...o,collageFieldPerturb:na(Number(i.value))}),void 0,!0),i.id==="collage-field-warp"&&te(o=>({...o,collageFieldWarp:sa(Number(i.value))}),void 0,!0),i.id==="collage-field-sparsity"&&te(o=>({...o,collageFieldSparsity:ra(Number(i.value))}),void 0,!0),i.id==="collage-field-contrast"&&te(o=>({...o,collageFieldContrast:la(Number(i.value))}),void 0,!0),i.id==="collage-field-motion"&&te(o=>({...o,collageFieldMotion:ca(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-min"&&te(o=>({...o,collageHuntWideMin:Ra(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-max"&&te(o=>({...o,collageHuntWideMax:za(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-min"&&te(o=>({...o,collageHuntFollowMin:Oa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-max"&&te(o=>({...o,collageHuntFollowMax:Ha(Number(i.value))}),void 0,!0),i.id==="collage-hunt-snap"&&te(o=>({...o,collageHuntSnap:La(Number(i.value))}),void 0,!0),i.id==="collage-hunt-zoom"&&te(o=>({...o,collageHuntZoom:Na(Number(i.value))}),void 0,!0),i.id==="collage-hunt-tight"&&te(o=>({...o,collageHuntTight:Ua(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-min"&&te(o=>({...o,collageHuntReactMin:qa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-max"&&te(o=>({...o,collageHuntReactMax:Da(Number(i.value))}),void 0,!0),i.id==="collage-hunt-precision"&&te(o=>({...o,collageHuntPrecision:$a(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-speed"&&te(o=>({...o,collageHuntFocusSpeed:Wa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-error"&&te(o=>({...o,collageHuntFocusError:ja(Number(i.value))}),void 0,!0),i.id==="collage-hunt-variation"&&te(o=>({...o,collageHuntVariation:Va(Number(i.value))}),void 0,!0),i.id==="exp-q"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{ko&&(ko=!1,Mn(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),F.state.ui.dropActive||F.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&F.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),F.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&wo(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),eo(),F.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Qt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Qt("all",!0),(e.key==="k"||e.key==="K")&&pl(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),gl()),e.key==="?"&&F.patchUi({helpOpen:!F.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),ml()))})}function B1(t,e){return ot(t)?.params.find(i=>i.id===e)}function R1(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Mn(t){const{project:e,ui:i}=F.state,a=t.querySelector("#proj-name"),o=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),o&&document.activeElement!==o&&(o.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const f=t.querySelector("#inc-fx");f&&(f.checked=i.includeEffects);const d=t.querySelector("#inc-fx-stack");d&&(d.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(h=>{h.classList.toggle("acid",!!e.cutEdit?.enabled)}),z1(t.querySelector("#rail")),O1(t.querySelector("#stack")),L1(t.querySelector("#transport"))}function z1(t){const e=F.project,i=F.state.ui,a=e.sources.find(o=>o.id===i.selectedSourceId&&Ae(o.generator))??e.sources.find(o=>Ae(o.generator));t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Ke(i.prompt)}</textarea>
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
      ${St.map(o=>`<button class="btn tiny ${a?.collageKitB===o?"acid":""}" data-act="mash" data-kit="${o}">${gc(o)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${pi.map(o=>`<button class="btn tiny ${gi(a?.collageColorPack)===o?"acid":""}" data-act="color-pack" data-pack="${o}">${Bo[o]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${Vt(Bt(a?.collageKit),a?.collageColorPack).map(o=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===o.toLowerCase()?"on":""}" data-act="wash" data-hex="${o}" style="background:${o}" title="${o}"></button>`).join("")}
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
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${oi(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${oi(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${ni(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${ni(a?.collageChainMorph).toFixed(2)}" />
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
      ${Ga.map(o=>`<button class="btn tiny ${li(a?.collageChainAnimal)===o?"acid":""}" data-act="chain-animal" data-animal="${o}">${Kn[o]}</button>`).join("")}
    </div>`:""}
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
    </div>
    ${a?.collageMove==="field"?`<div class="sec">Emergent current</div>
    ${ee("collage-field-strength","Field Strength",qi(a.collageFieldStrength),.2,2.2,.05)}
    ${ee("collage-field-scale","Field Scale",Di(a.collageFieldScale),.28,2.4,.05)}
    ${ee("collage-field-evolve","Field Evolution",$i(a.collageFieldEvolve),.08,2.2,.05)}
    ${ee("collage-field-density","Density Strength",Wi(a.collageFieldDensity),0,2.2,.05)}
    ${ee("collage-field-density-scale","Density Scale",ji(a.collageFieldDensityScale),.28,2.4,.05)}
    ${ee("collage-field-density-evolve","Density Evolution",Vi(a.collageFieldDensityEvolve),.08,2.2,.05)}
    ${ee("collage-field-flow","Flow Strength",Gi(a.collageFieldFlow),0,2.2,.05)}
    ${ee("collage-field-curl","Flow Curl",Ki(a.collageFieldCurl),0,2.2,.05)}
    ${ee("collage-field-flow-scale","Flow Scale",Xi(a.collageFieldFlowScale),.28,2.4,.05)}
    ${ee("collage-field-attract","Attraction",Zi(a.collageFieldAttract),0,2.2,.05)}
    ${ee("collage-field-repel","Repulsion",Qi(a.collageFieldRepel),0,2.4,.05)}
    ${ee("collage-field-radius","Interaction Radius",Yi(a.collageFieldRadius),.02,.22,.005)}
    ${ee("collage-field-inertia","Inertia",Ji(a.collageFieldInertia),.25,2.2,.05)}
    ${ee("collage-field-damp","Damping",ea(a.collageFieldDamp),.08,1,.02)}
    ${ee("collage-field-max-v","Max Velocity",ta(a.collageFieldMaxV),.25,2.2,.05)}
    ${ee("collage-field-scale-amp","Scale Field",ia(a.collageFieldScaleAmp),0,2.2,.05)}
    ${ee("collage-field-min-scale","Min Scale",aa(a.collageFieldMinScale),.12,1,.02)}
    ${ee("collage-field-max-scale","Max Scale",oa(a.collageFieldMaxScale),.6,3.2,.05)}
    ${ee("collage-field-perturb","Local Perturbation",na(a.collageFieldPerturb),0,2,.05)}
    ${ee("collage-field-warp","Large-Scale Warp",sa(a.collageFieldWarp),0,2.2,.05)}
    ${ee("collage-field-sparsity","Sparsity",ra(a.collageFieldSparsity),0,2,.05)}
    ${ee("collage-field-contrast","Density Contrast",la(a.collageFieldContrast),0,2.2,.05)}
    ${ee("collage-field-motion","Global Motion",ca(a.collageFieldMotion),0,2,.05)}`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${ee("collage-spring-strength","Spring Strength",fa(a.collageSpringStrength),.2,2.2,.05)}
    ${ee("collage-spring-damp","Damping",da(a.collageSpringDamp),.08,1,.02)}
    ${ee("collage-spring-dist","Connection Distance",ha(a.collageSpringDist),.12,.72,.02)}
    ${ee("collage-spring-elast","Elasticity",ma(a.collageSpringElast),.2,2.2,.05)}
    ${ee("collage-spring-break","Break / Reconnect",pa(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${ee("collage-flow-scale","Field Scale",ga(a.collageFlowScale),.28,2.4,.05)}
    ${ee("collage-flow-turb","Turbulence",va(a.collageFlowTurb),0,2,.05)}
    ${ee("collage-flow-evolve","Evolution Speed",ba(a.collageFlowEvolve),.08,2.2,.05)}
    ${ee("collage-flow-force","Force",ya(a.collageFlowForce),.2,2.2,.05)}
    ${ee("collage-flow-depth","Depth Influence",wa(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${ee("collage-boid-cohere","Cohesion",ka(a.collageBoidCohere),.1,2.2,.05)}
    ${ee("collage-boid-sep","Separation",Ta(a.collageBoidSep),.15,2.4,.05)}
    ${ee("collage-boid-align","Alignment",_a(a.collageBoidAlign),.1,2.2,.05)}
    ${ee("collage-boid-radius","Perception Radius",Sa(a.collageBoidRadius),.08,.55,.01)}
    ${ee("collage-boid-speed","Speed",xa(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${ee("collage-pole-count","Pole Count",Ca(a.collagePoleCount),1,5,1)}
    ${ee("collage-pole-attract","Attraction",Ea(a.collagePoleAttract),.15,2.2,.05)}
    ${ee("collage-pole-repel","Repulsion",Ma(a.collagePoleRepel),.1,2.2,.05)}
    ${ee("collage-pole-speed","Pole Speed",Pa(a.collagePoleSpeed),.12,2.2,.05)}
    ${ee("collage-pole-falloff","Falloff",Aa(a.collagePoleFalloff),.6,2.8,.05)}
    ${ee("collage-pole-switch","Polarity Switching",Fa(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Camera</div>
    <div class="row">
      ${Ln.map(o=>`<button class="btn tiny ${ti(a?.collageCamera)===o?"acid":""}" data-act="camera" data-camera="${o}">${o==="hunt"?"Hunt":"Fixed"}</button>`).join("")}
    </div>
    ${ti(a?.collageCamera)==="hunt"?`<div class="sec">Documentary Search</div>
    <div class="row">
      ${Un.map(o=>`<button class="btn tiny ${Ba(a?.collageHuntSelect)===o?"acid":""}" data-act="hunt-select" data-select="${o}">${o==="random"?"Random":o==="reactive"?"Reactive":"Mixed"}</button>`).join("")}
    </div>
    <div class="row">
      ${Nn.map(o=>`<button class="btn tiny ${Ia(a?.collageCameraFeel)===o?"acid":""}" data-act="camera-feel" data-feel="${o}">${o==="handheld"?"Handheld":"Perfect"}</button>`).join("")}
      <button class="btn tiny ${a?.collageHuntFocus?"acid":""}" data-act="hunt-focus">Manual Focus</button>
    </div>
    ${ee("collage-hunt-wide-min","Wide / Search Duration Min",Ra(a?.collageHuntWideMin),.4,12,.1)}
    ${ee("collage-hunt-wide-max","Wide / Search Duration Max",za(a?.collageHuntWideMax),.6,16,.1)}
    ${ee("collage-hunt-follow-min","Subject Follow Duration Min",Oa(a?.collageHuntFollowMin),.4,12,.1)}
    ${ee("collage-hunt-follow-max","Subject Follow Duration Max",Ha(a?.collageHuntFollowMax),.6,16,.1)}
    ${ee("collage-hunt-snap","Snap Zoom Speed",La(a?.collageHuntSnap),.35,2.4,.05)}
    ${ee("collage-hunt-zoom","Zoom Range / Close Framing",Na(a?.collageHuntZoom),.35,2.4,.05)}
    ${ee("collage-hunt-tight","Tracking Tightness",Ua(a?.collageHuntTight),.12,1,.02)}
    ${ee("collage-hunt-react-min","Reaction Time Min",qa(a?.collageHuntReactMin),.04,1.4,.02)}
    ${ee("collage-hunt-react-max","Reaction Time Max",Da(a?.collageHuntReactMax),.08,2,.02)}
    ${ee("collage-hunt-precision","Operator Precision",$a(a?.collageHuntPrecision),0,1,.02)}
    ${ee("collage-hunt-variation","Behavior Variation",Va(a?.collageHuntVariation),0,1,.02)}
    ${a?.collageHuntFocus?`${ee("collage-hunt-focus-speed","Focus Correction Speed",Wa(a?.collageHuntFocusSpeed),.15,2.2,.05)}
    ${ee("collage-hunt-focus-error","Focus Error Amount",ja(a?.collageHuntFocusError),0,1.6,.05)}`:""}`:""}
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
    <div class="status" style="margin-top:4px">Each clip keeps one move. Rush / tunnel / gyre / well / hall / drift / braid / sway fly through depth so a big screen feels 3D. Field is a deforming sheet, not a flock: stamps stay on, pack into a texture, tear into stretched ribbons and islands, then fill again. Matter moves are a spring mesh, a flowing current, a flock, or wandering magnets — each with its own sliders. Chain is a freeform 3D conga line. Drum / illusion locks to the tempo grid. Music punches glow, not the path.</div>
    <div style="margin-top:8px">
      ${e.sources.map(o=>{const n=o.kind==="audio"?`beat-sync · ${Jt(o.duration||0)}${o.bpm&&o.bpm>40?` · ${o.bpm}bpm`:""}`:`${o.kind} ${o.width}×${o.height}`,s=o.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${o.id}">use</button>`;return`
        <div class="thumb ${o.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${o.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Ke(o.name)}</b><span>${n}</span></div>
          ${s}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${ee("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${ee("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${ee("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${ee("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${ee("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${ee("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(o=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Ke(o.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${o.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${o.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${o.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function O1(t){const e=F.project,i=xe(e),a=zi(i),o=gd();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${Ke(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${ee("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${nm.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${ee("tr-x","X",i.transform.x,-1,1,.01)}
      ${ee("tr-y","Y",i.transform.y,-1,1,.01)}
      ${ee("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${ee("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${ee("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${ee("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${ee("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${ee("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${ee("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(n=>`<option ${i.mask.type===n?"selected":""} value="${n}">${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${F.state.ui.includeEffects?"checked":""}/> include in randomizer</div>
      ${i.effects.map((n,s)=>`
        <div class="fx ${n.id===a?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Ke(ot(n.typeId)?.name??n.typeId)}</span>
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
        ${vd.map(n=>{const s=(o[n.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Ke(ot(a.typeId)?.name??"params")} · ${Ke(ot(a.typeId)?.description??"")}</div>
        ${(ot(a.typeId)?.params??[]).map(n=>H1(i.id,a,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||Le(i.id,c=>{const f=[...c.effects],[d]=f.splice(r,1);return f.splice(l,0,d),{...c,effects:f}})})})}function H1(t,e,i){const a=e.params[i.id]??i.default,o=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${o} ${a?"checked":""}/> ${Ke(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Ke(i.label)}</span><input type="color" ${o} value="${Ke(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Ke(i.label)}</span>
      <select ${o}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===a?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Ke(i.label)}</span>
    <input type="range" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function L1(t){const e=F.project,i=e.playback,a=e.exportSettings,o=F.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(r=>`<option ${i.mode===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      ${ee("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${Jt(i.time)} / ${Jt(n)}</span>
        <span class="status" id="status-line">${F.state.ui.status}</span>
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
        ${_n.map(r=>`<button class="btn tiny ${qg(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        ${(()=>{const r=Math.max(a.width,a.height);return`<button class="btn tiny ${r<=At?"acid":""}" data-act="exp-size" data-long="${At}">720</button>
        <button class="btn tiny ${r>At?"acid":""}" data-act="exp-size" data-long="${Ft}">1080</button>`})()}
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
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*n;F.setProject(f=>({...f,playback:{...f.playback,time:Math.max(0,c)}}))})}function ee(t,e,i,a,o,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${o}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${o}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Yt(){const t=F.project,e=t.sources.find(o=>o.id===F.state.ui.selectedSourceId);if(e&&Ae(e.generator))return e;const i=xe(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&Ae(a.generator)?a:t.sources.find(o=>Ae(o.generator))}function N1(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,chainAnimal:t.collageChainAnimal,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,camera:t.collageCamera,cameraFeel:t.collageCameraFeel,huntWideMin:t.collageHuntWideMin,huntWideMax:t.collageHuntWideMax,huntFollowMin:t.collageHuntFollowMin,huntFollowMax:t.collageHuntFollowMax,huntSnap:t.collageHuntSnap,huntZoom:t.collageHuntZoom,huntTight:t.collageHuntTight,huntReactMin:t.collageHuntReactMin,huntReactMax:t.collageHuntReactMax,huntPrecision:t.collageHuntPrecision,huntSelect:t.collageHuntSelect,huntFocus:t.collageHuntFocus,huntFocusSpeed:t.collageHuntFocusSpeed,huntFocusError:t.collageHuntFocusError,huntVariation:t.collageHuntVariation,wash:e?t.colorA:void 0}}function vl(t){return!t.collageKit||!t.collageMove?t:{...t,name:ps(t.collageMove,t.collageKit,t.collageKitB,t.collageChainAnimal)}}function te(t,e,i=!1){const a=Yt();return a?(F.setProject(o=>({...o,sources:o.sources.map(n=>n.id===a.id?t(n):n)}),!i),e&&F.patchUi({status:e},!i),!0):!1}function Ke(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Jt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function bl(t,e){if(F.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),o=Math.max(16,Math.floor(a.width*i)),n=Math.max(16,Math.floor(a.height*i));(t.width!==o||t.height!==n)&&(t.width=o,t.height=n)}function U1(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${Jt(i)}  ${e.toFixed(0)}FPS  ${F.project.quality.toUpperCase()}`);const o=Math.max(F.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/o*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${Jt(i)} / ${Jt(o)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=F.state.ui.status)}const yl=window;yl.__phospheneMark=!0;const wl=document.querySelector("#app");if(!wl)throw new Error("#app missing");const Pn=wl,An=document.createElement("canvas");async function q1(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new Xh(An)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:Pn.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}A1(Pn,t),yl.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>bl(An,e)).observe(e),bl(An,e);let a=performance.now(),o=60,n=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const f=F.state.ui.exporting,d=F.project,h=qd(d,d.playback.time),u=vi(d);if(!f&&d.playback.playing&&!d.playback.freeze){const p=u?.audio&&d.playback.mode==="forward"&&!u.audio.paused&&Number.isFinite(u.audio.currentTime);if(u?.audio&&jo(u.audio,d.playback),p){const m=u.audio.currentTime;F.setProject(g=>({...g,playback:{...g.playback,time:m}}),!1)}else{let m=d.playback.time+c*h;const g=Math.max(d.duration,.001);d.playback.loop?m=(m%g+g)%g:m=Math.min(m,g),F.setProject(y=>({...y,playback:{...y.playback,time:m}}),!1),u?.audio&&d.playback.mode!=="forward"&&jo(u.audio,{...d.playback,playing:!1,time:m})}}else u?.audio&&jo(u.audio,{...d.playback,playing:!1});for(const p of F.project.sources)if(p.kind==="video"&&p.video&&!F.project.playback.freeze){const m=qo(F.project.playback.time,p.duration||p.video.duration||1,F.project.playback.mode,1,F.project.playback.loop);om(p,m,{playing:F.project.playback.playing,freeze:F.project.playback.freeze,mode:F.project.playback.mode,speed:F.project.playback.speed})}if(!f)try{t.render(F.project,F.project.playback.time),t.cutStatus&&t.cutStatus!==F.state.ui.status&&F.patchUi({status:t.cutStatus},!1)}catch(p){F.patchUi({status:p instanceof Error?p.message:"render error"},!1)}n++,l-s>400&&(o=n*1e3/(l-s),s=l,n=0),U1(Pn,o,F.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}q1()})();

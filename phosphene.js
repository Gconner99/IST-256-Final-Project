(function(){"use strict";function Me(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function U(t,e,i){return Math.min(i,Math.max(e,t))}function wt(t,e=16){return Math.max(e,Math.round(t)&-2)}function gn(t,e,i,a){const o=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:wt(t*o),height:wt(e*o)}}function ia(t,e,i){return t+(e-t)*i}function nl(t){const e=U(t,0,1);return e*e*(3-2*e)}const sl="field";function kt(t){return t===sl}function Gt(t){return U(t??1.15,.2,2.2)}function to(t){return U(t??.95,.28,2.4)}function Kt(t){return U(t??1,.08,2.2)}function Xt(t){return U(t??1.15,0,2.2)}function io(t){return U(t??.9,.28,2.4)}function ao(t){return U(t??1.1,.08,2.2)}function oo(t){return U(t??.85,0,2.2)}function Zt(t){return U(t??.4,0,2.2)}function no(t){return U(t??.8,.28,2.4)}function so(t){return U(t??.055,.02,.22)}function ro(t){return U(t??.85,0,2.2)}function Qt(t){return U(t??.62,.12,1)}function Yt(t){return U(t??1.85,.6,3.2)}function Jt(t){return U(t??.12,0,2)}function ei(t){return U(t??1.1,0,2.2)}function ti(t){return U(t??.85,0,2)}function ii(t){return U(t??1.25,0,2.2)}function ai(t){return U(t??.45,0,2)}function aa(t){return U(t??1,0,2)}function pi(t){return t==="classic"?"classic":"hypnotic"}function vn(t){const e=aa(t),i=e/2;return{collageFieldTrance:e,collageFieldEvolve:Kt(.5+i*.45),collageFieldWarp:ei(.4+i*.95),collageFieldDensity:Xt(1.2+i*.6)}}function rl(t){const e=Qt(t?.minScale),i=Math.max(e+.08,Yt(t?.maxScale));return{fieldStrength:Gt(t?.fieldStrength),fieldScale:to(t?.fieldScale),fieldEvolve:Kt(t?.fieldEvolve),density:Xt(t?.density),densityScale:io(t?.densityScale),densityEvolve:ao(t?.densityEvolve),flow:oo(t?.flow),curl:Zt(t?.curl),flowScale:no(t?.flowScale),radius:so(t?.radius),scaleAmp:ro(t?.scaleAmp),minScale:e,maxScale:i,perturb:Jt(t?.perturb),warp:ei(t?.warp),sparsity:ti(t?.sparsity),contrast:ii(t?.contrast),motion:ai(t?.motion),trance:aa(t?.trance),classic:!!t?.classic}}const bn=1.6,yn=2.399963229728653,gi=Math.PI*2,ll=6,Rt=["sunflower","orbit","traffic","cascade","checker","scan","snake"],wn={auto:"Auto",sunflower:"Sunflower",orbit:"Orbit",traffic:"Traffic",cascade:"Cascade",checker:"Checker",scan:"Scan",snake:"Snake"};function oa(t){return Rt.includes(t??"")?t:"auto"}function cl(t,e){const i=oa(t);return i!=="auto"?i:Rt[(Math.imul(e>>>0^1540483477,2654435761)>>>0)%Rt.length]}function fl(t,e=0){let i=ll/t.fieldEvolve;if(e>40){const a=240/e;let o=1;for(const n of[1,2,4,8,16,32])Math.abs(Math.log(n*a/i))<Math.abs(Math.log(o*a/i))&&(o=n);i=o*a}return i}function dl(t,e,i=0,a=0){const n=(i>40?t-a:t)/fl(e,i);return n-Math.floor(n)}function Tt(t){return .86+t.density*.2}function ul(t,e){const i=t<.25?Math.sin(t/.25*Math.PI):0;return 1+.07*e.warp*i}function _t(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function St(t){return t.minScale/.62}function dt(t,e){const i=1+(_t(t*3.1+7)-.5)*.5*e.contrast,a=_t(t*5.7+3)<.035*e.contrast?e.maxScale/1.85*(1.5+_t(t*2.3+1)*.5):1;return i*a}function zt(t,e,i){return _t(t*9.13+1)<i.perturb*.5?t:e}function kn(t){return(_t(t+17)-.5)*.14}function na(t){return t*t*t*(t*(t*6-15)+10)}function Tn(t){return t-Math.floor(t)}function vi(t,e){return(Tn(t)-.5)*e}function _n(t,e){const{n:i,R:a,th:o,p:n,seed:s}=t,l=a*(.62+n.fieldStrength*.36)/Math.sqrt(i),c=l*2.1*Tt(n)*St(n),d=yn+n.curl*.006*Math.sin(o),u=s%2?o:-o,p=[8,13,21][s%3];for(let f=0;f<i;f++){const m=(f+.5)/i,h=Math.sin(o*2-m*gi*1.5),g=l*Math.sqrt(f+.5)*(1+n.warp*.06*h),v=f*d+u,b=c*(.55+.75*Math.sqrt(m))*(1+n.motion*.35*h)*dt(f,n);e(f,Math.cos(v)*g,Math.sin(v)*g,b,kn(f),zt(f,f%p,n))}}function hl(t){return Math.min(.48,t.hh*.98)}function ml(t,e){const{n:i,th:a,p:o,seed:n}=t,s=hl(t),r=Math.round(U(3+o.fieldStrength*2.2,3,8)),l=Array.from({length:r},(u,p)=>p+1.2),c=l.reduce((u,p)=>u+p,0);let d=0;for(let u=0;u<r&&d<i;u++){const p=u===r-1?i-d:Math.max(4,Math.round(i*l[u]/c)),f=s*((u+.85)/(r+.2)),m=(u+n)%2?1:-1,h=1+u*.28*(.5+o.curl*.5),g=1+o.motion*.06*Math.sin(a*2+u),v=gi*f/p*2.6*Tt(o)*St(o);for(let b=0;b<p&&d<i;b++,d++){const y=b/p*gi+m*h*a,T=f*g;e(d,Math.cos(y)*T,Math.sin(y)*T,v*dt(d,o),kn(d),zt(d,u*2+b%2,o))}}}function pl(t,e){const{n:i,hh:a,u:o,p:n}=t,s=Math.floor(i/2),r=1.2,l=2*a*1.2,c=Math.max(3,Math.round(Math.sqrt(s*l/r))),d=Math.max(3,Math.ceil(s/c)),u=r/d,p=l/c,f=Math.min(u,p)*1.05*Tt(n)*St(n);let m=0;for(let _=0;_<c&&m<s;_++){const E=-l/2+(_+.5)*p,P=_%2?1:-1,I=1+_%3*.35*n.curl;for(let M=0;M<d&&m<s;M++,m++)e(m,vi((M+.5)/d+P*I*o,r),E,f*dt(m,n),0,zt(m,_,n))}const h=i-m,g=Math.max(3,Math.round(Math.sqrt(h*r/l))),v=Math.max(3,Math.ceil(h/g)),b=r/g,y=l/v,T=Math.min(b,y)*1.05*Tt(n)*St(n);for(let _=0;_<g&&m<i;_++){const E=-r/2+(_+.5)*b,P=_%2?1:-1,I=1+_%3*.35*n.curl;for(let M=0;M<v&&m<i;M++,m++)e(m,E,vi((M+.5)/v+P*I*o,l),T*dt(m,n),0,zt(m,8+_,n))}}function gl(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=1.04,l=2*a*1.22,c=Math.sqrt(r*l/i),d=Math.max(2,Math.round(r/c)),u=Math.max(3,Math.ceil(i/d)),p=r/d,f=l/u,m=Math.min(p,f)*1.08*Tt(n)*St(n),h=s%2?1:-1;let g=0;for(let v=0;v<d&&g<i;v++){const b=-r/2+(v+.5)*p,y=(v%2?1:-1)*h,T=1+v%4*.25*n.curl;for(let _=0;_<u&&g<i;_++,g++)e(g,b,vi((_+.5)/u+y*T*o,l),m*dt(g,n),0,zt(g,v,n))}}function vl(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=1.22,l=2*a*1.22,c=Math.sqrt(r*l/i),d=Math.max(4,Math.round(r/c)),u=Math.max(4,Math.ceil(i/d)),p=r/d,f=l/u,m=Math.min(p,f)*.98*Tt(n)*St(n),h=s%2?1:-1;let g=0;for(let v=0;v<u&&g<i;v++)for(let b=0;b<d&&g<i;b++,g++){const y=-r/2+(b+.5)*p,T=-l/2+(v+.5)*f,_=(v+b)%2===0,E=h*(_?1:-1),P=_?vi((b+.5)/d+E*o,r):y,I=_?T:vi((v+.5)/u+E*o,l);e(g,P,I,m*dt(g,n),0,zt(g,_?b%3:3+v%3,n))}}function bl(t,e){const{n:i,hh:a,u:o,p:n}=t,s=Math.max(4,Math.round(U(5+n.fieldStrength*3,4,12))),r=2*a/s*.95*Tt(n)*St(n),l=r*bn*.7+.04,c=1+2*l,d=-a*.96,u=a*.96,p=(u-d)/Math.max(1,s-1),f=[],m=(b,y)=>{f.push(b,y)};for(let b=0;b<s;b++){const y=d+b*p;b%2===0?(m(-c/2,y),m(c/2,y)):(m(c/2,y),m(-c/2,y))}m(-c/2,u+l),m(-c/2,d-l);const h=f.length/2-1,g=[];let v=0;for(let b=0;b<h;b++){const y=f[2*(b+1)]-f[2*b],T=f[2*(b+1)+1]-f[2*b+1],_=Math.hypot(y,T);g.push(_),v+=_}v=v||1;for(let b=0;b<i;b++){let y=Tn((b+.5)/i+o*.55)*v,T=0;for(;T<h-1&&y>g[T];)y-=g[T],T++;const _=y/Math.max(1e-6,g[T]),E=f[2*T]+(f[2*(T+1)]-f[2*T])*_,P=f[2*T+1]+(f[2*(T+1)+1]-f[2*T+1])*_;e(b,E,P,r*dt(b,n),0,zt(b,T%5,n))}}function bi(t,e,i,a,o,n){const s=Math.abs(t-i)-o,r=Math.abs(e-a)-n;return Math.min(Math.max(s,r),0)+Math.hypot(Math.max(s,0),Math.max(r,0))}function Sn(t,e,i,a,o){return Math.hypot(t-i,e-a)-o}function xn(t,e,i,a,o,n,s){const r=t-i,l=e-a,c=o-i,d=n-a,u=U((r*c+l*d)/(c*c+d*d||1e-8),0,1);return Math.hypot(r-c*u,l-d*u)-s}function yl(t,e,i,a){let o=1e9;for(let n=0;n<i.length-2;n+=2)o=Math.min(o,xn(t,e,i[n],i[n+1],i[n+2],i[n+3],a));return o}function oi(t,e=.04){return na(U(.5-t/(e*2),0,1))}function sa(t){const e=(t%1+1)%1;return e<.5?e*4-1:3-e*4}function wl(t,e,i){const a=Math.sqrt(2*e/Math.max(1,t)),o=Math.max(2,Math.round(1/a)),n=Math.max(2,Math.ceil(t/o)),s=1/o,r=2*e/n,l=[];let c=0;for(let d=0;d<n&&c<t;d++){const u=d%2*.5;for(let p=0;p<o&&c<t;p++,c++){const f=(_t(c*1.71+i)-.5)*s*.46,m=(_t(c*2.93+i)-.5)*r*.46;l.push({x:U(-.5+(p+.5+u*.55)*s+f,-.5,.5),y:U(-e+(d+.5)*r+m,-e,e)})}}return l}function Cn(t,e,i){const a=[];for(const o of e){let n=-1,s=1e9;for(let r=0;r<t.length;r++){if(i[r])continue;const l=Math.hypot(t[r].x-o.x,t[r].y-o.y);l<s&&(s=l,n=r)}n>=0&&(i[n]=!0,a.push({i:n,x:o.x,y:o.y,r:o.r}))}return a}function kl(t,e,i,a,o,n,s){if(s<=0)return t;const r=sa(a*2)*o*.34,l=sa(a*2+.31)*n*.34,c=Math.hypot(e-r,i-l)-s;return t*na(U(c/.045,0,1))}function En(t,e,i,a){const o=t.map((s,r)=>({i:r,o:e(s.x,s.y),a:Math.atan2(s.y,s.x)})).filter(s=>s.o>.38).sort((s,r)=>s.a-r.a||r.o-s.o),n=[];for(const s of o){if(n.length>=i)break;const r=t[s.i];let l=!0;for(const c of n)if(Math.hypot(r.x-t[c].x,r.y-t[c].y)<a){l=!1;break}l&&n.push(s.i)}return n}const Tl=.7,_l=.32;function Sl(t,e,i){const a=Me(t>>>0^2654435761),o=.47*(.86+i.fieldStrength*.12),n=e*.93*(.86+i.fieldStrength*.12),s=.062+i.density*.01,r=a()>.5?1:-1,l=(B,W=0)=>({occ:B,hole:W,mode:"pack",nStick:0,stickR:0,crawl:0,giants:null}),c=(B,W,L)=>({occ:L,hole:0,mode:"stick",nStick:B.length,stickR:0,crawl:W,giants:B}),d=l((B,W)=>oi(bi(B,W,0,0,o,n),.045),i.classic?.2+a()*.06:.4+a()*.08),u=(a()-.45)*n*.28,p=l((B,W)=>{const L=bi(B,W,0,0,o,n),J=bi(B,W,r*o*.38,u,o*.55,n*.48);return oi(Math.max(L,-J),.03)}),f=[],m=(B,W,L,J)=>{const O=2*W,F=2*L,ae=2*O+2*F;for(let ie=0;ie<B;ie++){let Q=(ie+.5)/B*ae,ue,ge;Q<O?(ue=-W+Q,ge=-L):Q<O+F?(ue=W,ge=-L+(Q-O)):Q<2*O+F?(ue=W-(Q-O-F),ge=L):(ue=-W,ge=L-(Q-2*O-F)),!(r>0&&ue>W*.25&&Math.abs(ge)<L*.48)&&(r<0&&ue<-W*.25&&Math.abs(ge)<L*.48||f.push({x:ue+(a()-.5)*.05,y:ge+(a()-.5)*.05,r:J+a()*.025}))}};m(48,o*.94,n*.94,.1),m(36,o*.72,n*.72,.088);const h=c(f,.02,(B,W)=>{const L=bi(B,W,0,0,o,n),J=bi(B,W,0,0,o*.5,n*.42);return oi(Math.max(L,-J),.05)}),g=8+Math.floor(a()*4),v=3,b=Math.ceil(g/v),y=[];for(let B=0;B<g;B++){const W=B%v,L=Math.floor(B/v);y.push({x:-o*.7+(W+.5)*(1.4*o)/v+(a()-.5)*o*.16,y:-n*.7+(L+.5)*(1.4*n)/b+(a()-.5)*n*.16,r:.155+a()*.07})}const T={occ:()=>0,hole:0,mode:"giant",nStick:0,stickR:0,crawl:.05,giants:y},_=Math.floor(a()*3);let E;_===0?E=[-o*.92,-n*.28,-o*.05,-n*.22,o*.08,n*.08,-o*.02,n*.88,o*.22,n*.12,o*.88,-n*.55]:_===1?E=[-o*.9,n*.42,o*.55,n*.48,o*.52,n*.88,o*.52,-n*.88,o*.55,-n*.42,-o*.9,-n*.48]:E=[-o*.85,n*.15,-o*.15,n*.72,o*.35,n*.55,o*.15,0,o*.72,-n*.35,o*.2,-n*.82,-o*.55,-n*.55];const P=l((B,W)=>oi(yl(B,W,E,s*1.2),.04));if(!i.classic)return[d,p,h,T,P];const I=[],M=30;for(let B=0;B<M;B++){const W=(B+.5)/M,L=.24*Math.sqrt(W),J=B*yn+a()*.2;I.push({x:Math.cos(J)*L*o*1.7,y:Math.sin(J)*L*n*1.7,r:.078+a()*.025})}const N=c(I,.14,(B,W)=>oi(Sn(B,W,0,0,.28),.05)),j=(a()-.5)*o*.16,x=(a()-.4)*n*.1,z=(.2+a()*.05)*Math.max(o,n)/.42,k=[],D=6+Math.floor(a()*3);for(let B=0;B<D;B++){const W=B/D*gi+a()*.35,L=z+.16+a()*.14;k.push([j+Math.cos(W)*z*.35,x+Math.sin(W)*z*.35,j+Math.cos(W)*L,x+Math.sin(W)*L,.05+a()*.03])}const Z=l((B,W)=>{let L=Sn(B,W,j,x,z);for(const J of k)L=Math.min(L,xn(B,W,J[0],J[1],J[2],J[3],J[4]));return oi(L,.035)});return[d,p,h,N,Z,T,P]}function xl(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=Sl(s,a,n),l=.47*(.86+n.fieldStrength*.12),c=a*.93*(.86+n.fieldStrength*.12),d=r.length,u=o*d,p=Math.min(d-1,Math.floor(u)),f=u-p,m=n.classic?_l:Tl,h=na(U((f-m)/(1-m),0,1)),g=r[p],v=r[(p+1)%d],b=wl(i,a,s),y=(.05+g.crawl*(1-h)+v.crawl*h)*(.5+n.motion*.55),T=sa(o*2)*y,_=sa(o*2+.33)*y*(c/Math.max(1e-6,l)),E=(W,L,J)=>kl(W.occ(L,J),L,J,o,l,c,W.hole),P=new Array(i).fill(!1),I=new Array(i).fill(!1),M=g.giants?Cn(b,g.giants,P):[],N=v.giants?Cn(b,v.giants,I):[],j=new Map(M.map(W=>[W.i,W])),x=new Map(N.map(W=>[W.i,W])),z=g.mode==="stick"&&!g.giants?new Set(En(b,g.occ,g.nStick,Math.max(.05,g.stickR*.72))):null,k=v.mode==="stick"&&!v.giants?new Set(En(b,v.occ,v.nStick,Math.max(.05,v.stickR*.72))):null,Z=Math.sqrt(2*a/Math.max(1,i))*1.58*Tt(n)*St(n),B=1.35+n.warp*2.1;for(let W=0;W<i;W++){const L=b[W].x,J=b[W].y,O=g.mode==="pack"?E(g,L,J):0,F=v.mode==="pack"?E(v,L,J):0,ae=O*(1-h)+F*h;let ie=U(L+T,-.5,.5),Q=U(J+_,-a,a),ue=Z*ae;z?.has(W)&&(ue=Math.max(ue,g.stickR*(1-h))),k?.has(W)&&(ue=Math.max(ue,v.stickR*h));const ge=j.get(W),fe=x.get(W);if(ge||fe){const q=fe??ge;if(q){const C=ge&&fe?1:fe?h:1-h;ie=U(L+T+(q.x-L)*C,-.5,.5),Q=U(J+_+(q.y-J)*C,-a,a),ue=Math.max(ue,q.r*(n.maxScale/1.85)*C)}}const he=!!(z?.has(W)||k?.has(W));ae<.32&&!he&&!ge&&!fe&&(ue=0);const _e=B*o+_t(W*3.1)*(.35+n.perturb*2.2),we=_e-Math.floor(_e),He=n.classic?na(U((we-.78)/.16,0,1)):we>.92?1:0,Re=Math.floor(_e)*13+W,V=ue*(ge||fe||he?Math.max(.9,dt(W,n)):dt(W,n));e(W,ie,Q,V,0,Re,1,Re+13,He)}}class Cl{poses=[];posesAt(e,i,a,o,n,s=0,r=0,l="auto"){const c=Math.max(.2,o),d=.5/c,u=cl(l,a),p=dl(i,n,s,r),f={n:e,hh:d,R:Math.hypot(.5,d),u:p,th:p*gi,seed:a>>>0,p:n};this.poses.length!==e&&(this.poses=Array.from({length:e},()=>({x:0,y:0,px:0,rot:0,alpha:0,squash:1})));for(const b of this.poses)b.alpha=0;const m=Math.max(1,c),h=c*c,g=n.classic?1:ul(p,n),v=(b,y,T,_,E,P,I=1,M,N=0)=>{const j=this.poses[b];j&&(j.x=y,j.y=T*h,j.px=Math.max(0,_*g)*m*bn,j.rot=E,j.alpha=_>.004?1:0,j.squash=1,j.flip=I,j.charge=P,j.chargeB=M,j.morph=N)};return u==="sunflower"?_n(f,v):u==="orbit"?ml(f,v):u==="traffic"?pl(f,v):u==="cascade"?gl(f,v):u==="checker"?vl(f,v):u==="scan"?bl(f,v):u==="snake"?xl(f,v):_n(f,v),this.poses}}const El=["spring","flow","boids","poles"];function lo(t){return!!t&&El.includes(t)}function ra(t){return U(t??1,.2,2.2)}function la(t){return U(t??.55,.08,1)}function ca(t){return U(t??.34,.12,.72)}function fa(t){return U(t??1,.2,2.2)}function da(t){return U(t??2.1,1.15,3.6)}function ua(t){return U(t??1,.28,2.4)}function ha(t){return U(t??.8,0,2)}function ma(t){return U(t??.7,.08,2.2)}function pa(t){return U(t??1,.2,2.2)}function ga(t){return U(t??.7,0,1.6)}function va(t){return U(t??1,.1,2.2)}function ba(t){return U(t??1,.15,2.4)}function ya(t){return U(t??1,.1,2.2)}function wa(t){return U(t??.22,.08,.55)}function ka(t){return U(t??1,.25,2.2)}function Ta(t){return U(Math.round(t??3),1,5)}function _a(t){return U(t??1,.15,2.2)}function Sa(t){return U(t??.85,.1,2.2)}function xa(t){return U(t??.8,.12,2.2)}function Ca(t){return U(t??1.4,.6,2.8)}function Ea(t){return U(t??.45,0,2)}function Pl(t){return{springStrength:ra(t?.springStrength),springDamp:la(t?.springDamp),springDist:ca(t?.springDist),springElast:fa(t?.springElast),springBreak:da(t?.springBreak),flowScale:ua(t?.flowScale),flowTurb:ha(t?.flowTurb),flowEvolve:ma(t?.flowEvolve),flowForce:pa(t?.flowForce),flowDepth:ga(t?.flowDepth),boidCohere:va(t?.boidCohere),boidSep:ba(t?.boidSep),boidAlign:ya(t?.boidAlign),boidRadius:wa(t?.boidRadius),boidSpeed:ka(t?.boidSpeed),poleCount:Ta(t?.poleCount),poleAttract:_a(t?.poleAttract),poleRepel:Sa(t?.poleRepel),poleSpeed:xa(t?.poleSpeed),poleFalloff:Ca(t?.poleFalloff),poleSwitch:Ea(t?.poleSwitch)}}function Ml(t,e,i,a,o,n,s){const r=o*3.15,l=a,c=n;let d=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),u=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),p=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const f=Math.hypot(d,u,p)||1;return[d/f,u/f,p/f]}function Il(t,e,i,a){const o=i*(.42+t*.15),n=Math.sin(e*o+t*1.3)*.34+Math.sin(e*o*.37+t)*.08,s=Math.cos(e*o*.86+t*1.9)*.28+Math.cos(e*o*.29+t*.7)*.07,r=Math.sin(e*o*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:n,y:s,z:r,sign:c}}function Al(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function Bl(t,e,i,a){const o=e.length,n={move:t,n:o,lastClock:i,px:new Float32Array(o),py:new Float32Array(o),pz:new Float32Array(o),vx:new Float32Array(o),vy:new Float32Array(o),vz:new Float32Array(o),homeX:new Float32Array(o),homeY:new Float32Array(o),homeZ:new Float32Array(o),links:[],linkKey:""};for(let s=0;s<o;s++){const[r,l,c]=Al(e[s]);n.px[s]=r,n.py[s]=l,n.pz[s]=c,n.homeX[s]=r,n.homeY[s]=l,n.homeZ[s]=c,n.vx[s]=(e[s].vx-.5)*.08,n.vy[s]=(e[s].vy-.5)*.08,n.vz[s]=0}return t==="spring"&&Pn(n,a.springDist),n}function Pn(t,e,i=5){const a=t.n,o=[],n=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,d=Math.min(s,c),u=Math.max(s,c),p=`${d}:${u}`;n.has(p)||(n.add(p),o.push({a:d,b:u,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=o,t.linkKey=`${a}|${e.toFixed(3)}`,o}function qe(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Fl(t,e,i,a){const o=t.n,n=`${o}|${a.springDist.toFixed(3)}`;t.linkKey!==n&&Pn(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,d=Math.cos(i*.47+.8)*.22,u=Math.sin(i*.31+1.2)*.12;for(const f of t.links){const m=t.px[f.b]-t.px[f.a],h=t.py[f.b]-t.py[f.a],g=t.pz[f.b]-t.pz[f.a],v=Math.hypot(m,h,g)||1e-5;if(f.on&&v>f.rest*l){f.on=!1;continue}if(!f.on&&v<a.springDist*.92&&(f.on=!0),!f.on)continue;const b=v-f.rest,y=s*b,T=m/v,_=h/v,E=g/v;t.vx[f.a]+=T*y*e,t.vy[f.a]+=_*y*e,t.vz[f.a]+=E*y*e,t.vx[f.b]-=T*y*e,t.vy[f.b]-=_*y*e,t.vz[f.b]-=E*y*e}const p=Math.exp(-r*7*e);for(let f=0;f<o;f++){const m=t.homeX[f]-t.px[f],h=t.homeY[f]-t.py[f],g=t.homeZ[f]-t.pz[f];t.vx[f]+=m*.35*e,t.vy[f]+=h*.35*e,t.vz[f]+=g*.35*e;const v=Math.hypot(t.px[f]-c,t.py[f]-d,t.pz[f]-u);if(v<.24){const b=(.24-v)/.24;t.vx[f]+=(c-t.px[f])*b*1.8*e,t.vy[f]+=(d-t.py[f])*b*1.8*e,t.vz[f]+=(u-t.pz[f])*b*1.1*e}t.vx[f]*=p,t.vy[f]*=p,t.vz[f]*=p,t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=qe(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=qe(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=qe(t.pz[f],t.vz[f],.36)}}function Rl(t,e,i,a){const o=i*a.flowEvolve,n=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=Ml(t.px[s],t.py[s],t.pz[s],o,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*n*e,t.vy[s]+=l*n*e,t.vz[s]+=c*n*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.34)}}function zl(t,e,i){const a=t.n,o=i.boidRadius,n=o*o,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let d=0;d<a;d++){let u=0,p=0,f=0,m=0,h=0,g=0,v=0,b=0,y=0,T=0;for(let _=0;_<a;_++){if(d===_)continue;const E=t.px[_]-t.px[d],P=t.py[_]-t.py[d],I=t.pz[_]-t.pz[d],M=E*E+P*P+I*I;if(M>n||M<1e-8)continue;T++,u+=t.px[_],p+=t.py[_],f+=t.pz[_],v+=t.vx[_],b+=t.vy[_],y+=t.vz[_];const N=Math.sqrt(M),j=(o-N)/o;m-=E/N*j,h-=P/N*j,g-=I/N*j}T&&(r[d]+=(u/T-t.px[d])*i.boidCohere*1.15,l[d]+=(p/T-t.py[d])*i.boidCohere*1.15,c[d]+=(f/T-t.pz[d])*i.boidCohere*1.15,r[d]+=m*i.boidSep*1.8,l[d]+=h*i.boidSep*1.8,c[d]+=g*i.boidSep*1.8,r[d]+=(v/T-t.vx[d])*i.boidAlign*1.35,l[d]+=(b/T-t.vy[d])*i.boidAlign*1.35,c[d]+=(y/T-t.vz[d])*i.boidAlign*1.35),r[d]+=-t.px[d]*.22,l[d]+=-t.py[d]*.22,c[d]+=-t.pz[d]*.18}for(let d=0;d<a;d++){t.vx[d]+=r[d]*e,t.vy[d]+=l[d]*e,t.vz[d]+=c[d]*e;const u=Math.hypot(t.vx[d],t.vy[d],t.vz[d])||1;if(u>s){const p=s/u;t.vx[d]*=p,t.vy[d]*=p,t.vz[d]*=p}t.px[d]+=t.vx[d]*e,t.py[d]+=t.vy[d]*e,t.pz[d]+=t.vz[d]*e,[t.px[d],t.vx[d]]=qe(t.px[d],t.vx[d],.5),[t.py[d],t.vy[d]]=qe(t.py[d],t.vy[d],.42),[t.pz[d],t.vz[d]]=qe(t.pz[d],t.vz[d],.34)}}function Ol(t,e,i,a){const o=[];for(let s=0;s<a.poleCount;s++)o.push(Il(s,i,a.poleSpeed,a.poleSwitch));const n=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const d of o){const u=d.x-t.px[s],p=d.y-t.py[s],f=d.z-t.pz[s],m=Math.hypot(u,p,f)||1e-4,h=(d.sign>0?a.poleAttract:a.poleRepel)/(m**n+.06),g=d.sign>0?1:-1;if(r+=u/m*h*g*.55,l+=p/m*h*g*.55,c+=f/m*h*g*.32,r+=-p/m*h*.28,l+=u/m*h*.28,m<.1){const v=(.1-m)*10;r-=u/m*v,l-=p/m*v,c-=f/m*v*.6}}for(let d=0;d<t.n;d++){if(s===d)continue;const u=t.px[s]-t.px[d],p=t.py[s]-t.py[d],f=t.pz[s]-t.pz[d],m=u*u+p*p+f*f;if(m>.018||m<1e-8)continue;const h=Math.sqrt(m),g=(.135-h)*2.4;r+=u/h*g,l+=p/h*g,c+=f/h*g*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=qe(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=qe(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=qe(t.pz[s],t.vz[s],.3)}}function Ll(t,e,i,a,o){const n=i.length;let s=t;(!s||s.move!==e||s.n!==n||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=Bl(e,i,a,o));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let d=0;d<l;d++)e==="spring"?Fl(s,c,a,o):e==="flow"?Rl(s,c,a,o):e==="boids"?zl(s,c,o):Ol(s,c,a,o);return s.lastClock=a,s}function Hl(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),o=U(1.1/a,.55,1.7);return{x:U(t.px[e]/a,-.48,.48),y:U(t.py[e]/a,-.4,.4),px:U((.07+i*.03)*o,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:U(.55+o*.4,.5,1)}}const Mn=["heraldry","wallpaper","giants","shower"],xt=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],In=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"],Nl=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function co(t){return!!t&&Nl.includes(t)}const Ot={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES",field:"FIELD"};function Ie(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Lt(t){return xt.includes(t)?t:"sailor"}function An(t){return In.includes(t)?t:"rush"}const Ul=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function Dl(t){return!!t&&Ul.includes(t)}const Bn=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"];function fo(t){return Bn[(t>>>0)%Bn.length]}function yi(t){return U(t??1,.35,1.2)}function wi(t){return U(t??1,.2,2.2)}function ki(t){return U(t??.7,.12,2)}function Ti(t){return U(t??1,.2,2)}function _i(t){return U(t??.72,.12,1)}function Fn(t,e,i,a){const o=be(t)*Math.PI*2,n=U(i,.2,2),s=U(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),d=e*(.45+r*1.55),u=(He,Re,w)=>(He+Re*n)*(.42+.58*(.5+.5*Math.sin(w))),p=.84+.22*Math.sin(l+.4),f=.8+.24*Math.cos(l*.87+1.1),m=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*n)*p,g=u(.04,.07,c+.3)*(.4+s*.6),v=u(.02,.08,d+1.4)*(.18+r*.95),b=u(.01,.06,d*1.3+.8)*r,y=u(.006,.035,c*1.6+2.1)*r*r,T=(.17+.11*n)*f,_=u(.035,.065,c+1.7)*(.4+s*.6),E=u(.02,.07,d+.6)*(.18+r*.95),P=u(.01,.055,d*1.2+2.4)*r,I=u(.006,.03,c*1.4+.5)*r*r,M=(.13+.11*n)*m,N=u(.04,.08,c+2)*(.45+s*.55),j=u(.02,.07,d+1.9)*(.18+r*.95),x=u(.012,.055,d*.9+.2)*r;let z=Math.cos(o+l*.18)*h+Math.cos(2*o+c*.14+.7)*g+Math.sin(3*o+l*.11+1.2)*v+Math.cos(4*o+d*.09+.4)*b+Math.sin(5*o+c*.16+2.2)*y,k=Math.sin(o+l*.15+.5)*T+Math.sin(2*o+c*.19+1.4)*_+Math.cos(3*o+l*.09+.3)*E+Math.sin(4*o+d*.12+1.8)*P+Math.cos(5*o+c*.08+.9)*I,D=Math.sin(o+l*.12+1.1)*M+Math.cos(2*o+c*.17+.6)*N+Math.sin(3*o+d*.1+2.5)*j+Math.cos(4*o+l*.13+1.6)*x;const Z=Math.sin(2*o+c*.22)*r*.12*n;D+=Z;const B=l*.19+Math.sin(c*.27)*.55,W=Math.sin(l*.29+.8)*(.28+.18*n),L=Math.cos(l*.23+1.5)*(.2+r*.4),J=Math.cos(B),O=Math.sin(B),F=z*J-D*O,ae=z*O+D*J,ie=Math.cos(W),Q=Math.sin(W),ue=k*ie-ae*Q,ge=k*Q+ae*ie,fe=Math.cos(L),he=Math.sin(L),_e=F*fe-ue*he,we=F*he+ue*fe;return{x:_e+Math.sin(l*.47)*.06*n,y:we+Math.cos(l*.39+1.3)*.05*n,z:ge+Math.sin(c*.21+.6)*.07*n}}function et(t,e=1){return(t>40?t/60:2)*e}function ql(t,e,i=1,a=0){return be((t-a)*et(e,i))}function $l(t,e,i=1,a=0){const o=Math.cos(ql(t,e,i,a)*Math.PI*2);return o>0?o*o:0}function Rn(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*et(e,i))}function Si(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":"heraldry"}function zn(t,e){return e&&In.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":"rush"}const uo=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],ho={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function Wl(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const jl={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},On={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},Vl={sailor:["fish","anchor","boat","swallow","helm"],circus:["elephant","tent","horse","lion","mask"],fruit:["pear","lemon","apple","banana","pineapple"],nature:["tree","deer","owl","fox","pine"],love:["heart","swan","rose","dove","crown"],space:["rocket","saturn","ufo","planet","astro"],sweet:["lolly","cupcake","donut","waffle","sundae"],music:["vinyl","guitar","piano","sax","headphone"],kitchen:["kettle","toast","pan","chefhat","mug"],weather:["rainbow","umbrella","sun","cloud","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","invader","ghostie","pawn"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate","whistle"],school:["globe","backpack","book","bell","pencil"]},Ln={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},xi=256;function Hn(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function $e(t,e){return e[Math.floor(t()*e.length)%e.length]}function Nn(t,e){return t()<.32?e:$e(t,uo)}function Gl(t,e="rush"){return e==="tunnel"?On[t]:e==="lattice"?Ln[t]:jl[t]}function Kl(t,e,i,a,o=!1,n){const s=o?Vl[a]:Gl(a,e==="bloom"?"rush":e);let r=$e(t,s);!o&&e==="lattice"&&t()<.4&&(r=$e(t,Ln[a])),!o&&e==="tunnel"&&t()<.28&&(r=$e(t,On[a]));const l=o?i:Nn(t,i);let c=o?n&&n.toLowerCase()!==l.toLowerCase()?n:Be(i,"#141414",.42):Nn(t,i);return c===l&&(c=o?Be(i,"#f4f0e4",.55):$e(t,uo)),{kind:r,pattern:o?t()<.82?"plain":"half":t()<.58?"plain":$e(t,["polka","hoop","half","bar"]),a:l,b:c,mirror:t()>.5}}function Xl(t){return t>.5?U((t-.5)/.5,0,1):0}function Zl(t,e,i,a=0){const o=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*n)*11+5>>>0)%o}function Ci(t){return U(t??1,.5,2)}function Ei(t){return U(t??1,.35,2)}function Ql(t,e,i="sailor",a,o=!0,n){const s=Me(t>>>0),r=240,l=a&&a!==i?a:null,c=[];for(let d=0;d<r;d++){const u=d<70?"lattice":d<130?"tunnel":"rush",p=l&&d&1?l:i;c.push({x:s(),y:s(),z:s(),rot:(s()-.5)*.55,size:.55+s()*.9,vx:(s()-.5)*.06,vy:(s()-.35)*.08,vr:(s()-.5)*.25,charge:Kl(s,u,e,p,o,n)})}return c}function Yl(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function Un(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,o=e&255;return(.22*i+.7*a+.08*o)/255}function Dn(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const o=i.a,n=i.b,s=a*2.4;if(t.fillStyle=o,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(2,a*.03),t.strokeStyle=Un(i.a)<Un(i.b)?i.a:i.b,t.stroke(),t.restore()}function mo(t,e,i,a=.42){for(let o=0;o<i*2;o++){const n=o%2===0?e:e*a,s=o*Math.PI/i-Math.PI/2,r=Math.cos(s)*n,l=Math.sin(s)*n;o===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function Jl(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function ec(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function qn(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function tc(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function ic(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function ac(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function oc(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,o=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*o,-Math.cos(a)*o*.85)}t.closePath()}function nc(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function sc(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function rc(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function lc(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function cc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function fc(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function dc(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function uc(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function hc(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function mc(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function pc(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function gc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function vc(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function bc(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function yc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function wc(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function kc(t,e){mo(t,e,8,.55)}function Tc(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function _c(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function Sc(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function xc(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Cc(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function Ec(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Pc(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Mc(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function Ic(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function Ac(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Bc(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function Fc(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function Rc(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function zc(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),qn(t,e*.72)}function Oc(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function Lc(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function Hc(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function Nc(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function Uc(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function Dc(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function qc(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function $c(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function Wc(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function jc(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function Vc(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function Gc(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function Kc(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function Xc(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function Zc(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function Qc(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function Yc(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function Jc(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function e0(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function t0(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function i0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function a0(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function o0(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function n0(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function s0(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function r0(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function l0(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function c0(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function f0(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function d0(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function u0(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function h0(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function m0(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function p0(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function g0(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function v0(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function b0(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function y0(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function w0(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function k0(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function T0(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function _0(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function S0(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function x0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function C0(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function E0(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function P0(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function M0(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function I0(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function A0(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function B0(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function F0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function R0(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function z0(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function O0(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function L0(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function H0(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function N0(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function U0(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function D0(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function q0(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function $0(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function W0(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function j0(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function V0(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function G0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function K0(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function X0(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function Z0(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function Q0(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function Y0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function J0(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function ef(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function tf(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function af(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function of(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function nf(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function sf(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function rf(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function lf(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function cf(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function ff(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function df(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function uf(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function hf(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function mf(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function pf(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function gf(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function vf(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function bf(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function yf(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function wf(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function kf(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function Tf(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function _f(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function Sf(t,e){mo(t,e*.72,4,.32)}function xf(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function Cf(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function Ef(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function Pf(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function Mf(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function If(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function Af(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function Bf(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function Ff(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function Rf(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function zf(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function Of(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function Lf(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function Hf(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function Nf(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function Uf(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function Df(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function qf(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function $f(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function Wf(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function jf(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function Vf(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function Gf(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function Kf(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function Xf(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function Zf(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function Qf(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function Yf(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Jf(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function ed(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function td(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function id(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function ad(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function od(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function nd(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function sd(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function rd(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":mo(t,i,5,e==="starfish"?.42:.4);break;case"heart":Jl(t,i);break;case"moon":ec(t,i);break;case"figure":qn(t,i);break;case"fish":tc(t,i);break;case"anchor":ic(t,i);break;case"wave":ac(t,i);break;case"shell":oc(t,i);break;case"boat":nc(t,i);break;case"tail":sc(t,i);break;case"swallow":rc(t,i);break;case"elephant":lc(t,i);break;case"tent":cc(t,i);break;case"ball":fc(t,i);break;case"bow":dc(t,i);break;case"horse":uc(t,i);break;case"balloon":hc(t,i);break;case"ticket":mc(t,i);break;case"pear":pc(t,i);break;case"lemon":gc(t,i);break;case"cherry":vc(t,i);break;case"leaf":bc(t,i);break;case"mushroom":yc(t,i);break;case"flower":wc(t,i);break;case"sun":kc(t,i);break;case"cloud":Tc(t,i);break;case"bolt":_c(t,i);break;case"umbrella":Sc(t,i);break;case"bird":xc(t,i);break;case"tree":Cc(t,i);break;case"deer":Ec(t,i);break;case"fox":Pc(t,i);break;case"owl":Mc(t,i);break;case"acorn":Ic(t,i);break;case"cone":Ac(t,i);break;case"mountain":Bc(t,i);break;case"drop":Fc(t,i);break;case"moth":Rc(t,i);break;case"wingfig":zc(t,i);break;case"swan":Oc(t,i);break;case"cat":Lc(t,i);break;case"crown":Hc(t,i);break;case"key":Nc(t,i);break;case"ring":Uc(t,i);break;case"envelope":Dc(t,i);break;case"potion":qc(t,i);break;case"rocket":Wc(t,i);break;case"planet":jc(t,i);break;case"saturn":Vc(t,i);break;case"ufo":Gc(t,i);break;case"comet":Kc(t,i);break;case"satellite":Xc(t,i);break;case"lolly":Zc(t,i);break;case"coneice":Qc(t,i);break;case"cupcake":Yc(t,i);break;case"donut":Jc(t,i);break;case"candy":e0(t,i);break;case"note":t0(t,i);break;case"vinyl":i0(t,i);break;case"headphone":a0(t,i);break;case"mic":o0(t,i);break;case"speaker":n0(t,i);break;case"crab":s0(t,i);break;case"helm":r0(t,i);break;case"lighthouse":l0(t,i);break;case"compass":c0(t,i);break;case"popcorn":f0(t,i);break;case"cane":d0(t,i);break;case"mask":u0(t,i);break;case"apple":h0(t,i);break;case"banana":m0(t,i);break;case"grape":p0(t,i);break;case"rabbit":g0(t,i);break;case"snail":v0(t,i);break;case"fern":b0(t,i);break;case"rose":y0(t,i);break;case"diamond":w0(t,i);break;case"candle":k0(t,i);break;case"alien":T0(t,i);break;case"asteroid":_0(t,i);break;case"telescope":S0(t,i);break;case"cookie":x0(t,i);break;case"waffle":C0(t,i);break;case"guitar":E0(t,i);break;case"drum":P0(t,i);break;case"piano":M0(t,i);break;case"clef":I0(t,i);break;case"kettle":A0(t,i);break;case"mug":B0(t,i);break;case"whisk":F0(t,i);break;case"toast":R0(t,i);break;case"egg":z0(t,i);break;case"spoon":O0(t,i);break;case"chili":L0(t,i);break;case"bottle":H0(t,i);break;case"rain":N0(t,i);break;case"flake":U0(t,i);break;case"wind":D0(t,i);break;case"rainbow":q0(t,i);break;case"thermo":$0(t,i);break;case"taxi":W0(t,i);break;case"hydrant":j0(t,i);break;case"bike":V0(t,i);break;case"lamp":G0(t,i);break;case"signal":K0(t,i);break;case"bus":X0(t,i);break;case"stick":Z0(t,i);break;case"dice":Q0(t,i);break;case"coin":Y0(t,i);break;case"pawn":J0(t,i);break;case"cart":ef(t,i);break;case"flag":tf(t,i);break;case"buoy":af(t,i);break;case"hook":of(t,i);break;case"porthole":nf(t,i);break;case"oar":sf(t,i);break;case"hoop":rf(t,i);break;case"unicycle":lf(t,i);break;case"lion":cf(t,i);break;case"topper":ff(t,i);break;case"orange":df(t,i);break;case"peach":uf(t,i);break;case"berry":hf(t,i);break;case"melon":mf(t,i);break;case"pineapple":pf(t,i);break;case"pine":gf(t,i);break;case"hedgehog":vf(t,i);break;case"nest":bf(t,i);break;case"toadstool":yf(t,i);break;case"locket":wf(t,i);break;case"dove":kf(t,i);break;case"kiss":Tf(t,i);break;case"rover":_f(t,i);break;case"spark":Sf(t,i);break;case"astro":xf(t,i);break;case"pretzel":Cf(t,i);break;case"sundae":Ef(t,i);break;case"choco":Pf(t,i);break;case"sax":Mf(t,i);break;case"trumpet":If(t,i);break;case"amp":Af(t,i);break;case"fork":Bf(t,i);break;case"pan":Ff(t,i);break;case"chefhat":Rf(t,i);break;case"tornado":zf(t,i);break;case"subway":Of(t,i);break;case"mailbox":Lf(t,i);break;case"skyline":Hf(t,i);break;case"ghostie":Nf(t,i);break;case"pixel":Uf(t,i);break;case"joystick":Df(t,i);break;case"shroomup":qf(t,i);break;case"invader":$f(t,i);break;case"skull":Wf(t,i);break;case"bat":jf(t,i);break;case"pumpkin":Vf(t,i);break;case"tomb":Gf(t,i);break;case"cauldron":Kf(t,i);break;case"web":Xf(t,i);break;case"trophy":Zf(t,i);break;case"whistle":Qf(t,i);break;case"jersey":Yf(t,i);break;case"skate":Jf(t,i);break;case"goal":ed(t,i);break;case"pencil":td(t,i);break;case"book":id(t,i);break;case"globe":ad(t,i);break;case"backpack":od(t,i);break;case"ruler":nd(t,i);break;case"bell":sd(t,i);break;default:$c(t,i);break}}function ld(t,e,i){const a=()=>rd(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Dn(t,a,e,i),t.restore();return}Dn(t,a,e,i)}function cd(t){const e=document.createElement("canvas");e.width=xi,e.height=xi;const i=e.getContext("2d");return i&&(i.translate(xi/2,xi/2),ld(i,t,xi*.38)),e}class fd{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;agents=null;fieldPoses=[];builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";builtTwoInk=!0;builtPaper="";stamp(e){const i=Yl(e);let a=this.stamps.get(i);return a||(a=cd(e),this.stamps.set(i,a)),a}ensure(e,i,a,o,n=!0,s=""){const r=o&&o!==a?o:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===r&&this.builtTwoInk===n&&this.builtPaper===s&&this.particles.length||(this.particles=Ql(e,i,a,r||null,n,s),this.stamps.clear(),this.sim=null,this.agents=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=r,this.builtTwoInk=n,this.builtPaper=s)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const o=this.canvas.getContext("2d",{alpha:!1});if(!o)return this.canvas;const n=Lt(e.kit),s=e.kitB?Lt(e.kitB):null,r=Hn(e.paper,md(n,e.seed)),l=Hn(e.ink,ho[n]),c=pi(e.look)==="classic",d=c?e.twoInk===!0:e.twoInk!==!1;this.ensure(e.seed>>>0,l,n,s,d,r);const u=zn(e.generator,e.move),p=U(e.audio,0,1),f=U(e.bass,0,1),m=U(e.beat,0,1),h=e.bpm>40?e.bpm:0,g=Ci(e.scale),v=Ei(e.density),b=yi(e.pace),y={travel:wi(e.chainTravel),morph:ki(e.chainMorph),vary:Ti(e.chainVary),smooth:_i(e.chainSmooth)};hd(o,i,a,r,n,e.time,e.seed,m,f,!!e.night,l,d,c),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high";const T=e.beatOffset??0,_=e.time,E=co(u)&&h>40&&T>.001?Math.max(0,_-T):_,P=E*b,I=i/Math.max(a,1),M=u==="drop"?40:u==="spot"?36:u==="tide"||u==="rings"||u==="loom"||u==="petal"||u==="flock"||u==="wheel"||u==="silk"||co(u)?48:u==="prism"?64:u==="helix"||u==="braid"?130:u==="tunnel"||u==="well"?120:u==="hall"?148:u==="bloom"||u==="gyre"||u==="drift"||u==="sway"?140:u==="chain"?40:kt(u)?360:lo(u)?42:this.particles.length,N=kt(u)?Math.max(40,Math.min(560,Math.round(M*v))):Math.max(8,Math.min(this.particles.length,Math.round(M*v))),j=u==="prism"?3:1;if(kt(u)){const Z=rl({fieldStrength:e.fieldStrength,fieldScale:e.fieldScale,fieldEvolve:e.fieldEvolve,density:e.fieldDensity,densityScale:e.fieldDensityScale,densityEvolve:e.fieldDensityEvolve,flow:e.fieldFlow,curl:e.fieldCurl,flowScale:e.fieldFlowScale,radius:e.fieldRadius,scaleAmp:e.fieldScaleAmp,minScale:e.fieldMinScale,maxScale:e.fieldMaxScale,perturb:e.fieldPerturb,warp:e.fieldWarp,sparsity:e.fieldSparsity,contrast:e.fieldContrast,motion:e.fieldMotion,trance:e.fieldTrance,classic:c});this.agents=this.agents??new Cl,this.fieldPoses=this.agents.posesAt(N,E,e.seed>>>0,I,Z,h,T,e.fieldPattern??"auto"),this.sim=null}else if(lo(u)){this.agents=null;const Z=Pl({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=Ll(this.sim,u,this.particles.slice(0,N),E,Z)}else this.agents=null,this.sim=null;const x=u==="spot"?.34:kt(u)?.5:Dl(u)||u==="chain"?.26:.22,z=(Z,B)=>{const W=B,L=Math.min(W.px*g,x)*Math.min(i,a);if(L<5)return;const J=(.5+W.x)*i,O=(.5+W.y/I)*a;for(let F=0;F<j;F++){o.save();const ae=j>1?(F-1)*L*.09:0,ie=j>1?F===2?L*.06:F===0?-L*.03:0:0;if(J+ae<-L||O+ie<-L||J+ae>i+L||O+ie>a+L){o.restore();continue}o.translate(J+ae,O+ie),o.rotate(W.rot+(j>1?F*.1:0)),B.flip!=null&&o.scale(B.flip,1),B.squash&&o.scale(B.squash,1/Math.max(.35,B.squash)),B.glow&&(o.globalAlpha=B.alpha*.32*B.glow,o.fillStyle=B.tint??l,o.beginPath(),o.arc(0,0,L*(.4+B.glow*.16),0,Math.PI*2),o.fill()),o.globalAlpha=B.alpha*(j>1?.72:1),o.drawImage(Z,-L/2,-L/2,L,L),o.restore()}},k=[],D=(Z,B)=>{k.push({stamp:Z,pose:B})};for(let Z=0;Z<N;Z++){const B=kt(u)&&this.agents?this.fieldPoses[Z]??null:null,W=B?.morph??0,L=Math.floor(B?.charge??Z),J=Math.floor(B?.chargeB??L),O=this.particles[(L%this.particles.length+this.particles.length)%this.particles.length];let F=kt(u)&&this.agents?B:lo(u)&&this.sim?Hl(this.sim,Z,O.size):dd(O,Z,u,P,p,f,m,h,N,E,y);if(F&&!(F.alpha<.04))if(kt(u)&&m>.02&&(F={...F,glow:m*.38,squash:(F.squash??1)*(1-m*.045),px:F.px*(1+m*.07)}),kt(u)&&W>.03&&W<.97&&J!==L){const ae=this.particles[(J%this.particles.length+this.particles.length)%this.particles.length];D(this.stamp(O.charge),{...F,alpha:F.alpha*(1-W),px:F.px*(1-.1*W)}),D(this.stamp(ae.charge),{...F,alpha:F.alpha*W,px:F.px*(.9+.1*W)})}else{const ae=W>=.97?this.particles[(J%this.particles.length+this.particles.length)%this.particles.length]:O;D(this.stamp(ae.charge),F)}}k.sort((Z,B)=>Z.pose.y-B.pose.y||Z.pose.px-B.pose.px);for(const Z of k)z(Z.stamp,Z.pose);return(u==="bars"||u==="ripple"||u==="swing"||u==="burst"||u==="halo"||u==="wave")&&m>.04&&(o.save(),o.translate(i*.5,a*.5),o.strokeStyle=Be(l,"#fff4d8",.72),o.globalAlpha=.18+m*.42,o.lineWidth=2.6+m*6,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.16+m*.2),0,Math.PI*2),o.stroke(),o.globalAlpha=.1+m*.22,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.3+m*.18),0,Math.PI*2),o.stroke(),o.restore()),this.canvas}}function be(t){return(t%1+1)%1}function po(t,e,i){const a=Math.cos(i),o=Math.sin(i);return{x:t*a-e*o,y:t*o+e*a}}function ni(t,e=.28,i=2.55){const a=e+be(t)*i,o=e+i,n=U((o-a)/.3,0,1)*U((a-e)/.1,0,1);return n<=.001?null:{depth:a,fade:n}}function $n(t){const e=be(t);return e<.5?e*2:2-e*2}function Wn(t){return $n(t)-.5}function dd(t,e,i,a,o,n,s,r,l=48,c=a,d){const u=co(i),p=$l(c,r),f=U(Math.max(s*(u?.48:.85),p*(u?.72:.22)),0,1);if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,P=(_+.5)/6-.5,I=Math.sin(a*1.7+_*.72+T*.18);return{x:E*.9+I*.07,y:P*.74+Math.sin(a*.82+_*.9)*.035,px:U(.085+t.size*.045+f*.05,.06,.2),rot:t.rot+I*.22,alpha:1,glow:f*.5}}if(i==="rings"){const y=e%4,T=Math.floor(e/4),_=12,E=y&1?-1:1,P=T/_*Math.PI*2+a*(.48+y*.08)*E,I=.14+y*.11;return{x:Math.cos(P)*I,y:Math.sin(P)*I*.88,px:U(.07+t.size*.035+f*.05,.05,.18),rot:P+t.rot*.25,alpha:.96,glow:f*.48}}if(i==="loom"){const b=a*1.05+t.x*Math.PI*2,y=a*1.45+t.y*Math.PI*2;return{x:Math.sin(b)*.4+Math.sin(y*.5)*.06,y:Math.sin(b*2+t.z*Math.PI)*.3,px:U(.08+t.size*.045+f*.05,.06,.2),rot:b*.18+t.rot,alpha:1,glow:f*.48}}if(i==="petal"){const y=e%6,T=Math.floor(e/6)/8,_=y/6*Math.PI*2+a*.34,E=.8+.2*Math.sin(a*1.25),P=(.1+T*.32)*E;return{x:Math.cos(_)*P,y:Math.sin(_)*P*.9,px:U(.075+t.size*.04+f*.05,.055,.2),rot:_+Math.PI*.5,alpha:U(.42+E*.55,.4,1),glow:f*.5}}if(i==="flock"){const b=e%5,T=be(t.z+a*(.18+b*.02))*Math.PI*2+b*.32,_=.2+Math.sin(T*2+b)*.1+b*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:U(.075+t.size*.04+f*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:f*.48}}if(i==="wheel"){const y=e%3,E=Math.floor(e/3)/14*Math.PI*2+a*.58*(y===1?-1:1),P=.2+y*.12,I=.5+.5*Math.sin(E);return{x:Math.cos(E)*P,y:Math.sin(E)*P*.72,px:U((.075+t.size*.035)*(.78+I*.28)+f*.05,.05,.22),rot:E,alpha:U(.5+I*.45,.45,1),glow:f*.48}}if(i==="silk"){const b=e%4,y=b<2?1:-1,T=be(t.x+a*.14*y+b*.08),_=(b/3-.5)*.52+Math.sin(T*Math.PI*3+b)*.055;return{x:T-.5,y:_,px:U(.07+t.size*.038+f*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:f*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,E=(T+.5)/8-.5,P=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),I=U(P*(.42+o*.22+n*.2+p*.28),.18,1),M=.42-_/Math.max(5,1)*I*.82;return{x:E*.86,y:M,px:U(.075+t.size*.03+f*.03,.055,.18),rot:t.rot*.2,alpha:U(.45+(1-_/6)*.5+f*.15,.4,1),glow:f*.55,squash:1-f*.08}}if(i==="ripple"){const y=e%3,T=Math.floor(e/3),_=16,E=be(a*.32),P=.15+y*.145+E*.16+p*.05,I=T/_*Math.PI*2+a*.1;return{x:Math.cos(I)*P,y:Math.sin(I)*P*.88,px:U(.062+t.size*.024+f*.02,.048,.13),rot:I+t.rot*.2,alpha:U(.96-y*.08,.6,1),glow:f*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,E=r>40?r/60*Math.PI*2:5.4,P=T&1?-1:1,I=Math.sin(a*E+T*.85)*.82*P,M=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(I)*M,y:-.44+Math.cos(I)*M,px:U(.07+t.size*.03+f*.028,.05,.16),rot:I,alpha:1,glow:f*.4}}if(i==="burst"){const y=e%3,E=Math.floor(e/3)/16*Math.PI*2+a*.2*(y===1?-1:1),P=(.14+y*.13)*(1+p*.42);return{x:Math.cos(E)*P,y:Math.sin(E)*P*.9,px:U((.08+t.size*.035)*(1+f*.22),.055,.22),rot:E+t.rot*.2,alpha:U(.55+f*.4,.45,1),glow:f*.75,squash:1+f*.14}}if(i==="halo"){const y=e%2,E=Math.floor(e/2)/24*Math.PI*2+a*.26*(y?-1:1),P=.84+.16*Math.sin(a*1.15)+f*.2,I=(.26+y*.14)*P,M=U(.28+f*.65+n*.15,0,1);return{x:Math.cos(E)*I,y:Math.sin(E)*I*.9,px:U(.07+t.size*.032+M*.04,.05,.18),rot:E+Math.PI*.5,alpha:U(.5+M*.45,.4,1),glow:M}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,E=(T+.5)/16-.5,P=.09+o*.05+p*.08,I=E*Math.PI*3.4+a*2.15+_*.55;return{x:E*.92,y:(_-1)*.2+Math.sin(I)*P,px:U(.065+t.size*.03+f*.026,.05,.15),rot:Math.cos(I)*.32,alpha:1,glow:f*.45}}if(i==="drop"){const b=Xl(s),y=b*b;return{x:t.x-.5,y:t.y-.5-y*.07,px:U((.1+t.size*.075)*(1+b*.9),.07,.44),glow:b*.95,rot:t.rot,alpha:1,squash:1-b*.2}}if(i==="spot"){const b=Math.max(8,l),y=Zl(c,r,b),T=e===y,_=T?U(Math.max(s,f),0,1):0,E=e/b*Math.PI*2,P=.3;return{x:Math.cos(E)*P,y:Math.sin(E)*P*.78,px:U((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const b=et(r),y=Wn(t.x+(.16+Math.abs(t.vx)*.5)*c*b),T=Wn(t.y+(.13+Math.abs(t.vy)*.42)*c*b*.9),_=Math.min(.5-Math.abs(y),.5-Math.abs(T));return{x:y,y:T,px:U(.08+t.size*.04+f*.02,.06,.18),glow:(_<.065?.55:0)+f*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const y=Rn(c,r,2),T=Math.floor(e/16)%2,_=(e%16/16+y/16)*Math.PI*2*(T?-1:1),E=.26+T*.12;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.8,px:U(.07+t.size*.03+f*.02,.05,.16),rot:_,alpha:1,glow:f*.55}}if(i==="moire"){const b=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(b?-.78:.62),_=.2+b*.13+p*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:U(.065+t.size*.028+f*.018,.048,.14),rot:T+t.rot*.2,alpha:b?.78:1,glow:f*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,E=_&1?1:-1;return{x:(be((T+.5)/8+c*et(r)*.28*E)-.5)*.92,y:((_+.5)/6-.5)*.78,px:U(.07+t.size*.03+f*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:f*.42}}if(i==="zip"){const b=e%3,y=b===1?-1:1,T=1-p*.16;return{x:(be(t.x+c*et(r)*.34*y*T+b*.12)-.5)*.94,y:(b/2-.5)*.52,px:U(.07+t.size*.032+f*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:f*.4}}if(i==="ghost"){const b=(e&1)===0,y=b?0:1/et(r),T=t.x*Math.PI*2+(c-y)*et(r)*1.35,_=.3+Math.sin((c-y)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:U(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:b?1:.34,glow:b?f*.5:.12}}if(i==="poly"){const b=e&1,y=b?8:12,T=Math.floor(e/2)%y,_=b?3:4,E=T/y*Math.PI*2+c*et(r)*(_/4)*(b?-1:1),P=.2+b*.15;return{x:Math.cos(E)*P,y:Math.sin(E)*P*.84,px:U(.068+t.size*.03+f*.018,.05,.15),rot:E,alpha:1,glow:f*.45}}if(i==="fall"){const b=be(t.z+c*et(r,.5)),y=$n(b),T=y*y,_=y>.82?(y-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:U(.075+t.size*.035+f*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:f*.4,squash:1-_*.28}}if(i==="liss"){const b=et(r),y=c*b*Math.PI*2*1.5+t.x*6.2,T=c*b*Math.PI*2+t.y*5.4;return{x:Math.sin(y)*.4,y:Math.sin(T)*.32,px:U(.07+t.size*.032+f*.02,.05,.16),rot:y*.15+t.rot,alpha:1,glow:f*.42}}if(i==="snap"){const b=Rn(c,r,1)&1?1:-1,y=Math.floor(e/8)%5,T=e%8;return{x:b*(.2+T/7*.1),y:(y/4-.5)*.72,px:U(.072+t.size*.03+f*.025,.05,.16),rot:t.rot*.2+b*.08,alpha:1,glow:f*.6,squash:1-f*.1}}if(i==="chain"){const b=d?.travel??1,y=d?.morph??.7,T=d?.vary??1,_=d?.smooth??.72,P=.62/Math.max(8,l),I=be(c*b*.14-e*P),M=c*y,N=Fn(I,M,T,_),j=Fn(be(I+P),M,T,_),x=Math.max(.42,1.05-N.z*.55),z=Math.max(.42,1.05-j.z*.55),k=N.x/x,D=N.y/x,Z=Math.atan2(j.y/z-D,j.x/z-k),B=U(1.12/x,.55,1.85);return{x:k,y:D,px:U((.072+t.size*.028)*B,.05,.24),rot:Z,alpha:U(.52+B*.42,.5,1)}}if(i==="tunnel"){const y=.3+be(t.z-a*(.4+o*.22+n*.1))*2.45;if(y<.34||y>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/y;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:U(.2*t.size*(.95+n*.1+f*.26)/y,.04,.5),glow:f*.42,rot:t.rot+t.vr*a*.2,alpha:U((2.65-y)/.28,0,1)*U((y-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,P=.32+(1-be(a*(.2+o*.12)+t.z*.02))*2.2;return{x:T/(P*.62),y:_/(P*.62),px:U(.16*t.size/P,.05,.42),rot:t.rot*.25,alpha:U((2.4-P)/.25,0,1)}}if(i==="bloom"){const b=be(t.z-a*(.34+n*.12)),y=b*b,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*y*.92,y:Math.sin(T)*y*.92,px:U(.05+y*.32*t.size*(1+o*.06+f*.24),.04,.48),glow:f*.4,rot:t.rot+b*.4,alpha:U(1.05-y,0,1)*U(b/.08,0,1)}}if(i==="spiral"){const y=.28+be(t.z-a*(.4+o*.2+n*.08))*2.6;if(y<.32||y>2.75)return null;const T=t.x*Math.PI*2+2.15/y+a*.1,_=(.1+t.y*.38)/y;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:U(.2*t.size*(.94+n*.1+f*.26)/y,.04,.52),glow:f*.4,rot:t.rot+T*.15,alpha:U((2.75-y)/.28,0,1)*U((y-.28)/.1,0,1)}}if(i==="helix"){const y=.26+be(t.z-a*(.46+o*.22+n*.08))*2.7;if(y<.3||y>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/y)+t.x*Math.PI*2+T,E=(.11+t.y*.26)/y;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.92,px:U(.22*t.size*(.93+n*.1+f*.26)/y,.04,.54),glow:f*.4,rot:_+t.rot,alpha:U((2.85-y)/.28,0,1)*U((y-.26)/.1,0,1)}}if(i==="prism"){const y=.28+be(t.z-a*(.42+o*.2+n*.08))*2.55;if(y<.32||y>2.7)return null;const T=a*.22+t.rot*.4,_=be(t.x)-.5,E=be(t.y)-.5,P=Math.cos(T),I=Math.sin(T);return{x:(_*P-E*I)/y,y:(_*I+E*P)/y,px:U(.2*t.size*(.94+n*.1+f*.26)/y,.04,.52),glow:f*.4,rot:t.rot+T,alpha:U((2.7-y)/.26,0,1)*U((y-.28)/.1,0,1)}}if(i==="gyre"){const b=ni(t.z-a*.4,.28,2.6);if(!b)return null;const{depth:y,fade:T}=b,_=a*.2+t.x*Math.PI*2,E=.22+t.y*.5,P=Math.cos(_)*E,I=Math.sin(_*.93)*E*.86,M=po(P,I,a*.12);return{x:M.x/y,y:M.y/y+Math.sin(a*.16)*.05,px:U(.22*t.size*(.93+n*.1+f*.26)/y,.04,.55),glow:f*.42,rot:t.rot+_*.2+t.vr*a*.08,alpha:T}}if(i==="well"){const b=ni(t.z-a*.4,.26,2.65);if(!b)return null;const{depth:y,fade:T}=b,_=t.x*Math.PI*2+a*.16+2.6*Math.log(y+.18),E=(.2+e%8*.028)/Math.pow(y,.82);return{x:Math.cos(_)*E,y:Math.sin(_)*E,px:U(.21*t.size*(.93+n*.1+f*.26)/y,.04,.54),glow:f*.42,rot:t.rot+_*.2,alpha:T}}if(i==="hall"){const b=ni(t.z-a*.42,.3,2.5);if(!b)return null;const{depth:y,fade:T}=b,_=e%4,E=be(t.x*.72+t.y*.28)-.5,P=.05/y;let I=0,M=0;_===0?(I=-.52/y-P,M=E/y):_===1?(I=.52/y+P,M=E/y):_===2?(I=E/y,M=-.4/y-P):(I=E/y,M=.4/y+P);const N=po(I,M,.42/y+a*.08);return{x:N.x,y:N.y,px:U(.2*t.size*(.93+n*.1+f*.26)/y,.04,.5),glow:f*.4,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="drift"){const b=ni(t.z-a*.4,.28,2.58);if(!b)return null;const{depth:y,fade:T}=b,E=e%5*1.256,P=a*.09,I=be(t.x+Math.cos(E)*P)-.5,M=be(t.y+Math.sin(E)*P*.72)-.5;return{x:I/y,y:M/y,px:U(.21*t.size*(.93+n*.1+f*.26)/y,.04,.52),glow:f*.42,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="braid"){const b=ni(t.z-a*.44,.26,2.68);if(!b)return null;const{depth:y,fade:T}=b,_=e%3,E=a*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/y,P=(.13+t.y*.2)/y,I=Math.sin(a*.2+_*2.1)*.07;return{x:Math.cos(E)*P+I,y:Math.sin(E)*P*.9,px:U(.22*t.size*(.93+n*.1+f*.26)/y,.04,.54),glow:f*.4,rot:E+t.rot,alpha:T}}if(i==="sway"){const b=ni(t.z-a*.46,.26,2.7);if(!b)return null;const{depth:y,fade:T}=b,_=Math.sin(a*.19)*.48,E=Math.cos(a*.13)*.3,P=Math.sin(a*.07)*.32,I=be(t.x+t.vx*a*.03)-.5,M=be(t.y+t.vy*a*.02)-.5,N=po(I,M,P),j=1/y-.38;return{x:N.x/y+_*j,y:N.y/y+E*j,px:U(.24*t.size*(.92+n*.1+f*.28)/y,.04,.58),glow:f*.46,rot:t.rot+t.vr*a*.12+P*.4,alpha:T}}const h=.26+be(t.z-a*(.46+o*.24+n*.1))*2.7;if(h<.3||h>2.85)return null;const g=(be(t.x+t.vx*a*.03)-.5)/h,v=(be(t.y+t.vy*a*.02)-.5)/h;return{x:g,y:v,px:U(.24*t.size*(.92+n*.1+f*.28)/h,.04,.6),glow:f*.48,rot:t.rot+t.vr*a*.12,alpha:U((2.85-h)/.3,0,1)*U((h-.26)/.1,0,1)}}const si={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function ud(t){return si[t]}function Be(t,e,i){const a=parseInt(t.slice(1),16),o=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(o))return t;const n=U(i,0,1),s=l=>Math.round((a>>l&255)*(1-n)+(o>>l&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function hd(t,e,i,a,o,n,s,r=0,l=0,c=!1,d=ho[o],u=!0,p=!1){const f=c?Be(a,"#08060a",.68):a;if(t.fillStyle=f,t.fillRect(0,0,e,i),!p){if(c){const E=Be(d,"#ffd8a8",.22),P=t.createLinearGradient(0,0,0,i);P.addColorStop(0,Be(f,E,.1+l*.22+r*.04)),P.addColorStop(1,f),t.fillStyle=P,t.globalAlpha=.88,t.fillRect(0,0,e,i),t.globalAlpha=1}return}const m=Me(s+4>>>0),h=$e(m,si[o]),g=$e(m,si[o]),v=$e(m,si[o]),b=t.createLinearGradient(0,0,e,i);if(c){const E=Be(d,"#ffd8a8",.3),P=.16+l*.4+r*.06;b.addColorStop(0,Be(f,E,P*.55)),b.addColorStop(.48,Be(f,h,.2)),b.addColorStop(1,Be(f,g,.24))}else b.addColorStop(0,Be(a,h,.38)),b.addColorStop(.45,Be(a,v,.28)),b.addColorStop(1,Be(a,g,.42));t.fillStyle=b,t.fillRect(0,0,e,i);const y=e*(.5+Math.sin(n*.17)*.08),T=i*(.46+Math.cos(n*.13)*.06),_=t.createRadialGradient(y,T,0,y,T,Math.max(e,i)*.72);if(c){const E=Be(d,"#ffd8a8",.28);_.addColorStop(0,Be(f,E,.22+l*.38+r*.05)),_.addColorStop(1,f)}else _.addColorStop(0,Be(a,h,.42+r*.1)),_.addColorStop(1,a);t.fillStyle=_,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function md(t,e=0){const i=Me(e+17>>>0);return $e(i,si[t])}function Pi(t,e){const i=Me(t+17>>>0);return $e(i,si[xt[Math.floor(i()*xt.length)]])}function Mi(t,e="#c41e3a"){const i=Me(t+91>>>0);return i()<.35?e:$e(i,uo)}function pd(t){return ho[t]}function Ht(t){return xt[(t>>>0)%xt.length]}const Ii=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],go={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},vo={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},Nt=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(vo).map(t=>t.palette)];function Ai(t){return t&&Ii.includes(t)?t:"kit"}function ri(t,e){const i=Ai(e);return i==="kit"?ud(t):vo[i].grounds}function ut(t,e){const i=Ai(e);return i==="kit"?pd(t):vo[i].ink}function Pa(t,e=0,i){const a=ri(t,i),o=Me(e+17>>>0);return a[Math.floor(o()*a.length)%a.length]}function Ma(t){return Ii[Math.floor(t()*Ii.length)%Ii.length]}function jn(t){return Nt[Math.floor(t()*Nt.length)%Nt.length]}function ze(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const gd=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],vd=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],bd=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],yd=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],wd=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Vn=`
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
`,Gn=`
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
`,kd=`
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
`,Td=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,_d=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Kn=`
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
`,bo={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Kn}${Gn}`,applyGlsl:Td};function Sd(t){return t?{...bo,extraUniforms:`${Kn}${Gn}${kd}`,applyGlsl:_d}:bo}const xd=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Vn}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},bo],yo=[...gd,...vd,...bd,...yd,...wd,...xd],Cd=new Map(yo.map(t=>[t.id,t]));function Ed(){return yo}function tt(t){return Cd.get(t)}function Pd(){const t={};for(const e of yo)(t[e.category]??=[]).push(e);return t}const Md=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function wo(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(o=>({...o,params:{...o.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:ze("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function Id(t,e){const i=e.data,a=t.sources.map(n=>n.id),o=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&a.includes(n.sourceId)?n.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:o,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function Ad(t,e){if(t.length===0)return null;const i=Me(e);return t[Math.floor(i()*t.length)]}function Bd(t){return{...t,id:ze("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Xn=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function Fd(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(d=>{const u=parseInt(d.slice(1),16),p=u>>16&255,f=u>>8&255,m=u&255,h=g=>U(Math.round(ia(g,t()*255,a)),0,255);return`#${[h(p),h(f),h(m)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const o=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),r=o+t()*(n-o),l=ia(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function ko(t,e,i,a){const o=tt(t.typeId);if(!o)return t;const n=Me(e),s={...t.params};for(const r of o.params)a&&r.id!==a||(s[r.id]=Fd(n,r,s[r.id]??r.default,U(i,0,1)));return{...t,params:s}}function Rd(t,e,i,a=!1,o){const n=t.effects.map((s,r)=>a&&o&&s.id!==o?s:ko(s,e+r*997,i));return{...t,effects:n}}function To(t,e,i){const a=tt(t),o={};if(a)for(const n of a.params)o[n.id]=n.default;return ko({id:ze("fx"),typeId:t,enabled:!0,params:o},e,i)}function _o(t,e,i,a){const o={...t.params};if(t.typeId==="grade"&&(e==="lush"?(o.saturation=.18+a()*.42,o.brightness=-.04+a()*.16,o.contrast=.06+a()*.22,o.gamma=.82+a()*.35,o.hue=(a()-.5)*.18,o.exposure=-.15+a()*.4):e==="outsider"?(o.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,o.contrast=.2+a()*.55,o.gamma=.55+a()*1.1,o.hue=(a()-.5)*.7):(o.saturation=.05+a()*.5,o.contrast=.1+a()*.35,o.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(o.shadow=i.shadow,o.highlight=i.highlight,o.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(o.leakColor=i.leak,o.leak=e==="lush"?.18+a()*.35:a()*.22,o.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(o.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,o.halation=e==="lush"?.22+a()*.4:a()*.25,o.size=1.4+a()*2.2),t.typeId==="warp"&&(o.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(o.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(o.mixScan=e==="lush"?a()*.2:.25+a()*.5,o.noise=e==="lush"?a()*.1:.12+a()*.35),t.typeId==="posterize"&&(o.levels=3+Math.floor(a()*6),o.dither=.08+a()*.35),t.typeId==="threshold"&&(o.mix=.35+a()*.45,o.soft=.04+a()*.18),t.typeId==="critters"){o.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),o.size=.85+a()*.7,o.amount=.7+a()*.3,o.speed=.7+a()*1.3,o.seed=1+Math.floor(a()*9998);const n=a();e==="lush"?o.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?o.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":o.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){o.size=.12+a()*.05,o.count=1,o.crowd="normal",o.place="center";const n=a();e==="lush"?o.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?o.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":o.move=n>.78?"drift":"dance",o.echo=.35+a()*.5,o.amount=1,o.speed=o.move==="dance"?.55+a()*1.5:.32+a()*.7,o.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?o.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?o.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":o.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?o.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?o.coat=r>.5?"sodium":r>.26?"cream":"wild":o.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(o.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),o.zoom=.7+a()*.8),t.typeId==="channels"&&(o.tint=i.leak,o.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(o.lo=.1+a()*.22,o.hi=.5+a()*.35,o.amount=.45+a()*.4,o.invert=a()>.72),t.typeId==="dropout"&&(o.amount=.28+a()*.4,o.rate=.18+a()*.4,o.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:o}}function zd(t,e="mix"){const i=Me(t>>>0);return _o(To("critters",t,.85),e,Nt[t%Nt.length],i)}function Od(t,e="mix"){const i=Me(t>>>0);return _o(To("dancer",t,.85),e,Nt[t%Nt.length],i)}function Ld(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Od(t.seed+i*4243,"mix")]})}}function Zn(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,zd(t.seed+i*7919,"mix")]})}}function Hd(){return Xn.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Nd(){return Ed().map(t=>t.id).filter(t=>t!=="dancer")}function Ud(t,e){const i=Me(t>>>0),a=Nd(),o=e?3:2,n=e?5:4,s=Math.min(a.length,o+Math.floor(i()*(n-o+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Dd(t,e,i,a=!1,o=!0){const n=Me(e+17>>>0),s=a?n()>.5?"outsider":"mix":n()>.55?"lush":n()>.35?"mix":"outsider",r=jn(n),l=o?Ud(e,a).map((c,d)=>_o(To(c,e+d*3331,i),s,r,Me(e+d*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function Ce(t,e,i){return ia(e,i,t())}function So(t,e="hypnotic"){if(e==="classic"){const n=Qt(Ce(t,.45,.85)),s=Yt(Math.max(n+.08,Ce(t,1.3,2.4)));return{collageFieldPattern:Rt[Math.floor(t()*Rt.length)],collageFieldEvolve:Kt(Ce(t,.75,1.35)),collageFieldStrength:Gt(Ce(t,.8,1.6)),collageFieldDensity:Xt(Ce(t,.8,1.5)),collageFieldSparsity:ti(Ce(t,.4,1.4)),collageFieldPerturb:Jt(Ce(t,.02,.5)),collageFieldCurl:Zt(Ce(t,.1,.9)),collageFieldWarp:ei(Ce(t,.6,1.6)),collageFieldMotion:ai(Ce(t,.15,.8)),collageFieldContrast:ii(Ce(t,.6,1.6)),collageFieldMinScale:n,collageFieldMaxScale:s,collageTwoInk:!1}}const i=t()>.5,a=Qt(i?Ce(t,.38,.58):Ce(t,.72,.92)),o=Yt(i?Ce(t,2.1,2.9):Ce(t,.85,1.15));return{collageFieldPattern:Rt[Math.floor(t()*Rt.length)],...vn(Ce(t,.55,1.35)),collageFieldStrength:Gt(Ce(t,.9,1.4)),collageFieldSparsity:ti(Ce(t,.5,1.2)),collageFieldPerturb:Jt(Ce(t,0,.2)),collageFieldCurl:Zt(Ce(t,.05,.45)),collageFieldMotion:ai(Ce(t,.05,.35)),collageFieldContrast:ii(Ce(t,.9,1.8)),collageFieldMinScale:a,collageFieldMaxScale:Math.max(a+.08,o),collageTwoInk:!0}}function Qn(t,e){const i=Me(e>>>0),a="field",o=t.collageKit,n=t.collageKitB;return{...t,generator:Si(a),collageMove:a,...So(i,t.collageLook==="classic"?"classic":"hypnotic"),name:o?n?`${Ot[a]} · ${o} · ${n}`:`${Ot[a]} · ${o}`:t.name}}function Yn(t,e,i,a,o,n=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=Me(l^2654435769),d=t.layers.map((y,T)=>e==="selected"&&y.id!==i?y:e==="param"?y.id!==i?y:{...y,effects:y.effects.map(_=>_.id===a&&o?ko(_,l+T*13,Math.max(r,.55),o):_)}:e==="all"?Dd(y,l+T*7919,r,n,s):Rd(y,l+T*7919,r,!0,a)),u=Mn,p=Me(l+0*7919>>>0),f=Hd(),m=f[Math.floor(p()*f.length)]??Xn[0],g={"herald tour":{generator:"heraldry",a:Pi(l),b:Mi(l)},"dense paper":{generator:"wallpaper",a:Pi(l+3),b:Mi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:Pi(l+5),b:Mi(l+5)},"heart rain":{generator:"shower",a:Pi(l+7),b:Mi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Pi(l+9),b:Mi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[m.name],v=t.sources.map((y,T)=>{if(e!=="all"||y.kind!=="generator")return y;const _=Me(l+T*131),E=jn(_);if(Ie(y.generator)||Mn.includes(y.generator)){const z=Ht(l+T*41),k=fo(l+T*73),D=Ht(l+T*99),Z=_()>.74&&D!==z?D:void 0,B=Ma(_);return{...y,generator:Si(k),collageKit:z,collageKitB:Z,collageMove:k,collageColorPack:B,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageLook:y.collageLook==="classic"?"classic":"hypnotic",...k==="field"?So(_,y.collageLook==="classic"?"classic":"hypnotic"):{},colorA:Pa(z,l+T*17,B),colorB:ut(z,B),name:Z?`${Ot[k]} · ${z} · ${Z}`:`${Ot[k]} · ${z}`}}const P=n?!1:_()>.35,I=g?g.generator:P?y.generator:u[Math.floor(_()*u.length)],M=Ht(l+T*41),N=Ma(_),j=Ie(I)?Pa(M,l+T*17,N):E.inkA,x=Ie(I)?ut(M,N):E.inkB;return{...y,generator:I,collageKit:Ie(I)?M:y.collageKit,collageColorPack:Ie(I)?N:y.collageColorPack,colorA:g?g.a:j,colorB:g?ut(M,N):x}}),b=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:d,sources:v,globalFeedback:b}}function qd(t){const e=t.seed+7919>>>0,i=Me(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],o=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Ie(r.generator))return r;const c=xt[Math.floor(i()*xt.length)],d=fo(e+l*59),u=Ma(i);return{...r,generator:Si(d),collageKit:c,collageMove:d,collageColorPack:u,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageLook:r.collageLook==="classic"?"classic":"hypnotic",...d==="field"?So(i,r.collageLook==="classic"?"classic":"hypnotic"):{},colorA:Pa(c,e+l*13,u),colorB:ut(c,u),name:`${Ot[d]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:o[Math.floor(i()*o.length)],coat:n[Math.floor(i()*n.length)]}}:l)}))};return s=Zn(s),s}function $d(){return{x:0,y:0,scale:1,rotation:0}}function Wd(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Jn(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function jd(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Vd(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!1}}const Gd={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Ia={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},Kd={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function es(t,e,i){const a=Ot[t];return i&&i!==e?`${a} · ${Ia[e]} · ${Ia[i]}`:`${a} · ${Ia[e]}`}function li(t="plasma",e,i,a){const o=Ie(t)?Lt(e):void 0,n=Gd[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;o&&(s=i==="mix"||i==="tour"?fo(Date.now()+Math.floor(Math.random()*997)):i?An(i):zn(t));const r=s?Si(s):t??"plasma",l=s?Ot[s]:Kd[t??""]??(t?t.toUpperCase():"SIGNAL"),c=o&&a?.kitB?Lt(a.kitB):void 0,d=c&&o&&c!==o?c:void 0,u=o&&s?es(s,o,d):o?`${l} · ${Ia[o]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,p=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,f=o?Ai(a?.colorPack):void 0;return{id:ze("src"),name:u,kind:"generator",generator:r,colorA:p??(o?Pa(o,s==="rush"?1:s==="tunnel"?5:11,f):n.a),colorB:o?ut(o,f):n.b,collageColorPack:f,collageKit:o,collageKitB:d,collageMove:s,collageNight:o?!!a?.night:void 0,collageScale:o?Ci(a?.scale):void 0,collageDensity:o?Ei(a?.density):void 0,collagePace:o?yi(a?.pace):void 0,collageChainTravel:o?wi(a?.chainTravel):void 0,collageChainMorph:o?ki(a?.chainMorph):void 0,collageChainVary:o?Ti(a?.chainVary):void 0,collageChainSmooth:o?_i(a?.chainSmooth):void 0,collageSpringStrength:o?ra(a?.springStrength):void 0,collageSpringDamp:o?la(a?.springDamp):void 0,collageSpringDist:o?ca(a?.springDist):void 0,collageSpringElast:o?fa(a?.springElast):void 0,collageSpringBreak:o?da(a?.springBreak):void 0,collageFlowScale:o?ua(a?.flowScale):void 0,collageFlowTurb:o?ha(a?.flowTurb):void 0,collageFlowEvolve:o?ma(a?.flowEvolve):void 0,collageFlowForce:o?pa(a?.flowForce):void 0,collageFlowDepth:o?ga(a?.flowDepth):void 0,collageBoidCohere:o?va(a?.boidCohere):void 0,collageBoidSep:o?ba(a?.boidSep):void 0,collageBoidAlign:o?ya(a?.boidAlign):void 0,collageBoidRadius:o?wa(a?.boidRadius):void 0,collageBoidSpeed:o?ka(a?.boidSpeed):void 0,collagePoleCount:o?Ta(a?.poleCount):void 0,collagePoleAttract:o?_a(a?.poleAttract):void 0,collagePoleRepel:o?Sa(a?.poleRepel):void 0,collagePoleSpeed:o?xa(a?.poleSpeed):void 0,collagePoleFalloff:o?Ca(a?.poleFalloff):void 0,collagePoleSwitch:o?Ea(a?.poleSwitch):void 0,collageFieldStrength:o?Gt(a?.fieldStrength):void 0,collageFieldScale:o?to(a?.fieldScale):void 0,collageFieldEvolve:o?Kt(a?.fieldEvolve):void 0,collageFieldDensity:o?Xt(a?.fieldDensity):void 0,collageFieldDensityScale:o?io(a?.fieldDensityScale):void 0,collageFieldDensityEvolve:o?ao(a?.fieldDensityEvolve):void 0,collageFieldFlow:o?oo(a?.fieldFlow):void 0,collageFieldCurl:o?Zt(a?.fieldCurl):void 0,collageFieldFlowScale:o?no(a?.fieldFlowScale):void 0,collageFieldRadius:o?so(a?.fieldRadius):void 0,collageFieldScaleAmp:o?ro(a?.fieldScaleAmp):void 0,collageFieldMinScale:o?Qt(a?.fieldMinScale):void 0,collageFieldMaxScale:o?Yt(a?.fieldMaxScale):void 0,collageFieldPerturb:o?Jt(a?.fieldPerturb):void 0,collageFieldWarp:o?ei(a?.fieldWarp):void 0,collageFieldSparsity:o?ti(a?.fieldSparsity):void 0,collageFieldContrast:o?ii(a?.fieldContrast):void 0,collageFieldMotion:o?ai(a?.fieldMotion):void 0,collageFieldPattern:o?oa(a?.fieldPattern):void 0,collageFieldTrance:o?aa(a?.fieldTrance):void 0,collageTwoInk:o?a?.twoInk!==!1:void 0,collageLook:o?pi(a?.look):void 0,width:1280,height:720,duration:0}}function ts(t){const e=tt(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:ze("fx"),typeId:t,enabled:!0,params:i}}function is(t,e,i=[]){return{id:ze("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:$d(),effects:i.map(ts),mask:Wd(),feedback:Jn()}}function as(){const t=li("heraldry","sailor","field",{fieldPattern:"snake",fieldEvolve:.75,fieldDensity:1.5,fieldPerturb:.08,fieldWarp:.85,fieldContrast:1.55,fieldMinScale:.7,fieldMaxScale:2.2,fieldStrength:1.15,fieldMotion:.2,fieldCurl:.2,fieldTrance:1,fieldSparsity:.85,twoInk:!0,look:"hypnotic"}),e=is("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:jd(),globalFeedback:{...Jn(),amount:0,opacity:.4,scale:1},exportSettings:Vd(),presets:[]},a=Yn({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[wo(i,"factory · tour"),wo(a,"factory · scramble")],i}function os(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1,desk:"poster"}}class Xd{state;listeners=new Set;constructor(e=as()){this.state={project:e,ui:os(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...os(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const A=new Xd;function xo(t,e,i,a,o){if(e<=0)return 0;const n=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return o?(s%e+e)%e:U(s,0,e)}function Zd(t,e,i,a,o){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===a&&(i!=="effect"||n.effectId===o)).sort((n,s)=>n.time-s.time)}function Qd(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let o=0;o<t.length-1;o++){const n=t[o],s=t[o+1];if(e>=n.time&&e<=s.time){const r=s.time-n.time||1;let l=(e-n.time)/r;return(s.easing==="smooth"||n.easing==="smooth")&&(l=nl(l)),ia(n.value,s.value,l)}}return i}function Ct(t,e,i,a,o,n,s){const r=Zd(t.keyframes,e,i,a,s);return Qd(r,n,o)}function Yd(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(o=>({...o,params:{...o.params}}))};a.opacity=Ct(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=Ct(t,e.id,"layer","x",e.transform.x,i),a.transform.y=Ct(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=Ct(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=Ct(t,e.id,"layer","rotation",e.transform.rotation,i);for(const o of Object.keys(a.feedback))a.feedback[o]=Ct(t,e.id,"feedback",o,e.feedback[o],i);for(const o of a.effects)for(const[n,s]of Object.entries(o.params))typeof s=="number"&&(o.params[n]=Ct(t,e.id,"effect",n,s,i,o.id));return a}function Jd(t,e){const i=t.layers[0]?.id??"";return Ct(t,i,"playback","speed",t.playback.speed,e)}const eu=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],tu=["spot","burst","snap","step"],iu=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],au=["drop","halo","bars","wave","poly","ghost","fall"];function ou(t,e){const i=e.reduce((o,n)=>o+n.weight,0);let a=t()*i;for(const o of e)if(a-=o.weight,a<=0)return o.item;return e[e.length-1].item}function nu(t){return ou(t,eu.map(e=>({item:e.beats,weight:e.weight})))}function su(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(o=>o!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function ru(t,e,i){const a=t<=2?tu:t<=4?iu:au;return su(e,a,i)}function ns(t){return 60/Math.max(40,t||120)}function ss(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function lu(t,e,i,a){const o=Math.max(1,t),n=ns(e),s=(i??[]).filter(c=>c>=0&&c<o+.05);let r=Number.isFinite(a)&&a>=0?a:s.length?ss(s[0],n):0;r>=o&&(r=ss(r,n));const l=[];for(let c=r;c<o-n*.02;c+=n)l.push(c);if(!l.length)for(let c=0;c<o;c+=n)l.push(c);return l.length||l.push(0),l[l.length-1]<o-1e-6&&l.push(o),l}function cu(t,e,i,a){const o=ns(e),n=Number.isFinite(i)&&i>0?i:0,s=a&&a>0?a:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<n-1e-6?0:Math.max(0,Math.floor((r-n)/o+1e-4))}function fu(t){const e=Me(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=lu(i,t.bpm??120,t.beats,t.offset),o=[];let n=0,s,r,l=0;for(;n<a.length-1&&a[n]<i;){const c=nu(e);r=Ht(t.seed+l*41+Math.floor(e()*17)>>>0);const d=l%5===2||e()>.82,u=e()>.72?Ht(t.seed+l*99+7>>>0):void 0,p=u&&u!==r?u:void 0,f=Ma(e),m=ri(r,f);for(const h of c){if(n>=a.length-1||a[n]>=i)break;const g=Math.min(a.length-1,n+h),v=a[n];if(v>=i)break;const b=ru(g-n,e,s),y=m[Math.floor(e()*m.length)%m.length];o.push({start:v,beats:g-n,startBeat:n,look:{kit:r,kitB:p,move:b,night:d,wash:y,ink:ut(r,f),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=b,n=g}if(l++,l>80)break}if(o.length>=2&&o[o.length-1].beats<2){const c=o.pop();o[o.length-1].beats+=c.beats}if(!o.length){const c=Ht(t.seed);o.push({start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:ri(c)[0],ink:ut(c),scale:.78,density:.88,pace:.62}})}return o}function du(t,e,i,a,o){if(!t.length){const c=Ht(1);return{start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:ri(c)[0],ink:ut(c),scale:.78,density:.88,pace:.62}}}const n=t[t.length-1],s=Math.max(i&&i>n.start?i:0,n.start+.5,t.length>1?n.start+(n.start-t[0].start)/Math.max(1,t.length-1):n.start+2);if(a&&a>40){const c=Number.isFinite(o)&&o>=0?o:t[0].start,d=cu(e,a,c,s);let u=t[0];for(const p of t)if(p.startBeat<=d)u=p;else break;return u}const r=(e%s+s)%s;let l=t[0];for(const c of t)if(c.start<=r+5e-4)l=c;else break;return l}function uu(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const hu=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function mu(t){return(t.type??"").startsWith("audio/")||hu.test(t.name)}function Bi(t){return t.sources.find(e=>e.kind==="audio")}let Fi=null,ht=null,Ri=null;const Co=new WeakSet;let zi=0,Oi=0,Ut=0,rs=0;function Aa(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Fi||(Fi=new t,ht=Fi.createAnalyser(),ht.fftSize=256,ht.smoothingTimeConstant=.72,ht.connect(Fi.destination),Ri=new Uint8Array(ht.frequencyBinCount)),Fi):null}async function Ba(){const t=Aa();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function pu(t){const e=Aa();if(!(!e||!ht||Co.has(t)))try{e.createMediaElementSource(t).connect(ht),Co.add(t)}catch{Co.add(t)}}async function gu(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",pu(i),Ba();let a=null;const o=Aa();if(o)try{const u=await t.arrayBuffer(),p=o.decodeAudioData(u.slice(0)).catch(()=>null);a=await Promise.race([p,new Promise(f=>setTimeout(()=>f(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(u=>{if(Number.isFinite(i.duration)&&i.duration>0){u(i.duration);return}i.addEventListener("loadedmetadata",()=>u(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>u(a?.duration??0),{once:!0})}),new Promise(u=>setTimeout(()=>u(a?.duration??0),2500))])||a?.duration||0,r=a?vu(a.getChannelData(0),a.sampleRate):[],l=bu(r,s),c=a?yu(a.getChannelData(0),a.sampleRate,l.bpm,l.offset,s):l.offset,d=l.bpm>40?wu(r,l.bpm,c,s):r;return{id:ze("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:d,bpm:l.bpm,beatOffset:c,objectUrl:e}}function vu(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,o=Math.floor((t.length-a)/i);if(o<16)return[];const n=new Float32Array(o);for(let d=0;d<o;d++){const u=d*i;let p=0;for(let f=0;f<a;f+=2){const m=t[u+f];p+=m*m}n[d]=Math.sqrt(p/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let d=s;d<o;d++){let u=0,p=0;for(let g=d-s;g<d;g++)u+=n[g],n[g]>p&&(p=n[g]);u/=s;const f=n[d]-n[d-1];if(!(n[d]>u*1.32&&n[d]>p*.72&&f>.0035))continue;const h=d*i/e;h-c<r||(l.push(h),c=h)}return l}function bu(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let u=1;u<t.length;u++){const p=t[u]-t[u-1];p>=.18&&p<=1.2&&i.push(p)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((u,p)=>u-t[p]).filter(u=>u>.12&&u<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((u,p)=>u-p);const o=a[Math.floor(a.length/2)];let n=60/Math.max(.18,o);for(;n>155;)n/=2;for(;n<72&&n>0;)n*=2;n=Eo(Math.round(n),70,170);let s=n,r=0,l=-1;const c=Math.max(70,n-8),d=Math.min(170,n+8);for(let u=c;u<=d;u++){const p=60/u,f=e>0?e:(t[t.length-1]??0)+p,m=new Set([0,(t[0]%p+p)%p]);for(let h=0;h<Math.min(t.length,16);h++)m.add((t[h]%p+p)%p);for(const h of m){let g=0;for(const v of t){const b=((v-h)%p+p)%p,y=Math.min(b,p-b);y<p*.12&&(g+=1-y/(p*.12))}h>.03&&h<f-p*.5&&(g+=.15),g*=1-Math.abs(u-118)/400,g>l&&(l=g,s=u,r=h)}}return{bpm:s,offset:r}}function yu(t,e,i,a,o){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(a)&&a>=0?a:0;const n=60/i,s=n*4,r=Number.isFinite(a)&&a>=0?a:0,l=Math.max(32,Math.floor(e*.04)),c=[0,0,0,0],d=o>0?o:t.length/e;for(let f=0;f<4;f++){let m=0,h=0;for(let g=r+f*n;g<d-.04&&h<72;g+=s){const v=Math.max(0,Math.min(t.length-l-1,Math.floor(g*e)));let b=0;for(let y=0;y<l;y+=3){const T=t[v+y];b+=T*T}m+=b,h++}c[f]=m/Math.max(1,h)}let u=0;for(let f=1;f<4;f++)(c[f]>c[u]*1.05||c[f]>c[u]*.97&&f%2===0&&u%2===1)&&(u=f);return((r+u*n)%s+s)%s}function wu(t,e,i,a){if(!(e>40))return[...t];const o=60/e,n=Math.max(o,a||(t[t.length-1]??0)+o),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<n-o*.08;l+=o)r.push(l);return r.length?r:[...t]}function ls(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const o=60/e;if(!(o>0))return 0;const n=t-a;if(n<-.02)return 0;const s=(n%o+o)%o;return Math.exp(-s/i)}function ku(t,e,i=.2){if(!t.length)return 0;let a=0,o=t.length-1;for(;a<o;){const r=a+o+1>>1;t[r]<=e?a=r:o=r-1}const n=t[a];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function Eo(t,e,i){return Math.max(e,Math.min(i,t))}function Tu(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const o=(a%i+i)%i,n=Math.floor(o*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,n)),l=Math.max(r+1,Math.min(t.length,n+s));let c=0;for(let g=r;g<l;g++)c+=t[g]*t[g];const d=Math.min(1,Math.sqrt(c/(l-r))*3.4),u=Math.max(s,Math.floor(e*.09)),p=Math.min(t.length,n+u);let f=0,m=0;for(let g=r;g<p;g+=8)f+=t[g]*t[g],m++;const h=Math.min(1,Math.sqrt(f/Math.max(1,m))*4.2);return{energy:d,bass:h}}function _u(){if(!ht||!Ri)return null;ht.getByteFrequencyData(Ri);let t=0,e=0;const i=Ri.length,a=Math.max(4,Math.floor(i*.12));for(let o=0;o<i;o++){const n=Ri[o]/255;t+=n,o<a&&(e+=n)}return{energy:t/i,bass:e/a}}function Su(t,e){let i=0,a=0,o=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=Tu(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],d=t.beatOffset??0,u=c.length?ku(c,r,.11):0,p=ls(r,t.bpm??0,.11,d),f=Eo((i-.12)*.75,0,.6);o=Math.max(u,p*.86,c.length?f*.28:f)}else if(t?.kind==="audio"){const s=_u();s&&(i=s.energy,a=s.bass,o=Math.max(ls(e,t.bpm??0,.11,t.beatOffset??0)*.86,Eo((i-.12)*.55,0,.5)))}Math.abs(e-rs)>.2||o>=Ut?Ut=o:Ut+=(o-Ut)*.32,rs=e;const n=t?.kind==="audio"?.22:.14;return zi+=(i-zi)*n,Oi+=(a-Oi)*Math.min(n,.16),!t&&zi<.002&&(zi=0),!t&&Oi<.002&&(Oi=0),t||(Ut=0),{energy:zi,bass:Oi,beat:Ut}}function xu(t,e,i=0,a=0){const o=e.length,n=t.length;if(o<1)return;if(n<1){e.fill(0);return}const s=(Math.round(a)%n+n)%n;for(let l=0;l<o;l++)e[l]=t[(s+l)%n];if(i<=0)return;const r=Math.max(1,Math.round(o*i));for(let l=0;l<r;l++)e[o-r+l]*=1-(l+1)/r}function Po(t){if(!Bi(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function Cu(t,e,i=!1,a=0){const o=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*o)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:n,numberOfChannels:s,sampleRate:o}),l=i?.12:0,c=Number.isFinite(a)&&a>0?a:0,d=Math.round(c*o);for(let u=0;u<s;u++)xu(t.getChannelData(u),r.getChannelData(u),l,d);return r}async function Eu(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const a=Aa()??new e,o=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(o&&o.length>32)return t.pcm=o,o}catch{return null}return null}function Mo(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const Pu=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,Mu=`#version 300 es
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
`,Iu=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Au=`#version 300 es
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
`,Bu=`#version 300 es
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
`,Fu=`#version 300 es
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
`,Ru=`#version 300 es
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
`,zu=`#version 300 es
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
${Vn}
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
`,Ou=`#version 300 es
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
`,Lu=`#version 300 es
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
`,Hu=`#version 300 es
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
`,Nu=`#version 300 es
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
`,Uu=`#version 300 es
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
`,Du=`#version 300 es
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
`,qu=`#version 300 es
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
`,$u=`#version 300 es
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
`,Wu=`#version 300 es
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
`,ju=`#version 300 es
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
`,Vu=`#version 300 es
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
`,Gu=`#version 300 es
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
`,Ku=`#version 300 es
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
`,Xu=`#version 300 es
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
`,Zu=`#version 300 es
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
`,Qu=`#version 300 es
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
`,Yu=`#version 300 es
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
`,cs=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Ju=`#version 300 es
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
`;class Dt extends Error{}function eh(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new Dt("WebGL2 is required for Phosphene.");return e}function fs(t,e,i){const a=t.createShader(e);if(!a)throw new Dt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new Dt(o)}return a}class ye{gl;prog;uniforms=new Map;constructor(e,i,a=Pu){this.gl=e;const o=fs(e,e.VERTEX_SHADER,a),n=fs(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new Dt("Unable to create program");if(e.attachShader(s,o),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(o),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new Dt(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const o=this.loc(e);o&&this.gl.uniform2f(o,i,a)}v3(e,i,a,o){const n=this.loc(e);n&&this.gl.uniform3f(n,i,a,o)}v4(e,i,a,o,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,o,n)}dispose(){this.gl.deleteProgram(this.prog)}}function Fa(t){const e=t.createTexture();if(!e)throw new Dt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function ds(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function th(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class ci{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new Dt("Unable to create framebuffer");this.fbo=i,this.tex=Fa(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,th(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Ne(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function it(t){t.drawArrays(t.TRIANGLES,0,3)}const ih={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},ah={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},us={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function oh(t){return`${Mu}
${t.extraUniforms??""}
${t.applyGlsl}
${Iu}`}function nh(t,e){return new ye(t,oh(e))}function Li(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const fi=8;function hs(t,e,i){return new ImageData(t,e,i)}function sh(t,e,i){const a=t.find(n=>n.id===e);if(!a?.options)return Number(i)||0;const o=a.options.findIndex(n=>n.value===i);return o<0?0:o}class rh{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new fd;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=eh(e),this.generatorProg=new ye(this.gl,Ru)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=fi&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new ci(e),this.pong??=new ci(e),this.composite??=new ci(e),this.post??=new ci(e);this.ring.length<fi;)this.ring.push(new ci(e));this.copy??=new ye(e,cs),this.blit??=new ye(e,Bu),this.compositeProg??=new ye(e,Au),this.feedbackProg??=new ye(e,Fu),this.textureProg??=new ye(e,Ju),this.black||(this.black=Fa(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(n=>n.enabled))return!0;const o=e.sources.find(n=>n.id===a.sourceId);return!!(o&&o.kind!=="generator"&&o.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ye(this.gl,Ou),this.stageProg):e===13?(this.sketchProg??=new ye(this.gl,Lu),this.sketchProg):e===14?(this.feltProg??=new ye(this.gl,Hu),this.feltProg):e===15?(this.foilProg??=new ye(this.gl,Nu),this.foilProg):e===16?(this.plushProg??=new ye(this.gl,Uu),this.plushProg):e===17?(this.yarnProg??=new ye(this.gl,Du),this.yarnProg):e===18?(this.sequinProg??=new ye(this.gl,qu),this.sequinProg):e===19?(this.quiltProg??=new ye(this.gl,$u),this.quiltProg):e===20?(this.corkProg??=new ye(this.gl,Wu),this.corkProg):e===21?(this.ginghamProg??=new ye(this.gl,ju),this.ginghamProg):e===22?(this.sprinkleProg??=new ye(this.gl,Vu),this.sprinkleProg):e===23?(this.velvetProg??=new ye(this.gl,Gu),this.velvetProg):e===24?(this.confettiProg??=new ye(this.gl,Ku),this.confettiProg):e===25?(this.discoProg??=new ye(this.gl,Xu),this.discoProg):e===26?(this.terrazzoProg??=new ye(this.gl,Zu),this.terrazzoProg):e===27?(this.comicProg??=new ye(this.gl,Qu),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ye(this.gl,Yu),this.fieldsProg):(this.generatorFull??=new ye(this.gl,zu),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",o=this.effectProg.get(a);if(o)return o;const n=e==="dancer"?Sd(i):tt(e);if(!n)return null;try{const s=nh(this.gl,n);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(o=>!!o);for(const o of a)o.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new ci(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Fa(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&ds(this.gl,i,a),i}blitTo(e,i){const a=this.gl,o=this.copy;o&&(e.bind(),o.use(),Ne(a,0,i),o.i("uTex",0),it(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const o=Math.max(a?.duration||0,e.duration,e.exportSettings.duration||0,8),n=`${e.cutEdit.seed}|${o}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==n)&&(this.cutReel=fu({seed:e.cutEdit.seed,duration:o,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=n);const s=du(this.cutReel,i,o,a?.bpm,a?.beatOffset);this.cutStatus=uu(s),this.cutLook={generator:Si(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,o,n,s,r){const l=this.gl;this.copy??=new ye(l,cs),this.heraldryTex??=Fa(l);const c=this.cutLook??i,d=this.heraldry.paint({width:s,height:r,time:a,duration:n,seed:o,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,fieldStrength:c.collageFieldStrength,fieldScale:c.collageFieldScale,fieldEvolve:c.collageFieldEvolve,fieldDensity:c.collageFieldDensity,fieldDensityScale:c.collageFieldDensityScale,fieldDensityEvolve:c.collageFieldDensityEvolve,fieldFlow:c.collageFieldFlow,fieldCurl:c.collageFieldCurl,fieldFlowScale:c.collageFieldFlowScale,fieldRadius:c.collageFieldRadius,fieldScaleAmp:c.collageFieldScaleAmp,fieldMinScale:c.collageFieldMinScale,fieldMaxScale:c.collageFieldMaxScale,fieldPerturb:c.collageFieldPerturb,fieldWarp:c.collageFieldWarp,fieldSparsity:c.collageFieldSparsity,fieldContrast:c.collageFieldContrast,fieldMotion:c.collageFieldMotion,fieldPattern:c.collageFieldPattern,fieldTrance:c.collageFieldTrance,twoInk:c.collageTwoInk,look:c.collageLook});if(ds(l,this.heraldryTex,d),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Ne(l,0,this.heraldryTex),this.copy.i("uTex",0),it(l)}drawGenerator(e,i,a,o=77,n=8){if(Ie(i.generator)){this.drawHeraldry(e,i,a,o,n,e.w,e.h);return}const s=this.gl,r=us[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?Li(i.colorA):[.07,.04,.1],d=i.colorB?Li(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",d[0],d[1],d[2]),l.f("uScale",6),l.f("uSeed",o),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),it(s)}drawTexture(e,i,a){const o=this.gl,n=this.textureProg;n&&(e.bind(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),n.use(),Ne(o,0,i),n.i("uTex",0),n.v2("uTranslate",a.transform.x,a.transform.y),n.f("uScale",a.transform.scale),n.f("uRotation",a.transform.rotation),n.v2("uFit",1,1),it(o))}applyEffect(e,i,a,o,n,s,r,l,c){const d=tt(a.typeId),u=this.progFor(a);if(!d||!u){this.blitTo(e,i);return}const p=this.gl;e.bind(),u.use(),Ne(p,0,i),Ne(p,1,l),Ne(p,2,c),u.i("uTex",0),u.i("uFeedback",1),u.i("uHistory",2),u.i("uMask",3),u.v2("uResolution",e.w,e.h),u.v2("uTexel",1/e.w,1/e.h),u.f("uTime",n),u.f("uFrame",s),u.f("uQuality",r==="draft"?0:r==="preview"?1:2),u.f("u_audio",this.audioEnergy),u.f("u_bass",this.audioBass),u.v2("u_translate",o.transform.x,o.transform.y),u.f("u_scale",o.transform.scale),u.f("u_rotation",o.transform.rotation);const f=o.mask;u.i("u_maskType",ah[f.type]??0),u.i("u_maskInvert",f.invert?1:0),u.f("u_maskSoftness",f.softness),u.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),u.v2("u_maskCenter",f.center.x,f.center.y),u.f("u_maskRadius",f.radius),u.f("u_maskGradientAngle",f.gradientAngle),u.f("u_maskNoiseScale",f.noiseScale);let m=1;for(const h of d.params){const g=a.params[h.id]??h.default,v=`u_${h.id}`;if(h.kind==="color"&&typeof g=="string"){const[b,y,T]=Li(g);u.v3(v,b,y,T)}else h.kind==="bool"?u.f(v,g?1:0):h.kind==="enum"?u.f(v,sh(d.params,h.id,g)):u.f(v,Number(g));h.id==="mix"&&(m=Number(g))}u.f("u_mix",m),it(p)}drawLite(e,i){const a=this.gl,o=e.layers.find(u=>u.enabled)??e.layers[0],n=o?e.sources.find(u=>u.id===o.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Ie(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=us[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?Li(s.colorA):[.07,.04,.1],d=s.colorB?Li(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",d[0],d[1],d[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),it(a)}render(e,i,a){const o=this.gl,n=a?.quality??e.quality,s=Su(Bi(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=Bi(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,d=this.composite,u=this.post,p=this.blit,f=this.compositeProg,m=this.feedbackProg,h=n==="draft"?.5:1,g=Math.max(16,Math.floor((a?.width??this.canvas.width)*h)),v=Math.max(16,Math.floor((a?.height??this.canvas.height)*h));this.ensureSize(g,v),d.bind(),o.clearColor(.02,.02,.03,1),o.clear(o.COLOR_BUFFER_BIT);const b=e.globalFeedback,y=Math.max(0,Math.min(fi-1,Math.round(b.delay))),T=(this.ringIndex-1-y+fi*8)%fi,_=this.ring[T].tex,E=Math.floor(i*e.fps);for(const P of e.layers){if(!P.enabled)continue;const I=Yd(e,P,i),M=e.sources.find(z=>z.id===I.sourceId)??null;if(!M||M.kind==="generator"||M.kind==="audio"){const z=M&&M.kind!=="audio"?M:{generator:"plasma"};this.drawGenerator(l,z,i,e.seed,e.duration)}else{const z=this.uploadSource(M);this.drawTexture(l,z,I)}let N=l,j=c;const x=this.histFor(I.id);for(const z of I.effects){if(!z.enabled)continue;this.applyEffect(j,N.tex,z,I,i,E,n,_,x.tex);const k=N;N=j,j=k}if(I.feedback.amount>.001){j.bind(),m.use(),Ne(o,0,N.tex),Ne(o,1,x.tex),m.i("uTex",0),m.i("uFeedback",1),m.f("uAmount",I.feedback.amount),m.f("uOpacity",I.feedback.opacity),m.f("uScale",I.feedback.scale),m.f("uRotation",I.feedback.rotation),m.f("uDistortion",I.feedback.distortion),m.f("uTime",i),it(o);const z=N;N=j,j=z}this.blitTo(u,d.tex),d.bind(),f.use(),Ne(o,0,u.tex),Ne(o,1,N.tex),f.i("uBase",0),f.i("uLayer",1),f.f("uOpacity",I.opacity),f.i("uBlend",ih[I.blendMode]??0),f.v2("uResolution",g,v),it(o),this.blitTo(x,N.tex)}b.amount>.001&&(u.bind(),m.use(),Ne(o,0,d.tex),Ne(o,1,_),m.i("uTex",0),m.i("uFeedback",1),m.f("uAmount",b.amount),m.f("uOpacity",b.opacity),m.f("uScale",b.scale),m.f("uRotation",b.rotation),m.f("uDistortion",b.distortion),m.f("uTime",i),it(o),this.blitTo(d,u.tex)),this.blitTo(this.ring[this.ringIndex],d.tex),this.ringIndex=(this.ringIndex+1)%fi,o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height),p.use(),Ne(o,0,d.tex),p.i("uTex",0),p.f("uVignette",a?.vignette??.25),it(o)}capture(e,i,a,o,n="image/png",s=.97){const r=this.paintFrame(e,i,a,o);return new Promise((l,c)=>{r.toBlob(d=>{d?l(d):c(new Error("Export failed"))},n,s)})}paintFrame(e,i,a,o,n){const s=n??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==o&&(s.height=o);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:o,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===o)r.putImageData(hs(l,a,o),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(hs(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,o)}return s}readPixels(e,i){const a=this.gl,o=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,o),a.bindFramebuffer(a.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(o.length)),s=e*4;for(let r=0;r<i;r++)n.set(o.subarray((i-1-r)*s,(i-r)*s),r*s);return n}}const lh=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,ch=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function fh(t){return t.type.startsWith("video/")||ch.test(t.name)}function dh(t){return t.type.startsWith("image/")||lh.test(t.name)}async function uh(t){if(fh(t))return ph(t);if(dh(t))return ms(t);if(mu(t))return gu(t);throw new Error(`Unsupported media: ${t.name}`)}async function hh(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return ms(i)}async function ms(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:ze("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await mh(e);return{id:ze("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function mh(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function ph(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,o)=>{const n=()=>{a({id:ze("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>o(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function gh(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:ze("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function ps(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function vh(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,o=a.duration;if(!Number.isFinite(o)||o<=0)return;const n=(e%o+o)%o,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,d=Math.abs(a.currentTime-n);if(!s){if(a.paused||a.pause(),d>1/30)try{a.currentTime=n}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),d>.35)try{a.currentTime=n}catch{}return}a.paused||a.pause();const u=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==u&&(a.playbackRate=u),d>1/30)try{a.currentTime=n}catch{}}const bh=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function za(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Io={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var gs;function wh(){return gs||(gs=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,o,n){function s(c,d){if(!o[c]){if(!a[c]){var u=typeof za=="function"&&za;if(!d&&u)return u(c,!0);if(r)return r(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var f=o[c]={exports:{}};a[c][0].call(f.exports,function(m){var h=a[c][1][m];return s(h||m)},f,f.exports,i,a,o,n)}return o[c].exports}for(var r=typeof za=="function"&&za,l=0;l<n.length;l++)s(n[l]);return s})({1:[function(i,a,o){var n=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var c,d,u,p,f,m,h,g=[],v=0,b=l.length,y=b,T=n.getTypeOf(l)!=="string";v<l.length;)y=b-v,u=T?(c=l[v++],d=v<b?l[v++]:0,v<b?l[v++]:0):(c=l.charCodeAt(v++),d=v<b?l.charCodeAt(v++):0,v<b?l.charCodeAt(v++):0),p=c>>2,f=(3&c)<<4|d>>4,m=1<y?(15&d)<<2|u>>6:64,h=2<y?63&u:64,g.push(r.charAt(p)+r.charAt(f)+r.charAt(m)+r.charAt(h));return g.join("")},o.decode=function(l){var c,d,u,p,f,m,h=0,g=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var b,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&y--,l.charAt(l.length-2)===r.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=s.uint8array?new Uint8Array(0|y):new Array(0|y);h<l.length;)c=r.indexOf(l.charAt(h++))<<2|(p=r.indexOf(l.charAt(h++)))>>4,d=(15&p)<<4|(f=r.indexOf(l.charAt(h++)))>>2,u=(3&f)<<6|(m=r.indexOf(l.charAt(h++))),b[g++]=c,f!==64&&(b[g++]=d),m!==64&&(b[g++]=u);return b}},{"./support":30,"./utils":32}],2:[function(i,a,o){var n=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(d,u,p,f,m){this.compressedSize=d,this.uncompressedSize=u,this.crc32=p,this.compression=f,this.compressedContent=m}c.prototype={getContentWorker:function(){var d=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,u,p){return d.pipe(new r).pipe(new l("uncompressedSize")).pipe(u.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,o){var n=i("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,o){var n=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var d=0;d<8;d++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?n.getTypeOf(r)!=="string"?(function(c,d,u,p){var f=s,m=p+u;c^=-1;for(var h=p;h<m;h++)c=c>>>8^f[255&(c^d[h])];return-1^c})(0|l,r,r.length,0):(function(c,d,u,p){var f=s,m=p+u;c^=-1;for(var h=p;h<m;h++)c=c>>>8^f[255&(c^d.charCodeAt(h))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(i,a,o){var n=null;n=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:n}},{lie:37}],7:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=n?"uint8array":"array";function d(u,p){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=p,this.meta={}}o.magic="\b\0",r.inherits(d,l),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,u.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(p){u.push({data:p,meta:u.meta})}},o.compressWorker=function(u){return new d("Deflate",u)},o.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,o){function n(f,m){var h,g="";for(h=0;h<m;h++)g+=String.fromCharCode(255&f),f>>>=8;return g}function s(f,m,h,g,v,b){var y,T,_=f.file,E=f.compression,P=b!==c.utf8encode,I=r.transformTo("string",b(_.name)),M=r.transformTo("string",c.utf8encode(_.name)),N=_.comment,j=r.transformTo("string",b(N)),x=r.transformTo("string",c.utf8encode(N)),z=M.length!==_.name.length,k=x.length!==N.length,D="",Z="",B="",W=_.dir,L=_.date,J={crc32:0,compressedSize:0,uncompressedSize:0};m&&!h||(J.crc32=f.crc32,J.compressedSize=f.compressedSize,J.uncompressedSize=f.uncompressedSize);var O=0;m&&(O|=8),P||!z&&!k||(O|=2048);var F=0,ae=0;W&&(F|=16),v==="UNIX"?(ae=798,F|=(function(Q,ue){var ge=Q;return Q||(ge=ue?16893:33204),(65535&ge)<<16})(_.unixPermissions,W)):(ae=20,F|=(function(Q){return 63&(Q||0)})(_.dosPermissions)),y=L.getUTCHours(),y<<=6,y|=L.getUTCMinutes(),y<<=5,y|=L.getUTCSeconds()/2,T=L.getUTCFullYear()-1980,T<<=4,T|=L.getUTCMonth()+1,T<<=5,T|=L.getUTCDate(),z&&(Z=n(1,1)+n(d(I),4)+M,D+="up"+n(Z.length,2)+Z),k&&(B=n(1,1)+n(d(j),4)+x,D+="uc"+n(B.length,2)+B);var ie="";return ie+=`
\0`,ie+=n(O,2),ie+=E.magic,ie+=n(y,2),ie+=n(T,2),ie+=n(J.crc32,4),ie+=n(J.compressedSize,4),ie+=n(J.uncompressedSize,4),ie+=n(I.length,2),ie+=n(D.length,2),{fileRecord:u.LOCAL_FILE_HEADER+ie+I+D,dirRecord:u.CENTRAL_FILE_HEADER+n(ae,2)+ie+n(j.length,2)+"\0\0\0\0"+n(F,4)+n(g,4)+I+D+j}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),d=i("../crc32"),u=i("../signature");function p(f,m,h,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=h,this.encodeFileName=g,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(p,l),p.prototype.push=function(f){var m=f.meta.percent||0,h=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:h?(m+100*(h-g-1))/h:100}}))},p.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var m=this.streamFiles&&!f.file.dir;if(m){var h=s(f,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(f){this.accumulate=!1;var m=this.streamFiles&&!f.file.dir,h=s(f,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),m)this.push({data:(function(g){return u.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var f=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var h=this.bytesWritten-f,g=(function(v,b,y,T,_){var E=r.transformTo("string",_(T));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(v,2)+n(v,2)+n(b,4)+n(y,4)+n(E.length,2)+E})(this.dirRecords.length,h,f,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(f){this._sources.push(f);var m=this;return f.on("data",function(h){m.processChunk(h)}),f.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),f.on("error",function(h){m.error(h)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(f){var m=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var h=0;h<m.length;h++)try{m[h].error(f)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,m=0;m<f.length;m++)f[m].lock()},a.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,o){var n=i("../compressions"),s=i("./ZipFileWorker");o.generateWorker=function(r,l,c){var d=new s(l.streamFiles,c,l.platform,l.encodeFileName),u=0;try{r.forEach(function(p,f){u++;var m=(function(b,y){var T=b||y,_=n[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(f.options.compression,l.compression),h=f.options.compressionOptions||l.compressionOptions||{},g=f.dir,v=f.date;f._compressWorker(m,h).withStreamInfo("file",{name:p,dir:g,date:v,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(p){d.error(p)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,r){return new n().loadAsync(s,r)},n.external=i("./external"),a.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,o){var n=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),d=i("./nodejsUtils");function u(p){return new s.Promise(function(f,m){var h=p.decompressed.getContentWorker().pipe(new c);h.on("error",function(g){m(g)}).on("end",function(){h.streamInfo.crc32!==p.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}a.exports=function(p,f){var m=this;return f=n.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),d.isNode&&d.isStream(p)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",p,!0,f.optimizedBinaryString,f.base64).then(function(h){var g=new l(f);return g.load(h),g}).then(function(h){var g=[s.Promise.resolve(h)],v=h.files;if(f.checkCRC32)for(var b=0;b<v.length;b++)g.push(u(v[b]));return s.Promise.all(g)}).then(function(h){for(var g=h.shift(),v=g.files,b=0;b<v.length;b++){var y=v[b],T=y.fileNameStr,_=n.resolve(y.fileNameStr);m.file(_,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:f.createFolders}),y.dir||(m.file(_).unsafeOriginalName=T)}return g.zipComment.length&&(m.comment=g.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,o){var n=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}n.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,o){var n=i("readable-stream").Readable;function s(r,l,c){n.call(this,l),this._helper=r;var d=this;r.on("data",function(u,p){d.push(u)||d._helper.pause(),c&&c(p)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,o){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,a,o){function n(_,E,P){var I,M=r.getTypeOf(E),N=r.extend(P||{},d);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&16384&N.unixPermissions&&(N.dir=!0),N.dosPermissions&&16&N.dosPermissions&&(N.dir=!0),N.dir&&(_=v(_)),N.createFolders&&(I=g(_))&&b.call(this,I,!0);var j=M==="string"&&N.binary===!1&&N.base64===!1;P&&P.binary!==void 0||(N.binary=!j),(E instanceof u&&E.uncompressedSize===0||N.dir||!E||E.length===0)&&(N.base64=!1,N.binary=!0,E="",N.compression="STORE",M="string");var x=null;x=E instanceof u||E instanceof l?E:m.isNode&&m.isStream(E)?new h(_,E):r.prepareContent(_,E,N.binary,N.optimizedBinaryString,N.base64);var z=new p(_,x,N);this.files[_]=z}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),d=i("./defaults"),u=i("./compressedObject"),p=i("./zipObject"),f=i("./generate"),m=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),g=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var E=_.lastIndexOf("/");return 0<E?_.substring(0,E):""},v=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},b=function(_,E){return E=E!==void 0?E:d.createFolders,_=v(_),this.files[_]||n.call(this,_,null,{dir:!0,createFolders:E}),this.files[_]};function y(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var E,P,I;for(E in this.files)I=this.files[E],(P=E.slice(this.root.length,E.length))&&E.slice(0,this.root.length)===this.root&&_(P,I)},filter:function(_){var E=[];return this.forEach(function(P,I){_(P,I)&&E.push(I)}),E},file:function(_,E,P){if(arguments.length!==1)return _=this.root+_,n.call(this,_,E,P),this;if(y(_)){var I=_;return this.filter(function(N,j){return!j.dir&&I.test(N)})}var M=this.files[this.root+_];return M&&!M.dir?M:null},folder:function(_){if(!_)return this;if(y(_))return this.filter(function(M,N){return N.dir&&_.test(M)});var E=this.root+_,P=b.call(this,E),I=this.clone();return I.root=P.name,I},remove:function(_){_=this.root+_;var E=this.files[_];if(E||(_.slice(-1)!=="/"&&(_+="/"),E=this.files[_]),E&&!E.dir)delete this.files[_];else for(var P=this.filter(function(M,N){return N.name.slice(0,_.length)===_}),I=0;I<P.length;I++)delete this.files[P[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var E,P={};try{if((P=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");r.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var I=P.comment||this.comment||"";E=f.generateWorker(this,P,I)}catch(M){(E=new l("error")).error(M)}return new c(E,P.type||"string",P.mimeType)},generateAsync:function(_,E){return this.generateInternalStream(_).accumulate(E)},generateNodeStream:function(_,E){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(E)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,o){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),d=r.charCodeAt(2),u=r.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===d&&this.data[p+3]===u)return p-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),d=r.charCodeAt(2),u=r.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&d===p[2]&&u===p[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,o){var n=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return n.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,o){var n=i("./Uint8ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,o){var n=i("./ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,o){var n=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),d=i("./Uint8ArrayReader");a.exports=function(u){var p=n.getTypeOf(u);return n.checkSupport(p),p!=="string"||s.uint8array?p==="nodebuffer"?new c(u):s.uint8array?new d(n.transformTo("uint8array",u)):new r(n.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,o){var n=i("./GenericWorker"),s=i("../utils");function r(l){n.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,n),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,o){var n=i("./GenericWorker"),s=i("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,n),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=n.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}n.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,o){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=n},{}],29:[function(i,a,o){var n=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),d=i("../external"),u=null;if(c.nodestream)try{u=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(m,h){return new d.Promise(function(g,v){var b=[],y=m._internalType,T=m._outputType,_=m._mimeType;m.on("data",function(E,P){b.push(E),h&&h(P)}).on("error",function(E){b=[],v(E)}).on("end",function(){try{var E=(function(P,I,M){switch(P){case"blob":return n.newBlob(n.transformTo("arraybuffer",I),M);case"base64":return l.encode(I);default:return n.transformTo(P,I)}})(T,(function(P,I){var M,N=0,j=null,x=0;for(M=0;M<I.length;M++)x+=I[M].length;switch(P){case"string":return I.join("");case"array":return Array.prototype.concat.apply([],I);case"uint8array":for(j=new Uint8Array(x),M=0;M<I.length;M++)j.set(I[M],N),N+=I[M].length;return j;case"nodebuffer":return Buffer.concat(I);default:throw new Error("concat : unsupported type '"+P+"'")}})(y,b),_);g(E)}catch(P){v(P)}b=[]}).resume()})}function f(m,h,g){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=g,n.checkSupport(v),this._worker=m.pipe(new s(v)),m.lock()}catch(b){this._worker=new r("error"),this._worker.error(b)}}f.prototype={accumulate:function(m){return p(this,m)},on:function(m,h){var g=this;return m==="data"?this._worker.on(m,function(v){h.call(g,v.data,v.meta)}):this._worker.on(m,function(){n.delay(h,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},m)}},a.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),o.blob=s.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!i("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,o){for(var n=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}o.utf8encode=function(f){return s.nodebuffer?r.newBufferFrom(f,"utf-8"):(function(m){var h,g,v,b,y,T=m.length,_=0;for(b=0;b<T;b++)(64512&(g=m.charCodeAt(b)))==55296&&b+1<T&&(64512&(v=m.charCodeAt(b+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),b++),_+=g<128?1:g<2048?2:g<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),b=y=0;y<_;b++)(64512&(g=m.charCodeAt(b)))==55296&&b+1<T&&(64512&(v=m.charCodeAt(b+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),b++),g<128?h[y++]=g:(g<2048?h[y++]=192|g>>>6:(g<65536?h[y++]=224|g>>>12:(h[y++]=240|g>>>18,h[y++]=128|g>>>12&63),h[y++]=128|g>>>6&63),h[y++]=128|63&g);return h})(f)},o.utf8decode=function(f){return s.nodebuffer?n.transformTo("nodebuffer",f).toString("utf-8"):(function(m){var h,g,v,b,y=m.length,T=new Array(2*y);for(h=g=0;h<y;)if((v=m[h++])<128)T[g++]=v;else if(4<(b=c[v]))T[g++]=65533,h+=b-1;else{for(v&=b===2?31:b===3?15:7;1<b&&h<y;)v=v<<6|63&m[h++],b--;1<b?T[g++]=65533:v<65536?T[g++]=v:(v-=65536,T[g++]=55296|v>>10&1023,T[g++]=56320|1023&v)}return T.length!==g&&(T.subarray?T=T.subarray(0,g):T.length=g),n.applyFromCharCode(T)})(f=n.transformTo(s.uint8array?"uint8array":"array",f))},n.inherits(u,l),u.prototype.processChunk=function(f){var m=n.transformTo(s.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=m;(m=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),m.set(h,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var g=(function(b,y){var T;for((y=y||b.length)>b.length&&(y=b.length),T=y-1;0<=T&&(192&b[T])==128;)T--;return T<0||T===0?y:T+c[b[T]]>y?T:y})(m),v=m;g!==m.length&&(s.uint8array?(v=m.subarray(0,g),this.leftOver=m.subarray(g,m.length)):(v=m.slice(0,g),this.leftOver=m.slice(g,m.length))),this.push({data:o.utf8decode(v),meta:f.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=u,n.inherits(p,l),p.prototype.processChunk=function(f){this.push({data:o.utf8encode(f.data),meta:f.meta})},o.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,o){var n=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(h){return h}function d(h,g){for(var v=0;v<h.length;++v)g[v]=255&h.charCodeAt(v);return g}i("setimmediate"),o.newBlob=function(h,g){o.checkSupport("blob");try{return new Blob([h],{type:g})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(h,g,v){var b=[],y=0,T=h.length;if(T<=v)return String.fromCharCode.apply(null,h);for(;y<T;)g==="array"||g==="nodebuffer"?b.push(String.fromCharCode.apply(null,h.slice(y,Math.min(y+v,T)))):b.push(String.fromCharCode.apply(null,h.subarray(y,Math.min(y+v,T)))),y+=v;return b.join("")},stringifyByChar:function(h){for(var g="",v=0;v<h.length;v++)g+=String.fromCharCode(h[v]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function p(h){var g=65536,v=o.getTypeOf(h),b=!0;if(v==="uint8array"?b=u.applyCanBeUsed.uint8array:v==="nodebuffer"&&(b=u.applyCanBeUsed.nodebuffer),b)for(;1<g;)try{return u.stringifyByChunk(h,v,g)}catch{g=Math.floor(g/2)}return u.stringifyByChar(h)}function f(h,g){for(var v=0;v<h.length;v++)g[v]=h[v];return g}o.applyFromCharCode=p;var m={};m.string={string:c,array:function(h){return d(h,new Array(h.length))},arraybuffer:function(h){return m.string.uint8array(h).buffer},uint8array:function(h){return d(h,new Uint8Array(h.length))},nodebuffer:function(h){return d(h,r.allocBuffer(h.length))}},m.array={string:p,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(h)}},m.arraybuffer={string:function(h){return p(new Uint8Array(h))},array:function(h){return f(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(new Uint8Array(h))}},m.uint8array={string:p,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return r.newBufferFrom(h)}},m.nodebuffer={string:p,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return m.nodebuffer.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:c},o.transformTo=function(h,g){if(g=g||"",!h)return g;o.checkSupport(h);var v=o.getTypeOf(g);return m[v][h](g)},o.resolve=function(h){for(var g=h.split("/"),v=[],b=0;b<g.length;b++){var y=g[b];y==="."||y===""&&b!==0&&b!==g.length-1||(y===".."?v.pop():v.push(y))}return v.join("/")},o.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":n.nodebuffer&&r.isBuffer(h)?"nodebuffer":n.uint8array&&h instanceof Uint8Array?"uint8array":n.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(h){if(!n[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(h){var g,v,b="";for(v=0;v<(h||"").length;v++)b+="\\x"+((g=h.charCodeAt(v))<16?"0":"")+g.toString(16).toUpperCase();return b},o.delay=function(h,g,v){setImmediate(function(){h.apply(v||null,g||[])})},o.inherits=function(h,g){function v(){}v.prototype=g.prototype,h.prototype=new v},o.extend=function(){var h,g,v={};for(h=0;h<arguments.length;h++)for(g in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],g)&&v[g]===void 0&&(v[g]=arguments[h][g]);return v},o.prepareContent=function(h,g,v,b,y){return l.Promise.resolve(g).then(function(T){return n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,E){var P=new FileReader;P.onload=function(I){_(I.target.result)},P.onerror=function(I){E(I.target.error)},P.readAsArrayBuffer(T)}):T}).then(function(T){var _=o.getTypeOf(T);return _?(_==="arraybuffer"?T=o.transformTo("uint8array",T):_==="string"&&(y?T=s.decode(T):v&&b!==!0&&(T=(function(E){return d(E,n.uint8array?new Uint8Array(E.length):new Array(E.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(p)+", expected "+s.pretty(u)+")")}},isSignature:function(u,p){var f=this.reader.index;this.reader.setIndex(u);var m=this.reader.readString(4)===p;return this.reader.setIndex(f),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",f=s.transformTo(p,u);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,p,f,m=this.zip64EndOfCentralSize-44;0<m;)u=this.reader.readInt(2),p=this.reader.readInt(4),f=this.reader.readData(p),this.zip64ExtensibleData[u]={id:u,length:p,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,p;for(u=0;u<this.files.length;u++)p=this.files[u],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var p=u;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var m=p-f;if(0<m)this.isSignature(p,r.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(u){this.reader=n(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),d=i("./compressions"),u=i("./support");function p(f,m){this.options=f,this.loadOptions=m}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var m,h;if(f.skip(22),this.fileNameLength=f.readInt(2),h=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(g){for(var v in d)if(Object.prototype.hasOwnProperty.call(d,v)&&d[v].magic===g)return d[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,m,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var m=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(m),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var m,h,g,v=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<v;)m=f.readInt(2),h=f.readInt(2),g=f.readData(h),this.extraFields[m]={id:m,length:h,value:g};f.setIndex(v)},handleUTF8:function(){var f=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var h=s.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var v=s.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var m=n(f.value);return m.readInt(1)!==1||l(this.fileName)!==m.readInt(4)?null:c.utf8decode(m.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var m=n(f.value);return m.readInt(1)!==1||l(this.fileComment)!==m.readInt(4)?null:c.utf8decode(m.readData(f.length-5))}return null}},a.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,o){function n(m,h,g){this.name=m,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=h,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),d=i("./stream/GenericWorker");n.prototype={internalStream:function(m){var h=null,g="string";try{if(!m)throw new Error("No output type specified.");var v=(g=m.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),h=this._decompressWorker();var b=!this._dataBinary;b&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!b&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(y){(h=new d("error")).error(y)}return new s(h,g,"")},async:function(m,h){return this.internalStream(m).accumulate(h)},nodeStream:function(m,h){return this.internalStream(m||"nodebuffer").toNodejsStream(h)},_compressWorker:function(m,h){if(this._data instanceof c&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,m,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new r(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=p;a.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,o){(function(n){var s,r,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var c=0,d=new l(m),u=n.document.createTextNode("");d.observe(u,{characterData:!0}),s=function(){u.data=c=++c%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var h=n.document.createElement("script");h.onreadystatechange=function(){m(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},n.document.documentElement.appendChild(h)}:function(){setTimeout(m,0)};else{var p=new n.MessageChannel;p.port1.onmessage=m,s=function(){p.port2.postMessage(0)}}var f=[];function m(){var h,g;r=!0;for(var v=f.length;v;){for(g=f,f=[],h=-1;++h<v;)g[h]();v=f.length}r=!1}a.exports=function(h){f.push(h)!==1||r||s()}}).call(this,typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,o){var n=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function u(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,v!==s&&h(this,v)}function p(v,b,y){this.promise=v,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function f(v,b,y){n(function(){var T;try{T=b(y)}catch(_){return r.reject(v,_)}T===v?r.reject(v,new TypeError("Cannot resolve promise with itself")):r.resolve(v,T)})}function m(v){var b=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof b=="function")return function(){b.apply(v,arguments)}}function h(v,b){var y=!1;function T(P){y||(y=!0,r.reject(v,P))}function _(P){y||(y=!0,r.resolve(v,P))}var E=g(function(){b(_,T)});E.status==="error"&&T(E.value)}function g(v,b){var y={};try{y.value=v(b),y.status="success"}catch(T){y.status="error",y.value=T}return y}(a.exports=u).prototype.finally=function(v){if(typeof v!="function")return this;var b=this.constructor;return this.then(function(y){return b.resolve(v()).then(function(){return y})},function(y){return b.resolve(v()).then(function(){throw y})})},u.prototype.catch=function(v){return this.then(null,v)},u.prototype.then=function(v,b){if(typeof v!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var y=new this.constructor(s);return this.state!==d?f(y,this.state===c?v:b,this.outcome):this.queue.push(new p(y,v,b)),y},p.prototype.callFulfilled=function(v){r.resolve(this.promise,v)},p.prototype.otherCallFulfilled=function(v){f(this.promise,this.onFulfilled,v)},p.prototype.callRejected=function(v){r.reject(this.promise,v)},p.prototype.otherCallRejected=function(v){f(this.promise,this.onRejected,v)},r.resolve=function(v,b){var y=g(m,b);if(y.status==="error")return r.reject(v,y.value);var T=y.value;if(T)h(v,T);else{v.state=c,v.outcome=b;for(var _=-1,E=v.queue.length;++_<E;)v.queue[_].callFulfilled(b)}return v},r.reject=function(v,b){v.state=l,v.outcome=b;for(var y=-1,T=v.queue.length;++y<T;)v.queue[y].callRejected(b);return v},u.resolve=function(v){return v instanceof this?v:r.resolve(new this(s),v)},u.reject=function(v){var b=new this(s);return r.reject(b,v)},u.all=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=v.length,T=!1;if(!y)return this.resolve([]);for(var _=new Array(y),E=0,P=-1,I=new this(s);++P<y;)M(v[P],P);return I;function M(N,j){b.resolve(N).then(function(x){_[j]=x,++E!==y||T||(T=!0,r.resolve(I,_))},function(x){T||(T=!0,r.reject(I,x))})}},u.race=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=v.length,T=!1;if(!y)return this.resolve([]);for(var _=-1,E=new this(s);++_<y;)P=v[_],b.resolve(P).then(function(I){T||(T=!0,r.resolve(E,I))},function(I){T||(T=!0,r.reject(E,I))});var P;return E}},{immediate:36}],38:[function(i,a,o){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,o){var n=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),d=Object.prototype.toString,u=0,p=-1,f=0,m=8;function h(v){if(!(this instanceof h))return new h(v);this.options=s.assign({level:p,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},v||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=n.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(y!==u)throw new Error(l[y]);if(b.header&&n.deflateSetHeader(this.strm,b.header),b.dictionary){var T;if(T=typeof b.dictionary=="string"?r.string2buf(b.dictionary):d.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(y=n.deflateSetDictionary(this.strm,T))!==u)throw new Error(l[y]);this._dict_set=!0}}function g(v,b){var y=new h(b);if(y.push(v,!0),y.err)throw y.msg||l[y.err];return y.result}h.prototype.push=function(v,b){var y,T,_=this.strm,E=this.options.chunkSize;if(this.ended)return!1;T=b===~~b?b:b===!0?4:0,typeof v=="string"?_.input=r.string2buf(v):d.call(v)==="[object ArrayBuffer]"?_.input=new Uint8Array(v):_.input=v,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(E),_.next_out=0,_.avail_out=E),(y=n.deflate(_,T))!==1&&y!==u)return this.onEnd(y),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&y!==1);return T===4?(y=n.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===u):T!==2||(this.onEnd(u),!(_.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},o.Deflate=h,o.deflate=g,o.deflateRaw=function(v,b){return(b=b||{}).raw=!0,g(v,b)},o.gzip=function(v,b){return(b=b||{}).gzip=!0,g(v,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,o){var n=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),d=i("./zlib/zstream"),u=i("./zlib/gzheader"),p=Object.prototype.toString;function f(h){if(!(this instanceof f))return new f(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||h&&h.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var v=n.inflateInit2(this.strm,g.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new u,n.inflateGetHeader(this.strm,this.header)}function m(h,g){var v=new f(g);if(v.push(h,!0),v.err)throw v.msg||c[v.err];return v.result}f.prototype.push=function(h,g){var v,b,y,T,_,E,P=this.strm,I=this.options.chunkSize,M=this.options.dictionary,N=!1;if(this.ended)return!1;b=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?P.input=r.binstring2buf(h):p.call(h)==="[object ArrayBuffer]"?P.input=new Uint8Array(h):P.input=h,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new s.Buf8(I),P.next_out=0,P.avail_out=I),(v=n.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&M&&(E=typeof M=="string"?r.string2buf(M):p.call(M)==="[object ArrayBuffer]"?new Uint8Array(M):M,v=n.inflateSetDictionary(this.strm,E)),v===l.Z_BUF_ERROR&&N===!0&&(v=l.Z_OK,N=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&v!==l.Z_STREAM_END&&(P.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=r.utf8border(P.output,P.next_out),T=P.next_out-y,_=r.buf2string(P.output,y),P.next_out=T,P.avail_out=I-T,T&&s.arraySet(P.output,P.output,y,T,0),this.onData(_)):this.onData(s.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(N=!0)}while((0<P.avail_in||P.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(v=n.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},f.prototype.onData=function(h){this.chunks.push(h)},f.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},o.Inflate=f,o.inflate=m,o.inflateRaw=function(h,g){return(g=g||{}).raw=!0,m(h,g)},o.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(l[u]=d[u])}}return l},o.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,d,u,p){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+u),p);else for(var f=0;f<u;f++)l[p+f]=c[d+f]},flattenChunks:function(l){var c,d,u,p,f,m;for(c=u=0,d=l.length;c<d;c++)u+=l[c].length;for(m=new Uint8Array(u),c=p=0,d=l.length;c<d;c++)f=l[c],m.set(f,p),p+=f.length;return m}},r={arraySet:function(l,c,d,u,p){for(var f=0;f<u;f++)l[p+f]=c[d+f]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,s)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,r))},o.setTyped(n)},{}],42:[function(i,a,o){var n=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new n.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(u,p){if(p<65537&&(u.subarray&&r||!u.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(u,p));for(var f="",m=0;m<p;m++)f+=String.fromCharCode(u[m]);return f}l[254]=l[254]=1,o.string2buf=function(u){var p,f,m,h,g,v=u.length,b=0;for(h=0;h<v;h++)(64512&(f=u.charCodeAt(h)))==55296&&h+1<v&&(64512&(m=u.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(m-56320),h++),b+=f<128?1:f<2048?2:f<65536?3:4;for(p=new n.Buf8(b),h=g=0;g<b;h++)(64512&(f=u.charCodeAt(h)))==55296&&h+1<v&&(64512&(m=u.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(m-56320),h++),f<128?p[g++]=f:(f<2048?p[g++]=192|f>>>6:(f<65536?p[g++]=224|f>>>12:(p[g++]=240|f>>>18,p[g++]=128|f>>>12&63),p[g++]=128|f>>>6&63),p[g++]=128|63&f);return p},o.buf2binstring=function(u){return d(u,u.length)},o.binstring2buf=function(u){for(var p=new n.Buf8(u.length),f=0,m=p.length;f<m;f++)p[f]=u.charCodeAt(f);return p},o.buf2string=function(u,p){var f,m,h,g,v=p||u.length,b=new Array(2*v);for(f=m=0;f<v;)if((h=u[f++])<128)b[m++]=h;else if(4<(g=l[h]))b[m++]=65533,f+=g-1;else{for(h&=g===2?31:g===3?15:7;1<g&&f<v;)h=h<<6|63&u[f++],g--;1<g?b[m++]=65533:h<65536?b[m++]=h:(h-=65536,b[m++]=55296|h>>10&1023,b[m++]=56320|1023&h)}return d(b,m)},o.utf8border=function(u,p){var f;for((p=p||u.length)>u.length&&(p=u.length),f=p-1;0<=f&&(192&u[f])==128;)f--;return f<0||f===0?p:f+l[u[f]]>p?f:p}},{"./common":41}],43:[function(i,a,o){a.exports=function(n,s,r,l){for(var c=65535&n|0,d=n>>>16&65535|0,u=0;r!==0;){for(r-=u=2e3<r?2e3:r;d=d+(c=c+s[l++]|0)|0,--u;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(i,a,o){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,o){var n=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var d=n,u=c+l;s^=-1;for(var p=c;p<u;p++)s=s>>>8^d[255&(s^r[p])];return-1^s}},{}],46:[function(i,a,o){var n,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),d=i("./messages"),u=0,p=4,f=0,m=-2,h=-1,g=4,v=2,b=8,y=9,T=286,_=30,E=19,P=2*T+1,I=15,M=3,N=258,j=N+M+1,x=42,z=113,k=1,D=2,Z=3,B=4;function W(w,V){return w.msg=d[V],V}function L(w){return(w<<1)-(4<w?9:0)}function J(w){for(var V=w.length;0<=--V;)w[V]=0}function O(w){var V=w.state,q=V.pending;q>w.avail_out&&(q=w.avail_out),q!==0&&(s.arraySet(w.output,V.pending_buf,V.pending_out,q,w.next_out),w.next_out+=q,V.pending_out+=q,w.total_out+=q,w.avail_out-=q,V.pending-=q,V.pending===0&&(V.pending_out=0))}function F(w,V){r._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,V),w.block_start=w.strstart,O(w.strm)}function ae(w,V){w.pending_buf[w.pending++]=V}function ie(w,V){w.pending_buf[w.pending++]=V>>>8&255,w.pending_buf[w.pending++]=255&V}function Q(w,V){var q,C,S=w.max_chain_length,R=w.strstart,G=w.prev_length,K=w.nice_match,H=w.strstart>w.w_size-j?w.strstart-(w.w_size-j):0,Y=w.window,oe=w.w_mask,te=w.prev,le=w.strstart+N,ke=Y[R+G-1],pe=Y[R+G];w.prev_length>=w.good_match&&(S>>=2),K>w.lookahead&&(K=w.lookahead);do if(Y[(q=V)+G]===pe&&Y[q+G-1]===ke&&Y[q]===Y[R]&&Y[++q]===Y[R+1]){R+=2,q++;do;while(Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&Y[++R]===Y[++q]&&R<le);if(C=N-(le-R),R=le-N,G<C){if(w.match_start=V,K<=(G=C))break;ke=Y[R+G-1],pe=Y[R+G]}}while((V=te[V&oe])>H&&--S!=0);return G<=w.lookahead?G:w.lookahead}function ue(w){var V,q,C,S,R,G,K,H,Y,oe,te=w.w_size;do{if(S=w.window_size-w.lookahead-w.strstart,w.strstart>=te+(te-j)){for(s.arraySet(w.window,w.window,te,te,0),w.match_start-=te,w.strstart-=te,w.block_start-=te,V=q=w.hash_size;C=w.head[--V],w.head[V]=te<=C?C-te:0,--q;);for(V=q=te;C=w.prev[--V],w.prev[V]=te<=C?C-te:0,--q;);S+=te}if(w.strm.avail_in===0)break;if(G=w.strm,K=w.window,H=w.strstart+w.lookahead,Y=S,oe=void 0,oe=G.avail_in,Y<oe&&(oe=Y),q=oe===0?0:(G.avail_in-=oe,s.arraySet(K,G.input,G.next_in,oe,H),G.state.wrap===1?G.adler=l(G.adler,K,oe,H):G.state.wrap===2&&(G.adler=c(G.adler,K,oe,H)),G.next_in+=oe,G.total_in+=oe,oe),w.lookahead+=q,w.lookahead+w.insert>=M)for(R=w.strstart-w.insert,w.ins_h=w.window[R],w.ins_h=(w.ins_h<<w.hash_shift^w.window[R+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[R+M-1])&w.hash_mask,w.prev[R&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=R,R++,w.insert--,!(w.lookahead+w.insert<M)););}while(w.lookahead<j&&w.strm.avail_in!==0)}function ge(w,V){for(var q,C;;){if(w.lookahead<j){if(ue(w),w.lookahead<j&&V===u)return k;if(w.lookahead===0)break}if(q=0,w.lookahead>=M&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+M-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),q!==0&&w.strstart-q<=w.w_size-j&&(w.match_length=Q(w,q)),w.match_length>=M)if(C=r._tr_tally(w,w.strstart-w.match_start,w.match_length-M),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=M){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+M-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else C=r._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(C&&(F(w,!1),w.strm.avail_out===0))return k}return w.insert=w.strstart<M-1?w.strstart:M-1,V===p?(F(w,!0),w.strm.avail_out===0?Z:B):w.last_lit&&(F(w,!1),w.strm.avail_out===0)?k:D}function fe(w,V){for(var q,C,S;;){if(w.lookahead<j){if(ue(w),w.lookahead<j&&V===u)return k;if(w.lookahead===0)break}if(q=0,w.lookahead>=M&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+M-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=M-1,q!==0&&w.prev_length<w.max_lazy_match&&w.strstart-q<=w.w_size-j&&(w.match_length=Q(w,q),w.match_length<=5&&(w.strategy===1||w.match_length===M&&4096<w.strstart-w.match_start)&&(w.match_length=M-1)),w.prev_length>=M&&w.match_length<=w.prev_length){for(S=w.strstart+w.lookahead-M,C=r._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-M),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=S&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+M-1])&w.hash_mask,q=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=M-1,w.strstart++,C&&(F(w,!1),w.strm.avail_out===0))return k}else if(w.match_available){if((C=r._tr_tally(w,0,w.window[w.strstart-1]))&&F(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return k}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(C=r._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<M-1?w.strstart:M-1,V===p?(F(w,!0),w.strm.avail_out===0?Z:B):w.last_lit&&(F(w,!1),w.strm.avail_out===0)?k:D}function he(w,V,q,C,S){this.good_length=w,this.max_lazy=V,this.nice_length=q,this.max_chain=C,this.func=S}function _e(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*P),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*E+1)),J(this.dyn_ltree),J(this.dyn_dtree),J(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(I+1),this.heap=new s.Buf16(2*T+1),J(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),J(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function we(w){var V;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=v,(V=w.state).pending=0,V.pending_out=0,V.wrap<0&&(V.wrap=-V.wrap),V.status=V.wrap?x:z,w.adler=V.wrap===2?0:1,V.last_flush=u,r._tr_init(V),f):W(w,m)}function He(w){var V=we(w);return V===f&&(function(q){q.window_size=2*q.w_size,J(q.head),q.max_lazy_match=n[q.level].max_lazy,q.good_match=n[q.level].good_length,q.nice_match=n[q.level].nice_length,q.max_chain_length=n[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=M-1,q.match_available=0,q.ins_h=0})(w.state),V}function Re(w,V,q,C,S,R){if(!w)return m;var G=1;if(V===h&&(V=6),C<0?(G=0,C=-C):15<C&&(G=2,C-=16),S<1||y<S||q!==b||C<8||15<C||V<0||9<V||R<0||g<R)return W(w,m);C===8&&(C=9);var K=new _e;return(w.state=K).strm=w,K.wrap=G,K.gzhead=null,K.w_bits=C,K.w_size=1<<K.w_bits,K.w_mask=K.w_size-1,K.hash_bits=S+7,K.hash_size=1<<K.hash_bits,K.hash_mask=K.hash_size-1,K.hash_shift=~~((K.hash_bits+M-1)/M),K.window=new s.Buf8(2*K.w_size),K.head=new s.Buf16(K.hash_size),K.prev=new s.Buf16(K.w_size),K.lit_bufsize=1<<S+6,K.pending_buf_size=4*K.lit_bufsize,K.pending_buf=new s.Buf8(K.pending_buf_size),K.d_buf=1*K.lit_bufsize,K.l_buf=3*K.lit_bufsize,K.level=V,K.strategy=R,K.method=q,He(w)}n=[new he(0,0,0,0,function(w,V){var q=65535;for(q>w.pending_buf_size-5&&(q=w.pending_buf_size-5);;){if(w.lookahead<=1){if(ue(w),w.lookahead===0&&V===u)return k;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var C=w.block_start+q;if((w.strstart===0||w.strstart>=C)&&(w.lookahead=w.strstart-C,w.strstart=C,F(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-j&&(F(w,!1),w.strm.avail_out===0))return k}return w.insert=0,V===p?(F(w,!0),w.strm.avail_out===0?Z:B):(w.strstart>w.block_start&&(F(w,!1),w.strm.avail_out),k)}),new he(4,4,8,4,ge),new he(4,5,16,8,ge),new he(4,6,32,32,ge),new he(4,4,16,16,fe),new he(8,16,32,32,fe),new he(8,16,128,128,fe),new he(8,32,128,256,fe),new he(32,128,258,1024,fe),new he(32,258,258,4096,fe)],o.deflateInit=function(w,V){return Re(w,V,b,15,8,0)},o.deflateInit2=Re,o.deflateReset=He,o.deflateResetKeep=we,o.deflateSetHeader=function(w,V){return w&&w.state?w.state.wrap!==2?m:(w.state.gzhead=V,f):m},o.deflate=function(w,V){var q,C,S,R;if(!w||!w.state||5<V||V<0)return w?W(w,m):m;if(C=w.state,!w.output||!w.input&&w.avail_in!==0||C.status===666&&V!==p)return W(w,w.avail_out===0?-5:m);if(C.strm=w,q=C.last_flush,C.last_flush=V,C.status===x)if(C.wrap===2)w.adler=0,ae(C,31),ae(C,139),ae(C,8),C.gzhead?(ae(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),ae(C,255&C.gzhead.time),ae(C,C.gzhead.time>>8&255),ae(C,C.gzhead.time>>16&255),ae(C,C.gzhead.time>>24&255),ae(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),ae(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(ae(C,255&C.gzhead.extra.length),ae(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(w.adler=c(w.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(ae(C,0),ae(C,0),ae(C,0),ae(C,0),ae(C,0),ae(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),ae(C,3),C.status=z);else{var G=b+(C.w_bits-8<<4)<<8;G|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(G|=32),G+=31-G%31,C.status=z,ie(C,G),C.strstart!==0&&(ie(C,w.adler>>>16),ie(C,65535&w.adler)),w.adler=1}if(C.status===69)if(C.gzhead.extra){for(S=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),O(w),S=C.pending,C.pending!==C.pending_buf_size));)ae(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),O(w),S=C.pending,C.pending===C.pending_buf_size)){R=1;break}R=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,ae(C,R)}while(R!==0);C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),R===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),O(w),S=C.pending,C.pending===C.pending_buf_size)){R=1;break}R=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,ae(C,R)}while(R!==0);C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),R===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&O(w),C.pending+2<=C.pending_buf_size&&(ae(C,255&w.adler),ae(C,w.adler>>8&255),w.adler=0,C.status=z)):C.status=z),C.pending!==0){if(O(w),w.avail_out===0)return C.last_flush=-1,f}else if(w.avail_in===0&&L(V)<=L(q)&&V!==p)return W(w,-5);if(C.status===666&&w.avail_in!==0)return W(w,-5);if(w.avail_in!==0||C.lookahead!==0||V!==u&&C.status!==666){var K=C.strategy===2?(function(H,Y){for(var oe;;){if(H.lookahead===0&&(ue(H),H.lookahead===0)){if(Y===u)return k;break}if(H.match_length=0,oe=r._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,oe&&(F(H,!1),H.strm.avail_out===0))return k}return H.insert=0,Y===p?(F(H,!0),H.strm.avail_out===0?Z:B):H.last_lit&&(F(H,!1),H.strm.avail_out===0)?k:D})(C,V):C.strategy===3?(function(H,Y){for(var oe,te,le,ke,pe=H.window;;){if(H.lookahead<=N){if(ue(H),H.lookahead<=N&&Y===u)return k;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=M&&0<H.strstart&&(te=pe[le=H.strstart-1])===pe[++le]&&te===pe[++le]&&te===pe[++le]){ke=H.strstart+N;do;while(te===pe[++le]&&te===pe[++le]&&te===pe[++le]&&te===pe[++le]&&te===pe[++le]&&te===pe[++le]&&te===pe[++le]&&te===pe[++le]&&le<ke);H.match_length=N-(ke-le),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=M?(oe=r._tr_tally(H,1,H.match_length-M),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(oe=r._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),oe&&(F(H,!1),H.strm.avail_out===0))return k}return H.insert=0,Y===p?(F(H,!0),H.strm.avail_out===0?Z:B):H.last_lit&&(F(H,!1),H.strm.avail_out===0)?k:D})(C,V):n[C.level].func(C,V);if(K!==Z&&K!==B||(C.status=666),K===k||K===Z)return w.avail_out===0&&(C.last_flush=-1),f;if(K===D&&(V===1?r._tr_align(C):V!==5&&(r._tr_stored_block(C,0,0,!1),V===3&&(J(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),O(w),w.avail_out===0))return C.last_flush=-1,f}return V!==p?f:C.wrap<=0?1:(C.wrap===2?(ae(C,255&w.adler),ae(C,w.adler>>8&255),ae(C,w.adler>>16&255),ae(C,w.adler>>24&255),ae(C,255&w.total_in),ae(C,w.total_in>>8&255),ae(C,w.total_in>>16&255),ae(C,w.total_in>>24&255)):(ie(C,w.adler>>>16),ie(C,65535&w.adler)),O(w),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?f:1)},o.deflateEnd=function(w){var V;return w&&w.state?(V=w.state.status)!==x&&V!==69&&V!==73&&V!==91&&V!==103&&V!==z&&V!==666?W(w,m):(w.state=null,V===z?W(w,-3):f):m},o.deflateSetDictionary=function(w,V){var q,C,S,R,G,K,H,Y,oe=V.length;if(!w||!w.state||(R=(q=w.state).wrap)===2||R===1&&q.status!==x||q.lookahead)return m;for(R===1&&(w.adler=l(w.adler,V,oe,0)),q.wrap=0,oe>=q.w_size&&(R===0&&(J(q.head),q.strstart=0,q.block_start=0,q.insert=0),Y=new s.Buf8(q.w_size),s.arraySet(Y,V,oe-q.w_size,q.w_size,0),V=Y,oe=q.w_size),G=w.avail_in,K=w.next_in,H=w.input,w.avail_in=oe,w.next_in=0,w.input=V,ue(q);q.lookahead>=M;){for(C=q.strstart,S=q.lookahead-(M-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[C+M-1])&q.hash_mask,q.prev[C&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=C,C++,--S;);q.strstart=C,q.lookahead=M-1,ue(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=M-1,q.match_available=0,w.next_in=K,w.input=H,w.avail_in=G,q.wrap=R,f},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,o){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,o){a.exports=function(n,s){var r,l,c,d,u,p,f,m,h,g,v,b,y,T,_,E,P,I,M,N,j,x,z,k,D;r=n.state,l=n.next_in,k=n.input,c=l+(n.avail_in-5),d=n.next_out,D=n.output,u=d-(s-n.avail_out),p=d+(n.avail_out-257),f=r.dmax,m=r.wsize,h=r.whave,g=r.wnext,v=r.window,b=r.hold,y=r.bits,T=r.lencode,_=r.distcode,E=(1<<r.lenbits)-1,P=(1<<r.distbits)-1;e:do{y<15&&(b+=k[l++]<<y,y+=8,b+=k[l++]<<y,y+=8),I=T[b&E];t:for(;;){if(b>>>=M=I>>>24,y-=M,(M=I>>>16&255)===0)D[d++]=65535&I;else{if(!(16&M)){if((64&M)==0){I=T[(65535&I)+(b&(1<<M)-1)];continue t}if(32&M){r.mode=12;break e}n.msg="invalid literal/length code",r.mode=30;break e}N=65535&I,(M&=15)&&(y<M&&(b+=k[l++]<<y,y+=8),N+=b&(1<<M)-1,b>>>=M,y-=M),y<15&&(b+=k[l++]<<y,y+=8,b+=k[l++]<<y,y+=8),I=_[b&P];i:for(;;){if(b>>>=M=I>>>24,y-=M,!(16&(M=I>>>16&255))){if((64&M)==0){I=_[(65535&I)+(b&(1<<M)-1)];continue i}n.msg="invalid distance code",r.mode=30;break e}if(j=65535&I,y<(M&=15)&&(b+=k[l++]<<y,(y+=8)<M&&(b+=k[l++]<<y,y+=8)),f<(j+=b&(1<<M)-1)){n.msg="invalid distance too far back",r.mode=30;break e}if(b>>>=M,y-=M,(M=d-u)<j){if(h<(M=j-M)&&r.sane){n.msg="invalid distance too far back",r.mode=30;break e}if(z=v,(x=0)===g){if(x+=m-M,M<N){for(N-=M;D[d++]=v[x++],--M;);x=d-j,z=D}}else if(g<M){if(x+=m+g-M,(M-=g)<N){for(N-=M;D[d++]=v[x++],--M;);if(x=0,g<N){for(N-=M=g;D[d++]=v[x++],--M;);x=d-j,z=D}}}else if(x+=g-M,M<N){for(N-=M;D[d++]=v[x++],--M;);x=d-j,z=D}for(;2<N;)D[d++]=z[x++],D[d++]=z[x++],D[d++]=z[x++],N-=3;N&&(D[d++]=z[x++],1<N&&(D[d++]=z[x++]))}else{for(x=d-j;D[d++]=D[x++],D[d++]=D[x++],D[d++]=D[x++],2<(N-=3););N&&(D[d++]=D[x++],1<N&&(D[d++]=D[x++]))}break}}break}}while(l<c&&d<p);l-=N=y>>3,b&=(1<<(y-=N<<3))-1,n.next_in=l,n.next_out=d,n.avail_in=l<c?c-l+5:5-(l-c),n.avail_out=d<p?p-d+257:257-(d-p),r.hold=b,r.bits=y}},{}],49:[function(i,a,o){var n=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),d=1,u=2,p=0,f=-2,m=1,h=852,g=592;function v(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(x){var z;return x&&x.state?(z=x.state,x.total_in=x.total_out=z.total=0,x.msg="",z.wrap&&(x.adler=1&z.wrap),z.mode=m,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new n.Buf32(h),z.distcode=z.distdyn=new n.Buf32(g),z.sane=1,z.back=-1,p):f}function T(x){var z;return x&&x.state?((z=x.state).wsize=0,z.whave=0,z.wnext=0,y(x)):f}function _(x,z){var k,D;return x&&x.state?(D=x.state,z<0?(k=0,z=-z):(k=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?f:(D.window!==null&&D.wbits!==z&&(D.window=null),D.wrap=k,D.wbits=z,T(x))):f}function E(x,z){var k,D;return x?(D=new b,(x.state=D).window=null,(k=_(x,z))!==p&&(x.state=null),k):f}var P,I,M=!0;function N(x){if(M){var z;for(P=new n.Buf32(512),I=new n.Buf32(32),z=0;z<144;)x.lens[z++]=8;for(;z<256;)x.lens[z++]=9;for(;z<280;)x.lens[z++]=7;for(;z<288;)x.lens[z++]=8;for(c(d,x.lens,0,288,P,0,x.work,{bits:9}),z=0;z<32;)x.lens[z++]=5;c(u,x.lens,0,32,I,0,x.work,{bits:5}),M=!1}x.lencode=P,x.lenbits=9,x.distcode=I,x.distbits=5}function j(x,z,k,D){var Z,B=x.state;return B.window===null&&(B.wsize=1<<B.wbits,B.wnext=0,B.whave=0,B.window=new n.Buf8(B.wsize)),D>=B.wsize?(n.arraySet(B.window,z,k-B.wsize,B.wsize,0),B.wnext=0,B.whave=B.wsize):(D<(Z=B.wsize-B.wnext)&&(Z=D),n.arraySet(B.window,z,k-D,Z,B.wnext),(D-=Z)?(n.arraySet(B.window,z,k-D,D,0),B.wnext=D,B.whave=B.wsize):(B.wnext+=Z,B.wnext===B.wsize&&(B.wnext=0),B.whave<B.wsize&&(B.whave+=Z))),0}o.inflateReset=T,o.inflateReset2=_,o.inflateResetKeep=y,o.inflateInit=function(x){return E(x,15)},o.inflateInit2=E,o.inflate=function(x,z){var k,D,Z,B,W,L,J,O,F,ae,ie,Q,ue,ge,fe,he,_e,we,He,Re,w,V,q,C,S=0,R=new n.Buf8(4),G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return f;(k=x.state).mode===12&&(k.mode=13),W=x.next_out,Z=x.output,J=x.avail_out,B=x.next_in,D=x.input,L=x.avail_in,O=k.hold,F=k.bits,ae=L,ie=J,V=p;e:for(;;)switch(k.mode){case m:if(k.wrap===0){k.mode=13;break}for(;F<16;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(2&k.wrap&&O===35615){R[k.check=0]=255&O,R[1]=O>>>8&255,k.check=r(k.check,R,2,0),F=O=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&O)<<8)+(O>>8))%31){x.msg="incorrect header check",k.mode=30;break}if((15&O)!=8){x.msg="unknown compression method",k.mode=30;break}if(F-=4,w=8+(15&(O>>>=4)),k.wbits===0)k.wbits=w;else if(w>k.wbits){x.msg="invalid window size",k.mode=30;break}k.dmax=1<<w,x.adler=k.check=1,k.mode=512&O?10:12,F=O=0;break;case 2:for(;F<16;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(k.flags=O,(255&k.flags)!=8){x.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){x.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=O>>8&1),512&k.flags&&(R[0]=255&O,R[1]=O>>>8&255,k.check=r(k.check,R,2,0)),F=O=0,k.mode=3;case 3:for(;F<32;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}k.head&&(k.head.time=O),512&k.flags&&(R[0]=255&O,R[1]=O>>>8&255,R[2]=O>>>16&255,R[3]=O>>>24&255,k.check=r(k.check,R,4,0)),F=O=0,k.mode=4;case 4:for(;F<16;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}k.head&&(k.head.xflags=255&O,k.head.os=O>>8),512&k.flags&&(R[0]=255&O,R[1]=O>>>8&255,k.check=r(k.check,R,2,0)),F=O=0,k.mode=5;case 5:if(1024&k.flags){for(;F<16;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}k.length=O,k.head&&(k.head.extra_len=O),512&k.flags&&(R[0]=255&O,R[1]=O>>>8&255,k.check=r(k.check,R,2,0)),F=O=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(L<(Q=k.length)&&(Q=L),Q&&(k.head&&(w=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),n.arraySet(k.head.extra,D,B,Q,w)),512&k.flags&&(k.check=r(k.check,D,Q,B)),L-=Q,B+=Q,k.length-=Q),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(L===0)break e;for(Q=0;w=D[B+Q++],k.head&&w&&k.length<65536&&(k.head.name+=String.fromCharCode(w)),w&&Q<L;);if(512&k.flags&&(k.check=r(k.check,D,Q,B)),L-=Q,B+=Q,w)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(L===0)break e;for(Q=0;w=D[B+Q++],k.head&&w&&k.length<65536&&(k.head.comment+=String.fromCharCode(w)),w&&Q<L;);if(512&k.flags&&(k.check=r(k.check,D,Q,B)),L-=Q,B+=Q,w)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;F<16;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(O!==(65535&k.check)){x.msg="header crc mismatch",k.mode=30;break}F=O=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),x.adler=k.check=0,k.mode=12;break;case 10:for(;F<32;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}x.adler=k.check=v(O),F=O=0,k.mode=11;case 11:if(k.havedict===0)return x.next_out=W,x.avail_out=J,x.next_in=B,x.avail_in=L,k.hold=O,k.bits=F,2;x.adler=k.check=1,k.mode=12;case 12:if(z===5||z===6)break e;case 13:if(k.last){O>>>=7&F,F-=7&F,k.mode=27;break}for(;F<3;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}switch(k.last=1&O,F-=1,3&(O>>>=1)){case 0:k.mode=14;break;case 1:if(N(k),k.mode=20,z!==6)break;O>>>=2,F-=2;break e;case 2:k.mode=17;break;case 3:x.msg="invalid block type",k.mode=30}O>>>=2,F-=2;break;case 14:for(O>>>=7&F,F-=7&F;F<32;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if((65535&O)!=(O>>>16^65535)){x.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&O,F=O=0,k.mode=15,z===6)break e;case 15:k.mode=16;case 16:if(Q=k.length){if(L<Q&&(Q=L),J<Q&&(Q=J),Q===0)break e;n.arraySet(Z,D,B,Q,W),L-=Q,B+=Q,J-=Q,W+=Q,k.length-=Q;break}k.mode=12;break;case 17:for(;F<14;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(k.nlen=257+(31&O),O>>>=5,F-=5,k.ndist=1+(31&O),O>>>=5,F-=5,k.ncode=4+(15&O),O>>>=4,F-=4,286<k.nlen||30<k.ndist){x.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;F<3;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}k.lens[G[k.have++]]=7&O,O>>>=3,F-=3}for(;k.have<19;)k.lens[G[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,q={bits:k.lenbits},V=c(0,k.lens,0,19,k.lencode,0,k.work,q),k.lenbits=q.bits,V){x.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;he=(S=k.lencode[O&(1<<k.lenbits)-1])>>>16&255,_e=65535&S,!((fe=S>>>24)<=F);){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(_e<16)O>>>=fe,F-=fe,k.lens[k.have++]=_e;else{if(_e===16){for(C=fe+2;F<C;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(O>>>=fe,F-=fe,k.have===0){x.msg="invalid bit length repeat",k.mode=30;break}w=k.lens[k.have-1],Q=3+(3&O),O>>>=2,F-=2}else if(_e===17){for(C=fe+3;F<C;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}F-=fe,w=0,Q=3+(7&(O>>>=fe)),O>>>=3,F-=3}else{for(C=fe+7;F<C;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}F-=fe,w=0,Q=11+(127&(O>>>=fe)),O>>>=7,F-=7}if(k.have+Q>k.nlen+k.ndist){x.msg="invalid bit length repeat",k.mode=30;break}for(;Q--;)k.lens[k.have++]=w}}if(k.mode===30)break;if(k.lens[256]===0){x.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,q={bits:k.lenbits},V=c(d,k.lens,0,k.nlen,k.lencode,0,k.work,q),k.lenbits=q.bits,V){x.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,q={bits:k.distbits},V=c(u,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,q),k.distbits=q.bits,V){x.msg="invalid distances set",k.mode=30;break}if(k.mode=20,z===6)break e;case 20:k.mode=21;case 21:if(6<=L&&258<=J){x.next_out=W,x.avail_out=J,x.next_in=B,x.avail_in=L,k.hold=O,k.bits=F,l(x,ie),W=x.next_out,Z=x.output,J=x.avail_out,B=x.next_in,D=x.input,L=x.avail_in,O=k.hold,F=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;he=(S=k.lencode[O&(1<<k.lenbits)-1])>>>16&255,_e=65535&S,!((fe=S>>>24)<=F);){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(he&&(240&he)==0){for(we=fe,He=he,Re=_e;he=(S=k.lencode[Re+((O&(1<<we+He)-1)>>we)])>>>16&255,_e=65535&S,!(we+(fe=S>>>24)<=F);){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}O>>>=we,F-=we,k.back+=we}if(O>>>=fe,F-=fe,k.back+=fe,k.length=_e,he===0){k.mode=26;break}if(32&he){k.back=-1,k.mode=12;break}if(64&he){x.msg="invalid literal/length code",k.mode=30;break}k.extra=15&he,k.mode=22;case 22:if(k.extra){for(C=k.extra;F<C;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}k.length+=O&(1<<k.extra)-1,O>>>=k.extra,F-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;he=(S=k.distcode[O&(1<<k.distbits)-1])>>>16&255,_e=65535&S,!((fe=S>>>24)<=F);){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if((240&he)==0){for(we=fe,He=he,Re=_e;he=(S=k.distcode[Re+((O&(1<<we+He)-1)>>we)])>>>16&255,_e=65535&S,!(we+(fe=S>>>24)<=F);){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}O>>>=we,F-=we,k.back+=we}if(O>>>=fe,F-=fe,k.back+=fe,64&he){x.msg="invalid distance code",k.mode=30;break}k.offset=_e,k.extra=15&he,k.mode=24;case 24:if(k.extra){for(C=k.extra;F<C;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}k.offset+=O&(1<<k.extra)-1,O>>>=k.extra,F-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){x.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(J===0)break e;if(Q=ie-J,k.offset>Q){if((Q=k.offset-Q)>k.whave&&k.sane){x.msg="invalid distance too far back",k.mode=30;break}ue=Q>k.wnext?(Q-=k.wnext,k.wsize-Q):k.wnext-Q,Q>k.length&&(Q=k.length),ge=k.window}else ge=Z,ue=W-k.offset,Q=k.length;for(J<Q&&(Q=J),J-=Q,k.length-=Q;Z[W++]=ge[ue++],--Q;);k.length===0&&(k.mode=21);break;case 26:if(J===0)break e;Z[W++]=k.length,J--,k.mode=21;break;case 27:if(k.wrap){for(;F<32;){if(L===0)break e;L--,O|=D[B++]<<F,F+=8}if(ie-=J,x.total_out+=ie,k.total+=ie,ie&&(x.adler=k.check=k.flags?r(k.check,Z,ie,W-ie):s(k.check,Z,ie,W-ie)),ie=J,(k.flags?O:v(O))!==k.check){x.msg="incorrect data check",k.mode=30;break}F=O=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;F<32;){if(L===0)break e;L--,O+=D[B++]<<F,F+=8}if(O!==(4294967295&k.total)){x.msg="incorrect length check",k.mode=30;break}F=O=0}k.mode=29;case 29:V=1;break e;case 30:V=-3;break e;case 31:return-4;case 32:default:return f}return x.next_out=W,x.avail_out=J,x.next_in=B,x.avail_in=L,k.hold=O,k.bits=F,(k.wsize||ie!==x.avail_out&&k.mode<30&&(k.mode<27||z!==4))&&j(x,x.output,x.next_out,ie-x.avail_out)?(k.mode=31,-4):(ae-=x.avail_in,ie-=x.avail_out,x.total_in+=ae,x.total_out+=ie,k.total+=ie,k.wrap&&ie&&(x.adler=k.check=k.flags?r(k.check,Z,ie,x.next_out-ie):s(k.check,Z,ie,x.next_out-ie)),x.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(ae==0&&ie===0||z===4)&&V===p&&(V=-5),V)},o.inflateEnd=function(x){if(!x||!x.state)return f;var z=x.state;return z.window&&(z.window=null),x.state=null,p},o.inflateGetHeader=function(x,z){var k;return x&&x.state?(2&(k=x.state).wrap)==0?f:((k.head=z).done=!1,p):f},o.inflateSetDictionary=function(x,z){var k,D=z.length;return x&&x.state?(k=x.state).wrap!==0&&k.mode!==11?f:k.mode===11&&s(1,z,D,0)!==k.check?-3:j(x,z,D,D)?(k.mode=31,-4):(k.havedict=1,p):f},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,o){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(d,u,p,f,m,h,g,v){var b,y,T,_,E,P,I,M,N,j=v.bits,x=0,z=0,k=0,D=0,Z=0,B=0,W=0,L=0,J=0,O=0,F=null,ae=0,ie=new n.Buf16(16),Q=new n.Buf16(16),ue=null,ge=0;for(x=0;x<=15;x++)ie[x]=0;for(z=0;z<f;z++)ie[u[p+z]]++;for(Z=j,D=15;1<=D&&ie[D]===0;D--);if(D<Z&&(Z=D),D===0)return m[h++]=20971520,m[h++]=20971520,v.bits=1,0;for(k=1;k<D&&ie[k]===0;k++);for(Z<k&&(Z=k),x=L=1;x<=15;x++)if(L<<=1,(L-=ie[x])<0)return-1;if(0<L&&(d===0||D!==1))return-1;for(Q[1]=0,x=1;x<15;x++)Q[x+1]=Q[x]+ie[x];for(z=0;z<f;z++)u[p+z]!==0&&(g[Q[u[p+z]]++]=z);if(P=d===0?(F=ue=g,19):d===1?(F=s,ae-=257,ue=r,ge-=257,256):(F=l,ue=c,-1),x=k,E=h,W=z=O=0,T=-1,_=(J=1<<(B=Z))-1,d===1&&852<J||d===2&&592<J)return 1;for(;;){for(I=x-W,N=g[z]<P?(M=0,g[z]):g[z]>P?(M=ue[ge+g[z]],F[ae+g[z]]):(M=96,0),b=1<<x-W,k=y=1<<B;m[E+(O>>W)+(y-=b)]=I<<24|M<<16|N|0,y!==0;);for(b=1<<x-1;O&b;)b>>=1;if(b!==0?(O&=b-1,O+=b):O=0,z++,--ie[x]==0){if(x===D)break;x=u[p+g[z]]}if(Z<x&&(O&_)!==T){for(W===0&&(W=Z),E+=k,L=1<<(B=x-W);B+W<D&&!((L-=ie[B+W])<=0);)B++,L<<=1;if(J+=1<<B,d===1&&852<J||d===2&&592<J)return 1;m[T=O&_]=Z<<24|B<<16|E-h|0}}return O!==0&&(m[E+O]=x-W<<24|64<<16|0),v.bits=Z,0}},{"../utils/common":41}],51:[function(i,a,o){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,o){var n=i("../utils/common"),s=0,r=1;function l(S){for(var R=S.length;0<=--R;)S[R]=0}var c=0,d=29,u=256,p=u+1+d,f=30,m=19,h=2*p+1,g=15,v=16,b=7,y=256,T=16,_=17,E=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],I=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],M=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],j=new Array(2*(p+2));l(j);var x=new Array(2*f);l(x);var z=new Array(512);l(z);var k=new Array(256);l(k);var D=new Array(d);l(D);var Z,B,W,L=new Array(f);function J(S,R,G,K,H){this.static_tree=S,this.extra_bits=R,this.extra_base=G,this.elems=K,this.max_length=H,this.has_stree=S&&S.length}function O(S,R){this.dyn_tree=S,this.max_code=0,this.stat_desc=R}function F(S){return S<256?z[S]:z[256+(S>>>7)]}function ae(S,R){S.pending_buf[S.pending++]=255&R,S.pending_buf[S.pending++]=R>>>8&255}function ie(S,R,G){S.bi_valid>v-G?(S.bi_buf|=R<<S.bi_valid&65535,ae(S,S.bi_buf),S.bi_buf=R>>v-S.bi_valid,S.bi_valid+=G-v):(S.bi_buf|=R<<S.bi_valid&65535,S.bi_valid+=G)}function Q(S,R,G){ie(S,G[2*R],G[2*R+1])}function ue(S,R){for(var G=0;G|=1&S,S>>>=1,G<<=1,0<--R;);return G>>>1}function ge(S,R,G){var K,H,Y=new Array(g+1),oe=0;for(K=1;K<=g;K++)Y[K]=oe=oe+G[K-1]<<1;for(H=0;H<=R;H++){var te=S[2*H+1];te!==0&&(S[2*H]=ue(Y[te]++,te))}}function fe(S){var R;for(R=0;R<p;R++)S.dyn_ltree[2*R]=0;for(R=0;R<f;R++)S.dyn_dtree[2*R]=0;for(R=0;R<m;R++)S.bl_tree[2*R]=0;S.dyn_ltree[2*y]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function he(S){8<S.bi_valid?ae(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function _e(S,R,G,K){var H=2*R,Y=2*G;return S[H]<S[Y]||S[H]===S[Y]&&K[R]<=K[G]}function we(S,R,G){for(var K=S.heap[G],H=G<<1;H<=S.heap_len&&(H<S.heap_len&&_e(R,S.heap[H+1],S.heap[H],S.depth)&&H++,!_e(R,K,S.heap[H],S.depth));)S.heap[G]=S.heap[H],G=H,H<<=1;S.heap[G]=K}function He(S,R,G){var K,H,Y,oe,te=0;if(S.last_lit!==0)for(;K=S.pending_buf[S.d_buf+2*te]<<8|S.pending_buf[S.d_buf+2*te+1],H=S.pending_buf[S.l_buf+te],te++,K===0?Q(S,H,R):(Q(S,(Y=k[H])+u+1,R),(oe=P[Y])!==0&&ie(S,H-=D[Y],oe),Q(S,Y=F(--K),G),(oe=I[Y])!==0&&ie(S,K-=L[Y],oe)),te<S.last_lit;);Q(S,y,R)}function Re(S,R){var G,K,H,Y=R.dyn_tree,oe=R.stat_desc.static_tree,te=R.stat_desc.has_stree,le=R.stat_desc.elems,ke=-1;for(S.heap_len=0,S.heap_max=h,G=0;G<le;G++)Y[2*G]!==0?(S.heap[++S.heap_len]=ke=G,S.depth[G]=0):Y[2*G+1]=0;for(;S.heap_len<2;)Y[2*(H=S.heap[++S.heap_len]=ke<2?++ke:0)]=1,S.depth[H]=0,S.opt_len--,te&&(S.static_len-=oe[2*H+1]);for(R.max_code=ke,G=S.heap_len>>1;1<=G;G--)we(S,Y,G);for(H=le;G=S.heap[1],S.heap[1]=S.heap[S.heap_len--],we(S,Y,1),K=S.heap[1],S.heap[--S.heap_max]=G,S.heap[--S.heap_max]=K,Y[2*H]=Y[2*G]+Y[2*K],S.depth[H]=(S.depth[G]>=S.depth[K]?S.depth[G]:S.depth[K])+1,Y[2*G+1]=Y[2*K+1]=H,S.heap[1]=H++,we(S,Y,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(pe,Ge){var Ji,ft,ea,Pe,Ja,pn,yt=Ge.dyn_tree,al=Ge.max_code,jg=Ge.stat_desc.static_tree,Vg=Ge.stat_desc.has_stree,Gg=Ge.stat_desc.extra_bits,ol=Ge.stat_desc.extra_base,ta=Ge.stat_desc.max_length,eo=0;for(Pe=0;Pe<=g;Pe++)pe.bl_count[Pe]=0;for(yt[2*pe.heap[pe.heap_max]+1]=0,Ji=pe.heap_max+1;Ji<h;Ji++)ta<(Pe=yt[2*yt[2*(ft=pe.heap[Ji])+1]+1]+1)&&(Pe=ta,eo++),yt[2*ft+1]=Pe,al<ft||(pe.bl_count[Pe]++,Ja=0,ol<=ft&&(Ja=Gg[ft-ol]),pn=yt[2*ft],pe.opt_len+=pn*(Pe+Ja),Vg&&(pe.static_len+=pn*(jg[2*ft+1]+Ja)));if(eo!==0){do{for(Pe=ta-1;pe.bl_count[Pe]===0;)Pe--;pe.bl_count[Pe]--,pe.bl_count[Pe+1]+=2,pe.bl_count[ta]--,eo-=2}while(0<eo);for(Pe=ta;Pe!==0;Pe--)for(ft=pe.bl_count[Pe];ft!==0;)al<(ea=pe.heap[--Ji])||(yt[2*ea+1]!==Pe&&(pe.opt_len+=(Pe-yt[2*ea+1])*yt[2*ea],yt[2*ea+1]=Pe),ft--)}})(S,R),ge(Y,ke,S.bl_count)}function w(S,R,G){var K,H,Y=-1,oe=R[1],te=0,le=7,ke=4;for(oe===0&&(le=138,ke=3),R[2*(G+1)+1]=65535,K=0;K<=G;K++)H=oe,oe=R[2*(K+1)+1],++te<le&&H===oe||(te<ke?S.bl_tree[2*H]+=te:H!==0?(H!==Y&&S.bl_tree[2*H]++,S.bl_tree[2*T]++):te<=10?S.bl_tree[2*_]++:S.bl_tree[2*E]++,Y=H,ke=(te=0)===oe?(le=138,3):H===oe?(le=6,3):(le=7,4))}function V(S,R,G){var K,H,Y=-1,oe=R[1],te=0,le=7,ke=4;for(oe===0&&(le=138,ke=3),K=0;K<=G;K++)if(H=oe,oe=R[2*(K+1)+1],!(++te<le&&H===oe)){if(te<ke)for(;Q(S,H,S.bl_tree),--te!=0;);else H!==0?(H!==Y&&(Q(S,H,S.bl_tree),te--),Q(S,T,S.bl_tree),ie(S,te-3,2)):te<=10?(Q(S,_,S.bl_tree),ie(S,te-3,3)):(Q(S,E,S.bl_tree),ie(S,te-11,7));Y=H,ke=(te=0)===oe?(le=138,3):H===oe?(le=6,3):(le=7,4)}}l(L);var q=!1;function C(S,R,G,K){ie(S,(c<<1)+(K?1:0),3),(function(H,Y,oe,te){he(H),ae(H,oe),ae(H,~oe),n.arraySet(H.pending_buf,H.window,Y,oe,H.pending),H.pending+=oe})(S,R,G)}o._tr_init=function(S){q||((function(){var R,G,K,H,Y,oe=new Array(g+1);for(H=K=0;H<d-1;H++)for(D[H]=K,R=0;R<1<<P[H];R++)k[K++]=H;for(k[K-1]=H,H=Y=0;H<16;H++)for(L[H]=Y,R=0;R<1<<I[H];R++)z[Y++]=H;for(Y>>=7;H<f;H++)for(L[H]=Y<<7,R=0;R<1<<I[H]-7;R++)z[256+Y++]=H;for(G=0;G<=g;G++)oe[G]=0;for(R=0;R<=143;)j[2*R+1]=8,R++,oe[8]++;for(;R<=255;)j[2*R+1]=9,R++,oe[9]++;for(;R<=279;)j[2*R+1]=7,R++,oe[7]++;for(;R<=287;)j[2*R+1]=8,R++,oe[8]++;for(ge(j,p+1,oe),R=0;R<f;R++)x[2*R+1]=5,x[2*R]=ue(R,5);Z=new J(j,P,u+1,p,g),B=new J(x,I,0,f,g),W=new J(new Array(0),M,0,m,b)})(),q=!0),S.l_desc=new O(S.dyn_ltree,Z),S.d_desc=new O(S.dyn_dtree,B),S.bl_desc=new O(S.bl_tree,W),S.bi_buf=0,S.bi_valid=0,fe(S)},o._tr_stored_block=C,o._tr_flush_block=function(S,R,G,K){var H,Y,oe=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(te){var le,ke=4093624447;for(le=0;le<=31;le++,ke>>>=1)if(1&ke&&te.dyn_ltree[2*le]!==0)return s;if(te.dyn_ltree[18]!==0||te.dyn_ltree[20]!==0||te.dyn_ltree[26]!==0)return r;for(le=32;le<u;le++)if(te.dyn_ltree[2*le]!==0)return r;return s})(S)),Re(S,S.l_desc),Re(S,S.d_desc),oe=(function(te){var le;for(w(te,te.dyn_ltree,te.l_desc.max_code),w(te,te.dyn_dtree,te.d_desc.max_code),Re(te,te.bl_desc),le=m-1;3<=le&&te.bl_tree[2*N[le]+1]===0;le--);return te.opt_len+=3*(le+1)+5+5+4,le})(S),H=S.opt_len+3+7>>>3,(Y=S.static_len+3+7>>>3)<=H&&(H=Y)):H=Y=G+5,G+4<=H&&R!==-1?C(S,R,G,K):S.strategy===4||Y===H?(ie(S,2+(K?1:0),3),He(S,j,x)):(ie(S,4+(K?1:0),3),(function(te,le,ke,pe){var Ge;for(ie(te,le-257,5),ie(te,ke-1,5),ie(te,pe-4,4),Ge=0;Ge<pe;Ge++)ie(te,te.bl_tree[2*N[Ge]+1],3);V(te,te.dyn_ltree,le-1),V(te,te.dyn_dtree,ke-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,oe+1),He(S,S.dyn_ltree,S.dyn_dtree)),fe(S),K&&he(S)},o._tr_tally=function(S,R,G){return S.pending_buf[S.d_buf+2*S.last_lit]=R>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&R,S.pending_buf[S.l_buf+S.last_lit]=255&G,S.last_lit++,R===0?S.dyn_ltree[2*G]++:(S.matches++,R--,S.dyn_ltree[2*(k[G]+u+1)]++,S.dyn_dtree[2*F(R)]++),S.last_lit===S.lit_bufsize-1},o._tr_align=function(S){ie(S,2,3),Q(S,y,j),(function(R){R.bi_valid===16?(ae(R,R.bi_buf),R.bi_buf=0,R.bi_valid=0):8<=R.bi_valid&&(R.pending_buf[R.pending++]=255&R.bi_buf,R.bi_buf>>=8,R.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(i,a,o){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,o){(function(n){(function(s,r){if(!s.setImmediate){var l,c,d,u,p=1,f={},m=!1,h=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){b(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(u="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",y,!1):s.attachEvent("onmessage",y),function(T){s.postMessage(u+T,"*")}):s.MessageChannel?((d=new MessageChannel).port1.onmessage=function(T){b(T.data)},function(T){d.port2.postMessage(T)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(T){var _=h.createElement("script");_.onreadystatechange=function(){b(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(b,0,T)},g.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),E=0;E<_.length;E++)_[E]=arguments[E+1];var P={callback:T,args:_};return f[p]=P,l(p),p++},g.clearImmediate=v}function v(T){delete f[T]}function b(T){if(m)setTimeout(b,0,T);else{var _=f[T];if(_){m=!0;try{(function(E){var P=E.callback,I=E.args;switch(I.length){case 0:P();break;case 1:P(I[0]);break;case 2:P(I[0],I[1]);break;case 3:P(I[0],I[1],I[2]);break;default:P.apply(r,I)}})(_)}finally{v(T),m=!1}}}}function y(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(u)===0&&b(+T.data.slice(u.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Io)),Io.exports}var kh=wh();const Th=yh(kh);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function $(t){if(!t)throw new Error("Assertion failed.")}const _h=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ke=t=>t&&t[t.length-1],Et=t=>t>=0&&t<2**32,ee=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},mt=t=>{const e=ee(t);return(e&1)===0?-(e>>1):e+1>>1},We=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),at=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),ot=new TextEncoder,Oa={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},La={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Ha={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Sh=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Na=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class vs{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(o=>{let n=!1;e=()=>{n||(o(),this.pending--,n=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const bs=(t,e,i)=>{let a=0,o=t.length-1,n=-1;for(;a<=o;){const s=a+(o-a+1)/2|0;i(t[s])<=e?(n=s,a=s+1):o=s-1}return n},ys=()=>{let t,e;return{promise:new Promise((a,o)=>{t=a,e=o}),resolve:t,reject:e}},qt=t=>{throw new Error(`Unexpected value: ${t}`)},xh=(t,e,i)=>{const a=t.getUint8(e),o=t.getUint8(e+1),n=t.getUint8(e+2);return a<<16|o<<8|n},Ao=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},Ch=(t,e,i,a)=>{i=Fe(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),Ao(t,e,i,a)},Fe=(t,e,i)=>Math.max(e,Math.min(i,t)),Eh=(t,e,i)=>t+(e-t)*i,Ph="und",ws=(t,e)=>Math.round(t/e)*e,ks=(t,e)=>Math.round(t*e)/e,Ts=(t,e)=>Math.floor(t*e)/e,Mh=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},Ih=/^[a-z]{3}$/,Ah=t=>Ih.test(t),Pt=1e6*(1+Number.EPSILON),Bh=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,o=1,n=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*n+a,d=l*s+o;if(d>e)return{num:i*n,den:s};if(a=n,o=s,n=c,s=d,r=1/(r-l),!isFinite(r))break}return{num:i*n,den:s}};class _s{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Bo=null;const Fh=()=>Bo!==null?Bo:Bo=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let Fo=null;const Ss=()=>Fo!==null?Fo:Fo=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let Ro=null;const Rh=()=>Ro!==null?Ro:Ro=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let zo=null;const zh=()=>{if(zo!==null)return zo;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?zo=Number(t[1]):null},xs=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Oh=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Lh=(t,e)=>{let i=-1,a=1/0;for(let o=0;o<t.length;o++){const n=e(t[o]);n<a&&(a=n,i=o)}return i},Cs=t=>{$(Number.isInteger(t.num)),$(Number.isInteger(t.den)),$(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const o=e%i;e=i,i=o}const a=e||1;return{num:t.num/a,den:t.den/a}},Oo=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Hh=t=>new Promise(e=>setTimeout(e,t)),Es=t=>Array.isArray(t)?t:[t];class Lo{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const o={fn:i,once:a?.once??!1};return this._listeners.get(e).add(o),()=>{this._listeners.get(e)?.delete(o)}}_emit(...e){const[i,a]=e,o=this._listeners.get(i);if(o)for(const n of o){try{n.fn(a)}catch(s){console.error(s)}n.once&&o.delete(n)}}}const Nh=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var nt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(nt||(nt={}));class Se{constructor(){}static get level(){return Se._level}static set level(e){if(e!==nt.Silent&&e!==nt.Errors&&e!==nt.Warnings&&e!==nt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");Se._level=e}static get _emitter(){return Se._emitterInstance??=new Lo}static on(e,i,a){return Se._emitter.on(e,i,a)}static _error(...e){Se._emitter._emit("error",e),Se._level>=nt.Errors&&console.error(...e)}static _warn(...e){Se._emitter._emit("warn",e),Se._level>=nt.Warnings&&console.warn(...e)}static _info(...e){Se._emitter._emit("info",e),Se._level>=nt.Info&&console.info(...e)}}Se._level=nt.Info,Se._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ps{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Uh{constructor(e,i,a,o){if(this.data=e,this.mimeType=i,this.name=a,this.description=o,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(o!==void 0&&typeof o!="string")throw new TypeError("description, when provided, must be a string.")}}const Dh=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Ps)&&!(e instanceof Uh)&&!Nh(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},qh=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ae{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),o=(i&1<<a)>>a;return this.pos++,o}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let o=this.pos;o<a;o++){const n=Math.floor(o/8);let s=this.bytes[n];const r=7-(o&7);s&=~(1<<r),s|=(i&1<<a-o-1)>>a-o-1<<r,this.bytes[n]=s}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Ae(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ua=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Ho=[-1,1,2,3,4,5,6,8],$h=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Ae(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let o=null;a===15?o=e.readBits(24):a<Ua.length&&(o=Ua[a]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=Ho[n]),{objectType:i,frequencyIndex:a,sampleRate:o,channelConfiguration:n,numberOfChannels:s}},Ms=t=>{let e=Ua.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=Ho.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let o=13;t.objectType>=32&&(o+=6),e===15&&(o+=24);const n=Math.ceil(o/8),s=new Uint8Array(n),r=new Ae(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const pt=["avc","hevc","vp9","av1","vp8","prores"],Xe=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],No=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],$t=[...No,...Xe],Hi=["webvtt"],Da=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Is=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],As=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Bs=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Ni=["ap4x","ap4h","apch","apcn","apcs","apco"],Uo=["dtsc","dtsh","dtsl","dtse"],Wh=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],jh=(t,e,i,a,o)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=Da.find(p=>s<=p.maxMacroblocks&&a<=p.maxBitrate)??Ke(Da),l=r?r.level:0,c="64".padStart(2,"0"),d="00",u=l.toString(16).padStart(2,"0");return`avc1.${c}${d}${u}`}else if(t==="hevc"){const l=e*i,c=Is.find(u=>l<=u.maxPictureSize&&a<=u.maxBitrate)??Ke(Is);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(As.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??Ke(As)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=Bs.find(d=>s<=d.maxPictureSize&&a<=d.maxBitrate)??Ke(Bs);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Wh.filter(d=>d.alpha===o);let l=r[0].fourCc,c=1/0;for(const{fourCc:d,bitrate:u}of r){const p=Math.abs(u*s-a);p<c&&(c=p,l=d)}return l}else qt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Vh=t=>{const e=t.split("."),o=(1<<7)+1,n=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(n<<5)+r,c=s.slice(-1)==="H"?1:0,u=Number(e[3])===8?0:1,p=0,f=e[4]?Number(e[4]):0,m=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,v=(c<<7)+(u<<6)+(p<<5)+(f<<4)+(m<<3)+(h<<2)+g;return[o,l,v,0]},Gh=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Xe.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},Fs=/^pcm-([usf])(\d+)(be)?$/,Wt=t=>{if($(Xe.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Fs.exec(t);$(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,o=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:o,silentValue:n}},qa=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Ni.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Uo.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Fs.test(t)?t:t==="webvtt"?"webvtt":null,Kh=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Xh=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Zh=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Ni],Qh=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Yh=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Jh=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,em=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Rs=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Zh.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Na(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(Oa);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const o=Object.keys(La);if(i.transfer!=null&&!o.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${o.join(", ")}.`);const n=Object.keys(Ha);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Qh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Yh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Jh.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!em.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Ni.some(i=>t.decoderConfig.codec.startsWith(i))&&!Ni.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Ni.join(", ")}.`);if(e!==null&&qa(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},tm=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],zs=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!tm.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Na(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Uo.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Uo.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Xe.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Xe.join(", ")}).`);if(e!==null&&qa(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},im=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const am=[48e3,44100,32e3],om=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var gt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(gt||(gt={}));var je;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(je||(je={}));const Ui=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let o=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?o=4:t[e+1]===0&&t[e+2]===1&&(o=3),o===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+o,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Os=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let o;e===1?o=a.getUint8(i):e===2?o=a.getUint16(i,!1):e===3?o=xh(a,i):($(e===4),o=a.getUint32(i,!1)),i+=e,yield{offset:i,length:o},i+=o}},nm=(t,e)=>{if(e.description){const o=(We(e.description)[4]&3)+1;return Os(t,o)}else return Ui(t)},Ls=t=>t&31,$a=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},sm=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),a=new Uint8Array(i);let o=0;for(const n of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(o,n.byteLength);break;case 2:s.setUint16(o,n.byteLength,!1);break;case 3:Ao(s,o,n.byteLength,!1);break;case 4:s.setUint32(o,n.byteLength,!1);break}o+=e,a.set(n,o),o+=n.byteLength}return a},rm=t=>{try{const e=[],i=[],a=[];for(const r of Ui(t)){const l=t.subarray(r.offset,r.offset+r.length),c=Ls(l[0]);c===gt.SPS?e.push(l):c===gt.PPS?i.push(l):c===gt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const o=e[0],n=cm(o);$(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return Se._error("Error building AVC Decoder Configuration Record:",e),null}},lm=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){$(t.chromaFormat!==null),$(t.bitDepthLumaMinus8!==null),$(t.bitDepthChromaMinus8!==null),$(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}}return new Uint8Array(e)},Hs={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},cm=t=>{try{const e=new Ae($a(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),o=e.readAlignedByte(),n=e.readAlignedByte();ee(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=ee(e),s===3&&(c=e.readBits(1)),r=ee(e),l=ee(e),e.skipBits(1),e.readBits(1))){for(let x=0;x<(s!==3?8:12);x++)if(e.readBits(1)){const k=x<6?16:64;let D=8,Z=8;for(let B=0;B<k;B++){if(Z!==0){const W=mt(e);Z=(D+W+256)%256}D=Z===0?D:Z}}}ee(e);const d=ee(e);if(d===0)ee(e);else if(d===1){e.skipBits(1),mt(e),mt(e);const j=ee(e);for(let x=0;x<j;x++)mt(e)}ee(e),e.skipBits(1);const u=ee(e),p=ee(e),f=16*(u+1),m=16*(p+1);let h=f,g=m;const v=e.readBits(1);if(v||e.skipBits(1),e.skipBits(1),e.readBits(1)){const j=ee(e),x=ee(e),z=ee(e),k=ee(e);let D,Z;if((c===0?s:0)===0)D=1,Z=2-v;else{const W=s===3?1:2,L=s===1?2:1;D=W,Z=L*(2-v)}h-=D*(j+x),g-=Z*(z+k)}let y=2,T=2,_=2,E=0,P={num:1,den:1},I=null,M=null;if(e.readBits(1)){if(e.readBits(1)){const L=e.readBits(8);if(L===255)P={num:e.readBits(16),den:e.readBits(16)};else{const J=Hs[L];J&&(P=J)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),E=e.readBits(1),e.readBits(1)&&(y=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(ee(e),ee(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const Z=e.readBits(1);Z&&Ns(e);const B=e.readBits(1);B&&Ns(e),(Z||B)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),ee(e),ee(e),ee(e),ee(e),I=ee(e),M=ee(e))}if(I===null){$(M===null);const j=o&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&j)I=0,M=0;else{const x=u+1,z=p+1,k=(2-v)*z,D=Da.find(B=>B.level>=n)??Ke(Da),Z=Math.min(Math.floor(D.maxDpbMbs/(x*k)),16);I=Z,M=Z}}return $(M!==null),{profileIdc:a,constraintFlags:o,levelIdc:n,frameMbsOnlyFlag:v,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:f,codedHeight:m,displayWidth:h,displayHeight:g,pixelAspectRatio:P,colourPrimaries:y,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:E,numReorderFrames:I,maxDecFrameBuffering:M}}catch(e){return Se._error("Error parsing AVC SPS:",e),null}},Ns=t=>{const e=ee(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)ee(t),ee(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},fm=(t,e)=>{if(e.description){const o=(We(e.description)[21]&3)+1;return Os(t,o)}else return Ui(t)},Do=t=>t>>1&63,dm=t=>{try{const e=new Ae($a(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:o,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=hm(e,i);ee(e);const d=ee(e);let u=0;d===3&&(u=e.readBits(1));const p=ee(e),f=ee(e);let m=p,h=f;if(e.readBits(1)){const x=ee(e),z=ee(e),k=ee(e),D=ee(e);let Z=1,B=1;const W=u===0?d:0;W===1?(Z=2,B=2):W===2&&(Z=2,B=1),m-=(x+z)*Z,h-=(k+D)*B}const g=ee(e),v=ee(e);ee(e);const y=e.readBits(1)?0:i;let T=0;for(let x=y;x<=i;x++)ee(e),T=ee(e),ee(e);ee(e),ee(e),ee(e),ee(e),ee(e),ee(e),e.readBits(1)&&e.readBits(1)&&mm(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),ee(e),ee(e),e.skipBits(1));const _=ee(e);if(pm(e,_),e.readBits(1)){const x=ee(e);for(let z=0;z<x;z++)ee(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let E=2,P=2,I=2,M=0,N=0,j={num:1,den:1};if(e.readBits(1)){const x=vm(e,i);j=x.pixelAspectRatio,E=x.colourPrimaries,P=x.transferCharacteristics,I=x.matrixCoefficients,M=x.fullRangeFlag,N=x.minSpatialSegmentationIdc}return{displayWidth:m,displayHeight:h,pixelAspectRatio:j,colourPrimaries:E,transferCharacteristics:P,matrixCoefficients:I,fullRangeFlag:M,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:o,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:d,bitDepthLumaMinus8:g,bitDepthChromaMinus8:v,minSpatialSegmentationIdc:N}}catch(e){return Se._error("Error parsing HEVC SPS:",e),null}},um=t=>{try{const e=[],i=[],a=[],o=[];for(const c of Ui(t)){const d=t.subarray(c.offset,c.offset+c.length),u=Do(d[0]);u===je.VPS_NUT?e.push(d):u===je.SPS_NUT?i.push(d):u===je.PPS_NUT?a.push(d):(u===je.PREFIX_SEI_NUT||u===je.SUFFIX_SEI_NUT)&&o.push(d)}if(i.length===0||a.length===0)return null;const n=dm(i[0]);if(!n)return null;let s=0;if(a.length>0){const c=a[0],d=new Ae($a(c));d.skipBits(16),ee(d),ee(d),d.skipBits(1),d.skipBits(1),d.skipBits(3),d.skipBits(1),d.skipBits(1),ee(d),ee(d),mt(d),d.skipBits(1),d.skipBits(1),d.readBits(1)&&ee(d),mt(d),mt(d),d.skipBits(1),d.skipBits(1),d.skipBits(1),d.skipBits(1);const u=d.readBits(1),p=d.readBits(1);!u&&!p?s=0:u&&!p?s=2:!u&&p?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:je.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:je.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:je.PPS_NUT,nalUnits:a}]:[],...o.length?[{arrayCompleteness:1,nalUnitType:Do(o[0][0]),nalUnits:o}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return Se._error("Error building HEVC Decoder Configuration Record:",e),null}},hm=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),o=t.readBits(5);let n=0;for(let d=0;d<32;d++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let d=0;d<6;d++)s[d]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let d=0;d<e;d++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let d=e;d<8;d++)t.skipBits(2);for(let d=0;d<e;d++)l[d]&&t.skipBits(88),c[d]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:o,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:r}},mm=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))ee(t);else{const o=Math.min(64,1<<4+(e<<1));e>1&&mt(t);for(let n=0;n<o;n++)mt(t)}},pm=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=gm(t,a,e,i)},gm=(t,e,i,a)=>{let o=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const l=ee(t);s=e-(l+1)}else s=e-1;t.readBits(1),ee(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);o=a[s]}else{const r=ee(t),l=ee(t);for(let c=0;c<r;c++)ee(t),t.readBits(1);for(let c=0;c<l;c++)ee(t),t.readBits(1);o=r+l}return o},vm=(t,e)=>{let i=2,a=2,o=2,n=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=Hs[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),o=t.readBits(8))),t.readBits(1)&&(ee(t),ee(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(ee(t),ee(t),ee(t),ee(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&ee(t),t.readBits(1)&&bm(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=ee(t),ee(t),ee(t),ee(t),ee(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:o,fullRangeFlag:n,minSpatialSegmentationIdc:s}},bm=(t,e,i)=>{let a=!1,o=!1,n=!1;a=t.readBits(1)===1,o=t.readBits(1)===1,(a||o)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?ee(t):c=t.readBits(1)===1;let d=1;c||(d=ee(t)+1),a&&Us(t,d,n),o&&Us(t,d,n)}},Us=(t,e,i)=>{for(let a=0;a<e;a++)ee(t),ee(t),i&&(ee(t),ee(t)),t.readBits(1)},ym=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let o=0;o<a.length;o++)e.push(a[o])}}return new Uint8Array(e)};var Ds;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Ds||(Ds={}));const wm=function*(t){const e=new Ae(t),i=()=>{let a=0;for(let o=0;o<8;o++){const n=e.readAlignedByte();if(a|=(n&127)<<o*7,!(n&128))break;if(o===7&&n&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),o=e.readBits(1),n=e.readBits(1);e.skipBits(1),o&&e.skipBits(8);let s;if(n){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);$(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},km=t=>{const e=at(t),i=e.getUint8(9),a=e.getUint16(10,!0),o=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:o,outputGain:n,channelMappingFamily:s,channelMappingTable:r}},Tm=(t,e,i)=>{switch(t){case"avc":{for(const a of nm(i,e)){const o=i[a.offset],n=Ls(o);if(n>=gt.NON_IDR_SLICE&&n<=gt.SLICE_DPC)return"delta";if(n===gt.IDR)return"key";if(n===gt.SEI&&(!Rh()||zh()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=$a(s);let l=1;do{let c=0;for(;;){const p=r[l++];if(p===void 0||(c+=p,p<255))break}let d=0;for(;;){const p=r[l++];if(p===void 0||(d+=p,p<255))break}if(c===6){const p=new Ae(r);p.pos=8*l;const f=ee(p),m=p.readBits(1);if(f===0&&m===1)return"key"}l+=d}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of fm(i,e)){const o=Do(i[a.offset]);if(o<je.BLA_W_LP)return"delta";if(o<=je.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Ae(i);if(a.readBits(2)!==2)return null;const o=a.readBits(1);return(a.readBits(1)<<1)+o===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:o,data:n}of wm(i))if(o===1){const s=new Ae(n);s.skipBits(4),a=!!s.readBits(1)}else if(o===3||o===6||o===7){if(a)return"key";const s=new Ae(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:qt(t),$(!1)}};var qs;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(qs||(qs={}));const _m=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Ae(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),o=e.readBits(5);if(o>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:o,bsmod:n,acmod:s,lfeon:r,bitRateCode:l}},Sm=[1,2,3,6],xm=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Ae(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),o=e.readBits(2);let n=0,s;o===3?(n=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const d=Sm[s];let u;return o<3?u=am[o]/1e3:u=om[n]/1e3,{dataRate:Math.round((a+1)*u/(d*16)),substreams:[{fscod:o,fscod2:n,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},Cm=1683496997,Em=18,Pm=10,$s=32,Mm=20,Im=8,Am=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Bm=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Fm=[16,16,20,20,0,24,24,0],Ws=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Rm=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],zm=8,Om=[32e3,44100,48e3,0],Lm=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Hm=[512,1024,2048,4096],Nm=t=>{const e=Um(t),i=at(t);let a=e?Math.ceil(e.frameSize/4)*4:0,o=null;for(;a+4<=t.length&&i.getUint32(a)===Cm;){const s=Dm(t.subarray(a));if(!s)break;o??=s,a+=s.frameSize}if(e)return{frameSize:o?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:o!==null};if(!o?.asset)return null;const{asset:n}=o;return{frameSize:a,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Um=t=>{if(t.length<Em||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Ae(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==$s-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%Im!==0)return null;const o=e.readBits(14)+1;if(o<96)return null;const n=e.readBits(6);if(n>=Ws.length)return null;const s=Am[e.readBits(4)];if(s===0)return null;const r=Bm[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=Fm[e.readBits(3)];if(c===0)return null;const d=l!==0;return{frameSize:o,sampleRate:s,numberOfChannels:Ws[n]+(d?1:0),sampleCount:a*$s,channelLayout:Rm[n]|(d?zm:0),amode:n,lfePresent:d,bitRate:r,pcmResolution:c}},Dm=t=>{if(t.length<Pm||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Ae(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),o=8+4*a,n=16+4*a;e.skipBits(o);const s=e.readBits(n)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=Om[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const d=e.readBits(3)+1,u=e.readBits(3)+1,p=[];for(let v=0;v<d;v++)p.push(e.readBits(i+1));for(const v of p)e.skipBits(8*Mh(v));if(e.readBits(1)){e.skipBits(2);const v=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*v)}for(let v=0;v<u;v++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,m=Lm[e.readBits(4)],h=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const v=e.readBits(2)+1<<2;g=e.readBits(v)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:m,numberOfChannels:h,sampleCount:Math.round(c*m/l),channelLayout:g,pcmResolution:f}}},qm=t=>{const e=new Uint8Array(Mm),i=at(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,o=new Ae(e);return o.seekToByte(13),o.writeBits(2,Math.max(Hm.indexOf(t.sampleCount),0)),o.writeBits(5,a),o.writeBits(1,t.core?.lfePresent?1:0),o.writeBits(6,t.core?.amode??0),o.writeBits(14,t.core?t.core.frameSize-1:0),o.writeBits(1,0),o.writeBits(3,0),o.writeBits(16,t.channelLayout),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const js=new Uint8Array(0);class st{constructor(e,i,a,o,n=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=o,this.sequenceNumber=n,e===js&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(o)||o<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===js}get microsecondTimestamp(){return Math.trunc(Pt*this.timestamp)}get microsecondDuration(){return Math.trunc(Pt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new st(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new st(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $m=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const qo=8,Vs=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Wm=7,jm=9,Gs=t=>{const e=t.filePos,i=pp(t,9),a=new Ae(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const d=a.readBits(13);a.skipBits(11);const u=a.readBits(2)+1;if(u!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let p=null;return s===1?t.filePos-=2:p=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:d,numberOfAacFrames:u,crcCheck:p,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Vm=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Gm=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});Oh();let Ks=-1/0,Xs=-1/0,Di=null;typeof FinalizationRegistry<"u"&&(Di=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Ks>=1e3&&(Se._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Ks=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Xs>=1e3&&(Se._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Xs=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class jt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const $o=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Km=new Set($o);class Oe{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Pt*this.timestamp)}get microsecondDuration(){return Math.trunc(Pt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Km.has(i.format))throw new TypeError("init.format must be one of: "+$o.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Oo(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??Qm(i.format,i.codedWidth,i.codedHeight);let o=i.colorSpace??null;o===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?o={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:o={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?We(e):We(e).slice(),this._layout=a,this.colorSpace=new Wo(o)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Oo(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new Wo(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Oo(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Oe(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Pt),duration:Math.trunc((i.duration??0)*Pt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,o=0;if("naturalWidth"in e?(a=e.naturalWidth,o=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,o=e.videoHeight):"width"in e&&(a=Number(e.width),o=Number(e.height)),!a||!o)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:a,height:o},s=new OffscreenCanvas(n.width,n.height),r=s.getContext("2d",{alpha:Ss(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new Wo({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof jt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!$o.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=Cs({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Di?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return $(this._data!==null),this._data instanceof jt?new Oe(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):$i(this._data)?new Oe(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?($(this._layout),new Oe(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Oe(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Di?.unregister(this),this._data instanceof jt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):$i(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Js(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return $i(this._data)?this._data.allocationSize(e):er(this,e).allocationSize}async copyTo(e,i={}){if(!Na(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Js(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if($(this._data!==null),$i(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof jt){const c={stack:[],error:void 0,hasError:!1};try{const d=Vm(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(d instanceof Oe))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(d.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${d.format}' instead.`);return await d.copyTo(e,i)}catch(d){c.error=d,c.hasError=!0}finally{Gm(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),d=await c.copyTo(e,i);return c.close(),d}const a=er(this,i);$(this.format);const o=We(e);if(o.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${o.byteLength}`);const n=Wa(this.format);let s;if(this._data instanceof jt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(d=>!(d.data instanceof Uint8Array)||!Number.isInteger(d.stride)||d.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)$(this._layout),$(this._layout.length===n.length),s=this._layout.map((c,d)=>{const u=Math.ceil(this.codedHeight/n[d].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*u),stride:c.stride}});else{const d=this._data.getContext("2d");$(d);const u=d.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:We(u.data),stride:4*this.codedWidth}]}const r=[],l=n.length;for(let c=0;c<l;c++){const d=a.computedLayouts[c],u=s[c].stride,p=s[c].data;let f=d.sourceTop*u;f+=d.sourceLeftBytes;let m=d.destinationOffset;const h=d.sourceWidthBytes,g={offset:m,stride:d.destinationStride};for(let v=0;v<d.sourceHeight;v++){if(f+h>p.byteLength)throw new Error("Source buffer OOB read.");if(m+h>o.byteLength)throw new Error("Destination buffer OOB write.");const b=p.subarray(f,f+h);o.set(b,m),f+=u,m+=d.destinationStride}r.push(g)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),d=this.format.includes("X")&&i.format.includes("A");if(c||d)for(let u=0;u<a.allocationSize;u+=4){if(c){const p=o[u],f=o[u+2];o[u]=f,o[u+2]=p}d&&(o[u+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if($(this._data!==null),this._data instanceof jt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let o=0;const n=[];for(const s of e)a.set(s.data,o),n.push(o),o+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:n[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return $i(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?($(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,o,n,s,r,l,c){let d=0,u=0,p=this.displayWidth,f=this.displayHeight,m=0,h=0,g=this.displayWidth,v=this.displayHeight;if(s!==void 0?(d=i,u=a,p=o,f=n,m=s,h=r,l!==void 0?(g=l,v=c):(g=p,v=f)):(m=i,h=a,o!==void 0&&(g=o,v=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(d))throw new TypeError("sx must be a number.");if(!Number.isFinite(u))throw new TypeError("sy must be a number.");if(!Number.isFinite(p)||p<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(m))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:d,sy:u,sWidth:p,sHeight:f}=this._rotateSourceRegion(d,u,p,f,this.rotation));const b=this.toCanvasImageSource();e.save();const y=m+g/2,T=h+v/2;e.translate(y,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:g/v;e.scale(1/_,_),e.drawImage(b,d,u,p,f,-g/2,-v/2,g,v),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&jo(i.crop,"options.");const a=e.canvas.width,o=e.canvas.height,n=i.rotation??this.rotation,[s,r]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=Ys(l,s,r));let c,d,u,p;const{sx:f,sy:m,sWidth:h,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,n);if(i.fit==="fill")c=0,d=0,u=a,p=o;else{const[b,y]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(a/b,o/y):Math.max(a/b,o/y);u=b*T,p=y*T,c=(a-u)/2,d=(o-p)/2}e.save();const v=n%180===0?1:u/p;e.translate(a/2,o/2),e.rotate(n*Math.PI/180),e.scale(1/v,v),e.translate(-a/2,-o/2),e.drawImage(this.toCanvasImageSource(),f,m,h,g,c,d,u,p),e.restore()}_rotateSourceRegion(e,i,a,o,n){return n===90?[e,i,a,o]=[i,this.squarePixelHeight-e-a,o,a]:n===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-o]:n===270&&([e,i,a,o]=[this.squarePixelWidth-i-o,e,o,a]),{sx:e,sy:i,sWidth:a,sHeight:o}}_drawWithFitAndMipmapping(e,i,a){const o=e.width,n=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let d=0;2*o<l&&2*n<c&&(d=Math.floor(Math.log2(Math.min(l/o,c/n))));const u=o*2**d,p=n*2**d,{canvas:f,context:m,isNew:h}=d>0?Qs(u,p):{canvas:e,context:i,isNew:a.targetIsFresh};m.imageSmoothingQuality="high",a.fillBlack?(m.fillStyle="black",m.fillRect(0,0,u,p)):h||m.clearRect(0,0,u,p),this.drawWithFit(m,{fit:a.fit,rotation:a.rotation,crop:a.crop}),m.globalCompositeOperation="copy";for(let g=d;g>1;g--){const v=o*2**g,b=n*2**g;m.drawImage(f,0,0,v,b,0,0,v/2,b/2)}m.globalCompositeOperation="source-over",d>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*o,2*n,0,0,o,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if($(this._data!==null),this._data instanceof jt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&jo(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=_h(this.rotation+(e.rotate??0)),[a,o]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=Ys(n,a,o));const s=n?n.width:a,r=n?n.height:o,l=s/r;let c,d;e.width!==void 0&&e.height===void 0?(c=e.width,d=c/l):e.width===void 0&&e.height!==void 0?(d=e.height,c=d*l):e.width!==void 0&&e.height!==void 0?(c=e.width,d=e.height):(c=s,d=r),c=ws(c,e.roundDimensionsTo??1),d=ws(d,e.roundDimensionsTo??1);const u={width:c,height:d,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:a,height:o},alpha:e.alpha??"keep"};for(const h of Xm){let g=h(this,u);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:p,context:f,isNew:m}=Qs(u.width,u.height);return this._drawWithFitAndMipmapping(p,f,{fit:u.fit,rotation:u.rotation,crop:u.crop,targetIsFresh:m,fillBlack:u.alpha==="discard"}),new Oe(p,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Xm=[],Zm=3,qi=[];let Zs=0;const Qs=(t,e)=>{for(const o of qi)if(o.canvas.width===t&&o.canvas.height===e)return o.age=Zs++,{canvas:o.canvas,context:o.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return qi.length>=Zm&&qi.splice(Lh(qi,o=>o.age),1),qi.push({canvas:i,context:a,age:Zs++}),{canvas:i,context:a,isNew:!0}};class Wo{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Oa);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(La);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const o=Object.keys(Ha);if(e.matrix!=null&&!o.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${o.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const $i=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Ys=(t,e,i)=>{const a=Math.min(t.left,e),o=Math.min(t.top,i),n=Math.min(t.width,e-a),s=Math.min(t.height,i-o);return $(n>=0),$(s>=0),{left:a,top:o,width:n,height:s}},jo=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Js=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},Qm=(t,e,i)=>{const a=Wa(t),o=[];let n=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,d=c*l;o.push({offset:n,stride:c}),n+=d}return o},Wa=t=>{const e=(i,a,o,n,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:o,heightDivisor:n},{sampleBytes:a,widthDivisor:o,heightDivisor:n}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:qt(t),$(!1)}},er=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,o=Ym(i,a,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return ep(o,s,n)},Ym=(t,e,i,a,o)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!Jm(o,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},Jm=(t,e)=>{if(t===null)return!0;const i=Wa(t);for(let a=0;a<i.length;a++){const o=i[a],n=o.widthDivisor,s=o.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},ep=(t,e,i)=>{const a=Wa(e),o=a.length;if(i!==void 0&&i.length!==o)throw new TypeError(`Layout must have ${o} planes.`);let n=0;const s=[],r=[];for(let l=0;l<o;l++){const c=a[l],d=c.sampleBytes,u=c.widthDivisor,p=c.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/p),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/p),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/u)*d,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/u)*d,i!==void 0){const g=i[l];if(g.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);f.destinationOffset=g.offset,f.destinationStride=g.stride}else f.destinationOffset=n,f.destinationStride=f.sourceWidthBytes;const h=f.destinationStride*f.sourceHeight+f.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(h),n=Math.max(n,h);for(let g=0;g<l;g++){const v=s[g];if(!(r[l]<=v.destinationOffset||r[g]<=f.destinationOffset))throw new TypeError("Planes overlap.")}s.push(f)}return{allocationSize:n,computedLayouts:s}},ja=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Wi{constructor(){this._referenceCount=0}}class Ue{get microsecondTimestamp(){return Math.trunc(Pt*this.timestamp)}get microsecondDuration(){return Math.trunc(Pt*this.duration)}constructor(e){if(this._closed=!1,ji(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Wi){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!ja.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!ja.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(Mt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const o=this.numberOfFrames*this.numberOfChannels*Mt(this.format);if(a.byteLength<o)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}Di?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!ja.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const o=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(o>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const n=Mt(i),s=Vt(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?o:o*this.numberOfChannels)*n}copyTo(e,i){if(!Na(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!ja.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:o,frameOffset:n}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,d=this.numberOfChannels,u=n??0;if(u>=c)throw new RangeError("frameOffset out of range");const p=o!==void 0?o:c-u;if(p>c-u)throw new RangeError("frameCount out of range");const f=Mt(l),m=Vt(l);if(m&&s>=d)throw new RangeError("planeIndex out of range");if(!m&&s!==0)throw new RangeError("planeIndex out of range");const g=(m?p:p*d)*f;if(e.byteLength<g)throw new RangeError("Destination buffer is too small");const v=at(e),b=ir(l);if(ji(this._data))Fh()&&d>2&&l!==r?ip(this._data,v,r,l,d,s,u,p):this._data.copyTo(e,{planeIndex:s,frameOffset:u,frameCount:p,format:l});else{const y=tr(r),T=Mt(r),_=Vt(r);let E;if(this._data instanceof Wi){const I=M=>{const N=this._data.getDataPlane(M);if(!(N instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const j=c*T*(_?1:d);if(N.byteLength!==j)throw new TypeError(`Data plane ${M} has invalid size. Expected exactly ${j} bytes, got ${N.byteLength} bytes.`);return N};if(_)if(m)E=I(s),s=0;else{E=new Uint8Array(c*T*d);for(let M=0;M<d;M++){const N=I(M);E.set(N,M*c*T)}}else E=I(0)}else E=this._data;const P=at(E);for(let I=0;I<p;I++)if(m){const M=I*f;let N;_?N=(s*c+(I+u))*T:N=((I+u)*d+s)*T;const j=y(P,N);b(v,M,j)}else for(let M=0;M<d;M++){const j=(I*d+M)*f;let x;_?x=(M*c+(I+u))*T:x=((I+u)*d+M)*T;const z=y(P,x);b(v,j,z)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Wi){const e=new Ue(this._data);return e.setTimestamp(this.timestamp),e}else if(ji(this._data)){const e=new Ue(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new Ue({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,o=Mt(this.format);let n;if(Vt(this.format)){const s=a*o;if(n=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else n=new Uint8Array(a*this.numberOfChannels*o),a>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new Ue({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Di?.unregister(this),this._data instanceof Wi?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):ji(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Wi?this._createAudioDataFromData():ji(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Vt(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;for(;c>0;){const d=Math.min(r,c),u=new Float32Array(o*d);for(let p=0;p<o;p++)e.copyFromChannel(u.subarray(p*d,(p+1)*d),p,l);yield new Ue({format:"f32-planar",sampleRate:n,numberOfFrames:d,numberOfChannels:o,timestamp:i+l/n,data:u}),l+=d,c-=d}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;const d=[];for(;c>0;){const u=Math.min(r,c),p=new Float32Array(o*u);for(let m=0;m<o;m++)e.copyFromChannel(p.subarray(m*u,(m+1)*u),m,l);const f=new Ue({format:"f32-planar",sampleRate:n,numberOfFrames:u,numberOfChannels:o,timestamp:i+l/n,data:p});d.push(f),l+=u,c-=u}return d}}const Mt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Vt=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},tr=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},ir=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Fe((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Fe(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Fe(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},ji=t=>typeof AudioData<"u"&&t instanceof AudioData,tp=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},ip=(t,e,i,a,o,n,s,r)=>{const l=tr(i),c=ir(a),d=Mt(i),u=Mt(a),p=Vt(i);if(Vt(a))if(p){const m=new ArrayBuffer(r*d),h=at(m);t.copyTo(m,{planeIndex:n,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const v=g*d,b=g*u,y=l(h,v);c(e,b,y)}}else{const m=new ArrayBuffer(r*o*d),h=at(m);t.copyTo(m,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const v=(g*o+n)*d,b=g*u,y=l(h,v);c(e,b,y)}}else if(p){const m=r*d,h=new ArrayBuffer(m),g=at(h);for(let v=0;v<o;v++){t.copyTo(h,{planeIndex:v,frameOffset:s,frameCount:r,format:i});for(let b=0;b<r;b++){const y=b*d,T=(b*o+v)*u,_=l(g,y);c(e,T,_)}}}else{const m=new ArrayBuffer(r*o*d),h=at(m);t.copyTo(m,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++)for(let v=0;v<o;v++){const b=g*o+v,y=b*d,T=b*u,_=l(h,y);c(e,T,_)}}},ap=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new Ue({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ar=new Map,or=new Map,op=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!pt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${pt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof Le))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Le)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&jo(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");nr(t.codec,t)},nr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&qa(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},sr=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(n,s,r)=>({codec:t.fullCodecString??jh(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Kh(t.codec)}),o=[];return i.quantizer!==null&&o.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&o.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),$(o.length>0),o},np=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!$t.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${$t.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Xe.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof Le))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Le)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");rr(t.codec,t)},rr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&qa(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},lr=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Gh(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Xh(t.codec)}};class Le{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in cr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?cr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,o){const n=sp[e];let s=null,r=this._bitrateMode??o??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&($(this._quality!==void 0),s=Fe(Math.round(Eh(n.worst,n.best,this._quality)),n.min,n.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&($(s!==null&&n),c=Fe((s-n.worst)/(n.best-n.worst),0,1)),l=fr(e,i,a,Vo(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:($(this._quality!==void 0),fr(e,i,a,Vo(this._quality)))}_toAudioBitrate(e){if(Xe.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Vo(this._quality),o={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!o)throw new Error(`Unhandled codec: ${e}`);let n=o*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r)),Math.round(n/1e3)*1e3}}const cr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},sp={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Vo=t=>.3*Math.exp(2.5538*t),fr=(t,e,i,a)=>{const o=e*i,n=1920*1080,s=3e6,r=Math.pow(o/n,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},u=l*c[t]*a;return Math.ceil(u/1e3)*1e3},dr=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};$(!1)},rp=new Le("high"),lp=async(t,e={})=>{const{width:i=1280,height:a=720,quality:o,bitrate:n,...s}=e;if(!pt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(o!==void 0&&!(o instanceof Le))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof Le)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");nr(t,s);const r=Va(o,n)??new Le("medium");let l;try{l=sr({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),d=ar.get(c);if(d)return d;const u=(async()=>{for(const{config:f}of l)if(ur.some(m=>m.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:m}of l){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!Ss()||await new Promise(async g=>{try{const v=new VideoEncoder({output:()=>{},error:()=>g(!1)});v.configure(f);const b=new Uint8Array(i*a*4),y=new VideoFrame(b,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});v.encode(y,m!==null?dr(t,m):void 0),y.close(),await v.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return ar.set(c,u),u},cp=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:o,bitrate:n,...s}=e;if(!$t.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(o!==void 0&&!(o instanceof Le))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof Le)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");rr(t,s);const r=Va(o,n)??new Le("medium"),l=lr({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),d=or.get(c);if(d)return d;const u=(async()=>{if(hr.some(p=>p.supports(t,l))||Xe.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return or.set(c,u),u},Va=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof Le?e:new Le({bitrate:e})},fp=async(t,e)=>{for(const i of t)if(await lp(i,e))return i;return null},dp=async(t,e)=>{for(const i of t)if(await cp(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ur=[],hr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const up=t=>{let a=t,o=4096,n=0,s=12,r=0;for(a<0&&(a=-a,n=128),a+=33,a>8191&&(a=8191);(a&o)!==o&&s>=5;)o>>=1,s--;return r=a>>s-4&15,~(n|s-5<<4|r)&255},hp=t=>{let i=2048,a=0,o=11,n=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&o>=5;)i>>=1,o--;return n=s>>(o===4?1:o-4)&15,(a|o-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Vi{constructor(e,i,a,o,n){this.bytes=e,this.view=i,this.offset=a,this.start=o,this.end=n,this.bufferPos=o-a}static tempFromBytes(e){return new Vi(e,at(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Vi(this.bytes,this.view,this.offset,e,e+i)}}const mp=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},pp=(t,e)=>{mp(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class gp{constructor(e){this.mutex=new vs,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let o=this.trackTimestampInfo.get(e);if(o){if(a&&(o.maxTimestampBeforeLastKeyPacket=o.maxTimestamp),o.maxTimestampBeforeLastKeyPacket!==null&&i<o.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${o.maxTimestampBeforeLastKeyPacket}s.`);o.maxTimestamp=Math.max(o.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");o={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,o)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const mr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,vp=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),o=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+o.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ga{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const a=this.writer.getPos(),o=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,o),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);$(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const de=new Uint8Array(8),Ve=new DataView(de.buffer),xe=t=>[(t%256+256)%256],se=t=>(Ve.setUint16(0,t,!1),[de[0],de[1]]),Go=t=>(Ve.setInt16(0,t,!1),[de[0],de[1]]),pr=t=>(Ve.setUint32(0,t,!1),[de[1],de[2],de[3]]),X=t=>(Ve.setUint32(0,t,!1),[de[0],de[1],de[2],de[3]]),vt=t=>(Ve.setInt32(0,t,!1),[de[0],de[1],de[2],de[3]]),rt=t=>(Ve.setUint32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[de[0],de[1],de[2],de[3],de[4],de[5],de[6],de[7]]),bp=t=>(Ve.setInt32(0,Math.floor(t/2**32),!1),Ve.setUint32(4,t,!1),[de[0],de[1],de[2],de[3],de[4],de[5],de[6],de[7]]),gr=t=>(Ve.setInt16(0,2**8*t,!1),[de[0],de[1]]),Ze=t=>(Ve.setInt32(0,2**16*t,!1),[de[0],de[1],de[2],de[3]]),Ko=t=>(Ve.setInt32(0,2**30*t,!1),[de[0],de[1],de[2],de[3]]),Xo=(t,e)=>{const i=[];let a=t;do{let o=a&127;a>>=7,i.length>0&&(o|=128),i.push(o)}while(a>0||e);return i.reverse()},ve=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,o)=>t.charCodeAt(o));return e&&i.push(0),i},vr=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},br=vr(0),yr=t=>[Ze(t[0]),Ze(t[1]),Ko(t[2]),Ze(t[3]),Ze(t[4]),Ko(t[5]),Ze(t[6]),Ze(t[7]),Ko(t[8])],ne=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),me=(t,e,i,a,o)=>ne(t,[xe(e),pr(i),a??[]],o),yp=t=>t.isQuickTime?ne("ftyp",[ve("qt  "),X(512),ve("qt  ")]):t.fragmented?t.cmaf?ne("ftyp",[ve("iso5"),X(512),ve("iso5"),ve("iso6"),ve("mp41"),ve("cmfc"),ve("dash")]):ne("ftyp",[ve("iso5"),X(512),ve("iso5"),ve("iso6"),ve("mp41")]):ne("ftyp",[ve("isom"),X(512),ve("isom"),t.holdsAvc?ve("avc1"):[],ve("mp41")]),wr=()=>ne("styp",[ve("iso5"),X(0),ve("iso5"),ve("iso6"),ve("mp41"),ve("cmfc"),ve("dash")]),kr=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),me("sidx",1,0,[X(1),X(Ye),rt(Te(t.minWrittenTimestamp,Ye)),rt(0),se(0),se(1),X(e&2147483647),X(Te(i,Ye)),X(0)])},Ka=t=>({type:"mdat",largeSize:t}),wp=t=>({type:"free",size:t}),Gi=t=>ne("moov",void 0,[kp(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>Tp(e,t.creationTime)),t.isFragmented?n2(t.trackDatas):null,b2(t)]),kp=(t,e)=>{const i=Math.max(0,...e.map(s=>Te(Xa(s),Ye)+Te(s.startTimestampOffset??0,Ye))),a=Math.max(0,...e.map(s=>s.track.id))+1,o=!Et(t)||!Et(i),n=o?rt:X;return me("mvhd",+o,0,[n(t),n(t),X(Ye),n(i),Ze(1),gr(1),Array(10).fill(0),yr(br),Array(24).fill(0),X(a)])},Xa=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const o=t.samples[a];o.timestamp<e&&(e=o.timestamp),o.timestamp+o.duration>i&&(i=o.timestamp+o.duration)}return e===1/0?0:i-e},Tp=(t,e)=>{const i=M2(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ne("trak",void 0,[_p(t,e),a?Sp(t,t.startTimestampOffset):null,xp(t,e),i.name!==void 0?ne("udta",void 0,[ne("name",[...ot.encode(i.name)])]):null])},_p=(t,e)=>{const i=Te(Xa(t),Ye)+Te(t.startTimestampOffset??0,Ye),a=!Et(e)||!Et(i),o=a?rt:X;let n;if(t.type==="video"){const l=t.track.metadata.rotation;n=vr(l??0)}else n=br;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:qt(t);return me("tkhd",+a,s,[o(e),o(e),X(t.track.id),X(0),o(i),Array(8).fill(0),se(0),se(r),gr(t.type==="audio"?1:0),se(0),yr(n),Ze(t.type==="video"?t.info.width:0),Ze(t.type==="video"?t.info.height:0)])},Sp=(t,e)=>{const i=Te(e,Ye),a=Te(Xa(t),Ye),o=!Et(i)||!Et(a),n=o?rt:X,s=o?bp:vt;return ne("edts",void 0,[me("elst",o?1:0,0,[X(2),n(i),s(-1),Ze(1),n(a),s(0),Ze(1)])])},xp=(t,e)=>ne("mdia",void 0,[Cp(t,e),Zo(!0,Ep[t.type],Pp[t.type]),Mp(t)]),Cp=(t,e)=>{const i=Te(Xa(t),t.timescale),a=!Et(e)||!Et(i),o=a?rt:X;return me("mdhd",+a,0,[o(e),o(e),X(t.timescale),o(i),se(Pr(t.track.metadata.languageCode??Ph)),se(0)])},Ep={video:"vide",audio:"soun",subtitle:"text"},Pp={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Zo=(t,e,i,a="\0\0\0\0")=>me("hdlr",0,0,[t?ve("mhlr"):X(0),ve(e),ve(a),X(0),X(0),ve(i,!0)]),Mp=t=>ne("minf",void 0,[Ip[t.type](),Ap(),Rp(t)]),Ip={video:()=>me("vmhd",0,1,[se(0),se(0),se(0),se(0)]),audio:()=>me("smhd",0,0,[se(0),se(0)]),subtitle:()=>me("nmhd",0,0)},Ap=()=>ne("dinf",void 0,[Bp()]),Bp=()=>me("dref",0,0,[X(1)],[Fp()]),Fp=()=>me("url ",0,1),Rp=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ne("stbl",void 0,[zp(t),Yp(t),e?a2(t):null,e?o2(t):null,e2(t),t2(t),i2(t),Jp(t)])},zp=t=>{let e;if(t.type==="video")e=Op(T2(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Er(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);$(i),e=qp(i,t)}else t.type==="subtitle"&&(e=Zp(x2[t.track.source._codec],t));return $(e),me("stsd",0,0,[X(1)],[e])},Op=(t,e)=>ne(t,[Array(6).fill(0),se(1),se(0),se(0),Array(12).fill(0),se(e.info.width),se(e.info.height),X(4718592),X(4718592),X(0),se(1),xe(10),ve("Mediabunny"),Array(21).fill(0),se(e.info.hasAlphaChannel?32:24),Go(65535)],[_2[e.track.source._codec]?.(e)??null,Lp(e),Sh(e.info.decoderConfig.colorSpace)?Hp(e):null]),Lp=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ne("pasp",[X(t.info.pixelAspectRatio.num),X(t.info.pixelAspectRatio.den)]),Hp=t=>ne("colr",[ve(t.muxer.isQuickTime?"nclc":"nclx"),se(Oa[t.info.decoderConfig.colorSpace.primaries]),se(La[t.info.decoderConfig.colorSpace.transfer]),se(Ha[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:xe((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Np=t=>t.info.decoderConfig&&ne("avcC",[...We(t.info.decoderConfig.description)]),Up=t=>t.info.decoderConfig&&ne("hvcC",[...We(t.info.decoderConfig.description)]),Tr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),o=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(n<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?Oa[e.colorSpace.primaries]:2,d=i[6]?Number(i[6]):e.colorSpace?.transfer?La[e.colorSpace.transfer]:2,u=i[7]?Number(i[7]):e.colorSpace?.matrix?Ha[e.colorSpace.matrix]:2;return me("vpcC",1,0,[xe(a),xe(o),xe(l),xe(c),xe(d),xe(u),se(0)])},Dp=t=>ne("av1C",Vh(t.info.decoderConfig.codec)),qp=(t,e)=>{let i=0,a,o=16;const n=Xe.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:r}=Wt(s);o=8*r,o>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),se(1),se(i),se(0),X(0),se(e.info.numberOfChannels),se(o),se(0),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0)];else{const s=n?0:-2;a=[Array(6).fill(0),se(1),se(i),se(0),X(0),se(e.info.numberOfChannels),se(Math.min(o,16)),Go(s),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0),n?[X(1),X(o/8),X(e.info.numberOfChannels*o/8)]:[X(0),X(0),X(0)],X(2)]}return ne(t,a,[S2(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Qo=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...xe(e),...xe(21),...pr(0),...X(0),...X(0)];if(t.info.decoderConfig.description){const a=We(t.info.decoderConfig.description);i=[...i,...xe(5),...Xo(a.byteLength),...a]}return i=[...se(1),...xe(0),...xe(4),...Xo(i.length),...i,...xe(6),...xe(1),...xe(2)],i=[...xe(3),...Xo(i.length),...i],me("esds",0,0,i)},It=t=>ne("wave",void 0,[$p(t),Wp(t),ne("\0\0\0\0")]),$p=t=>ne("frma",[ve(Er(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Wp=t=>{const{littleEndian:e}=Wt(t.track.source._codec);return ne("enda",[se(+e)])},jp=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,o=0,n=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){$(r.byteLength>=18);const l=We(r),c=km(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,o=c.outputGain,n=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return ne("dOps",[xe(0),xe(e),se(i),X(a),Go(o),xe(n),...s])},Vp=t=>{const e=t.info.decoderConfig?.description;$(e);const i=We(e);return me("dfLa",0,0,[...i.subarray(4)])},lt=t=>{const{littleEndian:e,sampleSize:i}=Wt(t.track.source._codec),a=+e;return me("pcmC",0,0,[xe(a),xe(8*i)])},Gp=t=>{$(t.info.primingPacket);const e=_m(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Ae(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),ne("dac3",[...i])},Kp=t=>{$(t.info.primingPacket);const e=xm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),o=new Uint8Array(a),n=new Ae(o);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return ne("dec3",[...o])},Xp=t=>{$(t.info.primingPacket);const e=Nm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ne("ddts",[...qm(e)])},Zp=(t,e)=>ne(t,[Array(6).fill(0),se(1)],[C2[e.track.source._codec](e)]),Qp=t=>ne("vttC",[...ot.encode(t.info.config.description)]),Yp=t=>me("stts",0,0,[X(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[X(e.sampleCount),X(e.sampleDelta)])]),Jp=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return me("stss",0,0,[X(e.length),e.map(([i])=>X(i+1))])},e2=t=>me("stsc",0,0,[X(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[X(e.firstChunk),X(e.samplesPerChunk),X(1)])]),t2=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Wt(t.track.source._codec);return me("stsz",0,0,[X(e*t.info.numberOfChannels),X(t.samples.reduce((i,a)=>i+Te(a.duration,t.timescale),0))])}return me("stsz",0,0,[X(0),X(t.samples.length),t.samples.map(e=>X(e.size))])},i2=t=>t.finalizedChunks.length>0&&Ke(t.finalizedChunks).offset>=2**32?me("co64",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>rt(e.offset))]):me("stco",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>X(e.offset))]),a2=t=>me("ctts",1,0,[X(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[X(e.sampleCount),vt(e.sampleCompositionTimeOffset)])]),o2=t=>{let e=1/0,i=-1/0,a=1/0,o=-1/0;$(t.compositionTimeOffsetTable.length>0),$(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,Te(r.timestamp,t.timescale)),o=Math.max(o,Te(r.timestamp+r.duration,t.timescale))}const n=Math.max(-e,0);return o>=2**31?null:me("cslg",0,0,[vt(n),vt(e),vt(i),vt(a),vt(o)])},n2=t=>ne("mvex",void 0,t.map(s2)),s2=t=>me("trex",0,0,[X(t.track.id),X(1),X(0),X(0),X(0)]),_r=(t,e)=>ne("moof",void 0,[r2(t),...e.map(l2)]),r2=t=>me("mfhd",0,0,[X(t)]),Sr=t=>{let e=0,i=0;const a=0,o=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|a<<8|o},l2=t=>ne("traf",void 0,[c2(t),f2(t),d2(t)]),c2=t=>{$(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Sr(i)};return me("tfhd",0,e,[X(t.track.id),X(a.duration),X(a.size),X(a.flags)])},f2=t=>($(t.currentChunk),me("tfdt",1,0,[rt(Te(t.currentChunk.startTimestamp,t.timescale))])),d2=t=>{$(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),a=t.currentChunk.samples.map(Sr),o=t.currentChunk.samples.map(h=>Te(h.timestamp-h.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),r=new Set(a),l=new Set(o),c=r.size===2&&a[0]!==a[1],d=n.size>1,u=s.size>1,p=!c&&r.size>1,f=l.size>1||[...l].some(h=>h!==0);let m=0;return m|=1,m|=4*+c,m|=256*+d,m|=512*+u,m|=1024*+p,m|=2048*+f,me("trun",1,m,[X(t.currentChunk.samples.length),X(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?X(a[0]):[],t.currentChunk.samples.map((h,g)=>[d?X(e[g]):[],u?X(i[g]):[],p?X(a[g]):[],f?vt(o[g]):[]])])},u2=t=>ne("mfra",void 0,[...t.map(h2),m2()]),h2=t=>me("tfra",1,0,[X(t.track.id),X(63),X(t.finalizedChunks.length),t.finalizedChunks.map(i=>[rt(Te(i.samples[0].timestamp,t.timescale)),rt(i.moofOffset),X(i.trafIndex+1),X(1),X(1)])]),m2=()=>me("mfro",0,0,[X(0)]),p2=()=>ne("vtte"),g2=(t,e,i,a,o)=>ne("vttc",void 0,[o!==null?ne("vsid",[vt(o)]):null,i!==null?ne("iden",[...ot.encode(i)]):null,e!==null?ne("ctim",[...ot.encode(vp(e))]):null,a!==null?ne("sttg",[...ot.encode(a)]):null,ne("payl",[...ot.encode(t)])]),v2=t=>ne("vtta",[...ot.encode(t)]),b2=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const o=w2(a);o&&e.push(o)}else if(i==="mdta"){const o=k2(a);o&&e.push(o)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&y2(e,t.output._metadataTags);return e.length===0?null:ne("udta",void 0,e)},y2=(t,e)=>{for(const{key:i,value:a}of xs(e))switch(i){case"title":t.push(ct("©nam",a));break;case"description":t.push(ct("©des",a));break;case"artist":t.push(ct("©ART",a));break;case"album":t.push(ct("©alb",a));break;case"albumArtist":t.push(ct("albr",a));break;case"genre":t.push(ct("©gen",a));break;case"date":t.push(ct("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(ct("©cmt",a));break;case"lyrics":t.push(ct("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:qt(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(o=>o.type===i)||(typeof a=="string"?t.push(ct(i,a)):a instanceof Uint8Array&&t.push(ne(i,Array.from(a))))}},ct=(t,e)=>{const i=ot.encode(e);return ne(t,[se(i.length),se(Pr("und")),Array.from(i)])},xr={"image/jpeg":13,"image/png":14,"image/bmp":27},Cr=(t,e)=>{const i=[];for(const{key:a,value:o}of xs(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:Qe(o)});break;case"description":i.push({key:e?"description":"©des",value:Qe(o)});break;case"artist":i.push({key:e?"artist":"©ART",value:Qe(o)});break;case"album":i.push({key:e?"album":"©alb",value:Qe(o)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Qe(o)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Qe(o)});break;case"genre":i.push({key:e?"genre":"©gen",value:Qe(o)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Qe(o)});break;case"date":i.push({key:e?"date":"©day",value:Qe(o.toISOString().slice(0,10))});break;case"images":for(const n of o)n.kind==="coverFront"&&i.push({key:"covr",value:ne("data",[X(xr[n.mimeType]??0),X(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${o}/${t.tracksTotal}`:o.toString();i.push({key:"track",value:Qe(n)})}else i.push({key:"trkn",value:ne("data",[X(0),X(0),se(0),se(o),se(t.tracksTotal??0),se(0)])});break;case"discNumber":e||i.push({key:"disc",value:ne("data",[X(0),X(0),se(0),se(o),se(t.discsTotal??0),se(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:qt(a)}if(t.raw)for(const a in t.raw){const o=t.raw[a];o==null||!e&&a.length!==4||i.some(n=>n.key===a)||(typeof o=="string"?i.push({key:a,value:Qe(o)}):o instanceof Uint8Array?i.push({key:a,value:ne("data",[X(0),X(0),Array.from(o)])}):o instanceof Ps&&i.push({key:a,value:ne("data",[X(xr[o.mimeType]??0),X(0),Array.from(o.data)])}))}return i},w2=t=>{const e=Cr(t,!1);return e.length===0?null:me("meta",0,0,void 0,[Zo(!1,"mdir","","appl"),ne("ilst",void 0,e.map(i=>ne(i.key,void 0,[i.value])))])},k2=t=>{const e=Cr(t,!0);return e.length===0?null:ne("meta",void 0,[Zo(!1,"mdta",""),me("keys",0,0,[X(e.length)],e.map(i=>ne("mdta",[...ot.encode(i.key)]))),ne("ilst",void 0,e.map((i,a)=>{const o=String.fromCharCode(...X(a+1));return ne(o,void 0,[i.value])}))])},Qe=t=>ne("data",[X(1),X(0),...ot.encode(t)]),T2=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},_2={avc:Np,hevc:Up,vp8:Tr,vp9:Tr,av1:Dp,prores:null},Er=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},S2=(t,e)=>{switch(t){case"aac":return Qo;case"mp3":return Qo;case"opus":return jp;case"vorbis":return Qo;case"flac":return Vp;case"ac3":return Gp;case"eac3":return Kp;case"dts":return Xp}if(e)switch(t){case"pcm-s24":return It;case"pcm-s24be":return It;case"pcm-s32":return It;case"pcm-s32be":return It;case"pcm-f32":return It;case"pcm-f32be":return It;case"pcm-f64":return It;case"pcm-f64be":return It}else switch(t){case"pcm-s16":return lt;case"pcm-s16be":return lt;case"pcm-s24":return lt;case"pcm-s24be":return lt;case"pcm-s32":return lt;case"pcm-s32be":return lt;case"pcm-f32":return lt;case"pcm-f32be":return lt;case"pcm-f64":return lt;case"pcm-f64be":return lt}return null},x2={webvtt:"wvtt"},C2={webvtt:Qp},Pr=t=>{$(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Yo{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){$(!this.started),this.target._start(),this.started=!0}write(e){$(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return $(this.started&&!this.finalized),this.target._flush()}async finalize(){$(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let o=this.trackedWrites.byteLength;for(;o<a;)o*=2;if(o!==this.trackedWrites.byteLength){const n=new Uint8Array(o);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class bt extends Lo{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new E2(this,e)}}const Jo=2**16,en=2**32;class Za extends bt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Jo,{maxByteLength:en})}catch{this._buffer=new ArrayBuffer(Jo),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Jo);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>en)throw new Error(`ArrayBuffer exceeded maximum size of ${en} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),o=new Uint8Array(a);o.set(this._bytes,0),this._buffer=a,this._bytes=o}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class E2 extends bt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class tn{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ye=57600,P2=2082844800,M2=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},Te=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class I2 extends gp{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Za,this.auxWriter=new Yo(this.auxTarget,!1),this.auxBoxWriter=new Ga(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=ys(),this.creationTime=Math.floor(Date.now()/1e3)+P2,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof zr,this.isCmaf=i instanceof Rr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Rr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof Za),this.boxWriter=new Ga(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Za?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),o=new Yo(a,!0);o.start(),this.initWriter=o,this.initBoxWriter=new Ga(o)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if($(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(yp({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:o,start:n}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(o,n)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||($(this.writer),$(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Ka(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return $m({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const o=this.trackDatas.find(f=>f.track===e);if(o)return o;Rs(a,e.source._codec),$(a),$(a.decoderConfig);const n={...a.decoderConfig};$(n.codedWidth!==void 0),$(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=rm(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=lm(f),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=um(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=ym(f),s=!0}const r=Bh(1/(e.metadata.frameRate??Ye),1e6).den,l=n.displayAspectWidth,c=n.displayAspectHeight,d=l===void 0||c===void 0?{num:1,den:1}:Cs({num:l*n.codedHeight,den:c*n.codedWidth}),u=n.codec==="ap4h"||n.codec==="ap4x",p={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:d,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:u},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(p),this.trackDatas.sort((f,m)=>f.track.id-m.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),p}getAudioTrackData(e,i,a){const o=this.trackDatas.find(l=>l.track===e);if(o)return o;zs(a,e.source._codec),$(a),$(a.decoderConfig);const n={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=Gs(Vi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=Ua[l.samplingFrequencyIndex],d=Ho[l.channelConfiguration];if(c===void 0||d===void 0)throw new Error("Invalid ADTS frame header.");n.description=Ms({objectType:l.objectType,sampleRate:c,numberOfChannels:d}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&Xe.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(n=>n.track===e);if(a)return a;im(i),$(i),$(i.config);const o={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(o),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}async addEncodedVideoPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,a);let s=i.data;if(n.info.requiresAnnexBTransformation){const l=[...Ui(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=sm(l,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,r)}finally{o()}}async addEncodedAudioPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,a);let s=i.data;if(n.info.requiresAdtsStripping){const d=Gs(Vi.tempFromBytes(s));if(!d)throw new Error("Expected ADTS frame, didn't get one.");const u=d.crcCheck===null?Wm:jm;s=s.subarray(u)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(n.info.requiresPcmTransformation){const u=Wt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(l=s.byteLength/u/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const p=r-n.info.expectedNextPcmPacketTimestamp;if(p<.01)r=n.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,p);r=n.info.expectedNextPcmPacketTimestamp+f}}n.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(n,s,r,l,i.type);await this.registerSample(n,c)}finally{o()}}async padWithSilence(e,i,a){const o=Te(a,e.timescale);if(a=o/e.timescale,o>0){const{sampleSize:n,silentValue:s}=Wt(e.info.decoderConfig.codec),r=o*e.info.numberOfChannels,l=new Uint8Array(n*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const o=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,a);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{o()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)$(c.timestamp<=i),$(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const o=[...a].sort((c,d)=>c-d),n=o[0],s=o[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const c=p2();this.auxBoxWriter.writeBox(c);const d=this.auxTarget._getSlice(0,this.auxWriter.getPos()),u=this.createSampleForTrack(e,d,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,u),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const d=e.cueQueue[c];if(d.timestamp>=s)break;mr.lastIndex=0;const u=mr.test(d.text),p=d.timestamp+d.duration;let f=e.cueToSourceId.get(d);if(f===void 0&&s<p&&(f=e.nextSourceId++,e.cueToSourceId.set(d,f)),d.notes){const h=v2(d.notes);this.auxBoxWriter.writeBox(h)}const m=g2(d.text,u?n:null,d.identifier??null,d.settings??null,f??null);this.auxBoxWriter.writeBox(m),p===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,n,s-n,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,o,n){return{timestamp:a,decodeTimestamp:a,duration:o,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:Te(o,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let o=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],r=Te(s.duration,e.timescale);o+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:o,sampleDelta:1});else{const n=Ke(e.timeToSampleTable);n.sampleCount+=o}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(o=>o.timestamp).sort((o,n)=>o-n);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let o=0;o<e.timestampProcessingQueue.length;o++){const n=e.timestampProcessingQueue[o];n.decodeTimestamp=a[o];const s=Te(n.timestamp-n.decodeTimestamp,e.timescale),r=Te(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){$(e.lastSample);const l=Te(n.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if($(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let d=Ke(e.timeToSampleTable);if($(d),d.sampleCount===1){d.sampleDelta=c;const p=e.timeToSampleTable[e.timeToSampleTable.length-2];p&&p.sampleDelta===c&&(p.sampleCount++,e.timeToSampleTable.pop(),d=p)}else d.sampleDelta!==c&&(d.sampleCount--,e.timeToSampleTable.push(d={sampleCount:1,sampleDelta:c}));d.sampleDelta===r?d.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const u=Ke(e.compositionTimeOffsetTable);$(u),u.sampleCompositionTimeOffset===s?u.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=Te(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,$(e.lastSample),$(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){$(i.type==="key");const o=Te(i.timestamp,e.timescale,!1),n=Math.round(o-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const o=e.track.metadata.maximumPacketCount;if($(o!==void 0),e.samples.length>o)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${o}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const o=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});o>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=o>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),$(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if($(!this.isFragmented),$(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,o)=>a+Te(o.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ke(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)$(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if($(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<a&&(i=n,a=n.sampleQueue[0].timestamp)}if(!i)break;const o=i.sampleQueue.shift();await this.addSampleToTrack(i,o)}}async finalizeFragment(e=!this.isCmaf){if($(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;$(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const m=Gi(this);if(f.writeBox(m),this.formatOptions.onMoov){const{data:h,start:g}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(h,g)}if(this.isCmaf){$(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Ga(this.writer);const h=this.boxWriter.measureBox(wr()),g=this.boxWriter.measureBox(kr(this,0));this.segmentHeaderSize=h+g,this.writer.seek(this.segmentHeaderSize)}}$(this.writer),$(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,o=_r(a,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(o);let r=s+qo,l=1/0;for(let f=0;f<i.length;f++){const m=i[f];m.currentChunk.offset=r,m.currentChunk.moofOffset=n,m.currentChunk.trafIndex=f;for(const h of m.currentChunk.samples)r+=h.size;l=Math.min(l,m.currentChunk.startTimestamp)}const c=r-s,d=c>=2**32;if(d)for(const f of i)f.currentChunk.offset+=Vs-qo;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const u=_r(a,i);if(this.boxWriter.writeBox(u),this.formatOptions.onMoof){const{data:f,start:m}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,m,l)}$(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const p=Ka(d);p.size=c,this.boxWriter.writeBox(p),this.writer.seek(s+(d?Vs:qo));for(const f of i)for(const m of f.currentChunk.samples)this.writer.write(m.data),m.data=null;if(this.formatOptions.onMdat){const{data:f,start:m}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,m)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){$(this.writer),$(this.boxWriter),this.ensureOneEnabledTrack();const e=Gi(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;$(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Ka(!0),this.boxWriter.writeBox(this.mdat);for(const o of this.trackDatas){for(const n of o.sampleQueue)await this.addSampleToTrack(o,n);o.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){$(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;$(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(o=>o.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(o=>o.type===e);if(i.length===0)continue;if(!i.some(o=>o.track.metadata.disposition?.default!==!1)){const o=i[0];o.track.metadata.disposition={...o.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){$(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const o=i.samples[a];o.timestamp-=i.startTimestampOffset,o.decodeTimestamp-=i.startTimestampOffset}if($(this.writer),$(this.boxWriter),this.fastStart==="in-memory"){this.mdat=Ka(!1);let i;for(let o=0;o<2;o++){const n=Gi(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)$(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=Gi(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const o of this.finalizedChunks)for(const n of o.samples)$(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(wr()),this.boxWriter.writeBox(kr(this,i))}else{const i=this.writer.getPos(),a=u2(this.trackDatas);this.boxWriter.writeBox(a);const o=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(o)}else{$(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);$(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const o=Gi(this);if(this.fastStart==="reserve"){$(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(wp(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class A2{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){$(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,o)=>a[o*e]:e===1&&i===4?this.channelMixer=(a,o,n)=>a[o*e]*+(n<2):e===1&&i===6?this.channelMixer=(a,o,n)=>a[o*e]*+(n===2):e===2&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .5*(a[n]+a[n+1])}:e===2&&i===4?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .25*(a[n]+a[n+1]+a[n+2]+a[n+3])}:e===4&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return .5*(a[s+n]+a[s+n+2])}:e===4&&i===6?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]:n===2||n===3?0:a[s+n-2]}:e===6&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return Math.SQRT1_2*(a[n]+a[n+1])+a[n+2]+.5*(a[n+4]+a[n+5])}:e===6&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return a[s+n]+Math.SQRT1_2*(a[s+2]+a[s+n+4])}:e===6&&i===4?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]+Math.SQRT1_2*a[s+2]:a[s+n+2]}:this.channelMixer=(a,o,n)=>n<e?a[o*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),$(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),o=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(o,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,r=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const d=c-this.bufferStartFrame;$(d<this.bufferSizeInFrames);const f=(c/this.targetSampleRate-n)*this.sourceSampleRate,m=Math.floor(f),h=Math.ceil(f),g=f-m;for(let v=0;v<this.targetNumberOfChannels;v++){let b=0,y=0;m>=0&&m<e.numberOfFrames&&(b=this.channelMixer(o,m,v)),h>=0&&h<e.numberOfFrames&&(y=this.channelMixer(o,h,v));const T=b+g*(y-b),_=d*this.targetNumberOfChannels+v;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=d:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,d)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;$(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new Ue({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var B2=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},F2=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class an{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class Mr extends an{constructor(e){if(super(),this._connectedTrack=null,!pt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${pt.join(", ")}.`);this._codec=e}}const Ir=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class R2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new _s,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const o=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||r&&s!=="passThrough"){let u=n.transform?.width,p=n.transform?.height,f=n.transform?.fit??"fill";r&&s!=="passThrough"&&($(this.outputWidth),$(this.outputHeight),$(s!=="deny"),u=this.outputWidth,p=this.outputHeight,f=s);const m=await e.transform({width:u,height:p,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:f,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=m.displayWidth,this.outputHeight=m.displayHeight),i&&e.close(),e=m,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const d=n.transform?.frameRate;if(d!==void 0){const u=e.timestamp+e.duration,p=Ts(e.timestamp,d);if(this.frameRateLastSample!==null)if(p<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=u;return}else await this.padFrameRate(p,a);e===o&&(e=e.clone(),i=!0),e.setTimestamp(p),e.setDuration(1/d),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=p,this.frameRateLastEndTimestamp=u}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let o;if(a.transform?.process){let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const r of n)r instanceof Oe?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Oe(r)):s.push(new Oe(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of n)(l instanceof Oe&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}o=s}else o=[e];try{for(const n of o){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),$(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(n.timestamp/s),l={...this.defaultEncodeOptions,...n.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const d=n.clone(),u=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(d,c)).catch(p=>this.setError(p)).finally(()=>{this.customEncoderQueueSize--,d.close()});this.customEncoderQueueSize>=4&&await u}else{$(this.encoder);const d=n.toVideoFrame(),u=bs(this.preciseTimings,d.timestamp,f=>f.microsecondTimestamp),p=u!==-1?this.preciseTimings[u]:null;if(p&&p.microsecondTimestamp===d.timestamp?(p.timestamp!==n.timestamp&&(p.timestampIsValid=!1),p.duration!==n.duration&&(p.durationIsValid=!1)):(this.preciseTimings.splice(u+1,0,{microsecondTimestamp:d.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!d.format&&!d.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(d,c)}finally{d.close()}}else{this.splitter||(this.splitter=new z2);const{colorFrame:m,alphaFrame:h}=await this.splitter.split(d);this.alphaFrameQueue.push(h);try{this.encoder.encode(m,c)}finally{m.close()}}else try{this.encoder.encode(d,c)}finally{d.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of o)n!==e&&n.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;$(this.frameRateLastSample);const o=Math.round((e-this.frameRateLastTimestamp)*a);for(let n=1;n<o;n++){const s={stack:[],error:void 0,hasError:!1};try{const r=B2(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+n/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{F2(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=Va(this.encodingConfig.quality,this.encodingConfig.bitrate);$(i!==void 0);const a=sr({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let o=null,n;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),n=ur.find(d=>d.supports(this.encodingConfig.codec,l)),n){o=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){o=r;break}}catch{}}if(!o){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:d})=>d!==null?`quantizer ${d}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=o.config;if(o.quantizer!==null&&(this.defaultEncodeOptions=dr(this.encodingConfig.codec,o.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof st))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Ir(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,d=0;const u=(f,m,h)=>{const g={};if(m){const _=new Uint8Array(m.byteLength);m.copyTo(_),g.alpha=_}let v=st.fromEncodedChunk(f,g);const b=bs(this.preciseTimings,f.timestamp,_=>_.microsecondTimestamp),y=b!==-1?this.preciseTimings[b]:null;let T=null;this.emittedEncoderPackets===0&&v.type==="delta"&&h?.decoderConfig&&(T=Tm(this.encodingConfig.codec,h.decoderConfig,v.data)),(y&&y.microsecondTimestamp===f.timestamp||T!==null)&&(v=v.clone({timestamp:y?.timestampIsValid?y.timestamp:void 0,duration:y?.durationIsValid?y.duration:void 0,type:T??void 0})),Ir(this.source._connectedTrack,v),this.encodingConfig.onEncodedPacket?.(v,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,v,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},p=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,m)=>{if(!this.alphaEncoder){u(f,null,m);return}const h=this.alphaFrameQueue.shift();$(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),d++,h.close(),r.push({chunk:f,meta:m})):d===0?u(f,null,m):(l.push(c+d),r.push({chunk:f,meta:m}))},error:f=>{f.stack=p,this.setError(f)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(m,h)=>{d--;const g=r.shift();for($(g!==void 0),u(g.chunk,m,g.meta),c++;l.length>0&&l[0]===c;){l.shift();const v=r.shift();$(v!==void 0),u(v.chunk,null,v.meta)}},error:m=>{m.stack=f,this.setError(m)}}),this.alphaEncoder.configure(s)}}$(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=Ts(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Hh(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let on=null;class z2{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!on){const o=new Blob([`(${O2.toString()})()`],{type:"application/javascript"});on=URL.createObjectURL(o)}this.worker=new Worker(on),this.worker.addEventListener("message",o=>{const n=o.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",o=>{const n=new Error(o.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=ys();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const O2=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:r}=n.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=n.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return o(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,d=l*c,u=Math.ceil(l/2),p=Math.ceil(c/2),f=d+u*p*2,m=new Uint8Array(f);for(let b=0,y=3;b<d;b++,y+=4)m[b]=n[y];m.fill(128,d);const h=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),g={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[m.buffer]},v=new VideoFrame(m,g);return{colorFrame:h,alphaFrame:v}},o=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,d=s.includes("P10"),u=s.includes("P12"),p=d||u?2:1;let f,m;s.startsWith("I420")?(f=Math.ceil(l/2),m=Math.ceil(c/2)):s.startsWith("I422")?(f=Math.ceil(l/2),m=c):(f=l,m=c);const h=l*c,g=f*m,v=h*p,b=g*p,y=h*p,T=v+b*2,_=s.replace("A",""),E=Math.ceil(l/2),P=Math.ceil(c/2),I=E*P,M=I*p,N=y+2*M,j=new Uint8Array(N),x=T;j.set(n.subarray(x,x+y),0);const z=y,k=d?512:u?2048:128;p===1?j.fill(k,z):new Uint16Array(j.buffer,z,2*I).fill(k);const D=d?"I420P10":u?"I420P12":"I420",Z=new VideoFrame(n.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),B={format:D,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[j.buffer]},W=new VideoFrame(j,B);return{colorFrame:Z,alphaFrame:W}}};class L2 extends Mr{constructor(e){op(e),super(e.codec),this._encoder=new R2(this,e)}add(e,i){if(!(e instanceof Oe))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Ar extends an{constructor(e){if(super(),this._connectedTrack=null,!$t.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${$t.join(", ")}.`);this._codec=e}}class H2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new _s,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new A2({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&tp(e.format)!==a.transform.sampleFormat){const o=ap(e,a.transform.sampleFormat);i&&e.close(),e=o,i=!0}if(a.transform?.process)try{let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);try{for(const n of o)if(!(n instanceof Ue))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of o)await this.encodeSample(n,!0)}finally{for(const n of o)n instanceof Ue&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),$(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),o=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=o;else{const n=a-this.lastEndSampleIndex;if(n>=64){const s=new Ue({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),o=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await o,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{$(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(o=>this.encoder.addEventListener("dequeue",o,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){$(this.outputSampleSize),$(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:o,sampleRate:n,timestamp:s}=e,r=2048,l=[];for(let p=0;p<o;p+=r){const f=Math.min(r,e.numberOfFrames-p),m=f*a*this.outputSampleSize,h=new ArrayBuffer(m),g=new DataView(h);l.push({frameCount:f,view:g})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),d=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let p=0;p<a;p++){e.copyTo(d,{planeIndex:p,format:"f32-planar"});for(let f=0;f<l.length;f++){const{frameCount:m,view:h}=l[f];for(let g=0;g<m;g++)this.writeOutputValue(h,(g*a+p)*this.outputSampleSize,d[f*r+g])}}i&&e.close();const u={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:n}};for(let p=0;p<l.length;p++){const{frameCount:f,view:m}=l[p],h=m.buffer,g=p*r,v=new st(new Uint8Array(h),"key",s+g/n,f/n);this.encodingConfig.onEncodedPacket?.(v,u),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,v,u)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,o=Va(this.encodingConfig.quality,this.encodingConfig.bitrate),n=lr({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:o});this.encodingConfig.onEncoderConfig?.(n);const s=hr.find(r=>r.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof st))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(Xe.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,d)=>{if(this.encodingConfig.codec==="aac"&&d?.decoderConfig){let p=!1;if(!d.decoderConfig.description||d.decoderConfig.description.byteLength<2?p=!0:p=$h(We(d.decoderConfig.description)).objectType===0,p){const f=Number(Ke(n.codec.split(".")));d.decoderConfig.description=Ms({objectType:f,numberOfChannels:d.decoderConfig.numberOfChannels,sampleRate:d.decoderConfig.sampleRate})}}let u=st.fromEncodedChunk(c);u=u.clone({timestamp:ks(u.timestamp,n.sampleRate),duration:c.duration!=null?ks(u.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(u,d),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,u,d).catch(p=>{this.setError(p)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(n)}$(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:o}=Wt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint8(s,Fe((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,r)=>{n.setInt8(s,Fe(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,r)=>{const l=Fe(Math.floor(r*32767),-32768,32767);n.setUint8(s,up(l))}:i==="alaw"?this.writeOutputValue=(n,s,r)=>{const l=Fe(Math.floor(r*32767),-32768,32767);n.setUint8(s,hp(l))}:$(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint16(s,Fe((r+1)*32767.5,0,65535),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt16(s,Fe(Math.round(r*32767),-32768,32767),o):$(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,r)=>Ao(n,s,Fe((r+1)*83886075e-1,0,16777215),o):i==="signed"?this.writeOutputValue=(n,s,r)=>Ch(n,s,Fe(Math.round(r*8388607),-8388608,8388607),o):$(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint32(s,Fe((r+1)*21474836475e-1,0,4294967295),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt32(s,Fe(Math.round(r*2147483647),-2147483648,2147483647),o):i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat32(s,r,o):$(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat64(s,r,o):$(!1);break;default:qt(a),$(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class N2 extends Ar{constructor(e){np(e),super(e.codec),this._accumulatedTime=0,this._encoder=new H2(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=Ue._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class U2 extends an{constructor(e){if(super(),this._connectedTrack=null,!Hi.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Hi.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Br{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>pt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>$t.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Hi.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class nn extends Br{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new I2(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Fr extends nn{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...pt,...No,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Hi]}_codecUnsupportedHint(e){return new zr().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Rr extends nn{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...pt,...No,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Hi]}}class zr extends nn{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...pt,...$t]}_codecUnsupportedHint(e){return new Fr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Or=["video","audio","subtitle"];class Ki{constructor(e,i,a,o,n){this.id=e,this.output=i,this.type=a,this.source=o,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Ki))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Es(this.metadata.group),a=Es(e.metadata.group);for(const o of i)if(this.type!==e.type&&a.some(r=>o===r)||a.some(r=>o._pairedGroups.has(r)))return!0;return!1}}class D2 extends Ki{constructor(e,i,a,o){super(e,i,"video",a,o)}}class q2 extends Ki{constructor(e,i,a,o){super(e,i,"audio",a,o)}}class $2 extends Ki{constructor(e,i,a,o){super(e,i,"subtitle",a,o)}}class Xi{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Xi))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const sn=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Ah(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&qh(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Xi)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Xi))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class W2 extends Lo{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Xi,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new vs,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Br))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof bt||e.target instanceof tn))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof bt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof bt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof bt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){$(this._target instanceof tn);const i=this._target.getTarget(e),a=o=>{if(!(o instanceof bt))throw new TypeError("getTarget must return a Target.");return o};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){$(this._target instanceof tn);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if($(this._initTarget!==null),this._initTarget instanceof bt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof bt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=o=>(this.state==="canceled"?o._close():this._rememberTarget(o),this._emit("target",{target:o,request:e,isRoot:!0}),this._rootTarget=o,o);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new Yo(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof Mr))throw new TypeError("source must be a VideoSource.");if(sn(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Rs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof st))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new D2(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof Ar))throw new TypeError("source must be an AudioSource.");if(sn(i),i.decoderConfig!==void 0&&zs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof st))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new q2(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof U2))throw new TypeError("source must be a SubtitleSource.");sn(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new $2(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(Dh(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),o=i[e.type].max;if(a===o)throw new Error(o===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${o} ${e.type} track${o===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of Or){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of Or){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)throw new Error(n===e[a].max?`${this.format._name} requires exactly ${n} ${a} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${a} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(Se._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const o=this.tracks.map(n=>n.source._start());await Promise.all(o)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return Se._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&Se._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(Se._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const j2={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},V2=new Set(["window","buddy","dancer"]);function Lr(t){return!V2.has(t.typeId)}const G2=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function K2(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!G2.has(i))return a}));return JSON.stringify(e,null,2)}function X2(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>Z2(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!1),e.sources=e.sources.map(i=>{const a=j2[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Lr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(Lr)}))}:i.data})),e}function Z2(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function Q2(t,e){const i=new Blob([e],{type:"application/json"});di(t,i)}function di(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const At=1280,Bt=1920,Y2=30,Hr=8,J2=16,Nr=.97,rn=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function Ur(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:wt(t*a),height:wt(e*a)}}function eg(t,e){const i=t/Math.max(e,1);let a="16:9",o=1/0;for(const n of rn){const s=Math.abs(i-n.rw/n.rh);s<o&&(o=s,a=n.id)}return a}function Dr(t,e,i=1280){if(t<2||e<2)return Ur(16,9,i);const a=Math.max(t,e),o=i/a;return{width:wt(t*o),height:wt(e*o)}}function tg(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function qr(t){return Math.min(Y2,Math.max(12,Math.round(t||30)))}function $r(t){return Math.min(32,Math.max(1,t||4))}function Wr(t,e,i){const a=U(t||12,Hr,J2),o=e*i/(At*720);return Math.min(20,Math.max(Hr,Math.round(a*Math.max(1,o))))}const ig=Bt,ag=Bt;function ln(t,e=!1){const i=e?ig:ag;return gn(t.exportSettings.width,t.exportSettings.height,i,i)}async function og(t,e,i){const{width:a,height:o,format:n,quality:s,filename:r}=e.exportSettings,l=n==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,wt(a),wt(o),l,n==="jpg"?Math.max(s,Nr):s);di(`${r}.${n==="jpg"?"jpg":"png"}`,c)}async function ng(t,e,i){const{fps:a,duration:o,filename:n,quality:s}=e.exportSettings,{width:r,height:l}=ln(e,!1),c=Po(e),d=Math.max(1,Math.round(o*a)),u=new Th,p=u.folder(n)??u,f=document.createElement("canvas");for(let h=0;h<d;h++){const g=c+h/a;i?.(h,d),t.paintFrame(e,g,r,l,f);const v=await dg(f,"image/png",s);p.file(`${n}_${String(h).padStart(5,"0")}.png`,await v.arrayBuffer()),await cn()}const m=await u.generateAsync({type:"blob"});di(`${n}_sequence.zip`,m)}async function jr(t,e,i,a=!1){const o=await Vr(t,e,cg(),i,a);di(`${e.exportSettings.filename}.webm`,o)}async function sg(t,e,i,a=!1){try{return await rg(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(o){const n=fg();if(n){const r=await Vr(t,e,n,i,a);return di(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await jr(t,e,i,a),`MP4 not available (${o instanceof Error?o.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function rg(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const o=qr(e.exportSettings.fps),n=$r(e.exportSettings.duration),{width:s,height:r}=ln(e,a),l=new Le({bitrate:Wr(e.exportSettings.bitrate,s,r)*1e6}),c=new Fr({fastStart:"in-memory"}),u=await fp(["avc","hevc"].filter(T=>c.getSupportedVideoCodecs().includes(T)),{width:s,height:r,quality:l});if(!u)throw new Error("this browser cannot encode H.264");const p=new Za,f=new W2({format:c,target:p}),m=new L2({codec:u,quality:l,keyFrameInterval:1});f.addVideoTrack(m,{frameRate:o});const h=Po(e),g=await lg(f,c,e,n,h);t.resetTemporal();const v=document.createElement("canvas");await f.start();try{g&&await g.audioSource.add(g.buffer);const T=Math.max(1,Math.round(n*o)),_=1/o,E=e.exportSettings.loopClose===!0;let P=null;for(let I=0;I<T;I++){const M=h+xo(I/o,n,e.playback.mode,1,!0);i?.(I,T),t.paintFrame(e,M,s,r,v),I===0&&E?P=Kr(v):Gr(v,P,I,T,E);const N=new Oe(v,{timestamp:I*_,duration:_});await m.add(N,{keyFrame:I%o===0}),N.close(),await cn()}await f.finalize()}catch(T){try{await f.cancel()}catch{}throw T}const b=p.buffer;if(!b||b.byteLength<32)throw new Error("MP4 mux produced an empty file");const y=b.slice(0);return di(`${e.exportSettings.filename}.mp4`,new Blob([y],{type:"video/mp4"})),!!g}async function lg(t,e,i,a,o=0){const n=await Eu(Bi(i));if(!n||n.length<32||n.duration<=0)return null;const s=i.exportSettings.loopClose===!0;let r;try{r=Cu(n,a,s,o)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),c=r.sampleRate>=46e3?48e3:44100,d=e.getSupportedAudioCodecs(),u=["aac","mp3","opus"].filter(m=>d.includes(m)),p=await dp(u.length?u:d,{numberOfChannels:l,sampleRate:c});if(!p)return null;const f=new N2({codec:p,quality:rp,transform:{numberOfChannels:l,sampleRate:c}});return t.addAudioTrack(f),{audioSource:f,buffer:r}}async function Vr(t,e,i,a,o=!1){const n=qr(e.exportSettings.fps),s=$r(e.exportSettings.duration),{width:r,height:l}=ln(e,o),c=document.createElement("canvas");c.width=r,c.height=l;const d=c.getContext("2d");if(!d)throw new Error("No 2d context");const u=c.captureStream(0),p=u.getVideoTracks()[0],f=new MediaRecorder(u,{mimeType:i,videoBitsPerSecond:Wr(e.exportSettings.bitrate,r,l)*1e6}),m=[];f.ondataavailable=T=>{T.data.size&&m.push(T.data)},t.resetTemporal(),f.start(200);const h=Po(e),g=Math.max(1,Math.round(s*n)),v=document.createElement("canvas"),b=e.exportSettings.loopClose===!0;let y=null;for(let T=0;T<g;T++){const _=h+xo(T/n,s,e.playback.mode,1,!0);a?.(T,g),t.paintFrame(e,_,r,l,v),T===0&&b?y=Kr(v):Gr(v,y,T,g,b),d.drawImage(v,0,0,r,l),p.requestFrame?.(),await cn()}if(await new Promise(T=>{f.onstop=()=>T(),f.stop()}),u.getTracks().forEach(T=>T.stop()),!m.length)throw new Error("recorder produced no data");return new Blob(m,{type:i})}function cg(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function fg(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Gr(t,e,i,a,o){if(!o||!e||i===0)return;const n=tg(i,a);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function Kr(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function cn(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function dg(t,e,i){return new Promise((a,o)=>{t.toBlob(n=>{n?a(n):o(new Error("frame capture failed"))},e,i)})}async function ug(t,e,i,a,o=!1){const n=e.exportSettings.format;return n==="mp4"?sg(t,e,a,o):n==="webm"?jr(t,e,a,o):n==="sequence"?ng(t,e,a):og(t,e,i)}function Ee(t){const e=A.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Zi(t){if(!t)return;const e=A.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function De(t,e,i=!0){A.setProject(a=>({...a,layers:a.layers.map(o=>o.id===t?e(o):o)}),i)}function Ft(t,e=!0){A.setProject(i=>{const a=e?i.layers.map(o=>o.id===A.state.ui.selectedLayerId?{...o,sourceId:t.id}:o):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),A.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function hg(t){const e=A.project.sources.filter(s=>s.kind==="audio");for(const s of e)ps(s);if(A.setProject(s=>{const r=s.sources.filter(d=>d.kind!=="audio"),l=s.layers.map(d=>e.some(u=>u.id===d.sourceId)?{...d,sourceId:r.find(u=>u.kind!=="audio")?.id??null}:d),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),Ba(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",o=t.beats?.length?`${t.beats.length} hits`:"",n=[i,a,o].filter(Boolean).join(" · ");A.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function Qa(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&A.patchUi({status:`reading ${i.name}…`});const o=await uh(i);if(o.kind==="audio"){hg(o);continue}if(e){const n=A.state.ui.selectedSourceId;A.setProject(s=>({...s,sources:s.sources.map(r=>r.id===n?{...o,id:r.id}:r)})),A.patchUi({status:`replaced ${i.name}`})}else Ft(o,!0)}catch(a){A.patchUi({status:a instanceof Error?a.message:"import failed"})}}function mg(){A.setProject(e=>{const i=e.sources.find(o=>o.kind!=="audio")?.id??null,a=is(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=A.project.layers.at(-1);A.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function pg(t){A.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=ze("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:ze("fx")}));const o=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(o+1,0,a),{...e,layers:n}})}function gg(t){A.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function fn(t){const e=Ee(A.project);if(!e)return;const i=ts(t);De(e.id,a=>({...a,effects:[...a.effects,i]})),A.patchUi({selectedEffectId:i.id})}function vg(t,e){De(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function Xr(t,e,i){De(t,a=>{const o=a.effects.findIndex(l=>l.id===e),n=o+i;if(o<0||n<0||n>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(o,1);return s.splice(n,0,r),{...a,effects:s}})}function bg(t,e){De(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function Qi(t,e,i,a,o=!0){De(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),o)}function ui(t,e=!1){const i=A.state.ui;(t==="all"||t==="selected")&&A.setProject(o=>({...o,seed:o.seed+1+(Date.now()&255)>>>0}),!1),A.setProject(o=>{let s=Yn(o,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.desk==="poster"&&(s={...s,sources:s.sources.map((r,l)=>Ie(r.generator)?Qn(r,s.seed+l*131>>>0):r)}),t==="all"&&i.includeCritters&&(s=Zn(s)),t==="all"&&i.includeIdol&&(s=Ld(s)),s});const a=A.project.layers[0]?.effects.map(o=>o.typeId).join(" · ");A.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${A.project.seed}`})}function yg(){const t=A.project,e=t.sources.find(o=>o.id===A.state.ui.selectedSourceId);if(e&&Ie(e.generator))return e;const i=Ee(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&Ie(a.generator)?a:t.sources.find(o=>Ie(o.generator))}function wg(){const t=yg();if(!t){A.patchUi({status:"no collage to randomize"});return}const e=A.project.seed+Date.now()>>>0;A.setProject(a=>({...a,sources:a.sources.map(o=>o.id===t.id?Qn(o,e):o)}));const i=A.project.sources.find(a=>a.id===t.id);A.patchUi({status:`field · ${i?.name??"rolled"}`})}function kg(){const t=Ee(A.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(A.project.seed+Date.now())%9998;if(e){Qi(t.id,e.id,"seed",i),A.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}fn("critters");const a=Ee(A.project),o=Zi(a);a&&o?.typeId==="critters"&&Qi(a.id,o.id,"seed",i),A.patchUi({status:"stamped floaters"})}function Tg(){const t=Ee(A.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(A.project.seed+Date.now()+17)%9998;if(e){Qi(t.id,e.id,"seed",i),A.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}fn("dancer");const a=Ee(A.project),o=Zi(a);a&&o?.typeId==="dancer"&&Qi(a.id,o.id,"seed",i),A.patchUi({status:"stamped idol"})}function _g(){A.setProject(t=>qd({...t,seed:t.seed+1+(Date.now()&255)>>>0})),A.patchUi({status:"new floater and idol seeds"})}async function Sg(t){const e=A.project,{width:i,height:a}=gn(e.exportSettings.width||1280,e.exportSettings.height||720,Bt,Bt);try{const o=await t.capture(e,e.playback.time,i,a,"image/png",Nr),n=await hh(o,`print_${Date.now()}.png`);Ft(n,!0),A.patchUi({status:"printed the live frame as a new still"})}catch(o){A.patchUi({status:o instanceof Error?o.message:"print failed"})}}function Zr(t){A.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Qr(){Q2(`${A.project.name||"phosphene"}.phos.json`,K2(A.project)),A.patchUi({status:"project downloaded"})}async function xg(t){const e=await t.text(),i=X2(e);A.replace(i),A.patchUi({status:"project loaded — re-drop media if needed"})}function Cg(){const t=prompt("Preset name",`look ${A.project.presets.length+1}`);if(!t)return;const e=wo(A.project,t);A.setProject(i=>({...i,presets:[...i.presets,e]}))}function dn(t){const e=A.project.presets.find(i=>i.id===t);e&&(A.setProject(i=>Id(i,e)),A.patchUi({status:`preset ${e.name}`}))}function Eg(){const t=Ad(A.project.presets,A.project.seed+Date.now());if(!t){A.patchUi({status:"no presets saved"});return}dn(t.id)}function Pg(t){const e=A.project.presets.find(i=>i.id===t);e&&A.setProject(i=>({...i,presets:[...i.presets,Bd(e)]}))}function Mg(t){A.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Yr(){const t=A.state.ui,e=Ee(A.project),i=Zi(e),a=t.selectedParam?.paramId;if(!e||!i||!a){A.patchUi({status:"select a numeric parameter first"});return}const o=i.params[a];if(typeof o!="number"){A.patchUi({status:"keyframes are numeric"});return}const n={id:ze("kf"),time:A.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:o,easing:"smooth"};A.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),A.patchUi({status:`key ${a} @ ${n.time.toFixed(2)}s`})}function Ig(){A.setProject(t=>({...t,keyframes:[]}))}async function Ag(){const t=A.project.sources.find(i=>i.id===A.state.ui.selectedSourceId);if(!t)return;const e=await gh(t);e&&Ft(e,!0)}function Jr(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of A.project.sources)ps(e);A.replace(as()),A.patchUi({status:"new piece",prompt:"",generating:!1})}}let Ya=!1,Yi=null;function Bg(t,e){Yi=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny ${A.project.cutEdit?.enabled?"acid":""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
      <button class="btn tiny" data-act="rand-sel">Rand sel</button>
      <button class="btn tiny" data-act="rand-param">Rand param</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, size, and pace.">Rand field</button>
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
        <p>A collage machine. <strong>Hypnotic</strong> is the flat two-ink poster look: Snake holds each silhouette, then occupancy eases; icons blink. <strong>Classic</strong> is the previous washed, full-ink Field — more glyphs, drifting ground, and Snake’s older 7-look crossfade. Poster desk hides fly-throughs; Club shows them. Field locks one stamp pattern and loops it seamlessly. Trance ties Tempo, Breathe, and Pack. Music punches glow, not the path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Drop an MP3 the same way as a picture — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Check <em>effects</em> (top bar, or under Effects on the right) if you also want a short stack from the right panel. Uncheck it for a clean collage. Wacky rolls a thicker stack when effects are on. No dancer. Rolls stay small and slower. When the rolled move is Field, the Field sliders roll too.</li>
          <li><strong>Hypnotic / Classic</strong> — Hypnotic is the flat two-ink poster Field. Classic restores the previous washed, full-ink look and Snake’s older motion. <strong>Poster / Club</strong> hides or shows fly-throughs, Matter, and music.</li>
          <li><strong>Rand field</strong> picks a new looping pattern and rerolls sliders for the active look. Kit, mash, wash, size, and pace stay. Switches the clip to Field if it is on another move. On Poster, Rand all stays on Field.</li>
          <li><strong>Cut edit</strong> is the other randomizer. Drop an MP3 first. It finds the first downbeat (the kick, not the snare) and cuts on that metronome — bars and half-bars, not stray 8th notes. Snap / step / spot flip on the same frames as the drums. Some shots hold a bar or two. Some are two-beat fills that land back on 1.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music, Kitchen, Sky, Street, Arcade, Haunt, Sport, School. Each pack is its own stamp set — switching a kit replaces every icon. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Color</strong> packs (Brine, Candy, Ember, Neon…) recast washes and inks across any kit. <strong>Wash</strong> taps a color from the active pack. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is playing and the clip keeps that part of the song — the window you are hearing, with the visuals already synced to it. Export from the start of the track if you rewind first. Stills and PNG sequences stay silent. Clips loop as-is. Check <em>close loop</em> only if you want the last beats to dissolve into the first frame.</li>
          <li>Bottom-right: pick a shape, tap <strong>720</strong> or <strong>1080</strong>, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). Clips save at 30 fps in HD so they stay sharp without a long wait. The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Rg(t),A.subscribe(()=>{Ya||un(t)}),un(t)}async function Fg(t=!1){if(Yi&&!A.state.ui.exporting){A.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),A.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await ug(Yi,A.project,A.project.playback.time,(i,a)=>{A.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);A.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){A.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Rg(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,o=i.dataset.id;if(a==="save"&&Qr(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Jr(),a==="seed-"&&Zr(-1),a==="seed+"&&Zr(1),a==="rand-all"&&ui("all"),a==="rand-wacky"&&ui("all",!0),a==="cut-edit"){const n=!A.project.cutEdit?.enabled;A.setProject(s=>({...s,cutEdit:{enabled:n,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),A.patchUi({status:n?A.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&_g(),a==="reprint"&&Yi&&Sg(Yi),a==="rand-sel"&&ui("selected"),a==="rand-field"&&wg(),a==="desk"){const n=i.dataset.desk==="club"?"club":"poster";A.patchUi({desk:n,status:n==="poster"?"desk · poster":"desk · club"})}if(a==="look"){const n=pi(i.dataset.look);re(s=>({...s,collageLook:n,collageTwoInk:n!=="classic"}),`look · ${n}`)||A.patchUi({status:`look · ${n}`})}if(a==="two-ink"){const s=hi()?.collageTwoInk===!1;re(r=>({...r,collageTwoInk:s}),s?"two ink":"full inks")||A.patchUi({status:"two ink"})}if(a==="rand-param"){const n=i.dataset.paramId,s=Ee(A.project),r=Zi(s);n&&s&&r&&A.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:n}},!1),ui("param")}if(a==="help"&&A.patchUi({helpOpen:!A.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&Ag(),a==="gen"){const n=i.dataset.kind??"plasma",s=hi(),r=i.dataset.kit??(Ie(n)?Lt(s?.collageKit):void 0),l=i.dataset.move??(Ie(n)?An(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,d=li(n,r,l,Dg(s,c));Ft(d,!0),A.patchUi({status:d.collageMove?`place · ${d.collageMove} · ${d.collageKit??""}${d.collageKitB?` · ${d.collageKitB}`:""}`:d.collageKit?`place · ${n} · ${d.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(a==="mash"){const n=i.dataset.kit??"love",s=hi();if(s){const r=s.collageKitB===n||s.collageKit===n?void 0:n;re(l=>qg({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=li("wallpaper","sailor","rush",{kitB:n});Ft(r,!0),A.patchUi({status:`mash · sailor · ${n}`})}}if(a==="wash"){const n=i.dataset.hex;n&&(re(s=>({...s,colorA:n}),`wash · ${n}`)||(Ft(li("wallpaper","sailor","rush",{wash:n}),!0),A.patchUi({status:`wash · ${n}`})))}if(a==="color-pack"){const n=Ai(i.dataset.pack),s=hi();if(s){const r=Lt(s.collageKit),l=ri(r,n),c=(s.colorA??"").toLowerCase(),d=l.some(u=>u.toLowerCase()===c);re(u=>({...u,collageColorPack:n,colorA:d?u.colorA:l[0],colorB:ut(r,n)}),`color · ${go[n]}`)}else{const r=li("wallpaper","sailor","rush",{colorPack:n});Ft(r,!0),A.patchUi({status:`color · ${go[n]}`})}}if(a==="night"){const s=!hi()?.collageNight;re(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(Ft(li("wallpaper","sailor","rush",{night:!0}),!0),A.patchUi({status:"night wash"}))}if(a==="field-pattern"){const n=oa(i.dataset.pattern);re(s=>({...s,collageFieldPattern:n}),`field · ${wn[n]}`)}if(a==="stamp-critters"&&kg(),a==="stamp-idol"&&Tg(),a==="add-layer"&&mg(),a==="dup-layer"&&o&&pg(o),a==="del-layer"&&o&&gg(o),a==="sel-layer"&&o&&A.patchUi({selectedLayerId:o,selectedEffectId:A.project.layers.find(n=>n.id===o)?.effects[0]?.id??null}),a==="sel-fx"&&o&&A.patchUi({selectedEffectId:o}),a==="sel-src"&&o&&A.patchUi({selectedSourceId:o}),a==="bypass"&&o){const n=Ee(A.project);n&&bg(n.id,o)}if(a==="fx-up"&&o){const n=Ee(A.project);n&&Xr(n.id,o,-1)}if(a==="fx-dn"&&o){const n=Ee(A.project);n&&Xr(n.id,o,1)}if(a==="fx-del"&&o){const n=Ee(A.project);n&&vg(n.id,o)}if(a==="key"&&Yr(),a==="key-clear"&&Ig(),a==="pst-save"&&Cg(),a==="pst-rand"&&Eg(),a==="pst-load"&&o&&dn(o),a==="pst-dup"&&o&&Pg(o),a==="pst-del"&&o&&Mg(o),a==="export"&&Fg(),a==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));A.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),A.patchUi({status:`${n}s clip ready — hit Export`})}if(a==="exp-aspect"&&o){const n=rn.find(s=>s.id===o);if(n){const s=Math.max(A.project.exportSettings.width,A.project.exportSettings.height,At),r=Ur(n.rw,n.rh,Math.min(Bt,Math.max(At,s)));A.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const n=Number(i.dataset.long||At),s=A.project,r=Dr(s.exportSettings.width,s.exportSettings.height,n);A.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:n>=Bt?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const n=A.project,s=Ee(n),r=n.sources.find(u=>u.id===(s?.sourceId??n.sources[0]?.id)),l=r?.kind==="audio"?n.sources.find(u=>u.kind!=="audio"):r,c=Math.max(n.exportSettings.width,n.exportSettings.height,At),d=Dr(l?.width??1280,l?.height??720,Math.min(Bt,c));A.setProject(u=>({...u,exportSettings:{...u.exportSettings,width:d.width,height:d.height}}))}if(a==="play"&&(Ba(),A.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),a==="use-src"&&o){if(A.project.sources.find(r=>r.id===o)?.kind==="audio")return;const s=Ee(A.project);s&&De(s.id,r=>({...r,sourceId:o}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(xg(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Qa(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Qa(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(Qa(i.files,!1),i.value=""),i.id==="quality"&&A.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&fn(i.value),i.value=""),i.id==="blend"){const a=Ee(A.project);a&&De(a.id,o=>({...o,blendMode:i.value}))}if(i.id==="mask-type"){const a=Ee(A.project);a&&De(a.id,o=>({...o,mask:{...o.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&dn(i.value),i.id==="exp-format"&&A.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&A.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&A.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&A.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&A.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=A.project;if((i.id==="inc-critters"||i.id==="inc-critters-rail")&&A.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&A.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&A.patchUi({includeEffects:i.checked}),i.id==="seed"&&A.setProject(o=>({...o,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&A.setProject(o=>({...o,randomAmount:Number(i.value)}),!1),i.id==="speed"&&A.setProject(o=>({...o,playback:{...o.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&A.setProject(o=>({...o,playback:{...o.playback,loop:i.checked}}),!1),i.id==="loop-close"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&A.setProject(o=>({...o,playback:{...o.playback,freeze:i.checked}}),!1),i.id==="time"&&A.setProject(o=>({...o,playback:{...o.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const o=Ee(a);o&&De(o.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const o=Ee(a);o&&De(o.id,n=>({...n,enabled:i.checked}),!1)}for(const o of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${o}`&&A.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[o]:Number(i.value)}}),!1),i.id===`lfb-${o}`){const n=Ee(a);n&&De(n.id,s=>({...s,feedback:{...s.feedback,[o]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const o=Ee(a),n=i.id.slice(3);o&&n in o.transform&&De(o.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Ya=!0;const o=zg(i.dataset.fxType||"",i.dataset.param),n=Og(i,o);Qi(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),A.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&re(o=>({...o,collageScale:Ci(Number(i.value))}),void 0,!0),i.id==="collage-density"&&re(o=>({...o,collageDensity:Ei(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&re(o=>({...o,collagePace:yi(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&re(o=>({...o,collageChainTravel:wi(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&re(o=>({...o,collageChainMorph:ki(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&re(o=>({...o,collageChainVary:Ti(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&re(o=>({...o,collageChainSmooth:_i(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&re(o=>({...o,collageSpringStrength:ra(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&re(o=>({...o,collageSpringDamp:la(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&re(o=>({...o,collageSpringDist:ca(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&re(o=>({...o,collageSpringElast:fa(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&re(o=>({...o,collageSpringBreak:da(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&re(o=>({...o,collageFlowScale:ua(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&re(o=>({...o,collageFlowTurb:ha(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&re(o=>({...o,collageFlowEvolve:ma(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&re(o=>({...o,collageFlowForce:pa(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&re(o=>({...o,collageFlowDepth:ga(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&re(o=>({...o,collageBoidCohere:va(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&re(o=>({...o,collageBoidSep:ba(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&re(o=>({...o,collageBoidAlign:ya(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&re(o=>({...o,collageBoidRadius:wa(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&re(o=>({...o,collageBoidSpeed:ka(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&re(o=>({...o,collagePoleCount:Ta(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&re(o=>({...o,collagePoleAttract:_a(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&re(o=>({...o,collagePoleRepel:Sa(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&re(o=>({...o,collagePoleSpeed:xa(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&re(o=>({...o,collagePoleFalloff:Ca(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&re(o=>({...o,collagePoleSwitch:Ea(Number(i.value))}),void 0,!0),i.id==="collage-field-strength"&&re(o=>({...o,collageFieldStrength:Gt(Number(i.value))}),void 0,!0),i.id==="collage-field-scale"&&re(o=>({...o,collageFieldScale:to(Number(i.value))}),void 0,!0),i.id==="collage-field-trance"&&re(o=>({...o,...vn(Number(i.value))}),void 0,!0),i.id==="collage-field-evolve"&&re(o=>({...o,collageFieldEvolve:Kt(Number(i.value))}),void 0,!0),i.id==="collage-field-density"&&re(o=>({...o,collageFieldDensity:Xt(Number(i.value))}),void 0,!0),i.id==="collage-field-density-scale"&&re(o=>({...o,collageFieldDensityScale:io(Number(i.value))}),void 0,!0),i.id==="collage-field-density-evolve"&&re(o=>({...o,collageFieldDensityEvolve:ao(Number(i.value))}),void 0,!0),i.id==="collage-field-flow"&&re(o=>({...o,collageFieldFlow:oo(Number(i.value))}),void 0,!0),i.id==="collage-field-curl"&&re(o=>({...o,collageFieldCurl:Zt(Number(i.value))}),void 0,!0),i.id==="collage-field-flow-scale"&&re(o=>({...o,collageFieldFlowScale:no(Number(i.value))}),void 0,!0),i.id==="collage-field-radius"&&re(o=>({...o,collageFieldRadius:so(Number(i.value))}),void 0,!0),i.id==="collage-field-scale-amp"&&re(o=>({...o,collageFieldScaleAmp:ro(Number(i.value))}),void 0,!0),i.id==="collage-field-min-scale"&&re(o=>({...o,collageFieldMinScale:Qt(Number(i.value))}),void 0,!0),i.id==="collage-field-max-scale"&&re(o=>({...o,collageFieldMaxScale:Yt(Number(i.value))}),void 0,!0),i.id==="collage-field-perturb"&&re(o=>({...o,collageFieldPerturb:Jt(Number(i.value))}),void 0,!0),i.id==="collage-field-warp"&&re(o=>({...o,collageFieldWarp:ei(Number(i.value))}),void 0,!0),i.id==="collage-field-sparsity"&&re(o=>({...o,collageFieldSparsity:ti(Number(i.value))}),void 0,!0),i.id==="collage-field-contrast"&&re(o=>({...o,collageFieldContrast:ii(Number(i.value))}),void 0,!0),i.id==="collage-field-motion"&&re(o=>({...o,collageFieldMotion:ai(Number(i.value))}),void 0,!0),i.id==="exp-q"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Ya&&(Ya=!1,un(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),A.state.ui.dropActive||A.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&A.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),A.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Qa(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Ba(),A.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&ui(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&ui("all",!0),(e.key==="k"||e.key==="K")&&Yr(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Jr()),e.key==="?"&&A.patchUi({helpOpen:!A.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Qr()))})}function zg(t,e){return tt(t)?.params.find(i=>i.id===e)}function Og(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function un(t){const{project:e,ui:i}=A.state,a=t.querySelector("#proj-name"),o=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),o&&document.activeElement!==o&&(o.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const d=t.querySelector("#inc-fx");d&&(d.checked=i.includeEffects);const u=t.querySelector("#inc-fx-stack");u&&(u.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(p=>{p.classList.toggle("acid",!!e.cutEdit?.enabled)}),Lg(t.querySelector("#rail")),Hg(t.querySelector("#stack")),Ug(t.querySelector("#transport"))}function Lg(t){const e=A.project,i=A.state.ui,a=i.desk==="club",o=e.sources.find(n=>n.id===i.selectedSourceId&&Ie(n.generator))??e.sources.find(n=>Ie(n.generator));t.innerHTML=`
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
      ${xt.map(n=>`<button class="btn tiny ${o?.collageKitB===n?"acid":""}" data-act="mash" data-kit="${n}">${Wl(n)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${Ii.map(n=>`<button class="btn tiny ${Ai(o?.collageColorPack)===n?"acid":""}" data-act="color-pack" data-pack="${n}">${go[n]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${ri(Lt(o?.collageKit),o?.collageColorPack).map(n=>`<button class="wash-chip ${(o?.colorA??"").toLowerCase()===n.toLowerCase()?"on":""}" data-act="wash" data-hex="${n}" style="background:${n}" title="${n}"></button>`).join("")}
      <button class="btn tiny ${o?.collageNight?"acid":""}" data-act="night">Night</button>
      <button class="btn tiny ${o?.collageTwoInk!==!1?"acid":""}" data-act="two-ink" title="Paper plus one or two inks.">Two ink</button>
    </div>
    <div class="sec">Look</div>
    <div class="row">
      <button class="btn tiny ${pi(o?.collageLook)!=="classic"?"acid":""}" data-act="look" data-look="hypnotic" title="Flat paper, two inks, held Snake looks.">Hypnotic</button>
      <button class="btn tiny ${pi(o?.collageLook)==="classic"?"acid":""}" data-act="look" data-look="classic" title="Washes, full inks, the previous Snake motion.">Classic</button>
    </div>
    <div class="sec">Desk</div>
    <div class="row">
      <button class="btn tiny ${i.desk!=="club"?"acid":""}" data-act="desk" data-desk="poster" title="Hides fly-throughs, Matter, and music.">Poster</button>
      <button class="btn tiny ${i.desk==="club"?"acid":""}" data-act="desk" data-desk="club" title="Show fly-throughs, Matter, and music moves.">Club</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${Ci(o?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${Ci(o?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${Ei(o?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${Ei(o?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${yi(o?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${yi(o?.collagePace).toFixed(2)}" />
      <span></span></div>
    ${a?`<div class="sec">Move</div>
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
    </div>`:""}
    ${o?.collageMove==="chain"?`<div class="sec">Chain</div>
    <div class="param"><span>Movement Speed</span>
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${wi(o?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${wi(o?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${ki(o?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${ki(o?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${Ti(o?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${Ti(o?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${_i(o?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${_i(o?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
`:""}
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, size, and pace.">Rand field</button>
    </div>
    ${o?.collageMove==="field"?`<div class="sec">Pattern</div>
    <div class="row">
      ${["auto","sunflower","orbit","traffic","cascade","checker","scan","snake"].map(n=>`<button class="btn tiny ${oa(o.collageFieldPattern)===n?"acid":""}" data-act="field-pattern" data-pattern="${n}">${wn[n]}</button>`).join("")}
    </div>
    ${ce("collage-field-trance","Trance",aa(o.collageFieldTrance),0,2,.05)}
    ${ce("collage-field-evolve","Tempo",Kt(o.collageFieldEvolve),.08,2.2,.05)}
    ${ce("collage-field-strength","Spread",Gt(o.collageFieldStrength),.2,2.2,.05)}
    ${ce("collage-field-density","Pack",Xt(o.collageFieldDensity),0,2.2,.05)}
    ${ce("collage-field-sparsity","Symmetry",ti(o.collageFieldSparsity),0,2,.05)}
    ${ce("collage-field-perturb","Shuffle",Jt(o.collageFieldPerturb),0,2,.05)}
    ${ce("collage-field-curl","Swirl",Zt(o.collageFieldCurl),0,2.2,.05)}
    ${ce("collage-field-warp","Breathe",ei(o.collageFieldWarp),0,2.2,.05)}
    ${ce("collage-field-motion","Ripple",ai(o.collageFieldMotion),0,2,.05)}
    ${ce("collage-field-contrast","Size Contrast",ii(o.collageFieldContrast),0,2.2,.05)}
    ${ce("collage-field-min-scale","Stamp Size",Qt(o.collageFieldMinScale),.12,1,.02)}
    ${ce("collage-field-max-scale","Hero Size",Yt(o.collageFieldMaxScale),.6,3.2,.05)}`:""}
    ${a?`<div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>`:""}
    ${o?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${ce("collage-spring-strength","Spring Strength",ra(o.collageSpringStrength),.2,2.2,.05)}
    ${ce("collage-spring-damp","Damping",la(o.collageSpringDamp),.08,1,.02)}
    ${ce("collage-spring-dist","Connection Distance",ca(o.collageSpringDist),.12,.72,.02)}
    ${ce("collage-spring-elast","Elasticity",fa(o.collageSpringElast),.2,2.2,.05)}
    ${ce("collage-spring-break","Break / Reconnect",da(o.collageSpringBreak),1.15,3.6,.05)}`:o?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${ce("collage-flow-scale","Field Scale",ua(o.collageFlowScale),.28,2.4,.05)}
    ${ce("collage-flow-turb","Turbulence",ha(o.collageFlowTurb),0,2,.05)}
    ${ce("collage-flow-evolve","Evolution Speed",ma(o.collageFlowEvolve),.08,2.2,.05)}
    ${ce("collage-flow-force","Force",pa(o.collageFlowForce),.2,2.2,.05)}
    ${ce("collage-flow-depth","Depth Influence",ga(o.collageFlowDepth),0,1.6,.05)}`:o?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${ce("collage-boid-cohere","Cohesion",va(o.collageBoidCohere),.1,2.2,.05)}
    ${ce("collage-boid-sep","Separation",ba(o.collageBoidSep),.15,2.4,.05)}
    ${ce("collage-boid-align","Alignment",ya(o.collageBoidAlign),.1,2.2,.05)}
    ${ce("collage-boid-radius","Perception Radius",wa(o.collageBoidRadius),.08,.55,.01)}
    ${ce("collage-boid-speed","Speed",ka(o.collageBoidSpeed),.25,2.2,.05)}`:o?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${ce("collage-pole-count","Pole Count",Ta(o.collagePoleCount),1,5,1)}
    ${ce("collage-pole-attract","Attraction",_a(o.collagePoleAttract),.15,2.2,.05)}
    ${ce("collage-pole-repel","Repulsion",Sa(o.collagePoleRepel),.1,2.2,.05)}
    ${ce("collage-pole-speed","Pole Speed",xa(o.collagePoleSpeed),.12,2.2,.05)}
    ${ce("collage-pole-falloff","Falloff",Ca(o.collagePoleFalloff),.6,2.8,.05)}
    ${ce("collage-pole-switch","Polarity Switching",Ea(o.collagePoleSwitch),0,2,.05)}`:""}
    ${a?`<div class="sec">Music</div>
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
    </div>`:""}
    <div class="row">
      <button class="btn tiny hot" data-act="rand-wacky">Rand wacky</button>
      <button class="btn tiny ${e.cutEdit?.enabled?"acid":""}" data-act="cut-edit">Cut edit</button>
    </div>
    <div class="status" style="margin-top:4px">${a?"Club desk. Fly-throughs, Matter, and music are here. Field still loops one pattern. Music punches glow, not the path.":"Poster desk. Hypnotic is the flat two-ink Field. Classic is the previous washed look. Switch to Club for fly-throughs."}</div>
    <div style="margin-top:8px">
      ${e.sources.map(n=>{const s=n.kind==="audio"?`beat-sync · ${mi(n.duration||0)}${n.bpm&&n.bpm>40?` · ${n.bpm}bpm`:""}`:`${n.kind} ${n.width}×${n.height}`,r=n.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${n.id}">use</button>`;return`
        <div class="thumb ${n.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${n.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Je(n.name)}</b><span>${s}</span></div>
          ${r}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${ce("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${ce("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${ce("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${ce("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${ce("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${ce("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(n=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Je(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${n.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Hg(t){const e=A.project,i=Ee(e),a=Zi(i),o=Pd();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${Je(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${ce("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${bh.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${ce("tr-x","X",i.transform.x,-1,1,.01)}
      ${ce("tr-y","Y",i.transform.y,-1,1,.01)}
      ${ce("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${ce("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${ce("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${ce("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${ce("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${ce("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${ce("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(n=>`<option ${i.mask.type===n?"selected":""} value="${n}">${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${A.state.ui.includeEffects?"checked":""}/> include in randomizer</div>
      ${i.effects.map((n,s)=>`
        <div class="fx ${n.id===a?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Je(tt(n.typeId)?.name??n.typeId)}</span>
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
        ${Md.map(n=>{const s=(o[n.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Je(tt(a.typeId)?.name??"params")} · ${Je(tt(a.typeId)?.description??"")}</div>
        ${(tt(a.typeId)?.params??[]).map(n=>Ng(i.id,a,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||De(i.id,c=>{const d=[...c.effects],[u]=d.splice(r,1);return d.splice(l,0,u),{...c,effects:d}})})})}function Ng(t,e,i){const a=e.params[i.id]??i.default,o=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${o} ${a?"checked":""}/> ${Je(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Je(i.label)}</span><input type="color" ${o} value="${Je(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Je(i.label)}</span>
      <select ${o}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===a?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Je(i.label)}</span>
    <input type="range" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Ug(t){const e=A.project,i=e.playback,a=e.exportSettings,o=A.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(r=>`<option ${i.mode===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      ${ce("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${mi(i.time)} / ${mi(n)}</span>
        <span class="status" id="status-line">${A.state.ui.status}</span>
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
        ${rn.map(r=>`<button class="btn tiny ${eg(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        ${(()=>{const r=Math.max(a.width,a.height);return`<button class="btn tiny ${r<=At?"acid":""}" data-act="exp-size" data-long="${At}">720</button>
        <button class="btn tiny ${r>At?"acid":""}" data-act="exp-size" data-long="${Bt}">1080</button>`})()}
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map(r=>`<option ${a.format===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2,4,6,8,16,32].map(r=>`<button class="btn tiny ${Number(a.duration)===r?"acid":""}" data-act="clip" data-secs="${r}" ${o?"disabled":""}>${r}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${a.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${a.loopClose?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${o?"disabled":""}>${o?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*n;A.setProject(d=>({...d,playback:{...d.playback,time:Math.max(0,c)}}))})}function ce(t,e,i,a,o,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${o}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${o}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function hi(){const t=A.project,e=t.sources.find(o=>o.id===A.state.ui.selectedSourceId);if(e&&Ie(e.generator))return e;const i=Ee(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&Ie(a.generator)?a:t.sources.find(o=>Ie(o.generator))}function Dg(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,fieldStrength:t.collageFieldStrength,fieldScale:t.collageFieldScale,fieldEvolve:t.collageFieldEvolve,fieldDensity:t.collageFieldDensity,fieldDensityScale:t.collageFieldDensityScale,fieldDensityEvolve:t.collageFieldDensityEvolve,fieldFlow:t.collageFieldFlow,fieldCurl:t.collageFieldCurl,fieldFlowScale:t.collageFieldFlowScale,fieldRadius:t.collageFieldRadius,fieldScaleAmp:t.collageFieldScaleAmp,fieldMinScale:t.collageFieldMinScale,fieldMaxScale:t.collageFieldMaxScale,fieldPerturb:t.collageFieldPerturb,fieldWarp:t.collageFieldWarp,fieldSparsity:t.collageFieldSparsity,fieldContrast:t.collageFieldContrast,fieldMotion:t.collageFieldMotion,fieldPattern:t.collageFieldPattern,fieldTrance:t.collageFieldTrance,twoInk:t.collageTwoInk,look:t.collageLook,wash:e?t.colorA:void 0}}function qg(t){return!t.collageKit||!t.collageMove?t:{...t,name:es(t.collageMove,t.collageKit,t.collageKitB)}}function re(t,e,i=!1){const a=hi();return a?(A.setProject(o=>({...o,sources:o.sources.map(n=>n.id===a.id?t(n):n)}),!i),e&&A.patchUi({status:e},!i),!0):!1}function Je(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function mi(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function el(t,e){if(A.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),o=Math.max(16,Math.floor(a.width*i)),n=Math.max(16,Math.floor(a.height*i));(t.width!==o||t.height!==n)&&(t.width=o,t.height=n)}function $g(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${mi(i)}  ${e.toFixed(0)}FPS  ${A.project.quality.toUpperCase()}`);const o=Math.max(A.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/o*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${mi(i)} / ${mi(o)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=A.state.ui.status)}const tl=window;tl.__phospheneMark=!0;const il=document.querySelector("#app");if(!il)throw new Error("#app missing");const hn=il,mn=document.createElement("canvas");async function Wg(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new rh(mn)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:hn.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}Bg(hn,t),tl.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>el(mn,e)).observe(e),el(mn,e);let a=performance.now(),o=60,n=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const d=A.state.ui.exporting,u=A.project,p=Jd(u,u.playback.time),f=Bi(u);if(!d&&u.playback.playing&&!u.playback.freeze){const m=f?.audio&&u.playback.mode==="forward"&&!f.audio.paused&&Number.isFinite(f.audio.currentTime);if(f?.audio&&Mo(f.audio,u.playback),m){const h=f.audio.currentTime;A.setProject(g=>({...g,playback:{...g.playback,time:h}}),!1)}else{let h=u.playback.time+c*p;const g=Math.max(u.duration,.001);u.playback.loop?h=(h%g+g)%g:h=Math.min(h,g),A.setProject(v=>({...v,playback:{...v.playback,time:h}}),!1),f?.audio&&u.playback.mode!=="forward"&&Mo(f.audio,{...u.playback,playing:!1,time:h})}}else f?.audio&&Mo(f.audio,{...u.playback,playing:!1});for(const m of A.project.sources)if(m.kind==="video"&&m.video&&!A.project.playback.freeze){const h=xo(A.project.playback.time,m.duration||m.video.duration||1,A.project.playback.mode,1,A.project.playback.loop);vh(m,h,{playing:A.project.playback.playing,freeze:A.project.playback.freeze,mode:A.project.playback.mode,speed:A.project.playback.speed})}if(!d)try{t.render(A.project,A.project.playback.time),t.cutStatus&&t.cutStatus!==A.state.ui.status&&A.patchUi({status:t.cutStatus},!1)}catch(m){A.patchUi({status:m instanceof Error?m.message:"render error"},!1)}n++,l-s>400&&(o=n*1e3/(l-s),s=l,n=0),$g(hn,o,A.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}Wg()})();

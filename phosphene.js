(function(){"use strict";function Ae(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function U(t,e,i){return Math.min(i,Math.max(e,t))}function yt(t,e=16){return Math.max(e,Math.round(t)&-2)}function pn(t,e,i,o){const a=Math.min(1,i/Math.max(t,1),o/Math.max(e,1));return{width:yt(t*a),height:yt(e*a)}}function Yi(t,e,i){return t+(e-t)*i}function al(t){const e=U(t,0,1);return e*e*(3-2*e)}const ol="field";function wt(t){return t===ol}function ti(t){return U(t??1.15,.2,2.2)}function Ya(t){return U(t??.95,.28,2.4)}function ii(t){return U(t??1,.08,2.2)}function ai(t){return U(t??1.15,0,2.2)}function Ja(t){return U(t??.9,.28,2.4)}function eo(t){return U(t??1.1,.08,2.2)}function to(t){return U(t??.85,0,2.2)}function oi(t){return U(t??.4,0,2.2)}function io(t){return U(t??.8,.28,2.4)}function ao(t){return U(t??.055,.02,.22)}function oo(t){return U(t??.85,0,2.2)}function ni(t){return U(t??.62,.12,1)}function si(t){return U(t??1.85,.6,3.2)}function ri(t){return U(t??.12,0,2)}function li(t){return U(t??1.1,0,2.2)}function ci(t){return U(t??.85,0,2)}function fi(t){return U(t??1.25,0,2.2)}function di(t){return U(t??.45,0,2)}function Ji(t){return U(t??1,0,2)}function gn(t){const e=Ji(t),i=e/2;return{collageFieldTrance:e,collageFieldEvolve:ii(.5+i*.45),collageFieldWarp:li(.4+i*.95),collageFieldDensity:ai(1.2+i*.6)}}function nl(t){const e=ni(t?.minScale),i=Math.max(e+.08,si(t?.maxScale));return{fieldStrength:ti(t?.fieldStrength),fieldScale:Ya(t?.fieldScale),fieldEvolve:ii(t?.fieldEvolve),density:ai(t?.density),densityScale:Ja(t?.densityScale),densityEvolve:eo(t?.densityEvolve),flow:to(t?.flow),curl:oi(t?.curl),flowScale:io(t?.flowScale),radius:ao(t?.radius),scaleAmp:oo(t?.scaleAmp),minScale:e,maxScale:i,perturb:ri(t?.perturb),warp:li(t?.warp),sparsity:ci(t?.sparsity),contrast:fi(t?.contrast),motion:di(t?.motion),trance:Ji(t?.trance)}}const vn=1.6,sl=2.399963229728653,ea=Math.PI*2,rl=6,ui=["sunflower","orbit","traffic","cascade","checker","scan","snake"],bn={auto:"Auto",sunflower:"Sunflower",orbit:"Orbit",traffic:"Traffic",cascade:"Cascade",checker:"Checker",scan:"Scan",snake:"Snake"};function ta(t){return ui.includes(t??"")?t:"auto"}function ll(t,e){const i=ta(t);return i!=="auto"?i:ui[(Math.imul(e>>>0^1540483477,2654435761)>>>0)%ui.length]}function cl(t,e=0){let i=rl/t.fieldEvolve;if(e>40){const o=240/e;let a=1;for(const n of[1,2,4,8,16,32])Math.abs(Math.log(n*o/i))<Math.abs(Math.log(a*o/i))&&(a=n);i=a*o}return i}function fl(t,e,i=0,o=0){const n=(i>40?t-o:t)/cl(e,i);return n-Math.floor(n)}function kt(t){return .86+t.density*.2}function dl(t,e){const i=t<.25?Math.sin(t/.25*Math.PI):0;return 1+.07*e.warp*i}function Tt(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function _t(t){return t.minScale/.62}function ct(t,e){const i=1+(Tt(t*3.1+7)-.5)*.5*e.contrast,o=Tt(t*5.7+3)<.035*e.contrast?e.maxScale/1.85*(1.5+Tt(t*2.3+1)*.5):1;return i*o}function Ft(t,e,i){return Tt(t*9.13+1)<i.perturb*.5?t:e}function yn(t){return(Tt(t+17)-.5)*.14}function no(t){return t*t*t*(t*(t*6-15)+10)}function wn(t){return t-Math.floor(t)}function hi(t,e){return(wn(t)-.5)*e}function kn(t,e){const{n:i,R:o,th:a,p:n,seed:s}=t,l=o*(.62+n.fieldStrength*.36)/Math.sqrt(i),f=l*2.1*kt(n)*_t(n),c=sl+n.curl*.006*Math.sin(a),u=s%2?a:-a,p=[8,13,21][s%3];for(let d=0;d<i;d++){const m=(d+.5)/i,h=Math.sin(a*2-m*ea*1.5),g=l*Math.sqrt(d+.5)*(1+n.warp*.06*h),v=d*c+u,b=f*(.55+.75*Math.sqrt(m))*(1+n.motion*.35*h)*ct(d,n);e(d,Math.cos(v)*g,Math.sin(v)*g,b,yn(d),Ft(d,d%p,n))}}function ul(t){return Math.min(.48,t.hh*.98)}function hl(t,e){const{n:i,th:o,p:a,seed:n}=t,s=ul(t),r=Math.round(U(3+a.fieldStrength*2.2,3,8)),l=Array.from({length:r},(u,p)=>p+1.2),f=l.reduce((u,p)=>u+p,0);let c=0;for(let u=0;u<r&&c<i;u++){const p=u===r-1?i-c:Math.max(4,Math.round(i*l[u]/f)),d=s*((u+.85)/(r+.2)),m=(u+n)%2?1:-1,h=1+u*.28*(.5+a.curl*.5),g=1+a.motion*.06*Math.sin(o*2+u),v=ea*d/p*2.6*kt(a)*_t(a);for(let b=0;b<p&&c<i;b++,c++){const w=b/p*ea+m*h*o,T=d*g;e(c,Math.cos(w)*T,Math.sin(w)*T,v*ct(c,a),yn(c),Ft(c,u*2+b%2,a))}}}function ml(t,e){const{n:i,hh:o,u:a,p:n}=t,s=Math.floor(i/2),r=1.2,l=2*o*1.2,f=Math.max(3,Math.round(Math.sqrt(s*l/r))),c=Math.max(3,Math.ceil(s/f)),u=r/c,p=l/f,d=Math.min(u,p)*1.05*kt(n)*_t(n);let m=0;for(let _=0;_<f&&m<s;_++){const M=-l/2+(_+.5)*p,A=_%2?1:-1,P=1+_%3*.35*n.curl;for(let E=0;E<c&&m<s;E++,m++)e(m,hi((E+.5)/c+A*P*a,r),M,d*ct(m,n),0,Ft(m,_,n))}const h=i-m,g=Math.max(3,Math.round(Math.sqrt(h*r/l))),v=Math.max(3,Math.ceil(h/g)),b=r/g,w=l/v,T=Math.min(b,w)*1.05*kt(n)*_t(n);for(let _=0;_<g&&m<i;_++){const M=-r/2+(_+.5)*b,A=_%2?1:-1,P=1+_%3*.35*n.curl;for(let E=0;E<v&&m<i;E++,m++)e(m,M,hi((E+.5)/v+A*P*a,l),T*ct(m,n),0,Ft(m,8+_,n))}}function pl(t,e){const{n:i,hh:o,u:a,p:n,seed:s}=t,r=1.04,l=2*o*1.22,f=Math.sqrt(r*l/i),c=Math.max(2,Math.round(r/f)),u=Math.max(3,Math.ceil(i/c)),p=r/c,d=l/u,m=Math.min(p,d)*1.08*kt(n)*_t(n),h=s%2?1:-1;let g=0;for(let v=0;v<c&&g<i;v++){const b=-r/2+(v+.5)*p,w=(v%2?1:-1)*h,T=1+v%4*.25*n.curl;for(let _=0;_<u&&g<i;_++,g++)e(g,b,hi((_+.5)/u+w*T*a,l),m*ct(g,n),0,Ft(g,v,n))}}function gl(t,e){const{n:i,hh:o,u:a,p:n,seed:s}=t,r=1.22,l=2*o*1.22,f=Math.sqrt(r*l/i),c=Math.max(4,Math.round(r/f)),u=Math.max(4,Math.ceil(i/c)),p=r/c,d=l/u,m=Math.min(p,d)*.98*kt(n)*_t(n),h=s%2?1:-1;let g=0;for(let v=0;v<u&&g<i;v++)for(let b=0;b<c&&g<i;b++,g++){const w=-r/2+(b+.5)*p,T=-l/2+(v+.5)*d,_=(v+b)%2===0,M=h*(_?1:-1),A=_?hi((b+.5)/c+M*a,r):w,P=_?T:hi((v+.5)/u+M*a,l);e(g,A,P,m*ct(g,n),0,Ft(g,_?b%3:3+v%3,n))}}function vl(t,e){const{n:i,hh:o,u:a,p:n}=t,s=Math.max(4,Math.round(U(5+n.fieldStrength*3,4,12))),r=2*o/s*.95*kt(n)*_t(n),l=r*vn*.7+.04,f=1+2*l,c=-o*.96,u=o*.96,p=(u-c)/Math.max(1,s-1),d=[],m=(b,w)=>{d.push(b,w)};for(let b=0;b<s;b++){const w=c+b*p;b%2===0?(m(-f/2,w),m(f/2,w)):(m(f/2,w),m(-f/2,w))}m(-f/2,u+l),m(-f/2,c-l);const h=d.length/2-1,g=[];let v=0;for(let b=0;b<h;b++){const w=d[2*(b+1)]-d[2*b],T=d[2*(b+1)+1]-d[2*b+1],_=Math.hypot(w,T);g.push(_),v+=_}v=v||1;for(let b=0;b<i;b++){let w=wn((b+.5)/i+a*.55)*v,T=0;for(;T<h-1&&w>g[T];)w-=g[T],T++;const _=w/Math.max(1e-6,g[T]),M=d[2*T]+(d[2*(T+1)]-d[2*T])*_,A=d[2*T+1]+(d[2*(T+1)+1]-d[2*T+1])*_;e(b,M,A,r*ct(b,n),0,Ft(b,T%5,n))}}function mi(t,e,i,o,a,n){const s=Math.abs(t-i)-a,r=Math.abs(e-o)-n;return Math.min(Math.max(s,r),0)+Math.hypot(Math.max(s,0),Math.max(r,0))}function bl(t,e,i,o,a,n,s){const r=t-i,l=e-o,f=a-i,c=n-o,u=U((r*f+l*c)/(f*f+c*c||1e-8),0,1);return Math.hypot(r-f*u,l-c*u)-s}function yl(t,e,i,o){let a=1e9;for(let n=0;n<i.length-2;n+=2)a=Math.min(a,bl(t,e,i[n],i[n+1],i[n+2],i[n+3],o));return a}function ia(t,e=.04){return no(U(.5-t/(e*2),0,1))}function aa(t){const e=(t%1+1)%1;return e<.5?e*4-1:3-e*4}function wl(t,e,i){const o=Math.sqrt(2*e/Math.max(1,t)),a=Math.max(2,Math.round(1/o)),n=Math.max(2,Math.ceil(t/a)),s=1/a,r=2*e/n,l=[];let f=0;for(let c=0;c<n&&f<t;c++){const u=c%2*.5;for(let p=0;p<a&&f<t;p++,f++){const d=(Tt(f*1.71+i)-.5)*s*.46,m=(Tt(f*2.93+i)-.5)*r*.46;l.push({x:U(-.5+(p+.5+u*.55)*s+d,-.5,.5),y:U(-e+(c+.5)*r+m,-e,e)})}}return l}function Tn(t,e,i){const o=[];for(const a of e){let n=-1,s=1e9;for(let r=0;r<t.length;r++){if(i[r])continue;const l=Math.hypot(t[r].x-a.x,t[r].y-a.y);l<s&&(s=l,n=r)}n>=0&&(i[n]=!0,o.push({i:n,x:a.x,y:a.y,r:a.r}))}return o}function kl(t,e,i,o,a,n,s){if(s<=0)return t;const r=aa(o*2)*a*.34,l=aa(o*2+.31)*n*.34,f=Math.hypot(e-r,i-l)-s;return t*no(U(f/.045,0,1))}function _n(t,e,i,o){const a=t.map((s,r)=>({i:r,o:e(s.x,s.y),a:Math.atan2(s.y,s.x)})).filter(s=>s.o>.38).sort((s,r)=>s.a-r.a||r.o-s.o),n=[];for(const s of a){if(n.length>=i)break;const r=t[s.i];let l=!0;for(const f of n)if(Math.hypot(r.x-t[f].x,r.y-t[f].y)<o){l=!1;break}l&&n.push(s.i)}return n}const Sn=.7;function Tl(t,e,i){const o=Ae(t>>>0^2654435761),a=.47*(.86+i.fieldStrength*.12),n=e*.93*(.86+i.fieldStrength*.12),s=.062+i.density*.01,r=o()>.5?1:-1,l=(P,E=0)=>({occ:P,hole:E,mode:"pack",nStick:0,stickR:0,crawl:0,giants:null}),f=(P,E,z)=>({occ:z,hole:0,mode:"stick",nStick:P.length,stickR:0,crawl:E,giants:P}),c=l((P,E)=>ia(mi(P,E,0,0,a,n),.045),.4+o()*.08),u=(o()-.45)*n*.28,p=l((P,E)=>{const z=mi(P,E,0,0,a,n),W=mi(P,E,r*a*.38,u,a*.55,n*.48);return ia(Math.max(z,-W),.03)}),d=[],m=(P,E,z,W)=>{const x=2*E,F=2*z,k=2*x+2*F;for(let H=0;H<P;H++){let V=(H+.5)/P*k,R,Q;V<x?(R=-E+V,Q=-z):V<x+F?(R=E,Q=-z+(V-x)):V<2*x+F?(R=E-(V-x-F),Q=z):(R=-E,Q=z-(V-2*x-F)),!(r>0&&R>E*.25&&Math.abs(Q)<z*.48)&&(r<0&&R<-E*.25&&Math.abs(Q)<z*.48||d.push({x:R+(o()-.5)*.05,y:Q+(o()-.5)*.05,r:W+o()*.025}))}};m(48,a*.94,n*.94,.1),m(36,a*.72,n*.72,.088);const h=f(d,.02,(P,E)=>{const z=mi(P,E,0,0,a,n),W=mi(P,E,0,0,a*.5,n*.42);return ia(Math.max(z,-W),.05)}),g=8+Math.floor(o()*4),v=3,b=Math.ceil(g/v),w=[];for(let P=0;P<g;P++){const E=P%v,z=Math.floor(P/v);w.push({x:-a*.7+(E+.5)*(1.4*a)/v+(o()-.5)*a*.16,y:-n*.7+(z+.5)*(1.4*n)/b+(o()-.5)*n*.16,r:.155+o()*.07})}const T={occ:()=>0,hole:0,mode:"giant",nStick:0,stickR:0,crawl:.05,giants:w},_=Math.floor(o()*3);let M;_===0?M=[-a*.92,-n*.28,-a*.05,-n*.22,a*.08,n*.08,-a*.02,n*.88,a*.22,n*.12,a*.88,-n*.55]:_===1?M=[-a*.9,n*.42,a*.55,n*.48,a*.52,n*.88,a*.52,-n*.88,a*.55,-n*.42,-a*.9,-n*.48]:M=[-a*.85,n*.15,-a*.15,n*.72,a*.35,n*.55,a*.15,0,a*.72,-n*.35,a*.2,-n*.82,-a*.55,-n*.55];const A=l((P,E)=>ia(yl(P,E,M,s*1.2),.04));return[c,p,h,T,A]}function _l(t,e){const{n:i,hh:o,u:a,p:n,seed:s}=t,r=Tl(s,o,n),l=.47*(.86+n.fieldStrength*.12),f=o*.93*(.86+n.fieldStrength*.12),c=r.length,u=a*c,p=Math.min(c-1,Math.floor(u)),d=u-p,m=no(U((d-Sn)/(1-Sn),0,1)),h=r[p],g=r[(p+1)%c],v=wl(i,o,s),b=(.05+h.crawl*(1-m)+g.crawl*m)*(.5+n.motion*.55),w=aa(a*2)*b,T=aa(a*2+.33)*b*(f/Math.max(1e-6,l)),_=(R,Q,j)=>kl(R.occ(Q,j),Q,j,a,l,f,R.hole),M=new Array(i).fill(!1),A=new Array(i).fill(!1),P=h.giants?Tn(v,h.giants,M):[],E=g.giants?Tn(v,g.giants,A):[],z=new Map(P.map(R=>[R.i,R])),W=new Map(E.map(R=>[R.i,R])),x=h.mode==="stick"&&!h.giants?new Set(_n(v,h.occ,h.nStick,Math.max(.05,h.stickR*.72))):null,F=g.mode==="stick"&&!g.giants?new Set(_n(v,g.occ,g.nStick,Math.max(.05,g.stickR*.72))):null,H=Math.sqrt(2*o/Math.max(1,i))*1.58*kt(n)*_t(n),V=1.35+n.warp*2.1;for(let R=0;R<i;R++){const Q=v[R].x,j=v[R].y,ae=h.mode==="pack"?_(h,Q,j):0,O=g.mode==="pack"?_(g,Q,j):0,L=ae*(1-m)+O*m;let oe=U(Q+w,-.5,.5),te=U(j+T,-o,o),Z=H*L;x?.has(R)&&(Z=Math.max(Z,h.stickR*(1-m))),F?.has(R)&&(Z=Math.max(Z,g.stickR*m));const pe=z.get(R),we=W.get(R);if(pe||we){const $=we??pe;if($){const q=pe&&we?1:we?m:1-m;oe=U(Q+w+($.x-Q)*q,-.5,.5),te=U(j+T+($.y-j)*q,-o,o),Z=Math.max(Z,$.r*(n.maxScale/1.85)*q)}}const de=!!(x?.has(R)||F?.has(R));L<.32&&!de&&!pe&&!we&&(Z=0);const ue=V*a+Tt(R*3.1)*(.35+n.perturb*2.2),ke=ue-Math.floor(ue)>.92?1:0,Be=Math.floor(ue)*13+R,y=Z*(pe||we||de?Math.max(.9,ct(R,n)):ct(R,n));e(R,oe,te,y,0,Be,1,Be+13,ke)}}class Sl{poses=[];posesAt(e,i,o,a,n,s=0,r=0,l="auto"){const f=Math.max(.2,a),c=.5/f,u=ll(l,o),p=fl(i,n,s,r),d={n:e,hh:c,R:Math.hypot(.5,c),u:p,th:p*ea,seed:o>>>0,p:n};this.poses.length!==e&&(this.poses=Array.from({length:e},()=>({x:0,y:0,px:0,rot:0,alpha:0,squash:1})));for(const b of this.poses)b.alpha=0;const m=Math.max(1,f),h=f*f,g=dl(p,n),v=(b,w,T,_,M,A,P=1,E,z=0)=>{const W=this.poses[b];W&&(W.x=w,W.y=T*h,W.px=Math.max(0,_*g)*m*vn,W.rot=M,W.alpha=_>.004?1:0,W.squash=1,W.flip=P,W.charge=A,W.chargeB=E,W.morph=z)};return u==="sunflower"?kn(d,v):u==="orbit"?hl(d,v):u==="traffic"?ml(d,v):u==="cascade"?pl(d,v):u==="checker"?gl(d,v):u==="scan"?vl(d,v):u==="snake"?_l(d,v):kn(d,v),this.poses}}const xl=["spring","flow","boids","poles"];function so(t){return!!t&&xl.includes(t)}function oa(t){return U(t??1,.2,2.2)}function na(t){return U(t??.55,.08,1)}function sa(t){return U(t??.34,.12,.72)}function ra(t){return U(t??1,.2,2.2)}function la(t){return U(t??2.1,1.15,3.6)}function ca(t){return U(t??1,.28,2.4)}function fa(t){return U(t??.8,0,2)}function da(t){return U(t??.7,.08,2.2)}function ua(t){return U(t??1,.2,2.2)}function ha(t){return U(t??.7,0,1.6)}function ma(t){return U(t??1,.1,2.2)}function pa(t){return U(t??1,.15,2.4)}function ga(t){return U(t??1,.1,2.2)}function va(t){return U(t??.22,.08,.55)}function ba(t){return U(t??1,.25,2.2)}function ya(t){return U(Math.round(t??3),1,5)}function wa(t){return U(t??1,.15,2.2)}function ka(t){return U(t??.85,.1,2.2)}function Ta(t){return U(t??.8,.12,2.2)}function _a(t){return U(t??1.4,.6,2.8)}function Sa(t){return U(t??.45,0,2)}function Cl(t){return{springStrength:oa(t?.springStrength),springDamp:na(t?.springDamp),springDist:sa(t?.springDist),springElast:ra(t?.springElast),springBreak:la(t?.springBreak),flowScale:ca(t?.flowScale),flowTurb:fa(t?.flowTurb),flowEvolve:da(t?.flowEvolve),flowForce:ua(t?.flowForce),flowDepth:ha(t?.flowDepth),boidCohere:ma(t?.boidCohere),boidSep:pa(t?.boidSep),boidAlign:ga(t?.boidAlign),boidRadius:va(t?.boidRadius),boidSpeed:ba(t?.boidSpeed),poleCount:ya(t?.poleCount),poleAttract:wa(t?.poleAttract),poleRepel:ka(t?.poleRepel),poleSpeed:Ta(t?.poleSpeed),poleFalloff:_a(t?.poleFalloff),poleSwitch:Sa(t?.poleSwitch)}}function El(t,e,i,o,a,n,s){const r=a*3.15,l=o,f=n;let c=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+f*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),u=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+f*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),p=(Math.sin(t*r*.82+e*r*.74+l*.57)+f*.4*Math.cos(t*r*1.6+l*1.1))*s;const d=Math.hypot(c,u,p)||1;return[c/d,u/d,p/d]}function Pl(t,e,i,o){const a=i*(.42+t*.15),n=Math.sin(e*a+t*1.3)*.34+Math.sin(e*a*.37+t)*.08,s=Math.cos(e*a*.86+t*1.9)*.28+Math.cos(e*a*.29+t*.7)*.07,r=Math.sin(e*a*.51+t*2.2)*.2,l=e*o*(.55+t*.18)+t*1.1,f=o<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:n,y:s,z:r,sign:f}}function Ml(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function Al(t,e,i,o){const a=e.length,n={move:t,n:a,lastClock:i,px:new Float32Array(a),py:new Float32Array(a),pz:new Float32Array(a),vx:new Float32Array(a),vy:new Float32Array(a),vz:new Float32Array(a),homeX:new Float32Array(a),homeY:new Float32Array(a),homeZ:new Float32Array(a),links:[],linkKey:""};for(let s=0;s<a;s++){const[r,l,f]=Ml(e[s]);n.px[s]=r,n.py[s]=l,n.pz[s]=f,n.homeX[s]=r,n.homeY[s]=l,n.homeZ[s]=f,n.vx[s]=(e[s].vx-.5)*.08,n.vy[s]=(e[s].vy-.5)*.08,n.vz[s]=0}return t==="spring"&&xn(n,o.springDist),n}function xn(t,e,i=5){const o=t.n,a=[],n=new Set;for(let s=0;s<o;s++){const r=[];for(let l=0;l<o;l++){if(s===l)continue;const f=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);f<e&&r.push({j:l,d:f})}r.sort((l,f)=>l.d-f.d);for(let l=0;l<Math.min(i,r.length);l++){const f=r[l].j,c=Math.min(s,f),u=Math.max(s,f),p=`${c}:${u}`;n.has(p)||(n.add(p),a.push({a:c,b:u,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=a,t.linkKey=`${o}|${e.toFixed(3)}`,a}function Ue(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Il(t,e,i,o){const a=t.n,n=`${a}|${o.springDist.toFixed(3)}`;t.linkKey!==n&&xn(t,o.springDist);const s=o.springStrength*(1.15+(2.2-o.springElast)*.55),r=o.springDamp/(.42+o.springElast*.5),l=o.springBreak,f=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,c=Math.cos(i*.47+.8)*.22,u=Math.sin(i*.31+1.2)*.12;for(const d of t.links){const m=t.px[d.b]-t.px[d.a],h=t.py[d.b]-t.py[d.a],g=t.pz[d.b]-t.pz[d.a],v=Math.hypot(m,h,g)||1e-5;if(d.on&&v>d.rest*l){d.on=!1;continue}if(!d.on&&v<o.springDist*.92&&(d.on=!0),!d.on)continue;const b=v-d.rest,w=s*b,T=m/v,_=h/v,M=g/v;t.vx[d.a]+=T*w*e,t.vy[d.a]+=_*w*e,t.vz[d.a]+=M*w*e,t.vx[d.b]-=T*w*e,t.vy[d.b]-=_*w*e,t.vz[d.b]-=M*w*e}const p=Math.exp(-r*7*e);for(let d=0;d<a;d++){const m=t.homeX[d]-t.px[d],h=t.homeY[d]-t.py[d],g=t.homeZ[d]-t.pz[d];t.vx[d]+=m*.35*e,t.vy[d]+=h*.35*e,t.vz[d]+=g*.35*e;const v=Math.hypot(t.px[d]-f,t.py[d]-c,t.pz[d]-u);if(v<.24){const b=(.24-v)/.24;t.vx[d]+=(f-t.px[d])*b*1.8*e,t.vy[d]+=(c-t.py[d])*b*1.8*e,t.vz[d]+=(u-t.pz[d])*b*1.1*e}t.vx[d]*=p,t.vy[d]*=p,t.vz[d]*=p,t.px[d]+=t.vx[d]*e,t.py[d]+=t.vy[d]*e,t.pz[d]+=t.vz[d]*e,[t.px[d],t.vx[d]]=Ue(t.px[d],t.vx[d],.5),[t.py[d],t.vy[d]]=Ue(t.py[d],t.vy[d],.42),[t.pz[d],t.vz[d]]=Ue(t.pz[d],t.vz[d],.36)}}function Bl(t,e,i,o){const a=i*o.flowEvolve,n=o.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,f]=El(t.px[s],t.py[s],t.pz[s],a,o.flowScale,o.flowTurb,o.flowDepth);t.vx[s]+=r*n*e,t.vy[s]+=l*n*e,t.vz[s]+=f*n*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=Ue(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=Ue(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=Ue(t.pz[s],t.vz[s],.34)}}function Fl(t,e,i){const o=t.n,a=i.boidRadius,n=a*a,s=.18+i.boidSpeed*.28,r=new Float32Array(o),l=new Float32Array(o),f=new Float32Array(o);for(let c=0;c<o;c++){let u=0,p=0,d=0,m=0,h=0,g=0,v=0,b=0,w=0,T=0;for(let _=0;_<o;_++){if(c===_)continue;const M=t.px[_]-t.px[c],A=t.py[_]-t.py[c],P=t.pz[_]-t.pz[c],E=M*M+A*A+P*P;if(E>n||E<1e-8)continue;T++,u+=t.px[_],p+=t.py[_],d+=t.pz[_],v+=t.vx[_],b+=t.vy[_],w+=t.vz[_];const z=Math.sqrt(E),W=(a-z)/a;m-=M/z*W,h-=A/z*W,g-=P/z*W}T&&(r[c]+=(u/T-t.px[c])*i.boidCohere*1.15,l[c]+=(p/T-t.py[c])*i.boidCohere*1.15,f[c]+=(d/T-t.pz[c])*i.boidCohere*1.15,r[c]+=m*i.boidSep*1.8,l[c]+=h*i.boidSep*1.8,f[c]+=g*i.boidSep*1.8,r[c]+=(v/T-t.vx[c])*i.boidAlign*1.35,l[c]+=(b/T-t.vy[c])*i.boidAlign*1.35,f[c]+=(w/T-t.vz[c])*i.boidAlign*1.35),r[c]+=-t.px[c]*.22,l[c]+=-t.py[c]*.22,f[c]+=-t.pz[c]*.18}for(let c=0;c<o;c++){t.vx[c]+=r[c]*e,t.vy[c]+=l[c]*e,t.vz[c]+=f[c]*e;const u=Math.hypot(t.vx[c],t.vy[c],t.vz[c])||1;if(u>s){const p=s/u;t.vx[c]*=p,t.vy[c]*=p,t.vz[c]*=p}t.px[c]+=t.vx[c]*e,t.py[c]+=t.vy[c]*e,t.pz[c]+=t.vz[c]*e,[t.px[c],t.vx[c]]=Ue(t.px[c],t.vx[c],.5),[t.py[c],t.vy[c]]=Ue(t.py[c],t.vy[c],.42),[t.pz[c],t.vz[c]]=Ue(t.pz[c],t.vz[c],.34)}}function Rl(t,e,i,o){const a=[];for(let s=0;s<o.poleCount;s++)a.push(Pl(s,i,o.poleSpeed,o.poleSwitch));const n=o.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,f=0;for(const c of a){const u=c.x-t.px[s],p=c.y-t.py[s],d=c.z-t.pz[s],m=Math.hypot(u,p,d)||1e-4,h=(c.sign>0?o.poleAttract:o.poleRepel)/(m**n+.06),g=c.sign>0?1:-1;if(r+=u/m*h*g*.55,l+=p/m*h*g*.55,f+=d/m*h*g*.32,r+=-p/m*h*.28,l+=u/m*h*.28,m<.1){const v=(.1-m)*10;r-=u/m*v,l-=p/m*v,f-=d/m*v*.6}}for(let c=0;c<t.n;c++){if(s===c)continue;const u=t.px[s]-t.px[c],p=t.py[s]-t.py[c],d=t.pz[s]-t.pz[c],m=u*u+p*p+d*d;if(m>.018||m<1e-8)continue;const h=Math.sqrt(m),g=(.135-h)*2.4;r+=u/h*g,l+=p/h*g,f+=d/h*g*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=f*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=Ue(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=Ue(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=Ue(t.pz[s],t.vz[s],.3)}}function zl(t,e,i,o,a){const n=i.length;let s=t;(!s||s.move!==e||s.n!==n||o<s.lastClock-.04||o-s.lastClock>1.6)&&(s=Al(e,i,o,a));let r=o-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,f=r/l;for(let c=0;c<l;c++)e==="spring"?Il(s,f,o,a):e==="flow"?Bl(s,f,o,a):e==="boids"?Fl(s,f,a):Rl(s,f,o,a);return s.lastClock=o,s}function Ol(t,e,i){if(e<0||e>=t.n)return null;const o=Math.max(.46,1.06-t.pz[e]*.52),a=U(1.1/o,.55,1.7);return{x:U(t.px[e]/o,-.48,.48),y:U(t.py[e]/o,-.4,.4),px:U((.07+i*.03)*a,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:U(.55+a*.4,.5,1)}}const Cn=["heraldry","wallpaper","giants","shower"],St=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],En=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"],Hl=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function ro(t){return!!t&&Hl.includes(t)}const Rt={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES",field:"FIELD"};function Pe(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function zt(t){return St.includes(t)?t:"sailor"}function Pn(t){return En.includes(t)?t:"rush"}const Ll=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function Nl(t){return!!t&&Ll.includes(t)}const Mn=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"];function lo(t){return Mn[(t>>>0)%Mn.length]}function pi(t){return U(t??1,.35,1.2)}function gi(t){return U(t??1,.2,2.2)}function vi(t){return U(t??.7,.12,2)}function bi(t){return U(t??1,.2,2)}function yi(t){return U(t??.72,.12,1)}function An(t,e,i,o){const a=ve(t)*Math.PI*2,n=U(i,.2,2),s=U(o,.12,1),r=1-s,l=e*.68,f=e*(.95+r*.55),c=e*(.45+r*1.55),u=(Be,Oe,y)=>(Be+Oe*n)*(.42+.58*(.5+.5*Math.sin(y))),p=.84+.22*Math.sin(l+.4),d=.8+.24*Math.cos(l*.87+1.1),m=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*n)*p,g=u(.04,.07,f+.3)*(.4+s*.6),v=u(.02,.08,c+1.4)*(.18+r*.95),b=u(.01,.06,c*1.3+.8)*r,w=u(.006,.035,f*1.6+2.1)*r*r,T=(.17+.11*n)*d,_=u(.035,.065,f+1.7)*(.4+s*.6),M=u(.02,.07,c+.6)*(.18+r*.95),A=u(.01,.055,c*1.2+2.4)*r,P=u(.006,.03,f*1.4+.5)*r*r,E=(.13+.11*n)*m,z=u(.04,.08,f+2)*(.45+s*.55),W=u(.02,.07,c+1.9)*(.18+r*.95),x=u(.012,.055,c*.9+.2)*r;let F=Math.cos(a+l*.18)*h+Math.cos(2*a+f*.14+.7)*g+Math.sin(3*a+l*.11+1.2)*v+Math.cos(4*a+c*.09+.4)*b+Math.sin(5*a+f*.16+2.2)*w,k=Math.sin(a+l*.15+.5)*T+Math.sin(2*a+f*.19+1.4)*_+Math.cos(3*a+l*.09+.3)*M+Math.sin(4*a+c*.12+1.8)*A+Math.cos(5*a+f*.08+.9)*P,H=Math.sin(a+l*.12+1.1)*E+Math.cos(2*a+f*.17+.6)*z+Math.sin(3*a+c*.1+2.5)*W+Math.cos(4*a+l*.13+1.6)*x;const V=Math.sin(2*a+f*.22)*r*.12*n;H+=V;const R=l*.19+Math.sin(f*.27)*.55,Q=Math.sin(l*.29+.8)*(.28+.18*n),j=Math.cos(l*.23+1.5)*(.2+r*.4),ae=Math.cos(R),O=Math.sin(R),L=F*ae-H*O,oe=F*O+H*ae,te=Math.cos(Q),Z=Math.sin(Q),pe=k*te-oe*Z,we=k*Z+oe*te,de=Math.cos(j),ue=Math.sin(j),Ce=L*de-pe*ue,ke=L*ue+pe*de;return{x:Ce+Math.sin(l*.47)*.06*n,y:ke+Math.cos(l*.39+1.3)*.05*n,z:we+Math.sin(f*.21+.6)*.07*n}}function Ye(t,e=1){return(t>40?t/60:2)*e}function Ul(t,e,i=1,o=0){return ve((t-o)*Ye(e,i))}function ql(t,e,i=1,o=0){const a=Math.cos(Ul(t,e,i,o)*Math.PI*2);return a>0?a*a:0}function In(t,e,i=1,o=0){return Math.floor(Math.max(0,t-o)*Ye(e,i))}function wi(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":"heraldry"}function Bn(t,e){return e&&En.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":"rush"}const co=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],fo={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function Dl(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const $l={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},Fn={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},Wl={sailor:["fish","anchor","boat","swallow","helm"],circus:["elephant","tent","horse","lion","mask"],fruit:["pear","lemon","apple","banana","pineapple"],nature:["tree","deer","owl","fox","pine"],love:["heart","swan","rose","dove","crown"],space:["rocket","saturn","ufo","planet","astro"],sweet:["lolly","cupcake","donut","waffle","sundae"],music:["vinyl","guitar","piano","sax","headphone"],kitchen:["kettle","toast","pan","chefhat","mug"],weather:["rainbow","umbrella","sun","cloud","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","invader","ghostie","pawn"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate","whistle"],school:["globe","backpack","book","bell","pencil"]},Rn={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},ki=256;function zn(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function ft(t,e){return e[Math.floor(t()*e.length)%e.length]}function On(t,e){return t()<.32?e:ft(t,co)}function jl(t,e="rush"){return e==="tunnel"?Fn[t]:e==="lattice"?Rn[t]:$l[t]}function Vl(t,e,i,o,a=!1,n){const s=a?Wl[o]:jl(o,e==="bloom"?"rush":e);let r=ft(t,s);!a&&e==="lattice"&&t()<.4&&(r=ft(t,Rn[o])),!a&&e==="tunnel"&&t()<.28&&(r=ft(t,Fn[o]));const l=a?i:On(t,i);let f=a?n&&n.toLowerCase()!==l.toLowerCase()?n:Ot(i,"#141414",.42):On(t,i);return f===l&&(f=a?Ot(i,"#f4f0e4",.55):ft(t,co)),{kind:r,pattern:a?t()<.82?"plain":"half":t()<.58?"plain":ft(t,["polka","hoop","half","bar"]),a:l,b:f,mirror:t()>.5}}function Gl(t){return t>.5?U((t-.5)/.5,0,1):0}function Kl(t,e,i,o=0){const a=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t-o)*n)*11+5>>>0)%a}function Ti(t){return U(t??1,.5,2)}function _i(t){return U(t??1,.35,2)}function Xl(t,e,i="sailor",o,a=!0,n){const s=Ae(t>>>0),r=240,l=o&&o!==i?o:null,f=[];for(let c=0;c<r;c++){const u=c<70?"lattice":c<130?"tunnel":"rush",p=l&&c&1?l:i;f.push({x:s(),y:s(),z:s(),rot:(s()-.5)*.55,size:.55+s()*.9,vx:(s()-.5)*.06,vy:(s()-.35)*.08,vr:(s()-.5)*.25,charge:Vl(s,u,e,p,a,n)})}return f}function Zl(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function Hn(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,o=e>>8&255,a=e&255;return(.22*i+.7*o+.08*a)/255}function Ln(t,e,i,o){t.save(),t.beginPath(),e(),t.clip();const a=i.a,n=i.b,s=o*2.4;if(t.fillStyle=a,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const r=o*.38;for(let l=-4;l<5;l++)for(let f=-4;f<5;f++)t.beginPath(),t.arc((f+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=o*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,o*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-o*.18,s*2,o*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*o*.3-o*.07,s*2,o*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(2,o*.03),t.strokeStyle=Hn(i.a)<Hn(i.b)?i.a:i.b,t.stroke(),t.restore()}function uo(t,e,i,o=.42){for(let a=0;a<i*2;a++){const n=a%2===0?e:e*o,s=a*Math.PI/i-Math.PI/2,r=Math.cos(s)*n,l=Math.sin(s)*n;a===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function Ql(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Yl(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function Nn(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Jl(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function ec(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function tc(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function ic(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const o=-Math.PI*.95+i/7*Math.PI*1.9,a=i%2===0?e:e*.72;t.lineTo(Math.sin(o)*a,-Math.cos(o)*a*.85)}t.closePath()}function ac(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function oc(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function nc(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function sc(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function rc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function lc(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function cc(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function fc(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function dc(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function uc(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function hc(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function mc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function pc(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function gc(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function vc(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function bc(t,e){for(let i=0;i<5;i++){const o=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(o)*e*.45,Math.sin(o)*e*.45,e*.32,e*.22,o,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function yc(t,e){uo(t,e,8,.55)}function wc(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function kc(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function Tc(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function _c(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Sc(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function xc(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Cc(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Ec(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function Pc(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function Mc(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Ac(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function Ic(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function Bc(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function Fc(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),Nn(t,e*.72)}function Rc(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function zc(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function Oc(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function Hc(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function Lc(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function Nc(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function Uc(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function qc(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function Dc(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function $c(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function Wc(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function jc(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function Vc(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function Gc(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function Kc(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function Xc(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function Zc(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function Qc(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function Yc(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Jc(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function e0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function t0(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function i0(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function a0(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function o0(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function n0(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function s0(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function r0(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function l0(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function c0(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function f0(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function d0(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function u0(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function h0(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function m0(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function p0(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function g0(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function v0(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function b0(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function y0(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function w0(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function k0(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function T0(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function _0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function S0(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function x0(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function C0(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function E0(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function P0(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function M0(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function A0(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function I0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function B0(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function F0(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function R0(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function z0(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function O0(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function H0(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function L0(t,e){for(let i=0;i<6;i++){const o=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(o)*e*.9,Math.sin(o)*e*.9),t.lineTo(Math.cos(o+.18)*e*.35,Math.sin(o+.18)*e*.35),t.closePath()}}function N0(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function U0(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function q0(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function D0(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function $0(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function W0(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function j0(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function V0(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function G0(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function K0(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function X0(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function Z0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function Q0(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function Y0(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function J0(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function ef(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function tf(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function af(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function of(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function nf(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function sf(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function rf(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function lf(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function cf(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function ff(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function df(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function uf(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function hf(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function mf(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function pf(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function gf(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function vf(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function bf(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function yf(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function wf(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function kf(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function Tf(t,e){uo(t,e*.72,4,.32)}function _f(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function Sf(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function xf(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function Cf(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function Ef(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function Pf(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function Mf(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function Af(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function If(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function Bf(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function Ff(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function Rf(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function zf(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function Of(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function Hf(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function Lf(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function Nf(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function Uf(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function qf(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function Df(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function $f(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function Wf(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function jf(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function Vf(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function Gf(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function Kf(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function Xf(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function Zf(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Qf(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function Yf(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function Jf(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function ed(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function td(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function id(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function ad(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function od(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function nd(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":uo(t,i,5,e==="starfish"?.42:.4);break;case"heart":Ql(t,i);break;case"moon":Yl(t,i);break;case"figure":Nn(t,i);break;case"fish":Jl(t,i);break;case"anchor":ec(t,i);break;case"wave":tc(t,i);break;case"shell":ic(t,i);break;case"boat":ac(t,i);break;case"tail":oc(t,i);break;case"swallow":nc(t,i);break;case"elephant":sc(t,i);break;case"tent":rc(t,i);break;case"ball":lc(t,i);break;case"bow":cc(t,i);break;case"horse":fc(t,i);break;case"balloon":dc(t,i);break;case"ticket":uc(t,i);break;case"pear":hc(t,i);break;case"lemon":mc(t,i);break;case"cherry":pc(t,i);break;case"leaf":gc(t,i);break;case"mushroom":vc(t,i);break;case"flower":bc(t,i);break;case"sun":yc(t,i);break;case"cloud":wc(t,i);break;case"bolt":kc(t,i);break;case"umbrella":Tc(t,i);break;case"bird":_c(t,i);break;case"tree":Sc(t,i);break;case"deer":xc(t,i);break;case"fox":Cc(t,i);break;case"owl":Ec(t,i);break;case"acorn":Pc(t,i);break;case"cone":Mc(t,i);break;case"mountain":Ac(t,i);break;case"drop":Ic(t,i);break;case"moth":Bc(t,i);break;case"wingfig":Fc(t,i);break;case"swan":Rc(t,i);break;case"cat":zc(t,i);break;case"crown":Oc(t,i);break;case"key":Hc(t,i);break;case"ring":Lc(t,i);break;case"envelope":Nc(t,i);break;case"potion":Uc(t,i);break;case"rocket":Dc(t,i);break;case"planet":$c(t,i);break;case"saturn":Wc(t,i);break;case"ufo":jc(t,i);break;case"comet":Vc(t,i);break;case"satellite":Gc(t,i);break;case"lolly":Kc(t,i);break;case"coneice":Xc(t,i);break;case"cupcake":Zc(t,i);break;case"donut":Qc(t,i);break;case"candy":Yc(t,i);break;case"note":Jc(t,i);break;case"vinyl":e0(t,i);break;case"headphone":t0(t,i);break;case"mic":i0(t,i);break;case"speaker":a0(t,i);break;case"crab":o0(t,i);break;case"helm":n0(t,i);break;case"lighthouse":s0(t,i);break;case"compass":r0(t,i);break;case"popcorn":l0(t,i);break;case"cane":c0(t,i);break;case"mask":f0(t,i);break;case"apple":d0(t,i);break;case"banana":u0(t,i);break;case"grape":h0(t,i);break;case"rabbit":m0(t,i);break;case"snail":p0(t,i);break;case"fern":g0(t,i);break;case"rose":v0(t,i);break;case"diamond":b0(t,i);break;case"candle":y0(t,i);break;case"alien":w0(t,i);break;case"asteroid":k0(t,i);break;case"telescope":T0(t,i);break;case"cookie":_0(t,i);break;case"waffle":S0(t,i);break;case"guitar":x0(t,i);break;case"drum":C0(t,i);break;case"piano":E0(t,i);break;case"clef":P0(t,i);break;case"kettle":M0(t,i);break;case"mug":A0(t,i);break;case"whisk":I0(t,i);break;case"toast":B0(t,i);break;case"egg":F0(t,i);break;case"spoon":R0(t,i);break;case"chili":z0(t,i);break;case"bottle":O0(t,i);break;case"rain":H0(t,i);break;case"flake":L0(t,i);break;case"wind":N0(t,i);break;case"rainbow":U0(t,i);break;case"thermo":q0(t,i);break;case"taxi":D0(t,i);break;case"hydrant":$0(t,i);break;case"bike":W0(t,i);break;case"lamp":j0(t,i);break;case"signal":V0(t,i);break;case"bus":G0(t,i);break;case"stick":K0(t,i);break;case"dice":X0(t,i);break;case"coin":Z0(t,i);break;case"pawn":Q0(t,i);break;case"cart":Y0(t,i);break;case"flag":J0(t,i);break;case"buoy":ef(t,i);break;case"hook":tf(t,i);break;case"porthole":af(t,i);break;case"oar":of(t,i);break;case"hoop":nf(t,i);break;case"unicycle":sf(t,i);break;case"lion":rf(t,i);break;case"topper":lf(t,i);break;case"orange":cf(t,i);break;case"peach":ff(t,i);break;case"berry":df(t,i);break;case"melon":uf(t,i);break;case"pineapple":hf(t,i);break;case"pine":mf(t,i);break;case"hedgehog":pf(t,i);break;case"nest":gf(t,i);break;case"toadstool":vf(t,i);break;case"locket":bf(t,i);break;case"dove":yf(t,i);break;case"kiss":wf(t,i);break;case"rover":kf(t,i);break;case"spark":Tf(t,i);break;case"astro":_f(t,i);break;case"pretzel":Sf(t,i);break;case"sundae":xf(t,i);break;case"choco":Cf(t,i);break;case"sax":Ef(t,i);break;case"trumpet":Pf(t,i);break;case"amp":Mf(t,i);break;case"fork":Af(t,i);break;case"pan":If(t,i);break;case"chefhat":Bf(t,i);break;case"tornado":Ff(t,i);break;case"subway":Rf(t,i);break;case"mailbox":zf(t,i);break;case"skyline":Of(t,i);break;case"ghostie":Hf(t,i);break;case"pixel":Lf(t,i);break;case"joystick":Nf(t,i);break;case"shroomup":Uf(t,i);break;case"invader":qf(t,i);break;case"skull":Df(t,i);break;case"bat":$f(t,i);break;case"pumpkin":Wf(t,i);break;case"tomb":jf(t,i);break;case"cauldron":Vf(t,i);break;case"web":Gf(t,i);break;case"trophy":Kf(t,i);break;case"whistle":Xf(t,i);break;case"jersey":Zf(t,i);break;case"skate":Qf(t,i);break;case"goal":Yf(t,i);break;case"pencil":Jf(t,i);break;case"book":ed(t,i);break;case"globe":td(t,i);break;case"backpack":id(t,i);break;case"ruler":ad(t,i);break;case"bell":od(t,i);break;default:qc(t,i);break}}function sd(t,e,i){const o=()=>nd(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Ln(t,o,e,i),t.restore();return}Ln(t,o,e,i)}function rd(t){const e=document.createElement("canvas");e.width=ki,e.height=ki;const i=e.getContext("2d");return i&&(i.translate(ki/2,ki/2),sd(i,t,ki*.38)),e}class ld{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;agents=null;fieldPoses=[];builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";builtTwoInk=!0;builtPaper="";stamp(e){const i=Zl(e);let o=this.stamps.get(i);return o||(o=rd(e),this.stamps.set(i,o)),o}ensure(e,i,o,a,n=!0,s=""){const r=a&&a!==o?a:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===o&&this.builtKitB===r&&this.builtTwoInk===n&&this.builtPaper===s&&this.particles.length||(this.particles=Xl(e,i,o,r||null,n,s),this.stamps.clear(),this.sim=null,this.agents=null,this.builtSeed=e,this.builtInk=i,this.builtKit=o,this.builtKitB=r,this.builtTwoInk=n,this.builtPaper=s)}paint(e){const i=Math.max(16,Math.floor(e.width)),o=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==o&&(this.canvas.height=o);const a=this.canvas.getContext("2d",{alpha:!1});if(!a)return this.canvas;const n=zt(e.kit),s=e.kitB?zt(e.kitB):null,r=zn(e.paper,ud(n,e.seed)),l=zn(e.ink,fo[n]),f=e.twoInk!==!1;this.ensure(e.seed>>>0,l,n,s,f,r);const c=Bn(e.generator,e.move),u=U(e.audio,0,1),p=U(e.bass,0,1),d=U(e.beat,0,1),m=e.bpm>40?e.bpm:0,h=Ti(e.scale),g=_i(e.density),v=pi(e.pace),b={travel:gi(e.chainTravel),morph:vi(e.chainMorph),vary:bi(e.chainVary),smooth:yi(e.chainSmooth)};dd(a,i,o,r,n,e.time,e.seed,d,p,!!e.night,l,f),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high";const w=e.beatOffset??0,T=e.time,_=ro(c)&&m>40&&w>.001?Math.max(0,T-w):T,M=_*v,A=i/Math.max(o,1),P=c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||ro(c)?48:c==="prism"?64:c==="helix"||c==="braid"?130:c==="tunnel"||c==="well"?120:c==="hall"?148:c==="bloom"||c==="gyre"||c==="drift"||c==="sway"?140:c==="chain"?40:wt(c)?360:so(c)?42:this.particles.length,E=wt(c)?Math.max(40,Math.min(560,Math.round(P*g))):Math.max(8,Math.min(this.particles.length,Math.round(P*g))),z=c==="prism"?3:1;if(wt(c)){const H=nl({fieldStrength:e.fieldStrength,fieldScale:e.fieldScale,fieldEvolve:e.fieldEvolve,density:e.fieldDensity,densityScale:e.fieldDensityScale,densityEvolve:e.fieldDensityEvolve,flow:e.fieldFlow,curl:e.fieldCurl,flowScale:e.fieldFlowScale,radius:e.fieldRadius,scaleAmp:e.fieldScaleAmp,minScale:e.fieldMinScale,maxScale:e.fieldMaxScale,perturb:e.fieldPerturb,warp:e.fieldWarp,sparsity:e.fieldSparsity,contrast:e.fieldContrast,motion:e.fieldMotion,trance:e.fieldTrance});this.agents=this.agents??new Sl,this.fieldPoses=this.agents.posesAt(E,_,e.seed>>>0,A,H,m,w,e.fieldPattern??"auto"),this.sim=null}else if(so(c)){this.agents=null;const H=Cl({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=zl(this.sim,c,this.particles.slice(0,E),_,H)}else this.agents=null,this.sim=null;const W=c==="spot"?.34:wt(c)?.5:Nl(c)||c==="chain"?.26:.22,x=(H,V)=>{const R=V,Q=Math.min(R.px*h,W)*Math.min(i,o);if(Q<5)return;const j=(.5+R.x)*i,ae=(.5+R.y/A)*o;for(let O=0;O<z;O++){a.save();const L=z>1?(O-1)*Q*.09:0,oe=z>1?O===2?Q*.06:O===0?-Q*.03:0:0;if(j+L<-Q||ae+oe<-Q||j+L>i+Q||ae+oe>o+Q){a.restore();continue}a.translate(j+L,ae+oe),a.rotate(R.rot+(z>1?O*.1:0)),V.flip!=null&&a.scale(V.flip,1),V.squash&&a.scale(V.squash,1/Math.max(.35,V.squash)),V.glow&&(a.globalAlpha=V.alpha*.32*V.glow,a.fillStyle=V.tint??l,a.beginPath(),a.arc(0,0,Q*(.4+V.glow*.16),0,Math.PI*2),a.fill()),a.globalAlpha=V.alpha*(z>1?.72:1),a.drawImage(H,-Q/2,-Q/2,Q,Q),a.restore()}},F=[],k=(H,V)=>{F.push({stamp:H,pose:V})};for(let H=0;H<E;H++){const V=wt(c)&&this.agents?this.fieldPoses[H]??null:null,R=V?.morph??0,Q=Math.floor(V?.charge??H),j=Math.floor(V?.chargeB??Q),ae=this.particles[(Q%this.particles.length+this.particles.length)%this.particles.length];let O=wt(c)&&this.agents?V:so(c)&&this.sim?Ol(this.sim,H,ae.size):cd(ae,H,c,M,u,p,d,m,E,_,b);if(O&&!(O.alpha<.04))if(wt(c)&&d>.02&&(O={...O,glow:d*.38,squash:(O.squash??1)*(1-d*.045),px:O.px*(1+d*.07)}),wt(c)&&R>.03&&R<.97&&j!==Q){const L=this.particles[(j%this.particles.length+this.particles.length)%this.particles.length];k(this.stamp(ae.charge),{...O,alpha:O.alpha*(1-R),px:O.px*(1-.1*R)}),k(this.stamp(L.charge),{...O,alpha:O.alpha*R,px:O.px*(.9+.1*R)})}else{const L=R>=.97?this.particles[(j%this.particles.length+this.particles.length)%this.particles.length]:ae;k(this.stamp(L.charge),O)}}F.sort((H,V)=>H.pose.y-V.pose.y||H.pose.px-V.pose.px);for(const H of F)x(H.stamp,H.pose);return(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&d>.04&&(a.save(),a.translate(i*.5,o*.5),a.strokeStyle=Ot(l,"#fff4d8",.72),a.globalAlpha=.18+d*.42,a.lineWidth=2.6+d*6,a.beginPath(),a.arc(0,0,Math.min(i,o)*(.16+d*.2),0,Math.PI*2),a.stroke(),a.globalAlpha=.1+d*.22,a.beginPath(),a.arc(0,0,Math.min(i,o)*(.3+d*.18),0,Math.PI*2),a.stroke(),a.restore()),this.canvas}}function ve(t){return(t%1+1)%1}function ho(t,e,i){const o=Math.cos(i),a=Math.sin(i);return{x:t*o-e*a,y:t*a+e*o}}function Vt(t,e=.28,i=2.55){const o=e+ve(t)*i,a=e+i,n=U((a-o)/.3,0,1)*U((o-e)/.1,0,1);return n<=.001?null:{depth:o,fade:n}}function Un(t){const e=ve(t);return e<.5?e*2:2-e*2}function qn(t){return Un(t)-.5}function cd(t,e,i,o,a,n,s,r,l=48,f=o,c){const u=ro(i),p=ql(f,r),d=U(Math.max(s*(u?.48:.85),p*(u?.72:.22)),0,1);if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,A=(_+.5)/6-.5,P=Math.sin(o*1.7+_*.72+T*.18);return{x:M*.9+P*.07,y:A*.74+Math.sin(o*.82+_*.9)*.035,px:U(.085+t.size*.045+d*.05,.06,.2),rot:t.rot+P*.22,alpha:1,glow:d*.5}}if(i==="rings"){const w=e%4,T=Math.floor(e/4),_=12,M=w&1?-1:1,A=T/_*Math.PI*2+o*(.48+w*.08)*M,P=.14+w*.11;return{x:Math.cos(A)*P,y:Math.sin(A)*P*.88,px:U(.07+t.size*.035+d*.05,.05,.18),rot:A+t.rot*.25,alpha:.96,glow:d*.48}}if(i==="loom"){const b=o*1.05+t.x*Math.PI*2,w=o*1.45+t.y*Math.PI*2;return{x:Math.sin(b)*.4+Math.sin(w*.5)*.06,y:Math.sin(b*2+t.z*Math.PI)*.3,px:U(.08+t.size*.045+d*.05,.06,.2),rot:b*.18+t.rot,alpha:1,glow:d*.48}}if(i==="petal"){const w=e%6,T=Math.floor(e/6)/8,_=w/6*Math.PI*2+o*.34,M=.8+.2*Math.sin(o*1.25),A=(.1+T*.32)*M;return{x:Math.cos(_)*A,y:Math.sin(_)*A*.9,px:U(.075+t.size*.04+d*.05,.055,.2),rot:_+Math.PI*.5,alpha:U(.42+M*.55,.4,1),glow:d*.5}}if(i==="flock"){const b=e%5,T=ve(t.z+o*(.18+b*.02))*Math.PI*2+b*.32,_=.2+Math.sin(T*2+b)*.1+b*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:U(.075+t.size*.04+d*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:d*.48}}if(i==="wheel"){const w=e%3,M=Math.floor(e/3)/14*Math.PI*2+o*.58*(w===1?-1:1),A=.2+w*.12,P=.5+.5*Math.sin(M);return{x:Math.cos(M)*A,y:Math.sin(M)*A*.72,px:U((.075+t.size*.035)*(.78+P*.28)+d*.05,.05,.22),rot:M,alpha:U(.5+P*.45,.45,1),glow:d*.48}}if(i==="silk"){const b=e%4,w=b<2?1:-1,T=ve(t.x+o*.14*w+b*.08),_=(b/3-.5)*.52+Math.sin(T*Math.PI*3+b)*.055;return{x:T-.5,y:_,px:U(.07+t.size*.038+d*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:d*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,A=.32+.68*(.5+.5*Math.sin(o*2.15+T*.85+t.z)),P=U(A*(.42+a*.22+n*.2+p*.28),.18,1),E=.42-_/Math.max(5,1)*P*.82;return{x:M*.86,y:E,px:U(.075+t.size*.03+d*.03,.055,.18),rot:t.rot*.2,alpha:U(.45+(1-_/6)*.5+d*.15,.4,1),glow:d*.55,squash:1-d*.08}}if(i==="ripple"){const w=e%3,T=Math.floor(e/3),_=16,M=ve(o*.32),A=.15+w*.145+M*.16+p*.05,P=T/_*Math.PI*2+o*.1;return{x:Math.cos(P)*A,y:Math.sin(P)*A*.88,px:U(.062+t.size*.024+d*.02,.048,.13),rot:P+t.rot*.2,alpha:U(.96-w*.08,.6,1),glow:d*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,M=r>40?r/60*Math.PI*2:5.4,A=T&1?-1:1,P=Math.sin(o*M+T*.85)*.82*A,E=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(P)*E,y:-.44+Math.cos(P)*E,px:U(.07+t.size*.03+d*.028,.05,.16),rot:P,alpha:1,glow:d*.4}}if(i==="burst"){const w=e%3,M=Math.floor(e/3)/16*Math.PI*2+o*.2*(w===1?-1:1),A=(.14+w*.13)*(1+p*.42);return{x:Math.cos(M)*A,y:Math.sin(M)*A*.9,px:U((.08+t.size*.035)*(1+d*.22),.055,.22),rot:M+t.rot*.2,alpha:U(.55+d*.4,.45,1),glow:d*.75,squash:1+d*.14}}if(i==="halo"){const w=e%2,M=Math.floor(e/2)/24*Math.PI*2+o*.26*(w?-1:1),A=.84+.16*Math.sin(o*1.15)+d*.2,P=(.26+w*.14)*A,E=U(.28+d*.65+n*.15,0,1);return{x:Math.cos(M)*P,y:Math.sin(M)*P*.9,px:U(.07+t.size*.032+E*.04,.05,.18),rot:M+Math.PI*.5,alpha:U(.5+E*.45,.4,1),glow:E}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,M=(T+.5)/16-.5,A=.09+a*.05+p*.08,P=M*Math.PI*3.4+o*2.15+_*.55;return{x:M*.92,y:(_-1)*.2+Math.sin(P)*A,px:U(.065+t.size*.03+d*.026,.05,.15),rot:Math.cos(P)*.32,alpha:1,glow:d*.45}}if(i==="drop"){const b=Gl(s),w=b*b;return{x:t.x-.5,y:t.y-.5-w*.07,px:U((.1+t.size*.075)*(1+b*.9),.07,.44),glow:b*.95,rot:t.rot,alpha:1,squash:1-b*.2}}if(i==="spot"){const b=Math.max(8,l),w=Kl(f,r,b),T=e===w,_=T?U(Math.max(s,d),0,1):0,M=e/b*Math.PI*2,A=.3;return{x:Math.cos(M)*A,y:Math.sin(M)*A*.78,px:U((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const b=Ye(r),w=qn(t.x+(.16+Math.abs(t.vx)*.5)*f*b),T=qn(t.y+(.13+Math.abs(t.vy)*.42)*f*b*.9),_=Math.min(.5-Math.abs(w),.5-Math.abs(T));return{x:w,y:T,px:U(.08+t.size*.04+d*.02,.06,.18),glow:(_<.065?.55:0)+d*.28,rot:t.rot+t.vr*o*.7,alpha:1}}if(i==="step"){const w=In(f,r,2),T=Math.floor(e/16)%2,_=(e%16/16+w/16)*Math.PI*2*(T?-1:1),M=.26+T*.12;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.8,px:U(.07+t.size*.03+d*.02,.05,.16),rot:_,alpha:1,glow:d*.55}}if(i==="moire"){const b=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+o*(b?-.78:.62),_=.2+b*.13+p*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:U(.065+t.size*.028+d*.018,.048,.14),rot:T+t.rot*.2,alpha:b?.78:1,glow:d*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,M=_&1?1:-1;return{x:(ve((T+.5)/8+f*Ye(r)*.28*M)-.5)*.92,y:((_+.5)/6-.5)*.78,px:U(.07+t.size*.03+d*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:d*.42}}if(i==="zip"){const b=e%3,w=b===1?-1:1,T=1-p*.16;return{x:(ve(t.x+f*Ye(r)*.34*w*T+b*.12)-.5)*.94,y:(b/2-.5)*.52,px:U(.07+t.size*.032+d*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:d*.4}}if(i==="ghost"){const b=(e&1)===0,w=b?0:1/Ye(r),T=t.x*Math.PI*2+(f-w)*Ye(r)*1.35,_=.3+Math.sin((f-w)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:U(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:b?1:.34,glow:b?d*.5:.12}}if(i==="poly"){const b=e&1,w=b?8:12,T=Math.floor(e/2)%w,_=b?3:4,M=T/w*Math.PI*2+f*Ye(r)*(_/4)*(b?-1:1),A=.2+b*.15;return{x:Math.cos(M)*A,y:Math.sin(M)*A*.84,px:U(.068+t.size*.03+d*.018,.05,.15),rot:M,alpha:1,glow:d*.45}}if(i==="fall"){const b=ve(t.z+f*Ye(r,.5)),w=Un(b),T=w*w,_=w>.82?(w-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:U(.075+t.size*.035+d*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:d*.4,squash:1-_*.28}}if(i==="liss"){const b=Ye(r),w=f*b*Math.PI*2*1.5+t.x*6.2,T=f*b*Math.PI*2+t.y*5.4;return{x:Math.sin(w)*.4,y:Math.sin(T)*.32,px:U(.07+t.size*.032+d*.02,.05,.16),rot:w*.15+t.rot,alpha:1,glow:d*.42}}if(i==="snap"){const b=In(f,r,1)&1?1:-1,w=Math.floor(e/8)%5,T=e%8;return{x:b*(.2+T/7*.1),y:(w/4-.5)*.72,px:U(.072+t.size*.03+d*.025,.05,.16),rot:t.rot*.2+b*.08,alpha:1,glow:d*.6,squash:1-d*.1}}if(i==="chain"){const b=c?.travel??1,w=c?.morph??.7,T=c?.vary??1,_=c?.smooth??.72,A=.62/Math.max(8,l),P=ve(f*b*.14-e*A),E=f*w,z=An(P,E,T,_),W=An(ve(P+A),E,T,_),x=Math.max(.42,1.05-z.z*.55),F=Math.max(.42,1.05-W.z*.55),k=z.x/x,H=z.y/x,V=Math.atan2(W.y/F-H,W.x/F-k),R=U(1.12/x,.55,1.85);return{x:k,y:H,px:U((.072+t.size*.028)*R,.05,.24),rot:V,alpha:U(.52+R*.42,.5,1)}}if(i==="tunnel"){const w=.3+ve(t.z-o*(.4+a*.22+n*.1))*2.45;if(w<.34||w>2.65)return null;const T=t.x*Math.PI*2+o*.14+t.rot*.3,_=(.16+t.y*.58)/w;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:U(.2*t.size*(.95+n*.1+d*.26)/w,.04,.5),glow:d*.42,rot:t.rot+t.vr*o*.2,alpha:U((2.65-w)/.28,0,1)*U((w-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,A=.32+(1-ve(o*(.2+a*.12)+t.z*.02))*2.2;return{x:T/(A*.62),y:_/(A*.62),px:U(.16*t.size/A,.05,.42),rot:t.rot*.25,alpha:U((2.4-A)/.25,0,1)}}if(i==="bloom"){const b=ve(t.z-o*(.34+n*.12)),w=b*b,T=t.x*Math.PI*2+o*.1+t.rot;return{x:Math.cos(T)*w*.92,y:Math.sin(T)*w*.92,px:U(.05+w*.32*t.size*(1+a*.06+d*.24),.04,.48),glow:d*.4,rot:t.rot+b*.4,alpha:U(1.05-w,0,1)*U(b/.08,0,1)}}if(i==="spiral"){const w=.28+ve(t.z-o*(.4+a*.2+n*.08))*2.6;if(w<.32||w>2.75)return null;const T=t.x*Math.PI*2+2.15/w+o*.1,_=(.1+t.y*.38)/w;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:U(.2*t.size*(.94+n*.1+d*.26)/w,.04,.52),glow:d*.4,rot:t.rot+T*.15,alpha:U((2.75-w)/.28,0,1)*U((w-.28)/.1,0,1)}}if(i==="helix"){const w=.26+ve(t.z-o*(.46+a*.22+n*.08))*2.7;if(w<.3||w>2.85)return null;const T=e&1?Math.PI:0,_=o*(1.7+1.35/w)+t.x*Math.PI*2+T,M=(.11+t.y*.26)/w;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.92,px:U(.22*t.size*(.93+n*.1+d*.26)/w,.04,.54),glow:d*.4,rot:_+t.rot,alpha:U((2.85-w)/.28,0,1)*U((w-.26)/.1,0,1)}}if(i==="prism"){const w=.28+ve(t.z-o*(.42+a*.2+n*.08))*2.55;if(w<.32||w>2.7)return null;const T=o*.22+t.rot*.4,_=ve(t.x)-.5,M=ve(t.y)-.5,A=Math.cos(T),P=Math.sin(T);return{x:(_*A-M*P)/w,y:(_*P+M*A)/w,px:U(.2*t.size*(.94+n*.1+d*.26)/w,.04,.52),glow:d*.4,rot:t.rot+T,alpha:U((2.7-w)/.26,0,1)*U((w-.28)/.1,0,1)}}if(i==="gyre"){const b=Vt(t.z-o*.4,.28,2.6);if(!b)return null;const{depth:w,fade:T}=b,_=o*.2+t.x*Math.PI*2,M=.22+t.y*.5,A=Math.cos(_)*M,P=Math.sin(_*.93)*M*.86,E=ho(A,P,o*.12);return{x:E.x/w,y:E.y/w+Math.sin(o*.16)*.05,px:U(.22*t.size*(.93+n*.1+d*.26)/w,.04,.55),glow:d*.42,rot:t.rot+_*.2+t.vr*o*.08,alpha:T}}if(i==="well"){const b=Vt(t.z-o*.4,.26,2.65);if(!b)return null;const{depth:w,fade:T}=b,_=t.x*Math.PI*2+o*.16+2.6*Math.log(w+.18),M=(.2+e%8*.028)/Math.pow(w,.82);return{x:Math.cos(_)*M,y:Math.sin(_)*M,px:U(.21*t.size*(.93+n*.1+d*.26)/w,.04,.54),glow:d*.42,rot:t.rot+_*.2,alpha:T}}if(i==="hall"){const b=Vt(t.z-o*.42,.3,2.5);if(!b)return null;const{depth:w,fade:T}=b,_=e%4,M=ve(t.x*.72+t.y*.28)-.5,A=.05/w;let P=0,E=0;_===0?(P=-.52/w-A,E=M/w):_===1?(P=.52/w+A,E=M/w):_===2?(P=M/w,E=-.4/w-A):(P=M/w,E=.4/w+A);const z=ho(P,E,.42/w+o*.08);return{x:z.x,y:z.y,px:U(.2*t.size*(.93+n*.1+d*.26)/w,.04,.5),glow:d*.4,rot:t.rot+t.vr*o*.1,alpha:T}}if(i==="drift"){const b=Vt(t.z-o*.4,.28,2.58);if(!b)return null;const{depth:w,fade:T}=b,M=e%5*1.256,A=o*.09,P=ve(t.x+Math.cos(M)*A)-.5,E=ve(t.y+Math.sin(M)*A*.72)-.5;return{x:P/w,y:E/w,px:U(.21*t.size*(.93+n*.1+d*.26)/w,.04,.52),glow:d*.42,rot:t.rot+t.vr*o*.1,alpha:T}}if(i==="braid"){const b=Vt(t.z-o*.44,.26,2.68);if(!b)return null;const{depth:w,fade:T}=b,_=e%3,M=o*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/w,A=(.13+t.y*.2)/w,P=Math.sin(o*.2+_*2.1)*.07;return{x:Math.cos(M)*A+P,y:Math.sin(M)*A*.9,px:U(.22*t.size*(.93+n*.1+d*.26)/w,.04,.54),glow:d*.4,rot:M+t.rot,alpha:T}}if(i==="sway"){const b=Vt(t.z-o*.46,.26,2.7);if(!b)return null;const{depth:w,fade:T}=b,_=Math.sin(o*.19)*.48,M=Math.cos(o*.13)*.3,A=Math.sin(o*.07)*.32,P=ve(t.x+t.vx*o*.03)-.5,E=ve(t.y+t.vy*o*.02)-.5,z=ho(P,E,A),W=1/w-.38;return{x:z.x/w+_*W,y:z.y/w+M*W,px:U(.24*t.size*(.92+n*.1+d*.28)/w,.04,.58),glow:d*.46,rot:t.rot+t.vr*o*.12+A*.4,alpha:T}}const h=.26+ve(t.z-o*(.46+a*.24+n*.1))*2.7;if(h<.3||h>2.85)return null;const g=(ve(t.x+t.vx*o*.03)-.5)/h,v=(ve(t.y+t.vy*o*.02)-.5)/h;return{x:g,y:v,px:U(.24*t.size*(.92+n*.1+d*.28)/h,.04,.6),glow:d*.48,rot:t.rot+t.vr*o*.12,alpha:U((2.85-h)/.3,0,1)*U((h-.26)/.1,0,1)}}const mo={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function fd(t){return mo[t]}function Ot(t,e,i){const o=parseInt(t.slice(1),16),a=parseInt(e.slice(1),16);if(Number.isNaN(o)||Number.isNaN(a))return t;const n=U(i,0,1),s=l=>Math.round((o>>l&255)*(1-n)+(a>>l&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function dd(t,e,i,o,a,n,s,r=0,l=0,f=!1,c=fo[a],u=!0){const p=f?Ot(o,"#08060a",.68):o;if(t.fillStyle=p,t.fillRect(0,0,e,i),f){const d=Ot(c,"#ffd8a8",.22),m=t.createLinearGradient(0,0,0,i);m.addColorStop(0,Ot(p,d,.1+l*.22+r*.04)),m.addColorStop(1,p),t.fillStyle=m,t.globalAlpha=.88,t.fillRect(0,0,e,i),t.globalAlpha=1;return}if(!u){const d=Ot(o,c,.08);t.fillStyle=d,t.globalAlpha=.35,t.fillRect(0,0,e,i),t.globalAlpha=1}}function ud(t,e=0){const i=Ae(e+17>>>0);return ft(i,mo[t])}function Si(t,e){const i=Ae(t+17>>>0);return ft(i,mo[St[Math.floor(i()*St.length)]])}function xi(t,e="#c41e3a"){const i=Ae(t+91>>>0);return i()<.35?e:ft(i,co)}function hd(t){return fo[t]}function Ht(t){return St[(t>>>0)%St.length]}const Ci=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],po={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},go={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},Lt=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(go).map(t=>t.palette)];function Ei(t){return t&&Ci.includes(t)?t:"kit"}function Gt(t,e){const i=Ei(e);return i==="kit"?fd(t):go[i].grounds}function dt(t,e){const i=Ei(e);return i==="kit"?hd(t):go[i].ink}function xa(t,e=0,i){const o=Gt(t,i),a=Ae(e+17>>>0);return o[Math.floor(a()*o.length)%o.length]}function Ca(t){return Ci[Math.floor(t()*Ci.length)%Ci.length]}function Dn(t){return Lt[Math.floor(t()*Lt.length)%Lt.length]}function Fe(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const md=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],pd=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],gd=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],vd=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],bd=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],$n=`
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
`,Wn=`
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
`,yd=`
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
`,wd=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,kd=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,jn=`
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
`,vo={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${jn}${Wn}`,applyGlsl:wd};function Td(t){return t?{...vo,extraUniforms:`${jn}${Wn}${yd}`,applyGlsl:kd}:vo}const _d=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${$n}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},vo],bo=[...md,...pd,...gd,...vd,...bd,..._d],Sd=new Map(bo.map(t=>[t.id,t]));function xd(){return bo}function Je(t){return Sd.get(t)}function Cd(){const t={};for(const e of bo)(t[e.category]??=[]).push(e);return t}const Ed=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function yo(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(o=>({...o,sourceId:null,effects:o.effects.map(a=>({...a,params:{...a.params}})),transform:{...o.transform},mask:{...o.mask,rect:{...o.mask.rect},center:{...o.mask.center}},feedback:{...o.feedback}})),keyframes:t.keyframes.map(o=>({...o})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Fe("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function Pd(t,e){const i=e.data,o=t.sources.map(n=>n.id),a=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&o.includes(n.sourceId)?n.sourceId:o[Math.min(s,o.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:a,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function Md(t,e){if(t.length===0)return null;const i=Ae(e);return t[Math.floor(i()*t.length)]}function Ad(t){return{...t,id:Fe("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Vn=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function Id(t,e,i,o){if(e.randomizable===!1)return i;if(e.kind==="bool")return o<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return o<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(c=>{const u=parseInt(c.slice(1),16),p=u>>16&255,d=u>>8&255,m=u&255,h=g=>U(Math.round(Yi(g,t()*255,o)),0,255);return`#${[h(p),h(d),h(m)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const a=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),r=a+t()*(n-a),l=Yi(s,r,Math.max(o,.35));return e.kind==="int"?Math.round(l):l}function wo(t,e,i,o){const a=Je(t.typeId);if(!a)return t;const n=Ae(e),s={...t.params};for(const r of a.params)o&&r.id!==o||(s[r.id]=Id(n,r,s[r.id]??r.default,U(i,0,1)));return{...t,params:s}}function Bd(t,e,i,o=!1,a){const n=t.effects.map((s,r)=>o&&a&&s.id!==a?s:wo(s,e+r*997,i));return{...t,effects:n}}function ko(t,e,i){const o=Je(t),a={};if(o)for(const n of o.params)a[n.id]=n.default;return wo({id:Fe("fx"),typeId:t,enabled:!0,params:a},e,i)}function To(t,e,i,o){const a={...t.params};if(t.typeId==="grade"&&(e==="lush"?(a.saturation=.18+o()*.42,a.brightness=-.04+o()*.16,a.contrast=.06+o()*.22,a.gamma=.82+o()*.35,a.hue=(o()-.5)*.18,a.exposure=-.15+o()*.4):e==="outsider"?(a.saturation=o()>.5?-.35+o()*.3:.4+o()*.5,a.contrast=.2+o()*.55,a.gamma=.55+o()*1.1,a.hue=(o()-.5)*.7):(a.saturation=.05+o()*.5,a.contrast=.1+o()*.35,a.hue=(o()-.5)*.35)),t.typeId==="duotone"&&(a.shadow=i.shadow,a.highlight=i.highlight,a.amount=e==="lush"?.45+o()*.4:.7+o()*.3),t.typeId==="grain"&&(a.leakColor=i.leak,a.leak=e==="lush"?.18+o()*.35:o()*.22,a.grain=e==="lush"?.12+o()*.22:.2+o()*.4),t.typeId==="bloom"&&(a.amount=e==="outsider"?.15+o()*.3:.4+o()*.45,a.halation=e==="lush"?.22+o()*.4:o()*.25,a.size=1.4+o()*2.2),t.typeId==="warp"&&(a.amount=e==="lush"?.012+o()*.04:.04+o()*.12),t.typeId==="chroma"&&(a.amount=e==="lush"?.002+o()*.006:.006+o()*.02),t.typeId==="analog"&&(a.mixScan=e==="lush"?o()*.2:.25+o()*.5,a.noise=e==="lush"?o()*.1:.12+o()*.35),t.typeId==="posterize"&&(a.levels=3+Math.floor(o()*6),a.dither=.08+o()*.35),t.typeId==="threshold"&&(a.mix=.35+o()*.45,a.soft=.04+o()*.18),t.typeId==="critters"){a.count=e==="lush"?3+Math.floor(o()*3):4+Math.floor(o()*4),a.size=.85+o()*.7,a.amount=.7+o()*.3,a.speed=.7+o()*1.3,a.seed=1+Math.floor(o()*9998);const n=o();e==="lush"?a.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?a.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":a.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){a.size=.12+o()*.05,a.count=1,a.crowd="normal",a.place="center";const n=o();e==="lush"?a.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?a.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":a.move=n>.78?"drift":"dance",a.echo=.35+o()*.5,a.amount=1,a.speed=a.move==="dance"?.55+o()*1.5:.32+o()*.7,a.seed=1+Math.floor(o()*9998);const s=o();e==="lush"?a.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?a.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":a.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=o();e==="lush"?a.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?a.coat=r>.5?"sodium":r>.26?"cream":"wild":a.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(a.segments=e==="lush"?4+Math.floor(o()*4):5+Math.floor(o()*8),a.zoom=.7+o()*.8),t.typeId==="channels"&&(a.tint=i.leak,a.tintAmt=e==="lush"?.12+o()*.28:o()*.45),t.typeId==="key"&&(a.lo=.1+o()*.22,a.hi=.5+o()*.35,a.amount=.45+o()*.4,a.invert=o()>.72),t.typeId==="dropout"&&(a.amount=.28+o()*.4,a.rate=.18+o()*.4,a.tear=e==="outsider"?.3+o()*.5:o()*.28),{...t,params:a}}function Fd(t,e="mix"){const i=Ae(t>>>0);return To(ko("critters",t,.85),e,Lt[t%Lt.length],i)}function Rd(t,e="mix"){const i=Ae(t>>>0);return To(ko("dancer",t,.85),e,Lt[t%Lt.length],i)}function zd(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(o=>o.typeId==="dancer")?e:{...e,effects:[...e.effects,Rd(t.seed+i*4243,"mix")]})}}function Gn(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(o=>o.typeId==="critters")?e:{...e,effects:[...e.effects,Fd(t.seed+i*7919,"mix")]})}}function Od(){return Vn.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Hd(){return xd().map(t=>t.id).filter(t=>t!=="dancer")}function Ld(t,e){const i=Ae(t>>>0),o=Hd(),a=e?3:2,n=e?5:4,s=Math.min(o.length,a+Math.floor(i()*(n-a+1))),r=[];for(let l=0;l<s&&o.length;l++){const f=Math.floor(i()*o.length);r.push(o.splice(f,1)[0])}return r}function Nd(t,e,i,o=!1,a=!0){const n=Ae(e+17>>>0),s=o?n()>.5?"outsider":"mix":n()>.55?"lush":n()>.35?"mix":"outsider",r=Dn(n),l=a?Ld(e,o).map((f,c)=>To(ko(f,e+c*3331,i),s,r,Ae(e+c*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function je(t,e,i){return Yi(e,i,t())}function _o(t){const e=t()>.5,i=ni(e?je(t,.38,.58):je(t,.72,.92)),o=si(e?je(t,2.1,2.9):je(t,.85,1.15));return{collageFieldPattern:ui[Math.floor(t()*ui.length)],...gn(je(t,.55,1.35)),collageFieldStrength:ti(je(t,.9,1.4)),collageFieldSparsity:ci(je(t,.5,1.2)),collageFieldPerturb:ri(je(t,0,.2)),collageFieldCurl:oi(je(t,.05,.45)),collageFieldMotion:di(je(t,.05,.35)),collageFieldContrast:fi(je(t,.9,1.8)),collageFieldMinScale:i,collageFieldMaxScale:Math.max(i+.08,o),collageTwoInk:!0}}function Kn(t,e){const i=Ae(e>>>0),o="field",a=t.collageKit,n=t.collageKitB;return{...t,generator:wi(o),collageMove:o,..._o(i),name:a?n?`${Rt[o]} · ${a} · ${n}`:`${Rt[o]} · ${a}`:t.name}}function Xn(t,e,i,o,a,n=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,f=Ae(l^2654435769),c=t.layers.map((w,T)=>e==="selected"&&w.id!==i?w:e==="param"?w.id!==i?w:{...w,effects:w.effects.map(_=>_.id===o&&a?wo(_,l+T*13,Math.max(r,.55),a):_)}:e==="all"?Nd(w,l+T*7919,r,n,s):Bd(w,l+T*7919,r,!0,o)),u=Cn,p=Ae(l+0*7919>>>0),d=Od(),m=d[Math.floor(p()*d.length)]??Vn[0],g={"herald tour":{generator:"heraldry",a:Si(l),b:xi(l)},"dense paper":{generator:"wallpaper",a:Si(l+3),b:xi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:Si(l+5),b:xi(l+5)},"heart rain":{generator:"shower",a:Si(l+7),b:xi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Si(l+9),b:xi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[m.name],v=t.sources.map((w,T)=>{if(e!=="all"||w.kind!=="generator")return w;const _=Ae(l+T*131),M=Dn(_);if(Pe(w.generator)||Cn.includes(w.generator)){const F=Ht(l+T*41),k=lo(l+T*73),H=Ht(l+T*99),V=_()>.74&&H!==F?H:void 0,R=Ca(_);return{...w,generator:wi(k),collageKit:F,collageKitB:V,collageMove:k,collageColorPack:R,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,...k==="field"?_o(_):{},colorA:xa(F,l+T*17,R),colorB:dt(F,R),name:V?`${Rt[k]} · ${F} · ${V}`:`${Rt[k]} · ${F}`}}const A=n?!1:_()>.35,P=g?g.generator:A?w.generator:u[Math.floor(_()*u.length)],E=Ht(l+T*41),z=Ca(_),W=Pe(P)?xa(E,l+T*17,z):M.inkA,x=Pe(P)?dt(E,z):M.inkB;return{...w,generator:P,collageKit:Pe(P)?E:w.collageKit,collageColorPack:Pe(P)?z:w.collageColorPack,colorA:g?g.a:W,colorB:g?dt(E,z):x}}),b=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:f()>.72?.04+f()*.1:0,opacity:.4+f()*.3,scale:1.004+f()*.02,rotation:(f()-.5)*.03,distortion:f()*.12}:t.globalFeedback;return{...t,layers:c,sources:v,globalFeedback:b}}function Ud(t){const e=t.seed+7919>>>0,i=Ae(e^2246822507),o=["shapes","toy pop","votives","moths","charms"],a=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Pe(r.generator))return r;const f=St[Math.floor(i()*St.length)],c=lo(e+l*59),u=Ca(i);return{...r,generator:wi(c),collageKit:f,collageMove:c,collageColorPack:u,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,...c==="field"?_o(i):{},colorA:xa(f,e+l*13,u),colorB:dt(f,u),name:`${Rt[c]} · ${f}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:o[Math.floor(i()*o.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:a[Math.floor(i()*a.length)],coat:n[Math.floor(i()*n.length)]}}:l)}))};return s=Gn(s),s}function qd(){return{x:0,y:0,scale:1,rotation:0}}function Dd(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Zn(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function $d(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Wd(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!1}}const jd={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Ea={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},Vd={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Qn(t,e,i){const o=Rt[t];return i&&i!==e?`${o} · ${Ea[e]} · ${Ea[i]}`:`${o} · ${Ea[e]}`}function Kt(t="plasma",e,i,o){const a=Pe(t)?zt(e):void 0,n=jd[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;a&&(s=i==="mix"||i==="tour"?lo(Date.now()+Math.floor(Math.random()*997)):i?Pn(i):Bn(t));const r=s?wi(s):t??"plasma",l=s?Rt[s]:Vd[t??""]??(t?t.toUpperCase():"SIGNAL"),f=a&&o?.kitB?zt(o.kitB):void 0,c=f&&a&&f!==a?f:void 0,u=a&&s?Qn(s,a,c):a?`${l} · ${Ea[a]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,p=o?.wash&&/^#[0-9a-fA-F]{6}$/.test(o.wash)?o.wash:void 0,d=a?Ei(o?.colorPack):void 0;return{id:Fe("src"),name:u,kind:"generator",generator:r,colorA:p??(a?xa(a,s==="rush"?1:s==="tunnel"?5:11,d):n.a),colorB:a?dt(a,d):n.b,collageColorPack:d,collageKit:a,collageKitB:c,collageMove:s,collageNight:a?!!o?.night:void 0,collageScale:a?Ti(o?.scale):void 0,collageDensity:a?_i(o?.density):void 0,collagePace:a?pi(o?.pace):void 0,collageChainTravel:a?gi(o?.chainTravel):void 0,collageChainMorph:a?vi(o?.chainMorph):void 0,collageChainVary:a?bi(o?.chainVary):void 0,collageChainSmooth:a?yi(o?.chainSmooth):void 0,collageSpringStrength:a?oa(o?.springStrength):void 0,collageSpringDamp:a?na(o?.springDamp):void 0,collageSpringDist:a?sa(o?.springDist):void 0,collageSpringElast:a?ra(o?.springElast):void 0,collageSpringBreak:a?la(o?.springBreak):void 0,collageFlowScale:a?ca(o?.flowScale):void 0,collageFlowTurb:a?fa(o?.flowTurb):void 0,collageFlowEvolve:a?da(o?.flowEvolve):void 0,collageFlowForce:a?ua(o?.flowForce):void 0,collageFlowDepth:a?ha(o?.flowDepth):void 0,collageBoidCohere:a?ma(o?.boidCohere):void 0,collageBoidSep:a?pa(o?.boidSep):void 0,collageBoidAlign:a?ga(o?.boidAlign):void 0,collageBoidRadius:a?va(o?.boidRadius):void 0,collageBoidSpeed:a?ba(o?.boidSpeed):void 0,collagePoleCount:a?ya(o?.poleCount):void 0,collagePoleAttract:a?wa(o?.poleAttract):void 0,collagePoleRepel:a?ka(o?.poleRepel):void 0,collagePoleSpeed:a?Ta(o?.poleSpeed):void 0,collagePoleFalloff:a?_a(o?.poleFalloff):void 0,collagePoleSwitch:a?Sa(o?.poleSwitch):void 0,collageFieldStrength:a?ti(o?.fieldStrength):void 0,collageFieldScale:a?Ya(o?.fieldScale):void 0,collageFieldEvolve:a?ii(o?.fieldEvolve):void 0,collageFieldDensity:a?ai(o?.fieldDensity):void 0,collageFieldDensityScale:a?Ja(o?.fieldDensityScale):void 0,collageFieldDensityEvolve:a?eo(o?.fieldDensityEvolve):void 0,collageFieldFlow:a?to(o?.fieldFlow):void 0,collageFieldCurl:a?oi(o?.fieldCurl):void 0,collageFieldFlowScale:a?io(o?.fieldFlowScale):void 0,collageFieldRadius:a?ao(o?.fieldRadius):void 0,collageFieldScaleAmp:a?oo(o?.fieldScaleAmp):void 0,collageFieldMinScale:a?ni(o?.fieldMinScale):void 0,collageFieldMaxScale:a?si(o?.fieldMaxScale):void 0,collageFieldPerturb:a?ri(o?.fieldPerturb):void 0,collageFieldWarp:a?li(o?.fieldWarp):void 0,collageFieldSparsity:a?ci(o?.fieldSparsity):void 0,collageFieldContrast:a?fi(o?.fieldContrast):void 0,collageFieldMotion:a?di(o?.fieldMotion):void 0,collageFieldPattern:a?ta(o?.fieldPattern):void 0,collageFieldTrance:a?Ji(o?.fieldTrance):void 0,collageTwoInk:a?o?.twoInk!==!1:void 0,width:1280,height:720,duration:0}}function Yn(t){const e=Je(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const o of e.params)i[o.id]=o.default;return{id:Fe("fx"),typeId:t,enabled:!0,params:i}}function Jn(t,e,i=[]){return{id:Fe("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:qd(),effects:i.map(Yn),mask:Dd(),feedback:Zn()}}function es(){const t=Kt("heraldry","sailor","field",{fieldPattern:"snake",fieldEvolve:.75,fieldDensity:1.5,fieldPerturb:.08,fieldWarp:.85,fieldContrast:1.55,fieldMinScale:.7,fieldMaxScale:2.2,fieldStrength:1.15,fieldMotion:.2,fieldCurl:.2,fieldTrance:1,fieldSparsity:.85,twoInk:!0}),e=Jn("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:$d(),globalFeedback:{...Zn(),amount:0,opacity:.4,scale:1},exportSettings:Wd(),presets:[]},o=Xn({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[yo(i,"factory · tour"),yo(o,"factory · scramble")],i}function ts(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1,desk:"poster",safeFrame:!0}}class Gd{state;listeners=new Set;constructor(e=es()){this.state={project:e,ui:ts(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...ts(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const I=new Gd;function So(t,e,i,o,a){if(e<=0)return 0;const n=t*Math.max(.01,o);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return a?(s%e+e)%e:U(s,0,e)}function Kd(t,e,i,o,a){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===o&&(i!=="effect"||n.effectId===a)).sort((n,s)=>n.time-s.time)}function Xd(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const o=t[t.length-1];if(e>=o.time)return o.value;for(let a=0;a<t.length-1;a++){const n=t[a],s=t[a+1];if(e>=n.time&&e<=s.time){const r=s.time-n.time||1;let l=(e-n.time)/r;return(s.easing==="smooth"||n.easing==="smooth")&&(l=al(l)),Yi(n.value,s.value,l)}}return i}function xt(t,e,i,o,a,n,s){const r=Kd(t.keyframes,e,i,o,s);return Xd(r,n,a)}function Zd(t,e,i){const o={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(a=>({...a,params:{...a.params}}))};o.opacity=xt(t,e.id,"layer","opacity",e.opacity,i),o.transform.x=xt(t,e.id,"layer","x",e.transform.x,i),o.transform.y=xt(t,e.id,"layer","y",e.transform.y,i),o.transform.scale=xt(t,e.id,"layer","scale",e.transform.scale,i),o.transform.rotation=xt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const a of Object.keys(o.feedback))o.feedback[a]=xt(t,e.id,"feedback",a,e.feedback[a],i);for(const a of o.effects)for(const[n,s]of Object.entries(a.params))typeof s=="number"&&(a.params[n]=xt(t,e.id,"effect",n,s,i,a.id));return o}function Qd(t,e){const i=t.layers[0]?.id??"";return xt(t,i,"playback","speed",t.playback.speed,e)}const Yd=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],Jd=["spot","burst","snap","step"],eu=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],tu=["drop","halo","bars","wave","poly","ghost","fall"];function iu(t,e){const i=e.reduce((a,n)=>a+n.weight,0);let o=t()*i;for(const a of e)if(o-=a.weight,o<=0)return a.item;return e[e.length-1].item}function au(t){return iu(t,Yd.map(e=>({item:e.beats,weight:e.weight})))}function ou(t,e,i){if(e.length===1)return e[0];const o=i==null?e:e.filter(a=>a!==i);return(o.length?o:e)[Math.floor(t()*(o.length?o.length:e.length))%(o.length||e.length)]}function nu(t,e,i){const o=t<=2?Jd:t<=4?eu:tu;return ou(e,o,i)}function is(t){return 60/Math.max(40,t||120)}function as(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function su(t,e,i,o){const a=Math.max(1,t),n=is(e),s=(i??[]).filter(f=>f>=0&&f<a+.05);let r=Number.isFinite(o)&&o>=0?o:s.length?as(s[0],n):0;r>=a&&(r=as(r,n));const l=[];for(let f=r;f<a-n*.02;f+=n)l.push(f);if(!l.length)for(let f=0;f<a;f+=n)l.push(f);return l.length||l.push(0),l[l.length-1]<a-1e-6&&l.push(a),l}function ru(t,e,i,o){const a=is(e),n=Number.isFinite(i)&&i>0?i:0,s=o&&o>0?o:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<n-1e-6?0:Math.max(0,Math.floor((r-n)/a+1e-4))}function lu(t){const e=Ae(t.seed>>>0^12648430),i=Math.max(1,t.duration),o=su(i,t.bpm??120,t.beats,t.offset),a=[];let n=0,s,r,l=0;for(;n<o.length-1&&o[n]<i;){const f=au(e);r=Ht(t.seed+l*41+Math.floor(e()*17)>>>0);const c=l%5===2||e()>.82,u=e()>.72?Ht(t.seed+l*99+7>>>0):void 0,p=u&&u!==r?u:void 0,d=Ca(e),m=Gt(r,d);for(const h of f){if(n>=o.length-1||o[n]>=i)break;const g=Math.min(o.length-1,n+h),v=o[n];if(v>=i)break;const b=nu(g-n,e,s),w=m[Math.floor(e()*m.length)%m.length];a.push({start:v,beats:g-n,startBeat:n,look:{kit:r,kitB:p,move:b,night:c,wash:w,ink:dt(r,d),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=b,n=g}if(l++,l>80)break}if(a.length>=2&&a[a.length-1].beats<2){const f=a.pop();a[a.length-1].beats+=f.beats}if(!a.length){const f=Ht(t.seed);a.push({start:0,beats:8,startBeat:0,look:{kit:f,move:"bars",night:!1,wash:Gt(f)[0],ink:dt(f),scale:.78,density:.88,pace:.62}})}return a}function cu(t,e,i,o,a){if(!t.length){const f=Ht(1);return{start:0,beats:8,startBeat:0,look:{kit:f,move:"bars",night:!1,wash:Gt(f)[0],ink:dt(f),scale:.78,density:.88,pace:.62}}}const n=t[t.length-1],s=Math.max(i&&i>n.start?i:0,n.start+.5,t.length>1?n.start+(n.start-t[0].start)/Math.max(1,t.length-1):n.start+2);if(o&&o>40){const f=Number.isFinite(a)&&a>=0?a:t[0].start,c=ru(e,o,f,s);let u=t[0];for(const p of t)if(p.startBeat<=c)u=p;else break;return u}const r=(e%s+s)%s;let l=t[0];for(const f of t)if(f.start<=r+5e-4)l=f;else break;return l}function fu(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const du=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function uu(t){return(t.type??"").startsWith("audio/")||du.test(t.name)}function Pi(t){return t.sources.find(e=>e.kind==="audio")}let Mi=null,ut=null,Ai=null;const xo=new WeakSet;let Ii=0,Bi=0,Nt=0,os=0;function Pa(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Mi||(Mi=new t,ut=Mi.createAnalyser(),ut.fftSize=256,ut.smoothingTimeConstant=.72,ut.connect(Mi.destination),Ai=new Uint8Array(ut.frequencyBinCount)),Mi):null}async function Ma(){const t=Pa();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function hu(t){const e=Pa();if(!(!e||!ut||xo.has(t)))try{e.createMediaElementSource(t).connect(ut),xo.add(t)}catch{xo.add(t)}}async function mu(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",hu(i),Ma();let o=null;const a=Pa();if(a)try{const u=await t.arrayBuffer(),p=a.decodeAudioData(u.slice(0)).catch(()=>null);o=await Promise.race([p,new Promise(d=>setTimeout(()=>d(null),4e3))])}catch{o=null}const s=await Promise.race([new Promise(u=>{if(Number.isFinite(i.duration)&&i.duration>0){u(i.duration);return}i.addEventListener("loadedmetadata",()=>u(Number.isFinite(i.duration)?i.duration:o?.duration??0),{once:!0}),i.addEventListener("error",()=>u(o?.duration??0),{once:!0})}),new Promise(u=>setTimeout(()=>u(o?.duration??0),2500))])||o?.duration||0,r=o?pu(o.getChannelData(0),o.sampleRate):[],l=gu(r,s),f=o?vu(o.getChannelData(0),o.sampleRate,l.bpm,l.offset,s):l.offset,c=l.bpm>40?bu(r,l.bpm,f,s):r;return{id:Fe("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:o,beats:c,bpm:l.bpm,beatOffset:f,objectUrl:e}}function pu(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),o=i*2,a=Math.floor((t.length-o)/i);if(a<16)return[];const n=new Float32Array(a);for(let c=0;c<a;c++){const u=c*i;let p=0;for(let d=0;d<o;d+=2){const m=t[u+d];p+=m*m}n[c]=Math.sqrt(p/(o*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let f=-99;for(let c=s;c<a;c++){let u=0,p=0;for(let g=c-s;g<c;g++)u+=n[g],n[g]>p&&(p=n[g]);u/=s;const d=n[c]-n[c-1];if(!(n[c]>u*1.32&&n[c]>p*.72&&d>.0035))continue;const h=c*i/e;h-f<r||(l.push(h),f=h)}return l}function gu(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let u=1;u<t.length;u++){const p=t[u]-t[u-1];p>=.18&&p<=1.2&&i.push(p)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const o=i.length>=3?i:t.slice(1).map((u,p)=>u-t[p]).filter(u=>u>.12&&u<1.6);if(o.length<2)return{bpm:0,offset:t[0]??0};o.sort((u,p)=>u-p);const a=o[Math.floor(o.length/2)];let n=60/Math.max(.18,a);for(;n>155;)n/=2;for(;n<72&&n>0;)n*=2;n=Co(Math.round(n),70,170);let s=n,r=0,l=-1;const f=Math.max(70,n-8),c=Math.min(170,n+8);for(let u=f;u<=c;u++){const p=60/u,d=e>0?e:(t[t.length-1]??0)+p,m=new Set([0,(t[0]%p+p)%p]);for(let h=0;h<Math.min(t.length,16);h++)m.add((t[h]%p+p)%p);for(const h of m){let g=0;for(const v of t){const b=((v-h)%p+p)%p,w=Math.min(b,p-b);w<p*.12&&(g+=1-w/(p*.12))}h>.03&&h<d-p*.5&&(g+=.15),g*=1-Math.abs(u-118)/400,g>l&&(l=g,s=u,r=h)}}return{bpm:s,offset:r}}function vu(t,e,i,o,a){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(o)&&o>=0?o:0;const n=60/i,s=n*4,r=Number.isFinite(o)&&o>=0?o:0,l=Math.max(32,Math.floor(e*.04)),f=[0,0,0,0],c=a>0?a:t.length/e;for(let d=0;d<4;d++){let m=0,h=0;for(let g=r+d*n;g<c-.04&&h<72;g+=s){const v=Math.max(0,Math.min(t.length-l-1,Math.floor(g*e)));let b=0;for(let w=0;w<l;w+=3){const T=t[v+w];b+=T*T}m+=b,h++}f[d]=m/Math.max(1,h)}let u=0;for(let d=1;d<4;d++)(f[d]>f[u]*1.05||f[d]>f[u]*.97&&d%2===0&&u%2===1)&&(u=d);return((r+u*n)%s+s)%s}function bu(t,e,i,o){if(!(e>40))return[...t];const a=60/e,n=Math.max(a,o||(t[t.length-1]??0)+a),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<n-a*.08;l+=a)r.push(l);return r.length?r:[...t]}function ns(t,e,i=.13,o=0){if(!(e>40)||!Number.isFinite(t))return 0;const a=60/e;if(!(a>0))return 0;const n=t-o;if(n<-.02)return 0;const s=(n%a+a)%a;return Math.exp(-s/i)}function yu(t,e,i=.2){if(!t.length)return 0;let o=0,a=t.length-1;for(;o<a;){const r=o+a+1>>1;t[r]<=e?o=r:a=r-1}const n=t[o];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function Co(t,e,i){return Math.max(e,Math.min(i,t))}function wu(t,e,i,o){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const a=(o%i+i)%i,n=Math.floor(a*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,n)),l=Math.max(r+1,Math.min(t.length,n+s));let f=0;for(let g=r;g<l;g++)f+=t[g]*t[g];const c=Math.min(1,Math.sqrt(f/(l-r))*3.4),u=Math.max(s,Math.floor(e*.09)),p=Math.min(t.length,n+u);let d=0,m=0;for(let g=r;g<p;g+=8)d+=t[g]*t[g],m++;const h=Math.min(1,Math.sqrt(d/Math.max(1,m))*4.2);return{energy:c,bass:h}}function ku(){if(!ut||!Ai)return null;ut.getByteFrequencyData(Ai);let t=0,e=0;const i=Ai.length,o=Math.max(4,Math.floor(i*.12));for(let a=0;a<i;a++){const n=Ai[a]/255;t+=n,a<o&&(e+=n)}return{energy:t/i,bass:e/o}}function Tu(t,e){let i=0,o=0,a=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=wu(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,o=l.bass;const f=t.beats??[],c=t.beatOffset??0,u=f.length?yu(f,r,.11):0,p=ns(r,t.bpm??0,.11,c),d=Co((i-.12)*.75,0,.6);a=Math.max(u,p*.86,f.length?d*.28:d)}else if(t?.kind==="audio"){const s=ku();s&&(i=s.energy,o=s.bass,a=Math.max(ns(e,t.bpm??0,.11,t.beatOffset??0)*.86,Co((i-.12)*.55,0,.5)))}Math.abs(e-os)>.2||a>=Nt?Nt=a:Nt+=(a-Nt)*.32,os=e;const n=t?.kind==="audio"?.22:.14;return Ii+=(i-Ii)*n,Bi+=(o-Bi)*Math.min(n,.16),!t&&Ii<.002&&(Ii=0),!t&&Bi<.002&&(Bi=0),t||(Nt=0),{energy:Ii,bass:Bi,beat:Nt}}function _u(t,e,i=0,o=0){const a=e.length,n=t.length;if(a<1)return;if(n<1){e.fill(0);return}const s=(Math.round(o)%n+n)%n;for(let l=0;l<a;l++)e[l]=t[(s+l)%n];if(i<=0)return;const r=Math.max(1,Math.round(a*i));for(let l=0;l<r;l++)e[a-r+l]*=1-(l+1)/r}function Eo(t){if(!Pi(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function Su(t,e,i=!1,o=0){const a=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*a)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:n,numberOfChannels:s,sampleRate:a}),l=i?.12:0,f=Number.isFinite(o)&&o>0?o:0,c=Math.round(f*a);for(let u=0;u<s;u++)_u(t.getChannelData(u),r.getChannelData(u),l,c);return r}async function xu(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const o=Pa()??new e,a=await Promise.race([o.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(a&&a.length>32)return t.pcm=a,a}catch{return null}return null}function Po(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const Cu=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,Eu=`#version 300 es
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
`,Pu=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Mu=`#version 300 es
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
`,Au=`#version 300 es
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
`,Iu=`#version 300 es
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
`,Bu=`#version 300 es
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
`,Fu=`#version 300 es
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
${$n}
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
`,ss=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Qu=`#version 300 es
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
`;class Ut extends Error{}function Yu(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new Ut("WebGL2 is required for Phosphene.");return e}function rs(t,e,i){const o=t.createShader(e);if(!o)throw new Ut("Unable to create shader");if(t.shaderSource(o,i),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(o)??"shader compile failed";throw t.deleteShader(o),new Ut(a)}return o}class be{gl;prog;uniforms=new Map;constructor(e,i,o=Cu){this.gl=e;const a=rs(e,e.VERTEX_SHADER,o),n=rs(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new Ut("Unable to create program");if(e.attachShader(s,a),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new Ut(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const o=this.loc(e);o&&this.gl.uniform1i(o,i)}f(e,i){const o=this.loc(e);o&&this.gl.uniform1f(o,i)}v2(e,i,o){const a=this.loc(e);a&&this.gl.uniform2f(a,i,o)}v3(e,i,o,a){const n=this.loc(e);n&&this.gl.uniform3f(n,i,o,a)}v4(e,i,o,a,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,o,a,n)}dispose(){this.gl.deleteProgram(this.prog)}}function Aa(t){const e=t.createTexture();if(!e)throw new Ut("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function ls(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Ju(t,e,i,o){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,o,0,t.RGBA,t.UNSIGNED_BYTE,null)}class Xt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new Ut("Unable to create framebuffer");this.fbo=i,this.tex=Aa(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Ju(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function He(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function et(t){t.drawArrays(t.TRIANGLES,0,3)}const eh={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},th={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},cs={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function ih(t){return`${Eu}
${t.extraUniforms??""}
${t.applyGlsl}
${Pu}`}function ah(t,e){return new be(t,ih(e))}function Fi(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(o=>o+o).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Zt=8;function fs(t,e,i){return new ImageData(t,e,i)}function oh(t,e,i){const o=t.find(n=>n.id===e);if(!o?.options)return Number(i)||0;const a=o.options.findIndex(n=>n.value===i);return a<0?0:a}class nh{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new ld;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=Yu(e),this.generatorProg=new be(this.gl,Bu)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Zt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new Xt(e),this.pong??=new Xt(e),this.composite??=new Xt(e),this.post??=new Xt(e);this.ring.length<Zt;)this.ring.push(new Xt(e));this.copy??=new be(e,ss),this.blit??=new be(e,Au),this.compositeProg??=new be(e,Mu),this.feedbackProg??=new be(e,Iu),this.textureProg??=new be(e,Qu),this.black||(this.black=Aa(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const o=i[0];if(o.feedback.amount>.001||o.effects.some(n=>n.enabled))return!0;const a=e.sources.find(n=>n.id===o.sourceId);return!!(a&&a.kind!=="generator"&&a.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new be(this.gl,Ru),this.stageProg):e===13?(this.sketchProg??=new be(this.gl,zu),this.sketchProg):e===14?(this.feltProg??=new be(this.gl,Ou),this.feltProg):e===15?(this.foilProg??=new be(this.gl,Hu),this.foilProg):e===16?(this.plushProg??=new be(this.gl,Lu),this.plushProg):e===17?(this.yarnProg??=new be(this.gl,Nu),this.yarnProg):e===18?(this.sequinProg??=new be(this.gl,Uu),this.sequinProg):e===19?(this.quiltProg??=new be(this.gl,qu),this.quiltProg):e===20?(this.corkProg??=new be(this.gl,Du),this.corkProg):e===21?(this.ginghamProg??=new be(this.gl,$u),this.ginghamProg):e===22?(this.sprinkleProg??=new be(this.gl,Wu),this.sprinkleProg):e===23?(this.velvetProg??=new be(this.gl,ju),this.velvetProg):e===24?(this.confettiProg??=new be(this.gl,Vu),this.confettiProg):e===25?(this.discoProg??=new be(this.gl,Gu),this.discoProg):e===26?(this.terrazzoProg??=new be(this.gl,Ku),this.terrazzoProg):e===27?(this.comicProg??=new be(this.gl,Xu),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new be(this.gl,Zu),this.fieldsProg):(this.generatorFull??=new be(this.gl,Fu),this.generatorFull)}compileType(e,i=!1){const o=e!=="dancer"?e:i?"dancer:mini":"dancer",a=this.effectProg.get(o);if(a)return a;const n=e==="dancer"?Td(i):Je(e);if(!n)return null;try{const s=ah(this.gl,n);return this.effectProg.set(o,s),s}catch(s){return this.lastError=`${o}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const o=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(a=>!!a);for(const a of o)a.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new Xt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Aa(this.gl),this.sourceTex.set(e.id,i));const o=e.frozenFrame||e.bitmap||e.video;return o&&ls(this.gl,i,o),i}blitTo(e,i){const o=this.gl,a=this.copy;a&&(e.bind(),a.use(),He(o,0,i),a.i("uTex",0),et(o))}resolveCut(e,i,o){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const a=Math.max(o?.duration||0,e.duration,e.exportSettings.duration||0,8),n=`${e.cutEdit.seed}|${a}|${o?.bpm??0}|${o?.beatOffset??0}|${o?.beats?.length??0}`;(!this.cutReel||this.cutKey!==n)&&(this.cutReel=lu({seed:e.cutEdit.seed,duration:a,bpm:o?.bpm??120,beats:o?.beats,offset:o?.beatOffset}),this.cutKey=n);const s=cu(this.cutReel,i,a,o?.bpm,o?.beatOffset);this.cutStatus=fu(s),this.cutLook={generator:wi(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,o,a,n,s,r){const l=this.gl;this.copy??=new be(l,ss),this.heraldryTex??=Aa(l);const f=this.cutLook??i,c=this.heraldry.paint({width:s,height:r,time:o,duration:n,seed:a,generator:f.generator,kit:f.collageKit,kitB:f.collageKitB,move:f.collageMove,paper:f.colorA??"#ffffff",ink:f.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:f.collageNight,scale:f.collageScale,density:f.collageDensity,pace:f.collagePace,chainTravel:f.collageChainTravel,chainMorph:f.collageChainMorph,chainVary:f.collageChainVary,chainSmooth:f.collageChainSmooth,springStrength:f.collageSpringStrength,springDamp:f.collageSpringDamp,springDist:f.collageSpringDist,springElast:f.collageSpringElast,springBreak:f.collageSpringBreak,flowScale:f.collageFlowScale,flowTurb:f.collageFlowTurb,flowEvolve:f.collageFlowEvolve,flowForce:f.collageFlowForce,flowDepth:f.collageFlowDepth,boidCohere:f.collageBoidCohere,boidSep:f.collageBoidSep,boidAlign:f.collageBoidAlign,boidRadius:f.collageBoidRadius,boidSpeed:f.collageBoidSpeed,poleCount:f.collagePoleCount,poleAttract:f.collagePoleAttract,poleRepel:f.collagePoleRepel,poleSpeed:f.collagePoleSpeed,poleFalloff:f.collagePoleFalloff,poleSwitch:f.collagePoleSwitch,fieldStrength:f.collageFieldStrength,fieldScale:f.collageFieldScale,fieldEvolve:f.collageFieldEvolve,fieldDensity:f.collageFieldDensity,fieldDensityScale:f.collageFieldDensityScale,fieldDensityEvolve:f.collageFieldDensityEvolve,fieldFlow:f.collageFieldFlow,fieldCurl:f.collageFieldCurl,fieldFlowScale:f.collageFieldFlowScale,fieldRadius:f.collageFieldRadius,fieldScaleAmp:f.collageFieldScaleAmp,fieldMinScale:f.collageFieldMinScale,fieldMaxScale:f.collageFieldMaxScale,fieldPerturb:f.collageFieldPerturb,fieldWarp:f.collageFieldWarp,fieldSparsity:f.collageFieldSparsity,fieldContrast:f.collageFieldContrast,fieldMotion:f.collageFieldMotion,fieldPattern:f.collageFieldPattern,fieldTrance:f.collageFieldTrance,twoInk:f.collageTwoInk});if(ls(l,this.heraldryTex,c),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),He(l,0,this.heraldryTex),this.copy.i("uTex",0),et(l)}drawGenerator(e,i,o,a=77,n=8){if(Pe(i.generator)){this.drawHeraldry(e,i,o,a,n,e.w,e.h);return}const s=this.gl,r=cs[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",o);const f=i.colorA?Fi(i.colorA):[.07,.04,.1],c=i.colorB?Fi(i.colorB):[.92,.78,.55];l.v3("uColorA",f[0],f[1],f[2]),l.v3("uColorB",c[0],c[1],c[2]),l.f("uScale",6),l.f("uSeed",a),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),et(s)}drawTexture(e,i,o){const a=this.gl,n=this.textureProg;n&&(e.bind(),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),n.use(),He(a,0,i),n.i("uTex",0),n.v2("uTranslate",o.transform.x,o.transform.y),n.f("uScale",o.transform.scale),n.f("uRotation",o.transform.rotation),n.v2("uFit",1,1),et(a))}applyEffect(e,i,o,a,n,s,r,l,f){const c=Je(o.typeId),u=this.progFor(o);if(!c||!u){this.blitTo(e,i);return}const p=this.gl;e.bind(),u.use(),He(p,0,i),He(p,1,l),He(p,2,f),u.i("uTex",0),u.i("uFeedback",1),u.i("uHistory",2),u.i("uMask",3),u.v2("uResolution",e.w,e.h),u.v2("uTexel",1/e.w,1/e.h),u.f("uTime",n),u.f("uFrame",s),u.f("uQuality",r==="draft"?0:r==="preview"?1:2),u.f("u_audio",this.audioEnergy),u.f("u_bass",this.audioBass),u.v2("u_translate",a.transform.x,a.transform.y),u.f("u_scale",a.transform.scale),u.f("u_rotation",a.transform.rotation);const d=a.mask;u.i("u_maskType",th[d.type]??0),u.i("u_maskInvert",d.invert?1:0),u.f("u_maskSoftness",d.softness),u.v4("u_maskRect",d.rect.x,d.rect.y,d.rect.w,d.rect.h),u.v2("u_maskCenter",d.center.x,d.center.y),u.f("u_maskRadius",d.radius),u.f("u_maskGradientAngle",d.gradientAngle),u.f("u_maskNoiseScale",d.noiseScale);let m=1;for(const h of c.params){const g=o.params[h.id]??h.default,v=`u_${h.id}`;if(h.kind==="color"&&typeof g=="string"){const[b,w,T]=Fi(g);u.v3(v,b,w,T)}else h.kind==="bool"?u.f(v,g?1:0):h.kind==="enum"?u.f(v,oh(c.params,h.id,g)):u.f(v,Number(g));h.id==="mix"&&(m=Number(g))}u.f("u_mix",m),et(p)}drawLite(e,i){const o=this.gl,a=e.layers.find(u=>u.enabled)??e.layers[0],n=a?e.sources.find(u=>u.id===a.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Pe(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height);const r=cs[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const f=s.colorA?Fi(s.colorA):[.07,.04,.1],c=s.colorB?Fi(s.colorB):[.92,.78,.55];l.v3("uColorA",f[0],f[1],f[2]),l.v3("uColorB",c[0],c[1],c[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),et(o)}render(e,i,o){const a=this.gl,n=o?.quality??e.quality,s=Tu(Pi(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=Pi(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,f=this.pong,c=this.composite,u=this.post,p=this.blit,d=this.compositeProg,m=this.feedbackProg,h=n==="draft"?.5:1,g=Math.max(16,Math.floor((o?.width??this.canvas.width)*h)),v=Math.max(16,Math.floor((o?.height??this.canvas.height)*h));this.ensureSize(g,v),c.bind(),a.clearColor(.02,.02,.03,1),a.clear(a.COLOR_BUFFER_BIT);const b=e.globalFeedback,w=Math.max(0,Math.min(Zt-1,Math.round(b.delay))),T=(this.ringIndex-1-w+Zt*8)%Zt,_=this.ring[T].tex,M=Math.floor(i*e.fps);for(const A of e.layers){if(!A.enabled)continue;const P=Zd(e,A,i),E=e.sources.find(F=>F.id===P.sourceId)??null;if(!E||E.kind==="generator"||E.kind==="audio"){const F=E&&E.kind!=="audio"?E:{generator:"plasma"};this.drawGenerator(l,F,i,e.seed,e.duration)}else{const F=this.uploadSource(E);this.drawTexture(l,F,P)}let z=l,W=f;const x=this.histFor(P.id);for(const F of P.effects){if(!F.enabled)continue;this.applyEffect(W,z.tex,F,P,i,M,n,_,x.tex);const k=z;z=W,W=k}if(P.feedback.amount>.001){W.bind(),m.use(),He(a,0,z.tex),He(a,1,x.tex),m.i("uTex",0),m.i("uFeedback",1),m.f("uAmount",P.feedback.amount),m.f("uOpacity",P.feedback.opacity),m.f("uScale",P.feedback.scale),m.f("uRotation",P.feedback.rotation),m.f("uDistortion",P.feedback.distortion),m.f("uTime",i),et(a);const F=z;z=W,W=F}this.blitTo(u,c.tex),c.bind(),d.use(),He(a,0,u.tex),He(a,1,z.tex),d.i("uBase",0),d.i("uLayer",1),d.f("uOpacity",P.opacity),d.i("uBlend",eh[P.blendMode]??0),d.v2("uResolution",g,v),et(a),this.blitTo(x,z.tex)}b.amount>.001&&(u.bind(),m.use(),He(a,0,c.tex),He(a,1,_),m.i("uTex",0),m.i("uFeedback",1),m.f("uAmount",b.amount),m.f("uOpacity",b.opacity),m.f("uScale",b.scale),m.f("uRotation",b.rotation),m.f("uDistortion",b.distortion),m.f("uTime",i),et(a),this.blitTo(c,u.tex)),this.blitTo(this.ring[this.ringIndex],c.tex),this.ringIndex=(this.ringIndex+1)%Zt,a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),p.use(),He(a,0,c.tex),p.i("uTex",0),p.f("uVignette",o?.vignette??.25),et(a)}capture(e,i,o,a,n="image/png",s=.97){const r=this.paintFrame(e,i,o,a);return new Promise((l,f)=>{r.toBlob(c=>{c?l(c):f(new Error("Export failed"))},n,s)})}paintFrame(e,i,o,a,n){const s=n??document.createElement("canvas");s.width!==o&&(s.width=o),s.height!==a&&(s.height=a);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:o,height:a,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===o&&this.height===a)r.putImageData(fs(l,o,a),0,0);else{const f=document.createElement("canvas");f.width=this.width,f.height=this.height,f.getContext("2d")?.putImageData(fs(l,this.width,this.height),0,0),r.drawImage(f,0,0,o,a)}return s}readPixels(e,i){const o=this.gl,a=new Uint8Array(e*i*4);o.bindFramebuffer(o.FRAMEBUFFER,this.composite.fbo),o.readPixels(0,0,e,i,o.RGBA,o.UNSIGNED_BYTE,a),o.bindFramebuffer(o.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(a.length)),s=e*4;for(let r=0;r<i;r++)n.set(a.subarray((i-1-r)*s,(i-r)*s),r*s);return n}}const sh=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,rh=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function lh(t){return t.type.startsWith("video/")||rh.test(t.name)}function ch(t){return t.type.startsWith("image/")||sh.test(t.name)}async function fh(t){if(lh(t))return hh(t);if(ch(t))return ds(t);if(uu(t))return mu(t);throw new Error(`Unsupported media: ${t.name}`)}async function dh(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return ds(i)}async function ds(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Fe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await uh(e);return{id:Fe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function uh(t){return new Promise((e,i)=>{const o=new Image;o.onload=()=>e(o),o.onerror=()=>i(new Error("Image failed to load")),o.src=t})}function hh(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((o,a)=>{const n=()=>{o({id:Fe("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>a(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function mh(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Fe("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function us(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function ph(t,e,i){if(t.kind!=="video"||!t.video)return;const o=t.video,a=o.duration;if(!Number.isFinite(a)||a<=0)return;const n=(e%a+a)%a,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,f=s&&r&&l>.92&&l<1.08,c=Math.abs(o.currentTime-n);if(!s){if(o.paused||o.pause(),c>1/30)try{o.currentTime=n}catch{}return}if(f){if(o.playbackRate!==1&&(o.playbackRate=1),o.paused&&o.play().catch(()=>{}),c>.35)try{o.currentTime=n}catch{}return}o.paused||o.pause();const u=Math.max(.25,Math.min(4,Math.abs(l)||1));if(o.playbackRate!==u&&(o.playbackRate=u),c>1/30)try{o.currentTime=n}catch{}}const gh=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ba(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mo={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var hs;function bh(){return hs||(hs=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(o,a,n){function s(f,c){if(!a[f]){if(!o[f]){var u=typeof Ba=="function"&&Ba;if(!c&&u)return u(f,!0);if(r)return r(f,!0);var p=new Error("Cannot find module '"+f+"'");throw p.code="MODULE_NOT_FOUND",p}var d=a[f]={exports:{}};o[f][0].call(d.exports,function(m){var h=o[f][1][m];return s(h||m)},d,d.exports,i,o,a,n)}return a[f].exports}for(var r=typeof Ba=="function"&&Ba,l=0;l<n.length;l++)s(n[l]);return s})({1:[function(i,o,a){var n=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(l){for(var f,c,u,p,d,m,h,g=[],v=0,b=l.length,w=b,T=n.getTypeOf(l)!=="string";v<l.length;)w=b-v,u=T?(f=l[v++],c=v<b?l[v++]:0,v<b?l[v++]:0):(f=l.charCodeAt(v++),c=v<b?l.charCodeAt(v++):0,v<b?l.charCodeAt(v++):0),p=f>>2,d=(3&f)<<4|c>>4,m=1<w?(15&c)<<2|u>>6:64,h=2<w?63&u:64,g.push(r.charAt(p)+r.charAt(d)+r.charAt(m)+r.charAt(h));return g.join("")},a.decode=function(l){var f,c,u,p,d,m,h=0,g=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var b,w=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&w--,l.charAt(l.length-2)===r.charAt(64)&&w--,w%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=s.uint8array?new Uint8Array(0|w):new Array(0|w);h<l.length;)f=r.indexOf(l.charAt(h++))<<2|(p=r.indexOf(l.charAt(h++)))>>4,c=(15&p)<<4|(d=r.indexOf(l.charAt(h++)))>>2,u=(3&d)<<6|(m=r.indexOf(l.charAt(h++))),b[g++]=f,d!==64&&(b[g++]=c),m!==64&&(b[g++]=u);return b}},{"./support":30,"./utils":32}],2:[function(i,o,a){var n=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function f(c,u,p,d,m){this.compressedSize=c,this.uncompressedSize=u,this.crc32=p,this.compression=d,this.compressedContent=m}f.prototype={getContentWorker:function(){var c=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return c.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(c,u,p){return c.pipe(new r).pipe(new l("uncompressedSize")).pipe(u.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},o.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,o,a){var n=i("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},a.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,o,a){var n=i("./utils"),s=(function(){for(var r,l=[],f=0;f<256;f++){r=f;for(var c=0;c<8;c++)r=1&r?3988292384^r>>>1:r>>>1;l[f]=r}return l})();o.exports=function(r,l){return r!==void 0&&r.length?n.getTypeOf(r)!=="string"?(function(f,c,u,p){var d=s,m=p+u;f^=-1;for(var h=p;h<m;h++)f=f>>>8^d[255&(f^c[h])];return-1^f})(0|l,r,r.length,0):(function(f,c,u,p){var d=s,m=p+u;f^=-1;for(var h=p;h<m;h++)f=f>>>8^d[255&(f^c.charCodeAt(h))];return-1^f})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,o,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(i,o,a){var n=null;n=typeof Promise<"u"?Promise:i("lie"),o.exports={Promise:n}},{lie:37}],7:[function(i,o,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),f=n?"uint8array":"array";function c(u,p){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=p,this.meta={}}a.magic="\b\0",r.inherits(c,l),c.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(f,u.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(p){u.push({data:p,meta:u.meta})}},a.compressWorker=function(u){return new c("Deflate",u)},a.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,o,a){function n(d,m){var h,g="";for(h=0;h<m;h++)g+=String.fromCharCode(255&d),d>>>=8;return g}function s(d,m,h,g,v,b){var w,T,_=d.file,M=d.compression,A=b!==f.utf8encode,P=r.transformTo("string",b(_.name)),E=r.transformTo("string",f.utf8encode(_.name)),z=_.comment,W=r.transformTo("string",b(z)),x=r.transformTo("string",f.utf8encode(z)),F=E.length!==_.name.length,k=x.length!==z.length,H="",V="",R="",Q=_.dir,j=_.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};m&&!h||(ae.crc32=d.crc32,ae.compressedSize=d.compressedSize,ae.uncompressedSize=d.uncompressedSize);var O=0;m&&(O|=8),A||!F&&!k||(O|=2048);var L=0,oe=0;Q&&(L|=16),v==="UNIX"?(oe=798,L|=(function(Z,pe){var we=Z;return Z||(we=pe?16893:33204),(65535&we)<<16})(_.unixPermissions,Q)):(oe=20,L|=(function(Z){return 63&(Z||0)})(_.dosPermissions)),w=j.getUTCHours(),w<<=6,w|=j.getUTCMinutes(),w<<=5,w|=j.getUTCSeconds()/2,T=j.getUTCFullYear()-1980,T<<=4,T|=j.getUTCMonth()+1,T<<=5,T|=j.getUTCDate(),F&&(V=n(1,1)+n(c(P),4)+E,H+="up"+n(V.length,2)+V),k&&(R=n(1,1)+n(c(W),4)+x,H+="uc"+n(R.length,2)+R);var te="";return te+=`
\0`,te+=n(O,2),te+=M.magic,te+=n(w,2),te+=n(T,2),te+=n(ae.crc32,4),te+=n(ae.compressedSize,4),te+=n(ae.uncompressedSize,4),te+=n(P.length,2),te+=n(H.length,2),{fileRecord:u.LOCAL_FILE_HEADER+te+P+H,dirRecord:u.CENTRAL_FILE_HEADER+n(oe,2)+te+n(W.length,2)+"\0\0\0\0"+n(L,4)+n(g,4)+P+H+W}}var r=i("../utils"),l=i("../stream/GenericWorker"),f=i("../utf8"),c=i("../crc32"),u=i("../signature");function p(d,m,h,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=h,this.encodeFileName=g,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(p,l),p.prototype.push=function(d){var m=d.meta.percent||0,h=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:h?(m+100*(h-g-1))/h:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var m=this.streamFiles&&!d.file.dir;if(m){var h=s(d,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var m=this.streamFiles&&!d.file.dir,h=s(d,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),m)this.push({data:(function(g){return u.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)})(d),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var h=this.bytesWritten-d,g=(function(v,b,w,T,_){var M=r.transformTo("string",_(T));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(v,2)+n(v,2)+n(b,4)+n(w,4)+n(M.length,2)+M})(this.dirRecords.length,h,d,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var m=this;return d.on("data",function(h){m.processChunk(h)}),d.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),d.on("error",function(h){m.error(h)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var m=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var h=0;h<m.length;h++)try{m[h].error(d)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,m=0;m<d.length;m++)d[m].lock()},o.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,o,a){var n=i("../compressions"),s=i("./ZipFileWorker");a.generateWorker=function(r,l,f){var c=new s(l.streamFiles,f,l.platform,l.encodeFileName),u=0;try{r.forEach(function(p,d){u++;var m=(function(b,w){var T=b||w,_=n[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(d.options.compression,l.compression),h=d.options.compressionOptions||l.compressionOptions||{},g=d.dir,v=d.date;d._compressWorker(m,h).withStreamInfo("file",{name:p,dir:g,date:v,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(c)}),c.entriesCount=u}catch(p){c.error(p)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,o,a){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,r){return new n().loadAsync(s,r)},n.external=i("./external"),o.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,o,a){var n=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),f=i("./stream/Crc32Probe"),c=i("./nodejsUtils");function u(p){return new s.Promise(function(d,m){var h=p.decompressed.getContentWorker().pipe(new f);h.on("error",function(g){m(g)}).on("end",function(){h.streamInfo.crc32!==p.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}o.exports=function(p,d){var m=this;return d=n.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),c.isNode&&c.isStream(p)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(h){var g=new l(d);return g.load(h),g}).then(function(h){var g=[s.Promise.resolve(h)],v=h.files;if(d.checkCRC32)for(var b=0;b<v.length;b++)g.push(u(v[b]));return s.Promise.all(g)}).then(function(h){for(var g=h.shift(),v=g.files,b=0;b<v.length;b++){var w=v[b],T=w.fileNameStr,_=n.resolve(w.fileNameStr);m.file(_,w.decompressed,{binary:!0,optimizedBinaryString:!0,date:w.date,dir:w.dir,comment:w.fileCommentStr.length?w.fileCommentStr:null,unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions,createFolders:d.createFolders}),w.dir||(m.file(_).unsafeOriginalName=T)}return g.zipComment.length&&(m.comment=g.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,o,a){var n=i("../utils"),s=i("../stream/GenericWorker");function r(l,f){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(f)}n.inherits(r,s),r.prototype._bindStream=function(l){var f=this;(this._stream=l).pause(),l.on("data",function(c){f.push({data:c,meta:{percent:0}})}).on("error",function(c){f.isPaused?this.generatedError=c:f.error(c)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,o,a){var n=i("readable-stream").Readable;function s(r,l,f){n.call(this,l),this._helper=r;var c=this;r.on("data",function(u,p){c.push(u)||c._helper.pause(),f&&f(p)}).on("error",function(u){c.emit("error",u)}).on("end",function(){c.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},o.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,o,a){o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,o,a){function n(_,M,A){var P,E=r.getTypeOf(M),z=r.extend(A||{},c);z.date=z.date||new Date,z.compression!==null&&(z.compression=z.compression.toUpperCase()),typeof z.unixPermissions=="string"&&(z.unixPermissions=parseInt(z.unixPermissions,8)),z.unixPermissions&&16384&z.unixPermissions&&(z.dir=!0),z.dosPermissions&&16&z.dosPermissions&&(z.dir=!0),z.dir&&(_=v(_)),z.createFolders&&(P=g(_))&&b.call(this,P,!0);var W=E==="string"&&z.binary===!1&&z.base64===!1;A&&A.binary!==void 0||(z.binary=!W),(M instanceof u&&M.uncompressedSize===0||z.dir||!M||M.length===0)&&(z.base64=!1,z.binary=!0,M="",z.compression="STORE",E="string");var x=null;x=M instanceof u||M instanceof l?M:m.isNode&&m.isStream(M)?new h(_,M):r.prepareContent(_,M,z.binary,z.optimizedBinaryString,z.base64);var F=new p(_,x,z);this.files[_]=F}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),f=i("./stream/StreamHelper"),c=i("./defaults"),u=i("./compressedObject"),p=i("./zipObject"),d=i("./generate"),m=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),g=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var M=_.lastIndexOf("/");return 0<M?_.substring(0,M):""},v=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},b=function(_,M){return M=M!==void 0?M:c.createFolders,_=v(_),this.files[_]||n.call(this,_,null,{dir:!0,createFolders:M}),this.files[_]};function w(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var M,A,P;for(M in this.files)P=this.files[M],(A=M.slice(this.root.length,M.length))&&M.slice(0,this.root.length)===this.root&&_(A,P)},filter:function(_){var M=[];return this.forEach(function(A,P){_(A,P)&&M.push(P)}),M},file:function(_,M,A){if(arguments.length!==1)return _=this.root+_,n.call(this,_,M,A),this;if(w(_)){var P=_;return this.filter(function(z,W){return!W.dir&&P.test(z)})}var E=this.files[this.root+_];return E&&!E.dir?E:null},folder:function(_){if(!_)return this;if(w(_))return this.filter(function(E,z){return z.dir&&_.test(E)});var M=this.root+_,A=b.call(this,M),P=this.clone();return P.root=A.name,P},remove:function(_){_=this.root+_;var M=this.files[_];if(M||(_.slice(-1)!=="/"&&(_+="/"),M=this.files[_]),M&&!M.dir)delete this.files[_];else for(var A=this.filter(function(E,z){return z.name.slice(0,_.length)===_}),P=0;P<A.length;P++)delete this.files[A[P].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var M,A={};try{if((A=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");r.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var P=A.comment||this.comment||"";M=d.generateWorker(this,A,P)}catch(E){(M=new l("error")).error(E)}return new f(M,A.type||"string",A.mimeType)},generateAsync:function(_,M){return this.generateInternalStream(_).accumulate(M)},generateNodeStream:function(_,M){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(M)}};o.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,o,a){o.exports=i("stream")},{stream:void 0}],17:[function(i,o,a){var n=i("./DataReader");function s(r){n.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),f=r.charCodeAt(1),c=r.charCodeAt(2),u=r.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===f&&this.data[p+2]===c&&this.data[p+3]===u)return p-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),f=r.charCodeAt(1),c=r.charCodeAt(2),u=r.charCodeAt(3),p=this.readData(4);return l===p[0]&&f===p[1]&&c===p[2]&&u===p[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},o.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,o,a){var n=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,f=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)f=(f<<8)+this.byteAt(l);return this.index+=r,f},readString:function(r){return n.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},o.exports=s},{"../utils":32}],19:[function(i,o,a){var n=i("./Uint8ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},o.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,o,a){var n=i("./DataReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},o.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,o,a){var n=i("./ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},o.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,o,a){var n=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),f=i("./NodeBufferReader"),c=i("./Uint8ArrayReader");o.exports=function(u){var p=n.getTypeOf(u);return n.checkSupport(p),p!=="string"||s.uint8array?p==="nodebuffer"?new f(u):s.uint8array?new c(n.transformTo("uint8array",u)):new r(n.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,o,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,o,a){var n=i("./GenericWorker"),s=i("../utils");function r(l){n.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,n),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},o.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,o,a){var n=i("./GenericWorker"),s=i("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,n),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},o.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,o,a){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(r,s),r.prototype.processChunk=function(l){if(l){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+l.data.length}s.prototype.processChunk.call(this,l)},o.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,o,a){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){f.dataIsReady=!0,f.data=c,f.max=c&&c.length||0,f.type=n.getTypeOf(c),f.isPaused||f._tickAndRepeat()},function(c){f.error(c)})}n.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,f);break;case"uint8array":l=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":l=this.data.slice(this.index,f)}return this.index=f,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,o,a){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},o.exports=n},{}],29:[function(i,o,a){var n=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),f=i("../support"),c=i("../external"),u=null;if(f.nodestream)try{u=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(m,h){return new c.Promise(function(g,v){var b=[],w=m._internalType,T=m._outputType,_=m._mimeType;m.on("data",function(M,A){b.push(M),h&&h(A)}).on("error",function(M){b=[],v(M)}).on("end",function(){try{var M=(function(A,P,E){switch(A){case"blob":return n.newBlob(n.transformTo("arraybuffer",P),E);case"base64":return l.encode(P);default:return n.transformTo(A,P)}})(T,(function(A,P){var E,z=0,W=null,x=0;for(E=0;E<P.length;E++)x+=P[E].length;switch(A){case"string":return P.join("");case"array":return Array.prototype.concat.apply([],P);case"uint8array":for(W=new Uint8Array(x),E=0;E<P.length;E++)W.set(P[E],z),z+=P[E].length;return W;case"nodebuffer":return Buffer.concat(P);default:throw new Error("concat : unsupported type '"+A+"'")}})(w,b),_);g(M)}catch(A){v(A)}b=[]}).resume()})}function d(m,h,g){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=g,n.checkSupport(v),this._worker=m.pipe(new s(v)),m.lock()}catch(b){this._worker=new r("error"),this._worker.error(b)}}d.prototype={accumulate:function(m){return p(this,m)},on:function(m,h){var g=this;return m==="data"?this._worker.on(m,function(v){h.call(g,v.data,v.meta)}):this._worker.on(m,function(){n.delay(h,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},m)}},o.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,o,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var n=new ArrayBuffer(0);try{a.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),a.blob=s.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!i("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(i,o,a){for(var n=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),f=new Array(256),c=0;c<256;c++)f[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;f[254]=f[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}a.utf8encode=function(d){return s.nodebuffer?r.newBufferFrom(d,"utf-8"):(function(m){var h,g,v,b,w,T=m.length,_=0;for(b=0;b<T;b++)(64512&(g=m.charCodeAt(b)))==55296&&b+1<T&&(64512&(v=m.charCodeAt(b+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),b++),_+=g<128?1:g<2048?2:g<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),b=w=0;w<_;b++)(64512&(g=m.charCodeAt(b)))==55296&&b+1<T&&(64512&(v=m.charCodeAt(b+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),b++),g<128?h[w++]=g:(g<2048?h[w++]=192|g>>>6:(g<65536?h[w++]=224|g>>>12:(h[w++]=240|g>>>18,h[w++]=128|g>>>12&63),h[w++]=128|g>>>6&63),h[w++]=128|63&g);return h})(d)},a.utf8decode=function(d){return s.nodebuffer?n.transformTo("nodebuffer",d).toString("utf-8"):(function(m){var h,g,v,b,w=m.length,T=new Array(2*w);for(h=g=0;h<w;)if((v=m[h++])<128)T[g++]=v;else if(4<(b=f[v]))T[g++]=65533,h+=b-1;else{for(v&=b===2?31:b===3?15:7;1<b&&h<w;)v=v<<6|63&m[h++],b--;1<b?T[g++]=65533:v<65536?T[g++]=v:(v-=65536,T[g++]=55296|v>>10&1023,T[g++]=56320|1023&v)}return T.length!==g&&(T.subarray?T=T.subarray(0,g):T.length=g),n.applyFromCharCode(T)})(d=n.transformTo(s.uint8array?"uint8array":"array",d))},n.inherits(u,l),u.prototype.processChunk=function(d){var m=n.transformTo(s.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=m;(m=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),m.set(h,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var g=(function(b,w){var T;for((w=w||b.length)>b.length&&(w=b.length),T=w-1;0<=T&&(192&b[T])==128;)T--;return T<0||T===0?w:T+f[b[T]]>w?T:w})(m),v=m;g!==m.length&&(s.uint8array?(v=m.subarray(0,g),this.leftOver=m.subarray(g,m.length)):(v=m.slice(0,g),this.leftOver=m.slice(g,m.length))),this.push({data:a.utf8decode(v),meta:d.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=u,n.inherits(p,l),p.prototype.processChunk=function(d){this.push({data:a.utf8encode(d.data),meta:d.meta})},a.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,o,a){var n=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function f(h){return h}function c(h,g){for(var v=0;v<h.length;++v)g[v]=255&h.charCodeAt(v);return g}i("setimmediate"),a.newBlob=function(h,g){a.checkSupport("blob");try{return new Blob([h],{type:g})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(h,g,v){var b=[],w=0,T=h.length;if(T<=v)return String.fromCharCode.apply(null,h);for(;w<T;)g==="array"||g==="nodebuffer"?b.push(String.fromCharCode.apply(null,h.slice(w,Math.min(w+v,T)))):b.push(String.fromCharCode.apply(null,h.subarray(w,Math.min(w+v,T)))),w+=v;return b.join("")},stringifyByChar:function(h){for(var g="",v=0;v<h.length;v++)g+=String.fromCharCode(h[v]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function p(h){var g=65536,v=a.getTypeOf(h),b=!0;if(v==="uint8array"?b=u.applyCanBeUsed.uint8array:v==="nodebuffer"&&(b=u.applyCanBeUsed.nodebuffer),b)for(;1<g;)try{return u.stringifyByChunk(h,v,g)}catch{g=Math.floor(g/2)}return u.stringifyByChar(h)}function d(h,g){for(var v=0;v<h.length;v++)g[v]=h[v];return g}a.applyFromCharCode=p;var m={};m.string={string:f,array:function(h){return c(h,new Array(h.length))},arraybuffer:function(h){return m.string.uint8array(h).buffer},uint8array:function(h){return c(h,new Uint8Array(h.length))},nodebuffer:function(h){return c(h,r.allocBuffer(h.length))}},m.array={string:p,array:f,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(h)}},m.arraybuffer={string:function(h){return p(new Uint8Array(h))},array:function(h){return d(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:f,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(new Uint8Array(h))}},m.uint8array={string:p,array:function(h){return d(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:f,nodebuffer:function(h){return r.newBufferFrom(h)}},m.nodebuffer={string:p,array:function(h){return d(h,new Array(h.length))},arraybuffer:function(h){return m.nodebuffer.uint8array(h).buffer},uint8array:function(h){return d(h,new Uint8Array(h.length))},nodebuffer:f},a.transformTo=function(h,g){if(g=g||"",!h)return g;a.checkSupport(h);var v=a.getTypeOf(g);return m[v][h](g)},a.resolve=function(h){for(var g=h.split("/"),v=[],b=0;b<g.length;b++){var w=g[b];w==="."||w===""&&b!==0&&b!==g.length-1||(w===".."?v.pop():v.push(w))}return v.join("/")},a.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":n.nodebuffer&&r.isBuffer(h)?"nodebuffer":n.uint8array&&h instanceof Uint8Array?"uint8array":n.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(h){if(!n[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(h){var g,v,b="";for(v=0;v<(h||"").length;v++)b+="\\x"+((g=h.charCodeAt(v))<16?"0":"")+g.toString(16).toUpperCase();return b},a.delay=function(h,g,v){setImmediate(function(){h.apply(v||null,g||[])})},a.inherits=function(h,g){function v(){}v.prototype=g.prototype,h.prototype=new v},a.extend=function(){var h,g,v={};for(h=0;h<arguments.length;h++)for(g in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],g)&&v[g]===void 0&&(v[g]=arguments[h][g]);return v},a.prepareContent=function(h,g,v,b,w){return l.Promise.resolve(g).then(function(T){return n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,M){var A=new FileReader;A.onload=function(P){_(P.target.result)},A.onerror=function(P){M(P.target.error)},A.readAsArrayBuffer(T)}):T}).then(function(T){var _=a.getTypeOf(T);return _?(_==="arraybuffer"?T=a.transformTo("uint8array",T):_==="string"&&(w?T=s.decode(T):v&&b!==!0&&(T=(function(M){return c(M,n.uint8array?new Uint8Array(M.length):new Array(M.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,o,a){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),f=i("./support");function c(u){this.files=[],this.loadOptions=u}c.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(p)+", expected "+s.pretty(u)+")")}},isSignature:function(u,p){var d=this.reader.index;this.reader.setIndex(u);var m=this.reader.readString(4)===p;return this.reader.setIndex(d),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),p=f.uint8array?"uint8array":"array",d=s.transformTo(p,u);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,p,d,m=this.zip64EndOfCentralSize-44;0<m;)u=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[u]={id:u,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,p;for(u=0;u<this.files.length;u++)p=this.files[u],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var p=u;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var m=p-d;if(0<m)this.isSignature(p,r.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(u){this.reader=n(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,o,a){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),f=i("./utf8"),c=i("./compressions"),u=i("./support");function p(d,m){this.options=d,this.loadOptions=m}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var m,h;if(d.skip(22),this.fileNameLength=d.readInt(2),h=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(g){for(var v in c)if(Object.prototype.hasOwnProperty.call(c,v)&&c[v].magic===g)return c[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,m,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var m=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(m),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var m,h,g,v=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<v;)m=d.readInt(2),h=d.readInt(2),g=d.readData(h),this.extraFields[m]={id:m,length:h,value:g};d.setIndex(v)},handleUTF8:function(){var d=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var h=s.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var v=s.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var m=n(d.value);return m.readInt(1)!==1||l(this.fileName)!==m.readInt(4)?null:f.utf8decode(m.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var m=n(d.value);return m.readInt(1)!==1||l(this.fileComment)!==m.readInt(4)?null:f.utf8decode(m.readData(d.length-5))}return null}},o.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,o,a){function n(m,h,g){this.name=m,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=h,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),f=i("./compressedObject"),c=i("./stream/GenericWorker");n.prototype={internalStream:function(m){var h=null,g="string";try{if(!m)throw new Error("No output type specified.");var v=(g=m.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),h=this._decompressWorker();var b=!this._dataBinary;b&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!b&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(w){(h=new c("error")).error(w)}return new s(h,g,"")},async:function(m,h){return this.internalStream(m).accumulate(h)},nodeStream:function(m,h){return this.internalStream(m||"nodebuffer").toNodejsStream(h)},_compressWorker:function(m,h){if(this._data instanceof f&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),f.createWorkerFrom(g,m,h)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof c?this._data:new r(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<u.length;d++)n.prototype[u[d]]=p;o.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,o,a){(function(n){var s,r,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var f=0,c=new l(m),u=n.document.createTextNode("");c.observe(u,{characterData:!0}),s=function(){u.data=f=++f%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var h=n.document.createElement("script");h.onreadystatechange=function(){m(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},n.document.documentElement.appendChild(h)}:function(){setTimeout(m,0)};else{var p=new n.MessageChannel;p.port1.onmessage=m,s=function(){p.port2.postMessage(0)}}var d=[];function m(){var h,g;r=!0;for(var v=d.length;v;){for(g=d,d=[],h=-1;++h<v;)g[h]();v=d.length}r=!1}o.exports=function(h){d.push(h)!==1||r||s()}}).call(this,typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,o,a){var n=i("immediate");function s(){}var r={},l=["REJECTED"],f=["FULFILLED"],c=["PENDING"];function u(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,v!==s&&h(this,v)}function p(v,b,w){this.promise=v,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function d(v,b,w){n(function(){var T;try{T=b(w)}catch(_){return r.reject(v,_)}T===v?r.reject(v,new TypeError("Cannot resolve promise with itself")):r.resolve(v,T)})}function m(v){var b=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof b=="function")return function(){b.apply(v,arguments)}}function h(v,b){var w=!1;function T(A){w||(w=!0,r.reject(v,A))}function _(A){w||(w=!0,r.resolve(v,A))}var M=g(function(){b(_,T)});M.status==="error"&&T(M.value)}function g(v,b){var w={};try{w.value=v(b),w.status="success"}catch(T){w.status="error",w.value=T}return w}(o.exports=u).prototype.finally=function(v){if(typeof v!="function")return this;var b=this.constructor;return this.then(function(w){return b.resolve(v()).then(function(){return w})},function(w){return b.resolve(v()).then(function(){throw w})})},u.prototype.catch=function(v){return this.then(null,v)},u.prototype.then=function(v,b){if(typeof v!="function"&&this.state===f||typeof b!="function"&&this.state===l)return this;var w=new this.constructor(s);return this.state!==c?d(w,this.state===f?v:b,this.outcome):this.queue.push(new p(w,v,b)),w},p.prototype.callFulfilled=function(v){r.resolve(this.promise,v)},p.prototype.otherCallFulfilled=function(v){d(this.promise,this.onFulfilled,v)},p.prototype.callRejected=function(v){r.reject(this.promise,v)},p.prototype.otherCallRejected=function(v){d(this.promise,this.onRejected,v)},r.resolve=function(v,b){var w=g(m,b);if(w.status==="error")return r.reject(v,w.value);var T=w.value;if(T)h(v,T);else{v.state=f,v.outcome=b;for(var _=-1,M=v.queue.length;++_<M;)v.queue[_].callFulfilled(b)}return v},r.reject=function(v,b){v.state=l,v.outcome=b;for(var w=-1,T=v.queue.length;++w<T;)v.queue[w].callRejected(b);return v},u.resolve=function(v){return v instanceof this?v:r.resolve(new this(s),v)},u.reject=function(v){var b=new this(s);return r.reject(b,v)},u.all=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=v.length,T=!1;if(!w)return this.resolve([]);for(var _=new Array(w),M=0,A=-1,P=new this(s);++A<w;)E(v[A],A);return P;function E(z,W){b.resolve(z).then(function(x){_[W]=x,++M!==w||T||(T=!0,r.resolve(P,_))},function(x){T||(T=!0,r.reject(P,x))})}},u.race=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=v.length,T=!1;if(!w)return this.resolve([]);for(var _=-1,M=new this(s);++_<w;)A=v[_],b.resolve(A).then(function(P){T||(T=!0,r.resolve(M,P))},function(P){T||(T=!0,r.reject(M,P))});var A;return M}},{immediate:36}],38:[function(i,o,a){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),o.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,o,a){var n=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),f=i("./zlib/zstream"),c=Object.prototype.toString,u=0,p=-1,d=0,m=8;function h(v){if(!(this instanceof h))return new h(v);this.options=s.assign({level:p,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},v||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var w=n.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(w!==u)throw new Error(l[w]);if(b.header&&n.deflateSetHeader(this.strm,b.header),b.dictionary){var T;if(T=typeof b.dictionary=="string"?r.string2buf(b.dictionary):c.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(w=n.deflateSetDictionary(this.strm,T))!==u)throw new Error(l[w]);this._dict_set=!0}}function g(v,b){var w=new h(b);if(w.push(v,!0),w.err)throw w.msg||l[w.err];return w.result}h.prototype.push=function(v,b){var w,T,_=this.strm,M=this.options.chunkSize;if(this.ended)return!1;T=b===~~b?b:b===!0?4:0,typeof v=="string"?_.input=r.string2buf(v):c.call(v)==="[object ArrayBuffer]"?_.input=new Uint8Array(v):_.input=v,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(M),_.next_out=0,_.avail_out=M),(w=n.deflate(_,T))!==1&&w!==u)return this.onEnd(w),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&w!==1);return T===4?(w=n.deflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===u):T!==2||(this.onEnd(u),!(_.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},a.Deflate=h,a.deflate=g,a.deflateRaw=function(v,b){return(b=b||{}).raw=!0,g(v,b)},a.gzip=function(v,b){return(b=b||{}).gzip=!0,g(v,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,o,a){var n=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),f=i("./zlib/messages"),c=i("./zlib/zstream"),u=i("./zlib/gzheader"),p=Object.prototype.toString;function d(h){if(!(this instanceof d))return new d(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||h&&h.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=n.inflateInit2(this.strm,g.windowBits);if(v!==l.Z_OK)throw new Error(f[v]);this.header=new u,n.inflateGetHeader(this.strm,this.header)}function m(h,g){var v=new d(g);if(v.push(h,!0),v.err)throw v.msg||f[v.err];return v.result}d.prototype.push=function(h,g){var v,b,w,T,_,M,A=this.strm,P=this.options.chunkSize,E=this.options.dictionary,z=!1;if(this.ended)return!1;b=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?A.input=r.binstring2buf(h):p.call(h)==="[object ArrayBuffer]"?A.input=new Uint8Array(h):A.input=h,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new s.Buf8(P),A.next_out=0,A.avail_out=P),(v=n.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&E&&(M=typeof E=="string"?r.string2buf(E):p.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,v=n.inflateSetDictionary(this.strm,M)),v===l.Z_BUF_ERROR&&z===!0&&(v=l.Z_OK,z=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&v!==l.Z_STREAM_END&&(A.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(w=r.utf8border(A.output,A.next_out),T=A.next_out-w,_=r.buf2string(A.output,w),A.next_out=T,A.avail_out=P-T,T&&s.arraySet(A.output,A.output,w,T,0),this.onData(_)):this.onData(s.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(z=!0)}while((0<A.avail_in||A.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(v=n.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},d.prototype.onData=function(h){this.chunks.push(h)},d.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},a.Inflate=d,a.inflate=m,a.inflateRaw=function(h,g){return(g=g||{}).raw=!0,m(h,g)},a.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,o,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(l){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var c=f.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var u in c)c.hasOwnProperty(u)&&(l[u]=c[u])}}return l},a.shrinkBuf=function(l,f){return l.length===f?l:l.subarray?l.subarray(0,f):(l.length=f,l)};var s={arraySet:function(l,f,c,u,p){if(f.subarray&&l.subarray)l.set(f.subarray(c,c+u),p);else for(var d=0;d<u;d++)l[p+d]=f[c+d]},flattenChunks:function(l){var f,c,u,p,d,m;for(f=u=0,c=l.length;f<c;f++)u+=l[f].length;for(m=new Uint8Array(u),f=p=0,c=l.length;f<c;f++)d=l[f],m.set(d,p),p+=d.length;return m}},r={arraySet:function(l,f,c,u,p){for(var d=0;d<u;d++)l[p+d]=f[c+d]},flattenChunks:function(l){return[].concat.apply([],l)}};a.setTyped=function(l){l?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,s)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,r))},a.setTyped(n)},{}],42:[function(i,o,a){var n=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new n.Buf8(256),f=0;f<256;f++)l[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function c(u,p){if(p<65537&&(u.subarray&&r||!u.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(u,p));for(var d="",m=0;m<p;m++)d+=String.fromCharCode(u[m]);return d}l[254]=l[254]=1,a.string2buf=function(u){var p,d,m,h,g,v=u.length,b=0;for(h=0;h<v;h++)(64512&(d=u.charCodeAt(h)))==55296&&h+1<v&&(64512&(m=u.charCodeAt(h+1)))==56320&&(d=65536+(d-55296<<10)+(m-56320),h++),b+=d<128?1:d<2048?2:d<65536?3:4;for(p=new n.Buf8(b),h=g=0;g<b;h++)(64512&(d=u.charCodeAt(h)))==55296&&h+1<v&&(64512&(m=u.charCodeAt(h+1)))==56320&&(d=65536+(d-55296<<10)+(m-56320),h++),d<128?p[g++]=d:(d<2048?p[g++]=192|d>>>6:(d<65536?p[g++]=224|d>>>12:(p[g++]=240|d>>>18,p[g++]=128|d>>>12&63),p[g++]=128|d>>>6&63),p[g++]=128|63&d);return p},a.buf2binstring=function(u){return c(u,u.length)},a.binstring2buf=function(u){for(var p=new n.Buf8(u.length),d=0,m=p.length;d<m;d++)p[d]=u.charCodeAt(d);return p},a.buf2string=function(u,p){var d,m,h,g,v=p||u.length,b=new Array(2*v);for(d=m=0;d<v;)if((h=u[d++])<128)b[m++]=h;else if(4<(g=l[h]))b[m++]=65533,d+=g-1;else{for(h&=g===2?31:g===3?15:7;1<g&&d<v;)h=h<<6|63&u[d++],g--;1<g?b[m++]=65533:h<65536?b[m++]=h:(h-=65536,b[m++]=55296|h>>10&1023,b[m++]=56320|1023&h)}return c(b,m)},a.utf8border=function(u,p){var d;for((p=p||u.length)>u.length&&(p=u.length),d=p-1;0<=d&&(192&u[d])==128;)d--;return d<0||d===0?p:d+l[u[d]]>p?d:p}},{"./common":41}],43:[function(i,o,a){o.exports=function(n,s,r,l){for(var f=65535&n|0,c=n>>>16&65535|0,u=0;r!==0;){for(r-=u=2e3<r?2e3:r;c=c+(f=f+s[l++]|0)|0,--u;);f%=65521,c%=65521}return f|c<<16|0}},{}],44:[function(i,o,a){o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,o,a){var n=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var f=0;f<8;f++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();o.exports=function(s,r,l,f){var c=n,u=f+l;s^=-1;for(var p=f;p<u;p++)s=s>>>8^c[255&(s^r[p])];return-1^s}},{}],46:[function(i,o,a){var n,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),f=i("./crc32"),c=i("./messages"),u=0,p=4,d=0,m=-2,h=-1,g=4,v=2,b=8,w=9,T=286,_=30,M=19,A=2*T+1,P=15,E=3,z=258,W=z+E+1,x=42,F=113,k=1,H=2,V=3,R=4;function Q(y,$){return y.msg=c[$],$}function j(y){return(y<<1)-(4<y?9:0)}function ae(y){for(var $=y.length;0<=--$;)y[$]=0}function O(y){var $=y.state,q=$.pending;q>y.avail_out&&(q=y.avail_out),q!==0&&(s.arraySet(y.output,$.pending_buf,$.pending_out,q,y.next_out),y.next_out+=q,$.pending_out+=q,y.total_out+=q,y.avail_out-=q,$.pending-=q,$.pending===0&&($.pending_out=0))}function L(y,$){r._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,$),y.block_start=y.strstart,O(y.strm)}function oe(y,$){y.pending_buf[y.pending++]=$}function te(y,$){y.pending_buf[y.pending++]=$>>>8&255,y.pending_buf[y.pending++]=255&$}function Z(y,$){var q,C,S=y.max_chain_length,B=y.strstart,G=y.prev_length,K=y.nice_match,N=y.strstart>y.w_size-W?y.strstart-(y.w_size-W):0,Y=y.window,ie=y.w_mask,ee=y.prev,le=y.strstart+z,ye=Y[B+G-1],me=Y[B+G];y.prev_length>=y.good_match&&(S>>=2),K>y.lookahead&&(K=y.lookahead);do if(Y[(q=$)+G]===me&&Y[q+G-1]===ye&&Y[q]===Y[B]&&Y[++q]===Y[B+1]){B+=2,q++;do;while(Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&Y[++B]===Y[++q]&&B<le);if(C=z-(le-B),B=le-z,G<C){if(y.match_start=$,K<=(G=C))break;ye=Y[B+G-1],me=Y[B+G]}}while(($=ee[$&ie])>N&&--S!=0);return G<=y.lookahead?G:y.lookahead}function pe(y){var $,q,C,S,B,G,K,N,Y,ie,ee=y.w_size;do{if(S=y.window_size-y.lookahead-y.strstart,y.strstart>=ee+(ee-W)){for(s.arraySet(y.window,y.window,ee,ee,0),y.match_start-=ee,y.strstart-=ee,y.block_start-=ee,$=q=y.hash_size;C=y.head[--$],y.head[$]=ee<=C?C-ee:0,--q;);for($=q=ee;C=y.prev[--$],y.prev[$]=ee<=C?C-ee:0,--q;);S+=ee}if(y.strm.avail_in===0)break;if(G=y.strm,K=y.window,N=y.strstart+y.lookahead,Y=S,ie=void 0,ie=G.avail_in,Y<ie&&(ie=Y),q=ie===0?0:(G.avail_in-=ie,s.arraySet(K,G.input,G.next_in,ie,N),G.state.wrap===1?G.adler=l(G.adler,K,ie,N):G.state.wrap===2&&(G.adler=f(G.adler,K,ie,N)),G.next_in+=ie,G.total_in+=ie,ie),y.lookahead+=q,y.lookahead+y.insert>=E)for(B=y.strstart-y.insert,y.ins_h=y.window[B],y.ins_h=(y.ins_h<<y.hash_shift^y.window[B+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[B+E-1])&y.hash_mask,y.prev[B&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=B,B++,y.insert--,!(y.lookahead+y.insert<E)););}while(y.lookahead<W&&y.strm.avail_in!==0)}function we(y,$){for(var q,C;;){if(y.lookahead<W){if(pe(y),y.lookahead<W&&$===u)return k;if(y.lookahead===0)break}if(q=0,y.lookahead>=E&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),q!==0&&y.strstart-q<=y.w_size-W&&(y.match_length=Z(y,q)),y.match_length>=E)if(C=r._tr_tally(y,y.strstart-y.match_start,y.match_length-E),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=E){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else C=r._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(C&&(L(y,!1),y.strm.avail_out===0))return k}return y.insert=y.strstart<E-1?y.strstart:E-1,$===p?(L(y,!0),y.strm.avail_out===0?V:R):y.last_lit&&(L(y,!1),y.strm.avail_out===0)?k:H}function de(y,$){for(var q,C,S;;){if(y.lookahead<W){if(pe(y),y.lookahead<W&&$===u)return k;if(y.lookahead===0)break}if(q=0,y.lookahead>=E&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=E-1,q!==0&&y.prev_length<y.max_lazy_match&&y.strstart-q<=y.w_size-W&&(y.match_length=Z(y,q),y.match_length<=5&&(y.strategy===1||y.match_length===E&&4096<y.strstart-y.match_start)&&(y.match_length=E-1)),y.prev_length>=E&&y.match_length<=y.prev_length){for(S=y.strstart+y.lookahead-E,C=r._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-E),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=S&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,q=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=E-1,y.strstart++,C&&(L(y,!1),y.strm.avail_out===0))return k}else if(y.match_available){if((C=r._tr_tally(y,0,y.window[y.strstart-1]))&&L(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return k}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(C=r._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<E-1?y.strstart:E-1,$===p?(L(y,!0),y.strm.avail_out===0?V:R):y.last_lit&&(L(y,!1),y.strm.avail_out===0)?k:H}function ue(y,$,q,C,S){this.good_length=y,this.max_lazy=$,this.nice_length=q,this.max_chain=C,this.func=S}function Ce(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*A),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*M+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(P+1),this.heap=new s.Buf16(2*T+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(y){var $;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=v,($=y.state).pending=0,$.pending_out=0,$.wrap<0&&($.wrap=-$.wrap),$.status=$.wrap?x:F,y.adler=$.wrap===2?0:1,$.last_flush=u,r._tr_init($),d):Q(y,m)}function Be(y){var $=ke(y);return $===d&&(function(q){q.window_size=2*q.w_size,ae(q.head),q.max_lazy_match=n[q.level].max_lazy,q.good_match=n[q.level].good_length,q.nice_match=n[q.level].nice_length,q.max_chain_length=n[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=E-1,q.match_available=0,q.ins_h=0})(y.state),$}function Oe(y,$,q,C,S,B){if(!y)return m;var G=1;if($===h&&($=6),C<0?(G=0,C=-C):15<C&&(G=2,C-=16),S<1||w<S||q!==b||C<8||15<C||$<0||9<$||B<0||g<B)return Q(y,m);C===8&&(C=9);var K=new Ce;return(y.state=K).strm=y,K.wrap=G,K.gzhead=null,K.w_bits=C,K.w_size=1<<K.w_bits,K.w_mask=K.w_size-1,K.hash_bits=S+7,K.hash_size=1<<K.hash_bits,K.hash_mask=K.hash_size-1,K.hash_shift=~~((K.hash_bits+E-1)/E),K.window=new s.Buf8(2*K.w_size),K.head=new s.Buf16(K.hash_size),K.prev=new s.Buf16(K.w_size),K.lit_bufsize=1<<S+6,K.pending_buf_size=4*K.lit_bufsize,K.pending_buf=new s.Buf8(K.pending_buf_size),K.d_buf=1*K.lit_bufsize,K.l_buf=3*K.lit_bufsize,K.level=$,K.strategy=B,K.method=q,Be(y)}n=[new ue(0,0,0,0,function(y,$){var q=65535;for(q>y.pending_buf_size-5&&(q=y.pending_buf_size-5);;){if(y.lookahead<=1){if(pe(y),y.lookahead===0&&$===u)return k;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var C=y.block_start+q;if((y.strstart===0||y.strstart>=C)&&(y.lookahead=y.strstart-C,y.strstart=C,L(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-W&&(L(y,!1),y.strm.avail_out===0))return k}return y.insert=0,$===p?(L(y,!0),y.strm.avail_out===0?V:R):(y.strstart>y.block_start&&(L(y,!1),y.strm.avail_out),k)}),new ue(4,4,8,4,we),new ue(4,5,16,8,we),new ue(4,6,32,32,we),new ue(4,4,16,16,de),new ue(8,16,32,32,de),new ue(8,16,128,128,de),new ue(8,32,128,256,de),new ue(32,128,258,1024,de),new ue(32,258,258,4096,de)],a.deflateInit=function(y,$){return Oe(y,$,b,15,8,0)},a.deflateInit2=Oe,a.deflateReset=Be,a.deflateResetKeep=ke,a.deflateSetHeader=function(y,$){return y&&y.state?y.state.wrap!==2?m:(y.state.gzhead=$,d):m},a.deflate=function(y,$){var q,C,S,B;if(!y||!y.state||5<$||$<0)return y?Q(y,m):m;if(C=y.state,!y.output||!y.input&&y.avail_in!==0||C.status===666&&$!==p)return Q(y,y.avail_out===0?-5:m);if(C.strm=y,q=C.last_flush,C.last_flush=$,C.status===x)if(C.wrap===2)y.adler=0,oe(C,31),oe(C,139),oe(C,8),C.gzhead?(oe(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),oe(C,255&C.gzhead.time),oe(C,C.gzhead.time>>8&255),oe(C,C.gzhead.time>>16&255),oe(C,C.gzhead.time>>24&255),oe(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),oe(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(oe(C,255&C.gzhead.extra.length),oe(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(y.adler=f(y.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(oe(C,0),oe(C,0),oe(C,0),oe(C,0),oe(C,0),oe(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),oe(C,3),C.status=F);else{var G=b+(C.w_bits-8<<4)<<8;G|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(G|=32),G+=31-G%31,C.status=F,te(C,G),C.strstart!==0&&(te(C,y.adler>>>16),te(C,65535&y.adler)),y.adler=1}if(C.status===69)if(C.gzhead.extra){for(S=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>S&&(y.adler=f(y.adler,C.pending_buf,C.pending-S,S)),O(y),S=C.pending,C.pending!==C.pending_buf_size));)oe(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>S&&(y.adler=f(y.adler,C.pending_buf,C.pending-S,S)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(y.adler=f(y.adler,C.pending_buf,C.pending-S,S)),O(y),S=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,oe(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>S&&(y.adler=f(y.adler,C.pending_buf,C.pending-S,S)),B===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(y.adler=f(y.adler,C.pending_buf,C.pending-S,S)),O(y),S=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,oe(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>S&&(y.adler=f(y.adler,C.pending_buf,C.pending-S,S)),B===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&O(y),C.pending+2<=C.pending_buf_size&&(oe(C,255&y.adler),oe(C,y.adler>>8&255),y.adler=0,C.status=F)):C.status=F),C.pending!==0){if(O(y),y.avail_out===0)return C.last_flush=-1,d}else if(y.avail_in===0&&j($)<=j(q)&&$!==p)return Q(y,-5);if(C.status===666&&y.avail_in!==0)return Q(y,-5);if(y.avail_in!==0||C.lookahead!==0||$!==u&&C.status!==666){var K=C.strategy===2?(function(N,Y){for(var ie;;){if(N.lookahead===0&&(pe(N),N.lookahead===0)){if(Y===u)return k;break}if(N.match_length=0,ie=r._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,ie&&(L(N,!1),N.strm.avail_out===0))return k}return N.insert=0,Y===p?(L(N,!0),N.strm.avail_out===0?V:R):N.last_lit&&(L(N,!1),N.strm.avail_out===0)?k:H})(C,$):C.strategy===3?(function(N,Y){for(var ie,ee,le,ye,me=N.window;;){if(N.lookahead<=z){if(pe(N),N.lookahead<=z&&Y===u)return k;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=E&&0<N.strstart&&(ee=me[le=N.strstart-1])===me[++le]&&ee===me[++le]&&ee===me[++le]){ye=N.strstart+z;do;while(ee===me[++le]&&ee===me[++le]&&ee===me[++le]&&ee===me[++le]&&ee===me[++le]&&ee===me[++le]&&ee===me[++le]&&ee===me[++le]&&le<ye);N.match_length=z-(ye-le),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=E?(ie=r._tr_tally(N,1,N.match_length-E),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(ie=r._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),ie&&(L(N,!1),N.strm.avail_out===0))return k}return N.insert=0,Y===p?(L(N,!0),N.strm.avail_out===0?V:R):N.last_lit&&(L(N,!1),N.strm.avail_out===0)?k:H})(C,$):n[C.level].func(C,$);if(K!==V&&K!==R||(C.status=666),K===k||K===V)return y.avail_out===0&&(C.last_flush=-1),d;if(K===H&&($===1?r._tr_align(C):$!==5&&(r._tr_stored_block(C,0,0,!1),$===3&&(ae(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),O(y),y.avail_out===0))return C.last_flush=-1,d}return $!==p?d:C.wrap<=0?1:(C.wrap===2?(oe(C,255&y.adler),oe(C,y.adler>>8&255),oe(C,y.adler>>16&255),oe(C,y.adler>>24&255),oe(C,255&y.total_in),oe(C,y.total_in>>8&255),oe(C,y.total_in>>16&255),oe(C,y.total_in>>24&255)):(te(C,y.adler>>>16),te(C,65535&y.adler)),O(y),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?d:1)},a.deflateEnd=function(y){var $;return y&&y.state?($=y.state.status)!==x&&$!==69&&$!==73&&$!==91&&$!==103&&$!==F&&$!==666?Q(y,m):(y.state=null,$===F?Q(y,-3):d):m},a.deflateSetDictionary=function(y,$){var q,C,S,B,G,K,N,Y,ie=$.length;if(!y||!y.state||(B=(q=y.state).wrap)===2||B===1&&q.status!==x||q.lookahead)return m;for(B===1&&(y.adler=l(y.adler,$,ie,0)),q.wrap=0,ie>=q.w_size&&(B===0&&(ae(q.head),q.strstart=0,q.block_start=0,q.insert=0),Y=new s.Buf8(q.w_size),s.arraySet(Y,$,ie-q.w_size,q.w_size,0),$=Y,ie=q.w_size),G=y.avail_in,K=y.next_in,N=y.input,y.avail_in=ie,y.next_in=0,y.input=$,pe(q);q.lookahead>=E;){for(C=q.strstart,S=q.lookahead-(E-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[C+E-1])&q.hash_mask,q.prev[C&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=C,C++,--S;);q.strstart=C,q.lookahead=E-1,pe(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=E-1,q.match_available=0,y.next_in=K,y.input=N,y.avail_in=G,q.wrap=B,d},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,o,a){o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,o,a){o.exports=function(n,s){var r,l,f,c,u,p,d,m,h,g,v,b,w,T,_,M,A,P,E,z,W,x,F,k,H;r=n.state,l=n.next_in,k=n.input,f=l+(n.avail_in-5),c=n.next_out,H=n.output,u=c-(s-n.avail_out),p=c+(n.avail_out-257),d=r.dmax,m=r.wsize,h=r.whave,g=r.wnext,v=r.window,b=r.hold,w=r.bits,T=r.lencode,_=r.distcode,M=(1<<r.lenbits)-1,A=(1<<r.distbits)-1;e:do{w<15&&(b+=k[l++]<<w,w+=8,b+=k[l++]<<w,w+=8),P=T[b&M];t:for(;;){if(b>>>=E=P>>>24,w-=E,(E=P>>>16&255)===0)H[c++]=65535&P;else{if(!(16&E)){if((64&E)==0){P=T[(65535&P)+(b&(1<<E)-1)];continue t}if(32&E){r.mode=12;break e}n.msg="invalid literal/length code",r.mode=30;break e}z=65535&P,(E&=15)&&(w<E&&(b+=k[l++]<<w,w+=8),z+=b&(1<<E)-1,b>>>=E,w-=E),w<15&&(b+=k[l++]<<w,w+=8,b+=k[l++]<<w,w+=8),P=_[b&A];i:for(;;){if(b>>>=E=P>>>24,w-=E,!(16&(E=P>>>16&255))){if((64&E)==0){P=_[(65535&P)+(b&(1<<E)-1)];continue i}n.msg="invalid distance code",r.mode=30;break e}if(W=65535&P,w<(E&=15)&&(b+=k[l++]<<w,(w+=8)<E&&(b+=k[l++]<<w,w+=8)),d<(W+=b&(1<<E)-1)){n.msg="invalid distance too far back",r.mode=30;break e}if(b>>>=E,w-=E,(E=c-u)<W){if(h<(E=W-E)&&r.sane){n.msg="invalid distance too far back",r.mode=30;break e}if(F=v,(x=0)===g){if(x+=m-E,E<z){for(z-=E;H[c++]=v[x++],--E;);x=c-W,F=H}}else if(g<E){if(x+=m+g-E,(E-=g)<z){for(z-=E;H[c++]=v[x++],--E;);if(x=0,g<z){for(z-=E=g;H[c++]=v[x++],--E;);x=c-W,F=H}}}else if(x+=g-E,E<z){for(z-=E;H[c++]=v[x++],--E;);x=c-W,F=H}for(;2<z;)H[c++]=F[x++],H[c++]=F[x++],H[c++]=F[x++],z-=3;z&&(H[c++]=F[x++],1<z&&(H[c++]=F[x++]))}else{for(x=c-W;H[c++]=H[x++],H[c++]=H[x++],H[c++]=H[x++],2<(z-=3););z&&(H[c++]=H[x++],1<z&&(H[c++]=H[x++]))}break}}break}}while(l<f&&c<p);l-=z=w>>3,b&=(1<<(w-=z<<3))-1,n.next_in=l,n.next_out=c,n.avail_in=l<f?f-l+5:5-(l-f),n.avail_out=c<p?p-c+257:257-(c-p),r.hold=b,r.bits=w}},{}],49:[function(i,o,a){var n=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),f=i("./inftrees"),c=1,u=2,p=0,d=-2,m=1,h=852,g=592;function v(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function w(x){var F;return x&&x.state?(F=x.state,x.total_in=x.total_out=F.total=0,x.msg="",F.wrap&&(x.adler=1&F.wrap),F.mode=m,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new n.Buf32(h),F.distcode=F.distdyn=new n.Buf32(g),F.sane=1,F.back=-1,p):d}function T(x){var F;return x&&x.state?((F=x.state).wsize=0,F.whave=0,F.wnext=0,w(x)):d}function _(x,F){var k,H;return x&&x.state?(H=x.state,F<0?(k=0,F=-F):(k=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?d:(H.window!==null&&H.wbits!==F&&(H.window=null),H.wrap=k,H.wbits=F,T(x))):d}function M(x,F){var k,H;return x?(H=new b,(x.state=H).window=null,(k=_(x,F))!==p&&(x.state=null),k):d}var A,P,E=!0;function z(x){if(E){var F;for(A=new n.Buf32(512),P=new n.Buf32(32),F=0;F<144;)x.lens[F++]=8;for(;F<256;)x.lens[F++]=9;for(;F<280;)x.lens[F++]=7;for(;F<288;)x.lens[F++]=8;for(f(c,x.lens,0,288,A,0,x.work,{bits:9}),F=0;F<32;)x.lens[F++]=5;f(u,x.lens,0,32,P,0,x.work,{bits:5}),E=!1}x.lencode=A,x.lenbits=9,x.distcode=P,x.distbits=5}function W(x,F,k,H){var V,R=x.state;return R.window===null&&(R.wsize=1<<R.wbits,R.wnext=0,R.whave=0,R.window=new n.Buf8(R.wsize)),H>=R.wsize?(n.arraySet(R.window,F,k-R.wsize,R.wsize,0),R.wnext=0,R.whave=R.wsize):(H<(V=R.wsize-R.wnext)&&(V=H),n.arraySet(R.window,F,k-H,V,R.wnext),(H-=V)?(n.arraySet(R.window,F,k-H,H,0),R.wnext=H,R.whave=R.wsize):(R.wnext+=V,R.wnext===R.wsize&&(R.wnext=0),R.whave<R.wsize&&(R.whave+=V))),0}a.inflateReset=T,a.inflateReset2=_,a.inflateResetKeep=w,a.inflateInit=function(x){return M(x,15)},a.inflateInit2=M,a.inflate=function(x,F){var k,H,V,R,Q,j,ae,O,L,oe,te,Z,pe,we,de,ue,Ce,ke,Be,Oe,y,$,q,C,S=0,B=new n.Buf8(4),G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return d;(k=x.state).mode===12&&(k.mode=13),Q=x.next_out,V=x.output,ae=x.avail_out,R=x.next_in,H=x.input,j=x.avail_in,O=k.hold,L=k.bits,oe=j,te=ae,$=p;e:for(;;)switch(k.mode){case m:if(k.wrap===0){k.mode=13;break}for(;L<16;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(2&k.wrap&&O===35615){B[k.check=0]=255&O,B[1]=O>>>8&255,k.check=r(k.check,B,2,0),L=O=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&O)<<8)+(O>>8))%31){x.msg="incorrect header check",k.mode=30;break}if((15&O)!=8){x.msg="unknown compression method",k.mode=30;break}if(L-=4,y=8+(15&(O>>>=4)),k.wbits===0)k.wbits=y;else if(y>k.wbits){x.msg="invalid window size",k.mode=30;break}k.dmax=1<<y,x.adler=k.check=1,k.mode=512&O?10:12,L=O=0;break;case 2:for(;L<16;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(k.flags=O,(255&k.flags)!=8){x.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){x.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=O>>8&1),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,k.check=r(k.check,B,2,0)),L=O=0,k.mode=3;case 3:for(;L<32;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}k.head&&(k.head.time=O),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,B[2]=O>>>16&255,B[3]=O>>>24&255,k.check=r(k.check,B,4,0)),L=O=0,k.mode=4;case 4:for(;L<16;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}k.head&&(k.head.xflags=255&O,k.head.os=O>>8),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,k.check=r(k.check,B,2,0)),L=O=0,k.mode=5;case 5:if(1024&k.flags){for(;L<16;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}k.length=O,k.head&&(k.head.extra_len=O),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,k.check=r(k.check,B,2,0)),L=O=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(j<(Z=k.length)&&(Z=j),Z&&(k.head&&(y=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),n.arraySet(k.head.extra,H,R,Z,y)),512&k.flags&&(k.check=r(k.check,H,Z,R)),j-=Z,R+=Z,k.length-=Z),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(j===0)break e;for(Z=0;y=H[R+Z++],k.head&&y&&k.length<65536&&(k.head.name+=String.fromCharCode(y)),y&&Z<j;);if(512&k.flags&&(k.check=r(k.check,H,Z,R)),j-=Z,R+=Z,y)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(j===0)break e;for(Z=0;y=H[R+Z++],k.head&&y&&k.length<65536&&(k.head.comment+=String.fromCharCode(y)),y&&Z<j;);if(512&k.flags&&(k.check=r(k.check,H,Z,R)),j-=Z,R+=Z,y)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;L<16;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(O!==(65535&k.check)){x.msg="header crc mismatch",k.mode=30;break}L=O=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),x.adler=k.check=0,k.mode=12;break;case 10:for(;L<32;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}x.adler=k.check=v(O),L=O=0,k.mode=11;case 11:if(k.havedict===0)return x.next_out=Q,x.avail_out=ae,x.next_in=R,x.avail_in=j,k.hold=O,k.bits=L,2;x.adler=k.check=1,k.mode=12;case 12:if(F===5||F===6)break e;case 13:if(k.last){O>>>=7&L,L-=7&L,k.mode=27;break}for(;L<3;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}switch(k.last=1&O,L-=1,3&(O>>>=1)){case 0:k.mode=14;break;case 1:if(z(k),k.mode=20,F!==6)break;O>>>=2,L-=2;break e;case 2:k.mode=17;break;case 3:x.msg="invalid block type",k.mode=30}O>>>=2,L-=2;break;case 14:for(O>>>=7&L,L-=7&L;L<32;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if((65535&O)!=(O>>>16^65535)){x.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&O,L=O=0,k.mode=15,F===6)break e;case 15:k.mode=16;case 16:if(Z=k.length){if(j<Z&&(Z=j),ae<Z&&(Z=ae),Z===0)break e;n.arraySet(V,H,R,Z,Q),j-=Z,R+=Z,ae-=Z,Q+=Z,k.length-=Z;break}k.mode=12;break;case 17:for(;L<14;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(k.nlen=257+(31&O),O>>>=5,L-=5,k.ndist=1+(31&O),O>>>=5,L-=5,k.ncode=4+(15&O),O>>>=4,L-=4,286<k.nlen||30<k.ndist){x.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;L<3;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}k.lens[G[k.have++]]=7&O,O>>>=3,L-=3}for(;k.have<19;)k.lens[G[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,q={bits:k.lenbits},$=f(0,k.lens,0,19,k.lencode,0,k.work,q),k.lenbits=q.bits,$){x.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;ue=(S=k.lencode[O&(1<<k.lenbits)-1])>>>16&255,Ce=65535&S,!((de=S>>>24)<=L);){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(Ce<16)O>>>=de,L-=de,k.lens[k.have++]=Ce;else{if(Ce===16){for(C=de+2;L<C;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(O>>>=de,L-=de,k.have===0){x.msg="invalid bit length repeat",k.mode=30;break}y=k.lens[k.have-1],Z=3+(3&O),O>>>=2,L-=2}else if(Ce===17){for(C=de+3;L<C;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}L-=de,y=0,Z=3+(7&(O>>>=de)),O>>>=3,L-=3}else{for(C=de+7;L<C;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}L-=de,y=0,Z=11+(127&(O>>>=de)),O>>>=7,L-=7}if(k.have+Z>k.nlen+k.ndist){x.msg="invalid bit length repeat",k.mode=30;break}for(;Z--;)k.lens[k.have++]=y}}if(k.mode===30)break;if(k.lens[256]===0){x.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,q={bits:k.lenbits},$=f(c,k.lens,0,k.nlen,k.lencode,0,k.work,q),k.lenbits=q.bits,$){x.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,q={bits:k.distbits},$=f(u,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,q),k.distbits=q.bits,$){x.msg="invalid distances set",k.mode=30;break}if(k.mode=20,F===6)break e;case 20:k.mode=21;case 21:if(6<=j&&258<=ae){x.next_out=Q,x.avail_out=ae,x.next_in=R,x.avail_in=j,k.hold=O,k.bits=L,l(x,te),Q=x.next_out,V=x.output,ae=x.avail_out,R=x.next_in,H=x.input,j=x.avail_in,O=k.hold,L=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;ue=(S=k.lencode[O&(1<<k.lenbits)-1])>>>16&255,Ce=65535&S,!((de=S>>>24)<=L);){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(ue&&(240&ue)==0){for(ke=de,Be=ue,Oe=Ce;ue=(S=k.lencode[Oe+((O&(1<<ke+Be)-1)>>ke)])>>>16&255,Ce=65535&S,!(ke+(de=S>>>24)<=L);){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}O>>>=ke,L-=ke,k.back+=ke}if(O>>>=de,L-=de,k.back+=de,k.length=Ce,ue===0){k.mode=26;break}if(32&ue){k.back=-1,k.mode=12;break}if(64&ue){x.msg="invalid literal/length code",k.mode=30;break}k.extra=15&ue,k.mode=22;case 22:if(k.extra){for(C=k.extra;L<C;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}k.length+=O&(1<<k.extra)-1,O>>>=k.extra,L-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;ue=(S=k.distcode[O&(1<<k.distbits)-1])>>>16&255,Ce=65535&S,!((de=S>>>24)<=L);){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if((240&ue)==0){for(ke=de,Be=ue,Oe=Ce;ue=(S=k.distcode[Oe+((O&(1<<ke+Be)-1)>>ke)])>>>16&255,Ce=65535&S,!(ke+(de=S>>>24)<=L);){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}O>>>=ke,L-=ke,k.back+=ke}if(O>>>=de,L-=de,k.back+=de,64&ue){x.msg="invalid distance code",k.mode=30;break}k.offset=Ce,k.extra=15&ue,k.mode=24;case 24:if(k.extra){for(C=k.extra;L<C;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}k.offset+=O&(1<<k.extra)-1,O>>>=k.extra,L-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){x.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(ae===0)break e;if(Z=te-ae,k.offset>Z){if((Z=k.offset-Z)>k.whave&&k.sane){x.msg="invalid distance too far back",k.mode=30;break}pe=Z>k.wnext?(Z-=k.wnext,k.wsize-Z):k.wnext-Z,Z>k.length&&(Z=k.length),we=k.window}else we=V,pe=Q-k.offset,Z=k.length;for(ae<Z&&(Z=ae),ae-=Z,k.length-=Z;V[Q++]=we[pe++],--Z;);k.length===0&&(k.mode=21);break;case 26:if(ae===0)break e;V[Q++]=k.length,ae--,k.mode=21;break;case 27:if(k.wrap){for(;L<32;){if(j===0)break e;j--,O|=H[R++]<<L,L+=8}if(te-=ae,x.total_out+=te,k.total+=te,te&&(x.adler=k.check=k.flags?r(k.check,V,te,Q-te):s(k.check,V,te,Q-te)),te=ae,(k.flags?O:v(O))!==k.check){x.msg="incorrect data check",k.mode=30;break}L=O=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;L<32;){if(j===0)break e;j--,O+=H[R++]<<L,L+=8}if(O!==(4294967295&k.total)){x.msg="incorrect length check",k.mode=30;break}L=O=0}k.mode=29;case 29:$=1;break e;case 30:$=-3;break e;case 31:return-4;case 32:default:return d}return x.next_out=Q,x.avail_out=ae,x.next_in=R,x.avail_in=j,k.hold=O,k.bits=L,(k.wsize||te!==x.avail_out&&k.mode<30&&(k.mode<27||F!==4))&&W(x,x.output,x.next_out,te-x.avail_out)?(k.mode=31,-4):(oe-=x.avail_in,te-=x.avail_out,x.total_in+=oe,x.total_out+=te,k.total+=te,k.wrap&&te&&(x.adler=k.check=k.flags?r(k.check,V,te,x.next_out-te):s(k.check,V,te,x.next_out-te)),x.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(oe==0&&te===0||F===4)&&$===p&&($=-5),$)},a.inflateEnd=function(x){if(!x||!x.state)return d;var F=x.state;return F.window&&(F.window=null),x.state=null,p},a.inflateGetHeader=function(x,F){var k;return x&&x.state?(2&(k=x.state).wrap)==0?d:((k.head=F).done=!1,p):d},a.inflateSetDictionary=function(x,F){var k,H=F.length;return x&&x.state?(k=x.state).wrap!==0&&k.mode!==11?d:k.mode===11&&s(1,F,H,0)!==k.check?-3:W(x,F,H,H)?(k.mode=31,-4):(k.havedict=1,p):d},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,o,a){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(c,u,p,d,m,h,g,v){var b,w,T,_,M,A,P,E,z,W=v.bits,x=0,F=0,k=0,H=0,V=0,R=0,Q=0,j=0,ae=0,O=0,L=null,oe=0,te=new n.Buf16(16),Z=new n.Buf16(16),pe=null,we=0;for(x=0;x<=15;x++)te[x]=0;for(F=0;F<d;F++)te[u[p+F]]++;for(V=W,H=15;1<=H&&te[H]===0;H--);if(H<V&&(V=H),H===0)return m[h++]=20971520,m[h++]=20971520,v.bits=1,0;for(k=1;k<H&&te[k]===0;k++);for(V<k&&(V=k),x=j=1;x<=15;x++)if(j<<=1,(j-=te[x])<0)return-1;if(0<j&&(c===0||H!==1))return-1;for(Z[1]=0,x=1;x<15;x++)Z[x+1]=Z[x]+te[x];for(F=0;F<d;F++)u[p+F]!==0&&(g[Z[u[p+F]]++]=F);if(A=c===0?(L=pe=g,19):c===1?(L=s,oe-=257,pe=r,we-=257,256):(L=l,pe=f,-1),x=k,M=h,Q=F=O=0,T=-1,_=(ae=1<<(R=V))-1,c===1&&852<ae||c===2&&592<ae)return 1;for(;;){for(P=x-Q,z=g[F]<A?(E=0,g[F]):g[F]>A?(E=pe[we+g[F]],L[oe+g[F]]):(E=96,0),b=1<<x-Q,k=w=1<<R;m[M+(O>>Q)+(w-=b)]=P<<24|E<<16|z|0,w!==0;);for(b=1<<x-1;O&b;)b>>=1;if(b!==0?(O&=b-1,O+=b):O=0,F++,--te[x]==0){if(x===H)break;x=u[p+g[F]]}if(V<x&&(O&_)!==T){for(Q===0&&(Q=V),M+=k,j=1<<(R=x-Q);R+Q<H&&!((j-=te[R+Q])<=0);)R++,j<<=1;if(ae+=1<<R,c===1&&852<ae||c===2&&592<ae)return 1;m[T=O&_]=V<<24|R<<16|M-h|0}}return O!==0&&(m[M+O]=x-Q<<24|64<<16|0),v.bits=V,0}},{"../utils/common":41}],51:[function(i,o,a){o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,o,a){var n=i("../utils/common"),s=0,r=1;function l(S){for(var B=S.length;0<=--B;)S[B]=0}var f=0,c=29,u=256,p=u+1+c,d=30,m=19,h=2*p+1,g=15,v=16,b=7,w=256,T=16,_=17,M=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],P=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],W=new Array(2*(p+2));l(W);var x=new Array(2*d);l(x);var F=new Array(512);l(F);var k=new Array(256);l(k);var H=new Array(c);l(H);var V,R,Q,j=new Array(d);function ae(S,B,G,K,N){this.static_tree=S,this.extra_bits=B,this.extra_base=G,this.elems=K,this.max_length=N,this.has_stree=S&&S.length}function O(S,B){this.dyn_tree=S,this.max_code=0,this.stat_desc=B}function L(S){return S<256?F[S]:F[256+(S>>>7)]}function oe(S,B){S.pending_buf[S.pending++]=255&B,S.pending_buf[S.pending++]=B>>>8&255}function te(S,B,G){S.bi_valid>v-G?(S.bi_buf|=B<<S.bi_valid&65535,oe(S,S.bi_buf),S.bi_buf=B>>v-S.bi_valid,S.bi_valid+=G-v):(S.bi_buf|=B<<S.bi_valid&65535,S.bi_valid+=G)}function Z(S,B,G){te(S,G[2*B],G[2*B+1])}function pe(S,B){for(var G=0;G|=1&S,S>>>=1,G<<=1,0<--B;);return G>>>1}function we(S,B,G){var K,N,Y=new Array(g+1),ie=0;for(K=1;K<=g;K++)Y[K]=ie=ie+G[K-1]<<1;for(N=0;N<=B;N++){var ee=S[2*N+1];ee!==0&&(S[2*N]=pe(Y[ee]++,ee))}}function de(S){var B;for(B=0;B<p;B++)S.dyn_ltree[2*B]=0;for(B=0;B<d;B++)S.dyn_dtree[2*B]=0;for(B=0;B<m;B++)S.bl_tree[2*B]=0;S.dyn_ltree[2*w]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function ue(S){8<S.bi_valid?oe(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function Ce(S,B,G,K){var N=2*B,Y=2*G;return S[N]<S[Y]||S[N]===S[Y]&&K[B]<=K[G]}function ke(S,B,G){for(var K=S.heap[G],N=G<<1;N<=S.heap_len&&(N<S.heap_len&&Ce(B,S.heap[N+1],S.heap[N],S.depth)&&N++,!Ce(B,K,S.heap[N],S.depth));)S.heap[G]=S.heap[N],G=N,N<<=1;S.heap[G]=K}function Be(S,B,G){var K,N,Y,ie,ee=0;if(S.last_lit!==0)for(;K=S.pending_buf[S.d_buf+2*ee]<<8|S.pending_buf[S.d_buf+2*ee+1],N=S.pending_buf[S.l_buf+ee],ee++,K===0?Z(S,N,B):(Z(S,(Y=k[N])+u+1,B),(ie=A[Y])!==0&&te(S,N-=H[Y],ie),Z(S,Y=L(--K),G),(ie=P[Y])!==0&&te(S,K-=j[Y],ie)),ee<S.last_lit;);Z(S,w,B)}function Oe(S,B){var G,K,N,Y=B.dyn_tree,ie=B.stat_desc.static_tree,ee=B.stat_desc.has_stree,le=B.stat_desc.elems,ye=-1;for(S.heap_len=0,S.heap_max=h,G=0;G<le;G++)Y[2*G]!==0?(S.heap[++S.heap_len]=ye=G,S.depth[G]=0):Y[2*G+1]=0;for(;S.heap_len<2;)Y[2*(N=S.heap[++S.heap_len]=ye<2?++ye:0)]=1,S.depth[N]=0,S.opt_len--,ee&&(S.static_len-=ie[2*N+1]);for(B.max_code=ye,G=S.heap_len>>1;1<=G;G--)ke(S,Y,G);for(N=le;G=S.heap[1],S.heap[1]=S.heap[S.heap_len--],ke(S,Y,1),K=S.heap[1],S.heap[--S.heap_max]=G,S.heap[--S.heap_max]=K,Y[2*N]=Y[2*G]+Y[2*K],S.depth[N]=(S.depth[G]>=S.depth[K]?S.depth[G]:S.depth[K])+1,Y[2*G+1]=Y[2*K+1]=N,S.heap[1]=N++,ke(S,Y,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(me,We){var Xi,lt,Zi,Ee,Za,mn,bt=We.dyn_tree,tl=We.max_code,$g=We.stat_desc.static_tree,Wg=We.stat_desc.has_stree,jg=We.stat_desc.extra_bits,il=We.stat_desc.extra_base,Qi=We.stat_desc.max_length,Qa=0;for(Ee=0;Ee<=g;Ee++)me.bl_count[Ee]=0;for(bt[2*me.heap[me.heap_max]+1]=0,Xi=me.heap_max+1;Xi<h;Xi++)Qi<(Ee=bt[2*bt[2*(lt=me.heap[Xi])+1]+1]+1)&&(Ee=Qi,Qa++),bt[2*lt+1]=Ee,tl<lt||(me.bl_count[Ee]++,Za=0,il<=lt&&(Za=jg[lt-il]),mn=bt[2*lt],me.opt_len+=mn*(Ee+Za),Wg&&(me.static_len+=mn*($g[2*lt+1]+Za)));if(Qa!==0){do{for(Ee=Qi-1;me.bl_count[Ee]===0;)Ee--;me.bl_count[Ee]--,me.bl_count[Ee+1]+=2,me.bl_count[Qi]--,Qa-=2}while(0<Qa);for(Ee=Qi;Ee!==0;Ee--)for(lt=me.bl_count[Ee];lt!==0;)tl<(Zi=me.heap[--Xi])||(bt[2*Zi+1]!==Ee&&(me.opt_len+=(Ee-bt[2*Zi+1])*bt[2*Zi],bt[2*Zi+1]=Ee),lt--)}})(S,B),we(Y,ye,S.bl_count)}function y(S,B,G){var K,N,Y=-1,ie=B[1],ee=0,le=7,ye=4;for(ie===0&&(le=138,ye=3),B[2*(G+1)+1]=65535,K=0;K<=G;K++)N=ie,ie=B[2*(K+1)+1],++ee<le&&N===ie||(ee<ye?S.bl_tree[2*N]+=ee:N!==0?(N!==Y&&S.bl_tree[2*N]++,S.bl_tree[2*T]++):ee<=10?S.bl_tree[2*_]++:S.bl_tree[2*M]++,Y=N,ye=(ee=0)===ie?(le=138,3):N===ie?(le=6,3):(le=7,4))}function $(S,B,G){var K,N,Y=-1,ie=B[1],ee=0,le=7,ye=4;for(ie===0&&(le=138,ye=3),K=0;K<=G;K++)if(N=ie,ie=B[2*(K+1)+1],!(++ee<le&&N===ie)){if(ee<ye)for(;Z(S,N,S.bl_tree),--ee!=0;);else N!==0?(N!==Y&&(Z(S,N,S.bl_tree),ee--),Z(S,T,S.bl_tree),te(S,ee-3,2)):ee<=10?(Z(S,_,S.bl_tree),te(S,ee-3,3)):(Z(S,M,S.bl_tree),te(S,ee-11,7));Y=N,ye=(ee=0)===ie?(le=138,3):N===ie?(le=6,3):(le=7,4)}}l(j);var q=!1;function C(S,B,G,K){te(S,(f<<1)+(K?1:0),3),(function(N,Y,ie,ee){ue(N),oe(N,ie),oe(N,~ie),n.arraySet(N.pending_buf,N.window,Y,ie,N.pending),N.pending+=ie})(S,B,G)}a._tr_init=function(S){q||((function(){var B,G,K,N,Y,ie=new Array(g+1);for(N=K=0;N<c-1;N++)for(H[N]=K,B=0;B<1<<A[N];B++)k[K++]=N;for(k[K-1]=N,N=Y=0;N<16;N++)for(j[N]=Y,B=0;B<1<<P[N];B++)F[Y++]=N;for(Y>>=7;N<d;N++)for(j[N]=Y<<7,B=0;B<1<<P[N]-7;B++)F[256+Y++]=N;for(G=0;G<=g;G++)ie[G]=0;for(B=0;B<=143;)W[2*B+1]=8,B++,ie[8]++;for(;B<=255;)W[2*B+1]=9,B++,ie[9]++;for(;B<=279;)W[2*B+1]=7,B++,ie[7]++;for(;B<=287;)W[2*B+1]=8,B++,ie[8]++;for(we(W,p+1,ie),B=0;B<d;B++)x[2*B+1]=5,x[2*B]=pe(B,5);V=new ae(W,A,u+1,p,g),R=new ae(x,P,0,d,g),Q=new ae(new Array(0),E,0,m,b)})(),q=!0),S.l_desc=new O(S.dyn_ltree,V),S.d_desc=new O(S.dyn_dtree,R),S.bl_desc=new O(S.bl_tree,Q),S.bi_buf=0,S.bi_valid=0,de(S)},a._tr_stored_block=C,a._tr_flush_block=function(S,B,G,K){var N,Y,ie=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(ee){var le,ye=4093624447;for(le=0;le<=31;le++,ye>>>=1)if(1&ye&&ee.dyn_ltree[2*le]!==0)return s;if(ee.dyn_ltree[18]!==0||ee.dyn_ltree[20]!==0||ee.dyn_ltree[26]!==0)return r;for(le=32;le<u;le++)if(ee.dyn_ltree[2*le]!==0)return r;return s})(S)),Oe(S,S.l_desc),Oe(S,S.d_desc),ie=(function(ee){var le;for(y(ee,ee.dyn_ltree,ee.l_desc.max_code),y(ee,ee.dyn_dtree,ee.d_desc.max_code),Oe(ee,ee.bl_desc),le=m-1;3<=le&&ee.bl_tree[2*z[le]+1]===0;le--);return ee.opt_len+=3*(le+1)+5+5+4,le})(S),N=S.opt_len+3+7>>>3,(Y=S.static_len+3+7>>>3)<=N&&(N=Y)):N=Y=G+5,G+4<=N&&B!==-1?C(S,B,G,K):S.strategy===4||Y===N?(te(S,2+(K?1:0),3),Be(S,W,x)):(te(S,4+(K?1:0),3),(function(ee,le,ye,me){var We;for(te(ee,le-257,5),te(ee,ye-1,5),te(ee,me-4,4),We=0;We<me;We++)te(ee,ee.bl_tree[2*z[We]+1],3);$(ee,ee.dyn_ltree,le-1),$(ee,ee.dyn_dtree,ye-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,ie+1),Be(S,S.dyn_ltree,S.dyn_dtree)),de(S),K&&ue(S)},a._tr_tally=function(S,B,G){return S.pending_buf[S.d_buf+2*S.last_lit]=B>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&B,S.pending_buf[S.l_buf+S.last_lit]=255&G,S.last_lit++,B===0?S.dyn_ltree[2*G]++:(S.matches++,B--,S.dyn_ltree[2*(k[G]+u+1)]++,S.dyn_dtree[2*L(B)]++),S.last_lit===S.lit_bufsize-1},a._tr_align=function(S){te(S,2,3),Z(S,w,W),(function(B){B.bi_valid===16?(oe(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(i,o,a){o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,o,a){(function(n){(function(s,r){if(!s.setImmediate){var l,f,c,u,p=1,d={},m=!1,h=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){b(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(u="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",w,!1):s.attachEvent("onmessage",w),function(T){s.postMessage(u+T,"*")}):s.MessageChannel?((c=new MessageChannel).port1.onmessage=function(T){b(T.data)},function(T){c.port2.postMessage(T)}):h&&"onreadystatechange"in h.createElement("script")?(f=h.documentElement,function(T){var _=h.createElement("script");_.onreadystatechange=function(){b(T),_.onreadystatechange=null,f.removeChild(_),_=null},f.appendChild(_)}):function(T){setTimeout(b,0,T)},g.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),M=0;M<_.length;M++)_[M]=arguments[M+1];var A={callback:T,args:_};return d[p]=A,l(p),p++},g.clearImmediate=v}function v(T){delete d[T]}function b(T){if(m)setTimeout(b,0,T);else{var _=d[T];if(_){m=!0;try{(function(M){var A=M.callback,P=M.args;switch(P.length){case 0:A();break;case 1:A(P[0]);break;case 2:A(P[0],P[1]);break;case 3:A(P[0],P[1],P[2]);break;default:A.apply(r,P)}})(_)}finally{v(T),m=!1}}}}function w(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(u)===0&&b(+T.data.slice(u.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Mo)),Mo.exports}var yh=bh();const wh=vh(yh);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function D(t){if(!t)throw new Error("Assertion failed.")}const kh=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ve=t=>t&&t[t.length-1],Ct=t=>t>=0&&t<2**32,J=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},ht=t=>{const e=J(t);return(e&1)===0?-(e>>1):e+1>>1},qe=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),tt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),it=new TextEncoder,Fa={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Ra={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},za={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Th=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Oa=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class ms{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(a=>{let n=!1;e=()=>{n||(a(),this.pending--,n=!0)}}),o=this.currentPromise;return this.currentPromise=i,this.pending++,await o,e}}const ps=(t,e,i)=>{let o=0,a=t.length-1,n=-1;for(;o<=a;){const s=o+(a-o+1)/2|0;i(t[s])<=e?(n=s,o=s+1):a=s-1}return n},gs=()=>{let t,e;return{promise:new Promise((o,a)=>{t=o,e=a}),resolve:t,reject:e}},qt=t=>{throw new Error(`Unexpected value: ${t}`)},_h=(t,e,i)=>{const o=t.getUint8(e),a=t.getUint8(e+1),n=t.getUint8(e+2);return o<<16|a<<8|n},Ao=(t,e,i,o)=>{i=i>>>0,i=i&16777215,o?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},Sh=(t,e,i,o)=>{i=Ie(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),Ao(t,e,i,o)},Ie=(t,e,i)=>Math.max(e,Math.min(i,t)),xh=(t,e,i)=>t+(e-t)*i,Ch="und",vs=(t,e)=>Math.round(t/e)*e,bs=(t,e)=>Math.round(t*e)/e,ys=(t,e)=>Math.floor(t*e)/e,Eh=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},Ph=/^[a-z]{3}$/,Mh=t=>Ph.test(t),Et=1e6*(1+Number.EPSILON),Ah=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let o=0,a=1,n=1,s=0,r=t;for(;;){const l=Math.floor(r),f=l*n+o,c=l*s+a;if(c>e)return{num:i*n,den:s};if(o=n,a=s,n=f,s=c,r=1/(r-l),!isFinite(r))break}return{num:i*n,den:s}};class ws{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Io=null;const Ih=()=>Io!==null?Io:Io=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let Bo=null;const ks=()=>Bo!==null?Bo:Bo=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let Fo=null;const Bh=()=>Fo!==null?Fo:Fo=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let Ro=null;const Fh=()=>{if(Ro!==null)return Ro;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?Ro=Number(t[1]):null},Ts=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Rh=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},zh=(t,e)=>{let i=-1,o=1/0;for(let a=0;a<t.length;a++){const n=e(t[a]);n<o&&(o=n,i=a)}return i},_s=t=>{D(Number.isInteger(t.num)),D(Number.isInteger(t.den)),D(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const a=e%i;e=i,i=a}const o=e||1;return{num:t.num/o,den:t.den/o}},zo=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Oh=t=>new Promise(e=>setTimeout(e,t)),Ss=t=>Array.isArray(t)?t:[t];class Oo{constructor(){this._listeners=new Map}on(e,i,o){this._listeners.has(e)||this._listeners.set(e,new Set);const a={fn:i,once:o?.once??!1};return this._listeners.get(e).add(a),()=>{this._listeners.get(e)?.delete(a)}}_emit(...e){const[i,o]=e,a=this._listeners.get(i);if(a)for(const n of a){try{n.fn(o)}catch(s){console.error(s)}n.once&&a.delete(n)}}}const Hh=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var at;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(at||(at={}));class _e{constructor(){}static get level(){return _e._level}static set level(e){if(e!==at.Silent&&e!==at.Errors&&e!==at.Warnings&&e!==at.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");_e._level=e}static get _emitter(){return _e._emitterInstance??=new Oo}static on(e,i,o){return _e._emitter.on(e,i,o)}static _error(...e){_e._emitter._emit("error",e),_e._level>=at.Errors&&console.error(...e)}static _warn(...e){_e._emitter._emit("warn",e),_e._level>=at.Warnings&&console.warn(...e)}static _info(...e){_e._emitter._emit("info",e),_e._level>=at.Info&&console.info(...e)}}_e._level=at.Info,_e._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class xs{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Lh{constructor(e,i,o,a){if(this.data=e,this.mimeType=i,this.name=o,this.description=a,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(o!==void 0&&typeof o!="string")throw new TypeError("name, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("description, when provided, must be a string.")}}const Nh=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof xs)&&!(e instanceof Lh)&&!Hh(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Uh=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Me{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,o=7-(this.pos&7),a=(i&1<<o)>>o;return this.pos++,a}readBits(e){if(e===1)return this.readBit();let i=0;for(let o=0;o<e;o++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const o=this.pos+e;for(let a=this.pos;a<o;a++){const n=Math.floor(a/8);let s=this.bytes[n];const r=7-(a&7);s&=~(1<<r),s|=(i&1<<o-a-1)>>o-a-1<<r,this.bytes[n]=s}this.pos=o}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Me(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ha=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Ho=[-1,1,2,3,4,5,6,8],qh=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Me(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const o=e.readBits(4);let a=null;o===15?a=e.readBits(24):o<Ha.length&&(a=Ha[o]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=Ho[n]),{objectType:i,frequencyIndex:o,sampleRate:a,channelConfiguration:n,numberOfChannels:s}},Cs=t=>{let e=Ha.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const o=Ho.indexOf(t.numberOfChannels);if(o===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let a=13;t.objectType>=32&&(a+=6),e===15&&(a+=24);const n=Math.ceil(a/8),s=new Uint8Array(n),r=new Me(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,o),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const mt=["avc","hevc","vp9","av1","vp8","prores"],Ge=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Lo=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Dt=[...Lo,...Ge],Ri=["webvtt"],La=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Es=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Ps=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Ms=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],zi=["ap4x","ap4h","apch","apcn","apcs","apco"],No=["dtsc","dtsh","dtsl","dtse"],Dh=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],$h=(t,e,i,o,a)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=La.find(p=>s<=p.maxMacroblocks&&o<=p.maxBitrate)??Ve(La),l=r?r.level:0,f="64".padStart(2,"0"),c="00",u=l.toString(16).padStart(2,"0");return`avc1.${f}${c}${u}`}else if(t==="hevc"){const l=e*i,f=Es.find(u=>l<=u.maxPictureSize&&o<=u.maxBitrate)??Ve(Es);return`hev1.1.6.${f.tier}${f.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(Ps.find(f=>s<=f.maxPictureSize&&o<=f.maxBitrate)??Ve(Ps)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=Ms.find(c=>s<=c.maxPictureSize&&o<=c.maxBitrate)??Ve(Ms);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Dh.filter(c=>c.alpha===a);let l=r[0].fourCc,f=1/0;for(const{fourCc:c,bitrate:u}of r){const p=Math.abs(u*s-o);p<f&&(f=p,l=c)}return l}else qt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Wh=t=>{const e=t.split("."),a=(1<<7)+1,n=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(n<<5)+r,f=s.slice(-1)==="H"?1:0,u=Number(e[3])===8?0:1,p=0,d=e[4]?Number(e[4]):0,m=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,v=(f<<7)+(u<<6)+(p<<5)+(d<<4)+(m<<3)+(h<<2)+g;return[a,l,v,0]},jh=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Ge.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},As=/^pcm-([usf])(\d+)(be)?$/,$t=t=>{if(D(Ge.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=As.exec(t);D(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const o=Number(e[2])/8,a=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:o,littleEndian:a,silentValue:n}},Na=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":zi.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":No.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":As.test(t)?t:t==="webvtt"?"webvtt":null,Vh=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Gh=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Kh=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...zi],Xh=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Zh=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Qh=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Yh=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Is=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Kh.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Oa(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const o=Object.keys(Fa);if(i.primaries!=null&&!o.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${o.join(", ")}.`);const a=Object.keys(Ra);if(i.transfer!=null&&!a.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(za);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Xh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Zh.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Qh.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Yh.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(zi.some(i=>t.decoderConfig.codec.startsWith(i))&&!zi.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${zi.join(", ")}.`);if(e!==null&&Na(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Jh=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Bs=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Jh.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Oa(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!No.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${No.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Ge.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Ge.join(", ")}).`);if(e!==null&&Na(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},em=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const tm=[48e3,44100,32e3],im=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var pt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(pt||(pt={}));var De;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(De||(De={}));const Oi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const o=t.indexOf(0,e);if(o===-1||o>=t.length-2)break;e=o;let a=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?a=4:t[e+1]===0&&t[e+2]===1&&(a=3),a===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+a,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Fs=function*(t,e){let i=0;const o=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let a;e===1?a=o.getUint8(i):e===2?a=o.getUint16(i,!1):e===3?a=_h(o,i):(D(e===4),a=o.getUint32(i,!1)),i+=e,yield{offset:i,length:a},i+=a}},am=(t,e)=>{if(e.description){const a=(qe(e.description)[4]&3)+1;return Fs(t,a)}else return Oi(t)},Rs=t=>t&31,Ua=t=>{const e=[],i=t.length;for(let o=0;o<i;o++)o+2<i&&t[o]===0&&t[o+1]===0&&t[o+2]===3?(e.push(0,0),o+=2):e.push(t[o]);return new Uint8Array(e)},om=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),o=new Uint8Array(i);let a=0;for(const n of t){const s=new DataView(o.buffer,o.byteOffset,o.byteLength);switch(e){case 1:s.setUint8(a,n.byteLength);break;case 2:s.setUint16(a,n.byteLength,!1);break;case 3:Ao(s,a,n.byteLength,!1);break;case 4:s.setUint32(a,n.byteLength,!1);break}a+=e,o.set(n,a),a+=n.byteLength}return o},nm=t=>{try{const e=[],i=[],o=[];for(const r of Oi(t)){const l=t.subarray(r.offset,r.offset+r.length),f=Rs(l[0]);f===pt.SPS?e.push(l):f===pt.PPS?i.push(l):f===pt.SPS_EXT&&o.push(l)}if(e.length===0||i.length===0)return null;const a=e[0],n=rm(a);D(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?o:null}}catch(e){return _e._error("Error building AVC Decoder Configuration Record:",e),null}},sm=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const o=i.byteLength;e.push(o>>8),e.push(o&255);for(let a=0;a<o;a++)e.push(i[a])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const o=i.byteLength;e.push(o>>8),e.push(o&255);for(let a=0;a<o;a++)e.push(i[a])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){D(t.chromaFormat!==null),D(t.bitDepthLumaMinus8!==null),D(t.bitDepthChromaMinus8!==null),D(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const o=i.byteLength;e.push(o>>8),e.push(o&255);for(let a=0;a<o;a++)e.push(i[a])}}return new Uint8Array(e)},zs={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},rm=t=>{try{const e=new Me(Ua(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const o=e.readAlignedByte(),a=e.readAlignedByte(),n=e.readAlignedByte();J(e);let s=1,r=0,l=0,f=0;if((o===100||o===110||o===122||o===244||o===44||o===83||o===86||o===118||o===128)&&(s=J(e),s===3&&(f=e.readBits(1)),r=J(e),l=J(e),e.skipBits(1),e.readBits(1))){for(let x=0;x<(s!==3?8:12);x++)if(e.readBits(1)){const k=x<6?16:64;let H=8,V=8;for(let R=0;R<k;R++){if(V!==0){const Q=ht(e);V=(H+Q+256)%256}H=V===0?H:V}}}J(e);const c=J(e);if(c===0)J(e);else if(c===1){e.skipBits(1),ht(e),ht(e);const W=J(e);for(let x=0;x<W;x++)ht(e)}J(e),e.skipBits(1);const u=J(e),p=J(e),d=16*(u+1),m=16*(p+1);let h=d,g=m;const v=e.readBits(1);if(v||e.skipBits(1),e.skipBits(1),e.readBits(1)){const W=J(e),x=J(e),F=J(e),k=J(e);let H,V;if((f===0?s:0)===0)H=1,V=2-v;else{const Q=s===3?1:2,j=s===1?2:1;H=Q,V=j*(2-v)}h-=H*(W+x),g-=V*(F+k)}let w=2,T=2,_=2,M=0,A={num:1,den:1},P=null,E=null;if(e.readBits(1)){if(e.readBits(1)){const j=e.readBits(8);if(j===255)A={num:e.readBits(16),den:e.readBits(16)};else{const ae=zs[j];ae&&(A=ae)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),M=e.readBits(1),e.readBits(1)&&(w=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(J(e),J(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const V=e.readBits(1);V&&Os(e);const R=e.readBits(1);R&&Os(e),(V||R)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),J(e),J(e),J(e),J(e),P=J(e),E=J(e))}if(P===null){D(E===null);const W=a&16;if((o===44||o===86||o===100||o===110||o===122||o===244)&&W)P=0,E=0;else{const x=u+1,F=p+1,k=(2-v)*F,H=La.find(R=>R.level>=n)??Ve(La),V=Math.min(Math.floor(H.maxDpbMbs/(x*k)),16);P=V,E=V}}return D(E!==null),{profileIdc:o,constraintFlags:a,levelIdc:n,frameMbsOnlyFlag:v,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:d,codedHeight:m,displayWidth:h,displayHeight:g,pixelAspectRatio:A,colourPrimaries:w,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:M,numReorderFrames:P,maxDecFrameBuffering:E}}catch(e){return _e._error("Error parsing AVC SPS:",e),null}},Os=t=>{const e=J(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)J(t),J(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},lm=(t,e)=>{if(e.description){const a=(qe(e.description)[21]&3)+1;return Fs(t,a)}else return Oi(t)},Uo=t=>t>>1&63,cm=t=>{try{const e=new Me(Ua(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),o=e.readBits(1),{general_profile_space:a,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:f}=dm(e,i);J(e);const c=J(e);let u=0;c===3&&(u=e.readBits(1));const p=J(e),d=J(e);let m=p,h=d;if(e.readBits(1)){const x=J(e),F=J(e),k=J(e),H=J(e);let V=1,R=1;const Q=u===0?c:0;Q===1?(V=2,R=2):Q===2&&(V=2,R=1),m-=(x+F)*V,h-=(k+H)*R}const g=J(e),v=J(e);J(e);const w=e.readBits(1)?0:i;let T=0;for(let x=w;x<=i;x++)J(e),T=J(e),J(e);J(e),J(e),J(e),J(e),J(e),J(e),e.readBits(1)&&e.readBits(1)&&um(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),J(e),J(e),e.skipBits(1));const _=J(e);if(hm(e,_),e.readBits(1)){const x=J(e);for(let F=0;F<x;F++)J(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let M=2,A=2,P=2,E=0,z=0,W={num:1,den:1};if(e.readBits(1)){const x=pm(e,i);W=x.pixelAspectRatio,M=x.colourPrimaries,A=x.transferCharacteristics,P=x.matrixCoefficients,E=x.fullRangeFlag,z=x.minSpatialSegmentationIdc}return{displayWidth:m,displayHeight:h,pixelAspectRatio:W,colourPrimaries:M,transferCharacteristics:A,matrixCoefficients:P,fullRangeFlag:E,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:o,generalProfileSpace:a,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:f,chromaFormatIdc:c,bitDepthLumaMinus8:g,bitDepthChromaMinus8:v,minSpatialSegmentationIdc:z}}catch(e){return _e._error("Error parsing HEVC SPS:",e),null}},fm=t=>{try{const e=[],i=[],o=[],a=[];for(const f of Oi(t)){const c=t.subarray(f.offset,f.offset+f.length),u=Uo(c[0]);u===De.VPS_NUT?e.push(c):u===De.SPS_NUT?i.push(c):u===De.PPS_NUT?o.push(c):(u===De.PREFIX_SEI_NUT||u===De.SUFFIX_SEI_NUT)&&a.push(c)}if(i.length===0||o.length===0)return null;const n=cm(i[0]);if(!n)return null;let s=0;if(o.length>0){const f=o[0],c=new Me(Ua(f));c.skipBits(16),J(c),J(c),c.skipBits(1),c.skipBits(1),c.skipBits(3),c.skipBits(1),c.skipBits(1),J(c),J(c),ht(c),c.skipBits(1),c.skipBits(1),c.readBits(1)&&J(c),ht(c),ht(c),c.skipBits(1),c.skipBits(1),c.skipBits(1),c.skipBits(1);const u=c.readBits(1),p=c.readBits(1);!u&&!p?s=0:u&&!p?s=2:!u&&p?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:De.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:De.SPS_NUT,nalUnits:i}]:[],...o.length?[{arrayCompleteness:1,nalUnitType:De.PPS_NUT,nalUnits:o}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Uo(a[0][0]),nalUnits:a}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return _e._error("Error building HEVC Decoder Configuration Record:",e),null}},dm=(t,e)=>{const i=t.readBits(2),o=t.readBits(1),a=t.readBits(5);let n=0;for(let c=0;c<32;c++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let c=0;c<6;c++)s[c]=t.readBits(8);const r=t.readBits(8),l=[],f=[];for(let c=0;c<e;c++)l.push(t.readBits(1)),f.push(t.readBits(1));if(e>0)for(let c=e;c<8;c++)t.skipBits(2);for(let c=0;c<e;c++)l[c]&&t.skipBits(88),f[c]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:o,general_profile_idc:a,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:r}},um=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))J(t);else{const a=Math.min(64,1<<4+(e<<1));e>1&&ht(t);for(let n=0;n<a;n++)ht(t)}},hm=(t,e)=>{const i=[];for(let o=0;o<e;o++)i[o]=mm(t,o,e,i)},mm=(t,e,i,o)=>{let a=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const l=J(t);s=e-(l+1)}else s=e-1;t.readBits(1),J(t);const r=o[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);a=o[s]}else{const r=J(t),l=J(t);for(let f=0;f<r;f++)J(t),t.readBits(1);for(let f=0;f<l;f++)J(t),t.readBits(1);a=r+l}return a},pm=(t,e)=>{let i=2,o=2,a=2,n=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const f=zs[l];f&&(r=f)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),o=t.readBits(8),a=t.readBits(8))),t.readBits(1)&&(J(t),J(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(J(t),J(t),J(t),J(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&J(t),t.readBits(1)&&gm(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=J(t),J(t),J(t),J(t),J(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:o,matrixCoefficients:a,fullRangeFlag:n,minSpatialSegmentationIdc:s}},gm=(t,e,i)=>{let o=!1,a=!1,n=!1;o=t.readBits(1)===1,a=t.readBits(1)===1,(o||a)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let f=!1;l?J(t):f=t.readBits(1)===1;let c=1;f||(c=J(t)+1),o&&Hs(t,c,n),a&&Hs(t,c,n)}},Hs=(t,e,i)=>{for(let o=0;o<e;o++)J(t),J(t),i&&(J(t),J(t)),t.readBits(1)},vm=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const o of i.nalUnits){e.push(o.length>>8&255),e.push(o.length&255);for(let a=0;a<o.length;a++)e.push(o[a])}}return new Uint8Array(e)};var Ls;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Ls||(Ls={}));const bm=function*(t){const e=new Me(t),i=()=>{let o=0;for(let a=0;a<8;a++){const n=e.readAlignedByte();if(o|=(n&127)<<a*7,!(n&128))break;if(a===7&&n&128)return null}return o>=2**32-1?null:o};for(;e.getBitsLeft()>=8;){e.skipBits(1);const o=e.readBits(4),a=e.readBits(1),n=e.readBits(1);e.skipBits(1),a&&e.skipBits(8);let s;if(n){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);D(e.pos%8===0),yield{type:o,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},ym=t=>{const e=tt(t),i=e.getUint8(9),o=e.getUint16(10,!0),a=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:o,inputSampleRate:a,outputGain:n,channelMappingFamily:s,channelMappingTable:r}},wm=(t,e,i)=>{switch(t){case"avc":{for(const o of am(i,e)){const a=i[o.offset],n=Rs(a);if(n>=pt.NON_IDR_SLICE&&n<=pt.SLICE_DPC)return"delta";if(n===pt.IDR)return"key";if(n===pt.SEI&&(!Bh()||Fh()>=144)){const s=i.subarray(o.offset,o.offset+o.length),r=Ua(s);let l=1;do{let f=0;for(;;){const p=r[l++];if(p===void 0||(f+=p,p<255))break}let c=0;for(;;){const p=r[l++];if(p===void 0||(c+=p,p<255))break}if(f===6){const p=new Me(r);p.pos=8*l;const d=J(p),m=p.readBits(1);if(d===0&&m===1)return"key"}l+=c}while(l<r.length-1)}}return"delta"}case"hevc":{for(const o of lm(i,e)){const a=Uo(i[o.offset]);if(a<De.BLA_W_LP)return"delta";if(a<=De.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const o=new Me(i);if(o.readBits(2)!==2)return null;const a=o.readBits(1);return(o.readBits(1)<<1)+a===3&&o.skipBits(1),o.readBits(1)?null:o.readBits(1)===0?"key":"delta"}case"av1":{let o=!1;for(const{type:a,data:n}of bm(i))if(a===1){const s=new Me(n);s.skipBits(4),o=!!s.readBits(1)}else if(a===3||a===6||a===7){if(o)return"key";const s=new Me(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:qt(t),D(!1)}};var Ns;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Ns||(Ns={}));const km=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Me(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const o=e.readBits(6),a=e.readBits(5);if(a>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(o/2);return{fscod:i,bsid:a,bsmod:n,acmod:s,lfeon:r,bitRateCode:l}},Tm=[1,2,3,6],_m=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Me(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const o=e.readBits(11),a=e.readBits(2);let n=0,s;a===3?(n=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),f=e.readBits(5);if(f<11||f>16)return null;const c=Tm[s];let u;return a<3?u=tm[a]/1e3:u=im[n]/1e3,{dataRate:Math.round((o+1)*u/(c*16)),substreams:[{fscod:a,fscod2:n,bsid:f,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},Sm=1683496997,xm=18,Cm=10,Us=32,Em=20,Pm=8,Mm=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Am=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Im=[16,16,20,20,0,24,24,0],qs=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Bm=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Fm=8,Rm=[32e3,44100,48e3,0],zm=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Om=[512,1024,2048,4096],Hm=t=>{const e=Lm(t),i=tt(t);let o=e?Math.ceil(e.frameSize/4)*4:0,a=null;for(;o+4<=t.length&&i.getUint32(o)===Sm;){const s=Nm(t.subarray(o));if(!s)break;a??=s,o+=s.frameSize}if(e)return{frameSize:a?o:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:a!==null};if(!a?.asset)return null;const{asset:n}=a;return{frameSize:o,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Lm=t=>{if(t.length<xm||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Me(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Us-1)return null;const i=e.readBits(1),o=e.readBits(7)+1;if(o%Pm!==0)return null;const a=e.readBits(14)+1;if(a<96)return null;const n=e.readBits(6);if(n>=qs.length)return null;const s=Mm[e.readBits(4)];if(s===0)return null;const r=Am[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const f=Im[e.readBits(3)];if(f===0)return null;const c=l!==0;return{frameSize:a,sampleRate:s,numberOfChannels:qs[n]+(c?1:0),sampleCount:o*Us,channelLayout:Bm[n]|(c?Fm:0),amode:n,lfePresent:c,bitRate:r,pcmResolution:f}},Nm=t=>{if(t.length<Cm||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Me(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),o=e.readBits(1),a=8+4*o,n=16+4*o;e.skipBits(a);const s=e.readBits(n)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=Rm[e.readBits(2)],f=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const c=e.readBits(3)+1,u=e.readBits(3)+1,p=[];for(let v=0;v<c;v++)p.push(e.readBits(i+1));for(const v of p)e.skipBits(8*Eh(v));if(e.readBits(1)){e.skipBits(2);const v=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*v)}for(let v=0;v<u;v++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const d=e.readBits(5)+1,m=zm[e.readBits(4)],h=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const v=e.readBits(2)+1<<2;g=e.readBits(v)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:m,numberOfChannels:h,sampleCount:Math.round(f*m/l),channelLayout:g,pcmResolution:d}}},Um=t=>{const e=new Uint8Array(Em),i=tt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const o=t.core&&!t.hasExtensions?1:0,a=new Me(e);return a.seekToByte(13),a.writeBits(2,Math.max(Om.indexOf(t.sampleCount),0)),a.writeBits(5,o),a.writeBits(1,t.core?.lfePresent?1:0),a.writeBits(6,t.core?.amode??0),a.writeBits(14,t.core?t.core.frameSize-1:0),a.writeBits(1,0),a.writeBits(3,0),a.writeBits(16,t.channelLayout),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ds=new Uint8Array(0);class ot{constructor(e,i,o,a,n=-1,s,r){if(this.data=e,this.type=i,this.timestamp=o,this.duration=a,this.sequenceNumber=n,e===Ds&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(o))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(a)||a<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Ds}get microsecondTimestamp(){return Math.trunc(Et*this.timestamp)}get microsecondDuration(){return Math.trunc(Et*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const o=new Uint8Array(e.byteLength);return e.copyTo(o),new ot(o,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new ot(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const qm=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const o=[...new Set(t.codecStrings)];i+=`; codecs="${o.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const qo=8,$s=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Dm=7,$m=9,Ws=t=>{const e=t.filePos,i=hp(t,9),o=new Me(i);if(o.readBits(12)!==4095||(o.skipBits(1),o.readBits(2)!==0))return null;const s=o.readBits(1),r=o.readBits(2)+1,l=o.readBits(4);if(l===15)return null;o.skipBits(1);const f=o.readBits(3);if(f===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");o.skipBits(1),o.skipBits(1),o.skipBits(1),o.skipBits(1);const c=o.readBits(13);o.skipBits(11);const u=o.readBits(2)+1;if(u!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let p=null;return s===1?t.filePos-=2:p=o.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:f,frameLength:c,numberOfAacFrames:u,crcCheck:p,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Wm=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],i&&(a=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");a&&(o=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:o,async:i})}else i&&t.stack.push({async:!0});return e},jm=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var o,a=0;function n(){for(;o=e.stack.pop();)try{if(!o.async&&a===1)return a=0,e.stack.push(o),Promise.resolve().then(n);if(o.dispose){var s=o.dispose.call(o.value);if(o.async)return a|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else a|=1}catch(r){i(r)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var o=new Error(i);return o.name="SuppressedError",o.error=t,o.suppressed=e,o});Rh();let js=-1/0,Vs=-1/0,Hi=null;typeof FinalizationRegistry<"u"&&(Hi=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-js>=1e3&&(_e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),js=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Vs>=1e3&&(_e._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Vs=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Wt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Do=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Vm=new Set(Do);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Et*this.timestamp)}get microsecondDuration(){return Math.trunc(Et*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Vm.has(i.format))throw new TypeError("init.format must be one of: "+Do.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&zo(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const o=i.layout??Xm(i.format,i.codedWidth,i.codedHeight);let a=i.colorSpace??null;a===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?a={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:a={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?qe(e):qe(e).slice(),this._layout=o,this.colorSpace=new $o(a)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&zo(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new $o(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&zo(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Et),duration:Math.trunc((i.duration??0)*Et)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let o=0,a=0;if("naturalWidth"in e?(o=e.naturalWidth,a=e.naturalHeight):"videoWidth"in e?(o=e.videoWidth,a=e.videoHeight):"width"in e&&(o=Number(e.width),a=Number(e.height)),!o||!a)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:o,height:a},s=new OffscreenCanvas(n.width,n.height),r=s.getContext("2d",{alpha:ks(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new $o({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Wt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Do.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=_s({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Hi?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return D(this._data!==null),this._data instanceof Wt?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Ni(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(D(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Hi?.unregister(this),this._data instanceof Wt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Ni(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Zs(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Ni(this._data)?this._data.allocationSize(e):Qs(this,e).allocationSize}async copyTo(e,i={}){if(!Oa(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Zs(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(D(this._data!==null),Ni(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Wt){const f={stack:[],error:void 0,hasError:!1};try{const c=Wm(f,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(c instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(c.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${c.format}' instead.`);return await c.copyTo(e,i)}catch(c){f.error=c,f.hasError=!0}finally{jm(f)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const f=this.toVideoFrame(),c=await f.copyTo(e,i);return f.close(),c}const o=Qs(this,i);D(this.format);const a=qe(e);if(a.byteLength<o.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${o.allocationSize}, Available: ${a.byteLength}`);const n=qa(this.format);let s;if(this._data instanceof Wt){let f=this._data.getDataPlanes();if(f instanceof Promise&&(f=await f),!Array.isArray(f)||f.some(c=>!(c.data instanceof Uint8Array)||!Number.isInteger(c.stride)||c.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=f}else if(this._data instanceof Uint8Array)D(this._layout),D(this._layout.length===n.length),s=this._layout.map((f,c)=>{const u=Math.ceil(this.codedHeight/n[c].heightDivisor);return{data:this._data.subarray(f.offset,f.offset+f.stride*u),stride:f.stride}});else{const c=this._data.getContext("2d");D(c);const u=c.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:qe(u.data),stride:4*this.codedWidth}]}const r=[],l=n.length;for(let f=0;f<l;f++){const c=o.computedLayouts[f],u=s[f].stride,p=s[f].data;let d=c.sourceTop*u;d+=c.sourceLeftBytes;let m=c.destinationOffset;const h=c.sourceWidthBytes,g={offset:m,stride:c.destinationStride};for(let v=0;v<c.sourceHeight;v++){if(d+h>p.byteLength)throw new Error("Source buffer OOB read.");if(m+h>a.byteLength)throw new Error("Destination buffer OOB write.");const b=p.subarray(d,d+h);a.set(b,m),d+=u,m+=c.destinationStride}r.push(g)}if(i.format!==void 0){const f=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),c=this.format.includes("X")&&i.format.includes("A");if(f||c)for(let u=0;u<o.allocationSize;u+=4){if(f){const p=a[u],d=a[u+2];a[u]=d,a[u+2]=p}c&&(a[u+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof Wt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),o=new Uint8Array(i);let a=0;const n=[];for(const s of e)o.set(s.data,a),n.push(a),a+=s.data.byteLength;return new VideoFrame(o,{format:this.format,layout:e.map((s,r)=>({offset:n[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Ni(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(D(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,o,a,n,s,r,l,f){let c=0,u=0,p=this.displayWidth,d=this.displayHeight,m=0,h=0,g=this.displayWidth,v=this.displayHeight;if(s!==void 0?(c=i,u=o,p=a,d=n,m=s,h=r,l!==void 0?(g=l,v=f):(g=p,v=d)):(m=i,h=o,a!==void 0&&(g=a,v=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(c))throw new TypeError("sx must be a number.");if(!Number.isFinite(u))throw new TypeError("sy must be a number.");if(!Number.isFinite(p)||p<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(d)||d<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(m))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:c,sy:u,sWidth:p,sHeight:d}=this._rotateSourceRegion(c,u,p,d,this.rotation));const b=this.toCanvasImageSource();e.save();const w=m+g/2,T=h+v/2;e.translate(w,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:g/v;e.scale(1/_,_),e.drawImage(b,c,u,p,d,-g/2,-v/2,g,v),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Wo(i.crop,"options.");const o=e.canvas.width,a=e.canvas.height,n=i.rotation??this.rotation,[s,r]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=Xs(l,s,r));let f,c,u,p;const{sx:d,sy:m,sWidth:h,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,n);if(i.fit==="fill")f=0,c=0,u=o,p=a;else{const[b,w]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(o/b,a/w):Math.max(o/b,a/w);u=b*T,p=w*T,f=(o-u)/2,c=(a-p)/2}e.save();const v=n%180===0?1:u/p;e.translate(o/2,a/2),e.rotate(n*Math.PI/180),e.scale(1/v,v),e.translate(-o/2,-a/2),e.drawImage(this.toCanvasImageSource(),d,m,h,g,f,c,u,p),e.restore()}_rotateSourceRegion(e,i,o,a,n){return n===90?[e,i,o,a]=[i,this.squarePixelHeight-e-o,a,o]:n===180?[e,i]=[this.squarePixelWidth-e-o,this.squarePixelHeight-i-a]:n===270&&([e,i,o,a]=[this.squarePixelWidth-i-a,e,a,o]),{sx:e,sy:i,sWidth:o,sHeight:a}}_drawWithFitAndMipmapping(e,i,o){const a=e.width,n=e.height,[s,r]=o.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=o.crop?o.crop.width:s,f=o.crop?o.crop.height:r;let c=0;2*a<l&&2*n<f&&(c=Math.floor(Math.log2(Math.min(l/a,f/n))));const u=a*2**c,p=n*2**c,{canvas:d,context:m,isNew:h}=c>0?Ks(u,p):{canvas:e,context:i,isNew:o.targetIsFresh};m.imageSmoothingQuality="high",o.fillBlack?(m.fillStyle="black",m.fillRect(0,0,u,p)):h||m.clearRect(0,0,u,p),this.drawWithFit(m,{fit:o.fit,rotation:o.rotation,crop:o.crop}),m.globalCompositeOperation="copy";for(let g=c;g>1;g--){const v=a*2**g,b=n*2**g;m.drawImage(d,0,0,v,b,0,0,v/2,b/2)}m.globalCompositeOperation="source-over",c>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(d,0,0,2*a,2*n,0,0,a,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(D(this._data!==null),this._data instanceof Wt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Wo(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=kh(this.rotation+(e.rotate??0)),[o,a]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=Xs(n,o,a));const s=n?n.width:o,r=n?n.height:a,l=s/r;let f,c;e.width!==void 0&&e.height===void 0?(f=e.width,c=f/l):e.width===void 0&&e.height!==void 0?(c=e.height,f=c*l):e.width!==void 0&&e.height!==void 0?(f=e.width,c=e.height):(f=s,c=r),f=vs(f,e.roundDimensionsTo??1),c=vs(c,e.roundDimensionsTo??1);const u={width:f,height:c,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:o,height:a},alpha:e.alpha??"keep"};for(const h of Gm){let g=h(this,u);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:p,context:d,isNew:m}=Ks(u.width,u.height);return this._drawWithFitAndMipmapping(p,d,{fit:u.fit,rotation:u.rotation,crop:u.crop,targetIsFresh:m,fillBlack:u.alpha==="discard"}),new Re(p,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Gm=[],Km=3,Li=[];let Gs=0;const Ks=(t,e)=>{for(const a of Li)if(a.canvas.width===t&&a.canvas.height===e)return a.age=Gs++,{canvas:a.canvas,context:a.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const o=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!o)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Li.length>=Km&&Li.splice(zh(Li,a=>a.age),1),Li.push({canvas:i,context:o,age:Gs++}),{canvas:i,context:o,isNew:!0}};class $o{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Fa);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const o=Object.keys(Ra);if(e.transfer!=null&&!o.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${o.join(", ")}.`);const a=Object.keys(za);if(e.matrix!=null&&!a.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${a.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Ni=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Xs=(t,e,i)=>{const o=Math.min(t.left,e),a=Math.min(t.top,i),n=Math.min(t.width,e-o),s=Math.min(t.height,i-a);return D(n>=0),D(s>=0),{left:o,top:a,width:n,height:s}},Wo=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Zs=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},Xm=(t,e,i)=>{const o=qa(t),a=[];let n=0;for(const s of o){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),f=r*s.sampleBytes,c=f*l;a.push({offset:n,stride:f}),n+=c}return a},qa=t=>{const e=(i,o,a,n,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:o,widthDivisor:a,heightDivisor:n},{sampleBytes:o,widthDivisor:a,heightDivisor:n}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:qt(t),D(!1)}},Qs=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},o=e.rect,a=Zm(i,o,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Ym(a,s,n)},Zm=(t,e,i,o,a)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>o)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!Qm(a,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},Qm=(t,e)=>{if(t===null)return!0;const i=qa(t);for(let o=0;o<i.length;o++){const a=i[o],n=a.widthDivisor,s=a.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},Ym=(t,e,i)=>{const o=qa(e),a=o.length;if(i!==void 0&&i.length!==a)throw new TypeError(`Layout must have ${a} planes.`);let n=0;const s=[],r=[];for(let l=0;l<a;l++){const f=o[l],c=f.sampleBytes,u=f.widthDivisor,p=f.heightDivisor,d={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(d.sourceTop=Math.ceil(Math.trunc(t.y||0)/p),d.sourceHeight=Math.ceil(Math.trunc(t.height||0)/p),d.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/u)*c,d.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/u)*c,i!==void 0){const g=i[l];if(g.stride<d.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);d.destinationOffset=g.offset,d.destinationStride=g.stride}else d.destinationOffset=n,d.destinationStride=d.sourceWidthBytes;const h=d.destinationStride*d.sourceHeight+d.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(h),n=Math.max(n,h);for(let g=0;g<l;g++){const v=s[g];if(!(r[l]<=v.destinationOffset||r[g]<=d.destinationOffset))throw new TypeError("Planes overlap.")}s.push(d)}return{allocationSize:n,computedLayouts:s}},Da=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Ui{constructor(){this._referenceCount=0}}class Le{get microsecondTimestamp(){return Math.trunc(Et*this.timestamp)}get microsecondDuration(){return Math.trunc(Et*this.duration)}constructor(e){if(this._closed=!1,qi(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Ui){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Da.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Da.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(Pt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let o;if(e.data instanceof ArrayBuffer)o=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))o=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const a=this.numberOfFrames*this.numberOfChannels*Pt(this.format);if(o.byteLength<a)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=o}Hi?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Da.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,o=e.frameOffset??0;if(o>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const a=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-o;if(a>this.numberOfFrames-o)throw new RangeError("frameCount out of range");const n=Pt(i),s=jt(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?a:a*this.numberOfChannels)*n}copyTo(e,i){if(!Oa(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!Da.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:o,frameCount:a,frameOffset:n}=i;let{planeIndex:s}=i;const r=this.format,l=o??this.format;if(!l)throw new Error("Destination format not determined");const f=this.numberOfFrames,c=this.numberOfChannels,u=n??0;if(u>=f)throw new RangeError("frameOffset out of range");const p=a!==void 0?a:f-u;if(p>f-u)throw new RangeError("frameCount out of range");const d=Pt(l),m=jt(l);if(m&&s>=c)throw new RangeError("planeIndex out of range");if(!m&&s!==0)throw new RangeError("planeIndex out of range");const g=(m?p:p*c)*d;if(e.byteLength<g)throw new RangeError("Destination buffer is too small");const v=tt(e),b=Js(l);if(qi(this._data))Ih()&&c>2&&l!==r?ep(this._data,v,r,l,c,s,u,p):this._data.copyTo(e,{planeIndex:s,frameOffset:u,frameCount:p,format:l});else{const w=Ys(r),T=Pt(r),_=jt(r);let M;if(this._data instanceof Ui){const P=E=>{const z=this._data.getDataPlane(E);if(!(z instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const W=f*T*(_?1:c);if(z.byteLength!==W)throw new TypeError(`Data plane ${E} has invalid size. Expected exactly ${W} bytes, got ${z.byteLength} bytes.`);return z};if(_)if(m)M=P(s),s=0;else{M=new Uint8Array(f*T*c);for(let E=0;E<c;E++){const z=P(E);M.set(z,E*f*T)}}else M=P(0)}else M=this._data;const A=tt(M);for(let P=0;P<p;P++)if(m){const E=P*d;let z;_?z=(s*f+(P+u))*T:z=((P+u)*c+s)*T;const W=w(A,z);b(v,E,W)}else for(let E=0;E<c;E++){const W=(P*c+E)*d;let x;_?x=(E*f+(P+u))*T:x=((P+u)*c+E)*T;const F=w(A,x);b(v,W,F)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Ui){const e=new Le(this._data);return e.setTimestamp(this.timestamp),e}else if(qi(this._data)){const e=new Le(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new Le({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const o=i-e,a=Pt(this.format);let n;if(jt(this.format)){const s=o*a;if(n=new Uint8Array(s*this.numberOfChannels),o>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:o})}else n=new Uint8Array(o*this.numberOfChannels*a),o>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:o});return new Le({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Hi?.unregister(this),this._data instanceof Ui?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):qi(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Ui?this._createAudioDataFromData():qi(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(jt(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let o=0;o<this.numberOfChannels;o++)this.copyTo(new Uint8Array(i,o*e,e),{planeIndex:o,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let o=0;o<this.numberOfChannels;o++)this.copyTo(i,{planeIndex:o,format:"f32-planar"}),e.copyToChannel(i,o);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const o=48e3*5,a=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(o/a);let l=0,f=s;for(;f>0;){const c=Math.min(r,f),u=new Float32Array(a*c);for(let p=0;p<a;p++)e.copyFromChannel(u.subarray(p*c,(p+1)*c),p,l);yield new Le({format:"f32-planar",sampleRate:n,numberOfFrames:c,numberOfChannels:a,timestamp:i+l/n,data:u}),l+=c,f-=c}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const o=48e3*5,a=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(o/a);let l=0,f=s;const c=[];for(;f>0;){const u=Math.min(r,f),p=new Float32Array(a*u);for(let m=0;m<a;m++)e.copyFromChannel(p.subarray(m*u,(m+1)*u),m,l);const d=new Le({format:"f32-planar",sampleRate:n,numberOfFrames:u,numberOfChannels:a,timestamp:i+l/n,data:p});c.push(d),l+=u,f-=u}return c}}const Pt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},jt=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Ys=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},Js=t=>{switch(t){case"u8":case"u8-planar":return(e,i,o)=>e.setUint8(i,Ie((o+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,o)=>e.setInt16(i,Ie(Math.round(o*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,o)=>e.setInt32(i,Ie(Math.round(o*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,o)=>e.setFloat32(i,o,!0)}},qi=t=>typeof AudioData<"u"&&t instanceof AudioData,Jm=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},ep=(t,e,i,o,a,n,s,r)=>{const l=Ys(i),f=Js(o),c=Pt(i),u=Pt(o),p=jt(i);if(jt(o))if(p){const m=new ArrayBuffer(r*c),h=tt(m);t.copyTo(m,{planeIndex:n,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const v=g*c,b=g*u,w=l(h,v);f(e,b,w)}}else{const m=new ArrayBuffer(r*a*c),h=tt(m);t.copyTo(m,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const v=(g*a+n)*c,b=g*u,w=l(h,v);f(e,b,w)}}else if(p){const m=r*c,h=new ArrayBuffer(m),g=tt(h);for(let v=0;v<a;v++){t.copyTo(h,{planeIndex:v,frameOffset:s,frameCount:r,format:i});for(let b=0;b<r;b++){const w=b*c,T=(b*a+v)*u,_=l(g,w);f(e,T,_)}}}else{const m=new ArrayBuffer(r*a*c),h=tt(m);t.copyTo(m,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++)for(let v=0;v<a;v++){const b=g*a+v,w=b*c,T=b*u,_=l(h,w);f(e,T,_)}}},tp=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),o=new ArrayBuffer(i);return t.copyTo(o,{format:e,planeIndex:0}),new Le({data:o,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const er=new Map,tr=new Map,ip=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!mt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${mt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Wo(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");ir(t.codec,t)},ir=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Na(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},ar=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),o=(n,s,r)=>({codec:t.fullCodecString??$h(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Vh(t.codec)}),a=[];return i.quantizer!==null&&a.push({config:o(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&a.push({config:o(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),D(a.length>0),a},ap=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Dt.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Dt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Ge.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");or(t.codec,t)},or=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Na(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},nr=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??jh(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Gh(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in sr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?sr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,o,a){const n=op[e];let s=null,r=this._bitrateMode??a??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(D(this._quality!==void 0),s=Ie(Math.round(xh(n.worst,n.best,this._quality)),n.min,n.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let f=this._quality;f===void 0&&(D(s!==null&&n),f=Ie((s-n.worst)/(n.best-n.worst),0,1)),l=rr(e,i,o,jo(f))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,o){return this._bitrate!==void 0?this._bitrate:(D(this._quality!==void 0),rr(e,i,o,jo(this._quality)))}_toAudioBitrate(e){if(Ge.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=jo(this._quality),a={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!a)throw new Error(`Unhandled codec: ${e}`);let n=a*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r)),Math.round(n/1e3)*1e3}}const sr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},op={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},jo=t=>.3*Math.exp(2.5538*t),rr=(t,e,i,o)=>{const a=e*i,n=1920*1080,s=3e6,r=Math.pow(a/n,.95),l=s*r,f={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},u=l*f[t]*o;return Math.ceil(u/1e3)*1e3},lr=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};D(!1)},np=new ze("high"),sp=async(t,e={})=>{const{width:i=1280,height:o=720,quality:a,bitrate:n,...s}=e;if(!mt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(o)||o<=0)throw new TypeError("height must be a positive integer.");if(a!==void 0&&!(a instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(a!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");ir(t,s);const r=$a(a,n)??new ze("medium");let l;try{l=ar({codec:t,width:i,height:o,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const f=JSON.stringify(l),c=er.get(f);if(c)return c;const u=(async()=>{for(const{config:d}of l)if(cr.some(m=>m.supports(t,d)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||o%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:d,quantizer:m}of l){try{if(!(await VideoEncoder.isConfigSupported(d)).supported)continue}catch{continue}if(!ks()||await new Promise(async g=>{try{const v=new VideoEncoder({output:()=>{},error:()=>g(!1)});v.configure(d);const b=new Uint8Array(i*o*4),w=new VideoFrame(b,{format:"RGBA",codedWidth:i,codedHeight:o,timestamp:0});v.encode(w,m!==null?lr(t,m):void 0),w.close(),await v.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return er.set(f,u),u},rp=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:o=48e3,quality:a,bitrate:n,...s}=e;if(!Dt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(o)||o<=0)throw new TypeError("sampleRate must be a positive integer.");if(a!==void 0&&!(a instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(a!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");or(t,s);const r=$a(a,n)??new ze("medium"),l=nr({codec:t,numberOfChannels:i,sampleRate:o,quality:r,...s}),f=JSON.stringify(l),c=tr.get(f);if(c)return c;const u=(async()=>{if(fr.some(p=>p.supports(t,l))||Ge.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return tr.set(f,u),u},$a=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},lp=async(t,e)=>{for(const i of t)if(await sp(i,e))return i;return null},cp=async(t,e)=>{for(const i of t)if(await rp(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const cr=[],fr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const fp=t=>{let o=t,a=4096,n=0,s=12,r=0;for(o<0&&(o=-o,n=128),o+=33,o>8191&&(o=8191);(o&a)!==a&&s>=5;)a>>=1,s--;return r=o>>s-4&15,~(n|s-5<<4|r)&255},dp=t=>{let i=2048,o=0,a=11,n=0,s=t;for(s<0&&(s=-s,o=128),s>4095&&(s=4095);(s&i)!==i&&a>=5;)i>>=1,a--;return n=s>>(a===4?1:a-4)&15,(o|a-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Di{constructor(e,i,o,a,n){this.bytes=e,this.view=i,this.offset=o,this.start=a,this.end=n,this.bufferPos=a-o}static tempFromBytes(e){return new Di(e,tt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Di(this.bytes,this.view,this.offset,e,e+i)}}const up=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},hp=(t,e)=>{up(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class mp{constructor(e){this.mutex=new ms,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,o){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let a=this.trackTimestampInfo.get(e);if(a){if(o&&(a.maxTimestampBeforeLastKeyPacket=a.maxTimestamp),a.maxTimestampBeforeLastKeyPacket!==null&&i<a.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${a.maxTimestampBeforeLastKeyPacket}s.`);a.maxTimestamp=Math.max(a.maxTimestamp,i)}else{if(!o)throw new Error("First packet must be a key packet.");a={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,a)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const dr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,pp=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),o=Math.floor(t%(60*1e3)/1e3),a=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+o.toString().padStart(2,"0")+"."+a.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Wa{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const o=this.writer.getPos(),a=e.size??o-i;this.writer.seek(i),this.writeBoxHeader(e,a),this.writer.seek(o)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);D(i!==void 0);const o=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(o)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const o of e.children)o&&(i+=this.measureBox(o));return i}}}const fe=new Uint8Array(8),$e=new DataView(fe.buffer),Se=t=>[(t%256+256)%256],se=t=>($e.setUint16(0,t,!1),[fe[0],fe[1]]),Vo=t=>($e.setInt16(0,t,!1),[fe[0],fe[1]]),ur=t=>($e.setUint32(0,t,!1),[fe[1],fe[2],fe[3]]),X=t=>($e.setUint32(0,t,!1),[fe[0],fe[1],fe[2],fe[3]]),gt=t=>($e.setInt32(0,t,!1),[fe[0],fe[1],fe[2],fe[3]]),nt=t=>($e.setUint32(0,Math.floor(t/2**32),!1),$e.setUint32(4,t,!1),[fe[0],fe[1],fe[2],fe[3],fe[4],fe[5],fe[6],fe[7]]),gp=t=>($e.setInt32(0,Math.floor(t/2**32),!1),$e.setUint32(4,t,!1),[fe[0],fe[1],fe[2],fe[3],fe[4],fe[5],fe[6],fe[7]]),hr=t=>($e.setInt16(0,2**8*t,!1),[fe[0],fe[1]]),Ke=t=>($e.setInt32(0,2**16*t,!1),[fe[0],fe[1],fe[2],fe[3]]),Go=t=>($e.setInt32(0,2**30*t,!1),[fe[0],fe[1],fe[2],fe[3]]),Ko=(t,e)=>{const i=[];let o=t;do{let a=o&127;o>>=7,i.length>0&&(a|=128),i.push(a)}while(o>0||e);return i.reverse()},ge=(t,e=!1)=>{const i=Array(t.length).fill(null).map((o,a)=>t.charCodeAt(a));return e&&i.push(0),i},mr=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),o=Math.round(Math.sin(e));return[i,o,0,-o,i,0,0,0,1]},pr=mr(0),gr=t=>[Ke(t[0]),Ke(t[1]),Go(t[2]),Ke(t[3]),Ke(t[4]),Go(t[5]),Ke(t[6]),Ke(t[7]),Go(t[8])],ne=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),he=(t,e,i,o,a)=>ne(t,[Se(e),ur(i),o??[]],a),vp=t=>t.isQuickTime?ne("ftyp",[ge("qt  "),X(512),ge("qt  ")]):t.fragmented?t.cmaf?ne("ftyp",[ge("iso5"),X(512),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]):ne("ftyp",[ge("iso5"),X(512),ge("iso5"),ge("iso6"),ge("mp41")]):ne("ftyp",[ge("isom"),X(512),ge("isom"),t.holdsAvc?ge("avc1"):[],ge("mp41")]),vr=()=>ne("styp",[ge("iso5"),X(0),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]),br=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),he("sidx",1,0,[X(1),X(Ze),nt(Te(t.minWrittenTimestamp,Ze)),nt(0),se(0),se(1),X(e&2147483647),X(Te(i,Ze)),X(0)])},ja=t=>({type:"mdat",largeSize:t}),bp=t=>({type:"free",size:t}),$i=t=>ne("moov",void 0,[yp(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>wp(e,t.creationTime)),t.isFragmented?a2(t.trackDatas):null,g2(t)]),yp=(t,e)=>{const i=Math.max(0,...e.map(s=>Te(Va(s),Ze)+Te(s.startTimestampOffset??0,Ze))),o=Math.max(0,...e.map(s=>s.track.id))+1,a=!Ct(t)||!Ct(i),n=a?nt:X;return he("mvhd",+a,0,[n(t),n(t),X(Ze),n(i),Ke(1),hr(1),Array(10).fill(0),gr(pr),Array(24).fill(0),X(o)])},Va=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let o=0;o<t.samples.length;o++){const a=t.samples[o];a.timestamp<e&&(e=a.timestamp),a.timestamp+a.duration>i&&(i=a.timestamp+a.duration)}return e===1/0?0:i-e},wp=(t,e)=>{const i=E2(t),o=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ne("trak",void 0,[kp(t,e),o?Tp(t,t.startTimestampOffset):null,_p(t,e),i.name!==void 0?ne("udta",void 0,[ne("name",[...it.encode(i.name)])]):null])},kp=(t,e)=>{const i=Te(Va(t),Ze)+Te(t.startTimestampOffset??0,Ze),o=!Ct(e)||!Ct(i),a=o?nt:X;let n;if(t.type==="video"){const l=t.track.metadata.rotation;n=mr(l??0)}else n=pr;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:qt(t);return he("tkhd",+o,s,[a(e),a(e),X(t.track.id),X(0),a(i),Array(8).fill(0),se(0),se(r),hr(t.type==="audio"?1:0),se(0),gr(n),Ke(t.type==="video"?t.info.width:0),Ke(t.type==="video"?t.info.height:0)])},Tp=(t,e)=>{const i=Te(e,Ze),o=Te(Va(t),Ze),a=!Ct(i)||!Ct(o),n=a?nt:X,s=a?gp:gt;return ne("edts",void 0,[he("elst",a?1:0,0,[X(2),n(i),s(-1),Ke(1),n(o),s(0),Ke(1)])])},_p=(t,e)=>ne("mdia",void 0,[Sp(t,e),Xo(!0,xp[t.type],Cp[t.type]),Ep(t)]),Sp=(t,e)=>{const i=Te(Va(t),t.timescale),o=!Ct(e)||!Ct(i),a=o?nt:X;return he("mdhd",+o,0,[a(e),a(e),X(t.timescale),a(i),se(xr(t.track.metadata.languageCode??Ch)),se(0)])},xp={video:"vide",audio:"soun",subtitle:"text"},Cp={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Xo=(t,e,i,o="\0\0\0\0")=>he("hdlr",0,0,[t?ge("mhlr"):X(0),ge(e),ge(o),X(0),X(0),ge(i,!0)]),Ep=t=>ne("minf",void 0,[Pp[t.type](),Mp(),Bp(t)]),Pp={video:()=>he("vmhd",0,1,[se(0),se(0),se(0),se(0)]),audio:()=>he("smhd",0,0,[se(0),se(0)]),subtitle:()=>he("nmhd",0,0)},Mp=()=>ne("dinf",void 0,[Ap()]),Ap=()=>he("dref",0,0,[X(1)],[Ip()]),Ip=()=>he("url ",0,1),Bp=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ne("stbl",void 0,[Fp(t),Zp(t),e?t2(t):null,e?i2(t):null,Yp(t),Jp(t),e2(t),Qp(t)])},Fp=t=>{let e;if(t.type==="video")e=Rp(w2(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Sr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);D(i),e=Up(i,t)}else t.type==="subtitle"&&(e=Kp(_2[t.track.source._codec],t));return D(e),he("stsd",0,0,[X(1)],[e])},Rp=(t,e)=>ne(t,[Array(6).fill(0),se(1),se(0),se(0),Array(12).fill(0),se(e.info.width),se(e.info.height),X(4718592),X(4718592),X(0),se(1),Se(10),ge("Mediabunny"),Array(21).fill(0),se(e.info.hasAlphaChannel?32:24),Vo(65535)],[k2[e.track.source._codec]?.(e)??null,zp(e),Th(e.info.decoderConfig.colorSpace)?Op(e):null]),zp=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ne("pasp",[X(t.info.pixelAspectRatio.num),X(t.info.pixelAspectRatio.den)]),Op=t=>ne("colr",[ge(t.muxer.isQuickTime?"nclc":"nclx"),se(Fa[t.info.decoderConfig.colorSpace.primaries]),se(Ra[t.info.decoderConfig.colorSpace.transfer]),se(za[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Se((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Hp=t=>t.info.decoderConfig&&ne("avcC",[...qe(t.info.decoderConfig.description)]),Lp=t=>t.info.decoderConfig&&ne("hvcC",[...qe(t.info.decoderConfig.description)]),yr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),o=Number(i[1]),a=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(n<<4)+(s<<1)+r,f=i[5]?Number(i[5]):e.colorSpace?.primaries?Fa[e.colorSpace.primaries]:2,c=i[6]?Number(i[6]):e.colorSpace?.transfer?Ra[e.colorSpace.transfer]:2,u=i[7]?Number(i[7]):e.colorSpace?.matrix?za[e.colorSpace.matrix]:2;return he("vpcC",1,0,[Se(o),Se(a),Se(l),Se(f),Se(c),Se(u),se(0)])},Np=t=>ne("av1C",Wh(t.info.decoderConfig.codec)),Up=(t,e)=>{let i=0,o,a=16;const n=Ge.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:r}=$t(s);a=8*r,a>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)o=[Array(6).fill(0),se(1),se(i),se(0),X(0),se(e.info.numberOfChannels),se(a),se(0),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0)];else{const s=n?0:-2;o=[Array(6).fill(0),se(1),se(i),se(0),X(0),se(e.info.numberOfChannels),se(Math.min(a,16)),Vo(s),se(0),se(e.info.sampleRate<2**16?e.info.sampleRate:0),se(0),n?[X(1),X(a/8),X(e.info.numberOfChannels*a/8)]:[X(0),X(0),X(0)],X(2)]}return ne(t,o,[T2(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Zo=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Se(e),...Se(21),...ur(0),...X(0),...X(0)];if(t.info.decoderConfig.description){const o=qe(t.info.decoderConfig.description);i=[...i,...Se(5),...Ko(o.byteLength),...o]}return i=[...se(1),...Se(0),...Se(4),...Ko(i.length),...i,...Se(6),...Se(1),...Se(2)],i=[...Se(3),...Ko(i.length),...i],he("esds",0,0,i)},Mt=t=>ne("wave",void 0,[qp(t),Dp(t),ne("\0\0\0\0")]),qp=t=>ne("frma",[ge(Sr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Dp=t=>{const{littleEndian:e}=$t(t.track.source._codec);return ne("enda",[se(+e)])},$p=t=>{let e=t.info.numberOfChannels,i=3840,o=t.info.sampleRate,a=0,n=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){D(r.byteLength>=18);const l=qe(r),f=ym(l);e=f.outputChannelCount,i=f.preSkip,o=f.inputSampleRate,a=f.outputGain,n=f.channelMappingFamily,f.channelMappingTable&&(s=f.channelMappingTable)}return ne("dOps",[Se(0),Se(e),se(i),X(o),Vo(a),Se(n),...s])},Wp=t=>{const e=t.info.decoderConfig?.description;D(e);const i=qe(e);return he("dfLa",0,0,[...i.subarray(4)])},st=t=>{const{littleEndian:e,sampleSize:i}=$t(t.track.source._codec),o=+e;return he("pcmC",0,0,[Se(o),Se(8*i)])},jp=t=>{D(t.info.primingPacket);const e=km(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),o=new Me(i);return o.writeBits(2,e.fscod),o.writeBits(5,e.bsid),o.writeBits(3,e.bsmod),o.writeBits(3,e.acmod),o.writeBits(1,e.lfeon),o.writeBits(5,e.bitRateCode),o.writeBits(5,0),ne("dac3",[...i])},Vp=t=>{D(t.info.primingPacket);const e=_m(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const o=Math.ceil(i/8),a=new Uint8Array(o),n=new Me(a);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return ne("dec3",[...a])},Gp=t=>{D(t.info.primingPacket);const e=Hm(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ne("ddts",[...Um(e)])},Kp=(t,e)=>ne(t,[Array(6).fill(0),se(1)],[S2[e.track.source._codec](e)]),Xp=t=>ne("vttC",[...it.encode(t.info.config.description)]),Zp=t=>he("stts",0,0,[X(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[X(e.sampleCount),X(e.sampleDelta)])]),Qp=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return he("stss",0,0,[X(e.length),e.map(([i])=>X(i+1))])},Yp=t=>he("stsc",0,0,[X(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[X(e.firstChunk),X(e.samplesPerChunk),X(1)])]),Jp=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=$t(t.track.source._codec);return he("stsz",0,0,[X(e*t.info.numberOfChannels),X(t.samples.reduce((i,o)=>i+Te(o.duration,t.timescale),0))])}return he("stsz",0,0,[X(0),X(t.samples.length),t.samples.map(e=>X(e.size))])},e2=t=>t.finalizedChunks.length>0&&Ve(t.finalizedChunks).offset>=2**32?he("co64",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>nt(e.offset))]):he("stco",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>X(e.offset))]),t2=t=>he("ctts",1,0,[X(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[X(e.sampleCount),gt(e.sampleCompositionTimeOffset)])]),i2=t=>{let e=1/0,i=-1/0,o=1/0,a=-1/0;D(t.compositionTimeOffsetTable.length>0),D(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];o=Math.min(o,Te(r.timestamp,t.timescale)),a=Math.max(a,Te(r.timestamp+r.duration,t.timescale))}const n=Math.max(-e,0);return a>=2**31?null:he("cslg",0,0,[gt(n),gt(e),gt(i),gt(o),gt(a)])},a2=t=>ne("mvex",void 0,t.map(o2)),o2=t=>he("trex",0,0,[X(t.track.id),X(1),X(0),X(0),X(0)]),wr=(t,e)=>ne("moof",void 0,[n2(t),...e.map(s2)]),n2=t=>he("mfhd",0,0,[X(t)]),kr=t=>{let e=0,i=0;const o=0,a=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|o<<8|a},s2=t=>ne("traf",void 0,[r2(t),l2(t),c2(t)]),r2=t=>{D(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],o={duration:i.timescaleUnitsToNextSample,size:i.size,flags:kr(i)};return he("tfhd",0,e,[X(t.track.id),X(o.duration),X(o.size),X(o.flags)])},l2=t=>(D(t.currentChunk),he("tfdt",1,0,[nt(Te(t.currentChunk.startTimestamp,t.timescale))])),c2=t=>{D(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),o=t.currentChunk.samples.map(kr),a=t.currentChunk.samples.map(h=>Te(h.timestamp-h.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),r=new Set(o),l=new Set(a),f=r.size===2&&o[0]!==o[1],c=n.size>1,u=s.size>1,p=!f&&r.size>1,d=l.size>1||[...l].some(h=>h!==0);let m=0;return m|=1,m|=4*+f,m|=256*+c,m|=512*+u,m|=1024*+p,m|=2048*+d,he("trun",1,m,[X(t.currentChunk.samples.length),X(t.currentChunk.offset-t.currentChunk.moofOffset||0),f?X(o[0]):[],t.currentChunk.samples.map((h,g)=>[c?X(e[g]):[],u?X(i[g]):[],p?X(o[g]):[],d?gt(a[g]):[]])])},f2=t=>ne("mfra",void 0,[...t.map(d2),u2()]),d2=t=>he("tfra",1,0,[X(t.track.id),X(63),X(t.finalizedChunks.length),t.finalizedChunks.map(i=>[nt(Te(i.samples[0].timestamp,t.timescale)),nt(i.moofOffset),X(i.trafIndex+1),X(1),X(1)])]),u2=()=>he("mfro",0,0,[X(0)]),h2=()=>ne("vtte"),m2=(t,e,i,o,a)=>ne("vttc",void 0,[a!==null?ne("vsid",[gt(a)]):null,i!==null?ne("iden",[...it.encode(i)]):null,e!==null?ne("ctim",[...it.encode(pp(e))]):null,o!==null?ne("sttg",[...it.encode(o)]):null,ne("payl",[...it.encode(t)])]),p2=t=>ne("vtta",[...it.encode(t)]),g2=t=>{const e=[],i=t.format._options.metadataFormat??"auto",o=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const a=b2(o);a&&e.push(a)}else if(i==="mdta"){const a=y2(o);a&&e.push(a)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&v2(e,t.output._metadataTags);return e.length===0?null:ne("udta",void 0,e)},v2=(t,e)=>{for(const{key:i,value:o}of Ts(e))switch(i){case"title":t.push(rt("©nam",o));break;case"description":t.push(rt("©des",o));break;case"artist":t.push(rt("©ART",o));break;case"album":t.push(rt("©alb",o));break;case"albumArtist":t.push(rt("albr",o));break;case"genre":t.push(rt("©gen",o));break;case"date":t.push(rt("©day",o.toISOString().slice(0,10)));break;case"comment":t.push(rt("©cmt",o));break;case"lyrics":t.push(rt("©lyr",o));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:qt(i)}if(e.raw)for(const i in e.raw){const o=e.raw[i];o==null||i.length!==4||t.some(a=>a.type===i)||(typeof o=="string"?t.push(rt(i,o)):o instanceof Uint8Array&&t.push(ne(i,Array.from(o))))}},rt=(t,e)=>{const i=it.encode(e);return ne(t,[se(i.length),se(xr("und")),Array.from(i)])},Tr={"image/jpeg":13,"image/png":14,"image/bmp":27},_r=(t,e)=>{const i=[];for(const{key:o,value:a}of Ts(t))switch(o){case"title":i.push({key:e?"title":"©nam",value:Xe(a)});break;case"description":i.push({key:e?"description":"©des",value:Xe(a)});break;case"artist":i.push({key:e?"artist":"©ART",value:Xe(a)});break;case"album":i.push({key:e?"album":"©alb",value:Xe(a)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Xe(a)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Xe(a)});break;case"genre":i.push({key:e?"genre":"©gen",value:Xe(a)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Xe(a)});break;case"date":i.push({key:e?"date":"©day",value:Xe(a.toISOString().slice(0,10))});break;case"images":for(const n of a)n.kind==="coverFront"&&i.push({key:"covr",value:ne("data",[X(Tr[n.mimeType]??0),X(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${a}/${t.tracksTotal}`:a.toString();i.push({key:"track",value:Xe(n)})}else i.push({key:"trkn",value:ne("data",[X(0),X(0),se(0),se(a),se(t.tracksTotal??0),se(0)])});break;case"discNumber":e||i.push({key:"disc",value:ne("data",[X(0),X(0),se(0),se(a),se(t.discsTotal??0),se(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:qt(o)}if(t.raw)for(const o in t.raw){const a=t.raw[o];a==null||!e&&o.length!==4||i.some(n=>n.key===o)||(typeof a=="string"?i.push({key:o,value:Xe(a)}):a instanceof Uint8Array?i.push({key:o,value:ne("data",[X(0),X(0),Array.from(a)])}):a instanceof xs&&i.push({key:o,value:ne("data",[X(Tr[a.mimeType]??0),X(0),Array.from(a.data)])}))}return i},b2=t=>{const e=_r(t,!1);return e.length===0?null:he("meta",0,0,void 0,[Xo(!1,"mdir","","appl"),ne("ilst",void 0,e.map(i=>ne(i.key,void 0,[i.value])))])},y2=t=>{const e=_r(t,!0);return e.length===0?null:ne("meta",void 0,[Xo(!1,"mdta",""),he("keys",0,0,[X(e.length)],e.map(i=>ne("mdta",[...it.encode(i.key)]))),ne("ilst",void 0,e.map((i,o)=>{const a=String.fromCharCode(...X(o+1));return ne(a,void 0,[i.value])}))])},Xe=t=>ne("data",[X(1),X(0),...it.encode(t)]),w2=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},k2={avc:Hp,hevc:Lp,vp8:yr,vp9:yr,av1:Np,prores:null},Sr=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},T2=(t,e)=>{switch(t){case"aac":return Zo;case"mp3":return Zo;case"opus":return $p;case"vorbis":return Zo;case"flac":return Wp;case"ac3":return jp;case"eac3":return Vp;case"dts":return Gp}if(e)switch(t){case"pcm-s24":return Mt;case"pcm-s24be":return Mt;case"pcm-s32":return Mt;case"pcm-s32be":return Mt;case"pcm-f32":return Mt;case"pcm-f32be":return Mt;case"pcm-f64":return Mt;case"pcm-f64be":return Mt}else switch(t){case"pcm-s16":return st;case"pcm-s16be":return st;case"pcm-s24":return st;case"pcm-s24be":return st;case"pcm-s32":return st;case"pcm-s32be":return st;case"pcm-f32":return st;case"pcm-f32be":return st;case"pcm-f64":return st;case"pcm-f64be":return st}return null},_2={webvtt:"wvtt"},S2={webvtt:Xp},xr=t=>{D(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Qo{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){D(!this.started),this.target._start(),this.started=!0}write(e){D(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return D(this.started&&!this.finalized),this.target._flush()}async finalize(){D(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const o=i+e.byteLength-this.trackedStart;let a=this.trackedWrites.byteLength;for(;a<o;)a*=2;if(a!==this.trackedWrites.byteLength){const n=new Uint8Array(a);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class vt extends Oo{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new x2(this,e)}}const Yo=2**16,Jo=2**32;class Ga extends vt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Yo,{maxByteLength:Jo})}catch{this._buffer=new ArrayBuffer(Yo),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Yo);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>Jo)throw new Error(`ArrayBuffer exceeded maximum size of ${Jo} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const o=new ArrayBuffer(i),a=new Uint8Array(o);a.set(this._bytes,0),this._buffer=o,this._bytes=a}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class x2 extends vt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class en{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ze=57600,C2=2082844800,E2=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},Te=(t,e,i=!0)=>{const o=t*e;return i?Math.round(o):o};class P2 extends mp{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Ga,this.auxWriter=new Qo(this.auxTarget,!1),this.auxBoxWriter=new Wa(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=gs(),this.creationTime=Math.floor(Date.now()/1e3)+C2,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Br,this.isCmaf=i instanceof Ir,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Ir?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(o=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":o instanceof Ga),this.boxWriter=new Wa(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Ga?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const o=await this.output._getInitTarget(),a=new Qo(o,!0);a.start(),this.initWriter=a,this.initBoxWriter=new Wa(a)}const i=this.output.tracks.some(o=>o.isVideoTrack()&&o.source._codec==="avc");{const o=this.initBoxWriter??this.boxWriter;if(D(o),this.formatOptions.onFtyp&&o.writer.startTrackingWrites(),o.writeBox(vp({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:a,start:n}=o.writer.stopTrackingWrites();this.formatOptions.onFtyp(a,n)}this.ftypSize=o.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const o of this.output.tracks)if(o.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(D(this.writer),D(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ja(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const o of this.output.tracks)o.isVideoTrack()&&o.metadata.decoderConfig?this.getVideoTrackData(o,o.metadata.primingPacket??null,{decoderConfig:o.metadata.decoderConfig}):o.isAudioTrack()&&o.metadata.decoderConfig&&this.getAudioTrackData(o,o.metadata.primingPacket??null,{decoderConfig:o.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return qm({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,o){const a=this.trackDatas.find(d=>d.track===e);if(a)return a;Is(o,e.source._codec),D(o),D(o.decoderConfig);const n={...o.decoderConfig};D(n.codedWidth!==void 0),D(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const d=nm(i.data);if(!d)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=sm(d),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const d=fm(i.data);if(!d)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=vm(d),s=!0}const r=Ah(1/(e.metadata.frameRate??Ze),1e6).den,l=n.displayAspectWidth,f=n.displayAspectHeight,c=l===void 0||f===void 0?{num:1,den:1}:_s({num:l*n.codedHeight,den:f*n.codedWidth}),u=n.codec==="ap4h"||n.codec==="ap4x",p={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:c,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:u},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(p),this.trackDatas.sort((d,m)=>d.track.id-m.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),p}getAudioTrackData(e,i,o){const a=this.trackDatas.find(l=>l.track===e);if(a)return a;Bs(o,e.source._codec),D(o),D(o.decoderConfig);const n={...o.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=Ws(Di.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const f=Ha[l.samplingFrequencyIndex],c=Ho[l.channelConfiguration];if(f===void 0||c===void 0)throw new Error("Invalid ADTS frame header.");n.description=Cs({objectType:l.objectType,sampleRate:f,numberOfChannels:c}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:o.decoderConfig.numberOfChannels,sampleRate:o.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&Ge.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,f)=>l.track.id-f.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const o=this.trackDatas.find(n=>n.track===e);if(o)return o;em(i),D(i),D(i.config);const a={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(a),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),a}async addEncodedVideoPacket(e,i,o){const a=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,o);let s=i.data;if(n.info.requiresAnnexBTransformation){const l=[...Oi(s)].map(f=>s.subarray(f.offset,f.offset+f.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=om(l,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,r)}finally{a()}}async addEncodedAudioPacket(e,i,o){const a=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,o);let s=i.data;if(n.info.requiresAdtsStripping){const c=Ws(Di.tempFromBytes(s));if(!c)throw new Error("Expected ADTS frame, didn't get one.");const u=c.crcCheck===null?Dm:$m;s=s.subarray(u)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(n.info.requiresPcmTransformation){const u=$t(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(l=s.byteLength/u/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const p=r-n.info.expectedNextPcmPacketTimestamp;if(p<.01)r=n.info.expectedNextPcmPacketTimestamp;else{const d=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,p);r=n.info.expectedNextPcmPacketTimestamp+d}}n.info.expectedNextPcmPacketTimestamp=r+l}const f=this.createSampleForTrack(n,s,r,l,i.type);await this.registerSample(n,f)}finally{a()}}async padWithSilence(e,i,o){const a=Te(o,e.timescale);if(o=a/e.timescale,a>0){const{sampleSize:n,silentValue:s}=$t(e.info.decoderConfig.codec),r=a*e.info.numberOfChannels,l=new Uint8Array(n*r).fill(s),f=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,o,"key");await this.registerSample(e,f)}return o}async addSubtitleCue(e,i,o){const a=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,o);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{a()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const o=new Set([]);for(const f of e.cueQueue)D(f.timestamp<=i),D(e.lastCueEndTimestamp<=f.timestamp+f.duration),o.add(Math.max(f.timestamp,e.lastCueEndTimestamp)),o.add(f.timestamp+f.duration);const a=[...o].sort((f,c)=>f-c),n=a[0],s=a[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const f=h2();this.auxBoxWriter.writeBox(f);const c=this.auxTarget._getSlice(0,this.auxWriter.getPos()),u=this.createSampleForTrack(e,c,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,u),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let f=0;f<e.cueQueue.length;f++){const c=e.cueQueue[f];if(c.timestamp>=s)break;dr.lastIndex=0;const u=dr.test(c.text),p=c.timestamp+c.duration;let d=e.cueToSourceId.get(c);if(d===void 0&&s<p&&(d=e.nextSourceId++,e.cueToSourceId.set(c,d)),c.notes){const h=p2(c.notes);this.auxBoxWriter.writeBox(h)}const m=m2(c.text,u?n:null,c.identifier??null,c.settings??null,d??null);this.auxBoxWriter.writeBox(m),p===s&&e.cueQueue.splice(f--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,n,s-n,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,o,a,n){return{timestamp:o,decodeTimestamp:o,duration:a,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:Te(a,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let a=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],r=Te(s.duration,e.timescale);a+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:a,sampleDelta:1});else{const n=Ve(e.timeToSampleTable);n.sampleCount+=a}e.timestampProcessingQueue.length=0;return}const o=e.timestampProcessingQueue.map(a=>a.timestamp).sort((a,n)=>a-n);this.isFragmented||(e.startTimestampOffset??=o[0]);for(let a=0;a<e.timestampProcessingQueue.length;a++){const n=e.timestampProcessingQueue[a];n.decodeTimestamp=o[a];const s=Te(n.timestamp-n.decodeTimestamp,e.timescale),r=Te(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){D(e.lastSample);const l=Te(n.decodeTimestamp,e.timescale,!1),f=Math.round(l-e.lastTimescaleUnits);if(D(f>=0),e.lastTimescaleUnits+=f,e.lastSample.timescaleUnitsToNextSample=f,!this.isFragmented){let c=Ve(e.timeToSampleTable);if(D(c),c.sampleCount===1){c.sampleDelta=f;const p=e.timeToSampleTable[e.timeToSampleTable.length-2];p&&p.sampleDelta===f&&(p.sampleCount++,e.timeToSampleTable.pop(),c=p)}else c.sampleDelta!==f&&(c.sampleCount--,e.timeToSampleTable.push(c={sampleCount:1,sampleDelta:f}));c.sampleDelta===r?c.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const u=Ve(e.compositionTimeOffsetTable);D(u),u.sampleCompositionTimeOffset===s?u.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=Te(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,D(e.lastSample),D(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){D(i.type==="key");const a=Te(i.timestamp,e.timescale,!1),n=Math.round(a-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const a=e.track.metadata.maximumPacketCount;if(D(a!==void 0),e.samples.length>a)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${a}). Either add less packets or increase the maximum packet count.`)}let o=!1;if(!e.currentChunk)o=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const a=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});a>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(o=!0,await this.finalizeFragment())}else o=a>=.5}o&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),D(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(D(!this.isFragmented),D(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((o,a)=>o+Te(a.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ve(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const o of e.currentChunk.samples)D(o.data),this.writer.write(o.data),o.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(D(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,o=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<o&&(i=n,o=n.sampleQueue[0].timestamp)}if(!i)break;const a=i.sampleQueue.shift();await this.addSampleToTrack(i,a)}}async finalizeFragment(e=!this.isCmaf){if(D(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const d=this.initBoxWriter??this.boxWriter;D(d),this.formatOptions.onMoov&&d.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const m=$i(this);if(d.writeBox(m),this.formatOptions.onMoov){const{data:h,start:g}=d.writer.stopTrackingWrites();this.formatOptions.onMoov(h,g)}if(this.isCmaf){D(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Wa(this.writer);const h=this.boxWriter.measureBox(vr()),g=this.boxWriter.measureBox(br(this,0));this.segmentHeaderSize=h+g,this.writer.seek(this.segmentHeaderSize)}}D(this.writer),D(this.boxWriter);const i=this.trackDatas.filter(d=>d.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const o=this.nextFragmentNumber++,a=wr(o,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(a);let r=s+qo,l=1/0;for(let d=0;d<i.length;d++){const m=i[d];m.currentChunk.offset=r,m.currentChunk.moofOffset=n,m.currentChunk.trafIndex=d;for(const h of m.currentChunk.samples)r+=h.size;l=Math.min(l,m.currentChunk.startTimestamp)}const f=r-s,c=f>=2**32;if(c)for(const d of i)d.currentChunk.offset+=$s-qo;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const u=wr(o,i);if(this.boxWriter.writeBox(u),this.formatOptions.onMoof){const{data:d,start:m}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(d,m,l)}D(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const p=ja(c);p.size=f,this.boxWriter.writeBox(p),this.writer.seek(s+(c?$s:qo));for(const d of i)for(const m of d.currentChunk.samples)this.writer.write(m.data),m.data=null;if(this.formatOptions.onMdat){const{data:d,start:m}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(d,m)}for(const d of i)d.finalizedChunks.push(d.currentChunk),this.finalizedChunks.push(d.currentChunk),d.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){D(this.writer),D(this.boxWriter),this.ensureOneEnabledTrack();const e=$i(this),o=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;D(this.ftypSize!==null),this.writer.seek(this.ftypSize+o),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ja(!0),this.boxWriter.writeBox(this.mdat);for(const a of this.trackDatas){for(const n of a.sampleQueue)await this.addSampleToTrack(a,n);a.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){D(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const o=i.track.metadata.maximumPacketCount;D(o!==void 0),e+=8*Math.ceil(2/3*o),e+=4*o,e+=8*Math.ceil(2/3*o),e+=12*Math.ceil(2/3*o),e+=4*o,e+=8*o}return e}async onTrackClose(e){const i=await this.mutex.acquire(),o=this.trackDatas.find(a=>a.track===e);o&&(o.closed=!0,o.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(o,1/0),this.processTimestamps(o)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(a=>a.type===e);if(i.length===0)continue;if(!i.some(a=>a.track.metadata.disposition?.default!==!1)){const a=i[0];a.track.metadata.disposition={...a.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){D(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let o=0;o<i.samples.length;o++){const a=i.samples[o];a.timestamp-=i.startTimestampOffset,a.decodeTimestamp-=i.startTimestampOffset}if(D(this.writer),D(this.boxWriter),this.fastStart==="in-memory"){this.mdat=ja(!1);let i;for(let a=0;a<2;a++){const n=$i(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:f}of l.samples)D(f),r+=f.byteLength,i+=f.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const o=$i(this);if(this.boxWriter.writeBox(o),this.formatOptions.onMoov){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(a,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const a of this.finalizedChunks)for(const n of a.samples)D(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(a,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(vr()),this.boxWriter.writeBox(br(this,i))}else{const i=this.writer.getPos(),o=f2(this.trackDatas);this.boxWriter.writeBox(o);const a=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(a)}else{D(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);D(i!==void 0);const o=this.writer.getPos()-i;if(this.mdat.size=o,this.mdat.largeSize=o>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const a=$i(this);if(this.fastStart==="reserve"){D(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(bp(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class M2{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){D(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(o,a)=>o[a*e]:e===1&&i===4?this.channelMixer=(o,a,n)=>o[a*e]*+(n<2):e===1&&i===6?this.channelMixer=(o,a,n)=>o[a*e]*+(n===2):e===2&&i===1?this.channelMixer=(o,a)=>{const n=a*e;return .5*(o[n]+o[n+1])}:e===2&&i===4?this.channelMixer=(o,a,n)=>o[a*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(o,a,n)=>o[a*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(o,a)=>{const n=a*e;return .25*(o[n]+o[n+1]+o[n+2]+o[n+3])}:e===4&&i===2?this.channelMixer=(o,a,n)=>{const s=a*e;return .5*(o[s+n]+o[s+n+2])}:e===4&&i===6?this.channelMixer=(o,a,n)=>{const s=a*e;return n<2?o[s+n]:n===2||n===3?0:o[s+n-2]}:e===6&&i===1?this.channelMixer=(o,a)=>{const n=a*e;return Math.SQRT1_2*(o[n]+o[n+1])+o[n+2]+.5*(o[n+4]+o[n+5])}:e===6&&i===2?this.channelMixer=(o,a,n)=>{const s=a*e;return o[s+n]+Math.SQRT1_2*(o[s+2]+o[s+n+4])}:e===6&&i===4?this.channelMixer=(o,a,n)=>{const s=a*e;return n<2?o[s+n]+Math.SQRT1_2*o[s+2]:o[s+n+2]}:this.channelMixer=(o,a,n)=>n<e?o[a*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const o=new Float32Array(i);o.set(this.tempSourceBuffer),this.tempSourceBuffer=o}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),D(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const o=e.allocationSize({planeIndex:0,format:"f32"}),a=new Float32Array(this.tempSourceBuffer.buffer,0,o/4);e.copyTo(a,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,r=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let f=r;f<l;f++){if(f<this.bufferStartFrame)continue;for(;f>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const c=f-this.bufferStartFrame;D(c<this.bufferSizeInFrames);const d=(f/this.targetSampleRate-n)*this.sourceSampleRate,m=Math.floor(d),h=Math.ceil(d),g=d-m;for(let v=0;v<this.targetNumberOfChannels;v++){let b=0,w=0;m>=0&&m<e.numberOfFrames&&(b=this.channelMixer(a,m,v)),h>=0&&h<e.numberOfFrames&&(w=this.channelMixer(a,h,v));const T=b+g*(w-b),_=c*this.targetNumberOfChannels+v;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=c:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,c)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;D(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const o=new Le({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(o),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var A2=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose],i&&(a=o)}if(typeof o!="function")throw new TypeError("Object not disposable.");a&&(o=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:o,async:i})}else i&&t.stack.push({async:!0});return e},I2=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var o,a=0;function n(){for(;o=e.stack.pop();)try{if(!o.async&&a===1)return a=0,e.stack.push(o),Promise.resolve().then(n);if(o.dispose){var s=o.dispose.call(o.value);if(o.async)return a|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else a|=1}catch(r){i(r)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var o=new Error(i);return o.name="SuppressedError",o.error=t,o.suppressed=e,o});class tn{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class Cr extends tn{constructor(e){if(super(),this._connectedTrack=null,!mt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${mt.join(", ")}.`);this._codec=e}}const Er=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class B2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new ws,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,o){const a=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||r&&s!=="passThrough"){let u=n.transform?.width,p=n.transform?.height,d=n.transform?.fit??"fill";r&&s!=="passThrough"&&(D(this.outputWidth),D(this.outputHeight),D(s!=="deny"),u=this.outputWidth,p=this.outputHeight,d=s);const m=await e.transform({width:u,height:p,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:d,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=m.displayWidth,this.outputHeight=m.displayHeight),i&&e.close(),e=m,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const c=n.transform?.frameRate;if(c!==void 0){const u=e.timestamp+e.duration,p=ys(e.timestamp,c);if(this.frameRateLastSample!==null)if(p<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=u;return}else await this.padFrameRate(p,o);e===a&&(e=e.clone(),i=!0),e.setTimestamp(p),e.setDuration(1/c),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=p,this.frameRateLastEndTimestamp=u}await this.processAndEncode(e,o)}finally{i&&e.close()}}async processAndEncode(e,i){const o=this.encodingConfig;let a;if(o.transform?.process){let n=o.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const r of n)r instanceof Re?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Re(r)):s.push(new Re(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of n)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}a=s}else a=[e];try{for(const n of a){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(n.timestamp/s),l={...this.defaultEncodeOptions,...n.encodeOptions,...i},f={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const c=n.clone(),u=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(c,f)).catch(p=>this.setError(p)).finally(()=>{this.customEncoderQueueSize--,c.close()});this.customEncoderQueueSize>=4&&await u}else{D(this.encoder);const c=n.toVideoFrame(),u=ps(this.preciseTimings,c.timestamp,d=>d.microsecondTimestamp),p=u!==-1?this.preciseTimings[u]:null;if(p&&p.microsecondTimestamp===c.timestamp?(p.timestamp!==n.timestamp&&(p.timestampIsValid=!1),p.duration!==n.duration&&(p.durationIsValid=!1)):(this.preciseTimings.splice(u+1,0,{microsecondTimestamp:c.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!c.format&&!c.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(c,f)}finally{c.close()}}else{this.splitter||(this.splitter=new F2);const{colorFrame:m,alphaFrame:h}=await this.splitter.split(c);this.alphaFrameQueue.push(h);try{this.encoder.encode(m,f)}finally{m.close()}}else try{this.encoder.encode(c,f)}finally{c.close()}this.encoder.encodeQueueSize>=4&&await new Promise(d=>this.encoder.addEventListener("dequeue",d,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of a)n!==e&&n.close()}}async padFrameRate(e,i){const o=this.encodingConfig.transform.frameRate;D(this.frameRateLastSample);const a=Math.round((e-this.frameRateLastTimestamp)*o);for(let n=1;n<a;n++){const s={stack:[],error:void 0,hasError:!1};try{const r=A2(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+n/o),r.setDuration(1/o),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{I2(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=$a(this.encodingConfig.quality,this.encodingConfig.bitrate);D(i!==void 0);const o=ar({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let a=null,n;for(const r of o){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),n=cr.find(c=>c.supports(this.encodingConfig.codec,l)),n){a=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){a=r;break}}catch{}}if(!a){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=o[0].config,l=o.map(({config:f,quantizer:c})=>c!==null?`quantizer ${c}`:`${f.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=a.config;if(a.quantizer!==null&&(this.defaultEncodeOptions=lr(this.encodingConfig.codec,a.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof ot))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Er(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(f=>{this.setError(f)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let f=0,c=0;const u=(d,m,h)=>{const g={};if(m){const _=new Uint8Array(m.byteLength);m.copyTo(_),g.alpha=_}let v=ot.fromEncodedChunk(d,g);const b=ps(this.preciseTimings,d.timestamp,_=>_.microsecondTimestamp),w=b!==-1?this.preciseTimings[b]:null;let T=null;this.emittedEncoderPackets===0&&v.type==="delta"&&h?.decoderConfig&&(T=wm(this.encodingConfig.codec,h.decoderConfig,v.data)),(w&&w.microsecondTimestamp===d.timestamp||T!==null)&&(v=v.clone({timestamp:w?.timestampIsValid?w.timestamp:void 0,duration:w?.durationIsValid?w.duration:void 0,type:T??void 0})),Er(this.source._connectedTrack,v),this.encodingConfig.onEncodedPacket?.(v,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,v,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},p=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(d,m)=>{if(!this.alphaEncoder){u(d,null,m);return}const h=this.alphaFrameQueue.shift();D(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:d.type==="key"}),c++,h.close(),r.push({chunk:d,meta:m})):c===0?u(d,null,m):(l.push(f+c),r.push({chunk:d,meta:m}))},error:d=>{d.stack=p,this.setError(d)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const d=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(m,h)=>{c--;const g=r.shift();for(D(g!==void 0),u(g.chunk,m,g.meta),f++;l.length>0&&l[0]===f;){l.shift();const v=r.shift();D(v!==void 0),u(v.chunk,null,v.meta)}},error:m=>{m.stack=d,this.setError(m)}}),this.alphaEncoder.configure(s)}}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,o=ys(this.frameRateLastEndTimestamp,i);await this.padFrameRate(o)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Oh(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let an=null;class F2{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!an){const a=new Blob([`(${R2.toString()})()`],{type:"application/javascript"});an=URL.createObjectURL(a)}this.worker=new Worker(an),this.worker.addEventListener("message",a=>{const n=a.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",a=>{const n=new Error(a.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,o=gs();return this.pendingRequests.set(i,o),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),o.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const R2=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:r}=n.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:f}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:f},{transfer:[l,f]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=n.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return o(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return a(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},o=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,f=r.visibleRect?.height??r.codedHeight,c=l*f,u=Math.ceil(l/2),p=Math.ceil(f/2),d=c+u*p*2,m=new Uint8Array(d);for(let b=0,w=3;b<c;b++,w+=4)m[b]=n[w];m.fill(128,c);const h=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:f,timestamp:r.timestamp,duration:r.duration??void 0}),g={format:"I420",codedWidth:l,codedHeight:f,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[m.buffer]},v=new VideoFrame(m,g);return{colorFrame:h,alphaFrame:v}},a=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,f=r.visibleRect?.height??r.codedHeight,c=s.includes("P10"),u=s.includes("P12"),p=c||u?2:1;let d,m;s.startsWith("I420")?(d=Math.ceil(l/2),m=Math.ceil(f/2)):s.startsWith("I422")?(d=Math.ceil(l/2),m=f):(d=l,m=f);const h=l*f,g=d*m,v=h*p,b=g*p,w=h*p,T=v+b*2,_=s.replace("A",""),M=Math.ceil(l/2),A=Math.ceil(f/2),P=M*A,E=P*p,z=w+2*E,W=new Uint8Array(z),x=T;W.set(n.subarray(x,x+w),0);const F=w,k=c?512:u?2048:128;p===1?W.fill(k,F):new Uint16Array(W.buffer,F,2*P).fill(k);const H=c?"I420P10":u?"I420P12":"I420",V=new VideoFrame(n.subarray(0,T),{format:_,codedWidth:l,codedHeight:f,timestamp:r.timestamp,duration:r.duration??void 0}),R={format:H,codedWidth:l,codedHeight:f,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[W.buffer]},Q=new VideoFrame(W,R);return{colorFrame:V,alphaFrame:Q}}};class z2 extends Cr{constructor(e){ip(e),super(e.codec),this._encoder=new B2(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Pr extends tn{constructor(e){if(super(),this._connectedTrack=null,!Dt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Dt.join(", ")}.`);this._codec=e}}class O2{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new ws,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const o=this.encodingConfig;o.transform?.numberOfChannels!==void 0||o.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new M2({targetNumberOfChannels:o.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:o.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const o=this.encodingConfig;if(o.transform?.sampleFormat!==void 0&&Jm(e.format)!==o.transform.sampleFormat){const a=tp(e,o.transform.sampleFormat);i&&e.close(),e=a,i=!0}if(o.transform?.process)try{let a=o.transform.process(e);if(a instanceof Promise&&(a=await a),a===null)return;Array.isArray(a)||(a=[a]);try{for(const n of a)if(!(n instanceof Le))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of a)await this.encodeSample(n,!0)}finally{for(const n of a)n instanceof Le&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),D(this.encoderInitialized),this.closed)return;{const o=Math.round(e.timestamp*e.sampleRate),a=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=a;else{const n=o-this.lastEndSampleIndex;if(n>=64){const s=new Le({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const o=e.clone(),a=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(o)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,o.close()});this.customEncoderQueueSize>=4&&await a,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{D(this.encoder);const o=e.toAudioData();this.encoder.encode(o),o.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(a=>this.encoder.addEventListener("dequeue",a,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){D(this.outputSampleSize),D(this.writeOutputValue);const{numberOfChannels:o,numberOfFrames:a,sampleRate:n,timestamp:s}=e,r=2048,l=[];for(let p=0;p<a;p+=r){const d=Math.min(r,e.numberOfFrames-p),m=d*o*this.outputSampleSize,h=new ArrayBuffer(m),g=new DataView(h);l.push({frameCount:d,view:g})}const f=e.allocationSize({planeIndex:0,format:"f32-planar"}),c=new Float32Array(f/Float32Array.BYTES_PER_ELEMENT);for(let p=0;p<o;p++){e.copyTo(c,{planeIndex:p,format:"f32-planar"});for(let d=0;d<l.length;d++){const{frameCount:m,view:h}=l[d];for(let g=0;g<m;g++)this.writeOutputValue(h,(g*o+p)*this.outputSampleSize,c[d*r+g])}}i&&e.close();const u={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:o,sampleRate:n}};for(let p=0;p<l.length;p++){const{frameCount:d,view:m}=l[p],h=m.buffer,g=p*r,v=new ot(new Uint8Array(h),"key",s+g/n,d/n);this.encodingConfig.onEncodedPacket?.(v,u),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,v,u)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:o}=e,a=$a(this.encodingConfig.quality,this.encodingConfig.bitrate),n=nr({numberOfChannels:i,sampleRate:o,...this.encodingConfig,quality:a});this.encodingConfig.onEncoderConfig?.(n);const s=fr.find(r=>r.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof ot))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(f=>{this.setError(f)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(Ge.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(f,c)=>{if(this.encodingConfig.codec==="aac"&&c?.decoderConfig){let p=!1;if(!c.decoderConfig.description||c.decoderConfig.description.byteLength<2?p=!0:p=qh(qe(c.decoderConfig.description)).objectType===0,p){const d=Number(Ve(n.codec.split(".")));c.decoderConfig.description=Cs({objectType:d,numberOfChannels:c.decoderConfig.numberOfChannels,sampleRate:c.decoderConfig.sampleRate})}}let u=ot.fromEncodedChunk(f);u=u.clone({timestamp:bs(u.timestamp,n.sampleRate),duration:f.duration!=null?bs(u.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(u,c),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,u,c).catch(p=>{this.setError(p)})},error:f=>{f.stack=l,this.setError(f)}}),this.encoder.configure(n)}D(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:o,littleEndian:a}=$t(e);switch(this.outputSampleSize=o,o){case 1:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint8(s,Ie((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,r)=>{n.setInt8(s,Ie(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,r)=>{const l=Ie(Math.floor(r*32767),-32768,32767);n.setUint8(s,fp(l))}:i==="alaw"?this.writeOutputValue=(n,s,r)=>{const l=Ie(Math.floor(r*32767),-32768,32767);n.setUint8(s,dp(l))}:D(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint16(s,Ie((r+1)*32767.5,0,65535),a):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt16(s,Ie(Math.round(r*32767),-32768,32767),a):D(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,r)=>Ao(n,s,Ie((r+1)*83886075e-1,0,16777215),a):i==="signed"?this.writeOutputValue=(n,s,r)=>Sh(n,s,Ie(Math.round(r*8388607),-8388608,8388607),a):D(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint32(s,Ie((r+1)*21474836475e-1,0,4294967295),a):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt32(s,Ie(Math.round(r*2147483647),-2147483648,2147483647),a):i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat32(s,r,a):D(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat64(s,r,a):D(!1);break;default:qt(o),D(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class H2 extends Pr{constructor(e){ap(e),super(e.codec),this._accumulatedTime=0,this._encoder=new O2(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=Le._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const o of i)await this._encoder.add(o,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class L2 extends tn{constructor(e){if(super(),this._connectedTrack=null,!Ri.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Ri.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Mr{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>mt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Dt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Ri.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class on extends Mr{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new P2(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Ar extends on{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...mt,...Lo,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Ri]}_codecUnsupportedHint(e){return new Br().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Ir extends on{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...mt,...Lo,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Ri]}}class Br extends on{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...mt,...Dt]}_codecUnsupportedHint(e){return new Ar().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Fr=["video","audio","subtitle"];class Wi{constructor(e,i,o,a,n){this.id=e,this.output=i,this.type=o,this.source=a,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Wi))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Ss(this.metadata.group),o=Ss(e.metadata.group);for(const a of i)if(this.type!==e.type&&o.some(r=>a===r)||o.some(r=>a._pairedGroups.has(r)))return!0;return!1}}class N2 extends Wi{constructor(e,i,o,a){super(e,i,"video",o,a)}}class U2 extends Wi{constructor(e,i,o,a){super(e,i,"audio",o,a)}}class q2 extends Wi{constructor(e,i,o,a){super(e,i,"subtitle",o,a)}}class ji{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof ji))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const nn=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Mh(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Uh(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof ji)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof ji))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class D2 extends Oo{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new ji,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new ms,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Mr))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof vt||e.target instanceof en))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof vt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof vt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof vt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){D(this._target instanceof en);const i=this._target.getTarget(e),o=a=>{if(!(a instanceof vt))throw new TypeError("getTarget must return a Target.");return a};return i instanceof Promise?i.then(o):o(i)}async _getTarget(e){D(this._target instanceof en);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(D(this._initTarget!==null),this._initTarget instanceof vt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof vt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),o=a=>(this.state==="canceled"?a._close():this._rememberTarget(a),this._emit("target",{target:a,request:e,isRoot:!0}),this._rootTarget=a,a);return i instanceof Promise?this._rootTargetPromise=i.then(o):o(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),o=new Qo(i,typeof e=="boolean"?e:e(i));return o.start(),o})()}addVideoTrack(e,i={}){if(!(e instanceof Cr))throw new TypeError("source must be a VideoSource.");if(nn(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Is({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof ot))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const o={...i};return o.group??=this.defaultTrackGroup,this._addTrack(new N2(this.tracks.length+1,this,e,o))}addAudioTrack(e,i={}){if(!(e instanceof Pr))throw new TypeError("source must be an AudioSource.");if(nn(i),i.decoderConfig!==void 0&&Bs({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof ot))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const o={...i};return o.group??=this.defaultTrackGroup,this._addTrack(new U2(this.tracks.length+1,this,e,o))}addSubtitleTrack(e,i={}){if(!(e instanceof L2))throw new TypeError("source must be a SubtitleSource.");nn(i);const o={...i};return o.group??=this.defaultTrackGroup,this._addTrack(new q2(this.tracks.length+1,this,e,o))}setMetadataTags(e){if(Nh(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),o=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),a=i[e.type].max;if(o===a)throw new Error(a===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${a} ${e.type} track${a===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const o of Fr){const a=this.tracks.reduce((s,r)=>s+(r.type===o?1:0),0),n=e[o].min;if(a<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const o of Fr){const a=this.tracks.reduce((s,r)=>s+(r.type===o?1:0),0),n=e[o].min;if(a<n)throw new Error(n===e[o].max?`${this.format._name} requires exactly ${n} ${o} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${o} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(_e._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const o=this._mutex.acquire();try{await this._muxer.start();const a=this.tracks.map(n=>n.source._start());await Promise.all(a)}finally{(await o)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return _e._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&_e._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(o=>o.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(o=>o._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(_e._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(o=>o.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const o=await this._rootWriterPromise;o.finalized||(await o.flush(),await o.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const $2={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},W2=new Set(["window","buddy","dancer"]);function Rr(t){return!W2.has(t.typeId)}const j2=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function V2(t){const e=JSON.parse(JSON.stringify(t,(i,o)=>{if(!j2.has(i))return o}));return JSON.stringify(e,null,2)}function G2(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>K2(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!1),e.sources=e.sources.map(i=>{const o=$2[i.generator??""];return o?{...i,generator:o}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Rr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(o=>({...o,effects:(o.effects??[]).filter(Rr)}))}:i.data})),e}function K2(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function X2(t,e){const i=new Blob([e],{type:"application/json"});Qt(t,i)}function Qt(t,e){const i=URL.createObjectURL(e),o=document.createElement("a");o.href=i,o.download=t,o.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const At=1280,It=1920,Z2=30,zr=8,Q2=16,Or=.97,sn=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function Hr(t,e,i=1280){const o=i/Math.max(t,e,1e-4);return{width:yt(t*o),height:yt(e*o)}}function Y2(t,e){const i=t/Math.max(e,1);let o="16:9",a=1/0;for(const n of sn){const s=Math.abs(i-n.rw/n.rh);s<a&&(a=s,o=n.id)}return o}function Lr(t,e,i=1280){if(t<2||e<2)return Hr(16,9,i);const o=Math.max(t,e),a=i/o;return{width:yt(t*a),height:yt(e*a)}}function J2(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),o=e-i;return t<o?0:(t-o+1)/i}function Nr(t){return Math.min(Z2,Math.max(12,Math.round(t||30)))}function Ur(t){return Math.min(32,Math.max(1,t||4))}function qr(t,e,i){const o=U(t||12,zr,Q2),a=e*i/(At*720);return Math.min(20,Math.max(zr,Math.round(o*Math.max(1,a))))}const eg=It,tg=It;function rn(t,e=!1){const i=e?eg:tg;return pn(t.exportSettings.width,t.exportSettings.height,i,i)}async function ig(t,e,i){const{width:o,height:a,format:n,quality:s,filename:r}=e.exportSettings,l=n==="jpg"?"image/jpeg":"image/png",f=await t.capture(e,i,yt(o),yt(a),l,n==="jpg"?Math.max(s,Or):s);Qt(`${r}.${n==="jpg"?"jpg":"png"}`,f)}async function ag(t,e,i){const{fps:o,duration:a,filename:n,quality:s}=e.exportSettings,{width:r,height:l}=rn(e,!1),f=Eo(e),c=Math.max(1,Math.round(a*o)),u=new wh,p=u.folder(n)??u,d=document.createElement("canvas");for(let h=0;h<c;h++){const g=f+h/o;i?.(h,c),t.paintFrame(e,g,r,l,d);const v=await cg(d,"image/png",s);p.file(`${n}_${String(h).padStart(5,"0")}.png`,await v.arrayBuffer()),await ln()}const m=await u.generateAsync({type:"blob"});Qt(`${n}_sequence.zip`,m)}async function Dr(t,e,i,o=!1){const a=await $r(t,e,rg(),i,o);Qt(`${e.exportSettings.filename}.webm`,a)}async function og(t,e,i,o=!1){try{return await ng(t,e,i,o)?"mp4 clip saved · with music":"mp4 clip saved"}catch(a){const n=lg();if(n){const r=await $r(t,e,n,i,o);return Qt(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await Dr(t,e,i,o),`MP4 not available (${a instanceof Error?a.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function ng(t,e,i,o=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const a=Nr(e.exportSettings.fps),n=Ur(e.exportSettings.duration),{width:s,height:r}=rn(e,o),l=new ze({bitrate:qr(e.exportSettings.bitrate,s,r)*1e6}),f=new Ar({fastStart:"in-memory"}),u=await lp(["avc","hevc"].filter(T=>f.getSupportedVideoCodecs().includes(T)),{width:s,height:r,quality:l});if(!u)throw new Error("this browser cannot encode H.264");const p=new Ga,d=new D2({format:f,target:p}),m=new z2({codec:u,quality:l,keyFrameInterval:1});d.addVideoTrack(m,{frameRate:a});const h=Eo(e),g=await sg(d,f,e,n,h);t.resetTemporal();const v=document.createElement("canvas");await d.start();try{g&&await g.audioSource.add(g.buffer);const T=Math.max(1,Math.round(n*a)),_=1/a,M=e.exportSettings.loopClose===!0;let A=null;for(let P=0;P<T;P++){const E=h+So(P/a,n,e.playback.mode,1,!0);i?.(P,T),t.paintFrame(e,E,s,r,v),P===0&&M?A=jr(v):Wr(v,A,P,T,M);const z=new Re(v,{timestamp:P*_,duration:_});await m.add(z,{keyFrame:P%a===0}),z.close(),await ln()}await d.finalize()}catch(T){try{await d.cancel()}catch{}throw T}const b=p.buffer;if(!b||b.byteLength<32)throw new Error("MP4 mux produced an empty file");const w=b.slice(0);return Qt(`${e.exportSettings.filename}.mp4`,new Blob([w],{type:"video/mp4"})),!!g}async function sg(t,e,i,o,a=0){const n=await xu(Pi(i));if(!n||n.length<32||n.duration<=0)return null;const s=i.exportSettings.loopClose===!0;let r;try{r=Su(n,o,s,a)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),f=r.sampleRate>=46e3?48e3:44100,c=e.getSupportedAudioCodecs(),u=["aac","mp3","opus"].filter(m=>c.includes(m)),p=await cp(u.length?u:c,{numberOfChannels:l,sampleRate:f});if(!p)return null;const d=new H2({codec:p,quality:np,transform:{numberOfChannels:l,sampleRate:f}});return t.addAudioTrack(d),{audioSource:d,buffer:r}}async function $r(t,e,i,o,a=!1){const n=Nr(e.exportSettings.fps),s=Ur(e.exportSettings.duration),{width:r,height:l}=rn(e,a),f=document.createElement("canvas");f.width=r,f.height=l;const c=f.getContext("2d");if(!c)throw new Error("No 2d context");const u=f.captureStream(0),p=u.getVideoTracks()[0],d=new MediaRecorder(u,{mimeType:i,videoBitsPerSecond:qr(e.exportSettings.bitrate,r,l)*1e6}),m=[];d.ondataavailable=T=>{T.data.size&&m.push(T.data)},t.resetTemporal(),d.start(200);const h=Eo(e),g=Math.max(1,Math.round(s*n)),v=document.createElement("canvas"),b=e.exportSettings.loopClose===!0;let w=null;for(let T=0;T<g;T++){const _=h+So(T/n,s,e.playback.mode,1,!0);o?.(T,g),t.paintFrame(e,_,r,l,v),T===0&&b?w=jr(v):Wr(v,w,T,g,b),c.drawImage(v,0,0,r,l),p.requestFrame?.(),await ln()}if(await new Promise(T=>{d.onstop=()=>T(),d.stop()}),u.getTracks().forEach(T=>T.stop()),!m.length)throw new Error("recorder produced no data");return new Blob(m,{type:i})}function rg(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function lg(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Wr(t,e,i,o,a){if(!a||!e||i===0)return;const n=J2(i,o);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function jr(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function ln(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function cg(t,e,i){return new Promise((o,a)=>{t.toBlob(n=>{n?o(n):a(new Error("frame capture failed"))},e,i)})}async function fg(t,e,i,o,a=!1){const n=e.exportSettings.format;return n==="mp4"?og(t,e,o,a):n==="webm"?Dr(t,e,o,a):n==="sequence"?ag(t,e,o):ig(t,e,i)}function xe(t){const e=I.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Vi(t){if(!t)return;const e=I.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Ne(t,e,i=!0){I.setProject(o=>({...o,layers:o.layers.map(a=>a.id===t?e(a):a)}),i)}function Bt(t,e=!0){I.setProject(i=>{const o=e?i.layers.map(a=>a.id===I.state.ui.selectedLayerId?{...a,sourceId:t.id}:a):i.layers;return{...i,sources:[...i.sources,t],layers:o}}),I.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function dg(t){const e=I.project.sources.filter(s=>s.kind==="audio");for(const s of e)us(s);if(I.setProject(s=>{const r=s.sources.filter(c=>c.kind!=="audio"),l=s.layers.map(c=>e.some(u=>u.id===c.sourceId)?{...c,sourceId:r.find(u=>u.kind!=="audio")?.id??null}:c),f=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:f,playback:{...s.playback,playing:!0,time:0}}}),Ma(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",o=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",a=t.beats?.length?`${t.beats.length} hits`:"",n=[i,o,a].filter(Boolean).join(" · ");I.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function Ka(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&I.patchUi({status:`reading ${i.name}…`});const a=await fh(i);if(a.kind==="audio"){dg(a);continue}if(e){const n=I.state.ui.selectedSourceId;I.setProject(s=>({...s,sources:s.sources.map(r=>r.id===n?{...a,id:r.id}:r)})),I.patchUi({status:`replaced ${i.name}`})}else Bt(a,!0)}catch(o){I.patchUi({status:o instanceof Error?o.message:"import failed"})}}function ug(){I.setProject(e=>{const i=e.sources.find(a=>a.kind!=="audio")?.id??null,o=Jn(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,o]}});const t=I.project.layers.at(-1);I.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function hg(t){I.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const o=JSON.parse(JSON.stringify(i));o.id=Fe("lyr"),o.name=`${i.name}*`,o.effects=o.effects.map(s=>({...s,id:Fe("fx")}));const a=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(a+1,0,o),{...e,layers:n}})}function mg(t){I.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function cn(t){const e=xe(I.project);if(!e)return;const i=Yn(t);Ne(e.id,o=>({...o,effects:[...o.effects,i]})),I.patchUi({selectedEffectId:i.id})}function pg(t,e){Ne(t,i=>({...i,effects:i.effects.filter(o=>o.id!==e)}))}function Vr(t,e,i){Ne(t,o=>{const a=o.effects.findIndex(l=>l.id===e),n=a+i;if(a<0||n<0||n>=o.effects.length)return o;const s=[...o.effects],[r]=s.splice(a,1);return s.splice(n,0,r),{...o,effects:s}})}function gg(t,e){Ne(t,i=>({...i,effects:i.effects.map(o=>o.id===e?{...o,enabled:!o.enabled}:o)}))}function Gi(t,e,i,o,a=!0){Ne(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:o}}:s)}),a)}function Yt(t,e=!1){const i=I.state.ui;(t==="all"||t==="selected")&&I.setProject(a=>({...a,seed:a.seed+1+(Date.now()&255)>>>0}),!1),I.setProject(a=>{let s=Xn(a,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.desk==="poster"&&(s={...s,sources:s.sources.map((r,l)=>Pe(r.generator)?Kn(r,s.seed+l*131>>>0):r)}),t==="all"&&i.includeCritters&&(s=Gn(s)),t==="all"&&i.includeIdol&&(s=zd(s)),s});const o=I.project.layers[0]?.effects.map(a=>a.typeId).join(" · ");I.patchUi({status:`${e?"wacky look":"look"} · ${o||t} · seed ${I.project.seed}`})}function vg(){const t=I.project,e=t.sources.find(a=>a.id===I.state.ui.selectedSourceId);if(e&&Pe(e.generator))return e;const i=xe(t),o=t.sources.find(a=>a.id===i?.sourceId);return o&&Pe(o.generator)?o:t.sources.find(a=>Pe(a.generator))}function bg(){const t=vg();if(!t){I.patchUi({status:"no collage to randomize"});return}const e=I.project.seed+Date.now()>>>0;I.setProject(o=>({...o,sources:o.sources.map(a=>a.id===t.id?Kn(a,e):a)}));const i=I.project.sources.find(o=>o.id===t.id);I.patchUi({status:`field · ${i?.name??"rolled"}`})}function yg(){const t=xe(I.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(I.project.seed+Date.now())%9998;if(e){Gi(t.id,e.id,"seed",i),I.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}cn("critters");const o=xe(I.project),a=Vi(o);o&&a?.typeId==="critters"&&Gi(o.id,a.id,"seed",i),I.patchUi({status:"stamped floaters"})}function wg(){const t=xe(I.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(I.project.seed+Date.now()+17)%9998;if(e){Gi(t.id,e.id,"seed",i),I.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}cn("dancer");const o=xe(I.project),a=Vi(o);o&&a?.typeId==="dancer"&&Gi(o.id,a.id,"seed",i),I.patchUi({status:"stamped idol"})}function kg(){I.setProject(t=>Ud({...t,seed:t.seed+1+(Date.now()&255)>>>0})),I.patchUi({status:"new floater and idol seeds"})}async function Tg(t){const e=I.project,{width:i,height:o}=pn(e.exportSettings.width||1280,e.exportSettings.height||720,It,It);try{const a=await t.capture(e,e.playback.time,i,o,"image/png",Or),n=await dh(a,`print_${Date.now()}.png`);Bt(n,!0),I.patchUi({status:"printed the live frame as a new still"})}catch(a){I.patchUi({status:a instanceof Error?a.message:"print failed"})}}function Gr(t){I.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Kr(){X2(`${I.project.name||"phosphene"}.phos.json`,V2(I.project)),I.patchUi({status:"project downloaded"})}async function _g(t){const e=await t.text(),i=G2(e);I.replace(i),I.patchUi({status:"project loaded — re-drop media if needed"})}function Sg(){const t=prompt("Preset name",`look ${I.project.presets.length+1}`);if(!t)return;const e=yo(I.project,t);I.setProject(i=>({...i,presets:[...i.presets,e]}))}function fn(t){const e=I.project.presets.find(i=>i.id===t);e&&(I.setProject(i=>Pd(i,e)),I.patchUi({status:`preset ${e.name}`}))}function xg(){const t=Md(I.project.presets,I.project.seed+Date.now());if(!t){I.patchUi({status:"no presets saved"});return}fn(t.id)}function Cg(t){const e=I.project.presets.find(i=>i.id===t);e&&I.setProject(i=>({...i,presets:[...i.presets,Ad(e)]}))}function Eg(t){I.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Xr(){const t=I.state.ui,e=xe(I.project),i=Vi(e),o=t.selectedParam?.paramId;if(!e||!i||!o){I.patchUi({status:"select a numeric parameter first"});return}const a=i.params[o];if(typeof a!="number"){I.patchUi({status:"keyframes are numeric"});return}const n={id:Fe("kf"),time:I.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:o,value:a,easing:"smooth"};I.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),I.patchUi({status:`key ${o} @ ${n.time.toFixed(2)}s`})}function Pg(){I.setProject(t=>({...t,keyframes:[]}))}async function Mg(){const t=I.project.sources.find(i=>i.id===I.state.ui.selectedSourceId);if(!t)return;const e=await mh(t);e&&Bt(e,!0)}function Zr(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of I.project.sources)us(e);I.replace(es()),I.patchUi({status:"new piece",prompt:"",generating:!1})}}let Xa=!1,Ki=null;function Ag(t,e){Ki=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny ${I.project.cutEdit?.enabled?"acid":""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
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
          <div class="safe-frame" id="safe-frame"><div class="box" id="safe-frame-box"></div></div>
          <div class="dropveil" id="veil">DROP IMAGE / VIDEO / MP3</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>PHOSPHENE</h3>
        <p>A collage machine. Poster desk is the hypnotic instrument: flat paper, two inks, and Field. It opens on a packed Sailor Snake. Snake holds each silhouette, then occupancy eases; icons blink to the next stamp. Club desk brings back the fly-throughs, Matter, and music moves without deleting them. Field locks one stamp pattern and loops it seamlessly — Sunflower, Orbit, Traffic, Cascade, Checker, Scan, or Snake (sheet with a hole, a C, a sticker frame, giants, then a glyph). Trance ties Tempo, Breathe, and Pack. Size Contrast is the other axis. Rand field only rolls trance-safe settings. The 4:5 overlay is a phone compose guide. Music punches glow, not the path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Drop an MP3 the same way as a picture — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Check <em>effects</em> (top bar, or under Effects on the right) if you also want a short stack from the right panel. Uncheck it for a clean collage. Wacky rolls a thicker stack when effects are on. No dancer. Rolls stay small and slower. When the rolled move is Field, the Field sliders roll too.</li>
          <li><strong>Poster / Club</strong> — Poster hides the second instrument (fly-throughs, Matter, music). Club shows everything. <strong>4:5</strong> draws a phone safe-area on the preview.</li>
          <li><strong>Rand field</strong> picks a new looping pattern and rerolls trance-safe sliders (slow Tempo, high Pack, low Shuffle, committed hero size). Kit, mash, wash, size, and pace stay. Switches the clip to Field if it is on another move. On Poster, Rand all stays on Field.</li>
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
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Bg(t),I.subscribe(()=>{Xa||dn(t)}),dn(t)}async function Ig(t=!1){if(Ki&&!I.state.ui.exporting){I.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),I.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await fg(Ki,I.project,I.project.playback.time,(i,o)=>{I.patchUi({status:`export ${i+1}/${o}`,exporting:!0},!1)},t);I.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){I.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Bg(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const o=i.dataset.act,a=i.dataset.id;if(o==="save"&&Kr(),o==="load"&&t.querySelector("#proj-file")?.click(),o==="scratch"&&Zr(),o==="seed-"&&Gr(-1),o==="seed+"&&Gr(1),o==="rand-all"&&Yt("all"),o==="rand-wacky"&&Yt("all",!0),o==="cut-edit"){const n=!I.project.cutEdit?.enabled;I.setProject(s=>({...s,cutEdit:{enabled:n,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),I.patchUi({status:n?I.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(o==="stamp-chaos"&&kg(),o==="reprint"&&Ki&&Tg(Ki),o==="rand-sel"&&Yt("selected"),o==="rand-field"&&bg(),o==="desk"){const n=i.dataset.desk==="club"?"club":"poster";I.patchUi({desk:n,status:n==="poster"?"desk · poster":"desk · club"})}if(o==="safe-frame"){const n=!I.state.ui.safeFrame;I.patchUi({safeFrame:n,status:n?"4:5 guide on":"4:5 guide off"})}if(o==="two-ink"){const s=Jt()?.collageTwoInk===!1;re(r=>({...r,collageTwoInk:s}),s?"two ink":"full inks")||I.patchUi({status:"two ink"})}if(o==="rand-param"){const n=i.dataset.paramId,s=xe(I.project),r=Vi(s);n&&s&&r&&I.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:n}},!1),Yt("param")}if(o==="help"&&I.patchUi({helpOpen:!I.state.ui.helpOpen}),o==="import"&&t.querySelector("#media-file")?.click(),o==="import-audio"&&t.querySelector("#audio-file")?.click(),o==="replace"&&t.querySelector("#replace-file")?.click(),o==="freeze"&&Mg(),o==="gen"){const n=i.dataset.kind??"plasma",s=Jt(),r=i.dataset.kit??(Pe(n)?zt(s?.collageKit):void 0),l=i.dataset.move??(Pe(n)?Pn(s?.collageMove):void 0),f=!r||!s?.collageKit||r===s.collageKit,c=Kt(n,r,l,Ng(s,f));Bt(c,!0),I.patchUi({status:c.collageMove?`place · ${c.collageMove} · ${c.collageKit??""}${c.collageKitB?` · ${c.collageKitB}`:""}`:c.collageKit?`place · ${n} · ${c.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(o==="mash"){const n=i.dataset.kit??"love",s=Jt();if(s){const r=s.collageKitB===n||s.collageKit===n?void 0:n;re(l=>Ug({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=Kt("wallpaper","sailor","rush",{kitB:n});Bt(r,!0),I.patchUi({status:`mash · sailor · ${n}`})}}if(o==="wash"){const n=i.dataset.hex;n&&(re(s=>({...s,colorA:n}),`wash · ${n}`)||(Bt(Kt("wallpaper","sailor","rush",{wash:n}),!0),I.patchUi({status:`wash · ${n}`})))}if(o==="color-pack"){const n=Ei(i.dataset.pack),s=Jt();if(s){const r=zt(s.collageKit),l=Gt(r,n),f=(s.colorA??"").toLowerCase(),c=l.some(u=>u.toLowerCase()===f);re(u=>({...u,collageColorPack:n,colorA:c?u.colorA:l[0],colorB:dt(r,n)}),`color · ${po[n]}`)}else{const r=Kt("wallpaper","sailor","rush",{colorPack:n});Bt(r,!0),I.patchUi({status:`color · ${po[n]}`})}}if(o==="night"){const s=!Jt()?.collageNight;re(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(Bt(Kt("wallpaper","sailor","rush",{night:!0}),!0),I.patchUi({status:"night wash"}))}if(o==="field-pattern"){const n=ta(i.dataset.pattern);re(s=>({...s,collageFieldPattern:n}),`field · ${bn[n]}`)}if(o==="stamp-critters"&&yg(),o==="stamp-idol"&&wg(),o==="add-layer"&&ug(),o==="dup-layer"&&a&&hg(a),o==="del-layer"&&a&&mg(a),o==="sel-layer"&&a&&I.patchUi({selectedLayerId:a,selectedEffectId:I.project.layers.find(n=>n.id===a)?.effects[0]?.id??null}),o==="sel-fx"&&a&&I.patchUi({selectedEffectId:a}),o==="sel-src"&&a&&I.patchUi({selectedSourceId:a}),o==="bypass"&&a){const n=xe(I.project);n&&gg(n.id,a)}if(o==="fx-up"&&a){const n=xe(I.project);n&&Vr(n.id,a,-1)}if(o==="fx-dn"&&a){const n=xe(I.project);n&&Vr(n.id,a,1)}if(o==="fx-del"&&a){const n=xe(I.project);n&&pg(n.id,a)}if(o==="key"&&Xr(),o==="key-clear"&&Pg(),o==="pst-save"&&Sg(),o==="pst-rand"&&xg(),o==="pst-load"&&a&&fn(a),o==="pst-dup"&&a&&Cg(a),o==="pst-del"&&a&&Eg(a),o==="export"&&Ig(),o==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));I.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),I.patchUi({status:`${n}s clip ready — hit Export`})}if(o==="exp-aspect"&&a){const n=sn.find(s=>s.id===a);if(n){const s=Math.max(I.project.exportSettings.width,I.project.exportSettings.height,At),r=Hr(n.rw,n.rh,Math.min(It,Math.max(At,s)));I.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(o==="exp-size"){const n=Number(i.dataset.long||At),s=I.project,r=Lr(s.exportSettings.width,s.exportSettings.height,n);I.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:n>=It?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(o==="exp-aspect-src"){const n=I.project,s=xe(n),r=n.sources.find(u=>u.id===(s?.sourceId??n.sources[0]?.id)),l=r?.kind==="audio"?n.sources.find(u=>u.kind!=="audio"):r,f=Math.max(n.exportSettings.width,n.exportSettings.height,At),c=Lr(l?.width??1280,l?.height??720,Math.min(It,f));I.setProject(u=>({...u,exportSettings:{...u.exportSettings,width:c.width,height:c.height}}))}if(o==="play"&&(Ma(),I.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),o==="use-src"&&a){if(I.project.sources.find(r=>r.id===a)?.kind==="audio")return;const s=xe(I.project);s&&Ne(s.id,r=>({...r,sourceId:a}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(_g(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Ka(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Ka(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(Ka(i.files,!1),i.value=""),i.id==="quality"&&I.setProject(o=>({...o,quality:i.value})),i.id==="add-fx"&&(i.value&&cn(i.value),i.value=""),i.id==="blend"){const o=xe(I.project);o&&Ne(o.id,a=>({...a,blendMode:i.value}))}if(i.id==="mask-type"){const o=xe(I.project);o&&Ne(o.id,a=>({...a,mask:{...a.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&fn(i.value),i.id==="exp-format"&&I.setProject(o=>({...o,exportSettings:{...o.exportSettings,format:i.value}})),i.id==="play-mode"&&I.setProject(o=>({...o,playback:{...o.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&I.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&I.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&I.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,o=I.project;if((i.id==="inc-critters"||i.id==="inc-critters-rail")&&I.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&I.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&I.patchUi({includeEffects:i.checked}),i.id==="seed"&&I.setProject(a=>({...a,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&I.setProject(a=>({...a,randomAmount:Number(i.value)}),!1),i.id==="speed"&&I.setProject(a=>({...a,playback:{...a.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&I.setProject(a=>({...a,playback:{...a.playback,loop:i.checked}}),!1),i.id==="loop-close"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&I.setProject(a=>({...a,playback:{...a.playback,freeze:i.checked}}),!1),i.id==="time"&&I.setProject(a=>({...a,playback:{...a.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const a=xe(o);a&&Ne(a.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const a=xe(o);a&&Ne(a.id,n=>({...n,enabled:i.checked}),!1)}for(const a of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${a}`&&I.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[a]:Number(i.value)}}),!1),i.id===`lfb-${a}`){const n=xe(o);n&&Ne(n.id,s=>({...s,feedback:{...s.feedback,[a]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const a=xe(o),n=i.id.slice(3);a&&n in a.transform&&Ne(a.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Xa=!0;const a=Fg(i.dataset.fxType||"",i.dataset.param),n=Rg(i,a);Gi(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),I.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&re(a=>({...a,collageScale:Ti(Number(i.value))}),void 0,!0),i.id==="collage-density"&&re(a=>({...a,collageDensity:_i(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&re(a=>({...a,collagePace:pi(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&re(a=>({...a,collageChainTravel:gi(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&re(a=>({...a,collageChainMorph:vi(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&re(a=>({...a,collageChainVary:bi(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&re(a=>({...a,collageChainSmooth:yi(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&re(a=>({...a,collageSpringStrength:oa(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&re(a=>({...a,collageSpringDamp:na(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&re(a=>({...a,collageSpringDist:sa(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&re(a=>({...a,collageSpringElast:ra(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&re(a=>({...a,collageSpringBreak:la(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&re(a=>({...a,collageFlowScale:ca(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&re(a=>({...a,collageFlowTurb:fa(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&re(a=>({...a,collageFlowEvolve:da(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&re(a=>({...a,collageFlowForce:ua(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&re(a=>({...a,collageFlowDepth:ha(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&re(a=>({...a,collageBoidCohere:ma(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&re(a=>({...a,collageBoidSep:pa(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&re(a=>({...a,collageBoidAlign:ga(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&re(a=>({...a,collageBoidRadius:va(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&re(a=>({...a,collageBoidSpeed:ba(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&re(a=>({...a,collagePoleCount:ya(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&re(a=>({...a,collagePoleAttract:wa(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&re(a=>({...a,collagePoleRepel:ka(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&re(a=>({...a,collagePoleSpeed:Ta(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&re(a=>({...a,collagePoleFalloff:_a(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&re(a=>({...a,collagePoleSwitch:Sa(Number(i.value))}),void 0,!0),i.id==="collage-field-strength"&&re(a=>({...a,collageFieldStrength:ti(Number(i.value))}),void 0,!0),i.id==="collage-field-scale"&&re(a=>({...a,collageFieldScale:Ya(Number(i.value))}),void 0,!0),i.id==="collage-field-trance"&&re(a=>({...a,...gn(Number(i.value))}),void 0,!0),i.id==="collage-field-evolve"&&re(a=>({...a,collageFieldEvolve:ii(Number(i.value))}),void 0,!0),i.id==="collage-field-density"&&re(a=>({...a,collageFieldDensity:ai(Number(i.value))}),void 0,!0),i.id==="collage-field-density-scale"&&re(a=>({...a,collageFieldDensityScale:Ja(Number(i.value))}),void 0,!0),i.id==="collage-field-density-evolve"&&re(a=>({...a,collageFieldDensityEvolve:eo(Number(i.value))}),void 0,!0),i.id==="collage-field-flow"&&re(a=>({...a,collageFieldFlow:to(Number(i.value))}),void 0,!0),i.id==="collage-field-curl"&&re(a=>({...a,collageFieldCurl:oi(Number(i.value))}),void 0,!0),i.id==="collage-field-flow-scale"&&re(a=>({...a,collageFieldFlowScale:io(Number(i.value))}),void 0,!0),i.id==="collage-field-radius"&&re(a=>({...a,collageFieldRadius:ao(Number(i.value))}),void 0,!0),i.id==="collage-field-scale-amp"&&re(a=>({...a,collageFieldScaleAmp:oo(Number(i.value))}),void 0,!0),i.id==="collage-field-min-scale"&&re(a=>({...a,collageFieldMinScale:ni(Number(i.value))}),void 0,!0),i.id==="collage-field-max-scale"&&re(a=>({...a,collageFieldMaxScale:si(Number(i.value))}),void 0,!0),i.id==="collage-field-perturb"&&re(a=>({...a,collageFieldPerturb:ri(Number(i.value))}),void 0,!0),i.id==="collage-field-warp"&&re(a=>({...a,collageFieldWarp:li(Number(i.value))}),void 0,!0),i.id==="collage-field-sparsity"&&re(a=>({...a,collageFieldSparsity:ci(Number(i.value))}),void 0,!0),i.id==="collage-field-contrast"&&re(a=>({...a,collageFieldContrast:fi(Number(i.value))}),void 0,!0),i.id==="collage-field-motion"&&re(a=>({...a,collageFieldMotion:di(Number(i.value))}),void 0,!0),i.id==="exp-q"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&I.setProject(a=>({...a,exportSettings:{...a.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Xa&&(Xa=!1,dn(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),I.state.ui.dropActive||I.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&I.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),I.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Ka(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Ma(),I.setProject(o=>({...o,playback:{...o.playback,playing:!o.playback.playing}}))),(e.key==="r"||e.key==="R")&&Yt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Yt("all",!0),(e.key==="k"||e.key==="K")&&Xr(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Zr()),e.key==="?"&&I.patchUi({helpOpen:!I.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Kr()))})}function Fg(t,e){return Je(t)?.params.find(i=>i.id===e)}function Rg(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function dn(t){const{project:e,ui:i}=I.state,o=t.querySelector("#proj-name"),a=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");o&&document.activeElement!==o&&(o.value=e.name),a&&document.activeElement!==a&&(a.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const f=t.querySelector("#inc-idol");f&&(f.checked=i.includeIdol);const c=t.querySelector("#inc-fx");c&&(c.checked=i.includeEffects);const u=t.querySelector("#inc-fx-stack");u&&(u.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(p=>{p.classList.toggle("acid",!!e.cutEdit?.enabled)}),Qr(t),zg(t.querySelector("#rail")),Og(t.querySelector("#stack")),Lg(t.querySelector("#transport"))}function zg(t){const e=I.project,i=I.state.ui,o=i.desk==="club",a=e.sources.find(n=>n.id===i.selectedSourceId&&Pe(n.generator))??e.sources.find(n=>Pe(n.generator));t.innerHTML=`
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
      ${St.map(n=>`<button class="btn tiny ${a?.collageKitB===n?"acid":""}" data-act="mash" data-kit="${n}">${Dl(n)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${Ci.map(n=>`<button class="btn tiny ${Ei(a?.collageColorPack)===n?"acid":""}" data-act="color-pack" data-pack="${n}">${po[n]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${Gt(zt(a?.collageKit),a?.collageColorPack).map(n=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===n.toLowerCase()?"on":""}" data-act="wash" data-hex="${n}" style="background:${n}" title="${n}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
      <button class="btn tiny ${a?.collageTwoInk!==!1?"acid":""}" data-act="two-ink" title="Paper plus one or two inks.">Two ink</button>
    </div>
    <div class="sec">Desk</div>
    <div class="row">
      <button class="btn tiny ${i.desk!=="club"?"acid":""}" data-act="desk" data-desk="poster" title="Hypnotic Field instrument. Hides fly-throughs.">Poster</button>
      <button class="btn tiny ${i.desk==="club"?"acid":""}" data-act="desk" data-desk="club" title="Show fly-throughs, Matter, and music moves.">Club</button>
      <button class="btn tiny ${i.safeFrame?"acid":""}" data-act="safe-frame" title="4:5 phone compose guide">4:5</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${Ti(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${Ti(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${_i(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${_i(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${pi(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${pi(a?.collagePace).toFixed(2)}" />
      <span></span></div>
    ${o?`<div class="sec">Move</div>
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
    ${a?.collageMove==="chain"?`<div class="sec">Chain</div>
    <div class="param"><span>Movement Speed</span>
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${gi(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${gi(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${vi(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${vi(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${bi(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${bi(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${yi(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${yi(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
`:""}
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, size, and pace.">Rand field</button>
    </div>
    ${a?.collageMove==="field"?`<div class="sec">Pattern</div>
    <div class="row">
      ${["auto","sunflower","orbit","traffic","cascade","checker","scan","snake"].map(n=>`<button class="btn tiny ${ta(a.collageFieldPattern)===n?"acid":""}" data-act="field-pattern" data-pattern="${n}">${bn[n]}</button>`).join("")}
    </div>
    ${ce("collage-field-trance","Trance",Ji(a.collageFieldTrance),0,2,.05)}
    ${ce("collage-field-evolve","Tempo",ii(a.collageFieldEvolve),.08,2.2,.05)}
    ${ce("collage-field-strength","Spread",ti(a.collageFieldStrength),.2,2.2,.05)}
    ${ce("collage-field-density","Pack",ai(a.collageFieldDensity),0,2.2,.05)}
    ${ce("collage-field-sparsity","Symmetry",ci(a.collageFieldSparsity),0,2,.05)}
    ${ce("collage-field-perturb","Shuffle",ri(a.collageFieldPerturb),0,2,.05)}
    ${ce("collage-field-curl","Swirl",oi(a.collageFieldCurl),0,2.2,.05)}
    ${ce("collage-field-warp","Breathe",li(a.collageFieldWarp),0,2.2,.05)}
    ${ce("collage-field-motion","Ripple",di(a.collageFieldMotion),0,2,.05)}
    ${ce("collage-field-contrast","Size Contrast",fi(a.collageFieldContrast),0,2.2,.05)}
    ${ce("collage-field-min-scale","Stamp Size",ni(a.collageFieldMinScale),.12,1,.02)}
    ${ce("collage-field-max-scale","Hero Size",si(a.collageFieldMaxScale),.6,3.2,.05)}`:""}
    ${o?`<div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>`:""}
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${ce("collage-spring-strength","Spring Strength",oa(a.collageSpringStrength),.2,2.2,.05)}
    ${ce("collage-spring-damp","Damping",na(a.collageSpringDamp),.08,1,.02)}
    ${ce("collage-spring-dist","Connection Distance",sa(a.collageSpringDist),.12,.72,.02)}
    ${ce("collage-spring-elast","Elasticity",ra(a.collageSpringElast),.2,2.2,.05)}
    ${ce("collage-spring-break","Break / Reconnect",la(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${ce("collage-flow-scale","Field Scale",ca(a.collageFlowScale),.28,2.4,.05)}
    ${ce("collage-flow-turb","Turbulence",fa(a.collageFlowTurb),0,2,.05)}
    ${ce("collage-flow-evolve","Evolution Speed",da(a.collageFlowEvolve),.08,2.2,.05)}
    ${ce("collage-flow-force","Force",ua(a.collageFlowForce),.2,2.2,.05)}
    ${ce("collage-flow-depth","Depth Influence",ha(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${ce("collage-boid-cohere","Cohesion",ma(a.collageBoidCohere),.1,2.2,.05)}
    ${ce("collage-boid-sep","Separation",pa(a.collageBoidSep),.15,2.4,.05)}
    ${ce("collage-boid-align","Alignment",ga(a.collageBoidAlign),.1,2.2,.05)}
    ${ce("collage-boid-radius","Perception Radius",va(a.collageBoidRadius),.08,.55,.01)}
    ${ce("collage-boid-speed","Speed",ba(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${ce("collage-pole-count","Pole Count",ya(a.collagePoleCount),1,5,1)}
    ${ce("collage-pole-attract","Attraction",wa(a.collagePoleAttract),.15,2.2,.05)}
    ${ce("collage-pole-repel","Repulsion",ka(a.collagePoleRepel),.1,2.2,.05)}
    ${ce("collage-pole-speed","Pole Speed",Ta(a.collagePoleSpeed),.12,2.2,.05)}
    ${ce("collage-pole-falloff","Falloff",_a(a.collagePoleFalloff),.6,2.8,.05)}
    ${ce("collage-pole-switch","Polarity Switching",Sa(a.collagePoleSwitch),0,2,.05)}`:""}
    ${o?`<div class="sec">Music</div>
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
    <div class="status" style="margin-top:4px">${o?"Club desk. Fly-throughs, Matter, and music are here. Field still loops one pattern. Music punches glow, not the path.":"Poster desk. Flat paper, two inks, Field on loop. Trance ties Tempo + Breathe + Pack. Size Contrast is the other axis. Switch to Club for fly-throughs."}</div>
    <div style="margin-top:8px">
      ${e.sources.map(n=>{const s=n.kind==="audio"?`beat-sync · ${ei(n.duration||0)}${n.bpm&&n.bpm>40?` · ${n.bpm}bpm`:""}`:`${n.kind} ${n.width}×${n.height}`,r=n.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${n.id}">use</button>`;return`
        <div class="thumb ${n.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${n.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Qe(n.name)}</b><span>${s}</span></div>
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
        <div class="hd"><span>${Qe(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${n.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Og(t){const e=I.project,i=xe(e),o=Vi(i),a=Cd();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${Qe(n.name)}</span>
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
        <select id="blend">${gh.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
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
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${I.state.ui.includeEffects?"checked":""}/> include in randomizer</div>
      ${i.effects.map((n,s)=>`
        <div class="fx ${n.id===o?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Qe(Je(n.typeId)?.name??n.typeId)}</span>
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
        ${Ed.map(n=>{const s=(a[n.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${o?`
        <hr class="div" />
        <div class="sec">${Qe(Je(o.typeId)?.name??"params")} · ${Qe(Je(o.typeId)?.description??"")}</div>
        ${(Je(o.typeId)?.params??[]).map(n=>Hg(i.id,o,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||Ne(i.id,f=>{const c=[...f.effects],[u]=c.splice(r,1);return c.splice(l,0,u),{...f,effects:c}})})})}function Hg(t,e,i){const o=e.params[i.id]??i.default,a=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${a} ${o?"checked":""}/> ${Qe(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Qe(i.label)}</span><input type="color" ${a} value="${Qe(String(o))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Qe(i.label)}</span>
      <select ${a}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===o?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Qe(i.label)}</span>
    <input type="range" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(o)}" />
    <input type="number" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(o).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Lg(t){const e=I.project,i=e.playback,o=e.exportSettings,a=I.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
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
        <span class="status" id="clock">${ei(i.time)} / ${ei(n)}</span>
        <span class="status" id="status-line">${I.state.ui.status}</span>
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
        ${sn.map(r=>`<button class="btn tiny ${Y2(o.width,o.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${o.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${o.height}" title="height" />
        ${(()=>{const r=Math.max(o.width,o.height);return`<button class="btn tiny ${r<=At?"acid":""}" data-act="exp-size" data-long="${At}">720</button>
        <button class="btn tiny ${r>At?"acid":""}" data-act="exp-size" data-long="${It}">1080</button>`})()}
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map(r=>`<option ${o.format===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2,4,6,8,16,32].map(r=>`<button class="btn tiny ${Number(o.duration)===r?"acid":""}" data-act="clip" data-secs="${r}" ${a?"disabled":""}>${r}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${o.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${o.loopClose?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${a?"disabled":""}>${a?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),f=(r.clientX-l.left)/l.width*n;I.setProject(c=>({...c,playback:{...c.playback,time:Math.max(0,f)}}))})}function ce(t,e,i,o,a,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${o}" max="${a}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${o}" max="${a}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Jt(){const t=I.project,e=t.sources.find(a=>a.id===I.state.ui.selectedSourceId);if(e&&Pe(e.generator))return e;const i=xe(t),o=t.sources.find(a=>a.id===i?.sourceId);return o&&Pe(o.generator)?o:t.sources.find(a=>Pe(a.generator))}function Qr(t){const e=t.querySelector("#safe-frame"),i=t.querySelector("#safe-frame-box"),o=t.querySelector("#view");if(!e||!i||!o)return;const a=I.state.ui.safeFrame;if(e.classList.toggle("on",a),!a)return;const n=o.getBoundingClientRect(),s=4/5;let r=n.width,l=n.height;r/Math.max(l,1)>s?r=l*s:l=r/s,i.style.width=`${Math.max(8,r)}px`,i.style.height=`${Math.max(8,l)}px`,i.style.left=`${(n.width-r)/2}px`,i.style.top=`${(n.height-l)/2}px`}function Ng(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,fieldStrength:t.collageFieldStrength,fieldScale:t.collageFieldScale,fieldEvolve:t.collageFieldEvolve,fieldDensity:t.collageFieldDensity,fieldDensityScale:t.collageFieldDensityScale,fieldDensityEvolve:t.collageFieldDensityEvolve,fieldFlow:t.collageFieldFlow,fieldCurl:t.collageFieldCurl,fieldFlowScale:t.collageFieldFlowScale,fieldRadius:t.collageFieldRadius,fieldScaleAmp:t.collageFieldScaleAmp,fieldMinScale:t.collageFieldMinScale,fieldMaxScale:t.collageFieldMaxScale,fieldPerturb:t.collageFieldPerturb,fieldWarp:t.collageFieldWarp,fieldSparsity:t.collageFieldSparsity,fieldContrast:t.collageFieldContrast,fieldMotion:t.collageFieldMotion,fieldPattern:t.collageFieldPattern,fieldTrance:t.collageFieldTrance,twoInk:t.collageTwoInk,wash:e?t.colorA:void 0}}function Ug(t){return!t.collageKit||!t.collageMove?t:{...t,name:Qn(t.collageMove,t.collageKit,t.collageKitB)}}function re(t,e,i=!1){const o=Jt();return o?(I.setProject(a=>({...a,sources:a.sources.map(n=>n.id===o.id?t(n):n)}),!i),e&&I.patchUi({status:e},!i),!0):!1}function Qe(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ei(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Yr(t,e){if(I.state.ui.exporting)return;const i=1,o=e.getBoundingClientRect(),a=Math.max(16,Math.floor(o.width*i)),n=Math.max(16,Math.floor(o.height*i));(t.width!==a||t.height!==n)&&(t.width=a,t.height=n);const s=t.closest(".shell");s&&Qr(s)}function qg(t,e,i){const o=t.querySelector("#hud");o&&(o.textContent=`PHOSPHENE  ${ei(i)}  ${e.toFixed(0)}FPS  ${I.project.quality.toUpperCase()}`);const a=Math.max(I.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/a*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${ei(i)} / ${ei(a)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=I.state.ui.status)}const Jr=window;Jr.__phospheneMark=!0;const el=document.querySelector("#app");if(!el)throw new Error("#app missing");const un=el,hn=document.createElement("canvas");async function Dg(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new nh(hn)}catch(l){const f=document.querySelector("#boot-note");f?f.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:un.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}Ag(un,t),Jr.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Yr(hn,e)).observe(e),Yr(hn,e);let o=performance.now(),a=60,n=0,s=performance.now();function r(l){const f=Math.min(.08,(l-o)/1e3);o=l;const c=I.state.ui.exporting,u=I.project,p=Qd(u,u.playback.time),d=Pi(u);if(!c&&u.playback.playing&&!u.playback.freeze){const m=d?.audio&&u.playback.mode==="forward"&&!d.audio.paused&&Number.isFinite(d.audio.currentTime);if(d?.audio&&Po(d.audio,u.playback),m){const h=d.audio.currentTime;I.setProject(g=>({...g,playback:{...g.playback,time:h}}),!1)}else{let h=u.playback.time+f*p;const g=Math.max(u.duration,.001);u.playback.loop?h=(h%g+g)%g:h=Math.min(h,g),I.setProject(v=>({...v,playback:{...v.playback,time:h}}),!1),d?.audio&&u.playback.mode!=="forward"&&Po(d.audio,{...u.playback,playing:!1,time:h})}}else d?.audio&&Po(d.audio,{...u.playback,playing:!1});for(const m of I.project.sources)if(m.kind==="video"&&m.video&&!I.project.playback.freeze){const h=So(I.project.playback.time,m.duration||m.video.duration||1,I.project.playback.mode,1,I.project.playback.loop);ph(m,h,{playing:I.project.playback.playing,freeze:I.project.playback.freeze,mode:I.project.playback.mode,speed:I.project.playback.speed})}if(!c)try{t.render(I.project,I.project.playback.time),t.cutStatus&&t.cutStatus!==I.state.ui.status&&I.patchUi({status:t.cutStatus},!1)}catch(m){I.patchUi({status:m instanceof Error?m.message:"render error"},!1)}n++,l-s>400&&(a=n*1e3/(l-s),s=l,n=0),qg(un,a,I.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}Dg()})();

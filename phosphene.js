(function(){"use strict";function Te(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function I(t,e,i){return Math.min(i,Math.max(e,t))}function ct(t,e=16){return Math.max(e,Math.round(t)&-2)}function Jn(t,e,i,a){const o=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:ct(t*o),height:ct(e*o)}}function De(t,e,i){return t+(e-t)*i}function Vl(t){const e=I(t,0,1);return e*e*(3-2*e)}const Gl="field";function At(t){return t===Gl}function hi(t){return I(t??1.15,.2,2.2)}function Ao(t){return I(t??.95,.28,2.4)}function mi(t){return I(t??1,.08,2.2)}function pi(t){return I(t??1.15,0,2.2)}function Fo(t){return I(t??.9,.28,2.4)}function Io(t){return I(t??1.1,.08,2.2)}function Bo(t){return I(t??.85,0,2.2)}function gi(t){return I(t??.4,0,2.2)}function Ro(t){return I(t??.8,.28,2.4)}function zo(t){return I(t??.35,0,2.2)}function Oo(t){return I(t??.9,0,2.4)}function Ho(t){return I(t??.055,.02,.22)}function Lo(t){return I(t??.55,.25,2.2)}function ma(t){return I(t??0,0,.9)}function No(t){return I(t??1.15,.25,2.2)}function Uo(t){return I(t??.85,0,2.2)}function vi(t){return I(t??.62,.12,1)}function bi(t){return I(t??1.85,.6,3.2)}function yi(t){return I(t??.12,0,2)}function wi(t){return I(t??1.1,0,2.2)}function ki(t){return I(t??.85,0,2)}function Ti(t){return I(t??1.25,0,2.2)}function _i(t){return I(t??.45,0,2)}function Kl(t){const e=vi(t?.minScale),i=Math.max(e+.08,bi(t?.maxScale));return{fieldStrength:hi(t?.fieldStrength),fieldScale:Ao(t?.fieldScale),fieldEvolve:mi(t?.fieldEvolve),density:pi(t?.density),densityScale:Fo(t?.densityScale),densityEvolve:Io(t?.densityEvolve),flow:Bo(t?.flow),curl:gi(t?.curl),flowScale:Ro(t?.flowScale),attract:zo(t?.attract),repel:Oo(t?.repel),radius:Ho(t?.radius),inertia:Lo(t?.inertia),damp:ma(t?.damp),maxV:No(t?.maxV),scaleAmp:Uo(t?.scaleAmp),minScale:e,maxScale:i,perturb:yi(t?.perturb),warp:wi(t?.warp),sparsity:ki(t?.sparsity),contrast:Ti(t?.contrast),motion:_i(t?.motion)}}const pa=1.6,ga=2.399963229728653,ye=Math.PI*2,Xl=6,xi=["sunflower","rings","spiro","ripple","march","kaleido","shapeshift","vortex","orbit","weave","fan","braid","tiles","petal","coil","traffic","cascade","circuit","chevron","checker","shear","scan","snake"],va={auto:"Auto",sunflower:"Sunflower",rings:"Rings",spiro:"Spirograph",ripple:"Ripple",march:"March",kaleido:"Kaleido",shapeshift:"Shapeshift",vortex:"Vortex",orbit:"Orbit",weave:"Weave",fan:"Fan",braid:"Braid",tiles:"Tiles",petal:"Petal",coil:"Coil",traffic:"Traffic",cascade:"Cascade",circuit:"Circuit",chevron:"Chevron",checker:"Checker",shear:"Shear",scan:"Scan",snake:"Snake"};function Jt(t){return xi.includes(t??"")?t:"auto"}function Zl(t,e){const i=Jt(t);return i!=="auto"?i:xi[(Math.imul(e>>>0^1540483477,2654435761)>>>0)%xi.length]}function Ql(t,e=0){let i=Xl/t.fieldEvolve;if(e>40){const a=240/e;let o=1;for(const n of[1,2,4,8,16,32])Math.abs(Math.log(n*a/i))<Math.abs(Math.log(o*a/i))&&(o=n);i=o*a}return i}function Yl(t,e,i=0,a=0){const n=(i>40?t-a:t)/Ql(e,i);return n-Math.floor(n)}const Jl=["sheet","bands","bloom"],qo=["glyph","clusters","line","giants"];function ei(t){return t*t*t*(t*(t*6-15)+10)}function Do(t,e,i){let a=0;for(const n of i)a+=n;let o=t()*a;for(let n=0;n<e.length;n++)if(o-=i[n],o<=0)return e[n];return e[e.length-1]}function ec(t){const e=Te((t>>>0)*31+7>>>0),i=Do(e,Jl,[.5,.25,.25]),a=[.4,.3,.15,.15],o=Do(e,qo,a),n=Do(e,qo,a.map((s,r)=>qo[r]===o?0:s));return[i,o,n]}function tc(t,e){let a,o,n=0,s=I(Math.floor(t*1023),0,1023),r=I(Math.floor(e*1023),0,1023);for(let l=1024/2;l>=1;l=Math.floor(l/2))if(a=(s&l)>0?1:0,o=(r&l)>0?1:0,n+=l*l*(3*a^o),o===0){a===1&&(s=l-1-s,r=l-1-r);const c=s;s=r,r=c}return n/(1024*1024)}function ic(){return{x:[],y:[],d:[]}}function Nt(t,e,i,a){t.x.push(e),t.y.push(i),t.d.push(a)}function Si(t,e){const i=1+(t()-.5)*.55*e.contrast;return t()<.07*e.contrast?i*(1.5+t()*.6):i}function ge(t){return .86+t.density*.2}function ac(t,e,i,a,o){const n=2*i,s=Math.sqrt(n/(e*.92)),r=Math.max(2,Math.round(1/s)),l=Math.max(2,Math.ceil(e/r)),c=1/r,u=2*i/l,d=[];for(let f=0;f<l;f++)for(let g=0;g<r;g++){const h=f%2*.5,p=-.5+(g+.5+h*.6)*c+(t()-.5)*c*.22,v=-i+(f+.5)*u+(t()-.5)*u*.22;d.push([p,v])}for(;d.length>e;)d.splice(Math.floor(t()*d.length),1);const m=Math.max(c,u)*1.1*ge(a)*(a.minScale/.62);for(const[f,g]of d)Nt(o,f,g,m*Si(t,a))}function oc(t,e,i,a,o){const n=3+Math.floor(t()*4),s=(t()-.5)*.5,r=.02+t()*.05,l=4+t()*6,c=Math.ceil(e/n),u=2,m=1.04/Math.ceil(c/u),f=2*i/n,g=Math.min(m*1.25,f*.48)*ge(a)*(a.minScale/.62);let h=0;for(let p=0;p<n&&h<e;p++){const v=-i+(p+.5)*f,b=t()*Math.PI*2;for(let y=0;y<c&&h<e;y++,h++){const k=Math.floor(y/u),_=y%u,S=-.52+(k+.5+_*.5)*m,M=v+(_-.5)*g*.78+S*s+Math.sin(S*l+b)*r;Nt(o,S,M,g*Si(t,a))}}}function nc(t,e,i,a,o){const n=t()>.6,s=n?2:1,l=Math.min(.5/s,i)*(.82+a.fieldStrength*.12)/Math.sqrt(e/s),c=l*1.4*ge(a)*(a.minScale/.62),u=t()*Math.PI*2;for(let d=0;d<e;d++){const m=n?d%2:0,f=n?Math.floor(d/2):d,g=n?m===0?-.25:.25:0,h=l*Math.sqrt(f+.5),p=f*ga*(m===0?1:-1)+u,v=.72+.5*Math.sqrt((f+.5)/(e/s));Nt(o,g+Math.cos(p)*h,Math.sin(p)*h,c*v*Si(t,a))}}function $o(t,e){const i=1-e,a=i*i*i*t[0]+3*i*i*e*t[2]+3*i*e*e*t[4]+e*e*e*t[6],o=i*i*i*t[1]+3*i*i*e*t[3]+3*i*e*e*t[5]+e*e*e*t[7],n=3*i*i*(t[2]-t[0])+6*i*e*(t[4]-t[2])+3*e*e*(t[6]-t[4]),s=3*i*i*(t[3]-t[1])+6*i*e*(t[5]-t[3])+3*e*e*(t[7]-t[5]);return[a,o,n,s]}function sc(t){let e=0,[i,a]=$o(t,0);for(let o=1;o<=24;o++){const[n,s]=$o(t,o/24);e+=Math.hypot(n-i,s-a),i=n,a=s}return e}function es(t,e,i,a,o,n,s){const r=e.map(sc),l=r.reduce((d,m)=>d+m,0)||1,c=o*ge(n);let u=0;for(let d=0;d<e.length;d++){const m=d===e.length-1?a-u:Math.round(a*r[d]/l);if(m<=0)continue;const f=Math.max(1,Math.round(i(d)/(c*.74))),g=Math.max(1,Math.ceil(m/f));for(let h=0;h<m;h++){const p=Math.floor(h/f),v=h%f,b=(p+.5+v%2*.35)/g,[y,k,_,S]=$o(e[d],Math.min(1,b)),M=Math.hypot(_,S)||1,A=1-.55*Math.pow(Math.abs(2*b-1),3),E=(v-(f-1)/2)*c*.74*A;Nt(s,y-S/M*E,k+_/M*E,c*(.7+.3*A)*Si(t,n))}u+=m}}function rc(t,e,i,a,o){const n=3+Math.floor(t()*3),s=.4*(.72+a.fieldStrength*.24),r=i*.92*(.72+a.fieldStrength*.24),l=[];for(let u=0;u<n;u++){const d=(t()*2-1)*s,m=(t()*2-1)*r,f=t()*Math.PI*2,g=.36+t()*.4,h=I(d+Math.cos(f)*g,-s*1.1,s*1.1),p=I(m+Math.sin(f)*g,-r*1.1,r*1.1),v=(t()-.5)*.36,b=-(p-m),y=h-d;l.push([d,m,d+(h-d)*.33+b*v,m+(p-m)*.33+y*v,d+(h-d)*.66+b*v*(t()>.5?1:-.6),m+(p-m)*.66+y*v*(t()>.5?1:-.6),h,p])}const c=l.map(()=>.09+t()*.08);es(t,l,u=>c[u],e,.036*(a.minScale/.62),a,o)}function lc(t,e,i,a,o){const n=t()>.55?2:1,s=[];for(let r=0;r<n;r++){const l=(t()*2-1)*i*.7,c=(t()*2-1)*i*.7,u=(t()-.5)*i*2.4*(.6+a.fieldStrength*.35);s.push([-.46,l,-.16,l+u,.16,c-u,.46,c])}es(t,s,()=>.05,e,.03*(a.minScale/.62),a,o)}function cc(t,e,i,a,o){const n=4+Math.floor(t()*6),s=[],r=.16;for(let g=0;s.length<n&&g<400;g++){const h=(t()*2-1)*.4,p=(t()*2-1)*i*.8;s.every(([v,b])=>Math.hypot(v-h,b-p)>r)&&s.push([h,p])}const l=s.map(()=>.4+t()),c=l.reduce((g,h)=>g+h,0),u=2*i*.3*(.6+a.fieldStrength*.35),d=Math.sqrt(u/e)*1.25*ge(a),m=d*.56;let f=0;for(let g=0;g<s.length;g++){const h=g===s.length-1?e-f:Math.round(e*l[g]/c),p=1+(t()-.5)*.6,v=t()*Math.PI*2;for(let b=0;b<h;b++){const y=m*Math.sqrt(b+.5),k=b*ga+v;Nt(o,s[g][0]+Math.cos(k)*y*p,s[g][1]+Math.sin(k)*y/p,d*Si(t,a))}f+=h}}function fc(t,e,i,a,o){const n=I(6+Math.floor(t()*9),3,e),s=Math.max(2,Math.round(Math.sqrt(n/(2*i)))),r=Math.max(1,Math.ceil(n/s)),l=.9/s,c=2*i*.86/r,u=Math.min(l,c)*.95*(a.maxScale/1.85),d=e/n;for(let m=0;m<n;m++){const f=m%s,g=Math.floor(m/s),h=-.45+(f+.5+g%2*.35)*l+(t()-.5)*l*.55,p=-i*.86+(g+.5)*c+(t()-.5)*c*.5,v=Math.round(m*d),b=Math.round((m+1)*d);for(let y=v;y<b;y++)Nt(o,h,p,y===v?u*(.82+t()*.3):0)}}const uc={sheet:ac,bands:oc,bloom:nc,glyph:rc,clusters:cc,giants:fc,line:lc};function dc(t,e,i,a,o,n){const s=Te((e>>>0^Math.imul(i+1,2654435761))>>>0),r=ic();for(uc[t](s,a,o,n,r);r.x.length<a;)Nt(r,r.x[r.x.length-1]??0,r.y[r.y.length-1]??0,0);const l=n.perturb*.22,c=r.x.map((m,f)=>tc(m+.5,(r.y[f]+o)/Math.max(1,2*o))+l*(s()-.5)),u=c.map((m,f)=>f).sort((m,f)=>c[m]-c[f]),d={kind:t,x:new Float32Array(a),y:new Float32Array(a),d:new Float32Array(a),bend:t==="glyph"?.028*n.warp:t==="line"?.034*n.warp:.006,phase:s()*Math.PI*2};for(let m=0;m<a;m++){const f=u[m];d.x[m]=I(r.x[f],-.5,.5),d.y[m]=I(r.y[f],-o,o),d.d[m]=r.d[f]}return d}function He(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function _e(t){return t.minScale/.62}function xe(t,e){const i=1+(He(t*3.1+7)-.5)*.5*e.contrast,a=He(t*5.7+3)<.035*e.contrast?e.maxScale/1.85*(1.5+He(t*2.3+1)*.5):1;return i*a}function Fe(t,e,i){return He(t*9.13+1)<i.perturb*.5?t:e}function it(t){return(He(t+17)-.5)*.14}function Ci(t){return Math.round(I(3+t.sparsity*2.4,3,9))}function hc(t,e){const{n:i,R:a,th:o,p:n,seed:s}=t,l=a*(.62+n.fieldStrength*.36)/Math.sqrt(i),c=l*2.1*ge(n)*_e(n),u=ga+n.curl*.006*Math.sin(o),d=s%2?o:-o,m=[8,13,21][s%3];for(let f=0;f<i;f++){const g=(f+.5)/i,h=Math.sin(o*2-g*ye*1.5),p=l*Math.sqrt(f+.5)*(1+n.warp*.06*h),v=f*u+d,b=c*(.55+.75*Math.sqrt(g))*(1+n.motion*.35*h)*xe(f,n);e(f,Math.cos(v)*p,Math.sin(v)*p,b,it(f),Fe(f,f%m,n))}}function mc(t,e){const{n:i,R:a,th:o,p:n,seed:s}=t,r=Math.round(I(4+n.fieldStrength*3.5,3,12)),l=a*1.02,c=Array.from({length:r},(p,v)=>l*(v+.75)/(r+.25)),u=c.reduce((p,v)=>p+v,0),d=l/r,m=Math.min(ye*u/i,d)*1.25*ge(n)*_e(n),f=Ci(n),g=He(s%997)*ye;let h=0;for(let p=0;p<r&&h<i;p++){const v=p===r-1?i-h:Math.max(3,Math.round(i*c[p]/u)),b=p%2?1:-1,y=1+Math.round(n.curl*2*(1-p/r)),k=Math.sin(o-p*.8),_=c[p]*(1+n.warp*.045*k);for(let S=0;S<v&&h<i;S++,h++){const M=S/v*ye+b*y*o+p*g,A=_+n.motion*d*.35*Math.sin(f*M-o*2),E=m*(1+n.motion*.2*k)*xe(h,n);e(h,Math.cos(M)*A,Math.sin(M)*A,E,it(h),Fe(h,p*2+S%2,n))}}}function pc(t,e){const{n:i,hh:a,th:o,u:n,p:s}=t,r=Ci(s),l=I(.42+s.warp*.1*Math.sin(o),.1,.8),c=Math.min(a*.94,.47),u=Math.min(.47,c*1.75),d=[1,.56].map(p=>p*(.7+s.fieldStrength*.26)),m=d.reduce((p,v)=>p+v,0),f=2,g=(p,v)=>[(Math.cos(p)+l*Math.cos((r-1)*p))/(1+l)*u*v,(Math.sin(p)-l*Math.sin((r-1)*p))/(1+l)*c*v];let h=0;for(let p=0;p<d.length&&h<i;p++){const v=d[p],b=p===d.length-1?i-h:Math.round(i*v/m),y=Math.max(1,Math.ceil(b/f));let k=0,[_,S]=g(0,v);for(let E=1;E<=96;E++){const[R,D]=g(E/96*ye,v);k+=Math.hypot(R-_,D-S),_=R,S=D}const M=Math.min(.09,k/y*1.35*ge(s)*_e(s)),A=p%2?-1:1;for(let E=0;E<b&&h<i;E++,h++){const R=Math.floor(E/f),D=E%f,x=(R+D*.5)/y+A*n,B=(x-Math.floor(x))*ye+p*.7,[T,U]=g(B,v),[G,L]=g(B+.002,v),V=Math.hypot(G-T,L-U)||1,q=(D-.5)*M*.8*(1+s.curl*.6*Math.sin(r*B+o*2));e(h,T-(L-U)/V*q,U+(G-T)/V*q,M*xe(h,s),it(h),Fe(h,p*3+R%3,s))}}}function gc(t,e){const{n:i,hh:a,R:o,th:n,p:s,seed:r}=t,l=1.1,c=2*a*1.1,u=Math.sqrt(l*c/i),d=Math.max(2,Math.round(l/u)),m=Math.max(2,Math.ceil(i/d)),f=l/d,g=c/m,h=Math.max(f,g)*1.05*ge(s)*_e(s),p=r%3,v=He(r%991)*ye,b=p===2?[[-.24,0],[.24,0]]:[[0,0]],y=ye*(2+s.fieldStrength*1.3)/o,k=Math.min(f,g)*(.25+s.motion*.9)/b.length,_=s.curl*.8;let S=0;for(let M=0;M<m&&S<i;M++)for(let A=0;A<d&&S<i;A++,S++){const E=-l/2+(A+.25+M%2*.5)*f,R=-c/2+(M+.5)*g;let D=0,x=0,B=0;const T=(G,L,V)=>{const q=y*G-n*2,X=Math.sin(q),O=Math.cos(q);D+=k*(X*L-_*O*V),x+=k*(X*V+_*O*L),B+=X/b.length};if(p===1)T(E*Math.cos(v)+R*Math.sin(v),Math.cos(v),Math.sin(v));else for(const[G,L]of b){const V=E-G,q=R-L,X=Math.hypot(V,q)||1e-6;T(X,V/X,q/X)}const U=h*(1+.4*s.warp*B)*xe(S,s);e(S,E+D,R+x,U,it(S),Fe(S,(M+A)%3+3*(M%2),s))}}function vc(t,e){const{n:i,hh:a,u:o,th:n,p:s,seed:r}=t,l=2*a*1.04,c=Math.sqrt(1.1*l/i),u=Math.max(2,Math.round(l/c)),d=Math.max(3,Math.ceil(i/u)),m=l/u,f=m*1.1*ge(s)*_e(s)*pa*.6+.02,g=Math.max(d*c,1+2*f),h=Math.min(m,g/d)*1.1*ge(s)*_e(s),p=s.curl*.25*(r%2?1:-1);let v=0;for(let b=0;b<u&&v<i;b++){const y=b%2?1:-1,k=-l/2+(b+.5)*m;for(let _=0;_<d&&v<i;_++,v++){const S=(_+.5)/d+y*o,M=(S-Math.floor(S)-.5)*g,A=Math.sin(M/g*ye*2+n*2+b*.6),E=k+A*m*.45*s.motion+M*p,R=h*(1+s.warp*.18*Math.sin(M/g*ye*3-n*3))*xe(v,s);e(v,M,E,R,it(v),Fe(v,b*2+_%2,s))}}}function bc(t,e){const{n:i,R:a,u:o,th:n,p:s,seed:r}=t,l=Ci(s)+1,c=Math.PI/l,u=Math.max(1,Math.floor(i/(2*l))),d=a*(.6+s.fieldStrength*.18),m=ye/l*o*(r%2?1:-1),f=d*Math.sqrt(c/(2*u))*1.2*ge(s)*_e(s);let g=0;for(let h=0;h<u;h++){const p=He(h*1.7+.3)+o,v=p-Math.floor(p),b=Math.sqrt(v)*d,y=Math.sin(He(h*4.1+2)*ye+n+v*5),k=c*(.5+.42*y)+s.curl*v*1.6,_=ei(I(v/.06,0,1))*ei(I((1-v)/.08,0,1)),S=f*(.5+.9*v)*_*(1+s.motion*.3*Math.sin(n*2+h))*xe(h,s);for(let M=0;M<l;M++){const A=M*2*c+m,E=A+k,R=A-k,D=E+Math.PI/2;e(g++,Math.cos(E)*b,Math.sin(E)*b,S,D,h),e(g++,Math.cos(R)*b,Math.sin(R)*b,S,2*A-D+Math.PI,h,-1)}}}function Mi(t){return Math.min(.48,t.hh*.98)}function yc(t,e){const{n:i,th:a,p:o,seed:n}=t,s=Mi(t)*(.86+o.fieldStrength*.14),r=s/Math.sqrt(i),l=r*2*ge(o)*_e(o),c=.8+o.curl*1.6,u=n%2?1:-1;for(let d=0;d<i;d++){const m=(d+.5)/i,f=r*Math.sqrt(d+.5)*(1+o.warp*.05*Math.sin(a*2-m*4)),g=1.15/(.18+f/Math.max(1e-4,s)),h=d*ga+u*(a*g+c*Math.log(1+f*6)),p=l*(.55+.8*Math.sqrt(m))*(1+o.motion*.28*Math.sin(a*2+m*5))*xe(d,o);e(d,Math.cos(h)*f,Math.sin(h)*f,p,it(d),Fe(d,d%13,o))}}function wc(t,e){const{n:i,th:a,p:o,seed:n}=t,s=Mi(t),r=Math.round(I(3+o.fieldStrength*2.2,3,8)),l=Array.from({length:r},(d,m)=>m+1.2),c=l.reduce((d,m)=>d+m,0);let u=0;for(let d=0;d<r&&u<i;d++){const m=d===r-1?i-u:Math.max(4,Math.round(i*l[d]/c)),f=s*((d+.85)/(r+.2)),g=(d+n)%2?1:-1,h=1+d*.28*(.5+o.curl*.5),p=1+o.motion*.06*Math.sin(a*2+d),v=ye*f/m*2.6*ge(o)*_e(o);for(let b=0;b<m&&u<i;b++,u++){const y=b/m*ye+g*h*a,k=f*p;e(u,Math.cos(y)*k,Math.sin(y)*k,v*xe(u,o),it(u),Fe(u,d*2+b%2,o))}}}function kc(t,e){const{n:i,hh:a,u:o,th:n,p:s}=t,r=Math.floor(i/2),l=1.18,c=2*a*1.18,u=Math.max(3,Math.round(Math.sqrt(r*l/c))),d=Math.max(2,Math.ceil(r/u)),m=l/u,f=c/d,g=Math.min(m,f)*1.05*ge(s)*_e(s),h=s.motion*.22;let p=0;const v=(b,y)=>{for(let k=0;k<b&&p<i;k++,p++){const _=k%u,S=Math.floor(k/u),M=(_+.5)/u+(y?o:0),A=(S+.5)/d+(y?0:o),E=(M-Math.floor(M)-.5)*l,R=(A-Math.floor(A)-.5)*c,D=h*Math.sin((y?R:E)*8+n*2);e(p,E+(y?0:D*m),R+(y?D*f:0),g*xe(p,s),it(p),Fe(p,(y?0:4)+(_+S)%3,s))}};v(r,!0),v(i-r,!1)}function Tc(t,e){const{n:i,th:a,p:o,seed:n}=t,s=Ci(o),r=Mi(t),l=4,c=Math.max(3,Math.floor(i/(s*l))),u=Math.min(r/c,ye*r/(s*c))*1.55*ge(o)*_e(o),d=(n%2?1:-1)*a;let m=0;for(let f=0;f<s;f++)for(let g=0;g<c;g++)for(let h=0;h<l&&m<i;h++,m++){const p=(g+.5+h%2*.35)/c,v=o.motion*.1*Math.sin(a*3+f+p*4),b=f/s*ye+d+v+o.curl*.2*p,y=p*r*(1+o.warp*.04*Math.sin(a*2+f)),k=.45+.55*p,_=(h-(l-1)/2)*u*.72*k;e(m,Math.cos(b)*y-Math.sin(b)*_,Math.sin(b)*y+Math.cos(b)*_,u*k*xe(m,o),b+Math.PI/2,Fe(m,f,o))}}function _c(t,e){const{n:i,hh:a,u:o,th:n,p:s}=t,r=3,l=Math.ceil(i/r),c=a*.62*(.7+s.fieldStrength*.28),u=2+Math.round(s.warp*1.2),d=.042*ge(s)*_e(s),f=1+2*(d*pa*.7+.03);let g=0;for(let h=0;h<r;h++){const p=h/r*ye;for(let v=0;v<l&&g<i;v++,g++){const b=(v+.5)/l+o,y=(b-Math.floor(b)-.5)*f,k=(v+.5)/l,_=c*Math.sin(ye*u*k+p+s.curl*.4*Math.sin(n))+s.motion*a*.08*Math.sin(n*2+h);e(g,y,_,d*xe(g,s),it(g),Fe(g,h*2+v%2,s))}}}function xc(t,e){const{n:i,hh:a,th:o,p:n}=t,s=1.04,r=2*a*1.04,l=Math.sqrt(s*r/i),c=Math.max(2,Math.round(s/l)),u=Math.max(2,Math.ceil(i/c)),d=s/c,m=r/u,f=Math.max(d,m)*.92*ge(n)*_e(n),g=Math.min(d,m)*(.28+n.motion*.32);let h=0;for(let p=0;p<u&&h<i;p++)for(let v=0;v<c&&h<i;v++,h++){const b=-s/2+(v+.25+p%2*.5)*d,y=-r/2+(p+.5)*m,_=((p+v)%2?1:-1)*o+He(h)*ye,S=f*(1+n.warp*.12*Math.sin(o*2+h))*xe(h,n);e(h,b+Math.cos(_)*g,y+Math.sin(_)*g,S,it(h),Fe(h,(p+v)%5,n))}}function Sc(t,e){const{n:i,th:a,p:o,seed:n}=t,s=Ci(o),r=Mi(t),l=(n%2?1:-1)*a,c=.88+.12*Math.sin(a*2)*o.warp,u=r*Math.sqrt(ye/i)*1.15*ge(o)*_e(o);for(let d=0;d<i;d++){const m=d/i*ye,f=m+l,g=.22+.78*Math.abs(Math.cos(s*m)),h=r*g*c*(1+o.motion*.06*Math.sin(s*m+a)),p=u*(.55+.7*g)*xe(d,o);e(d,Math.cos(f)*h,Math.sin(f)*h,p,f+Math.PI/2,Fe(d,Math.floor(m*s/ye%s),o))}}function Cc(t,e){const{n:i,th:a,p:o,seed:n}=t,s=Mi(t),l=(2.2+o.fieldStrength*1.1)*ye,c=(n%2?1:-1)*a,u=s/Math.sqrt(i)*2*ge(o)*_e(o),d=2;for(let m=0;m<i;m++){const f=m%d,g=Math.floor(m/d),h=(g+.5)/Math.ceil(i/d)*l,p=s*(h/l),v=h+c+f*Math.PI+o.curl*.4*Math.sin(a),b=u*(.5+.85*(h/l))*(1+o.motion*.2*Math.sin(a*2+f))*xe(m,o);e(m,Math.cos(v)*p,Math.sin(v)*p,b,v+Math.PI/2,Fe(m,f*3+g%3,o))}}function Wo(t){return t-Math.floor(t)}function Ut(t,e){return(Wo(t)-.5)*e}function Mc(t,e,i){const a=2*e,o=2*i;let n=Wo(t)*2*(a+o);return n<a?[-e+n,-i]:(n-=a,n<o?[e,-i+n]:(n-=o,n<a?[e-n,i]:(n-=a,[-e,i-n])))}function Ec(t,e){const{n:i,hh:a,u:o,p:n}=t,s=Math.floor(i/2),r=1.2,l=2*a*1.2,c=Math.max(3,Math.round(Math.sqrt(s*l/r))),u=Math.max(3,Math.ceil(s/c)),d=r/u,m=l/c,f=Math.min(d,m)*1.05*ge(n)*_e(n);let g=0;for(let _=0;_<c&&g<s;_++){const S=-l/2+(_+.5)*m,M=_%2?1:-1,A=1+_%3*.35*n.curl;for(let E=0;E<u&&g<s;E++,g++)e(g,Ut((E+.5)/u+M*A*o,r),S,f*xe(g,n),0,Fe(g,_,n))}const h=i-g,p=Math.max(3,Math.round(Math.sqrt(h*r/l))),v=Math.max(3,Math.ceil(h/p)),b=r/p,y=l/v,k=Math.min(b,y)*1.05*ge(n)*_e(n);for(let _=0;_<p&&g<i;_++){const S=-r/2+(_+.5)*b,M=_%2?1:-1,A=1+_%3*.35*n.curl;for(let E=0;E<v&&g<i;E++,g++)e(g,S,Ut((E+.5)/v+M*A*o,l),k*xe(g,n),0,Fe(g,8+_,n))}}function Pc(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=1.04,l=2*a*1.22,c=Math.sqrt(r*l/i),u=Math.max(2,Math.round(r/c)),d=Math.max(3,Math.ceil(i/u)),m=r/u,f=l/d,g=Math.min(m,f)*1.08*ge(n)*_e(n),h=s%2?1:-1;let p=0;for(let v=0;v<u&&p<i;v++){const b=-r/2+(v+.5)*m,y=(v%2?1:-1)*h,k=1+v%4*.25*n.curl;for(let _=0;_<d&&p<i;_++,p++)e(p,b,Ut((_+.5)/d+y*k*o,l),g*xe(p,n),0,Fe(p,v,n))}}function Ac(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=Math.round(I(3+n.fieldStrength*2.4,3,8)),l=.48,c=a*.96,u=Array.from({length:r},(h,p)=>{const v=(p+.7)/(r+.15);return 2*(2*l*v+2*c*v)}),d=u.reduce((h,p)=>h+p,0),m=Math.min(l,c)/r*1.35*ge(n)*_e(n),f=s%2?1:-1;let g=0;for(let h=0;h<r&&g<i;h++){const p=(h+.7)/(r+.15),v=l*p,b=c*p,y=h===r-1?i-g:Math.max(8,Math.round(i*u[h]/d)),k=((h+s)%2?1:-1)*f,_=1+h*.2*n.curl;for(let S=0;S<y&&g<i;S++,g++){const[M,A]=Mc((S+.5)/y+k*_*o,v,b);e(g,M,A,m*xe(g,n),0,Fe(g,h,n))}}}function Fc(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=Math.round(I(4+n.fieldStrength*3,4,11)),l=Math.hypot(1,2*a)+.28,c=Math.min(1,2*a)*1.15/r,u=Math.max(4,Math.ceil(i/r)),d=Math.min(l/u,c)*1.2*ge(n)*_e(n),m=s%2?1:-1,f=Math.SQRT1_2;let g=0;for(let h=0;h<r&&g<i;h++){const p=(h-(r-1)/2)*c,v=(h%2?1:-1)*m,b=1+h%3*.3*n.curl;for(let y=0;y<u&&g<i;y++,g++){const k=Ut((y+.5)/u+v*b*o,l),_=(k+p)*f,S=(k-p)*f;e(g,_,S,d*xe(g,n),0,Fe(g,h,n))}}}function Ic(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=1.22,l=2*a*1.22,c=Math.sqrt(r*l/i),u=Math.max(4,Math.round(r/c)),d=Math.max(4,Math.ceil(i/u)),m=r/u,f=l/d,g=Math.min(m,f)*.98*ge(n)*_e(n),h=s%2?1:-1;let p=0;for(let v=0;v<d&&p<i;v++)for(let b=0;b<u&&p<i;b++,p++){const y=-r/2+(b+.5)*m,k=-l/2+(v+.5)*f,_=(v+b)%2===0,S=h*(_?1:-1),M=_?Ut((b+.5)/u+S*o,r):y,A=_?k:Ut((v+.5)/d+S*o,l);e(p,M,A,g*xe(p,n),0,Fe(p,_?b%3:3+v%3,n))}}function Bc(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=1.22,l=2*a*1.04,c=Math.sqrt(r*l/i),u=Math.max(4,Math.round(r/c)),d=Math.max(3,Math.ceil(i/u)),m=r/u,f=l/d,g=Math.min(m,f)*1.05*ge(n)*_e(n),h=s%2?1:-1;let p=0;for(let v=0;v<d&&p<i;v++){const b=-l/2+(v+.5)*f,y=h*(1+v*(.35+n.curl*.4));for(let k=0;k<u&&p<i;k++,p++)e(p,Ut((k+.5)/u+y*o,r),b,g*xe(p,n),0,Fe(p,v%4,n))}}function Rc(t,e){const{n:i,hh:a,u:o,p:n}=t,s=Math.max(4,Math.round(I(5+n.fieldStrength*3,4,12))),r=2*a/s*.95*ge(n)*_e(n),l=r*pa*.7+.04,c=1+2*l,u=-a*.96,d=a*.96,m=(d-u)/Math.max(1,s-1),f=[],g=(b,y)=>{f.push(b,y)};for(let b=0;b<s;b++){const y=u+b*m;b%2===0?(g(-c/2,y),g(c/2,y)):(g(c/2,y),g(-c/2,y))}g(-c/2,d+l),g(-c/2,u-l);const h=f.length/2-1,p=[];let v=0;for(let b=0;b<h;b++){const y=f[2*(b+1)]-f[2*b],k=f[2*(b+1)+1]-f[2*b+1],_=Math.hypot(y,k);p.push(_),v+=_}v=v||1;for(let b=0;b<i;b++){let y=Wo((b+.5)/i+o*.55)*v,k=0;for(;k<h-1&&y>p[k];)y-=p[k],k++;const _=y/Math.max(1e-6,p[k]),S=f[2*k]+(f[2*(k+1)]-f[2*k])*_,M=f[2*k+1]+(f[2*(k+1)+1]-f[2*k+1])*_;e(b,S,M,r*xe(b,n),0,Fe(b,k%5,n))}}function jo(t,e,i,a,o,n){const s=Math.abs(t-i)-o,r=Math.abs(e-a)-n;return Math.min(Math.max(s,r),0)+Math.hypot(Math.max(s,0),Math.max(r,0))}function ts(t,e,i,a,o){return Math.hypot(t-i,e-a)-o}function is(t,e,i,a,o,n,s){const r=t-i,l=e-a,c=o-i,u=n-a,d=I((r*c+l*u)/(c*c+u*u||1e-8),0,1);return Math.hypot(r-c*d,l-u*d)-s}function as(t,e,i,a){let o=1e9;for(let n=0;n<i.length-2;n+=2)o=Math.min(o,is(t,e,i[n],i[n+1],i[n+2],i[n+3],a));return o}function ti(t,e=.04){return ei(I(.5-t/(e*2),0,1))}function zc(t,e,i){const a=Math.sqrt(2*e/Math.max(1,t)),o=Math.max(2,Math.round(1/a)),n=Math.max(2,Math.ceil(t/o)),s=1/o,r=2*e/n,l=[];let c=0;for(let u=0;u<n&&c<t;u++){const d=u%2*.5;for(let m=0;m<o&&c<t;m++,c++){const f=(He(c*1.71+i)-.5)*s*.46,g=(He(c*2.93+i)-.5)*r*.46;l.push({x:I(-.5+(m+.5+d*.55)*s+f,-.5,.5),y:I(-e+(u+.5)*r+g,-e,e)})}}return l}function os(t,e,i){const a=[];for(const o of e){let n=-1,s=1e9;for(let r=0;r<t.length;r++){if(i[r])continue;const l=Math.hypot(t[r].x-o.x,t[r].y-o.y);l<s&&(s=l,n=r)}n>=0&&(i[n]=!0,a.push({i:n,x:o.x,y:o.y,r:o.r}))}return a}function Oc(t,e,i){const a=Te(t>>>0^2654435761),o=.47*(.86+i.fieldStrength*.12),n=e*.93*(.86+i.fieldStrength*.12),s=.062+i.density*.01,r={occ:(V,q)=>ti(jo(V,q,0,0,o,n),.05),giants:null},l=a()>.5?1:-1,c=(a()-.45)*n*.35,u={occ:(V,q)=>{const X=jo(V,q,0,0,o,n),O=jo(V,q,l*o*.42,c,o*.58,n*.52);return ti(Math.max(X,-O),.03)},giants:null},d=[],m=12+Math.floor(a()*6);for(let V=0;V<m;V++)d.push({x:(a()*2-1)*o*.82,y:(a()*2-1)*n*.82,r:.045+a()*.055});const f={occ:(V,q)=>{let X=1e9;for(const O of d)X=Math.min(X,ts(V,q,O.x,O.y,O.r));return ti(X,.035)},giants:null},g=(a()-.5)*o*.18,h=(a()-.4)*n*.12,p=(.2+a()*.05)*Math.max(o,n)/.42,v=[],b=6+Math.floor(a()*3);for(let V=0;V<b;V++){const q=V/b*ye+a()*.35,X=p+.16+a()*.14;v.push([g+Math.cos(q)*p*.35,h+Math.sin(q)*p*.35,g+Math.cos(q)*X,h+Math.sin(q)*X,.05+a()*.03])}const y={occ:(V,q)=>{let X=ts(V,q,g,h,p);for(const O of v)X=Math.min(X,is(V,q,O[0],O[1],O[2],O[3],O[4]));return ti(X,.035)},giants:null},k=8+Math.floor(a()*4),_=3,S=Math.ceil(k/_),M=[];for(let V=0;V<k;V++){const q=V%_,X=Math.floor(V/_);M.push({x:-o*.7+(q+.5)*(1.4*o)/_+(a()-.5)*o*.16,y:-n*.7+(X+.5)*(1.4*n)/S+(a()-.5)*n*.16,r:.155+a()*.07})}const A={occ:()=>0,giants:M},E=Math.floor(a()*3);let R;E===0?R=[-o*.92,-n*.28,-o*.05,-n*.22,o*.08,n*.08,-o*.02,n*.88,o*.22,n*.12,o*.88,-n*.55]:E===1?R=[-o*.9,n*.42,o*.55,n*.48,o*.52,n*.88,o*.52,-n*.88,o*.55,-n*.42,-o*.9,-n*.48]:R=[-o*.85,n*.15,-o*.15,n*.72,o*.35,n*.55,o*.15,0,o*.72,-n*.35,o*.2,-n*.82,-o*.55,-n*.55];const D=s*1.15,x={occ:(V,q)=>ti(as(V,q,R,D),.04),giants:null},B=[],T=2+(a()>.5?1:0),U=n*(.42+a()*.18),G=a()*ye;for(let V=0;V<=10;V++){const q=V/10;B.push(-o+q*2*o,Math.sin(q*Math.PI*T+G)*U)}return[r,u,f,y,A,x,{occ:(V,q)=>ti(as(V,q,B,s*1.05),.035),giants:null}]}function Hc(t,e){const{n:i,hh:a,u:o,p:n,seed:s}=t,r=Oc(s,a,n),l=r.length,c=o*l,u=Math.min(l-1,Math.floor(c)),d=c-u,m=ei(I((d-.34)/.66,0,1)),f=r[u],g=r[(u+1)%l],h=zc(i,a,s),p=x=>{const B=(x%1+1)%1;return B<.5?B*4-1:3-B*4},v=p(o)*.05*(.4+n.motion),b=p(o*.5+.25)*a*.08*(.4+n.motion),y=new Array(i).fill(!1),k=new Array(i).fill(!1),_=f.giants?os(h,f.giants,y):[],S=g.giants?os(h,g.giants,k):[],M=new Map(_.map(x=>[x.i,x])),A=new Map(S.map(x=>[x.i,x])),R=Math.sqrt(2*a/Math.max(1,i))*1.82*ge(n)*_e(n),D=1.35+n.warp*2.1;for(let x=0;x<i;x++){const B=h[x].x,T=h[x].y,U=f.occ(B,T)*(1-m)+g.occ(B,T)*m;let G=I(B+v,-.5,.5),L=I(T+b,-a,a),V=R*U;const q=M.get(x),X=A.get(x);if(q||X){const be=X??q;if(be){const Ae=q&&X?1:X?m:1-m;G=I(B+v+(be.x-B)*Ae,-.5,.5),L=I(T+b+(be.y-T)*Ae,-a,a),V=Math.max(V,be.r*(n.maxScale/1.85)*Ae)}}U<.32&&!q&&!X&&(V=0);const O=D*o+He(x*3.1)*(.35+n.perturb*2.2),H=O-Math.floor(O),oe=ei(I((H-.78)/.16,0,1)),ie=Math.floor(O)*13+x,Y=V*(q||X?Math.max(.92,xe(x,n)):xe(x,n));e(x,G,L,Y,0,ie,1,ie+13,oe)}}function ns(t,e,i,a,o){const n=t.bend+a.motion*.008;if(n<=0)return[t.x[e],t.y[e]];const s=t.x[e],r=t.y[e];return[s+n*Math.sin(r*4.2+i+t.phase)+n*.4*Math.sin(s*2.3-i),r+n*Math.cos(s*3.6+i+t.phase*1.3)*Math.min(1,o*2)]}function Lc(t,e,i){const{n:a,hh:o,u:n,th:s,p:r}=t,l=Math.min(2,Math.floor(n*3)),c=ei(I((n*3-l-.3)/.7,0,1)),u=e[l],d=e[(l+1)%3],m=r.curl*.24;for(let f=0;f<a;f++){const[g,h]=ns(u,f,s*2,r,o),[p,v]=ns(d,f,s*2,r,o),b=p-g,y=v-h,k=m*Math.sin(Math.PI*c)*(He(f)>.5?1:-1);i(f,g+b*c-y*k,h+y*c+b*k,u.d[f]+(d.d[f]-u.d[f])*c,it(f),f)}}class Nc{sig="";shapes=[];poses=[];posesAt(e,i,a,o,n,s=0,r=0,l="auto"){const c=Math.max(.2,o),u=.5/c,d=Zl(l,a),m=Yl(i,n,s,r),f={n:e,hh:u,R:Math.hypot(.5,u),u:m,th:m*ye,seed:a>>>0,p:n};this.poses.length!==e&&(this.poses=Array.from({length:e},()=>({x:0,y:0,px:0,rot:0,alpha:0,squash:1})));for(const v of this.poses)v.alpha=0;const g=Math.max(1,c),h=c*c,p=(v,b,y,k,_,S,M=1,A,E=0)=>{const R=this.poses[v];R&&(R.x=b,R.y=y*h,R.px=Math.max(0,k)*g*pa,R.rot=_,R.alpha=k>.004?1:0,R.squash=1,R.flip=M,R.charge=S,R.chargeB=A,R.morph=E)};if(d==="sunflower")hc(f,p);else if(d==="rings")mc(f,p);else if(d==="spiro")pc(f,p);else if(d==="ripple")gc(f,p);else if(d==="march")vc(f,p);else if(d==="kaleido")bc(f,p);else if(d==="vortex")yc(f,p);else if(d==="orbit")wc(f,p);else if(d==="weave")kc(f,p);else if(d==="fan")Tc(f,p);else if(d==="braid")_c(f,p);else if(d==="tiles")xc(f,p);else if(d==="petal")Sc(f,p);else if(d==="coil")Cc(f,p);else if(d==="traffic")Ec(f,p);else if(d==="cascade")Pc(f,p);else if(d==="circuit")Ac(f,p);else if(d==="chevron")Fc(f,p);else if(d==="checker")Ic(f,p);else if(d==="shear")Bc(f,p);else if(d==="scan")Rc(f,p);else if(d==="snake")Hc(f,p);else{const v=`${a}|${e}|${c.toFixed(3)}|${Object.values(n).map(b=>b.toFixed(3)).join(",")}`;v!==this.sig&&(this.sig=v,this.shapes=ec(a).map((b,y)=>dc(b,a,y,e,u,n))),Lc(f,this.shapes,p)}return this.poses}}const Uc=["spring","flow","boids","poles"];function Vo(t){return!!t&&Uc.includes(t)}function ba(t){return I(t??1,.2,2.2)}function ya(t){return I(t??.55,.08,1)}function wa(t){return I(t??.34,.12,.72)}function ka(t){return I(t??1,.2,2.2)}function Ta(t){return I(t??2.1,1.15,3.6)}function _a(t){return I(t??1,.28,2.4)}function xa(t){return I(t??.8,0,2)}function Sa(t){return I(t??.7,.08,2.2)}function Ca(t){return I(t??1,.2,2.2)}function Ma(t){return I(t??.7,0,1.6)}function Ea(t){return I(t??1,.1,2.2)}function Pa(t){return I(t??1,.15,2.4)}function Aa(t){return I(t??1,.1,2.2)}function Fa(t){return I(t??.22,.08,.55)}function Ia(t){return I(t??1,.25,2.2)}function Ba(t){return I(Math.round(t??3),1,5)}function Ra(t){return I(t??1,.15,2.2)}function za(t){return I(t??.85,.1,2.2)}function Oa(t){return I(t??.8,.12,2.2)}function Ha(t){return I(t??1.4,.6,2.8)}function La(t){return I(t??.45,0,2)}function qc(t){return{springStrength:ba(t?.springStrength),springDamp:ya(t?.springDamp),springDist:wa(t?.springDist),springElast:ka(t?.springElast),springBreak:Ta(t?.springBreak),flowScale:_a(t?.flowScale),flowTurb:xa(t?.flowTurb),flowEvolve:Sa(t?.flowEvolve),flowForce:Ca(t?.flowForce),flowDepth:Ma(t?.flowDepth),boidCohere:Ea(t?.boidCohere),boidSep:Pa(t?.boidSep),boidAlign:Aa(t?.boidAlign),boidRadius:Fa(t?.boidRadius),boidSpeed:Ia(t?.boidSpeed),poleCount:Ba(t?.poleCount),poleAttract:Ra(t?.poleAttract),poleRepel:za(t?.poleRepel),poleSpeed:Oa(t?.poleSpeed),poleFalloff:Ha(t?.poleFalloff),poleSwitch:La(t?.poleSwitch)}}function Dc(t,e,i,a,o,n,s){const r=o*3.15,l=a,c=n;let u=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),d=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),m=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const f=Math.hypot(u,d,m)||1;return[u/f,d/f,m/f]}function $c(t,e,i,a){const o=i*(.42+t*.15),n=Math.sin(e*o+t*1.3)*.34+Math.sin(e*o*.37+t)*.08,s=Math.cos(e*o*.86+t*1.9)*.28+Math.cos(e*o*.29+t*.7)*.07,r=Math.sin(e*o*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:n,y:s,z:r,sign:c}}function Wc(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function jc(t,e,i,a){const o=e.length,n={move:t,n:o,lastClock:i,px:new Float32Array(o),py:new Float32Array(o),pz:new Float32Array(o),vx:new Float32Array(o),vy:new Float32Array(o),vz:new Float32Array(o),homeX:new Float32Array(o),homeY:new Float32Array(o),homeZ:new Float32Array(o),links:[],linkKey:""};for(let s=0;s<o;s++){const[r,l,c]=Wc(e[s]);n.px[s]=r,n.py[s]=l,n.pz[s]=c,n.homeX[s]=r,n.homeY[s]=l,n.homeZ[s]=c,n.vx[s]=(e[s].vx-.5)*.08,n.vy[s]=(e[s].vy-.5)*.08,n.vz[s]=0}return t==="spring"&&ss(n,a.springDist),n}function ss(t,e,i=5){const a=t.n,o=[],n=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,u=Math.min(s,c),d=Math.max(s,c),m=`${u}:${d}`;n.has(m)||(n.add(m),o.push({a:u,b:d,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=o,t.linkKey=`${a}|${e.toFixed(3)}`,o}function Ge(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Vc(t,e,i,a){const o=t.n,n=`${o}|${a.springDist.toFixed(3)}`;t.linkKey!==n&&ss(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,u=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const f of t.links){const g=t.px[f.b]-t.px[f.a],h=t.py[f.b]-t.py[f.a],p=t.pz[f.b]-t.pz[f.a],v=Math.hypot(g,h,p)||1e-5;if(f.on&&v>f.rest*l){f.on=!1;continue}if(!f.on&&v<a.springDist*.92&&(f.on=!0),!f.on)continue;const b=v-f.rest,y=s*b,k=g/v,_=h/v,S=p/v;t.vx[f.a]+=k*y*e,t.vy[f.a]+=_*y*e,t.vz[f.a]+=S*y*e,t.vx[f.b]-=k*y*e,t.vy[f.b]-=_*y*e,t.vz[f.b]-=S*y*e}const m=Math.exp(-r*7*e);for(let f=0;f<o;f++){const g=t.homeX[f]-t.px[f],h=t.homeY[f]-t.py[f],p=t.homeZ[f]-t.pz[f];t.vx[f]+=g*.35*e,t.vy[f]+=h*.35*e,t.vz[f]+=p*.35*e;const v=Math.hypot(t.px[f]-c,t.py[f]-u,t.pz[f]-d);if(v<.24){const b=(.24-v)/.24;t.vx[f]+=(c-t.px[f])*b*1.8*e,t.vy[f]+=(u-t.py[f])*b*1.8*e,t.vz[f]+=(d-t.pz[f])*b*1.1*e}t.vx[f]*=m,t.vy[f]*=m,t.vz[f]*=m,t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=Ge(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=Ge(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=Ge(t.pz[f],t.vz[f],.36)}}function Gc(t,e,i,a){const o=i*a.flowEvolve,n=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=Dc(t.px[s],t.py[s],t.pz[s],o,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*n*e,t.vy[s]+=l*n*e,t.vz[s]+=c*n*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=Ge(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=Ge(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=Ge(t.pz[s],t.vz[s],.34)}}function Kc(t,e,i){const a=t.n,o=i.boidRadius,n=o*o,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let u=0;u<a;u++){let d=0,m=0,f=0,g=0,h=0,p=0,v=0,b=0,y=0,k=0;for(let _=0;_<a;_++){if(u===_)continue;const S=t.px[_]-t.px[u],M=t.py[_]-t.py[u],A=t.pz[_]-t.pz[u],E=S*S+M*M+A*A;if(E>n||E<1e-8)continue;k++,d+=t.px[_],m+=t.py[_],f+=t.pz[_],v+=t.vx[_],b+=t.vy[_],y+=t.vz[_];const R=Math.sqrt(E),D=(o-R)/o;g-=S/R*D,h-=M/R*D,p-=A/R*D}k&&(r[u]+=(d/k-t.px[u])*i.boidCohere*1.15,l[u]+=(m/k-t.py[u])*i.boidCohere*1.15,c[u]+=(f/k-t.pz[u])*i.boidCohere*1.15,r[u]+=g*i.boidSep*1.8,l[u]+=h*i.boidSep*1.8,c[u]+=p*i.boidSep*1.8,r[u]+=(v/k-t.vx[u])*i.boidAlign*1.35,l[u]+=(b/k-t.vy[u])*i.boidAlign*1.35,c[u]+=(y/k-t.vz[u])*i.boidAlign*1.35),r[u]+=-t.px[u]*.22,l[u]+=-t.py[u]*.22,c[u]+=-t.pz[u]*.18}for(let u=0;u<a;u++){t.vx[u]+=r[u]*e,t.vy[u]+=l[u]*e,t.vz[u]+=c[u]*e;const d=Math.hypot(t.vx[u],t.vy[u],t.vz[u])||1;if(d>s){const m=s/d;t.vx[u]*=m,t.vy[u]*=m,t.vz[u]*=m}t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=Ge(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=Ge(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=Ge(t.pz[u],t.vz[u],.34)}}function Xc(t,e,i,a){const o=[];for(let s=0;s<a.poleCount;s++)o.push($c(s,i,a.poleSpeed,a.poleSwitch));const n=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const u of o){const d=u.x-t.px[s],m=u.y-t.py[s],f=u.z-t.pz[s],g=Math.hypot(d,m,f)||1e-4,h=(u.sign>0?a.poleAttract:a.poleRepel)/(g**n+.06),p=u.sign>0?1:-1;if(r+=d/g*h*p*.55,l+=m/g*h*p*.55,c+=f/g*h*p*.32,r+=-m/g*h*.28,l+=d/g*h*.28,g<.1){const v=(.1-g)*10;r-=d/g*v,l-=m/g*v,c-=f/g*v*.6}}for(let u=0;u<t.n;u++){if(s===u)continue;const d=t.px[s]-t.px[u],m=t.py[s]-t.py[u],f=t.pz[s]-t.pz[u],g=d*d+m*m+f*f;if(g>.018||g<1e-8)continue;const h=Math.sqrt(g),p=(.135-h)*2.4;r+=d/h*p,l+=m/h*p,c+=f/h*p*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=Ge(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=Ge(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=Ge(t.pz[s],t.vz[s],.3)}}function Zc(t,e,i,a,o){const n=i.length;let s=t;(!s||s.move!==e||s.n!==n||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=jc(e,i,a,o));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let u=0;u<l;u++)e==="spring"?Vc(s,c,a,o):e==="flow"?Gc(s,c,a,o):e==="boids"?Kc(s,c,o):Xc(s,c,a,o);return s.lastClock=a,s}function Qc(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),o=I(1.1/a,.55,1.7);return{x:I(t.px[e]/a,-.48,.48),y:I(t.py[e]/a,-.4,.4),px:I((.07+i*.03)*o,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:I(.55+o*.4,.5,1)}}const rs=["fixed","hunt"],ls=["perfect","handheld"],cs=["random","reactive","mixed"];function Ei(t){return rs.includes(t)?t:"fixed"}function Na(t){return ls.includes(t)?t:"perfect"}function Ua(t){return cs.includes(t)?t:"mixed"}function qa(t){return I(t??2,.4,12)}function Da(t){return I(t??6,.6,16)}function $a(t){return I(t??2,.4,12)}function Wa(t){return I(t??5,.6,16)}function ja(t){return I(t??1,.35,2.4)}function Va(t){return I(t??1,.35,2.4)}function Ga(t){return I(t??.7,.12,1)}function Ka(t){return I(t??.16,.04,1.4)}function Xa(t){return I(t??.42,.08,2)}function Za(t){return I(t??.72,0,1)}function Qa(t){return I(t??.85,.15,2.2)}function Ya(t){return I(t??.55,0,1.6)}function Ja(t){return I(t??.35,0,1)}function Yc(t){let e=qa(t?.huntWideMin),i=Da(t?.huntWideMax);i<e&&([e,i]=[i,e]);let a=$a(t?.huntFollowMin),o=Wa(t?.huntFollowMax);o<a&&([a,o]=[o,a]);let n=Ka(t?.huntReactMin),s=Xa(t?.huntReactMax);return s<n&&([n,s]=[s,n]),{wideMin:e,wideMax:i,followMin:a,followMax:o,snap:ja(t?.huntSnap),zoom:Va(t?.huntZoom),tight:Ga(t?.huntTight),reactMin:n,reactMax:s,precision:Za(t?.huntPrecision),select:Ua(t?.huntSelect),focusOn:!!t?.huntFocus,focusSpeed:Qa(t?.huntFocusSpeed),focusError:Ya(t?.huntFocusError),variation:Ja(t?.huntVariation),feel:Na(t?.cameraFeel)}}function fs(t=0,e=3){return{phase:"wide",clock:t,phaseUntil:t+e,reactUntil:0,subject:-1,lastSubject:-1,lookX:0,lookY:0,zoom:1,rot:0,velX:0,velY:0,velZ:0,velR:0,errX:0,errY:0,heldFocus:1,plan:"basic",mediumDone:!1,nudged:!1,retargeted:!1,handX:0,handY:0,handR:0,lag:0,cycle:0,trackStart:0,prev:[]}}function qt(t,e,i){return e+t()*Math.max(0,i-e)}function ii(t,e){return Math.hypot(t,e)}function Jc(t,e,i,a){const o=e?(t.x-e.x)/Math.max(a,.016666666666666666):0,n=e?(t.y-e.y)/Math.max(a,1/60):0,s=ii(o,n),r=e?(t.px-e.px)/Math.max(a,1/60):0,l=Math.max(0,r),c=e?ii(e.x-t.x,e.y-t.y):0,u=Math.max(0,s-c/Math.max(a,1/60)),d=e?Math.abs(Math.atan2(n,o)-Math.atan2(t.y-e.y,t.x-e.x)):0,m=ii(t.x-i.cx,t.y-i.cy)/Math.max(i.spread,.08),f=Math.max(Math.abs(t.x),Math.abs(t.y)),g=Math.min(1,s*1.6);return s*1.15+u*.9+d*.35+l*3.2+I(m-.7,0,2)*.55+I(f-.28,0,1)*.7+g*.4}function us(t,e,i,a,o,n){if(t.length===0)return-1;if(t.length===1)return t[0].id;const s=t.reduce((f,g)=>f+g.x,0)/t.length,r=t.reduce((f,g)=>f+g.y,0)/t.length,l=t.reduce((f,g)=>f+ii(g.x-s,g.y-r),0)/t.length||.2,c=new Map(o.map(f=>[f.id,f])),u=t.map(f=>{if(f.id===e&&t.length>1)return 0;const g=Jc(f,c.get(f.id),{cx:s,cy:r,spread:l},n);return i==="random"?1:i==="reactive"?.12+g:.55+g}),d=u.reduce((f,g)=>f+g,0);if(d<=0)return(t.find(g=>g.id!==e)??t[0]).id;let m=a()*d;for(let f=0;f<t.length;f++)if(m-=u[f],m<=0)return t[f].id;return t[t.length-1].id}function e0(t,e){if(e()>t*.72)return"basic";const i=e();return i<.22?"medium":i<.42?"retarget":i<.6?"abort":i<.8?"linger":"nudge"}function t0(t,e,i=!1){const a=t?.px??.08,o=.2/Math.max(a,.045),n=I(1.2+e*.95*I(o,.65,2.1),1.25,4.1);return i?De(1,n,.42):n}function ds(t,e){return t.find(i=>i.id===e)}function i0(t){if(!t.length)return{x:0,y:0};let e=0,i=0;for(const a of t)e+=a.x,i+=a.y;return{x:e/t.length,y:i/t.length}}function a0(t,e,i,a,o,n,s,r){t.velX+=(e-t.lookX)*s-t.velX*r,t.velY+=(i-t.lookY)*s-t.velY*r,t.velZ+=(a-t.zoom)*s-t.velZ*r,t.velR+=(o-t.rot)*s*.65-t.velR*r,t.lookX+=t.velX*n,t.lookY+=t.velY*n,t.zoom+=t.velZ*n,t.rot+=t.velR*n}function o0(t,e,i,a,o){const n=Te(o+Math.floor(i*1e3)*17+(t?.cycle??0)*131>>>0);let s=t??fs(i,qt(n,a.wideMin,a.wideMax));const r=i-s.clock;(r<-.02||r>1.2)&&(s=fs(i,qt(n,a.wideMin,a.wideMax)));const l=I(i-s.clock,1/90,.08);s.clock=i;const c=i0(e),u=ds(e,s.subject),d=s.prev.find(D=>D.id===s.subject);u&&d&&ii(u.x-d.x,u.y-d.y)/l>.55&&(s.lag=Math.max(s.lag,(1-a.precision)*.16)),s.lag=Math.max(0,s.lag-l*(1.4+a.precision*2)),s.errX*=Math.exp(-l*(1.1+a.precision*2.6)),s.errY*=Math.exp(-l*(1.1+a.precision*2.6));const m=Te(o+s.cycle*9973+11>>>0),f=Te(o+s.cycle*7919+3>>>0),g=(D,x=1)=>{s.lastSubject=s.subject,s.subject=D,s.phase="notice",s.reactUntil=i+qt(m,a.reactMin,a.reactMax)*x;const B=(1-a.precision)*.11*(.45+m()),T=m()*Math.PI*2;s.errX=Math.cos(T)*B,s.errY=Math.sin(T)*B};if(s.phase==="wide"&&i>=s.phaseUntil&&e.length){const D=us(e,s.lastSubject,a.select,m,s.prev,l);s.plan=e0(a.variation,f),s.mediumDone=!1,s.nudged=!1,s.retargeted=!1,s.plan==="linger"?(s.phaseUntil=i+qt(f,a.wideMin,a.wideMax)*(1.15+f()*.7),s.plan="basic"):g(D)}else if(s.phase==="notice"&&i>=s.reactUntil)s.phase="snap",s.phaseUntil=i+I(.28/a.snap,.12,.85);else if(s.phase==="snap"&&i>=s.phaseUntil)if(s.plan==="medium"&&!s.mediumDone)s.mediumDone=!0,s.phase="notice",s.reactUntil=i+qt(m,a.reactMin,a.reactMax)*.55;else{s.phase="track",s.trackStart=i;const D=qt(f,a.followMin,a.followMax);s.phaseUntil=i+(s.plan==="abort"?D*(.28+f()*.28):D)}else if(s.phase==="track"){const D=Math.max(.01,s.phaseUntil-s.trackStart);if(s.plan==="retarget"&&!s.retargeted&&e.length>1&&i>=s.trackStart+D*.42){const x=us(e,s.subject,a.select,m,s.prev,l);x!==s.subject&&x>=0&&(s.retargeted=!0,s.plan="basic",g(x,.55))}else s.plan==="nudge"&&!s.nudged&&i>s.phaseUntil-.8&&(s.nudged=!0);s.phase==="track"&&i>=s.phaseUntil&&(s.phase="return",s.phaseUntil=i+I(.32/a.snap,.14,.9),s.lastSubject=s.subject)}else s.phase==="return"&&i>=s.phaseUntil&&(s.phase="wide",s.subject=-1,s.cycle+=1,s.phaseUntil=i+qt(f,a.wideMin,a.wideMax),s.plan="basic");const h=ds(e,s.subject)??u,p=1;let v=c.x*.22,b=c.y*.22,y=p,k=0;if(h&&(s.phase==="notice"||s.phase==="snap"||s.phase==="track")){v=h.x+s.errX,b=h.y+s.errY;const D=s.phase==="snap"&&s.plan==="medium"&&!s.mediumDone;y=s.phase==="notice"?De(s.zoom,1.04,.15):t0(h,a.zoom,D),s.nudged&&s.phase==="track"&&(y*=1.12),k=Math.atan2(b-s.lookY,v-s.lookX)*.045}else s.phase==="return"&&(v=c.x*.18,b=c.y*.18,y=p,k=0);const _=s.phase==="snap"||s.phase==="return"?1.15+a.snap*1.35:1,S=s.phase==="notice"?.38:1,M=1-I(s.lag*2.4,0,.55),A=(.08+a.tight*.22)*(.45+a.precision*.7)*_*S*M,E=.18+a.precision*.22+a.tight*.12;a0(s,v,b,y,k,l,A,E);const R=I(s.zoom,1,4.2);if(!a.focusOn)s.heldFocus=R;else{const D=1-Math.exp(-l*(.35+a.focusSpeed*1.8));s.heldFocus=De(s.heldFocus,R,D)}if(a.feel==="handheld"){const D=ii(s.velX,s.velY)+Math.abs(s.velZ)*.08;s.handX=De(s.handX,-s.velX*.05-D*.01,1-Math.exp(-l*3.2)),s.handY=De(s.handY,-s.velY*.05,1-Math.exp(-l*3.2)),s.handR=De(s.handR,-s.velR*.4,1-Math.exp(-l*2.6))}else s.handX=De(s.handX,0,1-Math.exp(-l*8)),s.handY=De(s.handY,0,1-Math.exp(-l*8)),s.handR=De(s.handR,0,1-Math.exp(-l*8));return s.prev=e.map(D=>({id:D.id,x:D.x,y:D.y,px:D.px})),s}function n0(t,e){const i=I(t.zoom,1,4.2),a=e.focusOn?I(Math.abs(t.heldFocus-i)*e.focusError*.9,0,1):0;return{x:t.lookX+(e.feel==="handheld"?t.handX:0),y:t.lookY+(e.feel==="handheld"?t.handY:0),zoom:I(t.zoom,1,4.4),rot:t.rot+(e.feel==="handheld"?t.handR:0),focus:a}}function s0(t,e){return{x:(t.x-e.x)*e.zoom,y:(t.y-e.y)*e.zoom,px:t.px*e.zoom,rot:t.rot+e.rot}}const hs=["heraldry","wallpaper","giants","shower"],Ft=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],ms=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"],r0=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Go(t){return!!t&&r0.includes(t)}const Dt={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES",field:"FIELD"};function ze(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function $t(t){return Ft.includes(t)?t:"sailor"}function ps(t){return ms.includes(t)?t:"rush"}const l0=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function c0(t){return!!t&&l0.includes(t)}const gs=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"];function Ko(t){return gs[(t>>>0)%gs.length]}function Pi(t){return I(t??1,.35,1.2)}function Ai(t){return I(t??1,.2,2.2)}function Fi(t){return I(t??.7,.12,2)}function Ii(t){return I(t??1,.2,2)}function Bi(t){return I(t??.72,.12,1)}const eo=["off","dragon","dog","ferret","caterpillar","zebra"],vs={off:"Off",dragon:"Dragon",dog:"Dog",ferret:"Ferret",caterpillar:"Caterpillar",zebra:"Zebra"};function Ri(t){return eo.includes(t)?t:"off"}function f0(t){return Math.max(11,Math.min(18,Math.round(14*I(t??1,.35,2))))}function u0(t,e){if(t==="off"||e<4)return[];if(t==="caterpillar"){const o=[];for(let n=1;n<e-1;n++)o.push({role:"nub",attach:n,side:-1}),o.push({role:"nub",attach:n,side:1});return o}const i=Math.max(1,Math.round((e-1)*.22)),a=Math.max(i+2,Math.round((e-1)*.62));return[{role:"leg",attach:i,side:-1},{role:"leg",attach:i,side:1},{role:"leg",attach:a,side:-1},{role:"leg",attach:a,side:1}]}function to(t,e,i,a){const o=me(t)*Math.PI*2,n=I(i,.2,2),s=I(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),u=e*(.45+r*1.55),d=(et,Ve,w)=>(et+Ve*n)*(.42+.58*(.5+.5*Math.sin(w))),m=.84+.22*Math.sin(l+.4),f=.8+.24*Math.cos(l*.87+1.1),g=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*n)*m,p=d(.04,.07,c+.3)*(.4+s*.6),v=d(.02,.08,u+1.4)*(.18+r*.95),b=d(.01,.06,u*1.3+.8)*r,y=d(.006,.035,c*1.6+2.1)*r*r,k=(.17+.11*n)*f,_=d(.035,.065,c+1.7)*(.4+s*.6),S=d(.02,.07,u+.6)*(.18+r*.95),M=d(.01,.055,u*1.2+2.4)*r,A=d(.006,.03,c*1.4+.5)*r*r,E=(.13+.11*n)*g,R=d(.04,.08,c+2)*(.45+s*.55),D=d(.02,.07,u+1.9)*(.18+r*.95),x=d(.012,.055,u*.9+.2)*r;let B=Math.cos(o+l*.18)*h+Math.cos(2*o+c*.14+.7)*p+Math.sin(3*o+l*.11+1.2)*v+Math.cos(4*o+u*.09+.4)*b+Math.sin(5*o+c*.16+2.2)*y,T=Math.sin(o+l*.15+.5)*k+Math.sin(2*o+c*.19+1.4)*_+Math.cos(3*o+l*.09+.3)*S+Math.sin(4*o+u*.12+1.8)*M+Math.cos(5*o+c*.08+.9)*A,U=Math.sin(o+l*.12+1.1)*E+Math.cos(2*o+c*.17+.6)*R+Math.sin(3*o+u*.1+2.5)*D+Math.cos(4*o+l*.13+1.6)*x;const G=Math.sin(2*o+c*.22)*r*.12*n;U+=G;const L=l*.19+Math.sin(c*.27)*.55,V=Math.sin(l*.29+.8)*(.28+.18*n),q=Math.cos(l*.23+1.5)*(.2+r*.4),X=Math.cos(L),O=Math.sin(L),H=B*X-U*O,oe=B*O+U*X,ie=Math.cos(V),Y=Math.sin(V),be=T*ie-oe*Y,Ae=T*Y+oe*ie,ue=Math.cos(q),pe=Math.sin(q),Re=H*ue-be*pe,Ee=H*pe+be*ue;return{x:Re+Math.sin(l*.47)*.06*n,y:Ee+Math.cos(l*.39+1.3)*.05*n,z:Ae+Math.sin(c*.21+.6)*.07*n}}function ft(t,e=1){return(t>40?t/60:2)*e}function d0(t,e,i=1,a=0){return me((t-a)*ft(e,i))}function h0(t,e,i=1,a=0){const o=Math.cos(d0(t,e,i,a)*Math.PI*2);return o>0?o*o:0}function bs(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*ft(e,i))}function zi(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function ys(t,e){return e&&ms.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const Oi=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],Xo={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function m0(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const p0={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},ws={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},ks={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},Hi=256;function Ts(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function Ke(t,e){return e[Math.floor(t()*e.length)%e.length]}function _s(t,e){return t()<.32?e:Ke(t,Oi)}function g0(t,e="rush"){return e==="tunnel"?ws[t]:e==="lattice"?ks[t]:p0[t]}function v0(t,e,i,a){const o=g0(a,e==="bloom"?"rush":e);let n=Ke(t,o);e==="lattice"&&t()<.4&&(n=Ke(t,ks[a])),e==="tunnel"&&t()<.28&&(n=Ke(t,ws[a]));const s=_s(t,i);let r=_s(t,i);return r===s&&(r=Ke(t,Oi)),{kind:n,pattern:t()<.58?"plain":Ke(t,["polka","hoop","half","bar"]),a:s,b:r,mirror:t()>.5}}function b0(t){return t>.5?I((t-.5)/.5,0,1):0}function y0(t,e,i,a=0){const o=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*n)*11+5>>>0)%o}function Li(t){return I(t??1,.5,2)}function Ni(t){return I(t??1,.35,2)}function w0(t,e,i="sailor",a){const o=Te(t>>>0),n=240,s=a&&a!==i?a:null,r=[];for(let l=0;l<n;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",u=s&&l&1?s:i;r.push({x:o(),y:o(),z:o(),rot:(o()-.5)*.55,size:.55+o()*.9,vx:(o()-.5)*.06,vy:(o()-.35)*.08,vr:(o()-.5)*.25,charge:v0(o,c,e,u)})}return r}function k0(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function xs(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,o=e&255;return(.22*i+.7*a+.08*o)/255}function Ss(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const o=i.a,n=i.b,s=a*2.4;if(t.fillStyle=o,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=xs(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function Zo(t,e,i,a=.42){for(let o=0;o<i*2;o++){const n=o%2===0?e:e*a,s=o*Math.PI/i-Math.PI/2,r=Math.cos(s)*n,l=Math.sin(s)*n;o===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function T0(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function _0(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function Cs(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function x0(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function S0(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function C0(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function M0(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,o=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*o,-Math.cos(a)*o*.85)}t.closePath()}function E0(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function P0(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function A0(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function F0(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function I0(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function B0(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function R0(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function z0(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function O0(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function H0(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function L0(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function N0(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function U0(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function q0(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function D0(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function $0(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function W0(t,e){Zo(t,e,8,.55)}function j0(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function V0(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function G0(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function K0(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function X0(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function Z0(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Q0(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Y0(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function J0(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function ef(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function tf(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function af(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function of(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function nf(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),Cs(t,e*.72)}function sf(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function rf(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function lf(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function cf(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function ff(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function uf(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function df(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function hf(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function mf(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function pf(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function gf(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function vf(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function bf(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function yf(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function wf(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function kf(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function Tf(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function _f(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function xf(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Sf(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function Cf(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function Mf(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function Ef(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function Pf(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function Af(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function Ff(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function If(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function Bf(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function Rf(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function zf(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function Of(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function Hf(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function Lf(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function Nf(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function Uf(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function qf(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function Df(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function $f(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function Wf(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function jf(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function Vf(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function Gf(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function Kf(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function Xf(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function Zf(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function Qf(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function Yf(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function Jf(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function eu(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function tu(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function iu(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function au(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function ou(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function nu(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function su(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function ru(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function lu(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function cu(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function fu(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function uu(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function du(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function hu(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function mu(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function pu(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function gu(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function vu(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function bu(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function yu(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function wu(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function ku(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function Tu(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function _u(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function xu(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function Su(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function Cu(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function Mu(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function Eu(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function Pu(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function Au(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function Fu(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function Iu(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function Bu(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function Ru(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function zu(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function Ou(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function Hu(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function Lu(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function Nu(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function Uu(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function qu(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function Du(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function $u(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function Wu(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function ju(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function Vu(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function Gu(t,e){Zo(t,e*.72,4,.32)}function Ku(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function Xu(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function Zu(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function Qu(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function Yu(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function Ju(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function ed(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function td(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function id(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function ad(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function od(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function nd(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function sd(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function rd(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function ld(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function cd(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function fd(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function ud(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function dd(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function hd(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function md(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function pd(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function gd(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function vd(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function bd(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function yd(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function wd(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function kd(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Td(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function _d(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function xd(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function Sd(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function Cd(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function Md(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function Ed(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function Pd(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function Ad(t,e){t.moveTo(-e*.7,0),t.quadraticCurveTo(-e*.58,-e*.58,0,-e*.52),t.quadraticCurveTo(e*.58,-e*.58,e*.7,0),t.quadraticCurveTo(e*.58,e*.58,0,e*.52),t.quadraticCurveTo(-e*.58,e*.58,-e*.7,0),t.closePath()}function Fd(t,e){t.moveTo(-e*.82,0),t.quadraticCurveTo(-e*.45,-e*.55,e*.08,-e*.32),t.lineTo(e*.98,-e*.12),t.lineTo(e*.62,e*.06),t.lineTo(e*.88,e*.38),t.lineTo(e*.22,e*.22),t.quadraticCurveTo(-e*.2,e*.52,-e*.82,0),t.closePath(),t.moveTo(-e*.02,-e*.3),t.lineTo(e*.18,-e*.98),t.lineTo(e*.38,-e*.22),t.closePath(),t.moveTo(-e*.38,-e*.28),t.lineTo(-e*.18,-e*.88),t.lineTo(e*.08,-e*.2),t.closePath()}function Id(t,e){t.moveTo(-e*.42,e*.18),t.quadraticCurveTo(-e*.35,-e*.28,e*.22,-e*.2),t.quadraticCurveTo(e*.62,-e*.06,e*.95,e*.16),t.quadraticCurveTo(e*.9,e*.42,e*.4,e*.42),t.quadraticCurveTo(0,e*.5,-e*.42,e*.18),t.closePath(),t.moveTo(-e*.12,-e*.08),t.quadraticCurveTo(-e*.85,-e*.42,-e*.98,e*.42),t.quadraticCurveTo(-e*.48,e*.48,0,e*.08),t.closePath(),t.moveTo(e*.12,-e*.16),t.quadraticCurveTo(-e*.22,-e*.95,-e*.72,-e*.22),t.quadraticCurveTo(e*.02,-e*.22,e*.22,.02*e),t.closePath()}function Bd(t,e){t.moveTo(-e*.72,e*.08),t.quadraticCurveTo(-e*.52,-e*.4,-e*.02,-e*.3),t.quadraticCurveTo(e*.48,-e*.1,e*.98,e*.08),t.quadraticCurveTo(e*.48,e*.26,0,e*.3),t.quadraticCurveTo(-e*.48,e*.4,-e*.72,e*.08),t.closePath(),t.moveTo(-e*.22,-e*.26),t.lineTo(-e*.32,-e*.7),t.lineTo(0,-e*.26),t.closePath(),t.moveTo(e*.06,-e*.2),t.lineTo(e*.04,-e*.6),t.lineTo(e*.24,-e*.16),t.closePath()}function Rd(t,e){t.arc(e*.06,e*.08,e*.62,0,Math.PI*2),t.moveTo(-e*.04,-e*.46),t.quadraticCurveTo(-e*.32,-e*.95,-e*.55,-e*.52),t.quadraticCurveTo(-e*.2,-e*.6,e*.02,-e*.38),t.closePath(),t.moveTo(e*.28,-e*.46),t.quadraticCurveTo(e*.42,-e*.98,e*.68,-e*.5),t.quadraticCurveTo(e*.38,-e*.56,e*.22,-e*.36),t.closePath()}function zd(t,e){t.moveTo(-e*.58,e*.1),t.quadraticCurveTo(-e*.4,-e*.42,e*.12,-e*.22),t.quadraticCurveTo(e*.58,0,e*.98,e*.16),t.quadraticCurveTo(e*.55,e*.4,e*.08,e*.38),t.quadraticCurveTo(-e*.38,e*.38,-e*.58,e*.1),t.closePath(),t.moveTo(-e*.08,-e*.2),t.lineTo(-e*.22,-e*.95),t.lineTo(e*.14,-e*.18),t.closePath(),t.moveTo(e*.16,-e*.14),t.lineTo(e*.22,-e*.88),t.lineTo(e*.42,-e*.1),t.closePath()}function Od(t,e){t.moveTo(e*.92,-e*.16),t.quadraticCurveTo(e*.15,-e*.3,-e*.32,-e*.1),t.lineTo(-e*.95,-e*.42),t.lineTo(-e*.52,0),t.lineTo(-e*.95,e*.42),t.lineTo(-e*.32,e*.1),t.quadraticCurveTo(e*.15,e*.3,e*.92,e*.16),t.closePath()}function Hd(t,e){t.moveTo(e*.88,-e*.1),t.quadraticCurveTo(e*.18,-e*.55,-e*.35,-e*.52),t.quadraticCurveTo(-e*.95,-e*.12,-e*.52,e*.22),t.quadraticCurveTo(-e*.12,e*.4,e*.48,e*.12),t.quadraticCurveTo(e*.75,e*.04,e*.88,e*.1),t.closePath()}function Ld(t,e){t.moveTo(e*.95,-e*.2),t.quadraticCurveTo(e*.12,-e*.48,-e*.55,-e*.2),t.quadraticCurveTo(-e*.98,0,-e*.55,e*.2),t.quadraticCurveTo(e*.12,e*.48,e*.95,e*.2),t.closePath()}function Nd(t,e){t.moveTo(e*.88,0),t.quadraticCurveTo(e*.68,-e*.5,e*.08,-e*.46),t.quadraticCurveTo(-e*.52,-e*.52,-e*.82,-e*.06),t.lineTo(-e*.98,-e*.4),t.lineTo(-e*.68,0),t.lineTo(-e*.98,e*.4),t.lineTo(-e*.82,e*.06),t.quadraticCurveTo(-e*.52,e*.52,e*.08,e*.46),t.quadraticCurveTo(e*.68,e*.5,e*.88,0),t.closePath()}function Ud(t,e){t.moveTo(e*.92,-e*.08),t.quadraticCurveTo(e*.18,-e*.16,-e*.22,-e*.06),t.lineTo(-e*.85,-e*.4),t.lineTo(-e*.52,0),t.lineTo(-e*.9,e*.36),t.lineTo(-e*.22,e*.08),t.quadraticCurveTo(e*.18,e*.16,e*.92,e*.08),t.closePath()}function qd(t,e){t.moveTo(-e*.95,-e*.2),t.quadraticCurveTo(-e*.15,e*.28,e*.28,-e*.12),t.quadraticCurveTo(e*.68,-e*.38,e*.98,e*.28),t.quadraticCurveTo(e*.48,e*.52,e*.08,e*.22),t.quadraticCurveTo(-e*.38,e*.62,-e*.92,e*.24),t.closePath()}function Dd(t,e){t.moveTo(-e*.68,-e*.2),t.quadraticCurveTo(e*.12,-e*.52,e*.85,0),t.quadraticCurveTo(e*.12,e*.52,-e*.68,e*.2),t.closePath()}function $d(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":Zo(t,i,5,e==="starfish"?.42:.4);break;case"heart":T0(t,i);break;case"moon":_0(t,i);break;case"figure":Cs(t,i);break;case"fish":x0(t,i);break;case"anchor":S0(t,i);break;case"wave":C0(t,i);break;case"shell":M0(t,i);break;case"boat":E0(t,i);break;case"tail":P0(t,i);break;case"swallow":A0(t,i);break;case"elephant":F0(t,i);break;case"tent":I0(t,i);break;case"ball":B0(t,i);break;case"bow":R0(t,i);break;case"horse":z0(t,i);break;case"balloon":O0(t,i);break;case"ticket":H0(t,i);break;case"pear":L0(t,i);break;case"lemon":N0(t,i);break;case"cherry":U0(t,i);break;case"leaf":q0(t,i);break;case"mushroom":D0(t,i);break;case"flower":$0(t,i);break;case"sun":W0(t,i);break;case"cloud":j0(t,i);break;case"bolt":V0(t,i);break;case"umbrella":G0(t,i);break;case"bird":K0(t,i);break;case"tree":X0(t,i);break;case"deer":Z0(t,i);break;case"fox":Q0(t,i);break;case"owl":Y0(t,i);break;case"acorn":J0(t,i);break;case"cone":ef(t,i);break;case"mountain":tf(t,i);break;case"drop":af(t,i);break;case"moth":of(t,i);break;case"wingfig":nf(t,i);break;case"swan":sf(t,i);break;case"cat":rf(t,i);break;case"crown":lf(t,i);break;case"key":cf(t,i);break;case"ring":ff(t,i);break;case"envelope":uf(t,i);break;case"potion":df(t,i);break;case"rocket":mf(t,i);break;case"planet":pf(t,i);break;case"saturn":gf(t,i);break;case"ufo":vf(t,i);break;case"comet":bf(t,i);break;case"satellite":yf(t,i);break;case"lolly":wf(t,i);break;case"coneice":kf(t,i);break;case"cupcake":Tf(t,i);break;case"donut":_f(t,i);break;case"candy":xf(t,i);break;case"note":Sf(t,i);break;case"vinyl":Cf(t,i);break;case"headphone":Mf(t,i);break;case"mic":Ef(t,i);break;case"speaker":Pf(t,i);break;case"crab":Af(t,i);break;case"helm":Ff(t,i);break;case"lighthouse":If(t,i);break;case"compass":Bf(t,i);break;case"popcorn":Rf(t,i);break;case"cane":zf(t,i);break;case"mask":Of(t,i);break;case"apple":Hf(t,i);break;case"banana":Lf(t,i);break;case"grape":Nf(t,i);break;case"rabbit":Uf(t,i);break;case"snail":qf(t,i);break;case"fern":Df(t,i);break;case"rose":$f(t,i);break;case"diamond":Wf(t,i);break;case"candle":jf(t,i);break;case"alien":Vf(t,i);break;case"asteroid":Gf(t,i);break;case"telescope":Kf(t,i);break;case"cookie":Xf(t,i);break;case"waffle":Zf(t,i);break;case"guitar":Qf(t,i);break;case"drum":Yf(t,i);break;case"piano":Jf(t,i);break;case"clef":eu(t,i);break;case"kettle":tu(t,i);break;case"mug":iu(t,i);break;case"whisk":au(t,i);break;case"toast":ou(t,i);break;case"egg":nu(t,i);break;case"spoon":su(t,i);break;case"chili":ru(t,i);break;case"bottle":lu(t,i);break;case"rain":cu(t,i);break;case"flake":fu(t,i);break;case"wind":uu(t,i);break;case"rainbow":du(t,i);break;case"thermo":hu(t,i);break;case"taxi":mu(t,i);break;case"hydrant":pu(t,i);break;case"bike":gu(t,i);break;case"lamp":vu(t,i);break;case"signal":bu(t,i);break;case"bus":yu(t,i);break;case"stick":wu(t,i);break;case"dice":ku(t,i);break;case"coin":Tu(t,i);break;case"pawn":_u(t,i);break;case"cart":xu(t,i);break;case"flag":Su(t,i);break;case"buoy":Cu(t,i);break;case"hook":Mu(t,i);break;case"porthole":Eu(t,i);break;case"oar":Pu(t,i);break;case"hoop":Au(t,i);break;case"unicycle":Fu(t,i);break;case"lion":Iu(t,i);break;case"topper":Bu(t,i);break;case"orange":Ru(t,i);break;case"peach":zu(t,i);break;case"berry":Ou(t,i);break;case"melon":Hu(t,i);break;case"pineapple":Lu(t,i);break;case"pine":Nu(t,i);break;case"hedgehog":Uu(t,i);break;case"nest":qu(t,i);break;case"toadstool":Du(t,i);break;case"locket":$u(t,i);break;case"dove":Wu(t,i);break;case"kiss":ju(t,i);break;case"rover":Vu(t,i);break;case"spark":Gu(t,i);break;case"astro":Ku(t,i);break;case"pretzel":Xu(t,i);break;case"sundae":Zu(t,i);break;case"choco":Qu(t,i);break;case"sax":Yu(t,i);break;case"trumpet":Ju(t,i);break;case"amp":ed(t,i);break;case"fork":td(t,i);break;case"pan":id(t,i);break;case"chefhat":ad(t,i);break;case"tornado":od(t,i);break;case"subway":nd(t,i);break;case"mailbox":sd(t,i);break;case"skyline":rd(t,i);break;case"ghostie":ld(t,i);break;case"pixel":cd(t,i);break;case"joystick":fd(t,i);break;case"shroomup":ud(t,i);break;case"invader":dd(t,i);break;case"skull":hd(t,i);break;case"bat":md(t,i);break;case"pumpkin":pd(t,i);break;case"tomb":gd(t,i);break;case"cauldron":vd(t,i);break;case"web":bd(t,i);break;case"trophy":yd(t,i);break;case"whistle":wd(t,i);break;case"jersey":kd(t,i);break;case"skate":Td(t,i);break;case"goal":_d(t,i);break;case"pencil":xd(t,i);break;case"book":Sd(t,i);break;case"globe":Cd(t,i);break;case"backpack":Md(t,i);break;case"ruler":Ed(t,i);break;case"bell":Pd(t,i);break;case"aBody":Ad(t,i);break;case"aLeg":qd(t,i);break;case"aNub":Dd(t,i);break;case"aDragHead":Fd(t,i);break;case"aDragTail":Od(t,i);break;case"aDogHead":Id(t,i);break;case"aDogTail":Hd(t,i);break;case"aFerrHead":Bd(t,i);break;case"aFerrTail":Ld(t,i);break;case"aCatpHead":Rd(t,i);break;case"aCatpTail":Nd(t,i);break;case"aZebrHead":zd(t,i);break;case"aZebrTail":Ud(t,i);break;default:hf(t,i);break}}function Ms(t,e,i){const a=(o,n,s)=>{t.beginPath(),t.arc(o,n,s,0,Math.PI*2),t.fill()};t.fillStyle=xs(e.a)>.55?"#141414":"#f6f1e6",e.kind==="aDragHead"&&a(i*.18,-i*.04,i*.08),e.kind==="aDogHead"&&a(i*.28,0,i*.075),e.kind==="aFerrHead"&&a(i*.08,-i*.02,i*.055),e.kind==="aCatpHead"&&(a(-i*.08,i*.02,i*.07),a(i*.22,i*.02,i*.07)),e.kind==="aZebrHead"&&a(i*.12,-i*.02,i*.06),e.kind==="aBody"&&e.pattern==="bar"&&(t.beginPath(),t.moveTo(0,-i*.16),t.lineTo(i*.14,0),t.lineTo(0,i*.16),t.lineTo(-i*.14,0),t.closePath(),t.fill())}function Wd(t,e,i){const a=()=>$d(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Ss(t,a,e,i),Ms(t,e,i),t.restore();return}Ss(t,a,e,i),Ms(t,e,i)}function jd(t){const e=document.createElement("canvas");e.width=Hi,e.height=Hi;const i=e.getContext("2d");return i&&(i.translate(Hi/2,Hi/2),Wd(i,t,Hi*.38)),e}const Vd={dragon:{a:"#2a7a38",b:"#e8b830",pattern:"bar"},dog:{a:"#c9922e",b:"#f2d98a",pattern:"half"},ferret:{a:"#c49a62",b:"#f0e2c4",pattern:"half"},caterpillar:{a:"#5aa84a",b:"#e8c840",pattern:"hoop"},zebra:{a:"#f4f4f4",b:"#141414",pattern:"stripe"}};function Es(t,e){const i=Vd[t];return{kind:e==="body"?"aBody":e==="leg"?"aLeg":e==="nub"?"aNub":e==="head"?t==="dragon"?"aDragHead":t==="dog"?"aDogHead":t==="ferret"?"aFerrHead":t==="caterpillar"?"aCatpHead":"aZebrHead":t==="dragon"?"aDragTail":t==="dog"?"aDogTail":t==="ferret"?"aFerrTail":t==="caterpillar"?"aCatpTail":"aZebrTail",pattern:e==="leg"||e==="nub"?"plain":i.pattern,a:i.a,b:i.b,mirror:!1}}function Gd(t){return Math.atan2(Math.sin(t),Math.cos(t))}function Qo(t,e,i,a,o,n){const s=to(t,e,i,a),r=to(me(t+o),e,i,a),l=Math.max(.42,1.05-s.z*.55),c=Math.max(.42,1.05-r.z*.55),u=s.x/l,d=s.y/l,m=Math.atan2(r.y/c-d,r.x/c-u),f=I(1.12/l,.55,1.85);return{x:u,y:d,rot:m,ux:Math.cos(m),uy:Math.sin(m),nx:-Math.sin(m),ny:Math.cos(m),px:I((.072+n*.028)*f,.05,.24),alpha:I(.52+f*.42,.5,1)}}function Kd(t,e,i,a,o){const n=f0(o),s=.72/n,r=e==="caterpillar"?1.08:1,l=[];for(let c=0;c<n;c++){const u=me(i*a.travel*.14-c*s),d=i*a.morph,m=c===0?1.05:c===n-1?.78:.48*r;l.push(Qo(u,d,a.vary,a.smooth,s,m))}for(const c of u0(e,n)){const u=l[c.attach],d=c.role==="nub"?.07:.13,m=me((i-d)*a.travel*.14-c.attach*s),f=Qo(m,(i-d)*a.morph,a.vary,a.smooth,s,.55),g=u.x-f.x,h=u.y-f.y,p=c.role==="nub"?.038:.09,v=c.role==="nub"?.32:.7,b=c.role==="nub"?.008:.024,y=u.x+u.nx*c.side*p-g*v,k=u.y+u.ny*c.side*p-h*v+b;t(Es(e,c.role),{x:y,y:k,px:I(u.px*(c.role==="nub"?.55:.92),.04,.18),rot:Math.atan2(k-u.y,y-u.x),alpha:u.alpha*.94})}for(let c=n-1;c>=0;c--){const u=c===0?"head":c===n-1?"tail":"body";let d=l[c].x,m=l[c].y,f=l[c].rot;if(u==="tail"){const g=me((i-.14)*a.travel*.14-(n-1)*s),h=Qo(g,(i-.14)*a.morph,a.vary,a.smooth,s,.78),p=l[c].x-h.x,v=l[c].y-h.y;d-=p*.55,m-=v*.55,f+=Gd(l[c].rot-h.rot)*.85}t(Es(e,u),{x:d,y:m,px:l[c].px*(u==="head"?1.28:u==="tail"?1.18:1),rot:f,alpha:l[c].alpha})}}class Xd{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;agents=null;fieldPoses=[];hunt=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=k0(e);let a=this.stamps.get(i);return a||(a=jd(e),this.stamps.set(i,a)),a}ensure(e,i,a,o){const n=o&&o!==a?o:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===n&&this.particles.length||(this.particles=w0(e,i,a,n||null),this.stamps.clear(),this.sim=null,this.agents=null,this.hunt=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=n)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const o=this.canvas.getContext("2d",{alpha:!1});if(!o)return this.canvas;const n=$t(e.kit),s=e.kitB?$t(e.kitB):null,r=Ts(e.paper,Jd(n,e.seed)),l=Ts(e.ink,Xo[n]);this.ensure(e.seed>>>0,l,n,s);const c=ys(e.generator,e.move),u=I(e.audio,0,1),d=I(e.bass,0,1),m=I(e.beat,0,1),f=e.bpm>40?e.bpm:0,g=Li(e.scale),h=Ni(e.density),p=Pi(e.pace),v={travel:Ai(e.chainTravel),morph:Fi(e.chainMorph),vary:Ii(e.chainVary),smooth:Bi(e.chainSmooth)},b=Ri(e.chainAnimal);Yd(o,i,a,r,n,e.time,e.seed,m,d,!!e.night,l),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high";const y=e.beatOffset??0,k=e.time,_=Go(c)&&f>40&&y>.001?Math.max(0,k-y):k,S=_*p,M=i/Math.max(a,1),A=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Go(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"||c==="braid"?130:c==="tunnel"||c==="well"?120:c==="hall"?148:c==="bloom"||c==="gyre"||c==="drift"||c==="sway"?140:c==="chain"?40:At(c)?360:Vo(c)?42:this.particles.length,E=At(c)?Math.max(40,Math.min(560,Math.round(A*h))):Math.max(8,Math.min(this.particles.length,Math.round(A*h))),R=c==="prism"?3:1;if(At(c)){const G=Kl({fieldStrength:e.fieldStrength,fieldScale:e.fieldScale,fieldEvolve:e.fieldEvolve,density:e.fieldDensity,densityScale:e.fieldDensityScale,densityEvolve:e.fieldDensityEvolve,flow:e.fieldFlow,curl:e.fieldCurl,flowScale:e.fieldFlowScale,attract:e.fieldAttract,repel:e.fieldRepel,radius:e.fieldRadius,inertia:e.fieldInertia,damp:e.fieldDamp,maxV:e.fieldMaxV,scaleAmp:e.fieldScaleAmp,minScale:e.fieldMinScale,maxScale:e.fieldMaxScale,perturb:e.fieldPerturb,warp:e.fieldWarp,sparsity:e.fieldSparsity,contrast:e.fieldContrast,motion:e.fieldMotion});this.agents=this.agents??new Nc,this.fieldPoses=this.agents.posesAt(E,_,e.seed>>>0,M,G,f,y,e.fieldPattern??"auto"),this.sim=null}else if(Vo(c)){this.agents=null;const G=qc({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=Zc(this.sim,c,this.particles.slice(0,E),_,G)}else this.agents=null,this.sim=null;const D=c==="spot"?.34:At(c)?.5:c0(c)||c==="chain"?.26:.22,x=(G,L,V)=>{const q=V?{...L,...s0(L,V)}:L,X=Math.min(q.px*g,V?.72:D)*Math.min(i,a);if(X<5)return;const O=(.5+q.x)*i,H=(.5+q.y/M)*a;for(let oe=0;oe<R;oe++){o.save();const ie=R>1?(oe-1)*X*.09:0,Y=R>1?oe===2?X*.06:oe===0?-X*.03:0:0;if(O+ie<-X||H+Y<-X||O+ie>i+X||H+Y>a+X){o.restore();continue}o.translate(O+ie,H+Y),o.rotate(q.rot+(R>1?oe*.1:0)),L.flip!=null&&o.scale(L.flip,1),L.squash&&o.scale(L.squash,1/Math.max(.35,L.squash)),L.glow&&(o.globalAlpha=L.alpha*.32*L.glow,o.fillStyle=L.tint??l,o.beginPath(),o.arc(0,0,X*(.4+L.glow*.16),0,Math.PI*2),o.fill()),o.globalAlpha=L.alpha*(R>1?.72:1),o.drawImage(G,-X/2,-X/2,X,X),o.restore()}},B=[],T=(G,L)=>{B.push({stamp:G,pose:L})};if(c==="chain"&&b!=="off")Kd((G,L)=>T(this.stamp(G),L),b,_,v,h);else for(let G=0;G<E;G++){const L=At(c)&&this.agents?this.fieldPoses[G]??null:null,V=L?.morph??0,q=Math.floor(L?.charge??G),X=Math.floor(L?.chargeB??q),O=this.particles[(q%this.particles.length+this.particles.length)%this.particles.length];let H=At(c)&&this.agents?L:Vo(c)&&this.sim?Qc(this.sim,G,O.size):Zd(O,G,c,S,u,d,m,f,E,_,v);if(H&&!(H.alpha<.04))if(At(c)&&m>.02&&(H={...H,glow:m*.38,squash:(H.squash??1)*(1-m*.045),px:H.px*(1+m*.07)}),At(c)&&V>.03&&V<.97&&X!==q){const oe=this.particles[(X%this.particles.length+this.particles.length)%this.particles.length];T(this.stamp(O.charge),{...H,alpha:H.alpha*(1-V),px:H.px*(1-.1*V)}),T(this.stamp(oe.charge),{...H,alpha:H.alpha*V,px:H.px*(.9+.1*V)})}else{const oe=V>=.97?this.particles[(X%this.particles.length+this.particles.length)%this.particles.length]:O;T(this.stamp(oe.charge),H)}}let U;if(Ei(e.camera)==="hunt"){const G=Yc({huntWideMin:e.huntWideMin,huntWideMax:e.huntWideMax,huntFollowMin:e.huntFollowMin,huntFollowMax:e.huntFollowMax,huntSnap:e.huntSnap,huntZoom:e.huntZoom,huntTight:e.huntTight,huntReactMin:e.huntReactMin,huntReactMax:e.huntReactMax,huntPrecision:e.huntPrecision,huntSelect:e.huntSelect,huntFocus:e.huntFocus,huntFocusSpeed:e.huntFocusSpeed,huntFocusError:e.huntFocusError,huntVariation:e.huntVariation,cameraFeel:e.cameraFeel});this.hunt=o0(this.hunt,B.map((L,V)=>({id:V,x:L.pose.x,y:L.pose.y,px:L.pose.px})),_,G,e.seed>>>0),U=n0(this.hunt,G),U.focus>.03&&(o.filter=`blur(${(1.1+U.focus*2.4).toFixed(2)}px)`)}else this.hunt=null;for(const G of B)x(G.stamp,G.pose,U);return o.filter="none",(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&m>.04&&(o.save(),o.translate(i*.5,a*.5),o.strokeStyle=Xe(l,"#fff4d8",.72),o.globalAlpha=.18+m*.42,o.lineWidth=2.6+m*6,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.16+m*.2),0,Math.PI*2),o.stroke(),o.globalAlpha=.1+m*.22,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.3+m*.18),0,Math.PI*2),o.stroke(),o.restore()),this.canvas}}function me(t){return(t%1+1)%1}function Yo(t,e,i){const a=Math.cos(i),o=Math.sin(i);return{x:t*a-e*o,y:t*o+e*a}}function ai(t,e=.28,i=2.55){const a=e+me(t)*i,o=e+i,n=I((o-a)/.3,0,1)*I((a-e)/.1,0,1);return n<=.001?null:{depth:a,fade:n}}function Ps(t){const e=me(t);return e<.5?e*2:2-e*2}function Le(t){return Ps(t)-.5}function Zd(t,e,i,a,o,n,s,r,l=48,c=a,u){const d=Go(i),m=h0(c,r),f=I(Math.max(s*(d?.48:.85),m*(d?.72:.22)),0,1);if(i==="bounce"){const b=.11+Math.abs(t.vx)*2.4,y=.09+Math.abs(t.vy)*2.1;return{x:Le(t.x+b*a),y:Le(t.y+y*a*.92),px:I((.1+t.size*.07)*(1+f*.22),.08,.28),glow:f*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const b=a*(2.2+o*.25)+e*.55,y=Math.cos(b);return{x:Le(t.x+t.vx*a*.45),y:Le(t.y+t.vy*a*.38),px:I((.12+t.size*.06)*(1+f*.18),.08,.26),glow:f*.35,rot:t.rot+Math.sin(b)*.15,alpha:I(.28+Math.abs(y)*.72,.2,1),flip:y}}if(i==="glow"){const b=.45+.55*Math.sin(a*2.4+e*.7),y=I(b*.4+f*.55+n*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:I((.1+t.size*.08)*(.9+y*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:I(.5+y*.45,.35,1),glow:y}}if(i==="flash"){const b=.7+.3*Math.sin(a*5.2+e)+f*.12,y=Oi[(Math.floor(a*3.2+e*3)>>>0)%Oi.length];return{x:Le(t.x+t.vx*a*.32),y:Le(t.y+t.vy*a*.28),px:I((.11+t.size*.07)*(1+f*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:I(b,.4,1),glow:.16+f*.45,tint:y}}if(i==="hop"){const b=r>40?r/60:.85,y=me(a*b+t.z),k=Math.abs(Math.sin(y*Math.PI))*(.72+f*.45)+f*.14,_=Math.cos(y*Math.PI*2);return{x:Le(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Le(t.y)*.62-k*.2,px:I(.1+t.size*.07+k*.02,.08,.22),rot:t.rot+k*.55,alpha:1,flip:_}}if(i==="kick"){const b=.1+Math.abs(t.vx)*2.1,y=.08+Math.abs(t.vy)*1.8;return{x:Le(t.x+b*a),y:Le(t.y+y*a),px:I((.1+t.size*.07)*(1+f*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:f*.7}}if(i==="jelly"){const b=1+Math.sin(a*5.2+e)*.08+f*.2;return{x:Le(t.x+t.vx*a*.5),y:Le(t.y+t.vy*a*.42),px:I(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:b}}if(i==="tide"){const k=e%8,_=Math.floor(e/8)%6,S=(k+.5)/8-.5,M=(_+.5)/6-.5,A=Math.sin(a*1.7+_*.72+k*.18);return{x:S*.9+A*.07,y:M*.74+Math.sin(a*.82+_*.9)*.035,px:I(.085+t.size*.045+f*.05,.06,.2),rot:t.rot+A*.22,alpha:1,glow:f*.5}}if(i==="rings"){const y=e%4,k=Math.floor(e/4),_=12,S=y&1?-1:1,M=k/_*Math.PI*2+a*(.48+y*.08)*S,A=.14+y*.11;return{x:Math.cos(M)*A,y:Math.sin(M)*A*.88,px:I(.07+t.size*.035+f*.05,.05,.18),rot:M+t.rot*.25,alpha:.96,glow:f*.48}}if(i==="loom"){const b=a*1.05+t.x*Math.PI*2,y=a*1.45+t.y*Math.PI*2;return{x:Math.sin(b)*.4+Math.sin(y*.5)*.06,y:Math.sin(b*2+t.z*Math.PI)*.3,px:I(.08+t.size*.045+f*.05,.06,.2),rot:b*.18+t.rot,alpha:1,glow:f*.48}}if(i==="petal"){const y=e%6,k=Math.floor(e/6)/8,_=y/6*Math.PI*2+a*.34,S=.8+.2*Math.sin(a*1.25),M=(.1+k*.32)*S;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.9,px:I(.075+t.size*.04+f*.05,.055,.2),rot:_+Math.PI*.5,alpha:I(.42+S*.55,.4,1),glow:f*.5}}if(i==="flock"){const b=e%5,k=me(t.z+a*(.18+b*.02))*Math.PI*2+b*.32,_=.2+Math.sin(k*2+b)*.1+b*.028;return{x:Math.cos(k)*_,y:Math.sin(k*.86)*_*.7,px:I(.075+t.size*.04+f*.05,.055,.19),rot:k+Math.PI*.5,alpha:1,glow:f*.48}}if(i==="wheel"){const y=e%3,S=Math.floor(e/3)/14*Math.PI*2+a*.58*(y===1?-1:1),M=.2+y*.12,A=.5+.5*Math.sin(S);return{x:Math.cos(S)*M,y:Math.sin(S)*M*.72,px:I((.075+t.size*.035)*(.78+A*.28)+f*.05,.05,.22),rot:S,alpha:I(.5+A*.45,.45,1),glow:f*.48}}if(i==="silk"){const b=e%4,y=b<2?1:-1,k=me(t.x+a*.14*y+b*.08),_=(b/3-.5)*.52+Math.sin(k*Math.PI*3+b)*.055;return{x:k-.5,y:_,px:I(.07+t.size*.038+f*.05,.05,.18),rot:Math.cos(k*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:f*.45}}if(i==="bars"){const k=e%8,_=Math.floor(e/8)%6,S=(k+.5)/8-.5,M=.32+.68*(.5+.5*Math.sin(a*2.15+k*.85+t.z)),A=I(M*(.42+o*.22+n*.2+m*.28),.18,1),E=.42-_/Math.max(5,1)*A*.82;return{x:S*.86,y:E,px:I(.075+t.size*.03+f*.03,.055,.18),rot:t.rot*.2,alpha:I(.45+(1-_/6)*.5+f*.15,.4,1),glow:f*.55,squash:1-f*.08}}if(i==="ripple"){const y=e%3,k=Math.floor(e/3),_=16,S=me(a*.32),M=.15+y*.145+S*.16+m*.05,A=k/_*Math.PI*2+a*.1;return{x:Math.cos(A)*M,y:Math.sin(A)*M*.88,px:I(.062+t.size*.024+f*.02,.048,.13),rot:A+t.rot*.2,alpha:I(.96-y*.08,.6,1),glow:f*.45}}if(i==="swing"){const k=e%6,_=Math.floor(e/6)%8,S=r>40?r/60*Math.PI*2:5.4,M=k&1?-1:1,A=Math.sin(a*S+k*.85)*.82*M,E=.07+_*.072;return{x:(k/Math.max(5,1)-.5)*.9+Math.sin(A)*E,y:-.44+Math.cos(A)*E,px:I(.07+t.size*.03+f*.028,.05,.16),rot:A,alpha:1,glow:f*.4}}if(i==="burst"){const y=e%3,S=Math.floor(e/3)/16*Math.PI*2+a*.2*(y===1?-1:1),M=(.14+y*.13)*(1+m*.42);return{x:Math.cos(S)*M,y:Math.sin(S)*M*.9,px:I((.08+t.size*.035)*(1+f*.22),.055,.22),rot:S+t.rot*.2,alpha:I(.55+f*.4,.45,1),glow:f*.75,squash:1+f*.14}}if(i==="halo"){const y=e%2,S=Math.floor(e/2)/24*Math.PI*2+a*.26*(y?-1:1),M=.84+.16*Math.sin(a*1.15)+f*.2,A=(.26+y*.14)*M,E=I(.28+f*.65+n*.15,0,1);return{x:Math.cos(S)*A,y:Math.sin(S)*A*.9,px:I(.07+t.size*.032+E*.04,.05,.18),rot:S+Math.PI*.5,alpha:I(.5+E*.45,.4,1),glow:E}}if(i==="wave"){const k=e%16,_=Math.floor(e/16)%3,S=(k+.5)/16-.5,M=.09+o*.05+m*.08,A=S*Math.PI*3.4+a*2.15+_*.55;return{x:S*.92,y:(_-1)*.2+Math.sin(A)*M,px:I(.065+t.size*.03+f*.026,.05,.15),rot:Math.cos(A)*.32,alpha:1,glow:f*.45}}if(i==="drop"){const b=b0(s),y=b*b;return{x:t.x-.5,y:t.y-.5-y*.07,px:I((.1+t.size*.075)*(1+b*.9),.07,.44),glow:b*.95,rot:t.rot,alpha:1,squash:1-b*.2}}if(i==="spot"){const b=Math.max(8,l),y=y0(c,r,b),k=e===y,_=k?I(Math.max(s,f),0,1):0,S=e/b*Math.PI*2,M=.3;return{x:Math.cos(S)*M,y:Math.sin(S)*M*.78,px:I((k?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:k?1:.52,squash:1-_*.14}}if(i==="pong"){const b=ft(r),y=Le(t.x+(.16+Math.abs(t.vx)*.5)*c*b),k=Le(t.y+(.13+Math.abs(t.vy)*.42)*c*b*.9),_=Math.min(.5-Math.abs(y),.5-Math.abs(k));return{x:y,y:k,px:I(.08+t.size*.04+f*.02,.06,.18),glow:(_<.065?.55:0)+f*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const y=bs(c,r,2),k=Math.floor(e/16)%2,_=(e%16/16+y/16)*Math.PI*2*(k?-1:1),S=.26+k*.12;return{x:Math.cos(_)*S,y:Math.sin(_)*S*.8,px:I(.07+t.size*.03+f*.02,.05,.16),rot:_,alpha:1,glow:f*.55}}if(i==="moire"){const b=e&1,k=Math.floor(e/2)%18/18*Math.PI*2+a*(b?-.78:.62),_=.2+b*.13+m*.035;return{x:Math.cos(k)*_,y:Math.sin(k)*_*.86,px:I(.065+t.size*.028+f*.018,.048,.14),rot:k+t.rot*.2,alpha:b?.78:1,glow:f*.4}}if(i==="grid"){const k=e%8,_=Math.floor(e/8)%6,S=_&1?1:-1;return{x:(me((k+.5)/8+c*ft(r)*.28*S)-.5)*.92,y:((_+.5)/6-.5)*.78,px:I(.07+t.size*.03+f*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:f*.42}}if(i==="zip"){const b=e%3,y=b===1?-1:1,k=1-m*.16;return{x:(me(t.x+c*ft(r)*.34*y*k+b*.12)-.5)*.94,y:(b/2-.5)*.52,px:I(.07+t.size*.032+f*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:f*.4}}if(i==="ghost"){const b=(e&1)===0,y=b?0:1/ft(r),k=t.x*Math.PI*2+(c-y)*ft(r)*1.35,_=.3+Math.sin((c-y)*1.1+t.y*6)*.05;return{x:Math.cos(k)*_,y:Math.sin(k*.92)*_*.72,px:I(.075+t.size*.032,.055,.16),rot:k+Math.PI*.5,alpha:b?1:.34,glow:b?f*.5:.12}}if(i==="poly"){const b=e&1,y=b?8:12,k=Math.floor(e/2)%y,_=b?3:4,S=k/y*Math.PI*2+c*ft(r)*(_/4)*(b?-1:1),M=.2+b*.15;return{x:Math.cos(S)*M,y:Math.sin(S)*M*.84,px:I(.068+t.size*.03+f*.018,.05,.15),rot:S,alpha:1,glow:f*.45}}if(i==="fall"){const b=me(t.z+c*ft(r,.5)),y=Ps(b),k=y*y,_=y>.82?(y-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+k*.86,px:I(.075+t.size*.035+f*.02,.055,.17),rot:t.rot+k*.4,alpha:1,glow:f*.4,squash:1-_*.28}}if(i==="liss"){const b=ft(r),y=c*b*Math.PI*2*1.5+t.x*6.2,k=c*b*Math.PI*2+t.y*5.4;return{x:Math.sin(y)*.4,y:Math.sin(k)*.32,px:I(.07+t.size*.032+f*.02,.05,.16),rot:y*.15+t.rot,alpha:1,glow:f*.42}}if(i==="snap"){const b=bs(c,r,1)&1?1:-1,y=Math.floor(e/8)%5,k=e%8;return{x:b*(.2+k/7*.1),y:(y/4-.5)*.72,px:I(.072+t.size*.03+f*.025,.05,.16),rot:t.rot*.2+b*.08,alpha:1,glow:f*.6,squash:1-f*.1}}if(i==="chain"){const b=u?.travel??1,y=u?.morph??.7,k=u?.vary??1,_=u?.smooth??.72,M=.62/Math.max(8,l),A=me(c*b*.14-e*M),E=c*y,R=to(A,E,k,_),D=to(me(A+M),E,k,_),x=Math.max(.42,1.05-R.z*.55),B=Math.max(.42,1.05-D.z*.55),T=R.x/x,U=R.y/x,G=Math.atan2(D.y/B-U,D.x/B-T),L=I(1.12/x,.55,1.85);return{x:T,y:U,px:I((.072+t.size*.028)*L,.05,.24),rot:G,alpha:I(.52+L*.42,.5,1)}}if(i==="tunnel"){const y=.3+me(t.z-a*(.4+o*.22+n*.1))*2.45;if(y<.34||y>2.65)return null;const k=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/y;return{x:Math.cos(k)*_,y:Math.sin(k)*_,px:I(.2*t.size*(.95+n*.1+f*.26)/y,.04,.5),glow:f*.42,rot:t.rot+t.vr*a*.2,alpha:I((2.65-y)/.28,0,1)*I((y-.3)/.1,0,1)}}if(i==="lattice"){const k=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,M=.32+(1-me(a*(.2+o*.12)+t.z*.02))*2.2;return{x:k/(M*.62),y:_/(M*.62),px:I(.16*t.size/M,.05,.42),rot:t.rot*.25,alpha:I((2.4-M)/.25,0,1)}}if(i==="bloom"){const b=me(t.z-a*(.34+n*.12)),y=b*b,k=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(k)*y*.92,y:Math.sin(k)*y*.92,px:I(.05+y*.32*t.size*(1+o*.06+f*.24),.04,.48),glow:f*.4,rot:t.rot+b*.4,alpha:I(1.05-y,0,1)*I(b/.08,0,1)}}if(i==="spiral"){const y=.28+me(t.z-a*(.4+o*.2+n*.08))*2.6;if(y<.32||y>2.75)return null;const k=t.x*Math.PI*2+2.15/y+a*.1,_=(.1+t.y*.38)/y;return{x:Math.cos(k)*_,y:Math.sin(k)*_,px:I(.2*t.size*(.94+n*.1+f*.26)/y,.04,.52),glow:f*.4,rot:t.rot+k*.15,alpha:I((2.75-y)/.28,0,1)*I((y-.28)/.1,0,1)}}if(i==="helix"){const y=.26+me(t.z-a*(.46+o*.22+n*.08))*2.7;if(y<.3||y>2.85)return null;const k=e&1?Math.PI:0,_=a*(1.7+1.35/y)+t.x*Math.PI*2+k,S=(.11+t.y*.26)/y;return{x:Math.cos(_)*S,y:Math.sin(_)*S*.92,px:I(.22*t.size*(.93+n*.1+f*.26)/y,.04,.54),glow:f*.4,rot:_+t.rot,alpha:I((2.85-y)/.28,0,1)*I((y-.26)/.1,0,1)}}if(i==="prism"){const y=.28+me(t.z-a*(.42+o*.2+n*.08))*2.55;if(y<.32||y>2.7)return null;const k=a*.22+t.rot*.4,_=me(t.x)-.5,S=me(t.y)-.5,M=Math.cos(k),A=Math.sin(k);return{x:(_*M-S*A)/y,y:(_*A+S*M)/y,px:I(.2*t.size*(.94+n*.1+f*.26)/y,.04,.52),glow:f*.4,rot:t.rot+k,alpha:I((2.7-y)/.26,0,1)*I((y-.28)/.1,0,1)}}if(i==="gyre"){const b=ai(t.z-a*.4,.28,2.6);if(!b)return null;const{depth:y,fade:k}=b,_=a*.2+t.x*Math.PI*2,S=.22+t.y*.5,M=Math.cos(_)*S,A=Math.sin(_*.93)*S*.86,E=Yo(M,A,a*.12);return{x:E.x/y,y:E.y/y+Math.sin(a*.16)*.05,px:I(.22*t.size*(.93+n*.1+f*.26)/y,.04,.55),glow:f*.42,rot:t.rot+_*.2+t.vr*a*.08,alpha:k}}if(i==="well"){const b=ai(t.z-a*.4,.26,2.65);if(!b)return null;const{depth:y,fade:k}=b,_=t.x*Math.PI*2+a*.16+2.6*Math.log(y+.18),S=(.2+e%8*.028)/Math.pow(y,.82);return{x:Math.cos(_)*S,y:Math.sin(_)*S,px:I(.21*t.size*(.93+n*.1+f*.26)/y,.04,.54),glow:f*.42,rot:t.rot+_*.2,alpha:k}}if(i==="hall"){const b=ai(t.z-a*.42,.3,2.5);if(!b)return null;const{depth:y,fade:k}=b,_=e%4,S=me(t.x*.72+t.y*.28)-.5,M=.05/y;let A=0,E=0;_===0?(A=-.52/y-M,E=S/y):_===1?(A=.52/y+M,E=S/y):_===2?(A=S/y,E=-.4/y-M):(A=S/y,E=.4/y+M);const R=Yo(A,E,.42/y+a*.08);return{x:R.x,y:R.y,px:I(.2*t.size*(.93+n*.1+f*.26)/y,.04,.5),glow:f*.4,rot:t.rot+t.vr*a*.1,alpha:k}}if(i==="drift"){const b=ai(t.z-a*.4,.28,2.58);if(!b)return null;const{depth:y,fade:k}=b,S=e%5*1.256,M=a*.09,A=me(t.x+Math.cos(S)*M)-.5,E=me(t.y+Math.sin(S)*M*.72)-.5;return{x:A/y,y:E/y,px:I(.21*t.size*(.93+n*.1+f*.26)/y,.04,.52),glow:f*.42,rot:t.rot+t.vr*a*.1,alpha:k}}if(i==="braid"){const b=ai(t.z-a*.44,.26,2.68);if(!b)return null;const{depth:y,fade:k}=b,_=e%3,S=a*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/y,M=(.13+t.y*.2)/y,A=Math.sin(a*.2+_*2.1)*.07;return{x:Math.cos(S)*M+A,y:Math.sin(S)*M*.9,px:I(.22*t.size*(.93+n*.1+f*.26)/y,.04,.54),glow:f*.4,rot:S+t.rot,alpha:k}}if(i==="sway"){const b=ai(t.z-a*.46,.26,2.7);if(!b)return null;const{depth:y,fade:k}=b,_=Math.sin(a*.19)*.48,S=Math.cos(a*.13)*.3,M=Math.sin(a*.07)*.32,A=me(t.x+t.vx*a*.03)-.5,E=me(t.y+t.vy*a*.02)-.5,R=Yo(A,E,M),D=1/y-.38;return{x:R.x/y+_*D,y:R.y/y+S*D,px:I(.24*t.size*(.92+n*.1+f*.28)/y,.04,.58),glow:f*.46,rot:t.rot+t.vr*a*.12+M*.4,alpha:k}}const h=.26+me(t.z-a*(.46+o*.24+n*.1))*2.7;if(h<.3||h>2.85)return null;const p=(me(t.x+t.vx*a*.03)-.5)/h,v=(me(t.y+t.vy*a*.02)-.5)/h;return{x:p,y:v,px:I(.24*t.size*(.92+n*.1+f*.28)/h,.04,.6),glow:f*.48,rot:t.rot+t.vr*a*.12,alpha:I((2.85-h)/.3,0,1)*I((h-.26)/.1,0,1)}}const oi={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function Qd(t){return oi[t]}function Xe(t,e,i){const a=parseInt(t.slice(1),16),o=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(o))return t;const n=I(i,0,1),s=l=>Math.round((a>>l&255)*(1-n)+(o>>l&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function Yd(t,e,i,a,o,n,s,r=0,l=0,c=!1,u=Xo[o]){const d=Te(s+4>>>0),m=Ke(d,oi[o]),f=Ke(d,oi[o]),g=Ke(d,oi[o]),h=c?Xe(a,"#08060a",.68):a;t.fillStyle=h,t.fillRect(0,0,e,i);const p=t.createLinearGradient(0,0,e,i);if(c){const k=Xe(u,"#ffd8a8",.3),_=.16+l*.4+r*.06;p.addColorStop(0,Xe(h,k,_*.55)),p.addColorStop(.48,Xe(h,m,.2)),p.addColorStop(1,Xe(h,f,.24))}else p.addColorStop(0,Xe(a,m,.38)),p.addColorStop(.45,Xe(a,g,.28)),p.addColorStop(1,Xe(a,f,.42));t.fillStyle=p,t.fillRect(0,0,e,i);const v=e*(.5+Math.sin(n*.17)*.08),b=i*(.46+Math.cos(n*.13)*.06),y=t.createRadialGradient(v,b,0,v,b,Math.max(e,i)*.72);if(c){const k=Xe(u,"#ffd8a8",.28);y.addColorStop(0,Xe(h,k,.22+l*.38+r*.05)),y.addColorStop(1,h)}else y.addColorStop(0,Xe(a,m,.42+r*.1)),y.addColorStop(1,a);t.fillStyle=y,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function Jd(t,e=0){const i=Te(e+17>>>0);return Ke(i,oi[t])}function Ui(t,e){const i=Te(t+17>>>0);return Ke(i,oi[Ft[Math.floor(i()*Ft.length)]])}function qi(t,e="#c41e3a"){const i=Te(t+91>>>0);return i()<.35?e:Ke(i,Oi)}function eh(t){return Xo[t]}function Wt(t){return Ft[(t>>>0)%Ft.length]}const Di=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],Jo={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},en={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},jt=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(en).map(t=>t.palette)];function $i(t){return t&&Di.includes(t)?t:"kit"}function ni(t,e){const i=$i(e);return i==="kit"?Qd(t):en[i].grounds}function kt(t,e){const i=$i(e);return i==="kit"?eh(t):en[i].ink}function io(t,e=0,i){const a=ni(t,i),o=Te(e+17>>>0);return a[Math.floor(o()*a.length)%a.length]}function ao(t){return Di[Math.floor(t()*Di.length)%Di.length]}function As(t){return jt[Math.floor(t()*jt.length)%jt.length]}function Ne(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const th=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ih=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ah=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],oh=[{id:"halftone",name:"Dot Screen",category:"texture",description:"Ben-Day / newsprint dots that turn the collage into a printed sheet",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.72},{id:"scale",label:"Scale",kind:"float",min:.35,max:2.4,step:.01,default:1},{id:"contrast",label:"Ink",kind:"float",min:0,max:1,step:.01,default:.42},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],nh=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],sh=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Fs=`
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
`,Is=`
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
`,rh=`
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
`,lh=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,ch=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Bs=`
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
`,tn={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Bs}${Is}`,applyGlsl:lh};function fh(t){return t?{...tn,extraUniforms:`${Bs}${Is}${rh}`,applyGlsl:ch}:tn}const uh=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Fs}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},tn],an=[...th,...ih,...ah,...oh,...nh,...sh,...uh],dh=new Map(an.map(t=>[t.id,t]));function hh(){return an}function ut(t){return dh.get(t)}function mh(){const t={};for(const e of an)(t[e.category]??=[]).push(e);return t}const ph=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"texture",label:"Texture"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function on(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(o=>({...o,params:{...o.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Ne("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function gh(t,e){const i=e.data,a=t.sources.map(n=>n.id),o=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&a.includes(n.sourceId)?n.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:o,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function vh(t,e){if(t.length===0)return null;const i=Te(e);return t[Math.floor(i()*t.length)]}function bh(t){return{...t,id:Ne("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Rs=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function yh(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(u=>{const d=parseInt(u.slice(1),16),m=d>>16&255,f=d>>8&255,g=d&255,h=p=>I(Math.round(De(p,t()*255,a)),0,255);return`#${[h(m),h(f),h(g)].map(p=>p.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const o=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),r=o+t()*(n-o),l=De(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function nn(t,e,i,a){const o=ut(t.typeId);if(!o)return t;const n=Te(e),s={...t.params};for(const r of o.params)a&&r.id!==a||(s[r.id]=yh(n,r,s[r.id]??r.default,I(i,0,1)));return{...t,params:s}}function wh(t,e,i,a=!1,o){const n=t.effects.map((s,r)=>a&&o&&s.id!==o?s:nn(s,e+r*997,i));return{...t,effects:n}}function sn(t,e,i){const a=ut(t),o={};if(a)for(const n of a.params)o[n.id]=n.default;return nn({id:Ne("fx"),typeId:t,enabled:!0,params:o},e,i)}function rn(t,e,i,a){const o={...t.params};if(t.typeId==="grade"&&(e==="lush"?(o.saturation=.18+a()*.42,o.brightness=-.04+a()*.16,o.contrast=.06+a()*.22,o.gamma=.82+a()*.35,o.hue=(a()-.5)*.18,o.exposure=-.15+a()*.4):e==="outsider"?(o.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,o.contrast=.2+a()*.55,o.gamma=.55+a()*1.1,o.hue=(a()-.5)*.7):(o.saturation=.05+a()*.5,o.contrast=.1+a()*.35,o.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(o.shadow=i.shadow,o.highlight=i.highlight,o.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(o.leakColor=i.leak,o.leak=e==="lush"?.18+a()*.35:a()*.22,o.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(o.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,o.halation=e==="lush"?.22+a()*.4:a()*.25,o.size=1.4+a()*2.2),t.typeId==="warp"&&(o.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(o.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(o.mixScan=e==="lush"?a()*.2:.25+a()*.5,o.noise=e==="lush"?a()*.1:.12+a()*.35),(t.typeId==="halftone"||t.typeId==="riso"||t.typeId==="hatch"||t.typeId==="holo"||t.typeId==="crackle"||t.typeId==="nap")&&(o.amount=e==="lush"?.38+a()*.32:.5+a()*.38),t.typeId==="posterize"&&(o.levels=3+Math.floor(a()*6),o.dither=.08+a()*.35),t.typeId==="threshold"&&(o.mix=.35+a()*.45,o.soft=.04+a()*.18),t.typeId==="critters"){o.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),o.size=.85+a()*.7,o.amount=.7+a()*.3,o.speed=.7+a()*1.3,o.seed=1+Math.floor(a()*9998);const n=a();e==="lush"?o.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?o.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":o.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){o.size=.12+a()*.05,o.count=1,o.crowd="normal",o.place="center";const n=a();e==="lush"?o.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?o.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":o.move=n>.78?"drift":"dance",o.echo=.35+a()*.5,o.amount=1,o.speed=o.move==="dance"?.55+a()*1.5:.32+a()*.7,o.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?o.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?o.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":o.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?o.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?o.coat=r>.5?"sodium":r>.26?"cream":"wild":o.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(o.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),o.zoom=.7+a()*.8),t.typeId==="channels"&&(o.tint=i.leak,o.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(o.lo=.1+a()*.22,o.hi=.5+a()*.35,o.amount=.45+a()*.4,o.invert=a()>.72),t.typeId==="dropout"&&(o.amount=.28+a()*.4,o.rate=.18+a()*.4,o.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:o}}function kh(t,e="mix"){const i=Te(t>>>0);return rn(sn("critters",t,.85),e,jt[t%jt.length],i)}function Th(t,e="mix"){const i=Te(t>>>0);return rn(sn("dancer",t,.85),e,jt[t%jt.length],i)}function _h(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Th(t.seed+i*4243,"mix")]})}}function zs(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,kh(t.seed+i*7919,"mix")]})}}function xh(){return Rs.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Sh(){return hh().map(t=>t.id).filter(t=>t!=="dancer")}function Ch(t,e){const i=Te(t>>>0),a=Sh(),o=e?3:2,n=e?5:4,s=Math.min(a.length,o+Math.floor(i()*(n-o+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Mh(t,e,i,a=!1,o=!0){const n=Te(e+17>>>0),s=a?n()>.5?"outsider":"mix":n()>.55?"lush":n()>.35?"mix":"outsider",r=As(n),l=o?Ch(e,a).map((c,u)=>rn(sn(c,e+u*3331,i),s,r,Te(e+u*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function at(t,e,i){return De(e,i,t())}function ln(t){const e=vi(at(t,.45,.85)),i=bi(Math.max(e+.08,at(t,1.3,2.4)));return{collageFieldPattern:xi[Math.floor(t()*xi.length)],collageFieldEvolve:mi(at(t,.75,1.35)),collageFieldDamp:ma(0),collageFieldStrength:hi(at(t,.8,1.6)),collageFieldDensity:pi(at(t,.8,1.5)),collageFieldSparsity:ki(at(t,.4,1.4)),collageFieldPerturb:yi(at(t,.02,.5)),collageFieldCurl:gi(at(t,.1,.9)),collageFieldWarp:wi(at(t,.6,1.6)),collageFieldMotion:_i(at(t,.15,.8)),collageFieldContrast:Ti(at(t,.6,1.6)),collageFieldMinScale:e,collageFieldMaxScale:i}}function Eh(t,e){const i=Te(e>>>0),a="field",o=t.collageKit,n=t.collageKitB;return{...t,generator:zi(a),collageMove:a,...ln(i),name:o?n?`${Dt[a]} · ${o} · ${n}`:`${Dt[a]} · ${o}`:t.name}}function Os(t,e,i,a,o,n=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=Te(l^2654435769),u=t.layers.map((y,k)=>e==="selected"&&y.id!==i?y:e==="param"?y.id!==i?y:{...y,effects:y.effects.map(_=>_.id===a&&o?nn(_,l+k*13,Math.max(r,.55),o):_)}:e==="all"?Mh(y,l+k*7919,r,n,s):wh(y,l+k*7919,r,!0,a)),d=hs,m=Te(l+0*7919>>>0),f=xh(),g=f[Math.floor(m()*f.length)]??Rs[0],p={"herald tour":{generator:"heraldry",a:Ui(l),b:qi(l)},"dense paper":{generator:"wallpaper",a:Ui(l+3),b:qi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:Ui(l+5),b:qi(l+5)},"heart rain":{generator:"shower",a:Ui(l+7),b:qi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Ui(l+9),b:qi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[g.name],v=t.sources.map((y,k)=>{if(e!=="all"||y.kind!=="generator")return y;const _=Te(l+k*131),S=As(_);if(ze(y.generator)||hs.includes(y.generator)){const B=Wt(l+k*41),T=Ko(l+k*73),U=Wt(l+k*99),G=_()>.74&&U!==B?U:void 0,L=ao(_);return{...y,generator:zi(T),collageKit:B,collageKitB:G,collageMove:T,collageColorPack:L,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageChainAnimal:T==="chain"&&_()>.55?eo[1+Math.floor(_()*5)]:"off",...T==="field"?ln(_):{},collageCamera:y.collageCamera??"fixed",collageCameraFeel:y.collageCameraFeel,collageHuntWideMin:y.collageHuntWideMin,collageHuntWideMax:y.collageHuntWideMax,collageHuntFollowMin:y.collageHuntFollowMin,collageHuntFollowMax:y.collageHuntFollowMax,collageHuntSnap:y.collageHuntSnap,collageHuntZoom:y.collageHuntZoom,collageHuntTight:y.collageHuntTight,collageHuntReactMin:y.collageHuntReactMin,collageHuntReactMax:y.collageHuntReactMax,collageHuntPrecision:y.collageHuntPrecision,collageHuntSelect:y.collageHuntSelect,collageHuntFocus:y.collageHuntFocus,collageHuntFocusSpeed:y.collageHuntFocusSpeed,collageHuntFocusError:y.collageHuntFocusError,collageHuntVariation:y.collageHuntVariation,colorA:io(B,l+k*17,L),colorB:kt(B,L),name:G?`${Dt[T]} · ${B} · ${G}`:`${Dt[T]} · ${B}`}}const M=n?!1:_()>.35,A=p?p.generator:M?y.generator:d[Math.floor(_()*d.length)],E=Wt(l+k*41),R=ao(_),D=ze(A)?io(E,l+k*17,R):S.inkA,x=ze(A)?kt(E,R):S.inkB;return{...y,generator:A,collageKit:ze(A)?E:y.collageKit,collageColorPack:ze(A)?R:y.collageColorPack,colorA:p?p.a:D,colorB:p?kt(E,R):x}}),b=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:u,sources:v,globalFeedback:b}}function Ph(t){const e=t.seed+7919>>>0,i=Te(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],o=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!ze(r.generator))return r;const c=Ft[Math.floor(i()*Ft.length)],u=Ko(e+l*59),d=ao(i);return{...r,generator:zi(u),collageKit:c,collageMove:u,collageColorPack:d,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageChainAnimal:u==="chain"&&i()>.55?eo[1+Math.floor(i()*5)]:"off",...u==="field"?ln(i):{},collageCamera:r.collageCamera??"fixed",collageCameraFeel:r.collageCameraFeel,collageHuntSelect:r.collageHuntSelect,collageHuntFocus:r.collageHuntFocus,collageHuntVariation:r.collageHuntVariation,colorA:io(c,e+l*13,d),colorB:kt(c,d),name:`${Dt[u]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:o[Math.floor(i()*o.length)],coat:n[Math.floor(i()*n.length)]}}:l)}))};return s=zs(s),s}function Ah(){return{x:0,y:0,scale:1,rotation:0}}function Fh(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Hs(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Ih(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Bh(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!1}}const Rh={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},oo={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},zh={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Ls(t,e,i,a){const o=t==="chain"?Ri(a):"off",n=o!=="off"?`CHAIN · ${vs[o].toUpperCase()}`:Dt[t];return i&&i!==e?`${n} · ${oo[e]} · ${oo[i]}`:`${n} · ${oo[e]}`}function si(t="plasma",e,i,a){const o=ze(t)?$t(e):void 0,n=Rh[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;o&&(s=i==="mix"||i==="tour"?Ko(Date.now()+Math.floor(Math.random()*997)):i?ps(i):ys(t));const r=s?zi(s):t??"plasma",l=s?Dt[s]:zh[t??""]??(t?t.toUpperCase():"SIGNAL"),c=o&&a?.kitB?$t(a.kitB):void 0,u=c&&o&&c!==o?c:void 0,d=o&&s?Ls(s,o,u,a?.chainAnimal):o?`${l} · ${oo[o]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,m=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,f=o?$i(a?.colorPack):void 0;return{id:Ne("src"),name:d,kind:"generator",generator:r,colorA:m??(o?io(o,s==="rush"?1:s==="tunnel"?5:s==="bounce"?7:11,f):n.a),colorB:o?kt(o,f):n.b,collageColorPack:f,collageKit:o,collageKitB:u,collageMove:s,collageNight:o?!!a?.night:void 0,collageScale:o?Li(a?.scale):void 0,collageDensity:o?Ni(a?.density):void 0,collagePace:o?Pi(a?.pace):void 0,collageChainTravel:o?Ai(a?.chainTravel):void 0,collageChainMorph:o?Fi(a?.chainMorph):void 0,collageChainVary:o?Ii(a?.chainVary):void 0,collageChainSmooth:o?Bi(a?.chainSmooth):void 0,collageChainAnimal:o?Ri(a?.chainAnimal):void 0,collageSpringStrength:o?ba(a?.springStrength):void 0,collageSpringDamp:o?ya(a?.springDamp):void 0,collageSpringDist:o?wa(a?.springDist):void 0,collageSpringElast:o?ka(a?.springElast):void 0,collageSpringBreak:o?Ta(a?.springBreak):void 0,collageFlowScale:o?_a(a?.flowScale):void 0,collageFlowTurb:o?xa(a?.flowTurb):void 0,collageFlowEvolve:o?Sa(a?.flowEvolve):void 0,collageFlowForce:o?Ca(a?.flowForce):void 0,collageFlowDepth:o?Ma(a?.flowDepth):void 0,collageBoidCohere:o?Ea(a?.boidCohere):void 0,collageBoidSep:o?Pa(a?.boidSep):void 0,collageBoidAlign:o?Aa(a?.boidAlign):void 0,collageBoidRadius:o?Fa(a?.boidRadius):void 0,collageBoidSpeed:o?Ia(a?.boidSpeed):void 0,collagePoleCount:o?Ba(a?.poleCount):void 0,collagePoleAttract:o?Ra(a?.poleAttract):void 0,collagePoleRepel:o?za(a?.poleRepel):void 0,collagePoleSpeed:o?Oa(a?.poleSpeed):void 0,collagePoleFalloff:o?Ha(a?.poleFalloff):void 0,collagePoleSwitch:o?La(a?.poleSwitch):void 0,collageFieldStrength:o?hi(a?.fieldStrength):void 0,collageFieldScale:o?Ao(a?.fieldScale):void 0,collageFieldEvolve:o?mi(a?.fieldEvolve):void 0,collageFieldDensity:o?pi(a?.fieldDensity):void 0,collageFieldDensityScale:o?Fo(a?.fieldDensityScale):void 0,collageFieldDensityEvolve:o?Io(a?.fieldDensityEvolve):void 0,collageFieldFlow:o?Bo(a?.fieldFlow):void 0,collageFieldCurl:o?gi(a?.fieldCurl):void 0,collageFieldFlowScale:o?Ro(a?.fieldFlowScale):void 0,collageFieldAttract:o?zo(a?.fieldAttract):void 0,collageFieldRepel:o?Oo(a?.fieldRepel):void 0,collageFieldRadius:o?Ho(a?.fieldRadius):void 0,collageFieldInertia:o?Lo(a?.fieldInertia):void 0,collageFieldDamp:o?ma(a?.fieldDamp):void 0,collageFieldMaxV:o?No(a?.fieldMaxV):void 0,collageFieldScaleAmp:o?Uo(a?.fieldScaleAmp):void 0,collageFieldMinScale:o?vi(a?.fieldMinScale):void 0,collageFieldMaxScale:o?bi(a?.fieldMaxScale):void 0,collageFieldPerturb:o?yi(a?.fieldPerturb):void 0,collageFieldWarp:o?wi(a?.fieldWarp):void 0,collageFieldSparsity:o?ki(a?.fieldSparsity):void 0,collageFieldContrast:o?Ti(a?.fieldContrast):void 0,collageFieldMotion:o?_i(a?.fieldMotion):void 0,collageFieldPattern:o?Jt(a?.fieldPattern):void 0,collageCamera:o?Ei(a?.camera):void 0,collageCameraFeel:o?Na(a?.cameraFeel):void 0,collageHuntWideMin:o?qa(a?.huntWideMin):void 0,collageHuntWideMax:o?Da(a?.huntWideMax):void 0,collageHuntFollowMin:o?$a(a?.huntFollowMin):void 0,collageHuntFollowMax:o?Wa(a?.huntFollowMax):void 0,collageHuntSnap:o?ja(a?.huntSnap):void 0,collageHuntZoom:o?Va(a?.huntZoom):void 0,collageHuntTight:o?Ga(a?.huntTight):void 0,collageHuntReactMin:o?Ka(a?.huntReactMin):void 0,collageHuntReactMax:o?Xa(a?.huntReactMax):void 0,collageHuntPrecision:o?Za(a?.huntPrecision):void 0,collageHuntSelect:o?Ua(a?.huntSelect):void 0,collageHuntFocus:o?!!a?.huntFocus:void 0,collageHuntFocusSpeed:o?Qa(a?.huntFocusSpeed):void 0,collageHuntFocusError:o?Ya(a?.huntFocusError):void 0,collageHuntVariation:o?Ja(a?.huntVariation):void 0,width:1280,height:720,duration:0}}function Ns(t){const e=ut(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Ne("fx"),typeId:t,enabled:!0,params:i}}function Us(t,e,i=[]){return{id:Ne("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Ah(),effects:i.map(Ns),mask:Fh(),feedback:Hs()}}function qs(){const t=si("wallpaper","sailor","rush"),e=Us("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Ih(),globalFeedback:{...Hs(),amount:0,opacity:.4,scale:1},exportSettings:Bh(),presets:[]},a=Os({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[on(i,"factory · tour"),on(a,"factory · scramble")],i}function Ds(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1}}class Oh{state;listeners=new Set;constructor(e=qs()){this.state={project:e,ui:Ds(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...Ds(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const F=new Oh;function cn(t,e,i,a,o){if(e<=0)return 0;const n=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return o?(s%e+e)%e:I(s,0,e)}function Hh(t,e,i,a,o){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===a&&(i!=="effect"||n.effectId===o)).sort((n,s)=>n.time-s.time)}function Lh(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let o=0;o<t.length-1;o++){const n=t[o],s=t[o+1];if(e>=n.time&&e<=s.time){const r=s.time-n.time||1;let l=(e-n.time)/r;return(s.easing==="smooth"||n.easing==="smooth")&&(l=Vl(l)),De(n.value,s.value,l)}}return i}function It(t,e,i,a,o,n,s){const r=Hh(t.keyframes,e,i,a,s);return Lh(r,n,o)}function Nh(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(o=>({...o,params:{...o.params}}))};a.opacity=It(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=It(t,e.id,"layer","x",e.transform.x,i),a.transform.y=It(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=It(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=It(t,e.id,"layer","rotation",e.transform.rotation,i);for(const o of Object.keys(a.feedback))a.feedback[o]=It(t,e.id,"feedback",o,e.feedback[o],i);for(const o of a.effects)for(const[n,s]of Object.entries(o.params))typeof s=="number"&&(o.params[n]=It(t,e.id,"effect",n,s,i,o.id));return a}function Uh(t,e){const i=t.layers[0]?.id??"";return It(t,i,"playback","speed",t.playback.speed,e)}const qh=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],Dh=["spot","burst","snap","step"],$h=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],Wh=["drop","halo","bars","wave","poly","ghost","fall"];function jh(t,e){const i=e.reduce((o,n)=>o+n.weight,0);let a=t()*i;for(const o of e)if(a-=o.weight,a<=0)return o.item;return e[e.length-1].item}function Vh(t){return jh(t,qh.map(e=>({item:e.beats,weight:e.weight})))}function Gh(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(o=>o!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function Kh(t,e,i){const a=t<=2?Dh:t<=4?$h:Wh;return Gh(e,a,i)}function $s(t){return 60/Math.max(40,t||120)}function Ws(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function Xh(t,e,i,a){const o=Math.max(1,t),n=$s(e),s=(i??[]).filter(c=>c>=0&&c<o+.05);let r=Number.isFinite(a)&&a>=0?a:s.length?Ws(s[0],n):0;r>=o&&(r=Ws(r,n));const l=[];for(let c=r;c<o-n*.02;c+=n)l.push(c);if(!l.length)for(let c=0;c<o;c+=n)l.push(c);return l.length||l.push(0),l[l.length-1]<o-1e-6&&l.push(o),l}function Zh(t,e,i,a){const o=$s(e),n=Number.isFinite(i)&&i>0?i:0,s=a&&a>0?a:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<n-1e-6?0:Math.max(0,Math.floor((r-n)/o+1e-4))}function Qh(t){const e=Te(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=Xh(i,t.bpm??120,t.beats,t.offset),o=[];let n=0,s,r,l=0;for(;n<a.length-1&&a[n]<i;){const c=Vh(e);r=Wt(t.seed+l*41+Math.floor(e()*17)>>>0);const u=l%5===2||e()>.82,d=e()>.72?Wt(t.seed+l*99+7>>>0):void 0,m=d&&d!==r?d:void 0,f=ao(e),g=ni(r,f);for(const h of c){if(n>=a.length-1||a[n]>=i)break;const p=Math.min(a.length-1,n+h),v=a[n];if(v>=i)break;const b=Kh(p-n,e,s),y=g[Math.floor(e()*g.length)%g.length];o.push({start:v,beats:p-n,startBeat:n,look:{kit:r,kitB:m,move:b,night:u,wash:y,ink:kt(r,f),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=b,n=p}if(l++,l>80)break}if(o.length>=2&&o[o.length-1].beats<2){const c=o.pop();o[o.length-1].beats+=c.beats}if(!o.length){const c=Wt(t.seed);o.push({start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:ni(c)[0],ink:kt(c),scale:.78,density:.88,pace:.62}})}return o}function Yh(t,e,i,a,o){if(!t.length){const c=Wt(1);return{start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:ni(c)[0],ink:kt(c),scale:.78,density:.88,pace:.62}}}const n=t[t.length-1],s=Math.max(i&&i>n.start?i:0,n.start+.5,t.length>1?n.start+(n.start-t[0].start)/Math.max(1,t.length-1):n.start+2);if(a&&a>40){const c=Number.isFinite(o)&&o>=0?o:t[0].start,u=Zh(e,a,c,s);let d=t[0];for(const m of t)if(m.startBeat<=u)d=m;else break;return d}const r=(e%s+s)%s;let l=t[0];for(const c of t)if(c.start<=r+5e-4)l=c;else break;return l}function Jh(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const em=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function tm(t){return(t.type??"").startsWith("audio/")||em.test(t.name)}function Wi(t){return t.sources.find(e=>e.kind==="audio")}let ji=null,Tt=null,Vi=null;const fn=new WeakSet;let Gi=0,Ki=0,Vt=0,js=0;function no(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(ji||(ji=new t,Tt=ji.createAnalyser(),Tt.fftSize=256,Tt.smoothingTimeConstant=.72,Tt.connect(ji.destination),Vi=new Uint8Array(Tt.frequencyBinCount)),ji):null}async function so(){const t=no();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function im(t){const e=no();if(!(!e||!Tt||fn.has(t)))try{e.createMediaElementSource(t).connect(Tt),fn.add(t)}catch{fn.add(t)}}async function am(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",im(i),so();let a=null;const o=no();if(o)try{const d=await t.arrayBuffer(),m=o.decodeAudioData(d.slice(0)).catch(()=>null);a=await Promise.race([m,new Promise(f=>setTimeout(()=>f(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(d=>{if(Number.isFinite(i.duration)&&i.duration>0){d(i.duration);return}i.addEventListener("loadedmetadata",()=>d(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>d(a?.duration??0),{once:!0})}),new Promise(d=>setTimeout(()=>d(a?.duration??0),2500))])||a?.duration||0,r=a?om(a.getChannelData(0),a.sampleRate):[],l=nm(r,s),c=a?sm(a.getChannelData(0),a.sampleRate,l.bpm,l.offset,s):l.offset,u=l.bpm>40?rm(r,l.bpm,c,s):r;return{id:Ne("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:u,bpm:l.bpm,beatOffset:c,objectUrl:e}}function om(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,o=Math.floor((t.length-a)/i);if(o<16)return[];const n=new Float32Array(o);for(let u=0;u<o;u++){const d=u*i;let m=0;for(let f=0;f<a;f+=2){const g=t[d+f];m+=g*g}n[u]=Math.sqrt(m/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let u=s;u<o;u++){let d=0,m=0;for(let p=u-s;p<u;p++)d+=n[p],n[p]>m&&(m=n[p]);d/=s;const f=n[u]-n[u-1];if(!(n[u]>d*1.32&&n[u]>m*.72&&f>.0035))continue;const h=u*i/e;h-c<r||(l.push(h),c=h)}return l}function nm(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let d=1;d<t.length;d++){const m=t[d]-t[d-1];m>=.18&&m<=1.2&&i.push(m)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((d,m)=>d-t[m]).filter(d=>d>.12&&d<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((d,m)=>d-m);const o=a[Math.floor(a.length/2)];let n=60/Math.max(.18,o);for(;n>155;)n/=2;for(;n<72&&n>0;)n*=2;n=un(Math.round(n),70,170);let s=n,r=0,l=-1;const c=Math.max(70,n-8),u=Math.min(170,n+8);for(let d=c;d<=u;d++){const m=60/d,f=e>0?e:(t[t.length-1]??0)+m,g=new Set([0,(t[0]%m+m)%m]);for(let h=0;h<Math.min(t.length,16);h++)g.add((t[h]%m+m)%m);for(const h of g){let p=0;for(const v of t){const b=((v-h)%m+m)%m,y=Math.min(b,m-b);y<m*.12&&(p+=1-y/(m*.12))}h>.03&&h<f-m*.5&&(p+=.15),p*=1-Math.abs(d-118)/400,p>l&&(l=p,s=d,r=h)}}return{bpm:s,offset:r}}function sm(t,e,i,a,o){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(a)&&a>=0?a:0;const n=60/i,s=n*4,r=Number.isFinite(a)&&a>=0?a:0,l=Math.max(32,Math.floor(e*.04)),c=[0,0,0,0],u=o>0?o:t.length/e;for(let f=0;f<4;f++){let g=0,h=0;for(let p=r+f*n;p<u-.04&&h<72;p+=s){const v=Math.max(0,Math.min(t.length-l-1,Math.floor(p*e)));let b=0;for(let y=0;y<l;y+=3){const k=t[v+y];b+=k*k}g+=b,h++}c[f]=g/Math.max(1,h)}let d=0;for(let f=1;f<4;f++)(c[f]>c[d]*1.05||c[f]>c[d]*.97&&f%2===0&&d%2===1)&&(d=f);return((r+d*n)%s+s)%s}function rm(t,e,i,a){if(!(e>40))return[...t];const o=60/e,n=Math.max(o,a||(t[t.length-1]??0)+o),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<n-o*.08;l+=o)r.push(l);return r.length?r:[...t]}function Vs(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const o=60/e;if(!(o>0))return 0;const n=t-a;if(n<-.02)return 0;const s=(n%o+o)%o;return Math.exp(-s/i)}function lm(t,e,i=.2){if(!t.length)return 0;let a=0,o=t.length-1;for(;a<o;){const r=a+o+1>>1;t[r]<=e?a=r:o=r-1}const n=t[a];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function un(t,e,i){return Math.max(e,Math.min(i,t))}function cm(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const o=(a%i+i)%i,n=Math.floor(o*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,n)),l=Math.max(r+1,Math.min(t.length,n+s));let c=0;for(let p=r;p<l;p++)c+=t[p]*t[p];const u=Math.min(1,Math.sqrt(c/(l-r))*3.4),d=Math.max(s,Math.floor(e*.09)),m=Math.min(t.length,n+d);let f=0,g=0;for(let p=r;p<m;p+=8)f+=t[p]*t[p],g++;const h=Math.min(1,Math.sqrt(f/Math.max(1,g))*4.2);return{energy:u,bass:h}}function fm(){if(!Tt||!Vi)return null;Tt.getByteFrequencyData(Vi);let t=0,e=0;const i=Vi.length,a=Math.max(4,Math.floor(i*.12));for(let o=0;o<i;o++){const n=Vi[o]/255;t+=n,o<a&&(e+=n)}return{energy:t/i,bass:e/a}}function um(t,e){let i=0,a=0,o=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=cm(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],u=t.beatOffset??0,d=c.length?lm(c,r,.11):0,m=Vs(r,t.bpm??0,.11,u),f=un((i-.12)*.75,0,.6);o=Math.max(d,m*.86,c.length?f*.28:f)}else if(t?.kind==="audio"){const s=fm();s&&(i=s.energy,a=s.bass,o=Math.max(Vs(e,t.bpm??0,.11,t.beatOffset??0)*.86,un((i-.12)*.55,0,.5)))}Math.abs(e-js)>.2||o>=Vt?Vt=o:Vt+=(o-Vt)*.32,js=e;const n=t?.kind==="audio"?.22:.14;return Gi+=(i-Gi)*n,Ki+=(a-Ki)*Math.min(n,.16),!t&&Gi<.002&&(Gi=0),!t&&Ki<.002&&(Ki=0),t||(Vt=0),{energy:Gi,bass:Ki,beat:Vt}}function dm(t,e,i=0,a=0){const o=e.length,n=t.length;if(o<1)return;if(n<1){e.fill(0);return}const s=(Math.round(a)%n+n)%n;for(let l=0;l<o;l++)e[l]=t[(s+l)%n];if(i<=0)return;const r=Math.max(1,Math.round(o*i));for(let l=0;l<r;l++)e[o-r+l]*=1-(l+1)/r}function dn(t){if(!Wi(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function hm(t,e,i=!1,a=0){const o=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*o)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:n,numberOfChannels:s,sampleRate:o}),l=i?.12:0,c=Number.isFinite(a)&&a>0?a:0,u=Math.round(c*o);for(let d=0;d<s;d++)dm(t.getChannelData(d),r.getChannelData(d),l,u);return r}async function mm(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const a=no()??new e,o=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(o&&o.length>32)return t.pcm=o,o}catch{return null}return null}function hn(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const pm=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,gm=`#version 300 es
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
`,vm=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,bm=`#version 300 es
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
`,ym=`#version 300 es
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
`,wm=`#version 300 es
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
`,km=`#version 300 es
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
`,Tm=`#version 300 es
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
${Fs}
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
`,_m=`#version 300 es
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
`,xm=`#version 300 es
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
`,Sm=`#version 300 es
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
`,Cm=`#version 300 es
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
`,Mm=`#version 300 es
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
`,Em=`#version 300 es
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
`,Pm=`#version 300 es
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
`,Am=`#version 300 es
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
`,Fm=`#version 300 es
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
`,Im=`#version 300 es
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
`,Bm=`#version 300 es
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
`,Rm=`#version 300 es
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
`,zm=`#version 300 es
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
`,Om=`#version 300 es
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
`,Hm=`#version 300 es
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
`,Lm=`#version 300 es
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
`,Nm=`#version 300 es
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
`,Gs=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Um=`#version 300 es
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
`;class Gt extends Error{}function qm(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new Gt("WebGL2 is required for Phosphene.");return e}function Ks(t,e,i){const a=t.createShader(e);if(!a)throw new Gt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new Gt(o)}return a}class we{gl;prog;uniforms=new Map;constructor(e,i,a=pm){this.gl=e;const o=Ks(e,e.VERTEX_SHADER,a),n=Ks(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new Gt("Unable to create program");if(e.attachShader(s,o),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(o),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new Gt(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const o=this.loc(e);o&&this.gl.uniform2f(o,i,a)}v3(e,i,a,o){const n=this.loc(e);n&&this.gl.uniform3f(n,i,a,o)}v4(e,i,a,o,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,o,n)}dispose(){this.gl.deleteProgram(this.prog)}}function ro(t){const e=t.createTexture();if(!e)throw new Gt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Xs(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Dm(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class ri{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new Gt("Unable to create framebuffer");this.fbo=i,this.tex=ro(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Dm(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function $e(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function dt(t){t.drawArrays(t.TRIANGLES,0,3)}const $m={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Wm={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Zs={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function jm(t){return`${gm}
${t.extraUniforms??""}
${t.applyGlsl}
${vm}`}function Vm(t,e){return new we(t,jm(e))}function Xi(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const li=8;function Qs(t,e,i){return new ImageData(t,e,i)}function Gm(t,e,i){const a=t.find(n=>n.id===e);if(!a?.options)return Number(i)||0;const o=a.options.findIndex(n=>n.value===i);return o<0?0:o}class Km{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new Xd;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=qm(e),this.generatorProg=new we(this.gl,km)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=li&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new ri(e),this.pong??=new ri(e),this.composite??=new ri(e),this.post??=new ri(e);this.ring.length<li;)this.ring.push(new ri(e));this.copy??=new we(e,Gs),this.blit??=new we(e,ym),this.compositeProg??=new we(e,bm),this.feedbackProg??=new we(e,wm),this.textureProg??=new we(e,Um),this.black||(this.black=ro(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(n=>n.enabled))return!0;const o=e.sources.find(n=>n.id===a.sourceId);return!!(o&&o.kind!=="generator"&&o.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new we(this.gl,_m),this.stageProg):e===13?(this.sketchProg??=new we(this.gl,xm),this.sketchProg):e===14?(this.feltProg??=new we(this.gl,Sm),this.feltProg):e===15?(this.foilProg??=new we(this.gl,Cm),this.foilProg):e===16?(this.plushProg??=new we(this.gl,Mm),this.plushProg):e===17?(this.yarnProg??=new we(this.gl,Em),this.yarnProg):e===18?(this.sequinProg??=new we(this.gl,Pm),this.sequinProg):e===19?(this.quiltProg??=new we(this.gl,Am),this.quiltProg):e===20?(this.corkProg??=new we(this.gl,Fm),this.corkProg):e===21?(this.ginghamProg??=new we(this.gl,Im),this.ginghamProg):e===22?(this.sprinkleProg??=new we(this.gl,Bm),this.sprinkleProg):e===23?(this.velvetProg??=new we(this.gl,Rm),this.velvetProg):e===24?(this.confettiProg??=new we(this.gl,zm),this.confettiProg):e===25?(this.discoProg??=new we(this.gl,Om),this.discoProg):e===26?(this.terrazzoProg??=new we(this.gl,Hm),this.terrazzoProg):e===27?(this.comicProg??=new we(this.gl,Lm),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new we(this.gl,Nm),this.fieldsProg):(this.generatorFull??=new we(this.gl,Tm),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",o=this.effectProg.get(a);if(o)return o;const n=e==="dancer"?fh(i):ut(e);if(!n)return null;try{const s=Vm(this.gl,n);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(o=>!!o);for(const o of a)o.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new ri(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=ro(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Xs(this.gl,i,a),i}blitTo(e,i){const a=this.gl,o=this.copy;o&&(e.bind(),o.use(),$e(a,0,i),o.i("uTex",0),dt(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const o=Math.max(a?.duration||0,e.duration,e.exportSettings.duration||0,8),n=`${e.cutEdit.seed}|${o}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==n)&&(this.cutReel=Qh({seed:e.cutEdit.seed,duration:o,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=n);const s=Yh(this.cutReel,i,o,a?.bpm,a?.beatOffset);this.cutStatus=Jh(s),this.cutLook={generator:zi(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,o,n,s,r){const l=this.gl;this.copy??=new we(l,Gs),this.heraldryTex??=ro(l);const c=this.cutLook??i,u=this.heraldry.paint({width:s,height:r,time:a,duration:n,seed:o,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,chainAnimal:c.collageChainAnimal,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,fieldStrength:c.collageFieldStrength,fieldScale:c.collageFieldScale,fieldEvolve:c.collageFieldEvolve,fieldDensity:c.collageFieldDensity,fieldDensityScale:c.collageFieldDensityScale,fieldDensityEvolve:c.collageFieldDensityEvolve,fieldFlow:c.collageFieldFlow,fieldCurl:c.collageFieldCurl,fieldFlowScale:c.collageFieldFlowScale,fieldAttract:c.collageFieldAttract,fieldRepel:c.collageFieldRepel,fieldRadius:c.collageFieldRadius,fieldInertia:c.collageFieldInertia,fieldDamp:c.collageFieldDamp,fieldMaxV:c.collageFieldMaxV,fieldScaleAmp:c.collageFieldScaleAmp,fieldMinScale:c.collageFieldMinScale,fieldMaxScale:c.collageFieldMaxScale,fieldPerturb:c.collageFieldPerturb,fieldWarp:c.collageFieldWarp,fieldSparsity:c.collageFieldSparsity,fieldContrast:c.collageFieldContrast,fieldMotion:c.collageFieldMotion,fieldPattern:c.collageFieldPattern,camera:c.collageCamera,cameraFeel:c.collageCameraFeel,huntWideMin:c.collageHuntWideMin,huntWideMax:c.collageHuntWideMax,huntFollowMin:c.collageHuntFollowMin,huntFollowMax:c.collageHuntFollowMax,huntSnap:c.collageHuntSnap,huntZoom:c.collageHuntZoom,huntTight:c.collageHuntTight,huntReactMin:c.collageHuntReactMin,huntReactMax:c.collageHuntReactMax,huntPrecision:c.collageHuntPrecision,huntSelect:c.collageHuntSelect,huntFocus:c.collageHuntFocus,huntFocusSpeed:c.collageHuntFocusSpeed,huntFocusError:c.collageHuntFocusError,huntVariation:c.collageHuntVariation});if(Xs(l,this.heraldryTex,u),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),$e(l,0,this.heraldryTex),this.copy.i("uTex",0),dt(l)}drawGenerator(e,i,a,o=77,n=8){if(ze(i.generator)){this.drawHeraldry(e,i,a,o,n,e.w,e.h);return}const s=this.gl,r=Zs[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?Xi(i.colorA):[.07,.04,.1],u=i.colorB?Xi(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",u[0],u[1],u[2]),l.f("uScale",6),l.f("uSeed",o),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),dt(s)}drawTexture(e,i,a){const o=this.gl,n=this.textureProg;n&&(e.bind(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),n.use(),$e(o,0,i),n.i("uTex",0),n.v2("uTranslate",a.transform.x,a.transform.y),n.f("uScale",a.transform.scale),n.f("uRotation",a.transform.rotation),n.v2("uFit",1,1),dt(o))}applyEffect(e,i,a,o,n,s,r,l,c){const u=ut(a.typeId),d=this.progFor(a);if(!u||!d){this.blitTo(e,i);return}const m=this.gl;e.bind(),d.use(),$e(m,0,i),$e(m,1,l),$e(m,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",n),d.f("uFrame",s),d.f("uQuality",r==="draft"?0:r==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",o.transform.x,o.transform.y),d.f("u_scale",o.transform.scale),d.f("u_rotation",o.transform.rotation);const f=o.mask;d.i("u_maskType",Wm[f.type]??0),d.i("u_maskInvert",f.invert?1:0),d.f("u_maskSoftness",f.softness),d.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),d.v2("u_maskCenter",f.center.x,f.center.y),d.f("u_maskRadius",f.radius),d.f("u_maskGradientAngle",f.gradientAngle),d.f("u_maskNoiseScale",f.noiseScale);let g=1;for(const h of u.params){const p=a.params[h.id]??h.default,v=`u_${h.id}`;if(h.kind==="color"&&typeof p=="string"){const[b,y,k]=Xi(p);d.v3(v,b,y,k)}else h.kind==="bool"?d.f(v,p?1:0):h.kind==="enum"?d.f(v,Gm(u.params,h.id,p)):d.f(v,Number(p));h.id==="mix"&&(g=Number(p))}d.f("u_mix",g),dt(m)}drawLite(e,i){const a=this.gl,o=e.layers.find(d=>d.enabled)??e.layers[0],n=o?e.sources.find(d=>d.id===o.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(ze(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=Zs[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?Xi(s.colorA):[.07,.04,.1],u=s.colorB?Xi(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",u[0],u[1],u[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),dt(a)}render(e,i,a){const o=this.gl,n=a?.quality??e.quality,s=um(Wi(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=Wi(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,u=this.composite,d=this.post,m=this.blit,f=this.compositeProg,g=this.feedbackProg,h=n==="draft"?.5:1,p=Math.max(16,Math.floor((a?.width??this.canvas.width)*h)),v=Math.max(16,Math.floor((a?.height??this.canvas.height)*h));this.ensureSize(p,v),u.bind(),o.clearColor(.02,.02,.03,1),o.clear(o.COLOR_BUFFER_BIT);const b=e.globalFeedback,y=Math.max(0,Math.min(li-1,Math.round(b.delay))),k=(this.ringIndex-1-y+li*8)%li,_=this.ring[k].tex,S=Math.floor(i*e.fps);for(const M of e.layers){if(!M.enabled)continue;const A=Nh(e,M,i),E=e.sources.find(B=>B.id===A.sourceId)??null;if(!E||E.kind==="generator"||E.kind==="audio"){const B=E&&E.kind!=="audio"?E:{generator:"plasma"};this.drawGenerator(l,B,i,e.seed,e.duration)}else{const B=this.uploadSource(E);this.drawTexture(l,B,A)}let R=l,D=c;const x=this.histFor(A.id);for(const B of A.effects){if(!B.enabled)continue;this.applyEffect(D,R.tex,B,A,i,S,n,_,x.tex);const T=R;R=D,D=T}if(A.feedback.amount>.001){D.bind(),g.use(),$e(o,0,R.tex),$e(o,1,x.tex),g.i("uTex",0),g.i("uFeedback",1),g.f("uAmount",A.feedback.amount),g.f("uOpacity",A.feedback.opacity),g.f("uScale",A.feedback.scale),g.f("uRotation",A.feedback.rotation),g.f("uDistortion",A.feedback.distortion),g.f("uTime",i),dt(o);const B=R;R=D,D=B}this.blitTo(d,u.tex),u.bind(),f.use(),$e(o,0,d.tex),$e(o,1,R.tex),f.i("uBase",0),f.i("uLayer",1),f.f("uOpacity",A.opacity),f.i("uBlend",$m[A.blendMode]??0),f.v2("uResolution",p,v),dt(o),this.blitTo(x,R.tex)}b.amount>.001&&(d.bind(),g.use(),$e(o,0,u.tex),$e(o,1,_),g.i("uTex",0),g.i("uFeedback",1),g.f("uAmount",b.amount),g.f("uOpacity",b.opacity),g.f("uScale",b.scale),g.f("uRotation",b.rotation),g.f("uDistortion",b.distortion),g.f("uTime",i),dt(o),this.blitTo(u,d.tex)),this.blitTo(this.ring[this.ringIndex],u.tex),this.ringIndex=(this.ringIndex+1)%li,o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height),m.use(),$e(o,0,u.tex),m.i("uTex",0),m.f("uVignette",a?.vignette??.25),dt(o)}capture(e,i,a,o,n="image/png",s=.97){const r=this.paintFrame(e,i,a,o);return new Promise((l,c)=>{r.toBlob(u=>{u?l(u):c(new Error("Export failed"))},n,s)})}paintFrame(e,i,a,o,n){const s=n??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==o&&(s.height=o);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:o,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===o)r.putImageData(Qs(l,a,o),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Qs(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,o)}return s}readPixels(e,i){const a=this.gl,o=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,o),a.bindFramebuffer(a.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(o.length)),s=e*4;for(let r=0;r<i;r++)n.set(o.subarray((i-1-r)*s,(i-r)*s),r*s);return n}}const Xm=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Zm=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Qm(t){return t.type.startsWith("video/")||Zm.test(t.name)}function Ym(t){return t.type.startsWith("image/")||Xm.test(t.name)}async function Jm(t){if(Qm(t))return tp(t);if(Ym(t))return Js(t);if(tm(t))return am(t);throw new Error(`Unsupported media: ${t.name}`)}async function Ys(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Js(i)}async function Js(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Ne("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await ep(e);return{id:Ne("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function ep(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function tp(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,o)=>{const n=()=>{a({id:Ne("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>o(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function ip(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Ne("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function er(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function ap(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,o=a.duration;if(!Number.isFinite(o)||o<=0)return;const n=(e%o+o)%o,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,u=Math.abs(a.currentTime-n);if(!s){if(a.paused||a.pause(),u>1/30)try{a.currentTime=n}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),u>.35)try{a.currentTime=n}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),u>1/30)try{a.currentTime=n}catch{}}const op=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function np(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function co(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var mn={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var tr;function sp(){return tr||(tr=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,o,n){function s(c,u){if(!o[c]){if(!a[c]){var d=typeof co=="function"&&co;if(!u&&d)return d(c,!0);if(r)return r(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var f=o[c]={exports:{}};a[c][0].call(f.exports,function(g){var h=a[c][1][g];return s(h||g)},f,f.exports,i,a,o,n)}return o[c].exports}for(var r=typeof co=="function"&&co,l=0;l<n.length;l++)s(n[l]);return s})({1:[function(i,a,o){var n=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var c,u,d,m,f,g,h,p=[],v=0,b=l.length,y=b,k=n.getTypeOf(l)!=="string";v<l.length;)y=b-v,d=k?(c=l[v++],u=v<b?l[v++]:0,v<b?l[v++]:0):(c=l.charCodeAt(v++),u=v<b?l.charCodeAt(v++):0,v<b?l.charCodeAt(v++):0),m=c>>2,f=(3&c)<<4|u>>4,g=1<y?(15&u)<<2|d>>6:64,h=2<y?63&d:64,p.push(r.charAt(m)+r.charAt(f)+r.charAt(g)+r.charAt(h));return p.join("")},o.decode=function(l){var c,u,d,m,f,g,h=0,p=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var b,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&y--,l.charAt(l.length-2)===r.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=s.uint8array?new Uint8Array(0|y):new Array(0|y);h<l.length;)c=r.indexOf(l.charAt(h++))<<2|(m=r.indexOf(l.charAt(h++)))>>4,u=(15&m)<<4|(f=r.indexOf(l.charAt(h++)))>>2,d=(3&f)<<6|(g=r.indexOf(l.charAt(h++))),b[p++]=c,f!==64&&(b[p++]=u),g!==64&&(b[p++]=d);return b}},{"./support":30,"./utils":32}],2:[function(i,a,o){var n=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(u,d,m,f,g){this.compressedSize=u,this.uncompressedSize=d,this.crc32=m,this.compression=f,this.compressedContent=g}c.prototype={getContentWorker:function(){var u=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return u.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,d,m){return u.pipe(new r).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,o){var n=i("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,o){var n=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var u=0;u<8;u++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?n.getTypeOf(r)!=="string"?(function(c,u,d,m){var f=s,g=m+d;c^=-1;for(var h=m;h<g;h++)c=c>>>8^f[255&(c^u[h])];return-1^c})(0|l,r,r.length,0):(function(c,u,d,m){var f=s,g=m+d;c^=-1;for(var h=m;h<g;h++)c=c>>>8^f[255&(c^u.charCodeAt(h))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(i,a,o){var n=null;n=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:n}},{lie:37}],7:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=n?"uint8array":"array";function u(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}o.magic="\b\0",r.inherits(u,l),u.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,d.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},o.compressWorker=function(d){return new u("Deflate",d)},o.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,o){function n(f,g){var h,p="";for(h=0;h<g;h++)p+=String.fromCharCode(255&f),f>>>=8;return p}function s(f,g,h,p,v,b){var y,k,_=f.file,S=f.compression,M=b!==c.utf8encode,A=r.transformTo("string",b(_.name)),E=r.transformTo("string",c.utf8encode(_.name)),R=_.comment,D=r.transformTo("string",b(R)),x=r.transformTo("string",c.utf8encode(R)),B=E.length!==_.name.length,T=x.length!==R.length,U="",G="",L="",V=_.dir,q=_.date,X={crc32:0,compressedSize:0,uncompressedSize:0};g&&!h||(X.crc32=f.crc32,X.compressedSize=f.compressedSize,X.uncompressedSize=f.uncompressedSize);var O=0;g&&(O|=8),M||!B&&!T||(O|=2048);var H=0,oe=0;V&&(H|=16),v==="UNIX"?(oe=798,H|=(function(Y,be){var Ae=Y;return Y||(Ae=be?16893:33204),(65535&Ae)<<16})(_.unixPermissions,V)):(oe=20,H|=(function(Y){return 63&(Y||0)})(_.dosPermissions)),y=q.getUTCHours(),y<<=6,y|=q.getUTCMinutes(),y<<=5,y|=q.getUTCSeconds()/2,k=q.getUTCFullYear()-1980,k<<=4,k|=q.getUTCMonth()+1,k<<=5,k|=q.getUTCDate(),B&&(G=n(1,1)+n(u(A),4)+E,U+="up"+n(G.length,2)+G),T&&(L=n(1,1)+n(u(D),4)+x,U+="uc"+n(L.length,2)+L);var ie="";return ie+=`
\0`,ie+=n(O,2),ie+=S.magic,ie+=n(y,2),ie+=n(k,2),ie+=n(X.crc32,4),ie+=n(X.compressedSize,4),ie+=n(X.uncompressedSize,4),ie+=n(A.length,2),ie+=n(U.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ie+A+U,dirRecord:d.CENTRAL_FILE_HEADER+n(oe,2)+ie+n(D.length,2)+"\0\0\0\0"+n(H,4)+n(p,4)+A+U+D}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),u=i("../crc32"),d=i("../signature");function m(f,g,h,p){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=h,this.encodeFileName=p,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(m,l),m.prototype.push=function(f){var g=f.meta.percent||0,h=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:h?(g+100*(h-p-1))/h:100}}))},m.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var h=s(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,h=s(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),g)this.push({data:(function(p){return d.DATA_DESCRIPTOR+n(p.crc32,4)+n(p.compressedSize,4)+n(p.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var h=this.bytesWritten-f,p=(function(v,b,y,k,_){var S=r.transformTo("string",_(k));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(v,2)+n(v,2)+n(b,4)+n(y,4)+n(S.length,2)+S})(this.dirRecords.length,h,f,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(h){g.processChunk(h)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(h){g.error(h)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(f){var g=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var h=0;h<g.length;h++)try{g[h].error(f)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},a.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,o){var n=i("../compressions"),s=i("./ZipFileWorker");o.generateWorker=function(r,l,c){var u=new s(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{r.forEach(function(m,f){d++;var g=(function(b,y){var k=b||y,_=n[k];if(!_)throw new Error(k+" is not a valid compression method !");return _})(f.options.compression,l.compression),h=f.options.compressionOptions||l.compressionOptions||{},p=f.dir,v=f.date;f._compressWorker(g,h).withStreamInfo("file",{name:m,dir:p,date:v,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,r){return new n().loadAsync(s,r)},n.external=i("./external"),a.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,o){var n=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),u=i("./nodejsUtils");function d(m){return new s.Promise(function(f,g){var h=m.decompressed.getContentWorker().pipe(new c);h.on("error",function(p){g(p)}).on("end",function(){h.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}a.exports=function(m,f){var g=this;return f=n.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),u.isNode&&u.isStream(m)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",m,!0,f.optimizedBinaryString,f.base64).then(function(h){var p=new l(f);return p.load(h),p}).then(function(h){var p=[s.Promise.resolve(h)],v=h.files;if(f.checkCRC32)for(var b=0;b<v.length;b++)p.push(d(v[b]));return s.Promise.all(p)}).then(function(h){for(var p=h.shift(),v=p.files,b=0;b<v.length;b++){var y=v[b],k=y.fileNameStr,_=n.resolve(y.fileNameStr);g.file(_,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:f.createFolders}),y.dir||(g.file(_).unsafeOriginalName=k)}return p.zipComment.length&&(g.comment=p.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,o){var n=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}n.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,o){var n=i("readable-stream").Readable;function s(r,l,c){n.call(this,l),this._helper=r;var u=this;r.on("data",function(d,m){u.push(d)||u._helper.pause(),c&&c(m)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,o){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,a,o){function n(_,S,M){var A,E=r.getTypeOf(S),R=r.extend(M||{},u);R.date=R.date||new Date,R.compression!==null&&(R.compression=R.compression.toUpperCase()),typeof R.unixPermissions=="string"&&(R.unixPermissions=parseInt(R.unixPermissions,8)),R.unixPermissions&&16384&R.unixPermissions&&(R.dir=!0),R.dosPermissions&&16&R.dosPermissions&&(R.dir=!0),R.dir&&(_=v(_)),R.createFolders&&(A=p(_))&&b.call(this,A,!0);var D=E==="string"&&R.binary===!1&&R.base64===!1;M&&M.binary!==void 0||(R.binary=!D),(S instanceof d&&S.uncompressedSize===0||R.dir||!S||S.length===0)&&(R.base64=!1,R.binary=!0,S="",R.compression="STORE",E="string");var x=null;x=S instanceof d||S instanceof l?S:g.isNode&&g.isStream(S)?new h(_,S):r.prepareContent(_,S,R.binary,R.optimizedBinaryString,R.base64);var B=new m(_,x,R);this.files[_]=B}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),u=i("./defaults"),d=i("./compressedObject"),m=i("./zipObject"),f=i("./generate"),g=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),p=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var S=_.lastIndexOf("/");return 0<S?_.substring(0,S):""},v=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},b=function(_,S){return S=S!==void 0?S:u.createFolders,_=v(_),this.files[_]||n.call(this,_,null,{dir:!0,createFolders:S}),this.files[_]};function y(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var k={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var S,M,A;for(S in this.files)A=this.files[S],(M=S.slice(this.root.length,S.length))&&S.slice(0,this.root.length)===this.root&&_(M,A)},filter:function(_){var S=[];return this.forEach(function(M,A){_(M,A)&&S.push(A)}),S},file:function(_,S,M){if(arguments.length!==1)return _=this.root+_,n.call(this,_,S,M),this;if(y(_)){var A=_;return this.filter(function(R,D){return!D.dir&&A.test(R)})}var E=this.files[this.root+_];return E&&!E.dir?E:null},folder:function(_){if(!_)return this;if(y(_))return this.filter(function(E,R){return R.dir&&_.test(E)});var S=this.root+_,M=b.call(this,S),A=this.clone();return A.root=M.name,A},remove:function(_){_=this.root+_;var S=this.files[_];if(S||(_.slice(-1)!=="/"&&(_+="/"),S=this.files[_]),S&&!S.dir)delete this.files[_];else for(var M=this.filter(function(E,R){return R.name.slice(0,_.length)===_}),A=0;A<M.length;A++)delete this.files[M[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var S,M={};try{if((M=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=M.type.toLowerCase(),M.compression=M.compression.toUpperCase(),M.type==="binarystring"&&(M.type="string"),!M.type)throw new Error("No output type specified.");r.checkSupport(M.type),M.platform!=="darwin"&&M.platform!=="freebsd"&&M.platform!=="linux"&&M.platform!=="sunos"||(M.platform="UNIX"),M.platform==="win32"&&(M.platform="DOS");var A=M.comment||this.comment||"";S=f.generateWorker(this,M,A)}catch(E){(S=new l("error")).error(E)}return new c(S,M.type||"string",M.mimeType)},generateAsync:function(_,S){return this.generateInternalStream(_).accumulate(S)},generateNodeStream:function(_,S){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(S)}};a.exports=k},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,o){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),u=r.charCodeAt(2),d=r.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===d)return m-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),u=r.charCodeAt(2),d=r.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&d===m[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,o){var n=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return n.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,o){var n=i("./Uint8ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,o){var n=i("./ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,o){var n=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),u=i("./Uint8ArrayReader");a.exports=function(d){var m=n.getTypeOf(d);return n.checkSupport(m),m!=="string"||s.uint8array?m==="nodebuffer"?new c(d):s.uint8array?new u(n.transformTo("uint8array",d)):new r(n.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,o){var n=i("./GenericWorker"),s=i("../utils");function r(l){n.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,n),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,o){var n=i("./GenericWorker"),s=i("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,n),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=n.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}n.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,o){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=n},{}],29:[function(i,a,o){var n=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),u=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,h){return new u.Promise(function(p,v){var b=[],y=g._internalType,k=g._outputType,_=g._mimeType;g.on("data",function(S,M){b.push(S),h&&h(M)}).on("error",function(S){b=[],v(S)}).on("end",function(){try{var S=(function(M,A,E){switch(M){case"blob":return n.newBlob(n.transformTo("arraybuffer",A),E);case"base64":return l.encode(A);default:return n.transformTo(M,A)}})(k,(function(M,A){var E,R=0,D=null,x=0;for(E=0;E<A.length;E++)x+=A[E].length;switch(M){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for(D=new Uint8Array(x),E=0;E<A.length;E++)D.set(A[E],R),R+=A[E].length;return D;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+M+"'")}})(y,b),_);p(S)}catch(M){v(M)}b=[]}).resume()})}function f(g,h,p){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=p,n.checkSupport(v),this._worker=g.pipe(new s(v)),g.lock()}catch(b){this._worker=new r("error"),this._worker.error(b)}}f.prototype={accumulate:function(g){return m(this,g)},on:function(g,h){var p=this;return g==="data"?this._worker.on(g,function(v){h.call(p,v.data,v.meta)}):this._worker.on(g,function(){n.delay(h,arguments,p)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},g)}},a.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),o.blob=s.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!i("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,o){for(var n=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}o.utf8encode=function(f){return s.nodebuffer?r.newBufferFrom(f,"utf-8"):(function(g){var h,p,v,b,y,k=g.length,_=0;for(b=0;b<k;b++)(64512&(p=g.charCodeAt(b)))==55296&&b+1<k&&(64512&(v=g.charCodeAt(b+1)))==56320&&(p=65536+(p-55296<<10)+(v-56320),b++),_+=p<128?1:p<2048?2:p<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),b=y=0;y<_;b++)(64512&(p=g.charCodeAt(b)))==55296&&b+1<k&&(64512&(v=g.charCodeAt(b+1)))==56320&&(p=65536+(p-55296<<10)+(v-56320),b++),p<128?h[y++]=p:(p<2048?h[y++]=192|p>>>6:(p<65536?h[y++]=224|p>>>12:(h[y++]=240|p>>>18,h[y++]=128|p>>>12&63),h[y++]=128|p>>>6&63),h[y++]=128|63&p);return h})(f)},o.utf8decode=function(f){return s.nodebuffer?n.transformTo("nodebuffer",f).toString("utf-8"):(function(g){var h,p,v,b,y=g.length,k=new Array(2*y);for(h=p=0;h<y;)if((v=g[h++])<128)k[p++]=v;else if(4<(b=c[v]))k[p++]=65533,h+=b-1;else{for(v&=b===2?31:b===3?15:7;1<b&&h<y;)v=v<<6|63&g[h++],b--;1<b?k[p++]=65533:v<65536?k[p++]=v:(v-=65536,k[p++]=55296|v>>10&1023,k[p++]=56320|1023&v)}return k.length!==p&&(k.subarray?k=k.subarray(0,p):k.length=p),n.applyFromCharCode(k)})(f=n.transformTo(s.uint8array?"uint8array":"array",f))},n.inherits(d,l),d.prototype.processChunk=function(f){var g=n.transformTo(s.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=g;(g=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),g.set(h,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var p=(function(b,y){var k;for((y=y||b.length)>b.length&&(y=b.length),k=y-1;0<=k&&(192&b[k])==128;)k--;return k<0||k===0?y:k+c[b[k]]>y?k:y})(g),v=g;p!==g.length&&(s.uint8array?(v=g.subarray(0,p),this.leftOver=g.subarray(p,g.length)):(v=g.slice(0,p),this.leftOver=g.slice(p,g.length))),this.push({data:o.utf8decode(v),meta:f.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=d,n.inherits(m,l),m.prototype.processChunk=function(f){this.push({data:o.utf8encode(f.data),meta:f.meta})},o.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,o){var n=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(h){return h}function u(h,p){for(var v=0;v<h.length;++v)p[v]=255&h.charCodeAt(v);return p}i("setimmediate"),o.newBlob=function(h,p){o.checkSupport("blob");try{return new Blob([h],{type:p})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,p,v){var b=[],y=0,k=h.length;if(k<=v)return String.fromCharCode.apply(null,h);for(;y<k;)p==="array"||p==="nodebuffer"?b.push(String.fromCharCode.apply(null,h.slice(y,Math.min(y+v,k)))):b.push(String.fromCharCode.apply(null,h.subarray(y,Math.min(y+v,k)))),y+=v;return b.join("")},stringifyByChar:function(h){for(var p="",v=0;v<h.length;v++)p+=String.fromCharCode(h[v]);return p},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function m(h){var p=65536,v=o.getTypeOf(h),b=!0;if(v==="uint8array"?b=d.applyCanBeUsed.uint8array:v==="nodebuffer"&&(b=d.applyCanBeUsed.nodebuffer),b)for(;1<p;)try{return d.stringifyByChunk(h,v,p)}catch{p=Math.floor(p/2)}return d.stringifyByChar(h)}function f(h,p){for(var v=0;v<h.length;v++)p[v]=h[v];return p}o.applyFromCharCode=m;var g={};g.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return g.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,r.allocBuffer(h.length))}},g.array={string:m,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(h)}},g.arraybuffer={string:function(h){return m(new Uint8Array(h))},array:function(h){return f(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(new Uint8Array(h))}},g.uint8array={string:m,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return r.newBufferFrom(h)}},g.nodebuffer={string:m,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return g.nodebuffer.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:c},o.transformTo=function(h,p){if(p=p||"",!h)return p;o.checkSupport(h);var v=o.getTypeOf(p);return g[v][h](p)},o.resolve=function(h){for(var p=h.split("/"),v=[],b=0;b<p.length;b++){var y=p[b];y==="."||y===""&&b!==0&&b!==p.length-1||(y===".."?v.pop():v.push(y))}return v.join("/")},o.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":n.nodebuffer&&r.isBuffer(h)?"nodebuffer":n.uint8array&&h instanceof Uint8Array?"uint8array":n.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(h){if(!n[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(h){var p,v,b="";for(v=0;v<(h||"").length;v++)b+="\\x"+((p=h.charCodeAt(v))<16?"0":"")+p.toString(16).toUpperCase();return b},o.delay=function(h,p,v){setImmediate(function(){h.apply(v||null,p||[])})},o.inherits=function(h,p){function v(){}v.prototype=p.prototype,h.prototype=new v},o.extend=function(){var h,p,v={};for(h=0;h<arguments.length;h++)for(p in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],p)&&v[p]===void 0&&(v[p]=arguments[h][p]);return v},o.prepareContent=function(h,p,v,b,y){return l.Promise.resolve(p).then(function(k){return n.blob&&(k instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(k))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,S){var M=new FileReader;M.onload=function(A){_(A.target.result)},M.onerror=function(A){S(A.target.error)},M.readAsArrayBuffer(k)}):k}).then(function(k){var _=o.getTypeOf(k);return _?(_==="arraybuffer"?k=o.transformTo("uint8array",k):_==="string"&&(y?k=s.decode(k):v&&b!==!0&&(k=(function(S){return u(S,n.uint8array?new Uint8Array(S.length):new Array(S.length))})(k))),k):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function u(d){this.files=[],this.loadOptions=d}u.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(m)+", expected "+s.pretty(d)+")")}},isSignature:function(d,m){var f=this.reader.index;this.reader.setIndex(d);var g=this.reader.readString(4)===m;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",f=s.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,f,g=this.zip64EndOfCentralSize-44;0<g;)d=this.reader.readInt(2),m=this.reader.readInt(4),f=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=m-f;if(0<g)this.isSignature(m,r.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(d){this.reader=n(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),u=i("./compressions"),d=i("./support");function m(f,g){this.options=f,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,h;if(f.skip(22),this.fileNameLength=f.readInt(2),h=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(p){for(var v in u)if(Object.prototype.hasOwnProperty.call(u,v)&&u[v].magic===p)return u[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,h,p,v=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<v;)g=f.readInt(2),h=f.readInt(2),p=f.readData(h),this.extraFields[g]={id:g,length:h,value:p};f.setIndex(v)},handleUTF8:function(){var f=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var h=s.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var v=s.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=n(f.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=n(f.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null}},a.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,o){function n(g,h,p){this.name=g,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=h,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),u=i("./stream/GenericWorker");n.prototype={internalStream:function(g){var h=null,p="string";try{if(!g)throw new Error("No output type specified.");var v=(p=g.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),h=this._decompressWorker();var b=!this._dataBinary;b&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!b&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(y){(h=new u("error")).error(y)}return new s(h,p,"")},async:function(g,h){return this.internalStream(g).accumulate(h)},nodeStream:function(g,h){return this.internalStream(g||"nodebuffer").toNodejsStream(h)},_compressWorker:function(g,h){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(p,g,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<d.length;f++)n.prototype[d[f]]=m;a.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,o){(function(n){var s,r,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var c=0,u=new l(g),d=n.document.createTextNode("");u.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var h=n.document.createElement("script");h.onreadystatechange=function(){g(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},n.document.documentElement.appendChild(h)}:function(){setTimeout(g,0)};else{var m=new n.MessageChannel;m.port1.onmessage=g,s=function(){m.port2.postMessage(0)}}var f=[];function g(){var h,p;r=!0;for(var v=f.length;v;){for(p=f,f=[],h=-1;++h<v;)p[h]();v=f.length}r=!1}a.exports=function(h){f.push(h)!==1||r||s()}}).call(this,typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,o){var n=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function d(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,v!==s&&h(this,v)}function m(v,b,y){this.promise=v,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function f(v,b,y){n(function(){var k;try{k=b(y)}catch(_){return r.reject(v,_)}k===v?r.reject(v,new TypeError("Cannot resolve promise with itself")):r.resolve(v,k)})}function g(v){var b=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof b=="function")return function(){b.apply(v,arguments)}}function h(v,b){var y=!1;function k(M){y||(y=!0,r.reject(v,M))}function _(M){y||(y=!0,r.resolve(v,M))}var S=p(function(){b(_,k)});S.status==="error"&&k(S.value)}function p(v,b){var y={};try{y.value=v(b),y.status="success"}catch(k){y.status="error",y.value=k}return y}(a.exports=d).prototype.finally=function(v){if(typeof v!="function")return this;var b=this.constructor;return this.then(function(y){return b.resolve(v()).then(function(){return y})},function(y){return b.resolve(v()).then(function(){throw y})})},d.prototype.catch=function(v){return this.then(null,v)},d.prototype.then=function(v,b){if(typeof v!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var y=new this.constructor(s);return this.state!==u?f(y,this.state===c?v:b,this.outcome):this.queue.push(new m(y,v,b)),y},m.prototype.callFulfilled=function(v){r.resolve(this.promise,v)},m.prototype.otherCallFulfilled=function(v){f(this.promise,this.onFulfilled,v)},m.prototype.callRejected=function(v){r.reject(this.promise,v)},m.prototype.otherCallRejected=function(v){f(this.promise,this.onRejected,v)},r.resolve=function(v,b){var y=p(g,b);if(y.status==="error")return r.reject(v,y.value);var k=y.value;if(k)h(v,k);else{v.state=c,v.outcome=b;for(var _=-1,S=v.queue.length;++_<S;)v.queue[_].callFulfilled(b)}return v},r.reject=function(v,b){v.state=l,v.outcome=b;for(var y=-1,k=v.queue.length;++y<k;)v.queue[y].callRejected(b);return v},d.resolve=function(v){return v instanceof this?v:r.resolve(new this(s),v)},d.reject=function(v){var b=new this(s);return r.reject(b,v)},d.all=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=v.length,k=!1;if(!y)return this.resolve([]);for(var _=new Array(y),S=0,M=-1,A=new this(s);++M<y;)E(v[M],M);return A;function E(R,D){b.resolve(R).then(function(x){_[D]=x,++S!==y||k||(k=!0,r.resolve(A,_))},function(x){k||(k=!0,r.reject(A,x))})}},d.race=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=v.length,k=!1;if(!y)return this.resolve([]);for(var _=-1,S=new this(s);++_<y;)M=v[_],b.resolve(M).then(function(A){k||(k=!0,r.resolve(S,A))},function(A){k||(k=!0,r.reject(S,A))});var M;return S}},{immediate:36}],38:[function(i,a,o){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,o){var n=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),u=Object.prototype.toString,d=0,m=-1,f=0,g=8;function h(v){if(!(this instanceof h))return new h(v);this.options=s.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},v||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=n.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(y!==d)throw new Error(l[y]);if(b.header&&n.deflateSetHeader(this.strm,b.header),b.dictionary){var k;if(k=typeof b.dictionary=="string"?r.string2buf(b.dictionary):u.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(y=n.deflateSetDictionary(this.strm,k))!==d)throw new Error(l[y]);this._dict_set=!0}}function p(v,b){var y=new h(b);if(y.push(v,!0),y.err)throw y.msg||l[y.err];return y.result}h.prototype.push=function(v,b){var y,k,_=this.strm,S=this.options.chunkSize;if(this.ended)return!1;k=b===~~b?b:b===!0?4:0,typeof v=="string"?_.input=r.string2buf(v):u.call(v)==="[object ArrayBuffer]"?_.input=new Uint8Array(v):_.input=v,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(S),_.next_out=0,_.avail_out=S),(y=n.deflate(_,k))!==1&&y!==d)return this.onEnd(y),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||k!==4&&k!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&y!==1);return k===4?(y=n.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===d):k!==2||(this.onEnd(d),!(_.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},o.Deflate=h,o.deflate=p,o.deflateRaw=function(v,b){return(b=b||{}).raw=!0,p(v,b)},o.gzip=function(v,b){return(b=b||{}).gzip=!0,p(v,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,o){var n=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),u=i("./zlib/zstream"),d=i("./zlib/gzheader"),m=Object.prototype.toString;function f(h){if(!(this instanceof f))return new f(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||h&&h.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&(15&p.windowBits)==0&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var v=n.inflateInit2(this.strm,p.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new d,n.inflateGetHeader(this.strm,this.header)}function g(h,p){var v=new f(p);if(v.push(h,!0),v.err)throw v.msg||c[v.err];return v.result}f.prototype.push=function(h,p){var v,b,y,k,_,S,M=this.strm,A=this.options.chunkSize,E=this.options.dictionary,R=!1;if(this.ended)return!1;b=p===~~p?p:p===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?M.input=r.binstring2buf(h):m.call(h)==="[object ArrayBuffer]"?M.input=new Uint8Array(h):M.input=h,M.next_in=0,M.avail_in=M.input.length;do{if(M.avail_out===0&&(M.output=new s.Buf8(A),M.next_out=0,M.avail_out=A),(v=n.inflate(M,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&E&&(S=typeof E=="string"?r.string2buf(E):m.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,v=n.inflateSetDictionary(this.strm,S)),v===l.Z_BUF_ERROR&&R===!0&&(v=l.Z_OK,R=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);M.next_out&&(M.avail_out!==0&&v!==l.Z_STREAM_END&&(M.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=r.utf8border(M.output,M.next_out),k=M.next_out-y,_=r.buf2string(M.output,y),M.next_out=k,M.avail_out=A-k,k&&s.arraySet(M.output,M.output,y,k,0),this.onData(_)):this.onData(s.shrinkBuf(M.output,M.next_out)))),M.avail_in===0&&M.avail_out===0&&(R=!0)}while((0<M.avail_in||M.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(v=n.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(M.avail_out=0))},f.prototype.onData=function(h){this.chunks.push(h)},f.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},o.Inflate=f,o.inflate=g,o.inflateRaw=function(h,p){return(p=p||{}).raw=!0,g(h,p)},o.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var d in u)u.hasOwnProperty(d)&&(l[d]=u[d])}}return l},o.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,u,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+d),m);else for(var f=0;f<d;f++)l[m+f]=c[u+f]},flattenChunks:function(l){var c,u,d,m,f,g;for(c=d=0,u=l.length;c<u;c++)d+=l[c].length;for(g=new Uint8Array(d),c=m=0,u=l.length;c<u;c++)f=l[c],g.set(f,m),m+=f.length;return g}},r={arraySet:function(l,c,u,d,m){for(var f=0;f<d;f++)l[m+f]=c[u+f]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,s)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,r))},o.setTyped(n)},{}],42:[function(i,a,o){var n=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new n.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(d,m){if(m<65537&&(d.subarray&&r||!d.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(d,m));for(var f="",g=0;g<m;g++)f+=String.fromCharCode(d[g]);return f}l[254]=l[254]=1,o.string2buf=function(d){var m,f,g,h,p,v=d.length,b=0;for(h=0;h<v;h++)(64512&(f=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(g=d.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),h++),b+=f<128?1:f<2048?2:f<65536?3:4;for(m=new n.Buf8(b),h=p=0;p<b;h++)(64512&(f=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(g=d.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),h++),f<128?m[p++]=f:(f<2048?m[p++]=192|f>>>6:(f<65536?m[p++]=224|f>>>12:(m[p++]=240|f>>>18,m[p++]=128|f>>>12&63),m[p++]=128|f>>>6&63),m[p++]=128|63&f);return m},o.buf2binstring=function(d){return u(d,d.length)},o.binstring2buf=function(d){for(var m=new n.Buf8(d.length),f=0,g=m.length;f<g;f++)m[f]=d.charCodeAt(f);return m},o.buf2string=function(d,m){var f,g,h,p,v=m||d.length,b=new Array(2*v);for(f=g=0;f<v;)if((h=d[f++])<128)b[g++]=h;else if(4<(p=l[h]))b[g++]=65533,f+=p-1;else{for(h&=p===2?31:p===3?15:7;1<p&&f<v;)h=h<<6|63&d[f++],p--;1<p?b[g++]=65533:h<65536?b[g++]=h:(h-=65536,b[g++]=55296|h>>10&1023,b[g++]=56320|1023&h)}return u(b,g)},o.utf8border=function(d,m){var f;for((m=m||d.length)>d.length&&(m=d.length),f=m-1;0<=f&&(192&d[f])==128;)f--;return f<0||f===0?m:f+l[d[f]]>m?f:m}},{"./common":41}],43:[function(i,a,o){a.exports=function(n,s,r,l){for(var c=65535&n|0,u=n>>>16&65535|0,d=0;r!==0;){for(r-=d=2e3<r?2e3:r;u=u+(c=c+s[l++]|0)|0,--d;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(i,a,o){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,o){var n=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var u=n,d=c+l;s^=-1;for(var m=c;m<d;m++)s=s>>>8^u[255&(s^r[m])];return-1^s}},{}],46:[function(i,a,o){var n,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),u=i("./messages"),d=0,m=4,f=0,g=-2,h=-1,p=4,v=2,b=8,y=9,k=286,_=30,S=19,M=2*k+1,A=15,E=3,R=258,D=R+E+1,x=42,B=113,T=1,U=2,G=3,L=4;function V(w,j){return w.msg=u[j],j}function q(w){return(w<<1)-(4<w?9:0)}function X(w){for(var j=w.length;0<=--j;)w[j]=0}function O(w){var j=w.state,$=j.pending;$>w.avail_out&&($=w.avail_out),$!==0&&(s.arraySet(w.output,j.pending_buf,j.pending_out,$,w.next_out),w.next_out+=$,j.pending_out+=$,w.total_out+=$,w.avail_out-=$,j.pending-=$,j.pending===0&&(j.pending_out=0))}function H(w,j){r._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,j),w.block_start=w.strstart,O(w.strm)}function oe(w,j){w.pending_buf[w.pending++]=j}function ie(w,j){w.pending_buf[w.pending++]=j>>>8&255,w.pending_buf[w.pending++]=255&j}function Y(w,j){var $,P,C=w.max_chain_length,z=w.strstart,K=w.prev_length,Z=w.nice_match,N=w.strstart>w.w_size-D?w.strstart-(w.w_size-D):0,J=w.window,ne=w.w_mask,te=w.prev,ce=w.strstart+R,ke=J[z+K-1],he=J[z+K];w.prev_length>=w.good_match&&(C>>=2),Z>w.lookahead&&(Z=w.lookahead);do if(J[($=j)+K]===he&&J[$+K-1]===ke&&J[$]===J[z]&&J[++$]===J[z+1]){z+=2,$++;do;while(J[++z]===J[++$]&&J[++z]===J[++$]&&J[++z]===J[++$]&&J[++z]===J[++$]&&J[++z]===J[++$]&&J[++z]===J[++$]&&J[++z]===J[++$]&&J[++z]===J[++$]&&z<ce);if(P=R-(ce-z),z=ce-R,K<P){if(w.match_start=j,Z<=(K=P))break;ke=J[z+K-1],he=J[z+K]}}while((j=te[j&ne])>N&&--C!=0);return K<=w.lookahead?K:w.lookahead}function be(w){var j,$,P,C,z,K,Z,N,J,ne,te=w.w_size;do{if(C=w.window_size-w.lookahead-w.strstart,w.strstart>=te+(te-D)){for(s.arraySet(w.window,w.window,te,te,0),w.match_start-=te,w.strstart-=te,w.block_start-=te,j=$=w.hash_size;P=w.head[--j],w.head[j]=te<=P?P-te:0,--$;);for(j=$=te;P=w.prev[--j],w.prev[j]=te<=P?P-te:0,--$;);C+=te}if(w.strm.avail_in===0)break;if(K=w.strm,Z=w.window,N=w.strstart+w.lookahead,J=C,ne=void 0,ne=K.avail_in,J<ne&&(ne=J),$=ne===0?0:(K.avail_in-=ne,s.arraySet(Z,K.input,K.next_in,ne,N),K.state.wrap===1?K.adler=l(K.adler,Z,ne,N):K.state.wrap===2&&(K.adler=c(K.adler,Z,ne,N)),K.next_in+=ne,K.total_in+=ne,ne),w.lookahead+=$,w.lookahead+w.insert>=E)for(z=w.strstart-w.insert,w.ins_h=w.window[z],w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+E-1])&w.hash_mask,w.prev[z&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=z,z++,w.insert--,!(w.lookahead+w.insert<E)););}while(w.lookahead<D&&w.strm.avail_in!==0)}function Ae(w,j){for(var $,P;;){if(w.lookahead<D){if(be(w),w.lookahead<D&&j===d)return T;if(w.lookahead===0)break}if($=0,w.lookahead>=E&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+E-1])&w.hash_mask,$=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),$!==0&&w.strstart-$<=w.w_size-D&&(w.match_length=Y(w,$)),w.match_length>=E)if(P=r._tr_tally(w,w.strstart-w.match_start,w.match_length-E),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=E){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+E-1])&w.hash_mask,$=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else P=r._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(P&&(H(w,!1),w.strm.avail_out===0))return T}return w.insert=w.strstart<E-1?w.strstart:E-1,j===m?(H(w,!0),w.strm.avail_out===0?G:L):w.last_lit&&(H(w,!1),w.strm.avail_out===0)?T:U}function ue(w,j){for(var $,P,C;;){if(w.lookahead<D){if(be(w),w.lookahead<D&&j===d)return T;if(w.lookahead===0)break}if($=0,w.lookahead>=E&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+E-1])&w.hash_mask,$=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=E-1,$!==0&&w.prev_length<w.max_lazy_match&&w.strstart-$<=w.w_size-D&&(w.match_length=Y(w,$),w.match_length<=5&&(w.strategy===1||w.match_length===E&&4096<w.strstart-w.match_start)&&(w.match_length=E-1)),w.prev_length>=E&&w.match_length<=w.prev_length){for(C=w.strstart+w.lookahead-E,P=r._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-E),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=C&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+E-1])&w.hash_mask,$=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=E-1,w.strstart++,P&&(H(w,!1),w.strm.avail_out===0))return T}else if(w.match_available){if((P=r._tr_tally(w,0,w.window[w.strstart-1]))&&H(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return T}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(P=r._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<E-1?w.strstart:E-1,j===m?(H(w,!0),w.strm.avail_out===0?G:L):w.last_lit&&(H(w,!1),w.strm.avail_out===0)?T:U}function pe(w,j,$,P,C){this.good_length=w,this.max_lazy=j,this.nice_length=$,this.max_chain=P,this.func=C}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*M),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*S+1)),X(this.dyn_ltree),X(this.dyn_dtree),X(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(A+1),this.heap=new s.Buf16(2*k+1),X(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*k+1),X(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ee(w){var j;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=v,(j=w.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?x:B,w.adler=j.wrap===2?0:1,j.last_flush=d,r._tr_init(j),f):V(w,g)}function et(w){var j=Ee(w);return j===f&&(function($){$.window_size=2*$.w_size,X($.head),$.max_lazy_match=n[$.level].max_lazy,$.good_match=n[$.level].good_length,$.nice_match=n[$.level].nice_length,$.max_chain_length=n[$.level].max_chain,$.strstart=0,$.block_start=0,$.lookahead=0,$.insert=0,$.match_length=$.prev_length=E-1,$.match_available=0,$.ins_h=0})(w.state),j}function Ve(w,j,$,P,C,z){if(!w)return g;var K=1;if(j===h&&(j=6),P<0?(K=0,P=-P):15<P&&(K=2,P-=16),C<1||y<C||$!==b||P<8||15<P||j<0||9<j||z<0||p<z)return V(w,g);P===8&&(P=9);var Z=new Re;return(w.state=Z).strm=w,Z.wrap=K,Z.gzhead=null,Z.w_bits=P,Z.w_size=1<<Z.w_bits,Z.w_mask=Z.w_size-1,Z.hash_bits=C+7,Z.hash_size=1<<Z.hash_bits,Z.hash_mask=Z.hash_size-1,Z.hash_shift=~~((Z.hash_bits+E-1)/E),Z.window=new s.Buf8(2*Z.w_size),Z.head=new s.Buf16(Z.hash_size),Z.prev=new s.Buf16(Z.w_size),Z.lit_bufsize=1<<C+6,Z.pending_buf_size=4*Z.lit_bufsize,Z.pending_buf=new s.Buf8(Z.pending_buf_size),Z.d_buf=1*Z.lit_bufsize,Z.l_buf=3*Z.lit_bufsize,Z.level=j,Z.strategy=z,Z.method=$,et(w)}n=[new pe(0,0,0,0,function(w,j){var $=65535;for($>w.pending_buf_size-5&&($=w.pending_buf_size-5);;){if(w.lookahead<=1){if(be(w),w.lookahead===0&&j===d)return T;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var P=w.block_start+$;if((w.strstart===0||w.strstart>=P)&&(w.lookahead=w.strstart-P,w.strstart=P,H(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-D&&(H(w,!1),w.strm.avail_out===0))return T}return w.insert=0,j===m?(H(w,!0),w.strm.avail_out===0?G:L):(w.strstart>w.block_start&&(H(w,!1),w.strm.avail_out),T)}),new pe(4,4,8,4,Ae),new pe(4,5,16,8,Ae),new pe(4,6,32,32,Ae),new pe(4,4,16,16,ue),new pe(8,16,32,32,ue),new pe(8,16,128,128,ue),new pe(8,32,128,256,ue),new pe(32,128,258,1024,ue),new pe(32,258,258,4096,ue)],o.deflateInit=function(w,j){return Ve(w,j,b,15,8,0)},o.deflateInit2=Ve,o.deflateReset=et,o.deflateResetKeep=Ee,o.deflateSetHeader=function(w,j){return w&&w.state?w.state.wrap!==2?g:(w.state.gzhead=j,f):g},o.deflate=function(w,j){var $,P,C,z;if(!w||!w.state||5<j||j<0)return w?V(w,g):g;if(P=w.state,!w.output||!w.input&&w.avail_in!==0||P.status===666&&j!==m)return V(w,w.avail_out===0?-5:g);if(P.strm=w,$=P.last_flush,P.last_flush=j,P.status===x)if(P.wrap===2)w.adler=0,oe(P,31),oe(P,139),oe(P,8),P.gzhead?(oe(P,(P.gzhead.text?1:0)+(P.gzhead.hcrc?2:0)+(P.gzhead.extra?4:0)+(P.gzhead.name?8:0)+(P.gzhead.comment?16:0)),oe(P,255&P.gzhead.time),oe(P,P.gzhead.time>>8&255),oe(P,P.gzhead.time>>16&255),oe(P,P.gzhead.time>>24&255),oe(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),oe(P,255&P.gzhead.os),P.gzhead.extra&&P.gzhead.extra.length&&(oe(P,255&P.gzhead.extra.length),oe(P,P.gzhead.extra.length>>8&255)),P.gzhead.hcrc&&(w.adler=c(w.adler,P.pending_buf,P.pending,0)),P.gzindex=0,P.status=69):(oe(P,0),oe(P,0),oe(P,0),oe(P,0),oe(P,0),oe(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),oe(P,3),P.status=B);else{var K=b+(P.w_bits-8<<4)<<8;K|=(2<=P.strategy||P.level<2?0:P.level<6?1:P.level===6?2:3)<<6,P.strstart!==0&&(K|=32),K+=31-K%31,P.status=B,ie(P,K),P.strstart!==0&&(ie(P,w.adler>>>16),ie(P,65535&w.adler)),w.adler=1}if(P.status===69)if(P.gzhead.extra){for(C=P.pending;P.gzindex<(65535&P.gzhead.extra.length)&&(P.pending!==P.pending_buf_size||(P.gzhead.hcrc&&P.pending>C&&(w.adler=c(w.adler,P.pending_buf,P.pending-C,C)),O(w),C=P.pending,P.pending!==P.pending_buf_size));)oe(P,255&P.gzhead.extra[P.gzindex]),P.gzindex++;P.gzhead.hcrc&&P.pending>C&&(w.adler=c(w.adler,P.pending_buf,P.pending-C,C)),P.gzindex===P.gzhead.extra.length&&(P.gzindex=0,P.status=73)}else P.status=73;if(P.status===73)if(P.gzhead.name){C=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>C&&(w.adler=c(w.adler,P.pending_buf,P.pending-C,C)),O(w),C=P.pending,P.pending===P.pending_buf_size)){z=1;break}z=P.gzindex<P.gzhead.name.length?255&P.gzhead.name.charCodeAt(P.gzindex++):0,oe(P,z)}while(z!==0);P.gzhead.hcrc&&P.pending>C&&(w.adler=c(w.adler,P.pending_buf,P.pending-C,C)),z===0&&(P.gzindex=0,P.status=91)}else P.status=91;if(P.status===91)if(P.gzhead.comment){C=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>C&&(w.adler=c(w.adler,P.pending_buf,P.pending-C,C)),O(w),C=P.pending,P.pending===P.pending_buf_size)){z=1;break}z=P.gzindex<P.gzhead.comment.length?255&P.gzhead.comment.charCodeAt(P.gzindex++):0,oe(P,z)}while(z!==0);P.gzhead.hcrc&&P.pending>C&&(w.adler=c(w.adler,P.pending_buf,P.pending-C,C)),z===0&&(P.status=103)}else P.status=103;if(P.status===103&&(P.gzhead.hcrc?(P.pending+2>P.pending_buf_size&&O(w),P.pending+2<=P.pending_buf_size&&(oe(P,255&w.adler),oe(P,w.adler>>8&255),w.adler=0,P.status=B)):P.status=B),P.pending!==0){if(O(w),w.avail_out===0)return P.last_flush=-1,f}else if(w.avail_in===0&&q(j)<=q($)&&j!==m)return V(w,-5);if(P.status===666&&w.avail_in!==0)return V(w,-5);if(w.avail_in!==0||P.lookahead!==0||j!==d&&P.status!==666){var Z=P.strategy===2?(function(N,J){for(var ne;;){if(N.lookahead===0&&(be(N),N.lookahead===0)){if(J===d)return T;break}if(N.match_length=0,ne=r._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,ne&&(H(N,!1),N.strm.avail_out===0))return T}return N.insert=0,J===m?(H(N,!0),N.strm.avail_out===0?G:L):N.last_lit&&(H(N,!1),N.strm.avail_out===0)?T:U})(P,j):P.strategy===3?(function(N,J){for(var ne,te,ce,ke,he=N.window;;){if(N.lookahead<=R){if(be(N),N.lookahead<=R&&J===d)return T;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=E&&0<N.strstart&&(te=he[ce=N.strstart-1])===he[++ce]&&te===he[++ce]&&te===he[++ce]){ke=N.strstart+R;do;while(te===he[++ce]&&te===he[++ce]&&te===he[++ce]&&te===he[++ce]&&te===he[++ce]&&te===he[++ce]&&te===he[++ce]&&te===he[++ce]&&ce<ke);N.match_length=R-(ke-ce),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=E?(ne=r._tr_tally(N,1,N.match_length-E),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(ne=r._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),ne&&(H(N,!1),N.strm.avail_out===0))return T}return N.insert=0,J===m?(H(N,!0),N.strm.avail_out===0?G:L):N.last_lit&&(H(N,!1),N.strm.avail_out===0)?T:U})(P,j):n[P.level].func(P,j);if(Z!==G&&Z!==L||(P.status=666),Z===T||Z===G)return w.avail_out===0&&(P.last_flush=-1),f;if(Z===U&&(j===1?r._tr_align(P):j!==5&&(r._tr_stored_block(P,0,0,!1),j===3&&(X(P.head),P.lookahead===0&&(P.strstart=0,P.block_start=0,P.insert=0))),O(w),w.avail_out===0))return P.last_flush=-1,f}return j!==m?f:P.wrap<=0?1:(P.wrap===2?(oe(P,255&w.adler),oe(P,w.adler>>8&255),oe(P,w.adler>>16&255),oe(P,w.adler>>24&255),oe(P,255&w.total_in),oe(P,w.total_in>>8&255),oe(P,w.total_in>>16&255),oe(P,w.total_in>>24&255)):(ie(P,w.adler>>>16),ie(P,65535&w.adler)),O(w),0<P.wrap&&(P.wrap=-P.wrap),P.pending!==0?f:1)},o.deflateEnd=function(w){var j;return w&&w.state?(j=w.state.status)!==x&&j!==69&&j!==73&&j!==91&&j!==103&&j!==B&&j!==666?V(w,g):(w.state=null,j===B?V(w,-3):f):g},o.deflateSetDictionary=function(w,j){var $,P,C,z,K,Z,N,J,ne=j.length;if(!w||!w.state||(z=($=w.state).wrap)===2||z===1&&$.status!==x||$.lookahead)return g;for(z===1&&(w.adler=l(w.adler,j,ne,0)),$.wrap=0,ne>=$.w_size&&(z===0&&(X($.head),$.strstart=0,$.block_start=0,$.insert=0),J=new s.Buf8($.w_size),s.arraySet(J,j,ne-$.w_size,$.w_size,0),j=J,ne=$.w_size),K=w.avail_in,Z=w.next_in,N=w.input,w.avail_in=ne,w.next_in=0,w.input=j,be($);$.lookahead>=E;){for(P=$.strstart,C=$.lookahead-(E-1);$.ins_h=($.ins_h<<$.hash_shift^$.window[P+E-1])&$.hash_mask,$.prev[P&$.w_mask]=$.head[$.ins_h],$.head[$.ins_h]=P,P++,--C;);$.strstart=P,$.lookahead=E-1,be($)}return $.strstart+=$.lookahead,$.block_start=$.strstart,$.insert=$.lookahead,$.lookahead=0,$.match_length=$.prev_length=E-1,$.match_available=0,w.next_in=Z,w.input=N,w.avail_in=K,$.wrap=z,f},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,o){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,o){a.exports=function(n,s){var r,l,c,u,d,m,f,g,h,p,v,b,y,k,_,S,M,A,E,R,D,x,B,T,U;r=n.state,l=n.next_in,T=n.input,c=l+(n.avail_in-5),u=n.next_out,U=n.output,d=u-(s-n.avail_out),m=u+(n.avail_out-257),f=r.dmax,g=r.wsize,h=r.whave,p=r.wnext,v=r.window,b=r.hold,y=r.bits,k=r.lencode,_=r.distcode,S=(1<<r.lenbits)-1,M=(1<<r.distbits)-1;e:do{y<15&&(b+=T[l++]<<y,y+=8,b+=T[l++]<<y,y+=8),A=k[b&S];t:for(;;){if(b>>>=E=A>>>24,y-=E,(E=A>>>16&255)===0)U[u++]=65535&A;else{if(!(16&E)){if((64&E)==0){A=k[(65535&A)+(b&(1<<E)-1)];continue t}if(32&E){r.mode=12;break e}n.msg="invalid literal/length code",r.mode=30;break e}R=65535&A,(E&=15)&&(y<E&&(b+=T[l++]<<y,y+=8),R+=b&(1<<E)-1,b>>>=E,y-=E),y<15&&(b+=T[l++]<<y,y+=8,b+=T[l++]<<y,y+=8),A=_[b&M];i:for(;;){if(b>>>=E=A>>>24,y-=E,!(16&(E=A>>>16&255))){if((64&E)==0){A=_[(65535&A)+(b&(1<<E)-1)];continue i}n.msg="invalid distance code",r.mode=30;break e}if(D=65535&A,y<(E&=15)&&(b+=T[l++]<<y,(y+=8)<E&&(b+=T[l++]<<y,y+=8)),f<(D+=b&(1<<E)-1)){n.msg="invalid distance too far back",r.mode=30;break e}if(b>>>=E,y-=E,(E=u-d)<D){if(h<(E=D-E)&&r.sane){n.msg="invalid distance too far back",r.mode=30;break e}if(B=v,(x=0)===p){if(x+=g-E,E<R){for(R-=E;U[u++]=v[x++],--E;);x=u-D,B=U}}else if(p<E){if(x+=g+p-E,(E-=p)<R){for(R-=E;U[u++]=v[x++],--E;);if(x=0,p<R){for(R-=E=p;U[u++]=v[x++],--E;);x=u-D,B=U}}}else if(x+=p-E,E<R){for(R-=E;U[u++]=v[x++],--E;);x=u-D,B=U}for(;2<R;)U[u++]=B[x++],U[u++]=B[x++],U[u++]=B[x++],R-=3;R&&(U[u++]=B[x++],1<R&&(U[u++]=B[x++]))}else{for(x=u-D;U[u++]=U[x++],U[u++]=U[x++],U[u++]=U[x++],2<(R-=3););R&&(U[u++]=U[x++],1<R&&(U[u++]=U[x++]))}break}}break}}while(l<c&&u<m);l-=R=y>>3,b&=(1<<(y-=R<<3))-1,n.next_in=l,n.next_out=u,n.avail_in=l<c?c-l+5:5-(l-c),n.avail_out=u<m?m-u+257:257-(u-m),r.hold=b,r.bits=y}},{}],49:[function(i,a,o){var n=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),u=1,d=2,m=0,f=-2,g=1,h=852,p=592;function v(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(x){var B;return x&&x.state?(B=x.state,x.total_in=x.total_out=B.total=0,x.msg="",B.wrap&&(x.adler=1&B.wrap),B.mode=g,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new n.Buf32(h),B.distcode=B.distdyn=new n.Buf32(p),B.sane=1,B.back=-1,m):f}function k(x){var B;return x&&x.state?((B=x.state).wsize=0,B.whave=0,B.wnext=0,y(x)):f}function _(x,B){var T,U;return x&&x.state?(U=x.state,B<0?(T=0,B=-B):(T=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?f:(U.window!==null&&U.wbits!==B&&(U.window=null),U.wrap=T,U.wbits=B,k(x))):f}function S(x,B){var T,U;return x?(U=new b,(x.state=U).window=null,(T=_(x,B))!==m&&(x.state=null),T):f}var M,A,E=!0;function R(x){if(E){var B;for(M=new n.Buf32(512),A=new n.Buf32(32),B=0;B<144;)x.lens[B++]=8;for(;B<256;)x.lens[B++]=9;for(;B<280;)x.lens[B++]=7;for(;B<288;)x.lens[B++]=8;for(c(u,x.lens,0,288,M,0,x.work,{bits:9}),B=0;B<32;)x.lens[B++]=5;c(d,x.lens,0,32,A,0,x.work,{bits:5}),E=!1}x.lencode=M,x.lenbits=9,x.distcode=A,x.distbits=5}function D(x,B,T,U){var G,L=x.state;return L.window===null&&(L.wsize=1<<L.wbits,L.wnext=0,L.whave=0,L.window=new n.Buf8(L.wsize)),U>=L.wsize?(n.arraySet(L.window,B,T-L.wsize,L.wsize,0),L.wnext=0,L.whave=L.wsize):(U<(G=L.wsize-L.wnext)&&(G=U),n.arraySet(L.window,B,T-U,G,L.wnext),(U-=G)?(n.arraySet(L.window,B,T-U,U,0),L.wnext=U,L.whave=L.wsize):(L.wnext+=G,L.wnext===L.wsize&&(L.wnext=0),L.whave<L.wsize&&(L.whave+=G))),0}o.inflateReset=k,o.inflateReset2=_,o.inflateResetKeep=y,o.inflateInit=function(x){return S(x,15)},o.inflateInit2=S,o.inflate=function(x,B){var T,U,G,L,V,q,X,O,H,oe,ie,Y,be,Ae,ue,pe,Re,Ee,et,Ve,w,j,$,P,C=0,z=new n.Buf8(4),K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return f;(T=x.state).mode===12&&(T.mode=13),V=x.next_out,G=x.output,X=x.avail_out,L=x.next_in,U=x.input,q=x.avail_in,O=T.hold,H=T.bits,oe=q,ie=X,j=m;e:for(;;)switch(T.mode){case g:if(T.wrap===0){T.mode=13;break}for(;H<16;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(2&T.wrap&&O===35615){z[T.check=0]=255&O,z[1]=O>>>8&255,T.check=r(T.check,z,2,0),H=O=0,T.mode=2;break}if(T.flags=0,T.head&&(T.head.done=!1),!(1&T.wrap)||(((255&O)<<8)+(O>>8))%31){x.msg="incorrect header check",T.mode=30;break}if((15&O)!=8){x.msg="unknown compression method",T.mode=30;break}if(H-=4,w=8+(15&(O>>>=4)),T.wbits===0)T.wbits=w;else if(w>T.wbits){x.msg="invalid window size",T.mode=30;break}T.dmax=1<<w,x.adler=T.check=1,T.mode=512&O?10:12,H=O=0;break;case 2:for(;H<16;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(T.flags=O,(255&T.flags)!=8){x.msg="unknown compression method",T.mode=30;break}if(57344&T.flags){x.msg="unknown header flags set",T.mode=30;break}T.head&&(T.head.text=O>>8&1),512&T.flags&&(z[0]=255&O,z[1]=O>>>8&255,T.check=r(T.check,z,2,0)),H=O=0,T.mode=3;case 3:for(;H<32;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}T.head&&(T.head.time=O),512&T.flags&&(z[0]=255&O,z[1]=O>>>8&255,z[2]=O>>>16&255,z[3]=O>>>24&255,T.check=r(T.check,z,4,0)),H=O=0,T.mode=4;case 4:for(;H<16;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}T.head&&(T.head.xflags=255&O,T.head.os=O>>8),512&T.flags&&(z[0]=255&O,z[1]=O>>>8&255,T.check=r(T.check,z,2,0)),H=O=0,T.mode=5;case 5:if(1024&T.flags){for(;H<16;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}T.length=O,T.head&&(T.head.extra_len=O),512&T.flags&&(z[0]=255&O,z[1]=O>>>8&255,T.check=r(T.check,z,2,0)),H=O=0}else T.head&&(T.head.extra=null);T.mode=6;case 6:if(1024&T.flags&&(q<(Y=T.length)&&(Y=q),Y&&(T.head&&(w=T.head.extra_len-T.length,T.head.extra||(T.head.extra=new Array(T.head.extra_len)),n.arraySet(T.head.extra,U,L,Y,w)),512&T.flags&&(T.check=r(T.check,U,Y,L)),q-=Y,L+=Y,T.length-=Y),T.length))break e;T.length=0,T.mode=7;case 7:if(2048&T.flags){if(q===0)break e;for(Y=0;w=U[L+Y++],T.head&&w&&T.length<65536&&(T.head.name+=String.fromCharCode(w)),w&&Y<q;);if(512&T.flags&&(T.check=r(T.check,U,Y,L)),q-=Y,L+=Y,w)break e}else T.head&&(T.head.name=null);T.length=0,T.mode=8;case 8:if(4096&T.flags){if(q===0)break e;for(Y=0;w=U[L+Y++],T.head&&w&&T.length<65536&&(T.head.comment+=String.fromCharCode(w)),w&&Y<q;);if(512&T.flags&&(T.check=r(T.check,U,Y,L)),q-=Y,L+=Y,w)break e}else T.head&&(T.head.comment=null);T.mode=9;case 9:if(512&T.flags){for(;H<16;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(O!==(65535&T.check)){x.msg="header crc mismatch",T.mode=30;break}H=O=0}T.head&&(T.head.hcrc=T.flags>>9&1,T.head.done=!0),x.adler=T.check=0,T.mode=12;break;case 10:for(;H<32;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}x.adler=T.check=v(O),H=O=0,T.mode=11;case 11:if(T.havedict===0)return x.next_out=V,x.avail_out=X,x.next_in=L,x.avail_in=q,T.hold=O,T.bits=H,2;x.adler=T.check=1,T.mode=12;case 12:if(B===5||B===6)break e;case 13:if(T.last){O>>>=7&H,H-=7&H,T.mode=27;break}for(;H<3;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}switch(T.last=1&O,H-=1,3&(O>>>=1)){case 0:T.mode=14;break;case 1:if(R(T),T.mode=20,B!==6)break;O>>>=2,H-=2;break e;case 2:T.mode=17;break;case 3:x.msg="invalid block type",T.mode=30}O>>>=2,H-=2;break;case 14:for(O>>>=7&H,H-=7&H;H<32;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if((65535&O)!=(O>>>16^65535)){x.msg="invalid stored block lengths",T.mode=30;break}if(T.length=65535&O,H=O=0,T.mode=15,B===6)break e;case 15:T.mode=16;case 16:if(Y=T.length){if(q<Y&&(Y=q),X<Y&&(Y=X),Y===0)break e;n.arraySet(G,U,L,Y,V),q-=Y,L+=Y,X-=Y,V+=Y,T.length-=Y;break}T.mode=12;break;case 17:for(;H<14;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(T.nlen=257+(31&O),O>>>=5,H-=5,T.ndist=1+(31&O),O>>>=5,H-=5,T.ncode=4+(15&O),O>>>=4,H-=4,286<T.nlen||30<T.ndist){x.msg="too many length or distance symbols",T.mode=30;break}T.have=0,T.mode=18;case 18:for(;T.have<T.ncode;){for(;H<3;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}T.lens[K[T.have++]]=7&O,O>>>=3,H-=3}for(;T.have<19;)T.lens[K[T.have++]]=0;if(T.lencode=T.lendyn,T.lenbits=7,$={bits:T.lenbits},j=c(0,T.lens,0,19,T.lencode,0,T.work,$),T.lenbits=$.bits,j){x.msg="invalid code lengths set",T.mode=30;break}T.have=0,T.mode=19;case 19:for(;T.have<T.nlen+T.ndist;){for(;pe=(C=T.lencode[O&(1<<T.lenbits)-1])>>>16&255,Re=65535&C,!((ue=C>>>24)<=H);){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(Re<16)O>>>=ue,H-=ue,T.lens[T.have++]=Re;else{if(Re===16){for(P=ue+2;H<P;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(O>>>=ue,H-=ue,T.have===0){x.msg="invalid bit length repeat",T.mode=30;break}w=T.lens[T.have-1],Y=3+(3&O),O>>>=2,H-=2}else if(Re===17){for(P=ue+3;H<P;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}H-=ue,w=0,Y=3+(7&(O>>>=ue)),O>>>=3,H-=3}else{for(P=ue+7;H<P;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}H-=ue,w=0,Y=11+(127&(O>>>=ue)),O>>>=7,H-=7}if(T.have+Y>T.nlen+T.ndist){x.msg="invalid bit length repeat",T.mode=30;break}for(;Y--;)T.lens[T.have++]=w}}if(T.mode===30)break;if(T.lens[256]===0){x.msg="invalid code -- missing end-of-block",T.mode=30;break}if(T.lenbits=9,$={bits:T.lenbits},j=c(u,T.lens,0,T.nlen,T.lencode,0,T.work,$),T.lenbits=$.bits,j){x.msg="invalid literal/lengths set",T.mode=30;break}if(T.distbits=6,T.distcode=T.distdyn,$={bits:T.distbits},j=c(d,T.lens,T.nlen,T.ndist,T.distcode,0,T.work,$),T.distbits=$.bits,j){x.msg="invalid distances set",T.mode=30;break}if(T.mode=20,B===6)break e;case 20:T.mode=21;case 21:if(6<=q&&258<=X){x.next_out=V,x.avail_out=X,x.next_in=L,x.avail_in=q,T.hold=O,T.bits=H,l(x,ie),V=x.next_out,G=x.output,X=x.avail_out,L=x.next_in,U=x.input,q=x.avail_in,O=T.hold,H=T.bits,T.mode===12&&(T.back=-1);break}for(T.back=0;pe=(C=T.lencode[O&(1<<T.lenbits)-1])>>>16&255,Re=65535&C,!((ue=C>>>24)<=H);){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(pe&&(240&pe)==0){for(Ee=ue,et=pe,Ve=Re;pe=(C=T.lencode[Ve+((O&(1<<Ee+et)-1)>>Ee)])>>>16&255,Re=65535&C,!(Ee+(ue=C>>>24)<=H);){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}O>>>=Ee,H-=Ee,T.back+=Ee}if(O>>>=ue,H-=ue,T.back+=ue,T.length=Re,pe===0){T.mode=26;break}if(32&pe){T.back=-1,T.mode=12;break}if(64&pe){x.msg="invalid literal/length code",T.mode=30;break}T.extra=15&pe,T.mode=22;case 22:if(T.extra){for(P=T.extra;H<P;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}T.length+=O&(1<<T.extra)-1,O>>>=T.extra,H-=T.extra,T.back+=T.extra}T.was=T.length,T.mode=23;case 23:for(;pe=(C=T.distcode[O&(1<<T.distbits)-1])>>>16&255,Re=65535&C,!((ue=C>>>24)<=H);){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if((240&pe)==0){for(Ee=ue,et=pe,Ve=Re;pe=(C=T.distcode[Ve+((O&(1<<Ee+et)-1)>>Ee)])>>>16&255,Re=65535&C,!(Ee+(ue=C>>>24)<=H);){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}O>>>=Ee,H-=Ee,T.back+=Ee}if(O>>>=ue,H-=ue,T.back+=ue,64&pe){x.msg="invalid distance code",T.mode=30;break}T.offset=Re,T.extra=15&pe,T.mode=24;case 24:if(T.extra){for(P=T.extra;H<P;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}T.offset+=O&(1<<T.extra)-1,O>>>=T.extra,H-=T.extra,T.back+=T.extra}if(T.offset>T.dmax){x.msg="invalid distance too far back",T.mode=30;break}T.mode=25;case 25:if(X===0)break e;if(Y=ie-X,T.offset>Y){if((Y=T.offset-Y)>T.whave&&T.sane){x.msg="invalid distance too far back",T.mode=30;break}be=Y>T.wnext?(Y-=T.wnext,T.wsize-Y):T.wnext-Y,Y>T.length&&(Y=T.length),Ae=T.window}else Ae=G,be=V-T.offset,Y=T.length;for(X<Y&&(Y=X),X-=Y,T.length-=Y;G[V++]=Ae[be++],--Y;);T.length===0&&(T.mode=21);break;case 26:if(X===0)break e;G[V++]=T.length,X--,T.mode=21;break;case 27:if(T.wrap){for(;H<32;){if(q===0)break e;q--,O|=U[L++]<<H,H+=8}if(ie-=X,x.total_out+=ie,T.total+=ie,ie&&(x.adler=T.check=T.flags?r(T.check,G,ie,V-ie):s(T.check,G,ie,V-ie)),ie=X,(T.flags?O:v(O))!==T.check){x.msg="incorrect data check",T.mode=30;break}H=O=0}T.mode=28;case 28:if(T.wrap&&T.flags){for(;H<32;){if(q===0)break e;q--,O+=U[L++]<<H,H+=8}if(O!==(4294967295&T.total)){x.msg="incorrect length check",T.mode=30;break}H=O=0}T.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;case 32:default:return f}return x.next_out=V,x.avail_out=X,x.next_in=L,x.avail_in=q,T.hold=O,T.bits=H,(T.wsize||ie!==x.avail_out&&T.mode<30&&(T.mode<27||B!==4))&&D(x,x.output,x.next_out,ie-x.avail_out)?(T.mode=31,-4):(oe-=x.avail_in,ie-=x.avail_out,x.total_in+=oe,x.total_out+=ie,T.total+=ie,T.wrap&&ie&&(x.adler=T.check=T.flags?r(T.check,G,ie,x.next_out-ie):s(T.check,G,ie,x.next_out-ie)),x.data_type=T.bits+(T.last?64:0)+(T.mode===12?128:0)+(T.mode===20||T.mode===15?256:0),(oe==0&&ie===0||B===4)&&j===m&&(j=-5),j)},o.inflateEnd=function(x){if(!x||!x.state)return f;var B=x.state;return B.window&&(B.window=null),x.state=null,m},o.inflateGetHeader=function(x,B){var T;return x&&x.state?(2&(T=x.state).wrap)==0?f:((T.head=B).done=!1,m):f},o.inflateSetDictionary=function(x,B){var T,U=B.length;return x&&x.state?(T=x.state).wrap!==0&&T.mode!==11?f:T.mode===11&&s(1,B,U,0)!==T.check?-3:D(x,B,U,U)?(T.mode=31,-4):(T.havedict=1,m):f},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,o){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(u,d,m,f,g,h,p,v){var b,y,k,_,S,M,A,E,R,D=v.bits,x=0,B=0,T=0,U=0,G=0,L=0,V=0,q=0,X=0,O=0,H=null,oe=0,ie=new n.Buf16(16),Y=new n.Buf16(16),be=null,Ae=0;for(x=0;x<=15;x++)ie[x]=0;for(B=0;B<f;B++)ie[d[m+B]]++;for(G=D,U=15;1<=U&&ie[U]===0;U--);if(U<G&&(G=U),U===0)return g[h++]=20971520,g[h++]=20971520,v.bits=1,0;for(T=1;T<U&&ie[T]===0;T++);for(G<T&&(G=T),x=q=1;x<=15;x++)if(q<<=1,(q-=ie[x])<0)return-1;if(0<q&&(u===0||U!==1))return-1;for(Y[1]=0,x=1;x<15;x++)Y[x+1]=Y[x]+ie[x];for(B=0;B<f;B++)d[m+B]!==0&&(p[Y[d[m+B]]++]=B);if(M=u===0?(H=be=p,19):u===1?(H=s,oe-=257,be=r,Ae-=257,256):(H=l,be=c,-1),x=T,S=h,V=B=O=0,k=-1,_=(X=1<<(L=G))-1,u===1&&852<X||u===2&&592<X)return 1;for(;;){for(A=x-V,R=p[B]<M?(E=0,p[B]):p[B]>M?(E=be[Ae+p[B]],H[oe+p[B]]):(E=96,0),b=1<<x-V,T=y=1<<L;g[S+(O>>V)+(y-=b)]=A<<24|E<<16|R|0,y!==0;);for(b=1<<x-1;O&b;)b>>=1;if(b!==0?(O&=b-1,O+=b):O=0,B++,--ie[x]==0){if(x===U)break;x=d[m+p[B]]}if(G<x&&(O&_)!==k){for(V===0&&(V=G),S+=T,q=1<<(L=x-V);L+V<U&&!((q-=ie[L+V])<=0);)L++,q<<=1;if(X+=1<<L,u===1&&852<X||u===2&&592<X)return 1;g[k=O&_]=G<<24|L<<16|S-h|0}}return O!==0&&(g[S+O]=x-V<<24|64<<16|0),v.bits=G,0}},{"../utils/common":41}],51:[function(i,a,o){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,o){var n=i("../utils/common"),s=0,r=1;function l(C){for(var z=C.length;0<=--z;)C[z]=0}var c=0,u=29,d=256,m=d+1+u,f=30,g=19,h=2*m+1,p=15,v=16,b=7,y=256,k=16,_=17,S=18,M=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=new Array(2*(m+2));l(D);var x=new Array(2*f);l(x);var B=new Array(512);l(B);var T=new Array(256);l(T);var U=new Array(u);l(U);var G,L,V,q=new Array(f);function X(C,z,K,Z,N){this.static_tree=C,this.extra_bits=z,this.extra_base=K,this.elems=Z,this.max_length=N,this.has_stree=C&&C.length}function O(C,z){this.dyn_tree=C,this.max_code=0,this.stat_desc=z}function H(C){return C<256?B[C]:B[256+(C>>>7)]}function oe(C,z){C.pending_buf[C.pending++]=255&z,C.pending_buf[C.pending++]=z>>>8&255}function ie(C,z,K){C.bi_valid>v-K?(C.bi_buf|=z<<C.bi_valid&65535,oe(C,C.bi_buf),C.bi_buf=z>>v-C.bi_valid,C.bi_valid+=K-v):(C.bi_buf|=z<<C.bi_valid&65535,C.bi_valid+=K)}function Y(C,z,K){ie(C,K[2*z],K[2*z+1])}function be(C,z){for(var K=0;K|=1&C,C>>>=1,K<<=1,0<--z;);return K>>>1}function Ae(C,z,K){var Z,N,J=new Array(p+1),ne=0;for(Z=1;Z<=p;Z++)J[Z]=ne=ne+K[Z-1]<<1;for(N=0;N<=z;N++){var te=C[2*N+1];te!==0&&(C[2*N]=be(J[te]++,te))}}function ue(C){var z;for(z=0;z<m;z++)C.dyn_ltree[2*z]=0;for(z=0;z<f;z++)C.dyn_dtree[2*z]=0;for(z=0;z<g;z++)C.bl_tree[2*z]=0;C.dyn_ltree[2*y]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function pe(C){8<C.bi_valid?oe(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function Re(C,z,K,Z){var N=2*z,J=2*K;return C[N]<C[J]||C[N]===C[J]&&Z[z]<=Z[K]}function Ee(C,z,K){for(var Z=C.heap[K],N=K<<1;N<=C.heap_len&&(N<C.heap_len&&Re(z,C.heap[N+1],C.heap[N],C.depth)&&N++,!Re(z,Z,C.heap[N],C.depth));)C.heap[K]=C.heap[N],K=N,N<<=1;C.heap[K]=Z}function et(C,z,K){var Z,N,J,ne,te=0;if(C.last_lit!==0)for(;Z=C.pending_buf[C.d_buf+2*te]<<8|C.pending_buf[C.d_buf+2*te+1],N=C.pending_buf[C.l_buf+te],te++,Z===0?Y(C,N,z):(Y(C,(J=T[N])+d+1,z),(ne=M[J])!==0&&ie(C,N-=U[J],ne),Y(C,J=H(--Z),K),(ne=A[J])!==0&&ie(C,Z-=q[J],ne)),te<C.last_lit;);Y(C,y,z)}function Ve(C,z){var K,Z,N,J=z.dyn_tree,ne=z.stat_desc.static_tree,te=z.stat_desc.has_stree,ce=z.stat_desc.elems,ke=-1;for(C.heap_len=0,C.heap_max=h,K=0;K<ce;K++)J[2*K]!==0?(C.heap[++C.heap_len]=ke=K,C.depth[K]=0):J[2*K+1]=0;for(;C.heap_len<2;)J[2*(N=C.heap[++C.heap_len]=ke<2?++ke:0)]=1,C.depth[N]=0,C.opt_len--,te&&(C.static_len-=ne[2*N+1]);for(z.max_code=ke,K=C.heap_len>>1;1<=K;K--)Ee(C,J,K);for(N=ce;K=C.heap[1],C.heap[1]=C.heap[C.heap_len--],Ee(C,J,1),Z=C.heap[1],C.heap[--C.heap_max]=K,C.heap[--C.heap_max]=Z,J[2*N]=J[2*K]+J[2*Z],C.depth[N]=(C.depth[K]>=C.depth[Z]?C.depth[K]:C.depth[Z])+1,J[2*K+1]=J[2*Z+1]=N,C.heap[1]=N++,Ee(C,J,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(he,tt){var ua,wt,da,Ie,Eo,Yn,Pt=tt.dyn_tree,Wl=tt.max_code,$v=tt.stat_desc.static_tree,Wv=tt.stat_desc.has_stree,jv=tt.stat_desc.extra_bits,jl=tt.stat_desc.extra_base,ha=tt.stat_desc.max_length,Po=0;for(Ie=0;Ie<=p;Ie++)he.bl_count[Ie]=0;for(Pt[2*he.heap[he.heap_max]+1]=0,ua=he.heap_max+1;ua<h;ua++)ha<(Ie=Pt[2*Pt[2*(wt=he.heap[ua])+1]+1]+1)&&(Ie=ha,Po++),Pt[2*wt+1]=Ie,Wl<wt||(he.bl_count[Ie]++,Eo=0,jl<=wt&&(Eo=jv[wt-jl]),Yn=Pt[2*wt],he.opt_len+=Yn*(Ie+Eo),Wv&&(he.static_len+=Yn*($v[2*wt+1]+Eo)));if(Po!==0){do{for(Ie=ha-1;he.bl_count[Ie]===0;)Ie--;he.bl_count[Ie]--,he.bl_count[Ie+1]+=2,he.bl_count[ha]--,Po-=2}while(0<Po);for(Ie=ha;Ie!==0;Ie--)for(wt=he.bl_count[Ie];wt!==0;)Wl<(da=he.heap[--ua])||(Pt[2*da+1]!==Ie&&(he.opt_len+=(Ie-Pt[2*da+1])*Pt[2*da],Pt[2*da+1]=Ie),wt--)}})(C,z),Ae(J,ke,C.bl_count)}function w(C,z,K){var Z,N,J=-1,ne=z[1],te=0,ce=7,ke=4;for(ne===0&&(ce=138,ke=3),z[2*(K+1)+1]=65535,Z=0;Z<=K;Z++)N=ne,ne=z[2*(Z+1)+1],++te<ce&&N===ne||(te<ke?C.bl_tree[2*N]+=te:N!==0?(N!==J&&C.bl_tree[2*N]++,C.bl_tree[2*k]++):te<=10?C.bl_tree[2*_]++:C.bl_tree[2*S]++,J=N,ke=(te=0)===ne?(ce=138,3):N===ne?(ce=6,3):(ce=7,4))}function j(C,z,K){var Z,N,J=-1,ne=z[1],te=0,ce=7,ke=4;for(ne===0&&(ce=138,ke=3),Z=0;Z<=K;Z++)if(N=ne,ne=z[2*(Z+1)+1],!(++te<ce&&N===ne)){if(te<ke)for(;Y(C,N,C.bl_tree),--te!=0;);else N!==0?(N!==J&&(Y(C,N,C.bl_tree),te--),Y(C,k,C.bl_tree),ie(C,te-3,2)):te<=10?(Y(C,_,C.bl_tree),ie(C,te-3,3)):(Y(C,S,C.bl_tree),ie(C,te-11,7));J=N,ke=(te=0)===ne?(ce=138,3):N===ne?(ce=6,3):(ce=7,4)}}l(q);var $=!1;function P(C,z,K,Z){ie(C,(c<<1)+(Z?1:0),3),(function(N,J,ne,te){pe(N),oe(N,ne),oe(N,~ne),n.arraySet(N.pending_buf,N.window,J,ne,N.pending),N.pending+=ne})(C,z,K)}o._tr_init=function(C){$||((function(){var z,K,Z,N,J,ne=new Array(p+1);for(N=Z=0;N<u-1;N++)for(U[N]=Z,z=0;z<1<<M[N];z++)T[Z++]=N;for(T[Z-1]=N,N=J=0;N<16;N++)for(q[N]=J,z=0;z<1<<A[N];z++)B[J++]=N;for(J>>=7;N<f;N++)for(q[N]=J<<7,z=0;z<1<<A[N]-7;z++)B[256+J++]=N;for(K=0;K<=p;K++)ne[K]=0;for(z=0;z<=143;)D[2*z+1]=8,z++,ne[8]++;for(;z<=255;)D[2*z+1]=9,z++,ne[9]++;for(;z<=279;)D[2*z+1]=7,z++,ne[7]++;for(;z<=287;)D[2*z+1]=8,z++,ne[8]++;for(Ae(D,m+1,ne),z=0;z<f;z++)x[2*z+1]=5,x[2*z]=be(z,5);G=new X(D,M,d+1,m,p),L=new X(x,A,0,f,p),V=new X(new Array(0),E,0,g,b)})(),$=!0),C.l_desc=new O(C.dyn_ltree,G),C.d_desc=new O(C.dyn_dtree,L),C.bl_desc=new O(C.bl_tree,V),C.bi_buf=0,C.bi_valid=0,ue(C)},o._tr_stored_block=P,o._tr_flush_block=function(C,z,K,Z){var N,J,ne=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(te){var ce,ke=4093624447;for(ce=0;ce<=31;ce++,ke>>>=1)if(1&ke&&te.dyn_ltree[2*ce]!==0)return s;if(te.dyn_ltree[18]!==0||te.dyn_ltree[20]!==0||te.dyn_ltree[26]!==0)return r;for(ce=32;ce<d;ce++)if(te.dyn_ltree[2*ce]!==0)return r;return s})(C)),Ve(C,C.l_desc),Ve(C,C.d_desc),ne=(function(te){var ce;for(w(te,te.dyn_ltree,te.l_desc.max_code),w(te,te.dyn_dtree,te.d_desc.max_code),Ve(te,te.bl_desc),ce=g-1;3<=ce&&te.bl_tree[2*R[ce]+1]===0;ce--);return te.opt_len+=3*(ce+1)+5+5+4,ce})(C),N=C.opt_len+3+7>>>3,(J=C.static_len+3+7>>>3)<=N&&(N=J)):N=J=K+5,K+4<=N&&z!==-1?P(C,z,K,Z):C.strategy===4||J===N?(ie(C,2+(Z?1:0),3),et(C,D,x)):(ie(C,4+(Z?1:0),3),(function(te,ce,ke,he){var tt;for(ie(te,ce-257,5),ie(te,ke-1,5),ie(te,he-4,4),tt=0;tt<he;tt++)ie(te,te.bl_tree[2*R[tt]+1],3);j(te,te.dyn_ltree,ce-1),j(te,te.dyn_dtree,ke-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,ne+1),et(C,C.dyn_ltree,C.dyn_dtree)),ue(C),Z&&pe(C)},o._tr_tally=function(C,z,K){return C.pending_buf[C.d_buf+2*C.last_lit]=z>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&z,C.pending_buf[C.l_buf+C.last_lit]=255&K,C.last_lit++,z===0?C.dyn_ltree[2*K]++:(C.matches++,z--,C.dyn_ltree[2*(T[K]+d+1)]++,C.dyn_dtree[2*H(z)]++),C.last_lit===C.lit_bufsize-1},o._tr_align=function(C){ie(C,2,3),Y(C,y,D),(function(z){z.bi_valid===16?(oe(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(i,a,o){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,o){(function(n){(function(s,r){if(!s.setImmediate){var l,c,u,d,m=1,f={},g=!1,h=s.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(s);p=p&&p.setTimeout?p:s,l={}.toString.call(s.process)==="[object process]"?function(k){process.nextTick(function(){b(k)})}:(function(){if(s.postMessage&&!s.importScripts){var k=!0,_=s.onmessage;return s.onmessage=function(){k=!1},s.postMessage("","*"),s.onmessage=_,k}})()?(d="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",y,!1):s.attachEvent("onmessage",y),function(k){s.postMessage(d+k,"*")}):s.MessageChannel?((u=new MessageChannel).port1.onmessage=function(k){b(k.data)},function(k){u.port2.postMessage(k)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(k){var _=h.createElement("script");_.onreadystatechange=function(){b(k),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(k){setTimeout(b,0,k)},p.setImmediate=function(k){typeof k!="function"&&(k=new Function(""+k));for(var _=new Array(arguments.length-1),S=0;S<_.length;S++)_[S]=arguments[S+1];var M={callback:k,args:_};return f[m]=M,l(m),m++},p.clearImmediate=v}function v(k){delete f[k]}function b(k){if(g)setTimeout(b,0,k);else{var _=f[k];if(_){g=!0;try{(function(S){var M=S.callback,A=S.args;switch(A.length){case 0:M();break;case 1:M(A[0]);break;case 2:M(A[0],A[1]);break;case 3:M(A[0],A[1],A[2]);break;default:M.apply(r,A)}})(_)}finally{v(k),g=!1}}}}function y(k){k.source===s&&typeof k.data=="string"&&k.data.indexOf(d)===0&&b(+k.data.slice(d.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(mn)),mn.exports}var rp=sp();const lp=np(rp);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function W(t){if(!t)throw new Error("Assertion failed.")}const cp=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},ot=t=>t&&t[t.length-1],Bt=t=>t>=0&&t<2**32,ee=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},_t=t=>{const e=ee(t);return(e&1)===0?-(e>>1):e+1>>1},Ze=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),ht=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),mt=new TextEncoder,fo={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},uo={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},ho={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},fp=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,mo=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class ir{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(o=>{let n=!1;e=()=>{n||(o(),this.pending--,n=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const ar=(t,e,i)=>{let a=0,o=t.length-1,n=-1;for(;a<=o;){const s=a+(o-a+1)/2|0;i(t[s])<=e?(n=s,a=s+1):o=s-1}return n},or=()=>{let t,e;return{promise:new Promise((a,o)=>{t=a,e=o}),resolve:t,reject:e}},Kt=t=>{throw new Error(`Unexpected value: ${t}`)},up=(t,e,i)=>{const a=t.getUint8(e),o=t.getUint8(e+1),n=t.getUint8(e+2);return a<<16|o<<8|n},pn=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},dp=(t,e,i,a)=>{i=Oe(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),pn(t,e,i,a)},Oe=(t,e,i)=>Math.max(e,Math.min(i,t)),hp=(t,e,i)=>t+(e-t)*i,mp="und",nr=(t,e)=>Math.round(t/e)*e,sr=(t,e)=>Math.round(t*e)/e,rr=(t,e)=>Math.floor(t*e)/e,pp=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},gp=/^[a-z]{3}$/,vp=t=>gp.test(t),Rt=1e6*(1+Number.EPSILON),bp=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,o=1,n=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*n+a,u=l*s+o;if(u>e)return{num:i*n,den:s};if(a=n,o=s,n=c,s=u,r=1/(r-l),!isFinite(r))break}return{num:i*n,den:s}};class lr{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let gn=null;const yp=()=>gn!==null?gn:gn=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let vn=null;const cr=()=>vn!==null?vn:vn=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let bn=null;const wp=()=>bn!==null?bn:bn=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let yn=null;const kp=()=>{if(yn!==null)return yn;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?yn=Number(t[1]):null},fr=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Tp=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},_p=(t,e)=>{let i=-1,a=1/0;for(let o=0;o<t.length;o++){const n=e(t[o]);n<a&&(a=n,i=o)}return i},ur=t=>{W(Number.isInteger(t.num)),W(Number.isInteger(t.den)),W(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const o=e%i;e=i,i=o}const a=e||1;return{num:t.num/a,den:t.den/a}},wn=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},xp=t=>new Promise(e=>setTimeout(e,t)),dr=t=>Array.isArray(t)?t:[t];class kn{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const o={fn:i,once:a?.once??!1};return this._listeners.get(e).add(o),()=>{this._listeners.get(e)?.delete(o)}}_emit(...e){const[i,a]=e,o=this._listeners.get(i);if(o)for(const n of o){try{n.fn(a)}catch(s){console.error(s)}n.once&&o.delete(n)}}}const Sp=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var pt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(pt||(pt={}));class Ce{constructor(){}static get level(){return Ce._level}static set level(e){if(e!==pt.Silent&&e!==pt.Errors&&e!==pt.Warnings&&e!==pt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");Ce._level=e}static get _emitter(){return Ce._emitterInstance??=new kn}static on(e,i,a){return Ce._emitter.on(e,i,a)}static _error(...e){Ce._emitter._emit("error",e),Ce._level>=pt.Errors&&console.error(...e)}static _warn(...e){Ce._emitter._emit("warn",e),Ce._level>=pt.Warnings&&console.warn(...e)}static _info(...e){Ce._emitter._emit("info",e),Ce._level>=pt.Info&&console.info(...e)}}Ce._level=pt.Info,Ce._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class hr{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Cp{constructor(e,i,a,o){if(this.data=e,this.mimeType=i,this.name=a,this.description=o,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(o!==void 0&&typeof o!="string")throw new TypeError("description, when provided, must be a string.")}}const Mp=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof hr)&&!(e instanceof Cp)&&!Sp(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Ep=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Be{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),o=(i&1<<a)>>a;return this.pos++,o}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let o=this.pos;o<a;o++){const n=Math.floor(o/8);let s=this.bytes[n];const r=7-(o&7);s&=~(1<<r),s|=(i&1<<a-o-1)>>a-o-1<<r,this.bytes[n]=s}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Be(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const po=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Tn=[-1,1,2,3,4,5,6,8],Pp=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Be(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let o=null;a===15?o=e.readBits(24):a<po.length&&(o=po[a]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=Tn[n]),{objectType:i,frequencyIndex:a,sampleRate:o,channelConfiguration:n,numberOfChannels:s}},mr=t=>{let e=po.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=Tn.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let o=13;t.objectType>=32&&(o+=6),e===15&&(o+=24);const n=Math.ceil(o/8),s=new Uint8Array(n),r=new Be(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const xt=["avc","hevc","vp9","av1","vp8","prores"],nt=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],_n=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Xt=[..._n,...nt],Zi=["webvtt"],go=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],pr=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],gr=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],vr=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Qi=["ap4x","ap4h","apch","apcn","apcs","apco"],xn=["dtsc","dtsh","dtsl","dtse"],Ap=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Fp=(t,e,i,a,o)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=go.find(m=>s<=m.maxMacroblocks&&a<=m.maxBitrate)??ot(go),l=r?r.level:0,c="64".padStart(2,"0"),u="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${u}${d}`}else if(t==="hevc"){const l=e*i,c=pr.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??ot(pr);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(gr.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??ot(gr)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=vr.find(u=>s<=u.maxPictureSize&&a<=u.maxBitrate)??ot(vr);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=Ap.filter(u=>u.alpha===o);let l=r[0].fourCc,c=1/0;for(const{fourCc:u,bitrate:d}of r){const m=Math.abs(d*s-a);m<c&&(c=m,l=u)}return l}else Kt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Ip=t=>{const e=t.split("."),o=(1<<7)+1,n=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(n<<5)+r,c=s.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,m=0,f=e[4]?Number(e[4]):0,g=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,p=e[5]?Number(e[5][2]):0,v=(c<<7)+(d<<6)+(m<<5)+(f<<4)+(g<<3)+(h<<2)+p;return[o,l,v,0]},Bp=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(nt.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},br=/^pcm-([usf])(\d+)(be)?$/,Zt=t=>{if(W(nt.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=br.exec(t);W(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,o=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:o,silentValue:n}},vo=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Qi.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":xn.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":br.test(t)?t:t==="webvtt"?"webvtt":null,Rp=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},zp=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},Op=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Qi],Hp=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Lp=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Np=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Up=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,yr=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Op.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!mo(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(fo);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const o=Object.keys(uo);if(i.transfer!=null&&!o.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${o.join(", ")}.`);const n=Object.keys(ho);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Hp.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Lp.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Np.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Up.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Qi.some(i=>t.decoderConfig.codec.startsWith(i))&&!Qi.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Qi.join(", ")}.`);if(e!==null&&vo(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},qp=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],wr=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!qp.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!mo(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!xn.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${xn.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!nt.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${nt.join(", ")}).`);if(e!==null&&vo(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Dp=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $p=[48e3,44100,32e3],Wp=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var St;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(St||(St={}));var Qe;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Qe||(Qe={}));const Yi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let o=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?o=4:t[e+1]===0&&t[e+2]===1&&(o=3),o===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+o,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},kr=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let o;e===1?o=a.getUint8(i):e===2?o=a.getUint16(i,!1):e===3?o=up(a,i):(W(e===4),o=a.getUint32(i,!1)),i+=e,yield{offset:i,length:o},i+=o}},jp=(t,e)=>{if(e.description){const o=(Ze(e.description)[4]&3)+1;return kr(t,o)}else return Yi(t)},Tr=t=>t&31,bo=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Vp=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),a=new Uint8Array(i);let o=0;for(const n of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(o,n.byteLength);break;case 2:s.setUint16(o,n.byteLength,!1);break;case 3:pn(s,o,n.byteLength,!1);break;case 4:s.setUint32(o,n.byteLength,!1);break}o+=e,a.set(n,o),o+=n.byteLength}return a},Gp=t=>{try{const e=[],i=[],a=[];for(const r of Yi(t)){const l=t.subarray(r.offset,r.offset+r.length),c=Tr(l[0]);c===St.SPS?e.push(l):c===St.PPS?i.push(l):c===St.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const o=e[0],n=Xp(o);W(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return Ce._error("Error building AVC Decoder Configuration Record:",e),null}},Kp=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){W(t.chromaFormat!==null),W(t.bitDepthLumaMinus8!==null),W(t.bitDepthChromaMinus8!==null),W(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}}return new Uint8Array(e)},_r={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Xp=t=>{try{const e=new Be(bo(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),o=e.readAlignedByte(),n=e.readAlignedByte();ee(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=ee(e),s===3&&(c=e.readBits(1)),r=ee(e),l=ee(e),e.skipBits(1),e.readBits(1))){for(let x=0;x<(s!==3?8:12);x++)if(e.readBits(1)){const T=x<6?16:64;let U=8,G=8;for(let L=0;L<T;L++){if(G!==0){const V=_t(e);G=(U+V+256)%256}U=G===0?U:G}}}ee(e);const u=ee(e);if(u===0)ee(e);else if(u===1){e.skipBits(1),_t(e),_t(e);const D=ee(e);for(let x=0;x<D;x++)_t(e)}ee(e),e.skipBits(1);const d=ee(e),m=ee(e),f=16*(d+1),g=16*(m+1);let h=f,p=g;const v=e.readBits(1);if(v||e.skipBits(1),e.skipBits(1),e.readBits(1)){const D=ee(e),x=ee(e),B=ee(e),T=ee(e);let U,G;if((c===0?s:0)===0)U=1,G=2-v;else{const V=s===3?1:2,q=s===1?2:1;U=V,G=q*(2-v)}h-=U*(D+x),p-=G*(B+T)}let y=2,k=2,_=2,S=0,M={num:1,den:1},A=null,E=null;if(e.readBits(1)){if(e.readBits(1)){const q=e.readBits(8);if(q===255)M={num:e.readBits(16),den:e.readBits(16)};else{const X=_r[q];X&&(M=X)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),S=e.readBits(1),e.readBits(1)&&(y=e.readBits(8),k=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(ee(e),ee(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const G=e.readBits(1);G&&xr(e);const L=e.readBits(1);L&&xr(e),(G||L)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),ee(e),ee(e),ee(e),ee(e),A=ee(e),E=ee(e))}if(A===null){W(E===null);const D=o&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&D)A=0,E=0;else{const x=d+1,B=m+1,T=(2-v)*B,U=go.find(L=>L.level>=n)??ot(go),G=Math.min(Math.floor(U.maxDpbMbs/(x*T)),16);A=G,E=G}}return W(E!==null),{profileIdc:a,constraintFlags:o,levelIdc:n,frameMbsOnlyFlag:v,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:f,codedHeight:g,displayWidth:h,displayHeight:p,pixelAspectRatio:M,colourPrimaries:y,matrixCoefficients:_,transferCharacteristics:k,fullRangeFlag:S,numReorderFrames:A,maxDecFrameBuffering:E}}catch(e){return Ce._error("Error parsing AVC SPS:",e),null}},xr=t=>{const e=ee(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)ee(t),ee(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Zp=(t,e)=>{if(e.description){const o=(Ze(e.description)[21]&3)+1;return kr(t,o)}else return Yi(t)},Sn=t=>t>>1&63,Qp=t=>{try{const e=new Be(bo(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:o,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=Jp(e,i);ee(e);const u=ee(e);let d=0;u===3&&(d=e.readBits(1));const m=ee(e),f=ee(e);let g=m,h=f;if(e.readBits(1)){const x=ee(e),B=ee(e),T=ee(e),U=ee(e);let G=1,L=1;const V=d===0?u:0;V===1?(G=2,L=2):V===2&&(G=2,L=1),g-=(x+B)*G,h-=(T+U)*L}const p=ee(e),v=ee(e);ee(e);const y=e.readBits(1)?0:i;let k=0;for(let x=y;x<=i;x++)ee(e),k=ee(e),ee(e);ee(e),ee(e),ee(e),ee(e),ee(e),ee(e),e.readBits(1)&&e.readBits(1)&&e2(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),ee(e),ee(e),e.skipBits(1));const _=ee(e);if(t2(e,_),e.readBits(1)){const x=ee(e);for(let B=0;B<x;B++)ee(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let S=2,M=2,A=2,E=0,R=0,D={num:1,den:1};if(e.readBits(1)){const x=a2(e,i);D=x.pixelAspectRatio,S=x.colourPrimaries,M=x.transferCharacteristics,A=x.matrixCoefficients,E=x.fullRangeFlag,R=x.minSpatialSegmentationIdc}return{displayWidth:g,displayHeight:h,pixelAspectRatio:D,colourPrimaries:S,transferCharacteristics:M,matrixCoefficients:A,fullRangeFlag:E,maxDecFrameBuffering:k+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:o,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:u,bitDepthLumaMinus8:p,bitDepthChromaMinus8:v,minSpatialSegmentationIdc:R}}catch(e){return Ce._error("Error parsing HEVC SPS:",e),null}},Yp=t=>{try{const e=[],i=[],a=[],o=[];for(const c of Yi(t)){const u=t.subarray(c.offset,c.offset+c.length),d=Sn(u[0]);d===Qe.VPS_NUT?e.push(u):d===Qe.SPS_NUT?i.push(u):d===Qe.PPS_NUT?a.push(u):(d===Qe.PREFIX_SEI_NUT||d===Qe.SUFFIX_SEI_NUT)&&o.push(u)}if(i.length===0||a.length===0)return null;const n=Qp(i[0]);if(!n)return null;let s=0;if(a.length>0){const c=a[0],u=new Be(bo(c));u.skipBits(16),ee(u),ee(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),ee(u),ee(u),_t(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&ee(u),_t(u),_t(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);const d=u.readBits(1),m=u.readBits(1);!d&&!m?s=0:d&&!m?s=2:!d&&m?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:Qe.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Qe.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Qe.PPS_NUT,nalUnits:a}]:[],...o.length?[{arrayCompleteness:1,nalUnitType:Sn(o[0][0]),nalUnits:o}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return Ce._error("Error building HEVC Decoder Configuration Record:",e),null}},Jp=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),o=t.readBits(5);let n=0;for(let u=0;u<32;u++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let u=0;u<6;u++)s[u]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let u=0;u<e;u++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let u=e;u<8;u++)t.skipBits(2);for(let u=0;u<e;u++)l[u]&&t.skipBits(88),c[u]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:o,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:r}},e2=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))ee(t);else{const o=Math.min(64,1<<4+(e<<1));e>1&&_t(t);for(let n=0;n<o;n++)_t(t)}},t2=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=i2(t,a,e,i)},i2=(t,e,i,a)=>{let o=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const l=ee(t);s=e-(l+1)}else s=e-1;t.readBits(1),ee(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);o=a[s]}else{const r=ee(t),l=ee(t);for(let c=0;c<r;c++)ee(t),t.readBits(1);for(let c=0;c<l;c++)ee(t),t.readBits(1);o=r+l}return o},a2=(t,e)=>{let i=2,a=2,o=2,n=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=_r[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),o=t.readBits(8))),t.readBits(1)&&(ee(t),ee(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(ee(t),ee(t),ee(t),ee(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&ee(t),t.readBits(1)&&o2(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=ee(t),ee(t),ee(t),ee(t),ee(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:o,fullRangeFlag:n,minSpatialSegmentationIdc:s}},o2=(t,e,i)=>{let a=!1,o=!1,n=!1;a=t.readBits(1)===1,o=t.readBits(1)===1,(a||o)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?ee(t):c=t.readBits(1)===1;let u=1;c||(u=ee(t)+1),a&&Sr(t,u,n),o&&Sr(t,u,n)}},Sr=(t,e,i)=>{for(let a=0;a<e;a++)ee(t),ee(t),i&&(ee(t),ee(t)),t.readBits(1)},n2=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let o=0;o<a.length;o++)e.push(a[o])}}return new Uint8Array(e)};var Cr;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Cr||(Cr={}));const s2=function*(t){const e=new Be(t),i=()=>{let a=0;for(let o=0;o<8;o++){const n=e.readAlignedByte();if(a|=(n&127)<<o*7,!(n&128))break;if(o===7&&n&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),o=e.readBits(1),n=e.readBits(1);e.skipBits(1),o&&e.skipBits(8);let s;if(n){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);W(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},r2=t=>{const e=ht(t),i=e.getUint8(9),a=e.getUint16(10,!0),o=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:o,outputGain:n,channelMappingFamily:s,channelMappingTable:r}},l2=(t,e,i)=>{switch(t){case"avc":{for(const a of jp(i,e)){const o=i[a.offset],n=Tr(o);if(n>=St.NON_IDR_SLICE&&n<=St.SLICE_DPC)return"delta";if(n===St.IDR)return"key";if(n===St.SEI&&(!wp()||kp()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=bo(s);let l=1;do{let c=0;for(;;){const m=r[l++];if(m===void 0||(c+=m,m<255))break}let u=0;for(;;){const m=r[l++];if(m===void 0||(u+=m,m<255))break}if(c===6){const m=new Be(r);m.pos=8*l;const f=ee(m),g=m.readBits(1);if(f===0&&g===1)return"key"}l+=u}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of Zp(i,e)){const o=Sn(i[a.offset]);if(o<Qe.BLA_W_LP)return"delta";if(o<=Qe.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Be(i);if(a.readBits(2)!==2)return null;const o=a.readBits(1);return(a.readBits(1)<<1)+o===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:o,data:n}of s2(i))if(o===1){const s=new Be(n);s.skipBits(4),a=!!s.readBits(1)}else if(o===3||o===6||o===7){if(a)return"key";const s=new Be(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Kt(t),W(!1)}};var Mr;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Mr||(Mr={}));const c2=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Be(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),o=e.readBits(5);if(o>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:o,bsmod:n,acmod:s,lfeon:r,bitRateCode:l}},f2=[1,2,3,6],u2=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Be(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),o=e.readBits(2);let n=0,s;o===3?(n=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const u=f2[s];let d;return o<3?d=$p[o]/1e3:d=Wp[n]/1e3,{dataRate:Math.round((a+1)*d/(u*16)),substreams:[{fscod:o,fscod2:n,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},d2=1683496997,h2=18,m2=10,Er=32,p2=20,g2=8,v2=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],b2=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],y2=[16,16,20,20,0,24,24,0],Pr=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],w2=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],k2=8,T2=[32e3,44100,48e3,0],_2=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],x2=[512,1024,2048,4096],S2=t=>{const e=C2(t),i=ht(t);let a=e?Math.ceil(e.frameSize/4)*4:0,o=null;for(;a+4<=t.length&&i.getUint32(a)===d2;){const s=M2(t.subarray(a));if(!s)break;o??=s,a+=s.frameSize}if(e)return{frameSize:o?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:o!==null};if(!o?.asset)return null;const{asset:n}=o;return{frameSize:a,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},C2=t=>{if(t.length<h2||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Be(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Er-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%g2!==0)return null;const o=e.readBits(14)+1;if(o<96)return null;const n=e.readBits(6);if(n>=Pr.length)return null;const s=v2[e.readBits(4)];if(s===0)return null;const r=b2[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=y2[e.readBits(3)];if(c===0)return null;const u=l!==0;return{frameSize:o,sampleRate:s,numberOfChannels:Pr[n]+(u?1:0),sampleCount:a*Er,channelLayout:w2[n]|(u?k2:0),amode:n,lfePresent:u,bitRate:r,pcmResolution:c}},M2=t=>{if(t.length<m2||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Be(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),o=8+4*a,n=16+4*a;e.skipBits(o);const s=e.readBits(n)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=T2[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const u=e.readBits(3)+1,d=e.readBits(3)+1,m=[];for(let v=0;v<u;v++)m.push(e.readBits(i+1));for(const v of m)e.skipBits(8*pp(v));if(e.readBits(1)){e.skipBits(2);const v=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*v)}for(let v=0;v<d;v++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,g=_2[e.readBits(4)],h=e.readBits(8)+1;let p=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const v=e.readBits(2)+1<<2;p=e.readBits(v)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:g,numberOfChannels:h,sampleCount:Math.round(c*g/l),channelLayout:p,pcmResolution:f}}},E2=t=>{const e=new Uint8Array(p2),i=ht(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,o=new Be(e);return o.seekToByte(13),o.writeBits(2,Math.max(x2.indexOf(t.sampleCount),0)),o.writeBits(5,a),o.writeBits(1,t.core?.lfePresent?1:0),o.writeBits(6,t.core?.amode??0),o.writeBits(14,t.core?t.core.frameSize-1:0),o.writeBits(1,0),o.writeBits(3,0),o.writeBits(16,t.channelLayout),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ar=new Uint8Array(0);class gt{constructor(e,i,a,o,n=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=o,this.sequenceNumber=n,e===Ar&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(o)||o<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Ar}get microsecondTimestamp(){return Math.trunc(Rt*this.timestamp)}get microsecondDuration(){return Math.trunc(Rt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new gt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new gt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const P2=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Cn=8,Fr=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const A2=7,F2=9,Ir=t=>{const e=t.filePos,i=tg(t,9),a=new Be(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const u=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let m=null;return s===1?t.filePos-=2:m=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:u,numberOfAacFrames:d,crcCheck:m,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var I2=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},B2=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});Tp();let Br=-1/0,Rr=-1/0,Ji=null;typeof FinalizationRegistry<"u"&&(Ji=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Br>=1e3&&(Ce._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Br=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Rr>=1e3&&(Ce._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Rr=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Qt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Mn=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],R2=new Set(Mn);class Ue{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Rt*this.timestamp)}get microsecondDuration(){return Math.trunc(Rt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!R2.has(i.format))throw new TypeError("init.format must be one of: "+Mn.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&wn(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??H2(i.format,i.codedWidth,i.codedHeight);let o=i.colorSpace??null;o===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?o={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:o={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?Ze(e):Ze(e).slice(),this._layout=a,this.colorSpace=new En(o)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&wn(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new En(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&wn(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Ue(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Rt),duration:Math.trunc((i.duration??0)*Rt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,o=0;if("naturalWidth"in e?(a=e.naturalWidth,o=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,o=e.videoHeight):"width"in e&&(a=Number(e.width),o=Number(e.height)),!a||!o)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:a,height:o},s=new OffscreenCanvas(n.width,n.height),r=s.getContext("2d",{alpha:cr(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new En({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Qt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Mn.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=ur({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Ji?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return W(this._data!==null),this._data instanceof Qt?new Ue(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):ta(this._data)?new Ue(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(W(this._layout),new Ue(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Ue(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Ji?.unregister(this),this._data instanceof Qt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):ta(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Lr(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return ta(this._data)?this._data.allocationSize(e):Nr(this,e).allocationSize}async copyTo(e,i={}){if(!mo(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Lr(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(W(this._data!==null),ta(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Qt){const c={stack:[],error:void 0,hasError:!1};try{const u=I2(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(u instanceof Ue))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(u.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${u.format}' instead.`);return await u.copyTo(e,i)}catch(u){c.error=u,c.hasError=!0}finally{B2(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),u=await c.copyTo(e,i);return c.close(),u}const a=Nr(this,i);W(this.format);const o=Ze(e);if(o.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${o.byteLength}`);const n=yo(this.format);let s;if(this._data instanceof Qt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(u=>!(u.data instanceof Uint8Array)||!Number.isInteger(u.stride)||u.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)W(this._layout),W(this._layout.length===n.length),s=this._layout.map((c,u)=>{const d=Math.ceil(this.codedHeight/n[u].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const u=this._data.getContext("2d");W(u);const d=u.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:Ze(d.data),stride:4*this.codedWidth}]}const r=[],l=n.length;for(let c=0;c<l;c++){const u=a.computedLayouts[c],d=s[c].stride,m=s[c].data;let f=u.sourceTop*d;f+=u.sourceLeftBytes;let g=u.destinationOffset;const h=u.sourceWidthBytes,p={offset:g,stride:u.destinationStride};for(let v=0;v<u.sourceHeight;v++){if(f+h>m.byteLength)throw new Error("Source buffer OOB read.");if(g+h>o.byteLength)throw new Error("Destination buffer OOB write.");const b=m.subarray(f,f+h);o.set(b,g),f+=d,g+=u.destinationStride}r.push(p)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),u=this.format.includes("X")&&i.format.includes("A");if(c||u)for(let d=0;d<a.allocationSize;d+=4){if(c){const m=o[d],f=o[d+2];o[d]=f,o[d+2]=m}u&&(o[d+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(W(this._data!==null),this._data instanceof Qt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let o=0;const n=[];for(const s of e)a.set(s.data,o),n.push(o),o+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:n[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return ta(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(W(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,o,n,s,r,l,c){let u=0,d=0,m=this.displayWidth,f=this.displayHeight,g=0,h=0,p=this.displayWidth,v=this.displayHeight;if(s!==void 0?(u=i,d=a,m=o,f=n,g=s,h=r,l!==void 0?(p=l,v=c):(p=m,v=f)):(g=i,h=a,o!==void 0&&(p=o,v=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(u))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(m)||m<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(g))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(p)||p<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:u,sy:d,sWidth:m,sHeight:f}=this._rotateSourceRegion(u,d,m,f,this.rotation));const b=this.toCanvasImageSource();e.save();const y=g+p/2,k=h+v/2;e.translate(y,k),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:p/v;e.scale(1/_,_),e.drawImage(b,u,d,m,f,-p/2,-v/2,p,v),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Pn(i.crop,"options.");const a=e.canvas.width,o=e.canvas.height,n=i.rotation??this.rotation,[s,r]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=Hr(l,s,r));let c,u,d,m;const{sx:f,sy:g,sWidth:h,sHeight:p}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,n);if(i.fit==="fill")c=0,u=0,d=a,m=o;else{const[b,y]=i.crop?[i.crop.width,i.crop.height]:[s,r],k=i.fit==="contain"?Math.min(a/b,o/y):Math.max(a/b,o/y);d=b*k,m=y*k,c=(a-d)/2,u=(o-m)/2}e.save();const v=n%180===0?1:d/m;e.translate(a/2,o/2),e.rotate(n*Math.PI/180),e.scale(1/v,v),e.translate(-a/2,-o/2),e.drawImage(this.toCanvasImageSource(),f,g,h,p,c,u,d,m),e.restore()}_rotateSourceRegion(e,i,a,o,n){return n===90?[e,i,a,o]=[i,this.squarePixelHeight-e-a,o,a]:n===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-o]:n===270&&([e,i,a,o]=[this.squarePixelWidth-i-o,e,o,a]),{sx:e,sy:i,sWidth:a,sHeight:o}}_drawWithFitAndMipmapping(e,i,a){const o=e.width,n=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let u=0;2*o<l&&2*n<c&&(u=Math.floor(Math.log2(Math.min(l/o,c/n))));const d=o*2**u,m=n*2**u,{canvas:f,context:g,isNew:h}=u>0?Or(d,m):{canvas:e,context:i,isNew:a.targetIsFresh};g.imageSmoothingQuality="high",a.fillBlack?(g.fillStyle="black",g.fillRect(0,0,d,m)):h||g.clearRect(0,0,d,m),this.drawWithFit(g,{fit:a.fit,rotation:a.rotation,crop:a.crop}),g.globalCompositeOperation="copy";for(let p=u;p>1;p--){const v=o*2**p,b=n*2**p;g.drawImage(f,0,0,v,b,0,0,v/2,b/2)}g.globalCompositeOperation="source-over",u>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*o,2*n,0,0,o,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(W(this._data!==null),this._data instanceof Qt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Pn(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=cp(this.rotation+(e.rotate??0)),[a,o]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=Hr(n,a,o));const s=n?n.width:a,r=n?n.height:o,l=s/r;let c,u;e.width!==void 0&&e.height===void 0?(c=e.width,u=c/l):e.width===void 0&&e.height!==void 0?(u=e.height,c=u*l):e.width!==void 0&&e.height!==void 0?(c=e.width,u=e.height):(c=s,u=r),c=nr(c,e.roundDimensionsTo??1),u=nr(u,e.roundDimensionsTo??1);const d={width:c,height:u,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:a,height:o},alpha:e.alpha??"keep"};for(const h of z2){let p=h(this,d);if(p instanceof Promise&&(p=await p),p!==null)return p}const{canvas:m,context:f,isNew:g}=Or(d.width,d.height);return this._drawWithFitAndMipmapping(m,f,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:g,fillBlack:d.alpha==="discard"}),new Ue(m,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const z2=[],O2=3,ea=[];let zr=0;const Or=(t,e)=>{for(const o of ea)if(o.canvas.width===t&&o.canvas.height===e)return o.age=zr++,{canvas:o.canvas,context:o.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return ea.length>=O2&&ea.splice(_p(ea,o=>o.age),1),ea.push({canvas:i,context:a,age:zr++}),{canvas:i,context:a,isNew:!0}};class En{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(fo);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(uo);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const o=Object.keys(ho);if(e.matrix!=null&&!o.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${o.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const ta=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Hr=(t,e,i)=>{const a=Math.min(t.left,e),o=Math.min(t.top,i),n=Math.min(t.width,e-a),s=Math.min(t.height,i-o);return W(n>=0),W(s>=0),{left:a,top:o,width:n,height:s}},Pn=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Lr=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},H2=(t,e,i)=>{const a=yo(t),o=[];let n=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,u=c*l;o.push({offset:n,stride:c}),n+=u}return o},yo=t=>{const e=(i,a,o,n,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:o,heightDivisor:n},{sampleBytes:a,widthDivisor:o,heightDivisor:n}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Kt(t),W(!1)}},Nr=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,o=L2(i,a,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return U2(o,s,n)},L2=(t,e,i,a,o)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!N2(o,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},N2=(t,e)=>{if(t===null)return!0;const i=yo(t);for(let a=0;a<i.length;a++){const o=i[a],n=o.widthDivisor,s=o.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},U2=(t,e,i)=>{const a=yo(e),o=a.length;if(i!==void 0&&i.length!==o)throw new TypeError(`Layout must have ${o} planes.`);let n=0;const s=[],r=[];for(let l=0;l<o;l++){const c=a[l],u=c.sampleBytes,d=c.widthDivisor,m=c.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/m),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/m),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*u,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*u,i!==void 0){const p=i[l];if(p.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);f.destinationOffset=p.offset,f.destinationStride=p.stride}else f.destinationOffset=n,f.destinationStride=f.sourceWidthBytes;const h=f.destinationStride*f.sourceHeight+f.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(h),n=Math.max(n,h);for(let p=0;p<l;p++){const v=s[p];if(!(r[l]<=v.destinationOffset||r[p]<=f.destinationOffset))throw new TypeError("Planes overlap.")}s.push(f)}return{allocationSize:n,computedLayouts:s}},wo=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class ia{constructor(){this._referenceCount=0}}class We{get microsecondTimestamp(){return Math.trunc(Rt*this.timestamp)}get microsecondDuration(){return Math.trunc(Rt*this.duration)}constructor(e){if(this._closed=!1,aa(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof ia){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!wo.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!wo.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(zt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const o=this.numberOfFrames*this.numberOfChannels*zt(this.format);if(a.byteLength<o)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}Ji?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!wo.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const o=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(o>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const n=zt(i),s=Yt(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?o:o*this.numberOfChannels)*n}copyTo(e,i){if(!mo(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!wo.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:o,frameOffset:n}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,u=this.numberOfChannels,d=n??0;if(d>=c)throw new RangeError("frameOffset out of range");const m=o!==void 0?o:c-d;if(m>c-d)throw new RangeError("frameCount out of range");const f=zt(l),g=Yt(l);if(g&&s>=u)throw new RangeError("planeIndex out of range");if(!g&&s!==0)throw new RangeError("planeIndex out of range");const p=(g?m:m*u)*f;if(e.byteLength<p)throw new RangeError("Destination buffer is too small");const v=ht(e),b=qr(l);if(aa(this._data))yp()&&u>2&&l!==r?D2(this._data,v,r,l,u,s,d,m):this._data.copyTo(e,{planeIndex:s,frameOffset:d,frameCount:m,format:l});else{const y=Ur(r),k=zt(r),_=Yt(r);let S;if(this._data instanceof ia){const A=E=>{const R=this._data.getDataPlane(E);if(!(R instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const D=c*k*(_?1:u);if(R.byteLength!==D)throw new TypeError(`Data plane ${E} has invalid size. Expected exactly ${D} bytes, got ${R.byteLength} bytes.`);return R};if(_)if(g)S=A(s),s=0;else{S=new Uint8Array(c*k*u);for(let E=0;E<u;E++){const R=A(E);S.set(R,E*c*k)}}else S=A(0)}else S=this._data;const M=ht(S);for(let A=0;A<m;A++)if(g){const E=A*f;let R;_?R=(s*c+(A+d))*k:R=((A+d)*u+s)*k;const D=y(M,R);b(v,E,D)}else for(let E=0;E<u;E++){const D=(A*u+E)*f;let x;_?x=(E*c+(A+d))*k:x=((A+d)*u+E)*k;const B=y(M,x);b(v,D,B)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof ia){const e=new We(this._data);return e.setTimestamp(this.timestamp),e}else if(aa(this._data)){const e=new We(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new We({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,o=zt(this.format);let n;if(Yt(this.format)){const s=a*o;if(n=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else n=new Uint8Array(a*this.numberOfChannels*o),a>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new We({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Ji?.unregister(this),this._data instanceof ia?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):aa(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof ia?this._createAudioDataFromData():aa(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Yt(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;for(;c>0;){const u=Math.min(r,c),d=new Float32Array(o*u);for(let m=0;m<o;m++)e.copyFromChannel(d.subarray(m*u,(m+1)*u),m,l);yield new We({format:"f32-planar",sampleRate:n,numberOfFrames:u,numberOfChannels:o,timestamp:i+l/n,data:d}),l+=u,c-=u}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;const u=[];for(;c>0;){const d=Math.min(r,c),m=new Float32Array(o*d);for(let g=0;g<o;g++)e.copyFromChannel(m.subarray(g*d,(g+1)*d),g,l);const f=new We({format:"f32-planar",sampleRate:n,numberOfFrames:d,numberOfChannels:o,timestamp:i+l/n,data:m});u.push(f),l+=d,c-=d}return u}}const zt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Yt=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Ur=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},qr=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Oe((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Oe(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Oe(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},aa=t=>typeof AudioData<"u"&&t instanceof AudioData,q2=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},D2=(t,e,i,a,o,n,s,r)=>{const l=Ur(i),c=qr(a),u=zt(i),d=zt(a),m=Yt(i);if(Yt(a))if(m){const g=new ArrayBuffer(r*u),h=ht(g);t.copyTo(g,{planeIndex:n,frameOffset:s,frameCount:r,format:i});for(let p=0;p<r;p++){const v=p*u,b=p*d,y=l(h,v);c(e,b,y)}}else{const g=new ArrayBuffer(r*o*u),h=ht(g);t.copyTo(g,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let p=0;p<r;p++){const v=(p*o+n)*u,b=p*d,y=l(h,v);c(e,b,y)}}else if(m){const g=r*u,h=new ArrayBuffer(g),p=ht(h);for(let v=0;v<o;v++){t.copyTo(h,{planeIndex:v,frameOffset:s,frameCount:r,format:i});for(let b=0;b<r;b++){const y=b*u,k=(b*o+v)*d,_=l(p,y);c(e,k,_)}}}else{const g=new ArrayBuffer(r*o*u),h=ht(g);t.copyTo(g,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let p=0;p<r;p++)for(let v=0;v<o;v++){const b=p*o+v,y=b*u,k=b*d,_=l(h,y);c(e,k,_)}}},$2=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new We({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Dr=new Map,$r=new Map,W2=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!xt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${xt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof qe))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof qe)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Pn(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Wr(t.codec,t)},Wr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&vo(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},jr=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(n,s,r)=>({codec:t.fullCodecString??Fp(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Rp(t.codec)}),o=[];return i.quantizer!==null&&o.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&o.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),W(o.length>0),o},j2=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Xt.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Xt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(nt.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof qe))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof qe)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Vr(t.codec,t)},Vr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&vo(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},Gr=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Bp(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...zp(t.codec)}};class qe{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in Kr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?Kr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,o){const n=V2[e];let s=null,r=this._bitrateMode??o??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(W(this._quality!==void 0),s=Oe(Math.round(hp(n.worst,n.best,this._quality)),n.min,n.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&(W(s!==null&&n),c=Oe((s-n.worst)/(n.best-n.worst),0,1)),l=Xr(e,i,a,An(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(W(this._quality!==void 0),Xr(e,i,a,An(this._quality)))}_toAudioBitrate(e){if(nt.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=An(this._quality),o={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!o)throw new Error(`Unhandled codec: ${e}`);let n=o*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r)),Math.round(n/1e3)*1e3}}const Kr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},V2={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},An=t=>.3*Math.exp(2.5538*t),Xr=(t,e,i,a)=>{const o=e*i,n=1920*1080,s=3e6,r=Math.pow(o/n,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},Zr=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};W(!1)},G2=new qe("high"),K2=async(t,e={})=>{const{width:i=1280,height:a=720,quality:o,bitrate:n,...s}=e;if(!xt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(o!==void 0&&!(o instanceof qe))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof qe)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");Wr(t,s);const r=ko(o,n)??new qe("medium");let l;try{l=jr({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),u=Dr.get(c);if(u)return u;const d=(async()=>{for(const{config:f}of l)if(Qr.some(g=>g.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:g}of l){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!cr()||await new Promise(async p=>{try{const v=new VideoEncoder({output:()=>{},error:()=>p(!1)});v.configure(f);const b=new Uint8Array(i*a*4),y=new VideoFrame(b,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});v.encode(y,g!==null?Zr(t,g):void 0),y.close(),await v.flush(),p(!0)}catch{p(!1)}}))return!0}return!1})();return Dr.set(c,d),d},X2=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:o,bitrate:n,...s}=e;if(!Xt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(o!==void 0&&!(o instanceof qe))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof qe)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");Vr(t,s);const r=ko(o,n)??new qe("medium"),l=Gr({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),u=$r.get(c);if(u)return u;const d=(async()=>{if(Yr.some(m=>m.supports(t,l))||nt.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return $r.set(c,d),d},ko=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof qe?e:new qe({bitrate:e})},Z2=async(t,e)=>{for(const i of t)if(await K2(i,e))return i;return null},Q2=async(t,e)=>{for(const i of t)if(await X2(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Qr=[],Yr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Y2=t=>{let a=t,o=4096,n=0,s=12,r=0;for(a<0&&(a=-a,n=128),a+=33,a>8191&&(a=8191);(a&o)!==o&&s>=5;)o>>=1,s--;return r=a>>s-4&15,~(n|s-5<<4|r)&255},J2=t=>{let i=2048,a=0,o=11,n=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&o>=5;)i>>=1,o--;return n=s>>(o===4?1:o-4)&15,(a|o-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class oa{constructor(e,i,a,o,n){this.bytes=e,this.view=i,this.offset=a,this.start=o,this.end=n,this.bufferPos=o-a}static tempFromBytes(e){return new oa(e,ht(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new oa(this.bytes,this.view,this.offset,e,e+i)}}const eg=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},tg=(t,e)=>{eg(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ig{constructor(e){this.mutex=new ir,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let o=this.trackTimestampInfo.get(e);if(o){if(a&&(o.maxTimestampBeforeLastKeyPacket=o.maxTimestamp),o.maxTimestampBeforeLastKeyPacket!==null&&i<o.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${o.maxTimestampBeforeLastKeyPacket}s.`);o.maxTimestamp=Math.max(o.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");o={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,o)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Jr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,ag=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),o=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+o.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class To{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const a=this.writer.getPos(),o=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,o),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);W(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const fe=new Uint8Array(8),Ye=new DataView(fe.buffer),Me=t=>[(t%256+256)%256],le=t=>(Ye.setUint16(0,t,!1),[fe[0],fe[1]]),Fn=t=>(Ye.setInt16(0,t,!1),[fe[0],fe[1]]),el=t=>(Ye.setUint32(0,t,!1),[fe[1],fe[2],fe[3]]),Q=t=>(Ye.setUint32(0,t,!1),[fe[0],fe[1],fe[2],fe[3]]),Ct=t=>(Ye.setInt32(0,t,!1),[fe[0],fe[1],fe[2],fe[3]]),vt=t=>(Ye.setUint32(0,Math.floor(t/2**32),!1),Ye.setUint32(4,t,!1),[fe[0],fe[1],fe[2],fe[3],fe[4],fe[5],fe[6],fe[7]]),og=t=>(Ye.setInt32(0,Math.floor(t/2**32),!1),Ye.setUint32(4,t,!1),[fe[0],fe[1],fe[2],fe[3],fe[4],fe[5],fe[6],fe[7]]),tl=t=>(Ye.setInt16(0,2**8*t,!1),[fe[0],fe[1]]),st=t=>(Ye.setInt32(0,2**16*t,!1),[fe[0],fe[1],fe[2],fe[3]]),In=t=>(Ye.setInt32(0,2**30*t,!1),[fe[0],fe[1],fe[2],fe[3]]),Bn=(t,e)=>{const i=[];let a=t;do{let o=a&127;a>>=7,i.length>0&&(o|=128),i.push(o)}while(a>0||e);return i.reverse()},ve=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,o)=>t.charCodeAt(o));return e&&i.push(0),i},il=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},al=il(0),ol=t=>[st(t[0]),st(t[1]),In(t[2]),st(t[3]),st(t[4]),In(t[5]),st(t[6]),st(t[7]),In(t[8])],re=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),de=(t,e,i,a,o)=>re(t,[Me(e),el(i),a??[]],o),ng=t=>t.isQuickTime?re("ftyp",[ve("qt  "),Q(512),ve("qt  ")]):t.fragmented?t.cmaf?re("ftyp",[ve("iso5"),Q(512),ve("iso5"),ve("iso6"),ve("mp41"),ve("cmfc"),ve("dash")]):re("ftyp",[ve("iso5"),Q(512),ve("iso5"),ve("iso6"),ve("mp41")]):re("ftyp",[ve("isom"),Q(512),ve("isom"),t.holdsAvc?ve("avc1"):[],ve("mp41")]),nl=()=>re("styp",[ve("iso5"),Q(0),ve("iso5"),ve("iso6"),ve("mp41"),ve("cmfc"),ve("dash")]),sl=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),de("sidx",1,0,[Q(1),Q(lt),vt(Se(t.minWrittenTimestamp,lt)),vt(0),le(0),le(1),Q(e&2147483647),Q(Se(i,lt)),Q(0)])},_o=t=>({type:"mdat",largeSize:t}),sg=t=>({type:"free",size:t}),na=t=>re("moov",void 0,[rg(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>lg(e,t.creationTime)),t.isFragmented?jg(t.trackDatas):null,o1(t)]),rg=(t,e)=>{const i=Math.max(0,...e.map(s=>Se(xo(s),lt)+Se(s.startTimestampOffset??0,lt))),a=Math.max(0,...e.map(s=>s.track.id))+1,o=!Bt(t)||!Bt(i),n=o?vt:Q;return de("mvhd",+o,0,[n(t),n(t),Q(lt),n(i),st(1),tl(1),Array(10).fill(0),ol(al),Array(24).fill(0),Q(a)])},xo=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const o=t.samples[a];o.timestamp<e&&(e=o.timestamp),o.timestamp+o.duration>i&&(i=o.timestamp+o.duration)}return e===1/0?0:i-e},lg=(t,e)=>{const i=p1(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return re("trak",void 0,[cg(t,e),a?fg(t,t.startTimestampOffset):null,ug(t,e),i.name!==void 0?re("udta",void 0,[re("name",[...mt.encode(i.name)])]):null])},cg=(t,e)=>{const i=Se(xo(t),lt)+Se(t.startTimestampOffset??0,lt),a=!Bt(e)||!Bt(i),o=a?vt:Q;let n;if(t.type==="video"){const l=t.track.metadata.rotation;n=il(l??0)}else n=al;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Kt(t);return de("tkhd",+a,s,[o(e),o(e),Q(t.track.id),Q(0),o(i),Array(8).fill(0),le(0),le(r),tl(t.type==="audio"?1:0),le(0),ol(n),st(t.type==="video"?t.info.width:0),st(t.type==="video"?t.info.height:0)])},fg=(t,e)=>{const i=Se(e,lt),a=Se(xo(t),lt),o=!Bt(i)||!Bt(a),n=o?vt:Q,s=o?og:Ct;return re("edts",void 0,[de("elst",o?1:0,0,[Q(2),n(i),s(-1),st(1),n(a),s(0),st(1)])])},ug=(t,e)=>re("mdia",void 0,[dg(t,e),Rn(!0,hg[t.type],mg[t.type]),pg(t)]),dg=(t,e)=>{const i=Se(xo(t),t.timescale),a=!Bt(e)||!Bt(i),o=a?vt:Q;return de("mdhd",+a,0,[o(e),o(e),Q(t.timescale),o(i),le(hl(t.track.metadata.languageCode??mp)),le(0)])},hg={video:"vide",audio:"soun",subtitle:"text"},mg={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Rn=(t,e,i,a="\0\0\0\0")=>de("hdlr",0,0,[t?ve("mhlr"):Q(0),ve(e),ve(a),Q(0),Q(0),ve(i,!0)]),pg=t=>re("minf",void 0,[gg[t.type](),vg(),wg(t)]),gg={video:()=>de("vmhd",0,1,[le(0),le(0),le(0),le(0)]),audio:()=>de("smhd",0,0,[le(0),le(0)]),subtitle:()=>de("nmhd",0,0)},vg=()=>re("dinf",void 0,[bg()]),bg=()=>de("dref",0,0,[Q(1)],[yg()]),yg=()=>de("url ",0,1),wg=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return re("stbl",void 0,[kg(t),Lg(t),e?$g(t):null,e?Wg(t):null,Ug(t),qg(t),Dg(t),Ng(t)])},kg=t=>{let e;if(t.type==="video")e=Tg(l1(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=dl(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);W(i),e=Eg(i,t)}else t.type==="subtitle"&&(e=Og(u1[t.track.source._codec],t));return W(e),de("stsd",0,0,[Q(1)],[e])},Tg=(t,e)=>re(t,[Array(6).fill(0),le(1),le(0),le(0),Array(12).fill(0),le(e.info.width),le(e.info.height),Q(4718592),Q(4718592),Q(0),le(1),Me(10),ve("Mediabunny"),Array(21).fill(0),le(e.info.hasAlphaChannel?32:24),Fn(65535)],[c1[e.track.source._codec]?.(e)??null,_g(e),fp(e.info.decoderConfig.colorSpace)?xg(e):null]),_g=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:re("pasp",[Q(t.info.pixelAspectRatio.num),Q(t.info.pixelAspectRatio.den)]),xg=t=>re("colr",[ve(t.muxer.isQuickTime?"nclc":"nclx"),le(fo[t.info.decoderConfig.colorSpace.primaries]),le(uo[t.info.decoderConfig.colorSpace.transfer]),le(ho[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Me((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Sg=t=>t.info.decoderConfig&&re("avcC",[...Ze(t.info.decoderConfig.description)]),Cg=t=>t.info.decoderConfig&&re("hvcC",[...Ze(t.info.decoderConfig.description)]),rl=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),o=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(n<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?fo[e.colorSpace.primaries]:2,u=i[6]?Number(i[6]):e.colorSpace?.transfer?uo[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?ho[e.colorSpace.matrix]:2;return de("vpcC",1,0,[Me(a),Me(o),Me(l),Me(c),Me(u),Me(d),le(0)])},Mg=t=>re("av1C",Ip(t.info.decoderConfig.codec)),Eg=(t,e)=>{let i=0,a,o=16;const n=nt.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:r}=Zt(s);o=8*r,o>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),le(1),le(i),le(0),Q(0),le(e.info.numberOfChannels),le(o),le(0),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0)];else{const s=n?0:-2;a=[Array(6).fill(0),le(1),le(i),le(0),Q(0),le(e.info.numberOfChannels),le(Math.min(o,16)),Fn(s),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0),n?[Q(1),Q(o/8),Q(e.info.numberOfChannels*o/8)]:[Q(0),Q(0),Q(0)],Q(2)]}return re(t,a,[f1(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},zn=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Me(e),...Me(21),...el(0),...Q(0),...Q(0)];if(t.info.decoderConfig.description){const a=Ze(t.info.decoderConfig.description);i=[...i,...Me(5),...Bn(a.byteLength),...a]}return i=[...le(1),...Me(0),...Me(4),...Bn(i.length),...i,...Me(6),...Me(1),...Me(2)],i=[...Me(3),...Bn(i.length),...i],de("esds",0,0,i)},Ot=t=>re("wave",void 0,[Pg(t),Ag(t),re("\0\0\0\0")]),Pg=t=>re("frma",[ve(dl(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Ag=t=>{const{littleEndian:e}=Zt(t.track.source._codec);return re("enda",[le(+e)])},Fg=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,o=0,n=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){W(r.byteLength>=18);const l=Ze(r),c=r2(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,o=c.outputGain,n=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return re("dOps",[Me(0),Me(e),le(i),Q(a),Fn(o),Me(n),...s])},Ig=t=>{const e=t.info.decoderConfig?.description;W(e);const i=Ze(e);return de("dfLa",0,0,[...i.subarray(4)])},bt=t=>{const{littleEndian:e,sampleSize:i}=Zt(t.track.source._codec),a=+e;return de("pcmC",0,0,[Me(a),Me(8*i)])},Bg=t=>{W(t.info.primingPacket);const e=c2(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Be(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),re("dac3",[...i])},Rg=t=>{W(t.info.primingPacket);const e=u2(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),o=new Uint8Array(a),n=new Be(o);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return re("dec3",[...o])},zg=t=>{W(t.info.primingPacket);const e=S2(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return re("ddts",[...E2(e)])},Og=(t,e)=>re(t,[Array(6).fill(0),le(1)],[d1[e.track.source._codec](e)]),Hg=t=>re("vttC",[...mt.encode(t.info.config.description)]),Lg=t=>de("stts",0,0,[Q(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[Q(e.sampleCount),Q(e.sampleDelta)])]),Ng=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return de("stss",0,0,[Q(e.length),e.map(([i])=>Q(i+1))])},Ug=t=>de("stsc",0,0,[Q(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[Q(e.firstChunk),Q(e.samplesPerChunk),Q(1)])]),qg=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Zt(t.track.source._codec);return de("stsz",0,0,[Q(e*t.info.numberOfChannels),Q(t.samples.reduce((i,a)=>i+Se(a.duration,t.timescale),0))])}return de("stsz",0,0,[Q(0),Q(t.samples.length),t.samples.map(e=>Q(e.size))])},Dg=t=>t.finalizedChunks.length>0&&ot(t.finalizedChunks).offset>=2**32?de("co64",0,0,[Q(t.finalizedChunks.length),t.finalizedChunks.map(e=>vt(e.offset))]):de("stco",0,0,[Q(t.finalizedChunks.length),t.finalizedChunks.map(e=>Q(e.offset))]),$g=t=>de("ctts",1,0,[Q(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[Q(e.sampleCount),Ct(e.sampleCompositionTimeOffset)])]),Wg=t=>{let e=1/0,i=-1/0,a=1/0,o=-1/0;W(t.compositionTimeOffsetTable.length>0),W(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,Se(r.timestamp,t.timescale)),o=Math.max(o,Se(r.timestamp+r.duration,t.timescale))}const n=Math.max(-e,0);return o>=2**31?null:de("cslg",0,0,[Ct(n),Ct(e),Ct(i),Ct(a),Ct(o)])},jg=t=>re("mvex",void 0,t.map(Vg)),Vg=t=>de("trex",0,0,[Q(t.track.id),Q(1),Q(0),Q(0),Q(0)]),ll=(t,e)=>re("moof",void 0,[Gg(t),...e.map(Kg)]),Gg=t=>de("mfhd",0,0,[Q(t)]),cl=t=>{let e=0,i=0;const a=0,o=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|a<<8|o},Kg=t=>re("traf",void 0,[Xg(t),Zg(t),Qg(t)]),Xg=t=>{W(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:cl(i)};return de("tfhd",0,e,[Q(t.track.id),Q(a.duration),Q(a.size),Q(a.flags)])},Zg=t=>(W(t.currentChunk),de("tfdt",1,0,[vt(Se(t.currentChunk.startTimestamp,t.timescale))])),Qg=t=>{W(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),a=t.currentChunk.samples.map(cl),o=t.currentChunk.samples.map(h=>Se(h.timestamp-h.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),r=new Set(a),l=new Set(o),c=r.size===2&&a[0]!==a[1],u=n.size>1,d=s.size>1,m=!c&&r.size>1,f=l.size>1||[...l].some(h=>h!==0);let g=0;return g|=1,g|=4*+c,g|=256*+u,g|=512*+d,g|=1024*+m,g|=2048*+f,de("trun",1,g,[Q(t.currentChunk.samples.length),Q(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?Q(a[0]):[],t.currentChunk.samples.map((h,p)=>[u?Q(e[p]):[],d?Q(i[p]):[],m?Q(a[p]):[],f?Ct(o[p]):[]])])},Yg=t=>re("mfra",void 0,[...t.map(Jg),e1()]),Jg=t=>de("tfra",1,0,[Q(t.track.id),Q(63),Q(t.finalizedChunks.length),t.finalizedChunks.map(i=>[vt(Se(i.samples[0].timestamp,t.timescale)),vt(i.moofOffset),Q(i.trafIndex+1),Q(1),Q(1)])]),e1=()=>de("mfro",0,0,[Q(0)]),t1=()=>re("vtte"),i1=(t,e,i,a,o)=>re("vttc",void 0,[o!==null?re("vsid",[Ct(o)]):null,i!==null?re("iden",[...mt.encode(i)]):null,e!==null?re("ctim",[...mt.encode(ag(e))]):null,a!==null?re("sttg",[...mt.encode(a)]):null,re("payl",[...mt.encode(t)])]),a1=t=>re("vtta",[...mt.encode(t)]),o1=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const o=s1(a);o&&e.push(o)}else if(i==="mdta"){const o=r1(a);o&&e.push(o)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&n1(e,t.output._metadataTags);return e.length===0?null:re("udta",void 0,e)},n1=(t,e)=>{for(const{key:i,value:a}of fr(e))switch(i){case"title":t.push(yt("©nam",a));break;case"description":t.push(yt("©des",a));break;case"artist":t.push(yt("©ART",a));break;case"album":t.push(yt("©alb",a));break;case"albumArtist":t.push(yt("albr",a));break;case"genre":t.push(yt("©gen",a));break;case"date":t.push(yt("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(yt("©cmt",a));break;case"lyrics":t.push(yt("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Kt(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(o=>o.type===i)||(typeof a=="string"?t.push(yt(i,a)):a instanceof Uint8Array&&t.push(re(i,Array.from(a))))}},yt=(t,e)=>{const i=mt.encode(e);return re(t,[le(i.length),le(hl("und")),Array.from(i)])},fl={"image/jpeg":13,"image/png":14,"image/bmp":27},ul=(t,e)=>{const i=[];for(const{key:a,value:o}of fr(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:rt(o)});break;case"description":i.push({key:e?"description":"©des",value:rt(o)});break;case"artist":i.push({key:e?"artist":"©ART",value:rt(o)});break;case"album":i.push({key:e?"album":"©alb",value:rt(o)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:rt(o)});break;case"comment":i.push({key:e?"comment":"©cmt",value:rt(o)});break;case"genre":i.push({key:e?"genre":"©gen",value:rt(o)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:rt(o)});break;case"date":i.push({key:e?"date":"©day",value:rt(o.toISOString().slice(0,10))});break;case"images":for(const n of o)n.kind==="coverFront"&&i.push({key:"covr",value:re("data",[Q(fl[n.mimeType]??0),Q(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${o}/${t.tracksTotal}`:o.toString();i.push({key:"track",value:rt(n)})}else i.push({key:"trkn",value:re("data",[Q(0),Q(0),le(0),le(o),le(t.tracksTotal??0),le(0)])});break;case"discNumber":e||i.push({key:"disc",value:re("data",[Q(0),Q(0),le(0),le(o),le(t.discsTotal??0),le(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Kt(a)}if(t.raw)for(const a in t.raw){const o=t.raw[a];o==null||!e&&a.length!==4||i.some(n=>n.key===a)||(typeof o=="string"?i.push({key:a,value:rt(o)}):o instanceof Uint8Array?i.push({key:a,value:re("data",[Q(0),Q(0),Array.from(o)])}):o instanceof hr&&i.push({key:a,value:re("data",[Q(fl[o.mimeType]??0),Q(0),Array.from(o.data)])}))}return i},s1=t=>{const e=ul(t,!1);return e.length===0?null:de("meta",0,0,void 0,[Rn(!1,"mdir","","appl"),re("ilst",void 0,e.map(i=>re(i.key,void 0,[i.value])))])},r1=t=>{const e=ul(t,!0);return e.length===0?null:re("meta",void 0,[Rn(!1,"mdta",""),de("keys",0,0,[Q(e.length)],e.map(i=>re("mdta",[...mt.encode(i.key)]))),re("ilst",void 0,e.map((i,a)=>{const o=String.fromCharCode(...Q(a+1));return re(o,void 0,[i.value])}))])},rt=t=>re("data",[Q(1),Q(0),...mt.encode(t)]),l1=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},c1={avc:Sg,hevc:Cg,vp8:rl,vp9:rl,av1:Mg,prores:null},dl=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},f1=(t,e)=>{switch(t){case"aac":return zn;case"mp3":return zn;case"opus":return Fg;case"vorbis":return zn;case"flac":return Ig;case"ac3":return Bg;case"eac3":return Rg;case"dts":return zg}if(e)switch(t){case"pcm-s24":return Ot;case"pcm-s24be":return Ot;case"pcm-s32":return Ot;case"pcm-s32be":return Ot;case"pcm-f32":return Ot;case"pcm-f32be":return Ot;case"pcm-f64":return Ot;case"pcm-f64be":return Ot}else switch(t){case"pcm-s16":return bt;case"pcm-s16be":return bt;case"pcm-s24":return bt;case"pcm-s24be":return bt;case"pcm-s32":return bt;case"pcm-s32be":return bt;case"pcm-f32":return bt;case"pcm-f32be":return bt;case"pcm-f64":return bt;case"pcm-f64be":return bt}return null},u1={webvtt:"wvtt"},d1={webvtt:Hg},hl=t=>{W(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class On{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){W(!this.started),this.target._start(),this.started=!0}write(e){W(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return W(this.started&&!this.finalized),this.target._flush()}async finalize(){W(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let o=this.trackedWrites.byteLength;for(;o<a;)o*=2;if(o!==this.trackedWrites.byteLength){const n=new Uint8Array(o);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Mt extends kn{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new h1(this,e)}}const Hn=2**16,Ln=2**32;class So extends Mt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Hn,{maxByteLength:Ln})}catch{this._buffer=new ArrayBuffer(Hn),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Hn);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>Ln)throw new Error(`ArrayBuffer exceeded maximum size of ${Ln} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),o=new Uint8Array(a);o.set(this._bytes,0),this._buffer=a,this._bytes=o}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class h1 extends Mt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class Nn{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const lt=57600,m1=2082844800,p1=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},Se=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class g1 extends ig{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new So,this.auxWriter=new On(this.auxTarget,!1),this.auxBoxWriter=new To(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=or(),this.creationTime=Math.floor(Date.now()/1e3)+m1,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof wl,this.isCmaf=i instanceof yl,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof yl?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof So),this.boxWriter=new To(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof So?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),o=new On(a,!0);o.start(),this.initWriter=o,this.initBoxWriter=new To(o)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(W(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(ng({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:o,start:n}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(o,n)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(W(this.writer),W(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=_o(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return P2({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const o=this.trackDatas.find(f=>f.track===e);if(o)return o;yr(a,e.source._codec),W(a),W(a.decoderConfig);const n={...a.decoderConfig};W(n.codedWidth!==void 0),W(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=Gp(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=Kp(f),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=Yp(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=n2(f),s=!0}const r=bp(1/(e.metadata.frameRate??lt),1e6).den,l=n.displayAspectWidth,c=n.displayAspectHeight,u=l===void 0||c===void 0?{num:1,den:1}:ur({num:l*n.codedHeight,den:c*n.codedWidth}),d=n.codec==="ap4h"||n.codec==="ap4x",m={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:u,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:d},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(m),this.trackDatas.sort((f,g)=>f.track.id-g.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),m}getAudioTrackData(e,i,a){const o=this.trackDatas.find(l=>l.track===e);if(o)return o;wr(a,e.source._codec),W(a),W(a.decoderConfig);const n={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=Ir(oa.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=po[l.samplingFrequencyIndex],u=Tn[l.channelConfiguration];if(c===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");n.description=mr({objectType:l.objectType,sampleRate:c,numberOfChannels:u}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&nt.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(n=>n.track===e);if(a)return a;Dp(i),W(i),W(i.config);const o={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(o),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}async addEncodedVideoPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,a);let s=i.data;if(n.info.requiresAnnexBTransformation){const l=[...Yi(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Vp(l,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,r)}finally{o()}}async addEncodedAudioPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,a);let s=i.data;if(n.info.requiresAdtsStripping){const u=Ir(oa.tempFromBytes(s));if(!u)throw new Error("Expected ADTS frame, didn't get one.");const d=u.crcCheck===null?A2:F2;s=s.subarray(d)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(n.info.requiresPcmTransformation){const d=Zt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(l=s.byteLength/d/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const m=r-n.info.expectedNextPcmPacketTimestamp;if(m<.01)r=n.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,m);r=n.info.expectedNextPcmPacketTimestamp+f}}n.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(n,s,r,l,i.type);await this.registerSample(n,c)}finally{o()}}async padWithSilence(e,i,a){const o=Se(a,e.timescale);if(a=o/e.timescale,o>0){const{sampleSize:n,silentValue:s}=Zt(e.info.decoderConfig.codec),r=o*e.info.numberOfChannels,l=new Uint8Array(n*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const o=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,a);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{o()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)W(c.timestamp<=i),W(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const o=[...a].sort((c,u)=>c-u),n=o[0],s=o[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const c=t1();this.auxBoxWriter.writeBox(c);const u=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const u=e.cueQueue[c];if(u.timestamp>=s)break;Jr.lastIndex=0;const d=Jr.test(u.text),m=u.timestamp+u.duration;let f=e.cueToSourceId.get(u);if(f===void 0&&s<m&&(f=e.nextSourceId++,e.cueToSourceId.set(u,f)),u.notes){const h=a1(u.notes);this.auxBoxWriter.writeBox(h)}const g=i1(u.text,d?n:null,u.identifier??null,u.settings??null,f??null);this.auxBoxWriter.writeBox(g),m===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,n,s-n,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,o,n){return{timestamp:a,decodeTimestamp:a,duration:o,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:Se(o,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let o=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],r=Se(s.duration,e.timescale);o+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:o,sampleDelta:1});else{const n=ot(e.timeToSampleTable);n.sampleCount+=o}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(o=>o.timestamp).sort((o,n)=>o-n);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let o=0;o<e.timestampProcessingQueue.length;o++){const n=e.timestampProcessingQueue[o];n.decodeTimestamp=a[o];const s=Se(n.timestamp-n.decodeTimestamp,e.timescale),r=Se(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){W(e.lastSample);const l=Se(n.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(W(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let u=ot(e.timeToSampleTable);if(W(u),u.sampleCount===1){u.sampleDelta=c;const m=e.timeToSampleTable[e.timeToSampleTable.length-2];m&&m.sampleDelta===c&&(m.sampleCount++,e.timeToSampleTable.pop(),u=m)}else u.sampleDelta!==c&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:c}));u.sampleDelta===r?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const d=ot(e.compositionTimeOffsetTable);W(d),d.sampleCompositionTimeOffset===s?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=Se(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,W(e.lastSample),W(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){W(i.type==="key");const o=Se(i.timestamp,e.timescale,!1),n=Math.round(o-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const o=e.track.metadata.maximumPacketCount;if(W(o!==void 0),e.samples.length>o)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${o}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const o=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});o>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=o>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),W(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(W(!this.isFragmented),W(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,o)=>a+Se(o.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||ot(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)W(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(W(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<a&&(i=n,a=n.sampleQueue[0].timestamp)}if(!i)break;const o=i.sampleQueue.shift();await this.addSampleToTrack(i,o)}}async finalizeFragment(e=!this.isCmaf){if(W(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;W(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const g=na(this);if(f.writeBox(g),this.formatOptions.onMoov){const{data:h,start:p}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(h,p)}if(this.isCmaf){W(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new To(this.writer);const h=this.boxWriter.measureBox(nl()),p=this.boxWriter.measureBox(sl(this,0));this.segmentHeaderSize=h+p,this.writer.seek(this.segmentHeaderSize)}}W(this.writer),W(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,o=ll(a,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(o);let r=s+Cn,l=1/0;for(let f=0;f<i.length;f++){const g=i[f];g.currentChunk.offset=r,g.currentChunk.moofOffset=n,g.currentChunk.trafIndex=f;for(const h of g.currentChunk.samples)r+=h.size;l=Math.min(l,g.currentChunk.startTimestamp)}const c=r-s,u=c>=2**32;if(u)for(const f of i)f.currentChunk.offset+=Fr-Cn;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=ll(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:f,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,g,l)}W(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const m=_o(u);m.size=c,this.boxWriter.writeBox(m),this.writer.seek(s+(u?Fr:Cn));for(const f of i)for(const g of f.currentChunk.samples)this.writer.write(g.data),g.data=null;if(this.formatOptions.onMdat){const{data:f,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,g)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){W(this.writer),W(this.boxWriter),this.ensureOneEnabledTrack();const e=na(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;W(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=_o(!0),this.boxWriter.writeBox(this.mdat);for(const o of this.trackDatas){for(const n of o.sampleQueue)await this.addSampleToTrack(o,n);o.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){W(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;W(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(o=>o.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(o=>o.type===e);if(i.length===0)continue;if(!i.some(o=>o.track.metadata.disposition?.default!==!1)){const o=i[0];o.track.metadata.disposition={...o.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){W(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const o=i.samples[a];o.timestamp-=i.startTimestampOffset,o.decodeTimestamp-=i.startTimestampOffset}if(W(this.writer),W(this.boxWriter),this.fastStart==="in-memory"){this.mdat=_o(!1);let i;for(let o=0;o<2;o++){const n=na(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)W(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=na(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const o of this.finalizedChunks)for(const n of o.samples)W(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(nl()),this.boxWriter.writeBox(sl(this,i))}else{const i=this.writer.getPos(),a=Yg(this.trackDatas);this.boxWriter.writeBox(a);const o=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(o)}else{W(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);W(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const o=na(this);if(this.fastStart==="reserve"){W(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(sg(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class v1{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){W(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,o)=>a[o*e]:e===1&&i===4?this.channelMixer=(a,o,n)=>a[o*e]*+(n<2):e===1&&i===6?this.channelMixer=(a,o,n)=>a[o*e]*+(n===2):e===2&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .5*(a[n]+a[n+1])}:e===2&&i===4?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .25*(a[n]+a[n+1]+a[n+2]+a[n+3])}:e===4&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return .5*(a[s+n]+a[s+n+2])}:e===4&&i===6?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]:n===2||n===3?0:a[s+n-2]}:e===6&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return Math.SQRT1_2*(a[n]+a[n+1])+a[n+2]+.5*(a[n+4]+a[n+5])}:e===6&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return a[s+n]+Math.SQRT1_2*(a[s+2]+a[s+n+4])}:e===6&&i===4?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]+Math.SQRT1_2*a[s+2]:a[s+n+2]}:this.channelMixer=(a,o,n)=>n<e?a[o*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),W(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),o=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(o,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,r=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const u=c-this.bufferStartFrame;W(u<this.bufferSizeInFrames);const f=(c/this.targetSampleRate-n)*this.sourceSampleRate,g=Math.floor(f),h=Math.ceil(f),p=f-g;for(let v=0;v<this.targetNumberOfChannels;v++){let b=0,y=0;g>=0&&g<e.numberOfFrames&&(b=this.channelMixer(o,g,v)),h>=0&&h<e.numberOfFrames&&(y=this.channelMixer(o,h,v));const k=b+p*(y-b),_=u*this.targetNumberOfChannels+v;this.outputBuffer[_]+=k}this.maxWrittenFrame===null?this.maxWrittenFrame=u:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,u)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;W(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new We({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var b1=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},y1=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class Un{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class ml extends Un{constructor(e){if(super(),this._connectedTrack=null,!xt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${xt.join(", ")}.`);this._codec=e}}const pl=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class w1{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new lr,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const o=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||r&&s!=="passThrough"){let d=n.transform?.width,m=n.transform?.height,f=n.transform?.fit??"fill";r&&s!=="passThrough"&&(W(this.outputWidth),W(this.outputHeight),W(s!=="deny"),d=this.outputWidth,m=this.outputHeight,f=s);const g=await e.transform({width:d,height:m,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:f,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=g.displayWidth,this.outputHeight=g.displayHeight),i&&e.close(),e=g,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const u=n.transform?.frameRate;if(u!==void 0){const d=e.timestamp+e.duration,m=rr(e.timestamp,u);if(this.frameRateLastSample!==null)if(m<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(m,a);e===o&&(e=e.clone(),i=!0),e.setTimestamp(m),e.setDuration(1/u),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=m,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let o;if(a.transform?.process){let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const r of n)r instanceof Ue?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Ue(r)):s.push(new Ue(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of n)(l instanceof Ue&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}o=s}else o=[e];try{for(const n of o){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),W(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(n.timestamp/s),l={...this.defaultEncodeOptions,...n.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const u=n.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(u,c)).catch(m=>this.setError(m)).finally(()=>{this.customEncoderQueueSize--,u.close()});this.customEncoderQueueSize>=4&&await d}else{W(this.encoder);const u=n.toVideoFrame(),d=ar(this.preciseTimings,u.timestamp,f=>f.microsecondTimestamp),m=d!==-1?this.preciseTimings[d]:null;if(m&&m.microsecondTimestamp===u.timestamp?(m.timestamp!==n.timestamp&&(m.timestampIsValid=!1),m.duration!==n.duration&&(m.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:u.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!u.format&&!u.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(u,c)}finally{u.close()}}else{this.splitter||(this.splitter=new k1);const{colorFrame:g,alphaFrame:h}=await this.splitter.split(u);this.alphaFrameQueue.push(h);try{this.encoder.encode(g,c)}finally{g.close()}}else try{this.encoder.encode(u,c)}finally{u.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of o)n!==e&&n.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;W(this.frameRateLastSample);const o=Math.round((e-this.frameRateLastTimestamp)*a);for(let n=1;n<o;n++){const s={stack:[],error:void 0,hasError:!1};try{const r=b1(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+n/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{y1(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=ko(this.encodingConfig.quality,this.encodingConfig.bitrate);W(i!==void 0);const a=jr({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let o=null,n;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),n=Qr.find(u=>u.supports(this.encodingConfig.codec,l)),n){o=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){o=r;break}}catch{}}if(!o){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:u})=>u!==null?`quantizer ${u}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=o.config;if(o.quantizer!==null&&(this.defaultEncodeOptions=Zr(this.encodingConfig.codec,o.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof gt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");pl(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,u=0;const d=(f,g,h)=>{const p={};if(g){const _=new Uint8Array(g.byteLength);g.copyTo(_),p.alpha=_}let v=gt.fromEncodedChunk(f,p);const b=ar(this.preciseTimings,f.timestamp,_=>_.microsecondTimestamp),y=b!==-1?this.preciseTimings[b]:null;let k=null;this.emittedEncoderPackets===0&&v.type==="delta"&&h?.decoderConfig&&(k=l2(this.encodingConfig.codec,h.decoderConfig,v.data)),(y&&y.microsecondTimestamp===f.timestamp||k!==null)&&(v=v.clone({timestamp:y?.timestampIsValid?y.timestamp:void 0,duration:y?.durationIsValid?y.duration:void 0,type:k??void 0})),pl(this.source._connectedTrack,v),this.encodingConfig.onEncodedPacket?.(v,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,v,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},m=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,g)=>{if(!this.alphaEncoder){d(f,null,g);return}const h=this.alphaFrameQueue.shift();W(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),u++,h.close(),r.push({chunk:f,meta:g})):u===0?d(f,null,g):(l.push(c+u),r.push({chunk:f,meta:g}))},error:f=>{f.stack=m,this.setError(f)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(g,h)=>{u--;const p=r.shift();for(W(p!==void 0),d(p.chunk,g,p.meta),c++;l.length>0&&l[0]===c;){l.shift();const v=r.shift();W(v!==void 0),d(v.chunk,null,v.meta)}},error:g=>{g.stack=f,this.setError(g)}}),this.alphaEncoder.configure(s)}}W(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=rr(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await xp(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let qn=null;class k1{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!qn){const o=new Blob([`(${T1.toString()})()`],{type:"application/javascript"});qn=URL.createObjectURL(o)}this.worker=new Worker(qn),this.worker.addEventListener("message",o=>{const n=o.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",o=>{const n=new Error(o.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=or();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const T1=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:r}=n.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=n.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return o(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,u=l*c,d=Math.ceil(l/2),m=Math.ceil(c/2),f=u+d*m*2,g=new Uint8Array(f);for(let b=0,y=3;b<u;b++,y+=4)g[b]=n[y];g.fill(128,u);const h=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),p={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[g.buffer]},v=new VideoFrame(g,p);return{colorFrame:h,alphaFrame:v}},o=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,u=s.includes("P10"),d=s.includes("P12"),m=u||d?2:1;let f,g;s.startsWith("I420")?(f=Math.ceil(l/2),g=Math.ceil(c/2)):s.startsWith("I422")?(f=Math.ceil(l/2),g=c):(f=l,g=c);const h=l*c,p=f*g,v=h*m,b=p*m,y=h*m,k=v+b*2,_=s.replace("A",""),S=Math.ceil(l/2),M=Math.ceil(c/2),A=S*M,E=A*m,R=y+2*E,D=new Uint8Array(R),x=k;D.set(n.subarray(x,x+y),0);const B=y,T=u?512:d?2048:128;m===1?D.fill(T,B):new Uint16Array(D.buffer,B,2*A).fill(T);const U=u?"I420P10":d?"I420P12":"I420",G=new VideoFrame(n.subarray(0,k),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),L={format:U,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[D.buffer]},V=new VideoFrame(D,L);return{colorFrame:G,alphaFrame:V}}};class _1 extends ml{constructor(e){W2(e),super(e.codec),this._encoder=new w1(this,e)}add(e,i){if(!(e instanceof Ue))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class gl extends Un{constructor(e){if(super(),this._connectedTrack=null,!Xt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Xt.join(", ")}.`);this._codec=e}}class x1{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new lr,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new v1({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&q2(e.format)!==a.transform.sampleFormat){const o=$2(e,a.transform.sampleFormat);i&&e.close(),e=o,i=!0}if(a.transform?.process)try{let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);try{for(const n of o)if(!(n instanceof We))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of o)await this.encodeSample(n,!0)}finally{for(const n of o)n instanceof We&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),W(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),o=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=o;else{const n=a-this.lastEndSampleIndex;if(n>=64){const s=new We({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),o=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await o,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{W(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(o=>this.encoder.addEventListener("dequeue",o,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){W(this.outputSampleSize),W(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:o,sampleRate:n,timestamp:s}=e,r=2048,l=[];for(let m=0;m<o;m+=r){const f=Math.min(r,e.numberOfFrames-m),g=f*a*this.outputSampleSize,h=new ArrayBuffer(g),p=new DataView(h);l.push({frameCount:f,view:p})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),u=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let m=0;m<a;m++){e.copyTo(u,{planeIndex:m,format:"f32-planar"});for(let f=0;f<l.length;f++){const{frameCount:g,view:h}=l[f];for(let p=0;p<g;p++)this.writeOutputValue(h,(p*a+m)*this.outputSampleSize,u[f*r+p])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:n}};for(let m=0;m<l.length;m++){const{frameCount:f,view:g}=l[m],h=g.buffer,p=m*r,v=new gt(new Uint8Array(h),"key",s+p/n,f/n);this.encodingConfig.onEncodedPacket?.(v,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,v,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,o=ko(this.encodingConfig.quality,this.encodingConfig.bitrate),n=Gr({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:o});this.encodingConfig.onEncoderConfig?.(n);const s=Yr.find(r=>r.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof gt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(nt.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,u)=>{if(this.encodingConfig.codec==="aac"&&u?.decoderConfig){let m=!1;if(!u.decoderConfig.description||u.decoderConfig.description.byteLength<2?m=!0:m=Pp(Ze(u.decoderConfig.description)).objectType===0,m){const f=Number(ot(n.codec.split(".")));u.decoderConfig.description=mr({objectType:f,numberOfChannels:u.decoderConfig.numberOfChannels,sampleRate:u.decoderConfig.sampleRate})}}let d=gt.fromEncodedChunk(c);d=d.clone({timestamp:sr(d.timestamp,n.sampleRate),duration:c.duration!=null?sr(d.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,u),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,u).catch(m=>{this.setError(m)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(n)}W(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:o}=Zt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint8(s,Oe((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,r)=>{n.setInt8(s,Oe(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,r)=>{const l=Oe(Math.floor(r*32767),-32768,32767);n.setUint8(s,Y2(l))}:i==="alaw"?this.writeOutputValue=(n,s,r)=>{const l=Oe(Math.floor(r*32767),-32768,32767);n.setUint8(s,J2(l))}:W(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint16(s,Oe((r+1)*32767.5,0,65535),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt16(s,Oe(Math.round(r*32767),-32768,32767),o):W(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,r)=>pn(n,s,Oe((r+1)*83886075e-1,0,16777215),o):i==="signed"?this.writeOutputValue=(n,s,r)=>dp(n,s,Oe(Math.round(r*8388607),-8388608,8388607),o):W(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint32(s,Oe((r+1)*21474836475e-1,0,4294967295),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt32(s,Oe(Math.round(r*2147483647),-2147483648,2147483647),o):i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat32(s,r,o):W(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat64(s,r,o):W(!1);break;default:Kt(a),W(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class S1 extends gl{constructor(e){j2(e),super(e.codec),this._accumulatedTime=0,this._encoder=new x1(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=We._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class C1 extends Un{constructor(e){if(super(),this._connectedTrack=null,!Zi.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Zi.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class vl{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>xt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Xt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Zi.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class Dn extends vl{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new g1(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class bl extends Dn{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...xt,..._n,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Zi]}_codecUnsupportedHint(e){return new wl().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class yl extends Dn{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...xt,..._n,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Zi]}}class wl extends Dn{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...xt,...Xt]}_codecUnsupportedHint(e){return new bl().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const kl=["video","audio","subtitle"];class sa{constructor(e,i,a,o,n){this.id=e,this.output=i,this.type=a,this.source=o,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof sa))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=dr(this.metadata.group),a=dr(e.metadata.group);for(const o of i)if(this.type!==e.type&&a.some(r=>o===r)||a.some(r=>o._pairedGroups.has(r)))return!0;return!1}}class M1 extends sa{constructor(e,i,a,o){super(e,i,"video",a,o)}}class E1 extends sa{constructor(e,i,a,o){super(e,i,"audio",a,o)}}class P1 extends sa{constructor(e,i,a,o){super(e,i,"subtitle",a,o)}}class ra{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof ra))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const $n=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!vp(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Ep(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof ra)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof ra))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class A1 extends kn{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new ra,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new ir,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof vl))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof Mt||e.target instanceof Nn))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof Mt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof Mt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof Mt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){W(this._target instanceof Nn);const i=this._target.getTarget(e),a=o=>{if(!(o instanceof Mt))throw new TypeError("getTarget must return a Target.");return o};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){W(this._target instanceof Nn);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(W(this._initTarget!==null),this._initTarget instanceof Mt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof Mt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=o=>(this.state==="canceled"?o._close():this._rememberTarget(o),this._emit("target",{target:o,request:e,isRoot:!0}),this._rootTarget=o,o);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new On(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof ml))throw new TypeError("source must be a VideoSource.");if($n(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&yr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof gt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new M1(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof gl))throw new TypeError("source must be an AudioSource.");if($n(i),i.decoderConfig!==void 0&&wr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof gt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new E1(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof C1))throw new TypeError("source must be a SubtitleSource.");$n(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new P1(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(Mp(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),o=i[e.type].max;if(a===o)throw new Error(o===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${o} ${e.type} track${o===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of kl){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of kl){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)throw new Error(n===e[a].max?`${this.format._name} requires exactly ${n} ${a} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${a} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(Ce._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const o=this.tracks.map(n=>n.source._start());await Promise.all(o)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return Ce._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&Ce._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(Ce._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const F1={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},I1=new Set(["window","buddy","dancer"]);function Tl(t){return!I1.has(t.typeId)}const B1=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function R1(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!B1.has(i))return a}));return JSON.stringify(e,null,2)}function z1(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>O1(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!1),e.sources=e.sources.map(i=>{const a=F1[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Tl)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(Tl)}))}:i.data})),e}function O1(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function H1(t,e){const i=new Blob([e],{type:"application/json"});ci(t,i)}function ci(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Ht=1280,Lt=1920,L1=30,_l=8,N1=16,xl=.97,Wn=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function Sl(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:ct(t*a),height:ct(e*a)}}function U1(t,e){const i=t/Math.max(e,1);let a="16:9",o=1/0;for(const n of Wn){const s=Math.abs(i-n.rw/n.rh);s<o&&(o=s,a=n.id)}return a}function Cl(t,e,i=1280){if(t<2||e<2)return Sl(16,9,i);const a=Math.max(t,e),o=i/a;return{width:ct(t*o),height:ct(e*o)}}function q1(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function Ml(t){return Math.min(L1,Math.max(12,Math.round(t||30)))}function El(t){return Math.min(32,Math.max(1,t||4))}function Pl(t,e,i){const a=I(t||12,_l,N1),o=e*i/(Ht*720);return Math.min(20,Math.max(_l,Math.round(a*Math.max(1,o))))}const D1=Lt,$1=Lt;function jn(t,e=!1){const i=e?D1:$1;return Jn(t.exportSettings.width,t.exportSettings.height,i,i)}async function W1(t,e,i){const{width:a,height:o,format:n,quality:s,filename:r}=e.exportSettings,l=n==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,ct(a),ct(o),l,n==="jpg"?Math.max(s,xl):s);ci(`${r}.${n==="jpg"?"jpg":"png"}`,c)}async function j1(t,e,i){const{fps:a,duration:o,filename:n,quality:s}=e.exportSettings,{width:r,height:l}=jn(e,!1),c=dn(e),u=Math.max(1,Math.round(o*a)),d=new lp,m=d.folder(n)??d,f=document.createElement("canvas");for(let h=0;h<u;h++){const p=c+h/a;i?.(h,u),t.paintFrame(e,p,r,l,f);const v=await Q1(f,"image/png",s);m.file(`${n}_${String(h).padStart(5,"0")}.png`,await v.arrayBuffer()),await Vn()}const g=await d.generateAsync({type:"blob"});ci(`${n}_sequence.zip`,g)}async function Al(t,e,i,a=!1){const o=await Fl(t,e,X1(),i,a);ci(`${e.exportSettings.filename}.webm`,o)}async function V1(t,e,i,a=!1){try{return await G1(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(o){const n=Z1();if(n){const r=await Fl(t,e,n,i,a);return ci(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await Al(t,e,i,a),`MP4 not available (${o instanceof Error?o.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function G1(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const o=Ml(e.exportSettings.fps),n=El(e.exportSettings.duration),{width:s,height:r}=jn(e,a),l=new qe({bitrate:Pl(e.exportSettings.bitrate,s,r)*1e6}),c=new bl({fastStart:"in-memory"}),d=await Z2(["avc","hevc"].filter(k=>c.getSupportedVideoCodecs().includes(k)),{width:s,height:r,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const m=new So,f=new A1({format:c,target:m}),g=new _1({codec:d,quality:l,keyFrameInterval:1});f.addVideoTrack(g,{frameRate:o});const h=dn(e),p=await K1(f,c,e,n,h);t.resetTemporal();const v=document.createElement("canvas");await f.start();try{p&&await p.audioSource.add(p.buffer);const k=Math.max(1,Math.round(n*o)),_=1/o,S=e.exportSettings.loopClose===!0;let M=null;for(let A=0;A<k;A++){const E=h+cn(A/o,n,e.playback.mode,1,!0);i?.(A,k),t.paintFrame(e,E,s,r,v),A===0&&S?M=Bl(v):Il(v,M,A,k,S);const R=new Ue(v,{timestamp:A*_,duration:_});await g.add(R,{keyFrame:A%o===0}),R.close(),await Vn()}await f.finalize()}catch(k){try{await f.cancel()}catch{}throw k}const b=m.buffer;if(!b||b.byteLength<32)throw new Error("MP4 mux produced an empty file");const y=b.slice(0);return ci(`${e.exportSettings.filename}.mp4`,new Blob([y],{type:"video/mp4"})),!!p}async function K1(t,e,i,a,o=0){const n=await mm(Wi(i));if(!n||n.length<32||n.duration<=0)return null;const s=i.exportSettings.loopClose===!0;let r;try{r=hm(n,a,s,o)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),c=r.sampleRate>=46e3?48e3:44100,u=e.getSupportedAudioCodecs(),d=["aac","mp3","opus"].filter(g=>u.includes(g)),m=await Q2(d.length?d:u,{numberOfChannels:l,sampleRate:c});if(!m)return null;const f=new S1({codec:m,quality:G2,transform:{numberOfChannels:l,sampleRate:c}});return t.addAudioTrack(f),{audioSource:f,buffer:r}}async function Fl(t,e,i,a,o=!1){const n=Ml(e.exportSettings.fps),s=El(e.exportSettings.duration),{width:r,height:l}=jn(e,o),c=document.createElement("canvas");c.width=r,c.height=l;const u=c.getContext("2d");if(!u)throw new Error("No 2d context");const d=c.captureStream(0),m=d.getVideoTracks()[0],f=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:Pl(e.exportSettings.bitrate,r,l)*1e6}),g=[];f.ondataavailable=k=>{k.data.size&&g.push(k.data)},t.resetTemporal(),f.start(200);const h=dn(e),p=Math.max(1,Math.round(s*n)),v=document.createElement("canvas"),b=e.exportSettings.loopClose===!0;let y=null;for(let k=0;k<p;k++){const _=h+cn(k/n,s,e.playback.mode,1,!0);a?.(k,p),t.paintFrame(e,_,r,l,v),k===0&&b?y=Bl(v):Il(v,y,k,p,b),u.drawImage(v,0,0,r,l),m.requestFrame?.(),await Vn()}if(await new Promise(k=>{f.onstop=()=>k(),f.stop()}),d.getTracks().forEach(k=>k.stop()),!g.length)throw new Error("recorder produced no data");return new Blob(g,{type:i})}function X1(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function Z1(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Il(t,e,i,a,o){if(!o||!e||i===0)return;const n=q1(i,a);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function Bl(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Vn(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function Q1(t,e,i){return new Promise((a,o)=>{t.toBlob(n=>{n?a(n):o(new Error("frame capture failed"))},e,i)})}async function Y1(t,e,i,a,o=!1){const n=e.exportSettings.format;return n==="mp4"?V1(t,e,a,o):n==="webm"?Al(t,e,a,o):n==="sequence"?j1(t,e,a):W1(t,e,i)}const J1=768,ev="sana",Rl=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function tv(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),o=J1/Math.max(i,a);return{width:ct(i*o,256),height:ct(a*o,256)}}function iv(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,o=i>>8&255,n=i&255;let s=Rl[0],r=1e9;for(const l of Rl){const c=(a-l.r)**2+(o-l.g)**2+(n-l.b)**2;c<r&&(r=c,s=l)}return s.name}function av(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",o="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${o}`;const n=e.map(iv).filter((s,r,l)=>l.indexOf(s)===r).slice(0,4);return`${a}, palette of ${n.join(", ")}, ${o}`}function ov(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function nv(t,e,i,a=4){const o=[];for(let n=0;n<3;n++)for(let s=0;s<3;s++){const r=Math.min(e-1,Math.floor((s+.5)/3*e)),c=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+r)*4,u=t[c],d=t[c+1],m=t[c+2],f=ov(u,d,m);o.some(h=>(h.r-u)**2+(h.g-d)**2+(h.b-m)**2<1400)||o.push({hex:f,r:u,g:d,b:m})}return o.slice(0,a).map(n=>n.hex)}function sv(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return nv(a.data,e.width,e.height)}function rv(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function lv(t,e,i,a,o=ev){const n=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(o)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${s}`}async function cv(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const o=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!o.ok)throw o.status===429||o.status>=500?new Error(`busy:${o.status}`):new Error(`Generation failed (${o.status}). Try a shorter prompt.`);const n=await o.arrayBuffer(),s=new Uint8Array(n),r=o.headers.get("content-type")||"";if(!rv(s,r))throw new Error("Generation returned no image. Try again.");const l=r.startsWith("image/")?r.split(";")[0]:"image/jpeg";return new Blob([n],{type:l})}catch(o){throw o instanceof Error&&o.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):o}finally{clearTimeout(a)}}async function fv(t){const{width:e,height:i}=tv(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let o=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await cv(lv(a,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(r){o=r instanceof Error?r:new Error(String(r))}}const n=o?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":o?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function Pe(t){const e=F.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function la(t){if(!t)return;const e=F.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function je(t,e,i=!0){F.setProject(a=>({...a,layers:a.layers.map(o=>o.id===t?e(o):o)}),i)}function Et(t,e=!0){F.setProject(i=>{const a=e?i.layers.map(o=>o.id===F.state.ui.selectedLayerId?{...o,sourceId:t.id}:o):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),F.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function uv(t){const e=F.project.sources.filter(s=>s.kind==="audio");for(const s of e)er(s);if(F.setProject(s=>{const r=s.sources.filter(u=>u.kind!=="audio"),l=s.layers.map(u=>e.some(d=>d.id===u.sourceId)?{...u,sourceId:r.find(d=>d.kind!=="audio")?.id??null}:u),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),so(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",o=t.beats?.length?`${t.beats.length} hits`:"",n=[i,a,o].filter(Boolean).join(" · ");F.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function Co(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&F.patchUi({status:`reading ${i.name}…`});const o=await Jm(i);if(o.kind==="audio"){uv(o);continue}if(e){const n=F.state.ui.selectedSourceId;F.setProject(s=>({...s,sources:s.sources.map(r=>r.id===n?{...o,id:r.id}:r)})),F.patchUi({status:`replaced ${i.name}`})}else Et(o,!0)}catch(a){F.patchUi({status:a instanceof Error?a.message:"import failed"})}}function dv(){F.setProject(e=>{const i=e.sources.find(o=>o.kind!=="audio")?.id??null,a=Us(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=F.project.layers.at(-1);F.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function hv(t){F.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Ne("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:Ne("fx")}));const o=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(o+1,0,a),{...e,layers:n}})}function mv(t){F.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Gn(t){const e=Pe(F.project);if(!e)return;const i=Ns(t);je(e.id,a=>({...a,effects:[...a.effects,i]})),F.patchUi({selectedEffectId:i.id})}function pv(t,e){je(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function zl(t,e,i){je(t,a=>{const o=a.effects.findIndex(l=>l.id===e),n=o+i;if(o<0||n<0||n>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(o,1);return s.splice(n,0,r),{...a,effects:s}})}function gv(t,e){je(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function ca(t,e,i,a,o=!0){je(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),o)}function fi(t,e=!1){const i=F.state.ui;(t==="all"||t==="selected")&&F.setProject(o=>({...o,seed:o.seed+1+(Date.now()&255)>>>0}),!1),F.setProject(o=>{let s=Os(o,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.includeCritters&&(s=zs(s)),t==="all"&&i.includeIdol&&(s=_h(s)),s});const a=F.project.layers[0]?.effects.map(o=>o.typeId).join(" · ");F.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${F.project.seed}`})}function vv(){const t=F.project,e=t.sources.find(o=>o.id===F.state.ui.selectedSourceId);if(e&&ze(e.generator))return e;const i=Pe(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&ze(a.generator)?a:t.sources.find(o=>ze(o.generator))}function bv(){const t=vv();if(!t){F.patchUi({status:"no collage to randomize"});return}const e=F.project.seed+Date.now()>>>0;F.setProject(a=>({...a,sources:a.sources.map(o=>o.id===t.id?Eh(o,e):o)}));const i=F.project.sources.find(a=>a.id===t.id);F.patchUi({status:`field · ${i?.name??"rolled"}`})}function yv(){const t=Pe(F.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(F.project.seed+Date.now())%9998;if(e){ca(t.id,e.id,"seed",i),F.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Gn("critters");const a=Pe(F.project),o=la(a);a&&o?.typeId==="critters"&&ca(a.id,o.id,"seed",i),F.patchUi({status:"stamped floaters"})}function wv(){const t=Pe(F.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(F.project.seed+Date.now()+17)%9998;if(e){ca(t.id,e.id,"seed",i),F.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Gn("dancer");const a=Pe(F.project),o=la(a);a&&o?.typeId==="dancer"&&ca(a.id,o.id,"seed",i),F.patchUi({status:"stamped idol"})}function kv(){F.setProject(t=>Ph({...t,seed:t.seed+1+(Date.now()&255)>>>0})),F.patchUi({status:"new floater and idol seeds"})}async function Tv(t){const e=F.project,{width:i,height:a}=Jn(e.exportSettings.width||1280,e.exportSettings.height||720,Lt,Lt);try{const o=await t.capture(e,e.playback.time,i,a,"image/png",xl),n=await Ys(o,`print_${Date.now()}.png`);Et(n,!0),F.patchUi({status:"printed the live frame as a new still"})}catch(o){F.patchUi({status:o instanceof Error?o.message:"print failed"})}}function Ol(t){F.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Hl(){H1(`${F.project.name||"phosphene"}.phos.json`,R1(F.project)),F.patchUi({status:"project downloaded"})}async function _v(t){const e=await t.text(),i=z1(e);F.replace(i),F.patchUi({status:"project loaded — re-drop media if needed"})}function xv(){const t=prompt("Preset name",`look ${F.project.presets.length+1}`);if(!t)return;const e=on(F.project,t);F.setProject(i=>({...i,presets:[...i.presets,e]}))}function Kn(t){const e=F.project.presets.find(i=>i.id===t);e&&(F.setProject(i=>gh(i,e)),F.patchUi({status:`preset ${e.name}`}))}function Sv(){const t=vh(F.project.presets,F.project.seed+Date.now());if(!t){F.patchUi({status:"no presets saved"});return}Kn(t.id)}function Cv(t){const e=F.project.presets.find(i=>i.id===t);e&&F.setProject(i=>({...i,presets:[...i.presets,bh(e)]}))}function Mv(t){F.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Ll(){const t=F.state.ui,e=Pe(F.project),i=la(e),a=t.selectedParam?.paramId;if(!e||!i||!a){F.patchUi({status:"select a numeric parameter first"});return}const o=i.params[a];if(typeof o!="number"){F.patchUi({status:"keyframes are numeric"});return}const n={id:Ne("kf"),time:F.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:o,easing:"smooth"};F.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),F.patchUi({status:`key ${a} @ ${n.time.toFixed(2)}s`})}function Ev(){F.setProject(t=>({...t,keyframes:[]}))}async function Pv(){const t=F.project.sources.find(i=>i.id===F.state.ui.selectedSourceId);if(!t)return;const e=await ip(t);e&&Et(e,!0)}function Nl(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of F.project.sources)er(e);F.replace(qs()),F.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Av(){if(F.state.ui.generating)return;const t=F.state.ui.prompt.trim();if(!t){F.patchUi({status:"type a prompt first"});return}F.patchUi({generating:!0,status:"generating new image…"});try{const e=F.project.sources.find(c=>c.id===F.state.ui.selectedSourceId),i=F.state.ui.useSourceForGen;let a=[];const o=e?.frozenFrame||e?.bitmap||e?.video||null;i&&o&&(a=sv(o));const n=av(t,a,i&&a.length>0),s=F.project.seed+Date.now()>>>0,r=await fv({prompt:n,seed:s,width:F.project.exportSettings.width,height:F.project.exportSettings.height,onStatus:c=>F.patchUi({generating:!0,status:c},!1)}),l=await Ys(r,`gen_${s}.jpg`);Et(l,!0),F.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){F.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let Mo=!1,fa=null;function Fv(t,e){fa=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, and camera.">Rand field</button>
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tunnel / spiral / helix / bloom / prism plus Gyre, Well, Hall, Drift, Braid, and Sway are 3D fly-throughs — stamps travel in depth and around the frame so a big screen feels like you are moving through the picture. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Field locks one stamp pattern and loops it seamlessly — spinning discs, straight grid motion, or Snake (heraldic silhouettes: a packed sheet morphs into a C-hole, a scatter, a creature, a few giants, a drawn glyph stroke, then a winding ribbon, while every icon turns into a different one) — until you change a slider, pick another pattern, or hit Rand field. With a song loaded the loop spans whole bars. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Chain can optionally wear Animal Chain parts (dragon, dog, ferret, caterpillar, zebra) on the same path. Hunt is a documentary camera on top of any move: watch wide, notice a stamp, snap in, follow, return. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Check <em>effects</em> (top bar, or under Effects on the right) if you also want a short stack from the right panel. Uncheck it for a clean collage. Wacky rolls a thicker stack when effects are on. No dancer. Rolls stay small and slower — no giant stamps, no frantic bounce/flip/flash. When the rolled move is Field, the Field sliders roll too.</li>
          <li><strong>Rand field</strong> picks a new looping pattern and rerolls its sliders. Kit, mash, wash, camera, size, and pace stay. Switches the clip to Field if it is on another move.</li>
          <li><strong>Cut edit</strong> is the other randomizer. Drop an MP3 first. It finds the first downbeat (the kick, not the snare) and cuts on that metronome — bars and half-bars, not stray 8th notes. Snap / step / spot flip on the same frames as the drums. Some shots hold a bar or two. Some are two-beat fills that land back on 1.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music, Kitchen, Sky, Street, Arcade, Haunt, Sport, School. Each pack is its own stamp set — switching a kit replaces every icon. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Color</strong> packs (Brine, Candy, Ember, Neon…) recast washes and inks across any kit. <strong>Wash</strong> taps a color from the active pack. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is playing and the clip keeps that part of the song — the window you are hearing, with the visuals already synced to it. Export from the start of the track if you rewind first. Stills and PNG sequences stay silent. Clips loop as-is. Check <em>close loop</em> only if you want the last beats to dissolve into the first frame.</li>
          <li><strong>Texture</strong> — Dot Screen, Riso, Etching, Holo Foil, Crackle, Velvet Nap sit under Effects. They print, foil, or flock the collage without replacing the stamps.</li>
          <li>Bottom-right: pick a shape, tap <strong>720</strong> or <strong>1080</strong>, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). Clips save at 30 fps in HD so they stay sharp without a long wait. The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Bv(t),F.subscribe(()=>{Mo||Xn(t)}),Xn(t)}async function Iv(t=!1){if(fa&&!F.state.ui.exporting){F.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),F.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await Y1(fa,F.project,F.project.playback.time,(i,a)=>{F.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);F.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){F.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Bv(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,o=i.dataset.id;if(a==="save"&&Hl(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Nl(),a==="imagine"&&Av(),a==="seed-"&&Ol(-1),a==="seed+"&&Ol(1),a==="rand-all"&&fi("all"),a==="rand-wacky"&&fi("all",!0),a==="cut-edit"){const n=!F.project.cutEdit?.enabled;F.setProject(s=>({...s,cutEdit:{enabled:n,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),F.patchUi({status:n?F.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&kv(),a==="reprint"&&fa&&Tv(fa),a==="rand-sel"&&fi("selected"),a==="rand-field"&&bv(),a==="rand-param"){const n=i.dataset.paramId,s=Pe(F.project),r=la(s);n&&s&&r&&F.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:n}},!1),fi("param")}if(a==="help"&&F.patchUi({helpOpen:!F.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&Pv(),a==="gen"){const n=i.dataset.kind??"plasma",s=ui(),r=i.dataset.kit??(ze(n)?$t(s?.collageKit):void 0),l=i.dataset.move??(ze(n)?ps(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,u=si(n,r,l,Uv(s,c));Et(u,!0),F.patchUi({status:u.collageMove?`place · ${u.collageMove} · ${u.collageKit??""}${u.collageKitB?` · ${u.collageKitB}`:""}`:u.collageKit?`place · ${n} · ${u.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(a==="mash"){const n=i.dataset.kit??"love",s=ui();if(s){const r=s.collageKitB===n||s.collageKit===n?void 0:n;ae(l=>Ul({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=si("wallpaper","sailor","rush",{kitB:n});Et(r,!0),F.patchUi({status:`mash · sailor · ${n}`})}}if(a==="wash"){const n=i.dataset.hex;n&&(ae(s=>({...s,colorA:n}),`wash · ${n}`)||(Et(si("wallpaper","sailor","rush",{wash:n}),!0),F.patchUi({status:`wash · ${n}`})))}if(a==="color-pack"){const n=$i(i.dataset.pack),s=ui();if(s){const r=$t(s.collageKit),l=ni(r,n),c=(s.colorA??"").toLowerCase(),u=l.some(d=>d.toLowerCase()===c);ae(d=>({...d,collageColorPack:n,colorA:u?d.colorA:l[0],colorB:kt(r,n)}),`color · ${Jo[n]}`)}else{const r=si("wallpaper","sailor","rush",{colorPack:n});Et(r,!0),F.patchUi({status:`color · ${Jo[n]}`})}}if(a==="night"){const s=!ui()?.collageNight;ae(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(Et(si("wallpaper","sailor","rush",{night:!0}),!0),F.patchUi({status:"night wash"}))}if(a==="camera"){const n=Ei(i.dataset.camera);ae(s=>({...s,collageCamera:n}),n==="hunt"?"camera · documentary search":"camera · fixed")}if(a==="camera-feel"){const n=Na(i.dataset.feel);ae(s=>({...s,collageCameraFeel:n}),`camera feel · ${n}`)}if(a==="hunt-select"){const n=Ua(i.dataset.select);ae(s=>({...s,collageHuntSelect:n}),`subject select · ${n}`)}if(a==="hunt-focus"){const s=!ui()?.collageHuntFocus;ae(r=>({...r,collageHuntFocus:s}),s?"manual focus on":"manual focus off")}if(a==="chain-animal"){const n=Ri(i.dataset.animal);ae(s=>Ul({...s,collageChainAnimal:n}),n==="off"?"animal chain off":`animal chain · ${n}`)}if(a==="field-pattern"){const n=Jt(i.dataset.pattern);ae(s=>({...s,collageFieldPattern:n}),`field · ${va[n]}`)}if(a==="stamp-critters"&&yv(),a==="stamp-idol"&&wv(),a==="add-layer"&&dv(),a==="dup-layer"&&o&&hv(o),a==="del-layer"&&o&&mv(o),a==="sel-layer"&&o&&F.patchUi({selectedLayerId:o,selectedEffectId:F.project.layers.find(n=>n.id===o)?.effects[0]?.id??null}),a==="sel-fx"&&o&&F.patchUi({selectedEffectId:o}),a==="sel-src"&&o&&F.patchUi({selectedSourceId:o}),a==="bypass"&&o){const n=Pe(F.project);n&&gv(n.id,o)}if(a==="fx-up"&&o){const n=Pe(F.project);n&&zl(n.id,o,-1)}if(a==="fx-dn"&&o){const n=Pe(F.project);n&&zl(n.id,o,1)}if(a==="fx-del"&&o){const n=Pe(F.project);n&&pv(n.id,o)}if(a==="key"&&Ll(),a==="key-clear"&&Ev(),a==="pst-save"&&xv(),a==="pst-rand"&&Sv(),a==="pst-load"&&o&&Kn(o),a==="pst-dup"&&o&&Cv(o),a==="pst-del"&&o&&Mv(o),a==="export"&&Iv(),a==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));F.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),F.patchUi({status:`${n}s clip ready — hit Export`})}if(a==="exp-aspect"&&o){const n=Wn.find(s=>s.id===o);if(n){const s=Math.max(F.project.exportSettings.width,F.project.exportSettings.height,Ht),r=Sl(n.rw,n.rh,Math.min(Lt,Math.max(Ht,s)));F.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const n=Number(i.dataset.long||Ht),s=F.project,r=Cl(s.exportSettings.width,s.exportSettings.height,n);F.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:n>=Lt?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const n=F.project,s=Pe(n),r=n.sources.find(d=>d.id===(s?.sourceId??n.sources[0]?.id)),l=r?.kind==="audio"?n.sources.find(d=>d.kind!=="audio"):r,c=Math.max(n.exportSettings.width,n.exportSettings.height,Ht),u=Cl(l?.width??1280,l?.height??720,Math.min(Lt,c));F.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:u.width,height:u.height}}))}if(a==="play"&&(so(),F.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),a==="use-src"&&o){if(F.project.sources.find(r=>r.id===o)?.kind==="audio")return;const s=Pe(F.project);s&&je(s.id,r=>({...r,sourceId:o}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(_v(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Co(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Co(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(Co(i.files,!1),i.value=""),i.id==="quality"&&F.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&Gn(i.value),i.value=""),i.id==="blend"){const a=Pe(F.project);a&&je(a.id,o=>({...o,blendMode:i.value}))}if(i.id==="mask-type"){const a=Pe(F.project);a&&je(a.id,o=>({...o,mask:{...o.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&Kn(i.value),i.id==="exp-format"&&F.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&F.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&F.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&F.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&F.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=F.project;if(i.id==="gen-prompt"&&F.patchUi({prompt:i.value},!1),i.id==="gen-src"&&F.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&F.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&F.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&F.patchUi({includeEffects:i.checked}),i.id==="seed"&&F.setProject(o=>({...o,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&F.setProject(o=>({...o,randomAmount:Number(i.value)}),!1),i.id==="speed"&&F.setProject(o=>({...o,playback:{...o.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&F.setProject(o=>({...o,playback:{...o.playback,loop:i.checked}}),!1),i.id==="loop-close"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&F.setProject(o=>({...o,playback:{...o.playback,freeze:i.checked}}),!1),i.id==="time"&&F.setProject(o=>({...o,playback:{...o.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const o=Pe(a);o&&je(o.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const o=Pe(a);o&&je(o.id,n=>({...n,enabled:i.checked}),!1)}for(const o of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${o}`&&F.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[o]:Number(i.value)}}),!1),i.id===`lfb-${o}`){const n=Pe(a);n&&je(n.id,s=>({...s,feedback:{...s.feedback,[o]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const o=Pe(a),n=i.id.slice(3);o&&n in o.transform&&je(o.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Mo=!0;const o=Rv(i.dataset.fxType||"",i.dataset.param),n=zv(i,o);ca(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),F.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&ae(o=>({...o,collageScale:Li(Number(i.value))}),void 0,!0),i.id==="collage-density"&&ae(o=>({...o,collageDensity:Ni(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&ae(o=>({...o,collagePace:Pi(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&ae(o=>({...o,collageChainTravel:Ai(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&ae(o=>({...o,collageChainMorph:Fi(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&ae(o=>({...o,collageChainVary:Ii(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&ae(o=>({...o,collageChainSmooth:Bi(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&ae(o=>({...o,collageSpringStrength:ba(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&ae(o=>({...o,collageSpringDamp:ya(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&ae(o=>({...o,collageSpringDist:wa(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&ae(o=>({...o,collageSpringElast:ka(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&ae(o=>({...o,collageSpringBreak:Ta(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&ae(o=>({...o,collageFlowScale:_a(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&ae(o=>({...o,collageFlowTurb:xa(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&ae(o=>({...o,collageFlowEvolve:Sa(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&ae(o=>({...o,collageFlowForce:Ca(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&ae(o=>({...o,collageFlowDepth:Ma(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&ae(o=>({...o,collageBoidCohere:Ea(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&ae(o=>({...o,collageBoidSep:Pa(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&ae(o=>({...o,collageBoidAlign:Aa(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&ae(o=>({...o,collageBoidRadius:Fa(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&ae(o=>({...o,collageBoidSpeed:Ia(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&ae(o=>({...o,collagePoleCount:Ba(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&ae(o=>({...o,collagePoleAttract:Ra(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&ae(o=>({...o,collagePoleRepel:za(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&ae(o=>({...o,collagePoleSpeed:Oa(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&ae(o=>({...o,collagePoleFalloff:Ha(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&ae(o=>({...o,collagePoleSwitch:La(Number(i.value))}),void 0,!0),i.id==="collage-field-strength"&&ae(o=>({...o,collageFieldStrength:hi(Number(i.value))}),void 0,!0),i.id==="collage-field-scale"&&ae(o=>({...o,collageFieldScale:Ao(Number(i.value))}),void 0,!0),i.id==="collage-field-evolve"&&ae(o=>({...o,collageFieldEvolve:mi(Number(i.value))}),void 0,!0),i.id==="collage-field-density"&&ae(o=>({...o,collageFieldDensity:pi(Number(i.value))}),void 0,!0),i.id==="collage-field-density-scale"&&ae(o=>({...o,collageFieldDensityScale:Fo(Number(i.value))}),void 0,!0),i.id==="collage-field-density-evolve"&&ae(o=>({...o,collageFieldDensityEvolve:Io(Number(i.value))}),void 0,!0),i.id==="collage-field-flow"&&ae(o=>({...o,collageFieldFlow:Bo(Number(i.value))}),void 0,!0),i.id==="collage-field-curl"&&ae(o=>({...o,collageFieldCurl:gi(Number(i.value))}),void 0,!0),i.id==="collage-field-flow-scale"&&ae(o=>({...o,collageFieldFlowScale:Ro(Number(i.value))}),void 0,!0),i.id==="collage-field-attract"&&ae(o=>({...o,collageFieldAttract:zo(Number(i.value))}),void 0,!0),i.id==="collage-field-repel"&&ae(o=>({...o,collageFieldRepel:Oo(Number(i.value))}),void 0,!0),i.id==="collage-field-radius"&&ae(o=>({...o,collageFieldRadius:Ho(Number(i.value))}),void 0,!0),i.id==="collage-field-inertia"&&ae(o=>({...o,collageFieldInertia:Lo(Number(i.value))}),void 0,!0),i.id==="collage-field-damp"&&ae(o=>({...o,collageFieldDamp:ma(Number(i.value))}),void 0,!0),i.id==="collage-field-max-v"&&ae(o=>({...o,collageFieldMaxV:No(Number(i.value))}),void 0,!0),i.id==="collage-field-scale-amp"&&ae(o=>({...o,collageFieldScaleAmp:Uo(Number(i.value))}),void 0,!0),i.id==="collage-field-min-scale"&&ae(o=>({...o,collageFieldMinScale:vi(Number(i.value))}),void 0,!0),i.id==="collage-field-max-scale"&&ae(o=>({...o,collageFieldMaxScale:bi(Number(i.value))}),void 0,!0),i.id==="collage-field-perturb"&&ae(o=>({...o,collageFieldPerturb:yi(Number(i.value))}),void 0,!0),i.id==="collage-field-warp"&&ae(o=>({...o,collageFieldWarp:wi(Number(i.value))}),void 0,!0),i.id==="collage-field-sparsity"&&ae(o=>({...o,collageFieldSparsity:ki(Number(i.value))}),void 0,!0),i.id==="collage-field-contrast"&&ae(o=>({...o,collageFieldContrast:Ti(Number(i.value))}),void 0,!0),i.id==="collage-field-motion"&&ae(o=>({...o,collageFieldMotion:_i(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-min"&&ae(o=>({...o,collageHuntWideMin:qa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-max"&&ae(o=>({...o,collageHuntWideMax:Da(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-min"&&ae(o=>({...o,collageHuntFollowMin:$a(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-max"&&ae(o=>({...o,collageHuntFollowMax:Wa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-snap"&&ae(o=>({...o,collageHuntSnap:ja(Number(i.value))}),void 0,!0),i.id==="collage-hunt-zoom"&&ae(o=>({...o,collageHuntZoom:Va(Number(i.value))}),void 0,!0),i.id==="collage-hunt-tight"&&ae(o=>({...o,collageHuntTight:Ga(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-min"&&ae(o=>({...o,collageHuntReactMin:Ka(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-max"&&ae(o=>({...o,collageHuntReactMax:Xa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-precision"&&ae(o=>({...o,collageHuntPrecision:Za(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-speed"&&ae(o=>({...o,collageHuntFocusSpeed:Qa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-error"&&ae(o=>({...o,collageHuntFocusError:Ya(Number(i.value))}),void 0,!0),i.id==="collage-hunt-variation"&&ae(o=>({...o,collageHuntVariation:Ja(Number(i.value))}),void 0,!0),i.id==="exp-q"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&F.setProject(o=>({...o,exportSettings:{...o.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Mo&&(Mo=!1,Xn(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),F.state.ui.dropActive||F.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&F.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),F.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Co(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),so(),F.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&fi(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&fi("all",!0),(e.key==="k"||e.key==="K")&&Ll(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Nl()),e.key==="?"&&F.patchUi({helpOpen:!F.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Hl()))})}function Rv(t,e){return ut(t)?.params.find(i=>i.id===e)}function zv(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Xn(t){const{project:e,ui:i}=F.state,a=t.querySelector("#proj-name"),o=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),o&&document.activeElement!==o&&(o.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const u=t.querySelector("#inc-fx");u&&(u.checked=i.includeEffects);const d=t.querySelector("#inc-fx-stack");d&&(d.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(m=>{m.classList.toggle("acid",!!e.cutEdit?.enabled)}),Ov(t.querySelector("#rail")),Hv(t.querySelector("#stack")),Nv(t.querySelector("#transport"))}function Ov(t){const e=F.project,i=F.state.ui,a=e.sources.find(o=>o.id===i.selectedSourceId&&ze(o.generator))??e.sources.find(o=>ze(o.generator));t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Je(i.prompt)}</textarea>
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
      ${Ft.map(o=>`<button class="btn tiny ${a?.collageKitB===o?"acid":""}" data-act="mash" data-kit="${o}">${m0(o)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${Di.map(o=>`<button class="btn tiny ${$i(a?.collageColorPack)===o?"acid":""}" data-act="color-pack" data-pack="${o}">${Jo[o]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${ni($t(a?.collageKit),a?.collageColorPack).map(o=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===o.toLowerCase()?"on":""}" data-act="wash" data-hex="${o}" style="background:${o}" title="${o}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${Li(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${Li(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${Ni(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${Ni(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${Pi(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${Pi(a?.collagePace).toFixed(2)}" />
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
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${Ai(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${Ai(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${Fi(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${Fi(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${Ii(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${Ii(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${Bi(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${Bi(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Animal Chain</div>
    <div class="row">
      ${eo.map(o=>`<button class="btn tiny ${Ri(a?.collageChainAnimal)===o?"acid":""}" data-act="chain-animal" data-animal="${o}">${vs[o]}</button>`).join("")}
    </div>`:""}
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, and camera.">Rand field</button>
    </div>
    ${a?.collageMove==="field"?`<div class="sec">Pattern</div>
    <div class="row">
      ${["auto","sunflower","rings","spiro","ripple","march","kaleido","shapeshift"].map(o=>`<button class="btn tiny ${Jt(a.collageFieldPattern)===o?"acid":""}" data-act="field-pattern" data-pattern="${o}">${va[o]}</button>`).join("")}
    </div>
    <div class="row">
      ${["vortex","orbit","weave","fan","braid","tiles","petal","coil"].map(o=>`<button class="btn tiny ${Jt(a.collageFieldPattern)===o?"acid":""}" data-act="field-pattern" data-pattern="${o}">${va[o]}</button>`).join("")}
    </div>
    <div class="row">
      ${["traffic","cascade","circuit","chevron","checker","shear","scan","snake"].map(o=>`<button class="btn tiny ${Jt(a.collageFieldPattern)===o?"acid":""}" data-act="field-pattern" data-pattern="${o}">${va[o]}</button>`).join("")}
    </div>
    ${se("collage-field-evolve","Tempo",mi(a.collageFieldEvolve),.08,2.2,.05)}
    ${se("collage-field-strength","Spread",hi(a.collageFieldStrength),.2,2.2,.05)}
    ${se("collage-field-density","Pack",pi(a.collageFieldDensity),0,2.2,.05)}
    ${se("collage-field-sparsity","Symmetry",ki(a.collageFieldSparsity),0,2,.05)}
    ${se("collage-field-perturb","Shuffle",yi(a.collageFieldPerturb),0,2,.05)}
    ${se("collage-field-curl","Swirl",gi(a.collageFieldCurl),0,2.2,.05)}
    ${se("collage-field-warp","Breathe",wi(a.collageFieldWarp),0,2.2,.05)}
    ${se("collage-field-motion","Ripple",_i(a.collageFieldMotion),0,2,.05)}
    ${se("collage-field-contrast","Size Contrast",Ti(a.collageFieldContrast),0,2.2,.05)}
    ${se("collage-field-min-scale","Stamp Size",vi(a.collageFieldMinScale),.12,1,.02)}
    ${se("collage-field-max-scale","Hero Size",bi(a.collageFieldMaxScale),.6,3.2,.05)}`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${se("collage-spring-strength","Spring Strength",ba(a.collageSpringStrength),.2,2.2,.05)}
    ${se("collage-spring-damp","Damping",ya(a.collageSpringDamp),.08,1,.02)}
    ${se("collage-spring-dist","Connection Distance",wa(a.collageSpringDist),.12,.72,.02)}
    ${se("collage-spring-elast","Elasticity",ka(a.collageSpringElast),.2,2.2,.05)}
    ${se("collage-spring-break","Break / Reconnect",Ta(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${se("collage-flow-scale","Field Scale",_a(a.collageFlowScale),.28,2.4,.05)}
    ${se("collage-flow-turb","Turbulence",xa(a.collageFlowTurb),0,2,.05)}
    ${se("collage-flow-evolve","Evolution Speed",Sa(a.collageFlowEvolve),.08,2.2,.05)}
    ${se("collage-flow-force","Force",Ca(a.collageFlowForce),.2,2.2,.05)}
    ${se("collage-flow-depth","Depth Influence",Ma(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${se("collage-boid-cohere","Cohesion",Ea(a.collageBoidCohere),.1,2.2,.05)}
    ${se("collage-boid-sep","Separation",Pa(a.collageBoidSep),.15,2.4,.05)}
    ${se("collage-boid-align","Alignment",Aa(a.collageBoidAlign),.1,2.2,.05)}
    ${se("collage-boid-radius","Perception Radius",Fa(a.collageBoidRadius),.08,.55,.01)}
    ${se("collage-boid-speed","Speed",Ia(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${se("collage-pole-count","Pole Count",Ba(a.collagePoleCount),1,5,1)}
    ${se("collage-pole-attract","Attraction",Ra(a.collagePoleAttract),.15,2.2,.05)}
    ${se("collage-pole-repel","Repulsion",za(a.collagePoleRepel),.1,2.2,.05)}
    ${se("collage-pole-speed","Pole Speed",Oa(a.collagePoleSpeed),.12,2.2,.05)}
    ${se("collage-pole-falloff","Falloff",Ha(a.collagePoleFalloff),.6,2.8,.05)}
    ${se("collage-pole-switch","Polarity Switching",La(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Camera</div>
    <div class="row">
      ${rs.map(o=>`<button class="btn tiny ${Ei(a?.collageCamera)===o?"acid":""}" data-act="camera" data-camera="${o}">${o==="hunt"?"Hunt":"Fixed"}</button>`).join("")}
    </div>
    ${Ei(a?.collageCamera)==="hunt"?`<div class="sec">Documentary Search</div>
    <div class="row">
      ${cs.map(o=>`<button class="btn tiny ${Ua(a?.collageHuntSelect)===o?"acid":""}" data-act="hunt-select" data-select="${o}">${o==="random"?"Random":o==="reactive"?"Reactive":"Mixed"}</button>`).join("")}
    </div>
    <div class="row">
      ${ls.map(o=>`<button class="btn tiny ${Na(a?.collageCameraFeel)===o?"acid":""}" data-act="camera-feel" data-feel="${o}">${o==="handheld"?"Handheld":"Perfect"}</button>`).join("")}
      <button class="btn tiny ${a?.collageHuntFocus?"acid":""}" data-act="hunt-focus">Manual Focus</button>
    </div>
    ${se("collage-hunt-wide-min","Wide / Search Duration Min",qa(a?.collageHuntWideMin),.4,12,.1)}
    ${se("collage-hunt-wide-max","Wide / Search Duration Max",Da(a?.collageHuntWideMax),.6,16,.1)}
    ${se("collage-hunt-follow-min","Subject Follow Duration Min",$a(a?.collageHuntFollowMin),.4,12,.1)}
    ${se("collage-hunt-follow-max","Subject Follow Duration Max",Wa(a?.collageHuntFollowMax),.6,16,.1)}
    ${se("collage-hunt-snap","Snap Zoom Speed",ja(a?.collageHuntSnap),.35,2.4,.05)}
    ${se("collage-hunt-zoom","Zoom Range / Close Framing",Va(a?.collageHuntZoom),.35,2.4,.05)}
    ${se("collage-hunt-tight","Tracking Tightness",Ga(a?.collageHuntTight),.12,1,.02)}
    ${se("collage-hunt-react-min","Reaction Time Min",Ka(a?.collageHuntReactMin),.04,1.4,.02)}
    ${se("collage-hunt-react-max","Reaction Time Max",Xa(a?.collageHuntReactMax),.08,2,.02)}
    ${se("collage-hunt-precision","Operator Precision",Za(a?.collageHuntPrecision),0,1,.02)}
    ${se("collage-hunt-variation","Behavior Variation",Ja(a?.collageHuntVariation),0,1,.02)}
    ${a?.collageHuntFocus?`${se("collage-hunt-focus-speed","Focus Correction Speed",Qa(a?.collageHuntFocusSpeed),.15,2.2,.05)}
    ${se("collage-hunt-focus-error","Focus Error Amount",Ya(a?.collageHuntFocusError),0,1.6,.05)}`:""}`:""}
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
    <div class="status" style="margin-top:4px">Each clip keeps one move. Rush / tunnel / gyre / well / hall / drift / braid / sway fly through depth so a big screen feels 3D. Field is one seamless stamp pattern on loop — no cuts. Matter moves are a spring mesh, a flowing current, a flock, or wandering magnets — each with its own sliders. Chain is a freeform 3D conga line. Drum / illusion locks to the tempo grid. Music punches glow, not the path.</div>
    <div style="margin-top:8px">
      ${e.sources.map(o=>{const n=o.kind==="audio"?`beat-sync · ${di(o.duration||0)}${o.bpm&&o.bpm>40?` · ${o.bpm}bpm`:""}`:`${o.kind} ${o.width}×${o.height}`,s=o.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${o.id}">use</button>`;return`
        <div class="thumb ${o.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${o.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Je(o.name)}</b><span>${n}</span></div>
          ${s}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${se("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${se("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${se("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${se("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${se("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${se("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(o=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Je(o.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${o.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${o.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${o.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Hv(t){const e=F.project,i=Pe(e),a=la(i),o=mh();t.innerHTML=`
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
      ${se("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${op.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${se("tr-x","X",i.transform.x,-1,1,.01)}
      ${se("tr-y","Y",i.transform.y,-1,1,.01)}
      ${se("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${se("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${se("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${se("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${se("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${se("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${se("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
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
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Je(ut(n.typeId)?.name??n.typeId)}</span>
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
        ${ph.map(n=>{const s=(o[n.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Je(ut(a.typeId)?.name??"params")} · ${Je(ut(a.typeId)?.description??"")}</div>
        ${(ut(a.typeId)?.params??[]).map(n=>Lv(i.id,a,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||je(i.id,c=>{const u=[...c.effects],[d]=u.splice(r,1);return u.splice(l,0,d),{...c,effects:u}})})})}function Lv(t,e,i){const a=e.params[i.id]??i.default,o=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${o} ${a?"checked":""}/> ${Je(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Je(i.label)}</span><input type="color" ${o} value="${Je(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Je(i.label)}</span>
      <select ${o}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===a?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Je(i.label)}</span>
    <input type="range" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Nv(t){const e=F.project,i=e.playback,a=e.exportSettings,o=F.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(r=>`<option ${i.mode===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      ${se("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${di(i.time)} / ${di(n)}</span>
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
        ${Wn.map(r=>`<button class="btn tiny ${U1(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        ${(()=>{const r=Math.max(a.width,a.height);return`<button class="btn tiny ${r<=Ht?"acid":""}" data-act="exp-size" data-long="${Ht}">720</button>
        <button class="btn tiny ${r>Ht?"acid":""}" data-act="exp-size" data-long="${Lt}">1080</button>`})()}
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
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*n;F.setProject(u=>({...u,playback:{...u.playback,time:Math.max(0,c)}}))})}function se(t,e,i,a,o,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${o}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${o}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function ui(){const t=F.project,e=t.sources.find(o=>o.id===F.state.ui.selectedSourceId);if(e&&ze(e.generator))return e;const i=Pe(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&ze(a.generator)?a:t.sources.find(o=>ze(o.generator))}function Uv(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,chainAnimal:t.collageChainAnimal,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,camera:t.collageCamera,cameraFeel:t.collageCameraFeel,huntWideMin:t.collageHuntWideMin,huntWideMax:t.collageHuntWideMax,huntFollowMin:t.collageHuntFollowMin,huntFollowMax:t.collageHuntFollowMax,huntSnap:t.collageHuntSnap,huntZoom:t.collageHuntZoom,huntTight:t.collageHuntTight,huntReactMin:t.collageHuntReactMin,huntReactMax:t.collageHuntReactMax,huntPrecision:t.collageHuntPrecision,huntSelect:t.collageHuntSelect,huntFocus:t.collageHuntFocus,huntFocusSpeed:t.collageHuntFocusSpeed,huntFocusError:t.collageHuntFocusError,huntVariation:t.collageHuntVariation,fieldStrength:t.collageFieldStrength,fieldScale:t.collageFieldScale,fieldEvolve:t.collageFieldEvolve,fieldDensity:t.collageFieldDensity,fieldDensityScale:t.collageFieldDensityScale,fieldDensityEvolve:t.collageFieldDensityEvolve,fieldFlow:t.collageFieldFlow,fieldCurl:t.collageFieldCurl,fieldFlowScale:t.collageFieldFlowScale,fieldAttract:t.collageFieldAttract,fieldRepel:t.collageFieldRepel,fieldRadius:t.collageFieldRadius,fieldInertia:t.collageFieldInertia,fieldDamp:t.collageFieldDamp,fieldMaxV:t.collageFieldMaxV,fieldScaleAmp:t.collageFieldScaleAmp,fieldMinScale:t.collageFieldMinScale,fieldMaxScale:t.collageFieldMaxScale,fieldPerturb:t.collageFieldPerturb,fieldWarp:t.collageFieldWarp,fieldSparsity:t.collageFieldSparsity,fieldContrast:t.collageFieldContrast,fieldMotion:t.collageFieldMotion,fieldPattern:t.collageFieldPattern,wash:e?t.colorA:void 0}}function Ul(t){return!t.collageKit||!t.collageMove?t:{...t,name:Ls(t.collageMove,t.collageKit,t.collageKitB,t.collageChainAnimal)}}function ae(t,e,i=!1){const a=ui();return a?(F.setProject(o=>({...o,sources:o.sources.map(n=>n.id===a.id?t(n):n)}),!i),e&&F.patchUi({status:e},!i),!0):!1}function Je(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function di(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function ql(t,e){if(F.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),o=Math.max(16,Math.floor(a.width*i)),n=Math.max(16,Math.floor(a.height*i));(t.width!==o||t.height!==n)&&(t.width=o,t.height=n)}function qv(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${di(i)}  ${e.toFixed(0)}FPS  ${F.project.quality.toUpperCase()}`);const o=Math.max(F.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/o*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${di(i)} / ${di(o)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=F.state.ui.status)}const Dl=window;Dl.__phospheneMark=!0;const $l=document.querySelector("#app");if(!$l)throw new Error("#app missing");const Zn=$l,Qn=document.createElement("canvas");async function Dv(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new Km(Qn)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:Zn.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}Fv(Zn,t),Dl.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>ql(Qn,e)).observe(e),ql(Qn,e);let a=performance.now(),o=60,n=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const u=F.state.ui.exporting,d=F.project,m=Uh(d,d.playback.time),f=Wi(d);if(!u&&d.playback.playing&&!d.playback.freeze){const g=f?.audio&&d.playback.mode==="forward"&&!f.audio.paused&&Number.isFinite(f.audio.currentTime);if(f?.audio&&hn(f.audio,d.playback),g){const h=f.audio.currentTime;F.setProject(p=>({...p,playback:{...p.playback,time:h}}),!1)}else{let h=d.playback.time+c*m;const p=Math.max(d.duration,.001);d.playback.loop?h=(h%p+p)%p:h=Math.min(h,p),F.setProject(v=>({...v,playback:{...v.playback,time:h}}),!1),f?.audio&&d.playback.mode!=="forward"&&hn(f.audio,{...d.playback,playing:!1,time:h})}}else f?.audio&&hn(f.audio,{...d.playback,playing:!1});for(const g of F.project.sources)if(g.kind==="video"&&g.video&&!F.project.playback.freeze){const h=cn(F.project.playback.time,g.duration||g.video.duration||1,F.project.playback.mode,1,F.project.playback.loop);ap(g,h,{playing:F.project.playback.playing,freeze:F.project.playback.freeze,mode:F.project.playback.mode,speed:F.project.playback.speed})}if(!u)try{t.render(F.project,F.project.playback.time),t.cutStatus&&t.cutStatus!==F.state.ui.status&&F.patchUi({status:t.cutStatus},!1)}catch(g){F.patchUi({status:g instanceof Error?g.message:"render error"},!1)}n++,l-s>400&&(o=n*1e3/(l-s),s=l,n=0),qv(Zn,o,F.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}Dv()})();

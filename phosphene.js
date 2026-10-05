(function(){"use strict";function ye(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function I(t,e,i){return Math.min(i,Math.max(e,t))}function ot(t,e=16){return Math.max(e,Math.round(t)&-2)}function Vn(t,e,i,a){const o=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:ot(t*o),height:ot(e*o)}}function Oe(t,e,i){return t+(e-t)*i}function Hl(t){const e=I(t,0,1);return e*e*(3-2*e)}const Ll="field";function Rt(t){return t===Ll}function ci(t){return I(t??1.15,.2,2.2)}function To(t){return I(t??.95,.28,2.4)}function fi(t){return I(t??1,.08,2.2)}function ui(t){return I(t??1.15,0,2.2)}function _o(t){return I(t??.9,.28,2.4)}function So(t){return I(t??1.1,.08,2.2)}function xo(t){return I(t??.85,0,2.2)}function di(t){return I(t??.4,0,2.2)}function Co(t){return I(t??.8,.28,2.4)}function Mo(t){return I(t??.35,0,2.2)}function Eo(t){return I(t??.9,0,2.4)}function Po(t){return I(t??.055,.02,.22)}function Fo(t){return I(t??.55,.25,2.2)}function la(t){return I(t??0,0,.9)}function Ao(t){return I(t??1.15,.25,2.2)}function Io(t){return I(t??.85,0,2.2)}function hi(t){return I(t??.62,.12,1)}function mi(t){return I(t??1.85,.6,3.2)}function pi(t){return I(t??.12,0,2)}function gi(t){return I(t??1.1,0,2.2)}function vi(t){return I(t??.85,0,2)}function bi(t){return I(t??1.25,0,2.2)}function yi(t){return I(t??.45,0,2)}function Nl(t){const e=hi(t?.minScale),i=Math.max(e+.08,mi(t?.maxScale));return{fieldStrength:ci(t?.fieldStrength),fieldScale:To(t?.fieldScale),fieldEvolve:fi(t?.fieldEvolve),density:ui(t?.density),densityScale:_o(t?.densityScale),densityEvolve:So(t?.densityEvolve),flow:xo(t?.flow),curl:di(t?.curl),flowScale:Co(t?.flowScale),attract:Mo(t?.attract),repel:Eo(t?.repel),radius:Po(t?.radius),inertia:Fo(t?.inertia),damp:la(t?.damp),maxV:Ao(t?.maxV),scaleAmp:Io(t?.scaleAmp),minScale:e,maxScale:i,perturb:pi(t?.perturb),warp:gi(t?.warp),sparsity:vi(t?.sparsity),contrast:bi(t?.contrast),motion:yi(t?.motion)}}const Gn=1.6,Bo=2.399963229728653,He=Math.PI*2,Ul=6,Xt=["sunflower","rings","spiro","ripple","march","kaleido","shapeshift"],Kn={auto:"Auto",sunflower:"Sunflower",rings:"Rings",spiro:"Spirograph",ripple:"Ripple",march:"March",kaleido:"Kaleido",shapeshift:"Shapeshift"};function ca(t){return Xt.includes(t??"")?t:"auto"}function ql(t,e){const i=ca(t);return i!=="auto"?i:Xt[(Math.imul(e>>>0^1540483477,2654435761)>>>0)%Xt.length]}function Dl(t,e=0){let i=Ul/t.fieldEvolve;if(e>40){const a=240/e;let o=1;for(const n of[1,2,4,8,16,32])Math.abs(Math.log(n*a/i))<Math.abs(Math.log(o*a/i))&&(o=n);i=o*a}return i}function $l(t,e,i=0,a=0){const n=(i>40?t-a:t)/Dl(e,i);return n-Math.floor(n)}const Wl=["sheet","bands","bloom"],Ro=["glyph","clusters","line","giants"];function zo(t){return t*t*t*(t*(t*6-15)+10)}function Oo(t,e,i){let a=0;for(const n of i)a+=n;let o=t()*a;for(let n=0;n<e.length;n++)if(o-=i[n],o<=0)return e[n];return e[e.length-1]}function jl(t){const e=ye((t>>>0)*31+7>>>0),i=Oo(e,Wl,[.5,.25,.25]),a=[.4,.3,.15,.15],o=Oo(e,Ro,a),n=Oo(e,Ro,a.map((s,r)=>Ro[r]===o?0:s));return[i,o,n]}function Vl(t,e){let a,o,n=0,s=I(Math.floor(t*1023),0,1023),r=I(Math.floor(e*1023),0,1023);for(let l=1024/2;l>=1;l=Math.floor(l/2))if(a=(s&l)>0?1:0,o=(r&l)>0?1:0,n+=l*l*(3*a^o),o===0){a===1&&(s=l-1-s,r=l-1-r);const c=s;s=r,r=c}return n/(1024*1024)}function Gl(){return{x:[],y:[],d:[]}}function zt(t,e,i,a){t.x.push(e),t.y.push(i),t.d.push(a)}function wi(t,e){const i=1+(t()-.5)*.55*e.contrast;return t()<.07*e.contrast?i*(1.5+t()*.6):i}function De(t){return .86+t.density*.2}function Kl(t,e,i,a,o){const n=2*i,s=Math.sqrt(n/(e*.92)),r=Math.max(2,Math.round(1/s)),l=Math.max(2,Math.ceil(e/r)),c=1/r,u=2*i/l,d=[];for(let f=0;f<l;f++)for(let p=0;p<r;p++){const h=f%2*.5,g=-.5+(p+.5+h*.6)*c+(t()-.5)*c*.22,v=-i+(f+.5)*u+(t()-.5)*u*.22;d.push([g,v])}for(;d.length>e;)d.splice(Math.floor(t()*d.length),1);const m=Math.max(c,u)*1.1*De(a)*(a.minScale/.62);for(const[f,p]of d)zt(o,f,p,m*wi(t,a))}function Xl(t,e,i,a,o){const n=3+Math.floor(t()*4),s=(t()-.5)*.5,r=.02+t()*.05,l=4+t()*6,c=Math.ceil(e/n),u=2,m=1.04/Math.ceil(c/u),f=2*i/n,p=Math.min(m*1.25,f*.48)*De(a)*(a.minScale/.62);let h=0;for(let g=0;g<n&&h<e;g++){const v=-i+(g+.5)*f,y=t()*Math.PI*2;for(let b=0;b<c&&h<e;b++,h++){const T=Math.floor(b/u),_=b%u,M=-.52+(T+.5+_*.5)*m,E=v+(_-.5)*p*.78+M*s+Math.sin(M*l+y)*r;zt(o,M,E,p*wi(t,a))}}}function Zl(t,e,i,a,o){const n=t()>.6,s=n?2:1,l=Math.min(.5/s,i)*(.82+a.fieldStrength*.12)/Math.sqrt(e/s),c=l*1.4*De(a)*(a.minScale/.62),u=t()*Math.PI*2;for(let d=0;d<e;d++){const m=n?d%2:0,f=n?Math.floor(d/2):d,p=n?m===0?-.25:.25:0,h=l*Math.sqrt(f+.5),g=f*Bo*(m===0?1:-1)+u,v=.72+.5*Math.sqrt((f+.5)/(e/s));zt(o,p+Math.cos(g)*h,Math.sin(g)*h,c*v*wi(t,a))}}function Ho(t,e){const i=1-e,a=i*i*i*t[0]+3*i*i*e*t[2]+3*i*e*e*t[4]+e*e*e*t[6],o=i*i*i*t[1]+3*i*i*e*t[3]+3*i*e*e*t[5]+e*e*e*t[7],n=3*i*i*(t[2]-t[0])+6*i*e*(t[4]-t[2])+3*e*e*(t[6]-t[4]),s=3*i*i*(t[3]-t[1])+6*i*e*(t[5]-t[3])+3*e*e*(t[7]-t[5]);return[a,o,n,s]}function Ql(t){let e=0,[i,a]=Ho(t,0);for(let o=1;o<=24;o++){const[n,s]=Ho(t,o/24);e+=Math.hypot(n-i,s-a),i=n,a=s}return e}function Xn(t,e,i,a,o,n,s){const r=e.map(Ql),l=r.reduce((d,m)=>d+m,0)||1,c=o*De(n);let u=0;for(let d=0;d<e.length;d++){const m=d===e.length-1?a-u:Math.round(a*r[d]/l);if(m<=0)continue;const f=Math.max(1,Math.round(i(d)/(c*.74))),p=Math.max(1,Math.ceil(m/f));for(let h=0;h<m;h++){const g=Math.floor(h/f),v=h%f,y=(g+.5+v%2*.35)/p,[b,T,_,M]=Ho(e[d],Math.min(1,y)),E=Math.hypot(_,M)||1,P=1-.55*Math.pow(Math.abs(2*y-1),3),F=(v-(f-1)/2)*c*.74*P;zt(s,b-M/E*F,T+_/E*F,c*(.7+.3*P)*wi(t,n))}u+=m}}function Yl(t,e,i,a,o){const n=3+Math.floor(t()*3),s=.4*(.72+a.fieldStrength*.24),r=i*.92*(.72+a.fieldStrength*.24),l=[];for(let u=0;u<n;u++){const d=(t()*2-1)*s,m=(t()*2-1)*r,f=t()*Math.PI*2,p=.36+t()*.4,h=I(d+Math.cos(f)*p,-s*1.1,s*1.1),g=I(m+Math.sin(f)*p,-r*1.1,r*1.1),v=(t()-.5)*.36,y=-(g-m),b=h-d;l.push([d,m,d+(h-d)*.33+y*v,m+(g-m)*.33+b*v,d+(h-d)*.66+y*v*(t()>.5?1:-.6),m+(g-m)*.66+b*v*(t()>.5?1:-.6),h,g])}const c=l.map(()=>.09+t()*.08);Xn(t,l,u=>c[u],e,.036*(a.minScale/.62),a,o)}function Jl(t,e,i,a,o){const n=t()>.55?2:1,s=[];for(let r=0;r<n;r++){const l=(t()*2-1)*i*.7,c=(t()*2-1)*i*.7,u=(t()-.5)*i*2.4*(.6+a.fieldStrength*.35);s.push([-.46,l,-.16,l+u,.16,c-u,.46,c])}Xn(t,s,()=>.05,e,.03*(a.minScale/.62),a,o)}function ec(t,e,i,a,o){const n=4+Math.floor(t()*6),s=[],r=.16;for(let p=0;s.length<n&&p<400;p++){const h=(t()*2-1)*.4,g=(t()*2-1)*i*.8;s.every(([v,y])=>Math.hypot(v-h,y-g)>r)&&s.push([h,g])}const l=s.map(()=>.4+t()),c=l.reduce((p,h)=>p+h,0),u=2*i*.3*(.6+a.fieldStrength*.35),d=Math.sqrt(u/e)*1.25*De(a),m=d*.56;let f=0;for(let p=0;p<s.length;p++){const h=p===s.length-1?e-f:Math.round(e*l[p]/c),g=1+(t()-.5)*.6,v=t()*Math.PI*2;for(let y=0;y<h;y++){const b=m*Math.sqrt(y+.5),T=y*Bo+v;zt(o,s[p][0]+Math.cos(T)*b*g,s[p][1]+Math.sin(T)*b/g,d*wi(t,a))}f+=h}}function tc(t,e,i,a,o){const n=I(6+Math.floor(t()*9),3,e),s=Math.max(2,Math.round(Math.sqrt(n/(2*i)))),r=Math.max(1,Math.ceil(n/s)),l=.9/s,c=2*i*.86/r,u=Math.min(l,c)*.95*(a.maxScale/1.85),d=e/n;for(let m=0;m<n;m++){const f=m%s,p=Math.floor(m/s),h=-.45+(f+.5+p%2*.35)*l+(t()-.5)*l*.55,g=-i*.86+(p+.5)*c+(t()-.5)*c*.5,v=Math.round(m*d),y=Math.round((m+1)*d);for(let b=v;b<y;b++)zt(o,h,g,b===v?u*(.82+t()*.3):0)}}const ic={sheet:Kl,bands:Xl,bloom:Zl,glyph:Yl,clusters:ec,giants:tc,line:Jl};function ac(t,e,i,a,o,n){const s=ye((e>>>0^Math.imul(i+1,2654435761))>>>0),r=Gl();for(ic[t](s,a,o,n,r);r.x.length<a;)zt(r,r.x[r.x.length-1]??0,r.y[r.y.length-1]??0,0);const l=n.perturb*.22,c=r.x.map((m,f)=>Vl(m+.5,(r.y[f]+o)/Math.max(1,2*o))+l*(s()-.5)),u=c.map((m,f)=>f).sort((m,f)=>c[m]-c[f]),d={kind:t,x:new Float32Array(a),y:new Float32Array(a),d:new Float32Array(a),bend:t==="glyph"?.028*n.warp:t==="line"?.034*n.warp:.006,phase:s()*Math.PI*2};for(let m=0;m<a;m++){const f=u[m];d.x[m]=I(r.x[f],-.5,.5),d.y[m]=I(r.y[f],-o,o),d.d[m]=r.d[f]}return d}function nt(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Ot(t){return t.minScale/.62}function Zt(t,e){const i=1+(nt(t*3.1+7)-.5)*.5*e.contrast,a=nt(t*5.7+3)<.035*e.contrast?e.maxScale/1.85*(1.5+nt(t*2.3+1)*.5):1;return i*a}function ki(t,e,i){return nt(t*9.13+1)<i.perturb*.5?t:e}function Qt(t){return(nt(t+17)-.5)*.14}function Lo(t){return Math.round(I(3+t.sparsity*2.4,3,9))}function oc(t,e){const{n:i,R:a,th:o,p:n,seed:s}=t,l=a*(.62+n.fieldStrength*.36)/Math.sqrt(i),c=l*2.1*De(n)*Ot(n),u=Bo+n.curl*.006*Math.sin(o),d=s%2?o:-o,m=[8,13,21][s%3];for(let f=0;f<i;f++){const p=(f+.5)/i,h=Math.sin(o*2-p*He*1.5),g=l*Math.sqrt(f+.5)*(1+n.warp*.06*h),v=f*u+d,y=c*(.55+.75*Math.sqrt(p))*(1+n.motion*.35*h)*Zt(f,n);e(f,Math.cos(v)*g,Math.sin(v)*g,y,Qt(f),ki(f,f%m,n))}}function nc(t,e){const{n:i,R:a,th:o,p:n,seed:s}=t,r=Math.round(I(4+n.fieldStrength*3.5,3,12)),l=a*1.02,c=Array.from({length:r},(g,v)=>l*(v+.75)/(r+.25)),u=c.reduce((g,v)=>g+v,0),d=l/r,m=Math.min(He*u/i,d)*1.25*De(n)*Ot(n),f=Lo(n),p=nt(s%997)*He;let h=0;for(let g=0;g<r&&h<i;g++){const v=g===r-1?i-h:Math.max(3,Math.round(i*c[g]/u)),y=g%2?1:-1,b=1+Math.round(n.curl*2*(1-g/r)),T=Math.sin(o-g*.8),_=c[g]*(1+n.warp*.045*T);for(let M=0;M<v&&h<i;M++,h++){const E=M/v*He+y*b*o+g*p,P=_+n.motion*d*.35*Math.sin(f*E-o*2),F=m*(1+n.motion*.2*T)*Zt(h,n);e(h,Math.cos(E)*P,Math.sin(E)*P,F,Qt(h),ki(h,g*2+M%2,n))}}}function sc(t,e){const{n:i,hh:a,th:o,u:n,p:s}=t,r=Lo(s),l=I(.42+s.warp*.1*Math.sin(o),.1,.8),c=Math.min(a*.94,.47),u=Math.min(.47,c*1.75),d=[1,.56].map(g=>g*(.7+s.fieldStrength*.26)),m=d.reduce((g,v)=>g+v,0),f=2,p=(g,v)=>[(Math.cos(g)+l*Math.cos((r-1)*g))/(1+l)*u*v,(Math.sin(g)-l*Math.sin((r-1)*g))/(1+l)*c*v];let h=0;for(let g=0;g<d.length&&h<i;g++){const v=d[g],y=g===d.length-1?i-h:Math.round(i*v/m),b=Math.max(1,Math.ceil(y/f));let T=0,[_,M]=p(0,v);for(let F=1;F<=96;F++){const[z,q]=p(F/96*He,v);T+=Math.hypot(z-_,q-M),_=z,M=q}const E=Math.min(.09,T/b*1.35*De(s)*Ot(s)),P=g%2?-1:1;for(let F=0;F<y&&h<i;F++,h++){const z=Math.floor(F/f),q=F%f,x=(z+q*.5)/b+P*n,R=(x-Math.floor(x))*He+g*.7,[k,U]=p(R,v),[G,O]=p(R+.002,v),ae=Math.hypot(G-k,O-U)||1,W=(q-.5)*E*.8*(1+s.curl*.6*Math.sin(r*R+o*2));e(h,k-(O-U)/ae*W,U+(G-k)/ae*W,E*Zt(h,s),Qt(h),ki(h,g*3+z%3,s))}}}function rc(t,e){const{n:i,hh:a,R:o,th:n,p:s,seed:r}=t,l=1.1,c=2*a*1.1,u=Math.sqrt(l*c/i),d=Math.max(2,Math.round(l/u)),m=Math.max(2,Math.ceil(i/d)),f=l/d,p=c/m,h=Math.max(f,p)*1.05*De(s)*Ot(s),g=r%3,v=nt(r%991)*He,y=g===2?[[-.24,0],[.24,0]]:[[0,0]],b=He*(2+s.fieldStrength*1.3)/o,T=Math.min(f,p)*(.25+s.motion*.9)/y.length,_=s.curl*.8;let M=0;for(let E=0;E<m&&M<i;E++)for(let P=0;P<d&&M<i;P++,M++){const F=-l/2+(P+.25+E%2*.5)*f,z=-c/2+(E+.5)*p;let q=0,x=0,R=0;const k=(G,O,ae)=>{const W=b*G-n*2,te=Math.sin(W),N=Math.cos(W);q+=T*(te*O-_*N*ae),x+=T*(te*ae+_*N*O),R+=te/y.length};if(g===1)k(F*Math.cos(v)+z*Math.sin(v),Math.cos(v),Math.sin(v));else for(const[G,O]of y){const ae=F-G,W=z-O,te=Math.hypot(ae,W)||1e-6;k(te,ae/te,W/te)}const U=h*(1+.4*s.warp*R)*Zt(M,s);e(M,F+q,z+x,U,Qt(M),ki(M,(E+P)%3+3*(E%2),s))}}function lc(t,e){const{n:i,hh:a,u:o,th:n,p:s,seed:r}=t,l=2*a*1.04,c=Math.sqrt(1.1*l/i),u=Math.max(2,Math.round(l/c)),d=Math.max(3,Math.ceil(i/u)),m=l/u,f=m*1.1*De(s)*Ot(s)*Gn*.6+.02,p=Math.max(d*c,1+2*f),h=Math.min(m,p/d)*1.1*De(s)*Ot(s),g=s.curl*.25*(r%2?1:-1);let v=0;for(let y=0;y<u&&v<i;y++){const b=y%2?1:-1,T=-l/2+(y+.5)*m;for(let _=0;_<d&&v<i;_++,v++){const M=(_+.5)/d+b*o,E=(M-Math.floor(M)-.5)*p,P=Math.sin(E/p*He*2+n*2+y*.6),F=T+P*m*.45*s.motion+E*g,z=h*(1+s.warp*.18*Math.sin(E/p*He*3-n*3))*Zt(v,s);e(v,E,F,z,Qt(v),ki(v,y*2+_%2,s))}}}function cc(t,e){const{n:i,R:a,u:o,th:n,p:s,seed:r}=t,l=Lo(s)+1,c=Math.PI/l,u=Math.max(1,Math.floor(i/(2*l))),d=a*(.6+s.fieldStrength*.18),m=He/l*o*(r%2?1:-1),f=d*Math.sqrt(c/(2*u))*1.2*De(s)*Ot(s);let p=0;for(let h=0;h<u;h++){const g=nt(h*1.7+.3)+o,v=g-Math.floor(g),y=Math.sqrt(v)*d,b=Math.sin(nt(h*4.1+2)*He+n+v*5),T=c*(.5+.42*b)+s.curl*v*1.6,_=zo(I(v/.06,0,1))*zo(I((1-v)/.08,0,1)),M=f*(.5+.9*v)*_*(1+s.motion*.3*Math.sin(n*2+h))*Zt(h,s);for(let E=0;E<l;E++){const P=E*2*c+m,F=P+T,z=P-T,q=F+Math.PI/2;e(p++,Math.cos(F)*y,Math.sin(F)*y,M,q,h),e(p++,Math.cos(z)*y,Math.sin(z)*y,M,2*P-q+Math.PI,h,-1)}}}function Zn(t,e,i,a,o){const n=t.bend+a.motion*.008;if(n<=0)return[t.x[e],t.y[e]];const s=t.x[e],r=t.y[e];return[s+n*Math.sin(r*4.2+i+t.phase)+n*.4*Math.sin(s*2.3-i),r+n*Math.cos(s*3.6+i+t.phase*1.3)*Math.min(1,o*2)]}function fc(t,e,i){const{n:a,hh:o,u:n,th:s,p:r}=t,l=Math.min(2,Math.floor(n*3)),c=zo(I((n*3-l-.3)/.7,0,1)),u=e[l],d=e[(l+1)%3],m=r.curl*.24;for(let f=0;f<a;f++){const[p,h]=Zn(u,f,s*2,r,o),[g,v]=Zn(d,f,s*2,r,o),y=g-p,b=v-h,T=m*Math.sin(Math.PI*c)*(nt(f)>.5?1:-1);i(f,p+y*c-b*T,h+b*c+y*T,u.d[f]+(d.d[f]-u.d[f])*c,Qt(f),f)}}class uc{sig="";shapes=[];poses=[];posesAt(e,i,a,o,n,s=0,r=0,l="auto"){const c=Math.max(.2,o),u=.5/c,d=ql(l,a),m=$l(i,n,s,r),f={n:e,hh:u,R:Math.hypot(.5,u),u:m,th:m*He,seed:a>>>0,p:n};this.poses.length!==e&&(this.poses=Array.from({length:e},()=>({x:0,y:0,px:0,rot:0,alpha:0,squash:1})));for(const v of this.poses)v.alpha=0;const p=Math.max(1,c),h=c*c,g=(v,y,b,T,_,M,E=1)=>{const P=this.poses[v];P&&(P.x=y,P.y=b*h,P.px=Math.max(0,T)*p*Gn,P.rot=_,P.alpha=T>.004?1:0,P.squash=1,P.flip=E,P.charge=M)};if(d==="sunflower")oc(f,g);else if(d==="rings")nc(f,g);else if(d==="spiro")sc(f,g);else if(d==="ripple")rc(f,g);else if(d==="march")lc(f,g);else if(d==="kaleido")cc(f,g);else{const v=`${a}|${e}|${c.toFixed(3)}|${Object.values(n).map(y=>y.toFixed(3)).join(",")}`;v!==this.sig&&(this.sig=v,this.shapes=jl(a).map((y,b)=>ac(y,a,b,e,u,n))),fc(f,this.shapes,g)}return this.poses}}const dc=["spring","flow","boids","poles"];function No(t){return!!t&&dc.includes(t)}function fa(t){return I(t??1,.2,2.2)}function ua(t){return I(t??.55,.08,1)}function da(t){return I(t??.34,.12,.72)}function ha(t){return I(t??1,.2,2.2)}function ma(t){return I(t??2.1,1.15,3.6)}function pa(t){return I(t??1,.28,2.4)}function ga(t){return I(t??.8,0,2)}function va(t){return I(t??.7,.08,2.2)}function ba(t){return I(t??1,.2,2.2)}function ya(t){return I(t??.7,0,1.6)}function wa(t){return I(t??1,.1,2.2)}function ka(t){return I(t??1,.15,2.4)}function Ta(t){return I(t??1,.1,2.2)}function _a(t){return I(t??.22,.08,.55)}function Sa(t){return I(t??1,.25,2.2)}function xa(t){return I(Math.round(t??3),1,5)}function Ca(t){return I(t??1,.15,2.2)}function Ma(t){return I(t??.85,.1,2.2)}function Ea(t){return I(t??.8,.12,2.2)}function Pa(t){return I(t??1.4,.6,2.8)}function Fa(t){return I(t??.45,0,2)}function hc(t){return{springStrength:fa(t?.springStrength),springDamp:ua(t?.springDamp),springDist:da(t?.springDist),springElast:ha(t?.springElast),springBreak:ma(t?.springBreak),flowScale:pa(t?.flowScale),flowTurb:ga(t?.flowTurb),flowEvolve:va(t?.flowEvolve),flowForce:ba(t?.flowForce),flowDepth:ya(t?.flowDepth),boidCohere:wa(t?.boidCohere),boidSep:ka(t?.boidSep),boidAlign:Ta(t?.boidAlign),boidRadius:_a(t?.boidRadius),boidSpeed:Sa(t?.boidSpeed),poleCount:xa(t?.poleCount),poleAttract:Ca(t?.poleAttract),poleRepel:Ma(t?.poleRepel),poleSpeed:Ea(t?.poleSpeed),poleFalloff:Pa(t?.poleFalloff),poleSwitch:Fa(t?.poleSwitch)}}function mc(t,e,i,a,o,n,s){const r=o*3.15,l=a,c=n;let u=Math.sin(e*r+l*1.07+i*.35)+Math.cos(i*r*.7+l*.62)*.45+c*.55*Math.sin(e*r*2.15+t*r*.4+l*1.73),d=Math.cos(t*r+l*.91+i*.28)+Math.sin(i*r*.65+l*.48)*.42+c*.55*Math.cos(t*r*2.28+e*r*.35+l*1.41),m=(Math.sin(t*r*.82+e*r*.74+l*.57)+c*.4*Math.cos(t*r*1.6+l*1.1))*s;const f=Math.hypot(u,d,m)||1;return[u/f,d/f,m/f]}function pc(t,e,i,a){const o=i*(.42+t*.15),n=Math.sin(e*o+t*1.3)*.34+Math.sin(e*o*.37+t)*.08,s=Math.cos(e*o*.86+t*1.9)*.28+Math.cos(e*o*.29+t*.7)*.07,r=Math.sin(e*o*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:n,y:s,z:r,sign:c}}function gc(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function vc(t,e,i,a){const o=e.length,n={move:t,n:o,lastClock:i,px:new Float32Array(o),py:new Float32Array(o),pz:new Float32Array(o),vx:new Float32Array(o),vy:new Float32Array(o),vz:new Float32Array(o),homeX:new Float32Array(o),homeY:new Float32Array(o),homeZ:new Float32Array(o),links:[],linkKey:""};for(let s=0;s<o;s++){const[r,l,c]=gc(e[s]);n.px[s]=r,n.py[s]=l,n.pz[s]=c,n.homeX[s]=r,n.homeY[s]=l,n.homeZ[s]=c,n.vx[s]=(e[s].vx-.5)*.08,n.vy[s]=(e[s].vy-.5)*.08,n.vz[s]=0}return t==="spring"&&Qn(n,a.springDist),n}function Qn(t,e,i=5){const a=t.n,o=[],n=new Set;for(let s=0;s<a;s++){const r=[];for(let l=0;l<a;l++){if(s===l)continue;const c=Math.hypot(t.px[s]-t.px[l],t.py[s]-t.py[l],t.pz[s]-t.pz[l]);c<e&&r.push({j:l,d:c})}r.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,r.length);l++){const c=r[l].j,u=Math.min(s,c),d=Math.max(s,c),m=`${u}:${d}`;n.has(m)||(n.add(m),o.push({a:u,b:d,rest:Math.max(.04,r[l].d),on:!0}))}}return t.links=o,t.linkKey=`${a}|${e.toFixed(3)}`,o}function $e(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function bc(t,e,i,a){const o=t.n,n=`${o}|${a.springDist.toFixed(3)}`;t.linkKey!==n&&Qn(t,a.springDist);const s=a.springStrength*(1.15+(2.2-a.springElast)*.55),r=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,u=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const f of t.links){const p=t.px[f.b]-t.px[f.a],h=t.py[f.b]-t.py[f.a],g=t.pz[f.b]-t.pz[f.a],v=Math.hypot(p,h,g)||1e-5;if(f.on&&v>f.rest*l){f.on=!1;continue}if(!f.on&&v<a.springDist*.92&&(f.on=!0),!f.on)continue;const y=v-f.rest,b=s*y,T=p/v,_=h/v,M=g/v;t.vx[f.a]+=T*b*e,t.vy[f.a]+=_*b*e,t.vz[f.a]+=M*b*e,t.vx[f.b]-=T*b*e,t.vy[f.b]-=_*b*e,t.vz[f.b]-=M*b*e}const m=Math.exp(-r*7*e);for(let f=0;f<o;f++){const p=t.homeX[f]-t.px[f],h=t.homeY[f]-t.py[f],g=t.homeZ[f]-t.pz[f];t.vx[f]+=p*.35*e,t.vy[f]+=h*.35*e,t.vz[f]+=g*.35*e;const v=Math.hypot(t.px[f]-c,t.py[f]-u,t.pz[f]-d);if(v<.24){const y=(.24-v)/.24;t.vx[f]+=(c-t.px[f])*y*1.8*e,t.vy[f]+=(u-t.py[f])*y*1.8*e,t.vz[f]+=(d-t.pz[f])*y*1.1*e}t.vx[f]*=m,t.vy[f]*=m,t.vz[f]*=m,t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=$e(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=$e(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=$e(t.pz[f],t.vz[f],.36)}}function yc(t,e,i,a){const o=i*a.flowEvolve,n=a.flowForce*.95;for(let s=0;s<t.n;s++){const[r,l,c]=mc(t.px[s],t.py[s],t.pz[s],o,a.flowScale,a.flowTurb,a.flowDepth);t.vx[s]+=r*n*e,t.vy[s]+=l*n*e,t.vz[s]+=c*n*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.7,[t.px[s],t.vx[s]]=$e(t.px[s],t.vx[s],.5),[t.py[s],t.vy[s]]=$e(t.py[s],t.vy[s],.42),[t.pz[s],t.vz[s]]=$e(t.pz[s],t.vz[s],.34)}}function wc(t,e,i){const a=t.n,o=i.boidRadius,n=o*o,s=.18+i.boidSpeed*.28,r=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let u=0;u<a;u++){let d=0,m=0,f=0,p=0,h=0,g=0,v=0,y=0,b=0,T=0;for(let _=0;_<a;_++){if(u===_)continue;const M=t.px[_]-t.px[u],E=t.py[_]-t.py[u],P=t.pz[_]-t.pz[u],F=M*M+E*E+P*P;if(F>n||F<1e-8)continue;T++,d+=t.px[_],m+=t.py[_],f+=t.pz[_],v+=t.vx[_],y+=t.vy[_],b+=t.vz[_];const z=Math.sqrt(F),q=(o-z)/o;p-=M/z*q,h-=E/z*q,g-=P/z*q}T&&(r[u]+=(d/T-t.px[u])*i.boidCohere*1.15,l[u]+=(m/T-t.py[u])*i.boidCohere*1.15,c[u]+=(f/T-t.pz[u])*i.boidCohere*1.15,r[u]+=p*i.boidSep*1.8,l[u]+=h*i.boidSep*1.8,c[u]+=g*i.boidSep*1.8,r[u]+=(v/T-t.vx[u])*i.boidAlign*1.35,l[u]+=(y/T-t.vy[u])*i.boidAlign*1.35,c[u]+=(b/T-t.vz[u])*i.boidAlign*1.35),r[u]+=-t.px[u]*.22,l[u]+=-t.py[u]*.22,c[u]+=-t.pz[u]*.18}for(let u=0;u<a;u++){t.vx[u]+=r[u]*e,t.vy[u]+=l[u]*e,t.vz[u]+=c[u]*e;const d=Math.hypot(t.vx[u],t.vy[u],t.vz[u])||1;if(d>s){const m=s/d;t.vx[u]*=m,t.vy[u]*=m,t.vz[u]*=m}t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=$e(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=$e(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=$e(t.pz[u],t.vz[u],.34)}}function kc(t,e,i,a){const o=[];for(let s=0;s<a.poleCount;s++)o.push(pc(s,i,a.poleSpeed,a.poleSwitch));const n=a.poleFalloff;for(let s=0;s<t.n;s++){let r=0,l=0,c=0;for(const u of o){const d=u.x-t.px[s],m=u.y-t.py[s],f=u.z-t.pz[s],p=Math.hypot(d,m,f)||1e-4,h=(u.sign>0?a.poleAttract:a.poleRepel)/(p**n+.06),g=u.sign>0?1:-1;if(r+=d/p*h*g*.55,l+=m/p*h*g*.55,c+=f/p*h*g*.32,r+=-m/p*h*.28,l+=d/p*h*.28,p<.1){const v=(.1-p)*10;r-=d/p*v,l-=m/p*v,c-=f/p*v*.6}}for(let u=0;u<t.n;u++){if(s===u)continue;const d=t.px[s]-t.px[u],m=t.py[s]-t.py[u],f=t.pz[s]-t.pz[u],p=d*d+m*m+f*f;if(p>.018||p<1e-8)continue;const h=Math.sqrt(p),g=(.135-h)*2.4;r+=d/h*g,l+=m/h*g,c+=f/h*g*.5}t.vx[s]+=r*e-t.px[s]*.2*e,t.vy[s]+=l*e-t.py[s]*.2*e,t.vz[s]+=c*e-t.pz[s]*.16*e,t.vx[s]*=.9,t.vy[s]*=.9,t.vz[s]*=.9,t.px[s]+=t.vx[s]*e*.85,t.py[s]+=t.vy[s]*e*.85,t.pz[s]+=t.vz[s]*e*.6,[t.px[s],t.vx[s]]=$e(t.px[s],t.vx[s],.42),[t.py[s],t.vy[s]]=$e(t.py[s],t.vy[s],.36),[t.pz[s],t.vz[s]]=$e(t.pz[s],t.vz[s],.3)}}function Tc(t,e,i,a,o){const n=i.length;let s=t;(!s||s.move!==e||s.n!==n||a<s.lastClock-.04||a-s.lastClock>1.6)&&(s=vc(e,i,a,o));let r=a-s.lastClock;if(r<=1e-5)return s;r=Math.min(r,.05);const l=r>.028?2:1,c=r/l;for(let u=0;u<l;u++)e==="spring"?bc(s,c,a,o):e==="flow"?yc(s,c,a,o):e==="boids"?wc(s,c,o):kc(s,c,a,o);return s.lastClock=a,s}function _c(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),o=I(1.1/a,.55,1.7);return{x:I(t.px[e]/a,-.48,.48),y:I(t.py[e]/a,-.4,.4),px:I((.07+i*.03)*o,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:I(.55+o*.4,.5,1)}}const Yn=["fixed","hunt"],Jn=["perfect","handheld"],es=["random","reactive","mixed"];function Ti(t){return Yn.includes(t)?t:"fixed"}function Aa(t){return Jn.includes(t)?t:"perfect"}function Ia(t){return es.includes(t)?t:"mixed"}function Ba(t){return I(t??2,.4,12)}function Ra(t){return I(t??6,.6,16)}function za(t){return I(t??2,.4,12)}function Oa(t){return I(t??5,.6,16)}function Ha(t){return I(t??1,.35,2.4)}function La(t){return I(t??1,.35,2.4)}function Na(t){return I(t??.7,.12,1)}function Ua(t){return I(t??.16,.04,1.4)}function qa(t){return I(t??.42,.08,2)}function Da(t){return I(t??.72,0,1)}function $a(t){return I(t??.85,.15,2.2)}function Wa(t){return I(t??.55,0,1.6)}function ja(t){return I(t??.35,0,1)}function Sc(t){let e=Ba(t?.huntWideMin),i=Ra(t?.huntWideMax);i<e&&([e,i]=[i,e]);let a=za(t?.huntFollowMin),o=Oa(t?.huntFollowMax);o<a&&([a,o]=[o,a]);let n=Ua(t?.huntReactMin),s=qa(t?.huntReactMax);return s<n&&([n,s]=[s,n]),{wideMin:e,wideMax:i,followMin:a,followMax:o,snap:Ha(t?.huntSnap),zoom:La(t?.huntZoom),tight:Na(t?.huntTight),reactMin:n,reactMax:s,precision:Da(t?.huntPrecision),select:Ia(t?.huntSelect),focusOn:!!t?.huntFocus,focusSpeed:$a(t?.huntFocusSpeed),focusError:Wa(t?.huntFocusError),variation:ja(t?.huntVariation),feel:Aa(t?.cameraFeel)}}function ts(t=0,e=3){return{phase:"wide",clock:t,phaseUntil:t+e,reactUntil:0,subject:-1,lastSubject:-1,lookX:0,lookY:0,zoom:1,rot:0,velX:0,velY:0,velZ:0,velR:0,errX:0,errY:0,heldFocus:1,plan:"basic",mediumDone:!1,nudged:!1,retargeted:!1,handX:0,handY:0,handR:0,lag:0,cycle:0,trackStart:0,prev:[]}}function Ht(t,e,i){return e+t()*Math.max(0,i-e)}function Yt(t,e){return Math.hypot(t,e)}function xc(t,e,i,a){const o=e?(t.x-e.x)/Math.max(a,.016666666666666666):0,n=e?(t.y-e.y)/Math.max(a,1/60):0,s=Yt(o,n),r=e?(t.px-e.px)/Math.max(a,1/60):0,l=Math.max(0,r),c=e?Yt(e.x-t.x,e.y-t.y):0,u=Math.max(0,s-c/Math.max(a,1/60)),d=e?Math.abs(Math.atan2(n,o)-Math.atan2(t.y-e.y,t.x-e.x)):0,m=Yt(t.x-i.cx,t.y-i.cy)/Math.max(i.spread,.08),f=Math.max(Math.abs(t.x),Math.abs(t.y)),p=Math.min(1,s*1.6);return s*1.15+u*.9+d*.35+l*3.2+I(m-.7,0,2)*.55+I(f-.28,0,1)*.7+p*.4}function is(t,e,i,a,o,n){if(t.length===0)return-1;if(t.length===1)return t[0].id;const s=t.reduce((f,p)=>f+p.x,0)/t.length,r=t.reduce((f,p)=>f+p.y,0)/t.length,l=t.reduce((f,p)=>f+Yt(p.x-s,p.y-r),0)/t.length||.2,c=new Map(o.map(f=>[f.id,f])),u=t.map(f=>{if(f.id===e&&t.length>1)return 0;const p=xc(f,c.get(f.id),{cx:s,cy:r,spread:l},n);return i==="random"?1:i==="reactive"?.12+p:.55+p}),d=u.reduce((f,p)=>f+p,0);if(d<=0)return(t.find(p=>p.id!==e)??t[0]).id;let m=a()*d;for(let f=0;f<t.length;f++)if(m-=u[f],m<=0)return t[f].id;return t[t.length-1].id}function Cc(t,e){if(e()>t*.72)return"basic";const i=e();return i<.22?"medium":i<.42?"retarget":i<.6?"abort":i<.8?"linger":"nudge"}function Mc(t,e,i=!1){const a=t?.px??.08,o=.2/Math.max(a,.045),n=I(1.2+e*.95*I(o,.65,2.1),1.25,4.1);return i?Oe(1,n,.42):n}function as(t,e){return t.find(i=>i.id===e)}function Ec(t){if(!t.length)return{x:0,y:0};let e=0,i=0;for(const a of t)e+=a.x,i+=a.y;return{x:e/t.length,y:i/t.length}}function Pc(t,e,i,a,o,n,s,r){t.velX+=(e-t.lookX)*s-t.velX*r,t.velY+=(i-t.lookY)*s-t.velY*r,t.velZ+=(a-t.zoom)*s-t.velZ*r,t.velR+=(o-t.rot)*s*.65-t.velR*r,t.lookX+=t.velX*n,t.lookY+=t.velY*n,t.zoom+=t.velZ*n,t.rot+=t.velR*n}function Fc(t,e,i,a,o){const n=ye(o+Math.floor(i*1e3)*17+(t?.cycle??0)*131>>>0);let s=t??ts(i,Ht(n,a.wideMin,a.wideMax));const r=i-s.clock;(r<-.02||r>1.2)&&(s=ts(i,Ht(n,a.wideMin,a.wideMax)));const l=I(i-s.clock,1/90,.08);s.clock=i;const c=Ec(e),u=as(e,s.subject),d=s.prev.find(q=>q.id===s.subject);u&&d&&Yt(u.x-d.x,u.y-d.y)/l>.55&&(s.lag=Math.max(s.lag,(1-a.precision)*.16)),s.lag=Math.max(0,s.lag-l*(1.4+a.precision*2)),s.errX*=Math.exp(-l*(1.1+a.precision*2.6)),s.errY*=Math.exp(-l*(1.1+a.precision*2.6));const m=ye(o+s.cycle*9973+11>>>0),f=ye(o+s.cycle*7919+3>>>0),p=(q,x=1)=>{s.lastSubject=s.subject,s.subject=q,s.phase="notice",s.reactUntil=i+Ht(m,a.reactMin,a.reactMax)*x;const R=(1-a.precision)*.11*(.45+m()),k=m()*Math.PI*2;s.errX=Math.cos(k)*R,s.errY=Math.sin(k)*R};if(s.phase==="wide"&&i>=s.phaseUntil&&e.length){const q=is(e,s.lastSubject,a.select,m,s.prev,l);s.plan=Cc(a.variation,f),s.mediumDone=!1,s.nudged=!1,s.retargeted=!1,s.plan==="linger"?(s.phaseUntil=i+Ht(f,a.wideMin,a.wideMax)*(1.15+f()*.7),s.plan="basic"):p(q)}else if(s.phase==="notice"&&i>=s.reactUntil)s.phase="snap",s.phaseUntil=i+I(.28/a.snap,.12,.85);else if(s.phase==="snap"&&i>=s.phaseUntil)if(s.plan==="medium"&&!s.mediumDone)s.mediumDone=!0,s.phase="notice",s.reactUntil=i+Ht(m,a.reactMin,a.reactMax)*.55;else{s.phase="track",s.trackStart=i;const q=Ht(f,a.followMin,a.followMax);s.phaseUntil=i+(s.plan==="abort"?q*(.28+f()*.28):q)}else if(s.phase==="track"){const q=Math.max(.01,s.phaseUntil-s.trackStart);if(s.plan==="retarget"&&!s.retargeted&&e.length>1&&i>=s.trackStart+q*.42){const x=is(e,s.subject,a.select,m,s.prev,l);x!==s.subject&&x>=0&&(s.retargeted=!0,s.plan="basic",p(x,.55))}else s.plan==="nudge"&&!s.nudged&&i>s.phaseUntil-.8&&(s.nudged=!0);s.phase==="track"&&i>=s.phaseUntil&&(s.phase="return",s.phaseUntil=i+I(.32/a.snap,.14,.9),s.lastSubject=s.subject)}else s.phase==="return"&&i>=s.phaseUntil&&(s.phase="wide",s.subject=-1,s.cycle+=1,s.phaseUntil=i+Ht(f,a.wideMin,a.wideMax),s.plan="basic");const h=as(e,s.subject)??u,g=1;let v=c.x*.22,y=c.y*.22,b=g,T=0;if(h&&(s.phase==="notice"||s.phase==="snap"||s.phase==="track")){v=h.x+s.errX,y=h.y+s.errY;const q=s.phase==="snap"&&s.plan==="medium"&&!s.mediumDone;b=s.phase==="notice"?Oe(s.zoom,1.04,.15):Mc(h,a.zoom,q),s.nudged&&s.phase==="track"&&(b*=1.12),T=Math.atan2(y-s.lookY,v-s.lookX)*.045}else s.phase==="return"&&(v=c.x*.18,y=c.y*.18,b=g,T=0);const _=s.phase==="snap"||s.phase==="return"?1.15+a.snap*1.35:1,M=s.phase==="notice"?.38:1,E=1-I(s.lag*2.4,0,.55),P=(.08+a.tight*.22)*(.45+a.precision*.7)*_*M*E,F=.18+a.precision*.22+a.tight*.12;Pc(s,v,y,b,T,l,P,F);const z=I(s.zoom,1,4.2);if(!a.focusOn)s.heldFocus=z;else{const q=1-Math.exp(-l*(.35+a.focusSpeed*1.8));s.heldFocus=Oe(s.heldFocus,z,q)}if(a.feel==="handheld"){const q=Yt(s.velX,s.velY)+Math.abs(s.velZ)*.08;s.handX=Oe(s.handX,-s.velX*.05-q*.01,1-Math.exp(-l*3.2)),s.handY=Oe(s.handY,-s.velY*.05,1-Math.exp(-l*3.2)),s.handR=Oe(s.handR,-s.velR*.4,1-Math.exp(-l*2.6))}else s.handX=Oe(s.handX,0,1-Math.exp(-l*8)),s.handY=Oe(s.handY,0,1-Math.exp(-l*8)),s.handR=Oe(s.handR,0,1-Math.exp(-l*8));return s.prev=e.map(q=>({id:q.id,x:q.x,y:q.y,px:q.px})),s}function Ac(t,e){const i=I(t.zoom,1,4.2),a=e.focusOn?I(Math.abs(t.heldFocus-i)*e.focusError*.9,0,1):0;return{x:t.lookX+(e.feel==="handheld"?t.handX:0),y:t.lookY+(e.feel==="handheld"?t.handY:0),zoom:I(t.zoom,1,4.4),rot:t.rot+(e.feel==="handheld"?t.handR:0),focus:a}}function Ic(t,e){return{x:(t.x-e.x)*e.zoom,y:(t.y-e.y)*e.zoom,px:t.px*e.zoom,rot:t.rot+e.rot}}const os=["heraldry","wallpaper","giants","shower"],Ct=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade","haunt","sport","school"],ns=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"],Bc=["bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Uo(t){return!!t&&Bc.includes(t)}const Lt={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",gyre:"GYRE",well:"WELL",hall:"HALL",drift:"DRIFT",braid:"BRAID",sway:"SWAY",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES",field:"FIELD"};function Pe(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Nt(t){return Ct.includes(t)?t:"sailor"}function ss(t){return ns.includes(t)?t:"rush"}const Rc=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway"];function zc(t){return!!t&&Rc.includes(t)}const rs=["rush","tunnel","bloom","spiral","helix","prism","gyre","well","hall","drift","braid","sway","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles","field"];function qo(t){return rs[(t>>>0)%rs.length]}function _i(t){return I(t??1,.35,1.2)}function Si(t){return I(t??1,.2,2.2)}function xi(t){return I(t??.7,.12,2)}function Ci(t){return I(t??1,.2,2)}function Mi(t){return I(t??.72,.12,1)}const Va=["off","dragon","dog","ferret","caterpillar","zebra"],ls={off:"Off",dragon:"Dragon",dog:"Dog",ferret:"Ferret",caterpillar:"Caterpillar",zebra:"Zebra"};function Ei(t){return Va.includes(t)?t:"off"}function Oc(t){return Math.max(11,Math.min(18,Math.round(14*I(t??1,.35,2))))}function Hc(t,e){if(t==="off"||e<4)return[];if(t==="caterpillar"){const o=[];for(let n=1;n<e-1;n++)o.push({role:"nub",attach:n,side:-1}),o.push({role:"nub",attach:n,side:1});return o}const i=Math.max(1,Math.round((e-1)*.22)),a=Math.max(i+2,Math.round((e-1)*.62));return[{role:"leg",attach:i,side:-1},{role:"leg",attach:i,side:1},{role:"leg",attach:a,side:-1},{role:"leg",attach:a,side:1}]}function Ga(t,e,i,a){const o=me(t)*Math.PI*2,n=I(i,.2,2),s=I(a,.12,1),r=1-s,l=e*.68,c=e*(.95+r*.55),u=e*(.45+r*1.55),d=(Ze,qe,w)=>(Ze+qe*n)*(.42+.58*(.5+.5*Math.sin(w))),m=.84+.22*Math.sin(l+.4),f=.8+.24*Math.cos(l*.87+1.1),p=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*n)*m,g=d(.04,.07,c+.3)*(.4+s*.6),v=d(.02,.08,u+1.4)*(.18+r*.95),y=d(.01,.06,u*1.3+.8)*r,b=d(.006,.035,c*1.6+2.1)*r*r,T=(.17+.11*n)*f,_=d(.035,.065,c+1.7)*(.4+s*.6),M=d(.02,.07,u+.6)*(.18+r*.95),E=d(.01,.055,u*1.2+2.4)*r,P=d(.006,.03,c*1.4+.5)*r*r,F=(.13+.11*n)*p,z=d(.04,.08,c+2)*(.45+s*.55),q=d(.02,.07,u+1.9)*(.18+r*.95),x=d(.012,.055,u*.9+.2)*r;let R=Math.cos(o+l*.18)*h+Math.cos(2*o+c*.14+.7)*g+Math.sin(3*o+l*.11+1.2)*v+Math.cos(4*o+u*.09+.4)*y+Math.sin(5*o+c*.16+2.2)*b,k=Math.sin(o+l*.15+.5)*T+Math.sin(2*o+c*.19+1.4)*_+Math.cos(3*o+l*.09+.3)*M+Math.sin(4*o+u*.12+1.8)*E+Math.cos(5*o+c*.08+.9)*P,U=Math.sin(o+l*.12+1.1)*F+Math.cos(2*o+c*.17+.6)*z+Math.sin(3*o+u*.1+2.5)*q+Math.cos(4*o+l*.13+1.6)*x;const G=Math.sin(2*o+c*.22)*r*.12*n;U+=G;const O=l*.19+Math.sin(c*.27)*.55,ae=Math.sin(l*.29+.8)*(.28+.18*n),W=Math.cos(l*.23+1.5)*(.2+r*.4),te=Math.cos(O),N=Math.sin(O),L=R*te-U*N,se=R*N+U*te,ie=Math.cos(ae),Q=Math.sin(ae),ke=k*ie-se*Q,Fe=k*Q+se*ie,ue=Math.cos(W),pe=Math.sin(W),Ee=L*ue-ke*pe,Se=L*pe+ke*ue;return{x:Ee+Math.sin(l*.47)*.06*n,y:Se+Math.cos(l*.39+1.3)*.05*n,z:Fe+Math.sin(c*.21+.6)*.07*n}}function st(t,e=1){return(t>40?t/60:2)*e}function Lc(t,e,i=1,a=0){return me((t-a)*st(e,i))}function Nc(t,e,i=1,a=0){const o=Math.cos(Lc(t,e,i,a)*Math.PI*2);return o>0?o*o:0}function cs(t,e,i=1,a=0){return Math.floor(Math.max(0,t-a)*st(e,i))}function Pi(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function fs(t,e){return e&&ns.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const Fi=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a","#d8c078","#ff4a9a","#7cff6a","#7ad8ff","#ff6a28","#c47aff","#3dffd0","#e87838","#4ad8a8","#8a6ad8","#c48a4a","#4a78ff"],Do={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a",haunt:"#9a6cff",sport:"#ff7a1a",school:"#3a6ad8"};function Uc(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const qc={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","crab","helm","lighthouse","compass","buoy","hook","porthole","oar"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","figure","popcorn","cane","mask","dice","flag","hoop","unicycle","lion","topper"],fruit:["pear","lemon","cherry","flower","apple","banana","grape","chili","orange","peach","berry","melon","pineapple"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","moth","bird","rabbit","snail","fern","pine","hedgehog","nest","toadstool"],love:["heart","wingfig","swan","cat","crown","key","ring","envelope","potion","rose","diamond","candle","locket","dove","kiss"],space:["rocket","planet","saturn","ufo","comet","satellite","star","alien","asteroid","telescope","rover","spark","astro"],sweet:["lolly","coneice","cupcake","donut","candy","cookie","waffle","pretzel","sundae","choco"],music:["note","vinyl","headphone","mic","speaker","guitar","drum","piano","clef","sax","trumpet","amp"],kitchen:["kettle","mug","whisk","toast","egg","spoon","bottle","fork","pan","chefhat"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon","tornado"],city:["taxi","hydrant","bike","lamp","signal","bus","house","subway","mailbox","skyline"],arcade:["stick","coin","pawn","cart","ghostie","pixel","joystick","shroomup","invader"],haunt:["skull","bat","pumpkin","tomb","cauldron","web"],sport:["trophy","whistle","jersey","skate","goal"],school:["pencil","book","globe","backpack","ruler","bell"]},us={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm","buoy"],circus:["elephant","tent","horse","balloon","figure","mask","lion"],fruit:["pear","lemon","apple","banana","melon","pineapple"],nature:["tree","deer","owl","fox","mountain","rabbit","pine"],love:["heart","wingfig","swan","cat","rose","dove"],space:["rocket","saturn","ufo","planet","comet","alien","astro"],sweet:["lolly","cupcake","donut","coneice","waffle","sundae"],music:["vinyl","headphone","speaker","guitar","piano","sax"],kitchen:["kettle","toast","bottle","pan","chefhat"],weather:["rainbow","umbrella","cloud","sun","tornado"],city:["taxi","bus","house","lamp","skyline"],arcade:["stick","cart","pawn","invader","ghostie"],haunt:["skull","pumpkin","tomb","cauldron","bat"],sport:["trophy","jersey","goal","skate"],school:["globe","backpack","book","bell"]},ds={sailor:["starfish","shell","fish","anchor","crab","compass","hook"],circus:["ball","balloon","bow","ticket","popcorn","cane","dice"],fruit:["cherry","lemon","grape","apple","berry","chili"],nature:["leaf","acorn","moth","bird","snail","fern","hedgehog"],love:["heart","key","ring","diamond","candle","kiss"],space:["star","spark","comet","satellite","planet","asteroid"],sweet:["candy","lolly","donut","cookie","pretzel","choco"],music:["note","vinyl","mic","clef","drum","trumpet"],kitchen:["spoon","egg","mug","fork","whisk"],weather:["flake","drop","rain","bolt","moon"],city:["hydrant","bike","mailbox","signal","lamp"],arcade:["coin","pawn","pixel","joystick","shroomup"],haunt:["bat","web","skull","pumpkin"],sport:["whistle","skate","trophy","goal"],school:["pencil","ruler","bell","book"]},Ai=256;function hs(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function We(t,e){return e[Math.floor(t()*e.length)%e.length]}function ms(t,e){return t()<.32?e:We(t,Fi)}function Dc(t,e="rush"){return e==="tunnel"?us[t]:e==="lattice"?ds[t]:qc[t]}function $c(t,e,i,a){const o=Dc(a,e==="bloom"?"rush":e);let n=We(t,o);e==="lattice"&&t()<.4&&(n=We(t,ds[a])),e==="tunnel"&&t()<.28&&(n=We(t,us[a]));const s=ms(t,i);let r=ms(t,i);return r===s&&(r=We(t,Fi)),{kind:n,pattern:t()<.58?"plain":We(t,["polka","hoop","half","bar"]),a:s,b:r,mirror:t()>.5}}function Wc(t){return t>.5?I((t-.5)/.5,0,1):0}function jc(t,e,i,a=0){const o=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t-a)*n)*11+5>>>0)%o}function Ii(t){return I(t??1,.5,2)}function Bi(t){return I(t??1,.35,2)}function Vc(t,e,i="sailor",a){const o=ye(t>>>0),n=240,s=a&&a!==i?a:null,r=[];for(let l=0;l<n;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",u=s&&l&1?s:i;r.push({x:o(),y:o(),z:o(),rot:(o()-.5)*.55,size:.55+o()*.9,vx:(o()-.5)*.06,vy:(o()-.35)*.08,vr:(o()-.5)*.25,charge:$c(o,c,e,u)})}return r}function Gc(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function ps(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,o=e&255;return(.22*i+.7*a+.08*o)/255}function gs(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const o=i.a,n=i.b,s=a*2.4;if(t.fillStyle=o,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const r=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*r,l*r,r*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=a*.14;for(let r=1;r<=3;r++)t.beginPath(),t.arc(0,0,a*(.28*r),0,Math.PI*2),t.stroke()}else if(i.pattern==="half")t.fillRect(0,-s,s,s*2);else if(i.pattern==="bar")t.fillRect(-s,-a*.18,s*2,a*.36);else if(i.pattern==="stripe"){t.save(),t.rotate(-.48);for(let r=-6;r<7;r++)t.fillRect(-s,r*a*.3-a*.07,s*2,a*.13);t.restore()}t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=ps(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function $o(t,e,i,a=.42){for(let o=0;o<i*2;o++){const n=o%2===0?e:e*a,s=o*Math.PI/i-Math.PI/2,r=Math.cos(s)*n,l=Math.sin(s)*n;o===0?t.moveTo(r,l):t.lineTo(r,l)}t.closePath()}function Kc(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Xc(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function vs(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Zc(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Qc(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function Yc(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Jc(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,o=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*o,-Math.cos(a)*o*.85)}t.closePath()}function e0(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function t0(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function i0(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function a0(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function o0(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function n0(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function s0(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function r0(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function l0(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function c0(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function f0(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function u0(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function d0(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function h0(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function m0(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function p0(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function g0(t,e){$o(t,e,8,.55)}function v0(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function b0(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function y0(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function w0(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function k0(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function T0(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function _0(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function S0(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function x0(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function C0(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function M0(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function E0(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function P0(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function F0(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),vs(t,e*.72)}function A0(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function I0(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function B0(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function R0(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function z0(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function O0(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function H0(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function L0(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function N0(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function U0(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function q0(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function D0(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function $0(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function W0(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function j0(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function V0(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function G0(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function K0(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function X0(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Z0(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function Q0(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function Y0(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function J0(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function ef(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function tf(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function af(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function of(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function nf(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function sf(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function rf(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function lf(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function cf(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function ff(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function uf(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function df(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function hf(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function mf(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function pf(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function gf(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function vf(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function bf(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function yf(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function wf(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function kf(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function Tf(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function _f(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function Sf(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function xf(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function Cf(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function Mf(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function Ef(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function Pf(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function Ff(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function Af(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function If(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function Bf(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function Rf(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function zf(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function Of(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function Hf(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function Lf(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function Nf(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function Uf(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function qf(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function Df(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function $f(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function Wf(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function jf(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function Vf(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function Gf(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function Kf(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function Xf(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function Zf(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function Qf(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function Yf(t,e){t.ellipse(0,0,e*.42,e*.85,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.rect(-e*.48,-e*.18,e*.96,e*.22)}function Jf(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.quadraticCurveTo(e*.55,e*.85,-e*.15,e*.82),t.quadraticCurveTo(e*.22,e*.55,e*.08,e*.18),t.lineTo(-e*.1,e*.18),t.closePath()}function eu(t,e){t.arc(0,0,e*.85,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.55,0,Math.PI*2,!0)}function tu(t,e){t.moveTo(-e*.12,-e*.95),t.lineTo(e*.12,-e*.95),t.lineTo(e*.1,e*.15),t.lineTo(e*.42,e*.85),t.lineTo(-e*.42,e*.85),t.lineTo(-e*.1,e*.15),t.closePath()}function iu(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(e*.58,0),t.arc(0,0,e*.58,0,Math.PI*2,!0)}function au(t,e){t.arc(0,e*.35,e*.55,0,Math.PI*2),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,-e*.75,e*.16,e*.85),t.moveTo(-e*.42,-e*.82),t.rect(-e*.42,-e*.95,e*.84,e*.18)}function ou(t,e){t.arc(0,0,e*.72,0,Math.PI*2),t.moveTo(-e*.85,-e*.35),t.arc(-e*.55,-e*.55,e*.32,0,Math.PI*2),t.moveTo(e*.85,-e*.35),t.arc(e*.55,-e*.55,e*.32,0,Math.PI*2)}function nu(t,e){t.rect(-e*.42,-e*.85,e*.84,e*.7),t.moveTo(-e*.72,-e*.12),t.rect(-e*.78,-e*.18,e*1.56,e*.22)}function su(t,e){t.arc(0,e*.06,e*.78,0,Math.PI*2),t.moveTo(-e*.08,-e*.85),t.quadraticCurveTo(0,-e*.55,e*.22,-e*.72),t.quadraticCurveTo(.05*e,-e*.95,-e*.08,-e*.85)}function ru(t,e){t.ellipse(-e*.12,e*.08,e*.58,e*.7,-.2,0,Math.PI*2),t.moveTo(e*.55,0),t.ellipse(e*.12,e*.08,e*.52,e*.66,.2,0,Math.PI*2)}function lu(t,e){t.arc(-e*.22,e*.12,e*.38,0,Math.PI*2),t.moveTo(e*.42,e*.18),t.arc(e*.18,e*.18,e*.36,0,Math.PI*2),t.moveTo(.08*e,-e*.28),t.arc(0,-e*.22,e*.34,0,Math.PI*2)}function cu(t,e){t.moveTo(-e*.9,e*.35),t.quadraticCurveTo(0,-e*1.05,e*.9,e*.35),t.quadraticCurveTo(0,e*.85,-e*.9,e*.35),t.closePath()}function fu(t,e){t.ellipse(0,e*.28,e*.48,e*.62,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(0,-e*.95),t.lineTo(e*.22,-e*.28),t.closePath()}function uu(t,e){t.moveTo(0,-e*.95),t.lineTo(e*.62,-e*.15),t.lineTo(e*.28,-e*.15),t.lineTo(e*.78,e*.42),t.lineTo(e*.16,e*.42),t.lineTo(e*.16,e*.92),t.lineTo(-e*.16,e*.92),t.lineTo(-e*.16,e*.42),t.lineTo(-e*.78,e*.42),t.lineTo(-e*.28,-e*.15),t.lineTo(-e*.62,-e*.15),t.closePath()}function du(t,e){t.ellipse(0,e*.18,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.15,-e*.15),t.lineTo(-e*.05,-e*.85),t.lineTo(e*.22,-e*.15),t.closePath(),t.moveTo(e*.15,-e*.05),t.lineTo(e*.42,-e*.72),t.lineTo(e*.52,0),t.closePath()}function hu(t,e){t.ellipse(0,e*.22,e*.82,e*.38,0,0,Math.PI*2),t.moveTo(-e*.22,-e*.05),t.ellipse(-e*.12,-e*.08,e*.22,e*.28,0,0,Math.PI*2),t.moveTo(e*.32,0),t.ellipse(e*.16,-e*.02,e*.2,e*.26,0,0,Math.PI*2)}function mu(t,e){t.ellipse(0,-e*.15,e*.82,e*.42,0,Math.PI,0,!0),t.lineTo(e*.82,-e*.05),t.lineTo(-e*.82,-e*.05),t.closePath(),t.moveTo(-e*.22,-e*.02),t.rect(-e*.22,-e*.02,e*.44,e*.88)}function pu(t,e){t.arc(0,e*.18,e*.55,0,Math.PI*2),t.moveTo(-e*.12,-e*.35),t.rect(-e*.1,-e*.95,e*.2,e*.55)}function gu(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.15,-e*.85,e*.75,-e*.05),t.quadraticCurveTo(e*.15,e*.15,-e*.15,e*.35),t.quadraticCurveTo(-e*.55,e*.55,-e*.85,e*.15),t.closePath()}function vu(t,e){t.moveTo(-e*.75,0),t.quadraticCurveTo(-e*.25,-e*.55,0,0),t.quadraticCurveTo(e*.25,e*.55,e*.75,0),t.quadraticCurveTo(e*.25,-e*.55,0,0),t.quadraticCurveTo(-e*.25,e*.55,-e*.75,0),t.closePath()}function bu(t,e){t.rect(-e*.55,-e*.22,e*1.1,e*.48),t.moveTo(-e*.55,e*.42),t.arc(-e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(e*.62,e*.42),t.arc(e*.42,e*.52,e*.22,0,Math.PI*2),t.moveTo(-e*.08,-e*.22),t.rect(-e*.08,-e*.75,e*.16,e*.55)}function yu(t,e){$o(t,e*.72,4,.32)}function wu(t,e){t.arc(0,-e*.15,e*.55,0,Math.PI*2),t.moveTo(-e*.42,e*.35),t.rect(-e*.42,e*.22,e*.84,e*.62)}function ku(t,e){t.moveTo(-e*.65,e*.15),t.bezierCurveTo(-e*.95,-e*.75,e*.15,-e*.95,e*.15,0),t.bezierCurveTo(e*.15,e*.85,-e*.85,e*.65,-e*.25,e*.05),t.bezierCurveTo(e*.85,-e*.55,e*.95,e*.75,e*.25,e*.35),t.bezierCurveTo(-e*.35,0,-e*.15,-e*.35,-e*.65,e*.15),t.closePath()}function Tu(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.35,e*.88),t.lineTo(e*.35,e*.88),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(0,-e*.15),t.arc(0,-e*.05,e*.42,0,Math.PI*2)}function _u(t,e){t.rect(-e*.7,-e*.55,e*1.4,e*1.1),t.moveTo(-e*.7,0),t.lineTo(e*.7,0),t.moveTo(0,-e*.55),t.lineTo(0,e*.55)}function Su(t,e){t.moveTo(-e*.75,-e*.55),t.quadraticCurveTo(-e*.15,-e*.95,e*.55,-e*.15),t.quadraticCurveTo(e*.85,e*.45,e*.15,e*.75),t.quadraticCurveTo(-e*.45,e*.55,-e*.25,0),t.quadraticCurveTo(-e*.85,-e*.05,-e*.75,-e*.55),t.closePath()}function xu(t,e){t.moveTo(-e*.95,-e*.12),t.lineTo(e*.25,-e*.12),t.lineTo(e*.95,-e*.45),t.lineTo(e*.95,e*.45),t.lineTo(e*.25,e*.12),t.lineTo(-e*.95,e*.12),t.closePath()}function Cu(t,e){t.rect(-e*.72,-e*.75,e*1.44,e*1.5),t.moveTo(0,0),t.arc(0,.05*e,e*.38,0,Math.PI*2)}function Mu(t,e){t.moveTo(-e*.12,e*.95),t.lineTo(e*.12,e*.95),t.lineTo(e*.1,e*.05),t.lineTo(e*.42,-e*.85),t.lineTo(e*.22,-e*.85),t.lineTo(.08*e,-e*.15),t.lineTo(-e*.08,-e*.15),t.lineTo(-e*.22,-e*.85),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.1,e*.05),t.closePath()}function Eu(t,e){t.arc(-e*.15,0,e*.62,0,Math.PI*2),t.moveTo(e*.42,-e*.12),t.rect(e*.38,-e*.12,e*.58,e*.24)}function Pu(t,e){t.ellipse(0,-e*.25,e*.72,e*.48,0,0,Math.PI*2),t.moveTo(-e*.42,e*.15),t.rect(-e*.42,e*.05,e*.84,e*.55)}function Fu(t,e){t.moveTo(-e*.72,-e*.75),t.lineTo(e*.72,-e*.75),t.lineTo(e*.28,e*.15),t.lineTo(e*.12,e*.92),t.lineTo(-e*.12,e*.92),t.lineTo(-e*.28,e*.15),t.closePath()}function Au(t,e){t.rect(-e*.9,-e*.42,e*1.8,e*.72),t.moveTo(-e*.7,e*.42),t.arc(-e*.55,e*.52,e*.2,0,Math.PI*2),t.moveTo(e*.7,e*.42),t.arc(e*.55,e*.52,e*.2,0,Math.PI*2)}function Iu(t,e){t.rect(-e*.62,-e*.35,e*1.24,e*.7),t.moveTo(-e*.08,e*.35),t.rect(-e*.08,e*.32,e*.16,e*.58)}function Bu(t,e){t.rect(-e*.9,e*.05,e*.38,e*.7),t.moveTo(-e*.42,-e*.45),t.rect(-e*.42,-e*.45,e*.32,e*1.2),t.moveTo(.02*e,-e*.15),t.rect(0,-e*.15,e*.42,e*.9),t.moveTo(e*.52,e*.15),t.rect(e*.52,e*.15,e*.32,e*.6)}function Ru(t,e){t.moveTo(-e*.62,e*.15),t.quadraticCurveTo(-e*.62,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.62,-e*.85,e*.62,e*.15),t.lineTo(e*.38,e*.75),t.lineTo(.12*e,e*.35),t.lineTo(-e*.12,e*.75),t.lineTo(-e*.38,e*.35),t.closePath()}function zu(t,e){t.rect(-e*.55,-e*.55,e*.5,e*.5),t.moveTo(e*.05,-e*.25),t.rect(.05*e,-e*.25,e*.5,e*.5),t.moveTo(-e*.25,e*.15),t.rect(-e*.25,e*.15,e*.5,e*.5)}function Ou(t,e){t.rect(-e*.7,e*.15,e*1.4,e*.55),t.moveTo(-e*.1,e*.15),t.rect(-e*.1,-e*.55,e*.2,e*.75),t.moveTo(0,-e*.72),t.arc(0,-e*.72,e*.22,0,Math.PI*2)}function Hu(t,e){t.ellipse(0,-e*.15,e*.78,e*.42,0,Math.PI,0,!0),t.lineTo(e*.78,0),t.lineTo(-e*.78,0),t.closePath(),t.moveTo(-e*.28,0),t.rect(-e*.28,0,e*.56,e*.72)}function Lu(t,e){t.rect(-e*.55,-e*.35,e*1.1,e*.55),t.moveTo(-e*.72,-e*.55),t.rect(-e*.72,-e*.55,e*.22,e*.22),t.moveTo(e*.5,-e*.55),t.rect(e*.5,-e*.55,e*.22,e*.22),t.moveTo(-e*.42,e*.28),t.rect(-e*.42,e*.28,e*.22,e*.35),t.moveTo(e*.2,e*.28),t.rect(e*.2,e*.28,e*.22,e*.35)}function Nu(t,e){t.ellipse(0,-e*.12,e*.62,e*.7,0,0,Math.PI*2),t.moveTo(-e*.32,e*.55),t.rect(-e*.32,e*.48,e*.64,e*.32)}function Uu(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.45,-e*.85,0,-e*.05),t.quadraticCurveTo(e*.45,-e*.85,e*.95,e*.15),t.quadraticCurveTo(e*.25,e*.35,0,e*.12),t.quadraticCurveTo(-e*.25,e*.35,-e*.95,e*.15),t.closePath()}function qu(t,e){t.ellipse(0,e*.12,e*.82,e*.68,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.55),t.rect(-e*.08,-e*.88,e*.16,e*.35)}function Du(t,e){t.moveTo(-e*.55,e*.85),t.lineTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,-e*.15),t.lineTo(e*.55,e*.85),t.closePath()}function $u(t,e){t.moveTo(-e*.72,-e*.05),t.quadraticCurveTo(-e*.85,e*.95,0,e*.85),t.quadraticCurveTo(e*.85,e*.95,e*.72,-e*.05),t.closePath(),t.moveTo(-e*.78,-e*.22),t.rect(-e*.78,-e*.28,e*1.56,e*.22)}function Wu(t,e){t.moveTo(0,-e),t.lineTo(e*.85,e*.55),t.lineTo(-e*.85,e*.55),t.closePath()}function ju(t,e){t.moveTo(-e*.42,-e*.55),t.quadraticCurveTo(-e*.72,0,-e*.22,e*.28),t.lineTo(e*.22,e*.28),t.quadraticCurveTo(e*.72,0,e*.42,-e*.55),t.closePath(),t.moveTo(-e*.18,e*.28),t.rect(-e*.18,e*.28,e*.36,e*.28),t.moveTo(-e*.38,e*.55),t.rect(-e*.38,e*.72,e*.76,e*.18)}function Vu(t,e){t.ellipse(-e*.15,0,e*.48,e*.38,0,0,Math.PI*2),t.moveTo(e*.28,-e*.12),t.rect(e*.22,-e*.12,e*.58,e*.24)}function Gu(t,e){t.moveTo(-e*.85,-e*.55),t.lineTo(-e*.28,-e*.35),t.lineTo(e*.28,-e*.35),t.lineTo(e*.85,-e*.55),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Ku(t,e){t.moveTo(-e*.85,-e*.15),t.lineTo(e*.75,-e*.35),t.lineTo(e*.85,e*.05),t.lineTo(-e*.75,e*.25),t.closePath(),t.moveTo(-e*.35,e*.22),t.arc(-e*.35,e*.42,e*.18,0,Math.PI*2),t.moveTo(e*.42,e*.08),t.arc(e*.42,e*.28,e*.18,0,Math.PI*2)}function Xu(t,e){t.moveTo(-e*.85,e*.75),t.lineTo(-e*.85,-e*.55),t.lineTo(e*.85,-e*.55),t.lineTo(e*.85,e*.75),t.lineTo(e*.65,e*.75),t.lineTo(e*.65,-e*.35),t.lineTo(-e*.65,-e*.35),t.lineTo(-e*.65,e*.75),t.closePath()}function Zu(t,e){t.moveTo(-e*.18,e*.85),t.lineTo(e*.18,e*.85),t.lineTo(e*.18,-e*.45),t.lineTo(0,-e*.95),t.lineTo(-e*.18,-e*.45),t.closePath()}function Qu(t,e){t.moveTo(-e*.05,-e*.75),t.lineTo(-e*.78,-e*.55),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.05,e*.55),t.closePath(),t.moveTo(e*.05,-e*.75),t.lineTo(e*.78,-e*.55),t.lineTo(e*.78,e*.75),t.lineTo(e*.05,e*.55),t.closePath()}function Yu(t,e){t.arc(0,-e*.08,e*.68,0,Math.PI*2),t.moveTo(-e*.18,e*.58),t.rect(-e*.18,e*.55,e*.36,e*.32)}function Ju(t,e){t.rect(-e*.55,-e*.45,e*1.1,e*1.15),t.moveTo(-e*.38,-e*.72),t.rect(-e*.38,-e*.72,e*.76,e*.32)}function ed(t,e){t.rect(-e*.85,-e*.22,e*1.7,e*.44)}function td(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.55,-e*.85,0,-e*.85),t.quadraticCurveTo(e*.55,-e*.85,e*.55,e*.15),t.closePath(),t.moveTo(-e*.08,e*.15),t.arc(0,e*.32,e*.16,0,Math.PI*2)}function id(t,e){t.moveTo(-e*.7,0),t.quadraticCurveTo(-e*.58,-e*.58,0,-e*.52),t.quadraticCurveTo(e*.58,-e*.58,e*.7,0),t.quadraticCurveTo(e*.58,e*.58,0,e*.52),t.quadraticCurveTo(-e*.58,e*.58,-e*.7,0),t.closePath()}function ad(t,e){t.moveTo(-e*.82,0),t.quadraticCurveTo(-e*.45,-e*.55,e*.08,-e*.32),t.lineTo(e*.98,-e*.12),t.lineTo(e*.62,e*.06),t.lineTo(e*.88,e*.38),t.lineTo(e*.22,e*.22),t.quadraticCurveTo(-e*.2,e*.52,-e*.82,0),t.closePath(),t.moveTo(-e*.02,-e*.3),t.lineTo(e*.18,-e*.98),t.lineTo(e*.38,-e*.22),t.closePath(),t.moveTo(-e*.38,-e*.28),t.lineTo(-e*.18,-e*.88),t.lineTo(e*.08,-e*.2),t.closePath()}function od(t,e){t.moveTo(-e*.42,e*.18),t.quadraticCurveTo(-e*.35,-e*.28,e*.22,-e*.2),t.quadraticCurveTo(e*.62,-e*.06,e*.95,e*.16),t.quadraticCurveTo(e*.9,e*.42,e*.4,e*.42),t.quadraticCurveTo(0,e*.5,-e*.42,e*.18),t.closePath(),t.moveTo(-e*.12,-e*.08),t.quadraticCurveTo(-e*.85,-e*.42,-e*.98,e*.42),t.quadraticCurveTo(-e*.48,e*.48,0,e*.08),t.closePath(),t.moveTo(e*.12,-e*.16),t.quadraticCurveTo(-e*.22,-e*.95,-e*.72,-e*.22),t.quadraticCurveTo(e*.02,-e*.22,e*.22,.02*e),t.closePath()}function nd(t,e){t.moveTo(-e*.72,e*.08),t.quadraticCurveTo(-e*.52,-e*.4,-e*.02,-e*.3),t.quadraticCurveTo(e*.48,-e*.1,e*.98,e*.08),t.quadraticCurveTo(e*.48,e*.26,0,e*.3),t.quadraticCurveTo(-e*.48,e*.4,-e*.72,e*.08),t.closePath(),t.moveTo(-e*.22,-e*.26),t.lineTo(-e*.32,-e*.7),t.lineTo(0,-e*.26),t.closePath(),t.moveTo(e*.06,-e*.2),t.lineTo(e*.04,-e*.6),t.lineTo(e*.24,-e*.16),t.closePath()}function sd(t,e){t.arc(e*.06,e*.08,e*.62,0,Math.PI*2),t.moveTo(-e*.04,-e*.46),t.quadraticCurveTo(-e*.32,-e*.95,-e*.55,-e*.52),t.quadraticCurveTo(-e*.2,-e*.6,e*.02,-e*.38),t.closePath(),t.moveTo(e*.28,-e*.46),t.quadraticCurveTo(e*.42,-e*.98,e*.68,-e*.5),t.quadraticCurveTo(e*.38,-e*.56,e*.22,-e*.36),t.closePath()}function rd(t,e){t.moveTo(-e*.58,e*.1),t.quadraticCurveTo(-e*.4,-e*.42,e*.12,-e*.22),t.quadraticCurveTo(e*.58,0,e*.98,e*.16),t.quadraticCurveTo(e*.55,e*.4,e*.08,e*.38),t.quadraticCurveTo(-e*.38,e*.38,-e*.58,e*.1),t.closePath(),t.moveTo(-e*.08,-e*.2),t.lineTo(-e*.22,-e*.95),t.lineTo(e*.14,-e*.18),t.closePath(),t.moveTo(e*.16,-e*.14),t.lineTo(e*.22,-e*.88),t.lineTo(e*.42,-e*.1),t.closePath()}function ld(t,e){t.moveTo(e*.92,-e*.16),t.quadraticCurveTo(e*.15,-e*.3,-e*.32,-e*.1),t.lineTo(-e*.95,-e*.42),t.lineTo(-e*.52,0),t.lineTo(-e*.95,e*.42),t.lineTo(-e*.32,e*.1),t.quadraticCurveTo(e*.15,e*.3,e*.92,e*.16),t.closePath()}function cd(t,e){t.moveTo(e*.88,-e*.1),t.quadraticCurveTo(e*.18,-e*.55,-e*.35,-e*.52),t.quadraticCurveTo(-e*.95,-e*.12,-e*.52,e*.22),t.quadraticCurveTo(-e*.12,e*.4,e*.48,e*.12),t.quadraticCurveTo(e*.75,e*.04,e*.88,e*.1),t.closePath()}function fd(t,e){t.moveTo(e*.95,-e*.2),t.quadraticCurveTo(e*.12,-e*.48,-e*.55,-e*.2),t.quadraticCurveTo(-e*.98,0,-e*.55,e*.2),t.quadraticCurveTo(e*.12,e*.48,e*.95,e*.2),t.closePath()}function ud(t,e){t.moveTo(e*.88,0),t.quadraticCurveTo(e*.68,-e*.5,e*.08,-e*.46),t.quadraticCurveTo(-e*.52,-e*.52,-e*.82,-e*.06),t.lineTo(-e*.98,-e*.4),t.lineTo(-e*.68,0),t.lineTo(-e*.98,e*.4),t.lineTo(-e*.82,e*.06),t.quadraticCurveTo(-e*.52,e*.52,e*.08,e*.46),t.quadraticCurveTo(e*.68,e*.5,e*.88,0),t.closePath()}function dd(t,e){t.moveTo(e*.92,-e*.08),t.quadraticCurveTo(e*.18,-e*.16,-e*.22,-e*.06),t.lineTo(-e*.85,-e*.4),t.lineTo(-e*.52,0),t.lineTo(-e*.9,e*.36),t.lineTo(-e*.22,e*.08),t.quadraticCurveTo(e*.18,e*.16,e*.92,e*.08),t.closePath()}function hd(t,e){t.moveTo(-e*.95,-e*.2),t.quadraticCurveTo(-e*.15,e*.28,e*.28,-e*.12),t.quadraticCurveTo(e*.68,-e*.38,e*.98,e*.28),t.quadraticCurveTo(e*.48,e*.52,e*.08,e*.22),t.quadraticCurveTo(-e*.38,e*.62,-e*.92,e*.24),t.closePath()}function md(t,e){t.moveTo(-e*.68,-e*.2),t.quadraticCurveTo(e*.12,-e*.52,e*.85,0),t.quadraticCurveTo(e*.12,e*.52,-e*.68,e*.2),t.closePath()}function pd(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":$o(t,i,5,e==="starfish"?.42:.4);break;case"heart":Kc(t,i);break;case"moon":Xc(t,i);break;case"figure":vs(t,i);break;case"fish":Zc(t,i);break;case"anchor":Qc(t,i);break;case"wave":Yc(t,i);break;case"shell":Jc(t,i);break;case"boat":e0(t,i);break;case"tail":t0(t,i);break;case"swallow":i0(t,i);break;case"elephant":a0(t,i);break;case"tent":o0(t,i);break;case"ball":n0(t,i);break;case"bow":s0(t,i);break;case"horse":r0(t,i);break;case"balloon":l0(t,i);break;case"ticket":c0(t,i);break;case"pear":f0(t,i);break;case"lemon":u0(t,i);break;case"cherry":d0(t,i);break;case"leaf":h0(t,i);break;case"mushroom":m0(t,i);break;case"flower":p0(t,i);break;case"sun":g0(t,i);break;case"cloud":v0(t,i);break;case"bolt":b0(t,i);break;case"umbrella":y0(t,i);break;case"bird":w0(t,i);break;case"tree":k0(t,i);break;case"deer":T0(t,i);break;case"fox":_0(t,i);break;case"owl":S0(t,i);break;case"acorn":x0(t,i);break;case"cone":C0(t,i);break;case"mountain":M0(t,i);break;case"drop":E0(t,i);break;case"moth":P0(t,i);break;case"wingfig":F0(t,i);break;case"swan":A0(t,i);break;case"cat":I0(t,i);break;case"crown":B0(t,i);break;case"key":R0(t,i);break;case"ring":z0(t,i);break;case"envelope":O0(t,i);break;case"potion":H0(t,i);break;case"rocket":N0(t,i);break;case"planet":U0(t,i);break;case"saturn":q0(t,i);break;case"ufo":D0(t,i);break;case"comet":$0(t,i);break;case"satellite":W0(t,i);break;case"lolly":j0(t,i);break;case"coneice":V0(t,i);break;case"cupcake":G0(t,i);break;case"donut":K0(t,i);break;case"candy":X0(t,i);break;case"note":Z0(t,i);break;case"vinyl":Q0(t,i);break;case"headphone":Y0(t,i);break;case"mic":J0(t,i);break;case"speaker":ef(t,i);break;case"crab":tf(t,i);break;case"helm":af(t,i);break;case"lighthouse":of(t,i);break;case"compass":nf(t,i);break;case"popcorn":sf(t,i);break;case"cane":rf(t,i);break;case"mask":lf(t,i);break;case"apple":cf(t,i);break;case"banana":ff(t,i);break;case"grape":uf(t,i);break;case"rabbit":df(t,i);break;case"snail":hf(t,i);break;case"fern":mf(t,i);break;case"rose":pf(t,i);break;case"diamond":gf(t,i);break;case"candle":vf(t,i);break;case"alien":bf(t,i);break;case"asteroid":yf(t,i);break;case"telescope":wf(t,i);break;case"cookie":kf(t,i);break;case"waffle":Tf(t,i);break;case"guitar":_f(t,i);break;case"drum":Sf(t,i);break;case"piano":xf(t,i);break;case"clef":Cf(t,i);break;case"kettle":Mf(t,i);break;case"mug":Ef(t,i);break;case"whisk":Pf(t,i);break;case"toast":Ff(t,i);break;case"egg":Af(t,i);break;case"spoon":If(t,i);break;case"chili":Bf(t,i);break;case"bottle":Rf(t,i);break;case"rain":zf(t,i);break;case"flake":Of(t,i);break;case"wind":Hf(t,i);break;case"rainbow":Lf(t,i);break;case"thermo":Nf(t,i);break;case"taxi":Uf(t,i);break;case"hydrant":qf(t,i);break;case"bike":Df(t,i);break;case"lamp":$f(t,i);break;case"signal":Wf(t,i);break;case"bus":jf(t,i);break;case"stick":Vf(t,i);break;case"dice":Gf(t,i);break;case"coin":Kf(t,i);break;case"pawn":Xf(t,i);break;case"cart":Zf(t,i);break;case"flag":Qf(t,i);break;case"buoy":Yf(t,i);break;case"hook":Jf(t,i);break;case"porthole":eu(t,i);break;case"oar":tu(t,i);break;case"hoop":iu(t,i);break;case"unicycle":au(t,i);break;case"lion":ou(t,i);break;case"topper":nu(t,i);break;case"orange":su(t,i);break;case"peach":ru(t,i);break;case"berry":lu(t,i);break;case"melon":cu(t,i);break;case"pineapple":fu(t,i);break;case"pine":uu(t,i);break;case"hedgehog":du(t,i);break;case"nest":hu(t,i);break;case"toadstool":mu(t,i);break;case"locket":pu(t,i);break;case"dove":gu(t,i);break;case"kiss":vu(t,i);break;case"rover":bu(t,i);break;case"spark":yu(t,i);break;case"astro":wu(t,i);break;case"pretzel":ku(t,i);break;case"sundae":Tu(t,i);break;case"choco":_u(t,i);break;case"sax":Su(t,i);break;case"trumpet":xu(t,i);break;case"amp":Cu(t,i);break;case"fork":Mu(t,i);break;case"pan":Eu(t,i);break;case"chefhat":Pu(t,i);break;case"tornado":Fu(t,i);break;case"subway":Au(t,i);break;case"mailbox":Iu(t,i);break;case"skyline":Bu(t,i);break;case"ghostie":Ru(t,i);break;case"pixel":zu(t,i);break;case"joystick":Ou(t,i);break;case"shroomup":Hu(t,i);break;case"invader":Lu(t,i);break;case"skull":Nu(t,i);break;case"bat":Uu(t,i);break;case"pumpkin":qu(t,i);break;case"tomb":Du(t,i);break;case"cauldron":$u(t,i);break;case"web":Wu(t,i);break;case"trophy":ju(t,i);break;case"whistle":Vu(t,i);break;case"jersey":Gu(t,i);break;case"skate":Ku(t,i);break;case"goal":Xu(t,i);break;case"pencil":Zu(t,i);break;case"book":Qu(t,i);break;case"globe":Yu(t,i);break;case"backpack":Ju(t,i);break;case"ruler":ed(t,i);break;case"bell":td(t,i);break;case"aBody":id(t,i);break;case"aLeg":hd(t,i);break;case"aNub":md(t,i);break;case"aDragHead":ad(t,i);break;case"aDragTail":ld(t,i);break;case"aDogHead":od(t,i);break;case"aDogTail":cd(t,i);break;case"aFerrHead":nd(t,i);break;case"aFerrTail":fd(t,i);break;case"aCatpHead":sd(t,i);break;case"aCatpTail":ud(t,i);break;case"aZebrHead":rd(t,i);break;case"aZebrTail":dd(t,i);break;default:L0(t,i);break}}function bs(t,e,i){const a=(o,n,s)=>{t.beginPath(),t.arc(o,n,s,0,Math.PI*2),t.fill()};t.fillStyle=ps(e.a)>.55?"#141414":"#f6f1e6",e.kind==="aDragHead"&&a(i*.18,-i*.04,i*.08),e.kind==="aDogHead"&&a(i*.28,0,i*.075),e.kind==="aFerrHead"&&a(i*.08,-i*.02,i*.055),e.kind==="aCatpHead"&&(a(-i*.08,i*.02,i*.07),a(i*.22,i*.02,i*.07)),e.kind==="aZebrHead"&&a(i*.12,-i*.02,i*.06),e.kind==="aBody"&&e.pattern==="bar"&&(t.beginPath(),t.moveTo(0,-i*.16),t.lineTo(i*.14,0),t.lineTo(0,i*.16),t.lineTo(-i*.14,0),t.closePath(),t.fill())}function gd(t,e,i){const a=()=>pd(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),gs(t,a,e,i),bs(t,e,i),t.restore();return}gs(t,a,e,i),bs(t,e,i)}function vd(t){const e=document.createElement("canvas");e.width=Ai,e.height=Ai;const i=e.getContext("2d");return i&&(i.translate(Ai/2,Ai/2),gd(i,t,Ai*.38)),e}const bd={dragon:{a:"#2a7a38",b:"#e8b830",pattern:"bar"},dog:{a:"#c9922e",b:"#f2d98a",pattern:"half"},ferret:{a:"#c49a62",b:"#f0e2c4",pattern:"half"},caterpillar:{a:"#5aa84a",b:"#e8c840",pattern:"hoop"},zebra:{a:"#f4f4f4",b:"#141414",pattern:"stripe"}};function ys(t,e){const i=bd[t];return{kind:e==="body"?"aBody":e==="leg"?"aLeg":e==="nub"?"aNub":e==="head"?t==="dragon"?"aDragHead":t==="dog"?"aDogHead":t==="ferret"?"aFerrHead":t==="caterpillar"?"aCatpHead":"aZebrHead":t==="dragon"?"aDragTail":t==="dog"?"aDogTail":t==="ferret"?"aFerrTail":t==="caterpillar"?"aCatpTail":"aZebrTail",pattern:e==="leg"||e==="nub"?"plain":i.pattern,a:i.a,b:i.b,mirror:!1}}function yd(t){return Math.atan2(Math.sin(t),Math.cos(t))}function Wo(t,e,i,a,o,n){const s=Ga(t,e,i,a),r=Ga(me(t+o),e,i,a),l=Math.max(.42,1.05-s.z*.55),c=Math.max(.42,1.05-r.z*.55),u=s.x/l,d=s.y/l,m=Math.atan2(r.y/c-d,r.x/c-u),f=I(1.12/l,.55,1.85);return{x:u,y:d,rot:m,ux:Math.cos(m),uy:Math.sin(m),nx:-Math.sin(m),ny:Math.cos(m),px:I((.072+n*.028)*f,.05,.24),alpha:I(.52+f*.42,.5,1)}}function wd(t,e,i,a,o){const n=Oc(o),s=.72/n,r=e==="caterpillar"?1.08:1,l=[];for(let c=0;c<n;c++){const u=me(i*a.travel*.14-c*s),d=i*a.morph,m=c===0?1.05:c===n-1?.78:.48*r;l.push(Wo(u,d,a.vary,a.smooth,s,m))}for(const c of Hc(e,n)){const u=l[c.attach],d=c.role==="nub"?.07:.13,m=me((i-d)*a.travel*.14-c.attach*s),f=Wo(m,(i-d)*a.morph,a.vary,a.smooth,s,.55),p=u.x-f.x,h=u.y-f.y,g=c.role==="nub"?.038:.09,v=c.role==="nub"?.32:.7,y=c.role==="nub"?.008:.024,b=u.x+u.nx*c.side*g-p*v,T=u.y+u.ny*c.side*g-h*v+y;t(ys(e,c.role),{x:b,y:T,px:I(u.px*(c.role==="nub"?.55:.92),.04,.18),rot:Math.atan2(T-u.y,b-u.x),alpha:u.alpha*.94})}for(let c=n-1;c>=0;c--){const u=c===0?"head":c===n-1?"tail":"body";let d=l[c].x,m=l[c].y,f=l[c].rot;if(u==="tail"){const p=me((i-.14)*a.travel*.14-(n-1)*s),h=Wo(p,(i-.14)*a.morph,a.vary,a.smooth,s,.78),g=l[c].x-h.x,v=l[c].y-h.y;d-=g*.55,m-=v*.55,f+=yd(l[c].rot-h.rot)*.85}t(ys(e,u),{x:d,y:m,px:l[c].px*(u==="head"?1.28:u==="tail"?1.18:1),rot:f,alpha:l[c].alpha})}}class kd{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;agents=null;fieldPoses=[];hunt=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=Gc(e);let a=this.stamps.get(i);return a||(a=vd(e),this.stamps.set(i,a)),a}ensure(e,i,a,o){const n=o&&o!==a?o:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===n&&this.particles.length||(this.particles=Vc(e,i,a,n||null),this.stamps.clear(),this.sim=null,this.agents=null,this.hunt=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=n)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const o=this.canvas.getContext("2d",{alpha:!1});if(!o)return this.canvas;const n=Nt(e.kit),s=e.kitB?Nt(e.kitB):null,r=hs(e.paper,xd(n,e.seed)),l=hs(e.ink,Do[n]);this.ensure(e.seed>>>0,l,n,s);const c=fs(e.generator,e.move),u=I(e.audio,0,1),d=I(e.bass,0,1),m=I(e.beat,0,1),f=e.bpm>40?e.bpm:0,p=Ii(e.scale),h=Bi(e.density),g=_i(e.pace),v={travel:Si(e.chainTravel),morph:xi(e.chainMorph),vary:Ci(e.chainVary),smooth:Mi(e.chainSmooth)},y=Ei(e.chainAnimal);Sd(o,i,a,r,n,e.time,e.seed,m,d,!!e.night,l),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high";const b=e.beatOffset??0,T=e.time,_=Uo(c)&&f>40&&b>.001?Math.max(0,T-b):T,M=_*g,E=i/Math.max(a,1),P=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Uo(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"||c==="braid"?130:c==="tunnel"||c==="well"?120:c==="hall"?148:c==="bloom"||c==="gyre"||c==="drift"||c==="sway"?140:c==="chain"?40:Rt(c)?360:No(c)?42:this.particles.length,F=Rt(c)?Math.max(40,Math.min(560,Math.round(P*h))):Math.max(8,Math.min(this.particles.length,Math.round(P*h))),z=c==="prism"?3:1;if(Rt(c)){const G=Nl({fieldStrength:e.fieldStrength,fieldScale:e.fieldScale,fieldEvolve:e.fieldEvolve,density:e.fieldDensity,densityScale:e.fieldDensityScale,densityEvolve:e.fieldDensityEvolve,flow:e.fieldFlow,curl:e.fieldCurl,flowScale:e.fieldFlowScale,attract:e.fieldAttract,repel:e.fieldRepel,radius:e.fieldRadius,inertia:e.fieldInertia,damp:e.fieldDamp,maxV:e.fieldMaxV,scaleAmp:e.fieldScaleAmp,minScale:e.fieldMinScale,maxScale:e.fieldMaxScale,perturb:e.fieldPerturb,warp:e.fieldWarp,sparsity:e.fieldSparsity,contrast:e.fieldContrast,motion:e.fieldMotion});this.agents=this.agents??new uc,this.fieldPoses=this.agents.posesAt(F,_,e.seed>>>0,E,G,f,b,e.fieldPattern??"auto"),this.sim=null}else if(No(c)){this.agents=null;const G=hc({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=Tc(this.sim,c,this.particles.slice(0,F),_,G)}else this.agents=null,this.sim=null;const q=c==="spot"?.34:Rt(c)?.5:zc(c)||c==="chain"?.26:.22,x=(G,O,ae)=>{const W=ae?{...O,...Ic(O,ae)}:O,te=Math.min(W.px*p,ae?.72:q)*Math.min(i,a);if(te<5)return;const N=(.5+W.x)*i,L=(.5+W.y/E)*a;for(let se=0;se<z;se++){o.save();const ie=z>1?(se-1)*te*.09:0,Q=z>1?se===2?te*.06:se===0?-te*.03:0:0;if(N+ie<-te||L+Q<-te||N+ie>i+te||L+Q>a+te){o.restore();continue}o.translate(N+ie,L+Q),o.rotate(W.rot+(z>1?se*.1:0)),O.flip!=null&&o.scale(O.flip,1),O.squash&&o.scale(O.squash,1/Math.max(.35,O.squash)),O.glow&&(o.globalAlpha=O.alpha*.32*O.glow,o.fillStyle=O.tint??l,o.beginPath(),o.arc(0,0,te*(.4+O.glow*.16),0,Math.PI*2),o.fill()),o.globalAlpha=O.alpha*(z>1?.72:1),o.drawImage(G,-te/2,-te/2,te,te),o.restore()}},R=[],k=(G,O)=>{R.push({stamp:G,pose:O})};if(c==="chain"&&y!=="off")wd((G,O)=>k(this.stamp(G),O),y,_,v,h);else for(let G=0;G<F;G++){const O=Rt(c)&&this.agents?this.fieldPoses[G]??null:null,ae=this.particles[(O?.charge??G)%this.particles.length];let W=Rt(c)&&this.agents?O:No(c)&&this.sim?_c(this.sim,G,ae.size):Td(ae,G,c,M,u,d,m,f,F,_,v);W&&(W.alpha<.04||(Rt(c)&&m>.02&&(W={...W,glow:m*.38,squash:(W.squash??1)*(1-m*.045),px:W.px*(1+m*.07)}),k(this.stamp(ae.charge),W)))}let U;if(Ti(e.camera)==="hunt"){const G=Sc({huntWideMin:e.huntWideMin,huntWideMax:e.huntWideMax,huntFollowMin:e.huntFollowMin,huntFollowMax:e.huntFollowMax,huntSnap:e.huntSnap,huntZoom:e.huntZoom,huntTight:e.huntTight,huntReactMin:e.huntReactMin,huntReactMax:e.huntReactMax,huntPrecision:e.huntPrecision,huntSelect:e.huntSelect,huntFocus:e.huntFocus,huntFocusSpeed:e.huntFocusSpeed,huntFocusError:e.huntFocusError,huntVariation:e.huntVariation,cameraFeel:e.cameraFeel});this.hunt=Fc(this.hunt,R.map((O,ae)=>({id:ae,x:O.pose.x,y:O.pose.y,px:O.pose.px})),_,G,e.seed>>>0),U=Ac(this.hunt,G),U.focus>.03&&(o.filter=`blur(${(1.1+U.focus*2.4).toFixed(2)}px)`)}else this.hunt=null;for(const G of R)x(G.stamp,G.pose,U);return o.filter="none",(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="wave")&&m>.04&&(o.save(),o.translate(i*.5,a*.5),o.strokeStyle=je(l,"#fff4d8",.72),o.globalAlpha=.18+m*.42,o.lineWidth=2.6+m*6,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.16+m*.2),0,Math.PI*2),o.stroke(),o.globalAlpha=.1+m*.22,o.beginPath(),o.arc(0,0,Math.min(i,a)*(.3+m*.18),0,Math.PI*2),o.stroke(),o.restore()),this.canvas}}function me(t){return(t%1+1)%1}function jo(t,e,i){const a=Math.cos(i),o=Math.sin(i);return{x:t*a-e*o,y:t*o+e*a}}function Jt(t,e=.28,i=2.55){const a=e+me(t)*i,o=e+i,n=I((o-a)/.3,0,1)*I((a-e)/.1,0,1);return n<=.001?null:{depth:a,fade:n}}function ws(t){const e=me(t);return e<.5?e*2:2-e*2}function Ie(t){return ws(t)-.5}function Td(t,e,i,a,o,n,s,r,l=48,c=a,u){const d=Uo(i),m=Nc(c,r),f=I(Math.max(s*(d?.48:.85),m*(d?.72:.22)),0,1);if(i==="bounce"){const y=.11+Math.abs(t.vx)*2.4,b=.09+Math.abs(t.vy)*2.1;return{x:Ie(t.x+y*a),y:Ie(t.y+b*a*.92),px:I((.1+t.size*.07)*(1+f*.22),.08,.28),glow:f*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const y=a*(2.2+o*.25)+e*.55,b=Math.cos(y);return{x:Ie(t.x+t.vx*a*.45),y:Ie(t.y+t.vy*a*.38),px:I((.12+t.size*.06)*(1+f*.18),.08,.26),glow:f*.35,rot:t.rot+Math.sin(y)*.15,alpha:I(.28+Math.abs(b)*.72,.2,1),flip:b}}if(i==="glow"){const y=.45+.55*Math.sin(a*2.4+e*.7),b=I(y*.4+f*.55+n*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:I((.1+t.size*.08)*(.9+b*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:I(.5+b*.45,.35,1),glow:b}}if(i==="flash"){const y=.7+.3*Math.sin(a*5.2+e)+f*.12,b=Fi[(Math.floor(a*3.2+e*3)>>>0)%Fi.length];return{x:Ie(t.x+t.vx*a*.32),y:Ie(t.y+t.vy*a*.28),px:I((.11+t.size*.07)*(1+f*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:I(y,.4,1),glow:.16+f*.45,tint:b}}if(i==="hop"){const y=r>40?r/60:.85,b=me(a*y+t.z),T=Math.abs(Math.sin(b*Math.PI))*(.72+f*.45)+f*.14,_=Math.cos(b*Math.PI*2);return{x:Ie(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Ie(t.y)*.62-T*.2,px:I(.1+t.size*.07+T*.02,.08,.22),rot:t.rot+T*.55,alpha:1,flip:_}}if(i==="kick"){const y=.1+Math.abs(t.vx)*2.1,b=.08+Math.abs(t.vy)*1.8;return{x:Ie(t.x+y*a),y:Ie(t.y+b*a),px:I((.1+t.size*.07)*(1+f*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:f*.7}}if(i==="jelly"){const y=1+Math.sin(a*5.2+e)*.08+f*.2;return{x:Ie(t.x+t.vx*a*.5),y:Ie(t.y+t.vy*a*.42),px:I(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:y}}if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,E=(_+.5)/6-.5,P=Math.sin(a*1.7+_*.72+T*.18);return{x:M*.9+P*.07,y:E*.74+Math.sin(a*.82+_*.9)*.035,px:I(.085+t.size*.045+f*.05,.06,.2),rot:t.rot+P*.22,alpha:1,glow:f*.5}}if(i==="rings"){const b=e%4,T=Math.floor(e/4),_=12,M=b&1?-1:1,E=T/_*Math.PI*2+a*(.48+b*.08)*M,P=.14+b*.11;return{x:Math.cos(E)*P,y:Math.sin(E)*P*.88,px:I(.07+t.size*.035+f*.05,.05,.18),rot:E+t.rot*.25,alpha:.96,glow:f*.48}}if(i==="loom"){const y=a*1.05+t.x*Math.PI*2,b=a*1.45+t.y*Math.PI*2;return{x:Math.sin(y)*.4+Math.sin(b*.5)*.06,y:Math.sin(y*2+t.z*Math.PI)*.3,px:I(.08+t.size*.045+f*.05,.06,.2),rot:y*.18+t.rot,alpha:1,glow:f*.48}}if(i==="petal"){const b=e%6,T=Math.floor(e/6)/8,_=b/6*Math.PI*2+a*.34,M=.8+.2*Math.sin(a*1.25),E=(.1+T*.32)*M;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.9,px:I(.075+t.size*.04+f*.05,.055,.2),rot:_+Math.PI*.5,alpha:I(.42+M*.55,.4,1),glow:f*.5}}if(i==="flock"){const y=e%5,T=me(t.z+a*(.18+y*.02))*Math.PI*2+y*.32,_=.2+Math.sin(T*2+y)*.1+y*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:I(.075+t.size*.04+f*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:f*.48}}if(i==="wheel"){const b=e%3,M=Math.floor(e/3)/14*Math.PI*2+a*.58*(b===1?-1:1),E=.2+b*.12,P=.5+.5*Math.sin(M);return{x:Math.cos(M)*E,y:Math.sin(M)*E*.72,px:I((.075+t.size*.035)*(.78+P*.28)+f*.05,.05,.22),rot:M,alpha:I(.5+P*.45,.45,1),glow:f*.48}}if(i==="silk"){const y=e%4,b=y<2?1:-1,T=me(t.x+a*.14*b+y*.08),_=(y/3-.5)*.52+Math.sin(T*Math.PI*3+y)*.055;return{x:T-.5,y:_,px:I(.07+t.size*.038+f*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:f*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,E=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),P=I(E*(.42+o*.22+n*.2+m*.28),.18,1),F=.42-_/Math.max(5,1)*P*.82;return{x:M*.86,y:F,px:I(.075+t.size*.03+f*.03,.055,.18),rot:t.rot*.2,alpha:I(.45+(1-_/6)*.5+f*.15,.4,1),glow:f*.55,squash:1-f*.08}}if(i==="ripple"){const b=e%3,T=Math.floor(e/3),_=16,M=me(a*.32),E=.15+b*.145+M*.16+m*.05,P=T/_*Math.PI*2+a*.1;return{x:Math.cos(P)*E,y:Math.sin(P)*E*.88,px:I(.062+t.size*.024+f*.02,.048,.13),rot:P+t.rot*.2,alpha:I(.96-b*.08,.6,1),glow:f*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,M=r>40?r/60*Math.PI*2:5.4,E=T&1?-1:1,P=Math.sin(a*M+T*.85)*.82*E,F=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(P)*F,y:-.44+Math.cos(P)*F,px:I(.07+t.size*.03+f*.028,.05,.16),rot:P,alpha:1,glow:f*.4}}if(i==="burst"){const b=e%3,M=Math.floor(e/3)/16*Math.PI*2+a*.2*(b===1?-1:1),E=(.14+b*.13)*(1+m*.42);return{x:Math.cos(M)*E,y:Math.sin(M)*E*.9,px:I((.08+t.size*.035)*(1+f*.22),.055,.22),rot:M+t.rot*.2,alpha:I(.55+f*.4,.45,1),glow:f*.75,squash:1+f*.14}}if(i==="halo"){const b=e%2,M=Math.floor(e/2)/24*Math.PI*2+a*.26*(b?-1:1),E=.84+.16*Math.sin(a*1.15)+f*.2,P=(.26+b*.14)*E,F=I(.28+f*.65+n*.15,0,1);return{x:Math.cos(M)*P,y:Math.sin(M)*P*.9,px:I(.07+t.size*.032+F*.04,.05,.18),rot:M+Math.PI*.5,alpha:I(.5+F*.45,.4,1),glow:F}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,M=(T+.5)/16-.5,E=.09+o*.05+m*.08,P=M*Math.PI*3.4+a*2.15+_*.55;return{x:M*.92,y:(_-1)*.2+Math.sin(P)*E,px:I(.065+t.size*.03+f*.026,.05,.15),rot:Math.cos(P)*.32,alpha:1,glow:f*.45}}if(i==="drop"){const y=Wc(s),b=y*y;return{x:t.x-.5,y:t.y-.5-b*.07,px:I((.1+t.size*.075)*(1+y*.9),.07,.44),glow:y*.95,rot:t.rot,alpha:1,squash:1-y*.2}}if(i==="spot"){const y=Math.max(8,l),b=jc(c,r,y),T=e===b,_=T?I(Math.max(s,f),0,1):0,M=e/y*Math.PI*2,E=.3;return{x:Math.cos(M)*E,y:Math.sin(M)*E*.78,px:I((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const y=st(r),b=Ie(t.x+(.16+Math.abs(t.vx)*.5)*c*y),T=Ie(t.y+(.13+Math.abs(t.vy)*.42)*c*y*.9),_=Math.min(.5-Math.abs(b),.5-Math.abs(T));return{x:b,y:T,px:I(.08+t.size*.04+f*.02,.06,.18),glow:(_<.065?.55:0)+f*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const b=cs(c,r,2),T=Math.floor(e/16)%2,_=(e%16/16+b/16)*Math.PI*2*(T?-1:1),M=.26+T*.12;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.8,px:I(.07+t.size*.03+f*.02,.05,.16),rot:_,alpha:1,glow:f*.55}}if(i==="moire"){const y=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(y?-.78:.62),_=.2+y*.13+m*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:I(.065+t.size*.028+f*.018,.048,.14),rot:T+t.rot*.2,alpha:y?.78:1,glow:f*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,M=_&1?1:-1;return{x:(me((T+.5)/8+c*st(r)*.28*M)-.5)*.92,y:((_+.5)/6-.5)*.78,px:I(.07+t.size*.03+f*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:f*.42}}if(i==="zip"){const y=e%3,b=y===1?-1:1,T=1-m*.16;return{x:(me(t.x+c*st(r)*.34*b*T+y*.12)-.5)*.94,y:(y/2-.5)*.52,px:I(.07+t.size*.032+f*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:f*.4}}if(i==="ghost"){const y=(e&1)===0,b=y?0:1/st(r),T=t.x*Math.PI*2+(c-b)*st(r)*1.35,_=.3+Math.sin((c-b)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:I(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:y?1:.34,glow:y?f*.5:.12}}if(i==="poly"){const y=e&1,b=y?8:12,T=Math.floor(e/2)%b,_=y?3:4,M=T/b*Math.PI*2+c*st(r)*(_/4)*(y?-1:1),E=.2+y*.15;return{x:Math.cos(M)*E,y:Math.sin(M)*E*.84,px:I(.068+t.size*.03+f*.018,.05,.15),rot:M,alpha:1,glow:f*.45}}if(i==="fall"){const y=me(t.z+c*st(r,.5)),b=ws(y),T=b*b,_=b>.82?(b-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:I(.075+t.size*.035+f*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:f*.4,squash:1-_*.28}}if(i==="liss"){const y=st(r),b=c*y*Math.PI*2*1.5+t.x*6.2,T=c*y*Math.PI*2+t.y*5.4;return{x:Math.sin(b)*.4,y:Math.sin(T)*.32,px:I(.07+t.size*.032+f*.02,.05,.16),rot:b*.15+t.rot,alpha:1,glow:f*.42}}if(i==="snap"){const y=cs(c,r,1)&1?1:-1,b=Math.floor(e/8)%5,T=e%8;return{x:y*(.2+T/7*.1),y:(b/4-.5)*.72,px:I(.072+t.size*.03+f*.025,.05,.16),rot:t.rot*.2+y*.08,alpha:1,glow:f*.6,squash:1-f*.1}}if(i==="chain"){const y=u?.travel??1,b=u?.morph??.7,T=u?.vary??1,_=u?.smooth??.72,E=.62/Math.max(8,l),P=me(c*y*.14-e*E),F=c*b,z=Ga(P,F,T,_),q=Ga(me(P+E),F,T,_),x=Math.max(.42,1.05-z.z*.55),R=Math.max(.42,1.05-q.z*.55),k=z.x/x,U=z.y/x,G=Math.atan2(q.y/R-U,q.x/R-k),O=I(1.12/x,.55,1.85);return{x:k,y:U,px:I((.072+t.size*.028)*O,.05,.24),rot:G,alpha:I(.52+O*.42,.5,1)}}if(i==="tunnel"){const b=.3+me(t.z-a*(.4+o*.22+n*.1))*2.45;if(b<.34||b>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/b;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:I(.2*t.size*(.95+n*.1+f*.26)/b,.04,.5),glow:f*.42,rot:t.rot+t.vr*a*.2,alpha:I((2.65-b)/.28,0,1)*I((b-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,E=.32+(1-me(a*(.2+o*.12)+t.z*.02))*2.2;return{x:T/(E*.62),y:_/(E*.62),px:I(.16*t.size/E,.05,.42),rot:t.rot*.25,alpha:I((2.4-E)/.25,0,1)}}if(i==="bloom"){const y=me(t.z-a*(.34+n*.12)),b=y*y,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*b*.92,y:Math.sin(T)*b*.92,px:I(.05+b*.32*t.size*(1+o*.06+f*.24),.04,.48),glow:f*.4,rot:t.rot+y*.4,alpha:I(1.05-b,0,1)*I(y/.08,0,1)}}if(i==="spiral"){const b=.28+me(t.z-a*(.4+o*.2+n*.08))*2.6;if(b<.32||b>2.75)return null;const T=t.x*Math.PI*2+2.15/b+a*.1,_=(.1+t.y*.38)/b;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:I(.2*t.size*(.94+n*.1+f*.26)/b,.04,.52),glow:f*.4,rot:t.rot+T*.15,alpha:I((2.75-b)/.28,0,1)*I((b-.28)/.1,0,1)}}if(i==="helix"){const b=.26+me(t.z-a*(.46+o*.22+n*.08))*2.7;if(b<.3||b>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/b)+t.x*Math.PI*2+T,M=(.11+t.y*.26)/b;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.92,px:I(.22*t.size*(.93+n*.1+f*.26)/b,.04,.54),glow:f*.4,rot:_+t.rot,alpha:I((2.85-b)/.28,0,1)*I((b-.26)/.1,0,1)}}if(i==="prism"){const b=.28+me(t.z-a*(.42+o*.2+n*.08))*2.55;if(b<.32||b>2.7)return null;const T=a*.22+t.rot*.4,_=me(t.x)-.5,M=me(t.y)-.5,E=Math.cos(T),P=Math.sin(T);return{x:(_*E-M*P)/b,y:(_*P+M*E)/b,px:I(.2*t.size*(.94+n*.1+f*.26)/b,.04,.52),glow:f*.4,rot:t.rot+T,alpha:I((2.7-b)/.26,0,1)*I((b-.28)/.1,0,1)}}if(i==="gyre"){const y=Jt(t.z-a*.4,.28,2.6);if(!y)return null;const{depth:b,fade:T}=y,_=a*.2+t.x*Math.PI*2,M=.22+t.y*.5,E=Math.cos(_)*M,P=Math.sin(_*.93)*M*.86,F=jo(E,P,a*.12);return{x:F.x/b,y:F.y/b+Math.sin(a*.16)*.05,px:I(.22*t.size*(.93+n*.1+f*.26)/b,.04,.55),glow:f*.42,rot:t.rot+_*.2+t.vr*a*.08,alpha:T}}if(i==="well"){const y=Jt(t.z-a*.4,.26,2.65);if(!y)return null;const{depth:b,fade:T}=y,_=t.x*Math.PI*2+a*.16+2.6*Math.log(b+.18),M=(.2+e%8*.028)/Math.pow(b,.82);return{x:Math.cos(_)*M,y:Math.sin(_)*M,px:I(.21*t.size*(.93+n*.1+f*.26)/b,.04,.54),glow:f*.42,rot:t.rot+_*.2,alpha:T}}if(i==="hall"){const y=Jt(t.z-a*.42,.3,2.5);if(!y)return null;const{depth:b,fade:T}=y,_=e%4,M=me(t.x*.72+t.y*.28)-.5,E=.05/b;let P=0,F=0;_===0?(P=-.52/b-E,F=M/b):_===1?(P=.52/b+E,F=M/b):_===2?(P=M/b,F=-.4/b-E):(P=M/b,F=.4/b+E);const z=jo(P,F,.42/b+a*.08);return{x:z.x,y:z.y,px:I(.2*t.size*(.93+n*.1+f*.26)/b,.04,.5),glow:f*.4,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="drift"){const y=Jt(t.z-a*.4,.28,2.58);if(!y)return null;const{depth:b,fade:T}=y,M=e%5*1.256,E=a*.09,P=me(t.x+Math.cos(M)*E)-.5,F=me(t.y+Math.sin(M)*E*.72)-.5;return{x:P/b,y:F/b,px:I(.21*t.size*(.93+n*.1+f*.26)/b,.04,.52),glow:f*.42,rot:t.rot+t.vr*a*.1,alpha:T}}if(i==="braid"){const y=Jt(t.z-a*.44,.26,2.68);if(!y)return null;const{depth:b,fade:T}=y,_=e%3,M=a*1.12+t.x*Math.PI*2+_*Math.PI*2/3+.95/b,E=(.13+t.y*.2)/b,P=Math.sin(a*.2+_*2.1)*.07;return{x:Math.cos(M)*E+P,y:Math.sin(M)*E*.9,px:I(.22*t.size*(.93+n*.1+f*.26)/b,.04,.54),glow:f*.4,rot:M+t.rot,alpha:T}}if(i==="sway"){const y=Jt(t.z-a*.46,.26,2.7);if(!y)return null;const{depth:b,fade:T}=y,_=Math.sin(a*.19)*.48,M=Math.cos(a*.13)*.3,E=Math.sin(a*.07)*.32,P=me(t.x+t.vx*a*.03)-.5,F=me(t.y+t.vy*a*.02)-.5,z=jo(P,F,E),q=1/b-.38;return{x:z.x/b+_*q,y:z.y/b+M*q,px:I(.24*t.size*(.92+n*.1+f*.28)/b,.04,.58),glow:f*.46,rot:t.rot+t.vr*a*.12+E*.4,alpha:T}}const h=.26+me(t.z-a*(.46+o*.24+n*.1))*2.7;if(h<.3||h>2.85)return null;const g=(me(t.x+t.vx*a*.03)-.5)/h,v=(me(t.y+t.vy*a*.02)-.5)/h;return{x:g,y:v,px:I(.24*t.size*(.92+n*.1+f*.28)/h,.04,.6),glow:f*.48,rot:t.rot+t.vr*a*.12,alpha:I((2.85-h)/.3,0,1)*I((h-.26)/.1,0,1)}}const ei={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a","#083040","#d4b878","#4a6a88","#0a1828","#b86838","#c8d8e8"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810","#ff8ab0","#180410","#e8a040","#4a0818","#ffd6a0","#0c0408"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18","#ffe8a0","#4a3020","#f07040","#1a1008","#c8e8d0","#e85828"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028","#0c1810","#b8d090","#547848","#e8d8b0","#14241c","#9ab878"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018","#ffe0e8","#4a1028","#d87890","#14080c","#f8c8d4","#6a2840"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848","#080c1c","#4a38a0","#7aa2ff","#141030","#c8d4ff","#2a3068"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0","#ffb0c8","#180810","#ff8ab8","#fff8ec","#c46078","#ffd0c0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828","#080610","#6a3088","#ffd86a","#1c0c24","#e8b0d0","#101018"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818","#140c08","#ffc080","#a03818","#efe0c4","#4a2010","#e86030"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058","#0a1420","#b8d0e0","#5a88a8","#fff4c8","#183040","#e8c860"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020","#080808","#ffd86a","#5a5a60","#d8c070","#202028","#e87840"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018","#080510","#00e8d0","#ff6ae8","#1c0c30","#c8ff88","#3a1868"],haunt:["#140818","#2a1038","#1a0820","#0a0612","#4a1860","#9a6cff","#241028","#6a3088","#101018","#3a1848","#080410","#c49aff","#5a2080","#180c20","#e8c8ff","#2a1040"],sport:["#1a1008","#ff7a1a","#2a180c","#0c0a08","#f0c020","#c44a18","#3a2010","#e8a040","#181008","#8a3810","#100804","#ffc060","#e86018","#24140c","#fff0a8","#4a280c"],school:["#102038","#3a6ad8","#f0e2c4","#0c1424","#d44c4c","#2a3858","#e8d090","#183050","#8aa0c8","#241820","#081018","#c8d4e8","#4a78c8","#1a2438","#f4e8d0","#c45c5c"]};function _d(t){return ei[t]}function je(t,e,i){const a=parseInt(t.slice(1),16),o=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(o))return t;const n=I(i,0,1),s=l=>Math.round((a>>l&255)*(1-n)+(o>>l&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function Sd(t,e,i,a,o,n,s,r=0,l=0,c=!1,u=Do[o]){const d=ye(s+4>>>0),m=We(d,ei[o]),f=We(d,ei[o]),p=We(d,ei[o]),h=c?je(a,"#08060a",.68):a;t.fillStyle=h,t.fillRect(0,0,e,i);const g=t.createLinearGradient(0,0,e,i);if(c){const T=je(u,"#ffd8a8",.3),_=.16+l*.4+r*.06;g.addColorStop(0,je(h,T,_*.55)),g.addColorStop(.48,je(h,m,.2)),g.addColorStop(1,je(h,f,.24))}else g.addColorStop(0,je(a,m,.38)),g.addColorStop(.45,je(a,p,.28)),g.addColorStop(1,je(a,f,.42));t.fillStyle=g,t.fillRect(0,0,e,i);const v=e*(.5+Math.sin(n*.17)*.08),y=i*(.46+Math.cos(n*.13)*.06),b=t.createRadialGradient(v,y,0,v,y,Math.max(e,i)*.72);if(c){const T=je(u,"#ffd8a8",.28);b.addColorStop(0,je(h,T,.22+l*.38+r*.05)),b.addColorStop(1,h)}else b.addColorStop(0,je(a,m,.42+r*.1)),b.addColorStop(1,a);t.fillStyle=b,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function xd(t,e=0){const i=ye(e+17>>>0);return We(i,ei[t])}function Ri(t,e){const i=ye(t+17>>>0);return We(i,ei[Ct[Math.floor(i()*Ct.length)]])}function zi(t,e="#c41e3a"){const i=ye(t+91>>>0);return i()<.35?e:We(i,Fi)}function Cd(t){return Do[t]}function Ut(t){return Ct[(t>>>0)%Ct.length]}const Oi=["kit","brine","candy","citrus","moss","dusk","cream","neon","ice","ember","grape","soda","gold","lagoon","copper","mint","wine","peach","violet","sand","cobalt"],Vo={kit:"Kit",brine:"Brine",candy:"Candy",citrus:"Citrus",moss:"Moss",dusk:"Dusk",cream:"Cream",neon:"Neon",ice:"Ice",ember:"Ember",grape:"Grape",soda:"Soda",gold:"Gold",lagoon:"Lagoon",copper:"Copper",mint:"Mint",wine:"Wine",peach:"Peach",violet:"Violet",sand:"Sand",cobalt:"Cobalt"},Go={brine:{ink:"#d8c078",grounds:["#071824","#0b2a3c","#123848","#0e4050","#1a2838","#c4a05a","#7aa0b0","#082030","#e2d0a0","#2a5060","#0a1824","#8ab0c0"],palette:{shadow:"#071824",highlight:"#e2d0a0",leak:"#c4a05a",inkA:"#06141c",inkB:"#d8c078"}},candy:{ink:"#ff4a9a",grounds:["#3a1024","#ff6aa8","#ffe0f0","#2a0818","#ff8ab8","#f4c4d8","#ffd0e8","#180810","#e878a8","#ffb0d0","#4a1830","#fff0f6"],palette:{shadow:"#2a0818",highlight:"#ffe0f0",leak:"#ff6aa8",inkA:"#180810",inkB:"#ffb0d0"}},citrus:{ink:"#f0a020",grounds:["#241808","#ffe08a","#ff9a2a","#1a1004","#f4d060","#ff7a18","#fff4c8","#3a2810","#e8b040","#ffc04a","#140c04","#f8e8a0"],palette:{shadow:"#1a1004",highlight:"#fff4c8",leak:"#ff9a2a",inkA:"#140c04",inkB:"#ffe08a"}},moss:{ink:"#c8e878",grounds:["#142418","#2a4030","#d8ecc0","#0c1810","#4a6848","#a8c878","#1a3020","#e8f4d0","#6a8858","#243828","#c4dca0","#081208"],palette:{shadow:"#0c1810",highlight:"#e8f4d0",leak:"#a8c878",inkA:"#081208",inkB:"#c8e878"}},dusk:{ink:"#ff8a6a",grounds:["#1a1020","#3a2048","#c47888","#100818","#5a3068","#e8a090","#241428","#8a5080","#181028","#f0c0a8","#2a1838","#0c0814"],palette:{shadow:"#100818",highlight:"#f0c0a8",leak:"#c47888",inkA:"#0c0814",inkB:"#ff8a6a"}},cream:{ink:"#c45c4a",grounds:["#f4ead4","#e8d4b0","#fff6e4","#d8c49a","#f0e0c4","#c8b080","#ffe8c8","#e0c8a0","#f8f0dc","#b89868","#efe4c8","#d4bc90"],palette:{shadow:"#c8b080",highlight:"#fff6e4",leak:"#e8a070",inkA:"#3a2414",inkB:"#f4ead4"}},neon:{ink:"#7cff6a",grounds:["#100818","#ff4ad4","#2a1040","#0a0610","#7cff6a","#1a0830","#f0d86a","#4a1868","#00e8d0","#241048","#ff6ae8","#080510"],palette:{shadow:"#0a0610",highlight:"#7cff6a",leak:"#ff4ad4",inkA:"#080510",inkB:"#f0d86a"}},ice:{ink:"#7ad8ff",grounds:["#0a1828","#c8e8f8","#1a3048","#061018","#8ac8e8","#e8f4fc","#143048","#4a88b0","#0c2030","#b8dcec","#204060","#f0f8fc"],palette:{shadow:"#061018",highlight:"#e8f4fc",leak:"#7ad8ff",inkA:"#041018",inkB:"#c8e8f8"}},ember:{ink:"#ff6a28",grounds:["#1a0c08","#ff7a28","#3a1810","#100804","#c44a18","#f0a040","#241008","#e86820","#180c08","#ffc070","#4a2010","#8a3010"],palette:{shadow:"#100804",highlight:"#ffc070",leak:"#ff7a28",inkA:"#140804",inkB:"#f0a040"}},grape:{ink:"#c47aff",grounds:["#180818","#6a2088","#2a1038","#100810","#9a4ac8","#e8c0ff","#241028","#4a1860","#c48ae8","#0c0610","#3a1848","#d8a8f0"],palette:{shadow:"#100810",highlight:"#e8c0ff",leak:"#9a4ac8",inkA:"#0c0610",inkB:"#c47aff"}},soda:{ink:"#ff4a6a",grounds:["#081828","#ff4a6a","#1a3048","#041018","#7ad8ff","#f0f4f8","#123040","#e83858","#0c2030","#4aa8d8","#fff0f4","#2a4860"],palette:{shadow:"#041018",highlight:"#f0f4f8",leak:"#ff4a6a",inkA:"#041018",inkB:"#7ad8ff"}},gold:{ink:"#f0c020",grounds:["#1a1408","#f0c020","#3a2c10","#100c04","#c49828","#ffe878","#241c0c","#e8b830","#181008","#fff4b0","#4a3814","#a87820"],palette:{shadow:"#100c04",highlight:"#fff4b0",leak:"#f0c020",inkA:"#140c04",inkB:"#ffe878"}},lagoon:{ink:"#3dffd0",grounds:["#041820","#0e3840","#b8fff2","#031018","#2a6870","#7dffc4","#0a2830","#e0fff8","#1a4850","#4aa898","#082028","#c8fff6"],palette:{shadow:"#031018",highlight:"#e0fff8",leak:"#3dffd0",inkA:"#021014",inkB:"#7dffc4"}},copper:{ink:"#e87838",grounds:["#241410","#c46a38","#f2d2a0","#180c08","#8a3a18","#e8b86a","#2a1810","#d87838","#1a100c","#f4e8d0","#5a2818","#b85828"],palette:{shadow:"#180c08",highlight:"#f4e8d0",leak:"#e87838",inkA:"#140804",inkB:"#f2d2a0"}},mint:{ink:"#4ad8a8",grounds:["#10241c","#b8f0d8","#1a3830","#0c1814","#7ed8c4","#e8fff4","#244840","#5aa890","#142820","#d0f4e8","#0a1410","#c4ece0"],palette:{shadow:"#0c1814",highlight:"#e8fff4",leak:"#4ad8a8",inkA:"#081410",inkB:"#b8f0d8"}},wine:{ink:"#e84a6a",grounds:["#1a0810","#6a1830","#f0c0c8","#100608","#8b1e4a","#e8a0b0","#241018","#c45c78","#14080c","#f8d8dc","#3a1020","#a03858"],palette:{shadow:"#100608",highlight:"#f8d8dc",leak:"#e84a6a",inkA:"#0c0408",inkB:"#f0c0c8"}},peach:{ink:"#ff7a4a",grounds:["#2a1410","#ffb080","#f4d4c0","#1a0c08","#e87850","#ffe0c8","#3a2018","#ffc4a0","#180c08","#fff0e4","#c45c38","#f0a888"],palette:{shadow:"#1a0c08",highlight:"#fff0e4",leak:"#ff7a4a",inkA:"#140804",inkB:"#ffc4a0"}},violet:{ink:"#8a6ad8",grounds:["#141028","#6a4ac8","#d8c8ff","#0c0a18","#4a38a0","#e8dcff","#1c1838","#8a70d8","#100c20","#c4b4f0","#2a2450","#b49ae8"],palette:{shadow:"#0c0a18",highlight:"#e8dcff",leak:"#8a6ad8",inkA:"#080614",inkB:"#d8c8ff"}},sand:{ink:"#c48a4a",grounds:["#2a2014","#e8d0a0","#f4ead4","#1a140c","#c4a06a","#fff4dc","#3a2c18","#d8b878","#20180c","#f0e2c4","#8a6a38","#e0c490"],palette:{shadow:"#1a140c",highlight:"#fff4dc",leak:"#c48a4a",inkA:"#140c08",inkB:"#e8d0a0"}},cobalt:{ink:"#4a78ff",grounds:["#081028","#1a3a88","#c8d4ff","#060c1c","#3a6ad8","#e4eaff","#102048","#7aa2ff","#0a1428","#a8b8f0","#183060","#dce4ff"],palette:{shadow:"#060c1c",highlight:"#e4eaff",leak:"#4a78ff",inkA:"#040814",inkB:"#c8d4ff"}}},qt=[...[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],...Object.values(Go).map(t=>t.palette)];function Hi(t){return t&&Oi.includes(t)?t:"kit"}function ti(t,e){const i=Hi(e);return i==="kit"?_d(t):Go[i].grounds}function vt(t,e){const i=Hi(e);return i==="kit"?Cd(t):Go[i].ink}function Ka(t,e=0,i){const a=ti(t,i),o=ye(e+17>>>0);return a[Math.floor(o()*a.length)%a.length]}function Xa(t){return Oi[Math.floor(t()*Oi.length)%Oi.length]}function ks(t){return qt[Math.floor(t()*qt.length)%qt.length]}function Be(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const Md=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ed=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Pd=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Fd=[{id:"halftone",name:"Dot Screen",category:"texture",description:"Ben-Day / newsprint dots that turn the collage into a printed sheet",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.72},{id:"scale",label:"Scale",kind:"float",min:.35,max:2.4,step:.01,default:1},{id:"contrast",label:"Ink",kind:"float",min:0,max:1,step:.01,default:.42},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ad=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Id=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ts=`
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
`,_s=`
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
`,Bd=`
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
`,Rd=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,zd=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Ss=`
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
`,Ko={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Ss}${_s}`,applyGlsl:Rd};function Od(t){return t?{...Ko,extraUniforms:`${Ss}${_s}${Bd}`,applyGlsl:zd}:Ko}const Hd=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Ts}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Ko],Xo=[...Md,...Ed,...Pd,...Fd,...Ad,...Id,...Hd],Ld=new Map(Xo.map(t=>[t.id,t]));function Nd(){return Xo}function rt(t){return Ld.get(t)}function Ud(){const t={};for(const e of Xo)(t[e.category]??=[]).push(e);return t}const qd=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"texture",label:"Texture"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Zo(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(o=>({...o,params:{...o.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Be("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function Dd(t,e){const i=e.data,a=t.sources.map(n=>n.id),o=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&a.includes(n.sourceId)?n.sourceId:a[Math.min(s,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:o,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function $d(t,e){if(t.length===0)return null;const i=ye(e);return t[Math.floor(i()*t.length)]}function Wd(t){return{...t,id:Be("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const xs=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function jd(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(u=>{const d=parseInt(u.slice(1),16),m=d>>16&255,f=d>>8&255,p=d&255,h=g=>I(Math.round(Oe(g,t()*255,a)),0,255);return`#${[h(m),h(f),h(p)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const o=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),r=o+t()*(n-o),l=Oe(s,r,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function Qo(t,e,i,a){const o=rt(t.typeId);if(!o)return t;const n=ye(e),s={...t.params};for(const r of o.params)a&&r.id!==a||(s[r.id]=jd(n,r,s[r.id]??r.default,I(i,0,1)));return{...t,params:s}}function Vd(t,e,i,a=!1,o){const n=t.effects.map((s,r)=>a&&o&&s.id!==o?s:Qo(s,e+r*997,i));return{...t,effects:n}}function Yo(t,e,i){const a=rt(t),o={};if(a)for(const n of a.params)o[n.id]=n.default;return Qo({id:Be("fx"),typeId:t,enabled:!0,params:o},e,i)}function Jo(t,e,i,a){const o={...t.params};if(t.typeId==="grade"&&(e==="lush"?(o.saturation=.18+a()*.42,o.brightness=-.04+a()*.16,o.contrast=.06+a()*.22,o.gamma=.82+a()*.35,o.hue=(a()-.5)*.18,o.exposure=-.15+a()*.4):e==="outsider"?(o.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,o.contrast=.2+a()*.55,o.gamma=.55+a()*1.1,o.hue=(a()-.5)*.7):(o.saturation=.05+a()*.5,o.contrast=.1+a()*.35,o.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(o.shadow=i.shadow,o.highlight=i.highlight,o.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(o.leakColor=i.leak,o.leak=e==="lush"?.18+a()*.35:a()*.22,o.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(o.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,o.halation=e==="lush"?.22+a()*.4:a()*.25,o.size=1.4+a()*2.2),t.typeId==="warp"&&(o.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(o.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(o.mixScan=e==="lush"?a()*.2:.25+a()*.5,o.noise=e==="lush"?a()*.1:.12+a()*.35),(t.typeId==="halftone"||t.typeId==="riso"||t.typeId==="hatch"||t.typeId==="holo"||t.typeId==="crackle"||t.typeId==="nap")&&(o.amount=e==="lush"?.38+a()*.32:.5+a()*.38),t.typeId==="posterize"&&(o.levels=3+Math.floor(a()*6),o.dither=.08+a()*.35),t.typeId==="threshold"&&(o.mix=.35+a()*.45,o.soft=.04+a()*.18),t.typeId==="critters"){o.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),o.size=.85+a()*.7,o.amount=.7+a()*.3,o.speed=.7+a()*1.3,o.seed=1+Math.floor(a()*9998);const n=a();e==="lush"?o.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?o.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":o.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){o.size=.12+a()*.05,o.count=1,o.crowd="normal",o.place="center";const n=a();e==="lush"?o.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?o.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":o.move=n>.78?"drift":"dance",o.echo=.35+a()*.5,o.amount=1,o.speed=o.move==="dance"?.55+a()*1.5:.32+a()*.7,o.seed=1+Math.floor(a()*9998);const s=a();e==="lush"?o.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?o.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":o.grow=s>.62?"quiet":s>.4?"horns":"wild";const r=a();e==="lush"?o.coat=r>.48?"cream":r>.24?"moss":"wild":e==="mix"?o.coat=r>.5?"sodium":r>.26?"cream":"wild":o.coat=r>.55?"night":"wild"}return t.typeId==="kaleido"&&(o.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),o.zoom=.7+a()*.8),t.typeId==="channels"&&(o.tint=i.leak,o.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(o.lo=.1+a()*.22,o.hi=.5+a()*.35,o.amount=.45+a()*.4,o.invert=a()>.72),t.typeId==="dropout"&&(o.amount=.28+a()*.4,o.rate=.18+a()*.4,o.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:o}}function Gd(t,e="mix"){const i=ye(t>>>0);return Jo(Yo("critters",t,.85),e,qt[t%qt.length],i)}function Kd(t,e="mix"){const i=ye(t>>>0);return Jo(Yo("dancer",t,.85),e,qt[t%qt.length],i)}function Xd(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Kd(t.seed+i*4243,"mix")]})}}function Cs(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,Gd(t.seed+i*7919,"mix")]})}}function Zd(){return xs.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Qd(){return Nd().map(t=>t.id).filter(t=>t!=="dancer")}function Yd(t,e){const i=ye(t>>>0),a=Qd(),o=e?3:2,n=e?5:4,s=Math.min(a.length,o+Math.floor(i()*(n-o+1))),r=[];for(let l=0;l<s&&a.length;l++){const c=Math.floor(i()*a.length);r.push(a.splice(c,1)[0])}return r}function Jd(t,e,i,a=!1,o=!0){const n=ye(e+17>>>0),s=a?n()>.5?"outsider":"mix":n()>.55?"lush":n()>.35?"mix":"outsider",r=ks(n),l=o?Yd(e,a).map((c,u)=>Jo(Yo(c,e+u*3331,i),s,r,ye(e+u*1117>>>0))):[];return{...t,blendMode:"normal",opacity:1,effects:l,feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function Ye(t,e,i){return Oe(e,i,t())}function en(t){const e=hi(Ye(t,.45,.85)),i=mi(Math.max(e+.08,Ye(t,1.3,2.4)));return{collageFieldPattern:Xt[Math.floor(t()*Xt.length)],collageFieldEvolve:fi(Ye(t,.75,1.35)),collageFieldDamp:la(0),collageFieldStrength:ci(Ye(t,.8,1.6)),collageFieldDensity:ui(Ye(t,.8,1.5)),collageFieldSparsity:vi(Ye(t,.4,1.4)),collageFieldPerturb:pi(Ye(t,.02,.5)),collageFieldCurl:di(Ye(t,.1,.9)),collageFieldWarp:gi(Ye(t,.6,1.6)),collageFieldMotion:yi(Ye(t,.15,.8)),collageFieldContrast:bi(Ye(t,.6,1.6)),collageFieldMinScale:e,collageFieldMaxScale:i}}function eh(t,e){const i=ye(e>>>0),a="field",o=t.collageKit,n=t.collageKitB;return{...t,generator:Pi(a),collageMove:a,...en(i),name:o?n?`${Lt[a]} · ${o} · ${n}`:`${Lt[a]} · ${o}`:t.name}}function Ms(t,e,i,a,o,n=!1,s=!0){const r=Math.max(t.randomAmount,e==="all"?.75:0),l=t.seed>>>0,c=ye(l^2654435769),u=t.layers.map((b,T)=>e==="selected"&&b.id!==i?b:e==="param"?b.id!==i?b:{...b,effects:b.effects.map(_=>_.id===a&&o?Qo(_,l+T*13,Math.max(r,.55),o):_)}:e==="all"?Jd(b,l+T*7919,r,n,s):Vd(b,l+T*7919,r,!0,a)),d=os,m=ye(l+0*7919>>>0),f=Zd(),p=f[Math.floor(m()*f.length)]??xs[0],g={"herald tour":{generator:"heraldry",a:Ri(l),b:zi(l)},"dense paper":{generator:"wallpaper",a:Ri(l+3),b:zi(l+3,"#1c4db8")},"giant charges":{generator:"giants",a:Ri(l+5),b:zi(l+5)},"heart rain":{generator:"shower",a:Ri(l+7),b:zi(l+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Ri(l+9),b:zi(l+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[p.name],v=t.sources.map((b,T)=>{if(e!=="all"||b.kind!=="generator")return b;const _=ye(l+T*131),M=ks(_);if(Pe(b.generator)||os.includes(b.generator)){const R=Ut(l+T*41),k=qo(l+T*73),U=Ut(l+T*99),G=_()>.74&&U!==R?U:void 0,O=Xa(_);return{...b,generator:Pi(k),collageKit:R,collageKitB:G,collageMove:k,collageColorPack:O,collageNight:_()>.8,collageScale:.62+_()*.24,collageDensity:.72+_()*.3,collagePace:.72+_()*.22,collageChainTravel:.65+_()*.9,collageChainMorph:.35+_()*.85,collageChainVary:.65+_()*.8,collageChainSmooth:.4+_()*.45,collageChainAnimal:k==="chain"&&_()>.55?Va[1+Math.floor(_()*5)]:"off",...k==="field"?en(_):{},collageCamera:b.collageCamera??"fixed",collageCameraFeel:b.collageCameraFeel,collageHuntWideMin:b.collageHuntWideMin,collageHuntWideMax:b.collageHuntWideMax,collageHuntFollowMin:b.collageHuntFollowMin,collageHuntFollowMax:b.collageHuntFollowMax,collageHuntSnap:b.collageHuntSnap,collageHuntZoom:b.collageHuntZoom,collageHuntTight:b.collageHuntTight,collageHuntReactMin:b.collageHuntReactMin,collageHuntReactMax:b.collageHuntReactMax,collageHuntPrecision:b.collageHuntPrecision,collageHuntSelect:b.collageHuntSelect,collageHuntFocus:b.collageHuntFocus,collageHuntFocusSpeed:b.collageHuntFocusSpeed,collageHuntFocusError:b.collageHuntFocusError,collageHuntVariation:b.collageHuntVariation,colorA:Ka(R,l+T*17,O),colorB:vt(R,O),name:G?`${Lt[k]} · ${R} · ${G}`:`${Lt[k]} · ${R}`}}const E=n?!1:_()>.35,P=g?g.generator:E?b.generator:d[Math.floor(_()*d.length)],F=Ut(l+T*41),z=Xa(_),q=Pe(P)?Ka(F,l+T*17,z):M.inkA,x=Pe(P)?vt(F,z):M.inkB;return{...b,generator:P,collageKit:Pe(P)?F:b.collageKit,collageColorPack:Pe(P)?z:b.collageColorPack,colorA:g?g.a:q,colorB:g?vt(F,z):x}}),y=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:u,sources:v,globalFeedback:y}}function th(t){const e=t.seed+7919>>>0,i=ye(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],o=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((r,l)=>{if(!Pe(r.generator))return r;const c=Ct[Math.floor(i()*Ct.length)],u=qo(e+l*59),d=Xa(i);return{...r,generator:Pi(u),collageKit:c,collageMove:u,collageColorPack:d,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,collageChainAnimal:u==="chain"&&i()>.55?Va[1+Math.floor(i()*5)]:"off",...u==="field"?en(i):{},collageCamera:r.collageCamera??"fixed",collageCameraFeel:r.collageCameraFeel,collageHuntSelect:r.collageHuntSelect,collageHuntFocus:r.collageHuntFocus,collageHuntVariation:r.collageHuntVariation,colorA:Ka(c,e+l*13,d),colorB:vt(c,d),name:`${Lt[u]} · ${c}`}}),layers:t.layers.map(r=>({...r,effects:r.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:o[Math.floor(i()*o.length)],coat:n[Math.floor(i()*n.length)]}}:l)}))};return s=Cs(s),s}function ih(){return{x:0,y:0,scale:1,rotation:0}}function ah(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Es(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function oh(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function nh(){return{width:1280,height:720,fps:30,duration:4,format:"png",quality:.97,bitrate:12,filename:"phosphene",loopClose:!0}}const sh={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Za={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE",haunt:"HAUNT",sport:"SPORT",school:"SCHOOL"},rh={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Ps(t,e,i,a){const o=t==="chain"?Ei(a):"off",n=o!=="off"?`CHAIN · ${ls[o].toUpperCase()}`:Lt[t];return i&&i!==e?`${n} · ${Za[e]} · ${Za[i]}`:`${n} · ${Za[e]}`}function ii(t="plasma",e,i,a){const o=Pe(t)?Nt(e):void 0,n=sh[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let s;o&&(s=i==="mix"||i==="tour"?qo(Date.now()+Math.floor(Math.random()*997)):i?ss(i):fs(t));const r=s?Pi(s):t??"plasma",l=s?Lt[s]:rh[t??""]??(t?t.toUpperCase():"SIGNAL"),c=o&&a?.kitB?Nt(a.kitB):void 0,u=c&&o&&c!==o?c:void 0,d=o&&s?Ps(s,o,u,a?.chainAnimal):o?`${l} · ${Za[o]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,m=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0,f=o?Hi(a?.colorPack):void 0;return{id:Be("src"),name:d,kind:"generator",generator:r,colorA:m??(o?Ka(o,s==="rush"?1:s==="tunnel"?5:s==="bounce"?7:11,f):n.a),colorB:o?vt(o,f):n.b,collageColorPack:f,collageKit:o,collageKitB:u,collageMove:s,collageNight:o?!!a?.night:void 0,collageScale:o?Ii(a?.scale):void 0,collageDensity:o?Bi(a?.density):void 0,collagePace:o?_i(a?.pace):void 0,collageChainTravel:o?Si(a?.chainTravel):void 0,collageChainMorph:o?xi(a?.chainMorph):void 0,collageChainVary:o?Ci(a?.chainVary):void 0,collageChainSmooth:o?Mi(a?.chainSmooth):void 0,collageChainAnimal:o?Ei(a?.chainAnimal):void 0,collageSpringStrength:o?fa(a?.springStrength):void 0,collageSpringDamp:o?ua(a?.springDamp):void 0,collageSpringDist:o?da(a?.springDist):void 0,collageSpringElast:o?ha(a?.springElast):void 0,collageSpringBreak:o?ma(a?.springBreak):void 0,collageFlowScale:o?pa(a?.flowScale):void 0,collageFlowTurb:o?ga(a?.flowTurb):void 0,collageFlowEvolve:o?va(a?.flowEvolve):void 0,collageFlowForce:o?ba(a?.flowForce):void 0,collageFlowDepth:o?ya(a?.flowDepth):void 0,collageBoidCohere:o?wa(a?.boidCohere):void 0,collageBoidSep:o?ka(a?.boidSep):void 0,collageBoidAlign:o?Ta(a?.boidAlign):void 0,collageBoidRadius:o?_a(a?.boidRadius):void 0,collageBoidSpeed:o?Sa(a?.boidSpeed):void 0,collagePoleCount:o?xa(a?.poleCount):void 0,collagePoleAttract:o?Ca(a?.poleAttract):void 0,collagePoleRepel:o?Ma(a?.poleRepel):void 0,collagePoleSpeed:o?Ea(a?.poleSpeed):void 0,collagePoleFalloff:o?Pa(a?.poleFalloff):void 0,collagePoleSwitch:o?Fa(a?.poleSwitch):void 0,collageFieldStrength:o?ci(a?.fieldStrength):void 0,collageFieldScale:o?To(a?.fieldScale):void 0,collageFieldEvolve:o?fi(a?.fieldEvolve):void 0,collageFieldDensity:o?ui(a?.fieldDensity):void 0,collageFieldDensityScale:o?_o(a?.fieldDensityScale):void 0,collageFieldDensityEvolve:o?So(a?.fieldDensityEvolve):void 0,collageFieldFlow:o?xo(a?.fieldFlow):void 0,collageFieldCurl:o?di(a?.fieldCurl):void 0,collageFieldFlowScale:o?Co(a?.fieldFlowScale):void 0,collageFieldAttract:o?Mo(a?.fieldAttract):void 0,collageFieldRepel:o?Eo(a?.fieldRepel):void 0,collageFieldRadius:o?Po(a?.fieldRadius):void 0,collageFieldInertia:o?Fo(a?.fieldInertia):void 0,collageFieldDamp:o?la(a?.fieldDamp):void 0,collageFieldMaxV:o?Ao(a?.fieldMaxV):void 0,collageFieldScaleAmp:o?Io(a?.fieldScaleAmp):void 0,collageFieldMinScale:o?hi(a?.fieldMinScale):void 0,collageFieldMaxScale:o?mi(a?.fieldMaxScale):void 0,collageFieldPerturb:o?pi(a?.fieldPerturb):void 0,collageFieldWarp:o?gi(a?.fieldWarp):void 0,collageFieldSparsity:o?vi(a?.fieldSparsity):void 0,collageFieldContrast:o?bi(a?.fieldContrast):void 0,collageFieldMotion:o?yi(a?.fieldMotion):void 0,collageFieldPattern:o?ca(a?.fieldPattern):void 0,collageCamera:o?Ti(a?.camera):void 0,collageCameraFeel:o?Aa(a?.cameraFeel):void 0,collageHuntWideMin:o?Ba(a?.huntWideMin):void 0,collageHuntWideMax:o?Ra(a?.huntWideMax):void 0,collageHuntFollowMin:o?za(a?.huntFollowMin):void 0,collageHuntFollowMax:o?Oa(a?.huntFollowMax):void 0,collageHuntSnap:o?Ha(a?.huntSnap):void 0,collageHuntZoom:o?La(a?.huntZoom):void 0,collageHuntTight:o?Na(a?.huntTight):void 0,collageHuntReactMin:o?Ua(a?.huntReactMin):void 0,collageHuntReactMax:o?qa(a?.huntReactMax):void 0,collageHuntPrecision:o?Da(a?.huntPrecision):void 0,collageHuntSelect:o?Ia(a?.huntSelect):void 0,collageHuntFocus:o?!!a?.huntFocus:void 0,collageHuntFocusSpeed:o?$a(a?.huntFocusSpeed):void 0,collageHuntFocusError:o?Wa(a?.huntFocusError):void 0,collageHuntVariation:o?ja(a?.huntVariation):void 0,width:1280,height:720,duration:0}}function Fs(t){const e=rt(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Be("fx"),typeId:t,enabled:!0,params:i}}function As(t,e,i=[]){return{id:Be("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:ih(),effects:i.map(Fs),mask:ah(),feedback:Es()}}function Is(){const t=ii("wallpaper","sailor","rush"),e=As("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:oh(),globalFeedback:{...Es(),amount:0,opacity:.4,scale:1},exportSettings:nh(),presets:[]},a=Ms({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[Zo(i,"factory · tour"),Zo(a,"factory · scramble")],i}function Bs(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,includeEffects:!0,exporting:!1}}class lh{state;listeners=new Set;constructor(e=Is()){this.state={project:e,ui:Bs(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...Bs(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const A=new lh;function tn(t,e,i,a,o){if(e<=0)return 0;const n=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const r=e*2,l=(s%r+r)%r;return l<=e?l:r-l}return o?(s%e+e)%e:I(s,0,e)}function ch(t,e,i,a,o){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===a&&(i!=="effect"||n.effectId===o)).sort((n,s)=>n.time-s.time)}function fh(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let o=0;o<t.length-1;o++){const n=t[o],s=t[o+1];if(e>=n.time&&e<=s.time){const r=s.time-n.time||1;let l=(e-n.time)/r;return(s.easing==="smooth"||n.easing==="smooth")&&(l=Hl(l)),Oe(n.value,s.value,l)}}return i}function Mt(t,e,i,a,o,n,s){const r=ch(t.keyframes,e,i,a,s);return fh(r,n,o)}function uh(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(o=>({...o,params:{...o.params}}))};a.opacity=Mt(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=Mt(t,e.id,"layer","x",e.transform.x,i),a.transform.y=Mt(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=Mt(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=Mt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const o of Object.keys(a.feedback))a.feedback[o]=Mt(t,e.id,"feedback",o,e.feedback[o],i);for(const o of a.effects)for(const[n,s]of Object.entries(o.params))typeof s=="number"&&(o.params[n]=Mt(t,e.id,"effect",n,s,i,o.id));return a}function dh(t,e){const i=t.layers[0]?.id??"";return Mt(t,i,"playback","speed",t.playback.speed,e)}const hh=[{beats:[8],weight:5},{beats:[4,4],weight:5},{beats:[4],weight:4},{beats:[16],weight:3},{beats:[8,8],weight:3},{beats:[8,4],weight:3},{beats:[4,4,8],weight:2},{beats:[4,2,2],weight:2},{beats:[2,2,4],weight:2},{beats:[2,6],weight:1},{beats:[6,2],weight:1},{beats:[8,2,2,4],weight:2}],mh=["spot","burst","snap","step"],ph=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],gh=["drop","halo","bars","wave","poly","ghost","fall"];function vh(t,e){const i=e.reduce((o,n)=>o+n.weight,0);let a=t()*i;for(const o of e)if(a-=o.weight,a<=0)return o.item;return e[e.length-1].item}function bh(t){return vh(t,hh.map(e=>({item:e.beats,weight:e.weight})))}function yh(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(o=>o!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function wh(t,e,i){const a=t<=2?mh:t<=4?ph:gh;return yh(e,a,i)}function Rs(t){return 60/Math.max(40,t||120)}function zs(t,e){return!Number.isFinite(t)||e<=0?0:(t%e+e)%e}function kh(t,e,i,a){const o=Math.max(1,t),n=Rs(e),s=(i??[]).filter(c=>c>=0&&c<o+.05);let r=Number.isFinite(a)&&a>=0?a:s.length?zs(s[0],n):0;r>=o&&(r=zs(r,n));const l=[];for(let c=r;c<o-n*.02;c+=n)l.push(c);if(!l.length)for(let c=0;c<o;c+=n)l.push(c);return l.length||l.push(0),l[l.length-1]<o-1e-6&&l.push(o),l}function Th(t,e,i,a){const o=Rs(e),n=Number.isFinite(i)&&i>0?i:0,s=a&&a>0?a:0;let r=t;return s>0&&(r=(t%s+s)%s),!Number.isFinite(r)||r<n-1e-6?0:Math.max(0,Math.floor((r-n)/o+1e-4))}function _h(t){const e=ye(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=kh(i,t.bpm??120,t.beats,t.offset),o=[];let n=0,s,r,l=0;for(;n<a.length-1&&a[n]<i;){const c=bh(e);r=Ut(t.seed+l*41+Math.floor(e()*17)>>>0);const u=l%5===2||e()>.82,d=e()>.72?Ut(t.seed+l*99+7>>>0):void 0,m=d&&d!==r?d:void 0,f=Xa(e),p=ti(r,f);for(const h of c){if(n>=a.length-1||a[n]>=i)break;const g=Math.min(a.length-1,n+h),v=a[n];if(v>=i)break;const y=wh(g-n,e,s),b=p[Math.floor(e()*p.length)%p.length];o.push({start:v,beats:g-n,startBeat:n,look:{kit:r,kitB:m,move:y,night:u,wash:b,ink:vt(r,f),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),s=y,n=g}if(l++,l>80)break}if(o.length>=2&&o[o.length-1].beats<2){const c=o.pop();o[o.length-1].beats+=c.beats}if(!o.length){const c=Ut(t.seed);o.push({start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:ti(c)[0],ink:vt(c),scale:.78,density:.88,pace:.62}})}return o}function Sh(t,e,i,a,o){if(!t.length){const c=Ut(1);return{start:0,beats:8,startBeat:0,look:{kit:c,move:"bars",night:!1,wash:ti(c)[0],ink:vt(c),scale:.78,density:.88,pace:.62}}}const n=t[t.length-1],s=Math.max(i&&i>n.start?i:0,n.start+.5,t.length>1?n.start+(n.start-t[0].start)/Math.max(1,t.length-1):n.start+2);if(a&&a>40){const c=Number.isFinite(o)&&o>=0?o:t[0].start,u=Th(e,a,c,s);let d=t[0];for(const m of t)if(m.startBeat<=u)d=m;else break;return d}const r=(e%s+s)%s;let l=t[0];for(const c of t)if(c.start<=r+5e-4)l=c;else break;return l}function xh(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const Ch=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function Mh(t){return(t.type??"").startsWith("audio/")||Ch.test(t.name)}function Li(t){return t.sources.find(e=>e.kind==="audio")}let Ni=null,bt=null,Ui=null;const an=new WeakSet;let qi=0,Di=0,Dt=0,Os=0;function Qa(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Ni||(Ni=new t,bt=Ni.createAnalyser(),bt.fftSize=256,bt.smoothingTimeConstant=.72,bt.connect(Ni.destination),Ui=new Uint8Array(bt.frequencyBinCount)),Ni):null}async function Ya(){const t=Qa();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function Eh(t){const e=Qa();if(!(!e||!bt||an.has(t)))try{e.createMediaElementSource(t).connect(bt),an.add(t)}catch{an.add(t)}}async function Ph(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",Eh(i),Ya();let a=null;const o=Qa();if(o)try{const d=await t.arrayBuffer(),m=o.decodeAudioData(d.slice(0)).catch(()=>null);a=await Promise.race([m,new Promise(f=>setTimeout(()=>f(null),4e3))])}catch{a=null}const s=await Promise.race([new Promise(d=>{if(Number.isFinite(i.duration)&&i.duration>0){d(i.duration);return}i.addEventListener("loadedmetadata",()=>d(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>d(a?.duration??0),{once:!0})}),new Promise(d=>setTimeout(()=>d(a?.duration??0),2500))])||a?.duration||0,r=a?Fh(a.getChannelData(0),a.sampleRate):[],l=Ah(r,s),c=a?Ih(a.getChannelData(0),a.sampleRate,l.bpm,l.offset,s):l.offset,u=l.bpm>40?Bh(r,l.bpm,c,s):r;return{id:Be("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:s,audio:i,pcm:a,beats:u,bpm:l.bpm,beatOffset:c,objectUrl:e}}function Fh(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,o=Math.floor((t.length-a)/i);if(o<16)return[];const n=new Float32Array(o);for(let u=0;u<o;u++){const d=u*i;let m=0;for(let f=0;f<a;f+=2){const p=t[d+f];m+=p*p}n[u]=Math.sqrt(m/(a*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),r=.28,l=[];let c=-99;for(let u=s;u<o;u++){let d=0,m=0;for(let g=u-s;g<u;g++)d+=n[g],n[g]>m&&(m=n[g]);d/=s;const f=n[u]-n[u-1];if(!(n[u]>d*1.32&&n[u]>m*.72&&f>.0035))continue;const h=u*i/e;h-c<r||(l.push(h),c=h)}return l}function Ah(t,e=0){if(t.length<2)return{bpm:0,offset:t[0]??0};const i=[];for(let d=1;d<t.length;d++){const m=t[d]-t[d-1];m>=.18&&m<=1.2&&i.push(m)}if(i.length<3&&t.length<4)return{bpm:0,offset:t[0]??0};const a=i.length>=3?i:t.slice(1).map((d,m)=>d-t[m]).filter(d=>d>.12&&d<1.6);if(a.length<2)return{bpm:0,offset:t[0]??0};a.sort((d,m)=>d-m);const o=a[Math.floor(a.length/2)];let n=60/Math.max(.18,o);for(;n>155;)n/=2;for(;n<72&&n>0;)n*=2;n=on(Math.round(n),70,170);let s=n,r=0,l=-1;const c=Math.max(70,n-8),u=Math.min(170,n+8);for(let d=c;d<=u;d++){const m=60/d,f=e>0?e:(t[t.length-1]??0)+m,p=new Set([0,(t[0]%m+m)%m]);for(let h=0;h<Math.min(t.length,16);h++)p.add((t[h]%m+m)%m);for(const h of p){let g=0;for(const v of t){const y=((v-h)%m+m)%m,b=Math.min(y,m-y);b<m*.12&&(g+=1-b/(m*.12))}h>.03&&h<f-m*.5&&(g+=.15),g*=1-Math.abs(d-118)/400,g>l&&(l=g,s=d,r=h)}}return{bpm:s,offset:r}}function Ih(t,e,i,a,o){if(!t||t.length<64||!(i>40)||!(e>1))return Number.isFinite(a)&&a>=0?a:0;const n=60/i,s=n*4,r=Number.isFinite(a)&&a>=0?a:0,l=Math.max(32,Math.floor(e*.04)),c=[0,0,0,0],u=o>0?o:t.length/e;for(let f=0;f<4;f++){let p=0,h=0;for(let g=r+f*n;g<u-.04&&h<72;g+=s){const v=Math.max(0,Math.min(t.length-l-1,Math.floor(g*e)));let y=0;for(let b=0;b<l;b+=3){const T=t[v+b];y+=T*T}p+=y,h++}c[f]=p/Math.max(1,h)}let d=0;for(let f=1;f<4;f++)(c[f]>c[d]*1.05||c[f]>c[d]*.97&&f%2===0&&d%2===1)&&(d=f);return((r+d*n)%s+s)%s}function Bh(t,e,i,a){if(!(e>40))return[...t];const o=60/e,n=Math.max(o,a||(t[t.length-1]??0)+o),s=i>=0&&Number.isFinite(i)?i:t[0]??0,r=[];for(let l=s;l<n-o*.08;l+=o)r.push(l);return r.length?r:[...t]}function Hs(t,e,i=.13,a=0){if(!(e>40)||!Number.isFinite(t))return 0;const o=60/e;if(!(o>0))return 0;const n=t-a;if(n<-.02)return 0;const s=(n%o+o)%o;return Math.exp(-s/i)}function Rh(t,e,i=.2){if(!t.length)return 0;let a=0,o=t.length-1;for(;a<o;){const r=a+o+1>>1;t[r]<=e?a=r:o=r-1}const n=t[a];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function on(t,e,i){return Math.max(e,Math.min(i,t))}function zh(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const o=(a%i+i)%i,n=Math.floor(o*e),s=Math.max(64,Math.floor(e*.046)),r=Math.max(0,Math.min(t.length-1,n)),l=Math.max(r+1,Math.min(t.length,n+s));let c=0;for(let g=r;g<l;g++)c+=t[g]*t[g];const u=Math.min(1,Math.sqrt(c/(l-r))*3.4),d=Math.max(s,Math.floor(e*.09)),m=Math.min(t.length,n+d);let f=0,p=0;for(let g=r;g<m;g+=8)f+=t[g]*t[g],p++;const h=Math.min(1,Math.sqrt(f/Math.max(1,p))*4.2);return{energy:u,bass:h}}function Oh(){if(!bt||!Ui)return null;bt.getByteFrequencyData(Ui);let t=0,e=0;const i=Ui.length,a=Math.max(4,Math.floor(i*.12));for(let o=0;o<i;o++){const n=Ui[o]/255;t+=n,o<a&&(e+=n)}return{energy:t/i,bass:e/a}}function Hh(t,e){let i=0,a=0,o=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,r=(e%s+s)%s,l=zh(t.pcm.getChannelData(0),t.pcm.sampleRate,s,r);i=l.energy,a=l.bass;const c=t.beats??[],u=t.beatOffset??0,d=c.length?Rh(c,r,.11):0,m=Hs(r,t.bpm??0,.11,u),f=on((i-.12)*.75,0,.6);o=Math.max(d,m*.86,c.length?f*.28:f)}else if(t?.kind==="audio"){const s=Oh();s&&(i=s.energy,a=s.bass,o=Math.max(Hs(e,t.bpm??0,.11,t.beatOffset??0)*.86,on((i-.12)*.55,0,.5)))}Math.abs(e-Os)>.2||o>=Dt?Dt=o:Dt+=(o-Dt)*.32,Os=e;const n=t?.kind==="audio"?.22:.14;return qi+=(i-qi)*n,Di+=(a-Di)*Math.min(n,.16),!t&&qi<.002&&(qi=0),!t&&Di<.002&&(Di=0),t||(Dt=0),{energy:qi,bass:Di,beat:Dt}}function Lh(t,e,i=0,a=0){const o=e.length,n=t.length;if(o<1)return;if(n<1){e.fill(0);return}const s=(Math.round(a)%n+n)%n;for(let l=0;l<o;l++)e[l]=t[(s+l)%n];if(i<=0)return;const r=Math.max(1,Math.round(o*i));for(let l=0;l<r;l++)e[o-r+l]*=1-(l+1)/r}function nn(t){if(!Li(t))return 0;const e=t.playback.time;return!Number.isFinite(e)||e<=0?0:e}function Nh(t,e,i=!1,a=0){const o=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*o)),s=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:n,numberOfChannels:s,sampleRate:o}),l=i?.12:0,c=Number.isFinite(a)&&a>0?a:0,u=Math.round(c*o);for(let d=0;d<s;d++)Lh(t.getChannelData(d),r.getChannelData(d),l,u);return r}async function Uh(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const a=Qa()??new e,o=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(o&&o.length>32)return t.pcm=o,o}catch{return null}return null}function sn(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.07)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const qh=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,Dh=`#version 300 es
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
`,$h=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Wh=`#version 300 es
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
`,jh=`#version 300 es
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
`,Vh=`#version 300 es
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
`,Gh=`#version 300 es
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
`,Kh=`#version 300 es
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
${Ts}
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
`,Xh=`#version 300 es
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
`,Zh=`#version 300 es
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
`,Qh=`#version 300 es
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
`,Yh=`#version 300 es
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
`,Jh=`#version 300 es
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
`,em=`#version 300 es
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
`,tm=`#version 300 es
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
`,im=`#version 300 es
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
`,am=`#version 300 es
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
`,om=`#version 300 es
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
`,nm=`#version 300 es
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
`,sm=`#version 300 es
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
`,rm=`#version 300 es
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
`,lm=`#version 300 es
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
`,cm=`#version 300 es
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
`,fm=`#version 300 es
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
`,um=`#version 300 es
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
`,Ls=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,dm=`#version 300 es
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
`;class $t extends Error{}function hm(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new $t("WebGL2 is required for Phosphene.");return e}function Ns(t,e,i){const a=t.createShader(e);if(!a)throw new $t("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const o=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new $t(o)}return a}class ve{gl;prog;uniforms=new Map;constructor(e,i,a=qh){this.gl=e;const o=Ns(e,e.VERTEX_SHADER,a),n=Ns(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new $t("Unable to create program");if(e.attachShader(s,o),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(o),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const r=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new $t(r)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const o=this.loc(e);o&&this.gl.uniform2f(o,i,a)}v3(e,i,a,o){const n=this.loc(e);n&&this.gl.uniform3f(n,i,a,o)}v4(e,i,a,o,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,a,o,n)}dispose(){this.gl.deleteProgram(this.prog)}}function Ja(t){const e=t.createTexture();if(!e)throw new $t("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Us(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function mm(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class ai{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new $t("Unable to create framebuffer");this.fbo=i,this.tex=Ja(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,mm(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Le(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function lt(t){t.drawArrays(t.TRIANGLES,0,3)}const pm={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},gm={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},qs={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function vm(t){return`${Dh}
${t.extraUniforms??""}
${t.applyGlsl}
${$h}`}function bm(t,e){return new ve(t,vm(e))}function $i(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const oi=8;function Ds(t,e,i){return new ImageData(t,e,i)}function ym(t,e,i){const a=t.find(n=>n.id===e);if(!a?.options)return Number(i)||0;const o=a.options.findIndex(n=>n.value===i);return o<0?0:o}class wm{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;audioOffset=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new kd;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=hm(e),this.generatorProg=new ve(this.gl,Gh)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=oi&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new ai(e),this.pong??=new ai(e),this.composite??=new ai(e),this.post??=new ai(e);this.ring.length<oi;)this.ring.push(new ai(e));this.copy??=new ve(e,Ls),this.blit??=new ve(e,jh),this.compositeProg??=new ve(e,Wh),this.feedbackProg??=new ve(e,Vh),this.textureProg??=new ve(e,dm),this.black||(this.black=Ja(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(n=>n.enabled))return!0;const o=e.sources.find(n=>n.id===a.sourceId);return!!(o&&o.kind!=="generator"&&o.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ve(this.gl,Xh),this.stageProg):e===13?(this.sketchProg??=new ve(this.gl,Zh),this.sketchProg):e===14?(this.feltProg??=new ve(this.gl,Qh),this.feltProg):e===15?(this.foilProg??=new ve(this.gl,Yh),this.foilProg):e===16?(this.plushProg??=new ve(this.gl,Jh),this.plushProg):e===17?(this.yarnProg??=new ve(this.gl,em),this.yarnProg):e===18?(this.sequinProg??=new ve(this.gl,tm),this.sequinProg):e===19?(this.quiltProg??=new ve(this.gl,im),this.quiltProg):e===20?(this.corkProg??=new ve(this.gl,am),this.corkProg):e===21?(this.ginghamProg??=new ve(this.gl,om),this.ginghamProg):e===22?(this.sprinkleProg??=new ve(this.gl,nm),this.sprinkleProg):e===23?(this.velvetProg??=new ve(this.gl,sm),this.velvetProg):e===24?(this.confettiProg??=new ve(this.gl,rm),this.confettiProg):e===25?(this.discoProg??=new ve(this.gl,lm),this.discoProg):e===26?(this.terrazzoProg??=new ve(this.gl,cm),this.terrazzoProg):e===27?(this.comicProg??=new ve(this.gl,fm),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ve(this.gl,um),this.fieldsProg):(this.generatorFull??=new ve(this.gl,Kh),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",o=this.effectProg.get(a);if(o)return o;const n=e==="dancer"?Od(i):rt(e);if(!n)return null;try{const s=bm(this.gl,n);return this.effectProg.set(a,s),s}catch(s){return this.lastError=`${a}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(o=>!!o);for(const o of a)o.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new ai(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Ja(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Us(this.gl,i,a),i}blitTo(e,i){const a=this.gl,o=this.copy;o&&(e.bind(),o.use(),Le(a,0,i),o.i("uTex",0),lt(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const o=Math.max(a?.duration||0,e.duration,e.exportSettings.duration||0,8),n=`${e.cutEdit.seed}|${o}|${a?.bpm??0}|${a?.beatOffset??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==n)&&(this.cutReel=_h({seed:e.cutEdit.seed,duration:o,bpm:a?.bpm??120,beats:a?.beats,offset:a?.beatOffset}),this.cutKey=n);const s=Sh(this.cutReel,i,o,a?.bpm,a?.beatOffset);this.cutStatus=xh(s),this.cutLook={generator:Pi(s.look.move),collageKit:s.look.kit,collageKitB:s.look.kitB,collageMove:s.look.move,collageNight:s.look.night,collageScale:s.look.scale,collageDensity:s.look.density,collagePace:s.look.pace,colorA:s.look.wash,colorB:s.look.ink}}drawHeraldry(e,i,a,o,n,s,r){const l=this.gl;this.copy??=new ve(l,Ls),this.heraldryTex??=Ja(l);const c=this.cutLook??i,u=this.heraldry.paint({width:s,height:r,time:a,duration:n,seed:o,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,beatOffset:this.audioOffset,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,chainAnimal:c.collageChainAnimal,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch,fieldStrength:c.collageFieldStrength,fieldScale:c.collageFieldScale,fieldEvolve:c.collageFieldEvolve,fieldDensity:c.collageFieldDensity,fieldDensityScale:c.collageFieldDensityScale,fieldDensityEvolve:c.collageFieldDensityEvolve,fieldFlow:c.collageFieldFlow,fieldCurl:c.collageFieldCurl,fieldFlowScale:c.collageFieldFlowScale,fieldAttract:c.collageFieldAttract,fieldRepel:c.collageFieldRepel,fieldRadius:c.collageFieldRadius,fieldInertia:c.collageFieldInertia,fieldDamp:c.collageFieldDamp,fieldMaxV:c.collageFieldMaxV,fieldScaleAmp:c.collageFieldScaleAmp,fieldMinScale:c.collageFieldMinScale,fieldMaxScale:c.collageFieldMaxScale,fieldPerturb:c.collageFieldPerturb,fieldWarp:c.collageFieldWarp,fieldSparsity:c.collageFieldSparsity,fieldContrast:c.collageFieldContrast,fieldMotion:c.collageFieldMotion,fieldPattern:c.collageFieldPattern,camera:c.collageCamera,cameraFeel:c.collageCameraFeel,huntWideMin:c.collageHuntWideMin,huntWideMax:c.collageHuntWideMax,huntFollowMin:c.collageHuntFollowMin,huntFollowMax:c.collageHuntFollowMax,huntSnap:c.collageHuntSnap,huntZoom:c.collageHuntZoom,huntTight:c.collageHuntTight,huntReactMin:c.collageHuntReactMin,huntReactMax:c.collageHuntReactMax,huntPrecision:c.collageHuntPrecision,huntSelect:c.collageHuntSelect,huntFocus:c.collageHuntFocus,huntFocusSpeed:c.collageHuntFocusSpeed,huntFocusError:c.collageHuntFocusError,huntVariation:c.collageHuntVariation});if(Us(l,this.heraldryTex,u),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Le(l,0,this.heraldryTex),this.copy.i("uTex",0),lt(l)}drawGenerator(e,i,a,o=77,n=8){if(Pe(i.generator)){this.drawHeraldry(e,i,a,o,n,e.w,e.h);return}const s=this.gl,r=qs[i.generator??"plasma"]??0,l=this.genProg(r);e.bind(),l.use(),l.i("uMode",r),l.f("uTime",a);const c=i.colorA?$i(i.colorA):[.07,.04,.1],u=i.colorB?$i(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",u[0],u[1],u[2]),l.f("uScale",6),l.f("uSeed",o),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),lt(s)}drawTexture(e,i,a){const o=this.gl,n=this.textureProg;n&&(e.bind(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),n.use(),Le(o,0,i),n.i("uTex",0),n.v2("uTranslate",a.transform.x,a.transform.y),n.f("uScale",a.transform.scale),n.f("uRotation",a.transform.rotation),n.v2("uFit",1,1),lt(o))}applyEffect(e,i,a,o,n,s,r,l,c){const u=rt(a.typeId),d=this.progFor(a);if(!u||!d){this.blitTo(e,i);return}const m=this.gl;e.bind(),d.use(),Le(m,0,i),Le(m,1,l),Le(m,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",n),d.f("uFrame",s),d.f("uQuality",r==="draft"?0:r==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",o.transform.x,o.transform.y),d.f("u_scale",o.transform.scale),d.f("u_rotation",o.transform.rotation);const f=o.mask;d.i("u_maskType",gm[f.type]??0),d.i("u_maskInvert",f.invert?1:0),d.f("u_maskSoftness",f.softness),d.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),d.v2("u_maskCenter",f.center.x,f.center.y),d.f("u_maskRadius",f.radius),d.f("u_maskGradientAngle",f.gradientAngle),d.f("u_maskNoiseScale",f.noiseScale);let p=1;for(const h of u.params){const g=a.params[h.id]??h.default,v=`u_${h.id}`;if(h.kind==="color"&&typeof g=="string"){const[y,b,T]=$i(g);d.v3(v,y,b,T)}else h.kind==="bool"?d.f(v,g?1:0):h.kind==="enum"?d.f(v,ym(u.params,h.id,g)):d.f(v,Number(g));h.id==="mix"&&(p=Number(g))}d.f("u_mix",p),lt(m)}drawLite(e,i){const a=this.gl,o=e.layers.find(d=>d.enabled)??e.layers[0],n=o?e.sources.find(d=>d.id===o.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Pe(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const r=qs[s.generator??"plasma"]??0,l=this.genProg(r);l.use(),l.i("uMode",r),l.f("uTime",i);const c=s.colorA?$i(s.colorA):[.07,.04,.1],u=s.colorB?$i(s.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",u[0],u[1],u[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),lt(a)}render(e,i,a){const o=this.gl,n=a?.quality??e.quality,s=Hh(Li(e),i);this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat;const r=Li(e);if(this.audioBpm=r?.bpm??0,this.audioOffset=r?.beatOffset??0,this.resolveCut(e,i,r),n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,u=this.composite,d=this.post,m=this.blit,f=this.compositeProg,p=this.feedbackProg,h=n==="draft"?.5:1,g=Math.max(16,Math.floor((a?.width??this.canvas.width)*h)),v=Math.max(16,Math.floor((a?.height??this.canvas.height)*h));this.ensureSize(g,v),u.bind(),o.clearColor(.02,.02,.03,1),o.clear(o.COLOR_BUFFER_BIT);const y=e.globalFeedback,b=Math.max(0,Math.min(oi-1,Math.round(y.delay))),T=(this.ringIndex-1-b+oi*8)%oi,_=this.ring[T].tex,M=Math.floor(i*e.fps);for(const E of e.layers){if(!E.enabled)continue;const P=uh(e,E,i),F=e.sources.find(R=>R.id===P.sourceId)??null;if(!F||F.kind==="generator"||F.kind==="audio"){const R=F&&F.kind!=="audio"?F:{generator:"plasma"};this.drawGenerator(l,R,i,e.seed,e.duration)}else{const R=this.uploadSource(F);this.drawTexture(l,R,P)}let z=l,q=c;const x=this.histFor(P.id);for(const R of P.effects){if(!R.enabled)continue;this.applyEffect(q,z.tex,R,P,i,M,n,_,x.tex);const k=z;z=q,q=k}if(P.feedback.amount>.001){q.bind(),p.use(),Le(o,0,z.tex),Le(o,1,x.tex),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",P.feedback.amount),p.f("uOpacity",P.feedback.opacity),p.f("uScale",P.feedback.scale),p.f("uRotation",P.feedback.rotation),p.f("uDistortion",P.feedback.distortion),p.f("uTime",i),lt(o);const R=z;z=q,q=R}this.blitTo(d,u.tex),u.bind(),f.use(),Le(o,0,d.tex),Le(o,1,z.tex),f.i("uBase",0),f.i("uLayer",1),f.f("uOpacity",P.opacity),f.i("uBlend",pm[P.blendMode]??0),f.v2("uResolution",g,v),lt(o),this.blitTo(x,z.tex)}y.amount>.001&&(d.bind(),p.use(),Le(o,0,u.tex),Le(o,1,_),p.i("uTex",0),p.i("uFeedback",1),p.f("uAmount",y.amount),p.f("uOpacity",y.opacity),p.f("uScale",y.scale),p.f("uRotation",y.rotation),p.f("uDistortion",y.distortion),p.f("uTime",i),lt(o),this.blitTo(u,d.tex)),this.blitTo(this.ring[this.ringIndex],u.tex),this.ringIndex=(this.ringIndex+1)%oi,o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height),m.use(),Le(o,0,u.tex),m.i("uTex",0),m.f("uVignette",a?.vignette??.25),lt(o)}capture(e,i,a,o,n="image/png",s=.97){const r=this.paintFrame(e,i,a,o);return new Promise((l,c)=>{r.toBlob(u=>{u?l(u):c(new Error("Export failed"))},n,s)})}paintFrame(e,i,a,o,n){const s=n??document.createElement("canvas");s.width!==a&&(s.width=a),s.height!==o&&(s.height=o);const r=s.getContext("2d",{alpha:!1});if(!r)throw new Error("No 2d context");this.render(e,i,{width:a,height:o,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===o)r.putImageData(Ds(l,a,o),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Ds(l,this.width,this.height),0,0),r.drawImage(c,0,0,a,o)}return s}readPixels(e,i){const a=this.gl,o=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,o),a.bindFramebuffer(a.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(o.length)),s=e*4;for(let r=0;r<i;r++)n.set(o.subarray((i-1-r)*s,(i-r)*s),r*s);return n}}const km=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Tm=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function _m(t){return t.type.startsWith("video/")||Tm.test(t.name)}function Sm(t){return t.type.startsWith("image/")||km.test(t.name)}async function xm(t){if(_m(t))return Mm(t);if(Sm(t))return Ws(t);if(Mh(t))return Ph(t);throw new Error(`Unsupported media: ${t.name}`)}async function $s(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Ws(i)}async function Ws(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Cm(e);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Cm(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function Mm(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,o)=>{const n=()=>{a({id:Be("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>o(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function Em(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Be("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function js(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function Pm(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,o=a.duration;if(!Number.isFinite(o)||o<=0)return;const n=(e%o+o)%o,s=!!i?.playing&&!i?.freeze,r=(i?.mode??"forward")==="forward",l=i?.speed??1,c=s&&r&&l>.92&&l<1.08,u=Math.abs(a.currentTime-n);if(!s){if(a.paused||a.pause(),u>1/30)try{a.currentTime=n}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),u>.35)try{a.currentTime=n}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),u>1/30)try{a.currentTime=n}catch{}}const Fm=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Am(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function to(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var rn={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Vs;function Im(){return Vs||(Vs=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,o,n){function s(c,u){if(!o[c]){if(!a[c]){var d=typeof to=="function"&&to;if(!u&&d)return d(c,!0);if(r)return r(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var f=o[c]={exports:{}};a[c][0].call(f.exports,function(p){var h=a[c][1][p];return s(h||p)},f,f.exports,i,a,o,n)}return o[c].exports}for(var r=typeof to=="function"&&to,l=0;l<n.length;l++)s(n[l]);return s})({1:[function(i,a,o){var n=i("./utils"),s=i("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var c,u,d,m,f,p,h,g=[],v=0,y=l.length,b=y,T=n.getTypeOf(l)!=="string";v<l.length;)b=y-v,d=T?(c=l[v++],u=v<y?l[v++]:0,v<y?l[v++]:0):(c=l.charCodeAt(v++),u=v<y?l.charCodeAt(v++):0,v<y?l.charCodeAt(v++):0),m=c>>2,f=(3&c)<<4|u>>4,p=1<b?(15&u)<<2|d>>6:64,h=2<b?63&d:64,g.push(r.charAt(m)+r.charAt(f)+r.charAt(p)+r.charAt(h));return g.join("")},o.decode=function(l){var c,u,d,m,f,p,h=0,g=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var y,b=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===r.charAt(64)&&b--,l.charAt(l.length-2)===r.charAt(64)&&b--,b%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=s.uint8array?new Uint8Array(0|b):new Array(0|b);h<l.length;)c=r.indexOf(l.charAt(h++))<<2|(m=r.indexOf(l.charAt(h++)))>>4,u=(15&m)<<4|(f=r.indexOf(l.charAt(h++)))>>2,d=(3&f)<<6|(p=r.indexOf(l.charAt(h++))),y[g++]=c,f!==64&&(y[g++]=u),p!==64&&(y[g++]=d);return y}},{"./support":30,"./utils":32}],2:[function(i,a,o){var n=i("./external"),s=i("./stream/DataWorker"),r=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(u,d,m,f,p){this.compressedSize=u,this.uncompressedSize=d,this.crc32=m,this.compression=f,this.compressedContent=p}c.prototype={getContentWorker:function(){var u=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return u.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,d,m){return u.pipe(new r).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,o){var n=i("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},o.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,o){var n=i("./utils"),s=(function(){for(var r,l=[],c=0;c<256;c++){r=c;for(var u=0;u<8;u++)r=1&r?3988292384^r>>>1:r>>>1;l[c]=r}return l})();a.exports=function(r,l){return r!==void 0&&r.length?n.getTypeOf(r)!=="string"?(function(c,u,d,m){var f=s,p=m+d;c^=-1;for(var h=m;h<p;h++)c=c>>>8^f[255&(c^u[h])];return-1^c})(0|l,r,r.length,0):(function(c,u,d,m){var f=s,p=m+d;c^=-1;for(var h=m;h<p;h++)c=c>>>8^f[255&(c^u.charCodeAt(h))];return-1^c})(0|l,r,r.length,0):0}},{"./utils":32}],5:[function(i,a,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(i,a,o){var n=null;n=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:n}},{lie:37}],7:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),r=i("./utils"),l=i("./stream/GenericWorker"),c=n?"uint8array":"array";function u(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}o.magic="\b\0",r.inherits(u,l),u.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(c,d.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},o.compressWorker=function(d){return new u("Deflate",d)},o.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,o){function n(f,p){var h,g="";for(h=0;h<p;h++)g+=String.fromCharCode(255&f),f>>>=8;return g}function s(f,p,h,g,v,y){var b,T,_=f.file,M=f.compression,E=y!==c.utf8encode,P=r.transformTo("string",y(_.name)),F=r.transformTo("string",c.utf8encode(_.name)),z=_.comment,q=r.transformTo("string",y(z)),x=r.transformTo("string",c.utf8encode(z)),R=F.length!==_.name.length,k=x.length!==z.length,U="",G="",O="",ae=_.dir,W=_.date,te={crc32:0,compressedSize:0,uncompressedSize:0};p&&!h||(te.crc32=f.crc32,te.compressedSize=f.compressedSize,te.uncompressedSize=f.uncompressedSize);var N=0;p&&(N|=8),E||!R&&!k||(N|=2048);var L=0,se=0;ae&&(L|=16),v==="UNIX"?(se=798,L|=(function(Q,ke){var Fe=Q;return Q||(Fe=ke?16893:33204),(65535&Fe)<<16})(_.unixPermissions,ae)):(se=20,L|=(function(Q){return 63&(Q||0)})(_.dosPermissions)),b=W.getUTCHours(),b<<=6,b|=W.getUTCMinutes(),b<<=5,b|=W.getUTCSeconds()/2,T=W.getUTCFullYear()-1980,T<<=4,T|=W.getUTCMonth()+1,T<<=5,T|=W.getUTCDate(),R&&(G=n(1,1)+n(u(P),4)+F,U+="up"+n(G.length,2)+G),k&&(O=n(1,1)+n(u(q),4)+x,U+="uc"+n(O.length,2)+O);var ie="";return ie+=`
\0`,ie+=n(N,2),ie+=M.magic,ie+=n(b,2),ie+=n(T,2),ie+=n(te.crc32,4),ie+=n(te.compressedSize,4),ie+=n(te.uncompressedSize,4),ie+=n(P.length,2),ie+=n(U.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ie+P+U,dirRecord:d.CENTRAL_FILE_HEADER+n(se,2)+ie+n(q.length,2)+"\0\0\0\0"+n(L,4)+n(g,4)+P+U+q}}var r=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),u=i("../crc32"),d=i("../signature");function m(f,p,h,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=h,this.encodeFileName=g,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(m,l),m.prototype.push=function(f){var p=f.meta.percent||0,h=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:h?(p+100*(h-g-1))/h:100}}))},m.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var p=this.streamFiles&&!f.file.dir;if(p){var h=s(f,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(f){this.accumulate=!1;var p=this.streamFiles&&!f.file.dir,h=s(f,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),p)this.push({data:(function(g){return d.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var f=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var h=this.bytesWritten-f,g=(function(v,y,b,T,_){var M=r.transformTo("string",_(T));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(v,2)+n(v,2)+n(y,4)+n(b,4)+n(M.length,2)+M})(this.dirRecords.length,h,f,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(f){this._sources.push(f);var p=this;return f.on("data",function(h){p.processChunk(h)}),f.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),f.on("error",function(h){p.error(h)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(f){var p=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var h=0;h<p.length;h++)try{p[h].error(f)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,p=0;p<f.length;p++)f[p].lock()},a.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,o){var n=i("../compressions"),s=i("./ZipFileWorker");o.generateWorker=function(r,l,c){var u=new s(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{r.forEach(function(m,f){d++;var p=(function(y,b){var T=y||b,_=n[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(f.options.compression,l.compression),h=f.options.compressionOptions||l.compressionOptions||{},g=f.dir,v=f.date;f._compressWorker(p,h).withStreamInfo("file",{name:m,dir:g,date:v,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,o){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var r in this)typeof this[r]!="function"&&(s[r]=this[r]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,r){return new n().loadAsync(s,r)},n.external=i("./external"),a.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,o){var n=i("./utils"),s=i("./external"),r=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),u=i("./nodejsUtils");function d(m){return new s.Promise(function(f,p){var h=m.decompressed.getContentWorker().pipe(new c);h.on("error",function(g){p(g)}).on("end",function(){h.streamInfo.crc32!==m.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}a.exports=function(m,f){var p=this;return f=n.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),u.isNode&&u.isStream(m)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",m,!0,f.optimizedBinaryString,f.base64).then(function(h){var g=new l(f);return g.load(h),g}).then(function(h){var g=[s.Promise.resolve(h)],v=h.files;if(f.checkCRC32)for(var y=0;y<v.length;y++)g.push(d(v[y]));return s.Promise.all(g)}).then(function(h){for(var g=h.shift(),v=g.files,y=0;y<v.length;y++){var b=v[y],T=b.fileNameStr,_=n.resolve(b.fileNameStr);p.file(_,b.decompressed,{binary:!0,optimizedBinaryString:!0,date:b.date,dir:b.dir,comment:b.fileCommentStr.length?b.fileCommentStr:null,unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions,createFolders:f.createFolders}),b.dir||(p.file(_).unsafeOriginalName=T)}return g.zipComment.length&&(p.comment=g.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,o){var n=i("../utils"),s=i("../stream/GenericWorker");function r(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}n.inherits(r,s),r.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},r.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,o){var n=i("readable-stream").Readable;function s(r,l,c){n.call(this,l),this._helper=r;var u=this;r.on("data",function(d,m){u.push(d)||u._helper.pause(),c&&c(m)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},a.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,a,o){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,a,o){function n(_,M,E){var P,F=r.getTypeOf(M),z=r.extend(E||{},u);z.date=z.date||new Date,z.compression!==null&&(z.compression=z.compression.toUpperCase()),typeof z.unixPermissions=="string"&&(z.unixPermissions=parseInt(z.unixPermissions,8)),z.unixPermissions&&16384&z.unixPermissions&&(z.dir=!0),z.dosPermissions&&16&z.dosPermissions&&(z.dir=!0),z.dir&&(_=v(_)),z.createFolders&&(P=g(_))&&y.call(this,P,!0);var q=F==="string"&&z.binary===!1&&z.base64===!1;E&&E.binary!==void 0||(z.binary=!q),(M instanceof d&&M.uncompressedSize===0||z.dir||!M||M.length===0)&&(z.base64=!1,z.binary=!0,M="",z.compression="STORE",F="string");var x=null;x=M instanceof d||M instanceof l?M:p.isNode&&p.isStream(M)?new h(_,M):r.prepareContent(_,M,z.binary,z.optimizedBinaryString,z.base64);var R=new m(_,x,z);this.files[_]=R}var s=i("./utf8"),r=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),u=i("./defaults"),d=i("./compressedObject"),m=i("./zipObject"),f=i("./generate"),p=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),g=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var M=_.lastIndexOf("/");return 0<M?_.substring(0,M):""},v=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},y=function(_,M){return M=M!==void 0?M:u.createFolders,_=v(_),this.files[_]||n.call(this,_,null,{dir:!0,createFolders:M}),this.files[_]};function b(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var M,E,P;for(M in this.files)P=this.files[M],(E=M.slice(this.root.length,M.length))&&M.slice(0,this.root.length)===this.root&&_(E,P)},filter:function(_){var M=[];return this.forEach(function(E,P){_(E,P)&&M.push(P)}),M},file:function(_,M,E){if(arguments.length!==1)return _=this.root+_,n.call(this,_,M,E),this;if(b(_)){var P=_;return this.filter(function(z,q){return!q.dir&&P.test(z)})}var F=this.files[this.root+_];return F&&!F.dir?F:null},folder:function(_){if(!_)return this;if(b(_))return this.filter(function(F,z){return z.dir&&_.test(F)});var M=this.root+_,E=y.call(this,M),P=this.clone();return P.root=E.name,P},remove:function(_){_=this.root+_;var M=this.files[_];if(M||(_.slice(-1)!=="/"&&(_+="/"),M=this.files[_]),M&&!M.dir)delete this.files[_];else for(var E=this.filter(function(F,z){return z.name.slice(0,_.length)===_}),P=0;P<E.length;P++)delete this.files[E[P].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var M,E={};try{if((E=r.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=E.type.toLowerCase(),E.compression=E.compression.toUpperCase(),E.type==="binarystring"&&(E.type="string"),!E.type)throw new Error("No output type specified.");r.checkSupport(E.type),E.platform!=="darwin"&&E.platform!=="freebsd"&&E.platform!=="linux"&&E.platform!=="sunos"||(E.platform="UNIX"),E.platform==="win32"&&(E.platform="DOS");var P=E.comment||this.comment||"";M=f.generateWorker(this,E,P)}catch(F){(M=new l("error")).error(F)}return new c(M,E.type||"string",E.mimeType)},generateAsync:function(_,M){return this.generateInternalStream(_).accumulate(M)},generateNodeStream:function(_,M){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(M)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,o){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r);for(var l=0;l<this.data.length;l++)r[l]=255&r[l]}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data[this.zero+r]},s.prototype.lastIndexOfSignature=function(r){for(var l=r.charCodeAt(0),c=r.charCodeAt(1),u=r.charCodeAt(2),d=r.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===d)return m-this.zero;return-1},s.prototype.readAndCheckSignature=function(r){var l=r.charCodeAt(0),c=r.charCodeAt(1),u=r.charCodeAt(2),d=r.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&d===m[3]},s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,a,o){var n=i("../utils");function s(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var l,c=0;for(this.checkOffset(r),l=this.index+r-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=r,c},readString:function(r){return n.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},a.exports=s},{"../utils":32}],19:[function(i,a,o){var n=i("./Uint8ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,o){var n=i("./DataReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},s.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},s.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},s.prototype.readData=function(r){this.checkOffset(r);var l=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,a,o){var n=i("./ArrayReader");function s(r){n.call(this,r)}i("../utils").inherits(s,n),s.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,l},a.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,o){var n=i("../utils"),s=i("../support"),r=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),u=i("./Uint8ArrayReader");a.exports=function(d){var m=n.getTypeOf(d);return n.checkSupport(m),m!=="string"||s.uint8array?m==="nodebuffer"?new c(d):s.uint8array?new u(n.transformTo("uint8array",d)):new r(n.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,o){var n=i("./GenericWorker"),s=i("../utils");function r(l){n.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(r,n),r.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},a.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,o){var n=i("./GenericWorker"),s=i("../crc32");function r(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(r,n),r.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(r,s),r.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},a.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,o){var n=i("../utils"),s=i("./GenericWorker");function r(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=n.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}n.inherits(r,s),r.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,o){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,r){return this._listeners[s].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,r){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,r)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var r=this;return s.on("data",function(l){r.processChunk(l)}),s.on("end",function(){r.end()}),s.on("error",function(l){r.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,r){return this.extraStreamInfo[s]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},a.exports=n},{}],29:[function(i,a,o){var n=i("../utils"),s=i("./ConvertWorker"),r=i("./GenericWorker"),l=i("../base64"),c=i("../support"),u=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(p,h){return new u.Promise(function(g,v){var y=[],b=p._internalType,T=p._outputType,_=p._mimeType;p.on("data",function(M,E){y.push(M),h&&h(E)}).on("error",function(M){y=[],v(M)}).on("end",function(){try{var M=(function(E,P,F){switch(E){case"blob":return n.newBlob(n.transformTo("arraybuffer",P),F);case"base64":return l.encode(P);default:return n.transformTo(E,P)}})(T,(function(E,P){var F,z=0,q=null,x=0;for(F=0;F<P.length;F++)x+=P[F].length;switch(E){case"string":return P.join("");case"array":return Array.prototype.concat.apply([],P);case"uint8array":for(q=new Uint8Array(x),F=0;F<P.length;F++)q.set(P[F],z),z+=P[F].length;return q;case"nodebuffer":return Buffer.concat(P);default:throw new Error("concat : unsupported type '"+E+"'")}})(b,y),_);g(M)}catch(E){v(E)}y=[]}).resume()})}function f(p,h,g){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=g,n.checkSupport(v),this._worker=p.pipe(new s(v)),p.lock()}catch(y){this._worker=new r("error"),this._worker.error(y)}}f.prototype={accumulate:function(p){return m(this,p)},on:function(p,h){var g=this;return p==="data"?this._worker.on(p,function(v){h.call(g,v.data,v.meta)}):this._worker.on(p,function(){n.delay(h,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},p)}},a.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var n=new ArrayBuffer(0);try{o.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),o.blob=s.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!i("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,o){for(var n=i("./utils"),s=i("./support"),r=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}o.utf8encode=function(f){return s.nodebuffer?r.newBufferFrom(f,"utf-8"):(function(p){var h,g,v,y,b,T=p.length,_=0;for(y=0;y<T;y++)(64512&(g=p.charCodeAt(y)))==55296&&y+1<T&&(64512&(v=p.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),y++),_+=g<128?1:g<2048?2:g<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),y=b=0;b<_;y++)(64512&(g=p.charCodeAt(y)))==55296&&y+1<T&&(64512&(v=p.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),y++),g<128?h[b++]=g:(g<2048?h[b++]=192|g>>>6:(g<65536?h[b++]=224|g>>>12:(h[b++]=240|g>>>18,h[b++]=128|g>>>12&63),h[b++]=128|g>>>6&63),h[b++]=128|63&g);return h})(f)},o.utf8decode=function(f){return s.nodebuffer?n.transformTo("nodebuffer",f).toString("utf-8"):(function(p){var h,g,v,y,b=p.length,T=new Array(2*b);for(h=g=0;h<b;)if((v=p[h++])<128)T[g++]=v;else if(4<(y=c[v]))T[g++]=65533,h+=y-1;else{for(v&=y===2?31:y===3?15:7;1<y&&h<b;)v=v<<6|63&p[h++],y--;1<y?T[g++]=65533:v<65536?T[g++]=v:(v-=65536,T[g++]=55296|v>>10&1023,T[g++]=56320|1023&v)}return T.length!==g&&(T.subarray?T=T.subarray(0,g):T.length=g),n.applyFromCharCode(T)})(f=n.transformTo(s.uint8array?"uint8array":"array",f))},n.inherits(d,l),d.prototype.processChunk=function(f){var p=n.transformTo(s.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=p;(p=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),p.set(h,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var g=(function(y,b){var T;for((b=b||y.length)>y.length&&(b=y.length),T=b-1;0<=T&&(192&y[T])==128;)T--;return T<0||T===0?b:T+c[y[T]]>b?T:b})(p),v=p;g!==p.length&&(s.uint8array?(v=p.subarray(0,g),this.leftOver=p.subarray(g,p.length)):(v=p.slice(0,g),this.leftOver=p.slice(g,p.length))),this.push({data:o.utf8decode(v),meta:f.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=d,n.inherits(m,l),m.prototype.processChunk=function(f){this.push({data:o.utf8encode(f.data),meta:f.meta})},o.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,o){var n=i("./support"),s=i("./base64"),r=i("./nodejsUtils"),l=i("./external");function c(h){return h}function u(h,g){for(var v=0;v<h.length;++v)g[v]=255&h.charCodeAt(v);return g}i("setimmediate"),o.newBlob=function(h,g){o.checkSupport("blob");try{return new Blob([h],{type:g})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,g,v){var y=[],b=0,T=h.length;if(T<=v)return String.fromCharCode.apply(null,h);for(;b<T;)g==="array"||g==="nodebuffer"?y.push(String.fromCharCode.apply(null,h.slice(b,Math.min(b+v,T)))):y.push(String.fromCharCode.apply(null,h.subarray(b,Math.min(b+v,T)))),b+=v;return y.join("")},stringifyByChar:function(h){for(var g="",v=0;v<h.length;v++)g+=String.fromCharCode(h[v]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch{return!1}})()}};function m(h){var g=65536,v=o.getTypeOf(h),y=!0;if(v==="uint8array"?y=d.applyCanBeUsed.uint8array:v==="nodebuffer"&&(y=d.applyCanBeUsed.nodebuffer),y)for(;1<g;)try{return d.stringifyByChunk(h,v,g)}catch{g=Math.floor(g/2)}return d.stringifyByChar(h)}function f(h,g){for(var v=0;v<h.length;v++)g[v]=h[v];return g}o.applyFromCharCode=m;var p={};p.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return p.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,r.allocBuffer(h.length))}},p.array={string:m,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(h)}},p.arraybuffer={string:function(h){return m(new Uint8Array(h))},array:function(h){return f(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return r.newBufferFrom(new Uint8Array(h))}},p.uint8array={string:m,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return r.newBufferFrom(h)}},p.nodebuffer={string:m,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return p.nodebuffer.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:c},o.transformTo=function(h,g){if(g=g||"",!h)return g;o.checkSupport(h);var v=o.getTypeOf(g);return p[v][h](g)},o.resolve=function(h){for(var g=h.split("/"),v=[],y=0;y<g.length;y++){var b=g[y];b==="."||b===""&&y!==0&&y!==g.length-1||(b===".."?v.pop():v.push(b))}return v.join("/")},o.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":n.nodebuffer&&r.isBuffer(h)?"nodebuffer":n.uint8array&&h instanceof Uint8Array?"uint8array":n.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(h){if(!n[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(h){var g,v,y="";for(v=0;v<(h||"").length;v++)y+="\\x"+((g=h.charCodeAt(v))<16?"0":"")+g.toString(16).toUpperCase();return y},o.delay=function(h,g,v){setImmediate(function(){h.apply(v||null,g||[])})},o.inherits=function(h,g){function v(){}v.prototype=g.prototype,h.prototype=new v},o.extend=function(){var h,g,v={};for(h=0;h<arguments.length;h++)for(g in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],g)&&v[g]===void 0&&(v[g]=arguments[h][g]);return v},o.prepareContent=function(h,g,v,y,b){return l.Promise.resolve(g).then(function(T){return n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,M){var E=new FileReader;E.onload=function(P){_(P.target.result)},E.onerror=function(P){M(P.target.error)},E.readAsArrayBuffer(T)}):T}).then(function(T){var _=o.getTypeOf(T);return _?(_==="arraybuffer"?T=o.transformTo("uint8array",T):_==="string"&&(b?T=s.decode(T):v&&y!==!0&&(T=(function(M){return u(M,n.uint8array?new Uint8Array(M.length):new Array(M.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./signature"),l=i("./zipEntry"),c=i("./support");function u(d){this.files=[],this.loadOptions=d}u.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(m)+", expected "+s.pretty(d)+")")}},isSignature:function(d,m){var f=this.reader.index;this.reader.setIndex(d);var p=this.reader.readString(4)===m;return this.reader.setIndex(f),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",f=s.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,f,p=this.zip64EndOfCentralSize-44;0<p;)d=this.reader.readInt(2),m=this.reader.readInt(4),f=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var p=m-f;if(0<p)this.isSignature(m,r.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(d){this.reader=n(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,o){var n=i("./reader/readerFor"),s=i("./utils"),r=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),u=i("./compressions"),d=i("./support");function m(f,p){this.options=f,this.loadOptions=p}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var p,h;if(f.skip(22),this.fileNameLength=f.readInt(2),h=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(g){for(var v in u)if(Object.prototype.hasOwnProperty.call(u,v)&&u[v].magic===g)return u[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,p,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var p=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(p),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var p,h,g,v=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<v;)p=f.readInt(2),h=f.readInt(2),g=f.readData(h),this.extraFields[p]={id:p,length:h,value:g};f.setIndex(v)},handleUTF8:function(){var f=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var h=s.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var v=s.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var p=n(f.value);return p.readInt(1)!==1||l(this.fileName)!==p.readInt(4)?null:c.utf8decode(p.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var p=n(f.value);return p.readInt(1)!==1||l(this.fileComment)!==p.readInt(4)?null:c.utf8decode(p.readData(f.length-5))}return null}},a.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,o){function n(p,h,g){this.name=p,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=h,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=i("./stream/StreamHelper"),r=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),u=i("./stream/GenericWorker");n.prototype={internalStream:function(p){var h=null,g="string";try{if(!p)throw new Error("No output type specified.");var v=(g=p.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),h=this._decompressWorker();var y=!this._dataBinary;y&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!y&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(b){(h=new u("error")).error(b)}return new s(h,g,"")},async:function(p,h){return this.internalStream(p).accumulate(h)},nodeStream:function(p,h){return this.internalStream(p||"nodebuffer").toNodejsStream(h)},_compressWorker:function(p,h){if(this._data instanceof c&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,p,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<d.length;f++)n.prototype[d[f]]=m;a.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,o){(function(n){var s,r,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var c=0,u=new l(p),d=n.document.createTextNode("");u.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var h=n.document.createElement("script");h.onreadystatechange=function(){p(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},n.document.documentElement.appendChild(h)}:function(){setTimeout(p,0)};else{var m=new n.MessageChannel;m.port1.onmessage=p,s=function(){m.port2.postMessage(0)}}var f=[];function p(){var h,g;r=!0;for(var v=f.length;v;){for(g=f,f=[],h=-1;++h<v;)g[h]();v=f.length}r=!1}a.exports=function(h){f.push(h)!==1||r||s()}}).call(this,typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,o){var n=i("immediate");function s(){}var r={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function d(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,v!==s&&h(this,v)}function m(v,y,b){this.promise=v,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}function f(v,y,b){n(function(){var T;try{T=y(b)}catch(_){return r.reject(v,_)}T===v?r.reject(v,new TypeError("Cannot resolve promise with itself")):r.resolve(v,T)})}function p(v){var y=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof y=="function")return function(){y.apply(v,arguments)}}function h(v,y){var b=!1;function T(E){b||(b=!0,r.reject(v,E))}function _(E){b||(b=!0,r.resolve(v,E))}var M=g(function(){y(_,T)});M.status==="error"&&T(M.value)}function g(v,y){var b={};try{b.value=v(y),b.status="success"}catch(T){b.status="error",b.value=T}return b}(a.exports=d).prototype.finally=function(v){if(typeof v!="function")return this;var y=this.constructor;return this.then(function(b){return y.resolve(v()).then(function(){return b})},function(b){return y.resolve(v()).then(function(){throw b})})},d.prototype.catch=function(v){return this.then(null,v)},d.prototype.then=function(v,y){if(typeof v!="function"&&this.state===c||typeof y!="function"&&this.state===l)return this;var b=new this.constructor(s);return this.state!==u?f(b,this.state===c?v:y,this.outcome):this.queue.push(new m(b,v,y)),b},m.prototype.callFulfilled=function(v){r.resolve(this.promise,v)},m.prototype.otherCallFulfilled=function(v){f(this.promise,this.onFulfilled,v)},m.prototype.callRejected=function(v){r.reject(this.promise,v)},m.prototype.otherCallRejected=function(v){f(this.promise,this.onRejected,v)},r.resolve=function(v,y){var b=g(p,y);if(b.status==="error")return r.reject(v,b.value);var T=b.value;if(T)h(v,T);else{v.state=c,v.outcome=y;for(var _=-1,M=v.queue.length;++_<M;)v.queue[_].callFulfilled(y)}return v},r.reject=function(v,y){v.state=l,v.outcome=y;for(var b=-1,T=v.queue.length;++b<T;)v.queue[b].callRejected(y);return v},d.resolve=function(v){return v instanceof this?v:r.resolve(new this(s),v)},d.reject=function(v){var y=new this(s);return r.reject(y,v)},d.all=function(v){var y=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=v.length,T=!1;if(!b)return this.resolve([]);for(var _=new Array(b),M=0,E=-1,P=new this(s);++E<b;)F(v[E],E);return P;function F(z,q){y.resolve(z).then(function(x){_[q]=x,++M!==b||T||(T=!0,r.resolve(P,_))},function(x){T||(T=!0,r.reject(P,x))})}},d.race=function(v){var y=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=v.length,T=!1;if(!b)return this.resolve([]);for(var _=-1,M=new this(s);++_<b;)E=v[_],y.resolve(E).then(function(P){T||(T=!0,r.resolve(M,P))},function(P){T||(T=!0,r.reject(M,P))});var E;return M}},{immediate:36}],38:[function(i,a,o){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,o){var n=i("./zlib/deflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),u=Object.prototype.toString,d=0,m=-1,f=0,p=8;function h(v){if(!(this instanceof h))return new h(v);this.options=s.assign({level:m,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},v||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var b=n.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(b!==d)throw new Error(l[b]);if(y.header&&n.deflateSetHeader(this.strm,y.header),y.dictionary){var T;if(T=typeof y.dictionary=="string"?r.string2buf(y.dictionary):u.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(b=n.deflateSetDictionary(this.strm,T))!==d)throw new Error(l[b]);this._dict_set=!0}}function g(v,y){var b=new h(y);if(b.push(v,!0),b.err)throw b.msg||l[b.err];return b.result}h.prototype.push=function(v,y){var b,T,_=this.strm,M=this.options.chunkSize;if(this.ended)return!1;T=y===~~y?y:y===!0?4:0,typeof v=="string"?_.input=r.string2buf(v):u.call(v)==="[object ArrayBuffer]"?_.input=new Uint8Array(v):_.input=v,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(M),_.next_out=0,_.avail_out=M),(b=n.deflate(_,T))!==1&&b!==d)return this.onEnd(b),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&b!==1);return T===4?(b=n.deflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===d):T!==2||(this.onEnd(d),!(_.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},o.Deflate=h,o.deflate=g,o.deflateRaw=function(v,y){return(y=y||{}).raw=!0,g(v,y)},o.gzip=function(v,y){return(y=y||{}).gzip=!0,g(v,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,o){var n=i("./zlib/inflate"),s=i("./utils/common"),r=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),u=i("./zlib/zstream"),d=i("./zlib/gzheader"),m=Object.prototype.toString;function f(h){if(!(this instanceof f))return new f(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||h&&h.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var v=n.inflateInit2(this.strm,g.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new d,n.inflateGetHeader(this.strm,this.header)}function p(h,g){var v=new f(g);if(v.push(h,!0),v.err)throw v.msg||c[v.err];return v.result}f.prototype.push=function(h,g){var v,y,b,T,_,M,E=this.strm,P=this.options.chunkSize,F=this.options.dictionary,z=!1;if(this.ended)return!1;y=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?E.input=r.binstring2buf(h):m.call(h)==="[object ArrayBuffer]"?E.input=new Uint8Array(h):E.input=h,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new s.Buf8(P),E.next_out=0,E.avail_out=P),(v=n.inflate(E,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&F&&(M=typeof F=="string"?r.string2buf(F):m.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,v=n.inflateSetDictionary(this.strm,M)),v===l.Z_BUF_ERROR&&z===!0&&(v=l.Z_OK,z=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);E.next_out&&(E.avail_out!==0&&v!==l.Z_STREAM_END&&(E.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(b=r.utf8border(E.output,E.next_out),T=E.next_out-b,_=r.buf2string(E.output,b),E.next_out=T,E.avail_out=P-T,T&&s.arraySet(E.output,E.output,b,T,0),this.onData(_)):this.onData(s.shrinkBuf(E.output,E.next_out)))),E.avail_in===0&&E.avail_out===0&&(z=!0)}while((0<E.avail_in||E.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(v=n.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(E.avail_out=0))},f.prototype.onData=function(h){this.chunks.push(h)},f.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},o.Inflate=f,o.inflate=p,o.inflateRaw=function(h,g){return(g=g||{}).raw=!0,p(h,g)},o.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,o){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var d in u)u.hasOwnProperty(d)&&(l[d]=u[d])}}return l},o.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,u,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+d),m);else for(var f=0;f<d;f++)l[m+f]=c[u+f]},flattenChunks:function(l){var c,u,d,m,f,p;for(c=d=0,u=l.length;c<u;c++)d+=l[c].length;for(p=new Uint8Array(d),c=m=0,u=l.length;c<u;c++)f=l[c],p.set(f,m),m+=f.length;return p}},r={arraySet:function(l,c,u,d,m){for(var f=0;f<d;f++)l[m+f]=c[u+f]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,s)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,r))},o.setTyped(n)},{}],42:[function(i,a,o){var n=i("./common"),s=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{r=!1}for(var l=new n.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(d,m){if(m<65537&&(d.subarray&&r||!d.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(d,m));for(var f="",p=0;p<m;p++)f+=String.fromCharCode(d[p]);return f}l[254]=l[254]=1,o.string2buf=function(d){var m,f,p,h,g,v=d.length,y=0;for(h=0;h<v;h++)(64512&(f=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(p=d.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(p-56320),h++),y+=f<128?1:f<2048?2:f<65536?3:4;for(m=new n.Buf8(y),h=g=0;g<y;h++)(64512&(f=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(p=d.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(p-56320),h++),f<128?m[g++]=f:(f<2048?m[g++]=192|f>>>6:(f<65536?m[g++]=224|f>>>12:(m[g++]=240|f>>>18,m[g++]=128|f>>>12&63),m[g++]=128|f>>>6&63),m[g++]=128|63&f);return m},o.buf2binstring=function(d){return u(d,d.length)},o.binstring2buf=function(d){for(var m=new n.Buf8(d.length),f=0,p=m.length;f<p;f++)m[f]=d.charCodeAt(f);return m},o.buf2string=function(d,m){var f,p,h,g,v=m||d.length,y=new Array(2*v);for(f=p=0;f<v;)if((h=d[f++])<128)y[p++]=h;else if(4<(g=l[h]))y[p++]=65533,f+=g-1;else{for(h&=g===2?31:g===3?15:7;1<g&&f<v;)h=h<<6|63&d[f++],g--;1<g?y[p++]=65533:h<65536?y[p++]=h:(h-=65536,y[p++]=55296|h>>10&1023,y[p++]=56320|1023&h)}return u(y,p)},o.utf8border=function(d,m){var f;for((m=m||d.length)>d.length&&(m=d.length),f=m-1;0<=f&&(192&d[f])==128;)f--;return f<0||f===0?m:f+l[d[f]]>m?f:m}},{"./common":41}],43:[function(i,a,o){a.exports=function(n,s,r,l){for(var c=65535&n|0,u=n>>>16&65535|0,d=0;r!==0;){for(r-=d=2e3<r?2e3:r;u=u+(c=c+s[l++]|0)|0,--d;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(i,a,o){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,o){var n=(function(){for(var s,r=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;r[l]=s}return r})();a.exports=function(s,r,l,c){var u=n,d=c+l;s^=-1;for(var m=c;m<d;m++)s=s>>>8^u[255&(s^r[m])];return-1^s}},{}],46:[function(i,a,o){var n,s=i("../utils/common"),r=i("./trees"),l=i("./adler32"),c=i("./crc32"),u=i("./messages"),d=0,m=4,f=0,p=-2,h=-1,g=4,v=2,y=8,b=9,T=286,_=30,M=19,E=2*T+1,P=15,F=3,z=258,q=z+F+1,x=42,R=113,k=1,U=2,G=3,O=4;function ae(w,j){return w.msg=u[j],j}function W(w){return(w<<1)-(4<w?9:0)}function te(w){for(var j=w.length;0<=--j;)w[j]=0}function N(w){var j=w.state,D=j.pending;D>w.avail_out&&(D=w.avail_out),D!==0&&(s.arraySet(w.output,j.pending_buf,j.pending_out,D,w.next_out),w.next_out+=D,j.pending_out+=D,w.total_out+=D,w.avail_out-=D,j.pending-=D,j.pending===0&&(j.pending_out=0))}function L(w,j){r._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,j),w.block_start=w.strstart,N(w.strm)}function se(w,j){w.pending_buf[w.pending++]=j}function ie(w,j){w.pending_buf[w.pending++]=j>>>8&255,w.pending_buf[w.pending++]=255&j}function Q(w,j){var D,C,S=w.max_chain_length,B=w.strstart,V=w.prev_length,K=w.nice_match,H=w.strstart>w.w_size-q?w.strstart-(w.w_size-q):0,Z=w.window,oe=w.w_mask,J=w.prev,ce=w.strstart+z,be=Z[B+V-1],he=Z[B+V];w.prev_length>=w.good_match&&(S>>=2),K>w.lookahead&&(K=w.lookahead);do if(Z[(D=j)+V]===he&&Z[D+V-1]===be&&Z[D]===Z[B]&&Z[++D]===Z[B+1]){B+=2,D++;do;while(Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&Z[++B]===Z[++D]&&B<ce);if(C=z-(ce-B),B=ce-z,V<C){if(w.match_start=j,K<=(V=C))break;be=Z[B+V-1],he=Z[B+V]}}while((j=J[j&oe])>H&&--S!=0);return V<=w.lookahead?V:w.lookahead}function ke(w){var j,D,C,S,B,V,K,H,Z,oe,J=w.w_size;do{if(S=w.window_size-w.lookahead-w.strstart,w.strstart>=J+(J-q)){for(s.arraySet(w.window,w.window,J,J,0),w.match_start-=J,w.strstart-=J,w.block_start-=J,j=D=w.hash_size;C=w.head[--j],w.head[j]=J<=C?C-J:0,--D;);for(j=D=J;C=w.prev[--j],w.prev[j]=J<=C?C-J:0,--D;);S+=J}if(w.strm.avail_in===0)break;if(V=w.strm,K=w.window,H=w.strstart+w.lookahead,Z=S,oe=void 0,oe=V.avail_in,Z<oe&&(oe=Z),D=oe===0?0:(V.avail_in-=oe,s.arraySet(K,V.input,V.next_in,oe,H),V.state.wrap===1?V.adler=l(V.adler,K,oe,H):V.state.wrap===2&&(V.adler=c(V.adler,K,oe,H)),V.next_in+=oe,V.total_in+=oe,oe),w.lookahead+=D,w.lookahead+w.insert>=F)for(B=w.strstart-w.insert,w.ins_h=w.window[B],w.ins_h=(w.ins_h<<w.hash_shift^w.window[B+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[B+F-1])&w.hash_mask,w.prev[B&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=B,B++,w.insert--,!(w.lookahead+w.insert<F)););}while(w.lookahead<q&&w.strm.avail_in!==0)}function Fe(w,j){for(var D,C;;){if(w.lookahead<q){if(ke(w),w.lookahead<q&&j===d)return k;if(w.lookahead===0)break}if(D=0,w.lookahead>=F&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,D=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),D!==0&&w.strstart-D<=w.w_size-q&&(w.match_length=Q(w,D)),w.match_length>=F)if(C=r._tr_tally(w,w.strstart-w.match_start,w.match_length-F),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=F){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,D=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else C=r._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(C&&(L(w,!1),w.strm.avail_out===0))return k}return w.insert=w.strstart<F-1?w.strstart:F-1,j===m?(L(w,!0),w.strm.avail_out===0?G:O):w.last_lit&&(L(w,!1),w.strm.avail_out===0)?k:U}function ue(w,j){for(var D,C,S;;){if(w.lookahead<q){if(ke(w),w.lookahead<q&&j===d)return k;if(w.lookahead===0)break}if(D=0,w.lookahead>=F&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,D=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=F-1,D!==0&&w.prev_length<w.max_lazy_match&&w.strstart-D<=w.w_size-q&&(w.match_length=Q(w,D),w.match_length<=5&&(w.strategy===1||w.match_length===F&&4096<w.strstart-w.match_start)&&(w.match_length=F-1)),w.prev_length>=F&&w.match_length<=w.prev_length){for(S=w.strstart+w.lookahead-F,C=r._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-F),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=S&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,D=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=F-1,w.strstart++,C&&(L(w,!1),w.strm.avail_out===0))return k}else if(w.match_available){if((C=r._tr_tally(w,0,w.window[w.strstart-1]))&&L(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return k}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(C=r._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<F-1?w.strstart:F-1,j===m?(L(w,!0),w.strm.avail_out===0?G:O):w.last_lit&&(L(w,!1),w.strm.avail_out===0)?k:U}function pe(w,j,D,C,S){this.good_length=w,this.max_lazy=j,this.nice_length=D,this.max_chain=C,this.func=S}function Ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*E),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*M+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(P+1),this.heap=new s.Buf16(2*T+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Se(w){var j;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=v,(j=w.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?x:R,w.adler=j.wrap===2?0:1,j.last_flush=d,r._tr_init(j),f):ae(w,p)}function Ze(w){var j=Se(w);return j===f&&(function(D){D.window_size=2*D.w_size,te(D.head),D.max_lazy_match=n[D.level].max_lazy,D.good_match=n[D.level].good_length,D.nice_match=n[D.level].nice_length,D.max_chain_length=n[D.level].max_chain,D.strstart=0,D.block_start=0,D.lookahead=0,D.insert=0,D.match_length=D.prev_length=F-1,D.match_available=0,D.ins_h=0})(w.state),j}function qe(w,j,D,C,S,B){if(!w)return p;var V=1;if(j===h&&(j=6),C<0?(V=0,C=-C):15<C&&(V=2,C-=16),S<1||b<S||D!==y||C<8||15<C||j<0||9<j||B<0||g<B)return ae(w,p);C===8&&(C=9);var K=new Ee;return(w.state=K).strm=w,K.wrap=V,K.gzhead=null,K.w_bits=C,K.w_size=1<<K.w_bits,K.w_mask=K.w_size-1,K.hash_bits=S+7,K.hash_size=1<<K.hash_bits,K.hash_mask=K.hash_size-1,K.hash_shift=~~((K.hash_bits+F-1)/F),K.window=new s.Buf8(2*K.w_size),K.head=new s.Buf16(K.hash_size),K.prev=new s.Buf16(K.w_size),K.lit_bufsize=1<<S+6,K.pending_buf_size=4*K.lit_bufsize,K.pending_buf=new s.Buf8(K.pending_buf_size),K.d_buf=1*K.lit_bufsize,K.l_buf=3*K.lit_bufsize,K.level=j,K.strategy=B,K.method=D,Ze(w)}n=[new pe(0,0,0,0,function(w,j){var D=65535;for(D>w.pending_buf_size-5&&(D=w.pending_buf_size-5);;){if(w.lookahead<=1){if(ke(w),w.lookahead===0&&j===d)return k;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var C=w.block_start+D;if((w.strstart===0||w.strstart>=C)&&(w.lookahead=w.strstart-C,w.strstart=C,L(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-q&&(L(w,!1),w.strm.avail_out===0))return k}return w.insert=0,j===m?(L(w,!0),w.strm.avail_out===0?G:O):(w.strstart>w.block_start&&(L(w,!1),w.strm.avail_out),k)}),new pe(4,4,8,4,Fe),new pe(4,5,16,8,Fe),new pe(4,6,32,32,Fe),new pe(4,4,16,16,ue),new pe(8,16,32,32,ue),new pe(8,16,128,128,ue),new pe(8,32,128,256,ue),new pe(32,128,258,1024,ue),new pe(32,258,258,4096,ue)],o.deflateInit=function(w,j){return qe(w,j,y,15,8,0)},o.deflateInit2=qe,o.deflateReset=Ze,o.deflateResetKeep=Se,o.deflateSetHeader=function(w,j){return w&&w.state?w.state.wrap!==2?p:(w.state.gzhead=j,f):p},o.deflate=function(w,j){var D,C,S,B;if(!w||!w.state||5<j||j<0)return w?ae(w,p):p;if(C=w.state,!w.output||!w.input&&w.avail_in!==0||C.status===666&&j!==m)return ae(w,w.avail_out===0?-5:p);if(C.strm=w,D=C.last_flush,C.last_flush=j,C.status===x)if(C.wrap===2)w.adler=0,se(C,31),se(C,139),se(C,8),C.gzhead?(se(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),se(C,255&C.gzhead.time),se(C,C.gzhead.time>>8&255),se(C,C.gzhead.time>>16&255),se(C,C.gzhead.time>>24&255),se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),se(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(se(C,255&C.gzhead.extra.length),se(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(w.adler=c(w.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(se(C,0),se(C,0),se(C,0),se(C,0),se(C,0),se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),se(C,3),C.status=R);else{var V=y+(C.w_bits-8<<4)<<8;V|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(V|=32),V+=31-V%31,C.status=R,ie(C,V),C.strstart!==0&&(ie(C,w.adler>>>16),ie(C,65535&w.adler)),w.adler=1}if(C.status===69)if(C.gzhead.extra){for(S=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),N(w),S=C.pending,C.pending!==C.pending_buf_size));)se(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),N(w),S=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),B===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){S=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),N(w),S=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>S&&(w.adler=c(w.adler,C.pending_buf,C.pending-S,S)),B===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&N(w),C.pending+2<=C.pending_buf_size&&(se(C,255&w.adler),se(C,w.adler>>8&255),w.adler=0,C.status=R)):C.status=R),C.pending!==0){if(N(w),w.avail_out===0)return C.last_flush=-1,f}else if(w.avail_in===0&&W(j)<=W(D)&&j!==m)return ae(w,-5);if(C.status===666&&w.avail_in!==0)return ae(w,-5);if(w.avail_in!==0||C.lookahead!==0||j!==d&&C.status!==666){var K=C.strategy===2?(function(H,Z){for(var oe;;){if(H.lookahead===0&&(ke(H),H.lookahead===0)){if(Z===d)return k;break}if(H.match_length=0,oe=r._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,oe&&(L(H,!1),H.strm.avail_out===0))return k}return H.insert=0,Z===m?(L(H,!0),H.strm.avail_out===0?G:O):H.last_lit&&(L(H,!1),H.strm.avail_out===0)?k:U})(C,j):C.strategy===3?(function(H,Z){for(var oe,J,ce,be,he=H.window;;){if(H.lookahead<=z){if(ke(H),H.lookahead<=z&&Z===d)return k;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=F&&0<H.strstart&&(J=he[ce=H.strstart-1])===he[++ce]&&J===he[++ce]&&J===he[++ce]){be=H.strstart+z;do;while(J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&J===he[++ce]&&ce<be);H.match_length=z-(be-ce),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=F?(oe=r._tr_tally(H,1,H.match_length-F),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(oe=r._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),oe&&(L(H,!1),H.strm.avail_out===0))return k}return H.insert=0,Z===m?(L(H,!0),H.strm.avail_out===0?G:O):H.last_lit&&(L(H,!1),H.strm.avail_out===0)?k:U})(C,j):n[C.level].func(C,j);if(K!==G&&K!==O||(C.status=666),K===k||K===G)return w.avail_out===0&&(C.last_flush=-1),f;if(K===U&&(j===1?r._tr_align(C):j!==5&&(r._tr_stored_block(C,0,0,!1),j===3&&(te(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),N(w),w.avail_out===0))return C.last_flush=-1,f}return j!==m?f:C.wrap<=0?1:(C.wrap===2?(se(C,255&w.adler),se(C,w.adler>>8&255),se(C,w.adler>>16&255),se(C,w.adler>>24&255),se(C,255&w.total_in),se(C,w.total_in>>8&255),se(C,w.total_in>>16&255),se(C,w.total_in>>24&255)):(ie(C,w.adler>>>16),ie(C,65535&w.adler)),N(w),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?f:1)},o.deflateEnd=function(w){var j;return w&&w.state?(j=w.state.status)!==x&&j!==69&&j!==73&&j!==91&&j!==103&&j!==R&&j!==666?ae(w,p):(w.state=null,j===R?ae(w,-3):f):p},o.deflateSetDictionary=function(w,j){var D,C,S,B,V,K,H,Z,oe=j.length;if(!w||!w.state||(B=(D=w.state).wrap)===2||B===1&&D.status!==x||D.lookahead)return p;for(B===1&&(w.adler=l(w.adler,j,oe,0)),D.wrap=0,oe>=D.w_size&&(B===0&&(te(D.head),D.strstart=0,D.block_start=0,D.insert=0),Z=new s.Buf8(D.w_size),s.arraySet(Z,j,oe-D.w_size,D.w_size,0),j=Z,oe=D.w_size),V=w.avail_in,K=w.next_in,H=w.input,w.avail_in=oe,w.next_in=0,w.input=j,ke(D);D.lookahead>=F;){for(C=D.strstart,S=D.lookahead-(F-1);D.ins_h=(D.ins_h<<D.hash_shift^D.window[C+F-1])&D.hash_mask,D.prev[C&D.w_mask]=D.head[D.ins_h],D.head[D.ins_h]=C,C++,--S;);D.strstart=C,D.lookahead=F-1,ke(D)}return D.strstart+=D.lookahead,D.block_start=D.strstart,D.insert=D.lookahead,D.lookahead=0,D.match_length=D.prev_length=F-1,D.match_available=0,w.next_in=K,w.input=H,w.avail_in=V,D.wrap=B,f},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,o){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,o){a.exports=function(n,s){var r,l,c,u,d,m,f,p,h,g,v,y,b,T,_,M,E,P,F,z,q,x,R,k,U;r=n.state,l=n.next_in,k=n.input,c=l+(n.avail_in-5),u=n.next_out,U=n.output,d=u-(s-n.avail_out),m=u+(n.avail_out-257),f=r.dmax,p=r.wsize,h=r.whave,g=r.wnext,v=r.window,y=r.hold,b=r.bits,T=r.lencode,_=r.distcode,M=(1<<r.lenbits)-1,E=(1<<r.distbits)-1;e:do{b<15&&(y+=k[l++]<<b,b+=8,y+=k[l++]<<b,b+=8),P=T[y&M];t:for(;;){if(y>>>=F=P>>>24,b-=F,(F=P>>>16&255)===0)U[u++]=65535&P;else{if(!(16&F)){if((64&F)==0){P=T[(65535&P)+(y&(1<<F)-1)];continue t}if(32&F){r.mode=12;break e}n.msg="invalid literal/length code",r.mode=30;break e}z=65535&P,(F&=15)&&(b<F&&(y+=k[l++]<<b,b+=8),z+=y&(1<<F)-1,y>>>=F,b-=F),b<15&&(y+=k[l++]<<b,b+=8,y+=k[l++]<<b,b+=8),P=_[y&E];i:for(;;){if(y>>>=F=P>>>24,b-=F,!(16&(F=P>>>16&255))){if((64&F)==0){P=_[(65535&P)+(y&(1<<F)-1)];continue i}n.msg="invalid distance code",r.mode=30;break e}if(q=65535&P,b<(F&=15)&&(y+=k[l++]<<b,(b+=8)<F&&(y+=k[l++]<<b,b+=8)),f<(q+=y&(1<<F)-1)){n.msg="invalid distance too far back",r.mode=30;break e}if(y>>>=F,b-=F,(F=u-d)<q){if(h<(F=q-F)&&r.sane){n.msg="invalid distance too far back",r.mode=30;break e}if(R=v,(x=0)===g){if(x+=p-F,F<z){for(z-=F;U[u++]=v[x++],--F;);x=u-q,R=U}}else if(g<F){if(x+=p+g-F,(F-=g)<z){for(z-=F;U[u++]=v[x++],--F;);if(x=0,g<z){for(z-=F=g;U[u++]=v[x++],--F;);x=u-q,R=U}}}else if(x+=g-F,F<z){for(z-=F;U[u++]=v[x++],--F;);x=u-q,R=U}for(;2<z;)U[u++]=R[x++],U[u++]=R[x++],U[u++]=R[x++],z-=3;z&&(U[u++]=R[x++],1<z&&(U[u++]=R[x++]))}else{for(x=u-q;U[u++]=U[x++],U[u++]=U[x++],U[u++]=U[x++],2<(z-=3););z&&(U[u++]=U[x++],1<z&&(U[u++]=U[x++]))}break}}break}}while(l<c&&u<m);l-=z=b>>3,y&=(1<<(b-=z<<3))-1,n.next_in=l,n.next_out=u,n.avail_in=l<c?c-l+5:5-(l-c),n.avail_out=u<m?m-u+257:257-(u-m),r.hold=y,r.bits=b}},{}],49:[function(i,a,o){var n=i("../utils/common"),s=i("./adler32"),r=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),u=1,d=2,m=0,f=-2,p=1,h=852,g=592;function v(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(x){var R;return x&&x.state?(R=x.state,x.total_in=x.total_out=R.total=0,x.msg="",R.wrap&&(x.adler=1&R.wrap),R.mode=p,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new n.Buf32(h),R.distcode=R.distdyn=new n.Buf32(g),R.sane=1,R.back=-1,m):f}function T(x){var R;return x&&x.state?((R=x.state).wsize=0,R.whave=0,R.wnext=0,b(x)):f}function _(x,R){var k,U;return x&&x.state?(U=x.state,R<0?(k=0,R=-R):(k=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?f:(U.window!==null&&U.wbits!==R&&(U.window=null),U.wrap=k,U.wbits=R,T(x))):f}function M(x,R){var k,U;return x?(U=new y,(x.state=U).window=null,(k=_(x,R))!==m&&(x.state=null),k):f}var E,P,F=!0;function z(x){if(F){var R;for(E=new n.Buf32(512),P=new n.Buf32(32),R=0;R<144;)x.lens[R++]=8;for(;R<256;)x.lens[R++]=9;for(;R<280;)x.lens[R++]=7;for(;R<288;)x.lens[R++]=8;for(c(u,x.lens,0,288,E,0,x.work,{bits:9}),R=0;R<32;)x.lens[R++]=5;c(d,x.lens,0,32,P,0,x.work,{bits:5}),F=!1}x.lencode=E,x.lenbits=9,x.distcode=P,x.distbits=5}function q(x,R,k,U){var G,O=x.state;return O.window===null&&(O.wsize=1<<O.wbits,O.wnext=0,O.whave=0,O.window=new n.Buf8(O.wsize)),U>=O.wsize?(n.arraySet(O.window,R,k-O.wsize,O.wsize,0),O.wnext=0,O.whave=O.wsize):(U<(G=O.wsize-O.wnext)&&(G=U),n.arraySet(O.window,R,k-U,G,O.wnext),(U-=G)?(n.arraySet(O.window,R,k-U,U,0),O.wnext=U,O.whave=O.wsize):(O.wnext+=G,O.wnext===O.wsize&&(O.wnext=0),O.whave<O.wsize&&(O.whave+=G))),0}o.inflateReset=T,o.inflateReset2=_,o.inflateResetKeep=b,o.inflateInit=function(x){return M(x,15)},o.inflateInit2=M,o.inflate=function(x,R){var k,U,G,O,ae,W,te,N,L,se,ie,Q,ke,Fe,ue,pe,Ee,Se,Ze,qe,w,j,D,C,S=0,B=new n.Buf8(4),V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return f;(k=x.state).mode===12&&(k.mode=13),ae=x.next_out,G=x.output,te=x.avail_out,O=x.next_in,U=x.input,W=x.avail_in,N=k.hold,L=k.bits,se=W,ie=te,j=m;e:for(;;)switch(k.mode){case p:if(k.wrap===0){k.mode=13;break}for(;L<16;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(2&k.wrap&&N===35615){B[k.check=0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0),L=N=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&N)<<8)+(N>>8))%31){x.msg="incorrect header check",k.mode=30;break}if((15&N)!=8){x.msg="unknown compression method",k.mode=30;break}if(L-=4,w=8+(15&(N>>>=4)),k.wbits===0)k.wbits=w;else if(w>k.wbits){x.msg="invalid window size",k.mode=30;break}k.dmax=1<<w,x.adler=k.check=1,k.mode=512&N?10:12,L=N=0;break;case 2:for(;L<16;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(k.flags=N,(255&k.flags)!=8){x.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){x.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=N>>8&1),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),L=N=0,k.mode=3;case 3:for(;L<32;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}k.head&&(k.head.time=N),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,B[2]=N>>>16&255,B[3]=N>>>24&255,k.check=r(k.check,B,4,0)),L=N=0,k.mode=4;case 4:for(;L<16;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}k.head&&(k.head.xflags=255&N,k.head.os=N>>8),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),L=N=0,k.mode=5;case 5:if(1024&k.flags){for(;L<16;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}k.length=N,k.head&&(k.head.extra_len=N),512&k.flags&&(B[0]=255&N,B[1]=N>>>8&255,k.check=r(k.check,B,2,0)),L=N=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(W<(Q=k.length)&&(Q=W),Q&&(k.head&&(w=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),n.arraySet(k.head.extra,U,O,Q,w)),512&k.flags&&(k.check=r(k.check,U,Q,O)),W-=Q,O+=Q,k.length-=Q),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(W===0)break e;for(Q=0;w=U[O+Q++],k.head&&w&&k.length<65536&&(k.head.name+=String.fromCharCode(w)),w&&Q<W;);if(512&k.flags&&(k.check=r(k.check,U,Q,O)),W-=Q,O+=Q,w)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(W===0)break e;for(Q=0;w=U[O+Q++],k.head&&w&&k.length<65536&&(k.head.comment+=String.fromCharCode(w)),w&&Q<W;);if(512&k.flags&&(k.check=r(k.check,U,Q,O)),W-=Q,O+=Q,w)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;L<16;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(N!==(65535&k.check)){x.msg="header crc mismatch",k.mode=30;break}L=N=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),x.adler=k.check=0,k.mode=12;break;case 10:for(;L<32;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}x.adler=k.check=v(N),L=N=0,k.mode=11;case 11:if(k.havedict===0)return x.next_out=ae,x.avail_out=te,x.next_in=O,x.avail_in=W,k.hold=N,k.bits=L,2;x.adler=k.check=1,k.mode=12;case 12:if(R===5||R===6)break e;case 13:if(k.last){N>>>=7&L,L-=7&L,k.mode=27;break}for(;L<3;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}switch(k.last=1&N,L-=1,3&(N>>>=1)){case 0:k.mode=14;break;case 1:if(z(k),k.mode=20,R!==6)break;N>>>=2,L-=2;break e;case 2:k.mode=17;break;case 3:x.msg="invalid block type",k.mode=30}N>>>=2,L-=2;break;case 14:for(N>>>=7&L,L-=7&L;L<32;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if((65535&N)!=(N>>>16^65535)){x.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&N,L=N=0,k.mode=15,R===6)break e;case 15:k.mode=16;case 16:if(Q=k.length){if(W<Q&&(Q=W),te<Q&&(Q=te),Q===0)break e;n.arraySet(G,U,O,Q,ae),W-=Q,O+=Q,te-=Q,ae+=Q,k.length-=Q;break}k.mode=12;break;case 17:for(;L<14;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(k.nlen=257+(31&N),N>>>=5,L-=5,k.ndist=1+(31&N),N>>>=5,L-=5,k.ncode=4+(15&N),N>>>=4,L-=4,286<k.nlen||30<k.ndist){x.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;L<3;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}k.lens[V[k.have++]]=7&N,N>>>=3,L-=3}for(;k.have<19;)k.lens[V[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,D={bits:k.lenbits},j=c(0,k.lens,0,19,k.lencode,0,k.work,D),k.lenbits=D.bits,j){x.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;pe=(S=k.lencode[N&(1<<k.lenbits)-1])>>>16&255,Ee=65535&S,!((ue=S>>>24)<=L);){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(Ee<16)N>>>=ue,L-=ue,k.lens[k.have++]=Ee;else{if(Ee===16){for(C=ue+2;L<C;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(N>>>=ue,L-=ue,k.have===0){x.msg="invalid bit length repeat",k.mode=30;break}w=k.lens[k.have-1],Q=3+(3&N),N>>>=2,L-=2}else if(Ee===17){for(C=ue+3;L<C;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}L-=ue,w=0,Q=3+(7&(N>>>=ue)),N>>>=3,L-=3}else{for(C=ue+7;L<C;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}L-=ue,w=0,Q=11+(127&(N>>>=ue)),N>>>=7,L-=7}if(k.have+Q>k.nlen+k.ndist){x.msg="invalid bit length repeat",k.mode=30;break}for(;Q--;)k.lens[k.have++]=w}}if(k.mode===30)break;if(k.lens[256]===0){x.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,D={bits:k.lenbits},j=c(u,k.lens,0,k.nlen,k.lencode,0,k.work,D),k.lenbits=D.bits,j){x.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,D={bits:k.distbits},j=c(d,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,D),k.distbits=D.bits,j){x.msg="invalid distances set",k.mode=30;break}if(k.mode=20,R===6)break e;case 20:k.mode=21;case 21:if(6<=W&&258<=te){x.next_out=ae,x.avail_out=te,x.next_in=O,x.avail_in=W,k.hold=N,k.bits=L,l(x,ie),ae=x.next_out,G=x.output,te=x.avail_out,O=x.next_in,U=x.input,W=x.avail_in,N=k.hold,L=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;pe=(S=k.lencode[N&(1<<k.lenbits)-1])>>>16&255,Ee=65535&S,!((ue=S>>>24)<=L);){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(pe&&(240&pe)==0){for(Se=ue,Ze=pe,qe=Ee;pe=(S=k.lencode[qe+((N&(1<<Se+Ze)-1)>>Se)])>>>16&255,Ee=65535&S,!(Se+(ue=S>>>24)<=L);){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}N>>>=Se,L-=Se,k.back+=Se}if(N>>>=ue,L-=ue,k.back+=ue,k.length=Ee,pe===0){k.mode=26;break}if(32&pe){k.back=-1,k.mode=12;break}if(64&pe){x.msg="invalid literal/length code",k.mode=30;break}k.extra=15&pe,k.mode=22;case 22:if(k.extra){for(C=k.extra;L<C;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}k.length+=N&(1<<k.extra)-1,N>>>=k.extra,L-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;pe=(S=k.distcode[N&(1<<k.distbits)-1])>>>16&255,Ee=65535&S,!((ue=S>>>24)<=L);){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if((240&pe)==0){for(Se=ue,Ze=pe,qe=Ee;pe=(S=k.distcode[qe+((N&(1<<Se+Ze)-1)>>Se)])>>>16&255,Ee=65535&S,!(Se+(ue=S>>>24)<=L);){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}N>>>=Se,L-=Se,k.back+=Se}if(N>>>=ue,L-=ue,k.back+=ue,64&pe){x.msg="invalid distance code",k.mode=30;break}k.offset=Ee,k.extra=15&pe,k.mode=24;case 24:if(k.extra){for(C=k.extra;L<C;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}k.offset+=N&(1<<k.extra)-1,N>>>=k.extra,L-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){x.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(te===0)break e;if(Q=ie-te,k.offset>Q){if((Q=k.offset-Q)>k.whave&&k.sane){x.msg="invalid distance too far back",k.mode=30;break}ke=Q>k.wnext?(Q-=k.wnext,k.wsize-Q):k.wnext-Q,Q>k.length&&(Q=k.length),Fe=k.window}else Fe=G,ke=ae-k.offset,Q=k.length;for(te<Q&&(Q=te),te-=Q,k.length-=Q;G[ae++]=Fe[ke++],--Q;);k.length===0&&(k.mode=21);break;case 26:if(te===0)break e;G[ae++]=k.length,te--,k.mode=21;break;case 27:if(k.wrap){for(;L<32;){if(W===0)break e;W--,N|=U[O++]<<L,L+=8}if(ie-=te,x.total_out+=ie,k.total+=ie,ie&&(x.adler=k.check=k.flags?r(k.check,G,ie,ae-ie):s(k.check,G,ie,ae-ie)),ie=te,(k.flags?N:v(N))!==k.check){x.msg="incorrect data check",k.mode=30;break}L=N=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;L<32;){if(W===0)break e;W--,N+=U[O++]<<L,L+=8}if(N!==(4294967295&k.total)){x.msg="incorrect length check",k.mode=30;break}L=N=0}k.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;case 32:default:return f}return x.next_out=ae,x.avail_out=te,x.next_in=O,x.avail_in=W,k.hold=N,k.bits=L,(k.wsize||ie!==x.avail_out&&k.mode<30&&(k.mode<27||R!==4))&&q(x,x.output,x.next_out,ie-x.avail_out)?(k.mode=31,-4):(se-=x.avail_in,ie-=x.avail_out,x.total_in+=se,x.total_out+=ie,k.total+=ie,k.wrap&&ie&&(x.adler=k.check=k.flags?r(k.check,G,ie,x.next_out-ie):s(k.check,G,ie,x.next_out-ie)),x.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(se==0&&ie===0||R===4)&&j===m&&(j=-5),j)},o.inflateEnd=function(x){if(!x||!x.state)return f;var R=x.state;return R.window&&(R.window=null),x.state=null,m},o.inflateGetHeader=function(x,R){var k;return x&&x.state?(2&(k=x.state).wrap)==0?f:((k.head=R).done=!1,m):f},o.inflateSetDictionary=function(x,R){var k,U=R.length;return x&&x.state?(k=x.state).wrap!==0&&k.mode!==11?f:k.mode===11&&s(1,R,U,0)!==k.check?-3:q(x,R,U,U)?(k.mode=31,-4):(k.havedict=1,m):f},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,o){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(u,d,m,f,p,h,g,v){var y,b,T,_,M,E,P,F,z,q=v.bits,x=0,R=0,k=0,U=0,G=0,O=0,ae=0,W=0,te=0,N=0,L=null,se=0,ie=new n.Buf16(16),Q=new n.Buf16(16),ke=null,Fe=0;for(x=0;x<=15;x++)ie[x]=0;for(R=0;R<f;R++)ie[d[m+R]]++;for(G=q,U=15;1<=U&&ie[U]===0;U--);if(U<G&&(G=U),U===0)return p[h++]=20971520,p[h++]=20971520,v.bits=1,0;for(k=1;k<U&&ie[k]===0;k++);for(G<k&&(G=k),x=W=1;x<=15;x++)if(W<<=1,(W-=ie[x])<0)return-1;if(0<W&&(u===0||U!==1))return-1;for(Q[1]=0,x=1;x<15;x++)Q[x+1]=Q[x]+ie[x];for(R=0;R<f;R++)d[m+R]!==0&&(g[Q[d[m+R]]++]=R);if(E=u===0?(L=ke=g,19):u===1?(L=s,se-=257,ke=r,Fe-=257,256):(L=l,ke=c,-1),x=k,M=h,ae=R=N=0,T=-1,_=(te=1<<(O=G))-1,u===1&&852<te||u===2&&592<te)return 1;for(;;){for(P=x-ae,z=g[R]<E?(F=0,g[R]):g[R]>E?(F=ke[Fe+g[R]],L[se+g[R]]):(F=96,0),y=1<<x-ae,k=b=1<<O;p[M+(N>>ae)+(b-=y)]=P<<24|F<<16|z|0,b!==0;);for(y=1<<x-1;N&y;)y>>=1;if(y!==0?(N&=y-1,N+=y):N=0,R++,--ie[x]==0){if(x===U)break;x=d[m+g[R]]}if(G<x&&(N&_)!==T){for(ae===0&&(ae=G),M+=k,W=1<<(O=x-ae);O+ae<U&&!((W-=ie[O+ae])<=0);)O++,W<<=1;if(te+=1<<O,u===1&&852<te||u===2&&592<te)return 1;p[T=N&_]=G<<24|O<<16|M-h|0}}return N!==0&&(p[M+N]=x-ae<<24|64<<16|0),v.bits=G,0}},{"../utils/common":41}],51:[function(i,a,o){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,o){var n=i("../utils/common"),s=0,r=1;function l(S){for(var B=S.length;0<=--B;)S[B]=0}var c=0,u=29,d=256,m=d+1+u,f=30,p=19,h=2*m+1,g=15,v=16,y=7,b=256,T=16,_=17,M=18,E=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],P=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],q=new Array(2*(m+2));l(q);var x=new Array(2*f);l(x);var R=new Array(512);l(R);var k=new Array(256);l(k);var U=new Array(u);l(U);var G,O,ae,W=new Array(f);function te(S,B,V,K,H){this.static_tree=S,this.extra_bits=B,this.extra_base=V,this.elems=K,this.max_length=H,this.has_stree=S&&S.length}function N(S,B){this.dyn_tree=S,this.max_code=0,this.stat_desc=B}function L(S){return S<256?R[S]:R[256+(S>>>7)]}function se(S,B){S.pending_buf[S.pending++]=255&B,S.pending_buf[S.pending++]=B>>>8&255}function ie(S,B,V){S.bi_valid>v-V?(S.bi_buf|=B<<S.bi_valid&65535,se(S,S.bi_buf),S.bi_buf=B>>v-S.bi_valid,S.bi_valid+=V-v):(S.bi_buf|=B<<S.bi_valid&65535,S.bi_valid+=V)}function Q(S,B,V){ie(S,V[2*B],V[2*B+1])}function ke(S,B){for(var V=0;V|=1&S,S>>>=1,V<<=1,0<--B;);return V>>>1}function Fe(S,B,V){var K,H,Z=new Array(g+1),oe=0;for(K=1;K<=g;K++)Z[K]=oe=oe+V[K-1]<<1;for(H=0;H<=B;H++){var J=S[2*H+1];J!==0&&(S[2*H]=ke(Z[J]++,J))}}function ue(S){var B;for(B=0;B<m;B++)S.dyn_ltree[2*B]=0;for(B=0;B<f;B++)S.dyn_dtree[2*B]=0;for(B=0;B<p;B++)S.bl_tree[2*B]=0;S.dyn_ltree[2*b]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function pe(S){8<S.bi_valid?se(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function Ee(S,B,V,K){var H=2*B,Z=2*V;return S[H]<S[Z]||S[H]===S[Z]&&K[B]<=K[V]}function Se(S,B,V){for(var K=S.heap[V],H=V<<1;H<=S.heap_len&&(H<S.heap_len&&Ee(B,S.heap[H+1],S.heap[H],S.depth)&&H++,!Ee(B,K,S.heap[H],S.depth));)S.heap[V]=S.heap[H],V=H,H<<=1;S.heap[V]=K}function Ze(S,B,V){var K,H,Z,oe,J=0;if(S.last_lit!==0)for(;K=S.pending_buf[S.d_buf+2*J]<<8|S.pending_buf[S.d_buf+2*J+1],H=S.pending_buf[S.l_buf+J],J++,K===0?Q(S,H,B):(Q(S,(Z=k[H])+d+1,B),(oe=E[Z])!==0&&ie(S,H-=U[Z],oe),Q(S,Z=L(--K),V),(oe=P[Z])!==0&&ie(S,K-=W[Z],oe)),J<S.last_lit;);Q(S,b,B)}function qe(S,B){var V,K,H,Z=B.dyn_tree,oe=B.stat_desc.static_tree,J=B.stat_desc.has_stree,ce=B.stat_desc.elems,be=-1;for(S.heap_len=0,S.heap_max=h,V=0;V<ce;V++)Z[2*V]!==0?(S.heap[++S.heap_len]=be=V,S.depth[V]=0):Z[2*V+1]=0;for(;S.heap_len<2;)Z[2*(H=S.heap[++S.heap_len]=be<2?++be:0)]=1,S.depth[H]=0,S.opt_len--,J&&(S.static_len-=oe[2*H+1]);for(B.max_code=be,V=S.heap_len>>1;1<=V;V--)Se(S,Z,V);for(H=ce;V=S.heap[1],S.heap[1]=S.heap[S.heap_len--],Se(S,Z,1),K=S.heap[1],S.heap[--S.heap_max]=V,S.heap[--S.heap_max]=K,Z[2*H]=Z[2*V]+Z[2*K],S.depth[H]=(S.depth[V]>=S.depth[K]?S.depth[V]:S.depth[K])+1,Z[2*V+1]=Z[2*K+1]=H,S.heap[1]=H++,Se(S,Z,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(he,Qe){var na,gt,sa,Ce,wo,jn,xt=Qe.dyn_tree,zl=Qe.max_code,pv=Qe.stat_desc.static_tree,gv=Qe.stat_desc.has_stree,vv=Qe.stat_desc.extra_bits,Ol=Qe.stat_desc.extra_base,ra=Qe.stat_desc.max_length,ko=0;for(Ce=0;Ce<=g;Ce++)he.bl_count[Ce]=0;for(xt[2*he.heap[he.heap_max]+1]=0,na=he.heap_max+1;na<h;na++)ra<(Ce=xt[2*xt[2*(gt=he.heap[na])+1]+1]+1)&&(Ce=ra,ko++),xt[2*gt+1]=Ce,zl<gt||(he.bl_count[Ce]++,wo=0,Ol<=gt&&(wo=vv[gt-Ol]),jn=xt[2*gt],he.opt_len+=jn*(Ce+wo),gv&&(he.static_len+=jn*(pv[2*gt+1]+wo)));if(ko!==0){do{for(Ce=ra-1;he.bl_count[Ce]===0;)Ce--;he.bl_count[Ce]--,he.bl_count[Ce+1]+=2,he.bl_count[ra]--,ko-=2}while(0<ko);for(Ce=ra;Ce!==0;Ce--)for(gt=he.bl_count[Ce];gt!==0;)zl<(sa=he.heap[--na])||(xt[2*sa+1]!==Ce&&(he.opt_len+=(Ce-xt[2*sa+1])*xt[2*sa],xt[2*sa+1]=Ce),gt--)}})(S,B),Fe(Z,be,S.bl_count)}function w(S,B,V){var K,H,Z=-1,oe=B[1],J=0,ce=7,be=4;for(oe===0&&(ce=138,be=3),B[2*(V+1)+1]=65535,K=0;K<=V;K++)H=oe,oe=B[2*(K+1)+1],++J<ce&&H===oe||(J<be?S.bl_tree[2*H]+=J:H!==0?(H!==Z&&S.bl_tree[2*H]++,S.bl_tree[2*T]++):J<=10?S.bl_tree[2*_]++:S.bl_tree[2*M]++,Z=H,be=(J=0)===oe?(ce=138,3):H===oe?(ce=6,3):(ce=7,4))}function j(S,B,V){var K,H,Z=-1,oe=B[1],J=0,ce=7,be=4;for(oe===0&&(ce=138,be=3),K=0;K<=V;K++)if(H=oe,oe=B[2*(K+1)+1],!(++J<ce&&H===oe)){if(J<be)for(;Q(S,H,S.bl_tree),--J!=0;);else H!==0?(H!==Z&&(Q(S,H,S.bl_tree),J--),Q(S,T,S.bl_tree),ie(S,J-3,2)):J<=10?(Q(S,_,S.bl_tree),ie(S,J-3,3)):(Q(S,M,S.bl_tree),ie(S,J-11,7));Z=H,be=(J=0)===oe?(ce=138,3):H===oe?(ce=6,3):(ce=7,4)}}l(W);var D=!1;function C(S,B,V,K){ie(S,(c<<1)+(K?1:0),3),(function(H,Z,oe,J){pe(H),se(H,oe),se(H,~oe),n.arraySet(H.pending_buf,H.window,Z,oe,H.pending),H.pending+=oe})(S,B,V)}o._tr_init=function(S){D||((function(){var B,V,K,H,Z,oe=new Array(g+1);for(H=K=0;H<u-1;H++)for(U[H]=K,B=0;B<1<<E[H];B++)k[K++]=H;for(k[K-1]=H,H=Z=0;H<16;H++)for(W[H]=Z,B=0;B<1<<P[H];B++)R[Z++]=H;for(Z>>=7;H<f;H++)for(W[H]=Z<<7,B=0;B<1<<P[H]-7;B++)R[256+Z++]=H;for(V=0;V<=g;V++)oe[V]=0;for(B=0;B<=143;)q[2*B+1]=8,B++,oe[8]++;for(;B<=255;)q[2*B+1]=9,B++,oe[9]++;for(;B<=279;)q[2*B+1]=7,B++,oe[7]++;for(;B<=287;)q[2*B+1]=8,B++,oe[8]++;for(Fe(q,m+1,oe),B=0;B<f;B++)x[2*B+1]=5,x[2*B]=ke(B,5);G=new te(q,E,d+1,m,g),O=new te(x,P,0,f,g),ae=new te(new Array(0),F,0,p,y)})(),D=!0),S.l_desc=new N(S.dyn_ltree,G),S.d_desc=new N(S.dyn_dtree,O),S.bl_desc=new N(S.bl_tree,ae),S.bi_buf=0,S.bi_valid=0,ue(S)},o._tr_stored_block=C,o._tr_flush_block=function(S,B,V,K){var H,Z,oe=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(J){var ce,be=4093624447;for(ce=0;ce<=31;ce++,be>>>=1)if(1&be&&J.dyn_ltree[2*ce]!==0)return s;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return r;for(ce=32;ce<d;ce++)if(J.dyn_ltree[2*ce]!==0)return r;return s})(S)),qe(S,S.l_desc),qe(S,S.d_desc),oe=(function(J){var ce;for(w(J,J.dyn_ltree,J.l_desc.max_code),w(J,J.dyn_dtree,J.d_desc.max_code),qe(J,J.bl_desc),ce=p-1;3<=ce&&J.bl_tree[2*z[ce]+1]===0;ce--);return J.opt_len+=3*(ce+1)+5+5+4,ce})(S),H=S.opt_len+3+7>>>3,(Z=S.static_len+3+7>>>3)<=H&&(H=Z)):H=Z=V+5,V+4<=H&&B!==-1?C(S,B,V,K):S.strategy===4||Z===H?(ie(S,2+(K?1:0),3),Ze(S,q,x)):(ie(S,4+(K?1:0),3),(function(J,ce,be,he){var Qe;for(ie(J,ce-257,5),ie(J,be-1,5),ie(J,he-4,4),Qe=0;Qe<he;Qe++)ie(J,J.bl_tree[2*z[Qe]+1],3);j(J,J.dyn_ltree,ce-1),j(J,J.dyn_dtree,be-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,oe+1),Ze(S,S.dyn_ltree,S.dyn_dtree)),ue(S),K&&pe(S)},o._tr_tally=function(S,B,V){return S.pending_buf[S.d_buf+2*S.last_lit]=B>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&B,S.pending_buf[S.l_buf+S.last_lit]=255&V,S.last_lit++,B===0?S.dyn_ltree[2*V]++:(S.matches++,B--,S.dyn_ltree[2*(k[V]+d+1)]++,S.dyn_dtree[2*L(B)]++),S.last_lit===S.lit_bufsize-1},o._tr_align=function(S){ie(S,2,3),Q(S,b,q),(function(B){B.bi_valid===16?(se(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(i,a,o){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,o){(function(n){(function(s,r){if(!s.setImmediate){var l,c,u,d,m=1,f={},p=!1,h=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){y(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,_=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=_,T}})()?(d="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",b,!1):s.attachEvent("onmessage",b),function(T){s.postMessage(d+T,"*")}):s.MessageChannel?((u=new MessageChannel).port1.onmessage=function(T){y(T.data)},function(T){u.port2.postMessage(T)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(T){var _=h.createElement("script");_.onreadystatechange=function(){y(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(y,0,T)},g.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),M=0;M<_.length;M++)_[M]=arguments[M+1];var E={callback:T,args:_};return f[m]=E,l(m),m++},g.clearImmediate=v}function v(T){delete f[T]}function y(T){if(p)setTimeout(y,0,T);else{var _=f[T];if(_){p=!0;try{(function(M){var E=M.callback,P=M.args;switch(P.length){case 0:E();break;case 1:E(P[0]);break;case 2:E(P[0],P[1]);break;case 3:E(P[0],P[1],P[2]);break;default:E.apply(r,P)}})(_)}finally{v(T),p=!1}}}}function b(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(d)===0&&y(+T.data.slice(d.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(rn)),rn.exports}var Bm=Im();const Rm=Am(Bm);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function $(t){if(!t)throw new Error("Assertion failed.")}const zm=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Je=t=>t&&t[t.length-1],Et=t=>t>=0&&t<2**32,Y=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},yt=t=>{const e=Y(t);return(e&1)===0?-(e>>1):e+1>>1},Ve=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),ct=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),ft=new TextEncoder,io={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ao={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},oo={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Om=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,no=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Gs{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(o=>{let n=!1;e=()=>{n||(o(),this.pending--,n=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const Ks=(t,e,i)=>{let a=0,o=t.length-1,n=-1;for(;a<=o;){const s=a+(o-a+1)/2|0;i(t[s])<=e?(n=s,a=s+1):o=s-1}return n},Xs=()=>{let t,e;return{promise:new Promise((a,o)=>{t=a,e=o}),resolve:t,reject:e}},Wt=t=>{throw new Error(`Unexpected value: ${t}`)},Hm=(t,e,i)=>{const a=t.getUint8(e),o=t.getUint8(e+1),n=t.getUint8(e+2);return a<<16|o<<8|n},ln=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},Lm=(t,e,i,a)=>{i=Ae(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),ln(t,e,i,a)},Ae=(t,e,i)=>Math.max(e,Math.min(i,t)),Nm=(t,e,i)=>t+(e-t)*i,Um="und",Zs=(t,e)=>Math.round(t/e)*e,Qs=(t,e)=>Math.round(t*e)/e,Ys=(t,e)=>Math.floor(t*e)/e,qm=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},Dm=/^[a-z]{3}$/,$m=t=>Dm.test(t),Pt=1e6*(1+Number.EPSILON),Wm=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,o=1,n=1,s=0,r=t;for(;;){const l=Math.floor(r),c=l*n+a,u=l*s+o;if(u>e)return{num:i*n,den:s};if(a=n,o=s,n=c,s=u,r=1/(r-l),!isFinite(r))break}return{num:i*n,den:s}};class Js{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let cn=null;const jm=()=>cn!==null?cn:cn=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let fn=null;const er=()=>fn!==null?fn:fn=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let un=null;const Vm=()=>un!==null?un:un=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let dn=null;const Gm=()=>{if(dn!==null)return dn;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?dn=Number(t[1]):null},tr=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Km=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Xm=(t,e)=>{let i=-1,a=1/0;for(let o=0;o<t.length;o++){const n=e(t[o]);n<a&&(a=n,i=o)}return i},ir=t=>{$(Number.isInteger(t.num)),$(Number.isInteger(t.den)),$(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const o=e%i;e=i,i=o}const a=e||1;return{num:t.num/a,den:t.den/a}},hn=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Zm=t=>new Promise(e=>setTimeout(e,t)),ar=t=>Array.isArray(t)?t:[t];class mn{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const o={fn:i,once:a?.once??!1};return this._listeners.get(e).add(o),()=>{this._listeners.get(e)?.delete(o)}}_emit(...e){const[i,a]=e,o=this._listeners.get(i);if(o)for(const n of o){try{n.fn(a)}catch(s){console.error(s)}n.once&&o.delete(n)}}}const Qm=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var ut;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(ut||(ut={}));class Te{constructor(){}static get level(){return Te._level}static set level(e){if(e!==ut.Silent&&e!==ut.Errors&&e!==ut.Warnings&&e!==ut.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");Te._level=e}static get _emitter(){return Te._emitterInstance??=new mn}static on(e,i,a){return Te._emitter.on(e,i,a)}static _error(...e){Te._emitter._emit("error",e),Te._level>=ut.Errors&&console.error(...e)}static _warn(...e){Te._emitter._emit("warn",e),Te._level>=ut.Warnings&&console.warn(...e)}static _info(...e){Te._emitter._emit("info",e),Te._level>=ut.Info&&console.info(...e)}}Te._level=ut.Info,Te._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class or{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Ym{constructor(e,i,a,o){if(this.data=e,this.mimeType=i,this.name=a,this.description=o,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(o!==void 0&&typeof o!="string")throw new TypeError("description, when provided, must be a string.")}}const Jm=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof or)&&!(e instanceof Ym)&&!Qm(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},ep=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Me{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),o=(i&1<<a)>>a;return this.pos++,o}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let o=this.pos;o<a;o++){const n=Math.floor(o/8);let s=this.bytes[n];const r=7-(o&7);s&=~(1<<r),s|=(i&1<<a-o-1)>>a-o-1<<r,this.bytes[n]=s}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Me(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const so=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],pn=[-1,1,2,3,4,5,6,8],tp=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Me(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let o=null;a===15?o=e.readBits(24):a<so.length&&(o=so[a]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=pn[n]),{objectType:i,frequencyIndex:a,sampleRate:o,channelConfiguration:n,numberOfChannels:s}},nr=t=>{let e=so.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=pn.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let o=13;t.objectType>=32&&(o+=6),e===15&&(o+=24);const n=Math.ceil(o/8),s=new Uint8Array(n),r=new Me(s);return t.objectType<32?r.writeBits(5,t.objectType):(r.writeBits(5,31),r.writeBits(6,t.objectType-32)),r.writeBits(4,e),e===15&&r.writeBits(24,i),r.writeBits(4,a),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const wt=["avc","hevc","vp9","av1","vp8","prores"],et=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],gn=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],jt=[...gn,...et],Wi=["webvtt"],ro=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],sr=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],rr=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],lr=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],ji=["ap4x","ap4h","apch","apcn","apcs","apco"],vn=["dtsc","dtsh","dtsl","dtse"],ip=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],ap=(t,e,i,a,o)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),r=ro.find(m=>s<=m.maxMacroblocks&&a<=m.maxBitrate)??Je(ro),l=r?r.level:0,c="64".padStart(2,"0"),u="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${u}${d}`}else if(t==="hevc"){const l=e*i,c=sr.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??Je(sr);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(rr.find(c=>s<=c.maxPictureSize&&a<=c.maxBitrate)??Je(rr)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,r=lr.find(u=>s<=u.maxPictureSize&&a<=u.maxBitrate)??Je(lr);return`av01.0.${r.level.toString().padStart(2,"0")}${r.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),r=ip.filter(u=>u.alpha===o);let l=r[0].fourCc,c=1/0;for(const{fourCc:u,bitrate:d}of r){const m=Math.abs(d*s-a);m<c&&(c=m,l=u)}return l}else Wt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},op=t=>{const e=t.split("."),o=(1<<7)+1,n=Number(e[1]),s=e[2],r=Number(s.slice(0,-1)),l=(n<<5)+r,c=s.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,m=0,f=e[4]?Number(e[4]):0,p=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,v=(c<<7)+(d<<6)+(m<<5)+(f<<4)+(p<<3)+(h<<2)+g;return[o,l,v,0]},np=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(et.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},cr=/^pcm-([usf])(\d+)(be)?$/,Vt=t=>{if($(et.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=cr.exec(t);$(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,o=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:o,silentValue:n}},lo=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":ji.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":vn.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":cr.test(t)?t:t==="webvtt"?"webvtt":null,sp=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},rp=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},lp=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...ji],cp=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,fp=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,up=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,dp=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,fr=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!lp.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!no(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(io);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const o=Object.keys(ao);if(i.transfer!=null&&!o.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${o.join(", ")}.`);const n=Object.keys(oo);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!cp.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!fp.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!up.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!dp.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(ji.some(i=>t.decoderConfig.codec.startsWith(i))&&!ji.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${ji.join(", ")}.`);if(e!==null&&lo(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},hp=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],ur=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!hp.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!no(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!vn.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${vn.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!et.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${et.join(", ")}).`);if(e!==null&&lo(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},mp=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const pp=[48e3,44100,32e3],gp=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var kt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(kt||(kt={}));var Ge;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Ge||(Ge={}));const Vi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let o=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?o=4:t[e+1]===0&&t[e+2]===1&&(o=3),o===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+o,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},dr=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let o;e===1?o=a.getUint8(i):e===2?o=a.getUint16(i,!1):e===3?o=Hm(a,i):($(e===4),o=a.getUint32(i,!1)),i+=e,yield{offset:i,length:o},i+=o}},vp=(t,e)=>{if(e.description){const o=(Ve(e.description)[4]&3)+1;return dr(t,o)}else return Vi(t)},hr=t=>t&31,co=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},bp=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),a=new Uint8Array(i);let o=0;for(const n of t){const s=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:s.setUint8(o,n.byteLength);break;case 2:s.setUint16(o,n.byteLength,!1);break;case 3:ln(s,o,n.byteLength,!1);break;case 4:s.setUint32(o,n.byteLength,!1);break}o+=e,a.set(n,o),o+=n.byteLength}return a},yp=t=>{try{const e=[],i=[],a=[];for(const r of Vi(t)){const l=t.subarray(r.offset,r.offset+r.length),c=hr(l[0]);c===kt.SPS?e.push(l):c===kt.PPS?i.push(l):c===kt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const o=e[0],n=kp(o);$(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?a:null}}catch(e){return Te._error("Error building AVC Decoder Configuration Record:",e),null}},wp=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){$(t.chromaFormat!==null),$(t.bitDepthLumaMinus8!==null),$(t.bitDepthChromaMinus8!==null),$(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let o=0;o<a;o++)e.push(i[o])}}return new Uint8Array(e)},mr={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},kp=t=>{try{const e=new Me(co(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),o=e.readAlignedByte(),n=e.readAlignedByte();Y(e);let s=1,r=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(s=Y(e),s===3&&(c=e.readBits(1)),r=Y(e),l=Y(e),e.skipBits(1),e.readBits(1))){for(let x=0;x<(s!==3?8:12);x++)if(e.readBits(1)){const k=x<6?16:64;let U=8,G=8;for(let O=0;O<k;O++){if(G!==0){const ae=yt(e);G=(U+ae+256)%256}U=G===0?U:G}}}Y(e);const u=Y(e);if(u===0)Y(e);else if(u===1){e.skipBits(1),yt(e),yt(e);const q=Y(e);for(let x=0;x<q;x++)yt(e)}Y(e),e.skipBits(1);const d=Y(e),m=Y(e),f=16*(d+1),p=16*(m+1);let h=f,g=p;const v=e.readBits(1);if(v||e.skipBits(1),e.skipBits(1),e.readBits(1)){const q=Y(e),x=Y(e),R=Y(e),k=Y(e);let U,G;if((c===0?s:0)===0)U=1,G=2-v;else{const ae=s===3?1:2,W=s===1?2:1;U=ae,G=W*(2-v)}h-=U*(q+x),g-=G*(R+k)}let b=2,T=2,_=2,M=0,E={num:1,den:1},P=null,F=null;if(e.readBits(1)){if(e.readBits(1)){const W=e.readBits(8);if(W===255)E={num:e.readBits(16),den:e.readBits(16)};else{const te=mr[W];te&&(E=te)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),M=e.readBits(1),e.readBits(1)&&(b=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(Y(e),Y(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const G=e.readBits(1);G&&pr(e);const O=e.readBits(1);O&&pr(e),(G||O)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),Y(e),Y(e),Y(e),Y(e),P=Y(e),F=Y(e))}if(P===null){$(F===null);const q=o&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&q)P=0,F=0;else{const x=d+1,R=m+1,k=(2-v)*R,U=ro.find(O=>O.level>=n)??Je(ro),G=Math.min(Math.floor(U.maxDpbMbs/(x*k)),16);P=G,F=G}}return $(F!==null),{profileIdc:a,constraintFlags:o,levelIdc:n,frameMbsOnlyFlag:v,chromaFormatIdc:s,bitDepthLumaMinus8:r,bitDepthChromaMinus8:l,codedWidth:f,codedHeight:p,displayWidth:h,displayHeight:g,pixelAspectRatio:E,colourPrimaries:b,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:M,numReorderFrames:P,maxDecFrameBuffering:F}}catch(e){return Te._error("Error parsing AVC SPS:",e),null}},pr=t=>{const e=Y(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)Y(t),Y(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Tp=(t,e)=>{if(e.description){const o=(Ve(e.description)[21]&3)+1;return dr(t,o)}else return Vi(t)},bn=t=>t>>1&63,_p=t=>{try{const e=new Me(co(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:o,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:l,general_level_idc:c}=xp(e,i);Y(e);const u=Y(e);let d=0;u===3&&(d=e.readBits(1));const m=Y(e),f=Y(e);let p=m,h=f;if(e.readBits(1)){const x=Y(e),R=Y(e),k=Y(e),U=Y(e);let G=1,O=1;const ae=d===0?u:0;ae===1?(G=2,O=2):ae===2&&(G=2,O=1),p-=(x+R)*G,h-=(k+U)*O}const g=Y(e),v=Y(e);Y(e);const b=e.readBits(1)?0:i;let T=0;for(let x=b;x<=i;x++)Y(e),T=Y(e),Y(e);Y(e),Y(e),Y(e),Y(e),Y(e),Y(e),e.readBits(1)&&e.readBits(1)&&Cp(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),Y(e),Y(e),e.skipBits(1));const _=Y(e);if(Mp(e,_),e.readBits(1)){const x=Y(e);for(let R=0;R<x;R++)Y(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let M=2,E=2,P=2,F=0,z=0,q={num:1,den:1};if(e.readBits(1)){const x=Pp(e,i);q=x.pixelAspectRatio,M=x.colourPrimaries,E=x.transferCharacteristics,P=x.matrixCoefficients,F=x.fullRangeFlag,z=x.minSpatialSegmentationIdc}return{displayWidth:p,displayHeight:h,pixelAspectRatio:q,colourPrimaries:M,transferCharacteristics:E,matrixCoefficients:P,fullRangeFlag:F,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:o,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:r,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:u,bitDepthLumaMinus8:g,bitDepthChromaMinus8:v,minSpatialSegmentationIdc:z}}catch(e){return Te._error("Error parsing HEVC SPS:",e),null}},Sp=t=>{try{const e=[],i=[],a=[],o=[];for(const c of Vi(t)){const u=t.subarray(c.offset,c.offset+c.length),d=bn(u[0]);d===Ge.VPS_NUT?e.push(u):d===Ge.SPS_NUT?i.push(u):d===Ge.PPS_NUT?a.push(u):(d===Ge.PREFIX_SEI_NUT||d===Ge.SUFFIX_SEI_NUT)&&o.push(u)}if(i.length===0||a.length===0)return null;const n=_p(i[0]);if(!n)return null;let s=0;if(a.length>0){const c=a[0],u=new Me(co(c));u.skipBits(16),Y(u),Y(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),Y(u),Y(u),yt(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&Y(u),yt(u),yt(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);const d=u.readBits(1),m=u.readBits(1);!d&&!m?s=0:d&&!m?s=2:!d&&m?s=3:s=0}const r=[...e.length?[{arrayCompleteness:1,nalUnitType:Ge.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Ge.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Ge.PPS_NUT,nalUnits:a}]:[],...o.length?[{arrayCompleteness:1,nalUnitType:bn(o[0][0]),nalUnits:o}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:r}}catch(e){return Te._error("Error building HEVC Decoder Configuration Record:",e),null}},xp=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),o=t.readBits(5);let n=0;for(let u=0;u<32;u++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let u=0;u<6;u++)s[u]=t.readBits(8);const r=t.readBits(8),l=[],c=[];for(let u=0;u<e;u++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let u=e;u<8;u++)t.skipBits(2);for(let u=0;u<e;u++)l[u]&&t.skipBits(88),c[u]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:o,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:r}},Cp=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))Y(t);else{const o=Math.min(64,1<<4+(e<<1));e>1&&yt(t);for(let n=0;n<o;n++)yt(t)}},Mp=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=Ep(t,a,e,i)},Ep=(t,e,i,a)=>{let o=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const l=Y(t);s=e-(l+1)}else s=e-1;t.readBits(1),Y(t);const r=a[s]??0;for(let l=0;l<=r;l++)t.readBits(1)||t.readBits(1);o=a[s]}else{const r=Y(t),l=Y(t);for(let c=0;c<r;c++)Y(t),t.readBits(1);for(let c=0;c<l;c++)Y(t),t.readBits(1);o=r+l}return o},Pp=(t,e)=>{let i=2,a=2,o=2,n=0,s=0,r={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)r={num:t.readBits(16),den:t.readBits(16)};else{const c=mr[l];c&&(r=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),o=t.readBits(8))),t.readBits(1)&&(Y(t),Y(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(Y(t),Y(t),Y(t),Y(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&Y(t),t.readBits(1)&&Fp(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=Y(t),Y(t),Y(t),Y(t),Y(t)),{pixelAspectRatio:r,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:o,fullRangeFlag:n,minSpatialSegmentationIdc:s}},Fp=(t,e,i)=>{let a=!1,o=!1,n=!1;a=t.readBits(1)===1,o=t.readBits(1)===1,(a||o)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const r=t.readBits(1)===1;let l=!0;r||(l=t.readBits(1)===1);let c=!1;l?Y(t):c=t.readBits(1)===1;let u=1;c||(u=Y(t)+1),a&&gr(t,u,n),o&&gr(t,u,n)}},gr=(t,e,i)=>{for(let a=0;a<e;a++)Y(t),Y(t),i&&(Y(t),Y(t)),t.readBits(1)},Ap=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let o=0;o<a.length;o++)e.push(a[o])}}return new Uint8Array(e)};var vr;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(vr||(vr={}));const Ip=function*(t){const e=new Me(t),i=()=>{let a=0;for(let o=0;o<8;o++){const n=e.readAlignedByte();if(a|=(n&127)<<o*7,!(n&128))break;if(o===7&&n&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),o=e.readBits(1),n=e.readBits(1);e.skipBits(1),o&&e.skipBits(8);let s;if(n){const r=i();if(r===null)return;s=r}else s=Math.floor(e.getBitsLeft()/8);$(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},Bp=t=>{const e=ct(t),i=e.getUint8(9),a=e.getUint16(10,!0),o=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let r=null;return s&&(r=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:o,outputGain:n,channelMappingFamily:s,channelMappingTable:r}},Rp=(t,e,i)=>{switch(t){case"avc":{for(const a of vp(i,e)){const o=i[a.offset],n=hr(o);if(n>=kt.NON_IDR_SLICE&&n<=kt.SLICE_DPC)return"delta";if(n===kt.IDR)return"key";if(n===kt.SEI&&(!Vm()||Gm()>=144)){const s=i.subarray(a.offset,a.offset+a.length),r=co(s);let l=1;do{let c=0;for(;;){const m=r[l++];if(m===void 0||(c+=m,m<255))break}let u=0;for(;;){const m=r[l++];if(m===void 0||(u+=m,m<255))break}if(c===6){const m=new Me(r);m.pos=8*l;const f=Y(m),p=m.readBits(1);if(f===0&&p===1)return"key"}l+=u}while(l<r.length-1)}}return"delta"}case"hevc":{for(const a of Tp(i,e)){const o=bn(i[a.offset]);if(o<Ge.BLA_W_LP)return"delta";if(o<=Ge.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Me(i);if(a.readBits(2)!==2)return null;const o=a.readBits(1);return(a.readBits(1)<<1)+o===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:o,data:n}of Ip(i))if(o===1){const s=new Me(n);s.skipBits(4),a=!!s.readBits(1)}else if(o===3||o===6||o===7){if(a)return"key";const s=new Me(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Wt(t),$(!1)}};var br;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(br||(br={}));const zp=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Me(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),o=e.readBits(5);if(o>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const r=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:o,bsmod:n,acmod:s,lfeon:r,bitRateCode:l}},Op=[1,2,3,6],Hp=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Me(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),o=e.readBits(2);let n=0,s;o===3?(n=e.readBits(2),s=3):s=e.readBits(2);const r=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const u=Op[s];let d;return o<3?d=pp[o]/1e3:d=gp[n]/1e3,{dataRate:Math.round((a+1)*d/(u*16)),substreams:[{fscod:o,fscod2:n,bsid:c,bsmod:0,acmod:r,lfeon:l,numDepSub:0,chanLoc:0}]}},Lp=1683496997,Np=18,Up=10,yr=32,qp=20,Dp=8,$p=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Wp=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],jp=[16,16,20,20,0,24,24,0],wr=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Vp=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Gp=8,Kp=[32e3,44100,48e3,0],Xp=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Zp=[512,1024,2048,4096],Qp=t=>{const e=Yp(t),i=ct(t);let a=e?Math.ceil(e.frameSize/4)*4:0,o=null;for(;a+4<=t.length&&i.getUint32(a)===Lp;){const s=Jp(t.subarray(a));if(!s)break;o??=s,a+=s.frameSize}if(e)return{frameSize:o?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:o!==null};if(!o?.asset)return null;const{asset:n}=o;return{frameSize:a,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Yp=t=>{if(t.length<Np||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Me(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==yr-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%Dp!==0)return null;const o=e.readBits(14)+1;if(o<96)return null;const n=e.readBits(6);if(n>=wr.length)return null;const s=$p[e.readBits(4)];if(s===0)return null;const r=Wp[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=jp[e.readBits(3)];if(c===0)return null;const u=l!==0;return{frameSize:o,sampleRate:s,numberOfChannels:wr[n]+(u?1:0),sampleCount:a*yr,channelLayout:Vp[n]|(u?Gp:0),amode:n,lfePresent:u,bitRate:r,pcmResolution:c}},Jp=t=>{if(t.length<Up||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Me(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),o=8+4*a,n=16+4*a;e.skipBits(o);const s=e.readBits(n)+1,r={frameSize:s,asset:null};if(!e.readBits(1))return r;const l=Kp[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const u=e.readBits(3)+1,d=e.readBits(3)+1,m=[];for(let v=0;v<u;v++)m.push(e.readBits(i+1));for(const v of m)e.skipBits(8*qm(v));if(e.readBits(1)){e.skipBits(2);const v=e.readBits(2)+1<<2,y=e.readBits(2)+1;e.skipBits(y*v)}for(let v=0;v<d;v++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,p=Xp[e.readBits(4)],h=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const v=e.readBits(2)+1<<2;g=e.readBits(v)}return l===0||e.getBitsLeft()<0?r:{frameSize:s,asset:{sampleRate:p,numberOfChannels:h,sampleCount:Math.round(c*p/l),channelLayout:g,pcmResolution:f}}},e2=t=>{const e=new Uint8Array(qp),i=ct(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,o=new Me(e);return o.seekToByte(13),o.writeBits(2,Math.max(Zp.indexOf(t.sampleCount),0)),o.writeBits(5,a),o.writeBits(1,t.core?.lfePresent?1:0),o.writeBits(6,t.core?.amode??0),o.writeBits(14,t.core?t.core.frameSize-1:0),o.writeBits(1,0),o.writeBits(3,0),o.writeBits(16,t.channelLayout),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const kr=new Uint8Array(0);class dt{constructor(e,i,a,o,n=-1,s,r){if(this.data=e,this.type=i,this.timestamp=a,this.duration=o,this.sequenceNumber=n,e===kr&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(o)||o<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(r!==void 0&&(typeof r!="object"||!r))throw new TypeError("sideData, when provided, must be an object.");if(r?.alpha!==void 0&&!(r.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(r?.alphaByteLength!==void 0&&(!Number.isInteger(r.alphaByteLength)||r.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=r??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===kr}get microsecondTimestamp(){return Math.trunc(Pt*this.timestamp)}get microsecondDuration(){return Math.trunc(Pt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new dt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new dt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const t2=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const yn=8,Tr=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const i2=7,a2=9,_r=t=>{const e=t.filePos,i=M2(t,9),a=new Me(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const s=a.readBits(1),r=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const u=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let m=null;return s===1?t.filePos-=2:m=a.readBits(16),{objectType:r,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:u,numberOfAacFrames:d,crcCheck:m,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var o2=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},n2=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});Km();let Sr=-1/0,xr=-1/0,Gi=null;typeof FinalizationRegistry<"u"&&(Gi=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Sr>=1e3&&(Te._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Sr=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-xr>=1e3&&(Te._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),xr=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Gt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const wn=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],s2=new Set(wn);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Pt*this.timestamp)}get microsecondDuration(){return Math.trunc(Pt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!s2.has(i.format))throw new TypeError("init.format must be one of: "+wn.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&hn(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??c2(i.format,i.codedWidth,i.codedHeight);let o=i.colorSpace??null;o===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?o={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:o={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?Ve(e):Ve(e).slice(),this._layout=a,this.colorSpace=new kn(o)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&hn(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new kn(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&hn(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Pt),duration:Math.trunc((i.duration??0)*Pt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,o=0;if("naturalWidth"in e?(a=e.naturalWidth,o=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,o=e.videoHeight):"width"in e&&(a=Number(e.width),o=Number(e.height)),!a||!o)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:a,height:o},s=new OffscreenCanvas(n.width,n.height),r=s.getContext("2d",{alpha:er(),willReadFrequently:!0});if(!r)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");r.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new kn({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Gt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!wn.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=ir({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Gi?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return $(this._data!==null),this._data instanceof Gt?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Xi(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?($(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Gi?.unregister(this),this._data instanceof Gt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Xi(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Pr(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Xi(this._data)?this._data.allocationSize(e):Fr(this,e).allocationSize}async copyTo(e,i={}){if(!no(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Pr(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if($(this._data!==null),Xi(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Gt){const c={stack:[],error:void 0,hasError:!1};try{const u=o2(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(u instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(u.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${u.format}' instead.`);return await u.copyTo(e,i)}catch(u){c.error=u,c.hasError=!0}finally{n2(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),u=await c.copyTo(e,i);return c.close(),u}const a=Fr(this,i);$(this.format);const o=Ve(e);if(o.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${o.byteLength}`);const n=fo(this.format);let s;if(this._data instanceof Gt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(u=>!(u.data instanceof Uint8Array)||!Number.isInteger(u.stride)||u.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=c}else if(this._data instanceof Uint8Array)$(this._layout),$(this._layout.length===n.length),s=this._layout.map((c,u)=>{const d=Math.ceil(this.codedHeight/n[u].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const u=this._data.getContext("2d");$(u);const d=u.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:Ve(d.data),stride:4*this.codedWidth}]}const r=[],l=n.length;for(let c=0;c<l;c++){const u=a.computedLayouts[c],d=s[c].stride,m=s[c].data;let f=u.sourceTop*d;f+=u.sourceLeftBytes;let p=u.destinationOffset;const h=u.sourceWidthBytes,g={offset:p,stride:u.destinationStride};for(let v=0;v<u.sourceHeight;v++){if(f+h>m.byteLength)throw new Error("Source buffer OOB read.");if(p+h>o.byteLength)throw new Error("Destination buffer OOB write.");const y=m.subarray(f,f+h);o.set(y,p),f+=d,p+=u.destinationStride}r.push(g)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),u=this.format.includes("X")&&i.format.includes("A");if(c||u)for(let d=0;d<a.allocationSize;d+=4){if(c){const m=o[d],f=o[d+2];o[d]=f,o[d+2]=m}u&&(o[d+3]=255)}}return r}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if($(this._data!==null),this._data instanceof Gt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,r)=>s+r.data.byteLength,0),a=new Uint8Array(i);let o=0;const n=[];for(const s of e)a.set(s.data,o),n.push(o),o+=s.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((s,r)=>({offset:n[r],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Xi(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?($(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,o,n,s,r,l,c){let u=0,d=0,m=this.displayWidth,f=this.displayHeight,p=0,h=0,g=this.displayWidth,v=this.displayHeight;if(s!==void 0?(u=i,d=a,m=o,f=n,p=s,h=r,l!==void 0?(g=l,v=c):(g=m,v=f)):(p=i,h=a,o!==void 0&&(g=o,v=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(u))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(m)||m<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(p))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:u,sy:d,sWidth:m,sHeight:f}=this._rotateSourceRegion(u,d,m,f,this.rotation));const y=this.toCanvasImageSource();e.save();const b=p+g/2,T=h+v/2;e.translate(b,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:g/v;e.scale(1/_,_),e.drawImage(y,u,d,m,f,-g/2,-v/2,g,v),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Tn(i.crop,"options.");const a=e.canvas.width,o=e.canvas.height,n=i.rotation??this.rotation,[s,r]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=Er(l,s,r));let c,u,d,m;const{sx:f,sy:p,sWidth:h,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??r,n);if(i.fit==="fill")c=0,u=0,d=a,m=o;else{const[y,b]=i.crop?[i.crop.width,i.crop.height]:[s,r],T=i.fit==="contain"?Math.min(a/y,o/b):Math.max(a/y,o/b);d=y*T,m=b*T,c=(a-d)/2,u=(o-m)/2}e.save();const v=n%180===0?1:d/m;e.translate(a/2,o/2),e.rotate(n*Math.PI/180),e.scale(1/v,v),e.translate(-a/2,-o/2),e.drawImage(this.toCanvasImageSource(),f,p,h,g,c,u,d,m),e.restore()}_rotateSourceRegion(e,i,a,o,n){return n===90?[e,i,a,o]=[i,this.squarePixelHeight-e-a,o,a]:n===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-o]:n===270&&([e,i,a,o]=[this.squarePixelWidth-i-o,e,o,a]),{sx:e,sy:i,sWidth:a,sHeight:o}}_drawWithFitAndMipmapping(e,i,a){const o=e.width,n=e.height,[s,r]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:s,c=a.crop?a.crop.height:r;let u=0;2*o<l&&2*n<c&&(u=Math.floor(Math.log2(Math.min(l/o,c/n))));const d=o*2**u,m=n*2**u,{canvas:f,context:p,isNew:h}=u>0?Mr(d,m):{canvas:e,context:i,isNew:a.targetIsFresh};p.imageSmoothingQuality="high",a.fillBlack?(p.fillStyle="black",p.fillRect(0,0,d,m)):h||p.clearRect(0,0,d,m),this.drawWithFit(p,{fit:a.fit,rotation:a.rotation,crop:a.crop}),p.globalCompositeOperation="copy";for(let g=u;g>1;g--){const v=o*2**g,y=n*2**g;p.drawImage(f,0,0,v,y,0,0,v/2,y/2)}p.globalCompositeOperation="source-over",u>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*o,2*n,0,0,o,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if($(this._data!==null),this._data instanceof Gt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Tn(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=zm(this.rotation+(e.rotate??0)),[a,o]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=Er(n,a,o));const s=n?n.width:a,r=n?n.height:o,l=s/r;let c,u;e.width!==void 0&&e.height===void 0?(c=e.width,u=c/l):e.width===void 0&&e.height!==void 0?(u=e.height,c=u*l):e.width!==void 0&&e.height!==void 0?(c=e.width,u=e.height):(c=s,u=r),c=Zs(c,e.roundDimensionsTo??1),u=Zs(u,e.roundDimensionsTo??1);const d={width:c,height:u,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:a,height:o},alpha:e.alpha??"keep"};for(const h of r2){let g=h(this,d);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:m,context:f,isNew:p}=Mr(d.width,d.height);return this._drawWithFitAndMipmapping(m,f,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:p,fillBlack:d.alpha==="discard"}),new Re(m,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const r2=[],l2=3,Ki=[];let Cr=0;const Mr=(t,e)=>{for(const o of Ki)if(o.canvas.width===t&&o.canvas.height===e)return o.age=Cr++,{canvas:o.canvas,context:o.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ki.length>=l2&&Ki.splice(Xm(Ki,o=>o.age),1),Ki.push({canvas:i,context:a,age:Cr++}),{canvas:i,context:a,isNew:!0}};class kn{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(io);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(ao);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const o=Object.keys(oo);if(e.matrix!=null&&!o.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${o.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Xi=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Er=(t,e,i)=>{const a=Math.min(t.left,e),o=Math.min(t.top,i),n=Math.min(t.width,e-a),s=Math.min(t.height,i-o);return $(n>=0),$(s>=0),{left:a,top:o,width:n,height:s}},Tn=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Pr=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},c2=(t,e,i)=>{const a=fo(t),o=[];let n=0;for(const s of a){const r=Math.ceil(e/s.widthDivisor),l=Math.ceil(i/s.heightDivisor),c=r*s.sampleBytes,u=c*l;o.push({offset:n,stride:c}),n+=u}return o},fo=t=>{const e=(i,a,o,n,s)=>{const r=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:o,heightDivisor:n},{sampleBytes:a,widthDivisor:o,heightDivisor:n}];return s&&r.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),r};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Wt(t),$(!1)}},Fr=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,o=f2(i,a,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return d2(o,s,n)},f2=(t,e,i,a,o)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!u2(o,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},u2=(t,e)=>{if(t===null)return!0;const i=fo(t);for(let a=0;a<i.length;a++){const o=i[a],n=o.widthDivisor,s=o.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},d2=(t,e,i)=>{const a=fo(e),o=a.length;if(i!==void 0&&i.length!==o)throw new TypeError(`Layout must have ${o} planes.`);let n=0;const s=[],r=[];for(let l=0;l<o;l++){const c=a[l],u=c.sampleBytes,d=c.widthDivisor,m=c.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/m),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/m),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*u,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*u,i!==void 0){const g=i[l];if(g.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);f.destinationOffset=g.offset,f.destinationStride=g.stride}else f.destinationOffset=n,f.destinationStride=f.sourceWidthBytes;const h=f.destinationStride*f.sourceHeight+f.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");r.push(h),n=Math.max(n,h);for(let g=0;g<l;g++){const v=s[g];if(!(r[l]<=v.destinationOffset||r[g]<=f.destinationOffset))throw new TypeError("Planes overlap.")}s.push(f)}return{allocationSize:n,computedLayouts:s}},uo=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Zi{constructor(){this._referenceCount=0}}class Ne{get microsecondTimestamp(){return Math.trunc(Pt*this.timestamp)}get microsecondDuration(){return Math.trunc(Pt*this.duration)}constructor(e){if(this._closed=!1,Qi(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Zi){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!uo.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!uo.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(Ft(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const o=this.numberOfFrames*this.numberOfChannels*Ft(this.format);if(a.byteLength<o)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}Gi?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!uo.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const o=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(o>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const n=Ft(i),s=Kt(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?o:o*this.numberOfChannels)*n}copyTo(e,i){if(!no(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!uo.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:o,frameOffset:n}=i;let{planeIndex:s}=i;const r=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,u=this.numberOfChannels,d=n??0;if(d>=c)throw new RangeError("frameOffset out of range");const m=o!==void 0?o:c-d;if(m>c-d)throw new RangeError("frameCount out of range");const f=Ft(l),p=Kt(l);if(p&&s>=u)throw new RangeError("planeIndex out of range");if(!p&&s!==0)throw new RangeError("planeIndex out of range");const g=(p?m:m*u)*f;if(e.byteLength<g)throw new RangeError("Destination buffer is too small");const v=ct(e),y=Ir(l);if(Qi(this._data))jm()&&u>2&&l!==r?m2(this._data,v,r,l,u,s,d,m):this._data.copyTo(e,{planeIndex:s,frameOffset:d,frameCount:m,format:l});else{const b=Ar(r),T=Ft(r),_=Kt(r);let M;if(this._data instanceof Zi){const P=F=>{const z=this._data.getDataPlane(F);if(!(z instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const q=c*T*(_?1:u);if(z.byteLength!==q)throw new TypeError(`Data plane ${F} has invalid size. Expected exactly ${q} bytes, got ${z.byteLength} bytes.`);return z};if(_)if(p)M=P(s),s=0;else{M=new Uint8Array(c*T*u);for(let F=0;F<u;F++){const z=P(F);M.set(z,F*c*T)}}else M=P(0)}else M=this._data;const E=ct(M);for(let P=0;P<m;P++)if(p){const F=P*f;let z;_?z=(s*c+(P+d))*T:z=((P+d)*u+s)*T;const q=b(E,z);y(v,F,q)}else for(let F=0;F<u;F++){const q=(P*u+F)*f;let x;_?x=(F*c+(P+d))*T:x=((P+d)*u+F)*T;const R=b(E,x);y(v,q,R)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Zi){const e=new Ne(this._data);return e.setTimestamp(this.timestamp),e}else if(Qi(this._data)){const e=new Ne(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new Ne({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,o=Ft(this.format);let n;if(Kt(this.format)){const s=a*o;if(n=new Uint8Array(s*this.numberOfChannels),a>0)for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n.subarray(r*s,(r+1)*s),{planeIndex:r,format:this.format,frameOffset:e,frameCount:a})}else n=new Uint8Array(a*this.numberOfChannels*o),a>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new Ne({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Gi?.unregister(this),this._data instanceof Zi?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Qi(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Zi?this._createAudioDataFromData():Qi(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Kt(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;for(;c>0;){const u=Math.min(r,c),d=new Float32Array(o*u);for(let m=0;m<o;m++)e.copyFromChannel(d.subarray(m*u,(m+1)*u),m,l);yield new Ne({format:"f32-planar",sampleRate:n,numberOfFrames:u,numberOfChannels:o,timestamp:i+l/n,data:d}),l+=u,c-=u}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,o=e.numberOfChannels,n=e.sampleRate,s=e.length,r=Math.floor(a/o);let l=0,c=s;const u=[];for(;c>0;){const d=Math.min(r,c),m=new Float32Array(o*d);for(let p=0;p<o;p++)e.copyFromChannel(m.subarray(p*d,(p+1)*d),p,l);const f=new Ne({format:"f32-planar",sampleRate:n,numberOfFrames:d,numberOfChannels:o,timestamp:i+l/n,data:m});u.push(f),l+=d,c-=d}return u}}const Ft=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Kt=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Ar=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},Ir=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Ae((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Ae(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Ae(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},Qi=t=>typeof AudioData<"u"&&t instanceof AudioData,h2=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},m2=(t,e,i,a,o,n,s,r)=>{const l=Ar(i),c=Ir(a),u=Ft(i),d=Ft(a),m=Kt(i);if(Kt(a))if(m){const p=new ArrayBuffer(r*u),h=ct(p);t.copyTo(p,{planeIndex:n,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const v=g*u,y=g*d,b=l(h,v);c(e,y,b)}}else{const p=new ArrayBuffer(r*o*u),h=ct(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++){const v=(g*o+n)*u,y=g*d,b=l(h,v);c(e,y,b)}}else if(m){const p=r*u,h=new ArrayBuffer(p),g=ct(h);for(let v=0;v<o;v++){t.copyTo(h,{planeIndex:v,frameOffset:s,frameCount:r,format:i});for(let y=0;y<r;y++){const b=y*u,T=(y*o+v)*d,_=l(g,b);c(e,T,_)}}}else{const p=new ArrayBuffer(r*o*u),h=ct(p);t.copyTo(p,{planeIndex:0,frameOffset:s,frameCount:r,format:i});for(let g=0;g<r;g++)for(let v=0;v<o;v++){const y=g*o+v,b=y*u,T=y*d,_=l(h,b);c(e,T,_)}}},p2=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new Ne({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Br=new Map,Rr=new Map,g2=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!wt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${wt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Tn(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");zr(t.codec,t)},zr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&lo(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Or=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(n,s,r)=>({codec:t.fullCodecString??ap(t.codec,t.width,t.height,r,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...sp(t.codec)}),o=[];return i.quantizer!==null&&o.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&o.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),$(o.length>0),o},v2=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!jt.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${jt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(et.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Hr(t.codec,t)},Hr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&lo(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},Lr=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??np(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...rp(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in Nr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?Nr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,o){const n=b2[e];let s=null,r=this._bitrateMode??o??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(r="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&($(this._quality!==void 0),s=Ae(Math.round(Nm(n.worst,n.best,this._quality)),n.min,n.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&($(s!==null&&n),c=Ae((s-n.worst)/(n.best-n.worst),0,1)),l=Ur(e,i,a,_n(c))}return{quantizer:s,bitrate:l,bitrateMode:r}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:($(this._quality!==void 0),Ur(e,i,a,_n(this._quality)))}_toAudioBitrate(e){if(et.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=_n(this._quality),o={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!o)throw new Error(`Unhandled codec: ${e}`);let n=o*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((r,l)=>Math.abs(l-n)<Math.abs(r-n)?l:r)),Math.round(n/1e3)*1e3}}const Nr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},b2={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},_n=t=>.3*Math.exp(2.5538*t),Ur=(t,e,i,a)=>{const o=e*i,n=1920*1080,s=3e6,r=Math.pow(o/n,.95),l=s*r,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},qr=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};$(!1)},y2=new ze("high"),w2=async(t,e={})=>{const{width:i=1280,height:a=720,quality:o,bitrate:n,...s}=e;if(!wt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(o!==void 0&&!(o instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");zr(t,s);const r=ho(o,n)??new ze("medium");let l;try{l=Or({codec:t,width:i,height:a,quality:r,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),u=Br.get(c);if(u)return u;const d=(async()=>{for(const{config:f}of l)if(Dr.some(p=>p.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:p}of l){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!er()||await new Promise(async g=>{try{const v=new VideoEncoder({output:()=>{},error:()=>g(!1)});v.configure(f);const y=new Uint8Array(i*a*4),b=new VideoFrame(y,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});v.encode(b,p!==null?qr(t,p):void 0),b.close(),await v.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return Br.set(c,d),d},k2=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:o,bitrate:n,...s}=e;if(!jt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(o!==void 0&&!(o instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(o!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ze)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");Hr(t,s);const r=ho(o,n)??new ze("medium"),l=Lr({codec:t,numberOfChannels:i,sampleRate:a,quality:r,...s}),c=JSON.stringify(l),u=Rr.get(c);if(u)return u;const d=(async()=>{if($r.some(m=>m.supports(t,l))||et.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return Rr.set(c,d),d},ho=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},T2=async(t,e)=>{for(const i of t)if(await w2(i,e))return i;return null},_2=async(t,e)=>{for(const i of t)if(await k2(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Dr=[],$r=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const S2=t=>{let a=t,o=4096,n=0,s=12,r=0;for(a<0&&(a=-a,n=128),a+=33,a>8191&&(a=8191);(a&o)!==o&&s>=5;)o>>=1,s--;return r=a>>s-4&15,~(n|s-5<<4|r)&255},x2=t=>{let i=2048,a=0,o=11,n=0,s=t;for(s<0&&(s=-s,a=128),s>4095&&(s=4095);(s&i)!==i&&o>=5;)i>>=1,o--;return n=s>>(o===4?1:o-4)&15,(a|o-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Yi{constructor(e,i,a,o,n){this.bytes=e,this.view=i,this.offset=a,this.start=o,this.end=n,this.bufferPos=o-a}static tempFromBytes(e){return new Yi(e,ct(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Yi(this.bytes,this.view,this.offset,e,e+i)}}const C2=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},M2=(t,e)=>{C2(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class E2{constructor(e){this.mutex=new Gs,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let o=this.trackTimestampInfo.get(e);if(o){if(a&&(o.maxTimestampBeforeLastKeyPacket=o.maxTimestamp),o.maxTimestampBeforeLastKeyPacket!==null&&i<o.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${o.maxTimestampBeforeLastKeyPacket}s.`);o.maxTimestamp=Math.max(o.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");o={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,o)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Wr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,P2=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),o=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+o.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class mo{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const a=this.writer.getPos(),o=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,o),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);$(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const fe=new Uint8Array(8),Ke=new DataView(fe.buffer),_e=t=>[(t%256+256)%256],le=t=>(Ke.setUint16(0,t,!1),[fe[0],fe[1]]),Sn=t=>(Ke.setInt16(0,t,!1),[fe[0],fe[1]]),jr=t=>(Ke.setUint32(0,t,!1),[fe[1],fe[2],fe[3]]),X=t=>(Ke.setUint32(0,t,!1),[fe[0],fe[1],fe[2],fe[3]]),Tt=t=>(Ke.setInt32(0,t,!1),[fe[0],fe[1],fe[2],fe[3]]),ht=t=>(Ke.setUint32(0,Math.floor(t/2**32),!1),Ke.setUint32(4,t,!1),[fe[0],fe[1],fe[2],fe[3],fe[4],fe[5],fe[6],fe[7]]),F2=t=>(Ke.setInt32(0,Math.floor(t/2**32),!1),Ke.setUint32(4,t,!1),[fe[0],fe[1],fe[2],fe[3],fe[4],fe[5],fe[6],fe[7]]),Vr=t=>(Ke.setInt16(0,2**8*t,!1),[fe[0],fe[1]]),tt=t=>(Ke.setInt32(0,2**16*t,!1),[fe[0],fe[1],fe[2],fe[3]]),xn=t=>(Ke.setInt32(0,2**30*t,!1),[fe[0],fe[1],fe[2],fe[3]]),Cn=(t,e)=>{const i=[];let a=t;do{let o=a&127;a>>=7,i.length>0&&(o|=128),i.push(o)}while(a>0||e);return i.reverse()},ge=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,o)=>t.charCodeAt(o));return e&&i.push(0),i},Gr=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},Kr=Gr(0),Xr=t=>[tt(t[0]),tt(t[1]),xn(t[2]),tt(t[3]),tt(t[4]),xn(t[5]),tt(t[6]),tt(t[7]),xn(t[8])],re=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),de=(t,e,i,a,o)=>re(t,[_e(e),jr(i),a??[]],o),A2=t=>t.isQuickTime?re("ftyp",[ge("qt  "),X(512),ge("qt  ")]):t.fragmented?t.cmaf?re("ftyp",[ge("iso5"),X(512),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]):re("ftyp",[ge("iso5"),X(512),ge("iso5"),ge("iso6"),ge("mp41")]):re("ftyp",[ge("isom"),X(512),ge("isom"),t.holdsAvc?ge("avc1"):[],ge("mp41")]),Zr=()=>re("styp",[ge("iso5"),X(0),ge("iso5"),ge("iso6"),ge("mp41"),ge("cmfc"),ge("dash")]),Qr=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),de("sidx",1,0,[X(1),X(at),ht(we(t.minWrittenTimestamp,at)),ht(0),le(0),le(1),X(e&2147483647),X(we(i,at)),X(0)])},po=t=>({type:"mdat",largeSize:t}),I2=t=>({type:"free",size:t}),Ji=t=>re("moov",void 0,[B2(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>R2(e,t.creationTime)),t.isFragmented?vg(t.trackDatas):null,Fg(t)]),B2=(t,e)=>{const i=Math.max(0,...e.map(s=>we(go(s),at)+we(s.startTimestampOffset??0,at))),a=Math.max(0,...e.map(s=>s.track.id))+1,o=!Et(t)||!Et(i),n=o?ht:X;return de("mvhd",+o,0,[n(t),n(t),X(at),n(i),tt(1),Vr(1),Array(10).fill(0),Xr(Kr),Array(24).fill(0),X(a)])},go=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const o=t.samples[a];o.timestamp<e&&(e=o.timestamp),o.timestamp+o.duration>i&&(i=o.timestamp+o.duration)}return e===1/0?0:i-e},R2=(t,e)=>{const i=qg(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return re("trak",void 0,[z2(t,e),a?O2(t,t.startTimestampOffset):null,H2(t,e),i.name!==void 0?re("udta",void 0,[re("name",[...ft.encode(i.name)])]):null])},z2=(t,e)=>{const i=we(go(t),at)+we(t.startTimestampOffset??0,at),a=!Et(e)||!Et(i),o=a?ht:X;let n;if(t.type==="video"){const l=t.track.metadata.rotation;n=Gr(l??0)}else n=Kr;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const r=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Wt(t);return de("tkhd",+a,s,[o(e),o(e),X(t.track.id),X(0),o(i),Array(8).fill(0),le(0),le(r),Vr(t.type==="audio"?1:0),le(0),Xr(n),tt(t.type==="video"?t.info.width:0),tt(t.type==="video"?t.info.height:0)])},O2=(t,e)=>{const i=we(e,at),a=we(go(t),at),o=!Et(i)||!Et(a),n=o?ht:X,s=o?F2:Tt;return re("edts",void 0,[de("elst",o?1:0,0,[X(2),n(i),s(-1),tt(1),n(a),s(0),tt(1)])])},H2=(t,e)=>re("mdia",void 0,[L2(t,e),Mn(!0,N2[t.type],U2[t.type]),q2(t)]),L2=(t,e)=>{const i=we(go(t),t.timescale),a=!Et(e)||!Et(i),o=a?ht:X;return de("mdhd",+a,0,[o(e),o(e),X(t.timescale),o(i),le(ol(t.track.metadata.languageCode??Um)),le(0)])},N2={video:"vide",audio:"soun",subtitle:"text"},U2={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Mn=(t,e,i,a="\0\0\0\0")=>de("hdlr",0,0,[t?ge("mhlr"):X(0),ge(e),ge(a),X(0),X(0),ge(i,!0)]),q2=t=>re("minf",void 0,[D2[t.type](),$2(),V2(t)]),D2={video:()=>de("vmhd",0,1,[le(0),le(0),le(0),le(0)]),audio:()=>de("smhd",0,0,[le(0),le(0)]),subtitle:()=>de("nmhd",0,0)},$2=()=>re("dinf",void 0,[W2()]),W2=()=>de("dref",0,0,[X(1)],[j2()]),j2=()=>de("url ",0,1),V2=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return re("stbl",void 0,[G2(t),fg(t),e?pg(t):null,e?gg(t):null,dg(t),hg(t),mg(t),ug(t)])},G2=t=>{let e;if(t.type==="video")e=K2(Rg(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=al(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);$(i),e=eg(i,t)}else t.type==="subtitle"&&(e=lg(Hg[t.track.source._codec],t));return $(e),de("stsd",0,0,[X(1)],[e])},K2=(t,e)=>re(t,[Array(6).fill(0),le(1),le(0),le(0),Array(12).fill(0),le(e.info.width),le(e.info.height),X(4718592),X(4718592),X(0),le(1),_e(10),ge("Mediabunny"),Array(21).fill(0),le(e.info.hasAlphaChannel?32:24),Sn(65535)],[zg[e.track.source._codec]?.(e)??null,X2(e),Om(e.info.decoderConfig.colorSpace)?Z2(e):null]),X2=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:re("pasp",[X(t.info.pixelAspectRatio.num),X(t.info.pixelAspectRatio.den)]),Z2=t=>re("colr",[ge(t.muxer.isQuickTime?"nclc":"nclx"),le(io[t.info.decoderConfig.colorSpace.primaries]),le(ao[t.info.decoderConfig.colorSpace.transfer]),le(oo[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:_e((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Q2=t=>t.info.decoderConfig&&re("avcC",[...Ve(t.info.decoderConfig.description)]),Y2=t=>t.info.decoderConfig&&re("hvcC",[...Ve(t.info.decoderConfig.description)]),Yr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),o=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,r=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(n<<4)+(s<<1)+r,c=i[5]?Number(i[5]):e.colorSpace?.primaries?io[e.colorSpace.primaries]:2,u=i[6]?Number(i[6]):e.colorSpace?.transfer?ao[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?oo[e.colorSpace.matrix]:2;return de("vpcC",1,0,[_e(a),_e(o),_e(l),_e(c),_e(u),_e(d),le(0)])},J2=t=>re("av1C",op(t.info.decoderConfig.codec)),eg=(t,e)=>{let i=0,a,o=16;const n=et.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:r}=Vt(s);o=8*r,o>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),le(1),le(i),le(0),X(0),le(e.info.numberOfChannels),le(o),le(0),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0)];else{const s=n?0:-2;a=[Array(6).fill(0),le(1),le(i),le(0),X(0),le(e.info.numberOfChannels),le(Math.min(o,16)),Sn(s),le(0),le(e.info.sampleRate<2**16?e.info.sampleRate:0),le(0),n?[X(1),X(o/8),X(e.info.numberOfChannels*o/8)]:[X(0),X(0),X(0)],X(2)]}return re(t,a,[Og(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},En=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[..._e(e),..._e(21),...jr(0),...X(0),...X(0)];if(t.info.decoderConfig.description){const a=Ve(t.info.decoderConfig.description);i=[...i,..._e(5),...Cn(a.byteLength),...a]}return i=[...le(1),..._e(0),..._e(4),...Cn(i.length),...i,..._e(6),..._e(1),..._e(2)],i=[..._e(3),...Cn(i.length),...i],de("esds",0,0,i)},At=t=>re("wave",void 0,[tg(t),ig(t),re("\0\0\0\0")]),tg=t=>re("frma",[ge(al(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),ig=t=>{const{littleEndian:e}=Vt(t.track.source._codec);return re("enda",[le(+e)])},ag=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,o=0,n=0,s=new Uint8Array(0);const r=t.info.decoderConfig?.description;if(r){$(r.byteLength>=18);const l=Ve(r),c=Bp(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,o=c.outputGain,n=c.channelMappingFamily,c.channelMappingTable&&(s=c.channelMappingTable)}return re("dOps",[_e(0),_e(e),le(i),X(a),Sn(o),_e(n),...s])},og=t=>{const e=t.info.decoderConfig?.description;$(e);const i=Ve(e);return de("dfLa",0,0,[...i.subarray(4)])},mt=t=>{const{littleEndian:e,sampleSize:i}=Vt(t.track.source._codec),a=+e;return de("pcmC",0,0,[_e(a),_e(8*i)])},ng=t=>{$(t.info.primingPacket);const e=zp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Me(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),re("dac3",[...i])},sg=t=>{$(t.info.primingPacket);const e=Hp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),o=new Uint8Array(a),n=new Me(o);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return re("dec3",[...o])},rg=t=>{$(t.info.primingPacket);const e=Qp(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return re("ddts",[...e2(e)])},lg=(t,e)=>re(t,[Array(6).fill(0),le(1)],[Lg[e.track.source._codec](e)]),cg=t=>re("vttC",[...ft.encode(t.info.config.description)]),fg=t=>de("stts",0,0,[X(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[X(e.sampleCount),X(e.sampleDelta)])]),ug=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return de("stss",0,0,[X(e.length),e.map(([i])=>X(i+1))])},dg=t=>de("stsc",0,0,[X(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[X(e.firstChunk),X(e.samplesPerChunk),X(1)])]),hg=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Vt(t.track.source._codec);return de("stsz",0,0,[X(e*t.info.numberOfChannels),X(t.samples.reduce((i,a)=>i+we(a.duration,t.timescale),0))])}return de("stsz",0,0,[X(0),X(t.samples.length),t.samples.map(e=>X(e.size))])},mg=t=>t.finalizedChunks.length>0&&Je(t.finalizedChunks).offset>=2**32?de("co64",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>ht(e.offset))]):de("stco",0,0,[X(t.finalizedChunks.length),t.finalizedChunks.map(e=>X(e.offset))]),pg=t=>de("ctts",1,0,[X(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[X(e.sampleCount),Tt(e.sampleCompositionTimeOffset)])]),gg=t=>{let e=1/0,i=-1/0,a=1/0,o=-1/0;$(t.compositionTimeOffsetTable.length>0),$(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const r=t.compositionTimeOffsetTable[s];e=Math.min(e,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const r=t.samples[s];a=Math.min(a,we(r.timestamp,t.timescale)),o=Math.max(o,we(r.timestamp+r.duration,t.timescale))}const n=Math.max(-e,0);return o>=2**31?null:de("cslg",0,0,[Tt(n),Tt(e),Tt(i),Tt(a),Tt(o)])},vg=t=>re("mvex",void 0,t.map(bg)),bg=t=>de("trex",0,0,[X(t.track.id),X(1),X(0),X(0),X(0)]),Jr=(t,e)=>re("moof",void 0,[yg(t),...e.map(wg)]),yg=t=>de("mfhd",0,0,[X(t)]),el=t=>{let e=0,i=0;const a=0,o=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|a<<8|o},wg=t=>re("traf",void 0,[kg(t),Tg(t),_g(t)]),kg=t=>{$(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:el(i)};return de("tfhd",0,e,[X(t.track.id),X(a.duration),X(a.size),X(a.flags)])},Tg=t=>($(t.currentChunk),de("tfdt",1,0,[ht(we(t.currentChunk.startTimestamp,t.timescale))])),_g=t=>{$(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),a=t.currentChunk.samples.map(el),o=t.currentChunk.samples.map(h=>we(h.timestamp-h.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),r=new Set(a),l=new Set(o),c=r.size===2&&a[0]!==a[1],u=n.size>1,d=s.size>1,m=!c&&r.size>1,f=l.size>1||[...l].some(h=>h!==0);let p=0;return p|=1,p|=4*+c,p|=256*+u,p|=512*+d,p|=1024*+m,p|=2048*+f,de("trun",1,p,[X(t.currentChunk.samples.length),X(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?X(a[0]):[],t.currentChunk.samples.map((h,g)=>[u?X(e[g]):[],d?X(i[g]):[],m?X(a[g]):[],f?Tt(o[g]):[]])])},Sg=t=>re("mfra",void 0,[...t.map(xg),Cg()]),xg=t=>de("tfra",1,0,[X(t.track.id),X(63),X(t.finalizedChunks.length),t.finalizedChunks.map(i=>[ht(we(i.samples[0].timestamp,t.timescale)),ht(i.moofOffset),X(i.trafIndex+1),X(1),X(1)])]),Cg=()=>de("mfro",0,0,[X(0)]),Mg=()=>re("vtte"),Eg=(t,e,i,a,o)=>re("vttc",void 0,[o!==null?re("vsid",[Tt(o)]):null,i!==null?re("iden",[...ft.encode(i)]):null,e!==null?re("ctim",[...ft.encode(P2(e))]):null,a!==null?re("sttg",[...ft.encode(a)]):null,re("payl",[...ft.encode(t)])]),Pg=t=>re("vtta",[...ft.encode(t)]),Fg=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const o=Ig(a);o&&e.push(o)}else if(i==="mdta"){const o=Bg(a);o&&e.push(o)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&Ag(e,t.output._metadataTags);return e.length===0?null:re("udta",void 0,e)},Ag=(t,e)=>{for(const{key:i,value:a}of tr(e))switch(i){case"title":t.push(pt("©nam",a));break;case"description":t.push(pt("©des",a));break;case"artist":t.push(pt("©ART",a));break;case"album":t.push(pt("©alb",a));break;case"albumArtist":t.push(pt("albr",a));break;case"genre":t.push(pt("©gen",a));break;case"date":t.push(pt("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(pt("©cmt",a));break;case"lyrics":t.push(pt("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Wt(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(o=>o.type===i)||(typeof a=="string"?t.push(pt(i,a)):a instanceof Uint8Array&&t.push(re(i,Array.from(a))))}},pt=(t,e)=>{const i=ft.encode(e);return re(t,[le(i.length),le(ol("und")),Array.from(i)])},tl={"image/jpeg":13,"image/png":14,"image/bmp":27},il=(t,e)=>{const i=[];for(const{key:a,value:o}of tr(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:it(o)});break;case"description":i.push({key:e?"description":"©des",value:it(o)});break;case"artist":i.push({key:e?"artist":"©ART",value:it(o)});break;case"album":i.push({key:e?"album":"©alb",value:it(o)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:it(o)});break;case"comment":i.push({key:e?"comment":"©cmt",value:it(o)});break;case"genre":i.push({key:e?"genre":"©gen",value:it(o)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:it(o)});break;case"date":i.push({key:e?"date":"©day",value:it(o.toISOString().slice(0,10))});break;case"images":for(const n of o)n.kind==="coverFront"&&i.push({key:"covr",value:re("data",[X(tl[n.mimeType]??0),X(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${o}/${t.tracksTotal}`:o.toString();i.push({key:"track",value:it(n)})}else i.push({key:"trkn",value:re("data",[X(0),X(0),le(0),le(o),le(t.tracksTotal??0),le(0)])});break;case"discNumber":e||i.push({key:"disc",value:re("data",[X(0),X(0),le(0),le(o),le(t.discsTotal??0),le(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Wt(a)}if(t.raw)for(const a in t.raw){const o=t.raw[a];o==null||!e&&a.length!==4||i.some(n=>n.key===a)||(typeof o=="string"?i.push({key:a,value:it(o)}):o instanceof Uint8Array?i.push({key:a,value:re("data",[X(0),X(0),Array.from(o)])}):o instanceof or&&i.push({key:a,value:re("data",[X(tl[o.mimeType]??0),X(0),Array.from(o.data)])}))}return i},Ig=t=>{const e=il(t,!1);return e.length===0?null:de("meta",0,0,void 0,[Mn(!1,"mdir","","appl"),re("ilst",void 0,e.map(i=>re(i.key,void 0,[i.value])))])},Bg=t=>{const e=il(t,!0);return e.length===0?null:re("meta",void 0,[Mn(!1,"mdta",""),de("keys",0,0,[X(e.length)],e.map(i=>re("mdta",[...ft.encode(i.key)]))),re("ilst",void 0,e.map((i,a)=>{const o=String.fromCharCode(...X(a+1));return re(o,void 0,[i.value])}))])},it=t=>re("data",[X(1),X(0),...ft.encode(t)]),Rg=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},zg={avc:Q2,hevc:Y2,vp8:Yr,vp9:Yr,av1:J2,prores:null},al=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},Og=(t,e)=>{switch(t){case"aac":return En;case"mp3":return En;case"opus":return ag;case"vorbis":return En;case"flac":return og;case"ac3":return ng;case"eac3":return sg;case"dts":return rg}if(e)switch(t){case"pcm-s24":return At;case"pcm-s24be":return At;case"pcm-s32":return At;case"pcm-s32be":return At;case"pcm-f32":return At;case"pcm-f32be":return At;case"pcm-f64":return At;case"pcm-f64be":return At}else switch(t){case"pcm-s16":return mt;case"pcm-s16be":return mt;case"pcm-s24":return mt;case"pcm-s24be":return mt;case"pcm-s32":return mt;case"pcm-s32be":return mt;case"pcm-f32":return mt;case"pcm-f32be":return mt;case"pcm-f64":return mt;case"pcm-f64be":return mt}return null},Hg={webvtt:"wvtt"},Lg={webvtt:cg},ol=t=>{$(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Pn{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){$(!this.started),this.target._start(),this.started=!0}write(e){$(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return $(this.started&&!this.finalized),this.target._flush()}async finalize(){$(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let o=this.trackedWrites.byteLength;for(;o<a;)o*=2;if(o!==this.trackedWrites.byteLength){const n=new Uint8Array(o);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class _t extends mn{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new Ng(this,e)}}const Fn=2**16,An=2**32;class vo extends _t{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Fn,{maxByteLength:An})}catch{this._buffer=new ArrayBuffer(Fn),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Fn);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>An)throw new Error(`ArrayBuffer exceeded maximum size of ${An} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),o=new Uint8Array(a);o.set(this._bytes,0),this._buffer=a,this._bytes=o}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class Ng extends _t{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class In{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const at=57600,Ug=2082844800,qg=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},we=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class Dg extends E2{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new vo,this.auxWriter=new Pn(this.auxTarget,!1),this.auxBoxWriter=new mo(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Xs(),this.creationTime=Math.floor(Date.now()/1e3)+Ug,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof ul,this.isCmaf=i instanceof fl,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof fl?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof vo),this.boxWriter=new mo(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof vo?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),o=new Pn(a,!0);o.start(),this.initWriter=o,this.initBoxWriter=new mo(o)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if($(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(A2({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:o,start:n}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(o,n)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||($(this.writer),$(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=po(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return t2({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const o=this.trackDatas.find(f=>f.track===e);if(o)return o;fr(a,e.source._codec),$(a),$(a.decoderConfig);const n={...a.decoderConfig};$(n.codedWidth!==void 0),$(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=yp(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=wp(f),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=Sp(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=Ap(f),s=!0}const r=Wm(1/(e.metadata.frameRate??at),1e6).den,l=n.displayAspectWidth,c=n.displayAspectHeight,u=l===void 0||c===void 0?{num:1,den:1}:ir({num:l*n.codedHeight,den:c*n.codedWidth}),d=n.codec==="ap4h"||n.codec==="ap4x",m={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:u,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:d},timescale:r,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(m),this.trackDatas.sort((f,p)=>f.track.id-p.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),m}getAudioTrackData(e,i,a){const o=this.trackDatas.find(l=>l.track===e);if(o)return o;ur(a,e.source._codec),$(a),$(a.decoderConfig);const n={...a.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=_r(Yi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=so[l.samplingFrequencyIndex],u=pn[l.channelConfiguration];if(c===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");n.description=nr({objectType:l.objectType,sampleRate:c,numberOfChannels:u}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const r={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&et.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(r),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}getSubtitleTrackData(e,i){const a=this.trackDatas.find(n=>n.track===e);if(a)return a;mp(i),$(i),$(i.config);const o={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(o),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}async addEncodedVideoPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,a);let s=i.data;if(n.info.requiresAnnexBTransformation){const l=[...Vi(s)].map(c=>s.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=bp(l,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const r=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,r)}finally{o()}}async addEncodedAudioPacket(e,i,a){const o=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,a);let s=i.data;if(n.info.requiresAdtsStripping){const u=_r(Yi.tempFromBytes(s));if(!u)throw new Error("Expected ADTS frame, didn't get one.");const d=u.crcCheck===null?i2:a2;s=s.subarray(d)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let r=i.timestamp,l=i.duration;if(n.info.requiresPcmTransformation){const d=Vt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(l=s.byteLength/d/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const m=r-n.info.expectedNextPcmPacketTimestamp;if(m<.01)r=n.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,m);r=n.info.expectedNextPcmPacketTimestamp+f}}n.info.expectedNextPcmPacketTimestamp=r+l}const c=this.createSampleForTrack(n,s,r,l,i.type);await this.registerSample(n,c)}finally{o()}}async padWithSilence(e,i,a){const o=we(a,e.timescale);if(a=o/e.timescale,o>0){const{sampleSize:n,silentValue:s}=Vt(e.info.decoderConfig.codec),r=o*e.info.numberOfChannels,l=new Uint8Array(n*r).fill(s),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const o=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,a);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{o()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)$(c.timestamp<=i),$(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const o=[...a].sort((c,u)=>c-u),n=o[0],s=o[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const c=Mg();this.auxBoxWriter.writeBox(c);const u=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const u=e.cueQueue[c];if(u.timestamp>=s)break;Wr.lastIndex=0;const d=Wr.test(u.text),m=u.timestamp+u.duration;let f=e.cueToSourceId.get(u);if(f===void 0&&s<m&&(f=e.nextSourceId++,e.cueToSourceId.set(u,f)),u.notes){const h=Pg(u.notes);this.auxBoxWriter.writeBox(h)}const p=Eg(u.text,d?n:null,u.identifier??null,u.settings??null,f??null);this.auxBoxWriter.writeBox(p),m===s&&e.cueQueue.splice(c--,1)}const r=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,r,n,s-n,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,a,o,n){return{timestamp:a,decodeTimestamp:a,duration:o,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:we(o,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let o=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],r=we(s.duration,e.timescale);o+=r}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:o,sampleDelta:1});else{const n=Je(e.timeToSampleTable);n.sampleCount+=o}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(o=>o.timestamp).sort((o,n)=>o-n);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let o=0;o<e.timestampProcessingQueue.length;o++){const n=e.timestampProcessingQueue[o];n.decodeTimestamp=a[o];const s=we(n.timestamp-n.decodeTimestamp,e.timescale),r=we(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){$(e.lastSample);const l=we(n.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if($(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let u=Je(e.timeToSampleTable);if($(u),u.sampleCount===1){u.sampleDelta=c;const m=e.timeToSampleTable[e.timeToSampleTable.length-2];m&&m.sampleDelta===c&&(m.sampleCount++,e.timeToSampleTable.pop(),u=m)}else u.sampleDelta!==c&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:c}));u.sampleDelta===r?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:r});const d=Je(e.compositionTimeOffsetTable);$(d),d.sampleCompositionTimeOffset===s?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=we(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:r}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,$(e.lastSample),$(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){$(i.type==="key");const o=we(i.timestamp,e.timescale,!1),n=Math.round(o-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const o=e.track.metadata.maximumPacketCount;if($(o!==void 0),e.samples.length>o)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${o}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const o=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const r=s.sampleQueue[0];return r?r.type==="key":s.closed});o>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=o>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),$(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if($(!this.isFragmented),$(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,o)=>a+we(o.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Je(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)$(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if($(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<a&&(i=n,a=n.sampleQueue[0].timestamp)}if(!i)break;const o=i.sampleQueue.shift();await this.addSampleToTrack(i,o)}}async finalizeFragment(e=!this.isCmaf){if($(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;$(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const p=Ji(this);if(f.writeBox(p),this.formatOptions.onMoov){const{data:h,start:g}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(h,g)}if(this.isCmaf){$(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new mo(this.writer);const h=this.boxWriter.measureBox(Zr()),g=this.boxWriter.measureBox(Qr(this,0));this.segmentHeaderSize=h+g,this.writer.seek(this.segmentHeaderSize)}}$(this.writer),$(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,o=Jr(a,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(o);let r=s+yn,l=1/0;for(let f=0;f<i.length;f++){const p=i[f];p.currentChunk.offset=r,p.currentChunk.moofOffset=n,p.currentChunk.trafIndex=f;for(const h of p.currentChunk.samples)r+=h.size;l=Math.min(l,p.currentChunk.startTimestamp)}const c=r-s,u=c>=2**32;if(u)for(const f of i)f.currentChunk.offset+=Tr-yn;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=Jr(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:f,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,p,l)}$(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const m=po(u);m.size=c,this.boxWriter.writeBox(m),this.writer.seek(s+(u?Tr:yn));for(const f of i)for(const p of f.currentChunk.samples)this.writer.write(p.data),p.data=null;if(this.formatOptions.onMdat){const{data:f,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,p)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){$(this.writer),$(this.boxWriter),this.ensureOneEnabledTrack();const e=Ji(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;$(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=po(!0),this.boxWriter.writeBox(this.mdat);for(const o of this.trackDatas){for(const n of o.sampleQueue)await this.addSampleToTrack(o,n);o.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){$(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;$(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(o=>o.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(o=>o.type===e);if(i.length===0)continue;if(!i.some(o=>o.track.metadata.disposition?.default!==!1)){const o=i[0];o.track.metadata.disposition={...o.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){$(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const o=i.samples[a];o.timestamp-=i.startTimestampOffset,o.decodeTimestamp-=i.startTimestampOffset}if($(this.writer),$(this.boxWriter),this.fastStart==="in-memory"){this.mdat=po(!1);let i;for(let o=0;o<2;o++){const n=Ji(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+s+i;for(const l of this.finalizedChunks){l.offset=r;for(const{data:c}of l.samples)$(c),r+=c.byteLength,i+=c.byteLength}if(r<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=Ji(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const o of this.finalizedChunks)for(const n of o.samples)$(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:o,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Zr()),this.boxWriter.writeBox(Qr(this,i))}else{const i=this.writer.getPos(),a=Sg(this.trackDatas);this.boxWriter.writeBox(a);const o=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(o)}else{$(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);$(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const o=Ji(this);if(this.fastStart==="reserve"){$(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(I2(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(o);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class $g{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){$(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,o)=>a[o*e]:e===1&&i===4?this.channelMixer=(a,o,n)=>a[o*e]*+(n<2):e===1&&i===6?this.channelMixer=(a,o,n)=>a[o*e]*+(n===2):e===2&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .5*(a[n]+a[n+1])}:e===2&&i===4?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(a,o,n)=>a[o*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return .25*(a[n]+a[n+1]+a[n+2]+a[n+3])}:e===4&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return .5*(a[s+n]+a[s+n+2])}:e===4&&i===6?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]:n===2||n===3?0:a[s+n-2]}:e===6&&i===1?this.channelMixer=(a,o)=>{const n=o*e;return Math.SQRT1_2*(a[n]+a[n+1])+a[n+2]+.5*(a[n+4]+a[n+5])}:e===6&&i===2?this.channelMixer=(a,o,n)=>{const s=o*e;return a[s+n]+Math.SQRT1_2*(a[s+2]+a[s+n+4])}:e===6&&i===4?this.channelMixer=(a,o,n)=>{const s=o*e;return n<2?a[s+n]+Math.SQRT1_2*a[s+2]:a[s+n+2]}:this.channelMixer=(a,o,n)=>n<e?a[o*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),$(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),o=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(o,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,r=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(s*this.targetSampleRate);for(let c=r;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const u=c-this.bufferStartFrame;$(u<this.bufferSizeInFrames);const f=(c/this.targetSampleRate-n)*this.sourceSampleRate,p=Math.floor(f),h=Math.ceil(f),g=f-p;for(let v=0;v<this.targetNumberOfChannels;v++){let y=0,b=0;p>=0&&p<e.numberOfFrames&&(y=this.channelMixer(o,p,v)),h>=0&&h<e.numberOfFrames&&(b=this.channelMixer(o,h,v));const T=y+g*(b-y),_=u*this.targetNumberOfChannels+v;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=u:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,u)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;$(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new Ne({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Wg=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,o;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(o=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");o&&(a=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},jg=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var a,o=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&o===1)return o=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var s=a.dispose.call(a.value);if(a.async)return o|=2,Promise.resolve(s).then(n,function(r){return i(r),n()})}else o|=1}catch(r){i(r)}if(o===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class Bn{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class nl extends Bn{constructor(e){if(super(),this._connectedTrack=null,!wt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${wt.join(", ")}.`);this._codec=e}}const sl=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Vg{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Js,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const o=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let r=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(r=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||r&&s!=="passThrough"){let d=n.transform?.width,m=n.transform?.height,f=n.transform?.fit??"fill";r&&s!=="passThrough"&&($(this.outputWidth),$(this.outputHeight),$(s!=="deny"),d=this.outputWidth,m=this.outputHeight,f=s);const p=await e.transform({width:d,height:m,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:f,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=p.displayWidth,this.outputHeight=p.displayHeight),i&&e.close(),e=p,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const u=n.transform?.frameRate;if(u!==void 0){const d=e.timestamp+e.duration,m=Ys(e.timestamp,u);if(this.frameRateLastSample!==null)if(m<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(m,a);e===o&&(e=e.clone(),i=!0),e.setTimestamp(m),e.setDuration(1/u),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=m,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let o;if(a.transform?.process){let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const r of n)r instanceof Re?s.push(r):typeof VideoFrame<"u"&&r instanceof VideoFrame?s.push(new Re(r)):s.push(new Re(r,{timestamp:e.timestamp,duration:e.duration}))}catch(r){for(const l of s)l!==e&&l.close();for(const l of n)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw r}o=s}else o=[e];try{for(const n of o){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),$(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,r=Math.floor(n.timestamp/s),l={...this.defaultEncodeOptions,...n.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:s===0||r!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=r,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const u=n.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(u,c)).catch(m=>this.setError(m)).finally(()=>{this.customEncoderQueueSize--,u.close()});this.customEncoderQueueSize>=4&&await d}else{$(this.encoder);const u=n.toVideoFrame(),d=Ks(this.preciseTimings,u.timestamp,f=>f.microsecondTimestamp),m=d!==-1?this.preciseTimings[d]:null;if(m&&m.microsecondTimestamp===u.timestamp?(m.timestamp!==n.timestamp&&(m.timestampIsValid=!1),m.duration!==n.duration&&(m.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:u.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!u.format&&!u.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(u,c)}finally{u.close()}}else{this.splitter||(this.splitter=new Gg);const{colorFrame:p,alphaFrame:h}=await this.splitter.split(u);this.alphaFrameQueue.push(h);try{this.encoder.encode(p,c)}finally{p.close()}}else try{this.encoder.encode(u,c)}finally{u.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of o)n!==e&&n.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;$(this.frameRateLastSample);const o=Math.round((e-this.frameRateLastTimestamp)*a);for(let n=1;n<o;n++){const s={stack:[],error:void 0,hasError:!1};try{const r=Wg(s,this.frameRateLastSample.clone(),!1);r.setTimestamp(this.frameRateLastTimestamp+n/a),r.setDuration(1/a),await this.processAndEncode(r,i)}catch(r){s.error=r,s.hasError=!0}finally{jg(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=ho(this.encodingConfig.quality,this.encodingConfig.bitrate);$(i!==void 0);const a=Or({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let o=null,n;for(const r of a){const l=r.config;if(this.encodingConfig.onEncoderConfig?.(l),n=Dr.find(u=>u.supports(this.encodingConfig.codec,l)),n){o=r;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){o=r;break}}catch{}}if(!o){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const r=a[0].config,l=a.map(({config:c,quantizer:u})=>u!==null?`quantizer ${u}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${r.codec}, ${l.join(" / ")}, ${r.width}x${r.height}, hardware acceleration: ${r.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=o.config;if(o.quantizer!==null&&(this.defaultEncodeOptions=qr(this.encodingConfig.codec,o.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof dt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");sl(this.source._connectedTrack,r),this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else{const r=[],l=[];let c=0,u=0;const d=(f,p,h)=>{const g={};if(p){const _=new Uint8Array(p.byteLength);p.copyTo(_),g.alpha=_}let v=dt.fromEncodedChunk(f,g);const y=Ks(this.preciseTimings,f.timestamp,_=>_.microsecondTimestamp),b=y!==-1?this.preciseTimings[y]:null;let T=null;this.emittedEncoderPackets===0&&v.type==="delta"&&h?.decoderConfig&&(T=Rp(this.encodingConfig.codec,h.decoderConfig,v.data)),(b&&b.microsecondTimestamp===f.timestamp||T!==null)&&(v=v.clone({timestamp:b?.timestampIsValid?b.timestamp:void 0,duration:b?.durationIsValid?b.duration:void 0,type:T??void 0})),sl(this.source._connectedTrack,v),this.encodingConfig.onEncodedPacket?.(v,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,v,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},m=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,p)=>{if(!this.alphaEncoder){d(f,null,p);return}const h=this.alphaFrameQueue.shift();$(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),u++,h.close(),r.push({chunk:f,meta:p})):u===0?d(f,null,p):(l.push(c+u),r.push({chunk:f,meta:p}))},error:f=>{f.stack=m,this.setError(f)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(p,h)=>{u--;const g=r.shift();for($(g!==void 0),d(g.chunk,p,g.meta),c++;l.length>0&&l[0]===c;){l.shift();const v=r.shift();$(v!==void 0),d(v.chunk,null,v.meta)}},error:p=>{p.stack=f,this.setError(p)}}),this.alphaEncoder.configure(s)}}$(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=Ys(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Zm(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let Rn=null;class Gg{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!Rn){const o=new Blob([`(${Kg.toString()})()`],{type:"application/javascript"});Rn=URL.createObjectURL(o)}this.worker=new Worker(Rn),this.worker.addEventListener("message",o=>{const n=o.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",o=>{const n=new Error(o.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=Xs();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Kg=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:r}=n.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(r);self.postMessage({id:s,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:s,error:l.message})}finally{r.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const r=n.allocationSize();if((!t||t.byteLength!==r)&&(t=new Uint8Array(r)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return a(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return o(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},a=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,u=l*c,d=Math.ceil(l/2),m=Math.ceil(c/2),f=u+d*m*2,p=new Uint8Array(f);for(let y=0,b=3;y<u;y++,b+=4)p[y]=n[b];p.fill(128,u);const h=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),g={format:"I420",codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[p.buffer]},v=new VideoFrame(p,g);return{colorFrame:h,alphaFrame:v}},o=(n,s,r)=>{const l=r.visibleRect?.width??r.codedWidth,c=r.visibleRect?.height??r.codedHeight,u=s.includes("P10"),d=s.includes("P12"),m=u||d?2:1;let f,p;s.startsWith("I420")?(f=Math.ceil(l/2),p=Math.ceil(c/2)):s.startsWith("I422")?(f=Math.ceil(l/2),p=c):(f=l,p=c);const h=l*c,g=f*p,v=h*m,y=g*m,b=h*m,T=v+y*2,_=s.replace("A",""),M=Math.ceil(l/2),E=Math.ceil(c/2),P=M*E,F=P*m,z=b+2*F,q=new Uint8Array(z),x=T;q.set(n.subarray(x,x+b),0);const R=b,k=u?512:d?2048:128;m===1?q.fill(k,R):new Uint16Array(q.buffer,R,2*P).fill(k);const U=u?"I420P10":d?"I420P12":"I420",G=new VideoFrame(n.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0}),O={format:U,codedWidth:l,codedHeight:c,timestamp:r.timestamp,duration:r.duration??void 0,transfer:[q.buffer]},ae=new VideoFrame(q,O);return{colorFrame:G,alphaFrame:ae}}};class Xg extends nl{constructor(e){g2(e),super(e.codec),this._encoder=new Vg(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class rl extends Bn{constructor(e){if(super(),this._connectedTrack=null,!jt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${jt.join(", ")}.`);this._codec=e}}class Zg{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new Js,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new $g({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&h2(e.format)!==a.transform.sampleFormat){const o=p2(e,a.transform.sampleFormat);i&&e.close(),e=o,i=!0}if(a.transform?.process)try{let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);try{for(const n of o)if(!(n instanceof Ne))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of o)await this.encodeSample(n,!0)}finally{for(const n of o)n instanceof Ne&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),$(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),o=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=o;else{const n=a-this.lastEndSampleIndex;if(n>=64){const s=new Ne({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),o=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await o,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{$(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(o=>this.encoder.addEventListener("dequeue",o,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){$(this.outputSampleSize),$(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:o,sampleRate:n,timestamp:s}=e,r=2048,l=[];for(let m=0;m<o;m+=r){const f=Math.min(r,e.numberOfFrames-m),p=f*a*this.outputSampleSize,h=new ArrayBuffer(p),g=new DataView(h);l.push({frameCount:f,view:g})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),u=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let m=0;m<a;m++){e.copyTo(u,{planeIndex:m,format:"f32-planar"});for(let f=0;f<l.length;f++){const{frameCount:p,view:h}=l[f];for(let g=0;g<p;g++)this.writeOutputValue(h,(g*a+m)*this.outputSampleSize,u[f*r+g])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:n}};for(let m=0;m<l.length;m++){const{frameCount:f,view:p}=l[m],h=p.buffer,g=m*r,v=new dt(new Uint8Array(h),"key",s+g/n,f/n);this.encodingConfig.onEncodedPacket?.(v,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,v,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,o=ho(this.encodingConfig.quality,this.encodingConfig.bitrate),n=Lr({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:o});this.encodingConfig.onEncoderConfig?.(n);const s=$r.find(r=>r.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(r,l)=>{if(!(r instanceof dt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(r,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,r,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=r=>{this.setError(r)},await this.customEncoder.init();else if(et.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let r;try{r=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{r=!1}if(!r)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,u)=>{if(this.encodingConfig.codec==="aac"&&u?.decoderConfig){let m=!1;if(!u.decoderConfig.description||u.decoderConfig.description.byteLength<2?m=!0:m=tp(Ve(u.decoderConfig.description)).objectType===0,m){const f=Number(Je(n.codec.split(".")));u.decoderConfig.description=nr({objectType:f,numberOfChannels:u.decoderConfig.numberOfChannels,sampleRate:u.decoderConfig.sampleRate})}}let d=dt.fromEncodedChunk(c);d=d.clone({timestamp:Qs(d.timestamp,n.sampleRate),duration:c.duration!=null?Qs(d.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,u),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,u).catch(m=>{this.setError(m)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(n)}$(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:o}=Vt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint8(s,Ae((r+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,r)=>{n.setInt8(s,Ae(Math.round(r*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,r)=>{const l=Ae(Math.floor(r*32767),-32768,32767);n.setUint8(s,S2(l))}:i==="alaw"?this.writeOutputValue=(n,s,r)=>{const l=Ae(Math.floor(r*32767),-32768,32767);n.setUint8(s,x2(l))}:$(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint16(s,Ae((r+1)*32767.5,0,65535),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt16(s,Ae(Math.round(r*32767),-32768,32767),o):$(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,r)=>ln(n,s,Ae((r+1)*83886075e-1,0,16777215),o):i==="signed"?this.writeOutputValue=(n,s,r)=>Lm(n,s,Ae(Math.round(r*8388607),-8388608,8388607),o):$(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,r)=>n.setUint32(s,Ae((r+1)*21474836475e-1,0,4294967295),o):i==="signed"?this.writeOutputValue=(n,s,r)=>n.setInt32(s,Ae(Math.round(r*2147483647),-2147483648,2147483647),o):i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat32(s,r,o):$(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,r)=>n.setFloat64(s,r,o):$(!1);break;default:Wt(a),$(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class Qg extends rl{constructor(e){v2(e),super(e.codec),this._accumulatedTime=0,this._encoder=new Zg(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=Ne._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Yg extends Bn{constructor(e){if(super(),this._connectedTrack=null,!Wi.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Wi.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ll{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>wt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>jt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Wi.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class zn extends ll{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new Dg(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class cl extends zn{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...wt,...gn,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Wi]}_codecUnsupportedHint(e){return new ul().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class fl extends zn{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...wt,...gn,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Wi]}}class ul extends zn{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...wt,...jt]}_codecUnsupportedHint(e){return new cl().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const dl=["video","audio","subtitle"];class ea{constructor(e,i,a,o,n){this.id=e,this.output=i,this.type=a,this.source=o,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof ea))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=ar(this.metadata.group),a=ar(e.metadata.group);for(const o of i)if(this.type!==e.type&&a.some(r=>o===r)||a.some(r=>o._pairedGroups.has(r)))return!0;return!1}}class Jg extends ea{constructor(e,i,a,o){super(e,i,"video",a,o)}}class e1 extends ea{constructor(e,i,a,o){super(e,i,"audio",a,o)}}class t1 extends ea{constructor(e,i,a,o){super(e,i,"subtitle",a,o)}}class ta{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof ta))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const On=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!$m(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&ep(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof ta)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof ta))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class i1 extends mn{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new ta,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Gs,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof ll))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof _t||e.target instanceof In))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof _t&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof _t)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof _t&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){$(this._target instanceof In);const i=this._target.getTarget(e),a=o=>{if(!(o instanceof _t))throw new TypeError("getTarget must return a Target.");return o};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){$(this._target instanceof In);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if($(this._initTarget!==null),this._initTarget instanceof _t)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof _t)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=o=>(this.state==="canceled"?o._close():this._rememberTarget(o),this._emit("target",{target:o,request:e,isRoot:!0}),this._rootTarget=o,o);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new Pn(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof nl))throw new TypeError("source must be a VideoSource.");if(On(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&fr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof dt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Jg(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof rl))throw new TypeError("source must be an AudioSource.");if(On(i),i.decoderConfig!==void 0&&ur({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof dt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new e1(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof Yg))throw new TypeError("source must be a SubtitleSource.");On(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new t1(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(Jm(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((s,r)=>s+(r.type===e.type?1:0),0),o=i[e.type].max;if(a===o)throw new Error(o===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${o} ${e.type} track${o===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(r=>`'${r}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of dl){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of dl){const o=this.tracks.reduce((s,r)=>s+(r.type===a?1:0),0),n=e[a].min;if(o<n)throw new Error(n===e[a].max?`${this.format._name} requires exactly ${n} ${a} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${a} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(Te._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const o=this.tracks.map(n=>n.source._start());await Promise.all(o)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return Te._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&Te._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(Te._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const a1={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},o1=new Set(["window","buddy","dancer"]);function hl(t){return!o1.has(t.typeId)}const n1=new Set(["bitmap","video","audio","pcm","beats","bpm","beatOffset","objectUrl","frozenFrame"]);function s1(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!n1.has(i))return a}));return JSON.stringify(e,null,2)}function r1(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>l1(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=a1[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(hl)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(hl)}))}:i.data})),e}function l1(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,beatOffset:void 0,objectUrl:null,frozenFrame:null}}function c1(t,e){const i=new Blob([e],{type:"application/json"});ni(t,i)}function ni(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const It=1280,Bt=1920,f1=30,ml=8,u1=16,pl=.97,Hn=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function gl(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:ot(t*a),height:ot(e*a)}}function d1(t,e){const i=t/Math.max(e,1);let a="16:9",o=1/0;for(const n of Hn){const s=Math.abs(i-n.rw/n.rh);s<o&&(o=s,a=n.id)}return a}function vl(t,e,i=1280){if(t<2||e<2)return gl(16,9,i);const a=Math.max(t,e),o=i/a;return{width:ot(t*o),height:ot(e*o)}}function h1(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}function bl(t){return Math.min(f1,Math.max(12,Math.round(t||30)))}function yl(t){return Math.min(32,Math.max(1,t||4))}function wl(t,e,i){const a=I(t||12,ml,u1),o=e*i/(It*720);return Math.min(20,Math.max(ml,Math.round(a*Math.max(1,o))))}const m1=Bt,p1=Bt;function Ln(t,e=!1){const i=e?m1:p1;return Vn(t.exportSettings.width,t.exportSettings.height,i,i)}async function g1(t,e,i){const{width:a,height:o,format:n,quality:s,filename:r}=e.exportSettings,l=n==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,ot(a),ot(o),l,n==="jpg"?Math.max(s,pl):s);ni(`${r}.${n==="jpg"?"jpg":"png"}`,c)}async function v1(t,e,i){const{fps:a,duration:o,filename:n,quality:s}=e.exportSettings,{width:r,height:l}=Ln(e,!1),c=nn(e),u=Math.max(1,Math.round(o*a)),d=new Rm,m=d.folder(n)??d,f=document.createElement("canvas");for(let h=0;h<u;h++){const g=c+h/a;i?.(h,u),t.paintFrame(e,g,r,l,f);const v=await _1(f,"image/png",s);m.file(`${n}_${String(h).padStart(5,"0")}.png`,await v.arrayBuffer()),await Nn()}const p=await d.generateAsync({type:"blob"});ni(`${n}_sequence.zip`,p)}async function kl(t,e,i,a=!1){const o=await Tl(t,e,k1(),i,a);ni(`${e.exportSettings.filename}.webm`,o)}async function b1(t,e,i,a=!1){try{return await y1(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(o){const n=T1();if(n){const r=await Tl(t,e,n,i,a);return ni(`${e.exportSettings.filename}.mp4`,r),"mp4 clip saved"}return await kl(t,e,i,a),`MP4 not available (${o instanceof Error?o.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function y1(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const o=bl(e.exportSettings.fps),n=yl(e.exportSettings.duration),{width:s,height:r}=Ln(e,a),l=new ze({bitrate:wl(e.exportSettings.bitrate,s,r)*1e6}),c=new cl({fastStart:"in-memory"}),d=await T2(["avc","hevc"].filter(T=>c.getSupportedVideoCodecs().includes(T)),{width:s,height:r,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const m=new vo,f=new i1({format:c,target:m}),p=new Xg({codec:d,quality:l,keyFrameInterval:1});f.addVideoTrack(p,{frameRate:o});const h=nn(e),g=await w1(f,c,e,n,h);t.resetTemporal();const v=document.createElement("canvas");await f.start();try{g&&await g.audioSource.add(g.buffer);const T=Math.max(1,Math.round(n*o)),_=1/o,M=e.exportSettings.loopClose!==!1;let E=null;for(let P=0;P<T;P++){const F=h+tn(P/o,n,e.playback.mode,1,!0);i?.(P,T),t.paintFrame(e,F,s,r,v),P===0&&M?E=Sl(v):_l(v,E,P,T,M);const z=new Re(v,{timestamp:P*_,duration:_});await p.add(z,{keyFrame:P%o===0}),z.close(),await Nn()}await f.finalize()}catch(T){try{await f.cancel()}catch{}throw T}const y=m.buffer;if(!y||y.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=y.slice(0);return ni(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"})),!!g}async function w1(t,e,i,a,o=0){const n=await Uh(Li(i));if(!n||n.length<32||n.duration<=0)return null;const s=i.exportSettings.loopClose!==!1;let r;try{r=Nh(n,a,s,o)}catch{return null}const l=Math.min(2,Math.max(1,r.numberOfChannels)),c=r.sampleRate>=46e3?48e3:44100,u=e.getSupportedAudioCodecs(),d=["aac","mp3","opus"].filter(p=>u.includes(p)),m=await _2(d.length?d:u,{numberOfChannels:l,sampleRate:c});if(!m)return null;const f=new Qg({codec:m,quality:y2,transform:{numberOfChannels:l,sampleRate:c}});return t.addAudioTrack(f),{audioSource:f,buffer:r}}async function Tl(t,e,i,a,o=!1){const n=bl(e.exportSettings.fps),s=yl(e.exportSettings.duration),{width:r,height:l}=Ln(e,o),c=document.createElement("canvas");c.width=r,c.height=l;const u=c.getContext("2d");if(!u)throw new Error("No 2d context");const d=c.captureStream(0),m=d.getVideoTracks()[0],f=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:wl(e.exportSettings.bitrate,r,l)*1e6}),p=[];f.ondataavailable=T=>{T.data.size&&p.push(T.data)},t.resetTemporal(),f.start(200);const h=nn(e),g=Math.max(1,Math.round(s*n)),v=document.createElement("canvas"),y=e.exportSettings.loopClose!==!1;let b=null;for(let T=0;T<g;T++){const _=h+tn(T/n,s,e.playback.mode,1,!0);a?.(T,g),t.paintFrame(e,_,r,l,v),T===0&&y?b=Sl(v):_l(v,b,T,g,y),u.drawImage(v,0,0,r,l),m.requestFrame?.(),await Nn()}if(await new Promise(T=>{f.onstop=()=>T(),f.stop()}),d.getTracks().forEach(T=>T.stop()),!p.length)throw new Error("recorder produced no data");return new Blob(p,{type:i})}function k1(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function T1(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function _l(t,e,i,a,o){if(!o||!e||i===0)return;const n=h1(i,a);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function Sl(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Nn(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function _1(t,e,i){return new Promise((a,o)=>{t.toBlob(n=>{n?a(n):o(new Error("frame capture failed"))},e,i)})}async function S1(t,e,i,a,o=!1){const n=e.exportSettings.format;return n==="mp4"?b1(t,e,a,o):n==="webm"?kl(t,e,a,o):n==="sequence"?v1(t,e,a):g1(t,e,i)}const x1=768,C1="sana",xl=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function M1(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),o=x1/Math.max(i,a);return{width:ot(i*o,256),height:ot(a*o,256)}}function E1(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,o=i>>8&255,n=i&255;let s=xl[0],r=1e9;for(const l of xl){const c=(a-l.r)**2+(o-l.g)**2+(n-l.b)**2;c<r&&(r=c,s=l)}return s.name}function P1(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",o="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${o}`;const n=e.map(E1).filter((s,r,l)=>l.indexOf(s)===r).slice(0,4);return`${a}, palette of ${n.join(", ")}, ${o}`}function F1(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function A1(t,e,i,a=4){const o=[];for(let n=0;n<3;n++)for(let s=0;s<3;s++){const r=Math.min(e-1,Math.floor((s+.5)/3*e)),c=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+r)*4,u=t[c],d=t[c+1],m=t[c+2],f=F1(u,d,m);o.some(h=>(h.r-u)**2+(h.g-d)**2+(h.b-m)**2<1400)||o.push({hex:f,r:u,g:d,b:m})}return o.slice(0,a).map(n=>n.hex)}function I1(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return A1(a.data,e.width,e.height)}function B1(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function R1(t,e,i,a,o=C1){const n=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(o)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${s}`}async function z1(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const o=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!o.ok)throw o.status===429||o.status>=500?new Error(`busy:${o.status}`):new Error(`Generation failed (${o.status}). Try a shorter prompt.`);const n=await o.arrayBuffer(),s=new Uint8Array(n),r=o.headers.get("content-type")||"";if(!B1(s,r))throw new Error("Generation returned no image. Try again.");const l=r.startsWith("image/")?r.split(";")[0]:"image/jpeg";return new Blob([n],{type:l})}catch(o){throw o instanceof Error&&o.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):o}finally{clearTimeout(a)}}async function O1(t){const{width:e,height:i}=M1(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let o=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await z1(R1(a,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(r){o=r instanceof Error?r:new Error(String(r))}}const n=o?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":o?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function xe(t){const e=A.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function ia(t){if(!t)return;const e=A.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Ue(t,e,i=!0){A.setProject(a=>({...a,layers:a.layers.map(o=>o.id===t?e(o):o)}),i)}function St(t,e=!0){A.setProject(i=>{const a=e?i.layers.map(o=>o.id===A.state.ui.selectedLayerId?{...o,sourceId:t.id}:o):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),A.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function H1(t){const e=A.project.sources.filter(s=>s.kind==="audio");for(const s of e)js(s);if(A.setProject(s=>{const r=s.sources.filter(u=>u.kind!=="audio"),l=s.layers.map(u=>e.some(d=>d.id===u.sourceId)?{...u,sourceId:r.find(d=>d.kind!=="audio")?.id??null}:u),c=Math.max(s.duration,t.duration||0);return{...s,sources:[...r,t],layers:l,duration:c,playback:{...s.playback,playing:!0,time:0}}}),Ya(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",o=t.beats?.length?`${t.beats.length} hits`:"",n=[i,a,o].filter(Boolean).join(" · ");A.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function bo(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&A.patchUi({status:`reading ${i.name}…`});const o=await xm(i);if(o.kind==="audio"){H1(o);continue}if(e){const n=A.state.ui.selectedSourceId;A.setProject(s=>({...s,sources:s.sources.map(r=>r.id===n?{...o,id:r.id}:r)})),A.patchUi({status:`replaced ${i.name}`})}else St(o,!0)}catch(a){A.patchUi({status:a instanceof Error?a.message:"import failed"})}}function L1(){A.setProject(e=>{const i=e.sources.find(o=>o.kind!=="audio")?.id??null,a=As(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=A.project.layers.at(-1);A.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function N1(t){A.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Be("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(s=>({...s,id:Be("fx")}));const o=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(o+1,0,a),{...e,layers:n}})}function U1(t){A.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Un(t){const e=xe(A.project);if(!e)return;const i=Fs(t);Ue(e.id,a=>({...a,effects:[...a.effects,i]})),A.patchUi({selectedEffectId:i.id})}function q1(t,e){Ue(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function Cl(t,e,i){Ue(t,a=>{const o=a.effects.findIndex(l=>l.id===e),n=o+i;if(o<0||n<0||n>=a.effects.length)return a;const s=[...a.effects],[r]=s.splice(o,1);return s.splice(n,0,r),{...a,effects:s}})}function D1(t,e){Ue(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function aa(t,e,i,a,o=!0){Ue(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:a}}:s)}),o)}function si(t,e=!1){const i=A.state.ui;(t==="all"||t==="selected")&&A.setProject(o=>({...o,seed:o.seed+1+(Date.now()&255)>>>0}),!1),A.setProject(o=>{let s=Ms(o,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e,i.includeEffects);return t==="all"&&i.includeCritters&&(s=Cs(s)),t==="all"&&i.includeIdol&&(s=Xd(s)),s});const a=A.project.layers[0]?.effects.map(o=>o.typeId).join(" · ");A.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${A.project.seed}`})}function $1(){const t=A.project,e=t.sources.find(o=>o.id===A.state.ui.selectedSourceId);if(e&&Pe(e.generator))return e;const i=xe(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&Pe(a.generator)?a:t.sources.find(o=>Pe(o.generator))}function W1(){const t=$1();if(!t){A.patchUi({status:"no collage to randomize"});return}const e=A.project.seed+Date.now()>>>0;A.setProject(a=>({...a,sources:a.sources.map(o=>o.id===t.id?eh(o,e):o)}));const i=A.project.sources.find(a=>a.id===t.id);A.patchUi({status:`field · ${i?.name??"rolled"}`})}function j1(){const t=xe(A.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(A.project.seed+Date.now())%9998;if(e){aa(t.id,e.id,"seed",i),A.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Un("critters");const a=xe(A.project),o=ia(a);a&&o?.typeId==="critters"&&aa(a.id,o.id,"seed",i),A.patchUi({status:"stamped floaters"})}function V1(){const t=xe(A.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(A.project.seed+Date.now()+17)%9998;if(e){aa(t.id,e.id,"seed",i),A.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Un("dancer");const a=xe(A.project),o=ia(a);a&&o?.typeId==="dancer"&&aa(a.id,o.id,"seed",i),A.patchUi({status:"stamped idol"})}function G1(){A.setProject(t=>th({...t,seed:t.seed+1+(Date.now()&255)>>>0})),A.patchUi({status:"new floater and idol seeds"})}async function K1(t){const e=A.project,{width:i,height:a}=Vn(e.exportSettings.width||1280,e.exportSettings.height||720,Bt,Bt);try{const o=await t.capture(e,e.playback.time,i,a,"image/png",pl),n=await $s(o,`print_${Date.now()}.png`);St(n,!0),A.patchUi({status:"printed the live frame as a new still"})}catch(o){A.patchUi({status:o instanceof Error?o.message:"print failed"})}}function Ml(t){A.setProject(e=>({...e,seed:e.seed+t>>>0}))}function El(){c1(`${A.project.name||"phosphene"}.phos.json`,s1(A.project)),A.patchUi({status:"project downloaded"})}async function X1(t){const e=await t.text(),i=r1(e);A.replace(i),A.patchUi({status:"project loaded — re-drop media if needed"})}function Z1(){const t=prompt("Preset name",`look ${A.project.presets.length+1}`);if(!t)return;const e=Zo(A.project,t);A.setProject(i=>({...i,presets:[...i.presets,e]}))}function qn(t){const e=A.project.presets.find(i=>i.id===t);e&&(A.setProject(i=>Dd(i,e)),A.patchUi({status:`preset ${e.name}`}))}function Q1(){const t=$d(A.project.presets,A.project.seed+Date.now());if(!t){A.patchUi({status:"no presets saved"});return}qn(t.id)}function Y1(t){const e=A.project.presets.find(i=>i.id===t);e&&A.setProject(i=>({...i,presets:[...i.presets,Wd(e)]}))}function J1(t){A.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Pl(){const t=A.state.ui,e=xe(A.project),i=ia(e),a=t.selectedParam?.paramId;if(!e||!i||!a){A.patchUi({status:"select a numeric parameter first"});return}const o=i.params[a];if(typeof o!="number"){A.patchUi({status:"keyframes are numeric"});return}const n={id:Be("kf"),time:A.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:o,easing:"smooth"};A.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),A.patchUi({status:`key ${a} @ ${n.time.toFixed(2)}s`})}function ev(){A.setProject(t=>({...t,keyframes:[]}))}async function tv(){const t=A.project.sources.find(i=>i.id===A.state.ui.selectedSourceId);if(!t)return;const e=await Em(t);e&&St(e,!0)}function Fl(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of A.project.sources)js(e);A.replace(Is()),A.patchUi({status:"new piece",prompt:"",generating:!1})}}async function iv(){if(A.state.ui.generating)return;const t=A.state.ui.prompt.trim();if(!t){A.patchUi({status:"type a prompt first"});return}A.patchUi({generating:!0,status:"generating new image…"});try{const e=A.project.sources.find(c=>c.id===A.state.ui.selectedSourceId),i=A.state.ui.useSourceForGen;let a=[];const o=e?.frozenFrame||e?.bitmap||e?.video||null;i&&o&&(a=I1(o));const n=P1(t,a,i&&a.length>0),s=A.project.seed+Date.now()>>>0,r=await O1({prompt:n,seed:s,width:A.project.exportSettings.width,height:A.project.exportSettings.height,onStatus:c=>A.patchUi({generating:!0,status:c},!1)}),l=await $s(r,`gen_${s}.jpg`);St(l,!0),A.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){A.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let yo=!1,oa=null;function av(t,e){oa=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tunnel / spiral / helix / bloom / prism plus Gyre, Well, Hall, Drift, Braid, and Sway are 3D fly-throughs — stamps travel in depth and around the frame so a big screen feels like you are moving through the picture. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Field locks one stamp pattern and loops it seamlessly — Sunflower, Rings, Spirograph, Ripple, March, Kaleido, or Shapeshift — until you change a slider, pick another pattern, or hit Rand field. With a song loaded the loop spans whole bars. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Chain can optionally wear Animal Chain parts (dragon, dog, ferret, caterpillar, zebra) on the same path. Hunt is a documentary camera on top of any move: watch wide, notice a stamp, snap in, follow, return. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
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
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is playing and the clip keeps that part of the song — the window you are hearing, with the visuals already synced to it. Export from the start of the track if you rewind first. Stills and PNG sequences stay silent. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li><strong>Texture</strong> — Dot Screen, Riso, Etching, Holo Foil, Crackle, Velvet Nap sit under Effects. They print, foil, or flock the collage without replacing the stamps.</li>
          <li>Bottom-right: pick a shape, tap <strong>720</strong> or <strong>1080</strong>, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). Clips save at 30 fps in HD so they stay sharp without a long wait. The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",nv(t),A.subscribe(()=>{yo||Dn(t)}),Dn(t)}async function ov(t=!1){if(oa&&!A.state.ui.exporting){A.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),A.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await S1(oa,A.project,A.project.playback.time,(i,a)=>{A.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);A.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){A.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function nv(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,o=i.dataset.id;if(a==="save"&&El(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Fl(),a==="imagine"&&iv(),a==="seed-"&&Ml(-1),a==="seed+"&&Ml(1),a==="rand-all"&&si("all"),a==="rand-wacky"&&si("all",!0),a==="cut-edit"){const n=!A.project.cutEdit?.enabled;A.setProject(s=>({...s,cutEdit:{enabled:n,seed:(s.cutEdit?.seed??s.seed)+1+(Date.now()&255)>>>0}})),A.patchUi({status:n?A.project.sources.some(s=>s.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&G1(),a==="reprint"&&oa&&K1(oa),a==="rand-sel"&&si("selected"),a==="rand-field"&&W1(),a==="rand-param"){const n=i.dataset.paramId,s=xe(A.project),r=ia(s);n&&s&&r&&A.patchUi({selectedParam:{layerId:s.id,effectId:r.id,paramId:n}},!1),si("param")}if(a==="help"&&A.patchUi({helpOpen:!A.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&tv(),a==="gen"){const n=i.dataset.kind??"plasma",s=ri(),r=i.dataset.kit??(Pe(n)?Nt(s?.collageKit):void 0),l=i.dataset.move??(Pe(n)?ss(s?.collageMove):void 0),c=!r||!s?.collageKit||r===s.collageKit,u=ii(n,r,l,dv(s,c));St(u,!0),A.patchUi({status:u.collageMove?`place · ${u.collageMove} · ${u.collageKit??""}${u.collageKitB?` · ${u.collageKitB}`:""}`:u.collageKit?`place · ${n} · ${u.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(a==="mash"){const n=i.dataset.kit??"love",s=ri();if(s){const r=s.collageKitB===n||s.collageKit===n?void 0:n;ee(l=>Al({...l,collageKitB:r}),r?`mash · ${s.collageKit??"kit"} · ${r}`:"mash off")}else{const r=ii("wallpaper","sailor","rush",{kitB:n});St(r,!0),A.patchUi({status:`mash · sailor · ${n}`})}}if(a==="wash"){const n=i.dataset.hex;n&&(ee(s=>({...s,colorA:n}),`wash · ${n}`)||(St(ii("wallpaper","sailor","rush",{wash:n}),!0),A.patchUi({status:`wash · ${n}`})))}if(a==="color-pack"){const n=Hi(i.dataset.pack),s=ri();if(s){const r=Nt(s.collageKit),l=ti(r,n),c=(s.colorA??"").toLowerCase(),u=l.some(d=>d.toLowerCase()===c);ee(d=>({...d,collageColorPack:n,colorA:u?d.colorA:l[0],colorB:vt(r,n)}),`color · ${Vo[n]}`)}else{const r=ii("wallpaper","sailor","rush",{colorPack:n});St(r,!0),A.patchUi({status:`color · ${Vo[n]}`})}}if(a==="night"){const s=!ri()?.collageNight;ee(r=>({...r,collageNight:s}),s?"night wash":"day wash")||(St(ii("wallpaper","sailor","rush",{night:!0}),!0),A.patchUi({status:"night wash"}))}if(a==="camera"){const n=Ti(i.dataset.camera);ee(s=>({...s,collageCamera:n}),n==="hunt"?"camera · documentary search":"camera · fixed")}if(a==="camera-feel"){const n=Aa(i.dataset.feel);ee(s=>({...s,collageCameraFeel:n}),`camera feel · ${n}`)}if(a==="hunt-select"){const n=Ia(i.dataset.select);ee(s=>({...s,collageHuntSelect:n}),`subject select · ${n}`)}if(a==="hunt-focus"){const s=!ri()?.collageHuntFocus;ee(r=>({...r,collageHuntFocus:s}),s?"manual focus on":"manual focus off")}if(a==="chain-animal"){const n=Ei(i.dataset.animal);ee(s=>Al({...s,collageChainAnimal:n}),n==="off"?"animal chain off":`animal chain · ${n}`)}if(a==="field-pattern"){const n=ca(i.dataset.pattern);ee(s=>({...s,collageFieldPattern:n}),`field · ${Kn[n]}`)}if(a==="stamp-critters"&&j1(),a==="stamp-idol"&&V1(),a==="add-layer"&&L1(),a==="dup-layer"&&o&&N1(o),a==="del-layer"&&o&&U1(o),a==="sel-layer"&&o&&A.patchUi({selectedLayerId:o,selectedEffectId:A.project.layers.find(n=>n.id===o)?.effects[0]?.id??null}),a==="sel-fx"&&o&&A.patchUi({selectedEffectId:o}),a==="sel-src"&&o&&A.patchUi({selectedSourceId:o}),a==="bypass"&&o){const n=xe(A.project);n&&D1(n.id,o)}if(a==="fx-up"&&o){const n=xe(A.project);n&&Cl(n.id,o,-1)}if(a==="fx-dn"&&o){const n=xe(A.project);n&&Cl(n.id,o,1)}if(a==="fx-del"&&o){const n=xe(A.project);n&&q1(n.id,o)}if(a==="key"&&Pl(),a==="key-clear"&&ev(),a==="pst-save"&&Z1(),a==="pst-rand"&&Q1(),a==="pst-load"&&o&&qn(o),a==="pst-dup"&&o&&Y1(o),a==="pst-del"&&o&&J1(o),a==="export"&&ov(),a==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));A.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:30,bitrate:Math.max(s.exportSettings.bitrate,12)}})),A.patchUi({status:`${n}s clip ready — hit Export`})}if(a==="exp-aspect"&&o){const n=Hn.find(s=>s.id===o);if(n){const s=Math.max(A.project.exportSettings.width,A.project.exportSettings.height,It),r=gl(n.rw,n.rh,Math.min(Bt,Math.max(It,s)));A.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-size"){const n=Number(i.dataset.long||It),s=A.project,r=vl(s.exportSettings.width,s.exportSettings.height,n);A.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:r.width,height:r.height,bitrate:n>=Bt?Math.max(l.exportSettings.bitrate,12):l.exportSettings.bitrate}}))}if(a==="exp-aspect-src"){const n=A.project,s=xe(n),r=n.sources.find(d=>d.id===(s?.sourceId??n.sources[0]?.id)),l=r?.kind==="audio"?n.sources.find(d=>d.kind!=="audio"):r,c=Math.max(n.exportSettings.width,n.exportSettings.height,It),u=vl(l?.width??1280,l?.height??720,Math.min(Bt,c));A.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:u.width,height:u.height}}))}if(a==="play"&&(Ya(),A.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),a==="use-src"&&o){if(A.project.sources.find(r=>r.id===o)?.kind==="audio")return;const s=xe(A.project);s&&Ue(s.id,r=>({...r,sourceId:o}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(X1(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(bo(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(bo(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(bo(i.files,!1),i.value=""),i.id==="quality"&&A.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&Un(i.value),i.value=""),i.id==="blend"){const a=xe(A.project);a&&Ue(a.id,o=>({...o,blendMode:i.value}))}if(i.id==="mask-type"){const a=xe(A.project);a&&Ue(a.id,o=>({...o,mask:{...o.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&qn(i.value),i.id==="exp-format"&&A.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&A.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&A.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&A.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&A.patchUi({includeEffects:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=A.project;if(i.id==="gen-prompt"&&A.patchUi({prompt:i.value},!1),i.id==="gen-src"&&A.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&A.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&A.patchUi({includeIdol:i.checked}),(i.id==="inc-fx"||i.id==="inc-fx-stack")&&A.patchUi({includeEffects:i.checked}),i.id==="seed"&&A.setProject(o=>({...o,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&A.setProject(o=>({...o,randomAmount:Number(i.value)}),!1),i.id==="speed"&&A.setProject(o=>({...o,playback:{...o.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&A.setProject(o=>({...o,playback:{...o.playback,loop:i.checked}}),!1),i.id==="loop-close"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&A.setProject(o=>({...o,playback:{...o.playback,freeze:i.checked}}),!1),i.id==="time"&&A.setProject(o=>({...o,playback:{...o.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const o=xe(a);o&&Ue(o.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const o=xe(a);o&&Ue(o.id,n=>({...n,enabled:i.checked}),!1)}for(const o of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${o}`&&A.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[o]:Number(i.value)}}),!1),i.id===`lfb-${o}`){const n=xe(a);n&&Ue(n.id,s=>({...s,feedback:{...s.feedback,[o]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const o=xe(a),n=i.id.slice(3);o&&n in o.transform&&Ue(o.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){yo=!0;const o=sv(i.dataset.fxType||"",i.dataset.param),n=rv(i,o);aa(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),A.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&ee(o=>({...o,collageScale:Ii(Number(i.value))}),void 0,!0),i.id==="collage-density"&&ee(o=>({...o,collageDensity:Bi(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&ee(o=>({...o,collagePace:_i(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&ee(o=>({...o,collageChainTravel:Si(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&ee(o=>({...o,collageChainMorph:xi(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&ee(o=>({...o,collageChainVary:Ci(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&ee(o=>({...o,collageChainSmooth:Mi(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&ee(o=>({...o,collageSpringStrength:fa(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&ee(o=>({...o,collageSpringDamp:ua(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&ee(o=>({...o,collageSpringDist:da(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&ee(o=>({...o,collageSpringElast:ha(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&ee(o=>({...o,collageSpringBreak:ma(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&ee(o=>({...o,collageFlowScale:pa(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&ee(o=>({...o,collageFlowTurb:ga(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&ee(o=>({...o,collageFlowEvolve:va(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&ee(o=>({...o,collageFlowForce:ba(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&ee(o=>({...o,collageFlowDepth:ya(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&ee(o=>({...o,collageBoidCohere:wa(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&ee(o=>({...o,collageBoidSep:ka(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&ee(o=>({...o,collageBoidAlign:Ta(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&ee(o=>({...o,collageBoidRadius:_a(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&ee(o=>({...o,collageBoidSpeed:Sa(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&ee(o=>({...o,collagePoleCount:xa(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&ee(o=>({...o,collagePoleAttract:Ca(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&ee(o=>({...o,collagePoleRepel:Ma(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&ee(o=>({...o,collagePoleSpeed:Ea(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&ee(o=>({...o,collagePoleFalloff:Pa(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&ee(o=>({...o,collagePoleSwitch:Fa(Number(i.value))}),void 0,!0),i.id==="collage-field-strength"&&ee(o=>({...o,collageFieldStrength:ci(Number(i.value))}),void 0,!0),i.id==="collage-field-scale"&&ee(o=>({...o,collageFieldScale:To(Number(i.value))}),void 0,!0),i.id==="collage-field-evolve"&&ee(o=>({...o,collageFieldEvolve:fi(Number(i.value))}),void 0,!0),i.id==="collage-field-density"&&ee(o=>({...o,collageFieldDensity:ui(Number(i.value))}),void 0,!0),i.id==="collage-field-density-scale"&&ee(o=>({...o,collageFieldDensityScale:_o(Number(i.value))}),void 0,!0),i.id==="collage-field-density-evolve"&&ee(o=>({...o,collageFieldDensityEvolve:So(Number(i.value))}),void 0,!0),i.id==="collage-field-flow"&&ee(o=>({...o,collageFieldFlow:xo(Number(i.value))}),void 0,!0),i.id==="collage-field-curl"&&ee(o=>({...o,collageFieldCurl:di(Number(i.value))}),void 0,!0),i.id==="collage-field-flow-scale"&&ee(o=>({...o,collageFieldFlowScale:Co(Number(i.value))}),void 0,!0),i.id==="collage-field-attract"&&ee(o=>({...o,collageFieldAttract:Mo(Number(i.value))}),void 0,!0),i.id==="collage-field-repel"&&ee(o=>({...o,collageFieldRepel:Eo(Number(i.value))}),void 0,!0),i.id==="collage-field-radius"&&ee(o=>({...o,collageFieldRadius:Po(Number(i.value))}),void 0,!0),i.id==="collage-field-inertia"&&ee(o=>({...o,collageFieldInertia:Fo(Number(i.value))}),void 0,!0),i.id==="collage-field-damp"&&ee(o=>({...o,collageFieldDamp:la(Number(i.value))}),void 0,!0),i.id==="collage-field-max-v"&&ee(o=>({...o,collageFieldMaxV:Ao(Number(i.value))}),void 0,!0),i.id==="collage-field-scale-amp"&&ee(o=>({...o,collageFieldScaleAmp:Io(Number(i.value))}),void 0,!0),i.id==="collage-field-min-scale"&&ee(o=>({...o,collageFieldMinScale:hi(Number(i.value))}),void 0,!0),i.id==="collage-field-max-scale"&&ee(o=>({...o,collageFieldMaxScale:mi(Number(i.value))}),void 0,!0),i.id==="collage-field-perturb"&&ee(o=>({...o,collageFieldPerturb:pi(Number(i.value))}),void 0,!0),i.id==="collage-field-warp"&&ee(o=>({...o,collageFieldWarp:gi(Number(i.value))}),void 0,!0),i.id==="collage-field-sparsity"&&ee(o=>({...o,collageFieldSparsity:vi(Number(i.value))}),void 0,!0),i.id==="collage-field-contrast"&&ee(o=>({...o,collageFieldContrast:bi(Number(i.value))}),void 0,!0),i.id==="collage-field-motion"&&ee(o=>({...o,collageFieldMotion:yi(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-min"&&ee(o=>({...o,collageHuntWideMin:Ba(Number(i.value))}),void 0,!0),i.id==="collage-hunt-wide-max"&&ee(o=>({...o,collageHuntWideMax:Ra(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-min"&&ee(o=>({...o,collageHuntFollowMin:za(Number(i.value))}),void 0,!0),i.id==="collage-hunt-follow-max"&&ee(o=>({...o,collageHuntFollowMax:Oa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-snap"&&ee(o=>({...o,collageHuntSnap:Ha(Number(i.value))}),void 0,!0),i.id==="collage-hunt-zoom"&&ee(o=>({...o,collageHuntZoom:La(Number(i.value))}),void 0,!0),i.id==="collage-hunt-tight"&&ee(o=>({...o,collageHuntTight:Na(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-min"&&ee(o=>({...o,collageHuntReactMin:Ua(Number(i.value))}),void 0,!0),i.id==="collage-hunt-react-max"&&ee(o=>({...o,collageHuntReactMax:qa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-precision"&&ee(o=>({...o,collageHuntPrecision:Da(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-speed"&&ee(o=>({...o,collageHuntFocusSpeed:$a(Number(i.value))}),void 0,!0),i.id==="collage-hunt-focus-error"&&ee(o=>({...o,collageHuntFocusError:Wa(Number(i.value))}),void 0,!0),i.id==="collage-hunt-variation"&&ee(o=>({...o,collageHuntVariation:ja(Number(i.value))}),void 0,!0),i.id==="exp-q"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&A.setProject(o=>({...o,exportSettings:{...o.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{yo&&(yo=!1,Dn(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),A.state.ui.dropActive||A.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&A.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),A.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&bo(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Ya(),A.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&si(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&si("all",!0),(e.key==="k"||e.key==="K")&&Pl(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Fl()),e.key==="?"&&A.patchUi({helpOpen:!A.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),El()))})}function sv(t,e){return rt(t)?.params.find(i=>i.id===e)}function rv(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Dn(t){const{project:e,ui:i}=A.state,a=t.querySelector("#proj-name"),o=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),o&&document.activeElement!==o&&(o.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const r=t.querySelector("#top-export");r&&(r.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol);const u=t.querySelector("#inc-fx");u&&(u.checked=i.includeEffects);const d=t.querySelector("#inc-fx-stack");d&&(d.checked=i.includeEffects),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(m=>{m.classList.toggle("acid",!!e.cutEdit?.enabled)}),lv(t.querySelector("#rail")),cv(t.querySelector("#stack")),uv(t.querySelector("#transport"))}function lv(t){const e=A.project,i=A.state.ui,a=e.sources.find(o=>o.id===i.selectedSourceId&&Pe(o.generator))??e.sources.find(o=>Pe(o.generator));t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Xe(i.prompt)}</textarea>
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
      ${Ct.map(o=>`<button class="btn tiny ${a?.collageKitB===o?"acid":""}" data-act="mash" data-kit="${o}">${Uc(o)}</button>`).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${Oi.map(o=>`<button class="btn tiny ${Hi(a?.collageColorPack)===o?"acid":""}" data-act="color-pack" data-pack="${o}">${Vo[o]}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${ti(Nt(a?.collageKit),a?.collageColorPack).map(o=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===o.toLowerCase()?"on":""}" data-act="wash" data-hex="${o}" style="background:${o}" title="${o}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${Ii(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${Ii(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${Bi(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${Bi(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${_i(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${_i(a?.collagePace).toFixed(2)}" />
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
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${Si(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${Si(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${xi(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${xi(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${Ci(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${Ci(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${Mi(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${Mi(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Animal Chain</div>
    <div class="row">
      ${Va.map(o=>`<button class="btn tiny ${Ei(a?.collageChainAnimal)===o?"acid":""}" data-act="chain-animal" data-animal="${o}">${ls[o]}</button>`).join("")}
    </div>`:""}
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, and camera.">Rand field</button>
    </div>
    ${a?.collageMove==="field"?`<div class="sec">Pattern</div>
    <div class="row">
      ${["auto",...Xt].map(o=>`<button class="btn tiny ${ca(a.collageFieldPattern)===o?"acid":""}" data-act="field-pattern" data-pattern="${o}">${Kn[o]}</button>`).join("")}
    </div>
    ${ne("collage-field-evolve","Tempo",fi(a.collageFieldEvolve),.08,2.2,.05)}
    ${ne("collage-field-strength","Spread",ci(a.collageFieldStrength),.2,2.2,.05)}
    ${ne("collage-field-density","Pack",ui(a.collageFieldDensity),0,2.2,.05)}
    ${ne("collage-field-sparsity","Symmetry",vi(a.collageFieldSparsity),0,2,.05)}
    ${ne("collage-field-perturb","Shuffle",pi(a.collageFieldPerturb),0,2,.05)}
    ${ne("collage-field-curl","Swirl",di(a.collageFieldCurl),0,2.2,.05)}
    ${ne("collage-field-warp","Breathe",gi(a.collageFieldWarp),0,2.2,.05)}
    ${ne("collage-field-motion","Ripple",yi(a.collageFieldMotion),0,2,.05)}
    ${ne("collage-field-contrast","Size Contrast",bi(a.collageFieldContrast),0,2.2,.05)}
    ${ne("collage-field-min-scale","Stamp Size",hi(a.collageFieldMinScale),.12,1,.02)}
    ${ne("collage-field-max-scale","Hero Size",mi(a.collageFieldMaxScale),.6,3.2,.05)}`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${ne("collage-spring-strength","Spring Strength",fa(a.collageSpringStrength),.2,2.2,.05)}
    ${ne("collage-spring-damp","Damping",ua(a.collageSpringDamp),.08,1,.02)}
    ${ne("collage-spring-dist","Connection Distance",da(a.collageSpringDist),.12,.72,.02)}
    ${ne("collage-spring-elast","Elasticity",ha(a.collageSpringElast),.2,2.2,.05)}
    ${ne("collage-spring-break","Break / Reconnect",ma(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${ne("collage-flow-scale","Field Scale",pa(a.collageFlowScale),.28,2.4,.05)}
    ${ne("collage-flow-turb","Turbulence",ga(a.collageFlowTurb),0,2,.05)}
    ${ne("collage-flow-evolve","Evolution Speed",va(a.collageFlowEvolve),.08,2.2,.05)}
    ${ne("collage-flow-force","Force",ba(a.collageFlowForce),.2,2.2,.05)}
    ${ne("collage-flow-depth","Depth Influence",ya(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${ne("collage-boid-cohere","Cohesion",wa(a.collageBoidCohere),.1,2.2,.05)}
    ${ne("collage-boid-sep","Separation",ka(a.collageBoidSep),.15,2.4,.05)}
    ${ne("collage-boid-align","Alignment",Ta(a.collageBoidAlign),.1,2.2,.05)}
    ${ne("collage-boid-radius","Perception Radius",_a(a.collageBoidRadius),.08,.55,.01)}
    ${ne("collage-boid-speed","Speed",Sa(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${ne("collage-pole-count","Pole Count",xa(a.collagePoleCount),1,5,1)}
    ${ne("collage-pole-attract","Attraction",Ca(a.collagePoleAttract),.15,2.2,.05)}
    ${ne("collage-pole-repel","Repulsion",Ma(a.collagePoleRepel),.1,2.2,.05)}
    ${ne("collage-pole-speed","Pole Speed",Ea(a.collagePoleSpeed),.12,2.2,.05)}
    ${ne("collage-pole-falloff","Falloff",Pa(a.collagePoleFalloff),.6,2.8,.05)}
    ${ne("collage-pole-switch","Polarity Switching",Fa(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Camera</div>
    <div class="row">
      ${Yn.map(o=>`<button class="btn tiny ${Ti(a?.collageCamera)===o?"acid":""}" data-act="camera" data-camera="${o}">${o==="hunt"?"Hunt":"Fixed"}</button>`).join("")}
    </div>
    ${Ti(a?.collageCamera)==="hunt"?`<div class="sec">Documentary Search</div>
    <div class="row">
      ${es.map(o=>`<button class="btn tiny ${Ia(a?.collageHuntSelect)===o?"acid":""}" data-act="hunt-select" data-select="${o}">${o==="random"?"Random":o==="reactive"?"Reactive":"Mixed"}</button>`).join("")}
    </div>
    <div class="row">
      ${Jn.map(o=>`<button class="btn tiny ${Aa(a?.collageCameraFeel)===o?"acid":""}" data-act="camera-feel" data-feel="${o}">${o==="handheld"?"Handheld":"Perfect"}</button>`).join("")}
      <button class="btn tiny ${a?.collageHuntFocus?"acid":""}" data-act="hunt-focus">Manual Focus</button>
    </div>
    ${ne("collage-hunt-wide-min","Wide / Search Duration Min",Ba(a?.collageHuntWideMin),.4,12,.1)}
    ${ne("collage-hunt-wide-max","Wide / Search Duration Max",Ra(a?.collageHuntWideMax),.6,16,.1)}
    ${ne("collage-hunt-follow-min","Subject Follow Duration Min",za(a?.collageHuntFollowMin),.4,12,.1)}
    ${ne("collage-hunt-follow-max","Subject Follow Duration Max",Oa(a?.collageHuntFollowMax),.6,16,.1)}
    ${ne("collage-hunt-snap","Snap Zoom Speed",Ha(a?.collageHuntSnap),.35,2.4,.05)}
    ${ne("collage-hunt-zoom","Zoom Range / Close Framing",La(a?.collageHuntZoom),.35,2.4,.05)}
    ${ne("collage-hunt-tight","Tracking Tightness",Na(a?.collageHuntTight),.12,1,.02)}
    ${ne("collage-hunt-react-min","Reaction Time Min",Ua(a?.collageHuntReactMin),.04,1.4,.02)}
    ${ne("collage-hunt-react-max","Reaction Time Max",qa(a?.collageHuntReactMax),.08,2,.02)}
    ${ne("collage-hunt-precision","Operator Precision",Da(a?.collageHuntPrecision),0,1,.02)}
    ${ne("collage-hunt-variation","Behavior Variation",ja(a?.collageHuntVariation),0,1,.02)}
    ${a?.collageHuntFocus?`${ne("collage-hunt-focus-speed","Focus Correction Speed",$a(a?.collageHuntFocusSpeed),.15,2.2,.05)}
    ${ne("collage-hunt-focus-error","Focus Error Amount",Wa(a?.collageHuntFocusError),0,1.6,.05)}`:""}`:""}
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
      ${e.sources.map(o=>{const n=o.kind==="audio"?`beat-sync · ${li(o.duration||0)}${o.bpm&&o.bpm>40?` · ${o.bpm}bpm`:""}`:`${o.kind} ${o.width}×${o.height}`,s=o.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${o.id}">use</button>`;return`
        <div class="thumb ${o.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${o.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Xe(o.name)}</b><span>${n}</span></div>
          ${s}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${ne("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${ne("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${ne("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${ne("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${ne("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${ne("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(o=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Xe(o.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${o.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${o.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${o.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function cv(t){const e=A.project,i=xe(e),a=ia(i),o=Ud();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${Xe(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${ne("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${Fm.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${ne("tr-x","X",i.transform.x,-1,1,.01)}
      ${ne("tr-y","Y",i.transform.y,-1,1,.01)}
      ${ne("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${ne("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${ne("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${ne("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${ne("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${ne("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${ne("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
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
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Xe(rt(n.typeId)?.name??n.typeId)}</span>
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
        ${qd.map(n=>{const s=(o[n.id]??[]).filter(r=>r.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Xe(rt(a.typeId)?.name??"params")} · ${Xe(rt(a.typeId)?.description??"")}</div>
        ${(rt(a.typeId)?.params??[]).map(n=>fv(i.id,a,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const r=Number(s.dataTransfer?.getData("text/plain")),l=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(r)||Number.isNaN(l)||r===l||Ue(i.id,c=>{const u=[...c.effects],[d]=u.splice(r,1);return u.splice(l,0,d),{...c,effects:u}})})})}function fv(t,e,i){const a=e.params[i.id]??i.default,o=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${o} ${a?"checked":""}/> ${Xe(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Xe(i.label)}</span><input type="color" ${o} value="${Xe(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Xe(i.label)}</span>
      <select ${o}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===a?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Xe(i.label)}</span>
    <input type="range" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${o} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function uv(t){const e=A.project,i=e.playback,a=e.exportSettings,o=A.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(r=>`<option ${i.mode===r?"selected":""} value="${r}">${r}</option>`).join("")}
        </select>
      </div>
      ${ne("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${li(i.time)} / ${li(n)}</span>
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
        ${Hn.map(r=>`<button class="btn tiny ${d1(a.width,a.height)===r.id?"acid":""}" data-act="exp-aspect" data-id="${r.id}">${r.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        ${(()=>{const r=Math.max(a.width,a.height);return`<button class="btn tiny ${r<=It?"acid":""}" data-act="exp-size" data-long="${It}">720</button>
        <button class="btn tiny ${r>It?"acid":""}" data-act="exp-size" data-long="${Bt}">1080</button>`})()}
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
  `,t.querySelector("#timeline")?.addEventListener("click",r=>{const l=r.currentTarget.getBoundingClientRect(),c=(r.clientX-l.left)/l.width*n;A.setProject(u=>({...u,playback:{...u.playback,time:Math.max(0,c)}}))})}function ne(t,e,i,a,o,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${o}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${o}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function ri(){const t=A.project,e=t.sources.find(o=>o.id===A.state.ui.selectedSourceId);if(e&&Pe(e.generator))return e;const i=xe(t),a=t.sources.find(o=>o.id===i?.sourceId);return a&&Pe(a.generator)?a:t.sources.find(o=>Pe(o.generator))}function dv(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,colorPack:t.collageColorPack,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,chainAnimal:t.collageChainAnimal,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,camera:t.collageCamera,cameraFeel:t.collageCameraFeel,huntWideMin:t.collageHuntWideMin,huntWideMax:t.collageHuntWideMax,huntFollowMin:t.collageHuntFollowMin,huntFollowMax:t.collageHuntFollowMax,huntSnap:t.collageHuntSnap,huntZoom:t.collageHuntZoom,huntTight:t.collageHuntTight,huntReactMin:t.collageHuntReactMin,huntReactMax:t.collageHuntReactMax,huntPrecision:t.collageHuntPrecision,huntSelect:t.collageHuntSelect,huntFocus:t.collageHuntFocus,huntFocusSpeed:t.collageHuntFocusSpeed,huntFocusError:t.collageHuntFocusError,huntVariation:t.collageHuntVariation,fieldStrength:t.collageFieldStrength,fieldScale:t.collageFieldScale,fieldEvolve:t.collageFieldEvolve,fieldDensity:t.collageFieldDensity,fieldDensityScale:t.collageFieldDensityScale,fieldDensityEvolve:t.collageFieldDensityEvolve,fieldFlow:t.collageFieldFlow,fieldCurl:t.collageFieldCurl,fieldFlowScale:t.collageFieldFlowScale,fieldAttract:t.collageFieldAttract,fieldRepel:t.collageFieldRepel,fieldRadius:t.collageFieldRadius,fieldInertia:t.collageFieldInertia,fieldDamp:t.collageFieldDamp,fieldMaxV:t.collageFieldMaxV,fieldScaleAmp:t.collageFieldScaleAmp,fieldMinScale:t.collageFieldMinScale,fieldMaxScale:t.collageFieldMaxScale,fieldPerturb:t.collageFieldPerturb,fieldWarp:t.collageFieldWarp,fieldSparsity:t.collageFieldSparsity,fieldContrast:t.collageFieldContrast,fieldMotion:t.collageFieldMotion,fieldPattern:t.collageFieldPattern,wash:e?t.colorA:void 0}}function Al(t){return!t.collageKit||!t.collageMove?t:{...t,name:Ps(t.collageMove,t.collageKit,t.collageKitB,t.collageChainAnimal)}}function ee(t,e,i=!1){const a=ri();return a?(A.setProject(o=>({...o,sources:o.sources.map(n=>n.id===a.id?t(n):n)}),!i),e&&A.patchUi({status:e},!i),!0):!1}function Xe(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function li(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Il(t,e){if(A.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),o=Math.max(16,Math.floor(a.width*i)),n=Math.max(16,Math.floor(a.height*i));(t.width!==o||t.height!==n)&&(t.width=o,t.height=n)}function hv(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${li(i)}  ${e.toFixed(0)}FPS  ${A.project.quality.toUpperCase()}`);const o=Math.max(A.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/o*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${li(i)} / ${li(o)}`);const r=t.querySelector("#time");r&&document.activeElement!==r&&(r.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=A.state.ui.status)}const Bl=window;Bl.__phospheneMark=!0;const Rl=document.querySelector("#app");if(!Rl)throw new Error("#app missing");const $n=Rl,Wn=document.createElement("canvas");async function mv(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new wm(Wn)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:$n.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}av($n,t),Bl.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Il(Wn,e)).observe(e),Il(Wn,e);let a=performance.now(),o=60,n=0,s=performance.now();function r(l){const c=Math.min(.08,(l-a)/1e3);a=l;const u=A.state.ui.exporting,d=A.project,m=dh(d,d.playback.time),f=Li(d);if(!u&&d.playback.playing&&!d.playback.freeze){const p=f?.audio&&d.playback.mode==="forward"&&!f.audio.paused&&Number.isFinite(f.audio.currentTime);if(f?.audio&&sn(f.audio,d.playback),p){const h=f.audio.currentTime;A.setProject(g=>({...g,playback:{...g.playback,time:h}}),!1)}else{let h=d.playback.time+c*m;const g=Math.max(d.duration,.001);d.playback.loop?h=(h%g+g)%g:h=Math.min(h,g),A.setProject(v=>({...v,playback:{...v.playback,time:h}}),!1),f?.audio&&d.playback.mode!=="forward"&&sn(f.audio,{...d.playback,playing:!1,time:h})}}else f?.audio&&sn(f.audio,{...d.playback,playing:!1});for(const p of A.project.sources)if(p.kind==="video"&&p.video&&!A.project.playback.freeze){const h=tn(A.project.playback.time,p.duration||p.video.duration||1,A.project.playback.mode,1,A.project.playback.loop);Pm(p,h,{playing:A.project.playback.playing,freeze:A.project.playback.freeze,mode:A.project.playback.mode,speed:A.project.playback.speed})}if(!u)try{t.render(A.project,A.project.playback.time),t.cutStatus&&t.cutStatus!==A.state.ui.status&&A.patchUi({status:t.cutStatus},!1)}catch(p){A.patchUi({status:p instanceof Error?p.message:"render error"},!1)}n++,l-s>400&&(o=n*1e3/(l-s),s=l,n=0),hv($n,o,A.project.playback.time),requestAnimationFrame(r)}requestAnimationFrame(r)}mv()})();

(function(){"use strict";function Ae(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function q(t,e,i){return Math.min(i,Math.max(e,t))}function et(t,e=16){return Math.max(e,Math.round(t)&-2)}function yn(t,e,i,a){const n=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:et(t*n),height:et(e*n)}}function Ta(t,e,i){return t+(e-t)*i}function Vr(t){const e=q(t,0,1);return e*e*(3-2*e)}const Gr=["spring","flow","boids","poles"];function _a(t){return!!t&&Gr.includes(t)}function Ci(t){return q(t??1,.2,2.2)}function Ei(t){return q(t??.55,.08,1)}function Pi(t){return q(t??.34,.12,.72)}function Mi(t){return q(t??1,.2,2.2)}function Ii(t){return q(t??2.1,1.15,3.6)}function Ai(t){return q(t??1,.28,2.4)}function Bi(t){return q(t??.8,0,2)}function Ri(t){return q(t??.7,.08,2.2)}function zi(t){return q(t??1,.2,2.2)}function Fi(t){return q(t??.7,0,1.6)}function Oi(t){return q(t??1,.1,2.2)}function Hi(t){return q(t??1,.15,2.4)}function Li(t){return q(t??1,.1,2.2)}function Ni(t){return q(t??.22,.08,.55)}function Ui(t){return q(t??1,.25,2.2)}function Di(t){return q(Math.round(t??3),1,5)}function qi(t){return q(t??1,.15,2.2)}function $i(t){return q(t??.85,.1,2.2)}function Wi(t){return q(t??.8,.12,2.2)}function ji(t){return q(t??1.4,.6,2.8)}function Vi(t){return q(t??.45,0,2)}function Kr(t){return{springStrength:Ci(t?.springStrength),springDamp:Ei(t?.springDamp),springDist:Pi(t?.springDist),springElast:Mi(t?.springElast),springBreak:Ii(t?.springBreak),flowScale:Ai(t?.flowScale),flowTurb:Bi(t?.flowTurb),flowEvolve:Ri(t?.flowEvolve),flowForce:zi(t?.flowForce),flowDepth:Fi(t?.flowDepth),boidCohere:Oi(t?.boidCohere),boidSep:Hi(t?.boidSep),boidAlign:Li(t?.boidAlign),boidRadius:Ni(t?.boidRadius),boidSpeed:Ui(t?.boidSpeed),poleCount:Di(t?.poleCount),poleAttract:qi(t?.poleAttract),poleRepel:$i(t?.poleRepel),poleSpeed:Wi(t?.poleSpeed),poleFalloff:ji(t?.poleFalloff),poleSwitch:Vi(t?.poleSwitch)}}function Xr(t,e,i,a,n,o,r){const s=n*3.15,l=a,c=o;let f=Math.sin(e*s+l*1.07+i*.35)+Math.cos(i*s*.7+l*.62)*.45+c*.55*Math.sin(e*s*2.15+t*s*.4+l*1.73),d=Math.cos(t*s+l*.91+i*.28)+Math.sin(i*s*.65+l*.48)*.42+c*.55*Math.cos(t*s*2.28+e*s*.35+l*1.41),p=(Math.sin(t*s*.82+e*s*.74+l*.57)+c*.4*Math.cos(t*s*1.6+l*1.1))*r;const u=Math.hypot(f,d,p)||1;return[f/u,d/u,p/u]}function Zr(t,e,i,a){const n=i*(.42+t*.15),o=Math.sin(e*n+t*1.3)*.34+Math.sin(e*n*.37+t)*.08,r=Math.cos(e*n*.86+t*1.9)*.28+Math.cos(e*n*.29+t*.7)*.07,s=Math.sin(e*n*.51+t*2.2)*.2,l=e*a*(.55+t*.18)+t*1.1,c=a<=.02?t&1?-1:1:Math.sin(l)>=0?1:-1;return{x:o,y:r,z:s,sign:c}}function Qr(t){return[(t.x-.5)*.78,(t.y-.5)*.64,(t.z-.5)*.52]}function Yr(t,e,i,a){const n=e.length,o={move:t,n,lastClock:i,px:new Float32Array(n),py:new Float32Array(n),pz:new Float32Array(n),vx:new Float32Array(n),vy:new Float32Array(n),vz:new Float32Array(n),homeX:new Float32Array(n),homeY:new Float32Array(n),homeZ:new Float32Array(n),links:[],linkKey:""};for(let r=0;r<n;r++){const[s,l,c]=Qr(e[r]);o.px[r]=s,o.py[r]=l,o.pz[r]=c,o.homeX[r]=s,o.homeY[r]=l,o.homeZ[r]=c,o.vx[r]=(e[r].vx-.5)*.08,o.vy[r]=(e[r].vy-.5)*.08,o.vz[r]=0}return t==="spring"&&wn(o,a.springDist),o}function wn(t,e,i=5){const a=t.n,n=[],o=new Set;for(let r=0;r<a;r++){const s=[];for(let l=0;l<a;l++){if(r===l)continue;const c=Math.hypot(t.px[r]-t.px[l],t.py[r]-t.py[l],t.pz[r]-t.pz[l]);c<e&&s.push({j:l,d:c})}s.sort((l,c)=>l.d-c.d);for(let l=0;l<Math.min(i,s.length);l++){const c=s[l].j,f=Math.min(r,c),d=Math.max(r,c),p=`${f}:${d}`;o.has(p)||(o.add(p),n.push({a:f,b:d,rest:Math.max(.04,s[l].d),on:!0}))}}return t.links=n,t.linkKey=`${a}|${e.toFixed(3)}`,n}function Ue(t,e,i){return t>i?[i-(t-i)*.15,e*-.35]:t<-i?[-i-(t+i)*.15,e*-.35]:[t,e]}function Jr(t,e,i,a){const n=t.n,o=`${n}|${a.springDist.toFixed(3)}`;t.linkKey!==o&&wn(t,a.springDist);const r=a.springStrength*(1.15+(2.2-a.springElast)*.55),s=a.springDamp/(.42+a.springElast*.5),l=a.springBreak,c=Math.sin(i*.55)*.28+Math.sin(i*.19)*.1,f=Math.cos(i*.47+.8)*.22,d=Math.sin(i*.31+1.2)*.12;for(const u of t.links){const m=t.px[u.b]-t.px[u.a],h=t.py[u.b]-t.py[u.a],v=t.pz[u.b]-t.pz[u.a],y=Math.hypot(m,h,v)||1e-5;if(u.on&&y>u.rest*l){u.on=!1;continue}if(!u.on&&y<a.springDist*.92&&(u.on=!0),!u.on)continue;const b=y-u.rest,w=r*b,T=m/y,_=h/y,M=v/y;t.vx[u.a]+=T*w*e,t.vy[u.a]+=_*w*e,t.vz[u.a]+=M*w*e,t.vx[u.b]-=T*w*e,t.vy[u.b]-=_*w*e,t.vz[u.b]-=M*w*e}const p=Math.exp(-s*7*e);for(let u=0;u<n;u++){const m=t.homeX[u]-t.px[u],h=t.homeY[u]-t.py[u],v=t.homeZ[u]-t.pz[u];t.vx[u]+=m*.35*e,t.vy[u]+=h*.35*e,t.vz[u]+=v*.35*e;const y=Math.hypot(t.px[u]-c,t.py[u]-f,t.pz[u]-d);if(y<.24){const b=(.24-y)/.24;t.vx[u]+=(c-t.px[u])*b*1.8*e,t.vy[u]+=(f-t.py[u])*b*1.8*e,t.vz[u]+=(d-t.pz[u])*b*1.1*e}t.vx[u]*=p,t.vy[u]*=p,t.vz[u]*=p,t.px[u]+=t.vx[u]*e,t.py[u]+=t.vy[u]*e,t.pz[u]+=t.vz[u]*e,[t.px[u],t.vx[u]]=Ue(t.px[u],t.vx[u],.5),[t.py[u],t.vy[u]]=Ue(t.py[u],t.vy[u],.42),[t.pz[u],t.vz[u]]=Ue(t.pz[u],t.vz[u],.36)}}function es(t,e,i,a){const n=i*a.flowEvolve,o=a.flowForce*.95;for(let r=0;r<t.n;r++){const[s,l,c]=Xr(t.px[r],t.py[r],t.pz[r],n,a.flowScale,a.flowTurb,a.flowDepth);t.vx[r]+=s*o*e,t.vy[r]+=l*o*e,t.vz[r]+=c*o*e,t.vx[r]*=.9,t.vy[r]*=.9,t.vz[r]*=.9,t.px[r]+=t.vx[r]*e*.85,t.py[r]+=t.vy[r]*e*.85,t.pz[r]+=t.vz[r]*e*.7,[t.px[r],t.vx[r]]=Ue(t.px[r],t.vx[r],.5),[t.py[r],t.vy[r]]=Ue(t.py[r],t.vy[r],.42),[t.pz[r],t.vz[r]]=Ue(t.pz[r],t.vz[r],.34)}}function ts(t,e,i){const a=t.n,n=i.boidRadius,o=n*n,r=.18+i.boidSpeed*.28,s=new Float32Array(a),l=new Float32Array(a),c=new Float32Array(a);for(let f=0;f<a;f++){let d=0,p=0,u=0,m=0,h=0,v=0,y=0,b=0,w=0,T=0;for(let _=0;_<a;_++){if(f===_)continue;const M=t.px[_]-t.px[f],E=t.py[_]-t.py[f],A=t.pz[_]-t.pz[f],I=M*M+E*E+A*A;if(I>o||I<1e-8)continue;T++,d+=t.px[_],p+=t.py[_],u+=t.pz[_],y+=t.vx[_],b+=t.vy[_],w+=t.vz[_];const N=Math.sqrt(I),$=(n-N)/n;m-=M/N*$,h-=E/N*$,v-=A/N*$}T&&(s[f]+=(d/T-t.px[f])*i.boidCohere*1.15,l[f]+=(p/T-t.py[f])*i.boidCohere*1.15,c[f]+=(u/T-t.pz[f])*i.boidCohere*1.15,s[f]+=m*i.boidSep*1.8,l[f]+=h*i.boidSep*1.8,c[f]+=v*i.boidSep*1.8,s[f]+=(y/T-t.vx[f])*i.boidAlign*1.35,l[f]+=(b/T-t.vy[f])*i.boidAlign*1.35,c[f]+=(w/T-t.vz[f])*i.boidAlign*1.35),s[f]+=-t.px[f]*.22,l[f]+=-t.py[f]*.22,c[f]+=-t.pz[f]*.18}for(let f=0;f<a;f++){t.vx[f]+=s[f]*e,t.vy[f]+=l[f]*e,t.vz[f]+=c[f]*e;const d=Math.hypot(t.vx[f],t.vy[f],t.vz[f])||1;if(d>r){const p=r/d;t.vx[f]*=p,t.vy[f]*=p,t.vz[f]*=p}t.px[f]+=t.vx[f]*e,t.py[f]+=t.vy[f]*e,t.pz[f]+=t.vz[f]*e,[t.px[f],t.vx[f]]=Ue(t.px[f],t.vx[f],.5),[t.py[f],t.vy[f]]=Ue(t.py[f],t.vy[f],.42),[t.pz[f],t.vz[f]]=Ue(t.pz[f],t.vz[f],.34)}}function is(t,e,i,a){const n=[];for(let r=0;r<a.poleCount;r++)n.push(Zr(r,i,a.poleSpeed,a.poleSwitch));const o=a.poleFalloff;for(let r=0;r<t.n;r++){let s=0,l=0,c=0;for(const f of n){const d=f.x-t.px[r],p=f.y-t.py[r],u=f.z-t.pz[r],m=Math.hypot(d,p,u)||1e-4,h=(f.sign>0?a.poleAttract:a.poleRepel)/(m**o+.06),v=f.sign>0?1:-1;if(s+=d/m*h*v*.55,l+=p/m*h*v*.55,c+=u/m*h*v*.32,s+=-p/m*h*.28,l+=d/m*h*.28,m<.1){const y=(.1-m)*10;s-=d/m*y,l-=p/m*y,c-=u/m*y*.6}}for(let f=0;f<t.n;f++){if(r===f)continue;const d=t.px[r]-t.px[f],p=t.py[r]-t.py[f],u=t.pz[r]-t.pz[f],m=d*d+p*p+u*u;if(m>.018||m<1e-8)continue;const h=Math.sqrt(m),v=(.135-h)*2.4;s+=d/h*v,l+=p/h*v,c+=u/h*v*.5}t.vx[r]+=s*e-t.px[r]*.2*e,t.vy[r]+=l*e-t.py[r]*.2*e,t.vz[r]+=c*e-t.pz[r]*.16*e,t.vx[r]*=.9,t.vy[r]*=.9,t.vz[r]*=.9,t.px[r]+=t.vx[r]*e*.85,t.py[r]+=t.vy[r]*e*.85,t.pz[r]+=t.vz[r]*e*.6,[t.px[r],t.vx[r]]=Ue(t.px[r],t.vx[r],.42),[t.py[r],t.vy[r]]=Ue(t.py[r],t.vy[r],.36),[t.pz[r],t.vz[r]]=Ue(t.pz[r],t.vz[r],.3)}}function as(t,e,i,a,n){const o=i.length;let r=t;(!r||r.move!==e||r.n!==o||a<r.lastClock-.04||a-r.lastClock>1.6)&&(r=Yr(e,i,a,n));let s=a-r.lastClock;if(s<=1e-5)return r;s=Math.min(s,.05);const l=s>.028?2:1,c=s/l;for(let f=0;f<l;f++)e==="spring"?Jr(r,c,a,n):e==="flow"?es(r,c,a,n):e==="boids"?ts(r,c,n):is(r,c,a,n);return r.lastClock=a,r}function ns(t,e,i){if(e<0||e>=t.n)return null;const a=Math.max(.46,1.06-t.pz[e]*.52),n=q(1.1/a,.55,1.7);return{x:q(t.px[e]/a,-.48,.48),y:q(t.py[e]/a,-.4,.4),px:q((.07+i*.03)*n,.05,.22),rot:Math.atan2(t.vy[e],t.vx[e]),alpha:q(.55+n*.4,.5,1)}}const kn=["heraldry","wallpaper","giants","shower"],yt=["sailor","circus","fruit","nature","love","space","sweet","music","kitchen","weather","city","arcade"],Tn=["rush","tunnel","bloom","spiral","helix","prism","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","clap","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles"],os=["bars","ripple","swing","burst","halo","clap","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function _n(t){return!!t&&os.includes(t)}const $t={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",clap:"CLAP",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP",chain:"CHAIN",spring:"SPRING",flow:"FLOW",boids:"BOIDS",poles:"POLES"};function Ie(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function zt(t){return yt.includes(t)?t:"sailor"}function xn(t){return Tn.includes(t)?t:"rush"}const Sn=["rush","tunnel","bloom","spiral","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","clap","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap","chain","spring","flow","boids","poles"];function xa(t){return Sn[(t>>>0)%Sn.length]}function Wt(t){return q(t??1,.35,1.2)}function jt(t){return q(t??1,.2,2.2)}function Vt(t){return q(t??.7,.12,2)}function Gt(t){return q(t??1,.2,2)}function Kt(t){return q(t??.72,.12,1)}function Cn(t,e,i,a){const n=we(t)*Math.PI*2,o=q(i,.2,2),r=q(a,.12,1),s=1-r,l=e*.68,c=e*(.95+s*.55),f=e*(.45+s*1.55),d=(Ge,Ne,g)=>(Ge+Ne*o)*(.42+.58*(.5+.5*Math.sin(g))),p=.84+.22*Math.sin(l+.4),u=.8+.24*Math.cos(l*.87+1.1),m=.7+.32*Math.sin(l*.61+2.2),h=(.2+.12*o)*p,v=d(.04,.07,c+.3)*(.4+r*.6),y=d(.02,.08,f+1.4)*(.18+s*.95),b=d(.01,.06,f*1.3+.8)*s,w=d(.006,.035,c*1.6+2.1)*s*s,T=(.17+.11*o)*u,_=d(.035,.065,c+1.7)*(.4+r*.6),M=d(.02,.07,f+.6)*(.18+s*.95),E=d(.01,.055,f*1.2+2.4)*s,A=d(.006,.03,c*1.4+.5)*s*s,I=(.13+.11*o)*m,N=d(.04,.08,c+2)*(.45+r*.55),$=d(.02,.07,f+1.9)*(.18+s*.95),S=d(.012,.055,f*.9+.2)*s;let R=Math.cos(n+l*.18)*h+Math.cos(2*n+c*.14+.7)*v+Math.sin(3*n+l*.11+1.2)*y+Math.cos(4*n+f*.09+.4)*b+Math.sin(5*n+c*.16+2.2)*w,k=Math.sin(n+l*.15+.5)*T+Math.sin(2*n+c*.19+1.4)*_+Math.cos(3*n+l*.09+.3)*M+Math.sin(4*n+f*.12+1.8)*E+Math.cos(5*n+c*.08+.9)*A,H=Math.sin(n+l*.12+1.1)*I+Math.cos(2*n+c*.17+.6)*N+Math.sin(3*n+f*.1+2.5)*$+Math.cos(4*n+l*.13+1.6)*S;const J=Math.sin(2*n+c*.22)*s*.12*o;H+=J;const D=l*.19+Math.sin(c*.27)*.55,ne=Math.sin(l*.29+.8)*(.28+.18*o),K=Math.cos(l*.23+1.5)*(.2+s*.4),re=Math.cos(D),O=Math.sin(D),F=R*re-H*O,oe=R*O+H*re,ee=Math.cos(ne),Y=Math.sin(ne),ye=k*ee-oe*Y,Pe=k*Y+oe*ee,fe=Math.cos(K),he=Math.sin(K),Ee=F*fe-ye*he,_e=F*he+ye*fe;return{x:Ee+Math.sin(l*.47)*.06*o,y:_e+Math.cos(l*.39+1.3)*.05*o,z:Pe+Math.sin(c*.21+.6)*.07*o}}function tt(t,e=1){return(t>40?t/60:2)*e}function rs(t,e,i=1){return we(t*tt(e,i))}function ss(t,e,i=1){const a=Math.cos(rs(t,e,i)*Math.PI*2);return a>0?a*a:0}function En(t,e,i=1){return Math.floor(Math.max(0,t)*tt(e,i))}function Gi(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function Pn(t,e){return e&&Tn.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const Xt=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a"],Sa={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a",kitchen:"#e85a2a",weather:"#4aa8e8",city:"#f0c020",arcade:"#7cff6a"};function ls(t){return t==="nature"?"Grove":t==="weather"?"Sky":t==="city"?"Street":t[0].toUpperCase()+t.slice(1)}const cs={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","star","moon","crab","helm","lighthouse","compass"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","moon","star","figure","popcorn","cane","mask","dice","flag"],fruit:["pear","lemon","cherry","leaf","mushroom","flower","sun","cloud","bolt","umbrella","bird","apple","banana","grape","chili"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","drop","moth","bird","rabbit","snail","fern","rain","flake"],love:["heart","wingfig","swan","cat","crown","moon","star","key","ring","envelope","bow","potion","house","rose","diamond","candle"],space:["rocket","planet","saturn","ufo","comet","satellite","star","moon","alien","asteroid","telescope"],sweet:["lolly","coneice","cupcake","donut","candy","cherry","heart","cookie","waffle","toast"],music:["note","vinyl","headphone","mic","speaker","star","heart","guitar","drum","piano","clef"],kitchen:["kettle","mug","whisk","toast","egg","spoon","chili","bottle","apple","sun"],weather:["rain","flake","wind","rainbow","thermo","cloud","bolt","sun","umbrella","drop","moon"],city:["taxi","hydrant","bike","lamp","signal","bus","house","key","star"],arcade:["stick","dice","coin","pawn","cart","flag","star","heart","alien"]},Mn={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm"],circus:["elephant","tent","horse","balloon","figure","mask"],fruit:["pear","lemon","mushroom","sun","umbrella","apple","banana"],nature:["tree","deer","owl","fox","mountain","rabbit"],love:["heart","wingfig","swan","cat","house","rose"],space:["rocket","saturn","ufo","planet","comet","alien"],sweet:["lolly","cupcake","donut","coneice","candy","waffle"],music:["vinyl","headphone","speaker","note","mic","guitar","piano"],kitchen:["kettle","toast","bottle","egg","chili"],weather:["rainbow","umbrella","cloud","sun","thermo"],city:["taxi","bus","house","lamp","signal"],arcade:["stick","cart","pawn","alien","flag"]},In={sailor:["starfish","shell","star","fish","anchor","crab","compass"],circus:["ball","star","balloon","bow","ticket","popcorn","cane"],fruit:["cherry","leaf","star","drop","lemon","grape","apple"],nature:["leaf","acorn","drop","moth","bird","snail","fern"],love:["heart","star","key","moon","ring","diamond","candle"],space:["star","moon","comet","satellite","planet","asteroid"],sweet:["candy","heart","lolly","cherry","donut","cookie"],music:["note","star","heart","vinyl","mic","clef","drum"],kitchen:["spoon","egg","chili","mug","star"],weather:["flake","drop","star","rain","bolt"],city:["hydrant","bike","star","coin","key"],arcade:["dice","coin","star","heart","pawn"]},Zt=144;function An(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function De(t,e){return e[Math.floor(t()*e.length)%e.length]}function Bn(t,e){return t()<.32?e:De(t,Xt)}function fs(t,e="rush"){return e==="tunnel"?Mn[t]:e==="lattice"?In[t]:cs[t]}function us(t,e,i,a){const n=fs(a,e==="bloom"?"rush":e);let o=De(t,n);e==="lattice"&&t()<.4&&(o=De(t,In[a])),e==="tunnel"&&t()<.28&&(o=De(t,Mn[a]));const r=Bn(t,i);let s=Bn(t,i);return s===r&&(s=De(t,Xt)),{kind:o,pattern:t()<.58?"plain":De(t,["polka","hoop","half","bar"]),a:r,b:s,mirror:t()>.5}}function ds(t){return t>.5?q((t-.5)/.5,0,1):0}function hs(t,e,i){const a=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t)*n)*11+5>>>0)%a}function Qt(t){return q(t??1,.5,2)}function Yt(t){return q(t??1,.35,2)}function ms(t,e,i="sailor",a){const n=Ae(t>>>0),o=240,r=a&&a!==i?a:null,s=[];for(let l=0;l<o;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",f=r&&l&1?r:i;s.push({x:n(),y:n(),z:n(),rot:(n()-.5)*.55,size:.55+n()*.9,vx:(n()-.5)*.06,vy:(n()-.35)*.08,vr:(n()-.5)*.25,charge:us(n,c,e,f)})}return s}function ps(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function gs(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,n=e&255;return(.22*i+.7*a+.08*n)/255}function Rn(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const n=i.a,o=i.b,r=a*2.4;if(t.fillStyle=n,t.fillRect(-r,-r,r*2,r*2),t.fillStyle=o,i.pattern==="polka"){const s=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*s,l*s,s*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=o,t.lineWidth=a*.14;for(let s=1;s<=3;s++)t.beginPath(),t.arc(0,0,a*(.28*s),0,Math.PI*2),t.stroke()}else i.pattern==="half"?t.fillRect(0,-r,r,r*2):i.pattern==="bar"&&t.fillRect(-r,-a*.18,r*2,a*.36);t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=gs(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function zn(t,e,i,a=.42){for(let n=0;n<i*2;n++){const o=n%2===0?e:e*a,r=n*Math.PI/i-Math.PI/2,s=Math.cos(r)*o,l=Math.sin(r)*o;n===0?t.moveTo(s,l):t.lineTo(s,l)}t.closePath()}function vs(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function bs(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function Fn(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function ys(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function ws(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function ks(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Ts(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,n=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*n,-Math.cos(a)*n*.85)}t.closePath()}function _s(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function xs(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function Ss(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Cs(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Es(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function Ps(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function Ms(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Is(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function As(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function Bs(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function Rs(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function zs(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function Fs(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function Os(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function Hs(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function Ls(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function Ns(t,e){zn(t,e,8,.55)}function Us(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function Ds(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function qs(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function $s(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Ws(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function js(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Vs(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Gs(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function Ks(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function Xs(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Zs(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function Qs(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function Ys(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function Js(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),Fn(t,e*.72)}function el(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function tl(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function il(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function al(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function nl(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function ol(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function rl(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function sl(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function ll(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function cl(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function fl(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function ul(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function dl(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function hl(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function ml(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function pl(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function gl(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function vl(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function bl(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function yl(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function wl(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function kl(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function Tl(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function _l(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function xl(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function Sl(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function Cl(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function El(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function Pl(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function Ml(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function Il(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function Al(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function Bl(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function Rl(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function zl(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function Fl(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function Ol(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function Hl(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function Ll(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function Nl(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function Ul(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function Dl(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function ql(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function $l(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function Wl(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function jl(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function Vl(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function Gl(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function Kl(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function Xl(t,e){t.moveTo(-e*.55,e*.15),t.quadraticCurveTo(-e*.62,-e*.55,0,-e*.58),t.quadraticCurveTo(e*.62,-e*.55,e*.5,e*.15),t.lineTo(e*.48,e*.72),t.lineTo(-e*.52,e*.72),t.closePath(),t.moveTo(e*.48,-e*.12),t.quadraticCurveTo(e*.95,-e*.05,e*.82,e*.32),t.lineTo(e*.62,e*.22),t.quadraticCurveTo(e*.72,0,e*.48,0),t.closePath(),t.moveTo(-e*.12,-e*.55),t.lineTo(-e*.08,-e*.88),t.lineTo(e*.18,-e*.88),t.lineTo(e*.14,-e*.55),t.closePath()}function Zl(t,e){t.moveTo(-e*.55,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.48,e*.72),t.lineTo(-e*.6,e*.72),t.closePath(),t.moveTo(e*.42,-e*.22),t.quadraticCurveTo(e*.95,-e*.15,e*.92,e*.28),t.quadraticCurveTo(e*.88,e*.52,e*.45,e*.42),t.lineTo(e*.42,e*.22),t.quadraticCurveTo(e*.7,e*.28,e*.72,.05*e),t.quadraticCurveTo(e*.7,-e*.12,e*.42,-e*.08),t.closePath()}function Ql(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.ellipse(0,-e*.42,e*.42,e*.52,0,0,Math.PI*2)}function Yl(t,e){t.moveTo(-e*.72,-e*.15),t.quadraticCurveTo(-e*.7,-e*.85,-e*.2,-e*.75),t.quadraticCurveTo(0,-e*.98,e*.22,-e*.75),t.quadraticCurveTo(e*.72,-e*.85,e*.7,-e*.12),t.lineTo(e*.68,e*.78),t.lineTo(-e*.7,e*.78),t.closePath()}function Jl(t,e){t.ellipse(0,e*.08,e*.58,e*.82,0,0,Math.PI*2)}function ec(t,e){t.ellipse(0,-e*.55,e*.38,e*.42,0,0,Math.PI*2),t.moveTo(-e*.1,-e*.15),t.lineTo(e*.1,-e*.15),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function tc(t,e){t.moveTo(e*.15,-e*.85),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.85),t.quadraticCurveTo(-e*.15,e*.35,e*.05,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.75,e*.72),t.quadraticCurveTo(-e*.95,0,e*.15,-e*.85),t.closePath()}function ic(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(e*.48,-e*.22),t.lineTo(e*.48,e*.88),t.lineTo(-e*.48,e*.88),t.lineTo(-e*.48,-e*.22),t.lineTo(-e*.22,-e*.45),t.closePath()}function ac(t,e){t.moveTo(-e*.55,-e*.15),t.quadraticCurveTo(-e*.15,-e*.95,e*.45,-e*.35),t.quadraticCurveTo(e*.85,-e*.15,e*.55,e*.15),t.quadraticCurveTo(-e*.05,e*.05,-e*.55,-e*.15),t.closePath(),t.moveTo(-e*.28,e*.22),t.lineTo(-e*.18,e*.72),t.lineTo(-e*.02,e*.22),t.closePath(),t.moveTo(e*.08,e*.28),t.lineTo(e*.2,e*.85),t.lineTo(e*.32,e*.28),t.closePath()}function nc(t,e){for(let i=0;i<6;i++){const a=i/6*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(a)*e*.9,Math.sin(a)*e*.9),t.lineTo(Math.cos(a+.18)*e*.35,Math.sin(a+.18)*e*.35),t.closePath()}}function oc(t,e){t.moveTo(-e*.95,-e*.35),t.quadraticCurveTo(0,-e*.7,e*.55,-e*.22),t.quadraticCurveTo(e*.95,0,e*.45,e*.08),t.quadraticCurveTo(-e*.15,-e*.28,-e*.95,-e*.08),t.closePath(),t.moveTo(-e*.85,e*.28),t.quadraticCurveTo(0,e*.05,e*.72,e*.42),t.quadraticCurveTo(e*.15,e*.62,-e*.85,e*.55),t.closePath()}function rc(t,e){t.moveTo(-e*.95,e*.55),t.quadraticCurveTo(0,-e*1.05,e*.95,e*.55),t.lineTo(e*.62,e*.55),t.quadraticCurveTo(0,-e*.45,-e*.62,e*.55),t.closePath()}function sc(t,e){t.moveTo(-e*.16,-e*.95),t.lineTo(e*.16,-e*.95),t.lineTo(e*.16,e*.28),t.arc(0,e*.52,e*.38,-Math.PI*.35,Math.PI*1.35,!1),t.lineTo(-e*.16,e*.28),t.closePath()}function lc(t,e){t.moveTo(-e*.92,e*.12),t.lineTo(-e*.55,-e*.22),t.lineTo(-e*.15,-e*.55),t.lineTo(e*.35,-e*.55),t.lineTo(e*.72,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.95,e*.45),t.lineTo(-e*.92,e*.45),t.closePath(),t.arc(-e*.48,e*.62,e*.22,0,Math.PI*2),t.moveTo(e*.72,e*.62),t.arc(e*.48,e*.62,e*.22,0,Math.PI*2)}function cc(t,e){t.moveTo(-e*.28,-e*.55),t.lineTo(e*.28,-e*.55),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.moveTo(-e*.55,-e*.15),t.lineTo(e*.55,-e*.15),t.lineTo(e*.55,e*.12),t.lineTo(-e*.55,e*.12),t.closePath(),t.moveTo(-e*.42,e*.55),t.lineTo(e*.42,e*.55),t.lineTo(e*.42,e*.82),t.lineTo(-e*.42,e*.82),t.closePath()}function fc(t,e){t.arc(-e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(e*.82,e*.35),t.arc(e*.48,e*.35,e*.38,0,Math.PI*2),t.moveTo(-e*.48,e*.35),t.lineTo(0,e*.22),t.lineTo(e*.48,e*.35),t.lineTo(e*.12,-e*.35),t.lineTo(-e*.22,-e*.15),t.closePath()}function uc(t,e){t.moveTo(-e*.08,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(e*.06,e*.05),t.lineTo(-e*.06,e*.05),t.closePath(),t.moveTo(-e*.42,e*.08),t.lineTo(0,-e*.85),t.lineTo(e*.42,e*.08),t.closePath()}function dc(t,e){t.moveTo(-e*.32,-e*.95),t.lineTo(e*.32,-e*.95),t.lineTo(e*.32,e*.55),t.lineTo(-e*.32,e*.55),t.closePath(),t.arc(0,-e*.55,e*.16,0,Math.PI*2),t.moveTo(e*.16,-e*.05),t.arc(0,-e*.05,e*.16,0,Math.PI*2),t.moveTo(e*.16,e*.42),t.arc(0,e*.28,e*.16,0,Math.PI*2),t.moveTo(-e*.08,e*.55),t.lineTo(e*.08,e*.55),t.lineTo(e*.08,e*.95),t.lineTo(-e*.08,e*.95),t.closePath()}function hc(t,e){t.moveTo(-e*.95,-e*.35),t.lineTo(e*.72,-e*.35),t.lineTo(e*.95,0),t.lineTo(e*.95,e*.42),t.lineTo(-e*.95,e*.42),t.closePath(),t.arc(-e*.48,e*.62,e*.2,0,Math.PI*2),t.moveTo(e*.62,e*.62),t.arc(e*.42,e*.62,e*.2,0,Math.PI*2)}function mc(t,e){t.moveTo(-e*.22,-e*.15),t.lineTo(e*.22,-e*.15),t.lineTo(e*.18,e*.95),t.lineTo(-e*.18,e*.95),t.closePath(),t.arc(-e*.42,-e*.42,e*.32,0,Math.PI*2),t.moveTo(e*.74,-e*.42),t.arc(e*.42,-e*.42,e*.32,0,Math.PI*2)}function pc(t,e){t.moveTo(-e*.55,-e*.15),t.lineTo(0,-e*.72),t.lineTo(e*.75,-e*.22),t.lineTo(e*.75,e*.48),t.lineTo(0,e*.88),t.lineTo(-e*.55,e*.42),t.closePath()}function gc(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.42,0),t.arc(0,0,e*.42,0,Math.PI*2)}function vc(t,e){t.arc(0,-e*.55,e*.28,0,Math.PI*2),t.moveTo(-e*.22,-e*.28),t.lineTo(e*.22,-e*.28),t.lineTo(e*.32,e*.35),t.lineTo(e*.62,e*.85),t.lineTo(-e*.62,e*.85),t.lineTo(-e*.32,e*.35),t.closePath()}function bc(t,e){t.moveTo(-e*.85,e*.05),t.lineTo(e*.72,e*.05),t.lineTo(e*.55,e*.48),t.lineTo(-e*.72,e*.48),t.closePath(),t.arc(-e*.38,e*.68,e*.18,0,Math.PI*2),t.moveTo(e*.48,e*.68),t.arc(e*.28,e*.68,e*.18,0,Math.PI*2),t.moveTo(-e*.05,e*.02),t.lineTo(e*.08,-e*.75),t.lineTo(e*.42,-e*.55),t.lineTo(e*.28,e*.02),t.closePath()}function yc(t,e){t.moveTo(-e*.55,-e*.95),t.lineTo(-e*.38,-e*.95),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.55,e*.95),t.closePath(),t.moveTo(-e*.35,-e*.88),t.lineTo(e*.85,-e*.45),t.lineTo(-e*.35,-e*.05),t.closePath()}function wc(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":zn(t,i,5,e==="starfish"?.42:.4);break;case"heart":vs(t,i);break;case"moon":bs(t,i);break;case"figure":Fn(t,i);break;case"fish":ys(t,i);break;case"anchor":ws(t,i);break;case"wave":ks(t,i);break;case"shell":Ts(t,i);break;case"boat":_s(t,i);break;case"tail":xs(t,i);break;case"swallow":Ss(t,i);break;case"elephant":Cs(t,i);break;case"tent":Es(t,i);break;case"ball":Ps(t,i);break;case"bow":Ms(t,i);break;case"horse":Is(t,i);break;case"balloon":As(t,i);break;case"ticket":Bs(t,i);break;case"pear":Rs(t,i);break;case"lemon":zs(t,i);break;case"cherry":Fs(t,i);break;case"leaf":Os(t,i);break;case"mushroom":Hs(t,i);break;case"flower":Ls(t,i);break;case"sun":Ns(t,i);break;case"cloud":Us(t,i);break;case"bolt":Ds(t,i);break;case"umbrella":qs(t,i);break;case"bird":$s(t,i);break;case"tree":Ws(t,i);break;case"deer":js(t,i);break;case"fox":Vs(t,i);break;case"owl":Gs(t,i);break;case"acorn":Ks(t,i);break;case"cone":Xs(t,i);break;case"mountain":Zs(t,i);break;case"drop":Qs(t,i);break;case"moth":Ys(t,i);break;case"wingfig":Js(t,i);break;case"swan":el(t,i);break;case"cat":tl(t,i);break;case"crown":il(t,i);break;case"key":al(t,i);break;case"ring":nl(t,i);break;case"envelope":ol(t,i);break;case"potion":rl(t,i);break;case"rocket":ll(t,i);break;case"planet":cl(t,i);break;case"saturn":fl(t,i);break;case"ufo":ul(t,i);break;case"comet":dl(t,i);break;case"satellite":hl(t,i);break;case"lolly":ml(t,i);break;case"coneice":pl(t,i);break;case"cupcake":gl(t,i);break;case"donut":vl(t,i);break;case"candy":bl(t,i);break;case"note":yl(t,i);break;case"vinyl":wl(t,i);break;case"headphone":kl(t,i);break;case"mic":Tl(t,i);break;case"speaker":_l(t,i);break;case"crab":xl(t,i);break;case"helm":Sl(t,i);break;case"lighthouse":Cl(t,i);break;case"compass":El(t,i);break;case"popcorn":Pl(t,i);break;case"cane":Ml(t,i);break;case"mask":Il(t,i);break;case"apple":Al(t,i);break;case"banana":Bl(t,i);break;case"grape":Rl(t,i);break;case"rabbit":zl(t,i);break;case"snail":Fl(t,i);break;case"fern":Ol(t,i);break;case"rose":Hl(t,i);break;case"diamond":Ll(t,i);break;case"candle":Nl(t,i);break;case"alien":Ul(t,i);break;case"asteroid":Dl(t,i);break;case"telescope":ql(t,i);break;case"cookie":$l(t,i);break;case"waffle":Wl(t,i);break;case"guitar":jl(t,i);break;case"drum":Vl(t,i);break;case"piano":Gl(t,i);break;case"clef":Kl(t,i);break;case"kettle":Xl(t,i);break;case"mug":Zl(t,i);break;case"whisk":Ql(t,i);break;case"toast":Yl(t,i);break;case"egg":Jl(t,i);break;case"spoon":ec(t,i);break;case"chili":tc(t,i);break;case"bottle":ic(t,i);break;case"rain":ac(t,i);break;case"flake":nc(t,i);break;case"wind":oc(t,i);break;case"rainbow":rc(t,i);break;case"thermo":sc(t,i);break;case"taxi":lc(t,i);break;case"hydrant":cc(t,i);break;case"bike":fc(t,i);break;case"lamp":uc(t,i);break;case"signal":dc(t,i);break;case"bus":hc(t,i);break;case"stick":mc(t,i);break;case"dice":pc(t,i);break;case"coin":gc(t,i);break;case"pawn":vc(t,i);break;case"cart":bc(t,i);break;case"flag":yc(t,i);break;default:sl(t,i);break}}function kc(t,e,i){const a=()=>wc(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Rn(t,a,e,i),t.restore();return}Rn(t,a,e,i)}function Tc(t){const e=document.createElement("canvas");e.width=Zt,e.height=Zt;const i=e.getContext("2d");return i&&(i.translate(Zt/2,Zt/2),kc(i,t,Zt*.38)),e}class _c{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];sim=null;builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=ps(e);let a=this.stamps.get(i);return a||(a=Tc(e),this.stamps.set(i,a)),a}ensure(e,i,a,n){const o=n&&n!==a?n:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===o&&this.particles.length||(this.particles=ms(e,i,a,o||null),this.stamps.clear(),this.sim=null,this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=o)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const n=this.canvas.getContext("2d",{alpha:!1});if(!n)return this.canvas;const o=zt(e.kit),r=e.kitB?zt(e.kitB):null,s=An(e.paper,Jt(o,e.seed)),l=An(e.ink,Sa[o]);this.ensure(e.seed>>>0,l,o,r);const c=Pn(e.generator,e.move),f=q(e.audio,0,1),d=q(e.bass,0,1),p=q(e.beat,0,1),u=e.bpm>40?e.bpm:0,m=Qt(e.scale),h=Yt(e.density),v=Wt(e.pace),y={travel:jt(e.chainTravel),morph:Vt(e.chainMorph),vary:Gt(e.chainVary),smooth:Kt(e.chainSmooth)};Sc(n,i,a,s,o,e.time,e.seed,p,d,!!e.night,l),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high";const b=e.time,w=b*v,T=i/Math.max(a,1),_=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||_n(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"?130:c==="tunnel"?120:c==="bloom"?140:c==="chain"?40:_a(c)?42:this.particles.length,M=Math.max(8,Math.min(this.particles.length,Math.round(_*h))),E=c==="prism"?3:1;if(_a(c)){const A=Kr({springStrength:e.springStrength,springDamp:e.springDamp,springDist:e.springDist,springElast:e.springElast,springBreak:e.springBreak,flowScale:e.flowScale,flowTurb:e.flowTurb,flowEvolve:e.flowEvolve,flowForce:e.flowForce,flowDepth:e.flowDepth,boidCohere:e.boidCohere,boidSep:e.boidSep,boidAlign:e.boidAlign,boidRadius:e.boidRadius,boidSpeed:e.boidSpeed,poleCount:e.poleCount,poleAttract:e.poleAttract,poleRepel:e.poleRepel,poleSpeed:e.poleSpeed,poleFalloff:e.poleFalloff,poleSwitch:e.poleSwitch});this.sim=as(this.sim,c,this.particles.slice(0,M),b,A)}else this.sim=null;for(let A=0;A<M;A++){const I=this.particles[A],N=this.stamp(I.charge),$=_a(c)&&this.sim?ns(this.sim,A,I.size):xc(I,A,c,w,f,d,p,u,M,b,y);if(!$)continue;const S=c==="spot"?.34:c==="rush"||c==="tunnel"||c==="bloom"||c==="spiral"||c==="helix"||c==="prism"||c==="chain"?.26:.22,R=Math.min($.px*m,S)*Math.min(i,a);if(R<5)continue;const k=(.5+$.x)*i,H=(.5+$.y/T)*a;for(let J=0;J<E;J++){n.save();const D=E>1?(J-1)*R*.09:0,ne=E>1?J===2?R*.06:J===0?-R*.03:0:0;if(k+D<-R||H+ne<-R||k+D>i+R||H+ne>a+R){n.restore();continue}n.translate(k+D,H+ne),n.rotate($.rot+(E>1?J*.1:0)),$.flip!=null&&n.scale($.flip,1),$.squash&&n.scale($.squash,1/Math.max(.35,$.squash)),$.glow&&(n.globalAlpha=$.alpha*.32*$.glow,n.fillStyle=$.tint??l,n.beginPath(),n.arc(0,0,R*(.4+$.glow*.16),0,Math.PI*2),n.fill()),n.globalAlpha=$.alpha*(E>1?.72:1),n.drawImage(N,-R/2,-R/2,R,R),n.restore()}}return(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="clap"||c==="wave")&&p>.04&&(n.save(),n.translate(i*.5,a*.5),n.strokeStyle=qe(l,"#fff4d8",.72),n.globalAlpha=.18+p*.42,n.lineWidth=2.6+p*6,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.16+p*.2),0,Math.PI*2),n.stroke(),n.globalAlpha=.1+p*.22,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.3+p*.18),0,Math.PI*2),n.stroke(),n.restore()),this.canvas}}function we(t){return(t%1+1)%1}function On(t){const e=we(t);return e<.5?e*2:2-e*2}function Be(t){return On(t)-.5}function xc(t,e,i,a,n,o,r,s,l=48,c=a,f){const d=_n(i),p=ss(c,s),u=q(Math.max(r*(d?.48:.85),p*(d?.72:.22)),0,1);if(i==="bounce"){const b=.11+Math.abs(t.vx)*2.4,w=.09+Math.abs(t.vy)*2.1;return{x:Be(t.x+b*a),y:Be(t.y+w*a*.92),px:q((.1+t.size*.07)*(1+u*.22),.08,.28),glow:u*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const b=a*(2.2+n*.25)+e*.55,w=Math.cos(b);return{x:Be(t.x+t.vx*a*.45),y:Be(t.y+t.vy*a*.38),px:q((.12+t.size*.06)*(1+u*.18),.08,.26),glow:u*.35,rot:t.rot+Math.sin(b)*.15,alpha:q(.28+Math.abs(w)*.72,.2,1),flip:w}}if(i==="glow"){const b=.45+.55*Math.sin(a*2.4+e*.7),w=q(b*.4+u*.55+o*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:q((.1+t.size*.08)*(.9+w*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:q(.5+w*.45,.35,1),glow:w}}if(i==="flash"){const b=.7+.3*Math.sin(a*5.2+e)+u*.12,w=Xt[(Math.floor(a*3.2+e*3)>>>0)%Xt.length];return{x:Be(t.x+t.vx*a*.32),y:Be(t.y+t.vy*a*.28),px:q((.11+t.size*.07)*(1+u*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:q(b,.4,1),glow:.16+u*.45,tint:w}}if(i==="hop"){const b=s>40?s/60:.85,w=we(a*b+t.z),T=Math.abs(Math.sin(w*Math.PI))*(.72+u*.45)+u*.14,_=Math.cos(w*Math.PI*2);return{x:Be(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Be(t.y)*.62-T*.2,px:q(.1+t.size*.07+T*.02,.08,.22),rot:t.rot+T*.55,alpha:1,flip:_}}if(i==="kick"){const b=.1+Math.abs(t.vx)*2.1,w=.08+Math.abs(t.vy)*1.8;return{x:Be(t.x+b*a),y:Be(t.y+w*a),px:q((.1+t.size*.07)*(1+u*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:u*.7}}if(i==="jelly"){const b=1+Math.sin(a*5.2+e)*.08+u*.2;return{x:Be(t.x+t.vx*a*.5),y:Be(t.y+t.vy*a*.42),px:q(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:b}}if(i==="tide"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,E=(_+.5)/6-.5,A=Math.sin(a*1.7+_*.72+T*.18);return{x:M*.9+A*.07,y:E*.74+Math.sin(a*.82+_*.9)*.035,px:q(.085+t.size*.045+u*.05,.06,.2),rot:t.rot+A*.22,alpha:1,glow:u*.5}}if(i==="rings"){const w=e%4,T=Math.floor(e/4),_=12,M=w&1?-1:1,E=T/_*Math.PI*2+a*(.48+w*.08)*M,A=.14+w*.11;return{x:Math.cos(E)*A,y:Math.sin(E)*A*.88,px:q(.07+t.size*.035+u*.05,.05,.18),rot:E+t.rot*.25,alpha:.96,glow:u*.48}}if(i==="loom"){const b=a*1.05+t.x*Math.PI*2,w=a*1.45+t.y*Math.PI*2;return{x:Math.sin(b)*.4+Math.sin(w*.5)*.06,y:Math.sin(b*2+t.z*Math.PI)*.3,px:q(.08+t.size*.045+u*.05,.06,.2),rot:b*.18+t.rot,alpha:1,glow:u*.48}}if(i==="petal"){const w=e%6,T=Math.floor(e/6)/8,_=w/6*Math.PI*2+a*.34,M=.8+.2*Math.sin(a*1.25),E=(.1+T*.32)*M;return{x:Math.cos(_)*E,y:Math.sin(_)*E*.9,px:q(.075+t.size*.04+u*.05,.055,.2),rot:_+Math.PI*.5,alpha:q(.42+M*.55,.4,1),glow:u*.5}}if(i==="flock"){const b=e%5,T=we(t.z+a*(.18+b*.02))*Math.PI*2+b*.32,_=.2+Math.sin(T*2+b)*.1+b*.028;return{x:Math.cos(T)*_,y:Math.sin(T*.86)*_*.7,px:q(.075+t.size*.04+u*.05,.055,.19),rot:T+Math.PI*.5,alpha:1,glow:u*.48}}if(i==="wheel"){const w=e%3,M=Math.floor(e/3)/14*Math.PI*2+a*.58*(w===1?-1:1),E=.2+w*.12,A=.5+.5*Math.sin(M);return{x:Math.cos(M)*E,y:Math.sin(M)*E*.72,px:q((.075+t.size*.035)*(.78+A*.28)+u*.05,.05,.22),rot:M,alpha:q(.5+A*.45,.45,1),glow:u*.48}}if(i==="silk"){const b=e%4,w=b<2?1:-1,T=we(t.x+a*.14*w+b*.08),_=(b/3-.5)*.52+Math.sin(T*Math.PI*3+b)*.055;return{x:T-.5,y:_,px:q(.07+t.size*.038+u*.05,.05,.18),rot:Math.cos(T*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:u*.45}}if(i==="bars"){const T=e%8,_=Math.floor(e/8)%6,M=(T+.5)/8-.5,E=.32+.68*(.5+.5*Math.sin(a*2.15+T*.85+t.z)),A=q(E*(.42+n*.22+o*.2+p*.28),.18,1),I=.42-_/Math.max(5,1)*A*.82;return{x:M*.86,y:I,px:q(.075+t.size*.03+u*.03,.055,.18),rot:t.rot*.2,alpha:q(.45+(1-_/6)*.5+u*.15,.4,1),glow:u*.55,squash:1-u*.08}}if(i==="ripple"){const w=e%3,T=Math.floor(e/3),_=16,M=we(a*.32),E=.15+w*.145+M*.16+p*.05,A=T/_*Math.PI*2+a*.1;return{x:Math.cos(A)*E,y:Math.sin(A)*E*.88,px:q(.062+t.size*.024+u*.02,.048,.13),rot:A+t.rot*.2,alpha:q(.96-w*.08,.6,1),glow:u*.45}}if(i==="swing"){const T=e%6,_=Math.floor(e/6)%8,M=s>40?s/60*Math.PI*2:5.4,E=T&1?-1:1,A=Math.sin(a*M+T*.85)*.82*E,I=.07+_*.072;return{x:(T/Math.max(5,1)-.5)*.9+Math.sin(A)*I,y:-.44+Math.cos(A)*I,px:q(.07+t.size*.03+u*.028,.05,.16),rot:A,alpha:1,glow:u*.4}}if(i==="burst"){const w=e%3,M=Math.floor(e/3)/16*Math.PI*2+a*.2*(w===1?-1:1),E=(.14+w*.13)*(1+p*.42);return{x:Math.cos(M)*E,y:Math.sin(M)*E*.9,px:q((.08+t.size*.035)*(1+u*.22),.055,.22),rot:M+t.rot*.2,alpha:q(.55+u*.4,.45,1),glow:u*.75,squash:1+u*.14}}if(i==="halo"){const w=e%2,M=Math.floor(e/2)/24*Math.PI*2+a*.26*(w?-1:1),E=.84+.16*Math.sin(a*1.15)+u*.2,A=(.26+w*.14)*E,I=q(.28+u*.65+o*.15,0,1);return{x:Math.cos(M)*A,y:Math.sin(M)*A*.9,px:q(.07+t.size*.032+I*.04,.05,.18),rot:M+Math.PI*.5,alpha:q(.5+I*.45,.4,1),glow:I}}if(i==="clap"){const b=e&1?1:-1,w=Math.floor(e/2)%8,T=Math.floor(e/16)%3,_=.28-p*.14;return{x:b*(_+T*.055),y:(w/7-.5)*.78,px:q(.08+t.size*.035+u*.03,.055,.18),rot:t.rot*.15+b*u*.2,alpha:1,squash:1-u*.16,glow:u*.5}}if(i==="wave"){const T=e%16,_=Math.floor(e/16)%3,M=(T+.5)/16-.5,E=.09+n*.05+p*.08,A=M*Math.PI*3.4+a*2.15+_*.55;return{x:M*.92,y:(_-1)*.2+Math.sin(A)*E,px:q(.065+t.size*.03+u*.026,.05,.15),rot:Math.cos(A)*.32,alpha:1,glow:u*.45}}if(i==="drop"){const b=ds(r),w=b*b;return{x:t.x-.5,y:t.y-.5-w*.07,px:q((.1+t.size*.075)*(1+b*.9),.07,.44),glow:b*.95,rot:t.rot,alpha:1,squash:1-b*.2}}if(i==="spot"){const b=Math.max(8,l),w=hs(c,s,b),T=e===w,_=T?q(Math.max(r,u),0,1):0,M=e/b*Math.PI*2,E=.3;return{x:Math.cos(M)*E,y:Math.sin(M)*E*.78,px:q((T?.2:.068)+t.size*.028+_*.24,.05,.5),glow:_*.98,rot:t.rot*.35,alpha:T?1:.52,squash:1-_*.14}}if(i==="pong"){const b=tt(s),w=Be(t.x+(.16+Math.abs(t.vx)*.5)*c*b),T=Be(t.y+(.13+Math.abs(t.vy)*.42)*c*b*.9),_=Math.min(.5-Math.abs(w),.5-Math.abs(T));return{x:w,y:T,px:q(.08+t.size*.04+u*.02,.06,.18),glow:(_<.065?.55:0)+u*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const w=En(c,s,2),T=Math.floor(e/16)%2,_=(e%16/16+w/16)*Math.PI*2*(T?-1:1),M=.26+T*.12;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.8,px:q(.07+t.size*.03+u*.02,.05,.16),rot:_,alpha:1,glow:u*.55}}if(i==="moire"){const b=e&1,T=Math.floor(e/2)%18/18*Math.PI*2+a*(b?-.78:.62),_=.2+b*.13+p*.035;return{x:Math.cos(T)*_,y:Math.sin(T)*_*.86,px:q(.065+t.size*.028+u*.018,.048,.14),rot:T+t.rot*.2,alpha:b?.78:1,glow:u*.4}}if(i==="grid"){const T=e%8,_=Math.floor(e/8)%6,M=_&1?1:-1;return{x:(we((T+.5)/8+c*tt(s)*.28*M)-.5)*.92,y:((_+.5)/6-.5)*.78,px:q(.07+t.size*.03+u*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:u*.42}}if(i==="zip"){const b=e%3,w=b===1?-1:1,T=1-p*.16;return{x:(we(t.x+c*tt(s)*.34*w*T+b*.12)-.5)*.94,y:(b/2-.5)*.52,px:q(.07+t.size*.032+u*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:u*.4}}if(i==="ghost"){const b=(e&1)===0,w=b?0:1/tt(s),T=t.x*Math.PI*2+(c-w)*tt(s)*1.35,_=.3+Math.sin((c-w)*1.1+t.y*6)*.05;return{x:Math.cos(T)*_,y:Math.sin(T*.92)*_*.72,px:q(.075+t.size*.032,.055,.16),rot:T+Math.PI*.5,alpha:b?1:.34,glow:b?u*.5:.12}}if(i==="poly"){const b=e&1,w=b?8:12,T=Math.floor(e/2)%w,_=b?3:4,M=T/w*Math.PI*2+c*tt(s)*(_/4)*(b?-1:1),E=.2+b*.15;return{x:Math.cos(M)*E,y:Math.sin(M)*E*.84,px:q(.068+t.size*.03+u*.018,.05,.15),rot:M,alpha:1,glow:u*.45}}if(i==="fall"){const b=we(t.z+c*tt(s,.5)),w=On(b),T=w*w,_=w>.82?(w-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+T*.86,px:q(.075+t.size*.035+u*.02,.055,.17),rot:t.rot+T*.4,alpha:1,glow:u*.4,squash:1-_*.28}}if(i==="liss"){const b=tt(s),w=c*b*Math.PI*2*1.5+t.x*6.2,T=c*b*Math.PI*2+t.y*5.4;return{x:Math.sin(w)*.4,y:Math.sin(T)*.32,px:q(.07+t.size*.032+u*.02,.05,.16),rot:w*.15+t.rot,alpha:1,glow:u*.42}}if(i==="snap"){const b=En(c,s,1)&1?1:-1,w=Math.floor(e/8)%5,T=e%8;return{x:b*(.2+T/7*.1),y:(w/4-.5)*.72,px:q(.072+t.size*.03+u*.025,.05,.16),rot:t.rot*.2+b*.08,alpha:1,glow:u*.6,squash:1-u*.1}}if(i==="chain"){const b=f?.travel??1,w=f?.morph??.7,T=f?.vary??1,_=f?.smooth??.72,E=.62/Math.max(8,l),A=we(c*b*.14-e*E),I=c*w,N=Cn(A,I,T,_),$=Cn(we(A+E),I,T,_),S=Math.max(.42,1.05-N.z*.55),R=Math.max(.42,1.05-$.z*.55),k=N.x/S,H=N.y/S,J=Math.atan2($.y/R-H,$.x/R-k),D=q(1.12/S,.55,1.85);return{x:k,y:H,px:q((.072+t.size*.028)*D,.05,.24),rot:J,alpha:q(.52+D*.42,.5,1)}}if(i==="tunnel"){const w=.3+we(t.z-a*(.4+n*.22+o*.1))*2.45;if(w<.34||w>2.65)return null;const T=t.x*Math.PI*2+a*.14+t.rot*.3,_=(.16+t.y*.58)/w;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:q(.2*t.size*(.95+o*.1+u*.26)/w,.04,.5),glow:u*.42,rot:t.rot+t.vr*a*.2,alpha:q((2.65-w)/.28,0,1)*q((w-.3)/.1,0,1)}}if(i==="lattice"){const T=(e%8+.5)/8-.5,_=(Math.floor(e/8)+.5)/6-.5,E=.32+(1-we(a*(.2+n*.12)+t.z*.02))*2.2;return{x:T/(E*.62),y:_/(E*.62),px:q(.16*t.size/E,.05,.42),rot:t.rot*.25,alpha:q((2.4-E)/.25,0,1)}}if(i==="bloom"){const b=we(t.z-a*(.34+o*.12)),w=b*b,T=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(T)*w*.92,y:Math.sin(T)*w*.92,px:q(.05+w*.32*t.size*(1+n*.06+u*.24),.04,.48),glow:u*.4,rot:t.rot+b*.4,alpha:q(1.05-w,0,1)*q(b/.08,0,1)}}if(i==="spiral"){const w=.28+we(t.z-a*(.4+n*.2+o*.08))*2.6;if(w<.32||w>2.75)return null;const T=t.x*Math.PI*2+2.15/w+a*.1,_=(.1+t.y*.38)/w;return{x:Math.cos(T)*_,y:Math.sin(T)*_,px:q(.2*t.size*(.94+o*.1+u*.26)/w,.04,.52),glow:u*.4,rot:t.rot+T*.15,alpha:q((2.75-w)/.28,0,1)*q((w-.28)/.1,0,1)}}if(i==="helix"){const w=.26+we(t.z-a*(.46+n*.22+o*.08))*2.7;if(w<.3||w>2.85)return null;const T=e&1?Math.PI:0,_=a*(1.7+1.35/w)+t.x*Math.PI*2+T,M=(.11+t.y*.26)/w;return{x:Math.cos(_)*M,y:Math.sin(_)*M*.92,px:q(.22*t.size*(.93+o*.1+u*.26)/w,.04,.54),glow:u*.4,rot:_+t.rot,alpha:q((2.85-w)/.28,0,1)*q((w-.26)/.1,0,1)}}if(i==="prism"){const w=.28+we(t.z-a*(.42+n*.2+o*.08))*2.55;if(w<.32||w>2.7)return null;const T=a*.22+t.rot*.4,_=we(t.x)-.5,M=we(t.y)-.5,E=Math.cos(T),A=Math.sin(T);return{x:(_*E-M*A)/w,y:(_*A+M*E)/w,px:q(.2*t.size*(.94+o*.1+u*.26)/w,.04,.52),glow:u*.4,rot:t.rot+T,alpha:q((2.7-w)/.26,0,1)*q((w-.28)/.1,0,1)}}const h=.26+we(t.z-a*(.46+n*.24+o*.1))*2.7;if(h<.3||h>2.85)return null;const v=(we(t.x+t.vx*a*.03)-.5)/h,y=(we(t.y+t.vy*a*.02)-.5)/h;return{x:v,y,px:q(.24*t.size*(.92+o*.1+u*.28)/h,.04,.6),glow:u*.48,rot:t.rot+t.vr*a*.12,alpha:q((2.85-h)/.3,0,1)*q((h-.26)/.1,0,1)}}const Ft={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828"],kitchen:["#3a1410","#f2d2a0","#c44a28","#1a100c","#e8b86a","#8a2a18","#f4e8d0","#2a1810","#d87838","#5a2818"],weather:["#7ec8e8","#1a3048","#f0d878","#0e1a28","#c8dce8","#4a6a88","#ffe8a8","#243848","#8ab4d0","#2a4058"],city:["#1a1a1a","#f0c020","#3a2018","#0c0c10","#c45c38","#2a2a30","#e8d090","#141820","#8a8a90","#4a3020"],arcade:["#140818","#7cff6a","#2a1038","#0a0a12","#ff4ad4","#1a0828","#f0d86a","#241040","#4a1860","#101018"]};function Ki(t){return Ft[t]}function qe(t,e,i){const a=parseInt(t.slice(1),16),n=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(n))return t;const o=q(i,0,1),r=l=>Math.round((a>>l&255)*(1-o)+(n>>l&255)*o);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function Sc(t,e,i,a,n,o,r,s=0,l=0,c=!1,f=Sa[n]){const d=Ae(r+4>>>0),p=De(d,Ft[n]),u=De(d,Ft[n]),m=De(d,Ft[n]),h=c?qe(a,"#08060a",.68):a;t.fillStyle=h,t.fillRect(0,0,e,i);const v=t.createLinearGradient(0,0,e,i);if(c){const T=qe(f,"#ffd8a8",.3),_=.16+l*.4+s*.06;v.addColorStop(0,qe(h,T,_*.55)),v.addColorStop(.48,qe(h,p,.2)),v.addColorStop(1,qe(h,u,.24))}else v.addColorStop(0,qe(a,p,.38)),v.addColorStop(.45,qe(a,m,.28)),v.addColorStop(1,qe(a,u,.42));t.fillStyle=v,t.fillRect(0,0,e,i);const y=e*(.5+Math.sin(o*.17)*.08),b=i*(.46+Math.cos(o*.13)*.06),w=t.createRadialGradient(y,b,0,y,b,Math.max(e,i)*.72);if(c){const T=qe(f,"#ffd8a8",.28);w.addColorStop(0,qe(h,T,.22+l*.38+s*.05)),w.addColorStop(1,h)}else w.addColorStop(0,qe(a,p,.42+s*.1)),w.addColorStop(1,a);t.fillStyle=w,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function Jt(t,e=0){const i=Ae(e+17>>>0);return De(i,Ft[t])}function ei(t,e){const i=Ae(t+17>>>0);return De(i,Ft[yt[Math.floor(i()*yt.length)]])}function Ot(t,e="#c41e3a"){const i=Ae(t+91>>>0);return i()<.35?e:De(i,Xt)}function Ct(t){return Sa[t]}function Et(t){return yt[(t>>>0)%yt.length]}function Re(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const Cc=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ec=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Pc=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Mc=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ic=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Hn=`
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
`,Ln=`
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
`,Ac=`
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
`,Bc=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Rc=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Nn=`
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
`,Ca={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Nn}${Ln}`,applyGlsl:Bc};function zc(t){return t?{...Ca,extraUniforms:`${Nn}${Ln}${Ac}`,applyGlsl:Rc}:Ca}const Fc=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Hn}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Ca],Un=[...Cc,...Ec,...Pc,...Mc,...Ic,...Fc],Oc=new Map(Un.map(t=>[t.id,t]));function it(t){return Oc.get(t)}function Hc(){const t={};for(const e of Un)(t[e.category]??=[]).push(e);return t}const Lc=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Ea(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(n=>({...n,params:{...n.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Re("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function Nc(t,e){const i=e.data,a=t.sources.map(o=>o.id),n=i.layers.map((o,r)=>({...o,id:o.id,sourceId:o.sourceId&&a.includes(o.sourceId)?o.sourceId:a[Math.min(r,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:n,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function Uc(t,e){if(t.length===0)return null;const i=Ae(e);return t[Math.floor(i()*t.length)]}function Dc(t){return{...t,id:Re("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Ht=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],Dn=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function qc(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(f=>{const d=parseInt(f.slice(1),16),p=d>>16&255,u=d>>8&255,m=d&255,h=v=>q(Math.round(Ta(v,t()*255,a)),0,255);return`#${[h(p),h(u),h(m)].map(v=>v.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const n=e.min??0,o=e.max??1,r=typeof i=="number"?i:Number(e.default),s=n+t()*(o-n),l=Ta(r,s,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function Pa(t,e,i,a){const n=it(t.typeId);if(!n)return t;const o=Ae(e),r={...t.params};for(const s of n.params)a&&s.id!==a||(r[s.id]=qc(o,s,r[s.id]??s.default,q(i,0,1)));return{...t,params:r}}function $c(t,e,i,a=!1,n){const o=t.effects.map((r,s)=>a&&n&&r.id!==n?r:Pa(r,e+s*997,i));return{...t,effects:o}}function qn(t,e,i){const a=it(t),n={};if(a)for(const o of a.params)n[o.id]=o.default;return Pa({id:Re("fx"),typeId:t,enabled:!0,params:n},e,i)}function $n(t,e,i,a){const n={...t.params};if(t.typeId==="grade"&&(e==="lush"?(n.saturation=.18+a()*.42,n.brightness=-.04+a()*.16,n.contrast=.06+a()*.22,n.gamma=.82+a()*.35,n.hue=(a()-.5)*.18,n.exposure=-.15+a()*.4):e==="outsider"?(n.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,n.contrast=.2+a()*.55,n.gamma=.55+a()*1.1,n.hue=(a()-.5)*.7):(n.saturation=.05+a()*.5,n.contrast=.1+a()*.35,n.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(n.shadow=i.shadow,n.highlight=i.highlight,n.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(n.leakColor=i.leak,n.leak=e==="lush"?.18+a()*.35:a()*.22,n.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(n.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,n.halation=e==="lush"?.22+a()*.4:a()*.25,n.size=1.4+a()*2.2),t.typeId==="warp"&&(n.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(n.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(n.mixScan=e==="lush"?a()*.2:.25+a()*.5,n.noise=e==="lush"?a()*.1:.12+a()*.35),t.typeId==="posterize"&&(n.levels=3+Math.floor(a()*6),n.dither=.08+a()*.35),t.typeId==="threshold"&&(n.mix=.35+a()*.45,n.soft=.04+a()*.18),t.typeId==="critters"){n.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),n.size=.85+a()*.7,n.amount=.7+a()*.3,n.speed=.7+a()*1.3,n.seed=1+Math.floor(a()*9998);const o=a();e==="lush"?n.kit=o>.72?"votives":o>.48?"charms":o>.22?"shapes":"toy pop":e==="mix"?n.kit=o>.62?"moths":o>.4?"toy pop":o>.2?"mix":"shapes":n.kit=o>.55?"toy pop":o>.28?"mix":"shapes"}if(t.typeId==="dancer"){n.size=.12+a()*.05,n.count=1,n.crowd="normal",n.place="center";const o=a();e==="lush"?n.move=o>.38?"float":o>.18?"drift":"dance":e==="mix"?n.move=o>.52?"float":o>.3?"drift":o>.16?"orbit":"dance":n.move=o>.78?"drift":"dance",n.echo=.35+a()*.5,n.amount=1,n.speed=n.move==="dance"?.55+a()*1.5:.32+a()*.7,n.seed=1+Math.floor(a()*9998);const r=a();e==="lush"?n.grow=r>.62?"petals":r>.42?"halo":r>.26?"wings":r>.12?"quiet":"wild":e==="mix"?n.grow=r>.7?"skirt":r>.52?"antenna":r>.36?"horns":r>.2?"petals":"wild":n.grow=r>.62?"quiet":r>.4?"horns":"wild";const s=a();e==="lush"?n.coat=s>.48?"cream":s>.24?"moss":"wild":e==="mix"?n.coat=s>.5?"sodium":s>.26?"cream":"wild":n.coat=s>.55?"night":"wild"}return t.typeId==="kaleido"&&(n.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),n.zoom=.7+a()*.8),t.typeId==="channels"&&(n.tint=i.leak,n.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(n.lo=.1+a()*.22,n.hi=.5+a()*.35,n.amount=.45+a()*.4,n.invert=a()>.72),t.typeId==="dropout"&&(n.amount=.28+a()*.4,n.rate=.18+a()*.4,n.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:n}}function Wc(t,e="mix"){const i=Ae(t>>>0);return $n(qn("critters",t,.85),e,Ht[t%Ht.length],i)}function jc(t,e="mix"){const i=Ae(t>>>0);return $n(qn("dancer",t,.85),e,Ht[t%Ht.length],i)}function Vc(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,jc(t.seed+i*4243,"mix")]})}}function Wn(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,Wc(t.seed+i*7919,"mix")]})}}function Gc(){return Dn.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Kc(t,e,i,a=!1){return{...t,blendMode:"normal",opacity:1,effects:[],feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function jn(t,e,i,a,n,o=!1){const r=Math.max(t.randomAmount,e==="all"?.75:0),s=t.seed>>>0,l=Ae(s^2654435769),c=t.layers.map((b,w)=>e==="selected"&&b.id!==i?b:e==="param"?b.id!==i?b:{...b,effects:b.effects.map(T=>T.id===a&&n?Pa(T,s+w*13,Math.max(r,.55),n):T)}:e==="all"?Kc(b,s+w*7919,r,o):$c(b,s+w*7919,r,!0,a)),f=kn,d=Ae(s+0*7919>>>0),p=Gc(),u=p[Math.floor(d()*p.length)]??Dn[0],h={"herald tour":{generator:"heraldry",a:ei(s),b:Ot(s)},"dense paper":{generator:"wallpaper",a:ei(s+3),b:Ot(s+3,"#1c4db8")},"giant charges":{generator:"giants",a:ei(s+5),b:Ot(s+5)},"heart rain":{generator:"shower",a:ei(s+7),b:Ot(s+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:ei(s+9),b:Ot(s+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[u.name],v=t.sources.map((b,w)=>{if(e!=="all"||b.kind!=="generator")return b;const T=Ae(s+w*131),_=Ht[Math.floor(T()*Ht.length)];if(Ie(b.generator)||kn.includes(b.generator)){const $=Et(s+w*41),S=xa(s+w*73),R=Et(s+w*99),k=T()>.74&&R!==$?R:void 0;return{...b,generator:Gi(S),collageKit:$,collageKitB:k,collageMove:S,collageNight:T()>.8,collageScale:.62+T()*.24,collageDensity:.72+T()*.3,collagePace:.72+T()*.22,collageChainTravel:.65+T()*.9,collageChainMorph:.35+T()*.85,collageChainVary:.65+T()*.8,collageChainSmooth:.4+T()*.45,colorA:Jt($,s+w*17),colorB:Ct($),name:k?`${$t[S]} · ${$} · ${k}`:`${$t[S]} · ${$}`}}const M=o?!1:T()>.35,E=h?h.generator:M?b.generator:f[Math.floor(T()*f.length)],A=Et(s+w*41),I=Ie(E)?Jt(A,s+w*17):_.inkA,N=Ie(E)?Ct(A):_.inkB;return{...b,generator:E,collageKit:Ie(E)?A:b.collageKit,colorA:h?h.a:I,colorB:h?Ct(A):N}}),y=e==="all"?o?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:l()>.72?.04+l()*.1:0,opacity:.4+l()*.3,scale:1.004+l()*.02,rotation:(l()-.5)*.03,distortion:l()*.12}:t.globalFeedback;return{...t,layers:c,sources:v,globalFeedback:y}}function Xc(t){const e=t.seed+7919>>>0,i=Ae(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],n=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],o=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let r={...t,seed:e,sources:t.sources.map((s,l)=>{if(!Ie(s.generator))return s;const c=yt[Math.floor(i()*yt.length)],f=xa(e+l*59);return{...s,generator:Gi(f),collageKit:c,collageMove:f,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,collageChainTravel:.65+i()*.9,collageChainMorph:.35+i()*.85,collageChainVary:.65+i()*.8,collageChainSmooth:.4+i()*.45,colorA:Jt(c,e+l*13),colorB:Ot(e+l*29),name:`${$t[f]} · ${c}`}}),layers:t.layers.map(s=>({...s,effects:s.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:n[Math.floor(i()*n.length)],coat:o[Math.floor(i()*o.length)]}}:l)}))};return r=Wn(r),r}function Zc(){return{x:0,y:0,scale:1,rotation:0}}function Qc(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Vn(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Yc(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Jc(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const e0={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Xi={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC",kitchen:"KITCHEN",weather:"SKY",city:"STREET",arcade:"ARCADE"},t0={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Gn(t,e,i){const a=$t[t];return i&&i!==e?`${a} · ${Xi[e]} · ${Xi[i]}`:`${a} · ${Xi[e]}`}function ti(t="plasma",e,i,a){const n=Ie(t)?zt(e):void 0,o=e0[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let r;n&&(r=i==="mix"||i==="tour"?xa(Date.now()+Math.floor(Math.random()*997)):i?xn(i):Pn(t));const s=r?Gi(r):t??"plasma",l=r?$t[r]:t0[t??""]??(t?t.toUpperCase():"SIGNAL"),c=n&&a?.kitB?zt(a.kitB):void 0,f=c&&n&&c!==n?c:void 0,d=n&&r?Gn(r,n,f):n?`${l} · ${Xi[n]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,p=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0;return{id:Re("src"),name:d,kind:"generator",generator:s,colorA:p??(n?Jt(n,r==="rush"?1:r==="tunnel"?5:r==="bounce"?7:11):o.a),colorB:n?Ct(n):o.b,collageKit:n,collageKitB:f,collageMove:r,collageNight:n?!!a?.night:void 0,collageScale:n?Qt(a?.scale):void 0,collageDensity:n?Yt(a?.density):void 0,collagePace:n?Wt(a?.pace):void 0,collageChainTravel:n?jt(a?.chainTravel):void 0,collageChainMorph:n?Vt(a?.chainMorph):void 0,collageChainVary:n?Gt(a?.chainVary):void 0,collageChainSmooth:n?Kt(a?.chainSmooth):void 0,collageSpringStrength:n?Ci(a?.springStrength):void 0,collageSpringDamp:n?Ei(a?.springDamp):void 0,collageSpringDist:n?Pi(a?.springDist):void 0,collageSpringElast:n?Mi(a?.springElast):void 0,collageSpringBreak:n?Ii(a?.springBreak):void 0,collageFlowScale:n?Ai(a?.flowScale):void 0,collageFlowTurb:n?Bi(a?.flowTurb):void 0,collageFlowEvolve:n?Ri(a?.flowEvolve):void 0,collageFlowForce:n?zi(a?.flowForce):void 0,collageFlowDepth:n?Fi(a?.flowDepth):void 0,collageBoidCohere:n?Oi(a?.boidCohere):void 0,collageBoidSep:n?Hi(a?.boidSep):void 0,collageBoidAlign:n?Li(a?.boidAlign):void 0,collageBoidRadius:n?Ni(a?.boidRadius):void 0,collageBoidSpeed:n?Ui(a?.boidSpeed):void 0,collagePoleCount:n?Di(a?.poleCount):void 0,collagePoleAttract:n?qi(a?.poleAttract):void 0,collagePoleRepel:n?$i(a?.poleRepel):void 0,collagePoleSpeed:n?Wi(a?.poleSpeed):void 0,collagePoleFalloff:n?ji(a?.poleFalloff):void 0,collagePoleSwitch:n?Vi(a?.poleSwitch):void 0,width:1280,height:720,duration:0}}function Kn(t){const e=it(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Re("fx"),typeId:t,enabled:!0,params:i}}function Xn(t,e,i=[]){return{id:Re("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Zc(),effects:i.map(Kn),mask:Qc(),feedback:Vn()}}function Zn(){const t=ti("wallpaper","sailor","rush"),e=Xn("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Yc(),globalFeedback:{...Vn(),amount:0,opacity:.4,scale:1},exportSettings:Jc(),presets:[]},a=jn({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[Ea(i,"factory · tour"),Ea(a,"factory · scramble")],i}function Qn(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,exporting:!1}}class i0{state;listeners=new Set;constructor(e=Zn()){this.state={project:e,ui:Qn(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...Qn(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const P=new i0;function Ma(t,e,i,a,n){if(e<=0)return 0;const o=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(o*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let r=o;if(i==="reverse"&&(r=-o),i==="pingpong"){const s=e*2,l=(r%s+s)%s;return l<=e?l:s-l}return n?(r%e+e)%e:q(r,0,e)}function a0(t,e,i,a,n){return t.filter(o=>o.layerId===e&&o.target===i&&o.paramId===a&&(i!=="effect"||o.effectId===n)).sort((o,r)=>o.time-r.time)}function n0(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let n=0;n<t.length-1;n++){const o=t[n],r=t[n+1];if(e>=o.time&&e<=r.time){const s=r.time-o.time||1;let l=(e-o.time)/s;return(r.easing==="smooth"||o.easing==="smooth")&&(l=Vr(l)),Ta(o.value,r.value,l)}}return i}function wt(t,e,i,a,n,o,r){const s=a0(t.keyframes,e,i,a,r);return n0(s,o,n)}function o0(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(n=>({...n,params:{...n.params}}))};a.opacity=wt(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=wt(t,e.id,"layer","x",e.transform.x,i),a.transform.y=wt(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=wt(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=wt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const n of Object.keys(a.feedback))a.feedback[n]=wt(t,e.id,"feedback",n,e.feedback[n],i);for(const n of a.effects)for(const[o,r]of Object.entries(n.params))typeof r=="number"&&(n.params[o]=wt(t,e.id,"effect",o,r,i,n.id));return a}function r0(t,e){const i=t.layers[0]?.id??"";return wt(t,i,"playback","speed",t.playback.speed,e)}const s0=[{beats:[8],weight:4},{beats:[4,4],weight:5},{beats:[8,4],weight:3},{beats:[4,4,8],weight:3},{beats:[2,2,4],weight:2},{beats:[4,2,2],weight:2},{beats:[2,6],weight:2},{beats:[6,2],weight:2},{beats:[1,1,6],weight:2},{beats:[4,1,1,2],weight:1},{beats:[3,5],weight:1},{beats:[8,2,2,4],weight:2}],l0=["spot","burst","clap","snap","step"],c0=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],f0=["drop","halo","bars","wave","poly","ghost","fall"];function u0(t,e){const i=e.reduce((n,o)=>n+o.weight,0);let a=t()*i;for(const n of e)if(a-=n.weight,a<=0)return n.item;return e[e.length-1].item}function d0(t){return u0(t,s0.map(e=>({item:e.beats,weight:e.weight})))}function h0(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(n=>n!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function m0(t,e,i){const a=t<=2?l0:t<=4?c0:f0;return h0(e,a,i)}function p0(t,e,i){const a=Math.max(1,t),n=(i??[]).filter(s=>s>=0&&s<a+.05);if(n.length>=8){const s=n[0]>.08?[0,...n]:[...n];return s[s.length-1]<a&&s.push(a),s}const o=60/Math.max(40,e||120),r=[];for(let s=0;s<=a+o*.01;s+=o)r.push(s);return r[r.length-1]<a&&r.push(a),r}function g0(t){const e=Ae(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=p0(i,t.bpm??120,t.beats),n=[];let o=0,r,s,l=0;for(;o<a.length-1&&a[o]<i;){const c=d0(e);s=Et(t.seed+l*41+Math.floor(e()*17)>>>0);const f=l%5===2||e()>.82,d=e()>.72?Et(t.seed+l*99+7>>>0):void 0,p=d&&d!==s?d:void 0,u=Ki(s);for(const m of c){if(o>=a.length-1||a[o]>=i)break;const h=Math.min(a.length-1,o+m),v=a[o];if(v>=i)break;const y=m0(h-o,e,r),b=u[Math.floor(e()*u.length)%u.length];n.push({start:v,beats:h-o,look:{kit:s,kitB:p,move:y,night:f,wash:b,ink:Ct(s),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),r=y,o=h}if(l++,l>80)break}if(!n.length){const c=Et(t.seed);n.push({start:0,beats:8,look:{kit:c,move:"bars",night:!1,wash:Ki(c)[0],ink:Ct(c),scale:.78,density:.88,pace:.62}})}return n}function v0(t,e){if(!t.length){const s=Et(1);return{start:0,beats:8,look:{kit:s,move:"bars",night:!1,wash:Ki(s)[0],ink:Ct(s),scale:.78,density:.88,pace:.62}}}const i=t[t.length-1],a=Math.max(i.start+.25,t.length>1?i.start+(i.start-t[0].start)/Math.max(1,t.length-1):i.start+2),n=Math.max(a,i.start+.5),o=(e%n+n)%n;let r=t[0];for(const s of t)if(s.start<=o)r=s;else break;return r}function b0(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const y0=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function w0(t){return(t.type??"").startsWith("audio/")||y0.test(t.name)}function Zi(t){return t.sources.find(e=>e.kind==="audio")}let ii=null,dt=null,ai=null;const Ia=new WeakSet;let ni=0,oi=0,ri=0;function Qi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(ii||(ii=new t,dt=ii.createAnalyser(),dt.fftSize=256,dt.smoothingTimeConstant=.72,dt.connect(ii.destination),ai=new Uint8Array(dt.frequencyBinCount)),ii):null}async function Yi(){const t=Qi();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function k0(t){const e=Qi();if(!(!e||!dt||Ia.has(t)))try{e.createMediaElementSource(t).connect(dt),Ia.add(t)}catch{Ia.add(t)}}async function T0(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",k0(i),Yi();let a=null;const n=Qi();if(n)try{const s=await t.arrayBuffer(),l=n.decodeAudioData(s.slice(0)).catch(()=>null);a=await Promise.race([l,new Promise(c=>setTimeout(()=>c(null),4e3))])}catch{a=null}const o=await Promise.race([new Promise(s=>{if(Number.isFinite(i.duration)&&i.duration>0){s(i.duration);return}i.addEventListener("loadedmetadata",()=>s(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>s(a?.duration??0),{once:!0})}),new Promise(s=>setTimeout(()=>s(a?.duration??0),2500))]),r=a?_0(a.getChannelData(0),a.sampleRate):[];return{id:Re("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:o||a?.duration||0,audio:i,pcm:a,beats:r,bpm:x0(r),objectUrl:e}}function _0(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,n=Math.floor((t.length-a)/i);if(n<16)return[];const o=new Float32Array(n);for(let f=0;f<n;f++){const d=f*i;let p=0;for(let u=0;u<a;u+=2){const m=t[d+u];p+=m*m}o[f]=Math.sqrt(p/(a*.5))}const r=Math.max(10,Math.floor(.32/(i/e))),s=.28,l=[];let c=-99;for(let f=r;f<n;f++){let d=0,p=0;for(let v=f-r;v<f;v++)d+=o[v],o[v]>p&&(p=o[v]);d/=r;const u=o[f]-o[f-1];if(!(o[f]>d*1.32&&o[f]>p*.72&&u>.0035))continue;const h=f*i/e;h-c<s||(l.push(h),c=h)}return l}function x0(t){if(t.length<4)return 0;const e=[];for(let a=1;a<t.length;a++){const n=t[a]-t[a-1];n>=.28&&n<=.8&&e.push(n)}if(e.length<3)return 0;e.sort((a,n)=>a-n);const i=e[Math.floor(e.length/2)];return Aa(Math.round(60/i),70,170)}function Yn(t,e,i=.13){if(!(e>40)||!Number.isFinite(t))return 0;const a=60/e;if(!(a>0))return 0;const n=(t%a+a)%a;return Math.exp(-n/i)}function S0(t,e,i=.2){if(!t.length)return 0;let a=0,n=t.length-1;for(;a<n;){const s=a+n+1>>1;t[s]<=e?a=s:n=s-1}const o=t[a];if(o>e)return 0;const r=e-o;return r>i*3.2?0:Math.exp(-r/i)}function Aa(t,e,i){return Math.max(e,Math.min(i,t))}function C0(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const n=(a%i+i)%i,o=Math.floor(n*e),r=Math.max(64,Math.floor(e*.046)),s=Math.max(0,Math.min(t.length-1,o)),l=Math.max(s+1,Math.min(t.length,o+r));let c=0;for(let v=s;v<l;v++)c+=t[v]*t[v];const f=Math.min(1,Math.sqrt(c/(l-s))*3.4),d=Math.max(r,Math.floor(e*.09)),p=Math.min(t.length,o+d);let u=0,m=0;for(let v=s;v<p;v+=8)u+=t[v]*t[v],m++;const h=Math.min(1,Math.sqrt(u/Math.max(1,m))*4.2);return{energy:f,bass:h}}function E0(){if(!dt||!ai)return null;dt.getByteFrequencyData(ai);let t=0,e=0;const i=ai.length,a=Math.max(4,Math.floor(i*.12));for(let n=0;n<i;n++){const o=ai[n]/255;t+=o,n<a&&(e+=o)}return{energy:t/i,bass:e/a}}function P0(t,e){let i=0,a=0,n=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const r=t.pcm.duration,s=(e%r+r)%r,l=C0(t.pcm.getChannelData(0),t.pcm.sampleRate,r,s);i=l.energy,a=l.bass;const c=t.beats??[],f=c.length?S0(c,s,.14):0,d=Yn(s,t.bpm??0),p=Aa((i-.12)*.75,0,.6);n=Math.max(f,d*.78,c.length?p*.42:p)}else if(t?.kind==="audio"){const r=E0();r&&(i=r.energy,a=r.bass,n=Math.max(Yn(e,t.bpm??0)*.78,Aa((i-.12)*.55,0,.5)))}ri+=(n-ri)*(n>ri?.78:.4);const o=t?.kind==="audio"?.22:.14;return ni+=(i-ni)*o,oi+=(a-oi)*Math.min(o,.16),!t&&ni<.002&&(ni=0),!t&&oi<.002&&(oi=0),t||(ri=0),{energy:ni,bass:oi,beat:ri}}function M0(t,e,i=0){const a=e.length,n=t.length;if(a<1)return;if(n<1){e.fill(0);return}for(let r=0;r<a;r++)e[r]=t[r%n];if(i<=0)return;const o=Math.max(1,Math.round(a*i));for(let r=0;r<o;r++)e[a-o+r]*=1-(r+1)/o}function I0(t,e,i=!1){const a=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*a)),o=Math.max(1,t.numberOfChannels),r=new AudioBuffer({length:n,numberOfChannels:o,sampleRate:a}),s=i?.12:0;for(let l=0;l<o;l++)M0(t.getChannelData(l),r.getChannelData(l),s);return r}async function A0(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(o=>o.arrayBuffer()),new Promise(o=>setTimeout(()=>o(null),2500))]);if(!i)return null;const a=Qi()??new e,n=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(o=>setTimeout(()=>o(null),4e3))]);if(n&&n.length>32)return t.pcm=n,n}catch{return null}return null}function Ba(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const B0=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,R0=`#version 300 es
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
`,z0=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,F0=`#version 300 es
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
`,O0=`#version 300 es
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
`,H0=`#version 300 es
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
`,L0=`#version 300 es
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
`,N0=`#version 300 es
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
${Hn}
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
`,U0=`#version 300 es
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
`,D0=`#version 300 es
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
`,q0=`#version 300 es
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
`,$0=`#version 300 es
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
`,W0=`#version 300 es
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
`,j0=`#version 300 es
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
`,V0=`#version 300 es
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
`,G0=`#version 300 es
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
`,K0=`#version 300 es
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
`,X0=`#version 300 es
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
`,Z0=`#version 300 es
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
`,Q0=`#version 300 es
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
`,Y0=`#version 300 es
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
`,J0=`#version 300 es
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
`,ef=`#version 300 es
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
`,tf=`#version 300 es
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
`,af=`#version 300 es
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
`,Jn=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,nf=`#version 300 es
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
`;class Pt extends Error{}function of(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new Pt("WebGL2 is required for Phosphene.");return e}function eo(t,e,i){const a=t.createShader(e);if(!a)throw new Pt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new Pt(n)}return a}class ge{gl;prog;uniforms=new Map;constructor(e,i,a=B0){this.gl=e;const n=eo(e,e.VERTEX_SHADER,a),o=eo(e,e.FRAGMENT_SHADER,i),r=e.createProgram();if(!r)throw new Pt("Unable to create program");if(e.attachShader(r,n),e.attachShader(r,o),e.linkProgram(r),e.deleteShader(n),e.deleteShader(o),!e.getProgramParameter(r,e.LINK_STATUS)){const s=e.getProgramInfoLog(r)??"link failed";throw e.deleteProgram(r),new Pt(s)}this.prog=r}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const n=this.loc(e);n&&this.gl.uniform2f(n,i,a)}v3(e,i,a,n){const o=this.loc(e);o&&this.gl.uniform3f(o,i,a,n)}v4(e,i,a,n,o){const r=this.loc(e);r&&this.gl.uniform4f(r,i,a,n,o)}dispose(){this.gl.deleteProgram(this.prog)}}function Ji(t){const e=t.createTexture();if(!e)throw new Pt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function to(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function rf(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class Lt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new Pt("Unable to create framebuffer");this.fbo=i,this.tex=Ji(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,rf(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Oe(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function at(t){t.drawArrays(t.TRIANGLES,0,3)}const sf={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},lf={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},io={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function cf(t){return`${R0}
${t.extraUniforms??""}
${t.applyGlsl}
${z0}`}function ff(t,e){return new ge(t,cf(e))}function si(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Nt=8;function ao(t,e,i){return new ImageData(t,e,i)}function uf(t,e,i){const a=t.find(o=>o.id===e);if(!a?.options)return Number(i)||0;const n=a.options.findIndex(o=>o.value===i);return n<0?0:n}class df{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new _c;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=of(e),this.generatorProg=new ge(this.gl,L0)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Nt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new Lt(e),this.pong??=new Lt(e),this.composite??=new Lt(e),this.post??=new Lt(e);this.ring.length<Nt;)this.ring.push(new Lt(e));this.copy??=new ge(e,Jn),this.blit??=new ge(e,O0),this.compositeProg??=new ge(e,F0),this.feedbackProg??=new ge(e,H0),this.textureProg??=new ge(e,nf),this.black||(this.black=Ji(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(o=>o.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(o=>o.enabled))return!0;const n=e.sources.find(o=>o.id===a.sourceId);return!!(n&&n.kind!=="generator"&&n.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new ge(this.gl,U0),this.stageProg):e===13?(this.sketchProg??=new ge(this.gl,D0),this.sketchProg):e===14?(this.feltProg??=new ge(this.gl,q0),this.feltProg):e===15?(this.foilProg??=new ge(this.gl,$0),this.foilProg):e===16?(this.plushProg??=new ge(this.gl,W0),this.plushProg):e===17?(this.yarnProg??=new ge(this.gl,j0),this.yarnProg):e===18?(this.sequinProg??=new ge(this.gl,V0),this.sequinProg):e===19?(this.quiltProg??=new ge(this.gl,G0),this.quiltProg):e===20?(this.corkProg??=new ge(this.gl,K0),this.corkProg):e===21?(this.ginghamProg??=new ge(this.gl,X0),this.ginghamProg):e===22?(this.sprinkleProg??=new ge(this.gl,Z0),this.sprinkleProg):e===23?(this.velvetProg??=new ge(this.gl,Q0),this.velvetProg):e===24?(this.confettiProg??=new ge(this.gl,Y0),this.confettiProg):e===25?(this.discoProg??=new ge(this.gl,J0),this.discoProg):e===26?(this.terrazzoProg??=new ge(this.gl,ef),this.terrazzoProg):e===27?(this.comicProg??=new ge(this.gl,tf),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new ge(this.gl,af),this.fieldsProg):(this.generatorFull??=new ge(this.gl,N0),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",n=this.effectProg.get(a);if(n)return n;const o=e==="dancer"?zc(i):it(e);if(!o)return null;try{const r=ff(this.gl,o);return this.effectProg.set(a,r),r}catch(r){return this.lastError=`${a}: ${r instanceof Error?r.message:String(r)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(n=>!!n);for(const n of a)n.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new Lt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Ji(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&to(this.gl,i,a),i}blitTo(e,i){const a=this.gl,n=this.copy;n&&(e.bind(),n.use(),Oe(a,0,i),n.i("uTex",0),at(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const n=Math.max(e.duration,e.exportSettings.duration||0,8),o=`${e.cutEdit.seed}|${n}|${a?.bpm??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==o)&&(this.cutReel=g0({seed:e.cutEdit.seed,duration:n,bpm:a?.bpm??120,beats:a?.beats}),this.cutKey=o);const r=v0(this.cutReel,i);this.cutStatus=b0(r),this.cutLook={generator:Gi(r.look.move),collageKit:r.look.kit,collageKitB:r.look.kitB,collageMove:r.look.move,collageNight:r.look.night,collageScale:r.look.scale,collageDensity:r.look.density,collagePace:r.look.pace,colorA:r.look.wash,colorB:r.look.ink}}drawHeraldry(e,i,a,n,o,r,s){const l=this.gl;this.copy??=new ge(l,Jn),this.heraldryTex??=Ji(l);const c=this.cutLook??i,f=this.heraldry.paint({width:r,height:s,time:a,duration:o,seed:n,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace,chainTravel:c.collageChainTravel,chainMorph:c.collageChainMorph,chainVary:c.collageChainVary,chainSmooth:c.collageChainSmooth,springStrength:c.collageSpringStrength,springDamp:c.collageSpringDamp,springDist:c.collageSpringDist,springElast:c.collageSpringElast,springBreak:c.collageSpringBreak,flowScale:c.collageFlowScale,flowTurb:c.collageFlowTurb,flowEvolve:c.collageFlowEvolve,flowForce:c.collageFlowForce,flowDepth:c.collageFlowDepth,boidCohere:c.collageBoidCohere,boidSep:c.collageBoidSep,boidAlign:c.collageBoidAlign,boidRadius:c.collageBoidRadius,boidSpeed:c.collageBoidSpeed,poleCount:c.collagePoleCount,poleAttract:c.collagePoleAttract,poleRepel:c.collagePoleRepel,poleSpeed:c.collagePoleSpeed,poleFalloff:c.collagePoleFalloff,poleSwitch:c.collagePoleSwitch});if(to(l,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Oe(l,0,this.heraldryTex),this.copy.i("uTex",0),at(l)}drawGenerator(e,i,a,n=77,o=8){if(Ie(i.generator)){this.drawHeraldry(e,i,a,n,o,e.w,e.h);return}const r=this.gl,s=io[i.generator??"plasma"]??0,l=this.genProg(s);e.bind(),l.use(),l.i("uMode",s),l.f("uTime",a);const c=i.colorA?si(i.colorA):[.07,.04,.1],f=i.colorB?si(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",n),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),at(r)}drawTexture(e,i,a){const n=this.gl,o=this.textureProg;o&&(e.bind(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),o.use(),Oe(n,0,i),o.i("uTex",0),o.v2("uTranslate",a.transform.x,a.transform.y),o.f("uScale",a.transform.scale),o.f("uRotation",a.transform.rotation),o.v2("uFit",1,1),at(n))}applyEffect(e,i,a,n,o,r,s,l,c){const f=it(a.typeId),d=this.progFor(a);if(!f||!d){this.blitTo(e,i);return}const p=this.gl;e.bind(),d.use(),Oe(p,0,i),Oe(p,1,l),Oe(p,2,c),d.i("uTex",0),d.i("uFeedback",1),d.i("uHistory",2),d.i("uMask",3),d.v2("uResolution",e.w,e.h),d.v2("uTexel",1/e.w,1/e.h),d.f("uTime",o),d.f("uFrame",r),d.f("uQuality",s==="draft"?0:s==="preview"?1:2),d.f("u_audio",this.audioEnergy),d.f("u_bass",this.audioBass),d.v2("u_translate",n.transform.x,n.transform.y),d.f("u_scale",n.transform.scale),d.f("u_rotation",n.transform.rotation);const u=n.mask;d.i("u_maskType",lf[u.type]??0),d.i("u_maskInvert",u.invert?1:0),d.f("u_maskSoftness",u.softness),d.v4("u_maskRect",u.rect.x,u.rect.y,u.rect.w,u.rect.h),d.v2("u_maskCenter",u.center.x,u.center.y),d.f("u_maskRadius",u.radius),d.f("u_maskGradientAngle",u.gradientAngle),d.f("u_maskNoiseScale",u.noiseScale);let m=1;for(const h of f.params){const v=a.params[h.id]??h.default,y=`u_${h.id}`;if(h.kind==="color"&&typeof v=="string"){const[b,w,T]=si(v);d.v3(y,b,w,T)}else h.kind==="bool"?d.f(y,v?1:0):h.kind==="enum"?d.f(y,uf(f.params,h.id,v)):d.f(y,Number(v));h.id==="mix"&&(m=Number(v))}d.f("u_mix",m),at(p)}drawLite(e,i){const a=this.gl,n=e.layers.find(d=>d.enabled)??e.layers[0],o=n?e.sources.find(d=>d.id===n.sourceId):null,r=o&&o.kind!=="audio"?o:{generator:"plasma"};if(Ie(r.generator)){this.drawHeraldry(null,r,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const s=io[r.generator??"plasma"]??0,l=this.genProg(s);l.use(),l.i("uMode",s),l.f("uTime",i);const c=r.colorA?si(r.colorA):[.07,.04,.1],f=r.colorB?si(r.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),at(a)}render(e,i,a){const n=this.gl,o=a?.quality??e.quality,r=P0(Zi(e),i);this.audioEnergy=r.energy,this.audioBass=r.bass,this.audioBeat=r.beat;const s=Zi(e);if(this.audioBpm=s?.bpm??0,this.resolveCut(e,i,s),o!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,f=this.composite,d=this.post,p=this.blit,u=this.compositeProg,m=this.feedbackProg,h=o==="draft"?.5:1,v=Math.max(16,Math.floor((a?.width??this.canvas.width)*h)),y=Math.max(16,Math.floor((a?.height??this.canvas.height)*h));this.ensureSize(v,y),f.bind(),n.clearColor(.02,.02,.03,1),n.clear(n.COLOR_BUFFER_BIT);const b=e.globalFeedback,w=Math.max(0,Math.min(Nt-1,Math.round(b.delay))),T=(this.ringIndex-1-w+Nt*8)%Nt,_=this.ring[T].tex,M=Math.floor(i*e.fps);for(const E of e.layers){if(!E.enabled)continue;const A=o0(e,E,i),I=e.sources.find(R=>R.id===A.sourceId)??null;if(!I||I.kind==="generator"||I.kind==="audio"){const R=I&&I.kind!=="audio"?I:{generator:"plasma"};this.drawGenerator(l,R,i,e.seed,e.duration)}else{const R=this.uploadSource(I);this.drawTexture(l,R,A)}let N=l,$=c;const S=this.histFor(A.id);for(const R of A.effects){if(!R.enabled)continue;this.applyEffect($,N.tex,R,A,i,M,o,_,S.tex);const k=N;N=$,$=k}if(A.feedback.amount>.001){$.bind(),m.use(),Oe(n,0,N.tex),Oe(n,1,S.tex),m.i("uTex",0),m.i("uFeedback",1),m.f("uAmount",A.feedback.amount),m.f("uOpacity",A.feedback.opacity),m.f("uScale",A.feedback.scale),m.f("uRotation",A.feedback.rotation),m.f("uDistortion",A.feedback.distortion),m.f("uTime",i),at(n);const R=N;N=$,$=R}this.blitTo(d,f.tex),f.bind(),u.use(),Oe(n,0,d.tex),Oe(n,1,N.tex),u.i("uBase",0),u.i("uLayer",1),u.f("uOpacity",A.opacity),u.i("uBlend",sf[A.blendMode]??0),u.v2("uResolution",v,y),at(n),this.blitTo(S,N.tex)}b.amount>.001&&(d.bind(),m.use(),Oe(n,0,f.tex),Oe(n,1,_),m.i("uTex",0),m.i("uFeedback",1),m.f("uAmount",b.amount),m.f("uOpacity",b.opacity),m.f("uScale",b.scale),m.f("uRotation",b.rotation),m.f("uDistortion",b.distortion),m.f("uTime",i),at(n),this.blitTo(f,d.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%Nt,n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),p.use(),Oe(n,0,f.tex),p.i("uTex",0),p.f("uVignette",a?.vignette??.25),at(n)}capture(e,i,a,n,o="image/png",r=.92){const s=this.paintFrame(e,i,a,n);return new Promise((l,c)=>{s.toBlob(f=>{f?l(f):c(new Error("Export failed"))},o,r)})}paintFrame(e,i,a,n,o){const r=o??document.createElement("canvas");r.width!==a&&(r.width=a),r.height!==n&&(r.height=n);const s=r.getContext("2d",{alpha:!1});if(!s)throw new Error("No 2d context");this.render(e,i,{width:a,height:n,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===n)s.putImageData(ao(l,a,n),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(ao(l,this.width,this.height),0,0),s.drawImage(c,0,0,a,n)}return r}readPixels(e,i){const a=this.gl,n=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,n),a.bindFramebuffer(a.FRAMEBUFFER,null);const o=new Uint8ClampedArray(new ArrayBuffer(n.length)),r=e*4;for(let s=0;s<i;s++)o.set(n.subarray((i-1-s)*r,(i-s)*r),s*r);return o}}const hf=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,mf=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function pf(t){return t.type.startsWith("video/")||mf.test(t.name)}function gf(t){return t.type.startsWith("image/")||hf.test(t.name)}async function vf(t){if(pf(t))return yf(t);if(gf(t))return oo(t);if(w0(t))return T0(t);throw new Error(`Unsupported media: ${t.name}`)}async function no(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return oo(i)}async function oo(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Re("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await bf(e);return{id:Re("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function bf(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function yf(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,n)=>{const o=()=>{a({id:Re("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",o,{once:!0}),i.addEventListener("error",()=>n(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function wf(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Re("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function ro(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function kf(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,n=a.duration;if(!Number.isFinite(n)||n<=0)return;const o=(e%n+n)%n,r=!!i?.playing&&!i?.freeze,s=(i?.mode??"forward")==="forward",l=i?.speed??1,c=r&&s&&l>.92&&l<1.08,f=Math.abs(a.currentTime-o);if(!r){if(a.paused||a.pause(),f>1/30)try{a.currentTime=o}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),f>.35)try{a.currentTime=o}catch{}return}a.paused||a.pause();const d=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==d&&(a.playbackRate=d),f>1/30)try{a.currentTime=o}catch{}}const Tf=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ta(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ra={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var so;function xf(){return so||(so=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,n,o){function r(c,f){if(!n[c]){if(!a[c]){var d=typeof ta=="function"&&ta;if(!f&&d)return d(c,!0);if(s)return s(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var u=n[c]={exports:{}};a[c][0].call(u.exports,function(m){var h=a[c][1][m];return r(h||m)},u,u.exports,i,a,n,o)}return n[c].exports}for(var s=typeof ta=="function"&&ta,l=0;l<o.length;l++)r(o[l]);return r})({1:[function(i,a,n){var o=i("./utils"),r=i("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var c,f,d,p,u,m,h,v=[],y=0,b=l.length,w=b,T=o.getTypeOf(l)!=="string";y<l.length;)w=b-y,d=T?(c=l[y++],f=y<b?l[y++]:0,y<b?l[y++]:0):(c=l.charCodeAt(y++),f=y<b?l.charCodeAt(y++):0,y<b?l.charCodeAt(y++):0),p=c>>2,u=(3&c)<<4|f>>4,m=1<w?(15&f)<<2|d>>6:64,h=2<w?63&d:64,v.push(s.charAt(p)+s.charAt(u)+s.charAt(m)+s.charAt(h));return v.join("")},n.decode=function(l){var c,f,d,p,u,m,h=0,v=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var b,w=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&w--,l.charAt(l.length-2)===s.charAt(64)&&w--,w%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=r.uint8array?new Uint8Array(0|w):new Array(0|w);h<l.length;)c=s.indexOf(l.charAt(h++))<<2|(p=s.indexOf(l.charAt(h++)))>>4,f=(15&p)<<4|(u=s.indexOf(l.charAt(h++)))>>2,d=(3&u)<<6|(m=s.indexOf(l.charAt(h++))),b[v++]=c,u!==64&&(b[v++]=f),m!==64&&(b[v++]=d);return b}},{"./support":30,"./utils":32}],2:[function(i,a,n){var o=i("./external"),r=i("./stream/DataWorker"),s=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(f,d,p,u,m){this.compressedSize=f,this.uncompressedSize=d,this.crc32=p,this.compression=u,this.compressedContent=m}c.prototype={getContentWorker:function(){var f=new r(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return f.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new r(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,d,p){return f.pipe(new s).pipe(new l("uncompressedSize")).pipe(d.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,n){var o=i("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},n.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,n){var o=i("./utils"),r=(function(){for(var s,l=[],c=0;c<256;c++){s=c;for(var f=0;f<8;f++)s=1&s?3988292384^s>>>1:s>>>1;l[c]=s}return l})();a.exports=function(s,l){return s!==void 0&&s.length?o.getTypeOf(s)!=="string"?(function(c,f,d,p){var u=r,m=p+d;c^=-1;for(var h=p;h<m;h++)c=c>>>8^u[255&(c^f[h])];return-1^c})(0|l,s,s.length,0):(function(c,f,d,p){var u=r,m=p+d;c^=-1;for(var h=p;h<m;h++)c=c>>>8^u[255&(c^f.charCodeAt(h))];return-1^c})(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(i,a,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(i,a,n){var o=null;o=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:o}},{lie:37}],7:[function(i,a,n){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",r=i("pako"),s=i("./utils"),l=i("./stream/GenericWorker"),c=o?"uint8array":"array";function f(d,p){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=p,this.meta={}}n.magic="\b\0",s.inherits(f,l),f.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(c,d.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new r[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(p){d.push({data:p,meta:d.meta})}},n.compressWorker=function(d){return new f("Deflate",d)},n.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,n){function o(u,m){var h,v="";for(h=0;h<m;h++)v+=String.fromCharCode(255&u),u>>>=8;return v}function r(u,m,h,v,y,b){var w,T,_=u.file,M=u.compression,E=b!==c.utf8encode,A=s.transformTo("string",b(_.name)),I=s.transformTo("string",c.utf8encode(_.name)),N=_.comment,$=s.transformTo("string",b(N)),S=s.transformTo("string",c.utf8encode(N)),R=I.length!==_.name.length,k=S.length!==N.length,H="",J="",D="",ne=_.dir,K=_.date,re={crc32:0,compressedSize:0,uncompressedSize:0};m&&!h||(re.crc32=u.crc32,re.compressedSize=u.compressedSize,re.uncompressedSize=u.uncompressedSize);var O=0;m&&(O|=8),E||!R&&!k||(O|=2048);var F=0,oe=0;ne&&(F|=16),y==="UNIX"?(oe=798,F|=(function(Y,ye){var Pe=Y;return Y||(Pe=ye?16893:33204),(65535&Pe)<<16})(_.unixPermissions,ne)):(oe=20,F|=(function(Y){return 63&(Y||0)})(_.dosPermissions)),w=K.getUTCHours(),w<<=6,w|=K.getUTCMinutes(),w<<=5,w|=K.getUTCSeconds()/2,T=K.getUTCFullYear()-1980,T<<=4,T|=K.getUTCMonth()+1,T<<=5,T|=K.getUTCDate(),R&&(J=o(1,1)+o(f(A),4)+I,H+="up"+o(J.length,2)+J),k&&(D=o(1,1)+o(f($),4)+S,H+="uc"+o(D.length,2)+D);var ee="";return ee+=`
\0`,ee+=o(O,2),ee+=M.magic,ee+=o(w,2),ee+=o(T,2),ee+=o(re.crc32,4),ee+=o(re.compressedSize,4),ee+=o(re.uncompressedSize,4),ee+=o(A.length,2),ee+=o(H.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ee+A+H,dirRecord:d.CENTRAL_FILE_HEADER+o(oe,2)+ee+o($.length,2)+"\0\0\0\0"+o(F,4)+o(v,4)+A+H+$}}var s=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),f=i("../crc32"),d=i("../signature");function p(u,m,h,v){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=h,this.encodeFileName=v,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(p,l),p.prototype.push=function(u){var m=u.meta.percent||0,h=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:h?(m+100*(h-v-1))/h:100}}))},p.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var m=this.streamFiles&&!u.file.dir;if(m){var h=r(u,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(u){this.accumulate=!1;var m=this.streamFiles&&!u.file.dir,h=r(u,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),m)this.push({data:(function(v){return d.DATA_DESCRIPTOR+o(v.crc32,4)+o(v.compressedSize,4)+o(v.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var u=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var h=this.bytesWritten-u,v=(function(y,b,w,T,_){var M=s.transformTo("string",_(T));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(y,2)+o(y,2)+o(b,4)+o(w,4)+o(M.length,2)+M})(this.dirRecords.length,h,u,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(u){this._sources.push(u);var m=this;return u.on("data",function(h){m.processChunk(h)}),u.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),u.on("error",function(h){m.error(h)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(u){var m=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var h=0;h<m.length;h++)try{m[h].error(u)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,m=0;m<u.length;m++)u[m].lock()},a.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,n){var o=i("../compressions"),r=i("./ZipFileWorker");n.generateWorker=function(s,l,c){var f=new r(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{s.forEach(function(p,u){d++;var m=(function(b,w){var T=b||w,_=o[T];if(!_)throw new Error(T+" is not a valid compression method !");return _})(u.options.compression,l.compression),h=u.options.compressionOptions||l.compressionOptions||{},v=u.dir,y=u.date;u._compressWorker(m,h).withStreamInfo("file",{name:p,dir:v,date:y,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(f)}),f.entriesCount=d}catch(p){f.error(p)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,n){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var r=new o;for(var s in this)typeof this[s]!="function"&&(r[s]=this[s]);return r}}(o.prototype=i("./object")).loadAsync=i("./load"),o.support=i("./support"),o.defaults=i("./defaults"),o.version="3.10.1",o.loadAsync=function(r,s){return new o().loadAsync(r,s)},o.external=i("./external"),a.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,n){var o=i("./utils"),r=i("./external"),s=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),f=i("./nodejsUtils");function d(p){return new r.Promise(function(u,m){var h=p.decompressed.getContentWorker().pipe(new c);h.on("error",function(v){m(v)}).on("end",function(){h.streamInfo.crc32!==p.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}a.exports=function(p,u){var m=this;return u=o.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),f.isNode&&f.isStream(p)?r.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",p,!0,u.optimizedBinaryString,u.base64).then(function(h){var v=new l(u);return v.load(h),v}).then(function(h){var v=[r.Promise.resolve(h)],y=h.files;if(u.checkCRC32)for(var b=0;b<y.length;b++)v.push(d(y[b]));return r.Promise.all(v)}).then(function(h){for(var v=h.shift(),y=v.files,b=0;b<y.length;b++){var w=y[b],T=w.fileNameStr,_=o.resolve(w.fileNameStr);m.file(_,w.decompressed,{binary:!0,optimizedBinaryString:!0,date:w.date,dir:w.dir,comment:w.fileCommentStr.length?w.fileCommentStr:null,unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions,createFolders:u.createFolders}),w.dir||(m.file(_).unsafeOriginalName=T)}return v.zipComment.length&&(m.comment=v.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,n){var o=i("../utils"),r=i("../stream/GenericWorker");function s(l,c){r.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}o.inherits(s,r),s.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},s.prototype.pause=function(){return!!r.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,n){var o=i("readable-stream").Readable;function r(s,l,c){o.call(this,l),this._helper=s;var f=this;s.on("data",function(d,p){f.push(d)||f._helper.pause(),c&&c(p)}).on("error",function(d){f.emit("error",d)}).on("end",function(){f.push(null)})}i("../utils").inherits(r,o),r.prototype._read=function(){this._helper.resume()},a.exports=r},{"../utils":32,"readable-stream":16}],14:[function(i,a,n){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,r){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,r);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,r)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var r=new Buffer(o);return r.fill(0),r},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(i,a,n){function o(_,M,E){var A,I=s.getTypeOf(M),N=s.extend(E||{},f);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&16384&N.unixPermissions&&(N.dir=!0),N.dosPermissions&&16&N.dosPermissions&&(N.dir=!0),N.dir&&(_=y(_)),N.createFolders&&(A=v(_))&&b.call(this,A,!0);var $=I==="string"&&N.binary===!1&&N.base64===!1;E&&E.binary!==void 0||(N.binary=!$),(M instanceof d&&M.uncompressedSize===0||N.dir||!M||M.length===0)&&(N.base64=!1,N.binary=!0,M="",N.compression="STORE",I="string");var S=null;S=M instanceof d||M instanceof l?M:m.isNode&&m.isStream(M)?new h(_,M):s.prepareContent(_,M,N.binary,N.optimizedBinaryString,N.base64);var R=new p(_,S,N);this.files[_]=R}var r=i("./utf8"),s=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),f=i("./defaults"),d=i("./compressedObject"),p=i("./zipObject"),u=i("./generate"),m=i("./nodejsUtils"),h=i("./nodejs/NodejsStreamInputAdapter"),v=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var M=_.lastIndexOf("/");return 0<M?_.substring(0,M):""},y=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},b=function(_,M){return M=M!==void 0?M:f.createFolders,_=y(_),this.files[_]||o.call(this,_,null,{dir:!0,createFolders:M}),this.files[_]};function w(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var M,E,A;for(M in this.files)A=this.files[M],(E=M.slice(this.root.length,M.length))&&M.slice(0,this.root.length)===this.root&&_(E,A)},filter:function(_){var M=[];return this.forEach(function(E,A){_(E,A)&&M.push(A)}),M},file:function(_,M,E){if(arguments.length!==1)return _=this.root+_,o.call(this,_,M,E),this;if(w(_)){var A=_;return this.filter(function(N,$){return!$.dir&&A.test(N)})}var I=this.files[this.root+_];return I&&!I.dir?I:null},folder:function(_){if(!_)return this;if(w(_))return this.filter(function(I,N){return N.dir&&_.test(I)});var M=this.root+_,E=b.call(this,M),A=this.clone();return A.root=E.name,A},remove:function(_){_=this.root+_;var M=this.files[_];if(M||(_.slice(-1)!=="/"&&(_+="/"),M=this.files[_]),M&&!M.dir)delete this.files[_];else for(var E=this.filter(function(I,N){return N.name.slice(0,_.length)===_}),A=0;A<E.length;A++)delete this.files[E[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var M,E={};try{if((E=s.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:r.utf8encode})).type=E.type.toLowerCase(),E.compression=E.compression.toUpperCase(),E.type==="binarystring"&&(E.type="string"),!E.type)throw new Error("No output type specified.");s.checkSupport(E.type),E.platform!=="darwin"&&E.platform!=="freebsd"&&E.platform!=="linux"&&E.platform!=="sunos"||(E.platform="UNIX"),E.platform==="win32"&&(E.platform="DOS");var A=E.comment||this.comment||"";M=u.generateWorker(this,E,A)}catch(I){(M=new l("error")).error(I)}return new c(M,E.type||"string",E.mimeType)},generateAsync:function(_,M){return this.generateInternalStream(_).accumulate(M)},generateNodeStream:function(_,M){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(M)}};a.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,n){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,n){var o=i("./DataReader");function r(s){o.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}i("../utils").inherits(r,o),r.prototype.byteAt=function(s){return this.data[this.zero+s]},r.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),c=s.charCodeAt(1),f=s.charCodeAt(2),d=s.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===f&&this.data[p+3]===d)return p-this.zero;return-1},r.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),c=s.charCodeAt(1),f=s.charCodeAt(2),d=s.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&f===p[2]&&d===p[3]},r.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=r},{"../utils":32,"./DataReader":18}],18:[function(i,a,n){var o=i("../utils");function r(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}r.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,c=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=s,c},readString:function(s){return o.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},a.exports=r},{"../utils":32}],19:[function(i,a,n){var o=i("./Uint8ArrayReader");function r(s){o.call(this,s)}i("../utils").inherits(r,o),r.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=r},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,n){var o=i("./DataReader");function r(s){o.call(this,s)}i("../utils").inherits(r,o),r.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},r.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},r.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},r.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=r},{"../utils":32,"./DataReader":18}],21:[function(i,a,n){var o=i("./ArrayReader");function r(s){o.call(this,s)}i("../utils").inherits(r,o),r.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=r},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,n){var o=i("../utils"),r=i("../support"),s=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),f=i("./Uint8ArrayReader");a.exports=function(d){var p=o.getTypeOf(d);return o.checkSupport(p),p!=="string"||r.uint8array?p==="nodebuffer"?new c(d):r.uint8array?new f(o.transformTo("uint8array",d)):new s(o.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,n){var o=i("./GenericWorker"),r=i("../utils");function s(l){o.call(this,"ConvertWorker to "+l),this.destType=l}r.inherits(s,o),s.prototype.processChunk=function(l){this.push({data:r.transformTo(this.destType,l.data),meta:l.meta})},a.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,n){var o=i("./GenericWorker"),r=i("../crc32");function s(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(s,o),s.prototype.processChunk=function(l){this.streamInfo.crc32=r(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,n){var o=i("../utils"),r=i("./GenericWorker");function s(l){r.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(s,r),s.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}r.prototype.processChunk.call(this,l)},a.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,n){var o=i("../utils"),r=i("./GenericWorker");function s(l){r.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=o.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}o.inherits(s,r),s.prototype.cleanUp=function(){r.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,n){function o(r){this.name=r||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(r){this.emit("data",r)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(r){this.emit("error",r)}return!0},error:function(r){return!this.isFinished&&(this.isPaused?this.generatedError=r:(this.isFinished=!0,this.emit("error",r),this.previous&&this.previous.error(r),this.cleanUp()),!0)},on:function(r,s){return this._listeners[r].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(r,s){if(this._listeners[r])for(var l=0;l<this._listeners[r].length;l++)this._listeners[r][l].call(this,s)},pipe:function(r){return r.registerPrevious(this)},registerPrevious:function(r){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=r.streamInfo,this.mergeStreamInfo(),this.previous=r;var s=this;return r.on("data",function(l){s.processChunk(l)}),r.on("end",function(){s.end()}),r.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var r=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),r=!0),this.previous&&this.previous.resume(),!r},flush:function(){},processChunk:function(r){this.push(r)},withStreamInfo:function(r,s){return this.extraStreamInfo[r]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var r in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,r)&&(this.streamInfo[r]=this.extraStreamInfo[r])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var r="Worker "+this.name;return this.previous?this.previous+" -> "+r:r}},a.exports=o},{}],29:[function(i,a,n){var o=i("../utils"),r=i("./ConvertWorker"),s=i("./GenericWorker"),l=i("../base64"),c=i("../support"),f=i("../external"),d=null;if(c.nodestream)try{d=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(m,h){return new f.Promise(function(v,y){var b=[],w=m._internalType,T=m._outputType,_=m._mimeType;m.on("data",function(M,E){b.push(M),h&&h(E)}).on("error",function(M){b=[],y(M)}).on("end",function(){try{var M=(function(E,A,I){switch(E){case"blob":return o.newBlob(o.transformTo("arraybuffer",A),I);case"base64":return l.encode(A);default:return o.transformTo(E,A)}})(T,(function(E,A){var I,N=0,$=null,S=0;for(I=0;I<A.length;I++)S+=A[I].length;switch(E){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for($=new Uint8Array(S),I=0;I<A.length;I++)$.set(A[I],N),N+=A[I].length;return $;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+E+"'")}})(w,b),_);v(M)}catch(E){y(E)}b=[]}).resume()})}function u(m,h,v){var y=h;switch(h){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=h,this._mimeType=v,o.checkSupport(y),this._worker=m.pipe(new r(y)),m.lock()}catch(b){this._worker=new s("error"),this._worker.error(b)}}u.prototype={accumulate:function(m){return p(this,m)},on:function(m,h){var v=this;return m==="data"?this._worker.on(m,function(y){h.call(v,y.data,y.meta)}):this._worker.on(m,function(){o.delay(h,arguments,v)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},m)}},a.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var o=new ArrayBuffer(0);try{n.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);r.append(o),n.blob=r.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!i("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,n){for(var o=i("./utils"),r=i("./support"),s=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}n.utf8encode=function(u){return r.nodebuffer?s.newBufferFrom(u,"utf-8"):(function(m){var h,v,y,b,w,T=m.length,_=0;for(b=0;b<T;b++)(64512&(v=m.charCodeAt(b)))==55296&&b+1<T&&(64512&(y=m.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(y-56320),b++),_+=v<128?1:v<2048?2:v<65536?3:4;for(h=r.uint8array?new Uint8Array(_):new Array(_),b=w=0;w<_;b++)(64512&(v=m.charCodeAt(b)))==55296&&b+1<T&&(64512&(y=m.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(y-56320),b++),v<128?h[w++]=v:(v<2048?h[w++]=192|v>>>6:(v<65536?h[w++]=224|v>>>12:(h[w++]=240|v>>>18,h[w++]=128|v>>>12&63),h[w++]=128|v>>>6&63),h[w++]=128|63&v);return h})(u)},n.utf8decode=function(u){return r.nodebuffer?o.transformTo("nodebuffer",u).toString("utf-8"):(function(m){var h,v,y,b,w=m.length,T=new Array(2*w);for(h=v=0;h<w;)if((y=m[h++])<128)T[v++]=y;else if(4<(b=c[y]))T[v++]=65533,h+=b-1;else{for(y&=b===2?31:b===3?15:7;1<b&&h<w;)y=y<<6|63&m[h++],b--;1<b?T[v++]=65533:y<65536?T[v++]=y:(y-=65536,T[v++]=55296|y>>10&1023,T[v++]=56320|1023&y)}return T.length!==v&&(T.subarray?T=T.subarray(0,v):T.length=v),o.applyFromCharCode(T)})(u=o.transformTo(r.uint8array?"uint8array":"array",u))},o.inherits(d,l),d.prototype.processChunk=function(u){var m=o.transformTo(r.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(r.uint8array){var h=m;(m=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),m.set(h,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var v=(function(b,w){var T;for((w=w||b.length)>b.length&&(w=b.length),T=w-1;0<=T&&(192&b[T])==128;)T--;return T<0||T===0?w:T+c[b[T]]>w?T:w})(m),y=m;v!==m.length&&(r.uint8array?(y=m.subarray(0,v),this.leftOver=m.subarray(v,m.length)):(y=m.slice(0,v),this.leftOver=m.slice(v,m.length))),this.push({data:n.utf8decode(y),meta:u.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=d,o.inherits(p,l),p.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,n){var o=i("./support"),r=i("./base64"),s=i("./nodejsUtils"),l=i("./external");function c(h){return h}function f(h,v){for(var y=0;y<h.length;++y)v[y]=255&h.charCodeAt(y);return v}i("setimmediate"),n.newBlob=function(h,v){n.checkSupport("blob");try{return new Blob([h],{type:v})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(h),y.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,v,y){var b=[],w=0,T=h.length;if(T<=y)return String.fromCharCode.apply(null,h);for(;w<T;)v==="array"||v==="nodebuffer"?b.push(String.fromCharCode.apply(null,h.slice(w,Math.min(w+y,T)))):b.push(String.fromCharCode.apply(null,h.subarray(w,Math.min(w+y,T)))),w+=y;return b.join("")},stringifyByChar:function(h){for(var v="",y=0;y<h.length;y++)v+=String.fromCharCode(h[y]);return v},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function p(h){var v=65536,y=n.getTypeOf(h),b=!0;if(y==="uint8array"?b=d.applyCanBeUsed.uint8array:y==="nodebuffer"&&(b=d.applyCanBeUsed.nodebuffer),b)for(;1<v;)try{return d.stringifyByChunk(h,y,v)}catch{v=Math.floor(v/2)}return d.stringifyByChar(h)}function u(h,v){for(var y=0;y<h.length;y++)v[y]=h[y];return v}n.applyFromCharCode=p;var m={};m.string={string:c,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return m.string.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:function(h){return f(h,s.allocBuffer(h.length))}},m.array={string:p,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(h)}},m.arraybuffer={string:function(h){return p(new Uint8Array(h))},array:function(h){return u(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(new Uint8Array(h))}},m.uint8array={string:p,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return s.newBufferFrom(h)}},m.nodebuffer={string:p,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return m.nodebuffer.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:c},n.transformTo=function(h,v){if(v=v||"",!h)return v;n.checkSupport(h);var y=n.getTypeOf(v);return m[y][h](v)},n.resolve=function(h){for(var v=h.split("/"),y=[],b=0;b<v.length;b++){var w=v[b];w==="."||w===""&&b!==0&&b!==v.length-1||(w===".."?y.pop():y.push(w))}return y.join("/")},n.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":o.nodebuffer&&s.isBuffer(h)?"nodebuffer":o.uint8array&&h instanceof Uint8Array?"uint8array":o.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(h){if(!o[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(h){var v,y,b="";for(y=0;y<(h||"").length;y++)b+="\\x"+((v=h.charCodeAt(y))<16?"0":"")+v.toString(16).toUpperCase();return b},n.delay=function(h,v,y){setImmediate(function(){h.apply(y||null,v||[])})},n.inherits=function(h,v){function y(){}y.prototype=v.prototype,h.prototype=new y},n.extend=function(){var h,v,y={};for(h=0;h<arguments.length;h++)for(v in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],v)&&y[v]===void 0&&(y[v]=arguments[h][v]);return y},n.prepareContent=function(h,v,y,b,w){return l.Promise.resolve(v).then(function(T){return o.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,M){var E=new FileReader;E.onload=function(A){_(A.target.result)},E.onerror=function(A){M(A.target.error)},E.readAsArrayBuffer(T)}):T}).then(function(T){var _=n.getTypeOf(T);return _?(_==="arraybuffer"?T=n.transformTo("uint8array",T):_==="string"&&(w?T=r.decode(T):y&&b!==!0&&(T=(function(M){return f(M,o.uint8array?new Uint8Array(M.length):new Array(M.length))})(T))),T):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,n){var o=i("./reader/readerFor"),r=i("./utils"),s=i("./signature"),l=i("./zipEntry"),c=i("./support");function f(d){this.files=[],this.loadOptions=d}f.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+r.pretty(p)+", expected "+r.pretty(d)+")")}},isSignature:function(d,p){var u=this.reader.index;this.reader.setIndex(d);var m=this.reader.readString(4)===p;return this.reader.setIndex(u),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",u=r.transformTo(p,d);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,p,u,m=this.zip64EndOfCentralSize-44;0<m;)d=this.reader.readInt(2),p=this.reader.readInt(4),u=this.reader.readData(p),this.zip64ExtensibleData[d]={id:d,length:p,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,p;for(d=0;d<this.files.length;d++)p=this.files[d],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var p=d;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===r.MAX_VALUE_16BITS||this.diskWithCentralDirStart===r.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===r.MAX_VALUE_16BITS||this.centralDirRecords===r.MAX_VALUE_16BITS||this.centralDirSize===r.MAX_VALUE_32BITS||this.centralDirOffset===r.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var m=p-u;if(0<m)this.isSignature(p,s.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(d){this.reader=o(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,n){var o=i("./reader/readerFor"),r=i("./utils"),s=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),f=i("./compressions"),d=i("./support");function p(u,m){this.options=u,this.loadOptions=m}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var m,h;if(u.skip(22),this.fileNameLength=u.readInt(2),h=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(v){for(var y in f)if(Object.prototype.hasOwnProperty.call(f,y)&&f[y].magic===v)return f[y];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+r.pretty(this.compressionMethod)+" unknown (inner file : "+r.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,m,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var m=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(m),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=o(this.extraFields[1].value);this.uncompressedSize===r.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===r.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===r.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===r.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var m,h,v,y=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<y;)m=u.readInt(2),h=u.readInt(2),v=u.readData(h),this.extraFields[m]={id:m,length:h,value:v};u.setIndex(y)},handleUTF8:function(){var u=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var h=r.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var y=r.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var m=o(u.value);return m.readInt(1)!==1||l(this.fileName)!==m.readInt(4)?null:c.utf8decode(m.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var m=o(u.value);return m.readInt(1)!==1||l(this.fileComment)!==m.readInt(4)?null:c.utf8decode(m.readData(u.length-5))}return null}},a.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,n){function o(m,h,v){this.name=m,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=h,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var r=i("./stream/StreamHelper"),s=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),f=i("./stream/GenericWorker");o.prototype={internalStream:function(m){var h=null,v="string";try{if(!m)throw new Error("No output type specified.");var y=(v=m.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),h=this._decompressWorker();var b=!this._dataBinary;b&&!y&&(h=h.pipe(new l.Utf8EncodeWorker)),!b&&y&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(w){(h=new f("error")).error(w)}return new r(h,v,"")},async:function(m,h){return this.internalStream(m).accumulate(h)},nodeStream:function(m,h){return this.internalStream(m||"nodebuffer").toNodejsStream(h)},_compressWorker:function(m,h){if(this._data instanceof c&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(v,m,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new s(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)o.prototype[d[u]]=p;a.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,n){(function(o){var r,s,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var c=0,f=new l(m),d=o.document.createTextNode("");f.observe(d,{characterData:!0}),r=function(){d.data=c=++c%2}}else if(o.setImmediate||o.MessageChannel===void 0)r="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var h=o.document.createElement("script");h.onreadystatechange=function(){m(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},o.document.documentElement.appendChild(h)}:function(){setTimeout(m,0)};else{var p=new o.MessageChannel;p.port1.onmessage=m,r=function(){p.port2.postMessage(0)}}var u=[];function m(){var h,v;s=!0;for(var y=u.length;y;){for(v=u,u=[],h=-1;++h<y;)v[h]();y=u.length}s=!1}a.exports=function(h){u.push(h)!==1||s||r()}}).call(this,typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,n){var o=i("immediate");function r(){}var s={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function d(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,y!==r&&h(this,y)}function p(y,b,w){this.promise=y,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function u(y,b,w){o(function(){var T;try{T=b(w)}catch(_){return s.reject(y,_)}T===y?s.reject(y,new TypeError("Cannot resolve promise with itself")):s.resolve(y,T)})}function m(y){var b=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof b=="function")return function(){b.apply(y,arguments)}}function h(y,b){var w=!1;function T(E){w||(w=!0,s.reject(y,E))}function _(E){w||(w=!0,s.resolve(y,E))}var M=v(function(){b(_,T)});M.status==="error"&&T(M.value)}function v(y,b){var w={};try{w.value=y(b),w.status="success"}catch(T){w.status="error",w.value=T}return w}(a.exports=d).prototype.finally=function(y){if(typeof y!="function")return this;var b=this.constructor;return this.then(function(w){return b.resolve(y()).then(function(){return w})},function(w){return b.resolve(y()).then(function(){throw w})})},d.prototype.catch=function(y){return this.then(null,y)},d.prototype.then=function(y,b){if(typeof y!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var w=new this.constructor(r);return this.state!==f?u(w,this.state===c?y:b,this.outcome):this.queue.push(new p(w,y,b)),w},p.prototype.callFulfilled=function(y){s.resolve(this.promise,y)},p.prototype.otherCallFulfilled=function(y){u(this.promise,this.onFulfilled,y)},p.prototype.callRejected=function(y){s.reject(this.promise,y)},p.prototype.otherCallRejected=function(y){u(this.promise,this.onRejected,y)},s.resolve=function(y,b){var w=v(m,b);if(w.status==="error")return s.reject(y,w.value);var T=w.value;if(T)h(y,T);else{y.state=c,y.outcome=b;for(var _=-1,M=y.queue.length;++_<M;)y.queue[_].callFulfilled(b)}return y},s.reject=function(y,b){y.state=l,y.outcome=b;for(var w=-1,T=y.queue.length;++w<T;)y.queue[w].callRejected(b);return y},d.resolve=function(y){return y instanceof this?y:s.resolve(new this(r),y)},d.reject=function(y){var b=new this(r);return s.reject(b,y)},d.all=function(y){var b=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=y.length,T=!1;if(!w)return this.resolve([]);for(var _=new Array(w),M=0,E=-1,A=new this(r);++E<w;)I(y[E],E);return A;function I(N,$){b.resolve(N).then(function(S){_[$]=S,++M!==w||T||(T=!0,s.resolve(A,_))},function(S){T||(T=!0,s.reject(A,S))})}},d.race=function(y){var b=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=y.length,T=!1;if(!w)return this.resolve([]);for(var _=-1,M=new this(r);++_<w;)E=y[_],b.resolve(E).then(function(A){T||(T=!0,s.resolve(M,A))},function(A){T||(T=!0,s.reject(M,A))});var E;return M}},{immediate:36}],38:[function(i,a,n){var o={};(0,i("./lib/utils/common").assign)(o,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,n){var o=i("./zlib/deflate"),r=i("./utils/common"),s=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),f=Object.prototype.toString,d=0,p=-1,u=0,m=8;function h(y){if(!(this instanceof h))return new h(y);this.options=r.assign({level:p,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},y||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var w=o.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(w!==d)throw new Error(l[w]);if(b.header&&o.deflateSetHeader(this.strm,b.header),b.dictionary){var T;if(T=typeof b.dictionary=="string"?s.string2buf(b.dictionary):f.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(w=o.deflateSetDictionary(this.strm,T))!==d)throw new Error(l[w]);this._dict_set=!0}}function v(y,b){var w=new h(b);if(w.push(y,!0),w.err)throw w.msg||l[w.err];return w.result}h.prototype.push=function(y,b){var w,T,_=this.strm,M=this.options.chunkSize;if(this.ended)return!1;T=b===~~b?b:b===!0?4:0,typeof y=="string"?_.input=s.string2buf(y):f.call(y)==="[object ArrayBuffer]"?_.input=new Uint8Array(y):_.input=y,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new r.Buf8(M),_.next_out=0,_.avail_out=M),(w=o.deflate(_,T))!==1&&w!==d)return this.onEnd(w),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(r.shrinkBuf(_.output,_.next_out))):this.onData(r.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&w!==1);return T===4?(w=o.deflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===d):T!==2||(this.onEnd(d),!(_.avail_out=0))},h.prototype.onData=function(y){this.chunks.push(y)},h.prototype.onEnd=function(y){y===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},n.Deflate=h,n.deflate=v,n.deflateRaw=function(y,b){return(b=b||{}).raw=!0,v(y,b)},n.gzip=function(y,b){return(b=b||{}).gzip=!0,v(y,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,n){var o=i("./zlib/inflate"),r=i("./utils/common"),s=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),f=i("./zlib/zstream"),d=i("./zlib/gzheader"),p=Object.prototype.toString;function u(h){if(!(this instanceof u))return new u(h);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},h||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||h&&h.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var y=o.inflateInit2(this.strm,v.windowBits);if(y!==l.Z_OK)throw new Error(c[y]);this.header=new d,o.inflateGetHeader(this.strm,this.header)}function m(h,v){var y=new u(v);if(y.push(h,!0),y.err)throw y.msg||c[y.err];return y.result}u.prototype.push=function(h,v){var y,b,w,T,_,M,E=this.strm,A=this.options.chunkSize,I=this.options.dictionary,N=!1;if(this.ended)return!1;b=v===~~v?v:v===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?E.input=s.binstring2buf(h):p.call(h)==="[object ArrayBuffer]"?E.input=new Uint8Array(h):E.input=h,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new r.Buf8(A),E.next_out=0,E.avail_out=A),(y=o.inflate(E,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&I&&(M=typeof I=="string"?s.string2buf(I):p.call(I)==="[object ArrayBuffer]"?new Uint8Array(I):I,y=o.inflateSetDictionary(this.strm,M)),y===l.Z_BUF_ERROR&&N===!0&&(y=l.Z_OK,N=!1),y!==l.Z_STREAM_END&&y!==l.Z_OK)return this.onEnd(y),!(this.ended=!0);E.next_out&&(E.avail_out!==0&&y!==l.Z_STREAM_END&&(E.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(w=s.utf8border(E.output,E.next_out),T=E.next_out-w,_=s.buf2string(E.output,w),E.next_out=T,E.avail_out=A-T,T&&r.arraySet(E.output,E.output,w,T,0),this.onData(_)):this.onData(r.shrinkBuf(E.output,E.next_out)))),E.avail_in===0&&E.avail_out===0&&(N=!0)}while((0<E.avail_in||E.avail_out===0)&&y!==l.Z_STREAM_END);return y===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(y=o.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(E.avail_out=0))},u.prototype.onData=function(h){this.chunks.push(h)},u.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},n.Inflate=u,n.inflate=m,n.inflateRaw=function(h,v){return(v=v||{}).raw=!0,m(h,v)},n.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,n){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var d in f)f.hasOwnProperty(d)&&(l[d]=f[d])}}return l},n.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var r={arraySet:function(l,c,f,d,p){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+d),p);else for(var u=0;u<d;u++)l[p+u]=c[f+u]},flattenChunks:function(l){var c,f,d,p,u,m;for(c=d=0,f=l.length;c<f;c++)d+=l[c].length;for(m=new Uint8Array(d),c=p=0,f=l.length;c<f;c++)u=l[c],m.set(u,p),p+=u.length;return m}},s={arraySet:function(l,c,f,d,p){for(var u=0;u<d;u++)l[p+u]=c[f+u]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,r)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,s))},n.setTyped(o)},{}],42:[function(i,a,n){var o=i("./common"),r=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new o.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(d,p){if(p<65537&&(d.subarray&&s||!d.subarray&&r))return String.fromCharCode.apply(null,o.shrinkBuf(d,p));for(var u="",m=0;m<p;m++)u+=String.fromCharCode(d[m]);return u}l[254]=l[254]=1,n.string2buf=function(d){var p,u,m,h,v,y=d.length,b=0;for(h=0;h<y;h++)(64512&(u=d.charCodeAt(h)))==55296&&h+1<y&&(64512&(m=d.charCodeAt(h+1)))==56320&&(u=65536+(u-55296<<10)+(m-56320),h++),b+=u<128?1:u<2048?2:u<65536?3:4;for(p=new o.Buf8(b),h=v=0;v<b;h++)(64512&(u=d.charCodeAt(h)))==55296&&h+1<y&&(64512&(m=d.charCodeAt(h+1)))==56320&&(u=65536+(u-55296<<10)+(m-56320),h++),u<128?p[v++]=u:(u<2048?p[v++]=192|u>>>6:(u<65536?p[v++]=224|u>>>12:(p[v++]=240|u>>>18,p[v++]=128|u>>>12&63),p[v++]=128|u>>>6&63),p[v++]=128|63&u);return p},n.buf2binstring=function(d){return f(d,d.length)},n.binstring2buf=function(d){for(var p=new o.Buf8(d.length),u=0,m=p.length;u<m;u++)p[u]=d.charCodeAt(u);return p},n.buf2string=function(d,p){var u,m,h,v,y=p||d.length,b=new Array(2*y);for(u=m=0;u<y;)if((h=d[u++])<128)b[m++]=h;else if(4<(v=l[h]))b[m++]=65533,u+=v-1;else{for(h&=v===2?31:v===3?15:7;1<v&&u<y;)h=h<<6|63&d[u++],v--;1<v?b[m++]=65533:h<65536?b[m++]=h:(h-=65536,b[m++]=55296|h>>10&1023,b[m++]=56320|1023&h)}return f(b,m)},n.utf8border=function(d,p){var u;for((p=p||d.length)>d.length&&(p=d.length),u=p-1;0<=u&&(192&d[u])==128;)u--;return u<0||u===0?p:u+l[d[u]]>p?u:p}},{"./common":41}],43:[function(i,a,n){a.exports=function(o,r,s,l){for(var c=65535&o|0,f=o>>>16&65535|0,d=0;s!==0;){for(s-=d=2e3<s?2e3:s;f=f+(c=c+r[l++]|0)|0,--d;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(i,a,n){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,n){var o=(function(){for(var r,s=[],l=0;l<256;l++){r=l;for(var c=0;c<8;c++)r=1&r?3988292384^r>>>1:r>>>1;s[l]=r}return s})();a.exports=function(r,s,l,c){var f=o,d=c+l;r^=-1;for(var p=c;p<d;p++)r=r>>>8^f[255&(r^s[p])];return-1^r}},{}],46:[function(i,a,n){var o,r=i("../utils/common"),s=i("./trees"),l=i("./adler32"),c=i("./crc32"),f=i("./messages"),d=0,p=4,u=0,m=-2,h=-1,v=4,y=2,b=8,w=9,T=286,_=30,M=19,E=2*T+1,A=15,I=3,N=258,$=N+I+1,S=42,R=113,k=1,H=2,J=3,D=4;function ne(g,W){return g.msg=f[W],W}function K(g){return(g<<1)-(4<g?9:0)}function re(g){for(var W=g.length;0<=--W;)g[W]=0}function O(g){var W=g.state,L=W.pending;L>g.avail_out&&(L=g.avail_out),L!==0&&(r.arraySet(g.output,W.pending_buf,W.pending_out,L,g.next_out),g.next_out+=L,W.pending_out+=L,g.total_out+=L,g.avail_out-=L,W.pending-=L,W.pending===0&&(W.pending_out=0))}function F(g,W){s._tr_flush_block(g,0<=g.block_start?g.block_start:-1,g.strstart-g.block_start,W),g.block_start=g.strstart,O(g.strm)}function oe(g,W){g.pending_buf[g.pending++]=W}function ee(g,W){g.pending_buf[g.pending++]=W>>>8&255,g.pending_buf[g.pending++]=255&W}function Y(g,W){var L,C,x=g.max_chain_length,B=g.strstart,j=g.prev_length,V=g.nice_match,z=g.strstart>g.w_size-$?g.strstart-(g.w_size-$):0,X=g.window,te=g.w_mask,Q=g.prev,se=g.strstart+N,ve=X[B+j-1],de=X[B+j];g.prev_length>=g.good_match&&(x>>=2),V>g.lookahead&&(V=g.lookahead);do if(X[(L=W)+j]===de&&X[L+j-1]===ve&&X[L]===X[B]&&X[++L]===X[B+1]){B+=2,L++;do;while(X[++B]===X[++L]&&X[++B]===X[++L]&&X[++B]===X[++L]&&X[++B]===X[++L]&&X[++B]===X[++L]&&X[++B]===X[++L]&&X[++B]===X[++L]&&X[++B]===X[++L]&&B<se);if(C=N-(se-B),B=se-N,j<C){if(g.match_start=W,V<=(j=C))break;ve=X[B+j-1],de=X[B+j]}}while((W=Q[W&te])>z&&--x!=0);return j<=g.lookahead?j:g.lookahead}function ye(g){var W,L,C,x,B,j,V,z,X,te,Q=g.w_size;do{if(x=g.window_size-g.lookahead-g.strstart,g.strstart>=Q+(Q-$)){for(r.arraySet(g.window,g.window,Q,Q,0),g.match_start-=Q,g.strstart-=Q,g.block_start-=Q,W=L=g.hash_size;C=g.head[--W],g.head[W]=Q<=C?C-Q:0,--L;);for(W=L=Q;C=g.prev[--W],g.prev[W]=Q<=C?C-Q:0,--L;);x+=Q}if(g.strm.avail_in===0)break;if(j=g.strm,V=g.window,z=g.strstart+g.lookahead,X=x,te=void 0,te=j.avail_in,X<te&&(te=X),L=te===0?0:(j.avail_in-=te,r.arraySet(V,j.input,j.next_in,te,z),j.state.wrap===1?j.adler=l(j.adler,V,te,z):j.state.wrap===2&&(j.adler=c(j.adler,V,te,z)),j.next_in+=te,j.total_in+=te,te),g.lookahead+=L,g.lookahead+g.insert>=I)for(B=g.strstart-g.insert,g.ins_h=g.window[B],g.ins_h=(g.ins_h<<g.hash_shift^g.window[B+1])&g.hash_mask;g.insert&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[B+I-1])&g.hash_mask,g.prev[B&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=B,B++,g.insert--,!(g.lookahead+g.insert<I)););}while(g.lookahead<$&&g.strm.avail_in!==0)}function Pe(g,W){for(var L,C;;){if(g.lookahead<$){if(ye(g),g.lookahead<$&&W===d)return k;if(g.lookahead===0)break}if(L=0,g.lookahead>=I&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+I-1])&g.hash_mask,L=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),L!==0&&g.strstart-L<=g.w_size-$&&(g.match_length=Y(g,L)),g.match_length>=I)if(C=s._tr_tally(g,g.strstart-g.match_start,g.match_length-I),g.lookahead-=g.match_length,g.match_length<=g.max_lazy_match&&g.lookahead>=I){for(g.match_length--;g.strstart++,g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+I-1])&g.hash_mask,L=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart,--g.match_length!=0;);g.strstart++}else g.strstart+=g.match_length,g.match_length=0,g.ins_h=g.window[g.strstart],g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+1])&g.hash_mask;else C=s._tr_tally(g,0,g.window[g.strstart]),g.lookahead--,g.strstart++;if(C&&(F(g,!1),g.strm.avail_out===0))return k}return g.insert=g.strstart<I-1?g.strstart:I-1,W===p?(F(g,!0),g.strm.avail_out===0?J:D):g.last_lit&&(F(g,!1),g.strm.avail_out===0)?k:H}function fe(g,W){for(var L,C,x;;){if(g.lookahead<$){if(ye(g),g.lookahead<$&&W===d)return k;if(g.lookahead===0)break}if(L=0,g.lookahead>=I&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+I-1])&g.hash_mask,L=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=I-1,L!==0&&g.prev_length<g.max_lazy_match&&g.strstart-L<=g.w_size-$&&(g.match_length=Y(g,L),g.match_length<=5&&(g.strategy===1||g.match_length===I&&4096<g.strstart-g.match_start)&&(g.match_length=I-1)),g.prev_length>=I&&g.match_length<=g.prev_length){for(x=g.strstart+g.lookahead-I,C=s._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-I),g.lookahead-=g.prev_length-1,g.prev_length-=2;++g.strstart<=x&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+I-1])&g.hash_mask,L=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),--g.prev_length!=0;);if(g.match_available=0,g.match_length=I-1,g.strstart++,C&&(F(g,!1),g.strm.avail_out===0))return k}else if(g.match_available){if((C=s._tr_tally(g,0,g.window[g.strstart-1]))&&F(g,!1),g.strstart++,g.lookahead--,g.strm.avail_out===0)return k}else g.match_available=1,g.strstart++,g.lookahead--}return g.match_available&&(C=s._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<I-1?g.strstart:I-1,W===p?(F(g,!0),g.strm.avail_out===0?J:D):g.last_lit&&(F(g,!1),g.strm.avail_out===0)?k:H}function he(g,W,L,C,x){this.good_length=g,this.max_lazy=W,this.nice_length=L,this.max_chain=C,this.func=x}function Ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(2*E),this.dyn_dtree=new r.Buf16(2*(2*_+1)),this.bl_tree=new r.Buf16(2*(2*M+1)),re(this.dyn_ltree),re(this.dyn_dtree),re(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(A+1),this.heap=new r.Buf16(2*T+1),re(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(2*T+1),re(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(g){var W;return g&&g.state?(g.total_in=g.total_out=0,g.data_type=y,(W=g.state).pending=0,W.pending_out=0,W.wrap<0&&(W.wrap=-W.wrap),W.status=W.wrap?S:R,g.adler=W.wrap===2?0:1,W.last_flush=d,s._tr_init(W),u):ne(g,m)}function Ge(g){var W=_e(g);return W===u&&(function(L){L.window_size=2*L.w_size,re(L.head),L.max_lazy_match=o[L.level].max_lazy,L.good_match=o[L.level].good_length,L.nice_match=o[L.level].nice_length,L.max_chain_length=o[L.level].max_chain,L.strstart=0,L.block_start=0,L.lookahead=0,L.insert=0,L.match_length=L.prev_length=I-1,L.match_available=0,L.ins_h=0})(g.state),W}function Ne(g,W,L,C,x,B){if(!g)return m;var j=1;if(W===h&&(W=6),C<0?(j=0,C=-C):15<C&&(j=2,C-=16),x<1||w<x||L!==b||C<8||15<C||W<0||9<W||B<0||v<B)return ne(g,m);C===8&&(C=9);var V=new Ee;return(g.state=V).strm=g,V.wrap=j,V.gzhead=null,V.w_bits=C,V.w_size=1<<V.w_bits,V.w_mask=V.w_size-1,V.hash_bits=x+7,V.hash_size=1<<V.hash_bits,V.hash_mask=V.hash_size-1,V.hash_shift=~~((V.hash_bits+I-1)/I),V.window=new r.Buf8(2*V.w_size),V.head=new r.Buf16(V.hash_size),V.prev=new r.Buf16(V.w_size),V.lit_bufsize=1<<x+6,V.pending_buf_size=4*V.lit_bufsize,V.pending_buf=new r.Buf8(V.pending_buf_size),V.d_buf=1*V.lit_bufsize,V.l_buf=3*V.lit_bufsize,V.level=W,V.strategy=B,V.method=L,Ge(g)}o=[new he(0,0,0,0,function(g,W){var L=65535;for(L>g.pending_buf_size-5&&(L=g.pending_buf_size-5);;){if(g.lookahead<=1){if(ye(g),g.lookahead===0&&W===d)return k;if(g.lookahead===0)break}g.strstart+=g.lookahead,g.lookahead=0;var C=g.block_start+L;if((g.strstart===0||g.strstart>=C)&&(g.lookahead=g.strstart-C,g.strstart=C,F(g,!1),g.strm.avail_out===0)||g.strstart-g.block_start>=g.w_size-$&&(F(g,!1),g.strm.avail_out===0))return k}return g.insert=0,W===p?(F(g,!0),g.strm.avail_out===0?J:D):(g.strstart>g.block_start&&(F(g,!1),g.strm.avail_out),k)}),new he(4,4,8,4,Pe),new he(4,5,16,8,Pe),new he(4,6,32,32,Pe),new he(4,4,16,16,fe),new he(8,16,32,32,fe),new he(8,16,128,128,fe),new he(8,32,128,256,fe),new he(32,128,258,1024,fe),new he(32,258,258,4096,fe)],n.deflateInit=function(g,W){return Ne(g,W,b,15,8,0)},n.deflateInit2=Ne,n.deflateReset=Ge,n.deflateResetKeep=_e,n.deflateSetHeader=function(g,W){return g&&g.state?g.state.wrap!==2?m:(g.state.gzhead=W,u):m},n.deflate=function(g,W){var L,C,x,B;if(!g||!g.state||5<W||W<0)return g?ne(g,m):m;if(C=g.state,!g.output||!g.input&&g.avail_in!==0||C.status===666&&W!==p)return ne(g,g.avail_out===0?-5:m);if(C.strm=g,L=C.last_flush,C.last_flush=W,C.status===S)if(C.wrap===2)g.adler=0,oe(C,31),oe(C,139),oe(C,8),C.gzhead?(oe(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),oe(C,255&C.gzhead.time),oe(C,C.gzhead.time>>8&255),oe(C,C.gzhead.time>>16&255),oe(C,C.gzhead.time>>24&255),oe(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),oe(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(oe(C,255&C.gzhead.extra.length),oe(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(g.adler=c(g.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(oe(C,0),oe(C,0),oe(C,0),oe(C,0),oe(C,0),oe(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),oe(C,3),C.status=R);else{var j=b+(C.w_bits-8<<4)<<8;j|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(j|=32),j+=31-j%31,C.status=R,ee(C,j),C.strstart!==0&&(ee(C,g.adler>>>16),ee(C,65535&g.adler)),g.adler=1}if(C.status===69)if(C.gzhead.extra){for(x=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>x&&(g.adler=c(g.adler,C.pending_buf,C.pending-x,x)),O(g),x=C.pending,C.pending!==C.pending_buf_size));)oe(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>x&&(g.adler=c(g.adler,C.pending_buf,C.pending-x,x)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){x=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>x&&(g.adler=c(g.adler,C.pending_buf,C.pending-x,x)),O(g),x=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,oe(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>x&&(g.adler=c(g.adler,C.pending_buf,C.pending-x,x)),B===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){x=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>x&&(g.adler=c(g.adler,C.pending_buf,C.pending-x,x)),O(g),x=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,oe(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>x&&(g.adler=c(g.adler,C.pending_buf,C.pending-x,x)),B===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&O(g),C.pending+2<=C.pending_buf_size&&(oe(C,255&g.adler),oe(C,g.adler>>8&255),g.adler=0,C.status=R)):C.status=R),C.pending!==0){if(O(g),g.avail_out===0)return C.last_flush=-1,u}else if(g.avail_in===0&&K(W)<=K(L)&&W!==p)return ne(g,-5);if(C.status===666&&g.avail_in!==0)return ne(g,-5);if(g.avail_in!==0||C.lookahead!==0||W!==d&&C.status!==666){var V=C.strategy===2?(function(z,X){for(var te;;){if(z.lookahead===0&&(ye(z),z.lookahead===0)){if(X===d)return k;break}if(z.match_length=0,te=s._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++,te&&(F(z,!1),z.strm.avail_out===0))return k}return z.insert=0,X===p?(F(z,!0),z.strm.avail_out===0?J:D):z.last_lit&&(F(z,!1),z.strm.avail_out===0)?k:H})(C,W):C.strategy===3?(function(z,X){for(var te,Q,se,ve,de=z.window;;){if(z.lookahead<=N){if(ye(z),z.lookahead<=N&&X===d)return k;if(z.lookahead===0)break}if(z.match_length=0,z.lookahead>=I&&0<z.strstart&&(Q=de[se=z.strstart-1])===de[++se]&&Q===de[++se]&&Q===de[++se]){ve=z.strstart+N;do;while(Q===de[++se]&&Q===de[++se]&&Q===de[++se]&&Q===de[++se]&&Q===de[++se]&&Q===de[++se]&&Q===de[++se]&&Q===de[++se]&&se<ve);z.match_length=N-(ve-se),z.match_length>z.lookahead&&(z.match_length=z.lookahead)}if(z.match_length>=I?(te=s._tr_tally(z,1,z.match_length-I),z.lookahead-=z.match_length,z.strstart+=z.match_length,z.match_length=0):(te=s._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++),te&&(F(z,!1),z.strm.avail_out===0))return k}return z.insert=0,X===p?(F(z,!0),z.strm.avail_out===0?J:D):z.last_lit&&(F(z,!1),z.strm.avail_out===0)?k:H})(C,W):o[C.level].func(C,W);if(V!==J&&V!==D||(C.status=666),V===k||V===J)return g.avail_out===0&&(C.last_flush=-1),u;if(V===H&&(W===1?s._tr_align(C):W!==5&&(s._tr_stored_block(C,0,0,!1),W===3&&(re(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),O(g),g.avail_out===0))return C.last_flush=-1,u}return W!==p?u:C.wrap<=0?1:(C.wrap===2?(oe(C,255&g.adler),oe(C,g.adler>>8&255),oe(C,g.adler>>16&255),oe(C,g.adler>>24&255),oe(C,255&g.total_in),oe(C,g.total_in>>8&255),oe(C,g.total_in>>16&255),oe(C,g.total_in>>24&255)):(ee(C,g.adler>>>16),ee(C,65535&g.adler)),O(g),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?u:1)},n.deflateEnd=function(g){var W;return g&&g.state?(W=g.state.status)!==S&&W!==69&&W!==73&&W!==91&&W!==103&&W!==R&&W!==666?ne(g,m):(g.state=null,W===R?ne(g,-3):u):m},n.deflateSetDictionary=function(g,W){var L,C,x,B,j,V,z,X,te=W.length;if(!g||!g.state||(B=(L=g.state).wrap)===2||B===1&&L.status!==S||L.lookahead)return m;for(B===1&&(g.adler=l(g.adler,W,te,0)),L.wrap=0,te>=L.w_size&&(B===0&&(re(L.head),L.strstart=0,L.block_start=0,L.insert=0),X=new r.Buf8(L.w_size),r.arraySet(X,W,te-L.w_size,L.w_size,0),W=X,te=L.w_size),j=g.avail_in,V=g.next_in,z=g.input,g.avail_in=te,g.next_in=0,g.input=W,ye(L);L.lookahead>=I;){for(C=L.strstart,x=L.lookahead-(I-1);L.ins_h=(L.ins_h<<L.hash_shift^L.window[C+I-1])&L.hash_mask,L.prev[C&L.w_mask]=L.head[L.ins_h],L.head[L.ins_h]=C,C++,--x;);L.strstart=C,L.lookahead=I-1,ye(L)}return L.strstart+=L.lookahead,L.block_start=L.strstart,L.insert=L.lookahead,L.lookahead=0,L.match_length=L.prev_length=I-1,L.match_available=0,g.next_in=V,g.input=z,g.avail_in=j,L.wrap=B,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,n){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,n){a.exports=function(o,r){var s,l,c,f,d,p,u,m,h,v,y,b,w,T,_,M,E,A,I,N,$,S,R,k,H;s=o.state,l=o.next_in,k=o.input,c=l+(o.avail_in-5),f=o.next_out,H=o.output,d=f-(r-o.avail_out),p=f+(o.avail_out-257),u=s.dmax,m=s.wsize,h=s.whave,v=s.wnext,y=s.window,b=s.hold,w=s.bits,T=s.lencode,_=s.distcode,M=(1<<s.lenbits)-1,E=(1<<s.distbits)-1;e:do{w<15&&(b+=k[l++]<<w,w+=8,b+=k[l++]<<w,w+=8),A=T[b&M];t:for(;;){if(b>>>=I=A>>>24,w-=I,(I=A>>>16&255)===0)H[f++]=65535&A;else{if(!(16&I)){if((64&I)==0){A=T[(65535&A)+(b&(1<<I)-1)];continue t}if(32&I){s.mode=12;break e}o.msg="invalid literal/length code",s.mode=30;break e}N=65535&A,(I&=15)&&(w<I&&(b+=k[l++]<<w,w+=8),N+=b&(1<<I)-1,b>>>=I,w-=I),w<15&&(b+=k[l++]<<w,w+=8,b+=k[l++]<<w,w+=8),A=_[b&E];i:for(;;){if(b>>>=I=A>>>24,w-=I,!(16&(I=A>>>16&255))){if((64&I)==0){A=_[(65535&A)+(b&(1<<I)-1)];continue i}o.msg="invalid distance code",s.mode=30;break e}if($=65535&A,w<(I&=15)&&(b+=k[l++]<<w,(w+=8)<I&&(b+=k[l++]<<w,w+=8)),u<($+=b&(1<<I)-1)){o.msg="invalid distance too far back",s.mode=30;break e}if(b>>>=I,w-=I,(I=f-d)<$){if(h<(I=$-I)&&s.sane){o.msg="invalid distance too far back",s.mode=30;break e}if(R=y,(S=0)===v){if(S+=m-I,I<N){for(N-=I;H[f++]=y[S++],--I;);S=f-$,R=H}}else if(v<I){if(S+=m+v-I,(I-=v)<N){for(N-=I;H[f++]=y[S++],--I;);if(S=0,v<N){for(N-=I=v;H[f++]=y[S++],--I;);S=f-$,R=H}}}else if(S+=v-I,I<N){for(N-=I;H[f++]=y[S++],--I;);S=f-$,R=H}for(;2<N;)H[f++]=R[S++],H[f++]=R[S++],H[f++]=R[S++],N-=3;N&&(H[f++]=R[S++],1<N&&(H[f++]=R[S++]))}else{for(S=f-$;H[f++]=H[S++],H[f++]=H[S++],H[f++]=H[S++],2<(N-=3););N&&(H[f++]=H[S++],1<N&&(H[f++]=H[S++]))}break}}break}}while(l<c&&f<p);l-=N=w>>3,b&=(1<<(w-=N<<3))-1,o.next_in=l,o.next_out=f,o.avail_in=l<c?c-l+5:5-(l-c),o.avail_out=f<p?p-f+257:257-(f-p),s.hold=b,s.bits=w}},{}],49:[function(i,a,n){var o=i("../utils/common"),r=i("./adler32"),s=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),f=1,d=2,p=0,u=-2,m=1,h=852,v=592;function y(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function w(S){var R;return S&&S.state?(R=S.state,S.total_in=S.total_out=R.total=0,S.msg="",R.wrap&&(S.adler=1&R.wrap),R.mode=m,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new o.Buf32(h),R.distcode=R.distdyn=new o.Buf32(v),R.sane=1,R.back=-1,p):u}function T(S){var R;return S&&S.state?((R=S.state).wsize=0,R.whave=0,R.wnext=0,w(S)):u}function _(S,R){var k,H;return S&&S.state?(H=S.state,R<0?(k=0,R=-R):(k=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?u:(H.window!==null&&H.wbits!==R&&(H.window=null),H.wrap=k,H.wbits=R,T(S))):u}function M(S,R){var k,H;return S?(H=new b,(S.state=H).window=null,(k=_(S,R))!==p&&(S.state=null),k):u}var E,A,I=!0;function N(S){if(I){var R;for(E=new o.Buf32(512),A=new o.Buf32(32),R=0;R<144;)S.lens[R++]=8;for(;R<256;)S.lens[R++]=9;for(;R<280;)S.lens[R++]=7;for(;R<288;)S.lens[R++]=8;for(c(f,S.lens,0,288,E,0,S.work,{bits:9}),R=0;R<32;)S.lens[R++]=5;c(d,S.lens,0,32,A,0,S.work,{bits:5}),I=!1}S.lencode=E,S.lenbits=9,S.distcode=A,S.distbits=5}function $(S,R,k,H){var J,D=S.state;return D.window===null&&(D.wsize=1<<D.wbits,D.wnext=0,D.whave=0,D.window=new o.Buf8(D.wsize)),H>=D.wsize?(o.arraySet(D.window,R,k-D.wsize,D.wsize,0),D.wnext=0,D.whave=D.wsize):(H<(J=D.wsize-D.wnext)&&(J=H),o.arraySet(D.window,R,k-H,J,D.wnext),(H-=J)?(o.arraySet(D.window,R,k-H,H,0),D.wnext=H,D.whave=D.wsize):(D.wnext+=J,D.wnext===D.wsize&&(D.wnext=0),D.whave<D.wsize&&(D.whave+=J))),0}n.inflateReset=T,n.inflateReset2=_,n.inflateResetKeep=w,n.inflateInit=function(S){return M(S,15)},n.inflateInit2=M,n.inflate=function(S,R){var k,H,J,D,ne,K,re,O,F,oe,ee,Y,ye,Pe,fe,he,Ee,_e,Ge,Ne,g,W,L,C,x=0,B=new o.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return u;(k=S.state).mode===12&&(k.mode=13),ne=S.next_out,J=S.output,re=S.avail_out,D=S.next_in,H=S.input,K=S.avail_in,O=k.hold,F=k.bits,oe=K,ee=re,W=p;e:for(;;)switch(k.mode){case m:if(k.wrap===0){k.mode=13;break}for(;F<16;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(2&k.wrap&&O===35615){B[k.check=0]=255&O,B[1]=O>>>8&255,k.check=s(k.check,B,2,0),F=O=0,k.mode=2;break}if(k.flags=0,k.head&&(k.head.done=!1),!(1&k.wrap)||(((255&O)<<8)+(O>>8))%31){S.msg="incorrect header check",k.mode=30;break}if((15&O)!=8){S.msg="unknown compression method",k.mode=30;break}if(F-=4,g=8+(15&(O>>>=4)),k.wbits===0)k.wbits=g;else if(g>k.wbits){S.msg="invalid window size",k.mode=30;break}k.dmax=1<<g,S.adler=k.check=1,k.mode=512&O?10:12,F=O=0;break;case 2:for(;F<16;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(k.flags=O,(255&k.flags)!=8){S.msg="unknown compression method",k.mode=30;break}if(57344&k.flags){S.msg="unknown header flags set",k.mode=30;break}k.head&&(k.head.text=O>>8&1),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,k.check=s(k.check,B,2,0)),F=O=0,k.mode=3;case 3:for(;F<32;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}k.head&&(k.head.time=O),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,B[2]=O>>>16&255,B[3]=O>>>24&255,k.check=s(k.check,B,4,0)),F=O=0,k.mode=4;case 4:for(;F<16;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}k.head&&(k.head.xflags=255&O,k.head.os=O>>8),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,k.check=s(k.check,B,2,0)),F=O=0,k.mode=5;case 5:if(1024&k.flags){for(;F<16;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}k.length=O,k.head&&(k.head.extra_len=O),512&k.flags&&(B[0]=255&O,B[1]=O>>>8&255,k.check=s(k.check,B,2,0)),F=O=0}else k.head&&(k.head.extra=null);k.mode=6;case 6:if(1024&k.flags&&(K<(Y=k.length)&&(Y=K),Y&&(k.head&&(g=k.head.extra_len-k.length,k.head.extra||(k.head.extra=new Array(k.head.extra_len)),o.arraySet(k.head.extra,H,D,Y,g)),512&k.flags&&(k.check=s(k.check,H,Y,D)),K-=Y,D+=Y,k.length-=Y),k.length))break e;k.length=0,k.mode=7;case 7:if(2048&k.flags){if(K===0)break e;for(Y=0;g=H[D+Y++],k.head&&g&&k.length<65536&&(k.head.name+=String.fromCharCode(g)),g&&Y<K;);if(512&k.flags&&(k.check=s(k.check,H,Y,D)),K-=Y,D+=Y,g)break e}else k.head&&(k.head.name=null);k.length=0,k.mode=8;case 8:if(4096&k.flags){if(K===0)break e;for(Y=0;g=H[D+Y++],k.head&&g&&k.length<65536&&(k.head.comment+=String.fromCharCode(g)),g&&Y<K;);if(512&k.flags&&(k.check=s(k.check,H,Y,D)),K-=Y,D+=Y,g)break e}else k.head&&(k.head.comment=null);k.mode=9;case 9:if(512&k.flags){for(;F<16;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(O!==(65535&k.check)){S.msg="header crc mismatch",k.mode=30;break}F=O=0}k.head&&(k.head.hcrc=k.flags>>9&1,k.head.done=!0),S.adler=k.check=0,k.mode=12;break;case 10:for(;F<32;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}S.adler=k.check=y(O),F=O=0,k.mode=11;case 11:if(k.havedict===0)return S.next_out=ne,S.avail_out=re,S.next_in=D,S.avail_in=K,k.hold=O,k.bits=F,2;S.adler=k.check=1,k.mode=12;case 12:if(R===5||R===6)break e;case 13:if(k.last){O>>>=7&F,F-=7&F,k.mode=27;break}for(;F<3;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}switch(k.last=1&O,F-=1,3&(O>>>=1)){case 0:k.mode=14;break;case 1:if(N(k),k.mode=20,R!==6)break;O>>>=2,F-=2;break e;case 2:k.mode=17;break;case 3:S.msg="invalid block type",k.mode=30}O>>>=2,F-=2;break;case 14:for(O>>>=7&F,F-=7&F;F<32;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if((65535&O)!=(O>>>16^65535)){S.msg="invalid stored block lengths",k.mode=30;break}if(k.length=65535&O,F=O=0,k.mode=15,R===6)break e;case 15:k.mode=16;case 16:if(Y=k.length){if(K<Y&&(Y=K),re<Y&&(Y=re),Y===0)break e;o.arraySet(J,H,D,Y,ne),K-=Y,D+=Y,re-=Y,ne+=Y,k.length-=Y;break}k.mode=12;break;case 17:for(;F<14;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(k.nlen=257+(31&O),O>>>=5,F-=5,k.ndist=1+(31&O),O>>>=5,F-=5,k.ncode=4+(15&O),O>>>=4,F-=4,286<k.nlen||30<k.ndist){S.msg="too many length or distance symbols",k.mode=30;break}k.have=0,k.mode=18;case 18:for(;k.have<k.ncode;){for(;F<3;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}k.lens[j[k.have++]]=7&O,O>>>=3,F-=3}for(;k.have<19;)k.lens[j[k.have++]]=0;if(k.lencode=k.lendyn,k.lenbits=7,L={bits:k.lenbits},W=c(0,k.lens,0,19,k.lencode,0,k.work,L),k.lenbits=L.bits,W){S.msg="invalid code lengths set",k.mode=30;break}k.have=0,k.mode=19;case 19:for(;k.have<k.nlen+k.ndist;){for(;he=(x=k.lencode[O&(1<<k.lenbits)-1])>>>16&255,Ee=65535&x,!((fe=x>>>24)<=F);){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(Ee<16)O>>>=fe,F-=fe,k.lens[k.have++]=Ee;else{if(Ee===16){for(C=fe+2;F<C;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(O>>>=fe,F-=fe,k.have===0){S.msg="invalid bit length repeat",k.mode=30;break}g=k.lens[k.have-1],Y=3+(3&O),O>>>=2,F-=2}else if(Ee===17){for(C=fe+3;F<C;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}F-=fe,g=0,Y=3+(7&(O>>>=fe)),O>>>=3,F-=3}else{for(C=fe+7;F<C;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}F-=fe,g=0,Y=11+(127&(O>>>=fe)),O>>>=7,F-=7}if(k.have+Y>k.nlen+k.ndist){S.msg="invalid bit length repeat",k.mode=30;break}for(;Y--;)k.lens[k.have++]=g}}if(k.mode===30)break;if(k.lens[256]===0){S.msg="invalid code -- missing end-of-block",k.mode=30;break}if(k.lenbits=9,L={bits:k.lenbits},W=c(f,k.lens,0,k.nlen,k.lencode,0,k.work,L),k.lenbits=L.bits,W){S.msg="invalid literal/lengths set",k.mode=30;break}if(k.distbits=6,k.distcode=k.distdyn,L={bits:k.distbits},W=c(d,k.lens,k.nlen,k.ndist,k.distcode,0,k.work,L),k.distbits=L.bits,W){S.msg="invalid distances set",k.mode=30;break}if(k.mode=20,R===6)break e;case 20:k.mode=21;case 21:if(6<=K&&258<=re){S.next_out=ne,S.avail_out=re,S.next_in=D,S.avail_in=K,k.hold=O,k.bits=F,l(S,ee),ne=S.next_out,J=S.output,re=S.avail_out,D=S.next_in,H=S.input,K=S.avail_in,O=k.hold,F=k.bits,k.mode===12&&(k.back=-1);break}for(k.back=0;he=(x=k.lencode[O&(1<<k.lenbits)-1])>>>16&255,Ee=65535&x,!((fe=x>>>24)<=F);){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(he&&(240&he)==0){for(_e=fe,Ge=he,Ne=Ee;he=(x=k.lencode[Ne+((O&(1<<_e+Ge)-1)>>_e)])>>>16&255,Ee=65535&x,!(_e+(fe=x>>>24)<=F);){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}O>>>=_e,F-=_e,k.back+=_e}if(O>>>=fe,F-=fe,k.back+=fe,k.length=Ee,he===0){k.mode=26;break}if(32&he){k.back=-1,k.mode=12;break}if(64&he){S.msg="invalid literal/length code",k.mode=30;break}k.extra=15&he,k.mode=22;case 22:if(k.extra){for(C=k.extra;F<C;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}k.length+=O&(1<<k.extra)-1,O>>>=k.extra,F-=k.extra,k.back+=k.extra}k.was=k.length,k.mode=23;case 23:for(;he=(x=k.distcode[O&(1<<k.distbits)-1])>>>16&255,Ee=65535&x,!((fe=x>>>24)<=F);){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if((240&he)==0){for(_e=fe,Ge=he,Ne=Ee;he=(x=k.distcode[Ne+((O&(1<<_e+Ge)-1)>>_e)])>>>16&255,Ee=65535&x,!(_e+(fe=x>>>24)<=F);){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}O>>>=_e,F-=_e,k.back+=_e}if(O>>>=fe,F-=fe,k.back+=fe,64&he){S.msg="invalid distance code",k.mode=30;break}k.offset=Ee,k.extra=15&he,k.mode=24;case 24:if(k.extra){for(C=k.extra;F<C;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}k.offset+=O&(1<<k.extra)-1,O>>>=k.extra,F-=k.extra,k.back+=k.extra}if(k.offset>k.dmax){S.msg="invalid distance too far back",k.mode=30;break}k.mode=25;case 25:if(re===0)break e;if(Y=ee-re,k.offset>Y){if((Y=k.offset-Y)>k.whave&&k.sane){S.msg="invalid distance too far back",k.mode=30;break}ye=Y>k.wnext?(Y-=k.wnext,k.wsize-Y):k.wnext-Y,Y>k.length&&(Y=k.length),Pe=k.window}else Pe=J,ye=ne-k.offset,Y=k.length;for(re<Y&&(Y=re),re-=Y,k.length-=Y;J[ne++]=Pe[ye++],--Y;);k.length===0&&(k.mode=21);break;case 26:if(re===0)break e;J[ne++]=k.length,re--,k.mode=21;break;case 27:if(k.wrap){for(;F<32;){if(K===0)break e;K--,O|=H[D++]<<F,F+=8}if(ee-=re,S.total_out+=ee,k.total+=ee,ee&&(S.adler=k.check=k.flags?s(k.check,J,ee,ne-ee):r(k.check,J,ee,ne-ee)),ee=re,(k.flags?O:y(O))!==k.check){S.msg="incorrect data check",k.mode=30;break}F=O=0}k.mode=28;case 28:if(k.wrap&&k.flags){for(;F<32;){if(K===0)break e;K--,O+=H[D++]<<F,F+=8}if(O!==(4294967295&k.total)){S.msg="incorrect length check",k.mode=30;break}F=O=0}k.mode=29;case 29:W=1;break e;case 30:W=-3;break e;case 31:return-4;case 32:default:return u}return S.next_out=ne,S.avail_out=re,S.next_in=D,S.avail_in=K,k.hold=O,k.bits=F,(k.wsize||ee!==S.avail_out&&k.mode<30&&(k.mode<27||R!==4))&&$(S,S.output,S.next_out,ee-S.avail_out)?(k.mode=31,-4):(oe-=S.avail_in,ee-=S.avail_out,S.total_in+=oe,S.total_out+=ee,k.total+=ee,k.wrap&&ee&&(S.adler=k.check=k.flags?s(k.check,J,ee,S.next_out-ee):r(k.check,J,ee,S.next_out-ee)),S.data_type=k.bits+(k.last?64:0)+(k.mode===12?128:0)+(k.mode===20||k.mode===15?256:0),(oe==0&&ee===0||R===4)&&W===p&&(W=-5),W)},n.inflateEnd=function(S){if(!S||!S.state)return u;var R=S.state;return R.window&&(R.window=null),S.state=null,p},n.inflateGetHeader=function(S,R){var k;return S&&S.state?(2&(k=S.state).wrap)==0?u:((k.head=R).done=!1,p):u},n.inflateSetDictionary=function(S,R){var k,H=R.length;return S&&S.state?(k=S.state).wrap!==0&&k.mode!==11?u:k.mode===11&&r(1,R,H,0)!==k.check?-3:$(S,R,H,H)?(k.mode=31,-4):(k.havedict=1,p):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,n){var o=i("../utils/common"),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(f,d,p,u,m,h,v,y){var b,w,T,_,M,E,A,I,N,$=y.bits,S=0,R=0,k=0,H=0,J=0,D=0,ne=0,K=0,re=0,O=0,F=null,oe=0,ee=new o.Buf16(16),Y=new o.Buf16(16),ye=null,Pe=0;for(S=0;S<=15;S++)ee[S]=0;for(R=0;R<u;R++)ee[d[p+R]]++;for(J=$,H=15;1<=H&&ee[H]===0;H--);if(H<J&&(J=H),H===0)return m[h++]=20971520,m[h++]=20971520,y.bits=1,0;for(k=1;k<H&&ee[k]===0;k++);for(J<k&&(J=k),S=K=1;S<=15;S++)if(K<<=1,(K-=ee[S])<0)return-1;if(0<K&&(f===0||H!==1))return-1;for(Y[1]=0,S=1;S<15;S++)Y[S+1]=Y[S]+ee[S];for(R=0;R<u;R++)d[p+R]!==0&&(v[Y[d[p+R]]++]=R);if(E=f===0?(F=ye=v,19):f===1?(F=r,oe-=257,ye=s,Pe-=257,256):(F=l,ye=c,-1),S=k,M=h,ne=R=O=0,T=-1,_=(re=1<<(D=J))-1,f===1&&852<re||f===2&&592<re)return 1;for(;;){for(A=S-ne,N=v[R]<E?(I=0,v[R]):v[R]>E?(I=ye[Pe+v[R]],F[oe+v[R]]):(I=96,0),b=1<<S-ne,k=w=1<<D;m[M+(O>>ne)+(w-=b)]=A<<24|I<<16|N|0,w!==0;);for(b=1<<S-1;O&b;)b>>=1;if(b!==0?(O&=b-1,O+=b):O=0,R++,--ee[S]==0){if(S===H)break;S=d[p+v[R]]}if(J<S&&(O&_)!==T){for(ne===0&&(ne=J),M+=k,K=1<<(D=S-ne);D+ne<H&&!((K-=ee[D+ne])<=0);)D++,K<<=1;if(re+=1<<D,f===1&&852<re||f===2&&592<re)return 1;m[T=O&_]=J<<24|D<<16|M-h|0}}return O!==0&&(m[M+O]=S-ne<<24|64<<16|0),y.bits=J,0}},{"../utils/common":41}],51:[function(i,a,n){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,n){var o=i("../utils/common"),r=0,s=1;function l(x){for(var B=x.length;0<=--B;)x[B]=0}var c=0,f=29,d=256,p=d+1+f,u=30,m=19,h=2*p+1,v=15,y=16,b=7,w=256,T=16,_=17,M=18,E=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$=new Array(2*(p+2));l($);var S=new Array(2*u);l(S);var R=new Array(512);l(R);var k=new Array(256);l(k);var H=new Array(f);l(H);var J,D,ne,K=new Array(u);function re(x,B,j,V,z){this.static_tree=x,this.extra_bits=B,this.extra_base=j,this.elems=V,this.max_length=z,this.has_stree=x&&x.length}function O(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function F(x){return x<256?R[x]:R[256+(x>>>7)]}function oe(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function ee(x,B,j){x.bi_valid>y-j?(x.bi_buf|=B<<x.bi_valid&65535,oe(x,x.bi_buf),x.bi_buf=B>>y-x.bi_valid,x.bi_valid+=j-y):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=j)}function Y(x,B,j){ee(x,j[2*B],j[2*B+1])}function ye(x,B){for(var j=0;j|=1&x,x>>>=1,j<<=1,0<--B;);return j>>>1}function Pe(x,B,j){var V,z,X=new Array(v+1),te=0;for(V=1;V<=v;V++)X[V]=te=te+j[V-1]<<1;for(z=0;z<=B;z++){var Q=x[2*z+1];Q!==0&&(x[2*z]=ye(X[Q]++,Q))}}function fe(x){var B;for(B=0;B<p;B++)x.dyn_ltree[2*B]=0;for(B=0;B<u;B++)x.dyn_dtree[2*B]=0;for(B=0;B<m;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*w]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function he(x){8<x.bi_valid?oe(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Ee(x,B,j,V){var z=2*B,X=2*j;return x[z]<x[X]||x[z]===x[X]&&V[B]<=V[j]}function _e(x,B,j){for(var V=x.heap[j],z=j<<1;z<=x.heap_len&&(z<x.heap_len&&Ee(B,x.heap[z+1],x.heap[z],x.depth)&&z++,!Ee(B,V,x.heap[z],x.depth));)x.heap[j]=x.heap[z],j=z,z<<=1;x.heap[j]=V}function Ge(x,B,j){var V,z,X,te,Q=0;if(x.last_lit!==0)for(;V=x.pending_buf[x.d_buf+2*Q]<<8|x.pending_buf[x.d_buf+2*Q+1],z=x.pending_buf[x.l_buf+Q],Q++,V===0?Y(x,z,B):(Y(x,(X=k[z])+d+1,B),(te=E[X])!==0&&ee(x,z-=H[X],te),Y(x,X=F(--V),j),(te=A[X])!==0&&ee(x,V-=K[X],te)),Q<x.last_lit;);Y(x,w,B)}function Ne(x,B){var j,V,z,X=B.dyn_tree,te=B.stat_desc.static_tree,Q=B.stat_desc.has_stree,se=B.stat_desc.elems,ve=-1;for(x.heap_len=0,x.heap_max=h,j=0;j<se;j++)X[2*j]!==0?(x.heap[++x.heap_len]=ve=j,x.depth[j]=0):X[2*j+1]=0;for(;x.heap_len<2;)X[2*(z=x.heap[++x.heap_len]=ve<2?++ve:0)]=1,x.depth[z]=0,x.opt_len--,Q&&(x.static_len-=te[2*z+1]);for(B.max_code=ve,j=x.heap_len>>1;1<=j;j--)_e(x,X,j);for(z=se;j=x.heap[1],x.heap[1]=x.heap[x.heap_len--],_e(x,X,1),V=x.heap[1],x.heap[--x.heap_max]=j,x.heap[--x.heap_max]=V,X[2*z]=X[2*j]+X[2*V],x.depth[z]=(x.depth[j]>=x.depth[V]?x.depth[j]:x.depth[V])+1,X[2*j+1]=X[2*V+1]=z,x.heap[1]=z++,_e(x,X,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(de,Ke){var _i,ut,xi,Se,wa,bn,bt=Ke.dyn_tree,Wr=Ke.max_code,op=Ke.stat_desc.static_tree,rp=Ke.stat_desc.has_stree,sp=Ke.stat_desc.extra_bits,jr=Ke.stat_desc.extra_base,Si=Ke.stat_desc.max_length,ka=0;for(Se=0;Se<=v;Se++)de.bl_count[Se]=0;for(bt[2*de.heap[de.heap_max]+1]=0,_i=de.heap_max+1;_i<h;_i++)Si<(Se=bt[2*bt[2*(ut=de.heap[_i])+1]+1]+1)&&(Se=Si,ka++),bt[2*ut+1]=Se,Wr<ut||(de.bl_count[Se]++,wa=0,jr<=ut&&(wa=sp[ut-jr]),bn=bt[2*ut],de.opt_len+=bn*(Se+wa),rp&&(de.static_len+=bn*(op[2*ut+1]+wa)));if(ka!==0){do{for(Se=Si-1;de.bl_count[Se]===0;)Se--;de.bl_count[Se]--,de.bl_count[Se+1]+=2,de.bl_count[Si]--,ka-=2}while(0<ka);for(Se=Si;Se!==0;Se--)for(ut=de.bl_count[Se];ut!==0;)Wr<(xi=de.heap[--_i])||(bt[2*xi+1]!==Se&&(de.opt_len+=(Se-bt[2*xi+1])*bt[2*xi],bt[2*xi+1]=Se),ut--)}})(x,B),Pe(X,ve,x.bl_count)}function g(x,B,j){var V,z,X=-1,te=B[1],Q=0,se=7,ve=4;for(te===0&&(se=138,ve=3),B[2*(j+1)+1]=65535,V=0;V<=j;V++)z=te,te=B[2*(V+1)+1],++Q<se&&z===te||(Q<ve?x.bl_tree[2*z]+=Q:z!==0?(z!==X&&x.bl_tree[2*z]++,x.bl_tree[2*T]++):Q<=10?x.bl_tree[2*_]++:x.bl_tree[2*M]++,X=z,ve=(Q=0)===te?(se=138,3):z===te?(se=6,3):(se=7,4))}function W(x,B,j){var V,z,X=-1,te=B[1],Q=0,se=7,ve=4;for(te===0&&(se=138,ve=3),V=0;V<=j;V++)if(z=te,te=B[2*(V+1)+1],!(++Q<se&&z===te)){if(Q<ve)for(;Y(x,z,x.bl_tree),--Q!=0;);else z!==0?(z!==X&&(Y(x,z,x.bl_tree),Q--),Y(x,T,x.bl_tree),ee(x,Q-3,2)):Q<=10?(Y(x,_,x.bl_tree),ee(x,Q-3,3)):(Y(x,M,x.bl_tree),ee(x,Q-11,7));X=z,ve=(Q=0)===te?(se=138,3):z===te?(se=6,3):(se=7,4)}}l(K);var L=!1;function C(x,B,j,V){ee(x,(c<<1)+(V?1:0),3),(function(z,X,te,Q){he(z),oe(z,te),oe(z,~te),o.arraySet(z.pending_buf,z.window,X,te,z.pending),z.pending+=te})(x,B,j)}n._tr_init=function(x){L||((function(){var B,j,V,z,X,te=new Array(v+1);for(z=V=0;z<f-1;z++)for(H[z]=V,B=0;B<1<<E[z];B++)k[V++]=z;for(k[V-1]=z,z=X=0;z<16;z++)for(K[z]=X,B=0;B<1<<A[z];B++)R[X++]=z;for(X>>=7;z<u;z++)for(K[z]=X<<7,B=0;B<1<<A[z]-7;B++)R[256+X++]=z;for(j=0;j<=v;j++)te[j]=0;for(B=0;B<=143;)$[2*B+1]=8,B++,te[8]++;for(;B<=255;)$[2*B+1]=9,B++,te[9]++;for(;B<=279;)$[2*B+1]=7,B++,te[7]++;for(;B<=287;)$[2*B+1]=8,B++,te[8]++;for(Pe($,p+1,te),B=0;B<u;B++)S[2*B+1]=5,S[2*B]=ye(B,5);J=new re($,E,d+1,p,v),D=new re(S,A,0,u,v),ne=new re(new Array(0),I,0,m,b)})(),L=!0),x.l_desc=new O(x.dyn_ltree,J),x.d_desc=new O(x.dyn_dtree,D),x.bl_desc=new O(x.bl_tree,ne),x.bi_buf=0,x.bi_valid=0,fe(x)},n._tr_stored_block=C,n._tr_flush_block=function(x,B,j,V){var z,X,te=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(Q){var se,ve=4093624447;for(se=0;se<=31;se++,ve>>>=1)if(1&ve&&Q.dyn_ltree[2*se]!==0)return r;if(Q.dyn_ltree[18]!==0||Q.dyn_ltree[20]!==0||Q.dyn_ltree[26]!==0)return s;for(se=32;se<d;se++)if(Q.dyn_ltree[2*se]!==0)return s;return r})(x)),Ne(x,x.l_desc),Ne(x,x.d_desc),te=(function(Q){var se;for(g(Q,Q.dyn_ltree,Q.l_desc.max_code),g(Q,Q.dyn_dtree,Q.d_desc.max_code),Ne(Q,Q.bl_desc),se=m-1;3<=se&&Q.bl_tree[2*N[se]+1]===0;se--);return Q.opt_len+=3*(se+1)+5+5+4,se})(x),z=x.opt_len+3+7>>>3,(X=x.static_len+3+7>>>3)<=z&&(z=X)):z=X=j+5,j+4<=z&&B!==-1?C(x,B,j,V):x.strategy===4||X===z?(ee(x,2+(V?1:0),3),Ge(x,$,S)):(ee(x,4+(V?1:0),3),(function(Q,se,ve,de){var Ke;for(ee(Q,se-257,5),ee(Q,ve-1,5),ee(Q,de-4,4),Ke=0;Ke<de;Ke++)ee(Q,Q.bl_tree[2*N[Ke]+1],3);W(Q,Q.dyn_ltree,se-1),W(Q,Q.dyn_dtree,ve-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,te+1),Ge(x,x.dyn_ltree,x.dyn_dtree)),fe(x),V&&he(x)},n._tr_tally=function(x,B,j){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&j,x.last_lit++,B===0?x.dyn_ltree[2*j]++:(x.matches++,B--,x.dyn_ltree[2*(k[j]+d+1)]++,x.dyn_dtree[2*F(B)]++),x.last_lit===x.lit_bufsize-1},n._tr_align=function(x){ee(x,2,3),Y(x,w,$),(function(B){B.bi_valid===16?(oe(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,a,n){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,n){(function(o){(function(r,s){if(!r.setImmediate){var l,c,f,d,p=1,u={},m=!1,h=r.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(r);v=v&&v.setTimeout?v:r,l={}.toString.call(r.process)==="[object process]"?function(T){process.nextTick(function(){b(T)})}:(function(){if(r.postMessage&&!r.importScripts){var T=!0,_=r.onmessage;return r.onmessage=function(){T=!1},r.postMessage("","*"),r.onmessage=_,T}})()?(d="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",w,!1):r.attachEvent("onmessage",w),function(T){r.postMessage(d+T,"*")}):r.MessageChannel?((f=new MessageChannel).port1.onmessage=function(T){b(T.data)},function(T){f.port2.postMessage(T)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(T){var _=h.createElement("script");_.onreadystatechange=function(){b(T),_.onreadystatechange=null,c.removeChild(_),_=null},c.appendChild(_)}):function(T){setTimeout(b,0,T)},v.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),M=0;M<_.length;M++)_[M]=arguments[M+1];var E={callback:T,args:_};return u[p]=E,l(p),p++},v.clearImmediate=y}function y(T){delete u[T]}function b(T){if(m)setTimeout(b,0,T);else{var _=u[T];if(_){m=!0;try{(function(M){var E=M.callback,A=M.args;switch(A.length){case 0:E();break;case 1:E(A[0]);break;case 2:E(A[0],A[1]);break;case 3:E(A[0],A[1],A[2]);break;default:E.apply(s,A)}})(_)}finally{y(T),m=!1}}}}function w(T){T.source===r&&typeof T.data=="string"&&T.data.indexOf(d)===0&&b(+T.data.slice(d.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ra)),Ra.exports}var Sf=xf();const Cf=_f(Sf);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function U(t){if(!t)throw new Error("Assertion failed.")}const Ef=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Xe=t=>t&&t[t.length-1],kt=t=>t>=0&&t<2**32,Z=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},ht=t=>{const e=Z(t);return(e&1)===0?-(e>>1):e+1>>1},$e=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),nt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),ot=new TextEncoder,ia={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},aa={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},na={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Pf=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,oa=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class lo{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(n=>{let o=!1;e=()=>{o||(n(),this.pending--,o=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const co=(t,e,i)=>{let a=0,n=t.length-1,o=-1;for(;a<=n;){const r=a+(n-a+1)/2|0;i(t[r])<=e?(o=r,a=r+1):n=r-1}return o},fo=()=>{let t,e;return{promise:new Promise((a,n)=>{t=a,e=n}),resolve:t,reject:e}},Mt=t=>{throw new Error(`Unexpected value: ${t}`)},Mf=(t,e,i)=>{const a=t.getUint8(e),n=t.getUint8(e+1),o=t.getUint8(e+2);return a<<16|n<<8|o},za=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},If=(t,e,i,a)=>{i=Me(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),za(t,e,i,a)},Me=(t,e,i)=>Math.max(e,Math.min(i,t)),Af=(t,e,i)=>t+(e-t)*i,Bf="und",uo=(t,e)=>Math.round(t/e)*e,ho=(t,e)=>Math.round(t*e)/e,mo=(t,e)=>Math.floor(t*e)/e,Rf=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},zf=/^[a-z]{3}$/,Ff=t=>zf.test(t),Tt=1e6*(1+Number.EPSILON),Of=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,n=1,o=1,r=0,s=t;for(;;){const l=Math.floor(s),c=l*o+a,f=l*r+n;if(f>e)return{num:i*o,den:r};if(a=o,n=r,o=c,r=f,s=1/(s-l),!isFinite(s))break}return{num:i*o,den:r}};class po{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Fa=null;const Hf=()=>Fa!==null?Fa:Fa=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let Oa=null;const go=()=>Oa!==null?Oa:Oa=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let Ha=null;const Lf=()=>Ha!==null?Ha:Ha=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let La=null;const Nf=()=>{if(La!==null)return La;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?La=Number(t[1]):null},vo=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Uf=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Df=(t,e)=>{let i=-1,a=1/0;for(let n=0;n<t.length;n++){const o=e(t[n]);o<a&&(a=o,i=n)}return i},bo=t=>{U(Number.isInteger(t.num)),U(Number.isInteger(t.den)),U(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const n=e%i;e=i,i=n}const a=e||1;return{num:t.num/a,den:t.den/a}},Na=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},qf=t=>new Promise(e=>setTimeout(e,t)),yo=t=>Array.isArray(t)?t:[t];class Ua{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const n={fn:i,once:a?.once??!1};return this._listeners.get(e).add(n),()=>{this._listeners.get(e)?.delete(n)}}_emit(...e){const[i,a]=e,n=this._listeners.get(i);if(n)for(const o of n){try{o.fn(a)}catch(r){console.error(r)}o.once&&n.delete(o)}}}const $f=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var rt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(rt||(rt={}));class ke{constructor(){}static get level(){return ke._level}static set level(e){if(e!==rt.Silent&&e!==rt.Errors&&e!==rt.Warnings&&e!==rt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ke._level=e}static get _emitter(){return ke._emitterInstance??=new Ua}static on(e,i,a){return ke._emitter.on(e,i,a)}static _error(...e){ke._emitter._emit("error",e),ke._level>=rt.Errors&&console.error(...e)}static _warn(...e){ke._emitter._emit("warn",e),ke._level>=rt.Warnings&&console.warn(...e)}static _info(...e){ke._emitter._emit("info",e),ke._level>=rt.Info&&console.info(...e)}}ke._level=rt.Info,ke._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class wo{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Wf{constructor(e,i,a,n){if(this.data=e,this.mimeType=i,this.name=a,this.description=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("description, when provided, must be a string.")}}const jf=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof wo)&&!(e instanceof Wf)&&!$f(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Vf=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ce{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),n=(i&1<<a)>>a;return this.pos++,n}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let n=this.pos;n<a;n++){const o=Math.floor(n/8);let r=this.bytes[o];const s=7-(n&7);r&=~(1<<s),r|=(i&1<<a-n-1)>>a-n-1<<s,this.bytes[o]=r}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Ce(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ra=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Da=[-1,1,2,3,4,5,6,8],Gf=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Ce(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let n=null;a===15?n=e.readBits(24):a<ra.length&&(n=ra[a]);const o=e.readBits(4);let r=null;return o>=1&&o<=7&&(r=Da[o]),{objectType:i,frequencyIndex:a,sampleRate:n,channelConfiguration:o,numberOfChannels:r}},ko=t=>{let e=ra.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=Da.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let n=13;t.objectType>=32&&(n+=6),e===15&&(n+=24);const o=Math.ceil(n/8),r=new Uint8Array(o),s=new Ce(r);return t.objectType<32?s.writeBits(5,t.objectType):(s.writeBits(5,31),s.writeBits(6,t.objectType-32)),s.writeBits(4,e),e===15&&s.writeBits(24,i),s.writeBits(4,a),r};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const mt=["avc","hevc","vp9","av1","vp8","prores"],Ze=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],qa=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],It=[...qa,...Ze],li=["webvtt"],sa=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],To=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],_o=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],xo=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],ci=["ap4x","ap4h","apch","apcn","apcs","apco"],$a=["dtsc","dtsh","dtsl","dtse"],Kf=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Xf=(t,e,i,a,n)=>{if(t==="avc"){const r=Math.ceil(e/16)*Math.ceil(i/16),s=sa.find(p=>r<=p.maxMacroblocks&&a<=p.maxBitrate)??Xe(sa),l=s?s.level:0,c="64".padStart(2,"0"),f="00",d=l.toString(16).padStart(2,"0");return`avc1.${c}${f}${d}`}else if(t==="hevc"){const l=e*i,c=To.find(d=>l<=d.maxPictureSize&&a<=d.maxBitrate)??Xe(To);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const r=e*i;return`vp09.00.${(_o.find(c=>r<=c.maxPictureSize&&a<=c.maxBitrate)??Xe(_o)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const r=e*i,s=xo.find(f=>r<=f.maxPictureSize&&a<=f.maxBitrate)??Xe(xo);return`av01.0.${s.level.toString().padStart(2,"0")}${s.tier}.08`}else if(t==="prores"){const r=Math.pow(e*i/2073600,.95),s=Kf.filter(f=>f.alpha===n);let l=s[0].fourCc,c=1/0;for(const{fourCc:f,bitrate:d}of s){const p=Math.abs(d*r-a);p<c&&(c=p,l=f)}return l}else Mt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Zf=t=>{const e=t.split("."),n=(1<<7)+1,o=Number(e[1]),r=e[2],s=Number(r.slice(0,-1)),l=(o<<5)+s,c=r.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,p=0,u=e[4]?Number(e[4]):0,m=e[5]?Number(e[5][0]):1,h=e[5]?Number(e[5][1]):1,v=e[5]?Number(e[5][2]):0,y=(c<<7)+(d<<6)+(p<<5)+(u<<4)+(m<<3)+(h<<2)+v;return[n,l,y,0]},Qf=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Ze.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},So=/^pcm-([usf])(\d+)(be)?$/,At=t=>{if(U(Ze.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=So.exec(t);U(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,n=e[3]!=="be",o=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:n,silentValue:o}},la=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":ci.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":$a.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":So.test(t)?t:t==="webvtt"?"webvtt":null,Yf=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Jf=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},eu=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...ci],tu=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,iu=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,au=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,nu=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Co=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!eu.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!oa(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(ia);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(aa);if(i.transfer!=null&&!n.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const o=Object.keys(na);if(i.matrix!=null&&!o.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${o.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!tu.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!iu.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!au.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!nu.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(ci.some(i=>t.decoderConfig.codec.startsWith(i))&&!ci.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${ci.join(", ")}.`);if(e!==null&&la(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},ou=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Eo=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!ou.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!oa(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!$a.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${$a.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Ze.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Ze.join(", ")}).`);if(e!==null&&la(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},ru=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const su=[48e3,44100,32e3],lu=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var pt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(pt||(pt={}));var We;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(We||(We={}));const fi=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let n=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?n=4:t[e+1]===0&&t[e+2]===1&&(n=3),n===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+n,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Po=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let n;e===1?n=a.getUint8(i):e===2?n=a.getUint16(i,!1):e===3?n=Mf(a,i):(U(e===4),n=a.getUint32(i,!1)),i+=e,yield{offset:i,length:n},i+=n}},cu=(t,e)=>{if(e.description){const n=($e(e.description)[4]&3)+1;return Po(t,n)}else return fi(t)},Mo=t=>t&31,ca=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},fu=(t,e)=>{const i=t.reduce((o,r)=>o+e+r.byteLength,0),a=new Uint8Array(i);let n=0;for(const o of t){const r=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:r.setUint8(n,o.byteLength);break;case 2:r.setUint16(n,o.byteLength,!1);break;case 3:za(r,n,o.byteLength,!1);break;case 4:r.setUint32(n,o.byteLength,!1);break}n+=e,a.set(o,n),n+=o.byteLength}return a},uu=t=>{try{const e=[],i=[],a=[];for(const s of fi(t)){const l=t.subarray(s.offset,s.offset+s.length),c=Mo(l[0]);c===pt.SPS?e.push(l):c===pt.PPS?i.push(l):c===pt.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const n=e[0],o=hu(n);U(o!==null);const r=o.profileIdc===100||o.profileIdc===110||o.profileIdc===122||o.profileIdc===144;return{configurationVersion:1,avcProfileIndication:o.profileIdc,profileCompatibility:o.constraintFlags,avcLevelIndication:o.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:r?o.chromaFormatIdc:null,bitDepthLumaMinus8:r?o.bitDepthLumaMinus8:null,bitDepthChromaMinus8:r?o.bitDepthChromaMinus8:null,sequenceParameterSetExt:r?a:null}}catch(e){return ke._error("Error building AVC Decoder Configuration Record:",e),null}},du=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){U(t.chromaFormat!==null),U(t.bitDepthLumaMinus8!==null),U(t.bitDepthChromaMinus8!==null),U(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}}return new Uint8Array(e)},Io={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},hu=t=>{try{const e=new Ce(ca(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),n=e.readAlignedByte(),o=e.readAlignedByte();Z(e);let r=1,s=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(r=Z(e),r===3&&(c=e.readBits(1)),s=Z(e),l=Z(e),e.skipBits(1),e.readBits(1))){for(let S=0;S<(r!==3?8:12);S++)if(e.readBits(1)){const k=S<6?16:64;let H=8,J=8;for(let D=0;D<k;D++){if(J!==0){const ne=ht(e);J=(H+ne+256)%256}H=J===0?H:J}}}Z(e);const f=Z(e);if(f===0)Z(e);else if(f===1){e.skipBits(1),ht(e),ht(e);const $=Z(e);for(let S=0;S<$;S++)ht(e)}Z(e),e.skipBits(1);const d=Z(e),p=Z(e),u=16*(d+1),m=16*(p+1);let h=u,v=m;const y=e.readBits(1);if(y||e.skipBits(1),e.skipBits(1),e.readBits(1)){const $=Z(e),S=Z(e),R=Z(e),k=Z(e);let H,J;if((c===0?r:0)===0)H=1,J=2-y;else{const ne=r===3?1:2,K=r===1?2:1;H=ne,J=K*(2-y)}h-=H*($+S),v-=J*(R+k)}let w=2,T=2,_=2,M=0,E={num:1,den:1},A=null,I=null;if(e.readBits(1)){if(e.readBits(1)){const K=e.readBits(8);if(K===255)E={num:e.readBits(16),den:e.readBits(16)};else{const re=Io[K];re&&(E=re)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),M=e.readBits(1),e.readBits(1)&&(w=e.readBits(8),T=e.readBits(8),_=e.readBits(8))),e.readBits(1)&&(Z(e),Z(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const J=e.readBits(1);J&&Ao(e);const D=e.readBits(1);D&&Ao(e),(J||D)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),Z(e),Z(e),Z(e),Z(e),A=Z(e),I=Z(e))}if(A===null){U(I===null);const $=n&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&$)A=0,I=0;else{const S=d+1,R=p+1,k=(2-y)*R,H=sa.find(D=>D.level>=o)??Xe(sa),J=Math.min(Math.floor(H.maxDpbMbs/(S*k)),16);A=J,I=J}}return U(I!==null),{profileIdc:a,constraintFlags:n,levelIdc:o,frameMbsOnlyFlag:y,chromaFormatIdc:r,bitDepthLumaMinus8:s,bitDepthChromaMinus8:l,codedWidth:u,codedHeight:m,displayWidth:h,displayHeight:v,pixelAspectRatio:E,colourPrimaries:w,matrixCoefficients:_,transferCharacteristics:T,fullRangeFlag:M,numReorderFrames:A,maxDecFrameBuffering:I}}catch(e){return ke._error("Error parsing AVC SPS:",e),null}},Ao=t=>{const e=Z(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)Z(t),Z(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},mu=(t,e)=>{if(e.description){const n=($e(e.description)[21]&3)+1;return Po(t,n)}else return fi(t)},Wa=t=>t>>1&63,pu=t=>{try{const e=new Ce(ca(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:n,general_tier_flag:o,general_profile_idc:r,general_profile_compatibility_flags:s,general_constraint_indicator_flags:l,general_level_idc:c}=vu(e,i);Z(e);const f=Z(e);let d=0;f===3&&(d=e.readBits(1));const p=Z(e),u=Z(e);let m=p,h=u;if(e.readBits(1)){const S=Z(e),R=Z(e),k=Z(e),H=Z(e);let J=1,D=1;const ne=d===0?f:0;ne===1?(J=2,D=2):ne===2&&(J=2,D=1),m-=(S+R)*J,h-=(k+H)*D}const v=Z(e),y=Z(e);Z(e);const w=e.readBits(1)?0:i;let T=0;for(let S=w;S<=i;S++)Z(e),T=Z(e),Z(e);Z(e),Z(e),Z(e),Z(e),Z(e),Z(e),e.readBits(1)&&e.readBits(1)&&bu(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),Z(e),Z(e),e.skipBits(1));const _=Z(e);if(yu(e,_),e.readBits(1)){const S=Z(e);for(let R=0;R<S;R++)Z(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let M=2,E=2,A=2,I=0,N=0,$={num:1,den:1};if(e.readBits(1)){const S=ku(e,i);$=S.pixelAspectRatio,M=S.colourPrimaries,E=S.transferCharacteristics,A=S.matrixCoefficients,I=S.fullRangeFlag,N=S.minSpatialSegmentationIdc}return{displayWidth:m,displayHeight:h,pixelAspectRatio:$,colourPrimaries:M,transferCharacteristics:E,matrixCoefficients:A,fullRangeFlag:I,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:n,generalTierFlag:o,generalProfileIdc:r,generalProfileCompatibilityFlags:s,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:f,bitDepthLumaMinus8:v,bitDepthChromaMinus8:y,minSpatialSegmentationIdc:N}}catch(e){return ke._error("Error parsing HEVC SPS:",e),null}},gu=t=>{try{const e=[],i=[],a=[],n=[];for(const c of fi(t)){const f=t.subarray(c.offset,c.offset+c.length),d=Wa(f[0]);d===We.VPS_NUT?e.push(f):d===We.SPS_NUT?i.push(f):d===We.PPS_NUT?a.push(f):(d===We.PREFIX_SEI_NUT||d===We.SUFFIX_SEI_NUT)&&n.push(f)}if(i.length===0||a.length===0)return null;const o=pu(i[0]);if(!o)return null;let r=0;if(a.length>0){const c=a[0],f=new Ce(ca(c));f.skipBits(16),Z(f),Z(f),f.skipBits(1),f.skipBits(1),f.skipBits(3),f.skipBits(1),f.skipBits(1),Z(f),Z(f),ht(f),f.skipBits(1),f.skipBits(1),f.readBits(1)&&Z(f),ht(f),ht(f),f.skipBits(1),f.skipBits(1),f.skipBits(1),f.skipBits(1);const d=f.readBits(1),p=f.readBits(1);!d&&!p?r=0:d&&!p?r=2:!d&&p?r=3:r=0}const s=[...e.length?[{arrayCompleteness:1,nalUnitType:We.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:We.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:We.PPS_NUT,nalUnits:a}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:Wa(n[0][0]),nalUnits:n}]:[]];return{configurationVersion:1,generalProfileSpace:o.generalProfileSpace,generalTierFlag:o.generalTierFlag,generalProfileIdc:o.generalProfileIdc,generalProfileCompatibilityFlags:o.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:o.generalConstraintIndicatorFlags,generalLevelIdc:o.generalLevelIdc,minSpatialSegmentationIdc:o.minSpatialSegmentationIdc,parallelismType:r,chromaFormatIdc:o.chromaFormatIdc,bitDepthLumaMinus8:o.bitDepthLumaMinus8,bitDepthChromaMinus8:o.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:o.spsMaxSubLayersMinus1+1,temporalIdNested:o.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:s}}catch(e){return ke._error("Error building HEVC Decoder Configuration Record:",e),null}},vu=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),n=t.readBits(5);let o=0;for(let f=0;f<32;f++)o=o<<1|t.readBits(1);const r=new Uint8Array(6);for(let f=0;f<6;f++)r[f]=t.readBits(8);const s=t.readBits(8),l=[],c=[];for(let f=0;f<e;f++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let f=e;f<8;f++)t.skipBits(2);for(let f=0;f<e;f++)l[f]&&t.skipBits(88),c[f]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:n,general_profile_compatibility_flags:o,general_constraint_indicator_flags:r,general_level_idc:s}},bu=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))Z(t);else{const n=Math.min(64,1<<4+(e<<1));e>1&&ht(t);for(let o=0;o<n;o++)ht(t)}},yu=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=wu(t,a,e,i)},wu=(t,e,i,a)=>{let n=0,o=0,r=0;if(e!==0&&(o=t.readBits(1)),o){if(e===i){const l=Z(t);r=e-(l+1)}else r=e-1;t.readBits(1),Z(t);const s=a[r]??0;for(let l=0;l<=s;l++)t.readBits(1)||t.readBits(1);n=a[r]}else{const s=Z(t),l=Z(t);for(let c=0;c<s;c++)Z(t),t.readBits(1);for(let c=0;c<l;c++)Z(t),t.readBits(1);n=s+l}return n},ku=(t,e)=>{let i=2,a=2,n=2,o=0,r=0,s={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)s={num:t.readBits(16),den:t.readBits(16)};else{const c=Io[l];c&&(s=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),o=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),n=t.readBits(8))),t.readBits(1)&&(Z(t),Z(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(Z(t),Z(t),Z(t),Z(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&Z(t),t.readBits(1)&&Tu(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),r=Z(t),Z(t),Z(t),Z(t),Z(t)),{pixelAspectRatio:s,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:n,fullRangeFlag:o,minSpatialSegmentationIdc:r}},Tu=(t,e,i)=>{let a=!1,n=!1,o=!1;a=t.readBits(1)===1,n=t.readBits(1)===1,(a||n)&&(o=t.readBits(1)===1,o&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),o&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let r=0;r<=i;r++){const s=t.readBits(1)===1;let l=!0;s||(l=t.readBits(1)===1);let c=!1;l?Z(t):c=t.readBits(1)===1;let f=1;c||(f=Z(t)+1),a&&Bo(t,f,o),n&&Bo(t,f,o)}},Bo=(t,e,i)=>{for(let a=0;a<e;a++)Z(t),Z(t),i&&(Z(t),Z(t)),t.readBits(1)},_u=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let n=0;n<a.length;n++)e.push(a[n])}}return new Uint8Array(e)};var Ro;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Ro||(Ro={}));const xu=function*(t){const e=new Ce(t),i=()=>{let a=0;for(let n=0;n<8;n++){const o=e.readAlignedByte();if(a|=(o&127)<<n*7,!(o&128))break;if(n===7&&o&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),n=e.readBits(1),o=e.readBits(1);e.skipBits(1),n&&e.skipBits(8);let r;if(o){const s=i();if(s===null)return;r=s}else r=Math.floor(e.getBitsLeft()/8);U(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+r)},e.skipBits(r*8)}},Su=t=>{const e=nt(t),i=e.getUint8(9),a=e.getUint16(10,!0),n=e.getUint32(12,!0),o=e.getInt16(16,!0),r=e.getUint8(18);let s=null;return r&&(s=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:n,outputGain:o,channelMappingFamily:r,channelMappingTable:s}},Cu=(t,e,i)=>{switch(t){case"avc":{for(const a of cu(i,e)){const n=i[a.offset],o=Mo(n);if(o>=pt.NON_IDR_SLICE&&o<=pt.SLICE_DPC)return"delta";if(o===pt.IDR)return"key";if(o===pt.SEI&&(!Lf()||Nf()>=144)){const r=i.subarray(a.offset,a.offset+a.length),s=ca(r);let l=1;do{let c=0;for(;;){const p=s[l++];if(p===void 0||(c+=p,p<255))break}let f=0;for(;;){const p=s[l++];if(p===void 0||(f+=p,p<255))break}if(c===6){const p=new Ce(s);p.pos=8*l;const u=Z(p),m=p.readBits(1);if(u===0&&m===1)return"key"}l+=f}while(l<s.length-1)}}return"delta"}case"hevc":{for(const a of mu(i,e)){const n=Wa(i[a.offset]);if(n<We.BLA_W_LP)return"delta";if(n<=We.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Ce(i);if(a.readBits(2)!==2)return null;const n=a.readBits(1);return(a.readBits(1)<<1)+n===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:n,data:o}of xu(i))if(n===1){const r=new Ce(o);r.skipBits(4),a=!!r.readBits(1)}else if(n===3||n===6||n===7){if(a)return"key";const r=new Ce(o);return r.readBits(1)?null:r.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Mt(t),U(!1)}};var zo;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(zo||(zo={}));const Eu=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Ce(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),n=e.readBits(5);if(n>8)return null;const o=e.readBits(3),r=e.readBits(3);(r&1)!==0&&r!==1&&e.skipBits(2),(r&4)!==0&&e.skipBits(2),r===2&&e.skipBits(2);const s=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:n,bsmod:o,acmod:r,lfeon:s,bitRateCode:l}},Pu=[1,2,3,6],Mu=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Ce(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),n=e.readBits(2);let o=0,r;n===3?(o=e.readBits(2),r=3):r=e.readBits(2);const s=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const f=Pu[r];let d;return n<3?d=su[n]/1e3:d=lu[o]/1e3,{dataRate:Math.round((a+1)*d/(f*16)),substreams:[{fscod:n,fscod2:o,bsid:c,bsmod:0,acmod:s,lfeon:l,numDepSub:0,chanLoc:0}]}},Iu=1683496997,Au=18,Bu=10,Fo=32,Ru=20,zu=8,Fu=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Ou=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Hu=[16,16,20,20,0,24,24,0],Oo=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Lu=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Nu=8,Uu=[32e3,44100,48e3,0],Du=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],qu=[512,1024,2048,4096],$u=t=>{const e=Wu(t),i=nt(t);let a=e?Math.ceil(e.frameSize/4)*4:0,n=null;for(;a+4<=t.length&&i.getUint32(a)===Iu;){const r=ju(t.subarray(a));if(!r)break;n??=r,a+=r.frameSize}if(e)return{frameSize:n?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:n!==null};if(!n?.asset)return null;const{asset:o}=n;return{frameSize:a,sampleRate:o.sampleRate,numberOfChannels:o.numberOfChannels,sampleCount:o.sampleCount,channelLayout:o.channelLayout,pcmResolution:o.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Wu=t=>{if(t.length<Au||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Ce(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Fo-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%zu!==0)return null;const n=e.readBits(14)+1;if(n<96)return null;const o=e.readBits(6);if(o>=Oo.length)return null;const r=Fu[e.readBits(4)];if(r===0)return null;const s=Ou[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=Hu[e.readBits(3)];if(c===0)return null;const f=l!==0;return{frameSize:n,sampleRate:r,numberOfChannels:Oo[o]+(f?1:0),sampleCount:a*Fo,channelLayout:Lu[o]|(f?Nu:0),amode:o,lfePresent:f,bitRate:s,pcmResolution:c}},ju=t=>{if(t.length<Bu||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Ce(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),n=8+4*a,o=16+4*a;e.skipBits(n);const r=e.readBits(o)+1,s={frameSize:r,asset:null};if(!e.readBits(1))return s;const l=Uu[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const f=e.readBits(3)+1,d=e.readBits(3)+1,p=[];for(let y=0;y<f;y++)p.push(e.readBits(i+1));for(const y of p)e.skipBits(8*Rf(y));if(e.readBits(1)){e.skipBits(2);const y=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*y)}for(let y=0;y<d;y++)e.skipBits(o);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const u=e.readBits(5)+1,m=Du[e.readBits(4)],h=e.readBits(8)+1;let v=0;if(e.readBits(1)&&(h>2&&e.skipBits(1),h>6&&e.skipBits(1),e.readBits(1))){const y=e.readBits(2)+1<<2;v=e.readBits(y)}return l===0||e.getBitsLeft()<0?s:{frameSize:r,asset:{sampleRate:m,numberOfChannels:h,sampleCount:Math.round(c*m/l),channelLayout:v,pcmResolution:u}}},Vu=t=>{const e=new Uint8Array(Ru),i=nt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,n=new Ce(e);return n.seekToByte(13),n.writeBits(2,Math.max(qu.indexOf(t.sampleCount),0)),n.writeBits(5,a),n.writeBits(1,t.core?.lfePresent?1:0),n.writeBits(6,t.core?.amode??0),n.writeBits(14,t.core?t.core.frameSize-1:0),n.writeBits(1,0),n.writeBits(3,0),n.writeBits(16,t.channelLayout),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ho=new Uint8Array(0);class st{constructor(e,i,a,n,o=-1,r,s){if(this.data=e,this.type=i,this.timestamp=a,this.duration=n,this.sequenceNumber=o,e===Ho&&r===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(r===void 0&&(r=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(o))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(r)||r<0)throw new TypeError("byteLength must be a non-negative integer.");if(s!==void 0&&(typeof s!="object"||!s))throw new TypeError("sideData, when provided, must be an object.");if(s?.alpha!==void 0&&!(s.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(s?.alphaByteLength!==void 0&&(!Number.isInteger(s.alphaByteLength)||s.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=r,this.sideData=s??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Ho}get microsecondTimestamp(){return Math.trunc(Tt*this.timestamp)}get microsecondDuration(){return Math.trunc(Tt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new st(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new st(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Gu=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ja=8,Lo=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ku=7,Xu=9,No=t=>{const e=t.filePos,i=yd(t,9),a=new Ce(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const r=a.readBits(1),s=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const f=a.readBits(13);a.skipBits(11);const d=a.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let p=null;return r===1?t.filePos-=2:p=a.readBits(16),{objectType:s,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:f,numberOfAacFrames:d,crcCheck:p,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Zu=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Qu=(function(t){return function(e){function i(r){e.error=e.hasError?new t(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}var a,n=0;function o(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(o);if(a.dispose){var r=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(r).then(o,function(s){return i(s),o()})}else n|=1}catch(s){i(s)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});Uf();let Uo=-1/0,Do=-1/0,ui=null;typeof FinalizationRegistry<"u"&&(ui=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Uo>=1e3&&(ke._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Uo=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Do>=1e3&&(ke._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Do=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Bt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Va=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Yu=new Set(Va);class ze{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Tt*this.timestamp)}get microsecondDuration(){return Math.trunc(Tt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Yu.has(i.format))throw new TypeError("init.format must be one of: "+Va.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const o of i.layout){if(!o||typeof o!="object"||Array.isArray(o))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(o.offset)||o.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(o.stride)||o.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Na(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??td(i.format,i.codedWidth,i.codedHeight);let n=i.colorSpace??null;n===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?n={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:n={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?$e(e):$e(e).slice(),this._layout=a,this.colorSpace=new Ga(n)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Na(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new Ga(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Na(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new ze(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*Tt),duration:Math.trunc((i.duration??0)*Tt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,n=0;if("naturalWidth"in e?(a=e.naturalWidth,n=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,n=e.videoHeight):"width"in e&&(a=Number(e.width),n=Number(e.height)),!a||!n)throw new TypeError("Could not determine dimensions.");const o=i.visibleRect??{left:0,top:0,width:a,height:n},r=new OffscreenCanvas(o.width,o.height),s=r.getContext("2d",{alpha:go(),willReadFrequently:!0});if(!s)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");s.drawImage(e,-o.left,-o.top),this._data=r,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:o.width,height:o.height},this.squarePixelWidth=o.width,this.squarePixelHeight=o.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new Ga({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Bt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Va.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=bo({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),ui?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return U(this._data!==null),this._data instanceof Bt?new ze(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):hi(this._data)?new ze(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(U(this._layout),new ze(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new ze(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(ui?.unregister(this),this._data instanceof Bt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):hi(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(jo(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return hi(this._data)?this._data.allocationSize(e):Vo(this,e).allocationSize}async copyTo(e,i={}){if(!oa(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(jo(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(U(this._data!==null),hi(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Bt){const c={stack:[],error:void 0,hasError:!1};try{const f=Zu(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(f instanceof ze))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(f.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${f.format}' instead.`);return await f.copyTo(e,i)}catch(f){c.error=f,c.hasError=!0}finally{Qu(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),f=await c.copyTo(e,i);return c.close(),f}const a=Vo(this,i);U(this.format);const n=$e(e);if(n.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${n.byteLength}`);const o=fa(this.format);let r;if(this._data instanceof Bt){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(f=>!(f.data instanceof Uint8Array)||!Number.isInteger(f.stride)||f.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');r=c}else if(this._data instanceof Uint8Array)U(this._layout),U(this._layout.length===o.length),r=this._layout.map((c,f)=>{const d=Math.ceil(this.codedHeight/o[f].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*d),stride:c.stride}});else{const f=this._data.getContext("2d");U(f);const d=f.getImageData(0,0,this.codedWidth,this.codedHeight);r=[{data:$e(d.data),stride:4*this.codedWidth}]}const s=[],l=o.length;for(let c=0;c<l;c++){const f=a.computedLayouts[c],d=r[c].stride,p=r[c].data;let u=f.sourceTop*d;u+=f.sourceLeftBytes;let m=f.destinationOffset;const h=f.sourceWidthBytes,v={offset:m,stride:f.destinationStride};for(let y=0;y<f.sourceHeight;y++){if(u+h>p.byteLength)throw new Error("Source buffer OOB read.");if(m+h>n.byteLength)throw new Error("Destination buffer OOB write.");const b=p.subarray(u,u+h);n.set(b,m),u+=d,m+=f.destinationStride}s.push(v)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),f=this.format.includes("X")&&i.format.includes("A");if(c||f)for(let d=0;d<a.allocationSize;d+=4){if(c){const p=n[d],u=n[d+2];n[d]=u,n[d+2]=p}f&&(n[d+3]=255)}}return s}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(U(this._data!==null),this._data instanceof Bt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((r,s)=>r+s.data.byteLength,0),a=new Uint8Array(i);let n=0;const o=[];for(const r of e)a.set(r.data,n),o.push(n),n+=r.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((r,s)=>({offset:o[s],stride:r.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return hi(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(U(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,n,o,r,s,l,c){let f=0,d=0,p=this.displayWidth,u=this.displayHeight,m=0,h=0,v=this.displayWidth,y=this.displayHeight;if(r!==void 0?(f=i,d=a,p=n,u=o,m=r,h=s,l!==void 0?(v=l,y=c):(v=p,y=u)):(m=i,h=a,n!==void 0&&(v=n,y=o)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(f))throw new TypeError("sx must be a number.");if(!Number.isFinite(d))throw new TypeError("sy must be a number.");if(!Number.isFinite(p)||p<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(u)||u<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(m))throw new TypeError("dx must be a number.");if(!Number.isFinite(h))throw new TypeError("dy must be a number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(y)||y<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:f,sy:d,sWidth:p,sHeight:u}=this._rotateSourceRegion(f,d,p,u,this.rotation));const b=this.toCanvasImageSource();e.save();const w=m+v/2,T=h+y/2;e.translate(w,T),e.rotate(this.rotation*Math.PI/180);const _=this.rotation%180===0?1:v/y;e.scale(1/_,_),e.drawImage(b,f,d,p,u,-v/2,-y/2,v,y),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Ka(i.crop,"options.");const a=e.canvas.width,n=e.canvas.height,o=i.rotation??this.rotation,[r,s]=o%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=Wo(l,r,s));let c,f,d,p;const{sx:u,sy:m,sWidth:h,sHeight:v}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??r,i.crop?.height??s,o);if(i.fit==="fill")c=0,f=0,d=a,p=n;else{const[b,w]=i.crop?[i.crop.width,i.crop.height]:[r,s],T=i.fit==="contain"?Math.min(a/b,n/w):Math.max(a/b,n/w);d=b*T,p=w*T,c=(a-d)/2,f=(n-p)/2}e.save();const y=o%180===0?1:d/p;e.translate(a/2,n/2),e.rotate(o*Math.PI/180),e.scale(1/y,y),e.translate(-a/2,-n/2),e.drawImage(this.toCanvasImageSource(),u,m,h,v,c,f,d,p),e.restore()}_rotateSourceRegion(e,i,a,n,o){return o===90?[e,i,a,n]=[i,this.squarePixelHeight-e-a,n,a]:o===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-n]:o===270&&([e,i,a,n]=[this.squarePixelWidth-i-n,e,n,a]),{sx:e,sy:i,sWidth:a,sHeight:n}}_drawWithFitAndMipmapping(e,i,a){const n=e.width,o=e.height,[r,s]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:r,c=a.crop?a.crop.height:s;let f=0;2*n<l&&2*o<c&&(f=Math.floor(Math.log2(Math.min(l/n,c/o))));const d=n*2**f,p=o*2**f,{canvas:u,context:m,isNew:h}=f>0?$o(d,p):{canvas:e,context:i,isNew:a.targetIsFresh};m.imageSmoothingQuality="high",a.fillBlack?(m.fillStyle="black",m.fillRect(0,0,d,p)):h||m.clearRect(0,0,d,p),this.drawWithFit(m,{fit:a.fit,rotation:a.rotation,crop:a.crop}),m.globalCompositeOperation="copy";for(let v=f;v>1;v--){const y=n*2**v,b=o*2**v;m.drawImage(u,0,0,y,b,0,0,y/2,b/2)}m.globalCompositeOperation="source-over",f>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(u,0,0,2*n,2*o,0,0,n,o),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(U(this._data!==null),this._data instanceof Bt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Ka(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=Ef(this.rotation+(e.rotate??0)),[a,n]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let o=e.crop;o&&(o=Wo(o,a,n));const r=o?o.width:a,s=o?o.height:n,l=r/s;let c,f;e.width!==void 0&&e.height===void 0?(c=e.width,f=c/l):e.width===void 0&&e.height!==void 0?(f=e.height,c=f*l):e.width!==void 0&&e.height!==void 0?(c=e.width,f=e.height):(c=r,f=s),c=uo(c,e.roundDimensionsTo??1),f=uo(f,e.roundDimensionsTo??1);const d={width:c,height:f,fit:e.fit??"fill",rotation:i,crop:o??{left:0,top:0,width:a,height:n},alpha:e.alpha??"keep"};for(const h of Ju){let v=h(this,d);if(v instanceof Promise&&(v=await v),v!==null)return v}const{canvas:p,context:u,isNew:m}=$o(d.width,d.height);return this._drawWithFitAndMipmapping(p,u,{fit:d.fit,rotation:d.rotation,crop:d.crop,targetIsFresh:m,fillBlack:d.alpha==="discard"}),new ze(p,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Ju=[],ed=3,di=[];let qo=0;const $o=(t,e)=>{for(const n of di)if(n.canvas.width===t&&n.canvas.height===e)return n.age=qo++,{canvas:n.canvas,context:n.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return di.length>=ed&&di.splice(Df(di,n=>n.age),1),di.push({canvas:i,context:a,age:qo++}),{canvas:i,context:a,isNew:!0}};class Ga{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(ia);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(aa);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const n=Object.keys(na);if(e.matrix!=null&&!n.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${n.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const hi=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Wo=(t,e,i)=>{const a=Math.min(t.left,e),n=Math.min(t.top,i),o=Math.min(t.width,e-a),r=Math.min(t.height,i-n);return U(o>=0),U(r>=0),{left:a,top:n,width:o,height:r}},Ka=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},jo=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},td=(t,e,i)=>{const a=fa(t),n=[];let o=0;for(const r of a){const s=Math.ceil(e/r.widthDivisor),l=Math.ceil(i/r.heightDivisor),c=s*r.sampleBytes,f=c*l;n.push({offset:o,stride:c}),o+=f}return n},fa=t=>{const e=(i,a,n,o,r)=>{const s=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:n,heightDivisor:o},{sampleBytes:a,widthDivisor:n,heightDivisor:o}];return r&&s.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),s};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Mt(t),U(!1)}},Vo=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,n=id(i,a,t.codedWidth,t.codedHeight,t.format),o=e.layout;let r;if(!e.format||e.format===t.format)r=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))r=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return nd(n,r,o)},id=(t,e,i,a,n)=>{const o={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");o.x=e.x||0,o.y=e.y||0,o.width=e.width||0,o.height=e.height||0}if(!ad(n,o))throw new TypeError("visibleRect alignment is invalid for the format.");return o},ad=(t,e)=>{if(t===null)return!0;const i=fa(t);for(let a=0;a<i.length;a++){const n=i[a],o=n.widthDivisor,r=n.heightDivisor;if((e.x||0)%o!==0||(e.y||0)%r!==0)return!1}return!0},nd=(t,e,i)=>{const a=fa(e),n=a.length;if(i!==void 0&&i.length!==n)throw new TypeError(`Layout must have ${n} planes.`);let o=0;const r=[],s=[];for(let l=0;l<n;l++){const c=a[l],f=c.sampleBytes,d=c.widthDivisor,p=c.heightDivisor,u={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(u.sourceTop=Math.ceil(Math.trunc(t.y||0)/p),u.sourceHeight=Math.ceil(Math.trunc(t.height||0)/p),u.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/d)*f,u.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/d)*f,i!==void 0){const v=i[l];if(v.stride<u.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);u.destinationOffset=v.offset,u.destinationStride=v.stride}else u.destinationOffset=o,u.destinationStride=u.sourceWidthBytes;const h=u.destinationStride*u.sourceHeight+u.destinationOffset;if(h>4294967295)throw new TypeError("Allocation size exceeds limit.");s.push(h),o=Math.max(o,h);for(let v=0;v<l;v++){const y=r[v];if(!(s[l]<=y.destinationOffset||s[v]<=u.destinationOffset))throw new TypeError("Planes overlap.")}r.push(u)}return{allocationSize:o,computedLayouts:r}},ua=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class mi{constructor(){this._referenceCount=0}}class He{get microsecondTimestamp(){return Math.trunc(Tt*this.timestamp)}get microsecondDuration(){return Math.trunc(Tt*this.duration)}constructor(e){if(this._closed=!1,pi(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof mi){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!ua.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!ua.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(_t(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const n=this.numberOfFrames*this.numberOfChannels*_t(this.format);if(a.byteLength<n)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}ui?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!ua.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const n=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(n>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const o=_t(i),r=Rt(i);if(r&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!r&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(r?n:n*this.numberOfChannels)*o}copyTo(e,i){if(!oa(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!ua.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:n,frameOffset:o}=i;let{planeIndex:r}=i;const s=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,f=this.numberOfChannels,d=o??0;if(d>=c)throw new RangeError("frameOffset out of range");const p=n!==void 0?n:c-d;if(p>c-d)throw new RangeError("frameCount out of range");const u=_t(l),m=Rt(l);if(m&&r>=f)throw new RangeError("planeIndex out of range");if(!m&&r!==0)throw new RangeError("planeIndex out of range");const v=(m?p:p*f)*u;if(e.byteLength<v)throw new RangeError("Destination buffer is too small");const y=nt(e),b=Ko(l);if(pi(this._data))Hf()&&f>2&&l!==s?rd(this._data,y,s,l,f,r,d,p):this._data.copyTo(e,{planeIndex:r,frameOffset:d,frameCount:p,format:l});else{const w=Go(s),T=_t(s),_=Rt(s);let M;if(this._data instanceof mi){const A=I=>{const N=this._data.getDataPlane(I);if(!(N instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const $=c*T*(_?1:f);if(N.byteLength!==$)throw new TypeError(`Data plane ${I} has invalid size. Expected exactly ${$} bytes, got ${N.byteLength} bytes.`);return N};if(_)if(m)M=A(r),r=0;else{M=new Uint8Array(c*T*f);for(let I=0;I<f;I++){const N=A(I);M.set(N,I*c*T)}}else M=A(0)}else M=this._data;const E=nt(M);for(let A=0;A<p;A++)if(m){const I=A*u;let N;_?N=(r*c+(A+d))*T:N=((A+d)*f+r)*T;const $=w(E,N);b(y,I,$)}else for(let I=0;I<f;I++){const $=(A*f+I)*u;let S;_?S=(I*c+(A+d))*T:S=((A+d)*f+I)*T;const R=w(E,S);b(y,$,R)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof mi){const e=new He(this._data);return e.setTimestamp(this.timestamp),e}else if(pi(this._data)){const e=new He(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new He({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,n=_t(this.format);let o;if(Rt(this.format)){const r=a*n;if(o=new Uint8Array(r*this.numberOfChannels),a>0)for(let s=0;s<this.numberOfChannels;s++)this.copyTo(o.subarray(s*r,(s+1)*r),{planeIndex:s,format:this.format,frameOffset:e,frameCount:a})}else o=new Uint8Array(a*this.numberOfChannels*n),a>0&&this.copyTo(o,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new He({data:o,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(ui?.unregister(this),this._data instanceof mi?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):pi(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof mi?this._createAudioDataFromData():pi(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Rt(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,o=e.sampleRate,r=e.length,s=Math.floor(a/n);let l=0,c=r;for(;c>0;){const f=Math.min(s,c),d=new Float32Array(n*f);for(let p=0;p<n;p++)e.copyFromChannel(d.subarray(p*f,(p+1)*f),p,l);yield new He({format:"f32-planar",sampleRate:o,numberOfFrames:f,numberOfChannels:n,timestamp:i+l/o,data:d}),l+=f,c-=f}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,o=e.sampleRate,r=e.length,s=Math.floor(a/n);let l=0,c=r;const f=[];for(;c>0;){const d=Math.min(s,c),p=new Float32Array(n*d);for(let m=0;m<n;m++)e.copyFromChannel(p.subarray(m*d,(m+1)*d),m,l);const u=new He({format:"f32-planar",sampleRate:o,numberOfFrames:d,numberOfChannels:n,timestamp:i+l/o,data:p});f.push(u),l+=d,c-=d}return f}}const _t=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Rt=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Go=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},Ko=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Me((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Me(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Me(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},pi=t=>typeof AudioData<"u"&&t instanceof AudioData,od=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},rd=(t,e,i,a,n,o,r,s)=>{const l=Go(i),c=Ko(a),f=_t(i),d=_t(a),p=Rt(i);if(Rt(a))if(p){const m=new ArrayBuffer(s*f),h=nt(m);t.copyTo(m,{planeIndex:o,frameOffset:r,frameCount:s,format:i});for(let v=0;v<s;v++){const y=v*f,b=v*d,w=l(h,y);c(e,b,w)}}else{const m=new ArrayBuffer(s*n*f),h=nt(m);t.copyTo(m,{planeIndex:0,frameOffset:r,frameCount:s,format:i});for(let v=0;v<s;v++){const y=(v*n+o)*f,b=v*d,w=l(h,y);c(e,b,w)}}else if(p){const m=s*f,h=new ArrayBuffer(m),v=nt(h);for(let y=0;y<n;y++){t.copyTo(h,{planeIndex:y,frameOffset:r,frameCount:s,format:i});for(let b=0;b<s;b++){const w=b*f,T=(b*n+y)*d,_=l(v,w);c(e,T,_)}}}else{const m=new ArrayBuffer(s*n*f),h=nt(m);t.copyTo(m,{planeIndex:0,frameOffset:r,frameCount:s,format:i});for(let v=0;v<s;v++)for(let y=0;y<n;y++){const b=v*n+y,w=b*f,T=b*d,_=l(h,w);c(e,T,_)}}},sd=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new He({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xo=new Map,Zo=new Map,ld=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!mt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${mt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof Fe))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Fe)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Ka(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Qo(t.codec,t)},Qo=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&la(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Yo=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(o,r,s)=>({codec:t.fullCodecString??Xf(t.codec,t.width,t.height,s,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:o,bitrateMode:r,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Yf(t.codec)}),n=[];return i.quantizer!==null&&n.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&n.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),U(n.length>0),n},cd=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!It.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${It.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Ze.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof Fe))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Fe)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Jo(t.codec,t)},Jo=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&la(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},er=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Qf(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Jf(t.codec)}};class Fe{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in tr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?tr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,n){const o=fd[e];let r=null,s=this._bitrateMode??n??"variable";if(this._quantizer!==void 0){if(o)if(this._quantizer<o.min||this._quantizer>o.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${o.min} and ${o.max}.`)}else r=this._quantizer,this._bitrate===void 0&&(s="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&o&&!this._preferBitrate&&(U(this._quality!==void 0),r=Me(Math.round(Af(o.worst,o.best,this._quality)),o.min,o.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&(U(r!==null&&o),c=Me((r-o.worst)/(o.best-o.worst),0,1)),l=ir(e,i,a,Xa(c))}return{quantizer:r,bitrate:l,bitrateMode:s}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(U(this._quality!==void 0),ir(e,i,a,Xa(this._quality)))}_toAudioBitrate(e){if(Ze.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Xa(this._quality),n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let o=n*i;return e==="aac"?o=[96e3,128e3,16e4,192e3].reduce((s,l)=>Math.abs(l-o)<Math.abs(s-o)?l:s):e==="opus"||e==="vorbis"?o=Math.max(6e3,o):e==="mp3"&&(o=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((s,l)=>Math.abs(l-o)<Math.abs(s-o)?l:s)),Math.round(o/1e3)*1e3}}const tr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},fd={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Xa=t=>.3*Math.exp(2.5538*t),ir=(t,e,i,a)=>{const n=e*i,o=1920*1080,r=3e6,s=Math.pow(n/o,.95),l=r*s,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/r},d=l*c[t]*a;return Math.ceil(d/1e3)*1e3},ar=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};U(!1)},ud=new Fe("high"),dd=async(t,e={})=>{const{width:i=1280,height:a=720,quality:n,bitrate:o,...r}=e;if(!mt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(n!==void 0&&!(n instanceof Fe))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof Fe)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer or a quality.");Qo(t,r);const s=da(n,o)??new Fe("medium");let l;try{l=Yo({codec:t,width:i,height:a,quality:s,framerate:void 0,...r,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),f=Xo.get(c);if(f)return f;const d=(async()=>{for(const{config:u}of l)if(nr.some(m=>m.supports(t,u)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:u,quantizer:m}of l){try{if(!(await VideoEncoder.isConfigSupported(u)).supported)continue}catch{continue}if(!go()||await new Promise(async v=>{try{const y=new VideoEncoder({output:()=>{},error:()=>v(!1)});y.configure(u);const b=new Uint8Array(i*a*4),w=new VideoFrame(b,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});y.encode(w,m!==null?ar(t,m):void 0),w.close(),await y.flush(),v(!0)}catch{v(!1)}}))return!0}return!1})();return Xo.set(c,d),d},hd=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:n,bitrate:o,...r}=e;if(!It.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(n!==void 0&&!(n instanceof Fe))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof Fe)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer.");Jo(t,r);const s=da(n,o)??new Fe("medium"),l=er({codec:t,numberOfChannels:i,sampleRate:a,quality:s,...r}),c=JSON.stringify(l),f=Zo.get(c);if(f)return f;const d=(async()=>{if(or.some(p=>p.supports(t,l))||Ze.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return Zo.set(c,d),d},da=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof Fe?e:new Fe({bitrate:e})},md=async(t,e)=>{for(const i of t)if(await dd(i,e))return i;return null},pd=async(t,e)=>{for(const i of t)if(await hd(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const nr=[],or=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const gd=t=>{let a=t,n=4096,o=0,r=12,s=0;for(a<0&&(a=-a,o=128),a+=33,a>8191&&(a=8191);(a&n)!==n&&r>=5;)n>>=1,r--;return s=a>>r-4&15,~(o|r-5<<4|s)&255},vd=t=>{let i=2048,a=0,n=11,o=0,r=t;for(r<0&&(r=-r,a=128),r>4095&&(r=4095);(r&i)!==i&&n>=5;)i>>=1,n--;return o=r>>(n===4?1:n-4)&15,(a|n-4<<4|o)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class gi{constructor(e,i,a,n,o){this.bytes=e,this.view=i,this.offset=a,this.start=n,this.end=o,this.bufferPos=n-a}static tempFromBytes(e){return new gi(e,nt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new gi(this.bytes,this.view,this.offset,e,e+i)}}const bd=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},yd=(t,e)=>{bd(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class wd{constructor(e){this.mutex=new lo,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let n=this.trackTimestampInfo.get(e);if(n){if(a&&(n.maxTimestampBeforeLastKeyPacket=n.maxTimestamp),n.maxTimestampBeforeLastKeyPacket!==null&&i<n.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${n.maxTimestampBeforeLastKeyPacket}s.`);n.maxTimestamp=Math.max(n.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");n={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,n)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const rr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,kd=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),n=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+n.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ha{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const o of e.children)o&&this.writeBox(o);const a=this.writer.getPos(),n=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,n),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);U(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const le=new Uint8Array(8),je=new DataView(le.buffer),Te=t=>[(t%256+256)%256],ae=t=>(je.setUint16(0,t,!1),[le[0],le[1]]),Za=t=>(je.setInt16(0,t,!1),[le[0],le[1]]),sr=t=>(je.setUint32(0,t,!1),[le[1],le[2],le[3]]),G=t=>(je.setUint32(0,t,!1),[le[0],le[1],le[2],le[3]]),gt=t=>(je.setInt32(0,t,!1),[le[0],le[1],le[2],le[3]]),lt=t=>(je.setUint32(0,Math.floor(t/2**32),!1),je.setUint32(4,t,!1),[le[0],le[1],le[2],le[3],le[4],le[5],le[6],le[7]]),Td=t=>(je.setInt32(0,Math.floor(t/2**32),!1),je.setUint32(4,t,!1),[le[0],le[1],le[2],le[3],le[4],le[5],le[6],le[7]]),lr=t=>(je.setInt16(0,2**8*t,!1),[le[0],le[1]]),Qe=t=>(je.setInt32(0,2**16*t,!1),[le[0],le[1],le[2],le[3]]),Qa=t=>(je.setInt32(0,2**30*t,!1),[le[0],le[1],le[2],le[3]]),Ya=(t,e)=>{const i=[];let a=t;do{let n=a&127;a>>=7,i.length>0&&(n|=128),i.push(n)}while(a>0||e);return i.reverse()},pe=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,n)=>t.charCodeAt(n));return e&&i.push(0),i},cr=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},fr=cr(0),ur=t=>[Qe(t[0]),Qe(t[1]),Qa(t[2]),Qe(t[3]),Qe(t[4]),Qa(t[5]),Qe(t[6]),Qe(t[7]),Qa(t[8])],ie=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),ue=(t,e,i,a,n)=>ie(t,[Te(e),sr(i),a??[]],n),_d=t=>t.isQuickTime?ie("ftyp",[pe("qt  "),G(512),pe("qt  ")]):t.fragmented?t.cmaf?ie("ftyp",[pe("iso5"),G(512),pe("iso5"),pe("iso6"),pe("mp41"),pe("cmfc"),pe("dash")]):ie("ftyp",[pe("iso5"),G(512),pe("iso5"),pe("iso6"),pe("mp41")]):ie("ftyp",[pe("isom"),G(512),pe("isom"),t.holdsAvc?pe("avc1"):[],pe("mp41")]),dr=()=>ie("styp",[pe("iso5"),G(0),pe("iso5"),pe("iso6"),pe("mp41"),pe("cmfc"),pe("dash")]),hr=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),ue("sidx",1,0,[G(1),G(Je),lt(be(t.minWrittenTimestamp,Je)),lt(0),ae(0),ae(1),G(e&2147483647),G(be(i,Je)),G(0)])},ma=t=>({type:"mdat",largeSize:t}),xd=t=>({type:"free",size:t}),vi=t=>ie("moov",void 0,[Sd(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>Cd(e,t.creationTime)),t.isFragmented?ch(t.trackDatas):null,Th(t)]),Sd=(t,e)=>{const i=Math.max(0,...e.map(r=>be(pa(r),Je)+be(r.startTimestampOffset??0,Je))),a=Math.max(0,...e.map(r=>r.track.id))+1,n=!kt(t)||!kt(i),o=n?lt:G;return ue("mvhd",+n,0,[o(t),o(t),G(Je),o(i),Qe(1),lr(1),Array(10).fill(0),ur(fr),Array(24).fill(0),G(a)])},pa=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const n=t.samples[a];n.timestamp<e&&(e=n.timestamp),n.timestamp+n.duration>i&&(i=n.timestamp+n.duration)}return e===1/0?0:i-e},Cd=(t,e)=>{const i=Rh(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ie("trak",void 0,[Ed(t,e),a?Pd(t,t.startTimestampOffset):null,Md(t,e),i.name!==void 0?ie("udta",void 0,[ie("name",[...ot.encode(i.name)])]):null])},Ed=(t,e)=>{const i=be(pa(t),Je)+be(t.startTimestampOffset??0,Je),a=!kt(e)||!kt(i),n=a?lt:G;let o;if(t.type==="video"){const l=t.track.metadata.rotation;o=cr(l??0)}else o=fr;let r=2;t.track.metadata.disposition?.default!==!1&&(r|=1);const s=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Mt(t);return ue("tkhd",+a,r,[n(e),n(e),G(t.track.id),G(0),n(i),Array(8).fill(0),ae(0),ae(s),lr(t.type==="audio"?1:0),ae(0),ur(o),Qe(t.type==="video"?t.info.width:0),Qe(t.type==="video"?t.info.height:0)])},Pd=(t,e)=>{const i=be(e,Je),a=be(pa(t),Je),n=!kt(i)||!kt(a),o=n?lt:G,r=n?Td:gt;return ie("edts",void 0,[ue("elst",n?1:0,0,[G(2),o(i),r(-1),Qe(1),o(a),r(0),Qe(1)])])},Md=(t,e)=>ie("mdia",void 0,[Id(t,e),Ja(!0,Ad[t.type],Bd[t.type]),Rd(t)]),Id=(t,e)=>{const i=be(pa(t),t.timescale),a=!kt(e)||!kt(i),n=a?lt:G;return ue("mdhd",+a,0,[n(e),n(e),G(t.timescale),n(i),ae(wr(t.track.metadata.languageCode??Bf)),ae(0)])},Ad={video:"vide",audio:"soun",subtitle:"text"},Bd={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Ja=(t,e,i,a="\0\0\0\0")=>ue("hdlr",0,0,[t?pe("mhlr"):G(0),pe(e),pe(a),G(0),G(0),pe(i,!0)]),Rd=t=>ie("minf",void 0,[zd[t.type](),Fd(),Ld(t)]),zd={video:()=>ue("vmhd",0,1,[ae(0),ae(0),ae(0),ae(0)]),audio:()=>ue("smhd",0,0,[ae(0),ae(0)]),subtitle:()=>ue("nmhd",0,0)},Fd=()=>ie("dinf",void 0,[Od()]),Od=()=>ue("dref",0,0,[G(1)],[Hd()]),Hd=()=>ue("url ",0,1),Ld=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ie("stbl",void 0,[Nd(t),ih(t),e?sh(t):null,e?lh(t):null,nh(t),oh(t),rh(t),ah(t)])},Nd=t=>{let e;if(t.type==="video")e=Ud(Ch(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=yr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);U(i),e=Vd(i,t)}else t.type==="subtitle"&&(e=eh(Mh[t.track.source._codec],t));return U(e),ue("stsd",0,0,[G(1)],[e])},Ud=(t,e)=>ie(t,[Array(6).fill(0),ae(1),ae(0),ae(0),Array(12).fill(0),ae(e.info.width),ae(e.info.height),G(4718592),G(4718592),G(0),ae(1),Te(10),pe("Mediabunny"),Array(21).fill(0),ae(e.info.hasAlphaChannel?32:24),Za(65535)],[Eh[e.track.source._codec]?.(e)??null,Dd(e),Pf(e.info.decoderConfig.colorSpace)?qd(e):null]),Dd=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ie("pasp",[G(t.info.pixelAspectRatio.num),G(t.info.pixelAspectRatio.den)]),qd=t=>ie("colr",[pe(t.muxer.isQuickTime?"nclc":"nclx"),ae(ia[t.info.decoderConfig.colorSpace.primaries]),ae(aa[t.info.decoderConfig.colorSpace.transfer]),ae(na[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:Te((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),$d=t=>t.info.decoderConfig&&ie("avcC",[...$e(t.info.decoderConfig.description)]),Wd=t=>t.info.decoderConfig&&ie("hvcC",[...$e(t.info.decoderConfig.description)]),mr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),n=Number(i[2]),o=Number(i[3]),r=i[4]?Number(i[4]):1,s=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(o<<4)+(r<<1)+s,c=i[5]?Number(i[5]):e.colorSpace?.primaries?ia[e.colorSpace.primaries]:2,f=i[6]?Number(i[6]):e.colorSpace?.transfer?aa[e.colorSpace.transfer]:2,d=i[7]?Number(i[7]):e.colorSpace?.matrix?na[e.colorSpace.matrix]:2;return ue("vpcC",1,0,[Te(a),Te(n),Te(l),Te(c),Te(f),Te(d),ae(0)])},jd=t=>ie("av1C",Zf(t.info.decoderConfig.codec)),Vd=(t,e)=>{let i=0,a,n=16;const o=Ze.includes(e.track.source._codec);if(o){const r=e.track.source._codec,{sampleSize:s}=At(r);n=8*s,n>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),ae(1),ae(i),ae(0),G(0),ae(e.info.numberOfChannels),ae(n),ae(0),ae(0),ae(e.info.sampleRate<2**16?e.info.sampleRate:0),ae(0)];else{const r=o?0:-2;a=[Array(6).fill(0),ae(1),ae(i),ae(0),G(0),ae(e.info.numberOfChannels),ae(Math.min(n,16)),Za(r),ae(0),ae(e.info.sampleRate<2**16?e.info.sampleRate:0),ae(0),o?[G(1),G(n/8),G(e.info.numberOfChannels*n/8)]:[G(0),G(0),G(0)],G(2)]}return ie(t,a,[Ph(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},en=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...Te(e),...Te(21),...sr(0),...G(0),...G(0)];if(t.info.decoderConfig.description){const a=$e(t.info.decoderConfig.description);i=[...i,...Te(5),...Ya(a.byteLength),...a]}return i=[...ae(1),...Te(0),...Te(4),...Ya(i.length),...i,...Te(6),...Te(1),...Te(2)],i=[...Te(3),...Ya(i.length),...i],ue("esds",0,0,i)},xt=t=>ie("wave",void 0,[Gd(t),Kd(t),ie("\0\0\0\0")]),Gd=t=>ie("frma",[pe(yr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Kd=t=>{const{littleEndian:e}=At(t.track.source._codec);return ie("enda",[ae(+e)])},Xd=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,n=0,o=0,r=new Uint8Array(0);const s=t.info.decoderConfig?.description;if(s){U(s.byteLength>=18);const l=$e(s),c=Su(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,n=c.outputGain,o=c.channelMappingFamily,c.channelMappingTable&&(r=c.channelMappingTable)}return ie("dOps",[Te(0),Te(e),ae(i),G(a),Za(n),Te(o),...r])},Zd=t=>{const e=t.info.decoderConfig?.description;U(e);const i=$e(e);return ue("dfLa",0,0,[...i.subarray(4)])},ct=t=>{const{littleEndian:e,sampleSize:i}=At(t.track.source._codec),a=+e;return ue("pcmC",0,0,[Te(a),Te(8*i)])},Qd=t=>{U(t.info.primingPacket);const e=Eu(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Ce(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),ie("dac3",[...i])},Yd=t=>{U(t.info.primingPacket);const e=Mu(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const r of e.substreams)i+=23,r.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),n=new Uint8Array(a),o=new Ce(n);o.writeBits(13,e.dataRate),o.writeBits(3,e.substreams.length-1);for(const r of e.substreams)o.writeBits(2,r.fscod),o.writeBits(5,r.bsid),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(3,r.bsmod),o.writeBits(3,r.acmod),o.writeBits(1,r.lfeon),o.writeBits(3,0),o.writeBits(4,r.numDepSub),r.numDepSub>0?o.writeBits(9,r.chanLoc):o.writeBits(1,0);return ie("dec3",[...n])},Jd=t=>{U(t.info.primingPacket);const e=$u(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ie("ddts",[...Vu(e)])},eh=(t,e)=>ie(t,[Array(6).fill(0),ae(1)],[Ih[e.track.source._codec](e)]),th=t=>ie("vttC",[...ot.encode(t.info.config.description)]),ih=t=>ue("stts",0,0,[G(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[G(e.sampleCount),G(e.sampleDelta)])]),ah=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return ue("stss",0,0,[G(e.length),e.map(([i])=>G(i+1))])},nh=t=>ue("stsc",0,0,[G(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[G(e.firstChunk),G(e.samplesPerChunk),G(1)])]),oh=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=At(t.track.source._codec);return ue("stsz",0,0,[G(e*t.info.numberOfChannels),G(t.samples.reduce((i,a)=>i+be(a.duration,t.timescale),0))])}return ue("stsz",0,0,[G(0),G(t.samples.length),t.samples.map(e=>G(e.size))])},rh=t=>t.finalizedChunks.length>0&&Xe(t.finalizedChunks).offset>=2**32?ue("co64",0,0,[G(t.finalizedChunks.length),t.finalizedChunks.map(e=>lt(e.offset))]):ue("stco",0,0,[G(t.finalizedChunks.length),t.finalizedChunks.map(e=>G(e.offset))]),sh=t=>ue("ctts",1,0,[G(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[G(e.sampleCount),gt(e.sampleCompositionTimeOffset)])]),lh=t=>{let e=1/0,i=-1/0,a=1/0,n=-1/0;U(t.compositionTimeOffsetTable.length>0),U(t.samples.length>0);for(let r=0;r<t.compositionTimeOffsetTable.length;r++){const s=t.compositionTimeOffsetTable[r];e=Math.min(e,s.sampleCompositionTimeOffset),i=Math.max(i,s.sampleCompositionTimeOffset)}for(let r=0;r<t.samples.length;r++){const s=t.samples[r];a=Math.min(a,be(s.timestamp,t.timescale)),n=Math.max(n,be(s.timestamp+s.duration,t.timescale))}const o=Math.max(-e,0);return n>=2**31?null:ue("cslg",0,0,[gt(o),gt(e),gt(i),gt(a),gt(n)])},ch=t=>ie("mvex",void 0,t.map(fh)),fh=t=>ue("trex",0,0,[G(t.track.id),G(1),G(0),G(0),G(0)]),pr=(t,e)=>ie("moof",void 0,[uh(t),...e.map(dh)]),uh=t=>ue("mfhd",0,0,[G(t)]),gr=t=>{let e=0,i=0;const a=0,n=0,o=t.type==="delta";return i|=+o,o?e|=1:e|=2,e<<24|i<<16|a<<8|n},dh=t=>ie("traf",void 0,[hh(t),mh(t),ph(t)]),hh=t=>{U(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:gr(i)};return ue("tfhd",0,e,[G(t.track.id),G(a.duration),G(a.size),G(a.flags)])},mh=t=>(U(t.currentChunk),ue("tfdt",1,0,[lt(be(t.currentChunk.startTimestamp,t.timescale))])),ph=t=>{U(t.currentChunk);const e=t.currentChunk.samples.map(h=>h.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(h=>h.size),a=t.currentChunk.samples.map(gr),n=t.currentChunk.samples.map(h=>be(h.timestamp-h.decodeTimestamp,t.timescale)),o=new Set(e),r=new Set(i),s=new Set(a),l=new Set(n),c=s.size===2&&a[0]!==a[1],f=o.size>1,d=r.size>1,p=!c&&s.size>1,u=l.size>1||[...l].some(h=>h!==0);let m=0;return m|=1,m|=4*+c,m|=256*+f,m|=512*+d,m|=1024*+p,m|=2048*+u,ue("trun",1,m,[G(t.currentChunk.samples.length),G(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?G(a[0]):[],t.currentChunk.samples.map((h,v)=>[f?G(e[v]):[],d?G(i[v]):[],p?G(a[v]):[],u?gt(n[v]):[]])])},gh=t=>ie("mfra",void 0,[...t.map(vh),bh()]),vh=t=>ue("tfra",1,0,[G(t.track.id),G(63),G(t.finalizedChunks.length),t.finalizedChunks.map(i=>[lt(be(i.samples[0].timestamp,t.timescale)),lt(i.moofOffset),G(i.trafIndex+1),G(1),G(1)])]),bh=()=>ue("mfro",0,0,[G(0)]),yh=()=>ie("vtte"),wh=(t,e,i,a,n)=>ie("vttc",void 0,[n!==null?ie("vsid",[gt(n)]):null,i!==null?ie("iden",[...ot.encode(i)]):null,e!==null?ie("ctim",[...ot.encode(kd(e))]):null,a!==null?ie("sttg",[...ot.encode(a)]):null,ie("payl",[...ot.encode(t)])]),kh=t=>ie("vtta",[...ot.encode(t)]),Th=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const n=xh(a);n&&e.push(n)}else if(i==="mdta"){const n=Sh(a);n&&e.push(n)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&_h(e,t.output._metadataTags);return e.length===0?null:ie("udta",void 0,e)},_h=(t,e)=>{for(const{key:i,value:a}of vo(e))switch(i){case"title":t.push(ft("©nam",a));break;case"description":t.push(ft("©des",a));break;case"artist":t.push(ft("©ART",a));break;case"album":t.push(ft("©alb",a));break;case"albumArtist":t.push(ft("albr",a));break;case"genre":t.push(ft("©gen",a));break;case"date":t.push(ft("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(ft("©cmt",a));break;case"lyrics":t.push(ft("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Mt(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(n=>n.type===i)||(typeof a=="string"?t.push(ft(i,a)):a instanceof Uint8Array&&t.push(ie(i,Array.from(a))))}},ft=(t,e)=>{const i=ot.encode(e);return ie(t,[ae(i.length),ae(wr("und")),Array.from(i)])},vr={"image/jpeg":13,"image/png":14,"image/bmp":27},br=(t,e)=>{const i=[];for(const{key:a,value:n}of vo(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:Ye(n)});break;case"description":i.push({key:e?"description":"©des",value:Ye(n)});break;case"artist":i.push({key:e?"artist":"©ART",value:Ye(n)});break;case"album":i.push({key:e?"album":"©alb",value:Ye(n)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Ye(n)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Ye(n)});break;case"genre":i.push({key:e?"genre":"©gen",value:Ye(n)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Ye(n)});break;case"date":i.push({key:e?"date":"©day",value:Ye(n.toISOString().slice(0,10))});break;case"images":for(const o of n)o.kind==="coverFront"&&i.push({key:"covr",value:ie("data",[G(vr[o.mimeType]??0),G(0),Array.from(o.data)])});break;case"trackNumber":if(e){const o=t.tracksTotal!==void 0?`${n}/${t.tracksTotal}`:n.toString();i.push({key:"track",value:Ye(o)})}else i.push({key:"trkn",value:ie("data",[G(0),G(0),ae(0),ae(n),ae(t.tracksTotal??0),ae(0)])});break;case"discNumber":e||i.push({key:"disc",value:ie("data",[G(0),G(0),ae(0),ae(n),ae(t.discsTotal??0),ae(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Mt(a)}if(t.raw)for(const a in t.raw){const n=t.raw[a];n==null||!e&&a.length!==4||i.some(o=>o.key===a)||(typeof n=="string"?i.push({key:a,value:Ye(n)}):n instanceof Uint8Array?i.push({key:a,value:ie("data",[G(0),G(0),Array.from(n)])}):n instanceof wo&&i.push({key:a,value:ie("data",[G(vr[n.mimeType]??0),G(0),Array.from(n.data)])}))}return i},xh=t=>{const e=br(t,!1);return e.length===0?null:ue("meta",0,0,void 0,[Ja(!1,"mdir","","appl"),ie("ilst",void 0,e.map(i=>ie(i.key,void 0,[i.value])))])},Sh=t=>{const e=br(t,!0);return e.length===0?null:ie("meta",void 0,[Ja(!1,"mdta",""),ue("keys",0,0,[G(e.length)],e.map(i=>ie("mdta",[...ot.encode(i.key)]))),ie("ilst",void 0,e.map((i,a)=>{const n=String.fromCharCode(...G(a+1));return ie(n,void 0,[i.value])}))])},Ye=t=>ie("data",[G(1),G(0),...ot.encode(t)]),Ch=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},Eh={avc:$d,hevc:Wd,vp8:mr,vp9:mr,av1:jd,prores:null},yr=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},Ph=(t,e)=>{switch(t){case"aac":return en;case"mp3":return en;case"opus":return Xd;case"vorbis":return en;case"flac":return Zd;case"ac3":return Qd;case"eac3":return Yd;case"dts":return Jd}if(e)switch(t){case"pcm-s24":return xt;case"pcm-s24be":return xt;case"pcm-s32":return xt;case"pcm-s32be":return xt;case"pcm-f32":return xt;case"pcm-f32be":return xt;case"pcm-f64":return xt;case"pcm-f64be":return xt}else switch(t){case"pcm-s16":return ct;case"pcm-s16be":return ct;case"pcm-s24":return ct;case"pcm-s24be":return ct;case"pcm-s32":return ct;case"pcm-s32be":return ct;case"pcm-f32":return ct;case"pcm-f32be":return ct;case"pcm-f64":return ct;case"pcm-f64be":return ct}return null},Mh={webvtt:"wvtt"},Ih={webvtt:th},wr=t=>{U(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class tn{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){U(!this.started),this.target._start(),this.started=!0}write(e){U(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return U(this.started&&!this.finalized),this.target._flush()}async finalize(){U(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let n=this.trackedWrites.byteLength;for(;n<a;)n*=2;if(n!==this.trackedWrites.byteLength){const o=new Uint8Array(n);o.set(this.trackedWrites,0),this.trackedWrites=o}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class vt extends Ua{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new Ah(this,e)}}const an=2**16,nn=2**32;class ga extends vt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(an,{maxByteLength:nn})}catch{this._buffer=new ArrayBuffer(an),this._supportsResize=!1}else this._buffer=new ArrayBuffer(an);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>nn)throw new Error(`ArrayBuffer exceeded maximum size of ${nn} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),n=new Uint8Array(a);n.set(this._bytes,0),this._buffer=a,this._bytes=n}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class Ah extends vt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class on{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Je=57600,Bh=2082844800,Rh=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},be=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class zh extends wd{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ga,this.auxWriter=new tn(this.auxTarget,!1),this.auxBoxWriter=new ha(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=fo(),this.creationTime=Math.floor(Date.now()/1e3)+Bh,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Er,this.isCmaf=i instanceof Cr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Cr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof ga),this.boxWriter=new ha(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ga?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),n=new tn(a,!0);n.start(),this.initWriter=n,this.initBoxWriter=new ha(n)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(U(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(_d({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:n,start:o}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(n,o)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(U(this.writer),U(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ma(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return Gu({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const n=this.trackDatas.find(u=>u.track===e);if(n)return n;Co(a,e.source._codec),U(a),U(a.decoderConfig);const o={...a.decoderConfig};U(o.codedWidth!==void 0),U(o.codedHeight!==void 0);let r=!1;if(e.source._codec==="avc"&&!o.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const u=uu(i.data);if(!u)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");o.description=du(u),r=!0}else if(e.source._codec==="hevc"&&!o.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const u=gu(i.data);if(!u)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");o.description=_u(u),r=!0}const s=Of(1/(e.metadata.frameRate??Je),1e6).den,l=o.displayAspectWidth,c=o.displayAspectHeight,f=l===void 0||c===void 0?{num:1,den:1}:bo({num:l*o.codedHeight,den:c*o.codedWidth}),d=o.codec==="ap4h"||o.codec==="ap4x",p={muxer:this,track:e,type:"video",info:{width:o.codedWidth,height:o.codedHeight,pixelAspectRatio:f,decoderConfig:o,requiresAnnexBTransformation:r,hasAlphaChannel:d},timescale:s,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(p),this.trackDatas.sort((u,m)=>u.track.id-m.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),p}getAudioTrackData(e,i,a){const n=this.trackDatas.find(l=>l.track===e);if(n)return n;Eo(a,e.source._codec),U(a),U(a.decoderConfig);const o={...a.decoderConfig};let r=!1;if(e.source._codec==="aac"&&!o.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=No(gi.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=ra[l.samplingFrequencyIndex],f=Da[l.channelConfiguration];if(c===void 0||f===void 0)throw new Error("Invalid ADTS frame header.");o.description=ko({objectType:l.objectType,sampleRate:c,numberOfChannels:f}),r=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const s={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:o,requiresPcmTransformation:!this.isFragmented&&Ze.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:r,primingPacket:i},timescale:o.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(s),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),s}getSubtitleTrackData(e,i){const a=this.trackDatas.find(o=>o.track===e);if(a)return a;ru(i),U(i),U(i.config);const n={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(n),this.trackDatas.sort((o,r)=>o.track.id-r.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),n}async addEncodedVideoPacket(e,i,a){const n=await this.mutex.acquire();try{const o=this.getVideoTrackData(e,i,a);let r=i.data;if(o.info.requiresAnnexBTransformation){const l=[...fi(r)].map(c=>r.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");r=fu(l,4)}this.validateTimestamp(o.track,i.timestamp,i.type==="key");const s=this.createSampleForTrack(o,r,i.timestamp,i.duration,i.type);await this.registerSample(o,s)}finally{n()}}async addEncodedAudioPacket(e,i,a){const n=await this.mutex.acquire();try{const o=this.getAudioTrackData(e,i,a);let r=i.data;if(o.info.requiresAdtsStripping){const f=No(gi.tempFromBytes(r));if(!f)throw new Error("Expected ADTS frame, didn't get one.");const d=f.crcCheck===null?Ku:Xu;r=r.subarray(d)}this.validateTimestamp(o.track,i.timestamp,i.type==="key");let s=i.timestamp,l=i.duration;if(o.info.requiresPcmTransformation){const d=At(o.info.decoderConfig.codec).sampleSize*o.info.numberOfChannels;if(l=r.byteLength/d/o.info.sampleRate,o.info.expectedNextPcmPacketTimestamp!==null){const p=s-o.info.expectedNextPcmPacketTimestamp;if(p<.01)s=o.info.expectedNextPcmPacketTimestamp;else{const u=await this.padWithSilence(o,o.info.expectedNextPcmPacketTimestamp,p);s=o.info.expectedNextPcmPacketTimestamp+u}}o.info.expectedNextPcmPacketTimestamp=s+l}const c=this.createSampleForTrack(o,r,s,l,i.type);await this.registerSample(o,c)}finally{n()}}async padWithSilence(e,i,a){const n=be(a,e.timescale);if(a=n/e.timescale,n>0){const{sampleSize:o,silentValue:r}=At(e.info.decoderConfig.codec),s=n*e.info.numberOfChannels,l=new Uint8Array(o*s).fill(r),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const n=await this.mutex.acquire();try{const o=this.getSubtitleTrackData(e,a);this.validateTimestamp(o.track,i.timestamp,!0),e.source._codec==="webvtt"&&(o.cueQueue.push(i),await this.processWebVTTCues(o,i.timestamp))}finally{n()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)U(c.timestamp<=i),U(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const n=[...a].sort((c,f)=>c-f),o=n[0],r=n[1]??o;if(i<r)break;if(e.lastCueEndTimestamp<o){this.auxWriter.seek(0);const c=yh();this.auxBoxWriter.writeBox(c);const f=this.auxTarget._getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,f,e.lastCueEndTimestamp,o-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=o}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const f=e.cueQueue[c];if(f.timestamp>=r)break;rr.lastIndex=0;const d=rr.test(f.text),p=f.timestamp+f.duration;let u=e.cueToSourceId.get(f);if(u===void 0&&r<p&&(u=e.nextSourceId++,e.cueToSourceId.set(f,u)),f.notes){const h=kh(f.notes);this.auxBoxWriter.writeBox(h)}const m=wh(f.text,d?o:null,f.identifier??null,f.settings??null,u??null);this.auxBoxWriter.writeBox(m),p===r&&e.cueQueue.splice(c--,1)}const s=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,s,o,r-o,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=r}}createSampleForTrack(e,i,a,n,o){return{timestamp:a,decodeTimestamp:a,duration:n,data:i,size:i.byteLength,type:o,timescaleUnitsToNextSample:be(n,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let n=0;for(let o=0;o<e.timestampProcessingQueue.length;o++){const r=e.timestampProcessingQueue[o],s=be(r.duration,e.timescale);n+=s}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:n,sampleDelta:1});else{const o=Xe(e.timeToSampleTable);o.sampleCount+=n}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(n=>n.timestamp).sort((n,o)=>n-o);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let n=0;n<e.timestampProcessingQueue.length;n++){const o=e.timestampProcessingQueue[n];o.decodeTimestamp=a[n];const r=be(o.timestamp-o.decodeTimestamp,e.timescale),s=be(o.duration,e.timescale);if(e.lastTimescaleUnits!==null){U(e.lastSample);const l=be(o.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(U(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let f=Xe(e.timeToSampleTable);if(U(f),f.sampleCount===1){f.sampleDelta=c;const p=e.timeToSampleTable[e.timeToSampleTable.length-2];p&&p.sampleDelta===c&&(p.sampleCount++,e.timeToSampleTable.pop(),f=p)}else f.sampleDelta!==c&&(f.sampleCount--,e.timeToSampleTable.push(f={sampleCount:1,sampleDelta:c}));f.sampleDelta===s?f.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:s});const d=Xe(e.compositionTimeOffsetTable);U(d),d.sampleCompositionTimeOffset===r?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:r})}}else e.lastTimescaleUnits=be(o.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:s}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:r}));e.lastSample=o}if(e.timestampProcessingQueue.length=0,U(e.lastSample),U(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){U(i.type==="key");const n=be(i.timestamp,e.timescale,!1),o=Math.round(n-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=o}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const n=e.track.metadata.maximumPacketCount;if(U(n!==void 0),e.samples.length>n)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${n}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const n=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const o=this.trackDatas.every(r=>{if(e===r)return i.type==="key";const s=r.sampleQueue[0];return s?s.type==="key":r.closed});n>=this.minimumFragmentDuration&&o&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=n>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),U(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(U(!this.isFragmented),U(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,n)=>a+be(n.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Xe(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)U(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(U(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const o of this.trackDatas){if(!e&&o.sampleQueue.length===0&&!o.closed)break e;o.sampleQueue.length>0&&o.sampleQueue[0].timestamp<a&&(i=o,a=o.sampleQueue[0].timestamp)}if(!i)break;const n=i.sampleQueue.shift();await this.addSampleToTrack(i,n)}}async finalizeFragment(e=!this.isCmaf){if(U(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const u=this.initBoxWriter??this.boxWriter;U(u),this.formatOptions.onMoov&&u.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const m=vi(this);if(u.writeBox(m),this.formatOptions.onMoov){const{data:h,start:v}=u.writer.stopTrackingWrites();this.formatOptions.onMoov(h,v)}if(this.isCmaf){U(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new ha(this.writer);const h=this.boxWriter.measureBox(dr()),v=this.boxWriter.measureBox(hr(this,0));this.segmentHeaderSize=h+v,this.writer.seek(this.segmentHeaderSize)}}U(this.writer),U(this.boxWriter);const i=this.trackDatas.filter(u=>u.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,n=pr(a,i),o=this.writer.getPos(),r=o+this.boxWriter.measureBox(n);let s=r+ja,l=1/0;for(let u=0;u<i.length;u++){const m=i[u];m.currentChunk.offset=s,m.currentChunk.moofOffset=o,m.currentChunk.trafIndex=u;for(const h of m.currentChunk.samples)s+=h.size;l=Math.min(l,m.currentChunk.startTimestamp)}const c=s-r,f=c>=2**32;if(f)for(const u of i)u.currentChunk.offset+=Lo-ja;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const d=pr(a,i);if(this.boxWriter.writeBox(d),this.formatOptions.onMoof){const{data:u,start:m}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(u,m,l)}U(this.writer.getPos()===r),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const p=ma(f);p.size=c,this.boxWriter.writeBox(p),this.writer.seek(r+(f?Lo:ja));for(const u of i)for(const m of u.currentChunk.samples)this.writer.write(m.data),m.data=null;if(this.formatOptions.onMdat){const{data:u,start:m}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(u,m)}for(const u of i)u.finalizedChunks.push(u.currentChunk),this.finalizedChunks.push(u.currentChunk),u.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){U(this.writer),U(this.boxWriter),this.ensureOneEnabledTrack();const e=vi(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;U(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ma(!0),this.boxWriter.writeBox(this.mdat);for(const n of this.trackDatas){for(const o of n.sampleQueue)await this.addSampleToTrack(n,o);n.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){U(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;U(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(n=>n.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(n=>n.type===e);if(i.length===0)continue;if(!i.some(n=>n.track.metadata.disposition?.default!==!1)){const n=i[0];n.track.metadata.disposition={...n.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){U(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const n=i.samples[a];n.timestamp-=i.startTimestampOffset,n.decodeTimestamp-=i.startTimestampOffset}if(U(this.writer),U(this.boxWriter),this.fastStart==="in-memory"){this.mdat=ma(!1);let i;for(let n=0;n<2;n++){const o=vi(this),r=this.boxWriter.measureBox(o);i=this.boxWriter.measureBox(this.mdat);let s=this.writer.getPos()+r+i;for(const l of this.finalizedChunks){l.offset=s;for(const{data:c}of l.samples)U(c),s+=c.byteLength,i+=c.byteLength}if(s<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=vi(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,o)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const n of this.finalizedChunks)for(const o of n.samples)U(o.data),this.writer.write(o.data),o.data=null;if(this.formatOptions.onMdat){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,o)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(dr()),this.boxWriter.writeBox(hr(this,i))}else{const i=this.writer.getPos(),a=gh(this.trackDatas);this.boxWriter.writeBox(a);const n=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(n)}else{U(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);U(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:o,start:r}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,r)}const n=vi(this);if(this.fastStart==="reserve"){U(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);const o=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(xd(o))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);if(this.formatOptions.onMoov){const{data:o,start:r}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,r)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Fh{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){U(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,n)=>a[n*e]:e===1&&i===4?this.channelMixer=(a,n,o)=>a[n*e]*+(o<2):e===1&&i===6?this.channelMixer=(a,n,o)=>a[n*e]*+(o===2):e===2&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return .5*(a[o]+a[o+1])}:e===2&&i===4?this.channelMixer=(a,n,o)=>a[n*e+o]*+(o<2):e===2&&i===6?this.channelMixer=(a,n,o)=>a[n*e+o]*+(o<2):e===4&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return .25*(a[o]+a[o+1]+a[o+2]+a[o+3])}:e===4&&i===2?this.channelMixer=(a,n,o)=>{const r=n*e;return .5*(a[r+o]+a[r+o+2])}:e===4&&i===6?this.channelMixer=(a,n,o)=>{const r=n*e;return o<2?a[r+o]:o===2||o===3?0:a[r+o-2]}:e===6&&i===1?this.channelMixer=(a,n)=>{const o=n*e;return Math.SQRT1_2*(a[o]+a[o+1])+a[o+2]+.5*(a[o+4]+a[o+5])}:e===6&&i===2?this.channelMixer=(a,n,o)=>{const r=n*e;return a[r+o]+Math.SQRT1_2*(a[r+2]+a[r+o+4])}:e===6&&i===4?this.channelMixer=(a,n,o)=>{const r=n*e;return o<2?a[r+o]+Math.SQRT1_2*a[r+2]:a[r+o+2]}:this.channelMixer=(a,n,o)=>o<e?a[n*e+o]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),U(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),n=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(n,{planeIndex:0,format:"f32"});const o=e.timestamp-this.startTime,r=o+e.duration,s=Math.floor((o-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(r*this.targetSampleRate);for(let c=s;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const f=c-this.bufferStartFrame;U(f<this.bufferSizeInFrames);const u=(c/this.targetSampleRate-o)*this.sourceSampleRate,m=Math.floor(u),h=Math.ceil(u),v=u-m;for(let y=0;y<this.targetNumberOfChannels;y++){let b=0,w=0;m>=0&&m<e.numberOfFrames&&(b=this.channelMixer(n,m,y)),h>=0&&h<e.numberOfFrames&&(w=this.channelMixer(n,h,y));const T=b+v*(w-b),_=f*this.targetNumberOfChannels+y;this.outputBuffer[_]+=T}this.maxWrittenFrame===null?this.maxWrittenFrame=f:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,f)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;U(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new He({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Oh=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Hh=(function(t){return function(e){function i(r){e.error=e.hasError?new t(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}var a,n=0;function o(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(o);if(a.dispose){var r=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(r).then(o,function(s){return i(s),o()})}else n|=1}catch(s){i(s)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class rn{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class kr extends rn{constructor(e){if(super(),this._connectedTrack=null,!mt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${mt.join(", ")}.`);this._codec=e}}const Tr=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Lh{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new po,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const n=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const o=this.encodingConfig,r=o.sizeChangeBehavior??"deny";let s=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(s=!0,r==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(o.transform?.width!==void 0||o.transform?.height!==void 0||o.transform?.rotate!==void 0||o.transform?.crop!==void 0||o.transform?.force===!0||s&&r!=="passThrough"){let d=o.transform?.width,p=o.transform?.height,u=o.transform?.fit??"fill";s&&r!=="passThrough"&&(U(this.outputWidth),U(this.outputHeight),U(r!=="deny"),d=this.outputWidth,p=this.outputHeight,u=r);const m=await e.transform({width:d,height:p,roundDimensionsTo:2,crop:o.transform?.crop,rotate:o.transform?.rotate,fit:u,alpha:o.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=m.displayWidth,this.outputHeight=m.displayHeight),i&&e.close(),e=m,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const f=o.transform?.frameRate;if(f!==void 0){const d=e.timestamp+e.duration,p=mo(e.timestamp,f);if(this.frameRateLastSample!==null)if(p<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=d;return}else await this.padFrameRate(p,a);e===n&&(e=e.clone(),i=!0),e.setTimestamp(p),e.setDuration(1/f),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=p,this.frameRateLastEndTimestamp=d}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let n;if(a.transform?.process){let o=a.transform.process(e);if(o instanceof Promise&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);const r=[];try{for(const s of o)s instanceof ze?r.push(s):typeof VideoFrame<"u"&&s instanceof VideoFrame?r.push(new ze(s)):r.push(new ze(s,{timestamp:e.timestamp,duration:e.duration}))}catch(s){for(const l of r)l!==e&&l.close();for(const l of o)(l instanceof ze&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw s}n=r}else n=[e];try{for(const o of n){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(o),this.encoderInitialized||await this.ensureEncoderPromise),U(this.encoderInitialized),this.closed)break;const r=this.encodingConfig.keyFrameInterval??2,s=Math.floor(o.timestamp/r),l={...this.defaultEncodeOptions,...o.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:r===0||s!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=s,this.encodingConfig.onEncodedSample?.(o),this.customEncoder){this.customEncoderQueueSize++;const f=o.clone(),d=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(f,c)).catch(p=>this.setError(p)).finally(()=>{this.customEncoderQueueSize--,f.close()});this.customEncoderQueueSize>=4&&await d}else{U(this.encoder);const f=o.toVideoFrame(),d=co(this.preciseTimings,f.timestamp,u=>u.microsecondTimestamp),p=d!==-1?this.preciseTimings[d]:null;if(p&&p.microsecondTimestamp===f.timestamp?(p.timestamp!==o.timestamp&&(p.timestampIsValid=!1),p.duration!==o.duration&&(p.durationIsValid=!1)):(this.preciseTimings.splice(d+1,0,{microsecondTimestamp:f.timestamp,timestamp:o.timestamp,duration:o.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!f.format&&!f.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(f,c)}finally{f.close()}}else{this.splitter||(this.splitter=new Nh);const{colorFrame:m,alphaFrame:h}=await this.splitter.split(f);this.alphaFrameQueue.push(h);try{this.encoder.encode(m,c)}finally{m.close()}}else try{this.encoder.encode(f,c)}finally{f.close()}this.encoder.encodeQueueSize>=4&&await new Promise(u=>this.encoder.addEventListener("dequeue",u,{once:!0}))}await this.lastMuxerPromise}}finally{for(const o of n)o!==e&&o.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;U(this.frameRateLastSample);const n=Math.round((e-this.frameRateLastTimestamp)*a);for(let o=1;o<n;o++){const r={stack:[],error:void 0,hasError:!1};try{const s=Oh(r,this.frameRateLastSample.clone(),!1);s.setTimestamp(this.frameRateLastTimestamp+o/a),s.setDuration(1/a),await this.processAndEncode(s,i)}catch(s){r.error=s,r.hasError=!0}finally{Hh(r)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=da(this.encodingConfig.quality,this.encodingConfig.bitrate);U(i!==void 0);const a=Yo({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let n=null,o;for(const s of a){const l=s.config;if(this.encodingConfig.onEncoderConfig?.(l),o=nr.find(f=>f.supports(this.encodingConfig.codec,l)),o){n=s;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){n=s;break}}catch{}}if(!n){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const s=a[0].config,l=a.map(({config:c,quantizer:f})=>f!==null?`quantizer ${f}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${s.codec}, ${l.join(" / ")}, ${s.width}x${s.height}, hardware acceleration: ${s.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const r=n.config;if(n.quantizer!==null&&(this.defaultEncodeOptions=ar(this.encodingConfig.codec,n.quantizer)),o)this.customEncoder=new o,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=r,this.customEncoder.onPacket=(s,l)=>{if(!(s instanceof st))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Tr(this.source._connectedTrack,s),this.encodingConfig.onEncodedPacket?.(s,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,s,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=s=>{this.setError(s)},await this.customEncoder.init();else{const s=[],l=[];let c=0,f=0;const d=(u,m,h)=>{const v={};if(m){const _=new Uint8Array(m.byteLength);m.copyTo(_),v.alpha=_}let y=st.fromEncodedChunk(u,v);const b=co(this.preciseTimings,u.timestamp,_=>_.microsecondTimestamp),w=b!==-1?this.preciseTimings[b]:null;let T=null;this.emittedEncoderPackets===0&&y.type==="delta"&&h?.decoderConfig&&(T=Cu(this.encodingConfig.codec,h.decoderConfig,y.data)),(w&&w.microsecondTimestamp===u.timestamp||T!==null)&&(y=y.clone({timestamp:w?.timestampIsValid?w.timestamp:void 0,duration:w?.durationIsValid?w.duration:void 0,type:T??void 0})),Tr(this.source._connectedTrack,y),this.encodingConfig.onEncodedPacket?.(y,h),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,y,h).catch(_=>{this.setError(_)}),this.emittedEncoderPackets++},p=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(u,m)=>{if(!this.alphaEncoder){d(u,null,m);return}const h=this.alphaFrameQueue.shift();U(h!==void 0),h?(this.alphaEncoder.encode(h,{...this.defaultEncodeOptions,keyFrame:u.type==="key"}),f++,h.close(),s.push({chunk:u,meta:m})):f===0?d(u,null,m):(l.push(c+f),s.push({chunk:u,meta:m}))},error:u=>{u.stack=p,this.setError(u)}}),this.encoder.configure(r),this.encodingConfig.alpha==="keep"){const u=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(m,h)=>{f--;const v=s.shift();for(U(v!==void 0),d(v.chunk,m,v.meta),c++;l.length>0&&l[0]===c;){l.shift();const y=s.shift();U(y!==void 0),d(y.chunk,null,y.meta)}},error:m=>{m.stack=u,this.setError(m)}}),this.alphaEncoder.configure(r)}}U(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=mo(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await qf(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let sn=null;class Nh{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!sn){const n=new Blob([`(${Uh.toString()})()`],{type:"application/javascript"});sn=URL.createObjectURL(n)}this.worker=new Worker(sn),this.worker.addEventListener("message",n=>{const o=n.data,r=this.pendingRequests.get(o.id);r&&(this.pendingRequests.delete(o.id),"error"in o?r.reject(new Error(o.error)):r.resolve({colorFrame:o.colorFrame,alphaFrame:o.alphaFrame}))}),this.worker.addEventListener("error",n=>{const o=new Error(n.message||"Color/alpha splitter worker error.");for(const r of this.pendingRequests.values())r.reject(o);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=fo();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Uh=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",o=>{const{id:r,sourceFrame:s}=o.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(s);self.postMessage({id:r,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:r,error:l.message})}finally{s.close()}})});const i=async o=>{const r=o.format;if(!r)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const s=o.allocationSize();if((!t||t.byteLength!==s)&&(t=new Uint8Array(s)),await o.copyTo(t),r==="RGBA"||r==="BGRA")return a(t,r,o);if(r==="I420A"||r==="I420AP10"||r==="I420AP12"||r==="I422A"||r==="I422AP10"||r==="I422AP12"||r==="I444A"||r==="I444AP10"||r==="I444AP12")return n(t,r,o);throw new Error(`CPU color/alpha splitting does not support format '${r}'.`)},a=(o,r,s)=>{const l=s.visibleRect?.width??s.codedWidth,c=s.visibleRect?.height??s.codedHeight,f=l*c,d=Math.ceil(l/2),p=Math.ceil(c/2),u=f+d*p*2,m=new Uint8Array(u);for(let b=0,w=3;b<f;b++,w+=4)m[b]=o[w];m.fill(128,f);const h=new VideoFrame(o,{format:r==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0}),v={format:"I420",codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[m.buffer]},y=new VideoFrame(m,v);return{colorFrame:h,alphaFrame:y}},n=(o,r,s)=>{const l=s.visibleRect?.width??s.codedWidth,c=s.visibleRect?.height??s.codedHeight,f=r.includes("P10"),d=r.includes("P12"),p=f||d?2:1;let u,m;r.startsWith("I420")?(u=Math.ceil(l/2),m=Math.ceil(c/2)):r.startsWith("I422")?(u=Math.ceil(l/2),m=c):(u=l,m=c);const h=l*c,v=u*m,y=h*p,b=v*p,w=h*p,T=y+b*2,_=r.replace("A",""),M=Math.ceil(l/2),E=Math.ceil(c/2),A=M*E,I=A*p,N=w+2*I,$=new Uint8Array(N),S=T;$.set(o.subarray(S,S+w),0);const R=w,k=f?512:d?2048:128;p===1?$.fill(k,R):new Uint16Array($.buffer,R,2*A).fill(k);const H=f?"I420P10":d?"I420P12":"I420",J=new VideoFrame(o.subarray(0,T),{format:_,codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0}),D={format:H,codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[$.buffer]},ne=new VideoFrame($,D);return{colorFrame:J,alphaFrame:ne}}};class Dh extends kr{constructor(e){ld(e),super(e.codec),this._encoder=new Lh(this,e)}add(e,i){if(!(e instanceof ze))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class _r extends rn{constructor(e){if(super(),this._connectedTrack=null,!It.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${It.join(", ")}.`);this._codec=e}}class qh{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new po,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new Fh({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async o=>{await this.processAndEncode(o,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&od(e.format)!==a.transform.sampleFormat){const n=sd(e,a.transform.sampleFormat);i&&e.close(),e=n,i=!0}if(a.transform?.process)try{let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);try{for(const o of n)if(!(o instanceof He))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const o of n)await this.encodeSample(o,!0)}finally{for(const o of n)o instanceof He&&o.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),U(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),n=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=n;else{const o=a-this.lastEndSampleIndex;if(o>=64){const r=new He({data:new Float32Array(o*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:o,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(r,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),n=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(o=>this.setError(o)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await n,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{U(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(n=>this.encoder.addEventListener("dequeue",n,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){U(this.outputSampleSize),U(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:n,sampleRate:o,timestamp:r}=e,s=2048,l=[];for(let p=0;p<n;p+=s){const u=Math.min(s,e.numberOfFrames-p),m=u*a*this.outputSampleSize,h=new ArrayBuffer(m),v=new DataView(h);l.push({frameCount:u,view:v})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),f=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let p=0;p<a;p++){e.copyTo(f,{planeIndex:p,format:"f32-planar"});for(let u=0;u<l.length;u++){const{frameCount:m,view:h}=l[u];for(let v=0;v<m;v++)this.writeOutputValue(h,(v*a+p)*this.outputSampleSize,f[u*s+v])}}i&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:o}};for(let p=0;p<l.length;p++){const{frameCount:u,view:m}=l[p],h=m.buffer,v=p*s,y=new st(new Uint8Array(h),"key",r+v/o,u/o);this.encodingConfig.onEncodedPacket?.(y,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,y,d)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,n=da(this.encodingConfig.quality,this.encodingConfig.bitrate),o=er({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:n});this.encodingConfig.onEncoderConfig?.(o);const r=or.find(s=>s.supports(this.encodingConfig.codec,o));if(r)this.customEncoder=new r,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=o,this.customEncoder.onPacket=(s,l)=>{if(!(s instanceof st))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(s,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,s,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=s=>{this.setError(s)},await this.customEncoder.init();else if(Ze.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let s;try{s=(await AudioEncoder.isConfigSupported(o)).supported??!1}catch{s=!1}if(!s)throw new Error(`This specific encoder configuration (${o.codec}, ${o.bitrate} bps, ${o.numberOfChannels} channels, ${o.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,f)=>{if(this.encodingConfig.codec==="aac"&&f?.decoderConfig){let p=!1;if(!f.decoderConfig.description||f.decoderConfig.description.byteLength<2?p=!0:p=Gf($e(f.decoderConfig.description)).objectType===0,p){const u=Number(Xe(o.codec.split(".")));f.decoderConfig.description=ko({objectType:u,numberOfChannels:f.decoderConfig.numberOfChannels,sampleRate:f.decoderConfig.sampleRate})}}let d=st.fromEncodedChunk(c);d=d.clone({timestamp:ho(d.timestamp,o.sampleRate),duration:c.duration!=null?ho(d.duration,o.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(d,f),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,d,f).catch(p=>{this.setError(p)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(o)}U(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:n}=At(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(o,r,s)=>o.setUint8(r,Me((s+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(o,r,s)=>{o.setInt8(r,Me(Math.round(s*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(o,r,s)=>{const l=Me(Math.floor(s*32767),-32768,32767);o.setUint8(r,gd(l))}:i==="alaw"?this.writeOutputValue=(o,r,s)=>{const l=Me(Math.floor(s*32767),-32768,32767);o.setUint8(r,vd(l))}:U(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(o,r,s)=>o.setUint16(r,Me((s+1)*32767.5,0,65535),n):i==="signed"?this.writeOutputValue=(o,r,s)=>o.setInt16(r,Me(Math.round(s*32767),-32768,32767),n):U(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(o,r,s)=>za(o,r,Me((s+1)*83886075e-1,0,16777215),n):i==="signed"?this.writeOutputValue=(o,r,s)=>If(o,r,Me(Math.round(s*8388607),-8388608,8388607),n):U(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(o,r,s)=>o.setUint32(r,Me((s+1)*21474836475e-1,0,4294967295),n):i==="signed"?this.writeOutputValue=(o,r,s)=>o.setInt32(r,Me(Math.round(s*2147483647),-2147483648,2147483647),n):i==="float"?this.writeOutputValue=(o,r,s)=>o.setFloat32(r,s,n):U(!1);break;case 8:i==="float"?this.writeOutputValue=(o,r,s)=>o.setFloat64(r,s,n):U(!1);break;default:Mt(a),U(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class $h extends _r{constructor(e){cd(e),super(e.codec),this._accumulatedTime=0,this._encoder=new qh(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=He._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Wh extends rn{constructor(e){if(super(),this._connectedTrack=null,!li.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${li.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class xr{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>mt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>It.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>li.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class ln extends xr{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new zh(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Sr extends ln{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...mt,...qa,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...li]}_codecUnsupportedHint(e){return new Er().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Cr extends ln{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...mt,...qa,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...li]}}class Er extends ln{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...mt,...It]}_codecUnsupportedHint(e){return new Sr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Pr=["video","audio","subtitle"];class bi{constructor(e,i,a,n,o){this.id=e,this.output=i,this.type=a,this.source=n,this.metadata=o}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof bi))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=yo(this.metadata.group),a=yo(e.metadata.group);for(const n of i)if(this.type!==e.type&&a.some(s=>n===s)||a.some(s=>n._pairedGroups.has(s)))return!0;return!1}}class jh extends bi{constructor(e,i,a,n){super(e,i,"video",a,n)}}class Vh extends bi{constructor(e,i,a,n){super(e,i,"audio",a,n)}}class Gh extends bi{constructor(e,i,a,n){super(e,i,"subtitle",a,n)}}class yi{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof yi))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const cn=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Ff(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Vf(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof yi)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof yi))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Kh extends Ua{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new yi,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new lo,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof xr))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof vt||e.target instanceof on))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof vt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof vt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof vt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){U(this._target instanceof on);const i=this._target.getTarget(e),a=n=>{if(!(n instanceof vt))throw new TypeError("getTarget must return a Target.");return n};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){U(this._target instanceof on);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(U(this._initTarget!==null),this._initTarget instanceof vt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof vt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=n=>(this.state==="canceled"?n._close():this._rememberTarget(n),this._emit("target",{target:n,request:e,isRoot:!0}),this._rootTarget=n,n);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new tn(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof kr))throw new TypeError("source must be a VideoSource.");if(cn(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Co({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof st))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new jh(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof _r))throw new TypeError("source must be an AudioSource.");if(cn(i),i.decoderConfig!==void 0&&Eo({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof st))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Vh(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof Wh))throw new TypeError("source must be a SubtitleSource.");cn(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Gh(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(jf(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((r,s)=>r+(s.type===e.type?1:0),0),n=i[e.type].max;if(a===n)throw new Error(n===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${n} ${e.type} track${n===1?"":"s"}.`);const o=i.total.max;if(this.tracks.length===o)throw new Error(`${this.format._name} does not support more than ${o} tracks${o===1?"":"s"} in total.`);if(e.isVideoTrack()){const r=this.format.getSupportedVideoCodecs();if(r.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!r.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${r.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const r=this.format.getSupportedAudioCodecs();if(r.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!r.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${r.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const r=this.format.getSupportedSubtitleCodecs();if(r.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!r.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${r.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of Pr){const n=this.tracks.reduce((r,s)=>r+(s.type===a?1:0),0),o=e[a].min;if(n<o)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of Pr){const n=this.tracks.reduce((r,s)=>r+(s.type===a?1:0),0),o=e[a].min;if(n<o)throw new Error(o===e[a].max?`${this.format._name} requires exactly ${o} ${a} track${o===1?"":"s"}.`:`${this.format._name} requires at least ${o} ${a} track${o===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ke._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const n=this.tracks.map(o=>o.source._start());await Promise.all(n)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ke._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ke._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ke._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Xh={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Zh=new Set(["window","buddy","dancer"]);function Mr(t){return!Zh.has(t.typeId)}const Qh=new Set(["bitmap","video","audio","pcm","beats","bpm","objectUrl","frozenFrame"]);function Yh(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!Qh.has(i))return a}));return JSON.stringify(e,null,2)}function Jh(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>em(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=Xh[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Mr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(Mr)}))}:i.data})),e}function em(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,objectUrl:null,frozenFrame:null}}function tm(t,e){const i=new Blob([e],{type:"application/json"});Ut(t,i)}function Ut(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const fn=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function Ir(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:et(t*a),height:et(e*a)}}function im(t,e){const i=t/Math.max(e,1);let a="16:9",n=1/0;for(const o of fn){const r=Math.abs(i-o.rw/o.rh);r<n&&(n=r,a=o.id)}return a}function am(t,e,i=1280){if(t<2||e<2)return Ir(16,9,i);const a=Math.max(t,e),n=i/a;return{width:et(t*n),height:et(e*n)}}function nm(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}const om=960,rm=1920;function un(t,e=!1){const i=e?om:rm;return yn(t.exportSettings.width,t.exportSettings.height,i,i)}async function sm(t,e,i){const{width:a,height:n,format:o,quality:r,filename:s}=e.exportSettings,l=o==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,et(a),et(n),l,r);Ut(`${s}.${o==="jpg"?"jpg":"png"}`,c)}async function lm(t,e,i){const{fps:a,duration:n,filename:o,quality:r}=e.exportSettings,{width:s,height:l}=un(e,!1),c=Math.max(1,Math.round(n*a)),f=new Cf,d=f.folder(o)??f,p=document.createElement("canvas");for(let m=0;m<c;m++){const h=m/a;i?.(m,c),t.paintFrame(e,h,s,l,p);const v=await mm(p,"image/png",r);d.file(`${o}_${String(m).padStart(5,"0")}.png`,await v.arrayBuffer()),await dn()}const u=await f.generateAsync({type:"blob"});Ut(`${o}_sequence.zip`,u)}async function Ar(t,e,i,a=!1){const n=await Br(t,e,dm(),i,a);Ut(`${e.exportSettings.filename}.webm`,n)}async function cm(t,e,i,a=!1){try{return await fm(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(n){const o=hm();if(o){const s=await Br(t,e,o,i,a);return Ut(`${e.exportSettings.filename}.mp4`,s),"mp4 clip saved"}return await Ar(t,e,i,a),`MP4 not available (${n instanceof Error?n.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function fm(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),o=Math.min(32,Math.max(1,e.exportSettings.duration||4)),{width:r,height:s}=un(e,a),l=new Fe({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),c=new Sr({fastStart:"in-memory"}),d=await md(["avc","hevc"].filter(w=>c.getSupportedVideoCodecs().includes(w)),{width:r,height:s,quality:l});if(!d)throw new Error("this browser cannot encode H.264");const p=new ga,u=new Kh({format:c,target:p}),m=new Dh({codec:d,quality:l,keyFrameInterval:1});u.addVideoTrack(m,{frameRate:n});const h=await um(u,c,e,o);t.resetTemporal();const v=document.createElement("canvas");await u.start();try{h&&await h.audioSource.add(h.buffer);const w=Math.max(1,Math.round(o*n)),T=1/n,_=e.exportSettings.loopClose!==!1;let M=null;for(let E=0;E<w;E++){const A=Ma(E/n,o,e.playback.mode,1,!0);i?.(E,w),t.paintFrame(e,A,r,s,v),E===0&&_?M=zr(v):Rr(v,M,E,w,_);const I=new ze(v,{timestamp:E*T,duration:T});await m.add(I,{keyFrame:E%n===0}),I.close(),await dn()}await u.finalize()}catch(w){try{await u.cancel()}catch{}throw w}const y=p.buffer;if(!y||y.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=y.slice(0);return Ut(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"})),!!h}async function um(t,e,i,a){const n=await A0(Zi(i));if(!n||n.length<32||n.duration<=0)return null;const o=i.exportSettings.loopClose!==!1;let r;try{r=I0(n,a,o)}catch{return null}const s=Math.min(2,Math.max(1,r.numberOfChannels)),l=r.sampleRate>=46e3?48e3:44100,c=e.getSupportedAudioCodecs(),f=["aac","mp3","opus"].filter(u=>c.includes(u)),d=await pd(f.length?f:c,{numberOfChannels:s,sampleRate:l});if(!d)return null;const p=new $h({codec:d,quality:ud,transform:{numberOfChannels:s,sampleRate:l}});return t.addAudioTrack(p),{audioSource:p,buffer:r}}async function Br(t,e,i,a,n=!1){const o=Math.min(24,Math.max(12,e.exportSettings.fps||24)),r=Math.min(32,Math.max(1,e.exportSettings.duration||4)),{width:s,height:l}=un(e,n),c=document.createElement("canvas");c.width=s,c.height=l;const f=c.getContext("2d");if(!f)throw new Error("No 2d context");const d=c.captureStream(0),p=d.getVideoTracks()[0],u=new MediaRecorder(d,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),m=[];u.ondataavailable=w=>{w.data.size&&m.push(w.data)},t.resetTemporal(),u.start(200);const h=Math.max(1,Math.round(r*o)),v=document.createElement("canvas"),y=e.exportSettings.loopClose!==!1;let b=null;for(let w=0;w<h;w++){const T=Ma(w/o,r,e.playback.mode,1,!0);a?.(w,h),t.paintFrame(e,T,s,l,v),w===0&&y?b=zr(v):Rr(v,b,w,h,y),f.drawImage(v,0,0,s,l),p.requestFrame?.(),await dn()}if(await new Promise(w=>{u.onstop=()=>w(),u.stop()}),d.getTracks().forEach(w=>w.stop()),!m.length)throw new Error("recorder produced no data");return new Blob(m,{type:i})}function dm(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function hm(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Rr(t,e,i,a,n){if(!n||!e||i===0)return;const o=nm(i,a);if(o<=0)return;const r=t.getContext("2d");r&&(r.save(),r.globalAlpha=o,r.drawImage(e,0,0,t.width,t.height),r.restore())}function zr(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function dn(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function mm(t,e,i){return new Promise((a,n)=>{t.toBlob(o=>{o?a(o):n(new Error("frame capture failed"))},e,i)})}async function pm(t,e,i,a,n=!1){const o=e.exportSettings.format;return o==="mp4"?cm(t,e,a,n):o==="webm"?Ar(t,e,a,n):o==="sequence"?lm(t,e,a):sm(t,e,i)}const gm=768,vm="sana",Fr=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function bm(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),n=gm/Math.max(i,a);return{width:et(i*n,256),height:et(a*n,256)}}function ym(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,n=i>>8&255,o=i&255;let r=Fr[0],s=1e9;for(const l of Fr){const c=(a-l.r)**2+(n-l.g)**2+(o-l.b)**2;c<s&&(s=c,r=l)}return r.name}function wm(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",n="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${n}`;const o=e.map(ym).filter((r,s,l)=>l.indexOf(r)===s).slice(0,4);return`${a}, palette of ${o.join(", ")}, ${n}`}function km(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function Tm(t,e,i,a=4){const n=[];for(let o=0;o<3;o++)for(let r=0;r<3;r++){const s=Math.min(e-1,Math.floor((r+.5)/3*e)),c=(Math.min(i-1,Math.floor((o+.5)/3*i))*e+s)*4,f=t[c],d=t[c+1],p=t[c+2],u=km(f,d,p);n.some(h=>(h.r-f)**2+(h.g-d)**2+(h.b-p)**2<1400)||n.push({hex:u,r:f,g:d,b:p})}return n.slice(0,a).map(o=>o.hex)}function _m(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return Tm(a.data,e.width,e.height)}function xm(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function Sm(t,e,i,a,n=vm){const o=t.length>400?t.slice(0,400):t,r=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(n)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(o)}?${r}`}async function Cm(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const n=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!n.ok)throw n.status===429||n.status>=500?new Error(`busy:${n.status}`):new Error(`Generation failed (${n.status}). Try a shorter prompt.`);const o=await n.arrayBuffer(),r=new Uint8Array(o),s=n.headers.get("content-type")||"";if(!xm(r,s))throw new Error("Generation returned no image. Try again.");const l=s.startsWith("image/")?s.split(";")[0]:"image/jpeg";return new Blob([o],{type:l})}catch(n){throw n instanceof Error&&n.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):n}finally{clearTimeout(a)}}async function Em(t){const{width:e,height:i}=bm(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let n=null;for(let r=0;r<2;r++){t.onStatus?.(r===0?"generating new image…":"still working, trying once more…");try{return await Cm(Sm(a,t.seed+r*7919,e,i),r===0?22e3:3e4)}catch(s){n=s instanceof Error?s:new Error(String(s))}}const o=n?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":n?.message;throw new Error(o||"Generation failed. Try a shorter prompt.")}function xe(t){const e=P.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function wi(t){if(!t)return;const e=P.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Le(t,e,i=!0){P.setProject(a=>({...a,layers:a.layers.map(n=>n.id===t?e(n):n)}),i)}function St(t,e=!0){P.setProject(i=>{const a=e?i.layers.map(n=>n.id===P.state.ui.selectedLayerId?{...n,sourceId:t.id}:n):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),P.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function Pm(t){const e=P.project.sources.filter(r=>r.kind==="audio");for(const r of e)ro(r);if(P.setProject(r=>{const s=r.sources.filter(f=>f.kind!=="audio"),l=r.layers.map(f=>e.some(d=>d.id===f.sourceId)?{...f,sourceId:s.find(d=>d.kind!=="audio")?.id??null}:f),c=Math.max(r.duration,t.duration||0);return{...r,sources:[...s,t],layers:l,duration:c,playback:{...r.playback,playing:!0,time:0}}}),Yi(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",n=t.beats?.length?`${t.beats.length} hits`:"",o=[i,a,n].filter(Boolean).join(" · ");P.patchUi({selectedSourceId:t.id,status:o?`beat-sync · ${t.name} · ${o}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function va(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&P.patchUi({status:`reading ${i.name}…`});const n=await vf(i);if(n.kind==="audio"){Pm(n);continue}if(e){const o=P.state.ui.selectedSourceId;P.setProject(r=>({...r,sources:r.sources.map(s=>s.id===o?{...n,id:s.id}:s)})),P.patchUi({status:`replaced ${i.name}`})}else St(n,!0)}catch(a){P.patchUi({status:a instanceof Error?a.message:"import failed"})}}function Mm(){P.setProject(e=>{const i=e.sources.find(n=>n.kind!=="audio")?.id??null,a=Xn(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=P.project.layers.at(-1);P.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function Im(t){P.setProject(e=>{const i=e.layers.find(r=>r.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Re("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(r=>({...r,id:Re("fx")}));const n=e.layers.findIndex(r=>r.id===t),o=[...e.layers];return o.splice(n+1,0,a),{...e,layers:o}})}function Am(t){P.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function hn(t){const e=xe(P.project);if(!e)return;const i=Kn(t);Le(e.id,a=>({...a,effects:[...a.effects,i]})),P.patchUi({selectedEffectId:i.id})}function Bm(t,e){Le(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function Or(t,e,i){Le(t,a=>{const n=a.effects.findIndex(l=>l.id===e),o=n+i;if(n<0||o<0||o>=a.effects.length)return a;const r=[...a.effects],[s]=r.splice(n,1);return r.splice(o,0,s),{...a,effects:r}})}function Rm(t,e){Le(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function ki(t,e,i,a,n=!0){Le(t,o=>({...o,effects:o.effects.map(r=>r.id===e?{...r,params:{...r.params,[i]:a}}:r)}),n)}function Dt(t,e=!1){const i=P.state.ui;(t==="all"||t==="selected")&&P.setProject(n=>({...n,seed:n.seed+1+(Date.now()&255)>>>0}),!1),P.setProject(n=>{let r=jn(n,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&i.includeCritters&&(r=Wn(r)),t==="all"&&i.includeIdol&&(r=Vc(r)),r});const a=P.project.layers[0]?.effects.map(n=>n.typeId).join(" · ");P.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${P.project.seed}`})}function zm(){const t=xe(P.project);if(!t)return;const e=t.effects.find(o=>o.typeId==="critters"),i=1+(P.project.seed+Date.now())%9998;if(e){ki(t.id,e.id,"seed",i),P.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}hn("critters");const a=xe(P.project),n=wi(a);a&&n?.typeId==="critters"&&ki(a.id,n.id,"seed",i),P.patchUi({status:"stamped floaters"})}function Fm(){const t=xe(P.project);if(!t)return;const e=t.effects.find(o=>o.typeId==="dancer"),i=1+(P.project.seed+Date.now()+17)%9998;if(e){ki(t.id,e.id,"seed",i),P.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}hn("dancer");const a=xe(P.project),n=wi(a);a&&n?.typeId==="dancer"&&ki(a.id,n.id,"seed",i),P.patchUi({status:"stamped idol"})}function Om(){P.setProject(t=>Xc({...t,seed:t.seed+1+(Date.now()&255)>>>0})),P.patchUi({status:"new floater and idol seeds"})}async function Hm(t){const e=P.project,{width:i,height:a}=yn(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const n=await t.capture(e,e.playback.time,i,a,"image/png",.92),o=await no(n,`print_${Date.now()}.png`);St(o,!0),P.patchUi({status:"printed the live frame as a new still"})}catch(n){P.patchUi({status:n instanceof Error?n.message:"print failed"})}}function Hr(t){P.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Lr(){tm(`${P.project.name||"phosphene"}.phos.json`,Yh(P.project)),P.patchUi({status:"project downloaded"})}async function Lm(t){const e=await t.text(),i=Jh(e);P.replace(i),P.patchUi({status:"project loaded — re-drop media if needed"})}function Nm(){const t=prompt("Preset name",`look ${P.project.presets.length+1}`);if(!t)return;const e=Ea(P.project,t);P.setProject(i=>({...i,presets:[...i.presets,e]}))}function mn(t){const e=P.project.presets.find(i=>i.id===t);e&&(P.setProject(i=>Nc(i,e)),P.patchUi({status:`preset ${e.name}`}))}function Um(){const t=Uc(P.project.presets,P.project.seed+Date.now());if(!t){P.patchUi({status:"no presets saved"});return}mn(t.id)}function Dm(t){const e=P.project.presets.find(i=>i.id===t);e&&P.setProject(i=>({...i,presets:[...i.presets,Dc(e)]}))}function qm(t){P.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Nr(){const t=P.state.ui,e=xe(P.project),i=wi(e),a=t.selectedParam?.paramId;if(!e||!i||!a){P.patchUi({status:"select a numeric parameter first"});return}const n=i.params[a];if(typeof n!="number"){P.patchUi({status:"keyframes are numeric"});return}const o={id:Re("kf"),time:P.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:n,easing:"smooth"};P.setProject(r=>({...r,keyframes:[...r.keyframes,o]})),P.patchUi({status:`key ${a} @ ${o.time.toFixed(2)}s`})}function $m(){P.setProject(t=>({...t,keyframes:[]}))}async function Wm(){const t=P.project.sources.find(i=>i.id===P.state.ui.selectedSourceId);if(!t)return;const e=await wf(t);e&&St(e,!0)}function Ur(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of P.project.sources)ro(e);P.replace(Zn()),P.patchUi({status:"new piece",prompt:"",generating:!1})}}async function jm(){if(P.state.ui.generating)return;const t=P.state.ui.prompt.trim();if(!t){P.patchUi({status:"type a prompt first"});return}P.patchUi({generating:!0,status:"generating new image…"});try{const e=P.project.sources.find(c=>c.id===P.state.ui.selectedSourceId),i=P.state.ui.useSourceForGen;let a=[];const n=e?.frozenFrame||e?.bitmap||e?.video||null;i&&n&&(a=_m(n));const o=wm(t,a,i&&a.length>0),r=P.project.seed+Date.now()>>>0,s=await Em({prompt:o,seed:r,width:P.project.exportSettings.width,height:P.project.exportSettings.height,onStatus:c=>P.patchUi({generating:!0,status:c},!1)}),l=await no(s,`gen_${r}.jpg`);St(l,!0),P.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){P.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let ba=!1,Ti=null;function Vm(t,e){Ti=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny acid" data-act="rand-all">Rand all</button>
      <button class="btn tiny hot" data-act="rand-wacky" title="A new kit, ground color, and camera move">Rand wacky</button>
      <button class="btn tiny ${P.project.cutEdit?.enabled?"acid":""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tide / rings / loom / petal / flock / wheel / silk are looping patterns. Music moves stay on a smooth path and punch glow on the beat — not the travel. Drum / illusion moves (pong, fall, snap, step, moire, poly, grid, zip, liss, ghost) lock to the tempo grid like a drum pattern: bounce, zoetrope steps, counter-spin, 3-against-4, afterimages. Drop an MP3 and the stamps hit with the drums without jittering off their path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Rolls stay small and slower now — no giant stamps, no frantic bounce/flip/flash.</li>
          <li><strong>Cut edit</strong> is the other randomizer. It listens to the MP3 and cuts on the beat through music-reactive looks. Some shots hold a bar or two. Some are two quick hits that settle. It should feel edited, not shuffled.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Wash</strong> taps a kit color without rolling a new move. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is loaded and the clip keeps the music (aligned from the start of the clip). Stills and PNG sequences stay silent. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Km(t),P.subscribe(()=>{ba||pn(t)}),pn(t)}async function Gm(t=!1){if(Ti&&!P.state.ui.exporting){P.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),P.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await pm(Ti,P.project,P.project.playback.time,(i,a)=>{P.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);P.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){P.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Km(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,n=i.dataset.id;if(a==="save"&&Lr(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Ur(),a==="imagine"&&jm(),a==="seed-"&&Hr(-1),a==="seed+"&&Hr(1),a==="rand-all"&&Dt("all"),a==="rand-wacky"&&Dt("all",!0),a==="cut-edit"){const o=!P.project.cutEdit?.enabled;P.setProject(r=>({...r,cutEdit:{enabled:o,seed:(r.cutEdit?.seed??r.seed)+1+(Date.now()&255)>>>0}})),P.patchUi({status:o?P.project.sources.some(r=>r.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&Om(),a==="reprint"&&Ti&&Hm(Ti),a==="rand-sel"&&Dt("selected"),a==="rand-param"){const o=i.dataset.paramId,r=xe(P.project),s=wi(r);o&&r&&s&&P.patchUi({selectedParam:{layerId:r.id,effectId:s.id,paramId:o}},!1),Dt("param")}if(a==="help"&&P.patchUi({helpOpen:!P.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&Wm(),a==="gen"){const o=i.dataset.kind??"plasma",r=ya(),s=i.dataset.kit??(Ie(o)?zt(r?.collageKit):void 0),l=i.dataset.move??(Ie(o)?xn(r?.collageMove):void 0),c=!s||!r?.collageKit||s===r.collageKit,f=ti(o,s,l,tp(r,c));St(f,!0),P.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}${f.collageKitB?` · ${f.collageKitB}`:""}`:f.collageKit?`place · ${o} · ${f.collageKit}`:o==="critters"?"floaters on this layer":`place · ${o}`})}if(a==="mash"){const o=i.dataset.kit??"love",r=ya();if(r){const s=r.collageKitB===o||r.collageKit===o?void 0:o;me(l=>ip({...l,collageKitB:s}),s?`mash · ${r.collageKit??"kit"} · ${s}`:"mash off")}else{const s=ti("wallpaper","sailor","rush",{kitB:o});St(s,!0),P.patchUi({status:`mash · sailor · ${o}`})}}if(a==="wash"){const o=i.dataset.hex;o&&(me(r=>({...r,colorA:o}),`wash · ${o}`)||(St(ti("wallpaper","sailor","rush",{wash:o}),!0),P.patchUi({status:`wash · ${o}`})))}if(a==="night"){const r=!ya()?.collageNight;me(s=>({...s,collageNight:r}),r?"night wash":"day wash")||(St(ti("wallpaper","sailor","rush",{night:!0}),!0),P.patchUi({status:"night wash"}))}if(a==="stamp-critters"&&zm(),a==="stamp-idol"&&Fm(),a==="add-layer"&&Mm(),a==="dup-layer"&&n&&Im(n),a==="del-layer"&&n&&Am(n),a==="sel-layer"&&n&&P.patchUi({selectedLayerId:n,selectedEffectId:P.project.layers.find(o=>o.id===n)?.effects[0]?.id??null}),a==="sel-fx"&&n&&P.patchUi({selectedEffectId:n}),a==="sel-src"&&n&&P.patchUi({selectedSourceId:n}),a==="bypass"&&n){const o=xe(P.project);o&&Rm(o.id,n)}if(a==="fx-up"&&n){const o=xe(P.project);o&&Or(o.id,n,-1)}if(a==="fx-dn"&&n){const o=xe(P.project);o&&Or(o.id,n,1)}if(a==="fx-del"&&n){const o=xe(P.project);o&&Bm(o.id,n)}if(a==="key"&&Nr(),a==="key-clear"&&$m(),a==="pst-save"&&Nm(),a==="pst-rand"&&Um(),a==="pst-load"&&n&&mn(n),a==="pst-dup"&&n&&Dm(n),a==="pst-del"&&n&&qm(n),a==="export"&&Gm(),a==="clip"){const o=Math.max(1,Number(i.dataset.secs||4));P.setProject(r=>({...r,duration:Math.max(r.duration,o),exportSettings:{...r.exportSettings,duration:o,format:"mp4",fps:24,bitrate:Math.min(r.exportSettings.bitrate,8)}})),P.patchUi({status:`${o}s clip ready — hit Export`})}if(a==="exp-aspect"&&n){const o=fn.find(r=>r.id===n);if(o){const r=Ir(o.rw,o.rh,1280);P.setProject(s=>({...s,exportSettings:{...s.exportSettings,width:r.width,height:r.height}}))}}if(a==="exp-aspect-src"){const o=P.project,r=xe(o),s=o.sources.find(f=>f.id===(r?.sourceId??o.sources[0]?.id)),l=s?.kind==="audio"?o.sources.find(f=>f.kind!=="audio"):s,c=am(l?.width??1280,l?.height??720,1280);P.setProject(f=>({...f,exportSettings:{...f.exportSettings,width:c.width,height:c.height}}))}if(a==="play"&&(Yi(),P.setProject(o=>({...o,playback:{...o.playback,playing:!o.playback.playing}}))),a==="use-src"&&n){if(P.project.sources.find(s=>s.id===n)?.kind==="audio")return;const r=xe(P.project);r&&Le(r.id,s=>({...s,sourceId:n}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(Lm(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(va(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(va(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(va(i.files,!1),i.value=""),i.id==="quality"&&P.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&hn(i.value),i.value=""),i.id==="blend"){const a=xe(P.project);a&&Le(a.id,n=>({...n,blendMode:i.value}))}if(i.id==="mask-type"){const a=xe(P.project);a&&Le(a.id,n=>({...n,mask:{...n.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&mn(i.value),i.id==="exp-format"&&P.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&P.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&P.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&P.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=P.project;if(i.id==="gen-prompt"&&P.patchUi({prompt:i.value},!1),i.id==="gen-src"&&P.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&P.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&P.patchUi({includeIdol:i.checked}),i.id==="seed"&&P.setProject(n=>({...n,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&P.setProject(n=>({...n,randomAmount:Number(i.value)}),!1),i.id==="speed"&&P.setProject(n=>({...n,playback:{...n.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&P.setProject(n=>({...n,playback:{...n.playback,loop:i.checked}}),!1),i.id==="loop-close"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&P.setProject(n=>({...n,playback:{...n.playback,freeze:i.checked}}),!1),i.id==="time"&&P.setProject(n=>({...n,playback:{...n.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const n=xe(a);n&&Le(n.id,o=>({...o,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const n=xe(a);n&&Le(n.id,o=>({...o,enabled:i.checked}),!1)}for(const n of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${n}`&&P.setProject(o=>({...o,globalFeedback:{...o.globalFeedback,[n]:Number(i.value)}}),!1),i.id===`lfb-${n}`){const o=xe(a);o&&Le(o.id,r=>({...r,feedback:{...r.feedback,[n]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const n=xe(a),o=i.id.slice(3);n&&o in n.transform&&Le(n.id,r=>({...r,transform:{...r.transform,[o]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){ba=!0;const n=Xm(i.dataset.fxType||"",i.dataset.param),o=Zm(i,n);ki(i.dataset.layer,i.dataset.fx,i.dataset.param,o,!1),P.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&me(n=>({...n,collageScale:Qt(Number(i.value))}),void 0,!0),i.id==="collage-density"&&me(n=>({...n,collageDensity:Yt(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&me(n=>({...n,collagePace:Wt(Number(i.value))}),void 0,!0),i.id==="collage-chain-travel"&&me(n=>({...n,collageChainTravel:jt(Number(i.value))}),void 0,!0),i.id==="collage-chain-morph"&&me(n=>({...n,collageChainMorph:Vt(Number(i.value))}),void 0,!0),i.id==="collage-chain-vary"&&me(n=>({...n,collageChainVary:Gt(Number(i.value))}),void 0,!0),i.id==="collage-chain-smooth"&&me(n=>({...n,collageChainSmooth:Kt(Number(i.value))}),void 0,!0),i.id==="collage-spring-strength"&&me(n=>({...n,collageSpringStrength:Ci(Number(i.value))}),void 0,!0),i.id==="collage-spring-damp"&&me(n=>({...n,collageSpringDamp:Ei(Number(i.value))}),void 0,!0),i.id==="collage-spring-dist"&&me(n=>({...n,collageSpringDist:Pi(Number(i.value))}),void 0,!0),i.id==="collage-spring-elast"&&me(n=>({...n,collageSpringElast:Mi(Number(i.value))}),void 0,!0),i.id==="collage-spring-break"&&me(n=>({...n,collageSpringBreak:Ii(Number(i.value))}),void 0,!0),i.id==="collage-flow-scale"&&me(n=>({...n,collageFlowScale:Ai(Number(i.value))}),void 0,!0),i.id==="collage-flow-turb"&&me(n=>({...n,collageFlowTurb:Bi(Number(i.value))}),void 0,!0),i.id==="collage-flow-evolve"&&me(n=>({...n,collageFlowEvolve:Ri(Number(i.value))}),void 0,!0),i.id==="collage-flow-force"&&me(n=>({...n,collageFlowForce:zi(Number(i.value))}),void 0,!0),i.id==="collage-flow-depth"&&me(n=>({...n,collageFlowDepth:Fi(Number(i.value))}),void 0,!0),i.id==="collage-boid-cohere"&&me(n=>({...n,collageBoidCohere:Oi(Number(i.value))}),void 0,!0),i.id==="collage-boid-sep"&&me(n=>({...n,collageBoidSep:Hi(Number(i.value))}),void 0,!0),i.id==="collage-boid-align"&&me(n=>({...n,collageBoidAlign:Li(Number(i.value))}),void 0,!0),i.id==="collage-boid-radius"&&me(n=>({...n,collageBoidRadius:Ni(Number(i.value))}),void 0,!0),i.id==="collage-boid-speed"&&me(n=>({...n,collageBoidSpeed:Ui(Number(i.value))}),void 0,!0),i.id==="collage-pole-count"&&me(n=>({...n,collagePoleCount:Di(Number(i.value))}),void 0,!0),i.id==="collage-pole-attract"&&me(n=>({...n,collagePoleAttract:qi(Number(i.value))}),void 0,!0),i.id==="collage-pole-repel"&&me(n=>({...n,collagePoleRepel:$i(Number(i.value))}),void 0,!0),i.id==="collage-pole-speed"&&me(n=>({...n,collagePoleSpeed:Wi(Number(i.value))}),void 0,!0),i.id==="collage-pole-falloff"&&me(n=>({...n,collagePoleFalloff:ji(Number(i.value))}),void 0,!0),i.id==="collage-pole-switch"&&me(n=>({...n,collagePoleSwitch:Vi(Number(i.value))}),void 0,!0),i.id==="exp-q"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&P.setProject(n=>({...n,exportSettings:{...n.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{ba&&(ba=!1,pn(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),P.state.ui.dropActive||P.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&P.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),P.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&va(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Yi(),P.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Dt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Dt("all",!0),(e.key==="k"||e.key==="K")&&Nr(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Ur()),e.key==="?"&&P.patchUi({helpOpen:!P.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Lr()))})}function Xm(t,e){return it(t)?.params.find(i=>i.id===e)}function Zm(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function pn(t){const{project:e,ui:i}=P.state,a=t.querySelector("#proj-name"),n=t.querySelector("#seed"),o=t.querySelector("#rnd-amt"),r=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),n&&document.activeElement!==n&&(n.value=String(e.seed)),o&&(o.value=String(e.randomAmount)),r&&(r.value=e.quality);const s=t.querySelector("#top-export");s&&(s.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(f=>{f.classList.toggle("acid",!!e.cutEdit?.enabled)}),Qm(t.querySelector("#rail")),Ym(t.querySelector("#stack")),ep(t.querySelector("#transport"))}function Qm(t){const e=P.project,i=P.state.ui,a=e.sources.find(n=>n.id===i.selectedSourceId&&Ie(n.generator))??e.sources.find(n=>Ie(n.generator));t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Ve(i.prompt)}</textarea>
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
    <div class="sec">Mash</div>
    <div class="row">
      ${yt.map(n=>`<button class="btn tiny ${a?.collageKitB===n?"acid":""}" data-act="mash" data-kit="${n}">${ls(n)}</button>`).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${Ki(zt(a?.collageKit)).map(n=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===n.toLowerCase()?"on":""}" data-act="wash" data-hex="${n}" style="background:${n}" title="${n}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${Qt(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${Qt(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${Yt(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${Yt(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${Wt(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${Wt(a?.collagePace).toFixed(2)}" />
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
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${jt(a?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${jt(a?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${Vt(a?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${Vt(a?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${Gt(a?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${Gt(a?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${Kt(a?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${Kt(a?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>`:""}
    <div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>
    ${a?.collageMove==="spring"?`<div class="sec">Spring</div>
    ${ce("collage-spring-strength","Spring Strength",Ci(a.collageSpringStrength),.2,2.2,.05)}
    ${ce("collage-spring-damp","Damping",Ei(a.collageSpringDamp),.08,1,.02)}
    ${ce("collage-spring-dist","Connection Distance",Pi(a.collageSpringDist),.12,.72,.02)}
    ${ce("collage-spring-elast","Elasticity",Mi(a.collageSpringElast),.2,2.2,.05)}
    ${ce("collage-spring-break","Break / Reconnect",Ii(a.collageSpringBreak),1.15,3.6,.05)}`:a?.collageMove==="flow"?`<div class="sec">Flow</div>
    ${ce("collage-flow-scale","Field Scale",Ai(a.collageFlowScale),.28,2.4,.05)}
    ${ce("collage-flow-turb","Turbulence",Bi(a.collageFlowTurb),0,2,.05)}
    ${ce("collage-flow-evolve","Evolution Speed",Ri(a.collageFlowEvolve),.08,2.2,.05)}
    ${ce("collage-flow-force","Force",zi(a.collageFlowForce),.2,2.2,.05)}
    ${ce("collage-flow-depth","Depth Influence",Fi(a.collageFlowDepth),0,1.6,.05)}`:a?.collageMove==="boids"?`<div class="sec">Boids</div>
    ${ce("collage-boid-cohere","Cohesion",Oi(a.collageBoidCohere),.1,2.2,.05)}
    ${ce("collage-boid-sep","Separation",Hi(a.collageBoidSep),.15,2.4,.05)}
    ${ce("collage-boid-align","Alignment",Li(a.collageBoidAlign),.1,2.2,.05)}
    ${ce("collage-boid-radius","Perception Radius",Ni(a.collageBoidRadius),.08,.55,.01)}
    ${ce("collage-boid-speed","Speed",Ui(a.collageBoidSpeed),.25,2.2,.05)}`:a?.collageMove==="poles"?`<div class="sec">Poles</div>
    ${ce("collage-pole-count","Pole Count",Di(a.collagePoleCount),1,5,1)}
    ${ce("collage-pole-attract","Attraction",qi(a.collagePoleAttract),.15,2.2,.05)}
    ${ce("collage-pole-repel","Repulsion",$i(a.collagePoleRepel),.1,2.2,.05)}
    ${ce("collage-pole-speed","Pole Speed",Wi(a.collagePoleSpeed),.12,2.2,.05)}
    ${ce("collage-pole-falloff","Falloff",ji(a.collagePoleFalloff),.6,2.8,.05)}
    ${ce("collage-pole-switch","Polarity Switching",Vi(a.collagePoleSwitch),0,2,.05)}`:""}
    <div class="sec">Music</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="bars">Bars</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="ripple">Ripple</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="swing">Swing</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="burst">Burst</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="halo">Halo</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="clap">Clap</button>
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
      ${e.sources.map(n=>{const o=n.kind==="audio"?`beat-sync · ${qt(n.duration||0)}${n.bpm&&n.bpm>40?` · ${n.bpm}bpm`:""}`:`${n.kind} ${n.width}×${n.height}`,r=n.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${n.id}">use</button>`;return`
        <div class="thumb ${n.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${n.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Ve(n.name)}</b><span>${o}</span></div>
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
        <div class="hd"><span>${Ve(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${n.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Ym(t){const e=P.project,i=xe(e),a=wi(i),n=Hc();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(o=>`
      <div class="layer ${o.id===i?.id?"on":""}" data-act="sel-layer" data-id="${o.id}">
        <div class="hd">
          <span class="name">${Ve(o.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${o.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${o.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${ce("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${Tf.map(o=>`<option value="${o}" ${o===i.blendMode?"selected":""}>${o}</option>`).join("")}</select>
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
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(o=>`<option ${i.mask.type===o?"selected":""} value="${o}">${o}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${i.effects.map((o,r)=>`
        <div class="fx ${o.id===a?.id?"on":""} ${o.enabled?"":"bypass"}" draggable="true" data-fx-index="${r}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${o.id}">${r+1}. ${Ve(it(o.typeId)?.name??o.typeId)}</span>
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
        ${Lc.map(o=>{const r=(n[o.id]??[]).filter(s=>s.id!=="dancer");return r.length?`<optgroup label="${o.label}">${r.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${Ve(it(a.typeId)?.name??"params")} · ${Ve(it(a.typeId)?.description??"")}</div>
        ${(it(a.typeId)?.params??[]).map(o=>Jm(i.id,a,o)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(o=>{o.addEventListener("dragstart",r=>{r.dataTransfer?.setData("text/plain",o.getAttribute("data-fx-index")||"0")}),o.addEventListener("dragover",r=>r.preventDefault()),o.addEventListener("drop",r=>{r.preventDefault();const s=Number(r.dataTransfer?.getData("text/plain")),l=Number(o.getAttribute("data-fx-index"));!i||Number.isNaN(s)||Number.isNaN(l)||s===l||Le(i.id,c=>{const f=[...c.effects],[d]=f.splice(s,1);return f.splice(l,0,d),{...c,effects:f}})})})}function Jm(t,e,i){const a=e.params[i.id]??i.default,n=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${n} ${a?"checked":""}/> ${Ve(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Ve(i.label)}</span><input type="color" ${n} value="${Ve(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Ve(i.label)}</span>
      <select ${n}>${(i.options??[]).map(o=>`<option value="${o.value}" ${o.value===a?"selected":""}>${o.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Ve(i.label)}</span>
    <input type="range" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function ep(t){const e=P.project,i=e.playback,a=e.exportSettings,n=P.state.ui.exporting,o=Math.max(e.duration,.1),r=i.time/o*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(s=>`<option ${i.mode===s?"selected":""} value="${s}">${s}</option>`).join("")}
        </select>
      </div>
      ${ce("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${qt(i.time)} / ${qt(o)}</span>
        <span class="status" id="status-line">${P.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(s=>`<div class="key" style="left:${s.time/o*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${r}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${o}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${fn.map(s=>`<button class="btn tiny ${im(a.width,a.height)===s.id?"acid":""}" data-act="exp-aspect" data-id="${s.id}">${s.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${a.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${a.height}" title="height" />
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map(s=>`<option ${a.format===s?"selected":""} value="${s}">${s}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2,4,6,8,16,32].map(s=>`<button class="btn tiny ${Number(a.duration)===s?"acid":""}" data-act="clip" data-secs="${s}" ${n?"disabled":""}>${s}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${a.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${a.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${n?"disabled":""}>${n?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",s=>{const l=s.currentTarget.getBoundingClientRect(),c=(s.clientX-l.left)/l.width*o;P.setProject(f=>({...f,playback:{...f.playback,time:Math.max(0,c)}}))})}function ce(t,e,i,a,n,o){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${n}" step="${o}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${n}" step="${o}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function ya(){const t=P.project,e=t.sources.find(n=>n.id===P.state.ui.selectedSourceId);if(e&&Ie(e.generator))return e;const i=xe(t),a=t.sources.find(n=>n.id===i?.sourceId);return a&&Ie(a.generator)?a:t.sources.find(n=>Ie(n.generator))}function tp(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,chainTravel:t.collageChainTravel,chainMorph:t.collageChainMorph,chainVary:t.collageChainVary,chainSmooth:t.collageChainSmooth,springStrength:t.collageSpringStrength,springDamp:t.collageSpringDamp,springDist:t.collageSpringDist,springElast:t.collageSpringElast,springBreak:t.collageSpringBreak,flowScale:t.collageFlowScale,flowTurb:t.collageFlowTurb,flowEvolve:t.collageFlowEvolve,flowForce:t.collageFlowForce,flowDepth:t.collageFlowDepth,boidCohere:t.collageBoidCohere,boidSep:t.collageBoidSep,boidAlign:t.collageBoidAlign,boidRadius:t.collageBoidRadius,boidSpeed:t.collageBoidSpeed,poleCount:t.collagePoleCount,poleAttract:t.collagePoleAttract,poleRepel:t.collagePoleRepel,poleSpeed:t.collagePoleSpeed,poleFalloff:t.collagePoleFalloff,poleSwitch:t.collagePoleSwitch,wash:e?t.colorA:void 0}}function ip(t){return!t.collageKit||!t.collageMove?t:{...t,name:Gn(t.collageMove,t.collageKit,t.collageKitB)}}function me(t,e,i=!1){const a=ya();return a?(P.setProject(n=>({...n,sources:n.sources.map(o=>o.id===a.id?t(o):o)}),!i),e&&P.patchUi({status:e},!i),!0):!1}function Ve(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function qt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Dr(t,e){if(P.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),n=Math.max(16,Math.floor(a.width*i)),o=Math.max(16,Math.floor(a.height*i));(t.width!==n||t.height!==o)&&(t.width=n,t.height=o)}function ap(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${qt(i)}  ${e.toFixed(0)}FPS  ${P.project.quality.toUpperCase()}`);const n=Math.max(P.project.duration,.1),o=t.querySelector(".playhead");o&&(o.style.left=`${i/n*100}%`);const r=t.querySelector("#clock");r&&(r.textContent=`${qt(i)} / ${qt(n)}`);const s=t.querySelector("#time");s&&document.activeElement!==s&&(s.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=P.state.ui.status)}const qr=window;qr.__phospheneMark=!0;const $r=document.querySelector("#app");if(!$r)throw new Error("#app missing");const gn=$r,vn=document.createElement("canvas");async function np(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new df(vn)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:gn.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}Vm(gn,t),qr.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Dr(vn,e)).observe(e),Dr(vn,e);let a=performance.now(),n=60,o=0,r=performance.now();function s(l){const c=Math.min(.08,(l-a)/1e3);a=l;const f=P.state.ui.exporting,d=P.project,p=r0(d,d.playback.time),u=Zi(d);if(!f&&d.playback.playing&&!d.playback.freeze){const m=u?.audio&&d.playback.mode==="forward"&&!u.audio.paused&&Number.isFinite(u.audio.currentTime);if(u?.audio&&Ba(u.audio,d.playback),m){const h=u.audio.currentTime;P.setProject(v=>({...v,playback:{...v.playback,time:h}}),!1)}else{let h=d.playback.time+c*p;const v=Math.max(d.duration,.001);d.playback.loop?h=(h%v+v)%v:h=Math.min(h,v),P.setProject(y=>({...y,playback:{...y.playback,time:h}}),!1),u?.audio&&d.playback.mode!=="forward"&&Ba(u.audio,{...d.playback,playing:!1,time:h})}}else u?.audio&&Ba(u.audio,{...d.playback,playing:!1});for(const m of P.project.sources)if(m.kind==="video"&&m.video&&!P.project.playback.freeze){const h=Ma(P.project.playback.time,m.duration||m.video.duration||1,P.project.playback.mode,1,P.project.playback.loop);kf(m,h,{playing:P.project.playback.playing,freeze:P.project.playback.freeze,mode:P.project.playback.mode,speed:P.project.playback.speed})}if(!f)try{t.render(P.project,P.project.playback.time),t.cutStatus&&t.cutStatus!==P.state.ui.status&&P.patchUi({status:t.cutStatus},!1)}catch(m){P.patchUi({status:m instanceof Error?m.message:"render error"},!1)}o++,l-r>400&&(n=o*1e3/(l-r),r=l,o=0),ap(gn,n,P.project.playback.time),requestAnimationFrame(s)}requestAnimationFrame(s)}np()})();

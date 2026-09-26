(function(){"use strict";function Ie(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Q(t,e,i){return Math.min(i,Math.max(e,t))}function Qe(t,e=16){return Math.max(e,Math.round(t)&-2)}function ja(t,e,i,a){const n=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:Qe(t*n),height:Qe(e*n)}}function Zi(t,e,i){return t+(e-t)*i}function vo(t){const e=Q(t,0,1);return e*e*(3-2*e)}const Va=["heraldry","wallpaper","giants","shower"],vt=["sailor","circus","fruit","nature","love","space","sweet","music"],Ga=["rush","tunnel","bloom","spiral","helix","prism","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","clap","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"],bo=["bars","ripple","swing","burst","halo","clap","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Ka(t){return!!t&&bo.includes(t)}const Wt={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",clap:"CLAP",wave:"WAVE",drop:"DROP",spot:"SPOT",pong:"PONG",step:"STEP",moire:"MOIRE",grid:"GRID",zip:"ZIP",ghost:"GHOST",poly:"POLY",fall:"FALL",liss:"LISS",snap:"SNAP"};function Me(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Bt(t){return vt.includes(t)?t:"sailor"}function Xa(t){return Ga.includes(t)?t:"rush"}const Za=["rush","tunnel","bloom","spiral","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","clap","wave","drop","spot","pong","step","moire","grid","zip","ghost","poly","fall","liss","snap"];function Qi(t){return Za[(t>>>0)%Za.length]}function Dt(t){return Q(t??1,.35,1.2)}function Ye(t,e=1){return(t>40?t/60:2)*e}function yo(t,e,i=1){return _e(t*Ye(e,i))}function wo(t,e,i=1){const a=Math.cos(yo(t,e,i)*Math.PI*2);return a>0?a*a:0}function Qa(t,e,i=1){return Math.floor(Math.max(0,t)*Ye(e,i))}function ki(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function Ya(t,e){return e&&Ga.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const $t=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a"],Yi={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a"},ko={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","star","moon","crab","helm","lighthouse","compass"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","moon","star","figure","popcorn","cane","mask"],fruit:["pear","lemon","cherry","leaf","mushroom","flower","sun","cloud","bolt","umbrella","bird","apple","banana","grape"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","drop","moth","bird","rabbit","snail","fern"],love:["heart","wingfig","swan","cat","crown","moon","star","key","ring","envelope","bow","potion","house","rose","diamond","candle"],space:["rocket","planet","saturn","ufo","comet","satellite","star","moon","alien","asteroid","telescope"],sweet:["lolly","coneice","cupcake","donut","candy","cherry","heart","cookie","waffle"],music:["note","vinyl","headphone","mic","speaker","star","heart","guitar","drum","piano","clef"]},Ja={sailor:["fish","boat","tail","swallow","anchor","lighthouse","helm"],circus:["elephant","tent","horse","balloon","figure","mask"],fruit:["pear","lemon","mushroom","sun","umbrella","apple","banana"],nature:["tree","deer","owl","fox","mountain","rabbit"],love:["heart","wingfig","swan","cat","house","rose"],space:["rocket","saturn","ufo","planet","comet","alien"],sweet:["lolly","cupcake","donut","coneice","candy","waffle"],music:["vinyl","headphone","speaker","note","mic","guitar","piano"]},en={sailor:["starfish","shell","star","fish","anchor","crab","compass"],circus:["ball","star","balloon","bow","ticket","popcorn","cane"],fruit:["cherry","leaf","star","drop","lemon","grape","apple"],nature:["leaf","acorn","drop","moth","bird","snail","fern"],love:["heart","star","key","moon","ring","diamond","candle"],space:["star","moon","comet","satellite","planet","asteroid"],sweet:["candy","heart","lolly","cherry","donut","cookie"],music:["note","star","heart","vinyl","mic","clef","drum"]},jt=144;function tn(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function Le(t,e){return e[Math.floor(t()*e.length)%e.length]}function an(t,e){return t()<.32?e:Le(t,$t)}function xo(t,e="rush"){return e==="tunnel"?Ja[t]:e==="lattice"?en[t]:ko[t]}function _o(t,e,i,a){const n=xo(a,e==="bloom"?"rush":e);let r=Le(t,n);e==="lattice"&&t()<.4&&(r=Le(t,en[a])),e==="tunnel"&&t()<.28&&(r=Le(t,Ja[a]));const o=an(t,i);let s=an(t,i);return s===o&&(s=Le(t,$t)),{kind:r,pattern:t()<.58?"plain":Le(t,["polka","hoop","half","bar"]),a:o,b:s,mirror:t()>.5}}function To(t){return t>.5?Q((t-.5)/.5,0,1):0}function Co(t,e,i){const a=Math.max(1,i),n=e>40?e/60:2;return(Math.floor(Math.max(0,t)*n)*11+5>>>0)%a}function Vt(t){return Q(t??1,.5,2)}function Gt(t){return Q(t??1,.35,2)}function So(t,e,i="sailor",a){const n=Ie(t>>>0),r=240,o=a&&a!==i?a:null,s=[];for(let l=0;l<r;l++){const c=l<70?"lattice":l<130?"tunnel":"rush",f=o&&l&1?o:i;s.push({x:n(),y:n(),z:n(),rot:(n()-.5)*.55,size:.55+n()*.9,vx:(n()-.5)*.06,vy:(n()-.35)*.08,vr:(n()-.5)*.25,charge:_o(n,c,e,f)})}return s}function Eo(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function Po(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,n=e&255;return(.22*i+.7*a+.08*n)/255}function nn(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const n=i.a,r=i.b,o=a*2.4;if(t.fillStyle=n,t.fillRect(-o,-o,o*2,o*2),t.fillStyle=r,i.pattern==="polka"){const s=a*.38;for(let l=-4;l<5;l++)for(let c=-4;c<5;c++)t.beginPath(),t.arc((c+.5*(l&1))*s,l*s,s*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=r,t.lineWidth=a*.14;for(let s=1;s<=3;s++)t.beginPath(),t.arc(0,0,a*(.28*s),0,Math.PI*2),t.stroke()}else i.pattern==="half"?t.fillRect(0,-o,o,o*2):i.pattern==="bar"&&t.fillRect(-o,-a*.18,o*2,a*.36);t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=Po(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function rn(t,e,i,a=.42){for(let n=0;n<i*2;n++){const r=n%2===0?e:e*a,o=n*Math.PI/i-Math.PI/2,s=Math.cos(o)*r,l=Math.sin(o)*r;n===0?t.moveTo(s,l):t.lineTo(s,l)}t.closePath()}function Mo(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Io(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function on(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Ao(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Bo(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function Ro(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function zo(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,n=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*n,-Math.cos(a)*n*.85)}t.closePath()}function Fo(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function Oo(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function Ho(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Lo(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Uo(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function No(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function qo(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Wo(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function Do(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function $o(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function jo(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function Vo(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function Go(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function Ko(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function Xo(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function Zo(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function Qo(t,e){rn(t,e,8,.55)}function Yo(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function Jo(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function es(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function ts(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function is(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function as(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function ns(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function rs(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function os(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function ss(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function ls(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function cs(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function fs(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function us(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),on(t,e*.72)}function ds(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function hs(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function ms(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function ps(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function gs(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function vs(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function bs(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function ys(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function ws(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function ks(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function xs(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function _s(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function Ts(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function Cs(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function Ss(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function Es(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function Ps(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function Ms(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function Is(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function As(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function Bs(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function Rs(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function zs(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function Fs(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function Os(t,e){t.ellipse(0,e*.08,e*.55,e*.4,0,0,Math.PI*2),t.moveTo(-e*.95,-e*.55),t.quadraticCurveTo(-e*.55,-e*.15,-e*.35,e*.05),t.quadraticCurveTo(-e*.85,e*.15,-e*.95,-e*.55),t.closePath(),t.moveTo(e*.95,-e*.55),t.quadraticCurveTo(e*.55,-e*.15,e*.35,e*.05),t.quadraticCurveTo(e*.85,e*.15,e*.95,-e*.55),t.closePath()}function Hs(t,e){t.arc(0,e*.08,e*.72,Math.PI*.12,Math.PI-.12,!0),t.lineTo(-e*.95,e*.55),t.lineTo(-e*.55,e*.35),t.lineTo(e*.55,e*.35),t.lineTo(e*.95,e*.55),t.closePath()}function Ls(t,e){t.moveTo(-e*.22,e),t.lineTo(-e*.12,-e*.15),t.lineTo(-e*.32,-e*.15),t.lineTo(-e*.32,-e*.45),t.lineTo(e*.32,-e*.45),t.lineTo(e*.32,-e*.15),t.lineTo(e*.12,-e*.15),t.lineTo(e*.22,e),t.closePath(),t.moveTo(0,-e*.95),t.lineTo(e*.22,-e*.45),t.lineTo(-e*.22,-e*.45),t.closePath()}function Us(t,e){t.arc(0,0,e*.88,0,Math.PI*2),t.moveTo(0,-e*.78),t.lineTo(e*.16,0),t.lineTo(0,e*.78),t.lineTo(-e*.16,0),t.closePath(),t.moveTo(-e*.78,0),t.lineTo(0,e*.16),t.lineTo(e*.78,0),t.lineTo(0,-e*.16),t.closePath()}function Ns(t,e){t.moveTo(-e*.55,e*.15),t.lineTo(-e*.42,e*.95),t.lineTo(e*.42,e*.95),t.lineTo(e*.55,e*.15),t.closePath(),t.moveTo(-e*.35,e*.12),t.arc(-e*.22,-e*.15,e*.28,0,Math.PI*2),t.moveTo(e*.12,-e*.05),t.arc(e*.22,-e*.12,e*.26,0,Math.PI*2),t.moveTo(0,-e*.45),t.arc(0,-e*.42,e*.24,0,Math.PI*2)}function qs(t,e){t.arc(0,-e*.45,e*.38,Math.PI*.15,Math.PI,!0),t.lineTo(-e*.38,e*.95),t.lineTo(-e*.12,e*.95),t.lineTo(-e*.12,-e*.45),t.arc(0,-e*.45,e*.12,Math.PI,Math.PI*.15,!1),t.closePath()}function Ws(t,e){t.ellipse(0,0,e*.9,e*.62,0,0,Math.PI*2),t.moveTo(-e*.42,-e*.08),t.ellipse(-e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2),t.moveTo(e*.42,-e*.08),t.ellipse(e*.28,-e*.05,e*.18,e*.14,0,0,Math.PI*2)}function Ds(t,e){t.arc(-e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(e*.75,e*.08),t.arc(e*.22,e*.08,e*.55,0,Math.PI*2),t.moveTo(0,-e*.35),t.quadraticCurveTo(e*.22,-e*.95,e*.08,-e),t.quadraticCurveTo(-e*.05,-e*.55,0,-e*.35),t.closePath()}function $s(t,e){t.moveTo(-e*.85,e*.35),t.quadraticCurveTo(-e*.15,-e*.85,e*.85,-e*.15),t.quadraticCurveTo(e*.95,e*.25,e*.55,e*.15),t.quadraticCurveTo(-e*.05,-e*.25,-e*.65,e*.55),t.closePath()}function js(t,e){t.arc(-e*.22,e*.35,e*.28,0,Math.PI*2),t.moveTo(e*.45,e*.35),t.arc(e*.18,e*.32,e*.26,0,Math.PI*2),t.moveTo(e*.12,e*.08),t.arc(0,e*.02,e*.28,0,Math.PI*2),t.moveTo(-e*.05,-e*.35),t.arc(-e*.08,-e*.32,e*.24,0,Math.PI*2),t.moveTo(e*.28,-e*.28),t.arc(e*.2,-e*.22,e*.22,0,Math.PI*2)}function Vs(t,e){t.ellipse(-e*.22,-e*.55,e*.16,e*.48,-.2,0,Math.PI*2),t.ellipse(e*.22,-e*.55,e*.16,e*.48,.2,0,Math.PI*2),t.moveTo(e*.48,e*.15),t.arc(0,e*.18,e*.48,0,Math.PI*2)}function Gs(t,e){t.arc(e*.12,0,e*.55,0,Math.PI*2),t.moveTo(-e*.35,e*.35),t.quadraticCurveTo(-e*.85,e*.15,-e*.75,-e*.35),t.quadraticCurveTo(-e*.35,e*.05,-e*.15,e*.22),t.closePath()}function Ks(t,e){t.moveTo(0,e),t.quadraticCurveTo(e*.15,0,0,-e),t.quadraticCurveTo(-e*.15,0,0,e),t.closePath(),t.moveTo(-e*.55,e*.15),t.ellipse(-e*.28,e*.2,e*.32,e*.16,-.4,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.ellipse(e*.28,-e*.02,e*.3,e*.15,.4,0,Math.PI*2),t.moveTo(-e*.42,-e*.35),t.ellipse(-e*.2,-e*.28,e*.26,e*.13,-.5,0,Math.PI*2)}function Xs(t,e){t.arc(0,-e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,-e*.25),t.arc(e*.22,-e*.22,e*.32,0,Math.PI*2),t.moveTo(-e*.15,e*.15),t.arc(-e*.18,0,e*.32,0,Math.PI*2),t.moveTo(-e*.08,e*.15),t.rect(-e*.08,e*.15,e*.16,e*.75)}function Zs(t,e){t.moveTo(0,-e),t.lineTo(e*.72,0),t.lineTo(0,e),t.lineTo(-e*.72,0),t.closePath()}function Qs(t,e){t.rect(-e*.22,-e*.15,e*.44,e*1.05),t.moveTo(0,-e*.95),t.quadraticCurveTo(e*.28,-e*.55,0,-e*.15),t.quadraticCurveTo(-e*.22,-e*.55,0,-e*.95),t.closePath()}function Ys(t,e){t.ellipse(0,-e*.05,e*.62,e*.78,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.ellipse(-e*.22,-e*.08,e*.2,e*.28,-.3,0,Math.PI*2),t.moveTo(e*.38,-e*.15),t.ellipse(e*.22,-e*.08,e*.2,e*.28,.3,0,Math.PI*2)}function Js(t,e){t.moveTo(0,-e*.85),t.lineTo(e*.62,-e*.45),t.lineTo(e*.85,e*.15),t.lineTo(e*.35,e*.82),t.lineTo(-e*.45,e*.72),t.lineTo(-e*.88,e*.05),t.lineTo(-e*.55,-e*.55),t.closePath()}function el(t,e){t.moveTo(-e*.85,e*.35),t.lineTo(-e*.55,e*.55),t.lineTo(e*.75,-e*.35),t.lineTo(e*.95,-e*.55),t.lineTo(e*.75,-e*.75),t.lineTo(-e*.85,e*.15),t.closePath(),t.moveTo(-e*.15,e*.55),t.rect(-e*.22,e*.15,e*.16,e*.7)}function tl(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(-e*.22,-e*.22),t.arc(-e*.22,-e*.22,e*.1,0,Math.PI*2),t.moveTo(e*.28,e*.12),t.arc(e*.28,e*.12,e*.08,0,Math.PI*2),t.moveTo(e*.05,-e*.38),t.arc(e*.05,-e*.38,e*.07,0,Math.PI*2)}function il(t,e){t.moveTo(0,-e*.9),t.lineTo(e*.9,0),t.lineTo(0,e*.9),t.lineTo(-e*.9,0),t.closePath()}function al(t,e){t.ellipse(0,e*.42,e*.42,e*.48,0,0,Math.PI*2),t.moveTo(e*.28,-e*.05),t.ellipse(0,e*.02,e*.28,e*.22,0,0,Math.PI*2),t.moveTo(-e*.08,-e*.15),t.rect(-e*.08,-e*.95,e*.16,e*.9)}function nl(t,e){t.ellipse(0,-e*.35,e*.72,e*.28,0,0,Math.PI*2),t.moveTo(-e*.72,-e*.35),t.lineTo(-e*.72,e*.45),t.ellipse(0,e*.45,e*.72,e*.28,0,Math.PI,0,!0),t.lineTo(e*.72,-e*.35),t.closePath()}function rl(t,e){t.rect(-e*.95,-e*.35,e*1.9,e*.85),t.moveTo(-e*.55,-e*.35),t.rect(-e*.62,-e*.35,e*.18,e*.42),t.moveTo(-e*.12,-e*.35),t.rect(-e*.18,-e*.35,e*.18,e*.42),t.moveTo(e*.32,-e*.35),t.rect(e*.26,-e*.35,e*.18,e*.42)}function ol(t,e){t.moveTo(e*.12,e*.85),t.bezierCurveTo(-e*.85,e*.35,-e*.55,-e*.85,e*.25,-e*.75),t.bezierCurveTo(e*.85,-e*.65,e*.55,e*.15,-e*.05,e*.05),t.bezierCurveTo(-e*.45,0,-e*.15,-e*.35,e*.15,-e*.15),t.lineTo(e*.12,e*.85),t.closePath(),t.moveTo(e*.22,e*.72),t.arc(e*.08,e*.72,e*.16,0,Math.PI*2)}function sl(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":rn(t,i,5,e==="starfish"?.42:.4);break;case"heart":Mo(t,i);break;case"moon":Io(t,i);break;case"figure":on(t,i);break;case"fish":Ao(t,i);break;case"anchor":Bo(t,i);break;case"wave":Ro(t,i);break;case"shell":zo(t,i);break;case"boat":Fo(t,i);break;case"tail":Oo(t,i);break;case"swallow":Ho(t,i);break;case"elephant":Lo(t,i);break;case"tent":Uo(t,i);break;case"ball":No(t,i);break;case"bow":qo(t,i);break;case"horse":Wo(t,i);break;case"balloon":Do(t,i);break;case"ticket":$o(t,i);break;case"pear":jo(t,i);break;case"lemon":Vo(t,i);break;case"cherry":Go(t,i);break;case"leaf":Ko(t,i);break;case"mushroom":Xo(t,i);break;case"flower":Zo(t,i);break;case"sun":Qo(t,i);break;case"cloud":Yo(t,i);break;case"bolt":Jo(t,i);break;case"umbrella":es(t,i);break;case"bird":ts(t,i);break;case"tree":is(t,i);break;case"deer":as(t,i);break;case"fox":ns(t,i);break;case"owl":rs(t,i);break;case"acorn":os(t,i);break;case"cone":ss(t,i);break;case"mountain":ls(t,i);break;case"drop":cs(t,i);break;case"moth":fs(t,i);break;case"wingfig":us(t,i);break;case"swan":ds(t,i);break;case"cat":hs(t,i);break;case"crown":ms(t,i);break;case"key":ps(t,i);break;case"ring":gs(t,i);break;case"envelope":vs(t,i);break;case"potion":bs(t,i);break;case"rocket":ws(t,i);break;case"planet":ks(t,i);break;case"saturn":xs(t,i);break;case"ufo":_s(t,i);break;case"comet":Ts(t,i);break;case"satellite":Cs(t,i);break;case"lolly":Ss(t,i);break;case"coneice":Es(t,i);break;case"cupcake":Ps(t,i);break;case"donut":Ms(t,i);break;case"candy":Is(t,i);break;case"note":As(t,i);break;case"vinyl":Bs(t,i);break;case"headphone":Rs(t,i);break;case"mic":zs(t,i);break;case"speaker":Fs(t,i);break;case"crab":Os(t,i);break;case"helm":Hs(t,i);break;case"lighthouse":Ls(t,i);break;case"compass":Us(t,i);break;case"popcorn":Ns(t,i);break;case"cane":qs(t,i);break;case"mask":Ws(t,i);break;case"apple":Ds(t,i);break;case"banana":$s(t,i);break;case"grape":js(t,i);break;case"rabbit":Vs(t,i);break;case"snail":Gs(t,i);break;case"fern":Ks(t,i);break;case"rose":Xs(t,i);break;case"diamond":Zs(t,i);break;case"candle":Qs(t,i);break;case"alien":Ys(t,i);break;case"asteroid":Js(t,i);break;case"telescope":el(t,i);break;case"cookie":tl(t,i);break;case"waffle":il(t,i);break;case"guitar":al(t,i);break;case"drum":nl(t,i);break;case"piano":rl(t,i);break;case"clef":ol(t,i);break;default:ys(t,i);break}}function ll(t,e,i){const a=()=>sl(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),nn(t,a,e,i),t.restore();return}nn(t,a,e,i)}function cl(t){const e=document.createElement("canvas");e.width=jt,e.height=jt;const i=e.getContext("2d");return i&&(i.translate(jt/2,jt/2),ll(i,t,jt*.38)),e}class fl{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];builtSeed=-1;builtInk="";builtKit="sailor";builtKitB="";stamp(e){const i=Eo(e);let a=this.stamps.get(i);return a||(a=cl(e),this.stamps.set(i,a)),a}ensure(e,i,a,n){const r=n&&n!==a?n:"";this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.builtKitB===r&&this.particles.length||(this.particles=So(e,i,a,r||null),this.stamps.clear(),this.builtSeed=e,this.builtInk=i,this.builtKit=a,this.builtKitB=r)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const n=this.canvas.getContext("2d",{alpha:!1});if(!n)return this.canvas;const r=Bt(e.kit),o=e.kitB?Bt(e.kitB):null,s=tn(e.paper,Kt(r,e.seed)),l=tn(e.ink,Yi[r]);this.ensure(e.seed>>>0,l,r,o);const c=Ya(e.generator,e.move),f=Q(e.audio,0,1),h=Q(e.bass,0,1),d=Q(e.beat,0,1),u=e.bpm>40?e.bpm:0,v=Vt(e.scale),p=Gt(e.density),y=Dt(e.pace);dl(n,i,a,s,r,e.time,e.seed,d,h,!!e.night,l),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high";const m=e.time,b=m*y,k=i/Math.max(a,1),x=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="drop"?40:c==="spot"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Ka(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"?130:c==="tunnel"?120:c==="bloom"?140:this.particles.length,C=Math.max(8,Math.min(this.particles.length,Math.round(x*p))),I=c==="prism"?3:1;for(let P=0;P<C;P++){const z=this.particles[P],A=this.stamp(z.charge),U=ul(z,P,c,b,f,h,d,u,C,m);if(!U)continue;const G=c==="spot"?.34:c==="rush"||c==="tunnel"||c==="bloom"||c==="spiral"||c==="helix"||c==="prism"?.26:.22,T=Math.min(U.px*v,G)*Math.min(i,a);if(T<5)continue;const B=(.5+U.x)*i,w=(.5+U.y/k)*a;for(let L=0;L<I;L++){n.save();const J=I>1?(L-1)*T*.09:0,W=I>1?L===2?T*.06:L===0?-T*.03:0:0;if(B+J<-T||w+W<-T||B+J>i+T||w+W>a+T){n.restore();continue}n.translate(B+J,w+W),n.rotate(U.rot+(I>1?L*.1:0)),U.flip!=null&&n.scale(U.flip,1),U.squash&&n.scale(U.squash,1/Math.max(.35,U.squash)),U.glow&&(n.globalAlpha=U.alpha*.32*U.glow,n.fillStyle=U.tint??l,n.beginPath(),n.arc(0,0,T*(.4+U.glow*.16),0,Math.PI*2),n.fill()),n.globalAlpha=U.alpha*(I>1?.72:1),n.drawImage(A,-T/2,-T/2,T,T),n.restore()}}return(c==="bars"||c==="ripple"||c==="swing"||c==="burst"||c==="halo"||c==="clap"||c==="wave")&&d>.04&&(n.save(),n.translate(i*.5,a*.5),n.strokeStyle=Ue(l,"#fff4d8",.72),n.globalAlpha=.18+d*.42,n.lineWidth=2.6+d*6,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.16+d*.2),0,Math.PI*2),n.stroke(),n.globalAlpha=.1+d*.22,n.beginPath(),n.arc(0,0,Math.min(i,a)*(.3+d*.18),0,Math.PI*2),n.stroke(),n.restore()),this.canvas}}function _e(t){return(t%1+1)%1}function sn(t){const e=_e(t);return e<.5?e*2:2-e*2}function Ae(t){return sn(t)-.5}function ul(t,e,i,a,n,r,o,s,l=48,c=a){const f=Ka(i),h=wo(c,s),d=Q(Math.max(o*(f?.48:.85),h*(f?.72:.22)),0,1);if(i==="bounce"){const m=.11+Math.abs(t.vx)*2.4,b=.09+Math.abs(t.vy)*2.1;return{x:Ae(t.x+m*a),y:Ae(t.y+b*a*.92),px:Q((.1+t.size*.07)*(1+d*.22),.08,.28),glow:d*.45,rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const m=a*(2.2+n*.25)+e*.55,b=Math.cos(m);return{x:Ae(t.x+t.vx*a*.45),y:Ae(t.y+t.vy*a*.38),px:Q((.12+t.size*.06)*(1+d*.18),.08,.26),glow:d*.35,rot:t.rot+Math.sin(m)*.15,alpha:Q(.28+Math.abs(b)*.72,.2,1),flip:b}}if(i==="glow"){const m=.45+.55*Math.sin(a*2.4+e*.7),b=Q(m*.4+d*.55+r*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:Q((.1+t.size*.08)*(.9+b*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:Q(.5+b*.45,.35,1),glow:b}}if(i==="flash"){const m=.7+.3*Math.sin(a*5.2+e)+d*.12,b=$t[(Math.floor(a*3.2+e*3)>>>0)%$t.length];return{x:Ae(t.x+t.vx*a*.32),y:Ae(t.y+t.vy*a*.28),px:Q((.11+t.size*.07)*(1+d*.18),.08,.26),rot:t.rot+a*.4*t.vr,alpha:Q(m,.4,1),glow:.16+d*.45,tint:b}}if(i==="hop"){const m=s>40?s/60:.85,b=_e(a*m+t.z),k=Math.abs(Math.sin(b*Math.PI))*(.72+d*.45)+d*.14,x=Math.cos(b*Math.PI*2);return{x:Ae(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:Ae(t.y)*.62-k*.2,px:Q(.1+t.size*.07+k*.02,.08,.22),rot:t.rot+k*.55,alpha:1,flip:x}}if(i==="kick"){const m=.1+Math.abs(t.vx)*2.1,b=.08+Math.abs(t.vy)*1.8;return{x:Ae(t.x+m*a),y:Ae(t.y+b*a),px:Q((.1+t.size*.07)*(1+d*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:d*.7}}if(i==="jelly"){const m=1+Math.sin(a*5.2+e)*.08+d*.2;return{x:Ae(t.x+t.vx*a*.5),y:Ae(t.y+t.vy*a*.42),px:Q(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:m}}if(i==="tide"){const k=e%8,x=Math.floor(e/8)%6,C=(k+.5)/8-.5,I=(x+.5)/6-.5,P=Math.sin(a*1.7+x*.72+k*.18);return{x:C*.9+P*.07,y:I*.74+Math.sin(a*.82+x*.9)*.035,px:Q(.085+t.size*.045+d*.05,.06,.2),rot:t.rot+P*.22,alpha:1,glow:d*.5}}if(i==="rings"){const b=e%4,k=Math.floor(e/4),x=12,C=b&1?-1:1,I=k/x*Math.PI*2+a*(.48+b*.08)*C,P=.14+b*.11;return{x:Math.cos(I)*P,y:Math.sin(I)*P*.88,px:Q(.07+t.size*.035+d*.05,.05,.18),rot:I+t.rot*.25,alpha:.96,glow:d*.48}}if(i==="loom"){const m=a*1.05+t.x*Math.PI*2,b=a*1.45+t.y*Math.PI*2;return{x:Math.sin(m)*.4+Math.sin(b*.5)*.06,y:Math.sin(m*2+t.z*Math.PI)*.3,px:Q(.08+t.size*.045+d*.05,.06,.2),rot:m*.18+t.rot,alpha:1,glow:d*.48}}if(i==="petal"){const b=e%6,k=Math.floor(e/6)/8,x=b/6*Math.PI*2+a*.34,C=.8+.2*Math.sin(a*1.25),I=(.1+k*.32)*C;return{x:Math.cos(x)*I,y:Math.sin(x)*I*.9,px:Q(.075+t.size*.04+d*.05,.055,.2),rot:x+Math.PI*.5,alpha:Q(.42+C*.55,.4,1),glow:d*.5}}if(i==="flock"){const m=e%5,k=_e(t.z+a*(.18+m*.02))*Math.PI*2+m*.32,x=.2+Math.sin(k*2+m)*.1+m*.028;return{x:Math.cos(k)*x,y:Math.sin(k*.86)*x*.7,px:Q(.075+t.size*.04+d*.05,.055,.19),rot:k+Math.PI*.5,alpha:1,glow:d*.48}}if(i==="wheel"){const b=e%3,C=Math.floor(e/3)/14*Math.PI*2+a*.58*(b===1?-1:1),I=.2+b*.12,P=.5+.5*Math.sin(C);return{x:Math.cos(C)*I,y:Math.sin(C)*I*.72,px:Q((.075+t.size*.035)*(.78+P*.28)+d*.05,.05,.22),rot:C,alpha:Q(.5+P*.45,.45,1),glow:d*.48}}if(i==="silk"){const m=e%4,b=m<2?1:-1,k=_e(t.x+a*.14*b+m*.08),x=(m/3-.5)*.52+Math.sin(k*Math.PI*3+m)*.055;return{x:k-.5,y:x,px:Q(.07+t.size*.038+d*.05,.05,.18),rot:Math.cos(k*Math.PI*3)*.28+t.rot*.15,alpha:.94,glow:d*.45}}if(i==="bars"){const k=e%8,x=Math.floor(e/8)%6,C=(k+.5)/8-.5,I=.32+.68*(.5+.5*Math.sin(a*2.15+k*.85+t.z)),P=Q(I*(.42+n*.22+r*.2+h*.28),.18,1),z=.42-x/Math.max(5,1)*P*.82;return{x:C*.86,y:z,px:Q(.075+t.size*.03+d*.03,.055,.18),rot:t.rot*.2,alpha:Q(.45+(1-x/6)*.5+d*.15,.4,1),glow:d*.55,squash:1-d*.08}}if(i==="ripple"){const b=e%3,k=Math.floor(e/3),x=16,C=_e(a*.32),I=.15+b*.145+C*.16+h*.05,P=k/x*Math.PI*2+a*.1;return{x:Math.cos(P)*I,y:Math.sin(P)*I*.88,px:Q(.062+t.size*.024+d*.02,.048,.13),rot:P+t.rot*.2,alpha:Q(.96-b*.08,.6,1),glow:d*.45}}if(i==="swing"){const k=e%6,x=Math.floor(e/6)%8,C=s>40?s/60*Math.PI*2:5.4,I=k&1?-1:1,P=Math.sin(a*C+k*.85)*.82*I,z=.07+x*.072;return{x:(k/Math.max(5,1)-.5)*.9+Math.sin(P)*z,y:-.44+Math.cos(P)*z,px:Q(.07+t.size*.03+d*.028,.05,.16),rot:P,alpha:1,glow:d*.4}}if(i==="burst"){const b=e%3,C=Math.floor(e/3)/16*Math.PI*2+a*.2*(b===1?-1:1),I=(.14+b*.13)*(1+h*.42);return{x:Math.cos(C)*I,y:Math.sin(C)*I*.9,px:Q((.08+t.size*.035)*(1+d*.22),.055,.22),rot:C+t.rot*.2,alpha:Q(.55+d*.4,.45,1),glow:d*.75,squash:1+d*.14}}if(i==="halo"){const b=e%2,C=Math.floor(e/2)/24*Math.PI*2+a*.26*(b?-1:1),I=.84+.16*Math.sin(a*1.15)+d*.2,P=(.26+b*.14)*I,z=Q(.28+d*.65+r*.15,0,1);return{x:Math.cos(C)*P,y:Math.sin(C)*P*.9,px:Q(.07+t.size*.032+z*.04,.05,.18),rot:C+Math.PI*.5,alpha:Q(.5+z*.45,.4,1),glow:z}}if(i==="clap"){const m=e&1?1:-1,b=Math.floor(e/2)%8,k=Math.floor(e/16)%3,x=.28-h*.14;return{x:m*(x+k*.055),y:(b/7-.5)*.78,px:Q(.08+t.size*.035+d*.03,.055,.18),rot:t.rot*.15+m*d*.2,alpha:1,squash:1-d*.16,glow:d*.5}}if(i==="wave"){const k=e%16,x=Math.floor(e/16)%3,C=(k+.5)/16-.5,I=.09+n*.05+h*.08,P=C*Math.PI*3.4+a*2.15+x*.55;return{x:C*.92,y:(x-1)*.2+Math.sin(P)*I,px:Q(.065+t.size*.03+d*.026,.05,.15),rot:Math.cos(P)*.32,alpha:1,glow:d*.45}}if(i==="drop"){const m=To(o),b=m*m;return{x:t.x-.5,y:t.y-.5-b*.07,px:Q((.1+t.size*.075)*(1+m*.9),.07,.44),glow:m*.95,rot:t.rot,alpha:1,squash:1-m*.2}}if(i==="spot"){const m=Math.max(8,l),b=Co(c,s,m),k=e===b,x=k?Q(Math.max(o,d),0,1):0,C=e/m*Math.PI*2,I=.3;return{x:Math.cos(C)*I,y:Math.sin(C)*I*.78,px:Q((k?.2:.068)+t.size*.028+x*.24,.05,.5),glow:x*.98,rot:t.rot*.35,alpha:k?1:.52,squash:1-x*.14}}if(i==="pong"){const m=Ye(s),b=Ae(t.x+(.16+Math.abs(t.vx)*.5)*c*m),k=Ae(t.y+(.13+Math.abs(t.vy)*.42)*c*m*.9),x=Math.min(.5-Math.abs(b),.5-Math.abs(k));return{x:b,y:k,px:Q(.08+t.size*.04+d*.02,.06,.18),glow:(x<.065?.55:0)+d*.28,rot:t.rot+t.vr*a*.7,alpha:1}}if(i==="step"){const b=Qa(c,s,2),k=Math.floor(e/16)%2,x=(e%16/16+b/16)*Math.PI*2*(k?-1:1),C=.26+k*.12;return{x:Math.cos(x)*C,y:Math.sin(x)*C*.8,px:Q(.07+t.size*.03+d*.02,.05,.16),rot:x,alpha:1,glow:d*.55}}if(i==="moire"){const m=e&1,k=Math.floor(e/2)%18/18*Math.PI*2+a*(m?-.78:.62),x=.2+m*.13+h*.035;return{x:Math.cos(k)*x,y:Math.sin(k)*x*.86,px:Q(.065+t.size*.028+d*.018,.048,.14),rot:k+t.rot*.2,alpha:m?.78:1,glow:d*.4}}if(i==="grid"){const k=e%8,x=Math.floor(e/8)%6,C=x&1?1:-1;return{x:(_e((k+.5)/8+c*Ye(s)*.28*C)-.5)*.92,y:((x+.5)/6-.5)*.78,px:Q(.07+t.size*.03+d*.02,.05,.15),rot:t.rot*.2,alpha:1,glow:d*.42}}if(i==="zip"){const m=e%3,b=m===1?-1:1,k=1-h*.16;return{x:(_e(t.x+c*Ye(s)*.34*b*k+m*.12)-.5)*.94,y:(m/2-.5)*.52,px:Q(.07+t.size*.032+d*.02,.05,.15),rot:t.rot*.18,alpha:1,glow:d*.4}}if(i==="ghost"){const m=(e&1)===0,b=m?0:1/Ye(s),k=t.x*Math.PI*2+(c-b)*Ye(s)*1.35,x=.3+Math.sin((c-b)*1.1+t.y*6)*.05;return{x:Math.cos(k)*x,y:Math.sin(k*.92)*x*.72,px:Q(.075+t.size*.032,.055,.16),rot:k+Math.PI*.5,alpha:m?1:.34,glow:m?d*.5:.12}}if(i==="poly"){const m=e&1,b=m?8:12,k=Math.floor(e/2)%b,x=m?3:4,C=k/b*Math.PI*2+c*Ye(s)*(x/4)*(m?-1:1),I=.2+m*.15;return{x:Math.cos(C)*I,y:Math.sin(C)*I*.84,px:Q(.068+t.size*.03+d*.018,.05,.15),rot:C,alpha:1,glow:d*.45}}if(i==="fall"){const m=_e(t.z+c*Ye(s,.5)),b=sn(m),k=b*b,x=b>.82?(b-.82)/.18:0;return{x:(t.x-.5)*.88,y:-.42+k*.86,px:Q(.075+t.size*.035+d*.02,.055,.17),rot:t.rot+k*.4,alpha:1,glow:d*.4,squash:1-x*.28}}if(i==="liss"){const m=Ye(s),b=c*m*Math.PI*2*1.5+t.x*6.2,k=c*m*Math.PI*2+t.y*5.4;return{x:Math.sin(b)*.4,y:Math.sin(k)*.32,px:Q(.07+t.size*.032+d*.02,.05,.16),rot:b*.15+t.rot,alpha:1,glow:d*.42}}if(i==="snap"){const m=Qa(c,s,1)&1?1:-1,b=Math.floor(e/8)%5,k=e%8;return{x:m*(.2+k/7*.1),y:(b/4-.5)*.72,px:Q(.072+t.size*.03+d*.025,.05,.16),rot:t.rot*.2+m*.08,alpha:1,glow:d*.6,squash:1-d*.1}}if(i==="tunnel"){const b=.3+_e(t.z-a*(.4+n*.22+r*.1))*2.45;if(b<.34||b>2.65)return null;const k=t.x*Math.PI*2+a*.14+t.rot*.3,x=(.16+t.y*.58)/b;return{x:Math.cos(k)*x,y:Math.sin(k)*x,px:Q(.2*t.size*(.95+r*.1+d*.26)/b,.04,.5),glow:d*.42,rot:t.rot+t.vr*a*.2,alpha:Q((2.65-b)/.28,0,1)*Q((b-.3)/.1,0,1)}}if(i==="lattice"){const k=(e%8+.5)/8-.5,x=(Math.floor(e/8)+.5)/6-.5,I=.32+(1-_e(a*(.2+n*.12)+t.z*.02))*2.2;return{x:k/(I*.62),y:x/(I*.62),px:Q(.16*t.size/I,.05,.42),rot:t.rot*.25,alpha:Q((2.4-I)/.25,0,1)}}if(i==="bloom"){const m=_e(t.z-a*(.34+r*.12)),b=m*m,k=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(k)*b*.92,y:Math.sin(k)*b*.92,px:Q(.05+b*.32*t.size*(1+n*.06+d*.24),.04,.48),glow:d*.4,rot:t.rot+m*.4,alpha:Q(1.05-b,0,1)*Q(m/.08,0,1)}}if(i==="spiral"){const b=.28+_e(t.z-a*(.4+n*.2+r*.08))*2.6;if(b<.32||b>2.75)return null;const k=t.x*Math.PI*2+2.15/b+a*.1,x=(.1+t.y*.38)/b;return{x:Math.cos(k)*x,y:Math.sin(k)*x,px:Q(.2*t.size*(.94+r*.1+d*.26)/b,.04,.52),glow:d*.4,rot:t.rot+k*.15,alpha:Q((2.75-b)/.28,0,1)*Q((b-.28)/.1,0,1)}}if(i==="helix"){const b=.26+_e(t.z-a*(.46+n*.22+r*.08))*2.7;if(b<.3||b>2.85)return null;const k=e&1?Math.PI:0,x=a*(1.7+1.35/b)+t.x*Math.PI*2+k,C=(.11+t.y*.26)/b;return{x:Math.cos(x)*C,y:Math.sin(x)*C*.92,px:Q(.22*t.size*(.93+r*.1+d*.26)/b,.04,.54),glow:d*.4,rot:x+t.rot,alpha:Q((2.85-b)/.28,0,1)*Q((b-.26)/.1,0,1)}}if(i==="prism"){const b=.28+_e(t.z-a*(.42+n*.2+r*.08))*2.55;if(b<.32||b>2.7)return null;const k=a*.22+t.rot*.4,x=_e(t.x)-.5,C=_e(t.y)-.5,I=Math.cos(k),P=Math.sin(k);return{x:(x*I-C*P)/b,y:(x*P+C*I)/b,px:Q(.2*t.size*(.94+r*.1+d*.26)/b,.04,.52),glow:d*.4,rot:t.rot+k,alpha:Q((2.7-b)/.26,0,1)*Q((b-.28)/.1,0,1)}}const v=.26+_e(t.z-a*(.46+n*.24+r*.1))*2.7;if(v<.3||v>2.85)return null;const p=(_e(t.x+t.vx*a*.03)-.5)/v,y=(_e(t.y+t.vy*a*.02)-.5)/v;return{x:p,y,px:Q(.24*t.size*(.92+r*.1+d*.28)/v,.04,.6),glow:d*.48,rot:t.rot+t.vr*a*.12,alpha:Q((2.85-v)/.3,0,1)*Q((v-.26)/.1,0,1)}}const Rt={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828"]};function xi(t){return Rt[t]}function Ue(t,e,i){const a=parseInt(t.slice(1),16),n=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(n))return t;const r=Q(i,0,1),o=l=>Math.round((a>>l&255)*(1-r)+(n>>l&255)*r);return`#${(o(16)<<16|o(8)<<8|o(0)).toString(16).padStart(6,"0")}`}function dl(t,e,i,a,n,r,o,s=0,l=0,c=!1,f=Yi[n]){const h=Ie(o+4>>>0),d=Le(h,Rt[n]),u=Le(h,Rt[n]),v=Le(h,Rt[n]),p=c?Ue(a,"#08060a",.68):a;t.fillStyle=p,t.fillRect(0,0,e,i);const y=t.createLinearGradient(0,0,e,i);if(c){const x=Ue(f,"#ffd8a8",.3),C=.16+l*.4+s*.06;y.addColorStop(0,Ue(p,x,C*.55)),y.addColorStop(.48,Ue(p,d,.2)),y.addColorStop(1,Ue(p,u,.24))}else y.addColorStop(0,Ue(a,d,.38)),y.addColorStop(.45,Ue(a,v,.28)),y.addColorStop(1,Ue(a,u,.42));t.fillStyle=y,t.fillRect(0,0,e,i);const m=e*(.5+Math.sin(r*.17)*.08),b=i*(.46+Math.cos(r*.13)*.06),k=t.createRadialGradient(m,b,0,m,b,Math.max(e,i)*.72);if(c){const x=Ue(f,"#ffd8a8",.28);k.addColorStop(0,Ue(p,x,.22+l*.38+s*.05)),k.addColorStop(1,p)}else k.addColorStop(0,Ue(a,d,.42+s*.1)),k.addColorStop(1,a);t.fillStyle=k,t.globalAlpha=c?.92:.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function Kt(t,e=0){const i=Ie(e+17>>>0);return Le(i,Rt[t])}function Xt(t,e){const i=Ie(t+17>>>0);return Le(i,Rt[vt[Math.floor(i()*vt.length)]])}function zt(t,e="#c41e3a"){const i=Ie(t+91>>>0);return i()<.35?e:Le(i,$t)}function Tt(t){return Yi[t]}function Ct(t){return vt[(t>>>0)%vt.length]}function Be(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const hl=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ml=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],pl=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],gl=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],vl=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ln=`
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
`,cn=`
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
`,bl=`
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
`,yl=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,wl=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,fn=`
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
`,Ji={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${fn}${cn}`,applyGlsl:yl};function kl(t){return t?{...Ji,extraUniforms:`${fn}${cn}${bl}`,applyGlsl:wl}:Ji}const xl=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${ln}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Ji],un=[...hl,...ml,...pl,...gl,...vl,...xl],_l=new Map(un.map(t=>[t.id,t]));function Je(t){return _l.get(t)}function Tl(){const t={};for(const e of un)(t[e.category]??=[]).push(e);return t}const Cl=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function ea(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(n=>({...n,params:{...n.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Be("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function Sl(t,e){const i=e.data,a=t.sources.map(r=>r.id),n=i.layers.map((r,o)=>({...r,id:r.id,sourceId:r.sourceId&&a.includes(r.sourceId)?r.sourceId:a[Math.min(o,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:n,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function El(t,e){if(t.length===0)return null;const i=Ie(e);return t[Math.floor(i()*t.length)]}function Pl(t){return{...t,id:Be("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Ft=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],dn=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function Ml(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(f=>{const h=parseInt(f.slice(1),16),d=h>>16&255,u=h>>8&255,v=h&255,p=y=>Q(Math.round(Zi(y,t()*255,a)),0,255);return`#${[p(d),p(u),p(v)].map(y=>y.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const n=e.min??0,r=e.max??1,o=typeof i=="number"?i:Number(e.default),s=n+t()*(r-n),l=Zi(o,s,Math.max(a,.35));return e.kind==="int"?Math.round(l):l}function ta(t,e,i,a){const n=Je(t.typeId);if(!n)return t;const r=Ie(e),o={...t.params};for(const s of n.params)a&&s.id!==a||(o[s.id]=Ml(r,s,o[s.id]??s.default,Q(i,0,1)));return{...t,params:o}}function Il(t,e,i,a=!1,n){const r=t.effects.map((o,s)=>a&&n&&o.id!==n?o:ta(o,e+s*997,i));return{...t,effects:r}}function hn(t,e,i){const a=Je(t),n={};if(a)for(const r of a.params)n[r.id]=r.default;return ta({id:Be("fx"),typeId:t,enabled:!0,params:n},e,i)}function mn(t,e,i,a){const n={...t.params};if(t.typeId==="grade"&&(e==="lush"?(n.saturation=.18+a()*.42,n.brightness=-.04+a()*.16,n.contrast=.06+a()*.22,n.gamma=.82+a()*.35,n.hue=(a()-.5)*.18,n.exposure=-.15+a()*.4):e==="outsider"?(n.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,n.contrast=.2+a()*.55,n.gamma=.55+a()*1.1,n.hue=(a()-.5)*.7):(n.saturation=.05+a()*.5,n.contrast=.1+a()*.35,n.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(n.shadow=i.shadow,n.highlight=i.highlight,n.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(n.leakColor=i.leak,n.leak=e==="lush"?.18+a()*.35:a()*.22,n.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(n.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,n.halation=e==="lush"?.22+a()*.4:a()*.25,n.size=1.4+a()*2.2),t.typeId==="warp"&&(n.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(n.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(n.mixScan=e==="lush"?a()*.2:.25+a()*.5,n.noise=e==="lush"?a()*.1:.12+a()*.35),t.typeId==="posterize"&&(n.levels=3+Math.floor(a()*6),n.dither=.08+a()*.35),t.typeId==="threshold"&&(n.mix=.35+a()*.45,n.soft=.04+a()*.18),t.typeId==="critters"){n.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),n.size=.85+a()*.7,n.amount=.7+a()*.3,n.speed=.7+a()*1.3,n.seed=1+Math.floor(a()*9998);const r=a();e==="lush"?n.kit=r>.72?"votives":r>.48?"charms":r>.22?"shapes":"toy pop":e==="mix"?n.kit=r>.62?"moths":r>.4?"toy pop":r>.2?"mix":"shapes":n.kit=r>.55?"toy pop":r>.28?"mix":"shapes"}if(t.typeId==="dancer"){n.size=.12+a()*.05,n.count=1,n.crowd="normal",n.place="center";const r=a();e==="lush"?n.move=r>.38?"float":r>.18?"drift":"dance":e==="mix"?n.move=r>.52?"float":r>.3?"drift":r>.16?"orbit":"dance":n.move=r>.78?"drift":"dance",n.echo=.35+a()*.5,n.amount=1,n.speed=n.move==="dance"?.55+a()*1.5:.32+a()*.7,n.seed=1+Math.floor(a()*9998);const o=a();e==="lush"?n.grow=o>.62?"petals":o>.42?"halo":o>.26?"wings":o>.12?"quiet":"wild":e==="mix"?n.grow=o>.7?"skirt":o>.52?"antenna":o>.36?"horns":o>.2?"petals":"wild":n.grow=o>.62?"quiet":o>.4?"horns":"wild";const s=a();e==="lush"?n.coat=s>.48?"cream":s>.24?"moss":"wild":e==="mix"?n.coat=s>.5?"sodium":s>.26?"cream":"wild":n.coat=s>.55?"night":"wild"}return t.typeId==="kaleido"&&(n.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),n.zoom=.7+a()*.8),t.typeId==="channels"&&(n.tint=i.leak,n.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(n.lo=.1+a()*.22,n.hi=.5+a()*.35,n.amount=.45+a()*.4,n.invert=a()>.72),t.typeId==="dropout"&&(n.amount=.28+a()*.4,n.rate=.18+a()*.4,n.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:n}}function Al(t,e="mix"){const i=Ie(t>>>0);return mn(hn("critters",t,.85),e,Ft[t%Ft.length],i)}function Bl(t,e="mix"){const i=Ie(t>>>0);return mn(hn("dancer",t,.85),e,Ft[t%Ft.length],i)}function Rl(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Bl(t.seed+i*4243,"mix")]})}}function pn(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,Al(t.seed+i*7919,"mix")]})}}function zl(){return dn.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Fl(t,e,i,a=!1){return{...t,blendMode:"normal",opacity:1,effects:[],feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function gn(t,e,i,a,n,r=!1){const o=Math.max(t.randomAmount,e==="all"?.75:0),s=t.seed>>>0,l=Ie(s^2654435769),c=t.layers.map((b,k)=>e==="selected"&&b.id!==i?b:e==="param"?b.id!==i?b:{...b,effects:b.effects.map(x=>x.id===a&&n?ta(x,s+k*13,Math.max(o,.55),n):x)}:e==="all"?Fl(b,s+k*7919,o,r):Il(b,s+k*7919,o,!0,a)),f=Va,h=Ie(s+0*7919>>>0),d=zl(),u=d[Math.floor(h()*d.length)]??dn[0],p={"herald tour":{generator:"heraldry",a:Xt(s),b:zt(s)},"dense paper":{generator:"wallpaper",a:Xt(s+3),b:zt(s+3,"#1c4db8")},"giant charges":{generator:"giants",a:Xt(s+5),b:zt(s+5)},"heart rain":{generator:"shower",a:Xt(s+7),b:zt(s+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Xt(s+9),b:zt(s+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[u.name],y=t.sources.map((b,k)=>{if(e!=="all"||b.kind!=="generator")return b;const x=Ie(s+k*131),C=Ft[Math.floor(x()*Ft.length)];if(Me(b.generator)||Va.includes(b.generator)){const G=Ct(s+k*41),T=Qi(s+k*73),B=Ct(s+k*99),w=x()>.74&&B!==G?B:void 0;return{...b,generator:ki(T),collageKit:G,collageKitB:w,collageMove:T,collageNight:x()>.8,collageScale:.62+x()*.24,collageDensity:.72+x()*.3,collagePace:.72+x()*.22,colorA:Kt(G,s+k*17),colorB:Tt(G),name:w?`${Wt[T]} · ${G} · ${w}`:`${Wt[T]} · ${G}`}}const I=r?!1:x()>.35,P=p?p.generator:I?b.generator:f[Math.floor(x()*f.length)],z=Ct(s+k*41),A=Me(P)?Kt(z,s+k*17):C.inkA,U=Me(P)?Tt(z):C.inkB;return{...b,generator:P,collageKit:Me(P)?z:b.collageKit,colorA:p?p.a:A,colorB:p?Tt(z):U}}),m=e==="all"?r?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:l()>.72?.04+l()*.1:0,opacity:.4+l()*.3,scale:1.004+l()*.02,rotation:(l()-.5)*.03,distortion:l()*.12}:t.globalFeedback;return{...t,layers:c,sources:y,globalFeedback:m}}function Ol(t){const e=t.seed+7919>>>0,i=Ie(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],n=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],r=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let o={...t,seed:e,sources:t.sources.map((s,l)=>{if(!Me(s.generator))return s;const c=vt[Math.floor(i()*vt.length)],f=Qi(e+l*59);return{...s,generator:ki(f),collageKit:c,collageMove:f,collageScale:.64+i()*.22,collageDensity:.74+i()*.28,collagePace:.72+i()*.2,colorA:Kt(c,e+l*13),colorB:zt(e+l*29),name:`${Wt[f]} · ${c}`}}),layers:t.layers.map(s=>({...s,effects:s.effects.map(l=>l.typeId==="critters"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:l.typeId==="dancer"?{...l,params:{...l.params,seed:1+Math.floor(i()*9998),grow:n[Math.floor(i()*n.length)],coat:r[Math.floor(i()*r.length)]}}:l)}))};return o=pn(o),o}function Hl(){return{x:0,y:0,scale:1,rotation:0}}function Ll(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function vn(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Ul(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Nl(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const ql={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},_i={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC"},Wl={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function bn(t,e,i){const a=Wt[t];return i&&i!==e?`${a} · ${_i[e]} · ${_i[i]}`:`${a} · ${_i[e]}`}function Zt(t="plasma",e,i,a){const n=Me(t)?Bt(e):void 0,r=ql[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let o;n&&(o=i==="mix"||i==="tour"?Qi(Date.now()+Math.floor(Math.random()*997)):i?Xa(i):Ya(t));const s=o?ki(o):t??"plasma",l=o?Wt[o]:Wl[t??""]??(t?t.toUpperCase():"SIGNAL"),c=n&&a?.kitB?Bt(a.kitB):void 0,f=c&&n&&c!==n?c:void 0,h=n&&o?bn(o,n,f):n?`${l} · ${_i[n]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":l,d=a?.wash&&/^#[0-9a-fA-F]{6}$/.test(a.wash)?a.wash:void 0;return{id:Be("src"),name:h,kind:"generator",generator:s,colorA:d??(n?Kt(n,o==="rush"?1:o==="tunnel"?5:o==="bounce"?7:11):r.a),colorB:n?Tt(n):r.b,collageKit:n,collageKitB:f,collageMove:o,collageNight:n?!!a?.night:void 0,collageScale:n?Vt(a?.scale):void 0,collageDensity:n?Gt(a?.density):void 0,collagePace:n?Dt(a?.pace):void 0,width:1280,height:720,duration:0}}function yn(t){const e=Je(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Be("fx"),typeId:t,enabled:!0,params:i}}function wn(t,e,i=[]){return{id:Be("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Hl(),effects:i.map(yn),mask:Ll(),feedback:vn()}}function kn(){const t=Zt("wallpaper","sailor","rush"),e=wn("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Ul(),globalFeedback:{...vn(),amount:0,opacity:.4,scale:1},exportSettings:Nl(),presets:[]},a=gn({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[ea(i,"factory · tour"),ea(a,"factory · scramble")],i}function xn(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,exporting:!1}}class Dl{state;listeners=new Set;constructor(e=kn()){this.state={project:e,ui:xn(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...xn(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const E=new Dl;function ia(t,e,i,a,n){if(e<=0)return 0;const r=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(r*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let o=r;if(i==="reverse"&&(o=-r),i==="pingpong"){const s=e*2,l=(o%s+s)%s;return l<=e?l:s-l}return n?(o%e+e)%e:Q(o,0,e)}function $l(t,e,i,a,n){return t.filter(r=>r.layerId===e&&r.target===i&&r.paramId===a&&(i!=="effect"||r.effectId===n)).sort((r,o)=>r.time-o.time)}function jl(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let n=0;n<t.length-1;n++){const r=t[n],o=t[n+1];if(e>=r.time&&e<=o.time){const s=o.time-r.time||1;let l=(e-r.time)/s;return(o.easing==="smooth"||r.easing==="smooth")&&(l=vo(l)),Zi(r.value,o.value,l)}}return i}function bt(t,e,i,a,n,r,o){const s=$l(t.keyframes,e,i,a,o);return jl(s,r,n)}function Vl(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(n=>({...n,params:{...n.params}}))};a.opacity=bt(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=bt(t,e.id,"layer","x",e.transform.x,i),a.transform.y=bt(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=bt(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=bt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const n of Object.keys(a.feedback))a.feedback[n]=bt(t,e.id,"feedback",n,e.feedback[n],i);for(const n of a.effects)for(const[r,o]of Object.entries(n.params))typeof o=="number"&&(n.params[r]=bt(t,e.id,"effect",r,o,i,n.id));return a}function Gl(t,e){const i=t.layers[0]?.id??"";return bt(t,i,"playback","speed",t.playback.speed,e)}const Kl=[{beats:[8],weight:4},{beats:[4,4],weight:5},{beats:[8,4],weight:3},{beats:[4,4,8],weight:3},{beats:[2,2,4],weight:2},{beats:[4,2,2],weight:2},{beats:[2,6],weight:2},{beats:[6,2],weight:2},{beats:[1,1,6],weight:2},{beats:[4,1,1,2],weight:1},{beats:[3,5],weight:1},{beats:[8,2,2,4],weight:2}],Xl=["spot","burst","clap","snap","step"],Zl=["ripple","swing","wave","halo","bars","zip","moire","pong","liss","grid"],Ql=["drop","halo","bars","wave","poly","ghost","fall"];function Yl(t,e){const i=e.reduce((n,r)=>n+r.weight,0);let a=t()*i;for(const n of e)if(a-=n.weight,a<=0)return n.item;return e[e.length-1].item}function Jl(t){return Yl(t,Kl.map(e=>({item:e.beats,weight:e.weight})))}function ec(t,e,i){if(e.length===1)return e[0];const a=i==null?e:e.filter(n=>n!==i);return(a.length?a:e)[Math.floor(t()*(a.length?a.length:e.length))%(a.length||e.length)]}function tc(t,e,i){const a=t<=2?Xl:t<=4?Zl:Ql;return ec(e,a,i)}function ic(t,e,i){const a=Math.max(1,t),n=(i??[]).filter(s=>s>=0&&s<a+.05);if(n.length>=8){const s=n[0]>.08?[0,...n]:[...n];return s[s.length-1]<a&&s.push(a),s}const r=60/Math.max(40,e||120),o=[];for(let s=0;s<=a+r*.01;s+=r)o.push(s);return o[o.length-1]<a&&o.push(a),o}function ac(t){const e=Ie(t.seed>>>0^12648430),i=Math.max(1,t.duration),a=ic(i,t.bpm??120,t.beats),n=[];let r=0,o,s,l=0;for(;r<a.length-1&&a[r]<i;){const c=Jl(e);s=Ct(t.seed+l*41+Math.floor(e()*17)>>>0);const f=l%5===2||e()>.82,h=e()>.72?Ct(t.seed+l*99+7>>>0):void 0,d=h&&h!==s?h:void 0,u=xi(s);for(const v of c){if(r>=a.length-1||a[r]>=i)break;const p=Math.min(a.length-1,r+v),y=a[r];if(y>=i)break;const m=tc(p-r,e,o),b=u[Math.floor(e()*u.length)%u.length];n.push({start:y,beats:p-r,look:{kit:s,kitB:d,move:m,night:f,wash:b,ink:Tt(s),scale:.62+e()*.22,density:.74+e()*.28,pace:.5+e()*.26}}),o=m,r=p}if(l++,l>80)break}if(!n.length){const c=Ct(t.seed);n.push({start:0,beats:8,look:{kit:c,move:"bars",night:!1,wash:xi(c)[0],ink:Tt(c),scale:.78,density:.88,pace:.62}})}return n}function nc(t,e){if(!t.length){const s=Ct(1);return{start:0,beats:8,look:{kit:s,move:"bars",night:!1,wash:xi(s)[0],ink:Tt(s),scale:.78,density:.88,pace:.62}}}const i=t[t.length-1],a=Math.max(i.start+.25,t.length>1?i.start+(i.start-t[0].start)/Math.max(1,t.length-1):i.start+2),n=Math.max(a,i.start+.5),r=(e%n+n)%n;let o=t[0];for(const s of t)if(s.start<=r)o=s;else break;return o}function rc(t){const e=t.look.kitB&&t.look.kitB!==t.look.kit?` · ${t.look.kitB}`:"";return`cut · ${t.look.move} · ${t.look.kit}${e} · ${t.beats} beats`}const oc=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function sc(t){return(t.type??"").startsWith("audio/")||oc.test(t.name)}function Ti(t){return t.sources.find(e=>e.kind==="audio")}let Qt=null,ft=null,Yt=null;const aa=new WeakSet;let Jt=0,ei=0,ti=0;function Ci(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Qt||(Qt=new t,ft=Qt.createAnalyser(),ft.fftSize=256,ft.smoothingTimeConstant=.72,ft.connect(Qt.destination),Yt=new Uint8Array(ft.frequencyBinCount)),Qt):null}async function Si(){const t=Ci();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function lc(t){const e=Ci();if(!(!e||!ft||aa.has(t)))try{e.createMediaElementSource(t).connect(ft),aa.add(t)}catch{aa.add(t)}}async function cc(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",lc(i),Si();let a=null;const n=Ci();if(n)try{const s=await t.arrayBuffer(),l=n.decodeAudioData(s.slice(0)).catch(()=>null);a=await Promise.race([l,new Promise(c=>setTimeout(()=>c(null),4e3))])}catch{a=null}const r=await Promise.race([new Promise(s=>{if(Number.isFinite(i.duration)&&i.duration>0){s(i.duration);return}i.addEventListener("loadedmetadata",()=>s(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>s(a?.duration??0),{once:!0})}),new Promise(s=>setTimeout(()=>s(a?.duration??0),2500))]),o=a?fc(a.getChannelData(0),a.sampleRate):[];return{id:Be("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:r||a?.duration||0,audio:i,pcm:a,beats:o,bpm:uc(o),objectUrl:e}}function fc(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,n=Math.floor((t.length-a)/i);if(n<16)return[];const r=new Float32Array(n);for(let f=0;f<n;f++){const h=f*i;let d=0;for(let u=0;u<a;u+=2){const v=t[h+u];d+=v*v}r[f]=Math.sqrt(d/(a*.5))}const o=Math.max(10,Math.floor(.32/(i/e))),s=.28,l=[];let c=-99;for(let f=o;f<n;f++){let h=0,d=0;for(let y=f-o;y<f;y++)h+=r[y],r[y]>d&&(d=r[y]);h/=o;const u=r[f]-r[f-1];if(!(r[f]>h*1.32&&r[f]>d*.72&&u>.0035))continue;const p=f*i/e;p-c<s||(l.push(p),c=p)}return l}function uc(t){if(t.length<4)return 0;const e=[];for(let a=1;a<t.length;a++){const n=t[a]-t[a-1];n>=.28&&n<=.8&&e.push(n)}if(e.length<3)return 0;e.sort((a,n)=>a-n);const i=e[Math.floor(e.length/2)];return na(Math.round(60/i),70,170)}function _n(t,e,i=.13){if(!(e>40)||!Number.isFinite(t))return 0;const a=60/e;if(!(a>0))return 0;const n=(t%a+a)%a;return Math.exp(-n/i)}function dc(t,e,i=.2){if(!t.length)return 0;let a=0,n=t.length-1;for(;a<n;){const s=a+n+1>>1;t[s]<=e?a=s:n=s-1}const r=t[a];if(r>e)return 0;const o=e-r;return o>i*3.2?0:Math.exp(-o/i)}function na(t,e,i){return Math.max(e,Math.min(i,t))}function hc(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const n=(a%i+i)%i,r=Math.floor(n*e),o=Math.max(64,Math.floor(e*.046)),s=Math.max(0,Math.min(t.length-1,r)),l=Math.max(s+1,Math.min(t.length,r+o));let c=0;for(let y=s;y<l;y++)c+=t[y]*t[y];const f=Math.min(1,Math.sqrt(c/(l-s))*3.4),h=Math.max(o,Math.floor(e*.09)),d=Math.min(t.length,r+h);let u=0,v=0;for(let y=s;y<d;y+=8)u+=t[y]*t[y],v++;const p=Math.min(1,Math.sqrt(u/Math.max(1,v))*4.2);return{energy:f,bass:p}}function mc(){if(!ft||!Yt)return null;ft.getByteFrequencyData(Yt);let t=0,e=0;const i=Yt.length,a=Math.max(4,Math.floor(i*.12));for(let n=0;n<i;n++){const r=Yt[n]/255;t+=r,n<a&&(e+=r)}return{energy:t/i,bass:e/a}}function pc(t,e){let i=0,a=0,n=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const o=t.pcm.duration,s=(e%o+o)%o,l=hc(t.pcm.getChannelData(0),t.pcm.sampleRate,o,s);i=l.energy,a=l.bass;const c=t.beats??[],f=c.length?dc(c,s,.14):0,h=_n(s,t.bpm??0),d=na((i-.12)*.75,0,.6);n=Math.max(f,h*.78,c.length?d*.42:d)}else if(t?.kind==="audio"){const o=mc();o&&(i=o.energy,a=o.bass,n=Math.max(_n(e,t.bpm??0)*.78,na((i-.12)*.55,0,.5)))}ti+=(n-ti)*(n>ti?.78:.4);const r=t?.kind==="audio"?.22:.14;return Jt+=(i-Jt)*r,ei+=(a-ei)*Math.min(r,.16),!t&&Jt<.002&&(Jt=0),!t&&ei<.002&&(ei=0),t||(ti=0),{energy:Jt,bass:ei,beat:ti}}function gc(t,e,i=0){const a=e.length,n=t.length;if(a<1)return;if(n<1){e.fill(0);return}for(let o=0;o<a;o++)e[o]=t[o%n];if(i<=0)return;const r=Math.max(1,Math.round(a*i));for(let o=0;o<r;o++)e[a-r+o]*=1-(o+1)/r}function vc(t,e,i=!1){const a=t.sampleRate,n=Math.max(1,Math.round(Math.max(.05,e)*a)),r=Math.max(1,t.numberOfChannels),o=new AudioBuffer({length:n,numberOfChannels:r,sampleRate:a}),s=i?.12:0;for(let l=0;l<r;l++)gc(t.getChannelData(l),o.getChannelData(l),s);return o}async function bc(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(r=>r.arrayBuffer()),new Promise(r=>setTimeout(()=>r(null),2500))]);if(!i)return null;const a=Ci()??new e,n=await Promise.race([a.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(r=>setTimeout(()=>r(null),4e3))]);if(n&&n.length>32)return t.pcm=n,n}catch{return null}return null}function ra(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const yc=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,wc=`#version 300 es
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
`,kc=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,xc=`#version 300 es
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
`,_c=`#version 300 es
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
`,Tc=`#version 300 es
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
`,Cc=`#version 300 es
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
`,Sc=`#version 300 es
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
${ln}
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
`,Ec=`#version 300 es
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
`,Pc=`#version 300 es
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
`,Mc=`#version 300 es
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
`,Ic=`#version 300 es
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
`,Ac=`#version 300 es
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
`,Bc=`#version 300 es
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
`,Rc=`#version 300 es
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
`,zc=`#version 300 es
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
`,Fc=`#version 300 es
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
`,Oc=`#version 300 es
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
`,Hc=`#version 300 es
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
`,Lc=`#version 300 es
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
`,Uc=`#version 300 es
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
`,Nc=`#version 300 es
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
`,qc=`#version 300 es
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
`,Wc=`#version 300 es
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
`,Dc=`#version 300 es
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
`,Tn=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,$c=`#version 300 es
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
`;class St extends Error{}function jc(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new St("WebGL2 is required for Phosphene.");return e}function Cn(t,e,i){const a=t.createShader(e);if(!a)throw new St("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new St(n)}return a}class me{gl;prog;uniforms=new Map;constructor(e,i,a=yc){this.gl=e;const n=Cn(e,e.VERTEX_SHADER,a),r=Cn(e,e.FRAGMENT_SHADER,i),o=e.createProgram();if(!o)throw new St("Unable to create program");if(e.attachShader(o,n),e.attachShader(o,r),e.linkProgram(o),e.deleteShader(n),e.deleteShader(r),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o)??"link failed";throw e.deleteProgram(o),new St(s)}this.prog=o}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const n=this.loc(e);n&&this.gl.uniform2f(n,i,a)}v3(e,i,a,n){const r=this.loc(e);r&&this.gl.uniform3f(r,i,a,n)}v4(e,i,a,n,r){const o=this.loc(e);o&&this.gl.uniform4f(o,i,a,n,r)}dispose(){this.gl.deleteProgram(this.prog)}}function Ei(t){const e=t.createTexture();if(!e)throw new St("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Sn(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Vc(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class Ot{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new St("Unable to create framebuffer");this.fbo=i,this.tex=Ei(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Vc(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Fe(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function et(t){t.drawArrays(t.TRIANGLES,0,3)}const Gc={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Kc={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},En={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function Xc(t){return`${wc}
${t.extraUniforms??""}
${t.applyGlsl}
${kc}`}function Zc(t,e){return new me(t,Xc(e))}function ii(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Ht=8;function Pn(t,e,i){return new ImageData(t,e,i)}function Qc(t,e,i){const a=t.find(r=>r.id===e);if(!a?.options)return Number(i)||0;const n=a.options.findIndex(r=>r.value===i);return n<0?0:n}class Yc{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;cutReel=null;cutKey="";cutLook=null;cutStatus="";effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new fl;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=jc(e),this.generatorProg=new me(this.gl,Cc)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Ht&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new Ot(e),this.pong??=new Ot(e),this.composite??=new Ot(e),this.post??=new Ot(e);this.ring.length<Ht;)this.ring.push(new Ot(e));this.copy??=new me(e,Tn),this.blit??=new me(e,_c),this.compositeProg??=new me(e,xc),this.feedbackProg??=new me(e,Tc),this.textureProg??=new me(e,$c),this.black||(this.black=Ei(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(r=>r.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(r=>r.enabled))return!0;const n=e.sources.find(r=>r.id===a.sourceId);return!!(n&&n.kind!=="generator"&&n.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new me(this.gl,Ec),this.stageProg):e===13?(this.sketchProg??=new me(this.gl,Pc),this.sketchProg):e===14?(this.feltProg??=new me(this.gl,Mc),this.feltProg):e===15?(this.foilProg??=new me(this.gl,Ic),this.foilProg):e===16?(this.plushProg??=new me(this.gl,Ac),this.plushProg):e===17?(this.yarnProg??=new me(this.gl,Bc),this.yarnProg):e===18?(this.sequinProg??=new me(this.gl,Rc),this.sequinProg):e===19?(this.quiltProg??=new me(this.gl,zc),this.quiltProg):e===20?(this.corkProg??=new me(this.gl,Fc),this.corkProg):e===21?(this.ginghamProg??=new me(this.gl,Oc),this.ginghamProg):e===22?(this.sprinkleProg??=new me(this.gl,Hc),this.sprinkleProg):e===23?(this.velvetProg??=new me(this.gl,Lc),this.velvetProg):e===24?(this.confettiProg??=new me(this.gl,Uc),this.confettiProg):e===25?(this.discoProg??=new me(this.gl,Nc),this.discoProg):e===26?(this.terrazzoProg??=new me(this.gl,qc),this.terrazzoProg):e===27?(this.comicProg??=new me(this.gl,Wc),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new me(this.gl,Dc),this.fieldsProg):(this.generatorFull??=new me(this.gl,Sc),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",n=this.effectProg.get(a);if(n)return n;const r=e==="dancer"?kl(i):Je(e);if(!r)return null;try{const o=Zc(this.gl,r);return this.effectProg.set(a,o),o}catch(o){return this.lastError=`${a}: ${o instanceof Error?o.message:String(o)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(n=>!!n);for(const n of a)n.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new Ot(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Ei(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Sn(this.gl,i,a),i}blitTo(e,i){const a=this.gl,n=this.copy;n&&(e.bind(),n.use(),Fe(a,0,i),n.i("uTex",0),et(a))}resolveCut(e,i,a){if(!e.cutEdit?.enabled){this.cutLook=null,this.cutReel=null,this.cutKey="",this.cutStatus="";return}const n=Math.max(e.duration,e.exportSettings.duration||0,8),r=`${e.cutEdit.seed}|${n}|${a?.bpm??0}|${a?.beats?.length??0}`;(!this.cutReel||this.cutKey!==r)&&(this.cutReel=ac({seed:e.cutEdit.seed,duration:n,bpm:a?.bpm??120,beats:a?.beats}),this.cutKey=r);const o=nc(this.cutReel,i);this.cutStatus=rc(o),this.cutLook={generator:ki(o.look.move),collageKit:o.look.kit,collageKitB:o.look.kitB,collageMove:o.look.move,collageNight:o.look.night,collageScale:o.look.scale,collageDensity:o.look.density,collagePace:o.look.pace,colorA:o.look.wash,colorB:o.look.ink}}drawHeraldry(e,i,a,n,r,o,s){const l=this.gl;this.copy??=new me(l,Tn),this.heraldryTex??=Ei(l);const c=this.cutLook??i,f=this.heraldry.paint({width:o,height:s,time:a,duration:r,seed:n,generator:c.generator,kit:c.collageKit,kitB:c.collageKitB,move:c.collageMove,paper:c.colorA??"#ffffff",ink:c.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm,night:c.collageNight,scale:c.collageScale,density:c.collageDensity,pace:c.collagePace});if(Sn(l,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Fe(l,0,this.heraldryTex),this.copy.i("uTex",0),et(l)}drawGenerator(e,i,a,n=77,r=8){if(Me(i.generator)){this.drawHeraldry(e,i,a,n,r,e.w,e.h);return}const o=this.gl,s=En[i.generator??"plasma"]??0,l=this.genProg(s);e.bind(),l.use(),l.i("uMode",s),l.f("uTime",a);const c=i.colorA?ii(i.colorA):[.07,.04,.1],f=i.colorB?ii(i.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",n),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),et(o)}drawTexture(e,i,a){const n=this.gl,r=this.textureProg;r&&(e.bind(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),r.use(),Fe(n,0,i),r.i("uTex",0),r.v2("uTranslate",a.transform.x,a.transform.y),r.f("uScale",a.transform.scale),r.f("uRotation",a.transform.rotation),r.v2("uFit",1,1),et(n))}applyEffect(e,i,a,n,r,o,s,l,c){const f=Je(a.typeId),h=this.progFor(a);if(!f||!h){this.blitTo(e,i);return}const d=this.gl;e.bind(),h.use(),Fe(d,0,i),Fe(d,1,l),Fe(d,2,c),h.i("uTex",0),h.i("uFeedback",1),h.i("uHistory",2),h.i("uMask",3),h.v2("uResolution",e.w,e.h),h.v2("uTexel",1/e.w,1/e.h),h.f("uTime",r),h.f("uFrame",o),h.f("uQuality",s==="draft"?0:s==="preview"?1:2),h.f("u_audio",this.audioEnergy),h.f("u_bass",this.audioBass),h.v2("u_translate",n.transform.x,n.transform.y),h.f("u_scale",n.transform.scale),h.f("u_rotation",n.transform.rotation);const u=n.mask;h.i("u_maskType",Kc[u.type]??0),h.i("u_maskInvert",u.invert?1:0),h.f("u_maskSoftness",u.softness),h.v4("u_maskRect",u.rect.x,u.rect.y,u.rect.w,u.rect.h),h.v2("u_maskCenter",u.center.x,u.center.y),h.f("u_maskRadius",u.radius),h.f("u_maskGradientAngle",u.gradientAngle),h.f("u_maskNoiseScale",u.noiseScale);let v=1;for(const p of f.params){const y=a.params[p.id]??p.default,m=`u_${p.id}`;if(p.kind==="color"&&typeof y=="string"){const[b,k,x]=ii(y);h.v3(m,b,k,x)}else p.kind==="bool"?h.f(m,y?1:0):p.kind==="enum"?h.f(m,Qc(f.params,p.id,y)):h.f(m,Number(y));p.id==="mix"&&(v=Number(y))}h.f("u_mix",v),et(d)}drawLite(e,i){const a=this.gl,n=e.layers.find(h=>h.enabled)??e.layers[0],r=n?e.sources.find(h=>h.id===n.sourceId):null,o=r&&r.kind!=="audio"?r:{generator:"plasma"};if(Me(o.generator)){this.drawHeraldry(null,o,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const s=En[o.generator??"plasma"]??0,l=this.genProg(s);l.use(),l.i("uMode",s),l.f("uTime",i);const c=o.colorA?ii(o.colorA):[.07,.04,.1],f=o.colorB?ii(o.colorB):[.92,.78,.55];l.v3("uColorA",c[0],c[1],c[2]),l.v3("uColorB",f[0],f[1],f[2]),l.f("uScale",6),l.f("uSeed",e.seed),l.f("u_audio",this.audioEnergy),l.f("u_bass",this.audioBass),et(a)}render(e,i,a){const n=this.gl,r=a?.quality??e.quality,o=pc(Ti(e),i);this.audioEnergy=o.energy,this.audioBass=o.bass,this.audioBeat=o.beat;const s=Ti(e);if(this.audioBpm=s?.bpm??0,this.resolveCut(e,i,s),r!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const l=this.ping,c=this.pong,f=this.composite,h=this.post,d=this.blit,u=this.compositeProg,v=this.feedbackProg,p=r==="draft"?.5:1,y=Math.max(16,Math.floor((a?.width??this.canvas.width)*p)),m=Math.max(16,Math.floor((a?.height??this.canvas.height)*p));this.ensureSize(y,m),f.bind(),n.clearColor(.02,.02,.03,1),n.clear(n.COLOR_BUFFER_BIT);const b=e.globalFeedback,k=Math.max(0,Math.min(Ht-1,Math.round(b.delay))),x=(this.ringIndex-1-k+Ht*8)%Ht,C=this.ring[x].tex,I=Math.floor(i*e.fps);for(const P of e.layers){if(!P.enabled)continue;const z=Vl(e,P,i),A=e.sources.find(B=>B.id===z.sourceId)??null;if(!A||A.kind==="generator"||A.kind==="audio"){const B=A&&A.kind!=="audio"?A:{generator:"plasma"};this.drawGenerator(l,B,i,e.seed,e.duration)}else{const B=this.uploadSource(A);this.drawTexture(l,B,z)}let U=l,G=c;const T=this.histFor(z.id);for(const B of z.effects){if(!B.enabled)continue;this.applyEffect(G,U.tex,B,z,i,I,r,C,T.tex);const w=U;U=G,G=w}if(z.feedback.amount>.001){G.bind(),v.use(),Fe(n,0,U.tex),Fe(n,1,T.tex),v.i("uTex",0),v.i("uFeedback",1),v.f("uAmount",z.feedback.amount),v.f("uOpacity",z.feedback.opacity),v.f("uScale",z.feedback.scale),v.f("uRotation",z.feedback.rotation),v.f("uDistortion",z.feedback.distortion),v.f("uTime",i),et(n);const B=U;U=G,G=B}this.blitTo(h,f.tex),f.bind(),u.use(),Fe(n,0,h.tex),Fe(n,1,U.tex),u.i("uBase",0),u.i("uLayer",1),u.f("uOpacity",z.opacity),u.i("uBlend",Gc[z.blendMode]??0),u.v2("uResolution",y,m),et(n),this.blitTo(T,U.tex)}b.amount>.001&&(h.bind(),v.use(),Fe(n,0,f.tex),Fe(n,1,C),v.i("uTex",0),v.i("uFeedback",1),v.f("uAmount",b.amount),v.f("uOpacity",b.opacity),v.f("uScale",b.scale),v.f("uRotation",b.rotation),v.f("uDistortion",b.distortion),v.f("uTime",i),et(n),this.blitTo(f,h.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%Ht,n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),d.use(),Fe(n,0,f.tex),d.i("uTex",0),d.f("uVignette",a?.vignette??.25),et(n)}capture(e,i,a,n,r="image/png",o=.92){const s=this.paintFrame(e,i,a,n);return new Promise((l,c)=>{s.toBlob(f=>{f?l(f):c(new Error("Export failed"))},r,o)})}paintFrame(e,i,a,n,r){const o=r??document.createElement("canvas");o.width!==a&&(o.width=a),o.height!==n&&(o.height=n);const s=o.getContext("2d",{alpha:!1});if(!s)throw new Error("No 2d context");this.render(e,i,{width:a,height:n,quality:"export",vignette:0}),this.gl.finish();const l=this.readPixels(this.width,this.height);if(this.width===a&&this.height===n)s.putImageData(Pn(l,a,n),0,0);else{const c=document.createElement("canvas");c.width=this.width,c.height=this.height,c.getContext("2d")?.putImageData(Pn(l,this.width,this.height),0,0),s.drawImage(c,0,0,a,n)}return o}readPixels(e,i){const a=this.gl,n=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,n),a.bindFramebuffer(a.FRAMEBUFFER,null);const r=new Uint8ClampedArray(new ArrayBuffer(n.length)),o=e*4;for(let s=0;s<i;s++)r.set(n.subarray((i-1-s)*o,(i-s)*o),s*o);return r}}const Jc=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,ef=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function tf(t){return t.type.startsWith("video/")||ef.test(t.name)}function af(t){return t.type.startsWith("image/")||Jc.test(t.name)}async function nf(t){if(tf(t))return of(t);if(af(t))return In(t);if(sc(t))return cc(t);throw new Error(`Unsupported media: ${t.name}`)}async function Mn(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return In(i)}async function In(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await rf(e);return{id:Be("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function rf(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function of(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,n)=>{const r=()=>{a({id:Be("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",r,{once:!0}),i.addEventListener("error",()=>n(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function sf(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Be("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function An(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function lf(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,n=a.duration;if(!Number.isFinite(n)||n<=0)return;const r=(e%n+n)%n,o=!!i?.playing&&!i?.freeze,s=(i?.mode??"forward")==="forward",l=i?.speed??1,c=o&&s&&l>.92&&l<1.08,f=Math.abs(a.currentTime-r);if(!o){if(a.paused||a.pause(),f>1/30)try{a.currentTime=r}catch{}return}if(c){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),f>.35)try{a.currentTime=r}catch{}return}a.paused||a.pause();const h=Math.max(.25,Math.min(4,Math.abs(l)||1));if(a.playbackRate!==h&&(a.playbackRate=h),f>1/30)try{a.currentTime=r}catch{}}const cf=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ff(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Mi(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var oa={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Bn;function uf(){return Bn||(Bn=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,n,r){function o(c,f){if(!n[c]){if(!a[c]){var h=typeof Mi=="function"&&Mi;if(!f&&h)return h(c,!0);if(s)return s(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var u=n[c]={exports:{}};a[c][0].call(u.exports,function(v){var p=a[c][1][v];return o(p||v)},u,u.exports,i,a,n,r)}return n[c].exports}for(var s=typeof Mi=="function"&&Mi,l=0;l<r.length;l++)o(r[l]);return o})({1:[function(i,a,n){var r=i("./utils"),o=i("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var c,f,h,d,u,v,p,y=[],m=0,b=l.length,k=b,x=r.getTypeOf(l)!=="string";m<l.length;)k=b-m,h=x?(c=l[m++],f=m<b?l[m++]:0,m<b?l[m++]:0):(c=l.charCodeAt(m++),f=m<b?l.charCodeAt(m++):0,m<b?l.charCodeAt(m++):0),d=c>>2,u=(3&c)<<4|f>>4,v=1<k?(15&f)<<2|h>>6:64,p=2<k?63&h:64,y.push(s.charAt(d)+s.charAt(u)+s.charAt(v)+s.charAt(p));return y.join("")},n.decode=function(l){var c,f,h,d,u,v,p=0,y=0,m="data:";if(l.substr(0,m.length)===m)throw new Error("Invalid base64 input, it looks like a data url.");var b,k=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&k--,l.charAt(l.length-2)===s.charAt(64)&&k--,k%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=o.uint8array?new Uint8Array(0|k):new Array(0|k);p<l.length;)c=s.indexOf(l.charAt(p++))<<2|(d=s.indexOf(l.charAt(p++)))>>4,f=(15&d)<<4|(u=s.indexOf(l.charAt(p++)))>>2,h=(3&u)<<6|(v=s.indexOf(l.charAt(p++))),b[y++]=c,u!==64&&(b[y++]=f),v!==64&&(b[y++]=h);return b}},{"./support":30,"./utils":32}],2:[function(i,a,n){var r=i("./external"),o=i("./stream/DataWorker"),s=i("./stream/Crc32Probe"),l=i("./stream/DataLengthProbe");function c(f,h,d,u,v){this.compressedSize=f,this.uncompressedSize=h,this.crc32=d,this.compression=u,this.compressedContent=v}c.prototype={getContentWorker:function(){var f=new o(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return f.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new o(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,h,d){return f.pipe(new s).pipe(new l("uncompressedSize")).pipe(h.compressWorker(d)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,n){var r=i("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,n){var r=i("./utils"),o=(function(){for(var s,l=[],c=0;c<256;c++){s=c;for(var f=0;f<8;f++)s=1&s?3988292384^s>>>1:s>>>1;l[c]=s}return l})();a.exports=function(s,l){return s!==void 0&&s.length?r.getTypeOf(s)!=="string"?(function(c,f,h,d){var u=o,v=d+h;c^=-1;for(var p=d;p<v;p++)c=c>>>8^u[255&(c^f[p])];return-1^c})(0|l,s,s.length,0):(function(c,f,h,d){var u=o,v=d+h;c^=-1;for(var p=d;p<v;p++)c=c>>>8^u[255&(c^f.charCodeAt(p))];return-1^c})(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(i,a,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(i,a,n){var r=null;r=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:r}},{lie:37}],7:[function(i,a,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=i("pako"),s=i("./utils"),l=i("./stream/GenericWorker"),c=r?"uint8array":"array";function f(h,d){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=d,this.meta={}}n.magic="\b\0",s.inherits(f,l),f.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(c,h.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(d){h.push({data:d,meta:h.meta})}},n.compressWorker=function(h){return new f("Deflate",h)},n.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,n){function r(u,v){var p,y="";for(p=0;p<v;p++)y+=String.fromCharCode(255&u),u>>>=8;return y}function o(u,v,p,y,m,b){var k,x,C=u.file,I=u.compression,P=b!==c.utf8encode,z=s.transformTo("string",b(C.name)),A=s.transformTo("string",c.utf8encode(C.name)),U=C.comment,G=s.transformTo("string",b(U)),T=s.transformTo("string",c.utf8encode(U)),B=A.length!==C.name.length,w=T.length!==U.length,L="",J="",W="",se=C.dir,V=C.date,oe={crc32:0,compressedSize:0,uncompressedSize:0};v&&!p||(oe.crc32=u.crc32,oe.compressedSize=u.compressedSize,oe.uncompressedSize=u.uncompressedSize);var O=0;v&&(O|=8),P||!B&&!w||(O|=2048);var F=0,re=0;se&&(F|=16),m==="UNIX"?(re=798,F|=(function(Y,we){var Pe=Y;return Y||(Pe=we?16893:33204),(65535&Pe)<<16})(C.unixPermissions,se)):(re=20,F|=(function(Y){return 63&(Y||0)})(C.dosPermissions)),k=V.getUTCHours(),k<<=6,k|=V.getUTCMinutes(),k<<=5,k|=V.getUTCSeconds()/2,x=V.getUTCFullYear()-1980,x<<=4,x|=V.getUTCMonth()+1,x<<=5,x|=V.getUTCDate(),B&&(J=r(1,1)+r(f(z),4)+A,L+="up"+r(J.length,2)+J),w&&(W=r(1,1)+r(f(G),4)+T,L+="uc"+r(W.length,2)+W);var ee="";return ee+=`
\0`,ee+=r(O,2),ee+=I.magic,ee+=r(k,2),ee+=r(x,2),ee+=r(oe.crc32,4),ee+=r(oe.compressedSize,4),ee+=r(oe.uncompressedSize,4),ee+=r(z.length,2),ee+=r(L.length,2),{fileRecord:h.LOCAL_FILE_HEADER+ee+z+L,dirRecord:h.CENTRAL_FILE_HEADER+r(re,2)+ee+r(G.length,2)+"\0\0\0\0"+r(F,4)+r(y,4)+z+L+G}}var s=i("../utils"),l=i("../stream/GenericWorker"),c=i("../utf8"),f=i("../crc32"),h=i("../signature");function d(u,v,p,y){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=p,this.encodeFileName=y,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(d,l),d.prototype.push=function(u){var v=u.meta.percent||0,p=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:p?(v+100*(p-y-1))/p:100}}))},d.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var v=this.streamFiles&&!u.file.dir;if(v){var p=o(u,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(u){this.accumulate=!1;var v=this.streamFiles&&!u.file.dir,p=o(u,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),v)this.push({data:(function(y){return h.DATA_DESCRIPTOR+r(y.crc32,4)+r(y.compressedSize,4)+r(y.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var u=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var p=this.bytesWritten-u,y=(function(m,b,k,x,C){var I=s.transformTo("string",C(x));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(m,2)+r(m,2)+r(b,4)+r(k,4)+r(I.length,2)+I})(this.dirRecords.length,p,u,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(u){this._sources.push(u);var v=this;return u.on("data",function(p){v.processChunk(p)}),u.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),u.on("error",function(p){v.error(p)}),this},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(u){var v=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var p=0;p<v.length;p++)try{v[p].error(u)}catch{}return!0},d.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,v=0;v<u.length;v++)u[v].lock()},a.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,n){var r=i("../compressions"),o=i("./ZipFileWorker");n.generateWorker=function(s,l,c){var f=new o(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{s.forEach(function(d,u){h++;var v=(function(b,k){var x=b||k,C=r[x];if(!C)throw new Error(x+" is not a valid compression method !");return C})(u.options.compression,l.compression),p=u.options.compressionOptions||l.compressionOptions||{},y=u.dir,m=u.date;u._compressWorker(v,p).withStreamInfo("file",{name:d,dir:y,date:m,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(f)}),f.entriesCount=h}catch(d){f.error(d)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new r;for(var s in this)typeof this[s]!="function"&&(o[s]=this[s]);return o}}(r.prototype=i("./object")).loadAsync=i("./load"),r.support=i("./support"),r.defaults=i("./defaults"),r.version="3.10.1",r.loadAsync=function(o,s){return new r().loadAsync(o,s)},r.external=i("./external"),a.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,n){var r=i("./utils"),o=i("./external"),s=i("./utf8"),l=i("./zipEntries"),c=i("./stream/Crc32Probe"),f=i("./nodejsUtils");function h(d){return new o.Promise(function(u,v){var p=d.decompressed.getContentWorker().pipe(new c);p.on("error",function(y){v(y)}).on("end",function(){p.streamInfo.crc32!==d.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}a.exports=function(d,u){var v=this;return u=r.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),f.isNode&&f.isStream(d)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",d,!0,u.optimizedBinaryString,u.base64).then(function(p){var y=new l(u);return y.load(p),y}).then(function(p){var y=[o.Promise.resolve(p)],m=p.files;if(u.checkCRC32)for(var b=0;b<m.length;b++)y.push(h(m[b]));return o.Promise.all(y)}).then(function(p){for(var y=p.shift(),m=y.files,b=0;b<m.length;b++){var k=m[b],x=k.fileNameStr,C=r.resolve(k.fileNameStr);v.file(C,k.decompressed,{binary:!0,optimizedBinaryString:!0,date:k.date,dir:k.dir,comment:k.fileCommentStr.length?k.fileCommentStr:null,unixPermissions:k.unixPermissions,dosPermissions:k.dosPermissions,createFolders:u.createFolders}),k.dir||(v.file(C).unsafeOriginalName=x)}return y.zipComment.length&&(v.comment=y.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,n){var r=i("../utils"),o=i("../stream/GenericWorker");function s(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}r.inherits(s,o),s.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},s.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,n){var r=i("readable-stream").Readable;function o(s,l,c){r.call(this,l),this._helper=s;var f=this;s.on("data",function(h,d){f.push(h)||f._helper.pause(),c&&c(d)}).on("error",function(h){f.emit("error",h)}).on("end",function(){f.push(null)})}i("../utils").inherits(o,r),o.prototype._read=function(){this._helper.resume()},a.exports=o},{"../utils":32,"readable-stream":16}],14:[function(i,a,n){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,o);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,o)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var o=new Buffer(r);return o.fill(0),o},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(i,a,n){function r(C,I,P){var z,A=s.getTypeOf(I),U=s.extend(P||{},f);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(C=m(C)),U.createFolders&&(z=y(C))&&b.call(this,z,!0);var G=A==="string"&&U.binary===!1&&U.base64===!1;P&&P.binary!==void 0||(U.binary=!G),(I instanceof h&&I.uncompressedSize===0||U.dir||!I||I.length===0)&&(U.base64=!1,U.binary=!0,I="",U.compression="STORE",A="string");var T=null;T=I instanceof h||I instanceof l?I:v.isNode&&v.isStream(I)?new p(C,I):s.prepareContent(C,I,U.binary,U.optimizedBinaryString,U.base64);var B=new d(C,T,U);this.files[C]=B}var o=i("./utf8"),s=i("./utils"),l=i("./stream/GenericWorker"),c=i("./stream/StreamHelper"),f=i("./defaults"),h=i("./compressedObject"),d=i("./zipObject"),u=i("./generate"),v=i("./nodejsUtils"),p=i("./nodejs/NodejsStreamInputAdapter"),y=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var I=C.lastIndexOf("/");return 0<I?C.substring(0,I):""},m=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},b=function(C,I){return I=I!==void 0?I:f.createFolders,C=m(C),this.files[C]||r.call(this,C,null,{dir:!0,createFolders:I}),this.files[C]};function k(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var x={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var I,P,z;for(I in this.files)z=this.files[I],(P=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&C(P,z)},filter:function(C){var I=[];return this.forEach(function(P,z){C(P,z)&&I.push(z)}),I},file:function(C,I,P){if(arguments.length!==1)return C=this.root+C,r.call(this,C,I,P),this;if(k(C)){var z=C;return this.filter(function(U,G){return!G.dir&&z.test(U)})}var A=this.files[this.root+C];return A&&!A.dir?A:null},folder:function(C){if(!C)return this;if(k(C))return this.filter(function(A,U){return U.dir&&C.test(A)});var I=this.root+C,P=b.call(this,I),z=this.clone();return z.root=P.name,z},remove:function(C){C=this.root+C;var I=this.files[C];if(I||(C.slice(-1)!=="/"&&(C+="/"),I=this.files[C]),I&&!I.dir)delete this.files[C];else for(var P=this.filter(function(A,U){return U.name.slice(0,C.length)===C}),z=0;z<P.length;z++)delete this.files[P[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var I,P={};try{if((P=s.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");s.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var z=P.comment||this.comment||"";I=u.generateWorker(this,P,z)}catch(A){(I=new l("error")).error(A)}return new c(I,P.type||"string",P.mimeType)},generateAsync:function(C,I){return this.generateInternalStream(C).accumulate(I)},generateNodeStream:function(C,I){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(I)}};a.exports=x},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,n){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,n){var r=i("./DataReader");function o(s){r.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}i("../utils").inherits(o,r),o.prototype.byteAt=function(s){return this.data[this.zero+s]},o.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),c=s.charCodeAt(1),f=s.charCodeAt(2),h=s.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===l&&this.data[d+1]===c&&this.data[d+2]===f&&this.data[d+3]===h)return d-this.zero;return-1},o.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),c=s.charCodeAt(1),f=s.charCodeAt(2),h=s.charCodeAt(3),d=this.readData(4);return l===d[0]&&c===d[1]&&f===d[2]&&h===d[3]},o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=o},{"../utils":32,"./DataReader":18}],18:[function(i,a,n){var r=i("../utils");function o(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,c=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=s,c},readString:function(s){return r.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},a.exports=o},{"../utils":32}],19:[function(i,a,n){var r=i("./Uint8ArrayReader");function o(s){r.call(this,s)}i("../utils").inherits(o,r),o.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,n){var r=i("./DataReader");function o(s){r.call(this,s)}i("../utils").inherits(o,r),o.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},o.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},o.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},o.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=o},{"../utils":32,"./DataReader":18}],21:[function(i,a,n){var r=i("./ArrayReader");function o(s){r.call(this,s)}i("../utils").inherits(o,r),o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},a.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,n){var r=i("../utils"),o=i("../support"),s=i("./ArrayReader"),l=i("./StringReader"),c=i("./NodeBufferReader"),f=i("./Uint8ArrayReader");a.exports=function(h){var d=r.getTypeOf(h);return r.checkSupport(d),d!=="string"||o.uint8array?d==="nodebuffer"?new c(h):o.uint8array?new f(r.transformTo("uint8array",h)):new s(r.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,n){var r=i("./GenericWorker"),o=i("../utils");function s(l){r.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(s,r),s.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},a.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,n){var r=i("./GenericWorker"),o=i("../crc32");function s(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(s,r),s.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,n){var r=i("../utils"),o=i("./GenericWorker");function s(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}r.inherits(s,o),s.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},a.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,n){var r=i("../utils"),o=i("./GenericWorker");function s(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=r.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}r.inherits(s,o),s.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,n){function r(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,s){return this._listeners[o].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,s){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,s)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var s=this;return o.on("data",function(l){s.processChunk(l)}),o.on("end",function(){s.end()}),o.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,s){return this.extraStreamInfo[o]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},a.exports=r},{}],29:[function(i,a,n){var r=i("../utils"),o=i("./ConvertWorker"),s=i("./GenericWorker"),l=i("../base64"),c=i("../support"),f=i("../external"),h=null;if(c.nodestream)try{h=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(v,p){return new f.Promise(function(y,m){var b=[],k=v._internalType,x=v._outputType,C=v._mimeType;v.on("data",function(I,P){b.push(I),p&&p(P)}).on("error",function(I){b=[],m(I)}).on("end",function(){try{var I=(function(P,z,A){switch(P){case"blob":return r.newBlob(r.transformTo("arraybuffer",z),A);case"base64":return l.encode(z);default:return r.transformTo(P,z)}})(x,(function(P,z){var A,U=0,G=null,T=0;for(A=0;A<z.length;A++)T+=z[A].length;switch(P){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(G=new Uint8Array(T),A=0;A<z.length;A++)G.set(z[A],U),U+=z[A].length;return G;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+P+"'")}})(k,b),C);y(I)}catch(P){m(P)}b=[]}).resume()})}function u(v,p,y){var m=p;switch(p){case"blob":case"arraybuffer":m="uint8array";break;case"base64":m="string"}try{this._internalType=m,this._outputType=p,this._mimeType=y,r.checkSupport(m),this._worker=v.pipe(new o(m)),v.lock()}catch(b){this._worker=new s("error"),this._worker.error(b)}}u.prototype={accumulate:function(v){return d(this,v)},on:function(v,p){var y=this;return v==="data"?this._worker.on(v,function(m){p.call(y,m.data,m.meta)}):this._worker.on(v,function(){r.delay(p,arguments,y)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},v)}},a.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(r),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!i("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,n){for(var r=i("./utils"),o=i("./support"),s=i("./nodejsUtils"),l=i("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function d(){l.call(this,"utf-8 encode")}n.utf8encode=function(u){return o.nodebuffer?s.newBufferFrom(u,"utf-8"):(function(v){var p,y,m,b,k,x=v.length,C=0;for(b=0;b<x;b++)(64512&(y=v.charCodeAt(b)))==55296&&b+1<x&&(64512&(m=v.charCodeAt(b+1)))==56320&&(y=65536+(y-55296<<10)+(m-56320),b++),C+=y<128?1:y<2048?2:y<65536?3:4;for(p=o.uint8array?new Uint8Array(C):new Array(C),b=k=0;k<C;b++)(64512&(y=v.charCodeAt(b)))==55296&&b+1<x&&(64512&(m=v.charCodeAt(b+1)))==56320&&(y=65536+(y-55296<<10)+(m-56320),b++),y<128?p[k++]=y:(y<2048?p[k++]=192|y>>>6:(y<65536?p[k++]=224|y>>>12:(p[k++]=240|y>>>18,p[k++]=128|y>>>12&63),p[k++]=128|y>>>6&63),p[k++]=128|63&y);return p})(u)},n.utf8decode=function(u){return o.nodebuffer?r.transformTo("nodebuffer",u).toString("utf-8"):(function(v){var p,y,m,b,k=v.length,x=new Array(2*k);for(p=y=0;p<k;)if((m=v[p++])<128)x[y++]=m;else if(4<(b=c[m]))x[y++]=65533,p+=b-1;else{for(m&=b===2?31:b===3?15:7;1<b&&p<k;)m=m<<6|63&v[p++],b--;1<b?x[y++]=65533:m<65536?x[y++]=m:(m-=65536,x[y++]=55296|m>>10&1023,x[y++]=56320|1023&m)}return x.length!==y&&(x.subarray?x=x.subarray(0,y):x.length=y),r.applyFromCharCode(x)})(u=r.transformTo(o.uint8array?"uint8array":"array",u))},r.inherits(h,l),h.prototype.processChunk=function(u){var v=r.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var p=v;(v=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),v.set(p,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var y=(function(b,k){var x;for((k=k||b.length)>b.length&&(k=b.length),x=k-1;0<=x&&(192&b[x])==128;)x--;return x<0||x===0?k:x+c[b[x]]>k?x:k})(v),m=v;y!==v.length&&(o.uint8array?(m=v.subarray(0,y),this.leftOver=v.subarray(y,v.length)):(m=v.slice(0,y),this.leftOver=v.slice(y,v.length))),this.push({data:n.utf8decode(m),meta:u.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=h,r.inherits(d,l),d.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,n){var r=i("./support"),o=i("./base64"),s=i("./nodejsUtils"),l=i("./external");function c(p){return p}function f(p,y){for(var m=0;m<p.length;++m)y[m]=255&p.charCodeAt(m);return y}i("setimmediate"),n.newBlob=function(p,y){n.checkSupport("blob");try{return new Blob([p],{type:y})}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return m.append(p),m.getBlob(y)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(p,y,m){var b=[],k=0,x=p.length;if(x<=m)return String.fromCharCode.apply(null,p);for(;k<x;)y==="array"||y==="nodebuffer"?b.push(String.fromCharCode.apply(null,p.slice(k,Math.min(k+m,x)))):b.push(String.fromCharCode.apply(null,p.subarray(k,Math.min(k+m,x)))),k+=m;return b.join("")},stringifyByChar:function(p){for(var y="",m=0;m<p.length;m++)y+=String.fromCharCode(p[m]);return y},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function d(p){var y=65536,m=n.getTypeOf(p),b=!0;if(m==="uint8array"?b=h.applyCanBeUsed.uint8array:m==="nodebuffer"&&(b=h.applyCanBeUsed.nodebuffer),b)for(;1<y;)try{return h.stringifyByChunk(p,m,y)}catch{y=Math.floor(y/2)}return h.stringifyByChar(p)}function u(p,y){for(var m=0;m<p.length;m++)y[m]=p[m];return y}n.applyFromCharCode=d;var v={};v.string={string:c,array:function(p){return f(p,new Array(p.length))},arraybuffer:function(p){return v.string.uint8array(p).buffer},uint8array:function(p){return f(p,new Uint8Array(p.length))},nodebuffer:function(p){return f(p,s.allocBuffer(p.length))}},v.array={string:d,array:c,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return s.newBufferFrom(p)}},v.arraybuffer={string:function(p){return d(new Uint8Array(p))},array:function(p){return u(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:c,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return s.newBufferFrom(new Uint8Array(p))}},v.uint8array={string:d,array:function(p){return u(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:c,nodebuffer:function(p){return s.newBufferFrom(p)}},v.nodebuffer={string:d,array:function(p){return u(p,new Array(p.length))},arraybuffer:function(p){return v.nodebuffer.uint8array(p).buffer},uint8array:function(p){return u(p,new Uint8Array(p.length))},nodebuffer:c},n.transformTo=function(p,y){if(y=y||"",!p)return y;n.checkSupport(p);var m=n.getTypeOf(y);return v[m][p](y)},n.resolve=function(p){for(var y=p.split("/"),m=[],b=0;b<y.length;b++){var k=y[b];k==="."||k===""&&b!==0&&b!==y.length-1||(k===".."?m.pop():m.push(k))}return m.join("/")},n.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":r.nodebuffer&&s.isBuffer(p)?"nodebuffer":r.uint8array&&p instanceof Uint8Array?"uint8array":r.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(p){if(!r[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(p){var y,m,b="";for(m=0;m<(p||"").length;m++)b+="\\x"+((y=p.charCodeAt(m))<16?"0":"")+y.toString(16).toUpperCase();return b},n.delay=function(p,y,m){setImmediate(function(){p.apply(m||null,y||[])})},n.inherits=function(p,y){function m(){}m.prototype=y.prototype,p.prototype=new m},n.extend=function(){var p,y,m={};for(p=0;p<arguments.length;p++)for(y in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],y)&&m[y]===void 0&&(m[y]=arguments[p][y]);return m},n.prepareContent=function(p,y,m,b,k){return l.Promise.resolve(y).then(function(x){return r.blob&&(x instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(x))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,I){var P=new FileReader;P.onload=function(z){C(z.target.result)},P.onerror=function(z){I(z.target.error)},P.readAsArrayBuffer(x)}):x}).then(function(x){var C=n.getTypeOf(x);return C?(C==="arraybuffer"?x=n.transformTo("uint8array",x):C==="string"&&(k?x=o.decode(x):m&&b!==!0&&(x=(function(I){return f(I,r.uint8array?new Uint8Array(I.length):new Array(I.length))})(x))),x):l.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,n){var r=i("./reader/readerFor"),o=i("./utils"),s=i("./signature"),l=i("./zipEntry"),c=i("./support");function f(h){this.files=[],this.loadOptions=h}f.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(d)+", expected "+o.pretty(h)+")")}},isSignature:function(h,d){var u=this.reader.index;this.reader.setIndex(h);var v=this.reader.readString(4)===d;return this.reader.setIndex(u),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),d=c.uint8array?"uint8array":"array",u=o.transformTo(d,h);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,d,u,v=this.zip64EndOfCentralSize-44;0<v;)h=this.reader.readInt(2),d=this.reader.readInt(4),u=this.reader.readData(d),this.zip64ExtensibleData[h]={id:h,length:d,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,d;for(h=0;h<this.files.length;h++)d=this.files[h],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var d=h;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var v=d-u;if(0<v)this.isSignature(d,s.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(h){this.reader=r(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,n){var r=i("./reader/readerFor"),o=i("./utils"),s=i("./compressedObject"),l=i("./crc32"),c=i("./utf8"),f=i("./compressions"),h=i("./support");function d(u,v){this.options=u,this.loadOptions=v}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var v,p;if(u.skip(22),this.fileNameLength=u.readInt(2),p=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(y){for(var m in f)if(Object.prototype.hasOwnProperty.call(f,m)&&f[m].magic===y)return f[m];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,v,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var v=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(v),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=r(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var v,p,y,m=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<m;)v=u.readInt(2),p=u.readInt(2),y=u.readData(p),this.extraFields[v]={id:v,length:p,value:y};u.setIndex(m)},handleUTF8:function(){var u=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var p=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var m=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(m)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var v=r(u.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:c.utf8decode(v.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var v=r(u.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:c.utf8decode(v.readData(u.length-5))}return null}},a.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,n){function r(v,p,y){this.name=v,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=p,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var o=i("./stream/StreamHelper"),s=i("./stream/DataWorker"),l=i("./utf8"),c=i("./compressedObject"),f=i("./stream/GenericWorker");r.prototype={internalStream:function(v){var p=null,y="string";try{if(!v)throw new Error("No output type specified.");var m=(y=v.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),p=this._decompressWorker();var b=!this._dataBinary;b&&!m&&(p=p.pipe(new l.Utf8EncodeWorker)),!b&&m&&(p=p.pipe(new l.Utf8DecodeWorker))}catch(k){(p=new f("error")).error(k)}return new o(p,y,"")},async:function(v,p){return this.internalStream(v).accumulate(p)},nodeStream:function(v,p){return this.internalStream(v||"nodebuffer").toNodejsStream(p)},_compressWorker:function(v,p){if(this._data instanceof c&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(y,v,p)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new s(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<h.length;u++)r.prototype[h[u]]=d;a.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,n){(function(r){var o,s,l=r.MutationObserver||r.WebKitMutationObserver;if(l){var c=0,f=new l(v),h=r.document.createTextNode("");f.observe(h,{characterData:!0}),o=function(){h.data=c=++c%2}}else if(r.setImmediate||r.MessageChannel===void 0)o="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var p=r.document.createElement("script");p.onreadystatechange=function(){v(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},r.document.documentElement.appendChild(p)}:function(){setTimeout(v,0)};else{var d=new r.MessageChannel;d.port1.onmessage=v,o=function(){d.port2.postMessage(0)}}var u=[];function v(){var p,y;s=!0;for(var m=u.length;m;){for(y=u,u=[],p=-1;++p<m;)y[p]();m=u.length}s=!1}a.exports=function(p){u.push(p)!==1||s||o()}}).call(this,typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,n){var r=i("immediate");function o(){}var s={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function h(m){if(typeof m!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,m!==o&&p(this,m)}function d(m,b,k){this.promise=m,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof k=="function"&&(this.onRejected=k,this.callRejected=this.otherCallRejected)}function u(m,b,k){r(function(){var x;try{x=b(k)}catch(C){return s.reject(m,C)}x===m?s.reject(m,new TypeError("Cannot resolve promise with itself")):s.resolve(m,x)})}function v(m){var b=m&&m.then;if(m&&(typeof m=="object"||typeof m=="function")&&typeof b=="function")return function(){b.apply(m,arguments)}}function p(m,b){var k=!1;function x(P){k||(k=!0,s.reject(m,P))}function C(P){k||(k=!0,s.resolve(m,P))}var I=y(function(){b(C,x)});I.status==="error"&&x(I.value)}function y(m,b){var k={};try{k.value=m(b),k.status="success"}catch(x){k.status="error",k.value=x}return k}(a.exports=h).prototype.finally=function(m){if(typeof m!="function")return this;var b=this.constructor;return this.then(function(k){return b.resolve(m()).then(function(){return k})},function(k){return b.resolve(m()).then(function(){throw k})})},h.prototype.catch=function(m){return this.then(null,m)},h.prototype.then=function(m,b){if(typeof m!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var k=new this.constructor(o);return this.state!==f?u(k,this.state===c?m:b,this.outcome):this.queue.push(new d(k,m,b)),k},d.prototype.callFulfilled=function(m){s.resolve(this.promise,m)},d.prototype.otherCallFulfilled=function(m){u(this.promise,this.onFulfilled,m)},d.prototype.callRejected=function(m){s.reject(this.promise,m)},d.prototype.otherCallRejected=function(m){u(this.promise,this.onRejected,m)},s.resolve=function(m,b){var k=y(v,b);if(k.status==="error")return s.reject(m,k.value);var x=k.value;if(x)p(m,x);else{m.state=c,m.outcome=b;for(var C=-1,I=m.queue.length;++C<I;)m.queue[C].callFulfilled(b)}return m},s.reject=function(m,b){m.state=l,m.outcome=b;for(var k=-1,x=m.queue.length;++k<x;)m.queue[k].callRejected(b);return m},h.resolve=function(m){return m instanceof this?m:s.resolve(new this(o),m)},h.reject=function(m){var b=new this(o);return s.reject(b,m)},h.all=function(m){var b=this;if(Object.prototype.toString.call(m)!=="[object Array]")return this.reject(new TypeError("must be an array"));var k=m.length,x=!1;if(!k)return this.resolve([]);for(var C=new Array(k),I=0,P=-1,z=new this(o);++P<k;)A(m[P],P);return z;function A(U,G){b.resolve(U).then(function(T){C[G]=T,++I!==k||x||(x=!0,s.resolve(z,C))},function(T){x||(x=!0,s.reject(z,T))})}},h.race=function(m){var b=this;if(Object.prototype.toString.call(m)!=="[object Array]")return this.reject(new TypeError("must be an array"));var k=m.length,x=!1;if(!k)return this.resolve([]);for(var C=-1,I=new this(o);++C<k;)P=m[C],b.resolve(P).then(function(z){x||(x=!0,s.resolve(I,z))},function(z){x||(x=!0,s.reject(I,z))});var P;return I}},{immediate:36}],38:[function(i,a,n){var r={};(0,i("./lib/utils/common").assign)(r,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,n){var r=i("./zlib/deflate"),o=i("./utils/common"),s=i("./utils/strings"),l=i("./zlib/messages"),c=i("./zlib/zstream"),f=Object.prototype.toString,h=0,d=-1,u=0,v=8;function p(m){if(!(this instanceof p))return new p(m);this.options=o.assign({level:d,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},m||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var k=r.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(k!==h)throw new Error(l[k]);if(b.header&&r.deflateSetHeader(this.strm,b.header),b.dictionary){var x;if(x=typeof b.dictionary=="string"?s.string2buf(b.dictionary):f.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(k=r.deflateSetDictionary(this.strm,x))!==h)throw new Error(l[k]);this._dict_set=!0}}function y(m,b){var k=new p(b);if(k.push(m,!0),k.err)throw k.msg||l[k.err];return k.result}p.prototype.push=function(m,b){var k,x,C=this.strm,I=this.options.chunkSize;if(this.ended)return!1;x=b===~~b?b:b===!0?4:0,typeof m=="string"?C.input=s.string2buf(m):f.call(m)==="[object ArrayBuffer]"?C.input=new Uint8Array(m):C.input=m,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(I),C.next_out=0,C.avail_out=I),(k=r.deflate(C,x))!==1&&k!==h)return this.onEnd(k),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||x!==4&&x!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&k!==1);return x===4?(k=r.deflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===h):x!==2||(this.onEnd(h),!(C.avail_out=0))},p.prototype.onData=function(m){this.chunks.push(m)},p.prototype.onEnd=function(m){m===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},n.Deflate=p,n.deflate=y,n.deflateRaw=function(m,b){return(b=b||{}).raw=!0,y(m,b)},n.gzip=function(m,b){return(b=b||{}).gzip=!0,y(m,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,n){var r=i("./zlib/inflate"),o=i("./utils/common"),s=i("./utils/strings"),l=i("./zlib/constants"),c=i("./zlib/messages"),f=i("./zlib/zstream"),h=i("./zlib/gzheader"),d=Object.prototype.toString;function u(p){if(!(this instanceof u))return new u(p);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},p||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||p&&p.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var m=r.inflateInit2(this.strm,y.windowBits);if(m!==l.Z_OK)throw new Error(c[m]);this.header=new h,r.inflateGetHeader(this.strm,this.header)}function v(p,y){var m=new u(y);if(m.push(p,!0),m.err)throw m.msg||c[m.err];return m.result}u.prototype.push=function(p,y){var m,b,k,x,C,I,P=this.strm,z=this.options.chunkSize,A=this.options.dictionary,U=!1;if(this.ended)return!1;b=y===~~y?y:y===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof p=="string"?P.input=s.binstring2buf(p):d.call(p)==="[object ArrayBuffer]"?P.input=new Uint8Array(p):P.input=p,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new o.Buf8(z),P.next_out=0,P.avail_out=z),(m=r.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&A&&(I=typeof A=="string"?s.string2buf(A):d.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,m=r.inflateSetDictionary(this.strm,I)),m===l.Z_BUF_ERROR&&U===!0&&(m=l.Z_OK,U=!1),m!==l.Z_STREAM_END&&m!==l.Z_OK)return this.onEnd(m),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&m!==l.Z_STREAM_END&&(P.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(k=s.utf8border(P.output,P.next_out),x=P.next_out-k,C=s.buf2string(P.output,k),P.next_out=x,P.avail_out=z-x,x&&o.arraySet(P.output,P.output,k,x,0),this.onData(C)):this.onData(o.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(U=!0)}while((0<P.avail_in||P.avail_out===0)&&m!==l.Z_STREAM_END);return m===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(m=r.inflateEnd(this.strm),this.onEnd(m),this.ended=!0,m===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},u.prototype.onData=function(p){this.chunks.push(p)},u.prototype.onEnd=function(p){p===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},n.Inflate=u,n.inflate=v,n.inflateRaw=function(p,y){return(y=y||{}).raw=!0,v(p,y)},n.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var h in f)f.hasOwnProperty(h)&&(l[h]=f[h])}}return l},n.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,f,h,d){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+h),d);else for(var u=0;u<h;u++)l[d+u]=c[f+u]},flattenChunks:function(l){var c,f,h,d,u,v;for(c=h=0,f=l.length;c<f;c++)h+=l[c].length;for(v=new Uint8Array(h),c=d=0,f=l.length;c<f;c++)u=l[c],v.set(u,d),d+=u.length;return v}},s={arraySet:function(l,c,f,h,d){for(var u=0;u<h;u++)l[d+u]=c[f+u]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,s))},n.setTyped(r)},{}],42:[function(i,a,n){var r=i("./common"),o=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new r.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(h,d){if(d<65537&&(h.subarray&&s||!h.subarray&&o))return String.fromCharCode.apply(null,r.shrinkBuf(h,d));for(var u="",v=0;v<d;v++)u+=String.fromCharCode(h[v]);return u}l[254]=l[254]=1,n.string2buf=function(h){var d,u,v,p,y,m=h.length,b=0;for(p=0;p<m;p++)(64512&(u=h.charCodeAt(p)))==55296&&p+1<m&&(64512&(v=h.charCodeAt(p+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),p++),b+=u<128?1:u<2048?2:u<65536?3:4;for(d=new r.Buf8(b),p=y=0;y<b;p++)(64512&(u=h.charCodeAt(p)))==55296&&p+1<m&&(64512&(v=h.charCodeAt(p+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),p++),u<128?d[y++]=u:(u<2048?d[y++]=192|u>>>6:(u<65536?d[y++]=224|u>>>12:(d[y++]=240|u>>>18,d[y++]=128|u>>>12&63),d[y++]=128|u>>>6&63),d[y++]=128|63&u);return d},n.buf2binstring=function(h){return f(h,h.length)},n.binstring2buf=function(h){for(var d=new r.Buf8(h.length),u=0,v=d.length;u<v;u++)d[u]=h.charCodeAt(u);return d},n.buf2string=function(h,d){var u,v,p,y,m=d||h.length,b=new Array(2*m);for(u=v=0;u<m;)if((p=h[u++])<128)b[v++]=p;else if(4<(y=l[p]))b[v++]=65533,u+=y-1;else{for(p&=y===2?31:y===3?15:7;1<y&&u<m;)p=p<<6|63&h[u++],y--;1<y?b[v++]=65533:p<65536?b[v++]=p:(p-=65536,b[v++]=55296|p>>10&1023,b[v++]=56320|1023&p)}return f(b,v)},n.utf8border=function(h,d){var u;for((d=d||h.length)>h.length&&(d=h.length),u=d-1;0<=u&&(192&h[u])==128;)u--;return u<0||u===0?d:u+l[h[u]]>d?u:d}},{"./common":41}],43:[function(i,a,n){a.exports=function(r,o,s,l){for(var c=65535&r|0,f=r>>>16&65535|0,h=0;s!==0;){for(s-=h=2e3<s?2e3:s;f=f+(c=c+o[l++]|0)|0,--h;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(i,a,n){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,n){var r=(function(){for(var o,s=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;s[l]=o}return s})();a.exports=function(o,s,l,c){var f=r,h=c+l;o^=-1;for(var d=c;d<h;d++)o=o>>>8^f[255&(o^s[d])];return-1^o}},{}],46:[function(i,a,n){var r,o=i("../utils/common"),s=i("./trees"),l=i("./adler32"),c=i("./crc32"),f=i("./messages"),h=0,d=4,u=0,v=-2,p=-1,y=4,m=2,b=8,k=9,x=286,C=30,I=19,P=2*x+1,z=15,A=3,U=258,G=U+A+1,T=42,B=113,w=1,L=2,J=3,W=4;function se(g,q){return g.msg=f[q],q}function V(g){return(g<<1)-(4<g?9:0)}function oe(g){for(var q=g.length;0<=--q;)g[q]=0}function O(g){var q=g.state,H=q.pending;H>g.avail_out&&(H=g.avail_out),H!==0&&(o.arraySet(g.output,q.pending_buf,q.pending_out,H,g.next_out),g.next_out+=H,q.pending_out+=H,g.total_out+=H,g.avail_out-=H,q.pending-=H,q.pending===0&&(q.pending_out=0))}function F(g,q){s._tr_flush_block(g,0<=g.block_start?g.block_start:-1,g.strstart-g.block_start,q),g.block_start=g.strstart,O(g.strm)}function re(g,q){g.pending_buf[g.pending++]=q}function ee(g,q){g.pending_buf[g.pending++]=q>>>8&255,g.pending_buf[g.pending++]=255&q}function Y(g,q){var H,S,_=g.max_chain_length,M=g.strstart,D=g.prev_length,$=g.nice_match,R=g.strstart>g.w_size-G?g.strstart-(g.w_size-G):0,K=g.window,te=g.w_mask,Z=g.prev,ne=g.strstart+U,pe=K[M+D-1],ue=K[M+D];g.prev_length>=g.good_match&&(_>>=2),$>g.lookahead&&($=g.lookahead);do if(K[(H=q)+D]===ue&&K[H+D-1]===pe&&K[H]===K[M]&&K[++H]===K[M+1]){M+=2,H++;do;while(K[++M]===K[++H]&&K[++M]===K[++H]&&K[++M]===K[++H]&&K[++M]===K[++H]&&K[++M]===K[++H]&&K[++M]===K[++H]&&K[++M]===K[++H]&&K[++M]===K[++H]&&M<ne);if(S=U-(ne-M),M=ne-U,D<S){if(g.match_start=q,$<=(D=S))break;pe=K[M+D-1],ue=K[M+D]}}while((q=Z[q&te])>R&&--_!=0);return D<=g.lookahead?D:g.lookahead}function we(g){var q,H,S,_,M,D,$,R,K,te,Z=g.w_size;do{if(_=g.window_size-g.lookahead-g.strstart,g.strstart>=Z+(Z-G)){for(o.arraySet(g.window,g.window,Z,Z,0),g.match_start-=Z,g.strstart-=Z,g.block_start-=Z,q=H=g.hash_size;S=g.head[--q],g.head[q]=Z<=S?S-Z:0,--H;);for(q=H=Z;S=g.prev[--q],g.prev[q]=Z<=S?S-Z:0,--H;);_+=Z}if(g.strm.avail_in===0)break;if(D=g.strm,$=g.window,R=g.strstart+g.lookahead,K=_,te=void 0,te=D.avail_in,K<te&&(te=K),H=te===0?0:(D.avail_in-=te,o.arraySet($,D.input,D.next_in,te,R),D.state.wrap===1?D.adler=l(D.adler,$,te,R):D.state.wrap===2&&(D.adler=c(D.adler,$,te,R)),D.next_in+=te,D.total_in+=te,te),g.lookahead+=H,g.lookahead+g.insert>=A)for(M=g.strstart-g.insert,g.ins_h=g.window[M],g.ins_h=(g.ins_h<<g.hash_shift^g.window[M+1])&g.hash_mask;g.insert&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[M+A-1])&g.hash_mask,g.prev[M&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=M,M++,g.insert--,!(g.lookahead+g.insert<A)););}while(g.lookahead<G&&g.strm.avail_in!==0)}function Pe(g,q){for(var H,S;;){if(g.lookahead<G){if(we(g),g.lookahead<G&&q===h)return w;if(g.lookahead===0)break}if(H=0,g.lookahead>=A&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),H!==0&&g.strstart-H<=g.w_size-G&&(g.match_length=Y(g,H)),g.match_length>=A)if(S=s._tr_tally(g,g.strstart-g.match_start,g.match_length-A),g.lookahead-=g.match_length,g.match_length<=g.max_lazy_match&&g.lookahead>=A){for(g.match_length--;g.strstart++,g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart,--g.match_length!=0;);g.strstart++}else g.strstart+=g.match_length,g.match_length=0,g.ins_h=g.window[g.strstart],g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+1])&g.hash_mask;else S=s._tr_tally(g,0,g.window[g.strstart]),g.lookahead--,g.strstart++;if(S&&(F(g,!1),g.strm.avail_out===0))return w}return g.insert=g.strstart<A-1?g.strstart:A-1,q===d?(F(g,!0),g.strm.avail_out===0?J:W):g.last_lit&&(F(g,!1),g.strm.avail_out===0)?w:L}function fe(g,q){for(var H,S,_;;){if(g.lookahead<G){if(we(g),g.lookahead<G&&q===h)return w;if(g.lookahead===0)break}if(H=0,g.lookahead>=A&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=A-1,H!==0&&g.prev_length<g.max_lazy_match&&g.strstart-H<=g.w_size-G&&(g.match_length=Y(g,H),g.match_length<=5&&(g.strategy===1||g.match_length===A&&4096<g.strstart-g.match_start)&&(g.match_length=A-1)),g.prev_length>=A&&g.match_length<=g.prev_length){for(_=g.strstart+g.lookahead-A,S=s._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-A),g.lookahead-=g.prev_length-1,g.prev_length-=2;++g.strstart<=_&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),--g.prev_length!=0;);if(g.match_available=0,g.match_length=A-1,g.strstart++,S&&(F(g,!1),g.strm.avail_out===0))return w}else if(g.match_available){if((S=s._tr_tally(g,0,g.window[g.strstart-1]))&&F(g,!1),g.strstart++,g.lookahead--,g.strm.avail_out===0)return w}else g.match_available=1,g.strstart++,g.lookahead--}return g.match_available&&(S=s._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<A-1?g.strstart:A-1,q===d?(F(g,!0),g.strm.avail_out===0?J:W):g.last_lit&&(F(g,!1),g.strm.avail_out===0)?w:L}function de(g,q,H,S,_){this.good_length=g,this.max_lazy=q,this.nice_length=H,this.max_chain=S,this.func=_}function Ce(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*P),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*I+1)),oe(this.dyn_ltree),oe(this.dyn_dtree),oe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(z+1),this.heap=new o.Buf16(2*x+1),oe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*x+1),oe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(g){var q;return g&&g.state?(g.total_in=g.total_out=0,g.data_type=m,(q=g.state).pending=0,q.pending_out=0,q.wrap<0&&(q.wrap=-q.wrap),q.status=q.wrap?T:B,g.adler=q.wrap===2?0:1,q.last_flush=h,s._tr_init(q),u):se(g,v)}function lt(g){var q=ke(g);return q===u&&(function(H){H.window_size=2*H.w_size,oe(H.head),H.max_lazy_match=r[H.level].max_lazy,H.good_match=r[H.level].good_length,H.nice_match=r[H.level].nice_length,H.max_chain_length=r[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=A-1,H.match_available=0,H.ins_h=0})(g.state),q}function Ze(g,q,H,S,_,M){if(!g)return v;var D=1;if(q===p&&(q=6),S<0?(D=0,S=-S):15<S&&(D=2,S-=16),_<1||k<_||H!==b||S<8||15<S||q<0||9<q||M<0||y<M)return se(g,v);S===8&&(S=9);var $=new Ce;return(g.state=$).strm=g,$.wrap=D,$.gzhead=null,$.w_bits=S,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=_+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+A-1)/A),$.window=new o.Buf8(2*$.w_size),$.head=new o.Buf16($.hash_size),$.prev=new o.Buf16($.w_size),$.lit_bufsize=1<<_+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new o.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=q,$.strategy=M,$.method=H,lt(g)}r=[new de(0,0,0,0,function(g,q){var H=65535;for(H>g.pending_buf_size-5&&(H=g.pending_buf_size-5);;){if(g.lookahead<=1){if(we(g),g.lookahead===0&&q===h)return w;if(g.lookahead===0)break}g.strstart+=g.lookahead,g.lookahead=0;var S=g.block_start+H;if((g.strstart===0||g.strstart>=S)&&(g.lookahead=g.strstart-S,g.strstart=S,F(g,!1),g.strm.avail_out===0)||g.strstart-g.block_start>=g.w_size-G&&(F(g,!1),g.strm.avail_out===0))return w}return g.insert=0,q===d?(F(g,!0),g.strm.avail_out===0?J:W):(g.strstart>g.block_start&&(F(g,!1),g.strm.avail_out),w)}),new de(4,4,8,4,Pe),new de(4,5,16,8,Pe),new de(4,6,32,32,Pe),new de(4,4,16,16,fe),new de(8,16,32,32,fe),new de(8,16,128,128,fe),new de(8,32,128,256,fe),new de(32,128,258,1024,fe),new de(32,258,258,4096,fe)],n.deflateInit=function(g,q){return Ze(g,q,b,15,8,0)},n.deflateInit2=Ze,n.deflateReset=lt,n.deflateResetKeep=ke,n.deflateSetHeader=function(g,q){return g&&g.state?g.state.wrap!==2?v:(g.state.gzhead=q,u):v},n.deflate=function(g,q){var H,S,_,M;if(!g||!g.state||5<q||q<0)return g?se(g,v):v;if(S=g.state,!g.output||!g.input&&g.avail_in!==0||S.status===666&&q!==d)return se(g,g.avail_out===0?-5:v);if(S.strm=g,H=S.last_flush,S.last_flush=q,S.status===T)if(S.wrap===2)g.adler=0,re(S,31),re(S,139),re(S,8),S.gzhead?(re(S,(S.gzhead.text?1:0)+(S.gzhead.hcrc?2:0)+(S.gzhead.extra?4:0)+(S.gzhead.name?8:0)+(S.gzhead.comment?16:0)),re(S,255&S.gzhead.time),re(S,S.gzhead.time>>8&255),re(S,S.gzhead.time>>16&255),re(S,S.gzhead.time>>24&255),re(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),re(S,255&S.gzhead.os),S.gzhead.extra&&S.gzhead.extra.length&&(re(S,255&S.gzhead.extra.length),re(S,S.gzhead.extra.length>>8&255)),S.gzhead.hcrc&&(g.adler=c(g.adler,S.pending_buf,S.pending,0)),S.gzindex=0,S.status=69):(re(S,0),re(S,0),re(S,0),re(S,0),re(S,0),re(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),re(S,3),S.status=B);else{var D=b+(S.w_bits-8<<4)<<8;D|=(2<=S.strategy||S.level<2?0:S.level<6?1:S.level===6?2:3)<<6,S.strstart!==0&&(D|=32),D+=31-D%31,S.status=B,ee(S,D),S.strstart!==0&&(ee(S,g.adler>>>16),ee(S,65535&g.adler)),g.adler=1}if(S.status===69)if(S.gzhead.extra){for(_=S.pending;S.gzindex<(65535&S.gzhead.extra.length)&&(S.pending!==S.pending_buf_size||(S.gzhead.hcrc&&S.pending>_&&(g.adler=c(g.adler,S.pending_buf,S.pending-_,_)),O(g),_=S.pending,S.pending!==S.pending_buf_size));)re(S,255&S.gzhead.extra[S.gzindex]),S.gzindex++;S.gzhead.hcrc&&S.pending>_&&(g.adler=c(g.adler,S.pending_buf,S.pending-_,_)),S.gzindex===S.gzhead.extra.length&&(S.gzindex=0,S.status=73)}else S.status=73;if(S.status===73)if(S.gzhead.name){_=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>_&&(g.adler=c(g.adler,S.pending_buf,S.pending-_,_)),O(g),_=S.pending,S.pending===S.pending_buf_size)){M=1;break}M=S.gzindex<S.gzhead.name.length?255&S.gzhead.name.charCodeAt(S.gzindex++):0,re(S,M)}while(M!==0);S.gzhead.hcrc&&S.pending>_&&(g.adler=c(g.adler,S.pending_buf,S.pending-_,_)),M===0&&(S.gzindex=0,S.status=91)}else S.status=91;if(S.status===91)if(S.gzhead.comment){_=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>_&&(g.adler=c(g.adler,S.pending_buf,S.pending-_,_)),O(g),_=S.pending,S.pending===S.pending_buf_size)){M=1;break}M=S.gzindex<S.gzhead.comment.length?255&S.gzhead.comment.charCodeAt(S.gzindex++):0,re(S,M)}while(M!==0);S.gzhead.hcrc&&S.pending>_&&(g.adler=c(g.adler,S.pending_buf,S.pending-_,_)),M===0&&(S.status=103)}else S.status=103;if(S.status===103&&(S.gzhead.hcrc?(S.pending+2>S.pending_buf_size&&O(g),S.pending+2<=S.pending_buf_size&&(re(S,255&g.adler),re(S,g.adler>>8&255),g.adler=0,S.status=B)):S.status=B),S.pending!==0){if(O(g),g.avail_out===0)return S.last_flush=-1,u}else if(g.avail_in===0&&V(q)<=V(H)&&q!==d)return se(g,-5);if(S.status===666&&g.avail_in!==0)return se(g,-5);if(g.avail_in!==0||S.lookahead!==0||q!==h&&S.status!==666){var $=S.strategy===2?(function(R,K){for(var te;;){if(R.lookahead===0&&(we(R),R.lookahead===0)){if(K===h)return w;break}if(R.match_length=0,te=s._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,te&&(F(R,!1),R.strm.avail_out===0))return w}return R.insert=0,K===d?(F(R,!0),R.strm.avail_out===0?J:W):R.last_lit&&(F(R,!1),R.strm.avail_out===0)?w:L})(S,q):S.strategy===3?(function(R,K){for(var te,Z,ne,pe,ue=R.window;;){if(R.lookahead<=U){if(we(R),R.lookahead<=U&&K===h)return w;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=A&&0<R.strstart&&(Z=ue[ne=R.strstart-1])===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]){pe=R.strstart+U;do;while(Z===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]&&Z===ue[++ne]&&ne<pe);R.match_length=U-(pe-ne),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=A?(te=s._tr_tally(R,1,R.match_length-A),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(te=s._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),te&&(F(R,!1),R.strm.avail_out===0))return w}return R.insert=0,K===d?(F(R,!0),R.strm.avail_out===0?J:W):R.last_lit&&(F(R,!1),R.strm.avail_out===0)?w:L})(S,q):r[S.level].func(S,q);if($!==J&&$!==W||(S.status=666),$===w||$===J)return g.avail_out===0&&(S.last_flush=-1),u;if($===L&&(q===1?s._tr_align(S):q!==5&&(s._tr_stored_block(S,0,0,!1),q===3&&(oe(S.head),S.lookahead===0&&(S.strstart=0,S.block_start=0,S.insert=0))),O(g),g.avail_out===0))return S.last_flush=-1,u}return q!==d?u:S.wrap<=0?1:(S.wrap===2?(re(S,255&g.adler),re(S,g.adler>>8&255),re(S,g.adler>>16&255),re(S,g.adler>>24&255),re(S,255&g.total_in),re(S,g.total_in>>8&255),re(S,g.total_in>>16&255),re(S,g.total_in>>24&255)):(ee(S,g.adler>>>16),ee(S,65535&g.adler)),O(g),0<S.wrap&&(S.wrap=-S.wrap),S.pending!==0?u:1)},n.deflateEnd=function(g){var q;return g&&g.state?(q=g.state.status)!==T&&q!==69&&q!==73&&q!==91&&q!==103&&q!==B&&q!==666?se(g,v):(g.state=null,q===B?se(g,-3):u):v},n.deflateSetDictionary=function(g,q){var H,S,_,M,D,$,R,K,te=q.length;if(!g||!g.state||(M=(H=g.state).wrap)===2||M===1&&H.status!==T||H.lookahead)return v;for(M===1&&(g.adler=l(g.adler,q,te,0)),H.wrap=0,te>=H.w_size&&(M===0&&(oe(H.head),H.strstart=0,H.block_start=0,H.insert=0),K=new o.Buf8(H.w_size),o.arraySet(K,q,te-H.w_size,H.w_size,0),q=K,te=H.w_size),D=g.avail_in,$=g.next_in,R=g.input,g.avail_in=te,g.next_in=0,g.input=q,we(H);H.lookahead>=A;){for(S=H.strstart,_=H.lookahead-(A-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[S+A-1])&H.hash_mask,H.prev[S&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=S,S++,--_;);H.strstart=S,H.lookahead=A-1,we(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=A-1,H.match_available=0,g.next_in=$,g.input=R,g.avail_in=D,H.wrap=M,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,n){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,n){a.exports=function(r,o){var s,l,c,f,h,d,u,v,p,y,m,b,k,x,C,I,P,z,A,U,G,T,B,w,L;s=r.state,l=r.next_in,w=r.input,c=l+(r.avail_in-5),f=r.next_out,L=r.output,h=f-(o-r.avail_out),d=f+(r.avail_out-257),u=s.dmax,v=s.wsize,p=s.whave,y=s.wnext,m=s.window,b=s.hold,k=s.bits,x=s.lencode,C=s.distcode,I=(1<<s.lenbits)-1,P=(1<<s.distbits)-1;e:do{k<15&&(b+=w[l++]<<k,k+=8,b+=w[l++]<<k,k+=8),z=x[b&I];t:for(;;){if(b>>>=A=z>>>24,k-=A,(A=z>>>16&255)===0)L[f++]=65535&z;else{if(!(16&A)){if((64&A)==0){z=x[(65535&z)+(b&(1<<A)-1)];continue t}if(32&A){s.mode=12;break e}r.msg="invalid literal/length code",s.mode=30;break e}U=65535&z,(A&=15)&&(k<A&&(b+=w[l++]<<k,k+=8),U+=b&(1<<A)-1,b>>>=A,k-=A),k<15&&(b+=w[l++]<<k,k+=8,b+=w[l++]<<k,k+=8),z=C[b&P];i:for(;;){if(b>>>=A=z>>>24,k-=A,!(16&(A=z>>>16&255))){if((64&A)==0){z=C[(65535&z)+(b&(1<<A)-1)];continue i}r.msg="invalid distance code",s.mode=30;break e}if(G=65535&z,k<(A&=15)&&(b+=w[l++]<<k,(k+=8)<A&&(b+=w[l++]<<k,k+=8)),u<(G+=b&(1<<A)-1)){r.msg="invalid distance too far back",s.mode=30;break e}if(b>>>=A,k-=A,(A=f-h)<G){if(p<(A=G-A)&&s.sane){r.msg="invalid distance too far back",s.mode=30;break e}if(B=m,(T=0)===y){if(T+=v-A,A<U){for(U-=A;L[f++]=m[T++],--A;);T=f-G,B=L}}else if(y<A){if(T+=v+y-A,(A-=y)<U){for(U-=A;L[f++]=m[T++],--A;);if(T=0,y<U){for(U-=A=y;L[f++]=m[T++],--A;);T=f-G,B=L}}}else if(T+=y-A,A<U){for(U-=A;L[f++]=m[T++],--A;);T=f-G,B=L}for(;2<U;)L[f++]=B[T++],L[f++]=B[T++],L[f++]=B[T++],U-=3;U&&(L[f++]=B[T++],1<U&&(L[f++]=B[T++]))}else{for(T=f-G;L[f++]=L[T++],L[f++]=L[T++],L[f++]=L[T++],2<(U-=3););U&&(L[f++]=L[T++],1<U&&(L[f++]=L[T++]))}break}}break}}while(l<c&&f<d);l-=U=k>>3,b&=(1<<(k-=U<<3))-1,r.next_in=l,r.next_out=f,r.avail_in=l<c?c-l+5:5-(l-c),r.avail_out=f<d?d-f+257:257-(f-d),s.hold=b,s.bits=k}},{}],49:[function(i,a,n){var r=i("../utils/common"),o=i("./adler32"),s=i("./crc32"),l=i("./inffast"),c=i("./inftrees"),f=1,h=2,d=0,u=-2,v=1,p=852,y=592;function m(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function k(T){var B;return T&&T.state?(B=T.state,T.total_in=T.total_out=B.total=0,T.msg="",B.wrap&&(T.adler=1&B.wrap),B.mode=v,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new r.Buf32(p),B.distcode=B.distdyn=new r.Buf32(y),B.sane=1,B.back=-1,d):u}function x(T){var B;return T&&T.state?((B=T.state).wsize=0,B.whave=0,B.wnext=0,k(T)):u}function C(T,B){var w,L;return T&&T.state?(L=T.state,B<0?(w=0,B=-B):(w=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?u:(L.window!==null&&L.wbits!==B&&(L.window=null),L.wrap=w,L.wbits=B,x(T))):u}function I(T,B){var w,L;return T?(L=new b,(T.state=L).window=null,(w=C(T,B))!==d&&(T.state=null),w):u}var P,z,A=!0;function U(T){if(A){var B;for(P=new r.Buf32(512),z=new r.Buf32(32),B=0;B<144;)T.lens[B++]=8;for(;B<256;)T.lens[B++]=9;for(;B<280;)T.lens[B++]=7;for(;B<288;)T.lens[B++]=8;for(c(f,T.lens,0,288,P,0,T.work,{bits:9}),B=0;B<32;)T.lens[B++]=5;c(h,T.lens,0,32,z,0,T.work,{bits:5}),A=!1}T.lencode=P,T.lenbits=9,T.distcode=z,T.distbits=5}function G(T,B,w,L){var J,W=T.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new r.Buf8(W.wsize)),L>=W.wsize?(r.arraySet(W.window,B,w-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(L<(J=W.wsize-W.wnext)&&(J=L),r.arraySet(W.window,B,w-L,J,W.wnext),(L-=J)?(r.arraySet(W.window,B,w-L,L,0),W.wnext=L,W.whave=W.wsize):(W.wnext+=J,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=J))),0}n.inflateReset=x,n.inflateReset2=C,n.inflateResetKeep=k,n.inflateInit=function(T){return I(T,15)},n.inflateInit2=I,n.inflate=function(T,B){var w,L,J,W,se,V,oe,O,F,re,ee,Y,we,Pe,fe,de,Ce,ke,lt,Ze,g,q,H,S,_=0,M=new r.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return u;(w=T.state).mode===12&&(w.mode=13),se=T.next_out,J=T.output,oe=T.avail_out,W=T.next_in,L=T.input,V=T.avail_in,O=w.hold,F=w.bits,re=V,ee=oe,q=d;e:for(;;)switch(w.mode){case v:if(w.wrap===0){w.mode=13;break}for(;F<16;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(2&w.wrap&&O===35615){M[w.check=0]=255&O,M[1]=O>>>8&255,w.check=s(w.check,M,2,0),F=O=0,w.mode=2;break}if(w.flags=0,w.head&&(w.head.done=!1),!(1&w.wrap)||(((255&O)<<8)+(O>>8))%31){T.msg="incorrect header check",w.mode=30;break}if((15&O)!=8){T.msg="unknown compression method",w.mode=30;break}if(F-=4,g=8+(15&(O>>>=4)),w.wbits===0)w.wbits=g;else if(g>w.wbits){T.msg="invalid window size",w.mode=30;break}w.dmax=1<<g,T.adler=w.check=1,w.mode=512&O?10:12,F=O=0;break;case 2:for(;F<16;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(w.flags=O,(255&w.flags)!=8){T.msg="unknown compression method",w.mode=30;break}if(57344&w.flags){T.msg="unknown header flags set",w.mode=30;break}w.head&&(w.head.text=O>>8&1),512&w.flags&&(M[0]=255&O,M[1]=O>>>8&255,w.check=s(w.check,M,2,0)),F=O=0,w.mode=3;case 3:for(;F<32;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}w.head&&(w.head.time=O),512&w.flags&&(M[0]=255&O,M[1]=O>>>8&255,M[2]=O>>>16&255,M[3]=O>>>24&255,w.check=s(w.check,M,4,0)),F=O=0,w.mode=4;case 4:for(;F<16;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}w.head&&(w.head.xflags=255&O,w.head.os=O>>8),512&w.flags&&(M[0]=255&O,M[1]=O>>>8&255,w.check=s(w.check,M,2,0)),F=O=0,w.mode=5;case 5:if(1024&w.flags){for(;F<16;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}w.length=O,w.head&&(w.head.extra_len=O),512&w.flags&&(M[0]=255&O,M[1]=O>>>8&255,w.check=s(w.check,M,2,0)),F=O=0}else w.head&&(w.head.extra=null);w.mode=6;case 6:if(1024&w.flags&&(V<(Y=w.length)&&(Y=V),Y&&(w.head&&(g=w.head.extra_len-w.length,w.head.extra||(w.head.extra=new Array(w.head.extra_len)),r.arraySet(w.head.extra,L,W,Y,g)),512&w.flags&&(w.check=s(w.check,L,Y,W)),V-=Y,W+=Y,w.length-=Y),w.length))break e;w.length=0,w.mode=7;case 7:if(2048&w.flags){if(V===0)break e;for(Y=0;g=L[W+Y++],w.head&&g&&w.length<65536&&(w.head.name+=String.fromCharCode(g)),g&&Y<V;);if(512&w.flags&&(w.check=s(w.check,L,Y,W)),V-=Y,W+=Y,g)break e}else w.head&&(w.head.name=null);w.length=0,w.mode=8;case 8:if(4096&w.flags){if(V===0)break e;for(Y=0;g=L[W+Y++],w.head&&g&&w.length<65536&&(w.head.comment+=String.fromCharCode(g)),g&&Y<V;);if(512&w.flags&&(w.check=s(w.check,L,Y,W)),V-=Y,W+=Y,g)break e}else w.head&&(w.head.comment=null);w.mode=9;case 9:if(512&w.flags){for(;F<16;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(O!==(65535&w.check)){T.msg="header crc mismatch",w.mode=30;break}F=O=0}w.head&&(w.head.hcrc=w.flags>>9&1,w.head.done=!0),T.adler=w.check=0,w.mode=12;break;case 10:for(;F<32;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}T.adler=w.check=m(O),F=O=0,w.mode=11;case 11:if(w.havedict===0)return T.next_out=se,T.avail_out=oe,T.next_in=W,T.avail_in=V,w.hold=O,w.bits=F,2;T.adler=w.check=1,w.mode=12;case 12:if(B===5||B===6)break e;case 13:if(w.last){O>>>=7&F,F-=7&F,w.mode=27;break}for(;F<3;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}switch(w.last=1&O,F-=1,3&(O>>>=1)){case 0:w.mode=14;break;case 1:if(U(w),w.mode=20,B!==6)break;O>>>=2,F-=2;break e;case 2:w.mode=17;break;case 3:T.msg="invalid block type",w.mode=30}O>>>=2,F-=2;break;case 14:for(O>>>=7&F,F-=7&F;F<32;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if((65535&O)!=(O>>>16^65535)){T.msg="invalid stored block lengths",w.mode=30;break}if(w.length=65535&O,F=O=0,w.mode=15,B===6)break e;case 15:w.mode=16;case 16:if(Y=w.length){if(V<Y&&(Y=V),oe<Y&&(Y=oe),Y===0)break e;r.arraySet(J,L,W,Y,se),V-=Y,W+=Y,oe-=Y,se+=Y,w.length-=Y;break}w.mode=12;break;case 17:for(;F<14;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(w.nlen=257+(31&O),O>>>=5,F-=5,w.ndist=1+(31&O),O>>>=5,F-=5,w.ncode=4+(15&O),O>>>=4,F-=4,286<w.nlen||30<w.ndist){T.msg="too many length or distance symbols",w.mode=30;break}w.have=0,w.mode=18;case 18:for(;w.have<w.ncode;){for(;F<3;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}w.lens[D[w.have++]]=7&O,O>>>=3,F-=3}for(;w.have<19;)w.lens[D[w.have++]]=0;if(w.lencode=w.lendyn,w.lenbits=7,H={bits:w.lenbits},q=c(0,w.lens,0,19,w.lencode,0,w.work,H),w.lenbits=H.bits,q){T.msg="invalid code lengths set",w.mode=30;break}w.have=0,w.mode=19;case 19:for(;w.have<w.nlen+w.ndist;){for(;de=(_=w.lencode[O&(1<<w.lenbits)-1])>>>16&255,Ce=65535&_,!((fe=_>>>24)<=F);){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(Ce<16)O>>>=fe,F-=fe,w.lens[w.have++]=Ce;else{if(Ce===16){for(S=fe+2;F<S;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(O>>>=fe,F-=fe,w.have===0){T.msg="invalid bit length repeat",w.mode=30;break}g=w.lens[w.have-1],Y=3+(3&O),O>>>=2,F-=2}else if(Ce===17){for(S=fe+3;F<S;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}F-=fe,g=0,Y=3+(7&(O>>>=fe)),O>>>=3,F-=3}else{for(S=fe+7;F<S;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}F-=fe,g=0,Y=11+(127&(O>>>=fe)),O>>>=7,F-=7}if(w.have+Y>w.nlen+w.ndist){T.msg="invalid bit length repeat",w.mode=30;break}for(;Y--;)w.lens[w.have++]=g}}if(w.mode===30)break;if(w.lens[256]===0){T.msg="invalid code -- missing end-of-block",w.mode=30;break}if(w.lenbits=9,H={bits:w.lenbits},q=c(f,w.lens,0,w.nlen,w.lencode,0,w.work,H),w.lenbits=H.bits,q){T.msg="invalid literal/lengths set",w.mode=30;break}if(w.distbits=6,w.distcode=w.distdyn,H={bits:w.distbits},q=c(h,w.lens,w.nlen,w.ndist,w.distcode,0,w.work,H),w.distbits=H.bits,q){T.msg="invalid distances set",w.mode=30;break}if(w.mode=20,B===6)break e;case 20:w.mode=21;case 21:if(6<=V&&258<=oe){T.next_out=se,T.avail_out=oe,T.next_in=W,T.avail_in=V,w.hold=O,w.bits=F,l(T,ee),se=T.next_out,J=T.output,oe=T.avail_out,W=T.next_in,L=T.input,V=T.avail_in,O=w.hold,F=w.bits,w.mode===12&&(w.back=-1);break}for(w.back=0;de=(_=w.lencode[O&(1<<w.lenbits)-1])>>>16&255,Ce=65535&_,!((fe=_>>>24)<=F);){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(de&&(240&de)==0){for(ke=fe,lt=de,Ze=Ce;de=(_=w.lencode[Ze+((O&(1<<ke+lt)-1)>>ke)])>>>16&255,Ce=65535&_,!(ke+(fe=_>>>24)<=F);){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}O>>>=ke,F-=ke,w.back+=ke}if(O>>>=fe,F-=fe,w.back+=fe,w.length=Ce,de===0){w.mode=26;break}if(32&de){w.back=-1,w.mode=12;break}if(64&de){T.msg="invalid literal/length code",w.mode=30;break}w.extra=15&de,w.mode=22;case 22:if(w.extra){for(S=w.extra;F<S;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}w.length+=O&(1<<w.extra)-1,O>>>=w.extra,F-=w.extra,w.back+=w.extra}w.was=w.length,w.mode=23;case 23:for(;de=(_=w.distcode[O&(1<<w.distbits)-1])>>>16&255,Ce=65535&_,!((fe=_>>>24)<=F);){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if((240&de)==0){for(ke=fe,lt=de,Ze=Ce;de=(_=w.distcode[Ze+((O&(1<<ke+lt)-1)>>ke)])>>>16&255,Ce=65535&_,!(ke+(fe=_>>>24)<=F);){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}O>>>=ke,F-=ke,w.back+=ke}if(O>>>=fe,F-=fe,w.back+=fe,64&de){T.msg="invalid distance code",w.mode=30;break}w.offset=Ce,w.extra=15&de,w.mode=24;case 24:if(w.extra){for(S=w.extra;F<S;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}w.offset+=O&(1<<w.extra)-1,O>>>=w.extra,F-=w.extra,w.back+=w.extra}if(w.offset>w.dmax){T.msg="invalid distance too far back",w.mode=30;break}w.mode=25;case 25:if(oe===0)break e;if(Y=ee-oe,w.offset>Y){if((Y=w.offset-Y)>w.whave&&w.sane){T.msg="invalid distance too far back",w.mode=30;break}we=Y>w.wnext?(Y-=w.wnext,w.wsize-Y):w.wnext-Y,Y>w.length&&(Y=w.length),Pe=w.window}else Pe=J,we=se-w.offset,Y=w.length;for(oe<Y&&(Y=oe),oe-=Y,w.length-=Y;J[se++]=Pe[we++],--Y;);w.length===0&&(w.mode=21);break;case 26:if(oe===0)break e;J[se++]=w.length,oe--,w.mode=21;break;case 27:if(w.wrap){for(;F<32;){if(V===0)break e;V--,O|=L[W++]<<F,F+=8}if(ee-=oe,T.total_out+=ee,w.total+=ee,ee&&(T.adler=w.check=w.flags?s(w.check,J,ee,se-ee):o(w.check,J,ee,se-ee)),ee=oe,(w.flags?O:m(O))!==w.check){T.msg="incorrect data check",w.mode=30;break}F=O=0}w.mode=28;case 28:if(w.wrap&&w.flags){for(;F<32;){if(V===0)break e;V--,O+=L[W++]<<F,F+=8}if(O!==(4294967295&w.total)){T.msg="incorrect length check",w.mode=30;break}F=O=0}w.mode=29;case 29:q=1;break e;case 30:q=-3;break e;case 31:return-4;case 32:default:return u}return T.next_out=se,T.avail_out=oe,T.next_in=W,T.avail_in=V,w.hold=O,w.bits=F,(w.wsize||ee!==T.avail_out&&w.mode<30&&(w.mode<27||B!==4))&&G(T,T.output,T.next_out,ee-T.avail_out)?(w.mode=31,-4):(re-=T.avail_in,ee-=T.avail_out,T.total_in+=re,T.total_out+=ee,w.total+=ee,w.wrap&&ee&&(T.adler=w.check=w.flags?s(w.check,J,ee,T.next_out-ee):o(w.check,J,ee,T.next_out-ee)),T.data_type=w.bits+(w.last?64:0)+(w.mode===12?128:0)+(w.mode===20||w.mode===15?256:0),(re==0&&ee===0||B===4)&&q===d&&(q=-5),q)},n.inflateEnd=function(T){if(!T||!T.state)return u;var B=T.state;return B.window&&(B.window=null),T.state=null,d},n.inflateGetHeader=function(T,B){var w;return T&&T.state?(2&(w=T.state).wrap)==0?u:((w.head=B).done=!1,d):u},n.inflateSetDictionary=function(T,B){var w,L=B.length;return T&&T.state?(w=T.state).wrap!==0&&w.mode!==11?u:w.mode===11&&o(1,B,L,0)!==w.check?-3:G(T,B,L,L)?(w.mode=31,-4):(w.havedict=1,d):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,n){var r=i("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(f,h,d,u,v,p,y,m){var b,k,x,C,I,P,z,A,U,G=m.bits,T=0,B=0,w=0,L=0,J=0,W=0,se=0,V=0,oe=0,O=0,F=null,re=0,ee=new r.Buf16(16),Y=new r.Buf16(16),we=null,Pe=0;for(T=0;T<=15;T++)ee[T]=0;for(B=0;B<u;B++)ee[h[d+B]]++;for(J=G,L=15;1<=L&&ee[L]===0;L--);if(L<J&&(J=L),L===0)return v[p++]=20971520,v[p++]=20971520,m.bits=1,0;for(w=1;w<L&&ee[w]===0;w++);for(J<w&&(J=w),T=V=1;T<=15;T++)if(V<<=1,(V-=ee[T])<0)return-1;if(0<V&&(f===0||L!==1))return-1;for(Y[1]=0,T=1;T<15;T++)Y[T+1]=Y[T]+ee[T];for(B=0;B<u;B++)h[d+B]!==0&&(y[Y[h[d+B]]++]=B);if(P=f===0?(F=we=y,19):f===1?(F=o,re-=257,we=s,Pe-=257,256):(F=l,we=c,-1),T=w,I=p,se=B=O=0,x=-1,C=(oe=1<<(W=J))-1,f===1&&852<oe||f===2&&592<oe)return 1;for(;;){for(z=T-se,U=y[B]<P?(A=0,y[B]):y[B]>P?(A=we[Pe+y[B]],F[re+y[B]]):(A=96,0),b=1<<T-se,w=k=1<<W;v[I+(O>>se)+(k-=b)]=z<<24|A<<16|U|0,k!==0;);for(b=1<<T-1;O&b;)b>>=1;if(b!==0?(O&=b-1,O+=b):O=0,B++,--ee[T]==0){if(T===L)break;T=h[d+y[B]]}if(J<T&&(O&C)!==x){for(se===0&&(se=J),I+=w,V=1<<(W=T-se);W+se<L&&!((V-=ee[W+se])<=0);)W++,V<<=1;if(oe+=1<<W,f===1&&852<oe||f===2&&592<oe)return 1;v[x=O&C]=J<<24|W<<16|I-p|0}}return O!==0&&(v[I+O]=T-se<<24|64<<16|0),m.bits=J,0}},{"../utils/common":41}],51:[function(i,a,n){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,n){var r=i("../utils/common"),o=0,s=1;function l(_){for(var M=_.length;0<=--M;)_[M]=0}var c=0,f=29,h=256,d=h+1+f,u=30,v=19,p=2*d+1,y=15,m=16,b=7,k=256,x=16,C=17,I=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(d+2));l(G);var T=new Array(2*u);l(T);var B=new Array(512);l(B);var w=new Array(256);l(w);var L=new Array(f);l(L);var J,W,se,V=new Array(u);function oe(_,M,D,$,R){this.static_tree=_,this.extra_bits=M,this.extra_base=D,this.elems=$,this.max_length=R,this.has_stree=_&&_.length}function O(_,M){this.dyn_tree=_,this.max_code=0,this.stat_desc=M}function F(_){return _<256?B[_]:B[256+(_>>>7)]}function re(_,M){_.pending_buf[_.pending++]=255&M,_.pending_buf[_.pending++]=M>>>8&255}function ee(_,M,D){_.bi_valid>m-D?(_.bi_buf|=M<<_.bi_valid&65535,re(_,_.bi_buf),_.bi_buf=M>>m-_.bi_valid,_.bi_valid+=D-m):(_.bi_buf|=M<<_.bi_valid&65535,_.bi_valid+=D)}function Y(_,M,D){ee(_,D[2*M],D[2*M+1])}function we(_,M){for(var D=0;D|=1&_,_>>>=1,D<<=1,0<--M;);return D>>>1}function Pe(_,M,D){var $,R,K=new Array(y+1),te=0;for($=1;$<=y;$++)K[$]=te=te+D[$-1]<<1;for(R=0;R<=M;R++){var Z=_[2*R+1];Z!==0&&(_[2*R]=we(K[Z]++,Z))}}function fe(_){var M;for(M=0;M<d;M++)_.dyn_ltree[2*M]=0;for(M=0;M<u;M++)_.dyn_dtree[2*M]=0;for(M=0;M<v;M++)_.bl_tree[2*M]=0;_.dyn_ltree[2*k]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function de(_){8<_.bi_valid?re(_,_.bi_buf):0<_.bi_valid&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function Ce(_,M,D,$){var R=2*M,K=2*D;return _[R]<_[K]||_[R]===_[K]&&$[M]<=$[D]}function ke(_,M,D){for(var $=_.heap[D],R=D<<1;R<=_.heap_len&&(R<_.heap_len&&Ce(M,_.heap[R+1],_.heap[R],_.depth)&&R++,!Ce(M,$,_.heap[R],_.depth));)_.heap[D]=_.heap[R],D=R,R<<=1;_.heap[D]=$}function lt(_,M,D){var $,R,K,te,Z=0;if(_.last_lit!==0)for(;$=_.pending_buf[_.d_buf+2*Z]<<8|_.pending_buf[_.d_buf+2*Z+1],R=_.pending_buf[_.l_buf+Z],Z++,$===0?Y(_,R,M):(Y(_,(K=w[R])+h+1,M),(te=P[K])!==0&&ee(_,R-=L[K],te),Y(_,K=F(--$),D),(te=z[K])!==0&&ee(_,$-=V[K],te)),Z<_.last_lit;);Y(_,k,M)}function Ze(_,M){var D,$,R,K=M.dyn_tree,te=M.stat_desc.static_tree,Z=M.stat_desc.has_stree,ne=M.stat_desc.elems,pe=-1;for(_.heap_len=0,_.heap_max=p,D=0;D<ne;D++)K[2*D]!==0?(_.heap[++_.heap_len]=pe=D,_.depth[D]=0):K[2*D+1]=0;for(;_.heap_len<2;)K[2*(R=_.heap[++_.heap_len]=pe<2?++pe:0)]=1,_.depth[R]=0,_.opt_len--,Z&&(_.static_len-=te[2*R+1]);for(M.max_code=pe,D=_.heap_len>>1;1<=D;D--)ke(_,K,D);for(R=ne;D=_.heap[1],_.heap[1]=_.heap[_.heap_len--],ke(_,K,1),$=_.heap[1],_.heap[--_.heap_max]=D,_.heap[--_.heap_max]=$,K[2*R]=K[2*D]+K[2*$],_.depth[R]=(_.depth[D]>=_.depth[$]?_.depth[D]:_.depth[$])+1,K[2*D+1]=K[2*$+1]=R,_.heap[1]=R++,ke(_,K,1),2<=_.heap_len;);_.heap[--_.heap_max]=_.heap[1],(function(ue,$e){var bi,ct,yi,xe,Ki,$a,gt=$e.dyn_tree,po=$e.max_code,Vh=$e.stat_desc.static_tree,Gh=$e.stat_desc.has_stree,Kh=$e.stat_desc.extra_bits,go=$e.stat_desc.extra_base,wi=$e.stat_desc.max_length,Xi=0;for(xe=0;xe<=y;xe++)ue.bl_count[xe]=0;for(gt[2*ue.heap[ue.heap_max]+1]=0,bi=ue.heap_max+1;bi<p;bi++)wi<(xe=gt[2*gt[2*(ct=ue.heap[bi])+1]+1]+1)&&(xe=wi,Xi++),gt[2*ct+1]=xe,po<ct||(ue.bl_count[xe]++,Ki=0,go<=ct&&(Ki=Kh[ct-go]),$a=gt[2*ct],ue.opt_len+=$a*(xe+Ki),Gh&&(ue.static_len+=$a*(Vh[2*ct+1]+Ki)));if(Xi!==0){do{for(xe=wi-1;ue.bl_count[xe]===0;)xe--;ue.bl_count[xe]--,ue.bl_count[xe+1]+=2,ue.bl_count[wi]--,Xi-=2}while(0<Xi);for(xe=wi;xe!==0;xe--)for(ct=ue.bl_count[xe];ct!==0;)po<(yi=ue.heap[--bi])||(gt[2*yi+1]!==xe&&(ue.opt_len+=(xe-gt[2*yi+1])*gt[2*yi],gt[2*yi+1]=xe),ct--)}})(_,M),Pe(K,pe,_.bl_count)}function g(_,M,D){var $,R,K=-1,te=M[1],Z=0,ne=7,pe=4;for(te===0&&(ne=138,pe=3),M[2*(D+1)+1]=65535,$=0;$<=D;$++)R=te,te=M[2*($+1)+1],++Z<ne&&R===te||(Z<pe?_.bl_tree[2*R]+=Z:R!==0?(R!==K&&_.bl_tree[2*R]++,_.bl_tree[2*x]++):Z<=10?_.bl_tree[2*C]++:_.bl_tree[2*I]++,K=R,pe=(Z=0)===te?(ne=138,3):R===te?(ne=6,3):(ne=7,4))}function q(_,M,D){var $,R,K=-1,te=M[1],Z=0,ne=7,pe=4;for(te===0&&(ne=138,pe=3),$=0;$<=D;$++)if(R=te,te=M[2*($+1)+1],!(++Z<ne&&R===te)){if(Z<pe)for(;Y(_,R,_.bl_tree),--Z!=0;);else R!==0?(R!==K&&(Y(_,R,_.bl_tree),Z--),Y(_,x,_.bl_tree),ee(_,Z-3,2)):Z<=10?(Y(_,C,_.bl_tree),ee(_,Z-3,3)):(Y(_,I,_.bl_tree),ee(_,Z-11,7));K=R,pe=(Z=0)===te?(ne=138,3):R===te?(ne=6,3):(ne=7,4)}}l(V);var H=!1;function S(_,M,D,$){ee(_,(c<<1)+($?1:0),3),(function(R,K,te,Z){de(R),re(R,te),re(R,~te),r.arraySet(R.pending_buf,R.window,K,te,R.pending),R.pending+=te})(_,M,D)}n._tr_init=function(_){H||((function(){var M,D,$,R,K,te=new Array(y+1);for(R=$=0;R<f-1;R++)for(L[R]=$,M=0;M<1<<P[R];M++)w[$++]=R;for(w[$-1]=R,R=K=0;R<16;R++)for(V[R]=K,M=0;M<1<<z[R];M++)B[K++]=R;for(K>>=7;R<u;R++)for(V[R]=K<<7,M=0;M<1<<z[R]-7;M++)B[256+K++]=R;for(D=0;D<=y;D++)te[D]=0;for(M=0;M<=143;)G[2*M+1]=8,M++,te[8]++;for(;M<=255;)G[2*M+1]=9,M++,te[9]++;for(;M<=279;)G[2*M+1]=7,M++,te[7]++;for(;M<=287;)G[2*M+1]=8,M++,te[8]++;for(Pe(G,d+1,te),M=0;M<u;M++)T[2*M+1]=5,T[2*M]=we(M,5);J=new oe(G,P,h+1,d,y),W=new oe(T,z,0,u,y),se=new oe(new Array(0),A,0,v,b)})(),H=!0),_.l_desc=new O(_.dyn_ltree,J),_.d_desc=new O(_.dyn_dtree,W),_.bl_desc=new O(_.bl_tree,se),_.bi_buf=0,_.bi_valid=0,fe(_)},n._tr_stored_block=S,n._tr_flush_block=function(_,M,D,$){var R,K,te=0;0<_.level?(_.strm.data_type===2&&(_.strm.data_type=(function(Z){var ne,pe=4093624447;for(ne=0;ne<=31;ne++,pe>>>=1)if(1&pe&&Z.dyn_ltree[2*ne]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return s;for(ne=32;ne<h;ne++)if(Z.dyn_ltree[2*ne]!==0)return s;return o})(_)),Ze(_,_.l_desc),Ze(_,_.d_desc),te=(function(Z){var ne;for(g(Z,Z.dyn_ltree,Z.l_desc.max_code),g(Z,Z.dyn_dtree,Z.d_desc.max_code),Ze(Z,Z.bl_desc),ne=v-1;3<=ne&&Z.bl_tree[2*U[ne]+1]===0;ne--);return Z.opt_len+=3*(ne+1)+5+5+4,ne})(_),R=_.opt_len+3+7>>>3,(K=_.static_len+3+7>>>3)<=R&&(R=K)):R=K=D+5,D+4<=R&&M!==-1?S(_,M,D,$):_.strategy===4||K===R?(ee(_,2+($?1:0),3),lt(_,G,T)):(ee(_,4+($?1:0),3),(function(Z,ne,pe,ue){var $e;for(ee(Z,ne-257,5),ee(Z,pe-1,5),ee(Z,ue-4,4),$e=0;$e<ue;$e++)ee(Z,Z.bl_tree[2*U[$e]+1],3);q(Z,Z.dyn_ltree,ne-1),q(Z,Z.dyn_dtree,pe-1)})(_,_.l_desc.max_code+1,_.d_desc.max_code+1,te+1),lt(_,_.dyn_ltree,_.dyn_dtree)),fe(_),$&&de(_)},n._tr_tally=function(_,M,D){return _.pending_buf[_.d_buf+2*_.last_lit]=M>>>8&255,_.pending_buf[_.d_buf+2*_.last_lit+1]=255&M,_.pending_buf[_.l_buf+_.last_lit]=255&D,_.last_lit++,M===0?_.dyn_ltree[2*D]++:(_.matches++,M--,_.dyn_ltree[2*(w[D]+h+1)]++,_.dyn_dtree[2*F(M)]++),_.last_lit===_.lit_bufsize-1},n._tr_align=function(_){ee(_,2,3),Y(_,k,G),(function(M){M.bi_valid===16?(re(M,M.bi_buf),M.bi_buf=0,M.bi_valid=0):8<=M.bi_valid&&(M.pending_buf[M.pending++]=255&M.bi_buf,M.bi_buf>>=8,M.bi_valid-=8)})(_)}},{"../utils/common":41}],53:[function(i,a,n){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,n){(function(r){(function(o,s){if(!o.setImmediate){var l,c,f,h,d=1,u={},v=!1,p=o.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(o);y=y&&y.setTimeout?y:o,l={}.toString.call(o.process)==="[object process]"?function(x){process.nextTick(function(){b(x)})}:(function(){if(o.postMessage&&!o.importScripts){var x=!0,C=o.onmessage;return o.onmessage=function(){x=!1},o.postMessage("","*"),o.onmessage=C,x}})()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",k,!1):o.attachEvent("onmessage",k),function(x){o.postMessage(h+x,"*")}):o.MessageChannel?((f=new MessageChannel).port1.onmessage=function(x){b(x.data)},function(x){f.port2.postMessage(x)}):p&&"onreadystatechange"in p.createElement("script")?(c=p.documentElement,function(x){var C=p.createElement("script");C.onreadystatechange=function(){b(x),C.onreadystatechange=null,c.removeChild(C),C=null},c.appendChild(C)}):function(x){setTimeout(b,0,x)},y.setImmediate=function(x){typeof x!="function"&&(x=new Function(""+x));for(var C=new Array(arguments.length-1),I=0;I<C.length;I++)C[I]=arguments[I+1];var P={callback:x,args:C};return u[d]=P,l(d),d++},y.clearImmediate=m}function m(x){delete u[x]}function b(x){if(v)setTimeout(b,0,x);else{var C=u[x];if(C){v=!0;try{(function(I){var P=I.callback,z=I.args;switch(z.length){case 0:P();break;case 1:P(z[0]);break;case 2:P(z[0],z[1]);break;case 3:P(z[0],z[1],z[2]);break;default:P.apply(s,z)}})(C)}finally{m(x),v=!1}}}}function k(x){x.source===o&&typeof x.data=="string"&&x.data.indexOf(h)===0&&b(+x.data.slice(h.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(oa)),oa.exports}var df=uf();const hf=ff(df);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function N(t){if(!t)throw new Error("Assertion failed.")}const mf=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},je=t=>t&&t[t.length-1],yt=t=>t>=0&&t<2**32,X=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},ut=t=>{const e=X(t);return(e&1)===0?-(e>>1):e+1>>1},Ne=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),tt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),it=new TextEncoder,Ii={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Ai={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Bi={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},pf=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Ri=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Rn{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(n=>{let r=!1;e=()=>{r||(n(),this.pending--,r=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const zn=(t,e,i)=>{let a=0,n=t.length-1,r=-1;for(;a<=n;){const o=a+(n-a+1)/2|0;i(t[o])<=e?(r=o,a=o+1):n=o-1}return r},Fn=()=>{let t,e;return{promise:new Promise((a,n)=>{t=a,e=n}),resolve:t,reject:e}},Et=t=>{throw new Error(`Unexpected value: ${t}`)},gf=(t,e,i)=>{const a=t.getUint8(e),n=t.getUint8(e+1),r=t.getUint8(e+2);return a<<16|n<<8|r},sa=(t,e,i,a)=>{i=i>>>0,i=i&16777215,a?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},vf=(t,e,i,a)=>{i=Ee(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),sa(t,e,i,a)},Ee=(t,e,i)=>Math.max(e,Math.min(i,t)),bf=(t,e,i)=>t+(e-t)*i,yf="und",On=(t,e)=>Math.round(t/e)*e,Hn=(t,e)=>Math.round(t*e)/e,Ln=(t,e)=>Math.floor(t*e)/e,wf=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},kf=/^[a-z]{3}$/,xf=t=>kf.test(t),wt=1e6*(1+Number.EPSILON),_f=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,n=1,r=1,o=0,s=t;for(;;){const l=Math.floor(s),c=l*r+a,f=l*o+n;if(f>e)return{num:i*r,den:o};if(a=r,n=o,r=c,o=f,s=1/(s-l),!isFinite(s))break}return{num:i*r,den:o}};class Un{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let la=null;const Tf=()=>la!==null?la:la=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let ca=null;const Nn=()=>ca!==null?ca:ca=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let fa=null;const Cf=()=>fa!==null?fa:fa=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let ua=null;const Sf=()=>{if(ua!==null)return ua;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?ua=Number(t[1]):null},qn=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Ef=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Pf=(t,e)=>{let i=-1,a=1/0;for(let n=0;n<t.length;n++){const r=e(t[n]);r<a&&(a=r,i=n)}return i},Wn=t=>{N(Number.isInteger(t.num)),N(Number.isInteger(t.den)),N(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const n=e%i;e=i,i=n}const a=e||1;return{num:t.num/a,den:t.den/a}},da=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Mf=t=>new Promise(e=>setTimeout(e,t)),Dn=t=>Array.isArray(t)?t:[t];class ha{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const n={fn:i,once:a?.once??!1};return this._listeners.get(e).add(n),()=>{this._listeners.get(e)?.delete(n)}}_emit(...e){const[i,a]=e,n=this._listeners.get(i);if(n)for(const r of n){try{r.fn(a)}catch(o){console.error(o)}r.once&&n.delete(r)}}}const If=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var at;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(at||(at={}));class ve{constructor(){}static get level(){return ve._level}static set level(e){if(e!==at.Silent&&e!==at.Errors&&e!==at.Warnings&&e!==at.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ve._level=e}static get _emitter(){return ve._emitterInstance??=new ha}static on(e,i,a){return ve._emitter.on(e,i,a)}static _error(...e){ve._emitter._emit("error",e),ve._level>=at.Errors&&console.error(...e)}static _warn(...e){ve._emitter._emit("warn",e),ve._level>=at.Warnings&&console.warn(...e)}static _info(...e){ve._emitter._emit("info",e),ve._level>=at.Info&&console.info(...e)}}ve._level=at.Info,ve._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class $n{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Af{constructor(e,i,a,n){if(this.data=e,this.mimeType=i,this.name=a,this.description=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("description, when provided, must be a string.")}}const Bf=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof $n)&&!(e instanceof Af)&&!If(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Rf=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Te{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),n=(i&1<<a)>>a;return this.pos++,n}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let n=this.pos;n<a;n++){const r=Math.floor(n/8);let o=this.bytes[r];const s=7-(n&7);o&=~(1<<s),o|=(i&1<<a-n-1)>>a-n-1<<s,this.bytes[r]=o}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Te(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const zi=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],ma=[-1,1,2,3,4,5,6,8],zf=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Te(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const a=e.readBits(4);let n=null;a===15?n=e.readBits(24):a<zi.length&&(n=zi[a]);const r=e.readBits(4);let o=null;return r>=1&&r<=7&&(o=ma[r]),{objectType:i,frequencyIndex:a,sampleRate:n,channelConfiguration:r,numberOfChannels:o}},jn=t=>{let e=zi.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=ma.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let n=13;t.objectType>=32&&(n+=6),e===15&&(n+=24);const r=Math.ceil(n/8),o=new Uint8Array(r),s=new Te(o);return t.objectType<32?s.writeBits(5,t.objectType):(s.writeBits(5,31),s.writeBits(6,t.objectType-32)),s.writeBits(4,e),e===15&&s.writeBits(24,i),s.writeBits(4,a),o};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const dt=["avc","hevc","vp9","av1","vp8","prores"],Ve=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],pa=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Pt=[...pa,...Ve],ai=["webvtt"],Fi=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Vn=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Gn=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Kn=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],ni=["ap4x","ap4h","apch","apcn","apcs","apco"],ga=["dtsc","dtsh","dtsl","dtse"],Ff=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Of=(t,e,i,a,n)=>{if(t==="avc"){const o=Math.ceil(e/16)*Math.ceil(i/16),s=Fi.find(d=>o<=d.maxMacroblocks&&a<=d.maxBitrate)??je(Fi),l=s?s.level:0,c="64".padStart(2,"0"),f="00",h=l.toString(16).padStart(2,"0");return`avc1.${c}${f}${h}`}else if(t==="hevc"){const l=e*i,c=Vn.find(h=>l<=h.maxPictureSize&&a<=h.maxBitrate)??je(Vn);return`hev1.1.6.${c.tier}${c.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const o=e*i;return`vp09.00.${(Gn.find(c=>o<=c.maxPictureSize&&a<=c.maxBitrate)??je(Gn)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const o=e*i,s=Kn.find(f=>o<=f.maxPictureSize&&a<=f.maxBitrate)??je(Kn);return`av01.0.${s.level.toString().padStart(2,"0")}${s.tier}.08`}else if(t==="prores"){const o=Math.pow(e*i/2073600,.95),s=Ff.filter(f=>f.alpha===n);let l=s[0].fourCc,c=1/0;for(const{fourCc:f,bitrate:h}of s){const d=Math.abs(h*o-a);d<c&&(c=d,l=f)}return l}else Et(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Hf=t=>{const e=t.split("."),n=(1<<7)+1,r=Number(e[1]),o=e[2],s=Number(o.slice(0,-1)),l=(r<<5)+s,c=o.slice(-1)==="H"?1:0,h=Number(e[3])===8?0:1,d=0,u=e[4]?Number(e[4]):0,v=e[5]?Number(e[5][0]):1,p=e[5]?Number(e[5][1]):1,y=e[5]?Number(e[5][2]):0,m=(c<<7)+(h<<6)+(d<<5)+(u<<4)+(v<<3)+(p<<2)+y;return[n,l,m,0]},Lf=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(Ve.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},Xn=/^pcm-([usf])(\d+)(be)?$/,Mt=t=>{if(N(Ve.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Xn.exec(t);N(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,n=e[3]!=="be",r=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:n,silentValue:r}},Oi=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":ni.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":ga.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Xn.test(t)?t:t==="webvtt"?"webvtt":null,Uf=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Nf=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},qf=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...ni],Wf=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Df=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,$f=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,jf=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Zn=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!qf.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Ri(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(Ii);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(Ai);if(i.transfer!=null&&!n.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const r=Object.keys(Bi);if(i.matrix!=null&&!r.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${r.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Wf.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Df.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!$f.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!jf.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(ni.some(i=>t.decoderConfig.codec.startsWith(i))&&!ni.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${ni.join(", ")}.`);if(e!==null&&Oi(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Vf=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Qn=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Vf.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Ri(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!ga.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${ga.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Ve.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Ve.join(", ")}).`);if(e!==null&&Oi(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Gf=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Kf=[48e3,44100,32e3],Xf=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var ht;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(ht||(ht={}));var qe;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(qe||(qe={}));const ri=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let n=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?n=4:t[e+1]===0&&t[e+2]===1&&(n=3),n===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+n,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Yn=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let n;e===1?n=a.getUint8(i):e===2?n=a.getUint16(i,!1):e===3?n=gf(a,i):(N(e===4),n=a.getUint32(i,!1)),i+=e,yield{offset:i,length:n},i+=n}},Zf=(t,e)=>{if(e.description){const n=(Ne(e.description)[4]&3)+1;return Yn(t,n)}else return ri(t)},Jn=t=>t&31,Hi=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Qf=(t,e)=>{const i=t.reduce((r,o)=>r+e+o.byteLength,0),a=new Uint8Array(i);let n=0;for(const r of t){const o=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:o.setUint8(n,r.byteLength);break;case 2:o.setUint16(n,r.byteLength,!1);break;case 3:sa(o,n,r.byteLength,!1);break;case 4:o.setUint32(n,r.byteLength,!1);break}n+=e,a.set(r,n),n+=r.byteLength}return a},Yf=t=>{try{const e=[],i=[],a=[];for(const s of ri(t)){const l=t.subarray(s.offset,s.offset+s.length),c=Jn(l[0]);c===ht.SPS?e.push(l):c===ht.PPS?i.push(l):c===ht.SPS_EXT&&a.push(l)}if(e.length===0||i.length===0)return null;const n=e[0],r=e0(n);N(r!==null);const o=r.profileIdc===100||r.profileIdc===110||r.profileIdc===122||r.profileIdc===144;return{configurationVersion:1,avcProfileIndication:r.profileIdc,profileCompatibility:r.constraintFlags,avcLevelIndication:r.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:o?r.chromaFormatIdc:null,bitDepthLumaMinus8:o?r.bitDepthLumaMinus8:null,bitDepthChromaMinus8:o?r.bitDepthChromaMinus8:null,sequenceParameterSetExt:o?a:null}}catch(e){return ve._error("Error building AVC Decoder Configuration Record:",e),null}},Jf=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){N(t.chromaFormat!==null),N(t.bitDepthLumaMinus8!==null),N(t.bitDepthChromaMinus8!==null),N(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let n=0;n<a;n++)e.push(i[n])}}return new Uint8Array(e)},er={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},e0=t=>{try{const e=new Te(Hi(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),n=e.readAlignedByte(),r=e.readAlignedByte();X(e);let o=1,s=0,l=0,c=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(o=X(e),o===3&&(c=e.readBits(1)),s=X(e),l=X(e),e.skipBits(1),e.readBits(1))){for(let T=0;T<(o!==3?8:12);T++)if(e.readBits(1)){const w=T<6?16:64;let L=8,J=8;for(let W=0;W<w;W++){if(J!==0){const se=ut(e);J=(L+se+256)%256}L=J===0?L:J}}}X(e);const f=X(e);if(f===0)X(e);else if(f===1){e.skipBits(1),ut(e),ut(e);const G=X(e);for(let T=0;T<G;T++)ut(e)}X(e),e.skipBits(1);const h=X(e),d=X(e),u=16*(h+1),v=16*(d+1);let p=u,y=v;const m=e.readBits(1);if(m||e.skipBits(1),e.skipBits(1),e.readBits(1)){const G=X(e),T=X(e),B=X(e),w=X(e);let L,J;if((c===0?o:0)===0)L=1,J=2-m;else{const se=o===3?1:2,V=o===1?2:1;L=se,J=V*(2-m)}p-=L*(G+T),y-=J*(B+w)}let k=2,x=2,C=2,I=0,P={num:1,den:1},z=null,A=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)P={num:e.readBits(16),den:e.readBits(16)};else{const oe=er[V];oe&&(P=oe)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),I=e.readBits(1),e.readBits(1)&&(k=e.readBits(8),x=e.readBits(8),C=e.readBits(8))),e.readBits(1)&&(X(e),X(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const J=e.readBits(1);J&&tr(e);const W=e.readBits(1);W&&tr(e),(J||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),X(e),X(e),X(e),X(e),z=X(e),A=X(e))}if(z===null){N(A===null);const G=n&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&G)z=0,A=0;else{const T=h+1,B=d+1,w=(2-m)*B,L=Fi.find(W=>W.level>=r)??je(Fi),J=Math.min(Math.floor(L.maxDpbMbs/(T*w)),16);z=J,A=J}}return N(A!==null),{profileIdc:a,constraintFlags:n,levelIdc:r,frameMbsOnlyFlag:m,chromaFormatIdc:o,bitDepthLumaMinus8:s,bitDepthChromaMinus8:l,codedWidth:u,codedHeight:v,displayWidth:p,displayHeight:y,pixelAspectRatio:P,colourPrimaries:k,matrixCoefficients:C,transferCharacteristics:x,fullRangeFlag:I,numReorderFrames:z,maxDecFrameBuffering:A}}catch(e){return ve._error("Error parsing AVC SPS:",e),null}},tr=t=>{const e=X(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)X(t),X(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},t0=(t,e)=>{if(e.description){const n=(Ne(e.description)[21]&3)+1;return Yn(t,n)}else return ri(t)},va=t=>t>>1&63,i0=t=>{try{const e=new Te(Hi(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:n,general_tier_flag:r,general_profile_idc:o,general_profile_compatibility_flags:s,general_constraint_indicator_flags:l,general_level_idc:c}=n0(e,i);X(e);const f=X(e);let h=0;f===3&&(h=e.readBits(1));const d=X(e),u=X(e);let v=d,p=u;if(e.readBits(1)){const T=X(e),B=X(e),w=X(e),L=X(e);let J=1,W=1;const se=h===0?f:0;se===1?(J=2,W=2):se===2&&(J=2,W=1),v-=(T+B)*J,p-=(w+L)*W}const y=X(e),m=X(e);X(e);const k=e.readBits(1)?0:i;let x=0;for(let T=k;T<=i;T++)X(e),x=X(e),X(e);X(e),X(e),X(e),X(e),X(e),X(e),e.readBits(1)&&e.readBits(1)&&r0(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),X(e),X(e),e.skipBits(1));const C=X(e);if(o0(e,C),e.readBits(1)){const T=X(e);for(let B=0;B<T;B++)X(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let I=2,P=2,z=2,A=0,U=0,G={num:1,den:1};if(e.readBits(1)){const T=l0(e,i);G=T.pixelAspectRatio,I=T.colourPrimaries,P=T.transferCharacteristics,z=T.matrixCoefficients,A=T.fullRangeFlag,U=T.minSpatialSegmentationIdc}return{displayWidth:v,displayHeight:p,pixelAspectRatio:G,colourPrimaries:I,transferCharacteristics:P,matrixCoefficients:z,fullRangeFlag:A,maxDecFrameBuffering:x+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:n,generalTierFlag:r,generalProfileIdc:o,generalProfileCompatibilityFlags:s,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:f,bitDepthLumaMinus8:y,bitDepthChromaMinus8:m,minSpatialSegmentationIdc:U}}catch(e){return ve._error("Error parsing HEVC SPS:",e),null}},a0=t=>{try{const e=[],i=[],a=[],n=[];for(const c of ri(t)){const f=t.subarray(c.offset,c.offset+c.length),h=va(f[0]);h===qe.VPS_NUT?e.push(f):h===qe.SPS_NUT?i.push(f):h===qe.PPS_NUT?a.push(f):(h===qe.PREFIX_SEI_NUT||h===qe.SUFFIX_SEI_NUT)&&n.push(f)}if(i.length===0||a.length===0)return null;const r=i0(i[0]);if(!r)return null;let o=0;if(a.length>0){const c=a[0],f=new Te(Hi(c));f.skipBits(16),X(f),X(f),f.skipBits(1),f.skipBits(1),f.skipBits(3),f.skipBits(1),f.skipBits(1),X(f),X(f),ut(f),f.skipBits(1),f.skipBits(1),f.readBits(1)&&X(f),ut(f),ut(f),f.skipBits(1),f.skipBits(1),f.skipBits(1),f.skipBits(1);const h=f.readBits(1),d=f.readBits(1);!h&&!d?o=0:h&&!d?o=2:!h&&d?o=3:o=0}const s=[...e.length?[{arrayCompleteness:1,nalUnitType:qe.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:qe.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:qe.PPS_NUT,nalUnits:a}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:va(n[0][0]),nalUnits:n}]:[]];return{configurationVersion:1,generalProfileSpace:r.generalProfileSpace,generalTierFlag:r.generalTierFlag,generalProfileIdc:r.generalProfileIdc,generalProfileCompatibilityFlags:r.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:r.generalConstraintIndicatorFlags,generalLevelIdc:r.generalLevelIdc,minSpatialSegmentationIdc:r.minSpatialSegmentationIdc,parallelismType:o,chromaFormatIdc:r.chromaFormatIdc,bitDepthLumaMinus8:r.bitDepthLumaMinus8,bitDepthChromaMinus8:r.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:r.spsMaxSubLayersMinus1+1,temporalIdNested:r.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:s}}catch(e){return ve._error("Error building HEVC Decoder Configuration Record:",e),null}},n0=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),n=t.readBits(5);let r=0;for(let f=0;f<32;f++)r=r<<1|t.readBits(1);const o=new Uint8Array(6);for(let f=0;f<6;f++)o[f]=t.readBits(8);const s=t.readBits(8),l=[],c=[];for(let f=0;f<e;f++)l.push(t.readBits(1)),c.push(t.readBits(1));if(e>0)for(let f=e;f<8;f++)t.skipBits(2);for(let f=0;f<e;f++)l[f]&&t.skipBits(88),c[f]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:n,general_profile_compatibility_flags:r,general_constraint_indicator_flags:o,general_level_idc:s}},r0=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))X(t);else{const n=Math.min(64,1<<4+(e<<1));e>1&&ut(t);for(let r=0;r<n;r++)ut(t)}},o0=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=s0(t,a,e,i)},s0=(t,e,i,a)=>{let n=0,r=0,o=0;if(e!==0&&(r=t.readBits(1)),r){if(e===i){const l=X(t);o=e-(l+1)}else o=e-1;t.readBits(1),X(t);const s=a[o]??0;for(let l=0;l<=s;l++)t.readBits(1)||t.readBits(1);n=a[o]}else{const s=X(t),l=X(t);for(let c=0;c<s;c++)X(t),t.readBits(1);for(let c=0;c<l;c++)X(t),t.readBits(1);n=s+l}return n},l0=(t,e)=>{let i=2,a=2,n=2,r=0,o=0,s={num:1,den:1};if(t.readBits(1)){const l=t.readBits(8);if(l===255)s={num:t.readBits(16),den:t.readBits(16)};else{const c=er[l];c&&(s=c)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),r=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),n=t.readBits(8))),t.readBits(1)&&(X(t),X(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(X(t),X(t),X(t),X(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&X(t),t.readBits(1)&&c0(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),o=X(t),X(t),X(t),X(t),X(t)),{pixelAspectRatio:s,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:n,fullRangeFlag:r,minSpatialSegmentationIdc:o}},c0=(t,e,i)=>{let a=!1,n=!1,r=!1;a=t.readBits(1)===1,n=t.readBits(1)===1,(a||n)&&(r=t.readBits(1)===1,r&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),r&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let o=0;o<=i;o++){const s=t.readBits(1)===1;let l=!0;s||(l=t.readBits(1)===1);let c=!1;l?X(t):c=t.readBits(1)===1;let f=1;c||(f=X(t)+1),a&&ir(t,f,r),n&&ir(t,f,r)}},ir=(t,e,i)=>{for(let a=0;a<e;a++)X(t),X(t),i&&(X(t),X(t)),t.readBits(1)},f0=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let n=0;n<a.length;n++)e.push(a[n])}}return new Uint8Array(e)};var ar;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(ar||(ar={}));const u0=function*(t){const e=new Te(t),i=()=>{let a=0;for(let n=0;n<8;n++){const r=e.readAlignedByte();if(a|=(r&127)<<n*7,!(r&128))break;if(n===7&&r&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),n=e.readBits(1),r=e.readBits(1);e.skipBits(1),n&&e.skipBits(8);let o;if(r){const s=i();if(s===null)return;o=s}else o=Math.floor(e.getBitsLeft()/8);N(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+o)},e.skipBits(o*8)}},d0=t=>{const e=tt(t),i=e.getUint8(9),a=e.getUint16(10,!0),n=e.getUint32(12,!0),r=e.getInt16(16,!0),o=e.getUint8(18);let s=null;return o&&(s=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:n,outputGain:r,channelMappingFamily:o,channelMappingTable:s}},h0=(t,e,i)=>{switch(t){case"avc":{for(const a of Zf(i,e)){const n=i[a.offset],r=Jn(n);if(r>=ht.NON_IDR_SLICE&&r<=ht.SLICE_DPC)return"delta";if(r===ht.IDR)return"key";if(r===ht.SEI&&(!Cf()||Sf()>=144)){const o=i.subarray(a.offset,a.offset+a.length),s=Hi(o);let l=1;do{let c=0;for(;;){const d=s[l++];if(d===void 0||(c+=d,d<255))break}let f=0;for(;;){const d=s[l++];if(d===void 0||(f+=d,d<255))break}if(c===6){const d=new Te(s);d.pos=8*l;const u=X(d),v=d.readBits(1);if(u===0&&v===1)return"key"}l+=f}while(l<s.length-1)}}return"delta"}case"hevc":{for(const a of t0(i,e)){const n=va(i[a.offset]);if(n<qe.BLA_W_LP)return"delta";if(n<=qe.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new Te(i);if(a.readBits(2)!==2)return null;const n=a.readBits(1);return(a.readBits(1)<<1)+n===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:n,data:r}of u0(i))if(n===1){const o=new Te(r);o.skipBits(4),a=!!o.readBits(1)}else if(n===3||n===6||n===7){if(a)return"key";const o=new Te(r);return o.readBits(1)?null:o.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Et(t),N(!1)}};var nr;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(nr||(nr={}));const m0=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new Te(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),n=e.readBits(5);if(n>8)return null;const r=e.readBits(3),o=e.readBits(3);(o&1)!==0&&o!==1&&e.skipBits(2),(o&4)!==0&&e.skipBits(2),o===2&&e.skipBits(2);const s=e.readBits(1),l=Math.floor(a/2);return{fscod:i,bsid:n,bsmod:r,acmod:o,lfeon:s,bitRateCode:l}},p0=[1,2,3,6],g0=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new Te(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),n=e.readBits(2);let r=0,o;n===3?(r=e.readBits(2),o=3):o=e.readBits(2);const s=e.readBits(3),l=e.readBits(1),c=e.readBits(5);if(c<11||c>16)return null;const f=p0[o];let h;return n<3?h=Kf[n]/1e3:h=Xf[r]/1e3,{dataRate:Math.round((a+1)*h/(f*16)),substreams:[{fscod:n,fscod2:r,bsid:c,bsmod:0,acmod:s,lfeon:l,numDepSub:0,chanLoc:0}]}},v0=1683496997,b0=18,y0=10,rr=32,w0=20,k0=8,x0=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],_0=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],T0=[16,16,20,20,0,24,24,0],or=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],C0=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],S0=8,E0=[32e3,44100,48e3,0],P0=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],M0=[512,1024,2048,4096],I0=t=>{const e=A0(t),i=tt(t);let a=e?Math.ceil(e.frameSize/4)*4:0,n=null;for(;a+4<=t.length&&i.getUint32(a)===v0;){const o=B0(t.subarray(a));if(!o)break;n??=o,a+=o.frameSize}if(e)return{frameSize:n?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:n!==null};if(!n?.asset)return null;const{asset:r}=n;return{frameSize:a,sampleRate:r.sampleRate,numberOfChannels:r.numberOfChannels,sampleCount:r.sampleCount,channelLayout:r.channelLayout,pcmResolution:r.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},A0=t=>{if(t.length<b0||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new Te(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==rr-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%k0!==0)return null;const n=e.readBits(14)+1;if(n<96)return null;const r=e.readBits(6);if(r>=or.length)return null;const o=x0[e.readBits(4)];if(o===0)return null;const s=_0[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const l=e.readBits(2);if(l===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const c=T0[e.readBits(3)];if(c===0)return null;const f=l!==0;return{frameSize:n,sampleRate:o,numberOfChannels:or[r]+(f?1:0),sampleCount:a*rr,channelLayout:C0[r]|(f?S0:0),amode:r,lfePresent:f,bitRate:s,pcmResolution:c}},B0=t=>{if(t.length<y0||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new Te(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),n=8+4*a,r=16+4*a;e.skipBits(n);const o=e.readBits(r)+1,s={frameSize:o,asset:null};if(!e.readBits(1))return s;const l=E0[e.readBits(2)],c=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const f=e.readBits(3)+1,h=e.readBits(3)+1,d=[];for(let m=0;m<f;m++)d.push(e.readBits(i+1));for(const m of d)e.skipBits(8*wf(m));if(e.readBits(1)){e.skipBits(2);const m=e.readBits(2)+1<<2,b=e.readBits(2)+1;e.skipBits(b*m)}for(let m=0;m<h;m++)e.skipBits(r);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const u=e.readBits(5)+1,v=P0[e.readBits(4)],p=e.readBits(8)+1;let y=0;if(e.readBits(1)&&(p>2&&e.skipBits(1),p>6&&e.skipBits(1),e.readBits(1))){const m=e.readBits(2)+1<<2;y=e.readBits(m)}return l===0||e.getBitsLeft()<0?s:{frameSize:o,asset:{sampleRate:v,numberOfChannels:p,sampleCount:Math.round(c*v/l),channelLayout:y,pcmResolution:u}}},R0=t=>{const e=new Uint8Array(w0),i=tt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,n=new Te(e);return n.seekToByte(13),n.writeBits(2,Math.max(M0.indexOf(t.sampleCount),0)),n.writeBits(5,a),n.writeBits(1,t.core?.lfePresent?1:0),n.writeBits(6,t.core?.amode??0),n.writeBits(14,t.core?t.core.frameSize-1:0),n.writeBits(1,0),n.writeBits(3,0),n.writeBits(16,t.channelLayout),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const sr=new Uint8Array(0);class nt{constructor(e,i,a,n,r=-1,o,s){if(this.data=e,this.type=i,this.timestamp=a,this.duration=n,this.sequenceNumber=r,e===sr&&o===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(o===void 0&&(o=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(r))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(o)||o<0)throw new TypeError("byteLength must be a non-negative integer.");if(s!==void 0&&(typeof s!="object"||!s))throw new TypeError("sideData, when provided, must be an object.");if(s?.alpha!==void 0&&!(s.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(s?.alphaByteLength!==void 0&&(!Number.isInteger(s.alphaByteLength)||s.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=o,this.sideData=s??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===sr}get microsecondTimestamp(){return Math.trunc(wt*this.timestamp)}get microsecondDuration(){return Math.trunc(wt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new nt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new nt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const z0=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ba=8,lr=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const F0=7,O0=9,cr=t=>{const e=t.filePos,i=ou(t,9),a=new Te(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const o=a.readBits(1),s=a.readBits(2)+1,l=a.readBits(4);if(l===15)return null;a.skipBits(1);const c=a.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const f=a.readBits(13);a.skipBits(11);const h=a.readBits(2)+1;if(h!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let d=null;return o===1?t.filePos-=2:d=a.readBits(16),{objectType:s,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:f,numberOfAacFrames:h,crcCheck:d,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var H0=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(r){return Promise.reject(r)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},L0=(function(t){return function(e){function i(o){e.error=e.hasError?new t(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var a,n=0;function r(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(r);if(a.dispose){var o=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(o).then(r,function(s){return i(s),r()})}else n|=1}catch(s){i(s)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return r()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});Ef();let fr=-1/0,ur=-1/0,oi=null;typeof FinalizationRegistry<"u"&&(oi=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-fr>=1e3&&(ve._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),fr=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-ur>=1e3&&(ve._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),ur=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class It{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const ya=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],U0=new Set(ya);class Re{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(wt*this.timestamp)}get microsecondDuration(){return Math.trunc(wt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!U0.has(i.format))throw new TypeError("init.format must be one of: "+ya.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const r of i.layout){if(!r||typeof r!="object"||Array.isArray(r))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(r.offset)||r.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(r.stride)||r.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&da(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??W0(i.format,i.codedWidth,i.codedHeight);let n=i.colorSpace??null;n===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?n={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:n={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?Ne(e):Ne(e).slice(),this._layout=a,this.colorSpace=new wa(n)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&da(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new wa(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&da(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Re(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*wt),duration:Math.trunc((i.duration??0)*wt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,n=0;if("naturalWidth"in e?(a=e.naturalWidth,n=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,n=e.videoHeight):"width"in e&&(a=Number(e.width),n=Number(e.height)),!a||!n)throw new TypeError("Could not determine dimensions.");const r=i.visibleRect??{left:0,top:0,width:a,height:n},o=new OffscreenCanvas(r.width,r.height),s=o.getContext("2d",{alpha:Nn(),willReadFrequently:!0});if(!s)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");s.drawImage(e,-r.left,-r.top),this._data=o,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:r.width,height:r.height},this.squarePixelWidth=r.width,this.squarePixelHeight=r.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new wa({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof It){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!ya.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=Wn({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),oi?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return N(this._data!==null),this._data instanceof It?new Re(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):li(this._data)?new Re(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(N(this._layout),new Re(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Re(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(oi?.unregister(this),this._data instanceof It?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):li(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(pr(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return li(this._data)?this._data.allocationSize(e):gr(this,e).allocationSize}async copyTo(e,i={}){if(!Ri(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(pr(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(N(this._data!==null),li(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof It){const c={stack:[],error:void 0,hasError:!1};try{const f=H0(c,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(f instanceof Re))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(f.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${f.format}' instead.`);return await f.copyTo(e,i)}catch(f){c.error=f,c.hasError=!0}finally{L0(c)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const c=this.toVideoFrame(),f=await c.copyTo(e,i);return c.close(),f}const a=gr(this,i);N(this.format);const n=Ne(e);if(n.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${n.byteLength}`);const r=Li(this.format);let o;if(this._data instanceof It){let c=this._data.getDataPlanes();if(c instanceof Promise&&(c=await c),!Array.isArray(c)||c.some(f=>!(f.data instanceof Uint8Array)||!Number.isInteger(f.stride)||f.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');o=c}else if(this._data instanceof Uint8Array)N(this._layout),N(this._layout.length===r.length),o=this._layout.map((c,f)=>{const h=Math.ceil(this.codedHeight/r[f].heightDivisor);return{data:this._data.subarray(c.offset,c.offset+c.stride*h),stride:c.stride}});else{const f=this._data.getContext("2d");N(f);const h=f.getImageData(0,0,this.codedWidth,this.codedHeight);o=[{data:Ne(h.data),stride:4*this.codedWidth}]}const s=[],l=r.length;for(let c=0;c<l;c++){const f=a.computedLayouts[c],h=o[c].stride,d=o[c].data;let u=f.sourceTop*h;u+=f.sourceLeftBytes;let v=f.destinationOffset;const p=f.sourceWidthBytes,y={offset:v,stride:f.destinationStride};for(let m=0;m<f.sourceHeight;m++){if(u+p>d.byteLength)throw new Error("Source buffer OOB read.");if(v+p>n.byteLength)throw new Error("Destination buffer OOB write.");const b=d.subarray(u,u+p);n.set(b,v),u+=h,v+=f.destinationStride}s.push(y)}if(i.format!==void 0){const c=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),f=this.format.includes("X")&&i.format.includes("A");if(c||f)for(let h=0;h<a.allocationSize;h+=4){if(c){const d=n[h],u=n[h+2];n[h]=u,n[h+2]=d}f&&(n[h+3]=255)}}return s}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof It){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((o,s)=>o+s.data.byteLength,0),a=new Uint8Array(i);let n=0;const r=[];for(const o of e)a.set(o.data,n),r.push(n),n+=o.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((o,s)=>({offset:r[s],stride:o.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return li(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(N(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,n,r,o,s,l,c){let f=0,h=0,d=this.displayWidth,u=this.displayHeight,v=0,p=0,y=this.displayWidth,m=this.displayHeight;if(o!==void 0?(f=i,h=a,d=n,u=r,v=o,p=s,l!==void 0?(y=l,m=c):(y=d,m=u)):(v=i,p=a,n!==void 0&&(y=n,m=r)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(f))throw new TypeError("sx must be a number.");if(!Number.isFinite(h))throw new TypeError("sy must be a number.");if(!Number.isFinite(d)||d<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(u)||u<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(v))throw new TypeError("dx must be a number.");if(!Number.isFinite(p))throw new TypeError("dy must be a number.");if(!Number.isFinite(y)||y<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(m)||m<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:f,sy:h,sWidth:d,sHeight:u}=this._rotateSourceRegion(f,h,d,u,this.rotation));const b=this.toCanvasImageSource();e.save();const k=v+y/2,x=p+m/2;e.translate(k,x),e.rotate(this.rotation*Math.PI/180);const C=this.rotation%180===0?1:y/m;e.scale(1/C,C),e.drawImage(b,f,h,d,u,-y/2,-m/2,y,m),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&ka(i.crop,"options.");const a=e.canvas.width,n=e.canvas.height,r=i.rotation??this.rotation,[o,s]=r%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let l=i.crop;l&&(l=mr(l,o,s));let c,f,h,d;const{sx:u,sy:v,sWidth:p,sHeight:y}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??o,i.crop?.height??s,r);if(i.fit==="fill")c=0,f=0,h=a,d=n;else{const[b,k]=i.crop?[i.crop.width,i.crop.height]:[o,s],x=i.fit==="contain"?Math.min(a/b,n/k):Math.max(a/b,n/k);h=b*x,d=k*x,c=(a-h)/2,f=(n-d)/2}e.save();const m=r%180===0?1:h/d;e.translate(a/2,n/2),e.rotate(r*Math.PI/180),e.scale(1/m,m),e.translate(-a/2,-n/2),e.drawImage(this.toCanvasImageSource(),u,v,p,y,c,f,h,d),e.restore()}_rotateSourceRegion(e,i,a,n,r){return r===90?[e,i,a,n]=[i,this.squarePixelHeight-e-a,n,a]:r===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-n]:r===270&&([e,i,a,n]=[this.squarePixelWidth-i-n,e,n,a]),{sx:e,sy:i,sWidth:a,sHeight:n}}_drawWithFitAndMipmapping(e,i,a){const n=e.width,r=e.height,[o,s]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],l=a.crop?a.crop.width:o,c=a.crop?a.crop.height:s;let f=0;2*n<l&&2*r<c&&(f=Math.floor(Math.log2(Math.min(l/n,c/r))));const h=n*2**f,d=r*2**f,{canvas:u,context:v,isNew:p}=f>0?hr(h,d):{canvas:e,context:i,isNew:a.targetIsFresh};v.imageSmoothingQuality="high",a.fillBlack?(v.fillStyle="black",v.fillRect(0,0,h,d)):p||v.clearRect(0,0,h,d),this.drawWithFit(v,{fit:a.fit,rotation:a.rotation,crop:a.crop}),v.globalCompositeOperation="copy";for(let y=f;y>1;y--){const m=n*2**y,b=r*2**y;v.drawImage(u,0,0,m,b,0,0,m/2,b/2)}v.globalCompositeOperation="source-over",f>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(u,0,0,2*n,2*r,0,0,n,r),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof It||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&ka(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=mf(this.rotation+(e.rotate??0)),[a,n]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let r=e.crop;r&&(r=mr(r,a,n));const o=r?r.width:a,s=r?r.height:n,l=o/s;let c,f;e.width!==void 0&&e.height===void 0?(c=e.width,f=c/l):e.width===void 0&&e.height!==void 0?(f=e.height,c=f*l):e.width!==void 0&&e.height!==void 0?(c=e.width,f=e.height):(c=o,f=s),c=On(c,e.roundDimensionsTo??1),f=On(f,e.roundDimensionsTo??1);const h={width:c,height:f,fit:e.fit??"fill",rotation:i,crop:r??{left:0,top:0,width:a,height:n},alpha:e.alpha??"keep"};for(const p of N0){let y=p(this,h);if(y instanceof Promise&&(y=await y),y!==null)return y}const{canvas:d,context:u,isNew:v}=hr(h.width,h.height);return this._drawWithFitAndMipmapping(d,u,{fit:h.fit,rotation:h.rotation,crop:h.crop,targetIsFresh:v,fillBlack:h.alpha==="discard"}),new Re(d,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const N0=[],q0=3,si=[];let dr=0;const hr=(t,e)=>{for(const n of si)if(n.canvas.width===t&&n.canvas.height===e)return n.age=dr++,{canvas:n.canvas,context:n.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return si.length>=q0&&si.splice(Pf(si,n=>n.age),1),si.push({canvas:i,context:a,age:dr++}),{canvas:i,context:a,isNew:!0}};class wa{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Ii);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(Ai);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const n=Object.keys(Bi);if(e.matrix!=null&&!n.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${n.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const li=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,mr=(t,e,i)=>{const a=Math.min(t.left,e),n=Math.min(t.top,i),r=Math.min(t.width,e-a),o=Math.min(t.height,i-n);return N(r>=0),N(o>=0),{left:a,top:n,width:r,height:o}},ka=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},pr=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},W0=(t,e,i)=>{const a=Li(t),n=[];let r=0;for(const o of a){const s=Math.ceil(e/o.widthDivisor),l=Math.ceil(i/o.heightDivisor),c=s*o.sampleBytes,f=c*l;n.push({offset:r,stride:c}),r+=f}return n},Li=t=>{const e=(i,a,n,r,o)=>{const s=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:n,heightDivisor:r},{sampleBytes:a,widthDivisor:n,heightDivisor:r}];return o&&s.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),s};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Et(t),N(!1)}},gr=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,n=D0(i,a,t.codedWidth,t.codedHeight,t.format),r=e.layout;let o;if(!e.format||e.format===t.format)o=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))o=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return j0(n,o,r)},D0=(t,e,i,a,n)=>{const r={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");r.x=e.x||0,r.y=e.y||0,r.width=e.width||0,r.height=e.height||0}if(!$0(n,r))throw new TypeError("visibleRect alignment is invalid for the format.");return r},$0=(t,e)=>{if(t===null)return!0;const i=Li(t);for(let a=0;a<i.length;a++){const n=i[a],r=n.widthDivisor,o=n.heightDivisor;if((e.x||0)%r!==0||(e.y||0)%o!==0)return!1}return!0},j0=(t,e,i)=>{const a=Li(e),n=a.length;if(i!==void 0&&i.length!==n)throw new TypeError(`Layout must have ${n} planes.`);let r=0;const o=[],s=[];for(let l=0;l<n;l++){const c=a[l],f=c.sampleBytes,h=c.widthDivisor,d=c.heightDivisor,u={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(u.sourceTop=Math.ceil(Math.trunc(t.y||0)/d),u.sourceHeight=Math.ceil(Math.trunc(t.height||0)/d),u.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/h)*f,u.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/h)*f,i!==void 0){const y=i[l];if(y.stride<u.sourceWidthBytes)throw new TypeError(`Stride for plane ${l} is too small.`);u.destinationOffset=y.offset,u.destinationStride=y.stride}else u.destinationOffset=r,u.destinationStride=u.sourceWidthBytes;const p=u.destinationStride*u.sourceHeight+u.destinationOffset;if(p>4294967295)throw new TypeError("Allocation size exceeds limit.");s.push(p),r=Math.max(r,p);for(let y=0;y<l;y++){const m=o[y];if(!(s[l]<=m.destinationOffset||s[y]<=u.destinationOffset))throw new TypeError("Planes overlap.")}o.push(u)}return{allocationSize:r,computedLayouts:o}},Ui=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class ci{constructor(){this._referenceCount=0}}class Oe{get microsecondTimestamp(){return Math.trunc(wt*this.timestamp)}get microsecondDuration(){return Math.trunc(wt*this.duration)}constructor(e){if(this._closed=!1,fi(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof ci){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Ui.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Ui.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(kt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let a;if(e.data instanceof ArrayBuffer)a=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))a=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const n=this.numberOfFrames*this.numberOfChannels*kt(this.format);if(a.byteLength<n)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=a}oi?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Ui.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,a=e.frameOffset??0;if(a>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const n=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-a;if(n>this.numberOfFrames-a)throw new RangeError("frameCount out of range");const r=kt(i),o=At(i);if(o&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!o&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(o?n:n*this.numberOfChannels)*r}copyTo(e,i){if(!Ri(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!Ui.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:a,frameCount:n,frameOffset:r}=i;let{planeIndex:o}=i;const s=this.format,l=a??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,f=this.numberOfChannels,h=r??0;if(h>=c)throw new RangeError("frameOffset out of range");const d=n!==void 0?n:c-h;if(d>c-h)throw new RangeError("frameCount out of range");const u=kt(l),v=At(l);if(v&&o>=f)throw new RangeError("planeIndex out of range");if(!v&&o!==0)throw new RangeError("planeIndex out of range");const y=(v?d:d*f)*u;if(e.byteLength<y)throw new RangeError("Destination buffer is too small");const m=tt(e),b=br(l);if(fi(this._data))Tf()&&f>2&&l!==s?G0(this._data,m,s,l,f,o,h,d):this._data.copyTo(e,{planeIndex:o,frameOffset:h,frameCount:d,format:l});else{const k=vr(s),x=kt(s),C=At(s);let I;if(this._data instanceof ci){const z=A=>{const U=this._data.getDataPlane(A);if(!(U instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const G=c*x*(C?1:f);if(U.byteLength!==G)throw new TypeError(`Data plane ${A} has invalid size. Expected exactly ${G} bytes, got ${U.byteLength} bytes.`);return U};if(C)if(v)I=z(o),o=0;else{I=new Uint8Array(c*x*f);for(let A=0;A<f;A++){const U=z(A);I.set(U,A*c*x)}}else I=z(0)}else I=this._data;const P=tt(I);for(let z=0;z<d;z++)if(v){const A=z*u;let U;C?U=(o*c+(z+h))*x:U=((z+h)*f+o)*x;const G=k(P,U);b(m,A,G)}else for(let A=0;A<f;A++){const G=(z*f+A)*u;let T;C?T=(A*c+(z+h))*x:T=((z+h)*f+A)*x;const B=k(P,T);b(m,G,B)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof ci){const e=new Oe(this._data);return e.setTimestamp(this.timestamp),e}else if(fi(this._data)){const e=new Oe(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new Oe({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const a=i-e,n=kt(this.format);let r;if(At(this.format)){const o=a*n;if(r=new Uint8Array(o*this.numberOfChannels),a>0)for(let s=0;s<this.numberOfChannels;s++)this.copyTo(r.subarray(s*o,(s+1)*o),{planeIndex:s,format:this.format,frameOffset:e,frameCount:a})}else r=new Uint8Array(a*this.numberOfChannels*n),a>0&&this.copyTo(r,{planeIndex:0,format:this.format,frameOffset:e,frameCount:a});return new Oe({data:r,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(oi?.unregister(this),this._data instanceof ci?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):fi(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof ci?this._createAudioDataFromData():fi(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(At(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(new Uint8Array(i,a*e,e),{planeIndex:a,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let a=0;a<this.numberOfChannels;a++)this.copyTo(i,{planeIndex:a,format:"f32-planar"}),e.copyToChannel(i,a);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,r=e.sampleRate,o=e.length,s=Math.floor(a/n);let l=0,c=o;for(;c>0;){const f=Math.min(s,c),h=new Float32Array(n*f);for(let d=0;d<n;d++)e.copyFromChannel(h.subarray(d*f,(d+1)*f),d,l);yield new Oe({format:"f32-planar",sampleRate:r,numberOfFrames:f,numberOfChannels:n,timestamp:i+l/r,data:h}),l+=f,c-=f}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const a=48e3*5,n=e.numberOfChannels,r=e.sampleRate,o=e.length,s=Math.floor(a/n);let l=0,c=o;const f=[];for(;c>0;){const h=Math.min(s,c),d=new Float32Array(n*h);for(let v=0;v<n;v++)e.copyFromChannel(d.subarray(v*h,(v+1)*h),v,l);const u=new Oe({format:"f32-planar",sampleRate:r,numberOfFrames:h,numberOfChannels:n,timestamp:i+l/r,data:d});f.push(u),l+=h,c-=h}return f}}const kt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},At=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},vr=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},br=t=>{switch(t){case"u8":case"u8-planar":return(e,i,a)=>e.setUint8(i,Ee((a+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,a)=>e.setInt16(i,Ee(Math.round(a*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,a)=>e.setInt32(i,Ee(Math.round(a*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,a)=>e.setFloat32(i,a,!0)}},fi=t=>typeof AudioData<"u"&&t instanceof AudioData,V0=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},G0=(t,e,i,a,n,r,o,s)=>{const l=vr(i),c=br(a),f=kt(i),h=kt(a),d=At(i);if(At(a))if(d){const v=new ArrayBuffer(s*f),p=tt(v);t.copyTo(v,{planeIndex:r,frameOffset:o,frameCount:s,format:i});for(let y=0;y<s;y++){const m=y*f,b=y*h,k=l(p,m);c(e,b,k)}}else{const v=new ArrayBuffer(s*n*f),p=tt(v);t.copyTo(v,{planeIndex:0,frameOffset:o,frameCount:s,format:i});for(let y=0;y<s;y++){const m=(y*n+r)*f,b=y*h,k=l(p,m);c(e,b,k)}}else if(d){const v=s*f,p=new ArrayBuffer(v),y=tt(p);for(let m=0;m<n;m++){t.copyTo(p,{planeIndex:m,frameOffset:o,frameCount:s,format:i});for(let b=0;b<s;b++){const k=b*f,x=(b*n+m)*h,C=l(y,k);c(e,x,C)}}}else{const v=new ArrayBuffer(s*n*f),p=tt(v);t.copyTo(v,{planeIndex:0,frameOffset:o,frameCount:s,format:i});for(let y=0;y<s;y++)for(let m=0;m<n;m++){const b=y*n+m,k=b*f,x=b*h,C=l(p,k);c(e,x,C)}}},K0=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),a=new ArrayBuffer(i);return t.copyTo(a,{format:e,planeIndex:0}),new Oe({data:a,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const yr=new Map,wr=new Map,X0=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!dt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${dt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&ka(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");kr(t.codec,t)},kr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Oi(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},xr=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(r,o,s)=>({codec:t.fullCodecString??Of(t.codec,t.width,t.height,s,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:r,bitrateMode:o,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Uf(t.codec)}),n=[];return i.quantizer!==null&&n.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&n.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),N(n.length>0),n},Z0=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Pt.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${Pt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(Ve.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ze))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ze)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");_r(t.codec,t)},_r=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Oi(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},Tr=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Lf(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Nf(t.codec)}};class ze{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in Cr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?Cr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,n){const r=Q0[e];let o=null,s=this._bitrateMode??n??"variable";if(this._quantizer!==void 0){if(r)if(this._quantizer<r.min||this._quantizer>r.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${r.min} and ${r.max}.`)}else o=this._quantizer,this._bitrate===void 0&&(s="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&r&&!this._preferBitrate&&(N(this._quality!==void 0),o=Ee(Math.round(bf(r.worst,r.best,this._quality)),r.min,r.max));let l;if(this._bitrate!==void 0)l=this._bitrate;else{let c=this._quality;c===void 0&&(N(o!==null&&r),c=Ee((o-r.worst)/(r.best-r.worst),0,1)),l=Sr(e,i,a,xa(c))}return{quantizer:o,bitrate:l,bitrateMode:s}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(N(this._quality!==void 0),Sr(e,i,a,xa(this._quality)))}_toAudioBitrate(e){if(Ve.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=xa(this._quality),n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let r=n*i;return e==="aac"?r=[96e3,128e3,16e4,192e3].reduce((s,l)=>Math.abs(l-r)<Math.abs(s-r)?l:s):e==="opus"||e==="vorbis"?r=Math.max(6e3,r):e==="mp3"&&(r=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((s,l)=>Math.abs(l-r)<Math.abs(s-r)?l:s)),Math.round(r/1e3)*1e3}}const Cr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Q0={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},xa=t=>.3*Math.exp(2.5538*t),Sr=(t,e,i,a)=>{const n=e*i,r=1920*1080,o=3e6,s=Math.pow(n/r,.95),l=o*s,c={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/o},h=l*c[t]*a;return Math.ceil(h/1e3)*1e3},Er=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};N(!1)},Y0=new ze("high"),J0=async(t,e={})=>{const{width:i=1280,height:a=720,quality:n,bitrate:r,...o}=e;if(!dt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(n!==void 0&&!(n instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&r!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(r!==void 0&&!(r instanceof ze)&&(!Number.isInteger(r)||r<=0))throw new TypeError("bitrate must be a positive integer or a quality.");kr(t,o);const s=Ni(n,r)??new ze("medium");let l;try{l=xr({codec:t,width:i,height:a,quality:s,framerate:void 0,...o,alpha:"discard"})}catch{return!1}const c=JSON.stringify(l),f=yr.get(c);if(f)return f;const h=(async()=>{for(const{config:u}of l)if(Pr.some(v=>v.supports(t,u)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:u,quantizer:v}of l){try{if(!(await VideoEncoder.isConfigSupported(u)).supported)continue}catch{continue}if(!Nn()||await new Promise(async y=>{try{const m=new VideoEncoder({output:()=>{},error:()=>y(!1)});m.configure(u);const b=new Uint8Array(i*a*4),k=new VideoFrame(b,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});m.encode(k,v!==null?Er(t,v):void 0),k.close(),await m.flush(),y(!0)}catch{y(!1)}}))return!0}return!1})();return yr.set(c,h),h},eu=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:a=48e3,quality:n,bitrate:r,...o}=e;if(!Pt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("sampleRate must be a positive integer.");if(n!==void 0&&!(n instanceof ze))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&r!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(r!==void 0&&!(r instanceof ze)&&(!Number.isInteger(r)||r<=0))throw new TypeError("bitrate must be a positive integer.");_r(t,o);const s=Ni(n,r)??new ze("medium"),l=Tr({codec:t,numberOfChannels:i,sampleRate:a,quality:s,...o}),c=JSON.stringify(l),f=wr.get(c);if(f)return f;const h=(async()=>{if(Mr.some(d=>d.supports(t,l))||Ve.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(l)).supported===!0}catch{return!1}})();return wr.set(c,h),h},Ni=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ze?e:new ze({bitrate:e})},tu=async(t,e)=>{for(const i of t)if(await J0(i,e))return i;return null},iu=async(t,e)=>{for(const i of t)if(await eu(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Pr=[],Mr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const au=t=>{let a=t,n=4096,r=0,o=12,s=0;for(a<0&&(a=-a,r=128),a+=33,a>8191&&(a=8191);(a&n)!==n&&o>=5;)n>>=1,o--;return s=a>>o-4&15,~(r|o-5<<4|s)&255},nu=t=>{let i=2048,a=0,n=11,r=0,o=t;for(o<0&&(o=-o,a=128),o>4095&&(o=4095);(o&i)!==i&&n>=5;)i>>=1,n--;return r=o>>(n===4?1:n-4)&15,(a|n-4<<4|r)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ui{constructor(e,i,a,n,r){this.bytes=e,this.view=i,this.offset=a,this.start=n,this.end=r,this.bufferPos=n-a}static tempFromBytes(e){return new ui(e,tt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new ui(this.bytes,this.view,this.offset,e,e+i)}}const ru=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},ou=(t,e)=>{ru(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class su{constructor(e){this.mutex=new Rn,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let n=this.trackTimestampInfo.get(e);if(n){if(a&&(n.maxTimestampBeforeLastKeyPacket=n.maxTimestamp),n.maxTimestampBeforeLastKeyPacket!==null&&i<n.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${n.maxTimestampBeforeLastKeyPacket}s.`);n.maxTimestamp=Math.max(n.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");n={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,n)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ir=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,lu=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),n=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+n.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class qi{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const r of e.children)r&&this.writeBox(r);const a=this.writer.getPos(),n=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,n),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);N(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const le=new Uint8Array(8),We=new DataView(le.buffer),be=t=>[(t%256+256)%256],ae=t=>(We.setUint16(0,t,!1),[le[0],le[1]]),_a=t=>(We.setInt16(0,t,!1),[le[0],le[1]]),Ar=t=>(We.setUint32(0,t,!1),[le[1],le[2],le[3]]),j=t=>(We.setUint32(0,t,!1),[le[0],le[1],le[2],le[3]]),mt=t=>(We.setInt32(0,t,!1),[le[0],le[1],le[2],le[3]]),rt=t=>(We.setUint32(0,Math.floor(t/2**32),!1),We.setUint32(4,t,!1),[le[0],le[1],le[2],le[3],le[4],le[5],le[6],le[7]]),cu=t=>(We.setInt32(0,Math.floor(t/2**32),!1),We.setUint32(4,t,!1),[le[0],le[1],le[2],le[3],le[4],le[5],le[6],le[7]]),Br=t=>(We.setInt16(0,2**8*t,!1),[le[0],le[1]]),Ge=t=>(We.setInt32(0,2**16*t,!1),[le[0],le[1],le[2],le[3]]),Ta=t=>(We.setInt32(0,2**30*t,!1),[le[0],le[1],le[2],le[3]]),Ca=(t,e)=>{const i=[];let a=t;do{let n=a&127;a>>=7,i.length>0&&(n|=128),i.push(n)}while(a>0||e);return i.reverse()},he=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,n)=>t.charCodeAt(n));return e&&i.push(0),i},Rr=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},zr=Rr(0),Fr=t=>[Ge(t[0]),Ge(t[1]),Ta(t[2]),Ge(t[3]),Ge(t[4]),Ta(t[5]),Ge(t[6]),Ge(t[7]),Ta(t[8])],ie=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),ce=(t,e,i,a,n)=>ie(t,[be(e),Ar(i),a??[]],n),fu=t=>t.isQuickTime?ie("ftyp",[he("qt  "),j(512),he("qt  ")]):t.fragmented?t.cmaf?ie("ftyp",[he("iso5"),j(512),he("iso5"),he("iso6"),he("mp41"),he("cmfc"),he("dash")]):ie("ftyp",[he("iso5"),j(512),he("iso5"),he("iso6"),he("mp41")]):ie("ftyp",[he("isom"),j(512),he("isom"),t.holdsAvc?he("avc1"):[],he("mp41")]),Or=()=>ie("styp",[he("iso5"),j(0),he("iso5"),he("iso6"),he("mp41"),he("cmfc"),he("dash")]),Hr=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),ce("sidx",1,0,[j(1),j(Xe),rt(ge(t.minWrittenTimestamp,Xe)),rt(0),ae(0),ae(1),j(e&2147483647),j(ge(i,Xe)),j(0)])},Wi=t=>({type:"mdat",largeSize:t}),uu=t=>({type:"free",size:t}),di=t=>ie("moov",void 0,[du(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>hu(e,t.creationTime)),t.isFragmented?Zu(t.trackDatas):null,cd(t)]),du=(t,e)=>{const i=Math.max(0,...e.map(o=>ge(Di(o),Xe)+ge(o.startTimestampOffset??0,Xe))),a=Math.max(0,...e.map(o=>o.track.id))+1,n=!yt(t)||!yt(i),r=n?rt:j;return ce("mvhd",+n,0,[r(t),r(t),j(Xe),r(i),Ge(1),Br(1),Array(10).fill(0),Fr(zr),Array(24).fill(0),j(a)])},Di=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const n=t.samples[a];n.timestamp<e&&(e=n.timestamp),n.timestamp+n.duration>i&&(i=n.timestamp+n.duration)}return e===1/0?0:i-e},hu=(t,e)=>{const i=wd(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ie("trak",void 0,[mu(t,e),a?pu(t,t.startTimestampOffset):null,gu(t,e),i.name!==void 0?ie("udta",void 0,[ie("name",[...it.encode(i.name)])]):null])},mu=(t,e)=>{const i=ge(Di(t),Xe)+ge(t.startTimestampOffset??0,Xe),a=!yt(e)||!yt(i),n=a?rt:j;let r;if(t.type==="video"){const l=t.track.metadata.rotation;r=Rr(l??0)}else r=zr;let o=2;t.track.metadata.disposition?.default!==!1&&(o|=1);const s=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Et(t);return ce("tkhd",+a,o,[n(e),n(e),j(t.track.id),j(0),n(i),Array(8).fill(0),ae(0),ae(s),Br(t.type==="audio"?1:0),ae(0),Fr(r),Ge(t.type==="video"?t.info.width:0),Ge(t.type==="video"?t.info.height:0)])},pu=(t,e)=>{const i=ge(e,Xe),a=ge(Di(t),Xe),n=!yt(i)||!yt(a),r=n?rt:j,o=n?cu:mt;return ie("edts",void 0,[ce("elst",n?1:0,0,[j(2),r(i),o(-1),Ge(1),r(a),o(0),Ge(1)])])},gu=(t,e)=>ie("mdia",void 0,[vu(t,e),Sa(!0,bu[t.type],yu[t.type]),wu(t)]),vu=(t,e)=>{const i=ge(Di(t),t.timescale),a=!yt(e)||!yt(i),n=a?rt:j;return ce("mdhd",+a,0,[n(e),n(e),j(t.timescale),n(i),ae($r(t.track.metadata.languageCode??yf)),ae(0)])},bu={video:"vide",audio:"soun",subtitle:"text"},yu={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Sa=(t,e,i,a="\0\0\0\0")=>ce("hdlr",0,0,[t?he("mhlr"):j(0),he(e),he(a),j(0),j(0),he(i,!0)]),wu=t=>ie("minf",void 0,[ku[t.type](),xu(),Cu(t)]),ku={video:()=>ce("vmhd",0,1,[ae(0),ae(0),ae(0),ae(0)]),audio:()=>ce("smhd",0,0,[ae(0),ae(0)]),subtitle:()=>ce("nmhd",0,0)},xu=()=>ie("dinf",void 0,[_u()]),_u=()=>ce("dref",0,0,[j(1)],[Tu()]),Tu=()=>ce("url ",0,1),Cu=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ie("stbl",void 0,[Su(t),Du(t),e?Ku(t):null,e?Xu(t):null,ju(t),Vu(t),Gu(t),$u(t)])},Su=t=>{let e;if(t.type==="video")e=Eu(hd(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Dr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);N(i),e=Ru(i,t)}else t.type==="subtitle"&&(e=qu(gd[t.track.source._codec],t));return N(e),ce("stsd",0,0,[j(1)],[e])},Eu=(t,e)=>ie(t,[Array(6).fill(0),ae(1),ae(0),ae(0),Array(12).fill(0),ae(e.info.width),ae(e.info.height),j(4718592),j(4718592),j(0),ae(1),be(10),he("Mediabunny"),Array(21).fill(0),ae(e.info.hasAlphaChannel?32:24),_a(65535)],[md[e.track.source._codec]?.(e)??null,Pu(e),pf(e.info.decoderConfig.colorSpace)?Mu(e):null]),Pu=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ie("pasp",[j(t.info.pixelAspectRatio.num),j(t.info.pixelAspectRatio.den)]),Mu=t=>ie("colr",[he(t.muxer.isQuickTime?"nclc":"nclx"),ae(Ii[t.info.decoderConfig.colorSpace.primaries]),ae(Ai[t.info.decoderConfig.colorSpace.transfer]),ae(Bi[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:be((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Iu=t=>t.info.decoderConfig&&ie("avcC",[...Ne(t.info.decoderConfig.description)]),Au=t=>t.info.decoderConfig&&ie("hvcC",[...Ne(t.info.decoderConfig.description)]),Lr=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),n=Number(i[2]),r=Number(i[3]),o=i[4]?Number(i[4]):1,s=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),l=(r<<4)+(o<<1)+s,c=i[5]?Number(i[5]):e.colorSpace?.primaries?Ii[e.colorSpace.primaries]:2,f=i[6]?Number(i[6]):e.colorSpace?.transfer?Ai[e.colorSpace.transfer]:2,h=i[7]?Number(i[7]):e.colorSpace?.matrix?Bi[e.colorSpace.matrix]:2;return ce("vpcC",1,0,[be(a),be(n),be(l),be(c),be(f),be(h),ae(0)])},Bu=t=>ie("av1C",Hf(t.info.decoderConfig.codec)),Ru=(t,e)=>{let i=0,a,n=16;const r=Ve.includes(e.track.source._codec);if(r){const o=e.track.source._codec,{sampleSize:s}=Mt(o);n=8*s,n>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),ae(1),ae(i),ae(0),j(0),ae(e.info.numberOfChannels),ae(n),ae(0),ae(0),ae(e.info.sampleRate<2**16?e.info.sampleRate:0),ae(0)];else{const o=r?0:-2;a=[Array(6).fill(0),ae(1),ae(i),ae(0),j(0),ae(e.info.numberOfChannels),ae(Math.min(n,16)),_a(o),ae(0),ae(e.info.sampleRate<2**16?e.info.sampleRate:0),ae(0),r?[j(1),j(n/8),j(e.info.numberOfChannels*n/8)]:[j(0),j(0),j(0)],j(2)]}return ie(t,a,[pd(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Ea=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...be(e),...be(21),...Ar(0),...j(0),...j(0)];if(t.info.decoderConfig.description){const a=Ne(t.info.decoderConfig.description);i=[...i,...be(5),...Ca(a.byteLength),...a]}return i=[...ae(1),...be(0),...be(4),...Ca(i.length),...i,...be(6),...be(1),...be(2)],i=[...be(3),...Ca(i.length),...i],ce("esds",0,0,i)},xt=t=>ie("wave",void 0,[zu(t),Fu(t),ie("\0\0\0\0")]),zu=t=>ie("frma",[he(Dr(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Fu=t=>{const{littleEndian:e}=Mt(t.track.source._codec);return ie("enda",[ae(+e)])},Ou=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,n=0,r=0,o=new Uint8Array(0);const s=t.info.decoderConfig?.description;if(s){N(s.byteLength>=18);const l=Ne(s),c=d0(l);e=c.outputChannelCount,i=c.preSkip,a=c.inputSampleRate,n=c.outputGain,r=c.channelMappingFamily,c.channelMappingTable&&(o=c.channelMappingTable)}return ie("dOps",[be(0),be(e),ae(i),j(a),_a(n),be(r),...o])},Hu=t=>{const e=t.info.decoderConfig?.description;N(e);const i=Ne(e);return ce("dfLa",0,0,[...i.subarray(4)])},ot=t=>{const{littleEndian:e,sampleSize:i}=Mt(t.track.source._codec),a=+e;return ce("pcmC",0,0,[be(a),be(8*i)])},Lu=t=>{N(t.info.primingPacket);const e=m0(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new Te(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),ie("dac3",[...i])},Uu=t=>{N(t.info.primingPacket);const e=g0(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const o of e.substreams)i+=23,o.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),n=new Uint8Array(a),r=new Te(n);r.writeBits(13,e.dataRate),r.writeBits(3,e.substreams.length-1);for(const o of e.substreams)r.writeBits(2,o.fscod),r.writeBits(5,o.bsid),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(3,o.bsmod),r.writeBits(3,o.acmod),r.writeBits(1,o.lfeon),r.writeBits(3,0),r.writeBits(4,o.numDepSub),o.numDepSub>0?r.writeBits(9,o.chanLoc):r.writeBits(1,0);return ie("dec3",[...n])},Nu=t=>{N(t.info.primingPacket);const e=I0(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ie("ddts",[...R0(e)])},qu=(t,e)=>ie(t,[Array(6).fill(0),ae(1)],[vd[e.track.source._codec](e)]),Wu=t=>ie("vttC",[...it.encode(t.info.config.description)]),Du=t=>ce("stts",0,0,[j(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[j(e.sampleCount),j(e.sampleDelta)])]),$u=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return ce("stss",0,0,[j(e.length),e.map(([i])=>j(i+1))])},ju=t=>ce("stsc",0,0,[j(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[j(e.firstChunk),j(e.samplesPerChunk),j(1)])]),Vu=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Mt(t.track.source._codec);return ce("stsz",0,0,[j(e*t.info.numberOfChannels),j(t.samples.reduce((i,a)=>i+ge(a.duration,t.timescale),0))])}return ce("stsz",0,0,[j(0),j(t.samples.length),t.samples.map(e=>j(e.size))])},Gu=t=>t.finalizedChunks.length>0&&je(t.finalizedChunks).offset>=2**32?ce("co64",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>rt(e.offset))]):ce("stco",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>j(e.offset))]),Ku=t=>ce("ctts",1,0,[j(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[j(e.sampleCount),mt(e.sampleCompositionTimeOffset)])]),Xu=t=>{let e=1/0,i=-1/0,a=1/0,n=-1/0;N(t.compositionTimeOffsetTable.length>0),N(t.samples.length>0);for(let o=0;o<t.compositionTimeOffsetTable.length;o++){const s=t.compositionTimeOffsetTable[o];e=Math.min(e,s.sampleCompositionTimeOffset),i=Math.max(i,s.sampleCompositionTimeOffset)}for(let o=0;o<t.samples.length;o++){const s=t.samples[o];a=Math.min(a,ge(s.timestamp,t.timescale)),n=Math.max(n,ge(s.timestamp+s.duration,t.timescale))}const r=Math.max(-e,0);return n>=2**31?null:ce("cslg",0,0,[mt(r),mt(e),mt(i),mt(a),mt(n)])},Zu=t=>ie("mvex",void 0,t.map(Qu)),Qu=t=>ce("trex",0,0,[j(t.track.id),j(1),j(0),j(0),j(0)]),Ur=(t,e)=>ie("moof",void 0,[Yu(t),...e.map(Ju)]),Yu=t=>ce("mfhd",0,0,[j(t)]),Nr=t=>{let e=0,i=0;const a=0,n=0,r=t.type==="delta";return i|=+r,r?e|=1:e|=2,e<<24|i<<16|a<<8|n},Ju=t=>ie("traf",void 0,[ed(t),td(t),id(t)]),ed=t=>{N(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Nr(i)};return ce("tfhd",0,e,[j(t.track.id),j(a.duration),j(a.size),j(a.flags)])},td=t=>(N(t.currentChunk),ce("tfdt",1,0,[rt(ge(t.currentChunk.startTimestamp,t.timescale))])),id=t=>{N(t.currentChunk);const e=t.currentChunk.samples.map(p=>p.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(p=>p.size),a=t.currentChunk.samples.map(Nr),n=t.currentChunk.samples.map(p=>ge(p.timestamp-p.decodeTimestamp,t.timescale)),r=new Set(e),o=new Set(i),s=new Set(a),l=new Set(n),c=s.size===2&&a[0]!==a[1],f=r.size>1,h=o.size>1,d=!c&&s.size>1,u=l.size>1||[...l].some(p=>p!==0);let v=0;return v|=1,v|=4*+c,v|=256*+f,v|=512*+h,v|=1024*+d,v|=2048*+u,ce("trun",1,v,[j(t.currentChunk.samples.length),j(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?j(a[0]):[],t.currentChunk.samples.map((p,y)=>[f?j(e[y]):[],h?j(i[y]):[],d?j(a[y]):[],u?mt(n[y]):[]])])},ad=t=>ie("mfra",void 0,[...t.map(nd),rd()]),nd=t=>ce("tfra",1,0,[j(t.track.id),j(63),j(t.finalizedChunks.length),t.finalizedChunks.map(i=>[rt(ge(i.samples[0].timestamp,t.timescale)),rt(i.moofOffset),j(i.trafIndex+1),j(1),j(1)])]),rd=()=>ce("mfro",0,0,[j(0)]),od=()=>ie("vtte"),sd=(t,e,i,a,n)=>ie("vttc",void 0,[n!==null?ie("vsid",[mt(n)]):null,i!==null?ie("iden",[...it.encode(i)]):null,e!==null?ie("ctim",[...it.encode(lu(e))]):null,a!==null?ie("sttg",[...it.encode(a)]):null,ie("payl",[...it.encode(t)])]),ld=t=>ie("vtta",[...it.encode(t)]),cd=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const n=ud(a);n&&e.push(n)}else if(i==="mdta"){const n=dd(a);n&&e.push(n)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&fd(e,t.output._metadataTags);return e.length===0?null:ie("udta",void 0,e)},fd=(t,e)=>{for(const{key:i,value:a}of qn(e))switch(i){case"title":t.push(st("©nam",a));break;case"description":t.push(st("©des",a));break;case"artist":t.push(st("©ART",a));break;case"album":t.push(st("©alb",a));break;case"albumArtist":t.push(st("albr",a));break;case"genre":t.push(st("©gen",a));break;case"date":t.push(st("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(st("©cmt",a));break;case"lyrics":t.push(st("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Et(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(n=>n.type===i)||(typeof a=="string"?t.push(st(i,a)):a instanceof Uint8Array&&t.push(ie(i,Array.from(a))))}},st=(t,e)=>{const i=it.encode(e);return ie(t,[ae(i.length),ae($r("und")),Array.from(i)])},qr={"image/jpeg":13,"image/png":14,"image/bmp":27},Wr=(t,e)=>{const i=[];for(const{key:a,value:n}of qn(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:Ke(n)});break;case"description":i.push({key:e?"description":"©des",value:Ke(n)});break;case"artist":i.push({key:e?"artist":"©ART",value:Ke(n)});break;case"album":i.push({key:e?"album":"©alb",value:Ke(n)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Ke(n)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Ke(n)});break;case"genre":i.push({key:e?"genre":"©gen",value:Ke(n)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Ke(n)});break;case"date":i.push({key:e?"date":"©day",value:Ke(n.toISOString().slice(0,10))});break;case"images":for(const r of n)r.kind==="coverFront"&&i.push({key:"covr",value:ie("data",[j(qr[r.mimeType]??0),j(0),Array.from(r.data)])});break;case"trackNumber":if(e){const r=t.tracksTotal!==void 0?`${n}/${t.tracksTotal}`:n.toString();i.push({key:"track",value:Ke(r)})}else i.push({key:"trkn",value:ie("data",[j(0),j(0),ae(0),ae(n),ae(t.tracksTotal??0),ae(0)])});break;case"discNumber":e||i.push({key:"disc",value:ie("data",[j(0),j(0),ae(0),ae(n),ae(t.discsTotal??0),ae(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Et(a)}if(t.raw)for(const a in t.raw){const n=t.raw[a];n==null||!e&&a.length!==4||i.some(r=>r.key===a)||(typeof n=="string"?i.push({key:a,value:Ke(n)}):n instanceof Uint8Array?i.push({key:a,value:ie("data",[j(0),j(0),Array.from(n)])}):n instanceof $n&&i.push({key:a,value:ie("data",[j(qr[n.mimeType]??0),j(0),Array.from(n.data)])}))}return i},ud=t=>{const e=Wr(t,!1);return e.length===0?null:ce("meta",0,0,void 0,[Sa(!1,"mdir","","appl"),ie("ilst",void 0,e.map(i=>ie(i.key,void 0,[i.value])))])},dd=t=>{const e=Wr(t,!0);return e.length===0?null:ie("meta",void 0,[Sa(!1,"mdta",""),ce("keys",0,0,[j(e.length)],e.map(i=>ie("mdta",[...it.encode(i.key)]))),ie("ilst",void 0,e.map((i,a)=>{const n=String.fromCharCode(...j(a+1));return ie(n,void 0,[i.value])}))])},Ke=t=>ie("data",[j(1),j(0),...it.encode(t)]),hd=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},md={avc:Iu,hevc:Au,vp8:Lr,vp9:Lr,av1:Bu,prores:null},Dr=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},pd=(t,e)=>{switch(t){case"aac":return Ea;case"mp3":return Ea;case"opus":return Ou;case"vorbis":return Ea;case"flac":return Hu;case"ac3":return Lu;case"eac3":return Uu;case"dts":return Nu}if(e)switch(t){case"pcm-s24":return xt;case"pcm-s24be":return xt;case"pcm-s32":return xt;case"pcm-s32be":return xt;case"pcm-f32":return xt;case"pcm-f32be":return xt;case"pcm-f64":return xt;case"pcm-f64be":return xt}else switch(t){case"pcm-s16":return ot;case"pcm-s16be":return ot;case"pcm-s24":return ot;case"pcm-s24be":return ot;case"pcm-s32":return ot;case"pcm-s32be":return ot;case"pcm-f32":return ot;case"pcm-f32be":return ot;case"pcm-f64":return ot;case"pcm-f64be":return ot}return null},gd={webvtt:"wvtt"},vd={webvtt:Wu},$r=t=>{N(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Pa{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){N(!this.started),this.target._start(),this.started=!0}write(e){N(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return N(this.started&&!this.finalized),this.target._flush()}async finalize(){N(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let n=this.trackedWrites.byteLength;for(;n<a;)n*=2;if(n!==this.trackedWrites.byteLength){const r=new Uint8Array(n);r.set(this.trackedWrites,0),this.trackedWrites=r}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class pt extends ha{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new bd(this,e)}}const Ma=2**16,Ia=2**32;class $i extends pt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Ma,{maxByteLength:Ia})}catch{this._buffer=new ArrayBuffer(Ma),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Ma);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>Ia)throw new Error(`ArrayBuffer exceeded maximum size of ${Ia} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),n=new Uint8Array(a);n.set(this._bytes,0),this._buffer=a,this._bytes=n}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class bd extends pt{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class Aa{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xe=57600,yd=2082844800,wd=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ge=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class kd extends su{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new $i,this.auxWriter=new Pa(this.auxTarget,!1),this.auxBoxWriter=new qi(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Fn(),this.creationTime=Math.floor(Date.now()/1e3)+yd,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Qr,this.isCmaf=i instanceof Zr,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Zr?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof $i),this.boxWriter=new qi(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof $i?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),n=new Pa(a,!0);n.start(),this.initWriter=n,this.initBoxWriter=new qi(n)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(N(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(fu({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:n,start:r}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(n,r)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(N(this.writer),N(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Wi(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return z0({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const n=this.trackDatas.find(u=>u.track===e);if(n)return n;Zn(a,e.source._codec),N(a),N(a.decoderConfig);const r={...a.decoderConfig};N(r.codedWidth!==void 0),N(r.codedHeight!==void 0);let o=!1;if(e.source._codec==="avc"&&!r.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const u=Yf(i.data);if(!u)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");r.description=Jf(u),o=!0}else if(e.source._codec==="hevc"&&!r.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const u=a0(i.data);if(!u)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");r.description=f0(u),o=!0}const s=_f(1/(e.metadata.frameRate??Xe),1e6).den,l=r.displayAspectWidth,c=r.displayAspectHeight,f=l===void 0||c===void 0?{num:1,den:1}:Wn({num:l*r.codedHeight,den:c*r.codedWidth}),h=r.codec==="ap4h"||r.codec==="ap4x",d={muxer:this,track:e,type:"video",info:{width:r.codedWidth,height:r.codedHeight,pixelAspectRatio:f,decoderConfig:r,requiresAnnexBTransformation:o,hasAlphaChannel:h},timescale:s,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(d),this.trackDatas.sort((u,v)=>u.track.id-v.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),d}getAudioTrackData(e,i,a){const n=this.trackDatas.find(l=>l.track===e);if(n)return n;Qn(a,e.source._codec),N(a),N(a.decoderConfig);const r={...a.decoderConfig};let o=!1;if(e.source._codec==="aac"&&!r.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const l=cr(ui.tempFromBytes(i.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=zi[l.samplingFrequencyIndex],f=ma[l.channelConfiguration];if(c===void 0||f===void 0)throw new Error("Invalid ADTS frame header.");r.description=jn({objectType:l.objectType,sampleRate:c,numberOfChannels:f}),o=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const s={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:r,requiresPcmTransformation:!this.isFragmented&&Ve.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:o,primingPacket:i},timescale:r.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(s),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),s}getSubtitleTrackData(e,i){const a=this.trackDatas.find(r=>r.track===e);if(a)return a;Gf(i),N(i),N(i.config);const n={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(n),this.trackDatas.sort((r,o)=>r.track.id-o.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),n}async addEncodedVideoPacket(e,i,a){const n=await this.mutex.acquire();try{const r=this.getVideoTrackData(e,i,a);let o=i.data;if(r.info.requiresAnnexBTransformation){const l=[...ri(o)].map(c=>o.subarray(c.offset,c.offset+c.length));if(l.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");o=Qf(l,4)}this.validateTimestamp(r.track,i.timestamp,i.type==="key");const s=this.createSampleForTrack(r,o,i.timestamp,i.duration,i.type);await this.registerSample(r,s)}finally{n()}}async addEncodedAudioPacket(e,i,a){const n=await this.mutex.acquire();try{const r=this.getAudioTrackData(e,i,a);let o=i.data;if(r.info.requiresAdtsStripping){const f=cr(ui.tempFromBytes(o));if(!f)throw new Error("Expected ADTS frame, didn't get one.");const h=f.crcCheck===null?F0:O0;o=o.subarray(h)}this.validateTimestamp(r.track,i.timestamp,i.type==="key");let s=i.timestamp,l=i.duration;if(r.info.requiresPcmTransformation){const h=Mt(r.info.decoderConfig.codec).sampleSize*r.info.numberOfChannels;if(l=o.byteLength/h/r.info.sampleRate,r.info.expectedNextPcmPacketTimestamp!==null){const d=s-r.info.expectedNextPcmPacketTimestamp;if(d<.01)s=r.info.expectedNextPcmPacketTimestamp;else{const u=await this.padWithSilence(r,r.info.expectedNextPcmPacketTimestamp,d);s=r.info.expectedNextPcmPacketTimestamp+u}}r.info.expectedNextPcmPacketTimestamp=s+l}const c=this.createSampleForTrack(r,o,s,l,i.type);await this.registerSample(r,c)}finally{n()}}async padWithSilence(e,i,a){const n=ge(a,e.timescale);if(a=n/e.timescale,n>0){const{sampleSize:r,silentValue:o}=Mt(e.info.decoderConfig.codec),s=n*e.info.numberOfChannels,l=new Uint8Array(r*s).fill(o),c=this.createSampleForTrack(e,new Uint8Array(l.buffer),i,a,"key");await this.registerSample(e,c)}return a}async addSubtitleCue(e,i,a){const n=await this.mutex.acquire();try{const r=this.getSubtitleTrackData(e,a);this.validateTimestamp(r.track,i.timestamp,!0),e.source._codec==="webvtt"&&(r.cueQueue.push(i),await this.processWebVTTCues(r,i.timestamp))}finally{n()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const c of e.cueQueue)N(c.timestamp<=i),N(e.lastCueEndTimestamp<=c.timestamp+c.duration),a.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),a.add(c.timestamp+c.duration);const n=[...a].sort((c,f)=>c-f),r=n[0],o=n[1]??r;if(i<o)break;if(e.lastCueEndTimestamp<r){this.auxWriter.seek(0);const c=od();this.auxBoxWriter.writeBox(c);const f=this.auxTarget._getSlice(0,this.auxWriter.getPos()),h=this.createSampleForTrack(e,f,e.lastCueEndTimestamp,r-e.lastCueEndTimestamp,"key");await this.registerSample(e,h),e.lastCueEndTimestamp=r}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const f=e.cueQueue[c];if(f.timestamp>=o)break;Ir.lastIndex=0;const h=Ir.test(f.text),d=f.timestamp+f.duration;let u=e.cueToSourceId.get(f);if(u===void 0&&o<d&&(u=e.nextSourceId++,e.cueToSourceId.set(f,u)),f.notes){const p=ld(f.notes);this.auxBoxWriter.writeBox(p)}const v=sd(f.text,h?r:null,f.identifier??null,f.settings??null,u??null);this.auxBoxWriter.writeBox(v),d===o&&e.cueQueue.splice(c--,1)}const s=this.auxTarget._getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,s,r,o-r,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=o}}createSampleForTrack(e,i,a,n,r){return{timestamp:a,decodeTimestamp:a,duration:n,data:i,size:i.byteLength,type:r,timescaleUnitsToNextSample:ge(n,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let n=0;for(let r=0;r<e.timestampProcessingQueue.length;r++){const o=e.timestampProcessingQueue[r],s=ge(o.duration,e.timescale);n+=s}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:n,sampleDelta:1});else{const r=je(e.timeToSampleTable);r.sampleCount+=n}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(n=>n.timestamp).sort((n,r)=>n-r);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let n=0;n<e.timestampProcessingQueue.length;n++){const r=e.timestampProcessingQueue[n];r.decodeTimestamp=a[n];const o=ge(r.timestamp-r.decodeTimestamp,e.timescale),s=ge(r.duration,e.timescale);if(e.lastTimescaleUnits!==null){N(e.lastSample);const l=ge(r.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(N(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let f=je(e.timeToSampleTable);if(N(f),f.sampleCount===1){f.sampleDelta=c;const d=e.timeToSampleTable[e.timeToSampleTable.length-2];d&&d.sampleDelta===c&&(d.sampleCount++,e.timeToSampleTable.pop(),f=d)}else f.sampleDelta!==c&&(f.sampleCount--,e.timeToSampleTable.push(f={sampleCount:1,sampleDelta:c}));f.sampleDelta===s?f.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:s});const h=je(e.compositionTimeOffsetTable);N(h),h.sampleCompositionTimeOffset===o?h.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o})}}else e.lastTimescaleUnits=ge(r.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:s}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o}));e.lastSample=r}if(e.timestampProcessingQueue.length=0,N(e.lastSample),N(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){N(i.type==="key");const n=ge(i.timestamp,e.timescale,!1),r=Math.round(n-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=r}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const n=e.track.metadata.maximumPacketCount;if(N(n!==void 0),e.samples.length>n)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${n}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const n=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const r=this.trackDatas.every(o=>{if(e===o)return i.type==="key";const s=o.sampleQueue[0];return s?s.type==="key":o.closed});n>=this.minimumFragmentDuration&&r&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=n>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),N(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(N(!this.isFragmented),N(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,n)=>a+ge(n.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||je(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)N(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(N(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const r of this.trackDatas){if(!e&&r.sampleQueue.length===0&&!r.closed)break e;r.sampleQueue.length>0&&r.sampleQueue[0].timestamp<a&&(i=r,a=r.sampleQueue[0].timestamp)}if(!i)break;const n=i.sampleQueue.shift();await this.addSampleToTrack(i,n)}}async finalizeFragment(e=!this.isCmaf){if(N(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const u=this.initBoxWriter??this.boxWriter;N(u),this.formatOptions.onMoov&&u.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const v=di(this);if(u.writeBox(v),this.formatOptions.onMoov){const{data:p,start:y}=u.writer.stopTrackingWrites();this.formatOptions.onMoov(p,y)}if(this.isCmaf){N(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new qi(this.writer);const p=this.boxWriter.measureBox(Or()),y=this.boxWriter.measureBox(Hr(this,0));this.segmentHeaderSize=p+y,this.writer.seek(this.segmentHeaderSize)}}N(this.writer),N(this.boxWriter);const i=this.trackDatas.filter(u=>u.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,n=Ur(a,i),r=this.writer.getPos(),o=r+this.boxWriter.measureBox(n);let s=o+ba,l=1/0;for(let u=0;u<i.length;u++){const v=i[u];v.currentChunk.offset=s,v.currentChunk.moofOffset=r,v.currentChunk.trafIndex=u;for(const p of v.currentChunk.samples)s+=p.size;l=Math.min(l,v.currentChunk.startTimestamp)}const c=s-o,f=c>=2**32;if(f)for(const u of i)u.currentChunk.offset+=lr-ba;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const h=Ur(a,i);if(this.boxWriter.writeBox(h),this.formatOptions.onMoof){const{data:u,start:v}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(u,v,l)}N(this.writer.getPos()===o),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const d=Wi(f);d.size=c,this.boxWriter.writeBox(d),this.writer.seek(o+(f?lr:ba));for(const u of i)for(const v of u.currentChunk.samples)this.writer.write(v.data),v.data=null;if(this.formatOptions.onMdat){const{data:u,start:v}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(u,v)}for(const u of i)u.finalizedChunks.push(u.currentChunk),this.finalizedChunks.push(u.currentChunk),u.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){N(this.writer),N(this.boxWriter),this.ensureOneEnabledTrack();const e=di(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;N(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Wi(!0),this.boxWriter.writeBox(this.mdat);for(const n of this.trackDatas){for(const r of n.sampleQueue)await this.addSampleToTrack(n,r);n.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){N(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;N(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(n=>n.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(n=>n.type===e);if(i.length===0)continue;if(!i.some(n=>n.track.metadata.disposition?.default!==!1)){const n=i[0];n.track.metadata.disposition={...n.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){N(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const n=i.samples[a];n.timestamp-=i.startTimestampOffset,n.decodeTimestamp-=i.startTimestampOffset}if(N(this.writer),N(this.boxWriter),this.fastStart==="in-memory"){this.mdat=Wi(!1);let i;for(let n=0;n<2;n++){const r=di(this),o=this.boxWriter.measureBox(r);i=this.boxWriter.measureBox(this.mdat);let s=this.writer.getPos()+o+i;for(const l of this.finalizedChunks){l.offset=s;for(const{data:c}of l.samples)N(c),s+=c.byteLength,i+=c.byteLength}if(s<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=di(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:n,start:r}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,r)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const n of this.finalizedChunks)for(const r of n.samples)N(r.data),this.writer.write(r.data),r.data=null;if(this.formatOptions.onMdat){const{data:n,start:r}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,r)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Or()),this.boxWriter.writeBox(Hr(this,i))}else{const i=this.writer.getPos(),a=ad(this.trackDatas);this.boxWriter.writeBox(a);const n=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(n)}else{N(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);N(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:r,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(r,o)}const n=di(this);if(this.fastStart==="reserve"){N(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);const r=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(uu(r))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);if(this.formatOptions.onMoov){const{data:r,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(r,o)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class xd{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){N(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(a,n)=>a[n*e]:e===1&&i===4?this.channelMixer=(a,n,r)=>a[n*e]*+(r<2):e===1&&i===6?this.channelMixer=(a,n,r)=>a[n*e]*+(r===2):e===2&&i===1?this.channelMixer=(a,n)=>{const r=n*e;return .5*(a[r]+a[r+1])}:e===2&&i===4?this.channelMixer=(a,n,r)=>a[n*e+r]*+(r<2):e===2&&i===6?this.channelMixer=(a,n,r)=>a[n*e+r]*+(r<2):e===4&&i===1?this.channelMixer=(a,n)=>{const r=n*e;return .25*(a[r]+a[r+1]+a[r+2]+a[r+3])}:e===4&&i===2?this.channelMixer=(a,n,r)=>{const o=n*e;return .5*(a[o+r]+a[o+r+2])}:e===4&&i===6?this.channelMixer=(a,n,r)=>{const o=n*e;return r<2?a[o+r]:r===2||r===3?0:a[o+r-2]}:e===6&&i===1?this.channelMixer=(a,n)=>{const r=n*e;return Math.SQRT1_2*(a[r]+a[r+1])+a[r+2]+.5*(a[r+4]+a[r+5])}:e===6&&i===2?this.channelMixer=(a,n,r)=>{const o=n*e;return a[o+r]+Math.SQRT1_2*(a[o+2]+a[o+r+4])}:e===6&&i===4?this.channelMixer=(a,n,r)=>{const o=n*e;return r<2?a[o+r]+Math.SQRT1_2*a[o+2]:a[o+r+2]}:this.channelMixer=(a,n,r)=>r<e?a[n*e+r]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const a=new Float32Array(i);a.set(this.tempSourceBuffer),this.tempSourceBuffer=a}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),N(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const a=e.allocationSize({planeIndex:0,format:"f32"}),n=new Float32Array(this.tempSourceBuffer.buffer,0,a/4);e.copyTo(n,{planeIndex:0,format:"f32"});const r=e.timestamp-this.startTime,o=r+e.duration,s=Math.floor((r-1/this.sourceSampleRate)*this.targetSampleRate)+1,l=Math.ceil(o*this.targetSampleRate);for(let c=s;c<l;c++){if(c<this.bufferStartFrame)continue;for(;c>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const f=c-this.bufferStartFrame;N(f<this.bufferSizeInFrames);const u=(c/this.targetSampleRate-r)*this.sourceSampleRate,v=Math.floor(u),p=Math.ceil(u),y=u-v;for(let m=0;m<this.targetNumberOfChannels;m++){let b=0,k=0;v>=0&&v<e.numberOfFrames&&(b=this.channelMixer(n,v,m)),p>=0&&p<e.numberOfFrames&&(k=this.channelMixer(n,p,m));const x=b+y*(k-b),C=f*this.targetNumberOfChannels+m;this.outputBuffer[C]+=x}this.maxWrittenFrame===null?this.maxWrittenFrame=f:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,f)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;N(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const a=new Oe({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(a),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var _d=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(n=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");n&&(a=function(){try{n.call(this)}catch(r){return Promise.reject(r)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},Td=(function(t){return function(e){function i(o){e.error=e.hasError?new t(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var a,n=0;function r(){for(;a=e.stack.pop();)try{if(!a.async&&n===1)return n=0,e.stack.push(a),Promise.resolve().then(r);if(a.dispose){var o=a.dispose.call(a.value);if(a.async)return n|=2,Promise.resolve(o).then(r,function(s){return i(s),r()})}else n|=1}catch(s){i(s)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return r()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class Ba{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class jr extends Ba{constructor(e){if(super(),this._connectedTrack=null,!dt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${dt.join(", ")}.`);this._codec=e}}const Vr=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Cd{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Un,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const n=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const r=this.encodingConfig,o=r.sizeChangeBehavior??"deny";let s=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(s=!0,o==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(r.transform?.width!==void 0||r.transform?.height!==void 0||r.transform?.rotate!==void 0||r.transform?.crop!==void 0||r.transform?.force===!0||s&&o!=="passThrough"){let h=r.transform?.width,d=r.transform?.height,u=r.transform?.fit??"fill";s&&o!=="passThrough"&&(N(this.outputWidth),N(this.outputHeight),N(o!=="deny"),h=this.outputWidth,d=this.outputHeight,u=o);const v=await e.transform({width:h,height:d,roundDimensionsTo:2,crop:r.transform?.crop,rotate:r.transform?.rotate,fit:u,alpha:r.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=v.displayWidth,this.outputHeight=v.displayHeight),i&&e.close(),e=v,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const f=r.transform?.frameRate;if(f!==void 0){const h=e.timestamp+e.duration,d=Ln(e.timestamp,f);if(this.frameRateLastSample!==null)if(d<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=h;return}else await this.padFrameRate(d,a);e===n&&(e=e.clone(),i=!0),e.setTimestamp(d),e.setDuration(1/f),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=d,this.frameRateLastEndTimestamp=h}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let n;if(a.transform?.process){let r=a.transform.process(e);if(r instanceof Promise&&(r=await r),r===null)return;Array.isArray(r)||(r=[r]);const o=[];try{for(const s of r)s instanceof Re?o.push(s):typeof VideoFrame<"u"&&s instanceof VideoFrame?o.push(new Re(s)):o.push(new Re(s,{timestamp:e.timestamp,duration:e.duration}))}catch(s){for(const l of o)l!==e&&l.close();for(const l of r)(l instanceof Re&&l!==e||typeof VideoFrame<"u"&&l instanceof VideoFrame)&&l.close();throw s}n=o}else n=[e];try{for(const r of n){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(r),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)break;const o=this.encodingConfig.keyFrameInterval??2,s=Math.floor(r.timestamp/o),l={...this.defaultEncodeOptions,...r.encodeOptions,...i},c={...l,keyFrame:l.keyFrame!==void 0?l.keyFrame:o===0||s!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=s,this.encodingConfig.onEncodedSample?.(r),this.customEncoder){this.customEncoderQueueSize++;const f=r.clone(),h=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(f,c)).catch(d=>this.setError(d)).finally(()=>{this.customEncoderQueueSize--,f.close()});this.customEncoderQueueSize>=4&&await h}else{N(this.encoder);const f=r.toVideoFrame(),h=zn(this.preciseTimings,f.timestamp,u=>u.microsecondTimestamp),d=h!==-1?this.preciseTimings[h]:null;if(d&&d.microsecondTimestamp===f.timestamp?(d.timestamp!==r.timestamp&&(d.timestampIsValid=!1),d.duration!==r.duration&&(d.durationIsValid=!1)):(this.preciseTimings.splice(h+1,0,{microsecondTimestamp:f.timestamp,timestamp:r.timestamp,duration:r.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!f.format&&!f.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(f,c)}finally{f.close()}}else{this.splitter||(this.splitter=new Sd);const{colorFrame:v,alphaFrame:p}=await this.splitter.split(f);this.alphaFrameQueue.push(p);try{this.encoder.encode(v,c)}finally{v.close()}}else try{this.encoder.encode(f,c)}finally{f.close()}this.encoder.encodeQueueSize>=4&&await new Promise(u=>this.encoder.addEventListener("dequeue",u,{once:!0}))}await this.lastMuxerPromise}}finally{for(const r of n)r!==e&&r.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;N(this.frameRateLastSample);const n=Math.round((e-this.frameRateLastTimestamp)*a);for(let r=1;r<n;r++){const o={stack:[],error:void 0,hasError:!1};try{const s=_d(o,this.frameRateLastSample.clone(),!1);s.setTimestamp(this.frameRateLastTimestamp+r/a),s.setDuration(1/a),await this.processAndEncode(s,i)}catch(s){o.error=s,o.hasError=!0}finally{Td(o)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=Ni(this.encodingConfig.quality,this.encodingConfig.bitrate);N(i!==void 0);const a=xr({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let n=null,r;for(const s of a){const l=s.config;if(this.encodingConfig.onEncoderConfig?.(l),r=Pr.find(f=>f.supports(this.encodingConfig.codec,l)),r){n=s;break}if(typeof VideoEncoder>"u")continue;if(l.alpha="discard",this.encodingConfig.alpha==="keep"&&(l.latencyMode="quality"),(l.width%2===1||l.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${l.width}x${l.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(l)).supported){n=s;break}}catch{}}if(!n){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const s=a[0].config,l=a.map(({config:c,quantizer:f})=>f!==null?`quantizer ${f}`:`${c.bitrate} bps`);throw new Error(`This specific encoder configuration (${s.codec}, ${l.join(" / ")}, ${s.width}x${s.height}, hardware acceleration: ${s.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const o=n.config;if(n.quantizer!==null&&(this.defaultEncodeOptions=Er(this.encodingConfig.codec,n.quantizer)),r)this.customEncoder=new r,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=o,this.customEncoder.onPacket=(s,l)=>{if(!(s instanceof nt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Vr(this.source._connectedTrack,s),this.encodingConfig.onEncodedPacket?.(s,l),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,s,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=s=>{this.setError(s)},await this.customEncoder.init();else{const s=[],l=[];let c=0,f=0;const h=(u,v,p)=>{const y={};if(v){const C=new Uint8Array(v.byteLength);v.copyTo(C),y.alpha=C}let m=nt.fromEncodedChunk(u,y);const b=zn(this.preciseTimings,u.timestamp,C=>C.microsecondTimestamp),k=b!==-1?this.preciseTimings[b]:null;let x=null;this.emittedEncoderPackets===0&&m.type==="delta"&&p?.decoderConfig&&(x=h0(this.encodingConfig.codec,p.decoderConfig,m.data)),(k&&k.microsecondTimestamp===u.timestamp||x!==null)&&(m=m.clone({timestamp:k?.timestampIsValid?k.timestamp:void 0,duration:k?.durationIsValid?k.duration:void 0,type:x??void 0})),Vr(this.source._connectedTrack,m),this.encodingConfig.onEncodedPacket?.(m,p),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,m,p).catch(C=>{this.setError(C)}),this.emittedEncoderPackets++},d=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(u,v)=>{if(!this.alphaEncoder){h(u,null,v);return}const p=this.alphaFrameQueue.shift();N(p!==void 0),p?(this.alphaEncoder.encode(p,{...this.defaultEncodeOptions,keyFrame:u.type==="key"}),f++,p.close(),s.push({chunk:u,meta:v})):f===0?h(u,null,v):(l.push(c+f),s.push({chunk:u,meta:v}))},error:u=>{u.stack=d,this.setError(u)}}),this.encoder.configure(o),this.encodingConfig.alpha==="keep"){const u=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(v,p)=>{f--;const y=s.shift();for(N(y!==void 0),h(y.chunk,v,y.meta),c++;l.length>0&&l[0]===c;){l.shift();const m=s.shift();N(m!==void 0),h(m.chunk,null,m.meta)}},error:v=>{v.stack=u,this.setError(v)}}),this.alphaEncoder.configure(o)}}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=Ln(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Mf(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let Ra=null;class Sd{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!Ra){const n=new Blob([`(${Ed.toString()})()`],{type:"application/javascript"});Ra=URL.createObjectURL(n)}this.worker=new Worker(Ra),this.worker.addEventListener("message",n=>{const r=n.data,o=this.pendingRequests.get(r.id);o&&(this.pendingRequests.delete(r.id),"error"in r?o.reject(new Error(r.error)):o.resolve({colorFrame:r.colorFrame,alphaFrame:r.alphaFrame}))}),this.worker.addEventListener("error",n=>{const r=new Error(n.message||"Color/alpha splitter worker error.");for(const o of this.pendingRequests.values())o.reject(r);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=Fn();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Ed=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",r=>{const{id:o,sourceFrame:s}=r.data;e=e.then(async()=>{try{const{colorFrame:l,alphaFrame:c}=await i(s);self.postMessage({id:o,colorFrame:l,alphaFrame:c},{transfer:[l,c]})}catch(l){self.postMessage({id:o,error:l.message})}finally{s.close()}})});const i=async r=>{const o=r.format;if(!o)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const s=r.allocationSize();if((!t||t.byteLength!==s)&&(t=new Uint8Array(s)),await r.copyTo(t),o==="RGBA"||o==="BGRA")return a(t,o,r);if(o==="I420A"||o==="I420AP10"||o==="I420AP12"||o==="I422A"||o==="I422AP10"||o==="I422AP12"||o==="I444A"||o==="I444AP10"||o==="I444AP12")return n(t,o,r);throw new Error(`CPU color/alpha splitting does not support format '${o}'.`)},a=(r,o,s)=>{const l=s.visibleRect?.width??s.codedWidth,c=s.visibleRect?.height??s.codedHeight,f=l*c,h=Math.ceil(l/2),d=Math.ceil(c/2),u=f+h*d*2,v=new Uint8Array(u);for(let b=0,k=3;b<f;b++,k+=4)v[b]=r[k];v.fill(128,f);const p=new VideoFrame(r,{format:o==="RGBA"?"RGBX":"BGRX",codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0}),y={format:"I420",codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[v.buffer]},m=new VideoFrame(v,y);return{colorFrame:p,alphaFrame:m}},n=(r,o,s)=>{const l=s.visibleRect?.width??s.codedWidth,c=s.visibleRect?.height??s.codedHeight,f=o.includes("P10"),h=o.includes("P12"),d=f||h?2:1;let u,v;o.startsWith("I420")?(u=Math.ceil(l/2),v=Math.ceil(c/2)):o.startsWith("I422")?(u=Math.ceil(l/2),v=c):(u=l,v=c);const p=l*c,y=u*v,m=p*d,b=y*d,k=p*d,x=m+b*2,C=o.replace("A",""),I=Math.ceil(l/2),P=Math.ceil(c/2),z=I*P,A=z*d,U=k+2*A,G=new Uint8Array(U),T=x;G.set(r.subarray(T,T+k),0);const B=k,w=f?512:h?2048:128;d===1?G.fill(w,B):new Uint16Array(G.buffer,B,2*z).fill(w);const L=f?"I420P10":h?"I420P12":"I420",J=new VideoFrame(r.subarray(0,x),{format:C,codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0}),W={format:L,codedWidth:l,codedHeight:c,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[G.buffer]},se=new VideoFrame(G,W);return{colorFrame:J,alphaFrame:se}}};class Pd extends jr{constructor(e){X0(e),super(e.codec),this._encoder=new Cd(this,e)}add(e,i){if(!(e instanceof Re))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Gr extends Ba{constructor(e){if(super(),this._connectedTrack=null,!Pt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Pt.join(", ")}.`);this._codec=e}}class Md{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new Un,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const a=this.encodingConfig;a.transform?.numberOfChannels!==void 0||a.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new xd({targetNumberOfChannels:a.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:a.transform.sampleRate??e.sampleRate,onSample:async r=>{await this.processAndEncode(r,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;if(a.transform?.sampleFormat!==void 0&&V0(e.format)!==a.transform.sampleFormat){const n=K0(e,a.transform.sampleFormat);i&&e.close(),e=n,i=!0}if(a.transform?.process)try{let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);try{for(const r of n)if(!(r instanceof Oe))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const r of n)await this.encodeSample(r,!0)}finally{for(const r of n)r instanceof Oe&&r.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)return;{const a=Math.round(e.timestamp*e.sampleRate),n=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=n;else{const r=a-this.lastEndSampleIndex;if(r>=64){const o=new Oe({data:new Float32Array(r*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:r,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(o,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const a=e.clone(),n=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(a)).catch(r=>this.setError(r)).finally(()=>{this.customEncoderQueueSize--,a.close()});this.customEncoderQueueSize>=4&&await n,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{N(this.encoder);const a=e.toAudioData();this.encoder.encode(a),a.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(n=>this.encoder.addEventListener("dequeue",n,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){N(this.outputSampleSize),N(this.writeOutputValue);const{numberOfChannels:a,numberOfFrames:n,sampleRate:r,timestamp:o}=e,s=2048,l=[];for(let d=0;d<n;d+=s){const u=Math.min(s,e.numberOfFrames-d),v=u*a*this.outputSampleSize,p=new ArrayBuffer(v),y=new DataView(p);l.push({frameCount:u,view:y})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),f=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let d=0;d<a;d++){e.copyTo(f,{planeIndex:d,format:"f32-planar"});for(let u=0;u<l.length;u++){const{frameCount:v,view:p}=l[u];for(let y=0;y<v;y++)this.writeOutputValue(p,(y*a+d)*this.outputSampleSize,f[u*s+y])}}i&&e.close();const h={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:a,sampleRate:r}};for(let d=0;d<l.length;d++){const{frameCount:u,view:v}=l[d],p=v.buffer,y=d*s,m=new nt(new Uint8Array(p),"key",o+y/r,u/r);this.encodingConfig.onEncodedPacket?.(m,h),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,m,h)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:a}=e,n=Ni(this.encodingConfig.quality,this.encodingConfig.bitrate),r=Tr({numberOfChannels:i,sampleRate:a,...this.encodingConfig,quality:n});this.encodingConfig.onEncoderConfig?.(r);const o=Mr.find(s=>s.supports(this.encodingConfig.codec,r));if(o)this.customEncoder=new o,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=r,this.customEncoder.onPacket=(s,l)=>{if(!(s instanceof nt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(l!==void 0&&(!l||typeof l!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(s,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,s,l).catch(c=>{this.setError(c)})},this.customEncoder.onError=s=>{this.setError(s)},await this.customEncoder.init();else if(Ve.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let s;try{s=(await AudioEncoder.isConfigSupported(r)).supported??!1}catch{s=!1}if(!s)throw new Error(`This specific encoder configuration (${r.codec}, ${r.bitrate} bps, ${r.numberOfChannels} channels, ${r.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const l=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(c,f)=>{if(this.encodingConfig.codec==="aac"&&f?.decoderConfig){let d=!1;if(!f.decoderConfig.description||f.decoderConfig.description.byteLength<2?d=!0:d=zf(Ne(f.decoderConfig.description)).objectType===0,d){const u=Number(je(r.codec.split(".")));f.decoderConfig.description=jn({objectType:u,numberOfChannels:f.decoderConfig.numberOfChannels,sampleRate:f.decoderConfig.sampleRate})}}let h=nt.fromEncodedChunk(c);h=h.clone({timestamp:Hn(h.timestamp,r.sampleRate),duration:c.duration!=null?Hn(h.duration,r.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(h,f),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,h,f).catch(d=>{this.setError(d)})},error:c=>{c.stack=l,this.setError(c)}}),this.encoder.configure(r)}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:a,littleEndian:n}=Mt(e);switch(this.outputSampleSize=a,a){case 1:i==="unsigned"?this.writeOutputValue=(r,o,s)=>r.setUint8(o,Ee((s+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(r,o,s)=>{r.setInt8(o,Ee(Math.round(s*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(r,o,s)=>{const l=Ee(Math.floor(s*32767),-32768,32767);r.setUint8(o,au(l))}:i==="alaw"?this.writeOutputValue=(r,o,s)=>{const l=Ee(Math.floor(s*32767),-32768,32767);r.setUint8(o,nu(l))}:N(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(r,o,s)=>r.setUint16(o,Ee((s+1)*32767.5,0,65535),n):i==="signed"?this.writeOutputValue=(r,o,s)=>r.setInt16(o,Ee(Math.round(s*32767),-32768,32767),n):N(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(r,o,s)=>sa(r,o,Ee((s+1)*83886075e-1,0,16777215),n):i==="signed"?this.writeOutputValue=(r,o,s)=>vf(r,o,Ee(Math.round(s*8388607),-8388608,8388607),n):N(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(r,o,s)=>r.setUint32(o,Ee((s+1)*21474836475e-1,0,4294967295),n):i==="signed"?this.writeOutputValue=(r,o,s)=>r.setInt32(o,Ee(Math.round(s*2147483647),-2147483648,2147483647),n):i==="float"?this.writeOutputValue=(r,o,s)=>r.setFloat32(o,s,n):N(!1);break;case 8:i==="float"?this.writeOutputValue=(r,o,s)=>r.setFloat64(o,s,n):N(!1);break;default:Et(a),N(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class Id extends Gr{constructor(e){Z0(e),super(e.codec),this._accumulatedTime=0,this._encoder=new Md(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=Oe._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const a of i)await this._encoder.add(a,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Ad extends Ba{constructor(e){if(super(),this._connectedTrack=null,!ai.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${ai.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Kr{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>dt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Pt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>ai.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class za extends Kr{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new kd(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Xr extends za{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...dt,...pa,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...ai]}_codecUnsupportedHint(e){return new Qr().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Zr extends za{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...dt,...pa,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...ai]}}class Qr extends za{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...dt,...Pt]}_codecUnsupportedHint(e){return new Xr().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Yr=["video","audio","subtitle"];class hi{constructor(e,i,a,n,r){this.id=e,this.output=i,this.type=a,this.source=n,this.metadata=r}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof hi))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Dn(this.metadata.group),a=Dn(e.metadata.group);for(const n of i)if(this.type!==e.type&&a.some(s=>n===s)||a.some(s=>n._pairedGroups.has(s)))return!0;return!1}}class Bd extends hi{constructor(e,i,a,n){super(e,i,"video",a,n)}}class Rd extends hi{constructor(e,i,a,n){super(e,i,"audio",a,n)}}class zd extends hi{constructor(e,i,a,n){super(e,i,"subtitle",a,n)}}class mi{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof mi))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Fa=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!xf(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Rf(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof mi)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof mi))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Fd extends ha{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new mi,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Rn,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Kr))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof pt||e.target instanceof Aa))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof pt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof pt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof pt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){N(this._target instanceof Aa);const i=this._target.getTarget(e),a=n=>{if(!(n instanceof pt))throw new TypeError("getTarget must return a Target.");return n};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){N(this._target instanceof Aa);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(N(this._initTarget!==null),this._initTarget instanceof pt)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof pt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=n=>(this.state==="canceled"?n._close():this._rememberTarget(n),this._emit("target",{target:n,request:e,isRoot:!0}),this._rootTarget=n,n);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new Pa(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof jr))throw new TypeError("source must be a VideoSource.");if(Fa(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Zn({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof nt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Bd(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof Gr))throw new TypeError("source must be an AudioSource.");if(Fa(i),i.decoderConfig!==void 0&&Qn({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof nt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new Rd(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof Ad))throw new TypeError("source must be a SubtitleSource.");Fa(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new zd(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(Bf(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((o,s)=>o+(s.type===e.type?1:0),0),n=i[e.type].max;if(a===n)throw new Error(n===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${n} ${e.type} track${n===1?"":"s"}.`);const r=i.total.max;if(this.tracks.length===r)throw new Error(`${this.format._name} does not support more than ${r} tracks${r===1?"":"s"} in total.`);if(e.isVideoTrack()){const o=this.format.getSupportedVideoCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const o=this.format.getSupportedAudioCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const o=this.format.getSupportedSubtitleCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of Yr){const n=this.tracks.reduce((o,s)=>o+(s.type===a?1:0),0),r=e[a].min;if(n<r)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of Yr){const n=this.tracks.reduce((o,s)=>o+(s.type===a?1:0),0),r=e[a].min;if(n<r)throw new Error(r===e[a].max?`${this.format._name} requires exactly ${r} ${a} track${r===1?"":"s"}.`:`${this.format._name} requires at least ${r} ${a} track${r===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ve._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const n=this.tracks.map(r=>r.source._start());await Promise.all(n)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ve._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ve._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ve._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Od={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Hd=new Set(["window","buddy","dancer"]);function Jr(t){return!Hd.has(t.typeId)}const Ld=new Set(["bitmap","video","audio","pcm","beats","bpm","objectUrl","frozenFrame"]);function Ud(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!Ld.has(i))return a}));return JSON.stringify(e,null,2)}function Nd(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>qd(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=Od[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Jr)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(Jr)}))}:i.data})),e}function qd(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,objectUrl:null,frozenFrame:null}}function Wd(t,e){const i=new Blob([e],{type:"application/json"});Lt(t,i)}function Lt(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Oa=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function eo(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:Qe(t*a),height:Qe(e*a)}}function Dd(t,e){const i=t/Math.max(e,1);let a="16:9",n=1/0;for(const r of Oa){const o=Math.abs(i-r.rw/r.rh);o<n&&(n=o,a=r.id)}return a}function $d(t,e,i=1280){if(t<2||e<2)return eo(16,9,i);const a=Math.max(t,e),n=i/a;return{width:Qe(t*n),height:Qe(e*n)}}function jd(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}const Vd=960,Gd=1920;function Ha(t,e=!1){const i=e?Vd:Gd;return ja(t.exportSettings.width,t.exportSettings.height,i,i)}async function Kd(t,e,i){const{width:a,height:n,format:r,quality:o,filename:s}=e.exportSettings,l=r==="jpg"?"image/jpeg":"image/png",c=await t.capture(e,i,Qe(a),Qe(n),l,o);Lt(`${s}.${r==="jpg"?"jpg":"png"}`,c)}async function Xd(t,e,i){const{fps:a,duration:n,filename:r,quality:o}=e.exportSettings,{width:s,height:l}=Ha(e,!1),c=Math.max(1,Math.round(n*a)),f=new hf,h=f.folder(r)??f,d=document.createElement("canvas");for(let v=0;v<c;v++){const p=v/a;i?.(v,c),t.paintFrame(e,p,s,l,d);const y=await th(d,"image/png",o);h.file(`${r}_${String(v).padStart(5,"0")}.png`,await y.arrayBuffer()),await La()}const u=await f.generateAsync({type:"blob"});Lt(`${r}_sequence.zip`,u)}async function to(t,e,i,a=!1){const n=await io(t,e,Jd(),i,a);Lt(`${e.exportSettings.filename}.webm`,n)}async function Zd(t,e,i,a=!1){try{return await Qd(t,e,i,a)?"mp4 clip saved · with music":"mp4 clip saved"}catch(n){const r=eh();if(r){const s=await io(t,e,r,i,a);return Lt(`${e.exportSettings.filename}.mp4`,s),"mp4 clip saved"}return await to(t,e,i,a),`MP4 not available (${n instanceof Error?n.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function Qd(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),r=Math.min(32,Math.max(1,e.exportSettings.duration||4)),{width:o,height:s}=Ha(e,a),l=new ze({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),c=new Xr({fastStart:"in-memory"}),h=await tu(["avc","hevc"].filter(k=>c.getSupportedVideoCodecs().includes(k)),{width:o,height:s,quality:l});if(!h)throw new Error("this browser cannot encode H.264");const d=new $i,u=new Fd({format:c,target:d}),v=new Pd({codec:h,quality:l,keyFrameInterval:1});u.addVideoTrack(v,{frameRate:n});const p=await Yd(u,c,e,r);t.resetTemporal();const y=document.createElement("canvas");await u.start();try{p&&await p.audioSource.add(p.buffer);const k=Math.max(1,Math.round(r*n)),x=1/n,C=e.exportSettings.loopClose!==!1;let I=null;for(let P=0;P<k;P++){const z=ia(P/n,r,e.playback.mode,1,!0);i?.(P,k),t.paintFrame(e,z,o,s,y),P===0&&C?I=no(y):ao(y,I,P,k,C);const A=new Re(y,{timestamp:P*x,duration:x});await v.add(A,{keyFrame:P%n===0}),A.close(),await La()}await u.finalize()}catch(k){try{await u.cancel()}catch{}throw k}const m=d.buffer;if(!m||m.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=m.slice(0);return Lt(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"})),!!p}async function Yd(t,e,i,a){const n=await bc(Ti(i));if(!n||n.length<32||n.duration<=0)return null;const r=i.exportSettings.loopClose!==!1;let o;try{o=vc(n,a,r)}catch{return null}const s=Math.min(2,Math.max(1,o.numberOfChannels)),l=o.sampleRate>=46e3?48e3:44100,c=e.getSupportedAudioCodecs(),f=["aac","mp3","opus"].filter(u=>c.includes(u)),h=await iu(f.length?f:c,{numberOfChannels:s,sampleRate:l});if(!h)return null;const d=new Id({codec:h,quality:Y0,transform:{numberOfChannels:s,sampleRate:l}});return t.addAudioTrack(d),{audioSource:d,buffer:o}}async function io(t,e,i,a,n=!1){const r=Math.min(24,Math.max(12,e.exportSettings.fps||24)),o=Math.min(32,Math.max(1,e.exportSettings.duration||4)),{width:s,height:l}=Ha(e,n),c=document.createElement("canvas");c.width=s,c.height=l;const f=c.getContext("2d");if(!f)throw new Error("No 2d context");const h=c.captureStream(0),d=h.getVideoTracks()[0],u=new MediaRecorder(h,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),v=[];u.ondataavailable=k=>{k.data.size&&v.push(k.data)},t.resetTemporal(),u.start(200);const p=Math.max(1,Math.round(o*r)),y=document.createElement("canvas"),m=e.exportSettings.loopClose!==!1;let b=null;for(let k=0;k<p;k++){const x=ia(k/r,o,e.playback.mode,1,!0);a?.(k,p),t.paintFrame(e,x,s,l,y),k===0&&m?b=no(y):ao(y,b,k,p,m),f.drawImage(y,0,0,s,l),d.requestFrame?.(),await La()}if(await new Promise(k=>{u.onstop=()=>k(),u.stop()}),h.getTracks().forEach(k=>k.stop()),!v.length)throw new Error("recorder produced no data");return new Blob(v,{type:i})}function Jd(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function eh(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function ao(t,e,i,a,n){if(!n||!e||i===0)return;const r=jd(i,a);if(r<=0)return;const o=t.getContext("2d");o&&(o.save(),o.globalAlpha=r,o.drawImage(e,0,0,t.width,t.height),o.restore())}function no(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function La(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function th(t,e,i){return new Promise((a,n)=>{t.toBlob(r=>{r?a(r):n(new Error("frame capture failed"))},e,i)})}async function ih(t,e,i,a,n=!1){const r=e.exportSettings.format;return r==="mp4"?Zd(t,e,a,n):r==="webm"?to(t,e,a,n):r==="sequence"?Xd(t,e,a):Kd(t,e,i)}const ah=768,nh="sana",ro=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function rh(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),n=ah/Math.max(i,a);return{width:Qe(i*n,256),height:Qe(a*n,256)}}function oh(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(l=>l+l).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,n=i>>8&255,r=i&255;let o=ro[0],s=1e9;for(const l of ro){const c=(a-l.r)**2+(n-l.g)**2+(r-l.b)**2;c<s&&(s=c,o=l)}return o.name}function sh(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",n="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${n}`;const r=e.map(oh).filter((o,s,l)=>l.indexOf(o)===s).slice(0,4);return`${a}, palette of ${r.join(", ")}, ${n}`}function lh(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function ch(t,e,i,a=4){const n=[];for(let r=0;r<3;r++)for(let o=0;o<3;o++){const s=Math.min(e-1,Math.floor((o+.5)/3*e)),c=(Math.min(i-1,Math.floor((r+.5)/3*i))*e+s)*4,f=t[c],h=t[c+1],d=t[c+2],u=lh(f,h,d);n.some(p=>(p.r-f)**2+(p.g-h)**2+(p.b-d)**2<1400)||n.push({hex:u,r:f,g:h,b:d})}return n.slice(0,a).map(r=>r.hex)}function fh(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return ch(a.data,e.width,e.height)}function uh(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function dh(t,e,i,a,n=nh){const r=t.length>400?t.slice(0,400):t,o=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(n)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(r)}?${o}`}async function hh(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const n=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!n.ok)throw n.status===429||n.status>=500?new Error(`busy:${n.status}`):new Error(`Generation failed (${n.status}). Try a shorter prompt.`);const r=await n.arrayBuffer(),o=new Uint8Array(r),s=n.headers.get("content-type")||"";if(!uh(o,s))throw new Error("Generation returned no image. Try again.");const l=s.startsWith("image/")?s.split(";")[0]:"image/jpeg";return new Blob([r],{type:l})}catch(n){throw n instanceof Error&&n.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):n}finally{clearTimeout(a)}}async function mh(t){const{width:e,height:i}=rh(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let n=null;for(let o=0;o<2;o++){t.onStatus?.(o===0?"generating new image…":"still working, trying once more…");try{return await hh(dh(a,t.seed+o*7919,e,i),o===0?22e3:3e4)}catch(s){n=s instanceof Error?s:new Error(String(s))}}const r=n?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":n?.message;throw new Error(r||"Generation failed. Try a shorter prompt.")}function ye(t){const e=E.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function pi(t){if(!t)return;const e=E.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function He(t,e,i=!0){E.setProject(a=>({...a,layers:a.layers.map(n=>n.id===t?e(n):n)}),i)}function _t(t,e=!0){E.setProject(i=>{const a=e?i.layers.map(n=>n.id===E.state.ui.selectedLayerId?{...n,sourceId:t.id}:n):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),E.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function ph(t){const e=E.project.sources.filter(o=>o.kind==="audio");for(const o of e)An(o);if(E.setProject(o=>{const s=o.sources.filter(f=>f.kind!=="audio"),l=o.layers.map(f=>e.some(h=>h.id===f.sourceId)?{...f,sourceId:s.find(h=>h.kind!=="audio")?.id??null}:f),c=Math.max(o.duration,t.duration||0);return{...o,sources:[...s,t],layers:l,duration:c,playback:{...o.playback,playing:!0,time:0}}}),Si(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",n=t.beats?.length?`${t.beats.length} hits`:"",r=[i,a,n].filter(Boolean).join(" · ");E.patchUi({selectedSourceId:t.id,status:r?`beat-sync · ${t.name} · ${r}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function ji(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&E.patchUi({status:`reading ${i.name}…`});const n=await nf(i);if(n.kind==="audio"){ph(n);continue}if(e){const r=E.state.ui.selectedSourceId;E.setProject(o=>({...o,sources:o.sources.map(s=>s.id===r?{...n,id:s.id}:s)})),E.patchUi({status:`replaced ${i.name}`})}else _t(n,!0)}catch(a){E.patchUi({status:a instanceof Error?a.message:"import failed"})}}function gh(){E.setProject(e=>{const i=e.sources.find(n=>n.kind!=="audio")?.id??null,a=wn(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=E.project.layers.at(-1);E.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function vh(t){E.setProject(e=>{const i=e.layers.find(o=>o.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Be("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(o=>({...o,id:Be("fx")}));const n=e.layers.findIndex(o=>o.id===t),r=[...e.layers];return r.splice(n+1,0,a),{...e,layers:r}})}function bh(t){E.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Ua(t){const e=ye(E.project);if(!e)return;const i=yn(t);He(e.id,a=>({...a,effects:[...a.effects,i]})),E.patchUi({selectedEffectId:i.id})}function yh(t,e){He(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function oo(t,e,i){He(t,a=>{const n=a.effects.findIndex(l=>l.id===e),r=n+i;if(n<0||r<0||r>=a.effects.length)return a;const o=[...a.effects],[s]=o.splice(n,1);return o.splice(r,0,s),{...a,effects:o}})}function wh(t,e){He(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function gi(t,e,i,a,n=!0){He(t,r=>({...r,effects:r.effects.map(o=>o.id===e?{...o,params:{...o.params,[i]:a}}:o)}),n)}function Ut(t,e=!1){const i=E.state.ui;(t==="all"||t==="selected")&&E.setProject(n=>({...n,seed:n.seed+1+(Date.now()&255)>>>0}),!1),E.setProject(n=>{let o=gn(n,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&i.includeCritters&&(o=pn(o)),t==="all"&&i.includeIdol&&(o=Rl(o)),o});const a=E.project.layers[0]?.effects.map(n=>n.typeId).join(" · ");E.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${E.project.seed}`})}function kh(){const t=ye(E.project);if(!t)return;const e=t.effects.find(r=>r.typeId==="critters"),i=1+(E.project.seed+Date.now())%9998;if(e){gi(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Ua("critters");const a=ye(E.project),n=pi(a);a&&n?.typeId==="critters"&&gi(a.id,n.id,"seed",i),E.patchUi({status:"stamped floaters"})}function xh(){const t=ye(E.project);if(!t)return;const e=t.effects.find(r=>r.typeId==="dancer"),i=1+(E.project.seed+Date.now()+17)%9998;if(e){gi(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Ua("dancer");const a=ye(E.project),n=pi(a);a&&n?.typeId==="dancer"&&gi(a.id,n.id,"seed",i),E.patchUi({status:"stamped idol"})}function _h(){E.setProject(t=>Ol({...t,seed:t.seed+1+(Date.now()&255)>>>0})),E.patchUi({status:"new floater and idol seeds"})}async function Th(t){const e=E.project,{width:i,height:a}=ja(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const n=await t.capture(e,e.playback.time,i,a,"image/png",.92),r=await Mn(n,`print_${Date.now()}.png`);_t(r,!0),E.patchUi({status:"printed the live frame as a new still"})}catch(n){E.patchUi({status:n instanceof Error?n.message:"print failed"})}}function so(t){E.setProject(e=>({...e,seed:e.seed+t>>>0}))}function lo(){Wd(`${E.project.name||"phosphene"}.phos.json`,Ud(E.project)),E.patchUi({status:"project downloaded"})}async function Ch(t){const e=await t.text(),i=Nd(e);E.replace(i),E.patchUi({status:"project loaded — re-drop media if needed"})}function Sh(){const t=prompt("Preset name",`look ${E.project.presets.length+1}`);if(!t)return;const e=ea(E.project,t);E.setProject(i=>({...i,presets:[...i.presets,e]}))}function Na(t){const e=E.project.presets.find(i=>i.id===t);e&&(E.setProject(i=>Sl(i,e)),E.patchUi({status:`preset ${e.name}`}))}function Eh(){const t=El(E.project.presets,E.project.seed+Date.now());if(!t){E.patchUi({status:"no presets saved"});return}Na(t.id)}function Ph(t){const e=E.project.presets.find(i=>i.id===t);e&&E.setProject(i=>({...i,presets:[...i.presets,Pl(e)]}))}function Mh(t){E.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function co(){const t=E.state.ui,e=ye(E.project),i=pi(e),a=t.selectedParam?.paramId;if(!e||!i||!a){E.patchUi({status:"select a numeric parameter first"});return}const n=i.params[a];if(typeof n!="number"){E.patchUi({status:"keyframes are numeric"});return}const r={id:Be("kf"),time:E.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:n,easing:"smooth"};E.setProject(o=>({...o,keyframes:[...o.keyframes,r]})),E.patchUi({status:`key ${a} @ ${r.time.toFixed(2)}s`})}function Ih(){E.setProject(t=>({...t,keyframes:[]}))}async function Ah(){const t=E.project.sources.find(i=>i.id===E.state.ui.selectedSourceId);if(!t)return;const e=await sf(t);e&&_t(e,!0)}function fo(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of E.project.sources)An(e);E.replace(kn()),E.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Bh(){if(E.state.ui.generating)return;const t=E.state.ui.prompt.trim();if(!t){E.patchUi({status:"type a prompt first"});return}E.patchUi({generating:!0,status:"generating new image…"});try{const e=E.project.sources.find(c=>c.id===E.state.ui.selectedSourceId),i=E.state.ui.useSourceForGen;let a=[];const n=e?.frozenFrame||e?.bitmap||e?.video||null;i&&n&&(a=fh(n));const r=sh(t,a,i&&a.length>0),o=E.project.seed+Date.now()>>>0,s=await mh({prompt:r,seed:o,width:E.project.exportSettings.width,height:E.project.exportSettings.height,onStatus:c=>E.patchUi({generating:!0,status:c},!1)}),l=await Mn(s,`gen_${o}.jpg`);_t(l,!0),E.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){E.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let Vi=!1,vi=null;function Rh(t,e){vi=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Fh(t),E.subscribe(()=>{Vi||qa(t)}),qa(t)}async function zh(t=!1){if(vi&&!E.state.ui.exporting){E.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),E.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await ih(vi,E.project,E.project.playback.time,(i,a)=>{E.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);E.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){E.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Fh(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,n=i.dataset.id;if(a==="save"&&lo(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&fo(),a==="imagine"&&Bh(),a==="seed-"&&so(-1),a==="seed+"&&so(1),a==="rand-all"&&Ut("all"),a==="rand-wacky"&&Ut("all",!0),a==="cut-edit"){const r=!E.project.cutEdit?.enabled;E.setProject(o=>({...o,cutEdit:{enabled:r,seed:(o.cutEdit?.seed??o.seed)+1+(Date.now()&255)>>>0}})),E.patchUi({status:r?E.project.sources.some(o=>o.kind==="audio")?"cut edit · on the beat":"cut edit · 120bpm grid — drop an MP3 to lock to the song":"cut edit off"})}if(a==="stamp-chaos"&&_h(),a==="reprint"&&vi&&Th(vi),a==="rand-sel"&&Ut("selected"),a==="rand-param"){const r=i.dataset.paramId,o=ye(E.project),s=pi(o);r&&o&&s&&E.patchUi({selectedParam:{layerId:o.id,effectId:s.id,paramId:r}},!1),Ut("param")}if(a==="help"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&Ah(),a==="gen"){const r=i.dataset.kind??"plasma",o=Gi(),s=i.dataset.kit??(Me(r)?Bt(o?.collageKit):void 0),l=i.dataset.move??(Me(r)?Xa(o?.collageMove):void 0),c=!s||!o?.collageKit||s===o.collageKit,f=Zt(r,s,l,Wh(o,c));_t(f,!0),E.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}${f.collageKitB?` · ${f.collageKitB}`:""}`:f.collageKit?`place · ${r} · ${f.collageKit}`:r==="critters"?"floaters on this layer":`place · ${r}`})}if(a==="mash"){const r=i.dataset.kit??"love",o=Gi();if(o){const s=o.collageKitB===r||o.collageKit===r?void 0:r;Nt(l=>Dh({...l,collageKitB:s}),s?`mash · ${o.collageKit??"kit"} · ${s}`:"mash off")}else{const s=Zt("wallpaper","sailor","rush",{kitB:r});_t(s,!0),E.patchUi({status:`mash · sailor · ${r}`})}}if(a==="wash"){const r=i.dataset.hex;r&&(Nt(o=>({...o,colorA:r}),`wash · ${r}`)||(_t(Zt("wallpaper","sailor","rush",{wash:r}),!0),E.patchUi({status:`wash · ${r}`})))}if(a==="night"){const o=!Gi()?.collageNight;Nt(s=>({...s,collageNight:o}),o?"night wash":"day wash")||(_t(Zt("wallpaper","sailor","rush",{night:!0}),!0),E.patchUi({status:"night wash"}))}if(a==="stamp-critters"&&kh(),a==="stamp-idol"&&xh(),a==="add-layer"&&gh(),a==="dup-layer"&&n&&vh(n),a==="del-layer"&&n&&bh(n),a==="sel-layer"&&n&&E.patchUi({selectedLayerId:n,selectedEffectId:E.project.layers.find(r=>r.id===n)?.effects[0]?.id??null}),a==="sel-fx"&&n&&E.patchUi({selectedEffectId:n}),a==="sel-src"&&n&&E.patchUi({selectedSourceId:n}),a==="bypass"&&n){const r=ye(E.project);r&&wh(r.id,n)}if(a==="fx-up"&&n){const r=ye(E.project);r&&oo(r.id,n,-1)}if(a==="fx-dn"&&n){const r=ye(E.project);r&&oo(r.id,n,1)}if(a==="fx-del"&&n){const r=ye(E.project);r&&yh(r.id,n)}if(a==="key"&&co(),a==="key-clear"&&Ih(),a==="pst-save"&&Sh(),a==="pst-rand"&&Eh(),a==="pst-load"&&n&&Na(n),a==="pst-dup"&&n&&Ph(n),a==="pst-del"&&n&&Mh(n),a==="export"&&zh(),a==="clip"){const r=Math.max(1,Number(i.dataset.secs||4));E.setProject(o=>({...o,duration:Math.max(o.duration,r),exportSettings:{...o.exportSettings,duration:r,format:"mp4",fps:24,bitrate:Math.min(o.exportSettings.bitrate,8)}})),E.patchUi({status:`${r}s clip ready — hit Export`})}if(a==="exp-aspect"&&n){const r=Oa.find(o=>o.id===n);if(r){const o=eo(r.rw,r.rh,1280);E.setProject(s=>({...s,exportSettings:{...s.exportSettings,width:o.width,height:o.height}}))}}if(a==="exp-aspect-src"){const r=E.project,o=ye(r),s=r.sources.find(f=>f.id===(o?.sourceId??r.sources[0]?.id)),l=s?.kind==="audio"?r.sources.find(f=>f.kind!=="audio"):s,c=$d(l?.width??1280,l?.height??720,1280);E.setProject(f=>({...f,exportSettings:{...f.exportSettings,width:c.width,height:c.height}}))}if(a==="play"&&(Si(),E.setProject(r=>({...r,playback:{...r.playback,playing:!r.playback.playing}}))),a==="use-src"&&n){if(E.project.sources.find(s=>s.id===n)?.kind==="audio")return;const o=ye(E.project);o&&He(o.id,s=>({...s,sourceId:n}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(Ch(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(ji(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(ji(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(ji(i.files,!1),i.value=""),i.id==="quality"&&E.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&Ua(i.value),i.value=""),i.id==="blend"){const a=ye(E.project);a&&He(a.id,n=>({...n,blendMode:i.value}))}if(i.id==="mask-type"){const a=ye(E.project);a&&He(a.id,n=>({...n,mask:{...n.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&Na(i.value),i.id==="exp-format"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&E.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=E.project;if(i.id==="gen-prompt"&&E.patchUi({prompt:i.value},!1),i.id==="gen-src"&&E.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked}),i.id==="seed"&&E.setProject(n=>({...n,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&E.setProject(n=>({...n,randomAmount:Number(i.value)}),!1),i.id==="speed"&&E.setProject(n=>({...n,playback:{...n.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&E.setProject(n=>({...n,playback:{...n.playback,loop:i.checked}}),!1),i.id==="loop-close"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&E.setProject(n=>({...n,playback:{...n.playback,freeze:i.checked}}),!1),i.id==="time"&&E.setProject(n=>({...n,playback:{...n.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const n=ye(a);n&&He(n.id,r=>({...r,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const n=ye(a);n&&He(n.id,r=>({...r,enabled:i.checked}),!1)}for(const n of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${n}`&&E.setProject(r=>({...r,globalFeedback:{...r.globalFeedback,[n]:Number(i.value)}}),!1),i.id===`lfb-${n}`){const r=ye(a);r&&He(r.id,o=>({...o,feedback:{...o.feedback,[n]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const n=ye(a),r=i.id.slice(3);n&&r in n.transform&&He(n.id,o=>({...o,transform:{...o.transform,[r]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Vi=!0;const n=Oh(i.dataset.fxType||"",i.dataset.param),r=Hh(i,n);gi(i.dataset.layer,i.dataset.fx,i.dataset.param,r,!1),E.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="collage-scale"&&Nt(n=>({...n,collageScale:Vt(Number(i.value))}),void 0,!0),i.id==="collage-density"&&Nt(n=>({...n,collageDensity:Gt(Number(i.value))}),void 0,!0),i.id==="collage-pace"&&Nt(n=>({...n,collagePace:Dt(Number(i.value))}),void 0,!0),i.id==="exp-q"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&E.setProject(n=>({...n,exportSettings:{...n.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Vi&&(Vi=!1,qa(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),E.state.ui.dropActive||E.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&E.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),E.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&ji(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Si(),E.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Ut(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Ut("all",!0),(e.key==="k"||e.key==="K")&&co(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),fo()),e.key==="?"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),lo()))})}function Oh(t,e){return Je(t)?.params.find(i=>i.id===e)}function Hh(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function qa(t){const{project:e,ui:i}=E.state,a=t.querySelector("#proj-name"),n=t.querySelector("#seed"),r=t.querySelector("#rnd-amt"),o=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),n&&document.activeElement!==n&&(n.value=String(e.seed)),r&&(r.value=String(e.randomAmount)),o&&(o.value=e.quality);const s=t.querySelector("#top-export");s&&(s.disabled=i.exporting);const l=t.querySelector("#inc-critters");l&&(l.checked=i.includeCritters);const c=t.querySelector("#inc-idol");c&&(c.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),t.querySelectorAll('[data-act="cut-edit"]').forEach(f=>{f.classList.toggle("acid",!!e.cutEdit?.enabled)}),Lh(t.querySelector("#rail")),Uh(t.querySelector("#stack")),qh(t.querySelector("#transport"))}function Lh(t){const e=E.project,i=E.state.ui,a=e.sources.find(n=>n.id===i.selectedSourceId&&Me(n.generator))??e.sources.find(n=>Me(n.generator));t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${De(i.prompt)}</textarea>
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
    <div class="sec">Mash</div>
    <div class="row">
      ${vt.map(n=>{const r=a?.collageKitB===n,o=n==="nature"?"Grove":n[0].toUpperCase()+n.slice(1);return`<button class="btn tiny ${r?"acid":""}" data-act="mash" data-kit="${n}">${o}</button>`}).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${xi(Bt(a?.collageKit)).map(n=>`<button class="wash-chip ${(a?.colorA??"").toLowerCase()===n.toLowerCase()?"on":""}" data-act="wash" data-hex="${n}" style="background:${n}" title="${n}"></button>`).join("")}
      <button class="btn tiny ${a?.collageNight?"acid":""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${Vt(a?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${Vt(a?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${Gt(a?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${Gt(a?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${Dt(a?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${Dt(a?.collagePace).toFixed(2)}" />
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
    </div>
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
    <div class="status" style="margin-top:4px">Each clip keeps one move. Drum / illusion moves lock to the tempo grid — bounce, zoetrope, 3-against-4, afterimages. Music punches glow, not the path. Cut edit still cuts on the beat. Drop an MP3 first.</div>
    <div style="margin-top:8px">
      ${e.sources.map(n=>{const r=n.kind==="audio"?`beat-sync · ${qt(n.duration||0)}${n.bpm&&n.bpm>40?` · ${n.bpm}bpm`:""}`:`${n.kind} ${n.width}×${n.height}`,o=n.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${n.id}">use</button>`;return`
        <div class="thumb ${n.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${n.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${De(n.name)}</b><span>${r}</span></div>
          ${o}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${Se("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${Se("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${Se("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${Se("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${Se("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${Se("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(n=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${De(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${n.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Uh(t){const e=E.project,i=ye(e),a=pi(i),n=Tl();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(r=>`
      <div class="layer ${r.id===i?.id?"on":""}" data-act="sel-layer" data-id="${r.id}">
        <div class="hd">
          <span class="name">${De(r.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${r.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${r.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${Se("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${cf.map(r=>`<option value="${r}" ${r===i.blendMode?"selected":""}>${r}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${Se("tr-x","X",i.transform.x,-1,1,.01)}
      ${Se("tr-y","Y",i.transform.y,-1,1,.01)}
      ${Se("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${Se("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${Se("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${Se("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${Se("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${Se("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${Se("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(r=>`<option ${i.mask.type===r?"selected":""} value="${r}">${r}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${i.effects.map((r,o)=>`
        <div class="fx ${r.id===a?.id?"on":""} ${r.enabled?"":"bypass"}" draggable="true" data-fx-index="${o}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${r.id}">${o+1}. ${De(Je(r.typeId)?.name??r.typeId)}</span>
            <span>
              <button class="btn tiny" data-act="bypass" data-id="${r.id}">${r.enabled?"on":"off"}</button>
              <button class="btn tiny" data-act="fx-up" data-id="${r.id}">↑</button>
              <button class="btn tiny" data-act="fx-dn" data-id="${r.id}">↓</button>
              <button class="btn tiny" data-act="fx-del" data-id="${r.id}">x</button>
            </span>
          </div>
        </div>`).join("")}
      <select id="add-fx" class="addfx">
        <option value="">+ add effect</option>
        ${Cl.map(r=>{const o=(n[r.id]??[]).filter(s=>s.id!=="dancer");return o.length?`<optgroup label="${r.label}">${o.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${De(Je(a.typeId)?.name??"params")} · ${De(Je(a.typeId)?.description??"")}</div>
        ${(Je(a.typeId)?.params??[]).map(r=>Nh(i.id,a,r)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(r=>{r.addEventListener("dragstart",o=>{o.dataTransfer?.setData("text/plain",r.getAttribute("data-fx-index")||"0")}),r.addEventListener("dragover",o=>o.preventDefault()),r.addEventListener("drop",o=>{o.preventDefault();const s=Number(o.dataTransfer?.getData("text/plain")),l=Number(r.getAttribute("data-fx-index"));!i||Number.isNaN(s)||Number.isNaN(l)||s===l||He(i.id,c=>{const f=[...c.effects],[h]=f.splice(s,1);return f.splice(l,0,h),{...c,effects:f}})})})}function Nh(t,e,i){const a=e.params[i.id]??i.default,n=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${n} ${a?"checked":""}/> ${De(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${De(i.label)}</span><input type="color" ${n} value="${De(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${De(i.label)}</span>
      <select ${n}>${(i.options??[]).map(r=>`<option value="${r.value}" ${r.value===a?"selected":""}>${r.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${De(i.label)}</span>
    <input type="range" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function qh(t){const e=E.project,i=e.playback,a=e.exportSettings,n=E.state.ui.exporting,r=Math.max(e.duration,.1),o=i.time/r*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(s=>`<option ${i.mode===s?"selected":""} value="${s}">${s}</option>`).join("")}
        </select>
      </div>
      ${Se("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${qt(i.time)} / ${qt(r)}</span>
        <span class="status" id="status-line">${E.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(s=>`<div class="key" style="left:${s.time/r*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${o}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${r}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${Oa.map(s=>`<button class="btn tiny ${Dd(a.width,a.height)===s.id?"acid":""}" data-act="exp-aspect" data-id="${s.id}">${s.label}</button>`).join("")}
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
  `,t.querySelector("#timeline")?.addEventListener("click",s=>{const l=s.currentTarget.getBoundingClientRect(),c=(s.clientX-l.left)/l.width*r;E.setProject(f=>({...f,playback:{...f.playback,time:Math.max(0,c)}}))})}function Se(t,e,i,a,n,r){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${n}" step="${r}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${n}" step="${r}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Gi(){const t=E.project,e=t.sources.find(n=>n.id===E.state.ui.selectedSourceId);if(e&&Me(e.generator))return e;const i=ye(t),a=t.sources.find(n=>n.id===i?.sourceId);return a&&Me(a.generator)?a:t.sources.find(n=>Me(n.generator))}function Wh(t,e=!0){if(t)return{kitB:t.collageKitB,night:t.collageNight,scale:t.collageScale,density:t.collageDensity,pace:t.collagePace,wash:e?t.colorA:void 0}}function Dh(t){return!t.collageKit||!t.collageMove?t:{...t,name:bn(t.collageMove,t.collageKit,t.collageKitB)}}function Nt(t,e,i=!1){const a=Gi();return a?(E.setProject(n=>({...n,sources:n.sources.map(r=>r.id===a.id?t(r):r)}),!i),e&&E.patchUi({status:e},!i),!0):!1}function De(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function qt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function uo(t,e){if(E.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),n=Math.max(16,Math.floor(a.width*i)),r=Math.max(16,Math.floor(a.height*i));(t.width!==n||t.height!==r)&&(t.width=n,t.height=r)}function $h(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${qt(i)}  ${e.toFixed(0)}FPS  ${E.project.quality.toUpperCase()}`);const n=Math.max(E.project.duration,.1),r=t.querySelector(".playhead");r&&(r.style.left=`${i/n*100}%`);const o=t.querySelector("#clock");o&&(o.textContent=`${qt(i)} / ${qt(n)}`);const s=t.querySelector("#time");s&&document.activeElement!==s&&(s.value=String(i));const l=t.querySelector("#status-line");l&&(l.textContent=E.state.ui.status)}const ho=window;ho.__phospheneMark=!0;const mo=document.querySelector("#app");if(!mo)throw new Error("#app missing");const Wa=mo,Da=document.createElement("canvas");async function jh(){await new Promise(l=>requestAnimationFrame(()=>l()));let t;try{t=new Yc(Da)}catch(l){const c=document.querySelector("#boot-note");c?c.textContent=`PHOSPHENE · plasma · ${l instanceof Error?l.message:"WebGL failed"}`:Wa.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${l instanceof Error?l.message:String(l)}</p>
      </div>`;return}Rh(Wa,t),ho.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>uo(Da,e)).observe(e),uo(Da,e);let a=performance.now(),n=60,r=0,o=performance.now();function s(l){const c=Math.min(.08,(l-a)/1e3);a=l;const f=E.state.ui.exporting,h=E.project,d=Gl(h,h.playback.time),u=Ti(h);if(!f&&h.playback.playing&&!h.playback.freeze){const v=u?.audio&&h.playback.mode==="forward"&&!u.audio.paused&&Number.isFinite(u.audio.currentTime);if(u?.audio&&ra(u.audio,h.playback),v){const p=u.audio.currentTime;E.setProject(y=>({...y,playback:{...y.playback,time:p}}),!1)}else{let p=h.playback.time+c*d;const y=Math.max(h.duration,.001);h.playback.loop?p=(p%y+y)%y:p=Math.min(p,y),E.setProject(m=>({...m,playback:{...m.playback,time:p}}),!1),u?.audio&&h.playback.mode!=="forward"&&ra(u.audio,{...h.playback,playing:!1,time:p})}}else u?.audio&&ra(u.audio,{...h.playback,playing:!1});for(const v of E.project.sources)if(v.kind==="video"&&v.video&&!E.project.playback.freeze){const p=ia(E.project.playback.time,v.duration||v.video.duration||1,E.project.playback.mode,1,E.project.playback.loop);lf(v,p,{playing:E.project.playback.playing,freeze:E.project.playback.freeze,mode:E.project.playback.mode,speed:E.project.playback.speed})}if(!f)try{t.render(E.project,E.project.playback.time),t.cutStatus&&t.cutStatus!==E.state.ui.status&&E.patchUi({status:t.cutStatus},!1)}catch(v){E.patchUi({status:v instanceof Error?v.message:"render error"},!1)}r++,l-o>400&&(n=r*1e3/(l-o),o=l,r=0),$h(Wa,n,E.project.playback.time),requestAnimationFrame(s)}requestAnimationFrame(s)}jh()})();

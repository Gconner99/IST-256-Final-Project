(function(){"use strict";function Me(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function te(t,e,i){return Math.min(i,Math.max(e,t))}function je(t,e=16){return Math.max(e,Math.round(t)&-2)}function _a(t,e,i,a){const r=Math.min(1,i/Math.max(t,1),a/Math.max(e,1));return{width:je(t*r),height:je(e*r)}}function _i(t,e,i){return t+(e-t)*i}function On(t){const e=te(t,0,1);return e*e*(3-2*e)}const Hn=["heraldry","wallpaper","giants","shower"],ht=["sailor","circus","fruit","nature","love","space","sweet","music"],ei=["rush","tunnel","bloom","spiral","helix","prism","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","clap","wave"],Ln=["bars","ripple","swing","burst","halo","clap","wave"];function Ti(t){return!!t&&Ln.includes(t)}const Un={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",clap:"CLAP",wave:"WAVE"};function Ue(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Si(t){return ht.includes(t)?t:"sailor"}function Ta(t){return ei.includes(t)?t:"rush"}function Ci(t){return ei[(t>>>0)%ei.length]}function Ei(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function Sa(t,e){return e&&ei.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const Pt=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a"],Ca={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a"},Nn={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","star","moon"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","moon","star","figure"],fruit:["pear","lemon","cherry","leaf","mushroom","flower","sun","cloud","bolt","umbrella","bird"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","drop","moth","bird"],love:["heart","wingfig","swan","cat","crown","moon","star","key","ring","envelope","bow","potion","house"],space:["rocket","planet","saturn","ufo","comet","satellite","star","moon"],sweet:["lolly","coneice","cupcake","donut","candy","cherry","heart"],music:["note","vinyl","headphone","mic","speaker","star","heart"]},Ea={sailor:["fish","boat","tail","swallow","anchor"],circus:["elephant","tent","horse","balloon","figure"],fruit:["pear","lemon","mushroom","sun","umbrella"],nature:["tree","deer","owl","fox","mountain"],love:["heart","wingfig","swan","cat","house"],space:["rocket","saturn","ufo","planet","comet"],sweet:["lolly","cupcake","donut","coneice","candy"],music:["vinyl","headphone","speaker","note","mic"]},Pa={sailor:["starfish","shell","star","fish","anchor"],circus:["ball","star","balloon","bow","ticket"],fruit:["cherry","leaf","star","drop","lemon"],nature:["leaf","acorn","drop","moth","bird"],love:["heart","star","key","moon","ring"],space:["star","moon","comet","satellite","planet"],sweet:["candy","heart","lolly","cherry","donut"],music:["note","star","heart","vinyl","mic"]},Bt=144;function Ba(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function Re(t,e){return e[Math.floor(t()*e.length)%e.length]}function Ma(t,e){return t()<.32?e:Re(t,Pt)}function Wn(t,e="rush"){return e==="tunnel"?Ea[t]:e==="lattice"?Pa[t]:Nn[t]}function qn(t,e,i,a){const r=Wn(a,e==="bloom"?"rush":e);let n=Re(t,r);e==="lattice"&&t()<.4&&(n=Re(t,Pa[a])),e==="tunnel"&&t()<.28&&(n=Re(t,Ea[a]));const o=Ma(t,i);let s=Ma(t,i);return s===o&&(s=Re(t,Pt)),{kind:n,pattern:t()<.58?"plain":Re(t,["polka","hoop","half","bar"]),a:o,b:s,mirror:t()>.5}}function Dn(t,e,i="sailor"){const a=Me(t>>>0),r=240,n=[];for(let o=0;o<r;o++){const s=o<70?"lattice":o<130?"tunnel":"rush";n.push({x:a(),y:a(),z:a(),rot:(a()-.5)*.55,size:.55+a()*.9,vx:(a()-.5)*.06,vy:(a()-.35)*.08,vr:(a()-.5)*.25,charge:qn(a,s,e,i)})}return n}function $n(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function jn(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,a=e>>8&255,r=e&255;return(.22*i+.7*a+.08*r)/255}function Ia(t,e,i,a){t.save(),t.beginPath(),e(),t.clip();const r=i.a,n=i.b,o=a*2.4;if(t.fillStyle=r,t.fillRect(-o,-o,o*2,o*2),t.fillStyle=n,i.pattern==="polka"){const s=a*.38;for(let c=-4;c<5;c++)for(let f=-4;f<5;f++)t.beginPath(),t.arc((f+.5*(c&1))*s,c*s,s*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=a*.14;for(let s=1;s<=3;s++)t.beginPath(),t.arc(0,0,a*(.28*s),0,Math.PI*2),t.stroke()}else i.pattern==="half"?t.fillRect(0,-o,o,o*2):i.pattern==="bar"&&t.fillRect(-o,-a*.18,o*2,a*.36);t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,a*.07),t.strokeStyle=jn(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function Aa(t,e,i,a=.42){for(let r=0;r<i*2;r++){const n=r%2===0?e:e*a,o=r*Math.PI/i-Math.PI/2,s=Math.cos(o)*n,c=Math.sin(o)*n;r===0?t.moveTo(s,c):t.lineTo(s,c)}t.closePath()}function Vn(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Gn(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function Ra(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function Kn(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Xn(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function Zn(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function Qn(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const a=-Math.PI*.95+i/7*Math.PI*1.9,r=i%2===0?e:e*.72;t.lineTo(Math.sin(a)*r,-Math.cos(a)*r*.85)}t.closePath()}function Yn(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function Jn(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function eo(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function to(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function io(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function ao(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function ro(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function no(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function oo(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function so(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function co(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function lo(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function fo(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function uo(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function ho(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function mo(t,e){for(let i=0;i<5;i++){const a=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(a)*e*.45,Math.sin(a)*e*.45,e*.32,e*.22,a,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function po(t,e){Aa(t,e,8,.55)}function vo(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function go(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function bo(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function yo(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function wo(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function xo(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function ko(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function _o(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function To(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function So(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Co(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function Eo(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function Po(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function Bo(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),Ra(t,e*.72)}function Mo(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function Io(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function Ao(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function Ro(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function zo(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function Fo(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function Oo(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function Ho(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function Lo(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function Uo(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function No(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function Wo(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function qo(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function Do(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function $o(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function jo(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function Vo(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function Go(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function Ko(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Xo(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function Zo(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function Qo(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function Yo(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function Jo(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function es(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":Aa(t,i,5,e==="starfish"?.42:.4);break;case"heart":Vn(t,i);break;case"moon":Gn(t,i);break;case"figure":Ra(t,i);break;case"fish":Kn(t,i);break;case"anchor":Xn(t,i);break;case"wave":Zn(t,i);break;case"shell":Qn(t,i);break;case"boat":Yn(t,i);break;case"tail":Jn(t,i);break;case"swallow":eo(t,i);break;case"elephant":to(t,i);break;case"tent":io(t,i);break;case"ball":ao(t,i);break;case"bow":ro(t,i);break;case"horse":no(t,i);break;case"balloon":oo(t,i);break;case"ticket":so(t,i);break;case"pear":co(t,i);break;case"lemon":lo(t,i);break;case"cherry":fo(t,i);break;case"leaf":uo(t,i);break;case"mushroom":ho(t,i);break;case"flower":mo(t,i);break;case"sun":po(t,i);break;case"cloud":vo(t,i);break;case"bolt":go(t,i);break;case"umbrella":bo(t,i);break;case"bird":yo(t,i);break;case"tree":wo(t,i);break;case"deer":xo(t,i);break;case"fox":ko(t,i);break;case"owl":_o(t,i);break;case"acorn":To(t,i);break;case"cone":So(t,i);break;case"mountain":Co(t,i);break;case"drop":Eo(t,i);break;case"moth":Po(t,i);break;case"wingfig":Bo(t,i);break;case"swan":Mo(t,i);break;case"cat":Io(t,i);break;case"crown":Ao(t,i);break;case"key":Ro(t,i);break;case"ring":zo(t,i);break;case"envelope":Fo(t,i);break;case"potion":Oo(t,i);break;case"rocket":Lo(t,i);break;case"planet":Uo(t,i);break;case"saturn":No(t,i);break;case"ufo":Wo(t,i);break;case"comet":qo(t,i);break;case"satellite":Do(t,i);break;case"lolly":$o(t,i);break;case"coneice":jo(t,i);break;case"cupcake":Vo(t,i);break;case"donut":Go(t,i);break;case"candy":Ko(t,i);break;case"note":Xo(t,i);break;case"vinyl":Zo(t,i);break;case"headphone":Qo(t,i);break;case"mic":Yo(t,i);break;case"speaker":Jo(t,i);break;default:Ho(t,i);break}}function ts(t,e,i){const a=()=>es(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Ia(t,a,e,i),t.restore();return}Ia(t,a,e,i)}function is(t){const e=document.createElement("canvas");e.width=Bt,e.height=Bt;const i=e.getContext("2d");return i&&(i.translate(Bt/2,Bt/2),ts(i,t,Bt*.38)),e}class as{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];builtSeed=-1;builtInk="";builtKit="sailor";stamp(e){const i=$n(e);let a=this.stamps.get(i);return a||(a=is(e),this.stamps.set(i,a)),a}ensure(e,i,a){this.builtSeed===e&&this.builtInk===i&&this.builtKit===a&&this.particles.length||(this.particles=Dn(e,i,a),this.stamps.clear(),this.builtSeed=e,this.builtInk=i,this.builtKit=a)}paint(e){const i=Math.max(16,Math.floor(e.width)),a=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==a&&(this.canvas.height=a);const r=this.canvas.getContext("2d",{alpha:!1});if(!r)return this.canvas;const n=Si(e.kit),o=Ba(e.paper,ti(n,e.seed)),s=Ba(e.ink,Ca[n]);this.ensure(e.seed>>>0,s,n);const c=Sa(e.generator,e.move),f=te(e.audio,0,1),l=te(e.bass,0,1),p=te(e.beat,0,1),y=e.bpm>40?e.bpm:0;os(r,i,a,o,n,e.time,e.seed,p),r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high";const d=e.time,b=i/Math.max(a,1),u=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Ti(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"?130:c==="tunnel"?120:c==="bloom"?140:this.particles.length,h=c==="prism"?3:1;for(let v=0;v<u;v++){const w=this.particles[v],x=this.stamp(w.charge),S=ns(w,v,c,d,f,l,p,y);if(!S)continue;const C=S.px*Math.min(i,a);if(C<5)continue;const R=(.5+S.x)*i,B=(.5+S.y/b)*a;for(let H=0;H<h;H++){r.save();const M=h>1?(H-1)*C*.09:0,D=h>1?H===2?C*.06:H===0?-C*.03:0:0;if(R+M<-C||B+D<-C||R+M>i+C||B+D>a+C){r.restore();continue}r.translate(R+M,B+D),r.rotate(S.rot+(h>1?H*.1:0)),S.flip!=null&&r.scale(S.flip,1),S.squash&&r.scale(S.squash,1/Math.max(.35,S.squash)),S.glow&&(r.globalAlpha=S.alpha*.32*S.glow,r.fillStyle=S.tint??s,r.beginPath(),r.arc(0,0,C*(.4+S.glow*.16),0,Math.PI*2),r.fill()),r.globalAlpha=S.alpha*(h>1?.72:1),r.drawImage(x,-C/2,-C/2,C,C),r.restore()}}return Ti(c)&&p>.04&&(r.save(),r.translate(i*.5,a*.5),r.strokeStyle=It(s,"#fff4d8",.72),r.globalAlpha=.18+p*.42,r.lineWidth=2.6+p*6,r.beginPath(),r.arc(0,0,Math.min(i,a)*(.16+p*.2),0,Math.PI*2),r.stroke(),r.globalAlpha=.1+p*.22,r.beginPath(),r.arc(0,0,Math.min(i,a)*(.3+p*.18),0,Math.PI*2),r.stroke(),r.restore()),this.canvas}}function Ce(t){return(t%1+1)%1}function rs(t){const e=Ce(t);return e<.5?e*2:2-e*2}function ze(t){return rs(t)-.5}function ns(t,e,i,a,r,n,o,s){const c=Ti(i),f=i==="kick"||i==="jelly"||c?Math.max(0,Math.sin(a*(s>40?s/60*Math.PI*2:6.2))):0,l=c?Math.max(o,f*.25):Math.max(o*.85,f*.18);if(i==="bounce"){const u=.11+Math.abs(t.vx)*2.4,h=.09+Math.abs(t.vy)*2.1;return{x:ze(t.x+u*a),y:ze(t.y+h*a*.92),px:te((.1+t.size*.07)*(1+l*.14),.08,.26),rot:t.rot+t.vr*a*1.6,alpha:1}}if(i==="flip"){const u=a*(2.2+r*.25)+e*.55,h=Math.cos(u);return{x:ze(t.x+t.vx*a*.45),y:ze(t.y+t.vy*a*.38),px:te((.12+t.size*.06)*(1+l*.1),.08,.24),rot:t.rot+Math.sin(u)*.15,alpha:te(.28+Math.abs(h)*.72,.2,1),flip:h}}if(i==="glow"){const u=.45+.55*Math.sin(a*2.4+e*.7),h=te(u*.55+l*.35+n*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(a*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(a*.48+t.x*6)*.06,px:te((.1+t.size*.08)*(.9+h*.16),.07,.24),rot:t.rot+a*.12*t.vr,alpha:te(.5+h*.45,.35,1),glow:h}}if(i==="flash"){const u=.7+.3*Math.sin(a*5.2+e)+l*.12,h=Pt[(Math.floor(a*3.2+e*3)>>>0)%Pt.length];return{x:ze(t.x+t.vx*a*.32),y:ze(t.y+t.vy*a*.28),px:te((.11+t.size*.07)*(1+l*.1),.08,.24),rot:t.rot+a*.4*t.vr,alpha:te(u,.4,1),glow:.16+l*.28,tint:h}}if(i==="hop"){const u=s>40?s/60:.85,h=Ce(a*u+t.z),v=Math.abs(Math.sin(h*Math.PI))+l*.16,w=Math.cos(h*Math.PI*2);return{x:ze(t.x+(.1+Math.abs(t.vx)*1.8)*a),y:ze(t.y)*.62-v*.2,px:te(.1+t.size*.07+v*.02,.08,.22),rot:t.rot+v*.55,alpha:1,flip:w}}if(i==="kick"){const u=.1+Math.abs(t.vx)*2.1,h=.08+Math.abs(t.vy)*1.8;return{x:ze(t.x+u*a),y:ze(t.y+h*a),px:te((.1+t.size*.07)*(1+l*.28),.08,.28),rot:t.rot+t.vr*a,alpha:1,glow:l*.7}}if(i==="jelly"){const u=1+Math.sin(a*5.2+e)*.08+l*.2;return{x:ze(t.x+t.vx*a*.5),y:ze(t.y+t.vy*a*.42),px:te(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(a*3+e)*.2,alpha:1,squash:u}}if(i==="tide"){const v=e%8,w=Math.floor(e/8)%6,x=(v+.5)/8-.5,S=(w+.5)/6-.5,C=Math.sin(a*1.05+w*.72+v*.18);return{x:x*.9+C*.07,y:S*.74+Math.sin(a*.48+w*.9)*.035,px:te(.085+t.size*.045+l*.02,.06,.18),rot:t.rot+C*.22,alpha:1}}if(i==="rings"){const h=e%4,v=Math.floor(e/4),w=12,x=h&1?-1:1,S=v/w*Math.PI*2+a*(.28+h*.05)*x,C=.14+h*.11;return{x:Math.cos(S)*C,y:Math.sin(S)*C*.88,px:te(.07+t.size*.035+l*.02,.05,.16),rot:S+t.rot*.25,alpha:.96}}if(i==="loom"){const u=a*.62+t.x*Math.PI*2,h=a*.94+t.y*Math.PI*2;return{x:Math.sin(u)*.4+Math.sin(h*.5)*.06,y:Math.sin(u*2+t.z*Math.PI)*.3,px:te(.08+t.size*.045+l*.02,.06,.18),rot:u*.18+t.rot,alpha:1}}if(i==="petal"){const h=e%6,v=Math.floor(e/6)/8,w=h/6*Math.PI*2+a*.2,x=.8+.2*Math.sin(a*.85),S=(.1+v*.32)*x;return{x:Math.cos(w)*S,y:Math.sin(w)*S*.9,px:te(.075+t.size*.04+l*.02,.055,.18),rot:w+Math.PI*.5,alpha:te(.42+x*.55,.4,1)}}if(i==="flock"){const u=e%5,v=Ce(t.z+a*(.11+u*.015))*Math.PI*2+u*.32,w=.2+Math.sin(v*2+u)*.1+u*.028;return{x:Math.cos(v)*w,y:Math.sin(v*.86)*w*.7,px:te(.075+t.size*.04+l*.02,.055,.17),rot:v+Math.PI*.5,alpha:1}}if(i==="wheel"){const h=e%3,x=Math.floor(e/3)/14*Math.PI*2+a*.38*(h===1?-1:1),S=.2+h*.12,C=.5+.5*Math.sin(x);return{x:Math.cos(x)*S,y:Math.sin(x)*S*.72,px:te((.075+t.size*.035)*(.78+C*.28)+l*.02,.05,.2),rot:x,alpha:te(.5+C*.45,.45,1)}}if(i==="silk"){const u=e%4,h=u<2?1:-1,v=Ce(t.x+a*.075*h+u*.08),w=(u/3-.5)*.52+Math.sin(v*Math.PI*3+u)*.055;return{x:v-.5,y:w,px:te(.07+t.size*.038+l*.02,.05,.16),rot:Math.cos(v*Math.PI*3)*.28+t.rot*.15,alpha:.94}}if(i==="bars"){const v=e%8,w=Math.floor(e/8)%6,x=(v+.5)/8-.5,S=.32+.68*(.5+.5*Math.sin(a*2.15+v*.85+t.z)),C=te(S*(.45+r*.28+n*.18+l*.38),.18,1),R=.42-w/Math.max(5,1)*C*.82;return{x:x*.86,y:R,px:te(.075+t.size*.03+l*.03,.055,.18),rot:t.rot*.2,alpha:te(.45+(1-w/6)*.5+l*.15,.4,1),glow:l*.55,squash:1-l*.08}}if(i==="ripple"){const h=e%3,v=Math.floor(e/3),w=16,x=Ce(a*.2),S=.15+h*.145+x*.16+l*.045,C=v/w*Math.PI*2+a*.1;return{x:Math.cos(C)*S,y:Math.sin(C)*S*.88,px:te(.062+t.size*.024+l*.02,.048,.13),rot:C+t.rot*.2,alpha:te(.96-h*.08,.6,1),glow:l*.45}}if(i==="swing"){const v=e%6,w=Math.floor(e/6)%8,x=s>40?s/60*Math.PI*2:5.4,S=v&1?-1:1,C=Math.sin(a*x+v*.85)*.82*S,R=.07+w*.072;return{x:(v/Math.max(5,1)-.5)*.9+Math.sin(C)*R,y:-.44+Math.cos(C)*R,px:te(.07+t.size*.03+l*.028,.05,.16),rot:C,alpha:1,glow:l*.4}}if(i==="burst"){const h=e%3,x=Math.floor(e/3)/16*Math.PI*2+a*.2*(h===1?-1:1),S=(.14+h*.13)*(1+l*.62);return{x:Math.cos(x)*S,y:Math.sin(x)*S*.9,px:te((.08+t.size*.035)*(1+l*.22),.055,.22),rot:x+t.rot*.2,alpha:te(.55+l*.4,.45,1),glow:l*.75,squash:1+l*.14}}if(i==="halo"){const h=e%2,x=Math.floor(e/2)/24*Math.PI*2+a*.26*(h?-1:1),S=.84+.16*Math.sin(a*1.15)+l*.2,C=(.26+h*.14)*S,R=te(.28+l*.65+n*.15,0,1);return{x:Math.cos(x)*C,y:Math.sin(x)*C*.9,px:te(.07+t.size*.032+R*.04,.05,.18),rot:x+Math.PI*.5,alpha:te(.5+R*.45,.4,1),glow:R}}if(i==="clap"){const u=e&1?1:-1,h=Math.floor(e/2)%8,v=Math.floor(e/16)%3,w=.28-l*.14;return{x:u*(w+v*.055),y:(h/7-.5)*.78,px:te(.08+t.size*.035+l*.03,.055,.18),rot:t.rot*.15+u*l*.2,alpha:1,squash:1-l*.16,glow:l*.5}}if(i==="wave"){const v=e%16,w=Math.floor(e/16)%3,x=(v+.5)/16-.5,S=.09+r*.07+l*.13,C=x*Math.PI*3.4+a*2.15+w*.55;return{x:x*.92,y:(w-1)*.2+Math.sin(C)*S,px:te(.065+t.size*.03+l*.026,.05,.15),rot:Math.cos(C)*.32,alpha:1,glow:l*.45}}if(i==="tunnel"){const h=.3+Ce(t.z-a*(.4+r*.22+n*.1))*2.45;if(h<.34||h>2.65)return null;const v=t.x*Math.PI*2+a*.14+t.rot*.3,w=(.16+t.y*.58)/h;return{x:Math.cos(v)*w,y:Math.sin(v)*w,px:te(.2*t.size*(.95+n*.08+l*.12)/h,.04,.48),rot:t.rot+t.vr*a*.2,alpha:te((2.65-h)/.28,0,1)*te((h-.3)/.1,0,1)}}if(i==="lattice"){const v=(e%8+.5)/8-.5,w=(Math.floor(e/8)+.5)/6-.5,S=.32+(1-Ce(a*(.2+r*.12)+t.z*.02))*2.2;return{x:v/(S*.62),y:w/(S*.62),px:te(.16*t.size/S,.05,.42),rot:t.rot*.25,alpha:te((2.4-S)/.25,0,1)}}if(i==="bloom"){const u=Ce(t.z-a*(.34+n*.12)),h=u*u,v=t.x*Math.PI*2+a*.1+t.rot;return{x:Math.cos(v)*h*.92,y:Math.sin(v)*h*.92,px:te(.05+h*.32*t.size*(1+r*.06+l*.12),.04,.46),rot:t.rot+u*.4,alpha:te(1.05-h,0,1)*te(u/.08,0,1)}}if(i==="spiral"){const h=.28+Ce(t.z-a*(.4+r*.2+n*.08))*2.6;if(h<.32||h>2.75)return null;const v=t.x*Math.PI*2+2.15/h+a*.1,w=(.1+t.y*.38)/h;return{x:Math.cos(v)*w,y:Math.sin(v)*w,px:te(.2*t.size*(.94+n*.08+l*.12)/h,.04,.5),rot:t.rot+v*.15,alpha:te((2.75-h)/.28,0,1)*te((h-.28)/.1,0,1)}}if(i==="helix"){const h=.26+Ce(t.z-a*(.46+r*.22+n*.08))*2.7;if(h<.3||h>2.85)return null;const v=e&1?Math.PI:0,w=a*(1.7+1.35/h)+t.x*Math.PI*2+v,x=(.11+t.y*.26)/h;return{x:Math.cos(w)*x,y:Math.sin(w)*x*.92,px:te(.22*t.size*(.93+n*.08+l*.12)/h,.04,.52),rot:w+t.rot,alpha:te((2.85-h)/.28,0,1)*te((h-.26)/.1,0,1)}}if(i==="prism"){const h=.28+Ce(t.z-a*(.42+r*.2+n*.08))*2.55;if(h<.32||h>2.7)return null;const v=a*.22+t.rot*.4,w=Ce(t.x)-.5,x=Ce(t.y)-.5,S=Math.cos(v),C=Math.sin(v);return{x:(w*S-x*C)/h,y:(w*C+x*S)/h,px:te(.2*t.size*(.94+n*.08+l*.12)/h,.04,.5),rot:t.rot+v,alpha:te((2.7-h)/.26,0,1)*te((h-.28)/.1,0,1)}}const y=.26+Ce(t.z-a*(.46+r*.24+n*.1))*2.7;if(y<.3||y>2.85)return null;const d=(Ce(t.x+t.vx*a*.03)-.5)/y,b=(Ce(t.y+t.vy*a*.02)-.5)/y;return{x:d,y:b,px:te(.24*t.size*(.92+n*.08+l*.14)/y,.04,.58),rot:t.rot+t.vr*a*.12,alpha:te((2.85-y)/.3,0,1)*te((y-.26)/.1,0,1)}}const Mt={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828"]};function It(t,e,i){const a=parseInt(t.slice(1),16),r=parseInt(e.slice(1),16);if(Number.isNaN(a)||Number.isNaN(r))return t;const n=te(i,0,1),o=c=>Math.round((a>>c&255)*(1-n)+(r>>c&255)*n);return`#${(o(16)<<16|o(8)<<8|o(0)).toString(16).padStart(6,"0")}`}function os(t,e,i,a,r,n,o,s=0){const c=Me(o+4>>>0),f=Re(c,Mt[r]),l=Re(c,Mt[r]),p=Re(c,Mt[r]);t.fillStyle=a,t.fillRect(0,0,e,i);const y=t.createLinearGradient(0,0,e,i);y.addColorStop(0,It(a,f,.38)),y.addColorStop(.45,It(a,p,.28)),y.addColorStop(1,It(a,l,.42)),t.fillStyle=y,t.fillRect(0,0,e,i);const d=e*(.5+Math.sin(n*.17)*.08),b=i*(.46+Math.cos(n*.13)*.06),u=t.createRadialGradient(d,b,0,d,b,Math.max(e,i)*.72);u.addColorStop(0,It(a,f,.42+s*.1)),u.addColorStop(1,a),t.fillStyle=u,t.globalAlpha=.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function ti(t,e=0){const i=Me(e+17>>>0);return Re(i,Mt[t])}function At(t,e){const i=Me(t+17>>>0);return Re(i,Mt[ht[Math.floor(i()*ht.length)]])}function bt(t,e="#c41e3a"){const i=Me(t+91>>>0);return i()<.35?e:Re(i,Pt)}function Pi(t){return Ca[t]}function ss(t){return ht[(t>>>0)%ht.length]}function Pe(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const cs=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ls=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],fs=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ds=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],us=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],za=`
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
`,Fa=`
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
`,hs=`
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
`,ms=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,ps=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Oa=`
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
`,Bi={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Oa}${Fa}`,applyGlsl:ms};function vs(t){return t?{...Bi,extraUniforms:`${Oa}${Fa}${hs}`,applyGlsl:ps}:Bi}const gs=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${za}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Bi],Ha=[...cs,...ls,...fs,...ds,...us,...gs],bs=new Map(Ha.map(t=>[t.id,t]));function Ve(t){return bs.get(t)}function ys(){const t={};for(const e of Ha)(t[e.category]??=[]).push(e);return t}const ws=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Mi(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(a=>({...a,sourceId:null,effects:a.effects.map(r=>({...r,params:{...r.params}})),transform:{...a.transform},mask:{...a.mask,rect:{...a.mask.rect},center:{...a.mask.center}},feedback:{...a.feedback}})),keyframes:t.keyframes.map(a=>({...a})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Pe("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function xs(t,e){const i=e.data,a=t.sources.map(n=>n.id),r=i.layers.map((n,o)=>({...n,id:n.id,sourceId:n.sourceId&&a.includes(n.sourceId)?n.sourceId:a[Math.min(o,a.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:r,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function ks(t,e){if(t.length===0)return null;const i=Me(e);return t[Math.floor(i()*t.length)]}function _s(t){return{...t,id:Pe("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const yt=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],La=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function Ts(t,e,i,a){if(e.randomizable===!1)return i;if(e.kind==="bool")return a<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return a<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(l=>{const p=parseInt(l.slice(1),16),y=p>>16&255,d=p>>8&255,b=p&255,u=h=>te(Math.round(_i(h,t()*255,a)),0,255);return`#${[u(y),u(d),u(b)].map(h=>h.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const r=e.min??0,n=e.max??1,o=typeof i=="number"?i:Number(e.default),s=r+t()*(n-r),c=_i(o,s,Math.max(a,.35));return e.kind==="int"?Math.round(c):c}function Ii(t,e,i,a){const r=Ve(t.typeId);if(!r)return t;const n=Me(e),o={...t.params};for(const s of r.params)a&&s.id!==a||(o[s.id]=Ts(n,s,o[s.id]??s.default,te(i,0,1)));return{...t,params:o}}function Ss(t,e,i,a=!1,r){const n=t.effects.map((o,s)=>a&&r&&o.id!==r?o:Ii(o,e+s*997,i));return{...t,effects:n}}function Ua(t,e,i){const a=Ve(t),r={};if(a)for(const n of a.params)r[n.id]=n.default;return Ii({id:Pe("fx"),typeId:t,enabled:!0,params:r},e,i)}function Na(t,e,i,a){const r={...t.params};if(t.typeId==="grade"&&(e==="lush"?(r.saturation=.18+a()*.42,r.brightness=-.04+a()*.16,r.contrast=.06+a()*.22,r.gamma=.82+a()*.35,r.hue=(a()-.5)*.18,r.exposure=-.15+a()*.4):e==="outsider"?(r.saturation=a()>.5?-.35+a()*.3:.4+a()*.5,r.contrast=.2+a()*.55,r.gamma=.55+a()*1.1,r.hue=(a()-.5)*.7):(r.saturation=.05+a()*.5,r.contrast=.1+a()*.35,r.hue=(a()-.5)*.35)),t.typeId==="duotone"&&(r.shadow=i.shadow,r.highlight=i.highlight,r.amount=e==="lush"?.45+a()*.4:.7+a()*.3),t.typeId==="grain"&&(r.leakColor=i.leak,r.leak=e==="lush"?.18+a()*.35:a()*.22,r.grain=e==="lush"?.12+a()*.22:.2+a()*.4),t.typeId==="bloom"&&(r.amount=e==="outsider"?.15+a()*.3:.4+a()*.45,r.halation=e==="lush"?.22+a()*.4:a()*.25,r.size=1.4+a()*2.2),t.typeId==="warp"&&(r.amount=e==="lush"?.012+a()*.04:.04+a()*.12),t.typeId==="chroma"&&(r.amount=e==="lush"?.002+a()*.006:.006+a()*.02),t.typeId==="analog"&&(r.mixScan=e==="lush"?a()*.2:.25+a()*.5,r.noise=e==="lush"?a()*.1:.12+a()*.35),t.typeId==="posterize"&&(r.levels=3+Math.floor(a()*6),r.dither=.08+a()*.35),t.typeId==="threshold"&&(r.mix=.35+a()*.45,r.soft=.04+a()*.18),t.typeId==="critters"){r.count=e==="lush"?3+Math.floor(a()*3):4+Math.floor(a()*4),r.size=.85+a()*.7,r.amount=.7+a()*.3,r.speed=.7+a()*1.3,r.seed=1+Math.floor(a()*9998);const n=a();e==="lush"?r.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?r.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":r.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){r.size=.12+a()*.05,r.count=1,r.crowd="normal",r.place="center";const n=a();e==="lush"?r.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?r.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":r.move=n>.78?"drift":"dance",r.echo=.35+a()*.5,r.amount=1,r.speed=r.move==="dance"?.55+a()*1.5:.32+a()*.7,r.seed=1+Math.floor(a()*9998);const o=a();e==="lush"?r.grow=o>.62?"petals":o>.42?"halo":o>.26?"wings":o>.12?"quiet":"wild":e==="mix"?r.grow=o>.7?"skirt":o>.52?"antenna":o>.36?"horns":o>.2?"petals":"wild":r.grow=o>.62?"quiet":o>.4?"horns":"wild";const s=a();e==="lush"?r.coat=s>.48?"cream":s>.24?"moss":"wild":e==="mix"?r.coat=s>.5?"sodium":s>.26?"cream":"wild":r.coat=s>.55?"night":"wild"}return t.typeId==="kaleido"&&(r.segments=e==="lush"?4+Math.floor(a()*4):5+Math.floor(a()*8),r.zoom=.7+a()*.8),t.typeId==="channels"&&(r.tint=i.leak,r.tintAmt=e==="lush"?.12+a()*.28:a()*.45),t.typeId==="key"&&(r.lo=.1+a()*.22,r.hi=.5+a()*.35,r.amount=.45+a()*.4,r.invert=a()>.72),t.typeId==="dropout"&&(r.amount=.28+a()*.4,r.rate=.18+a()*.4,r.tear=e==="outsider"?.3+a()*.5:a()*.28),{...t,params:r}}function Cs(t,e="mix"){const i=Me(t>>>0);return Na(Ua("critters",t,.85),e,yt[t%yt.length],i)}function Es(t,e="mix"){const i=Me(t>>>0);return Na(Ua("dancer",t,.85),e,yt[t%yt.length],i)}function Ps(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="dancer")?e:{...e,effects:[...e.effects,Es(t.seed+i*4243,"mix")]})}}function Wa(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(a=>a.typeId==="critters")?e:{...e,effects:[...e.effects,Cs(t.seed+i*7919,"mix")]})}}function Bs(){return La.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Ms(t,e,i,a=!1){return{...t,blendMode:"normal",opacity:1,effects:[],feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function qa(t,e,i,a,r,n=!1){const o=Math.max(t.randomAmount,e==="all"?.75:0),s=t.seed>>>0,c=Me(s^2654435769),f=t.layers.map((w,x)=>e==="selected"&&w.id!==i?w:e==="param"?w.id!==i?w:{...w,effects:w.effects.map(S=>S.id===a&&r?Ii(S,s+x*13,Math.max(o,.55),r):S)}:e==="all"?Ms(w,s+x*7919,o,n):Ss(w,s+x*7919,o,!0,a)),l=Hn,p=Me(s+0*7919>>>0),y=Bs(),d=y[Math.floor(p()*y.length)]??La[0],u={"herald tour":{generator:"heraldry",a:At(s),b:bt(s)},"dense paper":{generator:"wallpaper",a:At(s+3),b:bt(s+3,"#1c4db8")},"giant charges":{generator:"giants",a:At(s+5),b:bt(s+5)},"heart rain":{generator:"shower",a:At(s+7),b:bt(s+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:At(s+9),b:bt(s+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[d.name],h=t.sources.map((w,x)=>{if(e!=="all"||w.kind!=="generator")return w;const S=Me(s+x*131),C=yt[Math.floor(S()*yt.length)],R=n?!1:S()>.35&&Ue(w.generator),B=u?u.generator:R?w.generator:l[Math.floor(S()*l.length)],H=ss(s+x*41),M=Ue(B)?Ci(s+x*73):void 0,D=Ue(B)?ti(H,s+x*17):C.inkA,Q=Ue(B)?Pi(H):C.inkB;return{...w,generator:M?Ei(M):B,collageKit:Ue(B)?H:w.collageKit,collageMove:M??w.collageMove,colorA:u?u.a:D,colorB:u?Pi(H):Q}}),v=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:f,sources:h,globalFeedback:v}}function Is(t){const e=t.seed+7919>>>0,i=Me(e^2246822507),a=["shapes","toy pop","votives","moths","charms"],r=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let o={...t,seed:e,sources:t.sources.map((s,c)=>{if(!Ue(s.generator))return s;const f=ht[Math.floor(i()*ht.length)],l=Ci(e+c*59);return{...s,generator:Ei(l),collageKit:f,collageMove:l,colorA:ti(f,e+c*13),colorB:bt(e+c*29)}}),layers:t.layers.map(s=>({...s,effects:s.effects.map(c=>c.typeId==="critters"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),kit:a[Math.floor(i()*a.length)]}}:c.typeId==="dancer"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),grow:r[Math.floor(i()*r.length)],coat:n[Math.floor(i()*n.length)]}}:c)}))};return o=Wa(o),o}function As(){return{x:0,y:0,scale:1,rotation:0}}function Rs(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Da(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function zs(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Fs(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const Os={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Hs={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC"},Ls={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function $a(t="plasma",e,i){const a=Ue(t)?Si(e):void 0,r=Os[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let n;a&&(n=i==="mix"||i==="tour"?Ci(Date.now()+Math.floor(Math.random()*997)):i?Ta(i):Sa(t));const o=n?Ei(n):t??"plasma",s=n?Un[n]:Ls[t??""]??(t?t.toUpperCase():"SIGNAL"),c=a?`${s} · ${Hs[a]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":s;return{id:Pe("src"),name:c,kind:"generator",generator:o,colorA:a?ti(a,n==="rush"?1:n==="tunnel"?5:n==="bounce"?7:11):r.a,colorB:a?Pi(a):r.b,collageKit:a,collageMove:n,width:1280,height:720,duration:0}}function ja(t){const e=Ve(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const a of e.params)i[a.id]=a.default;return{id:Pe("fx"),typeId:t,enabled:!0,params:i}}function Va(t,e,i=[]){return{id:Pe("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:As(),effects:i.map(ja),mask:Rs(),feedback:Da()}}function Ga(){const t=$a("wallpaper","sailor","rush"),e=Va("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:zs(),globalFeedback:{...Da(),amount:0,opacity:.4,scale:1},exportSettings:Fs(),presets:[]},a=qa({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[Mi(i,"factory · tour"),Mi(a,"factory · scramble")],i}function Ka(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,exporting:!1}}class Us{state;listeners=new Set;constructor(e=Ga()){this.state={project:e,ui:Ka(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...Ka(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const E=new Us;function Ai(t,e,i,a,r){if(e<=0)return 0;const n=t*Math.max(.01,a);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let o=n;if(i==="reverse"&&(o=-n),i==="pingpong"){const s=e*2,c=(o%s+s)%s;return c<=e?c:s-c}return r?(o%e+e)%e:te(o,0,e)}function Ns(t,e,i,a,r){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===a&&(i!=="effect"||n.effectId===r)).sort((n,o)=>n.time-o.time)}function Ws(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const a=t[t.length-1];if(e>=a.time)return a.value;for(let r=0;r<t.length-1;r++){const n=t[r],o=t[r+1];if(e>=n.time&&e<=o.time){const s=o.time-n.time||1;let c=(e-n.time)/s;return(o.easing==="smooth"||n.easing==="smooth")&&(c=On(c)),_i(n.value,o.value,c)}}return i}function lt(t,e,i,a,r,n,o){const s=Ns(t.keyframes,e,i,a,o);return Ws(s,n,r)}function qs(t,e,i){const a={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(r=>({...r,params:{...r.params}}))};a.opacity=lt(t,e.id,"layer","opacity",e.opacity,i),a.transform.x=lt(t,e.id,"layer","x",e.transform.x,i),a.transform.y=lt(t,e.id,"layer","y",e.transform.y,i),a.transform.scale=lt(t,e.id,"layer","scale",e.transform.scale,i),a.transform.rotation=lt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const r of Object.keys(a.feedback))a.feedback[r]=lt(t,e.id,"feedback",r,e.feedback[r],i);for(const r of a.effects)for(const[n,o]of Object.entries(r.params))typeof o=="number"&&(r.params[n]=lt(t,e.id,"effect",n,o,i,r.id));return a}function Ds(t,e){const i=t.layers[0]?.id??"";return lt(t,i,"playback","speed",t.playback.speed,e)}const $s=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function js(t){return(t.type??"").startsWith("audio/")||$s.test(t.name)}function Ri(t){return t.sources.find(e=>e.kind==="audio")}let Rt=null,it=null,zt=null;const zi=new WeakSet;let Ft=0,Ot=0,ii=0;function Fi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Rt||(Rt=new t,it=Rt.createAnalyser(),it.fftSize=256,it.smoothingTimeConstant=.72,it.connect(Rt.destination),zt=new Uint8Array(it.frequencyBinCount)),Rt):null}async function ai(){const t=Fi();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function Vs(t){const e=Fi();if(!(!e||!it||zi.has(t)))try{e.createMediaElementSource(t).connect(it),zi.add(t)}catch{zi.add(t)}}async function Gs(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",Vs(i),ai();let a=null;const r=Fi();if(r)try{const s=await t.arrayBuffer(),c=r.decodeAudioData(s.slice(0)).catch(()=>null);a=await Promise.race([c,new Promise(f=>setTimeout(()=>f(null),4e3))])}catch{a=null}const n=await Promise.race([new Promise(s=>{if(Number.isFinite(i.duration)&&i.duration>0){s(i.duration);return}i.addEventListener("loadedmetadata",()=>s(Number.isFinite(i.duration)?i.duration:a?.duration??0),{once:!0}),i.addEventListener("error",()=>s(a?.duration??0),{once:!0})}),new Promise(s=>setTimeout(()=>s(a?.duration??0),2500))]),o=a?Ks(a.getChannelData(0),a.sampleRate):[];return{id:Pe("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:n||a?.duration||0,audio:i,pcm:a,beats:o,bpm:Xs(o),objectUrl:e}}function Ks(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),a=i*2,r=Math.floor((t.length-a)/i);if(r<16)return[];const n=new Float32Array(r);for(let l=0;l<r;l++){const p=l*i;let y=0;for(let d=0;d<a;d+=2){const b=t[p+d];y+=b*b}n[l]=Math.sqrt(y/(a*.5))}const o=Math.max(10,Math.floor(.32/(i/e))),s=.3,c=[];let f=-99;for(let l=o;l<r;l++){let p=0,y=0;for(let h=l-o;h<l;h++)p+=n[h],n[h]>y&&(y=n[h]);p/=o;const d=n[l]-n[l-1];if(!(n[l]>p*1.48&&n[l]>y*.82&&d>.006))continue;const u=l*i/e;u-f<s||(c.push(u),f=u)}return c}function Xs(t){if(t.length<4)return 0;const e=[];for(let a=1;a<t.length;a++){const r=t[a]-t[a-1];r>=.28&&r<=.8&&e.push(r)}if(e.length<3)return 0;e.sort((a,r)=>a-r);const i=e[Math.floor(e.length/2)];return Oi(Math.round(60/i),70,170)}function Zs(t,e,i=.2){if(!t.length)return 0;let a=0,r=t.length-1;for(;a<r;){const s=a+r+1>>1;t[s]<=e?a=s:r=s-1}const n=t[a];if(n>e)return 0;const o=e-n;return o>i*3.2?0:Math.exp(-o/i)}function Oi(t,e,i){return Math.max(e,Math.min(i,t))}function Qs(t,e,i,a){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const r=(a%i+i)%i,n=Math.floor(r*e),o=Math.max(64,Math.floor(e*.046)),s=Math.max(0,Math.min(t.length-1,n)),c=Math.max(s+1,Math.min(t.length,n+o));let f=0;for(let h=s;h<c;h++)f+=t[h]*t[h];const l=Math.min(1,Math.sqrt(f/(c-s))*3.4),p=Math.max(o,Math.floor(e*.09)),y=Math.min(t.length,n+p);let d=0,b=0;for(let h=s;h<y;h+=8)d+=t[h]*t[h],b++;const u=Math.min(1,Math.sqrt(d/Math.max(1,b))*4.2);return{energy:l,bass:u}}function Ys(){if(!it||!zt)return null;it.getByteFrequencyData(zt);let t=0,e=0;const i=zt.length,a=Math.max(4,Math.floor(i*.12));for(let r=0;r<i;r++){const n=zt[r]/255;t+=n,r<a&&(e+=n)}return{energy:t/i,bass:e/a}}function Js(t,e){let i=0,a=0,r=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const o=t.pcm.duration,s=(e%o+o)%o,c=Qs(t.pcm.getChannelData(0),t.pcm.sampleRate,o,s);i=c.energy,a=c.bass;const f=t.beats??[];r=f.length?Zs(f,s):Oi((i-.16)*.55,0,.45)}else if(t?.kind==="audio"){const o=Ys();o&&(i=o.energy,a=o.bass,r=Oi((i-.16)*.45,0,.4))}ii+=(r-ii)*.22;const n=t?.kind==="audio"?.22:.14;return Ft+=(i-Ft)*n,Ot+=(a-Ot)*Math.min(n,.16),!t&&Ft<.002&&(Ft=0),!t&&Ot<.002&&(Ot=0),t||(ii=0),{energy:Ft,bass:Ot,beat:ii}}function Hi(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const ec=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,tc=`#version 300 es
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
`,ic=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,ac=`#version 300 es
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
`,rc=`#version 300 es
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
`,nc=`#version 300 es
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
`,oc=`#version 300 es
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
`,sc=`#version 300 es
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
${za}
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
`,cc=`#version 300 es
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
`,lc=`#version 300 es
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
`,fc=`#version 300 es
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
`,dc=`#version 300 es
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
`,uc=`#version 300 es
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
`,hc=`#version 300 es
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
`,mc=`#version 300 es
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
`,pc=`#version 300 es
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
`,vc=`#version 300 es
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
`,gc=`#version 300 es
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
`,bc=`#version 300 es
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
`,yc=`#version 300 es
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
`,wc=`#version 300 es
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
`,xc=`#version 300 es
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
`,kc=`#version 300 es
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
`,_c=`#version 300 es
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
`,Tc=`#version 300 es
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
`,Xa=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Sc=`#version 300 es
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
`;class mt extends Error{}function Cc(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new mt("WebGL2 is required for Phosphene.");return e}function Za(t,e,i){const a=t.createShader(e);if(!a)throw new mt("Unable to create shader");if(t.shaderSource(a,i),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a)??"shader compile failed";throw t.deleteShader(a),new mt(r)}return a}class me{gl;prog;uniforms=new Map;constructor(e,i,a=ec){this.gl=e;const r=Za(e,e.VERTEX_SHADER,a),n=Za(e,e.FRAGMENT_SHADER,i),o=e.createProgram();if(!o)throw new mt("Unable to create program");if(e.attachShader(o,r),e.attachShader(o,n),e.linkProgram(o),e.deleteShader(r),e.deleteShader(n),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o)??"link failed";throw e.deleteProgram(o),new mt(s)}this.prog=o}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const a=this.loc(e);a&&this.gl.uniform1i(a,i)}f(e,i){const a=this.loc(e);a&&this.gl.uniform1f(a,i)}v2(e,i,a){const r=this.loc(e);r&&this.gl.uniform2f(r,i,a)}v3(e,i,a,r){const n=this.loc(e);n&&this.gl.uniform3f(n,i,a,r)}v4(e,i,a,r,n){const o=this.loc(e);o&&this.gl.uniform4f(o,i,a,r,n)}dispose(){this.gl.deleteProgram(this.prog)}}function ri(t){const e=t.createTexture();if(!e)throw new mt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Qa(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Ec(t,e,i,a){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,a,0,t.RGBA,t.UNSIGNED_BYTE,null)}class wt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new mt("Unable to create framebuffer");this.fbo=i,this.tex=ri(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Ec(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Ie(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function Ge(t){t.drawArrays(t.TRIANGLES,0,3)}const Pc={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Bc={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Ya={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function Mc(t){return`${tc}
${t.extraUniforms??""}
${t.applyGlsl}
${ic}`}function Ic(t,e){return new me(t,Mc(e))}function Ht(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(a=>a+a).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const xt=8;function Ja(t,e,i){return new ImageData(t,e,i)}function Ac(t,e,i){const a=t.find(n=>n.id===e);if(!a?.options)return Number(i)||0;const r=a.options.findIndex(n=>n.value===i);return r<0?0:r}class Rc{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new as;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=Cc(e),this.generatorProg=new me(this.gl,oc)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=xt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new wt(e),this.pong??=new wt(e),this.composite??=new wt(e),this.post??=new wt(e);this.ring.length<xt;)this.ring.push(new wt(e));this.copy??=new me(e,Xa),this.blit??=new me(e,rc),this.compositeProg??=new me(e,ac),this.feedbackProg??=new me(e,nc),this.textureProg??=new me(e,Sc),this.black||(this.black=ri(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const a=i[0];if(a.feedback.amount>.001||a.effects.some(n=>n.enabled))return!0;const r=e.sources.find(n=>n.id===a.sourceId);return!!(r&&r.kind!=="generator"&&r.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new me(this.gl,cc),this.stageProg):e===13?(this.sketchProg??=new me(this.gl,lc),this.sketchProg):e===14?(this.feltProg??=new me(this.gl,fc),this.feltProg):e===15?(this.foilProg??=new me(this.gl,dc),this.foilProg):e===16?(this.plushProg??=new me(this.gl,uc),this.plushProg):e===17?(this.yarnProg??=new me(this.gl,hc),this.yarnProg):e===18?(this.sequinProg??=new me(this.gl,mc),this.sequinProg):e===19?(this.quiltProg??=new me(this.gl,pc),this.quiltProg):e===20?(this.corkProg??=new me(this.gl,vc),this.corkProg):e===21?(this.ginghamProg??=new me(this.gl,gc),this.ginghamProg):e===22?(this.sprinkleProg??=new me(this.gl,bc),this.sprinkleProg):e===23?(this.velvetProg??=new me(this.gl,yc),this.velvetProg):e===24?(this.confettiProg??=new me(this.gl,wc),this.confettiProg):e===25?(this.discoProg??=new me(this.gl,xc),this.discoProg):e===26?(this.terrazzoProg??=new me(this.gl,kc),this.terrazzoProg):e===27?(this.comicProg??=new me(this.gl,_c),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new me(this.gl,Tc),this.fieldsProg):(this.generatorFull??=new me(this.gl,sc),this.generatorFull)}compileType(e,i=!1){const a=e!=="dancer"?e:i?"dancer:mini":"dancer",r=this.effectProg.get(a);if(r)return r;const n=e==="dancer"?vs(i):Ve(e);if(!n)return null;try{const o=Ic(this.gl,n);return this.effectProg.set(a,o),o}catch(o){return this.lastError=`${a}: ${o instanceof Error?o.message:String(o)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const a=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(r=>!!r);for(const r of a)r.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new wt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=ri(this.gl),this.sourceTex.set(e.id,i));const a=e.frozenFrame||e.bitmap||e.video;return a&&Qa(this.gl,i,a),i}blitTo(e,i){const a=this.gl,r=this.copy;r&&(e.bind(),r.use(),Ie(a,0,i),r.i("uTex",0),Ge(a))}drawHeraldry(e,i,a,r,n,o,s){const c=this.gl;this.copy??=new me(c,Xa),this.heraldryTex??=ri(c);const f=this.heraldry.paint({width:o,height:s,time:a,duration:n,seed:r,generator:i.generator,kit:i.collageKit,move:i.collageMove,paper:i.colorA??"#ffffff",ink:i.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm});if(Qa(c,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}c.bindFramebuffer(c.FRAMEBUFFER,null),c.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Ie(c,0,this.heraldryTex),this.copy.i("uTex",0),Ge(c)}drawGenerator(e,i,a,r=77,n=8){if(Ue(i.generator)){this.drawHeraldry(e,i,a,r,n,e.w,e.h);return}const o=this.gl,s=Ya[i.generator??"plasma"]??0,c=this.genProg(s);e.bind(),c.use(),c.i("uMode",s),c.f("uTime",a);const f=i.colorA?Ht(i.colorA):[.07,.04,.1],l=i.colorB?Ht(i.colorB):[.92,.78,.55];c.v3("uColorA",f[0],f[1],f[2]),c.v3("uColorB",l[0],l[1],l[2]),c.f("uScale",6),c.f("uSeed",r),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ge(o)}drawTexture(e,i,a){const r=this.gl,n=this.textureProg;n&&(e.bind(),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),n.use(),Ie(r,0,i),n.i("uTex",0),n.v2("uTranslate",a.transform.x,a.transform.y),n.f("uScale",a.transform.scale),n.f("uRotation",a.transform.rotation),n.v2("uFit",1,1),Ge(r))}applyEffect(e,i,a,r,n,o,s,c,f){const l=Ve(a.typeId),p=this.progFor(a);if(!l||!p){this.blitTo(e,i);return}const y=this.gl;e.bind(),p.use(),Ie(y,0,i),Ie(y,1,c),Ie(y,2,f),p.i("uTex",0),p.i("uFeedback",1),p.i("uHistory",2),p.i("uMask",3),p.v2("uResolution",e.w,e.h),p.v2("uTexel",1/e.w,1/e.h),p.f("uTime",n),p.f("uFrame",o),p.f("uQuality",s==="draft"?0:s==="preview"?1:2),p.f("u_audio",this.audioEnergy),p.f("u_bass",this.audioBass),p.v2("u_translate",r.transform.x,r.transform.y),p.f("u_scale",r.transform.scale),p.f("u_rotation",r.transform.rotation);const d=r.mask;p.i("u_maskType",Bc[d.type]??0),p.i("u_maskInvert",d.invert?1:0),p.f("u_maskSoftness",d.softness),p.v4("u_maskRect",d.rect.x,d.rect.y,d.rect.w,d.rect.h),p.v2("u_maskCenter",d.center.x,d.center.y),p.f("u_maskRadius",d.radius),p.f("u_maskGradientAngle",d.gradientAngle),p.f("u_maskNoiseScale",d.noiseScale);let b=1;for(const u of l.params){const h=a.params[u.id]??u.default,v=`u_${u.id}`;if(u.kind==="color"&&typeof h=="string"){const[w,x,S]=Ht(h);p.v3(v,w,x,S)}else u.kind==="bool"?p.f(v,h?1:0):u.kind==="enum"?p.f(v,Ac(l.params,u.id,h)):p.f(v,Number(h));u.id==="mix"&&(b=Number(h))}p.f("u_mix",b),Ge(y)}drawLite(e,i){const a=this.gl,r=e.layers.find(p=>p.enabled)??e.layers[0],n=r?e.sources.find(p=>p.id===r.sourceId):null,o=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Ue(o.generator)){this.drawHeraldry(null,o,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height);const s=Ya[o.generator??"plasma"]??0,c=this.genProg(s);c.use(),c.i("uMode",s),c.f("uTime",i);const f=o.colorA?Ht(o.colorA):[.07,.04,.1],l=o.colorB?Ht(o.colorB):[.92,.78,.55];c.v3("uColorA",f[0],f[1],f[2]),c.v3("uColorB",l[0],l[1],l[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ge(a)}render(e,i,a){const r=this.gl,n=a?.quality??e.quality,o=Js(Ri(e),i);if(this.audioEnergy=o.energy,this.audioBass=o.bass,this.audioBeat=o.beat,this.audioBpm=Ri(e)?.bpm??0,n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const s=this.ping,c=this.pong,f=this.composite,l=this.post,p=this.blit,y=this.compositeProg,d=this.feedbackProg,b=n==="draft"?.5:1,u=Math.max(16,Math.floor((a?.width??this.canvas.width)*b)),h=Math.max(16,Math.floor((a?.height??this.canvas.height)*b));this.ensureSize(u,h),f.bind(),r.clearColor(.02,.02,.03,1),r.clear(r.COLOR_BUFFER_BIT);const v=e.globalFeedback,w=Math.max(0,Math.min(xt-1,Math.round(v.delay))),x=(this.ringIndex-1-w+xt*8)%xt,S=this.ring[x].tex,C=Math.floor(i*e.fps);for(const R of e.layers){if(!R.enabled)continue;const B=qs(e,R,i),H=e.sources.find(_=>_.id===B.sourceId)??null;if(!H||H.kind==="generator"||H.kind==="audio"){const _=H&&H.kind!=="audio"?H:{generator:"plasma"};this.drawGenerator(s,_,i,e.seed,e.duration)}else{const _=this.uploadSource(H);this.drawTexture(s,_,B)}let M=s,D=c;const Q=this.histFor(B.id);for(const _ of B.effects){if(!_.enabled)continue;this.applyEffect(D,M.tex,_,B,i,C,n,S,Q.tex);const F=M;M=D,D=F}if(B.feedback.amount>.001){D.bind(),d.use(),Ie(r,0,M.tex),Ie(r,1,Q.tex),d.i("uTex",0),d.i("uFeedback",1),d.f("uAmount",B.feedback.amount),d.f("uOpacity",B.feedback.opacity),d.f("uScale",B.feedback.scale),d.f("uRotation",B.feedback.rotation),d.f("uDistortion",B.feedback.distortion),d.f("uTime",i),Ge(r);const _=M;M=D,D=_}this.blitTo(l,f.tex),f.bind(),y.use(),Ie(r,0,l.tex),Ie(r,1,M.tex),y.i("uBase",0),y.i("uLayer",1),y.f("uOpacity",B.opacity),y.i("uBlend",Pc[B.blendMode]??0),y.v2("uResolution",u,h),Ge(r),this.blitTo(Q,M.tex)}v.amount>.001&&(l.bind(),d.use(),Ie(r,0,f.tex),Ie(r,1,S),d.i("uTex",0),d.i("uFeedback",1),d.f("uAmount",v.amount),d.f("uOpacity",v.opacity),d.f("uScale",v.scale),d.f("uRotation",v.rotation),d.f("uDistortion",v.distortion),d.f("uTime",i),Ge(r),this.blitTo(f,l.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%xt,r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.canvas.width,this.canvas.height),p.use(),Ie(r,0,f.tex),p.i("uTex",0),p.f("uVignette",a?.vignette??.25),Ge(r)}capture(e,i,a,r,n="image/png",o=.92){const s=this.paintFrame(e,i,a,r);return new Promise((c,f)=>{s.toBlob(l=>{l?c(l):f(new Error("Export failed"))},n,o)})}paintFrame(e,i,a,r,n){const o=n??document.createElement("canvas");o.width!==a&&(o.width=a),o.height!==r&&(o.height=r);const s=o.getContext("2d",{alpha:!1});if(!s)throw new Error("No 2d context");this.render(e,i,{width:a,height:r,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===a&&this.height===r)s.putImageData(Ja(c,a,r),0,0);else{const f=document.createElement("canvas");f.width=this.width,f.height=this.height,f.getContext("2d")?.putImageData(Ja(c,this.width,this.height),0,0),s.drawImage(f,0,0,a,r)}return o}readPixels(e,i){const a=this.gl,r=new Uint8Array(e*i*4);a.bindFramebuffer(a.FRAMEBUFFER,this.composite.fbo),a.readPixels(0,0,e,i,a.RGBA,a.UNSIGNED_BYTE,r),a.bindFramebuffer(a.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(r.length)),o=e*4;for(let s=0;s<i;s++)n.set(r.subarray((i-1-s)*o,(i-s)*o),s*o);return n}}const zc=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Fc=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Oc(t){return t.type.startsWith("video/")||Fc.test(t.name)}function Hc(t){return t.type.startsWith("image/")||zc.test(t.name)}async function Lc(t){if(Oc(t))return Nc(t);if(Hc(t))return tr(t);if(js(t))return Gs(t);throw new Error(`Unsupported media: ${t.name}`)}async function er(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return tr(i)}async function tr(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Pe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Uc(e);return{id:Pe("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Uc(t){return new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error("Image failed to load")),a.src=t})}function Nc(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((a,r)=>{const n=()=>{a({id:Pe("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>r(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function Wc(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Pe("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function ir(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function qc(t,e,i){if(t.kind!=="video"||!t.video)return;const a=t.video,r=a.duration;if(!Number.isFinite(r)||r<=0)return;const n=(e%r+r)%r,o=!!i?.playing&&!i?.freeze,s=(i?.mode??"forward")==="forward",c=i?.speed??1,f=o&&s&&c>.92&&c<1.08,l=Math.abs(a.currentTime-n);if(!o){if(a.paused||a.pause(),l>1/30)try{a.currentTime=n}catch{}return}if(f){if(a.playbackRate!==1&&(a.playbackRate=1),a.paused&&a.play().catch(()=>{}),l>.35)try{a.currentTime=n}catch{}return}a.paused||a.pause();const p=Math.max(.25,Math.min(4,Math.abs(c)||1));if(a.playbackRate!==p&&(a.playbackRate=p),l>1/30)try{a.currentTime=n}catch{}}const Dc=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function oi(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Li={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var ar;function jc(){return ar||(ar=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(a,r,n){function o(f,l){if(!r[f]){if(!a[f]){var p=typeof oi=="function"&&oi;if(!l&&p)return p(f,!0);if(s)return s(f,!0);var y=new Error("Cannot find module '"+f+"'");throw y.code="MODULE_NOT_FOUND",y}var d=r[f]={exports:{}};a[f][0].call(d.exports,function(b){var u=a[f][1][b];return o(u||b)},d,d.exports,i,a,r,n)}return r[f].exports}for(var s=typeof oi=="function"&&oi,c=0;c<n.length;c++)o(n[c]);return o})({1:[function(i,a,r){var n=i("./utils"),o=i("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(c){for(var f,l,p,y,d,b,u,h=[],v=0,w=c.length,x=w,S=n.getTypeOf(c)!=="string";v<c.length;)x=w-v,p=S?(f=c[v++],l=v<w?c[v++]:0,v<w?c[v++]:0):(f=c.charCodeAt(v++),l=v<w?c.charCodeAt(v++):0,v<w?c.charCodeAt(v++):0),y=f>>2,d=(3&f)<<4|l>>4,b=1<x?(15&l)<<2|p>>6:64,u=2<x?63&p:64,h.push(s.charAt(y)+s.charAt(d)+s.charAt(b)+s.charAt(u));return h.join("")},r.decode=function(c){var f,l,p,y,d,b,u=0,h=0,v="data:";if(c.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var w,x=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===s.charAt(64)&&x--,c.charAt(c.length-2)===s.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=o.uint8array?new Uint8Array(0|x):new Array(0|x);u<c.length;)f=s.indexOf(c.charAt(u++))<<2|(y=s.indexOf(c.charAt(u++)))>>4,l=(15&y)<<4|(d=s.indexOf(c.charAt(u++)))>>2,p=(3&d)<<6|(b=s.indexOf(c.charAt(u++))),w[h++]=f,d!==64&&(w[h++]=l),b!==64&&(w[h++]=p);return w}},{"./support":30,"./utils":32}],2:[function(i,a,r){var n=i("./external"),o=i("./stream/DataWorker"),s=i("./stream/Crc32Probe"),c=i("./stream/DataLengthProbe");function f(l,p,y,d,b){this.compressedSize=l,this.uncompressedSize=p,this.crc32=y,this.compression=d,this.compressedContent=b}f.prototype={getContentWorker:function(){var l=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),p=this;return l.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),l},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(l,p,y){return l.pipe(new s).pipe(new c("uncompressedSize")).pipe(p.compressWorker(y)).pipe(new c("compressedSize")).withStreamInfo("compression",p)},a.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,a,r){var n=i("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,a,r){var n=i("./utils"),o=(function(){for(var s,c=[],f=0;f<256;f++){s=f;for(var l=0;l<8;l++)s=1&s?3988292384^s>>>1:s>>>1;c[f]=s}return c})();a.exports=function(s,c){return s!==void 0&&s.length?n.getTypeOf(s)!=="string"?(function(f,l,p,y){var d=o,b=y+p;f^=-1;for(var u=y;u<b;u++)f=f>>>8^d[255&(f^l[u])];return-1^f})(0|c,s,s.length,0):(function(f,l,p,y){var d=o,b=y+p;f^=-1;for(var u=y;u<b;u++)f=f>>>8^d[255&(f^l.charCodeAt(u))];return-1^f})(0|c,s,s.length,0):0}},{"./utils":32}],5:[function(i,a,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(i,a,r){var n=null;n=typeof Promise<"u"?Promise:i("lie"),a.exports={Promise:n}},{lie:37}],7:[function(i,a,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=i("pako"),s=i("./utils"),c=i("./stream/GenericWorker"),f=n?"uint8array":"array";function l(p,y){c.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=y,this.meta={}}r.magic="\b\0",s.inherits(l,c),l.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(f,p.data),!1)},l.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(y){p.push({data:y,meta:p.meta})}},r.compressWorker=function(p){return new l("Deflate",p)},r.uncompressWorker=function(){return new l("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,a,r){function n(d,b){var u,h="";for(u=0;u<b;u++)h+=String.fromCharCode(255&d),d>>>=8;return h}function o(d,b,u,h,v,w){var x,S,C=d.file,R=d.compression,B=w!==f.utf8encode,H=s.transformTo("string",w(C.name)),M=s.transformTo("string",f.utf8encode(C.name)),D=C.comment,Q=s.transformTo("string",w(D)),_=s.transformTo("string",f.utf8encode(D)),F=M.length!==C.name.length,g=_.length!==D.length,L="",ee="",W="",se=C.dir,V=C.date,oe={crc32:0,compressedSize:0,uncompressedSize:0};b&&!u||(oe.crc32=d.crc32,oe.compressedSize=d.compressedSize,oe.uncompressedSize=d.uncompressedSize);var z=0;b&&(z|=8),B||!F&&!g||(z|=2048);var A=0,ne=0;se&&(A|=16),v==="UNIX"?(ne=798,A|=(function(Z,ye){var Ee=Z;return Z||(Ee=ye?16893:33204),(65535&Ee)<<16})(C.unixPermissions,se)):(ne=20,A|=(function(Z){return 63&(Z||0)})(C.dosPermissions)),x=V.getUTCHours(),x<<=6,x|=V.getUTCMinutes(),x<<=5,x|=V.getUTCSeconds()/2,S=V.getUTCFullYear()-1980,S<<=4,S|=V.getUTCMonth()+1,S<<=5,S|=V.getUTCDate(),F&&(ee=n(1,1)+n(l(H),4)+M,L+="up"+n(ee.length,2)+ee),g&&(W=n(1,1)+n(l(Q),4)+_,L+="uc"+n(W.length,2)+W);var Y="";return Y+=`
\0`,Y+=n(z,2),Y+=R.magic,Y+=n(x,2),Y+=n(S,2),Y+=n(oe.crc32,4),Y+=n(oe.compressedSize,4),Y+=n(oe.uncompressedSize,4),Y+=n(H.length,2),Y+=n(L.length,2),{fileRecord:p.LOCAL_FILE_HEADER+Y+H+L,dirRecord:p.CENTRAL_FILE_HEADER+n(ne,2)+Y+n(Q.length,2)+"\0\0\0\0"+n(A,4)+n(h,4)+H+L+Q}}var s=i("../utils"),c=i("../stream/GenericWorker"),f=i("../utf8"),l=i("../crc32"),p=i("../signature");function y(d,b,u,h){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=u,this.encodeFileName=h,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(y,c),y.prototype.push=function(d){var b=d.meta.percent||0,u=this.entriesCount,h=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:u?(b+100*(u-h-1))/u:100}}))},y.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var b=this.streamFiles&&!d.file.dir;if(b){var u=o(d,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(d){this.accumulate=!1;var b=this.streamFiles&&!d.file.dir,u=o(d,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),b)this.push({data:(function(h){return p.DATA_DESCRIPTOR+n(h.crc32,4)+n(h.compressedSize,4)+n(h.uncompressedSize,4)})(d),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var d=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var u=this.bytesWritten-d,h=(function(v,w,x,S,C){var R=s.transformTo("string",C(S));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(v,2)+n(v,2)+n(w,4)+n(x,4)+n(R.length,2)+R})(this.dirRecords.length,u,d,this.zipComment,this.encodeFileName);this.push({data:h,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(d){this._sources.push(d);var b=this;return d.on("data",function(u){b.processChunk(u)}),d.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),d.on("error",function(u){b.error(u)}),this},y.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(d){var b=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var u=0;u<b.length;u++)try{b[u].error(d)}catch{}return!0},y.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,b=0;b<d.length;b++)d[b].lock()},a.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,a,r){var n=i("../compressions"),o=i("./ZipFileWorker");r.generateWorker=function(s,c,f){var l=new o(c.streamFiles,f,c.platform,c.encodeFileName),p=0;try{s.forEach(function(y,d){p++;var b=(function(w,x){var S=w||x,C=n[S];if(!C)throw new Error(S+" is not a valid compression method !");return C})(d.options.compression,c.compression),u=d.options.compressionOptions||c.compressionOptions||{},h=d.dir,v=d.date;d._compressWorker(b,u).withStreamInfo("file",{name:y,dir:h,date:v,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(l)}),l.entriesCount=p}catch(y){l.error(y)}return l}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,a,r){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var s in this)typeof this[s]!="function"&&(o[s]=this[s]);return o}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(o,s){return new n().loadAsync(o,s)},n.external=i("./external"),a.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,a,r){var n=i("./utils"),o=i("./external"),s=i("./utf8"),c=i("./zipEntries"),f=i("./stream/Crc32Probe"),l=i("./nodejsUtils");function p(y){return new o.Promise(function(d,b){var u=y.decompressed.getContentWorker().pipe(new f);u.on("error",function(h){b(h)}).on("end",function(){u.streamInfo.crc32!==y.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}a.exports=function(y,d){var b=this;return d=n.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),l.isNode&&l.isStream(y)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",y,!0,d.optimizedBinaryString,d.base64).then(function(u){var h=new c(d);return h.load(u),h}).then(function(u){var h=[o.Promise.resolve(u)],v=u.files;if(d.checkCRC32)for(var w=0;w<v.length;w++)h.push(p(v[w]));return o.Promise.all(h)}).then(function(u){for(var h=u.shift(),v=h.files,w=0;w<v.length;w++){var x=v[w],S=x.fileNameStr,C=n.resolve(x.fileNameStr);b.file(C,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:d.createFolders}),x.dir||(b.file(C).unsafeOriginalName=S)}return h.zipComment.length&&(b.comment=h.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,a,r){var n=i("../utils"),o=i("../stream/GenericWorker");function s(c,f){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(f)}n.inherits(s,o),s.prototype._bindStream=function(c){var f=this;(this._stream=c).pause(),c.on("data",function(l){f.push({data:l,meta:{percent:0}})}).on("error",function(l){f.isPaused?this.generatedError=l:f.error(l)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},s.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,a,r){var n=i("readable-stream").Readable;function o(s,c,f){n.call(this,c),this._helper=s;var l=this;s.on("data",function(p,y){l.push(p)||l._helper.pause(),f&&f(y)}).on("error",function(p){l.emit("error",p)}).on("end",function(){l.push(null)})}i("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},a.exports=o},{"../utils":32,"readable-stream":16}],14:[function(i,a,r){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,a,r){function n(C,R,B){var H,M=s.getTypeOf(R),D=s.extend(B||{},l);D.date=D.date||new Date,D.compression!==null&&(D.compression=D.compression.toUpperCase()),typeof D.unixPermissions=="string"&&(D.unixPermissions=parseInt(D.unixPermissions,8)),D.unixPermissions&&16384&D.unixPermissions&&(D.dir=!0),D.dosPermissions&&16&D.dosPermissions&&(D.dir=!0),D.dir&&(C=v(C)),D.createFolders&&(H=h(C))&&w.call(this,H,!0);var Q=M==="string"&&D.binary===!1&&D.base64===!1;B&&B.binary!==void 0||(D.binary=!Q),(R instanceof p&&R.uncompressedSize===0||D.dir||!R||R.length===0)&&(D.base64=!1,D.binary=!0,R="",D.compression="STORE",M="string");var _=null;_=R instanceof p||R instanceof c?R:b.isNode&&b.isStream(R)?new u(C,R):s.prepareContent(C,R,D.binary,D.optimizedBinaryString,D.base64);var F=new y(C,_,D);this.files[C]=F}var o=i("./utf8"),s=i("./utils"),c=i("./stream/GenericWorker"),f=i("./stream/StreamHelper"),l=i("./defaults"),p=i("./compressedObject"),y=i("./zipObject"),d=i("./generate"),b=i("./nodejsUtils"),u=i("./nodejs/NodejsStreamInputAdapter"),h=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var R=C.lastIndexOf("/");return 0<R?C.substring(0,R):""},v=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},w=function(C,R){return R=R!==void 0?R:l.createFolders,C=v(C),this.files[C]||n.call(this,C,null,{dir:!0,createFolders:R}),this.files[C]};function x(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var R,B,H;for(R in this.files)H=this.files[R],(B=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&C(B,H)},filter:function(C){var R=[];return this.forEach(function(B,H){C(B,H)&&R.push(H)}),R},file:function(C,R,B){if(arguments.length!==1)return C=this.root+C,n.call(this,C,R,B),this;if(x(C)){var H=C;return this.filter(function(D,Q){return!Q.dir&&H.test(D)})}var M=this.files[this.root+C];return M&&!M.dir?M:null},folder:function(C){if(!C)return this;if(x(C))return this.filter(function(M,D){return D.dir&&C.test(M)});var R=this.root+C,B=w.call(this,R),H=this.clone();return H.root=B.name,H},remove:function(C){C=this.root+C;var R=this.files[C];if(R||(C.slice(-1)!=="/"&&(C+="/"),R=this.files[C]),R&&!R.dir)delete this.files[C];else for(var B=this.filter(function(M,D){return D.name.slice(0,C.length)===C}),H=0;H<B.length;H++)delete this.files[B[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var R,B={};try{if((B=s.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=B.type.toLowerCase(),B.compression=B.compression.toUpperCase(),B.type==="binarystring"&&(B.type="string"),!B.type)throw new Error("No output type specified.");s.checkSupport(B.type),B.platform!=="darwin"&&B.platform!=="freebsd"&&B.platform!=="linux"&&B.platform!=="sunos"||(B.platform="UNIX"),B.platform==="win32"&&(B.platform="DOS");var H=B.comment||this.comment||"";R=d.generateWorker(this,B,H)}catch(M){(R=new c("error")).error(M)}return new f(R,B.type||"string",B.mimeType)},generateAsync:function(C,R){return this.generateInternalStream(C).accumulate(R)},generateNodeStream:function(C,R){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(R)}};a.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,a,r){a.exports=i("stream")},{stream:void 0}],17:[function(i,a,r){var n=i("./DataReader");function o(s){n.call(this,s);for(var c=0;c<this.data.length;c++)s[c]=255&s[c]}i("../utils").inherits(o,n),o.prototype.byteAt=function(s){return this.data[this.zero+s]},o.prototype.lastIndexOfSignature=function(s){for(var c=s.charCodeAt(0),f=s.charCodeAt(1),l=s.charCodeAt(2),p=s.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===c&&this.data[y+1]===f&&this.data[y+2]===l&&this.data[y+3]===p)return y-this.zero;return-1},o.prototype.readAndCheckSignature=function(s){var c=s.charCodeAt(0),f=s.charCodeAt(1),l=s.charCodeAt(2),p=s.charCodeAt(3),y=this.readData(4);return c===y[0]&&f===y[1]&&l===y[2]&&p===y[3]},o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},a.exports=o},{"../utils":32,"./DataReader":18}],18:[function(i,a,r){var n=i("../utils");function o(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var c,f=0;for(this.checkOffset(s),c=this.index+s-1;c>=this.index;c--)f=(f<<8)+this.byteAt(c);return this.index+=s,f},readString:function(s){return n.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},a.exports=o},{"../utils":32}],19:[function(i,a,r){var n=i("./Uint8ArrayReader");function o(s){n.call(this,s)}i("../utils").inherits(o,n),o.prototype.readData=function(s){this.checkOffset(s);var c=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},a.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,a,r){var n=i("./DataReader");function o(s){n.call(this,s)}i("../utils").inherits(o,n),o.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},o.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},o.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},o.prototype.readData=function(s){this.checkOffset(s);var c=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},a.exports=o},{"../utils":32,"./DataReader":18}],21:[function(i,a,r){var n=i("./ArrayReader");function o(s){n.call(this,s)}i("../utils").inherits(o,n),o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},a.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(i,a,r){var n=i("../utils"),o=i("../support"),s=i("./ArrayReader"),c=i("./StringReader"),f=i("./NodeBufferReader"),l=i("./Uint8ArrayReader");a.exports=function(p){var y=n.getTypeOf(p);return n.checkSupport(y),y!=="string"||o.uint8array?y==="nodebuffer"?new f(p):o.uint8array?new l(n.transformTo("uint8array",p)):new s(n.transformTo("array",p)):new c(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,a,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,a,r){var n=i("./GenericWorker"),o=i("../utils");function s(c){n.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(s,n),s.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},a.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(i,a,r){var n=i("./GenericWorker"),o=i("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(s,n),s.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},a.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,a,r){var n=i("../utils"),o=i("./GenericWorker");function s(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(s,o),s.prototype.processChunk=function(c){if(c){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+c.data.length}o.prototype.processChunk.call(this,c)},a.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(i,a,r){var n=i("../utils"),o=i("./GenericWorker");function s(c){o.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(l){f.dataIsReady=!0,f.data=l,f.max=l&&l.length||0,f.type=n.getTypeOf(l),f.isPaused||f._tickAndRepeat()},function(l){f.error(l)})}n.inherits(s,o),s.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,f);break;case"uint8array":c=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":c=this.data.slice(this.index,f)}return this.index=f,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(i,a,r){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,s){return this._listeners[o].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,s){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,s)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var s=this;return o.on("data",function(c){s.processChunk(c)}),o.on("end",function(){s.end()}),o.on("error",function(c){s.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,s){return this.extraStreamInfo[o]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},a.exports=n},{}],29:[function(i,a,r){var n=i("../utils"),o=i("./ConvertWorker"),s=i("./GenericWorker"),c=i("../base64"),f=i("../support"),l=i("../external"),p=null;if(f.nodestream)try{p=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(b,u){return new l.Promise(function(h,v){var w=[],x=b._internalType,S=b._outputType,C=b._mimeType;b.on("data",function(R,B){w.push(R),u&&u(B)}).on("error",function(R){w=[],v(R)}).on("end",function(){try{var R=(function(B,H,M){switch(B){case"blob":return n.newBlob(n.transformTo("arraybuffer",H),M);case"base64":return c.encode(H);default:return n.transformTo(B,H)}})(S,(function(B,H){var M,D=0,Q=null,_=0;for(M=0;M<H.length;M++)_+=H[M].length;switch(B){case"string":return H.join("");case"array":return Array.prototype.concat.apply([],H);case"uint8array":for(Q=new Uint8Array(_),M=0;M<H.length;M++)Q.set(H[M],D),D+=H[M].length;return Q;case"nodebuffer":return Buffer.concat(H);default:throw new Error("concat : unsupported type '"+B+"'")}})(x,w),C);h(R)}catch(B){v(B)}w=[]}).resume()})}function d(b,u,h){var v=u;switch(u){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=u,this._mimeType=h,n.checkSupport(v),this._worker=b.pipe(new o(v)),b.lock()}catch(w){this._worker=new s("error"),this._worker.error(w)}}d.prototype={accumulate:function(b){return y(this,b)},on:function(b,u){var h=this;return b==="data"?this._worker.on(b,function(v){u.call(h,v.data,v.meta)}):this._worker.on(b,function(){n.delay(u,arguments,h)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},b)}},a.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,a,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!i("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(i,a,r){for(var n=i("./utils"),o=i("./support"),s=i("./nodejsUtils"),c=i("./stream/GenericWorker"),f=new Array(256),l=0;l<256;l++)f[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;f[254]=f[254]=1;function p(){c.call(this,"utf-8 decode"),this.leftOver=null}function y(){c.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?s.newBufferFrom(d,"utf-8"):(function(b){var u,h,v,w,x,S=b.length,C=0;for(w=0;w<S;w++)(64512&(h=b.charCodeAt(w)))==55296&&w+1<S&&(64512&(v=b.charCodeAt(w+1)))==56320&&(h=65536+(h-55296<<10)+(v-56320),w++),C+=h<128?1:h<2048?2:h<65536?3:4;for(u=o.uint8array?new Uint8Array(C):new Array(C),w=x=0;x<C;w++)(64512&(h=b.charCodeAt(w)))==55296&&w+1<S&&(64512&(v=b.charCodeAt(w+1)))==56320&&(h=65536+(h-55296<<10)+(v-56320),w++),h<128?u[x++]=h:(h<2048?u[x++]=192|h>>>6:(h<65536?u[x++]=224|h>>>12:(u[x++]=240|h>>>18,u[x++]=128|h>>>12&63),u[x++]=128|h>>>6&63),u[x++]=128|63&h);return u})(d)},r.utf8decode=function(d){return o.nodebuffer?n.transformTo("nodebuffer",d).toString("utf-8"):(function(b){var u,h,v,w,x=b.length,S=new Array(2*x);for(u=h=0;u<x;)if((v=b[u++])<128)S[h++]=v;else if(4<(w=f[v]))S[h++]=65533,u+=w-1;else{for(v&=w===2?31:w===3?15:7;1<w&&u<x;)v=v<<6|63&b[u++],w--;1<w?S[h++]=65533:v<65536?S[h++]=v:(v-=65536,S[h++]=55296|v>>10&1023,S[h++]=56320|1023&v)}return S.length!==h&&(S.subarray?S=S.subarray(0,h):S.length=h),n.applyFromCharCode(S)})(d=n.transformTo(o.uint8array?"uint8array":"array",d))},n.inherits(p,c),p.prototype.processChunk=function(d){var b=n.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var u=b;(b=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),b.set(u,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var h=(function(w,x){var S;for((x=x||w.length)>w.length&&(x=w.length),S=x-1;0<=S&&(192&w[S])==128;)S--;return S<0||S===0?x:S+f[w[S]]>x?S:x})(b),v=b;h!==b.length&&(o.uint8array?(v=b.subarray(0,h),this.leftOver=b.subarray(h,b.length)):(v=b.slice(0,h),this.leftOver=b.slice(h,b.length))),this.push({data:r.utf8decode(v),meta:d.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,n.inherits(y,c),y.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,a,r){var n=i("./support"),o=i("./base64"),s=i("./nodejsUtils"),c=i("./external");function f(u){return u}function l(u,h){for(var v=0;v<u.length;++v)h[v]=255&u.charCodeAt(v);return h}i("setimmediate"),r.newBlob=function(u,h){r.checkSupport("blob");try{return new Blob([u],{type:h})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(u),v.getBlob(h)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(u,h,v){var w=[],x=0,S=u.length;if(S<=v)return String.fromCharCode.apply(null,u);for(;x<S;)h==="array"||h==="nodebuffer"?w.push(String.fromCharCode.apply(null,u.slice(x,Math.min(x+v,S)))):w.push(String.fromCharCode.apply(null,u.subarray(x,Math.min(x+v,S)))),x+=v;return w.join("")},stringifyByChar:function(u){for(var h="",v=0;v<u.length;v++)h+=String.fromCharCode(u[v]);return h},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function y(u){var h=65536,v=r.getTypeOf(u),w=!0;if(v==="uint8array"?w=p.applyCanBeUsed.uint8array:v==="nodebuffer"&&(w=p.applyCanBeUsed.nodebuffer),w)for(;1<h;)try{return p.stringifyByChunk(u,v,h)}catch{h=Math.floor(h/2)}return p.stringifyByChar(u)}function d(u,h){for(var v=0;v<u.length;v++)h[v]=u[v];return h}r.applyFromCharCode=y;var b={};b.string={string:f,array:function(u){return l(u,new Array(u.length))},arraybuffer:function(u){return b.string.uint8array(u).buffer},uint8array:function(u){return l(u,new Uint8Array(u.length))},nodebuffer:function(u){return l(u,s.allocBuffer(u.length))}},b.array={string:y,array:f,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return s.newBufferFrom(u)}},b.arraybuffer={string:function(u){return y(new Uint8Array(u))},array:function(u){return d(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:f,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return s.newBufferFrom(new Uint8Array(u))}},b.uint8array={string:y,array:function(u){return d(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:f,nodebuffer:function(u){return s.newBufferFrom(u)}},b.nodebuffer={string:y,array:function(u){return d(u,new Array(u.length))},arraybuffer:function(u){return b.nodebuffer.uint8array(u).buffer},uint8array:function(u){return d(u,new Uint8Array(u.length))},nodebuffer:f},r.transformTo=function(u,h){if(h=h||"",!u)return h;r.checkSupport(u);var v=r.getTypeOf(h);return b[v][u](h)},r.resolve=function(u){for(var h=u.split("/"),v=[],w=0;w<h.length;w++){var x=h[w];x==="."||x===""&&w!==0&&w!==h.length-1||(x===".."?v.pop():v.push(x))}return v.join("/")},r.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":n.nodebuffer&&s.isBuffer(u)?"nodebuffer":n.uint8array&&u instanceof Uint8Array?"uint8array":n.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(u){if(!n[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(u){var h,v,w="";for(v=0;v<(u||"").length;v++)w+="\\x"+((h=u.charCodeAt(v))<16?"0":"")+h.toString(16).toUpperCase();return w},r.delay=function(u,h,v){setImmediate(function(){u.apply(v||null,h||[])})},r.inherits=function(u,h){function v(){}v.prototype=h.prototype,u.prototype=new v},r.extend=function(){var u,h,v={};for(u=0;u<arguments.length;u++)for(h in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],h)&&v[h]===void 0&&(v[h]=arguments[u][h]);return v},r.prepareContent=function(u,h,v,w,x){return c.Promise.resolve(h).then(function(S){return n.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,R){var B=new FileReader;B.onload=function(H){C(H.target.result)},B.onerror=function(H){R(H.target.error)},B.readAsArrayBuffer(S)}):S}).then(function(S){var C=r.getTypeOf(S);return C?(C==="arraybuffer"?S=r.transformTo("uint8array",S):C==="string"&&(x?S=o.decode(S):v&&w!==!0&&(S=(function(R){return l(R,n.uint8array?new Uint8Array(R.length):new Array(R.length))})(S))),S):c.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,a,r){var n=i("./reader/readerFor"),o=i("./utils"),s=i("./signature"),c=i("./zipEntry"),f=i("./support");function l(p){this.files=[],this.loadOptions=p}l.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(y)+", expected "+o.pretty(p)+")")}},isSignature:function(p,y){var d=this.reader.index;this.reader.setIndex(p);var b=this.reader.readString(4)===y;return this.reader.setIndex(d),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),y=f.uint8array?"uint8array":"array",d=o.transformTo(y,p);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,y,d,b=this.zip64EndOfCentralSize-44;0<b;)p=this.reader.readInt(2),y=this.reader.readInt(4),d=this.reader.readData(y),this.zip64ExtensibleData[p]={id:p,length:y,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,y;for(p=0;p<this.files.length;p++)y=this.files[p],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(p=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var y=p;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var b=y-d;if(0<b)this.isSignature(y,s.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(p){this.reader=n(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=l},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,a,r){var n=i("./reader/readerFor"),o=i("./utils"),s=i("./compressedObject"),c=i("./crc32"),f=i("./utf8"),l=i("./compressions"),p=i("./support");function y(d,b){this.options=d,this.loadOptions=b}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var b,u;if(d.skip(22),this.fileNameLength=d.readInt(2),u=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=(function(h){for(var v in l)if(Object.prototype.hasOwnProperty.call(l,v)&&l[v].magic===h)return l[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,b,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var b=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(b),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var b,u,h,v=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<v;)b=d.readInt(2),u=d.readInt(2),h=d.readData(u),this.extraFields[b]={id:b,length:u,value:h};d.setIndex(v)},handleUTF8:function(){var d=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var u=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var h=this.findExtraFieldUnicodeComment();if(h!==null)this.fileCommentStr=h;else{var v=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var b=n(d.value);return b.readInt(1)!==1||c(this.fileName)!==b.readInt(4)?null:f.utf8decode(b.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var b=n(d.value);return b.readInt(1)!==1||c(this.fileComment)!==b.readInt(4)?null:f.utf8decode(b.readData(d.length-5))}return null}},a.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,a,r){function n(b,u,h){this.name=b,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=u,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}}var o=i("./stream/StreamHelper"),s=i("./stream/DataWorker"),c=i("./utf8"),f=i("./compressedObject"),l=i("./stream/GenericWorker");n.prototype={internalStream:function(b){var u=null,h="string";try{if(!b)throw new Error("No output type specified.");var v=(h=b.toLowerCase())==="string"||h==="text";h!=="binarystring"&&h!=="text"||(h="string"),u=this._decompressWorker();var w=!this._dataBinary;w&&!v&&(u=u.pipe(new c.Utf8EncodeWorker)),!w&&v&&(u=u.pipe(new c.Utf8DecodeWorker))}catch(x){(u=new l("error")).error(x)}return new o(u,h,"")},async:function(b,u){return this.internalStream(b).accumulate(u)},nodeStream:function(b,u){return this.internalStream(b||"nodebuffer").toNodejsStream(u)},_compressWorker:function(b,u){if(this._data instanceof f&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new c.Utf8EncodeWorker)),f.createWorkerFrom(h,b,u)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof l?this._data:new s(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<p.length;d++)n.prototype[p[d]]=y;a.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,a,r){(function(n){var o,s,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var f=0,l=new c(b),p=n.document.createTextNode("");l.observe(p,{characterData:!0}),o=function(){p.data=f=++f%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var u=n.document.createElement("script");u.onreadystatechange=function(){b(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},n.document.documentElement.appendChild(u)}:function(){setTimeout(b,0)};else{var y=new n.MessageChannel;y.port1.onmessage=b,o=function(){y.port2.postMessage(0)}}var d=[];function b(){var u,h;s=!0;for(var v=d.length;v;){for(h=d,d=[],u=-1;++u<v;)h[u]();v=d.length}s=!1}a.exports=function(u){d.push(u)!==1||s||o()}}).call(this,typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,a,r){var n=i("immediate");function o(){}var s={},c=["REJECTED"],f=["FULFILLED"],l=["PENDING"];function p(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,v!==o&&u(this,v)}function y(v,w,x){this.promise=v,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function d(v,w,x){n(function(){var S;try{S=w(x)}catch(C){return s.reject(v,C)}S===v?s.reject(v,new TypeError("Cannot resolve promise with itself")):s.resolve(v,S)})}function b(v){var w=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof w=="function")return function(){w.apply(v,arguments)}}function u(v,w){var x=!1;function S(B){x||(x=!0,s.reject(v,B))}function C(B){x||(x=!0,s.resolve(v,B))}var R=h(function(){w(C,S)});R.status==="error"&&S(R.value)}function h(v,w){var x={};try{x.value=v(w),x.status="success"}catch(S){x.status="error",x.value=S}return x}(a.exports=p).prototype.finally=function(v){if(typeof v!="function")return this;var w=this.constructor;return this.then(function(x){return w.resolve(v()).then(function(){return x})},function(x){return w.resolve(v()).then(function(){throw x})})},p.prototype.catch=function(v){return this.then(null,v)},p.prototype.then=function(v,w){if(typeof v!="function"&&this.state===f||typeof w!="function"&&this.state===c)return this;var x=new this.constructor(o);return this.state!==l?d(x,this.state===f?v:w,this.outcome):this.queue.push(new y(x,v,w)),x},y.prototype.callFulfilled=function(v){s.resolve(this.promise,v)},y.prototype.otherCallFulfilled=function(v){d(this.promise,this.onFulfilled,v)},y.prototype.callRejected=function(v){s.reject(this.promise,v)},y.prototype.otherCallRejected=function(v){d(this.promise,this.onRejected,v)},s.resolve=function(v,w){var x=h(b,w);if(x.status==="error")return s.reject(v,x.value);var S=x.value;if(S)u(v,S);else{v.state=f,v.outcome=w;for(var C=-1,R=v.queue.length;++C<R;)v.queue[C].callFulfilled(w)}return v},s.reject=function(v,w){v.state=c,v.outcome=w;for(var x=-1,S=v.queue.length;++x<S;)v.queue[x].callRejected(w);return v},p.resolve=function(v){return v instanceof this?v:s.resolve(new this(o),v)},p.reject=function(v){var w=new this(o);return s.reject(w,v)},p.all=function(v){var w=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=v.length,S=!1;if(!x)return this.resolve([]);for(var C=new Array(x),R=0,B=-1,H=new this(o);++B<x;)M(v[B],B);return H;function M(D,Q){w.resolve(D).then(function(_){C[Q]=_,++R!==x||S||(S=!0,s.resolve(H,C))},function(_){S||(S=!0,s.reject(H,_))})}},p.race=function(v){var w=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=v.length,S=!1;if(!x)return this.resolve([]);for(var C=-1,R=new this(o);++C<x;)B=v[C],w.resolve(B).then(function(H){S||(S=!0,s.resolve(R,H))},function(H){S||(S=!0,s.reject(R,H))});var B;return R}},{immediate:36}],38:[function(i,a,r){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),a.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,a,r){var n=i("./zlib/deflate"),o=i("./utils/common"),s=i("./utils/strings"),c=i("./zlib/messages"),f=i("./zlib/zstream"),l=Object.prototype.toString,p=0,y=-1,d=0,b=8;function u(v){if(!(this instanceof u))return new u(v);this.options=o.assign({level:y,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},v||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var x=n.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(x!==p)throw new Error(c[x]);if(w.header&&n.deflateSetHeader(this.strm,w.header),w.dictionary){var S;if(S=typeof w.dictionary=="string"?s.string2buf(w.dictionary):l.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(x=n.deflateSetDictionary(this.strm,S))!==p)throw new Error(c[x]);this._dict_set=!0}}function h(v,w){var x=new u(w);if(x.push(v,!0),x.err)throw x.msg||c[x.err];return x.result}u.prototype.push=function(v,w){var x,S,C=this.strm,R=this.options.chunkSize;if(this.ended)return!1;S=w===~~w?w:w===!0?4:0,typeof v=="string"?C.input=s.string2buf(v):l.call(v)==="[object ArrayBuffer]"?C.input=new Uint8Array(v):C.input=v,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(R),C.next_out=0,C.avail_out=R),(x=n.deflate(C,S))!==1&&x!==p)return this.onEnd(x),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&x!==1);return S===4?(x=n.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===p):S!==2||(this.onEnd(p),!(C.avail_out=0))},u.prototype.onData=function(v){this.chunks.push(v)},u.prototype.onEnd=function(v){v===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},r.Deflate=u,r.deflate=h,r.deflateRaw=function(v,w){return(w=w||{}).raw=!0,h(v,w)},r.gzip=function(v,w){return(w=w||{}).gzip=!0,h(v,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,a,r){var n=i("./zlib/inflate"),o=i("./utils/common"),s=i("./utils/strings"),c=i("./zlib/constants"),f=i("./zlib/messages"),l=i("./zlib/zstream"),p=i("./zlib/gzheader"),y=Object.prototype.toString;function d(u){if(!(this instanceof d))return new d(u);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},u||{});var h=this.options;h.raw&&0<=h.windowBits&&h.windowBits<16&&(h.windowBits=-h.windowBits,h.windowBits===0&&(h.windowBits=-15)),!(0<=h.windowBits&&h.windowBits<16)||u&&u.windowBits||(h.windowBits+=32),15<h.windowBits&&h.windowBits<48&&(15&h.windowBits)==0&&(h.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var v=n.inflateInit2(this.strm,h.windowBits);if(v!==c.Z_OK)throw new Error(f[v]);this.header=new p,n.inflateGetHeader(this.strm,this.header)}function b(u,h){var v=new d(h);if(v.push(u,!0),v.err)throw v.msg||f[v.err];return v.result}d.prototype.push=function(u,h){var v,w,x,S,C,R,B=this.strm,H=this.options.chunkSize,M=this.options.dictionary,D=!1;if(this.ended)return!1;w=h===~~h?h:h===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof u=="string"?B.input=s.binstring2buf(u):y.call(u)==="[object ArrayBuffer]"?B.input=new Uint8Array(u):B.input=u,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new o.Buf8(H),B.next_out=0,B.avail_out=H),(v=n.inflate(B,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&M&&(R=typeof M=="string"?s.string2buf(M):y.call(M)==="[object ArrayBuffer]"?new Uint8Array(M):M,v=n.inflateSetDictionary(this.strm,R)),v===c.Z_BUF_ERROR&&D===!0&&(v=c.Z_OK,D=!1),v!==c.Z_STREAM_END&&v!==c.Z_OK)return this.onEnd(v),!(this.ended=!0);B.next_out&&(B.avail_out!==0&&v!==c.Z_STREAM_END&&(B.avail_in!==0||w!==c.Z_FINISH&&w!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=s.utf8border(B.output,B.next_out),S=B.next_out-x,C=s.buf2string(B.output,x),B.next_out=S,B.avail_out=H-S,S&&o.arraySet(B.output,B.output,x,S,0),this.onData(C)):this.onData(o.shrinkBuf(B.output,B.next_out)))),B.avail_in===0&&B.avail_out===0&&(D=!0)}while((0<B.avail_in||B.avail_out===0)&&v!==c.Z_STREAM_END);return v===c.Z_STREAM_END&&(w=c.Z_FINISH),w===c.Z_FINISH?(v=n.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===c.Z_OK):w!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(B.avail_out=0))},d.prototype.onData=function(u){this.chunks.push(u)},d.prototype.onEnd=function(u){u===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},r.Inflate=d,r.inflate=b,r.inflateRaw=function(u,h){return(h=h||{}).raw=!0,b(u,h)},r.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,a,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(c){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var l=f.shift();if(l){if(typeof l!="object")throw new TypeError(l+"must be non-object");for(var p in l)l.hasOwnProperty(p)&&(c[p]=l[p])}}return c},r.shrinkBuf=function(c,f){return c.length===f?c:c.subarray?c.subarray(0,f):(c.length=f,c)};var o={arraySet:function(c,f,l,p,y){if(f.subarray&&c.subarray)c.set(f.subarray(l,l+p),y);else for(var d=0;d<p;d++)c[y+d]=f[l+d]},flattenChunks:function(c){var f,l,p,y,d,b;for(f=p=0,l=c.length;f<l;f++)p+=c[f].length;for(b=new Uint8Array(p),f=y=0,l=c.length;f<l;f++)d=c[f],b.set(d,y),y+=d.length;return b}},s={arraySet:function(c,f,l,p,y){for(var d=0;d<p;d++)c[y+d]=f[l+d]},flattenChunks:function(c){return[].concat.apply([],c)}};r.setTyped=function(c){c?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(i,a,r){var n=i("./common"),o=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var c=new n.Buf8(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function l(p,y){if(y<65537&&(p.subarray&&s||!p.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(p,y));for(var d="",b=0;b<y;b++)d+=String.fromCharCode(p[b]);return d}c[254]=c[254]=1,r.string2buf=function(p){var y,d,b,u,h,v=p.length,w=0;for(u=0;u<v;u++)(64512&(d=p.charCodeAt(u)))==55296&&u+1<v&&(64512&(b=p.charCodeAt(u+1)))==56320&&(d=65536+(d-55296<<10)+(b-56320),u++),w+=d<128?1:d<2048?2:d<65536?3:4;for(y=new n.Buf8(w),u=h=0;h<w;u++)(64512&(d=p.charCodeAt(u)))==55296&&u+1<v&&(64512&(b=p.charCodeAt(u+1)))==56320&&(d=65536+(d-55296<<10)+(b-56320),u++),d<128?y[h++]=d:(d<2048?y[h++]=192|d>>>6:(d<65536?y[h++]=224|d>>>12:(y[h++]=240|d>>>18,y[h++]=128|d>>>12&63),y[h++]=128|d>>>6&63),y[h++]=128|63&d);return y},r.buf2binstring=function(p){return l(p,p.length)},r.binstring2buf=function(p){for(var y=new n.Buf8(p.length),d=0,b=y.length;d<b;d++)y[d]=p.charCodeAt(d);return y},r.buf2string=function(p,y){var d,b,u,h,v=y||p.length,w=new Array(2*v);for(d=b=0;d<v;)if((u=p[d++])<128)w[b++]=u;else if(4<(h=c[u]))w[b++]=65533,d+=h-1;else{for(u&=h===2?31:h===3?15:7;1<h&&d<v;)u=u<<6|63&p[d++],h--;1<h?w[b++]=65533:u<65536?w[b++]=u:(u-=65536,w[b++]=55296|u>>10&1023,w[b++]=56320|1023&u)}return l(w,b)},r.utf8border=function(p,y){var d;for((y=y||p.length)>p.length&&(y=p.length),d=y-1;0<=d&&(192&p[d])==128;)d--;return d<0||d===0?y:d+c[p[d]]>y?d:y}},{"./common":41}],43:[function(i,a,r){a.exports=function(n,o,s,c){for(var f=65535&n|0,l=n>>>16&65535|0,p=0;s!==0;){for(s-=p=2e3<s?2e3:s;l=l+(f=f+o[c++]|0)|0,--p;);f%=65521,l%=65521}return f|l<<16|0}},{}],44:[function(i,a,r){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,a,r){var n=(function(){for(var o,s=[],c=0;c<256;c++){o=c;for(var f=0;f<8;f++)o=1&o?3988292384^o>>>1:o>>>1;s[c]=o}return s})();a.exports=function(o,s,c,f){var l=n,p=f+c;o^=-1;for(var y=f;y<p;y++)o=o>>>8^l[255&(o^s[y])];return-1^o}},{}],46:[function(i,a,r){var n,o=i("../utils/common"),s=i("./trees"),c=i("./adler32"),f=i("./crc32"),l=i("./messages"),p=0,y=4,d=0,b=-2,u=-1,h=4,v=2,w=8,x=9,S=286,C=30,R=19,B=2*S+1,H=15,M=3,D=258,Q=D+M+1,_=42,F=113,g=1,L=2,ee=3,W=4;function se(m,U){return m.msg=l[U],U}function V(m){return(m<<1)-(4<m?9:0)}function oe(m){for(var U=m.length;0<=--U;)m[U]=0}function z(m){var U=m.state,O=U.pending;O>m.avail_out&&(O=m.avail_out),O!==0&&(o.arraySet(m.output,U.pending_buf,U.pending_out,O,m.next_out),m.next_out+=O,U.pending_out+=O,m.total_out+=O,m.avail_out-=O,U.pending-=O,U.pending===0&&(U.pending_out=0))}function A(m,U){s._tr_flush_block(m,0<=m.block_start?m.block_start:-1,m.strstart-m.block_start,U),m.block_start=m.strstart,z(m.strm)}function ne(m,U){m.pending_buf[m.pending++]=U}function Y(m,U){m.pending_buf[m.pending++]=U>>>8&255,m.pending_buf[m.pending++]=255&U}function Z(m,U){var O,T,k=m.max_chain_length,P=m.strstart,q=m.prev_length,$=m.nice_match,I=m.strstart>m.w_size-Q?m.strstart-(m.w_size-Q):0,G=m.window,J=m.w_mask,X=m.prev,re=m.strstart+D,pe=G[P+q-1],de=G[P+q];m.prev_length>=m.good_match&&(k>>=2),$>m.lookahead&&($=m.lookahead);do if(G[(O=U)+q]===de&&G[O+q-1]===pe&&G[O]===G[P]&&G[++O]===G[P+1]){P+=2,O++;do;while(G[++P]===G[++O]&&G[++P]===G[++O]&&G[++P]===G[++O]&&G[++P]===G[++O]&&G[++P]===G[++O]&&G[++P]===G[++O]&&G[++P]===G[++O]&&G[++P]===G[++O]&&P<re);if(T=D-(re-P),P=re-D,q<T){if(m.match_start=U,$<=(q=T))break;pe=G[P+q-1],de=G[P+q]}}while((U=X[U&J])>I&&--k!=0);return q<=m.lookahead?q:m.lookahead}function ye(m){var U,O,T,k,P,q,$,I,G,J,X=m.w_size;do{if(k=m.window_size-m.lookahead-m.strstart,m.strstart>=X+(X-Q)){for(o.arraySet(m.window,m.window,X,X,0),m.match_start-=X,m.strstart-=X,m.block_start-=X,U=O=m.hash_size;T=m.head[--U],m.head[U]=X<=T?T-X:0,--O;);for(U=O=X;T=m.prev[--U],m.prev[U]=X<=T?T-X:0,--O;);k+=X}if(m.strm.avail_in===0)break;if(q=m.strm,$=m.window,I=m.strstart+m.lookahead,G=k,J=void 0,J=q.avail_in,G<J&&(J=G),O=J===0?0:(q.avail_in-=J,o.arraySet($,q.input,q.next_in,J,I),q.state.wrap===1?q.adler=c(q.adler,$,J,I):q.state.wrap===2&&(q.adler=f(q.adler,$,J,I)),q.next_in+=J,q.total_in+=J,J),m.lookahead+=O,m.lookahead+m.insert>=M)for(P=m.strstart-m.insert,m.ins_h=m.window[P],m.ins_h=(m.ins_h<<m.hash_shift^m.window[P+1])&m.hash_mask;m.insert&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[P+M-1])&m.hash_mask,m.prev[P&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=P,P++,m.insert--,!(m.lookahead+m.insert<M)););}while(m.lookahead<Q&&m.strm.avail_in!==0)}function Ee(m,U){for(var O,T;;){if(m.lookahead<Q){if(ye(m),m.lookahead<Q&&U===p)return g;if(m.lookahead===0)break}if(O=0,m.lookahead>=M&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+M-1])&m.hash_mask,O=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),O!==0&&m.strstart-O<=m.w_size-Q&&(m.match_length=Z(m,O)),m.match_length>=M)if(T=s._tr_tally(m,m.strstart-m.match_start,m.match_length-M),m.lookahead-=m.match_length,m.match_length<=m.max_lazy_match&&m.lookahead>=M){for(m.match_length--;m.strstart++,m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+M-1])&m.hash_mask,O=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart,--m.match_length!=0;);m.strstart++}else m.strstart+=m.match_length,m.match_length=0,m.ins_h=m.window[m.strstart],m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+1])&m.hash_mask;else T=s._tr_tally(m,0,m.window[m.strstart]),m.lookahead--,m.strstart++;if(T&&(A(m,!1),m.strm.avail_out===0))return g}return m.insert=m.strstart<M-1?m.strstart:M-1,U===y?(A(m,!0),m.strm.avail_out===0?ee:W):m.last_lit&&(A(m,!1),m.strm.avail_out===0)?g:L}function fe(m,U){for(var O,T,k;;){if(m.lookahead<Q){if(ye(m),m.lookahead<Q&&U===p)return g;if(m.lookahead===0)break}if(O=0,m.lookahead>=M&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+M-1])&m.hash_mask,O=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),m.prev_length=m.match_length,m.prev_match=m.match_start,m.match_length=M-1,O!==0&&m.prev_length<m.max_lazy_match&&m.strstart-O<=m.w_size-Q&&(m.match_length=Z(m,O),m.match_length<=5&&(m.strategy===1||m.match_length===M&&4096<m.strstart-m.match_start)&&(m.match_length=M-1)),m.prev_length>=M&&m.match_length<=m.prev_length){for(k=m.strstart+m.lookahead-M,T=s._tr_tally(m,m.strstart-1-m.prev_match,m.prev_length-M),m.lookahead-=m.prev_length-1,m.prev_length-=2;++m.strstart<=k&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+M-1])&m.hash_mask,O=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),--m.prev_length!=0;);if(m.match_available=0,m.match_length=M-1,m.strstart++,T&&(A(m,!1),m.strm.avail_out===0))return g}else if(m.match_available){if((T=s._tr_tally(m,0,m.window[m.strstart-1]))&&A(m,!1),m.strstart++,m.lookahead--,m.strm.avail_out===0)return g}else m.match_available=1,m.strstart++,m.lookahead--}return m.match_available&&(T=s._tr_tally(m,0,m.window[m.strstart-1]),m.match_available=0),m.insert=m.strstart<M-1?m.strstart:M-1,U===y?(A(m,!0),m.strm.avail_out===0?ee:W):m.last_lit&&(A(m,!1),m.strm.avail_out===0)?g:L}function ue(m,U,O,T,k){this.good_length=m,this.max_lazy=U,this.nice_length=O,this.max_chain=T,this.func=k}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*B),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*R+1)),oe(this.dyn_ltree),oe(this.dyn_dtree),oe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(H+1),this.heap=new o.Buf16(2*S+1),oe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),oe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function we(m){var U;return m&&m.state?(m.total_in=m.total_out=0,m.data_type=v,(U=m.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?_:F,m.adler=U.wrap===2?0:1,U.last_flush=p,s._tr_init(U),d):se(m,b)}function et(m){var U=we(m);return U===d&&(function(O){O.window_size=2*O.w_size,oe(O.head),O.max_lazy_match=n[O.level].max_lazy,O.good_match=n[O.level].good_length,O.nice_match=n[O.level].nice_length,O.max_chain_length=n[O.level].max_chain,O.strstart=0,O.block_start=0,O.lookahead=0,O.insert=0,O.match_length=O.prev_length=M-1,O.match_available=0,O.ins_h=0})(m.state),U}function $e(m,U,O,T,k,P){if(!m)return b;var q=1;if(U===u&&(U=6),T<0?(q=0,T=-T):15<T&&(q=2,T-=16),k<1||x<k||O!==w||T<8||15<T||U<0||9<U||P<0||h<P)return se(m,b);T===8&&(T=9);var $=new Te;return(m.state=$).strm=m,$.wrap=q,$.gzhead=null,$.w_bits=T,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=k+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+M-1)/M),$.window=new o.Buf8(2*$.w_size),$.head=new o.Buf16($.hash_size),$.prev=new o.Buf16($.w_size),$.lit_bufsize=1<<k+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new o.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=U,$.strategy=P,$.method=O,et(m)}n=[new ue(0,0,0,0,function(m,U){var O=65535;for(O>m.pending_buf_size-5&&(O=m.pending_buf_size-5);;){if(m.lookahead<=1){if(ye(m),m.lookahead===0&&U===p)return g;if(m.lookahead===0)break}m.strstart+=m.lookahead,m.lookahead=0;var T=m.block_start+O;if((m.strstart===0||m.strstart>=T)&&(m.lookahead=m.strstart-T,m.strstart=T,A(m,!1),m.strm.avail_out===0)||m.strstart-m.block_start>=m.w_size-Q&&(A(m,!1),m.strm.avail_out===0))return g}return m.insert=0,U===y?(A(m,!0),m.strm.avail_out===0?ee:W):(m.strstart>m.block_start&&(A(m,!1),m.strm.avail_out),g)}),new ue(4,4,8,4,Ee),new ue(4,5,16,8,Ee),new ue(4,6,32,32,Ee),new ue(4,4,16,16,fe),new ue(8,16,32,32,fe),new ue(8,16,128,128,fe),new ue(8,32,128,256,fe),new ue(32,128,258,1024,fe),new ue(32,258,258,4096,fe)],r.deflateInit=function(m,U){return $e(m,U,w,15,8,0)},r.deflateInit2=$e,r.deflateReset=et,r.deflateResetKeep=we,r.deflateSetHeader=function(m,U){return m&&m.state?m.state.wrap!==2?b:(m.state.gzhead=U,d):b},r.deflate=function(m,U){var O,T,k,P;if(!m||!m.state||5<U||U<0)return m?se(m,b):b;if(T=m.state,!m.output||!m.input&&m.avail_in!==0||T.status===666&&U!==y)return se(m,m.avail_out===0?-5:b);if(T.strm=m,O=T.last_flush,T.last_flush=U,T.status===_)if(T.wrap===2)m.adler=0,ne(T,31),ne(T,139),ne(T,8),T.gzhead?(ne(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),ne(T,255&T.gzhead.time),ne(T,T.gzhead.time>>8&255),ne(T,T.gzhead.time>>16&255),ne(T,T.gzhead.time>>24&255),ne(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),ne(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(ne(T,255&T.gzhead.extra.length),ne(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(m.adler=f(m.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(ne(T,0),ne(T,0),ne(T,0),ne(T,0),ne(T,0),ne(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),ne(T,3),T.status=F);else{var q=w+(T.w_bits-8<<4)<<8;q|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(q|=32),q+=31-q%31,T.status=F,Y(T,q),T.strstart!==0&&(Y(T,m.adler>>>16),Y(T,65535&m.adler)),m.adler=1}if(T.status===69)if(T.gzhead.extra){for(k=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>k&&(m.adler=f(m.adler,T.pending_buf,T.pending-k,k)),z(m),k=T.pending,T.pending!==T.pending_buf_size));)ne(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>k&&(m.adler=f(m.adler,T.pending_buf,T.pending-k,k)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){k=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>k&&(m.adler=f(m.adler,T.pending_buf,T.pending-k,k)),z(m),k=T.pending,T.pending===T.pending_buf_size)){P=1;break}P=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,ne(T,P)}while(P!==0);T.gzhead.hcrc&&T.pending>k&&(m.adler=f(m.adler,T.pending_buf,T.pending-k,k)),P===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){k=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>k&&(m.adler=f(m.adler,T.pending_buf,T.pending-k,k)),z(m),k=T.pending,T.pending===T.pending_buf_size)){P=1;break}P=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,ne(T,P)}while(P!==0);T.gzhead.hcrc&&T.pending>k&&(m.adler=f(m.adler,T.pending_buf,T.pending-k,k)),P===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&z(m),T.pending+2<=T.pending_buf_size&&(ne(T,255&m.adler),ne(T,m.adler>>8&255),m.adler=0,T.status=F)):T.status=F),T.pending!==0){if(z(m),m.avail_out===0)return T.last_flush=-1,d}else if(m.avail_in===0&&V(U)<=V(O)&&U!==y)return se(m,-5);if(T.status===666&&m.avail_in!==0)return se(m,-5);if(m.avail_in!==0||T.lookahead!==0||U!==p&&T.status!==666){var $=T.strategy===2?(function(I,G){for(var J;;){if(I.lookahead===0&&(ye(I),I.lookahead===0)){if(G===p)return g;break}if(I.match_length=0,J=s._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,J&&(A(I,!1),I.strm.avail_out===0))return g}return I.insert=0,G===y?(A(I,!0),I.strm.avail_out===0?ee:W):I.last_lit&&(A(I,!1),I.strm.avail_out===0)?g:L})(T,U):T.strategy===3?(function(I,G){for(var J,X,re,pe,de=I.window;;){if(I.lookahead<=D){if(ye(I),I.lookahead<=D&&G===p)return g;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=M&&0<I.strstart&&(X=de[re=I.strstart-1])===de[++re]&&X===de[++re]&&X===de[++re]){pe=I.strstart+D;do;while(X===de[++re]&&X===de[++re]&&X===de[++re]&&X===de[++re]&&X===de[++re]&&X===de[++re]&&X===de[++re]&&X===de[++re]&&re<pe);I.match_length=D-(pe-re),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=M?(J=s._tr_tally(I,1,I.match_length-M),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(J=s._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),J&&(A(I,!1),I.strm.avail_out===0))return g}return I.insert=0,G===y?(A(I,!0),I.strm.avail_out===0?ee:W):I.last_lit&&(A(I,!1),I.strm.avail_out===0)?g:L})(T,U):n[T.level].func(T,U);if($!==ee&&$!==W||(T.status=666),$===g||$===ee)return m.avail_out===0&&(T.last_flush=-1),d;if($===L&&(U===1?s._tr_align(T):U!==5&&(s._tr_stored_block(T,0,0,!1),U===3&&(oe(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),z(m),m.avail_out===0))return T.last_flush=-1,d}return U!==y?d:T.wrap<=0?1:(T.wrap===2?(ne(T,255&m.adler),ne(T,m.adler>>8&255),ne(T,m.adler>>16&255),ne(T,m.adler>>24&255),ne(T,255&m.total_in),ne(T,m.total_in>>8&255),ne(T,m.total_in>>16&255),ne(T,m.total_in>>24&255)):(Y(T,m.adler>>>16),Y(T,65535&m.adler)),z(m),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?d:1)},r.deflateEnd=function(m){var U;return m&&m.state?(U=m.state.status)!==_&&U!==69&&U!==73&&U!==91&&U!==103&&U!==F&&U!==666?se(m,b):(m.state=null,U===F?se(m,-3):d):b},r.deflateSetDictionary=function(m,U){var O,T,k,P,q,$,I,G,J=U.length;if(!m||!m.state||(P=(O=m.state).wrap)===2||P===1&&O.status!==_||O.lookahead)return b;for(P===1&&(m.adler=c(m.adler,U,J,0)),O.wrap=0,J>=O.w_size&&(P===0&&(oe(O.head),O.strstart=0,O.block_start=0,O.insert=0),G=new o.Buf8(O.w_size),o.arraySet(G,U,J-O.w_size,O.w_size,0),U=G,J=O.w_size),q=m.avail_in,$=m.next_in,I=m.input,m.avail_in=J,m.next_in=0,m.input=U,ye(O);O.lookahead>=M;){for(T=O.strstart,k=O.lookahead-(M-1);O.ins_h=(O.ins_h<<O.hash_shift^O.window[T+M-1])&O.hash_mask,O.prev[T&O.w_mask]=O.head[O.ins_h],O.head[O.ins_h]=T,T++,--k;);O.strstart=T,O.lookahead=M-1,ye(O)}return O.strstart+=O.lookahead,O.block_start=O.strstart,O.insert=O.lookahead,O.lookahead=0,O.match_length=O.prev_length=M-1,O.match_available=0,m.next_in=$,m.input=I,m.avail_in=q,O.wrap=P,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,a,r){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,a,r){a.exports=function(n,o){var s,c,f,l,p,y,d,b,u,h,v,w,x,S,C,R,B,H,M,D,Q,_,F,g,L;s=n.state,c=n.next_in,g=n.input,f=c+(n.avail_in-5),l=n.next_out,L=n.output,p=l-(o-n.avail_out),y=l+(n.avail_out-257),d=s.dmax,b=s.wsize,u=s.whave,h=s.wnext,v=s.window,w=s.hold,x=s.bits,S=s.lencode,C=s.distcode,R=(1<<s.lenbits)-1,B=(1<<s.distbits)-1;e:do{x<15&&(w+=g[c++]<<x,x+=8,w+=g[c++]<<x,x+=8),H=S[w&R];t:for(;;){if(w>>>=M=H>>>24,x-=M,(M=H>>>16&255)===0)L[l++]=65535&H;else{if(!(16&M)){if((64&M)==0){H=S[(65535&H)+(w&(1<<M)-1)];continue t}if(32&M){s.mode=12;break e}n.msg="invalid literal/length code",s.mode=30;break e}D=65535&H,(M&=15)&&(x<M&&(w+=g[c++]<<x,x+=8),D+=w&(1<<M)-1,w>>>=M,x-=M),x<15&&(w+=g[c++]<<x,x+=8,w+=g[c++]<<x,x+=8),H=C[w&B];i:for(;;){if(w>>>=M=H>>>24,x-=M,!(16&(M=H>>>16&255))){if((64&M)==0){H=C[(65535&H)+(w&(1<<M)-1)];continue i}n.msg="invalid distance code",s.mode=30;break e}if(Q=65535&H,x<(M&=15)&&(w+=g[c++]<<x,(x+=8)<M&&(w+=g[c++]<<x,x+=8)),d<(Q+=w&(1<<M)-1)){n.msg="invalid distance too far back",s.mode=30;break e}if(w>>>=M,x-=M,(M=l-p)<Q){if(u<(M=Q-M)&&s.sane){n.msg="invalid distance too far back",s.mode=30;break e}if(F=v,(_=0)===h){if(_+=b-M,M<D){for(D-=M;L[l++]=v[_++],--M;);_=l-Q,F=L}}else if(h<M){if(_+=b+h-M,(M-=h)<D){for(D-=M;L[l++]=v[_++],--M;);if(_=0,h<D){for(D-=M=h;L[l++]=v[_++],--M;);_=l-Q,F=L}}}else if(_+=h-M,M<D){for(D-=M;L[l++]=v[_++],--M;);_=l-Q,F=L}for(;2<D;)L[l++]=F[_++],L[l++]=F[_++],L[l++]=F[_++],D-=3;D&&(L[l++]=F[_++],1<D&&(L[l++]=F[_++]))}else{for(_=l-Q;L[l++]=L[_++],L[l++]=L[_++],L[l++]=L[_++],2<(D-=3););D&&(L[l++]=L[_++],1<D&&(L[l++]=L[_++]))}break}}break}}while(c<f&&l<y);c-=D=x>>3,w&=(1<<(x-=D<<3))-1,n.next_in=c,n.next_out=l,n.avail_in=c<f?f-c+5:5-(c-f),n.avail_out=l<y?y-l+257:257-(l-y),s.hold=w,s.bits=x}},{}],49:[function(i,a,r){var n=i("../utils/common"),o=i("./adler32"),s=i("./crc32"),c=i("./inffast"),f=i("./inftrees"),l=1,p=2,y=0,d=-2,b=1,u=852,h=592;function v(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var F;return _&&_.state?(F=_.state,_.total_in=_.total_out=F.total=0,_.msg="",F.wrap&&(_.adler=1&F.wrap),F.mode=b,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new n.Buf32(u),F.distcode=F.distdyn=new n.Buf32(h),F.sane=1,F.back=-1,y):d}function S(_){var F;return _&&_.state?((F=_.state).wsize=0,F.whave=0,F.wnext=0,x(_)):d}function C(_,F){var g,L;return _&&_.state?(L=_.state,F<0?(g=0,F=-F):(g=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?d:(L.window!==null&&L.wbits!==F&&(L.window=null),L.wrap=g,L.wbits=F,S(_))):d}function R(_,F){var g,L;return _?(L=new w,(_.state=L).window=null,(g=C(_,F))!==y&&(_.state=null),g):d}var B,H,M=!0;function D(_){if(M){var F;for(B=new n.Buf32(512),H=new n.Buf32(32),F=0;F<144;)_.lens[F++]=8;for(;F<256;)_.lens[F++]=9;for(;F<280;)_.lens[F++]=7;for(;F<288;)_.lens[F++]=8;for(f(l,_.lens,0,288,B,0,_.work,{bits:9}),F=0;F<32;)_.lens[F++]=5;f(p,_.lens,0,32,H,0,_.work,{bits:5}),M=!1}_.lencode=B,_.lenbits=9,_.distcode=H,_.distbits=5}function Q(_,F,g,L){var ee,W=_.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new n.Buf8(W.wsize)),L>=W.wsize?(n.arraySet(W.window,F,g-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(L<(ee=W.wsize-W.wnext)&&(ee=L),n.arraySet(W.window,F,g-L,ee,W.wnext),(L-=ee)?(n.arraySet(W.window,F,g-L,L,0),W.wnext=L,W.whave=W.wsize):(W.wnext+=ee,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=ee))),0}r.inflateReset=S,r.inflateReset2=C,r.inflateResetKeep=x,r.inflateInit=function(_){return R(_,15)},r.inflateInit2=R,r.inflate=function(_,F){var g,L,ee,W,se,V,oe,z,A,ne,Y,Z,ye,Ee,fe,ue,Te,we,et,$e,m,U,O,T,k=0,P=new n.Buf8(4),q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return d;(g=_.state).mode===12&&(g.mode=13),se=_.next_out,ee=_.output,oe=_.avail_out,W=_.next_in,L=_.input,V=_.avail_in,z=g.hold,A=g.bits,ne=V,Y=oe,U=y;e:for(;;)switch(g.mode){case b:if(g.wrap===0){g.mode=13;break}for(;A<16;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(2&g.wrap&&z===35615){P[g.check=0]=255&z,P[1]=z>>>8&255,g.check=s(g.check,P,2,0),A=z=0,g.mode=2;break}if(g.flags=0,g.head&&(g.head.done=!1),!(1&g.wrap)||(((255&z)<<8)+(z>>8))%31){_.msg="incorrect header check",g.mode=30;break}if((15&z)!=8){_.msg="unknown compression method",g.mode=30;break}if(A-=4,m=8+(15&(z>>>=4)),g.wbits===0)g.wbits=m;else if(m>g.wbits){_.msg="invalid window size",g.mode=30;break}g.dmax=1<<m,_.adler=g.check=1,g.mode=512&z?10:12,A=z=0;break;case 2:for(;A<16;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(g.flags=z,(255&g.flags)!=8){_.msg="unknown compression method",g.mode=30;break}if(57344&g.flags){_.msg="unknown header flags set",g.mode=30;break}g.head&&(g.head.text=z>>8&1),512&g.flags&&(P[0]=255&z,P[1]=z>>>8&255,g.check=s(g.check,P,2,0)),A=z=0,g.mode=3;case 3:for(;A<32;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}g.head&&(g.head.time=z),512&g.flags&&(P[0]=255&z,P[1]=z>>>8&255,P[2]=z>>>16&255,P[3]=z>>>24&255,g.check=s(g.check,P,4,0)),A=z=0,g.mode=4;case 4:for(;A<16;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}g.head&&(g.head.xflags=255&z,g.head.os=z>>8),512&g.flags&&(P[0]=255&z,P[1]=z>>>8&255,g.check=s(g.check,P,2,0)),A=z=0,g.mode=5;case 5:if(1024&g.flags){for(;A<16;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}g.length=z,g.head&&(g.head.extra_len=z),512&g.flags&&(P[0]=255&z,P[1]=z>>>8&255,g.check=s(g.check,P,2,0)),A=z=0}else g.head&&(g.head.extra=null);g.mode=6;case 6:if(1024&g.flags&&(V<(Z=g.length)&&(Z=V),Z&&(g.head&&(m=g.head.extra_len-g.length,g.head.extra||(g.head.extra=new Array(g.head.extra_len)),n.arraySet(g.head.extra,L,W,Z,m)),512&g.flags&&(g.check=s(g.check,L,Z,W)),V-=Z,W+=Z,g.length-=Z),g.length))break e;g.length=0,g.mode=7;case 7:if(2048&g.flags){if(V===0)break e;for(Z=0;m=L[W+Z++],g.head&&m&&g.length<65536&&(g.head.name+=String.fromCharCode(m)),m&&Z<V;);if(512&g.flags&&(g.check=s(g.check,L,Z,W)),V-=Z,W+=Z,m)break e}else g.head&&(g.head.name=null);g.length=0,g.mode=8;case 8:if(4096&g.flags){if(V===0)break e;for(Z=0;m=L[W+Z++],g.head&&m&&g.length<65536&&(g.head.comment+=String.fromCharCode(m)),m&&Z<V;);if(512&g.flags&&(g.check=s(g.check,L,Z,W)),V-=Z,W+=Z,m)break e}else g.head&&(g.head.comment=null);g.mode=9;case 9:if(512&g.flags){for(;A<16;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(z!==(65535&g.check)){_.msg="header crc mismatch",g.mode=30;break}A=z=0}g.head&&(g.head.hcrc=g.flags>>9&1,g.head.done=!0),_.adler=g.check=0,g.mode=12;break;case 10:for(;A<32;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}_.adler=g.check=v(z),A=z=0,g.mode=11;case 11:if(g.havedict===0)return _.next_out=se,_.avail_out=oe,_.next_in=W,_.avail_in=V,g.hold=z,g.bits=A,2;_.adler=g.check=1,g.mode=12;case 12:if(F===5||F===6)break e;case 13:if(g.last){z>>>=7&A,A-=7&A,g.mode=27;break}for(;A<3;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}switch(g.last=1&z,A-=1,3&(z>>>=1)){case 0:g.mode=14;break;case 1:if(D(g),g.mode=20,F!==6)break;z>>>=2,A-=2;break e;case 2:g.mode=17;break;case 3:_.msg="invalid block type",g.mode=30}z>>>=2,A-=2;break;case 14:for(z>>>=7&A,A-=7&A;A<32;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if((65535&z)!=(z>>>16^65535)){_.msg="invalid stored block lengths",g.mode=30;break}if(g.length=65535&z,A=z=0,g.mode=15,F===6)break e;case 15:g.mode=16;case 16:if(Z=g.length){if(V<Z&&(Z=V),oe<Z&&(Z=oe),Z===0)break e;n.arraySet(ee,L,W,Z,se),V-=Z,W+=Z,oe-=Z,se+=Z,g.length-=Z;break}g.mode=12;break;case 17:for(;A<14;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(g.nlen=257+(31&z),z>>>=5,A-=5,g.ndist=1+(31&z),z>>>=5,A-=5,g.ncode=4+(15&z),z>>>=4,A-=4,286<g.nlen||30<g.ndist){_.msg="too many length or distance symbols",g.mode=30;break}g.have=0,g.mode=18;case 18:for(;g.have<g.ncode;){for(;A<3;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}g.lens[q[g.have++]]=7&z,z>>>=3,A-=3}for(;g.have<19;)g.lens[q[g.have++]]=0;if(g.lencode=g.lendyn,g.lenbits=7,O={bits:g.lenbits},U=f(0,g.lens,0,19,g.lencode,0,g.work,O),g.lenbits=O.bits,U){_.msg="invalid code lengths set",g.mode=30;break}g.have=0,g.mode=19;case 19:for(;g.have<g.nlen+g.ndist;){for(;ue=(k=g.lencode[z&(1<<g.lenbits)-1])>>>16&255,Te=65535&k,!((fe=k>>>24)<=A);){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(Te<16)z>>>=fe,A-=fe,g.lens[g.have++]=Te;else{if(Te===16){for(T=fe+2;A<T;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(z>>>=fe,A-=fe,g.have===0){_.msg="invalid bit length repeat",g.mode=30;break}m=g.lens[g.have-1],Z=3+(3&z),z>>>=2,A-=2}else if(Te===17){for(T=fe+3;A<T;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}A-=fe,m=0,Z=3+(7&(z>>>=fe)),z>>>=3,A-=3}else{for(T=fe+7;A<T;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}A-=fe,m=0,Z=11+(127&(z>>>=fe)),z>>>=7,A-=7}if(g.have+Z>g.nlen+g.ndist){_.msg="invalid bit length repeat",g.mode=30;break}for(;Z--;)g.lens[g.have++]=m}}if(g.mode===30)break;if(g.lens[256]===0){_.msg="invalid code -- missing end-of-block",g.mode=30;break}if(g.lenbits=9,O={bits:g.lenbits},U=f(l,g.lens,0,g.nlen,g.lencode,0,g.work,O),g.lenbits=O.bits,U){_.msg="invalid literal/lengths set",g.mode=30;break}if(g.distbits=6,g.distcode=g.distdyn,O={bits:g.distbits},U=f(p,g.lens,g.nlen,g.ndist,g.distcode,0,g.work,O),g.distbits=O.bits,U){_.msg="invalid distances set",g.mode=30;break}if(g.mode=20,F===6)break e;case 20:g.mode=21;case 21:if(6<=V&&258<=oe){_.next_out=se,_.avail_out=oe,_.next_in=W,_.avail_in=V,g.hold=z,g.bits=A,c(_,Y),se=_.next_out,ee=_.output,oe=_.avail_out,W=_.next_in,L=_.input,V=_.avail_in,z=g.hold,A=g.bits,g.mode===12&&(g.back=-1);break}for(g.back=0;ue=(k=g.lencode[z&(1<<g.lenbits)-1])>>>16&255,Te=65535&k,!((fe=k>>>24)<=A);){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(ue&&(240&ue)==0){for(we=fe,et=ue,$e=Te;ue=(k=g.lencode[$e+((z&(1<<we+et)-1)>>we)])>>>16&255,Te=65535&k,!(we+(fe=k>>>24)<=A);){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}z>>>=we,A-=we,g.back+=we}if(z>>>=fe,A-=fe,g.back+=fe,g.length=Te,ue===0){g.mode=26;break}if(32&ue){g.back=-1,g.mode=12;break}if(64&ue){_.msg="invalid literal/length code",g.mode=30;break}g.extra=15&ue,g.mode=22;case 22:if(g.extra){for(T=g.extra;A<T;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}g.length+=z&(1<<g.extra)-1,z>>>=g.extra,A-=g.extra,g.back+=g.extra}g.was=g.length,g.mode=23;case 23:for(;ue=(k=g.distcode[z&(1<<g.distbits)-1])>>>16&255,Te=65535&k,!((fe=k>>>24)<=A);){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if((240&ue)==0){for(we=fe,et=ue,$e=Te;ue=(k=g.distcode[$e+((z&(1<<we+et)-1)>>we)])>>>16&255,Te=65535&k,!(we+(fe=k>>>24)<=A);){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}z>>>=we,A-=we,g.back+=we}if(z>>>=fe,A-=fe,g.back+=fe,64&ue){_.msg="invalid distance code",g.mode=30;break}g.offset=Te,g.extra=15&ue,g.mode=24;case 24:if(g.extra){for(T=g.extra;A<T;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}g.offset+=z&(1<<g.extra)-1,z>>>=g.extra,A-=g.extra,g.back+=g.extra}if(g.offset>g.dmax){_.msg="invalid distance too far back",g.mode=30;break}g.mode=25;case 25:if(oe===0)break e;if(Z=Y-oe,g.offset>Z){if((Z=g.offset-Z)>g.whave&&g.sane){_.msg="invalid distance too far back",g.mode=30;break}ye=Z>g.wnext?(Z-=g.wnext,g.wsize-Z):g.wnext-Z,Z>g.length&&(Z=g.length),Ee=g.window}else Ee=ee,ye=se-g.offset,Z=g.length;for(oe<Z&&(Z=oe),oe-=Z,g.length-=Z;ee[se++]=Ee[ye++],--Z;);g.length===0&&(g.mode=21);break;case 26:if(oe===0)break e;ee[se++]=g.length,oe--,g.mode=21;break;case 27:if(g.wrap){for(;A<32;){if(V===0)break e;V--,z|=L[W++]<<A,A+=8}if(Y-=oe,_.total_out+=Y,g.total+=Y,Y&&(_.adler=g.check=g.flags?s(g.check,ee,Y,se-Y):o(g.check,ee,Y,se-Y)),Y=oe,(g.flags?z:v(z))!==g.check){_.msg="incorrect data check",g.mode=30;break}A=z=0}g.mode=28;case 28:if(g.wrap&&g.flags){for(;A<32;){if(V===0)break e;V--,z+=L[W++]<<A,A+=8}if(z!==(4294967295&g.total)){_.msg="incorrect length check",g.mode=30;break}A=z=0}g.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;case 32:default:return d}return _.next_out=se,_.avail_out=oe,_.next_in=W,_.avail_in=V,g.hold=z,g.bits=A,(g.wsize||Y!==_.avail_out&&g.mode<30&&(g.mode<27||F!==4))&&Q(_,_.output,_.next_out,Y-_.avail_out)?(g.mode=31,-4):(ne-=_.avail_in,Y-=_.avail_out,_.total_in+=ne,_.total_out+=Y,g.total+=Y,g.wrap&&Y&&(_.adler=g.check=g.flags?s(g.check,ee,Y,_.next_out-Y):o(g.check,ee,Y,_.next_out-Y)),_.data_type=g.bits+(g.last?64:0)+(g.mode===12?128:0)+(g.mode===20||g.mode===15?256:0),(ne==0&&Y===0||F===4)&&U===y&&(U=-5),U)},r.inflateEnd=function(_){if(!_||!_.state)return d;var F=_.state;return F.window&&(F.window=null),_.state=null,y},r.inflateGetHeader=function(_,F){var g;return _&&_.state?(2&(g=_.state).wrap)==0?d:((g.head=F).done=!1,y):d},r.inflateSetDictionary=function(_,F){var g,L=F.length;return _&&_.state?(g=_.state).wrap!==0&&g.mode!==11?d:g.mode===11&&o(1,F,L,0)!==g.check?-3:Q(_,F,L,L)?(g.mode=31,-4):(g.havedict=1,y):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,a,r){var n=i("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(l,p,y,d,b,u,h,v){var w,x,S,C,R,B,H,M,D,Q=v.bits,_=0,F=0,g=0,L=0,ee=0,W=0,se=0,V=0,oe=0,z=0,A=null,ne=0,Y=new n.Buf16(16),Z=new n.Buf16(16),ye=null,Ee=0;for(_=0;_<=15;_++)Y[_]=0;for(F=0;F<d;F++)Y[p[y+F]]++;for(ee=Q,L=15;1<=L&&Y[L]===0;L--);if(L<ee&&(ee=L),L===0)return b[u++]=20971520,b[u++]=20971520,v.bits=1,0;for(g=1;g<L&&Y[g]===0;g++);for(ee<g&&(ee=g),_=V=1;_<=15;_++)if(V<<=1,(V-=Y[_])<0)return-1;if(0<V&&(l===0||L!==1))return-1;for(Z[1]=0,_=1;_<15;_++)Z[_+1]=Z[_]+Y[_];for(F=0;F<d;F++)p[y+F]!==0&&(h[Z[p[y+F]]++]=F);if(B=l===0?(A=ye=h,19):l===1?(A=o,ne-=257,ye=s,Ee-=257,256):(A=c,ye=f,-1),_=g,R=u,se=F=z=0,S=-1,C=(oe=1<<(W=ee))-1,l===1&&852<oe||l===2&&592<oe)return 1;for(;;){for(H=_-se,D=h[F]<B?(M=0,h[F]):h[F]>B?(M=ye[Ee+h[F]],A[ne+h[F]]):(M=96,0),w=1<<_-se,g=x=1<<W;b[R+(z>>se)+(x-=w)]=H<<24|M<<16|D|0,x!==0;);for(w=1<<_-1;z&w;)w>>=1;if(w!==0?(z&=w-1,z+=w):z=0,F++,--Y[_]==0){if(_===L)break;_=p[y+h[F]]}if(ee<_&&(z&C)!==S){for(se===0&&(se=ee),R+=g,V=1<<(W=_-se);W+se<L&&!((V-=Y[W+se])<=0);)W++,V<<=1;if(oe+=1<<W,l===1&&852<oe||l===2&&592<oe)return 1;b[S=z&C]=ee<<24|W<<16|R-u|0}}return z!==0&&(b[R+z]=_-se<<24|64<<16|0),v.bits=ee,0}},{"../utils/common":41}],51:[function(i,a,r){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,a,r){var n=i("../utils/common"),o=0,s=1;function c(k){for(var P=k.length;0<=--P;)k[P]=0}var f=0,l=29,p=256,y=p+1+l,d=30,b=19,u=2*y+1,h=15,v=16,w=7,x=256,S=16,C=17,R=18,B=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],H=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],M=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(y+2));c(Q);var _=new Array(2*d);c(_);var F=new Array(512);c(F);var g=new Array(256);c(g);var L=new Array(l);c(L);var ee,W,se,V=new Array(d);function oe(k,P,q,$,I){this.static_tree=k,this.extra_bits=P,this.extra_base=q,this.elems=$,this.max_length=I,this.has_stree=k&&k.length}function z(k,P){this.dyn_tree=k,this.max_code=0,this.stat_desc=P}function A(k){return k<256?F[k]:F[256+(k>>>7)]}function ne(k,P){k.pending_buf[k.pending++]=255&P,k.pending_buf[k.pending++]=P>>>8&255}function Y(k,P,q){k.bi_valid>v-q?(k.bi_buf|=P<<k.bi_valid&65535,ne(k,k.bi_buf),k.bi_buf=P>>v-k.bi_valid,k.bi_valid+=q-v):(k.bi_buf|=P<<k.bi_valid&65535,k.bi_valid+=q)}function Z(k,P,q){Y(k,q[2*P],q[2*P+1])}function ye(k,P){for(var q=0;q|=1&k,k>>>=1,q<<=1,0<--P;);return q>>>1}function Ee(k,P,q){var $,I,G=new Array(h+1),J=0;for($=1;$<=h;$++)G[$]=J=J+q[$-1]<<1;for(I=0;I<=P;I++){var X=k[2*I+1];X!==0&&(k[2*I]=ye(G[X]++,X))}}function fe(k){var P;for(P=0;P<y;P++)k.dyn_ltree[2*P]=0;for(P=0;P<d;P++)k.dyn_dtree[2*P]=0;for(P=0;P<b;P++)k.bl_tree[2*P]=0;k.dyn_ltree[2*x]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function ue(k){8<k.bi_valid?ne(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function Te(k,P,q,$){var I=2*P,G=2*q;return k[I]<k[G]||k[I]===k[G]&&$[P]<=$[q]}function we(k,P,q){for(var $=k.heap[q],I=q<<1;I<=k.heap_len&&(I<k.heap_len&&Te(P,k.heap[I+1],k.heap[I],k.depth)&&I++,!Te(P,$,k.heap[I],k.depth));)k.heap[q]=k.heap[I],q=I,I<<=1;k.heap[q]=$}function et(k,P,q){var $,I,G,J,X=0;if(k.last_lit!==0)for(;$=k.pending_buf[k.d_buf+2*X]<<8|k.pending_buf[k.d_buf+2*X+1],I=k.pending_buf[k.l_buf+X],X++,$===0?Z(k,I,P):(Z(k,(G=g[I])+p+1,P),(J=B[G])!==0&&Y(k,I-=L[G],J),Z(k,G=A(--$),q),(J=H[G])!==0&&Y(k,$-=V[G],J)),X<k.last_lit;);Z(k,x,P)}function $e(k,P){var q,$,I,G=P.dyn_tree,J=P.stat_desc.static_tree,X=P.stat_desc.has_stree,re=P.stat_desc.elems,pe=-1;for(k.heap_len=0,k.heap_max=u,q=0;q<re;q++)G[2*q]!==0?(k.heap[++k.heap_len]=pe=q,k.depth[q]=0):G[2*q+1]=0;for(;k.heap_len<2;)G[2*(I=k.heap[++k.heap_len]=pe<2?++pe:0)]=1,k.depth[I]=0,k.opt_len--,X&&(k.static_len-=J[2*I+1]);for(P.max_code=pe,q=k.heap_len>>1;1<=q;q--)we(k,G,q);for(I=re;q=k.heap[1],k.heap[1]=k.heap[k.heap_len--],we(k,G,1),$=k.heap[1],k.heap[--k.heap_max]=q,k.heap[--k.heap_max]=$,G[2*I]=G[2*q]+G[2*$],k.depth[I]=(k.depth[q]>=k.depth[$]?k.depth[q]:k.depth[$])+1,G[2*q+1]=G[2*$+1]=I,k.heap[1]=I++,we(k,G,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(de,Le){var Qt,tt,Yt,xe,xi,ka,ct=Le.dyn_tree,zn=Le.max_code,du=Le.stat_desc.static_tree,uu=Le.stat_desc.has_stree,hu=Le.stat_desc.extra_bits,Fn=Le.stat_desc.extra_base,Jt=Le.stat_desc.max_length,ki=0;for(xe=0;xe<=h;xe++)de.bl_count[xe]=0;for(ct[2*de.heap[de.heap_max]+1]=0,Qt=de.heap_max+1;Qt<u;Qt++)Jt<(xe=ct[2*ct[2*(tt=de.heap[Qt])+1]+1]+1)&&(xe=Jt,ki++),ct[2*tt+1]=xe,zn<tt||(de.bl_count[xe]++,xi=0,Fn<=tt&&(xi=hu[tt-Fn]),ka=ct[2*tt],de.opt_len+=ka*(xe+xi),uu&&(de.static_len+=ka*(du[2*tt+1]+xi)));if(ki!==0){do{for(xe=Jt-1;de.bl_count[xe]===0;)xe--;de.bl_count[xe]--,de.bl_count[xe+1]+=2,de.bl_count[Jt]--,ki-=2}while(0<ki);for(xe=Jt;xe!==0;xe--)for(tt=de.bl_count[xe];tt!==0;)zn<(Yt=de.heap[--Qt])||(ct[2*Yt+1]!==xe&&(de.opt_len+=(xe-ct[2*Yt+1])*ct[2*Yt],ct[2*Yt+1]=xe),tt--)}})(k,P),Ee(G,pe,k.bl_count)}function m(k,P,q){var $,I,G=-1,J=P[1],X=0,re=7,pe=4;for(J===0&&(re=138,pe=3),P[2*(q+1)+1]=65535,$=0;$<=q;$++)I=J,J=P[2*($+1)+1],++X<re&&I===J||(X<pe?k.bl_tree[2*I]+=X:I!==0?(I!==G&&k.bl_tree[2*I]++,k.bl_tree[2*S]++):X<=10?k.bl_tree[2*C]++:k.bl_tree[2*R]++,G=I,pe=(X=0)===J?(re=138,3):I===J?(re=6,3):(re=7,4))}function U(k,P,q){var $,I,G=-1,J=P[1],X=0,re=7,pe=4;for(J===0&&(re=138,pe=3),$=0;$<=q;$++)if(I=J,J=P[2*($+1)+1],!(++X<re&&I===J)){if(X<pe)for(;Z(k,I,k.bl_tree),--X!=0;);else I!==0?(I!==G&&(Z(k,I,k.bl_tree),X--),Z(k,S,k.bl_tree),Y(k,X-3,2)):X<=10?(Z(k,C,k.bl_tree),Y(k,X-3,3)):(Z(k,R,k.bl_tree),Y(k,X-11,7));G=I,pe=(X=0)===J?(re=138,3):I===J?(re=6,3):(re=7,4)}}c(V);var O=!1;function T(k,P,q,$){Y(k,(f<<1)+($?1:0),3),(function(I,G,J,X){ue(I),ne(I,J),ne(I,~J),n.arraySet(I.pending_buf,I.window,G,J,I.pending),I.pending+=J})(k,P,q)}r._tr_init=function(k){O||((function(){var P,q,$,I,G,J=new Array(h+1);for(I=$=0;I<l-1;I++)for(L[I]=$,P=0;P<1<<B[I];P++)g[$++]=I;for(g[$-1]=I,I=G=0;I<16;I++)for(V[I]=G,P=0;P<1<<H[I];P++)F[G++]=I;for(G>>=7;I<d;I++)for(V[I]=G<<7,P=0;P<1<<H[I]-7;P++)F[256+G++]=I;for(q=0;q<=h;q++)J[q]=0;for(P=0;P<=143;)Q[2*P+1]=8,P++,J[8]++;for(;P<=255;)Q[2*P+1]=9,P++,J[9]++;for(;P<=279;)Q[2*P+1]=7,P++,J[7]++;for(;P<=287;)Q[2*P+1]=8,P++,J[8]++;for(Ee(Q,y+1,J),P=0;P<d;P++)_[2*P+1]=5,_[2*P]=ye(P,5);ee=new oe(Q,B,p+1,y,h),W=new oe(_,H,0,d,h),se=new oe(new Array(0),M,0,b,w)})(),O=!0),k.l_desc=new z(k.dyn_ltree,ee),k.d_desc=new z(k.dyn_dtree,W),k.bl_desc=new z(k.bl_tree,se),k.bi_buf=0,k.bi_valid=0,fe(k)},r._tr_stored_block=T,r._tr_flush_block=function(k,P,q,$){var I,G,J=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(X){var re,pe=4093624447;for(re=0;re<=31;re++,pe>>>=1)if(1&pe&&X.dyn_ltree[2*re]!==0)return o;if(X.dyn_ltree[18]!==0||X.dyn_ltree[20]!==0||X.dyn_ltree[26]!==0)return s;for(re=32;re<p;re++)if(X.dyn_ltree[2*re]!==0)return s;return o})(k)),$e(k,k.l_desc),$e(k,k.d_desc),J=(function(X){var re;for(m(X,X.dyn_ltree,X.l_desc.max_code),m(X,X.dyn_dtree,X.d_desc.max_code),$e(X,X.bl_desc),re=b-1;3<=re&&X.bl_tree[2*D[re]+1]===0;re--);return X.opt_len+=3*(re+1)+5+5+4,re})(k),I=k.opt_len+3+7>>>3,(G=k.static_len+3+7>>>3)<=I&&(I=G)):I=G=q+5,q+4<=I&&P!==-1?T(k,P,q,$):k.strategy===4||G===I?(Y(k,2+($?1:0),3),et(k,Q,_)):(Y(k,4+($?1:0),3),(function(X,re,pe,de){var Le;for(Y(X,re-257,5),Y(X,pe-1,5),Y(X,de-4,4),Le=0;Le<de;Le++)Y(X,X.bl_tree[2*D[Le]+1],3);U(X,X.dyn_ltree,re-1),U(X,X.dyn_dtree,pe-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,J+1),et(k,k.dyn_ltree,k.dyn_dtree)),fe(k),$&&ue(k)},r._tr_tally=function(k,P,q){return k.pending_buf[k.d_buf+2*k.last_lit]=P>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&P,k.pending_buf[k.l_buf+k.last_lit]=255&q,k.last_lit++,P===0?k.dyn_ltree[2*q]++:(k.matches++,P--,k.dyn_ltree[2*(g[q]+p+1)]++,k.dyn_dtree[2*A(P)]++),k.last_lit===k.lit_bufsize-1},r._tr_align=function(k){Y(k,2,3),Z(k,x,Q),(function(P){P.bi_valid===16?(ne(P,P.bi_buf),P.bi_buf=0,P.bi_valid=0):8<=P.bi_valid&&(P.pending_buf[P.pending++]=255&P.bi_buf,P.bi_buf>>=8,P.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(i,a,r){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,a,r){(function(n){(function(o,s){if(!o.setImmediate){var c,f,l,p,y=1,d={},b=!1,u=o.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(o);h=h&&h.setTimeout?h:o,c={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){w(S)})}:(function(){if(o.postMessage&&!o.importScripts){var S=!0,C=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=C,S}})()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",x,!1):o.attachEvent("onmessage",x),function(S){o.postMessage(p+S,"*")}):o.MessageChannel?((l=new MessageChannel).port1.onmessage=function(S){w(S.data)},function(S){l.port2.postMessage(S)}):u&&"onreadystatechange"in u.createElement("script")?(f=u.documentElement,function(S){var C=u.createElement("script");C.onreadystatechange=function(){w(S),C.onreadystatechange=null,f.removeChild(C),C=null},f.appendChild(C)}):function(S){setTimeout(w,0,S)},h.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var C=new Array(arguments.length-1),R=0;R<C.length;R++)C[R]=arguments[R+1];var B={callback:S,args:C};return d[y]=B,c(y),y++},h.clearImmediate=v}function v(S){delete d[S]}function w(S){if(b)setTimeout(w,0,S);else{var C=d[S];if(C){b=!0;try{(function(R){var B=R.callback,H=R.args;switch(H.length){case 0:B();break;case 1:B(H[0]);break;case 2:B(H[0],H[1]);break;case 3:B(H[0],H[1],H[2]);break;default:B.apply(s,H)}})(C)}finally{v(S),b=!1}}}}function x(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(p)===0&&w(+S.data.slice(p.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Li)),Li.exports}var Vc=jc();const Gc=$c(Vc);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function N(t){if(!t)throw new Error("Assertion failed.")}const Kc=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ke=t=>t&&t[t.length-1],ft=t=>t>=0&&t<2**32,K=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},at=t=>{const e=K(t);return(e&1)===0?-(e>>1):e+1>>1},Ne=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),si=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),Xe=new TextEncoder,ci={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},li={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},fi={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Xc=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Ui=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class rr{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(r=>{let n=!1;e=()=>{n||(r(),this.pending--,n=!0)}}),a=this.currentPromise;return this.currentPromise=i,this.pending++,await a,e}}const nr=(t,e,i)=>{let a=0,r=t.length-1,n=-1;for(;a<=r;){const o=a+(r-a+1)/2|0;i(t[o])<=e?(n=o,a=o+1):r=o-1}return n},or=()=>{let t,e;return{promise:new Promise((a,r)=>{t=a,e=r}),resolve:t,reject:e}},kt=t=>{throw new Error(`Unexpected value: ${t}`)},Zc=(t,e,i)=>{const a=t.getUint8(e),r=t.getUint8(e+1),n=t.getUint8(e+2);return a<<16|r<<8|n},Qc=(t,e,i,a)=>{i=i>>>0,i=i&16777215,t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255)},sr=(t,e,i)=>Math.max(e,Math.min(i,t)),Yc=(t,e,i)=>t+(e-t)*i,Jc="und",cr=(t,e)=>Math.round(t/e)*e,lr=(t,e)=>Math.floor(t*e)/e,el=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},tl=/^[a-z]{3}$/,il=t=>tl.test(t),_t=1e6*(1+Number.EPSILON),al=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let a=0,r=1,n=1,o=0,s=t;for(;;){const c=Math.floor(s),f=c*n+a,l=c*o+r;if(l>e)return{num:i*n,den:o};if(a=n,r=o,n=f,o=l,s=1/(s-c),!isFinite(s))break}return{num:i*n,den:o}};class rl{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Ni=null;const fr=()=>Ni!==null?Ni:Ni=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let Wi=null;const nl=()=>Wi!==null?Wi:Wi=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let qi=null;const ol=()=>{if(qi!==null)return qi;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?qi=Number(t[1]):null},dr=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},sl=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},cl=(t,e)=>{let i=-1,a=1/0;for(let r=0;r<t.length;r++){const n=e(t[r]);n<a&&(a=n,i=r)}return i},ur=t=>{N(Number.isInteger(t.num)),N(Number.isInteger(t.den)),N(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const r=e%i;e=i,i=r}const a=e||1;return{num:t.num/a,den:t.den/a}},Di=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},ll=t=>new Promise(e=>setTimeout(e,t)),hr=t=>Array.isArray(t)?t:[t];class $i{constructor(){this._listeners=new Map}on(e,i,a){this._listeners.has(e)||this._listeners.set(e,new Set);const r={fn:i,once:a?.once??!1};return this._listeners.get(e).add(r),()=>{this._listeners.get(e)?.delete(r)}}_emit(...e){const[i,a]=e,r=this._listeners.get(i);if(r)for(const n of r){try{n.fn(a)}catch(o){console.error(o)}n.once&&r.delete(n)}}}const fl=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Ze;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(Ze||(Ze={}));class ge{constructor(){}static get level(){return ge._level}static set level(e){if(e!==Ze.Silent&&e!==Ze.Errors&&e!==Ze.Warnings&&e!==Ze.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ge._level=e}static get _emitter(){return ge._emitterInstance??=new $i}static on(e,i,a){return ge._emitter.on(e,i,a)}static _error(...e){ge._emitter._emit("error",e),ge._level>=Ze.Errors&&console.error(...e)}static _warn(...e){ge._emitter._emit("warn",e),ge._level>=Ze.Warnings&&console.warn(...e)}static _info(...e){ge._emitter._emit("info",e),ge._level>=Ze.Info&&console.info(...e)}}ge._level=Ze.Info,ge._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class mr{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class dl{constructor(e,i,a,r){if(this.data=e,this.mimeType=i,this.name=a,this.description=r,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("name, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("description, when provided, must be a string.")}}const ul=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof mr)&&!(e instanceof dl)&&!fl(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},hl=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class _e{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,a=7-(this.pos&7),r=(i&1<<a)>>a;return this.pos++,r}readBits(e){if(e===1)return this.readBit();let i=0;for(let a=0;a<e;a++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const a=this.pos+e;for(let r=this.pos;r<a;r++){const n=Math.floor(r/8);let o=this.bytes[n];const s=7-(r&7);o&=~(1<<s),o|=(i&1<<a-r-1)>>a-r-1<<s,this.bytes[n]=o}this.pos=a}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new _e(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const pr=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],vr=[-1,1,2,3,4,5,6,8],ml=t=>{let e=pr.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const a=vr.indexOf(t.numberOfChannels);if(a===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let r=13;t.objectType>=32&&(r+=6),e===15&&(r+=24);const n=Math.ceil(r/8),o=new Uint8Array(n),s=new _e(o);return t.objectType<32?s.writeBits(5,t.objectType):(s.writeBits(5,31),s.writeBits(6,t.objectType-32)),s.writeBits(4,e),e===15&&s.writeBits(24,i),s.writeBits(4,a),o};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const rt=["avc","hevc","vp9","av1","vp8","prores"],pt=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],ji=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],di=[...ji,...pt],Lt=["webvtt"],ui=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],gr=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],br=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],yr=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Ut=["ap4x","ap4h","apch","apcn","apcs","apco"],Vi=["dtsc","dtsh","dtsl","dtse"],pl=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],vl=(t,e,i,a,r)=>{if(t==="avc"){const o=Math.ceil(e/16)*Math.ceil(i/16),s=ui.find(y=>o<=y.maxMacroblocks&&a<=y.maxBitrate)??Ke(ui),c=s?s.level:0,f="64".padStart(2,"0"),l="00",p=c.toString(16).padStart(2,"0");return`avc1.${f}${l}${p}`}else if(t==="hevc"){const c=e*i,f=gr.find(p=>c<=p.maxPictureSize&&a<=p.maxBitrate)??Ke(gr);return`hev1.1.6.${f.tier}${f.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const o=e*i;return`vp09.00.${(br.find(f=>o<=f.maxPictureSize&&a<=f.maxBitrate)??Ke(br)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const o=e*i,s=yr.find(l=>o<=l.maxPictureSize&&a<=l.maxBitrate)??Ke(yr);return`av01.0.${s.level.toString().padStart(2,"0")}${s.tier}.08`}else if(t==="prores"){const o=Math.pow(e*i/2073600,.95),s=pl.filter(l=>l.alpha===r);let c=s[0].fourCc,f=1/0;for(const{fourCc:l,bitrate:p}of s){const y=Math.abs(p*o-a);y<f&&(f=y,c=l)}return c}else kt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},gl=t=>{const e=t.split("."),r=(1<<7)+1,n=Number(e[1]),o=e[2],s=Number(o.slice(0,-1)),c=(n<<5)+s,f=o.slice(-1)==="H"?1:0,p=Number(e[3])===8?0:1,y=0,d=e[4]?Number(e[4]):0,b=e[5]?Number(e[5][0]):1,u=e[5]?Number(e[5][1]):1,h=e[5]?Number(e[5][2]):0,v=(f<<7)+(p<<6)+(y<<5)+(d<<4)+(b<<3)+(u<<2)+h;return[r,c,v,0]},wr=/^pcm-([usf])(\d+)(be)?$/,Tt=t=>{if(N(pt.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=wr.exec(t);N(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const a=Number(e[2])/8,r=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:a,littleEndian:r,silentValue:n}},Gi=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Ut.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Vi.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":wr.test(t)?t:t==="webvtt"?"webvtt":null,bl=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},yl=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Ut],wl=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,xl=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,kl=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,_l=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,xr=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!yl.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Ui(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const a=Object.keys(ci);if(i.primaries!=null&&!a.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${a.join(", ")}.`);const r=Object.keys(li);if(i.transfer!=null&&!r.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${r.join(", ")}.`);const n=Object.keys(fi);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!wl.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!xl.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!kl.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!_l.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Ut.some(i=>t.decoderConfig.codec.startsWith(i))&&!Ut.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Ut.join(", ")}.`);if(e!==null&&Gi(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Tl=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],kr=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Tl.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Ui(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Vi.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Vi.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!pt.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${pt.join(", ")}).`);if(e!==null&&Gi(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Sl=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Cl=[48e3,44100,32e3],El=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var nt;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(nt||(nt={}));var Fe;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Fe||(Fe={}));const Nt=function*(t){let e=0,i=-1;for(;e<t.length-2;){const a=t.indexOf(0,e);if(a===-1||a>=t.length-2)break;e=a;let r=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?r=4:t[e+1]===0&&t[e+2]===1&&(r=3),r===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+r,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},_r=function*(t,e){let i=0;const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let r;e===1?r=a.getUint8(i):e===2?r=a.getUint16(i,!1):e===3?r=Zc(a,i):(N(e===4),r=a.getUint32(i,!1)),i+=e,yield{offset:i,length:r},i+=r}},Pl=(t,e)=>{if(e.description){const r=(Ne(e.description)[4]&3)+1;return _r(t,r)}else return Nt(t)},Tr=t=>t&31,hi=t=>{const e=[],i=t.length;for(let a=0;a<i;a++)a+2<i&&t[a]===0&&t[a+1]===0&&t[a+2]===3?(e.push(0,0),a+=2):e.push(t[a]);return new Uint8Array(e)},Bl=(t,e)=>{const i=t.reduce((n,o)=>n+e+o.byteLength,0),a=new Uint8Array(i);let r=0;for(const n of t){const o=new DataView(a.buffer,a.byteOffset,a.byteLength);switch(e){case 1:o.setUint8(r,n.byteLength);break;case 2:o.setUint16(r,n.byteLength,!1);break;case 3:Qc(o,r,n.byteLength);break;case 4:o.setUint32(r,n.byteLength,!1);break}r+=e,a.set(n,r),r+=n.byteLength}return a},Ml=t=>{try{const e=[],i=[],a=[];for(const s of Nt(t)){const c=t.subarray(s.offset,s.offset+s.length),f=Tr(c[0]);f===nt.SPS?e.push(c):f===nt.PPS?i.push(c):f===nt.SPS_EXT&&a.push(c)}if(e.length===0||i.length===0)return null;const r=e[0],n=Al(r);N(n!==null);const o=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:o?n.chromaFormatIdc:null,bitDepthLumaMinus8:o?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:o?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:o?a:null}}catch(e){return ge._error("Error building AVC Decoder Configuration Record:",e),null}},Il=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let r=0;r<a;r++)e.push(i[r])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let r=0;r<a;r++)e.push(i[r])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){N(t.chromaFormat!==null),N(t.bitDepthLumaMinus8!==null),N(t.bitDepthChromaMinus8!==null),N(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const a=i.byteLength;e.push(a>>8),e.push(a&255);for(let r=0;r<a;r++)e.push(i[r])}}return new Uint8Array(e)},Sr={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Al=t=>{try{const e=new _e(hi(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const a=e.readAlignedByte(),r=e.readAlignedByte(),n=e.readAlignedByte();K(e);let o=1,s=0,c=0,f=0;if((a===100||a===110||a===122||a===244||a===44||a===83||a===86||a===118||a===128)&&(o=K(e),o===3&&(f=e.readBits(1)),s=K(e),c=K(e),e.skipBits(1),e.readBits(1))){for(let _=0;_<(o!==3?8:12);_++)if(e.readBits(1)){const g=_<6?16:64;let L=8,ee=8;for(let W=0;W<g;W++){if(ee!==0){const se=at(e);ee=(L+se+256)%256}L=ee===0?L:ee}}}K(e);const l=K(e);if(l===0)K(e);else if(l===1){e.skipBits(1),at(e),at(e);const Q=K(e);for(let _=0;_<Q;_++)at(e)}K(e),e.skipBits(1);const p=K(e),y=K(e),d=16*(p+1),b=16*(y+1);let u=d,h=b;const v=e.readBits(1);if(v||e.skipBits(1),e.skipBits(1),e.readBits(1)){const Q=K(e),_=K(e),F=K(e),g=K(e);let L,ee;if((f===0?o:0)===0)L=1,ee=2-v;else{const se=o===3?1:2,V=o===1?2:1;L=se,ee=V*(2-v)}u-=L*(Q+_),h-=ee*(F+g)}let x=2,S=2,C=2,R=0,B={num:1,den:1},H=null,M=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)B={num:e.readBits(16),den:e.readBits(16)};else{const oe=Sr[V];oe&&(B=oe)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),R=e.readBits(1),e.readBits(1)&&(x=e.readBits(8),S=e.readBits(8),C=e.readBits(8))),e.readBits(1)&&(K(e),K(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const ee=e.readBits(1);ee&&Cr(e);const W=e.readBits(1);W&&Cr(e),(ee||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),K(e),K(e),K(e),K(e),H=K(e),M=K(e))}if(H===null){N(M===null);const Q=r&16;if((a===44||a===86||a===100||a===110||a===122||a===244)&&Q)H=0,M=0;else{const _=p+1,F=y+1,g=(2-v)*F,L=ui.find(W=>W.level>=n)??Ke(ui),ee=Math.min(Math.floor(L.maxDpbMbs/(_*g)),16);H=ee,M=ee}}return N(M!==null),{profileIdc:a,constraintFlags:r,levelIdc:n,frameMbsOnlyFlag:v,chromaFormatIdc:o,bitDepthLumaMinus8:s,bitDepthChromaMinus8:c,codedWidth:d,codedHeight:b,displayWidth:u,displayHeight:h,pixelAspectRatio:B,colourPrimaries:x,matrixCoefficients:C,transferCharacteristics:S,fullRangeFlag:R,numReorderFrames:H,maxDecFrameBuffering:M}}catch(e){return ge._error("Error parsing AVC SPS:",e),null}},Cr=t=>{const e=K(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)K(t),K(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Rl=(t,e)=>{if(e.description){const r=(Ne(e.description)[21]&3)+1;return _r(t,r)}else return Nt(t)},Ki=t=>t>>1&63,zl=t=>{try{const e=new _e(hi(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),a=e.readBits(1),{general_profile_space:r,general_tier_flag:n,general_profile_idc:o,general_profile_compatibility_flags:s,general_constraint_indicator_flags:c,general_level_idc:f}=Ol(e,i);K(e);const l=K(e);let p=0;l===3&&(p=e.readBits(1));const y=K(e),d=K(e);let b=y,u=d;if(e.readBits(1)){const _=K(e),F=K(e),g=K(e),L=K(e);let ee=1,W=1;const se=p===0?l:0;se===1?(ee=2,W=2):se===2&&(ee=2,W=1),b-=(_+F)*ee,u-=(g+L)*W}const h=K(e),v=K(e);K(e);const x=e.readBits(1)?0:i;let S=0;for(let _=x;_<=i;_++)K(e),S=K(e),K(e);K(e),K(e),K(e),K(e),K(e),K(e),e.readBits(1)&&e.readBits(1)&&Hl(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),K(e),K(e),e.skipBits(1));const C=K(e);if(Ll(e,C),e.readBits(1)){const _=K(e);for(let F=0;F<_;F++)K(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let R=2,B=2,H=2,M=0,D=0,Q={num:1,den:1};if(e.readBits(1)){const _=Nl(e,i);Q=_.pixelAspectRatio,R=_.colourPrimaries,B=_.transferCharacteristics,H=_.matrixCoefficients,M=_.fullRangeFlag,D=_.minSpatialSegmentationIdc}return{displayWidth:b,displayHeight:u,pixelAspectRatio:Q,colourPrimaries:R,transferCharacteristics:B,matrixCoefficients:H,fullRangeFlag:M,maxDecFrameBuffering:S+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:a,generalProfileSpace:r,generalTierFlag:n,generalProfileIdc:o,generalProfileCompatibilityFlags:s,generalConstraintIndicatorFlags:c,generalLevelIdc:f,chromaFormatIdc:l,bitDepthLumaMinus8:h,bitDepthChromaMinus8:v,minSpatialSegmentationIdc:D}}catch(e){return ge._error("Error parsing HEVC SPS:",e),null}},Fl=t=>{try{const e=[],i=[],a=[],r=[];for(const f of Nt(t)){const l=t.subarray(f.offset,f.offset+f.length),p=Ki(l[0]);p===Fe.VPS_NUT?e.push(l):p===Fe.SPS_NUT?i.push(l):p===Fe.PPS_NUT?a.push(l):(p===Fe.PREFIX_SEI_NUT||p===Fe.SUFFIX_SEI_NUT)&&r.push(l)}if(i.length===0||a.length===0)return null;const n=zl(i[0]);if(!n)return null;let o=0;if(a.length>0){const f=a[0],l=new _e(hi(f));l.skipBits(16),K(l),K(l),l.skipBits(1),l.skipBits(1),l.skipBits(3),l.skipBits(1),l.skipBits(1),K(l),K(l),at(l),l.skipBits(1),l.skipBits(1),l.readBits(1)&&K(l),at(l),at(l),l.skipBits(1),l.skipBits(1),l.skipBits(1),l.skipBits(1);const p=l.readBits(1),y=l.readBits(1);!p&&!y?o=0:p&&!y?o=2:!p&&y?o=3:o=0}const s=[...e.length?[{arrayCompleteness:1,nalUnitType:Fe.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Fe.SPS_NUT,nalUnits:i}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Fe.PPS_NUT,nalUnits:a}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:Ki(r[0][0]),nalUnits:r}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:o,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:s}}catch(e){return ge._error("Error building HEVC Decoder Configuration Record:",e),null}},Ol=(t,e)=>{const i=t.readBits(2),a=t.readBits(1),r=t.readBits(5);let n=0;for(let l=0;l<32;l++)n=n<<1|t.readBits(1);const o=new Uint8Array(6);for(let l=0;l<6;l++)o[l]=t.readBits(8);const s=t.readBits(8),c=[],f=[];for(let l=0;l<e;l++)c.push(t.readBits(1)),f.push(t.readBits(1));if(e>0)for(let l=e;l<8;l++)t.skipBits(2);for(let l=0;l<e;l++)c[l]&&t.skipBits(88),f[l]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:a,general_profile_idc:r,general_profile_compatibility_flags:n,general_constraint_indicator_flags:o,general_level_idc:s}},Hl=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))K(t);else{const r=Math.min(64,1<<4+(e<<1));e>1&&at(t);for(let n=0;n<r;n++)at(t)}},Ll=(t,e)=>{const i=[];for(let a=0;a<e;a++)i[a]=Ul(t,a,e,i)},Ul=(t,e,i,a)=>{let r=0,n=0,o=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const c=K(t);o=e-(c+1)}else o=e-1;t.readBits(1),K(t);const s=a[o]??0;for(let c=0;c<=s;c++)t.readBits(1)||t.readBits(1);r=a[o]}else{const s=K(t),c=K(t);for(let f=0;f<s;f++)K(t),t.readBits(1);for(let f=0;f<c;f++)K(t),t.readBits(1);r=s+c}return r},Nl=(t,e)=>{let i=2,a=2,r=2,n=0,o=0,s={num:1,den:1};if(t.readBits(1)){const c=t.readBits(8);if(c===255)s={num:t.readBits(16),den:t.readBits(16)};else{const f=Sr[c];f&&(s=f)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),a=t.readBits(8),r=t.readBits(8))),t.readBits(1)&&(K(t),K(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(K(t),K(t),K(t),K(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&K(t),t.readBits(1)&&Wl(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),o=K(t),K(t),K(t),K(t),K(t)),{pixelAspectRatio:s,colourPrimaries:i,transferCharacteristics:a,matrixCoefficients:r,fullRangeFlag:n,minSpatialSegmentationIdc:o}},Wl=(t,e,i)=>{let a=!1,r=!1,n=!1;a=t.readBits(1)===1,r=t.readBits(1)===1,(a||r)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let o=0;o<=i;o++){const s=t.readBits(1)===1;let c=!0;s||(c=t.readBits(1)===1);let f=!1;c?K(t):f=t.readBits(1)===1;let l=1;f||(l=K(t)+1),a&&Er(t,l,n),r&&Er(t,l,n)}},Er=(t,e,i)=>{for(let a=0;a<e;a++)K(t),K(t),i&&(K(t),K(t)),t.readBits(1)},ql=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const a of i.nalUnits){e.push(a.length>>8&255),e.push(a.length&255);for(let r=0;r<a.length;r++)e.push(a[r])}}return new Uint8Array(e)};var Pr;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Pr||(Pr={}));const Dl=function*(t){const e=new _e(t),i=()=>{let a=0;for(let r=0;r<8;r++){const n=e.readAlignedByte();if(a|=(n&127)<<r*7,!(n&128))break;if(r===7&&n&128)return null}return a>=2**32-1?null:a};for(;e.getBitsLeft()>=8;){e.skipBits(1);const a=e.readBits(4),r=e.readBits(1),n=e.readBits(1);e.skipBits(1),r&&e.skipBits(8);let o;if(n){const s=i();if(s===null)return;o=s}else o=Math.floor(e.getBitsLeft()/8);N(e.pos%8===0),yield{type:a,data:t.subarray(e.pos/8,e.pos/8+o)},e.skipBits(o*8)}},$l=t=>{const e=si(t),i=e.getUint8(9),a=e.getUint16(10,!0),r=e.getUint32(12,!0),n=e.getInt16(16,!0),o=e.getUint8(18);let s=null;return o&&(s=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:a,inputSampleRate:r,outputGain:n,channelMappingFamily:o,channelMappingTable:s}},jl=(t,e,i)=>{switch(t){case"avc":{for(const a of Pl(i,e)){const r=i[a.offset],n=Tr(r);if(n>=nt.NON_IDR_SLICE&&n<=nt.SLICE_DPC)return"delta";if(n===nt.IDR)return"key";if(n===nt.SEI&&(!nl()||ol()>=144)){const o=i.subarray(a.offset,a.offset+a.length),s=hi(o);let c=1;do{let f=0;for(;;){const y=s[c++];if(y===void 0||(f+=y,y<255))break}let l=0;for(;;){const y=s[c++];if(y===void 0||(l+=y,y<255))break}if(f===6){const y=new _e(s);y.pos=8*c;const d=K(y),b=y.readBits(1);if(d===0&&b===1)return"key"}c+=l}while(c<s.length-1)}}return"delta"}case"hevc":{for(const a of Rl(i,e)){const r=Ki(i[a.offset]);if(r<Fe.BLA_W_LP)return"delta";if(r<=Fe.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const a=new _e(i);if(a.readBits(2)!==2)return null;const r=a.readBits(1);return(a.readBits(1)<<1)+r===3&&a.skipBits(1),a.readBits(1)?null:a.readBits(1)===0?"key":"delta"}case"av1":{let a=!1;for(const{type:r,data:n}of Dl(i))if(r===1){const o=new _e(n);o.skipBits(4),a=!!o.readBits(1)}else if(r===3||r===6||r===7){if(a)return"key";const o=new _e(n);return o.readBits(1)?null:o.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:kt(t),N(!1)}};var Br;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Br||(Br={}));const Vl=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const a=e.readBits(6),r=e.readBits(5);if(r>8)return null;const n=e.readBits(3),o=e.readBits(3);(o&1)!==0&&o!==1&&e.skipBits(2),(o&4)!==0&&e.skipBits(2),o===2&&e.skipBits(2);const s=e.readBits(1),c=Math.floor(a/2);return{fscod:i,bsid:r,bsmod:n,acmod:o,lfeon:s,bitRateCode:c}},Gl=[1,2,3,6],Kl=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const a=e.readBits(11),r=e.readBits(2);let n=0,o;r===3?(n=e.readBits(2),o=3):o=e.readBits(2);const s=e.readBits(3),c=e.readBits(1),f=e.readBits(5);if(f<11||f>16)return null;const l=Gl[o];let p;return r<3?p=Cl[r]/1e3:p=El[n]/1e3,{dataRate:Math.round((a+1)*p/(l*16)),substreams:[{fscod:r,fscod2:n,bsid:f,bsmod:0,acmod:s,lfeon:c,numDepSub:0,chanLoc:0}]}},Xl=1683496997,Zl=18,Ql=10,Mr=32,Yl=20,Jl=8,ef=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],tf=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],af=[16,16,20,20,0,24,24,0],Ir=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],rf=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],nf=8,of=[32e3,44100,48e3,0],sf=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],cf=[512,1024,2048,4096],lf=t=>{const e=ff(t),i=si(t);let a=e?Math.ceil(e.frameSize/4)*4:0,r=null;for(;a+4<=t.length&&i.getUint32(a)===Xl;){const o=df(t.subarray(a));if(!o)break;r??=o,a+=o.frameSize}if(e)return{frameSize:r?a:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:r!==null};if(!r?.asset)return null;const{asset:n}=r;return{frameSize:a,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},ff=t=>{if(t.length<Zl||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new _e(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Mr-1)return null;const i=e.readBits(1),a=e.readBits(7)+1;if(a%Jl!==0)return null;const r=e.readBits(14)+1;if(r<96)return null;const n=e.readBits(6);if(n>=Ir.length)return null;const o=ef[e.readBits(4)];if(o===0)return null;const s=tf[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const f=af[e.readBits(3)];if(f===0)return null;const l=c!==0;return{frameSize:r,sampleRate:o,numberOfChannels:Ir[n]+(l?1:0),sampleCount:a*Mr,channelLayout:rf[n]|(l?nf:0),amode:n,lfePresent:l,bitRate:s,pcmResolution:f}},df=t=>{if(t.length<Ql||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new _e(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),a=e.readBits(1),r=8+4*a,n=16+4*a;e.skipBits(r);const o=e.readBits(n)+1,s={frameSize:o,asset:null};if(!e.readBits(1))return s;const c=of[e.readBits(2)],f=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const l=e.readBits(3)+1,p=e.readBits(3)+1,y=[];for(let v=0;v<l;v++)y.push(e.readBits(i+1));for(const v of y)e.skipBits(8*el(v));if(e.readBits(1)){e.skipBits(2);const v=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*v)}for(let v=0;v<p;v++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const d=e.readBits(5)+1,b=sf[e.readBits(4)],u=e.readBits(8)+1;let h=0;if(e.readBits(1)&&(u>2&&e.skipBits(1),u>6&&e.skipBits(1),e.readBits(1))){const v=e.readBits(2)+1<<2;h=e.readBits(v)}return c===0||e.getBitsLeft()<0?s:{frameSize:o,asset:{sampleRate:b,numberOfChannels:u,sampleCount:Math.round(f*b/c),channelLayout:h,pcmResolution:d}}},uf=t=>{const e=new Uint8Array(Yl),i=si(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const a=t.core&&!t.hasExtensions?1:0,r=new _e(e);return r.seekToByte(13),r.writeBits(2,Math.max(cf.indexOf(t.sampleCount),0)),r.writeBits(5,a),r.writeBits(1,t.core?.lfePresent?1:0),r.writeBits(6,t.core?.amode??0),r.writeBits(14,t.core?t.core.frameSize-1:0),r.writeBits(1,0),r.writeBits(3,0),r.writeBits(16,t.channelLayout),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ar=new Uint8Array(0);class vt{constructor(e,i,a,r,n=-1,o,s){if(this.data=e,this.type=i,this.timestamp=a,this.duration=r,this.sequenceNumber=n,e===Ar&&o===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(o===void 0&&(o=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(a))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(r)||r<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(o)||o<0)throw new TypeError("byteLength must be a non-negative integer.");if(s!==void 0&&(typeof s!="object"||!s))throw new TypeError("sideData, when provided, must be an object.");if(s?.alpha!==void 0&&!(s.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(s?.alphaByteLength!==void 0&&(!Number.isInteger(s.alphaByteLength)||s.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=o,this.sideData=s??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Ar}get microsecondTimestamp(){return Math.trunc(_t*this.timestamp)}get microsecondDuration(){return Math.trunc(_t*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const a=new Uint8Array(e.byteLength);return e.copyTo(a),new vt(a,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new vt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const hf=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const a=[...new Set(t.codecStrings)];i+=`; codecs="${a.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xi=8,Rr=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const mf=7,pf=9,zr=t=>{const e=t.filePos,i=Mf(t,9),a=new _e(i);if(a.readBits(12)!==4095||(a.skipBits(1),a.readBits(2)!==0))return null;const o=a.readBits(1),s=a.readBits(2)+1,c=a.readBits(4);if(c===15)return null;a.skipBits(1);const f=a.readBits(3);if(f===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");a.skipBits(1),a.skipBits(1),a.skipBits(1),a.skipBits(1);const l=a.readBits(13);a.skipBits(11);const p=a.readBits(2)+1;if(p!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let y=null;return o===1?t.filePos-=2:y=a.readBits(16),{objectType:s,samplingFrequencyIndex:c,channelConfiguration:f,frameLength:l,numberOfAacFrames:p,crcCheck:y,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var vf=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,r;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(r=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");r&&(a=function(){try{r.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},gf=(function(t){return function(e){function i(o){e.error=e.hasError?new t(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var a,r=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&r===1)return r=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var o=a.dispose.call(a.value);if(a.async)return r|=2,Promise.resolve(o).then(n,function(s){return i(s),n()})}else r|=1}catch(s){i(s)}if(r===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});sl();let Fr=-1/0,Or=-1/0,Zi=null;typeof FinalizationRegistry<"u"&&(Zi=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Fr>=1e3&&(ge._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Fr=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Or>=1e3&&(ge._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Or=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class gt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Qi=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],bf=new Set(Qi);class Be{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(_t*this.timestamp)}get microsecondDuration(){return Math.trunc(_t*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!bf.has(i.format))throw new TypeError("init.format must be one of: "+Qi.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Di(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const a=i.layout??xf(i.format,i.codedWidth,i.codedHeight);let r=i.colorSpace??null;r===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?r={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:r={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?Ne(e):Ne(e).slice(),this._layout=a,this.colorSpace=new Yi(r)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Di(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new Yi(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Di(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Be(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*_t),duration:Math.trunc((i.duration??0)*_t)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let a=0,r=0;if("naturalWidth"in e?(a=e.naturalWidth,r=e.naturalHeight):"videoWidth"in e?(a=e.videoWidth,r=e.videoHeight):"width"in e&&(a=Number(e.width),r=Number(e.height)),!a||!r)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:a,height:r},o=new OffscreenCanvas(n.width,n.height),s=o.getContext("2d",{alpha:fr(),willReadFrequently:!0});if(!s)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");s.drawImage(e,-n.left,-n.top),this._data=o,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new Yi({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof gt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Qi.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=ur({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Zi?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return N(this._data!==null),this._data instanceof gt?new Be(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):qt(this._data)?new Be(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(N(this._layout),new Be(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Be(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Zi?.unregister(this),this._data instanceof gt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):qt(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Nr(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return qt(this._data)?this._data.allocationSize(e):Wr(this,e).allocationSize}async copyTo(e,i={}){if(!Ui(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Nr(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(N(this._data!==null),qt(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof gt){const f={stack:[],error:void 0,hasError:!1};try{const l=vf(f,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(l instanceof Be))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(l.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${l.format}' instead.`);return await l.copyTo(e,i)}catch(l){f.error=l,f.hasError=!0}finally{gf(f)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const f=this.toVideoFrame(),l=await f.copyTo(e,i);return f.close(),l}const a=Wr(this,i);N(this.format);const r=Ne(e);if(r.byteLength<a.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${a.allocationSize}, Available: ${r.byteLength}`);const n=mi(this.format);let o;if(this._data instanceof gt){let f=this._data.getDataPlanes();if(f instanceof Promise&&(f=await f),!Array.isArray(f)||f.some(l=>!(l.data instanceof Uint8Array)||!Number.isInteger(l.stride)||l.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');o=f}else if(this._data instanceof Uint8Array)N(this._layout),N(this._layout.length===n.length),o=this._layout.map((f,l)=>{const p=Math.ceil(this.codedHeight/n[l].heightDivisor);return{data:this._data.subarray(f.offset,f.offset+f.stride*p),stride:f.stride}});else{const l=this._data.getContext("2d");N(l);const p=l.getImageData(0,0,this.codedWidth,this.codedHeight);o=[{data:Ne(p.data),stride:4*this.codedWidth}]}const s=[],c=n.length;for(let f=0;f<c;f++){const l=a.computedLayouts[f],p=o[f].stride,y=o[f].data;let d=l.sourceTop*p;d+=l.sourceLeftBytes;let b=l.destinationOffset;const u=l.sourceWidthBytes,h={offset:b,stride:l.destinationStride};for(let v=0;v<l.sourceHeight;v++){if(d+u>y.byteLength)throw new Error("Source buffer OOB read.");if(b+u>r.byteLength)throw new Error("Destination buffer OOB write.");const w=y.subarray(d,d+u);r.set(w,b),d+=p,b+=l.destinationStride}s.push(h)}if(i.format!==void 0){const f=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),l=this.format.includes("X")&&i.format.includes("A");if(f||l)for(let p=0;p<a.allocationSize;p+=4){if(f){const y=r[p],d=r[p+2];r[p]=d,r[p+2]=y}l&&(r[p+3]=255)}}return s}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof gt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((o,s)=>o+s.data.byteLength,0),a=new Uint8Array(i);let r=0;const n=[];for(const o of e)a.set(o.data,r),n.push(r),r+=o.data.byteLength;return new VideoFrame(a,{format:this.format,layout:e.map((o,s)=>({offset:n[s],stride:o.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return qt(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(N(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,a,r,n,o,s,c,f){let l=0,p=0,y=this.displayWidth,d=this.displayHeight,b=0,u=0,h=this.displayWidth,v=this.displayHeight;if(o!==void 0?(l=i,p=a,y=r,d=n,b=o,u=s,c!==void 0?(h=c,v=f):(h=y,v=d)):(b=i,u=a,r!==void 0&&(h=r,v=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(l))throw new TypeError("sx must be a number.");if(!Number.isFinite(p))throw new TypeError("sy must be a number.");if(!Number.isFinite(y)||y<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(d)||d<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(b))throw new TypeError("dx must be a number.");if(!Number.isFinite(u))throw new TypeError("dy must be a number.");if(!Number.isFinite(h)||h<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:l,sy:p,sWidth:y,sHeight:d}=this._rotateSourceRegion(l,p,y,d,this.rotation));const w=this.toCanvasImageSource();e.save();const x=b+h/2,S=u+v/2;e.translate(x,S),e.rotate(this.rotation*Math.PI/180);const C=this.rotation%180===0?1:h/v;e.scale(1/C,C),e.drawImage(w,l,p,y,d,-h/2,-v/2,h,v),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Ji(i.crop,"options.");const a=e.canvas.width,r=e.canvas.height,n=i.rotation??this.rotation,[o,s]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let c=i.crop;c&&(c=Ur(c,o,s));let f,l,p,y;const{sx:d,sy:b,sWidth:u,sHeight:h}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??o,i.crop?.height??s,n);if(i.fit==="fill")f=0,l=0,p=a,y=r;else{const[w,x]=i.crop?[i.crop.width,i.crop.height]:[o,s],S=i.fit==="contain"?Math.min(a/w,r/x):Math.max(a/w,r/x);p=w*S,y=x*S,f=(a-p)/2,l=(r-y)/2}e.save();const v=n%180===0?1:p/y;e.translate(a/2,r/2),e.rotate(n*Math.PI/180),e.scale(1/v,v),e.translate(-a/2,-r/2),e.drawImage(this.toCanvasImageSource(),d,b,u,h,f,l,p,y),e.restore()}_rotateSourceRegion(e,i,a,r,n){return n===90?[e,i,a,r]=[i,this.squarePixelHeight-e-a,r,a]:n===180?[e,i]=[this.squarePixelWidth-e-a,this.squarePixelHeight-i-r]:n===270&&([e,i,a,r]=[this.squarePixelWidth-i-r,e,r,a]),{sx:e,sy:i,sWidth:a,sHeight:r}}_drawWithFitAndMipmapping(e,i,a){const r=e.width,n=e.height,[o,s]=a.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=a.crop?a.crop.width:o,f=a.crop?a.crop.height:s;let l=0;2*r<c&&2*n<f&&(l=Math.floor(Math.log2(Math.min(c/r,f/n))));const p=r*2**l,y=n*2**l,{canvas:d,context:b,isNew:u}=l>0?Lr(p,y):{canvas:e,context:i,isNew:a.targetIsFresh};b.imageSmoothingQuality="high",a.fillBlack?(b.fillStyle="black",b.fillRect(0,0,p,y)):u||b.clearRect(0,0,p,y),this.drawWithFit(b,{fit:a.fit,rotation:a.rotation,crop:a.crop}),b.globalCompositeOperation="copy";for(let h=l;h>1;h--){const v=r*2**h,w=n*2**h;b.drawImage(d,0,0,v,w,0,0,v/2,w/2)}b.globalCompositeOperation="source-over",l>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(d,0,0,2*r,2*n,0,0,r,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof gt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Ji(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=Kc(this.rotation+(e.rotate??0)),[a,r]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=Ur(n,a,r));const o=n?n.width:a,s=n?n.height:r,c=o/s;let f,l;e.width!==void 0&&e.height===void 0?(f=e.width,l=f/c):e.width===void 0&&e.height!==void 0?(l=e.height,f=l*c):e.width!==void 0&&e.height!==void 0?(f=e.width,l=e.height):(f=o,l=s),f=cr(f,e.roundDimensionsTo??1),l=cr(l,e.roundDimensionsTo??1);const p={width:f,height:l,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:a,height:r},alpha:e.alpha??"keep"};for(const u of yf){let h=u(this,p);if(h instanceof Promise&&(h=await h),h!==null)return h}const{canvas:y,context:d,isNew:b}=Lr(p.width,p.height);return this._drawWithFitAndMipmapping(y,d,{fit:p.fit,rotation:p.rotation,crop:p.crop,targetIsFresh:b,fillBlack:p.alpha==="discard"}),new Be(y,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const yf=[],wf=3,Wt=[];let Hr=0;const Lr=(t,e)=>{for(const r of Wt)if(r.canvas.width===t&&r.canvas.height===e)return r.age=Hr++,{canvas:r.canvas,context:r.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const a=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!a)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Wt.length>=wf&&Wt.splice(cl(Wt,r=>r.age),1),Wt.push({canvas:i,context:a,age:Hr++}),{canvas:i,context:a,isNew:!0}};class Yi{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(ci);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const a=Object.keys(li);if(e.transfer!=null&&!a.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${a.join(", ")}.`);const r=Object.keys(fi);if(e.matrix!=null&&!r.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${r.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const qt=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Ur=(t,e,i)=>{const a=Math.min(t.left,e),r=Math.min(t.top,i),n=Math.min(t.width,e-a),o=Math.min(t.height,i-r);return N(n>=0),N(o>=0),{left:a,top:r,width:n,height:o}},Ji=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Nr=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},xf=(t,e,i)=>{const a=mi(t),r=[];let n=0;for(const o of a){const s=Math.ceil(e/o.widthDivisor),c=Math.ceil(i/o.heightDivisor),f=s*o.sampleBytes,l=f*c;r.push({offset:n,stride:f}),n+=l}return r},mi=t=>{const e=(i,a,r,n,o)=>{const s=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:a,widthDivisor:r,heightDivisor:n},{sampleBytes:a,widthDivisor:r,heightDivisor:n}];return o&&s.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),s};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:kt(t),N(!1)}},Wr=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},a=e.rect,r=kf(i,a,t.codedWidth,t.codedHeight,t.format),n=e.layout;let o;if(!e.format||e.format===t.format)o=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))o=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Tf(r,o,n)},kf=(t,e,i,a,r)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>a)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!_f(r,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},_f=(t,e)=>{if(t===null)return!0;const i=mi(t);for(let a=0;a<i.length;a++){const r=i[a],n=r.widthDivisor,o=r.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%o!==0)return!1}return!0},Tf=(t,e,i)=>{const a=mi(e),r=a.length;if(i!==void 0&&i.length!==r)throw new TypeError(`Layout must have ${r} planes.`);let n=0;const o=[],s=[];for(let c=0;c<r;c++){const f=a[c],l=f.sampleBytes,p=f.widthDivisor,y=f.heightDivisor,d={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(d.sourceTop=Math.ceil(Math.trunc(t.y||0)/y),d.sourceHeight=Math.ceil(Math.trunc(t.height||0)/y),d.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/p)*l,d.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/p)*l,i!==void 0){const h=i[c];if(h.stride<d.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);d.destinationOffset=h.offset,d.destinationStride=h.stride}else d.destinationOffset=n,d.destinationStride=d.sourceWidthBytes;const u=d.destinationStride*d.sourceHeight+d.destinationOffset;if(u>4294967295)throw new TypeError("Allocation size exceeds limit.");s.push(u),n=Math.max(n,u);for(let h=0;h<c;h++){const v=o[h];if(!(s[c]<=v.destinationOffset||s[h]<=d.destinationOffset))throw new TypeError("Planes overlap.")}o.push(d)}return{allocationSize:n,computedLayouts:o}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const qr=new Map,Sf=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!rt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${rt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof dt))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof dt)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Ji(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");Dr(t.codec,t)},Dr=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Gi(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},$r=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),a=(n,o,s)=>({codec:t.fullCodecString??vl(t.codec,t.width,t.height,s,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:o,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...bl(t.codec)}),r=[];return i.quantizer!==null&&r.push({config:a(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&r.push({config:a(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),N(r.length>0),r};class dt{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in jr):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?jr[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,a,r){const n=Cf[e];let o=null,s=this._bitrateMode??r??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else o=this._quantizer,this._bitrate===void 0&&(s="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(N(this._quality!==void 0),o=sr(Math.round(Yc(n.worst,n.best,this._quality)),n.min,n.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let f=this._quality;f===void 0&&(N(o!==null&&n),f=sr((o-n.worst)/(n.best-n.worst),0,1)),c=Vr(e,i,a,ea(f))}return{quantizer:o,bitrate:c,bitrateMode:s}}_toVideoBitrate(e,i,a){return this._bitrate!==void 0?this._bitrate:(N(this._quality!==void 0),Vr(e,i,a,ea(this._quality)))}_toAudioBitrate(e){if(pt.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=ea(this._quality),r={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!r)throw new Error(`Unhandled codec: ${e}`);let n=r*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((s,c)=>Math.abs(c-n)<Math.abs(s-n)?c:s):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((s,c)=>Math.abs(c-n)<Math.abs(s-n)?c:s)),Math.round(n/1e3)*1e3}}const jr={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Cf={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},ea=t=>.3*Math.exp(2.5538*t),Vr=(t,e,i,a)=>{const r=e*i,n=1920*1080,o=3e6,s=Math.pow(r/n,.95),c=o*s,f={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/o},p=c*f[t]*a;return Math.ceil(p/1e3)*1e3},Gr=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};N(!1)},Ef=async(t,e={})=>{const{width:i=1280,height:a=720,quality:r,bitrate:n,...o}=e;if(!rt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(a)||a<=0)throw new TypeError("height must be a positive integer.");if(r!==void 0&&!(r instanceof dt))throw new TypeError("quality, when provided, must be a Quality.");if(r!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof dt)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");Dr(t,o);const s=Kr(r,n)??new dt("medium");let c;try{c=$r({codec:t,width:i,height:a,quality:s,framerate:void 0,...o,alpha:"discard"})}catch{return!1}const f=JSON.stringify(c),l=qr.get(f);if(l)return l;const p=(async()=>{for(const{config:d}of c)if(Xr.some(b=>b.supports(t,d)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||a%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:d,quantizer:b}of c){try{if(!(await VideoEncoder.isConfigSupported(d)).supported)continue}catch{continue}if(!fr()||await new Promise(async h=>{try{const v=new VideoEncoder({output:()=>{},error:()=>h(!1)});v.configure(d);const w=new Uint8Array(i*a*4),x=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:a,timestamp:0});v.encode(x,b!==null?Gr(t,b):void 0),x.close(),await v.flush(),h(!0)}catch{h(!1)}}))return!0}return!1})();return qr.set(f,p),p},Kr=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof dt?e:new dt({bitrate:e})},Pf=async(t,e)=>{for(const i of t)if(await Ef(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xr=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Dt{constructor(e,i,a,r,n){this.bytes=e,this.view=i,this.offset=a,this.start=r,this.end=n,this.bufferPos=r-a}static tempFromBytes(e){return new Dt(e,si(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Dt(this.bytes,this.view,this.offset,e,e+i)}}const Bf=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Mf=(t,e)=>{Bf(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class If{constructor(e){this.mutex=new rr,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,a){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let r=this.trackTimestampInfo.get(e);if(r){if(a&&(r.maxTimestampBeforeLastKeyPacket=r.maxTimestamp),r.maxTimestampBeforeLastKeyPacket!==null&&i<r.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${r.maxTimestampBeforeLastKeyPacket}s.`);r.maxTimestamp=Math.max(r.maxTimestamp,i)}else{if(!a)throw new Error("First packet must be a key packet.");r={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,r)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Zr=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,Af=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),a=Math.floor(t%(60*1e3)/1e3),r=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+"."+r.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class pi{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const a=this.writer.getPos(),r=e.size??a-i;this.writer.seek(i),this.writeBoxHeader(e,r),this.writer.seek(a)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);N(i!==void 0);const a=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(a)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const a of e.children)a&&(i+=this.measureBox(a));return i}}}const ce=new Uint8Array(8),Oe=new DataView(ce.buffer),be=t=>[(t%256+256)%256],ae=t=>(Oe.setUint16(0,t,!1),[ce[0],ce[1]]),ta=t=>(Oe.setInt16(0,t,!1),[ce[0],ce[1]]),Qr=t=>(Oe.setUint32(0,t,!1),[ce[1],ce[2],ce[3]]),j=t=>(Oe.setUint32(0,t,!1),[ce[0],ce[1],ce[2],ce[3]]),ot=t=>(Oe.setInt32(0,t,!1),[ce[0],ce[1],ce[2],ce[3]]),Qe=t=>(Oe.setUint32(0,Math.floor(t/2**32),!1),Oe.setUint32(4,t,!1),[ce[0],ce[1],ce[2],ce[3],ce[4],ce[5],ce[6],ce[7]]),Rf=t=>(Oe.setInt32(0,Math.floor(t/2**32),!1),Oe.setUint32(4,t,!1),[ce[0],ce[1],ce[2],ce[3],ce[4],ce[5],ce[6],ce[7]]),Yr=t=>(Oe.setInt16(0,2**8*t,!1),[ce[0],ce[1]]),We=t=>(Oe.setInt32(0,2**16*t,!1),[ce[0],ce[1],ce[2],ce[3]]),ia=t=>(Oe.setInt32(0,2**30*t,!1),[ce[0],ce[1],ce[2],ce[3]]),aa=(t,e)=>{const i=[];let a=t;do{let r=a&127;a>>=7,i.length>0&&(r|=128),i.push(r)}while(a>0||e);return i.reverse()},he=(t,e=!1)=>{const i=Array(t.length).fill(null).map((a,r)=>t.charCodeAt(r));return e&&i.push(0),i},Jr=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),a=Math.round(Math.sin(e));return[i,a,0,-a,i,0,0,0,1]},en=Jr(0),tn=t=>[We(t[0]),We(t[1]),ia(t[2]),We(t[3]),We(t[4]),ia(t[5]),We(t[6]),We(t[7]),ia(t[8])],ie=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),le=(t,e,i,a,r)=>ie(t,[be(e),Qr(i),a??[]],r),zf=t=>t.isQuickTime?ie("ftyp",[he("qt  "),j(512),he("qt  ")]):t.fragmented?t.cmaf?ie("ftyp",[he("iso5"),j(512),he("iso5"),he("iso6"),he("mp41"),he("cmfc"),he("dash")]):ie("ftyp",[he("iso5"),j(512),he("iso5"),he("iso6"),he("mp41")]):ie("ftyp",[he("isom"),j(512),he("isom"),t.holdsAvc?he("avc1"):[],he("mp41")]),an=()=>ie("styp",[he("iso5"),j(0),he("iso5"),he("iso6"),he("mp41"),he("cmfc"),he("dash")]),rn=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),le("sidx",1,0,[j(1),j(De),Qe(ve(t.minWrittenTimestamp,De)),Qe(0),ae(0),ae(1),j(e&2147483647),j(ve(i,De)),j(0)])},vi=t=>({type:"mdat",largeSize:t}),Ff=t=>({type:"free",size:t}),$t=t=>ie("moov",void 0,[Of(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>Hf(e,t.creationTime)),t.isFragmented?w0(t.trackDatas):null,R0(t)]),Of=(t,e)=>{const i=Math.max(0,...e.map(o=>ve(gi(o),De)+ve(o.startTimestampOffset??0,De))),a=Math.max(0,...e.map(o=>o.track.id))+1,r=!ft(t)||!ft(i),n=r?Qe:j;return le("mvhd",+r,0,[n(t),n(t),j(De),n(i),We(1),Yr(1),Array(10).fill(0),tn(en),Array(24).fill(0),j(a)])},gi=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let a=0;a<t.samples.length;a++){const r=t.samples[a];r.timestamp<e&&(e=r.timestamp),r.timestamp+r.duration>i&&(i=r.timestamp+r.duration)}return e===1/0?0:i-e},Hf=(t,e)=>{const i=$0(t),a=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ie("trak",void 0,[Lf(t,e),a?Uf(t,t.startTimestampOffset):null,Nf(t,e),i.name!==void 0?ie("udta",void 0,[ie("name",[...Xe.encode(i.name)])]):null])},Lf=(t,e)=>{const i=ve(gi(t),De)+ve(t.startTimestampOffset??0,De),a=!ft(e)||!ft(i),r=a?Qe:j;let n;if(t.type==="video"){const c=t.track.metadata.rotation;n=Jr(c??0)}else n=en;let o=2;t.track.metadata.disposition?.default!==!1&&(o|=1);const s=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:kt(t);return le("tkhd",+a,o,[r(e),r(e),j(t.track.id),j(0),r(i),Array(8).fill(0),ae(0),ae(s),Yr(t.type==="audio"?1:0),ae(0),tn(n),We(t.type==="video"?t.info.width:0),We(t.type==="video"?t.info.height:0)])},Uf=(t,e)=>{const i=ve(e,De),a=ve(gi(t),De),r=!ft(i)||!ft(a),n=r?Qe:j,o=r?Rf:ot;return ie("edts",void 0,[le("elst",r?1:0,0,[j(2),n(i),o(-1),We(1),n(a),o(0),We(1)])])},Nf=(t,e)=>ie("mdia",void 0,[Wf(t,e),ra(!0,qf[t.type],Df[t.type]),$f(t)]),Wf=(t,e)=>{const i=ve(gi(t),t.timescale),a=!ft(e)||!ft(i),r=a?Qe:j;return le("mdhd",+a,0,[r(e),r(e),j(t.timescale),r(i),ae(dn(t.track.metadata.languageCode??Jc)),ae(0)])},qf={video:"vide",audio:"soun",subtitle:"text"},Df={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},ra=(t,e,i,a="\0\0\0\0")=>le("hdlr",0,0,[t?he("mhlr"):j(0),he(e),he(a),j(0),j(0),he(i,!0)]),$f=t=>ie("minf",void 0,[jf[t.type](),Vf(),Xf(t)]),jf={video:()=>le("vmhd",0,1,[ae(0),ae(0),ae(0),ae(0)]),audio:()=>le("smhd",0,0,[ae(0),ae(0)]),subtitle:()=>le("nmhd",0,0)},Vf=()=>ie("dinf",void 0,[Gf()]),Gf=()=>le("dref",0,0,[j(1)],[Kf()]),Kf=()=>le("url ",0,1),Xf=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ie("stbl",void 0,[Zf(t),h0(t),e?b0(t):null,e?y0(t):null,p0(t),v0(t),g0(t),m0(t)])},Zf=t=>{let e;if(t.type==="video")e=Qf(H0(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=fn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);N(i),e=a0(i,t)}else t.type==="subtitle"&&(e=d0(N0[t.track.source._codec],t));return N(e),le("stsd",0,0,[j(1)],[e])},Qf=(t,e)=>ie(t,[Array(6).fill(0),ae(1),ae(0),ae(0),Array(12).fill(0),ae(e.info.width),ae(e.info.height),j(4718592),j(4718592),j(0),ae(1),be(10),he("Mediabunny"),Array(21).fill(0),ae(e.info.hasAlphaChannel?32:24),ta(65535)],[L0[e.track.source._codec]?.(e)??null,Yf(e),Xc(e.info.decoderConfig.colorSpace)?Jf(e):null]),Yf=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ie("pasp",[j(t.info.pixelAspectRatio.num),j(t.info.pixelAspectRatio.den)]),Jf=t=>ie("colr",[he(t.muxer.isQuickTime?"nclc":"nclx"),ae(ci[t.info.decoderConfig.colorSpace.primaries]),ae(li[t.info.decoderConfig.colorSpace.transfer]),ae(fi[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:be((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),e0=t=>t.info.decoderConfig&&ie("avcC",[...Ne(t.info.decoderConfig.description)]),t0=t=>t.info.decoderConfig&&ie("hvcC",[...Ne(t.info.decoderConfig.description)]),nn=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),a=Number(i[1]),r=Number(i[2]),n=Number(i[3]),o=i[4]?Number(i[4]):1,s=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),c=(n<<4)+(o<<1)+s,f=i[5]?Number(i[5]):e.colorSpace?.primaries?ci[e.colorSpace.primaries]:2,l=i[6]?Number(i[6]):e.colorSpace?.transfer?li[e.colorSpace.transfer]:2,p=i[7]?Number(i[7]):e.colorSpace?.matrix?fi[e.colorSpace.matrix]:2;return le("vpcC",1,0,[be(a),be(r),be(c),be(f),be(l),be(p),ae(0)])},i0=t=>ie("av1C",gl(t.info.decoderConfig.codec)),a0=(t,e)=>{let i=0,a,r=16;const n=pt.includes(e.track.source._codec);if(n){const o=e.track.source._codec,{sampleSize:s}=Tt(o);r=8*s,r>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)a=[Array(6).fill(0),ae(1),ae(i),ae(0),j(0),ae(e.info.numberOfChannels),ae(r),ae(0),ae(0),ae(e.info.sampleRate<2**16?e.info.sampleRate:0),ae(0)];else{const o=n?0:-2;a=[Array(6).fill(0),ae(1),ae(i),ae(0),j(0),ae(e.info.numberOfChannels),ae(Math.min(r,16)),ta(o),ae(0),ae(e.info.sampleRate<2**16?e.info.sampleRate:0),ae(0),n?[j(1),j(r/8),j(e.info.numberOfChannels*r/8)]:[j(0),j(0),j(0)],j(2)]}return ie(t,a,[U0(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},na=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...be(e),...be(21),...Qr(0),...j(0),...j(0)];if(t.info.decoderConfig.description){const a=Ne(t.info.decoderConfig.description);i=[...i,...be(5),...aa(a.byteLength),...a]}return i=[...ae(1),...be(0),...be(4),...aa(i.length),...i,...be(6),...be(1),...be(2)],i=[...be(3),...aa(i.length),...i],le("esds",0,0,i)},ut=t=>ie("wave",void 0,[r0(t),n0(t),ie("\0\0\0\0")]),r0=t=>ie("frma",[he(fn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),n0=t=>{const{littleEndian:e}=Tt(t.track.source._codec);return ie("enda",[ae(+e)])},o0=t=>{let e=t.info.numberOfChannels,i=3840,a=t.info.sampleRate,r=0,n=0,o=new Uint8Array(0);const s=t.info.decoderConfig?.description;if(s){N(s.byteLength>=18);const c=Ne(s),f=$l(c);e=f.outputChannelCount,i=f.preSkip,a=f.inputSampleRate,r=f.outputGain,n=f.channelMappingFamily,f.channelMappingTable&&(o=f.channelMappingTable)}return ie("dOps",[be(0),be(e),ae(i),j(a),ta(r),be(n),...o])},s0=t=>{const e=t.info.decoderConfig?.description;N(e);const i=Ne(e);return le("dfLa",0,0,[...i.subarray(4)])},Ye=t=>{const{littleEndian:e,sampleSize:i}=Tt(t.track.source._codec),a=+e;return le("pcmC",0,0,[be(a),be(8*i)])},c0=t=>{N(t.info.primingPacket);const e=Vl(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),a=new _e(i);return a.writeBits(2,e.fscod),a.writeBits(5,e.bsid),a.writeBits(3,e.bsmod),a.writeBits(3,e.acmod),a.writeBits(1,e.lfeon),a.writeBits(5,e.bitRateCode),a.writeBits(5,0),ie("dac3",[...i])},l0=t=>{N(t.info.primingPacket);const e=Kl(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const o of e.substreams)i+=23,o.numDepSub>0?i+=9:i+=1;const a=Math.ceil(i/8),r=new Uint8Array(a),n=new _e(r);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const o of e.substreams)n.writeBits(2,o.fscod),n.writeBits(5,o.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,o.bsmod),n.writeBits(3,o.acmod),n.writeBits(1,o.lfeon),n.writeBits(3,0),n.writeBits(4,o.numDepSub),o.numDepSub>0?n.writeBits(9,o.chanLoc):n.writeBits(1,0);return ie("dec3",[...r])},f0=t=>{N(t.info.primingPacket);const e=lf(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ie("ddts",[...uf(e)])},d0=(t,e)=>ie(t,[Array(6).fill(0),ae(1)],[W0[e.track.source._codec](e)]),u0=t=>ie("vttC",[...Xe.encode(t.info.config.description)]),h0=t=>le("stts",0,0,[j(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[j(e.sampleCount),j(e.sampleDelta)])]),m0=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return le("stss",0,0,[j(e.length),e.map(([i])=>j(i+1))])},p0=t=>le("stsc",0,0,[j(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[j(e.firstChunk),j(e.samplesPerChunk),j(1)])]),v0=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Tt(t.track.source._codec);return le("stsz",0,0,[j(e*t.info.numberOfChannels),j(t.samples.reduce((i,a)=>i+ve(a.duration,t.timescale),0))])}return le("stsz",0,0,[j(0),j(t.samples.length),t.samples.map(e=>j(e.size))])},g0=t=>t.finalizedChunks.length>0&&Ke(t.finalizedChunks).offset>=2**32?le("co64",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>Qe(e.offset))]):le("stco",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>j(e.offset))]),b0=t=>le("ctts",1,0,[j(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[j(e.sampleCount),ot(e.sampleCompositionTimeOffset)])]),y0=t=>{let e=1/0,i=-1/0,a=1/0,r=-1/0;N(t.compositionTimeOffsetTable.length>0),N(t.samples.length>0);for(let o=0;o<t.compositionTimeOffsetTable.length;o++){const s=t.compositionTimeOffsetTable[o];e=Math.min(e,s.sampleCompositionTimeOffset),i=Math.max(i,s.sampleCompositionTimeOffset)}for(let o=0;o<t.samples.length;o++){const s=t.samples[o];a=Math.min(a,ve(s.timestamp,t.timescale)),r=Math.max(r,ve(s.timestamp+s.duration,t.timescale))}const n=Math.max(-e,0);return r>=2**31?null:le("cslg",0,0,[ot(n),ot(e),ot(i),ot(a),ot(r)])},w0=t=>ie("mvex",void 0,t.map(x0)),x0=t=>le("trex",0,0,[j(t.track.id),j(1),j(0),j(0),j(0)]),on=(t,e)=>ie("moof",void 0,[k0(t),...e.map(_0)]),k0=t=>le("mfhd",0,0,[j(t)]),sn=t=>{let e=0,i=0;const a=0,r=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|a<<8|r},_0=t=>ie("traf",void 0,[T0(t),S0(t),C0(t)]),T0=t=>{N(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],a={duration:i.timescaleUnitsToNextSample,size:i.size,flags:sn(i)};return le("tfhd",0,e,[j(t.track.id),j(a.duration),j(a.size),j(a.flags)])},S0=t=>(N(t.currentChunk),le("tfdt",1,0,[Qe(ve(t.currentChunk.startTimestamp,t.timescale))])),C0=t=>{N(t.currentChunk);const e=t.currentChunk.samples.map(u=>u.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(u=>u.size),a=t.currentChunk.samples.map(sn),r=t.currentChunk.samples.map(u=>ve(u.timestamp-u.decodeTimestamp,t.timescale)),n=new Set(e),o=new Set(i),s=new Set(a),c=new Set(r),f=s.size===2&&a[0]!==a[1],l=n.size>1,p=o.size>1,y=!f&&s.size>1,d=c.size>1||[...c].some(u=>u!==0);let b=0;return b|=1,b|=4*+f,b|=256*+l,b|=512*+p,b|=1024*+y,b|=2048*+d,le("trun",1,b,[j(t.currentChunk.samples.length),j(t.currentChunk.offset-t.currentChunk.moofOffset||0),f?j(a[0]):[],t.currentChunk.samples.map((u,h)=>[l?j(e[h]):[],p?j(i[h]):[],y?j(a[h]):[],d?ot(r[h]):[]])])},E0=t=>ie("mfra",void 0,[...t.map(P0),B0()]),P0=t=>le("tfra",1,0,[j(t.track.id),j(63),j(t.finalizedChunks.length),t.finalizedChunks.map(i=>[Qe(ve(i.samples[0].timestamp,t.timescale)),Qe(i.moofOffset),j(i.trafIndex+1),j(1),j(1)])]),B0=()=>le("mfro",0,0,[j(0)]),M0=()=>ie("vtte"),I0=(t,e,i,a,r)=>ie("vttc",void 0,[r!==null?ie("vsid",[ot(r)]):null,i!==null?ie("iden",[...Xe.encode(i)]):null,e!==null?ie("ctim",[...Xe.encode(Af(e))]):null,a!==null?ie("sttg",[...Xe.encode(a)]):null,ie("payl",[...Xe.encode(t)])]),A0=t=>ie("vtta",[...Xe.encode(t)]),R0=t=>{const e=[],i=t.format._options.metadataFormat??"auto",a=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const r=F0(a);r&&e.push(r)}else if(i==="mdta"){const r=O0(a);r&&e.push(r)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&z0(e,t.output._metadataTags);return e.length===0?null:ie("udta",void 0,e)},z0=(t,e)=>{for(const{key:i,value:a}of dr(e))switch(i){case"title":t.push(Je("©nam",a));break;case"description":t.push(Je("©des",a));break;case"artist":t.push(Je("©ART",a));break;case"album":t.push(Je("©alb",a));break;case"albumArtist":t.push(Je("albr",a));break;case"genre":t.push(Je("©gen",a));break;case"date":t.push(Je("©day",a.toISOString().slice(0,10)));break;case"comment":t.push(Je("©cmt",a));break;case"lyrics":t.push(Je("©lyr",a));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:kt(i)}if(e.raw)for(const i in e.raw){const a=e.raw[i];a==null||i.length!==4||t.some(r=>r.type===i)||(typeof a=="string"?t.push(Je(i,a)):a instanceof Uint8Array&&t.push(ie(i,Array.from(a))))}},Je=(t,e)=>{const i=Xe.encode(e);return ie(t,[ae(i.length),ae(dn("und")),Array.from(i)])},cn={"image/jpeg":13,"image/png":14,"image/bmp":27},ln=(t,e)=>{const i=[];for(const{key:a,value:r}of dr(t))switch(a){case"title":i.push({key:e?"title":"©nam",value:qe(r)});break;case"description":i.push({key:e?"description":"©des",value:qe(r)});break;case"artist":i.push({key:e?"artist":"©ART",value:qe(r)});break;case"album":i.push({key:e?"album":"©alb",value:qe(r)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:qe(r)});break;case"comment":i.push({key:e?"comment":"©cmt",value:qe(r)});break;case"genre":i.push({key:e?"genre":"©gen",value:qe(r)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:qe(r)});break;case"date":i.push({key:e?"date":"©day",value:qe(r.toISOString().slice(0,10))});break;case"images":for(const n of r)n.kind==="coverFront"&&i.push({key:"covr",value:ie("data",[j(cn[n.mimeType]??0),j(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${r}/${t.tracksTotal}`:r.toString();i.push({key:"track",value:qe(n)})}else i.push({key:"trkn",value:ie("data",[j(0),j(0),ae(0),ae(r),ae(t.tracksTotal??0),ae(0)])});break;case"discNumber":e||i.push({key:"disc",value:ie("data",[j(0),j(0),ae(0),ae(r),ae(t.discsTotal??0),ae(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:kt(a)}if(t.raw)for(const a in t.raw){const r=t.raw[a];r==null||!e&&a.length!==4||i.some(n=>n.key===a)||(typeof r=="string"?i.push({key:a,value:qe(r)}):r instanceof Uint8Array?i.push({key:a,value:ie("data",[j(0),j(0),Array.from(r)])}):r instanceof mr&&i.push({key:a,value:ie("data",[j(cn[r.mimeType]??0),j(0),Array.from(r.data)])}))}return i},F0=t=>{const e=ln(t,!1);return e.length===0?null:le("meta",0,0,void 0,[ra(!1,"mdir","","appl"),ie("ilst",void 0,e.map(i=>ie(i.key,void 0,[i.value])))])},O0=t=>{const e=ln(t,!0);return e.length===0?null:ie("meta",void 0,[ra(!1,"mdta",""),le("keys",0,0,[j(e.length)],e.map(i=>ie("mdta",[...Xe.encode(i.key)]))),ie("ilst",void 0,e.map((i,a)=>{const r=String.fromCharCode(...j(a+1));return ie(r,void 0,[i.value])}))])},qe=t=>ie("data",[j(1),j(0),...Xe.encode(t)]),H0=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},L0={avc:e0,hevc:t0,vp8:nn,vp9:nn,av1:i0,prores:null},fn=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},U0=(t,e)=>{switch(t){case"aac":return na;case"mp3":return na;case"opus":return o0;case"vorbis":return na;case"flac":return s0;case"ac3":return c0;case"eac3":return l0;case"dts":return f0}if(e)switch(t){case"pcm-s24":return ut;case"pcm-s24be":return ut;case"pcm-s32":return ut;case"pcm-s32be":return ut;case"pcm-f32":return ut;case"pcm-f32be":return ut;case"pcm-f64":return ut;case"pcm-f64be":return ut}else switch(t){case"pcm-s16":return Ye;case"pcm-s16be":return Ye;case"pcm-s24":return Ye;case"pcm-s24be":return Ye;case"pcm-s32":return Ye;case"pcm-s32be":return Ye;case"pcm-f32":return Ye;case"pcm-f32be":return Ye;case"pcm-f64":return Ye;case"pcm-f64be":return Ye}return null},N0={webvtt:"wvtt"},W0={webvtt:u0},dn=t=>{N(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class oa{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){N(!this.started),this.target._start(),this.started=!0}write(e){N(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return N(this.started&&!this.finalized),this.target._flush()}async finalize(){N(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const a=i+e.byteLength-this.trackedStart;let r=this.trackedWrites.byteLength;for(;r<a;)r*=2;if(r!==this.trackedWrites.byteLength){const n=new Uint8Array(r);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class st extends $i{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new q0(this,e)}}const sa=2**16,ca=2**32;class bi extends st{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(sa,{maxByteLength:ca})}catch{this._buffer=new ArrayBuffer(sa),this._supportsResize=!1}else this._buffer=new ArrayBuffer(sa);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>ca)throw new Error(`ArrayBuffer exceeded maximum size of ${ca} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const a=new ArrayBuffer(i),r=new Uint8Array(a);r.set(this._bytes,0),this._buffer=a,this._bytes=r}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class q0 extends st{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class la{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const De=57600,D0=2082844800,$0=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ve=(t,e,i=!0)=>{const a=t*e;return i?Math.round(a):a};class j0 extends If{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new bi,this.auxWriter=new oa(this.auxTarget,!1),this.auxBoxWriter=new pi(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=or(),this.creationTime=Math.floor(Date.now()/1e3)+D0,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof gn,this.isCmaf=i instanceof vn,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof vn?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(a=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":a instanceof bi),this.boxWriter=new pi(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof bi?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const a=await this.output._getInitTarget(),r=new oa(a,!0);r.start(),this.initWriter=r,this.initBoxWriter=new pi(r)}const i=this.output.tracks.some(a=>a.isVideoTrack()&&a.source._codec==="avc");{const a=this.initBoxWriter??this.boxWriter;if(N(a),this.formatOptions.onFtyp&&a.writer.startTrackingWrites(),a.writeBox(zf({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:r,start:n}=a.writer.stopTrackingWrites();this.formatOptions.onFtyp(r,n)}this.ftypSize=a.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const a of this.output.tracks)if(a.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(N(this.writer),N(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=vi(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const a of this.output.tracks)a.isVideoTrack()&&a.metadata.decoderConfig?this.getVideoTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig}):a.isAudioTrack()&&a.metadata.decoderConfig&&this.getAudioTrackData(a,a.metadata.primingPacket??null,{decoderConfig:a.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return hf({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,a){const r=this.trackDatas.find(d=>d.track===e);if(r)return r;xr(a,e.source._codec),N(a),N(a.decoderConfig);const n={...a.decoderConfig};N(n.codedWidth!==void 0),N(n.codedHeight!==void 0);let o=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const d=Ml(i.data);if(!d)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=Il(d),o=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const d=Fl(i.data);if(!d)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=ql(d),o=!0}const s=al(1/(e.metadata.frameRate??De),1e6).den,c=n.displayAspectWidth,f=n.displayAspectHeight,l=c===void 0||f===void 0?{num:1,den:1}:ur({num:c*n.codedHeight,den:f*n.codedWidth}),p=n.codec==="ap4h"||n.codec==="ap4x",y={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:l,decoderConfig:n,requiresAnnexBTransformation:o,hasAlphaChannel:p},timescale:s,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(y),this.trackDatas.sort((d,b)=>d.track.id-b.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),y}getAudioTrackData(e,i,a){const r=this.trackDatas.find(c=>c.track===e);if(r)return r;kr(a,e.source._codec),N(a),N(a.decoderConfig);const n={...a.decoderConfig};let o=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=zr(Dt.tempFromBytes(i.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const f=pr[c.samplingFrequencyIndex],l=vr[c.channelConfiguration];if(f===void 0||l===void 0)throw new Error("Invalid ADTS frame header.");n.description=ml({objectType:c.objectType,sampleRate:f,numberOfChannels:l}),o=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const s={muxer:this,track:e,type:"audio",info:{numberOfChannels:a.decoderConfig.numberOfChannels,sampleRate:a.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&pt.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:o,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(s),this.trackDatas.sort((c,f)=>c.track.id-f.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),s}getSubtitleTrackData(e,i){const a=this.trackDatas.find(n=>n.track===e);if(a)return a;Sl(i),N(i),N(i.config);const r={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(r),this.trackDatas.sort((n,o)=>n.track.id-o.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}async addEncodedVideoPacket(e,i,a){const r=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,a);let o=i.data;if(n.info.requiresAnnexBTransformation){const c=[...Nt(o)].map(f=>o.subarray(f.offset,f.offset+f.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");o=Bl(c,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const s=this.createSampleForTrack(n,o,i.timestamp,i.duration,i.type);await this.registerSample(n,s)}finally{r()}}async addEncodedAudioPacket(e,i,a){const r=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,a);let o=i.data;if(n.info.requiresAdtsStripping){const l=zr(Dt.tempFromBytes(o));if(!l)throw new Error("Expected ADTS frame, didn't get one.");const p=l.crcCheck===null?mf:pf;o=o.subarray(p)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let s=i.timestamp,c=i.duration;if(n.info.requiresPcmTransformation){const p=Tt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(c=o.byteLength/p/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const y=s-n.info.expectedNextPcmPacketTimestamp;if(y<.01)s=n.info.expectedNextPcmPacketTimestamp;else{const d=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,y);s=n.info.expectedNextPcmPacketTimestamp+d}}n.info.expectedNextPcmPacketTimestamp=s+c}const f=this.createSampleForTrack(n,o,s,c,i.type);await this.registerSample(n,f)}finally{r()}}async padWithSilence(e,i,a){const r=ve(a,e.timescale);if(a=r/e.timescale,r>0){const{sampleSize:n,silentValue:o}=Tt(e.info.decoderConfig.codec),s=r*e.info.numberOfChannels,c=new Uint8Array(n*s).fill(o),f=this.createSampleForTrack(e,new Uint8Array(c.buffer),i,a,"key");await this.registerSample(e,f)}return a}async addSubtitleCue(e,i,a){const r=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,a);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{r()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const a=new Set([]);for(const f of e.cueQueue)N(f.timestamp<=i),N(e.lastCueEndTimestamp<=f.timestamp+f.duration),a.add(Math.max(f.timestamp,e.lastCueEndTimestamp)),a.add(f.timestamp+f.duration);const r=[...a].sort((f,l)=>f-l),n=r[0],o=r[1]??n;if(i<o)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const f=M0();this.auxBoxWriter.writeBox(f);const l=this.auxTarget._getSlice(0,this.auxWriter.getPos()),p=this.createSampleForTrack(e,l,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,p),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let f=0;f<e.cueQueue.length;f++){const l=e.cueQueue[f];if(l.timestamp>=o)break;Zr.lastIndex=0;const p=Zr.test(l.text),y=l.timestamp+l.duration;let d=e.cueToSourceId.get(l);if(d===void 0&&o<y&&(d=e.nextSourceId++,e.cueToSourceId.set(l,d)),l.notes){const u=A0(l.notes);this.auxBoxWriter.writeBox(u)}const b=I0(l.text,p?n:null,l.identifier??null,l.settings??null,d??null);this.auxBoxWriter.writeBox(b),y===o&&e.cueQueue.splice(f--,1)}const s=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,s,n,o-n,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=o}}createSampleForTrack(e,i,a,r,n){return{timestamp:a,decodeTimestamp:a,duration:r,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:ve(r,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let r=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const o=e.timestampProcessingQueue[n],s=ve(o.duration,e.timescale);r+=s}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:r,sampleDelta:1});else{const n=Ke(e.timeToSampleTable);n.sampleCount+=r}e.timestampProcessingQueue.length=0;return}const a=e.timestampProcessingQueue.map(r=>r.timestamp).sort((r,n)=>r-n);this.isFragmented||(e.startTimestampOffset??=a[0]);for(let r=0;r<e.timestampProcessingQueue.length;r++){const n=e.timestampProcessingQueue[r];n.decodeTimestamp=a[r];const o=ve(n.timestamp-n.decodeTimestamp,e.timescale),s=ve(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){N(e.lastSample);const c=ve(n.decodeTimestamp,e.timescale,!1),f=Math.round(c-e.lastTimescaleUnits);if(N(f>=0),e.lastTimescaleUnits+=f,e.lastSample.timescaleUnitsToNextSample=f,!this.isFragmented){let l=Ke(e.timeToSampleTable);if(N(l),l.sampleCount===1){l.sampleDelta=f;const y=e.timeToSampleTable[e.timeToSampleTable.length-2];y&&y.sampleDelta===f&&(y.sampleCount++,e.timeToSampleTable.pop(),l=y)}else l.sampleDelta!==f&&(l.sampleCount--,e.timeToSampleTable.push(l={sampleCount:1,sampleDelta:f}));l.sampleDelta===s?l.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:s});const p=Ke(e.compositionTimeOffsetTable);N(p),p.sampleCompositionTimeOffset===o?p.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o})}}else e.lastTimescaleUnits=ve(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:s}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,N(e.lastSample),N(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){N(i.type==="key");const r=ve(i.timestamp,e.timescale,!1),n=Math.round(r-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const r=e.track.metadata.maximumPacketCount;if(N(r!==void 0),e.samples.length>r)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${r}). Either add less packets or increase the maximum packet count.`)}let a=!1;if(!e.currentChunk)a=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const r=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(o=>{if(e===o)return i.type==="key";const s=o.sampleQueue[0];return s?s.type==="key":o.closed});r>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(a=!0,await this.finalizeFragment())}else a=r>=.5}a&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),N(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(N(!this.isFragmented),N(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((a,r)=>a+ve(r.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ke(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const a of e.currentChunk.samples)N(a.data),this.writer.write(a.data),a.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(N(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,a=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<a&&(i=n,a=n.sampleQueue[0].timestamp)}if(!i)break;const r=i.sampleQueue.shift();await this.addSampleToTrack(i,r)}}async finalizeFragment(e=!this.isCmaf){if(N(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const d=this.initBoxWriter??this.boxWriter;N(d),this.formatOptions.onMoov&&d.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const b=$t(this);if(d.writeBox(b),this.formatOptions.onMoov){const{data:u,start:h}=d.writer.stopTrackingWrites();this.formatOptions.onMoov(u,h)}if(this.isCmaf){N(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new pi(this.writer);const u=this.boxWriter.measureBox(an()),h=this.boxWriter.measureBox(rn(this,0));this.segmentHeaderSize=u+h,this.writer.seek(this.segmentHeaderSize)}}N(this.writer),N(this.boxWriter);const i=this.trackDatas.filter(d=>d.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const a=this.nextFragmentNumber++,r=on(a,i),n=this.writer.getPos(),o=n+this.boxWriter.measureBox(r);let s=o+Xi,c=1/0;for(let d=0;d<i.length;d++){const b=i[d];b.currentChunk.offset=s,b.currentChunk.moofOffset=n,b.currentChunk.trafIndex=d;for(const u of b.currentChunk.samples)s+=u.size;c=Math.min(c,b.currentChunk.startTimestamp)}const f=s-o,l=f>=2**32;if(l)for(const d of i)d.currentChunk.offset+=Rr-Xi;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const p=on(a,i);if(this.boxWriter.writeBox(p),this.formatOptions.onMoof){const{data:d,start:b}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(d,b,c)}N(this.writer.getPos()===o),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const y=vi(l);y.size=f,this.boxWriter.writeBox(y),this.writer.seek(o+(l?Rr:Xi));for(const d of i)for(const b of d.currentChunk.samples)this.writer.write(b.data),b.data=null;if(this.formatOptions.onMdat){const{data:d,start:b}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(d,b)}for(const d of i)d.finalizedChunks.push(d.currentChunk),this.finalizedChunks.push(d.currentChunk),d.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){N(this.writer),N(this.boxWriter),this.ensureOneEnabledTrack();const e=$t(this),a=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;N(this.ftypSize!==null),this.writer.seek(this.ftypSize+a),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=vi(!0),this.boxWriter.writeBox(this.mdat);for(const r of this.trackDatas){for(const n of r.sampleQueue)await this.addSampleToTrack(r,n);r.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){N(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const a=i.track.metadata.maximumPacketCount;N(a!==void 0),e+=8*Math.ceil(2/3*a),e+=4*a,e+=8*Math.ceil(2/3*a),e+=12*Math.ceil(2/3*a),e+=4*a,e+=8*a}return e}async onTrackClose(e){const i=await this.mutex.acquire(),a=this.trackDatas.find(r=>r.track===e);a&&(a.closed=!0,a.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(a,1/0),this.processTimestamps(a)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(r=>r.type===e);if(i.length===0)continue;if(!i.some(r=>r.track.metadata.disposition?.default!==!1)){const r=i[0];r.track.metadata.disposition={...r.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){N(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let a=0;a<i.samples.length;a++){const r=i.samples[a];r.timestamp-=i.startTimestampOffset,r.decodeTimestamp-=i.startTimestampOffset}if(N(this.writer),N(this.boxWriter),this.fastStart==="in-memory"){this.mdat=vi(!1);let i;for(let r=0;r<2;r++){const n=$t(this),o=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let s=this.writer.getPos()+o+i;for(const c of this.finalizedChunks){c.offset=s;for(const{data:f}of c.samples)N(f),s+=f.byteLength,i+=f.byteLength}if(s<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const a=$t(this);if(this.boxWriter.writeBox(a),this.formatOptions.onMoov){const{data:r,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(r,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const r of this.finalizedChunks)for(const n of r.samples)N(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:r,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(r,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(an()),this.boxWriter.writeBox(rn(this,i))}else{const i=this.writer.getPos(),a=E0(this.trackDatas);this.boxWriter.writeBox(a);const r=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(r)}else{N(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);N(i!==void 0);const a=this.writer.getPos()-i;if(this.mdat.size=a,this.mdat.largeSize=a>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,o)}const r=$t(this);if(this.fastStart==="reserve"){N(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(r);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(Ff(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(r);if(this.formatOptions.onMoov){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,o)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var V0=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var a,r;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");a=e[Symbol.asyncDispose]}if(a===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");a=e[Symbol.dispose],i&&(r=a)}if(typeof a!="function")throw new TypeError("Object not disposable.");r&&(a=function(){try{r.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:a,async:i})}else i&&t.stack.push({async:!0});return e},G0=(function(t){return function(e){function i(o){e.error=e.hasError?new t(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var a,r=0;function n(){for(;a=e.stack.pop();)try{if(!a.async&&r===1)return r=0,e.stack.push(a),Promise.resolve().then(n);if(a.dispose){var o=a.dispose.call(a.value);if(a.async)return r|=2,Promise.resolve(o).then(n,function(s){return i(s),n()})}else r|=1}catch(s){i(s)}if(r===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var a=new Error(i);return a.name="SuppressedError",a.error=t,a.suppressed=e,a});class fa{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class un extends fa{constructor(e){if(super(),this._connectedTrack=null,!rt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${rt.join(", ")}.`);this._codec=e}}const hn=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class K0{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new rl,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,a){const r=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,o=n.sizeChangeBehavior??"deny";let s=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(s=!0,o==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||s&&o!=="passThrough"){let p=n.transform?.width,y=n.transform?.height,d=n.transform?.fit??"fill";s&&o!=="passThrough"&&(N(this.outputWidth),N(this.outputHeight),N(o!=="deny"),p=this.outputWidth,y=this.outputHeight,d=o);const b=await e.transform({width:p,height:y,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:d,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=b.displayWidth,this.outputHeight=b.displayHeight),i&&e.close(),e=b,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const l=n.transform?.frameRate;if(l!==void 0){const p=e.timestamp+e.duration,y=lr(e.timestamp,l);if(this.frameRateLastSample!==null)if(y<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=p;return}else await this.padFrameRate(y,a);e===r&&(e=e.clone(),i=!0),e.setTimestamp(y),e.setDuration(1/l),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=y,this.frameRateLastEndTimestamp=p}await this.processAndEncode(e,a)}finally{i&&e.close()}}async processAndEncode(e,i){const a=this.encodingConfig;let r;if(a.transform?.process){let n=a.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const o=[];try{for(const s of n)s instanceof Be?o.push(s):typeof VideoFrame<"u"&&s instanceof VideoFrame?o.push(new Be(s)):o.push(new Be(s,{timestamp:e.timestamp,duration:e.duration}))}catch(s){for(const c of o)c!==e&&c.close();for(const c of n)(c instanceof Be&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw s}r=o}else r=[e];try{for(const n of r){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)break;const o=this.encodingConfig.keyFrameInterval??2,s=Math.floor(n.timestamp/o),c={...this.defaultEncodeOptions,...n.encodeOptions,...i},f={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:o===0||s!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=s,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const l=n.clone(),p=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(l,f)).catch(y=>this.setError(y)).finally(()=>{this.customEncoderQueueSize--,l.close()});this.customEncoderQueueSize>=4&&await p}else{N(this.encoder);const l=n.toVideoFrame(),p=nr(this.preciseTimings,l.timestamp,d=>d.microsecondTimestamp),y=p!==-1?this.preciseTimings[p]:null;if(y&&y.microsecondTimestamp===l.timestamp?(y.timestamp!==n.timestamp&&(y.timestampIsValid=!1),y.duration!==n.duration&&(y.durationIsValid=!1)):(this.preciseTimings.splice(p+1,0,{microsecondTimestamp:l.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!l.format&&!l.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(l,f)}finally{l.close()}}else{this.splitter||(this.splitter=new X0);const{colorFrame:b,alphaFrame:u}=await this.splitter.split(l);this.alphaFrameQueue.push(u);try{this.encoder.encode(b,f)}finally{b.close()}}else try{this.encoder.encode(l,f)}finally{l.close()}this.encoder.encodeQueueSize>=4&&await new Promise(d=>this.encoder.addEventListener("dequeue",d,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of r)n!==e&&n.close()}}async padFrameRate(e,i){const a=this.encodingConfig.transform.frameRate;N(this.frameRateLastSample);const r=Math.round((e-this.frameRateLastTimestamp)*a);for(let n=1;n<r;n++){const o={stack:[],error:void 0,hasError:!1};try{const s=V0(o,this.frameRateLastSample.clone(),!1);s.setTimestamp(this.frameRateLastTimestamp+n/a),s.setDuration(1/a),await this.processAndEncode(s,i)}catch(s){o.error=s,o.hasError=!0}finally{G0(o)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=Kr(this.encodingConfig.quality,this.encodingConfig.bitrate);N(i!==void 0);const a=$r({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let r=null,n;for(const s of a){const c=s.config;if(this.encodingConfig.onEncoderConfig?.(c),n=Xr.find(l=>l.supports(this.encodingConfig.codec,c)),n){r=s;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){r=s;break}}catch{}}if(!r){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const s=a[0].config,c=a.map(({config:f,quantizer:l})=>l!==null?`quantizer ${l}`:`${f.bitrate} bps`);throw new Error(`This specific encoder configuration (${s.codec}, ${c.join(" / ")}, ${s.width}x${s.height}, hardware acceleration: ${s.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const o=r.config;if(r.quantizer!==null&&(this.defaultEncodeOptions=Gr(this.encodingConfig.codec,r.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=o,this.customEncoder.onPacket=(s,c)=>{if(!(s instanceof vt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");hn(this.source._connectedTrack,s),this.encodingConfig.onEncodedPacket?.(s,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,s,c).catch(f=>{this.setError(f)})},this.customEncoder.onError=s=>{this.setError(s)},await this.customEncoder.init();else{const s=[],c=[];let f=0,l=0;const p=(d,b,u)=>{const h={};if(b){const C=new Uint8Array(b.byteLength);b.copyTo(C),h.alpha=C}let v=vt.fromEncodedChunk(d,h);const w=nr(this.preciseTimings,d.timestamp,C=>C.microsecondTimestamp),x=w!==-1?this.preciseTimings[w]:null;let S=null;this.emittedEncoderPackets===0&&v.type==="delta"&&u?.decoderConfig&&(S=jl(this.encodingConfig.codec,u.decoderConfig,v.data)),(x&&x.microsecondTimestamp===d.timestamp||S!==null)&&(v=v.clone({timestamp:x?.timestampIsValid?x.timestamp:void 0,duration:x?.durationIsValid?x.duration:void 0,type:S??void 0})),hn(this.source._connectedTrack,v),this.encodingConfig.onEncodedPacket?.(v,u),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,v,u).catch(C=>{this.setError(C)}),this.emittedEncoderPackets++},y=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(d,b)=>{if(!this.alphaEncoder){p(d,null,b);return}const u=this.alphaFrameQueue.shift();N(u!==void 0),u?(this.alphaEncoder.encode(u,{...this.defaultEncodeOptions,keyFrame:d.type==="key"}),l++,u.close(),s.push({chunk:d,meta:b})):l===0?p(d,null,b):(c.push(f+l),s.push({chunk:d,meta:b}))},error:d=>{d.stack=y,this.setError(d)}}),this.encoder.configure(o),this.encodingConfig.alpha==="keep"){const d=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(b,u)=>{l--;const h=s.shift();for(N(h!==void 0),p(h.chunk,b,h.meta),f++;c.length>0&&c[0]===f;){c.shift();const v=s.shift();N(v!==void 0),p(v.chunk,null,v.meta)}},error:b=>{b.stack=d,this.setError(b)}}),this.alphaEncoder.configure(o)}}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,a=lr(this.frameRateLastEndTimestamp,i);await this.padFrameRate(a)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await ll(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let da=null;class X0{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!da){const r=new Blob([`(${Z0.toString()})()`],{type:"application/javascript"});da=URL.createObjectURL(r)}this.worker=new Worker(da),this.worker.addEventListener("message",r=>{const n=r.data,o=this.pendingRequests.get(n.id);o&&(this.pendingRequests.delete(n.id),"error"in n?o.reject(new Error(n.error)):o.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",r=>{const n=new Error(r.message||"Color/alpha splitter worker error.");for(const o of this.pendingRequests.values())o.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,a=or();return this.pendingRequests.set(i,a),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),a.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Z0=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:o,sourceFrame:s}=n.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:f}=await i(s);self.postMessage({id:o,colorFrame:c,alphaFrame:f},{transfer:[c,f]})}catch(c){self.postMessage({id:o,error:c.message})}finally{s.close()}})});const i=async n=>{const o=n.format;if(!o)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const s=n.allocationSize();if((!t||t.byteLength!==s)&&(t=new Uint8Array(s)),await n.copyTo(t),o==="RGBA"||o==="BGRA")return a(t,o,n);if(o==="I420A"||o==="I420AP10"||o==="I420AP12"||o==="I422A"||o==="I422AP10"||o==="I422AP12"||o==="I444A"||o==="I444AP10"||o==="I444AP12")return r(t,o,n);throw new Error(`CPU color/alpha splitting does not support format '${o}'.`)},a=(n,o,s)=>{const c=s.visibleRect?.width??s.codedWidth,f=s.visibleRect?.height??s.codedHeight,l=c*f,p=Math.ceil(c/2),y=Math.ceil(f/2),d=l+p*y*2,b=new Uint8Array(d);for(let w=0,x=3;w<l;w++,x+=4)b[w]=n[x];b.fill(128,l);const u=new VideoFrame(n,{format:o==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:f,timestamp:s.timestamp,duration:s.duration??void 0}),h={format:"I420",codedWidth:c,codedHeight:f,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[b.buffer]},v=new VideoFrame(b,h);return{colorFrame:u,alphaFrame:v}},r=(n,o,s)=>{const c=s.visibleRect?.width??s.codedWidth,f=s.visibleRect?.height??s.codedHeight,l=o.includes("P10"),p=o.includes("P12"),y=l||p?2:1;let d,b;o.startsWith("I420")?(d=Math.ceil(c/2),b=Math.ceil(f/2)):o.startsWith("I422")?(d=Math.ceil(c/2),b=f):(d=c,b=f);const u=c*f,h=d*b,v=u*y,w=h*y,x=u*y,S=v+w*2,C=o.replace("A",""),R=Math.ceil(c/2),B=Math.ceil(f/2),H=R*B,M=H*y,D=x+2*M,Q=new Uint8Array(D),_=S;Q.set(n.subarray(_,_+x),0);const F=x,g=l?512:p?2048:128;y===1?Q.fill(g,F):new Uint16Array(Q.buffer,F,2*H).fill(g);const L=l?"I420P10":p?"I420P12":"I420",ee=new VideoFrame(n.subarray(0,S),{format:C,codedWidth:c,codedHeight:f,timestamp:s.timestamp,duration:s.duration??void 0}),W={format:L,codedWidth:c,codedHeight:f,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[Q.buffer]},se=new VideoFrame(Q,W);return{colorFrame:ee,alphaFrame:se}}};class Q0 extends un{constructor(e){Sf(e),super(e.codec),this._encoder=new K0(this,e)}add(e,i){if(!(e instanceof Be))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Y0 extends fa{constructor(e){if(super(),this._connectedTrack=null,!di.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${di.join(", ")}.`);this._codec=e}}class J0 extends fa{constructor(e){if(super(),this._connectedTrack=null,!Lt.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Lt.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class mn{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>rt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>di.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Lt.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class ua extends mn{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new j0(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class pn extends ua{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...rt,...ji,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Lt]}_codecUnsupportedHint(e){return new gn().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class vn extends ua{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...rt,...ji,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Lt]}}class gn extends ua{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...rt,...di]}_codecUnsupportedHint(e){return new pn().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const bn=["video","audio","subtitle"];class jt{constructor(e,i,a,r,n){this.id=e,this.output=i,this.type=a,this.source=r,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof jt))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=hr(this.metadata.group),a=hr(e.metadata.group);for(const r of i)if(this.type!==e.type&&a.some(s=>r===s)||a.some(s=>r._pairedGroups.has(s)))return!0;return!1}}class ed extends jt{constructor(e,i,a,r){super(e,i,"video",a,r)}}class td extends jt{constructor(e,i,a,r){super(e,i,"audio",a,r)}}class id extends jt{constructor(e,i,a,r){super(e,i,"subtitle",a,r)}}class Vt{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Vt))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const ha=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!il(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&hl(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Vt)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Vt))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class ad extends $i{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Vt,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new rr,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof mn))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof st||e.target instanceof la))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof st&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof st)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof st&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){N(this._target instanceof la);const i=this._target.getTarget(e),a=r=>{if(!(r instanceof st))throw new TypeError("getTarget must return a Target.");return r};return i instanceof Promise?i.then(a):a(i)}async _getTarget(e){N(this._target instanceof la);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(N(this._initTarget!==null),this._initTarget instanceof st)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof st)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),a=r=>(this.state==="canceled"?r._close():this._rememberTarget(r),this._emit("target",{target:r,request:e,isRoot:!0}),this._rootTarget=r,r);return i instanceof Promise?this._rootTargetPromise=i.then(a):a(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),a=new oa(i,typeof e=="boolean"?e:e(i));return a.start(),a})()}addVideoTrack(e,i={}){if(!(e instanceof un))throw new TypeError("source must be a VideoSource.");if(ha(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&xr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof vt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new ed(this.tracks.length+1,this,e,a))}addAudioTrack(e,i={}){if(!(e instanceof Y0))throw new TypeError("source must be an AudioSource.");if(ha(i),i.decoderConfig!==void 0&&kr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof vt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new td(this.tracks.length+1,this,e,a))}addSubtitleTrack(e,i={}){if(!(e instanceof J0))throw new TypeError("source must be a SubtitleSource.");ha(i);const a={...i};return a.group??=this.defaultTrackGroup,this._addTrack(new id(this.tracks.length+1,this,e,a))}setMetadataTags(e){if(ul(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),a=this.tracks.reduce((o,s)=>o+(s.type===e.type?1:0),0),r=i[e.type].max;if(a===r)throw new Error(r===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${r} ${e.type} track${r===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const o=this.format.getSupportedVideoCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const o=this.format.getSupportedAudioCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const o=this.format.getSupportedSubtitleCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const a of bn){const r=this.tracks.reduce((o,s)=>o+(s.type===a?1:0),0),n=e[a].min;if(r<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const a of bn){const r=this.tracks.reduce((o,s)=>o+(s.type===a?1:0),0),n=e[a].min;if(r<n)throw new Error(n===e[a].max?`${this.format._name} requires exactly ${n} ${a} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${a} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ge._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const a=this._mutex.acquire();try{await this._muxer.start();const r=this.tracks.map(n=>n.source._start());await Promise.all(r)}finally{(await a)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ge._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ge._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(a=>a._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ge._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(a=>a.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const a=await this._rootWriterPromise;a.finalized||(await a.flush(),await a.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const rd={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},nd=new Set(["window","buddy","dancer"]);function yn(t){return!nd.has(t.typeId)}const od=new Set(["bitmap","video","audio","pcm","beats","bpm","objectUrl","frozenFrame"]);function sd(t){const e=JSON.parse(JSON.stringify(t,(i,a)=>{if(!od.has(i))return a}));return JSON.stringify(e,null,2)}function cd(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>ld(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const a=rd[i.generator??""];return a?{...i,generator:a}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(yn)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(a=>({...a,effects:(a.effects??[]).filter(yn)}))}:i.data})),e}function ld(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,objectUrl:null,frozenFrame:null}}function fd(t,e){const i=new Blob([e],{type:"application/json"});St(t,i)}function St(t,e){const i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const ma=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function wn(t,e,i=1280){const a=i/Math.max(t,e,1e-4);return{width:je(t*a),height:je(e*a)}}function dd(t,e){const i=t/Math.max(e,1);let a="16:9",r=1/0;for(const n of ma){const o=Math.abs(i-n.rw/n.rh);o<r&&(r=o,a=n.id)}return a}function ud(t,e,i=1280){if(t<2||e<2)return wn(16,9,i);const a=Math.max(t,e),r=i/a;return{width:je(t*r),height:je(e*r)}}function hd(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),a=e-i;return t<a?0:(t-a+1)/i}const md=960,pd=1920;function pa(t,e=!1){const i=e?md:pd;return _a(t.exportSettings.width,t.exportSettings.height,i,i)}async function vd(t,e,i){const{width:a,height:r,format:n,quality:o,filename:s}=e.exportSettings,c=n==="jpg"?"image/jpeg":"image/png",f=await t.capture(e,i,je(a),je(r),c,o);St(`${s}.${n==="jpg"?"jpg":"png"}`,f)}async function gd(t,e,i){const{fps:a,duration:r,filename:n,quality:o}=e.exportSettings,{width:s,height:c}=pa(e,!1),f=Math.max(1,Math.round(r*a)),l=new Gc,p=l.folder(n)??l,y=document.createElement("canvas");for(let b=0;b<f;b++){const u=b/a;i?.(b,f),t.paintFrame(e,u,s,c,y);const h=await kd(y,"image/png",o);p.file(`${n}_${String(b).padStart(5,"0")}.png`,await h.arrayBuffer()),await va()}const d=await l.generateAsync({type:"blob"});St(`${n}_sequence.zip`,d)}async function xn(t,e,i,a=!1){const r=await kn(t,e,wd(),i,a);St(`${e.exportSettings.filename}.webm`,r)}async function bd(t,e,i,a=!1){try{return await yd(t,e,i,a),"mp4 clip saved"}catch(r){const n=xd();if(n){const s=await kn(t,e,n,i,a);return St(`${e.exportSettings.filename}.mp4`,s),"mp4 clip saved"}return await xn(t,e,i,a),`MP4 not available (${r instanceof Error?r.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function yd(t,e,i,a=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const r=Math.min(24,Math.max(12,e.exportSettings.fps||24)),n=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:o,height:s}=pa(e,a),c=new dt({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),f=new pn({fastStart:"in-memory"}),p=await Pf(["avc","hevc"].filter(w=>f.getSupportedVideoCodecs().includes(w)),{width:o,height:s,quality:c});if(!p)throw new Error("this browser cannot encode H.264");const y=new bi,d=new ad({format:f,target:y}),b=new Q0({codec:p,quality:c,keyFrameInterval:1});d.addVideoTrack(b,{frameRate:r}),t.resetTemporal();const u=document.createElement("canvas");await d.start();try{const w=Math.max(1,Math.round(n*r)),x=1/r,S=e.exportSettings.loopClose!==!1;let C=null;for(let R=0;R<w;R++){const B=Ai(R/r,n,e.playback.mode,1,!0);i?.(R,w),t.paintFrame(e,B,o,s,u),R===0&&S?C=Tn(u):_n(u,C,R,w,S);const H=new Be(u,{timestamp:R*x,duration:x});await b.add(H,{keyFrame:R%r===0}),H.close(),await va()}await d.finalize()}catch(w){try{await d.cancel()}catch{}throw w}const h=y.buffer;if(!h||h.byteLength<32)throw new Error("MP4 mux produced an empty file");const v=h.slice(0);St(`${e.exportSettings.filename}.mp4`,new Blob([v],{type:"video/mp4"}))}async function kn(t,e,i,a,r=!1){const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),o=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:s,height:c}=pa(e,r),f=document.createElement("canvas");f.width=s,f.height=c;const l=f.getContext("2d");if(!l)throw new Error("No 2d context");const p=f.captureStream(0),y=p.getVideoTracks()[0],d=new MediaRecorder(p,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),b=[];d.ondataavailable=x=>{x.data.size&&b.push(x.data)},t.resetTemporal(),d.start(200);const u=Math.max(1,Math.round(o*n)),h=document.createElement("canvas"),v=e.exportSettings.loopClose!==!1;let w=null;for(let x=0;x<u;x++){const S=Ai(x/n,o,e.playback.mode,1,!0);a?.(x,u),t.paintFrame(e,S,s,c,h),x===0&&v?w=Tn(h):_n(h,w,x,u,v),l.drawImage(h,0,0,s,c),y.requestFrame?.(),await va()}if(await new Promise(x=>{d.onstop=()=>x(),d.stop()}),p.getTracks().forEach(x=>x.stop()),!b.length)throw new Error("recorder produced no data");return new Blob(b,{type:i})}function wd(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function xd(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function _n(t,e,i,a,r){if(!r||!e||i===0)return;const n=hd(i,a);if(n<=0)return;const o=t.getContext("2d");o&&(o.save(),o.globalAlpha=n,o.drawImage(e,0,0,t.width,t.height),o.restore())}function Tn(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function va(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function kd(t,e,i){return new Promise((a,r)=>{t.toBlob(n=>{n?a(n):r(new Error("frame capture failed"))},e,i)})}async function _d(t,e,i,a,r=!1){const n=e.exportSettings.format;return n==="mp4"?bd(t,e,a,r):n==="webm"?xn(t,e,a,r):n==="sequence"?gd(t,e,a):vd(t,e,i)}const Td=768,Sd="sana",Sn=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function Cd(t=768,e=768){const i=Math.max(1,t),a=Math.max(1,e),r=Td/Math.max(i,a);return{width:je(i*r,256),height:je(a*r,256)}}function Ed(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16);if(Number.isNaN(i))return"muted earth";const a=i>>16&255,r=i>>8&255,n=i&255;let o=Sn[0],s=1e9;for(const c of Sn){const f=(a-c.r)**2+(r-c.g)**2+(n-c.b)**2;f<s&&(s=f,o=c)}return o.name}function Pd(t,e=[],i=!1){const a=t.trim()||"experimental photographic still, cinematic light, analog film",r="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${a}, ${r}`;const n=e.map(Ed).filter((o,s,c)=>c.indexOf(o)===s).slice(0,4);return`${a}, palette of ${n.join(", ")}, ${r}`}function Bd(t,e,i){return`#${[t,e,i].map(a=>Math.max(0,Math.min(255,a)).toString(16).padStart(2,"0")).join("")}`}function Md(t,e,i,a=4){const r=[];for(let n=0;n<3;n++)for(let o=0;o<3;o++){const s=Math.min(e-1,Math.floor((o+.5)/3*e)),f=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+s)*4,l=t[f],p=t[f+1],y=t[f+2],d=Bd(l,p,y);r.some(u=>(u.r-l)**2+(u.g-p)**2+(u.b-y)**2<1400)||r.push({hex:d,r:l,g:p,b:y})}return r.slice(0,a).map(n=>n.hex)}function Id(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const a=i.getImageData(0,0,e.width,e.height);return Md(a.data,e.width,e.height)}function Ad(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function Rd(t,e,i,a,r=Sd){const n=t.length>400?t.slice(0,400):t,o=`width=${i}&height=${a}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(r)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${o}`}async function zd(t,e){const i=new AbortController,a=setTimeout(()=>i.abort(),e);try{const r=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!r.ok)throw r.status===429||r.status>=500?new Error(`busy:${r.status}`):new Error(`Generation failed (${r.status}). Try a shorter prompt.`);const n=await r.arrayBuffer(),o=new Uint8Array(n),s=r.headers.get("content-type")||"";if(!Ad(o,s))throw new Error("Generation returned no image. Try again.");const c=s.startsWith("image/")?s.split(";")[0]:"image/jpeg";return new Blob([n],{type:c})}catch(r){throw r instanceof Error&&r.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):r}finally{clearTimeout(a)}}async function Fd(t){const{width:e,height:i}=Cd(t.width??768,t.height??768),a=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let r=null;for(let o=0;o<2;o++){t.onStatus?.(o===0?"generating new image…":"still working, trying once more…");try{return await zd(Rd(a,t.seed+o*7919,e,i),o===0?22e3:3e4)}catch(s){r=s instanceof Error?s:new Error(String(s))}}const n=r?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":r?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function ke(t){const e=E.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Gt(t){if(!t)return;const e=E.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Ae(t,e,i=!0){E.setProject(a=>({...a,layers:a.layers.map(r=>r.id===t?e(r):r)}),i)}function Kt(t,e=!0){E.setProject(i=>{const a=e?i.layers.map(r=>r.id===E.state.ui.selectedLayerId?{...r,sourceId:t.id}:r):i.layers;return{...i,sources:[...i.sources,t],layers:a}}),E.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function Od(t){const e=E.project.sources.filter(o=>o.kind==="audio");for(const o of e)ir(o);if(E.setProject(o=>{const s=o.sources.filter(l=>l.kind!=="audio"),c=o.layers.map(l=>e.some(p=>p.id===l.sourceId)?{...l,sourceId:s.find(p=>p.kind!=="audio")?.id??null}:l),f=Math.max(o.duration,t.duration||0);return{...o,sources:[...s,t],layers:c,duration:f,playback:{...o.playback,playing:!0,time:0}}}),ai(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",a=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",r=t.beats?.length?`${t.beats.length} hits`:"",n=[i,a,r].filter(Boolean).join(" · ");E.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function yi(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&E.patchUi({status:`reading ${i.name}…`});const r=await Lc(i);if(r.kind==="audio"){Od(r);continue}if(e){const n=E.state.ui.selectedSourceId;E.setProject(o=>({...o,sources:o.sources.map(s=>s.id===n?{...r,id:s.id}:s)})),E.patchUi({status:`replaced ${i.name}`})}else Kt(r,!0)}catch(a){E.patchUi({status:a instanceof Error?a.message:"import failed"})}}function Hd(){E.setProject(e=>{const i=e.sources.find(r=>r.kind!=="audio")?.id??null,a=Va(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,a]}});const t=E.project.layers.at(-1);E.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function Ld(t){E.setProject(e=>{const i=e.layers.find(o=>o.id===t);if(!i)return e;const a=JSON.parse(JSON.stringify(i));a.id=Pe("lyr"),a.name=`${i.name}*`,a.effects=a.effects.map(o=>({...o,id:Pe("fx")}));const r=e.layers.findIndex(o=>o.id===t),n=[...e.layers];return n.splice(r+1,0,a),{...e,layers:n}})}function Ud(t){E.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function ga(t){const e=ke(E.project);if(!e)return;const i=ja(t);Ae(e.id,a=>({...a,effects:[...a.effects,i]})),E.patchUi({selectedEffectId:i.id})}function Nd(t,e){Ae(t,i=>({...i,effects:i.effects.filter(a=>a.id!==e)}))}function Cn(t,e,i){Ae(t,a=>{const r=a.effects.findIndex(c=>c.id===e),n=r+i;if(r<0||n<0||n>=a.effects.length)return a;const o=[...a.effects],[s]=o.splice(r,1);return o.splice(n,0,s),{...a,effects:o}})}function Wd(t,e){Ae(t,i=>({...i,effects:i.effects.map(a=>a.id===e?{...a,enabled:!a.enabled}:a)}))}function Xt(t,e,i,a,r=!0){Ae(t,n=>({...n,effects:n.effects.map(o=>o.id===e?{...o,params:{...o.params,[i]:a}}:o)}),r)}function Ct(t,e=!1){const i=E.state.ui;(t==="all"||t==="selected")&&E.setProject(r=>({...r,seed:r.seed+1+(Date.now()&255)>>>0}),!1),E.setProject(r=>{let o=qa(r,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&i.includeCritters&&(o=Wa(o)),t==="all"&&i.includeIdol&&(o=Ps(o)),o});const a=E.project.layers[0]?.effects.map(r=>r.typeId).join(" · ");E.patchUi({status:`${e?"wacky look":"look"} · ${a||t} · seed ${E.project.seed}`})}function qd(){const t=ke(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(E.project.seed+Date.now())%9998;if(e){Xt(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}ga("critters");const a=ke(E.project),r=Gt(a);a&&r?.typeId==="critters"&&Xt(a.id,r.id,"seed",i),E.patchUi({status:"stamped floaters"})}function Dd(){const t=ke(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(E.project.seed+Date.now()+17)%9998;if(e){Xt(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}ga("dancer");const a=ke(E.project),r=Gt(a);a&&r?.typeId==="dancer"&&Xt(a.id,r.id,"seed",i),E.patchUi({status:"stamped idol"})}function $d(){E.setProject(t=>Is({...t,seed:t.seed+1+(Date.now()&255)>>>0})),E.patchUi({status:"new floater and idol seeds"})}async function jd(t){const e=E.project,{width:i,height:a}=_a(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const r=await t.capture(e,e.playback.time,i,a,"image/png",.92),n=await er(r,`print_${Date.now()}.png`);Kt(n,!0),E.patchUi({status:"printed the live frame as a new still"})}catch(r){E.patchUi({status:r instanceof Error?r.message:"print failed"})}}function En(t){E.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Pn(){fd(`${E.project.name||"phosphene"}.phos.json`,sd(E.project)),E.patchUi({status:"project downloaded"})}async function Vd(t){const e=await t.text(),i=cd(e);E.replace(i),E.patchUi({status:"project loaded — re-drop media if needed"})}function Gd(){const t=prompt("Preset name",`look ${E.project.presets.length+1}`);if(!t)return;const e=Mi(E.project,t);E.setProject(i=>({...i,presets:[...i.presets,e]}))}function ba(t){const e=E.project.presets.find(i=>i.id===t);e&&(E.setProject(i=>xs(i,e)),E.patchUi({status:`preset ${e.name}`}))}function Kd(){const t=ks(E.project.presets,E.project.seed+Date.now());if(!t){E.patchUi({status:"no presets saved"});return}ba(t.id)}function Xd(t){const e=E.project.presets.find(i=>i.id===t);e&&E.setProject(i=>({...i,presets:[...i.presets,_s(e)]}))}function Zd(t){E.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Bn(){const t=E.state.ui,e=ke(E.project),i=Gt(e),a=t.selectedParam?.paramId;if(!e||!i||!a){E.patchUi({status:"select a numeric parameter first"});return}const r=i.params[a];if(typeof r!="number"){E.patchUi({status:"keyframes are numeric"});return}const n={id:Pe("kf"),time:E.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:a,value:r,easing:"smooth"};E.setProject(o=>({...o,keyframes:[...o.keyframes,n]})),E.patchUi({status:`key ${a} @ ${n.time.toFixed(2)}s`})}function Qd(){E.setProject(t=>({...t,keyframes:[]}))}async function Yd(){const t=E.project.sources.find(i=>i.id===E.state.ui.selectedSourceId);if(!t)return;const e=await Wc(t);e&&Kt(e,!0)}function Mn(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of E.project.sources)ir(e);E.replace(Ga()),E.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Jd(){if(E.state.ui.generating)return;const t=E.state.ui.prompt.trim();if(!t){E.patchUi({status:"type a prompt first"});return}E.patchUi({generating:!0,status:"generating new image…"});try{const e=E.project.sources.find(f=>f.id===E.state.ui.selectedSourceId),i=E.state.ui.useSourceForGen;let a=[];const r=e?.frozenFrame||e?.bitmap||e?.video||null;i&&r&&(a=Id(r));const n=Pd(t,a,i&&a.length>0),o=E.project.seed+Date.now()>>>0,s=await Fd({prompt:n,seed:o,width:E.project.exportSettings.width,height:E.project.exportSettings.height,onStatus:f=>E.patchUi({generating:!0,status:f},!1)}),c=await er(s,`gen_${o}.jpg`);Kt(c,!0),E.patchUi({generating:!1,status:i&&a.length?"new image from prompt + source":"new image from prompt"})}catch(e){E.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let wi=!1,Zt=null;function eu(t,e){Zt=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Rush is the fly-at-the-lens. Tide / rings / loom / petal / flock / wheel / silk are the slow looping patterns. Bars / ripple / swing / burst / halo / clap / wave are the music moves — they stay on a smooth path and punch scale, glow, and bounce on the beat. Bounce and glow stay if you still want them. Drop an MP3 and the stamps breathe on the beat without jumping off their path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music. Move buttons keep the current kit.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Exported clips are silent for now — the motion still follows the song. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",iu(t),E.subscribe(()=>{wi||ya(t)}),ya(t)}async function tu(t=!1){if(Zt&&!E.state.ui.exporting){E.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),E.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await _d(Zt,E.project,E.project.playback.time,(i,a)=>{E.patchUi({status:`export ${i+1}/${a}`,exporting:!0},!1)},t);E.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){E.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function iu(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const a=i.dataset.act,r=i.dataset.id;if(a==="save"&&Pn(),a==="load"&&t.querySelector("#proj-file")?.click(),a==="scratch"&&Mn(),a==="imagine"&&Jd(),a==="seed-"&&En(-1),a==="seed+"&&En(1),a==="rand-all"&&Ct("all"),a==="rand-wacky"&&Ct("all",!0),a==="stamp-chaos"&&$d(),a==="reprint"&&Zt&&jd(Zt),a==="rand-sel"&&Ct("selected"),a==="rand-param"){const n=i.dataset.paramId,o=ke(E.project),s=Gt(o);n&&o&&s&&E.patchUi({selectedParam:{layerId:o.id,effectId:s.id,paramId:n}},!1),Ct("param")}if(a==="help"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),a==="import"&&t.querySelector("#media-file")?.click(),a==="import-audio"&&t.querySelector("#audio-file")?.click(),a==="replace"&&t.querySelector("#replace-file")?.click(),a==="freeze"&&Yd(),a==="gen"){const n=i.dataset.kind??"plasma",o=E.project.sources.find(l=>l.id===E.state.ui.selectedSourceId),s=i.dataset.kit??(Ue(n)?Si(o?.collageKit):void 0),c=i.dataset.move??(Ue(n)?Ta(o?.collageMove):void 0),f=$a(n,s,c);Kt(f,!0),E.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}`:f.collageKit?`place · ${n} · ${f.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(a==="stamp-critters"&&qd(),a==="stamp-idol"&&Dd(),a==="add-layer"&&Hd(),a==="dup-layer"&&r&&Ld(r),a==="del-layer"&&r&&Ud(r),a==="sel-layer"&&r&&E.patchUi({selectedLayerId:r,selectedEffectId:E.project.layers.find(n=>n.id===r)?.effects[0]?.id??null}),a==="sel-fx"&&r&&E.patchUi({selectedEffectId:r}),a==="sel-src"&&r&&E.patchUi({selectedSourceId:r}),a==="bypass"&&r){const n=ke(E.project);n&&Wd(n.id,r)}if(a==="fx-up"&&r){const n=ke(E.project);n&&Cn(n.id,r,-1)}if(a==="fx-dn"&&r){const n=ke(E.project);n&&Cn(n.id,r,1)}if(a==="fx-del"&&r){const n=ke(E.project);n&&Nd(n.id,r)}if(a==="key"&&Bn(),a==="key-clear"&&Qd(),a==="pst-save"&&Gd(),a==="pst-rand"&&Kd(),a==="pst-load"&&r&&ba(r),a==="pst-dup"&&r&&Xd(r),a==="pst-del"&&r&&Zd(r),a==="export"&&tu(),a==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));E.setProject(o=>({...o,duration:Math.max(o.duration,n),exportSettings:{...o.exportSettings,duration:n,format:"mp4",fps:24,bitrate:Math.min(o.exportSettings.bitrate,8)}})),E.patchUi({status:`${n}s clip ready — hit Export`})}if(a==="exp-aspect"&&r){const n=ma.find(o=>o.id===r);if(n){const o=wn(n.rw,n.rh,1280);E.setProject(s=>({...s,exportSettings:{...s.exportSettings,width:o.width,height:o.height}}))}}if(a==="exp-aspect-src"){const n=E.project,o=ke(n),s=n.sources.find(l=>l.id===(o?.sourceId??n.sources[0]?.id)),c=s?.kind==="audio"?n.sources.find(l=>l.kind!=="audio"):s,f=ud(c?.width??1280,c?.height??720,1280);E.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:f.width,height:f.height}}))}if(a==="play"&&(ai(),E.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),a==="use-src"&&r){if(E.project.sources.find(s=>s.id===r)?.kind==="audio")return;const o=ke(E.project);o&&Ae(o.id,s=>({...s,sourceId:r}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(Vd(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(yi(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(yi(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(yi(i.files,!1),i.value=""),i.id==="quality"&&E.setProject(a=>({...a,quality:i.value})),i.id==="add-fx"&&(i.value&&ga(i.value),i.value=""),i.id==="blend"){const a=ke(E.project);a&&Ae(a.id,r=>({...r,blendMode:i.value}))}if(i.id==="mask-type"){const a=ke(E.project);a&&Ae(a.id,r=>({...r,mask:{...r.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&ba(i.value),i.id==="exp-format"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,format:i.value}})),i.id==="play-mode"&&E.setProject(a=>({...a,playback:{...a.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,a=E.project;if(i.id==="gen-prompt"&&E.patchUi({prompt:i.value},!1),i.id==="gen-src"&&E.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked}),i.id==="seed"&&E.setProject(r=>({...r,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&E.setProject(r=>({...r,randomAmount:Number(i.value)}),!1),i.id==="speed"&&E.setProject(r=>({...r,playback:{...r.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&E.setProject(r=>({...r,playback:{...r.playback,loop:i.checked}}),!1),i.id==="loop-close"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&E.setProject(r=>({...r,playback:{...r.playback,freeze:i.checked}}),!1),i.id==="time"&&E.setProject(r=>({...r,playback:{...r.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const r=ke(a);r&&Ae(r.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const r=ke(a);r&&Ae(r.id,n=>({...n,enabled:i.checked}),!1)}for(const r of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${r}`&&E.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[r]:Number(i.value)}}),!1),i.id===`lfb-${r}`){const n=ke(a);n&&Ae(n.id,o=>({...o,feedback:{...o.feedback,[r]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const r=ke(a),n=i.id.slice(3);r&&n in r.transform&&Ae(r.id,o=>({...o,transform:{...o.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){wi=!0;const r=au(i.dataset.fxType||"",i.dataset.param),n=ru(i,r);Xt(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),E.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="exp-q"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{wi&&(wi=!1,ya(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),E.state.ui.dropActive||E.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&E.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),E.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&yi(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),ai(),E.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),(e.key==="r"||e.key==="R")&&Ct(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Ct("all",!0),(e.key==="k"||e.key==="K")&&Bn(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Mn()),e.key==="?"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Pn()))})}function au(t,e){return Ve(t)?.params.find(i=>i.id===e)}function ru(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function ya(t){const{project:e,ui:i}=E.state,a=t.querySelector("#proj-name"),r=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),o=t.querySelector("#quality");a&&document.activeElement!==a&&(a.value=e.name),r&&document.activeElement!==r&&(r.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),o&&(o.value=e.quality);const s=t.querySelector("#top-export");s&&(s.disabled=i.exporting);const c=t.querySelector("#inc-critters");c&&(c.checked=i.includeCritters);const f=t.querySelector("#inc-idol");f&&(f.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),nu(t.querySelector("#rail")),ou(t.querySelector("#stack")),cu(t.querySelector("#transport"))}function nu(t){const e=E.project,i=E.state.ui;t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${He(i.prompt)}</textarea>
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
    </div>
    <div class="status" style="margin-top:4px">Each clip keeps one move. Music moves (bars, ripple, swing, burst, halo, clap, wave) punch on the beat without jumping off their path. Rush still flies at the lens. Kit buttons keep the last move.</div>
    <div style="margin-top:8px">
      ${e.sources.map(a=>{const r=a.kind==="audio"?`beat-sync · ${Et(a.duration||0)}${a.bpm&&a.bpm>40?` · ${a.bpm}bpm`:""}`:`${a.kind} ${a.width}×${a.height}`,n=a.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${a.id}">use</button>`;return`
        <div class="thumb ${a.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${a.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${He(a.name)}</b><span>${r}</span></div>
          ${n}
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
    ${e.presets.map(a=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${He(a.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${a.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${a.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${a.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function ou(t){const e=E.project,i=ke(e),a=Gt(i),r=ys();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${He(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${Se("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${Dc.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
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
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(n=>`<option ${i.mask.type===n?"selected":""} value="${n}">${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${i.effects.map((n,o)=>`
        <div class="fx ${n.id===a?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${o}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${o+1}. ${He(Ve(n.typeId)?.name??n.typeId)}</span>
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
        ${ws.map(n=>{const o=(r[n.id]??[]).filter(s=>s.id!=="dancer");return o.length?`<optgroup label="${n.label}">${o.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${a?`
        <hr class="div" />
        <div class="sec">${He(Ve(a.typeId)?.name??"params")} · ${He(Ve(a.typeId)?.description??"")}</div>
        ${(Ve(a.typeId)?.params??[]).map(n=>su(i.id,a,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",o=>{o.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",o=>o.preventDefault()),n.addEventListener("drop",o=>{o.preventDefault();const s=Number(o.dataTransfer?.getData("text/plain")),c=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(s)||Number.isNaN(c)||s===c||Ae(i.id,f=>{const l=[...f.effects],[p]=l.splice(s,1);return l.splice(c,0,p),{...f,effects:l}})})})}function su(t,e,i){const a=e.params[i.id]??i.default,r=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${r} ${a?"checked":""}/> ${He(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${He(i.label)}</span><input type="color" ${r} value="${He(String(a))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${He(i.label)}</span>
      <select ${r}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===a?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${He(i.label)}</span>
    <input type="range" ${r} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(a)}" />
    <input type="number" ${r} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(a).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function cu(t){const e=E.project,i=e.playback,a=e.exportSettings,r=E.state.ui.exporting,n=Math.max(e.duration,.1),o=i.time/n*100;t.innerHTML=`
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
        <span class="status" id="clock">${Et(i.time)} / ${Et(n)}</span>
        <span class="status" id="status-line">${E.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(s=>`<div class="key" style="left:${s.time/n*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${o}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${n}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${ma.map(s=>`<button class="btn tiny ${dd(a.width,a.height)===s.id?"acid":""}" data-act="exp-aspect" data-id="${s.id}">${s.label}</button>`).join("")}
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
        ${[2,4,6,8].map(s=>`<button class="btn tiny ${Number(a.duration)===s?"acid":""}" data-act="clip" data-secs="${s}" ${r?"disabled":""}>${s}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="8" step="1" style="width:48px" value="${a.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${a.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${r?"disabled":""}>${r?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",s=>{const c=s.currentTarget.getBoundingClientRect(),f=(s.clientX-c.left)/c.width*n;E.setProject(l=>({...l,playback:{...l.playback,time:Math.max(0,f)}}))})}function Se(t,e,i,a,r,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${a}" max="${r}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${a}" max="${r}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function He(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Et(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function In(t,e){if(E.state.ui.exporting)return;const i=1,a=e.getBoundingClientRect(),r=Math.max(16,Math.floor(a.width*i)),n=Math.max(16,Math.floor(a.height*i));(t.width!==r||t.height!==n)&&(t.width=r,t.height=n)}function lu(t,e,i){const a=t.querySelector("#hud");a&&(a.textContent=`PHOSPHENE  ${Et(i)}  ${e.toFixed(0)}FPS  ${E.project.quality.toUpperCase()}`);const r=Math.max(E.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/r*100}%`);const o=t.querySelector("#clock");o&&(o.textContent=`${Et(i)} / ${Et(r)}`);const s=t.querySelector("#time");s&&document.activeElement!==s&&(s.value=String(i));const c=t.querySelector("#status-line");c&&(c.textContent=E.state.ui.status)}const An=window;An.__phospheneMark=!0;const Rn=document.querySelector("#app");if(!Rn)throw new Error("#app missing");const wa=Rn,xa=document.createElement("canvas");async function fu(){await new Promise(c=>requestAnimationFrame(()=>c()));let t;try{t=new Rc(xa)}catch(c){const f=document.querySelector("#boot-note");f?f.textContent=`PHOSPHENE · plasma · ${c instanceof Error?c.message:"WebGL failed"}`:wa.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${c instanceof Error?c.message:String(c)}</p>
      </div>`;return}eu(wa,t),An.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>In(xa,e)).observe(e),In(xa,e);let a=performance.now(),r=60,n=0,o=performance.now();function s(c){const f=Math.min(.08,(c-a)/1e3);a=c;const l=E.state.ui.exporting,p=E.project,y=Ds(p,p.playback.time),d=Ri(p);if(!l&&p.playback.playing&&!p.playback.freeze){const b=d?.audio&&p.playback.mode==="forward"&&!d.audio.paused&&Number.isFinite(d.audio.currentTime);if(d?.audio&&Hi(d.audio,p.playback),b){const u=d.audio.currentTime;E.setProject(h=>({...h,playback:{...h.playback,time:u}}),!1)}else{let u=p.playback.time+f*y;const h=Math.max(p.duration,.001);p.playback.loop?u=(u%h+h)%h:u=Math.min(u,h),E.setProject(v=>({...v,playback:{...v.playback,time:u}}),!1),d?.audio&&p.playback.mode!=="forward"&&Hi(d.audio,{...p.playback,playing:!1,time:u})}}else d?.audio&&Hi(d.audio,{...p.playback,playing:!1});for(const b of E.project.sources)if(b.kind==="video"&&b.video&&!E.project.playback.freeze){const u=Ai(E.project.playback.time,b.duration||b.video.duration||1,E.project.playback.mode,1,E.project.playback.loop);qc(b,u,{playing:E.project.playback.playing,freeze:E.project.playback.freeze,mode:E.project.playback.mode,speed:E.project.playback.speed})}if(!l)try{t.render(E.project,E.project.playback.time)}catch(b){E.patchUi({status:b instanceof Error?b.message:"render error"},!1)}n++,c-o>400&&(r=n*1e3/(c-o),o=c,n=0),lu(wa,r,E.project.playback.time),requestAnimationFrame(s)}requestAnimationFrame(s)}fu()})();
